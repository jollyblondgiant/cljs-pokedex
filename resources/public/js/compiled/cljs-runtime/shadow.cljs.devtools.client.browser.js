goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37834 = arguments.length;
var i__4819__auto___37835 = (0);
while(true){
if((i__4819__auto___37835 < len__4818__auto___37834)){
args__4824__auto__.push((arguments[i__4819__auto___37835]));

var G__37836 = (i__4819__auto___37835 + (1));
i__4819__auto___37835 = G__37836;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37597){
var G__37598 = cljs.core.first(seq37597);
var seq37597__$1 = cljs.core.next(seq37597);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37598,seq37597__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37605 = cljs.core.seq(sources);
var chunk__37606 = null;
var count__37607 = (0);
var i__37608 = (0);
while(true){
if((i__37608 < count__37607)){
var map__37622 = chunk__37606.cljs$core$IIndexed$_nth$arity$2(null,i__37608);
var map__37622__$1 = cljs.core.__destructure_map(map__37622);
var src = map__37622__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37624){var e_37855 = e37624;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37855);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37855.message)].join('')));
}

var G__37859 = seq__37605;
var G__37860 = chunk__37606;
var G__37861 = count__37607;
var G__37862 = (i__37608 + (1));
seq__37605 = G__37859;
chunk__37606 = G__37860;
count__37607 = G__37861;
i__37608 = G__37862;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37605);
if(temp__5753__auto__){
var seq__37605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37605__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37605__$1);
var G__37867 = cljs.core.chunk_rest(seq__37605__$1);
var G__37868 = c__4638__auto__;
var G__37869 = cljs.core.count(c__4638__auto__);
var G__37870 = (0);
seq__37605 = G__37867;
chunk__37606 = G__37868;
count__37607 = G__37869;
i__37608 = G__37870;
continue;
} else {
var map__37625 = cljs.core.first(seq__37605__$1);
var map__37625__$1 = cljs.core.__destructure_map(map__37625);
var src = map__37625__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37626){var e_37871 = e37626;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37871);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37871.message)].join('')));
}

var G__37872 = cljs.core.next(seq__37605__$1);
var G__37873 = null;
var G__37874 = (0);
var G__37875 = (0);
seq__37605 = G__37872;
chunk__37606 = G__37873;
count__37607 = G__37874;
i__37608 = G__37875;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37632 = cljs.core.seq(js_requires);
var chunk__37633 = null;
var count__37634 = (0);
var i__37635 = (0);
while(true){
if((i__37635 < count__37634)){
var js_ns = chunk__37633.cljs$core$IIndexed$_nth$arity$2(null,i__37635);
var require_str_37876 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37876);


var G__37877 = seq__37632;
var G__37878 = chunk__37633;
var G__37879 = count__37634;
var G__37880 = (i__37635 + (1));
seq__37632 = G__37877;
chunk__37633 = G__37878;
count__37634 = G__37879;
i__37635 = G__37880;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37632);
if(temp__5753__auto__){
var seq__37632__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37632__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37632__$1);
var G__37881 = cljs.core.chunk_rest(seq__37632__$1);
var G__37882 = c__4638__auto__;
var G__37883 = cljs.core.count(c__4638__auto__);
var G__37884 = (0);
seq__37632 = G__37881;
chunk__37633 = G__37882;
count__37634 = G__37883;
i__37635 = G__37884;
continue;
} else {
var js_ns = cljs.core.first(seq__37632__$1);
var require_str_37885 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37885);


