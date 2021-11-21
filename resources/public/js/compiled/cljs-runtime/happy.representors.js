goog.provide('happy.representors');

/**
 * @interface
 */
happy.representors.Representator = function(){};

var happy$representors$Representator$_mime_types$dyn_27374 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.representors._mime_types[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.representors._mime_types["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Representator.-mime-types",_);
}
}
});
happy.representors._mime_types = (function happy$representors$_mime_types(_){
if((((!((_ == null)))) && ((!((_.happy$representors$Representator$_mime_types$arity$1 == null)))))){
return _.happy$representors$Representator$_mime_types$arity$1(_);
} else {
return happy$representors$Representator$_mime_types$dyn_27374(_);
}
});

var happy$representors$Representator$_serialize$dyn_27375 = (function (_,o){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.representors._serialize[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,o) : m__4510__auto__.call(null,_,o));
} else {
var m__4508__auto__ = (happy.representors._serialize["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,o) : m__4508__auto__.call(null,_,o));
} else {
throw cljs.core.missing_protocol("Representator.-serialize",_);
}
}
});
happy.representors._serialize = (function happy$representors$_serialize(_,o){
if((((!((_ == null)))) && ((!((_.happy$representors$Representator$_serialize$arity$2 == null)))))){
return _.happy$representors$Representator$_serialize$arity$2(_,o);
} else {
return happy$representors$Representator$_serialize$dyn_27375(_,o);
}
});

var happy$representors$Representator$_unserialize$dyn_27376 = (function (_,o){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.representors._unserialize[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,o) : m__4510__auto__.call(null,_,o));
} else {
var m__4508__auto__ = (happy.representors._unserialize["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,o) : m__4508__auto__.call(null,_,o));
} else {
throw cljs.core.missing_protocol("Representator.-unserialize",_);
}
}
});
happy.representors._unserialize = (function happy$representors$_unserialize(_,o){
if((((!((_ == null)))) && ((!((_.happy$representors$Representator$_unserialize$arity$2 == null)))))){
return _.happy$representors$Representator$_unserialize$arity$2(_,o);
} else {
return happy$representors$Representator$_unserialize$dyn_27376(_,o);
}
});

happy.representors.valid_QMARK_ = (function happy$representors$valid_QMARK_(s,t){
if(happy.mime.wildcard_QMARK_(s)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(happy.mime.top_level(s),happy.mime.top_level(t));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,happy.mime.generic(t));
}
});
happy.representors.valid_for_mime_QMARK_ = (function happy$representors$valid_for_mime_QMARK_(s,r){
return cljs.core.some((function (p1__27360_SHARP_){
if(happy.representors.valid_QMARK_(p1__27360_SHARP_,s)){
return r;
} else {
return null;
}
}),happy.representors._mime_types(r));
});
happy.representors.matching_representor = (function happy$representors$matching_representor(req,v,mt){
var temp__5751__auto__ = (function (){var or__4212__auto__ = mt;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.first(happy.headers.content_type(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(req)));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ct = temp__5751__auto__;
return cljs.core.some((function (p1__27361_SHARP_){
return happy.representors.valid_for_mime_QMARK_(ct,p1__27361_SHARP_);
}),v);
} else {
return null;
}
});
happy.representors.as_request_interceptor = (function happy$representors$as_request_interceptor(v){
return (function (p__27363){
var vec__27364 = p__27363;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27364,(0),null);
var om = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27364,(1),null);
var o = vec__27364;
if(cljs.core.contains_QMARK_(req,new cljs.core.Keyword(null,"body","body",-2049205669))){
var temp__5751__auto__ = happy.representors.matching_representor(req,v,new cljs.core.Keyword(null,"override-request-mime-type","override-request-mime-type",-1245169414).cljs$core$IFn$_invoke$arity$1(om));
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o,(0),cljs.core.update.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__27362_SHARP_){
return happy.representors._serialize(r,p1__27362_SHARP_);
})));
} else {
return null;
}
} else {
return null;
}
});
});
happy.representors.as_response_interceptor = (function happy$representors$as_response_interceptor(v){
return (function (resp,om){
if(cljs.core.contains_QMARK_(resp,new cljs.core.Keyword(null,"body","body",-2049205669))){
var temp__5751__auto__ = happy.representors.matching_representor(resp,v,new cljs.core.Keyword(null,"override-response-mime-type","override-response-mime-type",2013822535).cljs$core$IFn$_invoke$arity$1(om));
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__27367_SHARP_){
return happy.representors._unserialize(r,p1__27367_SHARP_);
}));
} else {
return null;
}
} else {
return null;
}
});
});
happy.representors.binary_representor = (function (){
if((typeof happy !== 'undefined') && (typeof happy.representors !== 'undefined') && (typeof happy.representors.t_happy$representors27368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {happy.representors.Representator}
 * @implements {cljs.core.IWithMeta}
*/
happy.representors.t_happy$representors27368 = (function (meta27369){
this.meta27369 = meta27369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(happy.representors.t_happy$representors27368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27370,meta27369__$1){
var self__ = this;
var _27370__$1 = this;
return (new happy.representors.t_happy$representors27368(meta27369__$1));
}));

(happy.representors.t_happy$representors27368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27370){
var self__ = this;
var _27370__$1 = this;
return self__.meta27369;
}));

(happy.representors.t_happy$representors27368.prototype.happy$representors$Representator$ = cljs.core.PROTOCOL_SENTINEL);

(happy.representors.t_happy$representors27368.prototype.happy$representors$Representator$_mime_types$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["audio/*",null,"image/*",null,"video/*",null], null), null);
}));

