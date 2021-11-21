
shadow.cljs.devtools.client.env.module_loaded('app');

try { cljs_pokedex.core.init(); } catch (e) { console.error("An error occurred when calling (cljs-pokedex.core/init)"); throw(e); }