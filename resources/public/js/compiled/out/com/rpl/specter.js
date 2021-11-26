// Compiled by ClojureScript 1.10.773 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__39221__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (com.rpl.specter.static_path_QMARK_.call(null,ret)))){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret))))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__39221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39223__i = 0, G__39223__a = new Array(arguments.length -  0);
while (G__39223__i < G__39223__a.length) {G__39223__a[G__39223__i] = arguments[G__39223__i + 0]; ++G__39223__i;}
  args = new cljs.core.IndexedSeq(G__39223__a,0,null);
} 
return G__39221__delegate.call(this,args);};
G__39221.cljs$lang$maxFixedArity = 0;
G__39221.cljs$lang$applyTo = (function (arglist__39224){
var args = cljs.core.seq(arglist__39224);
return G__39221__delegate(args);
});
G__39221.cljs$core$IFn$_invoke$arity$variadic = G__39221__delegate;
return G__39221;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39246 = arguments.length;
var i__4737__auto___39247 = (0);
while(true){
if((i__4737__auto___39247 < len__4736__auto___39246)){
args__4742__auto__.push((arguments[i__4737__auto___39247]));

var G__39248 = (i__4737__auto___39247 + (1));
i__4737__auto___39247 = G__39248;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq39242){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39242));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39265 = arguments.length;
var i__4737__auto___39266 = (0);
while(true){
if((i__4737__auto___39266 < len__4736__auto___39265)){
args__4742__auto__.push((arguments[i__4737__auto___39266]));

var G__39267 = (i__4737__auto___39266 + (1));
i__4737__auto___39266 = G__39267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__39262){
var map__39263 = p__39262;
var map__39263__$1 = (((((!((map__39263 == null))))?(((((map__39263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39263):map__39263);
var merge_fn = cljs.core.get.call(null,map__39263__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq39255){
var G__39256 = cljs.core.first.call(null,seq39255);
var seq39255__$1 = cljs.core.next.call(null,seq39255);
var G__39257 = cljs.core.first.call(null,seq39255__$1);
var seq39255__$2 = cljs.core.next.call(null,seq39255__$1);
var G__39258 = cljs.core.first.call(null,seq39255__$2);
var seq39255__$3 = cljs.core.next.call(null,seq39255__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39256,G__39257,G__39258,seq39255__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39271__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__39271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39272__i = 0, G__39272__a = new Array(arguments.length -  0);
while (G__39272__i < G__39272__a.length) {G__39272__a[G__39272__i] = arguments[G__39272__i + 0]; ++G__39272__i;}
  args = new cljs.core.IndexedSeq(G__39272__a,0,null);
} 
return G__39271__delegate.call(this,args);};
G__39271.cljs$lang$maxFixedArity = 0;
G__39271.cljs$lang$applyTo = (function (arglist__39273){
var args = cljs.core.seq(arglist__39273);
return G__39271__delegate(args);
});
G__39271.cljs$core$IFn$_invoke$arity$variadic = G__39271__delegate;
return G__39271;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39277 = (function (meta39278){
this.meta39278 = meta39278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39279,meta39278__$1){
var self__ = this;
var _39279__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39277(meta39278__$1));
}));

(com.rpl.specter.t_com$rpl$specter39277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39279){
var self__ = this;
var _39279__$1 = this;
return self__.meta39278;
}));

(com.rpl.specter.t_com$rpl$specter39277.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39277.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39277.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter39277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39278","meta39278",158327305,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39277.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39277.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39277");

(com.rpl.specter.t_com$rpl$specter39277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39277");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39277.
 */
com.rpl.specter.__GT_t_com$rpl$specter39277 = (function com$rpl$specter$__GT_t_com$rpl$specter39277(meta39278){
return (new com.rpl.specter.t_com$rpl$specter39277(meta39278));
});

}

return (new com.rpl.specter.t_com$rpl$specter39277(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39283 = (function (afn,meta39284){
this.afn = afn;
this.meta39284 = meta39284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39285,meta39284__$1){
var self__ = this;
var _39285__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39283(self__.afn,meta39284__$1));
}));

(com.rpl.specter.t_com$rpl$specter39283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39285){
var self__ = this;
var _39285__$1 = this;
return self__.meta39284;
}));

(com.rpl.specter.t_com$rpl$specter39283.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39283.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39283.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter39283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39284","meta39284",-1580446317,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39283.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39283.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39283");

(com.rpl.specter.t_com$rpl$specter39283.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39283");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39283.
 */
com.rpl.specter.__GT_t_com$rpl$specter39283 = (function com$rpl$specter$__GT_t_com$rpl$specter39283(afn__$1,meta39284){
return (new com.rpl.specter.t_com$rpl$specter39283(afn__$1,meta39284));
});

}

return (new com.rpl.specter.t_com$rpl$specter39283(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39290 = (function (afn,meta39291){
this.afn = afn;
this.meta39291 = meta39291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39292,meta39291__$1){
var self__ = this;
var _39292__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39290(self__.afn,meta39291__$1));
}));

(com.rpl.specter.t_com$rpl$specter39290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39292){
var self__ = this;
var _39292__$1 = this;
return self__.meta39291;
}));

(com.rpl.specter.t_com$rpl$specter39290.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39290.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39290.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return self__.afn.call(null,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter39290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39291","meta39291",-1870377411,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39290.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39290.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39290");

(com.rpl.specter.t_com$rpl$specter39290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39290");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39290.
 */
com.rpl.specter.__GT_t_com$rpl$specter39290 = (function com$rpl$specter$__GT_t_com$rpl$specter39290(afn__$1,meta39291){
return (new com.rpl.specter.t_com$rpl$specter39290(afn__$1,meta39291));
});

}

return (new com.rpl.specter.t_com$rpl$specter39290(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39302 = (function (meta39303){
this.meta39303 = meta39303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39304,meta39303__$1){
var self__ = this;
var _39304__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39302(meta39303__$1));
}));

(com.rpl.specter.t_com$rpl$specter39302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39304){
var self__ = this;
var _39304__$1 = this;
return self__.meta39303;
}));

(com.rpl.specter.t_com$rpl$specter39302.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39302.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39302.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39303","meta39303",53252081,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39302.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39302.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39302");

(com.rpl.specter.t_com$rpl$specter39302.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39302");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39302.
 */
com.rpl.specter.__GT_t_com$rpl$specter39302 = (function com$rpl$specter$__GT_t_com$rpl$specter39302(meta39303){
return (new com.rpl.specter.t_com$rpl$specter39302(meta39303));
});

}

return (new com.rpl.specter.t_com$rpl$specter39302(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39308 = (function (meta39309){
this.meta39309 = meta39309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39310,meta39309__$1){
var self__ = this;
var _39310__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39308(meta39309__$1));
}));

(com.rpl.specter.t_com$rpl$specter39308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39310){
var self__ = this;
var _39310__$1 = this;
return self__.meta39309;
}));

(com.rpl.specter.t_com$rpl$specter39308.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39308.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39308.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter39308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39309","meta39309",1255463140,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39308.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39308.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39308");

(com.rpl.specter.t_com$rpl$specter39308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39308");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39308.
 */
com.rpl.specter.__GT_t_com$rpl$specter39308 = (function com$rpl$specter$__GT_t_com$rpl$specter39308(meta39309){
return (new com.rpl.specter.t_com$rpl$specter39308(meta39309));
});

}

return (new com.rpl.specter.t_com$rpl$specter39308(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__35244__auto__,v){
var ret__35245__auto__ = next_fn.call(null,v);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39322 = (function (meta39323){
this.meta39323 = meta39323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39324,meta39323__$1){
var self__ = this;
var _39324__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39322(meta39323__$1));
}));

