import * as _ from 'lodash';
import {NFA} from "./fsm";


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
		return {[this.constructor.name]: data};
	}

	/**
	 * Checks if this node is a subtype of the given type or
	 * if this node is a supertype of the given type.
	 * @param other
	 */
	isCompatible(other: Node): boolean {
		return this.isSubtypeOf(other) || other.isSubtypeOf(this);
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
		} else if (other instanceof UnionOf) {
			if (other.types.length === 0) {
				return false;
			}
			let res = other.types.some(t => this.isSubtypeOf(t));
			return res;
		} else if (other instanceof IntersectionOf) {
			if (other.types.length === 0) {
				return true;
			}
			return other.types.every(t => this.isSubtypeOf(t));
		} else {
			return false;
		}
	}

	equals(other: Node): boolean {
		if (other instanceof Node) {
			return _.isEqual(this.toData(), other.toData());
		}
		return false;
	}

	toString(): string {
		return "<Node>";
	}

	intersect(other: Node): Node {
		if (this.equals(other)) {
			return this;
		} else if (other.equals(Primitive.Any())) {
			return this;
		} else if (other.equals(Primitive.Never())) {
			return other;
		} else if (other instanceof IntersectionOf || other instanceof UnionOf) {
			return other.intersect(this);
		} else {
			return new IntersectionOf(List.of([this, other]));
		}
	}

	union(other: Node): Node {
		if (this.equals(other)) {
			return this;
		} else if (other.equals(Primitive.Any())) {
			return other;
		} else if (other.equals(Primitive.Never())) {
			return this;
		} else if (other instanceof UnionOf || other instanceof IntersectionOf) {
			return other.union(this);
		} else {
			return new UnionOf(List.of([other, this]));
		}
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

	every(predicate: (item: T, index: number) => boolean): boolean {
		return this.items.every(predicate);
	}

	some(predicate: (item: T) => boolean): boolean {
		return this.items.some(predicate);
	}

	slice(start?: number, end?: number): T[] {
		return this.items.slice(start, end);
	}

	toString(): string {
		return `(${this.items.map(item => item.toString()).join(' ')})`;
	}

}

export type SExpr = Atom | List<SExpr> | IndexOf | ArrayOf | UnionOf | IntersectionOf | Call | Spread;
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
	constructor(public ty: Node) {
		super();
		this.setParentForChildren();
	}

	isSubtypeOf(other: Node): boolean {
		if (other instanceof ArrayOf) {
			return this.ty.isSubtypeOf(other.ty);
		} else {
			return super.isSubtypeOf(other);
		}
	}

	toString(): string {
		return `${this.ty.toString()}[]`;
	}

	intersect(other: Node): Node {
		if (other instanceof ArrayOf) {
			return new ArrayOf(this.ty.intersect(other.ty));
		} else if (other instanceof TupleLiteral) {
			return other.intersect(this);
		} else {
			return super.intersect(other);
		}
	}
}

export class UnionOf extends Node {
	constructor(public types: List<Node> = List.empty()) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `(${this.types.map(t => t.toString()).join(' | ')})`;
	}

	intersect(other: Node): Node {
		// (A | B) & (C | D) = (A & C) | (A & D) | (B & C) | (B & D)
		if (other instanceof UnionOf) {
			let intersections: Node[] = [];
			for (let a of this.types) {
				for (let b of other.types) {
					let i = a.intersect(b);
					if (!i.equals(Primitive.Never())) {
						intersections.push(i);
					}
				}
			}
			return new UnionOf(List.of(intersections));
		} else if (other instanceof IntersectionOf) {
			// (A | B) & (C & D) = (A & C & D) | (B & C & D)
			let intersections: Node[] = [];
			for (let a of this.types) {
				let i = a.intersect(other);
				if (!i.equals(Primitive.Never())) {
					intersections.push(i);
				}
			}
			return new UnionOf(List.of(intersections));
		} else {
			return super.intersect(other);
		}
	}

	union(other: Node): Node {
		if (other instanceof UnionOf) {
			// (A | B) | (C | D) = (A | B | C | D)
			return new UnionOf(List.of(this.types.items.concat(other.types.items)));
		} else if (other instanceof IntersectionOf) {
			// (A | B) | (C & D) = (A | C & D) | (B | C & D)
			let unions: Node[] = [];
			for (let a of this.types) {
				let u = a.union(other);
				if (!u.equals(Primitive.Never())) {
					unions.push(u);
				}
			}
			return new UnionOf(List.of(unions));
		} else {
			return super.union(other);
		}
	}
}

