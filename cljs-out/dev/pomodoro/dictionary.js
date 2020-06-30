// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.dictionary');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.action');
goog.require('ajax.core');
goog.require('pomodoro.cookie_storage');
pomodoro.dictionary.load_dictionary = (function pomodoro$dictionary$load_dictionary(state,response){
var dict = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dictionary,dict,cljs.core.cst$kw$task_DASH_name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$long,cljs.core.cst$kw$default_DASH_task_DASH_name], null))], null));
});
pomodoro.dictionary.get_dictionary = (function pomodoro$dictionary$get_dictionary(state,language){
pomodoro.cookie_storage.set_language(language);

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["/dictionary_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(language),".edn"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,(function (p1__14872_SHARP_){
return pomodoro.dictionary.load_dictionary(state,p1__14872_SHARP_);
}),cljs.core.cst$kw$error_DASH_handler,(function (){
return (pomodoro.dictionary.get_dictionary.cljs$core$IFn$_invoke$arity$2 ? pomodoro.dictionary.get_dictionary.cljs$core$IFn$_invoke$arity$2(state,"en") : pomodoro.dictionary.get_dictionary.call(null,state,"en"));
})], null)], 0));
});
pomodoro.dictionary.load_dictionaries = (function pomodoro$dictionary$load_dictionaries(state,response){
var languages = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$dictionaries,languages);
});
pomodoro.dictionary.get_dictionaries = (function pomodoro$dictionary$get_dictionaries(state){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/dictionaries.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,(function (p1__14873_SHARP_){
return pomodoro.dictionary.load_dictionaries(state,p1__14873_SHARP_);
}),cljs.core.cst$kw$error_DASH_handler,(function (){
return alert("Can't load any language files.\nTry again later!");
})], null)], 0));
});
pomodoro.dictionary.span = (function pomodoro$dictionary$span(var_args){
var G__14875 = arguments.length;
switch (G__14875) {
case 2:
return pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$2 = (function (state,visibility){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"input-group-text",cljs.core.cst$kw$id,"text-meter",cljs.core.cst$kw$ref,(function (){
if(cljs.core.truth_(cljs.core.cst$kw$ready.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
return pomodoro.action.set_ready(state,true);
}
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$visibility,visibility,cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"max-content",cljs.core.cst$kw$paddingLeft,"0.5rem",cljs.core.cst$kw$paddingRight,"0.5rem"], null)], null)], null)], null);
});

pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$3 = (function (state,visibility,t){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pomodoro.dictionary.span.cljs$core$IFn$_invoke$arity$2(state,visibility),t);
});

pomodoro.dictionary.span.cljs$lang$maxFixedArity = 3;

pomodoro.dictionary.set_text = (function pomodoro$dictionary$set_text(text){
return document.getElementById("text-meter").textContent = text;
});
pomodoro.dictionary.get_text_in_pixels = (function pomodoro$dictionary$get_text_in_pixels(){
return document.getElementById("text-meter").offsetWidth;
});
pomodoro.dictionary.measure_text = cljs.core.memoize((function (text){
pomodoro.dictionary.set_text(text);

return pomodoro.dictionary.get_text_in_pixels();
}));
pomodoro.dictionary.get_text = (function pomodoro$dictionary$get_text(var_args){
var G__14878 = arguments.length;
switch (G__14878) {
case 2:
return pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$2 = (function (state,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dictionary,cljs.core.cst$kw$long,key], null));
});

pomodoro.dictionary.get_text.cljs$core$IFn$_invoke$arity$3 = (function (state,key,width){
var short_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dictionary,cljs.core.cst$kw$short,key], null));
var long_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dictionary,cljs.core.cst$kw$long,key], null));
try{if(((pomodoro.dictionary.measure_text.cljs$core$IFn$_invoke$arity$1 ? pomodoro.dictionary.measure_text.cljs$core$IFn$_invoke$arity$1(long_value) : pomodoro.dictionary.measure_text.call(null,long_value)) <= width)){
return long_value;
} else {
var or__4131__auto__ = short_value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return long_value;
}
}
}catch (e14879){if((e14879 instanceof Object)){
var e = e14879;
return long_value;
} else {
throw e14879;

}
}});

pomodoro.dictionary.get_text.cljs$lang$maxFixedArity = 3;

