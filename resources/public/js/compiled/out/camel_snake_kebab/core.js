// Compiled by ClojureScript 1.10.773 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37593 = arguments.length;
var i__4737__auto___37594 = (0);
while(true){
if((i__4737__auto___37594 < len__4736__auto___37593)){
args__4742__auto__.push((arguments[i__4737__auto___37594]));

var G__37595 = (i__4737__auto___37594 + (1));
i__4737__auto___37594 = G__37595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq37588){
var G__37589 = cljs.core.first.call(null,seq37588);
var seq37588__$1 = cljs.core.next.call(null,seq37588);
var G__37590 = cljs.core.first.call(null,seq37588__$1);
var seq37588__$2 = cljs.core.next.call(null,seq37588__$1);
var G__37591 = cljs.core.first.call(null,seq37588__$2);
var seq37588__$3 = cljs.core.next.call(null,seq37588__$2);
var G__37592 = cljs.core.first.call(null,seq37588__$3);
var seq37588__$4 = cljs.core.next.call(null,seq37588__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37589,G__37590,G__37591,G__37592,seq37588__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37604 = arguments.length;
var i__4737__auto___37605 = (0);
while(true){
if((i__4737__auto___37605 < len__4736__auto___37604)){
args__4742__auto__.push((arguments[i__4737__auto___37605]));

var G__37606 = (i__4737__auto___37605 + (1));
i__4737__auto___37605 = G__37606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq37596){
var G__37597 = cljs.core.first.call(null,seq37596);
var seq37596__$1 = cljs.core.next.call(null,seq37596);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37597,seq37596__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37607 = arguments.length;
var i__4737__auto___37608 = (0);
while(true){
if((i__4737__auto___37608 < len__4736__auto___37607)){
args__4742__auto__.push((arguments[i__4737__auto___37608]));

var G__37609 = (i__4737__auto___37608 + (1));
i__4737__auto___37608 = G__37609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq37598){
var G__37599 = cljs.core.first.call(null,seq37598);
var seq37598__$1 = cljs.core.next.call(null,seq37598);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37599,seq37598__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37610 = arguments.length;
var i__4737__auto___37611 = (0);
while(true){
if((i__4737__auto___37611 < len__4736__auto___37610)){
args__4742__auto__.push((arguments[i__4737__auto___37611]));

var G__37612 = (i__4737__auto___37611 + (1));
i__4737__auto___37611 = G__37612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq37600){
var G__37601 = cljs.core.first.call(null,seq37600);
var seq37600__$1 = cljs.core.next.call(null,seq37600);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37601,seq37600__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37613 = arguments.length;
var i__4737__auto___37614 = (0);
while(true){
if((i__4737__auto___37614 < len__4736__auto___37613)){
args__4742__auto__.push((arguments[i__4737__auto___37614]));

var G__37615 = (i__4737__auto___37614 + (1));
i__4737__auto___37614 = G__37615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq37602){
var G__37603 = cljs.core.first.call(null,seq37602);
var seq37602__$1 = cljs.core.next.call(null,seq37602);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37603,seq37602__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37624 = arguments.length;
var i__4737__auto___37625 = (0);
while(true){
if((i__4737__auto___37625 < len__4736__auto___37624)){
args__4742__auto__.push((arguments[i__4737__auto___37625]));

var G__37626 = (i__4737__auto___37625 + (1));
i__4737__auto___37625 = G__37626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq37616){
var G__37617 = cljs.core.first.call(null,seq37616);
var seq37616__$1 = cljs.core.next.call(null,seq37616);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37617,seq37616__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37627 = arguments.length;
var i__4737__auto___37628 = (0);
while(true){
if((i__4737__auto___37628 < len__4736__auto___37627)){
args__4742__auto__.push((arguments[i__4737__auto___37628]));

var G__37629 = (i__4737__auto___37628 + (1));
i__4737__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq37618){
var G__37619 = cljs.core.first.call(null,seq37618);
var seq37618__$1 = cljs.core.next.call(null,seq37618);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37619,seq37618__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37630 = arguments.length;
var i__4737__auto___37631 = (0);
while(true){
if((i__4737__auto___37631 < len__4736__auto___37630)){
args__4742__auto__.push((arguments[i__4737__auto___37631]));

var G__37632 = (i__4737__auto___37631 + (1));
i__4737__auto___37631 = G__37632;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq37620){
var G__37621 = cljs.core.first.call(null,seq37620);
var seq37620__$1 = cljs.core.next.call(null,seq37620);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37621,seq37620__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37633 = arguments.length;
var i__4737__auto___37634 = (0);
while(true){
if((i__4737__auto___37634 < len__4736__auto___37633)){
args__4742__auto__.push((arguments[i__4737__auto___37634]));

var G__37635 = (i__4737__auto___37634 + (1));
i__4737__auto___37634 = G__37635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq37622){
var G__37623 = cljs.core.first.call(null,seq37622);
var seq37622__$1 = cljs.core.next.call(null,seq37622);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37623,seq37622__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37644 = arguments.length;
var i__4737__auto___37645 = (0);
while(true){
if((i__4737__auto___37645 < len__4736__auto___37644)){
args__4742__auto__.push((arguments[i__4737__auto___37645]));

var G__37646 = (i__4737__auto___37645 + (1));
i__4737__auto___37645 = G__37646;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq37636){
var G__37637 = cljs.core.first.call(null,seq37636);
var seq37636__$1 = cljs.core.next.call(null,seq37636);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37637,seq37636__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37647 = arguments.length;
var i__4737__auto___37648 = (0);
while(true){
if((i__4737__auto___37648 < len__4736__auto___37647)){
args__4742__auto__.push((arguments[i__4737__auto___37648]));

var G__37649 = (i__4737__auto___37648 + (1));
i__4737__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq37638){
var G__37639 = cljs.core.first.call(null,seq37638);
var seq37638__$1 = cljs.core.next.call(null,seq37638);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37639,seq37638__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37650 = arguments.length;
var i__4737__auto___37651 = (0);
while(true){
if((i__4737__auto___37651 < len__4736__auto___37650)){
args__4742__auto__.push((arguments[i__4737__auto___37651]));

var G__37652 = (i__4737__auto___37651 + (1));
i__4737__auto___37651 = G__37652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq37640){
var G__37641 = cljs.core.first.call(null,seq37640);
var seq37640__$1 = cljs.core.next.call(null,seq37640);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37641,seq37640__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37653 = arguments.length;
var i__4737__auto___37654 = (0);
while(true){
if((i__4737__auto___37654 < len__4736__auto___37653)){
args__4742__auto__.push((arguments[i__4737__auto___37654]));

var G__37655 = (i__4737__auto___37654 + (1));
i__4737__auto___37654 = G__37655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq37642){
var G__37643 = cljs.core.first.call(null,seq37642);
var seq37642__$1 = cljs.core.next.call(null,seq37642);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37643,seq37642__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37664 = arguments.length;
var i__4737__auto___37665 = (0);
while(true){
if((i__4737__auto___37665 < len__4736__auto___37664)){
args__4742__auto__.push((arguments[i__4737__auto___37665]));

var G__37666 = (i__4737__auto___37665 + (1));
i__4737__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq37656){
var G__37657 = cljs.core.first.call(null,seq37656);
var seq37656__$1 = cljs.core.next.call(null,seq37656);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37657,seq37656__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37667 = arguments.length;
var i__4737__auto___37668 = (0);
while(true){
if((i__4737__auto___37668 < len__4736__auto___37667)){
args__4742__auto__.push((arguments[i__4737__auto___37668]));

var G__37669 = (i__4737__auto___37668 + (1));
i__4737__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq37658){
var G__37659 = cljs.core.first.call(null,seq37658);
var seq37658__$1 = cljs.core.next.call(null,seq37658);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37659,seq37658__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37670 = arguments.length;
var i__4737__auto___37671 = (0);
while(true){
if((i__4737__auto___37671 < len__4736__auto___37670)){
args__4742__auto__.push((arguments[i__4737__auto___37671]));

var G__37672 = (i__4737__auto___37671 + (1));
i__4737__auto___37671 = G__37672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq37660){
var G__37661 = cljs.core.first.call(null,seq37660);
var seq37660__$1 = cljs.core.next.call(null,seq37660);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37661,seq37660__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37673 = arguments.length;
var i__4737__auto___37674 = (0);
while(true){
if((i__4737__auto___37674 < len__4736__auto___37673)){
args__4742__auto__.push((arguments[i__4737__auto___37674]));

var G__37675 = (i__4737__auto___37674 + (1));
i__4737__auto___37674 = G__37675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq37662){
var G__37663 = cljs.core.first.call(null,seq37662);
var seq37662__$1 = cljs.core.next.call(null,seq37662);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37663,seq37662__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37684 = arguments.length;
var i__4737__auto___37685 = (0);
while(true){
if((i__4737__auto___37685 < len__4736__auto___37684)){
args__4742__auto__.push((arguments[i__4737__auto___37685]));

var G__37686 = (i__4737__auto___37685 + (1));
i__4737__auto___37685 = G__37686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq37676){
var G__37677 = cljs.core.first.call(null,seq37676);
var seq37676__$1 = cljs.core.next.call(null,seq37676);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37677,seq37676__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37687 = arguments.length;
var i__4737__auto___37688 = (0);
while(true){
if((i__4737__auto___37688 < len__4736__auto___37687)){
args__4742__auto__.push((arguments[i__4737__auto___37688]));

var G__37689 = (i__4737__auto___37688 + (1));
i__4737__auto___37688 = G__37689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq37678){
var G__37679 = cljs.core.first.call(null,seq37678);
var seq37678__$1 = cljs.core.next.call(null,seq37678);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37679,seq37678__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37690 = arguments.length;
var i__4737__auto___37691 = (0);
while(true){
if((i__4737__auto___37691 < len__4736__auto___37690)){
args__4742__auto__.push((arguments[i__4737__auto___37691]));

var G__37692 = (i__4737__auto___37691 + (1));
i__4737__auto___37691 = G__37692;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq37680){
var G__37681 = cljs.core.first.call(null,seq37680);
var seq37680__$1 = cljs.core.next.call(null,seq37680);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37681,seq37680__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37693 = arguments.length;
var i__4737__auto___37694 = (0);
while(true){
if((i__4737__auto___37694 < len__4736__auto___37693)){
args__4742__auto__.push((arguments[i__4737__auto___37694]));

var G__37695 = (i__4737__auto___37694 + (1));
i__4737__auto___37694 = G__37695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq37682){
var G__37683 = cljs.core.first.call(null,seq37682);
var seq37682__$1 = cljs.core.next.call(null,seq37682);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37683,seq37682__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37704 = arguments.length;
var i__4737__auto___37705 = (0);
while(true){
if((i__4737__auto___37705 < len__4736__auto___37704)){
args__4742__auto__.push((arguments[i__4737__auto___37705]));

var G__37706 = (i__4737__auto___37705 + (1));
i__4737__auto___37705 = G__37706;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq37696){
var G__37697 = cljs.core.first.call(null,seq37696);
var seq37696__$1 = cljs.core.next.call(null,seq37696);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37697,seq37696__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37707 = arguments.length;
var i__4737__auto___37708 = (0);
while(true){
if((i__4737__auto___37708 < len__4736__auto___37707)){
args__4742__auto__.push((arguments[i__4737__auto___37708]));

var G__37709 = (i__4737__auto___37708 + (1));
i__4737__auto___37708 = G__37709;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq37698){
var G__37699 = cljs.core.first.call(null,seq37698);
var seq37698__$1 = cljs.core.next.call(null,seq37698);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37699,seq37698__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37710 = arguments.length;
var i__4737__auto___37711 = (0);
while(true){
if((i__4737__auto___37711 < len__4736__auto___37710)){
args__4742__auto__.push((arguments[i__4737__auto___37711]));

var G__37712 = (i__4737__auto___37711 + (1));
i__4737__auto___37711 = G__37712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq37700){
var G__37701 = cljs.core.first.call(null,seq37700);
var seq37700__$1 = cljs.core.next.call(null,seq37700);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37701,seq37700__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37713 = arguments.length;
var i__4737__auto___37714 = (0);
while(true){
if((i__4737__auto___37714 < len__4736__auto___37713)){
args__4742__auto__.push((arguments[i__4737__auto___37714]));

var G__37715 = (i__4737__auto___37714 + (1));
i__4737__auto___37714 = G__37715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq37702){
var G__37703 = cljs.core.first.call(null,seq37702);
var seq37702__$1 = cljs.core.next.call(null,seq37702);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37703,seq37702__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37724 = arguments.length;
var i__4737__auto___37725 = (0);
while(true){
if((i__4737__auto___37725 < len__4736__auto___37724)){
args__4742__auto__.push((arguments[i__4737__auto___37725]));

var G__37726 = (i__4737__auto___37725 + (1));
i__4737__auto___37725 = G__37726;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37551__auto__,rest__37552__auto__){
var convert_case__37553__auto__ = (function (p1__37550__37554__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__37550__37554__auto__,rest__37552__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37551__auto__,convert_case__37553__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq37716){
var G__37717 = cljs.core.first.call(null,seq37716);
var seq37716__$1 = cljs.core.next.call(null,seq37716);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37717,seq37716__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37727 = arguments.length;
var i__4737__auto___37728 = (0);
while(true){
if((i__4737__auto___37728 < len__4736__auto___37727)){
args__4742__auto__.push((arguments[i__4737__auto___37728]));

var G__37729 = (i__4737__auto___37728 + (1));
i__4737__auto___37728 = G__37729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37718){
var G__37719 = cljs.core.first.call(null,seq37718);
var seq37718__$1 = cljs.core.next.call(null,seq37718);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37719,seq37718__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37730 = arguments.length;
var i__4737__auto___37731 = (0);
while(true){
if((i__4737__auto___37731 < len__4736__auto___37730)){
args__4742__auto__.push((arguments[i__4737__auto___37731]));

var G__37732 = (i__4737__auto___37731 + (1));
i__4737__auto___37731 = G__37732;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37720){
var G__37721 = cljs.core.first.call(null,seq37720);
var seq37720__$1 = cljs.core.next.call(null,seq37720);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37721,seq37720__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37733 = arguments.length;
var i__4737__auto___37734 = (0);
while(true){
if((i__4737__auto___37734 < len__4736__auto___37733)){
args__4742__auto__.push((arguments[i__4737__auto___37734]));

var G__37735 = (i__4737__auto___37734 + (1));
i__4737__auto___37734 = G__37735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37556__auto__,rest__37557__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37556__auto__),rest__37557__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37722){
var G__37723 = cljs.core.first.call(null,seq37722);
var seq37722__$1 = cljs.core.next.call(null,seq37722);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37723,seq37722__$1);
}));


//# sourceMappingURL=core.js.map?rel=1637933614445
