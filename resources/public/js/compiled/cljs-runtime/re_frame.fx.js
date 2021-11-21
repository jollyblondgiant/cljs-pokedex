goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38918 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38919 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38919);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39001 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39001)){
var new_db_39002 = temp__5753__auto___39001;
var fexpr__38921_39003 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38921_39003.cljs$core$IFn$_invoke$arity$1 ? fexpr__38921_39003.cljs$core$IFn$_invoke$arity$1(new_db_39002) : fexpr__38921_39003.call(null,new_db_39002));
} else {
}

var seq__38923 = cljs.core.seq(effects_without_db);
var chunk__38924 = null;
var count__38925 = (0);
var i__38926 = (0);
while(true){
if((i__38926 < count__38925)){
var vec__38936 = chunk__38924.cljs$core$IIndexed$_nth$arity$2(null,i__38926);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936,(1),null);
var temp__5751__auto___39004 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39004)){
var effect_fn_39005 = temp__5751__auto___39004;
(effect_fn_39005.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39005.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39005.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39006 = seq__38923;
var G__39007 = chunk__38924;
var G__39008 = count__38925;
var G__39009 = (i__38926 + (1));
seq__38923 = G__39006;
chunk__38924 = G__39007;
count__38925 = G__39008;
i__38926 = G__39009;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38923);
if(temp__5753__auto__){
var seq__38923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38923__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38923__$1);
var G__39010 = cljs.core.chunk_rest(seq__38923__$1);
var G__39011 = c__4638__auto__;
var G__39012 = cljs.core.count(c__4638__auto__);
var G__39013 = (0);
seq__38923 = G__39010;
chunk__38924 = G__39011;
count__38925 = G__39012;
i__38926 = G__39013;
continue;
} else {
var vec__38951 = cljs.core.first(seq__38923__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(1),null);
var temp__5751__auto___39014 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39014)){
var effect_fn_39015 = temp__5751__auto___39014;
(effect_fn_39015.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39015.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39015.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39016 = cljs.core.next(seq__38923__$1);
var G__39017 = null;
var G__39018 = (0);
var G__39019 = (0);
seq__38923 = G__39016;
chunk__38924 = G__39017;
count__38925 = G__39018;
i__38926 = G__39019;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38586__auto___39020 = re_frame.interop.now();
var duration__38587__auto___39021 = (end__38586__auto___39020 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38587__auto___39021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38586__auto___39020);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38918);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39022 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39022)){
var new_db_39023 = temp__5753__auto___39022;
var fexpr__38954_39024 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38954_39024.cljs$core$IFn$_invoke$arity$1 ? fexpr__38954_39024.cljs$core$IFn$_invoke$arity$1(new_db_39023) : fexpr__38954_39024.call(null,new_db_39023));
} else {
}

