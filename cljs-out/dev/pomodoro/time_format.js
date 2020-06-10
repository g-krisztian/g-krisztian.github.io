// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.time_format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.format');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.time_format !== 'undefined') && (typeof pomodoro.time_format.time_offset !== 'undefined')){
} else {
pomodoro.time_format.time_offset = ((60000) * (new Date()).getTimezoneOffset());
}
pomodoro.time_format.sec = (function pomodoro$time_format$sec(time){
return cljs.core.mod(cljs.core.quot(time,(1000)),(60));
});
pomodoro.time_format.minute = (function pomodoro$time_format$minute(time){
return cljs.core.mod(cljs.core.quot(time,(60000)),(60));
});
pomodoro.time_format.hour = (function pomodoro$time_format$hour(time){
return cljs.core.mod(cljs.core.quot(time,(3600000)),(24));
});
pomodoro.time_format.render_time = (function pomodoro$time_format$render_time(time){
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic("%02d:%02d:%02d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.time_format.hour(time),pomodoro.time_format.minute(time),pomodoro.time_format.sec(time)], 0));
});
pomodoro.time_format.correct_time = (function pomodoro$time_format$correct_time(time){
return (time - pomodoro.time_format.time_offset);
});
