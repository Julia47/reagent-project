// Compiled by ClojureScript 1.10.773 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_35335 = (function (_,pred,acc){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._collect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_,pred,acc);
} else {
var m__4426__auto__ = (datascript.parser._collect["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_35335.call(null,_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_35336 = (function (_,acc){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_,acc);
} else {
var m__4426__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_35336.call(null,_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_35337 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._postwalk[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_,f);
} else {
var m__4426__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_35337.call(null,_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__35348_SHARP_,p2__35347_SHARP_){
var temp__5718__auto__ = parse_el.call(null,p2__35347_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var parsed = temp__5718__auto__;
return cljs.core.conj.call(null,p1__35348_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__35350 = arguments.length;
switch (G__35350) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.call(null,pred,form,cljs.core.PersistentVector.EMPTY);
}));

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc,form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (acc__$1,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
}));

(datascript.parser.collect.cljs$lang$maxFixedArity = 3);

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4126__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__35356){
var vec__35357 = p__35356;
var k = cljs.core.nth.call(null,vec__35357,(0),null);
var v = cljs.core.nth.call(null,vec__35357,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__35353_SHARP_){
return datascript.parser.postwalk.call(null,p1__35353_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__35354_SHARP_){
return datascript.parser.postwalk.call(null,p1__35354_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4126__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return obj;
}
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35364,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35368 = k35364;
switch (G__35368) {
default:
return cljs.core.get.call(null,self__.__extmap,k35364,else__4383__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35369){
var vec__35370 = p__35369;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35370,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35370,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Placeholder{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35363){
var self__ = this;
var G__35363__$1 = this;
return (new cljs.core.RecordIter((0),G__35363__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35365,other35366){
var self__ = this;
var this35365__$1 = this;
return (((!((other35366 == null)))) && ((this35365__$1.constructor === other35366.constructor)) && (cljs.core._EQ_.call(null,this35365__$1.__extmap,other35366.__extmap)));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35363){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35373 = cljs.core.keyword_identical_QMARK_;
var expr__35374 = k__4388__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35363),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35363){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Placeholder(G__35363,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35360){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35361,acc35362){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35362;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35362){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35362;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Placeholder");
}));

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__35367){
var extmap__4419__auto__ = (function (){var G__35376 = cljs.core.dissoc.call(null,G__35367);
if(cljs.core.record_QMARK_.call(null,G__35367)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35376);
} else {
return G__35376;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35382,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35386 = k35382;
var G__35386__$1 = (((G__35386 instanceof cljs.core.Keyword))?G__35386.fqn:null);
switch (G__35386__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35382,else__4383__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35387){
var vec__35388 = p__35387;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35388,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35388,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Variable{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35381){
var self__ = this;
var G__35381__$1 = this;
return (new cljs.core.RecordIter((0),G__35381__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35383,other35384){
var self__ = this;
var this35383__$1 = this;
return (((!((other35384 == null)))) && ((this35383__$1.constructor === other35384.constructor)) && (cljs.core._EQ_.call(null,this35383__$1.symbol,other35384.symbol)) && (cljs.core._EQ_.call(null,this35383__$1.__extmap,other35384.__extmap)));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35381){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35391 = cljs.core.keyword_identical_QMARK_;
var expr__35392 = k__4388__auto__;
if(cljs.core.truth_(pred__35391.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35392))){
return (new datascript.parser.Variable(G__35381,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35381),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35381){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__35381,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35378){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f35378),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35379,acc35380){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35379,self__.symbol,acc35380);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35380){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35380,self__.symbol);
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Variable");
}));

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__35385){
var extmap__4419__auto__ = (function (){var G__35394 = cljs.core.dissoc.call(null,G__35385,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_.call(null,G__35385)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35394);
} else {
return G__35394;
}
})();
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35385),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35400,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35404 = k35400;
var G__35404__$1 = (((G__35404 instanceof cljs.core.Keyword))?G__35404.fqn:null);
switch (G__35404__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35400,else__4383__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35405){
var vec__35406 = p__35405;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35406,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35406,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.SrcVar{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35399){
var self__ = this;
var G__35399__$1 = this;
return (new cljs.core.RecordIter((0),G__35399__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35401,other35402){
var self__ = this;
var this35401__$1 = this;
return (((!((other35402 == null)))) && ((this35401__$1.constructor === other35402.constructor)) && (cljs.core._EQ_.call(null,this35401__$1.symbol,other35402.symbol)) && (cljs.core._EQ_.call(null,this35401__$1.__extmap,other35402.__extmap)));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35399){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35409 = cljs.core.keyword_identical_QMARK_;
var expr__35410 = k__4388__auto__;
if(cljs.core.truth_(pred__35409.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35410))){
return (new datascript.parser.SrcVar(G__35399,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35399),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35399){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__35399,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35396){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f35396),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35397,acc35398){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35397,self__.symbol,acc35398);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35398){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35398,self__.symbol);
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/SrcVar");
}));

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__35403){
var extmap__4419__auto__ = (function (){var G__35412 = cljs.core.dissoc.call(null,G__35403,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_.call(null,G__35403)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35412);
} else {
return G__35412;
}
})();
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35403),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35418,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35422 = k35418;
switch (G__35422) {
default:
return cljs.core.get.call(null,self__.__extmap,k35418,else__4383__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35423){
var vec__35424 = p__35423;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35424,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35424,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35417){
var self__ = this;
var G__35417__$1 = this;
return (new cljs.core.RecordIter((0),G__35417__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35419,other35420){
var self__ = this;
var this35419__$1 = this;
return (((!((other35420 == null)))) && ((this35419__$1.constructor === other35420.constructor)) && (cljs.core._EQ_.call(null,this35419__$1.__extmap,other35420.__extmap)));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35417){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35427 = cljs.core.keyword_identical_QMARK_;
var expr__35428 = k__4388__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35417),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35417){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__35417,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35414){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35415,acc35416){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35416;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35416){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35416;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/DefaultSrc");
}));

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__35421){
var extmap__4419__auto__ = (function (){var G__35430 = cljs.core.dissoc.call(null,G__35421);
if(cljs.core.record_QMARK_.call(null,G__35421)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35430);
} else {
return G__35430;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35436,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35440 = k35436;
switch (G__35440) {
default:
return cljs.core.get.call(null,self__.__extmap,k35436,else__4383__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35441){
var vec__35442 = p__35441;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35442,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35442,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RulesVar{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35435){
var self__ = this;
var G__35435__$1 = this;
return (new cljs.core.RecordIter((0),G__35435__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35437,other35438){
var self__ = this;
var this35437__$1 = this;
return (((!((other35438 == null)))) && ((this35437__$1.constructor === other35438.constructor)) && (cljs.core._EQ_.call(null,this35437__$1.__extmap,other35438.__extmap)));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35435){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35445 = cljs.core.keyword_identical_QMARK_;
var expr__35446 = k__4388__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35435),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35435){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RulesVar(G__35435,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35432){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35433,acc35434){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35434;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35434){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35434;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/RulesVar");
}));

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__35439){
var extmap__4419__auto__ = (function (){var G__35448 = cljs.core.dissoc.call(null,G__35439);
if(cljs.core.record_QMARK_.call(null,G__35439)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35448);
} else {
return G__35448;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35454,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35458 = k35454;
var G__35458__$1 = (((G__35458 instanceof cljs.core.Keyword))?G__35458.fqn:null);
switch (G__35458__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35454,else__4383__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35459){
var vec__35460 = p__35459;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35460,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35460,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Constant{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35453){
var self__ = this;
var G__35453__$1 = this;
return (new cljs.core.RecordIter((0),G__35453__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35455,other35456){
var self__ = this;
var this35455__$1 = this;
return (((!((other35456 == null)))) && ((this35455__$1.constructor === other35456.constructor)) && (cljs.core._EQ_.call(null,this35455__$1.value,other35456.value)) && (cljs.core._EQ_.call(null,this35455__$1.__extmap,other35456.__extmap)));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35453){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35463 = cljs.core.keyword_identical_QMARK_;
var expr__35464 = k__4388__auto__;
if(cljs.core.truth_(pred__35463.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__35464))){
return (new datascript.parser.Constant(G__35453,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35453),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35453){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__35453,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35450){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f35450),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35451,acc35452){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35451,self__.value,acc35452);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35452){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35452,self__.value);
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Constant");
}));

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__35457){
var extmap__4419__auto__ = (function (){var G__35466 = cljs.core.dissoc.call(null,G__35457,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__35457)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35466);
} else {
return G__35466;
}
})();
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__35457),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35472,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35476 = k35472;
var G__35476__$1 = (((G__35476 instanceof cljs.core.Keyword))?G__35476.fqn:null);
switch (G__35476__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35472,else__4383__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35477){
var vec__35478 = p__35477;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35478,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35478,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35471){
var self__ = this;
var G__35471__$1 = this;
return (new cljs.core.RecordIter((0),G__35471__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35473,other35474){
var self__ = this;
var this35473__$1 = this;
return (((!((other35474 == null)))) && ((this35473__$1.constructor === other35474.constructor)) && (cljs.core._EQ_.call(null,this35473__$1.symbol,other35474.symbol)) && (cljs.core._EQ_.call(null,this35473__$1.__extmap,other35474.__extmap)));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35471){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35481 = cljs.core.keyword_identical_QMARK_;
var expr__35482 = k__4388__auto__;
if(cljs.core.truth_(pred__35481.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35482))){
return (new datascript.parser.PlainSymbol(G__35471,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35471),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35471){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__35471,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35468){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f35468),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35469,acc35470){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35469,self__.symbol,acc35470);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35470){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35470,self__.symbol);
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/PlainSymbol");
}));

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__35475){
var extmap__4419__auto__ = (function (){var G__35484 = cljs.core.dissoc.call(null,G__35475,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_.call(null,G__35475)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35484);
} else {
return G__35484;
}
})();
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35475),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_var_required = (function datascript$parser$parse_var_required(form){
var or__4126__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse var, expected symbol starting with ?, got: ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-var","parser/rule-var",-1584354459),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if((!((form instanceof cljs.core.Symbol)))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4126__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35490,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35494 = k35490;
var G__35494__$1 = (((G__35494 instanceof cljs.core.Keyword))?G__35494.fqn:null);
switch (G__35494__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35490,else__4383__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35495){
var vec__35496 = p__35495;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35496,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35496,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleVars{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35489){
var self__ = this;
var G__35489__$1 = this;
return (new cljs.core.RecordIter((0),G__35489__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35491,other35492){
var self__ = this;
var this35491__$1 = this;
return (((!((other35492 == null)))) && ((this35491__$1.constructor === other35492.constructor)) && (cljs.core._EQ_.call(null,this35491__$1.required,other35492.required)) && (cljs.core._EQ_.call(null,this35491__$1.free,other35492.free)) && (cljs.core._EQ_.call(null,this35491__$1.__extmap,other35492.__extmap)));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35489){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35499 = cljs.core.keyword_identical_QMARK_;
var expr__35500 = k__4388__auto__;
if(cljs.core.truth_(pred__35499.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__35500))){
return (new datascript.parser.RuleVars(G__35489,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35499.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__35500))){
return (new datascript.parser.RuleVars(self__.required,G__35489,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35489),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35489){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__35489,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35486){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f35486),datascript.parser.postwalk.call(null,self__.free,f35486),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35487,acc35488){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35487,self__.free,datascript.parser.collect.call(null,pred35487,self__.required,acc35488));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35488){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35488,self__.required),self__.free);
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/RuleVars");
}));

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__35493){
var extmap__4419__auto__ = (function (){var G__35502 = cljs.core.dissoc.call(null,G__35493,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328));
if(cljs.core.record_QMARK_.call(null,G__35493)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35502);
} else {
return G__35502;
}
})();
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__35493),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__35493),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35504 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__35504,(0),null);
var rest = cljs.core.nth.call(null,vec__35504,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_var_required,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_var_required,rest);
if(((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_)))){
throw cljs.core.ex_info.call(null,"Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,"Rule variables should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,"Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35511,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35515 = k35511;
switch (G__35515) {
default:
return cljs.core.get.call(null,self__.__extmap,k35511,else__4383__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35516){
var vec__35517 = p__35516;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35517,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35517,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35510){
var self__ = this;
var G__35510__$1 = this;
return (new cljs.core.RecordIter((0),G__35510__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35512,other35513){
var self__ = this;
var this35512__$1 = this;
return (((!((other35513 == null)))) && ((this35512__$1.constructor === other35513.constructor)) && (cljs.core._EQ_.call(null,this35512__$1.__extmap,other35513.__extmap)));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35510){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35520 = cljs.core.keyword_identical_QMARK_;
var expr__35521 = k__4388__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35510),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35510){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__35510,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35507){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35508,acc35509){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35509;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35509){
var self__ = this;
var ___34127__auto____$1 = this;
return acc35509;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/BindIgnore");
}));

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__35514){
var extmap__4419__auto__ = (function (){var G__35523 = cljs.core.dissoc.call(null,G__35514);
if(cljs.core.record_QMARK_.call(null,G__35514)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35523);
} else {
return G__35523;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35529,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35533 = k35529;
var G__35533__$1 = (((G__35533 instanceof cljs.core.Keyword))?G__35533.fqn:null);
switch (G__35533__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35529,else__4383__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35534){
var vec__35535 = p__35534;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35535,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35535,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindScalar{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35528){
var self__ = this;
var G__35528__$1 = this;
return (new cljs.core.RecordIter((0),G__35528__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35530,other35531){
var self__ = this;
var this35530__$1 = this;
return (((!((other35531 == null)))) && ((this35530__$1.constructor === other35531.constructor)) && (cljs.core._EQ_.call(null,this35530__$1.variable,other35531.variable)) && (cljs.core._EQ_.call(null,this35530__$1.__extmap,other35531.__extmap)));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35528){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35538 = cljs.core.keyword_identical_QMARK_;
var expr__35539 = k__4388__auto__;
if(cljs.core.truth_(pred__35538.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35539))){
return (new datascript.parser.BindScalar(G__35528,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35528),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35528){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__35528,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35525){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f35525),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35526,acc35527){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35526,self__.variable,acc35527);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35527){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35527,self__.variable);
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/BindScalar");
}));

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__35532){
var extmap__4419__auto__ = (function (){var G__35541 = cljs.core.dissoc.call(null,G__35532,new cljs.core.Keyword(null,"variable","variable",-281346492));
if(cljs.core.record_QMARK_.call(null,G__35532)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35541);
} else {
return G__35541;
}
})();
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35532),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35547,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35551 = k35547;
var G__35551__$1 = (((G__35551 instanceof cljs.core.Keyword))?G__35551.fqn:null);
switch (G__35551__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35547,else__4383__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35552){
var vec__35553 = p__35552;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35553,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35553,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindTuple{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35546){
var self__ = this;
var G__35546__$1 = this;
return (new cljs.core.RecordIter((0),G__35546__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35548,other35549){
var self__ = this;
var this35548__$1 = this;
return (((!((other35549 == null)))) && ((this35548__$1.constructor === other35549.constructor)) && (cljs.core._EQ_.call(null,this35548__$1.bindings,other35549.bindings)) && (cljs.core._EQ_.call(null,this35548__$1.__extmap,other35549.__extmap)));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35546){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35556 = cljs.core.keyword_identical_QMARK_;
var expr__35557 = k__4388__auto__;
if(cljs.core.truth_(pred__35556.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__35557))){
return (new datascript.parser.BindTuple(G__35546,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35546),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35546){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__35546,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35543){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f35543),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35544,acc35545){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35544,self__.bindings,acc35545);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35545){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35545,self__.bindings);
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/BindTuple");
}));

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__35550){
var extmap__4419__auto__ = (function (){var G__35559 = cljs.core.dissoc.call(null,G__35550,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_.call(null,G__35550)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35559);
} else {
return G__35559;
}
})();
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__35550),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35565,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35569 = k35565;
var G__35569__$1 = (((G__35569 instanceof cljs.core.Keyword))?G__35569.fqn:null);
switch (G__35569__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35565,else__4383__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35570){
var vec__35571 = p__35570;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35571,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35571,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindColl{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35564){
var self__ = this;
var G__35564__$1 = this;
return (new cljs.core.RecordIter((0),G__35564__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35566,other35567){
var self__ = this;
var this35566__$1 = this;
return (((!((other35567 == null)))) && ((this35566__$1.constructor === other35567.constructor)) && (cljs.core._EQ_.call(null,this35566__$1.binding,other35567.binding)) && (cljs.core._EQ_.call(null,this35566__$1.__extmap,other35567.__extmap)));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35564){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35574 = cljs.core.keyword_identical_QMARK_;
var expr__35575 = k__4388__auto__;
if(cljs.core.truth_(pred__35574.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__35575))){
return (new datascript.parser.BindColl(G__35564,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35564),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35564){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__35564,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35561){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f35561),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35562,acc35563){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35562,self__.binding,acc35563);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35563){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35563,self__.binding);
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/BindColl");
}));

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__35568){
var extmap__4419__auto__ = (function (){var G__35577 = cljs.core.dissoc.call(null,G__35568,new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_.call(null,G__35568)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35577);
} else {
return G__35577;
}
})();
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__35568),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5720__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var var$ = temp__5720__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(((datascript.parser.of_size_QMARK_.call(null,form,(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var temp__5718__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5718__auto__)){
var sub_bind = temp__5718__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,"Cannot parse collection binding",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4126__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5720__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5720__auto__)){
var sub_bindings = temp__5720__auto__;
if((!(cljs.core.empty_QMARK_.call(null,sub_bindings)))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,"Tuple binding cannot be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(((datascript.parser.of_size_QMARK_.call(null,form,(1))) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form))))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4126__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

var datascript$parser$IFindVars$_find_vars$dyn_35579 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (datascript.parser._find_vars[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_35579.call(null,this$);
}
});

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35584,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35588 = k35584;
var G__35588__$1 = (((G__35588 instanceof cljs.core.Keyword))?G__35588.fqn:null);
switch (G__35588__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35584,else__4383__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35589){
var vec__35590 = p__35589;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35590,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35590,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Aggregate{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35583){
var self__ = this;
var G__35583__$1 = this;
return (new cljs.core.RecordIter((0),G__35583__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35585,other35586){
var self__ = this;
var this35585__$1 = this;
return (((!((other35586 == null)))) && ((this35585__$1.constructor === other35586.constructor)) && (cljs.core._EQ_.call(null,this35585__$1.fn,other35586.fn)) && (cljs.core._EQ_.call(null,this35585__$1.args,other35586.args)) && (cljs.core._EQ_.call(null,this35585__$1.__extmap,other35586.__extmap)));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35583){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35593 = cljs.core.keyword_identical_QMARK_;
var expr__35594 = k__4388__auto__;
if(cljs.core.truth_(pred__35593.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35594))){
return (new datascript.parser.Aggregate(G__35583,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35593.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35594))){
return (new datascript.parser.Aggregate(self__.fn,G__35583,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35583),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35583){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__35583,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35580){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f35580),datascript.parser.postwalk.call(null,self__.args,f35580),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35581,acc35582){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35581,self__.args,datascript.parser.collect.call(null,pred35581,self__.fn,acc35582));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35582){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35582,self__.fn),self__.args);
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Aggregate");
}));

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__35587){
var extmap__4419__auto__ = (function (){var G__35596 = cljs.core.dissoc.call(null,G__35587,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__35587)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35596);
} else {
return G__35596;
}
})();
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35587),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35587),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35602,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35606 = k35602;
var G__35606__$1 = (((G__35606 instanceof cljs.core.Keyword))?G__35606.fqn:null);
switch (G__35606__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35602,else__4383__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35607){
var vec__35608 = p__35607;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35608,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35608,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Pull{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35601){
var self__ = this;
var G__35601__$1 = this;
return (new cljs.core.RecordIter((0),G__35601__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35603,other35604){
var self__ = this;
var this35603__$1 = this;
return (((!((other35604 == null)))) && ((this35603__$1.constructor === other35604.constructor)) && (cljs.core._EQ_.call(null,this35603__$1.source,other35604.source)) && (cljs.core._EQ_.call(null,this35603__$1.variable,other35604.variable)) && (cljs.core._EQ_.call(null,this35603__$1.pattern,other35604.pattern)) && (cljs.core._EQ_.call(null,this35603__$1.__extmap,other35604.__extmap)));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35601){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35611 = cljs.core.keyword_identical_QMARK_;
var expr__35612 = k__4388__auto__;
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35612))){
return (new datascript.parser.Pull(G__35601,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35612))){
return (new datascript.parser.Pull(self__.source,G__35601,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__35612))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__35601,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35601),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35601){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__35601,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35598){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f35598),datascript.parser.postwalk.call(null,self__.variable,f35598),datascript.parser.postwalk.call(null,self__.pattern,f35598),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35599,acc35600){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35599,self__.pattern,datascript.parser.collect.call(null,pred35599,self__.variable,datascript.parser.collect.call(null,pred35599,self__.source,acc35600)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35600){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35600,self__.source),self__.variable),self__.pattern);
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Pull");
}));

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__35605){
var extmap__4419__auto__ = (function (){var G__35614 = cljs.core.dissoc.call(null,G__35605,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.record_QMARK_.call(null,G__35605)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35614);
} else {
return G__35614;
}
})();
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35605),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35605),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35605),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_35616 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (datascript.parser.find_elements[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_35616.call(null,this$);
}
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35621,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35625 = k35621;
var G__35625__$1 = (((G__35625 instanceof cljs.core.Keyword))?G__35625.fqn:null);
switch (G__35625__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35621,else__4383__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35626){
var vec__35627 = p__35626;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35627,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35627,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindRel{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35620){
var self__ = this;
var G__35620__$1 = this;
return (new cljs.core.RecordIter((0),G__35620__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35622,other35623){
var self__ = this;
var this35622__$1 = this;
return (((!((other35623 == null)))) && ((this35622__$1.constructor === other35623.constructor)) && (cljs.core._EQ_.call(null,this35622__$1.elements,other35623.elements)) && (cljs.core._EQ_.call(null,this35622__$1.__extmap,other35623.__extmap)));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35620){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35630 = cljs.core.keyword_identical_QMARK_;
var expr__35631 = k__4388__auto__;
if(cljs.core.truth_(pred__35630.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35631))){
return (new datascript.parser.FindRel(G__35620,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35620),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35620){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__35620,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35617){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f35617),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35618,acc35619){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35618,self__.elements,acc35619);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35619){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35619,self__.elements);
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/FindRel");
}));

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__35624){
var extmap__4419__auto__ = (function (){var G__35633 = cljs.core.dissoc.call(null,G__35624,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_.call(null,G__35624)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35633);
} else {
return G__35633;
}
})();
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35624),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35639,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35643 = k35639;
var G__35643__$1 = (((G__35643 instanceof cljs.core.Keyword))?G__35643.fqn:null);
switch (G__35643__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35639,else__4383__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35644){
var vec__35645 = p__35644;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35645,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35645,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindColl{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35638){
var self__ = this;
var G__35638__$1 = this;
return (new cljs.core.RecordIter((0),G__35638__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35640,other35641){
var self__ = this;
var this35640__$1 = this;
return (((!((other35641 == null)))) && ((this35640__$1.constructor === other35641.constructor)) && (cljs.core._EQ_.call(null,this35640__$1.element,other35641.element)) && (cljs.core._EQ_.call(null,this35640__$1.__extmap,other35641.__extmap)));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35638){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35648 = cljs.core.keyword_identical_QMARK_;
var expr__35649 = k__4388__auto__;
if(cljs.core.truth_(pred__35648.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35649))){
return (new datascript.parser.FindColl(G__35638,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35638),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35638){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__35638,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35635){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f35635),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35636,acc35637){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35636,self__.element,acc35637);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35637){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35637,self__.element);
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/FindColl");
}));

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__35642){
var extmap__4419__auto__ = (function (){var G__35651 = cljs.core.dissoc.call(null,G__35642,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_.call(null,G__35642)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35651);
} else {
return G__35651;
}
})();
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35642),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35657,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35661 = k35657;
var G__35661__$1 = (((G__35661 instanceof cljs.core.Keyword))?G__35661.fqn:null);
switch (G__35661__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35657,else__4383__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35662){
var vec__35663 = p__35662;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35663,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35663,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindScalar{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35656){
var self__ = this;
var G__35656__$1 = this;
return (new cljs.core.RecordIter((0),G__35656__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35658,other35659){
var self__ = this;
var this35658__$1 = this;
return (((!((other35659 == null)))) && ((this35658__$1.constructor === other35659.constructor)) && (cljs.core._EQ_.call(null,this35658__$1.element,other35659.element)) && (cljs.core._EQ_.call(null,this35658__$1.__extmap,other35659.__extmap)));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35656){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35666 = cljs.core.keyword_identical_QMARK_;
var expr__35667 = k__4388__auto__;
if(cljs.core.truth_(pred__35666.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35667))){
return (new datascript.parser.FindScalar(G__35656,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35656),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35656){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__35656,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35653){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f35653),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35654,acc35655){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35654,self__.element,acc35655);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35655){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35655,self__.element);
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/FindScalar");
}));

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__35660){
var extmap__4419__auto__ = (function (){var G__35669 = cljs.core.dissoc.call(null,G__35660,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_.call(null,G__35660)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35669);
} else {
return G__35669;
}
})();
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35660),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35675,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35679 = k35675;
var G__35679__$1 = (((G__35679 instanceof cljs.core.Keyword))?G__35679.fqn:null);
switch (G__35679__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35675,else__4383__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35680){
var vec__35681 = p__35680;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35681,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35681,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindTuple{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35674){
var self__ = this;
var G__35674__$1 = this;
return (new cljs.core.RecordIter((0),G__35674__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35676,other35677){
var self__ = this;
var this35676__$1 = this;
return (((!((other35677 == null)))) && ((this35676__$1.constructor === other35677.constructor)) && (cljs.core._EQ_.call(null,this35676__$1.elements,other35677.elements)) && (cljs.core._EQ_.call(null,this35676__$1.__extmap,other35677.__extmap)));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35674){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35684 = cljs.core.keyword_identical_QMARK_;
var expr__35685 = k__4388__auto__;
if(cljs.core.truth_(pred__35684.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35685))){
return (new datascript.parser.FindTuple(G__35674,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35674),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35674){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__35674,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35671){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f35671),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35672,acc35673){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35672,self__.elements,acc35673);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35673){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35673,self__.elements);
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/FindTuple");
}));

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__35678){
var extmap__4419__auto__ = (function (){var G__35687 = cljs.core.dissoc.call(null,G__35678,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_.call(null,G__35678)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35687);
} else {
return G__35687;
}
})();
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35678),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2))))){
var vec__35689 = form;
var seq__35690 = cljs.core.seq.call(null,vec__35689);
var first__35691 = cljs.core.first.call(null,seq__35690);
var seq__35690__$1 = cljs.core.next.call(null,seq__35690);
var fn = first__35691;
var args = seq__35690__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null))))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__35692 = form;
var seq__35693 = cljs.core.seq.call(null,vec__35692);
var first__35694 = cljs.core.first.call(null,seq__35693);
var seq__35693__$1 = cljs.core.next.call(null,seq__35693);
var _ = first__35694;
var first__35694__$1 = cljs.core.first.call(null,seq__35693__$1);
var seq__35693__$2 = cljs.core.next.call(null,seq__35693__$1);
var fn = first__35694__$1;
var args = seq__35693__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,"Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,"Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null))))){
if(((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__35695 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__35695,(0),null);
var pattern = cljs.core.nth.call(null,vec__35695,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = src_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return pattern_STAR_;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,"Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,"Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4126__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__35698 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__35698 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__35698,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1))))){
var inner = cljs.core.first.call(null,form);
if(((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var G__35699 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__35699 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__35699,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null))))){
var G__35700 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__35700 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__35700,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1))))){
var inner = cljs.core.first.call(null,form);
var G__35701 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__35701 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__35701,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4126__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.ReturnMap = (function (type,symbols,__meta,__extmap,__hash){
this.type = type;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35706,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35710 = k35706;
var G__35710__$1 = (((G__35710 instanceof cljs.core.Keyword))?G__35710.fqn:null);
switch (G__35710__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35706,else__4383__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35711){
var vec__35712 = p__35711;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35712,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35712,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35705){
var self__ = this;
var G__35705__$1 = this;
return (new cljs.core.RecordIter((0),G__35705__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35707,other35708){
var self__ = this;
var this35707__$1 = this;
return (((!((other35708 == null)))) && ((this35707__$1.constructor === other35708.constructor)) && (cljs.core._EQ_.call(null,this35707__$1.type,other35708.type)) && (cljs.core._EQ_.call(null,this35707__$1.symbols,other35708.symbols)) && (cljs.core._EQ_.call(null,this35707__$1.__extmap,other35708.__extmap)));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35705){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35715 = cljs.core.keyword_identical_QMARK_;
var expr__35716 = k__4388__auto__;
if(cljs.core.truth_(pred__35715.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__35716))){
return (new datascript.parser.ReturnMap(G__35705,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35715.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__35716))){
return (new datascript.parser.ReturnMap(self__.type,G__35705,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35705),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35705){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__35705,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35702){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk.call(null,self__.type,f35702),datascript.parser.postwalk.call(null,self__.symbols,f35702),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35703,acc35704){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35703,self__.symbols,datascript.parser.collect.call(null,pred35703,self__.type,acc35704));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35704){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35704,self__.type),self__.symbols);
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/ReturnMap");
}));

/**
 * Positional factory function for datascript.parser/ReturnMap.
 */
datascript.parser.__GT_ReturnMap = (function datascript$parser$__GT_ReturnMap(type,symbols){
return (new datascript.parser.ReturnMap(type,symbols,null,null,null));
});

/**
 * Factory function for datascript.parser/ReturnMap, taking a map of keywords to field values.
 */
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__35709){
var extmap__4419__auto__ = (function (){var G__35718 = cljs.core.dissoc.call(null,G__35709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743));
if(cljs.core.record_QMARK_.call(null,G__35709)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35718);
} else {
return G__35718;
}
})();
return (new datascript.parser.ReturnMap(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__35709),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__35709),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_.call(null,form)))) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,form)))){
var G__35720 = type;
var G__35720__$1 = (((G__35720 instanceof cljs.core.Keyword))?G__35720.fqn:null);
switch (G__35720__$1) {
case "keys":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.call(null,cljs.core.keyword,form),null,null,null));

