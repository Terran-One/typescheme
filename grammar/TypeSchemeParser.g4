parser grammar TypeSchemeParser;

options {
	tokenVocab = TypeSchemeLexer;
}

compilationUnit: WS? (sexpr WS?)* EOF;


sexpr: atom # T_Atom
	| LPAREN WS* sexpr WS* RPAREN # T_Grouped
	| QUOTE sexpr # T_Quoted
	| sexpr LBRACK RBRACK # T_Array
	| sexpr WS* BAR WS* sexpr # T_Bar
	| sexpr WS* AMP WS* sexpr # T_Amp
	| sexpr LBRACK (arg=sexpr) RBRACK # T_Indexed
	| sexpr LANGL (args+=sexpr (COMMA args+=sexpr)*) RANGL # T_Call
	| list # T_List
	| SPREAD sexpr # T_Spread;

atom: primitive
	| literal
	| identifier;

list: LPAREN WS* (sexpr WS*)+ WS* RPAREN;

primitive: NUMBER | STRING | BOOLEAN | NEVER | NULL | UNDEFINED | UNKNOWN | OBJECT | ANY;
literal: BooleanLiteral | StringLiteral | NumberLiteral | tupleLiteral | objectLiteral;
tupleLiteral: LBRACK WS* ((items += sexpr) WS* (COMMA WS* items += sexpr)*)? WS* RBRACK;
objectLiteral: LBRACE WS* ((props += objectProp) WS* (COMMA WS* props += objectProp)*)? WS* RBRACE;
objectProp: (key=identifier) WS* COLON WS* (value=sexpr);

identifier: Identifier | reservedKeyword;
reservedKeyword: KEYOF | INFER | IN | AS | EXTENDS | EXTENDS_Q | IN_Q | IF;
