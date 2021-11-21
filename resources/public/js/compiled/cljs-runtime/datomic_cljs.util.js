goog.provide('datomic_cljs.util');
/**
 * Returns a closed core.async channel containing only element.
 */
datomic_cljs.util.singleton_chan = (function datomic_cljs$util$singleton_chan(element){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(c,element,(function (){
return cljs.core.async.close_BANG_(c);
}));

return c;
});

//# sourceMappingURL=datomic_cljs.util.js.map
