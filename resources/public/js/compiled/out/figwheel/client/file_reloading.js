// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__44194 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__44194 == null)){
return null;
} else {
return goog.object.get(G__44194,"requires");
}
}):(function (path){
var G__44195 = goog.object.get(goog.dependencies_.requires,path);
if((G__44195 == null)){
return null;
} else {
return goog.object.getKeys(G__44195);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44196_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44196_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__44197 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__44197__$1 = (((G__44197 == null))?null:goog.object.get(G__44197,"provides"));
if((G__44197__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__44197__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__44198 = cljs.core.seq.call(null,provides);
var chunk__44199 = null;
var count__44200 = (0);
var i__44201 = (0);
while(true){
if((i__44201 < count__44200)){
var prov = cljs.core._nth.call(null,chunk__44199,i__44201);
var seq__44210_44222 = cljs.core.seq.call(null,requires);
var chunk__44211_44223 = null;
var count__44212_44224 = (0);
var i__44213_44225 = (0);
while(true){
if((i__44213_44225 < count__44212_44224)){
var req_44226 = cljs.core._nth.call(null,chunk__44211_44223,i__44213_44225);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44226,prov);


var G__44227 = seq__44210_44222;
var G__44228 = chunk__44211_44223;
var G__44229 = count__44212_44224;
var G__44230 = (i__44213_44225 + (1));
seq__44210_44222 = G__44227;
chunk__44211_44223 = G__44228;
count__44212_44224 = G__44229;
i__44213_44225 = G__44230;
continue;
} else {
var temp__5720__auto___44231 = cljs.core.seq.call(null,seq__44210_44222);
if(temp__5720__auto___44231){
var seq__44210_44232__$1 = temp__5720__auto___44231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44210_44232__$1)){
var c__4556__auto___44233 = cljs.core.chunk_first.call(null,seq__44210_44232__$1);
var G__44234 = cljs.core.chunk_rest.call(null,seq__44210_44232__$1);
var G__44235 = c__4556__auto___44233;
var G__44236 = cljs.core.count.call(null,c__4556__auto___44233);
var G__44237 = (0);
seq__44210_44222 = G__44234;
chunk__44211_44223 = G__44235;
count__44212_44224 = G__44236;
i__44213_44225 = G__44237;
continue;
} else {
var req_44238 = cljs.core.first.call(null,seq__44210_44232__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44238,prov);


var G__44239 = cljs.core.next.call(null,seq__44210_44232__$1);
var G__44240 = null;
var G__44241 = (0);
var G__44242 = (0);
seq__44210_44222 = G__44239;
chunk__44211_44223 = G__44240;
count__44212_44224 = G__44241;
i__44213_44225 = G__44242;
continue;
}
} else {
}
}
break;
}


var G__44243 = seq__44198;
var G__44244 = chunk__44199;
var G__44245 = count__44200;
var G__44246 = (i__44201 + (1));
seq__44198 = G__44243;
chunk__44199 = G__44244;
count__44200 = G__44245;
i__44201 = G__44246;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44198);
if(temp__5720__auto__){
var seq__44198__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44198__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44198__$1);
var G__44247 = cljs.core.chunk_rest.call(null,seq__44198__$1);
var G__44248 = c__4556__auto__;
var G__44249 = cljs.core.count.call(null,c__4556__auto__);
var G__44250 = (0);
seq__44198 = G__44247;
chunk__44199 = G__44248;
count__44200 = G__44249;
i__44201 = G__44250;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44198__$1);
var seq__44214_44251 = cljs.core.seq.call(null,requires);
var chunk__44215_44252 = null;
var count__44216_44253 = (0);
var i__44217_44254 = (0);
while(true){
if((i__44217_44254 < count__44216_44253)){
var req_44255 = cljs.core._nth.call(null,chunk__44215_44252,i__44217_44254);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44255,prov);


var G__44256 = seq__44214_44251;
var G__44257 = chunk__44215_44252;
var G__44258 = count__44216_44253;
var G__44259 = (i__44217_44254 + (1));
seq__44214_44251 = G__44256;
chunk__44215_44252 = G__44257;
count__44216_44253 = G__44258;
i__44217_44254 = G__44259;
continue;
} else {
var temp__5720__auto___44260__$1 = cljs.core.seq.call(null,seq__44214_44251);
if(temp__5720__auto___44260__$1){
var seq__44214_44261__$1 = temp__5720__auto___44260__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44214_44261__$1)){
var c__4556__auto___44262 = cljs.core.chunk_first.call(null,seq__44214_44261__$1);
var G__44263 = cljs.core.chunk_rest.call(null,seq__44214_44261__$1);
var G__44264 = c__4556__auto___44262;
var G__44265 = cljs.core.count.call(null,c__4556__auto___44262);
var G__44266 = (0);
seq__44214_44251 = G__44263;
chunk__44215_44252 = G__44264;
count__44216_44253 = G__44265;
i__44217_44254 = G__44266;
continue;
} else {
var req_44267 = cljs.core.first.call(null,seq__44214_44261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44267,prov);


var G__44268 = cljs.core.next.call(null,seq__44214_44261__$1);
var G__44269 = null;
var G__44270 = (0);
var G__44271 = (0);
seq__44214_44251 = G__44268;
chunk__44215_44252 = G__44269;
count__44216_44253 = G__44270;
i__44217_44254 = G__44271;
continue;
}
} else {
}
}
break;
}


