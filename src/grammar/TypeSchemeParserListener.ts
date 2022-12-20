// Generated from ./grammar/TypeSchemeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { T_AtomContext } from "./TypeSchemeParser";
import { T_GroupedContext } from "./TypeSchemeParser";
import { T_QuotedContext } from "./TypeSchemeParser";
import { T_ArrayContext } from "./TypeSchemeParser";
import { T_BarContext } from "./TypeSchemeParser";
import { T_AmpContext } from "./TypeSchemeParser";
import { T_IndexedContext } from "./TypeSchemeParser";
import { T_CallContext } from "./TypeSchemeParser";
import { T_ListContext } from "./TypeSchemeParser";
import { T_SpreadContext } from "./TypeSchemeParser";
import { CompilationUnitContext } from "./TypeSchemeParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `TypeSchemeParser`.
 */
export interface TypeSchemeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `T_Atom`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Atom?: (ctx: T_AtomContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Atom`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Atom?: (ctx: T_AtomContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Grouped`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Grouped?: (ctx: T_GroupedContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Grouped`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Grouped?: (ctx: T_GroupedContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Quoted`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Quoted?: (ctx: T_QuotedContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Quoted`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Quoted?: (ctx: T_QuotedContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Array`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Array?: (ctx: T_ArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Array`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Array?: (ctx: T_ArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Bar`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Bar?: (ctx: T_BarContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Bar`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Bar?: (ctx: T_BarContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Amp`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Amp?: (ctx: T_AmpContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Amp`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Amp?: (ctx: T_AmpContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Indexed`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Indexed?: (ctx: T_IndexedContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Indexed`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Indexed?: (ctx: T_IndexedContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Call`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Call?: (ctx: T_CallContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Call`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Call?: (ctx: T_CallContext) => void;

	/**
	 * Enter a parse tree produced by the `T_List`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_List?: (ctx: T_ListContext) => void;
	/**
	 * Exit a parse tree produced by the `T_List`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_List?: (ctx: T_ListContext) => void;

	/**
	 * Enter a parse tree produced by the `T_Spread`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterT_Spread?: (ctx: T_SpreadContext) => void;
	/**
	 * Exit a parse tree produced by the `T_Spread`
	 * labeled alternative in `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitT_Spread?: (ctx: T_SpreadContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterSexpr?: (ctx: SexprContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitSexpr?: (ctx: SexprContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.primitive`.
	 * @param ctx the parse tree
	 */
	enterPrimitive?: (ctx: PrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.primitive`.
	 * @param ctx the parse tree
	 */
	exitPrimitive?: (ctx: PrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.tupleLiteral`.
	 * @param ctx the parse tree
	 */
	enterTupleLiteral?: (ctx: TupleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.tupleLiteral`.
	 * @param ctx the parse tree
	 */
	exitTupleLiteral?: (ctx: TupleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.objectProp`.
	 * @param ctx the parse tree
	 */
	enterObjectProp?: (ctx: ObjectPropContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.objectProp`.
	 * @param ctx the parse tree
	 */
	exitObjectProp?: (ctx: ObjectPropContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `TypeSchemeParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `TypeSchemeParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
}

