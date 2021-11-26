// Compiled by ClojureScript 1.10.773 {}
goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.call(null,compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return (!(com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,compiled_path,vals,structure)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__35244__auto__,e){
var ret__35245__auto__ = next_fn.call(null,e);
if((ret__35245__auto__ === com.rpl.specter.impl.NONE)){
return curr__35244__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__35245__auto__)){
return cljs.core.reduced.call(null,ret__35245__auto__);
} else {
return ret__35245__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

var com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_39010 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,next_fn);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.all_transform["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
});
com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_39010.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return (((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count.call(null,newkv) < (2))));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return (!((v === com.rpl.specter.impl.NONE)));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.call(null,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.call(null,(function (res,kv){
return cljs.core.conj.call(null,res,next_fn.call(null,kv));
}),structure,structure);
});
goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"null",true);

goog.object.set(com.rpl.specter.navs.all_transform,"null",(function (structure,next_fn){
return null;
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = next_fn.call(null,cljs.core.key.call(null,structure__$1));
var newv = next_fn.call(null,cljs.core.val.call(null,structure__$1));
return cljs.core.__GT_MapEntry.call(null,newk,newv,null);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.empty.call(null,structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"_",true);

goog.object.set(com.rpl.specter.navs.all_transform,"_",(function (structure,next_fn){
if(cljs.core.record_QMARK_.call(null,structure)){
return com.rpl.specter.navs.all_transform_record.call(null,structure,next_fn);
} else {
var empty_structure = cljs.core.empty.call(null,structure);
if(((cljs.core.list_QMARK_.call(null,empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_.call(null,empty_structure)))))){
return com.rpl.specter.navs.all_transform_list.call(null,structure,next_fn);
} else {
if(cljs.core.map_QMARK_.call(null,structure)){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),empty_structure,structure);
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

var com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_39031 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,next_fn);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.map_vals_transform["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-vals-transform",structure);
}
}
});
com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_39031.call(null,structure,next_fn);
}
});

var com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_39032 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,next_fn);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.map_keys_transform["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-keys-transform",structure);
}
}
});
com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_39032.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),empty_map,structure);
});
goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"null",true);

goog.object.set(com.rpl.specter.navs.map_vals_transform,"null",(function (structure,next_fn){
return null;
}));

goog.object.set(com.rpl.specter.navs.map_keys_transform,"null",(function (structure,next_fn){
return null;
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,k,newv);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,newk,v);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"_",true);

goog.object.set(com.rpl.specter.navs.map_vals_transform,"_",(function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),cljs.core.empty.call(null,structure),structure);
}));

goog.object.set(com.rpl.specter.navs.map_keys_transform,"_",(function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),cljs.core.empty.call(null,structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
return next_fn.call(null,((typeof structure === 'string')?cljs.core.subs.call(null,structure,start,end):cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end)));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_.call(null,path)){
return path;
} else {
if(((cljs.core.coll_QMARK_.call(null,path)) && (cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.call(null,(function (combined,afn){
return (function (structure){
var and__4115__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__4115__auto__)){
return afn.call(null,structure);
} else {
return and__4115__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

var com$rpl$specter$navs$AddExtremes$append_all$dyn_39053 = (function (structure,elements){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,elements);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.append_all["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-all",structure);
}
}
});
com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$append_all$dyn_39053.call(null,structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_all$dyn_39054 = (function (structure,elements){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,elements);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.prepend_all["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
});
com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_all$dyn_39054.call(null,structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$append_one$dyn_39055 = (function (structure,elem){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,elem);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.append_one["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-one",structure);
}
}
});
com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$append_one$dyn_39055.call(null,structure,elem);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_one$dyn_39056 = (function (structure,elem){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,structure,elem);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.prepend_one["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-one",structure);
}
}
});
com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_one$dyn_39056.call(null,structure,elem);
}
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"null",true);

goog.object.set(com.rpl.specter.navs.append_all,"null",(function (_,elements){
return elements;
}));

goog.object.set(com.rpl.specter.navs.prepend_all,"null",(function (_,elements){
return elements;
}));

goog.object.set(com.rpl.specter.navs.append_one,"null",(function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

goog.object.set(com.rpl.specter.navs.prepend_one,"null",(function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.call(null,structure__$1,elem);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

goog.object.set(com.rpl.specter.navs.AddExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.append_all,"_",(function (structure,elements){
return cljs.core.concat.call(null,structure,elements);
}));

goog.object.set(com.rpl.specter.navs.prepend_all,"_",(function (structure,elements){
return cljs.core.concat.call(null,elements,structure);
}));

goog.object.set(com.rpl.specter.navs.append_one,"_",(function (structure,elem){
return cljs.core.concat.call(null,structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
}));

goog.object.set(com.rpl.specter.navs.prepend_one,"_",(function (structure,elem){
return cljs.core.cons.call(null,elem,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

var com$rpl$specter$navs$UpdateExtremes$update_first$dyn_39071 = (function (s,afn){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,s,afn);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.update_first["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-first",s);
}
}
});
com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_first$dyn_39071.call(null,s,afn);
}
});

var com$rpl$specter$navs$UpdateExtremes$update_last$dyn_39072 = (function (s,afn){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,s,afn);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.update_last["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-last",s);
}
}
});
com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_last$dyn_39072.call(null,s,afn);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

