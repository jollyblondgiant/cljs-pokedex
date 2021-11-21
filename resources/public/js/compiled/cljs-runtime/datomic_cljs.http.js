goog.provide('datomic_cljs.http');
datomic_cljs.http.node_context_QMARK_ = (((typeof exports !== 'undefined')) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(exports,(function (){var context = this;
return context.exports;
})())));
datomic_cljs.http.urlencode_kvs = (function datomic_cljs$http$urlencode_kvs(kvs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__4611__auto__ = (function datomic_cljs$http$urlencode_kvs_$_iter__27518(s__27519){
return (new cljs.core.LazySeq(null,(function (){
var s__27519__$1 = s__27519;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27519__$1);
if(temp__5753__auto__){
var s__27519__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27519__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27519__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27522 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27521 = (0);
while(true){
if((i__27521 < size__4610__auto__)){
var vec__27524 = cljs.core._nth(c__4609__auto__,i__27521);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__27522,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join(''));

var G__27667 = (i__27521 + (1));
i__27521 = G__27667;
continue;
} else {
var G__27668 = (i__27521 + (1));
i__27521 = G__27668;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27522),datomic_cljs$http$urlencode_kvs_$_iter__27518(cljs.core.chunk_rest(s__27519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27522),null);
}
} else {
var vec__27530 = cljs.core.first(s__27519__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(1),null);
if((!((v == null)))){
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join(''),datomic_cljs$http$urlencode_kvs_$_iter__27518(cljs.core.rest(s__27519__$2)));
} else {
var G__27672 = cljs.core.rest(s__27519__$2);
s__27519__$1 = G__27672;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(kvs);
})());
});
datomic_cljs.http.urlencode_qs = (function datomic_cljs$http$urlencode_qs(qs_kvs){
return ["?",datomic_cljs.http.urlencode_kvs(qs_kvs)].join('');
});
datomic_cljs.http.parse_headers = (function datomic_cljs$http$parse_headers(header_str){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function datomic_cljs$http$parse_headers_$_iter__27539(s__27540){
return (new cljs.core.LazySeq(null,(function (){
var s__27540__$1 = s__27540;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27540__$1);
if(temp__5753__auto__){
var s__27540__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27540__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27540__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27542 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27541 = (0);
while(true){
if((i__27541 < size__4610__auto__)){
var header = cljs.core._nth(c__4609__auto__,i__27541);
var vec__27543 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(header,/:/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,(1),null);
var vec__27546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27546,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27546,(1),null);
cljs.core.chunk_append(b__27542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1)),v__$1], null));

var G__27674 = (i__27541 + (1));
i__27541 = G__27674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27542),datomic_cljs$http$parse_headers_$_iter__27539(cljs.core.chunk_rest(s__27540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27542),null);
}
} else {
var header = cljs.core.first(s__27540__$2);
var vec__27549 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(header,/:/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(1),null);
var vec__27552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1)),v__$1], null),datomic_cljs$http$parse_headers_$_iter__27539(cljs.core.rest(s__27540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(clojure.string.split_lines(header_str));
})());
});
datomic_cljs.http.browser_request = (function datomic_cljs$http$browser_request(p__27557,callback){
var map__27558 = p__27557;
var map__27558__$1 = cljs.core.__destructure_map(map__27558);
var opts = map__27558__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27558__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27558__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY);
var qs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,new cljs.core.Keyword(null,"qs","qs",-1900687691));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var js_req = (new XMLHttpRequest());
var query_str = (cljs.core.truth_(qs)?datomic_cljs.http.urlencode_qs(qs):"");
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),query_str].join('');
var headers__$1 = (cljs.core.truth_(form)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","application/x-www-form-urlencoded"):headers);
js_req.addEventListener("load",(function (){
(js_req.headers = datomic_cljs.http.parse_headers(js_req.getAllResponseHeaders()));

(js_req.statusCode = js_req.status);

var G__27560 = null;
var G__27561 = js_req;
var G__27562 = js_req.response;
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__27560,G__27561,G__27562) : callback.call(null,G__27560,G__27561,G__27562));
}));

js_req.addEventListener("error",(function (e){
e.preventDefault();

return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(e,js_req,null) : callback.call(null,e,js_req,null));
}));

js_req.open(method,url,true);

