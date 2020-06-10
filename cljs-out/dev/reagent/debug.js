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
var G__13709__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13710__i = 0, G__13710__a = new Array(arguments.length -  0);
while (G__13710__i < G__13710__a.length) {G__13710__a[G__13710__i] = arguments[G__13710__i + 0]; ++G__13710__i;}
  args = new cljs.core.IndexedSeq(G__13710__a,0,null);
} 
return G__13709__delegate.call(this,args);};
G__13709.cljs$lang$maxFixedArity = 0;
G__13709.cljs$lang$applyTo = (function (arglist__13711){
var args = cljs.core.seq(arglist__13711);
return G__13709__delegate(args);
});
G__13709.cljs$core$IFn$_invoke$arity$variadic = G__13709__delegate;
return G__13709;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13712__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13713__i = 0, G__13713__a = new Array(arguments.length -  0);
while (G__13713__i < G__13713__a.length) {G__13713__a[G__13713__i] = arguments[G__13713__i + 0]; ++G__13713__i;}
  args = new cljs.core.IndexedSeq(G__13713__a,0,null);
} 
return G__13712__delegate.call(this,args);};
G__13712.cljs$lang$maxFixedArity = 0;
G__13712.cljs$lang$applyTo = (function (arglist__13714){
var args = cljs.core.seq(arglist__13714);
return G__13712__delegate(args);
});
G__13712.cljs$core$IFn$_invoke$arity$variadic = G__13712__delegate;
return G__13712;
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
