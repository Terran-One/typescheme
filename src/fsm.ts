import * as AST from './ast';

// TupleLiteral matching FSM - Nondeterministic Finite Automaton with implicit Powerset Construction
// --
// Much simpler than the one used for normal regular expressions.
// Example:
// [string, string, ...(string | number)[], ...boolean[], 123, "hello there"]
// Should be converted to:
// oneOf(string) + oneOf(string) + (string | number)* + (boolean)* + oneOf(123) + oneOf("hello there")
//

export class NFAState<T> {
	constructor(public readonly id: number, public name: string, public payload?: T, public transitions: [any, number][] = [], public accepting: boolean = false) {
	}

	addTransition(symbol: any, to: number): this {
		this.transitions.push([symbol, to]);
		return this;
	}

	getPayload(): T | undefined {
		return this.payload;
	}

	epsilonClosure(): number[] {
		let visited = new Set<number>();
		let stack = [this.id];
		while (stack.length > 0) {
			let id = stack.pop()!;
			if (!visited.has(id)) {
				visited.add(id);
				for (let [symbol, to] of this.transitions) {
					if (symbol === null) {
						stack.push(to);
					}
				}
			}
		}
		return Array.from(visited);
	}

}

export class NFA<T> {

	constructor(public states: NFAState<T>[] = [], public startingState: number = 0, public currentStates: number[] = [], public customTransitionFn?: (transition: (x: any) => void, input: any, currentStates: NFAState<T>[]) => any) {
	}

	static withNumStates<T>(numStates: number, defaultPayload?: T): NFA<T> {
		let nfa = new NFA<T>();
		for (let i = 0; i < numStates; i++) {
			nfa.addState(`state_${i}`, defaultPayload);
		}
		return nfa;
	}

	consume(input: any): any {
		return this.customTransitionFn ? this.customTransitionFn(x => this.transition(x), input, this.currentStates.map(id => this.states[id])) : this.transition(input);
	}

	setTransitionFn(fn: (transition: (x: any) => void, input: any, currentStates: NFAState<T>[]) => any): this {
		this.customTransitionFn = fn;
		return this;
	}

	start(): this {
		this.currentStates = this.epsilonClosureOf(this.startingState);
		return this;
	}

	addState(name: string, payload?: T, accepting: boolean = false): NFAState<T> {
		let id = this.states.length;
		let state = new NFAState<T>(id, name, payload, [], accepting);
		this.states.push(state);
		return state;
	}

	epsilonClosureOf(...ids: number[]): number[] {
		let res = new Set<number>();
		for (let id of ids) {
			for (let state of this.states[id].epsilonClosure()) {
				res.add(state);
			}
		}
		return Array.from(res);
	}

	isAccepting(): boolean {
		for (let id of this.currentStates) {
			if (this.states[id].accepting) {
				return true;
			}
		}
		return false;
	}

	transition(symbol: any): this {
		let nextStates = new Set<number>();
		for (let id of this.currentStates) {
			let state = this.states[id];
			for (let [s, to] of state.transitions) {
				if (s === symbol || s === null) {
					for (let x of this.epsilonClosureOf(to)) {
						nextStates.add(x);
					}
				}
			}
		}
		this.currentStates = this.epsilonClosureOf(...Array.from(nextStates));
		return this;
	}

}
