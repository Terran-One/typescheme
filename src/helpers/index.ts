import {
	UnionOf,
	List,
	IntersectionOf,
	Primitive,
	NumberLiteral,
	BooleanLiteral,
	TupleLiteral,
	StringLiteral,
	Spread, ArrayOf, Node
} from '../ast';

import {cg} from '../eval';
import {Parser} from '../parser';

import * as fc from 'fast-check';
import {Arbitrary} from "fast-check";

export function run(source: string, env?: any): any {
	return cg(env || {}, Parser.parse(source));
}

export function union(...types: any[]): any {
	return new UnionOf(List.of(types));
}

export function intersection(...types: any[]): any {
	return new IntersectionOf(List.of(types));
}

export function num(x: number) {
	return new NumberLiteral(x);
}

export function bool(x: boolean) {
	return new BooleanLiteral(x);
}

export function str(x: string) {
	return new StringLiteral(x);
}

export function list(...items: any[]) {
	return List.of(items);
}

export function tuple(...items: any[]) {
	return new TupleLiteral(list(...items));
}

export function spread(x: any) {
	return new Spread(x);
}

export function arr(x: any) {
	return new ArrayOf(x);
}

export function assertProperty(...args: [...any[], (...x: any[]) => boolean]) {
	// @ts-ignore
	return fc.assert(fc.property(...args));
}

export function implies(a: boolean, b: boolean) {
	return !a || b;
}

export function powerset<T extends any[] | List<any> | TupleLiteral>(a: T): T[] {
	if (Array.isArray(a)) {
		let inclusionVec = a.map(x => false);
		let subsets: Array<T> = [];
		while (true) {
			let subset: Array<any> = [];
			for (let i = 0; i < a.length; i++) {
				if (inclusionVec[i]) {
					subset.push(a[i]);
				}
			}
			subsets.push(subset as T);
			let i = 0;
			while (i < inclusionVec.length && inclusionVec[i]) {
				inclusionVec[i] = false;
				i++;
			}
			if (i >= inclusionVec.length) {
				break;
			}
			inclusionVec[i] = true;
		}
		return subsets;
	} else if (a instanceof List) {
		let subsets = [];
		let itemsSubsets = powerset(a.items);
		for (let s of itemsSubsets) {
			subsets.push(List.of(s));
		}
		return subsets as T[];
	} else if (a instanceof TupleLiteral) {
		let subsets: any = [];
		let itemSubsets = powerset(a.items);
		for (let s of itemSubsets) {
			subsets.push(new TupleLiteral(s));
		}
		return subsets as any;
	} else {
		throw new Error("Unexpected type");
	}
}

export const t_number = Primitive.Number();
export const t_string = Primitive.String();
export const t_boolean = Primitive.Boolean();
export const t_any = Primitive.Any();
export const t_never = Primitive.Never();
export const t_unknown = Primitive.Unknown();

export const Primitives = [t_number, t_string, t_boolean, t_any, t_never, t_unknown];

export namespace Arb {
	export const primitive = fc.integer({min: 0, max: Primitives.length - 1}).map(x => Primitives[x]);
	export const boolLiteral = fc.boolean().map(x => bool(x));
	export const numberLiteral = fc.integer().map(x => num(x));

	export const literal = fc.oneof(boolLiteral, numberLiteral);

	export const native = fc.oneof(literal, primitive);

	export const listOf = (arb = native) => fc.array(arb, {size: 'xlarge'}).map(x => List.of(x));

	export const arrayOf = (arb = native) => arb.map(x => arr(x));

	export const tupleLiteral = (arb = listOf()) => arb.map(x => tuple(...x));

	export const subsetsOf = <T extends any[] | List<any> | TupleLiteral>(arb: Arbitrary<T>) => arb.map(x => powerset(x));

	export const unionOf = (arb = listOf()) => arb.map(x => union(...x));

	export enum QuoteType {
		SINGLE,
		DOUBLE,
		BACKTICK
	}

}
export const True = bool(true);
export const False = bool(false);

export namespace X {
	export function is(x: any) {
		expect(x).toEqual(True);
	}

	export function isnt(x: any) {
		expect(x).toEqual(False);
	}

	export function sub(x: Node, y: Node) {
		expect(x.isSubtypeOf(y)).toEqual(true);
	}

	export function sup(x: Node, y: Node) {
		expect(y.isSubtypeOf(x)).toEqual(true);
	}

	export function compat(x: Node, y: Node) {
		expect(x.isCompatible(y)).toEqual(true);
	}
}
