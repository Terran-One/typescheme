// Generated from java-escape by ANTLR 4.11.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ToyLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.11.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FN=1, LET=2, IF=3, IN=4, IS=5, FOR=6, RETURN=7, LPAREN=8, RPAREN=9, LBRACE=10, 
		RBRACE=11, LBRACK=12, RBRACK=13, COMMA=14, COLON=15, QUOTE1=16, QUOTE2=17, 
		ASSIGNADD=18, ASSIGNSUB=19, EQ=20, NEQ=21, ASSIGN=22, PLUS=23, DASH=24, 
		ASTERISK=25, SLASH=26, DOTS3=27, DOTS2=28, NEG=29, LTE=30, GTE=31, LT=32, 
		GT=33, TRUE=34, FALSE=35, NumberLiteral=36, Identifier=37, WS=38, Comment=39, 
		CommentNSlash=40, CommentNSlashWithin=41, CommentNSlashEnd=42, InsideComment=43;
	public static final int
		COMMENT_N=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "COMMENT_N"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FN", "LET", "IF", "IN", "IS", "FOR", "RETURN", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "LBRACK", "RBRACK", "COMMA", "COLON", "QUOTE1", "QUOTE2", "ASSIGNADD", 
			"ASSIGNSUB", "EQ", "NEQ", "ASSIGN", "PLUS", "DASH", "ASTERISK", "SLASH", 
			"DOTS3", "DOTS2", "NEG", "LTE", "GTE", "LT", "GT", "TRUE", "FALSE", "DecDigit", 
			"NumberLiteral", "Identifier", "Letter", "Digit", "WS", "Comment", "CommentNSlash", 
			"CommentNSlashWithin", "CommentNSlashEnd", "InsideComment"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'fn'", "'let'", "'if'", "'in'", "'is'", "'for'", "'return'", "'('", 
			"')'", "'{'", "'}'", "'['", "']'", "','", "':'", "'''", "'\"'", "'+='", 
			"'-='", "'=='", "'!='", "'='", "'+'", "'-'", "'*'", "'/'", "'...'", "'..'", 
			"'!'", "'<='", "'>='", "'<'", "'>'", "'true'", "'false'", null, null, 
			null, null, null, null, "'*/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FN", "LET", "IF", "IN", "IS", "FOR", "RETURN", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "LBRACK", "RBRACK", "COMMA", "COLON", "QUOTE1", "QUOTE2", 
			"ASSIGNADD", "ASSIGNSUB", "EQ", "NEQ", "ASSIGN", "PLUS", "DASH", "ASTERISK", 
			"SLASH", "DOTS3", "DOTS2", "NEG", "LTE", "GTE", "LT", "GT", "TRUE", "FALSE", 
			"NumberLiteral", "Identifier", "WS", "Comment", "CommentNSlash", "CommentNSlashWithin", 
			"CommentNSlashEnd", "InsideComment"
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


	public ToyLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ToyLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000+\u0102\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000\u0007"+
		"\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007"+
		"\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007"+
		"\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n"+
		"\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002"+
		"\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002"+
		"\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002"+
		"\u0014\u0007\u0014\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002"+
		"\u0017\u0007\u0017\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002"+
		"\u001a\u0007\u001a\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002"+
		"\u001d\u0007\u001d\u0002\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002"+
		" \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0002"+
		"%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002(\u0007(\u0002)\u0007)\u0002"+
		"*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002-\u0007-\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001!\u0001"+
		"!\u0001!\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0001#\u0001"+
		"#\u0001$\u0004$\u00c5\b$\u000b$\f$\u00c6\u0001%\u0001%\u0001%\u0001%\u0005"+
		"%\u00cd\b%\n%\f%\u00d0\t%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0004("+
		"\u00d7\b(\u000b(\f(\u00d8\u0001(\u0001(\u0001)\u0001)\u0001)\u0003)\u00e0"+
		"\b)\u0001)\u0005)\u00e3\b)\n)\f)\u00e6\t)\u0001)\u0001)\u0001*\u0001*"+
		"\u0001*\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001+\u0001+\u0001"+
		"+\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001-\u0004-\u00fd\b-\u000b"+
		"-\f-\u00fe\u0001-\u0001-\u0001\u00fe\u0000.\u0002\u0001\u0004\u0002\u0006"+
		"\u0003\b\u0004\n\u0005\f\u0006\u000e\u0007\u0010\b\u0012\t\u0014\n\u0016"+
		"\u000b\u0018\f\u001a\r\u001c\u000e\u001e\u000f \u0010\"\u0011$\u0012&"+
		"\u0013(\u0014*\u0015,\u0016.\u00170\u00182\u00194\u001a6\u001b8\u001c"+
		":\u001d<\u001e>\u001f@ B!D\"F#H\u0000J$L%N\u0000P\u0000R&T\'V(X)Z*\\+"+
		"\u0002\u0000\u0001\u0004\u0001\u000009\u0002\u0000AZaz\u0003\u0000\t\n"+
		"\r\r  \u0002\u0000\n\n\r\r\u0105\u0000\u0002\u0001\u0000\u0000\u0000\u0000"+
		"\u0004\u0001\u0000\u0000\u0000\u0000\u0006\u0001\u0000\u0000\u0000\u0000"+
		"\b\u0001\u0000\u0000\u0000\u0000\n\u0001\u0000\u0000\u0000\u0000\f\u0001"+
		"\u0000\u0000\u0000\u0000\u000e\u0001\u0000\u0000\u0000\u0000\u0010\u0001"+
		"\u0000\u0000\u0000\u0000\u0012\u0001\u0000\u0000\u0000\u0000\u0014\u0001"+
		"\u0000\u0000\u0000\u0000\u0016\u0001\u0000\u0000\u0000\u0000\u0018\u0001"+
		"\u0000\u0000\u0000\u0000\u001a\u0001\u0000\u0000\u0000\u0000\u001c\u0001"+
		"\u0000\u0000\u0000\u0000\u001e\u0001\u0000\u0000\u0000\u0000 \u0001\u0000"+
		"\u0000\u0000\u0000\"\u0001\u0000\u0000\u0000\u0000$\u0001\u0000\u0000"+
		"\u0000\u0000&\u0001\u0000\u0000\u0000\u0000(\u0001\u0000\u0000\u0000\u0000"+
		"*\u0001\u0000\u0000\u0000\u0000,\u0001\u0000\u0000\u0000\u0000.\u0001"+
		"\u0000\u0000\u0000\u00000\u0001\u0000\u0000\u0000\u00002\u0001\u0000\u0000"+
		"\u0000\u00004\u0001\u0000\u0000\u0000\u00006\u0001\u0000\u0000\u0000\u0000"+
		"8\u0001\u0000\u0000\u0000\u0000:\u0001\u0000\u0000\u0000\u0000<\u0001"+
		"\u0000\u0000\u0000\u0000>\u0001\u0000\u0000\u0000\u0000@\u0001\u0000\u0000"+
		"\u0000\u0000B\u0001\u0000\u0000\u0000\u0000D\u0001\u0000\u0000\u0000\u0000"+
		"F\u0001\u0000\u0000\u0000\u0000J\u0001\u0000\u0000\u0000\u0000L\u0001"+
		"\u0000\u0000\u0000\u0000R\u0001\u0000\u0000\u0000\u0000T\u0001\u0000\u0000"+
		"\u0000\u0000V\u0001\u0000\u0000\u0000\u0001X\u0001\u0000\u0000\u0000\u0001"+
		"Z\u0001\u0000\u0000\u0000\u0001\\\u0001\u0000\u0000\u0000\u0002^\u0001"+
		"\u0000\u0000\u0000\u0004a\u0001\u0000\u0000\u0000\u0006e\u0001\u0000\u0000"+
		"\u0000\bh\u0001\u0000\u0000\u0000\nk\u0001\u0000\u0000\u0000\fn\u0001"+
		"\u0000\u0000\u0000\u000er\u0001\u0000\u0000\u0000\u0010y\u0001\u0000\u0000"+
		"\u0000\u0012{\u0001\u0000\u0000\u0000\u0014}\u0001\u0000\u0000\u0000\u0016"+
		"\u007f\u0001\u0000\u0000\u0000\u0018\u0081\u0001\u0000\u0000\u0000\u001a"+
		"\u0083\u0001\u0000\u0000\u0000\u001c\u0085\u0001\u0000\u0000\u0000\u001e"+
		"\u0087\u0001\u0000\u0000\u0000 \u0089\u0001\u0000\u0000\u0000\"\u008b"+
		"\u0001\u0000\u0000\u0000$\u008d\u0001\u0000\u0000\u0000&\u0090\u0001\u0000"+
		"\u0000\u0000(\u0093\u0001\u0000\u0000\u0000*\u0096\u0001\u0000\u0000\u0000"+
		",\u0099\u0001\u0000\u0000\u0000.\u009b\u0001\u0000\u0000\u00000\u009d"+
		"\u0001\u0000\u0000\u00002\u009f\u0001\u0000\u0000\u00004\u00a1\u0001\u0000"+
		"\u0000\u00006\u00a3\u0001\u0000\u0000\u00008\u00a7\u0001\u0000\u0000\u0000"+
		":\u00aa\u0001\u0000\u0000\u0000<\u00ac\u0001\u0000\u0000\u0000>\u00af"+
		"\u0001\u0000\u0000\u0000@\u00b2\u0001\u0000\u0000\u0000B\u00b4\u0001\u0000"+
		"\u0000\u0000D\u00b6\u0001\u0000\u0000\u0000F\u00bb\u0001\u0000\u0000\u0000"+
		"H\u00c1\u0001\u0000\u0000\u0000J\u00c4\u0001\u0000\u0000\u0000L\u00c8"+
		"\u0001\u0000\u0000\u0000N\u00d1\u0001\u0000\u0000\u0000P\u00d3\u0001\u0000"+
		"\u0000\u0000R\u00d6\u0001\u0000\u0000\u0000T\u00df\u0001\u0000\u0000\u0000"+
		"V\u00e9\u0001\u0000\u0000\u0000X\u00ef\u0001\u0000\u0000\u0000Z\u00f5"+
		"\u0001\u0000\u0000\u0000\\\u00fc\u0001\u0000\u0000\u0000^_\u0005f\u0000"+
		"\u0000_`\u0005n\u0000\u0000`\u0003\u0001\u0000\u0000\u0000ab\u0005l\u0000"+
		"\u0000bc\u0005e\u0000\u0000cd\u0005t\u0000\u0000d\u0005\u0001\u0000\u0000"+
		"\u0000ef\u0005i\u0000\u0000fg\u0005f\u0000\u0000g\u0007\u0001\u0000\u0000"+
		"\u0000hi\u0005i\u0000\u0000ij\u0005n\u0000\u0000j\t\u0001\u0000\u0000"+
		"\u0000kl\u0005i\u0000\u0000lm\u0005s\u0000\u0000m\u000b\u0001\u0000\u0000"+
		"\u0000no\u0005f\u0000\u0000op\u0005o\u0000\u0000pq\u0005r\u0000\u0000"+
		"q\r\u0001\u0000\u0000\u0000rs\u0005r\u0000\u0000st\u0005e\u0000\u0000"+
		"tu\u0005t\u0000\u0000uv\u0005u\u0000\u0000vw\u0005r\u0000\u0000wx\u0005"+
		"n\u0000\u0000x\u000f\u0001\u0000\u0000\u0000yz\u0005(\u0000\u0000z\u0011"+
		"\u0001\u0000\u0000\u0000{|\u0005)\u0000\u0000|\u0013\u0001\u0000\u0000"+
		"\u0000}~\u0005{\u0000\u0000~\u0015\u0001\u0000\u0000\u0000\u007f\u0080"+
		"\u0005}\u0000\u0000\u0080\u0017\u0001\u0000\u0000\u0000\u0081\u0082\u0005"+
		"[\u0000\u0000\u0082\u0019\u0001\u0000\u0000\u0000\u0083\u0084\u0005]\u0000"+
		"\u0000\u0084\u001b\u0001\u0000\u0000\u0000\u0085\u0086\u0005,\u0000\u0000"+
		"\u0086\u001d\u0001\u0000\u0000\u0000\u0087\u0088\u0005:\u0000\u0000\u0088"+
		"\u001f\u0001\u0000\u0000\u0000\u0089\u008a\u0005\'\u0000\u0000\u008a!"+
		"\u0001\u0000\u0000\u0000\u008b\u008c\u0005\"\u0000\u0000\u008c#\u0001"+
		"\u0000\u0000\u0000\u008d\u008e\u0005+\u0000\u0000\u008e\u008f\u0005=\u0000"+
		"\u0000\u008f%\u0001\u0000\u0000\u0000\u0090\u0091\u0005-\u0000\u0000\u0091"+
		"\u0092\u0005=\u0000\u0000\u0092\'\u0001\u0000\u0000\u0000\u0093\u0094"+
		"\u0005=\u0000\u0000\u0094\u0095\u0005=\u0000\u0000\u0095)\u0001\u0000"+
		"\u0000\u0000\u0096\u0097\u0005!\u0000\u0000\u0097\u0098\u0005=\u0000\u0000"+
		"\u0098+\u0001\u0000\u0000\u0000\u0099\u009a\u0005=\u0000\u0000\u009a-"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0005+\u0000\u0000\u009c/\u0001\u0000"+
		"\u0000\u0000\u009d\u009e\u0005-\u0000\u0000\u009e1\u0001\u0000\u0000\u0000"+
		"\u009f\u00a0\u0005*\u0000\u0000\u00a03\u0001\u0000\u0000\u0000\u00a1\u00a2"+
		"\u0005/\u0000\u0000\u00a25\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005."+
		"\u0000\u0000\u00a4\u00a5\u0005.\u0000\u0000\u00a5\u00a6\u0005.\u0000\u0000"+
		"\u00a67\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005.\u0000\u0000\u00a8\u00a9"+
		"\u0005.\u0000\u0000\u00a99\u0001\u0000\u0000\u0000\u00aa\u00ab\u0005!"+
		"\u0000\u0000\u00ab;\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005<\u0000\u0000"+
		"\u00ad\u00ae\u0005=\u0000\u0000\u00ae=\u0001\u0000\u0000\u0000\u00af\u00b0"+
		"\u0005>\u0000\u0000\u00b0\u00b1\u0005=\u0000\u0000\u00b1?\u0001\u0000"+
		"\u0000\u0000\u00b2\u00b3\u0005<\u0000\u0000\u00b3A\u0001\u0000\u0000\u0000"+
		"\u00b4\u00b5\u0005>\u0000\u0000\u00b5C\u0001\u0000\u0000\u0000\u00b6\u00b7"+
		"\u0005t\u0000\u0000\u00b7\u00b8\u0005r\u0000\u0000\u00b8\u00b9\u0005u"+
		"\u0000\u0000\u00b9\u00ba\u0005e\u0000\u0000\u00baE\u0001\u0000\u0000\u0000"+
		"\u00bb\u00bc\u0005f\u0000\u0000\u00bc\u00bd\u0005a\u0000\u0000\u00bd\u00be"+
		"\u0005l\u0000\u0000\u00be\u00bf\u0005s\u0000\u0000\u00bf\u00c0\u0005e"+
		"\u0000\u0000\u00c0G\u0001\u0000\u0000\u0000\u00c1\u00c2\u0007\u0000\u0000"+
		"\u0000\u00c2I\u0001\u0000\u0000\u0000\u00c3\u00c5\u0003H#\u0000\u00c4"+
		"\u00c3\u0001\u0000\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000\u0000\u00c6"+
		"\u00c4\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7"+
		"K\u0001\u0000\u0000\u0000\u00c8\u00ce\u0003N&\u0000\u00c9\u00cd\u0005"+
		"_\u0000\u0000\u00ca\u00cd\u0003N&\u0000\u00cb\u00cd\u0003P\'\u0000\u00cc"+
		"\u00c9\u0001\u0000\u0000\u0000\u00cc\u00ca\u0001\u0000\u0000\u0000\u00cc"+
		"\u00cb\u0001\u0000\u0000\u0000\u00cd\u00d0\u0001\u0000\u0000\u0000\u00ce"+
		"\u00cc\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf"+
		"M\u0001\u0000\u0000\u0000\u00d0\u00ce\u0001\u0000\u0000\u0000\u00d1\u00d2"+
		"\u0007\u0001\u0000\u0000\u00d2O\u0001\u0000\u0000\u0000\u00d3\u00d4\u0007"+
		"\u0000\u0000\u0000\u00d4Q\u0001\u0000\u0000\u0000\u00d5\u00d7\u0007\u0002"+
		"\u0000\u0000\u00d6\u00d5\u0001\u0000\u0000\u0000\u00d7\u00d8\u0001\u0000"+
		"\u0000\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001\u0000"+
		"\u0000\u0000\u00d9\u00da\u0001\u0000\u0000\u0000\u00da\u00db\u0006(\u0000"+
		"\u0000\u00dbS\u0001\u0000\u0000\u0000\u00dc\u00dd\u0005/\u0000\u0000\u00dd"+
		"\u00e0\u0005/\u0000\u0000\u00de\u00e0\u0005#\u0000\u0000\u00df\u00dc\u0001"+
		"\u0000\u0000\u0000\u00df\u00de\u0001\u0000\u0000\u0000\u00e0\u00e4\u0001"+
		"\u0000\u0000\u0000\u00e1\u00e3\b\u0003\u0000\u0000\u00e2\u00e1\u0001\u0000"+
		"\u0000\u0000\u00e3\u00e6\u0001\u0000\u0000\u0000\u00e4\u00e2\u0001\u0000"+
		"\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000\u00e5\u00e7\u0001\u0000"+
		"\u0000\u0000\u00e6\u00e4\u0001\u0000\u0000\u0000\u00e7\u00e8\u0006)\u0000"+
		"\u0000\u00e8U\u0001\u0000\u0000\u0000\u00e9\u00ea\u0005/\u0000\u0000\u00ea"+
		"\u00eb\u0005*\u0000\u0000\u00eb\u00ec\u0001\u0000\u0000\u0000\u00ec\u00ed"+
		"\u0006*\u0001\u0000\u00ed\u00ee\u0006*\u0000\u0000\u00eeW\u0001\u0000"+
		"\u0000\u0000\u00ef\u00f0\u0005/\u0000\u0000\u00f0\u00f1\u0005*\u0000\u0000"+
		"\u00f1\u00f2\u0001\u0000\u0000\u0000\u00f2\u00f3\u0006+\u0001\u0000\u00f3"+
		"\u00f4\u0006+\u0000\u0000\u00f4Y\u0001\u0000\u0000\u0000\u00f5\u00f6\u0005"+
		"*\u0000\u0000\u00f6\u00f7\u0005/\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000"+
		"\u0000\u00f8\u00f9\u0006,\u0002\u0000\u00f9\u00fa\u0006,\u0000\u0000\u00fa"+
		"[\u0001\u0000\u0000\u0000\u00fb\u00fd\t\u0000\u0000\u0000\u00fc\u00fb"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe\u00ff"+
		"\u0001\u0000\u0000\u0000\u00fe\u00fc\u0001\u0000\u0000\u0000\u00ff\u0100"+
		"\u0001\u0000\u0000\u0000\u0100\u0101\u0006-\u0000\u0000\u0101]\u0001\u0000"+
		"\u0000\u0000\t\u0000\u0001\u00c6\u00cc\u00ce\u00d8\u00df\u00e4\u00fe\u0003"+
		"\u0006\u0000\u0000\u0005\u0001\u0000\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}