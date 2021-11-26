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
var G__23753 = arguments.length;
switch (G__23753) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23754 = (function (f,blockable,meta23755){
this.f = f;
this.blockable = blockable;
this.meta23755 = meta23755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23756,meta23755__$1){
var self__ = this;
var _23756__$1 = this;
return (new cljs.core.async.t_cljs$core$async23754(self__.f,self__.blockable,meta23755__$1));
}));

(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23756){
var self__ = this;
var _23756__$1 = this;
return self__.meta23755;
}));

(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23755","meta23755",-94681613,null)], null);
}));

(cljs.core.async.t_cljs$core$async23754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23754");

(cljs.core.async.t_cljs$core$async23754.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23754.
 */
cljs.core.async.__GT_t_cljs$core$async23754 = (function cljs$core$async$__GT_t_cljs$core$async23754(f__$1,blockable__$1,meta23755){
return (new cljs.core.async.t_cljs$core$async23754(f__$1,blockable__$1,meta23755));
});

}

return (new cljs.core.async.t_cljs$core$async23754(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23760 = arguments.length;
switch (G__23760) {
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
var G__23763 = arguments.length;
switch (G__23763) {
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
var G__23766 = arguments.length;
switch (G__23766) {
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
var val_23768 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23768);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23768);
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
var G__23770 = arguments.length;
switch (G__23770) {
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
var n__4613__auto___23772 = n;
var x_23773 = (0);
while(true){
if((x_23773 < n__4613__auto___23772)){
(a[x_23773] = x_23773);

var G__23774 = (x_23773 + (1));
x_23773 = G__23774;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23775 = (function (flag,meta23776){
this.flag = flag;
this.meta23776 = meta23776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23777,meta23776__$1){
var self__ = this;
var _23777__$1 = this;
return (new cljs.core.async.t_cljs$core$async23775(self__.flag,meta23776__$1));
}));

(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23777){
var self__ = this;
var _23777__$1 = this;
return self__.meta23776;
}));

(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23776","meta23776",-1928484357,null)], null);
}));

(cljs.core.async.t_cljs$core$async23775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23775");

(cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23775.
 */
cljs.core.async.__GT_t_cljs$core$async23775 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23775(flag__$1,meta23776){
return (new cljs.core.async.t_cljs$core$async23775(flag__$1,meta23776));
});

}

return (new cljs.core.async.t_cljs$core$async23775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23778 = (function (flag,cb,meta23779){
this.flag = flag;
this.cb = cb;
this.meta23779 = meta23779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23780,meta23779__$1){
var self__ = this;
var _23780__$1 = this;
return (new cljs.core.async.t_cljs$core$async23778(self__.flag,self__.cb,meta23779__$1));
}));

(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23780){
var self__ = this;
var _23780__$1 = this;
return self__.meta23779;
}));

(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23779","meta23779",1600392058,null)], null);
}));

(cljs.core.async.t_cljs$core$async23778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23778");

(cljs.core.async.t_cljs$core$async23778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23778.
 */
cljs.core.async.__GT_t_cljs$core$async23778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23778(flag__$1,cb__$1,meta23779){
return (new cljs.core.async.t_cljs$core$async23778(flag__$1,cb__$1,meta23779));
});

}

