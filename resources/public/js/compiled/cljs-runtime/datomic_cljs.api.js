goog.provide('datomic_cljs.api');

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
datomic_cljs.api.DbId = (function (spec){
this.spec = spec;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datomic_cljs.api.DbId.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#db/id",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.spec)].join('');
}));

(datomic_cljs.api.DbId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(datomic_cljs.api.DbId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null);
}));

(datomic_cljs.api.DbId.cljs$lang$type = true);

(datomic_cljs.api.DbId.cljs$lang$ctorStr = "datomic-cljs.api/DbId");

(datomic_cljs.api.DbId.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"datomic-cljs.api/DbId");
}));

/**
 * Positional factory function for datomic-cljs.api/DbId.
 */
datomic_cljs.api.__GT_DbId = (function datomic_cljs$api$__GT_DbId(spec){
return (new datomic_cljs.api.DbId(spec));
});

datomic_cljs.api.read_dbid = (function datomic_cljs$api$read_dbid(spec){
if(cljs.core.vector_QMARK_(spec)){
return (new datomic_cljs.api.DbId(spec));
} else {
return (cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$2(null,"db/id literal expects a vector as its representation.") : cljs.reader.reader_error.call(null,null,"db/id literal expects a vector as its representation."));
}
});
cljs.reader.register_tag_parser_BANG_("db/id",datomic_cljs.api.read_dbid);
var _BANG_next_id_27603 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000001));
/**
 * Generate a tempid in the specified partition. Values of n from -1
 *   to -1000000, inclusive, are reserved for user-created tempids.
 */
datomic_cljs.api.tempid = (function datomic_cljs$api$tempid(var_args){
var G__27373 = arguments.length;
switch (G__27373) {
case 1:
return datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$1 = (function (partition){
var id = (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,cljs.core.deref(_BANG_next_id_27603)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_next_id_27603,cljs.core.dec);

return id;
}));

(datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$2 = (function (partition,n){
return (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,n], null)));
}));

(datomic_cljs.api.tempid.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
datomic_cljs.api.IDatomicDB = function(){};

var datomic_cljs$api$IDatomicDB$_q$dyn_27605 = (function (db,query,inputs){
var x__4509__auto__ = (((db == null))?null:db);
var m__4510__auto__ = (datomic_cljs.api._q[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(db,query,inputs) : m__4510__auto__.call(null,db,query,inputs));
} else {
var m__4508__auto__ = (datomic_cljs.api._q["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(db,query,inputs) : m__4508__auto__.call(null,db,query,inputs));
} else {
throw cljs.core.missing_protocol("IDatomicDB.-q",db);
}
}
});
datomic_cljs.api._q = (function datomic_cljs$api$_q(db,query,inputs){
if((((!((db == null)))) && ((!((db.datomic_cljs$api$IDatomicDB$_q$arity$3 == null)))))){
return db.datomic_cljs$api$IDatomicDB$_q$arity$3(db,query,inputs);
} else {
return datomic_cljs$api$IDatomicDB$_q$dyn_27605(db,query,inputs);
}
});

var datomic_cljs$api$IDatomicDB$_entity$dyn_27606 = (function (db,eid){
var x__4509__auto__ = (((db == null))?null:db);
var m__4510__auto__ = (datomic_cljs.api._entity[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(db,eid) : m__4510__auto__.call(null,db,eid));
} else {
var m__4508__auto__ = (datomic_cljs.api._entity["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(db,eid) : m__4508__auto__.call(null,db,eid));
} else {
throw cljs.core.missing_protocol("IDatomicDB.-entity",db);
}
}
});
datomic_cljs.api._entity = (function datomic_cljs$api$_entity(db,eid){
if((((!((db == null)))) && ((!((db.datomic_cljs$api$IDatomicDB$_entity$arity$2 == null)))))){
return db.datomic_cljs$api$IDatomicDB$_entity$arity$2(db,eid);
} else {
return datomic_cljs$api$IDatomicDB$_entity$dyn_27606(db,eid);
}
});

var datomic_cljs$api$IDatomicDB$_datoms$dyn_27607 = (function (db,index,components){
var x__4509__auto__ = (((db == null))?null:db);
var m__4510__auto__ = (datomic_cljs.api._datoms[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4510__auto__.call(null,db,index,components));
} else {
var m__4508__auto__ = (datomic_cljs.api._datoms["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4508__auto__.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IDatomicDB.-datoms",db);
}
}
});
datomic_cljs.api._datoms = (function datomic_cljs$api$_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datomic_cljs$api$IDatomicDB$_datoms$arity$3 == null)))))){
return db.datomic_cljs$api$IDatomicDB$_datoms$arity$3(db,index,components);
} else {
return datomic_cljs$api$IDatomicDB$_datoms$dyn_27607(db,index,components);
}
});

