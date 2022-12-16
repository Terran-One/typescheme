import {TypeSchemeParser} from './grammar/TypeSchemeParser';
import {TypeSchemeLexer} from './grammar/TypeSchemeLexer';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {TypeSchemeASTVisitor} from "./visitor";
import * as AST from './ast';

export class Parser {
	constructor(public _lexer: TypeSchemeLexer, public _parser: TypeSchemeParser) {
	}

	public buildAST(): AST.CompilationUnit {
		let tree = this._parser.compilationUnit();
		let visitor = new TypeSchemeASTVisitor();
		return visitor.visitCompilationUnit(tree);
	}

	public static fromString(source: string): Parser {
		let antlrLexer = new TypeSchemeLexer(CharStreams.fromString(source));
		let antlrParser = new TypeSchemeParser(new CommonTokenStream(antlrLexer));
		return new Parser(antlrLexer, antlrParser);
	}

	public static parse(source: string): AST.CompilationUnit {
		return Parser.fromString(source).buildAST();
	}

}
