// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TypeSchemeParser}.
 */
public interface TypeSchemeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompilationUnit(TypeSchemeParser.CompilationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompilationUnit(TypeSchemeParser.CompilationUnitContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Amp}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Amp(TypeSchemeParser.T_AmpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Amp}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Amp(TypeSchemeParser.T_AmpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Quoted}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Quoted(TypeSchemeParser.T_QuotedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Quoted}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Quoted(TypeSchemeParser.T_QuotedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Bar}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Bar(TypeSchemeParser.T_BarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Bar}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Bar(TypeSchemeParser.T_BarContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Indexed}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Indexed(TypeSchemeParser.T_IndexedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Indexed}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Indexed(TypeSchemeParser.T_IndexedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Call}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Call(TypeSchemeParser.T_CallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Call}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Call(TypeSchemeParser.T_CallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Grouped}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Grouped(TypeSchemeParser.T_GroupedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Grouped}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Grouped(TypeSchemeParser.T_GroupedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Spread}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Spread(TypeSchemeParser.T_SpreadContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Spread}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Spread(TypeSchemeParser.T_SpreadContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_List}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_List(TypeSchemeParser.T_ListContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_List}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_List(TypeSchemeParser.T_ListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Atom}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Atom(TypeSchemeParser.T_AtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Atom}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Atom(TypeSchemeParser.T_AtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code T_Array}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void enterT_Array(TypeSchemeParser.T_ArrayContext ctx);
	/**
	 * Exit a parse tree produced by the {@code T_Array}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 */
	void exitT_Array(TypeSchemeParser.T_ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterAtom(TypeSchemeParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitAtom(TypeSchemeParser.AtomContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#list}.
	 * @param ctx the parse tree
	 */
	void enterList(TypeSchemeParser.ListContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#list}.
	 * @param ctx the parse tree
	 */
	void exitList(TypeSchemeParser.ListContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#primitive}.
	 * @param ctx the parse tree
	 */
	void enterPrimitive(TypeSchemeParser.PrimitiveContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#primitive}.
	 * @param ctx the parse tree
	 */
	void exitPrimitive(TypeSchemeParser.PrimitiveContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(TypeSchemeParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(TypeSchemeParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#tupleLiteral}.
	 * @param ctx the parse tree
	 */
	void enterTupleLiteral(TypeSchemeParser.TupleLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#tupleLiteral}.
	 * @param ctx the parse tree
	 */
	void exitTupleLiteral(TypeSchemeParser.TupleLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#objectLiteral}.
	 * @param ctx the parse tree
	 */
	void enterObjectLiteral(TypeSchemeParser.ObjectLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#objectLiteral}.
	 * @param ctx the parse tree
	 */
	void exitObjectLiteral(TypeSchemeParser.ObjectLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#objectProp}.
	 * @param ctx the parse tree
	 */
	void enterObjectProp(TypeSchemeParser.ObjectPropContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#objectProp}.
	 * @param ctx the parse tree
	 */
	void exitObjectProp(TypeSchemeParser.ObjectPropContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(TypeSchemeParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(TypeSchemeParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link TypeSchemeParser#reservedKeyword}.
	 * @param ctx the parse tree
	 */
	void enterReservedKeyword(TypeSchemeParser.ReservedKeywordContext ctx);
	/**
	 * Exit a parse tree produced by {@link TypeSchemeParser#reservedKeyword}.
	 * @param ctx the parse tree
	 */
	void exitReservedKeyword(TypeSchemeParser.ReservedKeywordContext ctx);
}