goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__59000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59000) : re_frame.core.subscribe.call(null,G__59000));
})();
var notes = (function (){var G__59001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59001) : re_frame.core.subscribe.call(null,G__59001));
})();
var jump = (function (){var G__59002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59002) : re_frame.core.subscribe.call(null,G__59002));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__59005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59005) : re_frame.core.subscribe.call(null,G__59005));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58999_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__58999_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__59006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59006) : re_frame.core.dispatch.call(null,G__59006));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__59008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59008) : re_frame.core.subscribe.call(null,G__59008));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__59009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59009) : re_frame.core.subscribe.call(null,G__59009));
})());
var now = cljs.core.deref((function (){var G__59010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59010) : re_frame.core.subscribe.call(null,G__59010));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59007_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59007_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__59011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59011) : re_frame.core.subscribe.call(null,G__59011));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__59012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59012) : re_frame.core.subscribe.call(null,G__59012));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__59013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59013) : re_frame.core.subscribe.call(null,G__59013));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__59014_59173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59014_59173) : re_frame.core.dispatch.call(null,G__59014_59173));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__59015_59179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59015_59179) : re_frame.core.dispatch.call(null,G__59015_59179));

var G__59016_59183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59016_59183) : re_frame.core.dispatch.call(null,G__59016_59183));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__59017_59184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59017_59184) : re_frame.core.dispatch.call(null,G__59017_59184));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
(req.responseType = "arraybuffer");

