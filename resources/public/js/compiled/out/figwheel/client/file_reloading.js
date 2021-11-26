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
var G__35957 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__35957 == null)){
return null;
} else {
return goog.object.get(G__35957,"requires");
}
}):(function (path){
var G__35958 = goog.object.get(goog.dependencies_.requires,path);
if((G__35958 == null)){
return null;
} else {
return goog.object.getKeys(G__35958);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35959_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35959_SHARP_)));
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
var G__35960 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__35960__$1 = (((G__35960 == null))?null:goog.object.get(G__35960,"provides"));
if((G__35960__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__35960__$1);
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
var seq__35961 = cljs.core.seq.call(null,provides);
var chunk__35962 = null;
var count__35963 = (0);
var i__35964 = (0);
while(true){
if((i__35964 < count__35963)){
var prov = cljs.core._nth.call(null,chunk__35962,i__35964);
var seq__35973_35985 = cljs.core.seq.call(null,requires);
var chunk__35974_35986 = null;
var count__35975_35987 = (0);
var i__35976_35988 = (0);
while(true){
if((i__35976_35988 < count__35975_35987)){
var req_35989 = cljs.core._nth.call(null,chunk__35974_35986,i__35976_35988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35989,prov);


var G__35990 = seq__35973_35985;
var G__35991 = chunk__35974_35986;
var G__35992 = count__35975_35987;
var G__35993 = (i__35976_35988 + (1));
seq__35973_35985 = G__35990;
chunk__35974_35986 = G__35991;
count__35975_35987 = G__35992;
i__35976_35988 = G__35993;
continue;
} else {
var temp__5720__auto___35994 = cljs.core.seq.call(null,seq__35973_35985);
if(temp__5720__auto___35994){
var seq__35973_35995__$1 = temp__5720__auto___35994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35973_35995__$1)){
var c__4556__auto___35996 = cljs.core.chunk_first.call(null,seq__35973_35995__$1);
var G__35997 = cljs.core.chunk_rest.call(null,seq__35973_35995__$1);
var G__35998 = c__4556__auto___35996;
var G__35999 = cljs.core.count.call(null,c__4556__auto___35996);
var G__36000 = (0);
seq__35973_35985 = G__35997;
chunk__35974_35986 = G__35998;
count__35975_35987 = G__35999;
i__35976_35988 = G__36000;
continue;
} else {
var req_36001 = cljs.core.first.call(null,seq__35973_35995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36001,prov);


var G__36002 = cljs.core.next.call(null,seq__35973_35995__$1);
var G__36003 = null;
var G__36004 = (0);
var G__36005 = (0);
seq__35973_35985 = G__36002;
chunk__35974_35986 = G__36003;
count__35975_35987 = G__36004;
i__35976_35988 = G__36005;
continue;
}
} else {
}
}
break;
}


var G__36006 = seq__35961;
var G__36007 = chunk__35962;
var G__36008 = count__35963;
var G__36009 = (i__35964 + (1));
seq__35961 = G__36006;
chunk__35962 = G__36007;
count__35963 = G__36008;
i__35964 = G__36009;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35961);
if(temp__5720__auto__){
var seq__35961__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35961__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35961__$1);
var G__36010 = cljs.core.chunk_rest.call(null,seq__35961__$1);
var G__36011 = c__4556__auto__;
var G__36012 = cljs.core.count.call(null,c__4556__auto__);
var G__36013 = (0);
seq__35961 = G__36010;
chunk__35962 = G__36011;
count__35963 = G__36012;
i__35964 = G__36013;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35961__$1);
var seq__35977_36014 = cljs.core.seq.call(null,requires);
var chunk__35978_36015 = null;
var count__35979_36016 = (0);
var i__35980_36017 = (0);
while(true){
if((i__35980_36017 < count__35979_36016)){
var req_36018 = cljs.core._nth.call(null,chunk__35978_36015,i__35980_36017);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36018,prov);


var G__36019 = seq__35977_36014;
var G__36020 = chunk__35978_36015;
var G__36021 = count__35979_36016;
var G__36022 = (i__35980_36017 + (1));
seq__35977_36014 = G__36019;
chunk__35978_36015 = G__36020;
count__35979_36016 = G__36021;
i__35980_36017 = G__36022;
continue;
} else {
var temp__5720__auto___36023__$1 = cljs.core.seq.call(null,seq__35977_36014);
if(temp__5720__auto___36023__$1){
var seq__35977_36024__$1 = temp__5720__auto___36023__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35977_36024__$1)){
var c__4556__auto___36025 = cljs.core.chunk_first.call(null,seq__35977_36024__$1);
var G__36026 = cljs.core.chunk_rest.call(null,seq__35977_36024__$1);
var G__36027 = c__4556__auto___36025;
var G__36028 = cljs.core.count.call(null,c__4556__auto___36025);
var G__36029 = (0);
seq__35977_36014 = G__36026;
chunk__35978_36015 = G__36027;
count__35979_36016 = G__36028;
i__35980_36017 = G__36029;
continue;
} else {
var req_36030 = cljs.core.first.call(null,seq__35977_36024__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36030,prov);


var G__36031 = cljs.core.next.call(null,seq__35977_36024__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35977_36014 = G__36031;
chunk__35978_36015 = G__36032;
count__35979_36016 = G__36033;
i__35980_36017 = G__36034;
continue;
}
} else {
}
}
break;
}