var G__37887 = cljs.core.next(seq__37632__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37632 = G__37887;
chunk__37633 = G__37888;
count__37634 = G__37889;
i__37635 = G__37890;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37640){
var map__37641 = p__37640;
var map__37641__$1 = cljs.core.__destructure_map(map__37641);
var msg = map__37641__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642(s__37643){
return (new cljs.core.LazySeq(null,(function (){
var s__37643__$1 = s__37643;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37643__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37649 = cljs.core.first(xs__6308__auto__);
var map__37649__$1 = cljs.core.__destructure_map(map__37649);
var src = map__37649__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37649__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37649__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37643__$1,map__37649,map__37649__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(s__37645){
return (new cljs.core.LazySeq(null,((function (s__37643__$1,map__37649,map__37649__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info){
return (function (){
var s__37645__$1 = s__37645;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37645__$1);
if(temp__5753__auto____$1){
var s__37645__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37645__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37645__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37647 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37646 = (0);
while(true){
if((i__37646 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37646);
cljs.core.chunk_append(b__37647,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37892 = (i__37646 + (1));
i__37646 = G__37892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37647),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(cljs.core.chunk_rest(s__37645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37647),null);
}
} else {
var warning = cljs.core.first(s__37645__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642_$_iter__37644(cljs.core.rest(s__37645__$2)));
}
} else {
return null;
}
break;
}
});})(s__37643__$1,map__37649,map__37649__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info))
,null,null));
});})(s__37643__$1,map__37649,map__37649__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37641,map__37641__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37642(cljs.core.rest(s__37643__$1)));
} else {
var G__37893 = cljs.core.rest(s__37643__$1);
s__37643__$1 = G__37893;
continue;
}
} else {
var G__37894 = cljs.core.rest(s__37643__$1);
s__37643__$1 = G__37894;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37651_37895 = cljs.core.seq(warnings);
var chunk__37652_37896 = null;
var count__37653_37897 = (0);
var i__37654_37898 = (0);
while(true){
if((i__37654_37898 < count__37653_37897)){
var map__37659_37899 = chunk__37652_37896.cljs$core$IIndexed$_nth$arity$2(null,i__37654_37898);
var map__37659_37900__$1 = cljs.core.__destructure_map(map__37659_37899);
var w_37901 = map__37659_37900__$1;
var msg_37902__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659_37900__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659_37900__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659_37900__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659_37900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37905)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37903),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37904),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37902__$1)].join(''));


var G__37906 = seq__37651_37895;
var G__37907 = chunk__37652_37896;
var G__37908 = count__37653_37897;
var G__37909 = (i__37654_37898 + (1));
seq__37651_37895 = G__37906;
chunk__37652_37896 = G__37907;
count__37653_37897 = G__37908;
i__37654_37898 = G__37909;
continue;
} else {
var temp__5753__auto___37910 = cljs.core.seq(seq__37651_37895);
if(temp__5753__auto___37910){
var seq__37651_37911__$1 = temp__5753__auto___37910;
if(cljs.core.chunked_seq_QMARK_(seq__37651_37911__$1)){
var c__4638__auto___37913 = cljs.core.chunk_first(seq__37651_37911__$1);
var G__37914 = cljs.core.chunk_rest(seq__37651_37911__$1);
var G__37915 = c__4638__auto___37913;
var G__37916 = cljs.core.count(c__4638__auto___37913);
var G__37917 = (0);
seq__37651_37895 = G__37914;
chunk__37652_37896 = G__37915;
count__37653_37897 = G__37916;
i__37654_37898 = G__37917;
continue;
} else {
var map__37661_37918 = cljs.core.first(seq__37651_37911__$1);
var map__37661_37919__$1 = cljs.core.__destructure_map(map__37661_37918);
var w_37920 = map__37661_37919__$1;
var msg_37921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37661_37919__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37661_37919__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37661_37919__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37661_37919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37924)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37922),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37923),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37921__$1)].join(''));


