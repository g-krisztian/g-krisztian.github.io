// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('ajax.protocols');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('cljs_bach.synthesis.audio_context', cljs_bach.synthesis.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('cljs_bach.synthesis.current_time', cljs_bach.synthesis.current_time);
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var G__14811 = arguments.length;
switch (G__14811) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('cljs_bach.synthesis.run_with', cljs_bach.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink(context.destination);
});
goog.exportSymbol('cljs_bach.synthesis.destination', cljs_bach.synthesis.destination);
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14813 = context.createGain();
cljs_bach.synthesis.plug(G__14813.gain,level,context,at,duration);

return G__14813;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.gain', cljs_bach.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain(1.0);
goog.exportSymbol('cljs_bach.synthesis.pass_through', cljs_bach.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14821 = arguments.length;
var i__4731__auto___14822 = (0);
while(true){
if((i__4731__auto___14822 < len__4730__auto___14821)){
args__4736__auto__.push((arguments[i__4731__auto___14822]));

var G__14823 = (i__4731__auto___14822 + (1));
i__4731__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_14824 = at;
var coordinates_14825 = corners;
while(true){
var temp__5720__auto___14826 = coordinates_14825;
if(cljs.core.truth_(temp__5720__auto___14826)){
var vec__14815_14827 = temp__5720__auto___14826;
var seq__14816_14828 = cljs.core.seq(vec__14815_14827);
var first__14817_14829 = cljs.core.first(seq__14816_14828);
var seq__14816_14830__$1 = cljs.core.next(seq__14816_14828);
var vec__14818_14831 = first__14817_14829;
var dx_14832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818_14831,(0),null);
var y_14833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818_14831,(1),null);
var remaining_14834 = seq__14816_14830__$1;
audio_node.gain.linearRampToValueAtTime(y_14833,(x_14824 + dx_14832));

var G__14835 = (dx_14832 + x_14824);
var G__14836 = remaining_14834;
x_14824 = G__14835;
coordinates_14825 = G__14836;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq14814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14814));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__4219__auto__ = 0.0;
var y__4220__auto__ = remainder;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var node = cljs_bach.synthesis.adshr(attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('cljs_bach.synthesis.adsr', cljs_bach.synthesis.adsr);
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('cljs_bach.synthesis.percussive', cljs_bach.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
cljs_bach.synthesis.apply_to_graph = (function cljs_bach$synthesis$apply_to_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14840 = arguments.length;
var i__4731__auto___14841 = (0);
while(true){
if((i__4731__auto___14841 < len__4730__auto___14840)){
args__4736__auto__.push((arguments[i__4731__auto___14841]));

var G__14842 = (i__4731__auto___14841 + (1));
i__4731__auto___14841 = G__14842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14837_SHARP_){
return cljs_bach.synthesis.run_with(p1__14837_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq14838){
var G__14839 = cljs.core.first(seq14838);
var seq14838__$1 = cljs.core.next(seq14838);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14839,seq14838__$1);
});

cljs_bach.synthesis.join_in_series = (function cljs_bach$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(cljs_bach.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('cljs_bach.synthesis.connect', cljs_bach.synthesis.connect);
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14844 = arguments.length;
var i__4731__auto___14845 = (0);
while(true){
if((i__4731__auto___14845 < len__4730__auto___14844)){
args__4736__auto__.push((arguments[i__4731__auto___14845]));

var G__14846 = (i__4731__auto___14845 + (1));
i__4731__auto___14845 = G__14846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq14843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14843));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14854 = arguments.length;
var i__4731__auto___14855 = (0);
while(true){
if((i__4731__auto___14855 < len__4730__auto___14854)){
args__4736__auto__.push((arguments[i__4731__auto___14855]));

var G__14856 = (i__4731__auto___14855 + (1));
i__4731__auto___14855 = G__14856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__14850_14857 = cljs.core.seq(graphs);
var chunk__14851_14858 = null;
var count__14852_14859 = (0);
var i__14853_14860 = (0);
while(true){
if((i__14853_14860 < count__14852_14859)){
var graph_14861 = chunk__14851_14858.cljs$core$IIndexed$_nth$arity$2(null,i__14853_14860);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14861).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14861))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14861));
} else {
}


var G__14862 = seq__14850_14857;
var G__14863 = chunk__14851_14858;
var G__14864 = count__14852_14859;
var G__14865 = (i__14853_14860 + (1));
seq__14850_14857 = G__14862;
chunk__14851_14858 = G__14863;
count__14852_14859 = G__14864;
i__14853_14860 = G__14865;
continue;
} else {
var temp__5720__auto___14866 = cljs.core.seq(seq__14850_14857);
if(temp__5720__auto___14866){
var seq__14850_14867__$1 = temp__5720__auto___14866;
if(cljs.core.chunked_seq_QMARK_(seq__14850_14867__$1)){
var c__4550__auto___14868 = cljs.core.chunk_first(seq__14850_14867__$1);
var G__14869 = cljs.core.chunk_rest(seq__14850_14867__$1);
var G__14870 = c__4550__auto___14868;
var G__14871 = cljs.core.count(c__4550__auto___14868);
var G__14872 = (0);
seq__14850_14857 = G__14869;
chunk__14851_14858 = G__14870;
count__14852_14859 = G__14871;
i__14853_14860 = G__14872;
continue;
} else {
var graph_14873 = cljs.core.first(seq__14850_14867__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14873).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14873))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14873));
} else {
}


var G__14874 = cljs.core.next(seq__14850_14867__$1);
var G__14875 = null;
var G__14876 = (0);
var G__14877 = (0);
seq__14850_14857 = G__14874;
chunk__14851_14858 = G__14875;
count__14852_14859 = G__14876;
i__14853_14860 = G__14877;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq14847){
var G__14848 = cljs.core.first(seq14847);
var seq14847__$1 = cljs.core.next(seq14847);
var G__14849 = cljs.core.first(seq14847__$1);
var seq14847__$2 = cljs.core.next(seq14847__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14848,G__14849,seq14847__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14879 = arguments.length;
var i__4731__auto___14880 = (0);
while(true){
if((i__4731__auto___14880 < len__4730__auto___14879)){
args__4736__auto__.push((arguments[i__4731__auto___14880]));

var G__14881 = (i__4731__auto___14880 + (1));
i__4731__auto___14880 = G__14881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('cljs_bach.synthesis.add', cljs_bach.synthesis.add);

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs_bach.synthesis.apply_to_graph,cljs_bach.synthesis.join_in_parallel,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq14878){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14878));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__14882_14886 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14883_14887 = null;
var count__14884_14888 = (0);
var i__14885_14889 = (0);
while(true){
if((i__14885_14889 < count__14884_14888)){
var i_14890 = chunk__14883_14887.cljs$core$IIndexed$_nth$arity$2(null,i__14885_14889);
(data[i_14890] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14890) : generate_bit_BANG_.call(null,i_14890)));


var G__14891 = seq__14882_14886;
var G__14892 = chunk__14883_14887;
var G__14893 = count__14884_14888;
var G__14894 = (i__14885_14889 + (1));
seq__14882_14886 = G__14891;
chunk__14883_14887 = G__14892;
count__14884_14888 = G__14893;
i__14885_14889 = G__14894;
continue;
} else {
var temp__5720__auto___14895 = cljs.core.seq(seq__14882_14886);
if(temp__5720__auto___14895){
var seq__14882_14896__$1 = temp__5720__auto___14895;
if(cljs.core.chunked_seq_QMARK_(seq__14882_14896__$1)){
var c__4550__auto___14897 = cljs.core.chunk_first(seq__14882_14896__$1);
var G__14898 = cljs.core.chunk_rest(seq__14882_14896__$1);
var G__14899 = c__4550__auto___14897;
var G__14900 = cljs.core.count(c__4550__auto___14897);
var G__14901 = (0);
seq__14882_14886 = G__14898;
chunk__14883_14887 = G__14899;
count__14884_14888 = G__14900;
i__14885_14889 = G__14901;
continue;
} else {
var i_14902 = cljs.core.first(seq__14882_14896__$1);
(data[i_14902] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14902) : generate_bit_BANG_.call(null,i_14902)));


var G__14903 = cljs.core.next(seq__14882_14896__$1);
var G__14904 = null;
var G__14905 = (0);
var G__14906 = (0);
seq__14882_14886 = G__14903;
chunk__14883_14887 = G__14904;
count__14884_14888 = G__14905;
i__14885_14889 = G__14906;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize(cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__14907 = context.createBufferSource();
G__14907.buffer = (function (){var G__14908 = generate_bit_BANG_;
var G__14909 = context;
var G__14910 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14908,G__14909,G__14910) : cljs_bach.synthesis.buffer.call(null,G__14908,G__14909,G__14910));
})();

G__14907.start(at);

return G__14907;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise(white);
})();
goog.exportSymbol('cljs_bach.synthesis.white_noise', cljs_bach.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('cljs_bach.synthesis.constant', cljs_bach.synthesis.constant);
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__14911 = context.createOscillator();
G__14911.frequency.value = (0);

cljs_bach.synthesis.plug(G__14911.frequency,freq,context,at,duration);

G__14911.type = type;

G__14911.start(at);

G__14911.stop(((at + duration) + 1.0));

return G__14911;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sine");
goog.exportSymbol('cljs_bach.synthesis.sine', cljs_bach.synthesis.sine);
cljs_bach.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sawtooth");
goog.exportSymbol('cljs_bach.synthesis.sawtooth', cljs_bach.synthesis.sawtooth);
cljs_bach.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"square");
goog.exportSymbol('cljs_bach.synthesis.square', cljs_bach.synthesis.square);
cljs_bach.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"triangle");
goog.exportSymbol('cljs_bach.synthesis.triangle', cljs_bach.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var G__14913 = arguments.length;
switch (G__14913) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14914 = context.createBiquadFilter();
G__14914.frequency.value = (0);

cljs_bach.synthesis.plug(G__14914.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__14914.Q,q,context,at,duration);

G__14914.type = type;

return G__14914;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('cljs_bach.synthesis.low_pass', cljs_bach.synthesis.low_pass);
cljs_bach.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"highpass");
goog.exportSymbol('cljs_bach.synthesis.high_pass', cljs_bach.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14916 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__14916.pan,pan,context,at,duration);

