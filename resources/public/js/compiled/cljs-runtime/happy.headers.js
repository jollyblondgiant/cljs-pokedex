goog.provide('happy.headers');
happy.headers.content_type = (function happy$headers$content_type(hm){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hm,"content-type");
if(cljs.core.truth_(temp__5751__auto__)){
var s = temp__5751__auto__;
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(s),/[ ]*;[ ]*/);
} else {
return null;
}
});

//# sourceMappingURL=happy.headers.js.map
