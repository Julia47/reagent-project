// Compiled by ClojureScript 1.10.773 {}
goog.provide('datascript.serialize');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('me.tonsky.persistent_sorted_set.arrays');
datascript.serialize.marker_kw = (0);
datascript.serialize.marker_other = (1);
datascript.serialize.if_cljs = (function datascript$serialize$if_cljs(env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))){
return then;
} else {
return else$;
}
});
datascript.serialize.array_get = (function datascript$serialize$array_get(d,i){
if(cljs.core.array_QMARK_.call(null,d)){
return (d[i]);
} else {
return cljs.core.nth.call(null,d,i);
}
});
datascript.serialize.dict_get = (function datascript$serialize$dict_get(d,k){
if(cljs.core.map_QMARK_.call(null,d)){
return d.call(null,k);
} else {
return (d[k]);
}
});
datascript.serialize.array_QMARK_ = (function datascript$serialize$array_QMARK_(a){
return ((cljs.core.array_QMARK_.call(null,a)) || (cljs.core.vector_QMARK_.call(null,a)));
});
datascript.serialize.amap = (function datascript$serialize$amap(f,xs){
var arr = (new Array(cljs.core.count.call(null,xs)));
cljs.core.reduce.call(null,(function (idx,x){
(arr[idx] = f.call(null,x));

return (idx + (1));
}),(0),xs);

return arr;
});
datascript.serialize.amap_indexed = (function datascript$serialize$amap_indexed(f,xs){
var arr = (new Array(cljs.core.count.call(null,xs)));
cljs.core.reduce.call(null,(function (idx,x){
(arr[idx] = f.call(null,idx,x));

return (idx + (1));
}),(0),xs);

return arr;
});
/**
 * Looks for a datom with attribute exactly bigger than the given one
 */
datascript.serialize.attr_comparator = (function datascript$serialize$attr_comparator(d1,d2){
if((d2.a == null)){
return (-1);
} else {
if((cljs.core.compare.call(null,d1.a,d2.a) <= (0))){
return (-1);
} else {
return (1);

}
}
});
/**
 * All attrs in a DB, distinct, sorted
 */
datascript.serialize.all_attrs = (function datascript$serialize$all_attrs(db__$1){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(db__$1))){
return cljs.core.PersistentVector.EMPTY;
} else {
var attrs = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(db__$1)))], null));
while(true){
var attr = cljs.core.nth.call(null,attrs,(cljs.core.count.call(null,attrs) - (1)));
var left = datascript.db.datom.call(null,(0),attr,null);
var right = datascript.db.datom.call(null,(2147483647),null,null);
var next_attr = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,me.tonsky.persistent_sorted_set.slice.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(db__$1),left,right,datascript.serialize.attr_comparator)));
if((!((next_attr == null)))){
var G__36956 = cljs.core.conj_BANG_.call(null,attrs,next_attr);
attrs = G__36956;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,attrs);
}
break;
}
}
});
datascript.serialize.freeze_kw = cljs.core.str;
datascript.serialize.thaw_kw = (function datascript$serialize$thaw_kw(s){
if(clojure.string.starts_with_QMARK_.call(null,s,":")){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return s;
}
});
/**
 * Serialized structure breakdown:
 * 
 * count    :: number    
 * tx0      :: number
 * max-eid  :: number
 * max-tx   :: number
 * schema   :: freezed :schema
 * attrs    :: [keywords ...]
 * keywords :: [keywords ...]
 * eavt     :: [[e a-idx v dtx] ...]
 * a-idx    :: index in attrs
 * v        :: (string | number | boolean | [0 <index in keywords>] | [1 <freezed v>])
 * dtx      :: tx - tx0
 * aevt     :: [<index in eavt> ...]
 * avet     :: [<index in eavt> ...]
 */
