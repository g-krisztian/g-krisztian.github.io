// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.action');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.audio');
goog.require('pomodoro.cookie_storage');
goog.require('pomodoro.time_format');
pomodoro.action.get_task_in_seconds = (function pomodoro$action$get_task_in_seconds(task){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(task),cljs.core.cst$kw$min)){
return ((60) * cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task));
} else {
return cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task);
}
});
pomodoro.action.new_plan = (function pomodoro$action$new_plan(state){
var task = cljs.core.select_keys(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$length,cljs.core.cst$kw$unit], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([task,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14877 = (function (){var G__14879 = cljs.core.cst$kw$get_DASH_key;
var fexpr__14878 = cljs.core.deref(state);
return (fexpr__14878.cljs$core$IFn$_invoke$arity$1 ? fexpr__14878.cljs$core$IFn$_invoke$arity$1(G__14879) : fexpr__14878.call(null,G__14879));
})();
return (fexpr__14877.cljs$core$IFn$_invoke$arity$0 ? fexpr__14877.cljs$core$IFn$_invoke$arity$0() : fexpr__14877.call(null));
})())].join(''),cljs.core.cst$kw$length_DASH_in_DASH_seconds,pomodoro.action.get_task_in_seconds(task)], null)], 0));
});
pomodoro.action.swap_value = (function pomodoro$action$swap_value(state,key,e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,e.target.value]));
});
pomodoro.action.swap_unit = (function pomodoro$action$swap_unit(state,m){
pomodoro.cookie_storage.set_unit(m);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unit,m], null));
});
pomodoro.action.set_ready = (function pomodoro$action$set_ready(state,ready){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$ready,ready);
});
pomodoro.action.start_button_on_click = (function pomodoro$action$start_button_on_click(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$start_DASH_time,(new Date()).getTime(),cljs.core.cst$kw$elapsed,(0),cljs.core.cst$kw$paused,false,cljs.core.cst$kw$resume,true,cljs.core.cst$kw$active,true,cljs.core.cst$kw$stop,false,cljs.core.cst$kw$length_DASH_in_DASH_seconds,pomodoro.action.get_task_in_seconds(cljs.core.deref(state)),cljs.core.cst$kw$key,(function (){var fexpr__14882 = (function (){var G__14884 = cljs.core.cst$kw$get_DASH_key;
var fexpr__14883 = cljs.core.deref(state);
return (fexpr__14883.cljs$core$IFn$_invoke$arity$1 ? fexpr__14883.cljs$core$IFn$_invoke$arity$1(G__14884) : fexpr__14883.call(null,G__14884));
})();
return (fexpr__14882.cljs$core$IFn$_invoke$arity$0 ? fexpr__14882.cljs$core$IFn$_invoke$arity$0() : fexpr__14882.call(null));
})()], null));
});
pomodoro.action.run_plan = (function pomodoro$action$run_plan(state){
var batch = cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.empty_QMARK_(batch)){
return null;
} else {
var task = cljs.core.select_keys(cljs.core.first(batch),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length,cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$unit,cljs.core.cst$kw$length_DASH_in_DASH_seconds], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remain_DASH_plan,cljs.core.vec(cljs.core.rest(batch))], null),task);

return pomodoro.action.start_button_on_click(state);
}
});
pomodoro.action.start_plan = (function pomodoro$action$start_plan(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remain_DASH_plan,(function (){var or__4131__auto__ = pomodoro.cookie_storage.get_plan();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null));

return pomodoro.action.run_plan(state);
});
pomodoro.action.restart = (function pomodoro$action$restart(state,task){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,cljs.core.select_keys(task,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length,cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$unit,cljs.core.cst$kw$length_DASH_in_DASH_seconds], null)));

return pomodoro.action.start_button_on_click(state);
});
pomodoro.action.reset_task = (function pomodoro$action$reset_task(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$paused,true,cljs.core.cst$kw$active,false,cljs.core.cst$kw$stop,true,cljs.core.cst$kw$resume,true,cljs.core.cst$kw$elapsed,(0)], null));
});
pomodoro.action.get_real_duration = (function pomodoro$action$get_real_duration(state){
var start = cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var now = cljs.core.cst$kw$now.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var real_duration = (now - start);
var paused_duration = (cljs.core.cst$kw$paused_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) - start);
if(cljs.core.truth_(cljs.core.cst$kw$paused.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),false))){
return paused_duration;
} else {
return real_duration;
}
});
pomodoro.action.add_to_history = (function pomodoro$action$add_to_history(state){
return pomodoro.cookie_storage.set_history(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pomodoro.cookie_storage.get_history(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$length,cljs.core.cst$kw$length_DASH_in_DASH_seconds.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$key,["history_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join(''),cljs.core.cst$kw$duration,pomodoro.action.get_real_duration(state)], null)));
});
pomodoro.action.stop_button_on_click = (function pomodoro$action$stop_button_on_click(state){
pomodoro.action.add_to_history(state);

return pomodoro.action.reset_task(state);
});
pomodoro.action.start_on_enter = (function pomodoro$action$start_on_enter(event,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.charCode)){
return pomodoro.action.start_button_on_click(state);
} else {
return null;
}
});
pomodoro.action.pause_button_on_click = (function pomodoro$action$pause_button_on_click(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused], null),cljs.core.not);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null),cljs.core.not);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$paused_DASH_time,(new Date()).getTime()], null));
});
pomodoro.action.finish = (function pomodoro$action$finish(state){
pomodoro.action.stop_button_on_click(state);

pomodoro.audio.playback_mp3();

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
return pomodoro.action.run_plan(state);
}
});
pomodoro.action.run_next_item = (function pomodoro$action$run_next_item(state){
var plan = cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
pomodoro.action.add_to_history(state);

if(cljs.core.empty_QMARK_(plan)){
return pomodoro.action.reset_task(state);
} else {
return pomodoro.action.run_plan(state);
}
});
