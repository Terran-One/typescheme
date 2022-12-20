import {cg} from '../src/eval';
import {Parser} from '../src/parser';
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
} from '../src/ast';

let env: any = {};

function run(source: string): any {
	return cg(env, Parser.parse(source));
}

function union(...types: any[]): any {
	return new UnionOf(List.of(types));
}

function intersection(...types: any[]): any {
	return new IntersectionOf(List.of(types));
}

function num(x: number) {
	return new NumberLiteral(x);
}

function bool(x: boolean) {
	return new BooleanLiteral(x);
}

function str(x: string) {
	return new StringLiteral(x);
}

function list(...items: any[]) {
	return List.of(items);
}

function tuple(...items: any[]) {
	return new TupleLiteral(list(...items));
}

function spread(x: any) {
	return new Spread(x);
}

function arr(x: any) {
	return new ArrayOf(x);
}


const t_number = Primitive.Number();
const t_string = Primitive.String();
const t_boolean = Primitive.Boolean();
const t_any = Primitive.Any();
const t_never = Primitive.Never();
const t_unknown = Primitive.Unknown();
const True = bool(true);
const False = bool(false);

function expectBoolTrue(x: any) {
	expect(x).toEqual(True);
}

function expectBoolFalse(x: any) {
	expect(x).toEqual(False);
}

function expectEnv(x: string) {
	return expect(env[x]);
}

function expectEnvString(x: string) {
	return expectEnv(env[x].toString());
}

function expectExtends(x: Node, y: Node) {
	expect(x.isSubtypeOf(y)).toEqual(true);
}

describe("Union & Intersection", () => {

	beforeEach(() => {
		env = {};
	});

	it('subtyping', () => {
		expectExtends(t_boolean, union(t_number, t_boolean));
		expectExtends(t_any, union(t_number, t_boolean));
		expectExtends(union(t_number, t_boolean), union(t_number, t_boolean, t_string));
	});

	it("should work", () => {
		run(`
			(define a (string | number))
			(define b (string | boolean))
			(define c (a & b))
		`);
		expectEnvString('a').toEqual('string | number');
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
		console.log(env['c'].toString());
		console.log(env['c2'].toString());
	});
});
