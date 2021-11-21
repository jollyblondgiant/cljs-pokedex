goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35984,p__35985){
var map__35987 = p__35984;
var map__35987__$1 = cljs.core.__destructure_map(map__35987);
var svc = map__35987__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35989 = p__35985;
var map__35989__$1 = cljs.core.__destructure_map(map__35989);
var msg = map__35989__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35989__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36003,p__36004){
var map__36005 = p__36003;
var map__36005__$1 = cljs.core.__destructure_map(map__36005);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36006 = p__36004;
var map__36006__$1 = cljs.core.__destructure_map(map__36006);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36014,p__36015){
var map__36016 = p__36014;
var map__36016__$1 = cljs.core.__destructure_map(map__36016);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36017 = p__36015;
var map__36017__$1 = cljs.core.__destructure_map(map__36017);
var msg = map__36017__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36017__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36018,tid){
var map__36021 = p__36018;
var map__36021__$1 = cljs.core.__destructure_map(map__36021);
var svc = map__36021__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36035 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36036 = null;
var count__36037 = (0);
var i__36038 = (0);
while(true){
if((i__36038 < count__36037)){
var vec__36053 = chunk__36036.cljs$core$IIndexed$_nth$arity$2(null,i__36038);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36065 = seq__36035;
var G__36066 = chunk__36036;
var G__36067 = count__36037;
var G__36068 = (i__36038 + (1));
seq__36035 = G__36065;
chunk__36036 = G__36066;
count__36037 = G__36067;
i__36038 = G__36068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36035);
if(temp__5753__auto__){
var seq__36035__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36035__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36035__$1);
var G__36069 = cljs.core.chunk_rest(seq__36035__$1);
var G__36070 = c__4638__auto__;
var G__36071 = cljs.core.count(c__4638__auto__);
var G__36072 = (0);
seq__36035 = G__36069;
chunk__36036 = G__36070;
count__36037 = G__36071;
i__36038 = G__36072;
continue;
} else {
var vec__36057 = cljs.core.first(seq__36035__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36073 = cljs.core.next(seq__36035__$1);
var G__36074 = null;
var G__36075 = (0);
var G__36076 = (0);
seq__36035 = G__36073;
chunk__36036 = G__36074;
count__36037 = G__36075;
i__36038 = G__36076;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36025_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36025_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36026_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36026_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36027_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36027_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36028_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36028_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36060){
var map__36061 = p__36060;
var map__36061__$1 = cljs.core.__destructure_map(map__36061);
var svc = map__36061__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36061__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