var seq__27563_27675 = cljs.core.seq((function (){var or__4212__auto__ = headers__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var chunk__27564_27676 = null;
var count__27565_27677 = (0);
var i__27566_27678 = (0);
while(true){
if((i__27566_27678 < count__27565_27677)){
var vec__27574_27679 = chunk__27564_27676.cljs$core$IIndexed$_nth$arity$2(null,i__27566_27678);
var k_27680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574_27679,(0),null);
var v_27681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574_27679,(1),null);
js_req.setRequestHeader(cljs.core.name(k_27680),v_27681);


var G__27682 = seq__27563_27675;
var G__27683 = chunk__27564_27676;
var G__27684 = count__27565_27677;
var G__27685 = (i__27566_27678 + (1));
seq__27563_27675 = G__27682;
chunk__27564_27676 = G__27683;
count__27565_27677 = G__27684;
i__27566_27678 = G__27685;
continue;
} else {
var temp__5753__auto___27686 = cljs.core.seq(seq__27563_27675);
if(temp__5753__auto___27686){
var seq__27563_27687__$1 = temp__5753__auto___27686;
if(cljs.core.chunked_seq_QMARK_(seq__27563_27687__$1)){
var c__4638__auto___27690 = cljs.core.chunk_first(seq__27563_27687__$1);
var G__27691 = cljs.core.chunk_rest(seq__27563_27687__$1);
var G__27692 = c__4638__auto___27690;
var G__27693 = cljs.core.count(c__4638__auto___27690);
var G__27694 = (0);
seq__27563_27675 = G__27691;
chunk__27564_27676 = G__27692;
count__27565_27677 = G__27693;
i__27566_27678 = G__27694;
continue;
} else {
var vec__27577_27695 = cljs.core.first(seq__27563_27687__$1);
var k_27696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577_27695,(0),null);
var v_27697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577_27695,(1),null);
js_req.setRequestHeader(cljs.core.name(k_27696),v_27697);


var G__27698 = cljs.core.next(seq__27563_27687__$1);
var G__27699 = null;
var G__27700 = (0);
var G__27701 = (0);
seq__27563_27675 = G__27698;
chunk__27564_27676 = G__27699;
count__27565_27677 = G__27700;
i__27566_27678 = G__27701;
continue;
}
} else {
}
}
break;
}

(js_req.responseType = "text");

if(cljs.core.truth_(form)){
return js_req.send(datomic_cljs.http.urlencode_kvs(form));
} else {
return js_req.send();
}
});
datomic_cljs.http.js_request = null;
if(datomic_cljs.http.node_context_QMARK_){
(datomic_cljs.http.js_request = (function (){var req = (function (){try{return require("request");
}catch (e27582){if((e27582 instanceof Error)){
var e = e27582;
console.log("Error: Cannot find module 'request'.\nSee datomic-cljs README for installation and dependency notes.");

return process.exit((1));
} else {
throw e27582;

}
}})();
return (function (opts,cb){
var G__27584 = cljs.core.clj__GT_js(opts);
var G__27585 = cb;
return (req.cljs$core$IFn$_invoke$arity$2 ? req.cljs$core$IFn$_invoke$arity$2(G__27584,G__27585) : req.call(null,G__27584,G__27585));
});
})());
} else {
(datomic_cljs.http.js_request = datomic_cljs.http.browser_request);
}
datomic_cljs.http.response_handler = (function datomic_cljs$http$response_handler(c_resp,edn_QMARK_){
return (function (err,resp,body){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c_resp,(function (){var or__4212__auto__ = err;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var headers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp.headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.statusCode,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"body","body",-2049205669),(cljs.core.truth_((function (){var and__4210__auto__ = edn_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.re_find(/edn/,new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(headers));
} else {
return and__4210__auto__;
}
})())?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body):body),new cljs.core.Keyword(null,"js-resp","js-resp",-1733799650),resp], null);
}
})(),(function (){
return cljs.core.async.close_BANG_(c_resp);
}));
});
});
/**
 * Make an async request to the given uri, returning a core.async
 * channel eventually containing either an error or a response map
 * containing the following:
 * 
 *   :status, the HTTP status code;
 *   :headers, a map of HTTP response headers;
 *   :body, the response body;
 *   :js-resp, the original JS response object.
 * 
 * opts is the same options map described in the Request docs:
 * https://github.com/mikeal/request#requestoptions-callback
 * 
 * Additionally, opts supports {:edn true} which sets the Accept
 * header to application/edn and parses the response body as edn
 * if the response content-type is application/edn.
 */
