// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28706){
var map__28707 = p__28706;
var map__28707__$1 = (((((!((map__28707 == null))))?(((((map__28707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28707):map__28707);
var m = map__28707__$1;
var n = cljs.core.get.call(null,map__28707__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28707__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28709_28741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28710_28742 = null;
var count__28711_28743 = (0);
var i__28712_28744 = (0);
while(true){
if((i__28712_28744 < count__28711_28743)){
var f_28745 = cljs.core._nth.call(null,chunk__28710_28742,i__28712_28744);
cljs.core.println.call(null,"  ",f_28745);


var G__28746 = seq__28709_28741;
var G__28747 = chunk__28710_28742;
var G__28748 = count__28711_28743;
var G__28749 = (i__28712_28744 + (1));
seq__28709_28741 = G__28746;
chunk__28710_28742 = G__28747;
count__28711_28743 = G__28748;
i__28712_28744 = G__28749;
continue;
} else {
var temp__5720__auto___28750 = cljs.core.seq.call(null,seq__28709_28741);
if(temp__5720__auto___28750){
var seq__28709_28751__$1 = temp__5720__auto___28750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28709_28751__$1)){
var c__4556__auto___28752 = cljs.core.chunk_first.call(null,seq__28709_28751__$1);
var G__28753 = cljs.core.chunk_rest.call(null,seq__28709_28751__$1);
var G__28754 = c__4556__auto___28752;
var G__28755 = cljs.core.count.call(null,c__4556__auto___28752);
var G__28756 = (0);
seq__28709_28741 = G__28753;
chunk__28710_28742 = G__28754;
count__28711_28743 = G__28755;
i__28712_28744 = G__28756;
continue;
} else {
var f_28757 = cljs.core.first.call(null,seq__28709_28751__$1);
cljs.core.println.call(null,"  ",f_28757);


var G__28758 = cljs.core.next.call(null,seq__28709_28751__$1);
var G__28759 = null;
var G__28760 = (0);
var G__28761 = (0);
seq__28709_28741 = G__28758;
chunk__28710_28742 = G__28759;
count__28711_28743 = G__28760;
i__28712_28744 = G__28761;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28762 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28762);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28762)))?cljs.core.second.call(null,arglists_28762):arglists_28762));
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
var seq__28713_28763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28714_28764 = null;
var count__28715_28765 = (0);
var i__28716_28766 = (0);
while(true){
if((i__28716_28766 < count__28715_28765)){
var vec__28727_28767 = cljs.core._nth.call(null,chunk__28714_28764,i__28716_28766);
var name_28768 = cljs.core.nth.call(null,vec__28727_28767,(0),null);
var map__28730_28769 = cljs.core.nth.call(null,vec__28727_28767,(1),null);
var map__28730_28770__$1 = (((((!((map__28730_28769 == null))))?(((((map__28730_28769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28730_28769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28730_28769):map__28730_28769);
var doc_28771 = cljs.core.get.call(null,map__28730_28770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28772 = cljs.core.get.call(null,map__28730_28770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28768);

cljs.core.println.call(null," ",arglists_28772);

if(cljs.core.truth_(doc_28771)){
cljs.core.println.call(null," ",doc_28771);
} else {
}


var G__28773 = seq__28713_28763;
var G__28774 = chunk__28714_28764;
var G__28775 = count__28715_28765;
var G__28776 = (i__28716_28766 + (1));
seq__28713_28763 = G__28773;
chunk__28714_28764 = G__28774;
count__28715_28765 = G__28775;
i__28716_28766 = G__28776;
continue;
} else {
var temp__5720__auto___28777 = cljs.core.seq.call(null,seq__28713_28763);
if(temp__5720__auto___28777){
var seq__28713_28778__$1 = temp__5720__auto___28777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28713_28778__$1)){
var c__4556__auto___28779 = cljs.core.chunk_first.call(null,seq__28713_28778__$1);
var G__28780 = cljs.core.chunk_rest.call(null,seq__28713_28778__$1);
var G__28781 = c__4556__auto___28779;
var G__28782 = cljs.core.count.call(null,c__4556__auto___28779);
var G__28783 = (0);
seq__28713_28763 = G__28780;
chunk__28714_28764 = G__28781;
count__28715_28765 = G__28782;
i__28716_28766 = G__28783;
continue;
} else {
var vec__28732_28784 = cljs.core.first.call(null,seq__28713_28778__$1);
var name_28785 = cljs.core.nth.call(null,vec__28732_28784,(0),null);
var map__28735_28786 = cljs.core.nth.call(null,vec__28732_28784,(1),null);
var map__28735_28787__$1 = (((((!((map__28735_28786 == null))))?(((((map__28735_28786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28735_28786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28735_28786):map__28735_28786);
var doc_28788 = cljs.core.get.call(null,map__28735_28787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28789 = cljs.core.get.call(null,map__28735_28787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28785);

cljs.core.println.call(null," ",arglists_28789);

if(cljs.core.truth_(doc_28788)){
cljs.core.println.call(null," ",doc_28788);
} else {
}


var G__28790 = cljs.core.next.call(null,seq__28713_28778__$1);
var G__28791 = null;
var G__28792 = (0);
var G__28793 = (0);
seq__28713_28763 = G__28790;
chunk__28714_28764 = G__28791;
count__28715_28765 = G__28792;
i__28716_28766 = G__28793;
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

var seq__28737 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28738 = null;
var count__28739 = (0);
var i__28740 = (0);
while(true){
if((i__28740 < count__28739)){
var role = cljs.core._nth.call(null,chunk__28738,i__28740);
var temp__5720__auto___28794__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28794__$1)){
var spec_28795 = temp__5720__auto___28794__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28795));
} else {
}


var G__28796 = seq__28737;
var G__28797 = chunk__28738;
var G__28798 = count__28739;
var G__28799 = (i__28740 + (1));
seq__28737 = G__28796;
chunk__28738 = G__28797;
count__28739 = G__28798;
i__28740 = G__28799;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28737);
if(temp__5720__auto____$1){
var seq__28737__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28737__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28737__$1);
var G__28800 = cljs.core.chunk_rest.call(null,seq__28737__$1);
var G__28801 = c__4556__auto__;
var G__28802 = cljs.core.count.call(null,c__4556__auto__);
var G__28803 = (0);
seq__28737 = G__28800;
chunk__28738 = G__28801;
count__28739 = G__28802;
i__28740 = G__28803;
continue;
} else {
var role = cljs.core.first.call(null,seq__28737__$1);
var temp__5720__auto___28804__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28804__$2)){
var spec_28805 = temp__5720__auto___28804__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28805));
} else {
}


var G__28806 = cljs.core.next.call(null,seq__28737__$1);
var G__28807 = null;
var G__28808 = (0);
var G__28809 = (0);
seq__28737 = G__28806;
chunk__28738 = G__28807;
count__28739 = G__28808;
i__28740 = G__28809;
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
var G__28810 = cljs.core.conj.call(null,via,t);
var G__28811 = cljs.core.ex_cause.call(null,t);
via = G__28810;
t = G__28811;
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
var map__28814 = datafied_throwable;
var map__28814__$1 = (((((!((map__28814 == null))))?(((((map__28814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28814):map__28814);
var via = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28815 = cljs.core.last.call(null,via);
var map__28815__$1 = (((((!((map__28815 == null))))?(((((map__28815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28815):map__28815);
var type = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28816 = data;
var map__28816__$1 = (((((!((map__28816 == null))))?(((((map__28816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);
var problems = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28817 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28817__$1 = (((((!((map__28817 == null))))?(((((map__28817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28817):map__28817);
var top_data = map__28817__$1;
var source = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28822 = phase;
var G__28822__$1 = (((G__28822 instanceof cljs.core.Keyword))?G__28822.fqn:null);
switch (G__28822__$1) {
case "read-source":
var map__28823 = data;
var map__28823__$1 = (((((!((map__28823 == null))))?(((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var line = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28825 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28825__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28825,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28825);
var G__28825__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28825__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28825__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28825__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28826 = top_data;
var G__28826__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28826,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28826);
var G__28826__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28826__$1);
var G__28826__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28826__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28826__$2);
var G__28826__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28826__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28826__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28826__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28826__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28827 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28827,(0),null);
var method = cljs.core.nth.call(null,vec__28827,(1),null);
var file = cljs.core.nth.call(null,vec__28827,(2),null);
var line = cljs.core.nth.call(null,vec__28827,(3),null);
var G__28830 = top_data;
var G__28830__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28830,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28830);
var G__28830__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28830__$1);
var G__28830__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__28830__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28830__$2);
var G__28830__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28830__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28830__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28830__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28830__$4;
}

break;
case "execution":
var vec__28831 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28831,(0),null);
var method = cljs.core.nth.call(null,vec__28831,(1),null);
var file = cljs.core.nth.call(null,vec__28831,(2),null);
var line = cljs.core.nth.call(null,vec__28831,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28813_SHARP_){
var or__4126__auto__ = (p1__28813_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28813_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__28834 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28834__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28834,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28834);
var G__28834__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28834__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28834__$1);
var G__28834__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28834__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28834__$2);
var G__28834__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28834__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28834__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28834__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28834__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28822__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28838){
var map__28839 = p__28838;
var map__28839__$1 = (((((!((map__28839 == null))))?(((((map__28839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28839):map__28839);
var triage_data = map__28839__$1;
var phase = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28841 = phase;
var G__28841__$1 = (((G__28841 instanceof cljs.core.Keyword))?G__28841.fqn:null);
switch (G__28841__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28842_28851 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28843_28852 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28844_28853 = true;
var _STAR_print_fn_STAR__temp_val__28845_28854 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28844_28853);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28845_28854);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28836_SHARP_){
return cljs.core.dissoc.call(null,p1__28836_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28843_28852);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28842_28851);
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
var _STAR_print_newline_STAR__orig_val__28846_28855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28847_28856 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28848_28857 = true;
var _STAR_print_fn_STAR__temp_val__28849_28858 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28848_28857);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28849_28858);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28837_SHARP_){
return cljs.core.dissoc.call(null,p1__28837_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28847_28856);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28846_28855);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28841__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1637141752266