var G__37926 = cljs.core.next(seq__37651_37911__$1);
var G__37927 = null;
var G__37928 = (0);
var G__37929 = (0);
seq__37651_37895 = G__37926;
chunk__37652_37896 = G__37927;
count__37653_37897 = G__37928;
i__37654_37898 = G__37929;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37639_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37639_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37665){
var map__37666 = p__37665;
var map__37666__$1 = cljs.core.__destructure_map(map__37666);
var msg = map__37666__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37667 = cljs.core.seq(updates);
var chunk__37669 = null;
var count__37670 = (0);
var i__37671 = (0);
while(true){
if((i__37671 < count__37670)){
var path = chunk__37669.cljs$core$IIndexed$_nth$arity$2(null,i__37671);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37707_37930 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37711_37931 = null;
var count__37712_37932 = (0);
var i__37713_37933 = (0);
while(true){
if((i__37713_37933 < count__37712_37932)){
var node_37935 = chunk__37711_37931.cljs$core$IIndexed$_nth$arity$2(null,i__37713_37933);
if(cljs.core.not(node_37935.shadow$old)){
var path_match_37936 = shadow.cljs.devtools.client.browser.match_paths(node_37935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37936)){
var new_link_37937 = (function (){var G__37723 = node_37935.cloneNode(true);
G__37723.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37723;
})();
(node_37935.shadow$old = true);

(new_link_37937.onload = ((function (seq__37707_37930,chunk__37711_37931,count__37712_37932,i__37713_37933,seq__37667,chunk__37669,count__37670,i__37671,new_link_37937,path_match_37936,node_37935,path,map__37666,map__37666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37935);
});})(seq__37707_37930,chunk__37711_37931,count__37712_37932,i__37713_37933,seq__37667,chunk__37669,count__37670,i__37671,new_link_37937,path_match_37936,node_37935,path,map__37666,map__37666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37936], 0));

goog.dom.insertSiblingAfter(new_link_37937,node_37935);


var G__37939 = seq__37707_37930;
var G__37940 = chunk__37711_37931;
var G__37941 = count__37712_37932;
var G__37942 = (i__37713_37933 + (1));
seq__37707_37930 = G__37939;
chunk__37711_37931 = G__37940;
count__37712_37932 = G__37941;
i__37713_37933 = G__37942;
continue;
} else {
var G__37943 = seq__37707_37930;
var G__37944 = chunk__37711_37931;
var G__37945 = count__37712_37932;
var G__37946 = (i__37713_37933 + (1));
seq__37707_37930 = G__37943;
chunk__37711_37931 = G__37944;
count__37712_37932 = G__37945;
i__37713_37933 = G__37946;
continue;
}
} else {
var G__37947 = seq__37707_37930;
var G__37948 = chunk__37711_37931;
var G__37949 = count__37712_37932;
var G__37950 = (i__37713_37933 + (1));
seq__37707_37930 = G__37947;
chunk__37711_37931 = G__37948;
count__37712_37932 = G__37949;
i__37713_37933 = G__37950;
continue;
}
} else {
var temp__5753__auto___37951 = cljs.core.seq(seq__37707_37930);
if(temp__5753__auto___37951){
var seq__37707_37952__$1 = temp__5753__auto___37951;
if(cljs.core.chunked_seq_QMARK_(seq__37707_37952__$1)){
var c__4638__auto___37953 = cljs.core.chunk_first(seq__37707_37952__$1);
var G__37954 = cljs.core.chunk_rest(seq__37707_37952__$1);
var G__37955 = c__4638__auto___37953;
var G__37956 = cljs.core.count(c__4638__auto___37953);
var G__37957 = (0);
seq__37707_37930 = G__37954;
chunk__37711_37931 = G__37955;
count__37712_37932 = G__37956;
i__37713_37933 = G__37957;
continue;
} else {
var node_37958 = cljs.core.first(seq__37707_37952__$1);
if(cljs.core.not(node_37958.shadow$old)){
var path_match_37959 = shadow.cljs.devtools.client.browser.match_paths(node_37958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37959)){
var new_link_37960 = (function (){var G__37724 = node_37958.cloneNode(true);
G__37724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37724;
})();
(node_37958.shadow$old = true);

(new_link_37960.onload = ((function (seq__37707_37930,chunk__37711_37931,count__37712_37932,i__37713_37933,seq__37667,chunk__37669,count__37670,i__37671,new_link_37960,path_match_37959,node_37958,seq__37707_37952__$1,temp__5753__auto___37951,path,map__37666,map__37666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37958);
});})(seq__37707_37930,chunk__37711_37931,count__37712_37932,i__37713_37933,seq__37667,chunk__37669,count__37670,i__37671,new_link_37960,path_match_37959,node_37958,seq__37707_37952__$1,temp__5753__auto___37951,path,map__37666,map__37666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37959], 0));

goog.dom.insertSiblingAfter(new_link_37960,node_37958);


var G__37961 = cljs.core.next(seq__37707_37952__$1);
var G__37962 = null;
var G__37963 = (0);
var G__37964 = (0);
seq__37707_37930 = G__37961;
chunk__37711_37931 = G__37962;
count__37712_37932 = G__37963;
i__37713_37933 = G__37964;
continue;
} else {
var G__37965 = cljs.core.next(seq__37707_37952__$1);
var G__37966 = null;
var G__37967 = (0);
var G__37968 = (0);
seq__37707_37930 = G__37965;
chunk__37711_37931 = G__37966;
count__37712_37932 = G__37967;
i__37713_37933 = G__37968;
continue;
}
} else {
var G__37969 = cljs.core.next(seq__37707_37952__$1);
var G__37970 = null;
var G__37971 = (0);
var G__37972 = (0);
seq__37707_37930 = G__37969;
chunk__37711_37931 = G__37970;
count__37712_37932 = G__37971;
i__37713_37933 = G__37972;
continue;
}
}
} else {
}
}
break;
}