(com.rpl.specter.t_com$rpl$specter39322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39324){
var self__ = this;
var _39324__$1 = this;
return self__.meta39323;
}));

(com.rpl.specter.t_com$rpl$specter39322.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39322.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return cljs.core.reduce.call(null,(function (curr__35244__auto__,v){
var ret__35245__auto__ = next_fn.call(null,v);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39322.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39323","meta39323",791142565,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39322.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39322.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39322");

(com.rpl.specter.t_com$rpl$specter39322.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39322");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39322.
 */
com.rpl.specter.__GT_t_com$rpl$specter39322 = (function com$rpl$specter$__GT_t_com$rpl$specter39322(meta39323){
return (new com.rpl.specter.t_com$rpl$specter39322(meta39323));
});

}

return (new com.rpl.specter.t_com$rpl$specter39322(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__35244__auto__,k){
var ret__35245__auto__ = next_fn.call(null,k);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39331 = (function (meta39332){
this.meta39332 = meta39332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39333,meta39332__$1){
var self__ = this;
var _39333__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39331(meta39332__$1));
}));

(com.rpl.specter.t_com$rpl$specter39331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39333){
var self__ = this;
var _39333__$1 = this;
return self__.meta39332;
}));

(com.rpl.specter.t_com$rpl$specter39331.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39331.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return cljs.core.reduce.call(null,(function (curr__35244__auto__,k){
var ret__35245__auto__ = next_fn.call(null,k);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39331.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39332","meta39332",288679571,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39331.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39331.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39331");

(com.rpl.specter.t_com$rpl$specter39331.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39331");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39331.
 */
com.rpl.specter.__GT_t_com$rpl$specter39331 = (function com$rpl$specter$__GT_t_com$rpl$specter39331(meta39332){
return (new com.rpl.specter.t_com$rpl$specter39331(meta39332));
});

}

return (new com.rpl.specter.t_com$rpl$specter39331(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39334 = (function (meta39335){
this.meta39335 = meta39335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39336,meta39335__$1){
var self__ = this;
var _39336__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39334(meta39335__$1));
}));

(com.rpl.specter.t_com$rpl$specter39334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39336){
var self__ = this;
var _39336__$1 = this;
return self__.meta39335;
}));

(com.rpl.specter.t_com$rpl$specter39334.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39334.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter39334.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter39334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39335","meta39335",687073515,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39334.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39334.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39334");

(com.rpl.specter.t_com$rpl$specter39334.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39334");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39334.
 */
com.rpl.specter.__GT_t_com$rpl$specter39334 = (function com$rpl$specter$__GT_t_com$rpl$specter39334(meta39335){
return (new com.rpl.specter.t_com$rpl$specter39334(meta39335));
});

}

return (new com.rpl.specter.t_com$rpl$specter39334(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39337 = (function (start_index_fn,end_index_fn,meta39338){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta39338 = meta39338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39339,meta39338__$1){
var self__ = this;
var _39339__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39337(self__.start_index_fn,self__.end_index_fn,meta39338__$1));
}));

(com.rpl.specter.t_com$rpl$specter39337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39339){
var self__ = this;
var _39339__$1 = this;
return self__.meta39338;
}));

(com.rpl.specter.t_com$rpl$specter39337.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39337.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39337.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta39338","meta39338",-1133151596,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39337.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39337.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39337");

(com.rpl.specter.t_com$rpl$specter39337.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39337");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39337.
 */
com.rpl.specter.__GT_t_com$rpl$specter39337 = (function com$rpl$specter$__GT_t_com$rpl$specter39337(start_index_fn__$1,end_index_fn__$1,meta39338){
return (new com.rpl.specter.t_com$rpl$specter39337(start_index_fn__$1,end_index_fn__$1,meta39338));
});

}

return (new com.rpl.specter.t_com$rpl$specter39337(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39340 = (function (start,end,meta39341){
this.start = start;
this.end = end;
this.meta39341 = meta39341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39342,meta39341__$1){
var self__ = this;
var _39342__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39340(self__.start,self__.end,meta39341__$1));
}));

(com.rpl.specter.t_com$rpl$specter39340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39342){
var self__ = this;
var _39342__$1 = this;
return self__.meta39341;
}));

(com.rpl.specter.t_com$rpl$specter39340.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39340.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39340.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta39341","meta39341",1515884501,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39340.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39340.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39340");

(com.rpl.specter.t_com$rpl$specter39340.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39340");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39340.
 */
com.rpl.specter.__GT_t_com$rpl$specter39340 = (function com$rpl$specter$__GT_t_com$rpl$specter39340(start__$1,end__$1,meta39341){
return (new com.rpl.specter.t_com$rpl$specter39340(start__$1,end__$1,meta39341));
});

}

return (new com.rpl.specter.t_com$rpl$specter39340(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__35244__auto__,p__39343){
var vec__39344 = p__39343;
var s = cljs.core.nth.call(null,vec__39344,(0),null);
var e = cljs.core.nth.call(null,vec__39344,(1),null);
var ret__35245__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39347 = (function (pred,meta39348){
this.pred = pred;
this.meta39348 = meta39348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39349,meta39348__$1){
var self__ = this;
var _39349__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39347(self__.pred,meta39348__$1));
}));

(com.rpl.specter.t_com$rpl$specter39347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39349){
var self__ = this;
var _39349__$1 = this;
return self__.meta39348;
}));

(com.rpl.specter.t_com$rpl$specter39347.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39347.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return cljs.core.reduce.call(null,(function (curr__35244__auto__,p__39350){
var vec__39351 = p__39350;
var s = cljs.core.nth.call(null,vec__39351,(0),null);
var e = cljs.core.nth.call(null,vec__39351,(1),null);
var ret__35245__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter39347.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta39348","meta39348",614804419,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39347.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39347.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39347");

(com.rpl.specter.t_com$rpl$specter39347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39347");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39347.
 */
com.rpl.specter.__GT_t_com$rpl$specter39347 = (function com$rpl$specter$__GT_t_com$rpl$specter39347(pred__$1,meta39348){
return (new com.rpl.specter.t_com$rpl$specter39347(pred__$1,meta39348));
});

}

return (new com.rpl.specter.t_com$rpl$specter39347(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39354 = (function (meta39355){
this.meta39355 = meta39355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39356,meta39355__$1){
var self__ = this;
var _39356__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39354(meta39355__$1));
}));

(com.rpl.specter.t_com$rpl$specter39354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39356){
var self__ = this;
var _39356__$1 = this;
return self__.meta39355;
}));

(com.rpl.specter.t_com$rpl$specter39354.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39354.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter39354.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter39354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39355","meta39355",-1174922365,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39354.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39354.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39354");

(com.rpl.specter.t_com$rpl$specter39354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39354");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39354.
 */
com.rpl.specter.__GT_t_com$rpl$specter39354 = (function com$rpl$specter$__GT_t_com$rpl$specter39354(meta39355){
return (new com.rpl.specter.t_com$rpl$specter39354(meta39355));
});

}

return (new com.rpl.specter.t_com$rpl$specter39354(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39357 = (function (meta39358){
this.meta39358 = meta39358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39359,meta39358__$1){
var self__ = this;
var _39359__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39357(meta39358__$1));
}));

(com.rpl.specter.t_com$rpl$specter39357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39359){
var self__ = this;
var _39359__$1 = this;
return self__.meta39358;
}));

(com.rpl.specter.t_com$rpl$specter39357.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39357.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter39357.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter39357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39358","meta39358",133121388,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39357.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39357.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39357");

