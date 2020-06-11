// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.batch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.time_format');
goog.require('pomodoro.action');
goog.require('pomodoro.cookie_storage');
pomodoro.batch.add_to_plan = (function pomodoro$batch$add_to_plan(task){
return pomodoro.cookie_storage.set_plan(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = pomodoro.cookie_storage.get_plan();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),task));
});
pomodoro.batch.add_new_task_to_plan = (function pomodoro$batch$add_new_task_to_plan(state){
return pomodoro.batch.add_to_plan(pomodoro.action.new_plan(state));
});
pomodoro.batch.add_to_plan_on_enter = (function pomodoro$batch$add_to_plan_on_enter(event,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.charCode)){
return pomodoro.batch.add_new_task_to_plan(state);
} else {
return null;
}
});
pomodoro.batch.get_task_in_milisec = (function pomodoro$batch$get_task_in_milisec(task){
return ((1000) * pomodoro.action.get_task_in_seconds(task));
});
pomodoro.batch.run_next_item = (function pomodoro$batch$run_next_item(state){
var plan = cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
pomodoro.action.add_to_history(state);

if(cljs.core.empty_QMARK_(plan)){
return pomodoro.action.reset_task(state);
} else {
return pomodoro.action.run_plan(state);
}
});
pomodoro.batch.plan_runner = (function pomodoro$batch$plan_runner(state){
if(cljs.core.truth_(pomodoro.cookie_storage.contains_plan_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.hideable_button_element((function (){var G__15015 = cljs.core.cst$kw$active;
var fexpr__15014 = cljs.core.deref(state);
return (fexpr__15014.cljs$core$IFn$_invoke$arity$1 ? fexpr__15014.cljs$core$IFn$_invoke$arity$1(G__15015) : fexpr__15014.call(null,G__15015));
})(),"Start batch",(function (){
return pomodoro.action.start_plan(state);
})),pomodoro.ui_common.hideable_button_element((function (){var G__15017 = cljs.core.cst$kw$paused;
var fexpr__15016 = cljs.core.deref(state);
return (fexpr__15016.cljs$core$IFn$_invoke$arity$1 ? fexpr__15016.cljs$core$IFn$_invoke$arity$1(G__15017) : fexpr__15016.call(null,G__15017));
})(),"Pause timer",(function (){
return pomodoro.action.pause_button_on_click(state);
})),pomodoro.ui_common.hideable_button_element((function (){var G__15019 = cljs.core.cst$kw$resume;
var fexpr__15018 = cljs.core.deref(state);
return (fexpr__15018.cljs$core$IFn$_invoke$arity$1 ? fexpr__15018.cljs$core$IFn$_invoke$arity$1(G__15019) : fexpr__15018.call(null,G__15019));
})(),"Resume timer",(function (){
return pomodoro.action.pause_button_on_click(state);
})),((cljs.core.empty_QMARK_(cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?null:pomodoro.ui_common.hideable_button_element((function (){var G__15021 = cljs.core.cst$kw$stop;
var fexpr__15020 = cljs.core.deref(state);
return (fexpr__15020.cljs$core$IFn$_invoke$arity$1 ? fexpr__15020.cljs$core$IFn$_invoke$arity$1(G__15021) : fexpr__15020.call(null,G__15021));
})(),"Run next",(function (){
return pomodoro.batch.run_next_item(state);
}))),pomodoro.ui_common.hideable_button_element((function (){var G__15023 = cljs.core.cst$kw$stop;
var fexpr__15022 = cljs.core.deref(state);
return (fexpr__15022.cljs$core$IFn$_invoke$arity$1 ? fexpr__15022.cljs$core$IFn$_invoke$arity$1(G__15023) : fexpr__15022.call(null,G__15023));
})(),"Stop batch",(function (){
return pomodoro.action.stop_button_on_click(state);
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.progress_bar(cljs.core.deref(state))], null)], null);
} else {
return null;
}
});
pomodoro.batch.plan_table = (function pomodoro$batch$plan_table(state){
var temp__5720__auto__ = pomodoro.cookie_storage.get_plan();
if(cljs.core.truth_(temp__5720__auto__)){
var plan = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_plan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"summary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Task name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,["Planned time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$length_DASH_in_DASH_seconds,plan))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.ui_common.button_element((function (){var G__15025 = cljs.core.cst$kw$active;
var fexpr__15024 = cljs.core.deref(state);
return (fexpr__15024.cljs$core$IFn$_invoke$arity$1 ? fexpr__15024.cljs$core$IFn$_invoke$arity$1(G__15025) : fexpr__15024.call(null,G__15025));
})(),"Clear plan",((function (plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.delete_plan();
});})(plan,temp__5720__auto__))
)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (plan,temp__5720__auto__){
return (function pomodoro$batch$plan_table_$_iter__15026(s__15027){
return (new cljs.core.LazySeq(null,((function (plan,temp__5720__auto__){
return (function (){
var s__15027__$1 = s__15027;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__15027__$1);
if(temp__5720__auto____$1){
var s__15027__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15027__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15027__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15029 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15028 = (0);
while(true){
if((i__15028 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15028);
cljs.core.chunk_append(b__15029,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15031 = cljs.core.cst$kw$active;
var fexpr__15030 = cljs.core.deref(state);
return (fexpr__15030.cljs$core$IFn$_invoke$arity$1 ? fexpr__15030.cljs$core$IFn$_invoke$arity$1(G__15031) : fexpr__15030.call(null,G__15031));
})(),"Remove",((function (i__15028,task,c__4521__auto__,size__4522__auto__,b__15029,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__15028,task,c__4521__auto__,size__4522__auto__,b__15029,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(i__15028,task,c__4521__auto__,size__4522__auto__,b__15029,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
,plan));
});})(i__15028,task,c__4521__auto__,size__4522__auto__,b__15029,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
)], null)], null));

var G__15034 = (i__15028 + (1));
i__15028 = G__15034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15029),pomodoro$batch$plan_table_$_iter__15026(cljs.core.chunk_rest(s__15027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15029),null);
}
} else {
var task = cljs.core.first(s__15027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15033 = cljs.core.cst$kw$active;
var fexpr__15032 = cljs.core.deref(state);
return (fexpr__15032.cljs$core$IFn$_invoke$arity$1 ? fexpr__15032.cljs$core$IFn$_invoke$arity$1(G__15033) : fexpr__15032.call(null,G__15033));
})(),"Remove",((function (task,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (task,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(task,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
,plan));
});})(task,s__15027__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
)], null)], null),pomodoro$batch$plan_table_$_iter__15026(cljs.core.rest(s__15027__$2)));
}
} else {
return null;
}
break;
}
});})(plan,temp__5720__auto__))
,null,null));
});})(plan,temp__5720__auto__))
;
return iter__4523__auto__(plan);
})())], null)], null);
} else {
return null;
}
});
pomodoro.batch.short_break = (function pomodoro$batch$short_break(state){
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,"Short break",cljs.core.cst$kw$length_DASH_in_DASH_seconds,(300),cljs.core.cst$kw$length,(5),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15042 = (function (){var G__15044 = cljs.core.cst$kw$get_DASH_key;
var fexpr__15043 = cljs.core.deref(state);
return (fexpr__15043.cljs$core$IFn$_invoke$arity$1 ? fexpr__15043.cljs$core$IFn$_invoke$arity$1(G__15044) : fexpr__15043.call(null,G__15044));
})();
return (fexpr__15042.cljs$core$IFn$_invoke$arity$0 ? fexpr__15042.cljs$core$IFn$_invoke$arity$0() : fexpr__15042.call(null));
})())].join('')], null));
});
pomodoro.batch.long_break = (function pomodoro$batch$long_break(state){
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,"Long break",cljs.core.cst$kw$length_DASH_in_DASH_seconds,(900),cljs.core.cst$kw$length,(15),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15052 = (function (){var G__15054 = cljs.core.cst$kw$get_DASH_key;
var fexpr__15053 = cljs.core.deref(state);
return (fexpr__15053.cljs$core$IFn$_invoke$arity$1 ? fexpr__15053.cljs$core$IFn$_invoke$arity$1(G__15054) : fexpr__15053.call(null,G__15054));
})();
return (fexpr__15052.cljs$core$IFn$_invoke$arity$0 ? fexpr__15052.cljs$core$IFn$_invoke$arity$0() : fexpr__15052.call(null));
})())].join('')], null));
});
pomodoro.batch.planning = (function pomodoro$batch$planning(state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_planning,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Planning a batch run"], null),pomodoro.ui_common.text_input(state,cljs.core.cst$kw$task_DASH_name,(function (p1__15055_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__15055_SHARP_,state);
})),pomodoro.ui_common.input_length(state,cljs.core.cst$kw$length,(function (p1__15056_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__15056_SHARP_,state);
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null),pomodoro.ui_common.button_element((function (){var G__15058 = cljs.core.cst$kw$active;
var fexpr__15057 = cljs.core.deref(state);
return (fexpr__15057.cljs$core$IFn$_invoke$arity$1 ? fexpr__15057.cljs$core$IFn$_invoke$arity$1(G__15058) : fexpr__15057.call(null,G__15058));
})(),"Add task",(function (){
return pomodoro.batch.add_new_task_to_plan(state);
})),pomodoro.ui_common.button_element((function (){var G__15060 = cljs.core.cst$kw$active;
var fexpr__15059 = cljs.core.deref(state);
return (fexpr__15059.cljs$core$IFn$_invoke$arity$1 ? fexpr__15059.cljs$core$IFn$_invoke$arity$1(G__15060) : fexpr__15059.call(null,G__15060));
})(),"Add short break",(function (){
return pomodoro.batch.short_break(state);
})),pomodoro.ui_common.button_element((function (){var G__15062 = cljs.core.cst$kw$active;
var fexpr__15061 = cljs.core.deref(state);
return (fexpr__15061.cljs$core$IFn$_invoke$arity$1 ? fexpr__15061.cljs$core$IFn$_invoke$arity$1(G__15062) : fexpr__15061.call(null,G__15062));
})(),"Add long break",(function (){
return pomodoro.batch.long_break(state);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),pomodoro.batch.plan_table(state),pomodoro.batch.plan_runner(state)], null);
});
