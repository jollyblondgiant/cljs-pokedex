goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32748 = arguments.length;
switch (G__32748) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32749 = (function (f,blockable,meta32750){
this.f = f;
this.blockable = blockable;
this.meta32750 = meta32750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32751,meta32750__$1){
var self__ = this;
var _32751__$1 = this;
return (new cljs.core.async.t_cljs$core$async32749(self__.f,self__.blockable,meta32750__$1));
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32751){
var self__ = this;
var _32751__$1 = this;
return self__.meta32750;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32750","meta32750",1836167759,null)], null);
}));

(cljs.core.async.t_cljs$core$async32749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32749");

(cljs.core.async.t_cljs$core$async32749.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32749.
 */
cljs.core.async.__GT_t_cljs$core$async32749 = (function cljs$core$async$__GT_t_cljs$core$async32749(f__$1,blockable__$1,meta32750){
return (new cljs.core.async.t_cljs$core$async32749(f__$1,blockable__$1,meta32750));
});

}

return (new cljs.core.async.t_cljs$core$async32749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__32758 = arguments.length;
switch (G__32758) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__32761 = arguments.length;
switch (G__32761) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__32765 = arguments.length;
switch (G__32765) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34900 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34900) : fn1.call(null,val_34900));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34900) : fn1.call(null,val_34900));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__32769 = arguments.length;
switch (G__32769) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___34911 = n;
var x_34912 = (0);
while(true){
if((x_34912 < n__4695__auto___34911)){
(a[x_34912] = x_34912);

var G__34913 = (x_34912 + (1));
x_34912 = G__34913;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32773 = (function (flag,meta32774){
this.flag = flag;
this.meta32774 = meta32774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32775,meta32774__$1){
var self__ = this;
var _32775__$1 = this;
return (new cljs.core.async.t_cljs$core$async32773(self__.flag,meta32774__$1));
}));

(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32775){
var self__ = this;
var _32775__$1 = this;
return self__.meta32774;
}));

(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32774","meta32774",2036694937,null)], null);
}));

(cljs.core.async.t_cljs$core$async32773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32773");

(cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32773.
 */
cljs.core.async.__GT_t_cljs$core$async32773 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32773(flag__$1,meta32774){
return (new cljs.core.async.t_cljs$core$async32773(flag__$1,meta32774));
});

}

return (new cljs.core.async.t_cljs$core$async32773(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32779 = (function (flag,cb,meta32780){
this.flag = flag;
this.cb = cb;
this.meta32780 = meta32780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32781,meta32780__$1){
var self__ = this;
var _32781__$1 = this;
return (new cljs.core.async.t_cljs$core$async32779(self__.flag,self__.cb,meta32780__$1));
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32781){
var self__ = this;
var _32781__$1 = this;
return self__.meta32780;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null)], null);
}));

(cljs.core.async.t_cljs$core$async32779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32779");

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32779.
 */
cljs.core.async.__GT_t_cljs$core$async32779 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32779(flag__$1,cb__$1,meta32780){
return (new cljs.core.async.t_cljs$core$async32779(flag__$1,cb__$1,meta32780));
});

}

