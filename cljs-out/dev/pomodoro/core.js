// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('reagent_modals.modals');
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
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.app_state !== 'undefined')){
} else {
pomodoro.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$get_DASH_key,pomodoro.cookie_storage.get_key,cljs.core.cst$kw$dictionary,pomodoro.core.dictionary,cljs.core.cst$kw$length,(25),cljs.core.cst$kw$elapsed,(0),cljs.core.cst$kw$task_DASH_name,"Default",cljs.core.cst$kw$now,(new Date()).getTime(),cljs.core.cst$kw$view,cljs.core.cst$kw$single_DASH_run,cljs.core.cst$kw$unit,(function (){var or__4131__auto__ = pomodoro.cookie_storage.get_unit();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$min;
}
})()], null));
}
pomodoro.core.swap_view = (function pomodoro$core$swap_view(state,view){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,view], null));
});
pomodoro.core.show_view = (function pomodoro$core$show_view(state){
var pred__15080 = cljs.core._EQ_;
var expr__15081 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_((function (){var G__15083 = cljs.core.cst$kw$summary;
var G__15084 = expr__15081;
return (pred__15080.cljs$core$IFn$_invoke$arity$2 ? pred__15080.cljs$core$IFn$_invoke$arity$2(G__15083,G__15084) : pred__15080.call(null,G__15083,G__15084));
})())){
return pomodoro.summary.summary(state);
} else {
if(cljs.core.truth_((function (){var G__15085 = cljs.core.cst$kw$history;
var G__15086 = expr__15081;
return (pred__15080.cljs$core$IFn$_invoke$arity$2 ? pred__15080.cljs$core$IFn$_invoke$arity$2(G__15085,G__15086) : pred__15080.call(null,G__15085,G__15086));
})())){
return pomodoro.history.history_table(state);
} else {
if(cljs.core.truth_((function (){var G__15087 = cljs.core.cst$kw$planning;
var G__15088 = expr__15081;
return (pred__15080.cljs$core$IFn$_invoke$arity$2 ? pred__15080.cljs$core$IFn$_invoke$arity$2(G__15087,G__15088) : pred__15080.call(null,G__15087,G__15088));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null)], null),(function (){var iter__4523__auto__ = ((function (views){
return (function pomodoro$core$choose_view_$_iter__15089(s__15090){
return (new cljs.core.LazySeq(null,((function (views){
return (function (){
var s__15090__$1 = s__15090;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15090__$1);
if(temp__5720__auto__){
var s__15090__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15090__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15090__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15092 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15091 = (0);
while(true){
if((i__15091 < size__4522__auto__)){
var view = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15091);
cljs.core.chunk_append(b__15092,pomodoro.ui_common.button_element((function (){var G__15094 = cljs.core.cst$kw$active;
var fexpr__15093 = cljs.core.deref(state);
return (fexpr__15093.cljs$core$IFn$_invoke$arity$1 ? fexpr__15093.cljs$core$IFn$_invoke$arity$1(G__15094) : fexpr__15093.call(null,G__15094));
})(),(pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1 ? pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1(view) : pomodoro.core.dictionary.call(null,view)),((function (i__15091,view,c__4521__auto__,size__4522__auto__,b__15092,s__15090__$2,temp__5720__auto__,views){
return (function (){
return pomodoro.core.swap_view(state,view);
});})(i__15091,view,c__4521__auto__,size__4522__auto__,b__15092,s__15090__$2,temp__5720__auto__,views))
));

var G__15097 = (i__15091 + (1));
i__15091 = G__15097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15092),pomodoro$core$choose_view_$_iter__15089(cljs.core.chunk_rest(s__15090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15092),null);
}
} else {
var view = cljs.core.first(s__15090__$2);
return cljs.core.cons(pomodoro.ui_common.button_element((function (){var G__15096 = cljs.core.cst$kw$active;
var fexpr__15095 = cljs.core.deref(state);
return (fexpr__15095.cljs$core$IFn$_invoke$arity$1 ? fexpr__15095.cljs$core$IFn$_invoke$arity$1(G__15096) : fexpr__15095.call(null,G__15096));
})(),(pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1 ? pomodoro.core.dictionary.cljs$core$IFn$_invoke$arity$1(view) : pomodoro.core.dictionary.call(null,view)),((function (view,s__15090__$2,temp__5720__auto__,views){
return (function (){
return pomodoro.core.swap_view(state,view);
});})(view,s__15090__$2,temp__5720__auto__,views))
),pomodoro$core$choose_view_$_iter__15089(cljs.core.rest(s__15090__$2)));
}
} else {
return null;
}
break;
}
});})(views))
,null,null));
});})(views))
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
return document.title = ["Pompdoro - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15099 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state));
return (fexpr__15099.cljs$core$IFn$_invoke$arity$1 ? fexpr__15099.cljs$core$IFn$_invoke$arity$1(pomodoro.core.dictionary) : fexpr__15099.call(null,pomodoro.core.dictionary));
})())," ",(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))?["| ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.cst$kw$elapsed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))))].join(''):null)].join('');
});
pomodoro.core.applet = (function pomodoro$core$applet(){
pomodoro.core.set_title();

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"max-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Pomodoro app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,["Time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(pomodoro.time_format.correct_time(cljs.core.cst$kw$now.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pomodoro.core.app_state)))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.deref(pomodoro.cookie_storage.source)], null),pomodoro.core.choose_view(pomodoro.core.app_state),pomodoro.core.show_view(pomodoro.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.modal_window], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.applet], null),document.getElementById("app"));
