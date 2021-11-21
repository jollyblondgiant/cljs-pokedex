goog.provide('happy.mime');
happy.mime.top_level = (function happy$mime$top_level(s){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//));
});
happy.mime.subtype = (function happy$mime$subtype(s){
return cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//));
});
happy.mime.suffix = (function happy$mime$suffix(s){
return cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\+/));
});
happy.mime.wildcard_QMARK_ = (function happy$mime$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",happy.mime.subtype(s));
});
happy.mime.generic = (function happy$mime$generic(s){
var temp__5751__auto__ = happy.mime.suffix(s);
if(cljs.core.truth_(temp__5751__auto__)){
var su = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(happy.mime.top_level(s)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(su)].join('');
} else {
return s;
}
});

//# sourceMappingURL=happy.mime.js.map
