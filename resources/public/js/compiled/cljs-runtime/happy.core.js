goog.provide('happy.core');

/**
 * @interface
 */
happy.core.Client = function(){};

var happy$core$Client$_supports$dyn_27429 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._supports[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.core._supports["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Client.-supports",_);
}
}
});
happy.core._supports = (function happy$core$_supports(_){
if((((!((_ == null)))) && ((!((_.happy$core$Client$_supports$arity$1 == null)))))){
return _.happy$core$Client$_supports$arity$1(_);
} else {
return happy$core$Client$_supports$dyn_27429(_);
}
});

var happy$core$Client$_send_BANG_$dyn_27430 = (function (_,req,m){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._send_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(_,req,m) : m__4510__auto__.call(null,_,req,m));
} else {
var m__4508__auto__ = (happy.core._send_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(_,req,m) : m__4508__auto__.call(null,_,req,m));
} else {
throw cljs.core.missing_protocol("Client.-send!",_);
}
}
});
/**
 * Returns a RequestHandler
 */
happy.core._send_BANG_ = (function happy$core$_send_BANG_(_,req,m){
if((((!((_ == null)))) && ((!((_.happy$core$Client$_send_BANG_$arity$3 == null)))))){
return _.happy$core$Client$_send_BANG_$arity$3(_,req,m);
} else {
return happy$core$Client$_send_BANG_$dyn_27430(_,req,m);
}
});


/**
 * @interface
 */
happy.core.RequestHandler = function(){};

var happy$core$RequestHandler$_abort$dyn_27431 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._abort[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.core._abort["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("RequestHandler.-abort",_);
}
}
});
happy.core._abort = (function happy$core$_abort(_){
if((((!((_ == null)))) && ((!((_.happy$core$RequestHandler$_abort$arity$1 == null)))))){
return _.happy$core$RequestHandler$_abort$arity$1(_);
} else {
return happy$core$RequestHandler$_abort$dyn_27431(_);
}
});


/**
 * @interface
 */
happy.core.ResponseHandler = function(){};

var happy$core$ResponseHandler$_status$dyn_27432 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._status[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.core._status["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ResponseHandler.-status",_);
}
}
});
happy.core._status = (function happy$core$_status(_){
if((((!((_ == null)))) && ((!((_.happy$core$ResponseHandler$_status$arity$1 == null)))))){
return _.happy$core$ResponseHandler$_status$arity$1(_);
} else {
return happy$core$ResponseHandler$_status$dyn_27432(_);
}
});

var happy$core$ResponseHandler$_body$dyn_27433 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.core._body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ResponseHandler.-body",_);
}
}
});
happy.core._body = (function happy$core$_body(_){
if((((!((_ == null)))) && ((!((_.happy$core$ResponseHandler$_body$arity$1 == null)))))){
return _.happy$core$ResponseHandler$_body$arity$1(_);
} else {
return happy$core$ResponseHandler$_body$dyn_27433(_);
}
});

var happy$core$ResponseHandler$_header$dyn_27437 = (function (_,s){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4510__auto__.call(null,_,s));
} else {
var m__4508__auto__ = (happy.core._header["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4508__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("ResponseHandler.-header",_);
}
}
});
happy.core._header = (function happy$core$_header(_,s){
if((((!((_ == null)))) && ((!((_.happy$core$ResponseHandler$_header$arity$2 == null)))))){
return _.happy$core$ResponseHandler$_header$arity$2(_,s);
} else {
return happy$core$ResponseHandler$_header$dyn_27437(_,s);
}
});

var happy$core$ResponseHandler$_headers$dyn_27438 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (happy.core._headers[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (happy.core._headers["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ResponseHandler.-headers",_);
}
}
});
happy.core._headers = (function happy$core$_headers(_){
if((((!((_ == null)))) && ((!((_.happy$core$ResponseHandler$_headers$arity$1 == null)))))){
return _.happy$core$ResponseHandler$_headers$arity$1(_);
} else {
return happy$core$ResponseHandler$_headers$dyn_27438(_);
}
});

