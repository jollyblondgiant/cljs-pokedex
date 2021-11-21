goog.provide('happy.client.xmlhttprequest');
happy.client.xmlhttprequest.reduce_headers = (function happy$client$xmlhttprequest$reduce_headers(m,line){
var vec__27434 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(line,/:/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434,(1),null);
var n = clojure.string.lower_case(clojure.string.trim(k));
var v__$1 = clojure.string.trim(v);
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,n);
if(cljs.core.truth_(temp__5751__auto__)){
var ov = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,n,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(ov))?ov:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ov],null))),v__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,n,v__$1);
}
});
happy.client.xmlhttprequest.parse_headers = (function happy$client$xmlhttprequest$parse_headers(s){
var headers = clojure.string.replace(s,/\n$/,"");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(happy.client.xmlhttprequest.reduce_headers,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split_lines(headers));
});
happy.client.xmlhttprequest.progress_details = (function happy$client$xmlhttprequest$progress_details(evt){
if(cljs.core.truth_(evt.lengthComputable)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded,new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null);
} else {
return null;
}
});

/**
* @constructor
 * @implements {happy.core.RequestHandler}
*/
happy.client.xmlhttprequest.XHRRequestHandler = (function (xhr){
this.xhr = xhr;
});
(happy.client.xmlhttprequest.XHRRequestHandler.prototype.happy$core$RequestHandler$ = cljs.core.PROTOCOL_SENTINEL);

(happy.client.xmlhttprequest.XHRRequestHandler.prototype.happy$core$RequestHandler$_abort$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xhr.abort();
}));

(happy.client.xmlhttprequest.XHRRequestHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xhr","xhr",1462820676,null)], null);
}));

(happy.client.xmlhttprequest.XHRRequestHandler.cljs$lang$type = true);

(happy.client.xmlhttprequest.XHRRequestHandler.cljs$lang$ctorStr = "happy.client.xmlhttprequest/XHRRequestHandler");

(happy.client.xmlhttprequest.XHRRequestHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.client.xmlhttprequest/XHRRequestHandler");
}));

/**
 * Positional factory function for happy.client.xmlhttprequest/XHRRequestHandler.
 */
happy.client.xmlhttprequest.__GT_XHRRequestHandler = (function happy$client$xmlhttprequest$__GT_XHRRequestHandler(xhr){
return (new happy.client.xmlhttprequest.XHRRequestHandler(xhr));
});


/**
* @constructor
 * @implements {happy.core.ResponseHandler}
*/
happy.client.xmlhttprequest.XHRResponseHandler = (function (xhr){
this.xhr = xhr;
});
(happy.client.xmlhttprequest.XHRResponseHandler.prototype.happy$core$ResponseHandler$ = cljs.core.PROTOCOL_SENTINEL);

(happy.client.xmlhttprequest.XHRResponseHandler.prototype.happy$core$ResponseHandler$_status$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xhr.status;
}));

(happy.client.xmlhttprequest.XHRResponseHandler.prototype.happy$core$ResponseHandler$_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xhr.response;
}));

(happy.client.xmlhttprequest.XHRResponseHandler.prototype.happy$core$ResponseHandler$_header$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.xhr.getResponseHeader(s);
}));

(happy.client.xmlhttprequest.XHRResponseHandler.prototype.happy$core$ResponseHandler$_headers$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return happy.client.xmlhttprequest.parse_headers(self__.xhr.getAllResponseHeaders());
}));

(happy.client.xmlhttprequest.XHRResponseHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xhr","xhr",1462820676,null)], null);
}));

(happy.client.xmlhttprequest.XHRResponseHandler.cljs$lang$type = true);

(happy.client.xmlhttprequest.XHRResponseHandler.cljs$lang$ctorStr = "happy.client.xmlhttprequest/XHRResponseHandler");

(happy.client.xmlhttprequest.XHRResponseHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.client.xmlhttprequest/XHRResponseHandler");
}));

/**
 * Positional factory function for happy.client.xmlhttprequest/XHRResponseHandler.
 */