(com.rpl.specter.t_com$rpl$specter39357.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39357");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39357.
 */
com.rpl.specter.__GT_t_com$rpl$specter39357 = (function com$rpl$specter$__GT_t_com$rpl$specter39357(meta39358){
return (new com.rpl.specter.t_com$rpl$specter39357(meta39358));
});

}

return (new com.rpl.specter.t_com$rpl$specter39357(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39360 = (function (meta39361){
this.meta39361 = meta39361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39362,meta39361__$1){
var self__ = this;
var _39362__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39360(meta39361__$1));
}));

(com.rpl.specter.t_com$rpl$specter39360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39362){
var self__ = this;
var _39362__$1 = this;
return self__.meta39361;
}));

(com.rpl.specter.t_com$rpl$specter39360.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39360.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39360.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter39360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39361","meta39361",277407772,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39360.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39360.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39360");

(com.rpl.specter.t_com$rpl$specter39360.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39360");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39360.
 */
com.rpl.specter.__GT_t_com$rpl$specter39360 = (function com$rpl$specter$__GT_t_com$rpl$specter39360(meta39361){
return (new com.rpl.specter.t_com$rpl$specter39360(meta39361));
});

}

return (new com.rpl.specter.t_com$rpl$specter39360(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39363 = (function (meta39364){
this.meta39364 = meta39364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39365,meta39364__$1){
var self__ = this;
var _39365__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39363(meta39364__$1));
}));

(com.rpl.specter.t_com$rpl$specter39363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39365){
var self__ = this;
var _39365__$1 = this;
return self__.meta39364;
}));

(com.rpl.specter.t_com$rpl$specter39363.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39363.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39363.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter39363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39364","meta39364",-1283977127,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39363.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39363.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39363");

(com.rpl.specter.t_com$rpl$specter39363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39363");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39363.
 */
com.rpl.specter.__GT_t_com$rpl$specter39363 = (function com$rpl$specter$__GT_t_com$rpl$specter39363(meta39364){
return (new com.rpl.specter.t_com$rpl$specter39363(meta39364));
});

}

return (new com.rpl.specter.t_com$rpl$specter39363(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39366 = (function (meta39367){
this.meta39367 = meta39367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39368,meta39367__$1){
var self__ = this;
var _39368__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39366(meta39367__$1));
}));

(com.rpl.specter.t_com$rpl$specter39366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39368){
var self__ = this;
var _39368__$1 = this;
return self__.meta39367;
}));

(com.rpl.specter.t_com$rpl$specter39366.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39366.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter39366.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter39366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39367","meta39367",-575520531,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39366.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39366.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39366");

(com.rpl.specter.t_com$rpl$specter39366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39366");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39366.
 */
com.rpl.specter.__GT_t_com$rpl$specter39366 = (function com$rpl$specter$__GT_t_com$rpl$specter39366(meta39367){
return (new com.rpl.specter.t_com$rpl$specter39366(meta39367));
});

}

return (new com.rpl.specter.t_com$rpl$specter39366(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39369 = (function (aset,meta39370){
this.aset = aset;
this.meta39370 = meta39370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39371,meta39370__$1){
var self__ = this;
var _39371__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39369(self__.aset,meta39370__$1));
}));

(com.rpl.specter.t_com$rpl$specter39369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39371){
var self__ = this;
var _39371__$1 = this;
return self__.meta39370;
}));

(com.rpl.specter.t_com$rpl$specter39369.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39369.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter39369.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter39369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta39370","meta39370",1376264025,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39369.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39369.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39369");

(com.rpl.specter.t_com$rpl$specter39369.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39369");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39369.
 */
com.rpl.specter.__GT_t_com$rpl$specter39369 = (function com$rpl$specter$__GT_t_com$rpl$specter39369(aset__$1,meta39370){
return (new com.rpl.specter.t_com$rpl$specter39369(aset__$1,meta39370));
});

}

return (new com.rpl.specter.t_com$rpl$specter39369(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39372 = (function (m_keys,meta39373){
this.m_keys = m_keys;
this.meta39373 = meta39373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39374,meta39373__$1){
var self__ = this;
var _39374__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39372(self__.m_keys,meta39373__$1));
}));

(com.rpl.specter.t_com$rpl$specter39372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39374){
var self__ = this;
var _39374__$1 = this;
return self__.meta39373;
}));

(com.rpl.specter.t_com$rpl$specter39372.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39372.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter39372.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
}));

(com.rpl.specter.t_com$rpl$specter39372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta39373","meta39373",-2064442577,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39372.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39372.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39372");

(com.rpl.specter.t_com$rpl$specter39372.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39372");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39372.
 */
com.rpl.specter.__GT_t_com$rpl$specter39372 = (function com$rpl$specter$__GT_t_com$rpl$specter39372(m_keys__$1,meta39373){
return (new com.rpl.specter.t_com$rpl$specter39372(m_keys__$1,meta39373));
});

}

return (new com.rpl.specter.t_com$rpl$specter39372(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39378__delegate = function (path){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39375 = (function (path,late,meta39376){
this.path = path;
this.late = late;
this.meta39376 = meta39376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39377,meta39376__$1){
var self__ = this;
var _39377__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39375(self__.path,self__.late,meta39376__$1));
}));

(com.rpl.specter.t_com$rpl$specter39375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39377){
var self__ = this;
var _39377__$1 = this;
return self__.meta39376;
}));

(com.rpl.specter.t_com$rpl$specter39375.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39375.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
}));

(com.rpl.specter.t_com$rpl$specter39375.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.seq.call(null,transformed));
return com.rpl.specter.compiled_transform.call(null,self__.late,(function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
}),structure);
}));

(com.rpl.specter.t_com$rpl$specter39375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39376","meta39376",479191598,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39375.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39375.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39375");

(com.rpl.specter.t_com$rpl$specter39375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39375");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39375.
 */
com.rpl.specter.__GT_t_com$rpl$specter39375 = (function com$rpl$specter$__GT_t_com$rpl$specter39375(path__$1,late__$1,meta39376){
return (new com.rpl.specter.t_com$rpl$specter39375(path__$1,late__$1,meta39376));
});

}

return (new com.rpl.specter.t_com$rpl$specter39375(path,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
};
var G__39378 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39382__i = 0, G__39382__a = new Array(arguments.length -  0);
while (G__39382__i < G__39382__a.length) {G__39382__a[G__39382__i] = arguments[G__39382__i + 0]; ++G__39382__i;}
  path = new cljs.core.IndexedSeq(G__39382__a,0,null);
} 
return G__39378__delegate.call(this,path);};
G__39378.cljs$lang$maxFixedArity = 0;
G__39378.cljs$lang$applyTo = (function (arglist__39383){
var path = cljs.core.seq(arglist__39383);
return G__39378__delegate(path);
});
G__39378.cljs$core$IFn$_invoke$arity$variadic = G__39378__delegate;
return G__39378;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39384 = (function (key,meta39385){
this.key = key;
this.meta39385 = meta39385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39386,meta39385__$1){
var self__ = this;
var _39386__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39384(self__.key,meta39385__$1));
}));

(com.rpl.specter.t_com$rpl$specter39384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39386){
var self__ = this;
var _39386__$1 = this;
return self__.meta39385;
}));

