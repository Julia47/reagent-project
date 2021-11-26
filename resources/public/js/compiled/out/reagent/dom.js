// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37850 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37851 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37851);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__37852 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37853 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37853);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37852);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37850);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37855 = arguments.length;
switch (G__37855) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__37856 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__37856,(0),null);
var callback = cljs.core.nth.call(null,vec__37856,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__37860_37876 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__37861_37877 = null;
var count__37862_37878 = (0);
var i__37863_37879 = (0);
while(true){
if((i__37863_37879 < count__37862_37878)){
var vec__37870_37880 = cljs.core._nth.call(null,chunk__37861_37877,i__37863_37879);
var container_37881 = cljs.core.nth.call(null,vec__37870_37880,(0),null);
var comp_37882 = cljs.core.nth.call(null,vec__37870_37880,(1),null);
reagent.dom.re_render_component.call(null,comp_37882,container_37881);


var G__37883 = seq__37860_37876;
var G__37884 = chunk__37861_37877;
var G__37885 = count__37862_37878;
var G__37886 = (i__37863_37879 + (1));
seq__37860_37876 = G__37883;
chunk__37861_37877 = G__37884;
count__37862_37878 = G__37885;
i__37863_37879 = G__37886;
continue;
} else {
var temp__5720__auto___37887 = cljs.core.seq.call(null,seq__37860_37876);
if(temp__5720__auto___37887){
var seq__37860_37888__$1 = temp__5720__auto___37887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37860_37888__$1)){
var c__4556__auto___37889 = cljs.core.chunk_first.call(null,seq__37860_37888__$1);
var G__37890 = cljs.core.chunk_rest.call(null,seq__37860_37888__$1);
var G__37891 = c__4556__auto___37889;
var G__37892 = cljs.core.count.call(null,c__4556__auto___37889);
var G__37893 = (0);
seq__37860_37876 = G__37890;
chunk__37861_37877 = G__37891;
count__37862_37878 = G__37892;
i__37863_37879 = G__37893;
continue;
} else {
var vec__37873_37894 = cljs.core.first.call(null,seq__37860_37888__$1);
var container_37895 = cljs.core.nth.call(null,vec__37873_37894,(0),null);
var comp_37896 = cljs.core.nth.call(null,vec__37873_37894,(1),null);
reagent.dom.re_render_component.call(null,comp_37896,container_37895);


var G__37897 = cljs.core.next.call(null,seq__37860_37888__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37860_37876 = G__37897;
chunk__37861_37877 = G__37898;
count__37862_37878 = G__37899;
i__37863_37879 = G__37900;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1637933614542