var datomic_cljs$api$IDatomicDB$_basis_t$dyn_27608 = (function (db){
var x__4509__auto__ = (((db == null))?null:db);
var m__4510__auto__ = (datomic_cljs.api._basis_t[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__4510__auto__.call(null,db));
} else {
var m__4508__auto__ = (datomic_cljs.api._basis_t["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__4508__auto__.call(null,db));
} else {
throw cljs.core.missing_protocol("IDatomicDB.-basis-t",db);
}
}
});
datomic_cljs.api._basis_t = (function datomic_cljs$api$_basis_t(db){
if((((!((db == null)))) && ((!((db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1 == null)))))){
return db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1(db);
} else {
return datomic_cljs$api$IDatomicDB$_basis_t$dyn_27608(db);
}
});


/**
 * @interface
 */
datomic_cljs.api.IDatomicConnection = function(){};

var datomic_cljs$api$IDatomicConnection$_conn_url_root$dyn_27609 = (function (conn){
var x__4509__auto__ = (((conn == null))?null:conn);
var m__4510__auto__ = (datomic_cljs.api._conn_url_root[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(conn) : m__4510__auto__.call(null,conn));
} else {
var m__4508__auto__ = (datomic_cljs.api._conn_url_root["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(conn) : m__4508__auto__.call(null,conn));
} else {
throw cljs.core.missing_protocol("IDatomicConnection.-conn-url-root",conn);
}
}
});
datomic_cljs.api._conn_url_root = (function datomic_cljs$api$_conn_url_root(conn){
if((((!((conn == null)))) && ((!((conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1 == null)))))){
return conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(conn);
} else {
return datomic_cljs$api$IDatomicConnection$_conn_url_root$dyn_27609(conn);
}
});

var datomic_cljs$api$IDatomicConnection$_transact$dyn_27610 = (function (conn,tx_data_str){
var x__4509__auto__ = (((conn == null))?null:conn);
var m__4510__auto__ = (datomic_cljs.api._transact[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(conn,tx_data_str) : m__4510__auto__.call(null,conn,tx_data_str));
} else {
var m__4508__auto__ = (datomic_cljs.api._transact["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(conn,tx_data_str) : m__4508__auto__.call(null,conn,tx_data_str));
} else {
throw cljs.core.missing_protocol("IDatomicConnection.-transact",conn);
}
}
});
datomic_cljs.api._transact = (function datomic_cljs$api$_transact(conn,tx_data_str){
if((((!((conn == null)))) && ((!((conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2 == null)))))){
return conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2(conn,tx_data_str);
} else {
return datomic_cljs$api$IDatomicConnection$_transact$dyn_27610(conn,tx_data_str);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {datomic_cljs.api.IDatomicConnection}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datomic_cljs.api.DatomicConnection = (function (hostname,port,db_alias,__meta,__extmap,__hash){
this.hostname = hostname;
this.port = port;
this.db_alias = db_alias;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27375,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__27379 = k27375;
var G__27379__$1 = (((G__27379 instanceof cljs.core.Keyword))?G__27379.fqn:null);
switch (G__27379__$1) {
case "hostname":
return self__.hostname;

break;
case "port":
return self__.port;

break;
case "db-alias":
return self__.db_alias;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27375,else__4464__auto__);

}
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__27380){
var vec__27381 = p__27380;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#datomic-cljs.api.DatomicConnection{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hostname","hostname",2105669933),self__.hostname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),self__.db_alias],null))], null),self__.__extmap));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27374){
var self__ = this;
var G__27374__$1 = this;
return (new cljs.core.RecordIter((0),G__27374__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,self__.__extmap,self__.__hash));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1737183123 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27376,other27377){
var self__ = this;
var this27376__$1 = this;
return (((!((other27377 == null)))) && ((((this27376__$1.constructor === other27377.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27376__$1.hostname,other27377.hostname)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27376__$1.port,other27377.port)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27376__$1.db_alias,other27377.db_alias)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27376__$1.__extmap,other27377.__extmap)))))))))));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27375){
var self__ = this;
var this__4468__auto____$1 = this;
var G__27384 = k27375;
var G__27384__$1 = (((G__27384 instanceof cljs.core.Keyword))?G__27384.fqn:null);
switch (G__27384__$1) {
case "hostname":
case "port":
case "db-alias":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27375);

}
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27374){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__27385 = cljs.core.keyword_identical_QMARK_;
var expr__27386 = k__4470__auto__;
if(cljs.core.truth_((pred__27385.cljs$core$IFn$_invoke$arity$2 ? pred__27385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hostname","hostname",2105669933),expr__27386) : pred__27385.call(null,new cljs.core.Keyword(null,"hostname","hostname",2105669933),expr__27386)))){
return (new datomic_cljs.api.DatomicConnection(G__27374,self__.port,self__.db_alias,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27385.cljs$core$IFn$_invoke$arity$2 ? pred__27385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"port","port",1534937262),expr__27386) : pred__27385.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__27386)))){
return (new datomic_cljs.api.DatomicConnection(self__.hostname,G__27374,self__.db_alias,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27385.cljs$core$IFn$_invoke$arity$2 ? pred__27385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),expr__27386) : pred__27385.call(null,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),expr__27386)))){
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,G__27374,self__.__meta,self__.__extmap,null));
} else {
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27374),null));
}
}
}
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hostname","hostname",2105669933),self__.hostname,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"port","port",1534937262),self__.port,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),self__.db_alias,null))], null),self__.__extmap));
}));

(datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$ = cljs.core.PROTOCOL_SENTINEL);

(datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.hostname),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.port)].join('');
}));

(datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_transact$arity$2 = (function (conn,tx_data_str){
var self__ = this;
var conn__$1 = this;
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conn__$1.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(null)),"/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.db_alias),"/"].join('');
return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"post","post",269697687),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data_str], null)], null)));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27374){
var self__ = this;
var this__4460__auto____$1 = this;
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,G__27374,self__.__extmap,self__.__hash));
}));

(datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(datomic_cljs.api.DatomicConnection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hostname","hostname",-548765836,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"db-alias","db-alias",1134398613,null)], null);
}));

(datomic_cljs.api.DatomicConnection.cljs$lang$type = true);

(datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"datomic-cljs.api/DatomicConnection",null,(1),null));
}));

(datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"datomic-cljs.api/DatomicConnection");
}));

/**
 * Positional factory function for datomic-cljs.api/DatomicConnection.
 */
datomic_cljs.api.__GT_DatomicConnection = (function datomic_cljs$api$__GT_DatomicConnection(hostname,port,db_alias){
return (new datomic_cljs.api.DatomicConnection(hostname,port,db_alias,null,null,null));
});

/**
 * Factory function for datomic-cljs.api/DatomicConnection, taking a map of keywords to field values.
 */
