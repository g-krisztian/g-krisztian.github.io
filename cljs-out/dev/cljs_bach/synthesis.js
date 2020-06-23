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
var G__14745 = arguments.length;
switch (G__14745) {
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
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14747 = context.createGain();
cljs_bach.synthesis.plug(G__14747.gain,level,context,at,duration);

return G__14747;
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
var len__4730__auto___14755 = arguments.length;
var i__4731__auto___14756 = (0);
while(true){
if((i__4731__auto___14756 < len__4730__auto___14755)){
args__4736__auto__.push((arguments[i__4731__auto___14756]));

var G__14757 = (i__4731__auto___14756 + (1));
i__4731__auto___14756 = G__14757;
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

var x_14758 = at;
var coordinates_14759 = corners;
while(true){
var temp__5720__auto___14760 = coordinates_14759;
if(cljs.core.truth_(temp__5720__auto___14760)){
var vec__14749_14761 = temp__5720__auto___14760;
var seq__14750_14762 = cljs.core.seq(vec__14749_14761);
var first__14751_14763 = cljs.core.first(seq__14750_14762);
var seq__14750_14764__$1 = cljs.core.next(seq__14750_14762);
var vec__14752_14765 = first__14751_14763;
var dx_14766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14752_14765,(0),null);
var y_14767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14752_14765,(1),null);
var remaining_14768 = seq__14750_14764__$1;
audio_node.gain.linearRampToValueAtTime(y_14767,(x_14758 + dx_14766));

var G__14769 = (dx_14766 + x_14758);
var G__14770 = remaining_14768;
x_14758 = G__14769;
coordinates_14759 = G__14770;
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
cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq14748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14748));
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
var len__4730__auto___14774 = arguments.length;
var i__4731__auto___14775 = (0);
while(true){
if((i__4731__auto___14775 < len__4730__auto___14774)){
args__4736__auto__.push((arguments[i__4731__auto___14775]));

var G__14776 = (i__4731__auto___14775 + (1));
i__4731__auto___14775 = G__14776;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14771_SHARP_){
return cljs_bach.synthesis.run_with(p1__14771_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq14772){
var G__14773 = cljs.core.first(seq14772);
var seq14772__$1 = cljs.core.next(seq14772);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14773,seq14772__$1);
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
var len__4730__auto___14778 = arguments.length;
var i__4731__auto___14779 = (0);
while(true){
if((i__4731__auto___14779 < len__4730__auto___14778)){
args__4736__auto__.push((arguments[i__4731__auto___14779]));

var G__14780 = (i__4731__auto___14779 + (1));
i__4731__auto___14779 = G__14780;
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
cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq14777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14777));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14788 = arguments.length;
var i__4731__auto___14789 = (0);
while(true){
if((i__4731__auto___14789 < len__4730__auto___14788)){
args__4736__auto__.push((arguments[i__4731__auto___14789]));

var G__14790 = (i__4731__auto___14789 + (1));
i__4731__auto___14789 = G__14790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__14784_14791 = cljs.core.seq(graphs);
var chunk__14785_14792 = null;
var count__14786_14793 = (0);
var i__14787_14794 = (0);
while(true){
if((i__14787_14794 < count__14786_14793)){
var graph_14795 = chunk__14785_14792.cljs$core$IIndexed$_nth$arity$2(null,i__14787_14794);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14795).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14795))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14795));
} else {
}


var G__14796 = seq__14784_14791;
var G__14797 = chunk__14785_14792;
var G__14798 = count__14786_14793;
var G__14799 = (i__14787_14794 + (1));
seq__14784_14791 = G__14796;
chunk__14785_14792 = G__14797;
count__14786_14793 = G__14798;
i__14787_14794 = G__14799;
continue;
} else {
var temp__5720__auto___14800 = cljs.core.seq(seq__14784_14791);
if(temp__5720__auto___14800){
var seq__14784_14801__$1 = temp__5720__auto___14800;
if(cljs.core.chunked_seq_QMARK_(seq__14784_14801__$1)){
var c__4550__auto___14802 = cljs.core.chunk_first(seq__14784_14801__$1);
var G__14803 = cljs.core.chunk_rest(seq__14784_14801__$1);
var G__14804 = c__4550__auto___14802;
var G__14805 = cljs.core.count(c__4550__auto___14802);
var G__14806 = (0);
seq__14784_14791 = G__14803;
chunk__14785_14792 = G__14804;
count__14786_14793 = G__14805;
i__14787_14794 = G__14806;
continue;
} else {
var graph_14807 = cljs.core.first(seq__14784_14801__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14807).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14807))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14807));
} else {
}


