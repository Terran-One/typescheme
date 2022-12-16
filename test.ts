import {readFileSync} from 'fs';
import {Parser} from "./src/parser";
import * as AST from './src/ast';

const file = readFileSync('./test.types');
const tree = Parser.parse(file.toString());

function cg(env: any, ast: AST.Node) {
	if (ast instanceof AST.CompilationUnit) {

	}
}

console.log(JSON.stringify(tree.toData(), null, 2));

