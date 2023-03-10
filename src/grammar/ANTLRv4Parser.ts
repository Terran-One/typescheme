// Generated from ./grammar/ANTLRv4Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ANTLRv4ParserListener } from "./ANTLRv4ParserListener";
import { ANTLRv4ParserVisitor } from "./ANTLRv4ParserVisitor";


export class ANTLRv4Parser extends Parser {
	public static readonly TOKEN_REF = 1;
	public static readonly RULE_REF = 2;
	public static readonly LEXER_CHAR_SET = 3;
	public static readonly DOC_COMMENT = 4;
	public static readonly BLOCK_COMMENT = 5;
	public static readonly LINE_COMMENT = 6;
	public static readonly INT = 7;
	public static readonly STRING_LITERAL = 8;
	public static readonly UNTERMINATED_STRING_LITERAL = 9;
	public static readonly BEGIN_ARGUMENT = 10;
	public static readonly BEGIN_ACTION = 11;
	public static readonly OPTIONS = 12;
	public static readonly TOKENS = 13;
	public static readonly CHANNELS = 14;
	public static readonly IMPORT = 15;
	public static readonly FRAGMENT = 16;
	public static readonly LEXER = 17;
	public static readonly PARSER = 18;
	public static readonly GRAMMAR = 19;
	public static readonly PROTECTED = 20;
	public static readonly PUBLIC = 21;
	public static readonly PRIVATE = 22;
	public static readonly RETURNS = 23;
	public static readonly LOCALS = 24;
	public static readonly THROWS = 25;
	public static readonly CATCH = 26;
	public static readonly FINALLY = 27;
	public static readonly MODE = 28;
	public static readonly COLON = 29;
	public static readonly COLONCOLON = 30;
	public static readonly COMMA = 31;
	public static readonly SEMI = 32;
	public static readonly LPAREN = 33;
	public static readonly RPAREN = 34;
	public static readonly LBRACE = 35;
	public static readonly RBRACE = 36;
	public static readonly RARROW = 37;
	public static readonly LT = 38;
	public static readonly GT = 39;
	public static readonly ASSIGN = 40;
	public static readonly QUESTION = 41;
	public static readonly STAR = 42;
	public static readonly PLUS_ASSIGN = 43;
	public static readonly PLUS = 44;
	public static readonly OR = 45;
	public static readonly DOLLAR = 46;
	public static readonly RANGE = 47;
	public static readonly DOT = 48;
	public static readonly AT = 49;
	public static readonly POUND = 50;
	public static readonly NOT = 51;
	public static readonly ID = 52;
	public static readonly WS = 53;
	public static readonly ERRCHAR = 54;
	public static readonly END_ARGUMENT = 55;
	public static readonly UNTERMINATED_ARGUMENT = 56;
	public static readonly ARGUMENT_CONTENT = 57;
	public static readonly END_ACTION = 58;
	public static readonly UNTERMINATED_ACTION = 59;
	public static readonly ACTION_CONTENT = 60;
	public static readonly UNTERMINATED_CHAR_SET = 61;
	public static readonly RULE_grammarSpec = 0;
	public static readonly RULE_grammarDecl = 1;
	public static readonly RULE_grammarType = 2;
	public static readonly RULE_prequelConstruct = 3;
	public static readonly RULE_optionsSpec = 4;
	public static readonly RULE_option = 5;
	public static readonly RULE_optionValue = 6;
	public static readonly RULE_delegateGrammars = 7;
	public static readonly RULE_delegateGrammar = 8;
	public static readonly RULE_tokensSpec = 9;
	public static readonly RULE_channelsSpec = 10;
	public static readonly RULE_idList = 11;
	public static readonly RULE_action_ = 12;
	public static readonly RULE_actionScopeName = 13;
	public static readonly RULE_actionBlock = 14;
	public static readonly RULE_argActionBlock = 15;
	public static readonly RULE_modeSpec = 16;
	public static readonly RULE_rules = 17;
	public static readonly RULE_ruleSpec = 18;
	public static readonly RULE_parserRuleSpec = 19;
	public static readonly RULE_exceptionGroup = 20;
	public static readonly RULE_exceptionHandler = 21;
	public static readonly RULE_finallyClause = 22;
	public static readonly RULE_rulePrequel = 23;
	public static readonly RULE_ruleReturns = 24;
	public static readonly RULE_throwsSpec = 25;
	public static readonly RULE_localsSpec = 26;
	public static readonly RULE_ruleAction = 27;
	public static readonly RULE_ruleModifiers = 28;
	public static readonly RULE_ruleModifier = 29;
	public static readonly RULE_ruleBlock = 30;
	public static readonly RULE_ruleAltList = 31;
	public static readonly RULE_labeledAlt = 32;
	public static readonly RULE_lexerRuleSpec = 33;
	public static readonly RULE_lexerRuleBlock = 34;
	public static readonly RULE_lexerAltList = 35;
	public static readonly RULE_lexerAlt = 36;
	public static readonly RULE_lexerElements = 37;
	public static readonly RULE_lexerElement = 38;
	public static readonly RULE_labeledLexerElement = 39;
	public static readonly RULE_lexerBlock = 40;
	public static readonly RULE_lexerCommands = 41;
	public static readonly RULE_lexerCommand = 42;
	public static readonly RULE_lexerCommandName = 43;
	public static readonly RULE_lexerCommandExpr = 44;
	public static readonly RULE_altList = 45;
	public static readonly RULE_alternative = 46;
	public static readonly RULE_element = 47;
	public static readonly RULE_labeledElement = 48;
	public static readonly RULE_ebnf = 49;
	public static readonly RULE_blockSuffix = 50;
	public static readonly RULE_ebnfSuffix = 51;
	public static readonly RULE_lexerAtom = 52;
	public static readonly RULE_atom = 53;
	public static readonly RULE_notSet = 54;
	public static readonly RULE_blockSet = 55;
	public static readonly RULE_setElement = 56;
	public static readonly RULE_block = 57;
	public static readonly RULE_ruleref = 58;
	public static readonly RULE_characterRange = 59;
	public static readonly RULE_terminal_ = 60;
	public static readonly RULE_elementOptions = 61;
	public static readonly RULE_elementOption = 62;
	public static readonly RULE_identifier = 63;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"grammarSpec", "grammarDecl", "grammarType", "prequelConstruct", "optionsSpec", 
		"option", "optionValue", "delegateGrammars", "delegateGrammar", "tokensSpec", 
		"channelsSpec", "idList", "action_", "actionScopeName", "actionBlock", 
		"argActionBlock", "modeSpec", "rules", "ruleSpec", "parserRuleSpec", "exceptionGroup", 
		"exceptionHandler", "finallyClause", "rulePrequel", "ruleReturns", "throwsSpec", 
		"localsSpec", "ruleAction", "ruleModifiers", "ruleModifier", "ruleBlock", 
		"ruleAltList", "labeledAlt", "lexerRuleSpec", "lexerRuleBlock", "lexerAltList", 
		"lexerAlt", "lexerElements", "lexerElement", "labeledLexerElement", "lexerBlock", 
		"lexerCommands", "lexerCommand", "lexerCommandName", "lexerCommandExpr", 
		"altList", "alternative", "element", "labeledElement", "ebnf", "blockSuffix", 
		"ebnfSuffix", "lexerAtom", "atom", "notSet", "blockSet", "setElement", 
		"block", "ruleref", "characterRange", "terminal_", "elementOptions", "elementOption", 
		"identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'import'", "'fragment'", "'lexer'", "'parser'", "'grammar'", 
		"'protected'", "'public'", "'private'", "'returns'", "'locals'", "'throws'", 
		"'catch'", "'finally'", "'mode'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TOKEN_REF", "RULE_REF", "LEXER_CHAR_SET", "DOC_COMMENT", "BLOCK_COMMENT", 
		"LINE_COMMENT", "INT", "STRING_LITERAL", "UNTERMINATED_STRING_LITERAL", 
		"BEGIN_ARGUMENT", "BEGIN_ACTION", "OPTIONS", "TOKENS", "CHANNELS", "IMPORT", 
		"FRAGMENT", "LEXER", "PARSER", "GRAMMAR", "PROTECTED", "PUBLIC", "PRIVATE", 
		"RETURNS", "LOCALS", "THROWS", "CATCH", "FINALLY", "MODE", "COLON", "COLONCOLON", 
		"COMMA", "SEMI", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "RARROW", "LT", 
		"GT", "ASSIGN", "QUESTION", "STAR", "PLUS_ASSIGN", "PLUS", "OR", "DOLLAR", 
		"RANGE", "DOT", "AT", "POUND", "NOT", "ID", "WS", "ERRCHAR", "END_ARGUMENT", 
		"UNTERMINATED_ARGUMENT", "ARGUMENT_CONTENT", "END_ACTION", "UNTERMINATED_ACTION", 
		"ACTION_CONTENT", "UNTERMINATED_CHAR_SET",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ANTLRv4Parser._LITERAL_NAMES, ANTLRv4Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ANTLRv4Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ANTLRv4Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ANTLRv4Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ANTLRv4Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ANTLRv4Parser._ATN, this);
	}
	// @RuleVersion(0)
	public grammarSpec(): GrammarSpecContext {
		let _localctx: GrammarSpecContext = new GrammarSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ANTLRv4Parser.RULE_grammarSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.grammarDecl();
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.OPTIONS) | (1 << ANTLRv4Parser.TOKENS) | (1 << ANTLRv4Parser.CHANNELS) | (1 << ANTLRv4Parser.IMPORT))) !== 0) || _la === ANTLRv4Parser.AT) {
				{
				{
				this.state = 129;
				this.prequelConstruct();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.rules();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.MODE) {
				{
				{
				this.state = 136;
				this.modeSpec();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
			this.match(ANTLRv4Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grammarDecl(): GrammarDeclContext {
		let _localctx: GrammarDeclContext = new GrammarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ANTLRv4Parser.RULE_grammarDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.grammarType();
			this.state = 145;
			this.identifier();
			this.state = 146;
			this.match(ANTLRv4Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grammarType(): GrammarTypeContext {
		let _localctx: GrammarTypeContext = new GrammarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ANTLRv4Parser.RULE_grammarType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.LEXER:
				{
				this.state = 148;
				this.match(ANTLRv4Parser.LEXER);
				this.state = 149;
				this.match(ANTLRv4Parser.GRAMMAR);
				}
				break;
			case ANTLRv4Parser.PARSER:
				{
				this.state = 150;
				this.match(ANTLRv4Parser.PARSER);
				this.state = 151;
				this.match(ANTLRv4Parser.GRAMMAR);
				}
				break;
			case ANTLRv4Parser.GRAMMAR:
				{
				this.state = 152;
				this.match(ANTLRv4Parser.GRAMMAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prequelConstruct(): PrequelConstructContext {
		let _localctx: PrequelConstructContext = new PrequelConstructContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ANTLRv4Parser.RULE_prequelConstruct);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.OPTIONS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.optionsSpec();
				}
				break;
			case ANTLRv4Parser.IMPORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.delegateGrammars();
				}
				break;
			case ANTLRv4Parser.TOKENS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.tokensSpec();
				}
				break;
			case ANTLRv4Parser.CHANNELS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 158;
				this.channelsSpec();
				}
				break;
			case ANTLRv4Parser.AT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 159;
				this.action_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionsSpec(): OptionsSpecContext {
		let _localctx: OptionsSpecContext = new OptionsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ANTLRv4Parser.RULE_optionsSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(ANTLRv4Parser.OPTIONS);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
				{
				{
				this.state = 163;
				this.option();
				this.state = 164;
				this.match(ANTLRv4Parser.SEMI);
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 171;
			this.match(ANTLRv4Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ANTLRv4Parser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.identifier();
			this.state = 174;
			this.match(ANTLRv4Parser.ASSIGN);
			this.state = 175;
			this.optionValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionValue(): OptionValueContext {
		let _localctx: OptionValueContext = new OptionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ANTLRv4Parser.RULE_optionValue);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.identifier();
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ANTLRv4Parser.DOT) {
					{
					{
					this.state = 178;
					this.match(ANTLRv4Parser.DOT);
					this.state = 179;
					this.identifier();
					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case ANTLRv4Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.match(ANTLRv4Parser.STRING_LITERAL);
				}
				break;
			case ANTLRv4Parser.BEGIN_ACTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 186;
				this.actionBlock();
				}
				break;
			case ANTLRv4Parser.INT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.match(ANTLRv4Parser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delegateGrammars(): DelegateGrammarsContext {
		let _localctx: DelegateGrammarsContext = new DelegateGrammarsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ANTLRv4Parser.RULE_delegateGrammars);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(ANTLRv4Parser.IMPORT);
			this.state = 191;
			this.delegateGrammar();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.COMMA) {
				{
				{
				this.state = 192;
				this.match(ANTLRv4Parser.COMMA);
				this.state = 193;
				this.delegateGrammar();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this.match(ANTLRv4Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delegateGrammar(): DelegateGrammarContext {
		let _localctx: DelegateGrammarContext = new DelegateGrammarContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ANTLRv4Parser.RULE_delegateGrammar);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.identifier();
				this.state = 202;
				this.match(ANTLRv4Parser.ASSIGN);
				this.state = 203;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokensSpec(): TokensSpecContext {
		let _localctx: TokensSpecContext = new TokensSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ANTLRv4Parser.RULE_tokensSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(ANTLRv4Parser.TOKENS);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
				{
				this.state = 209;
				this.idList();
				}
			}

			this.state = 212;
			this.match(ANTLRv4Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public channelsSpec(): ChannelsSpecContext {
		let _localctx: ChannelsSpecContext = new ChannelsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ANTLRv4Parser.RULE_channelsSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(ANTLRv4Parser.CHANNELS);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF) {
				{
				this.state = 215;
				this.idList();
				}
			}

			this.state = 218;
			this.match(ANTLRv4Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ANTLRv4Parser.RULE_idList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.identifier();
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					this.match(ANTLRv4Parser.COMMA);
					this.state = 222;
					this.identifier();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.COMMA) {
				{
				this.state = 228;
				this.match(ANTLRv4Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action_(): Action_Context {
		let _localctx: Action_Context = new Action_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, ANTLRv4Parser.RULE_action_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(ANTLRv4Parser.AT);
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 232;
				this.actionScopeName();
				this.state = 233;
				this.match(ANTLRv4Parser.COLONCOLON);
				}
				break;
			}
			this.state = 237;
			this.identifier();
			this.state = 238;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionScopeName(): ActionScopeNameContext {
		let _localctx: ActionScopeNameContext = new ActionScopeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ANTLRv4Parser.RULE_actionScopeName);
		try {
			this.state = 243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.identifier();
				}
				break;
			case ANTLRv4Parser.LEXER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.match(ANTLRv4Parser.LEXER);
				}
				break;
			case ANTLRv4Parser.PARSER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 242;
				this.match(ANTLRv4Parser.PARSER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionBlock(): ActionBlockContext {
		let _localctx: ActionBlockContext = new ActionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ANTLRv4Parser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(ANTLRv4Parser.BEGIN_ACTION);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.ACTION_CONTENT) {
				{
				{
				this.state = 246;
				this.match(ANTLRv4Parser.ACTION_CONTENT);
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 252;
			this.match(ANTLRv4Parser.END_ACTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argActionBlock(): ArgActionBlockContext {
		let _localctx: ArgActionBlockContext = new ArgActionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ANTLRv4Parser.RULE_argActionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(ANTLRv4Parser.BEGIN_ARGUMENT);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.ARGUMENT_CONTENT) {
				{
				{
				this.state = 255;
				this.match(ANTLRv4Parser.ARGUMENT_CONTENT);
				}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 261;
			this.match(ANTLRv4Parser.END_ARGUMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modeSpec(): ModeSpecContext {
		let _localctx: ModeSpecContext = new ModeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ANTLRv4Parser.RULE_modeSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(ANTLRv4Parser.MODE);
			this.state = 264;
			this.identifier();
			this.state = 265;
			this.match(ANTLRv4Parser.SEMI);
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.FRAGMENT) {
				{
				{
				this.state = 266;
				this.lexerRuleSpec();
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rules(): RulesContext {
		let _localctx: RulesContext = new RulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ANTLRv4Parser.RULE_rules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0)) {
				{
				{
				this.state = 272;
				this.ruleSpec();
				}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleSpec(): RuleSpecContext {
		let _localctx: RuleSpecContext = new RuleSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ANTLRv4Parser.RULE_ruleSpec);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.parserRuleSpec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.lexerRuleSpec();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parserRuleSpec(): ParserRuleSpecContext {
		let _localctx: ParserRuleSpecContext = new ParserRuleSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ANTLRv4Parser.RULE_parserRuleSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0)) {
				{
				this.state = 282;
				this.ruleModifiers();
				}
			}

			this.state = 285;
			this.match(ANTLRv4Parser.RULE_REF);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.BEGIN_ARGUMENT) {
				{
				this.state = 286;
				this.argActionBlock();
				}
			}

			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.RETURNS) {
				{
				this.state = 289;
				this.ruleReturns();
				}
			}

			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.THROWS) {
				{
				this.state = 292;
				this.throwsSpec();
				}
			}

			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.LOCALS) {
				{
				this.state = 295;
				this.localsSpec();
				}
			}

			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.OPTIONS || _la === ANTLRv4Parser.AT) {
				{
				{
				this.state = 298;
				this.rulePrequel();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 304;
			this.match(ANTLRv4Parser.COLON);
			this.state = 305;
			this.ruleBlock();
			this.state = 306;
			this.match(ANTLRv4Parser.SEMI);
			this.state = 307;
			this.exceptionGroup();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionGroup(): ExceptionGroupContext {
		let _localctx: ExceptionGroupContext = new ExceptionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ANTLRv4Parser.RULE_exceptionGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.CATCH) {
				{
				{
				this.state = 309;
				this.exceptionHandler();
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.FINALLY) {
				{
				this.state = 315;
				this.finallyClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionHandler(): ExceptionHandlerContext {
		let _localctx: ExceptionHandlerContext = new ExceptionHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ANTLRv4Parser.RULE_exceptionHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(ANTLRv4Parser.CATCH);
			this.state = 319;
			this.argActionBlock();
			this.state = 320;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyClause(): FinallyClauseContext {
		let _localctx: FinallyClauseContext = new FinallyClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ANTLRv4Parser.RULE_finallyClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(ANTLRv4Parser.FINALLY);
			this.state = 323;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulePrequel(): RulePrequelContext {
		let _localctx: RulePrequelContext = new RulePrequelContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ANTLRv4Parser.RULE_rulePrequel);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.OPTIONS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.optionsSpec();
				}
				break;
			case ANTLRv4Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.ruleAction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleReturns(): RuleReturnsContext {
		let _localctx: RuleReturnsContext = new RuleReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ANTLRv4Parser.RULE_ruleReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(ANTLRv4Parser.RETURNS);
			this.state = 330;
			this.argActionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwsSpec(): ThrowsSpecContext {
		let _localctx: ThrowsSpecContext = new ThrowsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ANTLRv4Parser.RULE_throwsSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(ANTLRv4Parser.THROWS);
			this.state = 333;
			this.identifier();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.COMMA) {
				{
				{
				this.state = 334;
				this.match(ANTLRv4Parser.COMMA);
				this.state = 335;
				this.identifier();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localsSpec(): LocalsSpecContext {
		let _localctx: LocalsSpecContext = new LocalsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ANTLRv4Parser.RULE_localsSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.match(ANTLRv4Parser.LOCALS);
			this.state = 342;
			this.argActionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleAction(): RuleActionContext {
		let _localctx: RuleActionContext = new RuleActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ANTLRv4Parser.RULE_ruleAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(ANTLRv4Parser.AT);
			this.state = 345;
			this.identifier();
			this.state = 346;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleModifiers(): RuleModifiersContext {
		let _localctx: RuleModifiersContext = new RuleModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ANTLRv4Parser.RULE_ruleModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 348;
				this.ruleModifier();
				}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleModifier(): RuleModifierContext {
		let _localctx: RuleModifierContext = new RuleModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ANTLRv4Parser.RULE_ruleModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.FRAGMENT) | (1 << ANTLRv4Parser.PROTECTED) | (1 << ANTLRv4Parser.PUBLIC) | (1 << ANTLRv4Parser.PRIVATE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleBlock(): RuleBlockContext {
		let _localctx: RuleBlockContext = new RuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ANTLRv4Parser.RULE_ruleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.ruleAltList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleAltList(): RuleAltListContext {
		let _localctx: RuleAltListContext = new RuleAltListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ANTLRv4Parser.RULE_ruleAltList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.labeledAlt();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.OR) {
				{
				{
				this.state = 358;
				this.match(ANTLRv4Parser.OR);
				this.state = 359;
				this.labeledAlt();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledAlt(): LabeledAltContext {
		let _localctx: LabeledAltContext = new LabeledAltContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ANTLRv4Parser.RULE_labeledAlt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.alternative();
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.POUND) {
				{
				this.state = 366;
				this.match(ANTLRv4Parser.POUND);
				this.state = 367;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerRuleSpec(): LexerRuleSpecContext {
		let _localctx: LexerRuleSpecContext = new LexerRuleSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ANTLRv4Parser.RULE_lexerRuleSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.FRAGMENT) {
				{
				this.state = 370;
				this.match(ANTLRv4Parser.FRAGMENT);
				}
			}

			this.state = 373;
			this.match(ANTLRv4Parser.TOKEN_REF);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.OPTIONS) {
				{
				this.state = 374;
				this.optionsSpec();
				}
			}

			this.state = 377;
			this.match(ANTLRv4Parser.COLON);
			this.state = 378;
			this.lexerRuleBlock();
			this.state = 379;
			this.match(ANTLRv4Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerRuleBlock(): LexerRuleBlockContext {
		let _localctx: LexerRuleBlockContext = new LexerRuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ANTLRv4Parser.RULE_lexerRuleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.lexerAltList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerAltList(): LexerAltListContext {
		let _localctx: LexerAltListContext = new LexerAltListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ANTLRv4Parser.RULE_lexerAltList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.lexerAlt();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.OR) {
				{
				{
				this.state = 384;
				this.match(ANTLRv4Parser.OR);
				this.state = 385;
				this.lexerAlt();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerAlt(): LexerAltContext {
		let _localctx: LexerAltContext = new LexerAltContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ANTLRv4Parser.RULE_lexerAlt);
		let _la: number;
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 391;
				this.lexerElements();
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.RARROW) {
					{
					this.state = 392;
					this.lexerCommands();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerElements(): LexerElementsContext {
		let _localctx: LexerElementsContext = new LexerElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ANTLRv4Parser.RULE_lexerElements);
		let _la: number;
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
			case ANTLRv4Parser.LEXER_CHAR_SET:
			case ANTLRv4Parser.STRING_LITERAL:
			case ANTLRv4Parser.BEGIN_ACTION:
			case ANTLRv4Parser.LPAREN:
			case ANTLRv4Parser.DOT:
			case ANTLRv4Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 398;
					this.lexerElement();
					}
					}
					this.state = 401;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.LEXER_CHAR_SET) | (1 << ANTLRv4Parser.STRING_LITERAL) | (1 << ANTLRv4Parser.BEGIN_ACTION))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ANTLRv4Parser.LPAREN - 33)) | (1 << (ANTLRv4Parser.DOT - 33)) | (1 << (ANTLRv4Parser.NOT - 33)))) !== 0));
				}
				break;
			case ANTLRv4Parser.SEMI:
			case ANTLRv4Parser.RPAREN:
			case ANTLRv4Parser.RARROW:
			case ANTLRv4Parser.OR:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerElement(): LexerElementContext {
		let _localctx: LexerElementContext = new LexerElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ANTLRv4Parser.RULE_lexerElement);
		let _la: number;
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.labeledLexerElement();
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
					{
					this.state = 407;
					this.ebnfSuffix();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.lexerAtom();
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
					{
					this.state = 411;
					this.ebnfSuffix();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.lexerBlock();
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
					{
					this.state = 415;
					this.ebnfSuffix();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 418;
				this.actionBlock();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.QUESTION) {
					{
					this.state = 419;
					this.match(ANTLRv4Parser.QUESTION);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledLexerElement(): LabeledLexerElementContext {
		let _localctx: LabeledLexerElementContext = new LabeledLexerElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ANTLRv4Parser.RULE_labeledLexerElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.identifier();
			this.state = 425;
			_la = this._input.LA(1);
			if (!(_la === ANTLRv4Parser.ASSIGN || _la === ANTLRv4Parser.PLUS_ASSIGN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 428;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.LEXER_CHAR_SET:
			case ANTLRv4Parser.STRING_LITERAL:
			case ANTLRv4Parser.DOT:
			case ANTLRv4Parser.NOT:
				{
				this.state = 426;
				this.lexerAtom();
				}
				break;
			case ANTLRv4Parser.LPAREN:
				{
				this.state = 427;
				this.lexerBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerBlock(): LexerBlockContext {
		let _localctx: LexerBlockContext = new LexerBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ANTLRv4Parser.RULE_lexerBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(ANTLRv4Parser.LPAREN);
			this.state = 431;
			this.lexerAltList();
			this.state = 432;
			this.match(ANTLRv4Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerCommands(): LexerCommandsContext {
		let _localctx: LexerCommandsContext = new LexerCommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ANTLRv4Parser.RULE_lexerCommands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(ANTLRv4Parser.RARROW);
			this.state = 435;
			this.lexerCommand();
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.COMMA) {
				{
				{
				this.state = 436;
				this.match(ANTLRv4Parser.COMMA);
				this.state = 437;
				this.lexerCommand();
				}
				}
				this.state = 442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerCommand(): LexerCommandContext {
		let _localctx: LexerCommandContext = new LexerCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ANTLRv4Parser.RULE_lexerCommand);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.lexerCommandName();
				this.state = 444;
				this.match(ANTLRv4Parser.LPAREN);
				this.state = 445;
				this.lexerCommandExpr();
				this.state = 446;
				this.match(ANTLRv4Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.lexerCommandName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerCommandName(): LexerCommandNameContext {
		let _localctx: LexerCommandNameContext = new LexerCommandNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ANTLRv4Parser.RULE_lexerCommandName);
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.identifier();
				}
				break;
			case ANTLRv4Parser.MODE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 452;
				this.match(ANTLRv4Parser.MODE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerCommandExpr(): LexerCommandExprContext {
		let _localctx: LexerCommandExprContext = new LexerCommandExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ANTLRv4Parser.RULE_lexerCommandExpr);
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.identifier();
				}
				break;
			case ANTLRv4Parser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this.match(ANTLRv4Parser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public altList(): AltListContext {
		let _localctx: AltListContext = new AltListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ANTLRv4Parser.RULE_altList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.alternative();
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.OR) {
				{
				{
				this.state = 460;
				this.match(ANTLRv4Parser.OR);
				this.state = 461;
				this.alternative();
				}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternative(): AlternativeContext {
		let _localctx: AlternativeContext = new AlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ANTLRv4Parser.RULE_alternative);
		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
			case ANTLRv4Parser.STRING_LITERAL:
			case ANTLRv4Parser.BEGIN_ACTION:
			case ANTLRv4Parser.LPAREN:
			case ANTLRv4Parser.LT:
			case ANTLRv4Parser.DOT:
			case ANTLRv4Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 467;
					this.elementOptions();
					}
				}

				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 470;
					this.element();
					}
					}
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv4Parser.TOKEN_REF) | (1 << ANTLRv4Parser.RULE_REF) | (1 << ANTLRv4Parser.STRING_LITERAL) | (1 << ANTLRv4Parser.BEGIN_ACTION))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ANTLRv4Parser.LPAREN - 33)) | (1 << (ANTLRv4Parser.DOT - 33)) | (1 << (ANTLRv4Parser.NOT - 33)))) !== 0));
				}
				break;
			case ANTLRv4Parser.SEMI:
			case ANTLRv4Parser.RPAREN:
			case ANTLRv4Parser.OR:
			case ANTLRv4Parser.POUND:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ANTLRv4Parser.RULE_element);
		let _la: number;
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.labeledElement();
				this.state = 481;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ANTLRv4Parser.QUESTION:
				case ANTLRv4Parser.STAR:
				case ANTLRv4Parser.PLUS:
					{
					this.state = 479;
					this.ebnfSuffix();
					}
					break;
				case ANTLRv4Parser.TOKEN_REF:
				case ANTLRv4Parser.RULE_REF:
				case ANTLRv4Parser.STRING_LITERAL:
				case ANTLRv4Parser.BEGIN_ACTION:
				case ANTLRv4Parser.SEMI:
				case ANTLRv4Parser.LPAREN:
				case ANTLRv4Parser.RPAREN:
				case ANTLRv4Parser.OR:
				case ANTLRv4Parser.DOT:
				case ANTLRv4Parser.POUND:
				case ANTLRv4Parser.NOT:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.atom();
				this.state = 486;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ANTLRv4Parser.QUESTION:
				case ANTLRv4Parser.STAR:
				case ANTLRv4Parser.PLUS:
					{
					this.state = 484;
					this.ebnfSuffix();
					}
					break;
				case ANTLRv4Parser.TOKEN_REF:
				case ANTLRv4Parser.RULE_REF:
				case ANTLRv4Parser.STRING_LITERAL:
				case ANTLRv4Parser.BEGIN_ACTION:
				case ANTLRv4Parser.SEMI:
				case ANTLRv4Parser.LPAREN:
				case ANTLRv4Parser.RPAREN:
				case ANTLRv4Parser.OR:
				case ANTLRv4Parser.DOT:
				case ANTLRv4Parser.POUND:
				case ANTLRv4Parser.NOT:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 488;
				this.ebnf();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 489;
				this.actionBlock();
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.QUESTION) {
					{
					this.state = 490;
					this.match(ANTLRv4Parser.QUESTION);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledElement(): LabeledElementContext {
		let _localctx: LabeledElementContext = new LabeledElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ANTLRv4Parser.RULE_labeledElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.identifier();
			this.state = 496;
			_la = this._input.LA(1);
			if (!(_la === ANTLRv4Parser.ASSIGN || _la === ANTLRv4Parser.PLUS_ASSIGN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 499;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.RULE_REF:
			case ANTLRv4Parser.STRING_LITERAL:
			case ANTLRv4Parser.DOT:
			case ANTLRv4Parser.NOT:
				{
				this.state = 497;
				this.atom();
				}
				break;
			case ANTLRv4Parser.LPAREN:
				{
				this.state = 498;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ebnf(): EbnfContext {
		let _localctx: EbnfContext = new EbnfContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ANTLRv4Parser.RULE_ebnf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.block();
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ANTLRv4Parser.QUESTION - 41)) | (1 << (ANTLRv4Parser.STAR - 41)) | (1 << (ANTLRv4Parser.PLUS - 41)))) !== 0)) {
				{
				this.state = 502;
				this.blockSuffix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockSuffix(): BlockSuffixContext {
		let _localctx: BlockSuffixContext = new BlockSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ANTLRv4Parser.RULE_blockSuffix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.ebnfSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ebnfSuffix(): EbnfSuffixContext {
		let _localctx: EbnfSuffixContext = new EbnfSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ANTLRv4Parser.RULE_ebnfSuffix);
		let _la: number;
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.QUESTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.match(ANTLRv4Parser.QUESTION);
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.QUESTION) {
					{
					this.state = 508;
					this.match(ANTLRv4Parser.QUESTION);
					}
				}

				}
				break;
			case ANTLRv4Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.match(ANTLRv4Parser.STAR);
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.QUESTION) {
					{
					this.state = 512;
					this.match(ANTLRv4Parser.QUESTION);
					}
				}

				}
				break;
			case ANTLRv4Parser.PLUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 515;
				this.match(ANTLRv4Parser.PLUS);
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.QUESTION) {
					{
					this.state = 516;
					this.match(ANTLRv4Parser.QUESTION);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lexerAtom(): LexerAtomContext {
		let _localctx: LexerAtomContext = new LexerAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ANTLRv4Parser.RULE_lexerAtom);
		let _la: number;
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.characterRange();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.terminal_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 523;
				this.notSet();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 524;
				this.match(ANTLRv4Parser.LEXER_CHAR_SET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 525;
				this.match(ANTLRv4Parser.DOT);
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 526;
					this.elementOptions();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ANTLRv4Parser.RULE_atom);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
			case ANTLRv4Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 531;
				this.terminal_();
				}
				break;
			case ANTLRv4Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.ruleref();
				}
				break;
			case ANTLRv4Parser.NOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 533;
				this.notSet();
				}
				break;
			case ANTLRv4Parser.DOT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 534;
				this.match(ANTLRv4Parser.DOT);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 535;
					this.elementOptions();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notSet(): NotSetContext {
		let _localctx: NotSetContext = new NotSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ANTLRv4Parser.RULE_notSet);
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 540;
				this.match(ANTLRv4Parser.NOT);
				this.state = 541;
				this.setElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.match(ANTLRv4Parser.NOT);
				this.state = 543;
				this.blockSet();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockSet(): BlockSetContext {
		let _localctx: BlockSetContext = new BlockSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ANTLRv4Parser.RULE_blockSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(ANTLRv4Parser.LPAREN);
			this.state = 547;
			this.setElement();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.OR) {
				{
				{
				this.state = 548;
				this.match(ANTLRv4Parser.OR);
				this.state = 549;
				this.setElement();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
			this.match(ANTLRv4Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setElement(): SetElementContext {
		let _localctx: SetElementContext = new SetElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ANTLRv4Parser.RULE_setElement);
		let _la: number;
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 557;
				this.match(ANTLRv4Parser.TOKEN_REF);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 558;
					this.elementOptions();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 561;
				this.match(ANTLRv4Parser.STRING_LITERAL);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 562;
					this.elementOptions();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 565;
				this.characterRange();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 566;
				this.match(ANTLRv4Parser.LEXER_CHAR_SET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ANTLRv4Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(ANTLRv4Parser.LPAREN);
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.OPTIONS || _la === ANTLRv4Parser.COLON || _la === ANTLRv4Parser.AT) {
				{
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.OPTIONS) {
					{
					this.state = 570;
					this.optionsSpec();
					}
				}

				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ANTLRv4Parser.AT) {
					{
					{
					this.state = 573;
					this.ruleAction();
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 579;
				this.match(ANTLRv4Parser.COLON);
				}
			}

			this.state = 582;
			this.altList();
			this.state = 583;
			this.match(ANTLRv4Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleref(): RulerefContext {
		let _localctx: RulerefContext = new RulerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ANTLRv4Parser.RULE_ruleref);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(ANTLRv4Parser.RULE_REF);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.BEGIN_ARGUMENT) {
				{
				this.state = 586;
				this.argActionBlock();
				}
			}

			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv4Parser.LT) {
				{
				this.state = 589;
				this.elementOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characterRange(): CharacterRangeContext {
		let _localctx: CharacterRangeContext = new CharacterRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ANTLRv4Parser.RULE_characterRange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(ANTLRv4Parser.STRING_LITERAL);
			this.state = 593;
			this.match(ANTLRv4Parser.RANGE);
			this.state = 594;
			this.match(ANTLRv4Parser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terminal_(): Terminal_Context {
		let _localctx: Terminal_Context = new Terminal_Context(this._ctx, this.state);
		this.enterRule(_localctx, 120, ANTLRv4Parser.RULE_terminal_);
		let _la: number;
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv4Parser.TOKEN_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.match(ANTLRv4Parser.TOKEN_REF);
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 597;
					this.elementOptions();
					}
				}

				}
				break;
			case ANTLRv4Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.match(ANTLRv4Parser.STRING_LITERAL);
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv4Parser.LT) {
					{
					this.state = 601;
					this.elementOptions();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementOptions(): ElementOptionsContext {
		let _localctx: ElementOptionsContext = new ElementOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ANTLRv4Parser.RULE_elementOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.match(ANTLRv4Parser.LT);
			this.state = 607;
			this.elementOption();
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv4Parser.COMMA) {
				{
				{
				this.state = 608;
				this.match(ANTLRv4Parser.COMMA);
				this.state = 609;
				this.elementOption();
				}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 615;
			this.match(ANTLRv4Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementOption(): ElementOptionContext {
		let _localctx: ElementOptionContext = new ElementOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ANTLRv4Parser.RULE_elementOption);
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 617;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 618;
				this.identifier();
				this.state = 619;
				this.match(ANTLRv4Parser.ASSIGN);
				this.state = 622;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ANTLRv4Parser.TOKEN_REF:
				case ANTLRv4Parser.RULE_REF:
					{
					this.state = 620;
					this.identifier();
					}
					break;
				case ANTLRv4Parser.STRING_LITERAL:
					{
					this.state = 621;
					this.match(ANTLRv4Parser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ANTLRv4Parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			_la = this._input.LA(1);
			if (!(_la === ANTLRv4Parser.TOKEN_REF || _la === ANTLRv4Parser.RULE_REF)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0277\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x03\x02\x03\x02\x07\x02\x85\n\x02" +
		"\f\x02\x0E\x02\x88\v\x02\x03\x02\x03\x02\x07\x02\x8C\n\x02\f\x02\x0E\x02" +
		"\x8F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\x9C\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xA3\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06\xA9\n\x06\f\x06\x0E\x06\xAC\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b\xB7\n\b\f\b\x0E\b\xBA\v\b\x03" +
		"\b\x03\b\x03\b\x05\b\xBF\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\xC5\n\t\f\t" +
		"\x0E\t\xC8\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD1\n\n" +
		"\x03\v\x03\v\x05\v\xD5\n\v\x03\v\x03\v\x03\f\x03\f\x05\f\xDB\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x07\r\xE2\n\r\f\r\x0E\r\xE5\v\r\x03\r\x05\r\xE8" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xEE\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF6\n\x0F\x03\x10\x03\x10\x07" +
		"\x10\xFA\n\x10\f\x10\x0E\x10\xFD\v\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x07\x11\u0103\n\x11\f\x11\x0E\x11\u0106\v\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u010E\n\x12\f\x12\x0E\x12\u0111\v\x12" +
		"\x03\x13\x07\x13\u0114\n\x13\f\x13\x0E\x13\u0117\v\x13\x03\x14\x03\x14" +
		"\x05\x14\u011B\n\x14\x03\x15\x05\x15\u011E\n\x15\x03\x15\x03\x15\x05\x15" +
		"\u0122\n\x15\x03\x15\x05\x15\u0125\n\x15\x03\x15\x05\x15\u0128\n\x15\x03" +
		"\x15\x05\x15\u012B\n\x15\x03\x15\x07\x15\u012E\n\x15\f\x15\x0E\x15\u0131" +
		"\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x07\x16\u0139\n" +
		"\x16\f\x16\x0E\x16\u013C\v\x16\x03\x16\x05\x16\u013F\n\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u014A" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0153\n\x1B\f\x1B\x0E\x1B\u0156\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x06\x1E\u0160\n\x1E\r\x1E\x0E\x1E\u0161" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x07!\u016B\n!\f!\x0E!\u016E" +
		"\v!\x03\"\x03\"\x03\"\x05\"\u0173\n\"\x03#\x05#\u0176\n#\x03#\x03#\x05" +
		"#\u017A\n#\x03#\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x07%\u0185\n%" +
		"\f%\x0E%\u0188\v%\x03&\x03&\x05&\u018C\n&\x03&\x05&\u018F\n&\x03\'\x06" +
		"\'\u0192\n\'\r\'\x0E\'\u0193\x03\'\x05\'\u0197\n\'\x03(\x03(\x05(\u019B" +
		"\n(\x03(\x03(\x05(\u019F\n(\x03(\x03(\x05(\u01A3\n(\x03(\x03(\x05(\u01A7" +
		"\n(\x05(\u01A9\n(\x03)\x03)\x03)\x03)\x05)\u01AF\n)\x03*\x03*\x03*\x03" +
		"*\x03+\x03+\x03+\x03+\x07+\u01B9\n+\f+\x0E+\u01BC\v+\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x05,\u01C4\n,\x03-\x03-\x05-\u01C8\n-\x03.\x03.\x05.\u01CC" +
		"\n.\x03/\x03/\x03/\x07/\u01D1\n/\f/\x0E/\u01D4\v/\x030\x050\u01D7\n0\x03" +
		"0\x060\u01DA\n0\r0\x0E0\u01DB\x030\x050\u01DF\n0\x031\x031\x031\x051\u01E4" +
		"\n1\x031\x031\x031\x051\u01E9\n1\x031\x031\x031\x051\u01EE\n1\x051\u01F0" +
		"\n1\x032\x032\x032\x032\x052\u01F6\n2\x033\x033\x053\u01FA\n3\x034\x03" +
		"4\x035\x035\x055\u0200\n5\x035\x035\x055\u0204\n5\x035\x035\x055\u0208" +
		"\n5\x055\u020A\n5\x036\x036\x036\x036\x036\x036\x056\u0212\n6\x056\u0214" +
		"\n6\x037\x037\x037\x037\x037\x057\u021B\n7\x057\u021D\n7\x038\x038\x03" +
		"8\x038\x058\u0223\n8\x039\x039\x039\x039\x079\u0229\n9\f9\x0E9\u022C\v" +
		"9\x039\x039\x03:\x03:\x05:\u0232\n:\x03:\x03:\x05:\u0236\n:\x03:\x03:" +
		"\x05:\u023A\n:\x03;\x03;\x05;\u023E\n;\x03;\x07;\u0241\n;\f;\x0E;\u0244" +
		"\v;\x03;\x05;\u0247\n;\x03;\x03;\x03;\x03<\x03<\x05<\u024E\n<\x03<\x05" +
		"<\u0251\n<\x03=\x03=\x03=\x03=\x03>\x03>\x05>\u0259\n>\x03>\x03>\x05>" +
		"\u025D\n>\x05>\u025F\n>\x03?\x03?\x03?\x03?\x07?\u0265\n?\f?\x0E?\u0268" +
		"\v?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x05@\u0271\n@\x05@\u0273\n@\x03" +
		"A\x03A\x03A\x02\x02\x02B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x02\x05\x04\x02\x12\x12\x16\x18" +
		"\x04\x02**--\x03\x02\x03\x04\x02\u029D\x02\x82\x03\x02\x02\x02\x04\x92" +
		"\x03\x02\x02\x02\x06\x9B\x03\x02\x02\x02\b\xA2\x03\x02\x02\x02\n\xA4\x03" +
		"\x02\x02\x02\f\xAF\x03\x02\x02\x02\x0E\xBE\x03\x02\x02\x02\x10\xC0\x03" +
		"\x02\x02\x02\x12\xD0\x03\x02\x02\x02\x14\xD2\x03\x02\x02\x02\x16\xD8\x03" +
		"\x02\x02\x02\x18\xDE\x03\x02\x02\x02\x1A\xE9\x03\x02\x02\x02\x1C\xF5\x03" +
		"\x02\x02\x02\x1E\xF7\x03\x02\x02\x02 \u0100\x03\x02\x02\x02\"\u0109\x03" +
		"\x02\x02\x02$\u0115\x03\x02\x02\x02&\u011A\x03\x02\x02\x02(\u011D\x03" +
		"\x02\x02\x02*\u013A\x03\x02\x02\x02,\u0140\x03\x02\x02\x02.\u0144\x03" +
		"\x02\x02\x020\u0149\x03\x02\x02\x022\u014B\x03\x02\x02\x024\u014E\x03" +
		"\x02\x02\x026\u0157\x03\x02\x02\x028\u015A\x03\x02\x02\x02:\u015F\x03" +
		"\x02\x02\x02<\u0163\x03\x02\x02\x02>\u0165\x03\x02\x02\x02@\u0167\x03" +
		"\x02\x02\x02B\u016F\x03\x02\x02\x02D\u0175\x03\x02\x02\x02F\u017F\x03" +
		"\x02\x02\x02H\u0181\x03\x02\x02\x02J\u018E\x03\x02\x02\x02L\u0196\x03" +
		"\x02\x02\x02N\u01A8\x03\x02\x02\x02P\u01AA\x03\x02\x02\x02R\u01B0\x03" +
		"\x02\x02\x02T\u01B4\x03\x02\x02\x02V\u01C3\x03\x02\x02\x02X\u01C7\x03" +
		"\x02\x02\x02Z\u01CB\x03\x02\x02\x02\\\u01CD\x03\x02\x02\x02^\u01DE\x03" +
		"\x02\x02\x02`\u01EF\x03\x02\x02\x02b\u01F1\x03\x02\x02\x02d\u01F7\x03" +
		"\x02\x02\x02f\u01FB\x03\x02\x02\x02h\u0209\x03\x02\x02\x02j\u0213\x03" +
		"\x02\x02\x02l\u021C\x03\x02\x02\x02n\u0222\x03\x02\x02\x02p\u0224\x03" +
		"\x02\x02\x02r\u0239\x03\x02\x02\x02t\u023B\x03\x02\x02\x02v\u024B\x03" +
		"\x02\x02\x02x\u0252\x03\x02\x02\x02z\u025E\x03\x02\x02\x02|\u0260\x03" +
		"\x02\x02\x02~\u0272\x03\x02\x02\x02\x80\u0274\x03\x02\x02\x02\x82\x86" +
		"\x05\x04\x03\x02\x83\x85\x05\b\x05\x02\x84\x83\x03\x02\x02\x02\x85\x88" +
		"\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89" +
		"\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8D\x05$\x13\x02\x8A\x8C" +
		"\x05\"\x12\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x90\x91\x07\x02\x02\x03\x91\x03\x03\x02\x02\x02\x92\x93" +
		"\x05\x06\x04\x02\x93\x94\x05\x80A\x02\x94\x95\x07\"\x02\x02\x95\x05\x03" +
		"\x02\x02\x02\x96\x97\x07\x13\x02\x02\x97\x9C\x07\x15\x02\x02\x98\x99\x07" +
		"\x14\x02\x02\x99\x9C\x07\x15\x02\x02\x9A\x9C\x07\x15\x02\x02\x9B\x96\x03" +
		"\x02\x02\x02\x9B\x98\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x07\x03" +
		"\x02\x02\x02\x9D\xA3\x05\n\x06\x02\x9E\xA3\x05\x10\t\x02\x9F\xA3\x05\x14" +
		"\v\x02\xA0\xA3\x05\x16\f\x02\xA1\xA3\x05\x1A\x0E\x02\xA2\x9D\x03\x02\x02" +
		"\x02\xA2\x9E\x03\x02\x02\x02\xA2\x9F\x03\x02\x02\x02\xA2\xA0\x03\x02\x02" +
		"\x02\xA2\xA1\x03\x02\x02\x02\xA3\t\x03\x02\x02\x02\xA4\xAA\x07\x0E\x02" +
		"\x02\xA5\xA6\x05\f\x07\x02\xA6\xA7\x07\"\x02\x02\xA7\xA9\x03\x02\x02\x02" +
		"\xA8\xA5\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02" +
		"\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
		"\xAD\xAE\x07&\x02\x02\xAE\v\x03\x02\x02\x02\xAF\xB0\x05\x80A\x02\xB0\xB1" +
		"\x07*\x02\x02\xB1\xB2\x05\x0E\b\x02\xB2\r\x03\x02\x02\x02\xB3\xB8\x05" +
		"\x80A\x02\xB4\xB5\x072\x02\x02\xB5\xB7\x05\x80A\x02\xB6\xB4\x03\x02\x02" +
		"\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xBF\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBF\x07\n\x02" +
		"\x02\xBC\xBF\x05\x1E\x10\x02\xBD\xBF\x07\t\x02\x02\xBE\xB3\x03\x02\x02" +
		"\x02\xBE\xBB\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBD\x03\x02\x02" +
		"\x02\xBF\x0F\x03\x02\x02\x02\xC0\xC1\x07\x11\x02\x02\xC1\xC6\x05\x12\n" +
		"\x02\xC2\xC3\x07!\x02\x02\xC3\xC5\x05\x12\n\x02\xC4\xC2\x03\x02\x02\x02" +
		"\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
		"\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\"\x02\x02" +
		"\xCA\x11\x03\x02\x02\x02\xCB\xCC\x05\x80A\x02\xCC\xCD\x07*\x02\x02\xCD" +
		"\xCE\x05\x80A\x02\xCE\xD1\x03\x02\x02\x02\xCF\xD1\x05\x80A\x02\xD0\xCB" +
		"\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\x13\x03\x02\x02\x02\xD2\xD4" +
		"\x07\x0F\x02\x02\xD3\xD5\x05\x18\r\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5" +
		"\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x07&\x02\x02\xD7\x15" +
		"\x03\x02\x02\x02\xD8\xDA\x07\x10\x02\x02\xD9\xDB\x05\x18\r\x02\xDA\xD9" +
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD" +
		"\x07&\x02\x02\xDD\x17\x03\x02\x02\x02\xDE\xE3\x05\x80A\x02\xDF\xE0\x07" +
		"!\x02\x02\xE0\xE2\x05\x80A\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02" +
		"\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE7\x03\x02" +
		"\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE8\x07!\x02\x02\xE7\xE6\x03\x02" +
		"\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x19\x03\x02\x02\x02\xE9\xED\x073" +
		"\x02\x02\xEA\xEB\x05\x1C\x0F\x02\xEB\xEC\x07 \x02\x02\xEC\xEE\x03\x02" +
		"\x02\x02\xED\xEA\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02" +
		"\x02\x02\xEF\xF0\x05\x80A\x02\xF0\xF1\x05\x1E\x10\x02\xF1\x1B\x03\x02" +
		"\x02\x02\xF2\xF6\x05\x80A\x02\xF3\xF6\x07\x13\x02\x02\xF4\xF6\x07\x14" +
		"\x02\x02\xF5\xF2\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF4\x03\x02" +
		"\x02\x02\xF6\x1D\x03\x02\x02\x02\xF7\xFB\x07\r\x02\x02\xF8\xFA\x07>\x02" +
		"\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02" +
		"\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFE\xFF\x07<\x02\x02\xFF\x1F\x03\x02\x02\x02\u0100\u0104\x07\f\x02" +
		"\x02\u0101\u0103\x07;\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0107\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0108\x07" +
		"9\x02\x02\u0108!\x03\x02\x02\x02\u0109\u010A\x07\x1E\x02\x02\u010A\u010B" +
		"\x05\x80A\x02\u010B\u010F\x07\"\x02\x02\u010C\u010E\x05D#\x02\u010D\u010C" +
		"\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110#\x03\x02\x02\x02\u0111\u010F\x03\x02" +
		"\x02\x02\u0112\u0114\x05&\x14\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0117" +
		"\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02" +
		"\u0116%\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B\x05(\x15" +
		"\x02\u0119\u011B\x05D#\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03" +
		"\x02\x02\x02\u011B\'\x03\x02\x02\x02\u011C\u011E\x05:\x1E\x02\u011D\u011C" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02" +
		"\u011F\u0121\x07\x04\x02\x02\u0120\u0122\x05 \x11\x02\u0121\u0120\x03" +
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123" +
		"\u0125\x052\x1A\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02\x02" +
		"\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0128\x054\x1B\x02\u0127\u0126" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02" +
		"\u0129\u012B\x056\x1C\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03" +
		"\x02\x02\x02\u012B\u012F\x03\x02\x02\x02\u012C\u012E\x050\x19\x02\u012D" +
		"\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0132\u0133\x07\x1F\x02\x02\u0133\u0134\x05> \x02" +
		"\u0134\u0135\x07\"\x02\x02\u0135\u0136\x05*\x16\x02\u0136)\x03\x02\x02" +
		"\x02\u0137\u0139\x05,\x17\x02\u0138\u0137\x03\x02\x02\x02\u0139\u013C" +
		"\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013F\x05" +
		".\x18\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
		"+\x03\x02\x02\x02\u0140\u0141\x07\x1C\x02\x02\u0141\u0142\x05 \x11\x02" +
		"\u0142\u0143\x05\x1E\x10\x02\u0143-\x03\x02\x02\x02\u0144\u0145\x07\x1D" +
		"\x02\x02\u0145\u0146\x05\x1E\x10\x02\u0146/\x03\x02\x02\x02\u0147\u014A" +
		"\x05\n\x06\x02\u0148\u014A\x058\x1D\x02\u0149\u0147\x03\x02\x02\x02\u0149" +
		"\u0148\x03\x02\x02\x02\u014A1\x03\x02\x02\x02\u014B\u014C\x07\x19\x02" +
		"\x02\u014C\u014D\x05 \x11\x02\u014D3\x03\x02\x02\x02\u014E\u014F\x07\x1B" +
		"\x02\x02\u014F\u0154\x05\x80A\x02\u0150\u0151\x07!\x02\x02\u0151\u0153" +
		"\x05\x80A\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02" +
		"\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u01555\x03\x02" +
		"\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0158\x07\x1A\x02\x02\u0158" +
		"\u0159\x05 \x11\x02\u01597\x03\x02\x02\x02\u015A\u015B\x073\x02\x02\u015B" +
		"\u015C\x05\x80A\x02\u015C\u015D\x05\x1E\x10\x02\u015D9\x03\x02\x02\x02" +
		"\u015E\u0160\x05<\x1F\x02\u015F\u015E\x03\x02\x02\x02\u0160\u0161\x03" +
		"\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		";\x03\x02\x02\x02\u0163\u0164\t\x02\x02\x02\u0164=\x03\x02\x02\x02\u0165" +
		"\u0166\x05@!\x02\u0166?\x03\x02\x02\x02\u0167\u016C\x05B\"\x02\u0168\u0169" +
		"\x07/\x02\x02\u0169\u016B\x05B\"\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
		"\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016DA\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0172" +
		"\x05^0\x02\u0170\u0171\x074\x02\x02\u0171\u0173\x05\x80A\x02\u0172\u0170" +
		"\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173C\x03\x02\x02\x02\u0174" +
		"\u0176\x07\x12\x02\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x07\x03\x02\x02\u0178" +
		"\u017A\x05\n\x06\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02" +
		"\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x07\x1F\x02\x02\u017C\u017D" +
		"\x05F$\x02\u017D\u017E\x07\"\x02\x02\u017EE\x03\x02\x02\x02\u017F\u0180" +
		"\x05H%\x02\u0180G\x03\x02\x02\x02\u0181\u0186\x05J&\x02\u0182\u0183\x07" +
		"/\x02\x02\u0183\u0185\x05J&\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0188" +
		"\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187I\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018B\x05L\'" +
		"\x02\u018A\u018C\x05T+\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03" +
		"\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E" +
		"\u0189\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018FK\x03\x02\x02" +
		"\x02\u0190\u0192\x05N(\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
		"\u0197\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0191\x03\x02" +
		"\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197M\x03\x02\x02\x02\u0198\u019A" +
		"\x05P)\x02\u0199\u019B\x05h5\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B" +
		"\x03\x02\x02\x02\u019B\u01A9\x03\x02\x02\x02\u019C\u019E\x05j6\x02\u019D" +
		"\u019F\x05h5\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u01A9\x03\x02\x02\x02\u01A0\u01A2\x05R*\x02\u01A1\u01A3\x05h5\x02" +
		"\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A9\x03" +
		"\x02\x02\x02\u01A4\u01A6\x05\x1E\x10\x02\u01A5\u01A7\x07+\x02\x02\u01A6" +
		"\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02" +
		"\x02\x02\u01A8\u0198\x03\x02\x02\x02\u01A8\u019C\x03\x02\x02\x02\u01A8" +
		"\u01A0\x03\x02\x02\x02\u01A8\u01A4\x03\x02\x02\x02\u01A9O\x03\x02\x02" +
		"\x02\u01AA\u01AB\x05\x80A\x02\u01AB\u01AE\t\x03\x02\x02\u01AC\u01AF\x05" +
		"j6\x02\u01AD\u01AF\x05R*\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AD\x03" +
		"\x02\x02\x02\u01AFQ\x03\x02\x02\x02\u01B0\u01B1\x07#\x02\x02\u01B1\u01B2" +
		"\x05H%\x02\u01B2\u01B3\x07$\x02\x02\u01B3S\x03\x02\x02\x02\u01B4\u01B5" +
		"\x07\'\x02\x02\u01B5\u01BA\x05V,\x02\u01B6\u01B7\x07!\x02\x02\u01B7\u01B9" +
		"\x05V,\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA" +
		"\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BBU\x03\x02\x02" +
		"\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x05X-\x02\u01BE\u01BF\x07" +
		"#\x02\x02\u01BF\u01C0\x05Z.\x02\u01C0\u01C1\x07$\x02\x02\u01C1\u01C4\x03" +
		"\x02\x02\x02\u01C2\u01C4\x05X-\x02\u01C3\u01BD\x03\x02\x02\x02\u01C3\u01C2" +
		"\x03\x02\x02\x02\u01C4W\x03\x02\x02\x02\u01C5\u01C8\x05\x80A\x02\u01C6" +
		"\u01C8\x07\x1E\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02" +
		"\x02\x02\u01C8Y\x03\x02\x02\x02\u01C9\u01CC\x05\x80A\x02\u01CA\u01CC\x07" +
		"\t\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC" +
		"[\x03\x02\x02\x02\u01CD\u01D2\x05^0\x02\u01CE\u01CF\x07/\x02\x02\u01CF" +
		"\u01D1\x05^0\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02" +
		"\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3]\x03\x02" +
		"\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D7\x05|?\x02\u01D6\u01D5" +
		"\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02" +
		"\u01D8\u01DA\x05`1\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
		"\u01DF\x03\x02\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01D6\x03\x02" +
		"\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF_\x03\x02\x02\x02\u01E0\u01E3" +
		"\x05b2\x02\u01E1\u01E4\x05h5\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E1" +
		"\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01F0\x03\x02\x02\x02" +
		"\u01E5\u01E8\x05l7\x02\u01E6\u01E9\x05h5\x02\u01E7\u01E9\x03\x02\x02\x02" +
		"\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01F0\x03" +
		"\x02\x02\x02\u01EA\u01F0\x05d3\x02\u01EB\u01ED\x05\x1E\x10\x02\u01EC\u01EE" +
		"\x07+\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02" +
		"\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01E0\x03\x02\x02\x02\u01EF\u01E5\x03" +
		"\x02\x02\x02\u01EF\u01EA\x03\x02\x02\x02\u01EF\u01EB\x03\x02\x02\x02\u01F0" +
		"a\x03\x02\x02\x02\u01F1\u01F2\x05\x80A\x02\u01F2\u01F5\t\x03\x02\x02\u01F3" +
		"\u01F6\x05l7\x02\u01F4\u01F6\x05t;\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5" +
		"\u01F4\x03\x02\x02\x02\u01F6c\x03\x02\x02\x02\u01F7\u01F9\x05t;\x02\u01F8" +
		"\u01FA\x05f4\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
		"\u01FAe\x03\x02\x02\x02\u01FB\u01FC\x05h5\x02\u01FCg\x03\x02\x02\x02\u01FD" +
		"\u01FF\x07+\x02\x02\u01FE\u0200\x07+\x02\x02\u01FF\u01FE\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u020A\x03\x02\x02\x02\u0201\u0203\x07" +
		",\x02\x02\u0202\u0204\x07+\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204\u020A\x03\x02\x02\x02\u0205\u0207\x07.\x02\x02" +
		"\u0206\u0208\x07+\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03" +
		"\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u01FD\x03\x02\x02\x02\u0209" +
		"\u0201\x03\x02\x02\x02\u0209\u0205\x03\x02\x02\x02\u020Ai\x03\x02\x02" +
		"\x02\u020B\u0214\x05x=\x02\u020C\u0214\x05z>\x02\u020D\u0214\x05n8\x02" +
		"\u020E\u0214\x07\x05\x02\x02\u020F\u0211\x072\x02\x02\u0210\u0212\x05" +
		"|?\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214" +
		"\x03\x02\x02\x02\u0213\u020B\x03\x02\x02\x02\u0213\u020C\x03\x02\x02\x02" +
		"\u0213\u020D\x03\x02\x02\x02\u0213\u020E\x03\x02\x02\x02\u0213\u020F\x03" +
		"\x02\x02\x02\u0214k\x03\x02\x02\x02\u0215\u021D\x05z>\x02\u0216\u021D" +
		"\x05v<\x02\u0217\u021D\x05n8\x02\u0218\u021A\x072\x02\x02\u0219\u021B" +
		"\x05|?\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
		"\u021D\x03\x02\x02\x02\u021C\u0215\x03\x02\x02\x02\u021C\u0216\x03\x02" +
		"\x02\x02\u021C\u0217\x03\x02\x02\x02\u021C\u0218\x03\x02\x02\x02\u021D" +
		"m\x03\x02\x02\x02\u021E\u021F\x075\x02\x02\u021F\u0223\x05r:\x02\u0220" +
		"\u0221\x075\x02\x02\u0221\u0223\x05p9\x02\u0222\u021E\x03\x02\x02\x02" +
		"\u0222\u0220\x03\x02\x02\x02\u0223o\x03\x02\x02\x02\u0224\u0225\x07#\x02" +
		"\x02\u0225\u022A\x05r:\x02\u0226\u0227\x07/\x02\x02\u0227\u0229\x05r:" +
		"\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228" +
		"\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02" +
		"\u022C\u022A\x03\x02\x02\x02\u022D\u022E\x07";
	private static readonly _serializedATNSegment1: string =
		"$\x02\x02\u022Eq\x03\x02\x02\x02\u022F\u0231\x07\x03\x02\x02\u0230\u0232" +
		"\x05|?\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232" +
		"\u023A\x03\x02\x02\x02\u0233\u0235\x07\n\x02\x02\u0234\u0236\x05|?\x02" +
		"\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023A\x03" +
		"\x02\x02\x02\u0237\u023A\x05x=\x02\u0238\u023A\x07\x05\x02\x02\u0239\u022F" +
		"\x03\x02\x02\x02\u0239\u0233\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02" +
		"\u0239\u0238\x03\x02\x02\x02\u023As\x03\x02\x02\x02\u023B\u0246\x07#\x02" +
		"\x02\u023C\u023E\x05\n\x06\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u0242\x03\x02\x02\x02\u023F\u0241\x058\x1D\x02" +
		"\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03" +
		"\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244" +
		"\u0242\x03\x02\x02\x02\u0245\u0247\x07\x1F\x02\x02\u0246\u023D\x03\x02" +
		"\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248" +
		"\u0249\x05\\/\x02\u0249\u024A\x07$\x02\x02\u024Au\x03\x02\x02\x02\u024B" +
		"\u024D\x07\x04\x02\x02\u024C\u024E\x05 \x11\x02\u024D\u024C\x03\x02\x02" +
		"\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0251" +
		"\x05|?\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"w\x03\x02\x02\x02\u0252\u0253\x07\n\x02\x02\u0253\u0254\x071\x02\x02\u0254" +
		"\u0255\x07\n\x02\x02\u0255y\x03\x02\x02\x02\u0256\u0258\x07\x03\x02\x02" +
		"\u0257\u0259\x05|?\x02\u0258\u0257\x03\x02\x02\x02\u0258\u0259\x03\x02" +
		"\x02\x02\u0259\u025F\x03\x02\x02\x02\u025A\u025C\x07\n\x02\x02\u025B\u025D" +
		"\x05|?\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u025F\x03\x02\x02\x02\u025E\u0256\x03\x02\x02\x02\u025E\u025A\x03\x02" +
		"\x02\x02\u025F{\x03\x02\x02\x02\u0260\u0261\x07(\x02\x02\u0261\u0266\x05" +
		"~@\x02\u0262\u0263\x07!\x02\x02\u0263\u0265\x05~@\x02\u0264\u0262\x03" +
		"\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266" +
		"\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02" +
		"\x02\x02\u0269\u026A\x07)\x02\x02\u026A}\x03\x02\x02\x02\u026B\u0273\x05" +
		"\x80A\x02\u026C\u026D\x05\x80A\x02\u026D\u0270\x07*\x02\x02\u026E\u0271" +
		"\x05\x80A\x02\u026F\u0271\x07\n\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270" +
		"\u026F\x03\x02\x02\x02\u0271\u0273\x03\x02\x02\x02\u0272\u026B\x03\x02" +
		"\x02\x02\u0272\u026C\x03\x02\x02\x02\u0273\x7F\x03\x02\x02\x02\u0274\u0275" +
		"\t\x04\x02\x02\u0275\x81\x03\x02\x02\x02V\x86\x8D\x9B\xA2\xAA\xB8\xBE" +
		"\xC6\xD0\xD4\xDA\xE3\xE7\xED\xF5\xFB\u0104\u010F\u0115\u011A\u011D\u0121" +
		"\u0124\u0127\u012A\u012F\u013A\u013E\u0149\u0154\u0161\u016C\u0172\u0175" +
		"\u0179\u0186\u018B\u018E\u0193\u0196\u019A\u019E\u01A2\u01A6\u01A8\u01AE" +
		"\u01BA\u01C3\u01C7\u01CB\u01D2\u01D6\u01DB\u01DE\u01E3\u01E8\u01ED\u01EF" +
		"\u01F5\u01F9\u01FF\u0203\u0207\u0209\u0211\u0213\u021A\u021C\u0222\u022A" +
		"\u0231\u0235\u0239\u023D\u0242\u0246\u024D\u0250\u0258\u025C\u025E\u0266" +
		"\u0270\u0272";
	public static readonly _serializedATN: string = Utils.join(
		[
			ANTLRv4Parser._serializedATNSegment0,
			ANTLRv4Parser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ANTLRv4Parser.__ATN) {
			ANTLRv4Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ANTLRv4Parser._serializedATN));
		}

		return ANTLRv4Parser.__ATN;
	}

}

export class GrammarSpecContext extends ParserRuleContext {
	public grammarDecl(): GrammarDeclContext {
		return this.getRuleContext(0, GrammarDeclContext);
	}
	public rules(): RulesContext {
		return this.getRuleContext(0, RulesContext);
	}
	public EOF(): TerminalNode { return this.getToken(ANTLRv4Parser.EOF, 0); }
	public prequelConstruct(): PrequelConstructContext[];
	public prequelConstruct(i: number): PrequelConstructContext;
	public prequelConstruct(i?: number): PrequelConstructContext | PrequelConstructContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrequelConstructContext);
		} else {
			return this.getRuleContext(i, PrequelConstructContext);
		}
	}
	public modeSpec(): ModeSpecContext[];
	public modeSpec(i: number): ModeSpecContext;
	public modeSpec(i?: number): ModeSpecContext | ModeSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModeSpecContext);
		} else {
			return this.getRuleContext(i, ModeSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_grammarSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterGrammarSpec) {
			listener.enterGrammarSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitGrammarSpec) {
			listener.exitGrammarSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitGrammarSpec) {
			return visitor.visitGrammarSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrammarDeclContext extends ParserRuleContext {
	public grammarType(): GrammarTypeContext {
		return this.getRuleContext(0, GrammarTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ANTLRv4Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_grammarDecl; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterGrammarDecl) {
			listener.enterGrammarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitGrammarDecl) {
			listener.exitGrammarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitGrammarDecl) {
			return visitor.visitGrammarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrammarTypeContext extends ParserRuleContext {
	public LEXER(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.LEXER, 0); }
	public GRAMMAR(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.GRAMMAR, 0); }
	public PARSER(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PARSER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_grammarType; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterGrammarType) {
			listener.enterGrammarType(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitGrammarType) {
			listener.exitGrammarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitGrammarType) {
			return visitor.visitGrammarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrequelConstructContext extends ParserRuleContext {
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	public delegateGrammars(): DelegateGrammarsContext | undefined {
		return this.tryGetRuleContext(0, DelegateGrammarsContext);
	}
	public tokensSpec(): TokensSpecContext | undefined {
		return this.tryGetRuleContext(0, TokensSpecContext);
	}
	public channelsSpec(): ChannelsSpecContext | undefined {
		return this.tryGetRuleContext(0, ChannelsSpecContext);
	}
	public action_(): Action_Context | undefined {
		return this.tryGetRuleContext(0, Action_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_prequelConstruct; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterPrequelConstruct) {
			listener.enterPrequelConstruct(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitPrequelConstruct) {
			listener.exitPrequelConstruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitPrequelConstruct) {
			return visitor.visitPrequelConstruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionsSpecContext extends ParserRuleContext {
	public OPTIONS(): TerminalNode { return this.getToken(ANTLRv4Parser.OPTIONS, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ANTLRv4Parser.RBRACE, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.SEMI);
		} else {
			return this.getToken(ANTLRv4Parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_optionsSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterOptionsSpec) {
			listener.enterOptionsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitOptionsSpec) {
			listener.exitOptionsSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitOptionsSpec) {
			return visitor.visitOptionsSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(ANTLRv4Parser.ASSIGN, 0); }
	public optionValue(): OptionValueContext {
		return this.getRuleContext(0, OptionValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_option; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitOption) {
			return visitor.visitOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.DOT);
		} else {
			return this.getToken(ANTLRv4Parser.DOT, i);
		}
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); }
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_optionValue; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterOptionValue) {
			listener.enterOptionValue(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitOptionValue) {
			listener.exitOptionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitOptionValue) {
			return visitor.visitOptionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelegateGrammarsContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(ANTLRv4Parser.IMPORT, 0); }
	public delegateGrammar(): DelegateGrammarContext[];
	public delegateGrammar(i: number): DelegateGrammarContext;
	public delegateGrammar(i?: number): DelegateGrammarContext | DelegateGrammarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelegateGrammarContext);
		} else {
			return this.getRuleContext(i, DelegateGrammarContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(ANTLRv4Parser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.COMMA);
		} else {
			return this.getToken(ANTLRv4Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_delegateGrammars; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterDelegateGrammars) {
			listener.enterDelegateGrammars(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitDelegateGrammars) {
			listener.exitDelegateGrammars(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitDelegateGrammars) {
			return visitor.visitDelegateGrammars(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelegateGrammarContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_delegateGrammar; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterDelegateGrammar) {
			listener.enterDelegateGrammar(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitDelegateGrammar) {
			listener.exitDelegateGrammar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitDelegateGrammar) {
			return visitor.visitDelegateGrammar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokensSpecContext extends ParserRuleContext {
	public TOKENS(): TerminalNode { return this.getToken(ANTLRv4Parser.TOKENS, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ANTLRv4Parser.RBRACE, 0); }
	public idList(): IdListContext | undefined {
		return this.tryGetRuleContext(0, IdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_tokensSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterTokensSpec) {
			listener.enterTokensSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitTokensSpec) {
			listener.exitTokensSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitTokensSpec) {
			return visitor.visitTokensSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChannelsSpecContext extends ParserRuleContext {
	public CHANNELS(): TerminalNode { return this.getToken(ANTLRv4Parser.CHANNELS, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ANTLRv4Parser.RBRACE, 0); }
	public idList(): IdListContext | undefined {
		return this.tryGetRuleContext(0, IdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_channelsSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterChannelsSpec) {
			listener.enterChannelsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitChannelsSpec) {
			listener.exitChannelsSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitChannelsSpec) {
			return visitor.visitChannelsSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.COMMA);
		} else {
			return this.getToken(ANTLRv4Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_idList; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterIdList) {
			listener.enterIdList(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitIdList) {
			listener.exitIdList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitIdList) {
			return visitor.visitIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Action_Context extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(ANTLRv4Parser.AT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	public actionScopeName(): ActionScopeNameContext | undefined {
		return this.tryGetRuleContext(0, ActionScopeNameContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.COLONCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_action_; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterAction_) {
			listener.enterAction_(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitAction_) {
			listener.exitAction_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitAction_) {
			return visitor.visitAction_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionScopeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LEXER(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.LEXER, 0); }
	public PARSER(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PARSER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_actionScopeName; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterActionScopeName) {
			listener.enterActionScopeName(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitActionScopeName) {
			listener.exitActionScopeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitActionScopeName) {
			return visitor.visitActionScopeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionBlockContext extends ParserRuleContext {
	public BEGIN_ACTION(): TerminalNode { return this.getToken(ANTLRv4Parser.BEGIN_ACTION, 0); }
	public END_ACTION(): TerminalNode { return this.getToken(ANTLRv4Parser.END_ACTION, 0); }
	public ACTION_CONTENT(): TerminalNode[];
	public ACTION_CONTENT(i: number): TerminalNode;
	public ACTION_CONTENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.ACTION_CONTENT);
		} else {
			return this.getToken(ANTLRv4Parser.ACTION_CONTENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_actionBlock; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterActionBlock) {
			listener.enterActionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitActionBlock) {
			listener.exitActionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitActionBlock) {
			return visitor.visitActionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgActionBlockContext extends ParserRuleContext {
	public BEGIN_ARGUMENT(): TerminalNode { return this.getToken(ANTLRv4Parser.BEGIN_ARGUMENT, 0); }
	public END_ARGUMENT(): TerminalNode { return this.getToken(ANTLRv4Parser.END_ARGUMENT, 0); }
	public ARGUMENT_CONTENT(): TerminalNode[];
	public ARGUMENT_CONTENT(i: number): TerminalNode;
	public ARGUMENT_CONTENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.ARGUMENT_CONTENT);
		} else {
			return this.getToken(ANTLRv4Parser.ARGUMENT_CONTENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_argActionBlock; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterArgActionBlock) {
			listener.enterArgActionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitArgActionBlock) {
			listener.exitArgActionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitArgActionBlock) {
			return visitor.visitArgActionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModeSpecContext extends ParserRuleContext {
	public MODE(): TerminalNode { return this.getToken(ANTLRv4Parser.MODE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ANTLRv4Parser.SEMI, 0); }
	public lexerRuleSpec(): LexerRuleSpecContext[];
	public lexerRuleSpec(i: number): LexerRuleSpecContext;
	public lexerRuleSpec(i?: number): LexerRuleSpecContext | LexerRuleSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LexerRuleSpecContext);
		} else {
			return this.getRuleContext(i, LexerRuleSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_modeSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterModeSpec) {
			listener.enterModeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitModeSpec) {
			listener.exitModeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitModeSpec) {
			return visitor.visitModeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesContext extends ParserRuleContext {
	public ruleSpec(): RuleSpecContext[];
	public ruleSpec(i: number): RuleSpecContext;
	public ruleSpec(i?: number): RuleSpecContext | RuleSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleSpecContext);
		} else {
			return this.getRuleContext(i, RuleSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_rules; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRules) {
			listener.enterRules(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRules) {
			listener.exitRules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRules) {
			return visitor.visitRules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleSpecContext extends ParserRuleContext {
	public parserRuleSpec(): ParserRuleSpecContext | undefined {
		return this.tryGetRuleContext(0, ParserRuleSpecContext);
	}
	public lexerRuleSpec(): LexerRuleSpecContext | undefined {
		return this.tryGetRuleContext(0, LexerRuleSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleSpec) {
			listener.enterRuleSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleSpec) {
			listener.exitRuleSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleSpec) {
			return visitor.visitRuleSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParserRuleSpecContext extends ParserRuleContext {
	public RULE_REF(): TerminalNode { return this.getToken(ANTLRv4Parser.RULE_REF, 0); }
	public COLON(): TerminalNode { return this.getToken(ANTLRv4Parser.COLON, 0); }
	public ruleBlock(): RuleBlockContext {
		return this.getRuleContext(0, RuleBlockContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ANTLRv4Parser.SEMI, 0); }
	public exceptionGroup(): ExceptionGroupContext {
		return this.getRuleContext(0, ExceptionGroupContext);
	}
	public ruleModifiers(): RuleModifiersContext | undefined {
		return this.tryGetRuleContext(0, RuleModifiersContext);
	}
	public argActionBlock(): ArgActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgActionBlockContext);
	}
	public ruleReturns(): RuleReturnsContext | undefined {
		return this.tryGetRuleContext(0, RuleReturnsContext);
	}
	public throwsSpec(): ThrowsSpecContext | undefined {
		return this.tryGetRuleContext(0, ThrowsSpecContext);
	}
	public localsSpec(): LocalsSpecContext | undefined {
		return this.tryGetRuleContext(0, LocalsSpecContext);
	}
	public rulePrequel(): RulePrequelContext[];
	public rulePrequel(i: number): RulePrequelContext;
	public rulePrequel(i?: number): RulePrequelContext | RulePrequelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulePrequelContext);
		} else {
			return this.getRuleContext(i, RulePrequelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_parserRuleSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterParserRuleSpec) {
			listener.enterParserRuleSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitParserRuleSpec) {
			listener.exitParserRuleSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitParserRuleSpec) {
			return visitor.visitParserRuleSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionGroupContext extends ParserRuleContext {
	public exceptionHandler(): ExceptionHandlerContext[];
	public exceptionHandler(i: number): ExceptionHandlerContext;
	public exceptionHandler(i?: number): ExceptionHandlerContext | ExceptionHandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionHandlerContext);
		} else {
			return this.getRuleContext(i, ExceptionHandlerContext);
		}
	}
	public finallyClause(): FinallyClauseContext | undefined {
		return this.tryGetRuleContext(0, FinallyClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_exceptionGroup; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterExceptionGroup) {
			listener.enterExceptionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitExceptionGroup) {
			listener.exitExceptionGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitExceptionGroup) {
			return visitor.visitExceptionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionHandlerContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(ANTLRv4Parser.CATCH, 0); }
	public argActionBlock(): ArgActionBlockContext {
		return this.getRuleContext(0, ArgActionBlockContext);
	}
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_exceptionHandler; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterExceptionHandler) {
			listener.enterExceptionHandler(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitExceptionHandler) {
			listener.exitExceptionHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitExceptionHandler) {
			return visitor.visitExceptionHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyClauseContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(ANTLRv4Parser.FINALLY, 0); }
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_finallyClause; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterFinallyClause) {
			listener.enterFinallyClause(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitFinallyClause) {
			listener.exitFinallyClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitFinallyClause) {
			return visitor.visitFinallyClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulePrequelContext extends ParserRuleContext {
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	public ruleAction(): RuleActionContext | undefined {
		return this.tryGetRuleContext(0, RuleActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_rulePrequel; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRulePrequel) {
			listener.enterRulePrequel(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRulePrequel) {
			listener.exitRulePrequel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRulePrequel) {
			return visitor.visitRulePrequel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleReturnsContext extends ParserRuleContext {
	public RETURNS(): TerminalNode { return this.getToken(ANTLRv4Parser.RETURNS, 0); }
	public argActionBlock(): ArgActionBlockContext {
		return this.getRuleContext(0, ArgActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleReturns; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleReturns) {
			listener.enterRuleReturns(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleReturns) {
			listener.exitRuleReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleReturns) {
			return visitor.visitRuleReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowsSpecContext extends ParserRuleContext {
	public THROWS(): TerminalNode { return this.getToken(ANTLRv4Parser.THROWS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.COMMA);
		} else {
			return this.getToken(ANTLRv4Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_throwsSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterThrowsSpec) {
			listener.enterThrowsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitThrowsSpec) {
			listener.exitThrowsSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitThrowsSpec) {
			return visitor.visitThrowsSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalsSpecContext extends ParserRuleContext {
	public LOCALS(): TerminalNode { return this.getToken(ANTLRv4Parser.LOCALS, 0); }
	public argActionBlock(): ArgActionBlockContext {
		return this.getRuleContext(0, ArgActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_localsSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLocalsSpec) {
			listener.enterLocalsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLocalsSpec) {
			listener.exitLocalsSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLocalsSpec) {
			return visitor.visitLocalsSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleActionContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(ANTLRv4Parser.AT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleAction; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleAction) {
			listener.enterRuleAction(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleAction) {
			listener.exitRuleAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleAction) {
			return visitor.visitRuleAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleModifiersContext extends ParserRuleContext {
	public ruleModifier(): RuleModifierContext[];
	public ruleModifier(i: number): RuleModifierContext;
	public ruleModifier(i?: number): RuleModifierContext | RuleModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleModifierContext);
		} else {
			return this.getRuleContext(i, RuleModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleModifiers; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleModifiers) {
			listener.enterRuleModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleModifiers) {
			listener.exitRuleModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleModifiers) {
			return visitor.visitRuleModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleModifierContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PUBLIC, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PROTECTED, 0); }
	public FRAGMENT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.FRAGMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleModifier; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleModifier) {
			listener.enterRuleModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleModifier) {
			listener.exitRuleModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleModifier) {
			return visitor.visitRuleModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleBlockContext extends ParserRuleContext {
	public ruleAltList(): RuleAltListContext {
		return this.getRuleContext(0, RuleAltListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleBlock; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleBlock) {
			listener.enterRuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleBlock) {
			listener.exitRuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleBlock) {
			return visitor.visitRuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleAltListContext extends ParserRuleContext {
	public labeledAlt(): LabeledAltContext[];
	public labeledAlt(i: number): LabeledAltContext;
	public labeledAlt(i?: number): LabeledAltContext | LabeledAltContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabeledAltContext);
		} else {
			return this.getRuleContext(i, LabeledAltContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.OR);
		} else {
			return this.getToken(ANTLRv4Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleAltList; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleAltList) {
			listener.enterRuleAltList(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleAltList) {
			listener.exitRuleAltList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleAltList) {
			return visitor.visitRuleAltList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledAltContext extends ParserRuleContext {
	public alternative(): AlternativeContext {
		return this.getRuleContext(0, AlternativeContext);
	}
	public POUND(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.POUND, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_labeledAlt; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLabeledAlt) {
			listener.enterLabeledAlt(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLabeledAlt) {
			listener.exitLabeledAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLabeledAlt) {
			return visitor.visitLabeledAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerRuleSpecContext extends ParserRuleContext {
	public TOKEN_REF(): TerminalNode { return this.getToken(ANTLRv4Parser.TOKEN_REF, 0); }
	public COLON(): TerminalNode { return this.getToken(ANTLRv4Parser.COLON, 0); }
	public lexerRuleBlock(): LexerRuleBlockContext {
		return this.getRuleContext(0, LexerRuleBlockContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ANTLRv4Parser.SEMI, 0); }
	public FRAGMENT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.FRAGMENT, 0); }
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerRuleSpec; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerRuleSpec) {
			listener.enterLexerRuleSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerRuleSpec) {
			listener.exitLexerRuleSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerRuleSpec) {
			return visitor.visitLexerRuleSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerRuleBlockContext extends ParserRuleContext {
	public lexerAltList(): LexerAltListContext {
		return this.getRuleContext(0, LexerAltListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerRuleBlock; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerRuleBlock) {
			listener.enterLexerRuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerRuleBlock) {
			listener.exitLexerRuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerRuleBlock) {
			return visitor.visitLexerRuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerAltListContext extends ParserRuleContext {
	public lexerAlt(): LexerAltContext[];
	public lexerAlt(i: number): LexerAltContext;
	public lexerAlt(i?: number): LexerAltContext | LexerAltContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LexerAltContext);
		} else {
			return this.getRuleContext(i, LexerAltContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.OR);
		} else {
			return this.getToken(ANTLRv4Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerAltList; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerAltList) {
			listener.enterLexerAltList(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerAltList) {
			listener.exitLexerAltList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerAltList) {
			return visitor.visitLexerAltList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerAltContext extends ParserRuleContext {
	public lexerElements(): LexerElementsContext | undefined {
		return this.tryGetRuleContext(0, LexerElementsContext);
	}
	public lexerCommands(): LexerCommandsContext | undefined {
		return this.tryGetRuleContext(0, LexerCommandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerAlt; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerAlt) {
			listener.enterLexerAlt(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerAlt) {
			listener.exitLexerAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerAlt) {
			return visitor.visitLexerAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerElementsContext extends ParserRuleContext {
	public lexerElement(): LexerElementContext[];
	public lexerElement(i: number): LexerElementContext;
	public lexerElement(i?: number): LexerElementContext | LexerElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LexerElementContext);
		} else {
			return this.getRuleContext(i, LexerElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerElements; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerElements) {
			listener.enterLexerElements(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerElements) {
			listener.exitLexerElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerElements) {
			return visitor.visitLexerElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerElementContext extends ParserRuleContext {
	public labeledLexerElement(): LabeledLexerElementContext | undefined {
		return this.tryGetRuleContext(0, LabeledLexerElementContext);
	}
	public ebnfSuffix(): EbnfSuffixContext | undefined {
		return this.tryGetRuleContext(0, EbnfSuffixContext);
	}
	public lexerAtom(): LexerAtomContext | undefined {
		return this.tryGetRuleContext(0, LexerAtomContext);
	}
	public lexerBlock(): LexerBlockContext | undefined {
		return this.tryGetRuleContext(0, LexerBlockContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerElement; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerElement) {
			listener.enterLexerElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerElement) {
			listener.exitLexerElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerElement) {
			return visitor.visitLexerElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledLexerElementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PLUS_ASSIGN, 0); }
	public lexerAtom(): LexerAtomContext | undefined {
		return this.tryGetRuleContext(0, LexerAtomContext);
	}
	public lexerBlock(): LexerBlockContext | undefined {
		return this.tryGetRuleContext(0, LexerBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_labeledLexerElement; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLabeledLexerElement) {
			listener.enterLabeledLexerElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLabeledLexerElement) {
			listener.exitLabeledLexerElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLabeledLexerElement) {
			return visitor.visitLabeledLexerElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerBlockContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.LPAREN, 0); }
	public lexerAltList(): LexerAltListContext {
		return this.getRuleContext(0, LexerAltListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerBlock; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerBlock) {
			listener.enterLexerBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerBlock) {
			listener.exitLexerBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerBlock) {
			return visitor.visitLexerBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerCommandsContext extends ParserRuleContext {
	public RARROW(): TerminalNode { return this.getToken(ANTLRv4Parser.RARROW, 0); }
	public lexerCommand(): LexerCommandContext[];
	public lexerCommand(i: number): LexerCommandContext;
	public lexerCommand(i?: number): LexerCommandContext | LexerCommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LexerCommandContext);
		} else {
			return this.getRuleContext(i, LexerCommandContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.COMMA);
		} else {
			return this.getToken(ANTLRv4Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerCommands; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerCommands) {
			listener.enterLexerCommands(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerCommands) {
			listener.exitLexerCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerCommands) {
			return visitor.visitLexerCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerCommandContext extends ParserRuleContext {
	public lexerCommandName(): LexerCommandNameContext {
		return this.getRuleContext(0, LexerCommandNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.LPAREN, 0); }
	public lexerCommandExpr(): LexerCommandExprContext | undefined {
		return this.tryGetRuleContext(0, LexerCommandExprContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerCommand; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerCommand) {
			listener.enterLexerCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerCommand) {
			listener.exitLexerCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerCommand) {
			return visitor.visitLexerCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerCommandNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public MODE(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.MODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerCommandName; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerCommandName) {
			listener.enterLexerCommandName(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerCommandName) {
			listener.exitLexerCommandName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerCommandName) {
			return visitor.visitLexerCommandName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerCommandExprContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerCommandExpr; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerCommandExpr) {
			listener.enterLexerCommandExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerCommandExpr) {
			listener.exitLexerCommandExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerCommandExpr) {
			return visitor.visitLexerCommandExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltListContext extends ParserRuleContext {
	public alternative(): AlternativeContext[];
	public alternative(i: number): AlternativeContext;
	public alternative(i?: number): AlternativeContext | AlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlternativeContext);
		} else {
			return this.getRuleContext(i, AlternativeContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.OR);
		} else {
			return this.getToken(ANTLRv4Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_altList; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterAltList) {
			listener.enterAltList(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitAltList) {
			listener.exitAltList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitAltList) {
			return visitor.visitAltList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlternativeContext extends ParserRuleContext {
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_alternative; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterAlternative) {
			listener.enterAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitAlternative) {
			listener.exitAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitAlternative) {
			return visitor.visitAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public labeledElement(): LabeledElementContext | undefined {
		return this.tryGetRuleContext(0, LabeledElementContext);
	}
	public ebnfSuffix(): EbnfSuffixContext | undefined {
		return this.tryGetRuleContext(0, EbnfSuffixContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public ebnf(): EbnfContext | undefined {
		return this.tryGetRuleContext(0, EbnfContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_element; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledElementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PLUS_ASSIGN, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_labeledElement; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLabeledElement) {
			listener.enterLabeledElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLabeledElement) {
			listener.exitLabeledElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLabeledElement) {
			return visitor.visitLabeledElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EbnfContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public blockSuffix(): BlockSuffixContext | undefined {
		return this.tryGetRuleContext(0, BlockSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ebnf; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterEbnf) {
			listener.enterEbnf(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitEbnf) {
			listener.exitEbnf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitEbnf) {
			return visitor.visitEbnf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockSuffixContext extends ParserRuleContext {
	public ebnfSuffix(): EbnfSuffixContext {
		return this.getRuleContext(0, EbnfSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_blockSuffix; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterBlockSuffix) {
			listener.enterBlockSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitBlockSuffix) {
			listener.exitBlockSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitBlockSuffix) {
			return visitor.visitBlockSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EbnfSuffixContext extends ParserRuleContext {
	public QUESTION(): TerminalNode[];
	public QUESTION(i: number): TerminalNode;
	public QUESTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.QUESTION);
		} else {
			return this.getToken(ANTLRv4Parser.QUESTION, i);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.STAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.PLUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ebnfSuffix; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterEbnfSuffix) {
			listener.enterEbnfSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitEbnfSuffix) {
			listener.exitEbnfSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitEbnfSuffix) {
			return visitor.visitEbnfSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LexerAtomContext extends ParserRuleContext {
	public characterRange(): CharacterRangeContext | undefined {
		return this.tryGetRuleContext(0, CharacterRangeContext);
	}
	public terminal_(): Terminal_Context | undefined {
		return this.tryGetRuleContext(0, Terminal_Context);
	}
	public notSet(): NotSetContext | undefined {
		return this.tryGetRuleContext(0, NotSetContext);
	}
	public LEXER_CHAR_SET(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.LEXER_CHAR_SET, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.DOT, 0); }
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_lexerAtom; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterLexerAtom) {
			listener.enterLexerAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitLexerAtom) {
			listener.exitLexerAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitLexerAtom) {
			return visitor.visitLexerAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public terminal_(): Terminal_Context | undefined {
		return this.tryGetRuleContext(0, Terminal_Context);
	}
	public ruleref(): RulerefContext | undefined {
		return this.tryGetRuleContext(0, RulerefContext);
	}
	public notSet(): NotSetContext | undefined {
		return this.tryGetRuleContext(0, NotSetContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.DOT, 0); }
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_atom; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotSetContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(ANTLRv4Parser.NOT, 0); }
	public setElement(): SetElementContext | undefined {
		return this.tryGetRuleContext(0, SetElementContext);
	}
	public blockSet(): BlockSetContext | undefined {
		return this.tryGetRuleContext(0, BlockSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_notSet; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterNotSet) {
			listener.enterNotSet(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitNotSet) {
			listener.exitNotSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitNotSet) {
			return visitor.visitNotSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockSetContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.LPAREN, 0); }
	public setElement(): SetElementContext[];
	public setElement(i: number): SetElementContext;
	public setElement(i?: number): SetElementContext | SetElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SetElementContext);
		} else {
			return this.getRuleContext(i, SetElementContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.RPAREN, 0); }
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.OR);
		} else {
			return this.getToken(ANTLRv4Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_blockSet; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterBlockSet) {
			listener.enterBlockSet(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitBlockSet) {
			listener.exitBlockSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitBlockSet) {
			return visitor.visitBlockSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetElementContext extends ParserRuleContext {
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); }
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); }
	public characterRange(): CharacterRangeContext | undefined {
		return this.tryGetRuleContext(0, CharacterRangeContext);
	}
	public LEXER_CHAR_SET(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.LEXER_CHAR_SET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_setElement; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterSetElement) {
			listener.enterSetElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitSetElement) {
			listener.exitSetElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitSetElement) {
			return visitor.visitSetElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.LPAREN, 0); }
	public altList(): AltListContext {
		return this.getRuleContext(0, AltListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ANTLRv4Parser.RPAREN, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.COLON, 0); }
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	public ruleAction(): RuleActionContext[];
	public ruleAction(i: number): RuleActionContext;
	public ruleAction(i?: number): RuleActionContext | RuleActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleActionContext);
		} else {
			return this.getRuleContext(i, RuleActionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_block; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulerefContext extends ParserRuleContext {
	public RULE_REF(): TerminalNode { return this.getToken(ANTLRv4Parser.RULE_REF, 0); }
	public argActionBlock(): ArgActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgActionBlockContext);
	}
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_ruleref; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterRuleref) {
			listener.enterRuleref(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitRuleref) {
			listener.exitRuleref(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitRuleref) {
			return visitor.visitRuleref(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacterRangeContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.STRING_LITERAL);
		} else {
			return this.getToken(ANTLRv4Parser.STRING_LITERAL, i);
		}
	}
	public RANGE(): TerminalNode { return this.getToken(ANTLRv4Parser.RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_characterRange; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterCharacterRange) {
			listener.enterCharacterRange(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitCharacterRange) {
			listener.exitCharacterRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitCharacterRange) {
			return visitor.visitCharacterRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Terminal_Context extends ParserRuleContext {
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); }
	public elementOptions(): ElementOptionsContext | undefined {
		return this.tryGetRuleContext(0, ElementOptionsContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_terminal_; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterTerminal_) {
			listener.enterTerminal_(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitTerminal_) {
			listener.exitTerminal_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitTerminal_) {
			return visitor.visitTerminal_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementOptionsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(ANTLRv4Parser.LT, 0); }
	public elementOption(): ElementOptionContext[];
	public elementOption(i: number): ElementOptionContext;
	public elementOption(i?: number): ElementOptionContext | ElementOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementOptionContext);
		} else {
			return this.getRuleContext(i, ElementOptionContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(ANTLRv4Parser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv4Parser.COMMA);
		} else {
			return this.getToken(ANTLRv4Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_elementOptions; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterElementOptions) {
			listener.enterElementOptions(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitElementOptions) {
			listener.exitElementOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitElementOptions) {
			return visitor.visitElementOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementOptionContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.ASSIGN, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_elementOption; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterElementOption) {
			listener.enterElementOption(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitElementOption) {
			listener.exitElementOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitElementOption) {
			return visitor.visitElementOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public RULE_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.RULE_REF, 0); }
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv4Parser.TOKEN_REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv4Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: ANTLRv4ParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv4ParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ANTLRv4ParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