datomic_cljs.api.map__GT_DatomicConnection = (function datomic_cljs$api$map__GT_DatomicConnection(G__27378){
var extmap__4501__auto__ = (function (){var G__27388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27378,new cljs.core.Keyword(null,"hostname","hostname",2105669933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914)], 0));
if(cljs.core.record_QMARK_(G__27378)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27388);
} else {
return G__27388;
}
})();
return (new datomic_cljs.api.DatomicConnection(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(G__27378),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__27378),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914).cljs$core$IFn$_invoke$arity$1(G__27378),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {datomic_cljs.api.IDatomicDB}
*/
datomic_cljs.api.DatomicDB = (function (conn,implicit_args,implicit_qs,__meta,__extmap,__hash){
this.conn = conn;
this.implicit_args = implicit_args;
this.implicit_qs = implicit_qs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27390,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__27394 = k27390;
var G__27394__$1 = (((G__27394 instanceof cljs.core.Keyword))?G__27394.fqn:null);
switch (G__27394__$1) {
case "conn":
return self__.conn;

break;
case "implicit-args":
return self__.implicit_args;

break;
case "implicit-qs":
return self__.implicit_qs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27390,else__4464__auto__);

}
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__27395){
var vec__27396 = p__27395;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27396,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27396,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#datomic-cljs.api.DatomicDB{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),self__.implicit_args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),self__.implicit_qs],null))], null),self__.__extmap));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27389){
var self__ = this;
var G__27389__$1 = this;
return (new cljs.core.RecordIter((0),G__27389__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,self__.__hash));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-276845315 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27391,other27392){
var self__ = this;
var this27391__$1 = this;
return (((!((other27392 == null)))) && ((((this27391__$1.constructor === other27392.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27391__$1.conn,other27392.conn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27391__$1.implicit_args,other27392.implicit_args)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27391__$1.implicit_qs,other27392.implicit_qs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27391__$1.__extmap,other27392.__extmap)))))))))));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),null,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27390){
var self__ = this;
var this__4468__auto____$1 = this;
var G__27399 = k27390;
var G__27399__$1 = (((G__27399 instanceof cljs.core.Keyword))?G__27399.fqn:null);
switch (G__27399__$1) {
case "conn":
case "implicit-args":
case "implicit-qs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27390);

}
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27389){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__27400 = cljs.core.keyword_identical_QMARK_;
var expr__27401 = k__4470__auto__;
if(cljs.core.truth_((pred__27400.cljs$core$IFn$_invoke$arity$2 ? pred__27400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn","conn",278309663),expr__27401) : pred__27400.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__27401)))){
return (new datomic_cljs.api.DatomicDB(G__27389,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27400.cljs$core$IFn$_invoke$arity$2 ? pred__27400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),expr__27401) : pred__27400.call(null,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),expr__27401)))){
return (new datomic_cljs.api.DatomicDB(self__.conn,G__27389,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27400.cljs$core$IFn$_invoke$arity$2 ? pred__27400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),expr__27401) : pred__27400.call(null,new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),expr__27401)))){
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,G__27389,self__.__meta,self__.__extmap,null));
} else {
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27389),null));
}
}
}
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),self__.implicit_args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),self__.implicit_qs,null))], null),self__.__extmap));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27389){
var self__ = this;
var this__4460__auto____$1 = this;
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,G__27389,self__.__extmap,self__.__hash));
}));

(datomic_cljs.api.DatomicDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$ = cljs.core.PROTOCOL_SENTINEL);

(datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_q$arity$3 = (function (_,query,inputs){
var self__ = this;
var ___$1 = this;
var args = cljs.core.vec(cljs.core.cons(self__.implicit_args,inputs));
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn)),"/api/query"].join('');
return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.implicit_qs,new cljs.core.Keyword(null,"q","q",689001697),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))], 0))], null)));
}));

(datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_datoms$arity$3 = (function (_,index,components){
var self__ = this;
var ___$1 = this;
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn)),"/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","alias","db/alias",-2039754316).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)),"/-/datoms"].join('');
return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.implicit_qs,components], 0)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.name(index))], null)));
}));

(datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_entity$arity$2 = (function (_,eid){
var self__ = this;
var ___$1 = this;
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(datomic_cljs.api._conn_url_root(self__.conn)),"/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","alias","db/alias",-2039754316).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)),"/-/entity"].join('');
return datomic_cljs.http.body(datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),eid,new cljs.core.Keyword(null,"as-of","as-of",-1841962382),new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args),new cljs.core.Keyword(null,"since","since",315379842),new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)], null)], null)));
}));

(datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c_basis = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__26604__auto___27615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26492__auto__ = (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (7))){
var state_27443__$1 = state_27443;
var statearr_27445_27616 = state_27443__$1;
(statearr_27445_27616[(2)] = "-");

(statearr_27445_27616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (1))){
var inst_27403 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_27443__$1 = state_27443;
if(cljs.core.truth_(inst_27403)){
var statearr_27446_27617 = state_27443__$1;
(statearr_27446_27617[(1)] = (2));

} else {
var statearr_27447_27618 = state_27443__$1;
(statearr_27447_27618[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (4))){
var inst_27441 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27443__$1,inst_27441);
} else {
if((state_val_27444 === (13))){
var inst_27427 = (state_27443[(7)]);
var inst_27429 = (state_27443[(2)]);
var inst_27430 = cljs.core.async.close_BANG_(inst_27427);
var state_27443__$1 = (function (){var statearr_27448 = state_27443;
(statearr_27448[(8)] = inst_27429);

return statearr_27448;
})();
var statearr_27449_27619 = state_27443__$1;
(statearr_27449_27619[(2)] = inst_27430);

(statearr_27449_27619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (6))){
var inst_27413 = (state_27443[(9)]);
var state_27443__$1 = state_27443;
var statearr_27450_27620 = state_27443__$1;
(statearr_27450_27620[(2)] = inst_27413);

(statearr_27450_27620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (3))){
var inst_27413 = (state_27443[(9)]);
var inst_27411 = datomic_cljs.api._conn_url_root(self__.conn);
var inst_27412 = new cljs.core.Keyword(null,"db-alias","db-alias",-506132914).cljs$core$IFn$_invoke$arity$1(self__.conn);
var inst_27413__$1 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_27443__$1 = (function (){var statearr_27451 = state_27443;
(statearr_27451[(10)] = inst_27411);

(statearr_27451[(9)] = inst_27413__$1);

(statearr_27451[(11)] = inst_27412);

return statearr_27451;
})();
if(cljs.core.truth_(inst_27413__$1)){
var statearr_27452_27621 = state_27443__$1;
(statearr_27452_27621[(1)] = (6));

} else {
var statearr_27453_27622 = state_27443__$1;
(statearr_27453_27622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (12))){
var inst_27439 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
var statearr_27454_27623 = state_27443__$1;
(statearr_27454_27623[(2)] = inst_27439);

(statearr_27454_27623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (2))){
var inst_27405 = (state_27443[(12)]);
var inst_27405__$1 = c_basis;
var inst_27406 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_27443__$1 = (function (){var statearr_27455 = state_27443;
(statearr_27455[(12)] = inst_27405__$1);

return statearr_27455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27443__$1,(5),inst_27405__$1,inst_27406);
} else {
if((state_val_27444 === (11))){
var inst_27432 = (state_27443[(13)]);
var inst_27424 = (state_27443[(14)]);
var inst_27432__$1 = c_basis;
var inst_27433 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27424);
var inst_27434 = new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730).cljs$core$IFn$_invoke$arity$1(inst_27433);
var state_27443__$1 = (function (){var statearr_27456 = state_27443;
(statearr_27456[(13)] = inst_27432__$1);

return statearr_27456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27443__$1,(14),inst_27432__$1,inst_27434);
} else {
if((state_val_27444 === (9))){
var inst_27424 = (state_27443[(14)]);
var inst_27424__$1 = (state_27443[(2)]);
var inst_27425 = (inst_27424__$1 instanceof Error);
var state_27443__$1 = (function (){var statearr_27457 = state_27443;
(statearr_27457[(14)] = inst_27424__$1);

return statearr_27457;
})();
if(cljs.core.truth_(inst_27425)){
var statearr_27458_27624 = state_27443__$1;
(statearr_27458_27624[(1)] = (10));

} else {
var statearr_27459_27625 = state_27443__$1;
(statearr_27459_27625[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (5))){
var inst_27405 = (state_27443[(12)]);
var inst_27408 = (state_27443[(2)]);
var inst_27409 = cljs.core.async.close_BANG_(inst_27405);
var state_27443__$1 = (function (){var statearr_27460 = state_27443;
(statearr_27460[(15)] = inst_27408);

return statearr_27460;
})();
var statearr_27461_27626 = state_27443__$1;
(statearr_27461_27626[(2)] = inst_27409);

(statearr_27461_27626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (14))){
var inst_27432 = (state_27443[(13)]);
var inst_27436 = (state_27443[(2)]);
var inst_27437 = cljs.core.async.close_BANG_(inst_27432);
var state_27443__$1 = (function (){var statearr_27462 = state_27443;
(statearr_27462[(16)] = inst_27436);

return statearr_27462;
})();
var statearr_27463_27627 = state_27443__$1;
(statearr_27463_27627[(2)] = inst_27437);

(statearr_27463_27627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (10))){
var inst_27427 = (state_27443[(7)]);
var inst_27424 = (state_27443[(14)]);
var inst_27427__$1 = c_basis;
var state_27443__$1 = (function (){var statearr_27464 = state_27443;
(statearr_27464[(7)] = inst_27427__$1);

return statearr_27464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27443__$1,(13),inst_27427__$1,inst_27424);
} else {
if((state_val_27444 === (8))){
var inst_27411 = (state_27443[(10)]);
var inst_27412 = (state_27443[(11)]);
var inst_27417 = (state_27443[(2)]);
var inst_27418 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27411),"/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27412),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27417),"/"].join('');
var inst_27419 = [new cljs.core.Keyword(null,"edn","edn",1317840885)];
var inst_27420 = [true];
var inst_27421 = cljs.core.PersistentHashMap.fromArrays(inst_27419,inst_27420);
var inst_27422 = datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"get","get",1683182755),inst_27418,inst_27421);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27443__$1,(9),inst_27422);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var datomic_cljs$api$state_machine__26493__auto__ = null;
var datomic_cljs$api$state_machine__26493__auto____0 = (function (){
var statearr_27465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27465[(0)] = datomic_cljs$api$state_machine__26493__auto__);

(statearr_27465[(1)] = (1));

return statearr_27465;
});
var datomic_cljs$api$state_machine__26493__auto____1 = (function (state_27443){
while(true){
var ret_value__26494__auto__ = (function (){try{while(true){
var result__26495__auto__ = switch__26492__auto__(state_27443);
if(cljs.core.keyword_identical_QMARK_(result__26495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26495__auto__;
}
break;
}
}catch (e27466){var ex__26496__auto__ = e27466;
var statearr_27467_27628 = state_27443;
(statearr_27467_27628[(2)] = ex__26496__auto__);


if(cljs.core.seq((state_27443[(4)]))){
var statearr_27468_27629 = state_27443;
(statearr_27468_27629[(1)] = cljs.core.first((state_27443[(4)])));

} else {
throw ex__26496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27443;
state_27443 = G__27630;
continue;
} else {
return ret_value__26494__auto__;
}
break;
}
});
datomic_cljs$api$state_machine__26493__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return datomic_cljs$api$state_machine__26493__auto____0.call(this);
case 1:
return datomic_cljs$api$state_machine__26493__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$state_machine__26493__auto____0;
datomic_cljs$api$state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$state_machine__26493__auto____1;
return datomic_cljs$api$state_machine__26493__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27469 = f__26605__auto__();
(statearr_27469[(6)] = c__26604__auto___27615);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));


return c_basis;
}));

(datomic_cljs.api.DatomicDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"implicit-args","implicit-args",126734140,null),new cljs.core.Symbol(null,"implicit-qs","implicit-qs",25304977,null)], null);
}));

(datomic_cljs.api.DatomicDB.cljs$lang$type = true);

(datomic_cljs.api.DatomicDB.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"datomic-cljs.api/DatomicDB",null,(1),null));
}));

(datomic_cljs.api.DatomicDB.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"datomic-cljs.api/DatomicDB");
}));

/**
 * Positional factory function for datomic-cljs.api/DatomicDB.
 */
datomic_cljs.api.__GT_DatomicDB = (function datomic_cljs$api$__GT_DatomicDB(conn,implicit_args,implicit_qs){
return (new datomic_cljs.api.DatomicDB(conn,implicit_args,implicit_qs,null,null,null));
});