var G__37973 = seq__37667;
var G__37974 = chunk__37669;
var G__37975 = count__37670;
var G__37976 = (i__37671 + (1));
seq__37667 = G__37973;
chunk__37669 = G__37974;
count__37670 = G__37975;
i__37671 = G__37976;
continue;
} else {
var G__37977 = seq__37667;
var G__37978 = chunk__37669;
var G__37979 = count__37670;
var G__37980 = (i__37671 + (1));
seq__37667 = G__37977;
chunk__37669 = G__37978;
count__37670 = G__37979;
i__37671 = G__37980;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37667);
if(temp__5753__auto__){
var seq__37667__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37667__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37667__$1);
var G__37981 = cljs.core.chunk_rest(seq__37667__$1);
var G__37982 = c__4638__auto__;
var G__37983 = cljs.core.count(c__4638__auto__);
var G__37984 = (0);
seq__37667 = G__37981;
chunk__37669 = G__37982;
count__37670 = G__37983;
i__37671 = G__37984;
continue;
} else {
var path = cljs.core.first(seq__37667__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37725_37985 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37729_37986 = null;
var count__37730_37987 = (0);
var i__37731_37988 = (0);
while(true){
if((i__37731_37988 < count__37730_37987)){
var node_37989 = chunk__37729_37986.cljs$core$IIndexed$_nth$arity$2(null,i__37731_37988);
if(cljs.core.not(node_37989.shadow$old)){
var path_match_37990 = shadow.cljs.devtools.client.browser.match_paths(node_37989.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37990)){
var new_link_37991 = (function (){var G__37744 = node_37989.cloneNode(true);
G__37744.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37990),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37744;
})();
(node_37989.shadow$old = true);

(new_link_37991.onload = ((function (seq__37725_37985,chunk__37729_37986,count__37730_37987,i__37731_37988,seq__37667,chunk__37669,count__37670,i__37671,new_link_37991,path_match_37990,node_37989,path,seq__37667__$1,temp__5753__auto__,map__37666,map__37666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37989);
});})(seq__37725_37985,chunk__37729_37986,count__37730_37987,i__37731_37988,seq__37667,chunk__37669,count__37670,i__37671,new_link_37991,path_match_37990,node_37989,path,seq__37667__$1,temp__5753__auto__,map__37666,map__37666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37990], 0));

goog.dom.insertSiblingAfter(new_link_37991,node_37989);


var G__37992 = seq__37725_37985;
var G__37993 = chunk__37729_37986;
var G__37994 = count__37730_37987;
var G__37995 = (i__37731_37988 + (1));
seq__37725_37985 = G__37992;
chunk__37729_37986 = G__37993;
count__37730_37987 = G__37994;
i__37731_37988 = G__37995;
continue;
} else {
var G__37996 = seq__37725_37985;
var G__37997 = chunk__37729_37986;
var G__37998 = count__37730_37987;
var G__37999 = (i__37731_37988 + (1));
seq__37725_37985 = G__37996;
chunk__37729_37986 = G__37997;
count__37730_37987 = G__37998;
i__37731_37988 = G__37999;
continue;
}
} else {
var G__38000 = seq__37725_37985;
var G__38001 = chunk__37729_37986;
var G__38002 = count__37730_37987;
var G__38003 = (i__37731_37988 + (1));
seq__37725_37985 = G__38000;
chunk__37729_37986 = G__38001;
count__37730_37987 = G__38002;
i__37731_37988 = G__38003;
continue;
}
} else {
var temp__5753__auto___38004__$1 = cljs.core.seq(seq__37725_37985);
if(temp__5753__auto___38004__$1){
var seq__37725_38005__$1 = temp__5753__auto___38004__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37725_38005__$1)){
var c__4638__auto___38006 = cljs.core.chunk_first(seq__37725_38005__$1);
var G__38007 = cljs.core.chunk_rest(seq__37725_38005__$1);
var G__38008 = c__4638__auto___38006;
var G__38009 = cljs.core.count(c__4638__auto___38006);
var G__38010 = (0);
seq__37725_37985 = G__38007;
chunk__37729_37986 = G__38008;
count__37730_37987 = G__38009;
i__37731_37988 = G__38010;
continue;
} else {
var node_38011 = cljs.core.first(seq__37725_38005__$1);
if(cljs.core.not(node_38011.shadow$old)){
var path_match_38012 = shadow.cljs.devtools.client.browser.match_paths(node_38011.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38012)){
var new_link_38013 = (function (){var G__37746 = node_38011.cloneNode(true);
G__37746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38012),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37746;
})();
(node_38011.shadow$old = true);

(new_link_38013.onload = ((function (seq__37725_37985,chunk__37729_37986,count__37730_37987,i__37731_37988,seq__37667,chunk__37669,count__37670,i__37671,new_link_38013,path_match_38012,node_38011,seq__37725_38005__$1,temp__5753__auto___38004__$1,path,seq__37667__$1,temp__5753__auto__,map__37666,map__37666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38011);
});})(seq__37725_37985,chunk__37729_37986,count__37730_37987,i__37731_37988,seq__37667,chunk__37669,count__37670,i__37671,new_link_38013,path_match_38012,node_38011,seq__37725_38005__$1,temp__5753__auto___38004__$1,path,seq__37667__$1,temp__5753__auto__,map__37666,map__37666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38012], 0));

