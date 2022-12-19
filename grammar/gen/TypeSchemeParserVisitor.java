// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link TypeSchemeParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface TypeSchemeParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#compilationUnit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCompilationUnit(TypeSchemeParser.CompilationUnitContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Amp}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Amp(TypeSchemeParser.T_AmpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Quoted}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Quoted(TypeSchemeParser.T_QuotedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Bar}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Bar(TypeSchemeParser.T_BarContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Indexed}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Indexed(TypeSchemeParser.T_IndexedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Call}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Call(TypeSchemeParser.T_CallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Grouped}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Grouped(TypeSchemeParser.T_GroupedContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Spread}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Spread(TypeSchemeParser.T_SpreadContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_List}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_List(TypeSchemeParser.T_ListContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Atom}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Atom(TypeSchemeParser.T_AtomContext ctx);
	/**
	 * Visit a parse tree produced by the {@code T_Array}
	 * labeled alternative in {@link TypeSchemeParser#sexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT_Array(TypeSchemeParser.T_ArrayContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtom(TypeSchemeParser.AtomContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitList(TypeSchemeParser.ListContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#primitive}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrimitive(TypeSchemeParser.PrimitiveContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(TypeSchemeParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#tupleLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleLiteral(TypeSchemeParser.TupleLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#objectLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectLiteral(TypeSchemeParser.ObjectLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#objectProp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectProp(TypeSchemeParser.ObjectPropContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifier(TypeSchemeParser.IdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link TypeSchemeParser#reservedKeyword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReservedKeyword(TypeSchemeParser.ReservedKeywordContext ctx);
}