// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return the current time as recorded by the audio context.
 */
mecca.audio.synthesis.current_time = (function mecca$audio$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.audio.synthesis.current_time', mecca.audio.synthesis.current_time);
mecca.audio.synthesis.subgraph = (function mecca$audio$synthesis$subgraph(var_args){
var G__14002 = arguments.length;
switch (G__14002) {
case 2:
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

mecca.audio.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.audio.synthesis.source = (function mecca$audio$synthesis$source(node){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.audio.synthesis.sink = (function mecca$audio$synthesis$sink(node){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.audio.synthesis.run_with = (function mecca$audio$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('mecca.audio.synthesis.run_with', mecca.audio.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.audio.synthesis.destination = (function mecca$audio$synthesis$destination(context,at,duration){
return mecca.audio.synthesis.sink(context.destination);
});
goog.exportSymbol('mecca.audio.synthesis.destination', mecca.audio.synthesis.destination);
mecca.audio.synthesis.plug = (function mecca$audio$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(mecca.audio.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
mecca.audio.synthesis.gain = (function mecca$audio$synthesis$gain(level){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14004 = context.createGain();
mecca.audio.synthesis.plug(G__14004.gain,level,context,at,duration);

return G__14004;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.gain', mecca.audio.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
mecca.audio.synthesis.pass_through = mecca.audio.synthesis.gain(1.0);
goog.exportSymbol('mecca.audio.synthesis.pass_through', mecca.audio.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
mecca.audio.synthesis.envelope = (function mecca$audio$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14012 = arguments.length;
var i__4532__auto___14013 = (0);
while(true){
if((i__4532__auto___14013 < len__4531__auto___14012)){
args__4534__auto__.push((arguments[i__4532__auto___14013]));

var G__14014 = (i__4532__auto___14013 + (1));
i__4532__auto___14013 = G__14014;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_14015 = at;
var coordinates_14016 = corners;
while(true){
var temp__5457__auto___14017 = coordinates_14016;
if(cljs.core.truth_(temp__5457__auto___14017)){
var vec__14006_14018 = temp__5457__auto___14017;
var seq__14007_14019 = cljs.core.seq(vec__14006_14018);
var first__14008_14020 = cljs.core.first(seq__14007_14019);
var seq__14007_14021__$1 = cljs.core.next(seq__14007_14019);
var vec__14009_14022 = first__14008_14020;
var dx_14023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009_14022,(0),null);
var y_14024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009_14022,(1),null);
var remaining_14025 = seq__14007_14021__$1;
audio_node.gain.linearRampToValueAtTime(y_14024,(x_14015 + dx_14023));

var G__14026 = (dx_14023 + x_14015);
var G__14027 = remaining_14025;
x_14015 = G__14026;
coordinates_14016 = G__14027;
continue;
} else {
}
break;
}

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

mecca.audio.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq14005){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14005));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
mecca.audio.synthesis.adshr = (function mecca$audio$synthesis$adshr(attack,decay,sustain,hold,release){
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
mecca.audio.synthesis.adsr = (function mecca$audio$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__4037__auto__ = 0.0;
var y__4038__auto__ = remainder;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var node = mecca.audio.synthesis.adshr(attack,decay,sustain,hold,release);
return mecca.audio.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('mecca.audio.synthesis.adsr', mecca.audio.synthesis.adsr);
/**
 * A simple envelope.
 */
mecca.audio.synthesis.percussive = (function mecca$audio$synthesis$percussive(attack,decay){
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('mecca.audio.synthesis.percussive', mecca.audio.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.audio.synthesis.apply_to_graph = (function mecca$audio$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14031 = arguments.length;
var i__4532__auto___14032 = (0);
while(true){
if((i__4532__auto___14032 < len__4531__auto___14031)){
args__4534__auto__.push((arguments[i__4532__auto___14032]));

var G__14033 = (i__4532__auto___14032 + (1));
i__4532__auto___14032 = G__14033;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14028_SHARP_){
return mecca.audio.synthesis.run_with(p1__14028_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq14029){
var G__14030 = cljs.core.first(seq14029);
var seq14029__$1 = cljs.core.next(seq14029);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14030,seq14029__$1);
});

mecca.audio.synthesis.join_in_series = (function mecca$audio$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.audio.synthesis.connect = (function mecca$audio$synthesis$connect(upstream_synth,downstream_synth){
return mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(mecca.audio.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('mecca.audio.synthesis.connect', mecca.audio.synthesis.connect);
/**
 * Connect synths in series.
 */
mecca.audio.synthesis.connect__GT_ = (function mecca$audio$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14035 = arguments.length;
var i__4532__auto___14036 = (0);
while(true){
if((i__4532__auto___14036 < len__4531__auto___14035)){
args__4534__auto__.push((arguments[i__4532__auto___14036]));

var G__14037 = (i__4532__auto___14036 + (1));
i__4532__auto___14036 = G__14037;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.connect,nodes);
});

mecca.audio.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq14034){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14034));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14045 = arguments.length;
var i__4532__auto___14046 = (0);
while(true){
if((i__4532__auto___14046 < len__4531__auto___14045)){
args__4534__auto__.push((arguments[i__4532__auto___14046]));

var G__14047 = (i__4532__auto___14046 + (1));
i__4532__auto___14046 = G__14047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__14041_14048 = cljs.core.seq(graphs);
var chunk__14042_14049 = null;
var count__14043_14050 = (0);
var i__14044_14051 = (0);
while(true){
if((i__14044_14051 < count__14043_14050)){
var graph_14052 = chunk__14042_14049.cljs$core$IIndexed$_nth$arity$2(null,i__14044_14051);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14052).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14052))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14052));
} else {
}


var G__14053 = seq__14041_14048;
var G__14054 = chunk__14042_14049;
var G__14055 = count__14043_14050;
var G__14056 = (i__14044_14051 + (1));
seq__14041_14048 = G__14053;
chunk__14042_14049 = G__14054;
count__14043_14050 = G__14055;
i__14044_14051 = G__14056;
continue;
} else {
var temp__5457__auto___14057 = cljs.core.seq(seq__14041_14048);
if(temp__5457__auto___14057){
var seq__14041_14058__$1 = temp__5457__auto___14057;
if(cljs.core.chunked_seq_QMARK_(seq__14041_14058__$1)){
var c__4351__auto___14059 = cljs.core.chunk_first(seq__14041_14058__$1);
var G__14060 = cljs.core.chunk_rest(seq__14041_14058__$1);
var G__14061 = c__4351__auto___14059;
var G__14062 = cljs.core.count(c__4351__auto___14059);
var G__14063 = (0);
seq__14041_14048 = G__14060;
chunk__14042_14049 = G__14061;
count__14043_14050 = G__14062;
i__14044_14051 = G__14063;
continue;
} else {
var graph_14064 = cljs.core.first(seq__14041_14058__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14064).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14064))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14064));
} else {
}


var G__14065 = cljs.core.next(seq__14041_14058__$1);
var G__14066 = null;
var G__14067 = (0);
var G__14068 = (0);
seq__14041_14048 = G__14065;
chunk__14042_14049 = G__14066;
count__14043_14050 = G__14067;
i__14044_14051 = G__14068;
continue;
}
} else {
}
}
break;
}

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

mecca.audio.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq14038){
var G__14039 = cljs.core.first(seq14038);
var seq14038__$1 = cljs.core.next(seq14038);
var G__14040 = cljs.core.first(seq14038__$1);
var seq14038__$2 = cljs.core.next(seq14038__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14039,G__14040,seq14038__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14070 = arguments.length;
var i__4532__auto___14071 = (0);
while(true){
if((i__4532__auto___14071 < len__4531__auto___14070)){
args__4534__auto__.push((arguments[i__4532__auto___14071]));

var G__14072 = (i__4532__auto___14071 + (1));
i__4532__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});
goog.exportSymbol('mecca.audio.synthesis.add', mecca.audio.synthesis.add);

mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(mecca.audio.synthesis.apply_to_graph,mecca.audio.synthesis.join_in_parallel,mecca.audio.synthesis.pass_through,mecca.audio.synthesis.pass_through,synths);
});

mecca.audio.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq14069){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14069));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__14073_14077 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14074_14078 = null;
var count__14075_14079 = (0);
var i__14076_14080 = (0);
while(true){
if((i__14076_14080 < count__14075_14079)){
var i_14081 = chunk__14074_14078.cljs$core$IIndexed$_nth$arity$2(null,i__14076_14080);
(data[i_14081] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14081) : generate_bit_BANG_.call(null,i_14081)));


var G__14082 = seq__14073_14077;
var G__14083 = chunk__14074_14078;
var G__14084 = count__14075_14079;
var G__14085 = (i__14076_14080 + (1));
seq__14073_14077 = G__14082;
chunk__14074_14078 = G__14083;
count__14075_14079 = G__14084;
i__14076_14080 = G__14085;
continue;
} else {
var temp__5457__auto___14086 = cljs.core.seq(seq__14073_14077);
if(temp__5457__auto___14086){
var seq__14073_14087__$1 = temp__5457__auto___14086;
if(cljs.core.chunked_seq_QMARK_(seq__14073_14087__$1)){
var c__4351__auto___14088 = cljs.core.chunk_first(seq__14073_14087__$1);
var G__14089 = cljs.core.chunk_rest(seq__14073_14087__$1);
var G__14090 = c__4351__auto___14088;
var G__14091 = cljs.core.count(c__4351__auto___14088);
var G__14092 = (0);
seq__14073_14077 = G__14089;
chunk__14074_14078 = G__14090;
count__14075_14079 = G__14091;
i__14076_14080 = G__14092;
continue;
} else {
var i_14093 = cljs.core.first(seq__14073_14087__$1);
(data[i_14093] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14093) : generate_bit_BANG_.call(null,i_14093)));


var G__14094 = cljs.core.next(seq__14073_14087__$1);
var G__14095 = null;
var G__14096 = (0);
var G__14097 = (0);
seq__14073_14077 = G__14094;
chunk__14074_14078 = G__14095;
count__14075_14079 = G__14096;
i__14076_14080 = G__14097;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.audio.synthesis.buffer = cljs.core.memoize(mecca.audio.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
mecca.audio.synthesis.noise = (function mecca$audio$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.source((function (){var G__14098 = context.createBufferSource();
G__14098.buffer = (function (){var G__14099 = generate_bit_BANG_;
var G__14100 = context;
var G__14101 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14099,G__14100,G__14101) : mecca.audio.synthesis.buffer.call(null,G__14099,G__14100,G__14101));
})();

G__14098.start(at);

return G__14098;
})());
});
});
/**
 * Random noise.
 */
mecca.audio.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return mecca.audio.synthesis.noise(white);
})();
goog.exportSymbol('mecca.audio.synthesis.white_noise', mecca.audio.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
mecca.audio.synthesis.constant = (function mecca$audio$synthesis$constant(x){
return mecca.audio.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('mecca.audio.synthesis.constant', mecca.audio.synthesis.constant);
/**
 * A periodic wave.
 */
mecca.audio.synthesis.oscillator = (function mecca$audio$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return mecca.audio.synthesis.source((function (){var G__14102 = context.createOscillator();
G__14102.frequency.value = (0);

mecca.audio.synthesis.plug(G__14102.frequency,freq,context,at,duration);

G__14102.type = type;

G__14102.start(at);

G__14102.stop(((at + duration) + 1.0));

return G__14102;
})());
});
});
mecca.audio.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"sine");
goog.exportSymbol('mecca.audio.synthesis.sine', mecca.audio.synthesis.sine);
mecca.audio.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"sawtooth");
goog.exportSymbol('mecca.audio.synthesis.sawtooth', mecca.audio.synthesis.sawtooth);
mecca.audio.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"square");
goog.exportSymbol('mecca.audio.synthesis.square', mecca.audio.synthesis.square);
mecca.audio.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"triangle");
goog.exportSymbol('mecca.audio.synthesis.triangle', mecca.audio.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
mecca.audio.synthesis.biquad_filter = (function mecca$audio$synthesis$biquad_filter(var_args){
var G__14104 = arguments.length;
switch (G__14104) {
case 2:
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14105 = context.createBiquadFilter();
G__14105.frequency.value = (0);

mecca.audio.synthesis.plug(G__14105.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__14105.Q,q,context,at,duration);

G__14105.type = type;

return G__14105;
})());
});
});

