lexer grammar TypeSchemeLexer;

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
LANGL: '<';
RANGL: '>';
EQUALS: '=';
NEQ: '!=';
COLON: ':';
COMMA: ',';
SPREAD: '...';
DOT: '.';
WS: [ \r\n\t]+ -> skip;

// operators
KEYOF: 'keyof';
INFER: 'infer';
IN: 'in';
AS: 'as';
EXTENDS: 'extends';
EXTENDS_Q: 'extends?';
IN_Q: 'in?';
IF: 'if';

// TypeScript types
NEVER: 'never';
NULL: 'null';
UNDEFINED: 'undefined';
UNKNOWN: 'unknown';
OBJECT: 'object';
ANY: 'any';

// primitives
STRING: 'string';
NUMBER: 'number';
BOOLEAN: 'boolean';

// literals
BooleanLiteral: 'true' | 'false';

StringLiteral: SingleQuotedStringLiteral | DoubleQuotedStringLiteral | BacktickStringLiteral;
SingleQuotedStringLiteral: '\'' (EscapeSequence | ~["'\\]) '\'';
DoubleQuotedStringLiteral: '"' (EscapeSequence | ~["'\\]) '"';
BacktickStringLiteral: '`' (EscapeSequence | ~["'\\]) '`';
EscapeSequence: '\\' (["\\/bfnrt] | UnicodeEscapeSequence);
UnicodeEscapeSequence: 'u' HexLiteral HexLiteral HexLiteral HexLiteral;
// TODO: template strings

// number literal could be hex, octal, binary, decimal
NumberLiteral: DecimalLiteral | HexLiteral | OctalLiteral | BinaryLiteral;
HexLiteral: '0' [xX] [0-9a-fA-F]+;
OctalLiteral: '0' [oO] [0-9]+;
BinaryLiteral: '0' [bB] [0-1]+;
DecimalLiteral: [0-9]+ ('.' [0-9]+)?;

// identifiers
Identifier: [a-zA-Z_$] [a-zA-Z0-9_$]*;
