// Compiled by ClojureScript 1.10.773 {}
goog.provide('test.db');
goog.require('cljs.core');
goog.require('datascript.core');
/**
 * Description:
 *  create schema (datoms) for db,
 *  schema describes the set of attributes
 */
test.db.schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968),new cljs.core.Keyword("money-source","name","money-source/name",-388621823),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),new cljs.core.Keyword("transaction","money","transaction/money",-1907457661),new cljs.core.Keyword("transaction","date","transaction/date",694214084),new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874),new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),new cljs.core.Keyword("transaction","tag","transaction/tag",863365855)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","doc","db/doc",1913350069),"boolean, if income - true, expence -false"], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)]);
test.db.db = datascript.core.create_conn.call(null,test.db.schema);
test.db.db_datoms = (function test$db$db_datoms(data){
return datascript.core.transact_BANG_.call(null,test.db.db,data);
});
test.db.add_transaction = (function test$db$add_transaction(data){
return test.db.db_datoms.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null)),cljs.core.merge.call(null,cljs.core.update.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,datascript.core.entity.call(null,cljs.core.deref.call(null,test.db.db),new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(function (p1__41127_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874).cljs$core$IFn$_invoke$arity$1(data))){
return (p1__41127_SHARP_ + new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(data));
} else {
return (p1__41127_SHARP_ - new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(data));
}
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968).cljs$core$IFn$_invoke$arity$1(data)], null))], null));
});
test.db.fish_map = (function test$db$fish_map(id){
var rand_nums = (function (p1__41128_SHARP_,p2__41129_SHARP_){
return cljs.core.rand_nth.call(null,cljs.core.range.call(null,p1__41128_SHARP_,p2__41129_SHARP_));
});
var money_source = rand_nums.call(null,(18),(22));
var income_tag = rand_nums.call(null,(1),(5));
var expence_tag = rand_nums.call(null,(5),(18));
var money = (cljs.core.rand.call(null,(1000)) | (0));
var year = rand_nums.call(null,(2020),(2021));
var month = rand_nums.call(null,(0),(12));
var day = rand_nums.call(null,(0),(28));
var flow = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
var tag = (cljs.core.truth_(flow)?income_tag:expence_tag);
var date = (function (year__$1,month__$1,day__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year__$1),"-",(((month__$1 < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month__$1),"-",(((day__$1 < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day__$1)].join('');
});
var date__$1 = date.call(null,year,month,day);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("transaction","date","transaction/date",694214084),date__$1,new cljs.core.Keyword("transaction","money-source","transaction/money-source",-878971968),money_source,new cljs.core.Keyword("transaction","tag","transaction/tag",863365855),tag,new cljs.core.Keyword("transaction","money","transaction/money",-1907457661),money,new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874),flow], null);
});
test.db.fish_data = (function test$db$fish_data(ammount){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (i){
return test.db.fish_map.call(null,i);
}),cljs.core.range.call(null,(22),((22) + ammount))));
});
test.db.db_datoms.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465),"deposits"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465),"salary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465),"savings"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-4),new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465),"other"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-5),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"clothes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-6),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"gifts"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-7),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"health"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-8),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"food"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-9),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"transport"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-10),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"sport"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-11),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"travel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-12),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"entertainment"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-13),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"house"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-14),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"pets"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-15),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"family"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-16),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"car"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-17),new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522),"other"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-18),new cljs.core.Keyword("money-source","name","money-source/name",-388621823),"cash",new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),"",new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(350),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-19),new cljs.core.Keyword("money-source","name","money-source/name",-388621823),"privat",new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),"visa",new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(1000),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),"5123456787658888"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-20),new cljs.core.Keyword("money-source","name","money-source/name",-388621823),"card",new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),"visa",new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(12300),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),"3344555555556666"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-21),new cljs.core.Keyword("money-source","name","money-source/name",-388621823),"monobank",new cljs.core.Keyword("money-source","type","money-source/type",-1033885852),"mastercard",new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799),(1435),new cljs.core.Keyword("money-source","account-number","money-source/account-number",1575588631),"4132444433334747"], null)], null),test.db.fish_data.call(null,(30))));
test.db.get_column = (function test$db$get_column(column){
return cljs.core.apply.call(null,cljs.core.concat,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?value","?value",393627875,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?column","?column",-1649786684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"?column","?column",-1649786684,null),new cljs.core.Symbol(null,"?value","?value",393627875,null)], null)], null),cljs.core.deref.call(null,test.db.db),column));
});
test.db.get_columns = (function test$db$get_columns(column){
return datascript.core.pull_many.call(null,cljs.core.deref.call(null,test.db.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?column","?column",-1649786684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?column","?column",-1649786684,null)], null)], null),cljs.core.deref.call(null,test.db.db),column))));
});
test.db.get_income_tags = (function test$db$get_income_tags(){
return test.db.get_column.call(null,new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465));
});
test.db.get_expence_tags = (function test$db$get_expence_tags(){
return test.db.get_column.call(null,new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522));
});
test.db.get_id_tag = (function test$db$get_id_tag(tag,flow){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Symbol(null,"?k","?k",-590175101,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?k","?k",-590175101,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null)], null),cljs.core.deref.call(null,test.db.db),tag,(cljs.core.truth_(flow)?new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465):new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522)));
});
test.db.get_money_sources = (function test$db$get_money_sources(){
return test.db.get_columns.call(null,new cljs.core.Keyword("money-source","name","money-source/name",-388621823));
});
test.db.get_transactions = (function test$db$get_transactions(){
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),test.db.get_columns.call(null,new cljs.core.Keyword("transaction","money","transaction/money",-1907457661))));
});
test.db.get_balance = (function test$db$get_balance(){
return cljs.core.reduce.call(null,(function (acc,m){
return (acc + new cljs.core.Keyword("money-source","balance","money-source/balance",-2075485799).cljs$core$IFn$_invoke$arity$1(m));
}),(0),test.db.get_money_sources.call(null));
});
test.db.get_all_flow = (function test$db$get_all_flow(){
return cljs.core.reduce.call(null,(function (acc,m){
return cljs.core.update.call(null,(cljs.core.truth_(new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"income","income",654385502),(function (p1__41130_SHARP_){
return (p1__41130_SHARP_ + new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(m));
})):cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"expence","expence",-1445014340),(function (p1__41131_SHARP_){
return (p1__41131_SHARP_ + new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(m));
}))),new cljs.core.Keyword(null,"flow","flow",590489032),(function (p1__41132_SHARP_){
return (p1__41132_SHARP_ + new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(m));
}));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flow","flow",590489032),(0),new cljs.core.Keyword(null,"expence","expence",-1445014340),(0),new cljs.core.Keyword(null,"income","income",654385502),(0)], null),test.db.get_transactions.call(null));
});
test.db.get_data_chart = (function test$db$get_data_chart(){
var str_to_date = (function (str_data){
var vec__41133 = cljs.core.mapv.call(null,(function (s){
return clojure.edn.read_string.call(null,((cljs.core._EQ_.call(null,cljs.core.first.call(null,s),"0"))?cljs.core.subs.call(null,s,(1)):s));
}),clojure.string.split.call(null,str_data,/\-/));
var year = cljs.core.nth.call(null,vec__41133,(0),null);
var month = cljs.core.nth.call(null,vec__41133,(1),null);
var day = cljs.core.nth.call(null,vec__41133,(2),null);
return Date.UTC(year,month,day);
});
return cljs.core.reduce.call(null,(function (acc,p__41136){
var vec__41137 = p__41136;
var m = cljs.core.nth.call(null,vec__41137,(0),null);
var v = cljs.core.nth.call(null,vec__41137,(1),null);
var flow = new cljs.core.Keyword("transaction","flow","transaction/flow",-1568838874).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,v));
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(flow)?new cljs.core.Keyword("tag","income-tag","tag/income-tag",1411796465).cljs$core$IFn$_invoke$arity$1(m):new cljs.core.Keyword("tag","expence-tag","tag/expence-tag",11955522).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(flow)?"rgb(9, 180, 165, .5)":"rgb(255, 160, 122, .7)"),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec.call(null,cljs.core.map.call(null,(function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_to_date.call(null,new cljs.core.Keyword("transaction","date","transaction/date",694214084).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword("transaction","money","transaction/money",-1907457661).cljs$core$IFn$_invoke$arity$1(t)], null);
}),v))], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,new cljs.core.Keyword("transaction","tag","transaction/tag",863365855),test.db.get_transactions.call(null)));
});
test.db.delete_datom = (function test$db$delete_datom(id){
return test.db.add_transaction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),id], null));
});

//# sourceMappingURL=db.js.map?rel=1637924656741
