// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.call(null,"DEPRECATION WARNING: ",message);
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

var cljs_time$core$DateTimeProtocol$year$dyn_40547 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.year[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.year["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
});
/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$year$dyn_40547.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$month$dyn_40549 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.month[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.month["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
});
/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$month$dyn_40549.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$day$dyn_40550 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.day[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.day["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
});
/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$day$dyn_40550.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$day_of_week$dyn_40551 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.day_of_week["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
});
/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$day_of_week$dyn_40551.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$hour$dyn_40552 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.hour[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.hour["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
});
/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$hour$dyn_40552.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$minute$dyn_40553 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.minute[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.minute["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
});
/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$minute$dyn_40553.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$sec$dyn_40554 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.sec[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.sec["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
});
/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$sec$dyn_40554.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$second$dyn_40555 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.second[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.second["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
});
/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$second$dyn_40555.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$milli$dyn_40556 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.milli[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.milli["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
});
/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$milli$dyn_40556.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$equal_QMARK_$dyn_40557 = (function (this$,that){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,that);
} else {
var m__4426__auto__ = (cljs_time.core.equal_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$equal_QMARK_$dyn_40557.call(null,this$,that);
}
});

var cljs_time$core$DateTimeProtocol$after_QMARK_$dyn_40558 = (function (this$,that){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,that);
} else {
var m__4426__auto__ = (cljs_time.core.after_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$after_QMARK_$dyn_40558.call(null,this$,that);
}
});

var cljs_time$core$DateTimeProtocol$before_QMARK_$dyn_40559 = (function (this$,that){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,that);
} else {
var m__4426__auto__ = (cljs_time.core.before_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$before_QMARK_$dyn_40559.call(null,this$,that);
}
});

var cljs_time$core$DateTimeProtocol$plus_$dyn_40560 = (function (this$,period){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.plus_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,period);
} else {
var m__4426__auto__ = (cljs_time.core.plus_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
});
/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
return cljs_time$core$DateTimeProtocol$plus_$dyn_40560.call(null,this$,period);
}
});

var cljs_time$core$DateTimeProtocol$minus_$dyn_40561 = (function (this$,period){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.minus_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,period);
} else {
var m__4426__auto__ = (cljs_time.core.minus_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
});
/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
return cljs_time$core$DateTimeProtocol$minus_$dyn_40561.call(null,this$,period);
}
});

var cljs_time$core$DateTimeProtocol$first_day_of_the_month_$dyn_40562 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.first_day_of_the_month_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
});
/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$first_day_of_the_month_$dyn_40562.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$last_day_of_the_month_$dyn_40563 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.last_day_of_the_month_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
});
/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$last_day_of_the_month_$dyn_40563.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$week_number_of_year$dyn_40564 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.week_number_of_year["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-number-of-year",this$);
}
}
});
/**
 * Returns the week of the week based year of the given date/time
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$week_number_of_year$dyn_40564.call(null,this$);
}
});

var cljs_time$core$DateTimeProtocol$week_year$dyn_40565 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.week_year[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.week_year["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-year",this$);
}
}
});
/**
 * Returns the the week based year of the given date/time.
 */
cljs_time.core.week_year = (function cljs_time$core$week_year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$week_year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$week_year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$week_year$dyn_40565.call(null,this$);
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

var cljs_time$core$InTimeUnitProtocol$in_millis$dyn_40572 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_millis["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
});
/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_millis$dyn_40572.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_seconds$dyn_40575 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_seconds["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
});
/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_seconds$dyn_40575.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_minutes$dyn_40576 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_minutes["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
});
/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_minutes$dyn_40576.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_hours$dyn_40579 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_hours["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
});
/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_hours$dyn_40579.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_days$dyn_40580 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_days[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_days["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
});
/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_days$dyn_40580.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_weeks$dyn_40583 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_weeks["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
});
/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_weeks$dyn_40583.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_months$dyn_40584 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_months[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_months["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
});
/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_months$dyn_40584.call(null,this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_years$dyn_40587 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs_time.core.in_years[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs_time.core.in_years["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
});
/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_years$dyn_40587.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k40589,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__40597 = k40589;
var G__40597__$1 = (((G__40597 instanceof cljs.core.Keyword))?G__40597.fqn:null);
switch (G__40597__$1) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40589,else__4383__auto__);

}
}));