happy.client.xmlhttprequest.__GT_XHRResponseHandler = (function happy$client$xmlhttprequest$__GT_XHRResponseHandler(xhr){
return (new happy.client.xmlhttprequest.XHRResponseHandler(xhr));
});

happy.client.xmlhttprequest.response_type = (function happy$client$xmlhttprequest$response_type(s){
var G__27445 = s;
var G__27445__$1 = (((G__27445 instanceof cljs.core.Keyword))?G__27445.fqn:null);
switch (G__27445__$1) {
case "array-buffer":
return "arraybuffer";

break;
case "blob":
return "blob";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27445__$1)].join('')));

}
});
happy.client.xmlhttprequest.send_BANG_ = (function happy$client$xmlhttprequest$send_BANG_(p__27450,p__27451){
var map__27452 = p__27450;
var map__27452__$1 = cljs.core.__destructure_map(map__27452);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27452__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27452__$1,new cljs.core.Keyword(null,"method","method",55703592));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27452__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27452__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__27455 = p__27451;
var map__27455__$1 = cljs.core.__destructure_map(map__27455);
var m = map__27455__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27455__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27455__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27455__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var report_progress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27455__$1,new cljs.core.Keyword(null,"report-progress?","report-progress?",-578292374));
var response_body_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27455__$1,new cljs.core.Keyword(null,"response-body-as","response-body-as",2136952910));
var xhr = (new XMLHttpRequest());
var rh = (new happy.client.xmlhttprequest.XHRResponseHandler(xhr));
if(cljs.core.truth_(with_credentials_QMARK_)){
(xhr.withCredentials = true);
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = response_body_as;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(response_body_as,new cljs.core.Keyword(null,"string","string",-1989541586));
} else {
return and__4210__auto__;
}
})())){
(xhr.responseType = happy.client.xmlhttprequest.response_type(response_body_as));
} else {
}

if(cljs.core.truth_(timeout)){
(xhr.timeout = timeout);
} else {
}

xhr.open(method,url,true);

var seq__27457_27488 = cljs.core.seq(headers);
var chunk__27458_27489 = null;
var count__27459_27490 = (0);
var i__27460_27491 = (0);
while(true){
if((i__27460_27491 < count__27459_27490)){
var vec__27468_27492 = chunk__27458_27489.cljs$core$IIndexed$_nth$arity$2(null,i__27460_27491);
var k_27493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468_27492,(0),null);
var v_27494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468_27492,(1),null);
xhr.setRequestHeader(k_27493,v_27494);


var G__27495 = seq__27457_27488;
var G__27496 = chunk__27458_27489;
var G__27497 = count__27459_27490;
var G__27498 = (i__27460_27491 + (1));
seq__27457_27488 = G__27495;
chunk__27458_27489 = G__27496;
count__27459_27490 = G__27497;
i__27460_27491 = G__27498;
continue;
} else {
var temp__5753__auto___27499 = cljs.core.seq(seq__27457_27488);
if(temp__5753__auto___27499){
var seq__27457_27500__$1 = temp__5753__auto___27499;
if(cljs.core.chunked_seq_QMARK_(seq__27457_27500__$1)){
var c__4638__auto___27501 = cljs.core.chunk_first(seq__27457_27500__$1);
var G__27502 = cljs.core.chunk_rest(seq__27457_27500__$1);
var G__27503 = c__4638__auto___27501;
var G__27504 = cljs.core.count(c__4638__auto___27501);
var G__27505 = (0);
seq__27457_27488 = G__27502;
chunk__27458_27489 = G__27503;
count__27459_27490 = G__27504;
i__27460_27491 = G__27505;
continue;
} else {
var vec__27471_27506 = cljs.core.first(seq__27457_27500__$1);
var k_27507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27471_27506,(0),null);
var v_27508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27471_27506,(1),null);
xhr.setRequestHeader(k_27507,v_27508);


var G__27509 = cljs.core.next(seq__27457_27500__$1);
var G__27510 = null;
var G__27511 = (0);
var G__27512 = (0);
seq__27457_27488 = G__27509;
chunk__27458_27489 = G__27510;
count__27459_27490 = G__27511;
i__27460_27491 = G__27512;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(handler)){
(xhr.onload = (function (){
return happy.core.finalize(handler,happy.core.response(rh),m);
}));

(xhr.onabort = (function (){
return happy.core.finalize(handler,happy.core.failure.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abort","abort",521193198)),m);
}));

(xhr.onerror = (function (){
return happy.core.finalize(handler,happy.core.failure.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"network","network",2050004697)),m);
}));