/**
 * Factory function for datomic-cljs.api/DatomicDB, taking a map of keywords to field values.
 */
datomic_cljs.api.map__GT_DatomicDB = (function datomic_cljs$api$map__GT_DatomicDB(G__27393){
var extmap__4501__auto__ = (function (){var G__27470 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27393,new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], 0));
if(cljs.core.record_QMARK_(G__27393)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27470);
} else {
return G__27470;
}
})();
return (new datomic_cljs.api.DatomicDB(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__27393),new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387).cljs$core$IFn$_invoke$arity$1(G__27393),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550).cljs$core$IFn$_invoke$arity$1(G__27393),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Create an abstract connection to a Datomic REST service by passing
 * the following arguments:
 * 
 *   hostname, e.g. localhost;
 *   port, the port on which the REST service is listening;
 *   alias, the transactor alias;
 *   dbname, the name of the database being connected to.
 */
datomic_cljs.api.connect = (function datomic_cljs$api$connect(hostname,port,alias,db_name){
return datomic_cljs.api.__GT_DatomicConnection(hostname,port,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_name)].join(''));
});
/**
 * Create or connect to a Datomic database via a Datomic REST service
 * by passing the following arguments:
 * 
 *   hostname, e.g. localhost;
 *   port, the port on which the REST service is listening;
 *   alias, the transactor alias;
 *   db-name, the name of the database being created.
 * 
 * Returns a core.async channel eventually containing a database
 * connection (as if using datomic-cljs.api/connect), or an error.
 */
