goog.provide('cljs_pokedex.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","initialize-db","cljs-pokedex.events/initialize-db",210281020),(function (_,___$1){
return cljs_pokedex.db.default_db;
}));
cljs_pokedex.events.region_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"johto","johto",-1970400831),new cljs.core.Keyword(null,"kalos","kalos",1955158851),new cljs.core.Keyword(null,"unova","unova",1121620389),new cljs.core.Keyword(null,"hoenn","hoenn",1314897005),new cljs.core.Keyword(null,"alola","alola",-2036291474),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"sinnoh","sinnoh",-1985434502),new cljs.core.Keyword(null,"galar","galar",1460795674),new cljs.core.Keyword(null,"kanto","kanto",-1936493285)],[cljs.core.list((152),(252)),cljs.core.list((650),(722)),cljs.core.list((494),(650)),cljs.core.list((252),(387)),cljs.core.list((722),(810)),cljs.core.list((1),(899)),cljs.core.list((387),(494)),cljs.core.list((810),(899)),cljs.core.list((1),(152))]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","new-pokemon","cljs-pokedex.events/new-pokemon",388260356),(function (db,p__26972){
var vec__26973 = p__26972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(1),null);
var c__26224__auto___27030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26225__auto__ = (function (){var switch__26201__auto__ = (function (state_26996){
var state_val_26997 = (state_26996[(1)]);
if((state_val_26997 === (1))){
var inst_26976 = (function (){return (function (p1__26971_SHARP_,p2__26970_SHARP_){
var vec__26998 = (cljs_pokedex.events.region_map.cljs$core$IFn$_invoke$arity$1 ? cljs_pokedex.events.region_map.cljs$core$IFn$_invoke$arity$1(p2__26970_SHARP_) : cljs_pokedex.events.region_map.call(null,p2__26970_SHARP_));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__26971_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,stop));
});
})();
var inst_26977 = cljs.core.List.EMPTY;
var inst_26978 = new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(db);
var inst_26979 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_26976,inst_26977,inst_26978);
var inst_26980 = cljs.core.rand_nth(inst_26979);
var inst_26981 = ["https://pokeapi.co/api/v2/pokemon/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26980)].join('');
var inst_26982 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_26983 = ["Content-Type"];
var inst_26984 = ["application/json"];
var inst_26985 = cljs.core.PersistentHashMap.fromArrays(inst_26983,inst_26984);
var inst_26986 = [false,inst_26985];
var inst_26987 = cljs.core.PersistentHashMap.fromArrays(inst_26982,inst_26986);
var inst_26988 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_26981,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26987], 0));
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26996__$1,(2),inst_26988);
} else {
if((state_val_26997 === (2))){
var inst_26990 = (state_26996[(2)]);
var inst_26991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26992 = [new cljs.core.Keyword("cljs-pokedex.events","new-pokemon-resp","cljs-pokedex.events/new-pokemon-resp",837212847),inst_26990];
var inst_26993 = (new cljs.core.PersistentVector(null,2,(5),inst_26991,inst_26992,null));
var inst_26994 = re_frame.core.dispatch(inst_26993);
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26996__$1,inst_26994);
} else {
return null;
}
}
});
return (function() {
var cljs_pokedex$events$state_machine__26202__auto__ = null;
var cljs_pokedex$events$state_machine__26202__auto____0 = (function (){
var statearr_27001 = [null,null,null,null,null,null,null];
(statearr_27001[(0)] = cljs_pokedex$events$state_machine__26202__auto__);

(statearr_27001[(1)] = (1));

return statearr_27001;
});
var cljs_pokedex$events$state_machine__26202__auto____1 = (function (state_26996){
while(true){
var ret_value__26203__auto__ = (function (){try{while(true){
var result__26204__auto__ = switch__26201__auto__(state_26996);
if(cljs.core.keyword_identical_QMARK_(result__26204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26204__auto__;
}
break;
}
}catch (e27002){var ex__26205__auto__ = e27002;
var statearr_27003_27031 = state_26996;
(statearr_27003_27031[(2)] = ex__26205__auto__);


if(cljs.core.seq((state_26996[(4)]))){
var statearr_27004_27032 = state_26996;
(statearr_27004_27032[(1)] = cljs.core.first((state_26996[(4)])));

} else {
throw ex__26205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27033 = state_26996;
state_26996 = G__27033;
continue;
} else {
return ret_value__26203__auto__;
}
break;
}
});
cljs_pokedex$events$state_machine__26202__auto__ = function(state_26996){
switch(arguments.length){
case 0:
return cljs_pokedex$events$state_machine__26202__auto____0.call(this);
case 1:
return cljs_pokedex$events$state_machine__26202__auto____1.call(this,state_26996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_pokedex$events$state_machine__26202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_pokedex$events$state_machine__26202__auto____0;
cljs_pokedex$events$state_machine__26202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_pokedex$events$state_machine__26202__auto____1;
return cljs_pokedex$events$state_machine__26202__auto__;
})()
})();
var state__26226__auto__ = (function (){var statearr_27005 = f__26225__auto__();
(statearr_27005[(6)] = c__26224__auto___27030);

return statearr_27005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26226__auto__);
}));


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"pending","pending",-220036727));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","new-pokemon-resp","cljs-pokedex.events/new-pokemon-resp",837212847),(function (db,p__27006){
var vec__27007 = p__27006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(0),null);
var map__27010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(1),null);
var map__27010__$1 = cljs.core.__destructure_map(map__27010);
var map__27011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__27011__$1 = cljs.core.__destructure_map(map__27011);
var pokemon = map__27011__$1;
var map__27012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var map__27012__$1 = cljs.core.__destructure_map(map__27012);
var sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,new cljs.core.Keyword(null,"front_default","front_default",-329057415));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"pokemon","pokemon",1065917705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"num","num",1985240673),num], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"guess","guess",-1820715867),new cljs.core.Keyword(null,"pending","pending",-220036727)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","input-guess","cljs-pokedex.events/input-guess",715293408),(function (db,p__27013){
var vec__27014 = p__27013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27014,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27014,(1),null);
console.log("updating guess ",input);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"guess-input","guess-input",1034949968),input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","guess-pokemon","cljs-pokedex.events/guess-pokemon",-1980020358),(function (db,_){
var guess = new cljs.core.Keyword(null,"guess-input","guess-input",1034949968).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(guess),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pokemon","pokemon",1065917705).cljs$core$IFn$_invoke$arity$1(db)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"guess","guess",-1820715867),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"caught","caught",443476795),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"caught","caught",443476795).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"pokemon","pokemon",1065917705).cljs$core$IFn$_invoke$arity$1(db))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"guess","guess",-1820715867),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strikes","strikes",-327043906),(new cljs.core.Keyword(null,"strikes","strikes",-327043906).cljs$core$IFn$_invoke$arity$1(db) - (1))], 0));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","input-login","cljs-pokedex.events/input-login",-1921023234),(function (db,p__27017){
var vec__27018 = p__27017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login","login",55217519),input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","login-trainer","cljs-pokedex.events/login-trainer",-1249919074),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"trainer","trainer",263237898),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"login","login",55217519));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","add-region","cljs-pokedex.events/add-region",-349242703),(function (db,p__27021){
var vec__27022 = p__27021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(1),null);
console.log("adding region... ",region);

console.log("to regions...",new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"regions","regions",-1023815958),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(db),region));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-pokedex.events","remove-region","cljs-pokedex.events/remove-region",-1136581484),(function (db,p__27026){
var vec__27027 = p__27026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27027,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27027,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"regions","regions",-1023815958),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27025_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__27025_SHARP_,region);
}),new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(db))));
}));

//# sourceMappingURL=cljs_pokedex.events.js.map
