goog.provide('happy.representor.edn');
happy.representor.edn.create = (function happy$representor$edn$create(var_args){
var G__27378 = arguments.length;
switch (G__27378) {
case 0:
return happy.representor.edn.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return happy.representor.edn.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(happy.representor.edn.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return happy.representor.edn.create.cljs$core$IFn$_invoke$arity$1(null);
}));

(happy.representor.edn.create.cljs$core$IFn$_invoke$arity$1 = (function (m){
if((typeof happy !== 'undefined') && (typeof happy.representor !== 'undefined') && (typeof happy.representor.edn !== 'undefined') && (typeof happy.representor.edn.t_happy$representor$edn27379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {happy.representors.Representator}
 * @implements {cljs.core.IWithMeta}
*/
happy.representor.edn.t_happy$representor$edn27379 = (function (m,meta27380){
this.m = m;
this.meta27380 = meta27380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(happy.representor.edn.t_happy$representor$edn27379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27381,meta27380__$1){
var self__ = this;
var _27381__$1 = this;
return (new happy.representor.edn.t_happy$representor$edn27379(self__.m,meta27380__$1));
}));

(happy.representor.edn.t_happy$representor$edn27379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27381){
var self__ = this;
var _27381__$1 = this;
return self__.meta27380;
}));

(happy.representor.edn.t_happy$representor$edn27379.prototype.happy$representors$Representator$ = cljs.core.PROTOCOL_SENTINEL);

(happy.representor.edn.t_happy$representor$edn27379.prototype.happy$representors$Representator$_mime_types$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["application/edn",null], null), null);
}));

(happy.representor.edn.t_happy$representor$edn27379.prototype.happy$representors$Representator$_serialize$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
}));

(happy.representor.edn.t_happy$representor$edn27379.prototype.happy$representors$Representator$_unserialize$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(typeof o === 'string'){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(o);
} else {
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4(o,null,null,null);
}
}));

(happy.representor.edn.t_happy$representor$edn27379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta27380","meta27380",-436964408,null)], null);
}));

(happy.representor.edn.t_happy$representor$edn27379.cljs$lang$type = true);

(happy.representor.edn.t_happy$representor$edn27379.cljs$lang$ctorStr = "happy.representor.edn/t_happy$representor$edn27379");

(happy.representor.edn.t_happy$representor$edn27379.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"happy.representor.edn/t_happy$representor$edn27379");
}));

/**
 * Positional factory function for happy.representor.edn/t_happy$representor$edn27379.
 */
happy.representor.edn.__GT_t_happy$representor$edn27379 = (function happy$representor$edn$__GT_t_happy$representor$edn27379(m__$1,meta27380){
return (new happy.representor.edn.t_happy$representor$edn27379(m__$1,meta27380));
});

}

return (new happy.representor.edn.t_happy$representor$edn27379(m,cljs.core.PersistentArrayMap.EMPTY));
}));

(happy.representor.edn.create.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=happy.representor.edn.js.map
