﻿(()=>{"use strict";var e,i,t,s,n,r,o={420606:(e,i,t)=>{t.d(i,{privacy:()=>S});var s=t(471828),n=t(851782),r=t(97875),o=t(70689),c=t(488844),l=t(93367),d=t(449147),a=t(636322),w=t(251087),u=t(585703),f=t(159663),p=t(274851),_=t(508965),h=t(896411),v=t(184132);const S={customType:4,someType:5,listsType:6,contactsType:7,specialTypes:[8,9,10],flistBox(e,i,t,n,r,c,l){if(l=!!l,window.cur.flistTpl=n,0===t.length&&(t={}),window.cur.flistList=i,window.cur.flistFriends=i,window.cur.flistSearchList=[],window.cur.flistSearchTotal=-1,window.cur.flistSearchLoadStr="",window.cur.flistSelectedList=t&&t[0]?t:[],window.cur.flistSelected={},(0,a.each)(t,((e,i)=>{window.cur.flistSelected[i[0]]=1})),window.cur.flistSelectedShowed=0,window.cur.flistHash=c,window.cur.flistBox=e,window.cur.isVKMiniApp=l,window.cur.flistIndex=new p.vkIndexer(i,(e=>e[1]+" "+e[4])),e.removeButtons(),e.addButton(r||s.getLang("global_save"),this.submitFlistBox),window.cur.flistTooltip){const i=(0,o.ge)("flist_sel");let t={className:"flist_info_tt",text:window.cur.flistTooltip,width:250,nohide:1,nohideover:1};t=window.cur.flistTooltipRight?(0,a.extend)(t,{dir:"left",slideX:-15,shift:[-(0,o.getSize)(i)[0]-15,-28]}):(0,a.extend)(t,{dir:"right",slideX:15,shift:[265,-28]}),(0,u.showTooltip)(i,t),window.stManager.add([window.jsc("web/tooltips.js")],(()=>{e.setOptions({onHide:tooltips.hide.pbind(i)})}))}else e.addButton(s.getLang("global_cancel"),(()=>{e.hide()}),"no");return window.cur.flistScrollbar=new Scrollbar("flist_scroll_wrap",{nomargin:!0,right:window.vk.rtl?"auto":0,left:window.vk.rtl?0:"auto",more:S.flistMore,onScroll:e=>{(0,o.ge)("flist_scroll_wrap").scrollTop>0?(0,o.addClass)("flist_cont","flist_scrolled"):(0,o.removeClass)("flist_cont","flist_scrolled")}}),window.cur.flistAllCont=(0,o.ge)("flist_all_list"),window.cur.flistSelCont=(0,o.ge)("flist_sel_list"),window.cur.flistSearchEl=(0,o.ge)("flist_search"),window.cur.flistSearchContEl=(0,o.geByClass1)("flist_search_cont","flist_cont"),window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit-1&&S.flistFull(),window.cur.flistCountStr&&window.cur.flistSelectedCnt>0&&((0,o.ge)("flist_sel_summary").innerHTML=(0,s.langNumeric)(window.cur.flistSelectedCnt,window.cur.flistCountStr)),(0,o.toggleClass)("flist_cont","flist_select_items",window.cur.flistSelectedCnt>0),!1},submitFlistBox(){const e=(0,o.ge)("flist_list_name");let i=!1;if((0,o.isVisible)(e)){if(i=e.value,!i)return(0,c.notaBene)(e);(0,d.placeholderSetup)(e,{back:!0}),(0,o.elfocus)(e,0,e.value.length)}const t={},s=[];if(window.cur.isVKMiniApp&&(t.lists=[],t.friends=[]),(0,a.each)(window.cur.flistSelectedList,((e,i)=>{window.cur.isVKMiniApp?"list"===i[5]?t.lists.push(i):t.friends.push(i):t[i[0]]=i,s.push(i[0])})),window.cur.flistFriendsPrivacy)return n.ajax.post("al_settings.php",{act:"hide_friends",hash:window.cur.flistHash,ids:s.join(",")},{onDone:(e,i)=>{(0,w.showDoneBox)(window.cur.flistFriendsPrivacyText),window.cur.flistBox.hide()},showProgress:window.cur.flistBox.showProgress,hiderogress:window.cur.flistBox.hideProgress}),(0,w.showDoneBox)(window.cur.flistFriendsPrivacyText,{out:4e3}),void(window.cur.flistNavReload&&setTimeout((()=>{window.nav.reload()}),2e3));window.cur.onFlistSave&&window.cur.onFlistSave(s,t,window.cur.flistHash,i),window.cur.flistBox.leaveOnSave||window.cur.flistBox.hide(!0)},flistMore(){window.cur.privacy&&window.cur.privacy.pagination&&!window.cur.flistSelectedShowed&&window.cur.flistList.length-window.cur.flistShown<10&&window.cur.flistList.length<window.cur.flistTotalCount?window.cur.flistSearchStr?S.flistSearchPagination():window.cur.flistMoreLoading||(window.cur.flistMoreLoading=!0,n.ajax.post("al_friends.php",(0,a.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_box",Checked:Object.keys(window.cur.flistSelected).join(","),pagination:1,offset:window.cur.flistList.length}),{onDone:e=>{window.cur.flistMoreLoading=!1,(0,a.isArray)(e)&&(e.forEach((e=>{window.cur.flistFriends.push(e),window.cur.flistIndex.add(e)})),S.flistMore())},onFail:()=>{window.cur.flistMoreLoading=!1}})):S.flistDrawItems()},flistDrawItems(){const e=window.cur.flistShown+60;for(;window.cur.flistShown<e&&S.flistShowOne(window.cur.flistList[window.cur.flistShown+1]);)++window.cur.flistShown;setTimeout((()=>{window.cur.flistScrollbar&&window.cur.flistScrollbar.update()}),10)},flistShowOne(e,i){if(!e)return!1;if((0,o.ge)("flist_item_wrap"+e[0]))return(0,o.show)((0,o.ge)("flist_item_wrap"+e[0])),!0;let t=e[1];window.cur.flistSelection&&(t=t.replace(window.cur.flistSelection.re,window.cur.flistSelection.val));const s=(0,o.ce)("div",{id:"flist_item_wrap"+e[0],className:"flist_item_wrap"+(window.cur.flistSelected[e[0]]?" flist_item_checked":""),innerHTML:(0,o.rs)(window.cur.flistTpl,{id:e[0],name:t,photo:e[2],alt:(0,a.clean)(t)})});return i?window.cur.flistAllCont.insertBefore(s,window.cur.flistAllCont.firstChild):window.cur.flistAllCont.appendChild(s),!0},flistSelect(e,i,t){const n=(0,o.ge)("flist_item_wrap"+e),r=i.parentNode,c=Boolean(i.dataset.isOne);if("flist_item_sel"==r.id.slice(0,14)||(0,o.hasClass)(n,"flist_item_checked")){delete window.cur.flistSelected[e];for(let i=0;i<window.cur.flistSelectedList.length;i++)if(window.cur.flistSelectedList[i][0]==e){window.cur.flistSelectedList.splice(i,1);break}n&&(0,o.removeClass)(n,"flist_item_checked");const i=(0,o.ge)("flist_item_sel"+e);if(i&&((0,o.re)(i),window.cur.flistSelectedCnt>window.cur.flistSelInRow&&window.cur.flistSelectedList[window.cur.flistSelInRow-1])){const e=window.cur.flistSelectedList[window.cur.flistSelInRow-1];(0,o.ge)("flist_item_sel"+e[0])||window.cur.flistSelCont.insertBefore((0,o.ce)("div",{id:"flist_item_sel"+e[0],className:"flist_item_wrap",innerHTML:(0,o.rs)(window.cur.flistTpl,{id:e[0],name:e[1],photo:e[2],alt:(0,a.clean)(e[1])})}),(0,o.ge)("flist_sel_show_all"))}window.cur.flistSelectedCnt--,0===window.cur.flistSelectedCnt?((0,o.show)("flist_info"),window.cur.flistSelectedShowed||(0,o.hide)("flist_search_toggler_wrap")):window.cur.flistSelectedCnt>window.cur.flistSelInRow?((0,o.val)("flist_sel_show_all","+"+(window.cur.flistSelectedCnt-window.cur.flistSelInRow)),(0,o.removeClass)("flist_sel_show_all","unshown")):window.cur.flistSelectedCnt==window.cur.flistSelInRow&&(0,o.addClass)("flist_sel_show_all","unshown"),window.cur.flistLimit&&window.cur.flistSelectedCnt==window.cur.flistLimit-1&&(0,o.removeClass)(window.cur.flistAllCont,"flist_full"),(0,w.curBox)().changed=!0}else if(!(0,o.hasClass)(n,"flist_item_checked")){if(window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit)return S.flistFull(t||window.event),!1;const i=(0,o.val)(n);if((0,o.addClass)(n,"flist_item_checked"),0==window.cur.flistSelectedCnt&&((0,o.hide)("flist_info"),(0,o.show)("flist_search_toggler_wrap")),window.cur.flistSelectedCnt++,window.cur.flistSelCont.insertBefore((0,o.ce)("div",{id:"flist_item_sel"+e,className:"flist_item_wrap",innerHTML:i}),window.cur.flistSelCont.firstChild),window.cur.flistSelectedCnt>window.cur.flistSelInRow){const e=(0,o.geByClass)("flist_item_wrap",window.cur.flistSelCont);(0,o.re)(e[e.length-1]),(0,o.val)("flist_sel_show_all","+"+(window.cur.flistSelectedCnt-window.cur.flistSelInRow)),(0,o.removeClass)("flist_sel_show_all","unshown")}window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit&&S.flistFull(t||window.event);for(let i=0;i<window.cur.flistList.length;i++)if(window.cur.flistList[i]&&window.cur.flistList[i][0]==e){window.cur.flistSelectedList.unshift(window.cur.flistList[i]);break}window.cur.flistSelected[e]=1,window.cur.flistSearchStr&&S.flistSearch(!1)}return(0,o.toggleClass)("flist_cont","flist_select_items",window.cur.flistSelectedCnt>0),window.cur.flistCountStr&&(0,o.val)("flist_sel_summary",window.cur.flistSelectedCnt>0?(0,s.langNumeric)(window.cur.flistSelectedCnt,window.cur.flistCountStr):window.cur.flistNoSelStr),window.cur.flistScrollbar.update(),c&&this.submitFlistBox(),!1},flistFull(e){if(e){let i;(0,o.hasClass)(e.target,"flist_item_thumb")?i=e.target:((0,o.hasClass)(e.target,"flist_item")&&(i=e.target)||(i=(0,o.gpeByClass)("flist_item",e.target)))&&(i=(0,o.geByClass1)("flist_item_thumb",i)),i&&(window.tooltips&&tooltips.hideAll(),(0,u.showTooltip)(i,{text:window.cur.limitTooltip,className:"flist_max_size_tt",dir:"auto",slide:-15,shift:[15,10],nohide:1,nohideover:1,hasover:1}),setTimeout((()=>{window.tooltips&&tooltips.hide(i)}),2e3))}(0,o.addClass)(window.cur.flistAllCont,"flist_full")},flistSearch(e){e=(0,a.trim)(e),window.cur.flistSearchStr=e,window.cur.privacy&&window.cur.privacy.pagination&&!window.cur.flistSelectedShowed&&window.cur.flistIndex.list.length<window.cur.flistTotalCount&&e?S.flistSearchPagination():(window.cur.flistSearchList=[],window.cur.flistSearchTotal=-1,window.cur.flistSearchLoadStr="",clearTimeout(window.cur.flistSearchLoadMore),e?(window.cur.flistList=(window.cur.flistSelectedShowed?window.cur.flistSelectedIndex:window.cur.flistIndex).search(e),window.cur.flistSelection={re:new RegExp("("+e.replace(window.cur.flistIndex.delimiter,"|").replace(/[\/\\\(\)\[\]\{\}\*,]/g,"").replace(/^\||\|$/g,"")+")","gi"),val:'<em class="highlight">$1</em>'},window.cur.flistScrollbar.scrollTop(0)):(window.cur.flistList=window.cur.flistSelectedShowed?window.cur.flistSelectedList:window.cur.flistFriends,window.cur.flistSelection=!1,(0,o.val)(window.cur.flistSearchEl,""),(0,o.addClass)(window.cur.flistSearchContEl,"ui_search_field_empty")),window.cur.flistList.length?(window.cur.flistAllCont.innerHTML="",window.cur.flistShown=-1,S.flistMore()):(window.cur.flistAllCont.innerHTML="",window.cur.flistAllCont.append((0,o.ce)("div",{className:"flist_empty no_select",innerHTML:s.getLang("apps_no_friends_for_query")})),window.cur.flistShown=0))},flistSearchPagination(){if(window.cur.flistSearchLoading||window.cur.flistSearchLoadStr===window.cur.flistSearchStr&&window.cur.flistSearchList.length>=window.cur.flistSearchTotal||!window.cur.privacy)return;const e=window.cur.flistSearchStr;function i(){window.cur.flistSearchLoading=!0,n.ajax.post("al_friends.php",(0,a.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_search",q:e,offset:window.cur.flistSearchLoadStr===e?window.cur.flistSearchList.length:0}),{onDone:(i,t)=>{window.cur.flistSearchLoadStr!==e&&(window.cur.flistSearchLoadStr=e,window.cur.flistShown=-1,window.cur.flistSearchList=[],window.cur.flistAllCont.innerHTML=""),window.cur.flistSearchTotal=+t,i.forEach((e=>{window.cur.flistSearchList.push(e)})),window.cur.flistList=window.cur.flistSearchList,S.flistDrawItems(),window.cur.flistSearchLoading=!1},onFail:()=>{window.cur.flistSearchLoading=!1}})}window.cur.flistSearchLoadMore&&clearTimeout(window.cur.flistSearchLoadMore),window.cur.flistSearchLoadStr===e?i():window.cur.flistSearchLoadMore=setTimeout(i,500)},flistToggleAllSelected(){window.cur.flistSelectedShowed?(window.cur.flistSelectedShowed=0,(0,o.removeClass)("flist_sel_show_all","flist_sel_showed_all"),(0,o.removeClass)("flist_search_toggler","on"),0===window.cur.flistSelectedCnt&&((0,o.hide)("flist_search_toggler_wrap"),(0,o.removeClass)("flist_cont","flist_select_items")),S.flistSearch(!1)):(window.cur.flistSelectedShowed=1,(0,o.addClass)("flist_sel_show_all","flist_sel_showed_all"),(0,o.addClass)("flist_search_toggler","on"),window.cur.flistList=window.cur.flistSelectedList,window.cur.flistAllCont.innerHTML="",window.cur.flistShown=-1,S.flistMore(),window.cur.flistSelectedIndex=new p.vkIndexer(window.cur.flistSelectedList,(e=>e[1]+" "+e[4]))),window.cur.flistSelection=!1,(0,o.val)(window.cur.flistSearchEl,"")},hideFriends(e,i){const t=window.cur.privacy[e][2];return(0,f.showBox)("al_friends.php",{act:"select_friends_box",from:"friends_privacy",Checked:t.join(",")},{stat:[window.jsc("web/privacy.js"),"privacy.css",window.jsc("web/indexer.js")]}),window.cur.onFlistSave=function(i,t,s){n.ajax.post("al_settings.php",{act:"hide_friends",hash:s,ids:i.join(",")},{onDone:(i,t)=>{(0,o.ge)("privacy_"+e+"_hide").innerHTML=i,window.cur.privacy[e]=t,window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(e)}})},!1},update(e,i){const t=(0,o.ge)("privacy_edit_"+e),n=window.cur.privacy[e],r=n[0],c=window.cur.privacy,l=c[e+"_types"]||c._types,d=c[e+"_lists"]||c._lists||{},a={};for(let e in d)d.hasOwnProperty(e)&&(a[parseInt(e)]=d[e]);if(t){const i=r==_.PRIVACY_CATEGORIES.FRIENDS,d=r==_.PRIVACY_CATEGORIES.FRIENDS_OF_FRIENDS,w=!l[r]&&e.match("profile_button"),u="list28";let f=w?l[u]:l[r];if(e===_.PRIVACY_KEYS.CALLS&&(i||d)){const e=c.hasOwnProperty(_.PRIVACY_KEYS.CALLS_HAS_MESSAGES)&&!c[_.PRIVACY_KEYS.CALLS_HAS_MESSAGES][0],t=c.hasOwnProperty(_.PRIVACY_KEYS.CALLS_IN_CONTACTS)&&!c[_.PRIVACY_KEYS.CALLS_IN_CONTACTS][0];e&&t?f=i?s.getLang("settings_options_friends_contacts_and_chat_partners"):s.getLang("settings_options_friends_friends_contacts_and_chat_partners"):e?f=i?s.getLang("settings_options_friends_and_chat_partners"):s.getLang("settings_options_friends_friends_and_chat_partners"):t&&(f=i?s.getLang("settings_options_friends_and_contacts"):s.getLang("settings_options_friends_friends_and_contacts"))}t.innerHTML=f;const p=(0,o.ge)("privacy_header");p&&(p.innerHTML=w?l[u]:l[r]);const h=(0,o.gpeByClass)("privacy_edit_wrap",t);if(h&&h.nextSibling&&!w)if(r==S.listsType){const e=[];for(let i in n[2])if(n[2].hasOwnProperty(i)){const t=-n[2][i],s=(t-1)%8+1;if(a[t]){let i;i=t<100?'<a href="/friends?section=list'+t+'" class="group'+s+'" role="listitem">'+a[t]+"</a>":'<span class="group'+s+'">'+a[t]+"</span>",e.push(i)}}h.nextSibling.innerHTML=(e.length?": ":"")+e.join(", ")}else h.nextSibling.innerHTML="";if(h&&(0,o.hasClass)(h,"privacy_graphic")){(0==r&&"hidden_friends"!==e||r==S.customType&&n[1]&&n[2]&&"0"==n[2][0]||i&&"appscall"===e||i&&"bdate_visibility"===e?o.removeClass:o.addClass)(h,"privacy_locked")}}window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(e,i?(0,h.fixPrivacyValueTypes)(i):i)},setValue(e,i){const t=window.cur.privacy[e],s=window.cur.onPrivacyChanged;window.cur.privacy[e]=i,window.cur.onPrivacyChanged=null,S.update(e,t),window.cur.onPrivacyChanged=s},someSaved(e,i,t,n){const r=window.cur.privacy[e];window.cur.privacy[e]=[S.someType,0,i,[]];const c=window.cur.privacy.lang||{},l=i.length;let d=[];for(let e=0;e<l&&e<5;++e){const s=i[e],r=n?t[e]:t[s],o=r[4].replace(/'/g,"");d.push('<a href="/'+(o||"id"+s)+'" onclick="return nav.go(this, event)">'+(r[5]||r[1])+"</a>")}d=d.join(", "),l>5&&(d+=" "+(c.some?s.getLang(c.some,l-5):s.getLang("privacy_N_friends_some",l-5)));const a=(0,o.ge)("privacy_edit_"+e),w=(0,o.gpeByClass)("privacy_edit_wrap",a),u=window.cur.privacy[e+"_types"]||window.cur.privacy._types;a.innerHTML=u[S.someType],w.nextSibling.innerHTML=": "+d,window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(e,r)},customSaved(e,i,t,n){const r=window.cur.privacy[e];window.cur.privacy[e]=i;const c=window.cur.privacy.lang||{};if(1==i[1]&&!i[3].length||i[0]==S.listsType)S.update(e,r);else if(i[0]==S.someType)S.someSaved(e,i[2],t,!0);else{const r=(0,o.ge)("privacy_edit_"+e),l=(0,o.gpeByClass)("privacy_edit_wrap",r),d=window.cur.privacy[e+"_types"]||window.cur.privacy._types,a=window.cur.privacy[e+"_lists"]||window.cur.privacy._lists||{};let w=d[S.listsType],u="";if(1==i[1])w=d[i[2][0]];else{u=[];const e=t.length;let i=!1;for(let s=0;s<e&&s<5;++s){const e=t[s],n=e[0];if(v.Ranges.isUserId(Number(n))){const t=e[4].replace(/'/g,"");i=!0,u.push('<a href="/'+(t||"id"+n)+'" onclick="return nav.go(this, event)">'+e[6]+"</a>")}else{const e=-n,i=(e-1)%8+1;u.push('<a href="/friends?section=list'+e+'" class="group'+i+'" role="listitem">'+a[e]+"</a>")}}i&&(w=d[S.someType]),u=": "+u.join(", "),e>5&&(u+=" "+s.getLang(c.some||"privacy_N_friends_some",e-5))}if(n.length){const e=n.length,i=[];for(let t=0;t<e&&t<5;++t){const e=n[t],s=e[0];if(v.Ranges.isUserId(Number(s))){const t=e[4].replace(/'/g,"");i.push('<a href="/'+(t||"id"+s)+'" onclick="return nav.go(this, event)">'+e[6]+"</a>")}else{const e=-s,t=(e-1)%8+1;i.push('<a href="/friends?section=list'+e+'" class="group'+t+'" role="listitem">'+a[e]+"</a>")}}u+=", "+s.getLang("global_privacy_except")+" "+i.join(", "),e>5&&(u+=" "+s.getLang("privacy_N_friends_more",e-5))}r.innerHTML=w,l.nextSibling.innerHTML=u,(0,o.hasClass)(l,"privacy_graphic")&&(i[1]&&i[2]&&"0"==i[2][0]?o.removeClass:o.addClass)(l,"privacy_locked"),window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(e)}},choose(e,i,t,s){const n=window.cur.privSel,r=window.cur.privacy._noselect||"chat_actions"===n;let c=window.cur.privacy[n];if(!window.cur.privacyNeedConfirm||s){if(r)return window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(n,i,t),S.qhide(),(0,l.cancelEvent)(e);if(i==S.customType){let e,i,t=[],s="";return c[0]==S.customType?(e=c[1],i=c[2],t=c[3]):c[0]==S.someType||c[0]==S.listsType?(e=0,i=c[2]):c[0]==S.specialTypes[0]?(e=1,i=["0"]):(e=1,i=c[2]),window.cur.onCprivSave=S.customSaved.pbind(n),window.cur.privacy.custom_box_type&&(s=window.cur.privacy.custom_box_type),(0,f.showBox)("al_friends.php",(0,a.extend)(window.cur.privacy.chooseBoxOpts||{},{act:"custom_privacy_box",type:e,plus:i.join(","),minus:t.join(","),opt:s,key:n}),{stat:["ui_controls.js","ui_controls.css"]})}if(i==S.someType){const e=c[0]==S.someType||c[0]==S.complexType&&0==c[1]?c[2].join(","):"";return window.cur.onFlistSave=function(e,i){S.someSaved(n,e,i)},(0,f.showTabbedBox)("al_friends.php",(0,a.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_box",Checked:e,pagination:window.cur.privacy.pagination?1:""}),{stat:["ui_controls.js"]})}if(i==S.listsType){const s=(0,o.ge)("privacy_l_item"+t);if(!s&&n.match("profile_button"))c=window.cur.privacy[n]=[i,0,[-t],[]];else if("l_item_sel"==s.className){s.className="l_item";const e=(0,a.indexOf)(c[2],-t);if(-1!=e&&c[2].splice(e,1),!c[2].length&&"updates"!=n){const e=window.cur.privacy[n+"_types"]||window.cur.privacy._types,i=Object.keys(e);window.cur.privacy[n]=[(0,a.intval)(i[0]),1,[0],[]]}}else s.className="l_item_sel",c[0]!=i&&(c=window.cur.privacy[n]=[i,0,[],[]]),c[2].push(-t);return S.update(n,c),(0,l.cancelEvent)(e)}window.cur.privacy[n]=[i,1,[i],[]],S.update(n,c),S.qhide()}else window.cur.privacyNeedConfirm(n,i,(()=>{S.show((0,o.ge)("privacy_edit_"+n),e,n),S.choose(e,i,t,!0)}))},select(e,i){if(!i&&e===window.cur.privSelIndex)return;if(!1!==window.cur.privSelIndex){const e=(0,o.ge)("privacy_item"+window.cur.privSelIndex);e&&(e.className="item"),window.cur.privSelIndex==S.listsType&&window.cur.privacy[window.cur.privSel][0]!=S.listsType&&(0,o.hide)(e.nextSibling)}window.cur.privSelIndex=e;const t=(0,o.ge)("privacy_item"+window.cur.privSelIndex),s=window.cur.privSelIndex==S.someType?"_plus":"";t.nextSibling&&t.nextSibling.id=="privacy_item"+S.listsType&&(0,o.isVisible)(t.nextSibling.nextSibling)?t.className="last item_sel"+s:e==S.listsType?(0,o.show)(t.nextSibling):t.className="item_sel"+s},unselect(e){e==window.cur.privSelIndex&&((0,o.ge)("privacy_item"+e).className="item",window.cur.privSelIndex=!1)},hide(e){if(e&&e>0)return void(window.cur.hidePrivacyTimer=window.setTimeout((()=>S.hide(0)),e));clearTimeout(window.cur.hidePrivacyTimer);const i=(0,o.ge)("privacy_header");i&&(-1===e?((0,o.hide)(window.cur.privEl),i&&i.tt&&(0,a.isFunction)(i.tt.hide)&&i.tt.hide()):o.isVisible&&((0,r.fadeOut)(window.cur.privEl,200),i&&i.tt&&(0,a.isFunction)(i.tt.hide)&&i.tt.hide()),window.cur.privSel=window.cur.privSelIndex=!1,(0,l.removeEvent)(document,"click",S.qhide))},show(e,i,t){if((0,o.hasClass)(e,"privacy_link_disabled"))return(0,l.cancelEvent)(i);const s=window.cur.privacy[t],n=(0,o.gpeByClass)("privacy_edit_wrap",e);if(!s||!n)return;if(window.cur.onPrivacyShow&&window.cur.onPrivacyShow(t),window.cur.privEl||(window.cur.privEl=(0,o.ge)("privacy_dropdown"),window.cur.privEl&&(window.cur.privRows=window.cur.privEl.firstChild)),window.cur.privEl){if(window.cur.privEl.parentNode!=n){(0,o.re)(window.cur.privEl),window.cur.privEl=n.appendChild(window.cur.privEl);const e=(0,o.ge)("privacy_header");e&&e.tt&&(0,a.isFunction)(e.tt.hide)&&e.tt.hide()}}else window.cur.privEl=n.appendChild((0,o.ce)("div",{id:"privacy_dropdown",innerHTML:'<div class="rows rows__flex"></div>'})),window.cur.privRows=window.cur.privEl.firstChild,(0,l.addEvent)(window.cur.privEl,"mouseout",S.hide.pbind(500)),(0,l.addEvent)(window.cur.privEl,"mouseover",(()=>{clearTimeout(window.cur.hidePrivacyTimer)}));window.cur.privEl.className="privacy_dropdown privacy_dropdown_"+t,setTimeout(l.addEvent.pbind(document,"click",S.qhide),1);const r=window.cur.privacy[t+"_types"]||window.cur.privacy._types,c=window.cur.privacy[t+"_lists"]||window.cur.privacy._lists||{},d=window.cur.privacy[t+"_hidden"]||window.cur.privacy._hidden||{},w=(0,o.getStyle)(e,"fontSize")||parseInt(window.getComputedStyle(document.body).fontSize);(0,o.setStyle)(window.cur.privRows,{fontSize:w}),window.cur.privSelIndex=s[0],d[window.cur.privSelIndex]&&(window.cur.privSelIndex=0);const f=[];let p,_,h=Object.keys(c).length>0;f.push('<div class="header" onclick="Privacy.hide(-1)"><div id="privacy_header" class="header_label">'+e.innerHTML+"</div></div>"),f.push('<div class="body body__flex" role="list" aria-labelledby="privacy_who_can_view">');let v=Object.entries(r);const y=v.findIndex((e=>Number(e[0])===S.specialTypes[0]));if(-1!==y){const e=v.splice(y,1);v=[...e,...v]}for(let[e,i]of v){const t=g(e,i);t&&f.push(t)}function g(e,i){if(d[e])return"";p=e==window.cur.privSelIndex&&e!=S.listsType?"_sel":"";let t="",s="";if(t+=`onmouseover="Privacy.select('${e}')"`,t+="list28"===e?' onclick="Privacy.choose(event, 6, 28)"':` onclick="Privacy.choose(event, '${e}')"`,t+=` onkeydown="if (event.key === 'Tab') {if (event.shiftKey) {Privacy.select('${+e-1}')} else {Privacy.select('${+e+1}')}}"`,e==S.listsType&&h&&(s=' tabindex="-1"'),e==S.listsType){if(!h)return""}else t+=` onmouseout="Privacy.unselect('${e}')"`;return p&&e==S.someType&&(p+="_plus"),'<button role="listitem" class="item'+p+'" id="privacy_item'+e+'" '+t+s+'type="button">'+i+"</button>"}if(r[S.listsType]&&h){_=window.cur.privSelIndex!=S.listsType,f.push('<div id="privacy_lists" class="privacy_lists privacy_lists__flex">'),f.push('<div class="l_header" onclick="return cancelEvent(event)"><div class="l_header_label">'+r[S.listsType]+"</div></div>");for(let e in c)if(c.hasOwnProperty(e)){const i=parseInt(e);p=_?"":(0,a.inArray)(-i,s[2])?"_sel":"",f.push('<button class="l_item'+p+'" id="privacy_l_item'+i+'" onclick="Privacy.choose(event, '+S.listsType+", "+i+')"><div class="privacy_item_icon"></div><span class="l_item_text">'+c[e]+"</span></button>")}f.push("</div>")}f.push("</div>"),window.cur.privRows.innerHTML=f.join(""),window.cur.privSel=t;const m=(0,o.data)(window.cur.privEl,"tween");m&&m.stop(!0),(0,o.show)(window.cur.privEl),r[S.listsType]&&_&&(0,o.hide)("privacy_lists"),S.toup=!1,(0,o.getClientRectOffsetY)(window.cur.privEl)>0&&(0,o.getClientRectOffsetY)(window.cur.privEl,!1,(0,o.getSize)(window.cur.privEl)[1])>0&&(S.toup=!0),S.toup?(0,o.addClass)(window.cur.privEl,"pdd_to_up"):(0,o.removeClass)(window.cur.privEl,"pdd_to_up"),window.cur.privacy[t+"_ralign"]?(0,o.addClass)(window.cur.privEl,"pdd_ralign"):(0,o.removeClass)(window.cur.privEl,"pdd_ralign");const C=window.cur.privacy[t+"_help"],b=window.cur.privacy[t+"_help_w"];if(C){const e=(0,o.ge)("privacy_header"),i=(0,o.getSize)(e);(0,u.showTooltip)(e,{text:C,width:b||300,dir:"left",slideX:15,shift:[-(i[0]+10),-i[1]/2,0],nohide:!0})}return(0,l.cancelEvent)(i)},getValue(e){if(!window.cur.privacy||!window.cur.privacy[e])return"";const i=window.cur.privacy[e];let t=[];if(i[0]<S.customType||i[0]==S.contactsType||S.specialTypes.some((e=>i[0]==e)))t=[i[0]];else if(i[0]==S.someType)t=[4,i[2].join(",")];else if(i[0]==S.listsType){const e=[];for(let t in i[2])i[2].hasOwnProperty(t)&&e.push(-i[2][t]);t=[5,e.join(",")]}else t=[-1,i[1],i[2].join(","),i[3].join(",")];return t.join("_")}};S.qhide=S.hide.pbind(-1)},932892:(e,i,t)=>{var s=t(802130),n=t(420606);window.vk?.pe?.static_manager_dynamic_imports&&window.vk?.stDomain&&(t.p=window.vk.stDomain+"/dist/"),window.Privacy=n.privacy;try{window.stManager.done(window.jsc("web/privacy.js"))}catch(e){}requestIdleCallback((()=>{try{(0,s.statlogsValueEvent)("entries_requests",1,"privacy","web")}catch{}}),{timeout:5e3})},508965:(e,i,t)=>{t.d(i,{CURRENT_EVENT_SCREEN:()=>c,FOLLOWERS_MODE_ABOUT_MODAL_STEP:()=>r,FOLLOWERS_MODE_ONBOARDING_CLICK_TYPE_ENTRYPOINT:()=>l,FOLLOWERS_MODE_ONBOARDING_CONTEXT_PRIVACY:()=>o,PRIVACY_CATEGORIES:()=>n,PRIVACY_KEYS:()=>s});const s={PROFILE:"profile",SEARCH_ACCESS:"search_access",UPDATES:"updates",COMPANY_MESSAGES:"company_messages",PROFILE_CLOSED:"profile_closed",CONTACT_AVATAR:"contact_avatar",CALLS_FROM_COMMUNITY:"calls_from_community",CALLS_HAS_MESSAGES:"calls_has_messages",CALLS_IN_CONTACTS:"calls_in_contacts",CALLS:"calls",FOLLOWERS_MODE:"followers_mode"},n={ALL:0,FRIENDS:1,FRIENDS_OF_FRIENDS:2,ONLY_ME:3,ADVANCED_SETTINGS:4,SOME_FRIENDS:5,SOME_FRIENDS_LIST:6,CONTACTS:7},r=1,o="privacy",c="privacy",l="entrypoint"},896411:(e,i,t)=>{t.d(i,{fixPrivacyValueTypes:()=>l,getPrivacyValueFromCur:()=>c,isSpecialPrivacyKey:()=>n,savePrivacySetting:()=>d,savePrivacyShowSaved:()=>r,selectPrivacySettingElement:()=>o});var s=t(508965);function n(e){return[s.PRIVACY_KEYS.SEARCH_ACCESS,s.PRIVACY_KEYS.UPDATES,s.PRIVACY_KEYS.COMPANY_MESSAGES,s.PRIVACY_KEYS.PROFILE_CLOSED,s.PRIVACY_KEYS.CONTACT_AVATAR,s.PRIVACY_KEYS.CALLS_FROM_COMMUNITY,s.PRIVACY_KEYS.CALLS_HAS_MESSAGES,s.PRIVACY_KEYS.CALLS_IN_CONTACTS,s.PRIVACY_KEYS.FOLLOWERS_MODE].includes(e)}function r(e){window.uiPageBlock&&window.uiPageBlock.showSaved("privacy_edit_"+e)}function o(e){return document.querySelector(`._${e}`)}function c(e){if(window.cur.privacy&&Array.isArray(window.cur.privacy[e]))return l(window.cur.privacy[e])}function l(e){if(Array.isArray(e)){const[i,t,s,n]=e;return[parseInt(i),parseInt(t),Array.isArray(s)?s.map((e=>parseInt(e))):[],Array.isArray(n)?n.map((e=>parseInt(e))):[]]}}function d(e){return new Promise(((i,t)=>{window.ajax.post("al_friends.php?act=save_privacy",{key:e.key,val:e.value,hash:e.hash},{onDone:e=>{i(e)},onFail:e=>(t(e),!0)})}))}}},c={};function l(e){var i=c[e];if(void 0!==i)return i.exports;var t=c[e]={exports:{}};return o[e].call(t.exports,t,t.exports,l),t.exports}l.m=o,e=[],l.O=(i,t,s,n)=>{if(!t){var r=1/0;for(a=0;a<e.length;a++){for(var[t,s,n]=e[a],o=!0,c=0;c<t.length;c++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](t[c])))?t.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(a--,1);var d=s();void 0!==d&&(i=d)}}return i}n=n||0;for(var a=e.length;a>0&&e[a-1][2]>n;a--)e[a]=e[a-1];e[a]=[t,s,n]},l.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return l.d(i,{a:i}),i},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var r={};i=i||[null,t({}),t([]),t(t)];for(var o=2&s&&e;"object"==typeof o&&!~i.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((i=>r[i]=()=>e[i]));return r.default=()=>e,l.d(n,r),n},l.d=(e,i)=>{for(var t in i)l.o(i,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((i,t)=>(l.f[t](e,i),i)),[])),l.u=e=>24817===e?"web/chunks/hls.b496ce21.js":77794===e?"web/chunks/7bdfc282.async.758ca0aa.js":95040===e?"web/chunks/cf5562e5.async.b4aed2d1.js":40530===e?"web/chunks/5ef6139d.async.f064c195.js":69488===e?"web/chunks/a7aba191.async.c36a6a36.js":67498===e?"web/chunks/19b9f4a7.async.9c26c7dc.js":24328===e?"web/chunks/c4004e28.async.ea2a65ee.js":27370===e?"web/chunks/2c9432b5.async.5b90c7cd.js":5157===e?"web/chunks/unauth_action_box.111478de.js":25394===e?"web/chunks/AudioLongtapModal.ab967a4b.js":75980===e?"web/chunks/menu_settings.7bdcde07.js":89334===e?"web/chunks/a228276f.async.a4e26c75.js":40928===e?"web/chunks/fcbd3ef2.async.877aa898.js":9914===e?"web/chunks/52fa6987.async.94be31b8.js":59727===e?"web/chunks/VideoUpload.d33511cc.js":9375===e?"web/chunks/voice_message_player.faac3006.js":28762===e?"web/chunks/speech.3083d7af.js":57468===e?"web/chunks/SilentModeForms.d5a6e099.js":28872===e?"web/chunks/feed-client-nav-skeleton.73bce91a.js":35953===e?"web/chunks/feed-client-nav-async-right-block.f4069a0d.js":85059===e?"web/chunks/059ba3af.async.1897b369.js":67724===e?"web/chunks/VideoEditorModal.eb979233.js":22854===e?"web/chunks/PublishClipToVideoModal.dae3ac0f.js":30271===e?"web/chunks/VideoUploadModal.b8d73da8.js":31286===e?"web/chunks/VideoExternalUploadModal.2c5830cb.js":969===e?"web/chunks/0dc980e6.async.f010f601.js":92846===e?"web/chunks/ClipUploadModal.8eff9d1c.js":59240===e?"web/chunks/performance-stats.b497cf49.js":378===e?"web/chunks/79f739a7.async.6dfc0f2b.js":72491===e?"web/chunks/story_blocks.dfab0b41.js":7308===e?"web/chunks/7308.e4292e75.js":1854===e?"chunks/1854.9b4b0c68.js":18254===e?"chunks/"+e+".0ac520ae.js":92398===e?"chunks/"+e+".18cb85f5.js":"web/chunks/videoplayer-interactive.c61a72cb.js",l.miniCssF=e=>({5157:1,59727:1}[e]?"web/chunks/b1037836.css":25394===e?"web/chunks/6a66a172.css":75980===e?"web/chunks/5bbee2c9.css":57468===e?"web/chunks/122e7a6e.css":67724===e?"web/chunks/3c048aa6.css":22854===e?"web/chunks/70c35bc4.css":{30271:1,31286:1}[e]?"web/chunks/f89919fd.css":92846===e?"web/chunks/83ceb5be.css":72491===e?"web/chunks/6b53e0ac.css":void 0),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),s={},l.l=(e,i,t,n)=>{if(s[e])s[e].push(i);else{var r,o;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var a=c[d];if(a.getAttribute("src")==e||a.getAttribute("data-webpack")=="vk:"+t){r=a;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.setAttribute("data-webpack","vk:"+t),r.src=e),s[e]=[i];var w=(i,t)=>{r.onerror=r.onload=null,clearTimeout(u);var n=s[e];if(delete s[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(t))),i)return i(t)},u=setTimeout(w.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=w.bind(null,r.onerror),r.onload=w.bind(null,r.onload),o&&document.head.appendChild(r)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/dist/",n=e=>new Promise(((i,t)=>{var s=l.miniCssF(e),n=l.p+s;if(((e,i)=>{for(var t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var n=(o=t[s]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===i))return o}var r=document.getElementsByTagName("style");for(s=0;s<r.length;s++){var o;if((n=(o=r[s]).getAttribute("data-href"))===e||n===i)return o}})(s,n))return i();((e,i,t,s)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=r=>{if(n.onerror=n.onload=null,"load"===r.type)t();else{var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||i,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=c,n.parentNode.removeChild(n),s(l)}},n.href=i,document.head.appendChild(n)})(e,n,i,t)})),r={27824:0},l.f.miniCss=(e,i)=>{r[e]?i.push(r[e]):0!==r[e]&&{5157:1,22854:1,25394:1,30271:1,31286:1,57468:1,59727:1,67724:1,72491:1,75980:1,92846:1}[e]&&i.push(r[e]=n(e).then((()=>{r[e]=0}),(i=>{throw delete r[e],i})))},(()=>{l.b=document.baseURI||self.location.href;var e={27824:0};l.f.j=(i,t)=>{var s=l.o(e,i)?e[i]:void 0;if(0!==s)if(s)t.push(s[2]);else{var n=new Promise(((t,n)=>s=e[i]=[t,n]));t.push(s[2]=n);var r=l.p+l.u(i),o=new Error;l.l(r,(t=>{if(l.o(e,i)&&(0!==(s=e[i])&&(e[i]=void 0),s)){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+i+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,s[1](o)}}),"chunk-"+i,i)}},l.O.j=i=>0===e[i];var i=(i,t)=>{var s,n,[r,o,c]=t,d=0;if(r.some((i=>0!==e[i]))){for(s in o)l.o(o,s)&&(l.m[s]=o[s]);if(c)var a=c(l)}for(i&&i(t);d<r.length;d++)n=r[d],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(a)},t=self.webpackChunkvkweb=self.webpackChunkvkweb||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})();var d=l.O(void 0,[213,83737,2067,20795,57451,5038,95167],(()=>l(932892)));d=l.O(d)})();