break;
case "syms":
return (new datascript.parser.ReturnMap(type,cljs.core.vec.call(null,form),null,null,null));

break;
case "strs":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.call(null,cljs.core.str,form),null,null,null));

break;
default:
return null;

}
} else {
return null;
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4126__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse :with clause, expected [ variable+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5718__auto__ = (function (){var or__4126__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4126__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35726,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35730 = k35726;
var G__35730__$1 = (((G__35730 instanceof cljs.core.Keyword))?G__35730.fqn:null);
switch (G__35730__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35726,else__4383__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35731){
var vec__35732 = p__35731;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35732,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35732,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Pattern{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35725){
var self__ = this;
var G__35725__$1 = this;
return (new cljs.core.RecordIter((0),G__35725__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35727,other35728){
var self__ = this;
var this35727__$1 = this;
return (((!((other35728 == null)))) && ((this35727__$1.constructor === other35728.constructor)) && (cljs.core._EQ_.call(null,this35727__$1.source,other35728.source)) && (cljs.core._EQ_.call(null,this35727__$1.pattern,other35728.pattern)) && (cljs.core._EQ_.call(null,this35727__$1.__extmap,other35728.__extmap)));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35725){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35735 = cljs.core.keyword_identical_QMARK_;
var expr__35736 = k__4388__auto__;
if(cljs.core.truth_(pred__35735.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35736))){
return (new datascript.parser.Pattern(G__35725,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35735.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__35736))){
return (new datascript.parser.Pattern(self__.source,G__35725,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35725),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35725){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__35725,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35722){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f35722),datascript.parser.postwalk.call(null,self__.pattern,f35722),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35723,acc35724){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35723,self__.pattern,datascript.parser.collect.call(null,pred35723,self__.source,acc35724));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35724){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35724,self__.source),self__.pattern);
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Pattern");
}));

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__35729){
var extmap__4419__auto__ = (function (){var G__35738 = cljs.core.dissoc.call(null,G__35729,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.record_QMARK_.call(null,G__35729)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35738);
} else {
return G__35738;
}
})();
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35729),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35729),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35744,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35748 = k35744;
var G__35748__$1 = (((G__35748 instanceof cljs.core.Keyword))?G__35748.fqn:null);
switch (G__35748__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35744,else__4383__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35749){
var vec__35750 = p__35749;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35750,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35750,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Predicate{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35743){
var self__ = this;
var G__35743__$1 = this;
return (new cljs.core.RecordIter((0),G__35743__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35745,other35746){
var self__ = this;
var this35745__$1 = this;
return (((!((other35746 == null)))) && ((this35745__$1.constructor === other35746.constructor)) && (cljs.core._EQ_.call(null,this35745__$1.fn,other35746.fn)) && (cljs.core._EQ_.call(null,this35745__$1.args,other35746.args)) && (cljs.core._EQ_.call(null,this35745__$1.__extmap,other35746.__extmap)));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35743){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35753 = cljs.core.keyword_identical_QMARK_;
var expr__35754 = k__4388__auto__;
if(cljs.core.truth_(pred__35753.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35754))){
return (new datascript.parser.Predicate(G__35743,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35753.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35754))){
return (new datascript.parser.Predicate(self__.fn,G__35743,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35743),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35743){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__35743,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35740){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f35740),datascript.parser.postwalk.call(null,self__.args,f35740),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35741,acc35742){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35741,self__.args,datascript.parser.collect.call(null,pred35741,self__.fn,acc35742));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35742){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35742,self__.fn),self__.args);
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Predicate");
}));

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__35747){
var extmap__4419__auto__ = (function (){var G__35756 = cljs.core.dissoc.call(null,G__35747,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__35747)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35756);
} else {
return G__35756;
}
})();
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35747),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35747),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35762,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35766 = k35762;
var G__35766__$1 = (((G__35766 instanceof cljs.core.Keyword))?G__35766.fqn:null);
switch (G__35766__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35762,else__4383__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35767){
var vec__35768 = p__35767;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35768,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35768,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Function{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35761){
var self__ = this;
var G__35761__$1 = this;
return (new cljs.core.RecordIter((0),G__35761__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35763,other35764){
var self__ = this;
var this35763__$1 = this;
return (((!((other35764 == null)))) && ((this35763__$1.constructor === other35764.constructor)) && (cljs.core._EQ_.call(null,this35763__$1.fn,other35764.fn)) && (cljs.core._EQ_.call(null,this35763__$1.args,other35764.args)) && (cljs.core._EQ_.call(null,this35763__$1.binding,other35764.binding)) && (cljs.core._EQ_.call(null,this35763__$1.__extmap,other35764.__extmap)));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35761){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35771 = cljs.core.keyword_identical_QMARK_;
var expr__35772 = k__4388__auto__;
if(cljs.core.truth_(pred__35771.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35772))){
return (new datascript.parser.Function(G__35761,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35771.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35772))){
return (new datascript.parser.Function(self__.fn,G__35761,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35771.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__35772))){
return (new datascript.parser.Function(self__.fn,self__.args,G__35761,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35761),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35761){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__35761,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35758){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f35758),datascript.parser.postwalk.call(null,self__.args,f35758),datascript.parser.postwalk.call(null,self__.binding,f35758),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35759,acc35760){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35759,self__.binding,datascript.parser.collect.call(null,pred35759,self__.args,datascript.parser.collect.call(null,pred35759,self__.fn,acc35760)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35760){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35760,self__.fn),self__.args),self__.binding);
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Function");
}));

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__35765){
var extmap__4419__auto__ = (function (){var G__35774 = cljs.core.dissoc.call(null,G__35765,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_.call(null,G__35765)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35774);
} else {
return G__35774;
}
})();
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35765),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35765),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__35765),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35780,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35784 = k35780;
var G__35784__$1 = (((G__35784 instanceof cljs.core.Keyword))?G__35784.fqn:null);
switch (G__35784__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35780,else__4383__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35785){
var vec__35786 = p__35785;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35786,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35786,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35779){
var self__ = this;
var G__35779__$1 = this;
return (new cljs.core.RecordIter((0),G__35779__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35781,other35782){
var self__ = this;
var this35781__$1 = this;
return (((!((other35782 == null)))) && ((this35781__$1.constructor === other35782.constructor)) && (cljs.core._EQ_.call(null,this35781__$1.source,other35782.source)) && (cljs.core._EQ_.call(null,this35781__$1.name,other35782.name)) && (cljs.core._EQ_.call(null,this35781__$1.args,other35782.args)) && (cljs.core._EQ_.call(null,this35781__$1.__extmap,other35782.__extmap)));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35779){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35789 = cljs.core.keyword_identical_QMARK_;
var expr__35790 = k__4388__auto__;
if(cljs.core.truth_(pred__35789.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35790))){
return (new datascript.parser.RuleExpr(G__35779,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35789.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__35790))){
return (new datascript.parser.RuleExpr(self__.source,G__35779,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35789.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35790))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__35779,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35779),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35779){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__35779,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35776){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f35776),datascript.parser.postwalk.call(null,self__.name,f35776),datascript.parser.postwalk.call(null,self__.args,f35776),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35777,acc35778){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35777,self__.args,datascript.parser.collect.call(null,pred35777,self__.name,datascript.parser.collect.call(null,pred35777,self__.source,acc35778)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35778){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35778,self__.source),self__.name),self__.args);
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/RuleExpr");
}));

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__35783){
var extmap__4419__auto__ = (function (){var G__35792 = cljs.core.dissoc.call(null,G__35783,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__35783)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35792);
} else {
return G__35792;
}
})();
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35783),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35783),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35798,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35802 = k35798;
var G__35802__$1 = (((G__35802 instanceof cljs.core.Keyword))?G__35802.fqn:null);
switch (G__35802__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35798,else__4383__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35803){
var vec__35804 = p__35803;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35804,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35804,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Not{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35797){
var self__ = this;
var G__35797__$1 = this;
return (new cljs.core.RecordIter((0),G__35797__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35799,other35800){
var self__ = this;
var this35799__$1 = this;
return (((!((other35800 == null)))) && ((this35799__$1.constructor === other35800.constructor)) && (cljs.core._EQ_.call(null,this35799__$1.source,other35800.source)) && (cljs.core._EQ_.call(null,this35799__$1.vars,other35800.vars)) && (cljs.core._EQ_.call(null,this35799__$1.clauses,other35800.clauses)) && (cljs.core._EQ_.call(null,this35799__$1.__extmap,other35800.__extmap)));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35797){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35807 = cljs.core.keyword_identical_QMARK_;
var expr__35808 = k__4388__auto__;
if(cljs.core.truth_(pred__35807.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35808))){
return (new datascript.parser.Not(G__35797,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35807.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__35808))){
return (new datascript.parser.Not(self__.source,G__35797,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35807.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35808))){
return (new datascript.parser.Not(self__.source,self__.vars,G__35797,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35797),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35797){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__35797,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35794){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f35794),datascript.parser.postwalk.call(null,self__.vars,f35794),datascript.parser.postwalk.call(null,self__.clauses,f35794),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35795,acc35796){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35795,self__.clauses,datascript.parser.collect.call(null,pred35795,self__.vars,datascript.parser.collect.call(null,pred35795,self__.source,acc35796)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35796){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35796,self__.source),self__.vars),self__.clauses);
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Not");
}));

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__35801){
var extmap__4419__auto__ = (function (){var G__35810 = cljs.core.dissoc.call(null,G__35801,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_.call(null,G__35801)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35810);
} else {
return G__35810;
}
})();
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35801),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__35801),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35801),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35816,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35820 = k35816;
var G__35820__$1 = (((G__35820 instanceof cljs.core.Keyword))?G__35820.fqn:null);
switch (G__35820__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35816,else__4383__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35821){
var vec__35822 = p__35821;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35822,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35822,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Or{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35815){
var self__ = this;
var G__35815__$1 = this;
return (new cljs.core.RecordIter((0),G__35815__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35817,other35818){
var self__ = this;
var this35817__$1 = this;
return (((!((other35818 == null)))) && ((this35817__$1.constructor === other35818.constructor)) && (cljs.core._EQ_.call(null,this35817__$1.source,other35818.source)) && (cljs.core._EQ_.call(null,this35817__$1.rule_vars,other35818.rule_vars)) && (cljs.core._EQ_.call(null,this35817__$1.clauses,other35818.clauses)) && (cljs.core._EQ_.call(null,this35817__$1.__extmap,other35818.__extmap)));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35815){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35825 = cljs.core.keyword_identical_QMARK_;
var expr__35826 = k__4388__auto__;
if(cljs.core.truth_(pred__35825.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35826))){
return (new datascript.parser.Or(G__35815,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35825.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__35826))){
return (new datascript.parser.Or(self__.source,G__35815,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35825.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35826))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__35815,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35815),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35815){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__35815,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35812){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f35812),datascript.parser.postwalk.call(null,self__.rule_vars,f35812),datascript.parser.postwalk.call(null,self__.clauses,f35812),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35813,acc35814){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35813,self__.clauses,datascript.parser.collect.call(null,pred35813,self__.rule_vars,datascript.parser.collect.call(null,pred35813,self__.source,acc35814)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35814){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35814,self__.source),self__.rule_vars),self__.clauses);
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Or");
}));

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__35819){
var extmap__4419__auto__ = (function (){var G__35828 = cljs.core.dissoc.call(null,G__35819,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_.call(null,G__35819)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35828);
} else {
return G__35828;
}
})();
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35819),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__35819),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35819),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35834,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35838 = k35834;
var G__35838__$1 = (((G__35838 instanceof cljs.core.Keyword))?G__35838.fqn:null);
switch (G__35838__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35834,else__4383__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35839){
var vec__35840 = p__35839;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35840,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35840,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.And{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35833){
var self__ = this;
var G__35833__$1 = this;
return (new cljs.core.RecordIter((0),G__35833__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35835,other35836){
var self__ = this;
var this35835__$1 = this;
return (((!((other35836 == null)))) && ((this35835__$1.constructor === other35836.constructor)) && (cljs.core._EQ_.call(null,this35835__$1.clauses,other35836.clauses)) && (cljs.core._EQ_.call(null,this35835__$1.__extmap,other35836.__extmap)));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35833){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35843 = cljs.core.keyword_identical_QMARK_;
var expr__35844 = k__4388__auto__;
if(cljs.core.truth_(pred__35843.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35844))){
return (new datascript.parser.And(G__35833,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35833),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35833){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__35833,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35830){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f35830),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35831,acc35832){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35831,self__.clauses,acc35832);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35832){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35832,self__.clauses);
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/And");
}));

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__35837){
var extmap__4419__auto__ = (function (){var G__35846 = cljs.core.dissoc.call(null,G__35837,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_.call(null,G__35837)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35846);
} else {
return G__35846;
}
})();
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35837),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4126__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__5718__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5718__auto__)){
var source_STAR_ = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35848 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35848,(0),null);
var next_form = cljs.core.nth.call(null,vec__35848,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pattern_STAR_ = temp__5720__auto____$1;
if((!(cljs.core.empty_QMARK_.call(null,pattern_STAR_)))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,"Pattern could not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35851 = form;
var seq__35852 = cljs.core.seq.call(null,vec__35851);
var first__35853 = cljs.core.first.call(null,seq__35852);
var seq__35852__$1 = cljs.core.next.call(null,seq__35852);
var fn = first__35853;
var args = seq__35852__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(datascript.parser.of_size_QMARK_.call(null,form,(1))){
var temp__5720__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35854 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__35854,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__35854,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(datascript.parser.of_size_QMARK_.call(null,form,(2))){
var vec__35857 = form;
var call = cljs.core.nth.call(null,vec__35857,(0),null);
var binding = cljs.core.nth.call(null,vec__35857,(1),null);
var temp__5720__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35860 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__35860,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__35860,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__5720__auto____$1)){
var binding_STAR_ = temp__5720__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35863 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35863,(0),null);
var next_form = cljs.core.nth.call(null,vec__35863,(1),null);
var vec__35866 = next_form;
var seq__35867 = cljs.core.seq.call(null,vec__35866);
var first__35868 = cljs.core.first.call(null,seq__35867);
var seq__35867__$1 = cljs.core.next.call(null,seq__35867);
var name = first__35868;
var args = seq__35867__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,"rule-expr requires at least one argument",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,"Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
return datascript.parser.collect_vars_acc.call(null,acc,form.rule_vars);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(required,free,form){
if(((cljs.core.empty_QMARK_.call(null,required)) && (cljs.core.empty_QMARK_.call(null,free)))){
throw cljs.core.ex_info.call(null,"Join variables should not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35870 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35870,(0),null);
var next_form = cljs.core.nth.call(null,vec__35870,(1),null);
var vec__35873 = next_form;
var seq__35874 = cljs.core.seq.call(null,vec__35873);
var first__35875 = cljs.core.first.call(null,seq__35874);
var seq__35874__$1 = cljs.core.next.call(null,seq__35874);
var sym = first__35875;
var clauses = seq__35874__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5718__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,"Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35876 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35876,(0),null);
var next_form = cljs.core.nth.call(null,vec__35876,(1),null);
var vec__35879 = next_form;
var seq__35880 = cljs.core.seq.call(null,vec__35879);
var first__35881 = cljs.core.first.call(null,seq__35880);
var seq__35880__$1 = cljs.core.next.call(null,seq__35880);
var sym = first__35881;
var first__35881__$1 = cljs.core.first.call(null,seq__35880__$1);
var seq__35880__$2 = cljs.core.next.call(null,seq__35880__$1);
var vars = first__35881__$1;
var clauses = seq__35880__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__4115__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return clauses_STAR_;
} else {
return and__4115__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,"Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__35882 = clause;
var map__35882__$1 = (((((!((map__35882 == null))))?(((((map__35882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35882):map__35882);
var map__35883 = cljs.core.get.call(null,map__35882__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__35883__$1 = (((((!((map__35883 == null))))?(((((map__35883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35883):map__35883);
var required = cljs.core.get.call(null,map__35883__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__35883__$1,new cljs.core.Keyword(null,"free","free",801364328));
datascript.parser.validate_join_vars.call(null,required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form))))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,"Cannot parse 'and' clause, expected [ 'and' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35886 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35886,(0),null);
var next_form = cljs.core.nth.call(null,vec__35886,(1),null);
var vec__35889 = next_form;
var seq__35890 = cljs.core.seq.call(null,vec__35889);
var first__35891 = cljs.core.first.call(null,seq__35890);
var seq__35890__$1 = cljs.core.next.call(null,seq__35890);
var sym = first__35891;
var clauses = seq__35890__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5718__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,"Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5720__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__35892 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35892,(0),null);
var next_form = cljs.core.nth.call(null,vec__35892,(1),null);
var vec__35895 = next_form;
var seq__35896 = cljs.core.seq.call(null,vec__35895);
var first__35897 = cljs.core.first.call(null,seq__35896);
var seq__35896__$1 = cljs.core.next.call(null,seq__35896);
var sym = first__35897;
var first__35897__$1 = cljs.core.first.call(null,seq__35896__$1);
var seq__35896__$2 = cljs.core.next.call(null,seq__35896__$1);
var vars = first__35897__$1;
var clauses = seq__35896__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__4115__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return clauses_STAR_;
} else {
return and__4115__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,"Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4126__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4126__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse :where clause, expected [clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35903,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35907 = k35903;
var G__35907__$1 = (((G__35907 instanceof cljs.core.Keyword))?G__35907.fqn:null);
switch (G__35907__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35903,else__4383__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35908){
var vec__35909 = p__35908;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35909,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35909,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35902){
var self__ = this;
var G__35902__$1 = this;
return (new cljs.core.RecordIter((0),G__35902__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35904,other35905){
var self__ = this;
var this35904__$1 = this;
return (((!((other35905 == null)))) && ((this35904__$1.constructor === other35905.constructor)) && (cljs.core._EQ_.call(null,this35904__$1.vars,other35905.vars)) && (cljs.core._EQ_.call(null,this35904__$1.clauses,other35905.clauses)) && (cljs.core._EQ_.call(null,this35904__$1.__extmap,other35905.__extmap)));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35902){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35912 = cljs.core.keyword_identical_QMARK_;
var expr__35913 = k__4388__auto__;
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__35913))){
return (new datascript.parser.RuleBranch(G__35902,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35913))){
return (new datascript.parser.RuleBranch(self__.vars,G__35902,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35902),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35902){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__35902,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35899){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f35899),datascript.parser.postwalk.call(null,self__.clauses,f35899),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35900,acc35901){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35900,self__.clauses,datascript.parser.collect.call(null,pred35900,self__.vars,acc35901));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35901){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35901,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/RuleBranch");
}));

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__35906){
var extmap__4419__auto__ = (function (){var G__35915 = cljs.core.dissoc.call(null,G__35906,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_.call(null,G__35906)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35915);
} else {
return G__35915;
}
})();
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__35906),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35906),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35921,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35925 = k35921;
var G__35925__$1 = (((G__35925 instanceof cljs.core.Keyword))?G__35925.fqn:null);
switch (G__35925__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35921,else__4383__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35926){
var vec__35927 = p__35926;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35927,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35927,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Rule{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35920){
var self__ = this;
var G__35920__$1 = this;
return (new cljs.core.RecordIter((0),G__35920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35922,other35923){
var self__ = this;
var this35922__$1 = this;
return (((!((other35923 == null)))) && ((this35922__$1.constructor === other35923.constructor)) && (cljs.core._EQ_.call(null,this35922__$1.name,other35923.name)) && (cljs.core._EQ_.call(null,this35922__$1.branches,other35923.branches)) && (cljs.core._EQ_.call(null,this35922__$1.__extmap,other35923.__extmap)));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35920){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35930 = cljs.core.keyword_identical_QMARK_;
var expr__35931 = k__4388__auto__;
if(cljs.core.truth_(pred__35930.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__35931))){
return (new datascript.parser.Rule(G__35920,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35930.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__35931))){
return (new datascript.parser.Rule(self__.name,G__35920,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35920),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35920){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__35920,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35917){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f35917),datascript.parser.postwalk.call(null,self__.branches,f35917),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35918,acc35919){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35918,self__.branches,datascript.parser.collect.call(null,pred35918,self__.name,acc35919));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35919){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35919,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Rule");
}));

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__35924){
var extmap__4419__auto__ = (function (){var G__35933 = cljs.core.dissoc.call(null,G__35924,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268));
if(cljs.core.record_QMARK_.call(null,G__35924)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35933);
} else {
return G__35933;
}
})();
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35924),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__35924),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35935 = form;
var seq__35936 = cljs.core.seq.call(null,vec__35935);
var first__35937 = cljs.core.first.call(null,seq__35936);
var seq__35936__$1 = cljs.core.next.call(null,seq__35936);
var head = first__35937;
var clauses = seq__35936__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__35938 = head;
var seq__35939 = cljs.core.seq.call(null,vec__35938);
var first__35940 = cljs.core.first.call(null,seq__35939);
var seq__35939__$1 = cljs.core.next.call(null,seq__35939);
var name = first__35940;
var vars = seq__35939__$1;
var name_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Cannot parse rule name, expected plain-symbol",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__4126__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Rule branch should have clauses",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule head, expected [rule-name rule-vars], got: ",cljs.core.pr_str.call(null,head)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,"Cannot parse rule, expected [rule-head clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__35941 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__35943 = null;
var count__35944 = (0);
var i__35945 = (0);
while(true){
if((i__35945 < count__35944)){
var b = cljs.core._nth.call(null,chunk__35943,i__35945);
var vars_35947 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_35947))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)),"': ",cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))," vs. ",cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_35947))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__35948 = seq__35941;
var G__35949 = chunk__35943;
var G__35950 = count__35944;
var G__35951 = (i__35945 + (1));
seq__35941 = G__35948;
chunk__35943 = G__35949;
count__35944 = G__35950;
i__35945 = G__35951;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35941);
if(temp__5720__auto__){
var seq__35941__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35941__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35941__$1);
var G__35952 = cljs.core.chunk_rest.call(null,seq__35941__$1);
var G__35953 = c__4556__auto__;
var G__35954 = cljs.core.count.call(null,c__4556__auto__);
var G__35955 = (0);
seq__35941 = G__35952;
chunk__35943 = G__35953;
count__35944 = G__35954;
i__35945 = G__35955;
continue;
} else {
var b = cljs.core.first.call(null,seq__35941__$1);
var vars_35956 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_35956))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)),"': ",cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))," vs. ",cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_35956))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__35957 = cljs.core.next.call(null,seq__35941__$1);
var G__35958 = null;
var G__35959 = (0);
var G__35960 = (0);
seq__35941 = G__35957;
chunk__35943 = G__35958;
count__35944 = G__35959;
i__35945 = G__35960;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__4529__auto__ = (function datascript$parser$parse_rules_$_iter__35962(s__35963){
return (new cljs.core.LazySeq(null,(function (){
var s__35963__$1 = s__35963;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35963__$1);
if(temp__5720__auto__){
var s__35963__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35963__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__35963__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__35965 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__35964 = (0);
while(true){
if((i__35964 < size__4528__auto__)){
var vec__35966 = cljs.core._nth.call(null,c__4527__auto__,i__35964);
var name = cljs.core.nth.call(null,vec__35966,(0),null);
var branches = cljs.core.nth.call(null,vec__35966,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__35964,vec__35966,name,branches,c__4527__auto__,size__4528__auto__,b__35965,s__35963__$2,temp__5720__auto__){
return (function (p1__35961_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__35961_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__35961_SHARP_),null,null,null));
});})(i__35964,vec__35966,name,branches,c__4527__auto__,size__4528__auto__,b__35965,s__35963__$2,temp__5720__auto__))
,branches);
cljs.core.chunk_append.call(null,b__35965,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__35972 = (i__35964 + (1));
i__35964 = G__35972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),datascript$parser$parse_rules_$_iter__35962.call(null,cljs.core.chunk_rest.call(null,s__35963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),null);
}
} else {
var vec__35969 = cljs.core.first.call(null,s__35963__$2);
var name = cljs.core.nth.call(null,vec__35969,(0),null);
var branches = cljs.core.nth.call(null,vec__35969,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__35969,name,branches,s__35963__$2,temp__5720__auto__){
return (function (p1__35961_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__35961_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__35961_SHARP_),null,null,null));
});})(vec__35969,name,branches,s__35963__$2,temp__5720__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__35962.call(null,cljs.core.rest.call(null,s__35963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qreturn_map,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qreturn_map = qreturn_map;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35977,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35981 = k35977;
var G__35981__$1 = (((G__35981 instanceof cljs.core.Keyword))?G__35981.fqn:null);
switch (G__35981__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qreturn-map":
return self__.qreturn_map;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35977,else__4383__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__35982){
var vec__35983 = p__35982;
var k__4403__auto__ = cljs.core.nth.call(null,vec__35983,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__35983,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Query{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35976){
var self__ = this;
var G__35976__$1 = this;
return (new cljs.core.RecordIter((0),G__35976__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35978,other35979){
var self__ = this;
var this35978__$1 = this;
return (((!((other35979 == null)))) && ((this35978__$1.constructor === other35979.constructor)) && (cljs.core._EQ_.call(null,this35978__$1.qfind,other35979.qfind)) && (cljs.core._EQ_.call(null,this35978__$1.qwith,other35979.qwith)) && (cljs.core._EQ_.call(null,this35978__$1.qreturn_map,other35979.qreturn_map)) && (cljs.core._EQ_.call(null,this35978__$1.qin,other35979.qin)) && (cljs.core._EQ_.call(null,this35978__$1.qwhere,other35979.qwhere)) && (cljs.core._EQ_.call(null,this35978__$1.__extmap,other35979.__extmap)));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35976){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35986 = cljs.core.keyword_identical_QMARK_;
var expr__35987 = k__4388__auto__;
if(cljs.core.truth_(pred__35986.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__35987))){
return (new datascript.parser.Query(G__35976,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35986.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__35987))){
return (new datascript.parser.Query(self__.qfind,G__35976,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35986.call(null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__35987))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__35976,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35986.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__35987))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__35976,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35986.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__35987))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__35976,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__35976),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35976){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__35976,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34124__auto__,f35973){
var self__ = this;
var this__34124__auto____$1 = this;
var new__34125__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.qfind,f35973),datascript.parser.postwalk.call(null,self__.qwith,f35973),datascript.parser.postwalk.call(null,self__.qreturn_map,f35973),datascript.parser.postwalk.call(null,self__.qin,f35973),datascript.parser.postwalk.call(null,self__.qwhere,f35973),null,null,null));
var temp__5718__auto__ = cljs.core.meta.call(null,this__34124__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__34126__auto__ = temp__5718__auto__;
return cljs.core.with_meta.call(null,new__34125__auto__,meta__34126__auto__);
} else {
return new__34125__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34127__auto__,pred35974,acc35975){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect.call(null,pred35974,self__.qwhere,datascript.parser.collect.call(null,pred35974,self__.qin,datascript.parser.collect.call(null,pred35974,self__.qreturn_map,datascript.parser.collect.call(null,pred35974,self__.qwith,datascript.parser.collect.call(null,pred35974,self__.qfind,acc35975)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34127__auto__,acc35975){
var self__ = this;
var ___34127__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35975,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qreturn-map","qreturn-map",-813219775,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.parser/Query");
}));

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qreturn_map,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qreturn_map,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__35980){
var extmap__4419__auto__ = (function (){var G__35989 = cljs.core.dissoc.call(null,G__35980,new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378));
if(cljs.core.record_QMARK_.call(null,G__35980)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35989);
} else {
return G__35989;
}
})();
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__35980),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__35980),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(G__35980),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__35980),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__35980),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
if((q instanceof cljs.core.Keyword)){
var G__35991 = parsed;
var G__35992 = q;
var G__35993 = cljs.core.next.call(null,qs);
parsed = G__35991;
key = G__35992;
qs = G__35993;
continue;
} else {
var G__35994 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__35995 = key;
var G__35996 = cljs.core.next.call(null,qs);
parsed = G__35994;
key = G__35995;
qs = G__35996;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.explicit_input = (function datascript$parser$explicit_input(parsed){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(parsed);
if((parsed instanceof datascript.parser.Pattern)){
return source;
} else {
if((!((source == null)))){
if((!((source instanceof datascript.parser.DefaultSrc)))){
return source;
} else {
return null;
}
} else {
return null;
}
}
});
datascript.parser.default_in = (function datascript$parser$default_in(qwhere){
if((!(cljs.core.empty_QMARK_.call(null,datascript.parser.collect.call(null,datascript.parser.explicit_input,qwhere))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form,form_map){
var find_vars_36003 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_36004 = cljs.core.set.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_36005 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_36006 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_36007 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_36003,with_vars_36004),clojure.set.union.call(null,where_vars_36006,in_vars_36005));
var shared_36008 = clojure.set.intersection.call(null,find_vars_36003,with_vars_36004);
if(cljs.core.empty_QMARK_.call(null,unknown_36007)){
} else {
throw cljs.core.ex_info.call(null,["Query for unknown vars: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_36007))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_36007,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_36008)){
} else {
throw cljs.core.ex_info.call(null,[":find and :with should not use same variables: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_36008))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_36008,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var temp__5724__auto___36009 = new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q);
if((temp__5724__auto___36009 == null)){
} else {
var return_map_36010 = temp__5724__auto___36009;
if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.call(null,[cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_36010))," does not work with single-scalar :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.call(null,[cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_36010))," does not work with collection :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}
}

var temp__5724__auto___36011 = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q));
if((temp__5724__auto___36011 == null)){
} else {
var return_symbols_36012 = temp__5724__auto___36011;
var find_elements_36013 = datascript.parser.find_elements.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,return_symbols_36012),cljs.core.count.call(null,find_elements_36013))){
} else {
throw cljs.core.ex_info.call(null,["Count of ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)))," must match count of :find"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"return-map","return-map",1620104901),cljs.core.cons.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)),return_symbols_36012),new cljs.core.Keyword(null,"find","find",496279456),find_elements_36013,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}

if(((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.call(null,"Only one of :keys/:syms/:strs must be present",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var in_vars_36014 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_36015 = datascript.parser.collect.call(null,(function (p1__35997_SHARP_){
return (p1__35997_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_36016 = datascript.parser.collect.call(null,(function (p1__35998_SHARP_){
return (p1__35998_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4115__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_36014);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_36015);
if(cljs.core.truth_(and__4115__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_36016);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,"Vars used in :in should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_36017 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_36017))){
} else {
throw cljs.core.ex_info.call(null,"Vars used in :with should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_36018 = datascript.parser.collect.call(null,(function (p1__35999_SHARP_){
return (p1__35999_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_36019 = datascript.parser.collect.call(null,(function (p1__36000_SHARP_){
return (p1__36000_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_36020 = clojure.set.difference.call(null,where_sources_36019,in_sources_36018);
if(cljs.core.empty_QMARK_.call(null,unknown_36020)){
} else {
throw cljs.core.ex_info.call(null,["Where uses unknown source vars: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_36020))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_36020,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__36001_SHARP_){
return (p1__36001_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,(function (p1__36002_SHARP_){
return (p1__36002_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((((!(cljs.core.empty_QMARK_.call(null,rule_exprs)))) && (cljs.core.empty_QMARK_.call(null,rules_vars)))){
throw cljs.core.ex_info.call(null,"Missing rules var '%' in :in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,"Query should be a vector or a map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var qwhere = datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5720__auto__)){
var with$ = temp__5720__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),(function (){var or__4126__auto__ = datascript.parser.parse_return_map.call(null,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_return_map.call(null,new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_return_map.call(null,new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.parser.default_in.call(null,qwhere);
}
})()),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),qwhere], null));
datascript.parser.validate_query.call(null,res,q,qm);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1637332181999
