// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.init');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.action');
goog.require('pomodoro.cookie_storage');
goog.require('pomodoro.dictionary');
goog.require('pomodoro.time_format');
pomodoro.init.browser_language = (function pomodoro$init$browser_language(){
return cljs.core.second(cljs.core.re_matches(/([a-z]{2}).*/,(function (){var or__4131__auto__ = navigator.language;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator.userLanguage;
}
})()));
});
pomodoro.init.change_width = (function pomodoro$init$change_width(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$width,window.innerWidth);
});
pomodoro.init.init = (function pomodoro$init$init(var_args){
var G__15039 = arguments.length;
switch (G__15039) {
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
var language = (function (){var or__4131__auto__ = pomodoro.cookie_storage.get_language();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pomodoro.init.browser_language();
}
})();
return pomodoro.init.init.cljs$core$IFn$_invoke$arity$3(state,storage,language);
});

pomodoro.init.init.cljs$core$IFn$_invoke$arity$3 = (function (state,storage,language){
window.addEventListener("resize",(function (){
return pomodoro.init.change_width(state);
}));

pomodoro.init.change_width(state);

pomodoro.dictionary.get_dictionaries(state);

pomodoro.dictionary.get_dictionary(state,language);

pomodoro.cookie_storage.init(storage);

return pomodoro.action.reset_task(state);
});

pomodoro.init.init.cljs$lang$maxFixedArity = 3;