datomic_cljs.api.create_database = (function datomic_cljs$api$create_database(hostname,port,alias,db_name){
var c_conn = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var conn = datomic_cljs.api.connect(hostname,port,alias,db_name);
var c__26604__auto___27631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26492__auto__ = (function (state_27519){
var state_val_27520 = (state_27519[(1)]);
if((state_val_27520 === (7))){
var inst_27492 = (state_27519[(7)]);
var state_27519__$1 = state_27519;
var statearr_27521_27632 = state_27519__$1;
(statearr_27521_27632[(2)] = inst_27492);

(statearr_27521_27632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (1))){
var inst_27472 = conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(null);
var inst_27473 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27472),"/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),"/"].join('');
var inst_27474 = [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_27475 = [new cljs.core.Keyword(null,"db-name","db-name",1157928745)];
var inst_27476 = [db_name];
var inst_27477 = cljs.core.PersistentHashMap.fromArrays(inst_27475,inst_27476);
var inst_27478 = [true,inst_27477];
var inst_27479 = cljs.core.PersistentHashMap.fromArrays(inst_27474,inst_27478);
var inst_27480 = datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"post","post",269697687),inst_27473,inst_27479);
var state_27519__$1 = state_27519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27519__$1,(2),inst_27480);
} else {
if((state_val_27520 === (4))){
var inst_27492 = (state_27519[(7)]);
var inst_27484 = (state_27519[(8)]);
var inst_27492__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27484,(200));
var state_27519__$1 = (function (){var statearr_27522 = state_27519;
(statearr_27522[(7)] = inst_27492__$1);

return statearr_27522;
})();
if(inst_27492__$1){
var statearr_27523_27633 = state_27519__$1;
(statearr_27523_27633[(1)] = (7));

} else {
var statearr_27524_27634 = state_27519__$1;
(statearr_27524_27634[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (15))){
var state_27519__$1 = state_27519;
var statearr_27525_27635 = state_27519__$1;
(statearr_27525_27635[(2)] = null);

(statearr_27525_27635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (13))){
var inst_27499 = (state_27519[(9)]);
var inst_27501 = (state_27519[(2)]);
var inst_27502 = cljs.core.async.close_BANG_(inst_27499);
var state_27519__$1 = (function (){var statearr_27526 = state_27519;
(statearr_27526[(10)] = inst_27501);

return statearr_27526;
})();
var statearr_27527_27636 = state_27519__$1;
(statearr_27527_27636[(2)] = inst_27502);

(statearr_27527_27636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (6))){
var inst_27487 = (state_27519[(11)]);
var inst_27489 = (state_27519[(2)]);
var inst_27490 = cljs.core.async.close_BANG_(inst_27487);
var state_27519__$1 = (function (){var statearr_27528 = state_27519;
(statearr_27528[(12)] = inst_27489);

return statearr_27528;
})();
var statearr_27529_27637 = state_27519__$1;
(statearr_27529_27637[(2)] = inst_27490);

(statearr_27529_27637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (17))){
var inst_27505 = (state_27519[(13)]);
var inst_27509 = (state_27519[(2)]);
var inst_27510 = cljs.core.async.close_BANG_(inst_27505);
var state_27519__$1 = (function (){var statearr_27530 = state_27519;
(statearr_27530[(14)] = inst_27509);

return statearr_27530;
})();
var statearr_27531_27638 = state_27519__$1;
(statearr_27531_27638[(2)] = inst_27510);

(statearr_27531_27638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (3))){
var inst_27487 = (state_27519[(11)]);
var inst_27483 = (state_27519[(15)]);
var inst_27487__$1 = c_conn;
var state_27519__$1 = (function (){var statearr_27532 = state_27519;
(statearr_27532[(11)] = inst_27487__$1);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27519__$1,(6),inst_27487__$1,inst_27483);
} else {
if((state_val_27520 === (12))){
var inst_27515 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
var statearr_27533_27639 = state_27519__$1;
(statearr_27533_27639[(2)] = inst_27515);

(statearr_27533_27639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (2))){
var inst_27483 = (state_27519[(15)]);
var inst_27482 = (state_27519[(2)]);
var inst_27483__$1 = cljs.core.__destructure_map(inst_27482);
var inst_27484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27483__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27485 = (inst_27483__$1 instanceof Error);
var state_27519__$1 = (function (){var statearr_27534 = state_27519;
(statearr_27534[(8)] = inst_27484);

(statearr_27534[(15)] = inst_27483__$1);

return statearr_27534;
})();
if(cljs.core.truth_(inst_27485)){
var statearr_27535_27640 = state_27519__$1;
(statearr_27535_27640[(1)] = (3));

} else {
var statearr_27536_27641 = state_27519__$1;
(statearr_27536_27641[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (11))){
var state_27519__$1 = state_27519;
var statearr_27537_27642 = state_27519__$1;
(statearr_27537_27642[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (9))){
var inst_27497 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
if(cljs.core.truth_(inst_27497)){
var statearr_27539_27643 = state_27519__$1;
(statearr_27539_27643[(1)] = (10));

} else {
var statearr_27540_27644 = state_27519__$1;
(statearr_27540_27644[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (5))){
var inst_27517 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27519__$1,inst_27517);
} else {
if((state_val_27520 === (14))){
var inst_27484 = (state_27519[(8)]);
var inst_27505 = (state_27519[(13)]);
var inst_27505__$1 = c_conn;
var inst_27506 = ["Could not create or connect to db: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27484)].join('');
var inst_27507 = (new Error(inst_27506));
var state_27519__$1 = (function (){var statearr_27541 = state_27519;
(statearr_27541[(13)] = inst_27505__$1);

return statearr_27541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27519__$1,(17),inst_27505__$1,inst_27507);
} else {
if((state_val_27520 === (16))){
var inst_27513 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
var statearr_27542_27645 = state_27519__$1;
(statearr_27542_27645[(2)] = inst_27513);

(statearr_27542_27645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (10))){
var inst_27499 = (state_27519[(9)]);
var inst_27499__$1 = c_conn;
var state_27519__$1 = (function (){var statearr_27543 = state_27519;
(statearr_27543[(9)] = inst_27499__$1);

return statearr_27543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27519__$1,(13),inst_27499__$1,conn);
} else {
if((state_val_27520 === (8))){
var inst_27484 = (state_27519[(8)]);
var inst_27495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27484,(201));
var state_27519__$1 = state_27519;
var statearr_27544_27646 = state_27519__$1;
(statearr_27544_27646[(2)] = inst_27495);

(statearr_27544_27646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var datomic_cljs$api$create_database_$_state_machine__26493__auto__ = null;
var datomic_cljs$api$create_database_$_state_machine__26493__auto____0 = (function (){
var statearr_27545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27545[(0)] = datomic_cljs$api$create_database_$_state_machine__26493__auto__);

(statearr_27545[(1)] = (1));

return statearr_27545;
});
var datomic_cljs$api$create_database_$_state_machine__26493__auto____1 = (function (state_27519){
while(true){
var ret_value__26494__auto__ = (function (){try{while(true){
var result__26495__auto__ = switch__26492__auto__(state_27519);
if(cljs.core.keyword_identical_QMARK_(result__26495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26495__auto__;
}
break;
}
}catch (e27546){var ex__26496__auto__ = e27546;
var statearr_27547_27647 = state_27519;
(statearr_27547_27647[(2)] = ex__26496__auto__);


if(cljs.core.seq((state_27519[(4)]))){
var statearr_27548_27648 = state_27519;
(statearr_27548_27648[(1)] = cljs.core.first((state_27519[(4)])));

} else {
throw ex__26496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27649 = state_27519;
state_27519 = G__27649;
continue;
} else {
return ret_value__26494__auto__;
}
break;
}
});
datomic_cljs$api$create_database_$_state_machine__26493__auto__ = function(state_27519){
switch(arguments.length){
case 0:
return datomic_cljs$api$create_database_$_state_machine__26493__auto____0.call(this);
case 1:
return datomic_cljs$api$create_database_$_state_machine__26493__auto____1.call(this,state_27519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$create_database_$_state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$create_database_$_state_machine__26493__auto____0;
datomic_cljs$api$create_database_$_state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$create_database_$_state_machine__26493__auto____1;
return datomic_cljs$api$create_database_$_state_machine__26493__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27549 = f__26605__auto__();
(statearr_27549[(6)] = c__26604__auto___27631);

return statearr_27549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));


return c_conn;
});
/**
 * Creates an abstract Datomic value that can be queried.
 */
datomic_cljs.api.db = (function datomic_cljs$api$db(p__27550){
var map__27551 = p__27550;
var map__27551__$1 = cljs.core.__destructure_map(map__27551);
var conn = map__27551__$1;
var db_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27551__$1,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914));
return datomic_cljs.api.__GT_DatomicDB(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","alias","db/alias",-2039754316),db_alias], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns the value of the database as of some point t, inclusive.
 * t can be a transaction number, transaction ID, or inst.
 */
datomic_cljs.api.as_of = (function datomic_cljs$api$as_of(db,t){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387)], null),cljs.core.assoc,new cljs.core.Keyword(null,"as-of","as-of",-1841962382),t);
});
/**
 * Returns the value of the database since some point t, exclusive.
 * t can be a transaction number, transaction ID, or inst.
 */
datomic_cljs.api.since = (function datomic_cljs$api$since(db,t){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387)], null),cljs.core.assoc,new cljs.core.Keyword(null,"since","since",315379842),t);
});
/**
 * Returns a special database value containing all assertions and
 * retractions across time. This database value can be used with
 * datoms and index-range calls.
 */
datomic_cljs.api.history = (function datomic_cljs$api$history(db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),true);
});
/**
 * Returns a value of the database that limits the number of results
 * from query and datoms to given number n.
 */
datomic_cljs.api.limit = (function datomic_cljs$api$limit(db,n){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"limit","limit",-1355822363),n);
});
/**
 * Returns a value of the database that offsets the results of query
 * and datoms by given number n.
 */
datomic_cljs.api.offset = (function datomic_cljs$api$offset(db,n){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),n);
});
/**
 * Returns the as-of point, or nil if none.
 */
datomic_cljs.api.as_of_t = (function datomic_cljs$api$as_of_t(p__27552){
var map__27553 = p__27552;
var map__27553__$1 = cljs.core.__destructure_map(map__27553);
var map__27554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27553__$1,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387));
var map__27554__$1 = cljs.core.__destructure_map(map__27554);
var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27554__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
return as_of;
});
/**
 * Returns the since point, or nil if none.
 */
datomic_cljs.api.since_t = (function datomic_cljs$api$since_t(p__27555){
var map__27556 = p__27555;
var map__27556__$1 = cljs.core.__destructure_map(map__27556);
var map__27557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387));
var map__27557__$1 = cljs.core.__destructure_map(map__27557);
var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,new cljs.core.Keyword(null,"since","since",315379842));
return since;
});
/**
 * Returns a core.async channel eventually containing the t of the
 * the most recent transaction available via this db value.
 */