export class IntersectionOf extends Node {
	constructor(public types: List<Node> = List.empty()) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `(${this.types.map(t => t.toString()).join(' & ')})`;
	}

	intersect(other: Node): Node {
		// (A & B) & (C & D) = (A & B & C & D)
		if (other instanceof IntersectionOf) {
			return new IntersectionOf(List.of(this.types.items.concat(other.types.items)));
		} else if (other instanceof UnionOf) {
			// (A & B) & (C | D) = (A & C | A & D) & (B & C | B & D)
			let intersections: Node[] = [];
			for (let a of this.types) {
				let i = a.intersect(other);
				if (!i.equals(Primitive.Never())) {
					intersections.push(i);
				}
			}
			return new IntersectionOf(List.of(intersections));
		} else {
			return super.intersect(other);
		}
	}

	union(other: Node): Node {
		if (other instanceof IntersectionOf) {
			// (A & B) | (C & D) = (A | C | D) & (B | C | D)
			return new IntersectionOf(List.of(this.types.items.concat(other.types.items)));
		} else if (other instanceof UnionOf) {
			// (A & B) | (C | D) = (A | C | D) & (B | C | D)
			let unions: Node[] = [];
			for (let a of this.types) {
				let u = a.union(other);
				if (!u.equals(Primitive.Never())) {
					unions.push(u);
				}
			}
			return new IntersectionOf(List.of(unions));
		} else {
			return super.union(other);
		}
	}
}


export class IndexOf extends Node {
	constructor(public ty: SExpr, public index: SExpr) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `${this.ty.toString()}[${this.index.toString()}]`;
	}
}

export class Call extends Node {
	constructor(public ty: SExpr, public args: List<SExpr>) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `${this.ty.toString()}<${this.args.map(arg => arg.toString()).join(', ')}>`;
	}
}

export class Spread extends Node {
	constructor(public ty: Node) {
		super();
		this.setParentForChildren();
	}

	isSubtypeOf(other: Node): boolean {
		if (other instanceof Spread) {
			return this.ty.isSubtypeOf(other.ty);
		} else if (other instanceof TupleLiteral) {
			return this.ty.isSubtypeOf(other);
		} else if (other instanceof ArrayOf) {
			return this.ty.isSubtypeOf(other);
		} else {
			return super.isSubtypeOf(other);
		}
	}

	// does this spread include the given type?
	includes(other: Node): boolean {
		if (this.ty instanceof ArrayOf) {
			if (other instanceof Spread) {
				return other.isSubtypeOf(this);
			} else {
				return other.isSubtypeOf(this.ty.ty);
			}
		} else {
			throw new Error('not implemented');
		}
	}

	intersect(other: Node): Node {
		if (other instanceof Spread) {
			return new Spread(this.ty.intersect(other.ty));
		} else {
			return super.intersect(other);
		}
	}

	toString(): string {
		return `...${this.ty.toString()}`;
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

	toString(): string {
		return this.ty;
	}

}

export class Identifier extends Node {
	constructor(public text: string) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return this.text;
	}
}

export class ObjectLiteral extends Node {
	constructor(public props: List<Prop>) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `{${this.props.map(p => p.toString()).join(', ')}}`;
	}

	intersect(other: Node): Node {
		return super.intersect(other);
	}

	isSubtypeOf(other: Node): boolean {
		if (other instanceof ObjectLiteral) {
			return this.props.every(p => other.props.some(p2 => p2.isSubtypeOf(p)));
		} else {
			return super.isSubtypeOf(other);
		}
	}
}