(com.rpl.specter.t_com$rpl$specter39384.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39384.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39384.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
var newkey = next_fn.call(null,vals,self__.key);
var dissoced = cljs.core.dissoc.call(null,structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.call(null,dissoced,newkey,cljs.core.get.call(null,structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter39384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta39385","meta39385",1416023499,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39384.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39384.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39384");

(com.rpl.specter.t_com$rpl$specter39384.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39384");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39384.
 */
com.rpl.specter.__GT_t_com$rpl$specter39384 = (function com$rpl$specter$__GT_t_com$rpl$specter39384(key__$1,meta39385){
return (new com.rpl.specter.t_com$rpl$specter39384(key__$1,meta39385));
});

}

return (new com.rpl.specter.t_com$rpl$specter39384(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39391 = (function (elem,meta39392){
this.elem = elem;
this.meta39392 = meta39392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39393,meta39392__$1){
var self__ = this;
var _39393__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39391(self__.elem,meta39392__$1));
}));

(com.rpl.specter.t_com$rpl$specter39391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39393){
var self__ = this;
var _39393__$1 = this;
return self__.meta39392;
}));

(com.rpl.specter.t_com$rpl$specter39391.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39391.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39391.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
var newelem = next_fn.call(null,vals,self__.elem);
var removed = cljs.core.disj.call(null,structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.call(null,removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter39391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta39392","meta39392",-198684485,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39391.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39391.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39391");

(com.rpl.specter.t_com$rpl$specter39391.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39391");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39391.
 */
com.rpl.specter.__GT_t_com$rpl$specter39391 = (function com$rpl$specter$__GT_t_com$rpl$specter39391(elem__$1,meta39392){
return (new com.rpl.specter.t_com$rpl$specter39391(elem__$1,meta39392));
});

}

return (new com.rpl.specter.t_com$rpl$specter39391(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj.call(null,(function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39399 = (function (index,meta39400){
this.index = index;
this.meta39400 = meta39400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39401,meta39400__$1){
var self__ = this;
var _39401__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39399(self__.index,meta39400__$1));
}));

(com.rpl.specter.t_com$rpl$specter39399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39401){
var self__ = this;
var _39401__$1 = this;
return self__.meta39400;
}));

(com.rpl.specter.t_com$rpl$specter39399.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39399.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter39399.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39403;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39404 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache39403 = info39404;

return info39404;
})():info__38025__auto__);
var precompiled39405 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39405.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null));
} else {
return precompiled39405;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter39399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta39400","meta39400",-2025699713,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39399.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39399.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39399");

(com.rpl.specter.t_com$rpl$specter39399.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39399");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39399.
 */
com.rpl.specter.__GT_t_com$rpl$specter39399 = (function com$rpl$specter$__GT_t_com$rpl$specter39399(index__$1,meta39400){
return (new com.rpl.specter.t_com$rpl$specter39399(index__$1,meta39400));
});

}

return (new com.rpl.specter.t_com$rpl$specter39399(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39407 = (function (i,meta39408){
this.i = i;
this.meta39408 = meta39408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39409,meta39408__$1){
var self__ = this;
var _39409__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39407(self__.i,meta39408__$1));
}));

(com.rpl.specter.t_com$rpl$specter39407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39409){
var self__ = this;
var _39409__$1 = this;
return self__.meta39408;
}));

(com.rpl.specter.t_com$rpl$specter39407.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39407.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter39407.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
var newi = next_fn.call(null,vals,self__.i);
if(cljs.core._EQ_.call(null,newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.call(null,structure,self__.i);
if(cljs.core.vector_QMARK_.call(null,structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__39416 = (j - (1));
var G__39417 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__39416;
s = G__39417;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__39418 = (j + (1));
var G__39419 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__39418;
s = G__39419;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39410;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39411 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache39410 = info39411;

return info39411;
})():info__38025__auto__);
var precompiled39412 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled39412;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39413;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39414 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache39413 = info39414;

return info39414;
})():info__38025__auto__);
var precompiled39415 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39415.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled39415;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter39407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta39408","meta39408",2019308507,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39407.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39407.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39407");

(com.rpl.specter.t_com$rpl$specter39407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39407");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39407.
 */
com.rpl.specter.__GT_t_com$rpl$specter39407 = (function com$rpl$specter$__GT_t_com$rpl$specter39407(i__$1,meta39408){
return (new com.rpl.specter.t_com$rpl$specter39407(i__$1,meta39408));
});

}

return (new com.rpl.specter.t_com$rpl$specter39407(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(start - (1)));
return cljs.core.reduce.call(null,(function (curr__35244__auto__,e){
var ret__35245__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__39422 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__39422,(0),null);
var newe = cljs.core.nth.call(null,vec__39422,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39425;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39426 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache39425 = info39426;

return info39426;
})():info__38025__auto__);
var precompiled39427 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39427.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
})], null));
} else {
return precompiled39427;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39428;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39429 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39428 = info39429;

return info39429;
})():info__38025__auto__);
var precompiled39430 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39430.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled39430;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39431;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39432 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39431 = info39432;

return info39432;
})():info__38025__auto__);
var precompiled39433 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39433.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled39433;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39434 = (function (start,meta39435){
this.start = start;
this.meta39435 = meta39435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39436,meta39435__$1){
var self__ = this;
var _39436__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39434(self__.start,meta39435__$1));
}));

(com.rpl.specter.t_com$rpl$specter39434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39436){
var self__ = this;
var _39436__$1 = this;
return self__.meta39435;
}));

(com.rpl.specter.t_com$rpl$specter39434.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39434.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var i = com.rpl.specter.impl.mutable_cell.call(null,(self__.start - (1)));
return cljs.core.reduce.call(null,(function (curr__35244__auto__,e){
var ret__35245__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter39434.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__39437 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__39437,(0),null);
var newe = cljs.core.nth.call(null,vec__39437,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39440;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39441 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__39420#","p1__39420#",-200385426,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__39421#","p1__39421#",-1596913006,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache39440 = info39441;

return info39441;
})():info__38025__auto__);
var precompiled39442 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39442.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__39420_SHARP_){
return (p1__39420_SHARP_ >= (curri + (1)));
}),(function (p1__39421_SHARP_){
return (p1__39421_SHARP_ <= newi);
})], null));
} else {
return precompiled39442;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39443;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39444 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39443 = info39444;

return info39444;
})():info__38025__auto__);
var precompiled39445 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39445.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled39445;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39446;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39447 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache39446 = info39447;

return info39447;
})():info__38025__auto__);
var precompiled39448 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39448.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled39448;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter39434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta39435","meta39435",1256735544,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39434.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39434.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39434");

(com.rpl.specter.t_com$rpl$specter39434.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39434");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39434.
 */
com.rpl.specter.__GT_t_com$rpl$specter39434 = (function com$rpl$specter$__GT_t_com$rpl$specter39434(start__$1,meta39435){
return (new com.rpl.specter.t_com$rpl$specter39434(start__$1,meta39435));
});

}

return (new com.rpl.specter.t_com$rpl$specter39434(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = com.rpl.specter.indexed_vals.call(null,(0));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39449 = (function (afn,meta39450){
this.afn = afn;
this.meta39450 = meta39450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39451,meta39450__$1){
var self__ = this;
var _39451__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39449(self__.afn,meta39450__$1));
}));

(com.rpl.specter.t_com$rpl$specter39449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39451){
var self__ = this;
var _39451__$1 = this;
return self__.meta39450;
}));

(com.rpl.specter.t_com$rpl$specter39449.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39449.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39449.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta39450","meta39450",245223621,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39449.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39449.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39449");

(com.rpl.specter.t_com$rpl$specter39449.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39449");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39449.
 */
com.rpl.specter.__GT_t_com$rpl$specter39449 = (function com$rpl$specter$__GT_t_com$rpl$specter39449(afn__$1,meta39450){
return (new com.rpl.specter.t_com$rpl$specter39449(afn__$1,meta39450));
});

}

return (new com.rpl.specter.t_com$rpl$specter39449(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39452 = (function (parse_fn,unparse_fn,meta39453){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta39453 = meta39453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39454,meta39453__$1){
var self__ = this;
var _39454__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39452(self__.parse_fn,self__.unparse_fn,meta39453__$1));
}));

