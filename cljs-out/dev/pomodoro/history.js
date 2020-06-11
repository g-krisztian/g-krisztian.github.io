// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.history');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.time_format');
goog.require('pomodoro.action');
goog.require('pomodoro.cookie_storage');
pomodoro.history.history_table = (function pomodoro$history$history_table(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"History"], null),(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,pomodoro.ui_common.control_buttons(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null):null),(function (){var history = pomodoro.cookie_storage.get_history();
if(cljs.core.seq_QMARK_(history)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"table table-striped table-bordered",cljs.core.cst$kw$id,"history",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"597px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead-dark"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Task name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Start time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Planned duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Real duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,pomodoro.ui_common.button_element((function (){var G__14978 = cljs.core.cst$kw$active;
var fexpr__14977 = cljs.core.deref(state);
return (fexpr__14977.cljs$core$IFn$_invoke$arity$1 ? fexpr__14977.cljs$core$IFn$_invoke$arity$1(G__14978) : fexpr__14977.call(null,G__14978));
})(),"Delete history",pomodoro.cookie_storage.delete_history)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__4523__auto__ = ((function (history){
return (function pomodoro$history$history_table_$_iter__14979(s__14980){
return (new cljs.core.LazySeq(null,((function (history){
return (function (){
var s__14980__$1 = s__14980;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14980__$1);
if(temp__5720__auto__){
var s__14980__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14980__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14980__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14982 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14981 = (0);
while(true){
if((i__14981 < size__4522__auto__)){
var task = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14981);
cljs.core.chunk_append(b__14982,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(new Date(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(task))).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(((1000) * cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__14984 = cljs.core.cst$kw$active;
var fexpr__14983 = cljs.core.deref(state);
return (fexpr__14983.cljs$core$IFn$_invoke$arity$1 ? fexpr__14983.cljs$core$IFn$_invoke$arity$1(G__14984) : fexpr__14983.call(null,G__14984));
})(),"Restart",((function (i__14981,task,c__4521__auto__,size__4522__auto__,b__14982,s__14980__$2,temp__5720__auto__,history){
return (function (){
return pomodoro.action.restart(state,task);
});})(i__14981,task,c__4521__auto__,size__4522__auto__,b__14982,s__14980__$2,temp__5720__auto__,history))
)], null)], null));

var G__14987 = (i__14981 + (1));
i__14981 = G__14987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14982),pomodoro$history$history_table_$_iter__14979(cljs.core.chunk_rest(s__14980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14982),null);
}
} else {
var task = cljs.core.first(s__14980__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(new Date(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(task))).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(((1000) * cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(task)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.time_format.render_time(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,pomodoro.ui_common.button_element((function (){var G__14986 = cljs.core.cst$kw$active;
var fexpr__14985 = cljs.core.deref(state);
return (fexpr__14985.cljs$core$IFn$_invoke$arity$1 ? fexpr__14985.cljs$core$IFn$_invoke$arity$1(G__14986) : fexpr__14985.call(null,G__14986));
})(),"Restart",((function (task,s__14980__$2,temp__5720__auto__,history){
return (function (){
return pomodoro.action.restart(state,task);
});})(task,s__14980__$2,temp__5720__auto__,history))
)], null)], null),pomodoro$history$history_table_$_iter__14979(cljs.core.rest(s__14980__$2)));
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
return iter__4523__auto__(history);
})())], null);
} else {
return null;
}
})()], null);
});