(req.onload = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
}));

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref((function (){var G__59018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59018) : re_frame.core.subscribe.call(null,G__59018));
})()).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_(out);
}),(function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
}));
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref((function (){var G__59019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59019) : re_frame.core.subscribe.call(null,G__59019));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__30107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30108__auto__ = (function (){var switch__30084__auto__ = (function (state_59031){
var state_val_59032 = (state_59031[(1)]);
if((state_val_59032 === (1))){
var inst_59020 = mecca.music.load_sound(named_url);
var state_59031__$1 = state_59031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59031__$1,(2),inst_59020);
} else {
if((state_val_59032 === (2))){
var inst_59022 = (state_59031[(7)]);
var inst_59022__$1 = (state_59031[(2)]);
var state_59031__$1 = (function (){var statearr_59033 = state_59031;
(statearr_59033[(7)] = inst_59022__$1);

return statearr_59033;
})();
if(cljs.core.truth_(inst_59022__$1)){
var statearr_59034_59225 = state_59031__$1;
(statearr_59034_59225[(1)] = (3));

} else {
var statearr_59035_59229 = state_59031__$1;
(statearr_59035_59229[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59032 === (3))){
var inst_59022 = (state_59031[(7)]);
var inst_59024 = mecca.music.decode(inst_59022);
var state_59031__$1 = state_59031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59031__$1,(6),inst_59024);
} else {
if((state_val_59032 === (4))){
var state_59031__$1 = state_59031;
var statearr_59036_59232 = state_59031__$1;
(statearr_59036_59232[(2)] = null);

(statearr_59036_59232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59032 === (5))){
var inst_59029 = (state_59031[(2)]);
var state_59031__$1 = state_59031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59031__$1,inst_59029);
} else {
if((state_val_59032 === (6))){
var inst_59026 = (state_59031[(2)]);
var state_59031__$1 = state_59031;
var statearr_59037_59237 = state_59031__$1;
(statearr_59037_59237[(2)] = inst_59026);

(statearr_59037_59237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mecca$music$get_and_decode_$_state_machine__30085__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__30085__auto____0 = (function (){
var statearr_59038 = [null,null,null,null,null,null,null,null];
(statearr_59038[(0)] = mecca$music$get_and_decode_$_state_machine__30085__auto__);

(statearr_59038[(1)] = (1));

return statearr_59038;
});
var mecca$music$get_and_decode_$_state_machine__30085__auto____1 = (function (state_59031){
while(true){
var ret_value__30086__auto__ = (function (){try{while(true){
var result__30087__auto__ = switch__30084__auto__(state_59031);
if(cljs.core.keyword_identical_QMARK_(result__30087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30087__auto__;
}
break;
}
}catch (e59039){if((e59039 instanceof Object)){
var ex__30088__auto__ = e59039;
var statearr_59040_59248 = state_59031;
(statearr_59040_59248[(5)] = ex__30088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59251 = state_59031;
state_59031 = G__59251;
continue;
} else {
return ret_value__30086__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__30085__auto__ = function(state_59031){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__30085__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__30085__auto____1.call(this,state_59031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__30085__auto____0;
mecca$music$get_and_decode_$_state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__30085__auto____1;
return mecca$music$get_and_decode_$_state_machine__30085__auto__;
})()
})();
var state__30109__auto__ = (function (){var statearr_59041 = (f__30108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30108__auto__.cljs$core$IFn$_invoke$arity$0() : f__30108__auto__.call(null));
(statearr_59041[(6)] = c__30107__auto__);

return statearr_59041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30109__auto__);
}));

return c__30107__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__30107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30108__auto__ = (function (){var switch__30084__auto__ = (function (state_59070){
var state_val_59071 = (state_59070[(1)]);
if((state_val_59071 === (1))){
var inst_59042 = cljs.core.PersistentHashMap.EMPTY;
var inst_59043 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_59044 = inst_59042;
var inst_59045 = inst_59043;
var state_59070__$1 = (function (){var statearr_59072 = state_59070;
(statearr_59072[(7)] = inst_59045);

(statearr_59072[(8)] = inst_59044);

return statearr_59072;
})();
var statearr_59073_59326 = state_59070__$1;
(statearr_59073_59326[(2)] = null);

(statearr_59073_59326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59071 === (2))){
var inst_59045 = (state_59070[(7)]);
var inst_59047 = cljs.core.first(inst_59045);
var inst_59048 = (inst_59047 == null);
var inst_59049 = cljs.core.not(inst_59048);
var state_59070__$1 = state_59070;
if(inst_59049){
var statearr_59074_59331 = state_59070__$1;
(statearr_59074_59331[(1)] = (4));

} else {
var statearr_59075_59333 = state_59070__$1;
(statearr_59075_59333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59071 === (3))){
var inst_59068 = (state_59070[(2)]);
var state_59070__$1 = state_59070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59070__$1,inst_59068);
} else {
if((state_val_59071 === (4))){
var inst_59045 = (state_59070[(7)]);
var inst_59051 = (state_59070[(9)]);
var inst_59051__$1 = cljs.core.first(inst_59045);
var inst_59052 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_59053 = ["/mecca-mobile/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59051__$1),".mp3"].join('');
var inst_59054 = [inst_59053,inst_59051__$1];
var inst_59055 = cljs.core.PersistentHashMap.fromArrays(inst_59052,inst_59054);
var inst_59056 = mecca.music.get_and_decode(inst_59055);
var state_59070__$1 = (function (){var statearr_59076 = state_59070;
(statearr_59076[(9)] = inst_59051__$1);

return statearr_59076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59070__$1,(7),inst_59056);
} else {
if((state_val_59071 === (5))){
var inst_59044 = (state_59070[(8)]);
var state_59070__$1 = state_59070;
var statearr_59077_59390 = state_59070__$1;
(statearr_59077_59390[(2)] = inst_59044);

(statearr_59077_59390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59071 === (6))){
var inst_59066 = (state_59070[(2)]);
var state_59070__$1 = state_59070;
var statearr_59078_59391 = state_59070__$1;
(statearr_59078_59391[(2)] = inst_59066);

(statearr_59078_59391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59071 === (7))){
var inst_59045 = (state_59070[(7)]);
var inst_59051 = (state_59070[(9)]);
var inst_59044 = (state_59070[(8)]);
var inst_59058 = (state_59070[(2)]);
var inst_59059 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59051], 0));
var inst_59060 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59058], 0));
var inst_59061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_59044,inst_59051,inst_59058);
var inst_59062 = cljs.core.rest(inst_59045);
var inst_59044__$1 = inst_59061;
var inst_59045__$1 = inst_59062;
var state_59070__$1 = (function (){var statearr_59079 = state_59070;
(statearr_59079[(10)] = inst_59060);

(statearr_59079[(11)] = inst_59059);

(statearr_59079[(7)] = inst_59045__$1);

(statearr_59079[(8)] = inst_59044__$1);

return statearr_59079;
})();
var statearr_59080_59397 = state_59070__$1;
(statearr_59080_59397[(2)] = null);

(statearr_59080_59397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var mecca$music$load_samples_$_state_machine__30085__auto__ = null;
var mecca$music$load_samples_$_state_machine__30085__auto____0 = (function (){
var statearr_59081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59081[(0)] = mecca$music$load_samples_$_state_machine__30085__auto__);

(statearr_59081[(1)] = (1));

return statearr_59081;
});
var mecca$music$load_samples_$_state_machine__30085__auto____1 = (function (state_59070){
while(true){
var ret_value__30086__auto__ = (function (){try{while(true){
var result__30087__auto__ = switch__30084__auto__(state_59070);
if(cljs.core.keyword_identical_QMARK_(result__30087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30087__auto__;
}
break;
}
}catch (e59082){if((e59082 instanceof Object)){
var ex__30088__auto__ = e59082;
var statearr_59083_59405 = state_59070;
(statearr_59083_59405[(5)] = ex__30088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59406 = state_59070;
state_59070 = G__59406;
continue;
} else {
return ret_value__30086__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__30085__auto__ = function(state_59070){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__30085__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__30085__auto____1.call(this,state_59070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__30085__auto____0;
mecca$music$load_samples_$_state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__30085__auto____1;
return mecca$music$load_samples_$_state_machine__30085__auto__;
})()
})();
var state__30109__auto__ = (function (){var statearr_59084 = (f__30108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30108__auto__.cljs$core$IFn$_invoke$arity$0() : f__30108__auto__.call(null));
(statearr_59084[(6)] = c__30107__auto__);

return statearr_59084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30109__auto__);
}));

return c__30107__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__30107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30108__auto__ = (function (){var switch__30084__auto__ = (function (state_59094){
var state_val_59095 = (state_59094[(1)]);
if((state_val_59095 === (1))){
var inst_59085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59086 = mecca.music.load_samples();
var state_59094__$1 = (function (){var statearr_59096 = state_59094;
(statearr_59096[(7)] = inst_59085);

return statearr_59096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59094__$1,(2),inst_59086);
} else {
if((state_val_59095 === (2))){
var inst_59085 = (state_59094[(7)]);
var inst_59088 = (state_59094[(2)]);
var inst_59089 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_59088];
var inst_59090 = (new cljs.core.PersistentVector(null,2,(5),inst_59085,inst_59089,null));
var inst_59091 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_59090) : re_frame.core.dispatch.call(null,inst_59090));
var inst_59092 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_59094__$1 = (function (){var statearr_59097 = state_59094;
(statearr_59097[(8)] = inst_59091);

return statearr_59097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59094__$1,inst_59092);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__30085__auto__ = null;
var mecca$music$state_machine__30085__auto____0 = (function (){
var statearr_59098 = [null,null,null,null,null,null,null,null,null];
(statearr_59098[(0)] = mecca$music$state_machine__30085__auto__);

(statearr_59098[(1)] = (1));

return statearr_59098;
});
var mecca$music$state_machine__30085__auto____1 = (function (state_59094){
while(true){
var ret_value__30086__auto__ = (function (){try{while(true){
var result__30087__auto__ = switch__30084__auto__(state_59094);
if(cljs.core.keyword_identical_QMARK_(result__30087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30087__auto__;
}
break;
}
}catch (e59099){if((e59099 instanceof Object)){
var ex__30088__auto__ = e59099;
var statearr_59100_59422 = state_59094;
(statearr_59100_59422[(5)] = ex__30088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59423 = state_59094;
state_59094 = G__59423;
continue;
} else {
return ret_value__30086__auto__;
}
break;
}
});
mecca$music$state_machine__30085__auto__ = function(state_59094){
switch(arguments.length){
case 0:
return mecca$music$state_machine__30085__auto____0.call(this);
case 1:
return mecca$music$state_machine__30085__auto____1.call(this,state_59094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__30085__auto____0;
mecca$music$state_machine__30085__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__30085__auto____1;
return mecca$music$state_machine__30085__auto__;
})()
})();
var state__30109__auto__ = (function (){var statearr_59101 = (f__30108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30108__auto__.cljs$core$IFn$_invoke$arity$0() : f__30108__auto__.call(null));
(statearr_59101[(6)] = c__30107__auto__);

return statearr_59101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30109__auto__);
}));

return c__30107__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.add_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.sub_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate((midi_num - (66)));
} else {
return mecca.music.dec_rate(((68) - midi_num));
}
});
mecca.music.play_note = (function mecca$music$play_note(pitch){
var context = cljs.core.deref((function (){var G__59102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59102) : re_frame.core.subscribe.call(null,G__59102));
})());
var samples = (function (){var G__59103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59103) : re_frame.core.subscribe.call(null,G__59103));
})();
var instrument = (function (){var G__59104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59104) : re_frame.core.subscribe.call(null,G__59104));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__59105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59105) : re_frame.core.subscribe.call(null,G__59105));
})();
var samples = (function (){var G__59106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59106) : re_frame.core.subscribe.call(null,G__59106));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = (function (){var G__59107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59107) : re_frame.core.subscribe.call(null,G__59107));
})();
var samples = (function (){var G__59108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59108) : re_frame.core.subscribe.call(null,G__59108));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__59109_SHARP_){
return (beats + p1__59109_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__59110_SHARP_){
return (p1__59110_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__59113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59113) : re_frame.core.subscribe.call(null,G__59113));
})();
var started = (function (){var G__59114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59114) : re_frame.core.subscribe.call(null,G__59114));
})();
var tempo = (function (){var G__59115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59115) : re_frame.core.subscribe.call(null,G__59115));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59111_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59111_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59111_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59112_SHARP_){
return mecca.music.advance_note(from,p1__59112_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__59116(s__59117){
return (new cljs.core.LazySeq(null,(function (){
var s__59117__$1 = s__59117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59117__$1);
if(temp__5735__auto__){
var s__59117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59117__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59117__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59119 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59118 = (0);
while(true){
if((i__59118 < size__4581__auto__)){
var map__59120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59118);
var map__59120__$1 = (((((!((map__59120 == null))))?(((((map__59120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59120):map__59120);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59120__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59120__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59120__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__59119,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__59425 = (i__59118 + (1));
i__59118 = G__59425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59119),mecca$music$queue_section_$_iter__59116(cljs.core.chunk_rest(s__59117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59119),null);
}
} else {
var map__59122 = cljs.core.first(s__59117__$2);
var map__59122__$1 = (((((!((map__59122 == null))))?(((((map__59122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59122):map__59122);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__59116(cljs.core.rest(s__59117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__59126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59126) : re_frame.core.subscribe.call(null,G__59126));
})();
var now = cljs.core.deref((function (){var G__59127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59127) : re_frame.core.subscribe.call(null,G__59127));
})()).currentTime;
var tempo = (function (){var G__59128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59128) : re_frame.core.subscribe.call(null,G__59128));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59124_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59124_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59124_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59125_SHARP_){
return mecca.music.advance_note(from,p1__59125_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__59129(s__59130){
return (new cljs.core.LazySeq(null,(function (){
var s__59130__$1 = s__59130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59130__$1);
if(temp__5735__auto__){
var s__59130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59130__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59130__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59132 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59131 = (0);
while(true){
if((i__59131 < size__4581__auto__)){
var map__59133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59131);
var map__59133__$1 = (((((!((map__59133 == null))))?(((((map__59133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59133):map__59133);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59133__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59133__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59133__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__59132,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__59427 = (i__59131 + (1));
i__59131 = G__59427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59132),mecca$music$play_section_$_iter__59129(cljs.core.chunk_rest(s__59130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59132),null);
}
} else {
var map__59135 = cljs.core.first(s__59130__$2);
var map__59135__$1 = (((((!((map__59135 == null))))?(((((map__59135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59135):map__59135);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59135__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59135__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59135__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__59129(cljs.core.rest(s__59130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__59137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59137) : re_frame.core.subscribe.call(null,G__59137));
})();
var tempo = (function (){var G__59138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59138) : re_frame.core.subscribe.call(null,G__59138));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__59139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59139) : re_frame.core.subscribe.call(null,G__59139));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__59140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59140) : re_frame.core.subscribe.call(null,G__59140));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__59142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59142) : re_frame.core.subscribe.call(null,G__59142));
})();
var editor_start = (function (){var G__59143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59143) : re_frame.core.subscribe.call(null,G__59143));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59141_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59141_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__59144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59144) : re_frame.core.subscribe.call(null,G__59144));
})();
var now = cljs.core.deref((function (){var G__59145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59145) : re_frame.core.subscribe.call(null,G__59145));
})()).currentTime;
var tempo = (function (){var G__59146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59146) : re_frame.core.subscribe.call(null,G__59146));
})();
var G__59147_59428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__59147_59428) : re_frame.core.dispatch.call(null,G__59147_59428));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__59148(s__59149){
return (new cljs.core.LazySeq(null,(function (){
var s__59149__$1 = s__59149;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59149__$1);
if(temp__5735__auto__){
var s__59149__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59149__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59149__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59151 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59150 = (0);
while(true){
if((i__59150 < size__4581__auto__)){
var map__59152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59150);
var map__59152__$1 = (((((!((map__59152 == null))))?(((((map__59152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59152):map__59152);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__59151,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__59429 = (i__59150 + (1));
i__59150 = G__59429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59151),mecca$music$play_song_BANG__$_iter__59148(cljs.core.chunk_rest(s__59149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59151),null);
}
} else {
var map__59154 = cljs.core.first(s__59149__$2);
var map__59154__$1 = (((((!((map__59154 == null))))?(((((map__59154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59154):map__59154);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__59148(cljs.core.rest(s__59149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