datascript.serialize.serializable_impl = (function datascript$serialize$serializable_impl(db__$1,p__36957){
var map__36958 = p__36957;
var map__36958__$1 = (((((!((map__36958 == null))))?(((((map__36958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36958):map__36958);
var freeze_fn = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"freeze-fn","freeze-fn",-575885995),cljs.core.pr_str);
var attrs = datascript.serialize.all_attrs.call(null,db__$1);
var attrs_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,attrs,cljs.core.range.call(null)));
var _STAR_kws = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var _STAR_kw_map = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var write_kw = (function (kw){
var idx = (function (){var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,_STAR_kw_map),kw);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var keywords = cljs.core._vreset_BANG_.call(null,_STAR_kws,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,_STAR_kws),kw));
var idx = (cljs.core.count.call(null,keywords) - (1));
cljs.core._vreset_BANG_.call(null,_STAR_kw_map,cljs.core.assoc_BANG_.call(null,cljs.core._deref.call(null,_STAR_kw_map),kw,idx));

return idx;
}
})();
return [(0),idx];
});
var write_other = (function (v){
return [(1),freeze_fn.call(null,v)];
});
var write_v = (function (v){
if(typeof v === 'string'){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(cljs.core.boolean_QMARK_.call(null,v)){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return write_kw.call(null,v);
} else {
return write_other.call(null,v);

}
}
}
}
});
var eavt = datascript.serialize.amap_indexed.call(null,(function (idx,d){
datascript.db.datom_set_idx.call(null,d,idx);

var e = d.e;
var a = attrs_map.call(null,d.a);
var v = write_v.call(null,d.v);
var tx = (d.tx - (536870912));
return [e,a,v,tx];
}),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(db__$1));
var aevt = datascript.serialize.amap_indexed.call(null,(function (_,d){
return datascript.db.datom_get_idx.call(null,d);
}),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(db__$1));
var avet = datascript.serialize.amap_indexed.call(null,(function (_,d){
return datascript.db.datom_get_idx.call(null,d);
}),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(db__$1));
var schema = freeze_fn.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db__$1));
var attrs__$1 = datascript.serialize.amap.call(null,datascript.serialize.freeze_kw,attrs);
var kws = datascript.serialize.amap.call(null,datascript.serialize.freeze_kw,cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,_STAR_kws)));
return {"count":cljs.core.count.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(db__$1)),"tx0":(536870912),"max-eid":new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db__$1),"max-tx":new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db__$1),"schema":schema,"attrs":attrs__$1,"keywords":kws,"eavt":eavt,"aevt":aevt,"avet":avet};
});
datascript.serialize.serializable = (function datascript$serialize$serializable(var_args){
var G__36961 = arguments.length;
switch (G__36961) {
case 1:
return datascript.serialize.serializable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.serialize.serializable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.serialize.serializable.cljs$core$IFn$_invoke$arity$1 = (function (db__$1){
return datascript.serialize.serializable_impl.call(null,db__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.serialize.serializable.cljs$core$IFn$_invoke$arity$2 = (function (db__$1,opts){
return datascript.serialize.serializable_impl.call(null,db__$1,opts);
}));

(datascript.serialize.serializable.cljs$lang$maxFixedArity = 2);

datascript.serialize.from_serializable = (function datascript$serialize$from_serializable(var_args){
var G__36966 = arguments.length;
switch (G__36966) {
case 1:
return datascript.serialize.from_serializable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.serialize.from_serializable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.serialize.from_serializable.cljs$core$IFn$_invoke$arity$1 = (function (from){
return datascript.serialize.from_serializable.call(null,from,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.serialize.from_serializable.cljs$core$IFn$_invoke$arity$2 = (function (from,p__36967){
var map__36968 = p__36967;
var map__36968__$1 = (((((!((map__36968 == null))))?(((((map__36968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36968):map__36968);
var thaw_fn = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"thaw-fn","thaw-fn",-240544261),clojure.edn.read_string);
var tx0 = datascript.serialize.dict_get.call(null,from,"tx0");
var schema = thaw_fn.call(null,datascript.serialize.dict_get.call(null,from,"schema"));
var _ = new cljs.core.Var(function(){return datascript.db.validate_schema;},new cljs.core.Symbol("datascript.db","validate-schema","datascript.db/validate-schema",-783030261,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"validate-schema","validate-schema",758884380,null),"resources/public/js/compiled/out/datascript/db.cljc",23,1,718,718,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),null,(cljs.core.truth_(datascript.db.validate_schema)?datascript.db.validate_schema.cljs$lang$test:null)])).call(null,schema);
var attrs = cljs.core.mapv.call(null,datascript.serialize.thaw_kw,datascript.serialize.dict_get.call(null,from,"attrs"));
var keywords = cljs.core.mapv.call(null,datascript.serialize.thaw_kw,datascript.serialize.dict_get.call(null,from,"keywords"));
var eavt = datascript.serialize.amap.call(null,(function (arr){
var e = datascript.serialize.array_get.call(null,arr,(0));
var a = cljs.core.nth.call(null,attrs,datascript.serialize.array_get.call(null,arr,(1)));
var v = datascript.serialize.array_get.call(null,arr,(2));
var v__$1 = ((typeof v === 'number')?v:((typeof v === 'string')?v:((cljs.core.boolean_QMARK_.call(null,v))?v:((datascript.serialize.array_QMARK_.call(null,v))?(function (){var marker = datascript.serialize.array_get.call(null,v,(0));
var pred__36970 = cljs.core._EQ__EQ_;
var expr__36971 = marker;
if(cljs.core.truth_(pred__36970.call(null,(0),expr__36971))){
return cljs.core.nth.call(null,keywords,datascript.serialize.array_get.call(null,v,(1)));
} else {
if(cljs.core.truth_(pred__36970.call(null,(1),expr__36971))){
return thaw_fn.call(null,datascript.serialize.array_get.call(null,v,(1)));
} else {
throw cljs.core.ex_info.call(null,["Unexpected value marker ",cljs.core.pr_str.call(null,marker)," in ",cljs.core.pr_str.call(null,cljs.core.pr_str.call(null,v))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
}
})():(function(){throw cljs.core.ex_info.call(null,["Unexpected value type ",cljs.core.pr_str.call(null,cljs.core.type.call(null,v))," (",cljs.core.pr_str.call(null,cljs.core.pr_str.call(null,v)),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"value","value",305978217),v], null))})()
))));
var tx = (tx0 + datascript.serialize.array_get.call(null,arr,(3)));
return datascript.db.datom.call(null,e,a,v__$1,tx);
}),datascript.serialize.dict_get.call(null,from,"eavt"));
var aevt = (function (){var G__36973 = datascript.serialize.dict_get.call(null,from,"aevt");
if((G__36973 == null)){
return null;
} else {
return datascript.serialize.amap.call(null,(function (p1__36963_SHARP_){
return (eavt[p1__36963_SHARP_]);
}),G__36973);
}
})();
var avet = (function (){var G__36974 = datascript.serialize.dict_get.call(null,from,"avet");
if((G__36974 == null)){
return null;
} else {
return datascript.serialize.amap.call(null,(function (p1__36964_SHARP_){
return (eavt[p1__36964_SHARP_]);
}),G__36974);
}
})();
return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Var(function(){return datascript.db.rschema;},new cljs.core.Symbol("datascript.db","rschema","datascript.db/rschema",1982085018,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),"resources/public/js/compiled/out/datascript/db.cljc",15,1,686,686,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),":db/unique           => #{attr ...}\n   :db.unique/identity  => #{attr ...}\n   :db.unique/value     => #{attr ...}\n   :db/index            => #{attr ...}\n   :db.cardinality/many => #{attr ...}\n   :db.type/ref         => #{attr ...}\n   :db/isComponent      => #{attr ...}\n   :db.type/tuple       => #{attr ...}\n   :db/attrTuples       => {attr => {tuple-attr => idx}}",(cljs.core.truth_(datascript.db.rschema)?datascript.db.rschema.cljs$lang$test:null)])).call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema)),new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_eavt,eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_aevt,aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_avet,avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),datascript.serialize.dict_get.call(null,from,"max-eid"),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.serialize.dict_get.call(null,from,"max-tx"),new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0))], null));
}));

(datascript.serialize.from_serializable.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=serialize.js.map?rel=1637332182875