var G__36035 = cljs.core.next.call(null,seq__35961__$1);
var G__36036 = null;
var G__36037 = (0);
var G__36038 = (0);
seq__35961 = G__36035;
chunk__35962 = G__36036;
count__35963 = G__36037;
i__35964 = G__36038;
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
var seq__35981 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__35982 = null;
var count__35983 = (0);
var i__35984 = (0);
while(true){
if((i__35984 < count__35983)){
var prov = cljs.core._nth.call(null,chunk__35982,i__35984);
goog.object.forEach(deps,((function (seq__35981,chunk__35982,count__35983,i__35984,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35981,chunk__35982,count__35983,i__35984,prov,requires))
);


var G__36039 = seq__35981;
var G__36040 = chunk__35982;
var G__36041 = count__35983;
var G__36042 = (i__35984 + (1));
seq__35981 = G__36039;
chunk__35982 = G__36040;
count__35983 = G__36041;
i__35984 = G__36042;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35981);
if(temp__5720__auto__){
var seq__35981__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35981__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35981__$1);
var G__36043 = cljs.core.chunk_rest.call(null,seq__35981__$1);
var G__36044 = c__4556__auto__;
var G__36045 = cljs.core.count.call(null,c__4556__auto__);
var G__36046 = (0);
seq__35981 = G__36043;
chunk__35982 = G__36044;
count__35983 = G__36045;
i__35984 = G__36046;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35981__$1);
goog.object.forEach(deps,((function (seq__35981,chunk__35982,count__35983,i__35984,prov,seq__35981__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35981,chunk__35982,count__35983,i__35984,prov,seq__35981__$1,temp__5720__auto__,requires))
);


var G__36047 = cljs.core.next.call(null,seq__35981__$1);
var G__36048 = null;
var G__36049 = (0);
var G__36050 = (0);
seq__35981 = G__36047;
chunk__35982 = G__36048;
count__35983 = G__36049;
i__35984 = G__36050;
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
return cljs.core.some.call(null,(function (p__36051){
var vec__36052 = p__36051;
var _ = cljs.core.nth.call(null,vec__36052,(0),null);
var v = cljs.core.nth.call(null,vec__36052,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__36055){
var vec__36056 = p__36055;
var k = cljs.core.nth.call(null,vec__36056,(0),null);
var v = cljs.core.nth.call(null,vec__36056,(1),null);
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

var seq__36068_36076 = cljs.core.seq.call(null,deps);
var chunk__36069_36077 = null;
var count__36070_36078 = (0);
var i__36071_36079 = (0);
while(true){
if((i__36071_36079 < count__36070_36078)){
var dep_36080 = cljs.core._nth.call(null,chunk__36069_36077,i__36071_36079);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36080;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36080));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36080,(depth + (1)),state);
} else {
}


var G__36081 = seq__36068_36076;
var G__36082 = chunk__36069_36077;
var G__36083 = count__36070_36078;
var G__36084 = (i__36071_36079 + (1));
seq__36068_36076 = G__36081;
chunk__36069_36077 = G__36082;
count__36070_36078 = G__36083;
i__36071_36079 = G__36084;
continue;
} else {
var temp__5720__auto___36085 = cljs.core.seq.call(null,seq__36068_36076);
if(temp__5720__auto___36085){
var seq__36068_36086__$1 = temp__5720__auto___36085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36068_36086__$1)){
var c__4556__auto___36087 = cljs.core.chunk_first.call(null,seq__36068_36086__$1);
var G__36088 = cljs.core.chunk_rest.call(null,seq__36068_36086__$1);
var G__36089 = c__4556__auto___36087;
var G__36090 = cljs.core.count.call(null,c__4556__auto___36087);
var G__36091 = (0);
seq__36068_36076 = G__36088;
chunk__36069_36077 = G__36089;
count__36070_36078 = G__36090;
i__36071_36079 = G__36091;
continue;
} else {
var dep_36092 = cljs.core.first.call(null,seq__36068_36086__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_36092;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36092));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36092,(depth + (1)),state);
} else {
}


var G__36093 = cljs.core.next.call(null,seq__36068_36086__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__36068_36076 = G__36093;
chunk__36069_36077 = G__36094;
count__36070_36078 = G__36095;
i__36071_36079 = G__36096;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36072){
var vec__36073 = p__36072;
var seq__36074 = cljs.core.seq.call(null,vec__36073);
var first__36075 = cljs.core.first.call(null,seq__36074);
var seq__36074__$1 = cljs.core.next.call(null,seq__36074);
var x = first__36075;
var xs = seq__36074__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__36059_SHARP_){
return clojure.set.difference.call(null,p1__36059_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__36097_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__36097_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36098 = cljs.core.seq.call(null,provides);
var chunk__36099 = null;
var count__36100 = (0);
var i__36101 = (0);
while(true){
if((i__36101 < count__36100)){
var prov = cljs.core._nth.call(null,chunk__36099,i__36101);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36110_36118 = cljs.core.seq.call(null,requires);
var chunk__36111_36119 = null;
var count__36112_36120 = (0);
var i__36113_36121 = (0);
while(true){
if((i__36113_36121 < count__36112_36120)){
var req_36122 = cljs.core._nth.call(null,chunk__36111_36119,i__36113_36121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36122,prov);


var G__36123 = seq__36110_36118;
var G__36124 = chunk__36111_36119;
var G__36125 = count__36112_36120;
var G__36126 = (i__36113_36121 + (1));
seq__36110_36118 = G__36123;
chunk__36111_36119 = G__36124;
count__36112_36120 = G__36125;
i__36113_36121 = G__36126;
continue;
} else {
var temp__5720__auto___36127 = cljs.core.seq.call(null,seq__36110_36118);
if(temp__5720__auto___36127){
var seq__36110_36128__$1 = temp__5720__auto___36127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36110_36128__$1)){
var c__4556__auto___36129 = cljs.core.chunk_first.call(null,seq__36110_36128__$1);
var G__36130 = cljs.core.chunk_rest.call(null,seq__36110_36128__$1);
var G__36131 = c__4556__auto___36129;
var G__36132 = cljs.core.count.call(null,c__4556__auto___36129);
var G__36133 = (0);
seq__36110_36118 = G__36130;
chunk__36111_36119 = G__36131;
count__36112_36120 = G__36132;
i__36113_36121 = G__36133;
continue;
} else {
var req_36134 = cljs.core.first.call(null,seq__36110_36128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36134,prov);


var G__36135 = cljs.core.next.call(null,seq__36110_36128__$1);
var G__36136 = null;
var G__36137 = (0);
var G__36138 = (0);
seq__36110_36118 = G__36135;
chunk__36111_36119 = G__36136;
count__36112_36120 = G__36137;
i__36113_36121 = G__36138;
continue;
}
} else {
}
}
break;
}


var G__36139 = seq__36098;
var G__36140 = chunk__36099;
var G__36141 = count__36100;
var G__36142 = (i__36101 + (1));
seq__36098 = G__36139;
chunk__36099 = G__36140;
count__36100 = G__36141;
i__36101 = G__36142;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36098);
if(temp__5720__auto__){
var seq__36098__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36098__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36098__$1);
var G__36143 = cljs.core.chunk_rest.call(null,seq__36098__$1);
var G__36144 = c__4556__auto__;
var G__36145 = cljs.core.count.call(null,c__4556__auto__);
var G__36146 = (0);
seq__36098 = G__36143;
chunk__36099 = G__36144;
count__36100 = G__36145;
i__36101 = G__36146;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36098__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36114_36147 = cljs.core.seq.call(null,requires);
var chunk__36115_36148 = null;
var count__36116_36149 = (0);
var i__36117_36150 = (0);
while(true){
if((i__36117_36150 < count__36116_36149)){
var req_36151 = cljs.core._nth.call(null,chunk__36115_36148,i__36117_36150);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36151,prov);


var G__36152 = seq__36114_36147;
var G__36153 = chunk__36115_36148;
var G__36154 = count__36116_36149;
var G__36155 = (i__36117_36150 + (1));
seq__36114_36147 = G__36152;
chunk__36115_36148 = G__36153;
count__36116_36149 = G__36154;
i__36117_36150 = G__36155;
continue;
} else {
var temp__5720__auto___36156__$1 = cljs.core.seq.call(null,seq__36114_36147);
if(temp__5720__auto___36156__$1){
var seq__36114_36157__$1 = temp__5720__auto___36156__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36114_36157__$1)){
var c__4556__auto___36158 = cljs.core.chunk_first.call(null,seq__36114_36157__$1);
var G__36159 = cljs.core.chunk_rest.call(null,seq__36114_36157__$1);
var G__36160 = c__4556__auto___36158;
var G__36161 = cljs.core.count.call(null,c__4556__auto___36158);
var G__36162 = (0);
seq__36114_36147 = G__36159;
chunk__36115_36148 = G__36160;
count__36116_36149 = G__36161;
i__36117_36150 = G__36162;
continue;
} else {
var req_36163 = cljs.core.first.call(null,seq__36114_36157__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36163,prov);


var G__36164 = cljs.core.next.call(null,seq__36114_36157__$1);
var G__36165 = null;
var G__36166 = (0);
var G__36167 = (0);
seq__36114_36147 = G__36164;
chunk__36115_36148 = G__36165;
count__36116_36149 = G__36166;
i__36117_36150 = G__36167;
continue;
}
} else {
}
}
break;
}