datomic_cljs.http.request = (function datomic_cljs$http$request(var_args){
var G__27590 = arguments.length;
switch (G__27590) {
case 2:
return datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$2 = (function (method,uri){
return datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(method,uri,cljs.core.PersistentArrayMap.EMPTY);
}));

(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3 = (function (method,uri,opts){
var c_resp = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var map__27591 = opts;
var map__27591__$1 = cljs.core.__destructure_map(map__27591);
var edn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27591__$1,new cljs.core.Keyword(null,"edn","edn",1317840885));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27591__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"method","method",55703592),(function (){var G__27592 = method;
var G__27592__$1 = (((G__27592 instanceof cljs.core.Keyword))?G__27592.fqn:null);
switch (G__27592__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
case "head":
return "HEAD";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27592__$1)].join('')));

}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(edn_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4212__auto__ = headers;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"accept","accept",1874130431),"application/edn"):headers)], 0));
var G__27594_27704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"uri","uri",-774711847),uri);
var G__27595_27705 = datomic_cljs.http.response_handler(c_resp,edn_QMARK_);
(datomic_cljs.http.js_request.cljs$core$IFn$_invoke$arity$2 ? datomic_cljs.http.js_request.cljs$core$IFn$_invoke$arity$2(G__27594_27704,G__27595_27705) : datomic_cljs.http.js_request.call(null,G__27594_27704,G__27595_27705));

return c_resp;
}));

(datomic_cljs.http.request.cljs$lang$maxFixedArity = 3);

/**
 * Expects a response channel, and returns a channel that will
 * eventually contain either the response body (on successful status
 * code) or an error (if the request fails or an unsuccessful status
 * code was returned).
 */
