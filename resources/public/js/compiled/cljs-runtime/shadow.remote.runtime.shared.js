goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32351,res){
var map__32352 = p__32351;
var map__32352__$1 = cljs.core.__destructure_map(map__32352);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32352__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32352__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32353 = res;
var G__32353__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32353,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32353);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32353__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32353__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32368 = arguments.length;
switch (G__32368) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32373,msg,handlers,timeout_after_ms){
var map__32378 = p__32373;
var map__32378__$1 = cljs.core.__destructure_map(map__32378);
var runtime = map__32378__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32378__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32519 = arguments.length;
var i__4819__auto___32520 = (0);
while(true){
if((i__4819__auto___32520 < len__4818__auto___32519)){
args__4824__auto__.push((arguments[i__4819__auto___32520]));

var G__32521 = (i__4819__auto___32520 + (1));
i__4819__auto___32520 = G__32521;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32402,ev,args){
var map__32403 = p__32402;
var map__32403__$1 = cljs.core.__destructure_map(map__32403);
var runtime = map__32403__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32403__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32404 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32407 = null;
var count__32408 = (0);
var i__32409 = (0);
while(true){
if((i__32409 < count__32408)){
var ext = chunk__32407.cljs$core$IIndexed$_nth$arity$2(null,i__32409);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32523 = seq__32404;
var G__32524 = chunk__32407;
var G__32525 = count__32408;
var G__32526 = (i__32409 + (1));
seq__32404 = G__32523;
chunk__32407 = G__32524;
count__32408 = G__32525;
i__32409 = G__32526;
continue;
} else {
var G__32527 = seq__32404;
var G__32528 = chunk__32407;
var G__32529 = count__32408;
var G__32530 = (i__32409 + (1));
seq__32404 = G__32527;
chunk__32407 = G__32528;
count__32408 = G__32529;
i__32409 = G__32530;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32404);
if(temp__5753__auto__){
var seq__32404__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32404__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32404__$1);
var G__32531 = cljs.core.chunk_rest(seq__32404__$1);
var G__32532 = c__4638__auto__;
var G__32533 = cljs.core.count(c__4638__auto__);
var G__32534 = (0);
seq__32404 = G__32531;
chunk__32407 = G__32532;
count__32408 = G__32533;
i__32409 = G__32534;
continue;
} else {
var ext = cljs.core.first(seq__32404__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32535 = cljs.core.next(seq__32404__$1);
var G__32536 = null;
var G__32537 = (0);
var G__32538 = (0);
seq__32404 = G__32535;
chunk__32407 = G__32536;
count__32408 = G__32537;
i__32409 = G__32538;
continue;
} else {
var G__32539 = cljs.core.next(seq__32404__$1);
var G__32540 = null;
var G__32541 = (0);
var G__32542 = (0);
seq__32404 = G__32539;
chunk__32407 = G__32540;
count__32408 = G__32541;
i__32409 = G__32542;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32399){
var G__32400 = cljs.core.first(seq32399);
var seq32399__$1 = cljs.core.next(seq32399);
var G__32401 = cljs.core.first(seq32399__$1);
var seq32399__$2 = cljs.core.next(seq32399__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32400,G__32401,seq32399__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32441,p__32442){
var map__32443 = p__32441;
var map__32443__$1 = cljs.core.__destructure_map(map__32443);
var runtime = map__32443__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32443__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32444 = p__32442;
var map__32444__$1 = cljs.core.__destructure_map(map__32444);
var msg = map__32444__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32444__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32445 = cljs.core.deref(state_ref);
var map__32445__$1 = cljs.core.__destructure_map(map__32445);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32445__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32445__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32449){
var map__32450 = p__32449;
var map__32450__$1 = cljs.core.__destructure_map(map__32450);
var runtime = map__32450__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32450__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32451,msg){
var map__32453 = p__32451;
var map__32453__$1 = cljs.core.__destructure_map(map__32453);
var runtime = map__32453__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32453__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32454,key,p__32455){
var map__32456 = p__32454;
var map__32456__$1 = cljs.core.__destructure_map(map__32456);
var state = map__32456__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32456__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32457 = p__32455;
var map__32457__$1 = cljs.core.__destructure_map(map__32457);
var spec = map__32457__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32459,key,spec){
var map__32460 = p__32459;
var map__32460__$1 = cljs.core.__destructure_map(map__32460);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32461_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32461_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32462_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32462_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32463_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32463_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32464_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32464_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32465_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32465_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32466,key){
var map__32467 = p__32466;
var map__32467__$1 = cljs.core.__destructure_map(map__32467);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32467__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32470,msg){
var map__32471 = p__32470;
var map__32471__$1 = cljs.core.__destructure_map(map__32471);
var runtime = map__32471__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32471__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32474,p__32475){
var map__32476 = p__32474;
var map__32476__$1 = cljs.core.__destructure_map(map__32476);
var runtime = map__32476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32477 = p__32475;
var map__32477__$1 = cljs.core.__destructure_map(map__32477);
var msg = map__32477__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32479 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32481 = null;
var count__32482 = (0);
var i__32483 = (0);
while(true){
if((i__32483 < count__32482)){
var map__32505 = chunk__32481.cljs$core$IIndexed$_nth$arity$2(null,i__32483);
var map__32505__$1 = cljs.core.__destructure_map(map__32505);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32631 = seq__32479;
var G__32632 = chunk__32481;
var G__32633 = count__32482;
var G__32634 = (i__32483 + (1));
seq__32479 = G__32631;
chunk__32481 = G__32632;
count__32482 = G__32633;
i__32483 = G__32634;
continue;
} else {
var G__32635 = seq__32479;
var G__32636 = chunk__32481;
var G__32637 = count__32482;
var G__32638 = (i__32483 + (1));
seq__32479 = G__32635;
chunk__32481 = G__32636;
count__32482 = G__32637;
i__32483 = G__32638;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32479);
if(temp__5753__auto__){
var seq__32479__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32479__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32479__$1);
var G__32646 = cljs.core.chunk_rest(seq__32479__$1);
var G__32647 = c__4638__auto__;
var G__32648 = cljs.core.count(c__4638__auto__);
var G__32649 = (0);
seq__32479 = G__32646;
chunk__32481 = G__32647;
count__32482 = G__32648;
i__32483 = G__32649;
continue;
} else {
var map__32512 = cljs.core.first(seq__32479__$1);
var map__32512__$1 = cljs.core.__destructure_map(map__32512);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32512__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32651 = cljs.core.next(seq__32479__$1);
var G__32652 = null;
var G__32653 = (0);
var G__32654 = (0);
seq__32479 = G__32651;
chunk__32481 = G__32652;
count__32482 = G__32653;
i__32483 = G__32654;
continue;
} else {
var G__32655 = cljs.core.next(seq__32479__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32479 = G__32655;
chunk__32481 = G__32656;
count__32482 = G__32657;
i__32483 = G__32658;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
