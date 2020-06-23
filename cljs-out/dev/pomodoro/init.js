// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.init');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.action');
goog.require('ajax.core');
goog.require('pomodoro.cookie_storage');
pomodoro.init.browser_language = (function pomodoro$init$browser_language(){
return cljs.core.second(cljs.core.re_matches(/([a-z]{2}).*/,(function (){var or__4131__auto__ = navigator.language;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator.userLanguage;
}
})()));
});
pomodoro.init.load_dictionary = (function pomodoro$init$load_dictionary(state,response){
var dict = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dictionary,dict,cljs.core.cst$kw$task_DASH_name,cljs.core.cst$kw$default_DASH_task_DASH_name.cljs$core$IFn$_invoke$arity$1(dict)], null));
});
pomodoro.init.get_dictionary = (function pomodoro$init$get_dictionary(state,language){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["/dictionary_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(language),".edn"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,(function (p1__15025_SHARP_){
return pomodoro.init.load_dictionary(state,p1__15025_SHARP_);
}),cljs.core.cst$kw$error_DASH_handler,(function (){
return (pomodoro.init.get_dictionary.cljs$core$IFn$_invoke$arity$2 ? pomodoro.init.get_dictionary.cljs$core$IFn$_invoke$arity$2(state,"en") : pomodoro.init.get_dictionary.call(null,state,"en"));
})], null)], 0));
});
pomodoro.init.change_width = (function pomodoro$init$change_width(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$width,window.innerWidth);
});
pomodoro.init.init = (function pomodoro$init$init(var_args){
var G__15027 = arguments.length;
switch (G__15027) {
case 2:
return pomodoro.init.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pomodoro.init.init.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pomodoro.init.init.cljs$core$IFn$_invoke$arity$2 = (function (state,storage){
return pomodoro.init.init.cljs$core$IFn$_invoke$arity$3(state,storage,pomodoro.init.browser_language());
});

pomodoro.init.init.cljs$core$IFn$_invoke$arity$3 = (function (state,storage,language){
window.addEventListener("resize",(function (){
return pomodoro.init.change_width(state);
}));

pomodoro.init.change_width(state);

pomodoro.init.get_dictionary(state,language);

pomodoro.cookie_storage.init(storage);

return pomodoro.action.reset_task(state);
});

pomodoro.init.init.cljs$lang$maxFixedArity = 3;

