// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.audio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_bach.synthesis');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.audio !== 'undefined') && (typeof pomodoro.audio.sound_uri !== 'undefined')){
} else {
pomodoro.audio.sound_uri = "110661_739427-hq.mp3";
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.audio !== 'undefined') && (typeof pomodoro.audio.audio_context !== 'undefined')){
} else {
pomodoro.audio.audio_context = cljs_bach.synthesis.audio_context();
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.audio !== 'undefined') && (typeof pomodoro.audio.boing !== 'undefined')){
} else {
pomodoro.audio.boing = cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.sample.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sample.cljs$core$IFn$_invoke$arity$1(pomodoro.audio.sound_uri) : cljs_bach.synthesis.sample.call(null,pomodoro.audio.sound_uri)),cljs_bach.synthesis.destination], 0));
}
pomodoro.audio.playback_mp3 = (function pomodoro$audio$playback_mp3(){
return cljs_bach.synthesis.run_with(pomodoro.audio.boing,pomodoro.audio.audio_context,cljs_bach.synthesis.current_time(pomodoro.audio.audio_context),3.0);
});