mecca.audio.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

mecca.audio.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('mecca.audio.synthesis.low_pass', mecca.audio.synthesis.low_pass);
mecca.audio.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.biquad_filter,"highpass");
goog.exportSymbol('mecca.audio.synthesis.high_pass', mecca.audio.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
mecca.audio.synthesis.stereo_panner = (function mecca$audio$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14107 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__14107.pan,pan,context,at,duration);

return G__14107;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.stereo_panner', mecca.audio.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
mecca.audio.synthesis.delay_line = (function mecca$audio$synthesis$delay_line(seconds){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__14108 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__14108.delayTime,seconds,context,at,duration);

return G__14108;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14109 = context.createConvolver();
G__14109.buffer = (function (){var G__14110 = generate_bit_BANG_;
var G__14111 = context;
var G__14112 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14110,G__14111,G__14112) : mecca.audio.synthesis.buffer.call(null,G__14110,G__14111,G__14112));
})();

return G__14109;
})());
});
});
/**
 * Crude reverb.
 */
mecca.audio.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return mecca.audio.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('mecca.audio.synthesis.reverb', mecca.audio.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
mecca.audio.synthesis.enhance = (function mecca$audio$synthesis$enhance(effect,level){
return mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.audio.synthesis.pass_through,mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,mecca.audio.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('mecca.audio.synthesis.enhance', mecca.audio.synthesis.enhance);
mecca.audio.synthesis.align_concert_a = (function mecca$audio$synthesis$align_concert_a(tuning){
return (function (midi){
return ((tuning.cljs$core$IFn$_invoke$arity$1 ? tuning.cljs$core$IFn$_invoke$arity$1(midi) : tuning.call(null,midi)) * ((440) / (tuning.cljs$core$IFn$_invoke$arity$1 ? tuning.cljs$core$IFn$_invoke$arity$1((69)) : tuning.call(null,(69)))));
});
});
mecca.audio.synthesis.temper = (function mecca$audio$synthesis$temper(midi,ratios){
if((midi < (0))){
return (((1) / (2)) * (function (){var G__14113 = (midi + (12));
var G__14114 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__14113,G__14114) : mecca.audio.synthesis.temper.call(null,G__14113,G__14114));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__14115 = (midi - (12));
var G__14116 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__14115,G__14116) : mecca.audio.synthesis.temper.call(null,G__14115,G__14116));
})());
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ratios,midi);

}
}
});
mecca.audio.synthesis.tune = (function mecca$audio$synthesis$tune(root,incremental_ratios){
var geometric_progression = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reductions,cljs.core._STAR_,(1));
var ratios = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (geometric_progression){
return (function mecca$audio$synthesis$tune_$_normalise(ratio){
if((ratio < (2))){
return ratio;
} else {
return mecca$audio$synthesis$tune_$_normalise((ratio / (2)));
}
});})(geometric_progression))
,(geometric_progression.cljs$core$IFn$_invoke$arity$1 ? geometric_progression.cljs$core$IFn$_invoke$arity$1(incremental_ratios) : geometric_progression.call(null,incremental_ratios))));
var tuning = ((function (geometric_progression,ratios){
return (function (midi){
return mecca.audio.synthesis.temper((midi - root),ratios);
});})(geometric_progression,ratios))
;
return mecca.audio.synthesis.align_concert_a(tuning);
});
/**
 * Converts midi to hertz using equal temperament.
 *   e.g. (equal 69)
 */
