﻿"use strict";(self.webpackChunkvkweb=self.webpackChunkvkweb||[]).push([[250],{890022:(e,t,s)=>{s.d(t,{StickersAnimation:()=>i});var r=s(368076);let i=function(){let e,t,s,n=!1,c=!1,a={},o={},l={},d={};const u={};function _(e){let t=e.getAttribute("data-uid");return t||(t=Math.random().toString(32).substr(2),e.setAttribute("data-uid",t)),t}function g(e,t){u[_(e)]=t}function p(e){let t=e.getAttribute("data-uniq-id");if(!e.querySelector(".svg_sticker_animation"))return!1;let s=l[t];return s||!1}function h(e){if(u[_(e)])return;g(e,!0);let t=p(e),n=e.getAttribute("data-uniq-id");const c=e.getAttribute("data-uid");if(e.classList.contains("animation_play"))return;let d=e.getAttribute("data-animation-path"),h=e.getAttribute("data-sticker-id"),f=!1;const k=o[h];if(h&&(f=(k||d)&&m(e)),f){const u=e.getAttribute("data-animation-class")||"";let _={containers:[e],loop:!0,autoplay:!0,name:c,group:"sticker",lazyLoading:!1,className:`svg_sticker_animation ${u}`};k?_.animationData=k:_.animationUrl=d;let g=e.querySelector(".svg_sticker_animation");g&&g.remove(),t=s.loadAnimation(_),a[h]||t.then((t=>{const s=t.animationData;o[h]=s,l[n]=t,t.addEventListener("firstFrame",(()=>{const t=e.querySelector(".sticker_img");t&&(0,r.hide)(t),e.classList.add("animation_play")}),{once:!0}),t.addEventListener("destroy",(()=>{i.stopAnimation(e)}))})).catch((()=>null))}}function f(){return t().then((e=>(s=e,s)))}return{init(e){t=e.animatorLoader},checkSettingsAndLoadInWeb:function(e){if(StickersSettings.getAutoplay()){let t=document.getElementById("fc_msg"+e),s=t?t.querySelector(".sticker_animation"):null;i.loadAndPlaySticker(s)}},checkSettingsAndLoad:function(e){if(StickersSettings.getAutoplay()){let t=$(`.msg_id_${e} .sticker_animation`);i.loadAndPlaySticker(t)}},loadStickerInMvkIMAndPlay:function(e,t){let s="_msg"+e;t&&(s="msg_id_"+e);const r=document.querySelector(`.${s}`);let n=r?r.querySelector(".sticker_animation"):null;i.loadAndPlayStickerWithTimer(n,500)},loadAutoplayAnimationStickers:function(e){if(!s)return void f().then((()=>{i.loadAutoplayAnimationStickers(e)}));if(e){if(c)return;c=!0}if(n)return;n=!0;let t=document.querySelectorAll(".sticker_animation_autoplay");t&&each(t,(function(e,t){h(t)})),n=!1},loadAndPlaySticker:function(e){e&&(s?requestAnimationFrame((()=>{h(e)})):f().then((()=>{i.loadAndPlaySticker(e)})))},loadAndPlayStickerWithTimer:function(e,t){if(!e)return;if(d[e])return;t||(t=1e3);let s=document.getElementById(e);s?.classList.contains("sticker_animation_disabled_timer")||(d[e]=setTimeout((function(){!s&&(s=document.getElementById(e),s?.classList.contains("sticker_animation_disabled_timer"))||(i.loadAndPlaySticker(s),clearTimeout(d[e]),d[e]=!1)}),t))},reloadStickers:function(){l={}},touchStartSticker:function(t){t.addEventListener("contextmenu",i.preventContextMenu,!1),e=setTimeout((function(){i.loadAndPlaySticker(t)}),500)},touchEndSticker:function(){e&&clearTimeout(e)},preventContextMenu:function(e){e.preventDefault(),e.stopPropagation()},stopAnimation(e){const t=p(e);t&&t.pause();const s=e.getAttribute("data-uniq-id");e.classList.remove("animation_play");const i=e.querySelector(".sticker_img");i&&(0,r.show)(i),g(e,!1),delete l[s]}};function m(e){let t=e.getBoundingClientRect().top,s=e.getBoundingClientRect().bottom;return t<window.innerHeight&&s>=0&&"none"!==e.style.display}}()},801767:(e,t,s)=>{s.d(t,{StickersAnimation:()=>i.StickersAnimation});var r=s(659397),i=s(890022);i.StickersAnimation.init({animatorLoader:()=>(0,r.asyncImportLoader)((()=>Promise.all([s.e(73084),s.e(97066)]).then(s.bind(s,33048)).then((({LottieManager:e})=>e))))})},50614:(e,t,s)=>{s.d(t,{useIsMounted:()=>i});var r=s(667294);const i=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,r.useCallback)((()=>e.current),[])}},571309:(e,t,s)=>{s.d(t,{useLottie:()=>c});var r=s(50614),i=s(667294),n=s(541843);function c(e,{play:t,show:s}={}){const{animationUrl:c,animationData:a}=e,o=(0,i.useRef)(!1),l=(0,i.useRef)(null),d=(0,i.useRef)(null),[u,_]=(0,i.useState)(!1),[g,p]=(0,i.useState)(null),[h,f]=(0,i.useState)(!1),[m,k]=(0,i.useState)(!1),S=(0,r.useIsMounted)();(0,i.useEffect)((()=>{const e=d.current;e&&!h&&(void 0!==t&&(t?e.play():e.pause()),void 0!==s&&(s?e.show():e.hide()))}),[h,t,s]),(0,i.useLayoutEffect)((()=>((async()=>{const t=d.current;t?o.current=!1:(f(!0),k(!1));const s=l.current;if((c||a)&&s&&!o.current){o.current=!0,_(!1),p(null);try{const t=await n.LottieManager.loadAnimation({containers:[s],...e});t.addEventListener("enterFrame",(()=>{requestAnimationFrame((()=>{k(!0)}))}),{once:!0}),t.addEventListener("destroy",(()=>{k(!1)}),{once:!0}),f(!1),d.current=t}catch(e){_(!0),p(e)}S()&&t?.destroy()}})(),()=>{d.current?.destroy()})),[c,a]);return{lottieError:u,lottieLoading:h,lottieLoaded:!h&&!u,lottieRendered:m,lottiePlayerRef:d,lottieContainerRef:l,lottieErrorMessage:g}}},516560:(e,t,s)=>{s.d(t,{InitOptionsProvider:()=>n,useInitOptions:()=>c});var r=s(667294);const i=(0,r.createContext)({}),n=i.Provider;function c(){const{payload:e,...t}=(0,r.useContext)(i);return{...e,...t}}},84743:(e,t,s)=>{s.d(t,{stickers:()=>r});const r=(0,s(798116).createDomain)()},903561:(e,t,s)=>{s.d(t,{buyFx:()=>c});var r=s(304939),i=s(84743),n=s(923795);const c=i.stickers.createEffect((async()=>{const e=window.Stickers.Cart.create([n.RANDOM_PRODUCT_ID]);await e.load();let t=null;try{t=await e.order({v:r.API_VERSION,ignoreEmptyError:!0,emptyErrorLoader:!1})}catch{}return t&&t.random_selector_result&&!t.error?t:null}))},906849:(e,t,s)=>{s.d(t,{hideSnackbar:()=>n,showSnackbar:()=>i});var r=s(798116);const i=(0,r.createEvent)(),n=(0,r.createEvent)()},923795:(e,t,s)=>{s.d(t,{RANDOM_PRODUCT_ID:()=>r,StickersGroup:()=>n,StickersReferrer:()=>c,UGC_STICKERS_APP_ID:()=>i});const r=10101,i=51538586;var n,c;!function(e){e.LAYER="layer"}(n||(n={})),function(e){e.TYPE_STICKERS_KEYBOARD="stickers_keyboard2"}(c||(c={}))},394442:(e,t,s)=>{s.d(t,{openProductModal:()=>r});const r=s(84743).stickers.createEvent()},269719:(e,t,s)=>{s.d(t,{openRandomSelectorPacksModal:()=>r});const r=s(84743).stickers.createEvent()},506731:(e,t,s)=>{s.d(t,{openRandomSelectorResultModal:()=>r});const r=s(84743).stickers.createEvent()},360215:(e,t,s)=>{s.d(t,{getCache:()=>o,getPackByStickerId:()=>g,getSticker:()=>d,getStickers:()=>u,updateCache:()=>l});var r=s(851782),i=s(697616),n=s(205801),c=s(171771),a=s(180937);const o=()=>{if(!window.stickersCache){const e=a.ls.get("stickers_cache");window.stickersCache={...i.DEFAULT_CACHE,...e}}return window.stickersCache},l=e=>{window.stickersCache={...o(),...e}},d=e=>o().stickers.get(e),u=e=>{const{stickers:t}=o();return e.map((e=>t.get(e)))},_=e=>{const t=d(e);if(!t||!t.pack_id)return null;const s=(0,c.getProductFromCache)(t.pack_id);return s&&(0,n.isBasePack)(s)?s:null},g=e=>{const t=_(e);return t?Promise.resolve(t):new Promise((t=>{r.ajax.post("stickers.php",{act:"get_products",sticker_ids:[e]},{onDone(s){(0,c.cacheProductsData)(s),t(_(e))},onFail:e=>(console.error(e),t(null),!0)})}))}},21139:(e,t,s)=>{s.d(t,{Cart:()=>o});var r=s(851782),i=s(234970),n=s(697616),c=s(171771),a=s(251087);class o{static create(e,t=[]){const s=e.map((e=>({product_id:e,amount:1})));return new o(s,t)}copy(){const e=new o(this.getItems(),this.getRecipientIds());return e.setOrder(this.getOrder()),e}getItems(){return Array.from(this.items.values())}setItems(e){this.items=new Map(e.map((e=>[e.product_id,e])))}loadItems(){const e=Array.from(this.items.keys());return(0,c.getProducts)(e).then((()=>{for(const e of Array.from(this.items.values()))e.product=(0,c.getProductFromCache)(e.product_id)}))}getProducts(){return(0,c.getProductsFromCache)(Array.from(this.items.keys()))}hasProduct(e){return this.items.has(e)}addProduct(e,t=!1){if(!this.hasProduct(e)){const s={product_id:e,amount:1};t?this.setItems([...this.getItems(),s]):this.setItems([s,...this.getItems()]),this.onChange&&this.onChange()}}removeProduct(e){this.hasProduct(e)&&(this.items.delete(e),this.onChange&&this.onChange())}getRecipientIds(e=!1){return this.recipientIds.size?Array.from(this.recipientIds.values()):this.isGift&&e?[n.SAMPLE_RECIPIENT_ID]:[]}setRecipientIds(e){this.recipientIds=new Set(e)}hasRecipientId(e){return this.recipientIds.has(e)}addRecipientId(e){this.hasRecipientId(e)||(this.recipientIds.add(e),this.onChange&&this.onChange())}removeRecipientId(e){this.hasRecipientId(e)&&(this.recipientIds.delete(e),this.onChange&&this.onChange())}setOrder(e){if(this._order=e,e){this.recipientIds.clear();for(const t of e.items)t.recipient_id!==n.SAMPLE_RECIPIENT_ID&&this.recipientIds.add(t.recipient_id)}}loadOrder(e){const t=e.items.map((e=>e.product_id));return(0,c.getProducts)(t).then((t=>({...e,items:e.items.map(((e,s)=>({...e,product:t[s]})))})),(()=>e))}getOrder(){return this._order}getRecipientsMap(){return this.recipients}getRecipients(){return Array.from(this.recipients.values())}getRecipientById(e){return this.recipients.get(e)}addRecipients(e){this.recipients=new Map([...this.getRecipients(),...e].map((e=>[e[0],e])))}getJSON(){return JSON.stringify({items:this.getItems().map((e=>({...e,product:void 0}))),recipient_ids:this.getRecipientIds(!0)})}isLoaded(){return null!==this.getOrder()}cancelLoad(){this.loadTimeout&&(window.clearTimeout(this.loadTimeout),this.loadTimeout=null),this.loadCancellationToken&&(this.loadCancellationToken.cancel(),this.loadCancellationToken=null)}load(e=!1){return this.cancelLoad(),new Promise((t=>{this.loadTimeout=window.setTimeout((()=>{this.loadCancellationToken=new i.AjaxCancellationToken,r.ajax.post("stickers.php",{act:"preview_products_order",cart:this.getJSON(),with_suggested_recipients:e?1:0},{cancellationToken:this.loadCancellationToken,onDone:e=>{(0,c.cacheProductsData)(e),Promise.all([this.loadItems(),this.loadOrder(e.order)]).then((([,s])=>{this.setOrder(s),e.recipients&&this.addRecipients(e.recipients),t(this)}),(()=>{}))},onFail:e=>(e&&window.__dev&&console.error(e),t(this),!0)})}),300)}))}order({ignoreEmptyError:e,emptyErrorLoader:t,...s}={}){return new Promise((i=>{r.ajax.post("stickers.php",{act:"order_products",cart:this.getJSON(),hash:s.hash||this.getOrder()?.hash,message:s.message,is_private:s.is_private?1:0,ref:s.ref,gift_ref:s.gift_ref,v:s.v},{onDone:e=>{requestAnimationFrame((()=>{(0,a.hideBoxLoader)()})),(0,c.cacheProductsData)(e),e.result.random_selector_result=e.random_selector_result,Promise.all([this.loadOrder(e.order),this.loadOrder(e.result)]).then((([e,t])=>{this.setOrder(e),i(t)}),(()=>{}))},onFail:s=>!s&&e?(t&&requestAnimationFrame((()=>{(0,a.showBoxLoader)()})),!0):(s&&console.error(s),i(null),!0)})}))}constructor(e,t=[]){this.loadTimeout=null,this.loadCancellationToken=null,this.isGift=!1,this.onChange=null,this._order=null,this.setItems(e),this.recipientIds=new Set(t),this.recipients=new Map}}},591319:(e,t,s)=>{s.d(t,{default:()=>P});var r=s(785893),i=s(667294),n=s(113788),c=s(451879),a=s(416218),o=s(255465),l=s(251087),d=s(877926),u=s(471828),_=s(231068),g=s(205801),p=s(563313),h=s(903307),f=s(214833),m=s(668798),k=s(333764),S=s(659397);const P=({cart:e,options:{ref:t,gift_ref:s},closeBox:P,updateBox:y})=>{const[w,L]=(0,h.useCart)(e),v=!w.isLoaded()&&L;(0,i.useEffect)((()=>{y()}),[v]);const C=w.getRecipientIds(),I=w.getOrder(),R=I&&!I.error&&I.items.find((e=>!e.error&&!(0,p.isSampleOrderItem)(e))),[x,A]=function(e){if(!e)return[null,null];let t;for(const s of e.items){const{product:e}=s;if(e&&(0,g.isPackProduct)(e)){t=e;break}}let s=e.items.filter((({product:e})=>e?.can_gift));const r=s.filter((e=>!e.error&&!(0,p.isSampleOrderItem)(e)));r.length&&(s=r);const i=new g.ProductsByType(s.map((e=>e.product))),n=i.pack.values().next().value,c=Array.from(i.style);let a="",o="";if(1===c.length)a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_1_style"),"title",c[0].title),n?o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_with_pack"),"title",n.title):t&&(o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_for_pack"),"title",t.title));else if(n){if(a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_pack"),"title",n.title),c.length)switch(c.length){case 2:o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_with_2_styles"),"title1",c[0].title,"title2",c[1].title);break;case 3:o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_with_3_styles"),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title);break;case 4:o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_with_3_styles_and_1_more"),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title);break;default:const e=c.length-3;o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_with_3_styles_and_n_more",e),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title,"n",e)}}else if(c.length){switch(c.length){case 2:a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_2_styles"),"title1",c[0].title,"title2",c[1].title);break;case 3:a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_3_styles"),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title);break;case 4:a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_3_styles_and_1_more"),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title);break;default:const e=c.length-3;a=(0,d.langStr)(u.getLang("purchases_stickers_gift_title_3_styles_and_n_more",e),"title1",c[0].title,"title2",c[1].title,"title3",c[2].title,"n",e)}t&&(o=(0,d.langStr)(u.getLang("purchases_stickers_gift_description_for_pack"),"title",t.title))}c.length?o+=" "+u.getLang("purchases_stickers_gift_description_styles"):o+=" "+u.getLang("purchases_stickers_gift_description");return[a,o]}(I),[,E]=(0,i.useState)(null);(0,i.useLayoutEffect)((()=>{const e=w.getRecipients();if(E(window.WideDropdown.init("StickerProductsGiftRecipientsDropdown",{defaultItems:e,items:e,noResult:u.getLang("gifts_nobody_found"),introText:u.getLang("gifts_start_typing_recipient"),maxItems:20,onChange:(e,t)=>{1===e?w.addRecipientId(+t):w.removeRecipientId(+t)}})),C.length)for(const e of C){const t=w.getRecipientById(e);t&&window.WideDropdown.select("StickerProductsGiftRecipientsDropdown",!1,t)}else window.WideDropdown.focus("StickerProductsGiftRecipientsDropdown");return()=>{window.WideDropdown.deinit("StickerProductsGiftRecipientsDropdown")}}),[v]);const[b,j]=(0,i.useState)(""),[D,N]=(0,i.useState)(!1),[T,G]=(0,i.useState)(!1),M=()=>{T||(G(!0),w.order({message:b,is_private:D,ref:t,gift_ref:s}).then((e=>{G(!1),e&&!e.error&&((0,l.showDoneBox)(function(e,t){const s=new g.ProductsByType(e.items.filter((e=>!e.error)).map((e=>e.product))),r=function(e){const t=e.getPack(),s=e.getStyles();if(t)return s.length?(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_pack_and_styles",s.length),"title",t.title,"styles_num",s.length):(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_pack"),"title",t.title);if(s.length)switch(s.length){case 1:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_1_style"),"title",s[0].title);case 2:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_2_styles"),"title1",s[0].title,"title2",s[1].title);case 3:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_3_styles"),"title1",s[0].title,"title2",s[1].title,"title3",s[2].title);case 4:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_3_styles_and_1_more"),"title1",s[0].title,"title2",s[1].title,"title3",s[2].title);default:{const e=s.length-3;return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_products_3_styles_and_n_more",e),"title1",s[0].title,"title2",s[1].title,"title3",s[2].title,"n",e)}}return null}(s);if(!r)return null;const i=new Set;for(const s of e.items){const{error:e,recipient_id:r}=s;if(e)continue;const n=t(r);n&&i.add(n)}const n=function(e,t){const s=Array.from(e.values());switch(s.length){case 0:return null;case 1:{const e=1===t?u.getLang("purchases_stickers_gift_result_1_recipient_single","raw"):u.getLang("purchases_stickers_gift_result_1_recipient_multiple","raw");return(0,d.langStr)((0,u.langSex)(s[0][8],e),"name",s[0][8])}case 2:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_2_recipients",t),"name1",s[0][8],"name2",s[1][8]);case 3:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_3_recipients",t),"name1",s[0][8],"name2",s[1][8],"name3",s[2][8]);case 4:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_4_recipients",t),"name1",s[0][8],"name2",s[1][8],"name3",s[2][8],"name4",s[3][8]);case 5:return(0,d.langStr)(u.getLang("purchases_stickers_gift_result_5_recipients",t),"name1",s[0][8],"name2",s[1][8],"name3",s[2][8],"name4",s[3][8],"name5",s[4][8]);default:{const e=s.length-4,r=1===t?u.getLang("purchases_stickers_gift_result_4_recipients_and_n_more_single"):u.getLang("purchases_stickers_gift_result_4_recipients_and_n_more_multiple");return(0,d.langStr)(r,"name1",s[0][8],"name2",s[1][8],"name3",s[2][8],"name4",s[3][8],"n",e)}}return null}(i,s.getCount());if(!n)return null;return(0,d.langStr)(n,"products",r)}(e,(e=>w.getRecipientById(e)))),P())}),(()=>{})))};return(0,i.useEffect)((()=>{window.WideDropdown.disable("StickerProductsGiftRecipientsDropdown",T)}),[T]),(0,r.jsxs)("article",{className:"StickerProductsGift",children:[(0,r.jsx)(_.ModalHeader,{className:"StickerProductsGift__header",title:u.getLang("purchases_stickers_gift_box_title"),onClose:P}),v?(0,r.jsx)("section",{className:"StickerProductsGift__content StickerProductsGift__content--loading",children:(0,r.jsx)(n.Spinner,{})}):(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("section",{className:"StickerProductsGift__content",children:[(0,r.jsx)(f.default,{order:I,forceValid:!R}),(0,r.jsx)("h1",{className:"StickerProductsGift__productsTitle",children:(0,S.decodeHTMLEntities)(x||"")}),(0,r.jsx)("p",{className:"StickerProductsGift__productsDescription",children:(0,S.decodeHTMLEntities)(A||"")}),I&&(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("dl",{className:"StickerProductsGift__price",children:[(0,r.jsx)("dt",{className:"StickerProductsGift__priceLabel",children:u.getLang("purchases_gift_price_label")})," ",(0,r.jsx)("dd",{className:"StickerProductsGift__priceValue",children:u.getLang("global_n_votes",I.price.current)})]}),(0,r.jsx)("div",{className:"StickerProductsGift__balance",children:(0,d.langStr)(u.getLang("gifts_you_have_X_votes"),"votes",u.getLang("global_n_votes",I.balance))})]}),(0,r.jsxs)("div",{className:"StickerProductsGift__recipients",children:[(0,r.jsx)("label",{className:"StickerProductsGift__recipientsLabel",htmlFor:"StickerProductsGiftRecipientsInput",children:u.getLang("gifts_receiver")}),(0,r.jsxs)("div",{className:"wdd StickerProductsGift__recipientsDropdown",id:"StickerProductsGiftRecipientsDropdown",children:[(0,r.jsx)("div",{className:"fl_r wdd_arr"}),(0,r.jsx)("input",{className:"wdd_text fl_l",id:"StickerProductsGiftRecipientsInput",placeholder:u.getLang("gifts_choose_recipients")})]})]}),(0,r.jsxs)("div",{className:"StickerProductsGift__message",children:[(0,r.jsx)("label",{className:"StickerProductsGift__messageLabel",htmlFor:"StickerProductsGiftMessageInput",children:u.getLang("purchases_gift_your_message")}),(0,r.jsx)(c.Textarea,{id:"StickerProductsGiftMessageInput",rows:3,value:b,onChange:e=>j(e.currentTarget.value),onResize:()=>y(),disabled:T})]}),(0,r.jsx)(a.Checkbox,{noPadding:!0,stretched:!1,checked:D,disabled:T,onChange:()=>N(!D),children:u.getLang("gifts_receiver_only")})]}),(0,r.jsxs)("footer",{className:"StickerProductsGift__footer",children:[(0,r.jsx)("div",{className:"StickerProductsGift__footerNote",children:!L&&I&&(0,r.jsxs)("div",{className:"StickerProductsGift__details",children:[u.getLang("purchases_stickers_gift_details_label"),(0,r.jsx)(o.HintIcon,{gap:"l",tooltip:{placement:"top",...(0,m.stickerProductsGiftDetails)({order:I,recipients:w.getRecipientsMap()})}})]})}),(0,r.jsx)("div",{className:"StickerProductsGift__footerButtons",children:(0,r.jsx)(k.default,{className:"StickerProductsGift__gift",mode:R?"primary":"secondary",size:"m",loading:L||T,disabled:!R,price:I?.price,text:R?(0,d.langStr)(u.getLang("purchases_stickers_gift_send_for"),"price",u.getLang("global_n_votes",I?.price.current)):u.getLang("purchases_stickers_gift_send"),onClick:()=>M()})})]})]})]})}},668798:(e,t,s)=>{s.d(t,{stickerProductsGiftDetails:()=>u});var r=s(785893),i=s(667294),n=s(659397),c=s(22378),a=s(877926),o=s(471828),l=s(563313),d=s(205801);const u=({order:e,recipients:t})=>{const s=function(e){if(!e)return null;let t=e.items.filter((({product:e})=>e?.can_gift));const s=t.filter((e=>!e.error&&!(0,l.isSampleOrderItem)(e)));s.length&&(t=s);const r=[],i=[];for(const e of t){const{product:t}=e;t&&((0,d.isPackProduct)(t)?r.push(e):(0,d.isStyleProduct)(t)&&i.push(e))}const n=i.reduce(((e,t)=>e+(t.price?.current||0)),0);if(r.length){const e=r.reduce(((e,t)=>e+(t.price?.current||0)),0);return i.length?(0,a.langStr)(o.getLang("purchases_stickers_gift_details_summary_pack_with_styles",i.length),"pack_price_sum",o.getLang("global_n_votes",e),"styles_num",i.length,"styles_price_sum",o.getLang("global_n_votes",n)):(0,a.langStr)(o.getLang("purchases_stickers_gift_details_summary_pack"),"pack_price_sum",o.getLang("global_n_votes",e))}if(i.length)return(0,a.langStr)(o.getLang("purchases_stickers_gift_details_summary_styles",i.length),"styles_num",i.length,"styles_price_sum",o.getLang("global_n_votes",n));return null}(e)||"",u=new Map;for(const s of e.items){const{error:e,product:r,recipient_id:i}=s;if(e)continue;const n=t.get(i);if(!n)continue;let c=u.get(n);c||(c=new d.ProductsByType,u.set(n,c)),c.add(r)}const g=Array.from(u.entries()),p=g.length,h={maxWidth:291,text:g.map((([e,t])=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(c.InnerHTML,{Component:"span",children:e[1]}),": ",(0,n.decodeHTMLEntities)(_(t)||"")," "]},e[0])))};return h[s&&p?"header":"text"]=(0,r.jsx)(c.InnerHTML,{children:s}),h};function _(e){const t=e.getPack(),s=e.getStyles();let r="";return s.length&&(r=s.map((e=>(0,a.langStr)(o.getLang("purchases_stickers_gift_details_recipient_style_title"),"title",e.title))).join(", ")),t?r?(0,a.langStr)(o.getLang("purchases_stickers_gift_details_recipient_pack_and_styles"),"pack_title",t.title,"style_titles",r):(0,a.langStr)(o.getLang("purchases_stickers_gift_details_recipient_pack"),"title",t.title):r?(0,a.langStr)(o.getLang("purchases_stickers_gift_details_recipient_styles"),"style_titles",r):null}},214833:(e,t,s)=>{s.d(t,{default:()=>o});var r=s(785893),i=s(659397),n=s(205801),c=s(563313);const a={s:56,m:96,l:168},o=({order:e,forceValid:t=!1})=>{const s=new Map,o=new Map;if(e)for(const t of e.items){const{product:e}=t;e&&((0,n.isPackProduct)(e)?s.has(e)?s.get(e)?.push(t):s.set(e,[t]):(0,n.isStyleProduct)(e)&&(o.has(e)?o.get(e)?.push(t):o.set(e,[t])))}const l=s.keys().next().value,d=(l?1:0)+o.size,u=d>1?d>2?"s":"m":"l",_=a[u],g=Array.from(o.entries());t||g.sort((([,e],[,t])=>t.filter((e=>!e.error)).length-e.filter((e=>!e.error)).length));const p=g.slice(0,3);let h=g.slice(3),f=!0;if(!t){const e=h.filter((([,e])=>e.find((e=>!e.error))));e.length?h=e:f=!1}return(0,r.jsxs)("ul",{className:"StickerProductsGiftIcons",children:[l&&(0,r.jsx)("li",{className:(0,i.classNames)("StickerProductsGiftIcons__icon",`StickerProductsGiftIcons__icon--${u}`,"StickerProductsGiftIcons__icon--pack",{"StickerProductsGiftIcons__icon--invalid":!t&&!s.get(l)?.find((e=>!e.error))}),style:{backgroundImage:`url(${(0,c.getStickerPackIconUrl)(l,_,_)})`}},l.id),p.map((([e,s])=>(0,r.jsx)("li",{className:(0,i.classNames)("StickerProductsGiftIcons__icon",`StickerProductsGiftIcons__icon--${u}`,"StickerProductsGiftIcons__icon--style",{"StickerProductsGiftIcons__icon--invalid":!t&&!s.find((e=>!e.error))}),style:{backgroundImage:`url(${(0,c.getStickerPackIconUrl)(e,_,_)})`}},e.id))),h.length?(0,r.jsxs)("li",{className:(0,i.classNames)("StickerProductsGiftIcons__icon",`StickerProductsGiftIcons__icon--${u}`,"StickerProductsGiftIcons__icon--more",{"StickerProductsGiftIcons__icon--invalid":!f}),children:["+",h.length]},"more"):null]})}},333764:(e,t,s)=>{s.d(t,{default:()=>o});var r=s(785893),i=s(667294),n=s(441430),c=s(659397),a=s(471828);const o=({className:e,price:t,text:s,placeholder:o,...l})=>{let d=(0,i.useMemo)((()=>{if(t){let e;t.current!==t.regular&&t.regular&&(e=(0,r.jsx)("span",{className:"StickersPriceButton__regular",children:t.current?t.regular:(0,a.langStr)(a.getLang("purchases_stickers_n_for_m"),"%n","","%m",a.getLang("global_n_votes",t.regular))},"regular"));const i=(0,r.jsx)("span",{className:"StickersPriceButton__current",children:t.current?a.getLang("global_n_votes",t.current):a.getLang("purchases_for_free_btn").toLowerCase()},"current");return s?s.split(/(\{regular_price\}|\{price\})/).map(((t,s)=>"{regular_price}"===t?e:"{price}"===t?i:t?(0,r.jsx)("span",{className:"StickersPriceButton__label",children:t},`label${s}`):void 0)):[e,i]}return[o]}),[s,o,t?.regular,t?.current]);return(0,r.jsx)(n.Button,{className:(0,c.classNames)("StickersPriceButton",e),...l,children:d})}},903307:(e,t,s)=>{s.d(t,{useCart:()=>i});var r=s(667294);const i=e=>{const[t,s]=(0,r.useState)(e),[i,n]=(0,r.useState)(null),c=(0,r.useCallback)((()=>{const e=t.load();n(e),e.then((t=>{s(t),n((t=>t===e?null:t))}),(()=>{}))}),[t]);return(0,r.useEffect)((()=>(t.onChange=c,t.isLoaded()||c(),()=>{t.onChange=null,t.cancelLoad()})),[t]),[t,null!==i]}},171771:(e,t,s)=>{s.d(t,{activateProduct:()=>_,cacheProductsData:()=>n,getProduct:()=>u,getProductFromCache:()=>c,getProducts:()=>d,getProductsFromCache:()=>a,updateUserProductState:()=>g});var r=s(851782),i=s(360215);const n=(e,t=[])=>{const s=(0,i.getCache)();if(e.stickers){const{stickers:t}=s;for(const s of e.stickers)t.has(s.id)?t.set(s.id,{...t.get(s.id),...s}):t.set(s.id,s)}if(e.products)for(const t of e.products)s.products.set(t.id,t),s.productPromises.delete(t.id);for(const e of t)s.products.has(e)||s.products.set(e,null),s.productPromises.delete(e);e.emoji&&window.Emoji&&window.Emoji.updateTabs(e.emoji.stickers,e.emoji.keywords,!0),(0,i.updateCache)(s)},c=e=>(0,i.getCache)().products.get(e),a=e=>{const t=(0,i.getCache)().products;return e.map((e=>t.get(e)))};function o(){let{productsPromise:e}=(0,i.getCache)();return e||(e=new Promise((e=>setTimeout((()=>{const t=(0,i.getCache)().productIdsQueue,s=Array.from(t);t.clear(),(0,i.updateCache)({productIdsQueue:t,productsPromise:void 0}),r.ajax.post("stickers.php",{act:"get_products",product_ids:s},{onDone(t){n(t,s),e([])},onFail:t=>(console.error(t),n({},s),e([]),!0)})}),300))),(0,i.updateCache)({productsPromise:e})),e}const l=e=>{if(!e.length)return Promise.resolve([]);const{productPromises:t,productIdsQueue:s}=(0,i.getCache)(),r=new Set;for(const i of e)if(t.has(i)){const e=t.get(i);e&&r.add(e)}else{s.add(i);const e=o();t.set(i,e),r.add(e)}return(0,i.updateCache)({productIdsQueue:s,productPromises:t}),Promise.all(r).then((()=>a(e)))},d=(e,t=!0)=>{const s=t?e.filter((e=>void 0===c(e))):e;return s.length?l(s).then((()=>a(e))):Promise.resolve(a(e))},u=(e,t=!0)=>{if(t){const t=c(e);if(void 0!==t)return Promise.resolve(t)}return l([e]).then((()=>c(e)))},_=e=>new Promise((t=>{r.ajax.post("stickers.php",{act:"activate_product",product_id:e.id,hash:e.csrf_hash},{onDone(e){n(e),t()},onFail:e=>(console.error(e),t(),!0)})})),g=(e,t,s,i=!0)=>new Promise((c=>{r.ajax.post("stickers.php",{act:"update_user_product_state",product_ids:[e],key:t,value:s},{onDone(e){i&&n(e),c()},onFail:e=>(console.error(e),c(),!0)})}))},455601:(e,t,s)=>{s.d(t,{giftStickerProducts:()=>_,giftStickersCart:()=>u});var r=s(785893),i=s(973935),n=s(780891),c=s(159663),a=s(21139),o=s(969412),l=s(360215),d=s(591319);function u(e,t){const{productsGiftLock:s}=(0,l.getCache)();if(s)return null;let a;(0,l.updateCache)({productsGiftLock:!0});const u={...t};function _(){return a?.bodyNode.querySelector(".StickersProductsGift")}function g(){a?.hide()}function p(){a?.updateBoxCoords()}return(0,o.showLoader)(),e.isGift=!0,Promise.all([e.load(!0),window.stManager.add(["stickers.css",window.jsc("web/wide_dd.js"),"wide_dd.css"])]).then((([e])=>{(0,o.hideLoader)(),a=new c.MessageBox({hideButtons:!0,bodyStyle:"padding: 0; background: none;",width:450,onShow(){!function(e){const t=_();t&&i.render((0,r.jsx)(n.AppRootProvider,{children:(0,r.jsx)(d.default,{cart:e,options:u,closeBox:g,updateBox:p})}),t)}(e),requestAnimationFrame((()=>{p()}))},onHideAttempt:()=>(function(){const e=_();e&&i.unmountComponentAtNode(e)}(),!0),onHide(){(0,l.updateCache)({productsGiftLock:!1})}}),a.content('<div class="StickersProductsGift"></div>'),a.show()}),(()=>{})),{hide:g}}function _(e,t=[],s){return u(a.Cart.create(e,t),s)}},491625:(e,t,s)=>{s.d(t,{ViewId:()=>r,views:()=>d});var r,i=s(667294);s(518282);!function(e){e.LAYER="layer",e.LAYER_PURCHASE_DETAILS="layer_purchase_details",e.RANDOM_SELECTOR="random_selector",e.RANDOM_SELECTOR_PACKS="RANDOM_SELECTOR_packs",e.RANDOM_SELECTOR_RESULT="RANDOM_SELECTOR_result"}(r||(r={}));const n=(0,i.lazy)((()=>Promise.all([s.e(2067),s.e(20795),s.e(36834),s.e(78192),s.e(58086),s.e(7103)]).then(s.bind(s,994266)).then((({Layer:e})=>({default:e}))))),c=(0,i.lazy)((()=>s.e(37211).then(s.bind(s,84760)).then((({PurchaseDetails:e})=>({default:e}))))),a=(0,i.lazy)((()=>Promise.all([s.e(2067),s.e(20795),s.e(36834),s.e(39457)]).then(s.bind(s,951501)).then((({Main:e})=>({default:e}))))),o=(0,i.lazy)((()=>Promise.all([s.e(2067),s.e(20795),s.e(36834),s.e(58086),s.e(78177)]).then(s.bind(s,264943)).then((({Packs:e})=>({default:e}))))),l=(0,i.lazy)((()=>Promise.all([s.e(20795),s.e(36834),s.e(34757)]).then(s.bind(s,566210)).then((({Result:e})=>({default:e}))))),d=new Map([["layer",{Component:n,width:640}],["layer_purchase_details",{Component:c}],["random_selector",{Component:a}],["RANDOM_SELECTOR_packs",{Component:o}],["RANDOM_SELECTOR_result",{Component:l}]])},518282:(e,t,s)=>{s(838688)},838688:(e,t,s)=>{var r=s(798116),i=s(936167),n=s(906849);const c=(0,r.createEffect)((({title:e,subtitle:t,action:s,timeout:r,onClose:n})=>{(0,i.showSnackbar)({text:e,subtitle:t,timeout:r,action:s,onClose:n})}));(0,r.sample)({clock:n.showSnackbar,target:c});const a=(0,r.createEffect)((e=>{(0,i.hideSnackbar)(e)}));(0,r.sample)({clock:n.hideSnackbar,target:a})},758014:(e,t,s)=>{s.d(t,{openView:()=>a});var r=s(785893),i=s(491625),n=s(516560),c=s(284658);async function a(e){const{view:t,modalBoxOptions:s}=e,{width:a,Component:o}=i.views.get(t)||{};if(o)return(0,c.showMessageBoxModalSuspense)((({onClose:t,refreshCoordinates:s})=>(0,r.jsx)(n.InitOptionsProvider,{value:{payload:{},...e,init:s,destroy:t},children:(0,r.jsx)(o,{})})),{width:a,...s})}},88092:(e,t,s)=>{s.d(t,{openLayerPurchaseDetails:()=>n});var r=s(491625),i=s(758014);function n(e){return(0,i.openView)({payload:e,view:r.ViewId.LAYER_PURCHASE_DETAILS})}},476928:(e,t,s)=>{s.d(t,{openStickersLayerView:()=>l});var r=s(798116),i=s(491625),n=s(758014),c=s(88092),a=s(84743),o=s(394442);async function l(e){const{modalBoxOptions:t}=e;return(0,n.openView)({payload:{...e,onPurchaseDetailsOpen:e=>(0,c.openLayerPurchaseDetails)({details:e})},modalBoxOptions:t,view:i.ViewId.LAYER})}const d=a.stickers.createEffect(l);(0,r.sample)({clock:o.openProductModal,target:d})},251488:(e,t,s)=>{s.d(t,{openStickersRandomSelectorView:()=>u});var r=s(798116),i=s(758014),n=s(491625),c=s(84743),a=s(903561),o=s(269719),l=s(506731),d=s(251087);function u(e){return(0,i.openView)({view:n.ViewId.RANDOM_SELECTOR,...e})}const _=c.stickers.createEffect((()=>{(0,d.hideBoxLoader)(),(0,d.curBox)()||u({payload:{preventReload:!0}})})),g=c.stickers.createEffect((()=>{(0,i.openView)({view:n.ViewId.RANDOM_SELECTOR_PACKS})}));(0,r.sample)({clock:o.openRandomSelectorPacksModal,target:g});const p=c.stickers.createEffect((()=>{(0,i.openView)({view:n.ViewId.RANDOM_SELECTOR_RESULT})}));(0,r.sample)({clock:l.openRandomSelectorResultModal,target:p}),(0,r.sample)({clock:a.buyFx.finally,target:_})}}]);try{stManager.done("dist/web/chunks/fc936a0f.99c676ae.js")}catch(e){}