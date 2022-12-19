// Generated from ./grammar/TypeSchemeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { T_AtomContext } from "./TypeSchemeParser";
import { T_QuotedContext } from "./TypeSchemeParser";
import { T_GroupedContext } from "./TypeSchemeParser";
import { T_ArrayContext } from "./TypeSchemeParser";
import { T_BarContext } from "./TypeSchemeParser";
import { T_AmpContext } from "./TypeSchemeParser";
import { T_IndexedContext } from "./TypeSchemeParser";
import { T_CallContext } from "./TypeSchemeParser";
import { T_ListContext } from "./TypeSchemeParser";
import { T_SpreadContext } from "./TypeSchemeParser";
import { CompilationUnitContext } from "./TypeSchemeParser";
import { WsContext } from "./TypeSchemeParser";
import { SexprContext } from "./TypeSchemeParser";
import { AtomContext } from "./TypeSchemeParser";
import { ListContext } from "./TypeSchemeParser";
import { PrimitiveContext } from "./TypeSchemeParser";
import { LiteralContext } from "./TypeSchemeParser";
import { TupleLiteralContext } from "./TypeSchemeParser";
import { ObjectLiteralContext } from "./TypeSchemeParser";
import { ObjectPropContext } from "./TypeSchemeParser";
import { IdentifierContext } from "./TypeSchemeParser";
import { ReservedKeywordContext } from "./TypeSchemeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypeSchemeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TypeSchemeParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `T_Atom`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Atom?: (ctx: T_AtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Quoted`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Quoted?: (ctx: T_QuotedContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Grouped`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Grouped?: (ctx: T_GroupedContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Array`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Array?: (ctx: T_ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Bar`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Bar?: (ctx: T_BarContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Amp`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Amp?: (ctx: T_AmpContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Indexed`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Indexed?: (ctx: T_IndexedContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Call`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Call?: (ctx: T_CallContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_List`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_List?: (ctx: T_ListContext) => Result;

	/**
	 * Visit a parse tree produced by the `T_Spread`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_Spread?: (ctx: T_SpreadContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.ws`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWs?: (ctx: WsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSexpr?: (ctx: SexprContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.tupleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleLiteral?: (ctx: TupleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.objectProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectProp?: (ctx: ObjectPropContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeSchemeParser.reservedKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeyword?: (ctx: ReservedKeywordContext) => Result;
}

