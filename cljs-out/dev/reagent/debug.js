// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12996__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12997__i = 0, G__12997__a = new Array(arguments.length -  0);
while (G__12997__i < G__12997__a.length) {G__12997__a[G__12997__i] = arguments[G__12997__i + 0]; ++G__12997__i;}
  args = new cljs.core.IndexedSeq(G__12997__a,0,null);
} 
return G__12996__delegate.call(this,args);};
G__12996.cljs$lang$maxFixedArity = 0;
G__12996.cljs$lang$applyTo = (function (arglist__12998){
var args = cljs.core.seq(arglist__12998);
return G__12996__delegate(args);
});
G__12996.cljs$core$IFn$_invoke$arity$variadic = G__12996__delegate;
return G__12996;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12999__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13000__i = 0, G__13000__a = new Array(arguments.length -  0);
while (G__13000__i < G__13000__a.length) {G__13000__a[G__13000__i] = arguments[G__13000__i + 0]; ++G__13000__i;}
  args = new cljs.core.IndexedSeq(G__13000__a,0,null);
} 
return G__12999__delegate.call(this,args);};
G__12999.cljs$lang$maxFixedArity = 0;
G__12999.cljs$lang$applyTo = (function (arglist__13001){
var args = cljs.core.seq(arglist__13001);
return G__12999__delegate(args);
});
G__12999.cljs$core$IFn$_invoke$arity$variadic = G__12999__delegate;
return G__12999;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
