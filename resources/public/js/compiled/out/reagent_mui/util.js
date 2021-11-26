// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.util');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('camel_snake_kebab.core');
goog.require('goog.object');
goog.require('_CIRCA_mui.material.SvgIcon');
reagent_mui.util.global$module$react = goog.global["React"];
reagent_mui.util.global$module$_CIRCA_mui$material$SvgIcon = goog.global["MuiMaterialSvgIcon"];
reagent_mui.util.adapt_react_class = (function reagent_mui$util$adapt_react_class(var_args){
var G__35244 = arguments.length;
switch (G__35244) {
case 1:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_mui.util.adapt_react_class.call(null,c,reagent.impl.util.fun_name.call(null,c));
}));

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class.call(null,c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_mui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches.call(null,/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first.call(null,s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches.call(null,/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name.call(null,k);
if(cljs.core.truth_(reagent_mui.util.color_key_QMARK_.call(null,k))){
return n;
} else {
if(clojure.string.starts_with_QMARK_.call(null,n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_.call(null,n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_.call(null,n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString.call(null,k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_entry_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,cljs.core.key.call(null,x)),cljs.core.val.call(null,x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js.call(null,reagent_mui.util.convert_map_keys.call(null,obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str.call(null,k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_(reagent_mui.util.color_key_QMARK_.call(null,k))){
return cljs.core.keyword.call(null,k);
} else {
if(reagent_mui.util.numeric_string_QMARK_.call(null,k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_.call(null,k)){
if(reagent_mui.util.pascal_case_QMARK_.call(null,k)){
return cljs.core.keyword.call(null,k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.doall.call(null,cljs.core.map.call(null,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_.call(null,x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,cljs.core.key.call(null,x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,cljs.core.val.call(null,x)),null));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__35246_SHARP_,p2__35247_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__35246_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,p2__35247_SHARP_));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(reagent_mui.util.global$module$react.isValidElement(x))){
return x;
} else {
if((cljs.core.type.call(null,x) === Object)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (r,k){
if(cljs.core._EQ_.call(null,"ref",k)){
return cljs.core.assoc_BANG_.call(null,r,new cljs.core.Keyword(null,"ref","ref",1289896967),goog.object.get(x,k));
} else {
return cljs.core.assoc_BANG_.call(null,r,reagent_mui.util.js_key__GT_clj.call(null,k),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,goog.object.get(x,k)));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys.call(null,x)));
} else {
return x;

}
}
}
}
}
}
});
return convert.call(null,obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__35248__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__35248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35249__i = 0, G__35249__a = new Array(arguments.length -  0);
while (G__35249__i < G__35249__a.length) {G__35249__a[G__35249__i] = arguments[G__35249__i + 0]; ++G__35249__i;}
  args = new cljs.core.IndexedSeq(G__35249__a,0,null);
} 
return G__35248__delegate.call(this,args);};
G__35248.cljs$lang$maxFixedArity = 0;
G__35248.cljs$lang$applyTo = (function (arglist__35250){
var args = cljs.core.seq(arglist__35250);
return G__35248__delegate(args);
});
G__35248.cljs$core$IFn$_invoke$arity$variadic = G__35248__delegate;
return G__35248;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__35251__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__35251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35252__i = 0, G__35252__a = new Array(arguments.length -  0);
while (G__35252__i < G__35252__a.length) {G__35252__a[G__35252__i] = arguments[G__35252__i + 0]; ++G__35252__i;}
  args = new cljs.core.IndexedSeq(G__35252__a,0,null);
} 
return G__35251__delegate.call(this,args);};
G__35251.cljs$lang$maxFixedArity = 0;
G__35251.cljs$lang$applyTo = (function (arglist__35253){
var args = cljs.core.seq(arglist__35253);
return G__35251__delegate(args);
});
G__35251.cljs$core$IFn$_invoke$arity$variadic = G__35251__delegate;
return G__35251;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
return reagent_mui.util.wrap_clj_function.call(null,x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = reagent_mui.util.global$module$react.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name.call(null,component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_.call(null,styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,reagent_mui.util.wrap_all_clj_functions.call(null,styles.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,theme))));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,reagent_mui.util.wrap_all_clj_functions.call(null,styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent_mui.util.adapt_react_class.call(null,hoc.call(null,reagent_mui.util.reactify_component.call(null,component)));
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__35255 = arguments.length;
switch (G__35255) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.call(null,m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5718__auto__ = (function (){var or__4126__auto__ = cljs.core.find.call(null,m,camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.find.call(null,m,camel_snake_kebab.core.__GT_camelCaseKeyword.call(null,k));
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var entry = temp__5718__auto__;
return cljs.core.val.call(null,entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__35262 = arguments.length;
switch (G__35262) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___35264 = arguments.length;
var i__4737__auto___35265 = (0);
while(true){
if((i__4737__auto___35265 < len__4736__auto___35264)){
args_arr__4757__auto__.push((arguments[i__4737__auto___35265]));

var G__35266 = (i__4737__auto___35265 + (1));
i__4737__auto___35265 = G__35266;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,m,camel_snake_kebab.core.__GT_camelCaseKeyword.call(null,k)),camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.call(null,m,k,v);
if(cljs.core.truth_(kvs)){
var G__35267 = ret;
var G__35268 = cljs.core.first.call(null,kvs);
var G__35269 = cljs.core.second.call(null,kvs);
var G__35270 = cljs.core.nnext.call(null,kvs);
m = G__35267;
k = G__35268;
v = G__35269;
kvs = G__35270;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq35258){
var G__35259 = cljs.core.first.call(null,seq35258);
var seq35258__$1 = cljs.core.next.call(null,seq35258);
var G__35260 = cljs.core.first.call(null,seq35258__$1);
var seq35258__$2 = cljs.core.next.call(null,seq35258__$1);
var G__35261 = cljs.core.first.call(null,seq35258__$2);
var seq35258__$3 = cljs.core.next.call(null,seq35258__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35259,G__35260,G__35261,seq35258__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_.call(null,ref)){
ref.call(null,value);
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35274 = arguments.length;
var i__4737__auto___35275 = (0);
while(true){
if((i__4737__auto___35275 < len__4736__auto___35274)){
args__4742__auto__.push((arguments[i__4737__auto___35275]));

var G__35276 = (i__4737__auto___35275 + (1));
i__4737__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.call(null,f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq35271){
var G__35272 = cljs.core.first.call(null,seq35271);
var seq35271__$1 = cljs.core.next.call(null,seq35271);
var G__35273 = cljs.core.first.call(null,seq35271__$1);
var seq35271__$2 = cljs.core.next.call(null,seq35271__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35272,G__35273,seq35271__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35282 = arguments.length;
var i__4737__auto___35283 = (0);
while(true){
if((i__4737__auto___35283 < len__4736__auto___35282)){
args__4742__auto__.push((arguments[i__4737__auto___35283]));

var G__35284 = (i__4737__auto___35283 + (1));
i__4737__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return reagent_mui.util.global$module$react.useMemo((function (){
if(cljs.core.not_every_QMARK_.call(null,cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__35278 = cljs.core.seq.call(null,refs);
var chunk__35279 = null;
var count__35280 = (0);
var i__35281 = (0);
while(true){
if((i__35281 < count__35280)){
var ref = cljs.core._nth.call(null,chunk__35279,i__35281);
reagent_mui.util.set_ref.call(null,ref,value);


var G__35285 = seq__35278;
var G__35286 = chunk__35279;
var G__35287 = count__35280;
var G__35288 = (i__35281 + (1));
seq__35278 = G__35285;
chunk__35279 = G__35286;
count__35280 = G__35287;
i__35281 = G__35288;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35278);
if(temp__5720__auto__){
var seq__35278__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35278__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35278__$1);
var G__35289 = cljs.core.chunk_rest.call(null,seq__35278__$1);
var G__35290 = c__4556__auto__;
var G__35291 = cljs.core.count.call(null,c__4556__auto__);
var G__35292 = (0);
seq__35278 = G__35289;
chunk__35279 = G__35290;
count__35280 = G__35291;
i__35281 = G__35292;
continue;
} else {
var ref = cljs.core.first.call(null,seq__35278__$1);
reagent_mui.util.set_ref.call(null,ref,value);


var G__35293 = cljs.core.next.call(null,seq__35278__$1);
var G__35294 = null;
var G__35295 = (0);
var G__35296 = (0);
seq__35278 = G__35293;
chunk__35279 = G__35294;
count__35280 = G__35295;
i__35281 = G__35296;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.call(null,cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq35277){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35277));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return reagent_mui.util.global$module$react.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return reagent_mui.util.global$module$react.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return reagent_mui.util.global$module$react.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return reagent_mui.util.global$module$react.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return reagent_mui.util.global$module$react.useState(initial_state);
});

//# sourceMappingURL=util.js.map?rel=1637360825025