(com.rpl.specter.t_com$rpl$specter39452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39454){
var self__ = this;
var _39454__$1 = this;
return self__.meta39453;
}));

(com.rpl.specter.t_com$rpl$specter39452.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39452.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,self__.parse_fn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39452.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta39453","meta39453",386794091,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39452.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39452.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39452");

(com.rpl.specter.t_com$rpl$specter39452.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39452");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39452.
 */
com.rpl.specter.__GT_t_com$rpl$specter39452 = (function com$rpl$specter$__GT_t_com$rpl$specter39452(parse_fn__$1,unparse_fn__$1,meta39453){
return (new com.rpl.specter.t_com$rpl$specter39452(parse_fn__$1,unparse_fn__$1,meta39453));
});

}

return (new com.rpl.specter.t_com$rpl$specter39452(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39455 = (function (meta39456){
this.meta39456 = meta39456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39457,meta39456__$1){
var self__ = this;
var _39457__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39455(meta39456__$1));
}));

(com.rpl.specter.t_com$rpl$specter39455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39457){
var self__ = this;
var _39457__$1 = this;
return self__.meta39456;
}));

(com.rpl.specter.t_com$rpl$specter39455.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39455.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.deref.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39455.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter39455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39456","meta39456",1810453931,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39455.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39455.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39455");

(com.rpl.specter.t_com$rpl$specter39455.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39455");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39455.
 */
com.rpl.specter.__GT_t_com$rpl$specter39455 = (function com$rpl$specter$__GT_t_com$rpl$specter39455(meta39456){
return (new com.rpl.specter.t_com$rpl$specter39455(meta39456));
});

}

return (new com.rpl.specter.t_com$rpl$specter39455(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__35244__auto__,s){
var ret__35245__auto__ = next_fn.call(null,s);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace.call(null,structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39458 = (function (re,meta39459){
this.re = re;
this.meta39459 = meta39459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39460,meta39459__$1){
var self__ = this;
var _39460__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39458(self__.re,meta39459__$1));
}));

(com.rpl.specter.t_com$rpl$specter39458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39460){
var self__ = this;
var _39460__$1 = this;
return self__.meta39459;
}));

(com.rpl.specter.t_com$rpl$specter39458.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39458.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return cljs.core.reduce.call(null,(function (curr__35244__auto__,s){
var ret__35245__auto__ = next_fn.call(null,s);
if((ret__35245__auto__ === com.rpl.specter.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter39458.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return clojure.string.replace.call(null,structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta39459","meta39459",-1239188421,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39458.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39458.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39458");

(com.rpl.specter.t_com$rpl$specter39458.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39458");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39458.
 */
com.rpl.specter.__GT_t_com$rpl$specter39458 = (function com$rpl$specter$__GT_t_com$rpl$specter39458(re__$1,meta39459){
return (new com.rpl.specter.t_com$rpl$specter39458(re__$1,meta39459));
});

}

return (new com.rpl.specter.t_com$rpl$specter39458(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39466__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return afn;
} else {
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39463 = (function (path,temp__5718__auto__,late,meta39464){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta39464 = meta39464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39465,meta39464__$1){
var self__ = this;
var _39465__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39463(self__.path,self__.temp__5718__auto__,self__.late,meta39464__$1));
}));

(com.rpl.specter.t_com$rpl$specter39463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39465){
var self__ = this;
var _39465__$1 = this;
return self__.meta39464;
}));

(com.rpl.specter.t_com$rpl$specter39463.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39463.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__39461_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__39461_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39463.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__39462_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__39462_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39464","meta39464",1362322524,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39463.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39463.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39463");

(com.rpl.specter.t_com$rpl$specter39463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39463");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39463.
 */
com.rpl.specter.__GT_t_com$rpl$specter39463 = (function com$rpl$specter$__GT_t_com$rpl$specter39463(path__$1,temp__5718__auto____$1,late__$1,meta39464){
return (new com.rpl.specter.t_com$rpl$specter39463(path__$1,temp__5718__auto____$1,late__$1,meta39464));
});

}

return (new com.rpl.specter.t_com$rpl$specter39463(path,temp__5718__auto__,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
}
};
var G__39466 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39467__i = 0, G__39467__a = new Array(arguments.length -  0);
while (G__39467__i < G__39467__a.length) {G__39467__a[G__39467__i] = arguments[G__39467__i + 0]; ++G__39467__i;}
  path = new cljs.core.IndexedSeq(G__39467__a,0,null);
} 
return G__39466__delegate.call(this,path);};
G__39466.cljs$lang$maxFixedArity = 0;
G__39466.cljs$lang$applyTo = (function (arglist__39468){
var path = cljs.core.seq(arglist__39468);
return G__39466__delegate(path);
});
G__39466.cljs$core$IFn$_invoke$arity$variadic = G__39466__delegate;
return G__39466;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39474__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
} else {
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39471 = (function (path,temp__5718__auto__,late,meta39472){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta39472 = meta39472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39473,meta39472__$1){
var self__ = this;
var _39473__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39471(self__.path,self__.temp__5718__auto__,self__.late,meta39472__$1));
}));

(com.rpl.specter.t_com$rpl$specter39471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39473){
var self__ = this;
var _39473__$1 = this;
return self__.meta39472;
}));

(com.rpl.specter.t_com$rpl$specter39471.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39471.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__39469_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__39469_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39471.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__39470_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__39470_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39472","meta39472",-350873859,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39471.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39471.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39471");

(com.rpl.specter.t_com$rpl$specter39471.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39471");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39471.
 */
com.rpl.specter.__GT_t_com$rpl$specter39471 = (function com$rpl$specter$__GT_t_com$rpl$specter39471(path__$1,temp__5718__auto____$1,late__$1,meta39472){
return (new com.rpl.specter.t_com$rpl$specter39471(path__$1,temp__5718__auto____$1,late__$1,meta39472));
});

}

return (new com.rpl.specter.t_com$rpl$specter39471(path,temp__5718__auto__,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
}
};
var G__39474 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39475__i = 0, G__39475__a = new Array(arguments.length -  0);
while (G__39475__i < G__39475__a.length) {G__39475__a[G__39475__i] = arguments[G__39475__i + 0]; ++G__39475__i;}
  path = new cljs.core.IndexedSeq(G__39475__a,0,null);
} 
return G__39474__delegate.call(this,path);};
G__39474.cljs$lang$maxFixedArity = 0;
G__39474.cljs$lang$applyTo = (function (arglist__39476){
var path = cljs.core.seq(arglist__39476);
return G__39474__delegate(path);
});
G__39474.cljs$core$IFn$_invoke$arity$variadic = G__39474__delegate;
return G__39474;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39477__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__39477 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39478__i = 0, G__39478__a = new Array(arguments.length -  0);
while (G__39478__i < G__39478__a.length) {G__39478__a[G__39478__i] = arguments[G__39478__i + 0]; ++G__39478__i;}
  path = new cljs.core.IndexedSeq(G__39478__a,0,null);
} 
return G__39477__delegate.call(this,path);};
G__39477.cljs$lang$maxFixedArity = 0;
G__39477.cljs$lang$applyTo = (function (arglist__39479){
var path = cljs.core.seq(arglist__39479);
return G__39477__delegate(path);
});
G__39477.cljs$core$IFn$_invoke$arity$variadic = G__39477__delegate;
return G__39477;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39480 = (function (path,update_fn,late,late_fn,meta39481){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta39481 = meta39481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39482,meta39481__$1){
var self__ = this;
var _39482__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39480(self__.path,self__.update_fn,self__.late,self__.late_fn,meta39481__$1));
}));

