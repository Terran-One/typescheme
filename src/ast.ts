import { Tuple } from "runtypes";

export class Node {
  constructor(public _parent: Node | null = null) {
  }

  setParentForChildren() {
    for (let key in this) {
      if (key !== '_parent' && this[key] instanceof Node) {
        // @ts-ignore
        this[key]._parent = this;
      }

      if (key !== '_parent' && this[key] instanceof List) {
        // @ts-ignore
        this[key].forEach((item: Node) => item._parent = this);
      }
    }
  }

  walkDescendantsDFS(): Node[] {
    let nodes: Node[] = [];
    for (let key in this) {
      if (key !== '_parent' && this[key] instanceof Node) {
        // @ts-ignore
        nodes.push(this[key]);
        // @ts-ignore
        nodes = nodes.concat(this[key].walkDescendantsDFS());
      }
    }
    return nodes;
  }

  walkDescendantsBFS(): Node[] {
    let nodes: Node[] = [];
    let queue: Node[] = [this];
    while (queue.length > 0) {
      let node = queue.shift()!;
      for (let key in node) {
        // @ts-ignore
        if (key !== '_parent' && node[key] instanceof Node) {
          // @ts-ignore
          nodes.push(node[key]);
          // @ts-ignore
          queue.push(node[key]);
        }
      }
    }
    return nodes;
  }

  descendantsWhere(predicate: (node: Node) => boolean): Node[] {
    return this.walkDescendantsDFS().filter(predicate);
  }

  nearestAncestorWhere(predicate: (node: Node) => boolean): Node | null {
    let node: Node | null = this;
    while (node !== null && !predicate(node)) {
      node = node._parent;
    }
    return node;
  }

  toData(): any {
    let data: any = {};
    for (let key in this) {
      if (key !== '_parent' && this[key] instanceof Node) {
        // @ts-ignore
        data[key] = this[key].toData();
      } else if (key !== '_parent' && this[key] instanceof List) {
        // @ts-ignore
        data[key] = this[key].toData();
      } else if (key !== '_parent') {
        // @ts-ignore
        data[key] = this[key];
      }
    }
    return { [this.constructor.name]: data };
  }

  /**
  * Checks if this node is subtype of (extends) the given type. 
  * @param {Node} node to compare
    */
  isSubtypeOf(other: Node): boolean {
    if (this.equals(other)) {
      return true;
    } else if (other.equals(Primitive.Any())) {
      return true;
    } else if (other.equals(Primitive.Never())) {
      return false; // precedence -- 'never' will still extend 'never'
    } else {
      return false;
    }
  }

  equals(other: Node): boolean {
    if (other instanceof Node) {
      return this.toData() === other.toData();
    }
    return false;
  }
}

export class List<T extends Node> extends Node implements Iterable<T> {
  constructor(public items: T[]) {
    super();
    this.setParentForChildren();
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items[Symbol.iterator]();
  }

  toData(): any {
    return {
      List: {
        items: this.items.map(item => item.toData())
      }
    }
  }

  walkDescendantsDFS(): Node[] {
    let nodes: Node[] = [];
    for (let item of this.items) {
      nodes.push(item);
      nodes = nodes.concat(item.walkDescendantsDFS());
    }
    return nodes;
  }

  walkDescendantsBFS(): Node[] {
    let nodes: Node[] = [];
    let queue: Node[] = this.items;
    while (queue.length > 0) {
      let node = queue.shift()!;
      for (let key in node) {
        // @ts-ignore
        if (key !== '_parent' && node[key] instanceof Node) {
          // @ts-ignore
          nodes.push(node[key]);
          // @ts-ignore
          queue.push(node[key]);
        }
      }
    }
    return nodes;
  }

  static empty<T extends Node>(): List<T> {
    return new List<T>([]);
  }

  static of<T extends Node>(items: T[]): List<T> {
    return new List<T>(items);
  }

  map<U>(fn: (element: T, index: number, array: T[]) => U): U[] {
    return this.items.map<U>(fn);
  }

  forEach(...params: Parameters<Array<T>['forEach']>): void {
    this.items.forEach(...params);
  }

  get length(): number {
    return this.items.length;
  }

  first(): T | undefined {
    if (this.length >= 1) {
      return this.items[0];
    }
    return undefined;
  }

  last(): T | undefined {
    if (this.length >= 1) {
      return this.items[this.length - 1];
    }
    return undefined;
  }

  rest(): T[] {
    if (this.length >= 1) {
      return this.items.slice(1);
    }
    return [];
  }

  at(index: number): T {
    return this.items[index];
  }

  every(predicate: (item: T) => boolean): boolean {
    return this.items.every(predicate);
  }

  some(predicate: (item: T) => boolean): boolean {
    return this.items.some(predicate);
  }

  slice(start?: number, end?: number): T[] {
    return this.items.slice(start, end);
  }

}

export type SExpr = Atom | List<SExpr> | IndexOf | ArrayOf | Call | Spread;
export type Atom = Primitive | Literal | Identifier;
export type Literal = BooleanLiteral | StringLiteral | NumberLiteral | TupleLiteral | ObjectLiteral

export class CompilationUnit extends Node {
  constructor(public sexprs: List<SExpr>) {
    super();
    this.setParentForChildren();
  }
}

export enum PrimitiveType {
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
  Never = 'never',
  Null = 'null',
  Undefined = 'undefined',
  Unknown = 'unknown',
  Object = 'object',
  Any = 'any',
}

export class ArrayOf extends Node {
  constructor(public ty: SExpr) {
    super();
    this.setParentForChildren();
  }
}

export class IndexOf extends Node {
  constructor(public ty: SExpr, public index: SExpr) {
    super();
    this.setParentForChildren();
  }
}

