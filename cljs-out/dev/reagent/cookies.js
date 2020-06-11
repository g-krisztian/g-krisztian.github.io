// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.cookies');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.cookies');
goog.require('cljs.reader');
/**
 * sets a cookie, the max-age for session cookie
 * following optional parameters may be passed in as a map:
 * :max-age - defaults to -1
 * :path - path of the cookie, defaults to the full request path
 * :domain - domain of the cookie, when null the browser will use the full request host name
 * :secure? - boolean specifying whether the cookie should only be sent over a secure channel
 * :raw? - boolean specifying whether content should be stored raw, or as EDN
 *   
 */
reagent.cookies.set_BANG_ = (function reagent$cookies$set_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14067 = arguments.length;
var i__4731__auto___14068 = (0);
while(true){
if((i__4731__auto___14068 < len__4730__auto___14067)){
args__4736__auto__.push((arguments[i__4731__auto___14068]));

var G__14069 = (i__4731__auto___14068 + (1));
i__4731__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,content,p__14061){
var vec__14062 = p__14061;
var map__14065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14062,(0),null);
var map__14065__$1 = (((((!((map__14065 == null))))?(((((map__14065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14065):map__14065);
var max_age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$max_DASH_age);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$path);
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$domain);
var secure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$secure_QMARK_);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$raw_QMARK_);
var opts = vec__14062;
var k__$1 = cljs.core.name(k);
var content__$1 = (cljs.core.truth_(raw_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(content):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)));
if(cljs.core.not(opts)){
return goog.net.cookies.set(k__$1,content__$1);
} else {
return goog.net.cookies.set(k__$1,content__$1,(function (){var or__4131__auto__ = max_age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})(),path,domain,cljs.core.boolean$(secure_QMARK_));
}
});

reagent.cookies.set_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.cookies.set_BANG_.cljs$lang$applyTo = (function (seq14058){
var G__14059 = cljs.core.first(seq14058);
var seq14058__$1 = cljs.core.next(seq14058);
var G__14060 = cljs.core.first(seq14058__$1);
var seq14058__$2 = cljs.core.next(seq14058__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14059,G__14060,seq14058__$2);
});

reagent.cookies.read_edn_value = (function reagent$cookies$read_edn_value(v){
if(cljs.core.truth_(v)){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
});
reagent.cookies.read_raw_value = (function reagent$cookies$read_raw_value(v){
return v;
});
reagent.cookies.get_value = (function reagent$cookies$get_value(k,r,default$){
var or__4131__auto__ = (function (){var G__14071 = goog.net.cookies.get(cljs.core.name(k));
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__14071) : r.call(null,G__14071));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});
/**
 * gets the value at the key (as edn), optional default when value is not found
 */
reagent.cookies.get = (function reagent$cookies$get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14078 = arguments.length;
var i__4731__auto___14079 = (0);
while(true){
if((i__4731__auto___14079 < len__4730__auto___14078)){
args__4736__auto__.push((arguments[i__4731__auto___14079]));

var G__14080 = (i__4731__auto___14079 + (1));
i__4731__auto___14079 = G__14080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14074){
var vec__14075 = p__14074;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14075,(0),null);
return reagent.cookies.get_value(k,reagent.cookies.read_edn_value,default$);
});

reagent.cookies.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get.cljs$lang$applyTo = (function (seq14072){
var G__14073 = cljs.core.first(seq14072);
var seq14072__$1 = cljs.core.next(seq14072);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14073,seq14072__$1);
});

/**
 * gets the value at the key (as string), optional default when value is not found
 */
reagent.cookies.get_raw = (function reagent$cookies$get_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14087 = arguments.length;
var i__4731__auto___14088 = (0);
while(true){
if((i__4731__auto___14088 < len__4730__auto___14087)){
args__4736__auto__.push((arguments[i__4731__auto___14088]));

var G__14089 = (i__4731__auto___14088 + (1));
i__4731__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14083){
var vec__14084 = p__14083;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14084,(0),null);
return reagent.cookies.get_value(k,reagent.cookies.read_raw_value,default$);
});

reagent.cookies.get_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get_raw.cljs$lang$applyTo = (function (seq14081){
var G__14082 = cljs.core.first(seq14081);
var seq14081__$1 = cljs.core.next(seq14081);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14082,seq14081__$1);
});

/**
 * is the key present in the cookies
 */
reagent.cookies.contains_key_QMARK_ = (function reagent$cookies$contains_key_QMARK_(k){
return goog.net.cookies.containsKey(cljs.core.name(k));
});
/**
 * is the value present in the cookies (as string)
 */
reagent.cookies.contains_val_QMARK_ = (function reagent$cookies$contains_val_QMARK_(v){
return goog.net.cookies.containsValue(v);
});
/**
 * returns the number of cookies
 */
reagent.cookies.count = (function reagent$cookies$count(){
return goog.net.cookies.getCount();
});
/**
 * returns all the keys for the cookies
 */
reagent.cookies.keys = (function reagent$cookies$keys(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,goog.net.cookies.getKeys());
});
/**
 * returns cookie values (as edn)
 */
reagent.cookies.vals = (function reagent$cookies$vals(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.cookies.read_edn_value,goog.net.cookies.getValues());
});
/**
 * returns cookie values (as strings)
 */
reagent.cookies.raw_vals = (function reagent$cookies$raw_vals(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.cookies.read_raw_value,goog.net.cookies.getValues());
});
/**
 * true if no cookies are set
 */
reagent.cookies.empty_QMARK_ = (function reagent$cookies$empty_QMARK_(){
return goog.net.cookies.isEmpty();
});
/**
 * removes a cookie, optionally for a specific path and/or domain
 */
reagent.cookies.remove_BANG_ = (function reagent$cookies$remove_BANG_(var_args){
var G__14091 = arguments.length;
switch (G__14091) {
case 1:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (k){
return goog.net.cookies.remove(cljs.core.name(k));
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (k,path,domain){
return goog.net.cookies.remove(cljs.core.name(k),path,domain);
});

reagent.cookies.remove_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * removes all cookies
 */
reagent.cookies.clear_BANG_ = (function reagent$cookies$clear_BANG_(){
return goog.net.cookies.clear();
});
