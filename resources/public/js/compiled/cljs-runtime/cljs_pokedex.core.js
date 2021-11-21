goog.provide('cljs_pokedex.core');
cljs_pokedex.core.dev_setup = (function cljs_pokedex$core$dev_setup(){
if(cljs_pokedex.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
cljs_pokedex.core.mount_root = (function cljs_pokedex$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.main_panel], null),root_el);
});
cljs_pokedex.core.init = (function cljs_pokedex$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","initialize-db","cljs-pokedex.events/initialize-db",210281020)], null));

cljs_pokedex.core.dev_setup();

return cljs_pokedex.core.mount_root();
});

//# sourceMappingURL=cljs_pokedex.core.js.map
