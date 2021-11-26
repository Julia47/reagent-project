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
}catch (e37566){if((e37566 instanceof Error)){
var e = e37566;
return "Error: Unable to stringify";
} else {
throw e37566;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37569 = arguments.length;
switch (G__37569) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37567_SHARP_){
if(typeof p1__37567_SHARP_ === 'string'){
return p1__37567_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37567_SHARP_);
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
var len__4736__auto___37572 = arguments.length;
var i__4737__auto___37573 = (0);
while(true){
if((i__4737__auto___37573 < len__4736__auto___37572)){
args__4742__auto__.push((arguments[i__4737__auto___37573]));

var G__37574 = (i__4737__auto___37573 + (1));
i__4737__auto___37573 = G__37574;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37571){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37571));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37576 = arguments.length;
var i__4737__auto___37577 = (0);
while(true){
if((i__4737__auto___37577 < len__4736__auto___37576)){
args__4742__auto__.push((arguments[i__4737__auto___37577]));

var G__37578 = (i__4737__auto___37577 + (1));
i__4737__auto___37577 = G__37578;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37575));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37579){
var map__37580 = p__37579;
var map__37580__$1 = (((((!((map__37580 == null))))?(((((map__37580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37580):map__37580);
var message = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__35125__auto___37659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_37631){
var state_val_37632 = (state_37631[(1)]);
if((state_val_37632 === (7))){
var inst_37627 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37633_37660 = state_37631__$1;
(statearr_37633_37660[(2)] = inst_37627);

(statearr_37633_37660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (1))){
var state_37631__$1 = state_37631;
var statearr_37634_37661 = state_37631__$1;
(statearr_37634_37661[(2)] = null);

(statearr_37634_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (4))){
var inst_37584 = (state_37631[(7)]);
var inst_37584__$1 = (state_37631[(2)]);
var state_37631__$1 = (function (){var statearr_37635 = state_37631;
(statearr_37635[(7)] = inst_37584__$1);

return statearr_37635;
})();
if(cljs.core.truth_(inst_37584__$1)){
var statearr_37636_37662 = state_37631__$1;
(statearr_37636_37662[(1)] = (5));

} else {
var statearr_37637_37663 = state_37631__$1;
(statearr_37637_37663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (15))){
var inst_37591 = (state_37631[(8)]);
var inst_37606 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37591);
var inst_37607 = cljs.core.first.call(null,inst_37606);
var inst_37608 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37607);
var inst_37609 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37608)].join('');
var inst_37610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37609);
var state_37631__$1 = state_37631;
var statearr_37638_37664 = state_37631__$1;
(statearr_37638_37664[(2)] = inst_37610);

(statearr_37638_37664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (13))){
var inst_37615 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37639_37665 = state_37631__$1;
(statearr_37639_37665[(2)] = inst_37615);

(statearr_37639_37665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (6))){
var state_37631__$1 = state_37631;
var statearr_37640_37666 = state_37631__$1;
(statearr_37640_37666[(2)] = null);

(statearr_37640_37666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (17))){
var inst_37613 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37641_37667 = state_37631__$1;
(statearr_37641_37667[(2)] = inst_37613);

(statearr_37641_37667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (3))){
var inst_37629 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37631__$1,inst_37629);
} else {
if((state_val_37632 === (12))){
var inst_37590 = (state_37631[(9)]);
var inst_37604 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37590,opts);
var state_37631__$1 = state_37631;
if(inst_37604){
var statearr_37642_37668 = state_37631__$1;
(statearr_37642_37668[(1)] = (15));

} else {
var statearr_37643_37669 = state_37631__$1;
(statearr_37643_37669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (2))){
var state_37631__$1 = state_37631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37631__$1,(4),ch);
} else {
if((state_val_37632 === (11))){
var inst_37591 = (state_37631[(8)]);
var inst_37596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37597 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37591);
var inst_37598 = cljs.core.async.timeout.call(null,(1000));
var inst_37599 = [inst_37597,inst_37598];
var inst_37600 = (new cljs.core.PersistentVector(null,2,(5),inst_37596,inst_37599,null));
var state_37631__$1 = state_37631;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37631__$1,(14),inst_37600);
} else {
if((state_val_37632 === (9))){
var inst_37591 = (state_37631[(8)]);
var inst_37617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37618 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37591);
var inst_37619 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37618);
var inst_37620 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37619)].join('');
var inst_37621 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37620);
var state_37631__$1 = (function (){var statearr_37644 = state_37631;
(statearr_37644[(10)] = inst_37617);

return statearr_37644;
})();
var statearr_37645_37670 = state_37631__$1;
(statearr_37645_37670[(2)] = inst_37621);

