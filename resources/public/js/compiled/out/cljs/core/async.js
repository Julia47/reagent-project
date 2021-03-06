// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42237 = arguments.length;
switch (G__42237) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42238 = (function (f,blockable,meta42239){
this.f = f;
this.blockable = blockable;
this.meta42239 = meta42239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42240,meta42239__$1){
var self__ = this;
var _42240__$1 = this;
return (new cljs.core.async.t_cljs$core$async42238(self__.f,self__.blockable,meta42239__$1));
}));

(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42240){
var self__ = this;
var _42240__$1 = this;
return self__.meta42239;
}));

(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42239","meta42239",-1735037250,null)], null);
}));

(cljs.core.async.t_cljs$core$async42238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42238");

(cljs.core.async.t_cljs$core$async42238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42238.
 */
cljs.core.async.__GT_t_cljs$core$async42238 = (function cljs$core$async$__GT_t_cljs$core$async42238(f__$1,blockable__$1,meta42239){
return (new cljs.core.async.t_cljs$core$async42238(f__$1,blockable__$1,meta42239));
});

}

return (new cljs.core.async.t_cljs$core$async42238(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42244 = arguments.length;
switch (G__42244) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42247 = arguments.length;
switch (G__42247) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42250 = arguments.length;
switch (G__42250) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42252 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42252);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_42252);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42254 = arguments.length;
switch (G__42254) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___42256 = n;
var x_42257 = (0);
while(true){
if((x_42257 < n__4613__auto___42256)){
(a[x_42257] = x_42257);

var G__42258 = (x_42257 + (1));
x_42257 = G__42258;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42259 = (function (flag,meta42260){
this.flag = flag;
this.meta42260 = meta42260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42261,meta42260__$1){
var self__ = this;
var _42261__$1 = this;
return (new cljs.core.async.t_cljs$core$async42259(self__.flag,meta42260__$1));
}));

(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42261){
var self__ = this;
var _42261__$1 = this;
return self__.meta42260;
}));

(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42260","meta42260",399991999,null)], null);
}));

(cljs.core.async.t_cljs$core$async42259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42259");

(cljs.core.async.t_cljs$core$async42259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42259.
 */
cljs.core.async.__GT_t_cljs$core$async42259 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42259(flag__$1,meta42260){
return (new cljs.core.async.t_cljs$core$async42259(flag__$1,meta42260));
});

}

return (new cljs.core.async.t_cljs$core$async42259(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42262 = (function (flag,cb,meta42263){
this.flag = flag;
this.cb = cb;
this.meta42263 = meta42263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42264,meta42263__$1){
var self__ = this;
var _42264__$1 = this;
return (new cljs.core.async.t_cljs$core$async42262(self__.flag,self__.cb,meta42263__$1));
}));

(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42264){
var self__ = this;
var _42264__$1 = this;
return self__.meta42263;
}));

(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42263","meta42263",-704693405,null)], null);
}));

(cljs.core.async.t_cljs$core$async42262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42262");

(cljs.core.async.t_cljs$core$async42262.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42262.
 */
cljs.core.async.__GT_t_cljs$core$async42262 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42262(flag__$1,cb__$1,meta42263){
return (new cljs.core.async.t_cljs$core$async42262(flag__$1,cb__$1,meta42263));
});

}