(cljs_time.core.Interval.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__40598){
var vec__40599 = p__40598;
var k__4403__auto__ = cljs.core.nth.call(null,vec__40599,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__40599,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs-time.core.Interval{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40588){
var self__ = this;
var G__40588__$1 = this;
return (new cljs.core.RecordIter((0),G__40588__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (534314193 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40591,other40592){
var self__ = this;
var this40591__$1 = this;
return (((!((other40592 == null)))) && ((this40591__$1.constructor === other40592.constructor)) && (cljs.core._EQ_.call(null,this40591__$1.start,other40592.start)) && (cljs.core._EQ_.call(null,this40591__$1.end,other40592.end)) && (cljs.core._EQ_.call(null,this40591__$1.__extmap,other40592.__extmap)));
}));

(cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__40588){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__40607 = cljs.core.keyword_identical_QMARK_;
var expr__40608 = k__4388__auto__;
if(cljs.core.truth_(pred__40607.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__40608))){
return (new cljs_time.core.Interval(G__40588,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40607.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__40608))){
return (new cljs_time.core.Interval(self__.start,G__40588,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__40588),null));
}
}
}));

(cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end","end",-268185958),self__.end,null))], null),self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__40588){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__40588,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
}));

(cljs_time.core.Interval.cljs$lang$type = true);

(cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs-time.core/Interval",null,(1),null));
}));

(cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs-time.core/Interval");
}));

/**
 * Positional factory function for cljs-time.core/Interval.
 */
cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

/**
 * Factory function for cljs-time.core/Interval, taking a map of keywords to field values.
 */
cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__40594){
var extmap__4419__auto__ = (function (){var G__40613 = cljs.core.dissoc.call(null,G__40594,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.record_QMARK_.call(null,G__40594)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__40613);
} else {
return G__40613;
}
})();
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__40594),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__40594),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k40658,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__40662 = k40658;
var G__40662__$1 = (((G__40662 instanceof cljs.core.Keyword))?G__40662.fqn:null);
switch (G__40662__$1) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40658,else__4383__auto__);

}
}));

(cljs_time.core.Period.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__40663){
var vec__40664 = p__40663;
var k__4403__auto__ = cljs.core.nth.call(null,vec__40664,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__40664,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs-time.core.Period{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40657){
var self__ = this;
var G__40657__$1 = this;
return (new cljs.core.RecordIter((0),G__40657__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1393857022 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40659,other40660){
var self__ = this;
var this40659__$1 = this;
return (((!((other40660 == null)))) && ((this40659__$1.constructor === other40660.constructor)) && (cljs.core._EQ_.call(null,this40659__$1.years,other40660.years)) && (cljs.core._EQ_.call(null,this40659__$1.months,other40660.months)) && (cljs.core._EQ_.call(null,this40659__$1.weeks,other40660.weeks)) && (cljs.core._EQ_.call(null,this40659__$1.days,other40660.days)) && (cljs.core._EQ_.call(null,this40659__$1.hours,other40660.hours)) && (cljs.core._EQ_.call(null,this40659__$1.minutes,other40660.minutes)) && (cljs.core._EQ_.call(null,this40659__$1.seconds,other40660.seconds)) && (cljs.core._EQ_.call(null,this40659__$1.millis,other40660.millis)) && (cljs.core._EQ_.call(null,this40659__$1.__extmap,other40660.__extmap)));
}));

(cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__40657){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__40677 = cljs.core.keyword_identical_QMARK_;
var expr__40678 = k__4388__auto__;
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__40678))){
return (new cljs_time.core.Period(G__40657,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__40678))){
return (new cljs_time.core.Period(self__.years,G__40657,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,G__40657,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__40657,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__40657,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__40657,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__40657,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40677.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__40678))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__40657,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__40657),null));
}
}
}
}
}
}
}
}
}));

(cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"years","years",-1298579689),self__.years,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"months","months",-45571637),self__.months,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"days","days",-1394072564),self__.days,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis,null))], null),self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__40657){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__40657,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
}));

(cljs_time.core.Period.cljs$lang$type = true);

(cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs-time.core/Period",null,(1),null));
}));

(cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs-time.core/Period");
}));

/**
 * Positional factory function for cljs-time.core/Period.
 */
cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

/**
 * Factory function for cljs-time.core/Period, taking a map of keywords to field values.
 */
cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__40661){
var extmap__4419__auto__ = (function (){var G__40683 = cljs.core.dissoc.call(null,G__40661,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387));
if(cljs.core.record_QMARK_.call(null,G__40661)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__40683);
} else {
return G__40683;
}
})();
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__40661),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__40661),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var G__40698 = arguments.length;
switch (G__40698) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40704 = arguments.length;
var i__4737__auto___40705 = (0);
while(true){
if((i__4737__auto___40705 < len__4736__auto___40704)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40705]));

var G__40706 = (i__4737__auto___40705 + (1));
i__4737__auto___40705 = G__40706;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([period,value]));
}));

(cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
}));

/** @this {Function} */
(cljs_time.core.period.cljs$lang$applyTo = (function (seq40695){
var G__40696 = cljs.core.first.call(null,seq40695);
var seq40695__$1 = cljs.core.next.call(null,seq40695);
var G__40697 = cljs.core.first.call(null,seq40695__$1);
var seq40695__$2 = cljs.core.next.call(null,seq40695__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40696,G__40697,seq40695__$2);
}));

(cljs_time.core.period.cljs$lang$maxFixedArity = (2));

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (date,op,value){
var ms = op.call(null,date.getTime(),value);
var G__40712 = date;
G__40712.setTime(ms);

return G__40712;
}),new cljs.core.Keyword(null,"weeks","weeks",1844596125),(function (date,op,value){
var days = op.call(null,(0),(value * (7)));
var G__40713 = date;
G__40713.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__40713;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",1319166394),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",58380855),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",-1394072564),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",-45571637),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",-1298579689),goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = (function (op,interval,value){
if(cljs.core.truth_((function (){var and__4115__auto__ = interval;
if(cljs.core.truth_(and__4115__auto__)){
return value;
} else {
return and__4115__auto__;
}
})())){
return (new goog.date.Interval(interval,op.call(null,(0),value)));
} else {
return null;
}
});
var seq__40717_40745 = cljs.core.seq.call(null,p);
var chunk__40718_40746 = null;
var count__40719_40747 = (0);
var i__40720_40748 = (0);
while(true){
if((i__40720_40748 < count__40719_40747)){
var vec__40733_40751 = cljs.core._nth.call(null,chunk__40718_40746,i__40720_40748);
var k_40752 = cljs.core.nth.call(null,vec__40733_40751,(0),null);
var v_40754 = cljs.core.nth.call(null,vec__40733_40751,(1),null);
var temp__5718__auto___40755 = cljs_time.core.periods.call(null,k_40752);
if(cljs.core.truth_(temp__5718__auto___40755)){
var period_40756 = temp__5718__auto___40755;
var temp__5720__auto___40757 = __GT_goog_interval.call(null,operator,period_40756,v_40754);
if(cljs.core.truth_(temp__5720__auto___40757)){
var i_40758 = temp__5720__auto___40757;
date_SINGLEQUOTE_.add(i_40758);
} else {
}
} else {
var temp__5720__auto___40759 = cljs_time.core.period_fns.call(null,k_40752);
if(cljs.core.truth_(temp__5720__auto___40759)){
var f_40760 = temp__5720__auto___40759;
f_40760.call(null,date_SINGLEQUOTE_,operator,v_40754);
} else {
}
}


var G__40761 = seq__40717_40745;
var G__40762 = chunk__40718_40746;
var G__40763 = count__40719_40747;
var G__40764 = (i__40720_40748 + (1));
seq__40717_40745 = G__40761;
chunk__40718_40746 = G__40762;
count__40719_40747 = G__40763;
i__40720_40748 = G__40764;
continue;
} else {
var temp__5720__auto___40765 = cljs.core.seq.call(null,seq__40717_40745);
if(temp__5720__auto___40765){
var seq__40717_40766__$1 = temp__5720__auto___40765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40717_40766__$1)){
var c__4556__auto___40767 = cljs.core.chunk_first.call(null,seq__40717_40766__$1);
var G__40768 = cljs.core.chunk_rest.call(null,seq__40717_40766__$1);
var G__40769 = c__4556__auto___40767;
var G__40770 = cljs.core.count.call(null,c__4556__auto___40767);
var G__40771 = (0);
seq__40717_40745 = G__40768;
chunk__40718_40746 = G__40769;
count__40719_40747 = G__40770;
i__40720_40748 = G__40771;
continue;
} else {
var vec__40739_40772 = cljs.core.first.call(null,seq__40717_40766__$1);
var k_40773 = cljs.core.nth.call(null,vec__40739_40772,(0),null);
var v_40774 = cljs.core.nth.call(null,vec__40739_40772,(1),null);
var temp__5718__auto___40775 = cljs_time.core.periods.call(null,k_40773);
if(cljs.core.truth_(temp__5718__auto___40775)){
var period_40777 = temp__5718__auto___40775;
var temp__5720__auto___40778__$1 = __GT_goog_interval.call(null,operator,period_40777,v_40774);
if(cljs.core.truth_(temp__5720__auto___40778__$1)){
var i_40779 = temp__5720__auto___40778__$1;
date_SINGLEQUOTE_.add(i_40779);
} else {
}
} else {
var temp__5720__auto___40781__$1 = cljs_time.core.period_fns.call(null,k_40773);
if(cljs.core.truth_(temp__5720__auto___40781__$1)){
var f_40782 = temp__5720__auto___40781__$1;
f_40782.call(null,date_SINGLEQUOTE_,operator,v_40774);
} else {
}
}


var G__40783 = cljs.core.next.call(null,seq__40717_40766__$1);
var G__40784 = null;
var G__40785 = (0);
var G__40786 = (0);
seq__40717_40745 = G__40783;
chunk__40718_40746 = G__40784;
count__40719_40747 = G__40785;
i__40720_40748 = G__40786;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.call(null,yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.call(null,dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.get_week_year.call(null,this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) > (0));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) < (0));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.get_week_year.call(null,this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));
.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
.default_ms_fn = (function $default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
.offset_ms_fn = (function $offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
.static_ms_fn = (function $static_ms_fn(ms){
return (function (){
return ms;
});
});
._STAR_ms_fn_STAR_ = .default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
.now = (function $now(){
var G__40792 = (new goog.date.UtcDateTime());
G__40792.setTime(._STAR_ms_fn_STAR_.call(null));

return G__40792;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
.time_now = (function $time_now(){
var G__40793 = (new goog.date.DateTime());
G__40793.setTime(._STAR_ms_fn_STAR_.call(null));

return G__40793;
});
.at_midnight = (function $at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__40794 = datetime__$1;
G__40794.setHours((0));

G__40794.setMinutes((0));

G__40794.setSeconds((0));

G__40794.setMilliseconds((0));

return G__40794;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
.today_at_midnight = (function $today_at_midnight(){
return .at_midnight.call(null,.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
.epoch = (function $epoch(){
var G__40795 = (new goog.date.UtcDateTime());
G__40795.setTime((0));

return G__40795;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
.date_midnight = (function $date_midnight(var_args){
var G__40797 = arguments.length;
switch (G__40797) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return .date_midnight.call(null,year,(1),(1));
}));

(.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .date_midnight.call(null,year,month,(1));
}));

(.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
}));

(.date_midnight.cljs$lang$maxFixedArity = 3);

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
.date_time = (function $date_time(var_args){
var G__40800 = arguments.length;
switch (G__40800) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return .date_time.call(null,year,(1),(1),(0),(0),(0),(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .date_time.call(null,year,month,(1),(0),(0),(0),(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return .date_time.call(null,year,month,day,(0),(0),(0),(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return .date_time.call(null,year,month,day,hour,(0),(0),(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return .date_time.call(null,year,month,day,hour,minute,(0),(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return .date_time.call(null,year,month,day,hour,minute,second,(0));
}));

(.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
}));

(.date_time.cljs$lang$maxFixedArity = 7);

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
.local_date_time = (function $local_date_time(var_args){
var G__40803 = arguments.length;
switch (G__40803) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return .local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return .local_date_time.call(null,year,month,day,(0),(0),(0),(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return .local_date_time.call(null,year,month,day,hour,(0),(0),(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return .local_date_time.call(null,year,month,day,hour,minute,(0),(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return .local_date_time.call(null,year,month,day,hour,minute,second,(0));
}));

(.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
}));

(.local_date_time.cljs$lang$maxFixedArity = 7);

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
.local_date = (function $local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
.today = (function $today(){
return (new goog.date.Date((new Date(._STAR_ms_fn_STAR_.call(null)))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
.time_zone_for_offset = (function $time_zone_for_offset(var_args){
var G__40806 = arguments.length;
switch (G__40806) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return .time_zone_for_offset.call(null,hours,null);
}));

(.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = ["UTC%s%02d",(cljs.core.truth_(minutes)?":%02d":null)].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__4126__auto__ = minutes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
}));

(.time_zone_for_offset.cljs$lang$maxFixedArity = 2);

/**
 * Returns the default timezone map for the current environment.
 */
.default_time_zone = (function $default_time_zone(){
var offset = (function (){var G__40808 = (new goog.date.DateTime());
G__40808.setTime(._STAR_ms_fn_STAR_.call(null));

return G__40808;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return .time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
.to_default_time_zone = (function $to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
.to_utc_time_zone = (function $to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
.from_default_time_zone = (function $from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
.from_utc_time_zone = (function $from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,dt))){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
.years = (function $years(var_args){
var G__40810 = arguments.length;
switch (G__40810) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return .years.call(null,null);
}));

(.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
}));

(.years.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
.months = (function $months(var_args){
var G__40813 = arguments.length;
switch (G__40813) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return .months.call(null,null);
}));

(.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
}));

(.months.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
.weeks = (function $weeks(var_args){
var G__40816 = arguments.length;
switch (G__40816) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return .weeks.call(null,null);
}));

(.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
}));

(.weeks.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
.days = (function $days(var_args){
var G__40819 = arguments.length;
switch (G__40819) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return .days.call(null,null);
}));

(.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
}));

(.days.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
.hours = (function $hours(var_args){
var G__40822 = arguments.length;
switch (G__40822) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return .hours.call(null,null);
}));

(.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
}));

(.hours.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
.minutes = (function $minutes(var_args){
var G__40825 = arguments.length;
switch (G__40825) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return .minutes.call(null,null);
}));

(.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
}));

(.minutes.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
.seconds = (function $seconds(var_args){
var G__40828 = arguments.length;
switch (G__40828) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return .seconds.call(null,null);
}));

(.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
}));

(.seconds.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
.millis = (function $millis(var_args){
var G__40831 = arguments.length;
switch (G__40831) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return .millis.call(null,null);
}));

(.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return .period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
}));

(.millis.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
.plus = (function $plus(var_args){
var G__40837 = arguments.length;
switch (G__40837) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40839 = arguments.length;
var i__4737__auto___40840 = (0);
while(true){
if((i__4737__auto___40840 < len__4736__auto___40839)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40840]));

var G__40841 = (i__4737__auto___40840 + (1));
i__4737__auto___40840 = G__40841;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return .plus_.call(null,dt,p);
}));

(.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,.plus_,.plus_.call(null,dt,p),ps);
}));

/** @this {Function} */
(.plus.cljs$lang$applyTo = (function (seq40834){
var G__40835 = cljs.core.first.call(null,seq40834);
var seq40834__$1 = cljs.core.next.call(null,seq40834);
var G__40836 = cljs.core.first.call(null,seq40834__$1);
var seq40834__$2 = cljs.core.next.call(null,seq40834__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40835,G__40836,seq40834__$2);
}));

(.plus.cljs$lang$maxFixedArity = (2));

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
.minus = (function $minus(var_args){
var G__40846 = arguments.length;
switch (G__40846) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40848 = arguments.length;
var i__4737__auto___40849 = (0);
while(true){
if((i__4737__auto___40849 < len__4736__auto___40848)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40849]));

var G__40850 = (i__4737__auto___40849 + (1));
i__4737__auto___40849 = G__40850;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return .minus_.call(null,dt,p);
}));