(com.rpl.specter.t_com$rpl$specter39480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39482){
var self__ = this;
var _39482__$1 = this;
return self__.meta39481;
}));

(com.rpl.specter.t_com$rpl$specter39480.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39480.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter39480.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter39480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta39481","meta39481",548296314,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39480.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39480.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39480");

(com.rpl.specter.t_com$rpl$specter39480.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39480");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39480.
 */
com.rpl.specter.__GT_t_com$rpl$specter39480 = (function com$rpl$specter$__GT_t_com$rpl$specter39480(path__$1,update_fn__$1,late__$1,late_fn__$1,meta39481){
return (new com.rpl.specter.t_com$rpl$specter39480(path__$1,update_fn__$1,late__$1,late_fn__$1,meta39481));
});

}

return (new com.rpl.specter.t_com$rpl$specter39480(path,update_fn,late,late_fn,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39483 = (function (path,reduce_fn,late,late_fn,meta39484){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta39484 = meta39484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39485,meta39484__$1){
var self__ = this;
var _39485__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39483(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta39484__$1));
}));

(com.rpl.specter.t_com$rpl$specter39483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39485){
var self__ = this;
var _39485__$1 = this;
return self__.meta39484;
}));

(com.rpl.specter.t_com$rpl$specter39483.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39483.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39483.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta39484","meta39484",-147047521,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39483.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39483.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39483");

(com.rpl.specter.t_com$rpl$specter39483.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39483");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39483.
 */
com.rpl.specter.__GT_t_com$rpl$specter39483 = (function com$rpl$specter$__GT_t_com$rpl$specter39483(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta39484){
return (new com.rpl.specter.t_com$rpl$specter39483(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta39484));
});

}

return (new com.rpl.specter.t_com$rpl$specter39483(path,reduce_fn,late,late_fn,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__39486_SHARP_){
return cljs.core._EQ_.call(null,p1__39486_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__39487_SHARP_){
return (p1__39487_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__39488_SHARP_){
return (p1__39488_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__39489_SHARP_){
return (p1__39489_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__39490_SHARP_){
return (p1__39490_SHARP_ >= v);
}));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.regex_nav.call(null,this$__$1);
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39491 = (function (v,meta39492){
this.v = v;
this.meta39492 = meta39492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39493,meta39492__$1){
var self__ = this;
var _39493__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39491(self__.v,meta39492__$1));
}));

(com.rpl.specter.t_com$rpl$specter39491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39493){
var self__ = this;
var _39493__$1 = this;
return self__.meta39492;
}));

(com.rpl.specter.t_com$rpl$specter39491.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39491.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter39491.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter39491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta39492","meta39492",1218231050,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39491.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39491.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39491");

(com.rpl.specter.t_com$rpl$specter39491.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39491");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39491.
 */
com.rpl.specter.__GT_t_com$rpl$specter39491 = (function com$rpl$specter$__GT_t_com$rpl$specter39491(v__$1,meta39492){
return (new com.rpl.specter.t_com$rpl$specter39491(v__$1,meta39492));
});

}

return (new com.rpl.specter.t_com$rpl$specter39491(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39494 = (function (meta39495){
this.meta39495 = meta39495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39496,meta39495__$1){
var self__ = this;
var _39496__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39494(meta39495__$1));
}));

(com.rpl.specter.t_com$rpl$specter39494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39496){
var self__ = this;
var _39496__$1 = this;
return self__.meta39495;
}));

(com.rpl.specter.t_com$rpl$specter39494.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39494.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.meta.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39494.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter39494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39495","meta39495",-1940871264,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39494.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39494.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39494");

(com.rpl.specter.t_com$rpl$specter39494.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39494");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39494.
 */
com.rpl.specter.__GT_t_com$rpl$specter39494 = (function com$rpl$specter$__GT_t_com$rpl$specter39494(meta39495){
return (new com.rpl.specter.t_com$rpl$specter39494(meta39495));
});

}

return (new com.rpl.specter.t_com$rpl$specter39494(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAME can only be used on symbols or keywords - ",structure);

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39497 = (function (meta39498){
this.meta39498 = meta39498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39499,meta39498__$1){
var self__ = this;
var _39499__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39497(meta39498__$1));
}));

(com.rpl.specter.t_com$rpl$specter39497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39499){
var self__ = this;
var _39499__$1 = this;
return self__.meta39498;
}));

(com.rpl.specter.t_com$rpl$specter39497.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39497.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.name.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39497.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAME can only be used on symbols or keywords - ",structure);

}
}
}));

(com.rpl.specter.t_com$rpl$specter39497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39498","meta39498",-461742218,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39497.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39497.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39497");

(com.rpl.specter.t_com$rpl$specter39497.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39497");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39497.
 */
com.rpl.specter.__GT_t_com$rpl$specter39497 = (function com$rpl$specter$__GT_t_com$rpl$specter39497(meta39498){
return (new com.rpl.specter.t_com$rpl$specter39497(meta39498));
});

}

return (new com.rpl.specter.t_com$rpl$specter39497(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure);

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39500 = (function (meta39501){
this.meta39501 = meta39501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39502,meta39501__$1){
var self__ = this;
var _39502__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39500(meta39501__$1));
}));

(com.rpl.specter.t_com$rpl$specter39500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39502){
var self__ = this;
var _39502__$1 = this;
return self__.meta39501;
}));

(com.rpl.specter.t_com$rpl$specter39500.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39500.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
return next_fn.call(null,cljs.core.namespace.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter39500.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure);

}
}
}));

(com.rpl.specter.t_com$rpl$specter39500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39501","meta39501",-108946200,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39500.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39500.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39500");

(com.rpl.specter.t_com$rpl$specter39500.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39500");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39500.
 */
com.rpl.specter.__GT_t_com$rpl$specter39500 = (function com$rpl$specter$__GT_t_com$rpl$specter39500(meta39501){
return (new com.rpl.specter.t_com$rpl$specter39500(meta39501));
});

}

return (new com.rpl.specter.t_com$rpl$specter39500(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39511__delegate = function (path){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39503 = (function (path,late,meta39504){
this.path = path;
this.late = late;
this.meta39504 = meta39504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39505,meta39504__$1){
var self__ = this;
var _39505__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39503(self__.path,self__.late,meta39504__$1));
}));

(com.rpl.specter.t_com$rpl$specter39503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39505){
var self__ = this;
var _39505__$1 = this;
return self__.meta39504;
}));

(com.rpl.specter.t_com$rpl$specter39503.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39503.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter39503.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter39503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39504","meta39504",359988143,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39503.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39503.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39503");

(com.rpl.specter.t_com$rpl$specter39503.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39503");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39503.
 */
com.rpl.specter.__GT_t_com$rpl$specter39503 = (function com$rpl$specter$__GT_t_com$rpl$specter39503(path__$1,late__$1,meta39504){
return (new com.rpl.specter.t_com$rpl$specter39503(path__$1,late__$1,meta39504));
});

}

return (new com.rpl.specter.t_com$rpl$specter39503(path,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
};
var G__39511 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39517__i = 0, G__39517__a = new Array(arguments.length -  0);
while (G__39517__i < G__39517__a.length) {G__39517__a[G__39517__i] = arguments[G__39517__i + 0]; ++G__39517__i;}
  path = new cljs.core.IndexedSeq(G__39517__a,0,null);
} 
return G__39511__delegate.call(this,path);};
G__39511.cljs$lang$maxFixedArity = 0;
G__39511.cljs$lang$applyTo = (function (arglist__39518){
var path = cljs.core.seq(arglist__39518);
return G__39511__delegate(path);
});
G__39511.cljs$core$IFn$_invoke$arity$variadic = G__39511__delegate;
return G__39511;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39525__delegate = function (path){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39519 = (function (path,late,meta39520){
this.path = path;
this.late = late;
this.meta39520 = meta39520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39521,meta39520__$1){
var self__ = this;
var _39521__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39519(self__.path,self__.late,meta39520__$1));
}));