return (new cljs.core.async.t_cljs$core$async32779(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32784_SHARP_){
var G__32787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32784_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32787) : fret.call(null,G__32787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32785_SHARP_){
var G__32788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32785_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32788) : fret.call(null,G__32788));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34914 = (i + (1));
i = G__34914;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4824__auto__ = [];
var len__4818__auto___34915 = arguments.length;
var i__4819__auto___34916 = (0);
while(true){
if((i__4819__auto___34916 < len__4818__auto___34915)){
args__4824__auto__.push((arguments[i__4819__auto___34916]));

var G__34917 = (i__4819__auto___34916 + (1));
i__4819__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32793){
var map__32794 = p__32793;
var map__32794__$1 = cljs.core.__destructure_map(map__32794);
var opts = map__32794__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32790){
var G__32791 = cljs.core.first(seq32790);
var seq32790__$1 = cljs.core.next(seq32790);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32791,seq32790__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__32797 = arguments.length;
switch (G__32797) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32678__auto___34919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_32830){
var state_val_32831 = (state_32830[(1)]);
if((state_val_32831 === (7))){
var inst_32824 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32832_34920 = state_32830__$1;
(statearr_32832_34920[(2)] = inst_32824);

(statearr_32832_34920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (1))){
var state_32830__$1 = state_32830;
var statearr_32833_34921 = state_32830__$1;
(statearr_32833_34921[(2)] = null);

(statearr_32833_34921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (4))){
var inst_32804 = (state_32830[(7)]);
var inst_32804__$1 = (state_32830[(2)]);
var inst_32806 = (inst_32804__$1 == null);
var state_32830__$1 = (function (){var statearr_32836 = state_32830;
(statearr_32836[(7)] = inst_32804__$1);

return statearr_32836;
})();
if(cljs.core.truth_(inst_32806)){
var statearr_32837_34922 = state_32830__$1;
(statearr_32837_34922[(1)] = (5));

} else {
var statearr_32838_34923 = state_32830__$1;
(statearr_32838_34923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (13))){
var state_32830__$1 = state_32830;
var statearr_32839_34924 = state_32830__$1;
(statearr_32839_34924[(2)] = null);

(statearr_32839_34924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (6))){
var inst_32804 = (state_32830[(7)]);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32830__$1,(11),to,inst_32804);
} else {
if((state_val_32831 === (3))){
var inst_32826 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32830__$1,inst_32826);
} else {
if((state_val_32831 === (12))){
var state_32830__$1 = state_32830;
var statearr_32840_34925 = state_32830__$1;
(statearr_32840_34925[(2)] = null);

(statearr_32840_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (2))){
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32830__$1,(4),from);
} else {
if((state_val_32831 === (11))){
var inst_32817 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
if(cljs.core.truth_(inst_32817)){
var statearr_32841_34926 = state_32830__$1;
(statearr_32841_34926[(1)] = (12));

} else {
var statearr_32842_34927 = state_32830__$1;
(statearr_32842_34927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (9))){
var state_32830__$1 = state_32830;
var statearr_32843_34928 = state_32830__$1;
(statearr_32843_34928[(2)] = null);

(statearr_32843_34928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (5))){
var state_32830__$1 = state_32830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32846_34929 = state_32830__$1;
(statearr_32846_34929[(1)] = (8));

} else {
var statearr_32848_34930 = state_32830__$1;
(statearr_32848_34930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (14))){
var inst_32822 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32849_34931 = state_32830__$1;
(statearr_32849_34931[(2)] = inst_32822);

(statearr_32849_34931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (10))){
var inst_32814 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32853_34934 = state_32830__$1;
(statearr_32853_34934[(2)] = inst_32814);

(statearr_32853_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (8))){
var inst_32809 = cljs.core.async.close_BANG_(to);
var state_32830__$1 = state_32830;
var statearr_32857_34935 = state_32830__$1;
(statearr_32857_34935[(2)] = inst_32809);

(statearr_32857_34935[(1)] = (10));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_32858 = [null,null,null,null,null,null,null,null];
(statearr_32858[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_32858[(1)] = (1));

return statearr_32858;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_32830){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_32830);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e32859){var ex__32113__auto__ = e32859;
var statearr_32861_34937 = state_32830;
(statearr_32861_34937[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_32830[(4)]))){
var statearr_32862_34938 = state_32830;
(statearr_32862_34938[(1)] = cljs.core.first((state_32830[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34940 = state_32830;
state_32830 = G__34940;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_32830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_32830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_32867 = f__32679__auto__();
(statearr_32867[(6)] = c__32678__auto___34919);

return statearr_32867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32883){
var vec__32884 = p__32883;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(1),null);
var job = vec__32884;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32678__auto___34942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_32895){
var state_val_32896 = (state_32895[(1)]);
if((state_val_32896 === (1))){
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32895__$1,(2),res,v);
} else {
if((state_val_32896 === (2))){
var inst_32892 = (state_32895[(2)]);
var inst_32893 = cljs.core.async.close_BANG_(res);
var state_32895__$1 = (function (){var statearr_32902 = state_32895;
(statearr_32902[(7)] = inst_32892);

return statearr_32902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32895__$1,inst_32893);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_32906 = [null,null,null,null,null,null,null,null];
(statearr_32906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__);

(statearr_32906[(1)] = (1));

return statearr_32906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1 = (function (state_32895){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_32895);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e32908){var ex__32113__auto__ = e32908;
var statearr_32911_34943 = state_32895;
(statearr_32911_34943[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_32895[(4)]))){
var statearr_32913_34944 = state_32895;
(statearr_32913_34944[(1)] = cljs.core.first((state_32895[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34945 = state_32895;
state_32895 = G__34945;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_32918 = f__32679__auto__();
(statearr_32918[(6)] = c__32678__auto___34942);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32921){
var vec__32924 = p__32921;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(1),null);
var job = vec__32924;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___34946 = n;
var __34947 = (0);
while(true){
if((__34947 < n__4695__auto___34946)){
var G__32931_34948 = type;
var G__32931_34949__$1 = (((G__32931_34948 instanceof cljs.core.Keyword))?G__32931_34948.fqn:null);
switch (G__32931_34949__$1) {
case "compute":
var c__32678__auto___34951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34947,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = ((function (__34947,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function (state_32949){
var state_val_32950 = (state_32949[(1)]);
if((state_val_32950 === (1))){
var state_32949__$1 = state_32949;
var statearr_32955_34952 = state_32949__$1;
(statearr_32955_34952[(2)] = null);

(statearr_32955_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (2))){
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32949__$1,(4),jobs);
} else {
if((state_val_32950 === (3))){
var inst_32947 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32949__$1,inst_32947);
} else {
if((state_val_32950 === (4))){
var inst_32938 = (state_32949[(2)]);
var inst_32939 = process(inst_32938);
var state_32949__$1 = state_32949;
if(cljs.core.truth_(inst_32939)){
var statearr_32961_34953 = state_32949__$1;
(statearr_32961_34953[(1)] = (5));

} else {
var statearr_32964_34954 = state_32949__$1;
(statearr_32964_34954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (5))){
var state_32949__$1 = state_32949;
var statearr_32965_34955 = state_32949__$1;
(statearr_32965_34955[(2)] = null);

(statearr_32965_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (6))){
var state_32949__$1 = state_32949;
var statearr_32967_34956 = state_32949__$1;
(statearr_32967_34956[(2)] = null);

(statearr_32967_34956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (7))){
var inst_32945 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32971_34957 = state_32949__$1;
(statearr_32971_34957[(2)] = inst_32945);

(statearr_32971_34957[(1)] = (3));


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
});})(__34947,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
;
return ((function (__34947,switch__32109__auto__,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null];
(statearr_32973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1 = (function (state_32949){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_32949);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e32977){var ex__32113__auto__ = e32977;
var statearr_32978_34958 = state_32949;
(statearr_32978_34958[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_32949[(4)]))){
var statearr_32980_34959 = state_32949;
(statearr_32980_34959[(1)] = cljs.core.first((state_32949[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34960 = state_32949;
state_32949 = G__34960;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = function(state_32949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1.call(this,state_32949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__;
})()
;})(__34947,switch__32109__auto__,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
})();
var state__32680__auto__ = (function (){var statearr_32984 = f__32679__auto__();
(statearr_32984[(6)] = c__32678__auto___34951);

return statearr_32984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
});})(__34947,c__32678__auto___34951,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
);


break;
case "async":
var c__32678__auto___34961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34947,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = ((function (__34947,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function (state_33003){
var state_val_33004 = (state_33003[(1)]);
if((state_val_33004 === (1))){
var state_33003__$1 = state_33003;
var statearr_33009_34962 = state_33003__$1;
(statearr_33009_34962[(2)] = null);

(statearr_33009_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (2))){
var state_33003__$1 = state_33003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33003__$1,(4),jobs);
} else {
if((state_val_33004 === (3))){
var inst_33001 = (state_33003[(2)]);
var state_33003__$1 = state_33003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33003__$1,inst_33001);
} else {
if((state_val_33004 === (4))){
var inst_32991 = (state_33003[(2)]);
var inst_32992 = async(inst_32991);
var state_33003__$1 = state_33003;
if(cljs.core.truth_(inst_32992)){
var statearr_33016_34963 = state_33003__$1;
(statearr_33016_34963[(1)] = (5));

} else {
var statearr_33019_34964 = state_33003__$1;
(statearr_33019_34964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (5))){
var state_33003__$1 = state_33003;
var statearr_33020_34965 = state_33003__$1;
(statearr_33020_34965[(2)] = null);

(statearr_33020_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (6))){
var state_33003__$1 = state_33003;
var statearr_33023_34966 = state_33003__$1;
(statearr_33023_34966[(2)] = null);

(statearr_33023_34966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (7))){
var inst_32998 = (state_33003[(2)]);
var state_33003__$1 = state_33003;
var statearr_33027_34967 = state_33003__$1;
(statearr_33027_34967[(2)] = inst_32998);

(statearr_33027_34967[(1)] = (3));


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
});})(__34947,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
;
return ((function (__34947,switch__32109__auto__,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_33029 = [null,null,null,null,null,null,null];
(statearr_33029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__);

(statearr_33029[(1)] = (1));

return statearr_33029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1 = (function (state_33003){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33003);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33033){var ex__32113__auto__ = e33033;
var statearr_33034_34969 = state_33003;
(statearr_33034_34969[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33003[(4)]))){
var statearr_33036_34970 = state_33003;
(statearr_33036_34970[(1)] = cljs.core.first((state_33003[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_33003;
state_33003 = G__34971;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = function(state_33003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1.call(this,state_33003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__;
})()
;})(__34947,switch__32109__auto__,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
})();
var state__32680__auto__ = (function (){var statearr_33040 = f__32679__auto__();
(statearr_33040[(6)] = c__32678__auto___34961);

return statearr_33040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
});})(__34947,c__32678__auto___34961,G__32931_34948,G__32931_34949__$1,n__4695__auto___34946,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32931_34949__$1)].join('')));

}

var G__34972 = (__34947 + (1));
__34947 = G__34972;
continue;
} else {
}
break;
}

var c__32678__auto___34973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (7))){
var inst_33071 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33088_34974 = state_33078__$1;
(statearr_33088_34974[(2)] = inst_33071);

(statearr_33088_34974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
var statearr_33090_34975 = state_33078__$1;
(statearr_33090_34975[(2)] = null);

(statearr_33090_34975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (4))){
var inst_33048 = (state_33078[(7)]);
var inst_33048__$1 = (state_33078[(2)]);
var inst_33050 = (inst_33048__$1 == null);
var state_33078__$1 = (function (){var statearr_33097 = state_33078;
(statearr_33097[(7)] = inst_33048__$1);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33050)){
var statearr_33098_34977 = state_33078__$1;
(statearr_33098_34977[(1)] = (5));

} else {
var statearr_33100_34978 = state_33078__$1;
(statearr_33100_34978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (6))){
var inst_33048 = (state_33078[(7)]);
var inst_33054 = (state_33078[(8)]);
var inst_33054__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33060 = [inst_33048,inst_33054__$1];
var inst_33061 = (new cljs.core.PersistentVector(null,2,(5),inst_33058,inst_33060,null));
var state_33078__$1 = (function (){var statearr_33104 = state_33078;
(statearr_33104[(8)] = inst_33054__$1);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33078__$1,(8),jobs,inst_33061);
} else {
if((state_val_33079 === (3))){
var inst_33073 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33078__$1,inst_33073);
} else {
if((state_val_33079 === (2))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33078__$1,(4),from);
} else {
if((state_val_33079 === (9))){
var inst_33068 = (state_33078[(2)]);
var state_33078__$1 = (function (){var statearr_33109 = state_33078;
(statearr_33109[(9)] = inst_33068);

return statearr_33109;
})();
var statearr_33112_34980 = state_33078__$1;
(statearr_33112_34980[(2)] = null);

(statearr_33112_34980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (5))){
var inst_33052 = cljs.core.async.close_BANG_(jobs);
var state_33078__$1 = state_33078;
var statearr_33114_34981 = state_33078__$1;
(statearr_33114_34981[(2)] = inst_33052);

(statearr_33114_34981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (8))){
var inst_33054 = (state_33078[(8)]);
var inst_33063 = (state_33078[(2)]);
var state_33078__$1 = (function (){var statearr_33118 = state_33078;
(statearr_33118[(10)] = inst_33063);

return statearr_33118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33078__$1,(9),results,inst_33054);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_33121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__);

(statearr_33121[(1)] = (1));

return statearr_33121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1 = (function (state_33078){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33078);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33125){var ex__32113__auto__ = e33125;
var statearr_33126_34982 = state_33078;
(statearr_33126_34982[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33078[(4)]))){
var statearr_33128_34983 = state_33078;
(statearr_33128_34983[(1)] = cljs.core.first((state_33078[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34984 = state_33078;
state_33078 = G__34984;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33132 = f__32679__auto__();
(statearr_33132[(6)] = c__32678__auto___34973);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


var c__32678__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33184){
var state_val_33185 = (state_33184[(1)]);
if((state_val_33185 === (7))){
var inst_33177 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33189_34987 = state_33184__$1;
(statearr_33189_34987[(2)] = inst_33177);

(statearr_33189_34987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (20))){
var state_33184__$1 = state_33184;
var statearr_33190_34988 = state_33184__$1;
(statearr_33190_34988[(2)] = null);

(statearr_33190_34988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (1))){
var state_33184__$1 = state_33184;
var statearr_33191_34993 = state_33184__$1;
(statearr_33191_34993[(2)] = null);

(statearr_33191_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (4))){
var inst_33139 = (state_33184[(7)]);
var inst_33139__$1 = (state_33184[(2)]);
var inst_33140 = (inst_33139__$1 == null);
var state_33184__$1 = (function (){var statearr_33192 = state_33184;
(statearr_33192[(7)] = inst_33139__$1);

return statearr_33192;
})();
if(cljs.core.truth_(inst_33140)){
var statearr_33193_34994 = state_33184__$1;
(statearr_33193_34994[(1)] = (5));

} else {
var statearr_33194_34995 = state_33184__$1;
(statearr_33194_34995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (15))){
var inst_33155 = (state_33184[(8)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33184__$1,(18),to,inst_33155);
} else {
if((state_val_33185 === (21))){
var inst_33171 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33195_34996 = state_33184__$1;
(statearr_33195_34996[(2)] = inst_33171);

(statearr_33195_34996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (13))){
var inst_33174 = (state_33184[(2)]);
var state_33184__$1 = (function (){var statearr_33196 = state_33184;
(statearr_33196[(9)] = inst_33174);

return statearr_33196;
})();
var statearr_33197_34997 = state_33184__$1;
(statearr_33197_34997[(2)] = null);

(statearr_33197_34997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (6))){
var inst_33139 = (state_33184[(7)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33184__$1,(11),inst_33139);
} else {
if((state_val_33185 === (17))){
var inst_33165 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
if(cljs.core.truth_(inst_33165)){
var statearr_33198_35002 = state_33184__$1;
(statearr_33198_35002[(1)] = (19));

} else {
var statearr_33199_35003 = state_33184__$1;
(statearr_33199_35003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (3))){
var inst_33179 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33184__$1,inst_33179);
} else {
if((state_val_33185 === (12))){
var inst_33150 = (state_33184[(10)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33184__$1,(14),inst_33150);
} else {
if((state_val_33185 === (2))){
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33184__$1,(4),results);
} else {
if((state_val_33185 === (19))){
var state_33184__$1 = state_33184;
var statearr_33200_35005 = state_33184__$1;
(statearr_33200_35005[(2)] = null);

(statearr_33200_35005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (11))){
var inst_33150 = (state_33184[(2)]);
var state_33184__$1 = (function (){var statearr_33201 = state_33184;
(statearr_33201[(10)] = inst_33150);

return statearr_33201;
})();
var statearr_33202_35007 = state_33184__$1;
(statearr_33202_35007[(2)] = null);

(statearr_33202_35007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (9))){
var state_33184__$1 = state_33184;
var statearr_33203_35008 = state_33184__$1;
(statearr_33203_35008[(2)] = null);

(statearr_33203_35008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (5))){
var state_33184__$1 = state_33184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33204_35009 = state_33184__$1;
(statearr_33204_35009[(1)] = (8));

} else {
var statearr_33205_35010 = state_33184__$1;
(statearr_33205_35010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (14))){
var inst_33158 = (state_33184[(11)]);
var inst_33155 = (state_33184[(8)]);
var inst_33155__$1 = (state_33184[(2)]);
var inst_33157 = (inst_33155__$1 == null);
var inst_33158__$1 = cljs.core.not(inst_33157);
var state_33184__$1 = (function (){var statearr_33206 = state_33184;
(statearr_33206[(11)] = inst_33158__$1);

(statearr_33206[(8)] = inst_33155__$1);

return statearr_33206;
})();
if(inst_33158__$1){
var statearr_33207_35011 = state_33184__$1;
(statearr_33207_35011[(1)] = (15));

} else {
var statearr_33208_35012 = state_33184__$1;
(statearr_33208_35012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (16))){
var inst_33158 = (state_33184[(11)]);
var state_33184__$1 = state_33184;
var statearr_33211_35013 = state_33184__$1;
(statearr_33211_35013[(2)] = inst_33158);

(statearr_33211_35013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (10))){
var inst_33147 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33212_35014 = state_33184__$1;
(statearr_33212_35014[(2)] = inst_33147);

(statearr_33212_35014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (18))){
var inst_33162 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33213_35015 = state_33184__$1;
(statearr_33213_35015[(2)] = inst_33162);

(statearr_33213_35015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (8))){
var inst_33143 = cljs.core.async.close_BANG_(to);
var state_33184__$1 = state_33184;
var statearr_33218_35016 = state_33184__$1;
(statearr_33218_35016[(2)] = inst_33143);

(statearr_33218_35016[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1 = (function (state_33184){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33184);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33225){var ex__32113__auto__ = e33225;
var statearr_33226_35017 = state_33184;
(statearr_33226_35017[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33184[(4)]))){
var statearr_33227_35018 = state_33184;
(statearr_33227_35018[(1)] = cljs.core.first((state_33184[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_33184;
state_33184 = G__35019;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__ = function(state_33184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1.call(this,state_33184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33228 = f__32679__auto__();
(statearr_33228[(6)] = c__32678__auto__);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

return c__32678__auto__;
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
var G__33238 = arguments.length;
switch (G__33238) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__33248 = arguments.length;
switch (G__33248) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__33259 = arguments.length;
switch (G__33259) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32678__auto___35025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33296){
var state_val_33298 = (state_33296[(1)]);
if((state_val_33298 === (7))){
var inst_33289 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33302_35026 = state_33296__$1;
(statearr_33302_35026[(2)] = inst_33289);

(statearr_33302_35026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (1))){
var state_33296__$1 = state_33296;
var statearr_33304_35027 = state_33296__$1;
(statearr_33304_35027[(2)] = null);

(statearr_33304_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (4))){
var inst_33270 = (state_33296[(7)]);
var inst_33270__$1 = (state_33296[(2)]);
var inst_33271 = (inst_33270__$1 == null);
var state_33296__$1 = (function (){var statearr_33305 = state_33296;
(statearr_33305[(7)] = inst_33270__$1);

return statearr_33305;
})();
if(cljs.core.truth_(inst_33271)){
var statearr_33306_35029 = state_33296__$1;
(statearr_33306_35029[(1)] = (5));

} else {
var statearr_33308_35030 = state_33296__$1;
(statearr_33308_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (13))){
var state_33296__$1 = state_33296;
var statearr_33309_35031 = state_33296__$1;
(statearr_33309_35031[(2)] = null);

(statearr_33309_35031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (6))){
var inst_33270 = (state_33296[(7)]);
var inst_33276 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33270) : p.call(null,inst_33270));
var state_33296__$1 = state_33296;
if(cljs.core.truth_(inst_33276)){
var statearr_33310_35033 = state_33296__$1;
(statearr_33310_35033[(1)] = (9));

} else {
var statearr_33311_35034 = state_33296__$1;
(statearr_33311_35034[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (3))){
var inst_33294 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33296__$1,inst_33294);
} else {
if((state_val_33298 === (12))){
var state_33296__$1 = state_33296;
var statearr_33312_35035 = state_33296__$1;
(statearr_33312_35035[(2)] = null);

(statearr_33312_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (2))){
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33296__$1,(4),ch);
} else {
if((state_val_33298 === (11))){
var inst_33270 = (state_33296[(7)]);
var inst_33280 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33296__$1,(8),inst_33280,inst_33270);
} else {
if((state_val_33298 === (9))){
var state_33296__$1 = state_33296;
var statearr_33321_35036 = state_33296__$1;
(statearr_33321_35036[(2)] = tc);

(statearr_33321_35036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (5))){
var inst_33273 = cljs.core.async.close_BANG_(tc);
var inst_33274 = cljs.core.async.close_BANG_(fc);
var state_33296__$1 = (function (){var statearr_33322 = state_33296;
(statearr_33322[(8)] = inst_33273);

return statearr_33322;
})();
var statearr_33323_35037 = state_33296__$1;
(statearr_33323_35037[(2)] = inst_33274);

(statearr_33323_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (14))){
var inst_33287 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33328_35038 = state_33296__$1;
(statearr_33328_35038[(2)] = inst_33287);

(statearr_33328_35038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (10))){
var state_33296__$1 = state_33296;
var statearr_33329_35039 = state_33296__$1;
(statearr_33329_35039[(2)] = fc);

(statearr_33329_35039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (8))){
var inst_33282 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
if(cljs.core.truth_(inst_33282)){
var statearr_33330_35040 = state_33296__$1;
(statearr_33330_35040[(1)] = (12));

} else {
var statearr_33334_35041 = state_33296__$1;
(statearr_33334_35041[(1)] = (13));

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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_33296){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33296);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33337){var ex__32113__auto__ = e33337;
var statearr_33338_35042 = state_33296;
(statearr_33338_35042[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33296[(4)]))){
var statearr_33342_35043 = state_33296;
(statearr_33342_35043[(1)] = cljs.core.first((state_33296[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_33296;
state_33296 = G__35044;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_33296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_33296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33344 = f__32679__auto__();
(statearr_33344[(6)] = c__32678__auto___35025);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
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
var c__32678__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (7))){
var inst_33370 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33381_35046 = state_33375__$1;
(statearr_33381_35046[(2)] = inst_33370);

(statearr_33381_35046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (1))){
var inst_33346 = init;
var inst_33347 = inst_33346;
var state_33375__$1 = (function (){var statearr_33382 = state_33375;
(statearr_33382[(7)] = inst_33347);

return statearr_33382;
})();
var statearr_33383_35048 = state_33375__$1;
(statearr_33383_35048[(2)] = null);

(statearr_33383_35048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (4))){
var inst_33350 = (state_33375[(8)]);
var inst_33350__$1 = (state_33375[(2)]);
var inst_33351 = (inst_33350__$1 == null);
var state_33375__$1 = (function (){var statearr_33388 = state_33375;
(statearr_33388[(8)] = inst_33350__$1);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33351)){
var statearr_33389_35049 = state_33375__$1;
(statearr_33389_35049[(1)] = (5));

} else {
var statearr_33390_35050 = state_33375__$1;
(statearr_33390_35050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (6))){
var inst_33350 = (state_33375[(8)]);
var inst_33347 = (state_33375[(7)]);
var inst_33358 = (state_33375[(9)]);
var inst_33358__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33347,inst_33350) : f.call(null,inst_33347,inst_33350));
var inst_33359 = cljs.core.reduced_QMARK_(inst_33358__$1);
var state_33375__$1 = (function (){var statearr_33391 = state_33375;
(statearr_33391[(9)] = inst_33358__$1);

return statearr_33391;
})();
if(inst_33359){
var statearr_33395_35051 = state_33375__$1;
(statearr_33395_35051[(1)] = (8));

} else {
var statearr_33396_35052 = state_33375__$1;
(statearr_33396_35052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (3))){
var inst_33372 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33375__$1,inst_33372);
} else {
if((state_val_33376 === (2))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33375__$1,(4),ch);
} else {
if((state_val_33376 === (9))){
var inst_33358 = (state_33375[(9)]);
var inst_33347 = inst_33358;
var state_33375__$1 = (function (){var statearr_33398 = state_33375;
(statearr_33398[(7)] = inst_33347);

return statearr_33398;
})();
var statearr_33399_35053 = state_33375__$1;
(statearr_33399_35053[(2)] = null);

(statearr_33399_35053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (5))){
var inst_33347 = (state_33375[(7)]);
var state_33375__$1 = state_33375;
var statearr_33400_35056 = state_33375__$1;
(statearr_33400_35056[(2)] = inst_33347);

(statearr_33400_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (10))){
var inst_33368 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33401_35057 = state_33375__$1;
(statearr_33401_35057[(2)] = inst_33368);

(statearr_33401_35057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (8))){
var inst_33358 = (state_33375[(9)]);
var inst_33364 = cljs.core.deref(inst_33358);
var state_33375__$1 = state_33375;
var statearr_33402_35058 = state_33375__$1;
(statearr_33402_35058[(2)] = inst_33364);

(statearr_33402_35058[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32110__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32110__auto____0 = (function (){
var statearr_33403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33403[(0)] = cljs$core$async$reduce_$_state_machine__32110__auto__);

(statearr_33403[(1)] = (1));

return statearr_33403;
});
var cljs$core$async$reduce_$_state_machine__32110__auto____1 = (function (state_33375){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33375);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33408){var ex__32113__auto__ = e33408;
var statearr_33409_35061 = state_33375;
(statearr_33409_35061[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33375[(4)]))){
var statearr_33410_35062 = state_33375;
(statearr_33410_35062[(1)] = cljs.core.first((state_33375[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35065 = state_33375;
state_33375 = G__35065;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32110__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32110__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32110__auto____0;
cljs$core$async$reduce_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32110__auto____1;
return cljs$core$async$reduce_$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33412 = f__32679__auto__();
(statearr_33412[(6)] = c__32678__auto__);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

return c__32678__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32678__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33418){
var state_val_33419 = (state_33418[(1)]);
if((state_val_33419 === (1))){
var inst_33413 = cljs.core.async.reduce(f__$1,init,ch);
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33418__$1,(2),inst_33413);
} else {
if((state_val_33419 === (2))){
var inst_33415 = (state_33418[(2)]);
var inst_33416 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33415) : f__$1.call(null,inst_33415));
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33418__$1,inst_33416);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32110__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32110__auto____0 = (function (){
var statearr_33420 = [null,null,null,null,null,null,null];
(statearr_33420[(0)] = cljs$core$async$transduce_$_state_machine__32110__auto__);

(statearr_33420[(1)] = (1));

return statearr_33420;
});
var cljs$core$async$transduce_$_state_machine__32110__auto____1 = (function (state_33418){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33418);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33422){var ex__32113__auto__ = e33422;
var statearr_33423_35071 = state_33418;
(statearr_33423_35071[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33418[(4)]))){
var statearr_33425_35072 = state_33418;
(statearr_33425_35072[(1)] = cljs.core.first((state_33418[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35077 = state_33418;
state_33418 = G__35077;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32110__auto__ = function(state_33418){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32110__auto____1.call(this,state_33418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32110__auto____0;
cljs$core$async$transduce_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32110__auto____1;
return cljs$core$async$transduce_$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33426 = f__32679__auto__();
(statearr_33426[(6)] = c__32678__auto__);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

return c__32678__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33428 = arguments.length;
switch (G__33428) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32678__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33453){
var state_val_33454 = (state_33453[(1)]);
if((state_val_33454 === (7))){
var inst_33435 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33455_35081 = state_33453__$1;
(statearr_33455_35081[(2)] = inst_33435);

(statearr_33455_35081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (1))){
var inst_33429 = cljs.core.seq(coll);
var inst_33430 = inst_33429;
var state_33453__$1 = (function (){var statearr_33456 = state_33453;
(statearr_33456[(7)] = inst_33430);

return statearr_33456;
})();
var statearr_33457_35082 = state_33453__$1;
(statearr_33457_35082[(2)] = null);

(statearr_33457_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (4))){
var inst_33430 = (state_33453[(7)]);
var inst_33433 = cljs.core.first(inst_33430);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33453__$1,(7),ch,inst_33433);
} else {
if((state_val_33454 === (13))){
var inst_33447 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33458_35084 = state_33453__$1;
(statearr_33458_35084[(2)] = inst_33447);

(statearr_33458_35084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (6))){
var inst_33438 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33438)){
var statearr_33459_35085 = state_33453__$1;
(statearr_33459_35085[(1)] = (8));

} else {
var statearr_33460_35086 = state_33453__$1;
(statearr_33460_35086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (3))){
var inst_33451 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33453__$1,inst_33451);
} else {
if((state_val_33454 === (12))){
var state_33453__$1 = state_33453;
var statearr_33461_35087 = state_33453__$1;
(statearr_33461_35087[(2)] = null);

(statearr_33461_35087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (2))){
var inst_33430 = (state_33453[(7)]);
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33430)){
var statearr_33462_35092 = state_33453__$1;
(statearr_33462_35092[(1)] = (4));

} else {
var statearr_33463_35093 = state_33453__$1;
(statearr_33463_35093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (11))){
var inst_33444 = cljs.core.async.close_BANG_(ch);
var state_33453__$1 = state_33453;
var statearr_33464_35098 = state_33453__$1;
(statearr_33464_35098[(2)] = inst_33444);

(statearr_33464_35098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (9))){
var state_33453__$1 = state_33453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33465_35099 = state_33453__$1;
(statearr_33465_35099[(1)] = (11));

} else {
var statearr_33466_35100 = state_33453__$1;
(statearr_33466_35100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (5))){
var inst_33430 = (state_33453[(7)]);
var state_33453__$1 = state_33453;
var statearr_33467_35101 = state_33453__$1;
(statearr_33467_35101[(2)] = inst_33430);

(statearr_33467_35101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (10))){
var inst_33449 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33468_35102 = state_33453__$1;
(statearr_33468_35102[(2)] = inst_33449);

(statearr_33468_35102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (8))){
var inst_33430 = (state_33453[(7)]);
var inst_33440 = cljs.core.next(inst_33430);
var inst_33430__$1 = inst_33440;
var state_33453__$1 = (function (){var statearr_33469 = state_33453;
(statearr_33469[(7)] = inst_33430__$1);

return statearr_33469;
})();
var statearr_33470_35103 = state_33453__$1;
(statearr_33470_35103[(2)] = null);

(statearr_33470_35103[(1)] = (2));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_33473 = [null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_33453){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33453);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33474){var ex__32113__auto__ = e33474;
var statearr_33475_35110 = state_33453;
(statearr_33475_35110[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33453[(4)]))){
var statearr_33476_35111 = state_33453;
(statearr_33476_35111[(1)] = cljs.core.first((state_33453[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35114 = state_33453;
state_33453 = G__35114;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_33453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_33453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33477 = f__32679__auto__();
(statearr_33477[(6)] = c__32678__auto__);

return statearr_33477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

return c__32678__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33481 = arguments.length;
switch (G__33481) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35121 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35121(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35126 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35126(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35132 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35132(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35141 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35141(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33490 = (function (ch,cs,meta33491){
this.ch = ch;
this.cs = cs;
this.meta33491 = meta33491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33492,meta33491__$1){
var self__ = this;
var _33492__$1 = this;
return (new cljs.core.async.t_cljs$core$async33490(self__.ch,self__.cs,meta33491__$1));
}));

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33492){
var self__ = this;
var _33492__$1 = this;
return self__.meta33491;
}));

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33491","meta33491",83284319,null)], null);
}));

(cljs.core.async.t_cljs$core$async33490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33490");

(cljs.core.async.t_cljs$core$async33490.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33490.
 */
cljs.core.async.__GT_t_cljs$core$async33490 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33490(ch__$1,cs__$1,meta33491){
return (new cljs.core.async.t_cljs$core$async33490(ch__$1,cs__$1,meta33491));
});

}

return (new cljs.core.async.t_cljs$core$async33490(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32678__auto___35151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33665){
var state_val_33666 = (state_33665[(1)]);
if((state_val_33666 === (7))){
var inst_33661 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33667_35156 = state_33665__$1;
(statearr_33667_35156[(2)] = inst_33661);

(statearr_33667_35156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (20))){
var inst_33541 = (state_33665[(7)]);
var inst_33565 = cljs.core.first(inst_33541);
var inst_33566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33565,(0),null);
var inst_33567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33565,(1),null);
var state_33665__$1 = (function (){var statearr_33672 = state_33665;
(statearr_33672[(8)] = inst_33566);

return statearr_33672;
})();
if(cljs.core.truth_(inst_33567)){
var statearr_33673_35160 = state_33665__$1;
(statearr_33673_35160[(1)] = (22));

} else {
var statearr_33674_35161 = state_33665__$1;
(statearr_33674_35161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (27))){
var inst_33595 = (state_33665[(9)]);
var inst_33597 = (state_33665[(10)]);
var inst_33602 = (state_33665[(11)]);
var inst_33503 = (state_33665[(12)]);
var inst_33602__$1 = cljs.core._nth(inst_33595,inst_33597);
var inst_33607 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33602__$1,inst_33503,done);
var state_33665__$1 = (function (){var statearr_33675 = state_33665;
(statearr_33675[(11)] = inst_33602__$1);

return statearr_33675;
})();
if(cljs.core.truth_(inst_33607)){
var statearr_33676_35170 = state_33665__$1;
(statearr_33676_35170[(1)] = (30));

} else {
var statearr_33677_35180 = state_33665__$1;
(statearr_33677_35180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (1))){
var state_33665__$1 = state_33665;
var statearr_33678_35181 = state_33665__$1;
(statearr_33678_35181[(2)] = null);

(statearr_33678_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (24))){
var inst_33541 = (state_33665[(7)]);
var inst_33572 = (state_33665[(2)]);
var inst_33573 = cljs.core.next(inst_33541);
var inst_33512 = inst_33573;
var inst_33513 = null;
var inst_33514 = (0);
var inst_33515 = (0);
var state_33665__$1 = (function (){var statearr_33679 = state_33665;
(statearr_33679[(13)] = inst_33514);

(statearr_33679[(14)] = inst_33512);

(statearr_33679[(15)] = inst_33572);

(statearr_33679[(16)] = inst_33513);

(statearr_33679[(17)] = inst_33515);

return statearr_33679;
})();
var statearr_33680_35185 = state_33665__$1;
(statearr_33680_35185[(2)] = null);

(statearr_33680_35185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (39))){
var state_33665__$1 = state_33665;
var statearr_33688_35186 = state_33665__$1;
(statearr_33688_35186[(2)] = null);

(statearr_33688_35186[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (4))){
var inst_33503 = (state_33665[(12)]);
var inst_33503__$1 = (state_33665[(2)]);
var inst_33504 = (inst_33503__$1 == null);
var state_33665__$1 = (function (){var statearr_33689 = state_33665;
(statearr_33689[(12)] = inst_33503__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33504)){
var statearr_33690_35197 = state_33665__$1;
(statearr_33690_35197[(1)] = (5));

} else {
var statearr_33691_35198 = state_33665__$1;
(statearr_33691_35198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (15))){
var inst_33514 = (state_33665[(13)]);
var inst_33512 = (state_33665[(14)]);
var inst_33513 = (state_33665[(16)]);
var inst_33515 = (state_33665[(17)]);
var inst_33530 = (state_33665[(2)]);
var inst_33531 = (inst_33515 + (1));
var tmp33681 = inst_33514;
var tmp33682 = inst_33512;
var tmp33683 = inst_33513;
var inst_33512__$1 = tmp33682;
var inst_33513__$1 = tmp33683;
var inst_33514__$1 = tmp33681;
var inst_33515__$1 = inst_33531;
var state_33665__$1 = (function (){var statearr_33694 = state_33665;
(statearr_33694[(13)] = inst_33514__$1);

(statearr_33694[(14)] = inst_33512__$1);

(statearr_33694[(16)] = inst_33513__$1);

(statearr_33694[(17)] = inst_33515__$1);

(statearr_33694[(18)] = inst_33530);

return statearr_33694;
})();
var statearr_33695_35206 = state_33665__$1;
(statearr_33695_35206[(2)] = null);

(statearr_33695_35206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (21))){
var inst_33576 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33700_35210 = state_33665__$1;
(statearr_33700_35210[(2)] = inst_33576);

(statearr_33700_35210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (31))){
var inst_33602 = (state_33665[(11)]);
var inst_33610 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33602);
var state_33665__$1 = state_33665;
var statearr_33702_35218 = state_33665__$1;
(statearr_33702_35218[(2)] = inst_33610);

(statearr_33702_35218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (32))){
var inst_33596 = (state_33665[(19)]);
var inst_33595 = (state_33665[(9)]);
var inst_33594 = (state_33665[(20)]);
var inst_33597 = (state_33665[(10)]);
var inst_33612 = (state_33665[(2)]);
var inst_33616 = (inst_33597 + (1));
var tmp33697 = inst_33596;
var tmp33698 = inst_33595;
var tmp33699 = inst_33594;
var inst_33594__$1 = tmp33699;
var inst_33595__$1 = tmp33698;
var inst_33596__$1 = tmp33697;
var inst_33597__$1 = inst_33616;
var state_33665__$1 = (function (){var statearr_33703 = state_33665;
(statearr_33703[(19)] = inst_33596__$1);

(statearr_33703[(9)] = inst_33595__$1);

(statearr_33703[(20)] = inst_33594__$1);

(statearr_33703[(21)] = inst_33612);

(statearr_33703[(10)] = inst_33597__$1);

return statearr_33703;
})();
var statearr_33704_35230 = state_33665__$1;
(statearr_33704_35230[(2)] = null);

(statearr_33704_35230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (40))){
var inst_33631 = (state_33665[(22)]);
var inst_33635 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33631);
var state_33665__$1 = state_33665;
var statearr_33705_35245 = state_33665__$1;
(statearr_33705_35245[(2)] = inst_33635);

(statearr_33705_35245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (33))){
var inst_33619 = (state_33665[(23)]);
var inst_33624 = cljs.core.chunked_seq_QMARK_(inst_33619);
var state_33665__$1 = state_33665;
if(inst_33624){
var statearr_33706_35246 = state_33665__$1;
(statearr_33706_35246[(1)] = (36));

} else {
var statearr_33707_35247 = state_33665__$1;
(statearr_33707_35247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (13))){
var inst_33524 = (state_33665[(24)]);
var inst_33527 = cljs.core.async.close_BANG_(inst_33524);
var state_33665__$1 = state_33665;
var statearr_33708_35248 = state_33665__$1;
(statearr_33708_35248[(2)] = inst_33527);

(statearr_33708_35248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (22))){
var inst_33566 = (state_33665[(8)]);
var inst_33569 = cljs.core.async.close_BANG_(inst_33566);
var state_33665__$1 = state_33665;
var statearr_33709_35256 = state_33665__$1;
(statearr_33709_35256[(2)] = inst_33569);

(statearr_33709_35256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (36))){
var inst_33619 = (state_33665[(23)]);
var inst_33626 = cljs.core.chunk_first(inst_33619);
var inst_33627 = cljs.core.chunk_rest(inst_33619);
var inst_33628 = cljs.core.count(inst_33626);
var inst_33594 = inst_33627;
var inst_33595 = inst_33626;
var inst_33596 = inst_33628;
var inst_33597 = (0);
var state_33665__$1 = (function (){var statearr_33711 = state_33665;
(statearr_33711[(19)] = inst_33596);

(statearr_33711[(9)] = inst_33595);

(statearr_33711[(20)] = inst_33594);

(statearr_33711[(10)] = inst_33597);

return statearr_33711;
})();
var statearr_33713_35257 = state_33665__$1;
(statearr_33713_35257[(2)] = null);

(statearr_33713_35257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (41))){
var inst_33619 = (state_33665[(23)]);
var inst_33637 = (state_33665[(2)]);
var inst_33641 = cljs.core.next(inst_33619);
var inst_33594 = inst_33641;
var inst_33595 = null;
var inst_33596 = (0);
var inst_33597 = (0);
var state_33665__$1 = (function (){var statearr_33714 = state_33665;
(statearr_33714[(19)] = inst_33596);

(statearr_33714[(9)] = inst_33595);

(statearr_33714[(20)] = inst_33594);

(statearr_33714[(25)] = inst_33637);

(statearr_33714[(10)] = inst_33597);

return statearr_33714;
})();
var statearr_33715_35274 = state_33665__$1;
(statearr_33715_35274[(2)] = null);

(statearr_33715_35274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (43))){
var state_33665__$1 = state_33665;
var statearr_33716_35275 = state_33665__$1;
(statearr_33716_35275[(2)] = null);

(statearr_33716_35275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (29))){
var inst_33649 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33719_35276 = state_33665__$1;
(statearr_33719_35276[(2)] = inst_33649);

(statearr_33719_35276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (44))){
var inst_33658 = (state_33665[(2)]);
var state_33665__$1 = (function (){var statearr_33723 = state_33665;
(statearr_33723[(26)] = inst_33658);

return statearr_33723;
})();
var statearr_33724_35286 = state_33665__$1;
(statearr_33724_35286[(2)] = null);

(statearr_33724_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (6))){
var inst_33586 = (state_33665[(27)]);
var inst_33585 = cljs.core.deref(cs);
var inst_33586__$1 = cljs.core.keys(inst_33585);
var inst_33587 = cljs.core.count(inst_33586__$1);
var inst_33588 = cljs.core.reset_BANG_(dctr,inst_33587);
var inst_33593 = cljs.core.seq(inst_33586__$1);
var inst_33594 = inst_33593;
var inst_33595 = null;
var inst_33596 = (0);
var inst_33597 = (0);
var state_33665__$1 = (function (){var statearr_33725 = state_33665;
(statearr_33725[(19)] = inst_33596);

(statearr_33725[(28)] = inst_33588);

(statearr_33725[(9)] = inst_33595);

(statearr_33725[(20)] = inst_33594);

(statearr_33725[(10)] = inst_33597);

(statearr_33725[(27)] = inst_33586__$1);

return statearr_33725;
})();
var statearr_33726_35294 = state_33665__$1;
(statearr_33726_35294[(2)] = null);

(statearr_33726_35294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (28))){
var inst_33619 = (state_33665[(23)]);
var inst_33594 = (state_33665[(20)]);
var inst_33619__$1 = cljs.core.seq(inst_33594);
var state_33665__$1 = (function (){var statearr_33727 = state_33665;
(statearr_33727[(23)] = inst_33619__$1);

return statearr_33727;
})();
if(inst_33619__$1){
var statearr_33728_35295 = state_33665__$1;
(statearr_33728_35295[(1)] = (33));

} else {
var statearr_33729_35297 = state_33665__$1;
(statearr_33729_35297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (25))){
var inst_33596 = (state_33665[(19)]);
var inst_33597 = (state_33665[(10)]);
var inst_33599 = (inst_33597 < inst_33596);
var inst_33600 = inst_33599;
var state_33665__$1 = state_33665;
if(cljs.core.truth_(inst_33600)){
var statearr_33730_35298 = state_33665__$1;
(statearr_33730_35298[(1)] = (27));

} else {
var statearr_33731_35300 = state_33665__$1;
(statearr_33731_35300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (34))){
var state_33665__$1 = state_33665;
var statearr_33732_35301 = state_33665__$1;
(statearr_33732_35301[(2)] = null);

(statearr_33732_35301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (17))){
var state_33665__$1 = state_33665;
var statearr_33733_35303 = state_33665__$1;
(statearr_33733_35303[(2)] = null);

(statearr_33733_35303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (3))){
var inst_33663 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33665__$1,inst_33663);
} else {
if((state_val_33666 === (12))){
var inst_33581 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33734_35306 = state_33665__$1;
(statearr_33734_35306[(2)] = inst_33581);

(statearr_33734_35306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (2))){
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33665__$1,(4),ch);
} else {
if((state_val_33666 === (23))){
var state_33665__$1 = state_33665;
var statearr_33735_35308 = state_33665__$1;
(statearr_33735_35308[(2)] = null);

(statearr_33735_35308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (35))){
var inst_33647 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33736_35309 = state_33665__$1;
(statearr_33736_35309[(2)] = inst_33647);

(statearr_33736_35309[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (19))){
var inst_33541 = (state_33665[(7)]);
var inst_33551 = cljs.core.chunk_first(inst_33541);
var inst_33552 = cljs.core.chunk_rest(inst_33541);
var inst_33553 = cljs.core.count(inst_33551);
var inst_33512 = inst_33552;
var inst_33513 = inst_33551;
var inst_33514 = inst_33553;
var inst_33515 = (0);
var state_33665__$1 = (function (){var statearr_33737 = state_33665;
(statearr_33737[(13)] = inst_33514);

(statearr_33737[(14)] = inst_33512);

(statearr_33737[(16)] = inst_33513);

(statearr_33737[(17)] = inst_33515);

return statearr_33737;
})();
var statearr_33738_35312 = state_33665__$1;
(statearr_33738_35312[(2)] = null);

(statearr_33738_35312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (11))){
var inst_33512 = (state_33665[(14)]);
var inst_33541 = (state_33665[(7)]);
var inst_33541__$1 = cljs.core.seq(inst_33512);
var state_33665__$1 = (function (){var statearr_33739 = state_33665;
(statearr_33739[(7)] = inst_33541__$1);

return statearr_33739;
})();
if(inst_33541__$1){
var statearr_33741_35316 = state_33665__$1;
(statearr_33741_35316[(1)] = (16));

} else {
var statearr_33745_35317 = state_33665__$1;
(statearr_33745_35317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (9))){
var inst_33583 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33747_35319 = state_33665__$1;
(statearr_33747_35319[(2)] = inst_33583);

(statearr_33747_35319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (5))){
var inst_33510 = cljs.core.deref(cs);
var inst_33511 = cljs.core.seq(inst_33510);
var inst_33512 = inst_33511;
var inst_33513 = null;
var inst_33514 = (0);
var inst_33515 = (0);
var state_33665__$1 = (function (){var statearr_33748 = state_33665;
(statearr_33748[(13)] = inst_33514);

(statearr_33748[(14)] = inst_33512);

(statearr_33748[(16)] = inst_33513);

(statearr_33748[(17)] = inst_33515);

return statearr_33748;
})();
var statearr_33749_35320 = state_33665__$1;
(statearr_33749_35320[(2)] = null);

(statearr_33749_35320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (14))){
var state_33665__$1 = state_33665;
var statearr_33752_35321 = state_33665__$1;
(statearr_33752_35321[(2)] = null);

(statearr_33752_35321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (45))){
var inst_33655 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33753_35322 = state_33665__$1;
(statearr_33753_35322[(2)] = inst_33655);

(statearr_33753_35322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (26))){
var inst_33586 = (state_33665[(27)]);
var inst_33651 = (state_33665[(2)]);
var inst_33652 = cljs.core.seq(inst_33586);
var state_33665__$1 = (function (){var statearr_33754 = state_33665;
(statearr_33754[(29)] = inst_33651);

return statearr_33754;
})();
if(inst_33652){
var statearr_33755_35328 = state_33665__$1;
(statearr_33755_35328[(1)] = (42));

} else {
var statearr_33756_35330 = state_33665__$1;
(statearr_33756_35330[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (16))){
var inst_33541 = (state_33665[(7)]);
var inst_33549 = cljs.core.chunked_seq_QMARK_(inst_33541);
var state_33665__$1 = state_33665;
if(inst_33549){
var statearr_33757_35331 = state_33665__$1;
(statearr_33757_35331[(1)] = (19));

} else {
var statearr_33759_35332 = state_33665__$1;
(statearr_33759_35332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (38))){
var inst_33644 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33761_35337 = state_33665__$1;
(statearr_33761_35337[(2)] = inst_33644);

(statearr_33761_35337[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (30))){
var state_33665__$1 = state_33665;
var statearr_33762_35338 = state_33665__$1;
(statearr_33762_35338[(2)] = null);

(statearr_33762_35338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (10))){
var inst_33513 = (state_33665[(16)]);
var inst_33515 = (state_33665[(17)]);
var inst_33523 = cljs.core._nth(inst_33513,inst_33515);
var inst_33524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33523,(0),null);
var inst_33525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33523,(1),null);
var state_33665__$1 = (function (){var statearr_33766 = state_33665;
(statearr_33766[(24)] = inst_33524);

return statearr_33766;
})();
if(cljs.core.truth_(inst_33525)){
var statearr_33767_35342 = state_33665__$1;
(statearr_33767_35342[(1)] = (13));

} else {
var statearr_33768_35343 = state_33665__$1;
(statearr_33768_35343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (18))){
var inst_33579 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33769_35344 = state_33665__$1;
(statearr_33769_35344[(2)] = inst_33579);

(statearr_33769_35344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (42))){
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33665__$1,(45),dchan);
} else {
if((state_val_33666 === (37))){
var inst_33619 = (state_33665[(23)]);
var inst_33631 = (state_33665[(22)]);
var inst_33503 = (state_33665[(12)]);
var inst_33631__$1 = cljs.core.first(inst_33619);
var inst_33632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33631__$1,inst_33503,done);
var state_33665__$1 = (function (){var statearr_33770 = state_33665;
(statearr_33770[(22)] = inst_33631__$1);

return statearr_33770;
})();
if(cljs.core.truth_(inst_33632)){
var statearr_33771_35348 = state_33665__$1;
(statearr_33771_35348[(1)] = (39));

} else {
var statearr_33772_35349 = state_33665__$1;
(statearr_33772_35349[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (8))){
var inst_33514 = (state_33665[(13)]);
var inst_33515 = (state_33665[(17)]);
var inst_33517 = (inst_33515 < inst_33514);
var inst_33518 = inst_33517;
var state_33665__$1 = state_33665;
if(cljs.core.truth_(inst_33518)){
var statearr_33773_35350 = state_33665__$1;
(statearr_33773_35350[(1)] = (10));

} else {
var statearr_33774_35351 = state_33665__$1;
(statearr_33774_35351[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32110__auto__ = null;
var cljs$core$async$mult_$_state_machine__32110__auto____0 = (function (){
var statearr_33775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33775[(0)] = cljs$core$async$mult_$_state_machine__32110__auto__);

(statearr_33775[(1)] = (1));

return statearr_33775;
});
var cljs$core$async$mult_$_state_machine__32110__auto____1 = (function (state_33665){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33665);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33776){var ex__32113__auto__ = e33776;
var statearr_33777_35353 = state_33665;
(statearr_33777_35353[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33665[(4)]))){
var statearr_33778_35355 = state_33665;
(statearr_33778_35355[(1)] = cljs.core.first((state_33665[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35356 = state_33665;
state_33665 = G__35356;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32110__auto__ = function(state_33665){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32110__auto____1.call(this,state_33665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32110__auto____0;
cljs$core$async$mult_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32110__auto____1;
return cljs$core$async$mult_$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33779 = f__32679__auto__();
(statearr_33779[(6)] = c__32678__auto___35151);

return statearr_33779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
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
var G__33781 = arguments.length;
switch (G__33781) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35361 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35361(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35366 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35366(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35376 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35376(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35381 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35381(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35392 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35392(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35415 = arguments.length;
var i__4819__auto___35416 = (0);
while(true){
if((i__4819__auto___35416 < len__4818__auto___35415)){
args__4824__auto__.push((arguments[i__4819__auto___35416]));

var G__35421 = (i__4819__auto___35416 + (1));
i__4819__auto___35416 = G__35421;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33799){
var map__33800 = p__33799;
var map__33800__$1 = cljs.core.__destructure_map(map__33800);
var opts = map__33800__$1;
var statearr_33801_35428 = state;
(statearr_33801_35428[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33802_35431 = state;
(statearr_33802_35431[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33803_35432 = state;
(statearr_33803_35432[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33792){
var G__33793 = cljs.core.first(seq33792);
var seq33792__$1 = cljs.core.next(seq33792);
var G__33794 = cljs.core.first(seq33792__$1);
var seq33792__$2 = cljs.core.next(seq33792__$1);
var G__33795 = cljs.core.first(seq33792__$2);
var seq33792__$3 = cljs.core.next(seq33792__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33793,G__33794,G__33795,seq33792__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33804 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33805){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33805 = meta33805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33806,meta33805__$1){
var self__ = this;
var _33806__$1 = this;
return (new cljs.core.async.t_cljs$core$async33804(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33805__$1));
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33806){
var self__ = this;
var _33806__$1 = this;
return self__.meta33805;
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33805","meta33805",-1644301871,null)], null);
}));

(cljs.core.async.t_cljs$core$async33804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33804");

(cljs.core.async.t_cljs$core$async33804.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33804.
 */
cljs.core.async.__GT_t_cljs$core$async33804 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33805){
return (new cljs.core.async.t_cljs$core$async33804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33805));
});

}

return (new cljs.core.async.t_cljs$core$async33804(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32678__auto___35470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_33875){
var state_val_33876 = (state_33875[(1)]);
if((state_val_33876 === (7))){
var inst_33835 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
if(cljs.core.truth_(inst_33835)){
var statearr_33880_35477 = state_33875__$1;
(statearr_33880_35477[(1)] = (8));

} else {
var statearr_33881_35478 = state_33875__$1;
(statearr_33881_35478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (20))){
var inst_33827 = (state_33875[(7)]);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33875__$1,(23),out,inst_33827);
} else {
if((state_val_33876 === (1))){
var inst_33810 = calc_state();
var inst_33811 = cljs.core.__destructure_map(inst_33810);
var inst_33812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33811,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33811,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33811,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33815 = inst_33810;
var state_33875__$1 = (function (){var statearr_33882 = state_33875;
(statearr_33882[(8)] = inst_33813);

(statearr_33882[(9)] = inst_33812);

(statearr_33882[(10)] = inst_33815);

(statearr_33882[(11)] = inst_33814);

return statearr_33882;
})();
var statearr_33883_35503 = state_33875__$1;
(statearr_33883_35503[(2)] = null);

(statearr_33883_35503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (24))){
var inst_33818 = (state_33875[(12)]);
var inst_33815 = inst_33818;
var state_33875__$1 = (function (){var statearr_33884 = state_33875;
(statearr_33884[(10)] = inst_33815);

return statearr_33884;
})();
var statearr_33885_35508 = state_33875__$1;
(statearr_33885_35508[(2)] = null);

(statearr_33885_35508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (4))){
var inst_33827 = (state_33875[(7)]);
var inst_33829 = (state_33875[(13)]);
var inst_33826 = (state_33875[(2)]);
var inst_33827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33826,(0),null);
var inst_33828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33826,(1),null);
var inst_33829__$1 = (inst_33827__$1 == null);
var state_33875__$1 = (function (){var statearr_33887 = state_33875;
(statearr_33887[(7)] = inst_33827__$1);

(statearr_33887[(13)] = inst_33829__$1);

(statearr_33887[(14)] = inst_33828);

return statearr_33887;
})();
if(cljs.core.truth_(inst_33829__$1)){
var statearr_33891_35515 = state_33875__$1;
(statearr_33891_35515[(1)] = (5));

} else {
var statearr_33892_35516 = state_33875__$1;
(statearr_33892_35516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (15))){
var inst_33849 = (state_33875[(15)]);
var inst_33819 = (state_33875[(16)]);
var inst_33849__$1 = cljs.core.empty_QMARK_(inst_33819);
var state_33875__$1 = (function (){var statearr_33893 = state_33875;
(statearr_33893[(15)] = inst_33849__$1);

return statearr_33893;
})();
if(inst_33849__$1){
var statearr_33894_35522 = state_33875__$1;
(statearr_33894_35522[(1)] = (17));

} else {
var statearr_33895_35524 = state_33875__$1;
(statearr_33895_35524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (21))){
var inst_33818 = (state_33875[(12)]);
var inst_33815 = inst_33818;
var state_33875__$1 = (function (){var statearr_33896 = state_33875;
(statearr_33896[(10)] = inst_33815);

return statearr_33896;
})();
var statearr_33897_35529 = state_33875__$1;
(statearr_33897_35529[(2)] = null);

(statearr_33897_35529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (13))){
var inst_33842 = (state_33875[(2)]);
var inst_33843 = calc_state();
var inst_33815 = inst_33843;
var state_33875__$1 = (function (){var statearr_33898 = state_33875;
(statearr_33898[(17)] = inst_33842);

(statearr_33898[(10)] = inst_33815);

return statearr_33898;
})();
var statearr_33899_35530 = state_33875__$1;
(statearr_33899_35530[(2)] = null);

(statearr_33899_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (22))){
var inst_33869 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33900_35531 = state_33875__$1;
(statearr_33900_35531[(2)] = inst_33869);

(statearr_33900_35531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (6))){
var inst_33828 = (state_33875[(14)]);
var inst_33833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33828,change);
var state_33875__$1 = state_33875;
var statearr_33901_35534 = state_33875__$1;
(statearr_33901_35534[(2)] = inst_33833);

(statearr_33901_35534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (25))){
var state_33875__$1 = state_33875;
var statearr_33902_35535 = state_33875__$1;
(statearr_33902_35535[(2)] = null);

(statearr_33902_35535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (17))){
var inst_33820 = (state_33875[(18)]);
var inst_33828 = (state_33875[(14)]);
var inst_33851 = (inst_33820.cljs$core$IFn$_invoke$arity$1 ? inst_33820.cljs$core$IFn$_invoke$arity$1(inst_33828) : inst_33820.call(null,inst_33828));
var inst_33852 = cljs.core.not(inst_33851);
var state_33875__$1 = state_33875;
var statearr_33903_35540 = state_33875__$1;
(statearr_33903_35540[(2)] = inst_33852);

(statearr_33903_35540[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (3))){
var inst_33873 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33875__$1,inst_33873);
} else {
if((state_val_33876 === (12))){
var state_33875__$1 = state_33875;
var statearr_33904_35542 = state_33875__$1;
(statearr_33904_35542[(2)] = null);

(statearr_33904_35542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (2))){
var inst_33818 = (state_33875[(12)]);
var inst_33815 = (state_33875[(10)]);
var inst_33818__$1 = cljs.core.__destructure_map(inst_33815);
var inst_33819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33818__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33818__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33818__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33875__$1 = (function (){var statearr_33905 = state_33875;
(statearr_33905[(18)] = inst_33820);

(statearr_33905[(12)] = inst_33818__$1);

(statearr_33905[(16)] = inst_33819);

return statearr_33905;
})();
return cljs.core.async.ioc_alts_BANG_(state_33875__$1,(4),inst_33821);
} else {
if((state_val_33876 === (23))){
var inst_33860 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
if(cljs.core.truth_(inst_33860)){
var statearr_33906_35549 = state_33875__$1;
(statearr_33906_35549[(1)] = (24));

} else {
var statearr_33907_35550 = state_33875__$1;
(statearr_33907_35550[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (19))){
var inst_33855 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33908_35552 = state_33875__$1;
(statearr_33908_35552[(2)] = inst_33855);

(statearr_33908_35552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (11))){
var inst_33828 = (state_33875[(14)]);
var inst_33839 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33828);
var state_33875__$1 = state_33875;
var statearr_33909_35554 = state_33875__$1;
(statearr_33909_35554[(2)] = inst_33839);

(statearr_33909_35554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (9))){
var inst_33846 = (state_33875[(19)]);
var inst_33819 = (state_33875[(16)]);
var inst_33828 = (state_33875[(14)]);
var inst_33846__$1 = (inst_33819.cljs$core$IFn$_invoke$arity$1 ? inst_33819.cljs$core$IFn$_invoke$arity$1(inst_33828) : inst_33819.call(null,inst_33828));
var state_33875__$1 = (function (){var statearr_33910 = state_33875;
(statearr_33910[(19)] = inst_33846__$1);

return statearr_33910;
})();
if(cljs.core.truth_(inst_33846__$1)){
var statearr_33911_35555 = state_33875__$1;
(statearr_33911_35555[(1)] = (14));

} else {
var statearr_33915_35556 = state_33875__$1;
(statearr_33915_35556[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (5))){
var inst_33829 = (state_33875[(13)]);
var state_33875__$1 = state_33875;
var statearr_33927_35557 = state_33875__$1;
(statearr_33927_35557[(2)] = inst_33829);

(statearr_33927_35557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (14))){
var inst_33846 = (state_33875[(19)]);
var state_33875__$1 = state_33875;
var statearr_33928_35558 = state_33875__$1;
(statearr_33928_35558[(2)] = inst_33846);

(statearr_33928_35558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (26))){
var inst_33865 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33935_35559 = state_33875__$1;
(statearr_33935_35559[(2)] = inst_33865);

(statearr_33935_35559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (16))){
var inst_33857 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
if(cljs.core.truth_(inst_33857)){
var statearr_33936_35560 = state_33875__$1;
(statearr_33936_35560[(1)] = (20));

} else {
var statearr_33937_35561 = state_33875__$1;
(statearr_33937_35561[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (10))){
var inst_33871 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33938_35562 = state_33875__$1;
(statearr_33938_35562[(2)] = inst_33871);

(statearr_33938_35562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (18))){
var inst_33849 = (state_33875[(15)]);
var state_33875__$1 = state_33875;
var statearr_33939_35563 = state_33875__$1;
(statearr_33939_35563[(2)] = inst_33849);

(statearr_33939_35563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (8))){
var inst_33827 = (state_33875[(7)]);
var inst_33837 = (inst_33827 == null);
var state_33875__$1 = state_33875;
if(cljs.core.truth_(inst_33837)){
var statearr_33940_35565 = state_33875__$1;
(statearr_33940_35565[(1)] = (11));

} else {
var statearr_33941_35566 = state_33875__$1;
(statearr_33941_35566[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__32110__auto__ = null;
var cljs$core$async$mix_$_state_machine__32110__auto____0 = (function (){
var statearr_33956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33956[(0)] = cljs$core$async$mix_$_state_machine__32110__auto__);

(statearr_33956[(1)] = (1));

return statearr_33956;
});
var cljs$core$async$mix_$_state_machine__32110__auto____1 = (function (state_33875){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_33875);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e33957){var ex__32113__auto__ = e33957;
var statearr_33958_35567 = state_33875;
(statearr_33958_35567[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_33875[(4)]))){
var statearr_33959_35569 = state_33875;
(statearr_33959_35569[(1)] = cljs.core.first((state_33875[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35573 = state_33875;
state_33875 = G__35573;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32110__auto__ = function(state_33875){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32110__auto____1.call(this,state_33875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32110__auto____0;
cljs$core$async$mix_$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32110__auto____1;
return cljs$core$async$mix_$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_33966 = f__32679__auto__();
(statearr_33966[(6)] = c__32678__auto___35470);

return statearr_33966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35574 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35574(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35576 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35576(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35578 = (function() {
var G__35579 = null;
var G__35579__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35579__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35579 = function(p,v){
switch(arguments.length){
case 1:
return G__35579__1.call(this,p);
case 2:
return G__35579__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35579.cljs$core$IFn$_invoke$arity$1 = G__35579__1;
G__35579.cljs$core$IFn$_invoke$arity$2 = G__35579__2;
return G__35579;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33974 = arguments.length;
switch (G__33974) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35578(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35578(p,v);
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
var G__33977 = arguments.length;
switch (G__33977) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33975_SHARP_){
if(cljs.core.truth_((p1__33975_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33975_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33975_SHARP_.call(null,topic)))){
return p1__33975_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33975_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33979 = meta33979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33980,meta33979__$1){
var self__ = this;
var _33980__$1 = this;
return (new cljs.core.async.t_cljs$core$async33978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33979__$1));
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33980){
var self__ = this;
var _33980__$1 = this;
return self__.meta33979;
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33979","meta33979",599461607,null)], null);
}));

(cljs.core.async.t_cljs$core$async33978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33978");

(cljs.core.async.t_cljs$core$async33978.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33978.
 */
cljs.core.async.__GT_t_cljs$core$async33978 = (function cljs$core$async$__GT_t_cljs$core$async33978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33979){
return (new cljs.core.async.t_cljs$core$async33978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33979));
});

}

return (new cljs.core.async.t_cljs$core$async33978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32678__auto___35604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34063){
var state_val_34064 = (state_34063[(1)]);
if((state_val_34064 === (7))){
var inst_34059 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34065_35606 = state_34063__$1;
(statearr_34065_35606[(2)] = inst_34059);

(statearr_34065_35606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (20))){
var state_34063__$1 = state_34063;
var statearr_34066_35607 = state_34063__$1;
(statearr_34066_35607[(2)] = null);

(statearr_34066_35607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (1))){
var state_34063__$1 = state_34063;
var statearr_34067_35609 = state_34063__$1;
(statearr_34067_35609[(2)] = null);

(statearr_34067_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (24))){
var inst_34042 = (state_34063[(7)]);
var inst_34051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34042);
var state_34063__$1 = state_34063;
var statearr_34068_35610 = state_34063__$1;
(statearr_34068_35610[(2)] = inst_34051);

(statearr_34068_35610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (4))){
var inst_33983 = (state_34063[(8)]);
var inst_33983__$1 = (state_34063[(2)]);
var inst_33984 = (inst_33983__$1 == null);
var state_34063__$1 = (function (){var statearr_34069 = state_34063;
(statearr_34069[(8)] = inst_33983__$1);

return statearr_34069;
})();
if(cljs.core.truth_(inst_33984)){
var statearr_34070_35612 = state_34063__$1;
(statearr_34070_35612[(1)] = (5));

} else {
var statearr_34071_35613 = state_34063__$1;
(statearr_34071_35613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (15))){
var inst_34036 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34072_35614 = state_34063__$1;
(statearr_34072_35614[(2)] = inst_34036);

(statearr_34072_35614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (21))){
var inst_34056 = (state_34063[(2)]);
var state_34063__$1 = (function (){var statearr_34073 = state_34063;
(statearr_34073[(9)] = inst_34056);

return statearr_34073;
})();
var statearr_34074_35615 = state_34063__$1;
(statearr_34074_35615[(2)] = null);

(statearr_34074_35615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (13))){
var inst_34007 = (state_34063[(10)]);
var inst_34012 = cljs.core.chunked_seq_QMARK_(inst_34007);
var state_34063__$1 = state_34063;
if(inst_34012){
var statearr_34075_35616 = state_34063__$1;
(statearr_34075_35616[(1)] = (16));

} else {
var statearr_34076_35617 = state_34063__$1;
(statearr_34076_35617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (22))){
var inst_34048 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
if(cljs.core.truth_(inst_34048)){
var statearr_34077_35619 = state_34063__$1;
(statearr_34077_35619[(1)] = (23));

} else {
var statearr_34078_35620 = state_34063__$1;
(statearr_34078_35620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (6))){
var inst_33983 = (state_34063[(8)]);
var inst_34042 = (state_34063[(7)]);
var inst_34044 = (state_34063[(11)]);
var inst_34042__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33983) : topic_fn.call(null,inst_33983));
var inst_34043 = cljs.core.deref(mults);
var inst_34044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34043,inst_34042__$1);
var state_34063__$1 = (function (){var statearr_34079 = state_34063;
(statearr_34079[(7)] = inst_34042__$1);

(statearr_34079[(11)] = inst_34044__$1);

return statearr_34079;
})();
if(cljs.core.truth_(inst_34044__$1)){
var statearr_34080_35623 = state_34063__$1;
(statearr_34080_35623[(1)] = (19));

} else {
var statearr_34081_35624 = state_34063__$1;
(statearr_34081_35624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (25))){
var inst_34053 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34082_35625 = state_34063__$1;
(statearr_34082_35625[(2)] = inst_34053);

(statearr_34082_35625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (17))){
var inst_34007 = (state_34063[(10)]);
var inst_34027 = cljs.core.first(inst_34007);
var inst_34028 = cljs.core.async.muxch_STAR_(inst_34027);
var inst_34029 = cljs.core.async.close_BANG_(inst_34028);
var inst_34030 = cljs.core.next(inst_34007);
var inst_33993 = inst_34030;
var inst_33994 = null;
var inst_33995 = (0);
var inst_33996 = (0);
var state_34063__$1 = (function (){var statearr_34083 = state_34063;
(statearr_34083[(12)] = inst_34029);

(statearr_34083[(13)] = inst_33996);

(statearr_34083[(14)] = inst_33993);

(statearr_34083[(15)] = inst_33995);

(statearr_34083[(16)] = inst_33994);

return statearr_34083;
})();
var statearr_34084_35626 = state_34063__$1;
(statearr_34084_35626[(2)] = null);

(statearr_34084_35626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (3))){
var inst_34061 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34063__$1,inst_34061);
} else {
if((state_val_34064 === (12))){
var inst_34038 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34086_35627 = state_34063__$1;
(statearr_34086_35627[(2)] = inst_34038);

(statearr_34086_35627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (2))){
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34063__$1,(4),ch);
} else {
if((state_val_34064 === (23))){
var state_34063__$1 = state_34063;
var statearr_34088_35628 = state_34063__$1;
(statearr_34088_35628[(2)] = null);

(statearr_34088_35628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (19))){
var inst_33983 = (state_34063[(8)]);
var inst_34044 = (state_34063[(11)]);
var inst_34046 = cljs.core.async.muxch_STAR_(inst_34044);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34063__$1,(22),inst_34046,inst_33983);
} else {
if((state_val_34064 === (11))){
var inst_34007 = (state_34063[(10)]);
var inst_33993 = (state_34063[(14)]);
var inst_34007__$1 = cljs.core.seq(inst_33993);
var state_34063__$1 = (function (){var statearr_34091 = state_34063;
(statearr_34091[(10)] = inst_34007__$1);

return statearr_34091;
})();
if(inst_34007__$1){
var statearr_34092_35629 = state_34063__$1;
(statearr_34092_35629[(1)] = (13));

} else {
var statearr_34093_35630 = state_34063__$1;
(statearr_34093_35630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (9))){
var inst_34040 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34094_35631 = state_34063__$1;
(statearr_34094_35631[(2)] = inst_34040);

(statearr_34094_35631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (5))){
var inst_33990 = cljs.core.deref(mults);
var inst_33991 = cljs.core.vals(inst_33990);
var inst_33992 = cljs.core.seq(inst_33991);
var inst_33993 = inst_33992;
var inst_33994 = null;
var inst_33995 = (0);
var inst_33996 = (0);
var state_34063__$1 = (function (){var statearr_34096 = state_34063;
(statearr_34096[(13)] = inst_33996);

(statearr_34096[(14)] = inst_33993);

(statearr_34096[(15)] = inst_33995);

(statearr_34096[(16)] = inst_33994);

return statearr_34096;
})();
var statearr_34098_35632 = state_34063__$1;
(statearr_34098_35632[(2)] = null);

(statearr_34098_35632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (14))){
var state_34063__$1 = state_34063;
var statearr_34102_35636 = state_34063__$1;
(statearr_34102_35636[(2)] = null);

(statearr_34102_35636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (16))){
var inst_34007 = (state_34063[(10)]);
var inst_34019 = cljs.core.chunk_first(inst_34007);
var inst_34020 = cljs.core.chunk_rest(inst_34007);
var inst_34021 = cljs.core.count(inst_34019);
var inst_33993 = inst_34020;
var inst_33994 = inst_34019;
var inst_33995 = inst_34021;
var inst_33996 = (0);
var state_34063__$1 = (function (){var statearr_34103 = state_34063;
(statearr_34103[(13)] = inst_33996);

(statearr_34103[(14)] = inst_33993);

(statearr_34103[(15)] = inst_33995);

(statearr_34103[(16)] = inst_33994);

return statearr_34103;
})();
var statearr_34104_35637 = state_34063__$1;
(statearr_34104_35637[(2)] = null);

(statearr_34104_35637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (10))){
var inst_33996 = (state_34063[(13)]);
var inst_33993 = (state_34063[(14)]);
var inst_33995 = (state_34063[(15)]);
var inst_33994 = (state_34063[(16)]);
var inst_34001 = cljs.core._nth(inst_33994,inst_33996);
var inst_34002 = cljs.core.async.muxch_STAR_(inst_34001);
var inst_34003 = cljs.core.async.close_BANG_(inst_34002);
var inst_34004 = (inst_33996 + (1));
var tmp34099 = inst_33993;
var tmp34100 = inst_33995;
var tmp34101 = inst_33994;
var inst_33993__$1 = tmp34099;
var inst_33994__$1 = tmp34101;
var inst_33995__$1 = tmp34100;
var inst_33996__$1 = inst_34004;
var state_34063__$1 = (function (){var statearr_34107 = state_34063;
(statearr_34107[(17)] = inst_34003);

(statearr_34107[(13)] = inst_33996__$1);

(statearr_34107[(14)] = inst_33993__$1);

(statearr_34107[(15)] = inst_33995__$1);

(statearr_34107[(16)] = inst_33994__$1);

return statearr_34107;
})();
var statearr_34108_35644 = state_34063__$1;
(statearr_34108_35644[(2)] = null);

(statearr_34108_35644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (18))){
var inst_34033 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34109_35645 = state_34063__$1;
(statearr_34109_35645[(2)] = inst_34033);

(statearr_34109_35645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (8))){
var inst_33996 = (state_34063[(13)]);
var inst_33995 = (state_34063[(15)]);
var inst_33998 = (inst_33996 < inst_33995);
var inst_33999 = inst_33998;
var state_34063__$1 = state_34063;
if(cljs.core.truth_(inst_33999)){
var statearr_34110_35647 = state_34063__$1;
(statearr_34110_35647[(1)] = (10));

} else {
var statearr_34111_35649 = state_34063__$1;
(statearr_34111_35649[(1)] = (11));

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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34112[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34063){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34063);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34113){var ex__32113__auto__ = e34113;
var statearr_34114_35653 = state_34063;
(statearr_34114_35653[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34063[(4)]))){
var statearr_34115_35654 = state_34063;
(statearr_34115_35654[(1)] = cljs.core.first((state_34063[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35655 = state_34063;
state_34063 = G__35655;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34116 = f__32679__auto__();
(statearr_34116[(6)] = c__32678__auto___35604);

return statearr_34116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
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
var G__34118 = arguments.length;
switch (G__34118) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34120 = arguments.length;
switch (G__34120) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__34125 = arguments.length;
switch (G__34125) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32678__auto___35665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34191){
var state_val_34192 = (state_34191[(1)]);
if((state_val_34192 === (7))){
var state_34191__$1 = state_34191;
var statearr_34196_35666 = state_34191__$1;
(statearr_34196_35666[(2)] = null);

(statearr_34196_35666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (1))){
var state_34191__$1 = state_34191;
var statearr_34201_35667 = state_34191__$1;
(statearr_34201_35667[(2)] = null);

(statearr_34201_35667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (4))){
var inst_34136 = (state_34191[(7)]);
var inst_34135 = (state_34191[(8)]);
var inst_34141 = (inst_34136 < inst_34135);
var state_34191__$1 = state_34191;
if(cljs.core.truth_(inst_34141)){
var statearr_34205_35669 = state_34191__$1;
(statearr_34205_35669[(1)] = (6));

} else {
var statearr_34206_35670 = state_34191__$1;
(statearr_34206_35670[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (15))){
var inst_34177 = (state_34191[(9)]);
var inst_34182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34177);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34191__$1,(17),out,inst_34182);
} else {
if((state_val_34192 === (13))){
var inst_34177 = (state_34191[(9)]);
var inst_34177__$1 = (state_34191[(2)]);
var inst_34178 = cljs.core.some(cljs.core.nil_QMARK_,inst_34177__$1);
var state_34191__$1 = (function (){var statearr_34214 = state_34191;
(statearr_34214[(9)] = inst_34177__$1);

return statearr_34214;
})();
if(cljs.core.truth_(inst_34178)){
var statearr_34215_35671 = state_34191__$1;
(statearr_34215_35671[(1)] = (14));

} else {
var statearr_34216_35672 = state_34191__$1;
(statearr_34216_35672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (6))){
var state_34191__$1 = state_34191;
var statearr_34217_35673 = state_34191__$1;
(statearr_34217_35673[(2)] = null);

(statearr_34217_35673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (17))){
var inst_34184 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34221 = state_34191;
(statearr_34221[(10)] = inst_34184);

return statearr_34221;
})();
var statearr_34222_35674 = state_34191__$1;
(statearr_34222_35674[(2)] = null);

(statearr_34222_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (3))){
var inst_34189 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34191__$1,inst_34189);
} else {
if((state_val_34192 === (12))){
var _ = (function (){var statearr_34223 = state_34191;
(statearr_34223[(4)] = cljs.core.rest((state_34191[(4)])));

return statearr_34223;
})();
var state_34191__$1 = state_34191;
var ex34220 = (state_34191__$1[(2)]);
var statearr_34224_35680 = state_34191__$1;
(statearr_34224_35680[(5)] = ex34220);


if((ex34220 instanceof Object)){
var statearr_34225_35681 = state_34191__$1;
(statearr_34225_35681[(1)] = (11));

(statearr_34225_35681[(5)] = null);

} else {
throw ex34220;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (2))){
var inst_34130 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34135 = cnt;
var inst_34136 = (0);
var state_34191__$1 = (function (){var statearr_34226 = state_34191;
(statearr_34226[(7)] = inst_34136);

(statearr_34226[(11)] = inst_34130);

(statearr_34226[(8)] = inst_34135);

return statearr_34226;
})();
var statearr_34227_35682 = state_34191__$1;
(statearr_34227_35682[(2)] = null);

(statearr_34227_35682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (11))){
var inst_34146 = (state_34191[(2)]);
var inst_34151 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34191__$1 = (function (){var statearr_34228 = state_34191;
(statearr_34228[(12)] = inst_34146);

return statearr_34228;
})();
var statearr_34229_35683 = state_34191__$1;
(statearr_34229_35683[(2)] = inst_34151);

(statearr_34229_35683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (9))){
var inst_34136 = (state_34191[(7)]);
var _ = (function (){var statearr_34230 = state_34191;
(statearr_34230[(4)] = cljs.core.cons((12),(state_34191[(4)])));

return statearr_34230;
})();
var inst_34160 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34136) : chs__$1.call(null,inst_34136));
var inst_34161 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34136) : done.call(null,inst_34136));
var inst_34162 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34160,inst_34161);
var ___$1 = (function (){var statearr_34231 = state_34191;
(statearr_34231[(4)] = cljs.core.rest((state_34191[(4)])));

return statearr_34231;
})();
var state_34191__$1 = state_34191;
var statearr_34232_35686 = state_34191__$1;
(statearr_34232_35686[(2)] = inst_34162);

(statearr_34232_35686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (5))){
var inst_34172 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34233 = state_34191;
(statearr_34233[(13)] = inst_34172);

return statearr_34233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34191__$1,(13),dchan);
} else {
if((state_val_34192 === (14))){
var inst_34180 = cljs.core.async.close_BANG_(out);
var state_34191__$1 = state_34191;
var statearr_34234_35687 = state_34191__$1;
(statearr_34234_35687[(2)] = inst_34180);

(statearr_34234_35687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (16))){
var inst_34187 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34235_35690 = state_34191__$1;
(statearr_34235_35690[(2)] = inst_34187);

(statearr_34235_35690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (10))){
var inst_34136 = (state_34191[(7)]);
var inst_34165 = (state_34191[(2)]);
var inst_34166 = (inst_34136 + (1));
var inst_34136__$1 = inst_34166;
var state_34191__$1 = (function (){var statearr_34236 = state_34191;
(statearr_34236[(14)] = inst_34165);

(statearr_34236[(7)] = inst_34136__$1);

return statearr_34236;
})();
var statearr_34237_35691 = state_34191__$1;
(statearr_34237_35691[(2)] = null);

(statearr_34237_35691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (8))){
var inst_34170 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34238_35692 = state_34191__$1;
(statearr_34238_35692[(2)] = inst_34170);

(statearr_34238_35692[(1)] = (5));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34239[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34239[(1)] = (1));

return statearr_34239;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34191){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34191);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34240){var ex__32113__auto__ = e34240;
var statearr_34241_35696 = state_34191;
(statearr_34241_35696[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34191[(4)]))){
var statearr_34242_35701 = state_34191;
(statearr_34242_35701[(1)] = cljs.core.first((state_34191[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_34191;
state_34191 = G__35702;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34243 = f__32679__auto__();
(statearr_34243[(6)] = c__32678__auto___35665);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
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
var G__34248 = arguments.length;
switch (G__34248) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34292){
var state_val_34293 = (state_34292[(1)]);
if((state_val_34293 === (7))){
var inst_34271 = (state_34292[(7)]);
var inst_34270 = (state_34292[(8)]);
var inst_34270__$1 = (state_34292[(2)]);
var inst_34271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34270__$1,(0),null);
var inst_34272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34270__$1,(1),null);
var inst_34273 = (inst_34271__$1 == null);
var state_34292__$1 = (function (){var statearr_34295 = state_34292;
(statearr_34295[(7)] = inst_34271__$1);

(statearr_34295[(9)] = inst_34272);

(statearr_34295[(8)] = inst_34270__$1);

return statearr_34295;
})();
if(cljs.core.truth_(inst_34273)){
var statearr_34296_35713 = state_34292__$1;
(statearr_34296_35713[(1)] = (8));

} else {
var statearr_34297_35714 = state_34292__$1;
(statearr_34297_35714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (1))){
var inst_34249 = cljs.core.vec(chs);
var inst_34251 = inst_34249;
var state_34292__$1 = (function (){var statearr_34298 = state_34292;
(statearr_34298[(10)] = inst_34251);

return statearr_34298;
})();
var statearr_34299_35718 = state_34292__$1;
(statearr_34299_35718[(2)] = null);

(statearr_34299_35718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (4))){
var inst_34251 = (state_34292[(10)]);
var state_34292__$1 = state_34292;
return cljs.core.async.ioc_alts_BANG_(state_34292__$1,(7),inst_34251);
} else {
if((state_val_34293 === (6))){
var inst_34288 = (state_34292[(2)]);
var state_34292__$1 = state_34292;
var statearr_34300_35719 = state_34292__$1;
(statearr_34300_35719[(2)] = inst_34288);

(statearr_34300_35719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (3))){
var inst_34290 = (state_34292[(2)]);
var state_34292__$1 = state_34292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34292__$1,inst_34290);
} else {
if((state_val_34293 === (2))){
var inst_34251 = (state_34292[(10)]);
var inst_34253 = cljs.core.count(inst_34251);
var inst_34254 = (inst_34253 > (0));
var state_34292__$1 = state_34292;
if(cljs.core.truth_(inst_34254)){
var statearr_34302_35722 = state_34292__$1;
(statearr_34302_35722[(1)] = (4));

} else {
var statearr_34303_35723 = state_34292__$1;
(statearr_34303_35723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (11))){
var inst_34251 = (state_34292[(10)]);
var inst_34280 = (state_34292[(2)]);
var tmp34301 = inst_34251;
var inst_34251__$1 = tmp34301;
var state_34292__$1 = (function (){var statearr_34304 = state_34292;
(statearr_34304[(11)] = inst_34280);

(statearr_34304[(10)] = inst_34251__$1);

return statearr_34304;
})();
var statearr_34305_35729 = state_34292__$1;
(statearr_34305_35729[(2)] = null);

(statearr_34305_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (9))){
var inst_34271 = (state_34292[(7)]);
var state_34292__$1 = state_34292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34292__$1,(11),out,inst_34271);
} else {
if((state_val_34293 === (5))){
var inst_34285 = cljs.core.async.close_BANG_(out);
var state_34292__$1 = state_34292;
var statearr_34306_35731 = state_34292__$1;
(statearr_34306_35731[(2)] = inst_34285);

(statearr_34306_35731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (10))){
var inst_34283 = (state_34292[(2)]);
var state_34292__$1 = state_34292;
var statearr_34307_35737 = state_34292__$1;
(statearr_34307_35737[(2)] = inst_34283);

(statearr_34307_35737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34293 === (8))){
var inst_34271 = (state_34292[(7)]);
var inst_34272 = (state_34292[(9)]);
var inst_34270 = (state_34292[(8)]);
var inst_34251 = (state_34292[(10)]);
var inst_34275 = (function (){var cs = inst_34251;
var vec__34266 = inst_34270;
var v = inst_34271;
var c = inst_34272;
return (function (p1__34244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34244_SHARP_);
});
})();
var inst_34276 = cljs.core.filterv(inst_34275,inst_34251);
var inst_34251__$1 = inst_34276;
var state_34292__$1 = (function (){var statearr_34308 = state_34292;
(statearr_34308[(10)] = inst_34251__$1);

return statearr_34308;
})();
var statearr_34309_35741 = state_34292__$1;
(statearr_34309_35741[(2)] = null);

(statearr_34309_35741[(1)] = (2));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34312[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34312[(1)] = (1));

return statearr_34312;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34292){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34292);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34313){var ex__32113__auto__ = e34313;
var statearr_34314_35743 = state_34292;
(statearr_34314_35743[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34292[(4)]))){
var statearr_34315_35744 = state_34292;
(statearr_34315_35744[(1)] = cljs.core.first((state_34292[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35747 = state_34292;
state_34292 = G__35747;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34316 = f__32679__auto__();
(statearr_34316[(6)] = c__32678__auto___35708);

return statearr_34316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34319 = arguments.length;
switch (G__34319) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34352){
var state_val_34353 = (state_34352[(1)]);
if((state_val_34353 === (7))){
var inst_34325 = (state_34352[(7)]);
var inst_34325__$1 = (state_34352[(2)]);
var inst_34326 = (inst_34325__$1 == null);
var inst_34327 = cljs.core.not(inst_34326);
var state_34352__$1 = (function (){var statearr_34354 = state_34352;
(statearr_34354[(7)] = inst_34325__$1);

return statearr_34354;
})();
if(inst_34327){
var statearr_34355_35759 = state_34352__$1;
(statearr_34355_35759[(1)] = (8));

} else {
var statearr_34356_35760 = state_34352__$1;
(statearr_34356_35760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (1))){
var inst_34320 = (0);
var state_34352__$1 = (function (){var statearr_34357 = state_34352;
(statearr_34357[(8)] = inst_34320);

return statearr_34357;
})();
var statearr_34359_35761 = state_34352__$1;
(statearr_34359_35761[(2)] = null);

(statearr_34359_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (4))){
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34352__$1,(7),ch);
} else {
if((state_val_34353 === (6))){
var inst_34347 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34360_35762 = state_34352__$1;
(statearr_34360_35762[(2)] = inst_34347);

(statearr_34360_35762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (3))){
var inst_34349 = (state_34352[(2)]);
var inst_34350 = cljs.core.async.close_BANG_(out);
var state_34352__$1 = (function (){var statearr_34361 = state_34352;
(statearr_34361[(9)] = inst_34349);

return statearr_34361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34352__$1,inst_34350);
} else {
if((state_val_34353 === (2))){
var inst_34320 = (state_34352[(8)]);
var inst_34322 = (inst_34320 < n);
var state_34352__$1 = state_34352;
if(cljs.core.truth_(inst_34322)){
var statearr_34362_35765 = state_34352__$1;
(statearr_34362_35765[(1)] = (4));

} else {
var statearr_34363_35766 = state_34352__$1;
(statearr_34363_35766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (11))){
var inst_34320 = (state_34352[(8)]);
var inst_34330 = (state_34352[(2)]);
var inst_34340 = (inst_34320 + (1));
var inst_34320__$1 = inst_34340;
var state_34352__$1 = (function (){var statearr_34364 = state_34352;
(statearr_34364[(8)] = inst_34320__$1);

(statearr_34364[(10)] = inst_34330);

return statearr_34364;
})();
var statearr_34365_35767 = state_34352__$1;
(statearr_34365_35767[(2)] = null);

(statearr_34365_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (9))){
var state_34352__$1 = state_34352;
var statearr_34366_35768 = state_34352__$1;
(statearr_34366_35768[(2)] = null);

(statearr_34366_35768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (5))){
var state_34352__$1 = state_34352;
var statearr_34367_35769 = state_34352__$1;
(statearr_34367_35769[(2)] = null);

(statearr_34367_35769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (10))){
var inst_34344 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34368_35770 = state_34352__$1;
(statearr_34368_35770[(2)] = inst_34344);

(statearr_34368_35770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (8))){
var inst_34325 = (state_34352[(7)]);
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34352__$1,(11),out,inst_34325);
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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34369[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34369[(1)] = (1));

return statearr_34369;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34352){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34352);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34370){var ex__32113__auto__ = e34370;
var statearr_34371_35771 = state_34352;
(statearr_34371_35771[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34352[(4)]))){
var statearr_34372_35772 = state_34352;
(statearr_34372_35772[(1)] = cljs.core.first((state_34352[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35773 = state_34352;
state_34352 = G__35773;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34373 = f__32679__auto__();
(statearr_34373[(6)] = c__32678__auto___35754);

return statearr_34373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34375 = (function (f,ch,meta34376){
this.f = f;
this.ch = ch;
this.meta34376 = meta34376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34377,meta34376__$1){
var self__ = this;
var _34377__$1 = this;
return (new cljs.core.async.t_cljs$core$async34375(self__.f,self__.ch,meta34376__$1));
}));

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34377){
var self__ = this;
var _34377__$1 = this;
return self__.meta34376;
}));

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34380 = (function (f,ch,meta34376,_,fn1,meta34381){
this.f = f;
this.ch = ch;
this.meta34376 = meta34376;
this._ = _;
this.fn1 = fn1;
this.meta34381 = meta34381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34382,meta34381__$1){
var self__ = this;
var _34382__$1 = this;
return (new cljs.core.async.t_cljs$core$async34380(self__.f,self__.ch,self__.meta34376,self__._,self__.fn1,meta34381__$1));
}));

(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34382){
var self__ = this;
var _34382__$1 = this;
return self__.meta34381;
}));

(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34374_SHARP_){
var G__34385 = (((p1__34374_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34374_SHARP_) : self__.f.call(null,p1__34374_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34385) : f1.call(null,G__34385));
});
}));

(cljs.core.async.t_cljs$core$async34380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34376","meta34376",-2084272122,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34375","cljs.core.async/t_cljs$core$async34375",-684794388,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34381","meta34381",-366255863,null)], null);
}));

(cljs.core.async.t_cljs$core$async34380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34380");

(cljs.core.async.t_cljs$core$async34380.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34380.
 */
cljs.core.async.__GT_t_cljs$core$async34380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34380(f__$1,ch__$1,meta34376__$1,___$2,fn1__$1,meta34381){
return (new cljs.core.async.t_cljs$core$async34380(f__$1,ch__$1,meta34376__$1,___$2,fn1__$1,meta34381));
});

}

return (new cljs.core.async.t_cljs$core$async34380(self__.f,self__.ch,self__.meta34376,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34386 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34386) : self__.f.call(null,G__34386));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34376","meta34376",-2084272122,null)], null);
}));

(cljs.core.async.t_cljs$core$async34375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34375");

(cljs.core.async.t_cljs$core$async34375.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34375.
 */
cljs.core.async.__GT_t_cljs$core$async34375 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34375(f__$1,ch__$1,meta34376){
return (new cljs.core.async.t_cljs$core$async34375(f__$1,ch__$1,meta34376));
});

}

return (new cljs.core.async.t_cljs$core$async34375(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34395 = (function (f,ch,meta34396){
this.f = f;
this.ch = ch;
this.meta34396 = meta34396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34397,meta34396__$1){
var self__ = this;
var _34397__$1 = this;
return (new cljs.core.async.t_cljs$core$async34395(self__.f,self__.ch,meta34396__$1));
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34397){
var self__ = this;
var _34397__$1 = this;
return self__.meta34396;
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34396","meta34396",-1293751021,null)], null);
}));

(cljs.core.async.t_cljs$core$async34395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34395");

(cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34395.
 */
cljs.core.async.__GT_t_cljs$core$async34395 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34395(f__$1,ch__$1,meta34396){
return (new cljs.core.async.t_cljs$core$async34395(f__$1,ch__$1,meta34396));
});

}

return (new cljs.core.async.t_cljs$core$async34395(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34419 = (function (p,ch,meta34420){
this.p = p;
this.ch = ch;
this.meta34420 = meta34420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34421,meta34420__$1){
var self__ = this;
var _34421__$1 = this;
return (new cljs.core.async.t_cljs$core$async34419(self__.p,self__.ch,meta34420__$1));
}));

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34421){
var self__ = this;
var _34421__$1 = this;
return self__.meta34420;
}));

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34420","meta34420",474451971,null)], null);
}));

(cljs.core.async.t_cljs$core$async34419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34419");

(cljs.core.async.t_cljs$core$async34419.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34419.
 */
cljs.core.async.__GT_t_cljs$core$async34419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34419(p__$1,ch__$1,meta34420){
return (new cljs.core.async.t_cljs$core$async34419(p__$1,ch__$1,meta34420));
});

}

return (new cljs.core.async.t_cljs$core$async34419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34435 = arguments.length;
switch (G__34435) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (7))){
var inst_34452 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34459_35805 = state_34456__$1;
(statearr_34459_35805[(2)] = inst_34452);

(statearr_34459_35805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
var statearr_34460_35806 = state_34456__$1;
(statearr_34460_35806[(2)] = null);

(statearr_34460_35806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (4))){
var inst_34438 = (state_34456[(7)]);
var inst_34438__$1 = (state_34456[(2)]);
var inst_34439 = (inst_34438__$1 == null);
var state_34456__$1 = (function (){var statearr_34461 = state_34456;
(statearr_34461[(7)] = inst_34438__$1);

return statearr_34461;
})();
if(cljs.core.truth_(inst_34439)){
var statearr_34469_35807 = state_34456__$1;
(statearr_34469_35807[(1)] = (5));

} else {
var statearr_34470_35808 = state_34456__$1;
(statearr_34470_35808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (6))){
var inst_34438 = (state_34456[(7)]);
var inst_34443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34438) : p.call(null,inst_34438));
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34443)){
var statearr_34471_35810 = state_34456__$1;
(statearr_34471_35810[(1)] = (8));

} else {
var statearr_34472_35814 = state_34456__$1;
(statearr_34472_35814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (3))){
var inst_34454 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
} else {
if((state_val_34457 === (2))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34456__$1,(4),ch);
} else {
if((state_val_34457 === (11))){
var inst_34446 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34474_35815 = state_34456__$1;
(statearr_34474_35815[(2)] = inst_34446);

(statearr_34474_35815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (9))){
var state_34456__$1 = state_34456;
var statearr_34475_35816 = state_34456__$1;
(statearr_34475_35816[(2)] = null);

(statearr_34475_35816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (5))){
var inst_34441 = cljs.core.async.close_BANG_(out);
var state_34456__$1 = state_34456;
var statearr_34476_35817 = state_34456__$1;
(statearr_34476_35817[(2)] = inst_34441);

(statearr_34476_35817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (10))){
var inst_34449 = (state_34456[(2)]);
var state_34456__$1 = (function (){var statearr_34477 = state_34456;
(statearr_34477[(8)] = inst_34449);

return statearr_34477;
})();
var statearr_34478_35818 = state_34456__$1;
(statearr_34478_35818[(2)] = null);

(statearr_34478_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (8))){
var inst_34438 = (state_34456[(7)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(11),out,inst_34438);
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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34479 = [null,null,null,null,null,null,null,null,null];
(statearr_34479[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34479[(1)] = (1));

return statearr_34479;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34456){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34482){var ex__32113__auto__ = e34482;
var statearr_34483_35819 = state_34456;
(statearr_34483_35819[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34456[(4)]))){
var statearr_34484_35820 = state_34456;
(statearr_34484_35820[(1)] = cljs.core.first((state_34456[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35821 = state_34456;
state_34456 = G__35821;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34487 = f__32679__auto__();
(statearr_34487[(6)] = c__32678__auto___35804);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34489 = arguments.length;
switch (G__34489) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32678__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34553){
var state_val_34554 = (state_34553[(1)]);
if((state_val_34554 === (7))){
var inst_34549 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34559_35823 = state_34553__$1;
(statearr_34559_35823[(2)] = inst_34549);

(statearr_34559_35823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (20))){
var inst_34519 = (state_34553[(7)]);
var inst_34530 = (state_34553[(2)]);
var inst_34531 = cljs.core.next(inst_34519);
var inst_34505 = inst_34531;
var inst_34506 = null;
var inst_34507 = (0);
var inst_34508 = (0);
var state_34553__$1 = (function (){var statearr_34560 = state_34553;
(statearr_34560[(8)] = inst_34507);

(statearr_34560[(9)] = inst_34505);

(statearr_34560[(10)] = inst_34506);

(statearr_34560[(11)] = inst_34508);

(statearr_34560[(12)] = inst_34530);

return statearr_34560;
})();
var statearr_34562_35826 = state_34553__$1;
(statearr_34562_35826[(2)] = null);

(statearr_34562_35826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (1))){
var state_34553__$1 = state_34553;
var statearr_34563_35828 = state_34553__$1;
(statearr_34563_35828[(2)] = null);

(statearr_34563_35828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (4))){
var inst_34494 = (state_34553[(13)]);
var inst_34494__$1 = (state_34553[(2)]);
var inst_34495 = (inst_34494__$1 == null);
var state_34553__$1 = (function (){var statearr_34564 = state_34553;
(statearr_34564[(13)] = inst_34494__$1);

return statearr_34564;
})();
if(cljs.core.truth_(inst_34495)){
var statearr_34565_35833 = state_34553__$1;
(statearr_34565_35833[(1)] = (5));

} else {
var statearr_34566_35834 = state_34553__$1;
(statearr_34566_35834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (15))){
var state_34553__$1 = state_34553;
var statearr_34576_35835 = state_34553__$1;
(statearr_34576_35835[(2)] = null);

(statearr_34576_35835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (21))){
var state_34553__$1 = state_34553;
var statearr_34577_35836 = state_34553__$1;
(statearr_34577_35836[(2)] = null);

(statearr_34577_35836[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (13))){
var inst_34507 = (state_34553[(8)]);
var inst_34505 = (state_34553[(9)]);
var inst_34506 = (state_34553[(10)]);
var inst_34508 = (state_34553[(11)]);
var inst_34515 = (state_34553[(2)]);
var inst_34516 = (inst_34508 + (1));
var tmp34573 = inst_34507;
var tmp34574 = inst_34505;
var tmp34575 = inst_34506;
var inst_34505__$1 = tmp34574;
var inst_34506__$1 = tmp34575;
var inst_34507__$1 = tmp34573;
var inst_34508__$1 = inst_34516;
var state_34553__$1 = (function (){var statearr_34581 = state_34553;
(statearr_34581[(8)] = inst_34507__$1);

(statearr_34581[(14)] = inst_34515);

(statearr_34581[(9)] = inst_34505__$1);

(statearr_34581[(10)] = inst_34506__$1);

(statearr_34581[(11)] = inst_34508__$1);

return statearr_34581;
})();
var statearr_34582_35838 = state_34553__$1;
(statearr_34582_35838[(2)] = null);

(statearr_34582_35838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (22))){
var state_34553__$1 = state_34553;
var statearr_34583_35839 = state_34553__$1;
(statearr_34583_35839[(2)] = null);

(statearr_34583_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (6))){
var inst_34494 = (state_34553[(13)]);
var inst_34503 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34494) : f.call(null,inst_34494));
var inst_34504 = cljs.core.seq(inst_34503);
var inst_34505 = inst_34504;
var inst_34506 = null;
var inst_34507 = (0);
var inst_34508 = (0);
var state_34553__$1 = (function (){var statearr_34588 = state_34553;
(statearr_34588[(8)] = inst_34507);

(statearr_34588[(9)] = inst_34505);

(statearr_34588[(10)] = inst_34506);

(statearr_34588[(11)] = inst_34508);

return statearr_34588;
})();
var statearr_34589_35840 = state_34553__$1;
(statearr_34589_35840[(2)] = null);

(statearr_34589_35840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (17))){
var inst_34519 = (state_34553[(7)]);
var inst_34523 = cljs.core.chunk_first(inst_34519);
var inst_34524 = cljs.core.chunk_rest(inst_34519);
var inst_34525 = cljs.core.count(inst_34523);
var inst_34505 = inst_34524;
var inst_34506 = inst_34523;
var inst_34507 = inst_34525;
var inst_34508 = (0);
var state_34553__$1 = (function (){var statearr_34590 = state_34553;
(statearr_34590[(8)] = inst_34507);

(statearr_34590[(9)] = inst_34505);

(statearr_34590[(10)] = inst_34506);

(statearr_34590[(11)] = inst_34508);

return statearr_34590;
})();
var statearr_34597_35842 = state_34553__$1;
(statearr_34597_35842[(2)] = null);

(statearr_34597_35842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (3))){
var inst_34551 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34553__$1,inst_34551);
} else {
if((state_val_34554 === (12))){
var inst_34539 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34598_35843 = state_34553__$1;
(statearr_34598_35843[(2)] = inst_34539);

(statearr_34598_35843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (2))){
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34553__$1,(4),in$);
} else {
if((state_val_34554 === (23))){
var inst_34547 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34605_35844 = state_34553__$1;
(statearr_34605_35844[(2)] = inst_34547);

(statearr_34605_35844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (19))){
var inst_34534 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34606_35848 = state_34553__$1;
(statearr_34606_35848[(2)] = inst_34534);

(statearr_34606_35848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (11))){
var inst_34505 = (state_34553[(9)]);
var inst_34519 = (state_34553[(7)]);
var inst_34519__$1 = cljs.core.seq(inst_34505);
var state_34553__$1 = (function (){var statearr_34607 = state_34553;
(statearr_34607[(7)] = inst_34519__$1);

return statearr_34607;
})();
if(inst_34519__$1){
var statearr_34609_35851 = state_34553__$1;
(statearr_34609_35851[(1)] = (14));

} else {
var statearr_34610_35852 = state_34553__$1;
(statearr_34610_35852[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (9))){
var inst_34541 = (state_34553[(2)]);
var inst_34542 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34553__$1 = (function (){var statearr_34611 = state_34553;
(statearr_34611[(15)] = inst_34541);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34542)){
var statearr_34612_35853 = state_34553__$1;
(statearr_34612_35853[(1)] = (21));

} else {
var statearr_34613_35854 = state_34553__$1;
(statearr_34613_35854[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (5))){
var inst_34497 = cljs.core.async.close_BANG_(out);
var state_34553__$1 = state_34553;
var statearr_34615_35857 = state_34553__$1;
(statearr_34615_35857[(2)] = inst_34497);

(statearr_34615_35857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (14))){
var inst_34519 = (state_34553[(7)]);
var inst_34521 = cljs.core.chunked_seq_QMARK_(inst_34519);
var state_34553__$1 = state_34553;
if(inst_34521){
var statearr_34616_35858 = state_34553__$1;
(statearr_34616_35858[(1)] = (17));

} else {
var statearr_34617_35859 = state_34553__$1;
(statearr_34617_35859[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (16))){
var inst_34537 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34618_35860 = state_34553__$1;
(statearr_34618_35860[(2)] = inst_34537);

(statearr_34618_35860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (10))){
var inst_34506 = (state_34553[(10)]);
var inst_34508 = (state_34553[(11)]);
var inst_34513 = cljs.core._nth(inst_34506,inst_34508);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34553__$1,(13),out,inst_34513);
} else {
if((state_val_34554 === (18))){
var inst_34519 = (state_34553[(7)]);
var inst_34528 = cljs.core.first(inst_34519);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34553__$1,(20),out,inst_34528);
} else {
if((state_val_34554 === (8))){
var inst_34507 = (state_34553[(8)]);
var inst_34508 = (state_34553[(11)]);
var inst_34510 = (inst_34508 < inst_34507);
var inst_34511 = inst_34510;
var state_34553__$1 = state_34553;
if(cljs.core.truth_(inst_34511)){
var statearr_34619_35865 = state_34553__$1;
(statearr_34619_35865[(1)] = (10));

} else {
var statearr_34620_35866 = state_34553__$1;
(statearr_34620_35866[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____0 = (function (){
var statearr_34626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__);

(statearr_34626[(1)] = (1));

return statearr_34626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____1 = (function (state_34553){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34553);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34627){var ex__32113__auto__ = e34627;
var statearr_34628_35867 = state_34553;
(statearr_34628_35867[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34553[(4)]))){
var statearr_34634_35868 = state_34553;
(statearr_34634_35868[(1)] = cljs.core.first((state_34553[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35869 = state_34553;
state_34553 = G__35869;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__ = function(state_34553){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____1.call(this,state_34553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32110__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34635 = f__32679__auto__();
(statearr_34635[(6)] = c__32678__auto__);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

return c__32678__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34641 = arguments.length;
switch (G__34641) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34648 = arguments.length;
switch (G__34648) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34668 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_35881 = state_34676__$1;
(statearr_34678_35881[(2)] = inst_34668);

(statearr_34678_35881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var inst_34649 = null;
var state_34676__$1 = (function (){var statearr_34679 = state_34676;
(statearr_34679[(7)] = inst_34649);

return statearr_34679;
})();
var statearr_34680_35882 = state_34676__$1;
(statearr_34680_35882[(2)] = null);

(statearr_34680_35882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34652 = (state_34676[(8)]);
var inst_34652__$1 = (state_34676[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var inst_34654 = cljs.core.not(inst_34653);
var state_34676__$1 = (function (){var statearr_34681 = state_34676;
(statearr_34681[(8)] = inst_34652__$1);

return statearr_34681;
})();
if(inst_34654){
var statearr_34682_35883 = state_34676__$1;
(statearr_34682_35883[(1)] = (5));

} else {
var statearr_34683_35884 = state_34676__$1;
(statearr_34683_35884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var state_34676__$1 = state_34676;
var statearr_34684_35885 = state_34676__$1;
(statearr_34684_35885[(2)] = null);

(statearr_34684_35885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34670 = (state_34676[(2)]);
var inst_34671 = cljs.core.async.close_BANG_(out);
var state_34676__$1 = (function (){var statearr_34689 = state_34676;
(statearr_34689[(9)] = inst_34670);

return statearr_34689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34671);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34652 = (state_34676[(8)]);
var inst_34662 = (state_34676[(2)]);
var inst_34649 = inst_34652;
var state_34676__$1 = (function (){var statearr_34696 = state_34676;
(statearr_34696[(10)] = inst_34662);

(statearr_34696[(7)] = inst_34649);

return statearr_34696;
})();
var statearr_34697_35896 = state_34676__$1;
(statearr_34697_35896[(2)] = null);

(statearr_34697_35896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (9))){
var inst_34652 = (state_34676[(8)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(11),out,inst_34652);
} else {
if((state_val_34677 === (5))){
var inst_34652 = (state_34676[(8)]);
var inst_34649 = (state_34676[(7)]);
var inst_34656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34652,inst_34649);
var state_34676__$1 = state_34676;
if(inst_34656){
var statearr_34699_35901 = state_34676__$1;
(statearr_34699_35901[(1)] = (8));

} else {
var statearr_34700_35902 = state_34676__$1;
(statearr_34700_35902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var inst_34665 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34701_35903 = state_34676__$1;
(statearr_34701_35903[(2)] = inst_34665);

(statearr_34701_35903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34649 = (state_34676[(7)]);
var tmp34698 = inst_34649;
var inst_34649__$1 = tmp34698;
var state_34676__$1 = (function (){var statearr_34702 = state_34676;
(statearr_34702[(7)] = inst_34649__$1);

return statearr_34702;
})();
var statearr_34703_35904 = state_34676__$1;
(statearr_34703_35904[(2)] = null);

(statearr_34703_35904[(1)] = (2));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34676){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34676);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34705){var ex__32113__auto__ = e34705;
var statearr_34706_35906 = state_34676;
(statearr_34706_35906[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34676[(4)]))){
var statearr_34707_35907 = state_34676;
(statearr_34707_35907[(1)] = cljs.core.first((state_34676[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35911 = state_34676;
state_34676 = G__35911;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34711 = f__32679__auto__();
(statearr_34711[(6)] = c__32678__auto___35880);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34713 = arguments.length;
switch (G__34713) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34751){
var state_val_34752 = (state_34751[(1)]);
if((state_val_34752 === (7))){
var inst_34747 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34753_35916 = state_34751__$1;
(statearr_34753_35916[(2)] = inst_34747);

(statearr_34753_35916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (1))){
var inst_34714 = (new Array(n));
var inst_34715 = inst_34714;
var inst_34716 = (0);
var state_34751__$1 = (function (){var statearr_34754 = state_34751;
(statearr_34754[(7)] = inst_34716);

(statearr_34754[(8)] = inst_34715);

return statearr_34754;
})();
var statearr_34755_35921 = state_34751__$1;
(statearr_34755_35921[(2)] = null);

(statearr_34755_35921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (4))){
var inst_34719 = (state_34751[(9)]);
var inst_34719__$1 = (state_34751[(2)]);
var inst_34720 = (inst_34719__$1 == null);
var inst_34721 = cljs.core.not(inst_34720);
var state_34751__$1 = (function (){var statearr_34756 = state_34751;
(statearr_34756[(9)] = inst_34719__$1);

return statearr_34756;
})();
if(inst_34721){
var statearr_34757_35926 = state_34751__$1;
(statearr_34757_35926[(1)] = (5));

} else {
var statearr_34758_35927 = state_34751__$1;
(statearr_34758_35927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (15))){
var inst_34741 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34759_35928 = state_34751__$1;
(statearr_34759_35928[(2)] = inst_34741);

(statearr_34759_35928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (13))){
var state_34751__$1 = state_34751;
var statearr_34760_35929 = state_34751__$1;
(statearr_34760_35929[(2)] = null);

(statearr_34760_35929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (6))){
var inst_34716 = (state_34751[(7)]);
var inst_34737 = (inst_34716 > (0));
var state_34751__$1 = state_34751;
if(cljs.core.truth_(inst_34737)){
var statearr_34761_35930 = state_34751__$1;
(statearr_34761_35930[(1)] = (12));

} else {
var statearr_34762_35931 = state_34751__$1;
(statearr_34762_35931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (3))){
var inst_34749 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34751__$1,inst_34749);
} else {
if((state_val_34752 === (12))){
var inst_34715 = (state_34751[(8)]);
var inst_34739 = cljs.core.vec(inst_34715);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34751__$1,(15),out,inst_34739);
} else {
if((state_val_34752 === (2))){
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34751__$1,(4),ch);
} else {
if((state_val_34752 === (11))){
var inst_34731 = (state_34751[(2)]);
var inst_34732 = (new Array(n));
var inst_34715 = inst_34732;
var inst_34716 = (0);
var state_34751__$1 = (function (){var statearr_34763 = state_34751;
(statearr_34763[(7)] = inst_34716);

(statearr_34763[(10)] = inst_34731);

(statearr_34763[(8)] = inst_34715);

return statearr_34763;
})();
var statearr_34764_35934 = state_34751__$1;
(statearr_34764_35934[(2)] = null);

(statearr_34764_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (9))){
var inst_34715 = (state_34751[(8)]);
var inst_34729 = cljs.core.vec(inst_34715);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34751__$1,(11),out,inst_34729);
} else {
if((state_val_34752 === (5))){
var inst_34724 = (state_34751[(11)]);
var inst_34716 = (state_34751[(7)]);
var inst_34719 = (state_34751[(9)]);
var inst_34715 = (state_34751[(8)]);
var inst_34723 = (inst_34715[inst_34716] = inst_34719);
var inst_34724__$1 = (inst_34716 + (1));
var inst_34725 = (inst_34724__$1 < n);
var state_34751__$1 = (function (){var statearr_34765 = state_34751;
(statearr_34765[(11)] = inst_34724__$1);

(statearr_34765[(12)] = inst_34723);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34725)){
var statearr_34766_35935 = state_34751__$1;
(statearr_34766_35935[(1)] = (8));

} else {
var statearr_34767_35936 = state_34751__$1;
(statearr_34767_35936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (14))){
var inst_34744 = (state_34751[(2)]);
var inst_34745 = cljs.core.async.close_BANG_(out);
var state_34751__$1 = (function (){var statearr_34769 = state_34751;
(statearr_34769[(13)] = inst_34744);

return statearr_34769;
})();
var statearr_34770_35940 = state_34751__$1;
(statearr_34770_35940[(2)] = inst_34745);

(statearr_34770_35940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (10))){
var inst_34735 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34771_35942 = state_34751__$1;
(statearr_34771_35942[(2)] = inst_34735);

(statearr_34771_35942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (8))){
var inst_34724 = (state_34751[(11)]);
var inst_34715 = (state_34751[(8)]);
var tmp34768 = inst_34715;
var inst_34715__$1 = tmp34768;
var inst_34716 = inst_34724;
var state_34751__$1 = (function (){var statearr_34772 = state_34751;
(statearr_34772[(7)] = inst_34716);

(statearr_34772[(8)] = inst_34715__$1);

return statearr_34772;
})();
var statearr_34773_35943 = state_34751__$1;
(statearr_34773_35943[(2)] = null);

(statearr_34773_35943[(1)] = (2));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34775[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34775[(1)] = (1));

return statearr_34775;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34751){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34751);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34776){var ex__32113__auto__ = e34776;
var statearr_34777_35945 = state_34751;
(statearr_34777_35945[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34751[(4)]))){
var statearr_34778_35950 = state_34751;
(statearr_34778_35950[(1)] = cljs.core.first((state_34751[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35951 = state_34751;
state_34751 = G__35951;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34779 = f__32679__auto__();
(statearr_34779[(6)] = c__32678__auto___35915);

return statearr_34779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34784 = arguments.length;
switch (G__34784) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32678__auto___35955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_34832){
var state_val_34833 = (state_34832[(1)]);
if((state_val_34833 === (7))){
var inst_34828 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34834_35958 = state_34832__$1;
(statearr_34834_35958[(2)] = inst_34828);

(statearr_34834_35958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (1))){
var inst_34788 = [];
var inst_34789 = inst_34788;
var inst_34790 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34832__$1 = (function (){var statearr_34835 = state_34832;
(statearr_34835[(7)] = inst_34789);

(statearr_34835[(8)] = inst_34790);

return statearr_34835;
})();
var statearr_34836_35959 = state_34832__$1;
(statearr_34836_35959[(2)] = null);

(statearr_34836_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (4))){
var inst_34793 = (state_34832[(9)]);
var inst_34793__$1 = (state_34832[(2)]);
var inst_34794 = (inst_34793__$1 == null);
var inst_34795 = cljs.core.not(inst_34794);
var state_34832__$1 = (function (){var statearr_34837 = state_34832;
(statearr_34837[(9)] = inst_34793__$1);

return statearr_34837;
})();
if(inst_34795){
var statearr_34838_35960 = state_34832__$1;
(statearr_34838_35960[(1)] = (5));

} else {
var statearr_34839_35961 = state_34832__$1;
(statearr_34839_35961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (15))){
var inst_34789 = (state_34832[(7)]);
var inst_34820 = cljs.core.vec(inst_34789);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34832__$1,(18),out,inst_34820);
} else {
if((state_val_34833 === (13))){
var inst_34815 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34840_35963 = state_34832__$1;
(statearr_34840_35963[(2)] = inst_34815);

(statearr_34840_35963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (6))){
var inst_34789 = (state_34832[(7)]);
var inst_34817 = inst_34789.length;
var inst_34818 = (inst_34817 > (0));
var state_34832__$1 = state_34832;
if(cljs.core.truth_(inst_34818)){
var statearr_34842_35965 = state_34832__$1;
(statearr_34842_35965[(1)] = (15));

} else {
var statearr_34843_35967 = state_34832__$1;
(statearr_34843_35967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (17))){
var inst_34825 = (state_34832[(2)]);
var inst_34826 = cljs.core.async.close_BANG_(out);
var state_34832__$1 = (function (){var statearr_34844 = state_34832;
(statearr_34844[(10)] = inst_34825);

return statearr_34844;
})();
var statearr_34845_35971 = state_34832__$1;
(statearr_34845_35971[(2)] = inst_34826);

(statearr_34845_35971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (3))){
var inst_34830 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34832__$1,inst_34830);
} else {
if((state_val_34833 === (12))){
var inst_34789 = (state_34832[(7)]);
var inst_34808 = cljs.core.vec(inst_34789);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34832__$1,(14),out,inst_34808);
} else {
if((state_val_34833 === (2))){
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34832__$1,(4),ch);
} else {
if((state_val_34833 === (11))){
var inst_34793 = (state_34832[(9)]);
var inst_34789 = (state_34832[(7)]);
var inst_34797 = (state_34832[(11)]);
var inst_34805 = inst_34789.push(inst_34793);
var tmp34846 = inst_34789;
var inst_34789__$1 = tmp34846;
var inst_34790 = inst_34797;
var state_34832__$1 = (function (){var statearr_34847 = state_34832;
(statearr_34847[(7)] = inst_34789__$1);

(statearr_34847[(8)] = inst_34790);

(statearr_34847[(12)] = inst_34805);

return statearr_34847;
})();
var statearr_34848_35974 = state_34832__$1;
(statearr_34848_35974[(2)] = null);

(statearr_34848_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (9))){
var inst_34790 = (state_34832[(8)]);
var inst_34801 = cljs.core.keyword_identical_QMARK_(inst_34790,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34832__$1 = state_34832;
var statearr_34853_35975 = state_34832__$1;
(statearr_34853_35975[(2)] = inst_34801);

(statearr_34853_35975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (5))){
var inst_34793 = (state_34832[(9)]);
var inst_34798 = (state_34832[(13)]);
var inst_34797 = (state_34832[(11)]);
var inst_34790 = (state_34832[(8)]);
var inst_34797__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34793) : f.call(null,inst_34793));
var inst_34798__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34797__$1,inst_34790);
var state_34832__$1 = (function (){var statearr_34858 = state_34832;
(statearr_34858[(13)] = inst_34798__$1);

(statearr_34858[(11)] = inst_34797__$1);

return statearr_34858;
})();
if(inst_34798__$1){
var statearr_34859_35976 = state_34832__$1;
(statearr_34859_35976[(1)] = (8));

} else {
var statearr_34860_35977 = state_34832__$1;
(statearr_34860_35977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (14))){
var inst_34793 = (state_34832[(9)]);
var inst_34797 = (state_34832[(11)]);
var inst_34810 = (state_34832[(2)]);
var inst_34811 = [];
var inst_34812 = inst_34811.push(inst_34793);
var inst_34789 = inst_34811;
var inst_34790 = inst_34797;
var state_34832__$1 = (function (){var statearr_34861 = state_34832;
(statearr_34861[(7)] = inst_34789);

(statearr_34861[(14)] = inst_34810);

(statearr_34861[(8)] = inst_34790);

(statearr_34861[(15)] = inst_34812);

return statearr_34861;
})();
var statearr_34862_35978 = state_34832__$1;
(statearr_34862_35978[(2)] = null);

(statearr_34862_35978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (16))){
var state_34832__$1 = state_34832;
var statearr_34863_35979 = state_34832__$1;
(statearr_34863_35979[(2)] = null);

(statearr_34863_35979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (10))){
var inst_34803 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
if(cljs.core.truth_(inst_34803)){
var statearr_34864_35980 = state_34832__$1;
(statearr_34864_35980[(1)] = (11));

} else {
var statearr_34865_35981 = state_34832__$1;
(statearr_34865_35981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (18))){
var inst_34822 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34866_35982 = state_34832__$1;
(statearr_34866_35982[(2)] = inst_34822);

(statearr_34866_35982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (8))){
var inst_34798 = (state_34832[(13)]);
var state_34832__$1 = state_34832;
var statearr_34867_35983 = state_34832__$1;
(statearr_34867_35983[(2)] = inst_34798);

(statearr_34867_35983[(1)] = (10));


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
var cljs$core$async$state_machine__32110__auto__ = null;
var cljs$core$async$state_machine__32110__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = cljs$core$async$state_machine__32110__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var cljs$core$async$state_machine__32110__auto____1 = (function (state_34832){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_34832);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e34869){var ex__32113__auto__ = e34869;
var statearr_34870_35990 = state_34832;
(statearr_34870_35990[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_34832[(4)]))){
var statearr_34872_35991 = state_34832;
(statearr_34872_35991[(1)] = cljs.core.first((state_34832[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35992 = state_34832;
state_34832 = G__35992;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
cljs$core$async$state_machine__32110__auto__ = function(state_34832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32110__auto____1.call(this,state_34832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32110__auto____0;
cljs$core$async$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32110__auto____1;
return cljs$core$async$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_34874 = f__32679__auto__();
(statearr_34874[(6)] = c__32678__auto___35955);

return statearr_34874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
