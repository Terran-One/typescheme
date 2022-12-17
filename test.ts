import { readFileSync } from 'fs';
import { Parser } from "./src/parser";
import * as AST from './src/ast';

const file = readFileSync('./test.types');
const tree = Parser.parse(file.toString());

const builtins: any = {
  'define': (env: any, sym: AST.Identifier | AST.List<AST.Identifier>, defn: AST.Node): any => {
    if (sym instanceof AST.List) { // function definition
      let fnName = sym.first();
      if (!fnName) {
        throw new Error(`function name expected but not found in function definition`);
      }
      let fnArgs = sym.rest();
      env[fnName!.text] = (e: any, ...args: AST.Node[]): any => {
        // make partial function
        if (args.length < fnArgs.length) {
          console.log(`making partial of ${fnName!.text} ${args.length} (total ${fnArgs.length})`);
          return (e: any, ...partialArgs: AST.Node[]) => env[fnName!.text](e, ...args, ...partialArgs);
        }

        // eval all args first
        let locals: any = { ...e };
        console.log(locals);
        for (let i = 0; i < args.length; i++) {
          console.log({ i, args });
          locals[fnArgs.at(i)!.text] = cg(locals, args[i]);
        }
        console.log(locals);

        // run elements in definition
        return cg(locals, defn);
      }
    } else { // plain definition
      env[sym.text] = defn;
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

  'extends?': (env: any, a: AST.Node, b: AST.Node): AST.BooleanLiteral => {
    let resolvedA = cg(env, a);
    let resolvedB = cg(env, b);
    console.log({ resolvedA, resolvedB });
    return resolvedA.isSubtypeOf(resolvedB);
  }
};

function cg(env: any, ast: AST.Node): any {
  if (ast instanceof AST.Identifier) {
    let { text } = ast;
    if (text in builtins) {
      return builtins[text];
    } else if (text in env) {
      return env[text];
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
    for (const s of ast.sexprs) {
      cg(env, s);
    }
    return env;
  } else if (ast instanceof AST.TupleLiteral) {
    let newItems: AST.SExpr[] = [];
    for (let i = 0; i < ast.items.length; i++) {
      // expand spreads that are tuple
      let item = ast.items.at(i);
      if (item instanceof AST.Spread && item.ty instanceof AST.TupleLiteral) {
        newItems = [...newItems, ...item.ty.items.map((x: AST.SExpr) => cg(env, x))];
      } else {
        newItems = [...newItems, cg(env, item)];
      }
    }
    // handle: [...number[]] -> number[]
    if (newItems.length === 1 && newItems[0] instanceof AST.Spread) {
      return newItems[0].ty;
    }
    return new AST.TupleLiteral(AST.List.of(newItems));
  } else {
    return ast;
  }
}

let env = {};
let { Lens } = cg(env, tree);
console.log(env);