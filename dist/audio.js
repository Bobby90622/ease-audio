!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.audioDom=new window.Audio,this.audio=this.audioCtx.createMediaElementSource(this.audioDom)}var e,i,o;return e=t,(i=[{key:"play",value:function(){}},{key:"pause",value:function(){}},{key:"stop",value:function(){}},{key:"unload",value:function(){}},{key:"seek",value:function(){}}])&&n(e.prototype,i),o&&n(e,o),t}();var a,s=function(t){return!!t&&{edge:t.indexOf("Edge")>-1,trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1===t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/)||!!t.match(/Mobile/g),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1===t.indexOf("Safari"),weixin:t.indexOf("MicroMessenger")>-1,weibo:t.indexOf("Weibo")>-1,facebook:t.indexOf("FBAN")>-1,twitter:t.indexOf("FBAN")>-1,qq:" qq"===t.match(/\sQQ/i),hmlyApp:/himalaya/i.test(t)}};try{a=window&&window.navigator&&window.navigator.userAgent}catch(t){console.error("[isIE]: ".concat(t))}var r=!!a&&s(a).trident;!!a&&s(a).edge;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t){if("object"!==u(t))return u(t);var e=Object.prototype.toString.call(t).length-1;return Object.prototype.toString.call(t).slice(8,e).toLowerCase()};function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=["loading","playing","paused","stoped","ended","loaderror","playerror"],f=["list-once","list-random","list-loop","single-once","single-loop"],v=["detail","warn","error"],k="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isInit=!1,this.init=this.init.bind(this),this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.toggle=this.toggle.bind(this),this.cut=this.cut.bind(this),this.load=this.load.bind(this),this.seek=this.seek.bind(this),this.rate=this.rate.bind(this),this.volume=this.volume.bind(this),this.muted=this.muted.bind(this),this.stop=this.stop.bind(this),this.unload=this.unload.bind(this),this.model=this.model.bind(this),this.init(e)}var e,i,n;return e=t,(i=[{key:"init",value:function(t){!this.isInit&&t&&this._checkType(t,"object",!0)&&"{}"!==JSON.stringify(t)&&(this._initial(t),this._registerEvent(t))}},{key:"play",value:function(){if(this._checkInit())return this._blockEvent(!1),this.audioH5.play(),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"pause",value:function(){if(this._checkInit())return this.audioH5.pause(),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"toggle",value:function(){if(this._checkInit()&&"stoped"!==this.playState&&"ended"!==this.playState&&"loaderror"!==this.playState&&"playerror"!==this.playState)return null===this.playState||"paused"===this.playState?this.play():this.pause(),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"cut",value:function(t){return this._checkType(t,"object",!0)&&this._updateConfig(t),this._cut({src:t&&t.src}),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"load",value:function(){if(this._checkInit())return this.audioH5.load(),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"seek",value:function(t){if(this._checkInit()){if(!this._checkType(t,"number"))return this.audioH5.currentTime;if(r&&!this.metaDataLoaded)return void(this.seekValue=t);var e=this.audioH5.duration;t>e&&(t=e),t<0&&(t=0),this.seekValue=null,this.audioH5.currentTime=t}}},{key:"rate",value:function(t){if(this._checkInit()){if(!this._checkType(t,"number"))return this.audioH5.playbackRate;t>2&&(t=2),t<.5&&(t=.5),this.audioH5.playbackRate=t,this._updateConfig({rate:t})}}},{key:"volume",value:function(t){if(this._checkInit()){if(!this._checkType(t,"number"))return this.audioH5.volume;t>1&&(t=1),t<0&&(t=0),this.audioH5.muted=!1,this.audioH5.volume=t,this._updateConfig({volume:t})}}},{key:"muted",value:function(t){if(this._checkInit()&&this._checkType(t,"boolean"))return this.audioH5.muted=t,this._updateConfig({muted:t}),this.playList[this.playIndex]&&this.playList[this.playIndex].id}},{key:"stop",value:function(){if(this._checkInit()&&this.playState!==p[3]){this._blockEvent(!0),this.audioH5.currentTime=0,this.audioH5.pause();var t=this.playList[this.playIndex]&&this.playList[this.playIndex].id;return this._setPlayState(p[3]),this.onStop&&this.onStop(t),t}}},{key:"unload",value:function(){this.stop(),this._unregisterEvent(),this.audioH5.src=k,this.audioH5=null,this.isInit=!1}},{key:"model",value:function(t){if(this._checkInit()){if(!this._checkType(t,"number"))return this.playModel;this.playModel=f[t]||this.playModel}}},{key:"_initial",value:function(t){this.config=t,this.playState=null,this.debug=t.debug||!1,this.logLevel=t.logLevel||v[2],this.playId=1e3,this.playModel=f[t.playModel&&this._checkType(t.playModel,"number")&&t.playModel||t.loop&&3||0],this.playIndex=0,this.playList=new Array(0),this.buffered=new Array(0),this.eventController=new Array(0),this.eventMethods={},this._createAudio(t)}},{key:"_createAudio",value:function(t){this._updatePlayList({type:"add",list:c(this._srcAssem(t.src))}),this.audioH5=new window.Audio,this.audioH5.autoplay=t.autoplay||!1,this.audioH5.loop=t.loop||!1,this.audioH5.src=this.playList[this.playIndex].src,this.audioH5.preload=t.preload||!1,this.audioH5.volume=t.volume||0===t.volume?0:1,this.audioH5.muted=t.muted||!1,this.audioH5.playbackRate=t.rate||t.playbackRate||1,this.audioH5.currentTime=t.seek||t.currentTime||0,this.audioH5.controls=!1,this.isInit=!0}},{key:"_srcAssem",value:function(t){var e=this;return t?this._checkType(t,"array",!0)?c(t.map(function(t){var i={id:e.playId,src:t};return e.playId++,i})):c([t].map(function(t){var i={id:e.playId,src:t};return e.playId++,i})):c([k].map(function(t){var i={id:e.playId,src:t};return e.playId++,i}))}},{key:"_updateConfig",value:function(t){this.config=h({},this.config,t)}},{key:"_setPlayState",value:function(t){if(this._checkType(t,"string")&&this.playState!==t){var e=this.audioH5.readyState,i=this.audioH5.paused,n=this.audioH5.ended,o=this.audioH5.seeking;switch(t){case p[0]:if(i||n||4===e)return!1;break;case p[1]:if(i||n||o||4!==e)return!1;break;case p[2]:if(n)return!1}return this._log("setPlayState - ".concat(t)),this.playState=t,this.playState}}},{key:"_setPlayIndex",value:function(t){var e=this.playModel,i=this.playList.length-1;if(0!==t)switch(e){case"list-once":this.playIndex=t||(i>=this.playIndex?++this.playIndex:this.playIndex);break;case"list-random":this.playIndex=t||Math.round(Math.random()*i);break;case"list-loop":this.playIndex=t||(i>this.playIndex?++this.playIndex:0);break;case"single-once":case"single-loop":this.playIndex=t||this.playIndex;break;default:this.playIndex=t||this.playIndex}else this.playIndex=0}},{key:"_resetPlayList",value:function(){this.playList=[],this._setPlayIndex(0)}},{key:"_updatePlayList",value:function(t){var e=t.type,i=t.list,n=t.index;switch(e){case"add":this.playList=[].concat(c(this.playList),c(i));break;case"delete":this.playList.splice(n,1);break;case"reset":this._resetPlayList();break;default:this._resetPlayList()}}},{key:"_cut",value:function(t){var e=t.src,i=t.autoCut;if(this._checkInit()&&"single-once"!==this.playModel){if(this.metaDataLoaded=!1,this.seekValue=null,this._setPlayIndex(e&&this.playList.length),!e&&!this.playList[this.playIndex])return this._setPlayState(p[4]);var n=e||this.playList[this.playIndex].src;if(i)this.stop(),this.audioH5.src=n,this.play();else{this.unload();var o=h({},this.config,{src:n});this._createAudio(o),this._registerEvent(o),this.play()}return this._setPlayState(p[1])}return this._setPlayState(p[4])}},{key:"_onplay",value:function(t){this.onPlay=t}},{key:"_onpause",value:function(t){this.onPause=t}},{key:"_onstop",value:function(t){this.onStop=t}},{key:"_onend",value:function(t){this.onEnd=t}},{key:"_onload",value:function(t){this.onLoad=t}},{key:"_onprogress",value:function(t){this.onProgress=t}},{key:"_onvolume",value:function(t){this.onVolume=t}},{key:"_onseek",value:function(t){this.onSeek=t}},{key:"_onrate",value:function(t){this.onRate=t}},{key:"_ontimeupdate",value:function(t){this.onTimeupdate=t}},{key:"_onloaderror",value:function(t){this.onLoadError=t}},{key:"_onplayerror",value:function(t){this.onPlayError=t}},{key:"_bindEventCallback",value:function(t){var e=this;Object.keys(t).forEach(function(i){if(0===i.indexOf("on")){var n="_".concat(i);e[n]&&e[n](t[i])}})}},{key:"_registerEvent",value:function(t){var e=this,i=function(t,i){return function(n){if(e._triggerEvent(i))return t&&t(n),!0}};for(var n in this._bindEventCallback(t),this.eventMethods={loadstart:function(t){e.playState===p[1]&&e._setPlayState(p[0]),e.onLoad&&e.onLoad(t)},playing:function(t){e._setPlayState(p[1]),e.onPlay&&e.onPlay(t)},canplaythrough:function(t){e.playState===p[0]&&e._setPlayState(p[1])},pause:function(t){e._setPlayState(p[2]),e.onPause&&e.onPause(t)},ended:function(t){e.isEnd?e.isEnd=!1:(e.isEnd=!0,e._cut({autoCut:!0}),e.onEnd&&e.onEnd(t))},error:function(t){e._setPlayState(p[5]),e.onLoadError&&e.onLoadError(t)},stalled:function(t){e._setPlayState(p[6]),e.onPlayError&&e.onPlayError(t)},progress:function(t){var i=t.target.buffered,n=t.total||1,o=0,a=t.loaded||0,s=a/n;if(i&&i.length){for(var r=0,u=i.length;r<u;r++)e.buffered.push({start:1e3*i.start(r),end:1e3*i.end(r)});o=1e3*(i.end(0)-i.start(0)),s=(a=Math.min(1,o/(1e3*t.target.duration)))/n}e.onProgress&&e.onProgress({e:t,progress:s})},durationchange:function(t){},loadedmetadata:function(t){e.metaDataLoaded=!0,e.seekValue&&e.seek(e.seekValue)},loadeddata:function(t){},timeupdate:function(t){e.playState===p[0]&&(e._log("timeupdate's playing"),e._setPlayState(p[1]),e.onPlay&&e.onPlay(t)),e.audioH5.duration&&e.audioH5.currentTime===e.audioH5.duration&&(e._log("timeupdate's ended"),e.isEnd?e.isEnd=!1:(e.isEnd=!0,e._cut({autoCut:!0}),e.onEnd&&e.onEnd(t))),e.onTimeupdate&&e.onTimeupdate(t)},seeking:function(t){e.onSeek&&e.onSeek(t)},seeked:function(t){},play:function(t){},volumechange:function(t){e.onVolume&&e.onVolume(t)},ratechange:function(t){e.onRate&&e.onRate(t)},abort:function(t){},suspend:function(t){}},this.eventMethods)this.eventMethods[n]=i(this.eventMethods[n],n);for(var o in this.eventMethods)this._blockEvent(!1),this._bindEvent(this.eventMethods[o],o)}},{key:"_blockEvent",value:function(t){if(this._checkInit())for(var e in this.eventMethods)this._eventController(e,!t)}},{key:"_unregisterEvent",value:function(){if(this._checkInit())for(var t in this.eventMethods)this._removeEvent(this.eventMethods[t],t)}},{key:"_triggerEvent",value:function(t){return!!this.eventController[t]&&("detail"===this.logLevel&&this._log("trigger ".concat(t," event")),!0)}},{key:"_eventController",value:function(t,e){this.eventController[t]=e}},{key:"_bindEvent",value:function(t,e){if(!this._checkType(e,"string"))return this._logErr("[bind event name is not string");this._checkType(t,"function")&&function(t,e,i){if(!window)return!1;var n=i||window;window.addEventListener?n.addEventListener(t,e,!1):n.attachEvent("on".concat(t),e)}(e,t,this.audioH5)}},{key:"_removeEvent",value:function(t,e){if(!this._checkType(e,"string"))return this._logErr("[unbind event name is not string");this._checkType(t,"function")&&function(t,e,i){if(!window)return!1;var n=i||window;window.removeEventListener?n.removeEventListener(t,e,!1):n.detachEvent("on".concat(t),e)}(e,t,this.audioH5)}},{key:"_checkType",value:function(t,e,i){return"string"==typeof e&&(l(t)===e||(!i&&this._logErr("Your parameter(".concat(t,") type is ").concat(l(t),", please pass the ").concat(e," type")),!1))}},{key:"_checkInit",value:function(){return!!this.isInit||(this._logErr("The Audio haven't been initiated"),!1)}},{key:"_log",value:function(t){var e="detail"===this.logLevel||"warn"===this.logLevel;return this.debug&&e&&console.log("[EASE_AUDIO_H5 MESSAGE]:",t)}},{key:"_logErr",value:function(t){return this.debug&&console.error("[EASE_AUDIO_H5 ERROR]:",t)}},{key:"duration",get:function(){return this.audioH5.duration}},{key:"setAudioConfig",set:function(t){var e=t.prop,i=t.value;this.audioH5[e]&&!this._checkType(this.audioH5[e],"function")&&(this.audioH5[e]=i,this._updateConfig({prop:i}))}}])&&y(e.prototype,i),n&&y(e,n),t}();function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"EaseAudio",function(){return _});var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.audio=this._createAudio(e),this.init=this.audio.init,this.play=this.audio.play,this.pause=this.audio.pause,this.toggle=this.audio.toggle,this.cut=this.audio.cut,this.load=this.audio.load,this.seek=this.audio.seek,this.volume=this.audio.volume,this.muted=this.audio.muted,this.stop=this.audio.stop,this.unload=this.audio.unload,this.model=this.audio.model}var e,i,n;return e=t,(i=[{key:"_createAudio",value:function(t){var e,i=(t||{}).usingWebAudio;try{e=i&&(window.AudioContext||window.webkitAudioContext)?new o(t):window.Audio?new b(t):null}catch(t){console.error("[EASE_AUDIO ERROR]:",t),e=null}return e}},{key:"duration",get:function(){return this.audio.duration}},{key:"playState",get:function(){return this.audio.playState}},{key:"playId",get:function(){return this.audio.playList[this.audio.playIndex].id}},{key:"playList",get:function(){return this.audio.playList}},{key:"networkState",get:function(){return this.audio.networkState}}])&&g(e.prototype,i),n&&g(e,n),t}();e.default=_},,function(t,e,i){i(3)},function(t,e,i){(function(e){t.exports=e.EaseAudio=i(0)}).call(this,i(4))},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i}])});