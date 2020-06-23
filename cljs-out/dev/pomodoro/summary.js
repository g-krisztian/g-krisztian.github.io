// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.summary');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.time_format');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.action');
goog.require('pomodoro.cookie_storage');
pomodoro.summary.sum_usage = (function pomodoro$summary$sum_usage(history){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14929){
var vec__14930 = p__14929;
var task_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14930,(1),null);
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4523__auto__ = ((function (vec__14930,task_name,v){
return (function pomodoro$summary$sum_usage_$_iter__14933(s__14934){
return (new cljs.core.LazySeq(null,((function (vec__14930,task_name,v){
return (function (){
var s__14934__$1 = s__14934;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14934__$1);
if(temp__5720__auto__){
var s__14934__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14934__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14934__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14936 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14935 = (0);
while(true){
if((i__14935 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14935);
cljs.core.chunk_append(b__14936,cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(d));

var G__14937 = (i__14935 + (1));
i__14935 = G__14937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14936),pomodoro$summary$sum_usage_$_iter__14933(cljs.core.chunk_rest(s__14934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14936),null);
}
} else {
var d = cljs.core.first(s__14934__$2);
return cljs.core.cons(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(d),pomodoro$summary$sum_usage_$_iter__14933(cljs.core.rest(s__14934__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14930,task_name,v))
,null,null));
});})(vec__14930,task_name,v))
;
return iter__4523__auto__(v);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$task_DASH_name,task_name,cljs.core.cst$kw$length,length], null);
}),cljs.core.group_by(cljs.core.cst$kw$task_DASH_name,history));
});
pomodoro.summary.summary = (function pomodoro$summary$summary(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,pomodoro.action.dict(state,cljs.core.cst$kw$summary)], null),(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,pomodoro.ui_common.control_buttons(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null):null),(function (){var history = pomodoro.cookie_storage.get_history();
var full_width = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
var width = (function (){var x__4222__auto__ = (120);
var y__4223__auto__ = (full_width * 0.33);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
if(cljs.core.seq_QMARK_(history)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"summary",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(function (){var x__4222__auto__ = (600);
var y__4223__auto__ = full_width;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.action.dict(state,cljs.core.cst$kw$task_DASH_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.action.dict(state,cljs.core.cst$kw$spent_DASH_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,""], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (history,full_width,width){
return (function pomodoro$summary$summary_$_iter__14938(s__14939){
return (new cljs.core.LazySeq(null,((function (history,full_width,width){
return (function (){
var s__14939__$1 = s__14939;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14939__$1);
if(temp__5720__auto__){
var s__14939__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14939__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14939__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14941 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14940 = (0);
while(true){
if((i__14940 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14940);
cljs.core.chunk_append(b__14941,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)], null),pomodoro.ui_common.button_element((function (){var G__14943 = cljs.core.cst$kw$active;
var fexpr__14942 = cljs.core.deref(state);
return (fexpr__14942.cljs$core$IFn$_invoke$arity$1 ? fexpr__14942.cljs$core$IFn$_invoke$arity$1(G__14943) : fexpr__14942.call(null,G__14943));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$restart),((function (i__14940,task,c__4521__auto__,size__4522__auto__,b__14941,s__14939__$2,temp__5720__auto__,history,full_width,width){
return (function (){
return pomodoro.action.restart(state,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(task,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length], null),cljs.core.quot,(1000)));
});})(i__14940,task,c__4521__auto__,size__4522__auto__,b__14941,s__14939__$2,temp__5720__auto__,history,full_width,width))
)], null)], null));

var G__14946 = (i__14940 + (1));
i__14940 = G__14946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14941),pomodoro$summary$summary_$_iter__14938(cljs.core.chunk_rest(s__14939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14941),null);
}
} else {
var task = cljs.core.first(s__14939__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)], null),pomodoro.ui_common.button_element((function (){var G__14945 = cljs.core.cst$kw$active;
var fexpr__14944 = cljs.core.deref(state);
return (fexpr__14944.cljs$core$IFn$_invoke$arity$1 ? fexpr__14944.cljs$core$IFn$_invoke$arity$1(G__14945) : fexpr__14944.call(null,G__14945));
})(),width,pomodoro.action.dict(state,cljs.core.cst$kw$restart),((function (task,s__14939__$2,temp__5720__auto__,history,full_width,width){
return (function (){
return pomodoro.action.restart(state,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(task,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length], null),cljs.core.quot,(1000)));
});})(task,s__14939__$2,temp__5720__auto__,history,full_width,width))
)], null)], null),pomodoro$summary$summary_$_iter__14938(cljs.core.rest(s__14939__$2)));
}
} else {
return null;
}
break;
}
});})(history,full_width,width))
,null,null));
});})(history,full_width,width))
;
return iter__4523__auto__(pomodoro.summary.sum_usage(history));
})())], null);
} else {
return null;
}
})()], null);
});