return G__14916;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.stereo_panner', cljs_bach.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__14917 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__14917.delayTime,seconds,context,at,duration);

return G__14917;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14918 = context.createConvolver();
G__14918.buffer = (function (){var G__14919 = generate_bit_BANG_;
var G__14920 = context;
var G__14921 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14919,G__14920,G__14921) : cljs_bach.synthesis.buffer.call(null,G__14919,G__14920,G__14921));
})();

return G__14918;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__14922 = ((1) - (i / length));
var G__14923 = decay;
return Math.pow(G__14922,G__14923);
})());
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('cljs_bach.synthesis.reverb', cljs_bach.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,cljs_bach.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('cljs_bach.synthesis.enhance', cljs_bach.synthesis.enhance);
cljs_bach.synthesis.get_mp3 = (function cljs_bach$synthesis$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
cljs_bach.synthesis.raw_sample = (function cljs_bach$synthesis$raw_sample(uri){
var psuedo_promise = ({});
cljs_bach.synthesis.get_mp3(uri,((function (psuedo_promise){
return (function (p1__14924_SHARP_){
return psuedo_promise.data = p1__14924_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var node = (function (){var G__14927 = context.createBufferSource();
G__14927.start(at);

G__14927.stop((at + duration));

return G__14927;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5720__auto___14928 = psuedo_promise.data;
if(cljs.core.truth_(temp__5720__auto___14928)){
var data_14929 = temp__5720__auto___14928;
var temp__5718__auto___14930 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5718__auto___14930)){
var buffer_14931 = temp__5718__auto___14930;
set_buffer(buffer_14931);
} else {
context.decodeAudioData(data_14929,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
cljs_bach.synthesis.sample = cljs.core.memoize(cljs_bach.synthesis.raw_sample);
goog.exportSymbol('cljs_bach.synthesis.sample', cljs_bach.synthesis.sample);
