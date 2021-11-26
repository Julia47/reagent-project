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

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36389,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36393 = k36389;
var G__36393__$1 = (((G__36393 instanceof cljs.core.Keyword))?G__36393.fqn:null);
switch (G__36393__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36389,else__4383__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__36394){
var vec__36395 = p__36394;
var k__4403__auto__ = cljs.core.nth.call(null,vec__36395,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__36395,(1),null);
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

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36388){
var self__ = this;
var G__36388__$1 = this;
return (new cljs.core.RecordIter((0),G__36388__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36390,other36391){
var self__ = this;
var this36390__$1 = this;
return (((!((other36391 == null)))) && ((this36390__$1.constructor === other36391.constructor)) && (cljs.core._EQ_.call(null,this36390__$1.rels,other36391.rels)) && (cljs.core._EQ_.call(null,this36390__$1.sources,other36391.sources)) && (cljs.core._EQ_.call(null,this36390__$1.rules,other36391.rules)) && (cljs.core._EQ_.call(null,this36390__$1.__extmap,other36391.__extmap)));
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

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36388){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36398 = cljs.core.keyword_identical_QMARK_;
var expr__36399 = k__4388__auto__;
if(cljs.core.truth_(pred__36398.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__36399))){
return (new datascript.query.Context(G__36388,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36398.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__36399))){
return (new datascript.query.Context(self__.rels,G__36388,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36398.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__36399))){
return (new datascript.query.Context(self__.rels,self__.sources,G__36388,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__36388),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36388){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__36388,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__36392){
var extmap__4419__auto__ = (function (){var G__36401 = cljs.core.dissoc.call(null,G__36392,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.record_QMARK_.call(null,G__36392)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36401);
} else {
return G__36401;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__36392),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__36392),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__36392),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36404,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36408 = k36404;
var G__36408__$1 = (((G__36408 instanceof cljs.core.Keyword))?G__36408.fqn:null);
switch (G__36408__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36404,else__4383__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__36409){
var vec__36410 = p__36409;
var k__4403__auto__ = cljs.core.nth.call(null,vec__36410,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__36410,(1),null);
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

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36403){
var self__ = this;
var G__36403__$1 = this;
return (new cljs.core.RecordIter((0),G__36403__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36405,other36406){
var self__ = this;
var this36405__$1 = this;
return (((!((other36406 == null)))) && ((this36405__$1.constructor === other36406.constructor)) && (cljs.core._EQ_.call(null,this36405__$1.attrs,other36406.attrs)) && (cljs.core._EQ_.call(null,this36405__$1.tuples,other36406.tuples)) && (cljs.core._EQ_.call(null,this36405__$1.__extmap,other36406.__extmap)));
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

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36403){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36413 = cljs.core.keyword_identical_QMARK_;
var expr__36414 = k__4388__auto__;
if(cljs.core.truth_(pred__36413.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36414))){
return (new datascript.query.Relation(G__36403,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36413.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__36414))){
return (new datascript.query.Relation(self__.attrs,G__36403,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__36403),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36403){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__36403,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__36407){
var extmap__4419__auto__ = (function (){var G__36416 = cljs.core.dissoc.call(null,G__36407,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core.record_QMARK_.call(null,G__36407)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36416);
} else {
return G__36416;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__36407),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__36407),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
var len__4736__auto___36419 = arguments.length;
var i__4737__auto___36420 = (0);
while(true){
if((i__4737__auto___36420 < len__4736__auto___36419)){
args__4742__auto__.push((arguments[i__4737__auto___36420]));

var G__36421 = (i__4737__auto___36420 + (1));
i__4737__auto___36420 = G__36421;
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
(datascript.query.concatv.cljs$lang$applyTo = (function (seq36418){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36418));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__36426 = arguments.length;
switch (G__36426) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36428 = arguments.length;
var i__4737__auto___36429 = (0);
while(true){
if((i__4737__auto___36429 < len__4736__auto___36428)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36429]));

var G__36430 = (i__4737__auto___36429 + (1));
i__4737__auto___36429 = G__36430;
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
(datascript.query.zip.cljs$lang$applyTo = (function (seq36423){
var G__36424 = cljs.core.first.call(null,seq36423);
var seq36423__$1 = cljs.core.next.call(null,seq36423);
var G__36425 = cljs.core.first.call(null,seq36423__$1);
var seq36423__$2 = cljs.core.next.call(null,seq36423__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36424,G__36425,seq36423__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,(function (p1__36431_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__36431_SHARP_);
}),cljs.core.keys.call(null,a))) && (cljs.core.every_QMARK_.call(null,(function (p1__36432_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__36432_SHARP_);
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
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__36437){
var vec__36438 = p__36437;
var pattern_el = cljs.core.nth.call(null,vec__36438,(0),null);
var form_el = cljs.core.nth.call(null,vec__36438,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__36445){
var vec__36446 = p__36445;
var pattern_el = cljs.core.nth.call(null,vec__36446,(0),null);
var form_el = cljs.core.nth.call(null,vec__36446,(1),null);
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
var n__4613__auto___36449 = l1;
var i_36450 = (0);
while(true){
if((i_36450 < n__4613__auto___36449)){
(res[i_36450] = (t1[(idxs1[i_36450])]));

var G__36451 = (i_36450 + (1));
i_36450 = G__36451;
continue;
} else {
}
break;
}

var n__4613__auto___36452 = l2;
var i_36453 = (0);
while(true){
if((i_36453 < n__4613__auto___36452)){
(res[(l1 + i_36453)] = (t2[(idxs2[i_36453])]));

var G__36454 = (i_36453 + (1));
i_36453 = G__36454;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__36455 = a;
var map__36455__$1 = (((((!((map__36455 == null))))?(((((map__36455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36455):map__36455);
var attrs_a = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__36456 = b;
var map__36456__$1 = (((((!((map__36456 == null))))?(((((map__36456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var attrs_b = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.call(null,attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.call(null,cljs.core.vec.call(null,tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_.call(null,attrs_a,attrs_b)))){
throw cljs.core.ex_info.call(null,["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.call(null,attrs_a)," and ",cljs.core.pr_str.call(null,attrs_b)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,attrs_a))){
var idxb__GT_idxa = cljs.core.vec.call(null,(function (){var iter__4529__auto__ = (function datascript$query$sum_rel_$_iter__36459(s__36460){
return (new cljs.core.LazySeq(null,(function (){
var s__36460__$1 = s__36460;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36460__$1);
if(temp__5720__auto__){
var s__36460__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36460__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36460__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36462 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36461 = (0);
while(true){
if((i__36461 < size__4528__auto__)){
var vec__36463 = cljs.core._nth.call(null,c__4527__auto__,i__36461);
var sym = cljs.core.nth.call(null,vec__36463,(0),null);
var idx_b = cljs.core.nth.call(null,vec__36463,(1),null);
cljs.core.chunk_append.call(null,b__36462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null));

var G__36485 = (i__36461 + (1));
i__36461 = G__36485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36462),datascript$query$sum_rel_$_iter__36459.call(null,cljs.core.chunk_rest.call(null,s__36460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36462),null);
}
} else {
var vec__36466 = cljs.core.first.call(null,s__36460__$2);
var sym = cljs.core.nth.call(null,vec__36466,(0),null);
var idx_b = cljs.core.nth.call(null,vec__36466,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null),datascript$query$sum_rel_$_iter__36459.call(null,cljs.core.rest.call(null,s__36460__$2)));
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
var seq__36469_36486 = cljs.core.seq.call(null,idxb__GT_idxa);
var chunk__36470_36487 = null;
var count__36471_36488 = (0);
var i__36472_36489 = (0);
while(true){
if((i__36472_36489 < count__36471_36488)){
var vec__36479_36490 = cljs.core._nth.call(null,chunk__36470_36487,i__36472_36489);
var idx_b_36491 = cljs.core.nth.call(null,vec__36479_36490,(0),null);
var idx_a_36492 = cljs.core.nth.call(null,vec__36479_36490,(1),null);
(tuple_SINGLEQUOTE_[idx_a_36492] = (tuple_b[idx_b_36491]));


var G__36493 = seq__36469_36486;
var G__36494 = chunk__36470_36487;
var G__36495 = count__36471_36488;
var G__36496 = (i__36472_36489 + (1));
seq__36469_36486 = G__36493;
chunk__36470_36487 = G__36494;
count__36471_36488 = G__36495;
i__36472_36489 = G__36496;
continue;
} else {
var temp__5720__auto___36497 = cljs.core.seq.call(null,seq__36469_36486);
if(temp__5720__auto___36497){
var seq__36469_36498__$1 = temp__5720__auto___36497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36469_36498__$1)){
var c__4556__auto___36499 = cljs.core.chunk_first.call(null,seq__36469_36498__$1);
var G__36500 = cljs.core.chunk_rest.call(null,seq__36469_36498__$1);
var G__36501 = c__4556__auto___36499;
var G__36502 = cljs.core.count.call(null,c__4556__auto___36499);
var G__36503 = (0);
seq__36469_36486 = G__36500;
chunk__36470_36487 = G__36501;
count__36471_36488 = G__36502;
i__36472_36489 = G__36503;
continue;
} else {
var vec__36482_36504 = cljs.core.first.call(null,seq__36469_36498__$1);
var idx_b_36505 = cljs.core.nth.call(null,vec__36482_36504,(0),null);
var idx_a_36506 = cljs.core.nth.call(null,vec__36482_36504,(1),null);
(tuple_SINGLEQUOTE_[idx_a_36506] = (tuple_b[idx_b_36505]));


var G__36507 = cljs.core.next.call(null,seq__36469_36498__$1);
var G__36508 = null;
var G__36509 = (0);
var G__36510 = (0);
seq__36469_36486 = G__36507;
chunk__36470_36487 = G__36508;
count__36471_36488 = G__36509;
i__36472_36489 = G__36510;
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
var G__36512 = arguments.length;
switch (G__36512) {
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
var len__4736__auto___36515 = arguments.length;
var i__4737__auto___36516 = (0);
while(true){
if((i__4737__auto___36516 < len__4736__auto___36515)){
args__4742__auto__.push((arguments[i__4737__auto___36516]));

var G__36517 = (i__4737__auto___36516 + (1));
i__4737__auto___36516 = G__36517;
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
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq36514){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36514));
}));

datascript.query._get_else = (function datascript$query$_get_else(db__$1,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,"get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5722__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5722__auto__ == null)){
return else_val;
} else {
var datom = temp__5722__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
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

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__5724__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
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
(datascript.query._get_some.cljs$lang$applyTo = (function (seq36518){
var G__36519 = cljs.core.first.call(null,seq36518);
var seq36518__$1 = cljs.core.next.call(null,seq36518);
var G__36520 = cljs.core.first.call(null,seq36518__$1);
var seq36518__$2 = cljs.core.next.call(null,seq36518__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36519,G__36520,seq36518__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db__$1,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db__$1,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36525 = arguments.length;
var i__4737__auto___36526 = (0);
while(true){
if((i__4737__auto___36526 < len__4736__auto___36525)){
args__4742__auto__.push((arguments[i__4737__auto___36526]));

var G__36527 = (i__4737__auto___36526 + (1));
i__4737__auto___36526 = G__36527;
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
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq36524){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36524));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36529 = arguments.length;
var i__4737__auto___36530 = (0);
while(true){
if((i__4737__auto___36530 < len__4736__auto___36529)){
args__4742__auto__.push((arguments[i__4737__auto___36530]));

var G__36531 = (i__4737__auto___36530 + (1));
i__4737__auto___36530 = G__36531;
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
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq36528){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36528));
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
var G__36537 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__36537 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__36537;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4529__auto__ = (function datascript$query$variance_$_iter__36538(s__36539){
return (new cljs.core.LazySeq(null,(function (){
var s__36539__$1 = s__36539;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36539__$1);
if(temp__5720__auto__){
var s__36539__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36539__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36539__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36541 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36540 = (0);
while(true){
if((i__36540 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__36540);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__36541,(delta * delta));

var G__36542 = (i__36540 + (1));
i__36540 = G__36542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36541),datascript$query$variance_$_iter__36538.call(null,cljs.core.chunk_rest.call(null,s__36539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36541),null);
}
} else {
var x = cljs.core.first.call(null,s__36539__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__36538.call(null,cljs.core.rest.call(null,s__36539__$2)));
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
var G__36543 = null;
var G__36543__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__36543__2 = (function (n,coll){
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
G__36543 = function(n,coll){
switch(arguments.length){
case 1:
return G__36543__1.call(this,n);
case 2:
return G__36543__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36543.cljs$core$IFn$_invoke$arity$1 = G__36543__1;
G__36543.cljs$core$IFn$_invoke$arity$2 = G__36543__2;
return G__36543;
})()
,(function() {
var G__36544 = null;
var G__36544__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__36544__2 = (function (n,coll){
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
G__36544 = function(n,coll){
switch(arguments.length){
case 1:
return G__36544__1.call(this,n);
case 2:
return G__36544__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36544.cljs$core$IFn$_invoke$arity$1 = G__36544__1;
G__36544.cljs$core$IFn$_invoke$arity$2 = G__36544__2;
return G__36544;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.set,avg,stddev,(function() {
var G__36545 = null;
var G__36545__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__36545__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__36545 = function(n,coll){
switch(arguments.length){
case 1:
return G__36545__1.call(this,n);
case 2:
return G__36545__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36545.cljs$core$IFn$_invoke$arity$1 = G__36545__1;
G__36545.cljs$core$IFn$_invoke$arity$2 = G__36545__2;
return G__36545;
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

var datascript$query$IBinding$in__GT_rel$dyn_36546 = (function (binding,value){
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
return datascript$query$IBinding$in__GT_rel$dyn_36546.call(null,binding,value);
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
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,(function (p1__36547_SHARP_){
return datascript.query.in__GT_rel.call(null,binding__$1.binding,p1__36547_SHARP_);
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
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,(function (p1__36548_SHARP_,p2__36549_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__36548_SHARP_,p2__36549_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__36550){
var vec__36551 = p__36550;
var binding = cljs.core.nth.call(null,vec__36551,(0),null);
var value = cljs.core.nth.call(null,vec__36551,(1),null);
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
throw cljs.core.ex_info.call(null,["Extra inputs passed, expected: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,(function (p1__36554_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__36554_SHARP_));
}),bindings)),", got: ",cljs.core.pr_str.call(null,cv)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.call(null,["Too few inputs passed, expected: ",cljs.core.pr_str.call(null,cljs.core.mapv.call(null,(function (p1__36555_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__36555_SHARP_));
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
return cljs.core.list_STAR_.call(null,getters__$1.map((function (p1__36556_SHARP_){
return p1__36556_SHARP_.call(null,tuple);
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
var G__36558 = cljs.core.next.call(null,tuples__$1);
var G__36559 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__36558;
hash_table = G__36559;
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
var common_gtrs1 = cljs.core.map.call(null,(function (p1__36560_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__36560_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.call(null,(function (p1__36561_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__36561_SHARP_);
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
var map__36565 = a;
var map__36565__$1 = (((((!((map__36565 == null))))?(((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36565):map__36565);
var attrs_a = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__36566 = b;
var map__36566__$1 = (((((!((map__36566 == null))))?(((((map__36566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36566):map__36566);
var attrs_b = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys.call(null,attrs_a,attrs_b);
var getters_b = cljs.core.map.call(null,(function (p1__36562_SHARP_){
return datascript.query.getter_fn.call(null,attrs_b,p1__36562_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn.call(null,getters_b);
var hash = datascript.query.hash_attrs.call(null,key_fn_b,tuples_b);
var getters_a = cljs.core.map.call(null,(function (p1__36563_SHARP_){
return datascript.query.getter_fn.call(null,attrs_a,p1__36563_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn.call(null,getters_a);
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv.call(null,(function (p1__36564_SHARP_){
return (hash.call(null,key_fn_a.call(null,p1__36564_SHARP_)) == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db__$1,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__36569_SHARP_){
if((p1__36569_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__36569_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db__$1,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__36570){
var vec__36571 = p__36570;
var s = cljs.core.nth.call(null,vec__36571,(0),null);
var _ = cljs.core.nth.call(null,vec__36571,(1),null);
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
var G__36574 = cljs.core.next.call(null,tuple__$1);
var G__36575 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__36574;
pattern__$1 = G__36575;
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
var data = cljs.core.filter.call(null,(function (p1__36576_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__36576_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__36577){
var vec__36578 = p__36577;
var s = cljs.core.nth.call(null,vec__36578,(0),null);
var _ = cljs.core.nth.call(null,vec__36578,(1),null);
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
var G__36582 = cljs.core.next.call(null,rels__$1);
var G__36583 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__36584 = acc;
rels__$1 = G__36582;
new_rel__$1 = G__36583;
acc = G__36584;
continue;
} else {
var G__36585 = cljs.core.next.call(null,rels__$1);
var G__36586 = new_rel__$1;
var G__36587 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__36585;
new_rel__$1 = G__36586;
acc = G__36587;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__36588_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__36588_SHARP_),sym)){
return p1__36588_SHARP_;
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
return cljs.core.some.call(null,(function (p1__36589_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__36589_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__36590_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__36590_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__36591_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__36591_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var n__4613__auto___36592 = len;
var i_36593 = (0);
while(true){
if((i_36593 < n__4613__auto___36592)){
var arg_36594 = cljs.core.nth.call(null,args,i_36593);
if((arg_36594 instanceof cljs.core.Symbol)){
var temp__5722__auto___36595 = cljs.core.get.call(null,sources,arg_36594);
if((temp__5722__auto___36595 == null)){
(tuples_args[i_36593] = cljs.core.get.call(null,attrs,arg_36594));
} else {
var source_36596 = temp__5722__auto___36595;
(static_args[i_36593] = source_36596);
}
} else {
(static_args[i_36593] = arg_36594);
}

var G__36597 = (i_36593 + (1));
i_36593 = G__36597;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone.call(null,static_args);
var n__4613__auto___36598 = len;
var i_36599 = (0);
while(true){
if((i_36599 < n__4613__auto___36598)){
var temp__5724__auto___36600 = (tuples_args[i_36599]);
if((temp__5724__auto___36600 == null)){
} else {
var tuple_idx_36601 = temp__5724__auto___36600;
var v_36602 = (tuple[tuple_idx_36601]);
(args__$1[i_36599] = v_36602);
}

var G__36603 = (i_36599 + (1));
i_36599 = G__36603;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,args__$1);
});
} else {
return (function (tuple){
var n__4613__auto___36604 = len;
var i_36605 = (0);
while(true){
if((i_36605 < n__4613__auto___36604)){
var temp__5724__auto___36606 = (tuples_args[i_36605]);
if((temp__5724__auto___36606 == null)){
} else {
var tuple_idx_36607 = temp__5724__auto___36606;
var v_36608 = (tuple[tuple_idx_36607]);
(static_args[i_36605] = v_36608);
}

var G__36609 = (i_36605 + (1));
i_36605 = G__36609;
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
var vec__36611 = clause;
var vec__36614 = cljs.core.nth.call(null,vec__36611,(0),null);
var seq__36615 = cljs.core.seq.call(null,vec__36614);
var first__36616 = cljs.core.first.call(null,seq__36615);
var seq__36615__$1 = cljs.core.next.call(null,seq__36615);
var f = first__36616;
var args = seq__36615__$1;
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
var vec__36617 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__36617,(0),null);
var production = cljs.core.nth.call(null,vec__36617,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__36610_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__36610_SHARP_);
}));
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__36620 = clause;
var vec__36623 = cljs.core.nth.call(null,vec__36620,(0),null);
var seq__36624 = cljs.core.seq.call(null,vec__36623);
var first__36625 = cljs.core.first.call(null,seq__36624);
var seq__36624__$1 = cljs.core.next.call(null,seq__36624);
var f = first__36625;
var args = seq__36624__$1;
var out = cljs.core.nth.call(null,vec__36620,(1),null);
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
var vec__36626 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__36626,(0),null);
var production = cljs.core.nth.call(null,vec__36626,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__4529__auto__ = (function datascript$query$bind_by_fn_$_iter__36629(s__36630){
return (new cljs.core.LazySeq(null,(function (){
var s__36630__$1 = s__36630;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36630__$1);
if(temp__5720__auto__){
var s__36630__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36630__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36630__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36632 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36631 = (0);
while(true){
if((i__36631 < size__4528__auto__)){
var tuple = cljs.core._nth.call(null,c__4527__auto__,i__36631);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
cljs.core.chunk_append.call(null,b__36632,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)));

var G__36633 = (i__36631 + (1));
i__36631 = G__36633;
continue;
} else {
var G__36634 = (i__36631 + (1));
i__36631 = G__36634;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36632),datascript$query$bind_by_fn_$_iter__36629.call(null,cljs.core.chunk_rest.call(null,s__36630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36632),null);
}
} else {
var tuple = cljs.core.first.call(null,s__36630__$2);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
return cljs.core.cons.call(null,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)),datascript$query$bind_by_fn_$_iter__36629.call(null,cljs.core.rest.call(null,s__36630__$2)));
} else {
var G__36635 = cljs.core.rest.call(null,s__36630__$2);
s__36630__$1 = G__36635;
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
var vec__36637 = clause;
var seq__36638 = cljs.core.seq.call(null,vec__36637);
var first__36639 = cljs.core.first.call(null,seq__36638);
var seq__36638__$1 = cljs.core.next.call(null,seq__36638);
var rule = first__36639;
var call_args = seq__36638__$1;
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4529__auto__ = (function datascript$query$expand_rule_$_iter__36640(s__36641){
return (new cljs.core.LazySeq(null,(function (){
var s__36641__$1 = s__36641;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36641__$1);
if(temp__5720__auto__){
var s__36641__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36641__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36641__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36643 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36642 = (0);
while(true){
if((i__36642 < size__4528__auto__)){
var branch = cljs.core._nth.call(null,c__4527__auto__,i__36642);
var vec__36644 = branch;
var seq__36645 = cljs.core.seq.call(null,vec__36644);
var first__36646 = cljs.core.first.call(null,seq__36645);
var seq__36645__$1 = cljs.core.next.call(null,seq__36645);
var vec__36647 = first__36646;
var seq__36648 = cljs.core.seq.call(null,vec__36647);
var first__36649 = cljs.core.first.call(null,seq__36648);
var seq__36648__$1 = cljs.core.next.call(null,seq__36648);
var _ = first__36649;
var rule_args = seq__36648__$1;
var clauses = seq__36645__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__36643,clojure.walk.postwalk.call(null,((function (i__36642,vec__36644,seq__36645,first__36646,seq__36645__$1,vec__36647,seq__36648,first__36649,seq__36648__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__36643,s__36641__$2,temp__5720__auto__,vec__36637,seq__36638,first__36639,seq__36638__$1,rule,call_args,seqid,branches){
return (function (p1__36636_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__36636_SHARP_)){
var x__32895__auto__ = replacements.call(null,p1__36636_SHARP_);
if((x__32895__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__36636_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__32895__auto__;
}
} else {
return p1__36636_SHARP_;
}
});})(i__36642,vec__36644,seq__36645,first__36646,seq__36645__$1,vec__36647,seq__36648,first__36649,seq__36648__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__36643,s__36641__$2,temp__5720__auto__,vec__36637,seq__36638,first__36639,seq__36638__$1,rule,call_args,seqid,branches))
,clauses));

var G__36656 = (i__36642 + (1));
i__36642 = G__36656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36643),datascript$query$expand_rule_$_iter__36640.call(null,cljs.core.chunk_rest.call(null,s__36641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36643),null);
}
} else {
var branch = cljs.core.first.call(null,s__36641__$2);
var vec__36650 = branch;
var seq__36651 = cljs.core.seq.call(null,vec__36650);
var first__36652 = cljs.core.first.call(null,seq__36651);
var seq__36651__$1 = cljs.core.next.call(null,seq__36651);
var vec__36653 = first__36652;
var seq__36654 = cljs.core.seq.call(null,vec__36653);
var first__36655 = cljs.core.first.call(null,seq__36654);
var seq__36654__$1 = cljs.core.next.call(null,seq__36654);
var _ = first__36655;
var rule_args = seq__36654__$1;
var clauses = seq__36651__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__36650,seq__36651,first__36652,seq__36651__$1,vec__36653,seq__36654,first__36655,seq__36654__$1,_,rule_args,clauses,replacements,branch,s__36641__$2,temp__5720__auto__,vec__36637,seq__36638,first__36639,seq__36638__$1,rule,call_args,seqid,branches){
return (function (p1__36636_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__36636_SHARP_)){
var x__32895__auto__ = replacements.call(null,p1__36636_SHARP_);
if((x__32895__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__36636_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__32895__auto__;
}
} else {
return p1__36636_SHARP_;
}
});})(vec__36650,seq__36651,first__36652,seq__36651__$1,vec__36653,seq__36654,first__36655,seq__36654__$1,_,rule_args,clauses,replacements,branch,s__36641__$2,temp__5720__auto__,vec__36637,seq__36638,first__36639,seq__36638__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__36640.call(null,cljs.core.rest.call(null,s__36641__$2)));
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
var pairs = cljs.core.remove.call(null,(function (p__36657){
var vec__36658 = p__36657;
var x = cljs.core.nth.call(null,vec__36658,(0),null);
var y = cljs.core.nth.call(null,vec__36658,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__36661 = rule_clause;
var seq__36662 = cljs.core.seq.call(null,vec__36661);
var first__36663 = cljs.core.first.call(null,seq__36662);
var seq__36662__$1 = cljs.core.next.call(null,seq__36662);
var rule = first__36663;
var call_args = seq__36662__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4529__auto__ = (function datascript$query$rule_gen_guards_$_iter__36664(s__36665){
return (new cljs.core.LazySeq(null,(function (){
var s__36665__$1 = s__36665;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36665__$1);
if(temp__5720__auto__){
var s__36665__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36665__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36665__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36667 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36666 = (0);
while(true){
if((i__36666 < size__4528__auto__)){
var prev_args = cljs.core._nth.call(null,c__4527__auto__,i__36666);
var vec__36668 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__36668,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__36668,(1),null);
cljs.core.chunk_append.call(null,b__36667,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__36674 = (i__36666 + (1));
i__36666 = G__36674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36667),datascript$query$rule_gen_guards_$_iter__36664.call(null,cljs.core.chunk_rest.call(null,s__36665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36667),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__36665__$2);
var vec__36671 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__36671,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__36671,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__36664.call(null,cljs.core.rest.call(null,s__36665__$2)));
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
clojure.walk.postwalk.call(null,(function (p1__36675_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__36675_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__36675_SHARP_);
} else {
}

return p1__36675_SHARP_;
}),form);

return cljs.core.deref.call(null,res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set.call(null,datascript.query.walk_collect.call(null,clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars.call(null,clauses);
var pred = (function (p__36676){
var vec__36677 = p__36676;
var vec__36680 = cljs.core.nth.call(null,vec__36677,(0),null);
var seq__36681 = cljs.core.seq.call(null,vec__36680);
var first__36682 = cljs.core.first.call(null,seq__36681);
var seq__36681__$1 = cljs.core.next.call(null,seq__36681);
var _ = first__36682;
var vars = seq__36681__$1;
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
return cljs.core.some.call(null,(function (p1__36683_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__36683_SHARP_));
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
var vec__36702 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__36684_SHARP_){
return (!(datascript.query.rule_QMARK_.call(null,context,p1__36684_SHARP_)));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__36702,(0),null);
var vec__36705 = cljs.core.nth.call(null,vec__36702,(1),null);
var seq__36706 = cljs.core.seq.call(null,vec__36705);
var first__36707 = cljs.core.first.call(null,seq__36706);
var seq__36706__$1 = cljs.core.next.call(null,seq__36706);
var rule_clause = first__36707;
var next_clauses = seq__36706__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__36718 = cljs.core.next.call(null,stack);
var G__36719 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__36718;
rel = G__36719;
continue;
} else {
var vec__36708 = rule_clause;
var seq__36709 = cljs.core.seq.call(null,vec__36708);
var first__36710 = cljs.core.first.call(null,seq__36709);
var seq__36709__$1 = cljs.core.next.call(null,seq__36709);
var rule = first__36710;
var call_args = seq__36709__$1;
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__36711 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__36711,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__36711,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__36685_SHARP_){
return cljs.core._EQ_.call(null,p1__36685_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__36720 = cljs.core.next.call(null,stack);
var G__36721 = rel;
stack = G__36720;
rel = G__36721;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__36722 = cljs.core.next.call(null,stack);
var G__36723 = rel;
stack = G__36722;
rel = G__36723;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__36724 = cljs.core.concat.call(null,(function (){var iter__4529__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__36714(s__36715){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__36715__$1 = s__36715;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36715__$1);
if(temp__5720__auto__){
var s__36715__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36715__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36715__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36717 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36716 = (0);
while(true){
if((i__36716 < size__4528__auto__)){
var branch = cljs.core._nth.call(null,c__4527__auto__,i__36716);
cljs.core.chunk_append.call(null,b__36717,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__36726 = (i__36716 + (1));
i__36716 = G__36726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36717),datascript$query$solve_rule_$_iter__36714.call(null,cljs.core.chunk_rest.call(null,s__36715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36717),null);
}
} else {
var branch = cljs.core.first.call(null,s__36715__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__36714.call(null,cljs.core.rest.call(null,s__36715__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__36708,seq__36709,first__36710,seq__36709__$1,rule,call_args,guards,vec__36711,active_gs,pending_gs,vec__36702,clauses,vec__36705,seq__36706,first__36707,seq__36706__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4529__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__36725 = rel;
stack = G__36724;
rel = G__36725;
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
var vec__36728 = pattern;
var e = cljs.core.nth.call(null,vec__36728,(0),null);
var a = cljs.core.nth.call(null,vec__36728,(1),null);
var v = cljs.core.nth.call(null,vec__36728,(2),null);
var tx = cljs.core.nth.call(null,vec__36728,(3),null);
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
var vec__36731 = pattern;
var e = cljs.core.nth.call(null,vec__36731,(0),null);
var a = cljs.core.nth.call(null,vec__36731,(1),null);
var v = cljs.core.nth.call(null,vec__36731,(2),null);
var tx = cljs.core.nth.call(null,vec__36731,(3),null);
var G__36734 = cljs.core.PersistentHashSet.EMPTY;
var G__36734__$1 = ((datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__36734,e):G__36734);
var G__36734__$2 = ((datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__36734__$1,tx):G__36734__$1);
if(((datascript.query.free_var_QMARK_.call(null,v)) && ((!(datascript.query.free_var_QMARK_.call(null,a)))) && (datascript.db.ref_QMARK_.call(null,source,a)))){
return cljs.core.conj.call(null,G__36734__$2,v);
} else {
return G__36734__$2;
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
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.call(null,(function (p1__36735_SHARP_){
return datascript.query.limit_rel.call(null,p1__36735_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__36736_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__36736_SHARP_));
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
var free = cljs.core.mapv.call(null,(function (p1__36737_SHARP_){
return clojure.set.difference.call(null,datascript.query.collect_vars.call(null,p1__36737_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,free)," in ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set.call(null,cljs.core.remove.call(null,bound,vars));
var seq__36738 = cljs.core.seq.call(null,branches);
var chunk__36739 = null;
var count__36740 = (0);
var i__36741 = (0);
while(true){
if((i__36741 < count__36740)){
var branch = cljs.core._nth.call(null,chunk__36739,i__36741);
var temp__5724__auto___36742 = cljs.core.not_empty.call(null,clojure.set.difference.call(null,free,datascript.query.collect_vars.call(null,branch)));
if((temp__5724__auto___36742 == null)){
} else {
var missing_36743 = temp__5724__auto___36742;
cljs.core.prn.call(null,branch,bound,vars,free);

throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,missing_36743)," not bound in ",cljs.core.pr_str.call(null,branch)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_36743], null));
}


var G__36744 = seq__36738;
var G__36745 = chunk__36739;
var G__36746 = count__36740;
var G__36747 = (i__36741 + (1));
seq__36738 = G__36744;
chunk__36739 = G__36745;
count__36740 = G__36746;
i__36741 = G__36747;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36738);
if(temp__5720__auto__){
var seq__36738__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36738__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36738__$1);
var G__36748 = cljs.core.chunk_rest.call(null,seq__36738__$1);
var G__36749 = c__4556__auto__;
var G__36750 = cljs.core.count.call(null,c__4556__auto__);
var G__36751 = (0);
seq__36738 = G__36748;
chunk__36739 = G__36749;
count__36740 = G__36750;
i__36741 = G__36751;
continue;
} else {
var branch = cljs.core.first.call(null,seq__36738__$1);
var temp__5724__auto___36752 = cljs.core.not_empty.call(null,clojure.set.difference.call(null,free,datascript.query.collect_vars.call(null,branch)));
if((temp__5724__auto___36752 == null)){
} else {
var missing_36753 = temp__5724__auto___36752;
cljs.core.prn.call(null,branch,bound,vars,free);

throw cljs.core.ex_info.call(null,["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.call(null,missing_36753)," not bound in ",cljs.core.pr_str.call(null,branch)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_36753], null));
}


var G__36754 = cljs.core.next.call(null,seq__36738__$1);
var G__36755 = null;
var G__36756 = (0);
var G__36757 = (0);
seq__36738 = G__36754;
chunk__36739 = G__36755;
count__36740 = G__36756;
i__36741 = G__36757;
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
var G__36763 = arguments.length;
switch (G__36763) {
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
var pred__36764 = datascript.query.looks_like_QMARK_;
var expr__36765 = clause;
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__36765))){
datascript.query.check_bound.call(null,datascript.query.bound_vars.call(null,context),cljs.core.filter.call(null,datascript.query.free_var_QMARK_,cljs.core.nfirst.call(null,clause)),clause);

return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__36765))){
datascript.query.check_bound.call(null,datascript.query.bound_vars.call(null,context),cljs.core.filter.call(null,datascript.query.free_var_QMARK_,cljs.core.nfirst.call(null,clause)),clause);

return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36767 = clause;
var seq__36768 = cljs.core.seq.call(null,vec__36767);
var first__36769 = cljs.core.first.call(null,seq__36768);
var seq__36768__$1 = cljs.core.next.call(null,seq__36768);
var source_sym = first__36769;
var rest = seq__36768__$1;
var _STAR_implicit_source_STAR__orig_val__36770 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36771 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36771);

try{return datascript.query._resolve_clause.call(null,context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36770);
}} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36772 = clause;
var seq__36773 = cljs.core.seq.call(null,vec__36772);
var first__36774 = cljs.core.first.call(null,seq__36773);
var seq__36773__$1 = cljs.core.next.call(null,seq__36773);
var _ = first__36774;
var branches = seq__36773__$1;
var ___$1 = datascript.query.check_free_same.call(null,datascript.query.bound_vars.call(null,context),branches,clause);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36772,seq__36773,first__36774,seq__36773__$1,_,branches,___$1,pred__36764,expr__36765){
return (function (p1__36758_SHARP_){
return datascript.query.resolve_clause.call(null,context,p1__36758_SHARP_);
});})(context,clause,orig_clause,vec__36772,seq__36773,first__36774,seq__36773__$1,_,branches,___$1,pred__36764,expr__36765))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36772,seq__36773,first__36774,seq__36773__$1,_,branches,___$1,contexts,pred__36764,expr__36765){
return (function (p1__36759_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__36759_SHARP_));
});})(context,clause,orig_clause,vec__36772,seq__36773,first__36774,seq__36773__$1,_,branches,___$1,contexts,pred__36764,expr__36765))
,contexts);
return cljs.core.assoc.call(null,cljs.core.first.call(null,contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36775 = clause;
var seq__36776 = cljs.core.seq.call(null,vec__36775);
var first__36777 = cljs.core.first.call(null,seq__36776);
var seq__36776__$1 = cljs.core.next.call(null,seq__36776);
var _ = first__36777;
var first__36777__$1 = cljs.core.first.call(null,seq__36776__$1);
var seq__36776__$2 = cljs.core.next.call(null,seq__36776__$1);
var vec__36778 = first__36777__$1;
var seq__36779 = cljs.core.seq.call(null,vec__36778);
var first__36780 = cljs.core.first.call(null,seq__36779);
var seq__36779__$1 = cljs.core.next.call(null,seq__36779);
var req_vars = first__36780;
var vars = seq__36779__$1;
var branches = seq__36776__$2;
var bound = datascript.query.bound_vars.call(null,context);
datascript.query.check_bound.call(null,bound,req_vars,orig_clause);

datascript.query.check_free_subset.call(null,bound,vars,branches);

var G__36797 = context;
var G__36798 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.call(null,req_vars,vars),branches);
var G__36799 = clause;
context = G__36797;
clause = G__36798;
orig_clause = G__36799;
continue;
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36781 = clause;
var seq__36782 = cljs.core.seq.call(null,vec__36781);
var first__36783 = cljs.core.first.call(null,seq__36782);
var seq__36782__$1 = cljs.core.next.call(null,seq__36782);
var _ = first__36783;
var first__36783__$1 = cljs.core.first.call(null,seq__36782__$1);
var seq__36782__$2 = cljs.core.next.call(null,seq__36782__$1);
var vars = first__36783__$1;
var branches = seq__36782__$2;
var vars__$1 = cljs.core.set.call(null,vars);
var ___$1 = datascript.query.check_free_subset.call(null,datascript.query.bound_vars.call(null,context),vars__$1,branches);
var join_context = datascript.query.limit_context.call(null,context,vars__$1);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36781,seq__36782,first__36783,seq__36782__$1,_,first__36783__$1,seq__36782__$2,vars,branches,vars__$1,___$1,join_context,pred__36764,expr__36765){
return (function (p1__36760_SHARP_){
return datascript.query.limit_context.call(null,datascript.query.resolve_clause.call(null,join_context,p1__36760_SHARP_),vars__$1);
});})(context,clause,orig_clause,vec__36781,seq__36782,first__36783,seq__36782__$1,_,first__36783__$1,seq__36782__$2,vars,branches,vars__$1,___$1,join_context,pred__36764,expr__36765))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__36781,seq__36782,first__36783,seq__36782__$1,_,first__36783__$1,seq__36782__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__36764,expr__36765){
return (function (p1__36761_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__36761_SHARP_));
});})(context,clause,orig_clause,vec__36781,seq__36782,first__36783,seq__36782__$1,_,first__36783__$1,seq__36782__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__36764,expr__36765))
,contexts);
var sum_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36784 = clause;
var seq__36785 = cljs.core.seq.call(null,vec__36784);
var first__36786 = cljs.core.first.call(null,seq__36785);
var seq__36785__$1 = cljs.core.next.call(null,seq__36785);
var _ = first__36786;
var clauses = seq__36785__$1;
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36787 = clause;
var seq__36788 = cljs.core.seq.call(null,vec__36787);
var first__36789 = cljs.core.first.call(null,seq__36788);
var seq__36788__$1 = cljs.core.next.call(null,seq__36788);
var _ = first__36789;
var clauses = seq__36788__$1;
var bound = datascript.query.bound_vars.call(null,context);
var negation_vars = datascript.query.collect_vars.call(null,clauses);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,bound,negation_vars)))?(function(){throw cljs.core.ex_info.call(null,["Insufficient bindings: none of ",cljs.core.pr_str.call(null,negation_vars)," is bound in ",cljs.core.pr_str.call(null,orig_clause)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.call(null,datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var vec__36790 = clause;
var seq__36791 = cljs.core.seq.call(null,vec__36790);
var first__36792 = cljs.core.first.call(null,seq__36791);
var seq__36791__$1 = cljs.core.next.call(null,seq__36791);
var _ = first__36792;
var first__36792__$1 = cljs.core.first.call(null,seq__36791__$1);
var seq__36791__$2 = cljs.core.next.call(null,seq__36791__$1);
var vars = first__36792__$1;
var clauses = seq__36791__$2;
var bound = datascript.query.bound_vars.call(null,context);
var ___$1 = datascript.query.check_bound.call(null,bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context.call(null,context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context.call(null,cljs.core.reduce.call(null,datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__36764.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__36765))){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs.call(null,source,clause);
var relation = datascript.query.lookup_pattern.call(null,source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__36793 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__36794 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs.call(null,source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__36794);

try{return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__36793);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36765)].join('')));
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
var _STAR_implicit_source_STAR__orig_val__36800 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36801 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first.call(null,clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36801);

try{return datascript.query.resolve_clause.call(null,context,cljs.core.next.call(null,clause));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36800);
}} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule.call(null,context,clause));
}
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__36802 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__36803 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__36803);

try{return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__36802);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__36806 = arguments.length;
switch (G__36806) {
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
var G__36814 = acc;
var G__36815 = cljs.core.next.call(null,rels);
var G__36816 = symbols;
acc = G__36814;
rels = G__36815;
symbols = G__36816;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__36804_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__36804_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__36817 = (function (){var iter__4529__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__36807(s__36808){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function (){
var s__36808__$1 = s__36808;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36808__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__36808__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__36807_$_iter__36809(s__36810){
return (new cljs.core.LazySeq(null,((function (s__36808__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function (){
var s__36810__$1 = s__36810;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36810__$1);
if(temp__5720__auto____$1){
var s__36810__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36810__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36810__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36812 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36811 = (0);
while(true){
if((i__36811 < size__4528__auto__)){
var t2 = cljs.core._nth.call(null,c__4527__auto__,i__36811);
cljs.core.chunk_append.call(null,b__36812,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4613__auto___36820 = len;
var i_36821 = (0);
while(true){
if((i_36821 < n__4613__auto___36820)){
var temp__5724__auto___36822 = (copy_map[i_36821]);
if((temp__5724__auto___36822 == null)){
} else {
var idx_36823 = temp__5724__auto___36822;
(res[i_36821] = (t2[idx_36823]));
}

var G__36824 = (i_36821 + (1));
i_36821 = G__36824;
continue;
} else {
}
break;
}

return res;
})());

var G__36825 = (i__36811 + (1));
i__36811 = G__36825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36812),datascript$query$iter__36807_$_iter__36809.call(null,cljs.core.chunk_rest.call(null,s__36810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36812),null);
}
} else {
var t2 = cljs.core.first.call(null,s__36810__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4613__auto___36826 = len;
var i_36827 = (0);
while(true){
if((i_36827 < n__4613__auto___36826)){
var temp__5724__auto___36828 = (copy_map[i_36827]);
if((temp__5724__auto___36828 == null)){
} else {
var idx_36829 = temp__5724__auto___36828;
(res[i_36827] = (t2[idx_36829]));
}

var G__36830 = (i_36827 + (1));
i_36827 = G__36830;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__36807_$_iter__36809.call(null,cljs.core.rest.call(null,s__36810__$2)));
}
} else {
return null;
}
break;
}
});})(s__36808__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
,null,null));
});})(s__36808__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,datascript$query$iter__36807.call(null,cljs.core.rest.call(null,s__36808__$1)));
} else {
var G__36831 = cljs.core.rest.call(null,s__36808__$1);
s__36808__$1 = G__36831;
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
var G__36818 = cljs.core.next.call(null,rels);
var G__36819 = symbols;
acc = G__36817;
rels = G__36818;
symbols = G__36819;
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

var datascript$query$IContextResolve$_context_resolve$dyn_36832 = (function (var$,context){
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
return datascript$query$IContextResolve$_context_resolve$dyn_36832.call(null,var$,context);
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
var args = cljs.core.map.call(null,(function (p1__36833_SHARP_){
return datascript.query._context_resolve.call(null,p1__36833_SHARP_,context);
}),cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,(function (p1__36834_SHARP_){
return cljs.core.nth.call(null,p1__36834_SHARP_,i);
}),tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__36835_SHARP_,p2__36836_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__36835_SHARP_))){
return p2__36836_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.call(null,(function (p1__36837_SHARP_){
return cljs.core.nth.call(null,tuple,p1__36837_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4529__auto__ = (function datascript$query$aggregate_$_iter__36838(s__36839){
return (new cljs.core.LazySeq(null,(function (){
var s__36839__$1 = s__36839;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36839__$1);
if(temp__5720__auto__){
var s__36839__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36839__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36839__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36841 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36840 = (0);
while(true){
if((i__36840 < size__4528__auto__)){
var vec__36842 = cljs.core._nth.call(null,c__4527__auto__,i__36840);
var _ = cljs.core.nth.call(null,vec__36842,(0),null);
var tuples = cljs.core.nth.call(null,vec__36842,(1),null);
cljs.core.chunk_append.call(null,b__36841,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__36848 = (i__36840 + (1));
i__36840 = G__36848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36841),datascript$query$aggregate_$_iter__36838.call(null,cljs.core.chunk_rest.call(null,s__36839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36841),null);
}
} else {
var vec__36845 = cljs.core.first.call(null,s__36839__$2);
var _ = cljs.core.nth.call(null,vec__36845,(0),null);
var tuples = cljs.core.nth.call(null,vec__36845,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__36838.call(null,cljs.core.rest.call(null,s__36839__$2)));
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
return cljs.core.reduce.call(null,(function (p1__36849_SHARP_,p2__36850_SHARP_){
return cljs.core.conj.call(null,p1__36849_SHARP_,f.call(null,p2__36850_SHARP_));
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

var datascript$query$IPostProcess$_post_process$dyn_36851 = (function (find,return_map,tuples){
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
return datascript$query$IPostProcess$_post_process$dyn_36851.call(null,find,return_map,tuples);
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
var resolved = (function (){var iter__4529__auto__ = (function datascript$query$pull_$_iter__36852(s__36853){
return (new cljs.core.LazySeq(null,(function (){
var s__36853__$1 = s__36853;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36853__$1);
if(temp__5720__auto__){
var s__36853__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36853__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36853__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36855 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36854 = (0);
while(true){
if((i__36854 < size__4528__auto__)){
var find = cljs.core._nth.call(null,c__4527__auto__,i__36854);
cljs.core.chunk_append.call(null,b__36855,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__36866 = (i__36854 + (1));
i__36854 = G__36866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36855),datascript$query$pull_$_iter__36852.call(null,cljs.core.chunk_rest.call(null,s__36853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36855),null);
}
} else {
var find = cljs.core.first.call(null,s__36853__$2);
return cljs.core.cons.call(null,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__36852.call(null,cljs.core.rest.call(null,s__36853__$2)));
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
var iter__4529__auto__ = (function datascript$query$pull_$_iter__36856(s__36857){
return (new cljs.core.LazySeq(null,(function (){
var s__36857__$1 = s__36857;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36857__$1);
if(temp__5720__auto__){
var s__36857__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36857__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36857__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36859 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36858 = (0);
while(true){
if((i__36858 < size__4528__auto__)){
var tuple = cljs.core._nth.call(null,c__4527__auto__,i__36858);
cljs.core.chunk_append.call(null,b__36859,cljs.core.mapv.call(null,((function (i__36858,tuple,c__4527__auto__,size__4528__auto__,b__36859,s__36857__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__36860 = env;
var src = cljs.core.nth.call(null,vec__36860,(0),null);
var spec = cljs.core.nth.call(null,vec__36860,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__36858,tuple,c__4527__auto__,size__4528__auto__,b__36859,s__36857__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__36867 = (i__36858 + (1));
i__36858 = G__36867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36859),datascript$query$pull_$_iter__36856.call(null,cljs.core.chunk_rest.call(null,s__36857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36859),null);
}
} else {
var tuple = cljs.core.first.call(null,s__36857__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__36857__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__36863 = env;
var src = cljs.core.nth.call(null,vec__36863,(0),null);
var spec = cljs.core.nth.call(null,vec__36863,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__36857__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__36856.call(null,cljs.core.rest.call(null,s__36857__$2)));
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
var len__4736__auto___36873 = arguments.length;
var i__4737__auto___36874 = (0);
while(true){
if((i__4737__auto___36874 < len__4736__auto___36873)){
args__4742__auto__.push((arguments[i__4737__auto___36874]));

var G__36875 = (i__4737__auto___36874 + (1));
i__4737__auto___36874 = G__36875;
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
var q__$1 = (function (){var G__36871 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datascript.parser.query__GT_map.call(null,G__36871);
} else {
return G__36871;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__36872 = resultset;
var G__36872__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,(function (p1__36868_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__36868_SHARP_,(0),result_arity));
}),G__36872):G__36872);
var G__36872__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__36872__$1):G__36872__$1);
var G__36872__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__36872__$2):G__36872__$2);
return datascript.query._post_process.call(null,find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__36872__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq36869){
var G__36870 = cljs.core.first.call(null,seq36869);
var seq36869__$1 = cljs.core.next.call(null,seq36869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36870,seq36869__$1);
}));


//# sourceMappingURL=query.js.map?rel=1637332182748
