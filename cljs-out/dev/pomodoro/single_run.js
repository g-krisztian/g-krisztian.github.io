// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.single_run');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.action');
pomodoro.single_run.single_run = (function pomodoro$single_run$single_run(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_single_DASH_run,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Single run"], null),pomodoro.ui_common.text_input(state,cljs.core.cst$kw$task_DASH_name,(function (p1__15005_SHARP_){
return pomodoro.action.start_on_enter(p1__15005_SHARP_,state);
})),pomodoro.ui_common.input_length(state,cljs.core.cst$kw$length,(function (p1__15006_SHARP_){
return pomodoro.action.start_on_enter(p1__15006_SHARP_,state);
}))], null),pomodoro.ui_common.control_buttons(state)], null);
});
