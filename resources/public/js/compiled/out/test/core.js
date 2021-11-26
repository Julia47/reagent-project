// Compiled by ClojureScript 1.10.773 {}
goog.provide('test.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('reagent_mui.icons.label');
goog.require('test.db');
test.core.current_date_string = (function test$core$current_date_string(d){
var pad_zero = (function (p1__36168_SHARP_){
return p1__36168_SHARP_.toString().padStart((2),"0");
});
var y = d.getFullYear();
var m = pad_zero.call(null,(d.getMonth() + (1)));
var d__$1 = pad_zero.call(null,d.getDate());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1)].join('');
});
test.core.get_chart_config = (function test$core$get_chart_config(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"scatter",new cljs.core.Keyword(null,"zoomType","zoomType",2115589547),"xy",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgb(255,255,255,.4)"], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"The structure of income and expence for all period"], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"text","text",-1790561697),"Date"], null),new cljs.core.Keyword(null,"type","type",1174270348),"datetime",new cljs.core.Keyword(null,"startOnTick","startOnTick",-1598298801),true,new cljs.core.Keyword(null,"endOnTick","endOnTick",-1879404630),true,new cljs.core.Keyword(null,"showLastLabel","showLastLabel",600203013),true,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),(function (p1__36169_SHARP_){
return Highcharts.dateFormat("%e %b %Y",p1__36169_SHARP_.value);
})], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Money(UAH)"], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"vertical",new cljs.core.Keyword(null,"align","align",1964212802),"left",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"top",new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(70),new cljs.core.Keyword(null,"floating","floating",-1978091029),true,new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1)], null),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scatter","scatter",507265517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"lineColor","lineColor",1191148310),"rgb(100,100,100)"], null)], null)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headerFormat","headerFormat",-1401572321),"<b>{series.name}</b><br>",new cljs.core.Keyword(null,"pointFormat","pointFormat",-1370193740),"{point.y} UAH"], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),test.db.get_data_chart.call(null)], null);
});
test.core.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"switch","switch",71881310),(0),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-error","source-error",-1032045306),"",new cljs.core.Keyword(null,"money-error","money-error",450684440),""], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"money-sources","money-sources",-1160332683),test.db.get_money_sources.call(null),new cljs.core.Keyword(null,"expence-tags","expence-tags",2118326314),test.db.get_expence_tags.call(null),new cljs.core.Keyword(null,"income-tags","income-tags",-464409058),test.db.get_income_tags.call(null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118),test.db.get_transactions.call(null),new cljs.core.Keyword(null,"balance","balance",418967409),test.db.get_balance.call(null),new cljs.core.Keyword(null,"all-flow","all-flow",597251601),test.db.get_all_flow.call(null),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),"",new cljs.core.Keyword("money-source","name","money-source/name",-388621823),"",new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),"",new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(0)], null),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874),true,new cljs.core.Keyword("transaction","money","transaction/money",-1907457661),(0),new cljs.core.Keyword("transaction","tag","transaction/tag",863365855),(4),new cljs.core.Keyword("transaction","date","transaction/date",694214084),test.core.current_date_string.call(null,(new Date())),new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968),(18)], null)], null),new cljs.core.Keyword(null,"chart-config","chart-config",-943860893),test.core.get_chart_config.call(null)], null);
if((typeof test !== 'undefined') && (typeof test.core !== 'undefined') && (typeof test.core._BANG_state !== 'undefined')){
} else {
test.core._BANG_state = reagent.core.atom.call(null,test.core.initial_state);
}
test.core.switcher = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310)], null));
test.core.source_error = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"source-error","source-error",-1032045306)], null));
test.core.money_error = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"money-error","money-error",450684440)], null));
test.core.balance = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"balance","balance",418967409)], null));
test.core.all_flow = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"all-flow","all-flow",597251601)], null));
test.core.expence_tags = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"expence-tags","expence-tags",2118326314)], null));
test.core.income_tags = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"income-tags","income-tags",-464409058)], null));
test.core.money_source = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968)], null));
test.core.flow = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874)], null));
test.core.money = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","money","transaction/money",-1907457661)], null));
test.core.tag = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","tag","transaction/tag",863365855)], null));
test.core.date = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","date","transaction/date",694214084)], null));
test.core.account_number = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631)], null));
test.core.sname = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","name","money-source/name",-388621823)], null));
test.core.stype = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","type","money-source/type",-1033885852)], null));
test.core.source_balance = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799)], null));
test.core.transactions = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null));
test.core.money_sources = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"money-sources","money-sources",-1160332683)], null));
test.core.chart_config = reagent.core.cursor.call(null,test.core._BANG_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-config","chart-config",-943860893)], null));
if((typeof test !== 'undefined') && (typeof test.core !== 'undefined') && (typeof test.core.Action !== 'undefined')){
} else {
test.core.Action = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"test.core","Action"),(function (_,action){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"active-source","active-source",1444022818),(function (state,p__36170){
var map__36171 = p__36170;
var map__36171__$1 = (((((!((map__36171 == null))))?(((((map__36171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36171):map__36171);
var item = cljs.core.get.call(null,map__36171__$1,new cljs.core.Keyword(null,"item","item",249373802));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968)], null),item);
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"delete-source","delete-source",872400990),(function (state,_){
test.db.delete_datom.call(null,cljs.core.deref.call(null,test.core.money_source));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"balance","balance",418967409)], null),test.db.get_balance.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"money-sources","money-sources",-1160332683)], null),test.db.get_money_sources.call(null));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"source-name","source-name",1931491805),(function (state,p__36173){
var map__36174 = p__36173;
var map__36174__$1 = (((((!((map__36174 == null))))?(((((map__36174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36174):map__36174);
var value = cljs.core.get.call(null,map__36174__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","name","money-source/name",-388621823)], null),value);
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"source-balance","source-balance",538283242),(function (state,p__36176){
var map__36177 = p__36176;
var map__36177__$1 = (((((!((map__36177 == null))))?(((((map__36177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36177):map__36177);
var value = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799)], null),(((((!((cljs.core.re_find.call(null,/[A-Z, a-z]+/,value) == null)))) || (cljs.core.empty_QMARK_.call(null,value))))?(0):value));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"account-number","account-number",-654828257),(function (state,p__36179){
var map__36180 = p__36179;
var map__36180__$1 = (((((!((map__36180 == null))))?(((((map__36180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36180):map__36180);
var value = cljs.core.get.call(null,map__36180__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631)], null),((cljs.core.empty_QMARK_.call(null,value))?"":clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),/ /,"")));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"source-type","source-type",-237000407),(function (state,p__36182){
var map__36183 = p__36182;
var map__36183__$1 = (((((!((map__36183 == null))))?(((((map__36183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36183):map__36183);
var value = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231),new cljs.core.Keyword("money-source","type","money-source/type",-1033885852)], null),value);
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"add-source-to-db","add-source-to-db",1272430846),(function (state,_){
var validate_fn = (function (data){
if((function (){var number = cljs.core.deref.call(null,test.core.account_number);
var dg_number = cljs.core.count.call(null,cljs.core.re_find.call(null,/\d+/,number));
var ch_number = cljs.core.count.call(null,cljs.core.re_find.call(null,/[A-Z, a-z]+/,number));
return ((cljs.core._EQ_.call(null,ch_number,(0))) && (((cljs.core._EQ_.call(null,dg_number,(16))) || (cljs.core._EQ_.call(null,dg_number,(0))))));
})()){
test.db.add_transaction.call(null,new cljs.core.Keyword(null,"new-money-source","new-money-source",34321231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(data)));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"money-sources","money-sources",-1160332683)], null),test.db.get_money_sources.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"source-error","source-error",-1032045306)], null),"");
} else {
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"source-error","source-error",-1032045306)], null),"Error! Invalid account number");
}
});
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,test.core.sname))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"source-error","source-error",-1032045306)], null),"Invalid!! Empty name");
} else {
return validate_fn.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"source-error","source-error",-1032045306)], null),""));
}
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (state,_){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"new-date","new-date",1161705693),(function (state,p__36185){
var map__36186 = p__36185;
var map__36186__$1 = (((((!((map__36186 == null))))?(((((map__36186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36186):map__36186);
var value = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","date","transaction/date",694214084)], null),value);
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"new-tag","new-tag",2029496964),(function (state,p__36188){
var map__36189 = p__36188;
var map__36189__$1 = (((((!((map__36189 == null))))?(((((map__36189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36189):map__36189);
var value = cljs.core.get.call(null,map__36189__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","tag","transaction/tag",863365855)], null),test.db.get_id_tag.call(null,value,cljs.core.deref.call(null,test.core.flow)));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"money","money",250333921),(function (state,p__36191){
var map__36192 = p__36191;
var map__36192__$1 = (((((!((map__36192 == null))))?(((((map__36192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36192):map__36192);
var value = cljs.core.get.call(null,map__36192__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840),new cljs.core.Keyword("transaction","money","transaction/money",-1907457661)], null),((cljs.core.int_QMARK_.call(null,value))?value:(0)));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"balance","balance",418967409),(function (state,_){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"balance","balance",418967409)], null),test.db.get_balance.call(null));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"all-flow","all-flow",597251601),(function (state,_){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"all-flow","all-flow",597251601)], null),test.db.get_all_flow.call(null));
}));
cljs.core._add_method.call(null,test.core.Action,new cljs.core.Keyword(null,"add-transaction","add-transaction",-800222714),(function (state,_){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,test.core.money),(0))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"money-error","money-error",450684440)], null),"Enter money for transaction");
} else {
test.db.add_transaction.call(null,new cljs.core.Keyword(null,"new-transaction","new-transaction",1400667840).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(state)));

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"money-error","money-error",450684440)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),test.db.get_transactions.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"balance","balance",418967409)], null),test.db.get_balance.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"money-sources","money-sources",-1160332683)], null),test.db.get_money_sources.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"all-flow","all-flow",597251601)], null),test.db.get_all_flow.call(null)),new cljs.core.Keyword(null,"chart-config","chart-config",-943860893),test.core.get_chart_config.call(null));
}
}));
test.core.dispatch_BANG_ = (function test$core$dispatch_BANG_(action){
cljs.core.swap_BANG_.call(null,test.core._BANG_state,(function (p1__36194_SHARP_){
return test.core.Action.call(null,p1__36194_SHARP_,action);
}));

return cljs.core.println.call(null,new cljs.core.Keyword(null,"chart-config","chart-config",-943860893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test.core._BANG_state)));
});
test.core.transform_account_number = (function test$core$transform_account_number(value){
var sub_str = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition_all.call(null,(4),value));
if(cljs.core.empty_QMARK_.call(null,value)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sub_str))," **** **** ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,sub_str))].join('');
}
});
test.core.calculate_flow_expence = (function test$core$calculate_flow_expence(flow){
return (((new cljs.core.Keyword(null,"expence","expence",-1445014340).cljs$core$IFn$_invoke$arity$1(flow) / new cljs.core.Keyword(null,"flow","flow",590489032).cljs$core$IFn$_invoke$arity$1(flow)) * (100)) | (0));
});
test.core.div_source = (function test$core$div_source(item,on_click_fn){
var bsource = cljs.core._EQ_.call(null,cljs.core.deref.call(null,test.core.money_source),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source","div.source",1099736549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#4b5a6b",new cljs.core.Keyword(null,"background-color","background-color",570434026),((bsource)?"rgb(85,98,112, 0.5)":"rgb(133,147,152, 0.3)")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active-source","active-source",1444022818),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1% 3% 0% 0%",new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"visibility","visibility",1338380893),((bsource)?"visible":"hidden")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-source","delete-source",872400990)], null));
})], null),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword("money-source","name","money-source/name",-388621823).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),test.core.transform_account_number.call(null,new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631).cljs$core$IFn$_invoke$arity$1(item))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(0, 0, 0, 0.9)"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799).cljs$core$IFn$_invoke$arity$1(item))," UAH"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.Keyword("money-source","type","money-source/type",-1033885852).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null);
});
test.core.add_source = (function test$core$add_source(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source","div.source",1099736549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-source","input.add-source",1737242507),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36195_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source-name","source-name",1931491805),new cljs.core.Keyword(null,"value","value",305978217),p1__36195_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-source","input.add-source",1737242507),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter balance",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36196_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source-balance","source-balance",538283242),new cljs.core.Keyword(null,"value","value",305978217),p1__36196_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-source","input.add-source",1737242507),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter account number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36197_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"account-number","account-number",-654828257),new cljs.core.Keyword(null,"value","value",305978217),p1__36197_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-source","input.add-source",1737242507),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36198_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source-type","source-type",-237000407),new cljs.core.Keyword(null,"value","value",305978217),p1__36198_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-btn","input.add-btn",-1753507389),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-source-to-db","add-source-to-db",1272430846)], null));
})], null)], null)], null);
});
test.core.money_source_form = (function test$core$money_source_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.header","p.header",-526489083),"Choose money source:"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-set","div.source-set",1533249194),(function (){var iter__4529__auto__ = (function test$core$money_source_form_$_iter__36199(s__36200){
return (new cljs.core.LazySeq(null,(function (){
var s__36200__$1 = s__36200;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36200__$1);
if(temp__5720__auto__){
var s__36200__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36200__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36200__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36202 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36201 = (0);
while(true){
if((i__36201 < size__4528__auto__)){
var item = cljs.core._nth.call(null,c__4527__auto__,i__36201);
cljs.core.chunk_append.call(null,b__36202,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.div_source,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__36203 = (i__36201 + (1));
i__36201 = G__36203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36202),test$core$money_source_form_$_iter__36199.call(null,cljs.core.chunk_rest.call(null,s__36200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36202),null);
}
} else {
var item = cljs.core.first.call(null,s__36200__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.div_source,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),test$core$money_source_form_$_iter__36199.call(null,cljs.core.rest.call(null,s__36200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,test.core.money_sources));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.add_source], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-set","div.source-set",1533249194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",-1322813545),cljs.core.deref.call(null,test.core.source_error)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.header","p.header",-526489083),"Ener other fields for adding transaction:"], null)], null)], null);
});
test.core.flow_component = (function test$core$flow_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-form","input.input-form",-970881866),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,test.core.flow))?"rgb(74, 180, 165, 0.7)":"rgb(255, 160, 122, 0.7)")], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(cljs.core.deref.call(null,test.core.flow))?"Income":"Expence"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toggle","toggle",1291842030)], null));
})], null)], null);
});
test.core.select_tag = (function test$core$select_tag(tags){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.input-form","select.input-form",-302401052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36204_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-tag","new-tag",2029496964),new cljs.core.Keyword(null,"value","value",305978217),p1__36204_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.option-icon","option.option-icon",1682632188),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.label.label], null))], null),"Add tag"], null),(function (){var iter__4529__auto__ = (function test$core$select_tag_$_iter__36205(s__36206){
return (new cljs.core.LazySeq(null,(function (){
var s__36206__$1 = s__36206;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36206__$1);
if(temp__5720__auto__){
var s__36206__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36206__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36206__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36208 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36207 = (0);
while(true){
if((i__36207 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__36207);
cljs.core.chunk_append.call(null,b__36208,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tag], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__36209 = (i__36207 + (1));
i__36207 = G__36209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36208),test$core$select_tag_$_iter__36205.call(null,cljs.core.chunk_rest.call(null,s__36206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36208),null);
}
} else {
var tag = cljs.core.first.call(null,s__36206__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tag], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),test$core$select_tag_$_iter__36205.call(null,cljs.core.rest.call(null,s__36206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tags);
})()], null);
});
test.core.input_date = (function test$core$input_date(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-form","input.input-form",-970881866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,test.core.date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36210_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-date","new-date",1161705693),new cljs.core.Keyword(null,"value","value",305978217),p1__36210_SHARP_.target.value], null));
})], null)], null);
});
test.core.input_form = (function test$core$input_form(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-set","div.button-set",-1456616917),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.flow_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-form","input.input-form",-970881866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter money",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36211_SHARP_){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"money","money",250333921),new cljs.core.Keyword(null,"value","value",305978217),parseInt(p1__36211_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.select_tag,(cljs.core.truth_(cljs.core.deref.call(null,test.core.flow))?cljs.core.deref.call(null,test.core.income_tags):cljs.core.deref.call(null,test.core.expence_tags))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.input_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-form","input.input-form",-970881866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Save",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test.core.dispatch_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-transaction","add-transaction",-800222714)], null));
})], null)], null)], null);
});
test.core.prepare_source_items = (function test$core$prepare_source_items(items){
return cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-item","div.list-item",-2071159791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.source-name","p.source-name",-1424464776),new cljs.core.Keyword("money-source","name","money-source/name",-388621823).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.source-description","p.source-description",-2039203390),new cljs.core.Keyword("money-source","description","money-source/description",705134424).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.account-number","p.account-number",-1049475727),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
}),items);
});
test.core.table_header = (function test$core$table_header(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.tr-header","tr.tr-header",815676537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"flow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"money-source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"money"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"tag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"date"], null)], null);
});
test.core.table_child = (function test$core$table_child(item){
var flow = new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874).cljs$core$IFn$_invoke$arity$1(item);
var tag = new cljs.core.Keyword("transaction","tag","transaction/tag",863365855).cljs$core$IFn$_invoke$arity$1(item);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.tr-child","tr.tr-child",-40371926),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(flow)?"rgb(159, 226, 191, 0.4)":"rgb(255, 160, 122, 0.3)")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(flow)?"Income":"Expence")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("money-source","name","money-source/name",-388621823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968).cljs$core$IFn$_invoke$arity$1(item))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(flow)?new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465).cljs$core$IFn$_invoke$arity$1(tag):new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522).cljs$core$IFn$_invoke$arity$1(tag))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("transaction","date","transaction/date",694214084).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
});
test.core.table_transactions = (function test$core$table_transactions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-trn","table.table-trn",65617066),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.table_header], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function test$core$table_transactions_$_iter__36212(s__36213){
return (new cljs.core.LazySeq(null,(function (){
var s__36213__$1 = s__36213;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36213__$1);
if(temp__5720__auto__){
var s__36213__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36213__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36213__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36215 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36214 = (0);
while(true){
if((i__36214 < size__4528__auto__)){
var item = cljs.core._nth.call(null,c__4527__auto__,i__36214);
cljs.core.chunk_append.call(null,b__36215,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.table_child,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__36216 = (i__36214 + (1));
i__36214 = G__36216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36215),test$core$table_transactions_$_iter__36212.call(null,cljs.core.chunk_rest.call(null,s__36213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36215),null);
}
} else {
var item = cljs.core.first.call(null,s__36213__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.table_child,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item)], null)),test$core$table_transactions_$_iter__36212.call(null,cljs.core.rest.call(null,s__36213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,test.core.transactions));
})()], null)], null);
});
test.core.balance_form = (function test$core$balance_form(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-set","div.source-set",1533249194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",-1322813545),cljs.core.deref.call(null,test.core.money_error)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.header","p.header",-526489083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"All transactions:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),["Balance:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test.core.balance))," UAH"].join('')], null)], null)], null);
});
test.core.gauge_chart = (function test$core$gauge_chart(){
var part = test.core.calculate_flow_expence.call(null,cljs.core.deref.call(null,test.core.all_flow));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1% 0% 5% 27%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gauge-a","div.gauge-a",1350809149)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gauge-b","div.gauge-b",1584899513)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gauge-c","div.gauge-c",966600733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((part < (35)))?"rgb(9, 180, 165, .4)":(((part > (65)))?"rgb(255, 71, 71, .7)":"rgb(255, 160, 122, .7)"
)),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((180) * part) / (100)) | (0))),"deg)"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gauge-data","div.gauge-data",-233988559),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"%"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header","h1.header",2109962789),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-7%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-4%",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-11%"], null)], null),"The ratio of expen\u0441e to cash flow"], null)], null);
});
test.core.mount_chart = (function test$core$mount_chart(comp){
return Highcharts.chart(reagent.dom.dom_node.call(null,comp),cljs.core.clj__GT_js.call(null,reagent.core.props.call(null,comp)));
});
test.core.update_chart = (function test$core$update_chart(comp){
return test.core.mount_chart.call(null,comp);
});
test.core.chart_inner = (function test$core$chart_inner(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (comp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"55%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0% 0% 2% 3.5%"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),test.core.mount_chart,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),test.core.update_chart], null));
});
test.core.chart_outer = (function test$core$chart_outer(config){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.chart_inner,new cljs.core.Keyword(null,"chart-config","chart-config",-943860893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,config))], null);
});
test.core.components = (function test$core$components(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.gauge_chart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.chart_outer,test.core._BANG_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.money_source_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.input_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.balance_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.table_transactions], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.core.components], null),document.getElementById("app"));
test.core.on_js_reload = (function test$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1637926543528
