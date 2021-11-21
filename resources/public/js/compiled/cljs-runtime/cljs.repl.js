goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35054){
var map__35055 = p__35054;
var map__35055__$1 = cljs.core.__destructure_map(map__35055);
var m = map__35055__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35064_35444 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35066_35445 = null;
var count__35067_35446 = (0);
var i__35068_35447 = (0);
while(true){
if((i__35068_35447 < count__35067_35446)){
var f_35448 = chunk__35066_35445.cljs$core$IIndexed$_nth$arity$2(null,i__35068_35447);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35448], 0));


var G__35449 = seq__35064_35444;
var G__35450 = chunk__35066_35445;
var G__35451 = count__35067_35446;
var G__35452 = (i__35068_35447 + (1));
seq__35064_35444 = G__35449;
chunk__35066_35445 = G__35450;
count__35067_35446 = G__35451;
i__35068_35447 = G__35452;
continue;
} else {
var temp__5753__auto___35453 = cljs.core.seq(seq__35064_35444);
if(temp__5753__auto___35453){
var seq__35064_35454__$1 = temp__5753__auto___35453;
if(cljs.core.chunked_seq_QMARK_(seq__35064_35454__$1)){
var c__4638__auto___35455 = cljs.core.chunk_first(seq__35064_35454__$1);
var G__35456 = cljs.core.chunk_rest(seq__35064_35454__$1);
var G__35457 = c__4638__auto___35455;
var G__35458 = cljs.core.count(c__4638__auto___35455);
var G__35459 = (0);
seq__35064_35444 = G__35456;
chunk__35066_35445 = G__35457;
count__35067_35446 = G__35458;
i__35068_35447 = G__35459;
continue;
} else {
var f_35460 = cljs.core.first(seq__35064_35454__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35460], 0));


var G__35461 = cljs.core.next(seq__35064_35454__$1);
var G__35462 = null;
var G__35463 = (0);
var G__35464 = (0);
seq__35064_35444 = G__35461;
chunk__35066_35445 = G__35462;
count__35067_35446 = G__35463;
i__35068_35447 = G__35464;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35465 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35465], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35465)))?cljs.core.second(arglists_35465):arglists_35465)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35088_35466 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35089_35467 = null;
var count__35090_35468 = (0);
var i__35091_35469 = (0);
while(true){
if((i__35091_35469 < count__35090_35468)){
var vec__35115_35471 = chunk__35089_35467.cljs$core$IIndexed$_nth$arity$2(null,i__35091_35469);
var name_35472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115_35471,(0),null);
var map__35118_35473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115_35471,(1),null);
var map__35118_35474__$1 = cljs.core.__destructure_map(map__35118_35473);
var doc_35475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118_35474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118_35474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35472], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35476], 0));

if(cljs.core.truth_(doc_35475)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35475], 0));
} else {
}


var G__35480 = seq__35088_35466;
var G__35481 = chunk__35089_35467;
var G__35482 = count__35090_35468;
var G__35483 = (i__35091_35469 + (1));
seq__35088_35466 = G__35480;
chunk__35089_35467 = G__35481;
count__35090_35468 = G__35482;
i__35091_35469 = G__35483;
continue;
} else {
var temp__5753__auto___35484 = cljs.core.seq(seq__35088_35466);
if(temp__5753__auto___35484){
var seq__35088_35485__$1 = temp__5753__auto___35484;
if(cljs.core.chunked_seq_QMARK_(seq__35088_35485__$1)){
var c__4638__auto___35486 = cljs.core.chunk_first(seq__35088_35485__$1);
var G__35493 = cljs.core.chunk_rest(seq__35088_35485__$1);
var G__35494 = c__4638__auto___35486;
var G__35495 = cljs.core.count(c__4638__auto___35486);
var G__35496 = (0);
seq__35088_35466 = G__35493;
chunk__35089_35467 = G__35494;
count__35090_35468 = G__35495;
i__35091_35469 = G__35496;
continue;
} else {
var vec__35122_35497 = cljs.core.first(seq__35088_35485__$1);
var name_35498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35497,(0),null);
var map__35125_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35497,(1),null);
var map__35125_35500__$1 = cljs.core.__destructure_map(map__35125_35499);
var doc_35501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35125_35500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35125_35500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35498], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35502], 0));

if(cljs.core.truth_(doc_35501)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35501], 0));
} else {
}


var G__35504 = cljs.core.next(seq__35088_35485__$1);
var G__35505 = null;
var G__35506 = (0);
var G__35507 = (0);
seq__35088_35466 = G__35504;
chunk__35089_35467 = G__35505;
count__35090_35468 = G__35506;
i__35091_35469 = G__35507;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35136 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35137 = null;
var count__35138 = (0);
var i__35139 = (0);
while(true){
if((i__35139 < count__35138)){
var role = chunk__35137.cljs$core$IIndexed$_nth$arity$2(null,i__35139);
var temp__5753__auto___35509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35509__$1)){
var spec_35510 = temp__5753__auto___35509__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35510)], 0));
} else {
}


