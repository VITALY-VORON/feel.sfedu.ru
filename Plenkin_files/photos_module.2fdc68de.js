﻿(()=>{"use strict";var e,t,s,i,o,a,n={613487:(e,t,s)=>{s.d(t,{default:()=>p});var i=s(406686),o=s(15042),a=s(471828),n=s(902947),r=s(636322),d=s(93367),h=s(70689),l=s(274851);const c="friends_dropdown__list_item",u="friends_dropdown__list_item system_message",g="add_term_tag";const p=class{init(){if(!this.isInited||!this.friendsdListNode){(0,i.getIndexedFriends)()||this.fetchFriendsList(),this.isInited=!0,this._initElement(),this._initScroll()}return this.friendsdListNode}update(e=[]){this._resetScroll(),this.setTopUsers(e),this._hideDropdown()}setTopUsers(e){this.topUsers.list.forEach((e=>{this.topUsers.remove(e)})),e.forEach((e=>{this.topUsers.add(e)})),this.topUsers.list=e}_hideDropdown(){(0,h.removeClass)(this.friendsdListNode,"show-dropdown")}_getItemHtml(e,t,s,i){return`<div class="${c}" data-id="${e}" data-name="${t}">\n      <img src="${i}" alt="${t}" class="friends_dropdown__list_image">\n      <div class="friends_dropdown__list_info">\n        <div class="friends_dropdown__list_name">${t} ${e===vk.id.toString()?`(${a.getLang("photos_tags_user_you")})`:""}</div>\n        <div class="friends_dropdown__list_label">${s}</div>\n      </div>\n    </div>`}_initElement(){this.friendsdListNode=(0,h.ce)("div",{className:"friends_dropdown__list"}),this.listInput=(0,h.ce)("input",{className:"friends_dropdown__list_input",placeholder:`${(0,n.replaceEntities)(a.getLang("photos_tags_dropdown_placeholder"))}`}),this.listDropdown=(0,h.ce)("div",{className:"friends_dropdown__list_dropdown"}),this.listContent=(0,h.ce)("div",{className:"friends_dropdown__list_content"}),this.listDropdown.appendChild(this.listContent),this.friendsdListNode.appendChild(this.listInput),this.friendsdListNode.appendChild(this.listDropdown),this._setListHTML(`<div class="${u}">${a.getLang("box_loading")}</div>`),(0,d.addEvent)(this.friendsdListNode,"click",d.cancelEvent),(0,d.addEvent)(this.listDropdown,"click",(e=>{this._handleItemSelected(e.target)})),(0,d.addEvent)(this.listDropdown,"mouseover",(e=>{if(this.keyboardNavigation)return;const t=(0,h.hasClass)(e.target,c)?e.target:(0,h.gpeByClass)(c,e.target);this._setHoverItem(t)})),(0,d.addEvent)(this.listInput,"keyup keydown keypress",this._handleInputKeyEvent),(0,d.addEvent)(this.listInput,"click",(()=>{this.show()}))}_handleItemSelected(e){const t=(0,h.hasClass)(e,c)?e:(0,h.gpeByClass)(c,e),s=(0,h.domData)(t,"name"),i=(0,h.domData)(t,"id");i&&this.options.onUserSelected(i,s),(0,h.hasClass)(e,g)&&this.freeTerm&&this.options.onUserSelected(0,this.freeTerm)}_getItemEleById(e){return(0,h.domQuery1)(`[data-id="${e}"]`,this.listDropdown)}_setListHTML(e){(this.listContent.__uiScroll__?this.listContent.__uiScroll__.content:this.listContent).innerHTML=e}_setHoverItem(e,t=!1){const s=(0,h.domData)(e,"id");if(s&&s!==this.hoverItem){if(this.hoverItem){const e=this._getItemEleById(this.hoverItem);(0,h.removeClass)(e,"hover")}this.hoverItem=s,(0,h.addClass)(e,"hover"),t&&this.scroll&&this.scroll&&this.scroll.scrollIntoView(e)}}show(e){(0,h.hasClass)(this.friendsdListNode,"show-dropdown")||(this._renderFriendsList(this.lastSeachTerm,e),(0,h.addClass)(this.friendsdListNode,"show-dropdown"),this._resetScroll(),this.scroll&&this.scroll.update())}_renderFriendsList(e,t=!1){e=(0,r.trim)(e);if((0,i.getIndexedFriends)()){const s=this._doSearch(e);this._renderFriendsDropdown(e,s,t)}else this._setListHTML(`<div class="${u}">${a.getLang("box_loading")}</div>`);clearTimeout(this.requestTimeout),e.length>0&&e!==this.lastSeachTerm&&(this.requestTimeout=setTimeout((()=>{this.fetchFriendsWithQuery(e)}),300))}_initScroll(){o.browser.safari||window.stManager.add(["ui_common.css",window.jsc("web/ui_common.js")],(()=>{this.scroll=new window.uiScroll(this.listContent,{global:!0})}))}_handleInputKeyEvent(e){if("keyup"===e.type){switch(e.keyCode){case d.KEY.ENTER:this._handleEnter();break;case d.KEY.ESC:return this.options.onEscapePress(),void this._hideDropdown();default:const t=e&&e.target.value;t!==this.lastSeachTerm&&(this._renderFriendsList(t),this.lastSeachTerm=t,this.hoverItem=null)}this.options.onKeyUp(),this.show()}else switch(e.keyCode){case d.KEY.UP:case d.KEY.DOWN:this._handleArrows(e.keyCode===d.KEY.DOWN)}}_handleArrows(e=!0){let t,s;if(this.keyboardNavigation||(this.keyboardNavigation=!0,(0,d.addEvent)(this.listDropdown,"mousemove",this._handleMouseMoveOnce)),this.hoverItem)t=this._getItemEleById(this.hoverItem),s=e?(0,h.domNS)(t):(0,h.domPS)(t);else{const e=this.listContent.__uiScroll__?this.listContent.__uiScroll__.content:this.listContent;s=(0,h.domFC)(e)}s&&this._setHoverItem(s,!0)}_handleMouseMoveOnce(){this.keyboardNavigation=!1,(0,d.removeEvent)(this.listDropdown,"mousemove",this._handleMouseMoveOnce)}_handleEnter(){if(this.hoverItem){const e=this._getItemEleById(this.hoverItem);this._handleItemSelected(e)}}_doSearch(e=""){let t;const s=(0,i.getPhotoData)("tagged"),o=(0,i.getIndexedFriends)();let a,n,r;e.length>0?(a=this.topUsers.search(e),n=o.search(e),r=cur.pvServerFriendsIndex.search(e)):(a=this.topUsers.list,n=o.list,r=cur.pvServerFriendsIndex.list),t=a.concat(n,r);let d=[];return t=t.filter((([e])=>{const t=d.indexOf(e)<0&&(!s||!s[e]);return d.push(e),t})),t.length>20&&(t=t.slice(0,20)),t}_renderFriendsDropdown(e,t,s=!1){let i="";if(t.forEach((([e,t,s,o])=>{const a=`id${e}`;i+=this._getItemHtml(e,t,s,o,a)})),!i&&s){this.freeTerm=e,e=(0,n.clean)(e);const t=a.getLang("photos_tags_not_found_tag_text").replace("{tagName}",`<span class="${g}">${e}</span>`);i=`<div class="${u}">${t}</div>`,this._setListHTML(i)}else i&&(this._setListHTML(i),this.freeTerm=null,this._resetScroll());this.hoverItem=null}focus(){this.listInput.focus()}reset(){this.listInput.value="",this.lastSeachTerm="",this.hoverItem=null,this._resetScroll()}_resetScroll(){this.scroll?this.scroll.scrollTop():this.listContent.scrollTop=0}fetchFriendsList(){ajax.post("hints.php",{act:"a_json_friends",from:"photo_tags"},{onDone:e=>{(0,i.setIndexedFriends)(e,(()=>{this._renderFriendsList(this.lastSeachTerm)}))}})}fetchFriendsWithQuery(e){ajax.post("hints.php",{act:"a_json_friends",from:"photo_tags",str:e,photo:(0,i.getPhotoData)("id")},{onDone:t=>{this._handleFetchFriends(e,t)}})}_handleFetchFriends(e,t=[]){if(this.lastSeachTerm!==e)return;let s,o=0;const a=(0,i.getPhotoData)("tagged");s=a?t.filter((([e])=>!a[e])):t,s.forEach((e=>{const t=e[0];cur.pvServerFriendsIds.indexOf(t)<0&&(cur.pvServerFriendsIds.push(t),cur.pvServerFriendsIndex.add(e),o++)})),(o>0||0===s.length)&&this._renderFriendsList(e,!0)}constructor(e={}){this.options=(0,r.extend)({onUserSelected:()=>!1,onEscapePress:()=>!1,onKeyUp:()=>!1},e),cur.pvServerFriendsIndex&&cur.pvServerFriendsIds||(cur.pvServerFriendsIndex=new l.vkIndexer([],(([e,t])=>t)),cur.pvServerFriendsIds=[]),this.topUsers=new l.vkIndexer([],(([e,t])=>t)),this.isInited=!1,this.lastSeachTerm="",this.hoverItem=null,this.keyboardNavigation=!1,this.freeTerm=null,this._handleInputKeyEvent=this._handleInputKeyEvent.bind(this),this._handleMouseMoveOnce=this._handleMouseMoveOnce.bind(this)}}},697722:(e,t,s)=>{s.d(t,{default:()=>_});var i=s(70689),o=s(636322),a=s(93367),n=s(159663),r=s(471828),d=s(479452),h=s(813816),l=s(406686),c=s(977053),u=s(448907);const g="area_hover",p="visible_all";const _=class{_init(){const e=(0,c.partConfigEnabled)("photo_recognition_web");this.photoTooltip=new d.default(window.layer,{onMouseLeave:this._removeActiveAreaAfterTimeout,onUserSelected:this._userSelectedCallback,onDeleteClicked:this.deleteTag,onEscapePressed:this._removeActiveAreaAfterTimeout,onSuggestionDeclined:this._handleSuggestionDeclined,hideAfterDecline:e}),this.photoView=window.Photoview,this.areasContainer=(0,i.ce)("div",{className:"photo_tags_suggested_areas_list"}),this.containerNode.innerHTML="",this.containerNode.appendChild(this.areasContainer),(0,a.addEvent)(this.imageNode,"mousemove",this._handleImageMouseMove),(0,a.addEvent)(this.imageNode,"mouseleave",this._removeActiveAreaAfterTimeout),(0,a.addEvent)(this.imageNode,"mouseenter",this.showAllSuggestedAreas.bind(this)),(0,a.addEvent)(this.areasContainer,"mouseleave",this._removeActiveAreaAfterTimeout),(0,a.addEvent)(this.areasContainer,"click",this._handleAreaClick),this.renderTagAreas()}_handleImageMouseMove(e){if(this.areasHidden)return;const t=(0,i.getXY)(e.target),s=Math.round(100*(e.pageX-t[0])/e.target.offsetWidth),o=Math.round(100*(e.pageY-t[1])/e.target.offsetHeight);clearTimeout(this.areasTimeOut),this.areasTimeOut=setTimeout((()=>{this.photoTooltip.isActive||this.activeAreaId||this.hideAllSuggestedAreas()}),700),this.showAllSuggestedAreas();for(let e in this.areas)if(this.areas.hasOwnProperty(e)){const t=this.areas[e],{x:i,y:a,x2:n,y2:r}=t;if(s>parseInt(i)&&s<parseInt(n)&&o>parseInt(a)&&o<parseInt(r)){if(e===this.activeAreaId)return void(this.tagAreaFound=!0);if(this.tagAreaFound=this.showTagArea(e),this.tagAreaFound)return}}this.tagAreaFound=!1,this._removeActiveAreaAfterTimeout()}_handleAreaClick(e){(0,a.cancelEvent)(e),this.photoTooltip.showAndFocusFriendsList(e)}showTagArea(e){const t=this.areas[e];return!(!t||t.isDeleted)&&(null!==this.activeAreaId&&this.areas[this.activeAreaId]&&(0,i.removeClass)(this.areas[this.activeAreaId].ele,"active"),this.activeAreaId=e,(0,i.addClass)(this.areas[e].ele,"active"),this.showTooltip(e),this.showAllSuggestedAreas(),!0)}hideTagArea(){clearTimeout(this.waitTimeout),null!==this.activeAreaId&&this.areas[this.activeAreaId]&&(0,i.removeClass)(this.areas[this.activeAreaId].ele,"active"),this.activeAreaId=null,this.photoTooltip.hide(),this.hideAllSuggestedAreas()}_removeActiveAreaAfterTimeout(e=500){this.activeAreaId&&!this.waitToRemove&&(this.waitToRemove=!0,clearTimeout(this.waitTimeout),this.waitTimeout=setTimeout((()=>{!this.photoTooltip.isActive&&!this.tagAreaFound&&!this.photoTooltip.interaction&&this.hideTagArea(),this.waitToRemove=!1}),e))}showTooltip(e){if(this.tooltipsPaused)return;const t=this.areas[e].ele,s=this._getTooltipOptions(e);if(t){const{top:e,right:o,bottom:a,left:n}=(0,i.getXYRect)(t,!0);this.photoTooltip.show({top:e,right:o,bottom:a,left:n},s)}}showAllSuggestedAreas(){(0,i.addClass)(this.areasContainer,p),(0,i.removeClass)(this.areasContainer,g),this.activeAreaId&&(0,i.addClass)(this.areasContainer,g)}hideAllSuggestedAreas(){(0,i.removeClass)(this.areasContainer,p)}pauseTooltips(){this.hideTagArea(),this.tooltipsPaused=!0}resumeTooltips(){this.tooltipsPaused=!1}_createTagElement(e,t,s,o){const a=cur.pvPhWidth,n=cur.pvPhHeight/a,r=s-e,d=o-t,h=(0,i.ce)("div",{className:"photo_tags_suggested_area"},{left:`${e}%`,marginTop:n*t+"%",width:`${r}%`}),l=(0,i.ce)("div",{},{paddingBottom:100*n*(d/r)+"%"});return h.appendChild(l),h}renderTagAreas(){this.areas={},this.areasContainer.innerHTML="";const e=(0,l.getPhotoData)("tags");let t=(0,l.getPhotoData)("suggested_tags");!(0,c.partConfigEnabled)("photo_recognition_web")&&cur.postTo&&cur.postTo<0&&(t=[]);for(let t in e)if("0"!==t&&e.hasOwnProperty(t)){const[s,i,o,a,n,r,d]=e[t],h=this._createTagElement(s,i,o,a);this.areas[t]={ele:h,x:s,y:i,x2:o,y2:a,userName:n,userHref:r,canDeleteTag:Boolean(d),confirmedTag:!1},this.areasContainer.appendChild(h)}for(let e in t)if(e&&t.hasOwnProperty(e)){const[s,i,o,a,n,r,d]=t[e],h=this._createTagElement(s,i,o,a);let l;n&&(l=`/id${n}`),this.areas[e]={ele:h,x:s,y:i,x2:o,y2:a,userHref:l,suggestedUserId:n,suggestedUserName:r,usersList:d,confirmedTag:!1},this.areasContainer.appendChild(h)}}_userSelectedCallback(e,t,s=!1){const i=(0,l.getPhotoData)("tags"),a=(0,l.getPhotoData)("suggested_tags"),n=(0,c.partConfigEnabled)("photo_recognition_web"),r=this.activeAreaId,d=this.areas[r],{x:h,y:u,x2:g,y2:p}=d,_=`/id${e}`,v=cur.pvAskForAutoTag&&s,m=(0,o.clean)(t),f={suggestedUserId:!1,suggestedUserName:!1,usersList:[],userId:e,userName:m,userHref:_,canDeleteTag:!0},w=this.activeAreaId,b=()=>{this.activeAreaId=w,this.areas[w]=(0,o.extend)(d,f),this.photoTooltip.updateState(f),this.showTagArea(w),this._removeActiveAreaAfterTimeout(1e3),v&&(cur.pvAskForAutoTag=!1,this.showSettingsBox())};n?this.confirmSuggestedTags([r],(()=>{this.activeAreaId=w,this.photoTooltip.updateState(f),this.showTagArea(w),this._removeActiveAreaAfterTimeout(1e3)})):(i[r]=[h,u,g,p,m,_,!0],delete a[r],this._confirmSuggestedTag(r,e,t,n,b))}showSettingsBox(){(0,n.showBox)("/al_photos.php",{act:"show_autotag_settings"},{params:{grey:!0,width:450,bodyStyle:{padding:0},hideButtons:!0,titleTransparent:!0},onDone:(e,t)=>{const s=e.bodyNode,i=s=>{e.hide(),window.ajax.post("/al_settings.php",{act:"a_change_autotag_friends",hash:t.hash,autotag_friends:s?1:0})};s.querySelector(".AutotagSettingsBox__yesButton").addEventListener("click",(()=>i(!0))),s.querySelector(".AutotagSettingsBox__noButton").addEventListener("click",(()=>i(!1)))}})}confirmAlert(e=!1){let t=cur.pvOneSuggestHintId,s=cur.pvOneSuggestHintHash;e?(t=cur.pvSomeSuggestsHintId,s=cur.pvSomeSuggestsHintHash,cur.pvNeedShowAlertForSomeSuggests=!1):cur.pvNeedShowAlertForOneSuggest=!1,window.ajax.post("al_index.php",{act:"help_hints_hide",hint_id:t,hash:s},{onDone:()=>{},onFail:()=>(console.error("something wrong with help hint"),!0)})}deleteTag(e){e||(e=this.activeAreaId,this.photoView.deleteTag(e)),this.hideTagArea();let t=this.areas[e];e&&t&&(t=(0,o.extend)(t,{isDeleted:!0}),(0,i.addClass)(t.ele,"deleted"))}_getTooltipOptions(e){const t=this.areas[e];let{suggestedUserId:s,suggestedUserName:i,userName:o,userHref:a,usersList:n,canDeleteTag:r}=t;return{suggestedUserId:s,userName:o,userHref:a,suggestedUserName:i,usersList:n,canDeleteTag:r}}_handleSuggestionDeclined(){const e=this.activeAreaId,t=this.areas[e];if(!t)return;const s=(0,l.getPhotoData)("suggested_tags"),i=(0,c.partConfigEnabled)("photo_recognition_web");this.areas[e]=(0,o.extend)(t,{suggestedUserId:!1,suggestedUserName:!1,userHref:null}),s&&s[e]&&(s[e][4]=0),i?this.declineSuggestedTags([e]):(this.showTagArea(e),this._declineSuggestedTag(e))}declineSuggestedTags(e,t,s){const o=(0,l.getPhotoData)("id"),a=(0,l.getPhotoData)("hash"),n=cur.pvListId,d=cur.pvIndex,c=cur.pvData[n][d],u=(0,l.getPhotoData)("tags"),g=e.map((e=>`${o}_${e}`)).join(",");ajax.post("al_photos.php",{act:"decline_suggested_tags",tag_raw_ids:g,hash:a,extended:1},{onDone:(s,a,l)=>{this.decrementLeftMenuCounterIfNeeded(e),this.updatePhotoViewSuggestedTags(s,a,c),this.dispatchEvent(h.TagEventTypes.DECLINE_SUGGESTED_TAGS,{tagIds:e.map(Number),photoRawId:o}),n===cur.pvListId&&d===cur.pvIndex&&(!c.taginfo&&c.actions.tag&&u[0]<cur.pvMaxTags?(0,i.show)(cur.pvTagLink):(0,i.hide)(cur.pvTagLink),s||a||this.photoView.toggleTopInfoPanel(r.getLang("photos_tag_deleted"),l)),t&&t()},onFail:e=>(e||(e=r.getLang("global_unknown_error")),s&&s(),this.handleTagRequestFail(e))})}confirmSuggestedTags(e,t,s){const o=cur.pvListId,a=cur.pvIndex,d=cur.pvData[o][a],c=(0,l.getPhotoData)("id"),u=(0,l.getPhotoData)("hash"),g=(0,l.getPhotoData)("suggested_tags"),p=e.length>1,_=e[0],v=g[_][4],m=()=>{const n=e.map((e=>`${c}_${e}`)).join(",");ajax.post("al_photos.php",{act:"confirm_suggested_tags",tag_raw_ids:n,hash:u,extended:1},{onDone:(s,n,r,l,u)=>{this.decrementLeftMenuCounterIfNeeded(e),this.updatePhotoViewTags(s,n,r,d),this.updatePhotoViewSuggestedTags(l,u,d),this.dispatchEvent(h.TagEventTypes.CONFIRM_SUGGESTED_TAGS,{tagIds:e.map(Number),photoRawId:c}),o===cur.pvListId&&a===cur.pvIndex&&(!d.taginfo&&d.actions.tag&&s[0]<cur.pvMaxTags?(0,i.show)(cur.pvTagLink):(0,i.hide)(cur.pvTagLink)),t&&t()},onFail:e=>(e||(e=r.getLang("global_unknown_error")),s&&s(),this.handleTagRequestFail(e))})};if(cur.pvNeedShowAlertForOneSuggest&&!p&&v!==window.vk.id||cur.pvNeedShowAlertForSomeSuggests&&p){let t="",i="",o="";if(p){const s=e.reduce(((e,t)=>{const s=g[t],i=s&&s[4];return i&&i!==window.vk.id&&(e[i]=!0),e}),{}),a=Object.keys(s).length;i=r.getLang("photo_recognition_some_tag_alert",a),t=r.getLang("photo_recognition_some_friends_alert_text",a),o=r.getLang("photo_recognition_some_friends_submit_btn")}else{const e=g[_][5],s=g[_][7];i=r.getLang("photo_recognition_one_tag_alert"),t=(0,r.langSex)(s,r.getLang("photo_recognition_one_tag_alert_text","raw")).replace("{name}",e),o=r.getLang("photo_recognition_one_friend_submit_btn")}const a=(0,n.showFastBox)(i,t,o,(()=>{a.hide(),m(),this.confirmAlert(p)}),r.getLang("global_cancel"),(()=>{a.hide(),s&&s()}))}else m()}decrementLeftMenuCounterIfNeeded(e){const t=(0,l.getPhotoData)("suggested_tags");e.forEach((e=>{const s=t[e],i=s&&s[4];i&&i===window.vk.id&&(0,u.decrementLeftMenuPhotoCounter)()}))}_confirmSuggestedTag(e,t,s,i,o){const a=(0,l.getPhotoData)("id"),n=(0,l.getPhotoData)("hash");ajax.post("al_photos.php",{act:"confirm_suggested_tag",tag:e,tagged_id:t,name:s,photo:a,hash:n},{onDone:(e,t,s)=>{this.updatePhotoViewTags(e,t,s),o()},onFail:this.handleTagRequestFail})}_declineSuggestedTag(e){const t=(0,l.getPhotoData)("id"),s=(0,l.getPhotoData)("hash");ajax.post("al_photos.php",{act:"decline_suggested_tag",tag:e,photo:t,hash:s},{onFail:this.handleTagRequestFail})}dispatchEvent(e,t){this.areasContainer.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0}))}handleTagRequestFail(e){const t=r.getLang("global_error");return setTimeout((0,n.showFastBox)(t,e).hide,3e3),!0}unMount(){(0,a.removeEvent)(this.imageNode,"mousemove",this._handleImageMouseMove),(0,a.removeEvent)(this.areasContainer,"click",this._handleAreaClick),this.containerNode.innerHTML=""}hideAreas(){this.areasHidden=!0,(0,i.hide)(this.areasContainer),this.photoTooltip.hide()}showAreas(){this.areasHidden=!1,(0,i.show)(this.areasContainer),(0,a.removeEvent)(this.imageNode,"mousemove",this._handleImageMouseMove),(0,a.addEvent)(this.imageNode,"mousemove",this._handleImageMouseMove)}reload(e=null){this.hideTagArea(),this.resumeTooltips(),this.renderTagAreas(),e&&(this.imageNode=e),this.activeAreaId=null,this.waitToRemove=null,this.tagAreaFound=!1,this.areasHidden=!1,this.tooltipsPaused=!1,this.showAreas()}_queueCheckUpdates(){cur.pvTagsQueueParams&&window.Notifier&&Notifier.addKey(cur.pvTagsQueueParams,this._queueReceiveUpdates)}updatePhotoViewTags(e,t,s,i=null){(i=i||(0,l.getCurrentPhoto)())&&(i.tags=e,i.tagged=t,i.tagshtml=s,this.photoView.setTags(s))}updatePhotoViewSuggestedTags(e,t,s=null){(s=s||(0,l.getCurrentPhoto)())&&(e&&Object.keys(e).length?s.suggested_tags=e:delete s.suggested_tags,t?(s.suggestedTagsInfo=t,this.photoView.showSuggestedInfoTopPanel(cur.pvCurPhoto)):(delete s.suggestedTagsInfo,this.photoView.toggleTopInfoPanel(!1)),this.reload())}_queueReceiveUpdates(e,t){t.events&&t.events.forEach((e=>{const t=e.split("<!>"),s=t[1],i=t[2],o=JSON.parse(i),a=JSON.parse(t[3]),n=JSON.parse(t[4]),r=t[5];if((0,l.getPhotoData)("id")===s)(0,l.setPhotoData)("suggested_tags",o),this.updatePhotoViewTags(a,n,r),this.renderTagAreas();else if(cur.pvData)for(let e in cur.pvData)if(cur.pvData.hasOwnProperty(e)){const t=cur.pvData[e];t.length&&t.forEach(((t,i)=>{if(t.id&&t.id===s){const t=cur.pvData[e][i];t.suggested_tags=o,t.tags=a,t.tagged=n,t.tagshtml=r}}))}}))}constructor(e,t){this.imageNode=e,this.containerNode=t,this.activeAreaId=null,this.tagAreaFound=!1,this.areasHidden=!1,this.tooltipsPaused=!1,this._handleImageMouseMove=this._handleImageMouseMove.bind(this),this._handleAreaClick=this._handleAreaClick.bind(this),this._removeActiveAreaAfterTimeout=this._removeActiveAreaAfterTimeout.bind(this),this._queueCheckUpdates=this._queueCheckUpdates.bind(this),this._queueReceiveUpdates=this._queueReceiveUpdates.bind(this),this._userSelectedCallback=this._userSelectedCallback.bind(this),this._handleSuggestionDeclined=this._handleSuggestionDeclined.bind(this),this.updatePhotoViewTags=this.updatePhotoViewTags.bind(this),this.deleteTag=this.deleteTag.bind(this),this._init(),this._queueCheckUpdates()}}},479452:(e,t,s)=>{s.d(t,{default:()=>h});var i=s(613487),o=s(93367),a=s(70689),n=s(636322),r=s(877926);const d="right_top";const h=class{renderTooltip(){this.tooltipNode=(0,a.ce)("div",{className:"photo_tooltip"},{display:"none"});const e=(0,a.ce)("div",{className:"photo_tooltip__content"});this.sugggestionNode=(0,a.ce)("div"),this.nameNode=(0,a.ce)("div",{className:"photo_tooltip__name"},{display:"none"}),this.listNode=(0,a.ce)("div",{className:"photo_tooltip__suggestion"}),this.listNode.appendChild(this.friendsDropdownNode),(0,o.addEvent)(this.nameNode,"click",this._handleConfirmedTooltipClick),e.appendChild(this.nameNode),e.appendChild(this.sugggestionNode),e.appendChild(this.listNode),this.tooltipNode.appendChild(e),this.container.appendChild(this.tooltipNode),(0,o.addEvent)(this.tooltipNode,"mouseenter",(()=>{this.isActive=!0})),(0,o.addEvent)(this.sugggestionNode,"click",(e=>{(0,o.cancelEvent)(e);switch((0,a.domData)(e.target,"button")){case"yes":this.options.onUserSelected(this.suggestedUserId,this.suggestedUserName,!0);break;case"no":this.options.onSuggestionDeclined(),(0,a.hide)(this.sugggestionNode),this.userHref=null,this.options.hideAfterDecline?this.hide():(this.showFriendsList(),this.showAndFocusFriendsList())}})),(0,o.addEvent)(this.tooltipNode,"mouseleave",(()=>{this.interaction||(this.isActive=!1,this.options.onMouseLeave())})),this.options.closeOnClick&&(0,o.addEvent)(document,"click",this._handleDocumentClick)}_handleDocumentClick(e){this.options.onMouseLeave(),this.interaction=!1,this.isActive=!1,this.hide()}_handleUserSelected(e,t){this.isActive=!1,this.options.onUserSelected(e,t)}_handleEscapePress(){this.isActive=!1,this.interaction=!1,this.friendsDropdown.reset(),this.options.onEscapePressed()}_handleStartInteraction(){this.interaction=!0}_handleConfirmedTooltipClick(e){(0,o.cancelEvent)(e),"button"===e.target.tagName.toLowerCase()?this.options.onDeleteClicked():this.userHref&&this._go(this.userHref,e)}updatePosition({top:e,right:t,bottom:s,left:i}){const o=t-i,n=(0,a.getSize)(this.tooltipNode),r=n[0]?n[0]:280;let h="bottom",l=i+Math.floor(o/2)-r/2,c=s;if((l<10||this.hasDropdown&&s>(0,a.clientHeight)()-300)&&(h=d),h===d){l=t,c=e;const s=(0,a.clientHeight)()-e;s<300&&(c=e-300+s)}(0,a.domData)(this.tooltipNode,"dir",h),(0,a.setStyle)(this.tooltipNode,{top:c,left:l})}updateSuggestionQuestion(e,t){this.sugggestionNode.innerHTML=this._getSuggestionHTML(e,t),this.suggestedUserName=t,this.suggestedUserId=e}_getSuggestionHTML(e,t){const s=e===vk.id?r.getLang("photos_tags_user_you"):t;return`<div class="suggested_tag_user">\n      ${(0,r.langTag)("<div>","</div>",r.getLang("photos_tags_suggestion_question"),"tag_span").replace("{userName}",`<div class="suggested_tag_user__name">&nbsp;${s}</div>`)}\n      <div class="suggested_tag_user__actions">\n        <button data-button="yes" class="yes">${r.getLang("box_yes")}</button>\n        <span>&middot;</span>\n        <button data-button="no">${r.getLang("box_no")}</button>\n      </div>\n    </div>`}updateState(e){const{suggestedUserName:t,suggestedUserId:s,usersList:i,userName:o,userHref:n,canDeleteTag:r}=e;this.suggestedUserName=!1,this.suggestedUserId=!1,this.userHref=n,this.hasDropdown=!1,(0,a.removeClass)(this.tooltipNode,"tagged"),o?(this.nameNode.innerHTML=`${o} ${r?"<button>Delete</button>":""}`,(0,a.toggleClass)(this.nameNode,"show_delete",r),(0,a.show)(this.nameNode),(0,a.hide)(this.listNode),(0,a.hide)(this.sugggestionNode),(0,a.addClass)(this.tooltipNode,"tagged")):s?(this.updateSuggestionQuestion(s,t),(0,a.hide)(this.nameNode),(0,a.hide)(this.listNode),(0,a.show)(this.sugggestionNode)):(this.friendsDropdown.update(i),(0,a.hide)(this.nameNode),(0,a.hide)(this.sugggestionNode),this.showFriendsList(),this.hasDropdown=!0)}showFriendsList(){(0,a.show)(this.listNode),this.options.resetDropdownOnShow&&this.resetFriendsDropdown()}resetFriendsDropdown(){this.friendsDropdown.reset()}show(e,t={},s=!1){this.isActive=!1,this.interaction=!1,this.updateState(t),this.updatePosition(e),(0,a.show)(this.tooltipNode),s&&this.friendsDropdown.show(!0),this.friendsDropdown.focus()}hide(){(0,a.hide)(this.tooltipNode)}showAndFocusFriendsList(e){this.userHref?this._go(this.userHref,e):(this.friendsDropdown.focus(),this.friendsDropdown.show())}unMount(){(0,o.removeEvent)(document,"click",this._handleDocumentClick),(0,a.re)(this.tooltipNode)}_go(e,t){t&&t.ctrlKey?window.open(e):nav.go(e,t)}constructor(e,t={}){this.options=(0,n.extend)({closeOnClick:!0,resetDropdownOnShow:!0,onUserSelected:()=>!1,onMouseLeave:()=>!1,onEscapePressed:()=>!1,onDeleteClicked:()=>!1,onSuggestionDeclined:()=>!1},t),this.container=e,this.friendsDropdown=new i.default({onUserSelected:this._handleUserSelected.bind(this),onEscapePress:this._handleEscapePress.bind(this),onKeyUp:this._handleStartInteraction.bind(this)}),this.friendsDropdownNode=this.friendsDropdown.init(),this._handleConfirmedTooltipClick=this._handleConfirmedTooltipClick.bind(this),this._handleDocumentClick=this._handleDocumentClick.bind(this),this.renderTooltip()}}},436937:(e,t,s)=>{var i=s(802130),o=s(697722),a=s(479452);window.vk?.pe?.static_manager_dynamic_imports&&window.vk?.stDomain&&(s.p=window.vk.stDomain+"/dist/"),window.PhotoTags=o.default,window.PhotoTooltip=a.default;try{window.stManager.done(window.jsc("web/photos_module.js"))}catch(e){}requestIdleCallback((()=>{try{(0,i.statlogsValueEvent)("entries_requests",1,"photos_module","web")}catch{}}),{timeout:5e3})},448907:(e,t,s)=>{s.d(t,{decrementLeftMenuPhotoCounter:()=>d});var i=s(636322),o=s(65718),a=s(740685);const n="ph",r=`l_${n}`;function d(e=1){try{const t=function(){const e=document.getElementById(r);if(!e)throw new Error("There is not photo left menu item");const t=e.querySelector(".left_count");return t?(0,i.intval)(t.textContent):0}();(0,a.handlePageCount)(n,Math.max(t-e,0))}catch(e){console.error(e),(0,o.logError)(e)}}},813816:(e,t,s)=>{var i;s.d(t,{TagEventTypes:()=>i}),function(e){e.CONFIRM_SUGGESTED_TAGS="CONFIRM_SUGGESTED_TAGS",e.DECLINE_SUGGESTED_TAGS="DECLINE_SUGGESTED_TAGS",e.DECLINE_USER_TAG="DECLINE_USER_TAG",e.CONFIRM_USER_TAG="CONFIRM_USER_TAG",e.DELETE_TAG="DELETE_TAG"}(i||(i={}))}},r={};function d(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e].call(s.exports,s,s.exports,d),s.exports}d.m=n,e=[],d.O=(t,s,i,o)=>{if(!s){var a=1/0;for(l=0;l<e.length;l++){for(var[s,i,o]=e[l],n=!0,r=0;r<s.length;r++)(!1&o||a>=o)&&Object.keys(d.O).every((e=>d.O[e](s[r])))?s.splice(r--,1):(n=!1,o<a&&(a=o));if(n){e.splice(l--,1);var h=i();void 0!==h&&(t=h)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,i,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var a={};t=t||[null,s({}),s([]),s(s)];for(var n=2&i&&e;"object"==typeof n&&!~t.indexOf(n);n=s(n))Object.getOwnPropertyNames(n).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(o,a),o},d.d=(e,t)=>{for(var s in t)d.o(t,s)&&!d.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,s)=>(d.f[s](e,t),t)),[])),d.u=e=>24817===e?"web/chunks/hls.b496ce21.js":77794===e?"web/chunks/7bdfc282.async.758ca0aa.js":95040===e?"web/chunks/cf5562e5.async.b4aed2d1.js":40530===e?"web/chunks/5ef6139d.async.f064c195.js":69488===e?"web/chunks/a7aba191.async.c36a6a36.js":67498===e?"web/chunks/19b9f4a7.async.9c26c7dc.js":24328===e?"web/chunks/c4004e28.async.ea2a65ee.js":27370===e?"web/chunks/2c9432b5.async.5b90c7cd.js":5157===e?"web/chunks/unauth_action_box.111478de.js":25394===e?"web/chunks/AudioLongtapModal.ab967a4b.js":75980===e?"web/chunks/menu_settings.7bdcde07.js":89334===e?"web/chunks/a228276f.async.a4e26c75.js":40928===e?"web/chunks/fcbd3ef2.async.877aa898.js":9914===e?"web/chunks/52fa6987.async.94be31b8.js":59727===e?"web/chunks/VideoUpload.d33511cc.js":9375===e?"web/chunks/voice_message_player.faac3006.js":28762===e?"web/chunks/speech.3083d7af.js":57468===e?"web/chunks/SilentModeForms.d5a6e099.js":28872===e?"web/chunks/feed-client-nav-skeleton.73bce91a.js":35953===e?"web/chunks/feed-client-nav-async-right-block.f4069a0d.js":85059===e?"web/chunks/059ba3af.async.1897b369.js":67724===e?"web/chunks/VideoEditorModal.eb979233.js":22854===e?"web/chunks/PublishClipToVideoModal.dae3ac0f.js":30271===e?"web/chunks/VideoUploadModal.b8d73da8.js":31286===e?"web/chunks/VideoExternalUploadModal.2c5830cb.js":969===e?"web/chunks/0dc980e6.async.f010f601.js":92846===e?"web/chunks/ClipUploadModal.8eff9d1c.js":59240===e?"web/chunks/performance-stats.b497cf49.js":378===e?"web/chunks/79f739a7.async.6dfc0f2b.js":72491===e?"web/chunks/story_blocks.dfab0b41.js":7308===e?"web/chunks/7308.e4292e75.js":1854===e?"chunks/1854.9b4b0c68.js":18254===e?"chunks/"+e+".0ac520ae.js":92398===e?"chunks/"+e+".18cb85f5.js":"web/chunks/videoplayer-interactive.c61a72cb.js",d.miniCssF=e=>({5157:1,59727:1}[e]?"web/chunks/b1037836.css":25394===e?"web/chunks/6a66a172.css":75980===e?"web/chunks/5bbee2c9.css":57468===e?"web/chunks/122e7a6e.css":67724===e?"web/chunks/3c048aa6.css":22854===e?"web/chunks/70c35bc4.css":{30271:1,31286:1}[e]?"web/chunks/f89919fd.css":92846===e?"web/chunks/83ceb5be.css":72491===e?"web/chunks/6b53e0ac.css":void 0),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},d.l=(e,t,s,o)=>{if(i[e])i[e].push(t);else{var a,n;if(void 0!==s)for(var r=document.getElementsByTagName("script"),h=0;h<r.length;h++){var l=r[h];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")=="vk:"+s){a=l;break}}a||(n=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack","vk:"+s),a.src=e),i[e]=[t];var c=(t,s)=>{a.onerror=a.onload=null,clearTimeout(u);var o=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(s))),t)return t(s)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),n&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/dist/",o=e=>new Promise(((t,s)=>{var i=d.miniCssF(e),o=d.p+i;if(((e,t)=>{for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=(n=s[i]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){var n;if((o=(n=a[i]).getAttribute("data-href"))===e||o===t)return n}})(i,o))return t();((e,t,s,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)s();else{var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=r,o.parentNode.removeChild(o),i(d)}},o.href=t,document.head.appendChild(o)})(e,o,t,s)})),a={22866:0},d.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{5157:1,22854:1,25394:1,30271:1,31286:1,57468:1,59727:1,67724:1,72491:1,75980:1,92846:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{d.b=document.baseURI||self.location.href;var e={22866:0};d.f.j=(t,s)=>{var i=d.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var o=new Promise(((s,o)=>i=e[t]=[s,o]));s.push(i[2]=o);var a=d.p+d.u(t),n=new Error;d.l(a,(s=>{if(d.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",n.name="ChunkLoadError",n.type=o,n.request=a,i[1](n)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[a,n,r]=s,h=0;if(a.some((t=>0!==e[t]))){for(i in n)d.o(n,i)&&(d.m[i]=n[i]);if(r)var l=r(d)}for(t&&t(s);h<a.length;h++)o=a[h],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(l)},s=self.webpackChunkvkweb=self.webpackChunkvkweb||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var h=d.O(void 0,[213,83737,2067,20795,57451,5038,95167],(()=>d(436937)));h=d.O(h)})();