return (new cljs.core.async.t_cljs$core$async23778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23782_SHARP_,port], null));
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
var G__23783 = (i + (1));
i = G__23783;
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
var len__4736__auto___23789 = arguments.length;
var i__4737__auto___23790 = (0);
while(true){
if((i__4737__auto___23790 < len__4736__auto___23789)){
args__4742__auto__.push((arguments[i__4737__auto___23790]));

var G__23791 = (i__4737__auto___23790 + (1));
i__4737__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23786){
var map__23787 = p__23786;
var map__23787__$1 = (((((!((map__23787 == null))))?(((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var opts = map__23787__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23784){
var G__23785 = cljs.core.first.call(null,seq23784);
var seq23784__$1 = cljs.core.next.call(null,seq23784);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23785,seq23784__$1);
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
var G__23793 = arguments.length;
switch (G__23793) {
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
var c__23693__auto___23839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_23817){
var state_val_23818 = (state_23817[(1)]);
if((state_val_23818 === (7))){
var inst_23813 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23819_23840 = state_23817__$1;
(statearr_23819_23840[(2)] = inst_23813);

(statearr_23819_23840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (1))){
var state_23817__$1 = state_23817;
var statearr_23820_23841 = state_23817__$1;
(statearr_23820_23841[(2)] = null);

(statearr_23820_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (4))){
var inst_23796 = (state_23817[(7)]);
var inst_23796__$1 = (state_23817[(2)]);
var inst_23797 = (inst_23796__$1 == null);
var state_23817__$1 = (function (){var statearr_23821 = state_23817;
(statearr_23821[(7)] = inst_23796__$1);

return statearr_23821;
})();
if(cljs.core.truth_(inst_23797)){
var statearr_23822_23842 = state_23817__$1;
(statearr_23822_23842[(1)] = (5));

} else {
var statearr_23823_23843 = state_23817__$1;
(statearr_23823_23843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (13))){
var state_23817__$1 = state_23817;
var statearr_23824_23844 = state_23817__$1;
(statearr_23824_23844[(2)] = null);

(statearr_23824_23844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (6))){
var inst_23796 = (state_23817[(7)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23817__$1,(11),to,inst_23796);
} else {
if((state_val_23818 === (3))){
var inst_23815 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23817__$1,inst_23815);
} else {
if((state_val_23818 === (12))){
var state_23817__$1 = state_23817;
var statearr_23825_23845 = state_23817__$1;
(statearr_23825_23845[(2)] = null);

(statearr_23825_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (2))){
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(4),from);
} else {
if((state_val_23818 === (11))){
var inst_23806 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23806)){
var statearr_23826_23846 = state_23817__$1;
(statearr_23826_23846[(1)] = (12));

} else {
var statearr_23827_23847 = state_23817__$1;
(statearr_23827_23847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (9))){
var state_23817__$1 = state_23817;
var statearr_23828_23848 = state_23817__$1;
(statearr_23828_23848[(2)] = null);

(statearr_23828_23848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (5))){
var state_23817__$1 = state_23817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23829_23849 = state_23817__$1;
(statearr_23829_23849[(1)] = (8));

} else {
var statearr_23830_23850 = state_23817__$1;
(statearr_23830_23850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (14))){
var inst_23811 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23831_23851 = state_23817__$1;
(statearr_23831_23851[(2)] = inst_23811);

(statearr_23831_23851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (10))){
var inst_23803 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23832_23852 = state_23817__$1;
(statearr_23832_23852[(2)] = inst_23803);

(statearr_23832_23852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (8))){
var inst_23800 = cljs.core.async.close_BANG_.call(null,to);
var state_23817__$1 = state_23817;
var statearr_23833_23853 = state_23817__$1;
(statearr_23833_23853[(2)] = inst_23800);

(statearr_23833_23853[(1)] = (10));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_23834 = [null,null,null,null,null,null,null,null];
(statearr_23834[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_23834[(1)] = (1));

return statearr_23834;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_23817){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e23835){if((e23835 instanceof Object)){
var ex__23602__auto__ = e23835;
var statearr_23836_23854 = state_23817;
(statearr_23836_23854[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23817;
state_23817 = G__23855;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_23837 = f__23694__auto__.call(null);
(statearr_23837[(6)] = c__23693__auto___23839);

return statearr_23837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var process = (function (p__23856){
var vec__23857 = p__23856;
var v = cljs.core.nth.call(null,vec__23857,(0),null);
var p = cljs.core.nth.call(null,vec__23857,(1),null);
var job = vec__23857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23693__auto___24028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_23864){
var state_val_23865 = (state_23864[(1)]);
if((state_val_23865 === (1))){
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23864__$1,(2),res,v);
} else {
if((state_val_23865 === (2))){
var inst_23861 = (state_23864[(2)]);
var inst_23862 = cljs.core.async.close_BANG_.call(null,res);
var state_23864__$1 = (function (){var statearr_23866 = state_23864;
(statearr_23866[(7)] = inst_23861);

return statearr_23866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23864__$1,inst_23862);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1 = (function (state_23864){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__23602__auto__ = e23868;
var statearr_23869_24029 = state_23864;
(statearr_23869_24029[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24030 = state_23864;
state_23864 = G__24030;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = function(state_23864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1.call(this,state_23864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_23870 = f__23694__auto__.call(null);
(statearr_23870[(6)] = c__23693__auto___24028);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23871){
var vec__23872 = p__23871;
var v = cljs.core.nth.call(null,vec__23872,(0),null);
var p = cljs.core.nth.call(null,vec__23872,(1),null);
var job = vec__23872;
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
var n__4613__auto___24031 = n;
var __24032 = (0);
while(true){
if((__24032 < n__4613__auto___24031)){
var G__23875_24033 = type;
var G__23875_24034__$1 = (((G__23875_24033 instanceof cljs.core.Keyword))?G__23875_24033.fqn:null);
switch (G__23875_24034__$1) {
case "compute":
var c__23693__auto___24036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = ((function (__24032,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function (state_23888){
var state_val_23889 = (state_23888[(1)]);
if((state_val_23889 === (1))){
var state_23888__$1 = state_23888;
var statearr_23890_24037 = state_23888__$1;
(statearr_23890_24037[(2)] = null);

(statearr_23890_24037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (2))){
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23888__$1,(4),jobs);
} else {
if((state_val_23889 === (3))){
var inst_23886 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23888__$1,inst_23886);
} else {
if((state_val_23889 === (4))){
var inst_23878 = (state_23888[(2)]);
var inst_23879 = process.call(null,inst_23878);
var state_23888__$1 = state_23888;
if(cljs.core.truth_(inst_23879)){
var statearr_23891_24038 = state_23888__$1;
(statearr_23891_24038[(1)] = (5));

} else {
var statearr_23892_24039 = state_23888__$1;
(statearr_23892_24039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (5))){
var state_23888__$1 = state_23888;
var statearr_23893_24040 = state_23888__$1;
(statearr_23893_24040[(2)] = null);

(statearr_23893_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (6))){
var state_23888__$1 = state_23888;
var statearr_23894_24041 = state_23888__$1;
(statearr_23894_24041[(2)] = null);

(statearr_23894_24041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (7))){
var inst_23884 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
var statearr_23895_24042 = state_23888__$1;
(statearr_23895_24042[(2)] = inst_23884);

(statearr_23895_24042[(1)] = (3));


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
});})(__24032,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
;
return ((function (__24032,switch__23598__auto__,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_23896 = [null,null,null,null,null,null,null];
(statearr_23896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__);

(statearr_23896[(1)] = (1));

return statearr_23896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1 = (function (state_23888){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e23897){if((e23897 instanceof Object)){
var ex__23602__auto__ = e23897;
var statearr_23898_24043 = state_23888;
(statearr_23898_24043[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24044 = state_23888;
state_23888 = G__24044;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = function(state_23888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1.call(this,state_23888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__;
})()
;})(__24032,switch__23598__auto__,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
})();
var state__23695__auto__ = (function (){var statearr_23899 = f__23694__auto__.call(null);
(statearr_23899[(6)] = c__23693__auto___24036);

return statearr_23899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
});})(__24032,c__23693__auto___24036,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
);


break;
case "async":
var c__23693__auto___24045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = ((function (__24032,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function (state_23912){
var state_val_23913 = (state_23912[(1)]);
if((state_val_23913 === (1))){
var state_23912__$1 = state_23912;
var statearr_23914_24046 = state_23912__$1;
(statearr_23914_24046[(2)] = null);

(statearr_23914_24046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (2))){
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23912__$1,(4),jobs);
} else {
if((state_val_23913 === (3))){
var inst_23910 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23912__$1,inst_23910);
} else {
if((state_val_23913 === (4))){
var inst_23902 = (state_23912[(2)]);
var inst_23903 = async.call(null,inst_23902);
var state_23912__$1 = state_23912;
if(cljs.core.truth_(inst_23903)){
var statearr_23915_24047 = state_23912__$1;
(statearr_23915_24047[(1)] = (5));

} else {
var statearr_23916_24048 = state_23912__$1;
(statearr_23916_24048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (5))){
var state_23912__$1 = state_23912;
var statearr_23917_24049 = state_23912__$1;
(statearr_23917_24049[(2)] = null);

(statearr_23917_24049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (6))){
var state_23912__$1 = state_23912;
var statearr_23918_24050 = state_23912__$1;
(statearr_23918_24050[(2)] = null);

(statearr_23918_24050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (7))){
var inst_23908 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
var statearr_23919_24051 = state_23912__$1;
(statearr_23919_24051[(2)] = inst_23908);

(statearr_23919_24051[(1)] = (3));


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
});})(__24032,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
;
return ((function (__24032,switch__23598__auto__,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_23920 = [null,null,null,null,null,null,null];
(statearr_23920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__);

(statearr_23920[(1)] = (1));

return statearr_23920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1 = (function (state_23912){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e23921){if((e23921 instanceof Object)){
var ex__23602__auto__ = e23921;
var statearr_23922_24052 = state_23912;
(statearr_23922_24052[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24053 = state_23912;
state_23912 = G__24053;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = function(state_23912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1.call(this,state_23912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__;
})()
;})(__24032,switch__23598__auto__,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
})();
var state__23695__auto__ = (function (){var statearr_23923 = f__23694__auto__.call(null);
(statearr_23923[(6)] = c__23693__auto___24045);

return statearr_23923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
});})(__24032,c__23693__auto___24045,G__23875_24033,G__23875_24034__$1,n__4613__auto___24031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23875_24034__$1)].join('')));

}

var G__24054 = (__24032 + (1));
__24032 = G__24054;
continue;
} else {
}
break;
}

var c__23693__auto___24055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_23945){
var state_val_23946 = (state_23945[(1)]);
if((state_val_23946 === (7))){
var inst_23941 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
var statearr_23947_24056 = state_23945__$1;
(statearr_23947_24056[(2)] = inst_23941);

(statearr_23947_24056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (1))){
var state_23945__$1 = state_23945;
var statearr_23948_24057 = state_23945__$1;
(statearr_23948_24057[(2)] = null);

(statearr_23948_24057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (4))){
var inst_23926 = (state_23945[(7)]);
var inst_23926__$1 = (state_23945[(2)]);
var inst_23927 = (inst_23926__$1 == null);
var state_23945__$1 = (function (){var statearr_23949 = state_23945;
(statearr_23949[(7)] = inst_23926__$1);

return statearr_23949;
})();
if(cljs.core.truth_(inst_23927)){
var statearr_23950_24058 = state_23945__$1;
(statearr_23950_24058[(1)] = (5));

} else {
var statearr_23951_24059 = state_23945__$1;
(statearr_23951_24059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (6))){
var inst_23926 = (state_23945[(7)]);
var inst_23931 = (state_23945[(8)]);
var inst_23931__$1 = cljs.core.async.chan.call(null,(1));
var inst_23932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23933 = [inst_23926,inst_23931__$1];
var inst_23934 = (new cljs.core.PersistentVector(null,2,(5),inst_23932,inst_23933,null));
var state_23945__$1 = (function (){var statearr_23952 = state_23945;
(statearr_23952[(8)] = inst_23931__$1);

return statearr_23952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23945__$1,(8),jobs,inst_23934);
} else {
if((state_val_23946 === (3))){
var inst_23943 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23945__$1,inst_23943);
} else {
if((state_val_23946 === (2))){
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23945__$1,(4),from);
} else {
if((state_val_23946 === (9))){
var inst_23938 = (state_23945[(2)]);
var state_23945__$1 = (function (){var statearr_23953 = state_23945;
(statearr_23953[(9)] = inst_23938);

return statearr_23953;
})();
var statearr_23954_24060 = state_23945__$1;
(statearr_23954_24060[(2)] = null);

(statearr_23954_24060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (5))){
var inst_23929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23945__$1 = state_23945;
var statearr_23955_24061 = state_23945__$1;
(statearr_23955_24061[(2)] = inst_23929);

(statearr_23955_24061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (8))){
var inst_23931 = (state_23945[(8)]);
var inst_23936 = (state_23945[(2)]);
var state_23945__$1 = (function (){var statearr_23956 = state_23945;
(statearr_23956[(10)] = inst_23936);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23945__$1,(9),results,inst_23931);
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
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_23957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__);

(statearr_23957[(1)] = (1));

return statearr_23957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1 = (function (state_23945){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e23958){if((e23958 instanceof Object)){
var ex__23602__auto__ = e23958;
var statearr_23959_24062 = state_23945;
(statearr_23959_24062[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_23945;
state_23945 = G__24063;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = function(state_23945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1.call(this,state_23945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_23960 = f__23694__auto__.call(null);
(statearr_23960[(6)] = c__23693__auto___24055);

return statearr_23960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


var c__23693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_23998){
var state_val_23999 = (state_23998[(1)]);
if((state_val_23999 === (7))){
var inst_23994 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24000_24064 = state_23998__$1;
(statearr_24000_24064[(2)] = inst_23994);

(statearr_24000_24064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (20))){
var state_23998__$1 = state_23998;
var statearr_24001_24065 = state_23998__$1;
(statearr_24001_24065[(2)] = null);

(statearr_24001_24065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (1))){
var state_23998__$1 = state_23998;
var statearr_24002_24066 = state_23998__$1;
(statearr_24002_24066[(2)] = null);

(statearr_24002_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (4))){
var inst_23963 = (state_23998[(7)]);
var inst_23963__$1 = (state_23998[(2)]);
var inst_23964 = (inst_23963__$1 == null);
var state_23998__$1 = (function (){var statearr_24003 = state_23998;
(statearr_24003[(7)] = inst_23963__$1);

return statearr_24003;
})();
if(cljs.core.truth_(inst_23964)){
var statearr_24004_24067 = state_23998__$1;
(statearr_24004_24067[(1)] = (5));

} else {
var statearr_24005_24068 = state_23998__$1;
(statearr_24005_24068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (15))){
var inst_23976 = (state_23998[(8)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23998__$1,(18),to,inst_23976);
} else {
if((state_val_23999 === (21))){
var inst_23989 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24006_24069 = state_23998__$1;
(statearr_24006_24069[(2)] = inst_23989);

(statearr_24006_24069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (13))){
var inst_23991 = (state_23998[(2)]);
var state_23998__$1 = (function (){var statearr_24007 = state_23998;
(statearr_24007[(9)] = inst_23991);

return statearr_24007;
})();
var statearr_24008_24070 = state_23998__$1;
(statearr_24008_24070[(2)] = null);

(statearr_24008_24070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (6))){
var inst_23963 = (state_23998[(7)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(11),inst_23963);
} else {
if((state_val_23999 === (17))){
var inst_23984 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23984)){
var statearr_24009_24071 = state_23998__$1;
(statearr_24009_24071[(1)] = (19));

} else {
var statearr_24010_24072 = state_23998__$1;
(statearr_24010_24072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (3))){
var inst_23996 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23998__$1,inst_23996);
} else {
if((state_val_23999 === (12))){
var inst_23973 = (state_23998[(10)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(14),inst_23973);
} else {
if((state_val_23999 === (2))){
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(4),results);
} else {
if((state_val_23999 === (19))){
var state_23998__$1 = state_23998;
var statearr_24011_24073 = state_23998__$1;
(statearr_24011_24073[(2)] = null);

(statearr_24011_24073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (11))){
var inst_23973 = (state_23998[(2)]);
var state_23998__$1 = (function (){var statearr_24012 = state_23998;
(statearr_24012[(10)] = inst_23973);

return statearr_24012;
})();
var statearr_24013_24074 = state_23998__$1;
(statearr_24013_24074[(2)] = null);

(statearr_24013_24074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (9))){
var state_23998__$1 = state_23998;
var statearr_24014_24075 = state_23998__$1;
(statearr_24014_24075[(2)] = null);

(statearr_24014_24075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (5))){
var state_23998__$1 = state_23998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24015_24076 = state_23998__$1;
(statearr_24015_24076[(1)] = (8));

} else {
var statearr_24016_24077 = state_23998__$1;
(statearr_24016_24077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (14))){
var inst_23976 = (state_23998[(8)]);
var inst_23976__$1 = (state_23998[(2)]);
var inst_23977 = (inst_23976__$1 == null);
var inst_23978 = cljs.core.not.call(null,inst_23977);
var state_23998__$1 = (function (){var statearr_24017 = state_23998;
(statearr_24017[(8)] = inst_23976__$1);

return statearr_24017;
})();
if(inst_23978){
var statearr_24018_24078 = state_23998__$1;
(statearr_24018_24078[(1)] = (15));

} else {
var statearr_24019_24079 = state_23998__$1;
(statearr_24019_24079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (16))){
var state_23998__$1 = state_23998;
var statearr_24020_24080 = state_23998__$1;
(statearr_24020_24080[(2)] = false);

(statearr_24020_24080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (10))){
var inst_23970 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24021_24081 = state_23998__$1;
(statearr_24021_24081[(2)] = inst_23970);

(statearr_24021_24081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (18))){
var inst_23981 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24022_24082 = state_23998__$1;
(statearr_24022_24082[(2)] = inst_23981);

(statearr_24022_24082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (8))){
var inst_23967 = cljs.core.async.close_BANG_.call(null,to);
var state_23998__$1 = state_23998;
var statearr_24023_24083 = state_23998__$1;
(statearr_24023_24083[(2)] = inst_23967);

(statearr_24023_24083[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_24024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__);

(statearr_24024[(1)] = (1));

return statearr_24024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1 = (function (state_23998){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_23998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object)){
var ex__23602__auto__ = e24025;
var statearr_24026_24084 = state_23998;
(statearr_24026_24084[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24085 = state_23998;
state_23998 = G__24085;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__ = function(state_23998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1.call(this,state_23998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24027 = f__23694__auto__.call(null);
(statearr_24027[(6)] = c__23693__auto__);

return statearr_24027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));

return c__23693__auto__;
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
var G__24087 = arguments.length;
switch (G__24087) {
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
var G__24090 = arguments.length;
switch (G__24090) {
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
var G__24093 = arguments.length;
switch (G__24093) {
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
var c__23693__auto___24142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24119){
var state_val_24120 = (state_24119[(1)]);
if((state_val_24120 === (7))){
var inst_24115 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24121_24143 = state_24119__$1;
(statearr_24121_24143[(2)] = inst_24115);

(statearr_24121_24143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (1))){
var state_24119__$1 = state_24119;
var statearr_24122_24144 = state_24119__$1;
(statearr_24122_24144[(2)] = null);

(statearr_24122_24144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (4))){
var inst_24096 = (state_24119[(7)]);
var inst_24096__$1 = (state_24119[(2)]);
var inst_24097 = (inst_24096__$1 == null);
var state_24119__$1 = (function (){var statearr_24123 = state_24119;
(statearr_24123[(7)] = inst_24096__$1);

return statearr_24123;
})();
if(cljs.core.truth_(inst_24097)){
var statearr_24124_24145 = state_24119__$1;
(statearr_24124_24145[(1)] = (5));

} else {
var statearr_24125_24146 = state_24119__$1;
(statearr_24125_24146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (13))){
var state_24119__$1 = state_24119;
var statearr_24126_24147 = state_24119__$1;
(statearr_24126_24147[(2)] = null);

(statearr_24126_24147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (6))){
var inst_24096 = (state_24119[(7)]);
var inst_24102 = p.call(null,inst_24096);
var state_24119__$1 = state_24119;
if(cljs.core.truth_(inst_24102)){
var statearr_24127_24148 = state_24119__$1;
(statearr_24127_24148[(1)] = (9));

} else {
var statearr_24128_24149 = state_24119__$1;
(statearr_24128_24149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (3))){
var inst_24117 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24119__$1,inst_24117);
} else {
if((state_val_24120 === (12))){
var state_24119__$1 = state_24119;
var statearr_24129_24150 = state_24119__$1;
(statearr_24129_24150[(2)] = null);

(statearr_24129_24150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (2))){
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(4),ch);
} else {
if((state_val_24120 === (11))){
var inst_24096 = (state_24119[(7)]);
var inst_24106 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24119__$1,(8),inst_24106,inst_24096);
} else {
if((state_val_24120 === (9))){
var state_24119__$1 = state_24119;
var statearr_24130_24151 = state_24119__$1;
(statearr_24130_24151[(2)] = tc);

(statearr_24130_24151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (5))){
var inst_24099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24100 = cljs.core.async.close_BANG_.call(null,fc);
var state_24119__$1 = (function (){var statearr_24131 = state_24119;
(statearr_24131[(8)] = inst_24099);

return statearr_24131;
})();
var statearr_24132_24152 = state_24119__$1;
(statearr_24132_24152[(2)] = inst_24100);

(statearr_24132_24152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (14))){
var inst_24113 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24133_24153 = state_24119__$1;
(statearr_24133_24153[(2)] = inst_24113);

(statearr_24133_24153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (10))){
var state_24119__$1 = state_24119;
var statearr_24134_24154 = state_24119__$1;
(statearr_24134_24154[(2)] = fc);

(statearr_24134_24154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (8))){
var inst_24108 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
if(cljs.core.truth_(inst_24108)){
var statearr_24135_24155 = state_24119__$1;
(statearr_24135_24155[(1)] = (12));

} else {
var statearr_24136_24156 = state_24119__$1;
(statearr_24136_24156[(1)] = (13));

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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_24137 = [null,null,null,null,null,null,null,null,null];
(statearr_24137[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_24137[(1)] = (1));

return statearr_24137;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_24119){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24138){if((e24138 instanceof Object)){
var ex__23602__auto__ = e24138;
var statearr_24139_24157 = state_24119;
(statearr_24139_24157[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24158 = state_24119;
state_24119 = G__24158;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_24119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_24119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24140 = f__23694__auto__.call(null);
(statearr_24140[(6)] = c__23693__auto___24142);

return statearr_24140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var c__23693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24179){
var state_val_24180 = (state_24179[(1)]);
if((state_val_24180 === (7))){
var inst_24175 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
var statearr_24181_24199 = state_24179__$1;
(statearr_24181_24199[(2)] = inst_24175);

(statearr_24181_24199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (1))){
var inst_24159 = init;
var state_24179__$1 = (function (){var statearr_24182 = state_24179;
(statearr_24182[(7)] = inst_24159);

return statearr_24182;
})();
var statearr_24183_24200 = state_24179__$1;
(statearr_24183_24200[(2)] = null);

(statearr_24183_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (4))){
var inst_24162 = (state_24179[(8)]);
var inst_24162__$1 = (state_24179[(2)]);
var inst_24163 = (inst_24162__$1 == null);
var state_24179__$1 = (function (){var statearr_24184 = state_24179;
(statearr_24184[(8)] = inst_24162__$1);

return statearr_24184;
})();
if(cljs.core.truth_(inst_24163)){
var statearr_24185_24201 = state_24179__$1;
(statearr_24185_24201[(1)] = (5));

} else {
var statearr_24186_24202 = state_24179__$1;
(statearr_24186_24202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (6))){
var inst_24162 = (state_24179[(8)]);
var inst_24159 = (state_24179[(7)]);
var inst_24166 = (state_24179[(9)]);
var inst_24166__$1 = f.call(null,inst_24159,inst_24162);
var inst_24167 = cljs.core.reduced_QMARK_.call(null,inst_24166__$1);
var state_24179__$1 = (function (){var statearr_24187 = state_24179;
(statearr_24187[(9)] = inst_24166__$1);

return statearr_24187;
})();
if(inst_24167){
var statearr_24188_24203 = state_24179__$1;
(statearr_24188_24203[(1)] = (8));

} else {
var statearr_24189_24204 = state_24179__$1;
(statearr_24189_24204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (3))){
var inst_24177 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24179__$1,inst_24177);
} else {
if((state_val_24180 === (2))){
var state_24179__$1 = state_24179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24179__$1,(4),ch);
} else {
if((state_val_24180 === (9))){
var inst_24166 = (state_24179[(9)]);
var inst_24159 = inst_24166;
var state_24179__$1 = (function (){var statearr_24190 = state_24179;
(statearr_24190[(7)] = inst_24159);

return statearr_24190;
})();
var statearr_24191_24205 = state_24179__$1;
(statearr_24191_24205[(2)] = null);

(statearr_24191_24205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (5))){
var inst_24159 = (state_24179[(7)]);
var state_24179__$1 = state_24179;
var statearr_24192_24206 = state_24179__$1;
(statearr_24192_24206[(2)] = inst_24159);

(statearr_24192_24206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (10))){
var inst_24173 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
var statearr_24193_24207 = state_24179__$1;
(statearr_24193_24207[(2)] = inst_24173);

(statearr_24193_24207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (8))){
var inst_24166 = (state_24179[(9)]);
var inst_24169 = cljs.core.deref.call(null,inst_24166);
var state_24179__$1 = state_24179;
var statearr_24194_24208 = state_24179__$1;
(statearr_24194_24208[(2)] = inst_24169);

(statearr_24194_24208[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__23599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23599__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$reduce_$_state_machine__23599__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$reduce_$_state_machine__23599__auto____1 = (function (state_24179){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__23602__auto__ = e24196;
var statearr_24197_24209 = state_24179;
(statearr_24197_24209[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24210 = state_24179;
state_24179 = G__24210;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23599__auto__ = function(state_24179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23599__auto____1.call(this,state_24179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23599__auto____0;
cljs$core$async$reduce_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23599__auto____1;
return cljs$core$async$reduce_$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24198 = f__23694__auto__.call(null);
(statearr_24198[(6)] = c__23693__auto__);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));

return c__23693__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24216){
var state_val_24217 = (state_24216[(1)]);
if((state_val_24217 === (1))){
var inst_24211 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24216__$1,(2),inst_24211);
} else {
if((state_val_24217 === (2))){
var inst_24213 = (state_24216[(2)]);
var inst_24214 = f__$1.call(null,inst_24213);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24216__$1,inst_24214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23599__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23599__auto____0 = (function (){
var statearr_24218 = [null,null,null,null,null,null,null];
(statearr_24218[(0)] = cljs$core$async$transduce_$_state_machine__23599__auto__);

(statearr_24218[(1)] = (1));

return statearr_24218;
});
var cljs$core$async$transduce_$_state_machine__23599__auto____1 = (function (state_24216){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24219){if((e24219 instanceof Object)){
var ex__23602__auto__ = e24219;
var statearr_24220_24222 = state_24216;
(statearr_24220_24222[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24223 = state_24216;
state_24216 = G__24223;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23599__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23599__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23599__auto____0;
cljs$core$async$transduce_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23599__auto____1;
return cljs$core$async$transduce_$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24221 = f__23694__auto__.call(null);
(statearr_24221[(6)] = c__23693__auto__);

return statearr_24221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));

return c__23693__auto__;
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
var G__24225 = arguments.length;
switch (G__24225) {
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
var c__23693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24250){
var state_val_24251 = (state_24250[(1)]);
if((state_val_24251 === (7))){
var inst_24232 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24252_24273 = state_24250__$1;
(statearr_24252_24273[(2)] = inst_24232);

(statearr_24252_24273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (1))){
var inst_24226 = cljs.core.seq.call(null,coll);
var inst_24227 = inst_24226;
var state_24250__$1 = (function (){var statearr_24253 = state_24250;
(statearr_24253[(7)] = inst_24227);

return statearr_24253;
})();
var statearr_24254_24274 = state_24250__$1;
(statearr_24254_24274[(2)] = null);

(statearr_24254_24274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (4))){
var inst_24227 = (state_24250[(7)]);
var inst_24230 = cljs.core.first.call(null,inst_24227);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24250__$1,(7),ch,inst_24230);
} else {
if((state_val_24251 === (13))){
var inst_24244 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24255_24275 = state_24250__$1;
(statearr_24255_24275[(2)] = inst_24244);

(statearr_24255_24275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (6))){
var inst_24235 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24235)){
var statearr_24256_24276 = state_24250__$1;
(statearr_24256_24276[(1)] = (8));

} else {
var statearr_24257_24277 = state_24250__$1;
(statearr_24257_24277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (3))){
var inst_24248 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24250__$1,inst_24248);
} else {
if((state_val_24251 === (12))){
var state_24250__$1 = state_24250;
var statearr_24258_24278 = state_24250__$1;
(statearr_24258_24278[(2)] = null);

(statearr_24258_24278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (2))){
var inst_24227 = (state_24250[(7)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24227)){
var statearr_24259_24279 = state_24250__$1;
(statearr_24259_24279[(1)] = (4));

} else {
var statearr_24260_24280 = state_24250__$1;
(statearr_24260_24280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (11))){
var inst_24241 = cljs.core.async.close_BANG_.call(null,ch);
var state_24250__$1 = state_24250;
var statearr_24261_24281 = state_24250__$1;
(statearr_24261_24281[(2)] = inst_24241);

(statearr_24261_24281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (9))){
var state_24250__$1 = state_24250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24262_24282 = state_24250__$1;
(statearr_24262_24282[(1)] = (11));

} else {
var statearr_24263_24283 = state_24250__$1;
(statearr_24263_24283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (5))){
var inst_24227 = (state_24250[(7)]);
var state_24250__$1 = state_24250;
var statearr_24264_24284 = state_24250__$1;
(statearr_24264_24284[(2)] = inst_24227);

(statearr_24264_24284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (10))){
var inst_24246 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24265_24285 = state_24250__$1;
(statearr_24265_24285[(2)] = inst_24246);

(statearr_24265_24285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (8))){
var inst_24227 = (state_24250[(7)]);
var inst_24237 = cljs.core.next.call(null,inst_24227);
var inst_24227__$1 = inst_24237;
var state_24250__$1 = (function (){var statearr_24266 = state_24250;
(statearr_24266[(7)] = inst_24227__$1);

return statearr_24266;
})();
var statearr_24267_24286 = state_24250__$1;
(statearr_24267_24286[(2)] = null);

(statearr_24267_24286[(1)] = (2));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_24268 = [null,null,null,null,null,null,null,null];
(statearr_24268[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_24268[(1)] = (1));

return statearr_24268;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_24250){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24269){if((e24269 instanceof Object)){
var ex__23602__auto__ = e24269;
var statearr_24270_24287 = state_24250;
(statearr_24270_24287[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24288 = state_24250;
state_24250 = G__24288;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_24250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_24250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24271 = f__23694__auto__.call(null);
(statearr_24271[(6)] = c__23693__auto__);

return statearr_24271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));

return c__23693__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24289 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24289.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24290 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24290.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24291 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24291.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24292 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24292.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24293 = (function (ch,cs,meta24294){
this.ch = ch;
this.cs = cs;
this.meta24294 = meta24294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24295,meta24294__$1){
var self__ = this;
var _24295__$1 = this;
return (new cljs.core.async.t_cljs$core$async24293(self__.ch,self__.cs,meta24294__$1));
}));

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24295){
var self__ = this;
var _24295__$1 = this;
return self__.meta24294;
}));

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24294","meta24294",784114803,null)], null);
}));

(cljs.core.async.t_cljs$core$async24293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24293");

(cljs.core.async.t_cljs$core$async24293.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24293.
 */
cljs.core.async.__GT_t_cljs$core$async24293 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24293(ch__$1,cs__$1,meta24294){
return (new cljs.core.async.t_cljs$core$async24293(ch__$1,cs__$1,meta24294));
});

}

return (new cljs.core.async.t_cljs$core$async24293(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23693__auto___24515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24430){
var state_val_24431 = (state_24430[(1)]);
if((state_val_24431 === (7))){
var inst_24426 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24432_24516 = state_24430__$1;
(statearr_24432_24516[(2)] = inst_24426);

(statearr_24432_24516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (20))){
var inst_24329 = (state_24430[(7)]);
var inst_24341 = cljs.core.first.call(null,inst_24329);
var inst_24342 = cljs.core.nth.call(null,inst_24341,(0),null);
var inst_24343 = cljs.core.nth.call(null,inst_24341,(1),null);
var state_24430__$1 = (function (){var statearr_24433 = state_24430;
(statearr_24433[(8)] = inst_24342);

return statearr_24433;
})();
if(cljs.core.truth_(inst_24343)){
var statearr_24434_24517 = state_24430__$1;
(statearr_24434_24517[(1)] = (22));

} else {
var statearr_24435_24518 = state_24430__$1;
(statearr_24435_24518[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (27))){
var inst_24298 = (state_24430[(9)]);
var inst_24373 = (state_24430[(10)]);
var inst_24371 = (state_24430[(11)]);
var inst_24378 = (state_24430[(12)]);
var inst_24378__$1 = cljs.core._nth.call(null,inst_24371,inst_24373);
var inst_24379 = cljs.core.async.put_BANG_.call(null,inst_24378__$1,inst_24298,done);
var state_24430__$1 = (function (){var statearr_24436 = state_24430;
(statearr_24436[(12)] = inst_24378__$1);

return statearr_24436;
})();
if(cljs.core.truth_(inst_24379)){
var statearr_24437_24519 = state_24430__$1;
(statearr_24437_24519[(1)] = (30));

} else {
var statearr_24438_24520 = state_24430__$1;
(statearr_24438_24520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (1))){
var state_24430__$1 = state_24430;
var statearr_24439_24521 = state_24430__$1;
(statearr_24439_24521[(2)] = null);

(statearr_24439_24521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (24))){
var inst_24329 = (state_24430[(7)]);
var inst_24348 = (state_24430[(2)]);
var inst_24349 = cljs.core.next.call(null,inst_24329);
var inst_24307 = inst_24349;
var inst_24308 = null;
var inst_24309 = (0);
var inst_24310 = (0);
var state_24430__$1 = (function (){var statearr_24440 = state_24430;
(statearr_24440[(13)] = inst_24307);

(statearr_24440[(14)] = inst_24308);

(statearr_24440[(15)] = inst_24309);

(statearr_24440[(16)] = inst_24310);

(statearr_24440[(17)] = inst_24348);

return statearr_24440;
})();
var statearr_24441_24522 = state_24430__$1;
(statearr_24441_24522[(2)] = null);

(statearr_24441_24522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (39))){
var state_24430__$1 = state_24430;
var statearr_24445_24523 = state_24430__$1;
(statearr_24445_24523[(2)] = null);

(statearr_24445_24523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (4))){
var inst_24298 = (state_24430[(9)]);
var inst_24298__$1 = (state_24430[(2)]);
var inst_24299 = (inst_24298__$1 == null);
var state_24430__$1 = (function (){var statearr_24446 = state_24430;
(statearr_24446[(9)] = inst_24298__$1);

return statearr_24446;
})();
if(cljs.core.truth_(inst_24299)){
var statearr_24447_24524 = state_24430__$1;
(statearr_24447_24524[(1)] = (5));

} else {
var statearr_24448_24525 = state_24430__$1;
(statearr_24448_24525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (15))){
var inst_24307 = (state_24430[(13)]);
var inst_24308 = (state_24430[(14)]);
var inst_24309 = (state_24430[(15)]);
var inst_24310 = (state_24430[(16)]);
var inst_24325 = (state_24430[(2)]);
var inst_24326 = (inst_24310 + (1));
var tmp24442 = inst_24307;
var tmp24443 = inst_24308;
var tmp24444 = inst_24309;
var inst_24307__$1 = tmp24442;
var inst_24308__$1 = tmp24443;
var inst_24309__$1 = tmp24444;
var inst_24310__$1 = inst_24326;
var state_24430__$1 = (function (){var statearr_24449 = state_24430;
(statearr_24449[(18)] = inst_24325);

(statearr_24449[(13)] = inst_24307__$1);

(statearr_24449[(14)] = inst_24308__$1);

(statearr_24449[(15)] = inst_24309__$1);

(statearr_24449[(16)] = inst_24310__$1);

return statearr_24449;
})();
var statearr_24450_24526 = state_24430__$1;
(statearr_24450_24526[(2)] = null);

(statearr_24450_24526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (21))){
var inst_24352 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24454_24527 = state_24430__$1;
(statearr_24454_24527[(2)] = inst_24352);

(statearr_24454_24527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (31))){
var inst_24378 = (state_24430[(12)]);
var inst_24382 = done.call(null,null);
var inst_24383 = cljs.core.async.untap_STAR_.call(null,m,inst_24378);
var state_24430__$1 = (function (){var statearr_24455 = state_24430;
(statearr_24455[(19)] = inst_24382);

return statearr_24455;
})();
var statearr_24456_24528 = state_24430__$1;
(statearr_24456_24528[(2)] = inst_24383);

(statearr_24456_24528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (32))){
var inst_24370 = (state_24430[(20)]);
var inst_24372 = (state_24430[(21)]);
var inst_24373 = (state_24430[(10)]);
var inst_24371 = (state_24430[(11)]);
var inst_24385 = (state_24430[(2)]);
var inst_24386 = (inst_24373 + (1));
var tmp24451 = inst_24370;
var tmp24452 = inst_24372;
var tmp24453 = inst_24371;
var inst_24370__$1 = tmp24451;
var inst_24371__$1 = tmp24453;
var inst_24372__$1 = tmp24452;
var inst_24373__$1 = inst_24386;
var state_24430__$1 = (function (){var statearr_24457 = state_24430;
(statearr_24457[(20)] = inst_24370__$1);

(statearr_24457[(21)] = inst_24372__$1);

(statearr_24457[(22)] = inst_24385);

(statearr_24457[(10)] = inst_24373__$1);

(statearr_24457[(11)] = inst_24371__$1);

return statearr_24457;
})();
var statearr_24458_24529 = state_24430__$1;
(statearr_24458_24529[(2)] = null);

(statearr_24458_24529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (40))){
var inst_24398 = (state_24430[(23)]);
var inst_24402 = done.call(null,null);
var inst_24403 = cljs.core.async.untap_STAR_.call(null,m,inst_24398);
var state_24430__$1 = (function (){var statearr_24459 = state_24430;
(statearr_24459[(24)] = inst_24402);

return statearr_24459;
})();
var statearr_24460_24530 = state_24430__$1;
(statearr_24460_24530[(2)] = inst_24403);

(statearr_24460_24530[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (33))){
var inst_24389 = (state_24430[(25)]);
var inst_24391 = cljs.core.chunked_seq_QMARK_.call(null,inst_24389);
var state_24430__$1 = state_24430;
if(inst_24391){
var statearr_24461_24531 = state_24430__$1;
(statearr_24461_24531[(1)] = (36));

} else {
var statearr_24462_24532 = state_24430__$1;
(statearr_24462_24532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (13))){
var inst_24319 = (state_24430[(26)]);
var inst_24322 = cljs.core.async.close_BANG_.call(null,inst_24319);
var state_24430__$1 = state_24430;
var statearr_24463_24533 = state_24430__$1;
(statearr_24463_24533[(2)] = inst_24322);

(statearr_24463_24533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (22))){
var inst_24342 = (state_24430[(8)]);
var inst_24345 = cljs.core.async.close_BANG_.call(null,inst_24342);
var state_24430__$1 = state_24430;
var statearr_24464_24534 = state_24430__$1;
(statearr_24464_24534[(2)] = inst_24345);

(statearr_24464_24534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (36))){
var inst_24389 = (state_24430[(25)]);
var inst_24393 = cljs.core.chunk_first.call(null,inst_24389);
var inst_24394 = cljs.core.chunk_rest.call(null,inst_24389);
var inst_24395 = cljs.core.count.call(null,inst_24393);
var inst_24370 = inst_24394;
var inst_24371 = inst_24393;
var inst_24372 = inst_24395;
var inst_24373 = (0);
var state_24430__$1 = (function (){var statearr_24465 = state_24430;
(statearr_24465[(20)] = inst_24370);

(statearr_24465[(21)] = inst_24372);

(statearr_24465[(10)] = inst_24373);

(statearr_24465[(11)] = inst_24371);

return statearr_24465;
})();
var statearr_24466_24535 = state_24430__$1;
(statearr_24466_24535[(2)] = null);

(statearr_24466_24535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (41))){
var inst_24389 = (state_24430[(25)]);
var inst_24405 = (state_24430[(2)]);
var inst_24406 = cljs.core.next.call(null,inst_24389);
var inst_24370 = inst_24406;
var inst_24371 = null;
var inst_24372 = (0);
var inst_24373 = (0);
var state_24430__$1 = (function (){var statearr_24467 = state_24430;
(statearr_24467[(20)] = inst_24370);

(statearr_24467[(21)] = inst_24372);

(statearr_24467[(10)] = inst_24373);

(statearr_24467[(11)] = inst_24371);

(statearr_24467[(27)] = inst_24405);

return statearr_24467;
})();
var statearr_24468_24536 = state_24430__$1;
(statearr_24468_24536[(2)] = null);

(statearr_24468_24536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (43))){
var state_24430__$1 = state_24430;
var statearr_24469_24537 = state_24430__$1;
(statearr_24469_24537[(2)] = null);

(statearr_24469_24537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (29))){
var inst_24414 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24470_24538 = state_24430__$1;
(statearr_24470_24538[(2)] = inst_24414);

(statearr_24470_24538[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (44))){
var inst_24423 = (state_24430[(2)]);
var state_24430__$1 = (function (){var statearr_24471 = state_24430;
(statearr_24471[(28)] = inst_24423);

return statearr_24471;
})();
var statearr_24472_24539 = state_24430__$1;
(statearr_24472_24539[(2)] = null);

(statearr_24472_24539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (6))){
var inst_24362 = (state_24430[(29)]);
var inst_24361 = cljs.core.deref.call(null,cs);
var inst_24362__$1 = cljs.core.keys.call(null,inst_24361);
var inst_24363 = cljs.core.count.call(null,inst_24362__$1);
var inst_24364 = cljs.core.reset_BANG_.call(null,dctr,inst_24363);
var inst_24369 = cljs.core.seq.call(null,inst_24362__$1);
var inst_24370 = inst_24369;
var inst_24371 = null;
var inst_24372 = (0);
var inst_24373 = (0);
var state_24430__$1 = (function (){var statearr_24473 = state_24430;
(statearr_24473[(20)] = inst_24370);

(statearr_24473[(21)] = inst_24372);

(statearr_24473[(10)] = inst_24373);

(statearr_24473[(29)] = inst_24362__$1);

(statearr_24473[(11)] = inst_24371);

(statearr_24473[(30)] = inst_24364);

return statearr_24473;
})();
var statearr_24474_24540 = state_24430__$1;
(statearr_24474_24540[(2)] = null);

(statearr_24474_24540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (28))){
var inst_24370 = (state_24430[(20)]);
var inst_24389 = (state_24430[(25)]);
var inst_24389__$1 = cljs.core.seq.call(null,inst_24370);
var state_24430__$1 = (function (){var statearr_24475 = state_24430;
(statearr_24475[(25)] = inst_24389__$1);

return statearr_24475;
})();
if(inst_24389__$1){
var statearr_24476_24541 = state_24430__$1;
(statearr_24476_24541[(1)] = (33));

} else {
var statearr_24477_24542 = state_24430__$1;
(statearr_24477_24542[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (25))){
var inst_24372 = (state_24430[(21)]);
var inst_24373 = (state_24430[(10)]);
var inst_24375 = (inst_24373 < inst_24372);
var inst_24376 = inst_24375;
var state_24430__$1 = state_24430;
if(cljs.core.truth_(inst_24376)){
var statearr_24478_24543 = state_24430__$1;
(statearr_24478_24543[(1)] = (27));

} else {
var statearr_24479_24544 = state_24430__$1;
(statearr_24479_24544[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (34))){
var state_24430__$1 = state_24430;
var statearr_24480_24545 = state_24430__$1;
(statearr_24480_24545[(2)] = null);

(statearr_24480_24545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (17))){
var state_24430__$1 = state_24430;
var statearr_24481_24546 = state_24430__$1;
(statearr_24481_24546[(2)] = null);

(statearr_24481_24546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (3))){
var inst_24428 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24430__$1,inst_24428);
} else {
if((state_val_24431 === (12))){
var inst_24357 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24482_24547 = state_24430__$1;
(statearr_24482_24547[(2)] = inst_24357);

(statearr_24482_24547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (2))){
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24430__$1,(4),ch);
} else {
if((state_val_24431 === (23))){
var state_24430__$1 = state_24430;
var statearr_24483_24548 = state_24430__$1;
(statearr_24483_24548[(2)] = null);

(statearr_24483_24548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (35))){
var inst_24412 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24484_24549 = state_24430__$1;
(statearr_24484_24549[(2)] = inst_24412);

(statearr_24484_24549[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (19))){
var inst_24329 = (state_24430[(7)]);
var inst_24333 = cljs.core.chunk_first.call(null,inst_24329);
var inst_24334 = cljs.core.chunk_rest.call(null,inst_24329);
var inst_24335 = cljs.core.count.call(null,inst_24333);
var inst_24307 = inst_24334;
var inst_24308 = inst_24333;
var inst_24309 = inst_24335;
var inst_24310 = (0);
var state_24430__$1 = (function (){var statearr_24485 = state_24430;
(statearr_24485[(13)] = inst_24307);

(statearr_24485[(14)] = inst_24308);

(statearr_24485[(15)] = inst_24309);

(statearr_24485[(16)] = inst_24310);

return statearr_24485;
})();
var statearr_24486_24550 = state_24430__$1;
(statearr_24486_24550[(2)] = null);

(statearr_24486_24550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (11))){
var inst_24307 = (state_24430[(13)]);
var inst_24329 = (state_24430[(7)]);
var inst_24329__$1 = cljs.core.seq.call(null,inst_24307);
var state_24430__$1 = (function (){var statearr_24487 = state_24430;
(statearr_24487[(7)] = inst_24329__$1);

return statearr_24487;
})();
if(inst_24329__$1){
var statearr_24488_24551 = state_24430__$1;
(statearr_24488_24551[(1)] = (16));

} else {
var statearr_24489_24552 = state_24430__$1;
(statearr_24489_24552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (9))){
var inst_24359 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24490_24553 = state_24430__$1;
(statearr_24490_24553[(2)] = inst_24359);

(statearr_24490_24553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (5))){
var inst_24305 = cljs.core.deref.call(null,cs);
var inst_24306 = cljs.core.seq.call(null,inst_24305);
var inst_24307 = inst_24306;
var inst_24308 = null;
var inst_24309 = (0);
var inst_24310 = (0);
var state_24430__$1 = (function (){var statearr_24491 = state_24430;
(statearr_24491[(13)] = inst_24307);

(statearr_24491[(14)] = inst_24308);

(statearr_24491[(15)] = inst_24309);

(statearr_24491[(16)] = inst_24310);

return statearr_24491;
})();
var statearr_24492_24554 = state_24430__$1;
(statearr_24492_24554[(2)] = null);

(statearr_24492_24554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (14))){
var state_24430__$1 = state_24430;
var statearr_24493_24555 = state_24430__$1;
(statearr_24493_24555[(2)] = null);

(statearr_24493_24555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (45))){
var inst_24420 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24494_24556 = state_24430__$1;
(statearr_24494_24556[(2)] = inst_24420);

(statearr_24494_24556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (26))){
var inst_24362 = (state_24430[(29)]);
var inst_24416 = (state_24430[(2)]);
var inst_24417 = cljs.core.seq.call(null,inst_24362);
var state_24430__$1 = (function (){var statearr_24495 = state_24430;
(statearr_24495[(31)] = inst_24416);

return statearr_24495;
})();
if(inst_24417){
var statearr_24496_24557 = state_24430__$1;
(statearr_24496_24557[(1)] = (42));

} else {
var statearr_24497_24558 = state_24430__$1;
(statearr_24497_24558[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (16))){
var inst_24329 = (state_24430[(7)]);
var inst_24331 = cljs.core.chunked_seq_QMARK_.call(null,inst_24329);
var state_24430__$1 = state_24430;
if(inst_24331){
var statearr_24498_24559 = state_24430__$1;
(statearr_24498_24559[(1)] = (19));

} else {
var statearr_24499_24560 = state_24430__$1;
(statearr_24499_24560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (38))){
var inst_24409 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24500_24561 = state_24430__$1;
(statearr_24500_24561[(2)] = inst_24409);

(statearr_24500_24561[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (30))){
var state_24430__$1 = state_24430;
var statearr_24501_24562 = state_24430__$1;
(statearr_24501_24562[(2)] = null);

(statearr_24501_24562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (10))){
var inst_24308 = (state_24430[(14)]);
var inst_24310 = (state_24430[(16)]);
var inst_24318 = cljs.core._nth.call(null,inst_24308,inst_24310);
var inst_24319 = cljs.core.nth.call(null,inst_24318,(0),null);
var inst_24320 = cljs.core.nth.call(null,inst_24318,(1),null);
var state_24430__$1 = (function (){var statearr_24502 = state_24430;
(statearr_24502[(26)] = inst_24319);

return statearr_24502;
})();
if(cljs.core.truth_(inst_24320)){
var statearr_24503_24563 = state_24430__$1;
(statearr_24503_24563[(1)] = (13));

} else {
var statearr_24504_24564 = state_24430__$1;
(statearr_24504_24564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (18))){
var inst_24355 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24505_24565 = state_24430__$1;
(statearr_24505_24565[(2)] = inst_24355);

(statearr_24505_24565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (42))){
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24430__$1,(45),dchan);
} else {
if((state_val_24431 === (37))){
var inst_24389 = (state_24430[(25)]);
var inst_24398 = (state_24430[(23)]);
var inst_24298 = (state_24430[(9)]);
var inst_24398__$1 = cljs.core.first.call(null,inst_24389);
var inst_24399 = cljs.core.async.put_BANG_.call(null,inst_24398__$1,inst_24298,done);
var state_24430__$1 = (function (){var statearr_24506 = state_24430;
(statearr_24506[(23)] = inst_24398__$1);

return statearr_24506;
})();
if(cljs.core.truth_(inst_24399)){
var statearr_24507_24566 = state_24430__$1;
(statearr_24507_24566[(1)] = (39));

} else {
var statearr_24508_24567 = state_24430__$1;
(statearr_24508_24567[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (8))){
var inst_24309 = (state_24430[(15)]);
var inst_24310 = (state_24430[(16)]);
var inst_24312 = (inst_24310 < inst_24309);
var inst_24313 = inst_24312;
var state_24430__$1 = state_24430;
if(cljs.core.truth_(inst_24313)){
var statearr_24509_24568 = state_24430__$1;
(statearr_24509_24568[(1)] = (10));

} else {
var statearr_24510_24569 = state_24430__$1;
(statearr_24510_24569[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__23599__auto__ = null;
var cljs$core$async$mult_$_state_machine__23599__auto____0 = (function (){
var statearr_24511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24511[(0)] = cljs$core$async$mult_$_state_machine__23599__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var cljs$core$async$mult_$_state_machine__23599__auto____1 = (function (state_24430){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24512){if((e24512 instanceof Object)){
var ex__23602__auto__ = e24512;
var statearr_24513_24570 = state_24430;
(statearr_24513_24570[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24571 = state_24430;
state_24430 = G__24571;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23599__auto__ = function(state_24430){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23599__auto____1.call(this,state_24430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23599__auto____0;
cljs$core$async$mult_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23599__auto____1;
return cljs$core$async$mult_$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24514 = f__23694__auto__.call(null);
(statearr_24514[(6)] = c__23693__auto___24515);

return statearr_24514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var G__24573 = arguments.length;
switch (G__24573) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_24575 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_24575.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24576 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_24576.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24577 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24577.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24578 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_24578.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24579 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24579.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24590 = arguments.length;
var i__4737__auto___24591 = (0);
while(true){
if((i__4737__auto___24591 < len__4736__auto___24590)){
args__4742__auto__.push((arguments[i__4737__auto___24591]));

var G__24592 = (i__4737__auto___24591 + (1));
i__4737__auto___24591 = G__24592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24584){
var map__24585 = p__24584;
var map__24585__$1 = (((((!((map__24585 == null))))?(((((map__24585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24585):map__24585);
var opts = map__24585__$1;
var statearr_24587_24593 = state;
(statearr_24587_24593[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24588_24594 = state;
(statearr_24588_24594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24589_24595 = state;
(statearr_24589_24595[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24580){
var G__24581 = cljs.core.first.call(null,seq24580);
var seq24580__$1 = cljs.core.next.call(null,seq24580);
var G__24582 = cljs.core.first.call(null,seq24580__$1);
var seq24580__$2 = cljs.core.next.call(null,seq24580__$1);
var G__24583 = cljs.core.first.call(null,seq24580__$2);
var seq24580__$3 = cljs.core.next.call(null,seq24580__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24581,G__24582,G__24583,seq24580__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24597 = meta24597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24598,meta24597__$1){
var self__ = this;
var _24598__$1 = this;
return (new cljs.core.async.t_cljs$core$async24596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24597__$1));
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24598){
var self__ = this;
var _24598__$1 = this;
return self__.meta24597;
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24597","meta24597",-1612663549,null)], null);
}));

(cljs.core.async.t_cljs$core$async24596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24596");

(cljs.core.async.t_cljs$core$async24596.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24596.
 */
cljs.core.async.__GT_t_cljs$core$async24596 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24597){
return (new cljs.core.async.t_cljs$core$async24596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24597));
});

}

return (new cljs.core.async.t_cljs$core$async24596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23693__auto___24760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24615 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24702_24761 = state_24700__$1;
(statearr_24702_24761[(2)] = inst_24615);

(statearr_24702_24761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (20))){
var inst_24627 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
var statearr_24703_24762 = state_24700__$1;
(statearr_24703_24762[(2)] = inst_24627);

(statearr_24703_24762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (27))){
var state_24700__$1 = state_24700;
var statearr_24704_24763 = state_24700__$1;
(statearr_24704_24763[(2)] = null);

(statearr_24704_24763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var inst_24602 = (state_24700[(8)]);
var inst_24602__$1 = calc_state.call(null);
var inst_24604 = (inst_24602__$1 == null);
var inst_24605 = cljs.core.not.call(null,inst_24604);
var state_24700__$1 = (function (){var statearr_24705 = state_24700;
(statearr_24705[(8)] = inst_24602__$1);

return statearr_24705;
})();
if(inst_24605){
var statearr_24706_24764 = state_24700__$1;
(statearr_24706_24764[(1)] = (2));

} else {
var statearr_24707_24765 = state_24700__$1;
(statearr_24707_24765[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (24))){
var inst_24660 = (state_24700[(9)]);
var inst_24651 = (state_24700[(10)]);
var inst_24674 = (state_24700[(11)]);
var inst_24674__$1 = inst_24651.call(null,inst_24660);
var state_24700__$1 = (function (){var statearr_24708 = state_24700;
(statearr_24708[(11)] = inst_24674__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24674__$1)){
var statearr_24709_24766 = state_24700__$1;
(statearr_24709_24766[(1)] = (29));

} else {
var statearr_24710_24767 = state_24700__$1;
(statearr_24710_24767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var inst_24618 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24618)){
var statearr_24711_24768 = state_24700__$1;
(statearr_24711_24768[(1)] = (8));

} else {
var statearr_24712_24769 = state_24700__$1;
(statearr_24712_24769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (15))){
var inst_24645 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24645)){
var statearr_24713_24770 = state_24700__$1;
(statearr_24713_24770[(1)] = (19));

} else {
var statearr_24714_24771 = state_24700__$1;
(statearr_24714_24771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (21))){
var inst_24650 = (state_24700[(12)]);
var inst_24650__$1 = (state_24700[(2)]);
var inst_24651 = cljs.core.get.call(null,inst_24650__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24652 = cljs.core.get.call(null,inst_24650__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24653 = cljs.core.get.call(null,inst_24650__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24700__$1 = (function (){var statearr_24715 = state_24700;
(statearr_24715[(12)] = inst_24650__$1);

(statearr_24715[(10)] = inst_24651);

(statearr_24715[(13)] = inst_24652);

return statearr_24715;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24700__$1,(22),inst_24653);
} else {
if((state_val_24701 === (31))){
var inst_24682 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24682)){
var statearr_24716_24772 = state_24700__$1;
(statearr_24716_24772[(1)] = (32));

} else {
var statearr_24717_24773 = state_24700__$1;
(statearr_24717_24773[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (32))){
var inst_24659 = (state_24700[(14)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(35),out,inst_24659);
} else {
if((state_val_24701 === (33))){
var inst_24650 = (state_24700[(12)]);
var inst_24627 = inst_24650;
var state_24700__$1 = (function (){var statearr_24718 = state_24700;
(statearr_24718[(7)] = inst_24627);

return statearr_24718;
})();
var statearr_24719_24774 = state_24700__$1;
(statearr_24719_24774[(2)] = null);

(statearr_24719_24774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (13))){
var inst_24627 = (state_24700[(7)]);
var inst_24634 = inst_24627.cljs$lang$protocol_mask$partition0$;
var inst_24635 = (inst_24634 & (64));
var inst_24636 = inst_24627.cljs$core$ISeq$;
var inst_24637 = (cljs.core.PROTOCOL_SENTINEL === inst_24636);
var inst_24638 = ((inst_24635) || (inst_24637));
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24638)){
var statearr_24720_24775 = state_24700__$1;
(statearr_24720_24775[(1)] = (16));

} else {
var statearr_24721_24776 = state_24700__$1;
(statearr_24721_24776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (22))){
var inst_24659 = (state_24700[(14)]);
var inst_24660 = (state_24700[(9)]);
var inst_24658 = (state_24700[(2)]);
var inst_24659__$1 = cljs.core.nth.call(null,inst_24658,(0),null);
var inst_24660__$1 = cljs.core.nth.call(null,inst_24658,(1),null);
var inst_24661 = (inst_24659__$1 == null);
var inst_24662 = cljs.core._EQ_.call(null,inst_24660__$1,change);
var inst_24663 = ((inst_24661) || (inst_24662));
var state_24700__$1 = (function (){var statearr_24722 = state_24700;
(statearr_24722[(14)] = inst_24659__$1);

(statearr_24722[(9)] = inst_24660__$1);

return statearr_24722;
})();
if(cljs.core.truth_(inst_24663)){
var statearr_24723_24777 = state_24700__$1;
(statearr_24723_24777[(1)] = (23));

} else {
var statearr_24724_24778 = state_24700__$1;
(statearr_24724_24778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (36))){
var inst_24650 = (state_24700[(12)]);
var inst_24627 = inst_24650;
var state_24700__$1 = (function (){var statearr_24725 = state_24700;
(statearr_24725[(7)] = inst_24627);

return statearr_24725;
})();
var statearr_24726_24779 = state_24700__$1;
(statearr_24726_24779[(2)] = null);

(statearr_24726_24779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (29))){
var inst_24674 = (state_24700[(11)]);
var state_24700__$1 = state_24700;
var statearr_24727_24780 = state_24700__$1;
(statearr_24727_24780[(2)] = inst_24674);

(statearr_24727_24780[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var state_24700__$1 = state_24700;
var statearr_24728_24781 = state_24700__$1;
(statearr_24728_24781[(2)] = false);

(statearr_24728_24781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (28))){
var inst_24670 = (state_24700[(2)]);
var inst_24671 = calc_state.call(null);
var inst_24627 = inst_24671;
var state_24700__$1 = (function (){var statearr_24729 = state_24700;
(statearr_24729[(7)] = inst_24627);

(statearr_24729[(15)] = inst_24670);

return statearr_24729;
})();
var statearr_24730_24782 = state_24700__$1;
(statearr_24730_24782[(2)] = null);

(statearr_24730_24782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (25))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24731_24783 = state_24700__$1;
(statearr_24731_24783[(2)] = inst_24696);

(statearr_24731_24783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (34))){
var inst_24694 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24732_24784 = state_24700__$1;
(statearr_24732_24784[(2)] = inst_24694);

(statearr_24732_24784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (17))){
var state_24700__$1 = state_24700;
var statearr_24733_24785 = state_24700__$1;
(statearr_24733_24785[(2)] = false);

(statearr_24733_24785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (3))){
var state_24700__$1 = state_24700;
var statearr_24734_24786 = state_24700__$1;
(statearr_24734_24786[(2)] = false);

(statearr_24734_24786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (12))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (2))){
var inst_24602 = (state_24700[(8)]);
var inst_24607 = inst_24602.cljs$lang$protocol_mask$partition0$;
var inst_24608 = (inst_24607 & (64));
var inst_24609 = inst_24602.cljs$core$ISeq$;
var inst_24610 = (cljs.core.PROTOCOL_SENTINEL === inst_24609);
var inst_24611 = ((inst_24608) || (inst_24610));
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24611)){
var statearr_24735_24787 = state_24700__$1;
(statearr_24735_24787[(1)] = (5));

} else {
var statearr_24736_24788 = state_24700__$1;
(statearr_24736_24788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (23))){
var inst_24659 = (state_24700[(14)]);
var inst_24665 = (inst_24659 == null);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24665)){
var statearr_24737_24789 = state_24700__$1;
(statearr_24737_24789[(1)] = (26));

} else {
var statearr_24738_24790 = state_24700__$1;
(statearr_24738_24790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (35))){
var inst_24685 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24685)){
var statearr_24739_24791 = state_24700__$1;
(statearr_24739_24791[(1)] = (36));

} else {
var statearr_24740_24792 = state_24700__$1;
(statearr_24740_24792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (19))){
var inst_24627 = (state_24700[(7)]);
var inst_24647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24627);
var state_24700__$1 = state_24700;
var statearr_24741_24793 = state_24700__$1;
(statearr_24741_24793[(2)] = inst_24647);

(statearr_24741_24793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (11))){
var inst_24627 = (state_24700[(7)]);
var inst_24631 = (inst_24627 == null);
var inst_24632 = cljs.core.not.call(null,inst_24631);
var state_24700__$1 = state_24700;
if(inst_24632){
var statearr_24742_24794 = state_24700__$1;
(statearr_24742_24794[(1)] = (13));

} else {
var statearr_24743_24795 = state_24700__$1;
(statearr_24743_24795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (9))){
var inst_24602 = (state_24700[(8)]);
var state_24700__$1 = state_24700;
var statearr_24744_24796 = state_24700__$1;
(statearr_24744_24796[(2)] = inst_24602);

(statearr_24744_24796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var state_24700__$1 = state_24700;
var statearr_24745_24797 = state_24700__$1;
(statearr_24745_24797[(2)] = true);

(statearr_24745_24797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (14))){
var state_24700__$1 = state_24700;
var statearr_24746_24798 = state_24700__$1;
(statearr_24746_24798[(2)] = false);

(statearr_24746_24798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (26))){
var inst_24660 = (state_24700[(9)]);
var inst_24667 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24660);
var state_24700__$1 = state_24700;
var statearr_24747_24799 = state_24700__$1;
(statearr_24747_24799[(2)] = inst_24667);

(statearr_24747_24799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (16))){
var state_24700__$1 = state_24700;
var statearr_24748_24800 = state_24700__$1;
(statearr_24748_24800[(2)] = true);

(statearr_24748_24800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (38))){
var inst_24690 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24749_24801 = state_24700__$1;
(statearr_24749_24801[(2)] = inst_24690);

(statearr_24749_24801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (30))){
var inst_24660 = (state_24700[(9)]);
var inst_24651 = (state_24700[(10)]);
var inst_24652 = (state_24700[(13)]);
var inst_24677 = cljs.core.empty_QMARK_.call(null,inst_24651);
var inst_24678 = inst_24652.call(null,inst_24660);
var inst_24679 = cljs.core.not.call(null,inst_24678);
var inst_24680 = ((inst_24677) && (inst_24679));
var state_24700__$1 = state_24700;
var statearr_24750_24802 = state_24700__$1;
(statearr_24750_24802[(2)] = inst_24680);

(statearr_24750_24802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var inst_24602 = (state_24700[(8)]);
var inst_24623 = (state_24700[(2)]);
var inst_24624 = cljs.core.get.call(null,inst_24623,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24625 = cljs.core.get.call(null,inst_24623,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24626 = cljs.core.get.call(null,inst_24623,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24627 = inst_24602;
var state_24700__$1 = (function (){var statearr_24751 = state_24700;
(statearr_24751[(7)] = inst_24627);

(statearr_24751[(16)] = inst_24626);

(statearr_24751[(17)] = inst_24624);

(statearr_24751[(18)] = inst_24625);

return statearr_24751;
})();
var statearr_24752_24803 = state_24700__$1;
(statearr_24752_24803[(2)] = null);

(statearr_24752_24803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (18))){
var inst_24642 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24753_24804 = state_24700__$1;
(statearr_24753_24804[(2)] = inst_24642);

(statearr_24753_24804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (37))){
var state_24700__$1 = state_24700;
var statearr_24754_24805 = state_24700__$1;
(statearr_24754_24805[(2)] = null);

(statearr_24754_24805[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24602 = (state_24700[(8)]);
var inst_24620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24602);
var state_24700__$1 = state_24700;
var statearr_24755_24806 = state_24700__$1;
(statearr_24755_24806[(2)] = inst_24620);

(statearr_24755_24806[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__23599__auto__ = null;
var cljs$core$async$mix_$_state_machine__23599__auto____0 = (function (){
var statearr_24756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24756[(0)] = cljs$core$async$mix_$_state_machine__23599__auto__);

(statearr_24756[(1)] = (1));

return statearr_24756;
});
var cljs$core$async$mix_$_state_machine__23599__auto____1 = (function (state_24700){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24757){if((e24757 instanceof Object)){
var ex__23602__auto__ = e24757;
var statearr_24758_24807 = state_24700;
(statearr_24758_24807[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24808 = state_24700;
state_24700 = G__24808;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23599__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23599__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23599__auto____0;
cljs$core$async$mix_$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23599__auto____1;
return cljs$core$async$mix_$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24759 = f__23694__auto__.call(null);
(statearr_24759[(6)] = c__23693__auto___24760);

return statearr_24759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_24811 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_24811.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24812 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_24812.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24813 = (function() {
var G__24814 = null;
var G__24814__1 = (function (p){
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
var G__24814__2 = (function (p,v){
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
G__24814 = function(p,v){
switch(arguments.length){
case 1:
return G__24814__1.call(this,p);
case 2:
return G__24814__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24814.cljs$core$IFn$_invoke$arity$1 = G__24814__1;
G__24814.cljs$core$IFn$_invoke$arity$2 = G__24814__2;
return G__24814;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24810 = arguments.length;
switch (G__24810) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24813.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24813.call(null,p,v);
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
var G__24818 = arguments.length;
switch (G__24818) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24816_SHARP_){
if(cljs.core.truth_(p1__24816_SHARP_.call(null,topic))){
return p1__24816_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24816_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24819 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24820){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24820 = meta24820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24821,meta24820__$1){
var self__ = this;
var _24821__$1 = this;
return (new cljs.core.async.t_cljs$core$async24819(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24820__$1));
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24821){
var self__ = this;
var _24821__$1 = this;
return self__.meta24820;
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24820","meta24820",-418121620,null)], null);
}));

(cljs.core.async.t_cljs$core$async24819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24819");

(cljs.core.async.t_cljs$core$async24819.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24819.
 */
cljs.core.async.__GT_t_cljs$core$async24819 = (function cljs$core$async$__GT_t_cljs$core$async24819(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24820){
return (new cljs.core.async.t_cljs$core$async24819(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24820));
});

}

return (new cljs.core.async.t_cljs$core$async24819(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23693__auto___24939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (7))){
var inst_24889 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24895_24940 = state_24893__$1;
(statearr_24895_24940[(2)] = inst_24889);

(statearr_24895_24940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (20))){
var state_24893__$1 = state_24893;
var statearr_24896_24941 = state_24893__$1;
(statearr_24896_24941[(2)] = null);

(statearr_24896_24941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (1))){
var state_24893__$1 = state_24893;
var statearr_24897_24942 = state_24893__$1;
(statearr_24897_24942[(2)] = null);

(statearr_24897_24942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (24))){
var inst_24872 = (state_24893[(7)]);
var inst_24881 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24872);
var state_24893__$1 = state_24893;
var statearr_24898_24943 = state_24893__$1;
(statearr_24898_24943[(2)] = inst_24881);

(statearr_24898_24943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (4))){
var inst_24824 = (state_24893[(8)]);
var inst_24824__$1 = (state_24893[(2)]);
var inst_24825 = (inst_24824__$1 == null);
var state_24893__$1 = (function (){var statearr_24899 = state_24893;
(statearr_24899[(8)] = inst_24824__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24825)){
var statearr_24900_24944 = state_24893__$1;
(statearr_24900_24944[(1)] = (5));

} else {
var statearr_24901_24945 = state_24893__$1;
(statearr_24901_24945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (15))){
var inst_24866 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24902_24946 = state_24893__$1;
(statearr_24902_24946[(2)] = inst_24866);

(statearr_24902_24946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (21))){
var inst_24886 = (state_24893[(2)]);
var state_24893__$1 = (function (){var statearr_24903 = state_24893;
(statearr_24903[(9)] = inst_24886);

return statearr_24903;
})();
var statearr_24904_24947 = state_24893__$1;
(statearr_24904_24947[(2)] = null);

(statearr_24904_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (13))){
var inst_24848 = (state_24893[(10)]);
var inst_24850 = cljs.core.chunked_seq_QMARK_.call(null,inst_24848);
var state_24893__$1 = state_24893;
if(inst_24850){
var statearr_24905_24948 = state_24893__$1;
(statearr_24905_24948[(1)] = (16));

} else {
var statearr_24906_24949 = state_24893__$1;
(statearr_24906_24949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (22))){
var inst_24878 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24878)){
var statearr_24907_24950 = state_24893__$1;
(statearr_24907_24950[(1)] = (23));

} else {
var statearr_24908_24951 = state_24893__$1;
(statearr_24908_24951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (6))){
var inst_24872 = (state_24893[(7)]);
var inst_24874 = (state_24893[(11)]);
var inst_24824 = (state_24893[(8)]);
var inst_24872__$1 = topic_fn.call(null,inst_24824);
var inst_24873 = cljs.core.deref.call(null,mults);
var inst_24874__$1 = cljs.core.get.call(null,inst_24873,inst_24872__$1);
var state_24893__$1 = (function (){var statearr_24909 = state_24893;
(statearr_24909[(7)] = inst_24872__$1);

(statearr_24909[(11)] = inst_24874__$1);

return statearr_24909;
})();
if(cljs.core.truth_(inst_24874__$1)){
var statearr_24910_24952 = state_24893__$1;
(statearr_24910_24952[(1)] = (19));

} else {
var statearr_24911_24953 = state_24893__$1;
(statearr_24911_24953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (25))){
var inst_24883 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24912_24954 = state_24893__$1;
(statearr_24912_24954[(2)] = inst_24883);

(statearr_24912_24954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (17))){
var inst_24848 = (state_24893[(10)]);
var inst_24857 = cljs.core.first.call(null,inst_24848);
var inst_24858 = cljs.core.async.muxch_STAR_.call(null,inst_24857);
var inst_24859 = cljs.core.async.close_BANG_.call(null,inst_24858);
var inst_24860 = cljs.core.next.call(null,inst_24848);
var inst_24834 = inst_24860;
var inst_24835 = null;
var inst_24836 = (0);
var inst_24837 = (0);
var state_24893__$1 = (function (){var statearr_24913 = state_24893;
(statearr_24913[(12)] = inst_24859);

(statearr_24913[(13)] = inst_24835);

(statearr_24913[(14)] = inst_24836);

(statearr_24913[(15)] = inst_24834);

(statearr_24913[(16)] = inst_24837);

return statearr_24913;
})();
var statearr_24914_24955 = state_24893__$1;
(statearr_24914_24955[(2)] = null);

(statearr_24914_24955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (3))){
var inst_24891 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24893__$1,inst_24891);
} else {
if((state_val_24894 === (12))){
var inst_24868 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24915_24956 = state_24893__$1;
(statearr_24915_24956[(2)] = inst_24868);

(statearr_24915_24956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (2))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24893__$1,(4),ch);
} else {
if((state_val_24894 === (23))){
var state_24893__$1 = state_24893;
var statearr_24916_24957 = state_24893__$1;
(statearr_24916_24957[(2)] = null);

(statearr_24916_24957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (19))){
var inst_24874 = (state_24893[(11)]);
var inst_24824 = (state_24893[(8)]);
var inst_24876 = cljs.core.async.muxch_STAR_.call(null,inst_24874);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(22),inst_24876,inst_24824);
} else {
if((state_val_24894 === (11))){
var inst_24834 = (state_24893[(15)]);
var inst_24848 = (state_24893[(10)]);
var inst_24848__$1 = cljs.core.seq.call(null,inst_24834);
var state_24893__$1 = (function (){var statearr_24917 = state_24893;
(statearr_24917[(10)] = inst_24848__$1);

return statearr_24917;
})();
if(inst_24848__$1){
var statearr_24918_24958 = state_24893__$1;
(statearr_24918_24958[(1)] = (13));

} else {
var statearr_24919_24959 = state_24893__$1;
(statearr_24919_24959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (9))){
var inst_24870 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24920_24960 = state_24893__$1;
(statearr_24920_24960[(2)] = inst_24870);

(statearr_24920_24960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (5))){
var inst_24831 = cljs.core.deref.call(null,mults);
var inst_24832 = cljs.core.vals.call(null,inst_24831);
var inst_24833 = cljs.core.seq.call(null,inst_24832);
var inst_24834 = inst_24833;
var inst_24835 = null;
var inst_24836 = (0);
var inst_24837 = (0);
var state_24893__$1 = (function (){var statearr_24921 = state_24893;
(statearr_24921[(13)] = inst_24835);

(statearr_24921[(14)] = inst_24836);

(statearr_24921[(15)] = inst_24834);

(statearr_24921[(16)] = inst_24837);

return statearr_24921;
})();
var statearr_24922_24961 = state_24893__$1;
(statearr_24922_24961[(2)] = null);

(statearr_24922_24961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (14))){
var state_24893__$1 = state_24893;
var statearr_24926_24962 = state_24893__$1;
(statearr_24926_24962[(2)] = null);

(statearr_24926_24962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (16))){
var inst_24848 = (state_24893[(10)]);
var inst_24852 = cljs.core.chunk_first.call(null,inst_24848);
var inst_24853 = cljs.core.chunk_rest.call(null,inst_24848);
var inst_24854 = cljs.core.count.call(null,inst_24852);
var inst_24834 = inst_24853;
var inst_24835 = inst_24852;
var inst_24836 = inst_24854;
var inst_24837 = (0);
var state_24893__$1 = (function (){var statearr_24927 = state_24893;
(statearr_24927[(13)] = inst_24835);

(statearr_24927[(14)] = inst_24836);

(statearr_24927[(15)] = inst_24834);

(statearr_24927[(16)] = inst_24837);

return statearr_24927;
})();
var statearr_24928_24963 = state_24893__$1;
(statearr_24928_24963[(2)] = null);

(statearr_24928_24963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (10))){
var inst_24835 = (state_24893[(13)]);
var inst_24836 = (state_24893[(14)]);
var inst_24834 = (state_24893[(15)]);
var inst_24837 = (state_24893[(16)]);
var inst_24842 = cljs.core._nth.call(null,inst_24835,inst_24837);
var inst_24843 = cljs.core.async.muxch_STAR_.call(null,inst_24842);
var inst_24844 = cljs.core.async.close_BANG_.call(null,inst_24843);
var inst_24845 = (inst_24837 + (1));
var tmp24923 = inst_24835;
var tmp24924 = inst_24836;
var tmp24925 = inst_24834;
var inst_24834__$1 = tmp24925;
var inst_24835__$1 = tmp24923;
var inst_24836__$1 = tmp24924;
var inst_24837__$1 = inst_24845;
var state_24893__$1 = (function (){var statearr_24929 = state_24893;
(statearr_24929[(13)] = inst_24835__$1);

(statearr_24929[(17)] = inst_24844);

(statearr_24929[(14)] = inst_24836__$1);

(statearr_24929[(15)] = inst_24834__$1);

(statearr_24929[(16)] = inst_24837__$1);

return statearr_24929;
})();
var statearr_24930_24964 = state_24893__$1;
(statearr_24930_24964[(2)] = null);

(statearr_24930_24964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (18))){
var inst_24863 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24931_24965 = state_24893__$1;
(statearr_24931_24965[(2)] = inst_24863);

(statearr_24931_24965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (8))){
var inst_24836 = (state_24893[(14)]);
var inst_24837 = (state_24893[(16)]);
var inst_24839 = (inst_24837 < inst_24836);
var inst_24840 = inst_24839;
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24840)){
var statearr_24932_24966 = state_24893__$1;
(statearr_24932_24966[(1)] = (10));

} else {
var statearr_24933_24967 = state_24893__$1;
(statearr_24933_24967[(1)] = (11));

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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24934[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_24934[(1)] = (1));

return statearr_24934;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_24893){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_24893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object)){
var ex__23602__auto__ = e24935;
var statearr_24936_24968 = state_24893;
(statearr_24936_24968[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24969 = state_24893;
state_24893 = G__24969;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_24937 = f__23694__auto__.call(null);
(statearr_24937[(6)] = c__23693__auto___24939);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var G__24971 = arguments.length;
switch (G__24971) {
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
var G__24974 = arguments.length;
switch (G__24974) {
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
var G__24977 = arguments.length;
switch (G__24977) {
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
var c__23693__auto___25044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25016){
var state_val_25017 = (state_25016[(1)]);
if((state_val_25017 === (7))){
var state_25016__$1 = state_25016;
var statearr_25018_25045 = state_25016__$1;
(statearr_25018_25045[(2)] = null);

(statearr_25018_25045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (1))){
var state_25016__$1 = state_25016;
var statearr_25019_25046 = state_25016__$1;
(statearr_25019_25046[(2)] = null);

(statearr_25019_25046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (4))){
var inst_24980 = (state_25016[(7)]);
var inst_24982 = (inst_24980 < cnt);
var state_25016__$1 = state_25016;
if(cljs.core.truth_(inst_24982)){
var statearr_25020_25047 = state_25016__$1;
(statearr_25020_25047[(1)] = (6));

} else {
var statearr_25021_25048 = state_25016__$1;
(statearr_25021_25048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (15))){
var inst_25012 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25022_25049 = state_25016__$1;
(statearr_25022_25049[(2)] = inst_25012);

(statearr_25022_25049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (13))){
var inst_25005 = cljs.core.async.close_BANG_.call(null,out);
var state_25016__$1 = state_25016;
var statearr_25023_25050 = state_25016__$1;
(statearr_25023_25050[(2)] = inst_25005);

(statearr_25023_25050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (6))){
var state_25016__$1 = state_25016;
var statearr_25024_25051 = state_25016__$1;
(statearr_25024_25051[(2)] = null);

(statearr_25024_25051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (3))){
var inst_25014 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25016__$1,inst_25014);
} else {
if((state_val_25017 === (12))){
var inst_25002 = (state_25016[(8)]);
var inst_25002__$1 = (state_25016[(2)]);
var inst_25003 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25002__$1);
var state_25016__$1 = (function (){var statearr_25025 = state_25016;
(statearr_25025[(8)] = inst_25002__$1);

return statearr_25025;
})();
if(cljs.core.truth_(inst_25003)){
var statearr_25026_25052 = state_25016__$1;
(statearr_25026_25052[(1)] = (13));

} else {
var statearr_25027_25053 = state_25016__$1;
(statearr_25027_25053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (2))){
var inst_24979 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24980 = (0);
var state_25016__$1 = (function (){var statearr_25028 = state_25016;
(statearr_25028[(9)] = inst_24979);

(statearr_25028[(7)] = inst_24980);

return statearr_25028;
})();
var statearr_25029_25054 = state_25016__$1;
(statearr_25029_25054[(2)] = null);

(statearr_25029_25054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (11))){
var inst_24980 = (state_25016[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25016,(10),Object,null,(9));
var inst_24989 = chs__$1.call(null,inst_24980);
var inst_24990 = done.call(null,inst_24980);
var inst_24991 = cljs.core.async.take_BANG_.call(null,inst_24989,inst_24990);
var state_25016__$1 = state_25016;
var statearr_25030_25055 = state_25016__$1;
(statearr_25030_25055[(2)] = inst_24991);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (9))){
var inst_24980 = (state_25016[(7)]);
var inst_24993 = (state_25016[(2)]);
var inst_24994 = (inst_24980 + (1));
var inst_24980__$1 = inst_24994;
var state_25016__$1 = (function (){var statearr_25031 = state_25016;
(statearr_25031[(7)] = inst_24980__$1);

(statearr_25031[(10)] = inst_24993);

return statearr_25031;
})();
var statearr_25032_25056 = state_25016__$1;
(statearr_25032_25056[(2)] = null);

(statearr_25032_25056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (5))){
var inst_25000 = (state_25016[(2)]);
var state_25016__$1 = (function (){var statearr_25033 = state_25016;
(statearr_25033[(11)] = inst_25000);

return statearr_25033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25016__$1,(12),dchan);
} else {
if((state_val_25017 === (14))){
var inst_25002 = (state_25016[(8)]);
var inst_25007 = cljs.core.apply.call(null,f,inst_25002);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25016__$1,(16),out,inst_25007);
} else {
if((state_val_25017 === (16))){
var inst_25009 = (state_25016[(2)]);
var state_25016__$1 = (function (){var statearr_25034 = state_25016;
(statearr_25034[(12)] = inst_25009);

return statearr_25034;
})();
var statearr_25035_25057 = state_25016__$1;
(statearr_25035_25057[(2)] = null);

(statearr_25035_25057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (10))){
var inst_24984 = (state_25016[(2)]);
var inst_24985 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25016__$1 = (function (){var statearr_25036 = state_25016;
(statearr_25036[(13)] = inst_24984);

return statearr_25036;
})();
var statearr_25037_25058 = state_25016__$1;
(statearr_25037_25058[(2)] = inst_24985);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (8))){
var inst_24998 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25038_25059 = state_25016__$1;
(statearr_25038_25059[(2)] = inst_24998);

(statearr_25038_25059[(1)] = (5));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25039[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25039[(1)] = (1));

return statearr_25039;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25016){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25040){if((e25040 instanceof Object)){
var ex__23602__auto__ = e25040;
var statearr_25041_25060 = state_25016;
(statearr_25041_25060[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25061 = state_25016;
state_25016 = G__25061;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25042 = f__23694__auto__.call(null);
(statearr_25042[(6)] = c__23693__auto___25044);

return statearr_25042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var G__25064 = arguments.length;
switch (G__25064) {
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
var c__23693__auto___25118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25096){
var state_val_25097 = (state_25096[(1)]);
if((state_val_25097 === (7))){
var inst_25076 = (state_25096[(7)]);
var inst_25075 = (state_25096[(8)]);
var inst_25075__$1 = (state_25096[(2)]);
var inst_25076__$1 = cljs.core.nth.call(null,inst_25075__$1,(0),null);
var inst_25077 = cljs.core.nth.call(null,inst_25075__$1,(1),null);
var inst_25078 = (inst_25076__$1 == null);
var state_25096__$1 = (function (){var statearr_25098 = state_25096;
(statearr_25098[(7)] = inst_25076__$1);

(statearr_25098[(8)] = inst_25075__$1);

(statearr_25098[(9)] = inst_25077);

return statearr_25098;
})();
if(cljs.core.truth_(inst_25078)){
var statearr_25099_25119 = state_25096__$1;
(statearr_25099_25119[(1)] = (8));

} else {
var statearr_25100_25120 = state_25096__$1;
(statearr_25100_25120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (1))){
var inst_25065 = cljs.core.vec.call(null,chs);
var inst_25066 = inst_25065;
var state_25096__$1 = (function (){var statearr_25101 = state_25096;
(statearr_25101[(10)] = inst_25066);

return statearr_25101;
})();
var statearr_25102_25121 = state_25096__$1;
(statearr_25102_25121[(2)] = null);

(statearr_25102_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (4))){
var inst_25066 = (state_25096[(10)]);
var state_25096__$1 = state_25096;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25096__$1,(7),inst_25066);
} else {
if((state_val_25097 === (6))){
var inst_25092 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25103_25122 = state_25096__$1;
(statearr_25103_25122[(2)] = inst_25092);

(statearr_25103_25122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (3))){
var inst_25094 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25096__$1,inst_25094);
} else {
if((state_val_25097 === (2))){
var inst_25066 = (state_25096[(10)]);
var inst_25068 = cljs.core.count.call(null,inst_25066);
var inst_25069 = (inst_25068 > (0));
var state_25096__$1 = state_25096;
if(cljs.core.truth_(inst_25069)){
var statearr_25105_25123 = state_25096__$1;
(statearr_25105_25123[(1)] = (4));

} else {
var statearr_25106_25124 = state_25096__$1;
(statearr_25106_25124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (11))){
var inst_25066 = (state_25096[(10)]);
var inst_25085 = (state_25096[(2)]);
var tmp25104 = inst_25066;
var inst_25066__$1 = tmp25104;
var state_25096__$1 = (function (){var statearr_25107 = state_25096;
(statearr_25107[(11)] = inst_25085);

(statearr_25107[(10)] = inst_25066__$1);

return statearr_25107;
})();
var statearr_25108_25125 = state_25096__$1;
(statearr_25108_25125[(2)] = null);

(statearr_25108_25125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (9))){
var inst_25076 = (state_25096[(7)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25096__$1,(11),out,inst_25076);
} else {
if((state_val_25097 === (5))){
var inst_25090 = cljs.core.async.close_BANG_.call(null,out);
var state_25096__$1 = state_25096;
var statearr_25109_25126 = state_25096__$1;
(statearr_25109_25126[(2)] = inst_25090);

(statearr_25109_25126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (10))){
var inst_25088 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25110_25127 = state_25096__$1;
(statearr_25110_25127[(2)] = inst_25088);

(statearr_25110_25127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (8))){
var inst_25076 = (state_25096[(7)]);
var inst_25066 = (state_25096[(10)]);
var inst_25075 = (state_25096[(8)]);
var inst_25077 = (state_25096[(9)]);
var inst_25080 = (function (){var cs = inst_25066;
var vec__25071 = inst_25075;
var v = inst_25076;
var c = inst_25077;
return (function (p1__25062_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25062_SHARP_);
});
})();
var inst_25081 = cljs.core.filterv.call(null,inst_25080,inst_25066);
var inst_25066__$1 = inst_25081;
var state_25096__$1 = (function (){var statearr_25111 = state_25096;
(statearr_25111[(10)] = inst_25066__$1);

return statearr_25111;
})();
var statearr_25112_25128 = state_25096__$1;
(statearr_25112_25128[(2)] = null);

(statearr_25112_25128[(1)] = (2));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25113[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25113[(1)] = (1));

return statearr_25113;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25096){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object)){
var ex__23602__auto__ = e25114;
var statearr_25115_25129 = state_25096;
(statearr_25115_25129[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25130 = state_25096;
state_25096 = G__25130;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25116 = f__23694__auto__.call(null);
(statearr_25116[(6)] = c__23693__auto___25118);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
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
var G__25132 = arguments.length;
switch (G__25132) {
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
var c__23693__auto___25177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25138 = (state_25156[(7)]);
var inst_25138__$1 = (state_25156[(2)]);
var inst_25139 = (inst_25138__$1 == null);
var inst_25140 = cljs.core.not.call(null,inst_25139);
var state_25156__$1 = (function (){var statearr_25158 = state_25156;
(statearr_25158[(7)] = inst_25138__$1);

return statearr_25158;
})();
if(inst_25140){
var statearr_25159_25178 = state_25156__$1;
(statearr_25159_25178[(1)] = (8));

} else {
var statearr_25160_25179 = state_25156__$1;
(statearr_25160_25179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var inst_25133 = (0);
var state_25156__$1 = (function (){var statearr_25161 = state_25156;
(statearr_25161[(8)] = inst_25133);

return statearr_25161;
})();
var statearr_25162_25180 = state_25156__$1;
(statearr_25162_25180[(2)] = null);

(statearr_25162_25180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25156__$1,(7),ch);
} else {
if((state_val_25157 === (6))){
var inst_25151 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25163_25181 = state_25156__$1;
(statearr_25163_25181[(2)] = inst_25151);

(statearr_25163_25181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var inst_25153 = (state_25156[(2)]);
var inst_25154 = cljs.core.async.close_BANG_.call(null,out);
var state_25156__$1 = (function (){var statearr_25164 = state_25156;
(statearr_25164[(9)] = inst_25153);

return statearr_25164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (2))){
var inst_25133 = (state_25156[(8)]);
var inst_25135 = (inst_25133 < n);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25135)){
var statearr_25165_25182 = state_25156__$1;
(statearr_25165_25182[(1)] = (4));

} else {
var statearr_25166_25183 = state_25156__$1;
(statearr_25166_25183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (11))){
var inst_25133 = (state_25156[(8)]);
var inst_25143 = (state_25156[(2)]);
var inst_25144 = (inst_25133 + (1));
var inst_25133__$1 = inst_25144;
var state_25156__$1 = (function (){var statearr_25167 = state_25156;
(statearr_25167[(8)] = inst_25133__$1);

(statearr_25167[(10)] = inst_25143);

return statearr_25167;
})();
var statearr_25168_25184 = state_25156__$1;
(statearr_25168_25184[(2)] = null);

(statearr_25168_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var state_25156__$1 = state_25156;
var statearr_25169_25185 = state_25156__$1;
(statearr_25169_25185[(2)] = null);

(statearr_25169_25185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (5))){
var state_25156__$1 = state_25156;
var statearr_25170_25186 = state_25156__$1;
(statearr_25170_25186[(2)] = null);

(statearr_25170_25186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25148 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25171_25187 = state_25156__$1;
(statearr_25171_25187[(2)] = inst_25148);

(statearr_25171_25187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25138 = (state_25156[(7)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(11),out,inst_25138);
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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25172[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25172[(1)] = (1));

return statearr_25172;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25156){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25173){if((e25173 instanceof Object)){
var ex__23602__auto__ = e25173;
var statearr_25174_25188 = state_25156;
(statearr_25174_25188[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25189 = state_25156;
state_25156 = G__25189;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25175 = f__23694__auto__.call(null);
(statearr_25175[(6)] = c__23693__auto___25177);

return statearr_25175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25191 = (function (f,ch,meta25192){
this.f = f;
this.ch = ch;
this.meta25192 = meta25192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25193,meta25192__$1){
var self__ = this;
var _25193__$1 = this;
return (new cljs.core.async.t_cljs$core$async25191(self__.f,self__.ch,meta25192__$1));
}));

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25193){
var self__ = this;
var _25193__$1 = this;
return self__.meta25192;
}));

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25194 = (function (f,ch,meta25192,_,fn1,meta25195){
this.f = f;
this.ch = ch;
this.meta25192 = meta25192;
this._ = _;
this.fn1 = fn1;
this.meta25195 = meta25195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25196,meta25195__$1){
var self__ = this;
var _25196__$1 = this;
return (new cljs.core.async.t_cljs$core$async25194(self__.f,self__.ch,self__.meta25192,self__._,self__.fn1,meta25195__$1));
}));

(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25196){
var self__ = this;
var _25196__$1 = this;
return self__.meta25195;
}));

(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25190_SHARP_){
return f1.call(null,(((p1__25190_SHARP_ == null))?null:self__.f.call(null,p1__25190_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25192","meta25192",-1259297386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25191","cljs.core.async/t_cljs$core$async25191",-778507174,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25195","meta25195",1529374887,null)], null);
}));

(cljs.core.async.t_cljs$core$async25194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25194");

(cljs.core.async.t_cljs$core$async25194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25194.
 */
cljs.core.async.__GT_t_cljs$core$async25194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25194(f__$1,ch__$1,meta25192__$1,___$2,fn1__$1,meta25195){
return (new cljs.core.async.t_cljs$core$async25194(f__$1,ch__$1,meta25192__$1,___$2,fn1__$1,meta25195));
});

}

return (new cljs.core.async.t_cljs$core$async25194(self__.f,self__.ch,self__.meta25192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25192","meta25192",-1259297386,null)], null);
}));

(cljs.core.async.t_cljs$core$async25191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25191");

(cljs.core.async.t_cljs$core$async25191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25191.
 */
cljs.core.async.__GT_t_cljs$core$async25191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25191(f__$1,ch__$1,meta25192){
return (new cljs.core.async.t_cljs$core$async25191(f__$1,ch__$1,meta25192));
});

}

return (new cljs.core.async.t_cljs$core$async25191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25197 = (function (f,ch,meta25198){
this.f = f;
this.ch = ch;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new cljs.core.async.t_cljs$core$async25197(self__.f,self__.ch,meta25198__$1));
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
}));

(cljs.core.async.t_cljs$core$async25197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25197");

(cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25197.
 */
cljs.core.async.__GT_t_cljs$core$async25197 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25197(f__$1,ch__$1,meta25198){
return (new cljs.core.async.t_cljs$core$async25197(f__$1,ch__$1,meta25198));
});

}

return (new cljs.core.async.t_cljs$core$async25197(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25200 = (function (p,ch,meta25201){
this.p = p;
this.ch = ch;
this.meta25201 = meta25201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25202,meta25201__$1){
var self__ = this;
var _25202__$1 = this;
return (new cljs.core.async.t_cljs$core$async25200(self__.p,self__.ch,meta25201__$1));
}));

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25202){
var self__ = this;
var _25202__$1 = this;
return self__.meta25201;
}));

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25201","meta25201",-1171344073,null)], null);
}));

(cljs.core.async.t_cljs$core$async25200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25200");

(cljs.core.async.t_cljs$core$async25200.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25200.
 */
cljs.core.async.__GT_t_cljs$core$async25200 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25200(p__$1,ch__$1,meta25201){
return (new cljs.core.async.t_cljs$core$async25200(p__$1,ch__$1,meta25201));
});

}

return (new cljs.core.async.t_cljs$core$async25200(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25204 = arguments.length;
switch (G__25204) {
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
var c__23693__auto___25244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25225){
var state_val_25226 = (state_25225[(1)]);
if((state_val_25226 === (7))){
var inst_25221 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25227_25245 = state_25225__$1;
(statearr_25227_25245[(2)] = inst_25221);

(statearr_25227_25245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (1))){
var state_25225__$1 = state_25225;
var statearr_25228_25246 = state_25225__$1;
(statearr_25228_25246[(2)] = null);

(statearr_25228_25246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (4))){
var inst_25207 = (state_25225[(7)]);
var inst_25207__$1 = (state_25225[(2)]);
var inst_25208 = (inst_25207__$1 == null);
var state_25225__$1 = (function (){var statearr_25229 = state_25225;
(statearr_25229[(7)] = inst_25207__$1);

return statearr_25229;
})();
if(cljs.core.truth_(inst_25208)){
var statearr_25230_25247 = state_25225__$1;
(statearr_25230_25247[(1)] = (5));

} else {
var statearr_25231_25248 = state_25225__$1;
(statearr_25231_25248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (6))){
var inst_25207 = (state_25225[(7)]);
var inst_25212 = p.call(null,inst_25207);
var state_25225__$1 = state_25225;
if(cljs.core.truth_(inst_25212)){
var statearr_25232_25249 = state_25225__$1;
(statearr_25232_25249[(1)] = (8));

} else {
var statearr_25233_25250 = state_25225__$1;
(statearr_25233_25250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (3))){
var inst_25223 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25225__$1,inst_25223);
} else {
if((state_val_25226 === (2))){
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25225__$1,(4),ch);
} else {
if((state_val_25226 === (11))){
var inst_25215 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25234_25251 = state_25225__$1;
(statearr_25234_25251[(2)] = inst_25215);

(statearr_25234_25251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (9))){
var state_25225__$1 = state_25225;
var statearr_25235_25252 = state_25225__$1;
(statearr_25235_25252[(2)] = null);

(statearr_25235_25252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (5))){
var inst_25210 = cljs.core.async.close_BANG_.call(null,out);
var state_25225__$1 = state_25225;
var statearr_25236_25253 = state_25225__$1;
(statearr_25236_25253[(2)] = inst_25210);

(statearr_25236_25253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (10))){
var inst_25218 = (state_25225[(2)]);
var state_25225__$1 = (function (){var statearr_25237 = state_25225;
(statearr_25237[(8)] = inst_25218);

return statearr_25237;
})();
var statearr_25238_25254 = state_25225__$1;
(statearr_25238_25254[(2)] = null);

(statearr_25238_25254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (8))){
var inst_25207 = (state_25225[(7)]);
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25225__$1,(11),out,inst_25207);
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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25239 = [null,null,null,null,null,null,null,null,null];
(statearr_25239[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25239[(1)] = (1));

return statearr_25239;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25225){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25240){if((e25240 instanceof Object)){
var ex__23602__auto__ = e25240;
var statearr_25241_25255 = state_25225;
(statearr_25241_25255[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25256 = state_25225;
state_25225 = G__25256;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25242 = f__23694__auto__.call(null);
(statearr_25242[(6)] = c__23693__auto___25244);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25258 = arguments.length;
switch (G__25258) {
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
var c__23693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25321){
var state_val_25322 = (state_25321[(1)]);
if((state_val_25322 === (7))){
var inst_25317 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25323_25361 = state_25321__$1;
(statearr_25323_25361[(2)] = inst_25317);

(statearr_25323_25361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (20))){
var inst_25287 = (state_25321[(7)]);
var inst_25298 = (state_25321[(2)]);
var inst_25299 = cljs.core.next.call(null,inst_25287);
var inst_25273 = inst_25299;
var inst_25274 = null;
var inst_25275 = (0);
var inst_25276 = (0);
var state_25321__$1 = (function (){var statearr_25324 = state_25321;
(statearr_25324[(8)] = inst_25298);

(statearr_25324[(9)] = inst_25276);

(statearr_25324[(10)] = inst_25273);

(statearr_25324[(11)] = inst_25274);

(statearr_25324[(12)] = inst_25275);

return statearr_25324;
})();
var statearr_25325_25362 = state_25321__$1;
(statearr_25325_25362[(2)] = null);

(statearr_25325_25362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (1))){
var state_25321__$1 = state_25321;
var statearr_25326_25363 = state_25321__$1;
(statearr_25326_25363[(2)] = null);

(statearr_25326_25363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (4))){
var inst_25262 = (state_25321[(13)]);
var inst_25262__$1 = (state_25321[(2)]);
var inst_25263 = (inst_25262__$1 == null);
var state_25321__$1 = (function (){var statearr_25327 = state_25321;
(statearr_25327[(13)] = inst_25262__$1);

return statearr_25327;
})();
if(cljs.core.truth_(inst_25263)){
var statearr_25328_25364 = state_25321__$1;
(statearr_25328_25364[(1)] = (5));

} else {
var statearr_25329_25365 = state_25321__$1;
(statearr_25329_25365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (15))){
var state_25321__$1 = state_25321;
var statearr_25333_25366 = state_25321__$1;
(statearr_25333_25366[(2)] = null);

(statearr_25333_25366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (21))){
var state_25321__$1 = state_25321;
var statearr_25334_25367 = state_25321__$1;
(statearr_25334_25367[(2)] = null);

(statearr_25334_25367[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (13))){
var inst_25276 = (state_25321[(9)]);
var inst_25273 = (state_25321[(10)]);
var inst_25274 = (state_25321[(11)]);
var inst_25275 = (state_25321[(12)]);
var inst_25283 = (state_25321[(2)]);
var inst_25284 = (inst_25276 + (1));
var tmp25330 = inst_25273;
var tmp25331 = inst_25274;
var tmp25332 = inst_25275;
var inst_25273__$1 = tmp25330;
var inst_25274__$1 = tmp25331;
var inst_25275__$1 = tmp25332;
var inst_25276__$1 = inst_25284;
var state_25321__$1 = (function (){var statearr_25335 = state_25321;
(statearr_25335[(9)] = inst_25276__$1);

(statearr_25335[(14)] = inst_25283);

(statearr_25335[(10)] = inst_25273__$1);

(statearr_25335[(11)] = inst_25274__$1);

(statearr_25335[(12)] = inst_25275__$1);

return statearr_25335;
})();
var statearr_25336_25368 = state_25321__$1;
(statearr_25336_25368[(2)] = null);

(statearr_25336_25368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (22))){
var state_25321__$1 = state_25321;
var statearr_25337_25369 = state_25321__$1;
(statearr_25337_25369[(2)] = null);

(statearr_25337_25369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (6))){
var inst_25262 = (state_25321[(13)]);
var inst_25271 = f.call(null,inst_25262);
var inst_25272 = cljs.core.seq.call(null,inst_25271);
var inst_25273 = inst_25272;
var inst_25274 = null;
var inst_25275 = (0);
var inst_25276 = (0);
var state_25321__$1 = (function (){var statearr_25338 = state_25321;
(statearr_25338[(9)] = inst_25276);

(statearr_25338[(10)] = inst_25273);

(statearr_25338[(11)] = inst_25274);

(statearr_25338[(12)] = inst_25275);

return statearr_25338;
})();
var statearr_25339_25370 = state_25321__$1;
(statearr_25339_25370[(2)] = null);

(statearr_25339_25370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (17))){
var inst_25287 = (state_25321[(7)]);
var inst_25291 = cljs.core.chunk_first.call(null,inst_25287);
var inst_25292 = cljs.core.chunk_rest.call(null,inst_25287);
var inst_25293 = cljs.core.count.call(null,inst_25291);
var inst_25273 = inst_25292;
var inst_25274 = inst_25291;
var inst_25275 = inst_25293;
var inst_25276 = (0);
var state_25321__$1 = (function (){var statearr_25340 = state_25321;
(statearr_25340[(9)] = inst_25276);

(statearr_25340[(10)] = inst_25273);

(statearr_25340[(11)] = inst_25274);

(statearr_25340[(12)] = inst_25275);

return statearr_25340;
})();
var statearr_25341_25371 = state_25321__$1;
(statearr_25341_25371[(2)] = null);

(statearr_25341_25371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (3))){
var inst_25319 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25321__$1,inst_25319);
} else {
if((state_val_25322 === (12))){
var inst_25307 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25342_25372 = state_25321__$1;
(statearr_25342_25372[(2)] = inst_25307);

(statearr_25342_25372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (2))){
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(4),in$);
} else {
if((state_val_25322 === (23))){
var inst_25315 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25343_25373 = state_25321__$1;
(statearr_25343_25373[(2)] = inst_25315);

(statearr_25343_25373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (19))){
var inst_25302 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25344_25374 = state_25321__$1;
(statearr_25344_25374[(2)] = inst_25302);

(statearr_25344_25374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (11))){
var inst_25273 = (state_25321[(10)]);
var inst_25287 = (state_25321[(7)]);
var inst_25287__$1 = cljs.core.seq.call(null,inst_25273);
var state_25321__$1 = (function (){var statearr_25345 = state_25321;
(statearr_25345[(7)] = inst_25287__$1);

return statearr_25345;
})();
if(inst_25287__$1){
var statearr_25346_25375 = state_25321__$1;
(statearr_25346_25375[(1)] = (14));

} else {
var statearr_25347_25376 = state_25321__$1;
(statearr_25347_25376[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (9))){
var inst_25309 = (state_25321[(2)]);
var inst_25310 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25321__$1 = (function (){var statearr_25348 = state_25321;
(statearr_25348[(15)] = inst_25309);

return statearr_25348;
})();
if(cljs.core.truth_(inst_25310)){
var statearr_25349_25377 = state_25321__$1;
(statearr_25349_25377[(1)] = (21));

} else {
var statearr_25350_25378 = state_25321__$1;
(statearr_25350_25378[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (5))){
var inst_25265 = cljs.core.async.close_BANG_.call(null,out);
var state_25321__$1 = state_25321;
var statearr_25351_25379 = state_25321__$1;
(statearr_25351_25379[(2)] = inst_25265);

(statearr_25351_25379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (14))){
var inst_25287 = (state_25321[(7)]);
var inst_25289 = cljs.core.chunked_seq_QMARK_.call(null,inst_25287);
var state_25321__$1 = state_25321;
if(inst_25289){
var statearr_25352_25380 = state_25321__$1;
(statearr_25352_25380[(1)] = (17));

} else {
var statearr_25353_25381 = state_25321__$1;
(statearr_25353_25381[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (16))){
var inst_25305 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25354_25382 = state_25321__$1;
(statearr_25354_25382[(2)] = inst_25305);

(statearr_25354_25382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (10))){
var inst_25276 = (state_25321[(9)]);
var inst_25274 = (state_25321[(11)]);
var inst_25281 = cljs.core._nth.call(null,inst_25274,inst_25276);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25321__$1,(13),out,inst_25281);
} else {
if((state_val_25322 === (18))){
var inst_25287 = (state_25321[(7)]);
var inst_25296 = cljs.core.first.call(null,inst_25287);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25321__$1,(20),out,inst_25296);
} else {
if((state_val_25322 === (8))){
var inst_25276 = (state_25321[(9)]);
var inst_25275 = (state_25321[(12)]);
var inst_25278 = (inst_25276 < inst_25275);
var inst_25279 = inst_25278;
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25279)){
var statearr_25355_25383 = state_25321__$1;
(statearr_25355_25383[(1)] = (10));

} else {
var statearr_25356_25384 = state_25321__$1;
(statearr_25356_25384[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____0 = (function (){
var statearr_25357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25357[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__);

(statearr_25357[(1)] = (1));

return statearr_25357;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____1 = (function (state_25321){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25358){if((e25358 instanceof Object)){
var ex__23602__auto__ = e25358;
var statearr_25359_25385 = state_25321;
(statearr_25359_25385[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25386 = state_25321;
state_25321 = G__25386;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__ = function(state_25321){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____1.call(this,state_25321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25360 = f__23694__auto__.call(null);
(statearr_25360[(6)] = c__23693__auto__);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));

return c__23693__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25388 = arguments.length;
switch (G__25388) {
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
var G__25391 = arguments.length;
switch (G__25391) {
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
var G__25394 = arguments.length;
switch (G__25394) {
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
var c__23693__auto___25441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25418){
var state_val_25419 = (state_25418[(1)]);
if((state_val_25419 === (7))){
var inst_25413 = (state_25418[(2)]);
var state_25418__$1 = state_25418;
var statearr_25420_25442 = state_25418__$1;
(statearr_25420_25442[(2)] = inst_25413);

(statearr_25420_25442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (1))){
var inst_25395 = null;
var state_25418__$1 = (function (){var statearr_25421 = state_25418;
(statearr_25421[(7)] = inst_25395);

return statearr_25421;
})();
var statearr_25422_25443 = state_25418__$1;
(statearr_25422_25443[(2)] = null);

(statearr_25422_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (4))){
var inst_25398 = (state_25418[(8)]);
var inst_25398__$1 = (state_25418[(2)]);
var inst_25399 = (inst_25398__$1 == null);
var inst_25400 = cljs.core.not.call(null,inst_25399);
var state_25418__$1 = (function (){var statearr_25423 = state_25418;
(statearr_25423[(8)] = inst_25398__$1);

return statearr_25423;
})();
if(inst_25400){
var statearr_25424_25444 = state_25418__$1;
(statearr_25424_25444[(1)] = (5));

} else {
var statearr_25425_25445 = state_25418__$1;
(statearr_25425_25445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (6))){
var state_25418__$1 = state_25418;
var statearr_25426_25446 = state_25418__$1;
(statearr_25426_25446[(2)] = null);

(statearr_25426_25446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (3))){
var inst_25415 = (state_25418[(2)]);
var inst_25416 = cljs.core.async.close_BANG_.call(null,out);
var state_25418__$1 = (function (){var statearr_25427 = state_25418;
(statearr_25427[(9)] = inst_25415);

return statearr_25427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25418__$1,inst_25416);
} else {
if((state_val_25419 === (2))){
var state_25418__$1 = state_25418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25418__$1,(4),ch);
} else {
if((state_val_25419 === (11))){
var inst_25398 = (state_25418[(8)]);
var inst_25407 = (state_25418[(2)]);
var inst_25395 = inst_25398;
var state_25418__$1 = (function (){var statearr_25428 = state_25418;
(statearr_25428[(7)] = inst_25395);

(statearr_25428[(10)] = inst_25407);

return statearr_25428;
})();
var statearr_25429_25447 = state_25418__$1;
(statearr_25429_25447[(2)] = null);

(statearr_25429_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (9))){
var inst_25398 = (state_25418[(8)]);
var state_25418__$1 = state_25418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25418__$1,(11),out,inst_25398);
} else {
if((state_val_25419 === (5))){
var inst_25398 = (state_25418[(8)]);
var inst_25395 = (state_25418[(7)]);
var inst_25402 = cljs.core._EQ_.call(null,inst_25398,inst_25395);
var state_25418__$1 = state_25418;
if(inst_25402){
var statearr_25431_25448 = state_25418__$1;
(statearr_25431_25448[(1)] = (8));

} else {
var statearr_25432_25449 = state_25418__$1;
(statearr_25432_25449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (10))){
var inst_25410 = (state_25418[(2)]);
var state_25418__$1 = state_25418;
var statearr_25433_25450 = state_25418__$1;
(statearr_25433_25450[(2)] = inst_25410);

(statearr_25433_25450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (8))){
var inst_25395 = (state_25418[(7)]);
var tmp25430 = inst_25395;
var inst_25395__$1 = tmp25430;
var state_25418__$1 = (function (){var statearr_25434 = state_25418;
(statearr_25434[(7)] = inst_25395__$1);

return statearr_25434;
})();
var statearr_25435_25451 = state_25418__$1;
(statearr_25435_25451[(2)] = null);

(statearr_25435_25451[(1)] = (2));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25436[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25436[(1)] = (1));

return statearr_25436;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25418){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25437){if((e25437 instanceof Object)){
var ex__23602__auto__ = e25437;
var statearr_25438_25452 = state_25418;
(statearr_25438_25452[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25453 = state_25418;
state_25418 = G__25453;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25439 = f__23694__auto__.call(null);
(statearr_25439[(6)] = c__23693__auto___25441);

return statearr_25439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25455 = arguments.length;
switch (G__25455) {
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
var c__23693__auto___25521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25493){
var state_val_25494 = (state_25493[(1)]);
if((state_val_25494 === (7))){
var inst_25489 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
var statearr_25495_25522 = state_25493__$1;
(statearr_25495_25522[(2)] = inst_25489);

(statearr_25495_25522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (1))){
var inst_25456 = (new Array(n));
var inst_25457 = inst_25456;
var inst_25458 = (0);
var state_25493__$1 = (function (){var statearr_25496 = state_25493;
(statearr_25496[(7)] = inst_25458);

(statearr_25496[(8)] = inst_25457);

return statearr_25496;
})();
var statearr_25497_25523 = state_25493__$1;
(statearr_25497_25523[(2)] = null);

(statearr_25497_25523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (4))){
var inst_25461 = (state_25493[(9)]);
var inst_25461__$1 = (state_25493[(2)]);
var inst_25462 = (inst_25461__$1 == null);
var inst_25463 = cljs.core.not.call(null,inst_25462);
var state_25493__$1 = (function (){var statearr_25498 = state_25493;
(statearr_25498[(9)] = inst_25461__$1);

return statearr_25498;
})();
if(inst_25463){
var statearr_25499_25524 = state_25493__$1;
(statearr_25499_25524[(1)] = (5));

} else {
var statearr_25500_25525 = state_25493__$1;
(statearr_25500_25525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (15))){
var inst_25483 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
var statearr_25501_25526 = state_25493__$1;
(statearr_25501_25526[(2)] = inst_25483);

(statearr_25501_25526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (13))){
var state_25493__$1 = state_25493;
var statearr_25502_25527 = state_25493__$1;
(statearr_25502_25527[(2)] = null);

(statearr_25502_25527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (6))){
var inst_25458 = (state_25493[(7)]);
var inst_25479 = (inst_25458 > (0));
var state_25493__$1 = state_25493;
if(cljs.core.truth_(inst_25479)){
var statearr_25503_25528 = state_25493__$1;
(statearr_25503_25528[(1)] = (12));

} else {
var statearr_25504_25529 = state_25493__$1;
(statearr_25504_25529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (3))){
var inst_25491 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25493__$1,inst_25491);
} else {
if((state_val_25494 === (12))){
var inst_25457 = (state_25493[(8)]);
var inst_25481 = cljs.core.vec.call(null,inst_25457);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25493__$1,(15),out,inst_25481);
} else {
if((state_val_25494 === (2))){
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25493__$1,(4),ch);
} else {
if((state_val_25494 === (11))){
var inst_25473 = (state_25493[(2)]);
var inst_25474 = (new Array(n));
var inst_25457 = inst_25474;
var inst_25458 = (0);
var state_25493__$1 = (function (){var statearr_25505 = state_25493;
(statearr_25505[(7)] = inst_25458);

(statearr_25505[(10)] = inst_25473);

(statearr_25505[(8)] = inst_25457);

return statearr_25505;
})();
var statearr_25506_25530 = state_25493__$1;
(statearr_25506_25530[(2)] = null);

(statearr_25506_25530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (9))){
var inst_25457 = (state_25493[(8)]);
var inst_25471 = cljs.core.vec.call(null,inst_25457);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25493__$1,(11),out,inst_25471);
} else {
if((state_val_25494 === (5))){
var inst_25461 = (state_25493[(9)]);
var inst_25458 = (state_25493[(7)]);
var inst_25466 = (state_25493[(11)]);
var inst_25457 = (state_25493[(8)]);
var inst_25465 = (inst_25457[inst_25458] = inst_25461);
var inst_25466__$1 = (inst_25458 + (1));
var inst_25467 = (inst_25466__$1 < n);
var state_25493__$1 = (function (){var statearr_25507 = state_25493;
(statearr_25507[(12)] = inst_25465);

(statearr_25507[(11)] = inst_25466__$1);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25467)){
var statearr_25508_25531 = state_25493__$1;
(statearr_25508_25531[(1)] = (8));

} else {
var statearr_25509_25532 = state_25493__$1;
(statearr_25509_25532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (14))){
var inst_25486 = (state_25493[(2)]);
var inst_25487 = cljs.core.async.close_BANG_.call(null,out);
var state_25493__$1 = (function (){var statearr_25511 = state_25493;
(statearr_25511[(13)] = inst_25486);

return statearr_25511;
})();
var statearr_25512_25533 = state_25493__$1;
(statearr_25512_25533[(2)] = inst_25487);

(statearr_25512_25533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (10))){
var inst_25477 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
var statearr_25513_25534 = state_25493__$1;
(statearr_25513_25534[(2)] = inst_25477);

(statearr_25513_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (8))){
var inst_25466 = (state_25493[(11)]);
var inst_25457 = (state_25493[(8)]);
var tmp25510 = inst_25457;
var inst_25457__$1 = tmp25510;
var inst_25458 = inst_25466;
var state_25493__$1 = (function (){var statearr_25514 = state_25493;
(statearr_25514[(7)] = inst_25458);

(statearr_25514[(8)] = inst_25457__$1);

return statearr_25514;
})();
var statearr_25515_25535 = state_25493__$1;
(statearr_25515_25535[(2)] = null);

(statearr_25515_25535[(1)] = (2));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25516[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25516[(1)] = (1));

return statearr_25516;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25493){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25517){if((e25517 instanceof Object)){
var ex__23602__auto__ = e25517;
var statearr_25518_25536 = state_25493;
(statearr_25518_25536[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25493;
state_25493 = G__25537;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25519 = f__23694__auto__.call(null);
(statearr_25519[(6)] = c__23693__auto___25521);

return statearr_25519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25539 = arguments.length;
switch (G__25539) {
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
var c__23693__auto___25609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23694__auto__ = (function (){var switch__23598__auto__ = (function (state_25581){
var state_val_25582 = (state_25581[(1)]);
if((state_val_25582 === (7))){
var inst_25577 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25583_25610 = state_25581__$1;
(statearr_25583_25610[(2)] = inst_25577);

(statearr_25583_25610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (1))){
var inst_25540 = [];
var inst_25541 = inst_25540;
var inst_25542 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25581__$1 = (function (){var statearr_25584 = state_25581;
(statearr_25584[(7)] = inst_25541);

(statearr_25584[(8)] = inst_25542);

return statearr_25584;
})();
var statearr_25585_25611 = state_25581__$1;
(statearr_25585_25611[(2)] = null);

(statearr_25585_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (4))){
var inst_25545 = (state_25581[(9)]);
var inst_25545__$1 = (state_25581[(2)]);
var inst_25546 = (inst_25545__$1 == null);
var inst_25547 = cljs.core.not.call(null,inst_25546);
var state_25581__$1 = (function (){var statearr_25586 = state_25581;
(statearr_25586[(9)] = inst_25545__$1);

return statearr_25586;
})();
if(inst_25547){
var statearr_25587_25612 = state_25581__$1;
(statearr_25587_25612[(1)] = (5));

} else {
var statearr_25588_25613 = state_25581__$1;
(statearr_25588_25613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (15))){
var inst_25571 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25589_25614 = state_25581__$1;
(statearr_25589_25614[(2)] = inst_25571);

(statearr_25589_25614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (13))){
var state_25581__$1 = state_25581;
var statearr_25590_25615 = state_25581__$1;
(statearr_25590_25615[(2)] = null);

(statearr_25590_25615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (6))){
var inst_25541 = (state_25581[(7)]);
var inst_25566 = inst_25541.length;
var inst_25567 = (inst_25566 > (0));
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25567)){
var statearr_25591_25616 = state_25581__$1;
(statearr_25591_25616[(1)] = (12));

} else {
var statearr_25592_25617 = state_25581__$1;
(statearr_25592_25617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (3))){
var inst_25579 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25581__$1,inst_25579);
} else {
if((state_val_25582 === (12))){
var inst_25541 = (state_25581[(7)]);
var inst_25569 = cljs.core.vec.call(null,inst_25541);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25581__$1,(15),out,inst_25569);
} else {
if((state_val_25582 === (2))){
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(4),ch);
} else {
if((state_val_25582 === (11))){
var inst_25545 = (state_25581[(9)]);
var inst_25549 = (state_25581[(10)]);
var inst_25559 = (state_25581[(2)]);
var inst_25560 = [];
var inst_25561 = inst_25560.push(inst_25545);
var inst_25541 = inst_25560;
var inst_25542 = inst_25549;
var state_25581__$1 = (function (){var statearr_25593 = state_25581;
(statearr_25593[(7)] = inst_25541);

(statearr_25593[(8)] = inst_25542);

(statearr_25593[(11)] = inst_25559);

(statearr_25593[(12)] = inst_25561);

return statearr_25593;
})();
var statearr_25594_25618 = state_25581__$1;
(statearr_25594_25618[(2)] = null);

(statearr_25594_25618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (9))){
var inst_25541 = (state_25581[(7)]);
var inst_25557 = cljs.core.vec.call(null,inst_25541);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25581__$1,(11),out,inst_25557);
} else {
if((state_val_25582 === (5))){
var inst_25545 = (state_25581[(9)]);
var inst_25542 = (state_25581[(8)]);
var inst_25549 = (state_25581[(10)]);
var inst_25549__$1 = f.call(null,inst_25545);
var inst_25550 = cljs.core._EQ_.call(null,inst_25549__$1,inst_25542);
var inst_25551 = cljs.core.keyword_identical_QMARK_.call(null,inst_25542,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25552 = ((inst_25550) || (inst_25551));
var state_25581__$1 = (function (){var statearr_25595 = state_25581;
(statearr_25595[(10)] = inst_25549__$1);

return statearr_25595;
})();
if(cljs.core.truth_(inst_25552)){
var statearr_25596_25619 = state_25581__$1;
(statearr_25596_25619[(1)] = (8));

} else {
var statearr_25597_25620 = state_25581__$1;
(statearr_25597_25620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (14))){
var inst_25574 = (state_25581[(2)]);
var inst_25575 = cljs.core.async.close_BANG_.call(null,out);
var state_25581__$1 = (function (){var statearr_25599 = state_25581;
(statearr_25599[(13)] = inst_25574);

return statearr_25599;
})();
var statearr_25600_25621 = state_25581__$1;
(statearr_25600_25621[(2)] = inst_25575);

(statearr_25600_25621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (10))){
var inst_25564 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25601_25622 = state_25581__$1;
(statearr_25601_25622[(2)] = inst_25564);

(statearr_25601_25622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (8))){
var inst_25545 = (state_25581[(9)]);
var inst_25541 = (state_25581[(7)]);
var inst_25549 = (state_25581[(10)]);
var inst_25554 = inst_25541.push(inst_25545);
var tmp25598 = inst_25541;
var inst_25541__$1 = tmp25598;
var inst_25542 = inst_25549;
var state_25581__$1 = (function (){var statearr_25602 = state_25581;
(statearr_25602[(7)] = inst_25541__$1);

(statearr_25602[(8)] = inst_25542);

(statearr_25602[(14)] = inst_25554);

return statearr_25602;
})();
var statearr_25603_25623 = state_25581__$1;
(statearr_25603_25623[(2)] = null);

(statearr_25603_25623[(1)] = (2));


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
var cljs$core$async$state_machine__23599__auto__ = null;
var cljs$core$async$state_machine__23599__auto____0 = (function (){
var statearr_25604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25604[(0)] = cljs$core$async$state_machine__23599__auto__);

(statearr_25604[(1)] = (1));

return statearr_25604;
});
var cljs$core$async$state_machine__23599__auto____1 = (function (state_25581){
while(true){
var ret_value__23600__auto__ = (function (){try{while(true){
var result__23601__auto__ = switch__23598__auto__.call(null,state_25581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23601__auto__;
}
break;
}
}catch (e25605){if((e25605 instanceof Object)){
var ex__23602__auto__ = e25605;
var statearr_25606_25624 = state_25581;
(statearr_25606_25624[(5)] = ex__23602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25625 = state_25581;
state_25581 = G__25625;
continue;
} else {
return ret_value__23600__auto__;
}
break;
}
});
cljs$core$async$state_machine__23599__auto__ = function(state_25581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23599__auto____1.call(this,state_25581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23599__auto____0;
cljs$core$async$state_machine__23599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23599__auto____1;
return cljs$core$async$state_machine__23599__auto__;
})()
})();
var state__23695__auto__ = (function (){var statearr_25607 = f__23694__auto__.call(null);
(statearr_25607[(6)] = c__23693__auto___25609);

return statearr_25607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23695__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1637141750195
