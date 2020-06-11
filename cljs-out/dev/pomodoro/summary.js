// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.summary');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.time_format');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.action');
goog.require('pomodoro.cookie_storage');
pomodoro.summary.sum_usage = (function pomodoro$summary$sum_usage(history){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14994){
var vec__14995 = p__14994;
var task_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(1),null);
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4523__auto__ = ((function (vec__14995,task_name,v){
return (function pomodoro$summary$sum_usage_$_iter__14998(s__14999){
return (new cljs.core.LazySeq(null,((function (vec__14995,task_name,v){
return (function (){
var s__14999__$1 = s__14999;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14999__$1);
if(temp__5720__auto__){
var s__14999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14999__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14999__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15001 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15000 = (0);
while(true){
if((i__15000 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15000);
cljs.core.chunk_append(b__15001,cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(d));

var G__15002 = (i__15000 + (1));
i__15000 = G__15002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15001),pomodoro$summary$sum_usage_$_iter__14998(cljs.core.chunk_rest(s__14999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15001),null);
}
} else {
var d = cljs.core.first(s__14999__$2);
return cljs.core.cons(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(d),pomodoro$summary$sum_usage_$_iter__14998(cljs.core.rest(s__14999__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14995,task_name,v))
,null,null));
});})(vec__14995,task_name,v))
;
return iter__4523__auto__(v);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$task_DASH_name,task_name,cljs.core.cst$kw$length,length], null);
}),cljs.core.group_by(cljs.core.cst$kw$task_DASH_name,history));
});
pomodoro.summary.summary = (function pomodoro$summary$summary(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Summary"], null),(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,pomodoro.ui_common.control_buttons(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null):null),(function (){var history = pomodoro.cookie_storage.get_history();
if(cljs.core.seq_QMARK_(history)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"summary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Task name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Spent time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,""], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (history){
return (function pomodoro$summary$summary_$_iter__15003(s__15004){
return (new cljs.core.LazySeq(null,((function (history){
return (function (){
var s__15004__$1 = s__15004;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15004__$1);
if(temp__5720__auto__){
var s__15004__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15004__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15004__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15006 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15005 = (0);
while(true){
if((i__15005 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15005);
cljs.core.chunk_append(b__15006,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15008 = cljs.core.cst$kw$active;
var fexpr__15007 = cljs.core.deref(state);
return (fexpr__15007.cljs$core$IFn$_invoke$arity$1 ? fexpr__15007.cljs$core$IFn$_invoke$arity$1(G__15008) : fexpr__15007.call(null,G__15008));
})(),"Restart",((function (i__15005,task,c__4521__auto__,size__4522__auto__,b__15006,s__15004__$2,temp__5720__auto__,history){
return (function (){
return pomodoro.action.restart(state,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(task,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length], null),cljs.core.quot,(1000)));
});})(i__15005,task,c__4521__auto__,size__4522__auto__,b__15006,s__15004__$2,temp__5720__auto__,history))
)], null)], null));

var G__15011 = (i__15005 + (1));
i__15005 = G__15011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15006),pomodoro$summary$summary_$_iter__15003(cljs.core.chunk_rest(s__15004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15006),null);
}
} else {
var task = cljs.core.first(s__15004__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__15010 = cljs.core.cst$kw$active;
var fexpr__15009 = cljs.core.deref(state);
return (fexpr__15009.cljs$core$IFn$_invoke$arity$1 ? fexpr__15009.cljs$core$IFn$_invoke$arity$1(G__15010) : fexpr__15009.call(null,G__15010));
})(),"Restart",((function (task,s__15004__$2,temp__5720__auto__,history){
return (function (){
return pomodoro.action.restart(state,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(task,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$length], null),cljs.core.quot,(1000)));
});})(task,s__15004__$2,temp__5720__auto__,history))
)], null)], null),pomodoro$summary$summary_$_iter__15003(cljs.core.rest(s__15004__$2)));
}
} else {
return null;
}
break;
}
});})(history))
,null,null));
});})(history))
;
return iter__4523__auto__(pomodoro.summary.sum_usage(history));
})())], null);
} else {
return null;
}
})()], null);
});
