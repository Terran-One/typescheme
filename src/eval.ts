import {readFileSync} from 'fs';
import {Parser} from "./parser";
import * as AST from './ast';
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
	},

	'intersect': (env: any, ...types: AST.Node[]): AST.Node => {
		return cg(env, new AST.IntersectionOf(AST.List.of(types.map(t => cg(env, t)))));
	},

	'union': (env: any, ...types: AST.Node[]): AST.Node => {
		return cg(env, new AST.UnionOf(AST.List.of(types.map(t => cg(env, t)))));
	}
};

// aliases for builtins
builtins['=?'] = builtins['extends?'];
builtins['?='] = builtins['contains?'];

export function cg(env: any, ast: AST.Node): any {
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
	} else if (ast instanceof AST.ObjectLiteral) {
		let newProps: AST.Prop[] = [];
		for (let i = 0; i < ast.props.length; i++) {
			newProps.push(new AST.Prop(ast.props.at(i).key, cg(env, ast.props.at(i).value)));
		}
		return new AST.ObjectLiteral(AST.List.of(newProps));
	} else if (ast instanceof AST.Spread) {
		let ty = cg(env, ast.ty);
		if (ty instanceof AST.TupleLiteral || ty instanceof AST.ArrayOf) {
			return ty;
		} else {
			return new AST.Spread(ty);
		}
	} else if (ast instanceof AST.UnionOf) {
		let currentUnion: AST.Node = AST.Primitive.Never();
		for (let i = 0; i < ast.types.length; i++) {
			let x = cg(env, ast.types.at(i));
			currentUnion = currentUnion.union(x);
			if (currentUnion.equals(AST.Primitive.Any())) {
				return AST.Primitive.Any();
			}
		}
		return currentUnion;
	} else if (ast instanceof AST.IntersectionOf) {
		// Intersection, unlike union, should resolve to the most specific type.
		let currentIntersection: AST.Node = AST.Primitive.Any();
		for (let i = 0; i < ast.types.length; i++) {
			let x = cg(env, ast.types.at(i));
			console.log(`intersecting ${currentIntersection.toString()} with ${x.toString()} = ${currentIntersection.intersect(x)}`);
			currentIntersection = currentIntersection.intersect(x);
			if (currentIntersection.equals(AST.Primitive.Never())) {
				return AST.Primitive.Never();
			}
		}
		return currentIntersection;
	} else {
		return ast;
	}
}