happy.core.default_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
happy.core.swap_options_BANG_ = (function happy$core$swap_options_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27439 = arguments.length;
var i__4819__auto___27440 = (0);
while(true){
if((i__4819__auto___27440 < len__4818__auto___27439)){
args__4824__auto__.push((arguments[i__4819__auto___27440]));

var G__27441 = (i__4819__auto___27440 + (1));
i__4819__auto___27440 = G__27441;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return happy.core.swap_options_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(happy.core.swap_options_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,happy.core.default_options,f,args);
}));

(happy.core.swap_options_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(happy.core.swap_options_BANG_.cljs$lang$applyTo = (function (seq27383){
var G__27384 = cljs.core.first(seq27383);
var seq27383__$1 = cljs.core.next(seq27383);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27384,seq27383__$1);
}));

happy.core.default_option_combiner = (function happy$core$default_option_combiner(r,l){

if(cljs.core.sequential_QMARK_(l)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
if(cljs.core.map_QMARK_(l)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(happy.core.default_option_combiner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,r], 0));
} else {
var or__4212__auto__ = l;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return r;
}

}
}
});
happy.core.merge_options_BANG_ = (function happy$core$merge_options_BANG_(var_args){
var G__27388 = arguments.length;
switch (G__27388) {
case 1:
return happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$2(m,happy.core.default_option_combiner);
}));

(happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
return happy.core.swap_options_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (p1__27385_SHARP_,p2__27386_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27385_SHARP_,p2__27386_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(happy.core.merge_options_BANG_.cljs$lang$maxFixedArity = 2);

happy.core.merge_representors_BANG_ = (function happy$core$merge_representors_BANG_(v){
return happy.core.merge_options_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-interceptors","request-interceptors",801964639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [happy.representors.as_request_interceptor(v)], null),new cljs.core.Keyword(null,"response-interceptors","response-interceptors",-832219563),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [happy.representors.as_response_interceptor(v)], null)], null));
});
happy.core.reset_options_BANG_ = (function happy$core$reset_options_BANG_(){
return cljs.core.reset_BANG_(happy.core.default_options,null);
});
happy.core.set_default_client_BANG_ = (function happy$core$set_default_client_BANG_(c){
return happy.core.swap_options_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"client","client",-1323448117),c], 0));
});
happy.core.apply_interceptors = (function happy$core$apply_interceptors(f,o,v){
if(cljs.core.truth_(v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27389_SHARP_,p2__27390_SHARP_){
var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27389_SHARP_,p2__27390_SHARP_) : f.call(null,p1__27389_SHARP_,p2__27390_SHARP_));
var or__4212__auto__ = r;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p1__27389_SHARP_;
}
}),o,v);
} else {
return o;
}
});
happy.core.apply_request_interceptors = (function happy$core$apply_request_interceptors(req,om){
return happy.core.apply_interceptors((function (o,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o) : f.call(null,o));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,om], null),new cljs.core.Keyword(null,"request-interceptors","request-interceptors",801964639).cljs$core$IFn$_invoke$arity$1(om));
});
happy.core.apply_response_interceptors = (function happy$core$apply_response_interceptors(resp,om){
return happy.core.apply_interceptors((function (o,f){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(o,om) : f.call(null,o,om));
}),resp,new cljs.core.Keyword(null,"response-interceptors","response-interceptors",-832219563).cljs$core$IFn$_invoke$arity$1(om));
});
happy.core.progress = (function happy$core$progress(var_args){
var G__27392 = arguments.length;
switch (G__27392) {
case 1:
return happy.core.progress.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.progress.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.progress.cljs$core$IFn$_invoke$arity$1 = (function (t){
return happy.core.progress.cljs$core$IFn$_invoke$arity$2(t,null);
}));

(happy.core.progress.cljs$core$IFn$_invoke$arity$2 = (function (t,m){
var b = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"direction","direction",-633359395),t], null);
if(cljs.core.truth_(m)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,m], 0));
} else {
return b;
}
}));

