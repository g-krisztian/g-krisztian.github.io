// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.ui_common');
goog.require('pomodoro.single_run');
goog.require('pomodoro.batch');
goog.require('pomodoro.history');
goog.require('pomodoro.summary');
goog.require('pomodoro.time_format');
goog.require('pomodoro.dictionary');
pomodoro.main.set_title = (function pomodoro$main$set_title(state){
return document.title = ["Pompdoro - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))," ",(cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?["| ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$task_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(((1000) * cljs.core.cst$kw$elapsed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))].join(''):null)].join('');
});
pomodoro.main.show_view = (function pomodoro$main$show_view(state){
var pred__15013 = cljs.core._EQ_;
var expr__15014 = cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_((function (){var G__15016 = cljs.core.cst$kw$summary;
var G__15017 = expr__15014;
return (pred__15013.cljs$core$IFn$_invoke$arity$2 ? pred__15013.cljs$core$IFn$_invoke$arity$2(G__15016,G__15017) : pred__15013.call(null,G__15016,G__15017));
})())){
return pomodoro.summary.summary(state);
} else {
if(cljs.core.truth_((function (){var G__15018 = cljs.core.cst$kw$history;
var G__15019 = expr__15014;
return (pred__15013.cljs$core$IFn$_invoke$arity$2 ? pred__15013.cljs$core$IFn$_invoke$arity$2(G__15018,G__15019) : pred__15013.call(null,G__15018,G__15019));
})())){
return pomodoro.history.history_table(state);
} else {
if(cljs.core.truth_((function (){var G__15020 = cljs.core.cst$kw$planning;
var G__15021 = expr__15014;
return (pred__15013.cljs$core$IFn$_invoke$arity$2 ? pred__15013.cljs$core$IFn$_invoke$arity$2(G__15020,G__15021) : pred__15013.call(null,G__15020,G__15021));
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
var width = (0.94 * cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var button_width = (function (){var x__4222__auto__ = (150);
var y__4223__auto__ = (width * 0.25);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-group"], null)], null),(function (){var iter__4523__auto__ = ((function (views,width,button_width){
return (function pomodoro$main$choose_view_$_iter__15022(s__15023){
return (new cljs.core.LazySeq(null,((function (views,width,button_width){
return (function (){
var s__15023__$1 = s__15023;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15023__$1);
if(temp__5720__auto__){
var s__15023__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15023__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15023__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15025 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15024 = (0);
while(true){
if((i__15024 < size__4522__auto__)){
var view = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15024);
cljs.core.chunk_append(b__15025,pomodoro.ui_common.button_element((function (){var G__15027 = cljs.core.cst$kw$active;
var fexpr__15026 = cljs.core.deref(state);
return (fexpr__15026.cljs$core$IFn$_invoke$arity$1 ? fexpr__15026.cljs$core$IFn$_invoke$arity$1(G__15027) : fexpr__15026.call(null,G__15027));
})(),button_width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,view,button_width),((function (i__15024,view,c__4521__auto__,size__4522__auto__,b__15025,s__15023__$2,temp__5720__auto__,views,width,button_width){
return (function (){
return pomodoro.main.swap_view(state,view);
});})(i__15024,view,c__4521__auto__,size__4522__auto__,b__15025,s__15023__$2,temp__5720__auto__,views,width,button_width))
));

var G__15030 = (i__15024 + (1));
i__15024 = G__15030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15025),pomodoro$main$choose_view_$_iter__15022(cljs.core.chunk_rest(s__15023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15025),null);
}
} else {
var view = cljs.core.first(s__15023__$2);
return cljs.core.cons(pomodoro.ui_common.button_element((function (){var G__15029 = cljs.core.cst$kw$active;
var fexpr__15028 = cljs.core.deref(state);
return (fexpr__15028.cljs$core$IFn$_invoke$arity$1 ? fexpr__15028.cljs$core$IFn$_invoke$arity$1(G__15029) : fexpr__15028.call(null,G__15029));
})(),button_width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,view,button_width),((function (view,s__15023__$2,temp__5720__auto__,views,width,button_width){
return (function (){
return pomodoro.main.swap_view(state,view);
});})(view,s__15023__$2,temp__5720__auto__,views,width,button_width))
),pomodoro$main$choose_view_$_iter__15022(cljs.core.rest(s__15023__$2)));
}
} else {
return null;
}
break;
}
});})(views,width,button_width))
,null,null));
});})(views,width,button_width))
;
return iter__4523__auto__(views);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null);
});
pomodoro.main.lang_switcher = (function pomodoro$main$lang_switcher(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_lang_DASH_switcher,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,cljs.core.cst$kw$right,cljs.core.cst$kw$margin_DASH_top,"2.8rem"], null)], null),(function (){var label = pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$language);
var width = (1.1 * (pomodoro.dictionary.measure_text.cljs$core$IFn$_invoke$arity$1 ? pomodoro.dictionary.measure_text.cljs$core$IFn$_invoke$arity$1(label) : pomodoro.dictionary.measure_text.call(null,label)));
var dictionaries = cljs.core.cst$kw$dictionaries.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic(false,width,label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (label,width,dictionaries){
return (function (d){
return pomodoro.ui_common.dropdown_item(cljs.core.cst$kw$language.cljs$core$IFn$_invoke$arity$1(d),((function (label,width,dictionaries){
return (function (){
return pomodoro.dictionary.get_dictionary(state,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(d));
});})(label,width,dictionaries))
);
});})(label,width,dictionaries))
,dictionaries)], 0));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null);
});
pomodoro.main.main = (function pomodoro$main$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15033 = arguments.length;
var i__4731__auto___15034 = (0);
while(true){
if((i__4731__auto___15034 < len__4730__auto___15033)){
args__4736__auto__.push((arguments[i__4731__auto___15034]));

var G__15035 = (i__4731__auto___15034 + (1));
i__4731__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pomodoro.main.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pomodoro.main.main.cljs$core$IFn$_invoke$arity$variadic = (function (state,context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP__COLON_app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"max-content"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,((((385) > cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"Pomodoro":"Pomodoro app")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,["Time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pomodoro.time_format.render_time(pomodoro.time_format.correct_time(cljs.core.cst$kw$now.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))].join('')], null)], null)], null),context);
});

pomodoro.main.main.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pomodoro.main.main.cljs$lang$applyTo = (function (seq15031){
var G__15032 = cljs.core.first(seq15031);
var seq15031__$1 = cljs.core.next(seq15031);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15032,seq15031__$1);
});

