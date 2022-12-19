import * as AST from './ast';

// TupleLiteral matching DFA
// --
// Much simpler than the one used for normal regular expressions.
// Example:
// [string, string, ...(string | number)[], ...boolean[], 123, "hello there"]
// Should be converted to:
// oneOf(string) + oneOf(string) + (string | number)* + (boolean)* + oneOf(123) + oneOf("hello there")
//
export class DFA {
	constructor() {
	}
}