var G__36168 = cljs.core.next.call(null,seq__36098__$1);
var G__36169 = null;
var G__36170 = (0);
var G__36171 = (0);
seq__36098 = G__36168;
chunk__36099 = G__36169;
count__36100 = G__36170;
i__36101 = G__36171;
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
var seq__36172_36176 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36173_36177 = null;
var count__36174_36178 = (0);
var i__36175_36179 = (0);
while(true){
if((i__36175_36179 < count__36174_36178)){
var ns_36180 = cljs.core._nth.call(null,chunk__36173_36177,i__36175_36179);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36180);


var G__36181 = seq__36172_36176;
var G__36182 = chunk__36173_36177;
var G__36183 = count__36174_36178;
var G__36184 = (i__36175_36179 + (1));
seq__36172_36176 = G__36181;
chunk__36173_36177 = G__36182;
count__36174_36178 = G__36183;
i__36175_36179 = G__36184;
continue;
} else {
var temp__5720__auto___36185 = cljs.core.seq.call(null,seq__36172_36176);
if(temp__5720__auto___36185){
var seq__36172_36186__$1 = temp__5720__auto___36185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36172_36186__$1)){
var c__4556__auto___36187 = cljs.core.chunk_first.call(null,seq__36172_36186__$1);
var G__36188 = cljs.core.chunk_rest.call(null,seq__36172_36186__$1);
var G__36189 = c__4556__auto___36187;
var G__36190 = cljs.core.count.call(null,c__4556__auto___36187);
var G__36191 = (0);
seq__36172_36176 = G__36188;
chunk__36173_36177 = G__36189;
count__36174_36178 = G__36190;
i__36175_36179 = G__36191;
continue;
} else {
var ns_36192 = cljs.core.first.call(null,seq__36172_36186__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36192);


var G__36193 = cljs.core.next.call(null,seq__36172_36186__$1);
var G__36194 = null;
var G__36195 = (0);
var G__36196 = (0);
seq__36172_36176 = G__36193;
chunk__36173_36177 = G__36194;
count__36174_36178 = G__36195;
i__36175_36179 = G__36196;
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
var G__36197__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36198__i = 0, G__36198__a = new Array(arguments.length -  0);
while (G__36198__i < G__36198__a.length) {G__36198__a[G__36198__i] = arguments[G__36198__i + 0]; ++G__36198__i;}
  args = new cljs.core.IndexedSeq(G__36198__a,0,null);
} 
return G__36197__delegate.call(this,args);};
G__36197.cljs$lang$maxFixedArity = 0;
G__36197.cljs$lang$applyTo = (function (arglist__36199){
var args = cljs.core.seq(arglist__36199);
return G__36197__delegate(args);
});
G__36197.cljs$core$IFn$_invoke$arity$variadic = G__36197__delegate;
return G__36197;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36200_SHARP_,p2__36201_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36200_SHARP_)),p2__36201_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36202_SHARP_,p2__36203_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36202_SHARP_),p2__36203_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36204 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36204.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__36204.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__36204;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36205){if((e36205 instanceof Error)){
var e = e36205;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36205;

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
}catch (e36206){if((e36206 instanceof Error)){
var e = e36206;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36206;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36207 = cljs.core._EQ_;
var expr__36208 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36207.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36208))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36207.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36208))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36207.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36208))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36210,callback){
var map__36211 = p__36210;
var map__36211__$1 = (((((!((map__36211 == null))))?(((((map__36211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36211):map__36211);
var file_msg = map__36211__$1;
var request_url = cljs.core.get.call(null,map__36211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (7))){
var inst_36245 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36251_36277 = state_36249__$1;
(statearr_36251_36277[(2)] = inst_36245);

(statearr_36251_36277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (1))){
var state_36249__$1 = state_36249;
var statearr_36252_36278 = state_36249__$1;
(statearr_36252_36278[(2)] = null);

(statearr_36252_36278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (4))){
var inst_36215 = (state_36249[(7)]);
var inst_36215__$1 = (state_36249[(2)]);
var state_36249__$1 = (function (){var statearr_36253 = state_36249;
(statearr_36253[(7)] = inst_36215__$1);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36215__$1)){
var statearr_36254_36279 = state_36249__$1;
(statearr_36254_36279[(1)] = (5));

} else {
var statearr_36255_36280 = state_36249__$1;
(statearr_36255_36280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (15))){
var inst_36228 = (state_36249[(8)]);
var inst_36230 = (state_36249[(9)]);
var inst_36232 = inst_36230.call(null,inst_36228);
var state_36249__$1 = state_36249;
var statearr_36256_36281 = state_36249__$1;
(statearr_36256_36281[(2)] = inst_36232);

(statearr_36256_36281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (13))){
var inst_36239 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36257_36282 = state_36249__$1;
(statearr_36257_36282[(2)] = inst_36239);

(statearr_36257_36282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (6))){
var state_36249__$1 = state_36249;
var statearr_36258_36283 = state_36249__$1;
(statearr_36258_36283[(2)] = null);

(statearr_36258_36283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (17))){
var inst_36236 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36259_36284 = state_36249__$1;
(statearr_36259_36284[(2)] = inst_36236);

(statearr_36259_36284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (3))){
var inst_36247 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36249__$1,inst_36247);
} else {
if((state_val_36250 === (12))){
var state_36249__$1 = state_36249;
var statearr_36260_36285 = state_36249__$1;
(statearr_36260_36285[(2)] = null);

(statearr_36260_36285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (2))){
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36249__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36250 === (11))){
var inst_36220 = (state_36249[(10)]);
var inst_36226 = figwheel.client.file_reloading.blocking_load.call(null,inst_36220);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36249__$1,(14),inst_36226);
} else {
if((state_val_36250 === (9))){
var inst_36220 = (state_36249[(10)]);
var state_36249__$1 = state_36249;
if(cljs.core.truth_(inst_36220)){
var statearr_36261_36286 = state_36249__$1;
(statearr_36261_36286[(1)] = (11));

} else {
var statearr_36262_36287 = state_36249__$1;
(statearr_36262_36287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (5))){
var inst_36215 = (state_36249[(7)]);
var inst_36221 = (state_36249[(11)]);
var inst_36220 = cljs.core.nth.call(null,inst_36215,(0),null);
var inst_36221__$1 = cljs.core.nth.call(null,inst_36215,(1),null);
var state_36249__$1 = (function (){var statearr_36263 = state_36249;
(statearr_36263[(11)] = inst_36221__$1);

(statearr_36263[(10)] = inst_36220);

return statearr_36263;
})();
if(cljs.core.truth_(inst_36221__$1)){
var statearr_36264_36288 = state_36249__$1;
(statearr_36264_36288[(1)] = (8));

} else {
var statearr_36265_36289 = state_36249__$1;
(statearr_36265_36289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (14))){
var inst_36220 = (state_36249[(10)]);
var inst_36230 = (state_36249[(9)]);
var inst_36228 = (state_36249[(2)]);
var inst_36229 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36230__$1 = cljs.core.get.call(null,inst_36229,inst_36220);
var state_36249__$1 = (function (){var statearr_36266 = state_36249;
(statearr_36266[(8)] = inst_36228);

(statearr_36266[(9)] = inst_36230__$1);

return statearr_36266;
})();
if(cljs.core.truth_(inst_36230__$1)){
var statearr_36267_36290 = state_36249__$1;
(statearr_36267_36290[(1)] = (15));

} else {
var statearr_36268_36291 = state_36249__$1;
(statearr_36268_36291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (16))){
var inst_36228 = (state_36249[(8)]);
var inst_36234 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36228);
var state_36249__$1 = state_36249;
var statearr_36269_36292 = state_36249__$1;
(statearr_36269_36292[(2)] = inst_36234);

(statearr_36269_36292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (10))){
var inst_36241 = (state_36249[(2)]);
var state_36249__$1 = (function (){var statearr_36270 = state_36249;
(statearr_36270[(12)] = inst_36241);

return statearr_36270;
})();
var statearr_36271_36293 = state_36249__$1;
(statearr_36271_36293[(2)] = null);

(statearr_36271_36293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (8))){
var inst_36221 = (state_36249[(11)]);
var inst_36223 = eval(inst_36221);
var state_36249__$1 = state_36249;
var statearr_36272_36294 = state_36249__$1;
(statearr_36272_36294[(2)] = inst_36223);

(statearr_36272_36294[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__35103__auto__ = null;
var figwheel$client$file_reloading$state_machine__35103__auto____0 = (function (){
var statearr_36273 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36273[(0)] = figwheel$client$file_reloading$state_machine__35103__auto__);

(statearr_36273[(1)] = (1));

return statearr_36273;
});
var figwheel$client$file_reloading$state_machine__35103__auto____1 = (function (state_36249){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_36249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e36274){if((e36274 instanceof Object)){
var ex__35106__auto__ = e36274;
var statearr_36275_36295 = state_36249;
(statearr_36275_36295[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36296 = state_36249;
state_36249 = G__36296;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35103__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35103__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35103__auto____0;
figwheel$client$file_reloading$state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35103__auto____1;
return figwheel$client$file_reloading$state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_36276 = f__35126__auto__.call(null);
(statearr_36276[(6)] = c__35125__auto__);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));

return c__35125__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36298 = arguments.length;
switch (G__36298) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36300,callback){
var map__36301 = p__36300;
var map__36301__$1 = (((((!((map__36301 == null))))?(((((map__36301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36301):map__36301);
var file_msg = map__36301__$1;
var namespace = cljs.core.get.call(null,map__36301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36303){
var map__36304 = p__36303;
var map__36304__$1 = (((((!((map__36304 == null))))?(((((map__36304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36304):map__36304);
var file_msg = map__36304__$1;
var namespace = cljs.core.get.call(null,map__36304__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36306){
var map__36307 = p__36306;
var map__36307__$1 = (((((!((map__36307 == null))))?(((((map__36307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36307):map__36307);
var file_msg = map__36307__$1;
var namespace = cljs.core.get.call(null,map__36307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36309,callback){
var map__36310 = p__36309;
var map__36310__$1 = (((((!((map__36310 == null))))?(((((map__36310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36310):map__36310);
var file_msg = map__36310__$1;
var request_url = cljs.core.get.call(null,map__36310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35125__auto___36360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_36345){
var state_val_36346 = (state_36345[(1)]);
if((state_val_36346 === (1))){
var inst_36319 = cljs.core.seq.call(null,files);
var inst_36320 = cljs.core.first.call(null,inst_36319);
var inst_36321 = cljs.core.next.call(null,inst_36319);
var inst_36322 = files;
var state_36345__$1 = (function (){var statearr_36347 = state_36345;
(statearr_36347[(7)] = inst_36320);

(statearr_36347[(8)] = inst_36322);

(statearr_36347[(9)] = inst_36321);

return statearr_36347;
})();
var statearr_36348_36361 = state_36345__$1;
(statearr_36348_36361[(2)] = null);

(statearr_36348_36361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (2))){
var inst_36328 = (state_36345[(10)]);
var inst_36322 = (state_36345[(8)]);
var inst_36327 = cljs.core.seq.call(null,inst_36322);
var inst_36328__$1 = cljs.core.first.call(null,inst_36327);
var inst_36329 = cljs.core.next.call(null,inst_36327);
var inst_36330 = (inst_36328__$1 == null);
var inst_36331 = cljs.core.not.call(null,inst_36330);
var state_36345__$1 = (function (){var statearr_36349 = state_36345;
(statearr_36349[(10)] = inst_36328__$1);

(statearr_36349[(11)] = inst_36329);

return statearr_36349;
})();
if(inst_36331){
var statearr_36350_36362 = state_36345__$1;
(statearr_36350_36362[(1)] = (4));

} else {
var statearr_36351_36363 = state_36345__$1;
(statearr_36351_36363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (3))){
var inst_36343 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36345__$1,inst_36343);
} else {
if((state_val_36346 === (4))){
var inst_36328 = (state_36345[(10)]);
var inst_36333 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36328);
var state_36345__$1 = state_36345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36345__$1,(7),inst_36333);
} else {
if((state_val_36346 === (5))){
var inst_36339 = cljs.core.async.close_BANG_.call(null,out);
var state_36345__$1 = state_36345;
var statearr_36352_36364 = state_36345__$1;
(statearr_36352_36364[(2)] = inst_36339);

(statearr_36352_36364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (6))){
var inst_36341 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
var statearr_36353_36365 = state_36345__$1;
(statearr_36353_36365[(2)] = inst_36341);

(statearr_36353_36365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (7))){
var inst_36329 = (state_36345[(11)]);
var inst_36335 = (state_36345[(2)]);
var inst_36336 = cljs.core.async.put_BANG_.call(null,out,inst_36335);
var inst_36322 = inst_36329;
var state_36345__$1 = (function (){var statearr_36354 = state_36345;
(statearr_36354[(8)] = inst_36322);

(statearr_36354[(12)] = inst_36336);

return statearr_36354;
})();
var statearr_36355_36366 = state_36345__$1;
(statearr_36355_36366[(2)] = null);

(statearr_36355_36366[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____0 = (function (){
var statearr_36356 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36356[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__);

(statearr_36356[(1)] = (1));

return statearr_36356;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____1 = (function (state_36345){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_36345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e36357){if((e36357 instanceof Object)){
var ex__35106__auto__ = e36357;
var statearr_36358_36367 = state_36345;
(statearr_36358_36367[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_36345;
state_36345 = G__36368;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__ = function(state_36345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____1.call(this,state_36345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_36359 = f__35126__auto__.call(null);
(statearr_36359[(6)] = c__35125__auto___36360);

return statearr_36359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36369,opts){
var map__36370 = p__36369;
var map__36370__$1 = (((((!((map__36370 == null))))?(((((map__36370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36370):map__36370);
var eval_body = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36372){var e = e36372;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36373_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36373_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36374){
var vec__36375 = p__36374;
var k = cljs.core.nth.call(null,vec__36375,(0),null);
var v = cljs.core.nth.call(null,vec__36375,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36378){
var vec__36379 = p__36378;
var k = cljs.core.nth.call(null,vec__36379,(0),null);
var v = cljs.core.nth.call(null,vec__36379,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36385,p__36386){
var map__36387 = p__36385;
var map__36387__$1 = (((((!((map__36387 == null))))?(((((map__36387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36387):map__36387);
var opts = map__36387__$1;
var before_jsload = cljs.core.get.call(null,map__36387__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36387__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36387__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36388 = p__36386;
var map__36388__$1 = (((((!((map__36388 == null))))?(((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36388):map__36388);
var msg = map__36388__$1;
var files = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_36542){
var state_val_36543 = (state_36542[(1)]);
if((state_val_36543 === (7))){
var inst_36403 = (state_36542[(7)]);
var inst_36405 = (state_36542[(8)]);
var inst_36404 = (state_36542[(9)]);
var inst_36402 = (state_36542[(10)]);
var inst_36410 = cljs.core._nth.call(null,inst_36403,inst_36405);
var inst_36411 = figwheel.client.file_reloading.eval_body.call(null,inst_36410,opts);
var inst_36412 = (inst_36405 + (1));
var tmp36544 = inst_36403;
var tmp36545 = inst_36404;
var tmp36546 = inst_36402;
var inst_36402__$1 = tmp36546;
var inst_36403__$1 = tmp36544;
var inst_36404__$1 = tmp36545;
var inst_36405__$1 = inst_36412;
var state_36542__$1 = (function (){var statearr_36547 = state_36542;
(statearr_36547[(7)] = inst_36403__$1);

(statearr_36547[(8)] = inst_36405__$1);

(statearr_36547[(11)] = inst_36411);

(statearr_36547[(9)] = inst_36404__$1);

(statearr_36547[(10)] = inst_36402__$1);

return statearr_36547;
})();
var statearr_36548_36631 = state_36542__$1;
(statearr_36548_36631[(2)] = null);

(statearr_36548_36631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (20))){
var inst_36445 = (state_36542[(12)]);
var inst_36453 = figwheel.client.file_reloading.sort_files.call(null,inst_36445);
var state_36542__$1 = state_36542;
var statearr_36549_36632 = state_36542__$1;
(statearr_36549_36632[(2)] = inst_36453);

(statearr_36549_36632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (27))){
var state_36542__$1 = state_36542;
var statearr_36550_36633 = state_36542__$1;
(statearr_36550_36633[(2)] = null);

(statearr_36550_36633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (1))){
var inst_36394 = (state_36542[(13)]);
var inst_36391 = before_jsload.call(null,files);
var inst_36392 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36393 = (function (){return (function (p1__36382_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36382_SHARP_);
});
})();
var inst_36394__$1 = cljs.core.filter.call(null,inst_36393,files);
var inst_36395 = cljs.core.not_empty.call(null,inst_36394__$1);
var state_36542__$1 = (function (){var statearr_36551 = state_36542;
(statearr_36551[(13)] = inst_36394__$1);

(statearr_36551[(14)] = inst_36392);

(statearr_36551[(15)] = inst_36391);

return statearr_36551;
})();
if(cljs.core.truth_(inst_36395)){
var statearr_36552_36634 = state_36542__$1;
(statearr_36552_36634[(1)] = (2));

} else {
var statearr_36553_36635 = state_36542__$1;
(statearr_36553_36635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (24))){
var state_36542__$1 = state_36542;
var statearr_36554_36636 = state_36542__$1;
(statearr_36554_36636[(2)] = null);

(statearr_36554_36636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (39))){
var inst_36495 = (state_36542[(16)]);
var state_36542__$1 = state_36542;
var statearr_36555_36637 = state_36542__$1;
(statearr_36555_36637[(2)] = inst_36495);

(statearr_36555_36637[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (46))){
var inst_36537 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36556_36638 = state_36542__$1;
(statearr_36556_36638[(2)] = inst_36537);

(statearr_36556_36638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (4))){
var inst_36439 = (state_36542[(2)]);
var inst_36440 = cljs.core.List.EMPTY;
var inst_36441 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36440);
var inst_36442 = (function (){return (function (p1__36383_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36383_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36383_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36383_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_36443 = cljs.core.filter.call(null,inst_36442,files);
var inst_36444 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36445 = cljs.core.concat.call(null,inst_36443,inst_36444);
var state_36542__$1 = (function (){var statearr_36557 = state_36542;
(statearr_36557[(12)] = inst_36445);

(statearr_36557[(17)] = inst_36439);

(statearr_36557[(18)] = inst_36441);

return statearr_36557;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36558_36639 = state_36542__$1;
(statearr_36558_36639[(1)] = (16));

} else {
var statearr_36559_36640 = state_36542__$1;
(statearr_36559_36640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (15))){
var inst_36429 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36560_36641 = state_36542__$1;
(statearr_36560_36641[(2)] = inst_36429);

(statearr_36560_36641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (21))){
var inst_36455 = (state_36542[(19)]);
var inst_36455__$1 = (state_36542[(2)]);
var inst_36456 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36455__$1);
var state_36542__$1 = (function (){var statearr_36561 = state_36542;
(statearr_36561[(19)] = inst_36455__$1);

return statearr_36561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36542__$1,(22),inst_36456);
} else {
if((state_val_36543 === (31))){
var inst_36540 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36542__$1,inst_36540);
} else {
if((state_val_36543 === (32))){
var inst_36495 = (state_36542[(16)]);
var inst_36500 = inst_36495.cljs$lang$protocol_mask$partition0$;
var inst_36501 = (inst_36500 & (64));
var inst_36502 = inst_36495.cljs$core$ISeq$;
var inst_36503 = (cljs.core.PROTOCOL_SENTINEL === inst_36502);
var inst_36504 = ((inst_36501) || (inst_36503));
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36504)){
var statearr_36562_36642 = state_36542__$1;
(statearr_36562_36642[(1)] = (35));

} else {
var statearr_36563_36643 = state_36542__$1;
(statearr_36563_36643[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (40))){
var inst_36517 = (state_36542[(20)]);
var inst_36516 = (state_36542[(2)]);
var inst_36517__$1 = cljs.core.get.call(null,inst_36516,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36518 = cljs.core.get.call(null,inst_36516,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36519 = cljs.core.not_empty.call(null,inst_36517__$1);
var state_36542__$1 = (function (){var statearr_36564 = state_36542;
(statearr_36564[(21)] = inst_36518);

(statearr_36564[(20)] = inst_36517__$1);

return statearr_36564;
})();
if(cljs.core.truth_(inst_36519)){
var statearr_36565_36644 = state_36542__$1;
(statearr_36565_36644[(1)] = (41));

} else {
var statearr_36566_36645 = state_36542__$1;
(statearr_36566_36645[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (33))){
var state_36542__$1 = state_36542;
var statearr_36567_36646 = state_36542__$1;
(statearr_36567_36646[(2)] = false);

(statearr_36567_36646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (13))){
var inst_36415 = (state_36542[(22)]);
var inst_36419 = cljs.core.chunk_first.call(null,inst_36415);
var inst_36420 = cljs.core.chunk_rest.call(null,inst_36415);
var inst_36421 = cljs.core.count.call(null,inst_36419);
var inst_36402 = inst_36420;
var inst_36403 = inst_36419;
var inst_36404 = inst_36421;
var inst_36405 = (0);
var state_36542__$1 = (function (){var statearr_36568 = state_36542;
(statearr_36568[(7)] = inst_36403);

(statearr_36568[(8)] = inst_36405);

(statearr_36568[(9)] = inst_36404);

(statearr_36568[(10)] = inst_36402);

return statearr_36568;
})();
var statearr_36569_36647 = state_36542__$1;
(statearr_36569_36647[(2)] = null);

(statearr_36569_36647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (22))){
var inst_36455 = (state_36542[(19)]);
var inst_36463 = (state_36542[(23)]);
var inst_36459 = (state_36542[(24)]);
var inst_36458 = (state_36542[(25)]);
var inst_36458__$1 = (state_36542[(2)]);
var inst_36459__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36458__$1);
var inst_36460 = (function (){var all_files = inst_36455;
var res_SINGLEQUOTE_ = inst_36458__$1;
var res = inst_36459__$1;
return (function (p1__36384_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36384_SHARP_));
});
})();
var inst_36461 = cljs.core.filter.call(null,inst_36460,inst_36458__$1);
var inst_36462 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36463__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36462);
var inst_36464 = cljs.core.not_empty.call(null,inst_36463__$1);
var state_36542__$1 = (function (){var statearr_36570 = state_36542;
(statearr_36570[(26)] = inst_36461);

(statearr_36570[(23)] = inst_36463__$1);

(statearr_36570[(24)] = inst_36459__$1);

(statearr_36570[(25)] = inst_36458__$1);

return statearr_36570;
})();
if(cljs.core.truth_(inst_36464)){
var statearr_36571_36648 = state_36542__$1;
(statearr_36571_36648[(1)] = (23));

} else {
var statearr_36572_36649 = state_36542__$1;
(statearr_36572_36649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (36))){
var state_36542__$1 = state_36542;
var statearr_36573_36650 = state_36542__$1;
(statearr_36573_36650[(2)] = false);

(statearr_36573_36650[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (41))){
var inst_36517 = (state_36542[(20)]);
var inst_36521 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36522 = cljs.core.map.call(null,inst_36521,inst_36517);
var inst_36523 = cljs.core.pr_str.call(null,inst_36522);
var inst_36524 = ["figwheel-no-load meta-data: ",inst_36523].join('');
var inst_36525 = figwheel.client.utils.log.call(null,inst_36524);
var state_36542__$1 = state_36542;
var statearr_36574_36651 = state_36542__$1;
(statearr_36574_36651[(2)] = inst_36525);

(statearr_36574_36651[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (43))){
var inst_36518 = (state_36542[(21)]);
var inst_36528 = (state_36542[(2)]);
var inst_36529 = cljs.core.not_empty.call(null,inst_36518);
var state_36542__$1 = (function (){var statearr_36575 = state_36542;
(statearr_36575[(27)] = inst_36528);

return statearr_36575;
})();
if(cljs.core.truth_(inst_36529)){
var statearr_36576_36652 = state_36542__$1;
(statearr_36576_36652[(1)] = (44));

} else {
var statearr_36577_36653 = state_36542__$1;
(statearr_36577_36653[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (29))){
var inst_36461 = (state_36542[(26)]);
var inst_36455 = (state_36542[(19)]);
var inst_36463 = (state_36542[(23)]);
var inst_36495 = (state_36542[(16)]);
var inst_36459 = (state_36542[(24)]);
var inst_36458 = (state_36542[(25)]);
var inst_36491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36494 = (function (){var all_files = inst_36455;
var res_SINGLEQUOTE_ = inst_36458;
var res = inst_36459;
var files_not_loaded = inst_36461;
var dependencies_that_loaded = inst_36463;
return (function (p__36493){
var map__36578 = p__36493;
var map__36578__$1 = (((((!((map__36578 == null))))?(((((map__36578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36578):map__36578);
var namespace = cljs.core.get.call(null,map__36578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_36495__$1 = cljs.core.group_by.call(null,inst_36494,inst_36461);
var inst_36497 = (inst_36495__$1 == null);
var inst_36498 = cljs.core.not.call(null,inst_36497);
var state_36542__$1 = (function (){var statearr_36580 = state_36542;
(statearr_36580[(28)] = inst_36491);

(statearr_36580[(16)] = inst_36495__$1);

return statearr_36580;
})();
if(inst_36498){
var statearr_36581_36654 = state_36542__$1;
(statearr_36581_36654[(1)] = (32));

} else {
var statearr_36582_36655 = state_36542__$1;
(statearr_36582_36655[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (44))){
var inst_36518 = (state_36542[(21)]);
var inst_36531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36518);
var inst_36532 = cljs.core.pr_str.call(null,inst_36531);
var inst_36533 = ["not required: ",inst_36532].join('');
var inst_36534 = figwheel.client.utils.log.call(null,inst_36533);
var state_36542__$1 = state_36542;
var statearr_36583_36656 = state_36542__$1;
(statearr_36583_36656[(2)] = inst_36534);

(statearr_36583_36656[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (6))){
var inst_36436 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36584_36657 = state_36542__$1;
(statearr_36584_36657[(2)] = inst_36436);

(statearr_36584_36657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (28))){
var inst_36461 = (state_36542[(26)]);
var inst_36488 = (state_36542[(2)]);
var inst_36489 = cljs.core.not_empty.call(null,inst_36461);
var state_36542__$1 = (function (){var statearr_36585 = state_36542;
(statearr_36585[(29)] = inst_36488);

return statearr_36585;
})();
if(cljs.core.truth_(inst_36489)){
var statearr_36586_36658 = state_36542__$1;
(statearr_36586_36658[(1)] = (29));

} else {
var statearr_36587_36659 = state_36542__$1;
(statearr_36587_36659[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (25))){
var inst_36459 = (state_36542[(24)]);
var inst_36475 = (state_36542[(2)]);
var inst_36476 = cljs.core.not_empty.call(null,inst_36459);
var state_36542__$1 = (function (){var statearr_36588 = state_36542;
(statearr_36588[(30)] = inst_36475);

return statearr_36588;
})();
if(cljs.core.truth_(inst_36476)){
var statearr_36589_36660 = state_36542__$1;
(statearr_36589_36660[(1)] = (26));

} else {
var statearr_36590_36661 = state_36542__$1;
(statearr_36590_36661[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (34))){
var inst_36511 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36511)){
var statearr_36591_36662 = state_36542__$1;
(statearr_36591_36662[(1)] = (38));

} else {
var statearr_36592_36663 = state_36542__$1;
(statearr_36592_36663[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (17))){
var state_36542__$1 = state_36542;
var statearr_36593_36664 = state_36542__$1;
(statearr_36593_36664[(2)] = recompile_dependents);

(statearr_36593_36664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (3))){
var state_36542__$1 = state_36542;
var statearr_36594_36665 = state_36542__$1;
(statearr_36594_36665[(2)] = null);

(statearr_36594_36665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (12))){
var inst_36432 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36595_36666 = state_36542__$1;
(statearr_36595_36666[(2)] = inst_36432);

(statearr_36595_36666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (2))){
var inst_36394 = (state_36542[(13)]);
var inst_36401 = cljs.core.seq.call(null,inst_36394);
var inst_36402 = inst_36401;
var inst_36403 = null;
var inst_36404 = (0);
var inst_36405 = (0);
var state_36542__$1 = (function (){var statearr_36596 = state_36542;
(statearr_36596[(7)] = inst_36403);

(statearr_36596[(8)] = inst_36405);

(statearr_36596[(9)] = inst_36404);

(statearr_36596[(10)] = inst_36402);

return statearr_36596;
})();
var statearr_36597_36667 = state_36542__$1;
(statearr_36597_36667[(2)] = null);

(statearr_36597_36667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (23))){
var inst_36461 = (state_36542[(26)]);
var inst_36455 = (state_36542[(19)]);
var inst_36463 = (state_36542[(23)]);
var inst_36459 = (state_36542[(24)]);
var inst_36458 = (state_36542[(25)]);
var inst_36466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36468 = (function (){var all_files = inst_36455;
var res_SINGLEQUOTE_ = inst_36458;
var res = inst_36459;
var files_not_loaded = inst_36461;
var dependencies_that_loaded = inst_36463;
return (function (p__36467){
var map__36598 = p__36467;
var map__36598__$1 = (((((!((map__36598 == null))))?(((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36598):map__36598);
var request_url = cljs.core.get.call(null,map__36598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_36469 = cljs.core.reverse.call(null,inst_36463);
var inst_36470 = cljs.core.map.call(null,inst_36468,inst_36469);
var inst_36471 = cljs.core.pr_str.call(null,inst_36470);
var inst_36472 = figwheel.client.utils.log.call(null,inst_36471);
var state_36542__$1 = (function (){var statearr_36600 = state_36542;
(statearr_36600[(31)] = inst_36466);

return statearr_36600;
})();
var statearr_36601_36668 = state_36542__$1;
(statearr_36601_36668[(2)] = inst_36472);

(statearr_36601_36668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (35))){
var state_36542__$1 = state_36542;
var statearr_36602_36669 = state_36542__$1;
(statearr_36602_36669[(2)] = true);

(statearr_36602_36669[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (19))){
var inst_36445 = (state_36542[(12)]);
var inst_36451 = figwheel.client.file_reloading.expand_files.call(null,inst_36445);
var state_36542__$1 = state_36542;
var statearr_36603_36670 = state_36542__$1;
(statearr_36603_36670[(2)] = inst_36451);

(statearr_36603_36670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (11))){
var state_36542__$1 = state_36542;
var statearr_36604_36671 = state_36542__$1;
(statearr_36604_36671[(2)] = null);

(statearr_36604_36671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (9))){
var inst_36434 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36605_36672 = state_36542__$1;
(statearr_36605_36672[(2)] = inst_36434);

(statearr_36605_36672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (5))){
var inst_36405 = (state_36542[(8)]);
var inst_36404 = (state_36542[(9)]);
var inst_36407 = (inst_36405 < inst_36404);
var inst_36408 = inst_36407;
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36408)){
var statearr_36606_36673 = state_36542__$1;
(statearr_36606_36673[(1)] = (7));

} else {
var statearr_36607_36674 = state_36542__$1;
(statearr_36607_36674[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (14))){
var inst_36415 = (state_36542[(22)]);
var inst_36424 = cljs.core.first.call(null,inst_36415);
var inst_36425 = figwheel.client.file_reloading.eval_body.call(null,inst_36424,opts);
var inst_36426 = cljs.core.next.call(null,inst_36415);
var inst_36402 = inst_36426;
var inst_36403 = null;
var inst_36404 = (0);
var inst_36405 = (0);
var state_36542__$1 = (function (){var statearr_36608 = state_36542;
(statearr_36608[(32)] = inst_36425);

(statearr_36608[(7)] = inst_36403);

(statearr_36608[(8)] = inst_36405);

(statearr_36608[(9)] = inst_36404);

(statearr_36608[(10)] = inst_36402);

return statearr_36608;
})();
var statearr_36609_36675 = state_36542__$1;
(statearr_36609_36675[(2)] = null);

(statearr_36609_36675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (45))){
var state_36542__$1 = state_36542;
var statearr_36610_36676 = state_36542__$1;
(statearr_36610_36676[(2)] = null);

(statearr_36610_36676[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (26))){
var inst_36461 = (state_36542[(26)]);
var inst_36455 = (state_36542[(19)]);
var inst_36463 = (state_36542[(23)]);
var inst_36459 = (state_36542[(24)]);
var inst_36458 = (state_36542[(25)]);
var inst_36478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36480 = (function (){var all_files = inst_36455;
var res_SINGLEQUOTE_ = inst_36458;
var res = inst_36459;
var files_not_loaded = inst_36461;
var dependencies_that_loaded = inst_36463;
return (function (p__36479){
var map__36611 = p__36479;
var map__36611__$1 = (((((!((map__36611 == null))))?(((((map__36611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36611):map__36611);
var namespace = cljs.core.get.call(null,map__36611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_36481 = cljs.core.map.call(null,inst_36480,inst_36459);
var inst_36482 = cljs.core.pr_str.call(null,inst_36481);
var inst_36483 = figwheel.client.utils.log.call(null,inst_36482);
var inst_36484 = (function (){var all_files = inst_36455;
var res_SINGLEQUOTE_ = inst_36458;
var res = inst_36459;
var files_not_loaded = inst_36461;
var dependencies_that_loaded = inst_36463;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_36485 = setTimeout(inst_36484,(10));
var state_36542__$1 = (function (){var statearr_36613 = state_36542;
(statearr_36613[(33)] = inst_36478);

(statearr_36613[(34)] = inst_36483);

return statearr_36613;
})();
var statearr_36614_36677 = state_36542__$1;
(statearr_36614_36677[(2)] = inst_36485);

(statearr_36614_36677[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (16))){
var state_36542__$1 = state_36542;
var statearr_36615_36678 = state_36542__$1;
(statearr_36615_36678[(2)] = reload_dependents);

(statearr_36615_36678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (38))){
var inst_36495 = (state_36542[(16)]);
var inst_36513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36495);
var state_36542__$1 = state_36542;
var statearr_36616_36679 = state_36542__$1;
(statearr_36616_36679[(2)] = inst_36513);

(statearr_36616_36679[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (30))){
var state_36542__$1 = state_36542;
var statearr_36617_36680 = state_36542__$1;
(statearr_36617_36680[(2)] = null);

(statearr_36617_36680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (10))){
var inst_36415 = (state_36542[(22)]);
var inst_36417 = cljs.core.chunked_seq_QMARK_.call(null,inst_36415);
var state_36542__$1 = state_36542;
if(inst_36417){
var statearr_36618_36681 = state_36542__$1;
(statearr_36618_36681[(1)] = (13));

} else {
var statearr_36619_36682 = state_36542__$1;
(statearr_36619_36682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (18))){
var inst_36449 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36449)){
var statearr_36620_36683 = state_36542__$1;
(statearr_36620_36683[(1)] = (19));

} else {
var statearr_36621_36684 = state_36542__$1;
(statearr_36621_36684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (42))){
var state_36542__$1 = state_36542;
var statearr_36622_36685 = state_36542__$1;
(statearr_36622_36685[(2)] = null);

(statearr_36622_36685[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (37))){
var inst_36508 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36623_36686 = state_36542__$1;
(statearr_36623_36686[(2)] = inst_36508);

(statearr_36623_36686[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (8))){
var inst_36415 = (state_36542[(22)]);
var inst_36402 = (state_36542[(10)]);
var inst_36415__$1 = cljs.core.seq.call(null,inst_36402);
var state_36542__$1 = (function (){var statearr_36624 = state_36542;
(statearr_36624[(22)] = inst_36415__$1);

return statearr_36624;
})();
if(inst_36415__$1){
var statearr_36625_36687 = state_36542__$1;
(statearr_36625_36687[(1)] = (10));

} else {
var statearr_36626_36688 = state_36542__$1;
(statearr_36626_36688[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____0 = (function (){
var statearr_36627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36627[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__);

(statearr_36627[(1)] = (1));

return statearr_36627;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____1 = (function (state_36542){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_36542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e36628){if((e36628 instanceof Object)){
var ex__35106__auto__ = e36628;
var statearr_36629_36689 = state_36542;
(statearr_36629_36689[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36690 = state_36542;
state_36542 = G__36690;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__ = function(state_36542){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____1.call(this,state_36542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_36630 = f__35126__auto__.call(null);
(statearr_36630[(6)] = c__35125__auto__);

return statearr_36630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));

return c__35125__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36693,link){
var map__36694 = p__36693;
var map__36694__$1 = (((((!((map__36694 == null))))?(((((map__36694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36694):map__36694);
var file = cljs.core.get.call(null,map__36694__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__36691_SHARP_,p2__36692_SHARP_){
if(cljs.core._EQ_.call(null,p1__36691_SHARP_,p2__36692_SHARP_)){
return p1__36691_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36697){
var map__36698 = p__36697;
var map__36698__$1 = (((((!((map__36698 == null))))?(((((map__36698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36698):map__36698);
var match_length = cljs.core.get.call(null,map__36698__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36698__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36696_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36696_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36700_SHARP_,p2__36701_SHARP_){
return cljs.core.assoc.call(null,p1__36700_SHARP_,cljs.core.get.call(null,p2__36701_SHARP_,key),p2__36701_SHARP_);
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
var loaded_f_datas_36702 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36702);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36702);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36703,p__36704){
var map__36705 = p__36703;
var map__36705__$1 = (((((!((map__36705 == null))))?(((((map__36705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36705):map__36705);
var on_cssload = cljs.core.get.call(null,map__36705__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36706 = p__36704;
var map__36706__$1 = (((((!((map__36706 == null))))?(((((map__36706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36706):map__36706);
var files_msg = map__36706__$1;
var files = cljs.core.get.call(null,map__36706__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1637270085355
