// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36904__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36905__i = 0, G__36905__a = new Array(arguments.length -  0);
while (G__36905__i < G__36905__a.length) {G__36905__a[G__36905__i] = arguments[G__36905__i + 0]; ++G__36905__i;}
  args = new cljs.core.IndexedSeq(G__36905__a,0,null);
} 
return G__36904__delegate.call(this,args);};
G__36904.cljs$lang$maxFixedArity = 0;
G__36904.cljs$lang$applyTo = (function (arglist__36906){
var args = cljs.core.seq(arglist__36906);
return G__36904__delegate(args);
});
G__36904.cljs$core$IFn$_invoke$arity$variadic = G__36904__delegate;
return G__36904;
})()
);

(o.error = (function() { 
var G__36907__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36908__i = 0, G__36908__a = new Array(arguments.length -  0);
while (G__36908__i < G__36908__a.length) {G__36908__a[G__36908__i] = arguments[G__36908__i + 0]; ++G__36908__i;}
  args = new cljs.core.IndexedSeq(G__36908__a,0,null);
} 
return G__36907__delegate.call(this,args);};
G__36907.cljs$lang$maxFixedArity = 0;
G__36907.cljs$lang$applyTo = (function (arglist__36909){
var args = cljs.core.seq(arglist__36909);
return G__36907__delegate(args);
});
G__36907.cljs$core$IFn$_invoke$arity$variadic = G__36907__delegate;
return G__36907;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1637933613769
