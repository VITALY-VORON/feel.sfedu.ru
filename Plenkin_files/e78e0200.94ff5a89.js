﻿"use strict";(self.webpackChunkvkweb=self.webpackChunkvkweb||[]).push([[81038],{899737:(e,t,s)=>{s.d(t,{Handler:()=>h});var r=s(509115),i=s(470392),a=s(554862),o=s(205942),n=s(433830),c=s(902947),d=s(322695),l=s(261311),p=s(977053);class h{get successDescriptor(){return`${this.params.originalHandlerName||this.params.handlerName}Result`}get errorDescriptor(){return`${this.params.originalHandlerName||this.params.handlerName}Failed`}get previousCallsCount(){return this.app?.context?.getHandlerCallsCount(this.params.handlerName)-1||0}shouldLogStat(){return!0}shouldLogCallArgumentsInStat(){return(0,p.partConfigEnabled)("mini_apps_send_stat_arguments_bridge_events")&&Array.isArray(this.app?.bridgeMethodsToBeLogged)&&this.app.bridgeMethodsToBeLogged.includes(this.params.handlerName)}getEventHash(e=!1){return cur.app.options[`${o.VK_CONNECT_EVENTS[`${this.params.handlerName}${e?"Preload":""}`]}_hash`]}getEventHashes(e=!1){return cur.app.options[`${o.VK_CONNECT_EVENTS[`${this.params.handlerName}${e?"Preload":""}`]}_hashes`]}getEventName(e=!1){return o.VK_CONNECT_EVENTS[`${this.params.handlerName}${e?"Preload":""}`]}sendNetworkError(){this.errorHandler({code:o.ERROR_CODES.UNKNOWN,error_type:o.ERROR_TYPES.CLIENT,reason:o.ERROR_REASONS.UNKNOWN_ERROR})}sendConnectionLostError(){this.errorHandler({code:o.ERROR_CODES.CONNECTION_LOST,error_type:o.ERROR_TYPES.CLIENT,reason:o.ERROR_REASONS.CONNECTION_LOST})}sendUserDeniedError(){this.errorHandler({code:o.ERROR_CODES.USER_DENIED,error_type:o.ERROR_TYPES.CLIENT,reason:o.ERROR_REASONS.USER_DENIED})}handleApiError(e){const t=e?.error,s=t?.error_msg,r=t?.error_code;if(r)switch(r){case l.API_ERROR_ACCESS:this.errorHandler({code:o.ERROR_CODES.ACCESS_DENIED,error_type:o.ERROR_TYPES.CLIENT,reason:s});break;case l.API_ERROR_PARAM:this.errorHandler({code:o.ERROR_CODES.INVALID_PARAMS,error_type:o.ERROR_TYPES.CLIENT,reason:s});break;default:this.errorHandler({code:o.ERROR_CODES.CUSTOM,error_type:o.ERROR_TYPES.CLIENT,reason:s||o.ERROR_REASONS.UNKNOWN_ERROR})}else this.errorHandler({code:o.ERROR_CODES.CONNECTION_LOST,error_type:o.ERROR_TYPES.CLIENT,reason:s||o.ERROR_REASONS.UNKNOWN_ERROR})}sendCustomError(e){this.errorHandler({code:o.ERROR_CODES.CUSTOM,reason:e||o.ERROR_REASONS.UNKNOWN_ERROR})}checkParams(e,t){for(let s=0;s<t.length;s++){const{param:r,type:i,isRequired:a,extraChecks:n}=t[s];if(!e.hasOwnProperty(r)&&a)return this.errorHandler({code:o.ERROR_CODES.MISSING_PARAM,reason:`Missing required param "${r}"`}),!1;if(e.hasOwnProperty(r)&&typeof e[r]!==i)return this.errorHandler({code:o.ERROR_CODES.INVALID_PARAMS,reason:`Param "${r}" should be ${i}`},this.callback),!1;if(e.hasOwnProperty(r)&&n&&n.length>0)for(let t=0;t<n.length;t++)if(!n[t].check(e[r]))return this.errorHandler({code:o.ERROR_CODES.INVALID_PARAMS,reason:n[t].error(r)},this.callback),!1}return!0}actionHandler(e){return this.callApi?ajax.post("apps.php",{act:"handle_vk_connect_event",hash:this.getEventHash(),event:this.getEventName(),app_id:this.app.appId,...e},{onDone:t=>{this.handleResponse(t,e,this.checkResponse)},onFail:e=>(this.errorHandler(e),!0)}):{}}checkResponse(e){1===e||0===e?this.successHandler(Boolean(e)):this.successHandler(e)}scopeStringToArray(e){return e?e.replace(/ /g,"").split(","):[]}denyUIAction(){this.errorHandler({error_type:"client_error",code:o.ERROR_CODES.USER_DENIED},null),r.default.pop(this.modal)}allowUIAction(e){this.actionHandler(e),r.default.pop(this.modal)}createDenyUIAction(e){this.params.modal.cancelAction=void 0!==e?()=>this.denyUIAction(e):this.denyUIAction}createAllowUIAction(e){this.params.modal.allowAction=void 0!==e?()=>this.allowUIAction(e):this.allowUIAction}launchUI(e){this.createDenyUIAction(),this.createAllowUIAction(),this.modal=new a.UIAction({...this.params.modal,...e}),r.default.push(this.modal)}_enhanceBtnsWithActions(){this.params.modal.buttons&&this.params.modal.buttons.forEach(((e,t)=>{"deny"===e.type?this.params.modal.buttons[t].action=this.params.modal.cancelAction:this.params.modal.buttons[t].action=this.params.modal.allowAction}))}setData(e,t,s=null){s&&(this.callback=s),e.request_id&&(this.params.request_id=e.request_id),this.params.modal||(this.params.modal={}),e.containerId&&(this.params.modal.containerId=e.containerId),e.pic&&(this.params.modal.pic=e.pic),this.app=t,this.shouldLogCallArgumentsInStat()&&(this.callArguments=e)}handleResponse(e,t,s,r){try{const r=JSON.parse(e);r.hasOwnProperty("error")?this.errorHandler(r.error):s(r,t)}catch(e){r?r(e):this.errorHandler(e)}}handler(e,t,s){if(this.setData(e,t),this.callback=s,this.isWebOnly&&(0,n.isMvk)()||this.isMobileWebOnly&&!(0,n.isMvk)())return this.errorHandler({code:o.ERROR_CODES.UNSUPPORTED_PLATFORM,error_type:o.ERROR_TYPES.CLIENT,reason:o.ERROR_REASONS.UNSUPPORTED_PLATFORM});this.useUI?this.launchUI(e):this.useUI||this.actionHandler(e)}getAppWebviewUrl(){return cur.app.frame.src}cleanCallArguments(e){const t=["request_id","handlerName","method","modal","containerId","pic"];for(const s of t)delete e[s];return e}getSerializedCallArguments(){if(!this.shouldLogCallArgumentsInStat()||!this.callArguments)return null;const e=this.cleanCallArguments({...this.callArguments});let t=JSON.stringify(e);return t.length>o.BRIDGE_STAT_CALL_ARGUMENTS_MAX_LENGTH&&(t=null),t}successHandler(e,t=void 0){if("function"==typeof t&&t(),(0,c.isObject)(e)||(e={result:e}),this.params.request_id&&e&&(e.request_id=this.params.request_id),this.callback({type:this.successDescriptor,data:e},this.params.handlerName),(0,n.isMvk)()&&cur.app.frame.focus(),this.shouldLogStat()){const e=this.getSerializedCallArguments();d.bridgeEventItemStat.logEvent(this.getAppWebviewUrl(),this.app.appId,{event_type:this.params.handlerName,is_success:!0,...e?{call_arguments:e}:{}},void 0,this.app.vkApp.sessionUuid)}}errorHandler(e,t,s){"string"==typeof e&&(e={reason:e}),this.params.request_id&&e&&(e.request_id=this.params.request_id);const r=new i.default(this.errorDescriptor,e,s),a=r.selectErrorType();if("function"==typeof t&&t(a),this.callback(a),(0,n.isMvk)()&&cur.app.frame.focus(),this.shouldLogStat()){const e=this.getSerializedCallArguments();d.bridgeEventItemStat.logEvent(this.getAppWebviewUrl(),this.app.appId,{event_type:this.params.handlerName,is_success:!1,...e?{call_arguments:e}:{}},{error_type:r.type||o.ERROR_TYPES.CLIENT,error_code:r.data.code||o.ERROR_CODES.UNKNOWN},this.app.vkApp.sessionUuid,r.getReadableMessage())}}constructor(e={}){this.params={handlerName:"handler",method:"method",...e},this.callApi=!0,this.useUI=!1,this.callback=null,this.modal=null,this.isWebOnly=!1,this.isMobileWebOnly=!1,this.callArguments=null,this.actionHandler=this.actionHandler.bind(this),this.errorHandler=this.errorHandler.bind(this),this.successHandler=this.successHandler.bind(this),this.denyUIAction=this.denyUIAction.bind(this),this.allowUIAction=this.allowUIAction.bind(this),cur.vkAppSuccessHandler=this.successHandler,cur.vkAppErrorHandler=this.errorHandler,this.checkResponse=this.checkResponse.bind(this),this.getSerializedCallArguments=this.getSerializedCallArguments.bind(this)}}},924222:(e,t,s)=>{s.d(t,{VKWebAppCustomMessage:()=>d});var r=s(90975),i=s(899737),a=s(681482),o=s(433830),n=s(205942),c=s(74073);class d extends i.Handler{actionHandler(e){if(e.action&&e.payload){if(this.app.isTextliveApp){const t=window.Textlives?.onBridgeEvent(e);return void(t&&t.then(this.successHandler).catch(this.errorHandler))}if(this.app.appId===n.NFT_APP_ID)return this.handleSetNftAvatar(e),void this.successHandler({result:!0});if(this.app.appId===n.ORD_APP_ID)return this.handleSetOrdData(e),void this.successHandler({result:!0});if(this.app.appId===n.VMOJI_CONSTRUCTOR_APP_ID)return this.handleOpenStickerPicker(e),void this.successHandler({result:!0})}this.errorHandler("unknown error")}handleSetNftAvatar({action:e,payload:t}){"VKWebAppSetNFTAvatar"===e&&((0,o.isMvk)()?window.OwnerPhotoUpload2.setNftAvatar(t):window.ajax.post("al_page.php",{act:"owner_avatar_upload",oid:t?.oid},{onDone:(e,s)=>{window.handleVKBridgeSetNftAvatar(t,e,s)}}))}handleOpenStickerPicker({action:e,payload:t}){if("vmoji_character_recereate"!==e)return;const{promo:s,page:i}=t;s&&(0,a.isNewStickerPicker)()&&!(0,o.isMvk)()&&(window.StickerPickerViewer?.showLastPicker(r.ServicePackKey.VMOJI),i?.match("/preview")||window.stManager.add(window.jsc("web/vmoji.js")).then((()=>{window.Vmoji.showAddedToStickerSnackbar()})))}handleSetOrdData({action:e,payload:t}){"ord_data"===e&&t&&(0,c.getStore)().onOrdData({is_ad:t.isAd||!1,ord_pred_id:t.predId||"",erid:t.erId||""})}constructor(e){super(e),this.params.handlerName="VKWebAppCustomMessage"}}},509115:(e,t,s)=>{s.d(t,{default:()=>r});const r=new class{push(e){e.init(),this.checkStack(),0===cur.vkMiniAppsStack.length&&e.show(),cur.vkMiniAppsStack.push(e)}clearLayerPopups(){this.checkStack(),cur.vkMiniAppsStack.length>0&&(cur.vkMiniAppsStack=cur.vkMiniAppsStack.filter((e=>!~e.appNode.id.indexOf("container_layer"))))}pop(e){const t=cur.vkMiniAppsStack.indexOf(e);~t&&(cur.vkMiniAppsStack.splice(t,1),this.checkForNext())}shift(){cur.vkMiniAppsStack=cur.vkMiniAppsStack.slice(1),this.checkForNext()}checkForNext(){cur.vkMiniAppsStack.length>0&&cur.vkMiniAppsStack[0].show()}constructor(){this.checkStack=()=>{cur.vkMiniAppsStack||(cur.vkMiniAppsStack=[])},this.checkStack(),cur.clearVKMiniAppsLayerPopups=this.clearLayerPopups.bind(this)}}},554862:(e,t,s)=>{s.d(t,{CLOSE_BUTTON_MODES:()=>p,UIAction:()=>m,renderCounter:()=>u,setCounter:()=>E});var r=s(433830),i=s(838417),a=s(365153),o=s(802979),n=s(236964),c=s(929534),d=s(657657),l=s(977053);const p={INNER:0,OUTER:1},h="deny",_="extra",u=e=>{const t=document.createElement("span");return t.classList.add("VkAppModal__buttonCounter"),t.innerText=e,t},E=(e,t)=>{const s=e.find((e=>e.hasCounter));s&&s.counterElement&&(s.counterElement.innerText=t)};class m{addScroll(){(0,i.addPopupScroll)(this.modal.children[0],this.modalParentLayer)}init(){this.containerNode&&this.containerNode.appendChild(this.modal),this.modalParentLayer=this.modal.closest(".layer_wrap"),!1!==this.props.withScroll&&(this.modalParentLayer?this.modalParentLayer.addEventListener("scroll",this.addScroll):window.addEventListener("scroll",this.addScroll))}show(){(0,r.isMvk)()&&document.body.classList.add("vk_app_fixed"),this.props.withoutAnimation?this.modal.classList.add("show"):setTimeout((()=>this.modal.classList.add("show")),300),this.initMvkCloseActions(),this.addScroll()}initMvkCloseActions(){(0,r.isMvk)()&&(window.DirectGames&&cur.app.isDirectGame&&window.DirectGames.onBoxOpen(this),this.props.onlyButtonHide||(this.modal.onclick=e=>{e.target===this.modal&&this.onAction(this.props.cancelAction)}))}close(){this.props.onlyButtonHide||this.onAction(this.props.cancelAction)}destroy(){!1!==this.props.withScroll&&(window.removeEventListener("scroll",this.addScroll),this.modalParentLayer&&this.modalParentLayer.removeEventListener("scroll",this.addScroll)),this._destroyed||((0,r.isMvk)()&&(document.body.classList.remove("vk_app_fixed"),window.DirectGames&&cur.app.isDirectGame&&(window.DirectGames.onBoxClose(this),cur.app.frame.focus())),this.modal.parentNode.removeChild(this.modal),this.callback&&this.callback(),this._destroyed=!0)}_disableButton(e,t=!0){e.disabled=t,e.element.disabled=t}_lockButton(e,t=!0){const s=(0,r.isMvk)()?(0,o.getIcon24Spinner)().icon:(0,n.getIcon16Spinner)().icon,i=`\n    <span class="vk_app_modal_btn__content">${e.title}</span>\n    <span class="vk_app_modal_btn__spinner">${s}</span>\n    `;e.loading=t,e.element.innerHTML=t?i:e.title,e.element.classList.toggle("vk_app_modal_btn--loading",t)}async onAction(e){await e(),this.destroy()}lockButtons(e=!0){const t={success:this._lockButton,[h]:this._disableButton,[_]:this._disableButton};this.props.buttons.forEach((s=>t[s.type](s,e)))}_setCounter(e){E(this.props.buttons,e)}_renderBtn(e){const t=document.createElement("button");if(t.setAttribute("type","button"),t.classList.add("vk_app_modal_btn"),t.classList.add(`vk_app_modal_btn--${e.type}`),t.innerText=e.title,t.addEventListener("click",(()=>e.type===_?e.action():this.onAction(e.action))),e.hasCounter){const s=u(0);t.appendChild(s),e.counterElement=s}return e.element=t,e.disabled&&this._disableButton(e),e.loading&&this._lockButton(e),t}_renderBtns(e){const t=e.querySelector(".vk_app_modal_btns"),{buttons:s}=this.props;if(t){s.forEach((e=>t.appendChild(this._renderBtn(e))));const e=s.find((e=>e.type===_));1===s.length&&t.classList.add("vk_app_modal_btns--single-btn"),e&&t.classList.add("vk_app_modal_btns--hasExtraButton")}}_renderCloseBtn(e){const t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("vk_app_modal_close_btn"),(0,r.isMvk)()||this.props.closeButtonMode!==p.OUTER?t.innerHTML=(0,d.getIcon24Cancel)().icon:(t.classList.add("vk_app_modal_close_btn--outer"),t.innerHTML=(0,c.getIcon20Cancel)().icon),t.addEventListener("click",(()=>this.onAction(this.props.cancelAction))),e.children[0].appendChild(t)}_renderCheckboxFields(e,t){const s=document.createElement("div");s.classList.add("MiniAppsCheckbox__fields");const r=document.createElement("h5");if(r.classList.add("MiniAppsCheckbox__fields-title"),r.innerHTML=e,s.appendChild(r),t){const e=document.createElement("h6");e.classList.add("MiniAppsCheckbox__fields-description"),e.innerHTML=t,s.appendChild(e)}return s}_renderCheckbox(e){const{title:t,description:s,...r}=e,i=document.createElement("label");i.classList.add("MiniAppsCheckbox");const a=document.createElement("input");a.type="checkbox",a.classList.add("MiniAppsCheckbox__checkbox"),a.addEventListener("change",(t=>e.checked=t.target.checked)),i.appendChild(a),Object.entries(r).forEach((([e,t])=>{a[e]=t}));const o=document.createElement("div");o.classList.add("MiniAppsCheckbox__fake_checkbox"),i.appendChild(o);const n=this._renderCheckboxFields(t,s);return i.appendChild(n),i}_renderCheckboxWrap(e){const t=e.querySelector(".MiniAppsModalCheckbox");t&&this.props.checkbox.map((e=>t.appendChild(this._renderCheckbox(e))))}_renderOuter(){const e=document.createElement("div");return e.classList.add("vk_app_modal_outer"),e}_enhanceBtnsWithActions(){this.props.buttons&&this.props.buttons.forEach(((e,t)=>{e.type===h?this.props.buttons[t].action=this.props.cancelAction:e.type===_?this.props.buttons[t].action=this.props.extraAction:this.props.buttons[t].action=this.props.allowAction}))}_renderScopes(e){return e.map(((e,t)=>{const s=getLang(`vkapps_scope_${e}`);return 0===t?s:s.toLowerCase()})).join(", ")}prepareScopes(e){return 0===e.length?["general"]:e}prepareExtraBtn(){const e=document.createElement("button");return e.setAttribute("type","button"),e.classList.add("vk_app_modal_btn","VkAppModal__button--extra","vk_app_modal_btn--transparent"),e.innerHTML=getLang("apps_connect_modal_messages_scopes_edit"),e.addEventListener("click",this.props.extraAction),e}getThumb(){if(this.props.svgIcon)return this.props.svgIcon;const e=this.props.picClass?this.props.picClass:"";return this.props.pic?`<img src="${this.props.pic}" class="vk_app_modal_container__pic MiniAppModalContainer__pic ${e}" alt aria-label="product">`:""}isHorizontalLayoutSupported(){return(0,r.isMvk)()&&(0,l.partConfigEnabled)("vk_bridge_modals_horizontal_layout")}renderModal(){this.props.containerClass=this.props.containerClass||"",this.props.buttonsClass=this.props.buttonsClass||"",this.props.isGradientModal&&(0,r.isMvk)()&&(this.props.containerClass+=" MiniAppsGradientModal"),this.props.isNoWrapButtons&&(0,r.isMvk)()&&(this.props.buttonsClass+=" MiniAppsNoWrapButtons");const e=this.props.scopes&&this.props.scopes.length&&this.props.extraAction;this.isHorizontalLayoutSupported()&&(this.props.containerClass+=" VkAppModal__Container--horizontalSupport",e&&(this.props.containerClass+=" VkAppModal__Container--withExtraButton"));let t=`\n    <div class="vk_app_modal_container vk_app_modal_container--flex ${this.props.containerClass||""}">\n      <div class="vk_app_modal_content">\n        ${this.getThumb()}\n        <h2 class="vk_app_modal_container__heading">${this.props.title}</h2>\n        ${this._renderSubheading()}\n        ${this._renderTextSeparator()}\n        ${this._renderText(this.props.text)}\n      `;this.props.scopes&&(t+=`\n          <p class="vk_app_modal_container__text">${getLang("apps_connect_modal_messages_scopes_text")}</p>\n          <p class="vk_app_modal_container__list">${this._renderScopes(this.prepareScopes(this.props.scopes))}.</p>`),t+=`\n          </div>\n          ${this.props.checkbox?'<div class="MiniAppsModalCheckbox"></div>':""}\n          <div class="vk_app_modal_btns ${this.props.buttonsClass}"></div>\n      </div>`,this._enhanceBtnsWithActions(),this.modal=this._renderOuter(),this.modal.innerHTML=t,this.props.showCloseBtn&&this._renderCloseBtn(this.modal),e&&this.modal.getElementsByClassName("vk_app_modal_content")[0].appendChild(this.prepareExtraBtn()),this._renderBtns(this.modal),this.props.checkbox&&this._renderCheckboxWrap(this.modal),this.props.scopes&&this._setCounter(this.props.scopes.length)}_renderText(e){if(!e)return"";return(Array.isArray(e)?e:[e]).map((e=>`<p class="vk_app_modal_container__text">${e}</p>`)).join("")}_renderSubheading(){return this.props.subheading?`<h3 class="vk_app_modal_container__subheading">${this.props.subheading}</h3>`:""}_renderTextSeparator(){return this.props.isTextSeparated?'<div class="vk_app_modal_container__text_separator"></div>':""}constructor(e,t){this.props={...e},t&&(this.callback=t),this.props.buttons=this.props.buttons||[],this.containerNode=document.getElementById(this.props.containerId),this.modal=null,this.modalParentLayer=null,this.onAction=this.onAction.bind(this),this.addScroll=(0,a.throttle)(this.addScroll.bind(this),i.THROTTLE_TIME),this.renderModal(),this._destroyed=!1}}},838417:(e,t,s)=>{s.d(t,{THROTTLE_TIME:()=>i,addPopupScroll:()=>a});var r=s(433830);const i=300,a=(e,t)=>{const s=t?t.scrollTop:window.pageYOffset,i=window.cur.app;if(i&&!(0,r.isMvk)()){const t=50*(Boolean(window.vk?.rtl)?1:-1),r=i.frame.clientHeight-360,a=Math.max(103,Math.min(s,r)+102);requestAnimationFrame((function(){e.style.transform=`translateX(${t}%) translateY(${a}px)`}))}}},470392:(e,t,s)=>{s.d(t,{default:()=>i});var r=s(205942);const i=class{_errorStrucuture(e,t){let s={type:this.method,data:{error_type:this.type,error_data:{error_code:e}}};return this.type===r.ERROR_TYPES.API?(s.data.error_data.error_msg=t,this.data.request_params&&(s.data.error_data.request_params=this.data.request_params)):s.data.error_data.error_reason=t,this.data.request_id&&(s.data.request_id=this.data.request_id),this.data.description&&(s.data.error_data.error_description=this.data.description),s}getReadableMessage(){const{error_reason:e,error_msg:t,error_description:s}=this.selectErrorType().data.error_data;return e||t||s}selectErrorType(){if(!this.data.hasOwnProperty("code"))return this.data.hasOwnProperty("error_code")?this._errorStrucuture(this.data.error_code,this.data.error_msg||r.ERROR_REASONS.UNKNOWN_ERROR):this.data.error_msg&&"operation denied by user"===this.data.error_msg.toLowerCase()?this._errorStrucuture(r.ERROR_CODES.USER_DENIED,"User denied"):this._errorStrucuture(r.ERROR_CODES.UNKNOWN,this.data.reason||this.data.error_msg||r.ERROR_REASONS.UNKNOWN_ERROR);switch(this.data.code){case r.ERROR_CODES.MISSING_PARAM:return this._errorStrucuture(r.ERROR_CODES.MISSING_PARAM,this.data.reason||"Missing required params or wrong type of param");case r.ERROR_CODES.CONNECTION_LOST:return this._errorStrucuture(r.ERROR_CODES.CONNECTION_LOST,this.data.reason||r.ERROR_REASONS.CONNECTION_LOST);case r.ERROR_CODES.USER_DENIED:return this._errorStrucuture(r.ERROR_CODES.USER_DENIED,this.data.reason||r.ERROR_REASONS.USER_DENIED);case r.ERROR_CODES.INVALID_PARAMS:return this._errorStrucuture(r.ERROR_CODES.INVALID_PARAMS,this.data.reason||r.ERROR_REASONS.INVALID_PARAMS);case r.ERROR_CODES.ACCESS_DENIED:return this._errorStrucuture(r.ERROR_CODES.ACCESS_DENIED,this.data.reason||r.ERROR_REASONS.ACCESS_DENIED);case r.ERROR_CODES.CUSTOM:return this._errorStrucuture(r.ERROR_CODES.CUSTOM,this.data.reason||this.data.error_msg);case r.ERROR_CODES.REQUESTS_LIMIT_REACHED:return this._errorStrucuture(r.ERROR_CODES.REQUESTS_LIMIT_REACHED,"Requests limit reached");case r.ERROR_CODES.UNKNOWN:return this._errorStrucuture(r.ERROR_CODES.UNKNOWN,r.ERROR_REASONS.UNKNOWN_ERROR);default:return this._errorStrucuture(this.data.code?this.data.code:r.ERROR_CODES.UNKNOWN,this.data.reason||this.data.error_msg||r.ERROR_REASONS.UNKNOWN_ERROR)}}constructor(e,t,s=r.ERROR_TYPES.CLIENT){this.data=t||{},this.method=e,this.type=s}}},653555:(e,t,s)=>{s.d(t,{destroyOpenedApp:()=>o,filterPostMessageOrigin:()=>c,getHostName:()=>a,isAllowedPostMessageOriginHost:()=>d,isVKPayApp:()=>n,objectToQuerystring:()=>i});var r=s(205942);const i=(e,t="?")=>Object.keys(e).reduce(((s,r,i)=>[s,0===i?t:"&",encodeURIComponent(r),"=",encodeURIComponent(e[r])].join("")),""),a=e=>{const t=e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);return null!=t&&t.length>2&&"string"==typeof t[2]&&t[2].length>0?t[2].toLowerCase():null},o=e=>{if(cur.vkAppQueue){const t=Object.keys(cur.vkAppQueue).filter((t=>~t.indexOf(e)));if(t.length>0){const e=t[0];cur.vkAppQueue[e].destroyView(),delete cur.vkAppQueue[e]}}},n=e=>r.VKPAY_APPS.includes(e);function c(e,t){const s=a(t),r=e.vkApp?e.vk_app_url:e.src,i=a(r);if(s!==i&&!d(e,s))throw Error(`Insecure method call from ${s}. Call must be from ${i}`);return!0}function d(e,t){if(!e.allowed_origin_regexp)return!1;return new RegExp(e.allowed_origin_regexp).test(t)}},365153:(e,t,s)=>{function r(e,t){let s,r,i=!1;return function a(){if(i)return s=arguments,void(r=this);e.apply(this,arguments),i=!0,setTimeout((function(){i=!1,s&&(a.apply(r,s),s=r=null)}),t)}}s.d(t,{throttle:()=>r})},436753:(e,t,s)=>{s.d(t,{Atom:()=>r});class r{set(e,{notify:t=!0}={}){t&&this.base.notify(this.key)}getKey(){return`${this.base.options.storeName}-${this.key}`}constructor({key:e,base:t}){this.key=e,this.base=t}}},227897:(e,t,s)=>{s.d(t,{Store:()=>r});class r{subscribe(e,t){const s=this.getListeners(t);return s.add(e),()=>{s.delete(e)}}notify(e,t){this.getListeners(t).forEach((t=>{t(e)}))}refresh(){try{localStorage.setItem(this.key,""),localStorage.removeItem(this.key)}catch{}}destroy(){this.listeners.clear(),this.syncListeners.clear(),r.instances.delete(this.key)}get key(){const{dbName:e,storeName:t,version:s}=this.options;return`${e}-v${s}-${t}`}getListeners(e){return e?this.syncListeners:this.listeners}constructor(e){this.listeners=new Set,this.syncListeners=new Set,this.options=e,r.instances.set(this.key,this)}}r.instances=new Map,window.addEventListener("storage",(({key:e,newValue:t})=>{if(!e||null===t)return;const s=r.instances.get(e);s?.notify()}))},289581:(e,t,s)=>{s.d(t,{SyncAtom:()=>a,SyncAtomType:()=>r});var r,i=s(436753);!function(e){e.OBJECT="object",e.STRING="string",e.NUMBER="number",e.BOOLEAN="boolean",e.STRING_NUMBER="string_number"}(r||(r={}));class a extends i.Atom{get(){const e=this.getKey();try{let t=localStorage.getItem(e);if(!t)return null;switch(this.type){case r.OBJECT:try{t=JSON.parse(t)}catch{return null}break;case r.NUMBER:t=Number(t)||0;break;case r.STRING_NUMBER:t=Number(t)||t;break;case r.BOOLEAN:t=Boolean(Number(t))}return t}catch(t){return console.log(`${e}: Ошибка чтения данных из хранилища`),console.log(t),this.cache||null}}set(e,t){const s=this.getKey();let i;switch(this.type){case r.OBJECT:i=JSON.stringify(e);break;case r.BOOLEAN:i=String(Number(e));break;default:i=String(e)}try{localStorage.setItem(s,i)}catch(t){console.log(`${s}: Не удалось записать данные в хранилище`),console.log(t),this.cache=e}super.set(e,t)}delete(){const e=this.getKey();try{delete this.cache,localStorage.removeItem(e)}catch(t){console.log(`${e}: Ошибка удаления ключа из хранилища`),console.log(t)}}getKey(){return`${this.base.key}-${this.key}`}constructor(e){super(e);const{base:t,type:s}=e;this.base=t,this.type=s}}},307614:(e,t,s)=>{s.d(t,{createSyncStore:()=>o});var r=s(227897),i=s(289581);class a extends r.Store{createAtom(e,t){return new i.SyncAtom({key:e,type:t,base:this})}constructor(e){super(e)}}function o(e){return new a(e)}},308959:(e,t,s)=>{s.d(t,{PackContext:()=>d});var r=s(570912),i=s(615816),a=(0,i._)("_options"),o=(0,i._)("_pack"),n=(0,i._)("_product"),c=(0,i._)("_stockItem");class d{get rawData(){return(0,r._)(this,o)[o]||(0,r._)(this,c)[c]||(0,r._)(this,n)[n]}get isPack(){return Boolean((0,r._)(this,o)[o])}get isProduct(){return Boolean((0,r._)(this,n)[n])}get isStockItem(){return Boolean((0,r._)(this,c)[c])}get isStoreItem(){return this.isProduct||this.isStockItem}get stockItem(){return(0,r._)(this,c)[c]}get id(){const e=(0,r._)(this,a)[a]?.redefine?.id;if(void 0!==e)return e;const t=(0,r._)(this,n)[n]?.id;return void 0!==t?t:(0,r._)(this,o)[o]?.id}setHint(e){return(0,r._)(this,a)[a]?((0,r._)(this,a)[a].hint=e,this):this}get hintId(){return(0,r._)(this,a)[a]?.hint?.id}get hintWidth(){return(0,r._)(this,a)[a]?.hint?.width}get index(){return(0,r._)(this,a)[a]?.index}get referrer(){return(0,r._)(this,a)[a]?.referrer}get tooltip(){return(0,r._)(this,a)[a]?.tooltip}get title(){return(0,r._)(this,a)[a]?.redefine?.title||(0,r._)(this,n)[n]?.title||""}get stickers(){return(0,r._)(this,a)[a]?.redefine?.stickers||(0,r._)(this,o)[o]?.stickers||(0,r._)(this,n)[n]?.stickers}get baseId(){return(0,r._)(this,n)[n]?.base_id}get isStyle(){return void 0!==this.baseId}get hasStyles(){return Boolean(this.styleIds?.length)}get styleIds(){return(0,r._)(this,n)[n]?.style_ids}get canGift(){return Boolean((0,r._)(this,c)[c]?.can_gift)}get vmojiAvatar(){return(0,r._)(this,n)[n]?.vmoji_avatar}get isVmoji(){return Boolean(this.vmojiAvatar||(0,r._)(this,n)[n]?.is_vmoji)}get isPopup(){return(0,r._)(this,n)[n]?.is_popup}get isNew(){return(0,r._)(this,n)[n]?.is_new}get previews(){return(0,r._)(this,n)[n]?.previews}constructor({pack:e,...t}){Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,n,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),(0,r._)(this,a)[a]=t,e&&("product"in e?((0,r._)(this,c)[c]=e,(0,r._)(this,n)[n]=e.product):"id"in e&&"type"in e?(0,r._)(this,n)[n]=e:(0,r._)(this,o)[o]=e)}}},643060:(e,t,s)=>{s.d(t,{stickersEmojiKeyboard:()=>r});const r=(0,s(798116).createDomain)()},546719:(e,t,s)=>{s.d(t,{$favoriteStickers:()=>a,setFavoriteStickers:()=>i});var r=s(643060);const i=r.stickersEmojiKeyboard.createEvent(),a=r.stickersEmojiKeyboard.createStore(null).on(i,((e,t)=>t))},418098:(e,t,s)=>{s.d(t,{$hasAvatar:()=>a,setHasAvatar:()=>i});var r=s(643060);const i=r.stickersEmojiKeyboard.createEvent(),a=r.stickersEmojiKeyboard.createStore(null).on(i,((e,t)=>t))},90975:(e,t,s)=>{s.d(t,{$packs:()=>_,ServicePackKey:()=>r});var r,i,a=s(798116),o=s(229634),n=s(829010),c=s(418098),d=s(649136),l=s(702594),p=s(546719),h=s(308959);!function(e){e[e.FAVORITE=-1]="FAVORITE",e[e.RECENT=-2]="RECENT",e[e.VMOJI=-3]="VMOJI",e[e.UGC=-4]="UGC"}(r||(r={})),function(e){e.RECENT="recent",e.FAVORITE="favourite",e.KEYBOARD="keyboard"}(i||(i={}));const _=(0,a.combine)(o.$ugcInfo,n.$ugcPacks,d.$stockItems,l.$recentStickers,p.$favoriteStickers,c.$hasAvatar,((e,t,s,a,o,n)=>{const c=new Map;let d=[];const l=new Map;let p=0;if(!s||!a||!o)return{};o.length&&(c.set(r.FAVORITE,new h.PackContext({index:p,referrer:i.FAVORITE,redefine:{id:r.FAVORITE,title:"stickers_picker_favorite",stickers:o}})),d.push(r.FAVORITE),p++),a.length&&(c.set(r.RECENT,new h.PackContext({index:p,referrer:i.RECENT,redefine:{id:r.RECENT,title:"stickers_picker_recently_used",stickers:a}})),d.push(r.RECENT),p++);-1!==s?.findIndex((({product:{vmoji_avatar:e}})=>void 0!==e))||n||(c.set(r.VMOJI,new h.PackContext({index:p,referrer:i.KEYBOARD,redefine:{id:r.VMOJI,title:"stickers_picker_vmoji"}})),d.push(r.VMOJI),p++);const _=t?.[0],u=e?.can_edit,E=_?.stickers?.length,m=e?.show_keyboard_onboarding&&u;if(!e?.is_keyboard_hidden&&(E||m)){const e=new h.PackContext({pack:_,index:p,referrer:i.KEYBOARD,tooltip:{header:"stickers_picker_ugc_tooltip_title",text:"stickers_picker_ugc_tooltip_description"},redefine:{id:r.UGC,title:"stickers_picker_ugc"}});u&&e.setHint({id:"stickers:ugc_keyboard_onboarding_tooltip",width:176}),c.set(r.UGC,e),d.push(r.UGC),p++}return s.forEach((e=>{const{product:{id:t,vmoji_avatar:s}}=e;if(c.set(t,new h.PackContext({index:p,referrer:i.KEYBOARD,pack:e})),s){let e=l.get(s.id);e||(e=d.push([])-1,l.set(s.id,e));const r=d[e];Array.isArray(r)&&r.push(t)}else d.push(t);p++})),{packs:c,packsGroups:d}}))},649136:(e,t,s)=>{s.d(t,{$stockItems:()=>a,setStockItems:()=>i});var r=s(643060);const i=r.stickersEmojiKeyboard.createEvent(),a=r.stickersEmojiKeyboard.createStore(null).on(i,((e,t)=>t))},702594:(e,t,s)=>{s.d(t,{$recentStickers:()=>a,setRecentStickers:()=>i});var r=s(643060);const i=r.stickersEmojiKeyboard.createEvent(),a=r.stickersEmojiKeyboard.createStore(null).on(i,((e,t)=>t))},229634:(e,t,s)=>{s.d(t,{$ugcInfo:()=>l,reloadUGCInfo:()=>c,setUGCInfo:()=>n});var r=s(798116),i=s(779434),a=s(643060),o=s(609633);const n=a.stickersEmojiKeyboard.createEvent(),c=a.stickersEmojiKeyboard.createEvent(),d=a.stickersEmojiKeyboard.createEffect((e=>e.cache.ugcInfo.get().catch((()=>null)))),l=a.stickersEmojiKeyboard.createStore(null).on(n,((e,t)=>t)).on(d.doneData,((e,t)=>t)).on(o.submitUGCReportFx.doneData,(()=>null));(0,r.sample)({clock:c,source:i.$api,target:d})},829010:(e,t,s)=>{s.d(t,{$ugcPacks:()=>o,setUGCPacks:()=>a});var r=s(643060),i=s(609633);const a=r.stickersEmojiKeyboard.createEvent(),o=r.stickersEmojiKeyboard.createStore(null).on(a,((e,t)=>t)).on(i.submitUGCReportFx.doneData,(()=>null))},609633:(e,t,s)=>{s.d(t,{submitUGCReport:()=>o,submitUGCReportFx:()=>n});var r=s(798116),i=s(779434),a=s(643060);const o=a.stickersEmojiKeyboard.createEvent(),n=a.stickersEmojiKeyboard.createEffect((e=>{e.cache.clearUGC()}));(0,r.sample)({clock:o,source:i.$api,target:n})},536253:(e,t,s)=>{s.d(t,{$userEnv:()=>a,setUserEnv:()=>i});var r=s(643060);const i=r.stickersEmojiKeyboard.createEvent(),a=r.stickersEmojiKeyboard.createStore({}).on(i,((e,t)=>t))},226290:(e,t,s)=>{s.d(t,{VKWebAppCustomMessage:()=>r.VKWebAppCustomMessage,getStore:()=>i.getStore});var r=s(924222),i=s(74073)},74073:(e,t,s)=>{s.d(t,{getStore:()=>o});var r=s(288824),i=s(798116);function a(){return{onOrdData:(0,i.createDomain)("APPS_CONNECT/VKWebAppCustomMessage").createEvent()}}function o(){return(0,r.makeSharedState)("static/js/modules/shared/apps_connect/handlers/VKWebAppCustomMessage/store.ts",a,{version:0})()}},681482:(e,t,s)=>{s.d(t,{STICKERS_CONFDATA_KEY:()=>r,isNewStickerPicker:()=>a,isPromoVmojiCounterEnabled:()=>n,isUGCStickersEnabled:()=>o});var r,i=s(977053);function a(){return(0,i.partConfigEnabled)("new_sticker_picker")}function o(){return(0,i.partConfigEnabled)("stickers.ugc")}function n(){return(0,i.partConfigEnabled)("vmoji.promo.avatar_suggestion.promo_counter")}!function(e){e.UGC="stickers.ugc",e.PROMO_VMOJI_COUNTER="vmoji.promo.avatar_suggestion.promo_counter",e.NEW_STICKER_PICKER="new_sticker_picker"}(r||(r={}))},689855:(e,t,s)=>{s.d(t,{handleOrdMiniappOpen:()=>c});var r=s(653555),i=s(205942),a=s(471828),o=s(226290),n=s(936167);const c=(e,t,s,c)=>{const d=c?{...e,service:c}:e,l=d?(0,r.objectToQuerystring)(d,"#"):"";window.showWiki?.({w:`app${i.ORD_APP_ID}${l}`},s?.edit,s?.ev,s?.options);const p=(0,o.getStore)().onOrdData.watch((r=>{s?.isSnackbar&&(r?.is_ad&&!e?.is_ad?(0,n.showSnackbar)({text:a.getLang("global_ads_wall_post_ord_mark_as_ads_added"),timeout:3e3,type:"ok28"}):!r?.is_ad&&e?.is_ad&&(0,n.showSnackbar)({text:a.getLang("global_ads_wall_post_ord_mark_as_ads_removed"),timeout:3e3,type:"loudspeaker28"})),t(r,s?.ref),p()}))}}}]);try{stManager.done("dist/web/chunks/e78e0200.94ff5a89.js")}catch(e){}