export class Prop extends Node {
	constructor(public key: Identifier, public value: Node) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `${this.key.toString()}: ${this.value.toString()}`;
	}

	intersect(other: Node): Node {
		if (other instanceof Prop) {
			return new Prop(this.key, this.value.intersect(other.value));
		} else {
			return super.intersect(other);
		}
	}

	isSubtypeOf(other: Node): boolean {
		if (other instanceof Prop) {
			return this.key.text === other.key.text && this.value.isSubtypeOf(other.value);
		} else {
			return super.isSubtypeOf(other);
		}
	}
}

export class Quoted extends Node {
	constructor(public value: Node) {
		super();
		this.setParentForChildren();
	}

	toString(): string {
		return `'${this.value.toString()}`;
	}

	intersect(other: Node): Node {
		throw new Error('not implemented');
	}
}

export type PatternExpr = OneOf | AnyOf;

export class OneOf {
	constructor(public item: Node) {
	}

	toString(): string {
		return this.item.toString();
	}

	matches(other: Node): boolean {
		return other.isSubtypeOf(this.item);
	}
}

export class AnyOf {
	constructor(public item: Node) {
	}

	toString(): string {
		return `${this.item.toString()}*`;
	}

	matches(other: Node): boolean {
		if (other instanceof Spread) {
			return (other.ty as ArrayOf).ty.isSubtypeOf(this.item);
		} else {
			return other.isSubtypeOf(this.item);
		}
	}
}

interface TuplePatternPayload {
	nextExpr: PatternExpr
}

export class TuplePattern {

	public nfa: NFA<TuplePatternPayload>;

	constructor(public exprs: PatternExpr[]) {
		this.nfa = new NFA<TuplePatternPayload>();
		this.nfa.setTransitionFn((transition, input, currentStates) => {
			for (let i = 0; i < currentStates.length; i++) {
				let state = currentStates[i];
				let {payload} = state;
				if (payload) {
					if (payload.nextExpr.matches(input)) {
						transition(payload.nextExpr.item);
					}
				}
			}
		});

		let prevState = this.nfa.addState("<start>");

		for (let i = 0; i < this.exprs.length; i++) {
			let expr = exprs[i];
			let state = this.nfa.addState(`${this.nfa.states[i].name} -> ${expr.toString()}`);
			prevState.payload = {nextExpr: expr};
			if (expr instanceof OneOf) {
				prevState.addTransition(expr.item, state.id);
			}

			if (expr instanceof AnyOf) {
				prevState.addTransition(expr.item, state.id);
				prevState.addTransition(null, state.id);
				state.addTransition(expr.item, state.id); // self loop
			}
			prevState = state;
		}
		this.nfa.states[this.nfa.states.length - 1].accepting = true;
	}

	static fromTuple(ty: TupleLiteral): TuplePattern {
		return new TuplePattern(ty.items.map(item => {
			if (item instanceof Spread && item.ty instanceof ArrayOf) {
				return new AnyOf(item.ty.ty);
			} else {
				return new OneOf(item);
			}
		}));
	}

	matches(tup: TupleLiteral): boolean {
		this.nfa.start();
		for (let item of tup.items) {
			this.nfa.consume(item);
		}
		return this.nfa.isAccepting();
	}

	toString(): string {
		return `Pattern(${this.exprs.map(e => e.toString()).join(', ')})`;
	}
}