datomic_cljs.api.basis_t = (function datomic_cljs$api$basis_t(db){
return datomic_cljs.api._basis_t(db);
});
/**
 * Submits a transaction to the database for writing. The transaction
 * data is sent to the Transactor and, if transactAsync, processed
 * asynchronously.
 * 
 * tx-data is a list of lists, each of which specifies a write
 * operation, either an assertion, a retraction or the invocation of
 * a data function. Each nested list starts with a keyword identifying
 * the operation followed by the arguments for the operation.
 * 
 * Returns a core.async channel that will contain a map with the
 * following keys:
 * 
 *   :db-before, the database value before the transaction;
 *   :db-after, the database value after the transaction;
 *   :tx-data, the collection of Datums produced by the transaction;
 *   :tempids, an argument to resolve-tempids.
 */
datomic_cljs.api.transact = (function datomic_cljs$api$transact(conn,tx_data){
var f = (function (body){
if(cljs.core.map_QMARK_(body)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body,new cljs.core.Keyword(null,"db-before","db-before",-553691536),datomic_cljs.api.as_of(datomic_cljs.api.db(conn),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730)], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-after","db-after",-571884666),datomic_cljs.api.as_of(datomic_cljs.api.db(conn),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730)], null)))], 0));
} else {
return body;
}
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datomic_cljs.api._transact(conn,((typeof tx_data === 'string')?tx_data:cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_data], 0))))], null),(1));
});
/**
 * Execute a query against a database value with inputs. Returns a
 * core.async channel that will contain the result of the query, and
 * will be closed when the query is complete.
 */