if(cljs.core.truth_(timeout)){
(xhr.ontimeout = (function (){
return happy.core.finalize(handler,happy.core.failure.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeout","timeout",-318625318)),m);
}));
} else {
}

if(cljs.core.truth_(report_progress_QMARK_)){
(xhr.onprogress = (function (p1__27447_SHARP_){
var G__27475 = happy.core.progress.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receiving","receiving",829203724),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),rh], null),happy.client.xmlhttprequest.progress_details(p1__27447_SHARP_)], 0)));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__27475) : handler.call(null,G__27475));
}));

(xhr.onreadystatechange = (function (p1__27448_SHARP_){
var i = p1__27448_SHARP_.target.readyState;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),i)){
var G__27477 = happy.core.progress.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"headers-received","headers-received",-910387251));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__27477) : handler.call(null,G__27477));
} else {
return null;
}
}));

if(cljs.core.truth_(body)){
(xhr.upload.onprogress = (function (p1__27449_SHARP_){
var G__27478 = happy.core.progress.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sending","sending",-1806704862),happy.client.xmlhttprequest.progress_details(p1__27449_SHARP_));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__27478) : handler.call(null,G__27478));
}));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(body)){
xhr.send(body);
} else {
xhr.send();
}

return (new happy.client.xmlhttprequest.XHRRequestHandler(xhr));
});
happy.client.xmlhttprequest.create = (function happy$client$xmlhttprequest$create(){
if((typeof happy !== 'undefined') && (typeof happy.client !== 'undefined') && (typeof happy.client.xmlhttprequest !== 'undefined') && (typeof happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {happy.core.Client}
 * @implements {cljs.core.IWithMeta}
*/
happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480 = (function (meta27481){
this.meta27481 = meta27481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27482,meta27481__$1){
var self__ = this;
var _27482__$1 = this;
return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480(meta27481__$1));
}));

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27482){
var self__ = this;
var _27482__$1 = this;
return self__.meta27481;
}));

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.prototype.happy$core$Client$ = cljs.core.PROTOCOL_SENTINEL);

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.prototype.happy$core$Client$_supports$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"progress","progress",244323547),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),true,new cljs.core.Keyword(null,"request-body-as","request-body-as",1647123054),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer-source","buffer-source",-1570878102),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"blob","blob",1636965233),null], null), null),new cljs.core.Keyword(null,"response-body-as","response-body-as",2136952910),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"blob","blob",1636965233),null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),null], null), null),new cljs.core.Keyword(null,"extra-options","extra-options",1568282574),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),null], null), null)], null);
}));

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.prototype.happy$core$Client$_send_BANG_$arity$3 = (function (_,req,m){
var self__ = this;
var ___$1 = this;
return happy.client.xmlhttprequest.send_BANG_(req,m);
}));

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27481","meta27481",-880582490,null)], null);
}));

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.cljs$lang$type = true);

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.cljs$lang$ctorStr = "happy.client.xmlhttprequest/t_happy$client$xmlhttprequest27480");

(happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.client.xmlhttprequest/t_happy$client$xmlhttprequest27480");
}));

/**
 * Positional factory function for happy.client.xmlhttprequest/t_happy$client$xmlhttprequest27480.
 */
happy.client.xmlhttprequest.__GT_t_happy$client$xmlhttprequest27480 = (function happy$client$xmlhttprequest$create_$___GT_t_happy$client$xmlhttprequest27480(meta27481){
return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480(meta27481));
});

}

return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest27480(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=happy.client.xmlhttprequest.js.map
