parser grammar TypeSchemeParser;

options {
	tokenVocab = TypeSchemeLexer;
}

compilationUnit: sexpr* EOF;

sexpr: atom # T_Atom
	| list # T_List
	| sexpr LBRACK (arg=sexpr) RBRACK # T_Indexed
	| sexpr LBRACK RBRACK # T_Array
	| sexpr LANGL (args+=sexpr (COMMA args+=sexpr)*) RANGL # T_Call
	| SPREAD sexpr # T_Spread;

atom: primitive
	| literal
	| identifier;

list: LPAREN sexpr+ RPAREN;

primitive: NUMBER | STRING | BOOLEAN | NEVER | NULL | UNDEFINED | UNKNOWN | OBJECT | ANY;
literal: BooleanLiteral | StringLiteral | NumberLiteral | tupleLiteral | objectLiteral;
tupleLiteral: LBRACK ((items += sexpr) (COMMA items += sexpr)*)? RBRACK;
objectLiteral: LBRACE ((props += objectProp) (COMMA props += objectProp)*)? RBRACE;
objectProp: (key=identifier) COLON (value=sexpr);

identifier: Identifier | reservedKeyword;
reservedKeyword: KEYOF | INFER | IN | AS | EXTENDS | EXTENDS_Q | IN_Q | IF;
