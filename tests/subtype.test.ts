import {
	run,
	union,
	t_boolean,
	t_string,
	t_any,
	t_number,
	arr,
	False,
	bool,
	num,
	list,
	spread,
	str,
	t_never,
	True,
	tuple,
	t_unknown,
	intersection,
	Primitives,
	Arb, assertProperty, implies, powerset
} from '../src/helpers';

import {
	Node, BooleanLiteral, NumberLiteral, StringLiteral
} from '../src/ast';

import * as fc from 'fast-check';

let env = {};


describe("Subtype", () => {

	beforeEach(() => {
		env = {};
	});

	it('all types are subtype of any', () => {
		assertProperty(Arb.native, (x: Node) => x.isSubtypeOf(t_any));
		assertProperty(Arb.arrayOf(), (x: Node) => x.isSubtypeOf(t_any));
	});

	it('no types are subtype of never', () => {
		assertProperty(Arb.native, (x: Node) => implies(!x.equals(t_never), !x.isSubtypeOf(t_never)));
	});

	it('literals are subtype of their Primitive type', () => {
		assertProperty(Arb.literal, (x: Node) => {
				return implies(x instanceof BooleanLiteral, x.isSubtypeOf(t_boolean)) &&
					implies(x instanceof NumberLiteral, x.isSubtypeOf(t_number)) &&
					implies(x instanceof StringLiteral, x.isSubtypeOf(t_string)); // TODO: need to add string literal arb
			}
		);
	});

	it('a subset of a union is a subtype of the union', () => {
		let items = [
			t_number,
			t_string,
			t_boolean,
			arr(t_number),
			tuple(t_number, t_string),
			arr(arr(arr(t_number))),
			tuple(tuple(t_number, t_string), t_boolean),
			arr(tuple(t_number, t_string)),
			tuple(arr(t_number), t_string, tuple(t_number, t_string)),
			union(t_number, t_string, t_boolean),
			intersection(t_number, t_string, t_boolean),
		];
		let original = union(...items);
		let subunions = powerset(items).map(x => union(...x));
		expect(subunions.every(x => x.isSubtypeOf(original))).toBeTruthy();
	});

	it('intersection: subtype contravariance', () => {
		let a = union(t_number, t_string);
		let b = union(t_number, t_string, t_boolean);
		console.log('a < b', a.isSubtypeOf(b));
		console.log('b < a', b.isSubtypeOf(a));
		console.log('a < a & b', a.isSubtypeOf(intersection(a, b)));
		console.log('b < a & b', b.isSubtypeOf(intersection(a, b)));
		console.log('a & b < a', intersection(a, b).isSubtypeOf(a));
		console.log('a & b < b', intersection(a, b).isSubtypeOf(b));
	});

	it('intersection: a subset of an intersection is a supertype of the intersection', () => {
		let items = [
			union(t_number, t_string, t_any),
			union(t_number, t_string, t_boolean),
		];
		let original = intersection(...items);
		let subintersections = powerset(items).map(x => intersection(...x));
		expect(subintersections.every(x => original.isSubtypeOf(x))).toBeTruthy();
	});

	it("should work", () => {
		run(`
			(define a (string | number))
			(define b (string | boolean))
			(define c (a & b))
		`);
	});

});

describe("Tuple", () => {
	beforeEach(() => {
		env = {};
	});

	it("isSubsetOf", () => {
		run(`
			(define a [string, string, ...(1 | 2)[], number, boolean, 1, 2, true, 1, 'hello', true, "world", "fair", ...("0" | "1")[]])
			(define b [...string[], ...number[], ...(boolean | number)[], 1, "hello", true, ...string[]])
			(define b2 [string, string, ...(string | number | boolean)[]])
			(define c (=? a b))
			(define c2 (=? a b2))
		`);
	});
});

