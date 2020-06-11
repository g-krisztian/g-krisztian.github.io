// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha1');
goog.require('goog.crypt.Sha2');
goog.require('goog.crypt.Sha256');
goog.require('goog.crypt.Sha384');
goog.require('goog.crypt.Sha512');
reagent.format.add_slashes = (function reagent$format$add_slashes(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",c)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)], 0)));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count(text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(l," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12838 = arguments.length;
var i__4731__auto___12839 = (0);
while(true){
if((i__4731__auto___12839 < len__4730__auto___12838)){
args__4736__auto__.push((arguments[i__4731__auto___12839]));

var G__12840 = (i__4731__auto___12839 + (1));
i__4731__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.format.cljs$lang$applyTo = (function (seq12836){
var G__12837 = cljs.core.first(seq12836);
var seq12836__$1 = cljs.core.next(seq12836);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12837,seq12836__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12843 = arguments.length;
var i__4731__auto___12844 = (0);
while(true){
if((i__4731__auto___12844 < len__4730__auto___12843)){
args__4736__auto__.push((arguments[i__4731__auto___12844]));

var G__12845 = (i__4731__auto___12844 + (1));
i__4731__auto___12844 = G__12845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.format.format,fmt,args)], 0));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.printf.cljs$lang$applyTo = (function (seq12841){
var G__12842 = cljs.core.first(seq12841);
var seq12841__$1 = cljs.core.next(seq12841);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12842,seq12841__$1);
});

/**
 * formats currency using the current locale
 * to change locale set goog.i18n.NumberFormatSymbols eg:
 * (set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_it_IT)
 * see here for supported locales
 * https://github.com/google/closure-library/blob/master/closure/goog/i18n/numberformatsymbols.js
 *   
 */
reagent.format.currency_format = (function reagent$format$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
reagent.format.date_format = (function reagent$format$date_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12853 = arguments.length;
var i__4731__auto___12854 = (0);
while(true){
if((i__4731__auto___12854 < len__4730__auto___12853)){
args__4736__auto__.push((arguments[i__4731__auto___12854]));

var G__12855 = (i__4731__auto___12854 + (1));
i__4731__auto___12854 = G__12855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__12849){
var vec__12850 = p__12849;
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.format.date_format.cljs$lang$applyTo = (function (seq12846){
var G__12847 = cljs.core.first(seq12846);
var seq12846__$1 = cljs.core.next(seq12846);
var G__12848 = cljs.core.first(seq12846__$1);
var seq12846__$2 = cljs.core.next(seq12846__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12847,G__12848,seq12846__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (s__$1){
return (function (p1__12856_SHARP_,p2__12857_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__12856_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__12857_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12866 = arguments.length;
var i__4731__auto___12867 = (0);
while(true){
if((i__4731__auto___12867 < len__4730__auto___12866)){
args__4736__auto__.push((arguments[i__4731__auto___12867]));

var G__12868 = (i__4731__auto___12867 + (1));
i__4731__auto___12867 = G__12868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__12860){
var vec__12861 = p__12860;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(0),null);
var ending1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(1),null);
var ending2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(2),null);
var opts = vec__12861;
var n = cljs.core.count(items);
var plural = (function (){var G__12864 = cljs.core.count(opts);
switch (G__12864) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12864)].join('')));

}
})();
var singular = (function (){var G__12865 = cljs.core.count(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$list,G__12865)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__12865)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__12865)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__12865)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12865)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.pluralize.cljs$lang$applyTo = (function (seq12858){
var G__12859 = cljs.core.first(seq12858);
var seq12858__$1 = cljs.core.next(seq12858);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12859,seq12858__$1);
});

reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12872 = arguments.length;
var i__4731__auto___12873 = (0);
while(true){
if((i__4731__auto___12873 < len__4730__auto___12872)){
args__4736__auto__.push((arguments[i__4731__auto___12873]));

var G__12874 = (i__4731__auto___12873 + (1));
i__4731__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not(tags)){
return s;
} else {
var s__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
var tags__$1 = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",tags)),")"].join('');
var opening = cljs.core.re_pattern(["(?i)<",tags__$1,"(/?>|(\\s+[^>]*>))"].join(''));
var closing = cljs.core.re_pattern(["(?i)</",tags__$1,">"].join(''));
return clojure.string.replace(clojure.string.replace(s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.remove_tags.cljs$lang$applyTo = (function (seq12870){
var G__12871 = cljs.core.first(seq12870);
var seq12870__$1 = cljs.core.next(seq12870);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12871,seq12870__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});
