// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('goog.events');
goog.require('ajax.protocols');
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13886,handler){
var map__13887 = p__13886;
var map__13887__$1 = ((((!((map__13887 == null)))?(((((map__13887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13887):map__13887);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13887__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13887__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$response_DASH_format);
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$progress_DASH_handler);
var this$__$1 = this;
var temp__5457__auto___13895 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___13895)){
var response_type_13896 = temp__5457__auto___13895;
this$__$1.setResponseType(cljs.core.name(response_type_13896));
} else {
}

if(cljs.core.fn_QMARK_(progress_handler)){
var G__13889_13897 = this$__$1;
G__13889_13897.setProgressEventsEnabled(true);

goog.events.listen(G__13889_13897,goog.net.EventType.UPLOAD_PROGRESS,progress_handler);

} else {
}

var G__13890 = this$__$1;
var G__13891_13898 = G__13890;
var G__13892_13899 = goog.net.EventType.COMPLETE;
var G__13893_13900 = ((function (G__13891_13898,G__13892_13899,G__13890,this$__$1,map__13887,map__13887__$1,uri,method,body,headers,timeout,with_credentials,response_format,progress_handler){
return (function (p1__13885_SHARP_){
var G__13894 = p1__13885_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13894) : handler.call(null,G__13894));
});})(G__13891_13898,G__13892_13899,G__13890,this$__$1,map__13887,map__13887__$1,uri,method,body,headers,timeout,with_credentials,response_format,progress_handler))
;
goog.events.listen(G__13891_13898,G__13892_13899,G__13893_13900);

G__13890.setTimeoutInterval(timeout);

G__13890.setWithCredentials(with_credentials);

G__13890.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__13890;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(this$__$1.getResponseHeaders());
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13901,handler){
var map__13902 = p__13901;
var map__13902__$1 = ((((!((map__13902 == null)))?(((((map__13902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13902):map__13902);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$headers);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13902__$1,cljs.core.cst$kw$timeout,(0));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.cst$kw$max_DASH_retries);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