(happy.core.progress.cljs$lang$maxFixedArity = 2);

happy.core.finalize = (function happy$core$finalize(f,resp,m){
if(cljs.core.truth_(f)){
var G__27393 = happy.core.apply_response_interceptors(resp,m);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27393) : f.call(null,G__27393));
} else {
return null;
}
});
happy.core.response = (function happy$core$response(r){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"status","status",-1997798413),happy.core._status(r),new cljs.core.Keyword(null,"body","body",-2049205669),happy.core._body(r),new cljs.core.Keyword(null,"headers","headers",-835030129),happy.core._headers(r)], null);
});
happy.core.failure = (function happy$core$failure(var_args){
var G__27395 = arguments.length;
switch (G__27395) {
case 1:
return happy.core.failure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.failure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.failure.cljs$core$IFn$_invoke$arity$1 = (function (t){
return happy.core.failure.cljs$core$IFn$_invoke$arity$2(t,null);
}));

(happy.core.failure.cljs$core$IFn$_invoke$arity$2 = (function (t,s){
var m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"termination","termination",-1504134089),t], null);
if(cljs.core.truth_(s)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"reason","reason",-2070751759),s);
} else {
return m;
}
}));

(happy.core.failure.cljs$lang$maxFixedArity = 2);

happy.core.validate_request_BANG_ = (function happy$core$validate_request_BANG_(req){
var met_27446 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var fexpr__27397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["PATCH",null,"POST",null,"PUT",null], null), null);
return (fexpr__27397.cljs$core$IFn$_invoke$arity$1 ? fexpr__27397.cljs$core$IFn$_invoke$arity$1(met_27446) : fexpr__27397.call(null,met_27446));
})();
if(cljs.core.truth_(and__4210__auto__)){
return (new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(req) == null);
} else {
return and__4210__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(met_27446)," requires a body"].join(''),req);
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var fexpr__27398 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["OPTIONS",null,"HEAD",null,"GET",null], null), null);
return (fexpr__27398.cljs$core$IFn$_invoke$arity$1 ? fexpr__27398.cljs$core$IFn$_invoke$arity$1(met_27446) : fexpr__27398.call(null,met_27446));
})();
if(cljs.core.truth_(and__4210__auto__)){
return (!((new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(req) == null)));
} else {
return and__4210__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(met_27446)," requires no body"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((!(cljs.core.every_QMARK_((function (p1__27396_SHARP_){
return ((typeof cljs.core.key(p1__27396_SHARP_) === 'string') && (typeof cljs.core.val(p1__27396_SHARP_) === 'string'));
}),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(req))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Headers must be a String / String map",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
happy.core.validate_options_BANG_ = (function happy$core$validate_options_BANG_(m){
var temp__5751__auto__ = new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
var sm = happy.core._supports(c);
var temp__5751__auto___27453__$1 = new cljs.core.Keyword(null,"request-body-as","request-body-as",1647123054).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto___27453__$1)){
var as_27454 = temp__5751__auto___27453__$1;
if(cljs.core.not((function (){var fexpr__27399 = new cljs.core.Keyword(null,"request-body-as","request-body-as",1647123054).cljs$core$IFn$_invoke$arity$1(sm);
return (fexpr__27399.cljs$core$IFn$_invoke$arity$1 ? fexpr__27399.cljs$core$IFn$_invoke$arity$1(as_27454) : fexpr__27399.call(null,as_27454));
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unsupported :request-body-as : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(as_27454)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null));
} else {
}
} else {
}

var temp__5751__auto____$1 = new cljs.core.Keyword(null,"response-body-as","response-body-as",2136952910).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto____$1)){
var as = temp__5751__auto____$1;
if(cljs.core.not((function (){var fexpr__27400 = new cljs.core.Keyword(null,"response-body-as","response-body-as",2136952910).cljs$core$IFn$_invoke$arity$1(sm);
return (fexpr__27400.cljs$core$IFn$_invoke$arity$1 ? fexpr__27400.cljs$core$IFn$_invoke$arity$1(as) : fexpr__27400.call(null,as));
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unsupported :response-body-as : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(as)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null));
} else {
return null;
}
} else {
return null;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :client set",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null));
}
});
happy.core.normalize_request = (function happy$core$normalize_request(req){
if(cljs.core.contains_QMARK_(req,new cljs.core.Keyword(null,"headers","headers",-835030129))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__27401_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function happy$core$normalize_request_$_iter__27402(s__27403){
return (new cljs.core.LazySeq(null,(function (){
var s__27403__$1 = s__27403;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27403__$1);
if(temp__5753__auto__){
var s__27403__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27403__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27403__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27405 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27404 = (0);
while(true){
if((i__27404 < size__4610__auto__)){
var vec__27406 = cljs.core._nth(c__4609__auto__,i__27404);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(1),null);
cljs.core.chunk_append(b__27405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(k),v], null));

var G__27456 = (i__27404 + (1));
i__27404 = G__27456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27405),happy$core$normalize_request_$_iter__27402(cljs.core.chunk_rest(s__27403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27405),null);
}
} else {
var vec__27409 = cljs.core.first(s__27403__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27409,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(k),v], null),happy$core$normalize_request_$_iter__27402(cljs.core.rest(s__27403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(p1__27401_SHARP_);
})());
}));
} else {
return req;
}
});
happy.core.send_BANG_ = (function happy$core$send_BANG_(req,m){
var req__$1 = happy.core.normalize_request(req);
var f = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"default-option-combiner","default-option-combiner",350772302).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = new cljs.core.Keyword(null,"default-option-combiner","default-option-combiner",350772302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(happy.core.default_options));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return happy.core.default_option_combiner;
}
}
})();
var vec__27412 = happy.core.apply_request_interceptors(req__$1,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(happy.core.default_options),m], 0)));
var req__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27412,(0),null);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27412,(1),null);
happy.core.validate_request_BANG_(req__$2);

