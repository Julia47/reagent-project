// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e46157){if((e46157 instanceof Error)){
var e = e46157;
return "Error: Unable to stringify";
} else {
throw e46157;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46160 = arguments.length;
switch (G__46160) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46158_SHARP_){
if(typeof p1__46158_SHARP_ === 'string'){
return p1__46158_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46158_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46163 = arguments.length;
var i__4737__auto___46164 = (0);
while(true){
if((i__4737__auto___46164 < len__4736__auto___46163)){
args__4742__auto__.push((arguments[i__4737__auto___46164]));

var G__46165 = (i__4737__auto___46164 + (1));
i__4737__auto___46164 = G__46165;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46162){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46162));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46167 = arguments.length;
var i__4737__auto___46168 = (0);
while(true){
if((i__4737__auto___46168 < len__4736__auto___46167)){
args__4742__auto__.push((arguments[i__4737__auto___46168]));

var G__46169 = (i__4737__auto___46168 + (1));
i__4737__auto___46168 = G__46169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46166){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46166));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46170){
var map__46171 = p__46170;
var map__46171__$1 = (((((!((map__46171 == null))))?(((((map__46171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46171):map__46171);
var message = cljs.core.get.call(null,map__46171__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46171__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__42177__auto___46250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_46222){
var state_val_46223 = (state_46222[(1)]);
if((state_val_46223 === (7))){
var inst_46218 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46224_46251 = state_46222__$1;
(statearr_46224_46251[(2)] = inst_46218);

(statearr_46224_46251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (1))){
var state_46222__$1 = state_46222;
var statearr_46225_46252 = state_46222__$1;
(statearr_46225_46252[(2)] = null);

(statearr_46225_46252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (4))){
var inst_46175 = (state_46222[(7)]);
var inst_46175__$1 = (state_46222[(2)]);
var state_46222__$1 = (function (){var statearr_46226 = state_46222;
(statearr_46226[(7)] = inst_46175__$1);

return statearr_46226;
})();
if(cljs.core.truth_(inst_46175__$1)){
var statearr_46227_46253 = state_46222__$1;
(statearr_46227_46253[(1)] = (5));

} else {
var statearr_46228_46254 = state_46222__$1;
(statearr_46228_46254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (15))){
var inst_46182 = (state_46222[(8)]);
var inst_46197 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46182);
var inst_46198 = cljs.core.first.call(null,inst_46197);
var inst_46199 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46198);
var inst_46200 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46199)].join('');
var inst_46201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46200);
var state_46222__$1 = state_46222;
var statearr_46229_46255 = state_46222__$1;
(statearr_46229_46255[(2)] = inst_46201);

(statearr_46229_46255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (13))){
var inst_46206 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46230_46256 = state_46222__$1;
(statearr_46230_46256[(2)] = inst_46206);

(statearr_46230_46256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (6))){
var state_46222__$1 = state_46222;
var statearr_46231_46257 = state_46222__$1;
(statearr_46231_46257[(2)] = null);

(statearr_46231_46257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (17))){
var inst_46204 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46232_46258 = state_46222__$1;
(statearr_46232_46258[(2)] = inst_46204);

(statearr_46232_46258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (3))){
var inst_46220 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46222__$1,inst_46220);
} else {
if((state_val_46223 === (12))){
var inst_46181 = (state_46222[(9)]);
var inst_46195 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46181,opts);
var state_46222__$1 = state_46222;
if(inst_46195){
var statearr_46233_46259 = state_46222__$1;
(statearr_46233_46259[(1)] = (15));

} else {
var statearr_46234_46260 = state_46222__$1;
(statearr_46234_46260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (2))){
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46222__$1,(4),ch);
} else {
if((state_val_46223 === (11))){
var inst_46182 = (state_46222[(8)]);
var inst_46187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46188 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46182);
var inst_46189 = cljs.core.async.timeout.call(null,(1000));
var inst_46190 = [inst_46188,inst_46189];
var inst_46191 = (new cljs.core.PersistentVector(null,2,(5),inst_46187,inst_46190,null));
var state_46222__$1 = state_46222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46222__$1,(14),inst_46191);
} else {
if((state_val_46223 === (9))){
var inst_46182 = (state_46222[(8)]);
var inst_46208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46182);
var inst_46210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46209);
var inst_46211 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46210)].join('');
var inst_46212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46211);
var state_46222__$1 = (function (){var statearr_46235 = state_46222;
(statearr_46235[(10)] = inst_46208);

return statearr_46235;
})();
var statearr_46236_46261 = state_46222__$1;
(statearr_46236_46261[(2)] = inst_46212);