(com.rpl.specter.t_com$rpl$specter39519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39521){
var self__ = this;
var _39521__$1 = this;
return self__.meta39520;
}));

(com.rpl.specter.t_com$rpl$specter39519.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39519.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter39519.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter39519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39520","meta39520",-968787634,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39519.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39519.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39519");

(com.rpl.specter.t_com$rpl$specter39519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39519");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39519.
 */
com.rpl.specter.__GT_t_com$rpl$specter39519 = (function com$rpl$specter$__GT_t_com$rpl$specter39519(path__$1,late__$1,meta39520){
return (new com.rpl.specter.t_com$rpl$specter39519(path__$1,late__$1,meta39520));
});

}

return (new com.rpl.specter.t_com$rpl$specter39519(path,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
};
var G__39525 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39526__i = 0, G__39526__a = new Array(arguments.length -  0);
while (G__39526__i < G__39526__a.length) {G__39526__a[G__39526__i] = arguments[G__39526__i + 0]; ++G__39526__i;}
  path = new cljs.core.IndexedSeq(G__39526__a,0,null);
} 
return G__39525__delegate.call(this,path);};
G__39525.cljs$lang$maxFixedArity = 0;
G__39525.cljs$lang$applyTo = (function (arglist__39527){
var path = cljs.core.seq(arglist__39527);
return G__39525__delegate(path);
});
G__39525.cljs$core$IFn$_invoke$arity$variadic = G__39525__delegate;
return G__39525;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39529 = (function (val,meta39530){
this.val = val;
this.meta39530 = meta39530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39531,meta39530__$1){
var self__ = this;
var _39531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39529(self__.val,meta39530__$1));
}));

(com.rpl.specter.t_com$rpl$specter39529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39531){
var self__ = this;
var _39531__$1 = this;
return self__.meta39530;
}));

(com.rpl.specter.t_com$rpl$specter39529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter39529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__38015__auto__,vals__38016__auto__,structure,next_fn__38017__auto__){
var self__ = this;
var this__38015__auto____$1 = this;
return next_fn__38017__auto__.call(null,cljs.core.conj.call(null,vals__38016__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter39529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta39530","meta39530",1297031389,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39529.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39529");

(com.rpl.specter.t_com$rpl$specter39529.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39529");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39529.
 */
com.rpl.specter.__GT_t_com$rpl$specter39529 = (function com$rpl$specter$__GT_t_com$rpl$specter39529(val__$1,meta39530){
return (new com.rpl.specter.t_com$rpl$specter39529(val__$1,meta39530));
});

}

return (new com.rpl.specter.t_com$rpl$specter39529(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39547__delegate = function (path){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39536 = (function (path,late,meta39537){
this.path = path;
this.late = late;
this.meta39537 = meta39537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39538,meta39537__$1){
var self__ = this;
var _39538__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39536(self__.path,self__.late,meta39537__$1));
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39538){
var self__ = this;
var _39538__$1 = this;
return self__.meta39537;
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter39536.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter39536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta39537","meta39537",1854548334,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39536");

(com.rpl.specter.t_com$rpl$specter39536.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39536");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39536.
 */
com.rpl.specter.__GT_t_com$rpl$specter39536 = (function com$rpl$specter$__GT_t_com$rpl$specter39536(path__$1,late__$1,meta39537){
return (new com.rpl.specter.t_com$rpl$specter39536(path__$1,late__$1,meta39537));
});

}

return (new com.rpl.specter.t_com$rpl$specter39536(path,late,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
};
var G__39547 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39548__i = 0, G__39548__a = new Array(arguments.length -  0);
while (G__39548__i < G__39548__a.length) {G__39548__a[G__39548__i] = arguments[G__39548__i + 0]; ++G__39548__i;}
  path = new cljs.core.IndexedSeq(G__39548__a,0,null);
} 
return G__39547__delegate.call(this,path);};
G__39547.cljs$lang$maxFixedArity = 0;
G__39547.cljs$lang$applyTo = (function (arglist__39549){
var path = cljs.core.seq(arglist__39549);
return G__39547__delegate(path);
});
G__39547.cljs$core$IFn$_invoke$arity$variadic = G__39547__delegate;
return G__39547;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39550 = (function (meta39551){
this.meta39551 = meta39551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39552,meta39551__$1){
var self__ = this;
var _39552__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39550(meta39551__$1));
}));

(com.rpl.specter.t_com$rpl$specter39550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39552){
var self__ = this;
var _39552__$1 = this;
return self__.meta39551;
}));

(com.rpl.specter.t_com$rpl$specter39550.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39550.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter39550.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter39550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39551","meta39551",-462430774,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39550.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39550.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39550");

(com.rpl.specter.t_com$rpl$specter39550.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39550");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39550.
 */
com.rpl.specter.__GT_t_com$rpl$specter39550 = (function com$rpl$specter$__GT_t_com$rpl$specter39550(meta39551){
return (new com.rpl.specter.t_com$rpl$specter39550(meta39551));
});

}

return (new com.rpl.specter.t_com$rpl$specter39550(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__39576 = null;
var G__39576__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__39576__3 = (function (cond_p,then_path,else_path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39558 = (function (cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,meta39559){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta39559 = meta39559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39560,meta39559__$1){
var self__ = this;
var _39560__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39558(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.afn,self__.late_then,self__.late_else,meta39559__$1));
}));

(com.rpl.specter.t_com$rpl$specter39558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39560){
var self__ = this;
var _39560__$1 = this;
return self__.meta39559;
}));

(com.rpl.specter.t_com$rpl$specter39558.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39558.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39558.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta39559","meta39559",1043705742,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39558.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39558.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39558");

(com.rpl.specter.t_com$rpl$specter39558.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39558");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39558.
 */
com.rpl.specter.__GT_t_com$rpl$specter39558 = (function com$rpl$specter$__GT_t_com$rpl$specter39558(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta39559){
return (new com.rpl.specter.t_com$rpl$specter39558(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta39559));
});

}

