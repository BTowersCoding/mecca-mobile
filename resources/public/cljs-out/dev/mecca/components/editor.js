// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components.editor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.components.notation');
goog.require('mecca.components.key');
goog.require('mecca.mario');
mecca.components.editor.color_paths = (function mecca$components$editor$color_paths(var_args){
var G__13081 = arguments.length;
switch (G__13081) {
case 4:
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4 = (function (paths,x,y,scale){
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,scale);
});

mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$5 = (function (attrs,paths,x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$components$editor$iter__13082(s__13083){
return (new cljs.core.LazySeq(null,(function (){
var s__13083__$1 = s__13083;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13083__$1);
if(temp__5457__auto__){
var s__13083__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13083__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13083__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13085 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13084 = (0);
while(true){
if((i__13084 < size__4323__auto__)){
var vec__13086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13084);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(1),null);
cljs.core.chunk_append(b__13085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13093 = (i__13084 + (1));
i__13084 = G__13093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13085),mecca$components$editor$iter__13082(cljs.core.chunk_rest(s__13083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13085),null);
}
} else {
var vec__13089 = cljs.core.first(s__13083__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$components$editor$iter__13082(cljs.core.rest(s__13083__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(paths);
})());
});

mecca.components.editor.color_paths.cljs$lang$maxFixedArity = 5;

mecca.components.editor.tempo_slider = (function mecca$components$editor$tempo_slider(x,y,scale){
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#686850","M1 0h3M0 1h1M4 1h1M0 2h1M4 2h1M0 3h1M4 3h1M0 4h1M4 4h1M0 5h1M4 5h1M0 6h1M4 6h1M1 7h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8e8","M1 1h2M1 2h1M1 3h1M1 4h1M1 5h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c8d0a8","M3 1h1M1 6h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e0e8c0","M2 2h1M2 3h1M2 4h1M2 5h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a0a880","M3 2h1M3 3h1M3 4h1M3 5h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b0b890","M2 6h2"], null)], null),x,y,scale);
});
mecca.components.editor.scroll_cue_left = (function mecca$components$editor$scroll_cue_left(x,y,scale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"], null)], null),x,y,scale)], null);
});
mecca.components.editor.scroll_cue_right = (function mecca$components$editor$scroll_cue_right(x,y,scale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M2 0h1M2 1h2M0 2h3M4 2h1M5 3h1M6 4h1M5 5h1M0 6h3M4 6h1M2 7h2M2 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M3 2h1M0 3h5M0 4h6M0 5h5M3 6h1"], null)], null),x,y,scale)], null);
});
mecca.components.editor.undo_dog = (function mecca$components$editor$undo_dog(x,y,scale){
var undos_QMARK_ = (function (){var G__13094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undos_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13094) : re_frame.core.subscribe.call(null,G__13094));
})();
return ((function (undos_QMARK_){
return (function (){
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.deref(undos_QMARK_))?((function (undos_QMARK_){
return (function (){
var G__13095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$undo], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13095) : re_frame.core.dispatch.call(null,G__13095));
});})(undos_QMARK_))
:null)], null),(cljs.core.truth_(cljs.core.deref(undos_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M0 0h1M3 0h8M13 0h1M0 1h1M4 1h6M13 1h1M0 2h2M4 2h6M12 2h2M0 3h2M12 3h2M0 4h2M12 4h2M0 5h3M5 5h1M8 5h1M11 5h3M0 6h3M11 6h3M0 7h3M6 7h2M11 7h3M0 8h3M6 8h2M11 8h3M0 9h3M4 9h2M8 9h2M11 9h3M0 10h3M4 10h1M9 10h1M11 10h3M0 11h3M5 11h1M8 11h1M11 11h3M0 12h4M6 12h2M10 12h4M0 13h5M9 13h5M0 14h14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffc694","M1 0h1M12 0h1M1 1h1M3 1h1M11 1h2M11 2h1M3 3h2M2 4h2M9 4h1M11 4h1M3 5h1M9 5h1M3 6h1M9 6h1M3 7h1M8 7h2M3 8h1M8 8h2M3 9h1M3 10h1M4 12h1M6 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffefbd","M2 0h1M11 0h1M2 1h1M10 1h1M2 2h1M10 2h1M2 3h1M5 3h6M4 4h5M4 5h1M6 5h2M4 6h1M6 6h2M4 7h2M4 8h2M4 11h1M5 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d6944a","M3 2h1M11 3h1M10 4h1M10 5h1M10 6h1M10 7h1M10 8h1M10 9h1M10 10h1M3 11h1M9 11h2M8 12h2M5 13h1M7 13h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","M5 6h1M8 6h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b54a00","M6 9h2M5 10h4M6 11h2"], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M0 0h14M0 1h1M4 1h6M13 1h1M0 2h2M5 2h4M12 2h2M0 3h2M3 3h1M10 3h1M12 3h2M0 4h2M12 4h2M0 5h3M11 5h3M0 6h3M5 6h1M8 6h1M11 6h3M0 7h3M11 7h3M0 8h3M11 8h3M0 9h3M6 9h2M11 9h3M0 10h3M6 10h2M11 10h3M0 11h3M5 11h4M11 11h3M0 12h4M10 12h4M0 13h5M9 13h5M0 14h14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c6c6c6","M1 1h3M10 1h3M2 2h1M4 2h1M9 2h1M5 3h4M4 4h1M6 4h1M8 4h1M4 5h1M6 5h2M6 6h1M4 7h2M4 8h3M5 9h1M4 10h2M4 11h1M5 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#737373","M3 2h1M10 2h1M10 4h1M10 6h1M10 8h1M10 10h1M8 12h1M7 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a5a5b5","M11 2h1M2 3h1M4 3h1M9 3h1M11 3h1M3 4h1M9 4h1M3 5h1M9 5h1M3 6h1M7 6h1M9 6h1M3 7h1M7 7h3M3 8h1M7 8h3M3 9h1M8 9h2M3 10h1M8 10h2M4 12h1M6 12h2M6 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#848484","M2 4h1M11 4h1M10 5h1M10 7h1M10 9h1M3 11h1M9 11h2M9 12h1M5 13h1M8 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#adadad","M5 4h1M7 4h1M4 6h1M6 7h1M4 9h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","M5 5h1M8 5h1"], null)], null)),(x * (5)),(y * (5)),scale);
});
;})(undos_QMARK_))
});
mecca.components.editor.redo_rabbit = (function mecca$components$editor$redo_rabbit(x,y,scale){
var redos_QMARK_ = (function (){var G__13096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$redos_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13096) : re_frame.core.subscribe.call(null,G__13096));
})();
return ((function (redos_QMARK_){
return (function (){
return mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.deref(redos_QMARK_))?((function (redos_QMARK_){
return (function (){
var G__13097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$redo], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13097) : re_frame.core.dispatch.call(null,G__13097));
});})(redos_QMARK_))
:null)], null),(cljs.core.truth_(cljs.core.deref(redos_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","M0 0h3M5 0h5M12 0h3M0 1h2M6 1h2M13 1h2M0 2h1M2 2h1M5 2h1M7 2h1M9 2h1M12 2h1M14 2h1M0 3h1M2 3h1M5 3h1M9 3h1M12 3h1M14 3h1M0 4h1M2 4h1M5 4h1M9 4h1M12 4h1M14 4h1M0 5h1M3 5h2M10 5h2M14 5h1M0 6h2M13 6h2M0 7h1M14 7h1M0 12h1M14 12h1M0 13h2M13 13h2M0 14h4M11 14h4M0 15h2M3 15h3M9 15h4M14 15h1M0 16h11M12 16h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M3 0h2M10 0h2M2 1h1M5 1h1M9 1h1M12 1h1M1 2h1M3 2h2M6 2h1M8 2h1M10 2h2M13 2h1M1 3h1M3 3h2M6 3h3M10 3h2M13 3h1M1 4h1M3 4h2M6 4h1M8 4h1M10 4h2M13 4h1M1 5h1M5 5h1M9 5h1M13 5h1M2 6h1M12 6h1M1 7h1M6 7h1M8 7h1M13 7h1M0 8h1M14 8h1M0 9h1M14 9h1M0 10h1M14 10h1M0 11h1M4 11h1M10 11h1M14 11h1M1 12h1M5 12h1M9 12h1M13 12h1M2 13h2M6 13h3M11 13h2M4 14h2M9 14h2M6 15h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00ff00","M3 1h2M10 1h2M7 4h1M2 5h1M6 5h3M12 5h1M3 6h9M2 7h4M7 7h1M9 7h4M1 8h13M1 9h13M1 10h13M1 11h3M5 11h5M11 11h3M2 12h3M6 12h3M10 12h3M4 13h2M9 13h2M6 14h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ceefe7","M8 1h1M2 15h1M13 15h1M11 16h1"], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#848484","M0 0h15M0 1h1M2 1h1M5 1h1M7 1h1M9 1h1M12 1h1M14 1h1M0 2h2M6 2h3M13 2h2M0 3h1M7 3h1M14 3h1M0 4h1M14 4h1M0 5h1M14 5h1M0 6h1M14 6h1M0 7h2M13 7h2M0 8h1M14 8h1M0 13h1M14 13h1M0 14h2M13 14h2M0 15h1M2 15h2M11 15h2M14 15h1M0 16h3M4 16h2M9 16h2M12 16h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#737373","M1 1h1M6 1h1M8 1h1M13 1h1M1 15h1M13 15h1M3 16h1M11 16h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M3 1h2M10 1h2M2 2h1M5 2h1M9 2h1M12 2h1M1 3h2M6 3h1M8 3h1M12 3h2M1 4h1M3 4h1M6 4h3M11 4h1M13 4h1M1 5h1M4 5h1M6 5h1M8 5h1M10 5h1M13 5h1M1 6h1M5 6h1M9 6h1M13 6h1M2 7h1M12 7h1M1 8h1M6 8h1M8 8h1M13 8h1M0 9h1M14 9h1M0 10h1M14 10h1M0 11h1M14 11h1M0 12h1M14 12h1M1 13h1M6 13h3M13 13h1M2 14h2M11 14h2M4 15h2M9 15h2M6 16h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c6c6c6","M3 2h2M10 2h2M3 3h3M9 3h2M2 4h1M4 4h1M9 4h2M12 4h1M2 5h2M5 5h1M7 5h1M9 5h1M11 5h2M2 6h1M4 6h1M6 6h3M10 6h2M3 7h3M7 7h3M11 7h1M2 8h2M5 8h1M7 8h1M9 8h4M1 9h6M8 9h2M11 9h3M1 10h1M3 10h2M6 10h6M13 10h1M1 11h3M5 11h3M9 11h2M12 11h2M1 12h2M4 12h3M8 12h6M2 13h3M9 13h1M11 13h2M4 14h7M6 15h1M8 15h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#adadad","M11 3h1M5 4h1M3 6h1M12 6h1M6 7h1M10 7h1M4 8h1M7 9h1M10 9h1M2 10h1M5 10h1M12 10h1M4 11h1M8 11h1M11 11h1M3 12h1M7 12h1M5 13h1M10 13h1M7 15h1"], null)], null)),(x * (5)),(y * (5)),scale);
});
;})(redos_QMARK_))
});
mecca.components.editor.advance_editor = (function mecca$components$editor$advance_editor(){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13098) : re_frame.core.dispatch.call(null,G__13098));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,(58),"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,((4) * 60.8),((4) * (8)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,((4) * 60.8),((4) * (14)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,((4) * 60.8),((4) * (20)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,((4) * 60.8),((4) * (26)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,((4) * 60.8),((4) * (32)),0.25], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.components.editor.retract_editor = (function mecca$components$editor$retract_editor(x){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$retract_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13099) : re_frame.core.dispatch.call(null,G__13099));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,x,"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((4) * ((3) + x)),((4) * (8)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((4) * ((3) + x)),((4) * (14)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((4) * ((3) + x)),((4) * (20)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((4) * ((3) + x)),((4) * (26)),0.25], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((4) * ((3) + x)),((4) * (32)),0.25], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.components.editor.note_guides = (function mecca$components$editor$note_guides(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(3),(3)], null)], null);
});
mecca.components.editor.robot = (function mecca$components$editor$robot(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.3) translate(-24,-1.3)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M40 1h30M39 2h2M69 2h2M39 3h1M43 3h1M47 3h4M61 3h4M67 3h2M29 4h3M39 4h1M42 4h1M45 4h2M51 4h1M59 4h2M65 4h2M68 4h1M78 4h3M29 5h2M32 5h1M39 5h1M44 5h1M49 5h2M52 5h1M58 5h1M63 5h2M66 5h1M68 5h1M77 5h1M29 6h1M32 6h2M39 6h1M43 6h1M45 6h1M51 6h1M53 6h1M57 6h1M59 6h1M65 6h1M67 6h2M76 6h2M29 7h1M31 7h1M33 7h2M39 7h1M43 7h1M53 7h1M57 7h1M67 7h2M76 7h1M78 7h1M80 7h1M29 8h1M34 8h2M39 8h1M43 8h1M53 8h1M57 8h1M59 8h1M67 8h2M75 8h1M29 9h1M31 9h1M35 9h1M37 9h3M45 9h2M53 9h3M59 9h2M67 9h2M78 9h1M80 9h1M29 10h1M35 10h1M37 10h1M39 10h1M47 10h1M52 10h3M56 10h1M61 10h1M66 10h3M75 10h1M29 11h1M34 11h1M39 11h1M47 11h7M57 11h1M61 11h6M68 11h1M76 11h1M99 11h3M108 11h6M29 12h2M33 12h1M39 12h1M52 12h1M58 12h1M68 12h1M77 12h1M79 12h1M111 12h2M29 13h2M32 13h1M35 13h1M39 13h1M51 13h1M55 13h1M59 13h1M68 13h1M74 13h1M110 13h2M29 14h2M34 14h1M39 14h1M59 14h1M68 14h1M75 14h1M109 14h2M33 15h1M39 15h1M62 15h2M68 15h1M76 15h1M108 15h2M32 16h1M39 16h1M48 16h1M58 16h1M63 16h2M68 16h1M77 16h1M105 16h4M29 17h3M39 17h1M62 17h3M68 17h1M78 17h3M107 17h1M39 18h1M62 18h3M68 18h1M107 18h1M39 19h1M43 19h1M62 19h3M67 19h2M107 19h1M39 20h1M42 20h1M44 20h3M48 20h1M58 20h1M63 20h4M68 20h1M107 20h1M39 21h2M107 21h1M107 22h1M107 23h1M25 24h62M107 24h1M24 25h1M86 25h1M107 25h1M24 26h1M107 26h1M24 27h1M28 27h1M36 27h1M44 27h1M52 27h1M60 27h1M68 27h1M76 27h1M84 27h1M107 27h1M24 28h1M27 28h1M35 28h1M43 28h1M51 28h1M59 28h1M67 28h1M75 28h1M83 28h1M107 28h1M24 29h1M107 29h1M24 30h1M107 30h1M24 31h1M107 31h1M24 32h1M31 32h1M107 32h1M24 33h1M31 33h1M80 33h1M107 33h1M24 34h1M80 34h1M107 34h1M24 35h1M107 35h1M24 36h1M28 36h1M84 36h1M107 36h1M24 37h1M27 37h1M83 37h1M107 37h1M24 38h1M107 38h1M24 39h1M107 39h1M24 40h1M107 40h1M24 41h1M89 41h3M93 41h1M95 41h1M107 41h1M24 42h1M88 42h2M96 42h1M107 42h1M24 43h1M89 43h3M93 43h1M95 43h1M104 43h1M107 43h2M24 44h1M28 44h1M84 44h1M89 44h1M105 44h1M107 44h1M110 44h1M24 45h1M27 45h1M83 45h1M89 45h1M102 45h1M106 45h1M24 46h1M89 46h1M102 46h1M108 46h1M24 47h1M89 47h1M102 47h1M108 47h1M24 48h1M89 48h3M93 48h1M95 48h1M98 48h1M102 48h1M108 48h1M24 49h1M98 49h2M102 49h1M108 49h1M24 50h1M102 50h1M108 50h1M24 51h1M102 51h1M108 51h1M24 52h1M28 52h1M84 52h1M102 52h1M106 52h1M24 53h1M27 53h1M83 53h1M105 53h2M110 53h1M24 54h1M104 54h2M107 54h1M24 55h1M104 55h1M107 55h2M24 56h1M107 56h1M24 57h1M107 57h1M24 58h1M107 58h1M24 59h1M107 59h1M24 60h1M28 60h1M84 60h1M107 60h1M24 61h1M27 61h1M83 61h1M107 61h1M18 62h1M24 62h1M107 62h1M24 63h1M107 63h1M16 64h2M24 64h1M107 64h1M15 65h1M24 65h1M107 65h1M15 66h1M24 66h1M107 66h1M15 67h1M24 67h1M107 67h1M15 68h1M24 68h1M28 68h1M84 68h1M107 68h1M24 69h1M27 69h1M83 69h1M107 69h1M24 70h1M107 70h1M22 71h3M91 71h2M107 71h1M21 72h1M24 72h1M88 72h2M107 72h1M11 73h2M14 73h7M22 73h3M91 73h2M95 73h2M107 73h1M11 74h1M22 74h3M91 74h2M94 74h1M97 74h1M107 74h1M12 75h1M14 75h7M24 75h1M96 75h1M107 75h1M12 76h1M14 76h7M24 76h1M28 76h1M84 76h1M94 76h1M107 76h1M24 77h1M27 77h1M83 77h1M107 77h1M4 78h8M21 78h1M24 78h1M94 78h1M98 78h2M107 78h1M3 79h1M22 79h3M96 79h1M107 79h1M2 80h1M12 80h1M14 80h7M22 80h3M92 80h1M96 80h1M2 81h1M5 81h6M12 81h1M14 81h7M22 81h3M92 81h1M98 81h8M2 82h1M5 82h1M22 82h3M92 82h1M98 82h2M2 83h1M5 83h1M7 83h4M24 83h1M2 84h1M5 84h1M7 84h1M24 84h1M28 84h1M84 84h1M2 85h1M5 85h1M7 85h1M24 85h1M27 85h1M83 85h1M2 86h2M7 86h1M12 86h1M14 86h7M24 86h1M24 87h1M22 88h3M24 89h1M24 90h1M24 91h1M24 92h1M28 92h1M84 92h1M24 93h1M27 93h1M83 93h1M106 93h1M24 94h1M106 94h1M24 95h1M106 95h1M24 96h1M106 96h1M24 97h1M106 97h1M24 98h1M63 98h11M106 98h1M24 99h1M62 99h1M74 99h1M105 99h1M24 100h1M28 100h1M62 100h1M74 100h2M84 100h1M100 100h1M102 100h1M104 100h1M24 101h1M27 101h1M62 101h1M74 101h2M83 101h1M88 101h1M95 101h1M97 101h1M99 101h1M24 102h1M63 102h13M24 103h1M62 103h1M74 103h2M24 104h1M31 104h1M62 104h1M74 104h2M80 104h1M24 105h1M31 105h1M62 105h1M74 105h2M80 105h1M24 106h1M62 106h14M24 107h1M63 107h13M24 108h1M28 108h1M36 108h1M44 108h1M52 108h1M60 108h1M68 108h1M76 108h1M84 108h1M24 109h1M27 109h1M35 109h1M43 109h1M51 109h1M59 109h1M67 109h1M75 109h1M83 109h1M24 110h1M24 111h1M24 112h1",cljs.core.cst$kw$stroke,"#a8a890"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M41 2h28M40 3h1M66 3h1M40 4h1M47 4h1M61 4h1M40 5h1M45 5h2M59 5h2M40 6h1M44 6h1M47 6h1M58 6h1M61 6h1M40 7h1M30 8h1M32 8h1M40 8h1M77 8h1M79 8h1M30 9h1M32 9h2M40 9h1M76 9h2M79 9h1M32 10h1M38 10h1M40 10h1M77 10h1M40 11h1M54 11h1M105 11h1M40 12h1M54 12h1M101 12h8M40 13h1M53 13h2M102 13h6M40 14h1M103 14h5M40 15h1M104 15h3M40 16h1M53 16h3M40 17h1M40 18h1M105 18h2M40 19h1M42 19h1M66 19h1M105 19h2M40 20h1M53 20h3M105 20h2M105 21h2M105 22h2M105 23h2M105 24h2M26 25h60M105 25h2M25 26h2M105 26h2M25 27h1M27 27h1M35 27h1M43 27h1M51 27h1M59 27h1M67 27h1M75 27h1M83 27h1M105 27h2M25 28h1M105 28h2M25 29h1M105 29h2M25 30h1M105 30h2M25 31h1M105 31h2M25 32h1M32 32h1M105 32h2M25 33h1M79 33h1M105 33h2M25 34h1M105 34h2M25 35h1M105 35h2M25 36h1M27 36h1M83 36h1M105 36h2M25 37h1M105 37h2M25 38h1M105 38h2M25 39h1M105 39h2M25 40h1M105 40h2M25 41h1M105 41h2M25 42h1M105 42h2M25 43h1M106 43h1M25 44h1M27 44h1M83 44h1M25 45h1M103 45h2M25 46h1M90 46h2M93 46h1M95 46h1M103 46h1M105 46h1M25 47h1M103 47h1M25 48h1M100 48h1M103 48h1M25 49h1M103 49h1M25 50h1M103 50h1M25 51h1M103 51h1M105 51h1M25 52h1M27 52h1M83 52h1M103 52h2M25 53h1M25 54h1M25 55h1M25 56h1M106 56h1M25 57h1M105 57h2M25 58h1M105 58h2M25 59h1M105 59h2M25 60h1M27 60h1M83 60h1M105 60h2M25 61h1M105 61h2M25 62h1M105 62h2M16 63h3M25 63h1M105 63h2M25 64h1M105 64h2M16 65h2M25 65h1M105 65h2M16 66h2M25 66h1M105 66h2M16 67h2M25 67h1M105 67h2M16 68h2M25 68h1M27 68h1M83 68h1M105 68h2M25 69h1M105 69h2M16 70h1M25 70h1M105 70h2M16 71h3M25 71h1M105 71h2M16 72h3M25 72h1M105 72h2M25 73h1M105 73h2M25 74h1M105 74h2M25 75h1M105 75h2M22 76h2M25 76h1M27 76h1M83 76h1M90 76h3M105 76h2M25 77h1M95 77h2M105 77h2M12 78h1M14 78h7M25 78h1M104 78h3M25 79h1M98 79h9M5 80h6M25 80h1M98 80h8M4 81h1M25 81h1M4 82h1M25 82h1M4 83h1M25 83h1M4 84h1M25 84h1M27 84h1M83 84h1M4 85h1M25 85h1M25 86h1M25 87h1M25 88h1M103 88h7M25 89h1M103 89h1M25 90h1M103 90h1M25 91h1M103 91h1M25 92h1M27 92h1M83 92h1M103 92h1M25 93h1M25 94h1M25 95h1M25 96h1M25 97h1M25 98h1M25 99h1M63 99h10M25 100h1M27 100h1M63 100h1M83 100h1M25 101h1M25 102h1M25 103h1M63 103h10M25 104h1M32 104h1M63 104h1M79 104h1M25 105h1M25 106h1M25 107h1M25 108h1M27 108h1M35 108h1M43 108h1M51 108h1M59 108h1M67 108h1M75 108h1M83 108h1M25 109h1M25 110h1",cljs.core.cst$kw$stroke,"#f8f8e8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M41 3h1M41 4h1M41 5h1M41 6h1M41 7h1M41 8h1M41 9h1M41 10h1M41 11h1M41 12h1M41 13h1M41 14h1M41 15h1M41 16h1M41 17h1M41 18h1M41 19h1M41 20h1M27 26h1M26 27h1M26 28h1M26 29h1M26 30h1M26 31h1M26 32h1M26 33h1M26 34h1M26 35h1M26 36h1M26 37h1M26 38h1M26 39h1M26 40h1M26 41h1M26 42h1M26 43h1M26 44h1M26 45h1M26 46h1M26 47h1M26 48h1M26 49h1M26 50h1M26 51h1M26 52h1M26 53h1M26 54h1M26 55h1M26 56h1M26 57h1M26 58h1M26 59h1M26 60h1M26 61h1M26 62h1M26 63h1M26 64h1M26 65h1M26 66h1M26 67h1M26 68h1M26 69h1M26 70h1M26 71h1M26 72h1M26 73h1M26 74h1M26 75h1M26 76h1M26 77h1M22 78h2M26 78h1M26 79h1M26 80h1M26 81h1M26 82h1M26 83h1M26 84h1M26 85h1M26 86h1M26 87h1M26 88h1M26 89h1M26 90h1M26 91h1M26 92h1M26 93h1M26 94h1M26 95h1M26 96h1M26 97h1M26 98h1M26 99h1M26 100h1M26 101h1M26 102h1M26 103h1M26 104h1M26 105h1M26 106h1M26 107h1M26 108h1M26 109h1",cljs.core.cst$kw$stroke,"#e0e8c0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M42 3h1M44 3h3M51 3h10M65 3h1M44 4h1M48 4h1M52 4h7M62 4h1M42 5h2M53 5h5M67 5h1M79 5h1M30 6h1M42 6h1M54 6h3M79 6h1M30 7h1M32 7h1M42 7h1M44 7h1M54 7h3M58 7h1M77 7h1M79 7h1M31 8h1M33 8h1M42 8h1M44 8h1M54 8h3M58 8h1M76 8h1M78 8h1M80 8h1M34 9h1M42 9h2M56 9h2M75 9h1M30 10h1M33 10h2M42 10h3M57 10h2M73 10h1M76 10h1M79 10h1M30 11h1M32 11h2M42 11h5M58 11h3M67 11h1M77 11h1M79 11h1M98 11h1M102 11h3M106 11h2M114 11h1M32 12h1M42 12h10M53 12h1M59 12h9M99 12h2M109 12h2M113 12h1M42 13h9M52 13h1M60 13h8M100 13h2M108 13h2M112 13h1M42 14h9M60 14h8M101 14h2M108 14h1M111 14h1M42 15h6M64 15h4M102 15h2M107 15h1M110 15h1M42 16h5M50 16h3M56 16h2M65 16h3M103 16h2M109 16h1M42 17h6M65 17h3M104 17h3M108 17h1M42 18h6M65 18h3M104 18h1M108 18h1M44 19h4M65 19h1M104 19h1M108 19h1M50 20h3M56 20h2M104 20h1M108 20h1M104 21h1M108 21h1M104 22h1M108 22h1M104 23h1M108 23h1M104 24h1M108 24h1M25 25h1M104 25h1M108 25h1M28 26h57M104 26h1M108 26h1M29 27h6M37 27h6M45 27h6M53 27h6M61 27h6M69 27h6M77 27h6M104 27h1M108 27h1M29 28h6M37 28h6M45 28h6M53 28h6M61 28h6M69 28h6M77 28h6M104 28h1M108 28h1M27 29h58M104 29h1M108 29h1M27 30h58M104 30h1M108 30h1M27 31h3M33 31h52M104 31h1M108 31h1M27 32h3M34 32h45M82 32h3M104 32h1M108 32h1M27 33h3M32 33h1M34 33h44M82 33h3M104 33h1M108 33h1M27 34h3M33 34h45M79 34h1M82 34h3M104 34h1M108 34h1M27 35h52M82 35h3M104 35h1M108 35h1M29 36h54M104 36h1M108 36h1M29 37h54M104 37h1M108 37h1M27 38h58M104 38h1M108 38h1M27 39h58M104 39h1M108 39h1M27 40h58M104 40h1M108 40h1M27 41h58M104 41h1M108 41h1M27 42h58M90 42h2M93 42h1M95 42h1M104 42h1M108 42h1M27 43h58M105 43h1M29 44h54M90 44h2M93 44h1M95 44h1M102 44h1M106 44h1M29 45h54M90 45h2M93 45h1M95 45h1M108 45h2M27 46h58M104 46h1M107 46h1M27 47h58M90 47h2M93 47h1M95 47h1M104 47h2M107 47h1M27 48h58M99 48h1M104 48h2M107 48h1M27 49h58M100 49h1M104 49h2M107 49h1M27 50h58M104 50h2M107 50h1M27 51h58M104 51h1M107 51h1M29 52h54M108 52h2M29 53h54M102 53h1M27 54h58M106 54h1M27 55h58M105 55h2M27 56h58M104 56h2M108 56h1M27 57h58M104 57h1M108 57h1M27 58h58M104 58h1M108 58h1M27 59h58M104 59h1M108 59h1M29 60h54M104 60h1M108 60h1M29 61h54M104 61h1M108 61h1M16 62h2M27 62h58M104 62h1M108 62h1M15 63h1M27 63h58M104 63h1M108 63h1M15 64h1M27 64h58M104 64h1M108 64h1M27 65h58M104 65h1M108 65h1M27 66h58M104 66h1M108 66h1M27 67h58M104 67h1M108 67h1M29 68h54M104 68h1M108 68h1M15 69h1M29 69h54M104 69h1M108 69h1M15 70h1M27 70h58M104 70h1M108 70h1M15 71h1M27 71h58M104 71h1M108 71h1M15 72h1M23 72h1M27 72h58M91 72h2M104 72h1M108 72h1M27 73h58M104 73h1M108 73h1M14 74h7M27 74h58M95 74h2M104 74h1M108 74h1M22 75h2M27 75h58M91 75h2M104 75h1M108 75h1M29 76h54M88 76h2M95 76h2M104 76h1M108 76h1M12 77h1M14 77h7M22 77h2M29 77h54M91 77h2M94 77h1M103 77h2M108 77h1M27 78h58M91 78h2M95 78h2M100 78h4M108 78h1M4 79h7M12 79h1M14 79h7M27 79h58M91 79h2M108 79h1M3 80h2M27 80h58M107 80h1M3 81h1M27 81h58M106 81h2M3 82h1M27 82h58M100 82h6M3 83h1M27 83h58M3 84h1M29 84h54M3 85h1M29 85h54M4 86h1M27 86h58M27 87h58M27 88h58M27 89h58M104 89h5M27 90h58M104 90h1M108 90h1M27 91h58M104 91h1M108 91h1M29 92h54M104 92h2M107 92h2M29 93h54M27 94h58M27 95h58M27 96h58M27 97h58M27 98h36M74 98h11M27 99h35M75 99h10M29 100h33M64 100h9M76 100h7M29 101h33M76 101h7M27 102h36M76 102h9M27 103h3M33 103h29M76 103h3M82 103h3M27 104h3M34 104h28M64 104h9M76 104h2M82 104h3M27 105h3M32 105h1M34 105h28M76 105h2M79 105h1M82 105h3M27 106h3M33 106h29M76 106h3M82 106h3M27 107h36M76 107h9M29 108h6M37 108h6M45 108h6M53 108h6M61 108h6M69 108h6M77 108h6M29 109h6M37 109h6M45 109h6M53 109h6M61 109h6M69 109h6M77 109h6M25 111h1",cljs.core.cst$kw$stroke,"#c8c8c0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M69 3h1M43 4h1M49 4h2M63 4h2M67 4h1M69 4h1M31 5h1M69 5h1M78 5h1M80 5h1M31 6h1M48 6h1M50 6h1M62 6h1M64 6h1M69 6h1M78 6h1M80 6h1M46 7h4M51 7h1M60 7h4M65 7h1M69 7h1M75 7h1M45 8h1M47 8h2M50 8h2M61 8h2M64 8h2M69 8h1M74 8h1M36 9h1M49 9h2M52 9h1M63 9h2M66 9h1M69 9h1M71 9h4M31 10h1M36 10h1M48 10h2M51 10h1M55 10h1M62 10h2M65 10h1M69 10h1M71 10h1M74 10h1M78 10h1M80 10h1M31 11h1M35 11h1M37 11h2M55 11h1M69 11h1M71 11h2M74 11h1M78 11h1M80 11h1M31 12h1M34 12h2M55 12h2M69 12h1M74 12h2M78 12h1M80 12h1M31 13h1M33 13h2M56 13h2M69 13h1M75 13h2M78 13h1M80 13h1M31 14h3M51 14h8M69 14h1M76 14h5M29 15h4M48 15h14M69 15h1M77 15h4M29 16h3M47 16h1M49 16h1M59 16h4M69 16h1M78 16h3M69 17h1M69 18h1M69 19h1M43 20h1M47 20h1M49 20h1M59 20h4M67 20h1M69 20h1M41 21h7M62 21h7M40 22h1M54 23h1M87 25h1M86 26h1M86 27h1M28 28h1M36 28h1M44 28h1M52 28h1M60 28h1M68 28h1M76 28h1M84 28h1M86 28h1M86 29h1M86 30h1M31 31h2M86 31h1M33 32h1M79 32h2M86 32h1M33 33h1M78 33h1M86 33h1M31 34h2M78 34h1M86 34h1M79 35h2M86 35h1M86 36h1M28 37h1M84 37h1M86 37h1M86 38h1M86 39h1M86 40h1M86 41h1M88 41h1M86 42h1M92 42h1M94 42h1M103 42h1M109 42h1M86 43h1M88 43h1M96 43h1M102 43h1M110 43h1M86 44h1M88 44h1M96 44h1M103 44h2M108 44h2M28 45h1M84 45h1M86 45h1M88 45h1M96 45h1M105 45h1M107 45h1M110 45h1M86 46h1M88 46h1M96 46h1M110 46h1M86 47h1M88 47h1M96 47h5M110 47h1M86 48h1M88 48h1M96 48h2M110 48h1M86 49h1M88 49h1M96 49h1M110 49h1M86 50h1M88 50h4M93 50h1M95 50h2M98 50h3M110 50h1M86 51h1M91 51h1M96 51h1M110 51h1M86 52h1M91 52h1M96 52h1M105 52h1M107 52h1M110 52h1M28 53h1M84 53h1M86 53h1M88 53h4M93 53h1M95 53h2M103 53h2M107 53h3M86 54h1M88 54h1M96 54h1M102 54h1M108 54h1M110 54h1M86 55h1M88 55h4M93 55h1M95 55h2M103 55h1M109 55h1M86 56h1M88 56h4M93 56h1M95 56h1M86 57h1M86 58h1M86 59h1M86 60h1M28 61h1M84 61h1M86 61h1M86 62h1M19 63h1M86 63h1M19 64h1M86 64h1M18 65h2M86 65h1M18 66h2M86 66h1M18 67h2M86 67h1M18 68h2M86 68h1M16 69h2M19 69h1M28 69h1M84 69h1M86 69h1M19 70h1M86 70h1M19 71h1M86 71h1M88 71h2M19 72h1M86 72h1M93 72h1M21 73h1M86 73h1M88 73h2M94 73h1M13 74h1M21 74h1M86 74h1M88 74h2M93 74h1M11 75h1M13 75h1M21 75h1M86 75h1M94 75h1M97 75h1M11 76h1M13 76h1M21 76h1M86 76h1M97 76h1M11 77h1M13 77h1M21 77h1M28 77h1M84 77h1M86 77h1M88 77h1M93 77h1M97 77h1M13 78h1M86 78h1M88 78h1M93 78h1M97 78h1M11 79h1M13 79h1M21 79h1M86 79h1M88 79h1M94 79h1M97 79h1M11 80h1M13 80h1M21 80h1M86 80h1M88 80h2M94 80h1M97 80h1M11 81h1M13 81h1M21 81h1M86 81h1M88 81h2M94 81h4M6 82h7M14 82h7M86 82h1M88 82h2M97 82h1M6 83h1M11 83h2M22 83h2M86 83h1M97 83h1M6 84h1M11 84h2M14 84h7M86 84h1M94 84h3M6 85h1M11 85h2M14 85h7M28 85h1M84 85h1M86 85h1M94 85h3M5 86h2M11 86h1M13 86h1M22 86h2M86 86h1M94 86h1M11 87h13M86 87h1M88 87h5M94 87h4M11 88h2M14 88h8M86 88h1M88 88h1M94 88h3M21 89h3M86 89h1M88 89h6M109 89h1M22 90h2M86 90h1M88 90h5M109 90h1M86 91h1M106 91h1M109 91h1M86 92h1M106 92h1M109 92h1M28 93h1M84 93h1M86 93h1M103 93h3M107 93h2M86 94h1M86 95h1M86 96h1M86 97h1M86 98h1M73 99h1M86 99h1M73 100h1M86 100h1M88 100h2M101 100h1M103 100h1M28 101h1M63 101h11M84 101h1M86 101h1M89 101h1M93 101h2M96 101h1M98 101h1M86 102h1M88 102h2M92 102h1M31 103h2M73 103h1M79 103h2M86 103h1M89 103h1M33 104h1M73 104h1M78 104h1M86 104h1M88 104h2M33 105h1M63 105h11M78 105h1M86 105h1M31 106h2M79 106h2M86 106h1M86 107h1M3 108h5M86 108h1M7 109h2M28 109h1M36 109h1M44 109h1M52 109h1M60 109h1M68 109h1M76 109h1M84 109h1M86 109h1M85 110h2M26 111h60M25 112h1",cljs.core.cst$kw$stroke,"#686850"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M70 3h1M70 4h1M47 5h2M51 5h1M61 5h2M65 5h1M70 5h1M46 6h1M49 6h1M52 6h1M60 6h1M63 6h1M66 6h1M70 6h1M45 7h1M50 7h1M52 7h1M59 7h1M64 7h1M66 7h1M70 7h1M46 8h1M49 8h1M52 8h1M60 8h1M63 8h1M66 8h1M70 8h1M47 9h2M51 9h1M61 9h2M65 9h1M70 9h1M50 10h1M64 10h1M70 10h1M36 11h1M56 11h1M70 11h1M36 12h3M57 12h1M70 12h4M58 13h1M70 13h1M70 14h1M70 15h1M70 16h1M48 17h14M70 17h1M48 18h14M70 18h1M48 19h14M70 19h1M70 20h1M48 21h14M69 21h2M41 22h29M53 23h1M55 23h2M87 26h1M87 27h1M87 28h1M87 29h1M87 30h1M30 31h1M87 31h1M30 32h1M81 32h1M87 32h1M30 33h1M81 33h1M87 33h1M30 34h1M81 34h1M87 34h1M81 35h1M87 35h1M87 36h1M87 37h1M87 38h1M87 39h1M87 40h1M87 41h1M87 42h1M87 43h1M92 43h1M94 43h1M103 43h1M109 43h1M87 44h1M92 44h1M94 44h1M87 45h1M92 45h1M94 45h1M87 46h1M92 46h1M94 46h1M106 46h1M87 47h1M92 47h1M94 47h1M106 47h1M87 48h1M92 48h1M94 48h1M106 48h1M87 49h1M92 49h1M94 49h1M97 49h1M106 49h1M87 50h1M92 50h1M94 50h1M97 50h1M106 50h1M87 51h4M92 51h4M106 51h1M87 52h4M92 52h4M87 53h1M92 53h1M94 53h1M87 54h1M92 54h1M94 54h1M103 54h1M109 54h1M87 55h1M92 55h1M94 55h1M87 56h1M87 57h1M87 58h1M87 59h1M87 60h1M87 61h1M87 62h1M87 63h1M18 64h1M87 64h1M87 65h1M87 66h1M87 67h1M87 68h1M18 69h1M87 69h1M87 70h1M87 71h1M87 72h1M87 73h1M93 73h1M87 74h1M87 75h1M93 75h1M87 76h1M93 76h1M87 77h1M87 78h1M87 79h1M93 79h1M87 80h1M93 80h1M87 81h1M93 81h1M13 82h1M21 82h1M87 82h1M93 82h4M13 83h9M87 83h10M13 84h1M21 84h3M87 84h7M97 84h1M13 85h1M21 85h3M87 85h7M97 85h1M21 86h1M87 86h7M97 86h1M87 87h1M93 87h1M87 88h1M93 88h1M87 89h1M87 90h1M105 90h3M87 91h1M105 91h1M107 91h1M87 92h1M87 93h1M109 93h1M87 94h1M87 95h1M87 96h1M87 97h1M87 98h1M87 99h1M87 100h1M87 101h1M87 102h1M90 102h2M30 103h1M81 103h1M87 103h2M30 104h1M81 104h1M87 104h1M30 105h1M81 105h1M87 105h1M30 106h1M81 106h1M87 106h1M87 107h1M1 108h2M87 108h1M1 109h6M87 109h1M2 110h6M87 110h1M86 111h2M26 112h62",cljs.core.cst$kw$stroke,"#000000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M44 9h1M58 9h1M45 10h2M59 10h2M72 10h1M73 11h1M75 11h1M76 12h1M77 13h1M79 13h1M101 44h1M111 44h1M101 45h1M111 45h1M101 46h1M109 46h1M111 46h1M101 47h1M109 47h1M111 47h1M101 48h1M109 48h1M111 48h1M89 49h3M93 49h1M95 49h1M101 49h1M109 49h1M111 49h1M101 50h1M109 50h1M111 50h1M101 51h1M109 51h1M111 51h1M101 52h1M111 52h1M101 53h1M111 53h1M89 54h3M93 54h1M95 54h1M90 73h1M90 74h1M88 75h2M95 75h1M89 77h1M89 78h1M89 79h1M95 79h1M90 80h2M95 80h1M106 80h1M90 81h2M90 82h2M95 86h2M89 88h4M2 107h6M8 108h1",cljs.core.cst$kw$stroke,"#808080"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M85 26h1M85 27h1M85 28h1M85 29h1M85 30h1M85 31h1M85 32h1M85 33h1M85 34h1M85 35h1M85 36h1M85 37h1M85 38h1M85 39h1M85 40h1M85 41h1M85 42h1M85 43h1M85 44h1M85 45h1M85 46h1M85 47h1M85 48h1M85 49h1M85 50h1M85 51h1M85 52h1M85 53h1M85 54h1M85 55h1M85 56h1M85 57h1M85 58h1M85 59h1M85 60h1M85 61h1M85 62h1M85 63h1M85 64h1M85 65h1M85 66h1M85 67h1M85 68h1M85 69h1M85 70h1M85 71h1M90 71h1M85 72h1M85 73h1M85 74h1M85 75h1M85 76h1M85 77h1M85 78h1M85 79h1M85 80h1M85 81h1M85 82h1M85 83h1M85 84h1M85 85h1M85 86h1M85 87h1M85 88h1M85 89h1M85 90h1M85 91h1M85 92h1M85 93h1M85 94h1M85 95h1M85 96h1M85 97h1M85 98h1M85 99h1M85 100h1M85 101h1M85 102h1M85 103h1M85 104h1M85 105h1M85 106h1M85 107h1M85 108h1M85 109h1M26 110h59",cljs.core.cst$kw$stroke,"#a0a880"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M17 70h2",cljs.core.cst$kw$stroke,"#a870d0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M22 72h1M12 74h1",cljs.core.cst$kw$stroke,"#f8f8f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M90 72h1M90 75h1M90 77h1M90 78h1M90 79h1M110 89h1M110 90h1M110 91h1M110 92h1M110 93h1M104 94h2M107 94h4",cljs.core.cst$kw$stroke,"#b0b890"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M110 88h1M103 94h1",cljs.core.cst$kw$stroke,"#c8d0a8"], null)], null)], null);
});
mecca.components.editor.toolbar = (function mecca$components$editor$toolbar(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(32),cljs.core.cst$kw$height,(4),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.2,cljs.core.cst$kw$fill,"#f8b0f8"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.undo_dog,27.7,(y - 0.35),0.22], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.redo_rabbit,(34),(0.4 + y),0.2], null)], null);
});
mecca.components.editor.controls = (function mecca$components$editor$controls(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 32"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.robot], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_transport,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.21) translate(135,0)"], null)], null),(function (){var iter__4324__auto__ = (function mecca$components$editor$controls_$_iter__13100(s__13101){
return (new cljs.core.LazySeq(null,(function (){
var s__13101__$1 = s__13101;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13101__$1);
if(temp__5457__auto__){
var s__13101__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13101__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13101__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13103 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13102 = (0);
while(true){
if((i__13102 < size__4323__auto__)){
var vec__13104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13102);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13104,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13104,(1),null);
cljs.core.chunk_append(b__13103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13133 = (i__13102 + (1));
i__13102 = G__13133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13103),mecca$components$editor$controls_$_iter__13100(cljs.core.chunk_rest(s__13101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13103),null);
}
} else {
var vec__13107 = cljs.core.first(s__13101__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13107,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13107,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$components$editor$controls_$_iter__13100(cljs.core.rest(s__13101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff80ff","M0 0h2M166 0h2M0 1h1M167 1h1M0 38h1M167 38h1M0 39h2M166 39h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000","M2 0h164M1 1h2M165 1h2M0 2h2M166 2h2M0 3h1M167 3h1M0 4h1M167 4h1M0 5h1M6 5h156M167 5h1M0 6h1M5 6h2M161 6h2M167 6h1M0 7h1M5 7h1M162 7h1M167 7h1M0 8h1M5 8h1M162 8h1M167 8h1M0 9h1M5 9h1M162 9h1M167 9h1M0 10h1M5 10h1M10 10h4M15 10h5M21 10h4M26 10h4M42 10h4M47 10h1M53 10h2M57 10h1M61 10h1M74 10h1M79 10h4M84 10h4M89 10h4M115 10h5M121 10h4M126 10h1M130 10h1M132 10h4M137 10h4M162 10h1M167 10h1M0 11h1M5 11h1M10 11h1M17 11h1M21 11h1M24 11h1M26 11h1M29 11h1M42 11h1M45 11h1M47 11h1M52 11h1M55 11h1M58 11h1M60 11h1M74 11h1M79 11h1M82 11h1M84 11h1M87 11h1M89 11h1M92 11h1M117 11h1M121 11h1M126 11h2M129 11h2M132 11h1M135 11h1M137 11h1M140 11h1M162 11h1M167 11h1M0 12h1M5 12h1M10 12h4M17 12h1M21 12h1M24 12h1M26 12h4M42 12h4M47 12h1M52 12h4M59 12h1M74 12h1M79 12h1M82 12h1M84 12h1M87 12h1M89 12h4M117 12h1M121 12h4M126 12h1M128 12h1M130 12h1M132 12h4M137 12h1M140 12h1M162 12h1M167 12h1M0 13h1M5 13h1M13 13h1M17 13h1M21 13h1M24 13h1M26 13h1M42 13h1M47 13h1M52 13h1M55 13h1M59 13h1M74 13h1M79 13h1M82 13h1M84 13h1M87 13h1M89 13h1M117 13h1M121 13h1M126 13h1M130 13h1M132 13h1M137 13h1M140 13h1M162 13h1M167 13h1M0 14h1M5 14h1M10 14h4M17 14h1M21 14h4M26 14h1M42 14h1M47 14h4M52 14h1M55 14h1M59 14h1M74 14h4M79 14h4M84 14h4M89 14h1M117 14h1M121 14h4M126 14h1M130 14h1M132 14h1M137 14h4M162 14h1M167 14h1M0 15h1M5 15h1M162 15h1M167 15h1M0 16h1M5 16h1M162 16h1M167 16h1M0 17h1M5 17h1M162 17h1M167 17h1M0 18h1M5 18h1M25 18h1M89 18h1M162 18h1M167 18h1M0 19h1M5 19h1M26 19h1M90 19h1M162 19h1M167 19h1M0 20h1M5 20h1M26 20h1M80 20h1M82 20h4M90 20h1M162 20h1M167 20h1M0 21h1M5 21h1M26 21h1M85 21h1M90 21h1M98 21h3M155 21h3M162 21h1M167 21h1M0 22h1M5 22h1M26 22h1M84 22h3M90 22h1M97 22h1M101 22h1M154 22h1M158 22h1M162 22h1M167 22h1M0 23h1M5 23h1M26 23h1M80 23h1M85 23h1M90 23h1M96 23h1M102 23h1M153 23h1M156 23h1M159 23h1M162 23h1M167 23h1M0 24h1M5 24h1M26 24h1M79 24h3M90 24h1M96 24h1M98 24h3M102 24h1M108 24h40M153 24h1M155 24h3M159 24h1M162 24h1M167 24h1M0 25h1M5 25h1M26 25h1M80 25h1M90 25h1M96 25h1M102 25h1M108 25h40M153 25h1M156 25h1M159 25h1M162 25h1M167 25h1M0 26h1M5 26h1M26 26h1M80 26h4M85 26h1M90 26h1M97 26h1M101 26h1M154 26h1M158 26h1M162 26h1M167 26h1M0 27h1M5 27h1M26 27h1M90 27h1M98 27h3M155 27h3M162 27h1M167 27h1M0 28h1M5 28h1M26 28h1M90 28h1M162 28h1M167 28h1M0 29h1M5 29h1M14 29h1M25 29h2M78 29h1M89 29h2M162 29h1M167 29h1M0 30h1M5 30h1M15 30h11M79 30h11M162 30h1M167 30h1M0 31h1M5 31h1M162 31h1M167 31h1M0 32h1M5 32h1M162 32h1M167 32h1M0 33h1M5 33h2M161 33h2M167 33h1M0 34h1M6 34h156M167 34h1M0 35h1M167 35h1M0 36h1M167 36h1M0 37h2M166 37h2M1 38h2M165 38h2M2 39h164"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a8a8a8","M3 1h161M2 2h1M164 2h1M1 3h1M165 3h1M1 4h1M6 4h156M165 4h1M1 5h1M5 5h1M162 5h1M165 5h1M1 6h1M4 6h1M163 6h1M165 6h1M1 7h1M4 7h1M161 7h1M163 7h1M165 7h1M1 8h1M4 8h1M161 8h1M163 8h1M165 8h1M1 9h1M4 9h1M161 9h1M163 9h1M165 9h1M1 10h1M4 10h1M161 10h1M163 10h1M165 10h1M1 11h1M4 11h1M161 11h1M163 11h1M165 11h1M1 12h1M4 12h1M161 12h1M163 12h1M165 12h1M1 13h1M4 13h1M161 13h1M163 13h1M165 13h1M1 14h1M4 14h1M161 14h1M163 14h1M165 14h1M1 15h1M4 15h1M161 15h1M163 15h1M165 15h1M1 16h1M4 16h1M161 16h1M163 16h1M165 16h1M1 17h1M4 17h1M161 17h1M163 17h1M165 17h1M1 18h1M4 18h1M161 18h1M163 18h1M165 18h1M1 19h1M4 19h1M25 19h1M89 19h1M161 19h1M163 19h1M165 19h1M1 20h1M4 20h1M25 20h1M28 20h1M89 20h1M92 20h1M161 20h1M163 20h1M165 20h1M1 21h1M4 21h1M17 21h5M25 21h1M28 21h1M89 21h1M92 21h1M161 21h1M163 21h1M165 21h1M1 22h1M4 22h1M18 22h1M20 22h1M25 22h1M28 22h1M89 22h1M92 22h1M161 22h1M163 22h1M165 22h1M1 23h1M4 23h1M17 23h5M25 23h1M28 23h1M89 23h1M92 23h1M161 23h1M163 23h1M165 23h1M1 24h1M4 24h1M18 24h1M20 24h1M25 24h1M28 24h1M89 24h1M92 24h1M161 24h1M163 24h1M165 24h1M1 25h1M4 25h1M17 25h5M25 25h1M28 25h1M89 25h1M92 25h1M161 25h1M163 25h1M165 25h1M1 26h1M4 26h1M25 26h1M28 26h1M89 26h1M92 26h1M161 26h1M163 26h1M165 26h1M1 27h1M4 27h1M25 27h1M28 27h1M89 27h1M92 27h1M161 27h1M163 27h1M165 27h1M1 28h1M4 28h1M25 28h1M28 28h1M89 28h1M92 28h1M161 28h1M163 28h1M165 28h1M1 29h1M4 29h1M15 29h10M28 29h1M79 29h10M92 29h1M161 29h1M163 29h1M165 29h1M1 30h1M4 30h1M28 30h1M92 30h1M161 30h1M163 30h1M165 30h1M1 31h1M4 31h1M28 31h1M92 31h1M161 31h1M163 31h1M165 31h1M1 32h1M4 32h1M161 32h1M163 32h1M165 32h1M1 33h1M4 33h1M7 33h154M163 33h1M165 33h1M1 34h1M5 34h1M162 34h1M165 34h1M1 35h1M165 35h1M1 36h2M164 36h1M2 37h162"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#707070","M164 1h1M165 2h1M166 3h1M166 4h1M166 5h1M7 6h154M166 6h1M6 7h1M166 7h1M6 8h1M166 8h1M6 9h1M166 9h1M6 10h1M166 10h1M6 11h1M166 11h1M6 12h1M166 12h1M6 13h1M166 13h1M6 14h1M166 14h1M6 15h1M166 15h1M6 16h1M166 16h1M6 17h1M13 17h12M77 17h12M166 17h1M6 18h1M13 18h1M24 18h1M77 18h1M88 18h1M166 18h1M6 19h1M13 19h1M24 19h1M77 19h1M88 19h1M166 19h1M6 20h1M13 20h1M16 20h6M24 20h1M27 20h1M77 20h1M88 20h1M91 20h1M166 20h1M6 21h1M13 21h1M16 21h1M24 21h1M27 21h1M77 21h1M88 21h1M91 21h1M166 21h1M6 22h1M13 22h1M16 22h2M19 22h1M21 22h1M24 22h1M27 22h1M77 22h1M88 22h1M91 22h1M166 22h1M6 23h1M13 23h1M16 23h1M24 23h1M27 23h1M77 23h1M88 23h1M91 23h1M166 23h1M6 24h1M13 24h1M16 24h2M19 24h1M21 24h1M24 24h1M27 24h1M77 24h1M88 24h1M91 24h1M166 24h1M6 25h1M13 25h1M16 25h1M24 25h1M27 25h1M77 25h1M88 25h1M91 25h1M166 25h1M6 26h1M13 26h1M24 26h1M27 26h1M77 26h1M88 26h1M91 26h1M166 26h1M6 27h1M13 27h1M24 27h1M27 27h1M77 27h1M88 27h1M91 27h1M166 27h1M6 28h1M13 28h12M27 28h1M77 28h12M91 28h1M166 28h1M6 29h1M27 29h1M91 29h1M166 29h1M6 30h1M26 30h2M90 30h2M166 30h1M6 31h1M16 31h12M80 31h12M166 31h1M6 32h1M166 32h1M166 33h1M166 34h1M166 35h1M165 36h2M164 37h2M3 38h162"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d0d0d0","M3 2h161M2 3h2M163 3h2M2 4h1M5 4h1M162 4h1M164 4h1M2 5h1M4 5h1M163 5h1M2 6h1M2 7h1M7 7h154M2 8h1M7 8h1M160 8h1M2 9h1M7 9h1M160 9h1M2 10h1M7 10h1M160 10h1M2 11h1M7 11h1M160 11h1M2 12h1M7 12h1M160 12h1M2 13h1M7 13h1M160 13h1M2 14h1M7 14h1M160 14h1M2 15h1M7 15h1M160 15h1M2 16h1M7 16h1M160 16h1M2 17h1M7 17h1M160 17h1M2 18h1M7 18h1M160 18h1M2 19h1M7 19h1M15 19h9M79 19h9M160 19h1M2 20h1M7 20h1M15 20h1M22 20h2M79 20h1M81 20h1M86 20h2M160 20h1M2 21h1M7 21h1M15 21h1M22 21h2M79 21h6M86 21h2M160 21h1M2 22h1M7 22h1M15 22h1M22 22h2M79 22h5M87 22h1M160 22h1M2 23h1M7 23h1M15 23h1M22 23h2M79 23h1M81 23h4M86 23h2M160 23h1M2 24h1M7 24h1M15 24h1M22 24h2M82 24h6M160 24h1M2 25h1M7 25h1M15 25h1M22 25h2M79 25h1M81 25h7M160 25h1M2 26h1M7 26h1M15 26h9M79 26h1M84 26h1M86 26h2M160 26h1M2 27h1M7 27h1M15 27h9M79 27h9M160 27h1M2 28h1M7 28h1M160 28h1M2 29h1M7 29h1M160 29h1M2 30h1M7 30h1M160 30h1M2 31h1M7 31h1M160 31h1M2 32h1M7 32h154M2 33h1M2 34h1M4 34h1M163 34h1M2 35h1M5 35h158M164 35h1M3 36h1M163 36h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M4 3h159M3 4h2M163 4h1M3 5h1M164 5h1M3 6h1M164 6h1M3 7h1M164 7h1M3 8h1M164 8h1M3 9h1M9 9h22M41 9h22M73 9h21M114 9h28M164 9h1M3 10h1M9 10h1M14 10h1M20 10h1M25 10h1M30 10h1M41 10h1M46 10h1M48 10h5M55 10h2M58 10h3M62 10h1M73 10h1M75 10h4M83 10h1M88 10h1M93 10h1M114 10h1M120 10h1M125 10h1M127 10h3M131 10h1M136 10h1M141 10h1M164 10h1M3 11h1M9 11h1M41 11h1M73 11h1M114 11h1M164 11h1M3 12h1M9 12h1M14 12h3M18 12h3M22 12h2M25 12h1M30 12h1M41 12h1M46 12h1M48 12h4M56 12h3M60 12h3M73 12h1M75 12h4M80 12h2M83 12h1M85 12h2M88 12h1M93 12h1M114 12h3M118 12h3M125 12h1M127 12h1M129 12h1M131 12h1M136 12h1M138 12h2M141 12h1M164 12h1M3 13h1M9 13h1M41 13h1M73 13h1M114 13h1M164 13h1M3 14h1M9 14h1M41 14h1M73 14h1M114 14h1M164 14h1M3 15h1M9 15h1M41 15h1M73 15h1M114 15h1M164 15h1M3 16h1M164 16h1M3 17h1M164 17h1M3 18h1M14 18h1M78 18h1M164 18h1M3 19h1M164 19h1M3 20h1M164 20h1M3 21h1M164 21h1M3 22h1M98 22h3M155 22h3M164 22h1M3 23h1M97 23h5M154 23h2M157 23h2M164 23h1M3 24h1M97 24h1M101 24h1M154 24h1M158 24h1M164 24h1M3 25h1M97 25h5M154 25h2M157 25h2M164 25h1M3 26h1M98 26h3M155 26h3M164 26h1M3 27h1M164 27h1M3 28h1M164 28h1M3 29h1M164 29h1M3 30h1M164 30h1M3 31h1M164 31h1M3 32h1M164 32h1M3 33h1M164 33h1M3 34h1M164 34h1M3 35h2M163 35h1M4 36h159"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a0c0b0","M8 8h152M8 9h1M31 9h10M63 9h10M94 9h20M142 9h18M8 10h1M31 10h10M63 10h10M94 10h20M142 10h18M8 11h1M31 11h10M63 11h10M94 11h20M142 11h18M8 12h1M31 12h10M63 12h10M94 12h20M142 12h18M8 13h1M31 13h10M63 13h10M94 13h20M142 13h18M8 14h1M31 14h10M63 14h10M94 14h20M142 14h18M8 15h1M31 15h10M63 15h10M94 15h20M142 15h18M8 16h152M8 17h5M25 17h52M89 17h71M8 18h5M26 18h51M90 18h70M8 19h5M27 19h50M91 19h69M8 20h5M29 20h48M93 20h67M8 21h5M29 21h48M93 21h5M101 21h54M158 21h2M8 22h5M29 22h48M93 22h4M102 22h52M159 22h1M8 23h5M29 23h48M93 23h3M103 23h50M8 24h5M29 24h48M93 24h3M103 24h5M148 24h5M8 25h5M29 25h48M93 25h3M103 25h5M148 25h5M8 26h5M29 26h48M93 26h4M102 26h52M159 26h1M8 27h5M29 27h48M93 27h5M101 27h54M158 27h2M8 28h5M29 28h48M93 28h67M8 29h6M29 29h49M93 29h67M8 30h7M29 30h50M93 30h67M8 31h8M29 31h51M93 31h67"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c8e8e0","M11 11h6M18 11h3M22 11h2M25 11h1M27 11h2M30 11h1M43 11h2M46 11h1M48 11h4M53 11h2M56 11h2M59 11h1M61 11h2M75 11h4M80 11h2M83 11h1M85 11h2M88 11h1M90 11h2M93 11h1M115 11h2M118 11h3M122 11h4M128 11h1M131 11h1M133 11h2M136 11h1M138 11h2M141 11h1M10 13h3M14 13h3M18 13h3M22 13h2M25 13h1M27 13h4M43 13h4M48 13h4M53 13h2M56 13h3M60 13h3M75 13h4M80 13h2M83 13h1M85 13h2M88 13h1M90 13h4M115 13h2M118 13h3M122 13h4M127 13h3M131 13h1M133 13h4M138 13h2M141 13h1M14 14h3M18 14h3M25 14h1M27 14h4M43 14h4M51 14h1M53 14h2M56 14h3M60 14h3M78 14h1M83 14h1M88 14h1M90 14h4M115 14h2M118 14h3M125 14h1M127 14h3M131 14h1M133 14h4M141 14h1M10 15h21M42 15h21M74 15h20M115 15h27M15 18h9M79 18h9M14 19h1M78 19h1M14 20h1M78 20h1M14 21h1M78 21h1M14 22h1M78 22h1M14 23h1M78 23h1M14 24h1M78 24h1M14 25h1M78 25h1M14 26h1M78 26h1M14 27h1M78 27h1"], null)], null));
})()),(cljs.core.truth_(cljs.core.deref((function (){var G__13110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13110) : re_frame.core.subscribe.call(null,G__13110));
})()))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_play_DASH_active,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale(0.21) translate(182.2,18.5)",cljs.core.cst$kw$on_DASH_click,(function (){
var G__13111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_toggle], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13111) : re_frame.core.dispatch.call(null,G__13111));
})], null)], null),(function (){var iter__4324__auto__ = (function mecca$components$editor$controls_$_iter__13112(s__13113){
return (new cljs.core.LazySeq(null,(function (){
var s__13113__$1 = s__13113;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13113__$1);
if(temp__5457__auto__){
var s__13113__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13113__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13113__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13115 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13114 = (0);
while(true){
if((i__13114 < size__4323__auto__)){
var vec__13116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13114);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(1),null);
cljs.core.chunk_append(b__13115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13134 = (i__13114 + (1));
i__13114 = G__13134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13115),mecca$components$editor$controls_$_iter__13112(cljs.core.chunk_rest(s__13113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13115),null);
}
} else {
var vec__13119 = cljs.core.first(s__13113__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$components$editor$controls_$_iter__13112(cljs.core.rest(s__13113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M0 0h2M0 1h1M2 1h2M0 2h1M4 2h2M0 3h1M6 3h2M0 4h1M8 4h1M0 5h1M9 5h1M0 6h1M8 6h1M0 7h1M6 7h2M0 8h1M4 8h2M0 9h1M2 9h2M0 10h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M1 1h1M1 2h3M1 3h1M4 3h2M1 4h1M6 4h2M1 5h1M8 5h1M1 6h1M1 7h1M1 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M2 3h2M2 4h4M2 5h6M2 6h4M2 7h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f89000","M6 6h2M4 7h2M2 8h2M1 9h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#707070","M9 6h2M8 7h2M6 8h3M4 9h3M2 10h3M1 11h2"], null)], null));
})()):cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_play_DASH_inactive,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale(0.21) translate(182,17.6)",cljs.core.cst$kw$on_DASH_click,(function (){
var G__13122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_toggle], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13122) : re_frame.core.dispatch.call(null,G__13122));
})], null)], null),(function (){var iter__4324__auto__ = (function mecca$components$editor$controls_$_iter__13123(s__13124){
return (new cljs.core.LazySeq(null,(function (){
var s__13124__$1 = s__13124;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13124__$1);
if(temp__5457__auto__){
var s__13124__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13124__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13124__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13126 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13125 = (0);
while(true){
if((i__13125 < size__4323__auto__)){
var vec__13127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13125);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(1),null);
cljs.core.chunk_append(b__13126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13135 = (i__13125 + (1));
i__13125 = G__13135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13126),mecca$components$editor$controls_$_iter__13123(cljs.core.chunk_rest(s__13124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13126),null);
}
} else {
var vec__13130 = cljs.core.first(s__13124__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$components$editor$controls_$_iter__13123(cljs.core.rest(s__13124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#707070","M0 0h2M0 1h1M2 1h2M0 2h1M4 2h2M0 3h1M2 3h2M6 3h2M0 4h1M2 4h1M4 4h2M8 4h1M0 5h1M2 5h1M6 5h1M9 5h1M0 6h1M2 6h1M4 6h2M8 6h1M0 7h1M2 7h2M6 7h2M10 7h1M0 8h1M4 8h2M9 8h2M0 9h1M2 9h2M8 9h2M0 10h2M6 10h3M0 11h1M4 11h3M2 12h3M1 13h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a0c0b0","M2 0h10M4 1h8M6 2h6M8 3h4M9 4h3M10 5h2M10 6h2M11 9h1M10 10h2M9 11h3M0 12h1M7 12h5M0 13h1M5 13h7M0 14h1M3 14h9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M1 1h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c8e8e0","M1 2h3M1 3h1M4 3h2M1 4h1M6 4h2M1 5h1M8 5h1M1 6h1M1 7h1M1 8h1M1 9h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a8a8a8","M3 4h1M3 5h3M3 6h1M8 7h1M11 7h1M6 8h2M11 8h1M4 9h2M10 9h1M2 10h2M9 10h1M1 11h1M7 11h2M5 12h2M3 13h2M1 14h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d0d0d0","M7 5h1M6 6h2M4 7h2M2 8h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M9 6h1M9 7h1M8 8h1M6 9h2M4 10h2M2 11h2M1 12h1"], null)], null));
})())),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.tempo_slider,(273),(22),0.2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key.circle_of_fifths], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.toolbar,(30),8.8], null)], null);
});
mecca.components.editor.current_note_display = (function mecca$components$editor$current_note_display(x,y,scale){
var current_note = (function (){var G__13136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13136) : re_frame.core.subscribe.call(null,G__13136));
})();
return ((function (current_note){
return (function (x__$1,y__$1,scale__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,mecca.components.editor.color_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M0 0h22M0 1h1M2 1h1M19 1h1M21 1h1M0 2h3M19 2h3M0 3h3M19 3h3M0 4h1M2 4h1M19 4h1M21 4h1M0 5h3M19 5h3M0 6h3M19 6h3M0 7h1M2 7h1M19 7h1M21 7h1M0 8h3M19 8h3M0 9h3M19 9h3M0 10h1M2 10h1M19 10h1M21 10h1M0 11h3M19 11h3M0 12h3M19 12h3M0 13h1M2 13h1M19 13h1M21 13h1M0 14h3M19 14h3M0 15h22"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M1 1h1M3 1h16M20 1h1M3 2h16M3 3h16M1 4h1M3 4h16M20 4h1M3 5h16M3 6h16M1 7h1M3 7h16M20 7h1M3 8h16M3 9h16M1 10h1M3 10h16M20 10h1M3 11h16M3 12h16M1 13h1M3 13h16M20 13h1M3 14h16"], null)], null),x__$1,y__$1,scale__$1),(function (){var G__13137 = cljs.core.deref(current_note);
switch (G__13137) {
case (1):
return mecca.mario.mario_icon((48),(-1),0.18);

break;
case (2):
return mecca.mario.shroom((48),(-1),0.18);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13137)].join('')));

}
})()], null);
});
;})(current_note))
});
mecca.components.editor.block = (function mecca$components$editor$block(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function mecca$components$editor$block_$_iter__13139(s__13140){
return (new cljs.core.LazySeq(null,(function (){
var s__13140__$1 = s__13140;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13140__$1);
if(temp__5457__auto__){
var s__13140__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13140__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13140__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13142 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13141 = (0);
while(true){
if((i__13141 < size__4323__auto__)){
var vec__13143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13141);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(1),null);
cljs.core.chunk_append(b__13142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13149 = (i__13141 + (1));
i__13141 = G__13149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),mecca$components$editor$block_$_iter__13139(cljs.core.chunk_rest(s__13140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),null);
}
} else {
var vec__13146 = cljs.core.first(s__13140__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$components$editor$block_$_iter__13139(cljs.core.rest(s__13140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M1 0h14M0 1h2M14 1h2M0 2h1M15 2h1M0 3h1M15 3h1M0 4h1M15 4h1M0 5h1M15 5h1M0 6h1M15 6h1M0 7h1M15 7h1M0 8h1M15 8h1M0 9h1M15 9h1M0 10h1M15 10h1M0 11h1M15 11h1M0 12h1M15 12h1M0 13h1M15 13h1M0 14h2M14 14h2M1 15h14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","M2 1h12M1 2h14M1 3h14M1 4h14M1 5h14M1 6h14M1 7h14M1 8h14M1 9h14M1 10h14M1 11h14M1 12h14M1 13h14M2 14h12"], null)], null));
})());
});
mecca.components.editor.note_blocks = (function mecca$components$editor$note_blocks(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_notes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(-36,0)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.block,(128)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,(133),(0),0.8], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.block,(144)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,(182),(3),0.8], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.block,(160)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,(202),(3),0.8], null)], null)], null);
});