var seq__38955 = cljs.core.seq(effects_without_db);
var chunk__38956 = null;
var count__38957 = (0);
var i__38958 = (0);
while(true){
if((i__38958 < count__38957)){
var vec__38965 = chunk__38956.cljs$core$IIndexed$_nth$arity$2(null,i__38958);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38965,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38965,(1),null);
var temp__5751__auto___39025 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39025)){
var effect_fn_39026 = temp__5751__auto___39025;
(effect_fn_39026.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39026.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39026.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39027 = seq__38955;
var G__39028 = chunk__38956;
var G__39029 = count__38957;
var G__39030 = (i__38958 + (1));
seq__38955 = G__39027;
chunk__38956 = G__39028;
count__38957 = G__39029;
i__38958 = G__39030;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38955);
if(temp__5753__auto__){
var seq__38955__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38955__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38955__$1);
var G__39031 = cljs.core.chunk_rest(seq__38955__$1);
var G__39032 = c__4638__auto__;
var G__39033 = cljs.core.count(c__4638__auto__);
var G__39034 = (0);
seq__38955 = G__39031;
chunk__38956 = G__39032;
count__38957 = G__39033;
i__38958 = G__39034;
continue;
} else {
var vec__38968 = cljs.core.first(seq__38955__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38968,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38968,(1),null);
var temp__5751__auto___39035 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39035)){
var effect_fn_39036 = temp__5751__auto___39035;
(effect_fn_39036.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39036.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39036.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39037 = cljs.core.next(seq__38955__$1);
var G__39038 = null;
var G__39039 = (0);
var G__39040 = (0);
seq__38955 = G__39037;
chunk__38956 = G__39038;
count__38957 = G__39039;
i__38958 = G__39040;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38971){
var map__38972 = p__38971;
var map__38972__$1 = cljs.core.__destructure_map(map__38972);
var effect = map__38972__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38972__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38972__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38973 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38974 = null;
var count__38975 = (0);
var i__38976 = (0);
while(true){
if((i__38976 < count__38975)){
var effect = chunk__38974.cljs$core$IIndexed$_nth$arity$2(null,i__38976);
re_frame.fx.dispatch_later(effect);


var G__39041 = seq__38973;
var G__39042 = chunk__38974;
var G__39043 = count__38975;
var G__39044 = (i__38976 + (1));
seq__38973 = G__39041;
chunk__38974 = G__39042;
count__38975 = G__39043;
i__38976 = G__39044;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38973);
if(temp__5753__auto__){
var seq__38973__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38973__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38973__$1);
var G__39045 = cljs.core.chunk_rest(seq__38973__$1);
var G__39046 = c__4638__auto__;
var G__39047 = cljs.core.count(c__4638__auto__);
var G__39048 = (0);
seq__38973 = G__39045;
chunk__38974 = G__39046;
count__38975 = G__39047;
i__38976 = G__39048;
continue;
} else {
var effect = cljs.core.first(seq__38973__$1);
re_frame.fx.dispatch_later(effect);


var G__39049 = cljs.core.next(seq__38973__$1);
var G__39050 = null;
var G__39051 = (0);
var G__39052 = (0);
seq__38973 = G__39049;
chunk__38974 = G__39050;
count__38975 = G__39051;
i__38976 = G__39052;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38977 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38978 = null;
var count__38979 = (0);
var i__38980 = (0);
while(true){
if((i__38980 < count__38979)){
var vec__38987 = chunk__38978.cljs$core$IIndexed$_nth$arity$2(null,i__38980);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39053 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39053)){
var effect_fn_39054 = temp__5751__auto___39053;
(effect_fn_39054.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39054.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39054.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39055 = seq__38977;
var G__39056 = chunk__38978;
var G__39057 = count__38979;
var G__39058 = (i__38980 + (1));
seq__38977 = G__39055;
chunk__38978 = G__39056;
count__38979 = G__39057;
i__38980 = G__39058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38977);
if(temp__5753__auto__){
var seq__38977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38977__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38977__$1);
var G__39059 = cljs.core.chunk_rest(seq__38977__$1);
var G__39060 = c__4638__auto__;
var G__39061 = cljs.core.count(c__4638__auto__);
var G__39062 = (0);
seq__38977 = G__39059;
chunk__38978 = G__39060;
count__38979 = G__39061;
i__38980 = G__39062;
continue;
} else {
var vec__38990 = cljs.core.first(seq__38977__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39063)){
var effect_fn_39064 = temp__5751__auto___39063;
(effect_fn_39064.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39064.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39064.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39065 = cljs.core.next(seq__38977__$1);
var G__39066 = null;
var G__39067 = (0);
var G__39068 = (0);
seq__38977 = G__39065;
chunk__38978 = G__39066;
count__38979 = G__39067;
i__38980 = G__39068;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38993 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38994 = null;
var count__38995 = (0);
var i__38996 = (0);
while(true){
if((i__38996 < count__38995)){
var event = chunk__38994.cljs$core$IIndexed$_nth$arity$2(null,i__38996);
re_frame.router.dispatch(event);


var G__39069 = seq__38993;
var G__39070 = chunk__38994;
var G__39071 = count__38995;
var G__39072 = (i__38996 + (1));
seq__38993 = G__39069;
chunk__38994 = G__39070;
count__38995 = G__39071;
i__38996 = G__39072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38993);
if(temp__5753__auto__){
var seq__38993__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38993__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38993__$1);
var G__39073 = cljs.core.chunk_rest(seq__38993__$1);
var G__39074 = c__4638__auto__;
var G__39075 = cljs.core.count(c__4638__auto__);
var G__39076 = (0);
seq__38993 = G__39073;
chunk__38994 = G__39074;
count__38995 = G__39075;
i__38996 = G__39076;
continue;
} else {
var event = cljs.core.first(seq__38993__$1);
re_frame.router.dispatch(event);


var G__39077 = cljs.core.next(seq__38993__$1);
var G__39078 = null;
var G__39079 = (0);
var G__39080 = (0);
seq__38993 = G__39077;
chunk__38994 = G__39078;
count__38995 = G__39079;
i__38996 = G__39080;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38997 = cljs.core.seq(value);
var chunk__38998 = null;
var count__38999 = (0);
var i__39000 = (0);
while(true){
if((i__39000 < count__38999)){
var event = chunk__38998.cljs$core$IIndexed$_nth$arity$2(null,i__39000);
clear_event(event);


var G__39081 = seq__38997;
var G__39082 = chunk__38998;
var G__39083 = count__38999;
var G__39084 = (i__39000 + (1));
seq__38997 = G__39081;
chunk__38998 = G__39082;
count__38999 = G__39083;
i__39000 = G__39084;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38997);
if(temp__5753__auto__){
var seq__38997__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38997__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38997__$1);
var G__39085 = cljs.core.chunk_rest(seq__38997__$1);
var G__39086 = c__4638__auto__;
var G__39087 = cljs.core.count(c__4638__auto__);
var G__39088 = (0);
seq__38997 = G__39085;
chunk__38998 = G__39086;
count__38999 = G__39087;
i__39000 = G__39088;
continue;
} else {
var event = cljs.core.first(seq__38997__$1);
clear_event(event);


var G__39089 = cljs.core.next(seq__38997__$1);
var G__39090 = null;
var G__39091 = (0);
var G__39092 = (0);
seq__38997 = G__39089;
chunk__38998 = G__39090;
count__38999 = G__39091;
i__39000 = G__39092;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
