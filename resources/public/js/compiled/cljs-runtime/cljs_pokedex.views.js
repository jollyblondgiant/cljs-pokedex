goog.provide('cljs_pokedex.views');
cljs_pokedex.views.ball_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"johto","johto",-1970400831),new cljs.core.Keyword(null,"kalos","kalos",1955158851),new cljs.core.Keyword(null,"unova","unova",1121620389),new cljs.core.Keyword(null,"hoenn","hoenn",1314897005),new cljs.core.Keyword(null,"alola","alola",-2036291474),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"sinnoh","sinnoh",-1985434502),new cljs.core.Keyword(null,"galar","galar",1460795674),new cljs.core.Keyword(null,"kanto","kanto",-1936493285)],["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png"]);
cljs_pokedex.views.region_ball = (function cljs_pokedex$views$region_ball(region){
var regions = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","regions","cljs-pokedex.subs/regions",2006589868)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.region-ball","div.region-ball",1204563181),((cljs.core.contains_QMARK_(cljs.core.deref(regions),region))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","remove-region","cljs-pokedex.events/remove-region",-1136581484),region], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"brightness(0)"], null),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs_pokedex.views.ball_map,region)], null)], null)], null):((cljs.core.contains_QMARK_(cljs.core.deref(regions),new cljs.core.Keyword(null,"all","all",892129742)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"all","all",892129742)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","remove-region","cljs-pokedex.events/remove-region",-1136581484),region], null));
})], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"brightness(0)"], null),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs_pokedex.views.ball_map,region)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","add-region","cljs-pokedex.events/add-region",-349242703),region], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs_pokedex.views.ball_map,region)], null)], null)], null)
)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(region)], null)], null);
});
cljs_pokedex.views.sprite_panel = (function cljs_pokedex$views$sprite_panel(sprite){
var conf = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sprite], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#pokemon-sprite","img#pokemon-sprite",-1184834748),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","guessing?","cljs-pokedex.subs/guessing?",-1026267658)], null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conf,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"brightness(0)"], null)):conf)], null);
});
cljs_pokedex.views.guess_result = (function cljs_pokedex$views$guess_result(){
var pokemon = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","pokemon","cljs-pokedex.subs/pokemon",-2060850105)], null))));
var winner_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","guess-result","cljs-pokedex.subs/guess-result",261034384)], null)));
if(cljs.core.truth_(winner_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#win.guess","span#win.guess",-209107537),["you did it! caught ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokemon),"!"].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#lose.guess","span#lose.guess",1885977735),["The ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokemon)," got away!"].join('')], null);
}
});
cljs_pokedex.views.guess_input = (function cljs_pokedex$views$guess_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#guess-input","input#guess-input",1186767658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Who's that PokeMon?",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (input){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","input-guess","cljs-pokedex.events/input-guess",715293408),input.target.value], null));
})], null)], null);
});
cljs_pokedex.views.nav_ball = (function cljs_pokedex$views$nav_ball(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.nav-ball","button.btn.nav-ball",581956002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var G__27034 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(props);
var G__27034__$1 = (((G__27034 instanceof cljs.core.Keyword))?G__27034.fqn:null);
switch (G__27034__$1) {
case "new-pokemon":
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","new-pokemon","cljs-pokedex.events/new-pokemon",388260356),"kanto"], null));
});

break;
case "catch-pokemon":
return (function (){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","guess-input","cljs-pokedex.subs/guess-input",-120510702)], null))))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","guess-pokemon","cljs-pokedex.events/guess-pokemon",-1980020358)], null));
} else {
return null;
}
});