export class TupleLiteral extends Node {
	constructor(public items: List<Node> = List.empty()) {
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

	slice(start?: number, end?: number): TupleLiteral {
		return new TupleLiteral(List.of(this.items.slice(start, end)));
	}

	// assumes simplified
	isSubtypeOf(other: Node): boolean {
		// approach - construct a DFA representation of other, and try to match
		// this against it. similar to regex implementation.
		// note: both TupleLiterals are assumed to be in canonical form, which
		// can be done by evaluating both sides of the subtype relation.
		if (other instanceof TupleLiteral) {
			let pattern = TuplePattern.fromTuple(other);
			return pattern.matches(this);
		} else if (other instanceof ArrayOf) {
			for (const item of this.items) {
				if (item instanceof Spread) {
					if (!item.isSubtypeOf(other)) {
						return false;
					}
				} else {
					if (!item.isSubtypeOf(other.ty)) {
						return false;
					}
				}
			}
			return true;
		} else {
			return super.isSubtypeOf(other);
		}
	}

	intersect(other: Node): Node {
		if (other instanceof IntersectionOf) {
			return other.intersect(this);
		} else if (other instanceof TupleLiteral) {
			if (this.items.length === 0 && this.items.length === other.items.length) {
				return this;
			}
			if (this.items.length === 1 && this.items.length === other.items.length) {
				return new TupleLiteral(List.of([
					this.items.at(0)!.intersect(other.items.at(0)!)
				]));
			}

			let newTypes = [];

			// resolve spreads
			let t: TupleLiteral = this;
			let o: TupleLiteral = other;
			let result: List<SExpr> = List.empty();

			let first = t.items.first();
			let otherFirst = o.items.first();

			if (otherFirst) {
				if (otherFirst instanceof Spread) {
					if (first && first instanceof Spread && !otherFirst.includes(first)) {
						return Primitive.Never();
					}
					while (t.items.first() && otherFirst.includes(t.items.first()!)) {
						newTypes.push(t.items.first()!.intersect(otherFirst));
						t = t.rest(); // clobber all that match
					}
				} else {
					if (!first || !first.isSubtypeOf(otherFirst)) {
						return Primitive.Never();
					}
					newTypes.push(first.intersect(otherFirst));
				}
				o = o.rest();
				let intersectionRest = t.intersect(o) as TupleLiteral | Primitive;
				if (intersectionRest.equals(Primitive.Never())) {
					return Primitive.Never();
				} else {
					return new TupleLiteral(List.of([...newTypes, ...(intersectionRest as TupleLiteral).items.items]));
				}
			}

			let last = t.items.last();
			let otherLast = o.items.last();

			if (otherLast) {
				if (otherLast instanceof Spread) {
					if (last && last instanceof Spread && !otherLast.includes(last)) {
						return Primitive.Never();
					}

					while (t.items.last() && otherLast.includes(t.items.last()!)) {
						newTypes.push(t.items.last()!.intersect(otherLast));
						t = t.slice(0, t.items.length - 1); // clobber all that match
					}
				} else {
					if (!last || !last.isSubtypeOf(otherLast)) {
						return Primitive.Never();
					}
					newTypes.push(last.intersect(otherLast));
				}
				o = o.slice(0, o.items.length - 1);
				let intersectionRest = t.intersect(o) as TupleLiteral | Primitive;
				if (intersectionRest.equals(Primitive.Never())) {
					return Primitive.Never();
				} else {
					return new TupleLiteral(List.of([...newTypes, ...(intersectionRest as TupleLiteral).items.items]));
				}
			}
			return Primitive.Never();
		} else if (other instanceof ArrayOf) {
			if (this.isSubtypeOf(other)) {
				return this;
			} else {
				return Primitive.Never();
			}
		} else {
			return super.intersect(other);
		}
	}

	toString(): string {
		return `[${this.items.map(item => item.toString()).join(', ')}]`;
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

	toString(): string {
		return `${this.value.toString()}`;
	}

	intersect(other: Node): Node {
		if (other instanceof StringLiteral) {
			if (this.value === other.value) {
				return this;
			} else {
				return Primitive.Never();
			}
		} else if (other.equals(Primitive.String())) {
			return this;
		} else {
			return super.intersect(other);
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

	toString(): string {
		return this.value.toString();
	}

	intersect(other: Node): Node {
		if (other instanceof BooleanLiteral) {
			return this;
		} else if (other.equals(Primitive.Boolean())) {
			return this;
		} else {
			return Primitive.Never();
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

	toString(): string {
		return this.value.toString();
	}

	intersect(other: Node): Node {
		if (other instanceof NumberLiteral) {
			if (this.value === other.value) {
				return this;
			} else {
				return Primitive.Never();
			}
		} else if (other.equals(Primitive.Number())) {
			return this;
		} else {
			return super.intersect(other);
		}
	}
}