var G__14808 = cljs.core.next(seq__14784_14801__$1);
var G__14809 = null;
var G__14810 = (0);
var G__14811 = (0);
seq__14784_14791 = G__14808;
chunk__14785_14792 = G__14809;
count__14786_14793 = G__14810;
i__14787_14794 = G__14811;
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
cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq14781){
var G__14782 = cljs.core.first(seq14781);
var seq14781__$1 = cljs.core.next(seq14781);
var G__14783 = cljs.core.first(seq14781__$1);
var seq14781__$2 = cljs.core.next(seq14781__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14782,G__14783,seq14781__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14813 = arguments.length;
var i__4731__auto___14814 = (0);
while(true){
if((i__4731__auto___14814 < len__4730__auto___14813)){
args__4736__auto__.push((arguments[i__4731__auto___14814]));

var G__14815 = (i__4731__auto___14814 + (1));
i__4731__auto___14814 = G__14815;
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
cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq14812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14812));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__14816_14820 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14817_14821 = null;
var count__14818_14822 = (0);
var i__14819_14823 = (0);
while(true){
if((i__14819_14823 < count__14818_14822)){
var i_14824 = chunk__14817_14821.cljs$core$IIndexed$_nth$arity$2(null,i__14819_14823);
(data[i_14824] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14824) : generate_bit_BANG_.call(null,i_14824)));


var G__14825 = seq__14816_14820;
var G__14826 = chunk__14817_14821;
var G__14827 = count__14818_14822;
var G__14828 = (i__14819_14823 + (1));
seq__14816_14820 = G__14825;
chunk__14817_14821 = G__14826;
count__14818_14822 = G__14827;
i__14819_14823 = G__14828;
continue;
} else {
var temp__5720__auto___14829 = cljs.core.seq(seq__14816_14820);
if(temp__5720__auto___14829){
var seq__14816_14830__$1 = temp__5720__auto___14829;
if(cljs.core.chunked_seq_QMARK_(seq__14816_14830__$1)){
var c__4550__auto___14831 = cljs.core.chunk_first(seq__14816_14830__$1);
var G__14832 = cljs.core.chunk_rest(seq__14816_14830__$1);
var G__14833 = c__4550__auto___14831;
var G__14834 = cljs.core.count(c__4550__auto___14831);
var G__14835 = (0);
seq__14816_14820 = G__14832;
chunk__14817_14821 = G__14833;
count__14818_14822 = G__14834;
i__14819_14823 = G__14835;
continue;
} else {
var i_14836 = cljs.core.first(seq__14816_14830__$1);
(data[i_14836] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14836) : generate_bit_BANG_.call(null,i_14836)));


var G__14837 = cljs.core.next(seq__14816_14830__$1);
var G__14838 = null;
var G__14839 = (0);
var G__14840 = (0);
seq__14816_14820 = G__14837;
chunk__14817_14821 = G__14838;
count__14818_14822 = G__14839;
i__14819_14823 = G__14840;
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
return cljs_bach.synthesis.source((function (){var G__14841 = context.createBufferSource();
G__14841.buffer = (function (){var G__14842 = generate_bit_BANG_;
var G__14843 = context;
var G__14844 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14842,G__14843,G__14844) : cljs_bach.synthesis.buffer.call(null,G__14842,G__14843,G__14844));
})();

G__14841.start(at);

return G__14841;
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
return cljs_bach.synthesis.source((function (){var G__14845 = context.createOscillator();
G__14845.frequency.value = (0);

cljs_bach.synthesis.plug(G__14845.frequency,freq,context,at,duration);

G__14845.type = type;

G__14845.start(at);

G__14845.stop(((at + duration) + 1.0));

return G__14845;
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
var G__14847 = arguments.length;
switch (G__14847) {
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
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14848 = context.createBiquadFilter();
G__14848.frequency.value = (0);

cljs_bach.synthesis.plug(G__14848.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__14848.Q,q,context,at,duration);

G__14848.type = type;

return G__14848;
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
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14850 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__14850.pan,pan,context,at,duration);

return G__14850;
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
var G__14851 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__14851.delayTime,seconds,context,at,duration);

return G__14851;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14852 = context.createConvolver();
G__14852.buffer = (function (){var G__14853 = generate_bit_BANG_;
var G__14854 = context;
var G__14855 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14853,G__14854,G__14855) : cljs_bach.synthesis.buffer.call(null,G__14853,G__14854,G__14855));
})();

return G__14852;
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
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__14856 = ((1) - (i / length));
var G__14857 = decay;
return Math.pow(G__14856,G__14857);
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
return (function (p1__14858_SHARP_){
return psuedo_promise.data = p1__14858_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var node = (function (){var G__14861 = context.createBufferSource();
G__14861.start(at);

G__14861.stop((at + duration));

return G__14861;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5720__auto___14862 = psuedo_promise.data;
if(cljs.core.truth_(temp__5720__auto___14862)){
var data_14863 = temp__5720__auto___14862;
var temp__5718__auto___14864 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5718__auto___14864)){
var buffer_14865 = temp__5718__auto___14864;
set_buffer(buffer_14865);
} else {
context.decodeAudioData(data_14863,set_buffer);
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
