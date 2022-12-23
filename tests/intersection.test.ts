import {
	configureRun,
	union,
	t_boolean,
	t_string,
	t_any,
	t_number,
	arr,
	False,
	bool,
	obj,
	num,
	list,
	spread,
	str,
	t_never,
	t_undefined,
	True,
	tuple,
	t_unknown,
	intersection,
	Primitives,
	Arb, assertProperty, implies, powerset, iff
} from '../src/helpers';

import {
	Node, BooleanLiteral, NumberLiteral, StringLiteral
} from '../src/ast';

import * as fc from 'fast-check';
import {cg} from "../src/eval";

let env: any = {};

let run = configureRun(() => {
	return env
}, (x: any) => {
	env = x;
});

describe("Intersection", () => {

	beforeEach(() => {
		env = {};
	});

	it('intersection of two intersections joins the two', () => {
		let a = intersection(t_number, t_string);
		let b = intersection(t_boolean, t_string, t_unknown);
		let c = a.intersect(b);
		expect([...c.types]).toEqual([t_number, t_string, t_boolean, t_string, t_unknown]);
	});

	it('intersecting a primitive with another primitive will be itself if they are equal', () => {
		assertProperty(Arb.primitive, Arb.primitive, (a: Node, b: Node) => {
			return implies(!a.equals(t_any) && !b.equals(t_any) && a.intersect(b).equals(a), a.equals(b));
		});

		assertProperty(Arb.primitive, Arb.primitive, (a: Node, b: Node) => {
			return implies(a.equals(b), a.intersect(b).equals(a));
		});
	});

	it('intersection is commutative between primitives', () => {
		assertProperty(Arb.primitive, Arb.primitive, (a: Node, b: Node) => {
			let x = cg(env, a.intersect(b));
			let y = cg(env, b.intersect(a));
			return x.equals(y);
		});
	});

	it('intersection between a literal and the primitive is the literal', () => {
		assertProperty(Arb.boolLiteral, (a: Node) => {
			return cg(env, a.intersect(t_boolean)).equals(a);
		});

		assertProperty(Arb.numberLiteral, (a: Node) => {
			return cg(env, a.intersect(t_number)).equals(a);
		});

		// TODO: string literal
	});

	it('intersection between a literal and a literal is the literal iff both are same', () => {
		assertProperty(Arb.boolLiteral, Arb.boolLiteral, (a: Node, b: Node) => {
			return iff(a.equals(b), cg(env, a.intersect(b)).equals(a));
		});

		assertProperty(Arb.numberLiteral, Arb.numberLiteral, (a: Node, b: Node) => {
			return iff(a.equals(b), cg(env, a.intersect(b)).equals(a));
		});
	});

	it('intersection between objects', () => {
		let a = obj({a: t_number, b: t_string});
		let b = obj({a: union(t_number, t_string), b: t_boolean});
		let x = cg(env, intersection(a, b));
		console.log(x.toString());
	})
});