export class Call extends Node {
  constructor(public ty: SExpr, public args: List<SExpr>) {
    super();
    this.setParentForChildren();
  }
}

export class Spread extends Node {
  constructor(public ty: SExpr) {
    super();
    this.setParentForChildren();
  }
}

export class Primitive extends Node {
  constructor(public ty: PrimitiveType) {
    super();
    this.setParentForChildren();
  }

  static Never(): Primitive {
    return new Primitive(PrimitiveType.Never);
  }

  static Any(): Primitive {
    return new Primitive(PrimitiveType.Any);
  }

  static Null(): Primitive {
    return new Primitive(PrimitiveType.Null);
  }

  static Undefined(): Primitive {
    return new Primitive(PrimitiveType.Undefined);
  }

  static Object(): Primitive {
    return new Primitive(PrimitiveType.Object);
  }

  static String(): Primitive {
    return new Primitive(PrimitiveType.String);
  }

  static Number(): Primitive {
    return new Primitive(PrimitiveType.Number);
  }

  static Boolean(): Primitive {
    return new Primitive(PrimitiveType.Boolean);
  }

  static Unknown(): Primitive {
    return new Primitive(PrimitiveType.Unknown);
  }

}

export class Identifier extends Node {
  constructor(public text: string) {
    super();
    this.setParentForChildren();
  }
}

export class ObjectLiteral extends Node {
  constructor(public props: List<Prop>) {
    super();
    this.setParentForChildren();
  }
}

export class Prop extends Node {
  constructor(public key: Identifier, public value: SExpr) {
    super();
    this.setParentForChildren();
  }
}

export class TupleLiteral extends Node {
  constructor(public items: List<SExpr> = List.empty()) {
    super();
    this.setParentForChildren();
  }

  first(): TupleLiteral {
    let first = this.items.first();
    if (first) {
      return new TupleLiteral(List.of([first]));
    }
    return new TupleLiteral();
  }

  rest(): TupleLiteral {
    let rest = this.items.rest();
    return new TupleLiteral(List.of(rest));
  }

  last(): TupleLiteral {
    let last = this.items.last();
    if (last) {
      return new TupleLiteral(List.of([last]));
    }
    return new TupleLiteral();
  }

  // assumes simplified
  isSubtypeOf(other: Node): boolean {
    if (other instanceof TupleLiteral) {
      // base case: [] extends []
      if (this.items.length === 0 && this.items.length === other.items.length) {
        return true;
      }

      // base case: [a] extends [a]
      if (this.items.length === 1 && this.items.length === other.items.length) {
        return this.items.at(0)!.isSubtypeOf(other.items.at(0)!);
      }

      // setup
      let first = this.items.first();
      let rest = this.items.rest();
      let last = this.items.last();

      let otherFirst = other.items.first();
      let otherRest = other.items.rest();
      let otherLast = other.items.last();

      // check spreads
      if (first && first instanceof Spread) {
        // remove common first

        if (otherFirst && otherFirst instanceof Spread) {
          // [...number[], string, boolean] extends X = [...number[], string, boolean]
          // -> rest(this) extends rest(other)
          if (!this.rest().isSubtypeOf(other.rest())) {
            return false;
          }
          // -> first(this) extends first(other)
          if (!this.first().isSubtypeOf(other.first())) {
            return false;
          }
        } else if (otherLast && otherLast instanceof Spread) {
          // [...number[], boolean, string, string] extends X = [number, number, boolean, ...string[]]
          // -> last(this) extends last(other)
          // -> first(other) extends first(this)
          // -> [boolean, string, string] extends [boolean, ...string[]] (remove common first)
          // -> [...number[], boolean] extends [number, number, boolean] (remove common last)



          // -> [...number[]] extends [number, number, boolean]
          // -> [boolean, string, string] extends [...string[]]
          // -> [b] extends [c]
          let otherUpTilLast = new TupleLiteral(List.of(other.items.slice(0, other.items.length - 1)));
          if (!this.rest().isSubtypeOf(otherUpTilLast)) {
            return false;
          }
          if ()
        }

        // check if there are spreads

        if (otherFirst && otherFirst instanceof Spread) {
          // **NOTE:** this case is already handled by Expr upon
          // simplification by cg(env, TupleLiteral...)
          // if (first.ty instanceof TupleLiteral) {
          //   // check first items match
          //   for (let i = 0; i < first.ty.items.length; i++) {
          //     if (!this.items.at(i).isSubtypeOf(first.ty.items.at(i))) {
          //       return false;
          //     }
          //   }
          // }
          // [...number[], a, b, c]
          // first, check last items
          //   case 1: last item is also a spread
          //   e.g. [a, ...number[]] extends [...number[], a, b, c]

        } else if (other instanceof ArrayOf) {
          return this.items.every(item => item.isSubtypeOf(other));
        } else {
          return super.isSubtypeOf(other);
        }
      }
    }

    export class StringLiteral extends Node {
      constructor(public value: string) {
        super();
      }

      isSubtypeOf(other: Node): boolean {
        if (other.equals(Primitive.String())) {
          return true;
        } else {
          return super.isSubtypeOf(other);
        }
      }
    }

    export class BooleanLiteral extends Node {
      constructor(public value: boolean) {
        super();
      }

      isSubtypeOf(other: Node): boolean {
        if (other.equals(Primitive.Boolean())) {
          return true;
        } else {
          return super.isSubtypeOf(other);
        }
      }
    }

    export class NumberLiteral extends Node {
      constructor(public value: number) {
        super();
      }

      isSubtypeOf(other: Node): boolean {
        if (other.equals(Primitive.Number())) {
          return true;
        } else {
          return super.isSubtypeOf(other);
        }
      }
    }
