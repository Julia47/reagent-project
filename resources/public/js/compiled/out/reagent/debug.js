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
var G__21332__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21333__i = 0, G__21333__a = new Array(arguments.length -  0);
while (G__21333__i < G__21333__a.length) {G__21333__a[G__21333__i] = arguments[G__21333__i + 0]; ++G__21333__i;}
  args = new cljs.core.IndexedSeq(G__21333__a,0,null);
} 
return G__21332__delegate.call(this,args);};
G__21332.cljs$lang$maxFixedArity = 0;
G__21332.cljs$lang$applyTo = (function (arglist__21334){
var args = cljs.core.seq(arglist__21334);
return G__21332__delegate(args);
});
G__21332.cljs$core$IFn$_invoke$arity$variadic = G__21332__delegate;
return G__21332;
})()
);

(o.error = (function() { 
var G__21335__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21336__i = 0, G__21336__a = new Array(arguments.length -  0);
while (G__21336__i < G__21336__a.length) {G__21336__a[G__21336__i] = arguments[G__21336__i + 0]; ++G__21336__i;}
  args = new cljs.core.IndexedSeq(G__21336__a,0,null);
} 
return G__21335__delegate.call(this,args);};
G__21335.cljs$lang$maxFixedArity = 0;
G__21335.cljs$lang$applyTo = (function (arglist__21337){
var args = cljs.core.seq(arglist__21337);
return G__21335__delegate(args);
});
G__21335.cljs$core$IFn$_invoke$arity$variadic = G__21335__delegate;
return G__21335;
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

//# sourceMappingURL=debug.js.map?rel=1637141747875
