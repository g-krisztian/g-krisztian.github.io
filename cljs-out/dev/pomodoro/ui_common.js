// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.ui_common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.time_format');
goog.require('pomodoro.action');
pomodoro.ui_common.common_button_style = (function pomodoro$ui_common$common_button_style(width,value,callback){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$class,"btn btn-secondary",cljs.core.cst$kw$value,value,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$paddingLeft,"0.3rem",cljs.core.cst$kw$paddingRight,"0.3rem"], null),cljs.core.cst$kw$on_DASH_click,callback], null);
});
pomodoro.ui_common.button_element = (function pomodoro$ui_common$button_element(disabled,width,value,callback){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.ui_common.common_button_style(width,value,callback),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,disabled], null)], 0))], null);
});
pomodoro.ui_common.hideable_button_element = (function pomodoro$ui_common$hideable_button_element(hide,width,value,callback){
if(cljs.core.truth_(hide)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,pomodoro.ui_common.common_button_style(width,value,callback)], null);
}
});
pomodoro.ui_common.dropdown_item = (function pomodoro$ui_common$dropdown_item(label,action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"dropdown-item",cljs.core.cst$kw$on_DASH_click,action,cljs.core.cst$kw$key,label], null),label], null);
});
pomodoro.ui_common.dropdown = (function pomodoro$ui_common$dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14957 = arguments.length;
var i__4731__auto___14958 = (0);
while(true){
if((i__4731__auto___14958 < len__4730__auto___14957)){
args__4736__auto__.push((arguments[i__4731__auto___14958]));

var G__14959 = (i__4731__auto___14958 + (1));
i__4731__auto___14958 = G__14959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (disable,width,value,items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"dropdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"btn btn-secondary dropdown-toggle",cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$aria_DASH_haspopup,true,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),cljs.core.cst$kw$aria_DASH_expanded,false,cljs.core.cst$kw$disabled,disable,cljs.core.cst$kw$value,value], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"dropdown-menu",cljs.core.cst$kw$aria_DASH_labelledby,"dropdownMenuButton"], null),items], null)], null);
});

pomodoro.ui_common.dropdown.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
pomodoro.ui_common.dropdown.cljs$lang$applyTo = (function (seq14953){
var G__14954 = cljs.core.first(seq14953);
var seq14953__$1 = cljs.core.next(seq14953);
var G__14955 = cljs.core.first(seq14953__$1);
var seq14953__$2 = cljs.core.next(seq14953__$1);
var G__14956 = cljs.core.first(seq14953__$2);
var seq14953__$3 = cljs.core.next(seq14953__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14954,G__14955,G__14956,seq14953__$3);
});

pomodoro.ui_common.text_input = (function pomodoro$ui_common$text_input(state,key,action){
var full_with = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (function (){var fexpr__14961 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__14961.cljs$core$IFn$_invoke$arity$1 ? fexpr__14961.cljs$core$IFn$_invoke$arity$1(0.94) : fexpr__14961.call(null,0.94));
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var label_with = (0.3 * full_with);
var input_with = (full_with - label_with);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-prepend",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,full_with], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,label_with,cljs.core.cst$kw$paddingLeft,"0.5rem",cljs.core.cst$kw$paddingRight,"0.5rem"], null)], null),"Task name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$class,cljs.core.cst$kw$aria_DASH_describedby,cljs.core.cst$kw$aria_DASH_label,cljs.core.cst$kw$on_DASH_change],[action,cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (){var G__14962 = cljs.core.deref(state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14962) : key.call(null,G__14962));
})(),"text",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,input_with], null),"form-control","addon-wrapping","TaskName",((function (full_with,label_with,input_with){
return (function (p1__14960_SHARP_){
return pomodoro.action.swap_value(state,key,p1__14960_SHARP_);
});})(full_with,label_with,input_with))
])], null)], null);
});
pomodoro.ui_common.input_length = (function pomodoro$ui_common$input_length(state,key,action){
var full_with = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (function (){var fexpr__14964 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__14964.cljs$core$IFn$_invoke$arity$1 ? fexpr__14964.cljs$core$IFn$_invoke$arity$1(0.94) : fexpr__14964.call(null,0.94));
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var label_with = (0.3 * full_with);
var input_with = (0.4 * full_with);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-prepend",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,full_with], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,label_with,cljs.core.cst$kw$paddingLeft,"0.5rem",cljs.core.cst$kw$paddingRight,"0.5rem"], null)], null),"Task length:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,input_with], null),cljs.core.cst$kw$value,(function (){var G__14965 = cljs.core.deref(state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14965) : key.call(null,G__14965));
})(),cljs.core.cst$kw$on_DASH_change,((function (full_with,label_with,input_with){
return (function (p1__14963_SHARP_){
return pomodoro.action.swap_value(state,key,p1__14963_SHARP_);
});})(full_with,label_with,input_with))
,cljs.core.cst$kw$on_DASH_key_DASH_press,action,cljs.core.cst$kw$disabled,cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,label_with], null)], null),pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),label_with,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dictionary,(function (){var G__14967 = cljs.core.cst$kw$unit;
var fexpr__14966 = cljs.core.deref(state);
return (fexpr__14966.cljs$core$IFn$_invoke$arity$1 ? fexpr__14966.cljs$core$IFn$_invoke$arity$1(G__14967) : fexpr__14966.call(null,G__14967));
})()], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.ui_common.dropdown_item("Second",((function (full_with,label_with,input_with){
return (function (){
return pomodoro.action.swap_unit(state,cljs.core.cst$kw$sec);
});})(full_with,label_with,input_with))
),pomodoro.ui_common.dropdown_item("Minute",((function (full_with,label_with,input_with){
return (function (){
return pomodoro.action.swap_unit(state,cljs.core.cst$kw$min);
});})(full_with,label_with,input_with))
)], 0))], null)], null);
});
pomodoro.ui_common.progress_bar = (function pomodoro$ui_common$progress_bar(state){
var map__14968 = cljs.core.deref(state);
var map__14968__$1 = (((((!((map__14968 == null))))?(((((map__14968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14968):map__14968);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14968__$1,cljs.core.cst$kw$length_DASH_in_DASH_seconds,(1));
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14968__$1,cljs.core.cst$kw$elapsed);
var progress = ((100) * (elapsed / length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"progress",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$max_DASH_width,(600)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,"progress-bar",cljs.core.cst$kw$role,"progressbar",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress),"%"].join('')], null),cljs.core.cst$kw$aria_DASH_valuemin,"0",cljs.core.cst$kw$aria_DASH_valuemax,(100),cljs.core.cst$kw$aria_DASH_valuenow,progress], null),pomodoro.time_format.render_time(((1000) * elapsed))], null)], null);
});
pomodoro.ui_common.control_buttons = (function pomodoro$ui_common$control_buttons(state){
var full_width = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (function (){var fexpr__14970 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__14970.cljs$core$IFn$_invoke$arity$1 ? fexpr__14970.cljs$core$IFn$_invoke$arity$1(0.94) : fexpr__14970.call(null,0.94));
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var width = (cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?(full_width * 0.5):full_width);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.hideable_button_element((function (){var G__14972 = cljs.core.cst$kw$active;
var fexpr__14971 = cljs.core.deref(state);
return (fexpr__14971.cljs$core$IFn$_invoke$arity$1 ? fexpr__14971.cljs$core$IFn$_invoke$arity$1(G__14972) : fexpr__14971.call(null,G__14972));
})(),width,"Start timer",((function (full_width,width){
return (function (){
return pomodoro.action.start_button_on_click(state);
});})(full_width,width))
),pomodoro.ui_common.hideable_button_element((function (){var G__14974 = cljs.core.cst$kw$paused;
var fexpr__14973 = cljs.core.deref(state);
return (fexpr__14973.cljs$core$IFn$_invoke$arity$1 ? fexpr__14973.cljs$core$IFn$_invoke$arity$1(G__14974) : fexpr__14973.call(null,G__14974));
})(),width,"Pause timer",((function (full_width,width){
return (function (){
return pomodoro.action.pause_button_on_click(state);
});})(full_width,width))
),pomodoro.ui_common.hideable_button_element((function (){var G__14976 = cljs.core.cst$kw$resume;
var fexpr__14975 = cljs.core.deref(state);
return (fexpr__14975.cljs$core$IFn$_invoke$arity$1 ? fexpr__14975.cljs$core$IFn$_invoke$arity$1(G__14976) : fexpr__14975.call(null,G__14976));
})(),width,"Resume timer",((function (full_width,width){
return (function (){
return pomodoro.action.pause_button_on_click(state);
});})(full_width,width))
),pomodoro.ui_common.hideable_button_element((function (){var G__14978 = cljs.core.cst$kw$stop;
var fexpr__14977 = cljs.core.deref(state);
return (fexpr__14977.cljs$core$IFn$_invoke$arity$1 ? fexpr__14977.cljs$core$IFn$_invoke$arity$1(G__14978) : fexpr__14977.call(null,G__14978));
})(),width,"Stop timer",((function (full_width,width){
return (function (){
return pomodoro.action.stop_button_on_click(state);
});})(full_width,width))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.progress_bar(state)], null)], null);
});
