// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TypeSchemeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.11.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LPAREN=1, RPAREN=2, LBRACE=3, RBRACE=4, LBRACK=5, RBRACK=6, LANGL=7, RANGL=8, 
		COLON=9, COMMA=10, AMP=11, BAR=12, SPREAD=13, DOT=14, QUOTE=15, WS=16, 
		KEYOF=17, INFER=18, IN=19, AS=20, EXTENDS=21, EXTENDS_Q=22, IN_Q=23, IF=24, 
		NEVER=25, NULL=26, UNDEFINED=27, UNKNOWN=28, OBJECT=29, ANY=30, STRING=31, 
		NUMBER=32, BOOLEAN=33, BooleanLiteral=34, StringLiteral=35, SingleQuotedStringLiteral=36, 
		DoubleQuotedStringLiteral=37, BacktickStringLiteral=38, EscapeSequence=39, 
		UnicodeEscapeSequence=40, NumberLiteral=41, HexLiteral=42, OctalLiteral=43, 
		BinaryLiteral=44, DecimalLiteral=45, Identifier=46;
	public static final int
		RULE_compilationUnit = 0, RULE_sexpr = 1, RULE_atom = 2, RULE_list = 3, 
		RULE_primitive = 4, RULE_literal = 5, RULE_tupleLiteral = 6, RULE_objectLiteral = 7, 
		RULE_objectProp = 8, RULE_identifier = 9, RULE_reservedKeyword = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "sexpr", "atom", "list", "primitive", "literal", "tupleLiteral", 
			"objectLiteral", "objectProp", "identifier", "reservedKeyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "'['", "']'", "'<'", "'>'", "':'", 
			"','", "'&'", "'|'", "'...'", "'.'", "'''", null, "'keyof'", "'infer'", 
			"'in'", "'as'", "'extends'", "'extends?'", "'in?'", "'if'", "'never'", 
			"'null'", "'undefined'", "'unknown'", "'object'", "'any'", "'string'", 
			"'number'", "'boolean'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "LANGL", 
			"RANGL", "COLON", "COMMA", "AMP", "BAR", "SPREAD", "DOT", "QUOTE", "WS", 
			"KEYOF", "INFER", "IN", "AS", "EXTENDS", "EXTENDS_Q", "IN_Q", "IF", "NEVER", 
			"NULL", "UNDEFINED", "UNKNOWN", "OBJECT", "ANY", "STRING", "NUMBER", 
			"BOOLEAN", "BooleanLiteral", "StringLiteral", "SingleQuotedStringLiteral", 
			"DoubleQuotedStringLiteral", "BacktickStringLiteral", "EscapeSequence", 
			"UnicodeEscapeSequence", "NumberLiteral", "HexLiteral", "OctalLiteral", 
			"BinaryLiteral", "DecimalLiteral", "Identifier"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "java-escape"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TypeSchemeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TypeSchemeParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterCompilationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitCompilationUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitCompilationUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(22);
				match(WS);
				}
			}

			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((_la) & ~0x3f) == 0 && ((1L << _la) & 72636486819882L) != 0) {
				{
				{
				setState(25);
				sexpr(0);
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(26);
					match(WS);
					}
				}

				}
				}
				setState(33);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(34);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SexprContext extends ParserRuleContext {
		public SexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sexpr; }
	 
		public SexprContext() { }
		public void copyFrom(SexprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_AmpContext extends SexprContext {
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public TerminalNode AMP() { return getToken(TypeSchemeParser.AMP, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public T_AmpContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Amp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Amp(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Amp(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_QuotedContext extends SexprContext {
		public TerminalNode QUOTE() { return getToken(TypeSchemeParser.QUOTE, 0); }
		public SexprContext sexpr() {
			return getRuleContext(SexprContext.class,0);
		}
		public T_QuotedContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Quoted(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Quoted(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Quoted(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_BarContext extends SexprContext {
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public TerminalNode BAR() { return getToken(TypeSchemeParser.BAR, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public T_BarContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Bar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Bar(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Bar(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_IndexedContext extends SexprContext {
		public SexprContext arg;
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public TerminalNode LBRACK() { return getToken(TypeSchemeParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(TypeSchemeParser.RBRACK, 0); }
		public T_IndexedContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Indexed(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Indexed(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Indexed(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_CallContext extends SexprContext {
		public SexprContext sexpr;
		public List<SexprContext> args = new ArrayList<SexprContext>();
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public TerminalNode LANGL() { return getToken(TypeSchemeParser.LANGL, 0); }
		public TerminalNode RANGL() { return getToken(TypeSchemeParser.RANGL, 0); }
		public List<TerminalNode> COMMA() { return getTokens(TypeSchemeParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TypeSchemeParser.COMMA, i);
		}
		public T_CallContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Call(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Call(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_GroupedContext extends SexprContext {
		public TerminalNode LPAREN() { return getToken(TypeSchemeParser.LPAREN, 0); }
		public SexprContext sexpr() {
			return getRuleContext(SexprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TypeSchemeParser.RPAREN, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public T_GroupedContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Grouped(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Grouped(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Grouped(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_SpreadContext extends SexprContext {
		public TerminalNode SPREAD() { return getToken(TypeSchemeParser.SPREAD, 0); }
		public SexprContext sexpr() {
			return getRuleContext(SexprContext.class,0);
		}
		public T_SpreadContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Spread(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Spread(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Spread(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_ListContext extends SexprContext {
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public T_ListContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_List(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_List(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_List(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_AtomContext extends SexprContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public T_AtomContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Atom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Atom(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Atom(this);
			else return visitor.visitChildren(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class T_ArrayContext extends SexprContext {
		public SexprContext sexpr() {
			return getRuleContext(SexprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(TypeSchemeParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(TypeSchemeParser.RBRACK, 0); }
		public T_ArrayContext(SexprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterT_Array(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitT_Array(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitT_Array(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SexprContext sexpr() throws RecognitionException {
		return sexpr(0);
	}

	private SexprContext sexpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SexprContext _localctx = new SexprContext(_ctx, _parentState);
		SexprContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_sexpr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				_localctx = new T_AtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(37);
				atom();
				}
				break;
			case 2:
				{
				_localctx = new T_GroupedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(38);
				match(LPAREN);
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(39);
					match(WS);
					}
					}
					setState(44);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(45);
				sexpr(0);
				setState(49);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(46);
					match(WS);
					}
					}
					setState(51);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(52);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new T_QuotedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(54);
				match(QUOTE);
				setState(55);
				sexpr(8);
				}
				break;
			case 4:
				{
				_localctx = new T_ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(56);
				list();
				}
				break;
			case 5:
				{
				_localctx = new T_SpreadContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(57);
				match(SPREAD);
				setState(58);
				sexpr(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(113);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(111);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new T_BarContext(new SexprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_sexpr);
						setState(61);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(65);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==WS) {
							{
							{
							setState(62);
							match(WS);
							}
							}
							setState(67);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(68);
						match(BAR);
						setState(72);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==WS) {
							{
							{
							setState(69);
							match(WS);
							}
							}
							setState(74);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(75);
						sexpr(7);
						}
						break;
					case 2:
						{
						_localctx = new T_AmpContext(new SexprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_sexpr);
						setState(76);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(80);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==WS) {
							{
							{
							setState(77);
							match(WS);
							}
							}
							setState(82);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(83);
						match(AMP);
						setState(87);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==WS) {
							{
							{
							setState(84);
							match(WS);
							}
							}
							setState(89);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(90);
						sexpr(6);
						}
						break;
					case 3:
						{
						_localctx = new T_ArrayContext(new SexprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_sexpr);
						setState(91);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(92);
						match(LBRACK);
						setState(93);
						match(RBRACK);
						}
						break;
					case 4:
						{
						_localctx = new T_IndexedContext(new SexprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_sexpr);
						setState(94);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(95);
						match(LBRACK);
						{
						setState(96);
						((T_IndexedContext)_localctx).arg = sexpr(0);
						}
						setState(97);
						match(RBRACK);
						}
						break;
					case 5:
						{
						_localctx = new T_CallContext(new SexprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_sexpr);
						setState(99);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(100);
						match(LANGL);
						{
						setState(101);
						((T_CallContext)_localctx).sexpr = sexpr(0);
						((T_CallContext)_localctx).args.add(((T_CallContext)_localctx).sexpr);
						setState(106);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==COMMA) {
							{
							{
							setState(102);
							match(COMMA);
							setState(103);
							((T_CallContext)_localctx).sexpr = sexpr(0);
							((T_CallContext)_localctx).args.add(((T_CallContext)_localctx).sexpr);
							}
							}
							setState(108);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
						setState(109);
						match(RANGL);
						}
						break;
					}
					} 
				}
				setState(115);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtomContext extends ParserRuleContext {
		public PrimitiveContext primitive() {
			return getRuleContext(PrimitiveContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitAtom(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitAtom(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_atom);
		try {
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NEVER:
			case NULL:
			case UNDEFINED:
			case UNKNOWN:
			case OBJECT:
			case ANY:
			case STRING:
			case NUMBER:
			case BOOLEAN:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				primitive();
				}
				break;
			case LBRACE:
			case LBRACK:
			case BooleanLiteral:
			case StringLiteral:
			case NumberLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				literal();
				}
				break;
			case KEYOF:
			case INFER:
			case IN:
			case AS:
			case EXTENDS:
			case EXTENDS_Q:
			case IN_Q:
			case IF:
			case Identifier:
				enterOuterAlt(_localctx, 3);
				{
				setState(118);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(TypeSchemeParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TypeSchemeParser.RPAREN, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(LPAREN);
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(122);
				match(WS);
				}
				}
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(128);
				sexpr(0);
				setState(132);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(129);
						match(WS);
						}
						} 
					}
					setState(134);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				}
				}
				}
				setState(137); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((_la) & ~0x3f) == 0 && ((1L << _la) & 72636486819882L) != 0 );
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(139);
				match(WS);
				}
				}
				setState(144);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(145);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitiveContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(TypeSchemeParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(TypeSchemeParser.STRING, 0); }
		public TerminalNode BOOLEAN() { return getToken(TypeSchemeParser.BOOLEAN, 0); }
		public TerminalNode NEVER() { return getToken(TypeSchemeParser.NEVER, 0); }
		public TerminalNode NULL() { return getToken(TypeSchemeParser.NULL, 0); }
		public TerminalNode UNDEFINED() { return getToken(TypeSchemeParser.UNDEFINED, 0); }
		public TerminalNode UNKNOWN() { return getToken(TypeSchemeParser.UNKNOWN, 0); }
		public TerminalNode OBJECT() { return getToken(TypeSchemeParser.OBJECT, 0); }
		public TerminalNode ANY() { return getToken(TypeSchemeParser.ANY, 0); }
		public PrimitiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitive; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterPrimitive(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitPrimitive(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitPrimitive(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrimitiveContext primitive() throws RecognitionException {
		PrimitiveContext _localctx = new PrimitiveContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_primitive);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !(((_la) & ~0x3f) == 0 && ((1L << _la) & 17146314752L) != 0) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode BooleanLiteral() { return getToken(TypeSchemeParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(TypeSchemeParser.StringLiteral, 0); }
		public TerminalNode NumberLiteral() { return getToken(TypeSchemeParser.NumberLiteral, 0); }
		public TupleLiteralContext tupleLiteral() {
			return getRuleContext(TupleLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_literal);
		try {
			setState(154);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BooleanLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
				match(BooleanLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				match(StringLiteral);
				}
				break;
			case NumberLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(151);
				match(NumberLiteral);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 4);
				{
				setState(152);
				tupleLiteral();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 5);
				{
				setState(153);
				objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleLiteralContext extends ParserRuleContext {
		public SexprContext sexpr;
		public List<SexprContext> items = new ArrayList<SexprContext>();
		public TerminalNode LBRACK() { return getToken(TypeSchemeParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(TypeSchemeParser.RBRACK, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public List<SexprContext> sexpr() {
			return getRuleContexts(SexprContext.class);
		}
		public SexprContext sexpr(int i) {
			return getRuleContext(SexprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TypeSchemeParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TypeSchemeParser.COMMA, i);
		}
		public TupleLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterTupleLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitTupleLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitTupleLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleLiteralContext tupleLiteral() throws RecognitionException {
		TupleLiteralContext _localctx = new TupleLiteralContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tupleLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(LBRACK);
			setState(160);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(157);
					match(WS);
					}
					} 
				}
				setState(162);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((_la) & ~0x3f) == 0 && ((1L << _la) & 72636486819882L) != 0) {
				{
				{
				setState(163);
				((TupleLiteralContext)_localctx).sexpr = sexpr(0);
				((TupleLiteralContext)_localctx).items.add(((TupleLiteralContext)_localctx).sexpr);
				}
				setState(167);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(164);
						match(WS);
						}
						} 
					}
					setState(169);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(170);
					match(COMMA);
					setState(174);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==WS) {
						{
						{
						setState(171);
						match(WS);
						}
						}
						setState(176);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(177);
					((TupleLiteralContext)_localctx).sexpr = sexpr(0);
					((TupleLiteralContext)_localctx).items.add(((TupleLiteralContext)_localctx).sexpr);
					}
					}
					setState(182);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(185);
				match(WS);
				}
				}
				setState(190);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(191);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectLiteralContext extends ParserRuleContext {
		public ObjectPropContext objectProp;
		public List<ObjectPropContext> props = new ArrayList<ObjectPropContext>();
		public TerminalNode LBRACE() { return getToken(TypeSchemeParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TypeSchemeParser.RBRACE, 0); }
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public List<ObjectPropContext> objectProp() {
			return getRuleContexts(ObjectPropContext.class);
		}
		public ObjectPropContext objectProp(int i) {
			return getRuleContext(ObjectPropContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TypeSchemeParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TypeSchemeParser.COMMA, i);
		}
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterObjectLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitObjectLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitObjectLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_objectLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(LBRACE);
			setState(197);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(194);
					match(WS);
					}
					} 
				}
				setState(199);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			}
			setState(220);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((_la) & ~0x3f) == 0 && ((1L << _la) & 70368777601024L) != 0) {
				{
				{
				setState(200);
				((ObjectLiteralContext)_localctx).objectProp = objectProp();
				((ObjectLiteralContext)_localctx).props.add(((ObjectLiteralContext)_localctx).objectProp);
				}
				setState(204);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(201);
						match(WS);
						}
						} 
					}
					setState(206);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				}
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(207);
					match(COMMA);
					setState(211);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==WS) {
						{
						{
						setState(208);
						match(WS);
						}
						}
						setState(213);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(214);
					((ObjectLiteralContext)_localctx).objectProp = objectProp();
					((ObjectLiteralContext)_localctx).props.add(((ObjectLiteralContext)_localctx).objectProp);
					}
					}
					setState(219);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(222);
				match(WS);
				}
				}
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(228);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPropContext extends ParserRuleContext {
		public IdentifierContext key;
		public SexprContext value;
		public TerminalNode COLON() { return getToken(TypeSchemeParser.COLON, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(TypeSchemeParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TypeSchemeParser.WS, i);
		}
		public SexprContext sexpr() {
			return getRuleContext(SexprContext.class,0);
		}
		public ObjectPropContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProp; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterObjectProp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitObjectProp(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitObjectProp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ObjectPropContext objectProp() throws RecognitionException {
		ObjectPropContext _localctx = new ObjectPropContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_objectProp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(230);
			((ObjectPropContext)_localctx).key = identifier();
			}
			setState(234);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(231);
				match(WS);
				}
				}
				setState(236);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(237);
			match(COLON);
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(238);
				match(WS);
				}
				}
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(244);
			((ObjectPropContext)_localctx).value = sexpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TypeSchemeParser.Identifier, 0); }
		public ReservedKeywordContext reservedKeyword() {
			return getRuleContext(ReservedKeywordContext.class,0);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitIdentifier(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_identifier);
		try {
			setState(248);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				match(Identifier);
				}
				break;
			case KEYOF:
			case INFER:
			case IN:
			case AS:
			case EXTENDS:
			case EXTENDS_Q:
			case IN_Q:
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReservedKeywordContext extends ParserRuleContext {
		public TerminalNode KEYOF() { return getToken(TypeSchemeParser.KEYOF, 0); }
		public TerminalNode INFER() { return getToken(TypeSchemeParser.INFER, 0); }
		public TerminalNode IN() { return getToken(TypeSchemeParser.IN, 0); }
		public TerminalNode AS() { return getToken(TypeSchemeParser.AS, 0); }
		public TerminalNode EXTENDS() { return getToken(TypeSchemeParser.EXTENDS, 0); }
		public TerminalNode EXTENDS_Q() { return getToken(TypeSchemeParser.EXTENDS_Q, 0); }
		public TerminalNode IN_Q() { return getToken(TypeSchemeParser.IN_Q, 0); }
		public TerminalNode IF() { return getToken(TypeSchemeParser.IF, 0); }
		public ReservedKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeyword; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).enterReservedKeyword(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeSchemeParserListener ) ((TypeSchemeParserListener)listener).exitReservedKeyword(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TypeSchemeParserVisitor ) return ((TypeSchemeParserVisitor<? extends T>)visitor).visitReservedKeyword(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReservedKeywordContext reservedKeyword() throws RecognitionException {
		ReservedKeywordContext _localctx = new ReservedKeywordContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			_la = _input.LA(1);
			if ( !(((_la) & ~0x3f) == 0 && ((1L << _la) & 33423360L) != 0) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return sexpr_sempred((SexprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean sexpr_sempred(SexprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 4);
		case 4:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001.\u00fd\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0003\u0000\u0018"+
		"\b\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u001c\b\u0000\u0005\u0000"+
		"\u001e\b\u0000\n\u0000\f\u0000!\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001)\b\u0001\n\u0001"+
		"\f\u0001,\t\u0001\u0001\u0001\u0001\u0001\u0005\u00010\b\u0001\n\u0001"+
		"\f\u00013\t\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001<\b\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001@\b\u0001\n\u0001\f\u0001C\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001G\b\u0001\n\u0001\f\u0001J\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001O\b\u0001\n\u0001\f\u0001R\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001V\b\u0001\n\u0001\f\u0001Y\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001i\b\u0001\n\u0001\f\u0001l\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001p\b\u0001\n\u0001\f\u0001s\t\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002x\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0005\u0003|\b\u0003\n\u0003\f\u0003\u007f\t\u0003\u0001\u0003"+
		"\u0001\u0003\u0005\u0003\u0083\b\u0003\n\u0003\f\u0003\u0086\t\u0003\u0004"+
		"\u0003\u0088\b\u0003\u000b\u0003\f\u0003\u0089\u0001\u0003\u0005\u0003"+
		"\u008d\b\u0003\n\u0003\f\u0003\u0090\t\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u0005\u009b\b\u0005\u0001\u0006\u0001\u0006\u0005\u0006\u009f"+
		"\b\u0006\n\u0006\f\u0006\u00a2\t\u0006\u0001\u0006\u0001\u0006\u0005\u0006"+
		"\u00a6\b\u0006\n\u0006\f\u0006\u00a9\t\u0006\u0001\u0006\u0001\u0006\u0005"+
		"\u0006\u00ad\b\u0006\n\u0006\f\u0006\u00b0\t\u0006\u0001\u0006\u0005\u0006"+
		"\u00b3\b\u0006\n\u0006\f\u0006\u00b6\t\u0006\u0003\u0006\u00b8\b\u0006"+
		"\u0001\u0006\u0005\u0006\u00bb\b\u0006\n\u0006\f\u0006\u00be\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007\u00c4\b\u0007\n"+
		"\u0007\f\u0007\u00c7\t\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u00cb"+
		"\b\u0007\n\u0007\f\u0007\u00ce\t\u0007\u0001\u0007\u0001\u0007\u0005\u0007"+
		"\u00d2\b\u0007\n\u0007\f\u0007\u00d5\t\u0007\u0001\u0007\u0005\u0007\u00d8"+
		"\b\u0007\n\u0007\f\u0007\u00db\t\u0007\u0003\u0007\u00dd\b\u0007\u0001"+
		"\u0007\u0005\u0007\u00e0\b\u0007\n\u0007\f\u0007\u00e3\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0005\b\u00e9\b\b\n\b\f\b\u00ec\t\b\u0001"+
		"\b\u0001\b\u0005\b\u00f0\b\b\n\b\f\b\u00f3\t\b\u0001\b\u0001\b\u0001\t"+
		"\u0001\t\u0003\t\u00f9\b\t\u0001\n\u0001\n\u0001\n\u0000\u0001\u0002\u000b"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000\u0002\u0001"+
		"\u0000\u0019!\u0001\u0000\u0011\u0018\u011d\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0002;\u0001\u0000\u0000\u0000\u0004w\u0001\u0000\u0000\u0000\u0006"+
		"y\u0001\u0000\u0000\u0000\b\u0093\u0001\u0000\u0000\u0000\n\u009a\u0001"+
		"\u0000\u0000\u0000\f\u009c\u0001\u0000\u0000\u0000\u000e\u00c1\u0001\u0000"+
		"\u0000\u0000\u0010\u00e6\u0001\u0000\u0000\u0000\u0012\u00f8\u0001\u0000"+
		"\u0000\u0000\u0014\u00fa\u0001\u0000\u0000\u0000\u0016\u0018\u0005\u0010"+
		"\u0000\u0000\u0017\u0016\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000"+
		"\u0000\u0000\u0018\u001f\u0001\u0000\u0000\u0000\u0019\u001b\u0003\u0002"+
		"\u0001\u0000\u001a\u001c\u0005\u0010\u0000\u0000\u001b\u001a\u0001\u0000"+
		"\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u001e\u0001\u0000"+
		"\u0000\u0000\u001d\u0019\u0001\u0000\u0000\u0000\u001e!\u0001\u0000\u0000"+
		"\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000"+
		" \"\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000\"#\u0005\u0000"+
		"\u0000\u0001#\u0001\u0001\u0000\u0000\u0000$%\u0006\u0001\uffff\uffff"+
		"\u0000%<\u0003\u0004\u0002\u0000&*\u0005\u0001\u0000\u0000\')\u0005\u0010"+
		"\u0000\u0000(\'\u0001\u0000\u0000\u0000),\u0001\u0000\u0000\u0000*(\u0001"+
		"\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+-\u0001\u0000\u0000\u0000"+
		",*\u0001\u0000\u0000\u0000-1\u0003\u0002\u0001\u0000.0\u0005\u0010\u0000"+
		"\u0000/.\u0001\u0000\u0000\u000003\u0001\u0000\u0000\u00001/\u0001\u0000"+
		"\u0000\u000012\u0001\u0000\u0000\u000024\u0001\u0000\u0000\u000031\u0001"+
		"\u0000\u0000\u000045\u0005\u0002\u0000\u00005<\u0001\u0000\u0000\u0000"+
		"67\u0005\u000f\u0000\u00007<\u0003\u0002\u0001\b8<\u0003\u0006\u0003\u0000"+
		"9:\u0005\r\u0000\u0000:<\u0003\u0002\u0001\u0001;$\u0001\u0000\u0000\u0000"+
		";&\u0001\u0000\u0000\u0000;6\u0001\u0000\u0000\u0000;8\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000<q\u0001\u0000\u0000\u0000=A\n\u0006\u0000"+
		"\u0000>@\u0005\u0010\u0000\u0000?>\u0001\u0000\u0000\u0000@C\u0001\u0000"+
		"\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000BD\u0001"+
		"\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000DH\u0005\f\u0000\u0000EG\u0005"+
		"\u0010\u0000\u0000FE\u0001\u0000\u0000\u0000GJ\u0001\u0000\u0000\u0000"+
		"HF\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IK\u0001\u0000\u0000"+
		"\u0000JH\u0001\u0000\u0000\u0000Kp\u0003\u0002\u0001\u0007LP\n\u0005\u0000"+
		"\u0000MO\u0005\u0010\u0000\u0000NM\u0001\u0000\u0000\u0000OR\u0001\u0000"+
		"\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QS\u0001"+
		"\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000SW\u0005\u000b\u0000\u0000"+
		"TV\u0005\u0010\u0000\u0000UT\u0001\u0000\u0000\u0000VY\u0001\u0000\u0000"+
		"\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XZ\u0001\u0000"+
		"\u0000\u0000YW\u0001\u0000\u0000\u0000Zp\u0003\u0002\u0001\u0006[\\\n"+
		"\u0007\u0000\u0000\\]\u0005\u0005\u0000\u0000]p\u0005\u0006\u0000\u0000"+
		"^_\n\u0004\u0000\u0000_`\u0005\u0005\u0000\u0000`a\u0003\u0002\u0001\u0000"+
		"ab\u0005\u0006\u0000\u0000bp\u0001\u0000\u0000\u0000cd\n\u0003\u0000\u0000"+
		"de\u0005\u0007\u0000\u0000ej\u0003\u0002\u0001\u0000fg\u0005\n\u0000\u0000"+
		"gi\u0003\u0002\u0001\u0000hf\u0001\u0000\u0000\u0000il\u0001\u0000\u0000"+
		"\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000km\u0001\u0000"+
		"\u0000\u0000lj\u0001\u0000\u0000\u0000mn\u0005\b\u0000\u0000np\u0001\u0000"+
		"\u0000\u0000o=\u0001\u0000\u0000\u0000oL\u0001\u0000\u0000\u0000o[\u0001"+
		"\u0000\u0000\u0000o^\u0001\u0000\u0000\u0000oc\u0001\u0000\u0000\u0000"+
		"ps\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000"+
		"\u0000r\u0003\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000tx\u0003"+
		"\b\u0004\u0000ux\u0003\n\u0005\u0000vx\u0003\u0012\t\u0000wt\u0001\u0000"+
		"\u0000\u0000wu\u0001\u0000\u0000\u0000wv\u0001\u0000\u0000\u0000x\u0005"+
		"\u0001\u0000\u0000\u0000y}\u0005\u0001\u0000\u0000z|\u0005\u0010\u0000"+
		"\u0000{z\u0001\u0000\u0000\u0000|\u007f\u0001\u0000\u0000\u0000}{\u0001"+
		"\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~\u0087\u0001\u0000\u0000"+
		"\u0000\u007f}\u0001\u0000\u0000\u0000\u0080\u0084\u0003\u0002\u0001\u0000"+
		"\u0081\u0083\u0005\u0010\u0000\u0000\u0082\u0081\u0001\u0000\u0000\u0000"+
		"\u0083\u0086\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000"+
		"\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0088\u0001\u0000\u0000\u0000"+
		"\u0086\u0084\u0001\u0000\u0000\u0000\u0087\u0080\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000"+
		"\u0089\u008a\u0001\u0000\u0000\u0000\u008a\u008e\u0001\u0000\u0000\u0000"+
		"\u008b\u008d\u0005\u0010\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000"+
		"\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000"+
		"\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0091\u0001\u0000\u0000\u0000"+
		"\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0092\u0005\u0002\u0000\u0000"+
		"\u0092\u0007\u0001\u0000\u0000\u0000\u0093\u0094\u0007\u0000\u0000\u0000"+
		"\u0094\t\u0001\u0000\u0000\u0000\u0095\u009b\u0005\"\u0000\u0000\u0096"+
		"\u009b\u0005#\u0000\u0000\u0097\u009b\u0005)\u0000\u0000\u0098\u009b\u0003"+
		"\f\u0006\u0000\u0099\u009b\u0003\u000e\u0007\u0000\u009a\u0095\u0001\u0000"+
		"\u0000\u0000\u009a\u0096\u0001\u0000\u0000\u0000\u009a\u0097\u0001\u0000"+
		"\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u0099\u0001\u0000"+
		"\u0000\u0000\u009b\u000b\u0001\u0000\u0000\u0000\u009c\u00a0\u0005\u0005"+
		"\u0000\u0000\u009d\u009f\u0005\u0010\u0000\u0000\u009e\u009d\u0001\u0000"+
		"\u0000\u0000\u009f\u00a2\u0001\u0000\u0000\u0000\u00a0\u009e\u0001\u0000"+
		"\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u00b7\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a3\u00a7\u0003\u0002"+
		"\u0001\u0000\u00a4\u00a6\u0005\u0010\u0000\u0000\u00a5\u00a4\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a9\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00b4\u0001\u0000"+
		"\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00aa\u00ae\u0005\n\u0000"+
		"\u0000\u00ab\u00ad\u0005\u0010\u0000\u0000\u00ac\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00b0\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b1\u00b3\u0003\u0002\u0001"+
		"\u0000\u00b2\u00aa\u0001\u0000\u0000\u0000\u00b3\u00b6\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b5\u00b8\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000"+
		"\u0000\u00b7\u00a3\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000"+
		"\u0000\u00b8\u00bc\u0001\u0000\u0000\u0000\u00b9\u00bb\u0005\u0010\u0000"+
		"\u0000\u00ba\u00b9\u0001\u0000\u0000\u0000\u00bb\u00be\u0001\u0000\u0000"+
		"\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000"+
		"\u0000\u00bd\u00bf\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000"+
		"\u0000\u00bf\u00c0\u0005\u0006\u0000\u0000\u00c0\r\u0001\u0000\u0000\u0000"+
		"\u00c1\u00c5\u0005\u0003\u0000\u0000\u00c2\u00c4\u0005\u0010\u0000\u0000"+
		"\u00c3\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c7\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c3\u0001\u0000\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000\u0000"+
		"\u00c6\u00dc\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c8\u00cc\u0003\u0010\b\u0000\u00c9\u00cb\u0005\u0010\u0000\u0000\u00ca"+
		"\u00c9\u0001\u0000\u0000\u0000\u00cb\u00ce\u0001\u0000\u0000\u0000\u00cc"+
		"\u00ca\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000\u00cd"+
		"\u00d9\u0001\u0000\u0000\u0000\u00ce\u00cc\u0001\u0000\u0000\u0000\u00cf"+
		"\u00d3\u0005\n\u0000\u0000\u00d0\u00d2\u0005\u0010\u0000\u0000\u00d1\u00d0"+
		"\u0001\u0000\u0000\u0000\u00d2\u00d5\u0001\u0000\u0000\u0000\u00d3\u00d1"+
		"\u0001\u0000\u0000\u0000\u00d3\u00d4\u0001\u0000\u0000\u0000\u00d4\u00d6"+
		"\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d6\u00d8"+
		"\u0003\u0010\b\u0000\u00d7\u00cf\u0001\u0000\u0000\u0000\u00d8\u00db\u0001"+
		"\u0000\u0000\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9\u00da\u0001"+
		"\u0000\u0000\u0000\u00da\u00dd\u0001\u0000\u0000\u0000\u00db\u00d9\u0001"+
		"\u0000\u0000\u0000\u00dc\u00c8\u0001\u0000\u0000\u0000\u00dc\u00dd\u0001"+
		"\u0000\u0000\u0000\u00dd\u00e1\u0001\u0000\u0000\u0000\u00de\u00e0\u0005"+
		"\u0010\u0000\u0000\u00df\u00de\u0001\u0000\u0000\u0000\u00e0\u00e3\u0001"+
		"\u0000\u0000\u0000\u00e1\u00df\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001"+
		"\u0000\u0000\u0000\u00e2\u00e4\u0001\u0000\u0000\u0000\u00e3\u00e1\u0001"+
		"\u0000\u0000\u0000\u00e4\u00e5\u0005\u0004\u0000\u0000\u00e5\u000f\u0001"+
		"\u0000\u0000\u0000\u00e6\u00ea\u0003\u0012\t\u0000\u00e7\u00e9\u0005\u0010"+
		"\u0000\u0000\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ec\u0001\u0000"+
		"\u0000\u0000\u00ea\u00e8\u0001\u0000\u0000\u0000\u00ea\u00eb\u0001\u0000"+
		"\u0000\u0000\u00eb\u00ed\u0001\u0000\u0000\u0000\u00ec\u00ea\u0001\u0000"+
		"\u0000\u0000\u00ed\u00f1\u0005\t\u0000\u0000\u00ee\u00f0\u0005\u0010\u0000"+
		"\u0000\u00ef\u00ee\u0001\u0000\u0000\u0000\u00f0\u00f3\u0001\u0000\u0000"+
		"\u0000\u00f1\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000\u0000"+
		"\u0000\u00f2\u00f4\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000\u0000"+
		"\u0000\u00f4\u00f5\u0003\u0002\u0001\u0000\u00f5\u0011\u0001\u0000\u0000"+
		"\u0000\u00f6\u00f9\u0005.\u0000\u0000\u00f7\u00f9\u0003\u0014\n\u0000"+
		"\u00f8\u00f6\u0001\u0000\u0000\u0000\u00f8\u00f7\u0001\u0000\u0000\u0000"+
		"\u00f9\u0013\u0001\u0000\u0000\u0000\u00fa\u00fb\u0007\u0001\u0000\u0000"+
		"\u00fb\u0015\u0001\u0000\u0000\u0000\"\u0017\u001b\u001f*1;AHPWjoqw}\u0084"+
		"\u0089\u008e\u009a\u00a0\u00a7\u00ae\u00b4\u00b7\u00bc\u00c5\u00cc\u00d3"+
		"\u00d9\u00dc\u00e1\u00ea\u00f1\u00f8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}