// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45810){
var map__45811 = p__45810;
var map__45811__$1 = (((((!((map__45811 == null))))?(((((map__45811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45811):map__45811);
var m = map__45811__$1;
var n = cljs.core.get.call(null,map__45811__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45813_45845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45814_45846 = null;
var count__45815_45847 = (0);
var i__45816_45848 = (0);
while(true){
if((i__45816_45848 < count__45815_45847)){
var f_45849 = cljs.core._nth.call(null,chunk__45814_45846,i__45816_45848);
cljs.core.println.call(null,"  ",f_45849);


var G__45850 = seq__45813_45845;
var G__45851 = chunk__45814_45846;
var G__45852 = count__45815_45847;
var G__45853 = (i__45816_45848 + (1));
seq__45813_45845 = G__45850;
chunk__45814_45846 = G__45851;
count__45815_45847 = G__45852;
i__45816_45848 = G__45853;
continue;
} else {
var temp__5720__auto___45854 = cljs.core.seq.call(null,seq__45813_45845);
if(temp__5720__auto___45854){
var seq__45813_45855__$1 = temp__5720__auto___45854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45813_45855__$1)){
var c__4556__auto___45856 = cljs.core.chunk_first.call(null,seq__45813_45855__$1);
var G__45857 = cljs.core.chunk_rest.call(null,seq__45813_45855__$1);
var G__45858 = c__4556__auto___45856;
var G__45859 = cljs.core.count.call(null,c__4556__auto___45856);
var G__45860 = (0);
seq__45813_45845 = G__45857;
chunk__45814_45846 = G__45858;
count__45815_45847 = G__45859;
i__45816_45848 = G__45860;
continue;
} else {
var f_45861 = cljs.core.first.call(null,seq__45813_45855__$1);
cljs.core.println.call(null,"  ",f_45861);


var G__45862 = cljs.core.next.call(null,seq__45813_45855__$1);
var G__45863 = null;
var G__45864 = (0);
var G__45865 = (0);
seq__45813_45845 = G__45862;
chunk__45814_45846 = G__45863;
count__45815_45847 = G__45864;
i__45816_45848 = G__45865;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45866);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45866)))?cljs.core.second.call(null,arglists_45866):arglists_45866));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45817_45867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45818_45868 = null;
var count__45819_45869 = (0);
var i__45820_45870 = (0);
while(true){
if((i__45820_45870 < count__45819_45869)){
var vec__45831_45871 = cljs.core._nth.call(null,chunk__45818_45868,i__45820_45870);
var name_45872 = cljs.core.nth.call(null,vec__45831_45871,(0),null);
var map__45834_45873 = cljs.core.nth.call(null,vec__45831_45871,(1),null);
var map__45834_45874__$1 = (((((!((map__45834_45873 == null))))?(((((map__45834_45873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45834_45873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45834_45873):map__45834_45873);
var doc_45875 = cljs.core.get.call(null,map__45834_45874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45876 = cljs.core.get.call(null,map__45834_45874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45872);

cljs.core.println.call(null," ",arglists_45876);

if(cljs.core.truth_(doc_45875)){
cljs.core.println.call(null," ",doc_45875);
} else {
}


var G__45877 = seq__45817_45867;
var G__45878 = chunk__45818_45868;
var G__45879 = count__45819_45869;
var G__45880 = (i__45820_45870 + (1));
seq__45817_45867 = G__45877;
chunk__45818_45868 = G__45878;
count__45819_45869 = G__45879;
i__45820_45870 = G__45880;
continue;
} else {
var temp__5720__auto___45881 = cljs.core.seq.call(null,seq__45817_45867);
if(temp__5720__auto___45881){
var seq__45817_45882__$1 = temp__5720__auto___45881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45817_45882__$1)){
var c__4556__auto___45883 = cljs.core.chunk_first.call(null,seq__45817_45882__$1);
var G__45884 = cljs.core.chunk_rest.call(null,seq__45817_45882__$1);
var G__45885 = c__4556__auto___45883;
var G__45886 = cljs.core.count.call(null,c__4556__auto___45883);
var G__45887 = (0);
seq__45817_45867 = G__45884;
chunk__45818_45868 = G__45885;
count__45819_45869 = G__45886;
i__45820_45870 = G__45887;
continue;
} else {
var vec__45836_45888 = cljs.core.first.call(null,seq__45817_45882__$1);
var name_45889 = cljs.core.nth.call(null,vec__45836_45888,(0),null);
var map__45839_45890 = cljs.core.nth.call(null,vec__45836_45888,(1),null);
var map__45839_45891__$1 = (((((!((map__45839_45890 == null))))?(((((map__45839_45890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45839_45890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45839_45890):map__45839_45890);
var doc_45892 = cljs.core.get.call(null,map__45839_45891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45893 = cljs.core.get.call(null,map__45839_45891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45889);

cljs.core.println.call(null," ",arglists_45893);

if(cljs.core.truth_(doc_45892)){
cljs.core.println.call(null," ",doc_45892);
} else {
}


var G__45894 = cljs.core.next.call(null,seq__45817_45882__$1);
var G__45895 = null;
var G__45896 = (0);
var G__45897 = (0);
seq__45817_45867 = G__45894;
chunk__45818_45868 = G__45895;
count__45819_45869 = G__45896;
i__45820_45870 = G__45897;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__45841 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45842 = null;
var count__45843 = (0);
var i__45844 = (0);
while(true){
if((i__45844 < count__45843)){
var role = cljs.core._nth.call(null,chunk__45842,i__45844);
var temp__5720__auto___45898__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___45898__$1)){
var spec_45899 = temp__5720__auto___45898__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45899));
} else {
}


var G__45900 = seq__45841;
var G__45901 = chunk__45842;
var G__45902 = count__45843;
var G__45903 = (i__45844 + (1));
seq__45841 = G__45900;
chunk__45842 = G__45901;
count__45843 = G__45902;
i__45844 = G__45903;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__45841);
if(temp__5720__auto____$1){
var seq__45841__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45841__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__45841__$1);
var G__45904 = cljs.core.chunk_rest.call(null,seq__45841__$1);
var G__45905 = c__4556__auto__;
var G__45906 = cljs.core.count.call(null,c__4556__auto__);
var G__45907 = (0);
seq__45841 = G__45904;
chunk__45842 = G__45905;
count__45843 = G__45906;
i__45844 = G__45907;
continue;
} else {
var role = cljs.core.first.call(null,seq__45841__$1);
var temp__5720__auto___45908__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___45908__$2)){
var spec_45909 = temp__5720__auto___45908__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45909));
} else {
}


var G__45910 = cljs.core.next.call(null,seq__45841__$1);
var G__45911 = null;
var G__45912 = (0);
var G__45913 = (0);
seq__45841 = G__45910;
chunk__45842 = G__45911;
count__45843 = G__45912;
i__45844 = G__45913;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45914 = cljs.core.conj.call(null,via,t);
var G__45915 = cljs.core.ex_cause.call(null,t);
via = G__45914;
t = G__45915;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45918 = datafied_throwable;
var map__45918__$1 = (((((!((map__45918 == null))))?(((((map__45918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45918):map__45918);
var via = cljs.core.get.call(null,map__45918__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__45918__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__45918__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45919 = cljs.core.last.call(null,via);
var map__45919__$1 = (((((!((map__45919 == null))))?(((((map__45919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45919):map__45919);
var type = cljs.core.get.call(null,map__45919__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__45919__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__45919__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45920 = data;
var map__45920__$1 = (((((!((map__45920 == null))))?(((((map__45920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45920):map__45920);
var problems = cljs.core.get.call(null,map__45920__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__45920__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__45920__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45921 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__45921__$1 = (((((!((map__45921 == null))))?(((((map__45921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45921):map__45921);
var top_data = map__45921__$1;
var source = cljs.core.get.call(null,map__45921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__45926 = phase;
var G__45926__$1 = (((G__45926 instanceof cljs.core.Keyword))?G__45926.fqn:null);
switch (G__45926__$1) {
case "read-source":
var map__45927 = data;
var map__45927__$1 = (((((!((map__45927 == null))))?(((((map__45927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45927):map__45927);
var line = cljs.core.get.call(null,map__45927__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__45927__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45929 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__45929__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__45929,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45929);
var G__45929__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__45929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45929__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__45929__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45929__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45930 = top_data;
var G__45930__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__45930,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45930);
var G__45930__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__45930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45930__$1);
var G__45930__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__45930__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45930__$2);
var G__45930__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__45930__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45930__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__45930__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45930__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45931 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__45931,(0),null);
var method = cljs.core.nth.call(null,vec__45931,(1),null);
var file = cljs.core.nth.call(null,vec__45931,(2),null);
var line = cljs.core.nth.call(null,vec__45931,(3),null);
var G__45934 = top_data;
var G__45934__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__45934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45934);
var G__45934__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__45934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45934__$1);
var G__45934__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__45934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45934__$2);
var G__45934__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__45934__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45934__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__45934__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45934__$4;
}

break;
case "execution":
var vec__45935 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__45935,(0),null);
var method = cljs.core.nth.call(null,vec__45935,(1),null);
var file = cljs.core.nth.call(null,vec__45935,(2),null);
var line = cljs.core.nth.call(null,vec__45935,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__45917_SHARP_){
var or__4126__auto__ = (p1__45917_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__45917_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__45938 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45938__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__45938,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45938);
var G__45938__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__45938__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45938__$1);
var G__45938__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__45938__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45938__$2);
var G__45938__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__45938__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45938__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__45938__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45938__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45926__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45942){
var map__45943 = p__45942;
var map__45943__$1 = (((((!((map__45943 == null))))?(((((map__45943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45943):map__45943);
var triage_data = map__45943__$1;
var phase = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__45943__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45945 = phase;
var G__45945__$1 = (((G__45945 instanceof cljs.core.Keyword))?G__45945.fqn:null);
switch (G__45945__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45946_45955 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45947_45956 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45948_45957 = true;
var _STAR_print_fn_STAR__temp_val__45949_45958 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45948_45957);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45949_45958);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__45940_SHARP_){
return cljs.core.dissoc.call(null,p1__45940_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45947_45956);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45946_45955);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45950_45959 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45951_45960 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45952_45961 = true;
var _STAR_print_fn_STAR__temp_val__45953_45962 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45952_45961);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45953_45962);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__45941_SHARP_){
return cljs.core.dissoc.call(null,p1__45941_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45951_45960);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45950_45959);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45945__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1637933618527
