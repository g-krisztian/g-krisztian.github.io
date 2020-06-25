// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('pomodoro.action');
goog.require('pomodoro.init');
goog.require('pomodoro.cookie_storage');
goog.require('pomodoro.main');
goog.require('reagent.core');
goog.require('pomodoro.dictionary');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.app_state !== 'undefined')){
} else {
pomodoro.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$get_DASH_key,pomodoro.cookie_storage.get_key,cljs.core.cst$kw$length,(25),cljs.core.cst$kw$ready,false,cljs.core.cst$kw$elapsed,(0),cljs.core.cst$kw$task_DASH_name,"Default",cljs.core.cst$kw$now,(new Date()).getTime(),cljs.core.cst$kw$view,cljs.core.cst$kw$single_DASH_run,cljs.core.cst$kw$unit,(function (){var or__4131__auto__ = pomodoro.cookie_storage.get_unit();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$min;
}
})()], null));
}
pomodoro.init.init.cljs$core$IFn$_invoke$arity$2(pomodoro.core.app_state,cljs.core.cst$kw$pomodoro);
pomodoro.core.main_loop = (function pomodoro$core$main_loop(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now,(new Date()).getTime()], null));

if(cljs.core.truth_(cljs.core.cst$kw$paused.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elapsed], null),cljs.core.inc);

if((cljs.core.cst$kw$elapsed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) > cljs.core.cst$kw$length_DASH_in_DASH_seconds.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return pomodoro.action.finish(state);
} else {
return null;
}
}
});
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.ticker !== 'undefined')){
} else {
pomodoro.core.ticker = setInterval((function (){
return pomodoro.core.main_loop(pomodoro.core.app_state);
}),(1000));
}
pomodoro.core.applet = (function pomodoro$core$applet(){
if(cljs.core.truth_(cljs.core.cst$kw$dictionary.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))){
return pomodoro.main.main.cljs$core$IFn$_invoke$arity$variadic(pomodoro.core.app_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.cst$kw$ready.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))?(function (){
pomodoro.main.set_title(pomodoro.core.app_state);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(cljs.core.cst$kw$dictionaries.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))?pomodoro.main.lang_switcher(pomodoro.core.app_state):null),pomodoro.main.choose_view(pomodoro.core.app_state),pomodoro.main.show_view(pomodoro.core.app_state)], null);
})()
:null),pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$2(pomodoro.core.app_state,cljs.core.cst$kw$hidden)], 0));
} else {
return null;
}
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.applet], null),document.getElementById("app"));
