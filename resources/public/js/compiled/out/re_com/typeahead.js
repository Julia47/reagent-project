// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.throbber');
goog.require('re_com.input_text');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__42701){
var map__42702 = p__42701;
var map__42702__$1 = (((((!((map__42702 == null))))?(((((map__42702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42702):map__42702);
var args = map__42702__$1;
var on_change = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__42704 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__42704,external_model_value);
} else {
return G__42704;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__42705,event){
var map__42706 = p__42705;
var map__42706__$1 = (((((!((map__42706 == null))))?(((((map__42706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42706):map__42706);
var state = map__42706__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__42708 = event;
var G__42708__$1 = (((G__42708 instanceof cljs.core.Keyword))?G__42708.fqn:null);
switch (G__42708__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not.call(null,rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__42710,event){
var map__42711 = p__42710;
var map__42711__$1 = (((((!((map__42711 == null))))?(((((map__42711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42711):map__42711);
var state = map__42711__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__42711__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__42713 = event;
var G__42713__$1 = (((G__42713 instanceof cljs.core.Keyword))?G__42713.fqn:null);
switch (G__42713__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__42715,new_value){
var map__42716 = p__42715;
var map__42716__$1 = (((((!((map__42716 == null))))?(((((map__42716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42716):map__42716);
var state = map__42716__$1;
var on_change = cljs.core.get.call(null,map__42716__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__42718,suggestion){
var map__42719 = p__42718;
var map__42719__$1 = (((((!((map__42719 == null))))?(((((map__42719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42719):map__42719);
var state = map__42719__$1;
var suggestion_to_string = cljs.core.get.call(null,map__42719__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__42721 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__42721,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__42721;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__42722,index){
var map__42723 = p__42722;
var map__42723__$1 = (((((!((map__42723 == null))))?(((((map__42723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42723):map__42723);
var state = map__42723__$1;
var suggestions = cljs.core.get.call(null,map__42723__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__42725 = state;
var G__42725__$1 = cljs.core.assoc.call(null,G__42725,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__42725__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__42725__$1,suggestion):G__42725__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__42725__$2,suggestion);
} else {
return G__42725__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__42726,index){
var map__42727 = p__42726;
var map__42727__$1 = (((((!((map__42727 == null))))?(((((map__42727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42727):map__42727);
var state = map__42727__$1;
var suggestions = cljs.core.get.call(null,map__42727__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__42729){
var map__42730 = p__42729;
var map__42730__$1 = (((((!((map__42730 == null))))?(((((map__42730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42730):map__42730);
var state = map__42730__$1;
var suggestion_active_index = cljs.core.get.call(null,map__42730__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__42732 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__42732,suggestion_active_index);
} else {
return G__42732;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__42733){
var map__42734 = p__42733;
var map__42734__$1 = (((((!((map__42734 == null))))?(((((map__42734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42734):map__42734);
var state = map__42734__$1;
var suggestions = cljs.core.get.call(null,map__42734__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__42734__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__42736 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__42736,re_com.typeahead.wrap.call(null,((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__42736;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__42737){
var map__42738 = p__42737;
var map__42738__$1 = (((((!((map__42738 == null))))?(((((map__42738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42738):map__42738);
var state = map__42738__$1;
var suggestions = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__42740 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__42740,re_com.typeahead.wrap.call(null,((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__42740;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__42741 = state;
var G__42741__$1 = re_com.typeahead.clear_suggestions.call(null,G__42741)
;
var G__42741__$2 = cljs.core.assoc.call(null,G__42741__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__42741__$2,null);
} else {
return G__42741__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__42742){
var map__42743 = p__42742;
var map__42743__$1 = (((((!((map__42743 == null))))?(((((map__42743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42743):map__42743);
var state = map__42743__$1;
var input_text = cljs.core.get.call(null,map__42743__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__42743__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__42743__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not.call(null,displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = data_source.call(null,text,(function (p1__42745_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__42745_SHARP_);
}));
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__42623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42624__auto__ = (function (){var switch__42600__auto__ = (function (state_42763){
var state_val_42764 = (state_42763[(1)]);
if((state_val_42764 === (1))){
var state_42763__$1 = state_42763;
var statearr_42765_42778 = state_42763__$1;
(statearr_42765_42778[(2)] = null);

(statearr_42765_42778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (2))){
var state_42763__$1 = state_42763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42763__$1,(4),c_search);
} else {
if((state_val_42764 === (3))){
var inst_42761 = (state_42763[(2)]);
var state_42763__$1 = state_42763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42763__$1,inst_42761);
} else {
if((state_val_42764 === (4))){
var inst_42748 = (state_42763[(7)]);
var inst_42748__$1 = (state_42763[(2)]);
var inst_42749 = cljs.core.deref.call(null,state_atom);
var inst_42750 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_42749);
var inst_42751 = cljs.core._EQ_.call(null,"",inst_42748__$1);
var state_42763__$1 = (function (){var statearr_42766 = state_42763;
(statearr_42766[(7)] = inst_42748__$1);

(statearr_42766[(8)] = inst_42750);

return statearr_42766;
})();
if(inst_42751){
var statearr_42767_42779 = state_42763__$1;
(statearr_42767_42779[(1)] = (5));

} else {
var statearr_42768_42780 = state_42763__$1;
(statearr_42768_42780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (5))){
var inst_42750 = (state_42763[(8)]);
var inst_42753 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_42754 = re_com.typeahead.search_data_source_BANG_.call(null,inst_42750,state_atom,"");
var state_42763__$1 = (function (){var statearr_42769 = state_42763;
(statearr_42769[(9)] = inst_42753);

return statearr_42769;
})();
var statearr_42770_42781 = state_42763__$1;
(statearr_42770_42781[(2)] = inst_42754);

(statearr_42770_42781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (6))){
var inst_42748 = (state_42763[(7)]);
var inst_42750 = (state_42763[(8)]);
var inst_42756 = re_com.typeahead.search_data_source_BANG_.call(null,inst_42750,state_atom,inst_42748);
var state_42763__$1 = state_42763;
var statearr_42771_42782 = state_42763__$1;
(statearr_42771_42782[(2)] = inst_42756);

(statearr_42771_42782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (7))){
var inst_42758 = (state_42763[(2)]);
var state_42763__$1 = (function (){var statearr_42772 = state_42763;
(statearr_42772[(10)] = inst_42758);

return statearr_42772;
})();
var statearr_42773_42783 = state_42763__$1;
(statearr_42773_42783[(2)] = null);

(statearr_42773_42783[(1)] = (2));


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
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____0 = (function (){
var statearr_42774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42774[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__);

(statearr_42774[(1)] = (1));

return statearr_42774;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____1 = (function (state_42763){
while(true){
var ret_value__42602__auto__ = (function (){try{while(true){
var result__42603__auto__ = switch__42600__auto__.call(null,state_42763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42603__auto__;
}
break;
}
}catch (e42775){if((e42775 instanceof Object)){
var ex__42604__auto__ = e42775;
var statearr_42776_42784 = state_42763;
(statearr_42776_42784[(5)] = ex__42604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42785 = state_42763;
state_42763 = G__42785;
continue;
} else {
return ret_value__42602__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__ = function(state_42763){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____1.call(this,state_42763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__42601__auto__;
})()
})();
var state__42625__auto__ = (function (){var statearr_42777 = f__42624__auto__.call(null);
(statearr_42777[(6)] = c__42623__auto__);

return statearr_42777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42625__auto__);
}));

return c__42623__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__42787 = cljs.core.deref.call(null,state_atom);
var map__42787__$1 = (((((!((map__42787 == null))))?(((((map__42787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42787):map__42787);
var state = map__42787__$1;
var input_text = cljs.core.get.call(null,map__42787__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__42787__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,(function (p1__42786_SHARP_){
var G__42789 = p1__42786_SHARP_;
var G__42789__$1 = cljs.core.assoc.call(null,G__42789,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__42789__$1,new_text);
} else {
return G__42789__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__42790 = cljs.core._EQ_;
var expr__42791 = event.which;
if(cljs.core.truth_(pred__42790.call(null,goog.events.KeyCodes.UP,expr__42791))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__42790.call(null,goog.events.KeyCodes.DOWN,expr__42791))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__42790.call(null,goog.events.KeyCodes.ENTER,expr__42791))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__42790.call(null,goog.events.KeyCodes.ESC,expr__42791))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__42790.call(null,goog.events.KeyCodes.TAB,expr__42791))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),null,new cljs.core.Keyword(null,"throbber","throbber",-1896677161),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42815 = arguments.length;
var i__4737__auto___42816 = (0);
while(true){
if((i__4737__auto___42816 < len__4736__auto___42815)){
args__4742__auto__.push((arguments[i__4737__auto___42816]));

var G__42817 = (i__4737__auto___42816 + (1));
i__4737__auto___42816 = G__42817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__42795){
var map__42796 = p__42795;
var map__42796__$1 = (((((!((map__42796 == null))))?(((((map__42796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42796):map__42796);
var args = map__42796__$1;
var or__4126__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var map__42798 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__42798__$1 = (((((!((map__42798 == null))))?(((((map__42798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42798):map__42798);
var state = map__42798__$1;
var c_search = cljs.core.get.call(null,map__42798__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__42798__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__42800){
var map__42801 = p__42800;
var map__42801__$1 = (((((!((map__42801 == null))))?(((((map__42801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42801):map__42801);
var args__$1 = map__42801__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var parts = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _rigid_QMARK_ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var debug_as = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4126__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var map__42803 = cljs.core.deref.call(null,state_atom);
var map__42803__$1 = (((((!((map__42803 == null))))?(((((map__42803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42803):map__42803);
var state__$1 = map__42803__$1;
var suggestions = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4126__auto____$2 = width;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__4126__auto____$2 = debug_as;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),293], null)),new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto____$2 = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),312], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throbber","throbber",-1896677161),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join('')], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$typeahead_render_$_iter__42805(s__42806){
return (new cljs.core.LazySeq(null,(function (){
var s__42806__$1 = s__42806;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__42806__$1);
if(temp__5720__auto__){
var s__42806__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42806__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__42806__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__42808 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__42807 = (0);
while(true){
if((i__42807 < size__4528__auto__)){
var vec__42809 = cljs.core._nth.call(null,c__4527__auto__,i__42807);
var i = cljs.core.nth.call(null,vec__42809,(0),null);
var s = cljs.core.nth.call(null,vec__42809,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__42808,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__42807,selected_QMARK_,vec__42809,i,s,c__4527__auto__,size__4528__auto__,b__42808,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__42807,selected_QMARK_,vec__42809,i,s,c__4527__auto__,size__4528__auto__,b__42808,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__42807,selected_QMARK_,vec__42809,i,s,c__4527__auto__,size__4528__auto__,b__42808,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args){
return (function (p1__42793_SHARP_){
p1__42793_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__42807,selected_QMARK_,vec__42809,i,s,c__4527__auto__,size__4528__auto__,b__42808,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__42818 = (i__42807 + (1));
i__42807 = G__42818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42808),re_com$typeahead$typeahead_render_$_iter__42805.call(null,cljs.core.chunk_rest.call(null,s__42806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42808),null);
}
} else {
var vec__42812 = cljs.core.first.call(null,s__42806__$2);
var i = cljs.core.nth.call(null,vec__42812,(0),null);
var s = cljs.core.nth.call(null,vec__42812,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/home/julia/clojure/project/test/resources/public/js/compiled/out/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__42812,i,s,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__42812,i,s,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__42812,i,s,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args){
return (function (p1__42793_SHARP_){
p1__42793_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__42812,i,s,s__42806__$2,temp__5720__auto__,map__42803,map__42803__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__42801,map__42801__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__42798,map__42798__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__42796,map__42796__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$typeahead_render_$_iter__42805.call(null,cljs.core.rest.call(null,s__42806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__42800 = null;
if (arguments.length > 0) {
var G__42819__i = 0, G__42819__a = new Array(arguments.length -  0);
while (G__42819__i < G__42819__a.length) {G__42819__a[G__42819__i] = arguments[G__42819__i + 0]; ++G__42819__i;}
  p__42800 = new cljs.core.IndexedSeq(G__42819__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__42800);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__42820){
var p__42800 = cljs.core.seq(arglist__42820);
return re_com$typeahead$typeahead_render__delegate(p__42800);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq42794){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42794));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__42623__auto___42901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42624__auto__ = (function (){var switch__42600__auto__ = (function (state_42871){
var state_val_42872 = (state_42871[(1)]);
if((state_val_42872 === (7))){
var inst_42826 = (state_42871[(2)]);
var state_42871__$1 = state_42871;
var statearr_42873_42902 = state_42871__$1;
(statearr_42873_42902[(2)] = inst_42826);

(statearr_42873_42902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (1))){
var inst_42821 = null;
var state_42871__$1 = (function (){var statearr_42874 = state_42871;
(statearr_42874[(7)] = inst_42821);

return statearr_42874;
})();
var statearr_42875_42903 = state_42871__$1;
(statearr_42875_42903[(2)] = null);

(statearr_42875_42903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (4))){
var state_42871__$1 = state_42871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42871__$1,(7),in$);
} else {
if((state_val_42872 === (15))){
var inst_42856 = (state_42871[(2)]);
var state_42871__$1 = (function (){var statearr_42876 = state_42871;
(statearr_42876[(8)] = inst_42856);

return statearr_42876;
})();
var statearr_42877_42904 = state_42871__$1;
(statearr_42877_42904[(2)] = null);

(statearr_42877_42904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (13))){
var inst_42844 = (state_42871[(9)]);
var inst_42858 = cljs.core._EQ_.call(null,inst_42844,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_42871__$1 = state_42871;
if(inst_42858){
var statearr_42878_42905 = state_42871__$1;
(statearr_42878_42905[(1)] = (16));

} else {
var statearr_42879_42906 = state_42871__$1;
(statearr_42879_42906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (6))){
var inst_42830 = (state_42871[(10)]);
var inst_42829 = (state_42871[(2)]);
var inst_42830__$1 = cljs.core.async.timeout.call(null,ms);
var inst_42838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42839 = [in$,inst_42830__$1];
var inst_42840 = (new cljs.core.PersistentVector(null,2,(5),inst_42838,inst_42839,null));
var state_42871__$1 = (function (){var statearr_42880 = state_42871;
(statearr_42880[(10)] = inst_42830__$1);

(statearr_42880[(11)] = inst_42829);

return statearr_42880;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42871__$1,(8),inst_42840);
} else {
if((state_val_42872 === (17))){
var state_42871__$1 = state_42871;
var statearr_42881_42907 = state_42871__$1;
(statearr_42881_42907[(2)] = null);

(statearr_42881_42907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (3))){
var inst_42869 = (state_42871[(2)]);
var state_42871__$1 = state_42871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42871__$1,inst_42869);
} else {
if((state_val_42872 === (12))){
var inst_42829 = (state_42871[(11)]);
var state_42871__$1 = state_42871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42871__$1,(15),out,inst_42829);
} else {
if((state_val_42872 === (2))){
var inst_42821 = (state_42871[(7)]);
var inst_42823 = (inst_42821 == null);
var state_42871__$1 = state_42871;
if(cljs.core.truth_(inst_42823)){
var statearr_42882_42908 = state_42871__$1;
(statearr_42882_42908[(1)] = (4));

} else {
var statearr_42883_42909 = state_42871__$1;
(statearr_42883_42909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (11))){
var inst_42866 = (state_42871[(2)]);
var inst_42821 = inst_42866;
var state_42871__$1 = (function (){var statearr_42884 = state_42871;
(statearr_42884[(7)] = inst_42821);

return statearr_42884;
})();
var statearr_42885_42910 = state_42871__$1;
(statearr_42885_42910[(2)] = null);

(statearr_42885_42910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (9))){
var inst_42842 = (state_42871[(12)]);
var inst_42850 = cljs.core.nth.call(null,inst_42842,(0),null);
var inst_42851 = cljs.core.nth.call(null,inst_42842,(1),null);
var state_42871__$1 = (function (){var statearr_42886 = state_42871;
(statearr_42886[(13)] = inst_42851);

return statearr_42886;
})();
var statearr_42887_42911 = state_42871__$1;
(statearr_42887_42911[(2)] = inst_42850);

(statearr_42887_42911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (5))){
var inst_42821 = (state_42871[(7)]);
var state_42871__$1 = state_42871;
var statearr_42888_42912 = state_42871__$1;
(statearr_42888_42912[(2)] = inst_42821);

(statearr_42888_42912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (14))){
var inst_42864 = (state_42871[(2)]);
var state_42871__$1 = state_42871;
var statearr_42889_42913 = state_42871__$1;
(statearr_42889_42913[(2)] = inst_42864);

(statearr_42889_42913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (16))){
var inst_42843 = (state_42871[(14)]);
var state_42871__$1 = state_42871;
var statearr_42890_42914 = state_42871__$1;
(statearr_42890_42914[(2)] = inst_42843);

(statearr_42890_42914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (10))){
var inst_42830 = (state_42871[(10)]);
var inst_42844 = (state_42871[(9)]);
var inst_42853 = cljs.core._EQ_.call(null,inst_42844,inst_42830);
var state_42871__$1 = state_42871;
if(inst_42853){
var statearr_42891_42915 = state_42871__$1;
(statearr_42891_42915[(1)] = (12));

} else {
var statearr_42892_42916 = state_42871__$1;
(statearr_42892_42916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (18))){
var inst_42862 = (state_42871[(2)]);
var state_42871__$1 = state_42871;
var statearr_42893_42917 = state_42871__$1;
(statearr_42893_42917[(2)] = inst_42862);

(statearr_42893_42917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42872 === (8))){
var inst_42842 = (state_42871[(12)]);
var inst_42844 = (state_42871[(9)]);
var inst_42842__$1 = (state_42871[(2)]);
var inst_42843 = cljs.core.nth.call(null,inst_42842__$1,(0),null);
var inst_42844__$1 = cljs.core.nth.call(null,inst_42842__$1,(1),null);
var inst_42845 = cljs.core._EQ_.call(null,inst_42844__$1,in$);
var state_42871__$1 = (function (){var statearr_42894 = state_42871;
(statearr_42894[(12)] = inst_42842__$1);

(statearr_42894[(9)] = inst_42844__$1);

(statearr_42894[(14)] = inst_42843);

return statearr_42894;
})();
if(inst_42845){
var statearr_42895_42918 = state_42871__$1;
(statearr_42895_42918[(1)] = (9));

} else {
var statearr_42896_42919 = state_42871__$1;
(statearr_42896_42919[(1)] = (10));

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
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__42601__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__42601__auto____0 = (function (){
var statearr_42897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42897[(0)] = re_com$typeahead$debounce_$_state_machine__42601__auto__);

(statearr_42897[(1)] = (1));

return statearr_42897;
});
var re_com$typeahead$debounce_$_state_machine__42601__auto____1 = (function (state_42871){
while(true){
var ret_value__42602__auto__ = (function (){try{while(true){
var result__42603__auto__ = switch__42600__auto__.call(null,state_42871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42603__auto__;
}
break;
}
}catch (e42898){if((e42898 instanceof Object)){
var ex__42604__auto__ = e42898;
var statearr_42899_42920 = state_42871;
(statearr_42899_42920[(5)] = ex__42604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42921 = state_42871;
state_42871 = G__42921;
continue;
} else {
return ret_value__42602__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__42601__auto__ = function(state_42871){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__42601__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__42601__auto____1.call(this,state_42871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__42601__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__42601__auto____0;
re_com$typeahead$debounce_$_state_machine__42601__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__42601__auto____1;
return re_com$typeahead$debounce_$_state_machine__42601__auto__;
})()
})();
var state__42625__auto__ = (function (){var statearr_42900 = f__42624__auto__.call(null);
(statearr_42900[(6)] = c__42623__auto___42901);

return statearr_42900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42625__auto__);
}));


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1637533453250