(statearr_37645_37670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (5))){
var inst_37584 = (state_37631[(7)]);
var inst_37586 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37587 = (new cljs.core.PersistentArrayMap(null,2,inst_37586,null));
var inst_37588 = (new cljs.core.PersistentHashSet(null,inst_37587,null));
var inst_37589 = figwheel.client.focus_msgs.call(null,inst_37588,inst_37584);
var inst_37590 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37589);
var inst_37591 = cljs.core.first.call(null,inst_37589);
var inst_37592 = figwheel.client.autoload_QMARK_.call(null);
var state_37631__$1 = (function (){var statearr_37646 = state_37631;
(statearr_37646[(9)] = inst_37590);

(statearr_37646[(8)] = inst_37591);

return statearr_37646;
})();
if(cljs.core.truth_(inst_37592)){
var statearr_37647_37671 = state_37631__$1;
(statearr_37647_37671[(1)] = (8));

} else {
var statearr_37648_37672 = state_37631__$1;
(statearr_37648_37672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (14))){
var inst_37602 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37649_37673 = state_37631__$1;
(statearr_37649_37673[(2)] = inst_37602);

(statearr_37649_37673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (16))){
var state_37631__$1 = state_37631;
var statearr_37650_37674 = state_37631__$1;
(statearr_37650_37674[(2)] = null);

(statearr_37650_37674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (10))){
var inst_37623 = (state_37631[(2)]);
var state_37631__$1 = (function (){var statearr_37651 = state_37631;
(statearr_37651[(11)] = inst_37623);

return statearr_37651;
})();
var statearr_37652_37675 = state_37631__$1;
(statearr_37652_37675[(2)] = null);

(statearr_37652_37675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (8))){
var inst_37590 = (state_37631[(9)]);
var inst_37594 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37590,opts);
var state_37631__$1 = state_37631;
if(cljs.core.truth_(inst_37594)){
var statearr_37653_37676 = state_37631__$1;
(statearr_37653_37676[(1)] = (11));

} else {
var statearr_37654_37677 = state_37631__$1;
(statearr_37654_37677[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____0 = (function (){
var statearr_37655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37655[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__);

(statearr_37655[(1)] = (1));

return statearr_37655;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____1 = (function (state_37631){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_37631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e37656){if((e37656 instanceof Object)){
var ex__35106__auto__ = e37656;
var statearr_37657_37678 = state_37631;
(statearr_37657_37678[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37679 = state_37631;
state_37631 = G__37679;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__ = function(state_37631){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____1.call(this,state_37631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35103__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_37658 = f__35126__auto__.call(null);
(statearr_37658[(6)] = c__35125__auto___37659);

return statearr_37658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37680_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37680_SHARP_));
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
var base_path_37686 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37684 = true;
var _STAR_print_fn_STAR__temp_val__37685 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37685);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37682);
}}catch (e37681){if((e37681 instanceof Error)){
var e = e37681;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37686], null));
} else {
var e = e37681;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37687){
var map__37688 = p__37687;
var map__37688__$1 = (((((!((map__37688 == null))))?(((((map__37688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37688):map__37688);
var opts = map__37688__$1;
var build_id = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__37690){
var vec__37691 = p__37690;
var seq__37692 = cljs.core.seq.call(null,vec__37691);
var first__37693 = cljs.core.first.call(null,seq__37692);
var seq__37692__$1 = cljs.core.next.call(null,seq__37692);
var map__37694 = first__37693;
var map__37694__$1 = (((((!((map__37694 == null))))?(((((map__37694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37694):map__37694);
var msg = map__37694__$1;
var msg_name = cljs.core.get.call(null,map__37694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37692__$1;
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
return (function (p__37696){
var vec__37697 = p__37696;
var seq__37698 = cljs.core.seq.call(null,vec__37697);
var first__37699 = cljs.core.first.call(null,seq__37698);
var seq__37698__$1 = cljs.core.next.call(null,seq__37698);
var map__37700 = first__37699;
var map__37700__$1 = (((((!((map__37700 == null))))?(((((map__37700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37700):map__37700);
var msg = map__37700__$1;
var msg_name = cljs.core.get.call(null,map__37700__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37698__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37702){
var map__37703 = p__37702;
var map__37703__$1 = (((((!((map__37703 == null))))?(((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var on_compile_warning = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__37705){
var vec__37706 = p__37705;
var seq__37707 = cljs.core.seq.call(null,vec__37706);
var first__37708 = cljs.core.first.call(null,seq__37707);
var seq__37707__$1 = cljs.core.next.call(null,seq__37707);
var map__37709 = first__37708;
var map__37709__$1 = (((((!((map__37709 == null))))?(((((map__37709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37709):map__37709);
var msg = map__37709__$1;
var msg_name = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37707__$1;
var pred__37711 = cljs.core._EQ_;
var expr__37712 = msg_name;
if(cljs.core.truth_(pred__37711.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37712))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37711.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37712))){
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
var c__35125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_37801){
var state_val_37802 = (state_37801[(1)]);
if((state_val_37802 === (7))){
var inst_37721 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
if(cljs.core.truth_(inst_37721)){
var statearr_37803_37850 = state_37801__$1;
(statearr_37803_37850[(1)] = (8));

} else {
var statearr_37804_37851 = state_37801__$1;
(statearr_37804_37851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (20))){
var inst_37795 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37805_37852 = state_37801__$1;
(statearr_37805_37852[(2)] = inst_37795);

(statearr_37805_37852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (27))){
var inst_37791 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37806_37853 = state_37801__$1;
(statearr_37806_37853[(2)] = inst_37791);

(statearr_37806_37853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (1))){
var inst_37714 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37801__$1 = state_37801;
if(cljs.core.truth_(inst_37714)){
var statearr_37807_37854 = state_37801__$1;
(statearr_37807_37854[(1)] = (2));

} else {
var statearr_37808_37855 = state_37801__$1;
(statearr_37808_37855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (24))){
var inst_37793 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37809_37856 = state_37801__$1;
(statearr_37809_37856[(2)] = inst_37793);

(statearr_37809_37856[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (4))){
var inst_37799 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37801__$1,inst_37799);
} else {
if((state_val_37802 === (15))){
var inst_37797 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37810_37857 = state_37801__$1;
(statearr_37810_37857[(2)] = inst_37797);

(statearr_37810_37857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (21))){
var inst_37750 = (state_37801[(2)]);
var inst_37751 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37752 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37751);
var state_37801__$1 = (function (){var statearr_37811 = state_37801;
(statearr_37811[(7)] = inst_37750);

return statearr_37811;
})();
var statearr_37812_37858 = state_37801__$1;
(statearr_37812_37858[(2)] = inst_37752);

(statearr_37812_37858[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (31))){
var inst_37780 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37780){
var statearr_37813_37859 = state_37801__$1;
(statearr_37813_37859[(1)] = (34));

} else {
var statearr_37814_37860 = state_37801__$1;
(statearr_37814_37860[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (32))){
var inst_37789 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37815_37861 = state_37801__$1;
(statearr_37815_37861[(2)] = inst_37789);

(statearr_37815_37861[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (33))){
var inst_37776 = (state_37801[(2)]);
var inst_37777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37778 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37777);
var state_37801__$1 = (function (){var statearr_37816 = state_37801;
(statearr_37816[(8)] = inst_37776);

return statearr_37816;
})();
var statearr_37817_37862 = state_37801__$1;
(statearr_37817_37862[(2)] = inst_37778);

(statearr_37817_37862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (13))){
var inst_37735 = figwheel.client.heads_up.clear.call(null);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(16),inst_37735);
} else {
if((state_val_37802 === (22))){
var inst_37756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37757 = figwheel.client.heads_up.append_warning_message.call(null,inst_37756);
var state_37801__$1 = state_37801;
var statearr_37818_37863 = state_37801__$1;
(statearr_37818_37863[(2)] = inst_37757);

(statearr_37818_37863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (36))){
var inst_37787 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37819_37864 = state_37801__$1;
(statearr_37819_37864[(2)] = inst_37787);

(statearr_37819_37864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (29))){
var inst_37767 = (state_37801[(2)]);
var inst_37768 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37769 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37768);
var state_37801__$1 = (function (){var statearr_37820 = state_37801;
(statearr_37820[(9)] = inst_37767);

return statearr_37820;
})();
var statearr_37821_37865 = state_37801__$1;
(statearr_37821_37865[(2)] = inst_37769);

(statearr_37821_37865[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (6))){
var inst_37716 = (state_37801[(10)]);
var state_37801__$1 = state_37801;
var statearr_37822_37866 = state_37801__$1;
(statearr_37822_37866[(2)] = inst_37716);

(statearr_37822_37866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (28))){
var inst_37763 = (state_37801[(2)]);
var inst_37764 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37765 = figwheel.client.heads_up.display_warning.call(null,inst_37764);
var state_37801__$1 = (function (){var statearr_37823 = state_37801;
(statearr_37823[(11)] = inst_37763);

return statearr_37823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(29),inst_37765);
} else {
if((state_val_37802 === (25))){
var inst_37761 = figwheel.client.heads_up.clear.call(null);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(28),inst_37761);
} else {
if((state_val_37802 === (34))){
var inst_37782 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(37),inst_37782);
} else {
if((state_val_37802 === (17))){
var inst_37741 = (state_37801[(2)]);
var inst_37742 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37743 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37742);
var state_37801__$1 = (function (){var statearr_37824 = state_37801;
(statearr_37824[(12)] = inst_37741);

return statearr_37824;
})();
var statearr_37825_37867 = state_37801__$1;
(statearr_37825_37867[(2)] = inst_37743);

(statearr_37825_37867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (3))){
var inst_37733 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37733){
var statearr_37826_37868 = state_37801__$1;
(statearr_37826_37868[(1)] = (13));

} else {
var statearr_37827_37869 = state_37801__$1;
(statearr_37827_37869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (12))){
var inst_37729 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37828_37870 = state_37801__$1;
(statearr_37828_37870[(2)] = inst_37729);

(statearr_37828_37870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (2))){
var inst_37716 = (state_37801[(10)]);
var inst_37716__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37801__$1 = (function (){var statearr_37829 = state_37801;
(statearr_37829[(10)] = inst_37716__$1);

return statearr_37829;
})();
if(cljs.core.truth_(inst_37716__$1)){
var statearr_37830_37871 = state_37801__$1;
(statearr_37830_37871[(1)] = (5));

} else {
var statearr_37831_37872 = state_37801__$1;
(statearr_37831_37872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (23))){
var inst_37759 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37759){
var statearr_37832_37873 = state_37801__$1;
(statearr_37832_37873[(1)] = (25));

} else {
var statearr_37833_37874 = state_37801__$1;
(statearr_37833_37874[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (35))){
var state_37801__$1 = state_37801;
var statearr_37834_37875 = state_37801__$1;
(statearr_37834_37875[(2)] = null);

(statearr_37834_37875[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (19))){
var inst_37754 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37754){
var statearr_37835_37876 = state_37801__$1;
(statearr_37835_37876[(1)] = (22));

} else {
var statearr_37836_37877 = state_37801__$1;
(statearr_37836_37877[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (11))){
var inst_37725 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37837_37878 = state_37801__$1;
(statearr_37837_37878[(2)] = inst_37725);

(statearr_37837_37878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (9))){
var inst_37727 = figwheel.client.heads_up.clear.call(null);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(12),inst_37727);
} else {
if((state_val_37802 === (5))){
var inst_37718 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37801__$1 = state_37801;
var statearr_37838_37879 = state_37801__$1;
(statearr_37838_37879[(2)] = inst_37718);

(statearr_37838_37879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (14))){
var inst_37745 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37745){
var statearr_37839_37880 = state_37801__$1;
(statearr_37839_37880[(1)] = (18));

} else {
var statearr_37840_37881 = state_37801__$1;
(statearr_37840_37881[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (26))){
var inst_37771 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37801__$1 = state_37801;
if(inst_37771){
var statearr_37841_37882 = state_37801__$1;
(statearr_37841_37882[(1)] = (30));

} else {
var statearr_37842_37883 = state_37801__$1;
(statearr_37842_37883[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (16))){
var inst_37737 = (state_37801[(2)]);
var inst_37738 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37739 = figwheel.client.heads_up.display_exception.call(null,inst_37738);
var state_37801__$1 = (function (){var statearr_37843 = state_37801;
(statearr_37843[(13)] = inst_37737);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(17),inst_37739);
} else {
if((state_val_37802 === (30))){
var inst_37773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37774 = figwheel.client.heads_up.display_warning.call(null,inst_37773);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(33),inst_37774);
} else {
if((state_val_37802 === (10))){
var inst_37731 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37844_37884 = state_37801__$1;
(statearr_37844_37884[(2)] = inst_37731);

(statearr_37844_37884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (18))){
var inst_37747 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37748 = figwheel.client.heads_up.display_exception.call(null,inst_37747);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(21),inst_37748);
} else {
if((state_val_37802 === (37))){
var inst_37784 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37845_37885 = state_37801__$1;
(statearr_37845_37885[(2)] = inst_37784);

(statearr_37845_37885[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (8))){
var inst_37723 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(11),inst_37723);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____0 = (function (){
var statearr_37846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37846[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__);

(statearr_37846[(1)] = (1));

return statearr_37846;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____1 = (function (state_37801){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_37801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e37847){if((e37847 instanceof Object)){
var ex__35106__auto__ = e37847;
var statearr_37848_37886 = state_37801;
(statearr_37848_37886[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37887 = state_37801;
state_37801 = G__37887;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__ = function(state_37801){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____1.call(this,state_37801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_37849 = f__35126__auto__.call(null);
(statearr_37849[(6)] = c__35125__auto__);

return statearr_37849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));

return c__35125__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35125__auto___37916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_37902){
var state_val_37903 = (state_37902[(1)]);
if((state_val_37903 === (1))){
var state_37902__$1 = state_37902;
var statearr_37904_37917 = state_37902__$1;
(statearr_37904_37917[(2)] = null);

(statearr_37904_37917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37903 === (2))){
var state_37902__$1 = state_37902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37902__$1,(4),ch);
} else {
if((state_val_37903 === (3))){
var inst_37900 = (state_37902[(2)]);
var state_37902__$1 = state_37902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37902__$1,inst_37900);
} else {
if((state_val_37903 === (4))){
var inst_37890 = (state_37902[(7)]);
var inst_37890__$1 = (state_37902[(2)]);
var state_37902__$1 = (function (){var statearr_37905 = state_37902;
(statearr_37905[(7)] = inst_37890__$1);

return statearr_37905;
})();
if(cljs.core.truth_(inst_37890__$1)){
var statearr_37906_37918 = state_37902__$1;
(statearr_37906_37918[(1)] = (5));

} else {
var statearr_37907_37919 = state_37902__$1;
(statearr_37907_37919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37903 === (5))){
var inst_37890 = (state_37902[(7)]);
var inst_37892 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37890);
var state_37902__$1 = state_37902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37902__$1,(8),inst_37892);
} else {
if((state_val_37903 === (6))){
var state_37902__$1 = state_37902;
var statearr_37908_37920 = state_37902__$1;
(statearr_37908_37920[(2)] = null);

(statearr_37908_37920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37903 === (7))){
var inst_37898 = (state_37902[(2)]);
var state_37902__$1 = state_37902;
var statearr_37909_37921 = state_37902__$1;
(statearr_37909_37921[(2)] = inst_37898);

(statearr_37909_37921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37903 === (8))){
var inst_37894 = (state_37902[(2)]);
var state_37902__$1 = (function (){var statearr_37910 = state_37902;
(statearr_37910[(8)] = inst_37894);

return statearr_37910;
})();
var statearr_37911_37922 = state_37902__$1;
(statearr_37911_37922[(2)] = null);

(statearr_37911_37922[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__35103__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35103__auto____0 = (function (){
var statearr_37912 = [null,null,null,null,null,null,null,null,null];
(statearr_37912[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35103__auto__);

(statearr_37912[(1)] = (1));

return statearr_37912;
});
var figwheel$client$heads_up_plugin_$_state_machine__35103__auto____1 = (function (state_37902){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_37902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e37913){if((e37913 instanceof Object)){
var ex__35106__auto__ = e37913;
var statearr_37914_37923 = state_37902;
(statearr_37914_37923[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37924 = state_37902;
state_37902 = G__37924;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35103__auto__ = function(state_37902){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35103__auto____1.call(this,state_37902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35103__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35103__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_37915 = f__35126__auto__.call(null);
(statearr_37915[(6)] = c__35125__auto___37916);

return statearr_37915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
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
var c__35125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_37930){
var state_val_37931 = (state_37930[(1)]);
if((state_val_37931 === (1))){
var inst_37925 = cljs.core.async.timeout.call(null,(3000));
var state_37930__$1 = state_37930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37930__$1,(2),inst_37925);
} else {
if((state_val_37931 === (2))){
var inst_37927 = (state_37930[(2)]);
var inst_37928 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37930__$1 = (function (){var statearr_37932 = state_37930;
(statearr_37932[(7)] = inst_37927);

return statearr_37932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37930__$1,inst_37928);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____0 = (function (){
var statearr_37933 = [null,null,null,null,null,null,null,null];
(statearr_37933[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__);

(statearr_37933[(1)] = (1));

return statearr_37933;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____1 = (function (state_37930){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_37930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e37934){if((e37934 instanceof Object)){
var ex__35106__auto__ = e37934;
var statearr_37935_37937 = state_37930;
(statearr_37935_37937[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37938 = state_37930;
state_37930 = G__37938;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__ = function(state_37930){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____1.call(this,state_37930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35103__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_37936 = f__35126__auto__.call(null);
(statearr_37936[(6)] = c__35125__auto__);

return statearr_37936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));

return c__35125__auto__;
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
var c__35125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35126__auto__ = (function (){var switch__35102__auto__ = (function (state_37945){
var state_val_37946 = (state_37945[(1)]);
if((state_val_37946 === (1))){
var inst_37939 = cljs.core.async.timeout.call(null,(2000));
var state_37945__$1 = state_37945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37945__$1,(2),inst_37939);
} else {
if((state_val_37946 === (2))){
var inst_37941 = (state_37945[(2)]);
var inst_37942 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37943 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37942);
var state_37945__$1 = (function (){var statearr_37947 = state_37945;
(statearr_37947[(7)] = inst_37941);

return statearr_37947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37945__$1,inst_37943);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____0 = (function (){
var statearr_37948 = [null,null,null,null,null,null,null,null];
(statearr_37948[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__);

(statearr_37948[(1)] = (1));

return statearr_37948;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____1 = (function (state_37945){
while(true){
var ret_value__35104__auto__ = (function (){try{while(true){
var result__35105__auto__ = switch__35102__auto__.call(null,state_37945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35105__auto__;
}
break;
}
}catch (e37949){if((e37949 instanceof Object)){
var ex__35106__auto__ = e37949;
var statearr_37950_37952 = state_37945;
(statearr_37950_37952[(5)] = ex__35106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37953 = state_37945;
state_37945 = G__37953;
continue;
} else {
return ret_value__35104__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__ = function(state_37945){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____1.call(this,state_37945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35103__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_37951 = f__35126__auto__.call(null);
(statearr_37951[(6)] = c__35125__auto__);

return statearr_37951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35127__auto__);
}));

return c__35125__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37954){
var map__37955 = p__37954;
var map__37955__$1 = (((((!((map__37955 == null))))?(((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37955):map__37955);
var file = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37957 = "";
var G__37957__$1 = (cljs.core.truth_(file)?[G__37957,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37957);
var G__37957__$2 = (cljs.core.truth_(line)?[G__37957__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37957__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__37957__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37957__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37958){
var map__37959 = p__37958;
var map__37959__$1 = (((((!((map__37959 == null))))?(((((map__37959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37959):map__37959);
var ed = map__37959__$1;
var exception_data = cljs.core.get.call(null,map__37959__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37959__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37962 = (function (){var G__37961 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37961)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37961;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37962);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37963){
var map__37964 = p__37963;
var map__37964__$1 = (((((!((map__37964 == null))))?(((((map__37964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37964):map__37964);
var w = map__37964__$1;
var message = cljs.core.get.call(null,map__37964__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37966 = cljs.core.seq.call(null,plugins);
var chunk__37967 = null;
var count__37968 = (0);
var i__37969 = (0);
while(true){
if((i__37969 < count__37968)){
var vec__37976 = cljs.core._nth.call(null,chunk__37967,i__37969);
var k = cljs.core.nth.call(null,vec__37976,(0),null);
var plugin = cljs.core.nth.call(null,vec__37976,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37982 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37966,chunk__37967,count__37968,i__37969,pl_37982,vec__37976,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37982.call(null,msg_hist);
});})(seq__37966,chunk__37967,count__37968,i__37969,pl_37982,vec__37976,k,plugin))
);
} else {
}


var G__37983 = seq__37966;
var G__37984 = chunk__37967;
var G__37985 = count__37968;
var G__37986 = (i__37969 + (1));
seq__37966 = G__37983;
chunk__37967 = G__37984;
count__37968 = G__37985;
i__37969 = G__37986;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37966);
if(temp__5720__auto__){
var seq__37966__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37966__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37966__$1);
var G__37987 = cljs.core.chunk_rest.call(null,seq__37966__$1);
var G__37988 = c__4556__auto__;
var G__37989 = cljs.core.count.call(null,c__4556__auto__);
var G__37990 = (0);
seq__37966 = G__37987;
chunk__37967 = G__37988;
count__37968 = G__37989;
i__37969 = G__37990;
continue;
} else {
var vec__37979 = cljs.core.first.call(null,seq__37966__$1);
var k = cljs.core.nth.call(null,vec__37979,(0),null);
var plugin = cljs.core.nth.call(null,vec__37979,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37991 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37966,chunk__37967,count__37968,i__37969,pl_37991,vec__37979,k,plugin,seq__37966__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37991.call(null,msg_hist);
});})(seq__37966,chunk__37967,count__37968,i__37969,pl_37991,vec__37979,k,plugin,seq__37966__$1,temp__5720__auto__))
);
} else {
}


var G__37992 = cljs.core.next.call(null,seq__37966__$1);
var G__37993 = null;
var G__37994 = (0);
var G__37995 = (0);
seq__37966 = G__37992;
chunk__37967 = G__37993;
count__37968 = G__37994;
i__37969 = G__37995;
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
var G__37997 = arguments.length;
switch (G__37997) {
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

var seq__37998_38003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37999_38004 = null;
var count__38000_38005 = (0);
var i__38001_38006 = (0);
while(true){
if((i__38001_38006 < count__38000_38005)){
var msg_38007 = cljs.core._nth.call(null,chunk__37999_38004,i__38001_38006);
figwheel.client.socket.handle_incoming_message.call(null,msg_38007);


var G__38008 = seq__37998_38003;
var G__38009 = chunk__37999_38004;
var G__38010 = count__38000_38005;
var G__38011 = (i__38001_38006 + (1));
seq__37998_38003 = G__38008;
chunk__37999_38004 = G__38009;
count__38000_38005 = G__38010;
i__38001_38006 = G__38011;
continue;
} else {
var temp__5720__auto___38012 = cljs.core.seq.call(null,seq__37998_38003);
if(temp__5720__auto___38012){
var seq__37998_38013__$1 = temp__5720__auto___38012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37998_38013__$1)){
var c__4556__auto___38014 = cljs.core.chunk_first.call(null,seq__37998_38013__$1);
var G__38015 = cljs.core.chunk_rest.call(null,seq__37998_38013__$1);
var G__38016 = c__4556__auto___38014;
var G__38017 = cljs.core.count.call(null,c__4556__auto___38014);
var G__38018 = (0);
seq__37998_38003 = G__38015;
chunk__37999_38004 = G__38016;
count__38000_38005 = G__38017;
i__38001_38006 = G__38018;
continue;
} else {
var msg_38019 = cljs.core.first.call(null,seq__37998_38013__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38019);


var G__38020 = cljs.core.next.call(null,seq__37998_38013__$1);
var G__38021 = null;
var G__38022 = (0);
var G__38023 = (0);
seq__37998_38003 = G__38020;
chunk__37999_38004 = G__38021;
count__38000_38005 = G__38022;
i__38001_38006 = G__38023;
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
var len__4736__auto___38028 = arguments.length;
var i__4737__auto___38029 = (0);
while(true){
if((i__4737__auto___38029 < len__4736__auto___38028)){
args__4742__auto__.push((arguments[i__4737__auto___38029]));

var G__38030 = (i__4737__auto___38029 + (1));
i__4737__auto___38029 = G__38030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38025){
var map__38026 = p__38025;
var map__38026__$1 = (((((!((map__38026 == null))))?(((((map__38026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38026):map__38026);
var opts = map__38026__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38024){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38024));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38031){if((e38031 instanceof Error)){
var e = e38031;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38031;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__38032){
var map__38033 = p__38032;
var map__38033__$1 = (((((!((map__38033 == null))))?(((((map__38033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38033):map__38033);
var msg_name = cljs.core.get.call(null,map__38033__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1637270086112
