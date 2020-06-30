// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.ui_common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.time_format');
goog.require('pomodoro.action');
goog.require('pomodoro.dictionary');
pomodoro.ui_common.common_button_style = (function pomodoro$ui_common$common_button_style(width,value,callback){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$class,"btn btn-secondary",cljs.core.cst$kw$value,value,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$paddingLeft,"0.3rem",cljs.core.cst$kw$paddingRight,"0.3rem"], null),cljs.core.cst$kw$on_DASH_click,callback], null);
});
pomodoro.ui_common.common_button = (function pomodoro$ui_common$common_button(width,value,callback){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,pomodoro.ui_common.common_button_style(width,value,callback)], null);
});
pomodoro.ui_common.button_element = (function pomodoro$ui_common$button_element(disabled,width,value,callback){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pomodoro.ui_common.common_button_style(width,value,callback),cljs.core.cst$kw$disabled,disabled)], null);
});
pomodoro.ui_common.dropdown_item = (function pomodoro$ui_common$dropdown_item(label,action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"dropdown-item",cljs.core.cst$kw$on_DASH_click,action,cljs.core.cst$kw$key,label], null),label], null);
});
pomodoro.ui_common.dropdown = (function pomodoro$ui_common$dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14887 = arguments.length;
var i__4731__auto___14888 = (0);
while(true){
if((i__4731__auto___14888 < len__4730__auto___14887)){
args__4736__auto__.push((arguments[i__4731__auto___14888]));

var G__14889 = (i__4731__auto___14888 + (1));
i__4731__auto___14888 = G__14889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (disable,width,value,items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"dropdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"btn btn-secondary dropdown-toggle",cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$aria_DASH_haspopup,true,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),cljs.core.cst$kw$aria_DASH_expanded,false,cljs.core.cst$kw$disabled,disable,cljs.core.cst$kw$value,value], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"dropdown-menu dropdown-menu-right",cljs.core.cst$kw$aria_DASH_labelledby,"dropdownMenuButton"], null),items], null)], null);
});

pomodoro.ui_common.dropdown.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
pomodoro.ui_common.dropdown.cljs$lang$applyTo = (function (seq14883){
var G__14884 = cljs.core.first(seq14883);
var seq14883__$1 = cljs.core.next(seq14883);
var G__14885 = cljs.core.first(seq14883__$1);
var seq14883__$2 = cljs.core.next(seq14883__$1);
var G__14886 = cljs.core.first(seq14883__$2);
var seq14883__$3 = cljs.core.next(seq14883__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14884,G__14885,G__14886,seq14883__$3);
});

pomodoro.ui_common.text_input = (function pomodoro$ui_common$text_input(state,key,action){
var full_with = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var label_with = (0.3 * full_with);
var input_with = (full_with - label_with);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-prepend",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,full_with], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,label_with,cljs.core.cst$kw$paddingLeft,"0.5rem",cljs.core.cst$kw$paddingRight,"0.5rem"], null)], null),pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,key,label_with)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$class,cljs.core.cst$kw$aria_DASH_describedby,cljs.core.cst$kw$aria_DASH_label,cljs.core.cst$kw$on_DASH_change],[action,cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (){var G__14891 = cljs.core.deref(state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14891) : key.call(null,G__14891));
})(),"text",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,input_with], null),"form-control","addon-wrapping","TaskName",((function (full_with,label_with,input_with){
return (function (p1__14890_SHARP_){
return pomodoro.action.swap_value(state,key,p1__14890_SHARP_);
});})(full_with,label_with,input_with))
])], null)], null);
});
pomodoro.ui_common.input_length = (function pomodoro$ui_common$input_length(state,key,action){
var full_with = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var label_with = (0.3 * full_with);
var input_with = (0.4 * full_with);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-prepend",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,full_with], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"input-group-text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,label_with,cljs.core.cst$kw$paddingLeft,"0.5rem",cljs.core.cst$kw$paddingRight,"0.5rem"], null)], null),pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,key,label_with)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,input_with], null),cljs.core.cst$kw$value,(function (){var G__14893 = cljs.core.deref(state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14893) : key.call(null,G__14893));
})(),cljs.core.cst$kw$on_DASH_change,((function (full_with,label_with,input_with){
return (function (p1__14892_SHARP_){
return pomodoro.action.swap_value(state,key,p1__14892_SHARP_);
});})(full_with,label_with,input_with))
,cljs.core.cst$kw$on_DASH_key_DASH_press,action,cljs.core.cst$kw$disabled,cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,label_with], null)], null),pomodoro.ui_common.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),label_with,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,(function (){var G__14895 = cljs.core.cst$kw$unit;
var fexpr__14894 = cljs.core.deref(state);
return (fexpr__14894.cljs$core$IFn$_invoke$arity$1 ? fexpr__14894.cljs$core$IFn$_invoke$arity$1(G__14895) : fexpr__14894.call(null,G__14895));
})(),label_with),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.ui_common.dropdown_item(pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$sec,label_with),((function (full_with,label_with,input_with){
return (function (){
return pomodoro.action.swap_unit(state,cljs.core.cst$kw$sec);
});})(full_with,label_with,input_with))
),pomodoro.ui_common.dropdown_item(pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$min,label_with),((function (full_with,label_with,input_with){
return (function (){
return pomodoro.action.swap_unit(state,cljs.core.cst$kw$min);
});})(full_with,label_with,input_with))
)], 0))], null)], null);
});
pomodoro.ui_common.progress_bar = (function pomodoro$ui_common$progress_bar(state){
var map__14896 = cljs.core.deref(state);
var map__14896__$1 = (((((!((map__14896 == null))))?(((((map__14896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14896):map__14896);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14896__$1,cljs.core.cst$kw$length_DASH_in_DASH_seconds,(1));
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$elapsed);
var progress = ((100) * (elapsed / length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"progress",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94),cljs.core.cst$kw$max_DASH_width,(600)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,"progress-bar",cljs.core.cst$kw$role,"progressbar",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress),"%"].join('')], null),cljs.core.cst$kw$aria_DASH_valuemin,"0",cljs.core.cst$kw$aria_DASH_valuemax,(100),cljs.core.cst$kw$aria_DASH_valuenow,progress], null),pomodoro.time_format.render_time(((1000) * elapsed))], null)], null);
});
pomodoro.ui_common.start_button = (function pomodoro$ui_common$start_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$start_DASH_timer,width),(function (){
return pomodoro.action.start_button_on_click(state);
}));
});
pomodoro.ui_common.start_plan_button = (function pomodoro$ui_common$start_plan_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$start_DASH_batch,width),(function (){
return pomodoro.action.start_plan(state);
}));
});
pomodoro.ui_common.pause_button = (function pomodoro$ui_common$pause_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pause_DASH_timer,width),(function (){
return pomodoro.action.pause_button_on_click(state);
}));
});
pomodoro.ui_common.resume_button = (function pomodoro$ui_common$resume_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$resume_DASH_timer,width),(function (){
return pomodoro.action.pause_button_on_click(state);
}));
});
pomodoro.ui_common.run_next_button = (function pomodoro$ui_common$run_next_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$run_DASH_next,width),(function (){
return pomodoro.action.run_next_item(state);
}));
});
pomodoro.ui_common.stop_button = (function pomodoro$ui_common$stop_button(state,width){
return pomodoro.ui_common.common_button(width,pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$stop_DASH_timer,width),(function (){
return pomodoro.action.stop_button_on_click(state);
}));
});
pomodoro.ui_common.control_buttons = (function pomodoro$ui_common$control_buttons(state){
var full_width = (function (){var x__4222__auto__ = (600);
var y__4223__auto__ = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) * 0.94);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var width = (cljs.core.truth_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?(full_width * 0.5):full_width);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn-group",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),(cljs.core.truth_((function (){var G__14899 = cljs.core.cst$kw$active;
var fexpr__14898 = cljs.core.deref(state);
return (fexpr__14898.cljs$core$IFn$_invoke$arity$1 ? fexpr__14898.cljs$core$IFn$_invoke$arity$1(G__14899) : fexpr__14898.call(null,G__14899));
})())?null:pomodoro.ui_common.start_button(state,width)),(cljs.core.truth_((function (){var G__14901 = cljs.core.cst$kw$paused;
var fexpr__14900 = cljs.core.deref(state);
return (fexpr__14900.cljs$core$IFn$_invoke$arity$1 ? fexpr__14900.cljs$core$IFn$_invoke$arity$1(G__14901) : fexpr__14900.call(null,G__14901));
})())?null:pomodoro.ui_common.pause_button(state,width)),(cljs.core.truth_((function (){var G__14903 = cljs.core.cst$kw$resume;
var fexpr__14902 = cljs.core.deref(state);
return (fexpr__14902.cljs$core$IFn$_invoke$arity$1 ? fexpr__14902.cljs$core$IFn$_invoke$arity$1(G__14903) : fexpr__14902.call(null,G__14903));
})())?null:pomodoro.ui_common.resume_button(state,width)),(cljs.core.truth_((function (){var G__14905 = cljs.core.cst$kw$stop;
var fexpr__14904 = cljs.core.deref(state);
return (fexpr__14904.cljs$core$IFn$_invoke$arity$1 ? fexpr__14904.cljs$core$IFn$_invoke$arity$1(G__14905) : fexpr__14904.call(null,G__14905));
})())?null:pomodoro.ui_common.stop_button(state,width))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1%"], null)], null),pomodoro.ui_common.progress_bar(state)], null)], null);
});
