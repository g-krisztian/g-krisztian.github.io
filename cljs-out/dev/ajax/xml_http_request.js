// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12832 = e.target.readyState;
var fexpr__12831 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__12831.cljs$core$IFn$_invoke$arity$1 ? fexpr__12831.cljs$core$IFn$_invoke$arity$1(G__12832) : fexpr__12831.call(null,G__12832));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12834,handler){
var map__12835 = p__12834;
var map__12835__$1 = (((((!((map__12835 == null))))?(((((map__12835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12835):map__12835);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12835__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12835__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12835,map__12835__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12833_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12833_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12835,map__12835__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___12853 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___12853)){
var response_type_12854 = temp__5720__auto___12853;
this$__$1.responseType = cljs.core.name(response_type_12854);
} else {
}

var seq__12837_12855 = cljs.core.seq(headers);
var chunk__12838_12856 = null;
var count__12839_12857 = (0);
var i__12840_12858 = (0);
while(true){
if((i__12840_12858 < count__12839_12857)){
var vec__12847_12859 = chunk__12838_12856.cljs$core$IIndexed$_nth$arity$2(null,i__12840_12858);
var k_12860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847_12859,(0),null);
var v_12861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847_12859,(1),null);
this$__$1.setRequestHeader(k_12860,v_12861);


var G__12862 = seq__12837_12855;
var G__12863 = chunk__12838_12856;
var G__12864 = count__12839_12857;
var G__12865 = (i__12840_12858 + (1));
seq__12837_12855 = G__12862;
chunk__12838_12856 = G__12863;
count__12839_12857 = G__12864;
i__12840_12858 = G__12865;
continue;
} else {
var temp__5720__auto___12866 = cljs.core.seq(seq__12837_12855);
if(temp__5720__auto___12866){
var seq__12837_12867__$1 = temp__5720__auto___12866;
if(cljs.core.chunked_seq_QMARK_(seq__12837_12867__$1)){
var c__4550__auto___12868 = cljs.core.chunk_first(seq__12837_12867__$1);
var G__12869 = cljs.core.chunk_rest(seq__12837_12867__$1);
var G__12870 = c__4550__auto___12868;
var G__12871 = cljs.core.count(c__4550__auto___12868);
var G__12872 = (0);
seq__12837_12855 = G__12869;
chunk__12838_12856 = G__12870;
count__12839_12857 = G__12871;
i__12840_12858 = G__12872;
continue;
} else {
var vec__12850_12873 = cljs.core.first(seq__12837_12867__$1);
var k_12874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850_12873,(0),null);
var v_12875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850_12873,(1),null);
this$__$1.setRequestHeader(k_12874,v_12875);


var G__12876 = cljs.core.next(seq__12837_12867__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12837_12855 = G__12876;
chunk__12838_12856 = G__12877;
count__12839_12857 = G__12878;
i__12840_12858 = G__12879;
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