datomic_cljs.http.body = (function datomic_cljs$http$body(c_resp){
var c_body = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__26604__auto___27706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26534__auto__ = (function (state_27632){
var state_val_27633 = (state_27632[(1)]);
if((state_val_27633 === (7))){
var inst_27600 = (state_27632[(7)]);
var inst_27608 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27600);
var inst_27609 = (inst_27608 <= (299));
var state_27632__$1 = state_27632;
var statearr_27637_27707 = state_27632__$1;
(statearr_27637_27707[(2)] = inst_27609);

(statearr_27637_27707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (1))){
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27632__$1,(2),c_resp);
} else {
if((state_val_27633 === (4))){
var inst_27600 = (state_27632[(7)]);
var state_27632__$1 = state_27632;
var statearr_27638_27708 = state_27632__$1;
(statearr_27638_27708[(2)] = inst_27600);

(statearr_27638_27708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (15))){
var inst_27623 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27639_27709 = state_27632__$1;
(statearr_27639_27709[(2)] = inst_27623);

(statearr_27639_27709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (13))){
var inst_27600 = (state_27632[(7)]);
var inst_27620 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27600);
var state_27632__$1 = state_27632;
var statearr_27640_27710 = state_27632__$1;
(statearr_27640_27710[(2)] = inst_27620);

(statearr_27640_27710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (6))){
var inst_27601 = (state_27632[(8)]);
var inst_27627 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27632__$1,(3),inst_27601,inst_27627);
} else {
if((state_val_27633 === (3))){
var inst_27601 = (state_27632[(8)]);
var inst_27629 = (state_27632[(2)]);
var inst_27630 = cljs.core.async.close_BANG_(inst_27601);
var state_27632__$1 = (function (){var statearr_27641 = state_27632;
(statearr_27641[(9)] = inst_27629);

return statearr_27641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27632__$1,inst_27630);
} else {
if((state_val_27633 === (12))){
var inst_27625 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27642_27711 = state_27632__$1;
(statearr_27642_27711[(2)] = inst_27625);

(statearr_27642_27711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (2))){
var inst_27600 = (state_27632[(7)]);
var inst_27600__$1 = (state_27632[(2)]);
var inst_27601 = c_body;
var inst_27602 = (inst_27600__$1 instanceof Error);
var state_27632__$1 = (function (){var statearr_27643 = state_27632;
(statearr_27643[(8)] = inst_27601);

(statearr_27643[(7)] = inst_27600__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27602)){
var statearr_27644_27712 = state_27632__$1;
(statearr_27644_27712[(1)] = (4));

} else {
var statearr_27645_27713 = state_27632__$1;
(statearr_27645_27713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (11))){
var state_27632__$1 = state_27632;
var statearr_27646_27714 = state_27632__$1;
(statearr_27646_27714[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (9))){
var inst_27612 = (state_27632[(2)]);
var inst_27613 = cljs.core.not(inst_27612);
var state_27632__$1 = state_27632;
if(inst_27613){
var statearr_27649_27718 = state_27632__$1;
(statearr_27649_27718[(1)] = (10));

} else {
var statearr_27650_27719 = state_27632__$1;
(statearr_27650_27719[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (5))){
var inst_27606 = (state_27632[(10)]);
var inst_27600 = (state_27632[(7)]);
var inst_27605 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27600);
var inst_27606__$1 = ((200) <= inst_27605);
var state_27632__$1 = (function (){var statearr_27652 = state_27632;
(statearr_27652[(10)] = inst_27606__$1);

return statearr_27652;
})();
if(cljs.core.truth_(inst_27606__$1)){
var statearr_27653_27722 = state_27632__$1;
(statearr_27653_27722[(1)] = (7));

} else {
var statearr_27654_27723 = state_27632__$1;
(statearr_27654_27723[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (14))){
var state_27632__$1 = state_27632;
var statearr_27655_27729 = state_27632__$1;
(statearr_27655_27729[(2)] = null);

(statearr_27655_27729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (10))){
var inst_27600 = (state_27632[(7)]);
var inst_27615 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27600);
var inst_27616 = ["Unsuccessful HTTP status code returned: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27615)].join('');
var inst_27617 = (new Error(inst_27616));
var state_27632__$1 = state_27632;
var statearr_27656_27731 = state_27632__$1;
(statearr_27656_27731[(2)] = inst_27617);

(statearr_27656_27731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (8))){
var inst_27606 = (state_27632[(10)]);
var state_27632__$1 = state_27632;
var statearr_27657_27732 = state_27632__$1;
(statearr_27657_27732[(2)] = inst_27606);

(statearr_27657_27732[(1)] = (9));


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
var datomic_cljs$http$body_$_state_machine__26535__auto__ = null;
var datomic_cljs$http$body_$_state_machine__26535__auto____0 = (function (){
var statearr_27659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27659[(0)] = datomic_cljs$http$body_$_state_machine__26535__auto__);

(statearr_27659[(1)] = (1));

return statearr_27659;
});
var datomic_cljs$http$body_$_state_machine__26535__auto____1 = (function (state_27632){
while(true){
var ret_value__26536__auto__ = (function (){try{while(true){
var result__26537__auto__ = switch__26534__auto__(state_27632);
if(cljs.core.keyword_identical_QMARK_(result__26537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26537__auto__;
}
break;
}
}catch (e27660){var ex__26538__auto__ = e27660;
var statearr_27661_27738 = state_27632;
(statearr_27661_27738[(2)] = ex__26538__auto__);


if(cljs.core.seq((state_27632[(4)]))){
var statearr_27662_27740 = state_27632;
(statearr_27662_27740[(1)] = cljs.core.first((state_27632[(4)])));

} else {
throw ex__26538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27741 = state_27632;
state_27632 = G__27741;
continue;
} else {
return ret_value__26536__auto__;
}
break;
}
});
datomic_cljs$http$body_$_state_machine__26535__auto__ = function(state_27632){
switch(arguments.length){
case 0:
return datomic_cljs$http$body_$_state_machine__26535__auto____0.call(this);
case 1:
return datomic_cljs$http$body_$_state_machine__26535__auto____1.call(this,state_27632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$http$body_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$http$body_$_state_machine__26535__auto____0;
datomic_cljs$http$body_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$http$body_$_state_machine__26535__auto____1;
return datomic_cljs$http$body_$_state_machine__26535__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27663 = f__26605__auto__();
(statearr_27663[(6)] = c__26604__auto___27706);

return statearr_27663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));


return c_body;
});

//# sourceMappingURL=datomic_cljs.http.js.map
