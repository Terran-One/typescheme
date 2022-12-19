// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link InhaParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface InhaVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link InhaParser#chunk}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChunk(InhaParser.ChunkContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(InhaParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#stat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStat(InhaParser.StatContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#attnamelist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttnamelist(InhaParser.AttnamelistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#attrib}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttrib(InhaParser.AttribContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#laststat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLaststat(InhaParser.LaststatContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#label}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabel(InhaParser.LabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#funcname}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFuncname(InhaParser.FuncnameContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#varlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarlist(InhaParser.VarlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#namelist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamelist(InhaParser.NamelistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#explist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplist(InhaParser.ExplistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExp(InhaParser.ExpContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#prefixexp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixexp(InhaParser.PrefixexpContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#functioncall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctioncall(InhaParser.FunctioncallContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#varOrExp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarOrExp(InhaParser.VarOrExpContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#var}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVar(InhaParser.VarContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#varSuffix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarSuffix(InhaParser.VarSuffixContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#nameAndArgs}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNameAndArgs(InhaParser.NameAndArgsContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#args}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgs(InhaParser.ArgsContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#functiondef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctiondef(InhaParser.FunctiondefContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#funcbody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFuncbody(InhaParser.FuncbodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#parlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParlist(InhaParser.ParlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#tableconstructor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableconstructor(InhaParser.TableconstructorContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#fieldlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFieldlist(InhaParser.FieldlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#field}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitField(InhaParser.FieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#fieldsep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFieldsep(InhaParser.FieldsepContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorOr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorOr(InhaParser.OperatorOrContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorAnd}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorAnd(InhaParser.OperatorAndContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorComparison}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorComparison(InhaParser.OperatorComparisonContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorStrcat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorStrcat(InhaParser.OperatorStrcatContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorAddSub}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorAddSub(InhaParser.OperatorAddSubContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorMulDivMod(InhaParser.OperatorMulDivModContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorBitwise}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorBitwise(InhaParser.OperatorBitwiseContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorUnary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorUnary(InhaParser.OperatorUnaryContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#operatorPower}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorPower(InhaParser.OperatorPowerContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(InhaParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link InhaParser#string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitString(InhaParser.StringContext ctx);
}