datomic_cljs.api.q = (function datomic_cljs$api$q(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27650 = arguments.length;
var i__4819__auto___27651 = (0);
while(true){
if((i__4819__auto___27651 < len__4818__auto___27650)){
args__4824__auto__.push((arguments[i__4819__auto___27651]));

var G__27652 = (i__4819__auto___27651 + (1));
i__4819__auto___27651 = G__27652;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return datomic_cljs.api.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(datomic_cljs.api.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,inputs){
return datomic_cljs.api._q(db,query,inputs);
}));

(datomic_cljs.api.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datomic_cljs.api.q.cljs$lang$applyTo = (function (seq27558){
var G__27559 = cljs.core.first(seq27558);
var seq27558__$1 = cljs.core.next(seq27558);
var G__27560 = cljs.core.first(seq27558__$1);
var seq27558__$2 = cljs.core.next(seq27558__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27559,G__27560,seq27558__$2);
}));

datomic_cljs.api.q_ffirst = (function datomic_cljs$api$q_ffirst(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27653 = arguments.length;
var i__4819__auto___27654 = (0);
while(true){
if((i__4819__auto___27654 < len__4818__auto___27653)){
args__4824__auto__.push((arguments[i__4819__auto___27654]));

var G__27655 = (i__4819__auto___27654 + (1));
i__4819__auto___27654 = G__27655;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,inputs){
var c_res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__26604__auto___27656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26605__auto__ = (function (){var switch__26492__auto__ = (function (state_27582){
var state_val_27583 = (state_27582[(1)]);
if((state_val_27583 === (1))){
var inst_27564 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datomic_cljs.api.q,query,db,inputs);
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27582__$1,(2),inst_27564);
} else {
if((state_val_27583 === (2))){
var inst_27566 = (state_27582[(7)]);
var inst_27566__$1 = (state_27582[(2)]);
var inst_27567 = (inst_27566__$1 instanceof Error);
var state_27582__$1 = (function (){var statearr_27584 = state_27582;
(statearr_27584[(7)] = inst_27566__$1);

return statearr_27584;
})();
if(cljs.core.truth_(inst_27567)){
var statearr_27585_27657 = state_27582__$1;
(statearr_27585_27657[(1)] = (3));

} else {
var statearr_27586_27658 = state_27582__$1;
(statearr_27586_27658[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (3))){
var inst_27569 = (state_27582[(8)]);
var inst_27566 = (state_27582[(7)]);
var inst_27569__$1 = c_res;
var state_27582__$1 = (function (){var statearr_27587 = state_27582;
(statearr_27587[(8)] = inst_27569__$1);

return statearr_27587;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27582__$1,(6),inst_27569__$1,inst_27566);
} else {
if((state_val_27583 === (4))){
var inst_27574 = (state_27582[(9)]);
var inst_27566 = (state_27582[(7)]);
var inst_27574__$1 = c_res;
var inst_27575 = cljs.core.ffirst(inst_27566);
var state_27582__$1 = (function (){var statearr_27588 = state_27582;
(statearr_27588[(9)] = inst_27574__$1);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27582__$1,(7),inst_27574__$1,inst_27575);
} else {
if((state_val_27583 === (5))){
var inst_27580 = (state_27582[(2)]);
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27582__$1,inst_27580);
} else {
if((state_val_27583 === (6))){
var inst_27569 = (state_27582[(8)]);
var inst_27571 = (state_27582[(2)]);
var inst_27572 = cljs.core.async.close_BANG_(inst_27569);
var state_27582__$1 = (function (){var statearr_27589 = state_27582;
(statearr_27589[(10)] = inst_27571);

return statearr_27589;
})();
var statearr_27590_27659 = state_27582__$1;
(statearr_27590_27659[(2)] = inst_27572);

(statearr_27590_27659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (7))){
var inst_27574 = (state_27582[(9)]);
var inst_27577 = (state_27582[(2)]);
var inst_27578 = cljs.core.async.close_BANG_(inst_27574);
var state_27582__$1 = (function (){var statearr_27591 = state_27582;
(statearr_27591[(11)] = inst_27577);

return statearr_27591;
})();
var statearr_27592_27660 = state_27582__$1;
(statearr_27592_27660[(2)] = inst_27578);

(statearr_27592_27660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var datomic_cljs$api$state_machine__26493__auto__ = null;
var datomic_cljs$api$state_machine__26493__auto____0 = (function (){
var statearr_27593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27593[(0)] = datomic_cljs$api$state_machine__26493__auto__);

(statearr_27593[(1)] = (1));

return statearr_27593;
});
var datomic_cljs$api$state_machine__26493__auto____1 = (function (state_27582){
while(true){
var ret_value__26494__auto__ = (function (){try{while(true){
var result__26495__auto__ = switch__26492__auto__(state_27582);
if(cljs.core.keyword_identical_QMARK_(result__26495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26495__auto__;
}
break;
}
}catch (e27594){var ex__26496__auto__ = e27594;
var statearr_27595_27661 = state_27582;
(statearr_27595_27661[(2)] = ex__26496__auto__);


if(cljs.core.seq((state_27582[(4)]))){
var statearr_27596_27662 = state_27582;
(statearr_27596_27662[(1)] = cljs.core.first((state_27582[(4)])));

} else {
throw ex__26496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27663 = state_27582;
state_27582 = G__27663;
continue;
} else {
return ret_value__26494__auto__;
}
break;
}
});
datomic_cljs$api$state_machine__26493__auto__ = function(state_27582){
switch(arguments.length){
case 0:
return datomic_cljs$api$state_machine__26493__auto____0.call(this);
case 1:
return datomic_cljs$api$state_machine__26493__auto____1.call(this,state_27582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$state_machine__26493__auto____0;
datomic_cljs$api$state_machine__26493__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$state_machine__26493__auto____1;
return datomic_cljs$api$state_machine__26493__auto__;
})()
})();
var state__26606__auto__ = (function (){var statearr_27597 = f__26605__auto__();
(statearr_27597[(6)] = c__26604__auto___27656);

return statearr_27597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26606__auto__);
}));


return c_res;
}));

(datomic_cljs.api.q_ffirst.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datomic_cljs.api.q_ffirst.cljs$lang$applyTo = (function (seq27561){
var G__27562 = cljs.core.first(seq27561);
var seq27561__$1 = cljs.core.next(seq27561);
var G__27563 = cljs.core.first(seq27561__$1);
var seq27561__$2 = cljs.core.next(seq27561__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27562,G__27563,seq27561__$2);
}));

/**
 * Returns a map of the entity's attributes for the given id.
 */
datomic_cljs.api.entity = (function datomic_cljs$api$entity(db,eid){
return datomic_cljs.api._entity(db,eid);
});
/**
 * Returns a core.async channel that will contain the entity id
 * associated with a symbolic keyword, or the id itself if passed.
 */
datomic_cljs.api.entid = (function datomic_cljs$api$entid(db,ident){
if(typeof ident === 'number'){
return datomic_cljs.util.singleton_chan(ident);
} else {
return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ident], 0));
}
});
/**
 * Returns a core.async channel that will contain the ident
 * associated with an entity id, or the ident itself if passed.
 */
datomic_cljs.api.ident = (function datomic_cljs$api$ident(db,eid){
if((eid instanceof cljs.core.Keyword)){
return datomic_cljs.util.singleton_chan(eid);
} else {
return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0));
}
});
/**
 * Raw access to the index data, by index. The index must be
 * supplied, along with optional leading components.
 */
datomic_cljs.api.datoms = (function datomic_cljs$api$datoms(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27664 = arguments.length;
var i__4819__auto___27665 = (0);
while(true){
if((i__4819__auto___27665 < len__4818__auto___27664)){
args__4824__auto__.push((arguments[i__4819__auto___27665]));

var G__27666 = (i__4819__auto___27665 + (1));
i__4819__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return datomic_cljs.api.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(datomic_cljs.api.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,p__27601){
var map__27602 = p__27601;
var map__27602__$1 = cljs.core.__destructure_map(map__27602);
var components = map__27602__$1;
return datomic_cljs.api._datoms(db,index,components);
}));

(datomic_cljs.api.datoms.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datomic_cljs.api.datoms.cljs$lang$applyTo = (function (seq27598){
var G__27599 = cljs.core.first(seq27598);
var seq27598__$1 = cljs.core.next(seq27598);
var G__27600 = cljs.core.first(seq27598__$1);
var seq27598__$2 = cljs.core.next(seq27598__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27599,G__27600,seq27598__$2);
}));

/**
 * Returns a range of datoms in the given index, starting from start,
 * or the beginning if start is nil, and going to end, or through the
 * end if end is nil.
 */
datomic_cljs.api.index_range = (function datomic_cljs$api$index_range(db,index,start,end){
return datomic_cljs.api._datoms(db,index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));
});
/**
 * Returns the current time rounded to the nearest second.
 */
datomic_cljs.api.squuid_seconds_component = (function datomic_cljs$api$squuid_seconds_component(){
return Math.round((Date.now() / (1000)));
});
/**
 * Constructs a semi-sequential UUID. Useful for creating UUIDs that
 * don't fragment indexes. Returns a UUID whose most significant 32
 * bits are the current time in milliseconds, rounded to the nearest
 * second.
 */
datomic_cljs.api.squuid = (function datomic_cljs$api$squuid(){
var seconds_hex = datomic_cljs.api.squuid_seconds_component().toString((16));
var trailing = "-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace((new RegExp("[xy]","g")),(function (c){
var r = (((16) * Math.random()) | (0));
var v = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"x"))?r:((r & (3)) | (8)));
return v.toString((16));
}));
return (new cljs.core.UUID([cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds_hex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailing)].join('')));
});
/**
 * Get the time part of a squuid.
 */
datomic_cljs.api.squuid_time_millis = (function datomic_cljs$api$squuid_time_millis(squuid){
return (parseInt(squuid.uuid.slice((0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datomic_cljs.api.js.map