return (new cljs.core.async.t_cljs$core$async42262(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42265_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42266_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42266_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42267 = (i + (1));
i = G__42267;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42273 = arguments.length;
var i__4737__auto___42274 = (0);
while(true){
if((i__4737__auto___42274 < len__4736__auto___42273)){
args__4742__auto__.push((arguments[i__4737__auto___42274]));

var G__42275 = (i__4737__auto___42274 + (1));
i__4737__auto___42274 = G__42275;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42270){
var map__42271 = p__42270;
var map__42271__$1 = (((((!((map__42271 == null))))?(((((map__42271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42271):map__42271);
var opts = map__42271__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42268){
var G__42269 = cljs.core.first.call(null,seq42268);
var seq42268__$1 = cljs.core.next.call(null,seq42268);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42269,seq42268__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42277 = arguments.length;
switch (G__42277) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42177__auto___42323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42301){
var state_val_42302 = (state_42301[(1)]);
if((state_val_42302 === (7))){
var inst_42297 = (state_42301[(2)]);
var state_42301__$1 = state_42301;
var statearr_42303_42324 = state_42301__$1;
(statearr_42303_42324[(2)] = inst_42297);

(statearr_42303_42324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (1))){
var state_42301__$1 = state_42301;
var statearr_42304_42325 = state_42301__$1;
(statearr_42304_42325[(2)] = null);

(statearr_42304_42325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (4))){
var inst_42280 = (state_42301[(7)]);
var inst_42280__$1 = (state_42301[(2)]);
var inst_42281 = (inst_42280__$1 == null);
var state_42301__$1 = (function (){var statearr_42305 = state_42301;
(statearr_42305[(7)] = inst_42280__$1);

return statearr_42305;
})();
if(cljs.core.truth_(inst_42281)){
var statearr_42306_42326 = state_42301__$1;
(statearr_42306_42326[(1)] = (5));

} else {
var statearr_42307_42327 = state_42301__$1;
(statearr_42307_42327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (13))){
var state_42301__$1 = state_42301;
var statearr_42308_42328 = state_42301__$1;
(statearr_42308_42328[(2)] = null);

(statearr_42308_42328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (6))){
var inst_42280 = (state_42301[(7)]);
var state_42301__$1 = state_42301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42301__$1,(11),to,inst_42280);
} else {
if((state_val_42302 === (3))){
var inst_42299 = (state_42301[(2)]);
var state_42301__$1 = state_42301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42301__$1,inst_42299);
} else {
if((state_val_42302 === (12))){
var state_42301__$1 = state_42301;
var statearr_42309_42329 = state_42301__$1;
(statearr_42309_42329[(2)] = null);

(statearr_42309_42329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (2))){
var state_42301__$1 = state_42301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42301__$1,(4),from);
} else {
if((state_val_42302 === (11))){
var inst_42290 = (state_42301[(2)]);
var state_42301__$1 = state_42301;
if(cljs.core.truth_(inst_42290)){
var statearr_42310_42330 = state_42301__$1;
(statearr_42310_42330[(1)] = (12));

} else {
var statearr_42311_42331 = state_42301__$1;
(statearr_42311_42331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (9))){
var state_42301__$1 = state_42301;
var statearr_42312_42332 = state_42301__$1;
(statearr_42312_42332[(2)] = null);

(statearr_42312_42332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (5))){
var state_42301__$1 = state_42301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42313_42333 = state_42301__$1;
(statearr_42313_42333[(1)] = (8));

} else {
var statearr_42314_42334 = state_42301__$1;
(statearr_42314_42334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (14))){
var inst_42295 = (state_42301[(2)]);
var state_42301__$1 = state_42301;
var statearr_42315_42335 = state_42301__$1;
(statearr_42315_42335[(2)] = inst_42295);

(statearr_42315_42335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (10))){
var inst_42287 = (state_42301[(2)]);
var state_42301__$1 = state_42301;
var statearr_42316_42336 = state_42301__$1;
(statearr_42316_42336[(2)] = inst_42287);

(statearr_42316_42336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42302 === (8))){
var inst_42284 = cljs.core.async.close_BANG_.call(null,to);
var state_42301__$1 = state_42301;
var statearr_42317_42337 = state_42301__$1;
(statearr_42317_42337[(2)] = inst_42284);

(statearr_42317_42337[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_42318 = [null,null,null,null,null,null,null,null];
(statearr_42318[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_42318[(1)] = (1));

return statearr_42318;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_42301){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42319){if((e42319 instanceof Object)){
var ex__42086__auto__ = e42319;
var statearr_42320_42338 = state_42301;
(statearr_42320_42338[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42339 = state_42301;
state_42301 = G__42339;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_42301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_42301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42321 = f__42178__auto__.call(null);
(statearr_42321[(6)] = c__42177__auto___42323);

return statearr_42321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__42340){
var vec__42341 = p__42340;
var v = cljs.core.nth.call(null,vec__42341,(0),null);
var p = cljs.core.nth.call(null,vec__42341,(1),null);
var job = vec__42341;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42177__auto___42512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42348){
var state_val_42349 = (state_42348[(1)]);
if((state_val_42349 === (1))){
var state_42348__$1 = state_42348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42348__$1,(2),res,v);
} else {
if((state_val_42349 === (2))){
var inst_42345 = (state_42348[(2)]);
var inst_42346 = cljs.core.async.close_BANG_.call(null,res);
var state_42348__$1 = (function (){var statearr_42350 = state_42348;
(statearr_42350[(7)] = inst_42345);

return statearr_42350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42348__$1,inst_42346);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_42351 = [null,null,null,null,null,null,null,null];
(statearr_42351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__);

(statearr_42351[(1)] = (1));

return statearr_42351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1 = (function (state_42348){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42352){if((e42352 instanceof Object)){
var ex__42086__auto__ = e42352;
var statearr_42353_42513 = state_42348;
(statearr_42353_42513[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42514 = state_42348;
state_42348 = G__42514;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = function(state_42348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1.call(this,state_42348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42354 = f__42178__auto__.call(null);
(statearr_42354[(6)] = c__42177__auto___42512);

return statearr_42354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__42355){
var vec__42356 = p__42355;
var v = cljs.core.nth.call(null,vec__42356,(0),null);
var p = cljs.core.nth.call(null,vec__42356,(1),null);
var job = vec__42356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___42515 = n;
var __42516 = (0);
while(true){
if((__42516 < n__4613__auto___42515)){
var G__42359_42517 = type;
var G__42359_42518__$1 = (((G__42359_42517 instanceof cljs.core.Keyword))?G__42359_42517.fqn:null);
switch (G__42359_42518__$1) {
case "compute":
var c__42177__auto___42520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42516,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = ((function (__42516,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function (state_42372){
var state_val_42373 = (state_42372[(1)]);
if((state_val_42373 === (1))){
var state_42372__$1 = state_42372;
var statearr_42374_42521 = state_42372__$1;
(statearr_42374_42521[(2)] = null);

(statearr_42374_42521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42373 === (2))){
var state_42372__$1 = state_42372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42372__$1,(4),jobs);
} else {
if((state_val_42373 === (3))){
var inst_42370 = (state_42372[(2)]);
var state_42372__$1 = state_42372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42372__$1,inst_42370);
} else {
if((state_val_42373 === (4))){
var inst_42362 = (state_42372[(2)]);
var inst_42363 = process.call(null,inst_42362);
var state_42372__$1 = state_42372;
if(cljs.core.truth_(inst_42363)){
var statearr_42375_42522 = state_42372__$1;
(statearr_42375_42522[(1)] = (5));

} else {
var statearr_42376_42523 = state_42372__$1;
(statearr_42376_42523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42373 === (5))){
var state_42372__$1 = state_42372;
var statearr_42377_42524 = state_42372__$1;
(statearr_42377_42524[(2)] = null);

(statearr_42377_42524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42373 === (6))){
var state_42372__$1 = state_42372;
var statearr_42378_42525 = state_42372__$1;
(statearr_42378_42525[(2)] = null);

(statearr_42378_42525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42373 === (7))){
var inst_42368 = (state_42372[(2)]);
var state_42372__$1 = state_42372;
var statearr_42379_42526 = state_42372__$1;
(statearr_42379_42526[(2)] = inst_42368);

(statearr_42379_42526[(1)] = (3));


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
});})(__42516,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
;
return ((function (__42516,switch__42082__auto__,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_42380 = [null,null,null,null,null,null,null];
(statearr_42380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__);

(statearr_42380[(1)] = (1));

return statearr_42380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1 = (function (state_42372){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42381){if((e42381 instanceof Object)){
var ex__42086__auto__ = e42381;
var statearr_42382_42527 = state_42372;
(statearr_42382_42527[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42528 = state_42372;
state_42372 = G__42528;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = function(state_42372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1.call(this,state_42372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__;
})()
;})(__42516,switch__42082__auto__,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
})();
var state__42179__auto__ = (function (){var statearr_42383 = f__42178__auto__.call(null);
(statearr_42383[(6)] = c__42177__auto___42520);

return statearr_42383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
});})(__42516,c__42177__auto___42520,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
);


break;
case "async":
var c__42177__auto___42529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42516,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = ((function (__42516,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function (state_42396){
var state_val_42397 = (state_42396[(1)]);
if((state_val_42397 === (1))){
var state_42396__$1 = state_42396;
var statearr_42398_42530 = state_42396__$1;
(statearr_42398_42530[(2)] = null);

(statearr_42398_42530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (2))){
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42396__$1,(4),jobs);
} else {
if((state_val_42397 === (3))){
var inst_42394 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42396__$1,inst_42394);
} else {
if((state_val_42397 === (4))){
var inst_42386 = (state_42396[(2)]);
var inst_42387 = async.call(null,inst_42386);
var state_42396__$1 = state_42396;
if(cljs.core.truth_(inst_42387)){
var statearr_42399_42531 = state_42396__$1;
(statearr_42399_42531[(1)] = (5));

} else {
var statearr_42400_42532 = state_42396__$1;
(statearr_42400_42532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (5))){
var state_42396__$1 = state_42396;
var statearr_42401_42533 = state_42396__$1;
(statearr_42401_42533[(2)] = null);

(statearr_42401_42533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (6))){
var state_42396__$1 = state_42396;
var statearr_42402_42534 = state_42396__$1;
(statearr_42402_42534[(2)] = null);

(statearr_42402_42534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (7))){
var inst_42392 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42403_42535 = state_42396__$1;
(statearr_42403_42535[(2)] = inst_42392);

(statearr_42403_42535[(1)] = (3));


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
});})(__42516,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
;
return ((function (__42516,switch__42082__auto__,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_42404 = [null,null,null,null,null,null,null];
(statearr_42404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__);

(statearr_42404[(1)] = (1));

return statearr_42404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1 = (function (state_42396){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42405){if((e42405 instanceof Object)){
var ex__42086__auto__ = e42405;
var statearr_42406_42536 = state_42396;
(statearr_42406_42536[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42537 = state_42396;
state_42396 = G__42537;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = function(state_42396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1.call(this,state_42396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__;
})()
;})(__42516,switch__42082__auto__,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
})();
var state__42179__auto__ = (function (){var statearr_42407 = f__42178__auto__.call(null);
(statearr_42407[(6)] = c__42177__auto___42529);

return statearr_42407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
});})(__42516,c__42177__auto___42529,G__42359_42517,G__42359_42518__$1,n__4613__auto___42515,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42359_42518__$1)].join('')));

}

var G__42538 = (__42516 + (1));
__42516 = G__42538;
continue;
} else {
}
break;
}

var c__42177__auto___42539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42429){
var state_val_42430 = (state_42429[(1)]);
if((state_val_42430 === (7))){
var inst_42425 = (state_42429[(2)]);
var state_42429__$1 = state_42429;
var statearr_42431_42540 = state_42429__$1;
(statearr_42431_42540[(2)] = inst_42425);

(statearr_42431_42540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42430 === (1))){
var state_42429__$1 = state_42429;
var statearr_42432_42541 = state_42429__$1;
(statearr_42432_42541[(2)] = null);

(statearr_42432_42541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42430 === (4))){
var inst_42410 = (state_42429[(7)]);
var inst_42410__$1 = (state_42429[(2)]);
var inst_42411 = (inst_42410__$1 == null);
var state_42429__$1 = (function (){var statearr_42433 = state_42429;
(statearr_42433[(7)] = inst_42410__$1);

return statearr_42433;
})();
if(cljs.core.truth_(inst_42411)){
var statearr_42434_42542 = state_42429__$1;
(statearr_42434_42542[(1)] = (5));

} else {
var statearr_42435_42543 = state_42429__$1;
(statearr_42435_42543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42430 === (6))){
var inst_42410 = (state_42429[(7)]);
var inst_42415 = (state_42429[(8)]);
var inst_42415__$1 = cljs.core.async.chan.call(null,(1));
var inst_42416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42417 = [inst_42410,inst_42415__$1];
var inst_42418 = (new cljs.core.PersistentVector(null,2,(5),inst_42416,inst_42417,null));
var state_42429__$1 = (function (){var statearr_42436 = state_42429;
(statearr_42436[(8)] = inst_42415__$1);

return statearr_42436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42429__$1,(8),jobs,inst_42418);
} else {
if((state_val_42430 === (3))){
var inst_42427 = (state_42429[(2)]);
var state_42429__$1 = state_42429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42429__$1,inst_42427);
} else {
if((state_val_42430 === (2))){
var state_42429__$1 = state_42429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42429__$1,(4),from);
} else {
if((state_val_42430 === (9))){
var inst_42422 = (state_42429[(2)]);
var state_42429__$1 = (function (){var statearr_42437 = state_42429;
(statearr_42437[(9)] = inst_42422);

return statearr_42437;
})();
var statearr_42438_42544 = state_42429__$1;
(statearr_42438_42544[(2)] = null);

(statearr_42438_42544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42430 === (5))){
var inst_42413 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42429__$1 = state_42429;
var statearr_42439_42545 = state_42429__$1;
(statearr_42439_42545[(2)] = inst_42413);

(statearr_42439_42545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42430 === (8))){
var inst_42415 = (state_42429[(8)]);
var inst_42420 = (state_42429[(2)]);
var state_42429__$1 = (function (){var statearr_42440 = state_42429;
(statearr_42440[(10)] = inst_42420);

return statearr_42440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42429__$1,(9),results,inst_42415);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_42441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__);

(statearr_42441[(1)] = (1));

return statearr_42441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1 = (function (state_42429){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42442){if((e42442 instanceof Object)){
var ex__42086__auto__ = e42442;
var statearr_42443_42546 = state_42429;
(statearr_42443_42546[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42547 = state_42429;
state_42429 = G__42547;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = function(state_42429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1.call(this,state_42429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42444 = f__42178__auto__.call(null);
(statearr_42444[(6)] = c__42177__auto___42539);

return statearr_42444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42482){
var state_val_42483 = (state_42482[(1)]);
if((state_val_42483 === (7))){
var inst_42478 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42484_42548 = state_42482__$1;
(statearr_42484_42548[(2)] = inst_42478);

(statearr_42484_42548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (20))){
var state_42482__$1 = state_42482;
var statearr_42485_42549 = state_42482__$1;
(statearr_42485_42549[(2)] = null);

(statearr_42485_42549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (1))){
var state_42482__$1 = state_42482;
var statearr_42486_42550 = state_42482__$1;
(statearr_42486_42550[(2)] = null);

(statearr_42486_42550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (4))){
var inst_42447 = (state_42482[(7)]);
var inst_42447__$1 = (state_42482[(2)]);
var inst_42448 = (inst_42447__$1 == null);
var state_42482__$1 = (function (){var statearr_42487 = state_42482;
(statearr_42487[(7)] = inst_42447__$1);

return statearr_42487;
})();
if(cljs.core.truth_(inst_42448)){
var statearr_42488_42551 = state_42482__$1;
(statearr_42488_42551[(1)] = (5));

} else {
var statearr_42489_42552 = state_42482__$1;
(statearr_42489_42552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (15))){
var inst_42460 = (state_42482[(8)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42482__$1,(18),to,inst_42460);
} else {
if((state_val_42483 === (21))){
var inst_42473 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42490_42553 = state_42482__$1;
(statearr_42490_42553[(2)] = inst_42473);

(statearr_42490_42553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (13))){
var inst_42475 = (state_42482[(2)]);
var state_42482__$1 = (function (){var statearr_42491 = state_42482;
(statearr_42491[(9)] = inst_42475);

return statearr_42491;
})();
var statearr_42492_42554 = state_42482__$1;
(statearr_42492_42554[(2)] = null);

(statearr_42492_42554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (6))){
var inst_42447 = (state_42482[(7)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42482__$1,(11),inst_42447);
} else {
if((state_val_42483 === (17))){
var inst_42468 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
if(cljs.core.truth_(inst_42468)){
var statearr_42493_42555 = state_42482__$1;
(statearr_42493_42555[(1)] = (19));

} else {
var statearr_42494_42556 = state_42482__$1;
(statearr_42494_42556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (3))){
var inst_42480 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42482__$1,inst_42480);
} else {
if((state_val_42483 === (12))){
var inst_42457 = (state_42482[(10)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42482__$1,(14),inst_42457);
} else {
if((state_val_42483 === (2))){
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42482__$1,(4),results);
} else {
if((state_val_42483 === (19))){
var state_42482__$1 = state_42482;
var statearr_42495_42557 = state_42482__$1;
(statearr_42495_42557[(2)] = null);

(statearr_42495_42557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (11))){
var inst_42457 = (state_42482[(2)]);
var state_42482__$1 = (function (){var statearr_42496 = state_42482;
(statearr_42496[(10)] = inst_42457);

return statearr_42496;
})();
var statearr_42497_42558 = state_42482__$1;
(statearr_42497_42558[(2)] = null);

(statearr_42497_42558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (9))){
var state_42482__$1 = state_42482;
var statearr_42498_42559 = state_42482__$1;
(statearr_42498_42559[(2)] = null);

(statearr_42498_42559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (5))){
var state_42482__$1 = state_42482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42499_42560 = state_42482__$1;
(statearr_42499_42560[(1)] = (8));

} else {
var statearr_42500_42561 = state_42482__$1;
(statearr_42500_42561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (14))){
var inst_42460 = (state_42482[(8)]);
var inst_42460__$1 = (state_42482[(2)]);
var inst_42461 = (inst_42460__$1 == null);
var inst_42462 = cljs.core.not.call(null,inst_42461);
var state_42482__$1 = (function (){var statearr_42501 = state_42482;
(statearr_42501[(8)] = inst_42460__$1);

return statearr_42501;
})();
if(inst_42462){
var statearr_42502_42562 = state_42482__$1;
(statearr_42502_42562[(1)] = (15));

} else {
var statearr_42503_42563 = state_42482__$1;
(statearr_42503_42563[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (16))){
var state_42482__$1 = state_42482;
var statearr_42504_42564 = state_42482__$1;
(statearr_42504_42564[(2)] = false);

(statearr_42504_42564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (10))){
var inst_42454 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42505_42565 = state_42482__$1;
(statearr_42505_42565[(2)] = inst_42454);

(statearr_42505_42565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (18))){
var inst_42465 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42506_42566 = state_42482__$1;
(statearr_42506_42566[(2)] = inst_42465);

(statearr_42506_42566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (8))){
var inst_42451 = cljs.core.async.close_BANG_.call(null,to);
var state_42482__$1 = state_42482;
var statearr_42507_42567 = state_42482__$1;
(statearr_42507_42567[(2)] = inst_42451);

(statearr_42507_42567[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_42508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__);

(statearr_42508[(1)] = (1));

return statearr_42508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1 = (function (state_42482){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42509){if((e42509 instanceof Object)){
var ex__42086__auto__ = e42509;
var statearr_42510_42568 = state_42482;
(statearr_42510_42568[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42569 = state_42482;
state_42482 = G__42569;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__ = function(state_42482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1.call(this,state_42482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42511 = f__42178__auto__.call(null);
(statearr_42511[(6)] = c__42177__auto__);

return statearr_42511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42571 = arguments.length;
switch (G__42571) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42574 = arguments.length;
switch (G__42574) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42577 = arguments.length;
switch (G__42577) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42177__auto___42626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42603){
var state_val_42604 = (state_42603[(1)]);
if((state_val_42604 === (7))){
var inst_42599 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
var statearr_42605_42627 = state_42603__$1;
(statearr_42605_42627[(2)] = inst_42599);

(statearr_42605_42627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (1))){
var state_42603__$1 = state_42603;
var statearr_42606_42628 = state_42603__$1;
(statearr_42606_42628[(2)] = null);

(statearr_42606_42628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (4))){
var inst_42580 = (state_42603[(7)]);
var inst_42580__$1 = (state_42603[(2)]);
var inst_42581 = (inst_42580__$1 == null);
var state_42603__$1 = (function (){var statearr_42607 = state_42603;
(statearr_42607[(7)] = inst_42580__$1);

return statearr_42607;
})();
if(cljs.core.truth_(inst_42581)){
var statearr_42608_42629 = state_42603__$1;
(statearr_42608_42629[(1)] = (5));

} else {
var statearr_42609_42630 = state_42603__$1;
(statearr_42609_42630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (13))){
var state_42603__$1 = state_42603;
var statearr_42610_42631 = state_42603__$1;
(statearr_42610_42631[(2)] = null);

(statearr_42610_42631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (6))){
var inst_42580 = (state_42603[(7)]);
var inst_42586 = p.call(null,inst_42580);
var state_42603__$1 = state_42603;
if(cljs.core.truth_(inst_42586)){
var statearr_42611_42632 = state_42603__$1;
(statearr_42611_42632[(1)] = (9));

} else {
var statearr_42612_42633 = state_42603__$1;
(statearr_42612_42633[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (3))){
var inst_42601 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42603__$1,inst_42601);
} else {
if((state_val_42604 === (12))){
var state_42603__$1 = state_42603;
var statearr_42613_42634 = state_42603__$1;
(statearr_42613_42634[(2)] = null);

(statearr_42613_42634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (2))){
var state_42603__$1 = state_42603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42603__$1,(4),ch);
} else {
if((state_val_42604 === (11))){
var inst_42580 = (state_42603[(7)]);
var inst_42590 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42603__$1,(8),inst_42590,inst_42580);
} else {
if((state_val_42604 === (9))){
var state_42603__$1 = state_42603;
var statearr_42614_42635 = state_42603__$1;
(statearr_42614_42635[(2)] = tc);

(statearr_42614_42635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (5))){
var inst_42583 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42584 = cljs.core.async.close_BANG_.call(null,fc);
var state_42603__$1 = (function (){var statearr_42615 = state_42603;
(statearr_42615[(8)] = inst_42583);

return statearr_42615;
})();
var statearr_42616_42636 = state_42603__$1;
(statearr_42616_42636[(2)] = inst_42584);

(statearr_42616_42636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (14))){
var inst_42597 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
var statearr_42617_42637 = state_42603__$1;
(statearr_42617_42637[(2)] = inst_42597);

(statearr_42617_42637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (10))){
var state_42603__$1 = state_42603;
var statearr_42618_42638 = state_42603__$1;
(statearr_42618_42638[(2)] = fc);

(statearr_42618_42638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42604 === (8))){
var inst_42592 = (state_42603[(2)]);
var state_42603__$1 = state_42603;
if(cljs.core.truth_(inst_42592)){
var statearr_42619_42639 = state_42603__$1;
(statearr_42619_42639[(1)] = (12));

} else {
var statearr_42620_42640 = state_42603__$1;
(statearr_42620_42640[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_42621 = [null,null,null,null,null,null,null,null,null];
(statearr_42621[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_42621[(1)] = (1));

return statearr_42621;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_42603){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42622){if((e42622 instanceof Object)){
var ex__42086__auto__ = e42622;
var statearr_42623_42641 = state_42603;
(statearr_42623_42641[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42642 = state_42603;
state_42603 = G__42642;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_42603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_42603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42624 = f__42178__auto__.call(null);
(statearr_42624[(6)] = c__42177__auto___42626);

return statearr_42624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42663){
var state_val_42664 = (state_42663[(1)]);
if((state_val_42664 === (7))){
var inst_42659 = (state_42663[(2)]);
var state_42663__$1 = state_42663;
var statearr_42665_42683 = state_42663__$1;
(statearr_42665_42683[(2)] = inst_42659);

(statearr_42665_42683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (1))){
var inst_42643 = init;
var state_42663__$1 = (function (){var statearr_42666 = state_42663;
(statearr_42666[(7)] = inst_42643);

return statearr_42666;
})();
var statearr_42667_42684 = state_42663__$1;
(statearr_42667_42684[(2)] = null);

(statearr_42667_42684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (4))){
var inst_42646 = (state_42663[(8)]);
var inst_42646__$1 = (state_42663[(2)]);
var inst_42647 = (inst_42646__$1 == null);
var state_42663__$1 = (function (){var statearr_42668 = state_42663;
(statearr_42668[(8)] = inst_42646__$1);

return statearr_42668;
})();
if(cljs.core.truth_(inst_42647)){
var statearr_42669_42685 = state_42663__$1;
(statearr_42669_42685[(1)] = (5));

} else {
var statearr_42670_42686 = state_42663__$1;
(statearr_42670_42686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (6))){
var inst_42643 = (state_42663[(7)]);
var inst_42650 = (state_42663[(9)]);
var inst_42646 = (state_42663[(8)]);
var inst_42650__$1 = f.call(null,inst_42643,inst_42646);
var inst_42651 = cljs.core.reduced_QMARK_.call(null,inst_42650__$1);
var state_42663__$1 = (function (){var statearr_42671 = state_42663;
(statearr_42671[(9)] = inst_42650__$1);

return statearr_42671;
})();
if(inst_42651){
var statearr_42672_42687 = state_42663__$1;
(statearr_42672_42687[(1)] = (8));

} else {
var statearr_42673_42688 = state_42663__$1;
(statearr_42673_42688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (3))){
var inst_42661 = (state_42663[(2)]);
var state_42663__$1 = state_42663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42663__$1,inst_42661);
} else {
if((state_val_42664 === (2))){
var state_42663__$1 = state_42663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42663__$1,(4),ch);
} else {
if((state_val_42664 === (9))){
var inst_42650 = (state_42663[(9)]);
var inst_42643 = inst_42650;
var state_42663__$1 = (function (){var statearr_42674 = state_42663;
(statearr_42674[(7)] = inst_42643);

return statearr_42674;
})();
var statearr_42675_42689 = state_42663__$1;
(statearr_42675_42689[(2)] = null);

(statearr_42675_42689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (5))){
var inst_42643 = (state_42663[(7)]);
var state_42663__$1 = state_42663;
var statearr_42676_42690 = state_42663__$1;
(statearr_42676_42690[(2)] = inst_42643);

(statearr_42676_42690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (10))){
var inst_42657 = (state_42663[(2)]);
var state_42663__$1 = state_42663;
var statearr_42677_42691 = state_42663__$1;
(statearr_42677_42691[(2)] = inst_42657);

(statearr_42677_42691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42664 === (8))){
var inst_42650 = (state_42663[(9)]);
var inst_42653 = cljs.core.deref.call(null,inst_42650);
var state_42663__$1 = state_42663;
var statearr_42678_42692 = state_42663__$1;
(statearr_42678_42692[(2)] = inst_42653);

(statearr_42678_42692[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42083__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42083__auto____0 = (function (){
var statearr_42679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42679[(0)] = cljs$core$async$reduce_$_state_machine__42083__auto__);

(statearr_42679[(1)] = (1));

return statearr_42679;
});
var cljs$core$async$reduce_$_state_machine__42083__auto____1 = (function (state_42663){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42680){if((e42680 instanceof Object)){
var ex__42086__auto__ = e42680;
var statearr_42681_42693 = state_42663;
(statearr_42681_42693[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42694 = state_42663;
state_42663 = G__42694;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42083__auto__ = function(state_42663){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42083__auto____1.call(this,state_42663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42083__auto____0;
cljs$core$async$reduce_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42083__auto____1;
return cljs$core$async$reduce_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42682 = f__42178__auto__.call(null);
(statearr_42682[(6)] = c__42177__auto__);

return statearr_42682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42700){
var state_val_42701 = (state_42700[(1)]);
if((state_val_42701 === (1))){
var inst_42695 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42700__$1 = state_42700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42700__$1,(2),inst_42695);
} else {
if((state_val_42701 === (2))){
var inst_42697 = (state_42700[(2)]);
var inst_42698 = f__$1.call(null,inst_42697);
var state_42700__$1 = state_42700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42700__$1,inst_42698);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42083__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42083__auto____0 = (function (){
var statearr_42702 = [null,null,null,null,null,null,null];
(statearr_42702[(0)] = cljs$core$async$transduce_$_state_machine__42083__auto__);

(statearr_42702[(1)] = (1));

return statearr_42702;
});
var cljs$core$async$transduce_$_state_machine__42083__auto____1 = (function (state_42700){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42703){if((e42703 instanceof Object)){
var ex__42086__auto__ = e42703;
var statearr_42704_42706 = state_42700;
(statearr_42704_42706[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42707 = state_42700;
state_42700 = G__42707;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42083__auto__ = function(state_42700){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42083__auto____1.call(this,state_42700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42083__auto____0;
cljs$core$async$transduce_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42083__auto____1;
return cljs$core$async$transduce_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42705 = f__42178__auto__.call(null);
(statearr_42705[(6)] = c__42177__auto__);

return statearr_42705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42709 = arguments.length;
switch (G__42709) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42734){
var state_val_42735 = (state_42734[(1)]);
if((state_val_42735 === (7))){
var inst_42716 = (state_42734[(2)]);
var state_42734__$1 = state_42734;
var statearr_42736_42757 = state_42734__$1;
(statearr_42736_42757[(2)] = inst_42716);

(statearr_42736_42757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (1))){
var inst_42710 = cljs.core.seq.call(null,coll);
var inst_42711 = inst_42710;
var state_42734__$1 = (function (){var statearr_42737 = state_42734;
(statearr_42737[(7)] = inst_42711);

return statearr_42737;
})();
var statearr_42738_42758 = state_42734__$1;
(statearr_42738_42758[(2)] = null);

(statearr_42738_42758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (4))){
var inst_42711 = (state_42734[(7)]);
var inst_42714 = cljs.core.first.call(null,inst_42711);
var state_42734__$1 = state_42734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42734__$1,(7),ch,inst_42714);
} else {
if((state_val_42735 === (13))){
var inst_42728 = (state_42734[(2)]);
var state_42734__$1 = state_42734;
var statearr_42739_42759 = state_42734__$1;
(statearr_42739_42759[(2)] = inst_42728);

(statearr_42739_42759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (6))){
var inst_42719 = (state_42734[(2)]);
var state_42734__$1 = state_42734;
if(cljs.core.truth_(inst_42719)){
var statearr_42740_42760 = state_42734__$1;
(statearr_42740_42760[(1)] = (8));

} else {
var statearr_42741_42761 = state_42734__$1;
(statearr_42741_42761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (3))){
var inst_42732 = (state_42734[(2)]);
var state_42734__$1 = state_42734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42734__$1,inst_42732);
} else {
if((state_val_42735 === (12))){
var state_42734__$1 = state_42734;
var statearr_42742_42762 = state_42734__$1;
(statearr_42742_42762[(2)] = null);

(statearr_42742_42762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (2))){
var inst_42711 = (state_42734[(7)]);
var state_42734__$1 = state_42734;
if(cljs.core.truth_(inst_42711)){
var statearr_42743_42763 = state_42734__$1;
(statearr_42743_42763[(1)] = (4));

} else {
var statearr_42744_42764 = state_42734__$1;
(statearr_42744_42764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (11))){
var inst_42725 = cljs.core.async.close_BANG_.call(null,ch);
var state_42734__$1 = state_42734;
var statearr_42745_42765 = state_42734__$1;
(statearr_42745_42765[(2)] = inst_42725);

(statearr_42745_42765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (9))){
var state_42734__$1 = state_42734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42746_42766 = state_42734__$1;
(statearr_42746_42766[(1)] = (11));

} else {
var statearr_42747_42767 = state_42734__$1;
(statearr_42747_42767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (5))){
var inst_42711 = (state_42734[(7)]);
var state_42734__$1 = state_42734;
var statearr_42748_42768 = state_42734__$1;
(statearr_42748_42768[(2)] = inst_42711);

(statearr_42748_42768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (10))){
var inst_42730 = (state_42734[(2)]);
var state_42734__$1 = state_42734;
var statearr_42749_42769 = state_42734__$1;
(statearr_42749_42769[(2)] = inst_42730);

(statearr_42749_42769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42735 === (8))){
var inst_42711 = (state_42734[(7)]);
var inst_42721 = cljs.core.next.call(null,inst_42711);
var inst_42711__$1 = inst_42721;
var state_42734__$1 = (function (){var statearr_42750 = state_42734;
(statearr_42750[(7)] = inst_42711__$1);

return statearr_42750;
})();
var statearr_42751_42770 = state_42734__$1;
(statearr_42751_42770[(2)] = null);

(statearr_42751_42770[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_42752 = [null,null,null,null,null,null,null,null];
(statearr_42752[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_42752[(1)] = (1));

return statearr_42752;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_42734){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42753){if((e42753 instanceof Object)){
var ex__42086__auto__ = e42753;
var statearr_42754_42771 = state_42734;
(statearr_42754_42771[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42772 = state_42734;
state_42734 = G__42772;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_42734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_42734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42755 = f__42178__auto__.call(null);
(statearr_42755[(6)] = c__42177__auto__);

return statearr_42755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42773 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42773.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42774 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42774.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42775 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42775.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42776 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42776.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42777 = (function (ch,cs,meta42778){
this.ch = ch;
this.cs = cs;
this.meta42778 = meta42778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42779,meta42778__$1){
var self__ = this;
var _42779__$1 = this;
return (new cljs.core.async.t_cljs$core$async42777(self__.ch,self__.cs,meta42778__$1));
}));

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42779){
var self__ = this;
var _42779__$1 = this;
return self__.meta42778;
}));

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42777.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42778","meta42778",-180224788,null)], null);
}));

(cljs.core.async.t_cljs$core$async42777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42777");

(cljs.core.async.t_cljs$core$async42777.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42777.
 */
cljs.core.async.__GT_t_cljs$core$async42777 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42777(ch__$1,cs__$1,meta42778){
return (new cljs.core.async.t_cljs$core$async42777(ch__$1,cs__$1,meta42778));
});

}

return (new cljs.core.async.t_cljs$core$async42777(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__42177__auto___42999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_42914){
var state_val_42915 = (state_42914[(1)]);
if((state_val_42915 === (7))){
var inst_42910 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42916_43000 = state_42914__$1;
(statearr_42916_43000[(2)] = inst_42910);

(statearr_42916_43000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (20))){
var inst_42813 = (state_42914[(7)]);
var inst_42825 = cljs.core.first.call(null,inst_42813);
var inst_42826 = cljs.core.nth.call(null,inst_42825,(0),null);
var inst_42827 = cljs.core.nth.call(null,inst_42825,(1),null);
var state_42914__$1 = (function (){var statearr_42917 = state_42914;
(statearr_42917[(8)] = inst_42826);

return statearr_42917;
})();
if(cljs.core.truth_(inst_42827)){
var statearr_42918_43001 = state_42914__$1;
(statearr_42918_43001[(1)] = (22));

} else {
var statearr_42919_43002 = state_42914__$1;
(statearr_42919_43002[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (27))){
var inst_42855 = (state_42914[(9)]);
var inst_42857 = (state_42914[(10)]);
var inst_42782 = (state_42914[(11)]);
var inst_42862 = (state_42914[(12)]);
var inst_42862__$1 = cljs.core._nth.call(null,inst_42855,inst_42857);
var inst_42863 = cljs.core.async.put_BANG_.call(null,inst_42862__$1,inst_42782,done);
var state_42914__$1 = (function (){var statearr_42920 = state_42914;
(statearr_42920[(12)] = inst_42862__$1);

return statearr_42920;
})();
if(cljs.core.truth_(inst_42863)){
var statearr_42921_43003 = state_42914__$1;
(statearr_42921_43003[(1)] = (30));

} else {
var statearr_42922_43004 = state_42914__$1;
(statearr_42922_43004[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (1))){
var state_42914__$1 = state_42914;
var statearr_42923_43005 = state_42914__$1;
(statearr_42923_43005[(2)] = null);

(statearr_42923_43005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (24))){
var inst_42813 = (state_42914[(7)]);
var inst_42832 = (state_42914[(2)]);
var inst_42833 = cljs.core.next.call(null,inst_42813);
var inst_42791 = inst_42833;
var inst_42792 = null;
var inst_42793 = (0);
var inst_42794 = (0);
var state_42914__$1 = (function (){var statearr_42924 = state_42914;
(statearr_42924[(13)] = inst_42791);

(statearr_42924[(14)] = inst_42832);

(statearr_42924[(15)] = inst_42794);

(statearr_42924[(16)] = inst_42793);

(statearr_42924[(17)] = inst_42792);

return statearr_42924;
})();
var statearr_42925_43006 = state_42914__$1;
(statearr_42925_43006[(2)] = null);

(statearr_42925_43006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (39))){
var state_42914__$1 = state_42914;
var statearr_42929_43007 = state_42914__$1;
(statearr_42929_43007[(2)] = null);

(statearr_42929_43007[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (4))){
var inst_42782 = (state_42914[(11)]);
var inst_42782__$1 = (state_42914[(2)]);
var inst_42783 = (inst_42782__$1 == null);
var state_42914__$1 = (function (){var statearr_42930 = state_42914;
(statearr_42930[(11)] = inst_42782__$1);

return statearr_42930;
})();
if(cljs.core.truth_(inst_42783)){
var statearr_42931_43008 = state_42914__$1;
(statearr_42931_43008[(1)] = (5));

} else {
var statearr_42932_43009 = state_42914__$1;
(statearr_42932_43009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (15))){
var inst_42791 = (state_42914[(13)]);
var inst_42794 = (state_42914[(15)]);
var inst_42793 = (state_42914[(16)]);
var inst_42792 = (state_42914[(17)]);
var inst_42809 = (state_42914[(2)]);
var inst_42810 = (inst_42794 + (1));
var tmp42926 = inst_42791;
var tmp42927 = inst_42793;
var tmp42928 = inst_42792;
var inst_42791__$1 = tmp42926;
var inst_42792__$1 = tmp42928;
var inst_42793__$1 = tmp42927;
var inst_42794__$1 = inst_42810;
var state_42914__$1 = (function (){var statearr_42933 = state_42914;
(statearr_42933[(13)] = inst_42791__$1);

(statearr_42933[(15)] = inst_42794__$1);

(statearr_42933[(16)] = inst_42793__$1);

(statearr_42933[(17)] = inst_42792__$1);

(statearr_42933[(18)] = inst_42809);

return statearr_42933;
})();
var statearr_42934_43010 = state_42914__$1;
(statearr_42934_43010[(2)] = null);

(statearr_42934_43010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (21))){
var inst_42836 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42938_43011 = state_42914__$1;
(statearr_42938_43011[(2)] = inst_42836);

(statearr_42938_43011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (31))){
var inst_42862 = (state_42914[(12)]);
var inst_42866 = done.call(null,null);
var inst_42867 = cljs.core.async.untap_STAR_.call(null,m,inst_42862);
var state_42914__$1 = (function (){var statearr_42939 = state_42914;
(statearr_42939[(19)] = inst_42866);

return statearr_42939;
})();
var statearr_42940_43012 = state_42914__$1;
(statearr_42940_43012[(2)] = inst_42867);

(statearr_42940_43012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (32))){
var inst_42854 = (state_42914[(20)]);
var inst_42855 = (state_42914[(9)]);
var inst_42857 = (state_42914[(10)]);
var inst_42856 = (state_42914[(21)]);
var inst_42869 = (state_42914[(2)]);
var inst_42870 = (inst_42857 + (1));
var tmp42935 = inst_42854;
var tmp42936 = inst_42855;
var tmp42937 = inst_42856;
var inst_42854__$1 = tmp42935;
var inst_42855__$1 = tmp42936;
var inst_42856__$1 = tmp42937;
var inst_42857__$1 = inst_42870;
var state_42914__$1 = (function (){var statearr_42941 = state_42914;
(statearr_42941[(20)] = inst_42854__$1);

(statearr_42941[(9)] = inst_42855__$1);

(statearr_42941[(10)] = inst_42857__$1);

(statearr_42941[(21)] = inst_42856__$1);

(statearr_42941[(22)] = inst_42869);

return statearr_42941;
})();
var statearr_42942_43013 = state_42914__$1;
(statearr_42942_43013[(2)] = null);

(statearr_42942_43013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (40))){
var inst_42882 = (state_42914[(23)]);
var inst_42886 = done.call(null,null);
var inst_42887 = cljs.core.async.untap_STAR_.call(null,m,inst_42882);
var state_42914__$1 = (function (){var statearr_42943 = state_42914;
(statearr_42943[(24)] = inst_42886);

return statearr_42943;
})();
var statearr_42944_43014 = state_42914__$1;
(statearr_42944_43014[(2)] = inst_42887);

(statearr_42944_43014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (33))){
var inst_42873 = (state_42914[(25)]);
var inst_42875 = cljs.core.chunked_seq_QMARK_.call(null,inst_42873);
var state_42914__$1 = state_42914;
if(inst_42875){
var statearr_42945_43015 = state_42914__$1;
(statearr_42945_43015[(1)] = (36));

} else {
var statearr_42946_43016 = state_42914__$1;
(statearr_42946_43016[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (13))){
var inst_42803 = (state_42914[(26)]);
var inst_42806 = cljs.core.async.close_BANG_.call(null,inst_42803);
var state_42914__$1 = state_42914;
var statearr_42947_43017 = state_42914__$1;
(statearr_42947_43017[(2)] = inst_42806);

(statearr_42947_43017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (22))){
var inst_42826 = (state_42914[(8)]);
var inst_42829 = cljs.core.async.close_BANG_.call(null,inst_42826);
var state_42914__$1 = state_42914;
var statearr_42948_43018 = state_42914__$1;
(statearr_42948_43018[(2)] = inst_42829);

(statearr_42948_43018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (36))){
var inst_42873 = (state_42914[(25)]);
var inst_42877 = cljs.core.chunk_first.call(null,inst_42873);
var inst_42878 = cljs.core.chunk_rest.call(null,inst_42873);
var inst_42879 = cljs.core.count.call(null,inst_42877);
var inst_42854 = inst_42878;
var inst_42855 = inst_42877;
var inst_42856 = inst_42879;
var inst_42857 = (0);
var state_42914__$1 = (function (){var statearr_42949 = state_42914;
(statearr_42949[(20)] = inst_42854);

(statearr_42949[(9)] = inst_42855);

(statearr_42949[(10)] = inst_42857);

(statearr_42949[(21)] = inst_42856);

return statearr_42949;
})();
var statearr_42950_43019 = state_42914__$1;
(statearr_42950_43019[(2)] = null);

(statearr_42950_43019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (41))){
var inst_42873 = (state_42914[(25)]);
var inst_42889 = (state_42914[(2)]);
var inst_42890 = cljs.core.next.call(null,inst_42873);
var inst_42854 = inst_42890;
var inst_42855 = null;
var inst_42856 = (0);
var inst_42857 = (0);
var state_42914__$1 = (function (){var statearr_42951 = state_42914;
(statearr_42951[(20)] = inst_42854);

(statearr_42951[(9)] = inst_42855);

(statearr_42951[(10)] = inst_42857);

(statearr_42951[(21)] = inst_42856);

(statearr_42951[(27)] = inst_42889);

return statearr_42951;
})();
var statearr_42952_43020 = state_42914__$1;
(statearr_42952_43020[(2)] = null);

(statearr_42952_43020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (43))){
var state_42914__$1 = state_42914;
var statearr_42953_43021 = state_42914__$1;
(statearr_42953_43021[(2)] = null);

(statearr_42953_43021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (29))){
var inst_42898 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42954_43022 = state_42914__$1;
(statearr_42954_43022[(2)] = inst_42898);

(statearr_42954_43022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (44))){
var inst_42907 = (state_42914[(2)]);
var state_42914__$1 = (function (){var statearr_42955 = state_42914;
(statearr_42955[(28)] = inst_42907);

return statearr_42955;
})();
var statearr_42956_43023 = state_42914__$1;
(statearr_42956_43023[(2)] = null);

(statearr_42956_43023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (6))){
var inst_42846 = (state_42914[(29)]);
var inst_42845 = cljs.core.deref.call(null,cs);
var inst_42846__$1 = cljs.core.keys.call(null,inst_42845);
var inst_42847 = cljs.core.count.call(null,inst_42846__$1);
var inst_42848 = cljs.core.reset_BANG_.call(null,dctr,inst_42847);
var inst_42853 = cljs.core.seq.call(null,inst_42846__$1);
var inst_42854 = inst_42853;
var inst_42855 = null;
var inst_42856 = (0);
var inst_42857 = (0);
var state_42914__$1 = (function (){var statearr_42957 = state_42914;
(statearr_42957[(20)] = inst_42854);

(statearr_42957[(29)] = inst_42846__$1);

(statearr_42957[(9)] = inst_42855);

(statearr_42957[(10)] = inst_42857);

(statearr_42957[(21)] = inst_42856);

(statearr_42957[(30)] = inst_42848);

return statearr_42957;
})();
var statearr_42958_43024 = state_42914__$1;
(statearr_42958_43024[(2)] = null);

(statearr_42958_43024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (28))){
var inst_42854 = (state_42914[(20)]);
var inst_42873 = (state_42914[(25)]);
var inst_42873__$1 = cljs.core.seq.call(null,inst_42854);
var state_42914__$1 = (function (){var statearr_42959 = state_42914;
(statearr_42959[(25)] = inst_42873__$1);

return statearr_42959;
})();
if(inst_42873__$1){
var statearr_42960_43025 = state_42914__$1;
(statearr_42960_43025[(1)] = (33));

} else {
var statearr_42961_43026 = state_42914__$1;
(statearr_42961_43026[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (25))){
var inst_42857 = (state_42914[(10)]);
var inst_42856 = (state_42914[(21)]);
var inst_42859 = (inst_42857 < inst_42856);
var inst_42860 = inst_42859;
var state_42914__$1 = state_42914;
if(cljs.core.truth_(inst_42860)){
var statearr_42962_43027 = state_42914__$1;
(statearr_42962_43027[(1)] = (27));

} else {
var statearr_42963_43028 = state_42914__$1;
(statearr_42963_43028[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (34))){
var state_42914__$1 = state_42914;
var statearr_42964_43029 = state_42914__$1;
(statearr_42964_43029[(2)] = null);

(statearr_42964_43029[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (17))){
var state_42914__$1 = state_42914;
var statearr_42965_43030 = state_42914__$1;
(statearr_42965_43030[(2)] = null);

(statearr_42965_43030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (3))){
var inst_42912 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42914__$1,inst_42912);
} else {
if((state_val_42915 === (12))){
var inst_42841 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42966_43031 = state_42914__$1;
(statearr_42966_43031[(2)] = inst_42841);

(statearr_42966_43031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (2))){
var state_42914__$1 = state_42914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42914__$1,(4),ch);
} else {
if((state_val_42915 === (23))){
var state_42914__$1 = state_42914;
var statearr_42967_43032 = state_42914__$1;
(statearr_42967_43032[(2)] = null);

(statearr_42967_43032[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (35))){
var inst_42896 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42968_43033 = state_42914__$1;
(statearr_42968_43033[(2)] = inst_42896);

(statearr_42968_43033[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (19))){
var inst_42813 = (state_42914[(7)]);
var inst_42817 = cljs.core.chunk_first.call(null,inst_42813);
var inst_42818 = cljs.core.chunk_rest.call(null,inst_42813);
var inst_42819 = cljs.core.count.call(null,inst_42817);
var inst_42791 = inst_42818;
var inst_42792 = inst_42817;
var inst_42793 = inst_42819;
var inst_42794 = (0);
var state_42914__$1 = (function (){var statearr_42969 = state_42914;
(statearr_42969[(13)] = inst_42791);

(statearr_42969[(15)] = inst_42794);

(statearr_42969[(16)] = inst_42793);

(statearr_42969[(17)] = inst_42792);

return statearr_42969;
})();
var statearr_42970_43034 = state_42914__$1;
(statearr_42970_43034[(2)] = null);

(statearr_42970_43034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (11))){
var inst_42813 = (state_42914[(7)]);
var inst_42791 = (state_42914[(13)]);
var inst_42813__$1 = cljs.core.seq.call(null,inst_42791);
var state_42914__$1 = (function (){var statearr_42971 = state_42914;
(statearr_42971[(7)] = inst_42813__$1);

return statearr_42971;
})();
if(inst_42813__$1){
var statearr_42972_43035 = state_42914__$1;
(statearr_42972_43035[(1)] = (16));

} else {
var statearr_42973_43036 = state_42914__$1;
(statearr_42973_43036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (9))){
var inst_42843 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42974_43037 = state_42914__$1;
(statearr_42974_43037[(2)] = inst_42843);

(statearr_42974_43037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (5))){
var inst_42789 = cljs.core.deref.call(null,cs);
var inst_42790 = cljs.core.seq.call(null,inst_42789);
var inst_42791 = inst_42790;
var inst_42792 = null;
var inst_42793 = (0);
var inst_42794 = (0);
var state_42914__$1 = (function (){var statearr_42975 = state_42914;
(statearr_42975[(13)] = inst_42791);

(statearr_42975[(15)] = inst_42794);

(statearr_42975[(16)] = inst_42793);

(statearr_42975[(17)] = inst_42792);

return statearr_42975;
})();
var statearr_42976_43038 = state_42914__$1;
(statearr_42976_43038[(2)] = null);

(statearr_42976_43038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (14))){
var state_42914__$1 = state_42914;
var statearr_42977_43039 = state_42914__$1;
(statearr_42977_43039[(2)] = null);

(statearr_42977_43039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (45))){
var inst_42904 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42978_43040 = state_42914__$1;
(statearr_42978_43040[(2)] = inst_42904);

(statearr_42978_43040[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (26))){
var inst_42846 = (state_42914[(29)]);
var inst_42900 = (state_42914[(2)]);
var inst_42901 = cljs.core.seq.call(null,inst_42846);
var state_42914__$1 = (function (){var statearr_42979 = state_42914;
(statearr_42979[(31)] = inst_42900);

return statearr_42979;
})();
if(inst_42901){
var statearr_42980_43041 = state_42914__$1;
(statearr_42980_43041[(1)] = (42));

} else {
var statearr_42981_43042 = state_42914__$1;
(statearr_42981_43042[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (16))){
var inst_42813 = (state_42914[(7)]);
var inst_42815 = cljs.core.chunked_seq_QMARK_.call(null,inst_42813);
var state_42914__$1 = state_42914;
if(inst_42815){
var statearr_42982_43043 = state_42914__$1;
(statearr_42982_43043[(1)] = (19));

} else {
var statearr_42983_43044 = state_42914__$1;
(statearr_42983_43044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (38))){
var inst_42893 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42984_43045 = state_42914__$1;
(statearr_42984_43045[(2)] = inst_42893);

(statearr_42984_43045[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (30))){
var state_42914__$1 = state_42914;
var statearr_42985_43046 = state_42914__$1;
(statearr_42985_43046[(2)] = null);

(statearr_42985_43046[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (10))){
var inst_42794 = (state_42914[(15)]);
var inst_42792 = (state_42914[(17)]);
var inst_42802 = cljs.core._nth.call(null,inst_42792,inst_42794);
var inst_42803 = cljs.core.nth.call(null,inst_42802,(0),null);
var inst_42804 = cljs.core.nth.call(null,inst_42802,(1),null);
var state_42914__$1 = (function (){var statearr_42986 = state_42914;
(statearr_42986[(26)] = inst_42803);

return statearr_42986;
})();
if(cljs.core.truth_(inst_42804)){
var statearr_42987_43047 = state_42914__$1;
(statearr_42987_43047[(1)] = (13));

} else {
var statearr_42988_43048 = state_42914__$1;
(statearr_42988_43048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (18))){
var inst_42839 = (state_42914[(2)]);
var state_42914__$1 = state_42914;
var statearr_42989_43049 = state_42914__$1;
(statearr_42989_43049[(2)] = inst_42839);

(statearr_42989_43049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (42))){
var state_42914__$1 = state_42914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42914__$1,(45),dchan);
} else {
if((state_val_42915 === (37))){
var inst_42782 = (state_42914[(11)]);
var inst_42873 = (state_42914[(25)]);
var inst_42882 = (state_42914[(23)]);
var inst_42882__$1 = cljs.core.first.call(null,inst_42873);
var inst_42883 = cljs.core.async.put_BANG_.call(null,inst_42882__$1,inst_42782,done);
var state_42914__$1 = (function (){var statearr_42990 = state_42914;
(statearr_42990[(23)] = inst_42882__$1);

return statearr_42990;
})();
if(cljs.core.truth_(inst_42883)){
var statearr_42991_43050 = state_42914__$1;
(statearr_42991_43050[(1)] = (39));

} else {
var statearr_42992_43051 = state_42914__$1;
(statearr_42992_43051[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42915 === (8))){
var inst_42794 = (state_42914[(15)]);
var inst_42793 = (state_42914[(16)]);
var inst_42796 = (inst_42794 < inst_42793);
var inst_42797 = inst_42796;
var state_42914__$1 = state_42914;
if(cljs.core.truth_(inst_42797)){
var statearr_42993_43052 = state_42914__$1;
(statearr_42993_43052[(1)] = (10));

} else {
var statearr_42994_43053 = state_42914__$1;
(statearr_42994_43053[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42083__auto__ = null;
var cljs$core$async$mult_$_state_machine__42083__auto____0 = (function (){
var statearr_42995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42995[(0)] = cljs$core$async$mult_$_state_machine__42083__auto__);

(statearr_42995[(1)] = (1));

return statearr_42995;
});
var cljs$core$async$mult_$_state_machine__42083__auto____1 = (function (state_42914){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_42914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e42996){if((e42996 instanceof Object)){
var ex__42086__auto__ = e42996;
var statearr_42997_43054 = state_42914;
(statearr_42997_43054[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43055 = state_42914;
state_42914 = G__43055;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42083__auto__ = function(state_42914){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42083__auto____1.call(this,state_42914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42083__auto____0;
cljs$core$async$mult_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42083__auto____1;
return cljs$core$async$mult_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_42998 = f__42178__auto__.call(null);
(statearr_42998[(6)] = c__42177__auto___42999);

return statearr_42998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43057 = arguments.length;
switch (G__43057) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43059 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43059.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43060 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43060.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43061 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43061.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43062 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43062.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43063 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43063.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43074 = arguments.length;
var i__4737__auto___43075 = (0);
while(true){
if((i__4737__auto___43075 < len__4736__auto___43074)){
args__4742__auto__.push((arguments[i__4737__auto___43075]));

var G__43076 = (i__4737__auto___43075 + (1));
i__4737__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43068){
var map__43069 = p__43068;
var map__43069__$1 = (((((!((map__43069 == null))))?(((((map__43069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43069):map__43069);
var opts = map__43069__$1;
var statearr_43071_43077 = state;
(statearr_43071_43077[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_43072_43078 = state;
(statearr_43072_43078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43073_43079 = state;
(statearr_43073_43079[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43064){
var G__43065 = cljs.core.first.call(null,seq43064);
var seq43064__$1 = cljs.core.next.call(null,seq43064);
var G__43066 = cljs.core.first.call(null,seq43064__$1);
var seq43064__$2 = cljs.core.next.call(null,seq43064__$1);
var G__43067 = cljs.core.first.call(null,seq43064__$2);
var seq43064__$3 = cljs.core.next.call(null,seq43064__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43065,G__43066,G__43067,seq43064__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43080 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43081){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43081 = meta43081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43082,meta43081__$1){
var self__ = this;
var _43082__$1 = this;
return (new cljs.core.async.t_cljs$core$async43080(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43081__$1));
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43082){
var self__ = this;
var _43082__$1 = this;
return self__.meta43081;
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43081","meta43081",360386614,null)], null);
}));

(cljs.core.async.t_cljs$core$async43080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43080");

(cljs.core.async.t_cljs$core$async43080.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43080.
 */
cljs.core.async.__GT_t_cljs$core$async43080 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43080(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43081){
return (new cljs.core.async.t_cljs$core$async43080(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43081));
});

}

return (new cljs.core.async.t_cljs$core$async43080(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42177__auto___43244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43184){
var state_val_43185 = (state_43184[(1)]);
if((state_val_43185 === (7))){
var inst_43099 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43186_43245 = state_43184__$1;
(statearr_43186_43245[(2)] = inst_43099);

(statearr_43186_43245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (20))){
var inst_43111 = (state_43184[(7)]);
var state_43184__$1 = state_43184;
var statearr_43187_43246 = state_43184__$1;
(statearr_43187_43246[(2)] = inst_43111);

(statearr_43187_43246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (27))){
var state_43184__$1 = state_43184;
var statearr_43188_43247 = state_43184__$1;
(statearr_43188_43247[(2)] = null);

(statearr_43188_43247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (1))){
var inst_43086 = (state_43184[(8)]);
var inst_43086__$1 = calc_state.call(null);
var inst_43088 = (inst_43086__$1 == null);
var inst_43089 = cljs.core.not.call(null,inst_43088);
var state_43184__$1 = (function (){var statearr_43189 = state_43184;
(statearr_43189[(8)] = inst_43086__$1);

return statearr_43189;
})();
if(inst_43089){
var statearr_43190_43248 = state_43184__$1;
(statearr_43190_43248[(1)] = (2));

} else {
var statearr_43191_43249 = state_43184__$1;
(statearr_43191_43249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (24))){
var inst_43135 = (state_43184[(9)]);
var inst_43158 = (state_43184[(10)]);
var inst_43144 = (state_43184[(11)]);
var inst_43158__$1 = inst_43135.call(null,inst_43144);
var state_43184__$1 = (function (){var statearr_43192 = state_43184;
(statearr_43192[(10)] = inst_43158__$1);

return statearr_43192;
})();
if(cljs.core.truth_(inst_43158__$1)){
var statearr_43193_43250 = state_43184__$1;
(statearr_43193_43250[(1)] = (29));

} else {
var statearr_43194_43251 = state_43184__$1;
(statearr_43194_43251[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (4))){
var inst_43102 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43102)){
var statearr_43195_43252 = state_43184__$1;
(statearr_43195_43252[(1)] = (8));

} else {
var statearr_43196_43253 = state_43184__$1;
(statearr_43196_43253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (15))){
var inst_43129 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43129)){
var statearr_43197_43254 = state_43184__$1;
(statearr_43197_43254[(1)] = (19));

} else {
var statearr_43198_43255 = state_43184__$1;
(statearr_43198_43255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (21))){
var inst_43134 = (state_43184[(12)]);
var inst_43134__$1 = (state_43184[(2)]);
var inst_43135 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43136 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43137 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43184__$1 = (function (){var statearr_43199 = state_43184;
(statearr_43199[(9)] = inst_43135);

(statearr_43199[(13)] = inst_43136);

(statearr_43199[(12)] = inst_43134__$1);

return statearr_43199;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43184__$1,(22),inst_43137);
} else {
if((state_val_43185 === (31))){
var inst_43166 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43166)){
var statearr_43200_43256 = state_43184__$1;
(statearr_43200_43256[(1)] = (32));

} else {
var statearr_43201_43257 = state_43184__$1;
(statearr_43201_43257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (32))){
var inst_43143 = (state_43184[(14)]);
var state_43184__$1 = state_43184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43184__$1,(35),out,inst_43143);
} else {
if((state_val_43185 === (33))){
var inst_43134 = (state_43184[(12)]);
var inst_43111 = inst_43134;
var state_43184__$1 = (function (){var statearr_43202 = state_43184;
(statearr_43202[(7)] = inst_43111);

return statearr_43202;
})();
var statearr_43203_43258 = state_43184__$1;
(statearr_43203_43258[(2)] = null);

(statearr_43203_43258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (13))){
var inst_43111 = (state_43184[(7)]);
var inst_43118 = inst_43111.cljs$lang$protocol_mask$partition0$;
var inst_43119 = (inst_43118 & (64));
var inst_43120 = inst_43111.cljs$core$ISeq$;
var inst_43121 = (cljs.core.PROTOCOL_SENTINEL === inst_43120);
var inst_43122 = ((inst_43119) || (inst_43121));
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43122)){
var statearr_43204_43259 = state_43184__$1;
(statearr_43204_43259[(1)] = (16));

} else {
var statearr_43205_43260 = state_43184__$1;
(statearr_43205_43260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (22))){
var inst_43143 = (state_43184[(14)]);
var inst_43144 = (state_43184[(11)]);
var inst_43142 = (state_43184[(2)]);
var inst_43143__$1 = cljs.core.nth.call(null,inst_43142,(0),null);
var inst_43144__$1 = cljs.core.nth.call(null,inst_43142,(1),null);
var inst_43145 = (inst_43143__$1 == null);
var inst_43146 = cljs.core._EQ_.call(null,inst_43144__$1,change);
var inst_43147 = ((inst_43145) || (inst_43146));
var state_43184__$1 = (function (){var statearr_43206 = state_43184;
(statearr_43206[(14)] = inst_43143__$1);

(statearr_43206[(11)] = inst_43144__$1);

return statearr_43206;
})();
if(cljs.core.truth_(inst_43147)){
var statearr_43207_43261 = state_43184__$1;
(statearr_43207_43261[(1)] = (23));

} else {
var statearr_43208_43262 = state_43184__$1;
(statearr_43208_43262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (36))){
var inst_43134 = (state_43184[(12)]);
var inst_43111 = inst_43134;
var state_43184__$1 = (function (){var statearr_43209 = state_43184;
(statearr_43209[(7)] = inst_43111);

return statearr_43209;
})();
var statearr_43210_43263 = state_43184__$1;
(statearr_43210_43263[(2)] = null);

(statearr_43210_43263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (29))){
var inst_43158 = (state_43184[(10)]);
var state_43184__$1 = state_43184;
var statearr_43211_43264 = state_43184__$1;
(statearr_43211_43264[(2)] = inst_43158);

(statearr_43211_43264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (6))){
var state_43184__$1 = state_43184;
var statearr_43212_43265 = state_43184__$1;
(statearr_43212_43265[(2)] = false);

(statearr_43212_43265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (28))){
var inst_43154 = (state_43184[(2)]);
var inst_43155 = calc_state.call(null);
var inst_43111 = inst_43155;
var state_43184__$1 = (function (){var statearr_43213 = state_43184;
(statearr_43213[(15)] = inst_43154);

(statearr_43213[(7)] = inst_43111);

return statearr_43213;
})();
var statearr_43214_43266 = state_43184__$1;
(statearr_43214_43266[(2)] = null);

(statearr_43214_43266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (25))){
var inst_43180 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43215_43267 = state_43184__$1;
(statearr_43215_43267[(2)] = inst_43180);

(statearr_43215_43267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (34))){
var inst_43178 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43216_43268 = state_43184__$1;
(statearr_43216_43268[(2)] = inst_43178);

(statearr_43216_43268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (17))){
var state_43184__$1 = state_43184;
var statearr_43217_43269 = state_43184__$1;
(statearr_43217_43269[(2)] = false);

(statearr_43217_43269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (3))){
var state_43184__$1 = state_43184;
var statearr_43218_43270 = state_43184__$1;
(statearr_43218_43270[(2)] = false);

(statearr_43218_43270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (12))){
var inst_43182 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43184__$1,inst_43182);
} else {
if((state_val_43185 === (2))){
var inst_43086 = (state_43184[(8)]);
var inst_43091 = inst_43086.cljs$lang$protocol_mask$partition0$;
var inst_43092 = (inst_43091 & (64));
var inst_43093 = inst_43086.cljs$core$ISeq$;
var inst_43094 = (cljs.core.PROTOCOL_SENTINEL === inst_43093);
var inst_43095 = ((inst_43092) || (inst_43094));
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43095)){
var statearr_43219_43271 = state_43184__$1;
(statearr_43219_43271[(1)] = (5));

} else {
var statearr_43220_43272 = state_43184__$1;
(statearr_43220_43272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (23))){
var inst_43143 = (state_43184[(14)]);
var inst_43149 = (inst_43143 == null);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43149)){
var statearr_43221_43273 = state_43184__$1;
(statearr_43221_43273[(1)] = (26));

} else {
var statearr_43222_43274 = state_43184__$1;
(statearr_43222_43274[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (35))){
var inst_43169 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43169)){
var statearr_43223_43275 = state_43184__$1;
(statearr_43223_43275[(1)] = (36));

} else {
var statearr_43224_43276 = state_43184__$1;
(statearr_43224_43276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (19))){
var inst_43111 = (state_43184[(7)]);
var inst_43131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43111);
var state_43184__$1 = state_43184;
var statearr_43225_43277 = state_43184__$1;
(statearr_43225_43277[(2)] = inst_43131);

(statearr_43225_43277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (11))){
var inst_43111 = (state_43184[(7)]);
var inst_43115 = (inst_43111 == null);
var inst_43116 = cljs.core.not.call(null,inst_43115);
var state_43184__$1 = state_43184;
if(inst_43116){
var statearr_43226_43278 = state_43184__$1;
(statearr_43226_43278[(1)] = (13));

} else {
var statearr_43227_43279 = state_43184__$1;
(statearr_43227_43279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (9))){
var inst_43086 = (state_43184[(8)]);
var state_43184__$1 = state_43184;
var statearr_43228_43280 = state_43184__$1;
(statearr_43228_43280[(2)] = inst_43086);

(statearr_43228_43280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (5))){
var state_43184__$1 = state_43184;
var statearr_43229_43281 = state_43184__$1;
(statearr_43229_43281[(2)] = true);

(statearr_43229_43281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (14))){
var state_43184__$1 = state_43184;
var statearr_43230_43282 = state_43184__$1;
(statearr_43230_43282[(2)] = false);

(statearr_43230_43282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (26))){
var inst_43144 = (state_43184[(11)]);
var inst_43151 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43144);
var state_43184__$1 = state_43184;
var statearr_43231_43283 = state_43184__$1;
(statearr_43231_43283[(2)] = inst_43151);

(statearr_43231_43283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (16))){
var state_43184__$1 = state_43184;
var statearr_43232_43284 = state_43184__$1;
(statearr_43232_43284[(2)] = true);

(statearr_43232_43284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (38))){
var inst_43174 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43233_43285 = state_43184__$1;
(statearr_43233_43285[(2)] = inst_43174);

(statearr_43233_43285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (30))){
var inst_43135 = (state_43184[(9)]);
var inst_43136 = (state_43184[(13)]);
var inst_43144 = (state_43184[(11)]);
var inst_43161 = cljs.core.empty_QMARK_.call(null,inst_43135);
var inst_43162 = inst_43136.call(null,inst_43144);
var inst_43163 = cljs.core.not.call(null,inst_43162);
var inst_43164 = ((inst_43161) && (inst_43163));
var state_43184__$1 = state_43184;
var statearr_43234_43286 = state_43184__$1;
(statearr_43234_43286[(2)] = inst_43164);

(statearr_43234_43286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (10))){
var inst_43086 = (state_43184[(8)]);
var inst_43107 = (state_43184[(2)]);
var inst_43108 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43109 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43110 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43111 = inst_43086;
var state_43184__$1 = (function (){var statearr_43235 = state_43184;
(statearr_43235[(16)] = inst_43109);

(statearr_43235[(17)] = inst_43110);

(statearr_43235[(18)] = inst_43108);

(statearr_43235[(7)] = inst_43111);

return statearr_43235;
})();
var statearr_43236_43287 = state_43184__$1;
(statearr_43236_43287[(2)] = null);

(statearr_43236_43287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (18))){
var inst_43126 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43237_43288 = state_43184__$1;
(statearr_43237_43288[(2)] = inst_43126);

(statearr_43237_43288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (37))){
var state_43184__$1 = state_43184;
var statearr_43238_43289 = state_43184__$1;
(statearr_43238_43289[(2)] = null);

(statearr_43238_43289[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (8))){
var inst_43086 = (state_43184[(8)]);
var inst_43104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43086);
var state_43184__$1 = state_43184;
var statearr_43239_43290 = state_43184__$1;
(statearr_43239_43290[(2)] = inst_43104);

(statearr_43239_43290[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42083__auto__ = null;
var cljs$core$async$mix_$_state_machine__42083__auto____0 = (function (){
var statearr_43240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43240[(0)] = cljs$core$async$mix_$_state_machine__42083__auto__);

(statearr_43240[(1)] = (1));

return statearr_43240;
});
var cljs$core$async$mix_$_state_machine__42083__auto____1 = (function (state_43184){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43241){if((e43241 instanceof Object)){
var ex__42086__auto__ = e43241;
var statearr_43242_43291 = state_43184;
(statearr_43242_43291[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43292 = state_43184;
state_43184 = G__43292;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42083__auto__ = function(state_43184){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42083__auto____1.call(this,state_43184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42083__auto____0;
cljs$core$async$mix_$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42083__auto____1;
return cljs$core$async$mix_$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43243 = f__42178__auto__.call(null);
(statearr_43243[(6)] = c__42177__auto___43244);

return statearr_43243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43295 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43295.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43296 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43296.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43297 = (function() {
var G__43298 = null;
var G__43298__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__43298__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__43298 = function(p,v){
switch(arguments.length){
case 1:
return G__43298__1.call(this,p);
case 2:
return G__43298__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43298.cljs$core$IFn$_invoke$arity$1 = G__43298__1;
G__43298.cljs$core$IFn$_invoke$arity$2 = G__43298__2;
return G__43298;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43294 = arguments.length;
switch (G__43294) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43297.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43297.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43302 = arguments.length;
switch (G__43302) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__43300_SHARP_){
if(cljs.core.truth_(p1__43300_SHARP_.call(null,topic))){
return p1__43300_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43300_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43303 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43304){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43304 = meta43304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43305,meta43304__$1){
var self__ = this;
var _43305__$1 = this;
return (new cljs.core.async.t_cljs$core$async43303(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43304__$1));
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43305){
var self__ = this;
var _43305__$1 = this;
return self__.meta43304;
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43303.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43304","meta43304",-1594350180,null)], null);
}));

(cljs.core.async.t_cljs$core$async43303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43303");

(cljs.core.async.t_cljs$core$async43303.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43303.
 */
cljs.core.async.__GT_t_cljs$core$async43303 = (function cljs$core$async$__GT_t_cljs$core$async43303(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43304){
return (new cljs.core.async.t_cljs$core$async43303(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43304));
});

}

return (new cljs.core.async.t_cljs$core$async43303(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42177__auto___43423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43377){
var state_val_43378 = (state_43377[(1)]);
if((state_val_43378 === (7))){
var inst_43373 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43379_43424 = state_43377__$1;
(statearr_43379_43424[(2)] = inst_43373);

(statearr_43379_43424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (20))){
var state_43377__$1 = state_43377;
var statearr_43380_43425 = state_43377__$1;
(statearr_43380_43425[(2)] = null);

(statearr_43380_43425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (1))){
var state_43377__$1 = state_43377;
var statearr_43381_43426 = state_43377__$1;
(statearr_43381_43426[(2)] = null);

(statearr_43381_43426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (24))){
var inst_43356 = (state_43377[(7)]);
var inst_43365 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43356);
var state_43377__$1 = state_43377;
var statearr_43382_43427 = state_43377__$1;
(statearr_43382_43427[(2)] = inst_43365);

(statearr_43382_43427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (4))){
var inst_43308 = (state_43377[(8)]);
var inst_43308__$1 = (state_43377[(2)]);
var inst_43309 = (inst_43308__$1 == null);
var state_43377__$1 = (function (){var statearr_43383 = state_43377;
(statearr_43383[(8)] = inst_43308__$1);

return statearr_43383;
})();
if(cljs.core.truth_(inst_43309)){
var statearr_43384_43428 = state_43377__$1;
(statearr_43384_43428[(1)] = (5));

} else {
var statearr_43385_43429 = state_43377__$1;
(statearr_43385_43429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (15))){
var inst_43350 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43386_43430 = state_43377__$1;
(statearr_43386_43430[(2)] = inst_43350);

(statearr_43386_43430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (21))){
var inst_43370 = (state_43377[(2)]);
var state_43377__$1 = (function (){var statearr_43387 = state_43377;
(statearr_43387[(9)] = inst_43370);

return statearr_43387;
})();
var statearr_43388_43431 = state_43377__$1;
(statearr_43388_43431[(2)] = null);

(statearr_43388_43431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (13))){
var inst_43332 = (state_43377[(10)]);
var inst_43334 = cljs.core.chunked_seq_QMARK_.call(null,inst_43332);
var state_43377__$1 = state_43377;
if(inst_43334){
var statearr_43389_43432 = state_43377__$1;
(statearr_43389_43432[(1)] = (16));

} else {
var statearr_43390_43433 = state_43377__$1;
(statearr_43390_43433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (22))){
var inst_43362 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
if(cljs.core.truth_(inst_43362)){
var statearr_43391_43434 = state_43377__$1;
(statearr_43391_43434[(1)] = (23));

} else {
var statearr_43392_43435 = state_43377__$1;
(statearr_43392_43435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (6))){
var inst_43358 = (state_43377[(11)]);
var inst_43308 = (state_43377[(8)]);
var inst_43356 = (state_43377[(7)]);
var inst_43356__$1 = topic_fn.call(null,inst_43308);
var inst_43357 = cljs.core.deref.call(null,mults);
var inst_43358__$1 = cljs.core.get.call(null,inst_43357,inst_43356__$1);
var state_43377__$1 = (function (){var statearr_43393 = state_43377;
(statearr_43393[(11)] = inst_43358__$1);

(statearr_43393[(7)] = inst_43356__$1);

return statearr_43393;
})();
if(cljs.core.truth_(inst_43358__$1)){
var statearr_43394_43436 = state_43377__$1;
(statearr_43394_43436[(1)] = (19));

} else {
var statearr_43395_43437 = state_43377__$1;
(statearr_43395_43437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (25))){
var inst_43367 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43396_43438 = state_43377__$1;
(statearr_43396_43438[(2)] = inst_43367);

(statearr_43396_43438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (17))){
var inst_43332 = (state_43377[(10)]);
var inst_43341 = cljs.core.first.call(null,inst_43332);
var inst_43342 = cljs.core.async.muxch_STAR_.call(null,inst_43341);
var inst_43343 = cljs.core.async.close_BANG_.call(null,inst_43342);
var inst_43344 = cljs.core.next.call(null,inst_43332);
var inst_43318 = inst_43344;
var inst_43319 = null;
var inst_43320 = (0);
var inst_43321 = (0);
var state_43377__$1 = (function (){var statearr_43397 = state_43377;
(statearr_43397[(12)] = inst_43318);

(statearr_43397[(13)] = inst_43343);

(statearr_43397[(14)] = inst_43320);

(statearr_43397[(15)] = inst_43321);

(statearr_43397[(16)] = inst_43319);

return statearr_43397;
})();
var statearr_43398_43439 = state_43377__$1;
(statearr_43398_43439[(2)] = null);

(statearr_43398_43439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (3))){
var inst_43375 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43377__$1,inst_43375);
} else {
if((state_val_43378 === (12))){
var inst_43352 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43399_43440 = state_43377__$1;
(statearr_43399_43440[(2)] = inst_43352);

(statearr_43399_43440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (2))){
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43377__$1,(4),ch);
} else {
if((state_val_43378 === (23))){
var state_43377__$1 = state_43377;
var statearr_43400_43441 = state_43377__$1;
(statearr_43400_43441[(2)] = null);

(statearr_43400_43441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (19))){
var inst_43358 = (state_43377[(11)]);
var inst_43308 = (state_43377[(8)]);
var inst_43360 = cljs.core.async.muxch_STAR_.call(null,inst_43358);
var state_43377__$1 = state_43377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43377__$1,(22),inst_43360,inst_43308);
} else {
if((state_val_43378 === (11))){
var inst_43318 = (state_43377[(12)]);
var inst_43332 = (state_43377[(10)]);
var inst_43332__$1 = cljs.core.seq.call(null,inst_43318);
var state_43377__$1 = (function (){var statearr_43401 = state_43377;
(statearr_43401[(10)] = inst_43332__$1);

return statearr_43401;
})();
if(inst_43332__$1){
var statearr_43402_43442 = state_43377__$1;
(statearr_43402_43442[(1)] = (13));

} else {
var statearr_43403_43443 = state_43377__$1;
(statearr_43403_43443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (9))){
var inst_43354 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43404_43444 = state_43377__$1;
(statearr_43404_43444[(2)] = inst_43354);

(statearr_43404_43444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (5))){
var inst_43315 = cljs.core.deref.call(null,mults);
var inst_43316 = cljs.core.vals.call(null,inst_43315);
var inst_43317 = cljs.core.seq.call(null,inst_43316);
var inst_43318 = inst_43317;
var inst_43319 = null;
var inst_43320 = (0);
var inst_43321 = (0);
var state_43377__$1 = (function (){var statearr_43405 = state_43377;
(statearr_43405[(12)] = inst_43318);

(statearr_43405[(14)] = inst_43320);

(statearr_43405[(15)] = inst_43321);

(statearr_43405[(16)] = inst_43319);

return statearr_43405;
})();
var statearr_43406_43445 = state_43377__$1;
(statearr_43406_43445[(2)] = null);

(statearr_43406_43445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (14))){
var state_43377__$1 = state_43377;
var statearr_43410_43446 = state_43377__$1;
(statearr_43410_43446[(2)] = null);

(statearr_43410_43446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (16))){
var inst_43332 = (state_43377[(10)]);
var inst_43336 = cljs.core.chunk_first.call(null,inst_43332);
var inst_43337 = cljs.core.chunk_rest.call(null,inst_43332);
var inst_43338 = cljs.core.count.call(null,inst_43336);
var inst_43318 = inst_43337;
var inst_43319 = inst_43336;
var inst_43320 = inst_43338;
var inst_43321 = (0);
var state_43377__$1 = (function (){var statearr_43411 = state_43377;
(statearr_43411[(12)] = inst_43318);

(statearr_43411[(14)] = inst_43320);

(statearr_43411[(15)] = inst_43321);

(statearr_43411[(16)] = inst_43319);

return statearr_43411;
})();
var statearr_43412_43447 = state_43377__$1;
(statearr_43412_43447[(2)] = null);

(statearr_43412_43447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (10))){
var inst_43318 = (state_43377[(12)]);
var inst_43320 = (state_43377[(14)]);
var inst_43321 = (state_43377[(15)]);
var inst_43319 = (state_43377[(16)]);
var inst_43326 = cljs.core._nth.call(null,inst_43319,inst_43321);
var inst_43327 = cljs.core.async.muxch_STAR_.call(null,inst_43326);
var inst_43328 = cljs.core.async.close_BANG_.call(null,inst_43327);
var inst_43329 = (inst_43321 + (1));
var tmp43407 = inst_43318;
var tmp43408 = inst_43320;
var tmp43409 = inst_43319;
var inst_43318__$1 = tmp43407;
var inst_43319__$1 = tmp43409;
var inst_43320__$1 = tmp43408;
var inst_43321__$1 = inst_43329;
var state_43377__$1 = (function (){var statearr_43413 = state_43377;
(statearr_43413[(17)] = inst_43328);

(statearr_43413[(12)] = inst_43318__$1);

(statearr_43413[(14)] = inst_43320__$1);

(statearr_43413[(15)] = inst_43321__$1);

(statearr_43413[(16)] = inst_43319__$1);

return statearr_43413;
})();
var statearr_43414_43448 = state_43377__$1;
(statearr_43414_43448[(2)] = null);

(statearr_43414_43448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (18))){
var inst_43347 = (state_43377[(2)]);
var state_43377__$1 = state_43377;
var statearr_43415_43449 = state_43377__$1;
(statearr_43415_43449[(2)] = inst_43347);

(statearr_43415_43449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43378 === (8))){
var inst_43320 = (state_43377[(14)]);
var inst_43321 = (state_43377[(15)]);
var inst_43323 = (inst_43321 < inst_43320);
var inst_43324 = inst_43323;
var state_43377__$1 = state_43377;
if(cljs.core.truth_(inst_43324)){
var statearr_43416_43450 = state_43377__$1;
(statearr_43416_43450[(1)] = (10));

} else {
var statearr_43417_43451 = state_43377__$1;
(statearr_43417_43451[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43418[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43418[(1)] = (1));

return statearr_43418;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43377){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43419){if((e43419 instanceof Object)){
var ex__42086__auto__ = e43419;
var statearr_43420_43452 = state_43377;
(statearr_43420_43452[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43453 = state_43377;
state_43377 = G__43453;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43421 = f__42178__auto__.call(null);
(statearr_43421[(6)] = c__42177__auto___43423);

return statearr_43421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43455 = arguments.length;
switch (G__43455) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43458 = arguments.length;
switch (G__43458) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43461 = arguments.length;
switch (G__43461) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__42177__auto___43528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43500){
var state_val_43501 = (state_43500[(1)]);
if((state_val_43501 === (7))){
var state_43500__$1 = state_43500;
var statearr_43502_43529 = state_43500__$1;
(statearr_43502_43529[(2)] = null);

(statearr_43502_43529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (1))){
var state_43500__$1 = state_43500;
var statearr_43503_43530 = state_43500__$1;
(statearr_43503_43530[(2)] = null);

(statearr_43503_43530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (4))){
var inst_43464 = (state_43500[(7)]);
var inst_43466 = (inst_43464 < cnt);
var state_43500__$1 = state_43500;
if(cljs.core.truth_(inst_43466)){
var statearr_43504_43531 = state_43500__$1;
(statearr_43504_43531[(1)] = (6));

} else {
var statearr_43505_43532 = state_43500__$1;
(statearr_43505_43532[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (15))){
var inst_43496 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43506_43533 = state_43500__$1;
(statearr_43506_43533[(2)] = inst_43496);

(statearr_43506_43533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (13))){
var inst_43489 = cljs.core.async.close_BANG_.call(null,out);
var state_43500__$1 = state_43500;
var statearr_43507_43534 = state_43500__$1;
(statearr_43507_43534[(2)] = inst_43489);

(statearr_43507_43534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (6))){
var state_43500__$1 = state_43500;
var statearr_43508_43535 = state_43500__$1;
(statearr_43508_43535[(2)] = null);

(statearr_43508_43535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (3))){
var inst_43498 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43500__$1,inst_43498);
} else {
if((state_val_43501 === (12))){
var inst_43486 = (state_43500[(8)]);
var inst_43486__$1 = (state_43500[(2)]);
var inst_43487 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43486__$1);
var state_43500__$1 = (function (){var statearr_43509 = state_43500;
(statearr_43509[(8)] = inst_43486__$1);

return statearr_43509;
})();
if(cljs.core.truth_(inst_43487)){
var statearr_43510_43536 = state_43500__$1;
(statearr_43510_43536[(1)] = (13));

} else {
var statearr_43511_43537 = state_43500__$1;
(statearr_43511_43537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (2))){
var inst_43463 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43464 = (0);
var state_43500__$1 = (function (){var statearr_43512 = state_43500;
(statearr_43512[(7)] = inst_43464);

(statearr_43512[(9)] = inst_43463);

return statearr_43512;
})();
var statearr_43513_43538 = state_43500__$1;
(statearr_43513_43538[(2)] = null);

(statearr_43513_43538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (11))){
var inst_43464 = (state_43500[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43500,(10),Object,null,(9));
var inst_43473 = chs__$1.call(null,inst_43464);
var inst_43474 = done.call(null,inst_43464);
var inst_43475 = cljs.core.async.take_BANG_.call(null,inst_43473,inst_43474);
var state_43500__$1 = state_43500;
var statearr_43514_43539 = state_43500__$1;
(statearr_43514_43539[(2)] = inst_43475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (9))){
var inst_43464 = (state_43500[(7)]);
var inst_43477 = (state_43500[(2)]);
var inst_43478 = (inst_43464 + (1));
var inst_43464__$1 = inst_43478;
var state_43500__$1 = (function (){var statearr_43515 = state_43500;
(statearr_43515[(10)] = inst_43477);

(statearr_43515[(7)] = inst_43464__$1);

return statearr_43515;
})();
var statearr_43516_43540 = state_43500__$1;
(statearr_43516_43540[(2)] = null);

(statearr_43516_43540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (5))){
var inst_43484 = (state_43500[(2)]);
var state_43500__$1 = (function (){var statearr_43517 = state_43500;
(statearr_43517[(11)] = inst_43484);

return statearr_43517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43500__$1,(12),dchan);
} else {
if((state_val_43501 === (14))){
var inst_43486 = (state_43500[(8)]);
var inst_43491 = cljs.core.apply.call(null,f,inst_43486);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43500__$1,(16),out,inst_43491);
} else {
if((state_val_43501 === (16))){
var inst_43493 = (state_43500[(2)]);
var state_43500__$1 = (function (){var statearr_43518 = state_43500;
(statearr_43518[(12)] = inst_43493);

return statearr_43518;
})();
var statearr_43519_43541 = state_43500__$1;
(statearr_43519_43541[(2)] = null);

(statearr_43519_43541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (10))){
var inst_43468 = (state_43500[(2)]);
var inst_43469 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43500__$1 = (function (){var statearr_43520 = state_43500;
(statearr_43520[(13)] = inst_43468);

return statearr_43520;
})();
var statearr_43521_43542 = state_43500__$1;
(statearr_43521_43542[(2)] = inst_43469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (8))){
var inst_43482 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43522_43543 = state_43500__$1;
(statearr_43522_43543[(2)] = inst_43482);

(statearr_43522_43543[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43523[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43523[(1)] = (1));

return statearr_43523;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43500){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43524){if((e43524 instanceof Object)){
var ex__42086__auto__ = e43524;
var statearr_43525_43544 = state_43500;
(statearr_43525_43544[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43545 = state_43500;
state_43500 = G__43545;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43526 = f__42178__auto__.call(null);
(statearr_43526[(6)] = c__42177__auto___43528);

return statearr_43526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43548 = arguments.length;
switch (G__43548) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___43602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43580){
var state_val_43581 = (state_43580[(1)]);
if((state_val_43581 === (7))){
var inst_43559 = (state_43580[(7)]);
var inst_43560 = (state_43580[(8)]);
var inst_43559__$1 = (state_43580[(2)]);
var inst_43560__$1 = cljs.core.nth.call(null,inst_43559__$1,(0),null);
var inst_43561 = cljs.core.nth.call(null,inst_43559__$1,(1),null);
var inst_43562 = (inst_43560__$1 == null);
var state_43580__$1 = (function (){var statearr_43582 = state_43580;
(statearr_43582[(9)] = inst_43561);

(statearr_43582[(7)] = inst_43559__$1);

(statearr_43582[(8)] = inst_43560__$1);

return statearr_43582;
})();
if(cljs.core.truth_(inst_43562)){
var statearr_43583_43603 = state_43580__$1;
(statearr_43583_43603[(1)] = (8));

} else {
var statearr_43584_43604 = state_43580__$1;
(statearr_43584_43604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (1))){
var inst_43549 = cljs.core.vec.call(null,chs);
var inst_43550 = inst_43549;
var state_43580__$1 = (function (){var statearr_43585 = state_43580;
(statearr_43585[(10)] = inst_43550);

return statearr_43585;
})();
var statearr_43586_43605 = state_43580__$1;
(statearr_43586_43605[(2)] = null);

(statearr_43586_43605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (4))){
var inst_43550 = (state_43580[(10)]);
var state_43580__$1 = state_43580;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43580__$1,(7),inst_43550);
} else {
if((state_val_43581 === (6))){
var inst_43576 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43587_43606 = state_43580__$1;
(statearr_43587_43606[(2)] = inst_43576);

(statearr_43587_43606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (3))){
var inst_43578 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43580__$1,inst_43578);
} else {
if((state_val_43581 === (2))){
var inst_43550 = (state_43580[(10)]);
var inst_43552 = cljs.core.count.call(null,inst_43550);
var inst_43553 = (inst_43552 > (0));
var state_43580__$1 = state_43580;
if(cljs.core.truth_(inst_43553)){
var statearr_43589_43607 = state_43580__$1;
(statearr_43589_43607[(1)] = (4));

} else {
var statearr_43590_43608 = state_43580__$1;
(statearr_43590_43608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (11))){
var inst_43550 = (state_43580[(10)]);
var inst_43569 = (state_43580[(2)]);
var tmp43588 = inst_43550;
var inst_43550__$1 = tmp43588;
var state_43580__$1 = (function (){var statearr_43591 = state_43580;
(statearr_43591[(10)] = inst_43550__$1);

(statearr_43591[(11)] = inst_43569);

return statearr_43591;
})();
var statearr_43592_43609 = state_43580__$1;
(statearr_43592_43609[(2)] = null);

(statearr_43592_43609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (9))){
var inst_43560 = (state_43580[(8)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43580__$1,(11),out,inst_43560);
} else {
if((state_val_43581 === (5))){
var inst_43574 = cljs.core.async.close_BANG_.call(null,out);
var state_43580__$1 = state_43580;
var statearr_43593_43610 = state_43580__$1;
(statearr_43593_43610[(2)] = inst_43574);

(statearr_43593_43610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (10))){
var inst_43572 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43594_43611 = state_43580__$1;
(statearr_43594_43611[(2)] = inst_43572);

(statearr_43594_43611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (8))){
var inst_43550 = (state_43580[(10)]);
var inst_43561 = (state_43580[(9)]);
var inst_43559 = (state_43580[(7)]);
var inst_43560 = (state_43580[(8)]);
var inst_43564 = (function (){var cs = inst_43550;
var vec__43555 = inst_43559;
var v = inst_43560;
var c = inst_43561;
return (function (p1__43546_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43546_SHARP_);
});
})();
var inst_43565 = cljs.core.filterv.call(null,inst_43564,inst_43550);
var inst_43550__$1 = inst_43565;
var state_43580__$1 = (function (){var statearr_43595 = state_43580;
(statearr_43595[(10)] = inst_43550__$1);

return statearr_43595;
})();
var statearr_43596_43612 = state_43580__$1;
(statearr_43596_43612[(2)] = null);

(statearr_43596_43612[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43597[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43597[(1)] = (1));

return statearr_43597;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43580){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43598){if((e43598 instanceof Object)){
var ex__42086__auto__ = e43598;
var statearr_43599_43613 = state_43580;
(statearr_43599_43613[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43614 = state_43580;
state_43580 = G__43614;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43600 = f__42178__auto__.call(null);
(statearr_43600[(6)] = c__42177__auto___43602);

return statearr_43600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43616 = arguments.length;
switch (G__43616) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___43661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43640){
var state_val_43641 = (state_43640[(1)]);
if((state_val_43641 === (7))){
var inst_43622 = (state_43640[(7)]);
var inst_43622__$1 = (state_43640[(2)]);
var inst_43623 = (inst_43622__$1 == null);
var inst_43624 = cljs.core.not.call(null,inst_43623);
var state_43640__$1 = (function (){var statearr_43642 = state_43640;
(statearr_43642[(7)] = inst_43622__$1);

return statearr_43642;
})();
if(inst_43624){
var statearr_43643_43662 = state_43640__$1;
(statearr_43643_43662[(1)] = (8));

} else {
var statearr_43644_43663 = state_43640__$1;
(statearr_43644_43663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (1))){
var inst_43617 = (0);
var state_43640__$1 = (function (){var statearr_43645 = state_43640;
(statearr_43645[(8)] = inst_43617);

return statearr_43645;
})();
var statearr_43646_43664 = state_43640__$1;
(statearr_43646_43664[(2)] = null);

(statearr_43646_43664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (4))){
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43640__$1,(7),ch);
} else {
if((state_val_43641 === (6))){
var inst_43635 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
var statearr_43647_43665 = state_43640__$1;
(statearr_43647_43665[(2)] = inst_43635);

(statearr_43647_43665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (3))){
var inst_43637 = (state_43640[(2)]);
var inst_43638 = cljs.core.async.close_BANG_.call(null,out);
var state_43640__$1 = (function (){var statearr_43648 = state_43640;
(statearr_43648[(9)] = inst_43637);

return statearr_43648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43640__$1,inst_43638);
} else {
if((state_val_43641 === (2))){
var inst_43617 = (state_43640[(8)]);
var inst_43619 = (inst_43617 < n);
var state_43640__$1 = state_43640;
if(cljs.core.truth_(inst_43619)){
var statearr_43649_43666 = state_43640__$1;
(statearr_43649_43666[(1)] = (4));

} else {
var statearr_43650_43667 = state_43640__$1;
(statearr_43650_43667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (11))){
var inst_43617 = (state_43640[(8)]);
var inst_43627 = (state_43640[(2)]);
var inst_43628 = (inst_43617 + (1));
var inst_43617__$1 = inst_43628;
var state_43640__$1 = (function (){var statearr_43651 = state_43640;
(statearr_43651[(8)] = inst_43617__$1);

(statearr_43651[(10)] = inst_43627);

return statearr_43651;
})();
var statearr_43652_43668 = state_43640__$1;
(statearr_43652_43668[(2)] = null);

(statearr_43652_43668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (9))){
var state_43640__$1 = state_43640;
var statearr_43653_43669 = state_43640__$1;
(statearr_43653_43669[(2)] = null);

(statearr_43653_43669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (5))){
var state_43640__$1 = state_43640;
var statearr_43654_43670 = state_43640__$1;
(statearr_43654_43670[(2)] = null);

(statearr_43654_43670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (10))){
var inst_43632 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
var statearr_43655_43671 = state_43640__$1;
(statearr_43655_43671[(2)] = inst_43632);

(statearr_43655_43671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (8))){
var inst_43622 = (state_43640[(7)]);
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43640__$1,(11),out,inst_43622);
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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43656[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43656[(1)] = (1));

return statearr_43656;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43640){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43657){if((e43657 instanceof Object)){
var ex__42086__auto__ = e43657;
var statearr_43658_43672 = state_43640;
(statearr_43658_43672[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43673 = state_43640;
state_43640 = G__43673;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43659 = f__42178__auto__.call(null);
(statearr_43659[(6)] = c__42177__auto___43661);

return statearr_43659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43675 = (function (f,ch,meta43676){
this.f = f;
this.ch = ch;
this.meta43676 = meta43676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43677,meta43676__$1){
var self__ = this;
var _43677__$1 = this;
return (new cljs.core.async.t_cljs$core$async43675(self__.f,self__.ch,meta43676__$1));
}));

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43677){
var self__ = this;
var _43677__$1 = this;
return self__.meta43676;
}));

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43678 = (function (f,ch,meta43676,_,fn1,meta43679){
this.f = f;
this.ch = ch;
this.meta43676 = meta43676;
this._ = _;
this.fn1 = fn1;
this.meta43679 = meta43679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43680,meta43679__$1){
var self__ = this;
var _43680__$1 = this;
return (new cljs.core.async.t_cljs$core$async43678(self__.f,self__.ch,self__.meta43676,self__._,self__.fn1,meta43679__$1));
}));

(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43680){
var self__ = this;
var _43680__$1 = this;
return self__.meta43679;
}));

(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__43674_SHARP_){
return f1.call(null,(((p1__43674_SHARP_ == null))?null:self__.f.call(null,p1__43674_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async43678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43676","meta43676",1028924801,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43675","cljs.core.async/t_cljs$core$async43675",1901933236,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43679","meta43679",1705075075,null)], null);
}));

(cljs.core.async.t_cljs$core$async43678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43678");

(cljs.core.async.t_cljs$core$async43678.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43678.
 */
cljs.core.async.__GT_t_cljs$core$async43678 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43678(f__$1,ch__$1,meta43676__$1,___$2,fn1__$1,meta43679){
return (new cljs.core.async.t_cljs$core$async43678(f__$1,ch__$1,meta43676__$1,___$2,fn1__$1,meta43679));
});

}

return (new cljs.core.async.t_cljs$core$async43678(self__.f,self__.ch,self__.meta43676,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43676","meta43676",1028924801,null)], null);
}));

(cljs.core.async.t_cljs$core$async43675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43675");

(cljs.core.async.t_cljs$core$async43675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43675.
 */
cljs.core.async.__GT_t_cljs$core$async43675 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43675(f__$1,ch__$1,meta43676){
return (new cljs.core.async.t_cljs$core$async43675(f__$1,ch__$1,meta43676));
});

}

return (new cljs.core.async.t_cljs$core$async43675(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43681 = (function (f,ch,meta43682){
this.f = f;
this.ch = ch;
this.meta43682 = meta43682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43683,meta43682__$1){
var self__ = this;
var _43683__$1 = this;
return (new cljs.core.async.t_cljs$core$async43681(self__.f,self__.ch,meta43682__$1));
}));

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43683){
var self__ = this;
var _43683__$1 = this;
return self__.meta43682;
}));

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async43681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43682","meta43682",439790702,null)], null);
}));

(cljs.core.async.t_cljs$core$async43681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43681");

(cljs.core.async.t_cljs$core$async43681.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43681.
 */
cljs.core.async.__GT_t_cljs$core$async43681 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43681(f__$1,ch__$1,meta43682){
return (new cljs.core.async.t_cljs$core$async43681(f__$1,ch__$1,meta43682));
});

}

return (new cljs.core.async.t_cljs$core$async43681(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43684 = (function (p,ch,meta43685){
this.p = p;
this.ch = ch;
this.meta43685 = meta43685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43686,meta43685__$1){
var self__ = this;
var _43686__$1 = this;
return (new cljs.core.async.t_cljs$core$async43684(self__.p,self__.ch,meta43685__$1));
}));

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43686){
var self__ = this;
var _43686__$1 = this;
return self__.meta43685;
}));

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43685","meta43685",-2104037766,null)], null);
}));

(cljs.core.async.t_cljs$core$async43684.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43684");

(cljs.core.async.t_cljs$core$async43684.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async43684");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43684.
 */
cljs.core.async.__GT_t_cljs$core$async43684 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43684(p__$1,ch__$1,meta43685){
return (new cljs.core.async.t_cljs$core$async43684(p__$1,ch__$1,meta43685));
});

}

return (new cljs.core.async.t_cljs$core$async43684(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43688 = arguments.length;
switch (G__43688) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___43728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43709){
var state_val_43710 = (state_43709[(1)]);
if((state_val_43710 === (7))){
var inst_43705 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43711_43729 = state_43709__$1;
(statearr_43711_43729[(2)] = inst_43705);

(statearr_43711_43729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (1))){
var state_43709__$1 = state_43709;
var statearr_43712_43730 = state_43709__$1;
(statearr_43712_43730[(2)] = null);

(statearr_43712_43730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (4))){
var inst_43691 = (state_43709[(7)]);
var inst_43691__$1 = (state_43709[(2)]);
var inst_43692 = (inst_43691__$1 == null);
var state_43709__$1 = (function (){var statearr_43713 = state_43709;
(statearr_43713[(7)] = inst_43691__$1);

return statearr_43713;
})();
if(cljs.core.truth_(inst_43692)){
var statearr_43714_43731 = state_43709__$1;
(statearr_43714_43731[(1)] = (5));

} else {
var statearr_43715_43732 = state_43709__$1;
(statearr_43715_43732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (6))){
var inst_43691 = (state_43709[(7)]);
var inst_43696 = p.call(null,inst_43691);
var state_43709__$1 = state_43709;
if(cljs.core.truth_(inst_43696)){
var statearr_43716_43733 = state_43709__$1;
(statearr_43716_43733[(1)] = (8));

} else {
var statearr_43717_43734 = state_43709__$1;
(statearr_43717_43734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (3))){
var inst_43707 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43709__$1,inst_43707);
} else {
if((state_val_43710 === (2))){
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43709__$1,(4),ch);
} else {
if((state_val_43710 === (11))){
var inst_43699 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43718_43735 = state_43709__$1;
(statearr_43718_43735[(2)] = inst_43699);

(statearr_43718_43735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (9))){
var state_43709__$1 = state_43709;
var statearr_43719_43736 = state_43709__$1;
(statearr_43719_43736[(2)] = null);

(statearr_43719_43736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (5))){
var inst_43694 = cljs.core.async.close_BANG_.call(null,out);
var state_43709__$1 = state_43709;
var statearr_43720_43737 = state_43709__$1;
(statearr_43720_43737[(2)] = inst_43694);

(statearr_43720_43737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (10))){
var inst_43702 = (state_43709[(2)]);
var state_43709__$1 = (function (){var statearr_43721 = state_43709;
(statearr_43721[(8)] = inst_43702);

return statearr_43721;
})();
var statearr_43722_43738 = state_43709__$1;
(statearr_43722_43738[(2)] = null);

(statearr_43722_43738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (8))){
var inst_43691 = (state_43709[(7)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43709__$1,(11),out,inst_43691);
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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43723 = [null,null,null,null,null,null,null,null,null];
(statearr_43723[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43723[(1)] = (1));

return statearr_43723;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43709){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43724){if((e43724 instanceof Object)){
var ex__42086__auto__ = e43724;
var statearr_43725_43739 = state_43709;
(statearr_43725_43739[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43740 = state_43709;
state_43709 = G__43740;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43726 = f__42178__auto__.call(null);
(statearr_43726[(6)] = c__42177__auto___43728);

return statearr_43726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43742 = arguments.length;
switch (G__43742) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43805){
var state_val_43806 = (state_43805[(1)]);
if((state_val_43806 === (7))){
var inst_43801 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43807_43845 = state_43805__$1;
(statearr_43807_43845[(2)] = inst_43801);

(statearr_43807_43845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (20))){
var inst_43771 = (state_43805[(7)]);
var inst_43782 = (state_43805[(2)]);
var inst_43783 = cljs.core.next.call(null,inst_43771);
var inst_43757 = inst_43783;
var inst_43758 = null;
var inst_43759 = (0);
var inst_43760 = (0);
var state_43805__$1 = (function (){var statearr_43808 = state_43805;
(statearr_43808[(8)] = inst_43760);

(statearr_43808[(9)] = inst_43782);

(statearr_43808[(10)] = inst_43757);

(statearr_43808[(11)] = inst_43759);

(statearr_43808[(12)] = inst_43758);

return statearr_43808;
})();
var statearr_43809_43846 = state_43805__$1;
(statearr_43809_43846[(2)] = null);

(statearr_43809_43846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (1))){
var state_43805__$1 = state_43805;
var statearr_43810_43847 = state_43805__$1;
(statearr_43810_43847[(2)] = null);

(statearr_43810_43847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (4))){
var inst_43746 = (state_43805[(13)]);
var inst_43746__$1 = (state_43805[(2)]);
var inst_43747 = (inst_43746__$1 == null);
var state_43805__$1 = (function (){var statearr_43811 = state_43805;
(statearr_43811[(13)] = inst_43746__$1);

return statearr_43811;
})();
if(cljs.core.truth_(inst_43747)){
var statearr_43812_43848 = state_43805__$1;
(statearr_43812_43848[(1)] = (5));

} else {
var statearr_43813_43849 = state_43805__$1;
(statearr_43813_43849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (15))){
var state_43805__$1 = state_43805;
var statearr_43817_43850 = state_43805__$1;
(statearr_43817_43850[(2)] = null);

(statearr_43817_43850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (21))){
var state_43805__$1 = state_43805;
var statearr_43818_43851 = state_43805__$1;
(statearr_43818_43851[(2)] = null);

(statearr_43818_43851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (13))){
var inst_43760 = (state_43805[(8)]);
var inst_43757 = (state_43805[(10)]);
var inst_43759 = (state_43805[(11)]);
var inst_43758 = (state_43805[(12)]);
var inst_43767 = (state_43805[(2)]);
var inst_43768 = (inst_43760 + (1));
var tmp43814 = inst_43757;
var tmp43815 = inst_43759;
var tmp43816 = inst_43758;
var inst_43757__$1 = tmp43814;
var inst_43758__$1 = tmp43816;
var inst_43759__$1 = tmp43815;
var inst_43760__$1 = inst_43768;
var state_43805__$1 = (function (){var statearr_43819 = state_43805;
(statearr_43819[(14)] = inst_43767);

(statearr_43819[(8)] = inst_43760__$1);

(statearr_43819[(10)] = inst_43757__$1);

(statearr_43819[(11)] = inst_43759__$1);

(statearr_43819[(12)] = inst_43758__$1);

return statearr_43819;
})();
var statearr_43820_43852 = state_43805__$1;
(statearr_43820_43852[(2)] = null);

(statearr_43820_43852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (22))){
var state_43805__$1 = state_43805;
var statearr_43821_43853 = state_43805__$1;
(statearr_43821_43853[(2)] = null);

(statearr_43821_43853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (6))){
var inst_43746 = (state_43805[(13)]);
var inst_43755 = f.call(null,inst_43746);
var inst_43756 = cljs.core.seq.call(null,inst_43755);
var inst_43757 = inst_43756;
var inst_43758 = null;
var inst_43759 = (0);
var inst_43760 = (0);
var state_43805__$1 = (function (){var statearr_43822 = state_43805;
(statearr_43822[(8)] = inst_43760);

(statearr_43822[(10)] = inst_43757);

(statearr_43822[(11)] = inst_43759);

(statearr_43822[(12)] = inst_43758);

return statearr_43822;
})();
var statearr_43823_43854 = state_43805__$1;
(statearr_43823_43854[(2)] = null);

(statearr_43823_43854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (17))){
var inst_43771 = (state_43805[(7)]);
var inst_43775 = cljs.core.chunk_first.call(null,inst_43771);
var inst_43776 = cljs.core.chunk_rest.call(null,inst_43771);
var inst_43777 = cljs.core.count.call(null,inst_43775);
var inst_43757 = inst_43776;
var inst_43758 = inst_43775;
var inst_43759 = inst_43777;
var inst_43760 = (0);
var state_43805__$1 = (function (){var statearr_43824 = state_43805;
(statearr_43824[(8)] = inst_43760);

(statearr_43824[(10)] = inst_43757);

(statearr_43824[(11)] = inst_43759);

(statearr_43824[(12)] = inst_43758);

return statearr_43824;
})();
var statearr_43825_43855 = state_43805__$1;
(statearr_43825_43855[(2)] = null);

(statearr_43825_43855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (3))){
var inst_43803 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43805__$1,inst_43803);
} else {
if((state_val_43806 === (12))){
var inst_43791 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43826_43856 = state_43805__$1;
(statearr_43826_43856[(2)] = inst_43791);

(statearr_43826_43856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (2))){
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43805__$1,(4),in$);
} else {
if((state_val_43806 === (23))){
var inst_43799 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43827_43857 = state_43805__$1;
(statearr_43827_43857[(2)] = inst_43799);

(statearr_43827_43857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (19))){
var inst_43786 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43828_43858 = state_43805__$1;
(statearr_43828_43858[(2)] = inst_43786);

(statearr_43828_43858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (11))){
var inst_43757 = (state_43805[(10)]);
var inst_43771 = (state_43805[(7)]);
var inst_43771__$1 = cljs.core.seq.call(null,inst_43757);
var state_43805__$1 = (function (){var statearr_43829 = state_43805;
(statearr_43829[(7)] = inst_43771__$1);

return statearr_43829;
})();
if(inst_43771__$1){
var statearr_43830_43859 = state_43805__$1;
(statearr_43830_43859[(1)] = (14));

} else {
var statearr_43831_43860 = state_43805__$1;
(statearr_43831_43860[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (9))){
var inst_43793 = (state_43805[(2)]);
var inst_43794 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43805__$1 = (function (){var statearr_43832 = state_43805;
(statearr_43832[(15)] = inst_43793);

return statearr_43832;
})();
if(cljs.core.truth_(inst_43794)){
var statearr_43833_43861 = state_43805__$1;
(statearr_43833_43861[(1)] = (21));

} else {
var statearr_43834_43862 = state_43805__$1;
(statearr_43834_43862[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (5))){
var inst_43749 = cljs.core.async.close_BANG_.call(null,out);
var state_43805__$1 = state_43805;
var statearr_43835_43863 = state_43805__$1;
(statearr_43835_43863[(2)] = inst_43749);

(statearr_43835_43863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (14))){
var inst_43771 = (state_43805[(7)]);
var inst_43773 = cljs.core.chunked_seq_QMARK_.call(null,inst_43771);
var state_43805__$1 = state_43805;
if(inst_43773){
var statearr_43836_43864 = state_43805__$1;
(statearr_43836_43864[(1)] = (17));

} else {
var statearr_43837_43865 = state_43805__$1;
(statearr_43837_43865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (16))){
var inst_43789 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43838_43866 = state_43805__$1;
(statearr_43838_43866[(2)] = inst_43789);

(statearr_43838_43866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (10))){
var inst_43760 = (state_43805[(8)]);
var inst_43758 = (state_43805[(12)]);
var inst_43765 = cljs.core._nth.call(null,inst_43758,inst_43760);
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43805__$1,(13),out,inst_43765);
} else {
if((state_val_43806 === (18))){
var inst_43771 = (state_43805[(7)]);
var inst_43780 = cljs.core.first.call(null,inst_43771);
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43805__$1,(20),out,inst_43780);
} else {
if((state_val_43806 === (8))){
var inst_43760 = (state_43805[(8)]);
var inst_43759 = (state_43805[(11)]);
var inst_43762 = (inst_43760 < inst_43759);
var inst_43763 = inst_43762;
var state_43805__$1 = state_43805;
if(cljs.core.truth_(inst_43763)){
var statearr_43839_43867 = state_43805__$1;
(statearr_43839_43867[(1)] = (10));

} else {
var statearr_43840_43868 = state_43805__$1;
(statearr_43840_43868[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____0 = (function (){
var statearr_43841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43841[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__);

(statearr_43841[(1)] = (1));

return statearr_43841;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____1 = (function (state_43805){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43842){if((e43842 instanceof Object)){
var ex__42086__auto__ = e43842;
var statearr_43843_43869 = state_43805;
(statearr_43843_43869[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43870 = state_43805;
state_43805 = G__43870;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__ = function(state_43805){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____1.call(this,state_43805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42083__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43844 = f__42178__auto__.call(null);
(statearr_43844[(6)] = c__42177__auto__);

return statearr_43844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));

return c__42177__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43872 = arguments.length;
switch (G__43872) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43875 = arguments.length;
switch (G__43875) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43878 = arguments.length;
switch (G__43878) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___43925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43902){
var state_val_43903 = (state_43902[(1)]);
if((state_val_43903 === (7))){
var inst_43897 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
var statearr_43904_43926 = state_43902__$1;
(statearr_43904_43926[(2)] = inst_43897);

(statearr_43904_43926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (1))){
var inst_43879 = null;
var state_43902__$1 = (function (){var statearr_43905 = state_43902;
(statearr_43905[(7)] = inst_43879);

return statearr_43905;
})();
var statearr_43906_43927 = state_43902__$1;
(statearr_43906_43927[(2)] = null);

(statearr_43906_43927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (4))){
var inst_43882 = (state_43902[(8)]);
var inst_43882__$1 = (state_43902[(2)]);
var inst_43883 = (inst_43882__$1 == null);
var inst_43884 = cljs.core.not.call(null,inst_43883);
var state_43902__$1 = (function (){var statearr_43907 = state_43902;
(statearr_43907[(8)] = inst_43882__$1);

return statearr_43907;
})();
if(inst_43884){
var statearr_43908_43928 = state_43902__$1;
(statearr_43908_43928[(1)] = (5));

} else {
var statearr_43909_43929 = state_43902__$1;
(statearr_43909_43929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (6))){
var state_43902__$1 = state_43902;
var statearr_43910_43930 = state_43902__$1;
(statearr_43910_43930[(2)] = null);

(statearr_43910_43930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (3))){
var inst_43899 = (state_43902[(2)]);
var inst_43900 = cljs.core.async.close_BANG_.call(null,out);
var state_43902__$1 = (function (){var statearr_43911 = state_43902;
(statearr_43911[(9)] = inst_43899);

return statearr_43911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43902__$1,inst_43900);
} else {
if((state_val_43903 === (2))){
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43902__$1,(4),ch);
} else {
if((state_val_43903 === (11))){
var inst_43882 = (state_43902[(8)]);
var inst_43891 = (state_43902[(2)]);
var inst_43879 = inst_43882;
var state_43902__$1 = (function (){var statearr_43912 = state_43902;
(statearr_43912[(10)] = inst_43891);

(statearr_43912[(7)] = inst_43879);

return statearr_43912;
})();
var statearr_43913_43931 = state_43902__$1;
(statearr_43913_43931[(2)] = null);

(statearr_43913_43931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (9))){
var inst_43882 = (state_43902[(8)]);
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43902__$1,(11),out,inst_43882);
} else {
if((state_val_43903 === (5))){
var inst_43879 = (state_43902[(7)]);
var inst_43882 = (state_43902[(8)]);
var inst_43886 = cljs.core._EQ_.call(null,inst_43882,inst_43879);
var state_43902__$1 = state_43902;
if(inst_43886){
var statearr_43915_43932 = state_43902__$1;
(statearr_43915_43932[(1)] = (8));

} else {
var statearr_43916_43933 = state_43902__$1;
(statearr_43916_43933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (10))){
var inst_43894 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
var statearr_43917_43934 = state_43902__$1;
(statearr_43917_43934[(2)] = inst_43894);

(statearr_43917_43934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (8))){
var inst_43879 = (state_43902[(7)]);
var tmp43914 = inst_43879;
var inst_43879__$1 = tmp43914;
var state_43902__$1 = (function (){var statearr_43918 = state_43902;
(statearr_43918[(7)] = inst_43879__$1);

return statearr_43918;
})();
var statearr_43919_43935 = state_43902__$1;
(statearr_43919_43935[(2)] = null);

(statearr_43919_43935[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_43920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43920[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_43920[(1)] = (1));

return statearr_43920;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43902){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e43921){if((e43921 instanceof Object)){
var ex__42086__auto__ = e43921;
var statearr_43922_43936 = state_43902;
(statearr_43922_43936[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43937 = state_43902;
state_43902 = G__43937;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_43923 = f__42178__auto__.call(null);
(statearr_43923[(6)] = c__42177__auto___43925);

return statearr_43923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43939 = arguments.length;
switch (G__43939) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___44005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_43977){
var state_val_43978 = (state_43977[(1)]);
if((state_val_43978 === (7))){
var inst_43973 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
var statearr_43979_44006 = state_43977__$1;
(statearr_43979_44006[(2)] = inst_43973);

(statearr_43979_44006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (1))){
var inst_43940 = (new Array(n));
var inst_43941 = inst_43940;
var inst_43942 = (0);
var state_43977__$1 = (function (){var statearr_43980 = state_43977;
(statearr_43980[(7)] = inst_43941);

(statearr_43980[(8)] = inst_43942);

return statearr_43980;
})();
var statearr_43981_44007 = state_43977__$1;
(statearr_43981_44007[(2)] = null);

(statearr_43981_44007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (4))){
var inst_43945 = (state_43977[(9)]);
var inst_43945__$1 = (state_43977[(2)]);
var inst_43946 = (inst_43945__$1 == null);
var inst_43947 = cljs.core.not.call(null,inst_43946);
var state_43977__$1 = (function (){var statearr_43982 = state_43977;
(statearr_43982[(9)] = inst_43945__$1);

return statearr_43982;
})();
if(inst_43947){
var statearr_43983_44008 = state_43977__$1;
(statearr_43983_44008[(1)] = (5));

} else {
var statearr_43984_44009 = state_43977__$1;
(statearr_43984_44009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (15))){
var inst_43967 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
var statearr_43985_44010 = state_43977__$1;
(statearr_43985_44010[(2)] = inst_43967);

(statearr_43985_44010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (13))){
var state_43977__$1 = state_43977;
var statearr_43986_44011 = state_43977__$1;
(statearr_43986_44011[(2)] = null);

(statearr_43986_44011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (6))){
var inst_43942 = (state_43977[(8)]);
var inst_43963 = (inst_43942 > (0));
var state_43977__$1 = state_43977;
if(cljs.core.truth_(inst_43963)){
var statearr_43987_44012 = state_43977__$1;
(statearr_43987_44012[(1)] = (12));

} else {
var statearr_43988_44013 = state_43977__$1;
(statearr_43988_44013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (3))){
var inst_43975 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43977__$1,inst_43975);
} else {
if((state_val_43978 === (12))){
var inst_43941 = (state_43977[(7)]);
var inst_43965 = cljs.core.vec.call(null,inst_43941);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43977__$1,(15),out,inst_43965);
} else {
if((state_val_43978 === (2))){
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43977__$1,(4),ch);
} else {
if((state_val_43978 === (11))){
var inst_43957 = (state_43977[(2)]);
var inst_43958 = (new Array(n));
var inst_43941 = inst_43958;
var inst_43942 = (0);
var state_43977__$1 = (function (){var statearr_43989 = state_43977;
(statearr_43989[(7)] = inst_43941);

(statearr_43989[(10)] = inst_43957);

(statearr_43989[(8)] = inst_43942);

return statearr_43989;
})();
var statearr_43990_44014 = state_43977__$1;
(statearr_43990_44014[(2)] = null);

(statearr_43990_44014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (9))){
var inst_43941 = (state_43977[(7)]);
var inst_43955 = cljs.core.vec.call(null,inst_43941);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43977__$1,(11),out,inst_43955);
} else {
if((state_val_43978 === (5))){
var inst_43941 = (state_43977[(7)]);
var inst_43942 = (state_43977[(8)]);
var inst_43950 = (state_43977[(11)]);
var inst_43945 = (state_43977[(9)]);
var inst_43949 = (inst_43941[inst_43942] = inst_43945);
var inst_43950__$1 = (inst_43942 + (1));
var inst_43951 = (inst_43950__$1 < n);
var state_43977__$1 = (function (){var statearr_43991 = state_43977;
(statearr_43991[(12)] = inst_43949);

(statearr_43991[(11)] = inst_43950__$1);

return statearr_43991;
})();
if(cljs.core.truth_(inst_43951)){
var statearr_43992_44015 = state_43977__$1;
(statearr_43992_44015[(1)] = (8));

} else {
var statearr_43993_44016 = state_43977__$1;
(statearr_43993_44016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (14))){
var inst_43970 = (state_43977[(2)]);
var inst_43971 = cljs.core.async.close_BANG_.call(null,out);
var state_43977__$1 = (function (){var statearr_43995 = state_43977;
(statearr_43995[(13)] = inst_43970);

return statearr_43995;
})();
var statearr_43996_44017 = state_43977__$1;
(statearr_43996_44017[(2)] = inst_43971);

(statearr_43996_44017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (10))){
var inst_43961 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
var statearr_43997_44018 = state_43977__$1;
(statearr_43997_44018[(2)] = inst_43961);

(statearr_43997_44018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (8))){
var inst_43941 = (state_43977[(7)]);
var inst_43950 = (state_43977[(11)]);
var tmp43994 = inst_43941;
var inst_43941__$1 = tmp43994;
var inst_43942 = inst_43950;
var state_43977__$1 = (function (){var statearr_43998 = state_43977;
(statearr_43998[(7)] = inst_43941__$1);

(statearr_43998[(8)] = inst_43942);

return statearr_43998;
})();
var statearr_43999_44019 = state_43977__$1;
(statearr_43999_44019[(2)] = null);

(statearr_43999_44019[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_44000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44000[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_44000[(1)] = (1));

return statearr_44000;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_43977){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_43977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e44001){if((e44001 instanceof Object)){
var ex__42086__auto__ = e44001;
var statearr_44002_44020 = state_43977;
(statearr_44002_44020[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44021 = state_43977;
state_43977 = G__44021;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_43977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_43977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_44003 = f__42178__auto__.call(null);
(statearr_44003[(6)] = c__42177__auto___44005);

return statearr_44003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44023 = arguments.length;
switch (G__44023) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42177__auto___44093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__42178__auto__ = (function (){var switch__42082__auto__ = (function (state_44065){
var state_val_44066 = (state_44065[(1)]);
if((state_val_44066 === (7))){
var inst_44061 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
var statearr_44067_44094 = state_44065__$1;
(statearr_44067_44094[(2)] = inst_44061);

(statearr_44067_44094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (1))){
var inst_44024 = [];
var inst_44025 = inst_44024;
var inst_44026 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44065__$1 = (function (){var statearr_44068 = state_44065;
(statearr_44068[(7)] = inst_44025);

(statearr_44068[(8)] = inst_44026);

return statearr_44068;
})();
var statearr_44069_44095 = state_44065__$1;
(statearr_44069_44095[(2)] = null);

(statearr_44069_44095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (4))){
var inst_44029 = (state_44065[(9)]);
var inst_44029__$1 = (state_44065[(2)]);
var inst_44030 = (inst_44029__$1 == null);
var inst_44031 = cljs.core.not.call(null,inst_44030);
var state_44065__$1 = (function (){var statearr_44070 = state_44065;
(statearr_44070[(9)] = inst_44029__$1);

return statearr_44070;
})();
if(inst_44031){
var statearr_44071_44096 = state_44065__$1;
(statearr_44071_44096[(1)] = (5));

} else {
var statearr_44072_44097 = state_44065__$1;
(statearr_44072_44097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (15))){
var inst_44055 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
var statearr_44073_44098 = state_44065__$1;
(statearr_44073_44098[(2)] = inst_44055);

(statearr_44073_44098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (13))){
var state_44065__$1 = state_44065;
var statearr_44074_44099 = state_44065__$1;
(statearr_44074_44099[(2)] = null);

(statearr_44074_44099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (6))){
var inst_44025 = (state_44065[(7)]);
var inst_44050 = inst_44025.length;
var inst_44051 = (inst_44050 > (0));
var state_44065__$1 = state_44065;
if(cljs.core.truth_(inst_44051)){
var statearr_44075_44100 = state_44065__$1;
(statearr_44075_44100[(1)] = (12));

} else {
var statearr_44076_44101 = state_44065__$1;
(statearr_44076_44101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (3))){
var inst_44063 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44065__$1,inst_44063);
} else {
if((state_val_44066 === (12))){
var inst_44025 = (state_44065[(7)]);
var inst_44053 = cljs.core.vec.call(null,inst_44025);
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44065__$1,(15),out,inst_44053);
} else {
if((state_val_44066 === (2))){
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44065__$1,(4),ch);
} else {
if((state_val_44066 === (11))){
var inst_44029 = (state_44065[(9)]);
var inst_44033 = (state_44065[(10)]);
var inst_44043 = (state_44065[(2)]);
var inst_44044 = [];
var inst_44045 = inst_44044.push(inst_44029);
var inst_44025 = inst_44044;
var inst_44026 = inst_44033;
var state_44065__$1 = (function (){var statearr_44077 = state_44065;
(statearr_44077[(7)] = inst_44025);

(statearr_44077[(8)] = inst_44026);

(statearr_44077[(11)] = inst_44045);

(statearr_44077[(12)] = inst_44043);

return statearr_44077;
})();
var statearr_44078_44102 = state_44065__$1;
(statearr_44078_44102[(2)] = null);

(statearr_44078_44102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (9))){
var inst_44025 = (state_44065[(7)]);
var inst_44041 = cljs.core.vec.call(null,inst_44025);
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44065__$1,(11),out,inst_44041);
} else {
if((state_val_44066 === (5))){
var inst_44029 = (state_44065[(9)]);
var inst_44026 = (state_44065[(8)]);
var inst_44033 = (state_44065[(10)]);
var inst_44033__$1 = f.call(null,inst_44029);
var inst_44034 = cljs.core._EQ_.call(null,inst_44033__$1,inst_44026);
var inst_44035 = cljs.core.keyword_identical_QMARK_.call(null,inst_44026,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44036 = ((inst_44034) || (inst_44035));
var state_44065__$1 = (function (){var statearr_44079 = state_44065;
(statearr_44079[(10)] = inst_44033__$1);

return statearr_44079;
})();
if(cljs.core.truth_(inst_44036)){
var statearr_44080_44103 = state_44065__$1;
(statearr_44080_44103[(1)] = (8));

} else {
var statearr_44081_44104 = state_44065__$1;
(statearr_44081_44104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (14))){
var inst_44058 = (state_44065[(2)]);
var inst_44059 = cljs.core.async.close_BANG_.call(null,out);
var state_44065__$1 = (function (){var statearr_44083 = state_44065;
(statearr_44083[(13)] = inst_44058);

return statearr_44083;
})();
var statearr_44084_44105 = state_44065__$1;
(statearr_44084_44105[(2)] = inst_44059);

(statearr_44084_44105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (10))){
var inst_44048 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
var statearr_44085_44106 = state_44065__$1;
(statearr_44085_44106[(2)] = inst_44048);

(statearr_44085_44106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44066 === (8))){
var inst_44025 = (state_44065[(7)]);
var inst_44029 = (state_44065[(9)]);
var inst_44033 = (state_44065[(10)]);
var inst_44038 = inst_44025.push(inst_44029);
var tmp44082 = inst_44025;
var inst_44025__$1 = tmp44082;
var inst_44026 = inst_44033;
var state_44065__$1 = (function (){var statearr_44086 = state_44065;
(statearr_44086[(7)] = inst_44025__$1);

(statearr_44086[(14)] = inst_44038);

(statearr_44086[(8)] = inst_44026);

return statearr_44086;
})();
var statearr_44087_44107 = state_44065__$1;
(statearr_44087_44107[(2)] = null);

(statearr_44087_44107[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42083__auto__ = null;
var cljs$core$async$state_machine__42083__auto____0 = (function (){
var statearr_44088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44088[(0)] = cljs$core$async$state_machine__42083__auto__);

(statearr_44088[(1)] = (1));

return statearr_44088;
});
var cljs$core$async$state_machine__42083__auto____1 = (function (state_44065){
while(true){
var ret_value__42084__auto__ = (function (){try{while(true){
var result__42085__auto__ = switch__42082__auto__.call(null,state_44065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42085__auto__;
}
break;
}
}catch (e44089){if((e44089 instanceof Object)){
var ex__42086__auto__ = e44089;
var statearr_44090_44108 = state_44065;
(statearr_44090_44108[(5)] = ex__42086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44109 = state_44065;
state_44065 = G__44109;
continue;
} else {
return ret_value__42084__auto__;
}
break;
}
});
cljs$core$async$state_machine__42083__auto__ = function(state_44065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42083__auto____1.call(this,state_44065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42083__auto____0;
cljs$core$async$state_machine__42083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42083__auto____1;
return cljs$core$async$state_machine__42083__auto__;
})()
})();
var state__42179__auto__ = (function (){var statearr_44091 = f__42178__auto__.call(null);
(statearr_44091[(6)] = c__42177__auto___44093);

return statearr_44091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42179__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1637933617404