mecca.audio.synthesis.equal = mecca.audio.synthesis.tune((69),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((11),Math.pow((2),((1) / (12)))));
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.audio.synthesis.play_from_BANG_ = (function mecca$audio$synthesis$play_from_BANG_(audiocontext,from,notes){
var seq__14117 = cljs.core.seq(notes);
var chunk__14118 = null;
var count__14119 = (0);
var i__14120 = (0);
while(true){
if((i__14120 < count__14119)){
var map__14121 = chunk__14118.cljs$core$IIndexed$_nth$arity$2(null,i__14120);
var map__14121__$1 = ((((!((map__14121 == null)))?(((((map__14121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14121):map__14121);
var note = map__14121__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14121__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14121__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14121__$1,cljs.core.cst$kw$instrument);
var at_14127 = (time + from);
var synth_instance_14128 = (function (){var G__14123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__14123) : instrument.call(null,G__14123));
})();
var connected_instance_14129 = mecca.audio.synthesis.connect(synth_instance_14128,mecca.audio.synthesis.destination);
(connected_instance_14129.cljs$core$IFn$_invoke$arity$3 ? connected_instance_14129.cljs$core$IFn$_invoke$arity$3(audiocontext,at_14127,duration) : connected_instance_14129.call(null,audiocontext,at_14127,duration));


var G__14130 = seq__14117;
var G__14131 = chunk__14118;
var G__14132 = count__14119;
var G__14133 = (i__14120 + (1));
seq__14117 = G__14130;
chunk__14118 = G__14131;
count__14119 = G__14132;
i__14120 = G__14133;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14117);
if(temp__5457__auto__){
var seq__14117__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14117__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14117__$1);
var G__14134 = cljs.core.chunk_rest(seq__14117__$1);
var G__14135 = c__4351__auto__;
var G__14136 = cljs.core.count(c__4351__auto__);
var G__14137 = (0);
seq__14117 = G__14134;
chunk__14118 = G__14135;
count__14119 = G__14136;
i__14120 = G__14137;
continue;
} else {
var map__14124 = cljs.core.first(seq__14117__$1);
var map__14124__$1 = ((((!((map__14124 == null)))?(((((map__14124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14124):map__14124);
var note = map__14124__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14124__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14124__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14124__$1,cljs.core.cst$kw$instrument);
var at_14138 = (time + from);
var synth_instance_14139 = (function (){var G__14126 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__14126) : instrument.call(null,G__14126));
})();
var connected_instance_14140 = mecca.audio.synthesis.connect(synth_instance_14139,mecca.audio.synthesis.destination);
(connected_instance_14140.cljs$core$IFn$_invoke$arity$3 ? connected_instance_14140.cljs$core$IFn$_invoke$arity$3(audiocontext,at_14138,duration) : connected_instance_14140.call(null,audiocontext,at_14138,duration));


var G__14141 = cljs.core.next(seq__14117__$1);
var G__14142 = null;
var G__14143 = (0);
var G__14144 = (0);
seq__14117 = G__14141;
chunk__14118 = G__14142;
count__14119 = G__14143;
i__14120 = G__14144;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a sequence of notes and play them in an audiocontext.
 */
mecca.audio.synthesis.play_BANG_ = (function mecca$audio$synthesis$play_BANG_(audiocontext,notes){
return mecca.audio.synthesis.play_from_BANG_(audiocontext,mecca.audio.synthesis.current_time(audiocontext),notes);
});
