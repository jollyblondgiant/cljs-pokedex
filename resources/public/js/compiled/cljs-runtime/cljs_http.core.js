goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__27756 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__27756.cljs$core$IFn$_invoke$arity$1 ? fexpr__27756.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__27756.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27757){
var vec__27758 = p__27757;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27761 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__27761)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__27761)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__27761)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__27761)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__27761)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27761)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27761)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27766){
var map__27767 = p__27766;
var map__27767__$1 = cljs.core.__destructure_map(map__27767);
var request = map__27767__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27768 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__27768,default_headers);

cljs_http.core.apply_response_type_BANG_(G__27768,response_type);

G__27768.setTimeoutInterval(timeout);

G__27768.setWithCredentials(send_credentials);

return G__27768;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27770){
var map__27771 = p__27770;
var map__27771__$1 = cljs.core.__destructure_map(map__27771);
var request = map__27771__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4212__auto__ = request_method;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__27777 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__27777) : cljs_http.core.error_kw.call(null,G__27777));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_27832 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__27778_27835 = xhr;
G__27778_27835.setProgressEventsEnabled(true);

G__27778_27835.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27832,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__27778_27835.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27832,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__26604__auto___27836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26534__auto__ = (function (state_27789){
var state_val_27790 = (state_27789[(1)]);
if((state_val_27790 === (1))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27789__$1,(2),cancel);
} else {
if((state_val_27790 === (2))){
var inst_27780 = (state_27789[(2)]);
var inst_27781 = xhr.isComplete();
var inst_27782 = cljs.core.not(inst_27781);
var state_27789__$1 = (function (){var statearr_27791 = state_27789;
(statearr_27791[(7)] = inst_27780);

return statearr_27791;
})();
if(inst_27782){
var statearr_27792_27840 = state_27789__$1;
(statearr_27792_27840[(1)] = (3));

} else {
var statearr_27793_27841 = state_27789__$1;
(statearr_27793_27841[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (3))){
var inst_27784 = xhr.abort();
var state_27789__$1 = state_27789;
var statearr_27794_27842 = state_27789__$1;
(statearr_27794_27842[(2)] = inst_27784);

(statearr_27794_27842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (4))){
var state_27789__$1 = state_27789;
var statearr_27795_27843 = state_27789__$1;
(statearr_27795_27843[(2)] = null);

(statearr_27795_27843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (5))){
var inst_27787 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27789__$1,inst_27787);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__26535__auto__ = null;
var cljs_http$core$xhr_$_state_machine__26535__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs_http$core$xhr_$_state_machine__26535__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs_http$core$xhr_$_state_machine__26535__auto____1 = (function (state_27789){
while(true){
var ret_value__26536__auto__ = (function (){try{while(true){
var result__26537__auto__ = switch__26534__auto__(state_27789);
if(cljs.core.keyword_identical_QMARK_(result__26537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26537__auto__;
}
break;
}
}catch (e27797){var ex__26538__auto__ = e27797;
var statearr_27798_27844 = state_27789;
(statearr_27798_27844[(2)] = ex__26538__auto__);


if(cljs.core.seq((state_27789[(4)]))){
var statearr_27800_27846 = state_27789;
(statearr_27800_27846[(1)] = cljs.core.first((state_27789[(4)])));

} else {
throw ex__26538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27847 = state_27789;
state_27789 = G__27847;
continue;
} else {
return ret_value__26536__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__26535__auto__ = function(state_27789){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__26535__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__26535__auto____1.call(this,state_27789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__26535__auto____0;
cljs_http$core$xhr_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__26535__auto____1;
return cljs_http$core$xhr_$_state_machine__26535__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27801 = f__26605__auto__();
(statearr_27801[(6)] = c__26604__auto___27836);

return statearr_27801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27805){
var map__27806 = p__27805;
var map__27806__$1 = cljs.core.__destructure_map(map__27806);
var request = map__27806__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27806__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27851 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_27851], null));

if(cljs.core.truth_(cancel)){
var c__26604__auto___27853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26534__auto__ = (function (state_27811){
var state_val_27812 = (state_27811[(1)]);
if((state_val_27812 === (1))){
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27811__$1,(2),cancel);
} else {
if((state_val_27812 === (2))){
var inst_27808 = (state_27811[(2)]);
var inst_27809 = jsonp.cancel(req_27851);
var state_27811__$1 = (function (){var statearr_27813 = state_27811;
(statearr_27813[(7)] = inst_27808);

return statearr_27813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27811__$1,inst_27809);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__26535__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__26535__auto____0 = (function (){
var statearr_27814 = [null,null,null,null,null,null,null,null];
(statearr_27814[(0)] = cljs_http$core$jsonp_$_state_machine__26535__auto__);

(statearr_27814[(1)] = (1));

return statearr_27814;
});
var cljs_http$core$jsonp_$_state_machine__26535__auto____1 = (function (state_27811){
while(true){
var ret_value__26536__auto__ = (function (){try{while(true){
var result__26537__auto__ = switch__26534__auto__(state_27811);
if(cljs.core.keyword_identical_QMARK_(result__26537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26537__auto__;
}
break;
}
}catch (e27815){var ex__26538__auto__ = e27815;
var statearr_27816_27858 = state_27811;
(statearr_27816_27858[(2)] = ex__26538__auto__);


if(cljs.core.seq((state_27811[(4)]))){
var statearr_27818_27859 = state_27811;
(statearr_27818_27859[(1)] = cljs.core.first((state_27811[(4)])));

} else {
throw ex__26538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27860 = state_27811;
state_27811 = G__27860;
continue;
} else {
return ret_value__26536__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__26535__auto__ = function(state_27811){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__26535__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__26535__auto____1.call(this,state_27811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__26535__auto____0;
cljs_http$core$jsonp_$_state_machine__26535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__26535__auto____1;
return cljs_http$core$jsonp_$_state_machine__26535__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27819 = f__26605__auto__();
(statearr_27819[(6)] = c__26604__auto___27853);

return statearr_27819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27820){
var map__27823 = p__27820;
var map__27823__$1 = cljs.core.__destructure_map(map__27823);
var request = map__27823__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27823__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
