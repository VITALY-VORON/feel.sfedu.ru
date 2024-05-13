﻿(()=>{"use strict";var e,t,s,n,r,i,o={658508:(e,t,s)=>{s.d(t,{Icon28ChevronRightOutline:()=>n});var n=(0,s(28178).makeIcon)("Icon28ChevronRightOutline","chevron_right_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="chevron_right_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path stroke="#8BC1FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 7.5 6.5 6.5-6.5 6.5" /><path fill="currentColor" fill-rule="nonzero" d="m16.086 14-5.793 5.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414l-6.5-6.5a1 1 0 0 0-1.414 1.414z" /></g></symbol>',28,28,!1,void 0)},822050:(e,t,s)=>{s.d(t,{AUTOMATIC_BEST_FRIENDS_FROM_HINTS_COUNT:()=>r,BEST_FRIENDS_MAX_COUNT:()=>n,BEST_FRIENDS_SELECT_MODE:()=>i});const n=100,r=10;var i;!function(e){e.ADD="add",e.DELETE="delete"}(i||(i={}))},93977:(e,t,s)=>{s.d(t,{buildBadgesStackHtml:()=>g,buildHtmlAttributesString:()=>_,getBadgeImage:()=>c,getBadgesPlacementInPostActionStatusBarToUpdate:()=>h,isBadgesDisabledForOwner:()=>b,openHelpPage:()=>p,updateNewPostHTMLForBadges:()=>u});var n=s(636322),r=s(963169),i=s(2190),o=s(471828),a=s(796299),d=s(172613),l=s(977053);function c(e,t,s=!1){const{base_url:r,version:i}=e,o=i?`?${i}`:"";return!s&&(0,n.isRetina)()&&(t*=2),`${r}/${t}.png${o}`}const _=e=>Object.entries(e).reduce(((e,[t,s])=>{if(s){e+=` ${t}="${(0,n.escapeAttr)(String(s))}"`}return e}),""),h=(e,t,s)=>{const n={place:void 0},i=e.querySelector(`._like_wall${t}_${s}`);if(!i)return(0,r.badgesLogger)("Нет кнопки лайка"),n;const o=i.parentNode?.querySelector(".PostActionStatusBar");if(!o)return(0,r.badgesLogger)("Нет .PostActionStatusBar"),n;const a=o.querySelector(".BadgesStatusBar__badgesSendButton"),d=o.querySelector(".BadgesStack");return a||d?a?(n.element=a,n.place="button",n):(n.element=d,n.place="stack",n):((0,r.badgesLogger)('Нет ни стака значков, ни кнопки "Подарить"'),n)},g=({counters:e,badges:t,tqAttributes:s,withContainer:r,withLabel:a})=>{let d=0,c=0,h="";const g=i.colorScheme.isDarkScheme();if((e||[]).forEach((({type:e,badge_id:s,value:r})=>{if("total"===e)d=r;else if("badge"===e&&s&&c<3){c++;const e=t?.find((e=>e.id===s));if(e){const{image:t}=e,s=(0,n.isRetina)()?"stack28_light_2x.png":"stack28_light.png",r=(0,n.isRetina)()?"stack28_dark_2x.png":"stack28_dark.png",i=t.version?`?${t.version}`:"",o=`${t.base_url}/${s}${i}`,a=`${t.base_url}/${r}${i}`,d=_({src:g?a:o,class:"BadgesStackItem BadgesStack__item",alt:e.alt_text||"","data-src-light":o,"data-src-dark":a});h+=`<img ${d}>`}}})),d>0&&h){let e;e=(0,l.partConfigEnabled)("groups_one_time_donut_without_badges")?a?o.getLang("groups_have_donuts_total",d):o.getLang("groups_wkview_donuts_total",d):a?o.getLang("awards_have_gifted_badges_total",d):o.getLang("awards_wkview_badges_total",d);let t=`\n      <div class="BadgesStack__inner" ${s}>\n        <div class="BadgesStack__items">${h}</div>\n        <span class="BadgesStack__counter">${e}</span>\n      </div>\n    `;if(r){t=`\n        <div data-tooltip-container="true" id="badges_stack" class="BadgesStack" ${"data-exec='{\"BadgesStack/init\":[]}'"}>\n          ${t}\n        </div>\n      `}return t}return""},u=(e,t,s)=>{const n=s[2],[r,i]=n.split("_"),o=t?.wallTpl?.send_badge,l={};return(0,d.isBadgesEnabled)()&&o&&(e.push(o),Object.assign(l,{badges_object_id:i,badges_object_owner_id:r,badges_object_type:a.BadgesObjectType.WALL,badges_event_ref:a.BadgesEventRef.POST_BTN})),l},b=e=>{const t=e[16];try{if(""===t||JSON.parse(t)?.is_disabled)return!0}catch{return(0,r.badgesLogger)("Event from queue about IS_DISABLED_FOR_OWNER is not json"),!1}return!1},p=()=>{window.open(a.LINK_TO_HELP_FOR_AUTHORS,"_blank")}},963169:(e,t,s)=>{s.d(t,{badgesLogger:()=>r});var n=s(65718);const r=(e,t)=>{window.vk.dev&&console.log(t),(0,n.logError)(new Error(e),{environment:"badges"})}},106624:(e,t,s)=>{s.d(t,{BestFriendsConversationsBlock:()=>_});var n=s(785893),r=s(667294),i=s(242261),o=s(32573),a=s(441430),d=s(429020),l=s(493847),c=s(471828);class _ extends r.Component{render(){const{conversations:e,conversationsShownCount:t,showMoreConversations:s,onConversationClick:r,fromSearch:a}=this.props,_=a?e:e.slice(0,t),h=Math.min(e.length-t,5),g=c.getLang("wall_best_friends_settings_box_conversation_more",h);return(0,n.jsxs)("div",{className:"BestFriendsSettingsBox__chats",children:[(0,n.jsx)("div",{className:"BestFriendsSettingsBox__header",children:(0,n.jsx)("span",{className:"BestFriendsSettingsBox__sectionTitle",children:c.getLang("wall_best_friends_settings_box_title_chats")})}),_.map(((e,t)=>(0,n.jsx)(o.default,{aside:a?"":this.getButton(e),onClick:()=>r(e.peerId,!this.isAllFriendsAdded(e)||a,a,a),children:(0,n.jsx)(d.default,{size:"34",title:e.name,description:this.getDescription(e),photo:(0,n.jsx)(i.default,{photos:this.getAvatarImages(e)})})},t))),!a&&h>0&&(0,n.jsx)(l.ListMore,{className:"BestFriendsSettingsBox__listMore",onClick:s,children:g})]})}isAllFriendsAdded(e){return e.userIds.every((e=>this.props.bestFriends.includes(e)))}getAvatarImages(e){const t=[];return e.photoUrl?t.push(e.photoUrl):e.userIds.slice(0,4).forEach((e=>{const s=this.props.friends.find((t=>t.id===e));s&&t.push(s.photoUrl)})),t}getButton(e){let t=c.getLang("wall_best_friends_settings_box_conversation_add"),s="secondary";return this.isAllFriendsAdded(e)&&(t=c.getLang("wall_best_friends_settings_box_conversation_cancel"),s="tertiary"),(0,n.jsx)(a.Button,{mode:s,size:"s",children:t})}getDescription(e){return c.getLang("wall_best_friends_settings_box_conversation_friends_count",e.userIds.length)}}},872403:(e,t,s)=>{s.d(t,{BestFriendsFriendsBlock:()=>g});var n=s(785893),r=s(667294),i=s(13602),o=s(502423),a=s(32573),d=s(429020),l=s(533566),c=s(471828),_=s(659397),h=s(822050);class g extends r.Component{render(){const{friendsList:e,fromSearch:t,clearFriends:s}=this.props;return(0,n.jsxs)("div",{className:"BestFriendsSettingsBox__friends",children:[(0,n.jsxs)("div",{className:"BestFriendsSettingsBox__header",children:[(0,n.jsx)("span",{className:"BestFriendsSettingsBox__sectionTitle",children:c.getLang("wall_best_friends_settings_box_title_friends")}),!t&&(0,n.jsx)(l.default,{className:"BestFriendsSettingsBox__link",onClick:s,children:c.getLang("wall_best_friends_settings_box_friends_clear")})]}),(0,n.jsx)(i.default,{className:"BestFriendsSettingsBox__list",loadMore:()=>{},hasMore:!1,children:e.map((e=>this.renderItem(e,t)))})]})}renderItem(e,t=!1){const s=this.props.isSelected(e.id),r=this.props.bestFriends.length>=h.BEST_FRIENDS_MAX_COUNT&&!s,i=t||r,l=(0,_.classNames)("BestFriendsSettingsBox__item",{"BestFriendsSettingsBox__item--disabled":r});return(0,n.jsx)(a.default,{onClick:()=>this.props.select(e.id,t,t?h.BEST_FRIENDS_SELECT_MODE.ADD:"",t),aside:i?"":(0,n.jsx)(o.ListMultiSelectControl,{isSelected:s}),className:l,canBeHovered:!r,selectable:!r,children:(0,n.jsx)(d.default,{size:"34",title:e.name,photo:e.photoUrl})},e.id)}}},250589:(e,t,s)=>{s.d(t,{BestFriendsSettingsBox:()=>F});var n=s(785893),r=s(667294),i=s(106624),o=s(872403),a=s(258037),d=s(441430),l=s(60811),c=s(245728),_=s(22378),h=s(584676),g=s(240807),u=s(249580),b=s(471828),p=s(159663),f=s(274851),v=s(488844),S=s(822050),w=s(363395);class F extends r.Component{componentDidMount(){const{friendsSorted:e,bestFriends:t}=this.state;t.length||this.select(e.slice(0,S.AUTOMATIC_BEST_FRIENDS_FROM_HINTS_COUNT).map((e=>e.id)),!1,S.BEST_FRIENDS_SELECT_MODE.ADD)}renderNotFound(e){const t=e?b.getLang("wall_best_friends_settings_no_friends"):b.getLang("wall_search_nothing_found");return(0,n.jsx)(a.Placeholder,{children:t})}renderContent(e,t,s=!1){return(0,n.jsxs)("div",{className:"BestFriendsSettingsBox__inner",children:[Boolean(t.length)&&(0,n.jsx)(i.BestFriendsConversationsBlock,{conversations:t,conversationsShownCount:this.state.conversationsShownCount,showMoreConversations:this.showMoreConversations,onConversationClick:this.onConversationClick,fromSearch:s,bestFriends:this.state.bestFriends,friends:this.state.friendsSorted}),Boolean(e.length)&&(0,n.jsx)(o.BestFriendsFriendsBlock,{bestFriends:this.state.bestFriends,fromSearch:s,friendsList:e,select:this.select,isSelected:this.isSelected,clearFriends:this.clearFriends})]})}initIndexer(){const{friends:e,conversations:t}=this.props;this.indexedFriends=new f.vkIndexer(e,(e=>[e.name,e.domain].filter(Boolean).join(" "))),this.indexedConversations=new f.vkIndexer(t,(e=>e.name))}getFilteredFriendsList(){const{friends:e,bestFriends:t}=this.props;return[...t.map((t=>e.find((e=>e.id===t)))),...e.filter((e=>!t.includes(e.id)))].filter((e=>e))}getFilteredData(){let{searchQuery:e,friendsSorted:t,conversationsSorted:s}=this.state;return e&&(t=this.indexedFriends.search(e),s=this.indexedConversations.search(e)),{friendsSorted:t,conversationsSorted:s}}getActionModalButtons(){const{onClose:e}=this.props,{isSaving:t}=this.state;return[(0,n.jsx)(d.Button,{mode:"tertiary",size:"m",onClick:()=>e(),children:b.getLang("global_cancel")},"close"),(0,n.jsx)(d.Button,{mode:"primary",size:"m",onClick:this.onClickSave,loading:t,disabled:this.compareBestFriendsList(),children:b.getLang("global_save")},"publish")]}getHint(){const{bestFriends:e}=this.state;return e.length?b.getLang("wall_best_friends_settings_box_friends_count",e.length):""}compareBestFriendsList(){const{bestFriends:e}=this.props,{bestFriends:t}=this.state;return e.length===t.length&&e.every((e=>t.includes(e)))}getConversationByPeerId(e){return this.state.conversationsSorted.find((t=>t.peerId===e))}getBestFriendsFromBatch(e){let t=this.props.bestFriends.slice();return e.forEach((e=>{e.op===S.BEST_FRIENDS_SELECT_MODE.DELETE?t.splice(t.indexOf(e.user_id),1):t.push(e.user_id)})),t}render(){const{searchQuery:e}=this.state,{friendsSorted:t,conversationsSorted:s}=this.getFilteredData(),{friends:r}=this.props,i=0===r.length,o=e&&!t.length&&!s.length;return(0,n.jsxs)(l.ModalBox,{className:"BestFriendsSettingsBox",children:[(0,n.jsx)(c.ModalHeaderHero,{onClose:this.props.onClose,closeAriaLabel:b.getLang("global_close"),description:(0,n.jsx)(_.InnerHTML,{children:b.getLang("wall_best_friends_settings_box_subtitle")}),children:b.getLang("wall_best_friends_settings_box_title")}),(0,n.jsxs)("div",{className:"BestFriendsSettingsBox__body",children:[(0,n.jsx)(h.Div,{mode:"horizontal",spacing:8,children:(0,n.jsx)(g.Search,{onChange:e=>this.setState({searchQuery:e.target.value}),placeholder:b.getLang("wall_best_friends_settings_box_search_placeholder"),autoFocus:!0,value:e},"search")}),i||o?this.renderNotFound(i):this.renderContent(t,s,Boolean(e))]}),(0,n.jsx)(u.ModalFooter,{before:this.getHint(),actionButtons:this.getActionModalButtons()})]})}constructor(e){super(e),this.onClickSave=()=>{(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.saveBestFriendsList);const e=(e,t)=>{(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.updatePopupSave);const{onSave:s}=this.props;this.setState({isSaving:!0}),window.ajax.post("al_wall.php",{act:"edit_best_friends",batch:JSON.stringify(this.state.batchItems),hash:this.props.hash},{onDone:()=>{this.setState({isSaving:!1}),e?.hide(),s&&s(this.state.bestFriends.length)},onFail:t=>((0,p.showFastBox)(b.getLang("global_error"),t||b.getLang("global_unknown_error")),this.setState({isSaving:!1}),e?.hide(),!0),showProgress:()=>(0,v.lockButton)(t),hideProgress:()=>(0,v.unlockButton)(t)})};if(0===this.state.bestFriends.length)e(null,null);else{const t=`\n        <div class="BestFriendsSettingsBoxConfirm">\n          <span class="BestFriendsSettingsBoxConfirm__title">${b.getLang("wall_best_friends_settings_box_confirm_save")}</span>\n          <span class="BestFriendsSettingsBoxConfirm__text">${b.getLang("wall_best_friends_settings_box_confirm_save_text")}</span>\n        </div>\n      `,s=(0,p.showFastBox)(b.getLang("wall_best_friends_settings_box_confirm_title"),t,b.getLang("global_save"),(t=>e(s,t)),b.getLang("global_cancel"),(()=>(e=>{e.hide(),(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.updatePopupCancel)})(s)))}},this.showMoreConversations=()=>{(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.moreChats),this.setState({conversationsShownCount:this.state.conversationsShownCount+5})},this.isSelected=e=>this.state.bestFriends.includes(e),this.select=(e,t,s,n)=>{n&&(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.selectFriendFromSearch);const{batchItems:r,friendsSorted:i}=this.state,o=s===S.BEST_FRIENDS_SELECT_MODE.ADD;Array.isArray(e)||(e=[e]);let a=i.slice(),d=r.slice();e.forEach((e=>{const s=this.isSelected(e),n=this.getBestFriendsFromBatch(d).length;if(s||!(n>=S.BEST_FRIENDS_MAX_COUNT)){if(!o||!s){const t=d.findIndex((t=>t.user_id===e));-1!==t?d.splice(t,1):d.push({op:s?S.BEST_FRIENDS_SELECT_MODE.DELETE:S.BEST_FRIENDS_SELECT_MODE.ADD,user_id:e})}if(t){const t=a.findIndex((t=>t.id===e));a.unshift(...a.splice(t,1))}}})),this.setState({searchQuery:"",bestFriends:this.getBestFriendsFromBatch(d),batchItems:d,friendsSorted:a})},this.clearFriends=()=>{this.select(this.state.bestFriends),(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.clear)},this.onConversationClick=(e,t,s,n)=>{const{conversationsSorted:r}=this.state,i=this.getConversationByPeerId(e);if(!i)return;let o=r.slice(),a=this.state.conversationsShownCount;if(s){const t=o.map((e=>e.peerId)).indexOf(e);o.unshift(...o.splice(t,1)),t+1>a&&(a+=1)}t&&(n?(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.selectChatFromSearch):(0,w.sendBestFriendsAnalytic)(w.BestFriendsEventType.addFriendsFromChat)),this.setState({conversationsSorted:o,conversationsShownCount:a},(()=>{const e=t?S.BEST_FRIENDS_SELECT_MODE.ADD:S.BEST_FRIENDS_SELECT_MODE.DELETE;this.select(i.userIds,t,e)}))};const{conversations:t,bestFriends:s}=e;this.state={isSaving:!1,searchQuery:"",friendsSorted:this.getFilteredFriendsList(),conversationsSorted:t,conversationsShownCount:2,bestFriends:s,batchItems:[]},this.initIndexer()}}},728162:(e,t,s)=>{s.d(t,{bestFriendsBoxSettings:()=>_});var n=s(785893),r=s(250589),i=s(471828),o=s(159663),a=s(65718),d=s(251087),l=s(284658),c=s(780891);const _=e=>{window.ajax.post("al_wall.php",{act:"get_best_friends_box_data"},{loader:!0,onDone:(t,s,o,a)=>{(0,l.showMessageBoxModal)((l=>{const{onClose:_}=l;return(0,n.jsx)(c.AppRootProvider,{children:(0,n.jsx)(r.BestFriendsSettingsBox,{...l,friends:t,bestFriends:s,conversations:o,hash:a,onSave:t=>{((t,s)=>{e&&e(t);let n=i.getLang("wall_best_friends_settings_box_saved"),r=i.getLang("wall_best_friends_settings_box_saved_text");0===t&&(n=i.getLang("wall_best_friends_settings_box_saved_empty"),r=i.getLang("wall_best_friends_settings_box_saved_empty_text")),(0,d.showDoneBox)(`<div class="top_result_header">${n}</div>${r}`),s()})(t,_)}})})}),{width:450})},onFail:e=>((0,o.showFastBox)(i.getLang("global_error"),e||i.getLang("global_unknown_error")),(0,a.logError)(new Error("get_best_friends_box_data error"+(e?`: ${e}`:""))),!0)})}},400902:(e,t,s)=>{var n=s(802130),r=s(738240);window.vk?.pe?.static_manager_dynamic_imports&&window.vk?.stDomain&&(s.p=window.vk.stDomain+"/dist/"),window.openPostPrivacyModal=r.openPostPrivacyModal;try{window.stManager.done(window.jsc("web/post_privacy_modal.js"))}catch(e){}requestIdleCallback((()=>{try{(0,n.statlogsValueEvent)("entries_requests",1,"post_privacy_modal","web")}catch{}}),{timeout:5e3})},758626:(e,t,s)=>{s.d(t,{PRIVACY_MODAL_MODES:()=>f,PrivacyModal:()=>F});var n=s(785893),r=s(363395),i=s(728162),o=s(60811),a=s(49169),d=s(845104),l=s(22378),c=s(350164),_=s(441430),h=s(26658),g=s(701890),u=s(636322),b=s(471828),p=s(284658);const f={BEST_FRIENDS_ENTRYPOINT:"bestFriendsEntrypoint",CHOOSE_BEST_FRIENDS:"chooseBestFriends",CREATE_POST_FOR_BEST_FRIENDS:"createPostForBestFriends",CREATE_POST_FOR_FRIENDS:"createPostForFriends",OWN_POST_FOR_BEST_FRIENDS:"ownPostForBestFriends",OWN_POST_FOR_BEST_FRIENDS_EMPTY:"ownPostForBestFriendsEmpty",OWN_POST_FOR_FRIENDS:"ownPostForFriends"},v="best_friends_only",S="friends_only",w=e=>{const t=new URLSearchParams({post_privacy:e,own:1,new_post:1}).toString();return`/wall${window.vk.id}?${t}`},F=({mode:e,name:t,sex:s,onClose:F})=>{const{title:m,text:B,buttonText:E,action:y}=((e,t,s,n)=>{let o="",a="",d="",l=()=>{};const c=e=>{(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.editBestFriendsFromPopup),n(),(0,i.bestFriendsBoxSettings)((t=>{if(0===t)return;if(e)return void window.open(w(v));const s=document.getElementById("best_friends_only");if(!s)return;const n=b.getLang("wall_best_friends_settings_box_conversation_friends_count",t);s.innerHTML=(0,u.getTemplate)("visibility_access_best_friends_only_option",{html:(0,u.getTemplate)("visibility_access_best_friends_only_item",{count_text:n}),count:t}),h.default.showEditPost(),h.default.togglePostVisibilityAccess(s,g.VISIBILITY_ACCESS_OPTIONS.ONLY_BEST_FRIENDS,"",!0);const r=document.querySelector(".BestFriendsSettingsEntrypoint");r?.remove()}))};switch(e){case f.BEST_FRIENDS_ENTRYPOINT:o=b.getLang("wall_privacy_modal_best_friends_own_title"),a=b.getLang("wall_privacy_modal_best_friends_own_text"),d=b.getLang("wall_privacy_modal_choose_best_friends_button"),l=c;break;case f.CHOOSE_BEST_FRIENDS:o=(0,b.langSex)(s,b.getLang("wall_privacy_modal_best_friends_title","raw")).replace("{name}",t),a=b.getLang("wall_privacy_modal_choose_best_friends_text"),d=b.getLang("wall_privacy_modal_choose_best_friends_button"),l=()=>c(!0);break;case f.CREATE_POST_FOR_BEST_FRIENDS:o=(0,b.langSex)(s,b.getLang("wall_privacy_modal_best_friends_title","raw")).replace("{name}",t),a=b.getLang("wall_privacy_modal_best_friends_text"),d=b.getLang("wall_privacy_modal_create_post_button"),l=()=>{(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.createPostFromPopupBest),window.open(w(v)),n()};break;case f.CREATE_POST_FOR_FRIENDS:o=(0,b.langSex)(s,b.getLang("wall_privacy_modal_friends_title","raw")).replace("{name}",t),a=b.getLang("wall_privacy_modal_friends_text"),d=b.getLang("wall_privacy_modal_create_post_button"),l=()=>{(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.createPostFromPopupFriends),window.open(w(S)),n()};break;case f.OWN_POST_FOR_BEST_FRIENDS:o=b.getLang("wall_privacy_modal_own_post_for_best_friends_title"),a=b.getLang("wall_privacy_modal_own_post_for_best_friends_text"),d=b.getLang("wall_privacy_modal_create_post_more_button"),l=()=>{(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.createPostFromPopupBest),window.open(w(v)),n()};break;case f.OWN_POST_FOR_BEST_FRIENDS_EMPTY:o=b.getLang("wall_privacy_modal_own_post_for_best_friends_empty_title"),a=b.getLang("wall_privacy_modal_own_post_for_best_friends_empty_text"),d=b.getLang("wall_privacy_modal_choose_best_friends_button"),l=()=>c(!0);break;case f.OWN_POST_FOR_FRIENDS:o=b.getLang("wall_privacy_modal_own_post_for_friends_title"),a=b.getLang("wall_privacy_modal_own_post_for_friends_text"),d=b.getLang("wall_privacy_modal_create_post_more_button"),l=()=>{(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.createPostFromPopupFriends),window.open(w(S)),n()}}return{title:o,text:a,buttonText:d,action:l}})(e,t,s,F);return(0,n.jsxs)(o.ModalBox,{children:[(0,n.jsx)(p.MessageBoxDismissButton,{onClick:F}),(0,n.jsxs)(a.ModalBody,{insetLevel:1,children:[(0,n.jsx)(d.ModalTextLayout,{subheader:(0,n.jsx)(l.InnerHTML,{Component:"div",className:"PrivacyModal__text",children:B}),subheaderMode:"primary",children:m}),(0,n.jsx)(c.ButtonLayout,{children:(0,n.jsx)(_.Button,{size:"m",mode:"primary",onClick:()=>y(),children:E})})]})]})}},738240:(e,t,s)=>{s.d(t,{openPostPrivacyModal:()=>a});var n=s(785893),r=s(363395),i=s(758626),o=s(284658);const a=(e,t="",s=0)=>{const a=[i.PRIVACY_MODAL_MODES.CHOOSE_BEST_FRIENDS,i.PRIVACY_MODAL_MODES.CREATE_POST_FOR_BEST_FRIENDS,i.PRIVACY_MODAL_MODES.OWN_POST_FOR_BEST_FRIENDS,i.PRIVACY_MODAL_MODES.OWN_POST_FOR_BEST_FRIENDS_EMPTY].includes(e),d=[i.PRIVACY_MODAL_MODES.CREATE_POST_FOR_FRIENDS,i.PRIVACY_MODAL_MODES.OWN_POST_FOR_FRIENDS].includes(e);a?(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.clickToLockBestFriends):d?(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.clickToLockFriends):e===i.PRIVACY_MODAL_MODES.BEST_FRIENDS_ENTRYPOINT&&(0,r.sendBestFriendsAnalytic)(r.BestFriendsEventType.clickToBestFriendsEntrypoint),(0,o.showMessageBoxModal)((r=>(0,n.jsx)(i.PrivacyModal,{...r,mode:e,name:t,sex:s})),{width:450})}}},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(s.exports,s,s.exports,d),s.loaded=!0,s.exports}d.m=o,e=[],d.O=(t,s,n,r)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,n,r]=e[c],o=!0,a=0;a<s.length;a++)(!1&r||i>=r)&&Object.keys(d.O).every((e=>d.O[e](s[a])))?s.splice(a--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,n,r]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var i={};t=t||[null,s({}),s([]),s(s)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,d.d(r,i),r},d.d=(e,t)=>{for(var s in t)d.o(t,s)&&!d.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,s)=>(d.f[s](e,t),t)),[])),d.u=e=>24817===e?"web/chunks/hls.b496ce21.js":77794===e?"web/chunks/7bdfc282.async.758ca0aa.js":95040===e?"web/chunks/cf5562e5.async.b4aed2d1.js":40530===e?"web/chunks/5ef6139d.async.f064c195.js":69488===e?"web/chunks/a7aba191.async.c36a6a36.js":67498===e?"web/chunks/19b9f4a7.async.9c26c7dc.js":24328===e?"web/chunks/c4004e28.async.ea2a65ee.js":27370===e?"web/chunks/2c9432b5.async.5b90c7cd.js":5157===e?"web/chunks/unauth_action_box.111478de.js":25394===e?"web/chunks/AudioLongtapModal.ab967a4b.js":75980===e?"web/chunks/menu_settings.7bdcde07.js":89334===e?"web/chunks/a228276f.async.a4e26c75.js":40928===e?"web/chunks/fcbd3ef2.async.877aa898.js":9914===e?"web/chunks/52fa6987.async.94be31b8.js":59727===e?"web/chunks/VideoUpload.d33511cc.js":9375===e?"web/chunks/voice_message_player.faac3006.js":28762===e?"web/chunks/speech.3083d7af.js":57468===e?"web/chunks/SilentModeForms.d5a6e099.js":28872===e?"web/chunks/feed-client-nav-skeleton.73bce91a.js":35953===e?"web/chunks/feed-client-nav-async-right-block.f4069a0d.js":29019===e?"web/chunks/ReportForm.fa1fcb63.js":77806===e?"web/chunks/apps_attach_modal.7a811e3c.js":79416===e?"web/chunks/primary_attachments_carousel.0f8666f2.js":85059===e?"web/chunks/059ba3af.async.1897b369.js":67724===e?"web/chunks/VideoEditorModal.eb979233.js":22854===e?"web/chunks/PublishClipToVideoModal.dae3ac0f.js":30271===e?"web/chunks/VideoUploadModal.b8d73da8.js":31286===e?"web/chunks/VideoExternalUploadModal.2c5830cb.js":969===e?"web/chunks/0dc980e6.async.f010f601.js":92846===e?"web/chunks/ClipUploadModal.8eff9d1c.js":59240===e?"web/chunks/performance-stats.b497cf49.js":378===e?"web/chunks/79f739a7.async.6dfc0f2b.js":72491===e?"web/chunks/story_blocks.dfab0b41.js":7308===e?"web/chunks/7308.e4292e75.js":53297===e?"chunks/"+e+".a3bee52c.js":71475===e?"chunks/"+e+".db838172.js":1854===e?"chunks/1854.9b4b0c68.js":18254===e?"chunks/"+e+".0ac520ae.js":92398===e?"chunks/"+e+".18cb85f5.js":"web/chunks/videoplayer-interactive.c61a72cb.js",d.miniCssF=e=>({5157:1,59727:1}[e]?"web/chunks/b1037836.css":25394===e?"web/chunks/6a66a172.css":75980===e?"web/chunks/5bbee2c9.css":57468===e?"web/chunks/122e7a6e.css":29019===e?"web/chunks/fb872de1.css":77806===e?"web/chunks/a16fc671.css":79416===e?"web/chunks/3bb17c53.css":67724===e?"web/chunks/3c048aa6.css":22854===e?"web/chunks/70c35bc4.css":{30271:1,31286:1}[e]?"web/chunks/f89919fd.css":92846===e?"web/chunks/83ceb5be.css":72491===e?"web/chunks/6b53e0ac.css":void 0),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},d.l=(e,t,s,r)=>{if(n[e])n[e].push(t);else{var i,o;if(void 0!==s)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var c=a[l];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")=="vk:"+s){i=c;break}}i||(o=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack","vk:"+s),i.src=e),n[e]=[t];var _=(t,s)=>{i.onerror=i.onload=null,clearTimeout(h);var r=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(s))),t)return t(s)},h=setTimeout(_.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=_.bind(null,i.onerror),i.onload=_.bind(null,i.onload),o&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/dist/",r=e=>new Promise(((t,s)=>{var n=d.miniCssF(e),r=d.p+n;if(((e,t)=>{for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var r=(o=s[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var o;if((r=(o=i[n]).getAttribute("data-href"))===e||r===t)return o}})(n,r))return t();((e,t,s,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)s();else{var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=a,r.parentNode.removeChild(r),n(d)}},r.href=t,document.head.appendChild(r)})(e,r,t,s)})),i={2884:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{5157:1,22854:1,25394:1,29019:1,30271:1,31286:1,57468:1,59727:1,67724:1,72491:1,75980:1,77806:1,79416:1,92846:1}[e]&&t.push(i[e]=r(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{d.b=document.baseURI||self.location.href;var e={2884:0};d.f.j=(t,s)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var r=new Promise(((s,r)=>n=e[t]=[s,r]));s.push(n[2]=r);var i=d.p+d.u(t),o=new Error;d.l(i,(s=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,n[1](o)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,s)=>{var n,r,[i,o,a]=s,l=0;if(i.some((t=>0!==e[t]))){for(n in o)d.o(o,n)&&(d.m[n]=o[n]);if(a)var c=a(d)}for(t&&t(s);l<i.length;l++)r=i[l],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(c)},s=self.webpackChunkvkweb=self.webpackChunkvkweb||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var l=d.O(void 0,[213,83737,2067,20795,57451,5038,71610,95167,74623,75934,28056,38234,81038,5929,74606,7139],(()=>d(400902)));l=d.O(l)})();