goog.dom.insertSiblingAfter(new_link_38013,node_38011);


var G__38014 = cljs.core.next(seq__37725_38005__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37725_37985 = G__38014;
chunk__37729_37986 = G__38015;
count__37730_37987 = G__38016;
i__37731_37988 = G__38017;
continue;
} else {
var G__38018 = cljs.core.next(seq__37725_38005__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37725_37985 = G__38018;
chunk__37729_37986 = G__38019;
count__37730_37987 = G__38020;
i__37731_37988 = G__38021;
continue;
}
} else {
var G__38022 = cljs.core.next(seq__37725_38005__$1);
var G__38023 = null;
var G__38024 = (0);
var G__38025 = (0);
seq__37725_37985 = G__38022;
chunk__37729_37986 = G__38023;
count__37730_37987 = G__38024;
i__37731_37988 = G__38025;
continue;
}
}
} else {
}
}
break;
}


var G__38026 = cljs.core.next(seq__37667__$1);
var G__38027 = null;
var G__38028 = (0);
var G__38029 = (0);
seq__37667 = G__38026;
chunk__37669 = G__38027;
count__37670 = G__38028;
i__37671 = G__38029;
continue;
} else {
var G__38030 = cljs.core.next(seq__37667__$1);
var G__38031 = null;
var G__38032 = (0);
var G__38033 = (0);
seq__37667 = G__38030;
chunk__37669 = G__38031;
count__37670 = G__38032;
i__37671 = G__38033;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37753){
var map__37754 = p__37753;
var map__37754__$1 = cljs.core.__destructure_map(map__37754);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37754__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37773){
var map__37774 = p__37773;
var map__37774__$1 = cljs.core.__destructure_map(map__37774);
var _ = map__37774__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37777,done,error){
var map__37778 = p__37777;
var map__37778__$1 = cljs.core.__destructure_map(map__37778);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37778__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37781,done,error){
var map__37782 = p__37781;
var map__37782__$1 = cljs.core.__destructure_map(map__37782);
var msg = map__37782__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37788){
var map__37790 = p__37788;
var map__37790__$1 = cljs.core.__destructure_map(map__37790);
var src = map__37790__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37794 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37794) : done.call(null,G__37794));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37795){
var map__37796 = p__37795;
var map__37796__$1 = cljs.core.__destructure_map(map__37796);
var msg__$1 = map__37796__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37797){var ex = e37797;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37799){
var map__37800 = p__37799;
var map__37800__$1 = cljs.core.__destructure_map(map__37800);
var env = map__37800__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37812){
var map__37813 = p__37812;
var map__37813__$1 = cljs.core.__destructure_map(map__37813);
var msg = map__37813__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37813__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37828){
var map__37829 = p__37828;
var map__37829__$1 = cljs.core.__destructure_map(map__37829);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37831){
var map__37832 = p__37831;
var map__37832__$1 = cljs.core.__destructure_map(map__37832);
var svc = map__37832__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37832__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
