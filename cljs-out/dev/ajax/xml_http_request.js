// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14406 = e.target.readyState;
var fexpr__14405 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14405.cljs$core$IFn$_invoke$arity$1 ? fexpr__14405.cljs$core$IFn$_invoke$arity$1(G__14406) : fexpr__14405.call(null,G__14406));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14408,handler){
var map__14409 = p__14408;
var map__14409__$1 = (((((!((map__14409 == null))))?(((((map__14409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14409):map__14409);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14409__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14409__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14409,map__14409__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14407_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14407_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__14409,map__14409__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___14427 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___14427)){
var response_type_14428 = temp__5720__auto___14427;
this$__$1.responseType = cljs.core.name(response_type_14428);
} else {
}

var seq__14411_14429 = cljs.core.seq(headers);
var chunk__14412_14430 = null;
var count__14413_14431 = (0);
var i__14414_14432 = (0);
while(true){
if((i__14414_14432 < count__14413_14431)){
var vec__14421_14433 = chunk__14412_14430.cljs$core$IIndexed$_nth$arity$2(null,i__14414_14432);
var k_14434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421_14433,(0),null);
var v_14435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421_14433,(1),null);
this$__$1.setRequestHeader(k_14434,v_14435);


var G__14436 = seq__14411_14429;
var G__14437 = chunk__14412_14430;
var G__14438 = count__14413_14431;
var G__14439 = (i__14414_14432 + (1));
seq__14411_14429 = G__14436;
chunk__14412_14430 = G__14437;
count__14413_14431 = G__14438;
i__14414_14432 = G__14439;
continue;
} else {
var temp__5720__auto___14440 = cljs.core.seq(seq__14411_14429);
if(temp__5720__auto___14440){
var seq__14411_14441__$1 = temp__5720__auto___14440;
if(cljs.core.chunked_seq_QMARK_(seq__14411_14441__$1)){
var c__4550__auto___14442 = cljs.core.chunk_first(seq__14411_14441__$1);
var G__14443 = cljs.core.chunk_rest(seq__14411_14441__$1);
var G__14444 = c__4550__auto___14442;
var G__14445 = cljs.core.count(c__4550__auto___14442);
var G__14446 = (0);
seq__14411_14429 = G__14443;
chunk__14412_14430 = G__14444;
count__14413_14431 = G__14445;
i__14414_14432 = G__14446;
continue;
} else {
var vec__14424_14447 = cljs.core.first(seq__14411_14441__$1);
var k_14448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424_14447,(0),null);
var v_14449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424_14447,(1),null);
this$__$1.setRequestHeader(k_14448,v_14449);


var G__14450 = cljs.core.next(seq__14411_14441__$1);
var G__14451 = null;
var G__14452 = (0);
var G__14453 = (0);
seq__14411_14429 = G__14450;
chunk__14412_14430 = G__14451;
count__14413_14431 = G__14452;
i__14414_14432 = G__14453;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
