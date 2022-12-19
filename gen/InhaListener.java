// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link InhaParser}.
 */
public interface InhaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link InhaParser#chunk}.
	 * @param ctx the parse tree
	 */
	void enterChunk(InhaParser.ChunkContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#chunk}.
	 * @param ctx the parse tree
	 */
	void exitChunk(InhaParser.ChunkContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(InhaParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(InhaParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(InhaParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(InhaParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#attnamelist}.
	 * @param ctx the parse tree
	 */
	void enterAttnamelist(InhaParser.AttnamelistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#attnamelist}.
	 * @param ctx the parse tree
	 */
	void exitAttnamelist(InhaParser.AttnamelistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#attrib}.
	 * @param ctx the parse tree
	 */
	void enterAttrib(InhaParser.AttribContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#attrib}.
	 * @param ctx the parse tree
	 */
	void exitAttrib(InhaParser.AttribContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#laststat}.
	 * @param ctx the parse tree
	 */
	void enterLaststat(InhaParser.LaststatContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#laststat}.
	 * @param ctx the parse tree
	 */
	void exitLaststat(InhaParser.LaststatContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(InhaParser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(InhaParser.LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#funcname}.
	 * @param ctx the parse tree
	 */
	void enterFuncname(InhaParser.FuncnameContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#funcname}.
	 * @param ctx the parse tree
	 */
	void exitFuncname(InhaParser.FuncnameContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#varlist}.
	 * @param ctx the parse tree
	 */
	void enterVarlist(InhaParser.VarlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#varlist}.
	 * @param ctx the parse tree
	 */
	void exitVarlist(InhaParser.VarlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#namelist}.
	 * @param ctx the parse tree
	 */
	void enterNamelist(InhaParser.NamelistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#namelist}.
	 * @param ctx the parse tree
	 */
	void exitNamelist(InhaParser.NamelistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#explist}.
	 * @param ctx the parse tree
	 */
	void enterExplist(InhaParser.ExplistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#explist}.
	 * @param ctx the parse tree
	 */
	void exitExplist(InhaParser.ExplistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#exp}.
	 * @param ctx the parse tree
	 */
	void enterExp(InhaParser.ExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#exp}.
	 * @param ctx the parse tree
	 */
	void exitExp(InhaParser.ExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void enterPrefixexp(InhaParser.PrefixexpContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void exitPrefixexp(InhaParser.PrefixexpContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void enterFunctioncall(InhaParser.FunctioncallContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void exitFunctioncall(InhaParser.FunctioncallContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void enterVarOrExp(InhaParser.VarOrExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void exitVarOrExp(InhaParser.VarOrExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#var}.
	 * @param ctx the parse tree
	 */
	void enterVar(InhaParser.VarContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#var}.
	 * @param ctx the parse tree
	 */
	void exitVar(InhaParser.VarContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void enterVarSuffix(InhaParser.VarSuffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void exitVarSuffix(InhaParser.VarSuffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void enterNameAndArgs(InhaParser.NameAndArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void exitNameAndArgs(InhaParser.NameAndArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#args}.
	 * @param ctx the parse tree
	 */
	void enterArgs(InhaParser.ArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#args}.
	 * @param ctx the parse tree
	 */
	void exitArgs(InhaParser.ArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#functiondef}.
	 * @param ctx the parse tree
	 */
	void enterFunctiondef(InhaParser.FunctiondefContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#functiondef}.
	 * @param ctx the parse tree
	 */
	void exitFunctiondef(InhaParser.FunctiondefContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void enterFuncbody(InhaParser.FuncbodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void exitFuncbody(InhaParser.FuncbodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#parlist}.
	 * @param ctx the parse tree
	 */
	void enterParlist(InhaParser.ParlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#parlist}.
	 * @param ctx the parse tree
	 */
	void exitParlist(InhaParser.ParlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void enterTableconstructor(InhaParser.TableconstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void exitTableconstructor(InhaParser.TableconstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#fieldlist}.
	 * @param ctx the parse tree
	 */
	void enterFieldlist(InhaParser.FieldlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#fieldlist}.
	 * @param ctx the parse tree
	 */
	void exitFieldlist(InhaParser.FieldlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(InhaParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(InhaParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void enterFieldsep(InhaParser.FieldsepContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void exitFieldsep(InhaParser.FieldsepContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorOr}.
	 * @param ctx the parse tree
	 */
	void enterOperatorOr(InhaParser.OperatorOrContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorOr}.
	 * @param ctx the parse tree
	 */
	void exitOperatorOr(InhaParser.OperatorOrContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorAnd}.
	 * @param ctx the parse tree
	 */
	void enterOperatorAnd(InhaParser.OperatorAndContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorAnd}.
	 * @param ctx the parse tree
	 */
	void exitOperatorAnd(InhaParser.OperatorAndContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorComparison}.
	 * @param ctx the parse tree
	 */
	void enterOperatorComparison(InhaParser.OperatorComparisonContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorComparison}.
	 * @param ctx the parse tree
	 */
	void exitOperatorComparison(InhaParser.OperatorComparisonContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorStrcat}.
	 * @param ctx the parse tree
	 */
	void enterOperatorStrcat(InhaParser.OperatorStrcatContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorStrcat}.
	 * @param ctx the parse tree
	 */
	void exitOperatorStrcat(InhaParser.OperatorStrcatContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorAddSub}.
	 * @param ctx the parse tree
	 */
	void enterOperatorAddSub(InhaParser.OperatorAddSubContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorAddSub}.
	 * @param ctx the parse tree
	 */
	void exitOperatorAddSub(InhaParser.OperatorAddSubContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 */
	void enterOperatorMulDivMod(InhaParser.OperatorMulDivModContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 */
	void exitOperatorMulDivMod(InhaParser.OperatorMulDivModContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorBitwise}.
	 * @param ctx the parse tree
	 */
	void enterOperatorBitwise(InhaParser.OperatorBitwiseContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorBitwise}.
	 * @param ctx the parse tree
	 */
	void exitOperatorBitwise(InhaParser.OperatorBitwiseContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorUnary}.
	 * @param ctx the parse tree
	 */
	void enterOperatorUnary(InhaParser.OperatorUnaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorUnary}.
	 * @param ctx the parse tree
	 */
	void exitOperatorUnary(InhaParser.OperatorUnaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#operatorPower}.
	 * @param ctx the parse tree
	 */
	void enterOperatorPower(InhaParser.OperatorPowerContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#operatorPower}.
	 * @param ctx the parse tree
	 */
	void exitOperatorPower(InhaParser.OperatorPowerContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(InhaParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(InhaParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link InhaParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(InhaParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link InhaParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(InhaParser.StringContext ctx);
}