﻿/*! For license information please see jobs_devtools_notification.b1c75bb6.js.LICENSE.txt */
(()=>{"use strict";var e,t,o,n={349924:(e,t,o)=>{function n(){const e={isOpen:!1,orientation:void 0},t=(e,t)=>{window.dispatchEvent(new CustomEvent("devtoolschange",{detail:{isOpen:e,orientation:t}}))},o=setInterval((()=>{try{const o=window.outerWidth-window.innerWidth>160,n=window.outerHeight-window.innerHeight>160,r=o?"vertical":"horizontal";n&&o||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||o||n)?(e.isOpen&&t(!1,void 0),e.isOpen=!1,e.orientation=void 0):(e.isOpen&&e.orientation===r||t(!0,r),e.isOpen=!0,e.orientation=r)}catch(e){clearInterval(o)}}),500);return e}o.d(t,{start:()=>n})},663494:(e,t,o)=>{var n=o(802130),r=o(402565);window.vk?.pe?.static_manager_dynamic_imports&&window.vk?.stDomain&&(o.p=window.vk.stDomain+"/dist/"),(0,r.init)();try{window.stManager.done(window.jsc("web/jobs_devtools_notification.js"))}catch(e){}requestIdleCallback((()=>{try{(0,n.statlogsValueEvent)("entries_requests",1,"jobs_devtools_notification","web")}catch{}}),{timeout:5e3})},402565:(e,t,o)=>{o.d(t,{init:()=>i});var n=o(764736);const r=()=>{(0,n.fetchVacancies)().then(n.logMessage,(()=>{}))},i=()=>{void 0!==window.Promise&&(0,n.onDevtoolsOpen)().then(r,(()=>{}))}},94495:(e,t,o)=>{o.d(t,{requestJson:()=>i});var n=o(234970),r=o(534646);const i=(e,t)=>(0,n.request)(e,{...t,al:1},{}).then((({data:e})=>{const t=(e=>{let t;try{t=(new r.AjaxProtoJson).parseResponse(e)}catch(e){return}return t})(e);return void 0!==t?t:Promise.reject(new Error("Unable to parse response payload"))}))},764736:(e,t,o)=>{o.d(t,{fetchVacancies:()=>s,logMessage:()=>i,onDevtoolsOpen:()=>a});var n=o(349924),r=o(94495);const i=e=>{console.log(e)},s=()=>{const e=window.location.pathname.replace(/^\//,"");return(0,r.requestJson)("/al_jobs.php",{act:"get_by_section",section:e}).then((({code:e,payload:t})=>{const o=t?.[0];return 0===e&&"string"==typeof o?o:Promise.reject(new Error("Invalid response"))}))},a=()=>{const e=(0,n.start)().isOpen;let t;const o=e?Promise.resolve():new Promise((e=>{t=e}));return e||window.addEventListener("devtoolschange",(e=>{e?.detail?.isOpen&&t()})),o}}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e].call(o.exports,o,o.exports,i),o.exports}i.m=n,e=[],i.O=(t,o,n,r)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,n,r]=e[d],a=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](o[c])))?o.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var s={};t=t||[null,o({}),o([]),o(o)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,i.d(r,s),r},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/dist/",(()=>{var e={72269:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[s,a,c]=o,l=0;if(s.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var d=c(i)}for(t&&t(o);l<s.length;l++)r=s[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},o=self.webpackChunkvkweb=self.webpackChunkvkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=i.O(void 0,[213,95167],(()=>i(663494)));s=i.O(s)})();