(happy.representors.t_happy$representors27368.prototype.happy$representors$Representator$_serialize$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(happy.representors.t_happy$representors27368.prototype.happy$representors$Representator$_unserialize$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(happy.representors.t_happy$representors27368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27369","meta27369",1854711756,null)], null);
}));

(happy.representors.t_happy$representors27368.cljs$lang$type = true);

(happy.representors.t_happy$representors27368.cljs$lang$ctorStr = "happy.representors/t_happy$representors27368");

(happy.representors.t_happy$representors27368.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.representors/t_happy$representors27368");
}));

/**
 * Positional factory function for happy.representors/t_happy$representors27368.
 */
happy.representors.__GT_t_happy$representors27368 = (function happy$representors$__GT_t_happy$representors27368(meta27369){
return (new happy.representors.t_happy$representors27368(meta27369));
});

}

return (new happy.representors.t_happy$representors27368(cljs.core.PersistentArrayMap.EMPTY));
})()
;
happy.representors.text_representor = (function (){
if((typeof happy !== 'undefined') && (typeof happy.representors !== 'undefined') && (typeof happy.representors.t_happy$representors27371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {happy.representors.Representator}
 * @implements {cljs.core.IWithMeta}
*/
happy.representors.t_happy$representors27371 = (function (meta27372){
this.meta27372 = meta27372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(happy.representors.t_happy$representors27371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27373,meta27372__$1){
var self__ = this;
var _27373__$1 = this;
return (new happy.representors.t_happy$representors27371(meta27372__$1));
}));

(happy.representors.t_happy$representors27371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27373){
var self__ = this;
var _27373__$1 = this;
return self__.meta27372;
}));

(happy.representors.t_happy$representors27371.prototype.happy$representors$Representator$ = cljs.core.PROTOCOL_SENTINEL);

(happy.representors.t_happy$representors27371.prototype.happy$representors$Representator$_mime_types$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["text/*",null], null), null);
}));

(happy.representors.t_happy$representors27371.prototype.happy$representors$Representator$_serialize$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(happy.representors.t_happy$representors27371.prototype.happy$representors$Representator$_unserialize$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(happy.representors.t_happy$representors27371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27372","meta27372",1542267274,null)], null);
}));

(happy.representors.t_happy$representors27371.cljs$lang$type = true);

(happy.representors.t_happy$representors27371.cljs$lang$ctorStr = "happy.representors/t_happy$representors27371");

(happy.representors.t_happy$representors27371.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.representors/t_happy$representors27371");
}));

/**
 * Positional factory function for happy.representors/t_happy$representors27371.
 */
happy.representors.__GT_t_happy$representors27371 = (function happy$representors$__GT_t_happy$representors27371(meta27372){
return (new happy.representors.t_happy$representors27371(meta27372));
});

}

return (new happy.representors.t_happy$representors27371(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=happy.representors.js.map