(.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,.minus_,.minus_.call(null,dt,p),ps);
}));

/** @this {Function} */
(.minus.cljs$lang$applyTo = (function (seq40843){
var G__40844 = cljs.core.first.call(null,seq40843);
var seq40843__$1 = cljs.core.next.call(null,seq40843);
var G__40845 = cljs.core.first.call(null,seq40843__$1);
var seq40843__$2 = cljs.core.next.call(null,seq40843__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40844,G__40845,seq40843__$2);
}));

(.minus.cljs$lang$maxFixedArity = (2));

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
.ago = (function $ago(period){
return .minus.call(null,.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
.yesterday = (function $yesterday(){
return .ago.call(null,.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
.from_now = (function $from_now(period){
return .plus.call(null,.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
.earliest = (function $earliest(var_args){
var G__40852 = arguments.length;
switch (G__40852) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
}));

(.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,.earliest,dts);
}));

(.earliest.cljs$lang$maxFixedArity = 2);

/**
 * Returns the latest of the supplied DateTimes
 */
.latest = (function $latest(var_args){
var G__40855 = arguments.length;
switch (G__40855) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
}));

(.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,.latest,dts);
}));

(.latest.cljs$lang$maxFixedArity = 2);

/**
 * Returns the start DateTime of an Interval.
 */
.start = (function $start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
.end = (function $end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
.extend = (function $extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40859 = arguments.length;
var i__4737__auto___40860 = (0);
while(true){
if((i__4737__auto___40860 < len__4736__auto___40859)){
args__4742__auto__.push((arguments[i__4737__auto___40860]));

var G__40861 = (i__4737__auto___40860 + (1));
i__4737__auto___40860 = G__40861;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,.plus,.end.call(null,in$),by));
}));

(.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(.extend.cljs$lang$applyTo = (function (seq40857){
var G__40858 = cljs.core.first.call(null,seq40857);
var seq40857__$1 = cljs.core.next.call(null,seq40857);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40858,seq40857__$1);
}));

.month_range = (function $month_range(p__40864){
var map__40865 = p__40864;
var map__40865__$1 = (((((!((map__40865 == null))))?(((((map__40865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40865):map__40865);
var start = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,(function (p1__40863_SHARP_){
return cljs.core.not.call(null,.after_QMARK_.call(null,p1__40863_SHARP_,end));
}),cljs.core.map.call(null,(function (p1__40862_SHARP_){
return .plus.call(null,start,.months.call(null,(p1__40862_SHARP_ + (1))));
}),cljs.core.range.call(null)));
});
.total_days_in_whole_months = (function $total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__40867_SHARP_){
return p1__40867_SHARP_.getNumberOfDaysInMonth();
}),.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
.in_months_ = (function $in_months_(p__40868){
var map__40869 = p__40868;
var map__40869__$1 = (((((!((map__40869 == null))))?(((((map__40869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40869):map__40869);
var interval = map__40869__$1;
var start = cljs.core.get.call(null,map__40869__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40869__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
.in_years_ = (function $in_years_(p__40871){
var map__40872 = p__40871;
var map__40872__$1 = (((((!((map__40872 == null))))?(((((map__40872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40872):map__40872);
var start = cljs.core.get.call(null,map__40872__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40872__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = .month.call(null,start);
var sd = .day.call(null,start);
var em = .month.call(null,end);
var ed = .day.call(null,end);
var d1 = ((((cljs.core._EQ_.call(null,sm,(2))) && (cljs.core._EQ_.call(null,sd,(29))) && (cljs.core._EQ_.call(null,em,(2))) && (cljs.core._EQ_.call(null,ed,(28)))))?(0):(cljs.core.truth_(.before_QMARK_.call(null,.date_time.call(null,.year.call(null,start),sm,sd),.date_time.call(null,.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(.after_QMARK_.call(null,.date_time.call(null,.year.call(null,start),sm,sd),.date_time.call(null,.year.call(null,start),em,ed)))?(1):(0)
)));
return ((.year.call(null,end) - .year.call(null,start)) - d1);
});
.conversion_error = (function $conversion_error(from,to){
var from__$1 = string.capitalize(cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
(.Period.prototype.$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(.Period.prototype.$InTimeUnitProtocol$in_millis$arity$1 = (function (p__40874){
var map__40875 = p__40874;
var map__40875__$1 = (((((!((map__40875 == null))))?(((((map__40875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40875):map__40875);
var millis = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__40875__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__40877 = this;
var map__40877__$1 = (((((!((map__40877 == null))))?(((((map__40877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40877):map__40877);
var millis__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
}));

(.Period.prototype.$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_millis.call(null,this$__$1) / (1000)) | (0));
}));

(.Period.prototype.$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_seconds.call(null,this$__$1) / (60)) | (0));
}));

(.Period.prototype.$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_minutes.call(null,this$__$1) / (60)) | (0));
}));

(.Period.prototype.$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_hours.call(null,this$__$1) / (24)) | (0));
}));

(.Period.prototype.$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_days.call(null,this$__$1) / (7)) | (0));
}));

(.Period.prototype.$InTimeUnitProtocol$in_months$arity$1 = (function (p__40879){
var map__40880 = p__40879;
var map__40880__$1 = (((((!((map__40880 == null))))?(((((map__40880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40880):map__40880);
var millis = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__40882 = this;
var map__40882__$1 = (((((!((map__40882 == null))))?(((((map__40882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40882):map__40882);
var millis__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__4126__auto__ = years__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
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
}));

(.Period.prototype.$InTimeUnitProtocol$in_years$arity$1 = (function (p__40884){
var map__40885 = p__40884;
var map__40885__$1 = (((((!((map__40885 == null))))?(((((map__40885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40885):map__40885);
var millis = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__40885__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__40887 = this;
var map__40887__$1 = (((((!((map__40887 == null))))?(((((map__40887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40887):map__40887);
var millis__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__40887__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return .conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
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
}));

(.Interval.prototype.$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(.Interval.prototype.$InTimeUnitProtocol$in_millis$arity$1 = (function (p__40889){
var map__40890 = p__40889;
var map__40890__$1 = (((((!((map__40890 == null))))?(((((map__40890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40890):map__40890);
var start = cljs.core.get.call(null,map__40890__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40890__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__40892 = this;
var map__40892__$1 = (((((!((map__40892 == null))))?(((((map__40892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40892):map__40892);
var start__$1 = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
}));

(.Interval.prototype.$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_millis.call(null,this$__$1) / (1000)) | (0));
}));

(.Interval.prototype.$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_seconds.call(null,this$__$1) / (60)) | (0));
}));

(.Interval.prototype.$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_minutes.call(null,this$__$1) / (60)) | (0));
}));

(.Interval.prototype.$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_hours.call(null,this$__$1) / (24)) | (0));
}));

(.Interval.prototype.$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((.in_days.call(null,this$__$1) / (7)) | (0));
}));

(.Interval.prototype.$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return .in_months_.call(null,this$__$1);
}));

(.Interval.prototype.$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return .in_years_.call(null,this$__$1);
}));
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
.within_QMARK_ = (function $within_QMARK_(var_args){
var G__40895 = arguments.length;
switch (G__40895) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__40896,date){
var map__40897 = p__40896;
var map__40897__$1 = (((((!((map__40897 == null))))?(((((map__40897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40897):map__40897);
var start = cljs.core.get.call(null,map__40897__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40897__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return .within_QMARK_.call(null,start,end,date);
}));

(.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__4126__auto__ = cljs.core._EQ_.call(null,start,date);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = .before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__4115__auto__)){
return .after_QMARK_.call(null,end,date);
} else {
return and__4115__auto__;
}
}
}));

(.within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
.overlaps_QMARK_ = (function $overlaps_QMARK_(var_args){
var G__40901 = arguments.length;
switch (G__40901) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__40902,p__40903){
var map__40904 = p__40902;
var map__40904__$1 = (((((!((map__40904 == null))))?(((((map__40904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40904):map__40904);
var start_a = cljs.core.get.call(null,map__40904__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__40904__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__40905 = p__40903;
var map__40905__$1 = (((((!((map__40905 == null))))?(((((map__40905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40905):map__40905);
var start_b = cljs.core.get.call(null,map__40905__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__40905__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if((!(((cljs.core._EQ_.call(null,start_a,end_b)) || (cljs.core._EQ_.call(null,end_a,start_b)))))){
return .overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return false;
}
}));

(.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__4126__auto__ = (function (){var and__4115__auto__ = .before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__4115__auto__)){
return .after_QMARK_.call(null,end_b,start_a);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = .after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__4115__auto__)){
return .before_QMARK_.call(null,start_b,end_a);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return ((cljs.core._EQ_.call(null,start_a,end_b)) || (cljs.core._EQ_.call(null,start_b,end_a)));
}
}
}));

(.overlaps_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
.overlap = (function $overlap(i_a,i_b){
if((i_b == null)){
var n = .now.call(null);
return .overlap.call(null,i_a,.interval.call(null,n,n));
} else {
if(cljs.core.truth_(.overlaps_QMARK_.call(null,i_a,i_b))){
return .interval.call(null,.latest.call(null,.start.call(null,i_a),.start.call(null,i_b)),.earliest.call(null,.end.call(null,i_a),.end.call(null,i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
.abuts_QMARK_ = (function $abuts_QMARK_(p__40909,p__40910){
var map__40911 = p__40909;
var map__40911__$1 = (((((!((map__40911 == null))))?(((((map__40911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40911):map__40911);
var start_a = cljs.core.get.call(null,map__40911__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__40911__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__40912 = p__40910;
var map__40912__$1 = (((((!((map__40912 == null))))?(((((map__40912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40912):map__40912);
var start_b = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return ((cljs.core._EQ_.call(null,start_a,end_b)) || (cljs.core._EQ_.call(null,end_a,start_b)));
});
.date_QMARK_ = (function $date_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.$DateTimeProtocol$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,.DateTimeProtocol,x);
}
});
.interval_QMARK_ = (function $interval_QMARK_(x){
return (x instanceof .Interval);
});
.period_QMARK_ = (function $period_QMARK_(x){
return (x instanceof .Period);
});
.period_type_QMARK_ = (function $period_type_QMARK_(type,x){
return ((.period_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,type)));
});
/**
 * Returns true if the given value is an instance of Years
 */
.years_QMARK_ = (function $years_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
.months_QMARK_ = (function $months_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
.weeks_QMARK_ = (function $weeks_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
.days_QMARK_ = (function $days_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
.hours_QMARK_ = (function $hours_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
.minutes_QMARK_ = (function $minutes_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
.seconds_QMARK_ = (function $seconds_QMARK_(val){
return .period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
.mins_ago = (function $mins_ago(d){
return .in_minutes.call(null,.interval.call(null,d,.now.call(null)));
});
.last_day_of_the_month = (function $last_day_of_the_month(var_args){
var G__40917 = arguments.length;
switch (G__40917) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return .last_day_of_the_month_.call(null,dt);
}));

(.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .last_day_of_the_month_.call(null,.date_time.call(null,year,month));
}));

(.last_day_of_the_month.cljs$lang$maxFixedArity = 2);

.number_of_days_in_the_month = (function $number_of_days_in_the_month(var_args){
var G__40920 = arguments.length;
switch (G__40920) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return .number_of_days_in_the_month.call(null,.year.call(null,dt),.month.call(null,dt));
}));

(.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .last_day_of_the_month.call(null,year,month).getDate();
}));

(.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2);

.first_day_of_the_month = (function $first_day_of_the_month(var_args){
var G__40923 = arguments.length;
switch (G__40923) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return .first_day_of_the_month_.call(null,dt);
}));

(.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return .first_day_of_the_month_.call(null,.date_time.call(null,year,month));
}));

(.first_day_of_the_month.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
.IToPeriod = function(){};

var $IToPeriod$__GT_period$dyn_40925 = (function (obj){
var x__4428__auto__ = (((obj == null))?null:obj);
var m__4429__auto__ = (.__GT_period[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,obj);
} else {
var m__4426__auto__ = (.__GT_period["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
});
.__GT_period = (function $__GT_period(obj){
if((((!((obj == null)))) && ((!((obj.$IToPeriod$__GT_period$arity$1 == null)))))){
return obj.$IToPeriod$__GT_period$arity$1(obj);
} else {
return $IToPeriod$__GT_period$dyn_40925.call(null,obj);
}
});

(.Interval.prototype.$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL);

(.Interval.prototype.$IToPeriod$__GT_period$arity$1 = (function (p__40926){
var map__40927 = p__40926;
var map__40927__$1 = (((((!((map__40927 == null))))?(((((map__40927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40927):map__40927);
var interval = map__40927__$1;
var start = cljs.core.get.call(null,map__40927__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__40927__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__40929 = this;
var map__40929__$1 = (((((!((map__40929 == null))))?(((((map__40929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40929):map__40929);
var interval__$1 = map__40929__$1;
var start__$1 = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = .in_years.call(null,interval__$1);
var start_year = .year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = .month.call(null,start__$1);
var days_in_months = .total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (.in_seconds.call(null,interval__$1) - seconds_to_remove);
return .period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
}));

(.Period.prototype.$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL);

(.Period.prototype.$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
}));
.today_at = (function $today_at(var_args){
var G__40932 = arguments.length;
switch (G__40932) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__40933 = .now.call(null);
G__40933.setHours(hours);

G__40933.setMinutes(minutes);

G__40933.setSeconds(seconds);

G__40933.setMilliseconds(millis);

return G__40933;
}));

(.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return .today_at.call(null,hours,minutes,seconds,(0));
}));

(.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return .today_at.call(null,hours,minutes,(0));
}));

(.today_at.cljs$lang$maxFixedArity = 4);

.do_at_STAR_ = (function $do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR__orig_val__40935 = ._STAR_ms_fn_STAR_;
var _STAR_ms_fn_STAR__temp_val__40936 = .static_ms_fn.call(null,base_date_time.getTime());
(._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR__temp_val__40936);

try{return body_fn.call(null);
}finally {(._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR__orig_val__40935);
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
.floor = (function $floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [.year,.month,.day,.hour,.minute,cljs.core.second,.milli], null);
return cljs.core.apply.call(null,.date_time,cljs.core.map.call(null,cljs.core.apply,cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});

//# sourceMappingURL=core.js.map?rel=1637533451573
