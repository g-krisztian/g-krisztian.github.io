// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.cookie_storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.cookies');
goog.require('reagent.core');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.cookie_storage !== 'undefined') && (typeof pomodoro.cookie_storage.cache !== 'undefined')){
} else {
pomodoro.cookie_storage.cache = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.cookie_storage !== 'undefined') && (typeof pomodoro.cookie_storage.source !== 'undefined')){
} else {
pomodoro.cookie_storage.source = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pomodoro);
}
pomodoro.cookie_storage.update_cache = (function pomodoro$cookie_storage$update_cache(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pomodoro.cookie_storage.cache,cljs.core.assoc,k,v);
});
pomodoro.cookie_storage.get_n_cache = (function pomodoro$cookie_storage$get_n_cache(k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent.cookies.get(cljs.core.deref(pomodoro.cookie_storage.source)),k);
pomodoro.cookie_storage.update_cache(k,v);

return v;
});
pomodoro.cookie_storage.get_by_key = (function pomodoro$cookie_storage$get_by_key(k){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pomodoro.cookie_storage.cache,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pomodoro.cookie_storage.get_n_cache(k);
}
});
pomodoro.cookie_storage.set_by_key = (function pomodoro$cookie_storage$set_by_key(k,v){
var cache = pomodoro.cookie_storage.update_cache(k,v);
return reagent.cookies.set_BANG_(cljs.core.deref(pomodoro.cookie_storage.source),cache);
});
pomodoro.cookie_storage.delete$ = (function pomodoro$cookie_storage$delete(k){
return reagent.cookies.set_BANG_(cljs.core.deref(pomodoro.cookie_storage.source),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pomodoro.cookie_storage.cache,cljs.core.dissoc,k));
});
pomodoro.cookie_storage.get_next_key = (function pomodoro$cookie_storage$get_next_key(){
return pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$next_DASH_key);
});
pomodoro.cookie_storage.set_next_key = (function pomodoro$cookie_storage$set_next_key(k){
return pomodoro.cookie_storage.set_by_key(cljs.core.cst$kw$next_DASH_key,k);
});
pomodoro.cookie_storage.get_unit = (function pomodoro$cookie_storage$get_unit(){
return pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$unit);
});
pomodoro.cookie_storage.set_unit = (function pomodoro$cookie_storage$set_unit(u){
return pomodoro.cookie_storage.set_by_key(cljs.core.cst$kw$unit,u);
});
pomodoro.cookie_storage.get_plan = (function pomodoro$cookie_storage$get_plan(){
return pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$plan);
});
pomodoro.cookie_storage.set_plan = (function pomodoro$cookie_storage$set_plan(p){
return pomodoro.cookie_storage.set_by_key(cljs.core.cst$kw$plan,p);
});
pomodoro.cookie_storage.contains_plan_QMARK_ = (function pomodoro$cookie_storage$contains_plan_QMARK_(){
return cljs.core.not_empty(pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$plan));
});
pomodoro.cookie_storage.delete_plan = (function pomodoro$cookie_storage$delete_plan(){
return pomodoro.cookie_storage.delete$(cljs.core.cst$kw$plan);
});
pomodoro.cookie_storage.get_history = (function pomodoro$cookie_storage$get_history(){
return pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$history);
});
pomodoro.cookie_storage.set_history = (function pomodoro$cookie_storage$set_history(h){
return pomodoro.cookie_storage.set_by_key(cljs.core.cst$kw$history,h);
});
pomodoro.cookie_storage.get_language = (function pomodoro$cookie_storage$get_language(){
return pomodoro.cookie_storage.get_by_key(cljs.core.cst$kw$language);
});
pomodoro.cookie_storage.set_language = (function pomodoro$cookie_storage$set_language(v){
return pomodoro.cookie_storage.set_by_key(cljs.core.cst$kw$language,v);
});
pomodoro.cookie_storage.delete_history = (function pomodoro$cookie_storage$delete_history(){
return pomodoro.cookie_storage.delete$(cljs.core.cst$kw$history);
});
pomodoro.cookie_storage.get_key = (function pomodoro$cookie_storage$get_key(){
var actual = (function (){var or__4131__auto__ = pomodoro.cookie_storage.get_next_key();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
pomodoro.cookie_storage.set_next_key((actual + (1)));

return actual;
});
pomodoro.cookie_storage.init = (function pomodoro$cookie_storage$init(s){
cljs.core.reset_BANG_(pomodoro.cookie_storage.source,s);

cljs.core.reset_BANG_(pomodoro.cookie_storage.cache,reagent.cookies.get(cljs.core.deref(pomodoro.cookie_storage.source)));

if(cljs.core.truth_((function (){var and__4120__auto__ = pomodoro.cookie_storage.get_plan();
if(cljs.core.truth_(and__4120__auto__)){
return pomodoro.cookie_storage.get_history();
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
return pomodoro.cookie_storage.set_next_key((0));
}
});