break;
default:
return (function (){
return console.log(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(props));
});

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.poke-ball","img.poke-ball",-1744033864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/pokeball.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.navball-text","p.navball-text",-1349961837),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
});
cljs_pokedex.views.caught_pokemon = (function cljs_pokedex$views$caught_pokemon(pokemon){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.caught-pokemon","button.btn.caught-pokemon",-762373042),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log(pokemon);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.poke-ball","img.poke-ball",-1744033864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/pokeball.png"], null)], null)], null);
});
cljs_pokedex.views.party_panel = (function cljs_pokedex$views$party_panel(){
var pokemon = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","pokemon","cljs-pokedex.subs/pokemon",-2060850105)], null));
var party = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","caught","cljs-pokedex.subs/caught",1510447737)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pokemon-party.col-md-1.offset-md-11","div#pokemon-party.col-md-1.offset-md-11",-90047285),(function (){var iter__4611__auto__ = (function cljs_pokedex$views$party_panel_$_iter__27035(s__27036){
return (new cljs.core.LazySeq(null,(function (){
var s__27036__$1 = s__27036;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27036__$1);
if(temp__5753__auto__){
var s__27036__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27036__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27036__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27038 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27037 = (0);
while(true){
if((i__27037 < size__4610__auto__)){
var pokemon__$1 = cljs.core._nth(c__4609__auto__,i__27037);
cljs.core.chunk_append(b__27038,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.caught_pokemon,pokemon__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon__$1)], null)));

var G__27059 = (i__27037 + (1));
i__27037 = G__27059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27038),cljs_pokedex$views$party_panel_$_iter__27035(cljs.core.chunk_rest(s__27036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27038),null);
}
} else {
var pokemon__$1 = cljs.core.first(s__27036__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.caught_pokemon,pokemon__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon__$1)], null)),cljs_pokedex$views$party_panel_$_iter__27035(cljs.core.rest(s__27036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(party));
})()], null);
});
cljs_pokedex.views.strikes_panel = (function cljs_pokedex$views$strikes_panel(){
var strikes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","strikes","cljs-pokedex.subs/strikes",-1419615236)], null));
var trainer = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","trainer","cljs-pokedex.subs/trainer",1389723084)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#strikes.col-md-2.offset-md-9","div#strikes.col-md-2.offset-md-9",1331223412),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poke-font","span.poke-font",984541771),cljs.core.deref(trainer),"  "], null),(function (){var iter__4611__auto__ = (function cljs_pokedex$views$strikes_panel_$_iter__27039(s__27040){
return (new cljs.core.LazySeq(null,(function (){
var s__27040__$1 = s__27040;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27040__$1);
if(temp__5753__auto__){
var s__27040__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27040__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27040__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27042 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27041 = (0);
while(true){
if((i__27041 < size__4610__auto__)){
var heart = cljs.core._nth(c__4609__auto__,i__27041);
cljs.core.chunk_append(b__27042,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.heart-strike","img.heart-strike",549667323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/heart.png"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),heart], null)));

var G__27060 = (i__27041 + (1));
i__27041 = G__27060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27042),cljs_pokedex$views$strikes_panel_$_iter__27039(cljs.core.chunk_rest(s__27040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27042),null);
}
} else {
var heart = cljs.core.first(s__27040__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.heart-strike","img.heart-strike",549667323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/heart.png"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),heart], null)),cljs_pokedex$views$strikes_panel_$_iter__27039(cljs.core.rest(s__27040__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(strikes)));
})()], null);
});
cljs_pokedex.views.navball_panel = (function cljs_pokedex$views$navball_panel(){
var guess = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","guess-result","cljs-pokedex.subs/guess-result",261034384)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#navball-row.row","div#navball-row.row",1013472602),(((cljs.core.deref(guess) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.nav_ball,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Catch PokeMon",new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"catch-pokemon","catch-pokemon",-1974059906)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.nav_ball,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"New PokeMon",new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"new-pokemon","new-pokemon",385332008)], null)], null)),(((cljs.core.deref(guess) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.guess_input], null):null),((cljs.core.boolean_QMARK_(cljs.core.deref(guess)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.guess_result], null):null)], null);
});
cljs_pokedex.views.game_screen = (function cljs_pokedex$views$game_screen(){
var pokemon = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","pokemon","cljs-pokedex.subs/pokemon",-2060850105)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-screen","div#game-screen",-1753159003),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md3.offset-md-1","div.col-md3.offset-md-1",1217260396),(cljs.core.truth_(cljs.core.deref(pokemon))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.sprite_panel,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pokemon))], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.navball_panel], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.strikes_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.party_panel], null)], null);
});
cljs_pokedex.views.lose_screen = (function cljs_pokedex$views$lose_screen(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lose-screen.row","div#lose-screen.row",679385638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md1","div.col-md1",936318695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#poke-prof","img#poke-prof",393623366),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/rocket.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.poke-font","h2.poke-font",-1400121983),"Oh No! You whited out!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.poke-font","a.poke-font",1443653803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Try Again!"], null)], null)], null)], null);
});
cljs_pokedex.views.win_screen = (function cljs_pokedex$views$win_screen(){
var party = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","caught","cljs-pokedex.subs/caught",1510447737)], null));
var vec__27043 = cljs.core.split_at((3),cljs.core.deref(party));
var poke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27043,(0),null);
var mon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27043,(1),null);
var trainer = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","trainer","cljs-pokedex.subs/trainer",1389723084)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#win-screen.offset-md-2","div#win-screen.offset-md-2",-666500431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.poke-font.top-buffer-10","h2.poke-font.top-buffer-10",29290619),"you win! you are the very best, like no one ever was!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.poke-font.top-buffer-10","h2.poke-font.top-buffer-10",29290619),cljs.core.deref(trainer),"'s party:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),(function (){var iter__4611__auto__ = (function cljs_pokedex$views$win_screen_$_iter__27046(s__27047){
return (new cljs.core.LazySeq(null,(function (){
var s__27047__$1 = s__27047;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27047__$1);
if(temp__5753__auto__){
var s__27047__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27047__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27047__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27049 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27048 = (0);
while(true){
if((i__27048 < size__4610__auto__)){
var pokemon = cljs.core._nth(c__4609__auto__,i__27048);
cljs.core.chunk_append(b__27049,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poke-font","span.poke-font",984541771),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon)], null)));

var G__27061 = (i__27048 + (1));
i__27048 = G__27061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27049),cljs_pokedex$views$win_screen_$_iter__27046(cljs.core.chunk_rest(s__27047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27049),null);
}
} else {
var pokemon = cljs.core.first(s__27047__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poke-font","span.poke-font",984541771),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon)], null)),cljs_pokedex$views$win_screen_$_iter__27046(cljs.core.rest(s__27047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(poke);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),(function (){var iter__4611__auto__ = (function cljs_pokedex$views$win_screen_$_iter__27050(s__27051){
return (new cljs.core.LazySeq(null,(function (){
var s__27051__$1 = s__27051;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27051__$1);
if(temp__5753__auto__){
var s__27051__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27051__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27051__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27053 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27052 = (0);
while(true){
if((i__27052 < size__4610__auto__)){
var pokemon = cljs.core._nth(c__4609__auto__,i__27052);
cljs.core.chunk_append(b__27053,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poke-font","span.poke-font",984541771),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon)], null)));

var G__27062 = (i__27052 + (1));
i__27052 = G__27062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27053),cljs_pokedex$views$win_screen_$_iter__27050(cljs.core.chunk_rest(s__27051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27053),null);
}
} else {
var pokemon = cljs.core.first(s__27051__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.poke-font","span.poke-font",984541771),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(pokemon)], null)),cljs_pokedex$views$win_screen_$_iter__27050(cljs.core.rest(s__27051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(mon);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.poke-font","a.poke-font",1443653803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Try Again!"], null)], null)], null)], null);
});
cljs_pokedex.views.login_screen = (function cljs_pokedex$views$login_screen(){
var login = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","login","cljs-pokedex.subs/login",-964445011)], null));
var regions = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","regions","cljs-pokedex.subs/regions",2006589868)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#login-screen.row","div#login-screen.row",-354744944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md1","div.col-md1",936318695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#poke-prof","img#poke-prof",393623366),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/prof-oak.png"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md3.poke-font","div.col-md3.poke-font",-1663025634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.poke-font","h2.poke-font",-1400121983),"Welcome to \"Who's that PokeMon?!\""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#trainer-login.col-md-5","input#trainer-login.col-md-5",-1419774828),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What's your name again?",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (input){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","input-login","cljs-pokedex.events/input-login",-1921023234),input.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.col-md-2","button.btn.btn-success.col-md-2",-793725883),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(login))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.events","login-trainer","cljs-pokedex.events/login-trainer",-1249919074)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(((cljs.core.deref(login) == null)) || (cljs.core.empty_QMARK_(cljs.core.deref(regions))))], null),"Play!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.top-buffer-10","div.row.top-buffer-10",-168285533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.poke-font","h3.poke-font",1770008275),"Select Regions:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#regions.row.top-buffer-10","div#regions.row.top-buffer-10",-42767049),(function (){var iter__4611__auto__ = (function cljs_pokedex$views$login_screen_$_iter__27054(s__27055){
return (new cljs.core.LazySeq(null,(function (){
var s__27055__$1 = s__27055;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27055__$1);
if(temp__5753__auto__){
var s__27055__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27055__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27055__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27057 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27056 = (0);
while(true){
if((i__27056 < size__4610__auto__)){
var region = cljs.core._nth(c__4609__auto__,i__27056);
cljs.core.chunk_append(b__27057,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.region_ball,region], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),region], null)));

var G__27063 = (i__27056 + (1));
i__27056 = G__27063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27057),cljs_pokedex$views$login_screen_$_iter__27054(cljs.core.chunk_rest(s__27055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27057),null);
}
} else {
var region = cljs.core.first(s__27055__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.region_ball,region], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),region], null)),cljs_pokedex$views$login_screen_$_iter__27054(cljs.core.rest(s__27055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kanto","kanto",-1936493285),new cljs.core.Keyword(null,"johto","johto",-1970400831),new cljs.core.Keyword(null,"hoenn","hoenn",1314897005),new cljs.core.Keyword(null,"sinnoh","sinnoh",-1985434502),new cljs.core.Keyword(null,"unova","unova",1121620389),new cljs.core.Keyword(null,"kalos","kalos",1955158851),new cljs.core.Keyword(null,"alola","alola",-2036291474),new cljs.core.Keyword(null,"galar","galar",1460795674),new cljs.core.Keyword(null,"all","all",892129742)], null));
})()], null)], null)], null);
});
cljs_pokedex.views.main_panel = (function cljs_pokedex$views$main_panel(){
var strikes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","strikes","cljs-pokedex.subs/strikes",-1419615236)], null));
var party = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","caught","cljs-pokedex.subs/caught",1510447737)], null));
var trainer = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-pokedex.subs","trainer","cljs-pokedex.subs/trainer",1389723084)], null));
if((cljs.core.deref(trainer) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.login_screen], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(strikes))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.lose_screen], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(party)),(6))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.win_screen], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pokedex.views.game_screen], null);

}
}
}
});

//# sourceMappingURL=cljs_pokedex.views.js.map
