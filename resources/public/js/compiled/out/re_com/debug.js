// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__35091){
var map__35092 = p__35091;
var map__35092__$1 = (((((!((map__35092 == null))))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var args = map__35092__$1;
var src = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5720__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var user_ref_fn = temp__5720__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__35094 = src;
var map__35094__$1 = (((((!((map__35094 == null))))?(((((map__35094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35094):map__35094);
var file = cljs.core.get.call(null,map__35094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__35096 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__35096,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__35096;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__35098 = arguments.length;
switch (G__35098) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__35102_35126 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__35101_SHARP_,p2__35100_SHARP_){
return cljs.core.assoc.call(null,p2__35100_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__35101_SHARP_ + (1)));
}),stack));
var chunk__35103_35127 = null;
var count__35104_35128 = (0);
var i__35105_35129 = (0);
while(true){
if((i__35105_35129 < count__35104_35128)){
var map__35116_35130 = cljs.core._nth.call(null,chunk__35103_35127,i__35105_35129);
var map__35116_35131__$1 = (((((!((map__35116_35130 == null))))?(((((map__35116_35130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116_35130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116_35130):map__35116_35130);
var i_35132 = cljs.core.get.call(null,map__35116_35131__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_35133 = cljs.core.get.call(null,map__35116_35131__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_35134 = cljs.core.get.call(null,map__35116_35131__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_35135 = cljs.core.get.call(null,map__35116_35131__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_35136 = cljs.core.get.call(null,map__35116_35131__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_35134)){
if(cljs.core.truth_(src_35135)){
var vec__35118_35137 = clojure.string.split.call(null,src_35135,/:/);
var file_35138 = cljs.core.nth.call(null,vec__35118_35137,(0),null);
var line_35139 = cljs.core.nth.call(null,vec__35118_35137,(1),null);
if(cljs.core.truth_(args_35136)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35132),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35134)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_35138),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35139),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_35136,el_35133);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35132),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35134)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_35138),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35139),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_35133);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35132),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35134)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_35136,el_35133);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35132),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_35133);
}


var G__35140 = seq__35102_35126;
var G__35141 = chunk__35103_35127;
var G__35142 = count__35104_35128;
var G__35143 = (i__35105_35129 + (1));
seq__35102_35126 = G__35140;
chunk__35103_35127 = G__35141;
count__35104_35128 = G__35142;
i__35105_35129 = G__35143;
continue;
} else {
var temp__5720__auto___35144 = cljs.core.seq.call(null,seq__35102_35126);
if(temp__5720__auto___35144){
var seq__35102_35145__$1 = temp__5720__auto___35144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35102_35145__$1)){
var c__4556__auto___35146 = cljs.core.chunk_first.call(null,seq__35102_35145__$1);
var G__35147 = cljs.core.chunk_rest.call(null,seq__35102_35145__$1);
var G__35148 = c__4556__auto___35146;
var G__35149 = cljs.core.count.call(null,c__4556__auto___35146);
var G__35150 = (0);
seq__35102_35126 = G__35147;
chunk__35103_35127 = G__35148;
count__35104_35128 = G__35149;
i__35105_35129 = G__35150;
continue;
} else {
var map__35121_35151 = cljs.core.first.call(null,seq__35102_35145__$1);
var map__35121_35152__$1 = (((((!((map__35121_35151 == null))))?(((((map__35121_35151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35121_35151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35121_35151):map__35121_35151);
var i_35153 = cljs.core.get.call(null,map__35121_35152__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_35154 = cljs.core.get.call(null,map__35121_35152__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_35155 = cljs.core.get.call(null,map__35121_35152__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_35156 = cljs.core.get.call(null,map__35121_35152__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_35157 = cljs.core.get.call(null,map__35121_35152__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_35155)){
if(cljs.core.truth_(src_35156)){
var vec__35123_35158 = clojure.string.split.call(null,src_35156,/:/);
var file_35159 = cljs.core.nth.call(null,vec__35123_35158,(0),null);
var line_35160 = cljs.core.nth.call(null,vec__35123_35158,(1),null);
if(cljs.core.truth_(args_35157)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35153),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35155)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_35159),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35160),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_35157,el_35154);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35153),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35155)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_35159),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35160),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_35154);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35153),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_35155)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_35157,el_35154);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_35153),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_35154);
}