var com$rpl$specter$navs$GetExtremes$get_first$dyn_39076 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,s);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.get_first["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-first",s);
}
}
});
com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_first$dyn_39076.call(null,s);
}
});

var com$rpl$specter$navs$GetExtremes$get_last$dyn_39080 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,s);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.get_last["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-last",s);
}
}
});
com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_last$dyn_39080.call(null,s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

var com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_39081 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,s);
} else {
var m__4426__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"FastEmpty.fast-empty?",s);
}
}
});
com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
return com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_39081.call(null,s);
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj.call(null,(function (getter,updater){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs39085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs39085 = (function (getter,updater,meta39086){
this.getter = getter;
this.updater = updater;
this.meta39086 = meta39086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs39085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39087,meta39086__$1){
var self__ = this;
var _39087__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39085(self__.getter,self__.updater,meta39086__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39087){
var self__ = this;
var _39087__$1 = this;
return self__.meta39086;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,self__.getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37218__auto__,vals__37219__auto__,structure,next_fn__37220__auto__){
var self__ = this;
var this__37218__auto____$1 = this;
var next_fn = (function (s__37221__auto__){
return next_fn__37220__auto__.call(null,vals__37219__auto__,s__37221__auto__);
});
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return self__.updater.call(null,structure,next_fn);
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta39086","meta39086",-418440896,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs39085");

(com.rpl.specter.navs.t_com$rpl$specter$navs39085.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs39085");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs39085.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs39085 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs39085(getter__$1,updater__$1,meta39086){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39085(getter__$1,updater__$1,meta39086));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs39085(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = afn.call(null,cljs.core.first.call(null,l));
var restl = cljs.core.rest.call(null,l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons.call(null,newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = afn.call(null,cljs.core.last.call(null,l));
var bl = cljs.core.butlast.call(null,l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.call(null,bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count.call(null,v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count.call(null,v);
});
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.call(null,v__$1,(0));
var newv = afn.call(null,val);
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.call(null,v__$1,(1));
} else {
return cljs.core.assoc.call(null,v__$1,(0),newv);
}
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count.call(null,v__$1) | (0));
var G__39094 = c;
switch (G__39094) {
case (1):
var vec__39095 = v__$1;
var e = cljs.core.nth.call(null,vec__39095,(0),null);
var newe = afn.call(null,e);
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__39098 = v__$1;
var e1 = cljs.core.nth.call(null,vec__39098,(0),null);
var e2 = cljs.core.nth.call(null,vec__39098,(1),null);
var newe = afn.call(null,e2);
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = afn.call(null,cljs.core.nth.call(null,v__$1,i));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop.call(null,v__$1);
} else {
return cljs.core.assoc.call(null,v__$1,i,newe);
}

}
}));

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

goog.object.set(com.rpl.specter.navs.update_first,"string",(function (s,afn){
var rests = cljs.core.subs.call(null,s,(1),cljs.core.count.call(null,s));
var newb = afn.call(null,cljs.core.nth.call(null,s,(0)));
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),rests].join('');
}
}));

goog.object.set(com.rpl.specter.navs.update_last,"string",(function (s,afn){
var last_idx = (cljs.core.count.call(null,s) - (1));
var newl = afn.call(null,cljs.core.nth.call(null,s,last_idx));
var begins = cljs.core.subs.call(null,s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [begins,cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry.call(null,afn.call(null,cljs.core.key.call(null,e__$1)),cljs.core.val.call(null,e__$1),null);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry.call(null,cljs.core.key.call(null,e__$1),afn.call(null,cljs.core.val.call(null,e__$1)),null);
}));

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.update_first,"_",(function (l,val){
return com.rpl.specter.navs.update_first_list.call(null,l,val);
}));

goog.object.set(com.rpl.specter.navs.update_last,"_",(function (l,val){
return com.rpl.specter.navs.update_last_list.call(null,l,val);
}));
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.call(null,v__$1,(0));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek.call(null,v__$1);
}));

goog.object.set(com.rpl.specter.navs.GetExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.get_first,"_",(function (s){
return cljs.core.first.call(null,s);
}));

goog.object.set(com.rpl.specter.navs.get_last,"_",(function (s){
return cljs.core.last.call(null,s);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.key.call(null,e__$1);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.val.call(null,e__$1);
}));

