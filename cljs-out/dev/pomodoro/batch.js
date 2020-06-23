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
var full_width = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var skip_visible = cljs.core.not_empty(cljs.core.cst$kw$remain_DASH_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var width = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(and__4120__auto__)){
return skip_visible;
} else {
return and__4120__auto__;
}
})())?(full_width * 0.33):(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?(full_width * 0.5):full_width
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.hideable_button_element((function (){var G__14950 = cljs.core.cst$kw$active;
var fexpr__14949 = cljs.core.deref(state);
return (fexpr__14949.cljs$core$IFn$_invoke$arity$1 ? fexpr__14949.cljs$core$IFn$_invoke$arity$1(G__14950) : fexpr__14949.call(null,G__14950));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$start_DASH_batch),((function (full_width,skip_visible,width){
return (function (){
return pomodoro.action.start_plan(state);
});})(full_width,skip_visible,width))
),pomodoro.ui_common.hideable_button_element((function (){var G__14952 = cljs.core.cst$kw$paused;
var fexpr__14951 = cljs.core.deref(state);
return (fexpr__14951.cljs$core$IFn$_invoke$arity$1 ? fexpr__14951.cljs$core$IFn$_invoke$arity$1(G__14952) : fexpr__14951.call(null,G__14952));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$pause_DASH_timer),((function (full_width,skip_visible,width){
return (function (){
return pomodoro.action.pause_button_on_click(state);
});})(full_width,skip_visible,width))
),pomodoro.ui_common.hideable_button_element((function (){var G__14954 = cljs.core.cst$kw$resume;
var fexpr__14953 = cljs.core.deref(state);
return (fexpr__14953.cljs$core$IFn$_invoke$arity$1 ? fexpr__14953.cljs$core$IFn$_invoke$arity$1(G__14954) : fexpr__14953.call(null,G__14954));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$resume_DASH_timer),((function (full_width,skip_visible,width){
return (function (){
return pomodoro.action.pause_button_on_click(state);
});})(full_width,skip_visible,width))
),(cljs.core.truth_(skip_visible)?pomodoro.ui_common.hideable_button_element((function (){var G__14956 = cljs.core.cst$kw$stop;
var fexpr__14955 = cljs.core.deref(state);
return (fexpr__14955.cljs$core$IFn$_invoke$arity$1 ? fexpr__14955.cljs$core$IFn$_invoke$arity$1(G__14956) : fexpr__14955.call(null,G__14956));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$run_DASH_next),((function (full_width,skip_visible,width){
return (function (){
return pomodoro.batch.run_next_item(state);
});})(full_width,skip_visible,width))
):null),pomodoro.ui_common.hideable_button_element((function (){var G__14958 = cljs.core.cst$kw$stop;
var fexpr__14957 = cljs.core.deref(state);
return (fexpr__14957.cljs$core$IFn$_invoke$arity$1 ? fexpr__14957.cljs$core$IFn$_invoke$arity$1(G__14958) : fexpr__14957.call(null,G__14958));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$stop_DASH_batch),((function (full_width,skip_visible,width){
return (function (){
return pomodoro.action.stop_button_on_click(state);
});})(full_width,skip_visible,width))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.progress_bar(state)], null)], null);
} else {
return null;
}
});
pomodoro.batch.plan_table = (function pomodoro$batch$plan_table(state){
var temp__5720__auto__ = pomodoro.cookie_storage.get_plan();
if(cljs.core.truth_(temp__5720__auto__)){
var plan = temp__5720__auto__;
var full_width = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
var width = (function (){var x__4222__auto__ = (120);
var y__4223__auto__ = (full_width * 0.33);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_plan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"plan",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(function (){var x__4222__auto__ = (600);
var y__4223__auto__ = full_width;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.action.dict(state,cljs.core.cst$kw$task_DASH_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.action.dict(state,cljs.core.cst$kw$planed_DASH_time)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$length_DASH_in_DASH_seconds,plan))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.ui_common.button_element((function (){var G__14960 = cljs.core.cst$kw$active;
var fexpr__14959 = cljs.core.deref(state);
return (fexpr__14959.cljs$core$IFn$_invoke$arity$1 ? fexpr__14959.cljs$core$IFn$_invoke$arity$1(G__14960) : fexpr__14959.call(null,G__14960));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$clear_DASH_plan),((function (full_width,width,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.delete_plan();
});})(full_width,width,plan,temp__5720__auto__))
)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (full_width,width,plan,temp__5720__auto__){
return (function pomodoro$batch$plan_table_$_iter__14961(s__14962){
return (new cljs.core.LazySeq(null,((function (full_width,width,plan,temp__5720__auto__){
return (function (){
var s__14962__$1 = s__14962;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__14962__$1);
if(temp__5720__auto____$1){
var s__14962__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14962__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14962__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14964 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14963 = (0);
while(true){
if((i__14963 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14963);
cljs.core.chunk_append(b__14964,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__14966 = cljs.core.cst$kw$active;
var fexpr__14965 = cljs.core.deref(state);
return (fexpr__14965.cljs$core$IFn$_invoke$arity$1 ? fexpr__14965.cljs$core$IFn$_invoke$arity$1(G__14966) : fexpr__14965.call(null,G__14966));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$remove),((function (i__14963,task,c__4521__auto__,size__4522__auto__,b__14964,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__14963,task,c__4521__auto__,size__4522__auto__,b__14964,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(i__14963,task,c__4521__auto__,size__4522__auto__,b__14964,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__))
,plan));
});})(i__14963,task,c__4521__auto__,size__4522__auto__,b__14964,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__))
)], null)], null));

var G__14969 = (i__14963 + (1));
i__14963 = G__14969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14964),pomodoro$batch$plan_table_$_iter__14961(cljs.core.chunk_rest(s__14962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14964),null);
}
} else {
var task = cljs.core.first(s__14962__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(pomodoro.batch.get_task_in_milisec(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__14968 = cljs.core.cst$kw$active;
var fexpr__14967 = cljs.core.deref(state);
return (fexpr__14967.cljs$core$IFn$_invoke$arity$1 ? fexpr__14967.cljs$core$IFn$_invoke$arity$1(G__14968) : fexpr__14967.call(null,G__14968));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$remove),((function (task,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__){
return (function (){
return pomodoro.cookie_storage.set_plan(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (task,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__){
return (function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,task);
});})(task,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__))
,plan));
});})(task,s__14962__$2,temp__5720__auto____$1,full_width,width,plan,temp__5720__auto__))
)], null)], null),pomodoro$batch$plan_table_$_iter__14961(cljs.core.rest(s__14962__$2)));
}
} else {
return null;
}
break;
}
});})(full_width,width,plan,temp__5720__auto__))
,null,null));
});})(full_width,width,plan,temp__5720__auto__))
;
return iter__4523__auto__(plan);
})())], null)], null);
} else {
return null;
}
});
pomodoro.batch.short_break = (function pomodoro$batch$short_break(state){
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,pomodoro.action.dict(state,cljs.core.cst$kw$short_DASH_break),cljs.core.cst$kw$length_DASH_in_DASH_seconds,(300),cljs.core.cst$kw$length,(5),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14977 = (function (){var G__14979 = cljs.core.cst$kw$get_DASH_key;
var fexpr__14978 = cljs.core.deref(state);
return (fexpr__14978.cljs$core$IFn$_invoke$arity$1 ? fexpr__14978.cljs$core$IFn$_invoke$arity$1(G__14979) : fexpr__14978.call(null,G__14979));
})();
return (fexpr__14977.cljs$core$IFn$_invoke$arity$0 ? fexpr__14977.cljs$core$IFn$_invoke$arity$0() : fexpr__14977.call(null));
})())].join('')], null));
});
pomodoro.batch.long_break = (function pomodoro$batch$long_break(state){
return pomodoro.batch.add_to_plan(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$task_DASH_name,pomodoro.action.dict(state,cljs.core.cst$kw$long_DASH_break),cljs.core.cst$kw$length_DASH_in_DASH_seconds,(900),cljs.core.cst$kw$length,(15),cljs.core.cst$kw$unit,cljs.core.cst$kw$min,cljs.core.cst$kw$key,["plan_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14987 = (function (){var G__14989 = cljs.core.cst$kw$get_DASH_key;
var fexpr__14988 = cljs.core.deref(state);
return (fexpr__14988.cljs$core$IFn$_invoke$arity$1 ? fexpr__14988.cljs$core$IFn$_invoke$arity$1(G__14989) : fexpr__14988.call(null,G__14989));
})();
return (fexpr__14987.cljs$core$IFn$_invoke$arity$0 ? fexpr__14987.cljs$core$IFn$_invoke$arity$0() : fexpr__14987.call(null));
})())].join('')], null));
});
pomodoro.batch.planning = (function pomodoro$batch$planning(state){
var width = (function (){var x__4222__auto__ = (200);
var y__4223__auto__ = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.315);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_planning,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,pomodoro.action.dict(state,cljs.core.cst$kw$planning)], null),pomodoro.ui_common.text_input(state,cljs.core.cst$kw$task_DASH_name,((function (width){
return (function (p1__14990_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__14990_SHARP_,state);
});})(width))
),pomodoro.ui_common.input_length(state,cljs.core.cst$kw$length,((function (width){
return (function (p1__14991_SHARP_){
return pomodoro.batch.add_to_plan_on_enter(p1__14991_SHARP_,state);
});})(width))
),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.button_element((function (){var G__14993 = cljs.core.cst$kw$active;
var fexpr__14992 = cljs.core.deref(state);
return (fexpr__14992.cljs$core$IFn$_invoke$arity$1 ? fexpr__14992.cljs$core$IFn$_invoke$arity$1(G__14993) : fexpr__14992.call(null,G__14993));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$add_DASH_task),((function (width){
return (function (){
return pomodoro.batch.add_new_task_to_plan(state);
});})(width))
),pomodoro.ui_common.button_element((function (){var G__14995 = cljs.core.cst$kw$active;
var fexpr__14994 = cljs.core.deref(state);
return (fexpr__14994.cljs$core$IFn$_invoke$arity$1 ? fexpr__14994.cljs$core$IFn$_invoke$arity$1(G__14995) : fexpr__14994.call(null,G__14995));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$short_DASH_break),((function (width){
return (function (){
return pomodoro.batch.short_break(state);
});})(width))
),pomodoro.ui_common.button_element((function (){var G__14997 = cljs.core.cst$kw$active;
var fexpr__14996 = cljs.core.deref(state);
return (fexpr__14996.cljs$core$IFn$_invoke$arity$1 ? fexpr__14996.cljs$core$IFn$_invoke$arity$1(G__14997) : fexpr__14996.call(null,G__14997));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$long_DASH_break),((function (width){
return (function (){
return pomodoro.batch.long_break(state);
});})(width))
)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),pomodoro.batch.plan_table(state),pomodoro.batch.plan_runner(state)], null);
});