return (new com.rpl.specter.t_com$rpl$specter39558(cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
} else {
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39567 = (function (cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,meta39568){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta39568 = meta39568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39569,meta39568__$1){
var self__ = this;
var _39569__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39567(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.late_cond,self__.late_then,self__.late_else,meta39568__$1));
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39569){
var self__ = this;
var _39569__$1 = this;
return self__.meta39568;
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,(function (p1__39556_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__39556_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39567.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,(function (p1__39557_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__39557_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter39567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta39568","meta39568",227341902,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39567");

(com.rpl.specter.t_com$rpl$specter39567.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39567");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39567.
 */
com.rpl.specter.__GT_t_com$rpl$specter39567 = (function com$rpl$specter$__GT_t_com$rpl$specter39567(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta39568){
return (new com.rpl.specter.t_com$rpl$specter39567(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta39568));
});

}

return (new com.rpl.specter.t_com$rpl$specter39567(cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
}
});
G__39576 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__39576__2.call(this,cond_p,then_path);
case 3:
return G__39576__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39576.cljs$core$IFn$_invoke$arity$2 = G__39576__2;
G__39576.cljs$core$IFn$_invoke$arity$3 = G__39576__3;
return G__39576;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39593__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,(function (p,p__39589){
var vec__39590 = p__39589;
var tester = cljs.core.nth.call(null,vec__39590,(0),null);
var apath = cljs.core.nth.call(null,vec__39590,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
}),com.rpl.specter.STOP,pairs);
};
var G__39593 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__39594__i = 0, G__39594__a = new Array(arguments.length -  0);
while (G__39594__i < G__39594__a.length) {G__39594__a[G__39594__i] = arguments[G__39594__i + 0]; ++G__39594__i;}
  conds = new cljs.core.IndexedSeq(G__39594__a,0,null);
} 
return G__39593__delegate.call(this,conds);};
G__39593.cljs$lang$maxFixedArity = 0;
G__39593.cljs$lang$applyTo = (function (arglist__39595){
var conds = cljs.core.seq(arglist__39595);
return G__39593__delegate(conds);
});
G__39593.cljs$core$IFn$_invoke$arity$variadic = G__39593__delegate;
return G__39593;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__39603 = null;
var G__39603__0 = (function (){
return com.rpl.specter.STAY;
});
var G__39603__1 = (function (path){
return path;
});
var G__39603__2 = (function (path1,path2){
var builder__38018__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter39596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter39596 = (function (path1,path2,late1,late2,meta39597){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta39597 = meta39597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter39596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39598,meta39597__$1){
var self__ = this;
var _39598__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter39596(self__.path1,self__.path2,self__.late1,self__.late2,meta39597__$1));
}));

(com.rpl.specter.t_com$rpl$specter39596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39598){
var self__ = this;
var _39598__$1 = this;
return self__.meta39597;
}));

(com.rpl.specter.t_com$rpl$specter39596.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter39596.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter39596.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter39596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta39597","meta39597",692498089,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter39596.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter39596.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter39596");

(com.rpl.specter.t_com$rpl$specter39596.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter39596");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter39596.
 */
com.rpl.specter.__GT_t_com$rpl$specter39596 = (function com$rpl$specter$__GT_t_com$rpl$specter39596(path1__$1,path2__$1,late1__$1,late2__$1,meta39597){
return (new com.rpl.specter.t_com$rpl$specter39596(path1__$1,path2__$1,late1__$1,late2__$1,meta39597));
});

}

return (new com.rpl.specter.t_com$rpl$specter39596(path1,path2,late1,late2,null));
}));
var curr_params__38019__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__38019__auto__)){
return cljs.core.apply.call(null,builder__38018__auto__,curr_params__38019__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__38018__auto__,curr_params__38019__auto__,null);
}
});
var G__39603__3 = (function() { 
var G__39604__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__39604 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__39605__i = 0, G__39605__a = new Array(arguments.length -  2);
while (G__39605__i < G__39605__a.length) {G__39605__a[G__39605__i] = arguments[G__39605__i + 2]; ++G__39605__i;}
  paths = new cljs.core.IndexedSeq(G__39605__a,0,null);
} 
return G__39604__delegate.call(this,path1,path2,paths);};
G__39604.cljs$lang$maxFixedArity = 2;
G__39604.cljs$lang$applyTo = (function (arglist__39606){
var path1 = cljs.core.first(arglist__39606);
arglist__39606 = cljs.core.next(arglist__39606);
var path2 = cljs.core.first(arglist__39606);
var paths = cljs.core.rest(arglist__39606);
return G__39604__delegate(path1,path2,paths);
});
G__39604.cljs$core$IFn$_invoke$arity$variadic = G__39604__delegate;
return G__39604;
})()
;
G__39603 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__39603__0.call(this);
case 1:
return G__39603__1.call(this,path1);
case 2:
return G__39603__2.call(this,path1,path2);
default:
var G__39607 = null;
if (arguments.length > 2) {
var G__39608__i = 0, G__39608__a = new Array(arguments.length -  2);
while (G__39608__i < G__39608__a.length) {G__39608__a[G__39608__i] = arguments[G__39608__i + 2]; ++G__39608__i;}
G__39607 = new cljs.core.IndexedSeq(G__39608__a,0,null);
}
return G__39603__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__39607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39603.cljs$lang$maxFixedArity = 2;
G__39603.cljs$lang$applyTo = G__39603__3.cljs$lang$applyTo;
G__39603.cljs$core$IFn$_invoke$arity$0 = G__39603__0;
G__39603.cljs$core$IFn$_invoke$arity$1 = G__39603__1;
G__39603.cljs$core$IFn$_invoke$arity$2 = G__39603__2;
G__39603.cljs$core$IFn$_invoke$arity$variadic = G__39603__3.cljs$core$IFn$_invoke$arity$variadic;
return G__39603;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39609__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__39609 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39610__i = 0, G__39610__a = new Array(arguments.length -  0);
while (G__39610__i < G__39610__a.length) {G__39610__a[G__39610__i] = arguments[G__39610__i + 0]; ++G__39610__i;}
  path = new cljs.core.IndexedSeq(G__39610__a,0,null);
} 
return G__39609__delegate.call(this,path);};
G__39609.cljs$lang$maxFixedArity = 0;
G__39609.cljs$lang$applyTo = (function (arglist__39611){
var path = cljs.core.seq(arglist__39611);
return G__39609__delegate(path);
});
G__39609.cljs$core$IFn$_invoke$arity$variadic = G__39609__delegate;
return G__39609;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39612__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__39612 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39613__i = 0, G__39613__a = new Array(arguments.length -  0);
while (G__39613__i < G__39613__a.length) {G__39613__a[G__39613__i] = arguments[G__39613__i + 0]; ++G__39613__i;}
  path = new cljs.core.IndexedSeq(G__39613__a,0,null);
} 
return G__39612__delegate.call(this,path);};
G__39612.cljs$lang$maxFixedArity = 0;
G__39612.cljs$lang$applyTo = (function (arglist__39614){
var path = cljs.core.seq(arglist__39614);
return G__39612__delegate(path);
});
G__39612.cljs$core$IFn$_invoke$arity$variadic = G__39612__delegate;
return G__39612;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39615;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39616 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2133),(2133),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache39615 = info39616;

return info39616;
})():info__38025__auto__);
var precompiled39617 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39617.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled39617;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__38025__auto__ = com.rpl.specter.pathcache39618;
var info__38025__auto____$1 = (((info__38025__auto__ == null))?(function (){var info39619 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2133),(2133),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache39618 = info39619;

return info39619;
})():info__38025__auto__);
var precompiled39620 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__38025__auto____$1);
var dynamic_QMARK___38026__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__38025__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___38026__auto__)){
return precompiled39620.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled39620;
}
})());

return p;
}));
var empty__GT_NONE_39629 = com.rpl.specter.if_path.call(null,cljs.core.empty_QMARK_,com.rpl.specter.terminal_val.call(null,com.rpl.specter.NONE));
var compact_STAR__39630 = (function (nav){
return com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_39629);
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__39631__delegate = function (path){
return cljs.core.map.call(null,compact_STAR__39630,path);
};
var G__39631 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39632__i = 0, G__39632__a = new Array(arguments.length -  0);
while (G__39632__i < G__39632__a.length) {G__39632__a[G__39632__i] = arguments[G__39632__i + 0]; ++G__39632__i;}
  path = new cljs.core.IndexedSeq(G__39632__a,0,null);
} 
return G__39631__delegate.call(this,path);};
G__39631.cljs$lang$maxFixedArity = 0;
G__39631.cljs$lang$applyTo = (function (arglist__39633){
var path = cljs.core.seq(arglist__39633);
return G__39631__delegate(path);
});
G__39631.cljs$core$IFn$_invoke$arity$variadic = G__39631__delegate;
return G__39631;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1637533438903
