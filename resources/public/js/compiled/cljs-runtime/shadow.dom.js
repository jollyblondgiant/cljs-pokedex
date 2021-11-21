goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36280 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36280(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36281 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36281(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34932 = coll;
var G__34933 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34932,G__34933) : shadow.dom.lazy_native_coll_seq.call(null,G__34932,G__34933));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34979 = arguments.length;
switch (G__34979) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34986 = arguments.length;
switch (G__34986) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35006 = arguments.length;
switch (G__35006) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35021 = arguments.length;
switch (G__35021) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35032 = arguments.length;
switch (G__35032) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35047 = arguments.length;
switch (G__35047) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35060){if((e35060 instanceof Object)){
var e = e35060;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35060;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35073 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35074 = null;
var count__35075 = (0);
var i__35076 = (0);
while(true){
if((i__35076 < count__35075)){
var el = chunk__35074.cljs$core$IIndexed$_nth$arity$2(null,i__35076);
var handler_36302__$1 = ((function (seq__35073,chunk__35074,count__35075,i__35076,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35073,chunk__35074,count__35075,i__35076,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36302__$1);


var G__36303 = seq__35073;
var G__36304 = chunk__35074;
var G__36305 = count__35075;
var G__36306 = (i__35076 + (1));
seq__35073 = G__36303;
chunk__35074 = G__36304;
count__35075 = G__36305;
i__35076 = G__36306;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35073);
if(temp__5753__auto__){
var seq__35073__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35073__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35073__$1);
var G__36307 = cljs.core.chunk_rest(seq__35073__$1);
var G__36308 = c__4638__auto__;
var G__36309 = cljs.core.count(c__4638__auto__);
var G__36310 = (0);
seq__35073 = G__36307;
chunk__35074 = G__36308;
count__35075 = G__36309;
i__35076 = G__36310;
continue;
} else {
var el = cljs.core.first(seq__35073__$1);
var handler_36311__$1 = ((function (seq__35073,chunk__35074,count__35075,i__35076,el,seq__35073__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35073,chunk__35074,count__35075,i__35076,el,seq__35073__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36311__$1);


var G__36314 = cljs.core.next(seq__35073__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__35073 = G__36314;
chunk__35074 = G__36315;
count__35075 = G__36316;
i__35076 = G__36317;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35127 = cljs.core.seq(events);
var chunk__35128 = null;
var count__35129 = (0);
var i__35130 = (0);
while(true){
if((i__35130 < count__35129)){
var vec__35145 = chunk__35128.cljs$core$IIndexed$_nth$arity$2(null,i__35130);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36324 = seq__35127;
var G__36325 = chunk__35128;
var G__36326 = count__35129;
var G__36327 = (i__35130 + (1));
seq__35127 = G__36324;
chunk__35128 = G__36325;
count__35129 = G__36326;
i__35130 = G__36327;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35127);
if(temp__5753__auto__){
var seq__35127__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35127__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35127__$1);
var G__36328 = cljs.core.chunk_rest(seq__35127__$1);
var G__36329 = c__4638__auto__;
var G__36330 = cljs.core.count(c__4638__auto__);
var G__36331 = (0);
seq__35127 = G__36328;
chunk__35128 = G__36329;
count__35129 = G__36330;
i__35130 = G__36331;
continue;
} else {
var vec__35148 = cljs.core.first(seq__35127__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36332 = cljs.core.next(seq__35127__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__35127 = G__36332;
chunk__35128 = G__36333;
count__35129 = G__36334;
i__35130 = G__36335;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35152 = cljs.core.seq(styles);
var chunk__35153 = null;
var count__35154 = (0);
var i__35155 = (0);
while(true){
if((i__35155 < count__35154)){
var vec__35191 = chunk__35153.cljs$core$IIndexed$_nth$arity$2(null,i__35155);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36336 = seq__35152;
var G__36337 = chunk__35153;
var G__36338 = count__35154;
var G__36339 = (i__35155 + (1));
seq__35152 = G__36336;
chunk__35153 = G__36337;
count__35154 = G__36338;
i__35155 = G__36339;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35152);
if(temp__5753__auto__){
var seq__35152__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35152__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35152__$1);
var G__36341 = cljs.core.chunk_rest(seq__35152__$1);
var G__36342 = c__4638__auto__;
var G__36343 = cljs.core.count(c__4638__auto__);
var G__36344 = (0);
seq__35152 = G__36341;
chunk__35153 = G__36342;
count__35154 = G__36343;
i__35155 = G__36344;
continue;
} else {
var vec__35203 = cljs.core.first(seq__35152__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35203,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36348 = cljs.core.next(seq__35152__$1);
var G__36349 = null;
var G__36350 = (0);
var G__36351 = (0);
seq__35152 = G__36348;
chunk__35153 = G__36349;
count__35154 = G__36350;
i__35155 = G__36351;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35244_36353 = key;
var G__35244_36354__$1 = (((G__35244_36353 instanceof cljs.core.Keyword))?G__35244_36353.fqn:null);
switch (G__35244_36354__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36360 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_36360,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_36360,"aria-");
}
})())){
el.setAttribute(ks_36360,value);
} else {
(el[ks_36360] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35324){
var map__35329 = p__35324;
var map__35329__$1 = cljs.core.__destructure_map(map__35329);
var props = map__35329__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35333 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35340 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35340,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35340;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35362){
var vec__35363 = p__35362;
var seq__35364 = cljs.core.seq(vec__35363);
var first__35365 = cljs.core.first(seq__35364);
var seq__35364__$1 = cljs.core.next(seq__35364);
var nn = first__35365;
var first__35365__$1 = cljs.core.first(seq__35364__$1);
var seq__35364__$2 = cljs.core.next(seq__35364__$1);
var np = first__35365__$1;
var nc = seq__35364__$2;
var node = vec__35363;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35368 = nn;
var G__35369 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35368,G__35369) : create_fn.call(null,G__35368,G__35369));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35374 = nn;
var G__35375 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35374,G__35375) : create_fn.call(null,G__35374,G__35375));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35382 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(1),null);
var seq__35385_36377 = cljs.core.seq(node_children);
var chunk__35386_36378 = null;
var count__35387_36379 = (0);
var i__35388_36380 = (0);
while(true){
if((i__35388_36380 < count__35387_36379)){
var child_struct_36381 = chunk__35386_36378.cljs$core$IIndexed$_nth$arity$2(null,i__35388_36380);
var children_36382 = shadow.dom.dom_node(child_struct_36381);
if(cljs.core.seq_QMARK_(children_36382)){
var seq__35487_36384 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36382));
var chunk__35489_36385 = null;
var count__35490_36386 = (0);
var i__35491_36387 = (0);
while(true){
if((i__35491_36387 < count__35490_36386)){
var child_36389 = chunk__35489_36385.cljs$core$IIndexed$_nth$arity$2(null,i__35491_36387);
if(cljs.core.truth_(child_36389)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36389);


var G__36390 = seq__35487_36384;
var G__36391 = chunk__35489_36385;
var G__36392 = count__35490_36386;
var G__36393 = (i__35491_36387 + (1));
seq__35487_36384 = G__36390;
chunk__35489_36385 = G__36391;
count__35490_36386 = G__36392;
i__35491_36387 = G__36393;
continue;
} else {
var G__36394 = seq__35487_36384;
var G__36395 = chunk__35489_36385;
var G__36396 = count__35490_36386;
var G__36397 = (i__35491_36387 + (1));
seq__35487_36384 = G__36394;
chunk__35489_36385 = G__36395;
count__35490_36386 = G__36396;
i__35491_36387 = G__36397;
continue;
}
} else {
var temp__5753__auto___36398 = cljs.core.seq(seq__35487_36384);
if(temp__5753__auto___36398){
var seq__35487_36399__$1 = temp__5753__auto___36398;
if(cljs.core.chunked_seq_QMARK_(seq__35487_36399__$1)){
var c__4638__auto___36400 = cljs.core.chunk_first(seq__35487_36399__$1);
var G__36401 = cljs.core.chunk_rest(seq__35487_36399__$1);
var G__36402 = c__4638__auto___36400;
var G__36403 = cljs.core.count(c__4638__auto___36400);
var G__36404 = (0);
seq__35487_36384 = G__36401;
chunk__35489_36385 = G__36402;
count__35490_36386 = G__36403;
i__35491_36387 = G__36404;
continue;
} else {
var child_36405 = cljs.core.first(seq__35487_36399__$1);
if(cljs.core.truth_(child_36405)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36405);


var G__36406 = cljs.core.next(seq__35487_36399__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__35487_36384 = G__36406;
chunk__35489_36385 = G__36407;
count__35490_36386 = G__36408;
i__35491_36387 = G__36409;
continue;
} else {
var G__36410 = cljs.core.next(seq__35487_36399__$1);
var G__36411 = null;
var G__36412 = (0);
var G__36413 = (0);
seq__35487_36384 = G__36410;
chunk__35489_36385 = G__36411;
count__35490_36386 = G__36412;
i__35491_36387 = G__36413;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36382);
}


var G__36414 = seq__35385_36377;
var G__36415 = chunk__35386_36378;
var G__36416 = count__35387_36379;
var G__36417 = (i__35388_36380 + (1));
seq__35385_36377 = G__36414;
chunk__35386_36378 = G__36415;
count__35387_36379 = G__36416;
i__35388_36380 = G__36417;
continue;
} else {
var temp__5753__auto___36418 = cljs.core.seq(seq__35385_36377);
if(temp__5753__auto___36418){
var seq__35385_36419__$1 = temp__5753__auto___36418;
if(cljs.core.chunked_seq_QMARK_(seq__35385_36419__$1)){
var c__4638__auto___36420 = cljs.core.chunk_first(seq__35385_36419__$1);
var G__36421 = cljs.core.chunk_rest(seq__35385_36419__$1);
var G__36422 = c__4638__auto___36420;
var G__36423 = cljs.core.count(c__4638__auto___36420);
var G__36424 = (0);
seq__35385_36377 = G__36421;
chunk__35386_36378 = G__36422;
count__35387_36379 = G__36423;
i__35388_36380 = G__36424;
continue;
} else {
var child_struct_36425 = cljs.core.first(seq__35385_36419__$1);
var children_36426 = shadow.dom.dom_node(child_struct_36425);
if(cljs.core.seq_QMARK_(children_36426)){
var seq__35543_36427 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36426));
var chunk__35545_36428 = null;
var count__35546_36429 = (0);
var i__35547_36430 = (0);
while(true){
if((i__35547_36430 < count__35546_36429)){
var child_36431 = chunk__35545_36428.cljs$core$IIndexed$_nth$arity$2(null,i__35547_36430);
if(cljs.core.truth_(child_36431)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36431);


var G__36432 = seq__35543_36427;
var G__36433 = chunk__35545_36428;
var G__36434 = count__35546_36429;
var G__36435 = (i__35547_36430 + (1));
seq__35543_36427 = G__36432;
chunk__35545_36428 = G__36433;
count__35546_36429 = G__36434;
i__35547_36430 = G__36435;
continue;
} else {
var G__36437 = seq__35543_36427;
var G__36438 = chunk__35545_36428;
var G__36439 = count__35546_36429;
var G__36440 = (i__35547_36430 + (1));
seq__35543_36427 = G__36437;
chunk__35545_36428 = G__36438;
count__35546_36429 = G__36439;
i__35547_36430 = G__36440;
continue;
}
} else {
var temp__5753__auto___36441__$1 = cljs.core.seq(seq__35543_36427);
if(temp__5753__auto___36441__$1){
var seq__35543_36442__$1 = temp__5753__auto___36441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35543_36442__$1)){
var c__4638__auto___36443 = cljs.core.chunk_first(seq__35543_36442__$1);
var G__36444 = cljs.core.chunk_rest(seq__35543_36442__$1);
var G__36445 = c__4638__auto___36443;
var G__36446 = cljs.core.count(c__4638__auto___36443);
var G__36447 = (0);
seq__35543_36427 = G__36444;
chunk__35545_36428 = G__36445;
count__35546_36429 = G__36446;
i__35547_36430 = G__36447;
continue;
} else {
var child_36448 = cljs.core.first(seq__35543_36442__$1);
if(cljs.core.truth_(child_36448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36448);


var G__36449 = cljs.core.next(seq__35543_36442__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__35543_36427 = G__36449;
chunk__35545_36428 = G__36450;
count__35546_36429 = G__36451;
i__35547_36430 = G__36452;
continue;
} else {
var G__36453 = cljs.core.next(seq__35543_36442__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__35543_36427 = G__36453;
chunk__35545_36428 = G__36454;
count__35546_36429 = G__36455;
i__35547_36430 = G__36456;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36426);
}


var G__36457 = cljs.core.next(seq__35385_36419__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__35385_36377 = G__36457;
chunk__35386_36378 = G__36458;
count__35387_36379 = G__36459;
i__35388_36380 = G__36460;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35590 = cljs.core.seq(node);
var chunk__35591 = null;
var count__35592 = (0);
var i__35593 = (0);
while(true){
if((i__35593 < count__35592)){
var n = chunk__35591.cljs$core$IIndexed$_nth$arity$2(null,i__35593);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36465 = seq__35590;
var G__36466 = chunk__35591;
var G__36467 = count__35592;
var G__36468 = (i__35593 + (1));
seq__35590 = G__36465;
chunk__35591 = G__36466;
count__35592 = G__36467;
i__35593 = G__36468;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35590);
if(temp__5753__auto__){
var seq__35590__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35590__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35590__$1);
var G__36470 = cljs.core.chunk_rest(seq__35590__$1);
var G__36471 = c__4638__auto__;
var G__36472 = cljs.core.count(c__4638__auto__);
var G__36473 = (0);
seq__35590 = G__36470;
chunk__35591 = G__36471;
count__35592 = G__36472;
i__35593 = G__36473;
continue;
} else {
var n = cljs.core.first(seq__35590__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36475 = cljs.core.next(seq__35590__$1);
var G__36476 = null;
var G__36477 = (0);
var G__36478 = (0);
seq__35590 = G__36475;
chunk__35591 = G__36476;
count__35592 = G__36477;
i__35593 = G__36478;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35608 = arguments.length;
switch (G__35608) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35621 = arguments.length;
switch (G__35621) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35639 = arguments.length;
switch (G__35639) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36491 = arguments.length;
var i__4819__auto___36492 = (0);
while(true){
if((i__4819__auto___36492 < len__4818__auto___36491)){
args__4824__auto__.push((arguments[i__4819__auto___36492]));

var G__36493 = (i__4819__auto___36492 + (1));
i__4819__auto___36492 = G__36493;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35675_36494 = cljs.core.seq(nodes);
var chunk__35676_36495 = null;
var count__35677_36496 = (0);
var i__35678_36497 = (0);
while(true){
if((i__35678_36497 < count__35677_36496)){
var node_36498 = chunk__35676_36495.cljs$core$IIndexed$_nth$arity$2(null,i__35678_36497);
fragment.appendChild(shadow.dom._to_dom(node_36498));


var G__36499 = seq__35675_36494;
var G__36500 = chunk__35676_36495;
var G__36501 = count__35677_36496;
var G__36502 = (i__35678_36497 + (1));
seq__35675_36494 = G__36499;
chunk__35676_36495 = G__36500;
count__35677_36496 = G__36501;
i__35678_36497 = G__36502;
continue;
} else {
var temp__5753__auto___36503 = cljs.core.seq(seq__35675_36494);
if(temp__5753__auto___36503){
var seq__35675_36504__$1 = temp__5753__auto___36503;
if(cljs.core.chunked_seq_QMARK_(seq__35675_36504__$1)){
var c__4638__auto___36505 = cljs.core.chunk_first(seq__35675_36504__$1);
var G__36506 = cljs.core.chunk_rest(seq__35675_36504__$1);
var G__36507 = c__4638__auto___36505;
var G__36508 = cljs.core.count(c__4638__auto___36505);
var G__36509 = (0);
seq__35675_36494 = G__36506;
chunk__35676_36495 = G__36507;
count__35677_36496 = G__36508;
i__35678_36497 = G__36509;
continue;
} else {
var node_36510 = cljs.core.first(seq__35675_36504__$1);
fragment.appendChild(shadow.dom._to_dom(node_36510));


var G__36511 = cljs.core.next(seq__35675_36504__$1);
var G__36512 = null;
var G__36513 = (0);
var G__36514 = (0);
seq__35675_36494 = G__36511;
chunk__35676_36495 = G__36512;
count__35677_36496 = G__36513;
i__35678_36497 = G__36514;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35668){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35668));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35697_36519 = cljs.core.seq(scripts);
var chunk__35698_36520 = null;
var count__35699_36521 = (0);
var i__35700_36522 = (0);
while(true){
if((i__35700_36522 < count__35699_36521)){
var vec__35715_36523 = chunk__35698_36520.cljs$core$IIndexed$_nth$arity$2(null,i__35700_36522);
var script_tag_36524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715_36523,(0),null);
var script_body_36525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715_36523,(1),null);
eval(script_body_36525);


var G__36526 = seq__35697_36519;
var G__36527 = chunk__35698_36520;
var G__36528 = count__35699_36521;
var G__36529 = (i__35700_36522 + (1));
seq__35697_36519 = G__36526;
chunk__35698_36520 = G__36527;
count__35699_36521 = G__36528;
i__35700_36522 = G__36529;
continue;
} else {
var temp__5753__auto___36530 = cljs.core.seq(seq__35697_36519);
if(temp__5753__auto___36530){
var seq__35697_36531__$1 = temp__5753__auto___36530;
if(cljs.core.chunked_seq_QMARK_(seq__35697_36531__$1)){
var c__4638__auto___36532 = cljs.core.chunk_first(seq__35697_36531__$1);
var G__36533 = cljs.core.chunk_rest(seq__35697_36531__$1);
var G__36534 = c__4638__auto___36532;
var G__36535 = cljs.core.count(c__4638__auto___36532);
var G__36536 = (0);
seq__35697_36519 = G__36533;
chunk__35698_36520 = G__36534;
count__35699_36521 = G__36535;
i__35700_36522 = G__36536;
continue;
} else {
var vec__35724_36539 = cljs.core.first(seq__35697_36531__$1);
var script_tag_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35724_36539,(0),null);
var script_body_36541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35724_36539,(1),null);
eval(script_body_36541);


var G__36548 = cljs.core.next(seq__35697_36531__$1);
var G__36549 = null;
var G__36550 = (0);
var G__36551 = (0);
seq__35697_36519 = G__36548;
chunk__35698_36520 = G__36549;
count__35699_36521 = G__36550;
i__35700_36522 = G__36551;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35730){
var vec__35733 = p__35730;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35757 = arguments.length;
switch (G__35757) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35783 = cljs.core.seq(style_keys);
var chunk__35784 = null;
var count__35785 = (0);
var i__35786 = (0);
while(true){
if((i__35786 < count__35785)){
var it = chunk__35784.cljs$core$IIndexed$_nth$arity$2(null,i__35786);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36558 = seq__35783;
var G__36559 = chunk__35784;
var G__36560 = count__35785;
var G__36561 = (i__35786 + (1));
seq__35783 = G__36558;
chunk__35784 = G__36559;
count__35785 = G__36560;
i__35786 = G__36561;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35783);
if(temp__5753__auto__){
var seq__35783__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35783__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35783__$1);
var G__36562 = cljs.core.chunk_rest(seq__35783__$1);
var G__36563 = c__4638__auto__;
var G__36564 = cljs.core.count(c__4638__auto__);
var G__36565 = (0);
seq__35783 = G__36562;
chunk__35784 = G__36563;
count__35785 = G__36564;
i__35786 = G__36565;
continue;
} else {
var it = cljs.core.first(seq__35783__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36566 = cljs.core.next(seq__35783__$1);
var G__36567 = null;
var G__36568 = (0);
var G__36569 = (0);
seq__35783 = G__36566;
chunk__35784 = G__36567;
count__35785 = G__36568;
i__35786 = G__36569;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35795,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35803 = k35795;
var G__35803__$1 = (((G__35803 instanceof cljs.core.Keyword))?G__35803.fqn:null);
switch (G__35803__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35795,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35809){
var vec__35811 = p__35809;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35794){
var self__ = this;
var G__35794__$1 = this;
return (new cljs.core.RecordIter((0),G__35794__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35796,other35797){
var self__ = this;
var this35796__$1 = this;
return (((!((other35797 == null)))) && ((((this35796__$1.constructor === other35797.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35796__$1.x,other35797.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35796__$1.y,other35797.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35796__$1.__extmap,other35797.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35795){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35841 = k35795;
var G__35841__$1 = (((G__35841 instanceof cljs.core.Keyword))?G__35841.fqn:null);
switch (G__35841__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35795);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35794){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35845 = cljs.core.keyword_identical_QMARK_;
var expr__35846 = k__4470__auto__;
if(cljs.core.truth_((pred__35845.cljs$core$IFn$_invoke$arity$2 ? pred__35845.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35846) : pred__35845.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35846)))){
return (new shadow.dom.Coordinate(G__35794,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35845.cljs$core$IFn$_invoke$arity$2 ? pred__35845.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35846) : pred__35845.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35846)))){
return (new shadow.dom.Coordinate(self__.x,G__35794,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35794),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35794){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35794,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35798){
var extmap__4501__auto__ = (function (){var G__35873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35798,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35798)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35873);
} else {
return G__35873;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35798),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35798),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35891,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35912 = k35891;
var G__35912__$1 = (((G__35912 instanceof cljs.core.Keyword))?G__35912.fqn:null);
switch (G__35912__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35891,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35917){
var vec__35918 = p__35917;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35890){
var self__ = this;
var G__35890__$1 = this;
return (new cljs.core.RecordIter((0),G__35890__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35892,other35893){
var self__ = this;
var this35892__$1 = this;
return (((!((other35893 == null)))) && ((((this35892__$1.constructor === other35893.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35892__$1.w,other35893.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35892__$1.h,other35893.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35892__$1.__extmap,other35893.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35891){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35962 = k35891;
var G__35962__$1 = (((G__35962 instanceof cljs.core.Keyword))?G__35962.fqn:null);
switch (G__35962__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35891);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35890){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35968 = cljs.core.keyword_identical_QMARK_;
var expr__35969 = k__4470__auto__;
if(cljs.core.truth_((pred__35968.cljs$core$IFn$_invoke$arity$2 ? pred__35968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35969) : pred__35968.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35969)))){
return (new shadow.dom.Size(G__35890,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35968.cljs$core$IFn$_invoke$arity$2 ? pred__35968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35969) : pred__35968.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35969)))){
return (new shadow.dom.Size(self__.w,G__35890,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35890),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35890){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35890,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35900){
var extmap__4501__auto__ = (function (){var G__35988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35900,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35900)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35988);
} else {
return G__35988;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35900),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35900),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__36608 = (i + (1));
var G__36609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36608;
ret = G__36609;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36039){
var vec__36043 = p__36039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36052 = arguments.length;
switch (G__36052) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36623 = ps;
var G__36624 = (i + (1));
el__$1 = G__36623;
i = G__36624;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36077 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36077,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36077,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36077,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36080_36629 = cljs.core.seq(props);
var chunk__36081_36630 = null;
var count__36082_36631 = (0);
var i__36083_36632 = (0);
while(true){
if((i__36083_36632 < count__36082_36631)){
var vec__36090_36634 = chunk__36081_36630.cljs$core$IIndexed$_nth$arity$2(null,i__36083_36632);
var k_36635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090_36634,(0),null);
var v_36636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090_36634,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36635);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36635),v_36636);


var G__36637 = seq__36080_36629;
var G__36638 = chunk__36081_36630;
var G__36639 = count__36082_36631;
var G__36640 = (i__36083_36632 + (1));
seq__36080_36629 = G__36637;
chunk__36081_36630 = G__36638;
count__36082_36631 = G__36639;
i__36083_36632 = G__36640;
continue;
} else {
var temp__5753__auto___36641 = cljs.core.seq(seq__36080_36629);
if(temp__5753__auto___36641){
var seq__36080_36642__$1 = temp__5753__auto___36641;
if(cljs.core.chunked_seq_QMARK_(seq__36080_36642__$1)){
var c__4638__auto___36644 = cljs.core.chunk_first(seq__36080_36642__$1);
var G__36647 = cljs.core.chunk_rest(seq__36080_36642__$1);
var G__36648 = c__4638__auto___36644;
var G__36649 = cljs.core.count(c__4638__auto___36644);
var G__36650 = (0);
seq__36080_36629 = G__36647;
chunk__36081_36630 = G__36648;
count__36082_36631 = G__36649;
i__36083_36632 = G__36650;
continue;
} else {
var vec__36093_36651 = cljs.core.first(seq__36080_36642__$1);
var k_36652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093_36651,(0),null);
var v_36653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093_36651,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36652);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36652),v_36653);


var G__36657 = cljs.core.next(seq__36080_36642__$1);
var G__36658 = null;
var G__36659 = (0);
var G__36660 = (0);
seq__36080_36629 = G__36657;
chunk__36081_36630 = G__36658;
count__36082_36631 = G__36659;
i__36083_36632 = G__36660;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36097 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36097,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36097,(1),null);
var seq__36100_36661 = cljs.core.seq(node_children);
var chunk__36102_36662 = null;
var count__36103_36663 = (0);
var i__36104_36664 = (0);
while(true){
if((i__36104_36664 < count__36103_36663)){
var child_struct_36665 = chunk__36102_36662.cljs$core$IIndexed$_nth$arity$2(null,i__36104_36664);
if((!((child_struct_36665 == null)))){
if(typeof child_struct_36665 === 'string'){
var text_36666 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36666),child_struct_36665].join(''));
} else {
var children_36667 = shadow.dom.svg_node(child_struct_36665);
if(cljs.core.seq_QMARK_(children_36667)){
var seq__36151_36668 = cljs.core.seq(children_36667);
var chunk__36153_36669 = null;
var count__36154_36670 = (0);
var i__36155_36671 = (0);
while(true){
if((i__36155_36671 < count__36154_36670)){
var child_36672 = chunk__36153_36669.cljs$core$IIndexed$_nth$arity$2(null,i__36155_36671);
if(cljs.core.truth_(child_36672)){
node.appendChild(child_36672);


var G__36673 = seq__36151_36668;
var G__36674 = chunk__36153_36669;
var G__36675 = count__36154_36670;
var G__36676 = (i__36155_36671 + (1));
seq__36151_36668 = G__36673;
chunk__36153_36669 = G__36674;
count__36154_36670 = G__36675;
i__36155_36671 = G__36676;
continue;
} else {
var G__36677 = seq__36151_36668;
var G__36678 = chunk__36153_36669;
var G__36679 = count__36154_36670;
var G__36680 = (i__36155_36671 + (1));
seq__36151_36668 = G__36677;
chunk__36153_36669 = G__36678;
count__36154_36670 = G__36679;
i__36155_36671 = G__36680;
continue;
}
} else {
var temp__5753__auto___36681 = cljs.core.seq(seq__36151_36668);
if(temp__5753__auto___36681){
var seq__36151_36682__$1 = temp__5753__auto___36681;
if(cljs.core.chunked_seq_QMARK_(seq__36151_36682__$1)){
var c__4638__auto___36683 = cljs.core.chunk_first(seq__36151_36682__$1);
var G__36685 = cljs.core.chunk_rest(seq__36151_36682__$1);
var G__36686 = c__4638__auto___36683;
var G__36687 = cljs.core.count(c__4638__auto___36683);
var G__36688 = (0);
seq__36151_36668 = G__36685;
chunk__36153_36669 = G__36686;
count__36154_36670 = G__36687;
i__36155_36671 = G__36688;
continue;
} else {
var child_36689 = cljs.core.first(seq__36151_36682__$1);
if(cljs.core.truth_(child_36689)){
node.appendChild(child_36689);


var G__36693 = cljs.core.next(seq__36151_36682__$1);
var G__36694 = null;
var G__36695 = (0);
var G__36696 = (0);
seq__36151_36668 = G__36693;
chunk__36153_36669 = G__36694;
count__36154_36670 = G__36695;
i__36155_36671 = G__36696;
continue;
} else {
var G__36697 = cljs.core.next(seq__36151_36682__$1);
var G__36698 = null;
var G__36699 = (0);
var G__36700 = (0);
seq__36151_36668 = G__36697;
chunk__36153_36669 = G__36698;
count__36154_36670 = G__36699;
i__36155_36671 = G__36700;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36667);
}
}


var G__36701 = seq__36100_36661;
var G__36702 = chunk__36102_36662;
var G__36703 = count__36103_36663;
var G__36704 = (i__36104_36664 + (1));
seq__36100_36661 = G__36701;
chunk__36102_36662 = G__36702;
count__36103_36663 = G__36703;
i__36104_36664 = G__36704;
continue;
} else {
var G__36705 = seq__36100_36661;
var G__36706 = chunk__36102_36662;
var G__36707 = count__36103_36663;
var G__36708 = (i__36104_36664 + (1));
seq__36100_36661 = G__36705;
chunk__36102_36662 = G__36706;
count__36103_36663 = G__36707;
i__36104_36664 = G__36708;
continue;
}
} else {
var temp__5753__auto___36709 = cljs.core.seq(seq__36100_36661);
if(temp__5753__auto___36709){
var seq__36100_36710__$1 = temp__5753__auto___36709;
if(cljs.core.chunked_seq_QMARK_(seq__36100_36710__$1)){
var c__4638__auto___36711 = cljs.core.chunk_first(seq__36100_36710__$1);
var G__36712 = cljs.core.chunk_rest(seq__36100_36710__$1);
var G__36713 = c__4638__auto___36711;
var G__36714 = cljs.core.count(c__4638__auto___36711);
var G__36715 = (0);
seq__36100_36661 = G__36712;
chunk__36102_36662 = G__36713;
count__36103_36663 = G__36714;
i__36104_36664 = G__36715;
continue;
} else {
var child_struct_36716 = cljs.core.first(seq__36100_36710__$1);
if((!((child_struct_36716 == null)))){
if(typeof child_struct_36716 === 'string'){
var text_36717 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36717),child_struct_36716].join(''));
} else {
var children_36718 = shadow.dom.svg_node(child_struct_36716);
if(cljs.core.seq_QMARK_(children_36718)){
var seq__36181_36719 = cljs.core.seq(children_36718);
var chunk__36183_36720 = null;
var count__36184_36721 = (0);
var i__36185_36722 = (0);
while(true){
if((i__36185_36722 < count__36184_36721)){
var child_36723 = chunk__36183_36720.cljs$core$IIndexed$_nth$arity$2(null,i__36185_36722);
if(cljs.core.truth_(child_36723)){
node.appendChild(child_36723);


var G__36724 = seq__36181_36719;
var G__36725 = chunk__36183_36720;
var G__36726 = count__36184_36721;
var G__36727 = (i__36185_36722 + (1));
seq__36181_36719 = G__36724;
chunk__36183_36720 = G__36725;
count__36184_36721 = G__36726;
i__36185_36722 = G__36727;
continue;
} else {
var G__36728 = seq__36181_36719;
var G__36729 = chunk__36183_36720;
var G__36730 = count__36184_36721;
var G__36731 = (i__36185_36722 + (1));
seq__36181_36719 = G__36728;
chunk__36183_36720 = G__36729;
count__36184_36721 = G__36730;
i__36185_36722 = G__36731;
continue;
}
} else {
var temp__5753__auto___36732__$1 = cljs.core.seq(seq__36181_36719);
if(temp__5753__auto___36732__$1){
var seq__36181_36733__$1 = temp__5753__auto___36732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36181_36733__$1)){
var c__4638__auto___36734 = cljs.core.chunk_first(seq__36181_36733__$1);
var G__36735 = cljs.core.chunk_rest(seq__36181_36733__$1);
var G__36736 = c__4638__auto___36734;
var G__36737 = cljs.core.count(c__4638__auto___36734);
var G__36738 = (0);
seq__36181_36719 = G__36735;
chunk__36183_36720 = G__36736;
count__36184_36721 = G__36737;
i__36185_36722 = G__36738;
continue;
} else {
var child_36739 = cljs.core.first(seq__36181_36733__$1);
if(cljs.core.truth_(child_36739)){
node.appendChild(child_36739);


var G__36740 = cljs.core.next(seq__36181_36733__$1);
var G__36741 = null;
var G__36742 = (0);
var G__36743 = (0);
seq__36181_36719 = G__36740;
chunk__36183_36720 = G__36741;
count__36184_36721 = G__36742;
i__36185_36722 = G__36743;
continue;
} else {
var G__36744 = cljs.core.next(seq__36181_36733__$1);
var G__36745 = null;
var G__36746 = (0);
var G__36747 = (0);
seq__36181_36719 = G__36744;
chunk__36183_36720 = G__36745;
count__36184_36721 = G__36746;
i__36185_36722 = G__36747;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36718);
}
}


var G__36748 = cljs.core.next(seq__36100_36710__$1);
var G__36749 = null;
var G__36750 = (0);
var G__36751 = (0);
seq__36100_36661 = G__36748;
chunk__36102_36662 = G__36749;
count__36103_36663 = G__36750;
i__36104_36664 = G__36751;
continue;
} else {
var G__36752 = cljs.core.next(seq__36100_36710__$1);
var G__36753 = null;
var G__36754 = (0);
var G__36755 = (0);
seq__36100_36661 = G__36752;
chunk__36102_36662 = G__36753;
count__36103_36663 = G__36754;
i__36104_36664 = G__36755;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36756 = arguments.length;
var i__4819__auto___36757 = (0);
while(true){
if((i__4819__auto___36757 < len__4818__auto___36756)){
args__4824__auto__.push((arguments[i__4819__auto___36757]));

var G__36758 = (i__4819__auto___36757 + (1));
i__4819__auto___36757 = G__36758;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36221){
var G__36222 = cljs.core.first(seq36221);
var seq36221__$1 = cljs.core.next(seq36221);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36222,seq36221__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36240 = arguments.length;
switch (G__36240) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__32678__auto___36763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32679__auto__ = (function (){var switch__32109__auto__ = (function (state_36257){
var state_val_36258 = (state_36257[(1)]);
if((state_val_36258 === (1))){
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36257__$1,(2),once_or_cleanup);
} else {
if((state_val_36258 === (2))){
var inst_36253 = (state_36257[(2)]);
var inst_36254 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36257__$1 = (function (){var statearr_36259 = state_36257;
(statearr_36259[(7)] = inst_36253);

return statearr_36259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36257__$1,inst_36254);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32110__auto__ = null;
var shadow$dom$state_machine__32110__auto____0 = (function (){
var statearr_36261 = [null,null,null,null,null,null,null,null];
(statearr_36261[(0)] = shadow$dom$state_machine__32110__auto__);

(statearr_36261[(1)] = (1));

return statearr_36261;
});
var shadow$dom$state_machine__32110__auto____1 = (function (state_36257){
while(true){
var ret_value__32111__auto__ = (function (){try{while(true){
var result__32112__auto__ = switch__32109__auto__(state_36257);
if(cljs.core.keyword_identical_QMARK_(result__32112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32112__auto__;
}
break;
}
}catch (e36262){var ex__32113__auto__ = e36262;
var statearr_36263_36764 = state_36257;
(statearr_36263_36764[(2)] = ex__32113__auto__);


if(cljs.core.seq((state_36257[(4)]))){
var statearr_36264_36765 = state_36257;
(statearr_36264_36765[(1)] = cljs.core.first((state_36257[(4)])));

} else {
throw ex__32113__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36766 = state_36257;
state_36257 = G__36766;
continue;
} else {
return ret_value__32111__auto__;
}
break;
}
});
shadow$dom$state_machine__32110__auto__ = function(state_36257){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32110__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32110__auto____1.call(this,state_36257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32110__auto____0;
shadow$dom$state_machine__32110__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32110__auto____1;
return shadow$dom$state_machine__32110__auto__;
})()
})();
var state__32680__auto__ = (function (){var statearr_36275 = f__32679__auto__();
(statearr_36275[(6)] = c__32678__auto___36763);

return statearr_36275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32680__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
