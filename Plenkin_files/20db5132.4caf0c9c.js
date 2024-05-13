﻿"use strict";(self.webpackChunkvkweb=self.webpackChunkvkweb||[]).push([[19526],{373143:(t,e,s)=>{function i(){return{icon:'<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9H5V4h3v1H6v1h2v1H6v1h2v1Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h6A2.5 2.5 0 0 1 12 3.5v6A2.5 2.5 0 0 1 9.5 12h-6A2.5 2.5 0 0 1 1 9.5v-6ZM3.5 2h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 2 9.5v-6C2 2.67 2.67 2 3.5 2Z" fill="currentColor"/></svg>',name:"explicit_12"}}s.d(e,{getIcon12Explicit:()=>i})},611711:(t,e,s)=>{function i(){return{icon:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="add_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="add_24__add_24"><path id="add_24__Bounds" d="M0 0h24v24H0z"/><path d="M13 11h6.5a1 1 0 0 1 0 2H13v6.5a1 1 0 0 1-2 0V13H4.5a1 1 0 0 1 0-2H11V4.5a1 1 0 0 1 2 0V11Z" id="add_24__Mask" fill="currentColor"/></g></g></svg>',name:"add_24"}}s.d(e,{getIcon24Add:()=>i})},75605:(t,e,s)=>{function i(){return{icon:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="done_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="done_24__done_24"><path id="done_24__Bounds" d="M0 0h24v24H0z"/><path d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.2 4.2a1 1 0 0 0 1.4 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2Z" id="done_24__Mask" fill="currentColor"/></g></g></svg>',name:"done_24"}}s.d(e,{getIcon24Done:()=>i})},549874:(t,e,s)=>{function i(){return{icon:'<svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M28 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0zM10 9.6c0-.33.27-.6.6-.6h1.8c.33 0 .6.27.6.6v8.8a.6.6 0 0 1-.6.6h-1.8a.6.6 0 0 1-.6-.6zm5 0c0-.33.27-.6.6-.6h1.8c.33 0 .6.27.6.6v8.8a.6.6 0 0 1-.6.6h-1.8a.6.6 0 0 1-.6-.6z" fill="currentColor" fill-rule="evenodd"/></svg>',name:"pause_circle_28"}}s.d(e,{getIcon28PauseCircle:()=>i})},352792:(t,e,s)=>{function i(){return{icon:'<svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M28 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-8.98.87c.64-.39.64-1.36 0-1.74l-6.6-4c-.64-.38-1.42.1-1.42.87v8c0 .76.78 1.25 1.41.87z" fill="currentColor" fill-rule="evenodd"/></svg>',name:"play_circle_28"}}s.d(e,{getIcon28PlayCircle:()=>i})},229484:(t,e,s)=>{s.d(e,{Slider:()=>r});var i=s(198448),a=s(902947),n=s(368076);void 0===window.isTouch&&(window.isTouch=!1);class r{toggleLoading(t){(t=!!t)?(0,n.show)(this._progressEl):(0,n.hide)(this._progressEl),this._progressEl.style.opacity=t?1:0}destroy(){!isTouch&&this.options.formatHint&&(removeEvent(this._el,"mousemove",this._ev_onMouseOver),removeEvent(this._el,"mouseleave",this._ev_onMouseLeave),removeEvent(this._el,"mousedown",this._ev_onMouseDown)),this._el&&this._el.remove(),this._currHintEl&&this._currHintEl.remove()}resetWidthCache(){this._widthCache=null}_updateHint(t,e){if(!this._currHintEl){const t=document.createElement("div");t.className="slider_hint",t.id="slider_hint",this._currHintEl=t,this.options.hintClass&&this._currHintEl.classList.add(this.options.hintClass),this._el.appendChild(this._currHintEl)}let s=this._getPos(),i=Math.round((t.pageX||t.touches[0].pageX)-s[0]),a=this._width;if(i=e?Math.min(Math.max(0,i),a):i,i>=0&&i<=a){let t=i/a;this._currHintEl.innerHTML=this.options.formatHint?this.options.formatHint.call(this,t):t;let s=this._currHintEl.getBoundingClientRect();this._currHintEl.style.left=this._slideEl.offsetLeft+i-(s.right-s.left)/2+"px",this._currHintEl.style.top=this._slideEl.offsetTop-(s.bottom-s.top)-10+"px",!e&&this._toggleHint(!0)}else!e&&this._toggleHint(!1);this.options.formatHint||this._toggleHint(!1)}_toggleHint(t){this._currHintEl&&this._currHintEl.classList.toggle("visible",t)}_onMouseOver(t){r._currenSliderDrag||this._el.classList.contains("active")||this._updateHint(t)}_onMouseLeave(t){this._el.classList.contains("active")||this._toggleHint(!1)}get _width(){if(!this._widthCache){let t=this._el.getBoundingClientRect();this._widthCache=t.right-t.left}return this._widthCache}_onMouseDown(t){(0==t.button||t.touches)&&(this.blocked||(delete cur._sliderMouseUpNowEl,delete cur._sliderMouseUpTargetElement,addEvent(window,isTouch?"touchmove":"mousemove",this._ev_onMouseMove=this._onMouseMove.bind(this)),addEvent(window,isTouch?"touchend touchcancel":"mouseup",this._ev_onMouseUp=this._onMouseUp.bind(this)),this._onMouseMove(t),r._currenSliderDrag=this,this._el.classList.add("active"),cancelEvent(t)))}_onMouseUp(t){cur._sliderMouseUpNowEl=this._el,cur._sliderMouseUpTargetElement=t.target,removeEvent(window,isTouch?"touchmove":"mousemove",this._ev_onMouseMove),removeEvent(window,isTouch?"touchend touchcancel":"mouseup",this._ev_onMouseUp),this._onValueChange(),this._el.classList.remove("active"),r._currenSliderDrag=!1,this._toggleHint(!1),this.options.onEndDragging&&this.options.onEndDragging(this._currValue),cancelEvent(t)}_onMouseMove(t){let e=this._getPos(),s=e[0];s=void 0!==t.touches&&t.touches.length>0?t.touches[0].pageX:t.pageX,s=Math.max(s,e[0]),s=Math.min(s,e[0]+this._width),s-=e[0],this.setValue(s/this._width,!0,!0),this._onValueChangeDebounced?this._onValueChangeDebounced():this._onValueChange(),this._toggleHint(!0),this._updateHint(t,!0),cancelEvent(t)}_getPos(){return this._slidePos=window.getXY(this._slideEl)}_logf(t){if(!this.options.log)return t;let e=this.options.logfbase;return(Math.pow(e,t)-1)/(e-1)}_unlogf(t){if(!this.options.log)return t;let e=this.options.logfbase;return s=e,i=1+t*(e-1),Math.log(i)/Math.log(s);var s,i}setValue(t,e,s){if(this._el&&this._el.classList.contains("active")&&!s)return;let i=s?this._logf(t):t;if(this._currValue==i)return;this._currValue=i;let a=s?t:this._unlogf(t);const n=100*a+"%";this._amountEl&&(this.options.useClippedPathProgress?this._amountEl.style.clipPath=`inset(0 ${100*(1-a)}% 0 0)`:this._amountEl.style.width=n),this._handlerEl&&(this._handlerEl.style.left=n),!e&&this._onValueChange()}setBackValue(t){if(this._backEl&&this._backEl.classList.toggle("slider_back_transition",t>this._backValue),this._backValue=t,this._backEl){let e=100*t+"%";this._backEl.style.width=e}}setBlocked(t){this.blocked=t}_onValueChange(){this._lastValue=this._lastValue||0,this._lastValue!=this._currValue&&(this._lastValue=this._currValue,this.options.onChange&&this.options.onChange(this._currValue))}constructor(t,e){if(!t)throw new Error("No element was provided for Slider");t="string"==typeof t||"number"==typeof t?document.getElementById(t):t,this.options=e||{size:1},void 0===this.options.logfbase&&(this.options.logfbase=35),this.options.backValue=this.options.backValue||0;let s=100*this.options.backValue;const n=`<div class="slider_slide">\n        <div class="slider_loading_bar" style="opacity: 0; display: none;"></div>\n        ${this.options.withBackLine?'<div class="slider_back" style="width:'+s+'%"></div>':""}\n        <div class="slider_amount ${this.options.useClippedPathProgress?"slider_amount--clipped":""}"></div>\n        <div class="slider_handler"></div>\n      </div>`;this._el=document.createElement("div"),this._el.innerHTML=n,this._el.id=t.getAttribute("id")||"",this._el.className="slider";let r=this;if(t.classList){let e=t.classList;for(let t=0,s=e.length;t<s;t++)this._el.classList.add(e[t])}else this._el.className=t.className;(0,a.each)(this._el.attributes,(function(t,e){"id"==e.name&&"class"==e.name||r._el.setAttribute(e.name,e.value)})),t.parentNode.replaceChild(this._el,t),this._amountEl=this._el.querySelector(".slider_amount"),this._handlerEl=this._el.querySelector(".slider_handler"),this._slideEl=this._el.querySelector(".slider_slide"),this._backEl=this._el.querySelector(".slider_back"),this._progressEl=this._el.querySelector(".slider_loading_bar"),this.options.color&&this._amountEl&&this._handlerEl&&(this._amountEl.style.backgroundColor=this.options.color,this._handlerEl.style.backgroundColor=this.options.color),this.options.backColor&&this._slideEl&&(this._slideEl.style.backgroundColor=this.options.backColor),this._el.classList.add("slider_size_"+this.options.size),this.options.debounce&&(this._onValueChangeDebounced=(0,i.debounce)(this._onValueChange,this.options.debounce)),!isTouch&&e.formatHint&&(addEvent(this._el,"mousemove",this._ev_onMouseOver=this._onMouseOver.bind(this)),addEvent(this._el,"mouseleave",this._ev_onMouseLeave=this._onMouseLeave.bind(this))),addEvent(this._el,isTouch?"touchstart":"mousedown",this._ev_onMouseDown=this._onMouseDown.bind(this)),addEvent(this._el,"click",cancelEvent),this.setValue(this.options.value||0,!this.options.fireChangeEventOnInit,!1),this.setBackValue(this.options.backValue)}}},532865:(t,e,s)=>{s.d(e,{Player:()=>M,SECONDARY_ATTACHMENT_CLASS_MAP:()=>P});var i=s(659397),a=s(368076),n=s(847441),r=s(352792),o=s(549874),l=s(937059),d=s(955598),c=s(611711),h=s(75605),u=s(373143),_=s(949103),m=s(854942),p=s(229484),A=s(266842),y=s(481951),E=s(880745),g=s(164162),f=s(911309);const{icon:S}=(0,r.getIcon28PlayCircle)(),{icon:v}=(0,o.getIcon28PauseCircle)(),{icon:T}=(0,l.getIcon24Play)(),{icon:I}=(0,d.getIcon24Pause)(),{icon:C}=(0,c.getIcon24Add)(),{icon:b}=(0,h.getIcon24Done)(),{icon:L}=(0,u.getIcon12Explicit)();var w,P;!function(t){t.PLAYLIST="secondary-attach-playlist",t.AUDIO="secondary-attach-audio"}(w||(w={})),function(t){t.JS_SECONDARY_ATTACHMENT="js-SecondaryAttachment",t.ADD_BUTTON="SecondaryAttachment__afterItem--iconAddButton",t.ACTIONS="SecondaryAttachment__actions",t.ACTIONS_ANIMATION="SecondaryAttachment__actions--animation",t.ACTIONS_ACTIVATED="SecondaryAttachment__actions--activated",t.ACTIONS_HIDDEN="SecondaryAttachment__actions--hidden",t.AFTER_ITEM_SLIDER="SecondaryAttachment__afterItemSlider",t.AFTER_ITEM_SLIDER_HIDDEN="SecondaryAttachment__afterItemSlider--hidden",t.AFTER_ITEM_SLIDER_ANIMATION_BEFORE="SecondaryAttachment__afterItemSlider--animationBefore",t.AFTER_ITEM_SLIDER_ANIMATION_AFTER="SecondaryAttachment__afterItemSlider--animationAfter",t.MAIN_RICH="SecondaryAttachment__mainRich",t.MAIN="SecondaryAttachment__main",t.MAIN_WITH_CONTENT_AFTER="SecondaryAttachment__main--withContentAfter",t.MAIN_WITH_ACTIONS="SecondaryAttachment__main--withActions",t.MAIN_ANIMATION_AFTER="SecondaryAttachment__main--animationAfter",t.DESCRIPTION="SecondaryAttachment__description",t.DESCRIPTION_SQUEEZED="SecondaryAttachment__description--squeezed",t.CONTENT_AFTER_WITH_ACTIONS="SecondaryAttachment__contentAfter--withActions",t.CONTENT_AFTER="SecondaryAttachment__contentAfter",t.CONTENT_AFTER_HIDDEN="SecondaryAttachment__contentAfter--hidden",t.CONTENT_AFTER_ITEM="SecondaryAttachment__contentAfterItem",t.CONTENT_AFTER_ITEM_ACTIVE="SecondaryAttachment__contentAfterItem--active",t.ICON_BUTTON_PAUSE="SecondaryAttachment__iconButton--audioPause",t.ICON_BUTTON_PLAY="SecondaryAttachment__iconButton--audioPlay"}(P||(P={}));class M{static getAudioDataFromElement(t){try{return JSON.parse(t?.dataset.audio??"")}catch{return null}}static initial(){return{status:"stopped",currentTrack:null,currentNode:null,audioElementList:[],playlist:null,progress:0,duration:0,time:0}}static toTrack(t){if(!t)return null;const[e,s,i,a,n,r,o,,,,l,d,,c,h,,u,,,,_,p,A,,y]=t,[E,g,f,S,v,T,I]=c.split("/");return{kind:"Audio",id:e,owner_id:s,url:i,title:a,artist:n,duration:r,album_id:o,subtitle:u,trackCode:_,contentRestricted:p,albumPartNumber:A,accessKey:y,addHash:E,editHash:g,actionHash:f,deleteHash:S,replaceHash:v,urlHash:T,restoreHash:I,context:d,isExplicit:l===m.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_EXPLICIT_BIT,coverUrl:h}}static toAudio({id:t,owner_id:e,url:s,title:i,artist:a,duration:n,album_id:r,subtitle:o,trackCode:l,coverUrl:d,contentRestricted:c,albumPartNumber:h,accessKey:u="",addHash:_="",editHash:p="",actionHash:A="",deleteHash:y="",replaceHash:E="",urlHash:g="",restoreHash:f="",context:S="",isExplicit:v}){return[t,e,s,i,a,n,r||0,0,"",0,v?m.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_EXPLICIT_BIT:0,S,"[]",[_,p,A,y,E,g,f].join("/"),d||"",{},o||"","","",!1,l||"",c||0,h||0,!0,u||"",!1,""]}static coerceAttachAudioIntoAudioObject(t){return{id:t.id,owner_id:t.owner_id,ownerId:t.owner_id,fullId:M.getFullIdFromTrack(t),title:t.title,subTitle:"",performer:t.artist,duration:t.duration,mainArtists:"",featArtists:"",authorLink:"",lyrics:"",url:t.url,flags:0,hasLyrics:!1,context:t.context,extra:"",accessKey:t.accessKey??"",addHash:t.addHash??"",editHash:t.editHash??"",actionHash:t.actionHash??"",deleteHash:t.deleteHash??"",replaceHash:t.replaceHash??"",urlHash:t.urlHash??"",restoreHash:t.restoreHash??"",canEdit:!1,canDelete:!1,isLongPerformer:!1,canAdd:!1,coverUrl_s:"",coverUrl_p:"",coverUrl_l:"",hasTrackPage:!1,trackPageId:"",isClaimed:!1,isFromQueue:!1,isExplicit:t.isExplicit,isUMA:!1,isReplaceable:!1,ads:{content_id:""},album:!1,albumId:t.album_id,albumPart:t.albumPartNumber??0,trackCode:t.trackCode??"",restrictionStatus:t.contentRestricted,chartInfo:!1,showInfo:t.showInfo,adminUrl:t.adminUrl??"",umaQueryUrl:t.umaQueryUrl??""}}constructor(t){if(this.sliders=[],this.listeners=[],this.state=M.initial(),this.eventEmitter=new f.Emitter,this.play=(t,e=0)=>{if(!this.isListIncludeThisTrack(M.getFullIdFromTrack(t)))return;const s=M.toAudio(t),i=this.state.currentNode?.dataset.outerPostId??this.state.currentNode?.dataset.currentPostId??E.NO_POST_ID,a=this.player.getSharedFeedAudioEntryStore().getAllAudios(),n=(0,g.makeAttachAudioPlaylistParameters)(s,i),r=this.player.getCurrentAudio(),o=r&&M.getFullIdFromAudio(r),l=s&&M.getFullIdFromAudio(s);this.eventEmitter.emit(y.AttachPlayerEvents.PLAY,{isAudioChanged:o!==l||!r,attachElement:this.state.currentNode}),this.player.play(s,a,n),e>0&&this.player.seek(e)},this.togglePlayPlaylist=(t,e,s,i,a)=>{const n=this.state.currentNode?.dataset||{};"playing"===this.state.status&&"secondary-attach-playlist"===n.attachType&&n.playlistId===e?this.player.pause():(this.setState({...this.state,currentNode:t}),this.player.playPlaylist(s,e,i,a?.map(M.toAudio)))},this.pause=()=>{"playing"===this.state.status&&this.player.pause()},this.isExistElement=t=>!!this.state.audioElementList.find((e=>e===t)),this.getAttachType=()=>this.state.currentNode?this.state.currentNode.dataset.attachType:null,this.addAudioElementyToList=t=>{if(this.state.currentTrack){M.getFullIdFromTrack(this.state.currentTrack)===t.dataset.fullId&&this.updateControl(t,this.state.status)}if(this.isExistElement(t))return;this.setState({audioElementList:[...this.state.audioElementList,t]});const e=M.getAudioDataFromElement(t);if(e){const s=this.player.getSharedFeedAudioEntryStore(),i=M.toAudio(e),a=t.closest("[data-current-post-id]"),n=a?.getAttribute("data-current-post-id")??E.NO_POST_ID;s.push(i,n)}},this.findAudioElByFullId=t=>this.state.audioElementList.find((e=>e.dataset.fullId===t)),this.getElementsByPostId=t=>this.state.audioElementList.filter((e=>e.dataset.currentPostId===t)),this.getAudioByPostId=t=>this.getElementsByPostId(t).map((t=>M.toAudio(JSON.parse(t.dataset.audio)))),this.isListIncludeThisTrack=t=>Boolean(this.findAudioElByFullId(t)),this.togglePlay=(t,e)=>{this.isNewTrack(t.id)&&this.setState({...M.initial(),audioElementList:this.state.audioElementList}),"playing"===this.state.status?this.player.pause():(this.setState({...this.state,currentNode:e}),this.play(t,0))},this.isNewTrack=t=>!!t&&!!this.state.currentTrack&&t!==this.state.currentTrack.id,this.updateControl=(t,e)=>{const[s]=t.getElementsByClassName(this.player.playButtonClass),[i]=t.getElementsByClassName(this.player.avatarContainerClass),n=t.closest(`.${this.player.secondaryAttachmentClass}`),r=i||null;if(s){s.firstElementChild&&s.removeChild(s.firstElementChild),n&&this.setAriaLabel(n,n.dataset.attachType,this.state.status);const[t,i]=this.resolvePlayIcon(),r=(0,a.createElementFromHTML)("playing"===e?i:t);this.updatePlayButtonStyle(s),s.appendChild(r)}if("playing"===e){this.showAudioAttachmentControls(t);const e=(0,_.createAudioEqualizer)((0,_.makeEqualizerParams)(),r);e?.classList.add(this.player.soundBarClass),(0,_.appendEqualizerToContainer)(r,e),this.makeSecondarySliders(t),this.player.isAdsPlaying()&&this.setTitleAndDescriptionForAds(t)}else(0,_.removeEqualizer)(r);i.classList["playing"===e?"add":"remove"](m.AUDIO_PLAYER_ENUMS.AUDIO_PLAYING_CLS)},this.makeSecondarySliders=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return;const e=t?.querySelector(".SecondaryAttachment__actions");this.makeProgressSlider(e,t);const s=t?.querySelector(".SecondaryAttachment__afterItemSlider");this.makeVolumeSlider(s)},this.makeProgressSlider=(t,e)=>{if(!t)return;if(t.querySelector(".slider"))return;const s=document.createElement("div");t.append(s);const i=new p.Slider(s,{value:0,backValue:0,size:1,hintClass:"audio_player_hint",withBackLine:!0,formatHint:t=>{const e=this.player.getCurrentAudio();return(0,A.formatAudioTime)({duration:e[m.EAudioTupleIndex.DURATION],progress:t})},onEndDragging:t=>{this.player.seek(t)}}),a=this.player.subscribe(this,n.events.PROGRESS,((t,s,a)=>{const n=e?.querySelector(".SecondaryAttachment__contentAfterItem"),r=this.player.getCurrentAudio();if(n){const t=this.player.isAdsPlaying()?(0,A.formatAudioTime)({duration:a??0,progress:s}):(0,A.formatAudioTime)({duration:r[m.EAudioTupleIndex.DURATION],progress:s});n.textContent=t}i?.toggleLoading(!1),i?.setValue(s,!0,!1)})),r=this.player.subscribe(this,n.events.AD_STARTED,(()=>{i.setBlocked(!0),i.setBackValue(0),this.setTitleAndDescriptionForAds(e)})),o=this.player.subscribe(this,n.events.AD_COMPLETED,(()=>{i.setBlocked(!1),this.restoreTitleAndDescription(e)}));this.sliders.push({slider:i,sliderContainerElement:t,unsubscribe:()=>{a(),r(),o()}})},this.makeVolumeSlider=t=>{if(!t)return null;if(t.querySelector(".slider"))return;const e=document.createElement("div");t.append(e);const s=new p.Slider(e,{value:this.player.getVolume(),backValue:0,size:1,hintClass:"audio_player_hint",withBackLine:!0,log:!0,formatHint:t=>Math.round(100*t)+"%",onChange:t=>this.player.setVolume(t)}),i=this.player.subscribe(this,n.events.VOLUME,((t,e)=>{s?.setValue(e,!1,!1)}));this.sliders.push({slider:s,sliderContainerElement:t,unsubscribe:i})},this.destroySliders=()=>{this.player.features.isAudioPlayerRedesignEnabled&&(this.sliders.forEach((t=>{t.unsubscribe(),t.slider.destroy()})),this.sliders=[])},this.getAddAudioButton=()=>{if(this.player.features.isAudioPlayerRedesignEnabled)return this.state.currentNode?.querySelector(".SecondaryAttachment__afterItem--iconAddButton")},this.resolvePlayIcon=()=>this.player.features.isAudioPlayerRedesignEnabled?[T,I]:[S,v],this.showAudioAttachmentControls=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return;const e=t?.querySelector(".SecondaryAttachment__main");e?.classList.add("SecondaryAttachment__main--withContentAfter","SecondaryAttachment__main--withActions","SecondaryAttachment__main--animationAfter");const s=t?.querySelector(".SecondaryAttachment__contentAfter");s?.classList.add("SecondaryAttachment__contentAfter--withActions"),s?.classList.remove("SecondaryAttachment__contentAfter--hidden"),setTimeout((()=>{const e=t?.querySelector(".SecondaryAttachment__contentAfterItem");e?.classList.add("SecondaryAttachment__contentAfterItem--active")}),0);const i=t?.querySelector(".SecondaryAttachment__actions");i?.classList.add("SecondaryAttachment__actions--animation"),i?.classList.remove("SecondaryAttachment__actions--hidden");i?.addEventListener("animationend",(()=>{const e=t?.querySelector(".SecondaryAttachment__actions");if(e){const t=this.sliders.find((t=>t.sliderContainerElement.isSameNode(e)));t?.slider.resetWidthCache()}}),{once:!0});const a=t?.querySelector(".SecondaryAttachment__afterItemSlider");a?.classList.remove("SecondaryAttachment__afterItemSlider--hidden"),setTimeout((()=>{a?.classList.add("SecondaryAttachment__afterItemSlider--animationAfter")}),0)},this.hideAudioAttachmentControls=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return;const e=t?.querySelector(".SecondaryAttachment__main");e?.classList.remove("SecondaryAttachment__main--withContentAfter","SecondaryAttachment__main--withActions","SecondaryAttachment__main--animationAfter");const s=t?.querySelector(".SecondaryAttachment__contentAfter");s?.classList.remove("SecondaryAttachment__contentAfter--withActions"),s?.classList.add("SecondaryAttachment__contentAfter--hidden");const i=t?.querySelector(".SecondaryAttachment__contentAfterItem");i?.classList.remove("SecondaryAttachment__contentAfterItem--active");const a=t?.querySelector(".SecondaryAttachment__actions");a?.classList.remove("SecondaryAttachment__actions--animation"),a?.classList.add("SecondaryAttachment__actions--hidden");const n=t?.querySelector(".SecondaryAttachment__afterItemSlider");n?.classList.remove("SecondaryAttachment__afterItemSlider--animationAfter"),n?.classList.add("SecondaryAttachment__afterItemSlider--hidden")},this.updatePlayButtonStyle=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return!1;"playing"===this.state.status?(t.classList.add("SecondaryAttachment__iconButton--audioPause"),t.classList.remove("SecondaryAttachment__iconButton--audioPlay")):(t.classList.remove("SecondaryAttachment__iconButton--audioPause"),t.classList.add("SecondaryAttachment__iconButton--audioPlay"))},this.updateAllElements=(t=!1)=>{this.state.audioElementList.forEach((e=>{const s=this.state.currentTrack&&e.dataset.fullId===M.getFullIdFromTrack(this.state.currentTrack);!t&&s?this.updateControl(e,this.state.status):this.setDefaultElementState(e,Boolean(s))}))},this.addAudio=t=>{this.setState({...this.state,currentNode:t});const e=M.getAudioDataFromElement(t);e&&t&&this.player.addOrDeleteAudio(t,e)},this.audioIsObject=t=>!Array.isArray(t),this.setDefaultElementState=(t,e=!1)=>{if(t){const[s]=t.getElementsByClassName(this.player.playButtonClass),[i]=t.getElementsByClassName(this.player.avatarContainerClass),n=t.closest(`.${this.player.secondaryAttachmentClass}`),r=i||null;if(e||this.hideAudioAttachmentControls(t),this.player.isAdsPlaying()&&!e&&this.restoreTitleAndDescription(t),i.classList.contains(m.AUDIO_PLAYER_ENUMS.AUDIO_PLAYING_CLS)){n&&this.setAriaLabel(n,n.dataset.attachType,this.state.status),s.firstElementChild&&s.removeChild(s.firstElementChild);const[t]=this.resolvePlayIcon();this.updatePlayButtonStyle(s);const e=(0,a.createElementFromHTML)(t);s.appendChild(e)}(0,_.removeEqualizer)(r),i.classList.remove(m.AUDIO_PLAYER_ENUMS.AUDIO_PLAYING_CLS)}},this.resume=()=>{"paused"===this.state.status&&this.player.play()},this.stop=()=>{this.player.stop()},this.subscribe=t=>(this.listeners.push(t),()=>{this.listeners=this.listeners.filter((e=>e!==t))}),this.timeLeft=()=>{const t=Math.floor(this.state.duration-this.state.time);return"-"+(0,i.formatDuration)(t)},this.setState=t=>{this.state={...this.state,...t},this.listeners.forEach((t=>t(this.state)))},this.setTitleAndDescriptionForAds=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return!1;const e=t?.querySelector(".SecondaryAttachment__childrenText"),s=t?.querySelector(".SecondaryAttachmentTitleAfterIcon"),i=t?.querySelector(".SecondaryAttachment__description");if(e&&(e.textContent=this.player.langMap.lang_ads),s&&(s.innerHTML=""),i){i.textContent="";const t=document.createTextNode(" ");i.append(t)}},this.restoreTitleAndDescription=t=>{if(!this.player.features.isAudioPlayerRedesignEnabled)return!1;const e=t?.querySelector(".SecondaryAttachment__childrenText"),s=t?.querySelector(".SecondaryAttachmentTitleAfterIcon"),a=t?.querySelector(".SecondaryAttachment__description"),n=M.getAudioDataFromElement(t);e&&(e.textContent=(0,i.decodeHTMLEntities)(n?.title??"")),s&&(s.innerHTML=n?.isExplicit?L:""),a&&(a.textContent=(0,i.decodeHTMLEntities)(n?.artist??""))},this.setAriaLabel=(t,e,s)=>{if("secondary-attach-playlist"===e){const e=t.querySelector(".SecondaryAttachment__playlistButton");e?.setAttribute("aria-label","playing"===s?this.player.langMap.lang_pause:this.player.langMap.lang_play)}else"playing"===s?t.setAttribute("aria-label",`${this.player.langMap.lang_pause} ${this.state.currentTrack?.title??""} ${this.state.currentTrack?.artist??""}`):t.setAttribute("aria-label",`${this.player.langMap.lang_play} ${this.state.currentTrack?.title??""} ${this.state.currentTrack?.artist??""}`)},M.instance)return M.instance;this.player=t;const e=Symbol();this.player.subscribe(this,n.events.MUSIC_AUDIOS_ADD,((...t)=>{const e=t.find((t=>t&&t.audioElement))?.audioElement||null;if(e&&this.state.currentNode?.isSameNode(e)){const t=this.getAddAudioButton();if(t){t.innerHTML="";const e=(0,a.createElementFromHTML)(b);t.setAttribute("aria-label",this.player.langMap.lang_remove_audio),t.append(e)}}})),this.player.subscribe(this,n.events.MUSIC_AUDIOS_DELETE,((...t)=>{const e=t.find((t=>t&&t.audioElement))?.audioElement||null;if(e&&this.state.currentNode?.isSameNode(e)){const t=this.getAddAudioButton();if(t){t.innerHTML="";const e=(0,a.createElementFromHTML)(C);t.setAttribute("aria-label",this.player.langMap.lang_add_audio),t.append(e)}}})),this.player.subscribe(this,n.events.PLAY_REQUESTED,(()=>{this.setState({status:"loading"})})),this.player.subscribe(e,n.events.PLAY,(()=>{let t=this.player.getPreviousAudio(),e=this.player.getCurrentAudio();if(!e)return;const s=M.getFullIdFromAudio(e);let i=this.findAudioElByFullId(s),a=null;if(t&&(a=M.getFullIdFromAudio(t)),this.state.currentNode&&"secondary-attach-playlist"===this.state.currentNode?.dataset.attachType&&(this.state.currentNode.dataset.fullId=s,this.state.currentNode&&this.addAudioElementyToList(this.state.currentNode),i=this.state.currentNode),!i)return this.setState({...M.initial(),audioElementList:this.state.audioElementList}),this.destroySliders(),void this.updateAllElements(!0);a!==s&&this.destroySliders(),i&&this.state.currentNode&&i.dataset.fullId!==this.state.currentNode.dataset.fullId&&this.setDefaultElementState(this.state.currentNode),this.setState({status:"playing",currentTrack:M.toTrack(e)||null,currentNode:i||this.state.currentNode,progress:0,duration:e?e[5]:0,time:0}),this.updateAllElements()})),this.player.subscribe(this,n.events.PAUSE,(()=>{"stopped"!==this.state.status&&(this.setState({status:"paused",currentTrack:this.state.currentTrack,progress:this.state.progress||0,duration:this.state.duration||0,time:this.state.time||0}),this.updateAllElements(!0))})),this.player.subscribe(this,n.events.STOP,(()=>{this.setState({...M.initial(),audioElementList:this.state.audioElementList}),this.updateAllElements(!0)})),this.player.subscribe(this,n.events.ENDED,(()=>{this.setState({...M.initial(),audioElementList:this.state.audioElementList}),this.updateAllElements(!0)})),this.player.subscribe(this,n.events.PLAYLIST_CHANGED,(()=>{this.updateAllElements(!0)})),M.instance=this}}M.getFullIdFromAudio=t=>`${t[1]}_${t[0]}`,M.getFullIdFromTrack=t=>`${t.owner_id}_${t.id}`},481951:(t,e,s)=>{var i;s.d(e,{AttachPlayerEvents:()=>i}),function(t){t.PLAY="attach-player-event-play"}(i||(i={}))},164162:(t,e,s)=>{s.d(e,{getSharedFeedAudioEntryStore:()=>d,makeAttachAudioPlaylistParameters:()=>c});var i=s(288824),a=s(618418),n=s(854942),r=s(40823),o=s(425872);class l{static make(){return l.instance||(l.instance=new l,(0,a.pushNavDestroy)((()=>{l.instance.cleanUp()}))),l.instance}cleanUp(){this.audioEntries=[]}push(t,e){this.audioEntries.push({postId:e,audio:t})}getAllAudios(){return this.audioEntries.map((t=>t.audio))}constructor(){this.audioEntries=[]}}const d=(0,i.makeSharedState)("shared_feed_audio_entry_store_key",(()=>l.make()),{version:1});function c(t,e){const s=t[n.EAudioTupleIndex.CONTEXT],[i]=e.split("_");let a=window.cur.wallQuery||"",l=["own","full_own"].includes(window.cur.wallType??"")?"own":"all";const d=(0,o.numberHashCode)(l+"_"+a),c=`${s}:${e}`,h=[n.AudioPlaylistContext.FEED],u=[n.AudioPlaylistContext.WALL,n.AudioPlaylistContext.USER_WALL,n.AudioPlaylistContext.GROUP_WALL];let _=r.AudioPlayerAdapterPlaylistType.TEMP;h.includes(s)?_=r.AudioPlayerAdapterPlaylistType.FEED:u.includes(s)&&(_=r.AudioPlayerAdapterPlaylistType.WALL);const m=e?`${_}_${e}`:"";return{type:_,ownerId:parseInt(i,10),albumId:d,contextWithId:c,context:s,playlistId:m,postId:e}}},880745:(t,e,s)=>{s.d(e,{NO_POST_ID:()=>a,THUMB_TYPE_ALBUM:()=>l,THUMB_TYPE_DOC:()=>n,THUMB_TYPE_MARKET_ALBUM:()=>d,THUMB_TYPE_PHOTO:()=>r,THUMB_TYPE_VIDEO:()=>o,addThumbsInData:()=>A,deleteThumbInData:()=>p,getThumbByIndex:()=>m,getThumbsMediaItems:()=>u,isValidThumbType:()=>c,moveThumbsInData:()=>_});var i=s(977053);const a="no_post_id",n="doc",r="photo",o="video",l="album",d="market_album";function c(t){const e=[r,o];return(0,i.partConfigEnabled)("attachments_primary_mode_web_feature")||e.push(l,d),(0,i.partConfigEnabled)("web_posting_doc_thumb_secondary")||e.push(n),!!~e.indexOf(t.toString())}const h=([t,,e])=>t!==n||(0,i.partConfigEnabled)("web_posting_doc_thumb_secondary")?c(t):"editable"in e&&function(t){return t.editable&&"gif"!==t.ext}(e),u=t=>t?.filter(h)??[];const _=(t,e,s)=>{const i=u(s),a=s.map((t=>c(t[0])?void 0:t)),n=i[t];return i.splice(t,1),i.splice(e,0,n),a.map((t=>t||i.shift()))},m=(t,e)=>u(e)[t],p=(t,e)=>{const s=m(t,e);return e.filter((t=>t!==s))},A=(t,e)=>{const[s,i]=t,a=e.findIndex((([t,e])=>t===s&&e===i));return a<0?e.push(t):e[a]=t,e}},949103:(t,e,s)=>{s.d(e,{appendEqualizerToContainer:()=>r,createAudioEqualizer:()=>n,makeEqualizerParams:()=>l,removeEqualizer:()=>o});var i=s(977053);const a=()=>{const t=document.createElement("div");t.classList.add("Equalizer__column");const e=document.createElement("div");return e.classList.add("Equalizer__row"),t.appendChild(e),t},n=(t,e)=>{const s=e?.querySelector(".Equalizer");if(s)return null;const i=document.createElement("div");i.classList.add("Equalizer","Equalizer--animation"),t.showAnimation&&i.classList.add("Equalizer--animation");const n=document.createElement("div");n.classList.add("Equalizer__container"),t.showTaller&&n.classList.add("Equalizer__container--taller"),i.append(n);let r=0;for(;r!==t.columnCount;){const t=a();n.appendChild(t),r++}return i},r=(t,e)=>{e&&t&&t.append(e)},o=t=>{const e=t?.querySelector(".Equalizer");e?.remove()},l=()=>(0,i.partConfigEnabled)("feed_secondary_attachment_audio_redesign")?{columnCount:4,showTaller:!0,showAnimation:!0}:{columnCount:3,showTaller:!1,showAnimation:!1}},266842:(t,e,s)=>{s.d(e,{formatAudioTime:()=>a});var i=s(41585);function a({duration:t,progress:e,negative:s}){return s&&e<1?"-"+(0,i.formatTime)(Math.round(t-e*t)):(0,i.formatTime)(Math.round(e*t))}},40823:(t,e,s)=>{var i;s.d(e,{AudioPlayerAdapterPlaylistType:()=>i}),function(t){t.CURRENT="current",t.PLAYLIST="playlist",t.MY="my",t.ALBUM="album",t.TEMP="temp",t.RECOM="recoms",t.SEARCH="search",t.FEED="feed",t.LIVE="live",t.WALL="wall",t.RECENT="recent",t.RADIO="radio"}(i||(i={}))},425872:(t,e,s)=>{function i(t){let e=0;if(0===t.length)return e;for(let s=0,i=t.length;s<i;s++){e=(e<<5)-e+t.charCodeAt(s),e|=0}return e}s.d(e,{numberHashCode:()=>i})}}]);try{stManager.done("dist/web/chunks/20db5132.4caf0c9c.js")}catch(t){}