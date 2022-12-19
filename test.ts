import {readFileSync} from 'fs';
import {Parser} from "./src/parser";
import * as AST from './src/ast';
import _ from 'lodash';

const file = readFileSync('./test.types');
const tree = Parser.parse(file.toString());

const partialable = (numArgs: number, fn: Function) => {
	return (env: any, ...args: any[]): any => {
		if (args.length < numArgs) {
			return (e: any, ...restArgs: any[]) => fn(e, ...args, ...restArgs);
		} else {
			return fn(env, ...args);
		}
	}
}

const builtins: any = {
	'define': (env: any, sym: AST.Identifier | AST.List<AST.Identifier>, defn: AST.Node): any => {
		if (sym instanceof AST.List) { // function definition
			let fnName = sym.first();
			if (!fnName) {
				throw new Error(`function name expected but not found in function definition`);
			}
			let fnArgs = sym.rest();
			env[fnName!.text] = partialable(fnArgs.length, (e: any, ...args: AST.Node[]): any => {
				// eval all args first
				let locals: any = {...e};
				for (let i = 0; i < args.length; i++) {
					locals[fnArgs.at(i)!.text] = cg(locals, args[i]);
				}

				// run elements in definition
				return cg(locals, defn);
			});
		} else { // plain definition
			env[sym.text] = cg(env, defn);
		}
	},

	'if': (env: any, predicate: AST.Node, trueCase: AST.Node, falseCase?: AST.Node): any => {
		let pred = cg(env, predicate) as AST.BooleanLiteral;
		if (pred.value) {
			return cg(env, trueCase);
		}

		if (!falseCase) {
			return AST.Primitive.Never();
		} else {
			return cg(env, falseCase);
		}
	},

	'extends?': partialable(2, (env: any, a: AST.Node, b: AST.Node): AST.BooleanLiteral => {
		let resolvedA = cg(env, a);
		let resolvedB = cg(env, b);
		return new AST.BooleanLiteral(resolvedA.isSubtypeOf(resolvedB));
	}),

	'contains?': partialable(2, (env: any, a: AST.Node, b: AST.Node): AST.BooleanLiteral => {
		let resolvedA = cg(env, a);
		let resolvedB = cg(env, b);
		return new AST.BooleanLiteral(resolvedB.isSubtypeOf(resolvedA));
	}),

	'quote': (env: any, arg: AST.Node): AST.Node => {
		return new AST.Quoted(arg);
	},

	'eval': (env: any, arg: AST.Node): AST.Node => {
		let resolved = cg(env, arg);
		if (resolved instanceof AST.Quoted) {
			return cg(env, cg(env, resolved.value));
		} else {
			throw new Error(`eval expected a quoted expression but got ${arg}`);
		}
	},

	'cond': (env: any, ...cases: AST.List<AST.Node>[]): any => {
		for (const c of cases) {
			if (!(c instanceof AST.List)) {
				throw new Error(`cond case must be a list`);
			}
			let [predicate, result] = c.items;
			if (predicate instanceof AST.Identifier && predicate.text === 'else') {
				return cg(env, result);
			}
			let pred = cg(env, predicate) as AST.BooleanLiteral;
			if (pred.value) {
				return cg(env, result);
			}
		}
		return AST.Primitive.Never();
	}
};

// aliases for builtins
builtins['=?'] = builtins['extends?'];
builtins['?='] = builtins['contains?'];

function cg(env: any, ast: AST.Node): any {
	if (ast instanceof AST.Identifier) {
		let {text} = ast;
		if (text in builtins) {
			return builtins[text];
		} else if (text in env) {
			return cg(env, env[text]);
		} else {
			throw new Error(`unresolved symbol: ${text}`)
		}
	} else if (ast instanceof AST.List) {
		let op = cg(env, ast.first());
		let args = ast.rest();
		if (typeof op === 'function') {
			return op(env, ...args);
		} else {
			if (args.length !== 0) {
				throw new Error(`tried to call ${op} with ${args.length} - not a function`);
			}
			return op;
		}
	} else if (ast instanceof AST.CompilationUnit) {
		for (const s of ast.sexprs.items) {
			cg(env, s);
		}
		return env;
	} else if (ast instanceof AST.TupleLiteral) {
		let newItems: AST.Node[] = [];
		for (let i = 0; i < ast.items.length; i++) {
			let x = cg(env, ast.items.at(i));
			if (x instanceof AST.TupleLiteral) {
				newItems = [...newItems, ...x.items];
			} else if (x instanceof AST.ArrayOf) {
				newItems = [...newItems, new AST.Spread(x)];
			} else {
				newItems = [...newItems, x];
			}
		}
		// handle: [...number[]] -> number[]
		if (newItems.length === 1 && newItems[0] instanceof AST.Spread) {
			return newItems[0].ty;
		}
		return new AST.TupleLiteral(AST.List.of(newItems));
	} else if (ast instanceof AST.Spread) {
		let ty = cg(env, ast.ty);
		if (ty instanceof AST.TupleLiteral || ty instanceof AST.ArrayOf) {
			return ty;
		} else {
			return new AST.Spread(ty);
		}
	} else if (ast instanceof AST.UnionOf) {
		let newTypes: AST.SExpr[] = [];
		for (let i = 0; i < ast.types.length; i++) {
			let x = cg(env, ast.types.at(i));
			let currUnion = new AST.UnionOf(AST.List.of(newTypes));
			if (x.equals(AST.Primitive.Any())) {
				return AST.Primitive.Any();
			} else if (x instanceof AST.UnionOf) {
				let nonIntersecting = newTypes.filter(t => !t.isSubtypeOf(x));
				newTypes = [...nonIntersecting, ...x.types.map(t => cg(env, t)).filter(t => !t.isSubtypeOf(currUnion))];
			} else {
				if (x.isSubtypeOf(currUnion)) {
					continue; // skip
				}
				let nonIntersecting = newTypes.filter(t => !t.isSubtypeOf(x));
				newTypes = [...nonIntersecting, x];
			}
		}
		return new AST.UnionOf(AST.List.of(newTypes));
	} else if (ast instanceof AST.IntersectionOf) {
		// Intersection, unlike union, should resolve to the most specific type.
		let currentIntersection: AST.Node = AST.Primitive.Any();
		for (let i = 0; i < ast.types.length; i++) {
			let x = cg(env, ast.types.at(i));
			if (x.equals(AST.Primitive.Never())) {
				return AST.Primitive.Never();
			} else if (x instanceof AST.IntersectionOf) {
				for (let t of x.types) {
					if (!t.isSubtypeOf(currentIntersection)) {
						return AST.Primitive.Never();
					} else {
						// t extends currentIntersection, but we want to check if more specific
						if (!currentIntersection.isSubtypeOf(t)) {
							currentIntersection = t;
						}
						// otherwise, currentIntersection is already the most specific type
					}
				}
			} else {
				if (!x.isSubtypeOf(currentIntersection)) {
					return AST.Primitive.Never();
				} else {
					// x extends currentIntersection, but we want to check if more specific
					if (!currentIntersection.isSubtypeOf(x)) {
						currentIntersection = x;
					}
					// otherwise, currentIntersection is already the most specific type
				}
			}
		}
		return currentIntersection;
	} else {
		return ast;
	}
}

let env: any = {};
let {Lens} = cg(env, tree);
console.log(env);
console.log(env['test3'].toString());