var G__44272 = cljs.core.next.call(null,seq__44198__$1);
var G__44273 = null;
var G__44274 = (0);
var G__44275 = (0);
seq__44198 = G__44272;
chunk__44199 = G__44273;
count__44200 = G__44274;
i__44201 = G__44275;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__44218 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__44219 = null;
var count__44220 = (0);
var i__44221 = (0);
while(true){
if((i__44221 < count__44220)){
var prov = cljs.core._nth.call(null,chunk__44219,i__44221);
goog.object.forEach(deps,((function (seq__44218,chunk__44219,count__44220,i__44221,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__44218,chunk__44219,count__44220,i__44221,prov,requires))
);


var G__44276 = seq__44218;
var G__44277 = chunk__44219;
var G__44278 = count__44220;
var G__44279 = (i__44221 + (1));
seq__44218 = G__44276;
chunk__44219 = G__44277;
count__44220 = G__44278;
i__44221 = G__44279;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44218);
if(temp__5720__auto__){
var seq__44218__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44218__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44218__$1);
var G__44280 = cljs.core.chunk_rest.call(null,seq__44218__$1);
var G__44281 = c__4556__auto__;
var G__44282 = cljs.core.count.call(null,c__4556__auto__);
var G__44283 = (0);
seq__44218 = G__44280;
chunk__44219 = G__44281;
count__44220 = G__44282;
i__44221 = G__44283;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44218__$1);
goog.object.forEach(deps,((function (seq__44218,chunk__44219,count__44220,i__44221,prov,seq__44218__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__44218,chunk__44219,count__44220,i__44221,prov,seq__44218__$1,temp__5720__auto__,requires))
);


var G__44284 = cljs.core.next.call(null,seq__44218__$1);
var G__44285 = null;
var G__44286 = (0);
var G__44287 = (0);
seq__44218 = G__44284;
chunk__44219 = G__44285;
count__44220 = G__44286;
i__44221 = G__44287;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__44288){
var vec__44289 = p__44288;
var _ = cljs.core.nth.call(null,vec__44289,(0),null);
var v = cljs.core.nth.call(null,vec__44289,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__44292){
var vec__44293 = p__44292;
var k = cljs.core.nth.call(null,vec__44293,(0),null);
var v = cljs.core.nth.call(null,vec__44293,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44305_44313 = cljs.core.seq.call(null,deps);
var chunk__44306_44314 = null;
var count__44307_44315 = (0);
var i__44308_44316 = (0);
while(true){
if((i__44308_44316 < count__44307_44315)){
var dep_44317 = cljs.core._nth.call(null,chunk__44306_44314,i__44308_44316);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_44317;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44317));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44317,(depth + (1)),state);
} else {
}


var G__44318 = seq__44305_44313;
var G__44319 = chunk__44306_44314;
var G__44320 = count__44307_44315;
var G__44321 = (i__44308_44316 + (1));
seq__44305_44313 = G__44318;
chunk__44306_44314 = G__44319;
count__44307_44315 = G__44320;
i__44308_44316 = G__44321;
continue;
} else {
var temp__5720__auto___44322 = cljs.core.seq.call(null,seq__44305_44313);
if(temp__5720__auto___44322){
var seq__44305_44323__$1 = temp__5720__auto___44322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44305_44323__$1)){
var c__4556__auto___44324 = cljs.core.chunk_first.call(null,seq__44305_44323__$1);
var G__44325 = cljs.core.chunk_rest.call(null,seq__44305_44323__$1);
var G__44326 = c__4556__auto___44324;
var G__44327 = cljs.core.count.call(null,c__4556__auto___44324);
var G__44328 = (0);
seq__44305_44313 = G__44325;
chunk__44306_44314 = G__44326;
count__44307_44315 = G__44327;
i__44308_44316 = G__44328;
continue;
} else {
var dep_44329 = cljs.core.first.call(null,seq__44305_44323__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_44329;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44329));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44329,(depth + (1)),state);
} else {
}


var G__44330 = cljs.core.next.call(null,seq__44305_44323__$1);
var G__44331 = null;
var G__44332 = (0);
var G__44333 = (0);
seq__44305_44313 = G__44330;
chunk__44306_44314 = G__44331;
count__44307_44315 = G__44332;
i__44308_44316 = G__44333;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44309){
var vec__44310 = p__44309;
var seq__44311 = cljs.core.seq.call(null,vec__44310);
var first__44312 = cljs.core.first.call(null,seq__44311);
var seq__44311__$1 = cljs.core.next.call(null,seq__44311);
var x = first__44312;
var xs = seq__44311__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__44296_SHARP_){
return clojure.set.difference.call(null,p1__44296_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__44334_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__44334_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44335 = cljs.core.seq.call(null,provides);
var chunk__44336 = null;
var count__44337 = (0);
var i__44338 = (0);
while(true){
if((i__44338 < count__44337)){
var prov = cljs.core._nth.call(null,chunk__44336,i__44338);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44347_44355 = cljs.core.seq.call(null,requires);
var chunk__44348_44356 = null;
var count__44349_44357 = (0);
var i__44350_44358 = (0);
while(true){
if((i__44350_44358 < count__44349_44357)){
var req_44359 = cljs.core._nth.call(null,chunk__44348_44356,i__44350_44358);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44359,prov);


var G__44360 = seq__44347_44355;
var G__44361 = chunk__44348_44356;
var G__44362 = count__44349_44357;
var G__44363 = (i__44350_44358 + (1));
seq__44347_44355 = G__44360;
chunk__44348_44356 = G__44361;
count__44349_44357 = G__44362;
i__44350_44358 = G__44363;
continue;
} else {
var temp__5720__auto___44364 = cljs.core.seq.call(null,seq__44347_44355);
if(temp__5720__auto___44364){
var seq__44347_44365__$1 = temp__5720__auto___44364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44347_44365__$1)){
var c__4556__auto___44366 = cljs.core.chunk_first.call(null,seq__44347_44365__$1);
var G__44367 = cljs.core.chunk_rest.call(null,seq__44347_44365__$1);
var G__44368 = c__4556__auto___44366;
var G__44369 = cljs.core.count.call(null,c__4556__auto___44366);
var G__44370 = (0);
seq__44347_44355 = G__44367;
chunk__44348_44356 = G__44368;
count__44349_44357 = G__44369;
i__44350_44358 = G__44370;
continue;
} else {
var req_44371 = cljs.core.first.call(null,seq__44347_44365__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44371,prov);


var G__44372 = cljs.core.next.call(null,seq__44347_44365__$1);
var G__44373 = null;
var G__44374 = (0);
var G__44375 = (0);
seq__44347_44355 = G__44372;
chunk__44348_44356 = G__44373;
count__44349_44357 = G__44374;
i__44350_44358 = G__44375;
continue;
}
} else {
}
}
break;
}


var G__44376 = seq__44335;
var G__44377 = chunk__44336;
var G__44378 = count__44337;
var G__44379 = (i__44338 + (1));
seq__44335 = G__44376;
chunk__44336 = G__44377;
count__44337 = G__44378;
i__44338 = G__44379;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44335);
if(temp__5720__auto__){
var seq__44335__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44335__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44335__$1);
var G__44380 = cljs.core.chunk_rest.call(null,seq__44335__$1);
var G__44381 = c__4556__auto__;
var G__44382 = cljs.core.count.call(null,c__4556__auto__);
var G__44383 = (0);
seq__44335 = G__44380;
chunk__44336 = G__44381;
count__44337 = G__44382;
i__44338 = G__44383;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44335__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44351_44384 = cljs.core.seq.call(null,requires);
var chunk__44352_44385 = null;
var count__44353_44386 = (0);
var i__44354_44387 = (0);
while(true){
if((i__44354_44387 < count__44353_44386)){
var req_44388 = cljs.core._nth.call(null,chunk__44352_44385,i__44354_44387);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44388,prov);


var G__44389 = seq__44351_44384;
var G__44390 = chunk__44352_44385;
var G__44391 = count__44353_44386;
var G__44392 = (i__44354_44387 + (1));
seq__44351_44384 = G__44389;
chunk__44352_44385 = G__44390;
count__44353_44386 = G__44391;
i__44354_44387 = G__44392;
continue;
} else {
var temp__5720__auto___44393__$1 = cljs.core.seq.call(null,seq__44351_44384);
if(temp__5720__auto___44393__$1){
var seq__44351_44394__$1 = temp__5720__auto___44393__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44351_44394__$1)){
var c__4556__auto___44395 = cljs.core.chunk_first.call(null,seq__44351_44394__$1);
var G__44396 = cljs.core.chunk_rest.call(null,seq__44351_44394__$1);
var G__44397 = c__4556__auto___44395;
var G__44398 = cljs.core.count.call(null,c__4556__auto___44395);
var G__44399 = (0);
seq__44351_44384 = G__44396;
chunk__44352_44385 = G__44397;
count__44353_44386 = G__44398;
i__44354_44387 = G__44399;
continue;
} else {
var req_44400 = cljs.core.first.call(null,seq__44351_44394__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44400,prov);


var G__44401 = cljs.core.next.call(null,seq__44351_44394__$1);
var G__44402 = null;
var G__44403 = (0);
var G__44404 = (0);
seq__44351_44384 = G__44401;
chunk__44352_44385 = G__44402;
count__44353_44386 = G__44403;
i__44354_44387 = G__44404;
continue;
}
} else {
}
}
break;
}


