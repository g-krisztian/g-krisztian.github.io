// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('pomodoro.action');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.summary');
goog.require('pomodoro.history');
goog.require('pomodoro.batch');
goog.require('pomodoro.single_run');
goog.require('pomodoro.time_format');
goog.require('pomodoro.cookie_storage');
goog.require('reagent.core');
pomodoro.cookie_storage.init(cljs.core.cst$kw$pomodoro);
pomodoro.core.dictionary = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$summary,"Summary",cljs.core.cst$kw$history,"History",cljs.core.cst$kw$planning,"Batch run",cljs.core.cst$kw$single_DASH_run,"Single run",cljs.core.cst$kw$sec,"Second",cljs.core.cst$kw$min,"Minute"], null);
pomodoro.core.width = (function pomodoro$core$width(var_args){
var G__15075 = arguments.length;
switch (G__15075) {
case 0:
return pomodoro.core.width.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pomodoro.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pomodoro.core.width.cljs$core$IFn$_invoke$arity$0 = (function (){
return pomodoro.core.width.cljs$core$IFn$_invoke$arity$1((1));
});

pomodoro.core.width.cljs$core$IFn$_invoke$arity$1 = (function (r){
return (r * window.innerWidth);
});

pomodoro.core.width.cljs$lang$maxFixedArity = 1;

if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.app_state !== 'undefined')){
} else {
pomodoro.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$now,cljs.core.cst$kw$unit,cljs.core.cst$kw$dictionary,cljs.core.cst$kw$width,cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$length,cljs.core.cst$kw$get_DASH_key,cljs.core.cst$kw$elapsed,cljs.core.cst$kw$view],[(new Date()).getTime(),(function (){var or__4131__auto__ = pomodoro.cookie_storage.get_unit();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$min;
}
})(),pomodoro.core.dictionary,pomodoro.core.width,"Default",(25),pomodoro.cookie_storage.get_key,(0),cljs.core.cst$kw$single_DASH_run]));
}
pomodoro.core.swap_view = (function pomodoro$core$swap_view(state,view){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,view], null));
});
pomodoro.core.show_view = (function pomodoro$core$show_view(state){
var pred__15077 = cljs.core._EQ_;
var expr__15078 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_((function (){var G__15080 = cljs.core.cst$kw$summary;
var G__15081 = expr__15078;
return (pred__15077.cljs$core$IFn$_invoke$arity$2 ? pred__15077.cljs$core$IFn$_invoke$arity$2(G__15080,G__15081) : pred__15077.call(null,G__15080,G__15081));
})())){
return pomodoro.summary.summary(state);
} else {
if(cljs.core.truth_((function (){var G__15082 = cljs.core.cst$kw$history;
var G__15083 = expr__15078;
return (pred__15077.cljs$core$IFn$_invoke$arity$2 ? pred__15077.cljs$core$IFn$_invoke$arity$2(G__15082,G__15083) : pred__15077.call(null,G__15082,G__15083));
})())){
return pomodoro.history.history_table(state);
} else {
if(cljs.core.truth_((function (){var G__15084 = cljs.core.cst$kw$planning;
var G__15085 = expr__15078;
return (pred__15077.cljs$core$IFn$_invoke$arity$2 ? pred__15077.cljs$core$IFn$_invoke$arity$2(G__15084,G__15085) : pred__15077.call(null,G__15084,G__15085));
})())){
return pomodoro.batch.planning(state);
} else {
return pomodoro.single_run.single_run(state);
}
}
}
});
pomodoro.core.choose_view = (function pomodoro$core$choose_view(state){
var views = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$single_DASH_run,cljs.core.cst$kw$planning,cljs.core.cst$kw$history,cljs.core.cst$kw$summary], null);
var width = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"10%"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null)], null),(function (){var iter__4523__auto__ = ((function (views,width){
return (function pomodoro$core$choose_view_$_iter__15086(s__15087){
return (new cljs.core.LazySeq(null,((function (views,width){
return (function (){
var s__15087__$1 = s__15087;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15087__$1);
if(temp__5720__auto__){
var s__15087__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15087__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15087__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15089 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15088 = (0);
while(true){
if((i__15088 < size__4522__auto__)){
var view = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15088);
cljs.core.chunk_append(b__15089,pomodoro.ui_common.button_element((function (){var G__15091 = cljs.core.cst$kw$active;
var fexpr__15090 = cljs.core.deref(state);
return (fexpr__15090.cljs$core$IFn$_invoke$arity$1 ? fexpr__15090.cljs$core$IFn$_invoke$arity$1(G__15091) : fexpr__15090.call(null,G__15091));
})(),(function (){var x__4222__auto__ = (150);
var y__4223__auto__ = (width.cljs$core$IFn$_invoke$arity$1 ? width.cljs$core$IFn$_invoke$arity$1(0.238) : width.call(null,0.238));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1 ? pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1(view) : pomodoro.core.dictionary.call(null,view)),((function (i__15088,view,c__4521__auto__,size__4522__auto__,b__15089,s__15087__$2,temp__5720__auto__,views,width){
return (function (){
return pomodoro.core.swap_view(state,view);
});})(i__15088,view,c__4521__auto__,size__4522__auto__,b__15089,s__15087__$2,temp__5720__auto__,views,width))
));

var G__15094 = (i__15088 + (1));
i__15088 = G__15094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15089),pomodoro$core$choose_view_$_iter__15086(cljs.core.chunk_rest(s__15087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15089),null);
}
} else {
var view = cljs.core.first(s__15087__$2);
return cljs.core.cons(pomodoro.ui_common.button_element((function (){var G__15093 = cljs.core.cst$kw$active;
var fexpr__15092 = cljs.core.deref(state);
return (fexpr__15092.cljs$core$IFn$_invoke$arity$1 ? fexpr__15092.cljs$core$IFn$_invoke$arity$1(G__15093) : fexpr__15092.call(null,G__15093));
})(),(function (){var x__4222__auto__ = (150);
var y__4223__auto__ = (width.cljs$core$IFn$_invoke$arity$1 ? width.cljs$core$IFn$_invoke$arity$1(0.238) : width.call(null,0.238));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1 ? pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1(view) : pomodoro.core.dictionary.call(null,view)),((function (view,s__15087__$2,temp__5720__auto__,views,width){
return (function (){
return pomodoro.core.swap_view(state,view);
});})(view,s__15087__$2,temp__5720__auto__,views,width))
),pomodoro$core$choose_view_$_iter__15086(cljs.core.rest(s__15087__$2)));
}
} else {
return null;
}
break;
}
});})(views,width))
,null,null));
});})(views,width))
;
return iter__4523__auto__(views);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null);
});
pomodoro.action.reset_task(pomodoro.core.app_state);
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
pomodoro.core.set_title = (function pomodoro$core$set_title(){
return document.title = ["Pompdoro - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15096 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state));
return (fexpr__15096.cljs$core$IFn$_invoke$arity$1 ? fexpr__15096.cljs$core$IFn$_invoke$arity$1(pomodoro.core.dictionary) : fexpr__15096.call(null,pomodoro.core.dictionary));
})())," ",(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))?["| ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.cst$kw$elapsed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))))].join(''):null)].join('');
});
pomodoro.core.applet = (function pomodoro$core$applet(){
pomodoro.core.set_title();

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"max-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Pomodoro app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,["Time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(pomodoro.time_format.correct_time(cljs.core.cst$kw$now.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.deref(pomodoro.cookie_storage.source)], null),pomodoro.core.choose_view(pomodoro.core.app_state),pomodoro.core.show_view(pomodoro.core.app_state)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.applet], null),document.getElementById("app"));
