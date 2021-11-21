goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38606){
var map__38607 = p__38606;
var map__38607__$1 = cljs.core.__destructure_map(map__38607);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38611_38641 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38612_38642 = null;
var count__38613_38643 = (0);
var i__38614_38644 = (0);
while(true){
if((i__38614_38644 < count__38613_38643)){
var vec__38627_38645 = chunk__38612_38642.cljs$core$IIndexed$_nth$arity$2(null,i__38614_38644);
var k_38646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38627_38645,(0),null);
var cb_38647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38627_38645,(1),null);
try{var G__38631_38648 = cljs.core.deref(re_frame.trace.traces);
(cb_38647.cljs$core$IFn$_invoke$arity$1 ? cb_38647.cljs$core$IFn$_invoke$arity$1(G__38631_38648) : cb_38647.call(null,G__38631_38648));
}catch (e38630){var e_38649 = e38630;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38646,"while storing",cljs.core.deref(re_frame.trace.traces),e_38649], 0));
}

var G__38650 = seq__38611_38641;
var G__38651 = chunk__38612_38642;
var G__38652 = count__38613_38643;
var G__38653 = (i__38614_38644 + (1));
seq__38611_38641 = G__38650;
chunk__38612_38642 = G__38651;
count__38613_38643 = G__38652;
i__38614_38644 = G__38653;
continue;
} else {
var temp__5753__auto___38654 = cljs.core.seq(seq__38611_38641);
if(temp__5753__auto___38654){
var seq__38611_38655__$1 = temp__5753__auto___38654;
if(cljs.core.chunked_seq_QMARK_(seq__38611_38655__$1)){
var c__4638__auto___38656 = cljs.core.chunk_first(seq__38611_38655__$1);
var G__38657 = cljs.core.chunk_rest(seq__38611_38655__$1);
var G__38658 = c__4638__auto___38656;
var G__38659 = cljs.core.count(c__4638__auto___38656);
var G__38660 = (0);
seq__38611_38641 = G__38657;
chunk__38612_38642 = G__38658;
count__38613_38643 = G__38659;
i__38614_38644 = G__38660;
continue;
} else {
var vec__38632_38661 = cljs.core.first(seq__38611_38655__$1);
var k_38662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38632_38661,(0),null);
var cb_38663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38632_38661,(1),null);
try{var G__38636_38664 = cljs.core.deref(re_frame.trace.traces);
(cb_38663.cljs$core$IFn$_invoke$arity$1 ? cb_38663.cljs$core$IFn$_invoke$arity$1(G__38636_38664) : cb_38663.call(null,G__38636_38664));
}catch (e38635){var e_38665 = e38635;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38662,"while storing",cljs.core.deref(re_frame.trace.traces),e_38665], 0));
}

var G__38666 = cljs.core.next(seq__38611_38655__$1);
var G__38667 = null;
var G__38668 = (0);
var G__38669 = (0);
seq__38611_38641 = G__38666;
chunk__38612_38642 = G__38667;
count__38613_38643 = G__38668;
i__38614_38644 = G__38669;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
