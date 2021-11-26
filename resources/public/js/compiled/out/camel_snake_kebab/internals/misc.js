// Compiled by ClojureScript 1.10.773 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37392 = arguments.length;
var i__4737__auto___37393 = (0);
while(true){
if((i__4737__auto___37393 < len__4736__auto___37392)){
args__4742__auto__.push((arguments[i__4737__auto___37393]));

var G__37394 = (i__4737__auto___37393 + (1));
i__4737__auto___37393 = G__37394;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__37386){
var map__37387 = p__37386;
var map__37387__$1 = (((((!((map__37387 == null))))?(((((map__37387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37387):map__37387);
var separator = cljs.core.get.call(null,map__37387__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5718__auto__ = cljs.core.seq.call(null,camel_snake_kebab.internals.string_separator.split.call(null,separator,s));
if(temp__5718__auto__){
var vec__37389 = temp__5718__auto__;
var seq__37390 = cljs.core.seq.call(null,vec__37389);
var first__37391 = cljs.core.first.call(null,seq__37390);
var seq__37390__$1 = cljs.core.next.call(null,seq__37390);
var first = first__37391;
var rest = seq__37390__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq37381){
var G__37382 = cljs.core.first.call(null,seq37381);
var seq37381__$1 = cljs.core.next.call(null,seq37381);
var G__37383 = cljs.core.first.call(null,seq37381__$1);
var seq37381__$2 = cljs.core.next.call(null,seq37381__$1);
var G__37384 = cljs.core.first.call(null,seq37381__$2);
var seq37381__$3 = cljs.core.next.call(null,seq37381__$2);
var G__37385 = cljs.core.first.call(null,seq37381__$3);
var seq37381__$4 = cljs.core.next.call(null,seq37381__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37382,G__37383,G__37384,G__37385,seq37381__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1637933614320
