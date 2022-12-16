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
				console.log(this[key]);
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
		return {[this.constructor.name]: data};
	}
}


export class List<T extends Node> extends Node {
	constructor(public items: T[]) {
		super();
		this.setParentForChildren();
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

	map<U>(fn: (item: T) => U): U[] {
		return this.items.map(fn);
	}

	forEach(fn: (item: T) => void): void {
		this.items.forEach(fn);
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
	constructor(public items: List<SExpr>) {
		super();
		this.setParentForChildren();
	}
}

export class StringLiteral extends Node {
	constructor(public value: string) {
		super();
	}
}

export class BooleanLiteral extends Node {
	constructor(public value: boolean) {
		super();
	}
}

export class NumberLiteral extends Node {
	constructor(public value: number) {
		super();
	}
}
