// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent_modals.modals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
reagent_modals.modals.modal_id = "reagent-modal";
if((typeof reagent_modals !== 'undefined') && (typeof reagent_modals.modals !== 'undefined') && (typeof reagent_modals.modals.modal_content !== 'undefined')){
} else {
reagent_modals.modals.modal_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,null,cljs.core.cst$kw$shown,null,cljs.core.cst$kw$size,null], null));
}
reagent_modals.modals.get_modal = (function reagent_modals$modals$get_modal(){
return goog.dom.getElement(reagent_modals.modals.modal_id);
});
reagent_modals.modals.with_opts = (function reagent_modals$modals$with_opts(opts){
var m = jQuery(reagent_modals.modals.get_modal());
(m["modal"]).call(m,opts);

(m["modal"]).call(m,"show");

return m;
});
if((typeof reagent_modals !== 'undefined') && (typeof reagent_modals.modals !== 'undefined') && (typeof reagent_modals.modals.show_modal_BANG_ !== 'undefined')){
} else {
reagent_modals.modals.show_modal_BANG_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14990 = cljs.core.get_global_hierarchy;
return (fexpr__14990.cljs$core$IFn$_invoke$arity$0 ? fexpr__14990.cljs$core$IFn$_invoke$arity$0() : fexpr__14990.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-modals.modals","show-modal!"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (args){
return cljs.core.map_QMARK_(args);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
reagent_modals.modals.show_modal_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (p__14991){
var map__14992 = p__14991;
var map__14992__$1 = (((((!((map__14992 == null))))?(((((map__14992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14992):map__14992);
var keyboard = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14992__$1,cljs.core.cst$kw$keyboard,true);
var backdrop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14992__$1,cljs.core.cst$kw$backdrop,true);
return reagent_modals.modals.with_opts(({"keyboard": keyboard, "backdrop": backdrop}));
}));
reagent_modals.modals.show_modal_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,false,(function (keyboard){
return reagent_modals.modals.with_opts(({"keyboard": keyboard}));
}));
reagent_modals.modals.close_modal_BANG_ = (function reagent_modals$modals$close_modal_BANG_(){
var m = jQuery(reagent_modals.modals.get_modal());
return (m["modal"]).call(m,"hide");
});
/**
 * A pre-configured close button. Just include it anywhere in the
 * modal to let the user dismiss it.
 */
reagent_modals.modals.close_button = (function reagent_modals$modals$close_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$data_DASH_dismiss,"modal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only,"Close"], null)], null);
});
reagent_modals.modals.modal_window = (function reagent_modals$modals$modal_window(){
var unmounting_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (unmounting_QMARK_){
return (function (e){
var m_14996 = jQuery(reagent_modals.modals.get_modal());
(m_14996["on"]).call(m_14996,"hidden.bs.modal",((function (m_14996,unmounting_QMARK_){
return (function (){
var temp__5720__auto___14997 = cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5720__auto___14997)){
var f_14998 = temp__5720__auto___14997;
(f_14998.cljs$core$IFn$_invoke$arity$0 ? f_14998.cljs$core$IFn$_invoke$arity$0() : f_14998.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.deref(unmounting_QMARK_))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_modals.modals.modal_content,cljs.core.assoc,cljs.core.cst$kw$content,null);
}
});})(m_14996,unmounting_QMARK_))
);

(m_14996["on"]).call(m_14996,"shown.bs.modal",((function (m_14996,unmounting_QMARK_){
return (function (){
var temp__5720__auto__ = cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});})(m_14996,unmounting_QMARK_))
);

(m_14996["on"]).call(m_14996,"hide.bs.modal",((function (m_14996,unmounting_QMARK_){
return (function (){
var temp__5720__auto__ = cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});})(m_14996,unmounting_QMARK_))
);

var mc = cljs.core.deref(reagent_modals.modals.modal_content);
if(cljs.core.truth_(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(mc))){
return (reagent_modals.modals.show_modal_BANG_.cljs$core$IFn$_invoke$arity$1 ? reagent_modals.modals.show_modal_BANG_.cljs$core$IFn$_invoke$arity$1(mc) : reagent_modals.modals.show_modal_BANG_.call(null,mc));
} else {
return null;
}
});})(unmounting_QMARK_))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (unmounting_QMARK_){
return (function (){
cljs.core.reset_BANG_(unmounting_QMARK_,true);

return reagent_modals.modals.close_modal_BANG_();
});})(unmounting_QMARK_))
,cljs.core.cst$kw$reagent_DASH_render,((function (unmounting_QMARK_){
return (function (){
var map__14994 = cljs.core.deref(reagent_modals.modals.modal_content);
var map__14994__$1 = (((((!((map__14994 == null))))?(((((map__14994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14994):map__14994);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14994__$1,cljs.core.cst$kw$content);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14994__$1,cljs.core.cst$kw$size);
var size_class = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lg,"modal-lg",cljs.core.cst$kw$sm,"modal-sm"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal$fade,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,reagent_modals.modals.modal_id,cljs.core.cst$kw$tab_DASH_index,(-1),cljs.core.cst$kw$role,"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.get.cljs$core$IFn$_invoke$arity$2(size_class,size)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_content,content], null)], null)], null);
});})(unmounting_QMARK_))
], null));
});
/**
 * Update and show the modal window. `reagent-content' is a normal
 * reagent component. `configs' is an optional map of advanced
 * configurations:
 * 
 * - :shown -> a function called once the modal is shown.
 * - :hide -> a function called once the modal is asked to hide.
 * - :hidden -> a function called once the modal is hidden.
 * - :size -> Can be :lg (large) or :sm (small). Everything else defaults to medium.
 * - :keyboard -> if true, `esc' key can dismiss the modal. Default to true.
 * - :backdrop -> true (default): backdrop. 
 *                "static" : backdrop, but doesn't close the model when clicked upon. 
 *                false : no backdrop.
 */
reagent_modals.modals.modal_BANG_ = (function reagent_modals$modals$modal_BANG_(var_args){
var G__15000 = arguments.length;
switch (G__15000) {
case 1:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reagent_content){
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2(reagent_content,null);
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reagent_content,configs){
cljs.core.reset_BANG_(reagent_modals.modals.modal_content,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,reagent_content], null),configs], 0)));

var G__15001 = cljs.core.select_keys(configs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyboard,cljs.core.cst$kw$backdrop], null));
return (reagent_modals.modals.show_modal_BANG_.cljs$core$IFn$_invoke$arity$1 ? reagent_modals.modals.show_modal_BANG_.cljs$core$IFn$_invoke$arity$1(G__15001) : reagent_modals.modals.show_modal_BANG_.call(null,G__15001));
});

reagent_modals.modals.modal_BANG_.cljs$lang$maxFixedArity = 2;

