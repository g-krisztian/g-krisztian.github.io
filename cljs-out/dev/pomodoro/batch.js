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
pomodoro.batch.run_next_item = (function pomodoro$batch$run_next_item(state,now){
var plan = cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
pomodoro.action.add_to_history(state,now);

if(cljs.core.empty_QMARK_(plan)){
return pomodoro.action.reset_task(state);
} else {
return pomodoro.action.run_plan(state);
}
});
pomodoro.batch.plan_runner = (function pomodoro$batch$plan_runner(state){
if(cljs.core.truth_(pomodoro.cookie_storage.contains_plan_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.hideable_button_element((function (){var G__15030 = cljs.core.cst$kw$active;
var fexpr__15029 = cljs.core.deref(state);
return (fexpr__15029.cljs$core$IFn$_invoke$arity$1 ? fexpr__15029.cljs$core$IFn$_invoke$arity$1(G__15030) : fexpr__15029.call(null,G__15030));
})(),"Start batch",(function (){
return pomodoro.action.start_plan(state);
})),pomodoro.ui_common.hideable_button_element((function (){var G__15032 = cljs.core.cst$kw$paused;
var fexpr__15031 = cljs.core.deref(state);
return (fexpr__15031.cljs$core$IFn$_invoke$arity$1 ? fexpr__15031.cljs$core$IFn$_invoke$arity$1(G__15032) : fexpr__15031.call(null,G__15032));
})(),"Pause timer",(function (){
return pomodoro.action.pause_button_on_click(state);
})),pomodoro.ui_common.hideable_button_element((function (){var G__15034 = cljs.core.cst$kw$resume;
var fexpr__15033 = cljs.core.deref(state);
return (fexpr__15033.cljs$core$IFn$_invoke$arity$1 ? fexpr__15033.cljs$core$IFn$_invoke$arity$1(G__15034) : fexpr__15033.call(null,G__15034));
})(),"Resume timer",(function (){
return pomodoro.action.pause_button_on_click(state);
})),((cljs.core.empty_QMARK_(cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?null:pomodoro.ui_common.hideable_button_element((function (){var G__15036 = cljs.core.cst$kw$stop;
var fexpr__15035 = cljs.core.deref(state);
return (fexpr__15035.cljs$core$IFn$_invoke$arity$1 ? fexpr__15035.cljs$core$IFn$_invoke$arity$1(G__15036) : fexpr__15035.call(null,G__15036));
})(),"Run next",(function (){
return pomodoro.batch.run_next_item(state,(new Date()).getTime());
}))),pomodoro.ui_common.hideable_button_element((function (){var G__15038 = cljs.core.cst$kw$stop;
var fexpr__15037 = cljs.core.deref(state);
return (fexpr__15037.cljs$core$IFn$_invoke$arity$1 ? fexpr__15037.cljs$core$IFn$_invoke$arity$1(G__15038) : fexpr__15037.call(null,G__15038));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_plan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"summary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Task name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,["Planned time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$length_DASH_in_DASH_seconds,plan))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.ui_common.button_element((function (){var G__15040 = cljs.core.cst$kw$active;
var fexpr__15039 = cljs.core.deref(state);
return (fexpr__15039.cljs$core$IFn$_invoke$arity$1 ? fexpr__15039.cljs$core$IFn$_invoke$arity$1(G__15040) : fexpr__15039.call(null,G__15040));
})(),"Clear plan",((function (plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.delete_plan();
});})(plan,temp__5720__auto__))
)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (plan,temp__5720__auto__){
return (function pomodoro$batch$plan_table_$_iter__15041(s__15042){
return (new cljs.core.LazySeq(null,((function (plan,temp__5720__auto__){
return (function (){
var s__15042__$1 = s__15042;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__15042__$1);
if(temp__5720__auto____$1){
var s__15042__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15042__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15042__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15044 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15043 = (0);
while(true){
if((i__15043 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15043);
cljs.core.chunk_append(b__15044,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15046 = cljs.core.cst$kw$active;
var fexpr__15045 = cljs.core.deref(state);
return (fexpr__15045.cljs$core$IFn$_invoke$arity$1 ? fexpr__15045.cljs$core$IFn$_invoke$arity$1(G__15046) : fexpr__15045.call(null,G__15046));
})(),"Remove",((function (i__15043,task,c__4521__auto__,size__4522__auto__,b__15044,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__15043,task,c__4521__auto__,size__4522__auto__,b__15044,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(i__15043,task,c__4521__auto__,size__4522__auto__,b__15044,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
,plan));
});})(i__15043,task,c__4521__auto__,size__4522__auto__,b__15044,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
)], null)], null));

var G__15049 = (i__15043 + (1));
i__15043 = G__15049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15044),pomodoro$batch$plan_table_$_iter__15041(cljs.core.chunk_rest(s__15042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15044),null);
}
} else {
var task = cljs.core.first(s__15042__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15048 = cljs.core.cst$kw$active;
var fexpr__15047 = cljs.core.deref(state);
return (fexpr__15047.cljs$core$IFn$_invoke$arity$1 ? fexpr__15047.cljs$core$IFn$_invoke$arity$1(G__15048) : fexpr__15047.call(null,G__15048));
})(),"Remove",((function (task,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (task,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(task,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
,plan));
});})(task,s__15042__$2,temp__5720__auto____$1,plan,temp__5720__auto__))
)], null)], null),pomodoro$batch$plan_table_$_iter__15041(cljs.core.rest(s__15042__$2)));
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
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,"Short break",cljs.core.cst$kw$length_DASH_in_DASH_seconds,(300),cljs.core.cst$kw$length,(5),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15057 = (function (){var G__15059 = cljs.core.cst$kw$get_DASH_key;
var fexpr__15058 = cljs.core.deref(state);
return (fexpr__15058.cljs$core$IFn$_invoke$arity$1 ? fexpr__15058.cljs$core$IFn$_invoke$arity$1(G__15059) : fexpr__15058.call(null,G__15059));
})();
return (fexpr__15057.cljs$core$IFn$_invoke$arity$0 ? fexpr__15057.cljs$core$IFn$_invoke$arity$0() : fexpr__15057.call(null));
})())].join('')], null));
});
pomodoro.batch.long_break = (function pomodoro$batch$long_break(state){
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,"Long break",cljs.core.cst$kw$length_DASH_in_DASH_seconds,(900),cljs.core.cst$kw$length,(15),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15067 = (function (){var G__15069 = cljs.core.cst$kw$get_DASH_key;
var fexpr__15068 = cljs.core.deref(state);
return (fexpr__15068.cljs$core$IFn$_invoke$arity$1 ? fexpr__15068.cljs$core$IFn$_invoke$arity$1(G__15069) : fexpr__15068.call(null,G__15069));
})();
return (fexpr__15067.cljs$core$IFn$_invoke$arity$0 ? fexpr__15067.cljs$core$IFn$_invoke$arity$0() : fexpr__15067.call(null));
})())].join('')], null));
});
pomodoro.batch.planning = (function pomodoro$batch$planning(state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_planning,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Planning a batch run"], null),pomodoro.ui_common.text_input(state,cljs.core.cst$kw$task_DASH_name,(function (p1__15070_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__15070_SHARP_,state);
})),pomodoro.ui_common.input_length(state,cljs.core.cst$kw$length,(function (p1__15071_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__15071_SHARP_,state);
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null),pomodoro.ui_common.button_element((function (){var G__15073 = cljs.core.cst$kw$active;
var fexpr__15072 = cljs.core.deref(state);
return (fexpr__15072.cljs$core$IFn$_invoke$arity$1 ? fexpr__15072.cljs$core$IFn$_invoke$arity$1(G__15073) : fexpr__15072.call(null,G__15073));
})(),"Add task",(function (){
return pomodoro.batch.add_new_task_to_plan(state);
})),pomodoro.ui_common.button_element((function (){var G__15075 = cljs.core.cst$kw$active;
var fexpr__15074 = cljs.core.deref(state);
return (fexpr__15074.cljs$core$IFn$_invoke$arity$1 ? fexpr__15074.cljs$core$IFn$_invoke$arity$1(G__15075) : fexpr__15074.call(null,G__15075));
})(),"Add short break",(function (){
return pomodoro.batch.short_break(state);
})),pomodoro.ui_common.button_element((function (){var G__15077 = cljs.core.cst$kw$active;
var fexpr__15076 = cljs.core.deref(state);
return (fexpr__15076.cljs$core$IFn$_invoke$arity$1 ? fexpr__15076.cljs$core$IFn$_invoke$arity$1(G__15077) : fexpr__15076.call(null,G__15077));
})(),"Add long break",(function (){
return pomodoro.batch.long_break(state);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),pomodoro.batch.plan_table(state),pomodoro.batch.plan_runner(state)], null);
});
