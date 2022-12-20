import {Project, StructureKind} from "ts-morph";
import {GrammarParser} from './parser';
import * as AST from './ast';

function camel2pascal(str: string): string {
	return str[0].toUpperCase() + str.slice(1);
}

export class Codegen {
	public static generateASTNodes(grammar: string) {
		let grammarAST = GrammarParser.parse(grammar);
		let project = new Project();
		let src = project.createSourceFile("ast-nodes.ts", "", {overwrite: true});

		// get all the rule names
		grammarAST.rules.forEach(rule => {
			// analyze the rule
			let {alts} = rule.rule;
			// for each alternative, extract the labeled elements
			let labeledElems = alts.descendantsWhere(
				node => node instanceof AST.LabeledElement && node.label !== undefined
			) as AST.LabeledElement[];
			// for each labeled element, extract the label and the type
			labeledElems.forEach(elem => {
				// is this label inside an optional / star?
				const isOptional = elem.nearestAncestorWhere(node => node instanceof AST.Optional || node instanceof AST.ZeroOrMore) !== null;
				console.log(`\t${elem.label}${isOptional ? '?' : ''}: ${elem.element.toString()}`);
			});
		});


		src.formatText();
		src.saveSync();
	}
}