goog.object.set(com.rpl.specter.navs.GetExtremes,"string",true);

goog.object.set(com.rpl.specter.navs.get_first,"string",(function (s){
return cljs.core.nth.call(null,s,(0));
}));

goog.object.set(com.rpl.specter.navs.get_last,"string",(function (s){
return cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)));
}));
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

goog.object.set(com.rpl.specter.navs.fast_empty_QMARK_,"null",(function (_){
return true;
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.vec_count.call(null,v__$1));
}));

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.transient_vec_count.call(null,v__$1));
}));

goog.object.set(com.rpl.specter.navs.FastEmpty,"_",true);

goog.object.set(com.rpl.specter.navs.fast_empty_QMARK_,"_",(function (s){
return cljs.core.empty_QMARK_.call(null,s);
}));
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = next_fn.call(null,vals,cljs.core.get.call(null,structure,key));
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_.call(null,structure)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,key,(key + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.dissoc.call(null,structure,key);
}
} else {
return cljs.core.assoc.call(null,structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs39114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs39114 = (function (key,meta39115){
this.key = key;
this.meta39115 = meta39115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs39114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39116,meta39115__$1){
var self__ = this;
var _39116__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39114(self__.key,meta39115__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39116){
var self__ = this;
var _39116__$1 = this;
return self__.meta39115;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.key));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.key,next_fn);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta39115","meta39115",1334495533,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs39114");

(com.rpl.specter.navs.t_com$rpl$specter$navs39114.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs39114");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs39114.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs39114 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs39114(key__$1,meta39115){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39114(key__$1,meta39115));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs39114(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs39123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs39123 = (function (k,meta39124){
this.k = k;
this.meta39124 = meta39124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs39123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39125,meta39124__$1){
var self__ = this;
var _39125__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39123(self__.k,meta39124__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39125){
var self__ = this;
var _39125__$1 = this;
return self__.meta39124;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.k));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.k,next_fn);
} else {
return structure;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta39124","meta39124",-218183766,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs39123");

(com.rpl.specter.navs.t_com$rpl$specter$navs39123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs39123");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs39123.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs39123 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs39123(k__$1,meta39124){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39123(k__$1,meta39124));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs39123(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs39129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs39129 = (function (i,meta39130){
this.i = i;
this.meta39130 = meta39130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs39129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39131,meta39130__$1){
var self__ = this;
var _39131__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39129(self__.i,meta39130__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39131){
var self__ = this;
var _39131__$1 = this;
return self__.meta39130;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,structure)){
var newv = next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.assoc.call(null,structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),(function (p__39135){
var vec__39136 = p__39135;
var e = cljs.core.nth.call(null,vec__39136,(0),null);
var v = next_fn.call(null,vals,e);
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta39130","meta39130",907499075,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs39129");

(com.rpl.specter.navs.t_com$rpl$specter$navs39129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs39129");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs39129.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs39129 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs39129(i__$1,meta39130){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs39129(i__$1,meta39130));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs39129(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k39140,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__39150 = k39140;
var G__39150__$1 = (((G__39150 instanceof cljs.core.Keyword))?G__39150.fqn:null);
switch (G__39150__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39140,else__4383__auto__);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__39151){
var vec__39152 = p__39151;
var k__4403__auto__ = cljs.core.nth.call(null,vec__39152,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__39152,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39139){
var self__ = this;
var G__39139__$1 = this;
return (new cljs.core.RecordIter((0),G__39139__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39141,other39142){
var self__ = this;
var this39141__$1 = this;
return (((!((other39142 == null)))) && ((this39141__$1.constructor === other39142.constructor)) && (cljs.core._EQ_.call(null,this39141__$1.end_fn,other39142.end_fn)) && (cljs.core._EQ_.call(null,this39141__$1.__extmap,other39142.__extmap)));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__39139){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__39163 = cljs.core.keyword_identical_QMARK_;
var expr__39164 = k__4388__auto__;
if(cljs.core.truth_(pred__39163.call(null,new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__39164))){
return (new com.rpl.specter.navs.SrangeEndFunction(G__39139,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__39139),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__39139){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__39139,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true);

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"com.rpl.specter.navs/SrangeEndFunction");
}));

/**
 * Positional factory function for com.rpl.specter.navs/SrangeEndFunction.
 */
com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.navs/SrangeEndFunction, taking a map of keywords to field values.
 */
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__39146){
var extmap__4419__auto__ = (function (){var G__39169 = cljs.core.dissoc.call(null,G__39146,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_.call(null,G__39146)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39169);
} else {
return G__39169;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__39146),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
return end_fn.end_fn.call(null,structure,start);
} else {
return end_fn.call(null,structure);
}
});

//# sourceMappingURL=navs.js.map?rel=1637533438428