var G__35161 = cljs.core.next.call(null,seq__35102_35145__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__35102_35126 = G__35161;
chunk__35103_35127 = G__35162;
count__35104_35128 = G__35163;
i__35105_35129 = G__35164;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__35165 = cljs.core.seq.call(null,problems);
var chunk__35166 = null;
var count__35167 = (0);
var i__35168 = (0);
while(true){
if((i__35168 < count__35167)){
var map__35175 = cljs.core._nth.call(null,chunk__35166,i__35168);
var map__35175__$1 = (((((!((map__35175 == null))))?(((((map__35175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35175):map__35175);
var problem = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__35177_35181 = problem;
var G__35177_35182__$1 = (((G__35177_35181 instanceof cljs.core.Keyword))?G__35177_35181.fqn:null);
switch (G__35177_35182__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__35184 = seq__35165;
var G__35185 = chunk__35166;
var G__35186 = count__35167;
var G__35187 = (i__35168 + (1));
seq__35165 = G__35184;
chunk__35166 = G__35185;
count__35167 = G__35186;
i__35168 = G__35187;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35165);
if(temp__5720__auto__){
var seq__35165__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35165__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35165__$1);
var G__35188 = cljs.core.chunk_rest.call(null,seq__35165__$1);
var G__35189 = c__4556__auto__;
var G__35190 = cljs.core.count.call(null,c__4556__auto__);
var G__35191 = (0);
seq__35165 = G__35188;
chunk__35166 = G__35189;
count__35167 = G__35190;
i__35168 = G__35191;
continue;
} else {
var map__35178 = cljs.core.first.call(null,seq__35165__$1);
var map__35178__$1 = (((((!((map__35178 == null))))?(((((map__35178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35178):map__35178);
var problem = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__35180_35192 = problem;
var G__35180_35193__$1 = (((G__35180_35192 instanceof cljs.core.Keyword))?G__35180_35192.fqn:null);
switch (G__35180_35193__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__35195 = cljs.core.next.call(null,seq__35165__$1);
var G__35196 = null;
var G__35197 = (0);
var G__35198 = (0);
seq__35165 = G__35195;
chunk__35166 = G__35196;
count__35167 = G__35197;
i__35168 = G__35198;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__35199){
var map__35200 = p__35199;
var map__35200__$1 = (((((!((map__35200 == null))))?(((((map__35200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35200):map__35200);
var src = map__35200__$1;
var file = cljs.core.get.call(null,map__35200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35200__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35209 = arguments.length;
var i__4737__auto___35210 = (0);
while(true){
if((i__4737__auto___35210 < len__4736__auto___35209)){
args__4742__auto__.push((arguments[i__4737__auto___35210]));

var G__35211 = (i__4737__auto___35210 + (1));
i__4737__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__35203){
var map__35204 = p__35203;
var map__35204__$1 = (((((!((map__35204 == null))))?(((((map__35204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35204):map__35204);
var problems = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__35212__delegate = function (p__35206){
var map__35207 = p__35206;
var map__35207__$1 = (((((!((map__35207 == null))))?(((((map__35207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35207):map__35207);
var problems__$1 = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__35212 = function (var_args){
var p__35206 = null;
if (arguments.length > 0) {
var G__35213__i = 0, G__35213__a = new Array(arguments.length -  0);
while (G__35213__i < G__35213__a.length) {G__35213__a[G__35213__i] = arguments[G__35213__i + 0]; ++G__35213__i;}
  p__35206 = new cljs.core.IndexedSeq(G__35213__a,0,null);
} 
return G__35212__delegate.call(this,p__35206);};
G__35212.cljs$lang$maxFixedArity = 0;
G__35212.cljs$lang$applyTo = (function (arglist__35214){
var p__35206 = cljs.core.seq(arglist__35214);
return G__35212__delegate(p__35206);
});
G__35212.cljs$core$IFn$_invoke$arity$variadic = G__35212__delegate;
return G__35212;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq35202){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35202));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35222 = arguments.length;
var i__4737__auto___35223 = (0);
while(true){
if((i__4737__auto___35223 < len__4736__auto___35222)){
args__4742__auto__.push((arguments[i__4737__auto___35223]));

var G__35224 = (i__4737__auto___35223 + (1));
i__4737__auto___35223 = G__35224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__35216){
var map__35217 = p__35216;
var map__35217__$1 = (((((!((map__35217 == null))))?(((((map__35217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35217):map__35217);
var component = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__35225__delegate = function (p__35219){
var map__35220 = p__35219;
var map__35220__$1 = (((((!((map__35220 == null))))?(((((map__35220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35220):map__35220);
var component__$1 = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__35225 = function (var_args){
var p__35219 = null;
if (arguments.length > 0) {
var G__35226__i = 0, G__35226__a = new Array(arguments.length -  0);
while (G__35226__i < G__35226__a.length) {G__35226__a[G__35226__i] = arguments[G__35226__i + 0]; ++G__35226__i;}
  p__35219 = new cljs.core.IndexedSeq(G__35226__a,0,null);
} 
return G__35225__delegate.call(this,p__35219);};
G__35225.cljs$lang$maxFixedArity = 0;
G__35225.cljs$lang$applyTo = (function (arglist__35227){
var p__35219 = cljs.core.seq(arglist__35227);
return G__35225__delegate(p__35219);
});
G__35225.cljs$core$IFn$_invoke$arity$variadic = G__35225__delegate;
return G__35225;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq35215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35215));
}));


//# sourceMappingURL=debug.js.map?rel=1637533436645
