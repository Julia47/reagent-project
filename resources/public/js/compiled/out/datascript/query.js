// Compiled by ClojureScript 1.10.773 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36037,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36041 = k36037;
var G__36041__$1 = (((G__36041 instanceof cljs.core.Keyword))?G__36041.fqn:null);
switch (G__36041__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36037,else__4383__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__36042){
var vec__36043 = p__36042;
var k__4403__auto__ = cljs.core.nth.call(null,vec__36043,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__36043,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Context{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36036){
var self__ = this;
var G__36036__$1 = this;
return (new cljs.core.RecordIter((0),G__36036__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36038,other36039){
var self__ = this;
var this36038__$1 = this;
return (((!((other36039 == null)))) && ((this36038__$1.constructor === other36039.constructor)) && (cljs.core._EQ_.call(null,this36038__$1.rels,other36039.rels)) && (cljs.core._EQ_.call(null,this36038__$1.sources,other36039.sources)) && (cljs.core._EQ_.call(null,this36038__$1.rules,other36039.rules)) && (cljs.core._EQ_.call(null,this36038__$1.__extmap,other36039.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36036){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36046 = cljs.core.keyword_identical_QMARK_;
var expr__36047 = k__4388__auto__;
if(cljs.core.truth_(pred__36046.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__36047))){
return (new datascript.query.Context(G__36036,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36046.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__36047))){
return (new datascript.query.Context(self__.rels,G__36036,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36046.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__36047))){
return (new datascript.query.Context(self__.rels,self__.sources,G__36036,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__36036),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36036){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__36036,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__36040){
var extmap__4419__auto__ = (function (){var G__36049 = cljs.core.dissoc.call(null,G__36040,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.record_QMARK_.call(null,G__36040)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36049);
} else {
return G__36049;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__36040),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__36040),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__36040),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36052,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36056 = k36052;
var G__36056__$1 = (((G__36056 instanceof cljs.core.Keyword))?G__36056.fqn:null);
switch (G__36056__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36052,else__4383__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__36057){
var vec__36058 = p__36057;
var k__4403__auto__ = cljs.core.nth.call(null,vec__36058,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__36058,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Relation{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36051){
var self__ = this;
var G__36051__$1 = this;
return (new cljs.core.RecordIter((0),G__36051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36053,other36054){
var self__ = this;
var this36053__$1 = this;
return (((!((other36054 == null)))) && ((this36053__$1.constructor === other36054.constructor)) && (cljs.core._EQ_.call(null,this36053__$1.attrs,other36054.attrs)) && (cljs.core._EQ_.call(null,this36053__$1.tuples,other36054.tuples)) && (cljs.core._EQ_.call(null,this36053__$1.__extmap,other36054.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36051){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36061 = cljs.core.keyword_identical_QMARK_;
var expr__36062 = k__4388__auto__;
if(cljs.core.truth_(pred__36061.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36062))){
return (new datascript.query.Relation(G__36051,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36061.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__36062))){
return (new datascript.query.Relation(self__.attrs,G__36051,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__36051),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36051){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__36051,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__36055){
var extmap__4419__auto__ = (function (){var G__36064 = cljs.core.dissoc.call(null,G__36055,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core.record_QMARK_.call(null,G__36055)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36064);
} else {
return G__36064;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__36055),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__36055),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next.call(null,coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first.call(null,coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36067 = arguments.length;
var i__4737__auto___36068 = (0);
while(true){
if((i__4737__auto___36068 < len__4736__auto___36067)){
args__4742__auto__.push((arguments[i__4737__auto___36068]));

var G__36069 = (i__4737__auto___36068 + (1));
i__4737__auto___36068 = G__36069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq36066){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36066));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__36074 = arguments.length;
switch (G__36074) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36076 = arguments.length;
var i__4737__auto___36077 = (0);
while(true){
if((i__4737__auto___36077 < len__4736__auto___36076)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36077]));

var G__36078 = (i__4737__auto___36077 + (1));
i__4737__auto___36077 = G__36078;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.call(null,cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq36071){
var G__36072 = cljs.core.first.call(null,seq36071);
var seq36071__$1 = cljs.core.next.call(null,seq36071);
var G__36073 = cljs.core.first.call(null,seq36071__$1);
var seq36071__$2 = cljs.core.next.call(null,seq36071__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36072,G__36073,seq36071__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,(function (p1__36079_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__36079_SHARP_);
}),cljs.core.keys.call(null,a))) && (cljs.core.every_QMARK_.call(null,(function (p1__36080_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__36080_SHARP_);
}),cljs.core.keys.call(null,a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__36085){
var vec__36086 = p__36085;
var pattern_el = cljs.core.nth.call(null,vec__36086,(0),null);
var form_el = cljs.core.nth.call(null,vec__36086,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__36093){
var vec__36094 = p__36093;
var pattern_el = cljs.core.nth.call(null,vec__36094,(0),null);
var form_el = cljs.core.nth.call(null,vec__36094,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form))));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(l1 + l2));
var n__4613__auto___36097 = l1;
var i_36098 = (0);
while(true){
if((i_36098 < n__4613__auto___36097)){
(res[i_36098] = (t1[(idxs1[i_36098])]));

var G__36099 = (i_36098 + (1));
i_36098 = G__36099;
continue;
} else {
}
break;
}

var n__4613__auto___36100 = l2;
var i_36101 = (0);
while(true){
if((i_36101 < n__4613__auto___36100)){
(res[(l1 + i_36101)] = (t2[(idxs2[i_36101])]));

var G__36102 = (i_36101 + (1));
i_36101 = G__36102;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__36103 = a;
var map__36103__$1 = (((((!((map__36103 == null))))?(((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36103):map__36103);
var attrs_a = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__36104 = b;
var map__36104__$1 = (((((!((map__36104 == null))))?(((((map__36104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36104):map__36104);
var attrs_b = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.call(null,attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.call(null,cljs.core.vec.call(null,tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_.call(null,attrs_a,attrs_b)))){
throw cljs.core.ex_info.call(null,["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.call(null,attrs_a)," and ",cljs.core.pr_str.call(null,attrs_b)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,attrs_a))){
var idxb__GT_idxa = cljs.core.vec.call(null,(function (){var iter__4529__auto__ = (function datascript$query$sum_rel_$_iter__36107(s__36108){
return (new cljs.core.LazySeq(null,(function (){
var s__36108__$1 = s__36108;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36108__$1);
if(temp__5720__auto__){
var s__36108__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36108__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36108__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36110 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36109 = (0);
while(true){
if((i__36109 < size__4528__auto__)){
var vec__36111 = cljs.core._nth.call(null,c__4527__auto__,i__36109);
var sym = cljs.core.nth.call(null,vec__36111,(0),null);
var idx_b = cljs.core.nth.call(null,vec__36111,(1),null);
cljs.core.chunk_append.call(null,b__36110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null));

var G__36133 = (i__36109 + (1));
i__36109 = G__36133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36110),datascript$query$sum_rel_$_iter__36107.call(null,cljs.core.chunk_rest.call(null,s__36108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36110),null);
}
} else {
var vec__36114 = cljs.core.first.call(null,s__36108__$2);
var sym = cljs.core.nth.call(null,vec__36114,(0),null);
var idx_b = cljs.core.nth.call(null,vec__36114,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null),datascript$query$sum_rel_$_iter__36107.call(null,cljs.core.rest.call(null,s__36108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,attrs_b);
})());
var tlen = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,tlen);
var seq__36117_36134 = cljs.core.seq.call(null,idxb__GT_idxa);
var chunk__36118_36135 = null;
var count__36119_36136 = (0);
var i__36120_36137 = (0);
while(true){
if((i__36120_36137 < count__36119_36136)){
var vec__36127_36138 = cljs.core._nth.call(null,chunk__36118_36135,i__36120_36137);
var idx_b_36139 = cljs.core.nth.call(null,vec__36127_36138,(0),null);
var idx_a_36140 = cljs.core.nth.call(null,vec__36127_36138,(1),null);
(tuple_SINGLEQUOTE_[idx_a_36140] = (tuple_b[idx_b_36139]));


var G__36141 = seq__36117_36134;
var G__36142 = chunk__36118_36135;
var G__36143 = count__36119_36136;
var G__36144 = (i__36120_36137 + (1));
seq__36117_36134 = G__36141;
chunk__36118_36135 = G__36142;
count__36119_36136 = G__36143;
i__36120_36137 = G__36144;
continue;
} else {
var temp__5720__auto___36145 = cljs.core.seq.call(null,seq__36117_36134);
if(temp__5720__auto___36145){
var seq__36117_36146__$1 = temp__5720__auto___36145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36117_36146__$1)){
var c__4556__auto___36147 = cljs.core.chunk_first.call(null,seq__36117_36146__$1);
var G__36148 = cljs.core.chunk_rest.call(null,seq__36117_36146__$1);
var G__36149 = c__4556__auto___36147;
var G__36150 = cljs.core.count.call(null,c__4556__auto___36147);
var G__36151 = (0);
seq__36117_36134 = G__36148;
chunk__36118_36135 = G__36149;
count__36119_36136 = G__36150;
i__36120_36137 = G__36151;
continue;
} else {
var vec__36130_36152 = cljs.core.first.call(null,seq__36117_36146__$1);
var idx_b_36153 = cljs.core.nth.call(null,vec__36130_36152,(0),null);
var idx_a_36154 = cljs.core.nth.call(null,vec__36130_36152,(1),null);
(tuple_SINGLEQUOTE_[idx_a_36154] = (tuple_b[idx_b_36153]));


var G__36155 = cljs.core.next.call(null,seq__36117_36146__$1);
var G__36156 = null;
var G__36157 = (0);
var G__36158 = (0);
seq__36117_36134 = G__36155;
chunk__36118_36135 = G__36156;
count__36119_36136 = G__36157;
i__36120_36137 = G__36158;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.call(null,acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$.call(null,cljs.core.vec.call(null,tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.merge.call(null,attrs_a,attrs_b)),cljs.core.range.call(null));
return datascript.query.sum_rel.call(null,datascript.query.sum_rel.call(null,(new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null)),a),b);

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__36160 = arguments.length;
switch (G__36160) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,t1){
return cljs.core.reduce.call(null,(function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36163 = arguments.length;
var i__4737__auto___36164 = (0);
while(true){
if((i__4737__auto___36164 < len__4736__auto___36163)){
args__4742__auto__.push((arguments[i__4737__auto___36164]));

var G__36165 = (i__4737__auto___36164 + (1));
i__4737__auto___36164 = G__36165;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq36162){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36162));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,"get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5722__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5722__auto__ == null)){
return else_val;
} else {
var datom = temp__5722__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36169 = arguments.length;
var i__4737__auto___36170 = (0);
while(true){
if((i__4737__auto___36170 < len__4736__auto___36169)){
args__4742__auto__.push((arguments[i__4737__auto___36170]));

var G__36171 = (i__4737__auto___36170 + (1));
i__4737__auto___36170 = G__36171;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__5724__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5724__auto__ == null)){
return null;
} else {
var datom = temp__5724__auto__;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq36166){
var G__36167 = cljs.core.first.call(null,seq36166);
var seq36166__$1 = cljs.core.next.call(null,seq36166);
var G__36168 = cljs.core.first.call(null,seq36166__$1);
var seq36166__$2 = cljs.core.next.call(null,seq36166__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36167,G__36168,seq36166__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36173 = arguments.length;
var i__4737__auto___36174 = (0);
while(true){
if((i__4737__auto___36174 < len__4736__auto___36173)){
args__4742__auto__.push((arguments[i__4737__auto___36174]));

var G__36175 = (i__4737__auto___36174 + (1));
i__4737__auto___36174 = G__36175;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced.call(null,b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq36172){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36172));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36177 = arguments.length;
var i__4737__auto___36178 = (0);
while(true){
if((i__4737__auto___36178 < len__4736__auto___36177)){
args__4742__auto__.push((arguments[i__4737__auto___36178]));

var G__36179 = (i__4737__auto___36178 + (1));
i__4737__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced.call(null,b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq36176){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36176));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"untuple","untuple",-606149900,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"tuple","tuple",1167864243,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.identity,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.vector,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty_QMARK_,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core.keyword,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__36185 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__36185 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__36185;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4529__auto__ = (function datascript$query$variance_$_iter__36186(s__36187){
return (new cljs.core.LazySeq(null,(function (){
var s__36187__$1 = s__36187;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36187__$1);
if(temp__5720__auto__){
var s__36187__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36187__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36187__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36189 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36188 = (0);
while(true){
if((i__36188 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__36188);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__36189,(delta * delta));

var G__36190 = (i__36188 + (1));
i__36188 = G__36190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36189),datascript$query$variance_$_iter__36186.call(null,cljs.core.chunk_rest.call(null,s__36187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36189),null);
}
} else {
var x = cljs.core.first.call(null,s__36187__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__36186.call(null,cljs.core.rest.call(null,s__36187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__36191 = null;
var G__36191__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__36191__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__36191 = function(n,coll){
switch(arguments.length){
case 1:
return G__36191__1.call(this,n);
case 2:
return G__36191__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36191.cljs$core$IFn$_invoke$arity$1 = G__36191__1;
G__36191.cljs$core$IFn$_invoke$arity$2 = G__36191__2;
return G__36191;
})()
,(function() {
var G__36192 = null;
var G__36192__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__36192__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__36192 = function(n,coll){
switch(arguments.length){
case 1:
return G__36192__1.call(this,n);
case 2:
return G__36192__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36192.cljs$core$IFn$_invoke$arity$1 = G__36192__1;
G__36192.cljs$core$IFn$_invoke$arity$2 = G__36192__2;
return G__36192;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.set,avg,stddev,(function() {
var G__36193 = null;
var G__36193__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__36193__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__36193 = function(n,coll){
switch(arguments.length){
case 1:
return G__36193__1.call(this,n);
case 2:
return G__36193__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36193.cljs$core$IFn$_invoke$arity$1 = G__36193__1;
G__36193.cljs$core$IFn$_invoke$arity$2 = G__36193__2;
return G__36193;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
datascript.parser.parse_rules.call(null,rules__$1);

return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_36194 = (function (binding,value){
var x__4428__auto__ = (((binding == null))?null:binding);
var m__4429__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,binding,value);
} else {
var m__4426__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_36194.call(null,binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to collection ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,(function (p1__36195_SHARP_){
return datascript.query.in__GT_rel.call(null,binding__$1.binding,p1__36195_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,binding__$1.bindings))){
throw cljs.core.ex_info.call(null,["Not enough elements in a collection ",cljs.core.pr_str.call(null,coll)," to bind tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,(function (p1__36196_SHARP_,p2__36197_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__36196_SHARP_,p2__36197_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__36198){
var vec__36199 = p__36198;
var binding = cljs.core.nth.call(null,vec__36199,(0),null);
var value = cljs.core.nth.call(null,vec__36199,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count.call(null,bindings);
var cv = cljs.core.count.call(null,values);
if((cb < cv)){
throw cljs.core.ex_info.call(null,["Extra inputs passed, expected: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,(function (p1__36202_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__36202_SHARP_));
}),bindings)),", got: ",cljs.core.pr_str.call(null,cv)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.call(null,["Too few inputs passed, expected: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,(function (p1__36203_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__36203_SHARP_));
}),bindings)),", got: ",cljs.core.pr_str.call(null,cv)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if(cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map((function (p1__36204_SHARP_){
return p1__36204_SHARP_.call(null,tuple);
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,hash_table);
} else {
var tuple = temp__5722__auto__;
var key = key_fn.call(null,tuple);
var G__36206 = cljs.core.next.call(null,tuples__$1);
var G__36207 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__36206;
hash_table = G__36207;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,(function (p1__36208_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__36208_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.call(null,(function (p1__36209_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__36209_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__5722__auto__ = cljs.core.get.call(null,hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.call(null,(function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__36213 = a;
var map__36213__$1 = (((((!((map__36213 == null))))?(((((map__36213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36213):map__36213);
var attrs_a = cljs.core.get.call(null,map__36213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__36213__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__36214 = b;
var map__36214__$1 = (((((!((map__36214 == null))))?(((((map__36214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36214):map__36214);
var attrs_b = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys.call(null,attrs_a,attrs_b);
var getters_b = cljs.core.map.call(null,(function (p1__36210_SHARP_){
return datascript.query.getter_fn.call(null,attrs_b,p1__36210_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn.call(null,getters_b);
var hash = datascript.query.hash_attrs.call(null,key_fn_b,tuples_b);
var getters_a = cljs.core.map.call(null,(function (p1__36211_SHARP_){
return datascript.query.getter_fn.call(null,attrs_a,p1__36211_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn.call(null,getters_a);
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv.call(null,(function (p1__36212_SHARP_){
return (hash.call(null,key_fn_a.call(null,p1__36212_SHARP_)) == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__36217_SHARP_){
if((p1__36217_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__36217_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__36218){
var vec__36219 = p__36218;
var s = cljs.core.nth.call(null,vec__36219,(0),null);
var _ = cljs.core.nth.call(null,vec__36219,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
}),cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4115__auto__ = tuple__$1;
if(cljs.core.truth_(and__4115__auto__)){
return pattern__$1;
} else {
return and__4115__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))){
var G__36222 = cljs.core.next.call(null,tuple__$1);
var G__36223 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__36222;
pattern__$1 = G__36223;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__36224_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__36224_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__36225){
var vec__36226 = p__36225;
var s = cljs.core.nth.call(null,vec__36226,(0),null);
var _ = cljs.core.nth.call(null,vec__36226,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
}),cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.call(null,acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__36230 = cljs.core.next.call(null,rels__$1);
var G__36231 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__36232 = acc;
rels__$1 = G__36230;
new_rel__$1 = G__36231;
acc = G__36232;
continue;
} else {
var G__36233 = cljs.core.next.call(null,rels__$1);
var G__36234 = new_rel__$1;
var G__36235 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__36233;
new_rel__$1 = G__36234;
acc = G__36235;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__36236_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__36236_SHARP_),sym)){
return p1__36236_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr.call(null,context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some.call(null,(function (p1__36237_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__36237_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__36238_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__36238_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__36239_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__36239_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var n__4613__auto___36240 = len;
var i_36241 = (0);
while(true){
if((i_36241 < n__4613__auto___36240)){
var arg_36242 = cljs.core.nth.call(null,args,i_36241);
if((arg_36242 instanceof cljs.core.Symbol)){
var temp__5722__auto___36243 = cljs.core.get.call(null,sources,arg_36242);
if((temp__5722__auto___36243 == null)){
(tuples_args[i_36241] = cljs.core.get.call(null,attrs,arg_36242));
} else {
var source_36244 = temp__5722__auto___36243;
(static_args[i_36241] = source_36244);
}
} else {
(static_args[i_36241] = arg_36242);
}

var G__36245 = (i_36241 + (1));
i_36241 = G__36245;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone.call(null,static_args);
var n__4613__auto___36246 = len;
var i_36247 = (0);
while(true){
if((i_36247 < n__4613__auto___36246)){
var temp__5724__auto___36248 = (tuples_args[i_36247]);
if((temp__5724__auto___36248 == null)){
} else {
var tuple_idx_36249 = temp__5724__auto___36248;
var v_36250 = (tuple[tuple_idx_36249]);
(args__$1[i_36247] = v_36250);
}

var G__36251 = (i_36247 + (1));
i_36247 = G__36251;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,args__$1);
});
} else {
return (function (tuple){
var n__4613__auto___36252 = len;
var i_36253 = (0);
while(true){
if((i_36253 < n__4613__auto___36252)){
var temp__5724__auto___36254 = (tuples_args[i_36253]);
if((temp__5724__auto___36254 == null)){
} else {
var tuple_idx_36255 = temp__5724__auto___36254;
var v_36256 = (tuple[tuple_idx_36255]);
(static_args[i_36253] = v_36256);
}

var G__36257 = (i_36253 + (1));
i_36253 = G__36257;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__36259 = clause;
var vec__36262 = cljs.core.nth.call(null,vec__36259,(0),null);
var seq__36263 = cljs.core.seq.call(null,vec__36262);
var first__36264 = cljs.core.first.call(null,seq__36263);
var seq__36263__$1 = cljs.core.next.call(null,seq__36263);
var f = first__36264;
var args = seq__36263__$1;
var pred = (function (){var or__4126__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown predicate '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__36265 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__36265,(0),null);
var production = cljs.core.nth.call(null,vec__36265,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__36258_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__36258_SHARP_);
}));
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__36268 = clause;
var vec__36271 = cljs.core.nth.call(null,vec__36268,(0),null);
var seq__36272 = cljs.core.seq.call(null,vec__36271);
var first__36273 = cljs.core.first.call(null,seq__36272);
var seq__36272__$1 = cljs.core.next.call(null,seq__36272);
var f = first__36273;
var args = seq__36272__$1;
var out = cljs.core.nth.call(null,vec__36268,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__4126__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown function '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__36274 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__36274,(0),null);
var production = cljs.core.nth.call(null,vec__36274,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__4529__auto__ = (function datascript$query$bind_by_fn_$_iter__36277(s__36278){
return (new cljs.core.LazySeq(null,(function (){
var s__36278__$1 = s__36278;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36278__$1);
if(temp__5720__auto__){
var s__36278__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36278__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36278__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36280 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36279 = (0);
while(true){
if((i__36279 < size__4528__auto__)){
var tuple = cljs.core._nth.call(null,c__4527__auto__,i__36279);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
cljs.core.chunk_append.call(null,b__36280,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)));

var G__36281 = (i__36279 + (1));
i__36279 = G__36281;
continue;
} else {
var G__36282 = (i__36279 + (1));
i__36279 = G__36282;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36280),datascript$query$bind_by_fn_$_iter__36277.call(null,cljs.core.chunk_rest.call(null,s__36278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36280),null);
}
} else {
var tuple = cljs.core.first.call(null,s__36278__$2);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
return cljs.core.cons.call(null,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)),datascript$query$bind_by_fn_$_iter__36277.call(null,cljs.core.rest.call(null,s__36278__$2)));
} else {
var G__36283 = cljs.core.rest.call(null,s__36278__$2);
s__36278__$1 = G__36283;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_.call(null,rels)){
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_.call(null,clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_.call(null,head)){
return false;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.call(null,["Unknown rule '",cljs.core.pr_str.call(null,head)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__36285 = clause;
var seq__36286 = cljs.core.seq.call(null,vec__36285);
var first__36287 = cljs.core.first.call(null,seq__36286);
var seq__36286__$1 = cljs.core.next.call(null,seq__36286);
var rule = first__36287;
var call_args = seq__36286__$1;
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4529__auto__ = (function datascript$query$expand_rule_$_iter__36288(s__36289){
return (new cljs.core.LazySeq(null,(function (){
var s__36289__$1 = s__36289;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36289__$1);
if(temp__5720__auto__){
var s__36289__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36289__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36289__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36291 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36290 = (0);
while(true){
if((i__36290 < size__4528__auto__)){
var branch = cljs.core._nth.call(null,c__4527__auto__,i__36290);
var vec__36292 = branch;
var seq__36293 = cljs.core.seq.call(null,vec__36292);
var first__36294 = cljs.core.first.call(null,seq__36293);
var seq__36293__$1 = cljs.core.next.call(null,seq__36293);
var vec__36295 = first__36294;
var seq__36296 = cljs.core.seq.call(null,vec__36295);
var first__36297 = cljs.core.first.call(null,seq__36296);
var seq__36296__$1 = cljs.core.next.call(null,seq__36296);
var _ = first__36297;
var rule_args = seq__36296__$1;
var clauses = seq__36293__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__36291,clojure.walk.postwalk.call(null,((function (i__36290,vec__36292,seq__36293,first__36294,seq__36293__$1,vec__36295,seq__36296,first__36297,seq__36296__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__36291,s__36289__$2,temp__5720__auto__,vec__36285,seq__36286,first__36287,seq__36286__$1,rule,call_args,seqid,branches){
return (function (p1__36284_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__36284_SHARP_)){
var x__32143__auto__ = replacements.call(null,p1__36284_SHARP_);
if((x__32143__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__36284_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__32143__auto__;
}
} else {
return p1__36284_SHARP_;
}
});})(i__36290,vec__36292,seq__36293,first__36294,seq__36293__$1,vec__36295,seq__36296,first__36297,seq__36296__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__36291,s__36289__$2,temp__5720__auto__,vec__36285,seq__36286,first__36287,seq__36286__$1,rule,call_args,seqid,branches))
,clauses));

var G__36304 = (i__36290 + (1));
i__36290 = G__36304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36291),datascript$query$expand_rule_$_iter__36288.call(null,cljs.core.chunk_rest.call(null,s__36289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36291),null);
}
} else {
var branch = cljs.core.first.call(null,s__36289__$2);
var vec__36298 = branch;
var seq__36299 = cljs.core.seq.call(null,vec__36298);
var first__36300 = cljs.core.first.call(null,seq__36299);
var seq__36299__$1 = cljs.core.next.call(null,seq__36299);
var vec__36301 = first__36300;
var seq__36302 = cljs.core.seq.call(null,vec__36301);
var first__36303 = cljs.core.first.call(null,seq__36302);
var seq__36302__$1 = cljs.core.next.call(null,seq__36302);
var _ = first__36303;
var rule_args = seq__36302__$1;
var clauses = seq__36299__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__36298,seq__36299,first__36300,seq__36299__$1,vec__36301,seq__36302,first__36303,seq__36302__$1,_,rule_args,clauses,replacements,branch,s__36289__$2,temp__5720__auto__,vec__36285,seq__36286,first__36287,seq__36286__$1,rule,call_args,seqid,branches){
return (function (p1__36284_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__36284_SHARP_)){
var x__32143__auto__ = replacements.call(null,p1__36284_SHARP_);
if((x__32143__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__36284_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__32143__auto__;
}
} else {
return p1__36284_SHARP_;
}
});})(vec__36298,seq__36299,first__36300,seq__36299__$1,vec__36301,seq__36302,first__36303,seq__36302__$1,_,rule_args,clauses,replacements,branch,s__36289__$2,temp__5720__auto__,vec__36285,seq__36286,first__36287,seq__36286__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__36288.call(null,cljs.core.rest.call(null,s__36289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__36305){
var vec__36306 = p__36305;
var x = cljs.core.nth.call(null,vec__36306,(0),null);
var y = cljs.core.nth.call(null,vec__36306,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__36309 = rule_clause;
var seq__36310 = cljs.core.seq.call(null,vec__36309);
var first__36311 = cljs.core.first.call(null,seq__36310);
var seq__36310__$1 = cljs.core.next.call(null,seq__36310);
var rule = first__36311;
var call_args = seq__36310__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4529__auto__ = (function datascript$query$rule_gen_guards_$_iter__36312(s__36313){
return (new cljs.core.LazySeq(null,(function (){
var s__36313__$1 = s__36313;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36313__$1);
if(temp__5720__auto__){
var s__36313__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36313__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36313__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36315 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36314 = (0);
while(true){
if((i__36314 < size__4528__auto__)){
var prev_args = cljs.core._nth.call(null,c__4527__auto__,i__36314);
var vec__36316 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__36316,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__36316,(1),null);
cljs.core.chunk_append.call(null,b__36315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__36322 = (i__36314 + (1));
i__36314 = G__36322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36315),datascript$query$rule_gen_guards_$_iter__36312.call(null,cljs.core.chunk_rest.call(null,s__36313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36315),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__36313__$2);
var vec__36319 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__36319,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__36319,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__36312.call(null,cljs.core.rest.call(null,s__36313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,(function (p1__36323_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__36323_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__36323_SHARP_);
} else {
}

return p1__36323_SHARP_;
}),form);

return cljs.core.deref.call(null,res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set.call(null,datascript.query.walk_collect.call(null,clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars.call(null,clauses);
var pred = (function (p__36324){
var vec__36325 = p__36324;
var vec__36328 = cljs.core.nth.call(null,vec__36325,(0),null);
var seq__36329 = cljs.core.seq.call(null,vec__36328);
var first__36330 = cljs.core.first.call(null,seq__36329);
var seq__36329__$1 = cljs.core.next.call(null,seq__36329);
var _ = first__36330;
var vars = seq__36329__$1;
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some.call(null,(function (p1__36331_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__36331_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__36350 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__36332_SHARP_){
return (!(datascript.query.rule_QMARK_.call(null,context,p1__36332_SHARP_)));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__36350,(0),null);
var vec__36353 = cljs.core.nth.call(null,vec__36350,(1),null);
var seq__36354 = cljs.core.seq.call(null,vec__36353);
var first__36355 = cljs.core.first.call(null,seq__36354);
var seq__36354__$1 = cljs.core.next.call(null,seq__36354);
var rule_clause = first__36355;
var next_clauses = seq__36354__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__36366 = cljs.core.next.call(null,stack);
var G__36367 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__36366;
rel = G__36367;
continue;
} else {
var vec__36356 = rule_clause;
var seq__36357 = cljs.core.seq.call(null,vec__36356);
var first__36358 = cljs.core.first.call(null,seq__36357);
var seq__36357__$1 = cljs.core.next.call(null,seq__36357);
var rule = first__36358;
var call_args = seq__36357__$1;
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__36359 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__36359,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__36359,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__36333_SHARP_){
return cljs.core._EQ_.call(null,p1__36333_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__36368 = cljs.core.next.call(null,stack);
var G__36369 = rel;
stack = G__36368;
rel = G__36369;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__36370 = cljs.core.next.call(null,stack);
var G__36371 = rel;
stack = G__36370;
rel = G__36371;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__36372 = cljs.core.concat.call(null,(function (){var iter__4529__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__36362(s__36363){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__36363__$1 = s__36363;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36363__$1);
if(temp__5720__auto__){
var s__36363__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36363__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36363__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36365 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36364 = (0);
while(true){
if((i__36364 < size__4528__auto__)){
var branch = cljs.core._nth.call(null,c__4527__auto__,i__36364);
cljs.core.chunk_append.call(null,b__36365,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__36374 = (i__36364 + (1));
i__36364 = G__36374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36365),datascript$query$solve_rule_$_iter__36362.call(null,cljs.core.chunk_rest.call(null,s__36363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36365),null);
}
} else {
var branch = cljs.core.first.call(null,s__36363__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__36362.call(null,cljs.core.rest.call(null,s__36363__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36356,seq__36357,first__36358,seq__36357__$1,rule,call_args,guards,vec__36359,active_gs,pending_gs,vec__36350,clauses,vec__36353,seq__36354,first__36355,seq__36354__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4529__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__36373 = rel;
stack = G__36372;
rel = G__36373;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source))){
var vec__36376 = pattern;
var e = cljs.core.nth.call(null,vec__36376,(0),null);
var a = cljs.core.nth.call(null,vec__36376,(1),null);
var v = cljs.core.nth.call(null,vec__36376,(2),null);
var tx = cljs.core.nth.call(null,vec__36376,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = datascript.query.lookup_ref_QMARK_.call(null,e);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,e);
}
})())?datascript.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
if(datascript.query.attr_QMARK_.call(null,a)){
if(datascript.db.ref_QMARK_.call(null,source,a)){
var or__4126__auto__ = datascript.query.lookup_ref_QMARK_.call(null,v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?datascript.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__36379 = pattern;
var e = cljs.core.nth.call(null,vec__36379,(0),null);
var a = cljs.core.nth.call(null,vec__36379,(1),null);
var v = cljs.core.nth.call(null,vec__36379,(2),null);
var tx = cljs.core.nth.call(null,vec__36379,(3),null);
var G__36382 = cljs.core.PersistentHashSet.EMPTY;
var G__36382__$1 = ((datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__36382,e):G__36382);
var G__36382__$2 = ((datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__36382__$1,tx):G__36382__$1);
if(((datascript.query.free_var_QMARK_.call(null,v)) && ((!(datascript.query.free_var_QMARK_.call(null,a)))) && (datascript.db.ref_QMARK_.call(null,source,a)))){
return cljs.core.conj.call(null,G__36382__$2,v);
} else {
return G__36382__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.call(null,rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.call(null,(function (p1__36383_SHARP_){
return datascript.query.limit_rel.call(null,p1__36383_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__36384_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__36384_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_.call(null,vars,bound)){
return null;
} else {
var missing = clojure.set.difference.call(null,cljs.core.set.call(null,vars),bound);
throw cljs.core.ex_info.call(null,["Insufficient bindings: ",cljs.core.pr_str.call(null,missing)," not bound in ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.call(null,(function (p1__36385_SHARP_){
return clojure.set.difference.call(null,datascript.query.collect_vars.call(null,p1__36385_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,free)," in ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set.call(null,cljs.core.remove.call(null,bound,vars));
var seq__36386 = cljs.core.seq.call(null,branches);
var chunk__36387 = null;
var count__36388 = (0);
var i__36389 = (0);
while(true){
if((i__36389 < count__36388)){
var branch = cljs.core._nth.call(null,chunk__36387,i__36389);
var temp__5724__auto___36390 = cljs.core.not_empty.call(null,clojure.set.difference.call(null,free,datascript.query.collect_vars.call(null,branch)));
if((temp__5724__auto___36390 == null)){
} else {
var missing_36391 = temp__5724__auto___36390;
cljs.core.prn.call(null,branch,bound,vars,free);

throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,missing_36391)," not bound in ",cljs.core.pr_str.call(null,branch)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_36391], null));
}


var G__36392 = seq__36386;
var G__36393 = chunk__36387;
var G__36394 = count__36388;
var G__36395 = (i__36389 + (1));
seq__36386 = G__36392;
chunk__36387 = G__36393;
count__36388 = G__36394;
i__36389 = G__36395;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36386);
if(temp__5720__auto__){
var seq__36386__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36386__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36386__$1);
var G__36396 = cljs.core.chunk_rest.call(null,seq__36386__$1);
var G__36397 = c__4556__auto__;
var G__36398 = cljs.core.count.call(null,c__4556__auto__);
var G__36399 = (0);
seq__36386 = G__36396;
chunk__36387 = G__36397;
count__36388 = G__36398;
i__36389 = G__36399;
continue;
} else {
var branch = cljs.core.first.call(null,seq__36386__$1);
var temp__5724__auto___36400 = cljs.core.not_empty.call(null,clojure.set.difference.call(null,free,datascript.query.collect_vars.call(null,branch)));
if((temp__5724__auto___36400 == null)){
} else {
var missing_36401 = temp__5724__auto___36400;
cljs.core.prn.call(null,branch,bound,vars,free);

throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,missing_36401)," not bound in ",cljs.core.pr_str.call(null,branch)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_36401], null));
}


var G__36402 = cljs.core.next.call(null,seq__36386__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__36386 = G__36402;
chunk__36387 = G__36403;
count__36388 = G__36404;
i__36389 = G__36405;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__36411 = arguments.length;
switch (G__36411) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.call(null,context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__36412 = datascript.query.looks_like_QMARK_;
var expr__36413 = clause;
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__36413))){
datascript.query.check_bound.call(null,datascript.query.bound_vars.call(null,context),cljs.core.filter.call(null,datascript.query.free_var_QMARK_,cljs.core.nfirst.call(null,clause)),clause);

return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__36413))){
datascript.query.check_bound.call(null,datascript.query.bound_vars.call(null,context),cljs.core.filter.call(null,datascript.query.free_var_QMARK_,cljs.core.nfirst.call(null,clause)),clause);

return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36415 = clause;
var seq__36416 = cljs.core.seq.call(null,vec__36415);
var first__36417 = cljs.core.first.call(null,seq__36416);
var seq__36416__$1 = cljs.core.next.call(null,seq__36416);
var source_sym = first__36417;
var rest = seq__36416__$1;
var _STAR_implicit_source_STAR__orig_val__36418 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36419 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36419);

try{return datascript.query._resolve_clause.call(null,context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36418);
}} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36420 = clause;
var seq__36421 = cljs.core.seq.call(null,vec__36420);
var first__36422 = cljs.core.first.call(null,seq__36421);
var seq__36421__$1 = cljs.core.next.call(null,seq__36421);
var _ = first__36422;
var branches = seq__36421__$1;
var ___$1 = datascript.query.check_free_same.call(null,datascript.query.bound_vars.call(null,context),branches,clause);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36420,seq__36421,first__36422,seq__36421__$1,_,branches,___$1,pred__36412,expr__36413){
return (function (p1__36406_SHARP_){
return datascript.query.resolve_clause.call(null,context,p1__36406_SHARP_);
});})(context,clause,orig_clause,vec__36420,seq__36421,first__36422,seq__36421__$1,_,branches,___$1,pred__36412,expr__36413))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36420,seq__36421,first__36422,seq__36421__$1,_,branches,___$1,contexts,pred__36412,expr__36413){
return (function (p1__36407_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__36407_SHARP_));
});})(context,clause,orig_clause,vec__36420,seq__36421,first__36422,seq__36421__$1,_,branches,___$1,contexts,pred__36412,expr__36413))
,contexts);
return cljs.core.assoc.call(null,cljs.core.first.call(null,contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36423 = clause;
var seq__36424 = cljs.core.seq.call(null,vec__36423);
var first__36425 = cljs.core.first.call(null,seq__36424);
var seq__36424__$1 = cljs.core.next.call(null,seq__36424);
var _ = first__36425;
var first__36425__$1 = cljs.core.first.call(null,seq__36424__$1);
var seq__36424__$2 = cljs.core.next.call(null,seq__36424__$1);
var vec__36426 = first__36425__$1;
var seq__36427 = cljs.core.seq.call(null,vec__36426);
var first__36428 = cljs.core.first.call(null,seq__36427);
var seq__36427__$1 = cljs.core.next.call(null,seq__36427);
var req_vars = first__36428;
var vars = seq__36427__$1;
var branches = seq__36424__$2;
var bound = datascript.query.bound_vars.call(null,context);
datascript.query.check_bound.call(null,bound,req_vars,orig_clause);

datascript.query.check_free_subset.call(null,bound,vars,branches);

var G__36445 = context;
var G__36446 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.call(null,req_vars,vars),branches);
var G__36447 = clause;
context = G__36445;
clause = G__36446;
orig_clause = G__36447;
continue;
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36429 = clause;
var seq__36430 = cljs.core.seq.call(null,vec__36429);
var first__36431 = cljs.core.first.call(null,seq__36430);
var seq__36430__$1 = cljs.core.next.call(null,seq__36430);
var _ = first__36431;
var first__36431__$1 = cljs.core.first.call(null,seq__36430__$1);
var seq__36430__$2 = cljs.core.next.call(null,seq__36430__$1);
var vars = first__36431__$1;
var branches = seq__36430__$2;
var vars__$1 = cljs.core.set.call(null,vars);
var ___$1 = datascript.query.check_free_subset.call(null,datascript.query.bound_vars.call(null,context),vars__$1,branches);
var join_context = datascript.query.limit_context.call(null,context,vars__$1);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36429,seq__36430,first__36431,seq__36430__$1,_,first__36431__$1,seq__36430__$2,vars,branches,vars__$1,___$1,join_context,pred__36412,expr__36413){
return (function (p1__36408_SHARP_){
return datascript.query.limit_context.call(null,datascript.query.resolve_clause.call(null,join_context,p1__36408_SHARP_),vars__$1);
});})(context,clause,orig_clause,vec__36429,seq__36430,first__36431,seq__36430__$1,_,first__36431__$1,seq__36430__$2,vars,branches,vars__$1,___$1,join_context,pred__36412,expr__36413))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36429,seq__36430,first__36431,seq__36430__$1,_,first__36431__$1,seq__36430__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__36412,expr__36413){
return (function (p1__36409_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__36409_SHARP_));
});})(context,clause,orig_clause,vec__36429,seq__36430,first__36431,seq__36430__$1,_,first__36431__$1,seq__36430__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__36412,expr__36413))
,contexts);
var sum_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36432 = clause;
var seq__36433 = cljs.core.seq.call(null,vec__36432);
var first__36434 = cljs.core.first.call(null,seq__36433);
var seq__36433__$1 = cljs.core.next.call(null,seq__36433);
var _ = first__36434;
var clauses = seq__36433__$1;
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36435 = clause;
var seq__36436 = cljs.core.seq.call(null,vec__36435);
var first__36437 = cljs.core.first.call(null,seq__36436);
var seq__36436__$1 = cljs.core.next.call(null,seq__36436);
var _ = first__36437;
var clauses = seq__36436__$1;
var bound = datascript.query.bound_vars.call(null,context);
var negation_vars = datascript.query.collect_vars.call(null,clauses);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,bound,negation_vars)))?(function(){throw cljs.core.ex_info.call(null,["Insufficient bindings: none of ",cljs.core.pr_str.call(null,negation_vars)," is bound in ",cljs.core.pr_str.call(null,orig_clause)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.call(null,datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var vec__36438 = clause;
var seq__36439 = cljs.core.seq.call(null,vec__36438);
var first__36440 = cljs.core.first.call(null,seq__36439);
var seq__36439__$1 = cljs.core.next.call(null,seq__36439);
var _ = first__36440;
var first__36440__$1 = cljs.core.first.call(null,seq__36439__$1);
var seq__36439__$2 = cljs.core.next.call(null,seq__36439__$1);
var vars = first__36440__$1;
var clauses = seq__36439__$2;
var bound = datascript.query.bound_vars.call(null,context);
var ___$1 = datascript.query.check_bound.call(null,bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context.call(null,context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context.call(null,cljs.core.reduce.call(null,datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__36412.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36413))){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs.call(null,source,clause);
var relation = datascript.query.lookup_pattern.call(null,source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__36441 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__36442 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs.call(null,source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__36442);

try{return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__36441);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36413)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_.call(null,context,clause)){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
var _STAR_implicit_source_STAR__orig_val__36448 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36449 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first.call(null,clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36449);

try{return datascript.query.resolve_clause.call(null,context,cljs.core.next.call(null,clause));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36448);
}} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule.call(null,context,clause));
}
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__36450 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36451 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36451);

try{return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36450);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__36454 = arguments.length;
switch (G__36454) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var rel = cljs.core.first.call(null,rels);
if((rel == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))){
return cljs.core.PersistentVector.EMPTY;
} else {
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__36462 = acc;
var G__36463 = cljs.core.next.call(null,rels);
var G__36464 = symbols;
acc = G__36462;
rels = G__36463;
symbols = G__36464;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__36452_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__36452_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__36465 = (function (){var iter__4529__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__36455(s__36456){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function (){
var s__36456__$1 = s__36456;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36456__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__36456__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__36455_$_iter__36457(s__36458){
return (new cljs.core.LazySeq(null,((function (s__36456__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function (){
var s__36458__$1 = s__36458;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36458__$1);
if(temp__5720__auto____$1){
var s__36458__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36458__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36458__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36460 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36459 = (0);
while(true){
if((i__36459 < size__4528__auto__)){
var t2 = cljs.core._nth.call(null,c__4527__auto__,i__36459);
cljs.core.chunk_append.call(null,b__36460,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4613__auto___36468 = len;
var i_36469 = (0);
while(true){
if((i_36469 < n__4613__auto___36468)){
var temp__5724__auto___36470 = (copy_map[i_36469]);
if((temp__5724__auto___36470 == null)){
} else {
var idx_36471 = temp__5724__auto___36470;
(res[i_36469] = (t2[idx_36471]));
}

var G__36472 = (i_36469 + (1));
i_36469 = G__36472;
continue;
} else {
}
break;
}

return res;
})());

var G__36473 = (i__36459 + (1));
i__36459 = G__36473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36460),datascript$query$iter__36455_$_iter__36457.call(null,cljs.core.chunk_rest.call(null,s__36458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36460),null);
}
} else {
var t2 = cljs.core.first.call(null,s__36458__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4613__auto___36474 = len;
var i_36475 = (0);
while(true){
if((i_36475 < n__4613__auto___36474)){
var temp__5724__auto___36476 = (copy_map[i_36475]);
if((temp__5724__auto___36476 == null)){
} else {
var idx_36477 = temp__5724__auto___36476;
(res[i_36475] = (t2[idx_36477]));
}

var G__36478 = (i_36475 + (1));
i_36475 = G__36478;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__36455_$_iter__36457.call(null,cljs.core.rest.call(null,s__36458__$2)));
}
} else {
return null;
}
break;
}
});})(s__36456__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
,null,null));
});})(s__36456__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,datascript$query$iter__36455.call(null,cljs.core.rest.call(null,s__36456__$1)));
} else {
var G__36479 = cljs.core.rest.call(null,s__36456__$1);
s__36456__$1 = G__36479;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
;
return iter__4529__auto__.call(null,acc);
})();
var G__36466 = cljs.core.next.call(null,rels);
var G__36467 = symbols;
acc = G__36465;
rels = G__36466;
symbols = G__36467;
continue;

}
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_36480 = (function (var$,context){
var x__4428__auto__ = (((var$ == null))?null:var$);
var m__4429__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,var$,context);
} else {
var m__4426__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_36480.call(null,var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4126__auto__ = cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.resolve_sym.call(null,var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_.call(null,element)){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,(function (p1__36481_SHARP_){
return datascript.query._context_resolve.call(null,p1__36481_SHARP_,context);
}),cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,(function (p1__36482_SHARP_){
return cljs.core.nth.call(null,p1__36482_SHARP_,i);
}),tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__36483_SHARP_,p2__36484_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__36483_SHARP_))){
return p2__36484_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.call(null,(function (p1__36485_SHARP_){
return cljs.core.nth.call(null,tuple,p1__36485_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4529__auto__ = (function datascript$query$aggregate_$_iter__36486(s__36487){
return (new cljs.core.LazySeq(null,(function (){
var s__36487__$1 = s__36487;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36487__$1);
if(temp__5720__auto__){
var s__36487__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36487__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36487__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36489 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36488 = (0);
while(true){
if((i__36488 < size__4528__auto__)){
var vec__36490 = cljs.core._nth.call(null,c__4527__auto__,i__36488);
var _ = cljs.core.nth.call(null,vec__36490,(0),null);
var tuples = cljs.core.nth.call(null,vec__36490,(1),null);
cljs.core.chunk_append.call(null,b__36489,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__36496 = (i__36488 + (1));
i__36488 = G__36496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36489),datascript$query$aggregate_$_iter__36486.call(null,cljs.core.chunk_rest.call(null,s__36487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36489),null);
}
} else {
var vec__36493 = cljs.core.first.call(null,s__36487__$2);
var _ = cljs.core.nth.call(null,vec__36493,(0),null);
var tuples = cljs.core.nth.call(null,vec__36493,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__36486.call(null,cljs.core.rest.call(null,s__36487__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.call(null,(function (p1__36497_SHARP_,p2__36498_SHARP_){
return cljs.core.conj.call(null,p1__36497_SHARP_,f.call(null,p2__36498_SHARP_));
}),cljs.core.empty.call(null,xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.call(null,(0),cljs.core.count.call(null,symbols));
return datascript.query.map_STAR_.call(null,(function (tuple){
return cljs.core.reduce.call(null,(function (m,i){
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,symbols,i),cljs.core.nth.call(null,tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_36499 = (function (find,return_map,tuples){
var x__4428__auto__ = (((find == null))?null:find);
var m__4429__auto__ = (datascript.query._post_process[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,find,return_map,tuples);
} else {
var m__4426__auto__ = (datascript.query._post_process["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,find,return_map,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_36499.call(null,find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map.call(null,return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first.call(null,datascript.query.tuples__GT_return_map.call(null,return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,tuples)], null)));
} else {
return cljs.core.first.call(null,tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4529__auto__ = (function datascript$query$pull_$_iter__36500(s__36501){
return (new cljs.core.LazySeq(null,(function (){
var s__36501__$1 = s__36501;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36501__$1);
if(temp__5720__auto__){
var s__36501__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36501__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36501__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36503 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36502 = (0);
while(true){
if((i__36502 < size__4528__auto__)){
var find = cljs.core._nth.call(null,c__4527__auto__,i__36502);
cljs.core.chunk_append.call(null,b__36503,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__36514 = (i__36502 + (1));
i__36502 = G__36514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36503),datascript$query$pull_$_iter__36500.call(null,cljs.core.chunk_rest.call(null,s__36501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36503),null);
}
} else {
var find = cljs.core.first.call(null,s__36501__$2);
return cljs.core.cons.call(null,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__36500.call(null,cljs.core.rest.call(null,s__36501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,find_elements);
})();
var iter__4529__auto__ = (function datascript$query$pull_$_iter__36504(s__36505){
return (new cljs.core.LazySeq(null,(function (){
var s__36505__$1 = s__36505;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36505__$1);
if(temp__5720__auto__){
var s__36505__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36505__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36505__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36507 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36506 = (0);
while(true){
if((i__36506 < size__4528__auto__)){
var tuple = cljs.core._nth.call(null,c__4527__auto__,i__36506);
cljs.core.chunk_append.call(null,b__36507,cljs.core.mapv.call(null,((function (i__36506,tuple,c__4527__auto__,size__4528__auto__,b__36507,s__36505__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__36508 = env;
var src = cljs.core.nth.call(null,vec__36508,(0),null);
var spec = cljs.core.nth.call(null,vec__36508,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__36506,tuple,c__4527__auto__,size__4528__auto__,b__36507,s__36505__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__36515 = (i__36506 + (1));
i__36506 = G__36515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),datascript$query$pull_$_iter__36504.call(null,cljs.core.chunk_rest.call(null,s__36505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),null);
}
} else {
var tuple = cljs.core.first.call(null,s__36505__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__36505__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__36511 = env;
var src = cljs.core.nth.call(null,vec__36511,(0),null);
var spec = cljs.core.nth.call(null,vec__36511,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__36505__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__36504.call(null,cljs.core.rest.call(null,s__36505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.lru.lru.call(null,(100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5722__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if((temp__5722__auto__ == null)){
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
} else {
var cached = temp__5722__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36521 = arguments.length;
var i__4737__auto___36522 = (0);
while(true){
if((i__4737__auto___36522 < len__4736__auto___36521)){
args__4742__auto__.push((arguments[i__4737__auto___36522]));

var G__36523 = (i__4737__auto___36522 + (1));
i__4737__auto___36522 = G__36523;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__36519 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datascript.parser.query__GT_map.call(null,G__36519);
} else {
return G__36519;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__36520 = resultset;
var G__36520__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,(function (p1__36516_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__36516_SHARP_,(0),result_arity));
}),G__36520):G__36520);
var G__36520__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__36520__$1):G__36520__$1);
var G__36520__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__36520__$2):G__36520__$2);
return datascript.query._post_process.call(null,find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__36520__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq36517){
var G__36518 = cljs.core.first.call(null,seq36517);
var seq36517__$1 = cljs.core.next.call(null,seq36517);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36518,seq36517__$1);
}));


//# sourceMappingURL=query.js.map?rel=1637933613479
