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
var len__4730__auto___13585 = arguments.length;
var i__4731__auto___13586 = (0);
while(true){
if((i__4731__auto___13586 < len__4730__auto___13585)){
args__4736__auto__.push((arguments[i__4731__auto___13586]));

var G__13587 = (i__4731__auto___13586 + (1));
i__4731__auto___13586 = G__13587;
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
reagent.format.format.cljs$lang$applyTo = (function (seq13583){
var G__13584 = cljs.core.first(seq13583);
var seq13583__$1 = cljs.core.next(seq13583);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13584,seq13583__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13590 = arguments.length;
var i__4731__auto___13591 = (0);
while(true){
if((i__4731__auto___13591 < len__4730__auto___13590)){
args__4736__auto__.push((arguments[i__4731__auto___13591]));

var G__13592 = (i__4731__auto___13591 + (1));
i__4731__auto___13591 = G__13592;
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
reagent.format.printf.cljs$lang$applyTo = (function (seq13588){
var G__13589 = cljs.core.first(seq13588);
var seq13588__$1 = cljs.core.next(seq13588);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13589,seq13588__$1);
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
var len__4730__auto___13600 = arguments.length;
var i__4731__auto___13601 = (0);
while(true){
if((i__4731__auto___13601 < len__4730__auto___13600)){
args__4736__auto__.push((arguments[i__4731__auto___13601]));

var G__13602 = (i__4731__auto___13601 + (1));
i__4731__auto___13601 = G__13602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__13596){
var vec__13597 = p__13596;
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.format.date_format.cljs$lang$applyTo = (function (seq13593){
var G__13594 = cljs.core.first(seq13593);
var seq13593__$1 = cljs.core.next(seq13593);
var G__13595 = cljs.core.first(seq13593__$1);
var seq13593__$2 = cljs.core.next(seq13593__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13594,G__13595,seq13593__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (s__$1){
return (function (p1__13603_SHARP_,p2__13604_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13603_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__13604_SHARP_)].join('');
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
var len__4730__auto___13613 = arguments.length;
var i__4731__auto___13614 = (0);
while(true){
if((i__4731__auto___13614 < len__4730__auto___13613)){
args__4736__auto__.push((arguments[i__4731__auto___13614]));

var G__13615 = (i__4731__auto___13614 + (1));
i__4731__auto___13614 = G__13615;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__13607){
var vec__13608 = p__13607;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(0),null);
var ending1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(1),null);
var ending2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(2),null);
var opts = vec__13608;
var n = cljs.core.count(items);
var plural = (function (){var G__13611 = cljs.core.count(opts);
switch (G__13611) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13611)].join('')));

}
})();
var singular = (function (){var G__13612 = cljs.core.count(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$list,G__13612)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13612)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13612)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13612)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13612)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.pluralize.cljs$lang$applyTo = (function (seq13605){
var G__13606 = cljs.core.first(seq13605);
var seq13605__$1 = cljs.core.next(seq13605);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13606,seq13605__$1);
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
var len__4730__auto___13619 = arguments.length;
var i__4731__auto___13620 = (0);
while(true){
if((i__4731__auto___13620 < len__4730__auto___13619)){
args__4736__auto__.push((arguments[i__4731__auto___13620]));

var G__13621 = (i__4731__auto___13620 + (1));
i__4731__auto___13620 = G__13621;
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
reagent.format.remove_tags.cljs$lang$applyTo = (function (seq13617){
var G__13618 = cljs.core.first(seq13617);
var seq13617__$1 = cljs.core.next(seq13617);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13618,seq13617__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});
