// Compiled by ClojureScript 1.10.773 {}
goog.provide('aerial.hanami.md2hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
aerial.hanami.md2hiccup.inline_transformers = (function aerial$hanami$md2hiccup$inline_transformers(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/&amp;copy;/,"\u00A9"),/\t$/,"    "),/</,"&lt;"),/>/,"&gt;");
});
aerial.hanami.md2hiccup.escape_code = (function aerial$hanami$md2hiccup$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/</,"&lt;"),/>/,"&gt;");
});
aerial.hanami.md2hiccup.inline_rules = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"escapes","escapes",-1020629272),new cljs.core.Keyword(null,"regex","regex",939488856),/^(\\\\|\\`|\\\*|\\_|\\\{|\\}|\\\[|\\]|\\\(|\\\)|\\#|\\\+|\\-|\\\.|\\!)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40055){
var vec__40056 = p__40055;
var _ = cljs.core.nth.call(null,vec__40056,(0),null);
var txt = cljs.core.nth.call(null,vec__40056,(1),null);
return cljs.core.subs.call(null,txt,(1));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"regex","regex",939488856),/^(__([^_]+)__)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40059){
var vec__40060 = p__40059;
var _ = cljs.core.nth.call(null,vec__40060,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40060,(1),null);
var txt = cljs.core.nth.call(null,vec__40060,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),txt], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"empth","empth",1557405637),new cljs.core.Keyword(null,"regex","regex",939488856),/^((\*|_)([^*]+)(\*|_))/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40063){
var vec__40064 = p__40063;
var _ = cljs.core.nth.call(null,vec__40064,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40064,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__40064,(2),null);
var txt = cljs.core.nth.call(null,vec__40064,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),txt], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inline-link","inline-link",-927542372),new cljs.core.Keyword(null,"regex","regex",939488856),/^(https?:\/\/[^ ]+)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40069){
var vec__40071 = p__40069;
var _ = cljs.core.nth.call(null,vec__40071,(0),null);
var txt = cljs.core.nth.call(null,vec__40071,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"href","href",-793805698),txt], null),txt], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"auto-link","auto-link",544034414),new cljs.core.Keyword(null,"regex","regex",939488856),/^(<(https?:\/\/[^ ]+)>)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40074){
var vec__40075 = p__40074;
var _ = cljs.core.nth.call(null,vec__40075,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40075,(1),null);
var txt = cljs.core.nth.call(null,vec__40075,(2),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),txt], null),txt], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"regex","regex",939488856),/^(\*\*([^*]+)\*\*)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40078){
var vec__40079 = p__40078;
var _ = cljs.core.nth.call(null,vec__40079,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40079,(1),null);
var txt = cljs.core.nth.call(null,vec__40079,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),txt], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"double-code","double-code",1573574136),new cljs.core.Keyword(null,"regex","regex",939488856),/^(``([^`]+)``)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40082){
var vec__40083 = p__40082;
var _ = cljs.core.nth.call(null,vec__40083,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40083,(1),null);
var txt = cljs.core.nth.call(null,vec__40083,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),aerial.hanami.md2hiccup.inline_transformers.call(null,txt)], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inline-code","inline-code",416196370),new cljs.core.Keyword(null,"regex","regex",939488856),/^(`([^`]+)`)/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40086){
var vec__40087 = p__40086;
var _ = cljs.core.nth.call(null,vec__40087,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40087,(1),null);
var txt = cljs.core.nth.call(null,vec__40087,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),aerial.hanami.md2hiccup.inline_transformers.call(null,txt)], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"line-break","line-break",908969510),new cljs.core.Keyword(null,"regex","regex",939488856),/^( {5}| {2})$/,new cljs.core.Keyword(null,"f","f",-1597136552),(function() { 
var G__40104__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
};
var G__40104 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__40105__i = 0, G__40105__a = new Array(arguments.length -  0);
while (G__40105__i < G__40105__a.length) {G__40105__a[G__40105__i] = arguments[G__40105__i + 0]; ++G__40105__i;}
  _ = new cljs.core.IndexedSeq(G__40105__a,0,null);
} 
return G__40104__delegate.call(this,_);};
G__40104.cljs$lang$maxFixedArity = 0;
G__40104.cljs$lang$applyTo = (function (arglist__40106){
var _ = cljs.core.seq(arglist__40106);
return G__40104__delegate(_);
});
G__40104.cljs$core$IFn$_invoke$arity$variadic = G__40104__delegate;
return G__40104;
})()
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"regex","regex",939488856),/^(\[([^\]]+)\]\(([^)]*)\))/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40090){
var vec__40091 = p__40090;
var _ = cljs.core.nth.call(null,vec__40091,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40091,(1),null);
var txt = cljs.core.nth.call(null,vec__40091,(2),null);
var ref = cljs.core.nth.call(null,vec__40091,(3),null);
var vec__40094 = clojure.string.split.call(null,ref,/\s\"/);
var seq__40095 = cljs.core.seq.call(null,vec__40094);
var first__40096 = cljs.core.first.call(null,seq__40095);
var seq__40095__$1 = cljs.core.next.call(null,seq__40095);
var ref__$1 = first__40096;
var first__40096__$1 = cljs.core.first.call(null,seq__40095__$1);
var seq__40095__$2 = cljs.core.next.call(null,seq__40095__$1);
var title = first__40096__$1;
var ___$2 = seq__40095__$2;
var attrs = (cljs.core.truth_(title)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"href","href",-793805698),ref__$1,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace.call(null,title,/\"$\s*/,"")], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"href","href",-793805698),ref__$1], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),attrs], null),aerial.hanami.md2hiccup.parse_inline.call(null,txt));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"regex","regex",939488856),/^(!\[([^\]]+)\]\(([^)]*)\))/,new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__40097){
var vec__40098 = p__40097;
var _ = cljs.core.nth.call(null,vec__40098,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40098,(1),null);
var txt = cljs.core.nth.call(null,vec__40098,(2),null);
var ref = cljs.core.nth.call(null,vec__40098,(3),null);
var vec__40101 = clojure.string.split.call(null,ref,/\s\"/);
var seq__40102 = cljs.core.seq.call(null,vec__40101);
var first__40103 = cljs.core.first.call(null,seq__40102);
var seq__40102__$1 = cljs.core.next.call(null,seq__40102);
var ref__$1 = first__40103;
var first__40103__$1 = cljs.core.first.call(null,seq__40102__$1);
var seq__40102__$2 = cljs.core.next.call(null,seq__40102__$1);
var title = first__40103__$1;
var ___$2 = seq__40102__$2;
var attrs = (cljs.core.truth_(title)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),ref__$1,new cljs.core.Keyword(null,"alt","alt",-3214426),txt,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.replace.call(null,title,/\"$\s*/,"")], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),ref__$1,new cljs.core.Keyword(null,"alt","alt",-3214426),txt], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),attrs], null);
})], null)], null);
aerial.hanami.md2hiccup.apply_rules = (function aerial$hanami$md2hiccup$apply_rules(char_idx,txt){
var G__40111 = aerial.hanami.md2hiccup.inline_rules;
var vec__40112 = G__40111;
var seq__40113 = cljs.core.seq.call(null,vec__40112);
var first__40114 = cljs.core.first.call(null,seq__40113);
var seq__40113__$1 = cljs.core.next.call(null,seq__40113);
var map__40115 = first__40114;
var map__40115__$1 = (((((!((map__40115 == null))))?(((((map__40115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40115):map__40115);
var rule = map__40115__$1;
var regex = cljs.core.get.call(null,map__40115__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var f = cljs.core.get.call(null,map__40115__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var rules = seq__40113__$1;
var G__40111__$1 = G__40111;
while(true){
var vec__40122 = G__40111__$1;
var seq__40123 = cljs.core.seq.call(null,vec__40122);
var first__40124 = cljs.core.first.call(null,seq__40123);
var seq__40123__$1 = cljs.core.next.call(null,seq__40123);
var map__40125 = first__40124;
var map__40125__$1 = (((((!((map__40125 == null))))?(((((map__40125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40125):map__40125);
var rule__$1 = map__40125__$1;
var regex__$1 = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var f__$1 = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var rules__$1 = seq__40123__$1;
if(cljs.core.truth_(rule__$1)){
var temp__5718__auto__ = cljs.core.re_find.call(null,regex__$1,txt);
if(cljs.core.truth_(temp__5718__auto__)){
var re_gr = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(char_idx + cljs.core.count.call(null,cljs.core.second.call(null,re_gr))),f__$1.call(null,re_gr)], null);
} else {
var G__40127 = rules__$1;
G__40111__$1 = G__40127;
continue;
}
} else {
return null;
}
break;
}
});
aerial.hanami.md2hiccup.apply_rules.call(null,(0),"*aaa* bb ddd");
aerial.hanami.md2hiccup.parse_inline = (function aerial$hanami$md2hiccup$parse_inline(txt){
var acc = cljs.core.PersistentVector.EMPTY;
var char_idx = (0);
var from_char_idx = (0);
while(true){
var txt_tail = cljs.core.subs.call(null,txt,char_idx);
var vec__40131 = aerial.hanami.md2hiccup.apply_rules.call(null,char_idx,txt_tail);
var next_char_idx = cljs.core.nth.call(null,vec__40131,(0),null);
var new_elem = cljs.core.nth.call(null,vec__40131,(1),null);
if(cljs.core._EQ_.call(null,"",txt_tail)){
if((char_idx > from_char_idx)){
return cljs.core.conj.call(null,acc,aerial.hanami.md2hiccup.inline_transformers.call(null,cljs.core.subs.call(null,txt,from_char_idx,char_idx)));
} else {
return acc;
}
} else {
if(cljs.core.truth_(new_elem)){
var G__40134 = (((char_idx > from_char_idx))?cljs.core.conj.call(null,acc,aerial.hanami.md2hiccup.inline_transformers.call(null,cljs.core.subs.call(null,txt,from_char_idx,char_idx)),new_elem):cljs.core.conj.call(null,acc,new_elem));
var G__40135 = next_char_idx;
var G__40136 = next_char_idx;
acc = G__40134;
char_idx = G__40135;
from_char_idx = G__40136;
continue;
} else {
var G__40137 = acc;
var G__40138 = (char_idx + (1));
var G__40139 = from_char_idx;
acc = G__40137;
char_idx = G__40138;
from_char_idx = G__40139;
continue;

}
}
break;
}
});
aerial.hanami.md2hiccup.olist_pattern = /^\d\.\s+(.*)/;
aerial.hanami.md2hiccup.string_tag = (function aerial$hanami$md2hiccup$string_tag(ln){
if((ln == null)){
return new cljs.core.Keyword(null,"end-of-file","end-of-file",501920419);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\s*$/,ln))){
return new cljs.core.Keyword(null,"empty-line","empty-line",1962442988);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^=(=)+$/,ln))){
return new cljs.core.Keyword(null,"old-header-1","old-header-1",-1585186270);
} else {
if(cljs.core._EQ_.call(null,ln,"- - -")){
return new cljs.core.Keyword(null,"hr","hr",1377740067);
} else {
if(cljs.core._EQ_.call(null,ln,"---")){
return new cljs.core.Keyword(null,"hr","hr",1377740067);
} else {
if(cljs.core._EQ_.call(null,ln,"___")){
return new cljs.core.Keyword(null,"hr","hr",1377740067);
} else {
if(cljs.core._EQ_.call(null,ln,"-------")){
return new cljs.core.Keyword(null,"hr","hr",1377740067);
} else {
if(cljs.core._EQ_.call(null,ln,"***")){
return new cljs.core.Keyword(null,"hr","hr",1377740067);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^--(-)+$/,ln))){
return new cljs.core.Keyword(null,"old-header-2","old-header-2",972017123);
} else {
if(clojure.string.starts_with_QMARK_.call(null,ln,"#")){
return new cljs.core.Keyword(null,"header","header",119441134);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^(\s*)(\*|-|\+) .+/,ln))){
return new cljs.core.Keyword(null,"ulist","ulist",-2067795970);
} else {
if(clojure.string.starts_with_QMARK_.call(null,ln,"```")){
return new cljs.core.Keyword(null,"code","code",1586293142);
} else {
if(clojure.string.starts_with_QMARK_.call(null,ln,">")){
return new cljs.core.Keyword(null,"blockquote","blockquote",372264190);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,aerial.hanami.md2hiccup.olist_pattern,ln))){
return new cljs.core.Keyword(null,"olist","olist",677976023);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^( {4}|\t).*/,ln))){
return new cljs.core.Keyword(null,"pre","pre",2118456869);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^ [^ ]+/,ln))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);

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
aerial.hanami.md2hiccup.parse_header = (function aerial$hanami$md2hiccup$parse_header(txt){
var header_txt = clojure.string.replace.call(null,txt,/^\s*#{1,6}\s+/,"");
var header_txt__$1 = clojure.string.replace.call(null,header_txt,/\s+(#+)?$/,"");
var header_marker = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^(#{1,6})[^#]+.*/,txt)));
var header_tag = cljs.core.keyword.call(null,["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,header_marker))].join(''));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_tag], null),aerial.hanami.md2hiccup.parse_inline.call(null,header_txt__$1));
});
aerial.hanami.md2hiccup.parse_old_header = (function aerial$hanami$md2hiccup$parse_old_header(tag,lis){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.reduce.call(null,(function (acc,l){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)].join('');
}),"",lis)], null);
});
aerial.hanami.md2hiccup.concat_strings = (function aerial$hanami$md2hiccup$concat_strings(p__40143){
var vec__40144 = p__40143;
var seq__40145 = cljs.core.seq.call(null,vec__40144);
var first__40146 = cljs.core.first.call(null,seq__40145);
var seq__40145__$1 = cljs.core.next.call(null,seq__40145);
var i = first__40146;
var is = seq__40145__$1;
var start = true;
var G__40150 = is;
var vec__40151 = G__40150;
var seq__40152 = cljs.core.seq.call(null,vec__40151);
var first__40153 = cljs.core.first.call(null,seq__40152);
var seq__40152__$1 = cljs.core.next.call(null,seq__40152);
var x = first__40153;
var xs = seq__40152__$1;
var prev = i;
var acc = cljs.core.PersistentVector.EMPTY;
var start__$1 = start;
var G__40150__$1 = G__40150;
var prev__$1 = prev;
var acc__$1 = acc;
while(true){
var start__$2 = start__$1;
var vec__40160 = G__40150__$1;
var seq__40161 = cljs.core.seq.call(null,vec__40160);
var first__40162 = cljs.core.first.call(null,seq__40161);
var seq__40161__$1 = cljs.core.next.call(null,seq__40161);
var x__$1 = first__40162;
var xs__$1 = seq__40161__$1;
var prev__$2 = prev__$1;
var acc__$2 = acc__$1;
if((((x__$1 == null)) && ((prev__$2 == null)))){
return acc__$2;
} else {
if(cljs.core.truth_((((x__$1 == null))?prev__$2:false))){
return cljs.core.conj.call(null,acc__$2,((((start__$2) && (typeof prev__$2 === 'string')))?clojure.string.triml.call(null,prev__$2):prev__$2));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = prev__$2;
if(cljs.core.truth_(and__4115__auto__)){
return ((typeof prev__$2 === 'string') && (typeof x__$1 === 'string'));
} else {
return and__4115__auto__;
}
})())){
var G__40168 = false;
var G__40169 = xs__$1;
var G__40170 = [clojure.string.triml.call(null,prev__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
var G__40171 = acc__$2;
start__$1 = G__40168;
G__40150__$1 = G__40169;
prev__$1 = G__40170;
acc__$1 = G__40171;
continue;
} else {
var G__40172 = false;
var G__40173 = xs__$1;
var G__40174 = x__$1;
var G__40175 = cljs.core.conj.call(null,acc__$2,prev__$2);
start__$1 = G__40172;
G__40150__$1 = G__40173;
prev__$1 = G__40174;
acc__$1 = G__40175;
continue;

}
}
}
break;
}
});
aerial.hanami.md2hiccup.concat_strings.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  a","b",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"ups"], null),"c"], null));
aerial.hanami.md2hiccup.parse_paragraph = (function aerial$hanami$md2hiccup$parse_paragraph(lis){
var inline_parsed = cljs.core.mapcat.call(null,aerial.hanami.md2hiccup.parse_inline,((((1) < cljs.core.count.call(null,lis)))?cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__40176_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40176_SHARP_),"\n"].join('');
}),cljs.core.butlast.call(null,cljs.core.filterv.call(null,cljs.core.identity,lis))),cljs.core.last.call(null,cljs.core.filterv.call(null,cljs.core.identity,lis))):lis));
var res = aerial.hanami.md2hiccup.concat_strings.call(null,inline_parsed);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),res);
});
aerial.hanami.md2hiccup.parse_list = (function aerial$hanami$md2hiccup$parse_list(lns){
var fl = cljs.core.first.call(null,lns);
var vec__40182 = cljs.core.re_find.call(null,/^(\s*)(\*|-|\+)(\s\s*)/,fl);
var prefix = cljs.core.nth.call(null,vec__40182,(0),null);
var pre_sps = cljs.core.nth.call(null,vec__40182,(1),null);
var sym = cljs.core.nth.call(null,vec__40182,(2),null);
var sps = cljs.core.nth.call(null,vec__40182,(3),null);
var max_indent = cljs.core.count.call(null,sps);
var escapes = new cljs.core.PersistentArrayMap(null, 3, ["*","\\*","+","\\+","-","-"], null);
var cut_prefix_regex = cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_sps),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,escapes,sym)),"| )"," {0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_indent),"}"].join(''));
var cut_fn = (function (x){
return clojure.string.replace.call(null,x,cut_prefix_regex,"");
});
var flash_buf = (function (acc,buf){
if(cljs.core.not.call(null,buf)){
return acc;
} else {
var item_parsed = aerial.hanami.md2hiccup._STAR_parse.call(null,buf);
if(((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,item_parsed))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.ffirst.call(null,item_parsed))))){
return cljs.core.conj.call(null,acc,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),cljs.core.rest.call(null,cljs.core.first.call(null,item_parsed))));
} else {
return cljs.core.conj.call(null,acc,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),item_parsed));
}
}
});
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null);
var buf = null;
var G__40188 = lns;
var vec__40189 = G__40188;
var seq__40190 = cljs.core.seq.call(null,vec__40189);
var first__40191 = cljs.core.first.call(null,seq__40190);
var seq__40190__$1 = cljs.core.next.call(null,seq__40190);
var ln = first__40191;
var lns__$1 = seq__40190__$1;
var prev_lns = vec__40189;
var acc__$1 = acc;
var buf__$1 = buf;
var G__40188__$1 = G__40188;
while(true){
var acc__$2 = acc__$1;
var buf__$2 = buf__$1;
var vec__40199 = G__40188__$1;
var seq__40200 = cljs.core.seq.call(null,vec__40199);
var first__40201 = cljs.core.first.call(null,seq__40200);
var seq__40200__$1 = cljs.core.next.call(null,seq__40200);
var ln__$1 = first__40201;
var lns__$2 = seq__40200__$1;
var prev_lns__$1 = vec__40199;
if(cljs.core.not.call(null,ln__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flash_buf.call(null,acc__$2,buf__$2),cljs.core.PersistentVector.EMPTY], null);
} else {
var ln__$2 = clojure.string.replace.call(null,ln__$1,/^\t/,"    ");
if(cljs.core.not.call(null,(function (){var or__4126__auto__ = cljs.core.re_find.call(null,cut_prefix_regex,ln__$2);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.re_matches.call(null,/^\s*$/,ln__$2);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flash_buf.call(null,acc__$2,buf__$2),prev_lns__$1], null);
} else {
if((!(clojure.string.starts_with_QMARK_.call(null,ln__$2,prefix)))){
var G__40206 = acc__$2;
var G__40207 = cljs.core.conj.call(null,buf__$2,cut_fn.call(null,ln__$2));
var G__40208 = lns__$2;
acc__$1 = G__40206;
buf__$1 = G__40207;
G__40188__$1 = G__40208;
continue;
} else {
var G__40209 = flash_buf.call(null,acc__$2,buf__$2);
var G__40210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cut_fn.call(null,ln__$2)], null);
var G__40211 = lns__$2;
acc__$1 = G__40209;
buf__$1 = G__40210;
G__40188__$1 = G__40211;
continue;
}
}
}
break;
}
});
aerial.hanami.md2hiccup.parse_olist = (function aerial$hanami$md2hiccup$parse_olist(lns){
var fl = cljs.core.first.call(null,lns);
var vec__40212 = cljs.core.re_find.call(null,/^(\d.\s*)/,fl);
var _ = cljs.core.nth.call(null,vec__40212,(0),null);
var prefix = cljs.core.nth.call(null,vec__40212,(1),null);
var max_indent = cljs.core.count.call(null,prefix);
var cut_prefix_regex = cljs.core.re_pattern.call(null,["^(\\d\\.|  ) {0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((max_indent - (2))),"}"].join(''));
var cut_fn = (function (x){
return clojure.string.replace.call(null,x,cut_prefix_regex,"");
});
var flash_buf = (function (acc,buf){
if(cljs.core.not.call(null,buf)){
return acc;
} else {
var item_parsed = aerial.hanami.md2hiccup._STAR_parse.call(null,buf);
if(((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,item_parsed))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.ffirst.call(null,item_parsed))))){
return cljs.core.conj.call(null,acc,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),cljs.core.rest.call(null,cljs.core.first.call(null,item_parsed))));
} else {
return cljs.core.conj.call(null,acc,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),item_parsed));
}
}
});
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null);
var buf = null;
var G__40218 = lns;
var vec__40219 = G__40218;
var seq__40220 = cljs.core.seq.call(null,vec__40219);
var first__40221 = cljs.core.first.call(null,seq__40220);
var seq__40220__$1 = cljs.core.next.call(null,seq__40220);
var ln = first__40221;
var lns__$1 = seq__40220__$1;
var prev_lns = vec__40219;
var acc__$1 = acc;
var buf__$1 = buf;
var G__40218__$1 = G__40218;
while(true){
var acc__$2 = acc__$1;
var buf__$2 = buf__$1;
var vec__40226 = G__40218__$1;
var seq__40227 = cljs.core.seq.call(null,vec__40226);
var first__40228 = cljs.core.first.call(null,seq__40227);
var seq__40227__$1 = cljs.core.next.call(null,seq__40227);
var ln__$1 = first__40228;
var lns__$2 = seq__40227__$1;
var prev_lns__$1 = vec__40226;
if(cljs.core.not.call(null,ln__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flash_buf.call(null,acc__$2,buf__$2),cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.not.call(null,(function (){var or__4126__auto__ = cljs.core.re_find.call(null,cut_prefix_regex,ln__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.re_matches.call(null,/^\s*$/,ln__$1);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flash_buf.call(null,acc__$2,buf__$2),prev_lns__$1], null);
} else {
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/^\d\./,ln__$1))){
var G__40229 = acc__$2;
var G__40230 = cljs.core.conj.call(null,buf__$2,cut_fn.call(null,ln__$1));
var G__40231 = lns__$2;
acc__$1 = G__40229;
buf__$1 = G__40230;
G__40218__$1 = G__40231;
continue;
} else {
var G__40232 = flash_buf.call(null,acc__$2,buf__$2);
var G__40233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cut_fn.call(null,ln__$1)], null);
var G__40234 = lns__$2;
acc__$1 = G__40232;
buf__$1 = G__40233;
G__40218__$1 = G__40234;
continue;
}
}
}
break;
}
});
aerial.hanami.md2hiccup.parse_code = (function aerial$hanami$md2hiccup$parse_code(p__40235){
var vec__40236 = p__40235;
var seq__40237 = cljs.core.seq.call(null,vec__40236);
var first__40238 = cljs.core.first.call(null,seq__40237);
var seq__40237__$1 = cljs.core.next.call(null,seq__40237);
var ln = first__40238;
var lns = seq__40237__$1;
var prev_lns = vec__40236;
var lang = cljs.core.second.call(null,clojure.string.split.call(null,ln,/```/,(2)));
var attrs = (cljs.core.truth_((function (){var and__4115__auto__ = lang;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,lang)));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,new cljs.core.Keyword(null,"class","class",-2030961996),lang], null):cljs.core.PersistentArrayMap.EMPTY);
var acc = cljs.core.PersistentVector.EMPTY;
var G__40243 = lns;
var vec__40244 = G__40243;
var seq__40245 = cljs.core.seq.call(null,vec__40244);
var first__40246 = cljs.core.first.call(null,seq__40245);
var seq__40245__$1 = cljs.core.next.call(null,seq__40245);
var ln__$1 = first__40246;
var lns__$1 = seq__40245__$1;
var prev_lns__$1 = vec__40244;
var acc__$1 = acc;
var G__40243__$1 = G__40243;
while(true){
var acc__$2 = acc__$1;
var vec__40253 = G__40243__$1;
var seq__40254 = cljs.core.seq.call(null,vec__40253);
var first__40255 = cljs.core.first.call(null,seq__40254);
var seq__40254__$1 = cljs.core.next.call(null,seq__40254);
var ln__$2 = first__40255;
var lns__$2 = seq__40254__$1;
var prev_lns__$2 = vec__40253;
if(cljs.core.not.call(null,ln__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),attrs,aerial.hanami.md2hiccup.escape_code.call(null,clojure.string.join.call(null,"\n",acc__$2))], null)], null),cljs.core.PersistentVector.EMPTY], null);
} else {
if(clojure.string.starts_with_QMARK_.call(null,ln__$2,"```")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),attrs,aerial.hanami.md2hiccup.escape_code.call(null,clojure.string.join.call(null,"\n",acc__$2))], null)], null),(function (){var or__4126__auto__ = lns__$2;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null);
} else {
var G__40259 = cljs.core.conj.call(null,acc__$2,ln__$2);
var G__40260 = lns__$2;
acc__$1 = G__40259;
G__40243__$1 = G__40260;
continue;
}
}
break;
}
});
aerial.hanami.md2hiccup.parse_pre = (function aerial$hanami$md2hiccup$parse_pre(lis){
var vec__40262 = cljs.core.re_matches.call(null,/^(\s{4}|\t).*/,cljs.core.first.call(null,lis));
var _ = cljs.core.nth.call(null,vec__40262,(0),null);
var rep = cljs.core.nth.call(null,vec__40262,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),aerial.hanami.md2hiccup.concat_strings.call(null,cljs.core.mapv.call(null,(function (x){
return [aerial.hanami.md2hiccup.inline_transformers.call(null,clojure.string.replace.call(null,x,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rep)].join('')),"")),"\n"].join('');
}),lis)))], null);
});
aerial.hanami.md2hiccup.parse_blockquote = (function aerial$hanami$md2hiccup$parse_blockquote(lis){
var vec__40268 = cljs.core.re_matches.call(null,/^(>\s*).*/,cljs.core.first.call(null,lis));
var _ = cljs.core.nth.call(null,vec__40268,(0),null);
var rep = cljs.core.nth.call(null,vec__40268,(1),null);
var sp_lengh = (cljs.core.count.call(null,rep) - (1));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null),aerial.hanami.md2hiccup._STAR_parse.call(null,cljs.core.mapv.call(null,(function (p1__40267_SHARP_){
return clojure.string.replace.call(null,p1__40267_SHARP_,cljs.core.re_pattern.call(null,["^> {0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sp_lengh),"}"].join('')),"");
}),lis)));
});
aerial.hanami.md2hiccup._STAR_parse = (function aerial$hanami$md2hiccup$_STAR_parse(lns){
var state = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40278 = lns;
var vec__40279 = G__40278;
var seq__40280 = cljs.core.seq.call(null,vec__40279);
var first__40281 = cljs.core.first.call(null,seq__40280);
var seq__40280__$1 = cljs.core.next.call(null,seq__40280);
var ln = first__40281;
var lns__$1 = seq__40280__$1;
var prev_lns = vec__40279;
var acc = cljs.core.PersistentVector.EMPTY;
var block_acc = cljs.core.PersistentVector.EMPTY;
var state__$1 = state;
var G__40278__$1 = G__40278;
var acc__$1 = acc;
var block_acc__$1 = block_acc;
while(true){
var state__$2 = state__$1;
var vec__40301 = G__40278__$1;
var seq__40302 = cljs.core.seq.call(null,vec__40301);
var first__40303 = cljs.core.first.call(null,seq__40302);
var seq__40302__$1 = cljs.core.next.call(null,seq__40302);
var ln__$1 = first__40303;
var lns__$2 = seq__40302__$1;
var prev_lns__$1 = vec__40301;
var acc__$2 = acc__$1;
var block_acc__$2 = block_acc__$1;
var transition = aerial.hanami.md2hiccup.string_tag.call(null,ln__$1);
var with_paragraph = ((function (state__$1,G__40278__$1,acc__$1,block_acc__$1,transition,state__$2,vec__40301,seq__40302,first__40303,seq__40302__$1,ln__$1,lns__$2,prev_lns__$1,acc__$2,block_acc__$2,state,G__40278,vec__40279,seq__40280,first__40281,seq__40280__$1,ln,lns__$1,prev_lns,acc,block_acc){
return (function (acc__$3){
if((!(cljs.core.empty_QMARK_.call(null,block_acc__$2)))){
return cljs.core.conj.call(null,acc__$3,aerial.hanami.md2hiccup.parse_paragraph.call(null,block_acc__$2));
} else {
return acc__$3;
}
});})(state__$1,G__40278__$1,acc__$1,block_acc__$1,transition,state__$2,vec__40301,seq__40302,first__40303,seq__40302__$1,ln__$1,lns__$2,prev_lns__$1,acc__$2,block_acc__$2,state,G__40278,vec__40279,seq__40280,first__40281,seq__40280__$1,ln,lns__$1,prev_lns,acc,block_acc))
;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"header","header",119441134)], null))){
var G__40320 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40321 = lns__$2;
var G__40322 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_header.call(null,ln__$1));
var G__40323 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40320;
G__40278__$1 = G__40321;
acc__$1 = G__40322;
block_acc__$1 = G__40323;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hr","hr",1377740067)], null))){
var G__40324 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40325 = lns__$2;
var G__40326 = cljs.core.conj.call(null,acc__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null));
var G__40327 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40324;
G__40278__$1 = G__40325;
acc__$1 = G__40326;
block_acc__$1 = G__40327;
continue;
} else {
if((((!(((cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"blockquote-em","blockquote-em",-1667874126))) || (cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))))))) && (cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))))){
var G__40328 = new cljs.core.Keyword(null,"blockquote","blockquote",372264190);
var G__40329 = lns__$2;
var G__40330 = with_paragraph.call(null,acc__$2);
var G__40331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ln__$1], null);
state__$1 = G__40328;
G__40278__$1 = G__40329;
acc__$1 = G__40330;
block_acc__$1 = G__40331;
continue;
} else {
if(cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__40332 = new cljs.core.Keyword(null,"blockquote","blockquote",372264190);
var G__40333 = lns__$2;
var G__40334 = acc__$2;
var G__40335 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40332;
G__40278__$1 = G__40333;
acc__$1 = G__40334;
block_acc__$1 = G__40335;
continue;
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"empty-line","empty-line",1962442988))){
var G__40336 = new cljs.core.Keyword(null,"blockquote-em","blockquote-em",-1667874126);
var G__40337 = lns__$2;
var G__40338 = acc__$2;
var G__40339 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40336;
G__40278__$1 = G__40337;
acc__$1 = G__40338;
block_acc__$1 = G__40339;
continue;
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"text","text",-1790561697))){
var G__40343 = new cljs.core.Keyword(null,"blockquote","blockquote",372264190);
var G__40344 = lns__$2;
var G__40345 = acc__$2;
var G__40346 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40343;
G__40278__$1 = G__40344;
acc__$1 = G__40345;
block_acc__$1 = G__40346;
continue;
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"end-of-file","end-of-file",501920419))){
return cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_blockquote.call(null,block_acc__$2));
} else {
var G__40348 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40349 = prev_lns__$1;
var G__40350 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_blockquote.call(null,block_acc__$2));
var G__40351 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40348;
G__40278__$1 = G__40349;
acc__$1 = G__40350;
block_acc__$1 = G__40351;
continue;

}
}
}
}
} else {
if(cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"blockquote-em","blockquote-em",-1667874126))){
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"empty-line","empty-line",1962442988))){
var G__40353 = new cljs.core.Keyword(null,"blockquote-em","blockquote-em",-1667874126);
var G__40354 = lns__$2;
var G__40355 = acc__$2;
var G__40356 = block_acc__$2;
state__$1 = G__40353;
G__40278__$1 = G__40354;
acc__$1 = G__40355;
block_acc__$1 = G__40356;
continue;
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__40357 = new cljs.core.Keyword(null,"blockquote","blockquote",372264190);
var G__40358 = lns__$2;
var G__40359 = acc__$2;
var G__40360 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40357;
G__40278__$1 = G__40358;
acc__$1 = G__40359;
block_acc__$1 = G__40360;
continue;
} else {
var G__40361 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40362 = prev_lns__$1;
var G__40363 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_blockquote.call(null,block_acc__$2));
var G__40364 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40361;
G__40278__$1 = G__40362;
acc__$1 = G__40363;
block_acc__$1 = G__40364;
continue;

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ulist","ulist",-2067795970)], null))){
var vec__40304 = aerial.hanami.md2hiccup.parse_list.call(null,prev_lns__$1);
var list = cljs.core.nth.call(null,vec__40304,(0),null);
var rest = cljs.core.nth.call(null,vec__40304,(1),null);
var G__40365 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40366 = rest;
var G__40367 = cljs.core.conj.call(null,acc__$2,list);
var G__40368 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40365;
G__40278__$1 = G__40366;
acc__$1 = G__40367;
block_acc__$1 = G__40368;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"olist","olist",677976023)], null))){
var vec__40307 = aerial.hanami.md2hiccup.parse_olist.call(null,prev_lns__$1);
var list = cljs.core.nth.call(null,vec__40307,(0),null);
var rest = cljs.core.nth.call(null,vec__40307,(1),null);
var G__40369 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40370 = rest;
var G__40371 = cljs.core.conj.call(null,acc__$2,list);
var G__40372 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40369;
G__40278__$1 = G__40370;
acc__$1 = G__40371;
block_acc__$1 = G__40372;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"pre","pre",2118456869)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null))){
var G__40373 = new cljs.core.Keyword(null,"pre","pre",2118456869);
var G__40374 = lns__$2;
var G__40375 = acc__$2;
var G__40376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ln__$1], null);
state__$1 = G__40373;
G__40278__$1 = G__40374;
acc__$1 = G__40375;
block_acc__$1 = G__40376;
continue;
} else {
if(cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"pre","pre",2118456869))){
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"pre","pre",2118456869))){
var G__40377 = new cljs.core.Keyword(null,"pre","pre",2118456869);
var G__40378 = lns__$2;
var G__40379 = acc__$2;
var G__40380 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40377;
G__40278__$1 = G__40378;
acc__$1 = G__40379;
block_acc__$1 = G__40380;
continue;
} else {
var G__40381 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40382 = prev_lns__$1;
var G__40383 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_pre.call(null,block_acc__$2));
var G__40384 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40381;
G__40278__$1 = G__40382;
acc__$1 = G__40383;
block_acc__$1 = G__40384;
continue;

}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"empty-line","empty-line",1962442988)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null))){
var G__40385 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40386 = lns__$2;
var G__40387 = acc__$2;
var G__40388 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40385;
G__40278__$1 = G__40386;
acc__$1 = G__40387;
block_acc__$1 = G__40388;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null))){
var vec__40310 = aerial.hanami.md2hiccup.parse_code.call(null,prev_lns__$1);
var code = cljs.core.nth.call(null,vec__40310,(0),null);
var rest = cljs.core.nth.call(null,vec__40310,(1),null);
var G__40389 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40390 = rest;
var G__40391 = cljs.core.conj.call(null,acc__$2,code);
var G__40392 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40389;
G__40278__$1 = G__40390;
acc__$1 = G__40391;
block_acc__$1 = G__40392;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,transition], null))){
var G__40393 = new cljs.core.Keyword(null,"paragraph","paragraph",296707709);
var G__40394 = lns__$2;
var G__40395 = acc__$2;
var G__40396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ln__$1], null);
state__$1 = G__40393;
G__40278__$1 = G__40394;
acc__$1 = G__40395;
block_acc__$1 = G__40396;
continue;
} else {
if(cljs.core._EQ_.call(null,state__$2,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"old-header-1","old-header-1",-1585186270),transition)){
var G__40397 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40398 = lns__$2;
var G__40399 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_old_header.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),block_acc__$2));
var G__40400 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40397;
G__40278__$1 = G__40398;
acc__$1 = G__40399;
block_acc__$1 = G__40400;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"old-header-2","old-header-2",972017123),transition)){
var G__40401 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40402 = lns__$2;
var G__40403 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_old_header.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728),block_acc__$2));
var G__40404 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40401;
G__40278__$1 = G__40402;
acc__$1 = G__40403;
block_acc__$1 = G__40404;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),transition)){
var G__40405 = new cljs.core.Keyword(null,"paragraph","paragraph",296707709);
var G__40406 = lns__$2;
var G__40407 = acc__$2;
var G__40408 = cljs.core.conj.call(null,block_acc__$2,ln__$1);
state__$1 = G__40405;
G__40278__$1 = G__40406;
acc__$1 = G__40407;
block_acc__$1 = G__40408;
continue;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end-of-file","end-of-file",501920419),transition)){
return cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_paragraph.call(null,block_acc__$2));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-line","empty-line",1962442988),transition)){
var G__40410 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40411 = lns__$2;
var G__40412 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_paragraph.call(null,block_acc__$2));
var G__40413 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40410;
G__40278__$1 = G__40411;
acc__$1 = G__40412;
block_acc__$1 = G__40413;
continue;
} else {
var G__40414 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40415 = prev_lns__$1;
var G__40416 = cljs.core.conj.call(null,acc__$2,aerial.hanami.md2hiccup.parse_paragraph.call(null,block_acc__$2));
var G__40417 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40414;
G__40278__$1 = G__40415;
acc__$1 = G__40416;
block_acc__$1 = G__40417;
continue;

}
}
}
}
}
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"empty-line","empty-line",1962442988))){
var G__40418 = state__$2;
var G__40419 = lns__$2;
var G__40420 = with_paragraph.call(null,acc__$2);
var G__40421 = block_acc__$2;
state__$1 = G__40418;
G__40278__$1 = G__40419;
acc__$1 = G__40420;
block_acc__$1 = G__40421;
continue;
} else {
if(cljs.core._EQ_.call(null,transition,new cljs.core.Keyword(null,"end-of-file","end-of-file",501920419))){
return acc__$2;
} else {
var G__40422 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__40423 = lns__$2;
var G__40424 = with_paragraph.call(null,acc__$2);
var G__40425 = cljs.core.PersistentVector.EMPTY;
state__$1 = G__40422;
G__40278__$1 = G__40423;
acc__$1 = G__40424;
block_acc__$1 = G__40425;
continue;

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
break;
}
});
aerial.hanami.md2hiccup.parse = (function aerial$hanami$md2hiccup$parse(s){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md","div.md",1540365753)], null),aerial.hanami.md2hiccup._STAR_parse.call(null,clojure.string.split.call(null,s,/(\r\n|\n|\r)/)));
});
aerial.hanami.md2hiccup.parse.call(null,"\n``app.js``\n```js\n(function() {\n    var BOX_URL = 'https://myapp.aidbox.io';\n```\n");

//# sourceMappingURL=md2hiccup.js.map?rel=1637533439277
