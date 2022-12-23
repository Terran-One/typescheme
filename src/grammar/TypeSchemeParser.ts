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
	public static readonly BooleanLiteral = 1;
	public static readonly StringLiteral = 2;
	public static readonly SingleQuotedStringLiteral = 3;
	public static readonly DoubleQuotedStringLiteral = 4;
	public static readonly BacktickStringLiteral = 5;
	public static readonly EscapeSequence = 6;
	public static readonly UnicodeEscapeSequence = 7;
	public static readonly NumberLiteral = 8;
	public static readonly HexLiteral = 9;
	public static readonly OctalLiteral = 10;
	public static readonly BinaryLiteral = 11;
	public static readonly DecimalLiteral = 12;
	public static readonly LPAREN = 13;
	public static readonly RPAREN = 14;
	public static readonly LBRACE = 15;
	public static readonly RBRACE = 16;
	public static readonly LBRACK = 17;
	public static readonly RBRACK = 18;
	public static readonly LANGL = 19;
	public static readonly RANGL = 20;
	public static readonly COLON = 21;
	public static readonly COMMA = 22;
	public static readonly AMP = 23;
	public static readonly QUESTION = 24;
	public static readonly BAR = 25;
	public static readonly SPREAD = 26;
	public static readonly DOT = 27;
	public static readonly QUOTE = 28;
	public static readonly WS = 29;
	public static readonly KEYOF = 30;
	public static readonly INFER = 31;
	public static readonly IN = 32;
	public static readonly AS = 33;
	public static readonly EXTENDS = 34;
	public static readonly EXTENDS_Q = 35;
	public static readonly IN_Q = 36;
	public static readonly IF = 37;
	public static readonly NEVER = 38;
	public static readonly NULL = 39;
	public static readonly UNDEFINED = 40;
	public static readonly UNKNOWN = 41;
	public static readonly OBJECT = 42;
	public static readonly ANY = 43;
	public static readonly STRING = 44;
	public static readonly NUMBER = 45;
	public static readonly BOOLEAN = 46;
	public static readonly Identifier = 47;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_sexpr = 1;
	public static readonly RULE_atom = 2;
	public static readonly RULE_list = 3;
	public static readonly RULE_primitive = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_tupleLiteral = 6;
	public static readonly RULE_objectLiteral = 7;
	public static readonly RULE_objectProp = 8;
	public static readonly RULE_identifier = 9;
	public static readonly RULE_reservedKeyword = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "sexpr", "atom", "list", "primitive", "literal", "tupleLiteral", 
		"objectLiteral", "objectProp", "identifier", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "'<'", "'>'", "':'", "','", "'&'", 
		"'?'", "'|'", "'...'", "'.'", "'''", undefined, "'keyof'", "'infer'", 
		"'in'", "'as'", "'extends'", "'extends?'", "'in?'", "'if'", "'never'", 
		"'null'", "'undefined'", "'unknown'", "'object'", "'any'", "'string'", 
		"'number'", "'boolean'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BooleanLiteral", "StringLiteral", "SingleQuotedStringLiteral", 
		"DoubleQuotedStringLiteral", "BacktickStringLiteral", "EscapeSequence", 
		"UnicodeEscapeSequence", "NumberLiteral", "HexLiteral", "OctalLiteral", 
		"BinaryLiteral", "DecimalLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"LBRACK", "RBRACK", "LANGL", "RANGL", "COLON", "COMMA", "AMP", "QUESTION", 
		"BAR", "SPREAD", "DOT", "QUOTE", "WS", "KEYOF", "INFER", "IN", "AS", "EXTENDS", 
		"EXTENDS_Q", "IN_Q", "IF", "NEVER", "NULL", "UNDEFINED", "UNKNOWN", "OBJECT", 
		"ANY", "STRING", "NUMBER", "BOOLEAN", "Identifier",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeSchemeParser.WS) {
				{
				this.state = 22;
				this.match(TypeSchemeParser.WS);
				}
			}

			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.BooleanLiteral) | (1 << TypeSchemeParser.StringLiteral) | (1 << TypeSchemeParser.NumberLiteral) | (1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.IN - 32)) | (1 << (TypeSchemeParser.AS - 32)) | (1 << (TypeSchemeParser.EXTENDS - 32)) | (1 << (TypeSchemeParser.EXTENDS_Q - 32)) | (1 << (TypeSchemeParser.IN_Q - 32)) | (1 << (TypeSchemeParser.IF - 32)) | (1 << (TypeSchemeParser.NEVER - 32)) | (1 << (TypeSchemeParser.NULL - 32)) | (1 << (TypeSchemeParser.UNDEFINED - 32)) | (1 << (TypeSchemeParser.UNKNOWN - 32)) | (1 << (TypeSchemeParser.OBJECT - 32)) | (1 << (TypeSchemeParser.ANY - 32)) | (1 << (TypeSchemeParser.STRING - 32)) | (1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 25;
				this.sexpr(0);
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TypeSchemeParser.WS) {
					{
					this.state = 26;
					this.match(TypeSchemeParser.WS);
					}
				}

				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
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
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, TypeSchemeParser.RULE_sexpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new T_AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 37;
				this.atom();
				}
				break;

			case 2:
				{
				_localctx = new T_GroupedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 38;
				this.match(TypeSchemeParser.LPAREN);
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.WS) {
					{
					{
					this.state = 39;
					this.match(TypeSchemeParser.WS);
					}
					}
					this.state = 44;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 45;
				this.sexpr(0);
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.WS) {
					{
					{
					this.state = 46;
					this.match(TypeSchemeParser.WS);
					}
					}
					this.state = 51;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 52;
				this.match(TypeSchemeParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new T_QuotedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.match(TypeSchemeParser.QUOTE);
				this.state = 55;
				this.sexpr(8);
				}
				break;

			case 4:
				{
				_localctx = new T_ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 56;
				this.list();
				}
				break;

			case 5:
				{
				_localctx = new T_SpreadContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 57;
				this.match(TypeSchemeParser.SPREAD);
				this.state = 58;
				this.sexpr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 111;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new T_BarContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 61;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 65;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 62;
							this.match(TypeSchemeParser.WS);
							}
							}
							this.state = 67;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 68;
						this.match(TypeSchemeParser.BAR);
						this.state = 72;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 69;
							this.match(TypeSchemeParser.WS);
							}
							}
							this.state = 74;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 75;
						this.sexpr(7);
						}
						break;

					case 2:
						{
						_localctx = new T_AmpContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 76;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 80;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 77;
							this.match(TypeSchemeParser.WS);
							}
							}
							this.state = 82;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 83;
						this.match(TypeSchemeParser.AMP);
						this.state = 87;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.WS) {
							{
							{
							this.state = 84;
							this.match(TypeSchemeParser.WS);
							}
							}
							this.state = 89;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 90;
						this.sexpr(6);
						}
						break;

					case 3:
						{
						_localctx = new T_ArrayContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 91;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 92;
						this.match(TypeSchemeParser.LBRACK);
						this.state = 93;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new T_IndexedContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 94;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 95;
						this.match(TypeSchemeParser.LBRACK);
						{
						this.state = 96;
						(_localctx as T_IndexedContext)._arg = this.sexpr(0);
						}
						this.state = 97;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 5:
						{
						_localctx = new T_CallContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 99;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 100;
						this.match(TypeSchemeParser.LANGL);
						{
						this.state = 101;
						(_localctx as T_CallContext)._sexpr = this.sexpr(0);
						(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
						this.state = 106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.COMMA) {
							{
							{
							this.state = 102;
							this.match(TypeSchemeParser.COMMA);
							this.state = 103;
							(_localctx as T_CallContext)._sexpr = this.sexpr(0);
							(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
							}
							}
							this.state = 108;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						this.state = 109;
						this.match(TypeSchemeParser.RANGL);
						}
						break;
					}
					}
				}
				this.state = 115;
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
		this.enterRule(_localctx, 4, TypeSchemeParser.RULE_atom);
		try {
			this.state = 119;
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
				this.state = 116;
				this.primitive();
				}
				break;
			case TypeSchemeParser.BooleanLiteral:
			case TypeSchemeParser.StringLiteral:
			case TypeSchemeParser.NumberLiteral:
			case TypeSchemeParser.LBRACE:
			case TypeSchemeParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
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
				this.state = 118;
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
		this.enterRule(_localctx, 6, TypeSchemeParser.RULE_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(TypeSchemeParser.LPAREN);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 122;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 128;
				this.sexpr(0);
				this.state = 132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 129;
						this.match(TypeSchemeParser.WS);
						}
						}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.BooleanLiteral) | (1 << TypeSchemeParser.StringLiteral) | (1 << TypeSchemeParser.NumberLiteral) | (1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.IN - 32)) | (1 << (TypeSchemeParser.AS - 32)) | (1 << (TypeSchemeParser.EXTENDS - 32)) | (1 << (TypeSchemeParser.EXTENDS_Q - 32)) | (1 << (TypeSchemeParser.IN_Q - 32)) | (1 << (TypeSchemeParser.IF - 32)) | (1 << (TypeSchemeParser.NEVER - 32)) | (1 << (TypeSchemeParser.NULL - 32)) | (1 << (TypeSchemeParser.UNDEFINED - 32)) | (1 << (TypeSchemeParser.UNKNOWN - 32)) | (1 << (TypeSchemeParser.OBJECT - 32)) | (1 << (TypeSchemeParser.ANY - 32)) | (1 << (TypeSchemeParser.STRING - 32)) | (1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0));
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 139;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
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
		this.enterRule(_localctx, 8, TypeSchemeParser.RULE_primitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TypeSchemeParser.NEVER - 38)) | (1 << (TypeSchemeParser.NULL - 38)) | (1 << (TypeSchemeParser.UNDEFINED - 38)) | (1 << (TypeSchemeParser.UNKNOWN - 38)) | (1 << (TypeSchemeParser.OBJECT - 38)) | (1 << (TypeSchemeParser.ANY - 38)) | (1 << (TypeSchemeParser.STRING - 38)) | (1 << (TypeSchemeParser.NUMBER - 38)) | (1 << (TypeSchemeParser.BOOLEAN - 38)))) !== 0))) {
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
		this.enterRule(_localctx, 10, TypeSchemeParser.RULE_literal);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(TypeSchemeParser.BooleanLiteral);
				}
				break;
			case TypeSchemeParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.match(TypeSchemeParser.StringLiteral);
				}
				break;
			case TypeSchemeParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 151;
				this.match(TypeSchemeParser.NumberLiteral);
				}
				break;
			case TypeSchemeParser.LBRACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 152;
				this.tupleLiteral();
				}
				break;
			case TypeSchemeParser.LBRACE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 153;
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
		this.enterRule(_localctx, 12, TypeSchemeParser.RULE_tupleLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(TypeSchemeParser.LBRACK);
			this.state = 160;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 157;
					this.match(TypeSchemeParser.WS);
					}
					}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.BooleanLiteral) | (1 << TypeSchemeParser.StringLiteral) | (1 << TypeSchemeParser.NumberLiteral) | (1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.QUOTE) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.IN - 32)) | (1 << (TypeSchemeParser.AS - 32)) | (1 << (TypeSchemeParser.EXTENDS - 32)) | (1 << (TypeSchemeParser.EXTENDS_Q - 32)) | (1 << (TypeSchemeParser.IN_Q - 32)) | (1 << (TypeSchemeParser.IF - 32)) | (1 << (TypeSchemeParser.NEVER - 32)) | (1 << (TypeSchemeParser.NULL - 32)) | (1 << (TypeSchemeParser.UNDEFINED - 32)) | (1 << (TypeSchemeParser.UNKNOWN - 32)) | (1 << (TypeSchemeParser.OBJECT - 32)) | (1 << (TypeSchemeParser.ANY - 32)) | (1 << (TypeSchemeParser.STRING - 32)) | (1 << (TypeSchemeParser.NUMBER - 32)) | (1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 163;
				_localctx._sexpr = this.sexpr(0);
				_localctx._items.push(_localctx._sexpr);
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 164;
						this.match(TypeSchemeParser.WS);
						}
						}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 170;
					this.match(TypeSchemeParser.COMMA);
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TypeSchemeParser.WS) {
						{
						{
						this.state = 171;
						this.match(TypeSchemeParser.WS);
						}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 177;
					_localctx._sexpr = this.sexpr(0);
					_localctx._items.push(_localctx._sexpr);
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 185;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
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
		this.enterRule(_localctx, 14, TypeSchemeParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(TypeSchemeParser.LBRACE);
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 194;
					this.match(TypeSchemeParser.WS);
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (TypeSchemeParser.KEYOF - 30)) | (1 << (TypeSchemeParser.INFER - 30)) | (1 << (TypeSchemeParser.IN - 30)) | (1 << (TypeSchemeParser.AS - 30)) | (1 << (TypeSchemeParser.EXTENDS - 30)) | (1 << (TypeSchemeParser.EXTENDS_Q - 30)) | (1 << (TypeSchemeParser.IN_Q - 30)) | (1 << (TypeSchemeParser.IF - 30)) | (1 << (TypeSchemeParser.Identifier - 30)))) !== 0)) {
				{
				{
				this.state = 200;
				_localctx._objectProp = this.objectProp();
				_localctx._props.push(_localctx._objectProp);
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 201;
						this.match(TypeSchemeParser.WS);
						}
						}
					}
					this.state = 206;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 207;
					this.match(TypeSchemeParser.COMMA);
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TypeSchemeParser.WS) {
						{
						{
						this.state = 208;
						this.match(TypeSchemeParser.WS);
						}
						}
						this.state = 213;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 214;
					_localctx._objectProp = this.objectProp();
					_localctx._props.push(_localctx._objectProp);
					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 222;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
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
		this.enterRule(_localctx, 16, TypeSchemeParser.RULE_objectProp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 230;
			_localctx._key = this.identifier();
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 231;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TypeSchemeParser.QUESTION) {
				{
				this.state = 237;
				_localctx._opt = this.match(TypeSchemeParser.QUESTION);
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.WS) {
					{
					{
					this.state = 238;
					this.match(TypeSchemeParser.WS);
					}
					}
					this.state = 243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 246;
			this.match(TypeSchemeParser.COLON);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TypeSchemeParser.WS) {
				{
				{
				this.state = 247;
				this.match(TypeSchemeParser.WS);
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			{
			this.state = 253;
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
		this.enterRule(_localctx, 18, TypeSchemeParser.RULE_identifier);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
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
				this.state = 256;
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
		this.enterRule(_localctx, 20, TypeSchemeParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (TypeSchemeParser.KEYOF - 30)) | (1 << (TypeSchemeParser.INFER - 30)) | (1 << (TypeSchemeParser.IN - 30)) | (1 << (TypeSchemeParser.AS - 30)) | (1 << (TypeSchemeParser.EXTENDS - 30)) | (1 << (TypeSchemeParser.EXTENDS_Q - 30)) | (1 << (TypeSchemeParser.IN_Q - 30)) | (1 << (TypeSchemeParser.IF - 30)))) !== 0))) {
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
		case 1:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0108\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
		"\x1A\n\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x07\x02 \n\x02\f\x02\x0E" +
		"\x02#\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03+\n" +
		"\x03\f\x03\x0E\x03.\v\x03\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x03" +
		"5\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		">\n\x03\x03\x03\x03\x03\x07\x03B\n\x03\f\x03\x0E\x03E\v\x03\x03\x03\x03" +
		"\x03\x07\x03I\n\x03\f\x03\x0E\x03L\v\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"Q\n\x03\f\x03\x0E\x03T\v\x03\x03\x03\x03\x03\x07\x03X\n\x03\f\x03\x0E" +
		"\x03[\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03k\n\x03\f" +
		"\x03\x0E\x03n\v\x03\x03\x03\x03\x03\x07\x03r\n\x03\f\x03\x0E\x03u\v\x03" +
		"\x03\x04\x03\x04\x03\x04\x05\x04z\n\x04\x03\x05\x03\x05\x07\x05~\n\x05" +
		"\f\x05\x0E\x05\x81\v\x05\x03\x05\x03\x05\x07\x05\x85\n\x05\f\x05\x0E\x05" +
		"\x88\v\x05\x06\x05\x8A\n\x05\r\x05\x0E\x05\x8B\x03\x05\x07\x05\x8F\n\x05" +
		"\f\x05\x0E\x05\x92\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\x9D\n\x07\x03\b\x03\b\x07\b\xA1\n\b\f" +
		"\b\x0E\b\xA4\v\b\x03\b\x03\b\x07\b\xA8\n\b\f\b\x0E\b\xAB\v\b\x03\b\x03" +
		"\b\x07\b\xAF\n\b\f\b\x0E\b\xB2\v\b\x03\b\x07\b\xB5\n\b\f\b\x0E\b\xB8\v" +
		"\b\x05\b\xBA\n\b\x03\b\x07\b\xBD\n\b\f\b\x0E\b\xC0\v\b\x03\b\x03\b\x03" +
		"\t\x03\t\x07\t\xC6\n\t\f\t\x0E\t\xC9\v\t\x03\t\x03\t\x07\t\xCD\n\t\f\t" +
		"\x0E\t\xD0\v\t\x03\t\x03\t\x07\t\xD4\n\t\f\t\x0E\t\xD7\v\t\x03\t\x07\t" +
		"\xDA\n\t\f\t\x0E\t\xDD\v\t\x05\t\xDF\n\t\x03\t\x07\t\xE2\n\t\f\t\x0E\t" +
		"\xE5\v\t\x03\t\x03\t\x03\n\x03\n\x07\n\xEB\n\n\f\n\x0E\n\xEE\v\n\x03\n" +
		"\x03\n\x07\n\xF2\n\n\f\n\x0E\n\xF5\v\n\x05\n\xF7\n\n\x03\n\x03\n\x07\n" +
		"\xFB\n\n\f\n\x0E\n\xFE\v\n\x03\n\x03\n\x03\v\x03\v\x05\v\u0104\n\v\x03" +
		"\f\x03\f\x03\f\x02\x02\x03\x04\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x04\x03\x02(0\x03\x02" +
		" \'\x02\u012A\x02\x19\x03\x02\x02\x02\x04=\x03\x02\x02\x02\x06y\x03\x02" +
		"\x02\x02\b{\x03\x02\x02\x02\n\x95\x03\x02\x02\x02\f\x9C\x03\x02\x02\x02" +
		"\x0E\x9E\x03\x02\x02\x02\x10\xC3\x03\x02\x02\x02\x12\xE8\x03\x02\x02\x02" +
		"\x14\u0103\x03\x02\x02\x02\x16\u0105\x03\x02\x02\x02\x18\x1A\x07\x1F\x02" +
		"\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A!\x03\x02\x02" +
		"\x02\x1B\x1D\x05\x04\x03\x02\x1C\x1E\x07\x1F\x02\x02\x1D\x1C\x03\x02\x02" +
		"\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1B\x03\x02\x02" +
		"\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"$\x03" +
		"\x02\x02\x02#!\x03\x02\x02\x02$%\x07\x02\x02\x03%\x03\x03\x02\x02\x02" +
		"&\'\b\x03\x01\x02\'>\x05\x06\x04\x02(,\x07\x0F\x02\x02)+\x07\x1F\x02\x02" +
		"*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-/\x03\x02\x02\x02.,\x03\x02\x02\x02/3\x05\x04\x03\x0202\x07\x1F\x02\x02" +
		"10\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"46\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\x10\x02\x027>\x03\x02\x02\x02" +
		"89\x07\x1E\x02\x029>\x05\x04\x03\n:>\x05\b\x05\x02;<\x07\x1C\x02\x02<" +
		">\x05\x04\x03\x03=&\x03\x02\x02\x02=(\x03\x02\x02\x02=8\x03\x02\x02\x02" +
		"=:\x03\x02\x02\x02=;\x03\x02\x02\x02>s\x03\x02\x02\x02?C\f\b\x02\x02@" +
		"B\x07\x1F\x02\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02FJ\x07\x1B\x02\x02" +
		"GI\x07\x1F\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02Mr\x05\x04\x03\t" +
		"NR\f\x07\x02\x02OQ\x07\x1F\x02\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"UY\x07\x19\x02\x02VX\x07\x1F\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02" +
		"YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02" +
		"\x02\\r\x05\x04\x03\b]^\f\t\x02\x02^_\x07\x13\x02\x02_r\x07\x14\x02\x02" +
		"`a\f\x06\x02\x02ab\x07\x13\x02\x02bc\x05\x04\x03\x02cd\x07\x14\x02\x02" +
		"dr\x03\x02\x02\x02ef\f\x05\x02\x02fg\x07\x15\x02\x02gl\x05\x04\x03\x02" +
		"hi\x07\x18\x02\x02ik\x05\x04\x03\x02jh\x03\x02\x02\x02kn\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02" +
		"op\x07\x16\x02\x02pr\x03\x02\x02\x02q?\x03\x02\x02\x02qN\x03\x02\x02\x02" +
		"q]\x03\x02\x02\x02q`\x03\x02\x02\x02qe\x03\x02\x02\x02ru\x03\x02\x02\x02" +
		"sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x05\x03\x02\x02\x02us\x03\x02\x02" +
		"\x02vz\x05\n\x06\x02wz\x05\f\x07\x02xz\x05\x14\v\x02yv\x03\x02\x02\x02" +
		"yw\x03\x02\x02\x02yx\x03\x02\x02\x02z\x07\x03\x02\x02\x02{\x7F\x07\x0F" +
		"\x02\x02|~\x07\x1F\x02\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F" +
		"}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x89\x03\x02\x02\x02\x81" +
		"\x7F\x03\x02\x02\x02\x82\x86\x05\x04\x03\x02\x83\x85\x07\x1F\x02\x02\x84" +
		"\x83\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89" +
		"\x82\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B" +
		"\x8C\x03\x02\x02\x02\x8C\x90\x03\x02\x02\x02\x8D\x8F\x07\x1F\x02\x02\x8E" +
		"\x8D\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90" +
		"\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93" +
		"\x94\x07\x10\x02\x02\x94\t\x03\x02\x02\x02\x95\x96\t\x02\x02\x02\x96\v" +
		"\x03\x02\x02\x02\x97\x9D\x07\x03\x02\x02\x98\x9D\x07\x04\x02\x02\x99\x9D" +
		"\x07\n\x02\x02\x9A\x9D\x05\x0E\b\x02\x9B\x9D\x05\x10\t\x02\x9C\x97\x03" +
		"\x02\x02\x02\x9C\x98\x03\x02\x02\x02\x9C\x99\x03\x02\x02\x02\x9C\x9A\x03" +
		"\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\r\x03\x02\x02\x02\x9E\xA2\x07" +
		"\x13\x02\x02\x9F\xA1\x07\x1F\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03" +
		"\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xB9\x03" +
		"\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA9\x05\x04\x03\x02\xA6\xA8\x07" +
		"\x1F\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xB6\x03\x02\x02\x02\xAB\xA9\x03" +
		"\x02\x02\x02\xAC\xB0\x07\x18\x02\x02\xAD\xAF\x07\x1F\x02\x02\xAE\xAD\x03" +
		"\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03" +
		"\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5\x05" +
		"\x04\x03\x02\xB4\xAC\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03" +
		"\x02\x02\x02\xB9\xA5\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03" +
		"\x02\x02\x02\xBB\xBD\x07\x1F\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03" +
		"\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03" +
		"\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x07\x14\x02\x02\xC2\x0F\x03" +
		"\x02\x02\x02\xC3\xC7\x07\x11\x02\x02\xC4\xC6\x07\x1F\x02\x02\xC5\xC4\x03" +
		"\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\xDE\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCE\x05" +
		"\x12\n\x02\xCB\xCD\x07\x1F\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03" +
		"\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xDB\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD5\x07\x18\x02\x02\xD2\xD4\x07" +
		"\x1F\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03" +
		"\x02\x02\x02\xD8\xDA\x05\x12\n\x02\xD9\xD1\x03\x02\x02\x02\xDA\xDD\x03" +
		"\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDF\x03" +
		"\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xCA\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xE3\x03\x02\x02\x02\xE0\xE2\x07\x1F\x02\x02\xE1\xE0\x03" +
		"\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE7\x07" +
		"\x12\x02\x02\xE7\x11\x03\x02\x02\x02\xE8\xEC\x05\x14\v\x02\xE9\xEB\x07" +
		"\x1F\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF6\x03\x02\x02\x02\xEE\xEC\x03" +
		"\x02\x02\x02\xEF\xF3\x07\x1A\x02\x02\xF0\xF2\x07\x1F\x02\x02\xF1\xF0\x03" +
		"\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03" +
		"\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xEF\x03" +
		"\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFC\x07" +
		"\x17\x02\x02\xF9\xFB\x07\x1F\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03" +
		"\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0100\x05\x04\x03\x02\u0100\x13" +
		"\x03\x02\x02\x02\u0101\u0104\x071\x02\x02\u0102\u0104\x05\x16\f\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\x15\x03\x02\x02" +
		"\x02\u0105\u0106\t\x03\x02\x02\u0106\x17\x03\x02\x02\x02&\x19\x1D!,3=" +
		"CJRYlqsy\x7F\x86\x8B\x90\x9C\xA2\xA9\xB0\xB6\xB9\xBE\xC7\xCE\xD5\xDB\xDE" +
		"\xE3\xEC\xF3\xF6\xFC\u0103";
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
export class T_GroupedContext extends SexprContext {
	public LPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.LPAREN, 0); }
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TypeSchemeParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
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
	public _opt!: Token;
	public _value!: SexprContext;
	public COLON(): TerminalNode { return this.getToken(TypeSchemeParser.COLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypeSchemeParser.WS);
		} else {
			return this.getToken(TypeSchemeParser.WS, i);
		}
	}
	public sexpr(): SexprContext | undefined {
		return this.tryGetRuleContext(0, SexprContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(TypeSchemeParser.QUESTION, 0); }
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


