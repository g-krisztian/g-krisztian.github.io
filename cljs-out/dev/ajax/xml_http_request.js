// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14126 = e.target.readyState;
var fexpr__14125 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14125.cljs$core$IFn$_invoke$arity$1 ? fexpr__14125.cljs$core$IFn$_invoke$arity$1(G__14126) : fexpr__14125.call(null,G__14126));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14128,handler){
var map__14129 = p__14128;
var map__14129__$1 = (((((!((map__14129 == null))))?(((((map__14129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14129):map__14129);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14129__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14129__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14129,map__14129__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14127_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14127_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__14129,map__14129__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___14147 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___14147)){
var response_type_14148 = temp__5720__auto___14147;
this$__$1.responseType = cljs.core.name(response_type_14148);
} else {
}

var seq__14131_14149 = cljs.core.seq(headers);
var chunk__14132_14150 = null;
var count__14133_14151 = (0);
var i__14134_14152 = (0);
while(true){
if((i__14134_14152 < count__14133_14151)){
var vec__14141_14153 = chunk__14132_14150.cljs$core$IIndexed$_nth$arity$2(null,i__14134_14152);
var k_14154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141_14153,(0),null);
var v_14155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141_14153,(1),null);
this$__$1.setRequestHeader(k_14154,v_14155);


var G__14156 = seq__14131_14149;
var G__14157 = chunk__14132_14150;
var G__14158 = count__14133_14151;
var G__14159 = (i__14134_14152 + (1));
seq__14131_14149 = G__14156;
chunk__14132_14150 = G__14157;
count__14133_14151 = G__14158;
i__14134_14152 = G__14159;
continue;
} else {
var temp__5720__auto___14160 = cljs.core.seq(seq__14131_14149);
if(temp__5720__auto___14160){
var seq__14131_14161__$1 = temp__5720__auto___14160;
if(cljs.core.chunked_seq_QMARK_(seq__14131_14161__$1)){
var c__4550__auto___14162 = cljs.core.chunk_first(seq__14131_14161__$1);
var G__14163 = cljs.core.chunk_rest(seq__14131_14161__$1);
var G__14164 = c__4550__auto___14162;
var G__14165 = cljs.core.count(c__4550__auto___14162);
var G__14166 = (0);
seq__14131_14149 = G__14163;
chunk__14132_14150 = G__14164;
count__14133_14151 = G__14165;
i__14134_14152 = G__14166;
continue;
} else {
var vec__14144_14167 = cljs.core.first(seq__14131_14161__$1);
var k_14168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144_14167,(0),null);
var v_14169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144_14167,(1),null);
this$__$1.setRequestHeader(k_14168,v_14169);


var G__14170 = cljs.core.next(seq__14131_14161__$1);
var G__14171 = null;
var G__14172 = (0);
var G__14173 = (0);
seq__14131_14149 = G__14170;
chunk__14132_14150 = G__14171;
count__14133_14151 = G__14172;
i__14134_14152 = G__14173;
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

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