(statearr_46236_46261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (5))){
var inst_46175 = (state_46222[(7)]);
var inst_46177 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46178 = (new cljs.core.PersistentArrayMap(null,2,inst_46177,null));
var inst_46179 = (new cljs.core.PersistentHashSet(null,inst_46178,null));
var inst_46180 = figwheel.client.focus_msgs.call(null,inst_46179,inst_46175);
var inst_46181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46180);
var inst_46182 = cljs.core.first.call(null,inst_46180);
var inst_46183 = figwheel.client.autoload_QMARK_.call(null);
var state_46222__$1 = (function (){var statearr_46237 = state_46222;
(statearr_46237[(8)] = inst_46182);

(statearr_46237[(9)] = inst_46181);

return statearr_46237;
})();
if(cljs.core.truth_(inst_46183)){
var statearr_46238_46262 = state_46222__$1;
(statearr_46238_46262[(1)] = (8));

} else {
var statearr_46239_46263 = state_46222__$1;
(statearr_46239_46263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (14))){
var inst_46193 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46240_46264 = state_46222__$1;
(statearr_46240_46264[(2)] = inst_46193);

(statearr_46240_46264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (16))){
var state_46222__$1 = state_46222;
var statearr_46241_46265 = state_46222__$1;
(statearr_46241_46265[(2)] = null);

(statearr_46241_46265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (10))){
var inst_46214 = (state_46222[(2)]);
var state_46222__$1 = (function (){var statearr_46242 = state_46222;
(statearr_46242[(11)] = inst_46214);

return statearr_46242;
})();
var statearr_46243_46266 = state_46222__$1;
(statearr_46243_46266[(2)] = null);

(statearr_46243_46266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (8))){
var inst_46181 = (state_46222[(9)]);
var inst_46185 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46181,opts);
var state_46222__$1 = state_46222;
if(cljs.core.truth_(inst_46185)){
var statearr_46244_46267 = state_46222__$1;
(statearr_46244_46267[(1)] = (11));

} else {
var statearr_46245_46268 = state_46222__$1;
(statearr_46245_46268[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____0 = (function (){
var statearr_46246 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46246[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__);

(statearr_46246[(1)] = (1));

return statearr_46246;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____1 = (function (state_46222){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_46222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e46247){if((e46247 instanceof Object)){
var ex__42086__auto__ = e46247;
var statearr_46248_46269 = state_46222;
(statearr_46248_46269[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46270 = state_46222;
state_46222 = G__46270;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__ = function(state_46222){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____1.call(this,state_46222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42083__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_46249 = f__42178__auto__.call(null);
(statearr_46249[(6)] = c__42177__auto___46250);

return statearr_46249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46271_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46271_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46277 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46273 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46275 = true;
var _STAR_print_fn_STAR__temp_val__46276 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46275);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46276);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46274);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46273);
}}catch (e46272){if((e46272 instanceof Error)){
var e = e46272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46277], null));
} else {
var e = e46272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46278){
var map__46279 = p__46278;
var map__46279__$1 = (((((!((map__46279 == null))))?(((((map__46279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46279):map__46279);
var opts = map__46279__$1;
var build_id = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__46281){
var vec__46282 = p__46281;
var seq__46283 = cljs.core.seq.call(null,vec__46282);
var first__46284 = cljs.core.first.call(null,seq__46283);
var seq__46283__$1 = cljs.core.next.call(null,seq__46283);
var map__46285 = first__46284;
var map__46285__$1 = (((((!((map__46285 == null))))?(((((map__46285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46285):map__46285);
var msg = map__46285__$1;
var msg_name = cljs.core.get.call(null,map__46285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46283__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46287){
var vec__46288 = p__46287;
var seq__46289 = cljs.core.seq.call(null,vec__46288);
var first__46290 = cljs.core.first.call(null,seq__46289);
var seq__46289__$1 = cljs.core.next.call(null,seq__46289);
var map__46291 = first__46290;
var map__46291__$1 = (((((!((map__46291 == null))))?(((((map__46291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46291):map__46291);
var msg = map__46291__$1;
var msg_name = cljs.core.get.call(null,map__46291__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46289__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46293){
var map__46294 = p__46293;
var map__46294__$1 = (((((!((map__46294 == null))))?(((((map__46294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46294):map__46294);
var on_compile_warning = cljs.core.get.call(null,map__46294__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46294__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__46296){
var vec__46297 = p__46296;
var seq__46298 = cljs.core.seq.call(null,vec__46297);
var first__46299 = cljs.core.first.call(null,seq__46298);
var seq__46298__$1 = cljs.core.next.call(null,seq__46298);
var map__46300 = first__46299;
var map__46300__$1 = (((((!((map__46300 == null))))?(((((map__46300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46300):map__46300);
var msg = map__46300__$1;
var msg_name = cljs.core.get.call(null,map__46300__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46298__$1;
var pred__46302 = cljs.core._EQ_;
var expr__46303 = msg_name;
if(cljs.core.truth_(pred__46302.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46303))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46302.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46303))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_46392){
var state_val_46393 = (state_46392[(1)]);
if((state_val_46393 === (7))){
var inst_46312 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
if(cljs.core.truth_(inst_46312)){
var statearr_46394_46441 = state_46392__$1;
(statearr_46394_46441[(1)] = (8));

} else {
var statearr_46395_46442 = state_46392__$1;
(statearr_46395_46442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (20))){
var inst_46386 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46396_46443 = state_46392__$1;
(statearr_46396_46443[(2)] = inst_46386);

(statearr_46396_46443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (27))){
var inst_46382 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46397_46444 = state_46392__$1;
(statearr_46397_46444[(2)] = inst_46382);

(statearr_46397_46444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (1))){
var inst_46305 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46392__$1 = state_46392;
if(cljs.core.truth_(inst_46305)){
var statearr_46398_46445 = state_46392__$1;
(statearr_46398_46445[(1)] = (2));

} else {
var statearr_46399_46446 = state_46392__$1;
(statearr_46399_46446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (24))){
var inst_46384 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46400_46447 = state_46392__$1;
(statearr_46400_46447[(2)] = inst_46384);

(statearr_46400_46447[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (4))){
var inst_46390 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46392__$1,inst_46390);
} else {
if((state_val_46393 === (15))){
var inst_46388 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46401_46448 = state_46392__$1;
(statearr_46401_46448[(2)] = inst_46388);

(statearr_46401_46448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (21))){
var inst_46341 = (state_46392[(2)]);
var inst_46342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46343 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46342);
var state_46392__$1 = (function (){var statearr_46402 = state_46392;
(statearr_46402[(7)] = inst_46341);

return statearr_46402;
})();
var statearr_46403_46449 = state_46392__$1;
(statearr_46403_46449[(2)] = inst_46343);

(statearr_46403_46449[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (31))){
var inst_46371 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46371){
var statearr_46404_46450 = state_46392__$1;
(statearr_46404_46450[(1)] = (34));

} else {
var statearr_46405_46451 = state_46392__$1;
(statearr_46405_46451[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (32))){
var inst_46380 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46406_46452 = state_46392__$1;
(statearr_46406_46452[(2)] = inst_46380);

(statearr_46406_46452[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (33))){
var inst_46367 = (state_46392[(2)]);
var inst_46368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46369 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46368);
var state_46392__$1 = (function (){var statearr_46407 = state_46392;
(statearr_46407[(8)] = inst_46367);

return statearr_46407;
})();
var statearr_46408_46453 = state_46392__$1;
(statearr_46408_46453[(2)] = inst_46369);

(statearr_46408_46453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (13))){
var inst_46326 = figwheel.client.heads_up.clear.call(null);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(16),inst_46326);
} else {
if((state_val_46393 === (22))){
var inst_46347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46348 = figwheel.client.heads_up.append_warning_message.call(null,inst_46347);
var state_46392__$1 = state_46392;
var statearr_46409_46454 = state_46392__$1;
(statearr_46409_46454[(2)] = inst_46348);

(statearr_46409_46454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (36))){
var inst_46378 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46410_46455 = state_46392__$1;
(statearr_46410_46455[(2)] = inst_46378);

(statearr_46410_46455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (29))){
var inst_46358 = (state_46392[(2)]);
var inst_46359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46360 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46359);
var state_46392__$1 = (function (){var statearr_46411 = state_46392;
(statearr_46411[(9)] = inst_46358);

return statearr_46411;
})();
var statearr_46412_46456 = state_46392__$1;
(statearr_46412_46456[(2)] = inst_46360);

(statearr_46412_46456[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (6))){
var inst_46307 = (state_46392[(10)]);
var state_46392__$1 = state_46392;
var statearr_46413_46457 = state_46392__$1;
(statearr_46413_46457[(2)] = inst_46307);

(statearr_46413_46457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (28))){
var inst_46354 = (state_46392[(2)]);
var inst_46355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46356 = figwheel.client.heads_up.display_warning.call(null,inst_46355);
var state_46392__$1 = (function (){var statearr_46414 = state_46392;
(statearr_46414[(11)] = inst_46354);

return statearr_46414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(29),inst_46356);
} else {
if((state_val_46393 === (25))){
var inst_46352 = figwheel.client.heads_up.clear.call(null);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(28),inst_46352);
} else {
if((state_val_46393 === (34))){
var inst_46373 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(37),inst_46373);
} else {
if((state_val_46393 === (17))){
var inst_46332 = (state_46392[(2)]);
var inst_46333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46334 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46333);
var state_46392__$1 = (function (){var statearr_46415 = state_46392;
(statearr_46415[(12)] = inst_46332);

return statearr_46415;
})();
var statearr_46416_46458 = state_46392__$1;
(statearr_46416_46458[(2)] = inst_46334);

(statearr_46416_46458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (3))){
var inst_46324 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46324){
var statearr_46417_46459 = state_46392__$1;
(statearr_46417_46459[(1)] = (13));

} else {
var statearr_46418_46460 = state_46392__$1;
(statearr_46418_46460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (12))){
var inst_46320 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46419_46461 = state_46392__$1;
(statearr_46419_46461[(2)] = inst_46320);

(statearr_46419_46461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (2))){
var inst_46307 = (state_46392[(10)]);
var inst_46307__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46392__$1 = (function (){var statearr_46420 = state_46392;
(statearr_46420[(10)] = inst_46307__$1);

return statearr_46420;
})();
if(cljs.core.truth_(inst_46307__$1)){
var statearr_46421_46462 = state_46392__$1;
(statearr_46421_46462[(1)] = (5));

} else {
var statearr_46422_46463 = state_46392__$1;
(statearr_46422_46463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (23))){
var inst_46350 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46350){
var statearr_46423_46464 = state_46392__$1;
(statearr_46423_46464[(1)] = (25));

} else {
var statearr_46424_46465 = state_46392__$1;
(statearr_46424_46465[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (35))){
var state_46392__$1 = state_46392;
var statearr_46425_46466 = state_46392__$1;
(statearr_46425_46466[(2)] = null);

(statearr_46425_46466[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (19))){
var inst_46345 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46345){
var statearr_46426_46467 = state_46392__$1;
(statearr_46426_46467[(1)] = (22));

} else {
var statearr_46427_46468 = state_46392__$1;
(statearr_46427_46468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (11))){
var inst_46316 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46428_46469 = state_46392__$1;
(statearr_46428_46469[(2)] = inst_46316);

(statearr_46428_46469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (9))){
var inst_46318 = figwheel.client.heads_up.clear.call(null);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(12),inst_46318);
} else {
if((state_val_46393 === (5))){
var inst_46309 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46392__$1 = state_46392;
var statearr_46429_46470 = state_46392__$1;
(statearr_46429_46470[(2)] = inst_46309);

(statearr_46429_46470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (14))){
var inst_46336 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46336){
var statearr_46430_46471 = state_46392__$1;
(statearr_46430_46471[(1)] = (18));

} else {
var statearr_46431_46472 = state_46392__$1;
(statearr_46431_46472[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (26))){
var inst_46362 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46392__$1 = state_46392;
if(inst_46362){
var statearr_46432_46473 = state_46392__$1;
(statearr_46432_46473[(1)] = (30));

} else {
var statearr_46433_46474 = state_46392__$1;
(statearr_46433_46474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (16))){
var inst_46328 = (state_46392[(2)]);
var inst_46329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46330 = figwheel.client.heads_up.display_exception.call(null,inst_46329);
var state_46392__$1 = (function (){var statearr_46434 = state_46392;
(statearr_46434[(13)] = inst_46328);

return statearr_46434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(17),inst_46330);
} else {
if((state_val_46393 === (30))){
var inst_46364 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46365 = figwheel.client.heads_up.display_warning.call(null,inst_46364);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(33),inst_46365);
} else {
if((state_val_46393 === (10))){
var inst_46322 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46435_46475 = state_46392__$1;
(statearr_46435_46475[(2)] = inst_46322);

(statearr_46435_46475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (18))){
var inst_46338 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46339 = figwheel.client.heads_up.display_exception.call(null,inst_46338);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(21),inst_46339);
} else {
if((state_val_46393 === (37))){
var inst_46375 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46436_46476 = state_46392__$1;
(statearr_46436_46476[(2)] = inst_46375);

(statearr_46436_46476[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (8))){
var inst_46314 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(11),inst_46314);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____0 = (function (){
var statearr_46437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46437[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__);

(statearr_46437[(1)] = (1));

return statearr_46437;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____1 = (function (state_46392){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_46392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e46438){if((e46438 instanceof Object)){
var ex__42086__auto__ = e46438;
var statearr_46439_46477 = state_46392;
(statearr_46439_46477[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46478 = state_46392;
state_46392 = G__46478;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__ = function(state_46392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____1.call(this,state_46392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_46440 = f__42178__auto__.call(null);
(statearr_46440[(6)] = c__42177__auto__);

return statearr_46440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42177__auto___46507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_46493){
var state_val_46494 = (state_46493[(1)]);
if((state_val_46494 === (1))){
var state_46493__$1 = state_46493;
var statearr_46495_46508 = state_46493__$1;
(statearr_46495_46508[(2)] = null);

(statearr_46495_46508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46494 === (2))){
var state_46493__$1 = state_46493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46493__$1,(4),ch);
} else {
if((state_val_46494 === (3))){
var inst_46491 = (state_46493[(2)]);
var state_46493__$1 = state_46493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46493__$1,inst_46491);
} else {
if((state_val_46494 === (4))){
var inst_46481 = (state_46493[(7)]);
var inst_46481__$1 = (state_46493[(2)]);
var state_46493__$1 = (function (){var statearr_46496 = state_46493;
(statearr_46496[(7)] = inst_46481__$1);

return statearr_46496;
})();
if(cljs.core.truth_(inst_46481__$1)){
var statearr_46497_46509 = state_46493__$1;
(statearr_46497_46509[(1)] = (5));

} else {
var statearr_46498_46510 = state_46493__$1;
(statearr_46498_46510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46494 === (5))){
var inst_46481 = (state_46493[(7)]);
var inst_46483 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46481);
var state_46493__$1 = state_46493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46493__$1,(8),inst_46483);
} else {
if((state_val_46494 === (6))){
var state_46493__$1 = state_46493;
var statearr_46499_46511 = state_46493__$1;
(statearr_46499_46511[(2)] = null);

(statearr_46499_46511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46494 === (7))){
var inst_46489 = (state_46493[(2)]);
var state_46493__$1 = state_46493;
var statearr_46500_46512 = state_46493__$1;
(statearr_46500_46512[(2)] = inst_46489);

(statearr_46500_46512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46494 === (8))){
var inst_46485 = (state_46493[(2)]);
var state_46493__$1 = (function (){var statearr_46501 = state_46493;
(statearr_46501[(8)] = inst_46485);

return statearr_46501;
})();
var statearr_46502_46513 = state_46493__$1;
(statearr_46502_46513[(2)] = null);

(statearr_46502_46513[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42083__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42083__auto____0 = (function (){
var statearr_46503 = [null,null,null,null,null,null,null,null,null];
(statearr_46503[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42083__auto__);

(statearr_46503[(1)] = (1));

return statearr_46503;
});
var figwheel$client$heads_up_plugin_$_state_machine__42083__auto____1 = (function (state_46493){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_46493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e46504){if((e46504 instanceof Object)){
var ex__42086__auto__ = e46504;
var statearr_46505_46514 = state_46493;
(statearr_46505_46514[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46515 = state_46493;
state_46493 = G__46515;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42083__auto__ = function(state_46493){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42083__auto____1.call(this,state_46493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42083__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42083__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_46506 = f__42178__auto__.call(null);
(statearr_46506[(6)] = c__42177__auto___46507);

return statearr_46506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_46521){
var state_val_46522 = (state_46521[(1)]);
if((state_val_46522 === (1))){
var inst_46516 = cljs.core.async.timeout.call(null,(3000));
var state_46521__$1 = state_46521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46521__$1,(2),inst_46516);
} else {
if((state_val_46522 === (2))){
var inst_46518 = (state_46521[(2)]);
var inst_46519 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46521__$1 = (function (){var statearr_46523 = state_46521;
(statearr_46523[(7)] = inst_46518);

return statearr_46523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46521__$1,inst_46519);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____0 = (function (){
var statearr_46524 = [null,null,null,null,null,null,null,null];
(statearr_46524[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__);

(statearr_46524[(1)] = (1));

return statearr_46524;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____1 = (function (state_46521){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_46521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e46525){if((e46525 instanceof Object)){
var ex__42086__auto__ = e46525;
var statearr_46526_46528 = state_46521;
(statearr_46526_46528[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46529 = state_46521;
state_46521 = G__46529;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__ = function(state_46521){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____1.call(this,state_46521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42083__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_46527 = f__42178__auto__.call(null);
(statearr_46527[(6)] = c__42177__auto__);

return statearr_46527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_46536){
var state_val_46537 = (state_46536[(1)]);
if((state_val_46537 === (1))){
var inst_46530 = cljs.core.async.timeout.call(null,(2000));
var state_46536__$1 = state_46536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46536__$1,(2),inst_46530);
} else {
if((state_val_46537 === (2))){
var inst_46532 = (state_46536[(2)]);
var inst_46533 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46534 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46533);
var state_46536__$1 = (function (){var statearr_46538 = state_46536;
(statearr_46538[(7)] = inst_46532);

return statearr_46538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46536__$1,inst_46534);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____0 = (function (){
var statearr_46539 = [null,null,null,null,null,null,null,null];
(statearr_46539[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__);

(statearr_46539[(1)] = (1));

return statearr_46539;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____1 = (function (state_46536){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_46536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e46540){if((e46540 instanceof Object)){
var ex__42086__auto__ = e46540;
var statearr_46541_46543 = state_46536;
(statearr_46541_46543[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46544 = state_46536;
state_46536 = G__46544;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__ = function(state_46536){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____1.call(this,state_46536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_46542 = f__42178__auto__.call(null);
(statearr_46542[(6)] = c__42177__auto__);

return statearr_46542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46545){
var map__46546 = p__46545;
var map__46546__$1 = (((((!((map__46546 == null))))?(((((map__46546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46546):map__46546);
var file = cljs.core.get.call(null,map__46546__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46546__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46546__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46548 = "";
var G__46548__$1 = (cljs.core.truth_(file)?[G__46548,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46548);
var G__46548__$2 = (cljs.core.truth_(line)?[G__46548__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46548__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__46548__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46548__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46549){
var map__46550 = p__46549;
var map__46550__$1 = (((((!((map__46550 == null))))?(((((map__46550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46550):map__46550);
var ed = map__46550__$1;
var exception_data = cljs.core.get.call(null,map__46550__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46550__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_46553 = (function (){var G__46552 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46552)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__46552;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_46553);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46554){
var map__46555 = p__46554;
var map__46555__$1 = (((((!((map__46555 == null))))?(((((map__46555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46555):map__46555);
var w = map__46555__$1;
var message = cljs.core.get.call(null,map__46555__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46557 = cljs.core.seq.call(null,plugins);
var chunk__46558 = null;
var count__46559 = (0);
var i__46560 = (0);
while(true){
if((i__46560 < count__46559)){
var vec__46567 = cljs.core._nth.call(null,chunk__46558,i__46560);
var k = cljs.core.nth.call(null,vec__46567,(0),null);
var plugin = cljs.core.nth.call(null,vec__46567,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46573 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46557,chunk__46558,count__46559,i__46560,pl_46573,vec__46567,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46573.call(null,msg_hist);
});})(seq__46557,chunk__46558,count__46559,i__46560,pl_46573,vec__46567,k,plugin))
);
} else {
}


var G__46574 = seq__46557;
var G__46575 = chunk__46558;
var G__46576 = count__46559;
var G__46577 = (i__46560 + (1));
seq__46557 = G__46574;
chunk__46558 = G__46575;
count__46559 = G__46576;
i__46560 = G__46577;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46557);
if(temp__5720__auto__){
var seq__46557__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46557__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__46557__$1);
var G__46578 = cljs.core.chunk_rest.call(null,seq__46557__$1);
var G__46579 = c__4556__auto__;
var G__46580 = cljs.core.count.call(null,c__4556__auto__);
var G__46581 = (0);
seq__46557 = G__46578;
chunk__46558 = G__46579;
count__46559 = G__46580;
i__46560 = G__46581;
continue;
} else {
var vec__46570 = cljs.core.first.call(null,seq__46557__$1);
var k = cljs.core.nth.call(null,vec__46570,(0),null);
var plugin = cljs.core.nth.call(null,vec__46570,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46582 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46557,chunk__46558,count__46559,i__46560,pl_46582,vec__46570,k,plugin,seq__46557__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46582.call(null,msg_hist);
});})(seq__46557,chunk__46558,count__46559,i__46560,pl_46582,vec__46570,k,plugin,seq__46557__$1,temp__5720__auto__))
);
} else {
}


var G__46583 = cljs.core.next.call(null,seq__46557__$1);
var G__46584 = null;
var G__46585 = (0);
var G__46586 = (0);
seq__46557 = G__46583;
chunk__46558 = G__46584;
count__46559 = G__46585;
i__46560 = G__46586;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__46588 = arguments.length;
switch (G__46588) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46589_46594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46590_46595 = null;
var count__46591_46596 = (0);
var i__46592_46597 = (0);
while(true){
if((i__46592_46597 < count__46591_46596)){
var msg_46598 = cljs.core._nth.call(null,chunk__46590_46595,i__46592_46597);
figwheel.client.socket.handle_incoming_message.call(null,msg_46598);


var G__46599 = seq__46589_46594;
var G__46600 = chunk__46590_46595;
var G__46601 = count__46591_46596;
var G__46602 = (i__46592_46597 + (1));
seq__46589_46594 = G__46599;
chunk__46590_46595 = G__46600;
count__46591_46596 = G__46601;
i__46592_46597 = G__46602;
continue;
} else {
var temp__5720__auto___46603 = cljs.core.seq.call(null,seq__46589_46594);
if(temp__5720__auto___46603){
var seq__46589_46604__$1 = temp__5720__auto___46603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46589_46604__$1)){
var c__4556__auto___46605 = cljs.core.chunk_first.call(null,seq__46589_46604__$1);
var G__46606 = cljs.core.chunk_rest.call(null,seq__46589_46604__$1);
var G__46607 = c__4556__auto___46605;
var G__46608 = cljs.core.count.call(null,c__4556__auto___46605);
var G__46609 = (0);
seq__46589_46594 = G__46606;
chunk__46590_46595 = G__46607;
count__46591_46596 = G__46608;
i__46592_46597 = G__46609;
continue;
} else {
var msg_46610 = cljs.core.first.call(null,seq__46589_46604__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46610);


var G__46611 = cljs.core.next.call(null,seq__46589_46604__$1);
var G__46612 = null;
var G__46613 = (0);
var G__46614 = (0);
seq__46589_46594 = G__46611;
chunk__46590_46595 = G__46612;
count__46591_46596 = G__46613;
i__46592_46597 = G__46614;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46619 = arguments.length;
var i__4737__auto___46620 = (0);
while(true){
if((i__4737__auto___46620 < len__4736__auto___46619)){
args__4742__auto__.push((arguments[i__4737__auto___46620]));

var G__46621 = (i__4737__auto___46620 + (1));
i__4737__auto___46620 = G__46621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46616){
var map__46617 = p__46616;
var map__46617__$1 = (((((!((map__46617 == null))))?(((((map__46617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46617):map__46617);
var opts = map__46617__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46615){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46615));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46622){if((e46622 instanceof Error)){
var e = e46622;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46622;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__46623){
var map__46624 = p__46623;
var map__46624__$1 = (((((!((map__46624 == null))))?(((((map__46624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46624):map__46624);
var msg_name = cljs.core.get.call(null,map__46624__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1637933618831