var G__35511 = seq__35136;
var G__35512 = chunk__35137;
var G__35513 = count__35138;
var G__35514 = (i__35139 + (1));
seq__35136 = G__35511;
chunk__35137 = G__35512;
count__35138 = G__35513;
i__35139 = G__35514;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35136);
if(temp__5753__auto____$1){
var seq__35136__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35136__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35136__$1);
var G__35517 = cljs.core.chunk_rest(seq__35136__$1);
var G__35518 = c__4638__auto__;
var G__35519 = cljs.core.count(c__4638__auto__);
var G__35520 = (0);
seq__35136 = G__35517;
chunk__35137 = G__35518;
count__35138 = G__35519;
i__35139 = G__35520;
continue;
} else {
var role = cljs.core.first(seq__35136__$1);
var temp__5753__auto___35521__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35521__$2)){
var spec_35523 = temp__5753__auto___35521__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35523)], 0));
} else {
}


var G__35525 = cljs.core.next(seq__35136__$1);
var G__35526 = null;
var G__35527 = (0);
var G__35528 = (0);
seq__35136 = G__35525;
chunk__35137 = G__35526;
count__35138 = G__35527;
i__35139 = G__35528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35533 = cljs.core.ex_cause(t);
via = G__35532;
t = G__35533;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35285 = datafied_throwable;
var map__35285__$1 = cljs.core.__destructure_map(map__35285);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35285__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35287 = cljs.core.last(via);
var map__35287__$1 = cljs.core.__destructure_map(map__35287);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35288 = data;
var map__35288__$1 = cljs.core.__destructure_map(map__35288);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35288__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35288__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35288__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35289 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35289__$1 = cljs.core.__destructure_map(map__35289);
var top_data = map__35289__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35296 = phase;
var G__35296__$1 = (((G__35296 instanceof cljs.core.Keyword))?G__35296.fqn:null);
switch (G__35296__$1) {
case "read-source":
var map__35299 = data;
var map__35299__$1 = cljs.core.__destructure_map(map__35299);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35302 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35302__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35302,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35302);
var G__35302__$2 = (cljs.core.truth_((function (){var fexpr__35305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35305.cljs$core$IFn$_invoke$arity$1 ? fexpr__35305.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35305.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35302__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35302__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35302__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35307 = top_data;
var G__35307__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35307,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35307);
var G__35307__$2 = (cljs.core.truth_((function (){var fexpr__35310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35310.cljs$core$IFn$_invoke$arity$1 ? fexpr__35310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35307__$1);
var G__35307__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35307__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35307__$2);
var G__35307__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35307__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35307__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35307__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35307__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35313 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(3),null);
var G__35318 = top_data;
var G__35318__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35318,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35318);
var G__35318__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35318__$1);
var G__35318__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35318__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35318__$2);
var G__35318__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35318__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35318__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35318__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35318__$4;
}

break;
case "execution":
var vec__35325 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35265_SHARP_){
var or__4212__auto__ = (p1__35265_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35336 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35336.cljs$core$IFn$_invoke$arity$1 ? fexpr__35336.cljs$core$IFn$_invoke$arity$1(p1__35265_SHARP_) : fexpr__35336.call(null,p1__35265_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35341 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35341__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35341,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35341);
var G__35341__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35341__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35341__$1);
var G__35341__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35341__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35341__$2);
var G__35341__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35341__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35341__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35341__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35341__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35296__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35358){
var map__35359 = p__35358;
var map__35359__$1 = cljs.core.__destructure_map(map__35359);
var triage_data = map__35359__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35367 = phase;
var G__35367__$1 = (((G__35367 instanceof cljs.core.Keyword))?G__35367.fqn:null);
switch (G__35367__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35370 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35371 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35372 = loc;
var G__35373 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35377_35580 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35378_35581 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35379_35582 = true;
var _STAR_print_fn_STAR__temp_val__35380_35583 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35379_35582);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35380_35583);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35352_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35378_35581);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35377_35580);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35370,G__35371,G__35372,G__35373) : format.call(null,G__35370,G__35371,G__35372,G__35373));

break;
case "macroexpansion":
var G__35389 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35390 = cause_type;
var G__35391 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35393 = loc;
var G__35394 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35389,G__35390,G__35391,G__35393,G__35394) : format.call(null,G__35389,G__35390,G__35391,G__35393,G__35394));

break;
case "compile-syntax-check":
var G__35403 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35404 = cause_type;
var G__35405 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35406 = loc;
var G__35407 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35403,G__35404,G__35405,G__35406,G__35407) : format.call(null,G__35403,G__35404,G__35405,G__35406,G__35407));

break;
case "compilation":
var G__35410 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35411 = cause_type;
var G__35412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35413 = loc;
var G__35414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35410,G__35411,G__35412,G__35413,G__35414) : format.call(null,G__35410,G__35411,G__35412,G__35413,G__35414));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35417 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35418 = symbol;
var G__35419 = loc;
var G__35420 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35422_35594 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35423_35595 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35424_35596 = true;
var _STAR_print_fn_STAR__temp_val__35425_35597 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35424_35596);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35425_35597);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35423_35595);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35422_35594);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35417,G__35418,G__35419,G__35420) : format.call(null,G__35417,G__35418,G__35419,G__35420));
} else {
var G__35433 = "Execution error%s at %s(%s).\n%s\n";
var G__35434 = cause_type;
var G__35435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35436 = loc;
var G__35437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35433,G__35434,G__35435,G__35436,G__35437) : format.call(null,G__35433,G__35434,G__35435,G__35436,G__35437));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35367__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