happy.core.validate_options_BANG_(m__$1);

return happy.core._send_BANG_(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(m__$1),req__$2,m__$1);
});
happy.core.GET = (function happy$core$GET(var_args){
var G__27416 = arguments.length;
switch (G__27416) {
case 1:
return happy.core.GET.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.GET.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.GET.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.GET.cljs$core$IFn$_invoke$arity$1 = (function (url){
return happy.core.GET.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(happy.core.GET.cljs$core$IFn$_invoke$arity$2 = (function (url,hm){
return happy.core.GET.cljs$core$IFn$_invoke$arity$3(url,hm,null);
}));

(happy.core.GET.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm], null),m);
}));

(happy.core.GET.cljs$lang$maxFixedArity = 3);

happy.core.HEAD = (function happy$core$HEAD(var_args){
var G__27418 = arguments.length;
switch (G__27418) {
case 1:
return happy.core.HEAD.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.HEAD.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.HEAD.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.HEAD.cljs$core$IFn$_invoke$arity$1 = (function (url){
return happy.core.HEAD.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(happy.core.HEAD.cljs$core$IFn$_invoke$arity$2 = (function (url,hm){
return happy.core.HEAD.cljs$core$IFn$_invoke$arity$3(url,hm,null);
}));

(happy.core.HEAD.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"HEAD",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm], null),m);
}));

(happy.core.HEAD.cljs$lang$maxFixedArity = 3);

