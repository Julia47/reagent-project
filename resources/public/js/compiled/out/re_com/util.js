// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function re_com$util$fmap_$_iter__40438(s__40439){
return (new cljs.core.LazySeq(null,(function (){
var s__40439__$1 = s__40439;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__40439__$1);
if(temp__5720__auto__){
var s__40439__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40439__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__40439__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__40441 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__40440 = (0);
while(true){
if((i__40440 < size__4528__auto__)){
var vec__40442 = cljs.core._nth.call(null,c__4527__auto__,i__40440);
var k = cljs.core.nth.call(null,vec__40442,(0),null);
var val = cljs.core.nth.call(null,vec__40442,(1),null);
cljs.core.chunk_append.call(null,b__40441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__40450 = (i__40440 + (1));
i__40440 = G__40450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40441),re_com$util$fmap_$_iter__40438.call(null,cljs.core.chunk_rest.call(null,s__40439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40441),null);
}
} else {
var vec__40445 = cljs.core.first.call(null,s__40439__$2);
var k = cljs.core.nth.call(null,vec__40445,(0),null);
var val = cljs.core.nth.call(null,vec__40445,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__40438.call(null,cljs.core.rest.call(null,s__40439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40452 = arguments.length;
var i__4737__auto___40453 = (0);
while(true){
if((i__4737__auto___40453 < len__4736__auto___40452)){
args__4742__auto__.push((arguments[i__4737__auto___40453]));

var G__40454 = (i__4737__auto___40453 + (1));
i__4737__auto___40453 = G__40454;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq40451){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40451));
}));

/**
 * Only assoc-in if no value exists at ks
 */
re_com.util.assoc_in_if_empty = (function re_com$util$assoc_in_if_empty(m,ks,v){
return cljs.core.assoc_in.call(null,m,ks,cljs.core.get_in.call(null,m,ks,v));
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40466 = arguments.length;
var i__4737__auto___40467 = (0);
while(true){
if((i__4737__auto___40467 < len__4736__auto___40466)){
args__4742__auto__.push((arguments[i__4737__auto___40467]));

var G__40469 = (i__4737__auto___40467 + (1));
i__4737__auto___40467 = G__40469;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq40462){
var G__40463 = cljs.core.first.call(null,seq40462);
var seq40462__$1 = cljs.core.next.call(null,seq40462);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40463,seq40462__$1);
}));

/**
 * takes n numbers (could also be strings) and converts them to a space separated px string
 *   e.g. (px-n 10 2 30 4) => '10px 2px 30px 4px' for use in :padding, :margin etc.
 *   Most useful when the args are calculations
 *   e.g. (px-n top-margin (inc h-width) (- top-margin 5) (dec h-width))
 *   Note: Doesn't support :negative like px above but it will work with negative numbers
 */
re_com.util.px_n = (function re_com$util$px_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40472 = arguments.length;
var i__4737__auto___40473 = (0);
while(true){
if((i__4737__auto___40473 < len__4736__auto___40472)){
args__4742__auto__.push((arguments[i__4737__auto___40473]));

var G__40474 = (i__4737__auto___40473 + (1));
i__4737__auto___40473 = G__40474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__40470_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40470_SHARP_),"px"].join('');
}),vals));
}));

(re_com.util.px_n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.px_n.cljs$lang$applyTo = (function (seq40471){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40471));
}));

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
re_com.util.pluralize = (function re_com$util$pluralize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40482 = arguments.length;
var i__4737__auto___40483 = (0);
while(true){
if((i__4737__auto___40483 < len__4736__auto___40482)){
args__4742__auto__.push((arguments[i__4737__auto___40483]));

var G__40484 = (i__4737__auto___40483 + (1));
i__4737__auto___40483 = G__40484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__40478){
var vec__40479 = p__40478;
var plural = cljs.core.nth.call(null,vec__40479,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__4126__auto__ = plural;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(re_com.util.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.pluralize.cljs$lang$applyTo = (function (seq40475){
var G__40476 = cljs.core.first.call(null,seq40475);
var seq40475__$1 = cljs.core.next.call(null,seq40475);
var G__40477 = cljs.core.first.call(null,seq40475__$1);
var seq40475__$2 = cljs.core.next.call(null,seq40475__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40476,G__40477,seq40475__$2);
}));

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40494 = arguments.length;
var i__4737__auto___40495 = (0);
while(true){
if((i__4737__auto___40495 < len__4736__auto___40494)){
args__4742__auto__.push((arguments[i__4737__auto___40495]));

var G__40496 = (i__4737__auto___40495 + (1));
i__4737__auto___40495 = G__40496;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__40491){
var map__40492 = p__40491;
var map__40492__$1 = (((((!((map__40492 == null))))?(((((map__40492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40492):map__40492);
var id_fn = cljs.core.get.call(null,map__40492__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq40488){
var G__40489 = cljs.core.first.call(null,seq40488);
var seq40488__$1 = cljs.core.next.call(null,seq40488);
var G__40490 = cljs.core.first.call(null,seq40488__$1);
var seq40488__$2 = cljs.core.next.call(null,seq40488__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40489,G__40490,seq40488__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40507 = arguments.length;
var i__4737__auto___40508 = (0);
while(true){
if((i__4737__auto___40508 < len__4736__auto___40507)){
args__4742__auto__.push((arguments[i__4737__auto___40508]));

var G__40509 = (i__4737__auto___40508 + (1));
i__4737__auto___40508 = G__40509;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__40504){
var map__40505 = p__40504;
var map__40505__$1 = (((((!((map__40505 == null))))?(((((map__40505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40505):map__40505);
var id_fn = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__40497_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__40497_SHARP_),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq40498){
var G__40499 = cljs.core.first.call(null,seq40498);
var seq40498__$1 = cljs.core.next.call(null,seq40498);
var G__40501 = cljs.core.first.call(null,seq40498__$1);
var seq40498__$2 = cljs.core.next.call(null,seq40498__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40499,G__40501,seq40498__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40517 = arguments.length;
var i__4737__auto___40518 = (0);
while(true){
if((i__4737__auto___40518 < len__4736__auto___40517)){
args__4742__auto__.push((arguments[i__4737__auto___40518]));

var G__40519 = (i__4737__auto___40518 + (1));
i__4737__auto___40518 = G__40519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__40514){
var map__40515 = p__40514;
var map__40515__$1 = (((((!((map__40515 == null))))?(((((map__40515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40515):map__40515);
var id_fn = cljs.core.get.call(null,map__40515__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,(function (p1__40510_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__40510_SHARP_),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq40511){
var G__40512 = cljs.core.first.call(null,seq40511);
var seq40511__$1 = cljs.core.next.call(null,seq40511);
var G__40513 = cljs.core.first.call(null,seq40511__$1);
var seq40511__$2 = cljs.core.next.call(null,seq40511__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40512,G__40513,seq40511__$2);
}));

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__40523 = current_node.parentNode;
var G__40524 = (sum_scroll_left + current_node.scrollLeft);
var G__40525 = (sum_scroll_top + current_node.scrollTop);
current_node = G__40523;
sum_scroll_left = G__40524;
sum_scroll_top = G__40525;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1637533439354
