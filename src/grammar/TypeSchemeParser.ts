// Generated from ./grammar/TypeSchemeParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { TypeSchemeParserListener } from "./TypeSchemeParserListener";
import { TypeSchemeParserVisitor } from "./TypeSchemeParserVisitor";


export class TypeSchemeParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly LBRACE = 3;
	public static readonly RBRACE = 4;
	public static readonly LBRACK = 5;
	public static readonly RBRACK = 6;
	public static readonly LANGL = 7;
	public static readonly RANGL = 8;
	public static readonly COLON = 9;
	public static readonly COMMA = 10;
	public static readonly AMP = 11;
	public static readonly BAR = 12;
	public static readonly SPREAD = 13;
	public static readonly DOT = 14;
	public static readonly QUOTE = 15;
	public static readonly WS = 16;
	public static readonly KEYOF = 17;
	public static readonly INFER = 18;
	public static readonly IN = 19;
	public static readonly AS = 20;
	public static readonly EXTENDS = 21;
	public static readonly EXTENDS_Q = 22;
	public static readonly IN_Q = 23;
	public static readonly IF = 24;
	public static readonly NEVER = 25;
	public static readonly NULL = 26;
	public static readonly UNDEFINED = 27;
	public static readonly UNKNOWN = 28;
	public static readonly OBJECT = 29;
	public static readonly ANY = 30;
	public static readonly STRING = 31;
	public static readonly NUMBER = 32;
	public static readonly BOOLEAN = 33;
	public static readonly BooleanLiteral = 34;
	public static readonly StringLiteral = 35;
	public static readonly SingleQuotedStringLiteral = 36;
	public static readonly DoubleQuotedStringLiteral = 37;
	public static readonly BacktickStringLiteral = 38;
	public static readonly EscapeSequence = 39;
	public static readonly UnicodeEscapeSequence = 40;
	public static readonly NumberLiteral = 41;
	public static readonly HexLiteral = 42;
	public static readonly OctalLiteral = 43;
	public static readonly BinaryLiteral = 44;
	public static readonly DecimalLiteral = 45;
	public static readonly Identifier = 46;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_ws = 1;
	public static readonly RULE_sexpr = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_list = 4;
	public static readonly RULE_primitive = 5;
	public static readonly RULE_literal = 6;
	public static readonly RULE_tupleLiteral = 7;
	public static readonly RULE_objectLiteral = 8;
	public static readonly RULE_objectProp = 9;
	public static readonly RULE_identifier = 10;
	public static readonly RULE_reservedKeyword = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "ws", "sexpr", "atom", "list", "primitive", "literal", 
		"tupleLiteral", "objectLiteral", "objectProp", "identifier", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "'<'", "'>'", "':'", 
		"','", "'&'", "'|'", "'...'", "'.'", "'''", undefined, "'keyof'", "'infer'", 
		"'in'", "'as'", "'extends'", "'extends?'", "'in?'", "'if'", "'never'", 
		"'null'", "'undefined'", "'unknown'", "'object'", "'any'", "'string'", 
		"'number'", "'boolean'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"LANGL", "RANGL", "COLON", "COMMA", "AMP", "BAR", "SPREAD", "DOT", "QUOTE", 
		"WS", "KEYOF", "INFER", "IN", "AS", "EXTENDS", "EXTENDS_Q", "IN_Q", "IF", 
		"NEVER", "NULL", "UNDEFINED", "UNKNOWN", "OBJECT", "ANY", "STRING", "NUMBER", 
		"BOOLEAN", "BooleanLiteral", "StringLiteral", "SingleQuotedStringLiteral", 
		"DoubleQuotedStringLiteral", "BacktickStringLiteral", "EscapeSequence", 
		"UnicodeEscapeSequence", "NumberLiteral", "HexLiteral", "OctalLiteral", 
		"BinaryLiteral", "DecimalLiteral", "Identifier",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypeSchemeParser._LITERAL_NAMES, TypeSchemeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypeSchemeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TypeSchemeParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypeSchemeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypeSchemeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TypeSchemeParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TypeSchemeParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeSchemeParser.WS) {
				{
				this.state = 24;
				this.ws();
				}
			}

			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 27;
				this.sexpr(0);
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeSchemeParser.WS) {
					{
					this.state = 28;
					this.ws();
					}
				}

				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(TypeSchemeParser.EOF);
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
	public ws(): WsContext {
		let _localctx: WsContext = new WsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TypeSchemeParser.RULE_ws);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(TypeSchemeParser.WS);
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

	public sexpr(): SexprContext;
	public sexpr(_p: number): SexprContext;
	// @RuleVersion(0)
	public sexpr(_p?: number): SexprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SexprContext = new SexprContext(this._ctx, _parentState);
		let _prevctx: SexprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, TypeSchemeParser.RULE_sexpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new T_AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 41;
				this.atom();
				}
				break;

			case 2:
				{
				_localctx = new T_QuotedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				this.match(TypeSchemeParser.QUOTE);
				this.state = 43;
				this.sexpr(9);
				}
				break;

			case 3:
				{
				_localctx = new T_GroupedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 44;
				this.match(TypeSchemeParser.LPAREN);
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.WS) {
					{
					{
					this.state = 45;
					this.ws();
					}
					}
					this.state = 50;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 51;
				this.sexpr(0);
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.WS) {
					{
					{
					this.state = 52;
					this.ws();
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 58;
				this.match(TypeSchemeParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new T_ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 60;
				this.list();
				}
				break;

			case 5:
				{
				_localctx = new T_SpreadContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 61;
				this.match(TypeSchemeParser.SPREAD);
				this.state = 62;
				this.sexpr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 115;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new T_BarContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 65;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 69;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 66;
							this.ws();
							}
							}
							this.state = 71;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 72;
						this.match(TypeSchemeParser.BAR);
						this.state = 76;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 73;
							this.ws();
							}
							}
							this.state = 78;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 79;
						this.sexpr(7);
						}
						break;

					case 2:
						{
						_localctx = new T_AmpContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 84;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 81;
							this.ws();
							}
							}
							this.state = 86;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 87;
						this.match(TypeSchemeParser.AMP);
						this.state = 91;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 88;
							this.ws();
							}
							}
							this.state = 93;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 94;
						this.sexpr(6);
						}
						break;

					case 3:
						{
						_localctx = new T_ArrayContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 95;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 96;
						this.match(TypeSchemeParser.LBRACK);
						this.state = 97;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new T_IndexedContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 98;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 99;
						this.match(TypeSchemeParser.LBRACK);
						{
						this.state = 100;
						(_localctx as T_IndexedContext)._arg = this.sexpr(0);
						}
						this.state = 101;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 5:
						{
						_localctx = new T_CallContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 103;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 104;
						this.match(TypeSchemeParser.LANGL);
						{
						this.state = 105;
						(_localctx as T_CallContext)._sexpr = this.sexpr(0);
						(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
						this.state = 110;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.COMMA) {
							{
							{
							this.state = 106;
							this.match(TypeSchemeParser.COMMA);
							this.state = 107;
							(_localctx as T_CallContext)._sexpr = this.sexpr(0);
							(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
							}
							}
							this.state = 112;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						this.state = 113;
						this.match(TypeSchemeParser.RANGL);
						}
						break;
					}
					}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TypeSchemeParser.RULE_atom);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.NEVER:
			case TypeSchemeParser.NULL:
			case TypeSchemeParser.UNDEFINED:
			case TypeSchemeParser.UNKNOWN:
			case TypeSchemeParser.OBJECT:
			case TypeSchemeParser.ANY:
			case TypeSchemeParser.STRING:
			case TypeSchemeParser.NUMBER:
			case TypeSchemeParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.primitive();
				}
				break;
			case TypeSchemeParser.LBRACE:
			case TypeSchemeParser.LBRACK:
			case TypeSchemeParser.BooleanLiteral:
			case TypeSchemeParser.StringLiteral:
			case TypeSchemeParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				this.literal();
				}
				break;
			case TypeSchemeParser.KEYOF:
			case TypeSchemeParser.INFER:
			case TypeSchemeParser.IN:
			case TypeSchemeParser.AS:
			case TypeSchemeParser.EXTENDS:
			case TypeSchemeParser.EXTENDS_Q:
			case TypeSchemeParser.IN_Q:
			case TypeSchemeParser.IF:
			case TypeSchemeParser.Identifier:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 122;
				this.identifier();
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TypeSchemeParser.RULE_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(TypeSchemeParser.LPAREN);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 126;
				this.ws();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 132;
				this.sexpr(0);
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 133;
						this.ws();
						}
						}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0));
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 143;
				this.ws();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
			this.match(TypeSchemeParser.RPAREN);
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
	public primitive(): PrimitiveContext {
		let _localctx: PrimitiveContext = new PrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TypeSchemeParser.RULE_primitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (TypeSchemeParser.NEVER - 25)) | (1 << (TypeSchemeParser.NULL - 25)) | (1 << (TypeSchemeParser.UNDEFINED - 25)) | (1 << (TypeSchemeParser.UNKNOWN - 25)) | (1 << (TypeSchemeParser.OBJECT - 25)) | (1 << (TypeSchemeParser.ANY - 25)) | (1 << (TypeSchemeParser.STRING - 25)) | (1 << (TypeSchemeParser.NUMBER - 25)) | (1 << (TypeSchemeParser.BOOLEAN - 25)))) !== 0))) {
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TypeSchemeParser.RULE_literal);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.match(TypeSchemeParser.BooleanLiteral);
				}
				break;
			case TypeSchemeParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.match(TypeSchemeParser.StringLiteral);
				}
				break;
			case TypeSchemeParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 155;
				this.match(TypeSchemeParser.NumberLiteral);
				}
				break;
			case TypeSchemeParser.LBRACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 156;
				this.tupleLiteral();
				}
				break;
			case TypeSchemeParser.LBRACE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 157;
				this.objectLiteral();
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
	public tupleLiteral(): TupleLiteralContext {
		let _localctx: TupleLiteralContext = new TupleLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TypeSchemeParser.RULE_tupleLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(TypeSchemeParser.LBRACK);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 161;
					this.ws();
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 167;
				_localctx._sexpr = this.sexpr(0);
				_localctx._items.push(_localctx._sexpr);
				}
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 168;
						this.ws();
						}
						}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 174;
					this.match(TypeSchemeParser.COMMA);
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TypeSchemeParser.WS) {
						{
						{
						this.state = 175;
						this.ws();
						}
						}
						this.state = 180;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 181;
					_localctx._sexpr = this.sexpr(0);
					_localctx._items.push(_localctx._sexpr);
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 189;
				this.ws();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 195;
			this.match(TypeSchemeParser.RBRACK);
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
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TypeSchemeParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(TypeSchemeParser.LBRACE);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 198;
					this.ws();
					}
					}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TypeSchemeParser.KEYOF - 17)) | (1 << (TypeSchemeParser.INFER - 17)) | (1 << (TypeSchemeParser.IN - 17)) | (1 << (TypeSchemeParser.AS - 17)) | (1 << (TypeSchemeParser.EXTENDS - 17)) | (1 << (TypeSchemeParser.EXTENDS_Q - 17)) | (1 << (TypeSchemeParser.IN_Q - 17)) | (1 << (TypeSchemeParser.IF - 17)) | (1 << (TypeSchemeParser.Identifier - 17)))) !== 0)) {
				{
				{
				this.state = 204;
				_localctx._objectProp = this.objectProp();
				_localctx._props.push(_localctx._objectProp);
				}
				this.state = 208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 205;
						this.ws();
						}
						}
					}
					this.state = 210;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 211;
					this.match(TypeSchemeParser.COMMA);
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TypeSchemeParser.WS) {
						{
						{
						this.state = 212;
						this.ws();
						}
						}
						this.state = 217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 218;
					_localctx._objectProp = this.objectProp();
					_localctx._props.push(_localctx._objectProp);
					}
					}
					this.state = 223;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 226;
				this.ws();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this.match(TypeSchemeParser.RBRACE);
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
	public objectProp(): ObjectPropContext {
		let _localctx: ObjectPropContext = new ObjectPropContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TypeSchemeParser.RULE_objectProp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 234;
			_localctx._key = this.identifier();
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 235;
				this.ws();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
			this.match(TypeSchemeParser.COLON);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 242;
				this.ws();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			{
			this.state = 248;
			_localctx._value = this.sexpr(0);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TypeSchemeParser.RULE_identifier);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.match(TypeSchemeParser.Identifier);
				}
				break;
			case TypeSchemeParser.KEYOF:
			case TypeSchemeParser.INFER:
			case TypeSchemeParser.IN:
			case TypeSchemeParser.AS:
			case TypeSchemeParser.EXTENDS:
			case TypeSchemeParser.EXTENDS_Q:
			case TypeSchemeParser.IN_Q:
			case TypeSchemeParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.reservedKeyword();
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
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TypeSchemeParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.sexpr_sempred(_localctx as SexprContext, predIndex);
		}
		return true;
	}
	private sexpr_sempred(_localctx: SexprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0103\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x05\x02\x1C\n\x02\x03\x02\x03\x02\x05\x02 \n\x02\x07\x02\"\n\x02" +
		"\f\x02\x0E\x02%\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x041\n\x04\f\x04\x0E\x044\v\x04\x03" +
		"\x04\x03\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04B\n\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E" +
		"\x04I\v\x04\x03\x04\x03\x04\x07\x04M\n\x04\f\x04\x0E\x04P\v\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04U\n\x04\f\x04\x0E\x04X\v\x04\x03\x04\x03\x04\x07" +
		"\x04\\\n\x04\f\x04\x0E\x04_\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04o\n\x04\f\x04\x0E\x04r\v\x04\x03\x04\x03\x04\x07\x04v\n\x04" +
		"\f\x04\x0E\x04y\v\x04\x03\x05\x03\x05\x03\x05\x05\x05~\n\x05\x03\x06\x03" +
		"\x06\x07\x06\x82\n\x06\f\x06\x0E\x06\x85\v\x06\x03\x06\x03\x06\x07\x06" +
		"\x89\n\x06\f\x06\x0E\x06\x8C\v\x06\x06\x06\x8E\n\x06\r\x06\x0E\x06\x8F" +
		"\x03\x06\x07\x06\x93\n\x06\f\x06\x0E\x06\x96\v\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA1\n\b\x03\t\x03\t\x07" +
		"\t\xA5\n\t\f\t\x0E\t\xA8\v\t\x03\t\x03\t\x07\t\xAC\n\t\f\t\x0E\t\xAF\v" +
		"\t\x03\t\x03\t\x07\t\xB3\n\t\f\t\x0E\t\xB6\v\t\x03\t\x07\t\xB9\n\t\f\t" +
		"\x0E\t\xBC\v\t\x05\t\xBE\n\t\x03\t\x07\t\xC1\n\t\f\t\x0E\t\xC4\v\t\x03" +
		"\t\x03\t\x03\n\x03\n\x07\n\xCA\n\n\f\n\x0E\n\xCD\v\n\x03\n\x03\n\x07\n" +
		"\xD1\n\n\f\n\x0E\n\xD4\v\n\x03\n\x03\n\x07\n\xD8\n\n\f\n\x0E\n\xDB\v\n" +
		"\x03\n\x07\n\xDE\n\n\f\n\x0E\n\xE1\v\n\x05\n\xE3\n\n\x03\n\x07\n\xE6\n" +
		"\n\f\n\x0E\n\xE9\v\n\x03\n\x03\n\x03\v\x03\v\x07\v\xEF\n\v\f\v\x0E\v\xF2" +
		"\v\v\x03\v\x03\v\x07\v\xF6\n\v\f\v\x0E\v\xF9\v\v\x03\v\x03\v\x03\f\x03" +
		"\f\x05\f\xFF\n\f\x03\r\x03\r\x03\r\x02\x02\x03\x06\x0E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x02\x04\x03\x02\x1B#\x03\x02\x13\x1A\x02\u0122\x02\x1B\x03\x02\x02" +
		"\x02\x04(\x03\x02\x02\x02\x06A\x03\x02\x02\x02\b}\x03\x02\x02\x02\n\x7F" +
		"\x03\x02\x02\x02\f\x99\x03\x02\x02\x02\x0E\xA0\x03\x02\x02\x02\x10\xA2" +
		"\x03\x02\x02\x02\x12\xC7\x03\x02\x02\x02\x14\xEC\x03\x02\x02\x02\x16\xFE" +
		"\x03\x02\x02\x02\x18\u0100\x03\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B" +
		"\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C#\x03\x02\x02\x02\x1D" +
		"\x1F\x05\x06\x04\x02\x1E \x05\x04\x03\x02\x1F\x1E\x03\x02\x02\x02\x1F" +
		" \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1D\x03\x02\x02\x02\"%\x03\x02\x02" +
		"\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02" +
		"\x02&\'\x07\x02\x02\x03\'\x03\x03\x02\x02\x02()\x07\x12\x02\x02)\x05\x03" +
		"\x02\x02\x02*+\b\x04\x01\x02+B\x05\b\x05\x02,-\x07\x11\x02\x02-B\x05\x06" +
		"\x04\v.2\x07\x03\x02\x02/1\x05\x04\x03\x020/\x03\x02\x02\x0214\x03\x02" +
		"\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x0235\x03\x02\x02\x0242\x03\x02" +
		"\x02\x0259\x05\x06\x04\x0268\x05\x04\x03\x0276\x03\x02\x02\x028;\x03\x02" +
		"\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02;9\x03\x02" +
		"\x02\x02<=\x07\x04\x02\x02=B\x03\x02\x02\x02>B\x05\n\x06\x02?@\x07\x0F" +
		"\x02\x02@B\x05\x06\x04\x03A*\x03\x02\x02\x02A,\x03\x02\x02\x02A.\x03\x02" +
		"\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02Bw\x03\x02\x02\x02CG\f\b\x02" +
		"\x02DF\x05\x04\x03\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JN\x07\x0E\x02" +
		"\x02KM\x05\x04\x03\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02" +
		"\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02\x02\x02Qv\x05\x06\x04" +
		"\tRV\f\x07\x02\x02SU\x05\x04\x03\x02TS\x03\x02\x02\x02UX\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"Y]\x07\r\x02\x02Z\\\x05\x04\x03\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02" +
		"][\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"`v\x05\x06\x04\bab\f\t\x02\x02bc\x07\x07\x02\x02cv\x07\b\x02\x02de\f\x06" +
		"\x02\x02ef\x07\x07\x02\x02fg\x05\x06\x04\x02gh\x07\b\x02\x02hv\x03\x02" +
		"\x02\x02ij\f\x05\x02\x02jk\x07\t\x02\x02kp\x05\x06\x04\x02lm\x07\f\x02" +
		"\x02mo\x05\x06\x04\x02nl\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02st\x07\n\x02" +
		"\x02tv\x03\x02\x02\x02uC\x03\x02\x02\x02uR\x03\x02\x02\x02ua\x03\x02\x02" +
		"\x02ud\x03\x02\x02\x02ui\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02" +
		"\x02wx\x03\x02\x02\x02x\x07\x03\x02\x02\x02yw\x03\x02\x02\x02z~\x05\f" +
		"\x07\x02{~\x05\x0E\b\x02|~\x05\x16\f\x02}z\x03\x02\x02\x02}{\x03\x02\x02" +
		"\x02}|\x03\x02\x02\x02~\t\x03\x02\x02\x02\x7F\x83\x07\x03\x02\x02\x80" +
		"\x82\x05\x04\x03\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x8D\x03\x02\x02\x02\x85" +
		"\x83\x03\x02\x02\x02\x86\x8A\x05\x06\x04\x02\x87\x89\x05\x04\x03\x02\x88" +
		"\x87\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A" +
		"\x8B\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D" +
		"\x86\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F" +
		"\x90\x03\x02\x02\x02\x90\x94\x03\x02\x02\x02\x91\x93\x05\x04\x03\x02\x92" +
		"\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94" +
		"\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97" +
		"\x98\x07\x04\x02\x02\x98\v\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02\x9A\r" +
		"\x03\x02\x02\x02\x9B\xA1\x07$\x02\x02\x9C\xA1\x07%\x02\x02\x9D\xA1\x07" +
		"+\x02\x02\x9E\xA1\x05\x10\t\x02\x9F\xA1\x05\x12\n\x02\xA0\x9B\x03\x02" +
		"\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA6\x07\x07" +
		"\x02\x02\xA3\xA5\x05\x04\x03\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xBD\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAD\x05\x06\x04\x02\xAA\xAC\x05\x04" +
		"\x03\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xBA\x03\x02\x02\x02\xAF\xAD\x03\x02" +
		"\x02\x02\xB0\xB4\x07\f\x02\x02\xB1\xB3\x05\x04\x03\x02\xB2\xB1\x03\x02" +
		"\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02" +
		"\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB9\x05\x06" +
		"\x04\x02\xB8\xB0\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02" +
		"\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02" +
		"\x02\x02\xBD\xA9\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC2\x03\x02" +
		"\x02\x02\xBF\xC1\x05\x04\x03\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02" +
		"\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\b\x02\x02\xC6\x11\x03\x02" +
		"\x02\x02\xC7\xCB\x07\x05\x02\x02\xC8\xCA\x05\x04\x03\x02\xC9\xC8\x03\x02" +
		"\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02" +
		"\x02\x02\xCC\xE2\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD2\x05\x14" +
		"\v\x02\xCF\xD1\x05\x04\x03\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02" +
		"\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xDF\x03\x02" +
		"\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD9\x07\f\x02\x02\xD6\xD8\x05\x04" +
		"\x03\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02" +
		"\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD9\x03\x02" +
		"\x02\x02\xDC\xDE\x05\x14\v\x02\xDD\xD5\x03\x02\x02\x02\xDE\xE1\x03\x02" +
		"\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE3\x03\x02" +
		"\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xCE\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE7\x03\x02\x02\x02\xE4\xE6\x05\x04\x03\x02\xE5\xE4\x03\x02" +
		"\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\x07\x06" +
		"\x02\x02\xEB\x13\x03\x02\x02\x02\xEC\xF0\x05\x16\f\x02\xED\xEF\x05\x04" +
		"\x03\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02" +
		"\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF0\x03\x02" +
		"\x02\x02\xF3\xF7\x07\v\x02\x02\xF4\xF6\x05\x04\x03\x02\xF5\xF4\x03\x02" +
		"\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\x05\x06" +
		"\x04\x02\xFB\x15\x03\x02\x02\x02\xFC\xFF\x070\x02\x02\xFD\xFF\x05\x18" +
		"\r\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\x17\x03\x02" +
		"\x02\x02\u0100\u0101\t\x03\x02\x02\u0101\x19\x03\x02\x02\x02$\x1B\x1F" +
		"#29AGNV]puw}\x83\x8A\x8F\x94\xA0\xA6\xAD\xB4\xBA\xBD\xC2\xCB\xD2\xD9\xDF" +
		"\xE2\xE7\xF0\xF7\xFE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypeSchemeParser.__ATN) {
			TypeSchemeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypeSchemeParser._serializedATN));
		}

		return TypeSchemeParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TypeSchemeParser.EOF, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WsContext extends ParserRuleContext {
	public WS(): TerminalNode { return this.getToken(TypeSchemeParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_ws; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterWs) {
			listener.enterWs(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitWs) {
			listener.exitWs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitWs) {
			return visitor.visitWs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SexprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_sexpr; }
	public copyFrom(ctx: SexprContext): void {
		super.copyFrom(ctx);
	}
}
export class T_AtomContext extends SexprContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Atom) {
			listener.enterT_Atom(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Atom) {
			listener.exitT_Atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Atom) {
			return visitor.visitT_Atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_QuotedContext extends SexprContext {
	public QUOTE(): TerminalNode { return this.getToken(TypeSchemeParser.QUOTE, 0); }
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Quoted) {
			listener.enterT_Quoted(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Quoted) {
			listener.exitT_Quoted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Quoted) {
			return visitor.visitT_Quoted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_GroupedContext extends SexprContext {
	public LPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.LPAREN, 0); }
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.RPAREN, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Grouped) {
			listener.enterT_Grouped(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Grouped) {
			listener.exitT_Grouped(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Grouped) {
			return visitor.visitT_Grouped(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_ArrayContext extends SexprContext {
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.RBRACK, 0); }
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Array) {
			listener.enterT_Array(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Array) {
			listener.exitT_Array(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Array) {
			return visitor.visitT_Array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_BarContext extends SexprContext {
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	public BAR(): TerminalNode { return this.getToken(TypeSchemeParser.BAR, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Bar) {
			listener.enterT_Bar(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Bar) {
			listener.exitT_Bar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Bar) {
			return visitor.visitT_Bar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_AmpContext extends SexprContext {
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	public AMP(): TerminalNode { return this.getToken(TypeSchemeParser.AMP, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Amp) {
			listener.enterT_Amp(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Amp) {
			listener.exitT_Amp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Amp) {
			return visitor.visitT_Amp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_IndexedContext extends SexprContext {
	public _arg!: SexprContext;
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.RBRACK, 0); }
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Indexed) {
			listener.enterT_Indexed(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Indexed) {
			listener.exitT_Indexed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Indexed) {
			return visitor.visitT_Indexed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_CallContext extends SexprContext {
	public _sexpr!: SexprContext;
	public _args: SexprContext[] = [];
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	public LANGL(): TerminalNode { return this.getToken(TypeSchemeParser.LANGL, 0); }
	public RANGL(): TerminalNode { return this.getToken(TypeSchemeParser.RANGL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.COMMA);
		} else {
			return this.getToken(TypeSchemeParser.COMMA, i);
		}
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Call) {
			listener.enterT_Call(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Call) {
			listener.exitT_Call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Call) {
			return visitor.visitT_Call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_ListContext extends SexprContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_List) {
			listener.enterT_List(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_List) {
			listener.exitT_List(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_List) {
			return visitor.visitT_List(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class T_SpreadContext extends SexprContext {
	public SPREAD(): TerminalNode { return this.getToken(TypeSchemeParser.SPREAD, 0); }
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	constructor(ctx: SexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterT_Spread) {
			listener.enterT_Spread(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitT_Spread) {
			listener.exitT_Spread(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitT_Spread) {
			return visitor.visitT_Spread(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public primitive(): PrimitiveContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_atom; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.RPAREN, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_list; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.STRING, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.BOOLEAN, 0); }
	public NEVER(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.NEVER, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.NULL, 0); }
	public UNDEFINED(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.UNDEFINED, 0); }
	public UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.UNKNOWN, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.OBJECT, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_primitive; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterPrimitive) {
			listener.enterPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitPrimitive) {
			listener.exitPrimitive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitPrimitive) {
			return visitor.visitPrimitive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.StringLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.NumberLiteral, 0); }
	public tupleLiteral(): TupleLiteralContext | undefined {
		return this.tryGetRuleContext(0, TupleLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_literal; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleLiteralContext extends ParserRuleContext {
	public _sexpr!: SexprContext;
	public _items: SexprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(TypeSchemeParser.RBRACK, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public sexpr(): SexprContext[];
	public sexpr(i: number): SexprContext;
	public sexpr(i?: number): SexprContext | SexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SexprContext);
		} else {
			return this.getRuleContext(i, SexprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.COMMA);
		} else {
			return this.getToken(TypeSchemeParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_tupleLiteral; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterTupleLiteral) {
			listener.enterTupleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitTupleLiteral) {
			listener.exitTupleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitTupleLiteral) {
			return visitor.visitTupleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public _objectProp!: ObjectPropContext;
	public _props: ObjectPropContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(TypeSchemeParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(TypeSchemeParser.RBRACE, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public objectProp(): ObjectPropContext[];
	public objectProp(i: number): ObjectPropContext;
	public objectProp(i?: number): ObjectPropContext | ObjectPropContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPropContext);
		} else {
			return this.getRuleContext(i, ObjectPropContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.COMMA);
		} else {
			return this.getToken(TypeSchemeParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPropContext extends ParserRuleContext {
	public _key!: IdentifierContext;
	public _value!: SexprContext;
	public COLON(): TerminalNode { return this.getToken(TypeSchemeParser.COLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public sexpr(): SexprContext | undefined {
		return this.tryGetRuleContext(0, SexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_objectProp; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterObjectProp) {
			listener.enterObjectProp(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitObjectProp) {
			listener.exitObjectProp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitObjectProp) {
			return visitor.visitObjectProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.Identifier, 0); }
	public reservedKeyword(): ReservedKeywordContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_identifier; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordContext extends ParserRuleContext {
	public KEYOF(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.KEYOF, 0); }
	public INFER(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.INFER, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.IN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.AS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.EXTENDS, 0); }
	public EXTENDS_Q(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.EXTENDS_Q, 0); }
	public IN_Q(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.IN_Q, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.IF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypeSchemeParser.RULE_reservedKeyword; }
	// @Override
	public enterRule(listener: TypeSchemeParserListener): void {
		if (listener.enterReservedKeyword) {
			listener.enterReservedKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: TypeSchemeParserListener): void {
		if (listener.exitReservedKeyword) {
			listener.exitReservedKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypeSchemeParserVisitor<Result>): Result {
		if (visitor.visitReservedKeyword) {
			return visitor.visitReservedKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


