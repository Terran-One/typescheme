import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import * as AST from "./ast";
import {
	CompilationUnitContext, IdentifierContext,
	LiteralContext,
	ObjectLiteralContext,
	ObjectPropContext,
	T_QuotedContext,
	PrimitiveContext, T_ArrayContext,
	T_AtomContext, T_CallContext, T_IndexedContext, T_SpreadContext,
	TupleLiteralContext,
	T_GroupedContext,
	T_AmpContext,
	T_BarContext,
} from "./grammar/TypeSchemeParser";
import {TypeSchemeParserVisitor} from "./grammar/TypeSchemeParserVisitor";
import {BooleanLiteral, Prop} from "./ast";

const id = (x: any) => x;

export class TypeSchemeASTVisitor extends AbstractParseTreeVisitor<any> implements TypeSchemeParserVisitor<any> {

	protected defaultResult(): any {
		return null;
	}

	visitCompilationUnit(ctx: CompilationUnitContext): AST.CompilationUnit {
		let exprs = ctx.sexpr();
		if (exprs.length === 0) {
			return new AST.CompilationUnit(AST.List.empty());
		} else {
			return new AST.CompilationUnit(AST.List.of(exprs.map(expr => this.visit(expr))));
		}
	}

	visitList(ctx: any): AST.List<AST.Node> {
		let items = ctx.sexpr().map((l: any) => this.visit(l));
		return AST.List.of(items);
	}

	visitT_Grouped(ctx: T_GroupedContext): AST.SExpr {
		return this.visit(ctx.sexpr());
	}

	visitT_Amp(ctx: T_AmpContext): any {
		let items = ctx.sexpr().map((l: any) => this.visit(l));
		return new AST.IntersectionOf(AST.List.of(items));
	}

	visitT_Bar(ctx: T_BarContext): AST.UnionOf {
		let items = ctx.sexpr().map((l: any) => this.visit(l));
		return new AST.UnionOf(AST.List.of(items));
	}

	visitT_Quoted(ctx: T_QuotedContext): AST.Quoted {
		return new AST.Quoted(this.visit(ctx.sexpr()));
	}

	// TODO: pass through?
	visitT_Atom(ctx: T_AtomContext): AST.Atom {
		let res = this.visit(ctx.atom());
		return res;
	}

	visitT_Indexed(ctx: T_IndexedContext): AST.IndexOf {
		let ty = this.visit(ctx.sexpr(0));
		let arg = this.visit(ctx._arg);
		return new AST.IndexOf(ty, arg);
	}

	visitT_Array(ctx: T_ArrayContext): AST.ArrayOf {
		let ty = this.visit(ctx.sexpr());
		return new AST.ArrayOf(ty);
	}

	visitT_Call(ctx: T_CallContext): AST.Call {
		let fn = this.visit(ctx.sexpr(0));
		let args = ctx._args.map((l: any) => this.visit(l));
		return new AST.Call(fn, AST.List.of(args));
	}

	visitT_Spread(ctx: T_SpreadContext): AST.Spread {
		return new AST.Spread(this.visit(ctx.sexpr()));
	}

	visitLiteral(ctx: LiteralContext): AST.Literal {
		let test: any = ctx.BooleanLiteral();
		if (test) {
			return new AST.BooleanLiteral(test.text === "true");
		}
		test = ctx.StringLiteral();
		if (test) {
			return new AST.StringLiteral(test.text);
		}
		test = ctx.NumberLiteral();
		if (test) {
			return new AST.NumberLiteral(Number.parseInt(test.text));
		}
		test = ctx.tupleLiteral();
		if (test) {
			return this.visitTupleLiteral(test);
		}
		test = ctx.objectLiteral();
		if (test) {
			return this.visitObjectLiteral(test);
		}
		throw new Error(`Unknown literal: ${test.text}`);
	}

	visitTupleLiteral(ctx: TupleLiteralContext): AST.TupleLiteral {
		let items = ctx._items.map((l: any) => this.visit(l));
		return new AST.TupleLiteral(AST.List.of(items));
	}

	visitObjectLiteral(ctx: ObjectLiteralContext): AST.ObjectLiteral {
		let props: AST.Prop[] = ctx._props.map((l: ObjectPropContext) => this.visitObjectProp(l));
		return new AST.ObjectLiteral(AST.List.of(props));
	}

	visitObjectProp(ctx: ObjectPropContext): AST.Prop {
		let key = this.visitIdentifier(ctx._key);
		let value = this.visit(ctx._value);
		return new AST.Prop(key, value);
	}

	visitPrimitive(ctx: PrimitiveContext): AST.Primitive {
		return new AST.Primitive(ctx.text as AST.PrimitiveType);
	}

	visitIdentifier(ctx: IdentifierContext): AST.Identifier {
		return new AST.Identifier(ctx.text);
	}


	// I should document all stages of this, because I usually go through
	// several iterations. ^ this could be made simpler with the usage of
	// pass-through parser rules.

	// make chat bot using chatgpt that makes it like having a live commentator
	// or "knowledge" copilot questioning you or adding insights as you type


}
