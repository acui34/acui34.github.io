try{(window["WAFQualtricsWebpackJsonP-cloud-1.33.0"]=window["WAFQualtricsWebpackJsonP-cloud-1.33.0"]||[]).push([[12],{45:function(e,n,t){"use strict";t.r(n);var i=function(){return function(e,n){this.payload=n,this.type=e}}();t.d(n,"addPopunderEmbeddedDataHandler",function(){return o}),t.d(n,"updatePopunderEDCallback",function(){return a});var o=function(e){var n=window.QSI,t=n.util,i=n.windowHandler,o=n.dbg;t.observe(window,"beforeunload",e,!0);try{i.setupWindowHandles()}catch(e){o.e(e)}},d=function(e,n){if("string"==typeof e&&"string"==typeof n){var t=window.QSI.windowHandler,o=t.getWin(n);if(o){var d=new i("setTargetUrlInPlaceholderWindow",e),r=JSON.stringify(d),a=t.getWindowOrigin(window);o.postMessage(r,a)}}},r=function(e,n,t,o){if(void 0!==e&&void 0!==n&&"string"==typeof t&&"string"==typeof o){var d=window.QSI,r=d.windowHandler,a=d.dbg,w=r.getWin(t);if(w){var s=new i("setEmbeddedData",{key:e,value:n}),c=JSON.stringify(s);if(/targetwindow/.test(t))w.postMessage(c,o);else try{var l=w.document.getElementById("PopUnderTargetFrame");if(l&&l.contentWindow)l.contentWindow.postMessage(c,o)}catch(e){a.e(e)}}}},a=function(){var e=window.QSI.dbg;try{var n=window.QSI.windowHandler;n.removeClosedWindowHandles();var t=n.getOptInIDsAndWindowNames()||{},i=n.getOptInIDsAndTargetOrigins()||{};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=t[o],w=i[o]||"*",s=window.QSI.EmbeddedData.getEmbeddedData(o);if(!s||window.QSI.util.isObjectEmpty(s))continue;if(window.QSI.reg[o]&&/placeholderWindow/.test(a)){var c=window.QSI.reg[o].getTarget();return void d(c,a)}for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&r(l,s[l],a,w)}}catch(n){e.e(n)}}}}]);}catch(e){if(typeof QSI!=='undefined'&&QSI.dbg&&QSI.dbg.e){QSI.dbg.e(e);}}