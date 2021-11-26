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
var len__4736__auto___35098 = arguments.length;
var i__4737__auto___35099 = (0);
while(true){
if((i__4737__auto___35099 < len__4736__auto___35098)){
args__4742__auto__.push((arguments[i__4737__auto___35099]));

var G__35100 = (i__4737__auto___35099 + (1));
i__4737__auto___35099 = G__35100;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq35093){
var G__35094 = cljs.core.first.call(null,seq35093);
var seq35093__$1 = cljs.core.next.call(null,seq35093);
var G__35095 = cljs.core.first.call(null,seq35093__$1);
var seq35093__$2 = cljs.core.next.call(null,seq35093__$1);
var G__35096 = cljs.core.first.call(null,seq35093__$2);
var seq35093__$3 = cljs.core.next.call(null,seq35093__$2);
var G__35097 = cljs.core.first.call(null,seq35093__$3);
var seq35093__$4 = cljs.core.next.call(null,seq35093__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35094,G__35095,G__35096,G__35097,seq35093__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35109 = arguments.length;
var i__4737__auto___35110 = (0);
while(true){
if((i__4737__auto___35110 < len__4736__auto___35109)){
args__4742__auto__.push((arguments[i__4737__auto___35110]));

var G__35111 = (i__4737__auto___35110 + (1));
i__4737__auto___35110 = G__35111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq35101){
var G__35102 = cljs.core.first.call(null,seq35101);
var seq35101__$1 = cljs.core.next.call(null,seq35101);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35102,seq35101__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35112 = arguments.length;
var i__4737__auto___35113 = (0);
while(true){
if((i__4737__auto___35113 < len__4736__auto___35112)){
args__4742__auto__.push((arguments[i__4737__auto___35113]));

var G__35114 = (i__4737__auto___35113 + (1));
i__4737__auto___35113 = G__35114;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq35103){
var G__35104 = cljs.core.first.call(null,seq35103);
var seq35103__$1 = cljs.core.next.call(null,seq35103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35104,seq35103__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35115 = arguments.length;
var i__4737__auto___35116 = (0);
while(true){
if((i__4737__auto___35116 < len__4736__auto___35115)){
args__4742__auto__.push((arguments[i__4737__auto___35116]));

var G__35117 = (i__4737__auto___35116 + (1));
i__4737__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq35105){
var G__35106 = cljs.core.first.call(null,seq35105);
var seq35105__$1 = cljs.core.next.call(null,seq35105);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35106,seq35105__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35118 = arguments.length;
var i__4737__auto___35119 = (0);
while(true){
if((i__4737__auto___35119 < len__4736__auto___35118)){
args__4742__auto__.push((arguments[i__4737__auto___35119]));

var G__35120 = (i__4737__auto___35119 + (1));
i__4737__auto___35119 = G__35120;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq35107){
var G__35108 = cljs.core.first.call(null,seq35107);
var seq35107__$1 = cljs.core.next.call(null,seq35107);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35108,seq35107__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35129 = arguments.length;
var i__4737__auto___35130 = (0);
while(true){
if((i__4737__auto___35130 < len__4736__auto___35129)){
args__4742__auto__.push((arguments[i__4737__auto___35130]));

var G__35131 = (i__4737__auto___35130 + (1));
i__4737__auto___35130 = G__35131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq35121){
var G__35122 = cljs.core.first.call(null,seq35121);
var seq35121__$1 = cljs.core.next.call(null,seq35121);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35122,seq35121__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35132 = arguments.length;
var i__4737__auto___35133 = (0);
while(true){
if((i__4737__auto___35133 < len__4736__auto___35132)){
args__4742__auto__.push((arguments[i__4737__auto___35133]));

var G__35134 = (i__4737__auto___35133 + (1));
i__4737__auto___35133 = G__35134;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq35123){
var G__35124 = cljs.core.first.call(null,seq35123);
var seq35123__$1 = cljs.core.next.call(null,seq35123);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35124,seq35123__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35135 = arguments.length;
var i__4737__auto___35136 = (0);
while(true){
if((i__4737__auto___35136 < len__4736__auto___35135)){
args__4742__auto__.push((arguments[i__4737__auto___35136]));

var G__35137 = (i__4737__auto___35136 + (1));
i__4737__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq35125){
var G__35126 = cljs.core.first.call(null,seq35125);
var seq35125__$1 = cljs.core.next.call(null,seq35125);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35126,seq35125__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35138 = arguments.length;
var i__4737__auto___35139 = (0);
while(true){
if((i__4737__auto___35139 < len__4736__auto___35138)){
args__4742__auto__.push((arguments[i__4737__auto___35139]));

var G__35140 = (i__4737__auto___35139 + (1));
i__4737__auto___35139 = G__35140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq35127){
var G__35128 = cljs.core.first.call(null,seq35127);
var seq35127__$1 = cljs.core.next.call(null,seq35127);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35128,seq35127__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35149 = arguments.length;
var i__4737__auto___35150 = (0);
while(true){
if((i__4737__auto___35150 < len__4736__auto___35149)){
args__4742__auto__.push((arguments[i__4737__auto___35150]));

var G__35151 = (i__4737__auto___35150 + (1));
i__4737__auto___35150 = G__35151;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq35141){
var G__35142 = cljs.core.first.call(null,seq35141);
var seq35141__$1 = cljs.core.next.call(null,seq35141);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35142,seq35141__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35152 = arguments.length;
var i__4737__auto___35153 = (0);
while(true){
if((i__4737__auto___35153 < len__4736__auto___35152)){
args__4742__auto__.push((arguments[i__4737__auto___35153]));

var G__35154 = (i__4737__auto___35153 + (1));
i__4737__auto___35153 = G__35154;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq35143){
var G__35144 = cljs.core.first.call(null,seq35143);
var seq35143__$1 = cljs.core.next.call(null,seq35143);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35144,seq35143__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35155 = arguments.length;
var i__4737__auto___35156 = (0);
while(true){
if((i__4737__auto___35156 < len__4736__auto___35155)){
args__4742__auto__.push((arguments[i__4737__auto___35156]));

var G__35157 = (i__4737__auto___35156 + (1));
i__4737__auto___35156 = G__35157;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq35145){
var G__35146 = cljs.core.first.call(null,seq35145);
var seq35145__$1 = cljs.core.next.call(null,seq35145);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35146,seq35145__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35158 = arguments.length;
var i__4737__auto___35159 = (0);
while(true){
if((i__4737__auto___35159 < len__4736__auto___35158)){
args__4742__auto__.push((arguments[i__4737__auto___35159]));

var G__35160 = (i__4737__auto___35159 + (1));
i__4737__auto___35159 = G__35160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq35147){
var G__35148 = cljs.core.first.call(null,seq35147);
var seq35147__$1 = cljs.core.next.call(null,seq35147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35148,seq35147__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35169 = arguments.length;
var i__4737__auto___35170 = (0);
while(true){
if((i__4737__auto___35170 < len__4736__auto___35169)){
args__4742__auto__.push((arguments[i__4737__auto___35170]));

var G__35171 = (i__4737__auto___35170 + (1));
i__4737__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq35161){
var G__35162 = cljs.core.first.call(null,seq35161);
var seq35161__$1 = cljs.core.next.call(null,seq35161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35162,seq35161__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35172 = arguments.length;
var i__4737__auto___35173 = (0);
while(true){
if((i__4737__auto___35173 < len__4736__auto___35172)){
args__4742__auto__.push((arguments[i__4737__auto___35173]));

var G__35174 = (i__4737__auto___35173 + (1));
i__4737__auto___35173 = G__35174;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq35163){
var G__35164 = cljs.core.first.call(null,seq35163);
var seq35163__$1 = cljs.core.next.call(null,seq35163);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35164,seq35163__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35175 = arguments.length;
var i__4737__auto___35176 = (0);
while(true){
if((i__4737__auto___35176 < len__4736__auto___35175)){
args__4742__auto__.push((arguments[i__4737__auto___35176]));

var G__35177 = (i__4737__auto___35176 + (1));
i__4737__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq35165){
var G__35166 = cljs.core.first.call(null,seq35165);
var seq35165__$1 = cljs.core.next.call(null,seq35165);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35166,seq35165__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35178 = arguments.length;
var i__4737__auto___35179 = (0);
while(true){
if((i__4737__auto___35179 < len__4736__auto___35178)){
args__4742__auto__.push((arguments[i__4737__auto___35179]));

var G__35180 = (i__4737__auto___35179 + (1));
i__4737__auto___35179 = G__35180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq35167){
var G__35168 = cljs.core.first.call(null,seq35167);
var seq35167__$1 = cljs.core.next.call(null,seq35167);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35168,seq35167__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35189 = arguments.length;
var i__4737__auto___35190 = (0);
while(true){
if((i__4737__auto___35190 < len__4736__auto___35189)){
args__4742__auto__.push((arguments[i__4737__auto___35190]));

var G__35191 = (i__4737__auto___35190 + (1));
i__4737__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq35181){
var G__35182 = cljs.core.first.call(null,seq35181);
var seq35181__$1 = cljs.core.next.call(null,seq35181);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35182,seq35181__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35192 = arguments.length;
var i__4737__auto___35193 = (0);
while(true){
if((i__4737__auto___35193 < len__4736__auto___35192)){
args__4742__auto__.push((arguments[i__4737__auto___35193]));

var G__35194 = (i__4737__auto___35193 + (1));
i__4737__auto___35193 = G__35194;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq35183){
var G__35184 = cljs.core.first.call(null,seq35183);
var seq35183__$1 = cljs.core.next.call(null,seq35183);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35184,seq35183__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35195 = arguments.length;
var i__4737__auto___35196 = (0);
while(true){
if((i__4737__auto___35196 < len__4736__auto___35195)){
args__4742__auto__.push((arguments[i__4737__auto___35196]));

var G__35197 = (i__4737__auto___35196 + (1));
i__4737__auto___35196 = G__35197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq35185){
var G__35186 = cljs.core.first.call(null,seq35185);
var seq35185__$1 = cljs.core.next.call(null,seq35185);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35186,seq35185__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35198 = arguments.length;
var i__4737__auto___35199 = (0);
while(true){
if((i__4737__auto___35199 < len__4736__auto___35198)){
args__4742__auto__.push((arguments[i__4737__auto___35199]));

var G__35200 = (i__4737__auto___35199 + (1));
i__4737__auto___35199 = G__35200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq35187){
var G__35188 = cljs.core.first.call(null,seq35187);
var seq35187__$1 = cljs.core.next.call(null,seq35187);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35188,seq35187__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35209 = arguments.length;
var i__4737__auto___35210 = (0);
while(true){
if((i__4737__auto___35210 < len__4736__auto___35209)){
args__4742__auto__.push((arguments[i__4737__auto___35210]));

var G__35211 = (i__4737__auto___35210 + (1));
i__4737__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq35201){
var G__35202 = cljs.core.first.call(null,seq35201);
var seq35201__$1 = cljs.core.next.call(null,seq35201);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35202,seq35201__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35212 = arguments.length;
var i__4737__auto___35213 = (0);
while(true){
if((i__4737__auto___35213 < len__4736__auto___35212)){
args__4742__auto__.push((arguments[i__4737__auto___35213]));

var G__35214 = (i__4737__auto___35213 + (1));
i__4737__auto___35213 = G__35214;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq35203){
var G__35204 = cljs.core.first.call(null,seq35203);
var seq35203__$1 = cljs.core.next.call(null,seq35203);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35204,seq35203__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35215 = arguments.length;
var i__4737__auto___35216 = (0);
while(true){
if((i__4737__auto___35216 < len__4736__auto___35215)){
args__4742__auto__.push((arguments[i__4737__auto___35216]));

var G__35217 = (i__4737__auto___35216 + (1));
i__4737__auto___35216 = G__35217;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq35205){
var G__35206 = cljs.core.first.call(null,seq35205);
var seq35205__$1 = cljs.core.next.call(null,seq35205);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35206,seq35205__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35218 = arguments.length;
var i__4737__auto___35219 = (0);
while(true){
if((i__4737__auto___35219 < len__4736__auto___35218)){
args__4742__auto__.push((arguments[i__4737__auto___35219]));

var G__35220 = (i__4737__auto___35219 + (1));
i__4737__auto___35219 = G__35220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq35207){
var G__35208 = cljs.core.first.call(null,seq35207);
var seq35207__$1 = cljs.core.next.call(null,seq35207);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35208,seq35207__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35229 = arguments.length;
var i__4737__auto___35230 = (0);
while(true){
if((i__4737__auto___35230 < len__4736__auto___35229)){
args__4742__auto__.push((arguments[i__4737__auto___35230]));

var G__35231 = (i__4737__auto___35230 + (1));
i__4737__auto___35230 = G__35231;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__34879__auto__,rest__34880__auto__){
var convert_case__34881__auto__ = (function (p1__34878__34882__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__34878__34882__auto__,rest__34880__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__34879__auto__,convert_case__34881__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq35221){
var G__35222 = cljs.core.first.call(null,seq35221);
var seq35221__$1 = cljs.core.next.call(null,seq35221);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35222,seq35221__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35232 = arguments.length;
var i__4737__auto___35233 = (0);
while(true){
if((i__4737__auto___35233 < len__4736__auto___35232)){
args__4742__auto__.push((arguments[i__4737__auto___35233]));

var G__35234 = (i__4737__auto___35233 + (1));
i__4737__auto___35233 = G__35234;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq35223){
var G__35224 = cljs.core.first.call(null,seq35223);
var seq35223__$1 = cljs.core.next.call(null,seq35223);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35224,seq35223__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35235 = arguments.length;
var i__4737__auto___35236 = (0);
while(true){
if((i__4737__auto___35236 < len__4736__auto___35235)){
args__4742__auto__.push((arguments[i__4737__auto___35236]));

var G__35237 = (i__4737__auto___35236 + (1));
i__4737__auto___35236 = G__35237;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq35225){
var G__35226 = cljs.core.first.call(null,seq35225);
var seq35225__$1 = cljs.core.next.call(null,seq35225);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35226,seq35225__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35238 = arguments.length;
var i__4737__auto___35239 = (0);
while(true){
if((i__4737__auto___35239 < len__4736__auto___35238)){
args__4742__auto__.push((arguments[i__4737__auto___35239]));

var G__35240 = (i__4737__auto___35239 + (1));
i__4737__auto___35239 = G__35240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__34884__auto__,rest__34885__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__34884__auto__),rest__34885__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq35227){
var G__35228 = cljs.core.first.call(null,seq35227);
var seq35227__$1 = cljs.core.next.call(null,seq35227);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35228,seq35227__$1);
}));


//# sourceMappingURL=core.js.map?rel=1637360824923