var G__44405 = cljs.core.next.call(null,seq__44335__$1);
var G__44406 = null;
var G__44407 = (0);
var G__44408 = (0);
seq__44335 = G__44405;
chunk__44336 = G__44406;
count__44337 = G__44407;
i__44338 = G__44408;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44409_44413 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44410_44414 = null;
var count__44411_44415 = (0);
var i__44412_44416 = (0);
while(true){
if((i__44412_44416 < count__44411_44415)){
var ns_44417 = cljs.core._nth.call(null,chunk__44410_44414,i__44412_44416);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44417);


var G__44418 = seq__44409_44413;
var G__44419 = chunk__44410_44414;
var G__44420 = count__44411_44415;
var G__44421 = (i__44412_44416 + (1));
seq__44409_44413 = G__44418;
chunk__44410_44414 = G__44419;
count__44411_44415 = G__44420;
i__44412_44416 = G__44421;
continue;
} else {
var temp__5720__auto___44422 = cljs.core.seq.call(null,seq__44409_44413);
if(temp__5720__auto___44422){
var seq__44409_44423__$1 = temp__5720__auto___44422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44409_44423__$1)){
var c__4556__auto___44424 = cljs.core.chunk_first.call(null,seq__44409_44423__$1);
var G__44425 = cljs.core.chunk_rest.call(null,seq__44409_44423__$1);
var G__44426 = c__4556__auto___44424;
var G__44427 = cljs.core.count.call(null,c__4556__auto___44424);
var G__44428 = (0);
seq__44409_44413 = G__44425;
chunk__44410_44414 = G__44426;
count__44411_44415 = G__44427;
i__44412_44416 = G__44428;
continue;
} else {
var ns_44429 = cljs.core.first.call(null,seq__44409_44423__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44429);


var G__44430 = cljs.core.next.call(null,seq__44409_44423__$1);
var G__44431 = null;
var G__44432 = (0);
var G__44433 = (0);
seq__44409_44413 = G__44430;
chunk__44410_44414 = G__44431;
count__44411_44415 = G__44432;
i__44412_44416 = G__44433;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__44434__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44435__i = 0, G__44435__a = new Array(arguments.length -  0);
while (G__44435__i < G__44435__a.length) {G__44435__a[G__44435__i] = arguments[G__44435__i + 0]; ++G__44435__i;}
  args = new cljs.core.IndexedSeq(G__44435__a,0,null);
} 
return G__44434__delegate.call(this,args);};
G__44434.cljs$lang$maxFixedArity = 0;
G__44434.cljs$lang$applyTo = (function (arglist__44436){
var args = cljs.core.seq(arglist__44436);
return G__44434__delegate(args);
});
G__44434.cljs$core$IFn$_invoke$arity$variadic = G__44434__delegate;
return G__44434;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__44437_SHARP_,p2__44438_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44437_SHARP_)),p2__44438_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__44439_SHARP_,p2__44440_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44439_SHARP_),p2__44440_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44441 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44441.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__44441.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__44441;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44442){if((e44442 instanceof Error)){
var e = e44442;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44442;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44443){if((e44443 instanceof Error)){
var e = e44443;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44443;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44444 = cljs.core._EQ_;
var expr__44445 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44444.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44445))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__44444.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44445))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__44444.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44445))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44447,callback){
var map__44448 = p__44447;
var map__44448__$1 = (((((!((map__44448 == null))))?(((((map__44448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44448):map__44448);
var file_msg = map__44448__$1;
var request_url = cljs.core.get.call(null,map__44448__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_44486){
var state_val_44487 = (state_44486[(1)]);
if((state_val_44487 === (7))){
var inst_44482 = (state_44486[(2)]);
var state_44486__$1 = state_44486;
var statearr_44488_44514 = state_44486__$1;
(statearr_44488_44514[(2)] = inst_44482);

(statearr_44488_44514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (1))){
var state_44486__$1 = state_44486;
var statearr_44489_44515 = state_44486__$1;
(statearr_44489_44515[(2)] = null);

(statearr_44489_44515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (4))){
var inst_44452 = (state_44486[(7)]);
var inst_44452__$1 = (state_44486[(2)]);
var state_44486__$1 = (function (){var statearr_44490 = state_44486;
(statearr_44490[(7)] = inst_44452__$1);

return statearr_44490;
})();
if(cljs.core.truth_(inst_44452__$1)){
var statearr_44491_44516 = state_44486__$1;
(statearr_44491_44516[(1)] = (5));

} else {
var statearr_44492_44517 = state_44486__$1;
(statearr_44492_44517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (15))){
var inst_44467 = (state_44486[(8)]);
var inst_44465 = (state_44486[(9)]);
var inst_44469 = inst_44467.call(null,inst_44465);
var state_44486__$1 = state_44486;
var statearr_44493_44518 = state_44486__$1;
(statearr_44493_44518[(2)] = inst_44469);

(statearr_44493_44518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (13))){
var inst_44476 = (state_44486[(2)]);
var state_44486__$1 = state_44486;
var statearr_44494_44519 = state_44486__$1;
(statearr_44494_44519[(2)] = inst_44476);

(statearr_44494_44519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (6))){
var state_44486__$1 = state_44486;
var statearr_44495_44520 = state_44486__$1;
(statearr_44495_44520[(2)] = null);

(statearr_44495_44520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (17))){
var inst_44473 = (state_44486[(2)]);
var state_44486__$1 = state_44486;
var statearr_44496_44521 = state_44486__$1;
(statearr_44496_44521[(2)] = inst_44473);

(statearr_44496_44521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (3))){
var inst_44484 = (state_44486[(2)]);
var state_44486__$1 = state_44486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44486__$1,inst_44484);
} else {
if((state_val_44487 === (12))){
var state_44486__$1 = state_44486;
var statearr_44497_44522 = state_44486__$1;
(statearr_44497_44522[(2)] = null);

(statearr_44497_44522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (2))){
var state_44486__$1 = state_44486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44486__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44487 === (11))){
var inst_44457 = (state_44486[(10)]);
var inst_44463 = figwheel.client.file_reloading.blocking_load.call(null,inst_44457);
var state_44486__$1 = state_44486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44486__$1,(14),inst_44463);
} else {
if((state_val_44487 === (9))){
var inst_44457 = (state_44486[(10)]);
var state_44486__$1 = state_44486;
if(cljs.core.truth_(inst_44457)){
var statearr_44498_44523 = state_44486__$1;
(statearr_44498_44523[(1)] = (11));

} else {
var statearr_44499_44524 = state_44486__$1;
(statearr_44499_44524[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (5))){
var inst_44452 = (state_44486[(7)]);
var inst_44458 = (state_44486[(11)]);
var inst_44457 = cljs.core.nth.call(null,inst_44452,(0),null);
var inst_44458__$1 = cljs.core.nth.call(null,inst_44452,(1),null);
var state_44486__$1 = (function (){var statearr_44500 = state_44486;
(statearr_44500[(10)] = inst_44457);

(statearr_44500[(11)] = inst_44458__$1);

return statearr_44500;
})();
if(cljs.core.truth_(inst_44458__$1)){
var statearr_44501_44525 = state_44486__$1;
(statearr_44501_44525[(1)] = (8));

} else {
var statearr_44502_44526 = state_44486__$1;
(statearr_44502_44526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (14))){
var inst_44467 = (state_44486[(8)]);
var inst_44457 = (state_44486[(10)]);
var inst_44465 = (state_44486[(2)]);
var inst_44466 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44467__$1 = cljs.core.get.call(null,inst_44466,inst_44457);
var state_44486__$1 = (function (){var statearr_44503 = state_44486;
(statearr_44503[(8)] = inst_44467__$1);

(statearr_44503[(9)] = inst_44465);

return statearr_44503;
})();
if(cljs.core.truth_(inst_44467__$1)){
var statearr_44504_44527 = state_44486__$1;
(statearr_44504_44527[(1)] = (15));

} else {
var statearr_44505_44528 = state_44486__$1;
(statearr_44505_44528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (16))){
var inst_44465 = (state_44486[(9)]);
var inst_44471 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44465);
var state_44486__$1 = state_44486;
var statearr_44506_44529 = state_44486__$1;
(statearr_44506_44529[(2)] = inst_44471);

(statearr_44506_44529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (10))){
var inst_44478 = (state_44486[(2)]);
var state_44486__$1 = (function (){var statearr_44507 = state_44486;
(statearr_44507[(12)] = inst_44478);

return statearr_44507;
})();
var statearr_44508_44530 = state_44486__$1;
(statearr_44508_44530[(2)] = null);

(statearr_44508_44530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44487 === (8))){
var inst_44458 = (state_44486[(11)]);
var inst_44460 = eval(inst_44458);
var state_44486__$1 = state_44486;
var statearr_44509_44531 = state_44486__$1;
(statearr_44509_44531[(2)] = inst_44460);

(statearr_44509_44531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__42083__auto__ = null;
var figwheel$client$file_reloading$state_machine__42083__auto____0 = (function (){
var statearr_44510 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44510[(0)] = figwheel$client$file_reloading$state_machine__42083__auto__);

(statearr_44510[(1)] = (1));

return statearr_44510;
});
var figwheel$client$file_reloading$state_machine__42083__auto____1 = (function (state_44486){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_44486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e44511){if((e44511 instanceof Object)){
var ex__42086__auto__ = e44511;
var statearr_44512_44532 = state_44486;
(statearr_44512_44532[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44533 = state_44486;
state_44486 = G__44533;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42083__auto__ = function(state_44486){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42083__auto____1.call(this,state_44486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42083__auto____0;
figwheel$client$file_reloading$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42083__auto____1;
return figwheel$client$file_reloading$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_44513 = f__42178__auto__.call(null);
(statearr_44513[(6)] = c__42177__auto__);

return statearr_44513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__44535 = arguments.length;
switch (G__44535) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44537,callback){
var map__44538 = p__44537;
var map__44538__$1 = (((((!((map__44538 == null))))?(((((map__44538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44538):map__44538);
var file_msg = map__44538__$1;
var namespace = cljs.core.get.call(null,map__44538__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44540){
var map__44541 = p__44540;
var map__44541__$1 = (((((!((map__44541 == null))))?(((((map__44541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44541):map__44541);
var file_msg = map__44541__$1;
var namespace = cljs.core.get.call(null,map__44541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44543){
var map__44544 = p__44543;
var map__44544__$1 = (((((!((map__44544 == null))))?(((((map__44544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44544):map__44544);
var file_msg = map__44544__$1;
var namespace = cljs.core.get.call(null,map__44544__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44546,callback){
var map__44547 = p__44546;
var map__44547__$1 = (((((!((map__44547 == null))))?(((((map__44547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44547):map__44547);
var file_msg = map__44547__$1;
var request_url = cljs.core.get.call(null,map__44547__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__42177__auto___44597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_44582){
var state_val_44583 = (state_44582[(1)]);
if((state_val_44583 === (1))){
var inst_44556 = cljs.core.seq.call(null,files);
var inst_44557 = cljs.core.first.call(null,inst_44556);
var inst_44558 = cljs.core.next.call(null,inst_44556);
var inst_44559 = files;
var state_44582__$1 = (function (){var statearr_44584 = state_44582;
(statearr_44584[(7)] = inst_44559);

(statearr_44584[(8)] = inst_44558);

(statearr_44584[(9)] = inst_44557);

return statearr_44584;
})();
var statearr_44585_44598 = state_44582__$1;
(statearr_44585_44598[(2)] = null);

(statearr_44585_44598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44583 === (2))){
var inst_44559 = (state_44582[(7)]);
var inst_44565 = (state_44582[(10)]);
var inst_44564 = cljs.core.seq.call(null,inst_44559);
var inst_44565__$1 = cljs.core.first.call(null,inst_44564);
var inst_44566 = cljs.core.next.call(null,inst_44564);
var inst_44567 = (inst_44565__$1 == null);
var inst_44568 = cljs.core.not.call(null,inst_44567);
var state_44582__$1 = (function (){var statearr_44586 = state_44582;
(statearr_44586[(10)] = inst_44565__$1);

(statearr_44586[(11)] = inst_44566);

return statearr_44586;
})();
if(inst_44568){
var statearr_44587_44599 = state_44582__$1;
(statearr_44587_44599[(1)] = (4));

} else {
var statearr_44588_44600 = state_44582__$1;
(statearr_44588_44600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44583 === (3))){
var inst_44580 = (state_44582[(2)]);
var state_44582__$1 = state_44582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44582__$1,inst_44580);
} else {
if((state_val_44583 === (4))){
var inst_44565 = (state_44582[(10)]);
var inst_44570 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44565);
var state_44582__$1 = state_44582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44582__$1,(7),inst_44570);
} else {
if((state_val_44583 === (5))){
var inst_44576 = cljs.core.async.close_BANG_.call(null,out);
var state_44582__$1 = state_44582;
var statearr_44589_44601 = state_44582__$1;
(statearr_44589_44601[(2)] = inst_44576);

(statearr_44589_44601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44583 === (6))){
var inst_44578 = (state_44582[(2)]);
var state_44582__$1 = state_44582;
var statearr_44590_44602 = state_44582__$1;
(statearr_44590_44602[(2)] = inst_44578);

(statearr_44590_44602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44583 === (7))){
var inst_44566 = (state_44582[(11)]);
var inst_44572 = (state_44582[(2)]);
var inst_44573 = cljs.core.async.put_BANG_.call(null,out,inst_44572);
var inst_44559 = inst_44566;
var state_44582__$1 = (function (){var statearr_44591 = state_44582;
(statearr_44591[(7)] = inst_44559);

(statearr_44591[(12)] = inst_44573);

return statearr_44591;
})();
var statearr_44592_44603 = state_44582__$1;
(statearr_44592_44603[(2)] = null);

(statearr_44592_44603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____0 = (function (){
var statearr_44593 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44593[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__);

(statearr_44593[(1)] = (1));

return statearr_44593;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____1 = (function (state_44582){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_44582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e44594){if((e44594 instanceof Object)){
var ex__42086__auto__ = e44594;
var statearr_44595_44604 = state_44582;
(statearr_44595_44604[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44605 = state_44582;
state_44582 = G__44605;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__ = function(state_44582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____1.call(this,state_44582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_44596 = f__42178__auto__.call(null);
(statearr_44596[(6)] = c__42177__auto___44597);

return statearr_44596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44606,opts){
var map__44607 = p__44606;
var map__44607__$1 = (((((!((map__44607 == null))))?(((((map__44607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44607):map__44607);
var eval_body = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44609){var e = e44609;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__44610_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44610_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44611){
var vec__44612 = p__44611;
var k = cljs.core.nth.call(null,vec__44612,(0),null);
var v = cljs.core.nth.call(null,vec__44612,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44615){
var vec__44616 = p__44615;
var k = cljs.core.nth.call(null,vec__44616,(0),null);
var v = cljs.core.nth.call(null,vec__44616,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44622,p__44623){
var map__44624 = p__44622;
var map__44624__$1 = (((((!((map__44624 == null))))?(((((map__44624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44624):map__44624);
var opts = map__44624__$1;
var before_jsload = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44625 = p__44623;
var map__44625__$1 = (((((!((map__44625 == null))))?(((((map__44625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44625):map__44625);
var msg = map__44625__$1;
var files = cljs.core.get.call(null,map__44625__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44625__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44625__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_44779){
var state_val_44780 = (state_44779[(1)]);
if((state_val_44780 === (7))){
var inst_44642 = (state_44779[(7)]);
var inst_44639 = (state_44779[(8)]);
var inst_44641 = (state_44779[(9)]);
var inst_44640 = (state_44779[(10)]);
var inst_44647 = cljs.core._nth.call(null,inst_44640,inst_44642);
var inst_44648 = figwheel.client.file_reloading.eval_body.call(null,inst_44647,opts);
var inst_44649 = (inst_44642 + (1));
var tmp44781 = inst_44639;
var tmp44782 = inst_44641;
var tmp44783 = inst_44640;
var inst_44639__$1 = tmp44781;
var inst_44640__$1 = tmp44783;
var inst_44641__$1 = tmp44782;
var inst_44642__$1 = inst_44649;
var state_44779__$1 = (function (){var statearr_44784 = state_44779;
(statearr_44784[(7)] = inst_44642__$1);

(statearr_44784[(8)] = inst_44639__$1);

(statearr_44784[(11)] = inst_44648);

(statearr_44784[(9)] = inst_44641__$1);

(statearr_44784[(10)] = inst_44640__$1);

return statearr_44784;
})();
var statearr_44785_44868 = state_44779__$1;
(statearr_44785_44868[(2)] = null);

(statearr_44785_44868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (20))){
var inst_44682 = (state_44779[(12)]);
var inst_44690 = figwheel.client.file_reloading.sort_files.call(null,inst_44682);
var state_44779__$1 = state_44779;
var statearr_44786_44869 = state_44779__$1;
(statearr_44786_44869[(2)] = inst_44690);

(statearr_44786_44869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (27))){
var state_44779__$1 = state_44779;
var statearr_44787_44870 = state_44779__$1;
(statearr_44787_44870[(2)] = null);

(statearr_44787_44870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (1))){
var inst_44631 = (state_44779[(13)]);
var inst_44628 = before_jsload.call(null,files);
var inst_44629 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44630 = (function (){return (function (p1__44619_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44619_SHARP_);
});
})();
var inst_44631__$1 = cljs.core.filter.call(null,inst_44630,files);
var inst_44632 = cljs.core.not_empty.call(null,inst_44631__$1);
var state_44779__$1 = (function (){var statearr_44788 = state_44779;
(statearr_44788[(13)] = inst_44631__$1);

(statearr_44788[(14)] = inst_44629);

(statearr_44788[(15)] = inst_44628);

return statearr_44788;
})();
if(cljs.core.truth_(inst_44632)){
var statearr_44789_44871 = state_44779__$1;
(statearr_44789_44871[(1)] = (2));

} else {
var statearr_44790_44872 = state_44779__$1;
(statearr_44790_44872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (24))){
var state_44779__$1 = state_44779;
var statearr_44791_44873 = state_44779__$1;
(statearr_44791_44873[(2)] = null);

(statearr_44791_44873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (39))){
var inst_44732 = (state_44779[(16)]);
var state_44779__$1 = state_44779;
var statearr_44792_44874 = state_44779__$1;
(statearr_44792_44874[(2)] = inst_44732);

(statearr_44792_44874[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (46))){
var inst_44774 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44793_44875 = state_44779__$1;
(statearr_44793_44875[(2)] = inst_44774);

(statearr_44793_44875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (4))){
var inst_44676 = (state_44779[(2)]);
var inst_44677 = cljs.core.List.EMPTY;
var inst_44678 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44677);
var inst_44679 = (function (){return (function (p1__44620_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44620_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44620_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44620_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_44680 = cljs.core.filter.call(null,inst_44679,files);
var inst_44681 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44682 = cljs.core.concat.call(null,inst_44680,inst_44681);
var state_44779__$1 = (function (){var statearr_44794 = state_44779;
(statearr_44794[(17)] = inst_44676);

(statearr_44794[(12)] = inst_44682);

(statearr_44794[(18)] = inst_44678);

return statearr_44794;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44795_44876 = state_44779__$1;
(statearr_44795_44876[(1)] = (16));

} else {
var statearr_44796_44877 = state_44779__$1;
(statearr_44796_44877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (15))){
var inst_44666 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44797_44878 = state_44779__$1;
(statearr_44797_44878[(2)] = inst_44666);

(statearr_44797_44878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (21))){
var inst_44692 = (state_44779[(19)]);
var inst_44692__$1 = (state_44779[(2)]);
var inst_44693 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44692__$1);
var state_44779__$1 = (function (){var statearr_44798 = state_44779;
(statearr_44798[(19)] = inst_44692__$1);

return statearr_44798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44779__$1,(22),inst_44693);
} else {
if((state_val_44780 === (31))){
var inst_44777 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44779__$1,inst_44777);
} else {
if((state_val_44780 === (32))){
var inst_44732 = (state_44779[(16)]);
var inst_44737 = inst_44732.cljs$lang$protocol_mask$partition0$;
var inst_44738 = (inst_44737 & (64));
var inst_44739 = inst_44732.cljs$core$ISeq$;
var inst_44740 = (cljs.core.PROTOCOL_SENTINEL === inst_44739);
var inst_44741 = ((inst_44738) || (inst_44740));
var state_44779__$1 = state_44779;
if(cljs.core.truth_(inst_44741)){
var statearr_44799_44879 = state_44779__$1;
(statearr_44799_44879[(1)] = (35));

} else {
var statearr_44800_44880 = state_44779__$1;
(statearr_44800_44880[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (40))){
var inst_44754 = (state_44779[(20)]);
var inst_44753 = (state_44779[(2)]);
var inst_44754__$1 = cljs.core.get.call(null,inst_44753,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44755 = cljs.core.get.call(null,inst_44753,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44756 = cljs.core.not_empty.call(null,inst_44754__$1);
var state_44779__$1 = (function (){var statearr_44801 = state_44779;
(statearr_44801[(21)] = inst_44755);

(statearr_44801[(20)] = inst_44754__$1);

return statearr_44801;
})();
if(cljs.core.truth_(inst_44756)){
var statearr_44802_44881 = state_44779__$1;
(statearr_44802_44881[(1)] = (41));

} else {
var statearr_44803_44882 = state_44779__$1;
(statearr_44803_44882[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (33))){
var state_44779__$1 = state_44779;
var statearr_44804_44883 = state_44779__$1;
(statearr_44804_44883[(2)] = false);

(statearr_44804_44883[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (13))){
var inst_44652 = (state_44779[(22)]);
var inst_44656 = cljs.core.chunk_first.call(null,inst_44652);
var inst_44657 = cljs.core.chunk_rest.call(null,inst_44652);
var inst_44658 = cljs.core.count.call(null,inst_44656);
var inst_44639 = inst_44657;
var inst_44640 = inst_44656;
var inst_44641 = inst_44658;
var inst_44642 = (0);
var state_44779__$1 = (function (){var statearr_44805 = state_44779;
(statearr_44805[(7)] = inst_44642);

(statearr_44805[(8)] = inst_44639);

(statearr_44805[(9)] = inst_44641);

(statearr_44805[(10)] = inst_44640);

return statearr_44805;
})();
var statearr_44806_44884 = state_44779__$1;
(statearr_44806_44884[(2)] = null);

(statearr_44806_44884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (22))){
var inst_44700 = (state_44779[(23)]);
var inst_44695 = (state_44779[(24)]);
var inst_44696 = (state_44779[(25)]);
var inst_44692 = (state_44779[(19)]);
var inst_44695__$1 = (state_44779[(2)]);
var inst_44696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44695__$1);
var inst_44697 = (function (){var all_files = inst_44692;
var res_SINGLEQUOTE_ = inst_44695__$1;
var res = inst_44696__$1;
return (function (p1__44621_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44621_SHARP_));
});
})();
var inst_44698 = cljs.core.filter.call(null,inst_44697,inst_44695__$1);
var inst_44699 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44699);
var inst_44701 = cljs.core.not_empty.call(null,inst_44700__$1);
var state_44779__$1 = (function (){var statearr_44807 = state_44779;
(statearr_44807[(23)] = inst_44700__$1);

(statearr_44807[(24)] = inst_44695__$1);

(statearr_44807[(26)] = inst_44698);

(statearr_44807[(25)] = inst_44696__$1);

return statearr_44807;
})();
if(cljs.core.truth_(inst_44701)){
var statearr_44808_44885 = state_44779__$1;
(statearr_44808_44885[(1)] = (23));

} else {
var statearr_44809_44886 = state_44779__$1;
(statearr_44809_44886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (36))){
var state_44779__$1 = state_44779;
var statearr_44810_44887 = state_44779__$1;
(statearr_44810_44887[(2)] = false);

(statearr_44810_44887[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (41))){
var inst_44754 = (state_44779[(20)]);
var inst_44758 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44759 = cljs.core.map.call(null,inst_44758,inst_44754);
var inst_44760 = cljs.core.pr_str.call(null,inst_44759);
var inst_44761 = ["figwheel-no-load meta-data: ",inst_44760].join('');
var inst_44762 = figwheel.client.utils.log.call(null,inst_44761);
var state_44779__$1 = state_44779;
var statearr_44811_44888 = state_44779__$1;
(statearr_44811_44888[(2)] = inst_44762);

(statearr_44811_44888[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (43))){
var inst_44755 = (state_44779[(21)]);
var inst_44765 = (state_44779[(2)]);
var inst_44766 = cljs.core.not_empty.call(null,inst_44755);
var state_44779__$1 = (function (){var statearr_44812 = state_44779;
(statearr_44812[(27)] = inst_44765);

return statearr_44812;
})();
if(cljs.core.truth_(inst_44766)){
var statearr_44813_44889 = state_44779__$1;
(statearr_44813_44889[(1)] = (44));

} else {
var statearr_44814_44890 = state_44779__$1;
(statearr_44814_44890[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (29))){
var inst_44700 = (state_44779[(23)]);
var inst_44695 = (state_44779[(24)]);
var inst_44698 = (state_44779[(26)]);
var inst_44696 = (state_44779[(25)]);
var inst_44732 = (state_44779[(16)]);
var inst_44692 = (state_44779[(19)]);
var inst_44728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44731 = (function (){var all_files = inst_44692;
var res_SINGLEQUOTE_ = inst_44695;
var res = inst_44696;
var files_not_loaded = inst_44698;
var dependencies_that_loaded = inst_44700;
return (function (p__44730){
var map__44815 = p__44730;
var map__44815__$1 = (((((!((map__44815 == null))))?(((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44815):map__44815);
var namespace = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_44732__$1 = cljs.core.group_by.call(null,inst_44731,inst_44698);
var inst_44734 = (inst_44732__$1 == null);
var inst_44735 = cljs.core.not.call(null,inst_44734);
var state_44779__$1 = (function (){var statearr_44817 = state_44779;
(statearr_44817[(28)] = inst_44728);

(statearr_44817[(16)] = inst_44732__$1);

return statearr_44817;
})();
if(inst_44735){
var statearr_44818_44891 = state_44779__$1;
(statearr_44818_44891[(1)] = (32));

} else {
var statearr_44819_44892 = state_44779__$1;
(statearr_44819_44892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (44))){
var inst_44755 = (state_44779[(21)]);
var inst_44768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44755);
var inst_44769 = cljs.core.pr_str.call(null,inst_44768);
var inst_44770 = ["not required: ",inst_44769].join('');
var inst_44771 = figwheel.client.utils.log.call(null,inst_44770);
var state_44779__$1 = state_44779;
var statearr_44820_44893 = state_44779__$1;
(statearr_44820_44893[(2)] = inst_44771);

(statearr_44820_44893[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (6))){
var inst_44673 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44821_44894 = state_44779__$1;
(statearr_44821_44894[(2)] = inst_44673);

(statearr_44821_44894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (28))){
var inst_44698 = (state_44779[(26)]);
var inst_44725 = (state_44779[(2)]);
var inst_44726 = cljs.core.not_empty.call(null,inst_44698);
var state_44779__$1 = (function (){var statearr_44822 = state_44779;
(statearr_44822[(29)] = inst_44725);

return statearr_44822;
})();
if(cljs.core.truth_(inst_44726)){
var statearr_44823_44895 = state_44779__$1;
(statearr_44823_44895[(1)] = (29));

} else {
var statearr_44824_44896 = state_44779__$1;
(statearr_44824_44896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (25))){
var inst_44696 = (state_44779[(25)]);
var inst_44712 = (state_44779[(2)]);
var inst_44713 = cljs.core.not_empty.call(null,inst_44696);
var state_44779__$1 = (function (){var statearr_44825 = state_44779;
(statearr_44825[(30)] = inst_44712);

return statearr_44825;
})();
if(cljs.core.truth_(inst_44713)){
var statearr_44826_44897 = state_44779__$1;
(statearr_44826_44897[(1)] = (26));

} else {
var statearr_44827_44898 = state_44779__$1;
(statearr_44827_44898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (34))){
var inst_44748 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
if(cljs.core.truth_(inst_44748)){
var statearr_44828_44899 = state_44779__$1;
(statearr_44828_44899[(1)] = (38));

} else {
var statearr_44829_44900 = state_44779__$1;
(statearr_44829_44900[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (17))){
var state_44779__$1 = state_44779;
var statearr_44830_44901 = state_44779__$1;
(statearr_44830_44901[(2)] = recompile_dependents);

(statearr_44830_44901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (3))){
var state_44779__$1 = state_44779;
var statearr_44831_44902 = state_44779__$1;
(statearr_44831_44902[(2)] = null);

(statearr_44831_44902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (12))){
var inst_44669 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44832_44903 = state_44779__$1;
(statearr_44832_44903[(2)] = inst_44669);

(statearr_44832_44903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (2))){
var inst_44631 = (state_44779[(13)]);
var inst_44638 = cljs.core.seq.call(null,inst_44631);
var inst_44639 = inst_44638;
var inst_44640 = null;
var inst_44641 = (0);
var inst_44642 = (0);
var state_44779__$1 = (function (){var statearr_44833 = state_44779;
(statearr_44833[(7)] = inst_44642);

(statearr_44833[(8)] = inst_44639);

(statearr_44833[(9)] = inst_44641);

(statearr_44833[(10)] = inst_44640);

return statearr_44833;
})();
var statearr_44834_44904 = state_44779__$1;
(statearr_44834_44904[(2)] = null);

(statearr_44834_44904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (23))){
var inst_44700 = (state_44779[(23)]);
var inst_44695 = (state_44779[(24)]);
var inst_44698 = (state_44779[(26)]);
var inst_44696 = (state_44779[(25)]);
var inst_44692 = (state_44779[(19)]);
var inst_44703 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44705 = (function (){var all_files = inst_44692;
var res_SINGLEQUOTE_ = inst_44695;
var res = inst_44696;
var files_not_loaded = inst_44698;
var dependencies_that_loaded = inst_44700;
return (function (p__44704){
var map__44835 = p__44704;
var map__44835__$1 = (((((!((map__44835 == null))))?(((((map__44835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44835):map__44835);
var request_url = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_44706 = cljs.core.reverse.call(null,inst_44700);
var inst_44707 = cljs.core.map.call(null,inst_44705,inst_44706);
var inst_44708 = cljs.core.pr_str.call(null,inst_44707);
var inst_44709 = figwheel.client.utils.log.call(null,inst_44708);
var state_44779__$1 = (function (){var statearr_44837 = state_44779;
(statearr_44837[(31)] = inst_44703);

return statearr_44837;
})();
var statearr_44838_44905 = state_44779__$1;
(statearr_44838_44905[(2)] = inst_44709);

(statearr_44838_44905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (35))){
var state_44779__$1 = state_44779;
var statearr_44839_44906 = state_44779__$1;
(statearr_44839_44906[(2)] = true);

(statearr_44839_44906[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (19))){
var inst_44682 = (state_44779[(12)]);
var inst_44688 = figwheel.client.file_reloading.expand_files.call(null,inst_44682);
var state_44779__$1 = state_44779;
var statearr_44840_44907 = state_44779__$1;
(statearr_44840_44907[(2)] = inst_44688);

(statearr_44840_44907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (11))){
var state_44779__$1 = state_44779;
var statearr_44841_44908 = state_44779__$1;
(statearr_44841_44908[(2)] = null);

(statearr_44841_44908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (9))){
var inst_44671 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44842_44909 = state_44779__$1;
(statearr_44842_44909[(2)] = inst_44671);

(statearr_44842_44909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (5))){
var inst_44642 = (state_44779[(7)]);
var inst_44641 = (state_44779[(9)]);
var inst_44644 = (inst_44642 < inst_44641);
var inst_44645 = inst_44644;
var state_44779__$1 = state_44779;
if(cljs.core.truth_(inst_44645)){
var statearr_44843_44910 = state_44779__$1;
(statearr_44843_44910[(1)] = (7));

} else {
var statearr_44844_44911 = state_44779__$1;
(statearr_44844_44911[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (14))){
var inst_44652 = (state_44779[(22)]);
var inst_44661 = cljs.core.first.call(null,inst_44652);
var inst_44662 = figwheel.client.file_reloading.eval_body.call(null,inst_44661,opts);
var inst_44663 = cljs.core.next.call(null,inst_44652);
var inst_44639 = inst_44663;
var inst_44640 = null;
var inst_44641 = (0);
var inst_44642 = (0);
var state_44779__$1 = (function (){var statearr_44845 = state_44779;
(statearr_44845[(32)] = inst_44662);

(statearr_44845[(7)] = inst_44642);

(statearr_44845[(8)] = inst_44639);

(statearr_44845[(9)] = inst_44641);

(statearr_44845[(10)] = inst_44640);

return statearr_44845;
})();
var statearr_44846_44912 = state_44779__$1;
(statearr_44846_44912[(2)] = null);

(statearr_44846_44912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (45))){
var state_44779__$1 = state_44779;
var statearr_44847_44913 = state_44779__$1;
(statearr_44847_44913[(2)] = null);

(statearr_44847_44913[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (26))){
var inst_44700 = (state_44779[(23)]);
var inst_44695 = (state_44779[(24)]);
var inst_44698 = (state_44779[(26)]);
var inst_44696 = (state_44779[(25)]);
var inst_44692 = (state_44779[(19)]);
var inst_44715 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44717 = (function (){var all_files = inst_44692;
var res_SINGLEQUOTE_ = inst_44695;
var res = inst_44696;
var files_not_loaded = inst_44698;
var dependencies_that_loaded = inst_44700;
return (function (p__44716){
var map__44848 = p__44716;
var map__44848__$1 = (((((!((map__44848 == null))))?(((((map__44848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44848):map__44848);
var namespace = cljs.core.get.call(null,map__44848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44848__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_44718 = cljs.core.map.call(null,inst_44717,inst_44696);
var inst_44719 = cljs.core.pr_str.call(null,inst_44718);
var inst_44720 = figwheel.client.utils.log.call(null,inst_44719);
var inst_44721 = (function (){var all_files = inst_44692;
var res_SINGLEQUOTE_ = inst_44695;
var res = inst_44696;
var files_not_loaded = inst_44698;
var dependencies_that_loaded = inst_44700;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_44722 = setTimeout(inst_44721,(10));
var state_44779__$1 = (function (){var statearr_44850 = state_44779;
(statearr_44850[(33)] = inst_44715);

(statearr_44850[(34)] = inst_44720);

return statearr_44850;
})();
var statearr_44851_44914 = state_44779__$1;
(statearr_44851_44914[(2)] = inst_44722);

(statearr_44851_44914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (16))){
var state_44779__$1 = state_44779;
var statearr_44852_44915 = state_44779__$1;
(statearr_44852_44915[(2)] = reload_dependents);

(statearr_44852_44915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (38))){
var inst_44732 = (state_44779[(16)]);
var inst_44750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44732);
var state_44779__$1 = state_44779;
var statearr_44853_44916 = state_44779__$1;
(statearr_44853_44916[(2)] = inst_44750);

(statearr_44853_44916[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (30))){
var state_44779__$1 = state_44779;
var statearr_44854_44917 = state_44779__$1;
(statearr_44854_44917[(2)] = null);

(statearr_44854_44917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (10))){
var inst_44652 = (state_44779[(22)]);
var inst_44654 = cljs.core.chunked_seq_QMARK_.call(null,inst_44652);
var state_44779__$1 = state_44779;
if(inst_44654){
var statearr_44855_44918 = state_44779__$1;
(statearr_44855_44918[(1)] = (13));

} else {
var statearr_44856_44919 = state_44779__$1;
(statearr_44856_44919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (18))){
var inst_44686 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
if(cljs.core.truth_(inst_44686)){
var statearr_44857_44920 = state_44779__$1;
(statearr_44857_44920[(1)] = (19));

} else {
var statearr_44858_44921 = state_44779__$1;
(statearr_44858_44921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (42))){
var state_44779__$1 = state_44779;
var statearr_44859_44922 = state_44779__$1;
(statearr_44859_44922[(2)] = null);

(statearr_44859_44922[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (37))){
var inst_44745 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44860_44923 = state_44779__$1;
(statearr_44860_44923[(2)] = inst_44745);

(statearr_44860_44923[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (8))){
var inst_44639 = (state_44779[(8)]);
var inst_44652 = (state_44779[(22)]);
var inst_44652__$1 = cljs.core.seq.call(null,inst_44639);
var state_44779__$1 = (function (){var statearr_44861 = state_44779;
(statearr_44861[(22)] = inst_44652__$1);

return statearr_44861;
})();
if(inst_44652__$1){
var statearr_44862_44924 = state_44779__$1;
(statearr_44862_44924[(1)] = (10));

} else {
var statearr_44863_44925 = state_44779__$1;
(statearr_44863_44925[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____0 = (function (){
var statearr_44864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44864[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__);

(statearr_44864[(1)] = (1));

return statearr_44864;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____1 = (function (state_44779){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_44779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e44865){if((e44865 instanceof Object)){
var ex__42086__auto__ = e44865;
var statearr_44866_44926 = state_44779;
(statearr_44866_44926[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44927 = state_44779;
state_44779 = G__44927;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__ = function(state_44779){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____1.call(this,state_44779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_44867 = f__42178__auto__.call(null);
(statearr_44867[(6)] = c__42177__auto__);

return statearr_44867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44930,link){
var map__44931 = p__44930;
var map__44931__$1 = (((((!((map__44931 == null))))?(((((map__44931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44931):map__44931);
var file = cljs.core.get.call(null,map__44931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__44928_SHARP_,p2__44929_SHARP_){
if(cljs.core._EQ_.call(null,p1__44928_SHARP_,p2__44929_SHARP_)){
return p1__44928_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44934){
var map__44935 = p__44934;
var map__44935__$1 = (((((!((map__44935 == null))))?(((((map__44935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44935):map__44935);
var match_length = cljs.core.get.call(null,map__44935__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44935__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44933_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44933_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44937_SHARP_,p2__44938_SHARP_){
return cljs.core.assoc.call(null,p1__44937_SHARP_,cljs.core.get.call(null,p2__44938_SHARP_,key),p2__44938_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_44939 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44939);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44939);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44940,p__44941){
var map__44942 = p__44940;
var map__44942__$1 = (((((!((map__44942 == null))))?(((((map__44942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44942):map__44942);
var on_cssload = cljs.core.get.call(null,map__44942__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44943 = p__44941;
var map__44943__$1 = (((((!((map__44943 == null))))?(((((map__44943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44943):map__44943);
var files_msg = map__44943__$1;
var files = cljs.core.get.call(null,map__44943__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1637933617776