happy.core.POST = (function happy$core$POST(var_args){
var G__27420 = arguments.length;
switch (G__27420) {
case 2:
return happy.core.POST.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.POST.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return happy.core.POST.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.POST.cljs$core$IFn$_invoke$arity$2 = (function (url,b){
return happy.core.POST.cljs$core$IFn$_invoke$arity$3(url,cljs.core.PersistentArrayMap.EMPTY,b);
}));

(happy.core.POST.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,b){
return happy.core.POST.cljs$core$IFn$_invoke$arity$4(url,hm,b,null);
}));

(happy.core.POST.cljs$core$IFn$_invoke$arity$4 = (function (url,hm,b,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm,new cljs.core.Keyword(null,"body","body",-2049205669),b], null),m);
}));

(happy.core.POST.cljs$lang$maxFixedArity = 4);

happy.core.PUT = (function happy$core$PUT(var_args){
var G__27422 = arguments.length;
switch (G__27422) {
case 2:
return happy.core.PUT.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.PUT.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return happy.core.PUT.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.PUT.cljs$core$IFn$_invoke$arity$2 = (function (url,b){
return happy.core.PUT.cljs$core$IFn$_invoke$arity$3(url,cljs.core.PersistentArrayMap.EMPTY,b);
}));

(happy.core.PUT.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,b){
return happy.core.PUT.cljs$core$IFn$_invoke$arity$4(url,hm,b,null);
}));

(happy.core.PUT.cljs$core$IFn$_invoke$arity$4 = (function (url,hm,b,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm,new cljs.core.Keyword(null,"body","body",-2049205669),b], null),m);
}));

(happy.core.PUT.cljs$lang$maxFixedArity = 4);

happy.core.PATCH = (function happy$core$PATCH(var_args){
var G__27424 = arguments.length;
switch (G__27424) {
case 2:
return happy.core.PATCH.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.PATCH.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return happy.core.PATCH.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.PATCH.cljs$core$IFn$_invoke$arity$2 = (function (url,b){
return happy.core.PATCH.cljs$core$IFn$_invoke$arity$3(url,cljs.core.PersistentArrayMap.EMPTY,b);
}));

(happy.core.PATCH.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,b){
return happy.core.PATCH.cljs$core$IFn$_invoke$arity$4(url,hm,b,null);
}));

(happy.core.PATCH.cljs$core$IFn$_invoke$arity$4 = (function (url,hm,b,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"PATCH",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm,new cljs.core.Keyword(null,"body","body",-2049205669),b], null),m);
}));

(happy.core.PATCH.cljs$lang$maxFixedArity = 4);

happy.core.DELETE = (function happy$core$DELETE(var_args){
var G__27426 = arguments.length;
switch (G__27426) {
case 1:
return happy.core.DELETE.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.DELETE.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.DELETE.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.DELETE.cljs$core$IFn$_invoke$arity$1 = (function (url){
return happy.core.DELETE.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(happy.core.DELETE.cljs$core$IFn$_invoke$arity$2 = (function (url,hm){
return happy.core.DELETE.cljs$core$IFn$_invoke$arity$3(url,hm,null);
}));

(happy.core.DELETE.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm], null),m);
}));

(happy.core.DELETE.cljs$lang$maxFixedArity = 3);

happy.core.OPTIONS = (function happy$core$OPTIONS(var_args){
var G__27428 = arguments.length;
switch (G__27428) {
case 1:
return happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$1 = (function (url){
return happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$2 = (function (url,hm){
return happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$3(url,hm,null);
}));

(happy.core.OPTIONS.cljs$core$IFn$_invoke$arity$3 = (function (url,hm,m){
return happy.core.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"OPTIONS",new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),hm], null),m);
}));

(happy.core.OPTIONS.cljs$lang$maxFixedArity = 3);

happy.core.merge_representors_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [happy.representor.edn.create.cljs$core$IFn$_invoke$arity$0(),happy.representors.text_representor,happy.representors.binary_representor], null));

//# sourceMappingURL=happy.core.js.map
