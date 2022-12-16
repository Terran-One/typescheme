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
	public static readonly EQUALS = 9;
	public static readonly NEQ = 10;
	public static readonly COLON = 11;
	public static readonly COMMA = 12;
	public static readonly SPREAD = 13;
	public static readonly DOT = 14;
	public static readonly WS = 15;
	public static readonly KEYOF = 16;
	public static readonly INFER = 17;
	public static readonly IN = 18;
	public static readonly AS = 19;
	public static readonly EXTENDS = 20;
	public static readonly EXTENDS_Q = 21;
	public static readonly IN_Q = 22;
	public static readonly IF = 23;
	public static readonly NEVER = 24;
	public static readonly NULL = 25;
	public static readonly UNDEFINED = 26;
	public static readonly UNKNOWN = 27;
	public static readonly OBJECT = 28;
	public static readonly ANY = 29;
	public static readonly STRING = 30;
	public static readonly NUMBER = 31;
	public static readonly BOOLEAN = 32;
	public static readonly BooleanLiteral = 33;
	public static readonly StringLiteral = 34;
	public static readonly SingleQuotedStringLiteral = 35;
	public static readonly DoubleQuotedStringLiteral = 36;
	public static readonly BacktickStringLiteral = 37;
	public static readonly EscapeSequence = 38;
	public static readonly UnicodeEscapeSequence = 39;
	public static readonly NumberLiteral = 40;
	public static readonly HexLiteral = 41;
	public static readonly OctalLiteral = 42;
	public static readonly BinaryLiteral = 43;
	public static readonly DecimalLiteral = 44;
	public static readonly Identifier = 45;
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
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "'<'", "'>'", "'='", 
		"'!='", "':'", "','", "'...'", "'.'", undefined, "'keyof'", "'infer'", 
		"'in'", "'as'", "'extends'", "'extends?'", "'in?'", "'if'", "'never'", 
		"'null'", "'undefined'", "'unknown'", "'object'", "'any'", "'string'", 
		"'number'", "'boolean'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"LANGL", "RANGL", "EQUALS", "NEQ", "COLON", "COMMA", "SPREAD", "DOT", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING) | (1 << TypeSchemeParser.NUMBER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 22;
				this.sexpr(0);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
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
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.LBRACE:
			case TypeSchemeParser.LBRACK:
			case TypeSchemeParser.KEYOF:
			case TypeSchemeParser.INFER:
			case TypeSchemeParser.IN:
			case TypeSchemeParser.AS:
			case TypeSchemeParser.EXTENDS:
			case TypeSchemeParser.EXTENDS_Q:
			case TypeSchemeParser.IN_Q:
			case TypeSchemeParser.IF:
			case TypeSchemeParser.NEVER:
			case TypeSchemeParser.NULL:
			case TypeSchemeParser.UNDEFINED:
			case TypeSchemeParser.UNKNOWN:
			case TypeSchemeParser.OBJECT:
			case TypeSchemeParser.ANY:
			case TypeSchemeParser.STRING:
			case TypeSchemeParser.NUMBER:
			case TypeSchemeParser.BOOLEAN:
			case TypeSchemeParser.BooleanLiteral:
			case TypeSchemeParser.StringLiteral:
			case TypeSchemeParser.NumberLiteral:
			case TypeSchemeParser.Identifier:
				{
				_localctx = new T_AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 31;
				this.atom();
				}
				break;
			case TypeSchemeParser.LPAREN:
				{
				_localctx = new T_ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 32;
				this.list();
				}
				break;
			case TypeSchemeParser.SPREAD:
				{
				_localctx = new T_SpreadContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(TypeSchemeParser.SPREAD);
				this.state = 34;
				this.sexpr(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 59;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 57;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new T_IndexedContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 37;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 38;
						this.match(TypeSchemeParser.LBRACK);
						{
						this.state = 39;
						(_localctx as T_IndexedContext)._arg = this.sexpr(0);
						}
						this.state = 40;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 2:
						{
						_localctx = new T_ArrayContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 42;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 43;
						this.match(TypeSchemeParser.LBRACK);
						this.state = 44;
						this.match(TypeSchemeParser.RBRACK);
						}
						break;

					case 3:
						{
						_localctx = new T_CallContext(new SexprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TypeSchemeParser.RULE_sexpr);
						this.state = 45;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 46;
						this.match(TypeSchemeParser.LANGL);
						{
						this.state = 47;
						(_localctx as T_CallContext)._sexpr = this.sexpr(0);
						(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
						this.state = 52;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TypeSchemeParser.COMMA) {
							{
							{
							this.state = 48;
							this.match(TypeSchemeParser.COMMA);
							this.state = 49;
							(_localctx as T_CallContext)._sexpr = this.sexpr(0);
							(_localctx as T_CallContext)._args.push((_localctx as T_CallContext)._sexpr);
							}
							}
							this.state = 54;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						this.state = 55;
						this.match(TypeSchemeParser.RANGL);
						}
						break;
					}
					}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
			this.state = 65;
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
				this.state = 62;
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
				this.state = 63;
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
				this.state = 64;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(TypeSchemeParser.LPAREN);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 68;
				this.sexpr(0);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING) | (1 << TypeSchemeParser.NUMBER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0));
			this.state = 73;
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
			this.state = 75;
			_la = this._input.LA(1);
			if (!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (TypeSchemeParser.NEVER - 24)) | (1 << (TypeSchemeParser.NULL - 24)) | (1 << (TypeSchemeParser.UNDEFINED - 24)) | (1 << (TypeSchemeParser.UNKNOWN - 24)) | (1 << (TypeSchemeParser.OBJECT - 24)) | (1 << (TypeSchemeParser.ANY - 24)) | (1 << (TypeSchemeParser.STRING - 24)) | (1 << (TypeSchemeParser.NUMBER - 24)) | (1 << (TypeSchemeParser.BOOLEAN - 24)))) !== 0))) {
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
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.match(TypeSchemeParser.BooleanLiteral);
				}
				break;
			case TypeSchemeParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.match(TypeSchemeParser.StringLiteral);
				}
				break;
			case TypeSchemeParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				this.match(TypeSchemeParser.NumberLiteral);
				}
				break;
			case TypeSchemeParser.LBRACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.tupleLiteral();
				}
				break;
			case TypeSchemeParser.LBRACE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 81;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(TypeSchemeParser.LBRACK);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeSchemeParser.LPAREN) | (1 << TypeSchemeParser.LBRACE) | (1 << TypeSchemeParser.LBRACK) | (1 << TypeSchemeParser.SPREAD) | (1 << TypeSchemeParser.KEYOF) | (1 << TypeSchemeParser.INFER) | (1 << TypeSchemeParser.IN) | (1 << TypeSchemeParser.AS) | (1 << TypeSchemeParser.EXTENDS) | (1 << TypeSchemeParser.EXTENDS_Q) | (1 << TypeSchemeParser.IN_Q) | (1 << TypeSchemeParser.IF) | (1 << TypeSchemeParser.NEVER) | (1 << TypeSchemeParser.NULL) | (1 << TypeSchemeParser.UNDEFINED) | (1 << TypeSchemeParser.UNKNOWN) | (1 << TypeSchemeParser.OBJECT) | (1 << TypeSchemeParser.ANY) | (1 << TypeSchemeParser.STRING) | (1 << TypeSchemeParser.NUMBER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TypeSchemeParser.BOOLEAN - 32)) | (1 << (TypeSchemeParser.BooleanLiteral - 32)) | (1 << (TypeSchemeParser.StringLiteral - 32)) | (1 << (TypeSchemeParser.NumberLiteral - 32)) | (1 << (TypeSchemeParser.Identifier - 32)))) !== 0)) {
				{
				{
				this.state = 85;
				_localctx._sexpr = this.sexpr(0);
				_localctx._items.push(_localctx._sexpr);
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 86;
					this.match(TypeSchemeParser.COMMA);
					this.state = 87;
					_localctx._sexpr = this.sexpr(0);
					_localctx._items.push(_localctx._sexpr);
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 95;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(TypeSchemeParser.LBRACE);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (TypeSchemeParser.KEYOF - 16)) | (1 << (TypeSchemeParser.INFER - 16)) | (1 << (TypeSchemeParser.IN - 16)) | (1 << (TypeSchemeParser.AS - 16)) | (1 << (TypeSchemeParser.EXTENDS - 16)) | (1 << (TypeSchemeParser.EXTENDS_Q - 16)) | (1 << (TypeSchemeParser.IN_Q - 16)) | (1 << (TypeSchemeParser.IF - 16)) | (1 << (TypeSchemeParser.Identifier - 16)))) !== 0)) {
				{
				{
				this.state = 98;
				_localctx._objectProp = this.objectProp();
				_localctx._props.push(_localctx._objectProp);
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TypeSchemeParser.COMMA) {
					{
					{
					this.state = 99;
					this.match(TypeSchemeParser.COMMA);
					this.state = 100;
					_localctx._objectProp = this.objectProp();
					_localctx._props.push(_localctx._objectProp);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 108;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 110;
			_localctx._key = this.identifier();
			}
			this.state = 111;
			this.match(TypeSchemeParser.COLON);
			{
			this.state = 112;
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
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TypeSchemeParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
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
				this.state = 115;
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
			this.state = 118;
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
		case 1:
			return this.sexpr_sempred(_localctx as SexprContext, predIndex);
		}
		return true;
	}
	private sexpr_sempred(_localctx: SexprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/{\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02\x1A" +
		"\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03&\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"5\n\x03\f\x03\x0E\x038\v\x03\x03\x03\x03\x03\x07\x03<\n\x03\f\x03\x0E" +
		"\x03?\v\x03\x03\x04\x03\x04\x03\x04\x05\x04D\n\x04\x03\x05\x03\x05\x06" +
		"\x05H\n\x05\r\x05\x0E\x05I\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07U\n\x07\x03\b\x03\b\x03\b\x03\b\x07" +
		"\b[\n\b\f\b\x0E\b^\v\b\x05\b`\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x07\th\n\t\f\t\x0E\tk\v\t\x05\tm\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x05\vw\n\v\x03\f\x03\f\x03\f\x02\x02\x03\x04\r\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x02\x04\x03\x02\x1A\"\x03\x02\x12\x19\x02\x82\x02\x1B\x03\x02\x02" +
		"\x02\x04%\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bE\x03\x02\x02\x02\nM\x03" +
		"\x02\x02\x02\fT\x03\x02\x02\x02\x0EV\x03\x02\x02\x02\x10c\x03\x02\x02" +
		"\x02\x12p\x03\x02\x02\x02\x14v\x03\x02\x02\x02\x16x\x03\x02\x02\x02\x18" +
		"\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B" +
		"\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D" +
		"\x1B\x03\x02\x02\x02\x1E\x1F\x07\x02\x02\x03\x1F\x03\x03\x02\x02\x02 " +
		"!\b\x03\x01\x02!&\x05\x06\x04\x02\"&\x05\b\x05\x02#$\x07\x0F\x02\x02$" +
		"&\x05\x04\x03\x03% \x03\x02\x02\x02%\"\x03\x02\x02\x02%#\x03\x02\x02\x02" +
		"&=\x03\x02\x02\x02\'(\f\x06\x02\x02()\x07\x07\x02\x02)*\x05\x04\x03\x02" +
		"*+\x07\b\x02\x02+<\x03\x02\x02\x02,-\f\x05\x02\x02-.\x07\x07\x02\x02." +
		"<\x07\b\x02\x02/0\f\x04\x02\x0201\x07\t\x02\x0216\x05\x04\x03\x0223\x07" +
		"\x0E\x02\x0235\x05\x04\x03\x0242\x03\x02\x02\x0258\x03\x02\x02\x0264\x03" +
		"\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x07" +
		"\n\x02\x02:<\x03\x02\x02\x02;\'\x03\x02\x02\x02;,\x03\x02\x02\x02;/\x03" +
		"\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>\x05" +
		"\x03\x02\x02\x02?=\x03\x02\x02\x02@D\x05\n\x06\x02AD\x05\f\x07\x02BD\x05" +
		"\x14\v\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02D\x07" +
		"\x03\x02\x02\x02EG\x07\x03\x02\x02FH\x05\x04\x03\x02GF\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x07\x04\x02\x02L\t\x03\x02\x02\x02MN\t\x02\x02\x02N\v\x03\x02\x02\x02" +
		"OU\x07#\x02\x02PU\x07$\x02\x02QU\x07*\x02\x02RU\x05\x0E\b\x02SU\x05\x10" +
		"\t\x02TO\x03\x02\x02\x02TP\x03\x02\x02\x02TQ\x03\x02\x02\x02TR\x03\x02" +
		"\x02\x02TS\x03\x02\x02\x02U\r\x03\x02\x02\x02V_\x07\x07\x02\x02W\\\x05" +
		"\x04\x03\x02XY\x07\x0E\x02\x02Y[\x05\x04\x03\x02ZX\x03\x02\x02\x02[^\x03" +
		"\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02^" +
		"\\\x03\x02\x02\x02_W\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"ab\x07\b\x02\x02b\x0F\x03\x02\x02\x02cl\x07\x05\x02\x02di\x05\x12\n\x02" +
		"ef\x07\x0E\x02\x02fh\x05\x12\n\x02ge\x03\x02\x02\x02hk\x03\x02\x02\x02" +
		"ig\x03\x02\x02\x02ij\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02" +
		"ld\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02no\x07\x06\x02\x02" +
		"o\x11\x03\x02\x02\x02pq\x05\x14\v\x02qr\x07\r\x02\x02rs\x05\x04\x03\x02" +
		"s\x13\x03\x02\x02\x02tw\x07/\x02\x02uw\x05\x16\f\x02vt\x03\x02\x02\x02" +
		"vu\x03\x02\x02\x02w\x15\x03\x02\x02\x02xy\t\x03\x02\x02y\x17\x03\x02\x02" +
		"\x02\x0F\x1B%6;=CIT\\_ilv";
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


