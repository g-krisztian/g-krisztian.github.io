// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.action');
goog.require('pomodoro.single_run');
goog.require('pomodoro.batch');
goog.require('pomodoro.history');
goog.require('pomodoro.summary');
goog.require('pomodoro.time_format');
pomodoro.main.show_view = (function pomodoro$main$show_view(state){
var pred__15000 = cljs.core._EQ_;
var expr__15001 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_((function (){var G__15003 = cljs.core.cst$kw$summary;
var G__15004 = expr__15001;
return (pred__15000.cljs$core$IFn$_invoke$arity$2 ? pred__15000.cljs$core$IFn$_invoke$arity$2(G__15003,G__15004) : pred__15000.call(null,G__15003,G__15004));
})())){
return pomodoro.summary.summary(state);
} else {
if(cljs.core.truth_((function (){var G__15005 = cljs.core.cst$kw$history;
var G__15006 = expr__15001;
return (pred__15000.cljs$core$IFn$_invoke$arity$2 ? pred__15000.cljs$core$IFn$_invoke$arity$2(G__15005,G__15006) : pred__15000.call(null,G__15005,G__15006));
})())){
return pomodoro.history.history_table(state);
} else {
if(cljs.core.truth_((function (){var G__15007 = cljs.core.cst$kw$planning;
var G__15008 = expr__15001;
return (pred__15000.cljs$core$IFn$_invoke$arity$2 ? pred__15000.cljs$core$IFn$_invoke$arity$2(G__15007,G__15008) : pred__15000.call(null,G__15007,G__15008));
})())){
return pomodoro.batch.planning(state);
} else {
return pomodoro.single_run.single_run(state);
}
}
}
});
pomodoro.main.swap_view = (function pomodoro$main$swap_view(state,view){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,view], null));
});
pomodoro.main.choose_view = (function pomodoro$main$choose_view(state){
var views = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$single_DASH_run,cljs.core.cst$kw$planning,cljs.core.cst$kw$history,cljs.core.cst$kw$summary], null);
var width = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"10%"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null)], null),(function (){var iter__4523__auto__ = ((function (views,width){
return (function pomodoro$main$choose_view_$_iter__15009(s__15010){
return (new cljs.core.LazySeq(null,((function (views,width){
return (function (){
var s__15010__$1 = s__15010;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15010__$1);
if(temp__5720__auto__){
var s__15010__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15010__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15010__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15012 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15011 = (0);
while(true){
if((i__15011 < size__4522__auto__)){
var view = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15011);
cljs.core.chunk_append(b__15012,pomodoro.ui_common.button_element((function (){var G__15014 = cljs.core.cst$kw$active;
var fexpr__15013 = cljs.core.deref(state);
return (fexpr__15013.cljs$core$IFn$_invoke$arity$1 ? fexpr__15013.cljs$core$IFn$_invoke$arity$1(G__15014) : fexpr__15013.call(null,G__15014));
})(),(function (){var x__4222__auto__ = (150);
var y__4223__auto__ = (width * 0.238);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),pomodoro.action.dict(state,view),((function (i__15011,view,c__4521__auto__,size__4522__auto__,b__15012,s__15010__$2,temp__5720__auto__,views,width){
return (function (){
return pomodoro.main.swap_view(state,view);
});})(i__15011,view,c__4521__auto__,size__4522__auto__,b__15012,s__15010__$2,temp__5720__auto__,views,width))
));

var G__15017 = (i__15011 + (1));
i__15011 = G__15017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15012),pomodoro$main$choose_view_$_iter__15009(cljs.core.chunk_rest(s__15010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15012),null);
}
} else {
var view = cljs.core.first(s__15010__$2);
return cljs.core.cons(pomodoro.ui_common.button_element((function (){var G__15016 = cljs.core.cst$kw$active;
var fexpr__15015 = cljs.core.deref(state);
return (fexpr__15015.cljs$core$IFn$_invoke$arity$1 ? fexpr__15015.cljs$core$IFn$_invoke$arity$1(G__15016) : fexpr__15015.call(null,G__15016));
})(),(function (){var x__4222__auto__ = (150);
var y__4223__auto__ = (width * 0.238);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),pomodoro.action.dict(state,view),((function (view,s__15010__$2,temp__5720__auto__,views,width){
return (function (){
return pomodoro.main.swap_view(state,view);
});})(view,s__15010__$2,temp__5720__auto__,views,width))
),pomodoro$main$choose_view_$_iter__15009(cljs.core.rest(s__15010__$2)));
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
pomodoro.main.main = (function pomodoro$main$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15020 = arguments.length;
var i__4731__auto___15021 = (0);
while(true){
if((i__4731__auto___15021 < len__4730__auto___15020)){
args__4736__auto__.push((arguments[i__4731__auto___15021]));

var G__15022 = (i__4731__auto___15021 + (1));
i__4731__auto___15021 = G__15022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pomodoro.main.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pomodoro.main.main.cljs$core$IFn$_invoke$arity$variadic = (function (state,context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP__COLON_app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"max-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Pomodoro app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,["Time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(pomodoro.time_format.correct_time(cljs.core.cst$kw$now.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))].join('')], null)], null),context);
});

pomodoro.main.main.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pomodoro.main.main.cljs$lang$applyTo = (function (seq15018){
var G__15019 = cljs.core.first(seq15018);
var seq15018__$1 = cljs.core.next(seq15018);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15019,seq15018__$1);
});

