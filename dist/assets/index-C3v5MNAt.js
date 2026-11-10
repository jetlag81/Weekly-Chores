(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const K of document.querySelectorAll('link[rel="modulepreload"]'))V(K);new MutationObserver(K=>{for(const $ of K)if($.type==="childList")for(const Q of $.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&V(Q)}).observe(document,{childList:!0,subtree:!0});function v(K){const $={};return K.integrity&&($.integrity=K.integrity),K.referrerPolicy&&($.referrerPolicy=K.referrerPolicy),K.crossOrigin==="use-credentials"?$.credentials="include":K.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function V(K){if(K.ep)return;K.ep=!0;const $=v(K);fetch(K.href,$)}})();function Ou(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var td={exports:{}},xa={},rd={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu;function Bh(){if(xu)return $e;xu=1;var b=Symbol.for("react.element"),_=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Q=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.iterator;function ee(x){return x===null||typeof x!="object"?null:(x=O&&x[O]||x["@@iterator"],typeof x=="function"?x:null)}var we={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},We=Object.assign,xe={};function te(x,R,ye){this.props=x,this.context=R,this.refs=xe,this.updater=ye||we}te.prototype.isReactComponent={},te.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},te.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Pe(){}Pe.prototype=te.prototype;function Ee(x,R,ye){this.props=x,this.context=R,this.refs=xe,this.updater=ye||we}var re=Ee.prototype=new Pe;re.constructor=Ee,We(re,te.prototype),re.isPureReactComponent=!0;var pe=Array.isArray,tt=Object.prototype.hasOwnProperty,lt={current:null},Je={key:!0,ref:!0,__self:!0,__source:!0};function Ge(x,R,ye){var be,je={},Ce=null,De=null;if(R!=null)for(be in R.ref!==void 0&&(De=R.ref),R.key!==void 0&&(Ce=""+R.key),R)tt.call(R,be)&&!Je.hasOwnProperty(be)&&(je[be]=R[be]);var He=arguments.length-2;if(He===1)je.children=ye;else if(1<He){for(var Be=Array(He),pt=0;pt<He;pt++)Be[pt]=arguments[pt+2];je.children=Be}if(x&&x.defaultProps)for(be in He=x.defaultProps,He)je[be]===void 0&&(je[be]=He[be]);return{$$typeof:b,type:x,key:Ce,ref:De,props:je,_owner:lt.current}}function Re(x,R){return{$$typeof:b,type:x.type,key:R,ref:x.ref,props:x.props,_owner:x._owner}}function ke(x){return typeof x=="object"&&x!==null&&x.$$typeof===b}function Ye(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ye){return R[ye]})}var Ae=/\/+/g;function ze(x,R){return typeof x=="object"&&x!==null&&x.key!=null?Ye(""+x.key):R.toString(36)}function Oe(x,R,ye,be,je){var Ce=typeof x;(Ce==="undefined"||Ce==="boolean")&&(x=null);var De=!1;if(x===null)De=!0;else switch(Ce){case"string":case"number":De=!0;break;case"object":switch(x.$$typeof){case b:case _:De=!0}}if(De)return De=x,je=je(De),x=be===""?"."+ze(De,0):be,pe(je)?(ye="",x!=null&&(ye=x.replace(Ae,"$&/")+"/"),Oe(je,R,ye,"",function(pt){return pt})):je!=null&&(ke(je)&&(je=Re(je,ye+(!je.key||De&&De.key===je.key?"":(""+je.key).replace(Ae,"$&/")+"/")+x)),R.push(je)),1;if(De=0,be=be===""?".":be+":",pe(x))for(var He=0;He<x.length;He++){Ce=x[He];var Be=be+ze(Ce,He);De+=Oe(Ce,R,ye,Be,je)}else if(Be=ee(x),typeof Be=="function")for(x=Be.call(x),He=0;!(Ce=x.next()).done;)Ce=Ce.value,Be=be+ze(Ce,He++),De+=Oe(Ce,R,ye,Be,je);else if(Ce==="object")throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return De}function oe(x,R,ye){if(x==null)return x;var be=[],je=0;return Oe(x,be,"","",function(Ce){return R.call(ye,Ce,je++)}),be}function ve(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(ye){(x._status===0||x._status===-1)&&(x._status=1,x._result=ye)},function(ye){(x._status===0||x._status===-1)&&(x._status=2,x._result=ye)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var le={current:null},L={transition:null},Y={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:L,ReactCurrentOwner:lt};function U(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:oe,forEach:function(x,R,ye){oe(x,function(){R.apply(this,arguments)},ye)},count:function(x){var R=0;return oe(x,function(){R++}),R},toArray:function(x){return oe(x,function(R){return R})||[]},only:function(x){if(!ke(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},$e.Component=te,$e.Fragment=v,$e.Profiler=K,$e.PureComponent=Ee,$e.StrictMode=V,$e.Suspense=ne,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,$e.act=U,$e.cloneElement=function(x,R,ye){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var be=We({},x.props),je=x.key,Ce=x.ref,De=x._owner;if(R!=null){if(R.ref!==void 0&&(Ce=R.ref,De=lt.current),R.key!==void 0&&(je=""+R.key),x.type&&x.type.defaultProps)var He=x.type.defaultProps;for(Be in R)tt.call(R,Be)&&!Je.hasOwnProperty(Be)&&(be[Be]=R[Be]===void 0&&He!==void 0?He[Be]:R[Be])}var Be=arguments.length-2;if(Be===1)be.children=ye;else if(1<Be){He=Array(Be);for(var pt=0;pt<Be;pt++)He[pt]=arguments[pt+2];be.children=He}return{$$typeof:b,type:x.type,key:je,ref:Ce,props:be,_owner:De}},$e.createContext=function(x){return x={$$typeof:Q,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:$,_context:x},x.Consumer=x},$e.createElement=Ge,$e.createFactory=function(x){var R=Ge.bind(null,x);return R.type=x,R},$e.createRef=function(){return{current:null}},$e.forwardRef=function(x){return{$$typeof:de,render:x}},$e.isValidElement=ke,$e.lazy=function(x){return{$$typeof:H,_payload:{_status:-1,_result:x},_init:ve}},$e.memo=function(x,R){return{$$typeof:M,type:x,compare:R===void 0?null:R}},$e.startTransition=function(x){var R=L.transition;L.transition={};try{x()}finally{L.transition=R}},$e.unstable_act=U,$e.useCallback=function(x,R){return le.current.useCallback(x,R)},$e.useContext=function(x){return le.current.useContext(x)},$e.useDebugValue=function(){},$e.useDeferredValue=function(x){return le.current.useDeferredValue(x)},$e.useEffect=function(x,R){return le.current.useEffect(x,R)},$e.useId=function(){return le.current.useId()},$e.useImperativeHandle=function(x,R,ye){return le.current.useImperativeHandle(x,R,ye)},$e.useInsertionEffect=function(x,R){return le.current.useInsertionEffect(x,R)},$e.useLayoutEffect=function(x,R){return le.current.useLayoutEffect(x,R)},$e.useMemo=function(x,R){return le.current.useMemo(x,R)},$e.useReducer=function(x,R,ye){return le.current.useReducer(x,R,ye)},$e.useRef=function(x){return le.current.useRef(x)},$e.useState=function(x){return le.current.useState(x)},$e.useSyncExternalStore=function(x,R,ye){return le.current.useSyncExternalStore(x,R,ye)},$e.useTransition=function(){return le.current.useTransition()},$e.version="18.3.1",$e}var yu;function xd(){return yu||(yu=1,rd.exports=Bh()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function qh(){if(gu)return xa;gu=1;var b=xd(),_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,K=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function Q(de,ne,M){var H,O={},ee=null,we=null;M!==void 0&&(ee=""+M),ne.key!==void 0&&(ee=""+ne.key),ne.ref!==void 0&&(we=ne.ref);for(H in ne)V.call(ne,H)&&!$.hasOwnProperty(H)&&(O[H]=ne[H]);if(de&&de.defaultProps)for(H in ne=de.defaultProps,ne)O[H]===void 0&&(O[H]=ne[H]);return{$$typeof:_,type:de,key:ee,ref:we,props:O,_owner:K.current}}return xa.Fragment=v,xa.jsx=Q,xa.jsxs=Q,xa}var wu;function $h(){return wu||(wu=1,td.exports=qh()),td.exports}var n=$h(),F=xd();const ao=Ou(F);var Nl={},nd={exports:{}},sr={},od={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function Hh(){return bu||(bu=1,(function(b){function _(L,Y){var U=L.length;L.push(Y);e:for(;0<U;){var x=U-1>>>1,R=L[x];if(0<K(R,Y))L[x]=Y,L[U]=R,U=x;else break e}}function v(L){return L.length===0?null:L[0]}function V(L){if(L.length===0)return null;var Y=L[0],U=L.pop();if(U!==Y){L[0]=U;e:for(var x=0,R=L.length,ye=R>>>1;x<ye;){var be=2*(x+1)-1,je=L[be],Ce=be+1,De=L[Ce];if(0>K(je,U))Ce<R&&0>K(De,je)?(L[x]=De,L[Ce]=U,x=Ce):(L[x]=je,L[be]=U,x=be);else if(Ce<R&&0>K(De,U))L[x]=De,L[Ce]=U,x=Ce;else break e}}return Y}function K(L,Y){var U=L.sortIndex-Y.sortIndex;return U!==0?U:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var $=performance;b.unstable_now=function(){return $.now()}}else{var Q=Date,de=Q.now();b.unstable_now=function(){return Q.now()-de}}var ne=[],M=[],H=1,O=null,ee=3,we=!1,We=!1,xe=!1,te=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(L){for(var Y=v(M);Y!==null;){if(Y.callback===null)V(M);else if(Y.startTime<=L)V(M),Y.sortIndex=Y.expirationTime,_(ne,Y);else break;Y=v(M)}}function pe(L){if(xe=!1,re(L),!We)if(v(ne)!==null)We=!0,ve(tt);else{var Y=v(M);Y!==null&&le(pe,Y.startTime-L)}}function tt(L,Y){We=!1,xe&&(xe=!1,Pe(Ge),Ge=-1),we=!0;var U=ee;try{for(re(Y),O=v(ne);O!==null&&(!(O.expirationTime>Y)||L&&!Ye());){var x=O.callback;if(typeof x=="function"){O.callback=null,ee=O.priorityLevel;var R=x(O.expirationTime<=Y);Y=b.unstable_now(),typeof R=="function"?O.callback=R:O===v(ne)&&V(ne),re(Y)}else V(ne);O=v(ne)}if(O!==null)var ye=!0;else{var be=v(M);be!==null&&le(pe,be.startTime-Y),ye=!1}return ye}finally{O=null,ee=U,we=!1}}var lt=!1,Je=null,Ge=-1,Re=5,ke=-1;function Ye(){return!(b.unstable_now()-ke<Re)}function Ae(){if(Je!==null){var L=b.unstable_now();ke=L;var Y=!0;try{Y=Je(!0,L)}finally{Y?ze():(lt=!1,Je=null)}}else lt=!1}var ze;if(typeof Ee=="function")ze=function(){Ee(Ae)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,oe=Oe.port2;Oe.port1.onmessage=Ae,ze=function(){oe.postMessage(null)}}else ze=function(){te(Ae,0)};function ve(L){Je=L,lt||(lt=!0,ze())}function le(L,Y){Ge=te(function(){L(b.unstable_now())},Y)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(L){L.callback=null},b.unstable_continueExecution=function(){We||we||(We=!0,ve(tt))},b.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<L?Math.floor(1e3/L):5},b.unstable_getCurrentPriorityLevel=function(){return ee},b.unstable_getFirstCallbackNode=function(){return v(ne)},b.unstable_next=function(L){switch(ee){case 1:case 2:case 3:var Y=3;break;default:Y=ee}var U=ee;ee=Y;try{return L()}finally{ee=U}},b.unstable_pauseExecution=function(){},b.unstable_requestPaint=function(){},b.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=ee;ee=L;try{return Y()}finally{ee=U}},b.unstable_scheduleCallback=function(L,Y,U){var x=b.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?x+U:x):U=x,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,L={id:H++,callback:Y,priorityLevel:L,startTime:U,expirationTime:R,sortIndex:-1},U>x?(L.sortIndex=U,_(M,L),v(ne)===null&&L===v(M)&&(xe?(Pe(Ge),Ge=-1):xe=!0,le(pe,U-x))):(L.sortIndex=R,_(ne,L),We||we||(We=!0,ve(tt))),L},b.unstable_shouldYield=Ye,b.unstable_wrapCallback=function(L){var Y=ee;return function(){var U=ee;ee=Y;try{return L.apply(this,arguments)}finally{ee=U}}}})(sd)),sd}var _u;function zh(){return _u||(_u=1,od.exports=Hh()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu;function Gh(){if(vu)return sr;vu=1;var b=xd(),_=zh();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V=new Set,K={};function $(e,t){Q(e,t),Q(e+"Capture",t)}function Q(e,t){for(K[e]=t,e=0;e<t.length;e++)V.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},O={};function ee(e){return ne.call(O,e)?!0:ne.call(H,e)?!1:M.test(e)?O[e]=!0:(H[e]=!0,!1)}function we(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function We(e,t,r,o){if(t===null||typeof t>"u"||we(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,r,o,a,l,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=p}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new xe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new xe(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new xe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){te[e]=new xe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){te[e]=new xe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){te[e]=new xe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){te[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pe=/[\-:]([a-z])/g;function Ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pe,Ee);te[t]=new xe(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pe,Ee);te[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pe,Ee);te[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){te[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)}),te.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){te[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,o){var a=te.hasOwnProperty(t)?te[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(We(t,r,a,o)&&(r=null),o||a===null?ee(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,o=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var pe=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),lt=Symbol.for("react.portal"),Je=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Ye=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),L=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,x;function R(e){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ye=!1;function be(e,t){if(!e||ye)return"";ye=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),l=o.stack.split(`
`),p=a.length-1,y=l.length-1;1<=p&&0<=y&&a[p]!==l[y];)y--;for(;1<=p&&0<=y;p--,y--)if(a[p]!==l[y]){if(p!==1||y!==1)do if(p--,y--,0>y||a[p]!==l[y]){var k=`
`+a[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=y);break}}}finally{ye=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function je(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=be(e.type,!1),e;case 11:return e=be(e.type.render,!1),e;case 1:return e=be(e.type,!0),e;default:return""}}function Ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Je:return"Fragment";case lt:return"Portal";case Re:return"Profiler";case Ge:return"StrictMode";case ze:return"Suspense";case Oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ye:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}function De(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function He(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pt(e){var t=Be(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){o=""+p,l.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||(e._valueTracker=pt(e))}function pr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Be(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function en(e,t){var r=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function _t(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=He(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jn(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function it(e,t){jn(e,t);var r=He(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mt(e,t.type,r):t.hasOwnProperty("defaultValue")&&mt(e,t.type,He(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kr(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function mt(e,t,r){(t!=="number"||qt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var tn=Array.isArray;function Jt(e,t,r,o){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&o&&(e[r].defaultSelected=!0)}else{for(r=""+He(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ft(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(v(92));if(tn(r)){if(1<r.length)throw Error(v(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:He(r)}}function rn(e,t){var r=He(t.value),o=He(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,ba=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_a=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){_a.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function ar(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function nn(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=ar(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,a):e[r]=a}}var Ds=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(Ds[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function fr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nr=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,xr=null,on=null;function qo(e){if(e=ta(e)){if(typeof Bo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Ka(t),Bo(e.stateNode,e.type,t))}}function Ts(e){xr?on?on.push(e):on=[e]:xr=e}function $o(){if(xr){var e=xr,t=on;if(on=xr=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Ho(e,t){return e(t)}function va(){}var po=!1;function ka(e,t,r){if(po)return e(t,r);po=!0;try{return Ho(e,t,r)}finally{po=!1,(xr!==null||on!==null)&&(va(),$o())}}function qr(e,t){var r=e.stateNode;if(r===null)return null;var o=Ka(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(v(231,t,typeof r));return r}var Es=!1;if(de)try{var En={};Object.defineProperty(En,"passive",{get:function(){Es=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Es=!1}function Ms(e,t,r,o,a,l,p,y,k){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(q){this.onError(q)}}var mo=!1,$t=null,Mn=!1,yr=null,Rs={onError:function(e){mo=!0,$t=e}};function Ca(e,t,r,o,a,l,p,y,k){mo=!1,$t=null,Ms.apply(Rs,arguments)}function fo(e,t,r,o,a,l,p,y,k){if(Ca.apply(this,arguments),mo){if(mo){var E=$t;mo=!1,$t=null}else throw Error(v(198));Mn||(Mn=!0,yr=E)}}function Sr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ls(e){if(Sr(e)!==e)throw Error(v(188))}function fe(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(v(188));return t!==e?null:e}for(var r=e,o=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Ls(a),e;if(l===o)return Ls(a),t;l=l.sibling}throw Error(v(188))}if(r.return!==o.return)r=a,o=l;else{for(var p=!1,y=a.child;y;){if(y===r){p=!0,r=a,o=l;break}if(y===o){p=!0,o=a,r=l;break}y=y.sibling}if(!p){for(y=l.child;y;){if(y===r){p=!0,r=l,o=a;break}if(y===o){p=!0,o=l,r=a;break}y=y.sibling}if(!p)throw Error(v(189))}}if(r.alternate!==o)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?e:t}function zo(e){return e=fe(e),e!==null?Sa(e):null}function Sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sa(e);if(t!==null)return t;e=e.sibling}return null}var Fs=_.unstable_scheduleCallback,Is=_.unstable_cancelCallback,Go=_.unstable_shouldYield,Rn=_.unstable_requestPaint,ot=_.unstable_now,Ws=_.unstable_getCurrentPriorityLevel,Ar=_.unstable_ImmediatePriority,Ln=_.unstable_UserBlockingPriority,$r=_.unstable_NormalPriority,Os=_.unstable_LowPriority,Ps=_.unstable_IdlePriority,Dr=null,qe=null;function It(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Dr,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:xo,jr=Math.log,Aa=Math.LN2;function xo(e){return e>>>=0,e===0?32:31-(jr(e)/Aa|0)|0}var Ze=64,Ht=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,p=r&268435455;if(p!==0){var y=p&~a;y!==0?o=yo(y):(l&=p,l!==0&&(o=yo(l)))}else p=r&~a,p!==0?o=yo(p):l!==0&&(o=yo(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Wt(t),a=1<<r,o|=e[r],t&=~a;return o}function Tl(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hr(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var p=31-Wt(l),y=1<<p,k=a[p];k===-1?((y&r)===0||(y&o)!==0)&&(a[p]=Tl(y,t)):k<=t&&(e.expiredLanes|=y),l&=~y}}function sn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tr(){var e=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),e}function an(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function gd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Wt(r),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,r&=~l}}function Ks(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Wt(r),a=1<<o;a&t|e[o]&t&&(e[o]|=t),r&=~a}}var Ue=0;function Xt(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ln,Bs,dn,cn,go,qs=!1,un=[],Er=null,Mr=null,lr=null,hn=new Map,Yo=new Map,pn=[],gr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ft(e,t){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(t.pointerId)}}function vt(e,t,r,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ta(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Da(e,t,r,o,a){switch(t){case"focusin":return Er=vt(Er,e,t,r,o,a),!0;case"dragenter":return Mr=vt(Mr,e,t,r,o,a),!0;case"mouseover":return lr=vt(lr,e,t,r,o,a),!0;case"pointerover":var l=a.pointerId;return hn.set(l,vt(hn.get(l)||null,e,t,r,o,a)),!0;case"gotpointercapture":return l=a.pointerId,Yo.set(l,vt(Yo.get(l)||null,e,t,r,o,a)),!0}return!1}function jt(e){var t=Ao(e.target);if(t!==null){var r=Sr(t);if(r!==null){if(t=r.tag,t===13){if(t=Na(r),t!==null){e.blockedOn=t,go(e.priority,function(){dn(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Nr=o,r.target.dispatchEvent(o),Nr=null}else return t=ta(r),t!==null&&Bs(t),e.blockedOn=r,!1;t.shift()}return!0}function Rr(e,t,r){mn(e)&&r.delete(t)}function wo(){qs=!1,Er!==null&&mn(Er)&&(Er=null),Mr!==null&&mn(Mr)&&(Mr=null),lr!==null&&mn(lr)&&(lr=null),hn.forEach(Rr),Yo.forEach(Rr)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,wo)))}function ir(e){function t(a){return Fn(a,e)}if(0<un.length){Fn(un[0],e);for(var r=1;r<un.length;r++){var o=un[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Er!==null&&Fn(Er,e),Mr!==null&&Fn(Mr,e),lr!==null&&Fn(lr,e),hn.forEach(t),Yo.forEach(t),r=0;r<pn.length;r++)o=pn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)jt(r),r.blockedOn===null&&pn.shift()}var zr=pe.ReactCurrentBatchConfig,bo=!0;function ja(e,t,r,o){var a=Ue,l=zr.transition;zr.transition=null;try{Ue=1,In(e,t,r,o)}finally{Ue=a,zr.transition=l}}function El(e,t,r,o){var a=Ue,l=zr.transition;zr.transition=null;try{Ue=4,In(e,t,r,o)}finally{Ue=a,zr.transition=l}}function In(e,t,r,o){if(bo){var a=Zt(e,t,r,o);if(a===null)zl(e,t,o,Wn,r),ft(e,o);else if(Da(a,e,t,r,o))o.stopPropagation();else if(ft(e,o),t&4&&-1<gr.indexOf(e)){for(;a!==null;){var l=ta(a);if(l!==null&&ln(l),l=Zt(e,t,r,o),l===null&&zl(e,t,o,Wn,r),l===a)break;a=l}a!==null&&o.stopPropagation()}else zl(e,t,o,null,r)}}var Wn=null;function Zt(e,t,r,o){if(Wn=null,e=ho(o),e=Ao(e),e!==null)if(t=Sr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Na(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wn=e,null}function $s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ws()){case Ar:return 1;case Ln:return 4;case $r:case Os:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var Gr=null,Ur=null,_o=null;function Hs(){if(_o)return _o;var e,t=Ur,r=t.length,o,a="value"in Gr?Gr.value:Gr.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(o=1;o<=p&&t[r-o]===a[l-o];o++);return _o=a.slice(e,1<o?1-o:void 0)}function On(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function Ta(){return!1}function zt(e){function t(r,o,a,l,p){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(l):l[y]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?vo:Ta,this.isPropagationStopped=Ta,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=zt(fn),Kn=U({},fn,{view:0,detail:0}),Ea=zt(Kn),zs,Gs,Vr,Qo=U({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(zs=e.screenX-Vr.screenX,Gs=e.screenY-Vr.screenY):Gs=zs=0,Vr=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Ma=zt(Qo),ko=U({},Qo,{dataTransfer:0}),Ml=zt(ko),Rl=U({},Kn,{relatedTarget:0}),Co=zt(Rl),Ll=U({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fl=zt(Ll),Lr=U({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bn=zt(Lr),Yr=U({},fn,{data:0}),Ra=zt(Yr),Il={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xn[e])?!!t[e]:!1}function i(){return s}var c=U({},Kn,{key:function(e){if(e.key){var t=Il[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=On(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i,charCode:function(e){return e.type==="keypress"?On(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?On(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m=zt(c),h=U({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u=zt(h),d=U({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i}),f=zt(d),g=U({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),N=zt(g),j=U({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=zt(j),w=[9,13,27,32],C=de&&"CompositionEvent"in window,I=null;de&&"documentMode"in document&&(I=document.documentMode);var z=de&&"TextEvent"in window&&!I,P=de&&(!C||I&&8<I&&11>=I),W=" ",J=!1;function Z(e,t){switch(e){case"keyup":return w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ue=!1;function Fe(e,t){switch(e){case"compositionend":return ce(t);case"keypress":return t.which!==32?null:(J=!0,W);case"textInput":return e=t.data,e===W&&J?null:e;default:return null}}function Ie(e,t){if(ue)return e==="compositionend"||!C&&Z(e,t)?(e=Hs(),_o=Ur=Gr=null,ue=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P&&t.locale!=="ko"?null:t.data;default:return null}}var Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _e(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Te[e.type]:t==="textarea"}function Ke(e,t,r,o){Ts(o),t=Wa(t,"onChange"),0<t.length&&(r=new Pn("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var st=null,et=null;function Tt(e){Md(e,0)}function Nt(e){var t=os(e);if(pr(t))return e}function Xe(e,t){if(e==="change")return t}var Us=!1;if(de){var Jo;if(de){var Xo="oninput"in document;if(!Xo){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Xo=typeof Vs.oninput=="function"}Jo=Xo}else Jo=!1;Us=Jo&&(!document.documentMode||9<document.documentMode)}function No(){st&&(st.detachEvent("onpropertychange",So),et=st=null)}function So(e){if(e.propertyName==="value"&&Nt(et)){var t=[];Ke(t,et,e,ho(e)),ka(Tt,t)}}function qn(e,t,r){e==="focusin"?(No(),st=t,et=r,st.attachEvent("onpropertychange",So)):e==="focusout"&&No()}function yn(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nt(et)}function $n(e,t){if(e==="click")return Nt(t)}function Ys(e,t){if(e==="input"||e==="change")return Nt(t)}function Zo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Zo;function Gt(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!ne.call(t,a)||!rt(e[a],t[a]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var r=wd(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wd(r)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=qt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=qt(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vu(e){var t=vd(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_d(r.ownerDocument.documentElement,r)){if(o!==null&&Ol(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=bd(r,l);var p=bd(r,o);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=de&&"documentMode"in document&&11>=document.documentMode,es=null,Pl=null,Qs=null,Kl=!1;function kd(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Kl||es==null||es!==qt(o)||(o=es,"selectionStart"in o&&Ol(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Gt(Qs,o)||(Qs=o,o=Wa(Pl,"onSelect"),0<o.length&&(t=new Pn("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=es)))}function La(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ts={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Bl={},Cd={};de&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Fa(e){if(Bl[e])return Bl[e];if(!ts[e])return e;var t=ts[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cd)return Bl[e]=t[r];return e}var Nd=Fa("animationend"),Sd=Fa("animationiteration"),Ad=Fa("animationstart"),Dd=Fa("transitionend"),jd=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){jd.set(e,t),$(t,[e])}for(var ql=0;ql<Td.length;ql++){var $l=Td[ql],Qu=$l.toLowerCase(),Ju=$l[0].toUpperCase()+$l.slice(1);Hn(Qu,"on"+Ju)}Hn(Nd,"onAnimationEnd"),Hn(Sd,"onAnimationIteration"),Hn(Ad,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Dd,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Ed(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,fo(o,t,void 0,e),e.currentTarget=null}function Md(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var p=o.length-1;0<=p;p--){var y=o[p],k=y.instance,E=y.currentTarget;if(y=y.listener,k!==l&&a.isPropagationStopped())break e;Ed(a,y,E),l=k}else for(p=0;p<o.length;p++){if(y=o[p],k=y.instance,E=y.currentTarget,y=y.listener,k!==l&&a.isPropagationStopped())break e;Ed(a,y,E),l=k}}}if(Mn)throw e=yr,Mn=!1,yr=null,e}function dt(e,t){var r=t[Jl];r===void 0&&(r=t[Jl]=new Set);var o=e+"__bubble";r.has(o)||(Rd(t,e,2,!1),r.add(o))}function Hl(e,t,r){var o=0;t&&(o|=4),Rd(r,e,o,t)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[Ia]){e[Ia]=!0,V.forEach(function(r){r!=="selectionchange"&&(Xu.has(r)||Hl(r,!1,e),Hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ia]||(t[Ia]=!0,Hl("selectionchange",!1,t))}}function Rd(e,t,r,o){switch($s(t)){case 1:var a=ja;break;case 4:a=El;break;default:a=In}r=a.bind(null,t,r,e),a=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function zl(e,t,r,o,a){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var y=o.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(p===4)for(p=o.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;p=p.return}for(;y!==null;){if(p=Ao(y),p===null)return;if(k=p.tag,k===5||k===6){o=l=p;continue e}y=y.parentNode}}o=o.return}ka(function(){var E=l,q=ho(r),G=[];e:{var B=jd.get(e);if(B!==void 0){var se=Pn,ie=e;switch(e){case"keypress":if(On(r)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ie="focus",se=Co;break;case"focusout":ie="blur",se=Co;break;case"beforeblur":case"afterblur":se=Co;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=f;break;case Nd:case Sd:case Ad:se=Fl;break;case Dd:se=N;break;case"scroll":se=Ea;break;case"wheel":se=A;break;case"copy":case"cut":case"paste":se=Bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=u}var he=(t&4)!==0,wt=!he&&e==="scroll",D=he?B!==null?B+"Capture":null:B;he=[];for(var S=E,T;S!==null;){T=S;var X=T.stateNode;if(T.tag===5&&X!==null&&(T=X,D!==null&&(X=qr(S,D),X!=null&&he.push(Zs(S,X,T)))),wt)break;S=S.return}0<he.length&&(B=new se(B,ie,null,r,q),G.push({event:B,listeners:he}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",B&&r!==Nr&&(ie=r.relatedTarget||r.fromElement)&&(Ao(ie)||ie[gn]))break e;if((se||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,se?(ie=r.relatedTarget||r.toElement,se=E,ie=ie?Ao(ie):null,ie!==null&&(wt=Sr(ie),ie!==wt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(se=null,ie=E),se!==ie)){if(he=Ma,X="onMouseLeave",D="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(he=u,X="onPointerLeave",D="onPointerEnter",S="pointer"),wt=se==null?B:os(se),T=ie==null?B:os(ie),B=new he(X,S+"leave",se,r,q),B.target=wt,B.relatedTarget=T,X=null,Ao(q)===E&&(he=new he(D,S+"enter",ie,r,q),he.target=T,he.relatedTarget=wt,X=he),wt=X,se&&ie)t:{for(he=se,D=ie,S=0,T=he;T;T=rs(T))S++;for(T=0,X=D;X;X=rs(X))T++;for(;0<S-T;)he=rs(he),S--;for(;0<T-S;)D=rs(D),T--;for(;S--;){if(he===D||D!==null&&he===D.alternate)break t;he=rs(he),D=rs(D)}he=null}else he=null;se!==null&&Ld(G,B,se,he,!1),ie!==null&&wt!==null&&Ld(G,wt,ie,he,!0)}}e:{if(B=E?os(E):window,se=B.nodeName&&B.nodeName.toLowerCase(),se==="select"||se==="input"&&B.type==="file")var me=Xe;else if(_e(B))if(Us)me=Ys;else{me=yn;var Ne=qn}else(se=B.nodeName)&&se.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(me=$n);if(me&&(me=me(e,E))){Ke(G,me,r,q);break e}Ne&&Ne(e,B,E),e==="focusout"&&(Ne=B._wrapperState)&&Ne.controlled&&B.type==="number"&&mt(B,"number",B.value)}switch(Ne=E?os(E):window,e){case"focusin":(_e(Ne)||Ne.contentEditable==="true")&&(es=Ne,Pl=E,Qs=null);break;case"focusout":Qs=Pl=es=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,kd(G,r,q);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":kd(G,r,q)}var Se;if(C)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else ue?Z(e,r)&&(Le="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Le="onCompositionStart");Le&&(P&&r.locale!=="ko"&&(ue||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&ue&&(Se=Hs()):(Gr=q,Ur="value"in Gr?Gr.value:Gr.textContent,ue=!0)),Ne=Wa(E,Le),0<Ne.length&&(Le=new Ra(Le,e,null,r,q),G.push({event:Le,listeners:Ne}),Se?Le.data=Se:(Se=ce(r),Se!==null&&(Le.data=Se)))),(Se=z?Fe(e,r):Ie(e,r))&&(E=Wa(E,"onBeforeInput"),0<E.length&&(q=new Ra("onBeforeInput","beforeinput",null,r,q),G.push({event:q,listeners:E}),q.data=Se))}Md(G,t)})}function Zs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=qr(e,r),l!=null&&o.unshift(Zs(e,l,a)),l=qr(e,t),l!=null&&o.push(Zs(e,l,a))),e=e.return}return o}function rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,r,o,a){for(var l=t._reactName,p=[];r!==null&&r!==o;){var y=r,k=y.alternate,E=y.stateNode;if(k!==null&&k===o)break;y.tag===5&&E!==null&&(y=E,a?(k=qr(r,l),k!=null&&p.unshift(Zs(r,k,y))):a||(k=qr(r,l),k!=null&&p.push(Zs(r,k,y)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var Zu=/\r\n?/g,eh=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(Zu,`
`).replace(eh,"")}function Oa(e,t,r){if(t=Fd(t),Fd(e)!==t&&r)throw Error(v(425))}function Pa(){}var Gl=null,Ul=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(nh)}:Yl;function nh(e){setTimeout(function(){throw e})}function Ql(e,t){var r=t,o=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){e.removeChild(a),ir(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);ir(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ns=Math.random().toString(36).slice(2),Qr="__reactFiber$"+ns,ea="__reactProps$"+ns,gn="__reactContainer$"+ns,Jl="__reactEvents$"+ns,oh="__reactListeners$"+ns,sh="__reactHandles$"+ns;function Ao(e){var t=e[Qr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gn]||r[Qr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wd(e);e!==null;){if(r=e[Qr])return r;e=Wd(e)}return t}e=r,r=e.parentNode}return null}function ta(e){return e=e[Qr]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function os(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Ka(e){return e[ea]||null}var Xl=[],ss=-1;function Gn(e){return{current:e}}function ct(e){0>ss||(e.current=Xl[ss],Xl[ss]=null,ss--)}function at(e,t){ss++,Xl[ss]=e.current,e.current=t}var Un={},Ot=Gn(Un),er=Gn(!1),Do=Un;function as(e,t){var r=e.type.contextTypes;if(!r)return Un;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function tr(e){return e=e.childContextTypes,e!=null}function Ba(){ct(er),ct(Ot)}function Od(e,t,r){if(Ot.current!==Un)throw Error(v(168));at(Ot,t),at(er,r)}function Pd(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(v(108,De(e)||"Unknown",a));return U({},r,o)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,Do=Ot.current,at(Ot,e),at(er,er.current),!0}function Kd(e,t,r){var o=e.stateNode;if(!o)throw Error(v(169));r?(e=Pd(e,t,Do),o.__reactInternalMemoizedMergedChildContext=e,ct(er),ct(Ot),at(Ot,e)):ct(er),at(er,r)}var wn=null,$a=!1,Zl=!1;function Bd(e){wn===null?wn=[e]:wn.push(e)}function ah(e){$a=!0,Bd(e)}function Vn(){if(!Zl&&wn!==null){Zl=!0;var e=0,t=Ue;try{var r=wn;for(Ue=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}wn=null,$a=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),Fs(Ar,Vn),a}finally{Ue=t,Zl=!1}}return null}var ls=[],is=0,Ha=null,za=0,wr=[],br=0,jo=null,bn=1,_n="";function To(e,t){ls[is++]=za,ls[is++]=Ha,Ha=e,za=t}function qd(e,t,r){wr[br++]=bn,wr[br++]=_n,wr[br++]=jo,jo=e;var o=bn;e=_n;var a=32-Wt(o)-1;o&=~(1<<a),r+=1;var l=32-Wt(t)+a;if(30<l){var p=a-a%5;l=(o&(1<<p)-1).toString(32),o>>=p,a-=p,bn=1<<32-Wt(t)+a|r<<a|o,_n=l+e}else bn=1<<l|r<<a|o,_n=e}function ei(e){e.return!==null&&(To(e,1),qd(e,1,0))}function ti(e){for(;e===Ha;)Ha=ls[--is],ls[is]=null,za=ls[--is],ls[is]=null;for(;e===jo;)jo=wr[--br],wr[br]=null,_n=wr[--br],wr[br]=null,bn=wr[--br],wr[br]=null}var dr=null,cr=null,ut=!1,Fr=null;function $d(e,t){var r=Cr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dr=e,cr=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dr=e,cr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jo!==null?{id:bn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Cr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dr=e,cr=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(ut){var t=cr;if(t){var r=t;if(!Hd(e,t)){if(ri(e))throw Error(v(418));t=zn(r.nextSibling);var o=dr;t&&Hd(e,t)?$d(o,r):(e.flags=e.flags&-4097|2,ut=!1,dr=e)}}else{if(ri(e))throw Error(v(418));e.flags=e.flags&-4097|2,ut=!1,dr=e}}}function zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dr=e}function Ga(e){if(e!==dr)return!1;if(!ut)return zd(e),ut=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=cr)){if(ri(e))throw Gd(),Error(v(418));for(;t;)$d(e,t),t=zn(t.nextSibling)}if(zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){cr=zn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}cr=null}}else cr=dr?zn(e.stateNode.nextSibling):null;return!0}function Gd(){for(var e=cr;e;)e=zn(e.nextSibling)}function ds(){cr=dr=null,ut=!1}function oi(e){Fr===null?Fr=[e]:Fr.push(e)}var lh=pe.ReactCurrentBatchConfig;function ra(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var o=r.stateNode}if(!o)throw Error(v(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(p){var y=a.refs;p===null?delete y[l]:y[l]=p},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Vd(e){function t(D,S){if(e){var T=D.deletions;T===null?(D.deletions=[S],D.flags|=16):T.push(S)}}function r(D,S){if(!e)return null;for(;S!==null;)t(D,S),S=S.sibling;return null}function o(D,S){for(D=new Map;S!==null;)S.key!==null?D.set(S.key,S):D.set(S.index,S),S=S.sibling;return D}function a(D,S){return D=ro(D,S),D.index=0,D.sibling=null,D}function l(D,S,T){return D.index=T,e?(T=D.alternate,T!==null?(T=T.index,T<S?(D.flags|=2,S):T):(D.flags|=2,S)):(D.flags|=1048576,S)}function p(D){return e&&D.alternate===null&&(D.flags|=2),D}function y(D,S,T,X){return S===null||S.tag!==6?(S=Yi(T,D.mode,X),S.return=D,S):(S=a(S,T),S.return=D,S)}function k(D,S,T,X){var me=T.type;return me===Je?q(D,S,T.props.children,X,T.key):S!==null&&(S.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ve&&Ud(me)===S.type)?(X=a(S,T.props),X.ref=ra(D,S,T),X.return=D,X):(X=yl(T.type,T.key,T.props,null,D.mode,X),X.ref=ra(D,S,T),X.return=D,X)}function E(D,S,T,X){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Qi(T,D.mode,X),S.return=D,S):(S=a(S,T.children||[]),S.return=D,S)}function q(D,S,T,X,me){return S===null||S.tag!==7?(S=Oo(T,D.mode,X,me),S.return=D,S):(S=a(S,T),S.return=D,S)}function G(D,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Yi(""+S,D.mode,T),S.return=D,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tt:return T=yl(S.type,S.key,S.props,null,D.mode,T),T.ref=ra(D,null,S),T.return=D,T;case lt:return S=Qi(S,D.mode,T),S.return=D,S;case ve:var X=S._init;return G(D,X(S._payload),T)}if(tn(S)||Y(S))return S=Oo(S,D.mode,T,null),S.return=D,S;Ua(D,S)}return null}function B(D,S,T,X){var me=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return me!==null?null:y(D,S,""+T,X);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case tt:return T.key===me?k(D,S,T,X):null;case lt:return T.key===me?E(D,S,T,X):null;case ve:return me=T._init,B(D,S,me(T._payload),X)}if(tn(T)||Y(T))return me!==null?null:q(D,S,T,X,null);Ua(D,T)}return null}function se(D,S,T,X,me){if(typeof X=="string"&&X!==""||typeof X=="number")return D=D.get(T)||null,y(S,D,""+X,me);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case tt:return D=D.get(X.key===null?T:X.key)||null,k(S,D,X,me);case lt:return D=D.get(X.key===null?T:X.key)||null,E(S,D,X,me);case ve:var Ne=X._init;return se(D,S,T,Ne(X._payload),me)}if(tn(X)||Y(X))return D=D.get(T)||null,q(S,D,X,me,null);Ua(S,X)}return null}function ie(D,S,T,X){for(var me=null,Ne=null,Se=S,Le=S=0,Dt=null;Se!==null&&Le<T.length;Le++){Se.index>Le?(Dt=Se,Se=null):Dt=Se.sibling;var Qe=B(D,Se,T[Le],X);if(Qe===null){Se===null&&(Se=Dt);break}e&&Se&&Qe.alternate===null&&t(D,Se),S=l(Qe,S,Le),Ne===null?me=Qe:Ne.sibling=Qe,Ne=Qe,Se=Dt}if(Le===T.length)return r(D,Se),ut&&To(D,Le),me;if(Se===null){for(;Le<T.length;Le++)Se=G(D,T[Le],X),Se!==null&&(S=l(Se,S,Le),Ne===null?me=Se:Ne.sibling=Se,Ne=Se);return ut&&To(D,Le),me}for(Se=o(D,Se);Le<T.length;Le++)Dt=se(Se,D,Le,T[Le],X),Dt!==null&&(e&&Dt.alternate!==null&&Se.delete(Dt.key===null?Le:Dt.key),S=l(Dt,S,Le),Ne===null?me=Dt:Ne.sibling=Dt,Ne=Dt);return e&&Se.forEach(function(no){return t(D,no)}),ut&&To(D,Le),me}function he(D,S,T,X){var me=Y(T);if(typeof me!="function")throw Error(v(150));if(T=me.call(T),T==null)throw Error(v(151));for(var Ne=me=null,Se=S,Le=S=0,Dt=null,Qe=T.next();Se!==null&&!Qe.done;Le++,Qe=T.next()){Se.index>Le?(Dt=Se,Se=null):Dt=Se.sibling;var no=B(D,Se,Qe.value,X);if(no===null){Se===null&&(Se=Dt);break}e&&Se&&no.alternate===null&&t(D,Se),S=l(no,S,Le),Ne===null?me=no:Ne.sibling=no,Ne=no,Se=Dt}if(Qe.done)return r(D,Se),ut&&To(D,Le),me;if(Se===null){for(;!Qe.done;Le++,Qe=T.next())Qe=G(D,Qe.value,X),Qe!==null&&(S=l(Qe,S,Le),Ne===null?me=Qe:Ne.sibling=Qe,Ne=Qe);return ut&&To(D,Le),me}for(Se=o(D,Se);!Qe.done;Le++,Qe=T.next())Qe=se(Se,D,Le,Qe.value,X),Qe!==null&&(e&&Qe.alternate!==null&&Se.delete(Qe.key===null?Le:Qe.key),S=l(Qe,S,Le),Ne===null?me=Qe:Ne.sibling=Qe,Ne=Qe);return e&&Se.forEach(function(Kh){return t(D,Kh)}),ut&&To(D,Le),me}function wt(D,S,T,X){if(typeof T=="object"&&T!==null&&T.type===Je&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case tt:e:{for(var me=T.key,Ne=S;Ne!==null;){if(Ne.key===me){if(me=T.type,me===Je){if(Ne.tag===7){r(D,Ne.sibling),S=a(Ne,T.props.children),S.return=D,D=S;break e}}else if(Ne.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ve&&Ud(me)===Ne.type){r(D,Ne.sibling),S=a(Ne,T.props),S.ref=ra(D,Ne,T),S.return=D,D=S;break e}r(D,Ne);break}else t(D,Ne);Ne=Ne.sibling}T.type===Je?(S=Oo(T.props.children,D.mode,X,T.key),S.return=D,D=S):(X=yl(T.type,T.key,T.props,null,D.mode,X),X.ref=ra(D,S,T),X.return=D,D=X)}return p(D);case lt:e:{for(Ne=T.key;S!==null;){if(S.key===Ne)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){r(D,S.sibling),S=a(S,T.children||[]),S.return=D,D=S;break e}else{r(D,S);break}else t(D,S);S=S.sibling}S=Qi(T,D.mode,X),S.return=D,D=S}return p(D);case ve:return Ne=T._init,wt(D,S,Ne(T._payload),X)}if(tn(T))return ie(D,S,T,X);if(Y(T))return he(D,S,T,X);Ua(D,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(r(D,S.sibling),S=a(S,T),S.return=D,D=S):(r(D,S),S=Yi(T,D.mode,X),S.return=D,D=S),p(D)):r(D,S)}return wt}var cs=Vd(!0),Yd=Vd(!1),Va=Gn(null),Ya=null,us=null,si=null;function ai(){si=us=Ya=null}function li(e){var t=Va.current;ct(Va),e._currentValue=t}function ii(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function hs(e,t){Ya=e,si=us=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rr=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},us===null){if(Ya===null)throw Error(v(308));us=e,Ya.dependencies={lanes:0,firstContext:e}}else us=us.next=e;return t}var Eo=null;function di(e){Eo===null?Eo=[e]:Eo.push(e)}function Qd(e,t,r,o){var a=t.interleaved;return a===null?(r.next=r,di(t)):(r.next=a.next,a.next=r),t.interleaved=r,vn(e,o)}function vn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Yn=!1;function ci(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,vn(e,r)}return a=o.interleaved,a===null?(t.next=t,di(o)):(t.next=a.next,a.next=t),o.interleaved=t,vn(e,r)}function Qa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ks(e,r)}}function Xd(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=p:l=l.next=p,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ja(e,t,r,o){var a=e.updateQueue;Yn=!1;var l=a.firstBaseUpdate,p=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var k=y,E=k.next;k.next=null,p===null?l=E:p.next=E,p=k;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==p&&(y===null?q.firstBaseUpdate=E:y.next=E,q.lastBaseUpdate=k))}if(l!==null){var G=a.baseState;p=0,q=E=k=null,y=l;do{var B=y.lane,se=y.eventTime;if((o&B)===B){q!==null&&(q=q.next={eventTime:se,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var ie=e,he=y;switch(B=t,se=r,he.tag){case 1:if(ie=he.payload,typeof ie=="function"){G=ie.call(se,G,B);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=he.payload,B=typeof ie=="function"?ie.call(se,G,B):ie,B==null)break e;G=U({},G,B);break e;case 2:Yn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[y]:B.push(y))}else se={eventTime:se,lane:B,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(E=q=se,k=G):q=q.next=se,p|=B;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;B=y,y=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if(q===null&&(k=G),a.baseState=k,a.firstBaseUpdate=E,a.lastBaseUpdate=q,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Lo|=p,e.lanes=p,e.memoizedState=G}}function Zd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var na={},Jr=Gn(na),oa=Gn(na),sa=Gn(na);function Mo(e){if(e===na)throw Error(v(174));return e}function ui(e,t){switch(at(sa,t),at(oa,e),at(Jr,na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:As(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=As(t,e)}ct(Jr),at(Jr,t)}function ps(){ct(Jr),ct(oa),ct(sa)}function ec(e){Mo(sa.current);var t=Mo(Jr.current),r=As(t,e.type);t!==r&&(at(oa,e),at(Jr,r))}function hi(e){oa.current===e&&(ct(Jr),ct(oa))}var xt=Gn(0);function Xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pi=[];function mi(){for(var e=0;e<pi.length;e++)pi[e]._workInProgressVersionPrimary=null;pi.length=0}var Za=pe.ReactCurrentDispatcher,fi=pe.ReactCurrentBatchConfig,Ro=0,yt=null,kt=null,St=null,el=!1,aa=!1,la=0,ih=0;function Pt(){throw Error(v(321))}function xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rt(e[r],t[r]))return!1;return!0}function yi(e,t,r,o,a,l){if(Ro=l,yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?hh:ph,e=r(o,a),aa){l=0;do{if(aa=!1,la=0,25<=l)throw Error(v(301));l+=1,St=kt=null,t.updateQueue=null,Za.current=mh,e=r(o,a)}while(aa)}if(Za.current=nl,t=kt!==null&&kt.next!==null,Ro=0,St=kt=yt=null,el=!1,t)throw Error(v(300));return e}function gi(){var e=la!==0;return la=0,e}function Xr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?yt.memoizedState=St=e:St=St.next=e,St}function vr(){if(kt===null){var e=yt.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=St===null?yt.memoizedState:St.next;if(t!==null)St=t,kt=e;else{if(e===null)throw Error(v(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},St===null?yt.memoizedState=St=e:St=St.next=e}return St}function ia(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=vr(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=kt,a=o.baseQueue,l=r.pending;if(l!==null){if(a!==null){var p=a.next;a.next=l.next,l.next=p}o.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,o=o.baseState;var y=p=null,k=null,E=l;do{var q=E.lane;if((Ro&q)===q)k!==null&&(k=k.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var G={lane:q,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};k===null?(y=k=G,p=o):k=k.next=G,yt.lanes|=q,Lo|=q}E=E.next}while(E!==null&&E!==l);k===null?p=o:k.next=y,rt(o,t.memoizedState)||(rr=!0),t.memoizedState=o,t.baseState=p,t.baseQueue=k,r.lastRenderedState=o}if(e=r.interleaved,e!==null){a=e;do l=a.lane,yt.lanes|=l,Lo|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function bi(e){var t=vr(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do l=e(l,p.action),p=p.next;while(p!==a);rt(l,t.memoizedState)||(rr=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,o]}function tc(){}function rc(e,t){var r=yt,o=vr(),a=t(),l=!rt(o.memoizedState,a);if(l&&(o.memoizedState=a,rr=!0),o=o.queue,_i(sc.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||St!==null&&St.memoizedState.tag&1){if(r.flags|=2048,da(9,oc.bind(null,r,o,a,t),void 0,null),At===null)throw Error(v(349));(Ro&30)!==0||nc(r,t,a)}return a}function nc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=yt.updateQueue,t===null?(t={lastEffect:null,stores:null},yt.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function oc(e,t,r,o){t.value=r,t.getSnapshot=o,ac(t)&&lc(e)}function sc(e,t,r){return r(function(){ac(t)&&lc(e)})}function ac(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rt(e,r)}catch{return!0}}function lc(e){var t=vn(e,1);t!==null&&Pr(t,e,1,-1)}function ic(e){var t=Xr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t.queue=e,e=e.dispatch=uh.bind(null,yt,e),[t.memoizedState,e]}function da(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=yt.updateQueue,t===null?(t={lastEffect:null,stores:null},yt.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function dc(){return vr().memoizedState}function tl(e,t,r,o){var a=Xr();yt.flags|=e,a.memoizedState=da(1|t,r,void 0,o===void 0?null:o)}function rl(e,t,r,o){var a=vr();o=o===void 0?null:o;var l=void 0;if(kt!==null){var p=kt.memoizedState;if(l=p.destroy,o!==null&&xi(o,p.deps)){a.memoizedState=da(t,r,l,o);return}}yt.flags|=e,a.memoizedState=da(1|t,r,l,o)}function cc(e,t){return tl(8390656,8,e,t)}function _i(e,t){return rl(2048,8,e,t)}function uc(e,t){return rl(4,2,e,t)}function hc(e,t){return rl(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mc(e,t,r){return r=r!=null?r.concat([e]):null,rl(4,4,pc.bind(null,t,e),r)}function vi(){}function fc(e,t){var r=vr();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function xc(e,t){var r=vr();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function yc(e,t,r){return(Ro&21)===0?(e.baseState&&(e.baseState=!1,rr=!0),e.memoizedState=r):(rt(r,t)||(r=Tr(),yt.lanes|=r,Lo|=r,e.baseState=!0),t)}function dh(e,t){var r=Ue;Ue=r!==0&&4>r?r:4,e(!0);var o=fi.transition;fi.transition={};try{e(!1),t()}finally{Ue=r,fi.transition=o}}function gc(){return vr().memoizedState}function ch(e,t,r){var o=eo(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},wc(e))bc(t,r);else if(r=Qd(e,t,r,o),r!==null){var a=Vt();Pr(r,e,o,a),_c(r,t,o)}}function uh(e,t,r){var o=eo(e),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(wc(e))bc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var p=t.lastRenderedState,y=l(p,r);if(a.hasEagerState=!0,a.eagerState=y,rt(y,p)){var k=t.interleaved;k===null?(a.next=a,di(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}r=Qd(e,t,a,o),r!==null&&(a=Vt(),Pr(r,e,o,a),_c(r,t,o))}}function wc(e){var t=e.alternate;return e===yt||t!==null&&t===yt}function bc(e,t){aa=el=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _c(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ks(e,r)}}var nl={readContext:_r,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},hh={readContext:_r,useCallback:function(e,t){return Xr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:cc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,tl(4194308,4,pc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var r=Xr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Xr();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=ch.bind(null,yt,e),[o.memoizedState,e]},useRef:function(e){var t=Xr();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:vi,useDeferredValue:function(e){return Xr().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=dh.bind(null,e[1]),Xr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=yt,a=Xr();if(ut){if(r===void 0)throw Error(v(407));r=r()}else{if(r=t(),At===null)throw Error(v(349));(Ro&30)!==0||nc(o,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,cc(sc.bind(null,o,l,e),[e]),o.flags|=2048,da(9,oc.bind(null,o,l,r,t),void 0,null),r},useId:function(){var e=Xr(),t=At.identifierPrefix;if(ut){var r=_n,o=bn;r=(o&~(1<<32-Wt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=la++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ih++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ph={readContext:_r,useCallback:fc,useContext:_r,useEffect:_i,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:hc,useMemo:xc,useReducer:wi,useRef:dc,useState:function(){return wi(ia)},useDebugValue:vi,useDeferredValue:function(e){var t=vr();return yc(t,kt.memoizedState,e)},useTransition:function(){var e=wi(ia)[0],t=vr().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1},mh={readContext:_r,useCallback:fc,useContext:_r,useEffect:_i,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:hc,useMemo:xc,useReducer:bi,useRef:dc,useState:function(){return bi(ia)},useDebugValue:vi,useDeferredValue:function(e){var t=vr();return kt===null?t.memoizedState=e:yc(t,kt.memoizedState,e)},useTransition:function(){var e=bi(ia)[0],t=vr().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1};function Ir(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ki(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:U({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ol={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Vt(),a=eo(e),l=kn(o,a);l.payload=t,r!=null&&(l.callback=r),t=Qn(e,l,a),t!==null&&(Pr(t,e,a,o),Qa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Vt(),a=eo(e),l=kn(o,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Qn(e,l,a),t!==null&&(Pr(t,e,a,o),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Vt(),o=eo(e),a=kn(r,o);a.tag=2,t!=null&&(a.callback=t),t=Qn(e,a,o),t!==null&&(Pr(t,e,o,r),Qa(t,e,o))}};function vc(e,t,r,o,a,l,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,p):t.prototype&&t.prototype.isPureReactComponent?!Gt(r,o)||!Gt(a,l):!0}function kc(e,t,r){var o=!1,a=Un,l=t.contextType;return typeof l=="object"&&l!==null?l=_r(l):(a=tr(t)?Do:Ot.current,o=t.contextTypes,l=(o=o!=null)?as(e,a):Un),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Cc(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ci(e,t,r,o){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ci(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=_r(l):(l=tr(t)?Do:Ot.current,a.context=as(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ki(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ol.enqueueReplaceState(a,a.state,null),Ja(e,r,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ms(e,t){try{var r="",o=t;do r+=je(o),o=o.return;while(o);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Ni(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Si(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,r){r=kn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ul||(ul=!0,Bi=o),Si(e,t)},r}function Sc(e,t,r){r=kn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;r.payload=function(){return o(a)},r.callback=function(){Si(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Si(e,t),typeof o!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Ac(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new fh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(r)||(a.add(r),e=jh.bind(null,e,t,r),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,r,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kn(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var xh=pe.ReactCurrentOwner,rr=!1;function Ut(e,t,r,o){t.child=e===null?Yd(t,null,r,o):cs(t,e.child,r,o)}function Tc(e,t,r,o,a){r=r.render;var l=t.ref;return hs(t,a),o=yi(e,t,r,o,l,a),r=gi(),e!==null&&!rr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(ut&&r&&ei(t),t.flags|=1,Ut(e,t,o,a),t.child)}function Ec(e,t,r,o,a){if(e===null){var l=r.type;return typeof l=="function"&&!Vi(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Mc(e,t,l,o,a)):(e=yl(r.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var p=l.memoizedProps;if(r=r.compare,r=r!==null?r:Gt,r(p,o)&&e.ref===t.ref)return Cn(e,t,a)}return t.flags|=1,e=ro(l,o),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,r,o,a){if(e!==null){var l=e.memoizedProps;if(Gt(l,o)&&e.ref===t.ref)if(rr=!1,t.pendingProps=o=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(rr=!0);else return t.lanes=e.lanes,Cn(e,t,a)}return Ai(e,t,r,o,a)}function Rc(e,t,r){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(xs,ur),ur|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,at(xs,ur),ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:r,at(xs,ur),ur|=o}else l!==null?(o=l.baseLanes|r,t.memoizedState=null):o=r,at(xs,ur),ur|=o;return Ut(e,t,a,r),t.child}function Lc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,r,o,a){var l=tr(r)?Do:Ot.current;return l=as(t,l),hs(t,a),r=yi(e,t,r,o,l,a),o=gi(),e!==null&&!rr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(ut&&o&&ei(t),t.flags|=1,Ut(e,t,r,a),t.child)}function Fc(e,t,r,o,a){if(tr(r)){var l=!0;qa(t)}else l=!1;if(hs(t,a),t.stateNode===null)al(e,t),kc(t,r,o),Ci(t,r,o,a),o=!0;else if(e===null){var p=t.stateNode,y=t.memoizedProps;p.props=y;var k=p.context,E=r.contextType;typeof E=="object"&&E!==null?E=_r(E):(E=tr(r)?Do:Ot.current,E=as(t,E));var q=r.getDerivedStateFromProps,G=typeof q=="function"||typeof p.getSnapshotBeforeUpdate=="function";G||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==o||k!==E)&&Cc(t,p,o,E),Yn=!1;var B=t.memoizedState;p.state=B,Ja(t,o,p,a),k=t.memoizedState,y!==o||B!==k||er.current||Yn?(typeof q=="function"&&(ki(t,r,q,o),k=t.memoizedState),(y=Yn||vc(t,r,y,o,B,k,E))?(G||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),p.props=o,p.state=k,p.context=E,o=y):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{p=t.stateNode,Jd(e,t),y=t.memoizedProps,E=t.type===t.elementType?y:Ir(t.type,y),p.props=E,G=t.pendingProps,B=p.context,k=r.contextType,typeof k=="object"&&k!==null?k=_r(k):(k=tr(r)?Do:Ot.current,k=as(t,k));var se=r.getDerivedStateFromProps;(q=typeof se=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==G||B!==k)&&Cc(t,p,o,k),Yn=!1,B=t.memoizedState,p.state=B,Ja(t,o,p,a);var ie=t.memoizedState;y!==G||B!==ie||er.current||Yn?(typeof se=="function"&&(ki(t,r,se,o),ie=t.memoizedState),(E=Yn||vc(t,r,E,o,B,ie,k)||!1)?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,ie,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,ie,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ie),p.props=o,p.state=ie,p.context=k,o=E):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),o=!1)}return Di(e,t,r,o,l,a)}function Di(e,t,r,o,a,l){Lc(e,t);var p=(t.flags&128)!==0;if(!o&&!p)return a&&Kd(t,r,!1),Cn(e,t,l);o=t.stateNode,xh.current=t;var y=p&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&p?(t.child=cs(t,e.child,null,l),t.child=cs(t,null,y,l)):Ut(e,t,y,l),t.memoizedState=o.state,a&&Kd(t,r,!0),t.child}function Ic(e){var t=e.stateNode;t.pendingContext?Od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Od(e,t.context,!1),ui(e,t.containerInfo)}function Wc(e,t,r,o,a){return ds(),oi(a),t.flags|=256,Ut(e,t,r,o),t.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,r){var o=t.pendingProps,a=xt.current,l=!1,p=(t.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),at(xt,a&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=o.children,e=o.fallback,l?(o=t.mode,l=t.child,p={mode:"hidden",children:p},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=p):l=gl(p,o,0,null),e=Oo(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ti(r),t.memoizedState=ji,e):Ei(t,p));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return yh(e,t,p,o,y,a,r);if(l){l=o.fallback,p=t.mode,a=e.child,y=a.sibling;var k={mode:"hidden",children:o.children};return(p&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=ro(a,k),o.subtreeFlags=a.subtreeFlags&14680064),y!==null?l=ro(y,l):(l=Oo(l,p,r,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,p=e.child.memoizedState,p=p===null?Ti(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},l.memoizedState=p,l.childLanes=e.childLanes&~r,t.memoizedState=ji,o}return l=e.child,e=l.sibling,o=ro(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ei(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sl(e,t,r,o){return o!==null&&oi(o),cs(t,e.child,null,r),e=Ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yh(e,t,r,o,a,l,p){if(r)return t.flags&256?(t.flags&=-257,o=Ni(Error(v(422))),sl(e,t,p,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=gl({mode:"visible",children:o.children},a,0,null),l=Oo(l,a,p,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&cs(t,e.child,null,p),t.child.memoizedState=Ti(p),t.memoizedState=ji,l);if((t.mode&1)===0)return sl(e,t,p,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var y=o.dgst;return o=y,l=Error(v(419)),o=Ni(l,o,void 0),sl(e,t,p,o)}if(y=(p&e.childLanes)!==0,rr||y){if(o=At,o!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|p))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,vn(e,a),Pr(o,e,a,-1))}return Ui(),o=Ni(Error(v(421))),sl(e,t,p,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Th.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,cr=zn(a.nextSibling),dr=t,ut=!0,Fr=null,e!==null&&(wr[br++]=bn,wr[br++]=_n,wr[br++]=jo,bn=e.id,_n=e.overflow,jo=t),t=Ei(t,o.children),t.flags|=4096,t)}function Pc(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ii(e.return,t,r)}function Mi(e,t,r,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=r,l.tailMode=a)}function Kc(e,t,r){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if(Ut(e,t,o.children,r),o=xt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,r,t);else if(e.tag===19)Pc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(at(xt,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Xa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Mi(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Xa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Mi(t,!0,r,null,l);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Lo|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,r=ro(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ro(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function gh(e,t,r){switch(t.tag){case 3:Ic(t),ds();break;case 5:ec(t);break;case 1:tr(t.type)&&qa(t);break;case 4:ui(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;at(Va,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(at(xt,xt.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Oc(e,t,r):(at(xt,xt.current&1),e=Cn(e,t,r),e!==null?e.sibling:null);at(xt,xt.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Kc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),at(xt,xt.current),o)break;return null;case 22:case 23:return t.lanes=0,Rc(e,t,r)}return Cn(e,t,r)}var Bc,Ri,qc,$c;Bc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ri=function(){},qc=function(e,t,r,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Mo(Jr.current);var l=null;switch(r){case"input":a=en(e,a),o=en(e,o),l=[];break;case"select":a=U({},a,{value:void 0}),o=U({},o,{value:void 0}),l=[];break;case"textarea":a=ga(e,a),o=ga(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Pa)}js(r,o);var p;r=null;for(E in a)if(!o.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var y=a[E];for(p in y)y.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(K.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in o){var k=o[E];if(y=a!=null?a[E]:void 0,o.hasOwnProperty(E)&&k!==y&&(k!=null||y!=null))if(E==="style")if(y){for(p in y)!y.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in k)k.hasOwnProperty(p)&&y[p]!==k[p]&&(r||(r={}),r[p]=k[p])}else r||(l||(l=[]),l.push(E,r)),r=k;else E==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(l=l||[]).push(E,k)):E==="children"?typeof k!="string"&&typeof k!="number"||(l=l||[]).push(E,""+k):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(K.hasOwnProperty(E)?(k!=null&&E==="onScroll"&&dt("scroll",e),l||y===k||(l=[])):(l=l||[]).push(E,k))}r&&(l=l||[]).push("style",r);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},$c=function(e,t,r,o){r!==o&&(t.flags|=4)};function ca(e,t){if(!ut)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function wh(e,t,r){var o=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(t),null;case 1:return tr(t.type)&&Ba(),Kt(t),null;case 3:return o=t.stateNode,ps(),ct(er),ct(Ot),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fr!==null&&(Hi(Fr),Fr=null))),Ri(e,t),Kt(t),null;case 5:hi(t);var a=Mo(sa.current);if(r=t.type,e!==null&&t.stateNode!=null)qc(e,t,r,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(v(166));return Kt(t),null}if(e=Mo(Jr.current),Ga(t)){o=t.stateNode,r=t.type;var l=t.memoizedProps;switch(o[Qr]=t,o[ea]=l,e=(t.mode&1)!==0,r){case"dialog":dt("cancel",o),dt("close",o);break;case"iframe":case"object":case"embed":dt("load",o);break;case"video":case"audio":for(a=0;a<Js.length;a++)dt(Js[a],o);break;case"source":dt("error",o);break;case"img":case"image":case"link":dt("error",o),dt("load",o);break;case"details":dt("toggle",o);break;case"input":_t(o,l),dt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},dt("invalid",o);break;case"textarea":Ft(o,l),dt("invalid",o)}js(r,l),a=null;for(var p in l)if(l.hasOwnProperty(p)){var y=l[p];p==="children"?typeof y=="string"?o.textContent!==y&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,y,e),a=["children",y]):typeof y=="number"&&o.textContent!==""+y&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,y,e),a=["children",""+y]):K.hasOwnProperty(p)&&y!=null&&p==="onScroll"&&dt("scroll",o)}switch(r){case"input":ge(o),Kr(o,l,!0);break;case"textarea":ge(o),wa(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Pa)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uo(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=p.createElement(r,{is:o.is}):(e=p.createElement(r),r==="select"&&(p=e,o.multiple?p.multiple=!0:o.size&&(p.size=o.size))):e=p.createElementNS(e,r),e[Qr]=t,e[ea]=o,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(p=fr(r,o),r){case"dialog":dt("cancel",e),dt("close",e),a=o;break;case"iframe":case"object":case"embed":dt("load",e),a=o;break;case"video":case"audio":for(a=0;a<Js.length;a++)dt(Js[a],e);a=o;break;case"source":dt("error",e),a=o;break;case"img":case"image":case"link":dt("error",e),dt("load",e),a=o;break;case"details":dt("toggle",e),a=o;break;case"input":_t(e,o),a=en(e,o),dt("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=U({},o,{value:void 0}),dt("invalid",e);break;case"textarea":Ft(e,o),a=ga(e,o),dt("invalid",e);break;default:a=o}js(r,a),y=a;for(l in y)if(y.hasOwnProperty(l)){var k=y[l];l==="style"?nn(e,k):l==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ba(e,k)):l==="children"?typeof k=="string"?(r!=="textarea"||k!=="")&&Br(e,k):typeof k=="number"&&Br(e,""+k):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(K.hasOwnProperty(l)?k!=null&&l==="onScroll"&&dt("scroll",e):k!=null&&re(e,l,k,p))}switch(r){case"input":ge(e),Kr(e,o,!1);break;case"textarea":ge(e),wa(e);break;case"option":o.value!=null&&e.setAttribute("value",""+He(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Jt(e,!!o.multiple,l,!1):o.defaultValue!=null&&Jt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Pa)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Kt(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(v(166));if(r=Mo(sa.current),Mo(Jr.current),Ga(t)){if(o=t.stateNode,r=t.memoizedProps,o[Qr]=t,(l=o.nodeValue!==r)&&(e=dr,e!==null))switch(e.tag){case 3:Oa(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(o.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Qr]=t,t.stateNode=o}return Kt(t),null;case 13:if(ct(xt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ut&&cr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gd(),ds(),t.flags|=98560,l=!1;else if(l=Ga(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Qr]=t}else ds(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Kt(t),l=!1}else Fr!==null&&(Hi(Fr),Fr=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xt.current&1)!==0?Ct===0&&(Ct=3):Ui())),t.updateQueue!==null&&(t.flags|=4),Kt(t),null);case 4:return ps(),Ri(e,t),e===null&&Xs(t.stateNode.containerInfo),Kt(t),null;case 10:return li(t.type._context),Kt(t),null;case 17:return tr(t.type)&&Ba(),Kt(t),null;case 19:if(ct(xt),l=t.memoizedState,l===null)return Kt(t),null;if(o=(t.flags&128)!==0,p=l.rendering,p===null)if(o)ca(l,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=Xa(e),p!==null){for(t.flags|=128,ca(l,!1),o=p.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)l=r,e=o,l.flags&=14680066,p=l.alternate,p===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=p.childLanes,l.lanes=p.lanes,l.child=p.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=p.memoizedProps,l.memoizedState=p.memoizedState,l.updateQueue=p.updateQueue,l.type=p.type,e=p.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return at(xt,xt.current&1|2),t.child}e=e.sibling}l.tail!==null&&ot()>ys&&(t.flags|=128,o=!0,ca(l,!1),t.lanes=4194304)}else{if(!o)if(e=Xa(p),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ca(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!ut)return Kt(t),null}else 2*ot()-l.renderingStartTime>ys&&r!==1073741824&&(t.flags|=128,o=!0,ca(l,!1),t.lanes=4194304);l.isBackwards?(p.sibling=t.child,t.child=p):(r=l.last,r!==null?r.sibling=p:t.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ot(),t.sibling=null,r=xt.current,at(xt,o?r&1|2:r&1),t):(Kt(t),null);case 22:case 23:return Gi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ur&1073741824)!==0&&(Kt(t),t.subtreeFlags&6&&(t.flags|=8192)):Kt(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function bh(e,t){switch(ti(t),t.tag){case 1:return tr(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(),ct(er),ct(Ot),mi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(ct(xt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ct(xt),null;case 4:return ps(),null;case 10:return li(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var ll=!1,Bt=!1,_h=typeof WeakSet=="function"?WeakSet:Set,ae=null;function fs(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){gt(e,t,o)}else r.current=null}function Li(e,t,r){try{r()}catch(o){gt(e,t,o)}}var Hc=!1;function vh(e,t){if(Gl=bo,e=vd(),Ol(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var p=0,y=-1,k=-1,E=0,q=0,G=e,B=null;t:for(;;){for(var se;G!==r||a!==0&&G.nodeType!==3||(y=p+a),G!==l||o!==0&&G.nodeType!==3||(k=p+o),G.nodeType===3&&(p+=G.nodeValue.length),(se=G.firstChild)!==null;)B=G,G=se;for(;;){if(G===e)break t;if(B===r&&++E===a&&(y=p),B===l&&++q===o&&(k=p),(se=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=se}r=y===-1||k===-1?null:{start:y,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ul={focusedElem:e,selectionRange:r},bo=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var ie=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var he=ie.memoizedProps,wt=ie.memoizedState,D=t.stateNode,S=D.getSnapshotBeforeUpdate(t.elementType===t.type?he:Ir(t.type,he),wt);D.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(X){gt(t,t.return,X)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return ie=Hc,Hc=!1,ie}function ua(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Li(t,r,l)}a=a.next}while(a!==o)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Fi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zc(e){var t=e.alternate;t!==null&&(e.alternate=null,zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qr],delete t[ea],delete t[Jl],delete t[oh],delete t[sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gc(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Pa));else if(o!==4&&(e=e.child,e!==null))for(Ii(e,t,r),e=e.sibling;e!==null;)Ii(e,t,r),e=e.sibling}function Wi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Wi(e,t,r),e=e.sibling;e!==null;)Wi(e,t,r),e=e.sibling}var Et=null,Wr=!1;function Jn(e,t,r){for(r=r.child;r!==null;)Vc(e,t,r),r=r.sibling}function Vc(e,t,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Dr,r)}catch{}switch(r.tag){case 5:Bt||fs(r,t);case 6:var o=Et,a=Wr;Et=null,Jn(e,t,r),Et=o,Wr=a,Et!==null&&(Wr?(e=Et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Et.removeChild(r.stateNode));break;case 18:Et!==null&&(Wr?(e=Et,r=r.stateNode,e.nodeType===8?Ql(e.parentNode,r):e.nodeType===1&&Ql(e,r),ir(e)):Ql(Et,r.stateNode));break;case 4:o=Et,a=Wr,Et=r.stateNode.containerInfo,Wr=!0,Jn(e,t,r),Et=o,Wr=a;break;case 0:case 11:case 14:case 15:if(!Bt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,p=l.destroy;l=l.tag,p!==void 0&&((l&2)!==0||(l&4)!==0)&&Li(r,t,p),a=a.next}while(a!==o)}Jn(e,t,r);break;case 1:if(!Bt&&(fs(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(y){gt(r,t,y)}Jn(e,t,r);break;case 21:Jn(e,t,r);break;case 22:r.mode&1?(Bt=(o=Bt)||r.memoizedState!==null,Jn(e,t,r),Bt=o):Jn(e,t,r);break;default:Jn(e,t,r)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _h),t.forEach(function(o){var a=Eh.bind(null,e,o);r.has(o)||(r.add(o),o.then(a,a))})}}function Or(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var l=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 5:Et=y.stateNode,Wr=!1;break e;case 3:Et=y.stateNode.containerInfo,Wr=!0;break e;case 4:Et=y.stateNode.containerInfo,Wr=!0;break e}y=y.return}if(Et===null)throw Error(v(160));Vc(l,p,a),Et=null,Wr=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(E){gt(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(t,e),Zr(e),o&4){try{ua(3,e,e.return),il(3,e)}catch(he){gt(e,e.return,he)}try{ua(5,e,e.return)}catch(he){gt(e,e.return,he)}}break;case 1:Or(t,e),Zr(e),o&512&&r!==null&&fs(r,r.return);break;case 5:if(Or(t,e),Zr(e),o&512&&r!==null&&fs(r,r.return),e.flags&32){var a=e.stateNode;try{Br(a,"")}catch(he){gt(e,e.return,he)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,p=r!==null?r.memoizedProps:l,y=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{y==="input"&&l.type==="radio"&&l.name!=null&&jn(a,l),fr(y,p);var E=fr(y,l);for(p=0;p<k.length;p+=2){var q=k[p],G=k[p+1];q==="style"?nn(a,G):q==="dangerouslySetInnerHTML"?ba(a,G):q==="children"?Br(a,G):re(a,q,G,E)}switch(y){case"input":it(a,l);break;case"textarea":rn(a,l);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var se=l.value;se!=null?Jt(a,!!l.multiple,se,!1):B!==!!l.multiple&&(l.defaultValue!=null?Jt(a,!!l.multiple,l.defaultValue,!0):Jt(a,!!l.multiple,l.multiple?[]:"",!1))}a[ea]=l}catch(he){gt(e,e.return,he)}}break;case 6:if(Or(t,e),Zr(e),o&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(he){gt(e,e.return,he)}}break;case 3:if(Or(t,e),Zr(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(he){gt(e,e.return,he)}break;case 4:Or(t,e),Zr(e);break;case 13:Or(t,e),Zr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ki=ot())),o&4&&Yc(e);break;case 22:if(q=r!==null&&r.memoizedState!==null,e.mode&1?(Bt=(E=Bt)||q,Or(t,e),Bt=E):Or(t,e),Zr(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!q&&(e.mode&1)!==0)for(ae=e,q=e.child;q!==null;){for(G=ae=q;ae!==null;){switch(B=ae,se=B.child,B.tag){case 0:case 11:case 14:case 15:ua(4,B,B.return);break;case 1:fs(B,B.return);var ie=B.stateNode;if(typeof ie.componentWillUnmount=="function"){o=B,r=B.return;try{t=o,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(he){gt(o,r,he)}}break;case 5:fs(B,B.return);break;case 22:if(B.memoizedState!==null){Zc(G);continue}}se!==null?(se.return=B,ae=se):Zc(G)}q=q.sibling}e:for(q=null,G=e;;){if(G.tag===5){if(q===null){q=G;try{a=G.stateNode,E?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(y=G.stateNode,k=G.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=ar("display",p))}catch(he){gt(e,e.return,he)}}}else if(G.tag===6){if(q===null)try{G.stateNode.nodeValue=E?"":G.memoizedProps}catch(he){gt(e,e.return,he)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;q===G&&(q=null),G=G.return}q===G&&(q=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Or(t,e),Zr(e),o&4&&Yc(e);break;case 21:break;default:Or(t,e),Zr(e)}}function Zr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gc(r)){var o=r;break e}r=r.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Br(a,""),o.flags&=-33);var l=Uc(e);Wi(e,l,a);break;case 3:case 4:var p=o.stateNode.containerInfo,y=Uc(e);Ii(e,y,p);break;default:throw Error(v(161))}}catch(k){gt(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e,t,r){ae=e,Jc(e)}function Jc(e,t,r){for(var o=(e.mode&1)!==0;ae!==null;){var a=ae,l=a.child;if(a.tag===22&&o){var p=a.memoizedState!==null||ll;if(!p){var y=a.alternate,k=y!==null&&y.memoizedState!==null||Bt;y=ll;var E=Bt;if(ll=p,(Bt=k)&&!E)for(ae=a;ae!==null;)p=ae,k=p.child,p.tag===22&&p.memoizedState!==null?eu(a):k!==null?(k.return=p,ae=k):eu(a);for(;l!==null;)ae=l,Jc(l),l=l.sibling;ae=a,ll=y,Bt=E}Xc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,ae=l):Xc(e)}}function Xc(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Bt||il(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Bt)if(r===null)o.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ir(t.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Zd(t,l,o);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zd(t,p,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&r.focus();break;case"img":k.src&&(r.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var q=E.memoizedState;if(q!==null){var G=q.dehydrated;G!==null&&ir(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}Bt||t.flags&512&&Fi(t)}catch(B){gt(t,t.return,B)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function Zc(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function eu(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{il(4,t)}catch(k){gt(t,r,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(k){gt(t,a,k)}}var l=t.return;try{Fi(t)}catch(k){gt(t,l,k)}break;case 5:var p=t.return;try{Fi(t)}catch(k){gt(t,p,k)}}}catch(k){gt(t,t.return,k)}if(t===e){ae=null;break}var y=t.sibling;if(y!==null){y.return=t.return,ae=y;break}ae=t.return}}var Ch=Math.ceil,dl=pe.ReactCurrentDispatcher,Oi=pe.ReactCurrentOwner,kr=pe.ReactCurrentBatchConfig,Ve=0,At=null,bt=null,Mt=0,ur=0,xs=Gn(0),Ct=0,ha=null,Lo=0,cl=0,Pi=0,pa=null,nr=null,Ki=0,ys=1/0,Nn=null,ul=!1,Bi=null,Xn=null,hl=!1,Zn=null,pl=0,ma=0,qi=null,ml=-1,fl=0;function Vt(){return(Ve&6)!==0?ot():ml!==-1?ml:ml=ot()}function eo(e){return(e.mode&1)===0?1:(Ve&2)!==0&&Mt!==0?Mt&-Mt:lh.transition!==null?(fl===0&&(fl=Tr()),fl):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:$s(e.type)),e)}function Pr(e,t,r,o){if(50<ma)throw ma=0,qi=null,Error(v(185));Vo(e,r,o),((Ve&2)===0||e!==At)&&(e===At&&((Ve&2)===0&&(cl|=r),Ct===4&&to(e,Mt)),or(e,o),r===1&&Ve===0&&(t.mode&1)===0&&(ys=ot()+500,$a&&Vn()))}function or(e,t){var r=e.callbackNode;Hr(e,t);var o=Uo(e,e===At?Mt:0);if(o===0)r!==null&&Is(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Is(r),t===1)e.tag===0?ah(ru.bind(null,e)):Bd(ru.bind(null,e)),rh(function(){(Ve&6)===0&&Vn()}),r=null;else{switch(Xt(o)){case 1:r=Ar;break;case 4:r=Ln;break;case 16:r=$r;break;case 536870912:r=Ps;break;default:r=$r}r=cu(r,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function tu(e,t){if(ml=-1,fl=0,(Ve&6)!==0)throw Error(v(327));var r=e.callbackNode;if(gs()&&e.callbackNode!==r)return null;var o=Uo(e,e===At?Mt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=xl(e,o);else{t=o;var a=Ve;Ve|=2;var l=ou();(At!==e||Mt!==t)&&(Nn=null,ys=ot()+500,Io(e,t));do try{Ah();break}catch(y){nu(e,y)}while(!0);ai(),dl.current=l,Ve=a,bt!==null?t=0:(At=null,Mt=0,t=Ct)}if(t!==0){if(t===2&&(a=sn(e),a!==0&&(o=a,t=$i(e,a))),t===1)throw r=ha,Io(e,0),to(e,o),or(e,ot()),r;if(t===6)to(e,o);else{if(a=e.current.alternate,(o&30)===0&&!Nh(a)&&(t=xl(e,o),t===2&&(l=sn(e),l!==0&&(o=l,t=$i(e,l))),t===1))throw r=ha,Io(e,0),to(e,o),or(e,ot()),r;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(v(345));case 2:Wo(e,nr,Nn);break;case 3:if(to(e,o),(o&130023424)===o&&(t=Ki+500-ot(),10<t)){if(Uo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Vt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Yl(Wo.bind(null,e,nr,Nn),t);break}Wo(e,nr,Nn);break;case 4:if(to(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var p=31-Wt(o);l=1<<p,p=t[p],p>a&&(a=p),o&=~l}if(o=a,o=ot()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ch(o/1960))-o,10<o){e.timeoutHandle=Yl(Wo.bind(null,e,nr,Nn),o);break}Wo(e,nr,Nn);break;case 5:Wo(e,nr,Nn);break;default:throw Error(v(329))}}}return or(e,ot()),e.callbackNode===r?tu.bind(null,e):null}function $i(e,t){var r=pa;return e.current.memoizedState.isDehydrated&&(Io(e,t).flags|=256),e=xl(e,t),e!==2&&(t=nr,nr=r,t!==null&&Hi(t)),e}function Hi(e){nr===null?nr=e:nr.push.apply(nr,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],l=a.getSnapshot;a=a.value;try{if(!rt(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function to(e,t){for(t&=~Pi,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),o=1<<r;e[r]=-1,t&=~o}}function ru(e){if((Ve&6)!==0)throw Error(v(327));gs();var t=Uo(e,0);if((t&1)===0)return or(e,ot()),null;var r=xl(e,t);if(e.tag!==0&&r===2){var o=sn(e);o!==0&&(t=o,r=$i(e,o))}if(r===1)throw r=ha,Io(e,0),to(e,t),or(e,ot()),r;if(r===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wo(e,nr,Nn),or(e,ot()),null}function zi(e,t){var r=Ve;Ve|=1;try{return e(t)}finally{Ve=r,Ve===0&&(ys=ot()+500,$a&&Vn())}}function Fo(e){Zn!==null&&Zn.tag===0&&(Ve&6)===0&&gs();var t=Ve;Ve|=1;var r=kr.transition,o=Ue;try{if(kr.transition=null,Ue=1,e)return e()}finally{Ue=o,kr.transition=r,Ve=t,(Ve&6)===0&&Vn()}}function Gi(){ur=xs.current,ct(xs)}function Io(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,th(r)),bt!==null)for(r=bt.return;r!==null;){var o=r;switch(ti(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ba();break;case 3:ps(),ct(er),ct(Ot),mi();break;case 5:hi(o);break;case 4:ps();break;case 13:ct(xt);break;case 19:ct(xt);break;case 10:li(o.type._context);break;case 22:case 23:Gi()}r=r.return}if(At=e,bt=e=ro(e.current,null),Mt=ur=t,Ct=0,ha=null,Pi=cl=Lo=0,nr=pa=null,Eo!==null){for(t=0;t<Eo.length;t++)if(r=Eo[t],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,l=r.pending;if(l!==null){var p=l.next;l.next=a,o.next=p}r.pending=o}Eo=null}return e}function nu(e,t){do{var r=bt;try{if(ai(),Za.current=nl,el){for(var o=yt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}el=!1}if(Ro=0,St=kt=yt=null,aa=!1,la=0,Oi.current=null,r===null||r.return===null){Ct=1,ha=t,bt=null;break}e:{var l=e,p=r.return,y=r,k=t;if(t=Mt,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var E=k,q=y,G=q.tag;if((q.mode&1)===0&&(G===0||G===11||G===15)){var B=q.alternate;B?(q.updateQueue=B.updateQueue,q.memoizedState=B.memoizedState,q.lanes=B.lanes):(q.updateQueue=null,q.memoizedState=null)}var se=Dc(p);if(se!==null){se.flags&=-257,jc(se,p,y,l,t),se.mode&1&&Ac(l,E,t),t=se,k=E;var ie=t.updateQueue;if(ie===null){var he=new Set;he.add(k),t.updateQueue=he}else ie.add(k);break e}else{if((t&1)===0){Ac(l,E,t),Ui();break e}k=Error(v(426))}}else if(ut&&y.mode&1){var wt=Dc(p);if(wt!==null){(wt.flags&65536)===0&&(wt.flags|=256),jc(wt,p,y,l,t),oi(ms(k,y));break e}}l=k=ms(k,y),Ct!==4&&(Ct=2),pa===null?pa=[l]:pa.push(l),l=p;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var D=Nc(l,k,t);Xd(l,D);break e;case 1:y=k;var S=l.type,T=l.stateNode;if((l.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Xn===null||!Xn.has(T)))){l.flags|=65536,t&=-t,l.lanes|=t;var X=Sc(l,y,t);Xd(l,X);break e}}l=l.return}while(l!==null)}au(r)}catch(me){t=me,bt===r&&r!==null&&(bt=r=r.return);continue}break}while(!0)}function ou(){var e=dl.current;return dl.current=nl,e===null?nl:e}function Ui(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),At===null||(Lo&268435455)===0&&(cl&268435455)===0||to(At,Mt)}function xl(e,t){var r=Ve;Ve|=2;var o=ou();(At!==e||Mt!==t)&&(Nn=null,Io(e,t));do try{Sh();break}catch(a){nu(e,a)}while(!0);if(ai(),Ve=r,dl.current=o,bt!==null)throw Error(v(261));return At=null,Mt=0,Ct}function Sh(){for(;bt!==null;)su(bt)}function Ah(){for(;bt!==null&&!Go();)su(bt)}function su(e){var t=du(e.alternate,e,ur);e.memoizedProps=e.pendingProps,t===null?au(e):bt=t,Oi.current=null}function au(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=wh(r,t,ur),r!==null){bt=r;return}}else{if(r=bh(r,t),r!==null){r.flags&=32767,bt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ct=6,bt=null;return}}if(t=t.sibling,t!==null){bt=t;return}bt=t=e}while(t!==null);Ct===0&&(Ct=5)}function Wo(e,t,r){var o=Ue,a=kr.transition;try{kr.transition=null,Ue=1,Dh(e,t,r,o)}finally{kr.transition=a,Ue=o}return null}function Dh(e,t,r,o){do gs();while(Zn!==null);if((Ve&6)!==0)throw Error(v(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(gd(e,l),e===At&&(bt=At=null,Mt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||hl||(hl=!0,cu($r,function(){return gs(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=kr.transition,kr.transition=null;var p=Ue;Ue=1;var y=Ve;Ve|=4,Oi.current=null,vh(e,r),Qc(r,e),Vu(Ul),bo=!!Gl,Ul=Gl=null,e.current=r,kh(r),Rn(),Ve=y,Ue=p,kr.transition=l}else e.current=r;if(hl&&(hl=!1,Zn=e,pl=a),l=e.pendingLanes,l===0&&(Xn=null),It(r.stateNode),or(e,ot()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=Bi,Bi=null,e;return(pl&1)!==0&&e.tag!==0&&gs(),l=e.pendingLanes,(l&1)!==0?e===qi?ma++:(ma=0,qi=e):ma=0,Vn(),null}function gs(){if(Zn!==null){var e=Xt(pl),t=kr.transition,r=Ue;try{if(kr.transition=null,Ue=16>e?16:e,Zn===null)var o=!1;else{if(e=Zn,Zn=null,pl=0,(Ve&6)!==0)throw Error(v(331));var a=Ve;for(Ve|=4,ae=e.current;ae!==null;){var l=ae,p=l.child;if((ae.flags&16)!==0){var y=l.deletions;if(y!==null){for(var k=0;k<y.length;k++){var E=y[k];for(ae=E;ae!==null;){var q=ae;switch(q.tag){case 0:case 11:case 15:ua(8,q,l)}var G=q.child;if(G!==null)G.return=q,ae=G;else for(;ae!==null;){q=ae;var B=q.sibling,se=q.return;if(zc(q),q===E){ae=null;break}if(B!==null){B.return=se,ae=B;break}ae=se}}}var ie=l.alternate;if(ie!==null){var he=ie.child;if(he!==null){ie.child=null;do{var wt=he.sibling;he.sibling=null,he=wt}while(he!==null)}}ae=l}}if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,ae=p;else e:for(;ae!==null;){if(l=ae,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ua(9,l,l.return)}var D=l.sibling;if(D!==null){D.return=l.return,ae=D;break e}ae=l.return}}var S=e.current;for(ae=S;ae!==null;){p=ae;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,ae=T;else e:for(p=S;ae!==null;){if(y=ae,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:il(9,y)}}catch(me){gt(y,y.return,me)}if(y===p){ae=null;break e}var X=y.sibling;if(X!==null){X.return=y.return,ae=X;break e}ae=y.return}}if(Ve=a,Vn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Dr,e)}catch{}o=!0}return o}finally{Ue=r,kr.transition=t}}return!1}function lu(e,t,r){t=ms(r,t),t=Nc(e,t,1),e=Qn(e,t,1),t=Vt(),e!==null&&(Vo(e,1,t),or(e,t))}function gt(e,t,r){if(e.tag===3)lu(e,e,r);else for(;t!==null;){if(t.tag===3){lu(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xn===null||!Xn.has(o))){e=ms(r,e),e=Sc(t,e,1),t=Qn(t,e,1),e=Vt(),t!==null&&(Vo(t,1,e),or(t,e));break}}t=t.return}}function jh(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Vt(),e.pingedLanes|=e.suspendedLanes&r,At===e&&(Mt&r)===r&&(Ct===4||Ct===3&&(Mt&130023424)===Mt&&500>ot()-Ki?Io(e,0):Pi|=r),or(e,t)}function iu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var r=Vt();e=vn(e,t),e!==null&&(Vo(e,t,r),or(e,r))}function Th(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),iu(e,r)}function Eh(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(t),iu(e,r)}var du;du=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||er.current)rr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return rr=!1,gh(e,t,r);rr=(e.flags&131072)!==0}else rr=!1,ut&&(t.flags&1048576)!==0&&qd(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;al(e,t),e=t.pendingProps;var a=as(t,Ot.current);hs(t,r),a=yi(null,t,o,e,a,r);var l=gi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tr(o)?(l=!0,qa(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ci(t),a.updater=ol,t.stateNode=a,a._reactInternals=t,Ci(t,o,e,r),t=Di(null,t,o,!0,l,r)):(t.tag=0,ut&&l&&ei(t),Ut(null,t,a,r),t=t.child),t;case 16:o=t.elementType;e:{switch(al(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Rh(o),e=Ir(o,e),a){case 0:t=Ai(null,t,o,e,r);break e;case 1:t=Fc(null,t,o,e,r);break e;case 11:t=Tc(null,t,o,e,r);break e;case 14:t=Ec(null,t,o,Ir(o.type,e),r);break e}throw Error(v(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ir(o,a),Ai(e,t,o,a,r);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ir(o,a),Fc(e,t,o,a,r);case 3:e:{if(Ic(t),e===null)throw Error(v(387));o=t.pendingProps,l=t.memoizedState,a=l.element,Jd(e,t),Ja(t,o,null,r);var p=t.memoizedState;if(o=p.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=ms(Error(v(423)),t),t=Wc(e,t,o,r,a);break e}else if(o!==a){a=ms(Error(v(424)),t),t=Wc(e,t,o,r,a);break e}else for(cr=zn(t.stateNode.containerInfo.firstChild),dr=t,ut=!0,Fr=null,r=Yd(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ds(),o===a){t=Cn(e,t,r);break e}Ut(e,t,o,r)}t=t.child}return t;case 5:return ec(t),e===null&&ni(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,p=a.children,Vl(o,a)?p=null:l!==null&&Vl(o,l)&&(t.flags|=32),Lc(e,t),Ut(e,t,p,r),t.child;case 6:return e===null&&ni(t),null;case 13:return Oc(e,t,r);case 4:return ui(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=cs(t,null,o,r):Ut(e,t,o,r),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ir(o,a),Tc(e,t,o,a,r);case 7:return Ut(e,t,t.pendingProps,r),t.child;case 8:return Ut(e,t,t.pendingProps.children,r),t.child;case 12:return Ut(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,p=a.value,at(Va,o._currentValue),o._currentValue=p,l!==null)if(rt(l.value,p)){if(l.children===a.children&&!er.current){t=Cn(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var y=l.dependencies;if(y!==null){p=l.child;for(var k=y.firstContext;k!==null;){if(k.context===o){if(l.tag===1){k=kn(-1,r&-r),k.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var q=E.pending;q===null?k.next=k:(k.next=q.next,q.next=k),E.pending=k}}l.lanes|=r,k=l.alternate,k!==null&&(k.lanes|=r),ii(l.return,r,t),y.lanes|=r;break}k=k.next}}else if(l.tag===10)p=l.type===t.type?null:l.child;else if(l.tag===18){if(p=l.return,p===null)throw Error(v(341));p.lanes|=r,y=p.alternate,y!==null&&(y.lanes|=r),ii(p,r,t),p=l.sibling}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}Ut(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,hs(t,r),a=_r(a),o=o(a),t.flags|=1,Ut(e,t,o,r),t.child;case 14:return o=t.type,a=Ir(o,t.pendingProps),a=Ir(o.type,a),Ec(e,t,o,a,r);case 15:return Mc(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ir(o,a),al(e,t),t.tag=1,tr(o)?(e=!0,qa(t)):e=!1,hs(t,r),kc(t,o,a),Ci(t,o,a,r),Di(null,t,o,!0,e,r);case 19:return Kc(e,t,r);case 22:return Rc(e,t,r)}throw Error(v(156,t.tag))};function cu(e,t){return Fs(e,t)}function Mh(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cr(e,t,r,o){return new Mh(e,t,r,o)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rh(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ae)return 11;if(e===oe)return 14}return 2}function ro(e,t){var r=e.alternate;return r===null?(r=Cr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function yl(e,t,r,o,a,l){var p=2;if(o=e,typeof e=="function")Vi(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case Je:return Oo(r.children,a,l,t);case Ge:p=8,a|=8;break;case Re:return e=Cr(12,r,t,a|2),e.elementType=Re,e.lanes=l,e;case ze:return e=Cr(13,r,t,a),e.elementType=ze,e.lanes=l,e;case Oe:return e=Cr(19,r,t,a),e.elementType=Oe,e.lanes=l,e;case le:return gl(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:p=10;break e;case Ye:p=9;break e;case Ae:p=11;break e;case oe:p=14;break e;case ve:p=16,o=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Cr(p,r,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function Oo(e,t,r,o){return e=Cr(7,e,o,t),e.lanes=r,e}function gl(e,t,r,o){return e=Cr(22,e,o,t),e.elementType=le,e.lanes=r,e.stateNode={isHidden:!1},e}function Yi(e,t,r){return e=Cr(6,e,null,t),e.lanes=r,e}function Qi(e,t,r){return t=Cr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lh(e,t,r,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=an(0),this.expirationTimes=an(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ji(e,t,r,o,a,l,p,y,k){return e=new Lh(e,t,r,y,k),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Cr(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ci(l),e}function Fh(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function uu(e){if(!e)return Un;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var r=e.type;if(tr(r))return Pd(e,r,t)}return t}function hu(e,t,r,o,a,l,p,y,k){return e=Ji(r,o,!0,e,a,l,p,y,k),e.context=uu(null),r=e.current,o=Vt(),a=eo(r),l=kn(o,a),l.callback=t??null,Qn(r,l,a),e.current.lanes=a,Vo(e,a,o),or(e,o),e}function wl(e,t,r,o){var a=t.current,l=Vt(),p=eo(a);return r=uu(r),t.context===null?t.context=r:t.pendingContext=r,t=kn(l,p),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Qn(a,t,p),e!==null&&(Pr(e,a,p,l),Qa(e,a,p)),p}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xi(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function Ih(){return null}var mu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zi(e){this._internalRoot=e}_l.prototype.render=Zi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));wl(e,t,null,null)},_l.prototype.unmount=Zi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fo(function(){wl(null,e,null,null)}),t[gn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=cn();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&jt(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function Wh(e,t,r,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var E=bl(p);l.call(E)}}var p=hu(t,o,e,0,null,!1,!1,"",fu);return e._reactRootContainer=p,e[gn]=p.current,Xs(e.nodeType===8?e.parentNode:e),Fo(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var y=o;o=function(){var E=bl(k);y.call(E)}}var k=Ji(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=k,e[gn]=k.current,Xs(e.nodeType===8?e.parentNode:e),Fo(function(){wl(t,k,r,o)}),k}function kl(e,t,r,o,a){var l=r._reactRootContainer;if(l){var p=l;if(typeof a=="function"){var y=a;a=function(){var k=bl(p);y.call(k)}}wl(t,p,e,a)}else p=Wh(r,t,e,a,o);return bl(p)}ln=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yo(t.pendingLanes);r!==0&&(Ks(t,r|1),or(t,ot()),(Ve&6)===0&&(ys=ot()+500,Vn()))}break;case 13:Fo(function(){var o=vn(e,1);if(o!==null){var a=Vt();Pr(o,e,1,a)}}),Xi(e,1)}},Bs=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var r=Vt();Pr(t,e,134217728,r)}Xi(e,134217728)}},dn=function(e){if(e.tag===13){var t=eo(e),r=vn(e,t);if(r!==null){var o=Vt();Pr(r,e,t,o)}Xi(e,t)}},cn=function(){return Ue},go=function(e,t){var r=Ue;try{return Ue=e,t()}finally{Ue=r}},Bo=function(e,t,r){switch(t){case"input":if(it(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var a=Ka(o);if(!a)throw Error(v(90));pr(o),it(o,a)}}}break;case"textarea":rn(e,r);break;case"select":t=r.value,t!=null&&Jt(e,!!r.multiple,t,!1)}},Ho=zi,va=Fo;var Oh={usingClientEntryPoint:!1,Events:[ta,os,Ka,Ts,$o,zi]},fa={findFiberByHostInstance:Ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ph={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zo(e),e===null?null:e.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||Ih,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Dr=Cl.inject(Ph),qe=Cl}catch{}}return sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh,sr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(v(200));return Fh(e,t,null,r)},sr.createRoot=function(e,t){if(!ed(e))throw Error(v(299));var r=!1,o="",a=mu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ji(e,1,!1,null,null,r,!1,o,a),e[gn]=t.current,Xs(e.nodeType===8?e.parentNode:e),new Zi(t)},sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=zo(t),e=e===null?null:e.stateNode,e},sr.flushSync=function(e){return Fo(e)},sr.hydrate=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!0,r)},sr.hydrateRoot=function(e,t,r){if(!ed(e))throw Error(v(405));var o=r!=null&&r.hydratedSources||null,a=!1,l="",p=mu;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=hu(t,null,e,1,r??null,a,!1,l,p),e[gn]=t.current,Xs(e),o)for(e=0;e<o.length;e++)r=o[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new _l(t)},sr.render=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!1,r)},sr.unmountComponentAtNode=function(e){if(!vl(e))throw Error(v(40));return e._reactRootContainer?(Fo(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1},sr.unstable_batchedUpdates=zi,sr.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!vl(r))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return kl(e,t,r,!1,o)},sr.version="18.3.1-next-f1338f8080-20240426",sr}var ku;function Uh(){if(ku)return nd.exports;ku=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(_){console.error(_)}}return b(),nd.exports=Gh(),nd.exports}var Cu;function Vh(){if(Cu)return Nl;Cu=1;var b=Uh();return Nl.createRoot=b.createRoot,Nl.hydrateRoot=b.hydrateRoot,Nl}var Yh=Vh();const Qh=Ou(Yh);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pu=(...b)=>b.filter((_,v,V)=>!!_&&_.trim()!==""&&V.indexOf(_)===v).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=F.forwardRef(({color:b="currentColor",size:_=24,strokeWidth:v=2,absoluteStrokeWidth:V,className:K="",children:$,iconNode:Q,...de},ne)=>F.createElement("svg",{ref:ne,...Xh,width:_,height:_,stroke:b,strokeWidth:V?Number(v)*24/Number(_):v,className:Pu("lucide",K),...de},[...Q.map(([M,H])=>F.createElement(M,H)),...Array.isArray($)?$:[$]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(b,_)=>{const v=F.forwardRef(({className:V,...K},$)=>F.createElement(Zh,{ref:$,iconNode:_,className:Pu(`lucide-${Jh(b)}`,V),...K}));return v.displayName=`${b}`,v};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=nt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=nt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=nt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=nt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=nt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=nt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=nt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=nt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=nt("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=nt("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=nt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=nt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=nt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=nt("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=nt("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=nt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=nt("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=nt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=nt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=nt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=nt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=nt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ss="weekly_chores_canvas_sheet_data_v5",jl=[{index_:0,name:"Printable Weekly Schedule",data:[{index_:0,row:["Chore Schedule",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["FOR THE WEEK OF:","MON",null,"TUE",null,"WED",null,"THU",null,"FRI",null,"SAT",null,"SUN",null]},{index_:2,row:["2026-10-19","19",null,"20",null,"21",null,"22",null,"23",null,"24",null,"25",null]},{index_:3,row:["TASK",`WHO
Day 1`,`DONE 
Day 1`,`WHO 
DAY 2`,`DONE 
DAY 2`,`WHO 
DAY 3`,`DONE  
DAY 3`,`WHO 
DAY 4`,`DONE
DAY 4`,`WHO
DAY 5`,`DONE
DAY 5`,`WHO
DAY 6`,`DONE
DAY 6`,`WHO
DAY 7`,`DONE 
DAY 7`]},{index_:4,row:["Daily Tasks",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:5,row:[`Empty the Litter Box 
(Morning & Evening)`,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1,"Sydney",!1]},{index_:6,row:[`Feed the Herd 
(Breakfast & Supper)`,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1]},{index_:7,row:[`Empty Dishwasher (Before Supper) 
- Put away clean dishes; Load any dirty ones`,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1]},{index_:8,row:["Make Supper: Plan Ahead!","Mason",!1,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1]},{index_:9,row:[`Dinner Dishes & Kitchen Clean-up 
- Put away food; Load dishwasher; Wipe surfaces`,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1]},{index_:10,row:["Weekly Tasks","Description",null,null,null,null,null,null,null,"Initials / Assigned",null,null,null,null,null]},{index_:11,row:["Personal Laundry","Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:12,row:["Tidy Bedrooms / Personal Spaces","Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:13,row:["Clean Up Basement","Pick Up Mess; Dust Surfaces; Vacuum Floors & Litter Box Area",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:14,row:["Herd Feeding Station Deep Clean","Wash & Sanitize Bowls; Vacuum Feeding Mat",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:15,row:["Curbside Recycling","Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:18,row:["Weekly Sign-Off","Parent Initials:",null,null,null,null,null,null,null,null,null,null,null,"_________",!1]}]},{index_:1,name:"Household Hub (Background Data)",data:[{index_:0,row:["HOUSEHOLD HUB & MASTER DIRECTORY",null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",null,null,null,null,null,null,null,null,null,null,null]},{index_:3,row:["HOUSEHOLD MEMBERS",null,null,null,null,null,"MASTER CHORE REGISTRY & ALLOCATION RULES",null,null,null,null,null]},{index_:4,row:["Name","Role","Occupancy","Special Rotation Groups","Active Status",null,"Chore","Member / Group","Frequency","Suggested Days","Details / Notes",null]},{index_:5,row:["Thom","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Empty the Litter Box (Morning & Evening)","Non-Casual","Daily","N/A","Scoop waste, refresh litter, dispose of waste.",null]},{index_:6,row:["Meghan","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Feed the Herd (Breakfast & Supper)","Non-Casual","Daily","N/A","Feed all animals the appropriate food and portions.",null]},{index_:7,row:["Sydney","Minion","Full-Time","Kids, Non-Casual, All",!0,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun","Put away clean dishes, Load any dirty dishes","Kitchen"]},{index_:8,row:["Cadence","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Make Supper: Plan Ahead!","Non-Casual","Daily","Mon – Sun","Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",null]},{index_:9,row:["Mason","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Dinner Dishes & Kitchen Cleanup","Non-Casual","Daily","N/A","Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",null]},{index_:10,row:["Koda","Minion","Casual","All",!0,null,"Tidy Bedrooms / Personal Spaces","Kids","Once a Week","Saturday","Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",null]},{index_:11,row:["Keyanna","Minion","Casual","All",!0,null,"Laundry","All","Once a Week","Saturday","Wash, dry, fold & put away (each kid responsible for their own items)",null]},{index_:12,row:[null,null,null,null,null,null,"Clean Basement (Pick Up, Dust, Vacuum)","Non-Casual","Once a Week","Sunday","Pick up mess & laundry, dust surfaces, vacuum floors",null]},{index_:13,row:["OCCUPANCY CATEGORIES",null,null,null,null,null,"Herd Feeding Station Deep Clean","All","Once a Week","Sunday","Wash & sanitize pet bowls, vacuum feeding mat",null]},{index_:14,row:["Type","Description","Rules",null,"Active Status",null,"Curbside Recycling","Non-Casual","Bi-Weekly","Thursday Evening","Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:15,row:["Full-Time","Constant Residency","Included in all weekly/monthly schedulings",null,!0,null,"Curbside Waste","Non-Casual","Bi-Weekly","Thursday Evening","Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)","Household"]},{index_:16,row:["Bi-Weekly","Half-Time Residency",'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',null,!0,null,"Walk Dogs: Ellie & Lewis","Non-Casual","Daily","Mon – Sun","Walk Ellie & Lewis","Pet Care"]},{index_:17,row:["Casual","Periodic Residency","Manually added to any schedules",null,!0,null,"SCHEDULE CONFIGURATIONS",null,null,null,null,null]},{index_:18,row:["SPECIAL ROTATION GROUPS",null,null,null,null,null,"Active Week Start Date","2026-10-19","Printable Weekly Schedule",null,null,null]},{index_:19,row:["Name","Members",null,null,"Active Status",null,null,null,null,null,null,null]},{index_:20,row:["All","Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",null,null,!0,null,"Custody Schedule Rotation","Kids Week","Bi-Weekly Schedule",null,"Mason, Cadence",null]},{index_:21,row:["Kids","Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:22,row:["Parents","Thom, Meghan",null,null,!0,null,null,null,null,null,null,null]},{index_:23,row:["Non-Casual","Thom, Meghan, Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:26,row:["Pet Name","Dog / Cat","Routine","Care Responsibilities","Active Status",null,null,null,null,null,null,null]},{index_:27,row:["Ellie","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:28,row:["Lewis","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:29,row:["Casey","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:30,row:["Gigi","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:31,row:["Sloane","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:32,row:["Scoob","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:34,row:[null,null,null,null,!1,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun",null,null]}]}];var Qt=[{name:"Monday",short:"Mon",color:"#8E283A",lightBg:"#FDF2F4",border:"#F8B4BD"},{name:"Tuesday",short:"Tue",color:"#1A638B",lightBg:"#F0F7FB",border:"#A6D2ED"},{name:"Wednesday",short:"Wed",color:"#C45508",lightBg:"#FEF6F0",border:"#FBD3B6"},{name:"Thursday",short:"Thu",color:"#3D7841",lightBg:"#F2F8F3",border:"#B6DFBA"},{name:"Friday",short:"Fri",color:"#584B79",lightBg:"#F5F3F9",border:"#CDC3E6"},{name:"Saturday",short:"Sat",color:"#B81B6C",lightBg:"#FDF2F8",border:"#F8B4DB"},{name:"Sunday",short:"Sun",color:"#0C7B83",lightBg:"#EFF9FA",border:"#9EE1E6"}],vs=[{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},{color:"#D97706",bg:"#FEF3C7",text:"#B45309"},{color:"#10B981",bg:"#D1FAE5",text:"#047857"},{color:"#6366F1",bg:"#EEF2FF",text:"#4338CA"}],lp={meghan:{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},thom:{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},sydney:{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},cadence:{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},mason:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},koda:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},keyanna:{color:"#D97706",bg:"#FEF3C7",text:"#B45309"}},Mu={ellie:{color:"#E11D48",bg:"#FFE4E6",text:"#BE123C",border:"#FECDD3"},lewis:{color:"#059669",bg:"#D1FAE5",text:"#047857",border:"#A7F3D0"},casey:{color:"#7C3AED",bg:"#EDE9FE",text:"#6D28D9",border:"#DDD6FE"},gigi:{color:"#DB2777",bg:"#FCE7F3",text:"#BE185D",border:"#FBCFE8"},sloane:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},sloan:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},scoob:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",border:"#FED7AA"}};function Me(b){return b?String(b).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g," ").replace(/\s+/g," ").trim():""}function ht(b){if(!b)return"";const _=String(b).toLowerCase();return _.includes("litter")?"litter_box":_.includes("herd")&&(_.includes("breakfast")||_.includes("supper")||_.includes("feed the herd"))?"feed_herd":_.includes("dishwasher")&&_.includes("empty")?"empty_dishwasher":_.includes("supper")||_.includes("dinner")&&_.includes("plan")?"make_supper":_.includes("dishes")||_.includes("kitchen cleanup")?"dinner_dishes":_.includes("bedroom")||_.includes("personal spaces")?"tidy_bedrooms":_.includes("laundry")?"laundry":_.includes("basement")?"clean_basement":_.includes("feeding station")||_.includes("deep clean")&&_.includes("feeding")?"feeding_station_deep_clean":_.includes("recycling")?"curbside_recycling":_.includes("waste")?"curbside_waste":_.includes("sign-off")||_.includes("sign off")||_.includes("inspection")?"weekly_sign_off":_.includes("walk")&&_.includes("dog")?"walk_dogs":Me(b)}function so(b){const _=String(b||"").toLowerCase();return _.includes("tidy bedroom")||_.includes("tidy up bedroom")||_.includes("tidy bedrooms")||_.includes("personal spaces")}function Ku(b){return String(b||"").toLowerCase().includes("laundry")}function lo(b){return so(b)||Ku(b)}function Bu(b){const _=String(b||"").toLowerCase();return _.includes("clean basement")||_.includes("basement")}function qu(b){const _=String(b||"").toLowerCase();return _.includes("feeding station")||_.includes("herd feeding")||_.includes("deep clean")&&_.includes("feeding")}function An(b){const _=String(b||"").toLowerCase();return _.includes("sign-off")||_.includes("sign off")||_.includes("inspection")}function hd(b,_){if(lo(b)||An(b))return!1;if(Bu(b)||qu(b))return!0;const v=String(b||"").toLowerCase();return!!(v.includes("curbside")||v.includes("recycling")||v.includes("waste")||_&&(_.frequency==="weekly"||_.frequency==="biweekly"))}function hr(b){const v=String(b||"").match(/tidy bedroom:\s*([A-Za-z]+)/i);return v?v[1].trim():null}function io(b,_,v){const V=new Date(b,_,v,12,0,0),K=new Date(2026,9,18,12,0,0),Q=(Math.round((V.getTime()-K.getTime())/(1e3*60*60*24))%14+14)%14;return Q===0?{isPresent:!0,label:"Arrives 5 PM",fullLabel:"Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",cycleIndex:Q,isArrivalDay:!0,isDepartureDay:!1,isFullStay:!1}:Q>=1&&Q<=6?{isPresent:!0,label:"Here (Kids Week)",fullLabel:"Cadence & Mason are here this week (Kids Week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!0}:Q===7?{isPresent:!0,label:"Leaves 5 PM",fullLabel:"Cadence & Mason depart today at 5:00 PM (End of Kids Week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!0,isFullStay:!1}:{isPresent:!1,label:"Away (Off Week)",fullLabel:"Cadence & Mason are away this week (Off week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!1}}function Ru(b,_="Cadence & Mason"){if(!b||b.length<7)return null;const v=b[6],V=b[0],K=io(V.year,V.month,V.day);return io(v.year,v.month,v.day).isArrivalDay?{text:`${_} arrive Sunday at 5:00 PM`,badgeBg:"bg-pink-50 text-pink-700 border-pink-200"}:K.isPresent&&K.isFullStay?{text:`${_} here this week (leave Sun 5 PM)`,badgeBg:"bg-emerald-50 text-emerald-700 border-emerald-200"}:{text:`${_} away this week (next back on Sunday)`,badgeBg:"bg-slate-100 text-slate-500 border-slate-200"}}function ip(b){if(!b||b.length<6)return!1;const _=b[5]||b[b.length-1],v=io(_.year,_.month,_.day);return v.isFullStay||v.isDepartureDay}function $u(b,_,v,V=["Thom","Meghan"]){const K=new Date(b,_,v,12,0,0),$=new Date(2026,9,11,12,0,0),Q=Math.round((K.getTime()-$.getTime())/(1e3*60*60*24*7)),de=V&&V.length>0?V:["Thom","Meghan"],ne=(Q%de.length+de.length)%de.length;return de[ne]}var dp=[{name:"Ellie",kind:"Dog",icon:"🐕"},{name:"Lewis",kind:"Dog",icon:"🐕"},{name:"Casey",kind:"Cat",icon:"🐈"},{name:"Gigi",kind:"Cat",icon:"🐈"},{name:"Sloane",kind:"Cat",icon:"🐈"},{name:"Scoob",kind:"Cat",icon:"🐈"}],Sn=[{id:"Pet Care",name:"Pet Care",icon:"🐾",bg:"bg-amber-50",text:"text-amber-800",border:"border-amber-200",dot:"#D97706"},{id:"Kitchen",name:"Kitchen",icon:"🍽️",bg:"bg-emerald-50",text:"text-emerald-800",border:"border-emerald-200",dot:"#059669"},{id:"Bedrooms",name:"Bedrooms",icon:"🛏️",bg:"bg-pink-50",text:"text-pink-800",border:"border-pink-200",dot:"#DB2777"},{id:"Household",name:"Household",icon:"🏠",bg:"bg-blue-50",text:"text-blue-800",border:"border-blue-200",dot:"#2563EB"}],pd=[{title:"Empty the Litter Box (Morning & Evening)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening scoop, waste disposal"},{title:"Feed the Herd (Breakfast & Supper)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening feeding, refresh water bowls"},{title:"Make Supper: Plan Ahead!",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Parents & Kids",notes:"Meal prep, cooking, family dinner"},{title:"Dinner Dishes & Kitchen Cleanup",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Clear table, dishwasher, wipe counters & sink"},{title:"Tidy Bedrooms & Checklist",category:"Bedrooms",who:"Each Child",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Occupants",notes:"Pick up mess & laundry, dust surfaces, vacuum floors"},{title:"Laundry (Wash, Fold, Put Away)",category:"Household",who:"Sydney",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"Sydney",notes:"Linens, clothes, fold and put in drawers"},{title:"Clean Basement & Rec Room",category:"Household",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Kids",notes:"Tidy items, organize games, vacuum carpet"},{title:"Weekly Sign-Off & Inspection",category:"Administration",who:"Parents",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"},{title:"Herd Feeding Station Deep Clean",category:"Pet Care",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Full-Time Roster",notes:"Wash & sanitize pet bowls, wipe feeding mat"},{title:"Curbside Recycling",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"},{title:"Curbside Waste",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"},{title:"Walk Dogs: Ellie & Lewis (Morning & Evening walk)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening walk for Ellie & Lewis"}];function Lt(b,_,v,V){const K=String(b||"").toLowerCase(),$=K.includes("recycling"),Q=K.includes("waste");if(!$&&!Q)return!0;const de=new Date(_,v,V,12,0,0),ne=new Date(2026,9,15,12,0,0),M=Math.round((de.getTime()-ne.getTime())/(1e3*60*60*24)),O=(Math.round(M/7)%2+2)%2;return $?O===0:Q?O===1:!0}function Al(b){const _=String(b||"").toLowerCase().trim();return _.includes("recycling")||_.includes("waste")?{frequency:"biweekly",dayOfWeek:3}:_.includes("sign-off")||_.includes("inspection")||_.includes("deep clean")||_.includes("feeding station")?{frequency:"weekly",dayOfWeek:6}:_.includes("tidy bedroom")||_.includes("clean basement")||_.includes("laundry")?{frequency:"weekly",dayOfWeek:5}:{frequency:"daily",dayOfWeek:0}}function Lu(b){return b<10?"0"+b:""+b}function Dn(b,_,v){return`${b}-${Lu(_+1)}-${Lu(v)}`}function Rt(b){if(b==null||b==="")return null;if(b instanceof Date)return{year:b.getFullYear(),month:b.getMonth(),day:b.getDate()};if(typeof b=="number"){if(b>3e4&&b<6e4){const V=(b-25569)*86400*1e3,K=new Date(V);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const _=String(b).trim();if(!_.includes("-")){const V=Number(_);if(!isNaN(V)&&V>3e4&&V<6e4){const K=new Date((V-25569)*86400*1e3);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const v=_.split("-").map(Number);return v.length!==3||isNaN(v[0])||isNaN(v[1])||isNaN(v[2])?null:{year:v[0],month:v[1]-1,day:v[2]}}function Hu(b,_,v){const K=new Date(b,_,v).getDay(),$=K===0?-6:1-K,Q=new Date(b,_,v+$);return{year:Q.getFullYear(),month:Q.getMonth(),day:Q.getDate()}}function Ko(b,_,v){const V=Hu(b,_,v),K=[];for(let $=0;$<7;$++){const Q=new Date(V.year,V.month,V.day+$),de=Q.getFullYear(),ne=Q.getMonth(),M=Q.getDate();K.push({year:de,month:ne,day:M,dateKey:Dn(de,ne,M),isCurrentMonth:!0,dayOfWeekIndex:$})}return K}function ks(){const b=new Date,_=Hu(b.getFullYear(),b.getMonth(),b.getDate());return{..._,todayYear:b.getFullYear(),todayMonth:b.getMonth(),todayDay:b.getDate(),dateKey:Dn(_.year,_.month,_.day)}}function cp(b,_=pd){const v=Rt(b)||{year:2026,month:9,day:12},V=Ko(v.year,v.month,v.day),K=["Thom","Meghan"],$=["Sydney"],Q=["Sydney","Cadence","Mason"],de=["Thom","Meghan","Sydney"],ne=["Thom","Meghan","Sydney","Cadence","Mason"],M={},H=Math.floor(v.day/7);return V.forEach((O,ee)=>{const we=O.dateKey;M[we]={};const We=io(O.year,O.month,O.day),xe=We.isFullStay||We.isDepartureDay,te=xe?ne:de,Pe=xe?Q:$,Ee=ee%te.length;let re=0;_.forEach((pe,tt)=>{var lt,Je,Ge,Re,ke,Ye,Ae;const ze=pe.task||pe.title||((lt=pe.row)==null?void 0:lt[0])||"",Oe=ze.toLowerCase(),oe=Al(ze);let ve=!1;const le=Oe.includes("deep clean")||Oe.includes("feeding station"),L=Oe.includes("recycling"),Y=Oe.includes("waste");if(le)ve=ee===6;else if(L)ve=ee===3&&Lt("recycling",O.year,O.month,O.day);else if(Y)ve=ee===3&&Lt("waste",O.year,O.month,O.day);else if(oe.frequency==="daily"||(Je=pe.frequency)!=null&&Je.toLowerCase().includes("daily")&&!((Ge=pe.frequency)!=null&&Ge.toLowerCase().includes("once")))ve=!0;else if(oe.frequency==="biweekly"||(Re=pe.frequency)!=null&&Re.toLowerCase().includes("bi"))ve=ee===3&&Lt(ze,O.year,O.month,O.day);else if(oe.frequency==="weekly"||(ke=pe.frequency)!=null&&ke.toLowerCase().includes("weekly")&&!((Ye=pe.frequency)!=null&&Ye.toLowerCase().includes("bi"))||(Ae=pe.frequency)!=null&&Ae.toLowerCase().includes("once")){const ye=String(pe.targetDay||"").toLowerCase(),be=ye.includes("sunday")?6:ye.includes("thursday")?3:5;ve=ee===be}let U="";if(!ve)U="";else if(lo(ze))U="";else if(ee===6&&Oe.includes("supper"))U=$u(O.year,O.month,O.day,K);else if(Oe.includes("sign-off")||Oe.includes("inspection"))U=K[ee%K.length];else if(Oe.includes("basement"))U=Pe[(H+1)%Pe.length];else if(le)U=te[(H+2)%te.length];else if(Oe.includes("recycling"))U=te[(H+3)%te.length];else if(Oe.includes("waste"))U=te[(H+4)%te.length];else{const ye=String(pe.rotationGroup||"").toLowerCase();ye.includes("parent")?U=K[(Ee+re)%K.length]:ye.includes("kid")?U=Pe[(Ee+re)%Pe.length]:(U=te[(Ee+re)%te.length],re++)}const x=pe.index_!==void 0?pe.index_:5+tt,R={who:U,done:!1,kidsDone:{}};M[we][x]=R,pe.index_!==void 0&&(M[we][pe.index_]=R),ze&&(M[we][ze]=R,M[we][Oe]=R)})}),M}function Fu(b,_){const v=Rt(_)||{year:2026,month:9,day:12},V=Ko(v.year,v.month,v.day),K={};return V.forEach($=>{K[$.dateKey]={}}),!b||!Array.isArray(b)||b.forEach($=>{if($.index_<4||!$.row||$.row.length===0)return;const Q=String($.row[0]||"").trim(),de=Q.toLowerCase();if(!Q||Q.startsWith("•")||de==="daily tasks"||de==="weekly tasks"||Q.toUpperCase().includes("SECTION")||Q.toUpperCase().includes("ONCE-A-WEEK")||Q.toUpperCase().includes("ROSTER")||Q.toUpperCase().includes("PET CARE"))return;const ne=Q.toLowerCase(),M=ht(Q),H=$.index_;V.forEach((O,ee)=>{const we=1+ee*2,We=2+ee*2,xe=$.row[we]!==void 0&&$.row[we]!==null?String($.row[we]).trim():"",Pe=xe.startsWith("-")||xe.startsWith("(")||xe.startsWith("SG:")||xe.startsWith("Done:")||xe.startsWith("Parent Initials")||xe.startsWith("___")||/^Who:\s*_+$/i.test(xe)?"":xe.replace(/^Who:\s*/i,"").trim(),Ee=$.row[We]===!0||String($.row[We]).toLowerCase()==="true",re={who:Pe,done:Ee,kidsDone:{}};lo(Q)&&(($.row[2]===!0||String($.row[2]).toLowerCase()==="true")&&(re.kidsDone.Sydney=!0),($.row[4]===!0||String($.row[4]).toLowerCase()==="true")&&(re.kidsDone.Cadence=!0),($.row[6]===!0||String($.row[6]).toLowerCase()==="true")&&(re.kidsDone.Mason=!0),($.row[12]===!0||String($.row[12]).toLowerCase()==="true")&&(re.kidsDone.Koda=!0),($.row[14]===!0||String($.row[14]).toLowerCase()==="true")&&(re.kidsDone.Keyanna=!0)),K[O.dateKey][H]=re,K[O.dateKey][Q]=re,K[O.dateKey][ne]=re,M&&(K[O.dateKey][M]=re)})}),K}function up({data:b,updateItem:_,deleteItem:v,insertItem:V,moveItem:K,followLink:$}){var Q,de,ne;const[M,H]=F.useState(()=>new Set),[O,ee]=F.useState({}),[we,We]=F.useState([]),[xe,te]=F.useState([]),[Pe,Ee]=F.useState(null),[re,pe]=F.useState(null),[tt,lt]=F.useState(null),Je=F.useMemo(()=>!b||!Array.isArray(b)?null:b.find(s=>{const i=String(s.name||"").toLowerCase();return(i.includes("printable")||i.includes("weekly")&&i.includes("schedule"))&&!i.includes("hub")})||b[0],[b]),Ge=F.useMemo(()=>!b||!Array.isArray(b)?null:b.find(s=>{const i=String(s.name||"").toLowerCase();return i.includes("hub")||i.includes("household")||i.includes("directory")||i.includes("roster")})||(b.length>1?b[1]:b[0]),[b]),Re=(Q=Je==null?void 0:Je.index_)!=null?Q:0,ke=(de=Ge==null?void 0:Ge.index_)!=null?de:(b==null?void 0:b.length)>1?1:0,Ye=Ge||{data:[]},Ae=Je||{data:[]},ze=Re,Oe=Ye;Ae!=null&&Ae.data;const oe=(s,i)=>{if(!(Ae!=null&&Ae.data)||Ae.data.length===0)return null;const c=ht(s),m=Me(s);if(c){const h=Ae.data.find(u=>u.index_<4||!u.row||!u.row[0]?!1:ht(u.row[0])===c);if(h)return h}if(m){const h=Ae.data.find(d=>d.index_<4||!d.row||!d.row[0]?!1:Me(d.row[0])===m);if(h)return h;const u=Ae.data.find(d=>{if(d.index_<4||!d.row||!d.row[0])return!1;const f=Me(d.row[0]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(u)return u}if(!s&&i!==void 0&&i!==null){const h=Ae.data.find(u=>u.index_===i&&u.index_>=4);if(h)return h}return null},ve=(s,i)=>{const c=oe(s,i);return c?c.index_:i},le=(s,i)=>{if(!(Ye!=null&&Ye.data)||Ye.data.length===0)return null;const c=ht(s),m=Me(s);if(c){const h=Ye.data.find(u=>u.index_<5||!u.row||!u.row[6]?!1:ht(u.row[6])===c);if(h)return h}if(m){const h=Ye.data.find(d=>d.index_<5||!d.row||!d.row[6]?!1:Me(d.row[6])===m);if(h)return h;const u=Ye.data.find(d=>{if(d.index_<5||!d.row||!d.row[6])return!1;const f=Me(d.row[6]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(u)return u}if(!s&&i!==void 0&&i!==null){const h=Ye.data.find(u=>u.index_===i&&u.index_>=5);if(h)return h}return null},L=(s,i)=>{const c=le(s,i);return c?c.index_:i},Y=F.useMemo(()=>{const s=Oe.data||[];let i="2026-10-12",c="Kids Week",m="Mason, Cadence",h="Bi-Weekly Schedule continuing on from first Friday specified",u="Non-Casual";return s.forEach(d=>{if(!d.row)return;const f=String(d.row[6]||"").toLowerCase().trim(),g=d.row[7],N=String(d.row[8]||"").trim(),j=String(d.row[10]||"").trim();if(f.includes("active week")){const A=Rt(g);A?i=Dn(A.year,A.month,A.day):g&&(i=String(g).trim())}else f.includes("custody schedule")?(g&&(c=String(g).trim()),j&&(m=j)):(f.includes("waste")||f.includes("recycling"))&&(N&&(h=N),j&&(u=j))}),{activeWeekStart:i,custodyRotation:c,custodyMembers:m,wasteRotation:h,wasteMembers:u}},[Oe]),U=F.useMemo(()=>{const s=Oe.data||[],i=[];return s.forEach(c=>{if(!c.row||c.index_<14||c.index_>17)return;const m=String(c.row[0]||"").trim();!m||m.toLowerCase()==="type"||m.toLowerCase().includes("occupancy")||m.toLowerCase().includes("special rotation")||i.push({type:m,description:String(c.row[1]||"").trim(),rules:String(c.row[2]||"").trim(),active:c.row[4]!==!1&&String(c.row[4]).toLowerCase()!=="false"})}),i.length>0?i:[{type:"Full-Time",description:"Constant Residency",rules:"Included in all weekly/monthly schedulings",active:!0},{type:"Bi-Weekly",description:"Half-Time Residency",rules:'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',active:!0},{type:"Casual",description:"Periodic Residency",rules:"Manually added to any schedules",active:!0}]},[Oe]),x=F.useMemo(()=>{const i=(Oe.data||[]).filter(c=>{if(!!!(c.row&&c.row[5]==="MEMBER_ROW")&&(c.index_<4||c.index_>12)||!c.row||!c.row[0])return!1;const h=String(c.row[0]).trim();if(!h)return!1;const u=h.toLowerCase();return!(u==="household members"||u==="name"||u.includes("directory")||u.includes("occupancy"))});return i.length===0?[{id:"Thom",name:"Thom",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8",index_:5},{id:"Meghan",name:"Meghan",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9",index_:6},{id:"Sydney",name:"Sydney",role:"Minion",residency:"Full-Time",type:"regular",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#0D9488",bg:"#CCFBF1",text:"#0F766E",index_:7},{id:"Cadence",name:"Cadence",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EC4899",bg:"#FCE7F3",text:"#BE185D",index_:8},{id:"Mason",name:"Mason",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",index_:9},{id:"Koda",name:"Koda",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",index_:10},{id:"Keyanna",name:"Keyanna",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#D97706",bg:"#FEF3C7",text:"#B45309",index_:11}]:i.map((c,m)=>{const h=String(c.row[0]||"").trim(),u=String(c.row[1]||"").trim()||(["thom","meghan"].includes(h.toLowerCase())?"Overseer Supreme":"Minion"),d=String(c.row[2]||"").trim(),f=String(c.row[3]||"").trim(),g=c.row[4]===!0||String(c.row[4]).toLowerCase()==="true",N=d.toLowerCase();let j="regular";N.includes("bi-weekly")||N.includes("biweekly")?j="biweekly":N.includes("casual")&&(j="casual");const A=lp[h.toLowerCase()]||vs[m%vs.length];return{id:h,name:h,role:u,residency:d||(j==="biweekly"?"Bi-Weekly":j==="casual"?"Casual":"Full-Time"),type:j,specialGroups:f,schedule:j==="biweekly"?"Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)":j==="casual"?"Periodic Residency (Manual Add)":"Constant Residency (Full-Time)",active:g,color:A.color,bg:A.bg,text:A.text,index_:c.index_}})},[Oe]),R=F.useMemo(()=>["All","Kids","Parents","Non-Casual"].map(i=>{const c=x.filter(m=>String(m.specialGroups||"").split(",").map(u=>u.trim().toLowerCase()).filter(Boolean).includes(i.toLowerCase())).map(m=>m.name);return{name:i,members:c.length>0?c.join(", "):"None",active:!0}}),[x]),ye=F.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")&&!i.includes("admin")&&!i.includes("mom")&&!i.includes("dad")}).map(s=>s.name),[x]),be=F.useMemo(()=>{const s=["Sydney","Cadence","Mason","Koda","Keyanna"],i=Array.from(new Set([...ye,...s]));return i.length>0?i:s},[ye]),je=F.useMemo(()=>{const s=Oe.data||[],i=s.find(c=>{var m;const h=String(((m=c.row)==null?void 0:m[0])||"").toLowerCase().trim();return h.includes("pet care profile")||h==="pet name"});return i?s.filter(m=>{if(m.index_<=i.index_||!m.row||!m.row[0]||m.row[5]==="MEMBER_ROW")return!1;const u=String(m.row[0]).trim().toLowerCase();return u!=="pet name"&&!u.includes("profile")}).map((m,h)=>{const u=String(m.row[0]).trim(),d=String(m.row[1]||"").trim(),f=String(m.row[2]||"").trim(),g=String(m.row[3]||"").trim(),N=m.row[4]!==!1&&String(m.row[4]).toLowerCase()!=="false",j=["ellie","lewis"].includes(u.toLowerCase()),A=d||(j?"Dog":"Cat"),w=A.toLowerCase(),C=w.includes("dog"),I=C?"🐕":w.includes("cat")?"🐈":w.includes("bird")?"🐦":w.includes("fish")?"🐟":"🐾",z=f||"Morning & Evening",P=["meghan","thom","sydney"].includes(g.toLowerCase()),W=!g||P?C?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water":g,J=Mu[u.toLowerCase()]||vs[h%vs.length];return{name:u,type:A,routine:z,care:W,active:N,icon:I,color:J.color,bg:J.bg,text:J.text,border:J.border||J.color,index_:m.index_}}):dp.map((c,m)=>{const h=Mu[c.name.toLowerCase()]||vs[m%vs.length];return{name:c.name,type:c.kind,routine:"Morning & Evening",care:c.kind==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water",active:!0,icon:c.icon,color:h.color,bg:h.bg,text:h.text,border:h.border||h.color,index_:15+m}})},[Oe]),Ce=F.useMemo(()=>{const s=Oe.data||[];let i=[];const c=new Set,m=new Set;if(s.forEach(h=>{if(!h.row||h.index_<5)return;const u=h.row[6]!==void 0&&h.row[6]!==null?String(h.row[6]).trim():"";if(!u)return;const d=u.toLowerCase(),f=Me(u),g=ht(u);if(d==="chore"||d==="parameter"||d.includes("schedule configuration")||d.includes("active week")||d.includes("waste / recycling")||d.includes("custody schedule")||d.includes("pet care profile")||d.includes("special rotation")||d.includes("occupancy categories")||d.includes("household member")||An(u)||g==="weekly_sign_off"||c.has(g)||m.has(f)||M.has(String(h.index_))||M.has(d)||M.has(f)||M.has(g))return;const N=String(h.row[7]||"").trim(),j=String(h.row[8]||"").trim(),A=String(h.row[9]||"").trim(),w=String(h.row[10]||"").trim(),C=String(h.row[11]||"").trim(),I=Sn.some(_e=>_e.name.toLowerCase()===N.toLowerCase()),W=(_e=>{const Ke=String(_e).trim().toLowerCase();return!Ke||Ke==="all non-casual"||Ke==="non-casual"||Ke==="parents & kids"||Ke==="full-time roster"?"Non-Casual":Ke==="kids"||Ke==="kids rotation"||Ke==="all kids"?"Kids":Ke==="parents"?"Parents":Ke==="all"||Ke==="all occupants"?"All":String(_e).trim()})(I?w||"Non-Casual":N||"Non-Casual"),Z=(j||(g.includes("curbside")?"Bi-Weekly":g.includes("deep_clean")||g.includes("sign_off")||g.includes("bedroom")||g.includes("laundry")||g.includes("basement")?"Once a Week":"Daily")).toLowerCase(),ce=Z.includes("bi")?"Bi-Weekly":Z.includes("once")||Z.includes("weekly")?"Once a Week":"Daily",Fe=(A==="N/A"||!A?ce==="Daily"?"Mon – Sun":ce==="Bi-Weekly"?"Thursday Evening":"Saturday":A).replace(/\s*\(required\)/i,"").trim()||"Mon – Sun",Ie=I?C:w;let Te=I?N:C&&Sn.some(_e=>_e.name.toLowerCase()===C.toLowerCase())?C:"Household";!I&&Te==="Household"&&(d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?Te="Pet Care":d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")||d.includes("cook")?Te="Kitchen":d.includes("bedroom")?Te="Bedrooms":d.includes("basement")?Te="Household":(d.includes("sign-off")||d.includes("inspection"))&&(Te="Administration")),c.add(g),m.add(f),i.push({index_:h.index_,task:u,canonicalKey:g,category:Te,frequency:ce,targetDay:Fe==="N/A"?"Mon – Sun":Fe,rotationGroup:W,notes:Ie,source:"hub_master_registry"})}),Ae!=null&&Ae.data&&Ae.data.forEach(h=>{if(h.index_<4||!h.row||!h.row[0])return;const u=String(h.row[0]).trim(),d=u.toLowerCase(),f=Me(u),g=ht(u);if(!f||f==="daily tasks"||f==="weekly tasks"||f.includes("section")||f.includes("once a week")||f.includes("bedroom checklist")||f.includes("pet care routine")||f.startsWith("•")||An(u)||g==="weekly_sign_off"||c.has(g)||m.has(f)||M.has(f)||M.has(g)||M.has(String(h.index_)))return;c.add(g),m.add(f);const N=Al(u),j=N.frequency==="weekly",A=N.frequency==="biweekly";let w="Household",C="";d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?(w="Pet Care",d.includes("walk")&&(C="Morning & evening walk for Ellie & Lewis")):d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")?w="Kitchen":d.includes("bedroom")?w="Bedrooms":d.includes("basement")?w="Household":(d.includes("sign-off")||d.includes("inspection"))&&(w="Administration"),i.push({index_:h.index_,task:u,canonicalKey:g,category:w,frequency:A?"Bi-Weekly":j?"Once a Week":"Daily",targetDay:A?"Thursday Evening":j?"Saturday":"Mon – Sun",rotationGroup:"Non-Casual",notes:C,source:"printable_sheet"})}),xe.length>0&&xe.forEach(h=>{const u=Me(h.task),d=ht(h.task);!c.has(d)&&!m.has(u)&&!M.has(String(h.index_))&&!M.has(u)&&!M.has(d)&&(c.add(d),m.add(u),i.push(h))}),i.length===0&&(i=pd.filter(h=>!An(h.title)).map((h,u)=>{var d,f;return{index_:5+u,task:h.title,category:h.category||"Household",frequency:((d=h.freq)==null?void 0:d.frequency)==="weekly"?"Once a Week":((f=h.freq)==null?void 0:f.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:h.targetDay||"Mon – Sun",rotationGroup:h.rotationGroup||"Non-Casual",notes:h.notes||"",source:"default"}})),Pe&&Array.isArray(Pe)&&Pe.length>0){const h=u=>{const d=Me(u.task),f=Pe.indexOf(d);if(f!==-1)return f;const g=(u.task||"").toLowerCase().trim(),N=Pe.indexOf(g);if(N!==-1)return N;const j=ht(u.task);if(j){const A=Pe.findIndex(w=>ht(w)===j);if(A!==-1)return A}return-1};i.sort((u,d)=>{const f=h(u),g=h(d);return f!==-1&&g!==-1?f-g:f!==-1?-1:g!==-1?1:0})}return i},[Oe,xe,Pe,M]),De=F.useMemo(()=>s=>{if(!s)return null;const i=String(s).trim().toLowerCase();return x.find(c=>c.name.toLowerCase()===i||c.id.toLowerCase()===i||i==="mom"&&(c.name.toLowerCase().includes("megh")||c.role.toLowerCase().includes("mom")||c.role.toLowerCase().includes("parent"))||i==="dad"&&(c.name.toLowerCase()==="thom"||c.role.toLowerCase().includes("dad")||c.role.toLowerCase().includes("parent")))||null},[x]),He=F.useMemo(()=>{const s=x.filter(i=>i.type==="biweekly").map(i=>i.name);return s.length>0?s.join(" & "):"Cadence & Mason"},[x]),Be=F.useMemo(()=>Y!=null&&Y.activeWeekStart?Y.activeWeekStart:"2026-10-12",[Y]);F.useMemo(()=>Rt(Be)||{year:2024,month:6,day:15},[Be]);const pt=F.useMemo(()=>{const s=(Ae==null?void 0:Ae.data)||[],i=(d,f)=>{const g=ht(d);if(g==="litter_box"||g==="feed_herd"||g==="empty_dishwasher"||g==="make_supper"||g==="dinner_dishes"||g==="walk_dogs")return!0;if(g==="curbside_recycling"||g==="curbside_waste"||g==="clean_basement"||g==="feeding_station_deep_clean"||g==="tidy_bedrooms"||g==="laundry")return!1;const N=String(f||"").toLowerCase();return N.includes("bi")||N.includes("once")||N.includes("week")?!1:N.includes("daily")?!0:Al(d).frequency==="daily"},c=[],m=[],h=new Set;Ce.forEach(d=>{if(An(d.task))return;const f=ht(d.task),g=Me(d.task);if(h.has(f)||h.has(g))return;h.add(f),h.add(g);const N=s.find(C=>{if(C.index_<4||!C.row||!C.row[0])return!1;const I=String(C.row[0]).trim();return ht(I)===f||Me(I)===g}),j=i(d.task,d.frequency);let A=N!=null&&N.row?[...N.row]:null;if(A)!j&&d.notes&&String(d.notes).trim()&&(A[1]=String(d.notes).trim());else if(j)A=[d.task,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];else if(lo(d.task))A=[d.task,d.notes||"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1];else{const C=d.notes||(f.includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":f.includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"- Pick Up, Organize, Dust & Vacuum");A=[d.task,C,null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]}const w={isSectionHeader:!1,index_:N?N.index_:d.index_,row:A,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};j?c.push(w):m.push(w)}),s.forEach(d=>{if(d.index_<4||!d.row||!d.row[0])return;const f=String(d.row[0]).trim(),g=f.toLowerCase();if(!f||g==="daily tasks"||g==="weekly tasks"||g.includes("once-a-week")||g.includes("bedroom checklist")||g.includes("pet care routine")||g.includes("household roster")||g.includes("bi-weekly schedule")||g.startsWith("•")||An(f))return;const N=ht(f),j=Me(f);if(h.has(N)||h.has(j))return;h.add(N),h.add(j);const A=i(f),w={isSectionHeader:!1,index_:d.index_,row:d.row,task:f};A?c.push(w):m.push(w)}),we.length>0&&we.forEach(d=>{const f=ht(d.task),g=Me(d.task);if(h.has(f)||h.has(g))return;h.add(f),h.add(g);const N=i(d.task,d.frequency),j={isSectionHeader:!1,index_:d.index_,row:d.row,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};N?c.push(j):m.push(j)});const u=[];return u.push({isSectionHeader:!0,headerType:"daily",index_:4,title:"Daily Tasks"}),u.push(...c),u.push({isSectionHeader:!0,headerType:"weekly",index_:10,title:"Weekly Tasks",descHeader:"Description",rightHeader:"Initials / Assigned"}),u.push(...m),u.push({isSectionHeader:!1,index_:18,row:["Weekly Sign-Off & Inspection","Parents",!1,null,null,null,null,null,null,"Thom / Meghan",null,null,null,null,null],task:"Weekly Sign-Off & Inspection",category:"Administration",frequency:"Once a Week",targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"}),u.filter(d=>{if(d.isSectionHeader||An(d.task))return!0;const f=String(d.index_),g=String(d.task||"").toLowerCase().trim(),N=Me(d.task),j=ht(d.task);return!(M.has(f)||M.has(g)||M.has(N)||M.has(j))}).map(d=>{if(d.isSectionHeader)return d;const f=O[d.index_]||O[String(d.task||"").toLowerCase().trim()]||(d.task?O[ht(d.task)]:null);if(!f)return d;const g=f.task||d.task,N=f.row?[...f.row]:[...d.row||[]];return N[0]=g,{...d,task:g,row:N,category:f.category||d.category,frequency:f.frequency||d.frequency,targetDay:f.targetDay||d.targetDay,rotationGroup:f.rotationGroup||d.rotationGroup,notes:f.notes||d.notes}})},[Ae,Ce,we,M,O]),ge=F.useMemo(()=>{const s=pt.filter(i=>!i.isSectionHeader).map(i=>{const c=i.task,m=ht(c),h=Me(c),u=Ce.find(A=>{if(m&&ht(A.task)===m||h&&Me(A.task)===h)return!0;const w=A.task.toLowerCase().trim();return c.toLowerCase().trim()===w})||Ce.find(A=>{const w=A.task.toLowerCase().trim(),C=c.toLowerCase().trim();return C.includes("deep clean")&&w.includes("deep clean")||C.includes("feed the herd")&&w.includes("feed the herd")?!0:C.includes(w)||w.includes(C)||C.includes("dishes")&&w.includes("dishes")||C.includes("litter")&&w.includes("litter")||C.includes("supper")&&w.includes("supper")||C.includes("basement")&&w.includes("basement")||C.includes("laundry")&&w.includes("laundry")||C.includes("sign-off")&&w.includes("sign-off")});let d=(u==null?void 0:u.category)||"Household",f=(u==null?void 0:u.frequency)||"Daily",g=(u==null?void 0:u.targetDay)||"Mon – Sun",N=(u==null?void 0:u.rotationGroup)||"Kids Rotation",j=(u==null?void 0:u.notes)||"";return c.toLowerCase().includes("deep clean")||c.toLowerCase().includes("feeding station")?(d="Pet Care",f="Once a Week",g="Sunday",N=(u==null?void 0:u.rotationGroup)||"All",j=(u==null?void 0:u.notes)||"Wash & sanitize pet bowls, vacuum feeding mat"):c.toLowerCase().includes("recycling")?(d="Household",f="Bi-Weekly",g="Thursday Evening",N=(u==null?void 0:u.rotationGroup)||"All Non-Casual",j=(u==null?void 0:u.notes)||"Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)"):c.toLowerCase().includes("waste")?(d="Household",f="Bi-Weekly",g="Thursday Evening",N=(u==null?void 0:u.rotationGroup)||"All Non-Casual",j=(u==null?void 0:u.notes)||"Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)"):c.toLowerCase().includes("litter")||c.toLowerCase().includes("feed")?d="Pet Care":c.toLowerCase().includes("supper")||c.toLowerCase().includes("dishes")?d="Kitchen":so(c)?(d="Bedrooms",f="Once a Week",g="Saturday",N=hr(c)||"Each Child"):c.toLowerCase().includes("basement")?(d="Household",f="Once a Week",g="Saturday",N="All Kids"):c.toLowerCase().includes("laundry")?(d="Household",f="Once a Week",g="Saturday",N="Sydney"):c.toLowerCase().includes("sign-off")&&(d="Administration",f="Once a Week",g="Sunday",N="Parents"),{index_:i.index_,row:i.row,task:c,category:d,frequency:f,targetDay:g,rotationGroup:N,notes:j}});return s.length>0?s:pd.map((i,c)=>{var m,h;return{index_:4+c,row:[i.title,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1],task:i.title,category:i.category,frequency:((m=i.freq)==null?void 0:m.frequency)==="weekly"?"Once a Week":((h=i.freq)==null?void 0:h.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:i.targetDay,rotationGroup:i.rotationGroup,notes:i.notes}})},[pt,Ce]),pr=F.useMemo(()=>ks(),[]),[qt,en]=F.useState("matrix"),[_t,jn]=F.useState(()=>pr.todayYear),[it,Kr]=F.useState(()=>pr.todayMonth),[mt,tn]=F.useState(()=>pr.dateKey),[Jt,ga]=F.useState("ALL"),[Ft,rn]=F.useState(null),[wa,uo]=F.useState(!1),[As,Tn]=F.useState(!1),[ba,Br]=F.useState(!1),[mr,_a]=F.useState("add"),[ar,nn]=F.useState([]),[Ds,js]=F.useState(""),[fr,Nr]=F.useState(null),[ho,Bo]=F.useState(""),[xr,on]=F.useState("daily"),[qo,Ts]=F.useState(5),[$o,Ho]=F.useState("All Non-Casual"),[va,po]=F.useState(!1),[ka,qr]=F.useState(!1),[Es,En]=F.useState(null),[Ms,mo]=F.useState(["Kids","Non-Casual","All"]),[$t,Mn]=F.useState(null),[yr,Rs]=F.useState(null),[Ca,fo]=F.useState(""),[Sr,Na]=F.useState(""),[Ls,fe]=F.useState(null),[zo,Sa]=F.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Fs,Is]=F.useState(!1),[Go,Rn]=F.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[ot,Ws]=F.useState("ALL"),[Ar,Ln]=F.useState("ALL"),[$r,Os]=F.useState(""),[Ps,Dr]=F.useState(null),[qe,It]=F.useState(null),[Wt,jr]=F.useState(null),[Aa,xo]=F.useState(!1),[Ze,Ht]=F.useState({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",selectedTargetDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],customTargetEnabled:!1,customTargetText:"",rotationGroup:"Non-Casual",notes:""}),yo=async()=>{try{const s=localStorage.getItem(Ss),i=s?JSON.parse(s):b,m=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:i})})).json();m.ok?fe("✓ Current browser setup saved as the new default in code and weekly-chores-config.json!"):fe(`⚠️ Save failed: ${m.error}`)}catch(s){fe(`⚠️ Save failed: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>fe(null),4e3)},Uo=()=>{try{const s=localStorage.getItem(Ss),c={sheetData:s?JSON.parse(s):b,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},m=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),h=URL.createObjectURL(m),u=document.createElement("a"),d=new Date().toISOString().slice(0,10);u.href=h,u.download=`weekly-chores-config-${d}.json`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(h),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{}),fe("✓ Configuration file exported and saved to workspace!"),setTimeout(()=>fe(null),3500)}catch(s){fe(`⚠️ Export failed: ${(s==null?void 0:s.message)||String(s)}`),setTimeout(()=>fe(null),3500)}},Tl=s=>{var m;const i=(m=s.target.files)==null?void 0:m[0];if(!i)return;const c=new FileReader;c.onload=h=>{var u;try{const d=JSON.parse((u=h.target)==null?void 0:u.result),f=d.sheetData||(Array.isArray(d)?d:null);Array.isArray(f)&&f.length>0?(localStorage.setItem(Ss,JSON.stringify(f)),window.postMessage({type:"SYNC_DATA",payload:f},"*"),fe(`✓ Loaded configuration from "${i.name}"!`)):fe("⚠️ Invalid configuration file: Missing sheetData")}catch(d){fe(`⚠️ Failed to parse config file: ${(d==null?void 0:d.message)||String(d)}`)}setTimeout(()=>fe(null),4e3)},c.readAsText(i),s.target.value=""},Hr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],sn=s=>{const i=String(s||"").trim();if(!i||i==="Mon – Sun"||i==="Mon - Sun"||i.toLowerCase()==="daily")return{selectedDays:[...Hr],customEnabled:!1,customText:""};const c=i.split(",").map(u=>u.trim()).filter(Boolean),m=[],h=[];return c.forEach(u=>{const d=Hr.find(f=>f.toLowerCase()===u.toLowerCase());d?m.includes(d)||m.push(d):h.push(u)}),{selectedDays:Hr.filter(u=>m.includes(u)),customEnabled:h.length>0,customText:h.join(", ")}},Tr=(s,i,c)=>{const m=Hr.filter(d=>s.includes(d)),h=m.length===7?"Mon – Sun":m.join(", "),u=String(c||"").trim();return i&&u?h?`${h}, ${u}`:u:h||"Mon – Sun"},an=F.useMemo(()=>Ce.filter(s=>{if(ot!=="ALL"&&(s.category||"").toLowerCase()!==ot.toLowerCase())return!1;if(Ar!=="ALL"){const i=(s.frequency||"").toLowerCase(),c=Ar.toLowerCase();if(c==="daily"&&!i.includes("daily")||(c==="once a week"||c==="weekly")&&(!i.includes("once")&&!i.includes("weekly")||i.includes("bi"))||c==="bi-weekly"&&!i.includes("bi"))return!1}if($r){const i=$r.toLowerCase();if(!((s.task||"").toLowerCase().includes(i)||(s.category||"").toLowerCase().includes(i)||(s.rotationGroup||"").toLowerCase().includes(i)||(s.notes||"").toLowerCase().includes(i)||(s.targetDay||"").toLowerCase().includes(i)))return!1}return!0}),[Ce,ot,Ar,$r]),[Vo,gd]=F.useState(""),[Ks,Ue]=F.useState(!1),[Xt,ln]=F.useState({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),[Bs,dn]=F.useState(null),[cn,go]=F.useState({name:"",routine:"",care:""}),[qs,un]=F.useState(null),[Er,Mr]=F.useState("");F.useEffect(()=>{(Ae!=null&&Ae.data||Ye!=null&&Ye.data)&&(te(s=>s.filter(i=>{var c,m;const h=Me(i.task),u=(c=Ye.data)==null?void 0:c.some(f=>f.row&&Me(f.row[6])===h),d=(m=Ae.data)==null?void 0:m.some(f=>f.row&&Me(f.row[0])===h);return!u&&!d})),We(s=>s.filter(i=>{var c;const m=Me(i.task);return!((c=Ae.data)==null?void 0:c.some(u=>u.row&&Me(u.row[0])===m))})))},[Ae.data,Ye.data]);const[lr,hn]=F.useState({}),[Yo,pn]=F.useState("ALL"),gr=s=>{var i;const c=(s==null?void 0:s.task)||((i=s==null?void 0:s.row)==null?void 0:i[0])||"";if(lr[c])return lr[c];if(lr[s==null?void 0:s.index_])return lr[s==null?void 0:s.index_];const m=String(c||"").toLowerCase();if(m.includes("recycling")||m.includes("waste"))return{frequency:"biweekly",dayOfWeek:3};if(m.includes("deep clean")||m.includes("feeding station"))return{frequency:"weekly",dayOfWeek:6};const h=ht(c),u=Ce.find(d=>h&&ht(d.task)===h||Me(d.task)===Me(c)||d.task.toLowerCase()===c.toLowerCase());if(u){const d=String(u.frequency||"").toLowerCase(),f=String(u.targetDay||"").toLowerCase();return d.includes("bi-weekly")||d.includes("biweekly")?{frequency:"biweekly",dayOfWeek:3}:d.includes("weekly")||d.includes("once")?{frequency:"weekly",dayOfWeek:f.includes("sunday")?6:f.includes("thursday")?3:f.includes("friday")?4:5}:{frequency:"daily",dayOfWeek:0}}return Al(c)},[ft,vt]=F.useState(()=>{var s,i;const c=((s=b==null?void 0:b.find(m=>{const h=String(m.name||"").toLowerCase();return(h.includes("printable")||h.includes("weekly")&&h.includes("schedule"))&&!h.includes("hub")}))==null?void 0:s.data)||((i=b==null?void 0:b[0])==null?void 0:i.data)||[];return Fu(c,ks().dateKey)}),Da=()=>{const s=mt||ks().dateKey,i=cp(s,ge),c=Rt(s)||{year:2026,month:9,day:12},m=Ko(c.year,c.month,c.day),h={};Re>=0&&ge.forEach(u=>{var d,f,g,N,j,A;const w=u.task||((d=u.row)==null?void 0:d[0])||"",C=oe(w,u.index_);if(!C||lo(w))return;const I=gr(u),z=hd(w,I),P=new Array(15).fill(void 0);let W=!1,J="";for(let Z=0;Z<7;Z++){const ce=new Date(c.year,c.month,c.day+Z),ue=Dn(ce.getFullYear(),ce.getMonth(),ce.getDate()),Fe=((f=(d=i[ue])==null?void 0:d[u.index_])==null?void 0:f.who)||((N=(g=i[ue])==null?void 0:g[u.task])==null?void 0:N.who)||((A=(j=i[ue])==null?void 0:j[ht(u.task)])==null?void 0:A.who);if(Fe){const Ie=1+Z*2;P[Ie]=Fe,W=!0,z&&!J&&(J=Fe)}}z&&J&&(P[9]=`Who: ${J}`,W=!0,h[u.index_]={...O[u.index_]||{},who:J,rotationGroup:J},w&&(h[w.toLowerCase().trim()]={...O[w.toLowerCase().trim()]||{},who:J,rotationGroup:J}),m.forEach(Z=>{if(i[Z.dateKey]){const ue={...i[Z.dateKey][u.index_]||{done:!1,kidsDone:{}},who:J};i[Z.dateKey][u.index_]=ue,w&&(i[Z.dateKey][w]=ue,i[Z.dateKey][w.toLowerCase().trim()]=ue)}})),W&&_(Re,C.index_,P)}),vt(u=>({...u,...i})),Object.keys(h).length>0&&ee(u=>({...u,...h})),fe(`Distributed daily & weekly scheduled chores for week of ${s} across active household members (Tidy Bedrooms & Laundry remain individual checklists)!`),setTimeout(()=>fe(null),4500)},jt=F.useMemo(()=>{const s=Rt(mt)||{year:2026,month:9,day:12};return Ko(s.year,s.month,s.day)},[mt]),mn=F.useMemo(()=>Ru(jt,He),[jt,He]),Rr=F.useMemo(()=>ip(jt),[jt]);F.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")?s.type==="regular"?!0:s.type==="biweekly"?Rr:!1:!1}).map(s=>s.name),[x,Rr]),F.useMemo(()=>{const s=x.filter(i=>{if(i.active===!1)return!1;const c=String(i.role||"").toLowerCase();return!c.includes("parent")&&!c.includes("overseer")&&!c.includes("overlord")&&i.type==="casual"}).map(i=>i.name);return s.length>0?s:["Koda","Keyanna"]},[x]),F.useEffect(()=>{if(!(Ae!=null&&Ae.data)||Ae.data.length===0)return;const s=Fu(Ae.data,mt||Be||"2026-10-12");vt(i=>{const c={...i};return Object.keys(s).forEach(m=>{c[m]={...c[m]||{},...s[m]}}),c})},[Ae,mt,Be]);const wo=F.useMemo(()=>{const s=new Date(_t,it+1,0).getDate(),i=new Date(_t,it,1).getDay(),c=i===0?6:i-1,m=new Date(_t,it,0).getDate(),h=[];let u=[];for(let d=c-1;d>=0;d--){const f=m-d,g=it===0?11:it-1,N=it===0?_t-1:_t;u.push({year:N,month:g,day:f,dateKey:Dn(N,g,f),isCurrentMonth:!1,dayOfWeekIndex:u.length})}for(let d=1;d<=s;d++)u.push({year:_t,month:it,day:d,dateKey:Dn(_t,it,d),isCurrentMonth:!0,dayOfWeekIndex:u.length}),u.length===7&&(h.push(u),u=[]);if(u.length>0){let d=1;const f=it===11?0:it+1,g=it===11?_t+1:_t;for(;u.length<7;)u.push({year:g,month:f,day:d,dateKey:Dn(g,f,d),isCurrentMonth:!1,dayOfWeekIndex:u.length}),d++;h.push(u)}return h},[_t,it]),Fn=s=>{var i;return((i=s[0])==null?void 0:i.dateKey)===mt},ir=(s,i,c)=>{const m=ft[s];if(!m)return{who:"",done:!1,kidsDone:{}};const h=m[i]||(c?m[c]:null)||(c?m[c.toLowerCase()]:null);return h?{who:h.who!==void 0&&h.who!==null?String(h.who):"",done:!!h.done,kidsDone:h.kidsDone||{}}:{who:"",done:!1,kidsDone:{}}},zr=s=>{const i=Rt(s);if(!i)return ye;const c=io(i.year,i.month,i.day),m=c.isFullStay||c.isDepartureDay;return ye.filter(h=>{const u=De(h);return u&&u.type==="biweekly"?m:!0})},bo=(s,i,c)=>{const h=ir(s,i).kidsDone||{},u=!h[c],d={...h,[c]:u},f=zr(s),g=f.length>0&&f.every(N=>d[N]);Ur(s,i,{kidsDone:d,done:g,who:g?"All Kids":"Each Child"})},ja=(s,i)=>{const c={};be.forEach(h=>{c[h]=!1});const m=ge.find(h=>{var u;return h.index_===s||i&&String(h.task||((u=h.row)==null?void 0:u[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});return m&&m.row&&((m.row[2]===!0||String(m.row[2]).toLowerCase()==="true")&&(c.Sydney=!0),(m.row[4]===!0||String(m.row[4]).toLowerCase()==="true")&&(c.Cadence=!0),(m.row[6]===!0||String(m.row[6]).toLowerCase()==="true")&&(c.Mason=!0),(m.row[12]===!0||String(m.row[12]).toLowerCase()==="true")&&(c.Koda=!0),(m.row[14]===!0||String(m.row[14]).toLowerCase()==="true")&&(c.Keyanna=!0)),jt.forEach(h=>{const u=ir(h.dateKey,s,i);if(u.kidsDone&&Object.keys(u.kidsDone).forEach(d=>{u.kidsDone[d]&&(c[d]=!0)}),u.who==="All Kids"&&u.done)be.forEach(d=>{var f;((f=u.kidsDone)==null?void 0:f[d])!==!1&&(c[d]=!0)});else if(u.who&&u.done){const d=u.who.split(/[,&]+/).map(f=>f.trim().toLowerCase());be.forEach(f=>{d.includes(f.toLowerCase())&&(c[f]=!0)})}}),c},El=(s,i,c)=>{const m=ja(s,c),h=!m[i],u={...m,[i]:h},d=be.filter(A=>u[A]).length,f=d===be.length&&be.length>0,g=d>0;let N="Each Child";if(f)N="All Kids";else if(g){const A=be.filter(w=>u[w]);N=A.length<=2?A.join(" & "):`${A.length} Kids`}vt(A=>{const w={...A};return jt.forEach(C=>{const I=w[C.dateKey]||{},z=I[s]||{who:"",done:!1,kidsDone:{}};w[C.dateKey]={...I,[s]:{...z,who:N,done:g,kidsDone:u}},c&&(w[C.dateKey][c]=w[C.dateKey][s],w[C.dateKey][c.toLowerCase()]=w[C.dateKey][s])}),w});const j=ve(c,s);if(Re>=0&&j!==void 0&&j!==null){const A=new Array(15).fill(void 0),w=i.toLowerCase();w==="sydney"?A[2]=h:w==="koda"?A[12]=h:w==="keyanna"?A[14]=h:w==="cadence"?A[4]=h:w==="mason"&&(A[6]=h),_(Re,j,A)}},In=(s,i)=>{let c="",m=!1;const h=ge.find(u=>{var d;return u.index_===s||i&&String(u.task||((d=u.row)==null?void 0:d[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});if(h&&h.row){const u=f=>{if(!f)return!1;const g=String(f).trim();return!(!g||g.startsWith("-")||g.startsWith("(")||g.startsWith("SG:")||g.startsWith("Done:")||g.startsWith("Parent Initials")||g.startsWith("___")||/^Who:\s*_+$/i.test(g))},d=String(i||h.task||"").toLowerCase();if(d.includes("basement")||d.includes("feeding station")||d.includes("deep clean")||d.includes("sign-off")||d.includes("curbside")||d.includes("recycling")||d.includes("waste")){(h.row[14]===!0||String(h.row[14]).toLowerCase()==="true")&&(m=!0);const f=String(h.row[9]||"").replace(/^Who:\s*/i,"").trim(),g=String(h.row[1]||"").trim(),N=u(f)?f:u(g)?g:"";if(N){const j=x.find(A=>N.toLowerCase().includes(A.name.toLowerCase()));j?c=j.name:N.toLowerCase().includes("parents")?c="Parents":c=N}}for(let f=6;f>=0;f--){const g=h.row[1+f*2],N=h.row[2+f*2];u(g)&&!c&&(c=String(g).replace(/^Who:\s*/i,"").trim()),(N===!0||String(N).toLowerCase()==="true")&&!m&&(m=!0)}}if(jt&&jt.length>0)for(let u=jt.length-1;u>=0;u--){const d=jt[u],f=ir(d.dateKey,s,i);f.who&&!c&&(c=f.who),f.done&&(m=!0)}return!Rr&&(c==="Cadence"||c==="Mason")&&(c=""),{who:c,done:m}},Wn=(s,i,c)=>{const m=In(s,i),h="who"in c?c.who:m.who,u="done"in c?c.done:m.done,d=String(i||"").toLowerCase(),f=ht(i),g=d.includes("recycling")||d.includes("waste")||d.includes("curbside")?3:d.includes("basement")||d.includes("saturday")?5:6;vt(A=>{const w={...A};return jt.forEach(C=>{const I=w[C.dateKey]||{},P={...I[s]||{who:"",done:!1,kidsDone:{}},who:h,done:u};w[C.dateKey]={...I,[s]:P},i&&(w[C.dateKey][i]=P,w[C.dateKey][i.toLowerCase().trim()]=P),f&&(w[C.dateKey][f]=P)}),w}),ee(A=>{const w=A[s]||{},C=ge.find(Z=>Z.index_===s),I=[...w.row||(C==null?void 0:C.row)||new Array(15).fill("")],z=1+g*2,P=2+g*2;"who"in c&&(I[z]=h),"done"in c&&(I[P]=u);const W=String(i||(C==null?void 0:C.task)||"").toLowerCase().trim(),J={...w,row:I,rotationGroup:h,who:h};return{...A,[s]:J,...W?{[W]:J}:{},...f?{[f]:J}:{}}});const N=oe(i);if(Re>=0&&N){const A=N.index_,w=new Array(15).fill(void 0);if(f==="clean_basement"||f==="feeding_station_deep_clean"||f==="curbside_recycling"||f==="curbside_waste")"who"in c&&(w[9]=h?`Who: ${h}`:"Who: _____________________"),"done"in c&&(w[14]=u);else if(f==="weekly_sign_off")"who"in c&&(w[9]=h),"done"in c&&(w[14]=u);else{const C=1+g*2,I=2+g*2;"who"in c&&(w[C]=h),"done"in c&&(w[I]=u)}_(Re,A,w)}const j=L(i,s);if(ke>=0&&"who"in c&&j!==void 0&&j!==null){const A=new Array(12).fill(void 0);A[7]=h,_(ke,j,A)}fe(`Updated "${i||"Chore"}": Assigned to ${h||"unassigned"}`),setTimeout(()=>fe(null),3e3)},Zt=F.useMemo(()=>ge.find(s=>{var i;return An(s.task||((i=s.row)==null?void 0:i[0]))})||{index_:12,task:"Weekly Sign-Off & Inspection",rotationGroup:"Parents",category:"Administration"},[ge]),$s=F.useMemo(()=>In(Zt==null?void 0:Zt.index_,Zt==null?void 0:Zt.task),[Zt,ft,jt]),Gr=()=>{if(!Zt)return;const s=In(Zt.index_,Zt.task),i=!s.done,c=s.who||"Parents";Wn(Zt.index_,Zt.task,{done:i,who:c}),fe(i?"Weekly Sign-Off & Inspection completed and verified for the week!":"Weekly Sign-Off reset to pending."),setTimeout(()=>fe(null),3500)},Ur=(s,i,c)=>{var m;const h=ge.find(g=>g.index_===i),u=(h==null?void 0:h.task)||"",d=Me(u);vt(g=>{const N=g[s]||{},A={...N[i]||(d?N[d]:null)||{who:"",done:!1},...c},w={...N,[i]:A};return u&&(w[u]=A),d&&(w[d]=A),{...g,[s]:w}});const f=oe(u,i);if(Re>=0&&f){const g=Rt(mt),N=Rt(s);if(g&&N){const j=new Date(g.year,g.month,g.day),w=new Date(N.year,N.month,N.day).getTime()-j.getTime(),C=Math.round(w/(1e3*3600*24));if(C>=0&&C<7){const I=1+C*2,z=2+C*2,P=new Array(15).fill(void 0);P[0]=u||((m=f.row)==null?void 0:m[0]),"who"in c&&(P[I]=c.who),"done"in c&&(P[z]=c.done),_(Re,f.index_,P)}}}},_o=(s,i,c,m,h)=>{var u,d,f;const g=c==="who"?1+i*2:2+i*2,N=Rt(mt)||{year:2026,month:9,day:12},j=new Date(N.year,N.month,N.day+i,12,0,0),A=Dn(j.getFullYear(),j.getMonth(),j.getDate()),w=h||((u=ge.find(P=>P.index_===s))==null?void 0:u.task)||"",C=ht(w);vt(P=>{const W=P[A]||{},Z={...W[s]||(w?W[w]:null)||(C?W[C]:null)||{who:"",done:!1,kidsDone:{}},[c]:m},ce={...W,[s]:Z};return w&&(ce[w]=Z,ce[w.toLowerCase().trim()]=Z),C&&(ce[C]=Z),{...P,[A]:ce}}),ee(P=>{const W=P[s]||(w?P[w.toLowerCase().trim()]:null)||(C?P[C]:null)||{},J=ge.find(Fe=>{var Ie;return Fe.index_===s||w&&String(Fe.task||((Ie=Fe.row)==null?void 0:Ie[0])||"").toLowerCase().trim()===w.toLowerCase().trim()}),Z=[...W.row||(J==null?void 0:J.row)||new Array(15).fill("")];Z[g]=m;const ce={...W,row:Z,...c==="who"?{who:m}:{done:m}},ue={...P,[s]:ce};return w&&(ue[w.toLowerCase().trim()]=ce),C&&(ue[C]=ce),ue});const I=oe(w,s);if(Re>=0&&I){const P=new Array(15).fill(void 0);P[g]=m,_(Re,I.index_,P)}const z=le(w,s);if(ke>=0&&c==="who"&&z){const P=new Array(12).fill(void 0);P[7]=m,_(ke,z.index_,P)}fe(c==="who"?`Assigned "${w||"Chore"}" (${(d=Qt[i])==null?void 0:d.name}) to ${m||"unassigned"}`:`Marked "${w||"Chore"}" (${(f=Qt[i])==null?void 0:f.name}) as ${m?"completed ✓":"pending"}`),setTimeout(()=>fe(null),3e3)},Hs=s=>{var i;if(!s||s.length===0)return;const c=s[0];if(!c)return;const m=c.dateKey;tn(m),jn(c.year),Kr(c.month);const h=s.length===7?s:Ko(c.year,c.month,c.day);if(vt(u=>{const d={...u};for(let f=0;f<7;f++){const g=h[f];g&&(d[g.dateKey]||(d[g.dateKey]={}),ge.forEach(N=>{var j,A,w;if(!d[g.dateKey][N.index_]){const C=1+f*2,I=2+f*2,z=(j=N.row)==null?void 0:j[C],P=z!=null?String(z):"",W=((A=N.row)==null?void 0:A[I])===!0||String((w=N.row)==null?void 0:w[I]).toLowerCase()==="true";d[g.dateKey][N.index_]={who:P,done:W,kidsDone:{}}}}))}return d}),Re>=0&&ge.forEach(u=>{var d;const f=new Array(15).fill(void 0);let g=!1;for(let N=0;N<7;N++){const j=h[N];if(j&&((d=ft[j.dateKey])!=null&&d[u.index_])){const A=ft[j.dateKey][u.index_];f[1+N*2]=A.who||"",f[2+N*2]=!!A.done,g=!0}}g&&_(Re,u.index_,f)}),ke>=0){const u=(i=Ye==null?void 0:Ye.data)==null?void 0:i.find(d=>d.row&&String(d.row[6]||"").toLowerCase().includes("active week"));if(u){const d=new Array(9).fill(void 0);d[7]=m,_(ke,u.index_,d)}}fe(`Synced active week to ${m} (${h[0].dateKey} – ${h[6].dateKey})`),setTimeout(()=>fe(null),3500)},On=s=>{var i,c,m,h,u;const{task:d,category:f="Household",frequency:g="Daily",targetDay:N="Mon – Sun",rotationGroup:j="All Non-Casual",notes:A=""}=s;if(!d||!d.trim())return;const w=d.trim(),C=Me(w),I=g.toLowerCase().includes("daily"),z=oe(w);if(z&&Re>=0){const Te=new Array(15).fill(void 0);Te[0]=w,j&&(Te[1]=j==="Each Child"?"Each Child":j),_(Re,z.index_,Te)}else if(Re>=0){const Te=[w,j==="Each Child"?"Each Child":j||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];let _e;if(I){const Ke=(i=Ae.data)==null?void 0:i.find(st=>st.index_>=4&&st.row&&(Me(st.row[0]).includes("clean basement")||Me(st.row[0]).includes("once a week")));_e=Ke?Ke.index_:void 0}else{const Ke=(c=Ae.data)==null?void 0:c.find(st=>st.index_>=8&&st.row&&(String(st.row[0]||"").toLowerCase().includes("pet care")||String(st.row[0]||"").startsWith("•")));_e=Ke?Ke.index_:void 0}V(Re,_e,Te)}const P=le(w),W=new Array(12).fill(void 0);if(W[6]=w,W[7]=j||"All Non-Casual",W[8]=g,W[9]=N,W[10]=A,W[11]=f,P&&ke>=0)_(ke,P.index_,W),(m=Ye.data)==null||m.forEach(Te=>{if(Te.index_!==P.index_&&Te.row&&Me(Te.row[6])===C)if(Te.row[0]){const _e=new Array(12).fill(void 0);_e[6]="",_e[7]="",_e[8]="",_e[9]="",_e[10]="",_e[11]="",_(ke,Te.index_,_e)}else v(ke,Te.index_)});else if(ke>=0){const Te=(h=Ye.data)==null?void 0:h.find(_e=>_e.index_>=5&&_e.index_<17&&(!_e.row||!_e.row[6]||String(_e.row[6]).trim()===""));if(Te)_(ke,Te.index_,W);else{const _e=(u=Ye.data)==null?void 0:u.find(st=>st.row&&String(st.row[6]||"").toLowerCase().includes("schedule configuration")),Ke=_e?_e.index_:void 0;V(ke,Ke,W)}}const J=g.toLowerCase(),Z=N.toLowerCase(),ce=J.includes("bi-weekly")||J.includes("biweekly")?"biweekly":J.includes("weekly")||J.includes("once")?"weekly":"daily",ue=Z.includes("sunday")?6:Z.includes("thursday")?3:5,Ie={index_:z?z.index_:P?P.index_:2e3+Date.now()%1e5,task:w,category:f,frequency:g,targetDay:N,rotationGroup:j||"All Non-Casual",notes:A,source:"user_added",row:[w,j||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1]};!P&&!z&&(te(Te=>[...Te,Ie]),We(Te=>[...Te,Ie])),H(Te=>{const _e=new Set(Te);return _e.delete(C),_e.delete(w.toLowerCase().trim()),_e}),Ee(Te=>Te?[...Te,Me(w)]:null),hn(Te=>({...Te,[w]:{frequency:ce,dayOfWeek:ue}})),xo(!1),Tn(!1),Br(!1),Ht({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",rotationGroup:"All Non-Casual",notes:""}),fe(`Added "${w}" to schedule and master registry!`),setTimeout(()=>fe(null),3500)},vo=(s,i={})=>{var c;if(!s||!s.trim())return;const m=s.trim(),h=i.defaultWho||"All Non-Casual",u=i.frequency||"daily",d=i.dayOfWeek!==void 0?i.dayOfWeek:5,f=u==="weekly"?"Once a Week":u==="biweekly"?"Bi-Weekly":"Daily",g=u==="weekly"?(c=Qt[d])==null?void 0:c.name:u==="biweekly"?"Thursday Evening":"Mon – Sun",N=i.category||"Household";On({task:m,category:N,frequency:f,targetDay:g,rotationGroup:h,notes:i.notes||""})},Ta=(s,i)=>{var c,m;const h=(c=Oe.data)==null?void 0:c.find(g=>g.index_===s),u=i.oldTask||((m=h==null?void 0:h.row)==null?void 0:m[6])||i.task,d=L(u,s);if(ke>=0&&d!==void 0&&d!==null){const g=new Array(12).fill(void 0);g[6]=i.task||u||"","rotationGroup"in i&&(g[7]=i.rotationGroup),"frequency"in i&&(g[8]=i.frequency),"targetDay"in i&&(g[9]=i.targetDay),"notes"in i&&(g[10]=i.notes),"category"in i&&(g[11]=i.category),_(ke,d,g)}if(te(g=>g.map(N=>N.index_===s||Me(N.task)===Me(u)?{...N,...i,task:i.task||N.task}:N)),i.task&&u&&Me(i.task)!==Me(u)){const g=Me(u),N=Me(i.task);Ee(j=>j?j.map(A=>A===g?N:A):null)}const f=ve(u);if(Re>=0&&f!==void 0&&f!==null){const g=new Array(15).fill(void 0);"task"in i&&(g[0]=i.task),"notes"in i&&(g[1]=i.notes),("task"in i||"notes"in i)&&_(Re,f,g)}if(i.frequency||i.targetDay){const g=i.task||u||"";if(g){const N=String(i.frequency||"").toLowerCase(),j=String(i.targetDay||"").toLowerCase(),A=N.includes("bi-weekly")||N.includes("biweekly")?"biweekly":N.includes("weekly")||N.includes("once")?"weekly":"daily",w=j.includes("sunday")?6:j.includes("thursday")?3:j.includes("friday")?4:5;hn(C=>({...C,[g]:{frequency:A,dayOfWeek:w}}))}}Dr(null),It(null),fe(`Updated "${i.task||u||"chore"}" in schedule and master registry!`),setTimeout(()=>fe(null),3e3)},zt=(s,i)=>{var c;const m=Me(i);ke>=0&&((c=Ye.data)==null||c.forEach(d=>{if(!(d.index_<5||!d.row||!d.row[6])&&(Me(d.row[6])===m||d.index_===s))if(d.row[0]){const f=new Array(12).fill(void 0);f[6]="",f[7]="",f[8]="",f[9]="",f[10]="",f[11]="",_(ke,d.index_,f)}else v(ke,d.index_)}));const h=oe(i);Re>=0&&h&&v(Re,h.index_);const u=String(i||"").toLowerCase().trim();te(d=>d.filter(f=>f.index_!==s&&(!u||f.task.toLowerCase().trim()!==u))),H(d=>{const f=new Set(d);return s!=null&&f.add(String(s)),u&&f.add(u),f}),vt(d=>{const f={...d};return Object.keys(f).forEach(g=>{if(f[g]&&f[g][s]){const N={...f[g]};delete N[s],f[g]=N}}),f}),Ps===s&&(Dr(null),It(null)),fe(`Removed "${i||"chore"}" from Household Hub Master Chore Registry`),setTimeout(()=>fe(null),3e3)},fn=(s,i)=>{var c,m;const h=(i.task||"").trim();if(!h)return;const u=i.oldTask||h;ee(j=>{const A={...j};return A[s]={...i,task:h},u&&(A[String(u).toLowerCase().trim()]={...i,task:h}),A[h.toLowerCase().trim()]={...i,task:h},A});const d=i.frequency==="Once a Week"?"weekly":i.frequency==="Bi-Weekly"?"biweekly":"daily",f=i.dayOfWeek!==void 0?i.dayOfWeek:(c=i.targetDay)!=null&&c.toLowerCase().includes("sunday")?6:(m=i.targetDay)!=null&&m.toLowerCase().includes("thursday")?3:5;if(hn(j=>({...j,[h]:{frequency:d,dayOfWeek:f},[s]:{frequency:d,dayOfWeek:f}})),i.task&&u&&Me(i.task)!==Me(u)){const j=Me(u),A=Me(i.task);Ee(w=>w?w.map(C=>C===j?A:C):null)}const g=ve(u);if(Re>=0&&g!==void 0&&g!==null){const j=new Array(15).fill(void 0);j[0]=h,i.notes!==void 0&&(j[1]=i.notes),_(Re,g,j)}const N=L(u,s);if(ke>=0&&N!==void 0&&N!==null){const j=new Array(12).fill(void 0);j[6]=h,i.rotationGroup&&(j[7]=i.rotationGroup),i.frequency&&(j[8]=i.frequency),i.targetDay&&(j[9]=i.targetDay),i.notes!==void 0&&(j[10]=i.notes),i.category&&(j[11]=i.category),_(ke,N,j)}u&&u!==h&&vt(j=>{const A={...j};return Object.keys(A).forEach(w=>{if(A[w]&&A[w][u]){const C={...A[w]};C[h]=C[u],C[h.toLowerCase()]=C[u],A[w]=C}}),A}),pe(null),fe(`Updated chore: "${h}"`),setTimeout(()=>fe(null),3e3)},Pn=(s,i)=>{var c,m;const h=i||"";H(f=>{const g=new Set(f);return s!=null&&g.add(String(s)),h&&g.add(h.toLowerCase().trim()),g});const u=ve(h,s);Re>=0&&u!==void 0&&u!==null&&v(Re,u);const d=L(h,s);if(ke>=0&&d!==void 0&&d!==null){const f=(c=Ye.data)==null?void 0:c.find(g=>g.index_===d);if((m=f==null?void 0:f.row)!=null&&m[0]){const g=new Array(12).fill(void 0);g[6]="",g[7]="",g[8]="",g[9]="",g[10]="",g[11]="",_(ke,d,g)}else v(ke,d)}vt(f=>{const g={...f};return Object.keys(g).forEach(N=>{if(g[N]){const j={...g[N]};s!==void 0&&delete j[s],h&&(delete j[h],delete j[h.toLowerCase().trim()]),g[N]=j}}),g}),lt(null),re&&re.index_===s&&pe(null),fe(`Removed chore: "${h||"Chore"}" from schedule`),setTimeout(()=>fe(null),3e3)},Kn=(s,i)=>{Pn(s,i)},Ea=()=>{if(ar.length===0)return;const s=ar.length;ar.forEach(i=>{var c;const m=ge.find(h=>h.index_===i);Pn(i,(m==null?void 0:m.task)||((c=m==null?void 0:m.row)==null?void 0:c[0])||"")}),nn([]),Br(!1),fe(`Successfully removed ${s} chore(s) from master list`),setTimeout(()=>fe(null),3500)},zs=s=>{var i,c;const m=s.task||((i=s.row)==null?void 0:i[0])||"",h=gr(s);Nr(s.index_),Bo(m),on(h.frequency||"daily"),Ts(h.dayOfWeek!==void 0?h.dayOfWeek:5),Ho(s.rotationGroup||"All Non-Casual"),pe({...s,originalTask:m,task:m,category:s.category||"Household",frequency:h.frequency==="weekly"?"Once a Week":h.frequency==="biweekly"?"Bi-Weekly":"Daily",targetDay:s.targetDay||(h.frequency==="weekly"?(c=Qt[h.dayOfWeek!==void 0?h.dayOfWeek:5])==null?void 0:c.name:"Mon – Sun"),rotationGroup:s.rotationGroup||"All Non-Casual",notes:s.notes||"",dayOfWeek:h.dayOfWeek!==void 0?h.dayOfWeek:5})},Gs=()=>{var s;if(fr===null)return;const i=ho.trim();i&&fn(fr,{task:i,frequency:xr==="weekly"?"Once a Week":xr==="biweekly"?"Bi-Weekly":"Daily",targetDay:((s=Qt[qo])==null?void 0:s.name)||"Mon – Sun",rotationGroup:$o,dayOfWeek:qo}),Nr(null)},Vr=(s,i)=>{const c=(C,I)=>typeof I=="object"&&I!==null?C===I||Me(C.task)===Me(I.task):C.index_===I||String(C.index_)===String(I)||Me(C.task)===Me(String(I)),m=typeof s=="object"&&s!==null&&an.length>0?an:Ce,h=m.findIndex(C=>c(C,s));if(h===-1)return;const u=i==="up"?h-1:h+1;if(u<0||u>=m.length)return;const d=m[h],f=m[u],g=[...Ce],N=g.findIndex(C=>c(C,d)),j=g.findIndex(C=>c(C,f));if(N===-1||j===-1)return;const A=d.task||"Chore";g[N]=f,g[j]=d;const w=g.map(C=>Me(C.task));if(Ee(w),Re>=0){const C=oe(d.task),I=oe(f.task),z=(Ae==null?void 0:Ae.data)==null?void 0:Ae.data.find(J=>J.row&&String(J.row[0]||"").toLowerCase().trim()==="weekly tasks"),P=z?z.index_:10,W=C&&I&&(C.index_<P&&I.index_<P||C.index_>P&&I.index_>P);if(C&&I&&C.index_!==I.index_&&W){const J=[...C.row||[]],Z=[...I.row||[]];_(Re,C.index_,Z),_(Re,I.index_,J)}}if(ke>=0){const C=le(d.task),I=le(f.task);if(C&&I&&C.index_!==I.index_){const z=C.row||[],P=I.row||[],W=new Array(12).fill(void 0),J=new Array(12).fill(void 0);for(let Z=6;Z<=11;Z++)W[Z]=P[Z]!==void 0?P[Z]:"",J[Z]=z[Z]!==void 0?z[Z]:"";_(ke,C.index_,W),_(ke,I.index_,J)}}fe(`Reordered: Moved "${A}" ${i}! Synchronized with Printable Weekly Schedule and Household Hub.`),setTimeout(()=>fe(null),3e3)},Qo=(s,i,c)=>{var m,h,u,d,f,g;const N=ge.find(w=>w.index_===s),j=ge.find(w=>w.index_===i);if(!N||!j||s===i)return;const A=(c==null?void 0:c.trim())||`${N.row[1]} & ${j.row[1]}`;if(ze>=0){const w=new Array(16).fill(void 0);w[1]=A;for(let C=0;C<7;C++){const I=2+C*2,z=3+C*2,P=((m=N.row)==null?void 0:m[I])||"",W=((h=j.row)==null?void 0:h[I])||"",J=((u=N.row)==null?void 0:u[z])===!0||String((d=N.row)==null?void 0:d[z]).toLowerCase()==="true",Z=((f=j.row)==null?void 0:f[z])===!0||String((g=j.row)==null?void 0:g[z]).toLowerCase()==="true";w[I]=P||W||"",w[z]=J||Z}_(ze,N.index_,w),v(ze,j.index_)}vt(w=>{const C={...w};return Object.keys(C).forEach(I=>{const z={...C[I]},P=z[N.index_]||{who:"",done:!1},W=z[j.index_]||{who:"",done:!1};z[N.index_]={who:P.who||W.who||"",done:P.done||W.done},delete z[j.index_],C[I]=z}),C}),po(!1),fe(`Combined into: "${A}"`),setTimeout(()=>fe(null),4e3)},Ma=(s,i)=>{const c=s||[],m=i||[];if(c.length===0&&m.length===0)return;const h={...ft};let u=0,d=0,f=0,g=0;const N={};wo.forEach(j=>{j.forEach(A=>{if(!A.isCurrentMonth)return;const w=A.dateKey;h[w]||(h[w]={});const C=io(A.year,A.month,A.day),I=C.isFullStay||C.isDepartureDay,z=[...c];if(I&&z.push(...m),z.length===0)return;const P=ge.filter(ue=>{var Fe;const Ie=ue.task||((Fe=ue.row)==null?void 0:Fe[0])||"",Te=Ie.toLowerCase(),_e=gr(ue);return Te.includes("deep clean")||Te.includes("feeding station")?A.dayOfWeekIndex===6:Te.includes("recycling")?A.dayOfWeekIndex===3&&Lt("recycling",A.year,A.month,A.day):Te.includes("waste")?A.dayOfWeekIndex===3&&Lt("waste",A.year,A.month,A.day):_e.frequency==="biweekly"?A.dayOfWeekIndex===_e.dayOfWeek&&Lt(Ie,A.year,A.month,A.day):_e.frequency==="weekly"?A.dayOfWeekIndex===_e.dayOfWeek:!0}),W=z.filter(ue=>{const Fe=De(ue);return Fe&&Fe.type!=="casual"}),J=W.length>0?W:z,Z=J.filter(ue=>{const Fe=De(ue),Ie=String((Fe==null?void 0:Fe.role)||"").toLowerCase();return!Ie.includes("parent")&&!Ie.includes("overseer")});let ce=0;P.forEach(ue=>{var Fe;const Ie=h[w][ue.index_]||{done:!1,kidsDone:{}},Te=ue.task||((Fe=ue.row)==null?void 0:Fe[0])||"",_e=String(ue.rotationGroup||"").toLowerCase(),Ke=Te.toLowerCase();if(lo(Te)){h[w][ue.index_]={who:"",done:Ie.done,kidsDone:Ie.kidsDone||{}};return}if(A.dayOfWeekIndex===6&&Ke.includes("supper")){const et=x.filter(Xe=>Xe.role==="Overseer Supreme"||String(Xe.role||"").toLowerCase().includes("parent")).map(Xe=>Xe.name),Tt=et.length>0?et:["Thom","Meghan"],Nt=$u(A.year,A.month,A.day,Tt);h[w][ue.index_]={who:Nt,done:Ie.done,kidsDone:Ie.kidsDone||{}};return}if(Ke.includes("basement")){const et=Z.length>0?Z:I?["Sydney","Cadence","Mason"]:["Sydney"],Tt=et.length>0?et[d%et.length]:"Sydney";h[w][ue.index_]={who:Tt,done:Ie.done,kidsDone:Ie.kidsDone||{}},d++;return}if(Ke.includes("deep clean")||Ke.includes("feeding station")){const et=J[f%J.length];h[w][ue.index_]={who:et,done:Ie.done,kidsDone:Ie.kidsDone||{}},f++;return}if(Ke.includes("recycling")||Ke.includes("waste")){const et=J[g%J.length];h[w][ue.index_]={who:et,done:Ie.done,kidsDone:Ie.kidsDone||{}},g++;return}if(Ke.includes("sign-off")||Ke.includes("inspection")){h[w][ue.index_]={who:"Parents",done:Ie.done,kidsDone:Ie.kidsDone||{}};return}if(_e==="parents"||_e.includes("parent")&&!_e.includes("kid")&&!_e.includes("non-casual")&&!_e.includes("all")){const et=x.filter(Nt=>Nt.role==="Overseer Supreme"||String(Nt.role||"").toLowerCase().includes("parent")).map(Nt=>Nt.name),Tt=et.length>0?et[(u+ce)%et.length]:"Thom";ce++,h[w][ue.index_]={who:Tt,done:Ie.done,kidsDone:Ie.kidsDone||{}};return}if(_e==="kids"&&Z.length>0){const et=Z[(u+ce)%Z.length];ce++,h[w][ue.index_]={who:et,done:Ie.done,kidsDone:Ie.kidsDone||{}};return}const st=J[(u+ce)%J.length];ce++,h[w][ue.index_]={who:st,done:Ie.done,kidsDone:Ie.kidsDone||{}}}),u=(u+1)%z.length})}),vt(h),Re>=0&&wo.forEach(j=>{Fn(j)&&ge.forEach(A=>{var w;const C=A.task||((w=A.row)==null?void 0:w[0])||"";if(lo(C))return;const I=oe(C,A.index_);if(!I)return;const z=gr(A),P=hd(C,z),W=new Array(15).fill(void 0);let J=!1,Z="";for(let ce=0;ce<7;ce++){const ue=j[ce];if(ue&&((w=h[ue.dateKey])!=null&&w[A.index_])){const Fe=h[ue.dateKey][A.index_].who||"";if(Fe){const Ie=1+ce*2;W[Ie]=Fe,J=!0,P&&!Z&&(Z=Fe)}}}P&&Z&&(W[9]=`Who: ${Z}`,J=!0,N[A.index_]={...O[A.index_]||{},who:Z,rotationGroup:Z},C&&(N[C.toLowerCase().trim()]={...O[C.toLowerCase().trim()]||{},who:Z,rotationGroup:Z}),j.forEach(ce=>{if(ce&&h[ce.dateKey]){const Fe={...h[ce.dateKey][A.index_]||{done:!1,kidsDone:{}},who:Z};h[ce.dateKey][A.index_]=Fe,C&&(h[ce.dateKey][C]=Fe,h[ce.dateKey][C.toLowerCase().trim()]=Fe)}})),J&&_(Re,I.index_,W)})}),Object.keys(N).length>0&&ee(j=>({...j,...N})),uo(!1),fe(`Auto-assigned daily & weekly tasks for ${xn[it]} ${_t}! (Tidy Bedrooms & Laundry remain individual checklists)`),setTimeout(()=>fe(null),4500)},ko=(s,i)=>{var c,m;const h=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,u=(c=Oe.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"role"in i&&(d[1]=i.role),"residency"in i&&(d[2]=i.residency),"specialGroups"in i?d[3]=i.specialGroups:"schedule"in i&&(d[3]=i.schedule),"active"in i&&(d[4]=i.active),_(h,s,d),fe(`Updated "${i.name||((m=u==null?void 0:u.row)==null?void 0:m[0])||"member"}" in Household Hub!`),setTimeout(()=>fe(null),3e3)},Ml=(s,i,c,m,h=!0)=>{var u;if(!s||!s.trim())return;const d=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,f=s.trim(),g=i?i.trim():"Minion",N=c||"Full-Time",A=m?m.trim():N==="Casual"?"All":g==="Supreme Overlord"?"Parents, Non-Casual, All":"Kids, Non-Casual, All",w=(u=Oe.data)==null?void 0:u.find(C=>C.index_<5||C.index_>12?!1:!C.row||!C.row[0]||!String(C.row[0]).trim());if(w){const C=new Array(12).fill(void 0);C[0]=f,C[1]=g,C[2]=N,C[3]=A,C[4]=h,C[5]="MEMBER_ROW",_(d,w.index_,C)}else V(d,void 0,[f,g,N,A,h,"MEMBER_ROW",null,null,null,null,null,null]);qr(!1),fe(`Added "${f}" to Household Hub!`),setTimeout(()=>fe(null),3e3)},Rl=(s,i)=>{var c,m;const h=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,u=(c=Oe.data)==null?void 0:c.find(d=>d.index_===s);if((m=u==null?void 0:u.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(h,s,d)}else v(h,s);fe(`Removed "${i}" from Household Hub`),setTimeout(()=>fe(null),3e3)},Co=(s,i)=>{var c,m;const h=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,u=(c=Oe.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"type"in i&&(d[1]=i.type),"routine"in i&&(d[2]=i.routine),"care"in i&&(d[3]=i.care),"active"in i&&(d[4]=i.active),_(h,s,d),fe(`Updated pet "${i.name||((m=u==null?void 0:u.row)==null?void 0:m[0])||"profile"}" in Household Hub!`),setTimeout(()=>fe(null),3e3)},Ll=(s,i,c,m,h=!0)=>{if(!s||!s.trim())return;const u=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,d=s.trim(),f=i||"Dog";V(u,void 0,[d,f,c||"Morning & Evening",m||(f==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water"),h,"PET_ROW",void 0,void 0,void 0,void 0,void 0,void 0]),Ue(!1),ln({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),fe(`Added pet "${d}" to Household Hub!`),setTimeout(()=>fe(null),3e3)},Fl=(s,i)=>{var c,m;const h=ke>=0?ke:(b==null?void 0:b.length)>1?1:0,u=(c=Oe.data)==null?void 0:c.find(d=>d.index_===s);if((m=u==null?void 0:u.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(h,s,d)}else v(h,s);fe(`Removed pet "${i}" from Household Hub`),setTimeout(()=>fe(null),3e3)},Lr=F.useMemo(()=>{let s=0,i=0;const c={};x.forEach(h=>{c[h.name]={total:0,done:0}}),wo.forEach(h=>{h.forEach(u=>{u.isCurrentMonth&&ge.forEach(d=>{var f,g;const N=d.task||((f=d.row)==null?void 0:f[0])||"",j=N.toLowerCase(),A=gr(d);let w=!1;j.includes("deep clean")||j.includes("feeding station")?w=u.dayOfWeekIndex===6:j.includes("recycling")?w=u.dayOfWeekIndex===3&&Lt("recycling",u.year,u.month,u.day):j.includes("waste")?w=u.dayOfWeekIndex===3&&Lt("waste",u.year,u.month,u.day):A.frequency==="daily"?w=!0:A.frequency==="weekly"?w=u.dayOfWeekIndex===A.dayOfWeek:A.frequency==="biweekly"&&(w=u.dayOfWeekIndex===A.dayOfWeek&&Lt(N,u.year,u.month,u.day));const C=ir(u.dateKey,d.index_,d.task||((g=d.row)==null?void 0:g[0])),I=(C==null?void 0:C.done)||(C==null?void 0:C.who);if(!w&&!I)return;s++;const z=C==null?void 0:C.done,P=C==null?void 0:C.who;if(z&&i++,P){const W=De(P);W&&c[W.name]&&(c[W.name].total++,z&&c[W.name].done++)}})})});const m=s>0?Math.round(i/s*100):0;return{totalScheduled:s,totalCompleted:i,completionRate:m,assigneeCounts:c}},[wo,ge,ft,x,De]),Bn=F.useMemo(()=>x.filter(s=>{const i=(s.name||"").toLowerCase().trim(),c=String(s.role||"").toLowerCase();return!(i==="thom"||i==="meghan"||c.includes("overlord")||c.includes("overseer")||c.includes("parent"))}).map(s=>{const i=Lr.assigneeCounts[s.name]||{total:0,done:0},c=i.total>0?Math.round(i.done/i.total*100):0;return{...s,done:i.done,total:i.total,pct:c}}).sort((s,i)=>i.done!==s.done?i.done-s.done:i.pct-s.pct),[x,Lr]),Yr=F.useMemo(()=>Bn.length===0||Bn[0].done===0?null:Bn[0],[Bn]),Ra=()=>{it===0?(Kr(11),jn(s=>s-1)):Kr(s=>s-1)},Il=()=>{it===11?(Kr(0),jn(s=>s+1)):Kr(s=>s+1)},Wl=()=>{const s=ks();jn(s.todayYear),Kr(s.todayMonth),tn(s.dateKey)};F.useEffect(()=>{if(qt==="month"){const s=ks();jn(s.todayYear),Kr(s.todayMonth),tn(s.dateKey),setTimeout(()=>{const i=document.getElementById("active-calendar-week");i&&i.scrollIntoView({behavior:"smooth",block:"center"})},50)}},[qt]);const xn=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans","data-source-loc":"weekly_chores_household_hub.tsx:4854:5","data-source-comp":"App",children:[Ls&&n.jsxs("div",{className:"no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all","data-source-loc":"weekly_chores_household_hub.tsx:4856:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4857:11","data-source-comp":"App",children:[n.jsx(Tu,{className:"w-4 h-4 text-emerald-200"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4859:13","data-source-comp":"App",children:Ls})]}),n.jsx("button",{onClick:()=>fe(null),className:"text-emerald-100 hover:text-white","data-source-loc":"weekly_chores_household_hub.tsx:4861:11","data-source-comp":"App",children:n.jsx(Yt,{className:"w-4 h-4"})})]}),n.jsxs("header",{className:"no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30","data-source-loc":"weekly_chores_household_hub.tsx:4866:7","data-source-comp":"App",children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4867:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4868:11","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:4869:13","data-source-comp":"App",children:n.jsx(Du,{className:"w-5 h-5"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4872:13","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4873:15","data-source-comp":"App",children:[n.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4874:17","data-source-comp":"App",children:"Chore Schedule"}),n.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4875:17","data-source-comp":"App",children:"Monthly Template & Sync"})]}),n.jsxs("p",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4879:15","data-source-comp":"App",children:["Interactive Chore Calendar w/ Printable Sheet • Week of ",mt]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:4885:11","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4886:13","data-source-comp":"App",children:[n.jsx("button",{onClick:Ra,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Previous Month","data-source-loc":"weekly_chores_household_hub.tsx:4887:15","data-source-comp":"App",children:n.jsx(ju,{className:"w-4 h-4"})}),n.jsxs("div",{className:"px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none","data-source-loc":"weekly_chores_household_hub.tsx:4894:15","data-source-comp":"App",children:[xn[it]," ",_t]}),n.jsx("button",{onClick:Il,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Next Month","data-source-loc":"weekly_chores_household_hub.tsx:4897:15","data-source-comp":"App",children:n.jsx(tp,{className:"w-4 h-4"})}),n.jsx("button",{onClick:Wl,className:"ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:4904:15","data-source-comp":"App",children:"Today"})]}),n.jsxs("button",{onClick:()=>uo(!0),className:"flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:4911:13","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4916:15","data-source-comp":"App",children:"Auto-Assign"})]})]})]}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm","data-source-loc":"weekly_chores_household_hub.tsx:4920:9","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4921:11","data-source-comp":"App",children:[n.jsxs("button",{onClick:()=>en("month"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${qt==="month"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4922:13","data-source-comp":"App",children:[n.jsx(ep,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4928:15","data-source-comp":"App",children:"Monthly Calendar"})]}),n.jsxs("button",{onClick:()=>en("matrix"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${qt==="matrix"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4930:13","data-source-comp":"App",children:[n.jsx(op,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4936:15","data-source-comp":"App",children:"Weekly Schedule"})]}),n.jsxs("button",{onClick:()=>en("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${qt==="stats"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4938:13","data-source-comp":"App",children:[n.jsx(Au,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4944:15","data-source-comp":"App",children:"Leaderboard & Stats"})]}),n.jsxs("button",{onClick:()=>en("roster"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${qt==="roster"?"bg-indigo-600 text-white shadow-sm":"text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4946:13","data-source-comp":"App",children:[n.jsx(ya,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4954:15","data-source-comp":"App",children:["Household Hub (",x.length,")"]})]})]})})]}),n.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6","data-source-loc":"weekly_chores_household_hub.tsx:4959:7","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4959:68","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4959:178","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4959:229","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4959:365","data-source-comp":"App",children:"Household Roster:"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4959:401","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4959:454","data-source-comp":"App",children:"Supreme Overlords:"}),x.filter(s=>s.active!==!1&&(s.role==="Supreme Overlord"||s.role==="Overseer Supreme")).map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300",style:{backgroundColor:s.bg,color:s.text},title:"Supreme Overlord (= Parent \\u2022 Included in Daily Chores)","data-source-loc":"weekly_chores_household_hub.tsx:4959:726","data-source-comp":"App",children:s.name},s.id)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4962:95","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:4962:150","data-source-comp":"App",children:"Minions:"}),x.filter(s=>s.active!==!1&&s.role!=="Supreme Overlord"&&s.role!=="Overseer Supreme").map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.type==="biweekly"?"#F8B4BD":s.type==="casual"?"#A6D2ED":"#E2E8F0"},title:`${s.name} (${s.residency} Minion = Kid)`,"data-source-loc":"weekly_chores_household_hub.tsx:4962:413","data-source-comp":"App",children:s.name},s.id))]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4966:89","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4966:171","data-source-comp":"App",children:[n.jsx("span",{className:"w-4 text-center shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4966:253","data-source-comp":"App",children:"🐾"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4966:316","data-source-comp":"App",children:'"The Herd":'})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4966:352","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4966:405","data-source-comp":"App",children:"Dogs:"}),je.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("dog")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4966:633","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4970:92","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200","data-source-loc":"weekly_chores_household_hub.tsx:4970:147","data-source-comp":"App",children:"Cats:"}),je.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4970:378","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),je.some(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat"))&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4974:221","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200","data-source-loc":"weekly_chores_household_hub.tsx:4974:276","data-source-comp":"App",children:"Other Pets:"}),je.filter(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4974:558","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`))]})]})]})]}),n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4978:114","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-6","data-source-loc":"weekly_chores_household_hub.tsx:4978:253","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4978:294","data-source-comp":"App",children:[n.jsx("p",{className:"text-xs text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4978:299","data-source-comp":"App",children:"Month Overview"}),n.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4978:367","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xl font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4978:417","data-source-comp":"App",children:[Lr.totalCompleted," / ",Lr.totalScheduled]}),n.jsx("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4978:536","data-source-comp":"App",children:"completed"})]})]}),n.jsxs("div",{className:"hidden sm:block w-36","data-source-loc":"weekly_chores_household_hub.tsx:4978:605","data-source-comp":"App",children:[n.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4978:643","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4978:721","data-source-comp":"App",children:"Progress"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4978:742","data-source-comp":"App",children:[Lr.completionRate,"%"]})]}),n.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4978:789","data-source-comp":"App",children:n.jsx("div",{className:"bg-emerald-500 h-2 rounded-full transition-all duration-500",style:{width:`${Lr.completionRate}%`},"data-source-loc":"weekly_chores_household_hub.tsx:4978:859","data-source-comp":"App"})})]})]}),n.jsxs("div",{className:"flex items-center gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4980:30","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:4980:79","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4980:191","data-source-comp":"App"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:258","data-source-comp":"App",children:["Active Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:281","data-source-comp":"App",children:mt})," • ",(mn==null?void 0:mn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("button",{onClick:()=>{const s=ks(),i=Ko(s.year,s.month,s.day);Hs(i),Da(),en("matrix")},className:"px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition",title:`Sync and distribute chores for current week (${mt})`,"data-source-loc":"weekly_chores_household_hub.tsx:4980:452","data-source-comp":"App",children:"Sync & Distribute Week"})]})]}),qt==="month"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4986:285","data-source-comp":"App",children:[n.jsx("div",{className:"grid grid-cols-7 gap-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4986:312","data-source-comp":"App",children:Qt.map((s,i)=>n.jsxs("div",{className:"py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:4986:394","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4988:10","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] font-normal opacity-90 hidden sm:inline","data-source-loc":"weekly_chores_household_hub.tsx:4988:33","data-source-comp":"App",children:["Day ",i+1]})]},s.name))}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:4988:141","data-source-comp":"App",children:wo.map((s,i)=>{const c=Fn(s),m=s[0].dateKey===pr.dateKey;return n.jsxs("div",{id:c?"active-calendar-week":void 0,className:`bg-white rounded-xl border transition-all ${c?"border-rose-400 ring-2 ring-rose-200 shadow-md":"border-slate-200 shadow-sm hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4991:16","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4991:252","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4991:377","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:4991:418","data-source-comp":"App",children:["Week ",i+1]}),n.jsx("span",{className:"text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:4991:494","data-source-comp":"App",children:"•"}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4991:544","data-source-comp":"App",children:[s[0].month+1,"/",s[0].day," – ",s[6].month+1,"/",s[6].day]}),m&&n.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300","data-source-loc":"weekly_chores_household_hub.tsx:4991:688","data-source-comp":"App",children:"Current Week"}),(()=>{const h=Ru(s,He);return h?n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${h.badgeBg}`,"data-source-loc":"weekly_chores_household_hub.tsx:4994:18","data-source-comp":"App",children:h.text}):null})(),c?n.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300","data-source-loc":"weekly_chores_household_hub.tsx:4995:24","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-600","data-source-loc":"weekly_chores_household_hub.tsx:4995:173","data-source-comp":"App"}),"Live Synced with Sheet"]}):n.jsx("button",{onClick:()=>Hs(s),className:"text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4995:262","data-source-comp":"App",children:"Set as Sheet Week"})]}),n.jsxs("div",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4995:456","data-source-comp":"App",children:[s.reduce((h,u)=>{const d=ge.filter(f=>{var g,N;return(N=(g=ft[u.dateKey])==null?void 0:g[f.index_])==null?void 0:N.done}).length;return h+d},0)," ","chores completed"]})]}),n.jsx("div",{className:"grid grid-cols-7 divide-x divide-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5001:48","data-source-comp":"App",children:s.map((h,u)=>{const{dateKey:d,day:f,isCurrentMonth:g}=h,N=ge.filter(w=>{var C,I,z,P,W,J,Z,ce,ue,Fe,Ie,Te,_e,Ke,st,et,Tt,Nt,Xe,Us,Jo,Xo,Vs;const No=gr(w),So=(w.task||((C=w.row)==null?void 0:C[0])||"").toLowerCase();if(So.includes("deep clean")||So.includes("feeding station")){const rt=u===6,Gt=((z=(I=ft[d])==null?void 0:I[w.index_])==null?void 0:z.done)||((W=(P=ft[d])==null?void 0:P[w.index_])==null?void 0:W.who);if(!rt&&!Gt)return!1}else if(So.includes("recycling")){const rt=u===3&&Lt("recycling",h.year,h.month,h.day),Gt=((Z=(J=ft[d])==null?void 0:J[w.index_])==null?void 0:Z.done)||((ue=(ce=ft[d])==null?void 0:ce[w.index_])==null?void 0:ue.who);if(!rt&&!Gt)return!1}else if(So.includes("waste")){const rt=u===3&&Lt("waste",h.year,h.month,h.day),Gt=((Ie=(Fe=ft[d])==null?void 0:Fe[w.index_])==null?void 0:Ie.done)||((_e=(Te=ft[d])==null?void 0:Te[w.index_])==null?void 0:_e.who);if(!rt&&!Gt)return!1}else if(No.frequency==="weekly"){const rt=u===No.dayOfWeek,Gt=((st=(Ke=ft[d])==null?void 0:Ke[w.index_])==null?void 0:st.done)||((Tt=(et=ft[d])==null?void 0:et[w.index_])==null?void 0:Tt.who);if(!rt&&!Gt)return!1}else if(No.frequency==="biweekly"){const rt=u===No.dayOfWeek&&Lt(w.task||((Nt=w.row)==null?void 0:Nt[0]),h.year,h.month,h.day),Gt=((Us=(Xe=ft[d])==null?void 0:Xe[w.index_])==null?void 0:Us.done)||((Xo=(Jo=ft[d])==null?void 0:Jo[w.index_])==null?void 0:Xo.who);if(!rt&&!Gt)return!1}if(Jt==="ALL")return!0;const qn=(Vs=ft[d])==null?void 0:Vs[w.index_],yn=String((qn==null?void 0:qn.who)||"").toLowerCase(),$n=x.find(rt=>rt.id===Jt||rt.name===Jt),Ys=(($n==null?void 0:$n.name)||Jt).toLowerCase();if(so(w.row[1]))return ye.some(rt=>rt.toLowerCase()===Ys);if(!(qn!=null&&qn.who))return!1;if(yn===Ys||(yn==="all kids"||yn==="each child")&&ye.some(rt=>rt.toLowerCase()===Ys)||(yn==="all non-casual"||yn==="all non casual")&&$n&&$n.type!=="casual"||(yn==="parents"||yn==="parents only")&&$n&&String($n.role||"").toLowerCase().includes("parent"))return!0;const Zo=De(qn.who);return qn.who===Jt||(Zo==null?void 0:Zo.id)===Jt||(Zo==null?void 0:Zo.name)===Jt}),j=N.filter(w=>{var C,I;return(I=(C=ft[d])==null?void 0:C[w.index_])==null?void 0:I.done}).length,A=N.length>0&&j===N.length;return n.jsxs("div",{className:`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${g?"bg-white":"bg-slate-50/80 border-dashed border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5060:18","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5060:198","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5060:203","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${g?"bg-slate-100 text-slate-800":"bg-slate-200/70 text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5060:261","data-source-comp":"App",children:f}),n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5060:450","data-source-comp":"App",children:[N.length>0&&n.jsxs("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded ${A?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5060:516","data-source-comp":"App",children:[j,"/",N.length]}),n.jsx("button",{onClick:()=>rn(d),className:"p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition",title:"Open day details","data-source-loc":"weekly_chores_household_hub.tsx:5060:703","data-source-comp":"App",children:n.jsx(Po,{className:"w-2.5 h-2.5"})})]})]}),(()=>{const w=io(h.year,h.month,h.day);return w.isArrivalDay?n.jsx("div",{className:"text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay","data-source-loc":"weekly_chores_household_hub.tsx:5063:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5063:263","data-source-comp":"App",children:"🏠 Cadence & Mason arrive 5 PM"})}):w.isDepartureDay?n.jsx("div",{className:"text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason depart today at 5:00 PM","data-source-loc":"weekly_chores_household_hub.tsx:5065:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5065:241","data-source-comp":"App",children:"👋 Cadence & Mason leave 5 PM"})}):null})(),n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5068:16","data-source-comp":"App",children:[N.slice(0,3).map(w=>{var C,I;const z=ir(d,w.index_,w.task||w.row[0]),P=De(z.who),W=gr(w);return n.jsxs("div",{className:`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${z.done?"bg-emerald-50/70 border-emerald-200 text-slate-500":W.frequency==="weekly"?"bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs":"bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5073:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-1 w-full","data-source-loc":"weekly_chores_household_hub.tsx:5073:370","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5073:434","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Ur(d,w.index_,{done:!z.done}),className:"shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5073:490","data-source-comp":"App",children:z.done?n.jsx(ud,{className:"w-3.5 h-3.5 text-emerald-600"}):n.jsx(Eu,{className:"w-3.5 h-3.5 hover:text-slate-600"})}),n.jsx("span",{className:`truncate text-[10px] font-medium leading-tight ${z.done?"line-through":""}`,"data-source-loc":"weekly_chores_household_hub.tsx:5075:237","data-source-comp":"App",children:w.task||w.row[0]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5075:376","data-source-comp":"App",children:[W.frequency==="weekly"&&n.jsx("span",{className:"text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase",title:"Once-a-week task","data-source-loc":"weekly_chores_household_hub.tsx:5075:458","data-source-comp":"App",children:"1x/wk"}),hr(w.task||w.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold",style:{backgroundColor:((C=De(hr(w.task||w.row[0])))==null?void 0:C.bg)||"#FCE7F3",color:((I=De(hr(w.task||w.row[0])))==null?void 0:I.text)||"#BE185D"},"data-source-loc":"weekly_chores_household_hub.tsx:5075:643","data-source-comp":"App",children:hr(w.task||w.row[0])}):so(w.task||w.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700",title:"Each child cleans own bedroom","data-source-loc":"weekly_chores_household_hub.tsx:5078:111","data-source-comp":"App",children:"Own Rooms"}):z.who?n.jsx("span",{className:"shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold",style:{backgroundColor:(P==null?void 0:P.bg)||"#F1F5F9",color:(P==null?void 0:P.text)||"#475569"},title:String(z.who),"data-source-loc":"weekly_chores_household_hub.tsx:5078:275","data-source-comp":"App",children:String(z.who).slice(0,2)}):n.jsx("button",{onClick:()=>rn(d),className:"shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5",title:"Assign person","data-source-loc":"weekly_chores_household_hub.tsx:5081:85","data-source-comp":"App",children:"+"})]})]}),so(w.task||w.row[0])&&!hr(w.task||w.row[0])&&n.jsx("div",{className:"pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5081:347","data-source-comp":"App",children:zr(d).map(J=>{var Z;const ce=!!((Z=z.kidsDone)!=null&&Z[J]),ue=De(J);return n.jsxs("button",{type:"button",onClick:Fe=>{Fe.stopPropagation(),bo(d,w.index_,J)},className:`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${ce?"bg-emerald-100 text-emerald-800 border-emerald-300 line-through":"bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`,title:`Click to toggle ${J}'s room`,"data-source-loc":"weekly_chores_household_hub.tsx:5085:22","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full inline-block",style:{backgroundColor:(ue==null?void 0:ue.color)||"#888"},"data-source-loc":"weekly_chores_household_hub.tsx:5088:318","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5090:20","data-source-comp":"App",children:J}),ce?"✓":""]},J)})})]},w.index_)}),N.length>3&&n.jsxs("button",{onClick:()=>rn(d),className:"w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5092:39","data-source-comp":"App",children:["+",N.length-3," more"]}),N.length===0&&n.jsx("div",{className:"text-[10px] text-slate-400 italic py-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5092:277","data-source-comp":"App",children:"No chores"})]})]}),n.jsx("button",{onClick:()=>rn(d),className:"mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition","data-source-loc":"weekly_chores_household_hub.tsx:5092:373","data-source-comp":"App",children:"Manage Day"})]},d)})})]},i)})})]}),qt==="matrix"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5230:50","data-source-comp":"App",children:[n.jsxs("div",{id:"printable-schedule-card",className:"bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5230:77","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5230:193","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5230:311","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5230:316","data-source-comp":"App",children:[n.jsx("h2",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5230:357","data-source-comp":"App",children:"Weekly Schedule"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5230:428","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:5230:571","data-source-comp":"App"}),"Active Week: ",mt," • ",(mn==null?void 0:mn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5230:813","data-source-comp":"App",children:"Single-page Letter Landscape Layout - Printed.pdf"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5230:921","data-source-comp":"App",children:[n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5230:972","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search schedule chores...",value:Sr,onChange:s=>Na(s.target.value),className:"pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5230:1073","data-source-comp":"App"})]}),n.jsx("button",{onClick:()=>{const s=Rt(mt||Be)||{year:2026,month:9,day:19},i=Ko(s.year,s.month,s.day);vt(c=>{const m={...c};return i.forEach(h=>{m[h.dateKey]={}}),m}),ee({}),Re>=0&&Ae&&Array.isArray(Ae.data)&&Ae.data.forEach(c=>{if(c.index_>=5&&c.index_<=9){const m=new Array(15).fill(null);m[0]=c.row[0];for(let h=0;h<7;h++)m[1+h*2]="",m[2+h*2]=!1;_(Re,c.index_,m)}else if(c.index_>=13&&c.index_<=15){const m=new Array(15).fill(void 0);m[9]="Who: _____________________",m[14]=!1,_(Re,c.index_,m)}}),fe("Cleared daily & weekly WHO/DONE assignments for a blank printable template!"),setTimeout(()=>fe(null),3e3)},className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs",title:"Clear WHO/DONE cells to print a blank fill-in sheet","data-source-loc":"weekly_chores_household_hub.tsx:5230:1342","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:238","data-source-comp":"App",children:"Clear Names (Blank Sheet)"})}),n.jsxs("button",{onClick:Da,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs",title:"Automatically distribute chores across active members for current week","data-source-loc":"weekly_chores_household_hub.tsx:5261:285","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:632","data-source-comp":"App",children:"Distribute Current Week"})]}),n.jsx("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer",title:"Print 1-page Letter Landscape schedule","data-source-loc":"weekly_chores_household_hub.tsx:5261:677","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:924","data-source-comp":"App",children:"🖨️ Print Schedule"})})]})]}),n.jsx("div",{className:"overflow-x-auto","data-source-loc":"weekly_chores_household_hub.tsx:5261:976","data-source-comp":"App",children:n.jsxs("table",{id:"printable-schedule-table",className:"w-full table-fixed border-collapse text-left text-xs",style:{borderColor:"#C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1009","data-source-comp":"App",children:[n.jsxs("colgroup",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:1146","data-source-comp":"App",children:[n.jsx("col",{style:{width:"21%"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1156","data-source-comp":"App"}),Qt.map(s=>n.jsxs(ao.Fragment,{children:[n.jsx("col",{style:{width:"7.5%"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1247","data-source-comp":"App"}),n.jsx("col",{style:{width:"3.78%"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1280","data-source-comp":"App"})]},`col-${s.name}`))]}),n.jsxs("thead",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:1344","data-source-comp":"App",children:[n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"3px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1351","data-source-comp":"App",children:n.jsx("th",{colSpan:15,className:"py-2 px-3 text-left text-xl font-bold text-white tracking-tight","data-source-loc":"weekly_chores_household_hub.tsx:5261:1429","data-source-comp":"App",children:"Chore Schedule"})}),n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5261:1546","data-source-comp":"App",children:[n.jsxs("th",{className:"p-0 align-top bg-white",style:{borderRight:"2px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1550","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5261:1634","data-source-comp":"App",children:"FOR THE WEEK OF:"}),n.jsx("div",{className:"text-lg font-bold py-1.5 text-center text-white",style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5261:1767","data-source-comp":"App",children:(()=>{const s=Rt(mt||Be);return s?`${s.month+1}/${s.day}/${s.year}`:mt||Be||"10/19/2026"})()})]}),Qt.map((s,i)=>{const c=Rt(mt||Be)||{year:2026,month:9,day:19},h=new Date(c.year,c.month,c.day+i).getDate();return n.jsxs("th",{colSpan:2,className:"py-1.5 px-1 text-center text-white font-bold align-middle",style:{backgroundColor:s.color,borderRight:i<6?"2px solid #FFFFFF":"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5272:16","data-source-comp":"App",children:[n.jsx("div",{className:"text-xs font-bold uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5275:12","data-source-comp":"App",children:s.short.toUpperCase()}),n.jsx("div",{className:"text-sm font-bold leading-tight mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5275:101","data-source-comp":"App",children:h})]},s.name)})]}),n.jsxs("tr",{className:"bg-white text-[8.5px] font-bold text-slate-900",style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5276:15","data-source-comp":"App",children:[n.jsx("th",{className:"py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]","data-source-loc":"weekly_chores_household_hub.tsx:5276:156","data-source-comp":"App",children:"TASK"}),Qt.map(s=>n.jsxs(ao.Fragment,{children:[n.jsx("th",{className:"py-0.5 px-1 text-center uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5276:313","data-source-comp":"App",children:"WHO"}),n.jsx("th",{className:"py-0.5 px-1 text-center font-bold",title:"Done","data-source-loc":"weekly_chores_household_hub.tsx:5276:381","data-source-comp":"App",children:n.jsx(ud,{className:"w-3 h-3 mx-auto text-slate-800"})})]},`sub-${s.name}`))]})]}),n.jsxs("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5276:542","data-source-comp":"App",children:[pt.filter(s=>!(Sr&&!s.isSectionHeader&&!(s.task||"").toLowerCase().includes(Sr.toLowerCase())||!s.isSectionHeader&&An(s.task))).map((s,i)=>{var c,m;if(s.isSectionHeader)return s.headerType==="daily"?n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"1.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5288:20","data-source-comp":"App",children:n.jsx("td",{colSpan:15,className:"py-1.5 px-3 font-bold text-sm text-white","data-source-loc":"weekly_chores_household_hub.tsx:5288:136","data-source-comp":"App",children:"Daily Tasks"})},`header-daily-${s.index_}`):n.jsxs("tr",{style:{backgroundColor:"#002060",borderTop:"1.5px solid #002060",borderBottom:"1.5px solid #C55A11"},className:"text-white font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5290:18","data-source-comp":"App",children:[n.jsx("td",{className:"py-1.5 px-3 text-sm font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5290:202","data-source-comp":"App",children:"Weekly Tasks"}),n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5290:265","data-source-comp":"App",children:"Description"}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5290:341","data-source-comp":"App",children:"Initials / Assigned"})]},`header-weekly-${s.index_}`);const h=s,u=h.task||((c=h.row)==null?void 0:c[0])||"Chore",d=String(u).split(/\r?\n/).map(I=>I.trim()).filter(Boolean),f=d[0]||u,g=d.slice(1).join(" "),N=gr(h),j=hr(u),A=lo(u)&&!j,w=hd(u,N),C=h.notes&&String(h.notes).trim()?String(h.notes).trim():(m=h.row)!=null&&m[1]&&(A||w)&&!x.some(I=>I.name.toLowerCase()===String(h.row[1]).trim().toLowerCase())?String(h.row[1]).trim():Ku(u)?"(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away":so(u)?"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum":Bu(u)?"- Pick Up, Organize, Dust & Vacuum":qu(u)?"- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste":u.toLowerCase().includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":u.toLowerCase().includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"";return n.jsxs("tr",{className:"bg-white hover:bg-slate-50/60 transition-colors",style:{borderBottom:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5318:16","data-source-comp":"App",children:[n.jsxs("td",{className:"py-1.5 px-2 text-slate-900 bg-white align-middle",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5318:164","data-source-comp":"App",children:[n.jsx("div",{className:"leading-tight text-slate-900 font-semibold text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5318:309","data-source-comp":"App",children:f}),g&&n.jsx("div",{className:"text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight","data-source-loc":"weekly_chores_household_hub.tsx:5318:411","data-source-comp":"App",children:g})]}),A?(()=>{const I=ja(h.index_,u),z=[{code:"SG",name:"Sydney"},{code:"CV",name:"Cadence"},{code:"MV",name:"Mason"},{code:"KV",name:"Koda"},{code:"KG",name:"Keyanna"}];return n.jsxs(ao.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5327:34","data-source-comp":"App",children:C}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5327:205","data-source-comp":"App",children:n.jsx("div",{className:"flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5327:314","data-source-comp":"App",children:z.map(P=>{const W=!!I[P.name];return n.jsxs("button",{type:"button",onClick:()=>El(h.index_,P.name,u),className:"inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700",title:`${P.name} (${P.code}) — Click to toggle`,"data-source-loc":"weekly_chores_household_hub.tsx:5329:20","data-source-comp":"App",children:[n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5329:262","data-source-comp":"App",children:[P.code,":"]}),n.jsx("span",{className:`inline-block min-w-[26px] text-center border-b border-slate-700 ${W?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5329:284","data-source-comp":"App",children:W?"✓":"____"})]},P.code)})})})]})})():w?(()=>{const I=In(h.index_,u),z=I.who&&!I.who.startsWith("Who:")&&!I.who.startsWith("Assigned:")?I.who:"";return n.jsxs(ao.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5334:34","data-source-comp":"App",children:C}),n.jsx("td",{colSpan:4,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5334:205","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-baseline gap-1.5 text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5334:316","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-900 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5334:373","data-source-comp":"App",children:"Who:"}),n.jsxs("select",{value:z,onChange:P=>Wn(h.index_,u,{who:P.target.value}),className:"flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5334:440","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5336:168","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5336:194","data-source-comp":"App",children:x.filter(P=>P.type==="regular").map(P=>n.jsx("option",{value:P.name,"data-source-loc":"weekly_chores_household_hub.tsx:5336:290","data-source-comp":"App",children:P.name},P.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5336:354","data-source-comp":"App",children:x.filter(P=>P.type==="biweekly").map(P=>n.jsx("option",{value:P.name,"data-source-loc":"weekly_chores_household_hub.tsx:5336:451","data-source-comp":"App",children:P.name},P.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5336:515","data-source-comp":"App",children:x.filter(P=>P.type==="casual").map(P=>n.jsx("option",{value:P.name,"data-source-loc":"weekly_chores_household_hub.tsx:5336:607","data-source-comp":"App",children:P.name},P.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5336:671","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5336:704","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5336:758","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5336:800","data-source-comp":"App",children:"Parents"})]})]})]})}),n.jsx("td",{colSpan:2,className:"py-1.5 px-2 align-middle bg-white text-left",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5336:871","data-source-comp":"App",children:n.jsxs("button",{type:"button",onClick:()=>Wn(h.index_,u,{done:!I.done}),className:"inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full",title:"Click to toggle Done","data-source-loc":"weekly_chores_household_hub.tsx:5336:988","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5338:152","data-source-comp":"App",children:"Done:"}),n.jsx("span",{className:`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${I.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5338:170","data-source-comp":"App",children:I.done?"✓":"______"})]})})]})})():Qt.map((I,z)=>{var P,W,J,Z;const ce=1+z*2,ue=2+z*2,Fe=Rt(Be)||{year:2026,month:9,day:19},Ie=new Date(Fe.year,Fe.month,Fe.day+z),Te=Dn(Ie.getFullYear(),Ie.getMonth(),Ie.getDate()),_e=ir(Te,h.index_,u),Ke=((P=O[h.index_])==null?void 0:P.row)||(u?(W=O[u.toLowerCase().trim()])==null?void 0:W.row:null),st=(Ke==null?void 0:Ke[ce])!==void 0?Ke[ce]:(J=h.row)==null?void 0:J[ce],et=(Ke==null?void 0:Ke[ue])!==void 0?Ke[ue]:(Z=h.row)==null?void 0:Z[ue],Tt=st!=null?String(st).trim():_e!=null&&_e.who?String(_e.who).trim():"",Nt=et!=null?et===!0||String(et).toLowerCase()==="true":!!(_e!=null&&_e.done);return n.jsxs(ao.Fragment,{children:[n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:"1px solid #94A3B8"},"data-source-loc":"weekly_chores_household_hub.tsx:5357:49","data-source-comp":"App",children:n.jsxs("select",{value:Tt,onChange:Xe=>{_o(h.index_,z,"who",Xe.target.value,u)},className:"w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5357:148","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5359:149","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5359:175","data-source-comp":"App",children:x.filter(Xe=>Xe.type==="regular").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5359:271","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5359:335","data-source-comp":"App",children:x.filter(Xe=>Xe.type==="biweekly").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5359:432","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5359:496","data-source-comp":"App",children:x.filter(Xe=>Xe.type==="casual").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5359:588","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5359:652","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5359:685","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5359:731","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5359:785","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5359:831","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5359:873","data-source-comp":"App",children:"Parents"})]}),Tt&&!x.some(Xe=>Xe.name===Tt)&&!["Non-Casual","All Non-Casual","Each Child","All Kids","Parents"].includes(Tt)&&n.jsx("option",{value:Tt,"data-source-loc":"weekly_chores_household_hub.tsx:5359:1073","data-source-comp":"App",children:Tt})]})}),n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:z<6?"1.5px solid #475569":"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5359:1128","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:()=>{_o(h.index_,z,"done",!Nt,u)},className:"w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer",title:Nt?"Mark as not done":"Mark as done","data-source-loc":"weekly_chores_household_hub.tsx:5359:1264","data-source-comp":"App",children:Nt?n.jsx("span",{className:"text-emerald-700 font-black text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5361:196","data-source-comp":"App",children:"✓"}):n.jsx("span",{className:"text-slate-300 print:hidden text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5361:270","data-source-comp":"App",children:"☐"})})})]},I.name)})]},`row-${h.index_}-${u}`)}),n.jsxs("tr",{className:"h-14","data-source-loc":"weekly_chores_household_hub.tsx:5364:11","data-source-comp":"App",children:[n.jsx("td",{style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5364:32","data-source-comp":"App"}),Qt.map(s=>n.jsx("td",{colSpan:2,style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5364:98","data-source-comp":"App"},`band-${s.name}`))]}),n.jsxs("tr",{className:"bg-white text-slate-900",style:{borderTop:"1px solid #475569",borderBottom:"2.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5366:11","data-source-comp":"App",children:[n.jsx("td",{className:"py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5366:131","data-source-comp":"App",children:"Weekly Sign-Off"}),n.jsx("td",{colSpan:12,className:"py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5366:305","data-source-comp":"App",children:"Parent Initials:"}),n.jsx("td",{colSpan:2,className:"py-2 px-2 text-center bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5366:469","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:Gr,className:"inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900",title:"Click to toggle Parent Sign-Off","data-source-loc":"weekly_chores_household_hub.tsx:5366:573","data-source-comp":"App",children:n.jsx("span",{className:`inline-block min-w-[56px] border-b border-slate-800 ${$s.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5366:782","data-source-comp":"App",children:$s.done?"✓ TV / MV":"_________"})})})]})]})]})})]}),n.jsxs("div",{className:"no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5366:1047","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:1119","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:1204","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-indigo-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:1311","data-source-comp":"App",children:"HOUSEHOLD ROSTER"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5366:1405","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5366:1490","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:1562","data-source-comp":"App",children:[n.jsx("strong",{className:"text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:1567","data-source-comp":"App",children:"• Full-Time:"})," ",x.filter(s=>s.type==="regular").map(s=>s.name).join(", ")||"Sydney, Thom, Meghan"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:1746","data-source-comp":"App",children:[n.jsx("strong",{className:"text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:1751","data-source-comp":"App",children:"• Bi-Weekly:"})," ",x.filter(s=>s.type==="biweekly").map(s=>s.name).join(" & ")||"Cadence & Mason"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:1926","data-source-comp":"App",children:[n.jsx("strong",{className:"text-sky-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:1931","data-source-comp":"App",children:"• Casual:"})," ",x.filter(s=>s.type==="casual").map(s=>s.name).join(", ")||"Koda, Keyanna"]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:2109","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:2194","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:2301","data-source-comp":"App",children:"BI-WEEKLY SCHEDULE"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5366:2395","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5366:2480","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:2552","data-source-comp":"App",children:"• Cadence & Mason: Alternating bi-weekly schedule"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:2621","data-source-comp":"App",children:"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:2709","data-source-comp":"App",children:"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:2797","data-source-comp":"App",children:"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:2900","data-source-comp":"App",children:"• On-weeks (Starts Oct 19): Included in daily chore rotations"})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:2993","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:3078","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:3185","data-source-comp":"App",children:'PET CARE ROUTINE ("FEED THE HERD")'}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5366:3300","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5366:3385","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:3457","data-source-comp":"App",children:"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:3548","data-source-comp":"App",children:"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:3640","data-source-comp":"App",children:"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:3741","data-source-comp":"App",children:"• Routine: Daily feeding, fresh water & station cleanup"})]})]})]})]}),qt==="stats"&&n.jsxs("div",{className:"max-w-4xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5366:3867","data-source-comp":"App",children:[n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5","data-source-loc":"weekly_chores_household_hub.tsx:5366:3912","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5366:3984","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:4059","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5366:4110","data-source-comp":"App",children:"Scheduled Chores"}),n.jsx(Du,{className:"w-4 h-4 text-slate-400"})]}),n.jsx("div",{className:"text-2xl font-bold text-slate-900 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:4241","data-source-comp":"App",children:Lr.totalScheduled}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5366:4330","data-source-comp":"App",children:["Total across ",xn[it]," ",_t]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5366:4447","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:4522","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5366:4573","data-source-comp":"App",children:"Completed Chores"}),n.jsx(Tu,{className:"w-4 h-4 text-emerald-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-emerald-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:4709","data-source-comp":"App",children:Lr.totalCompleted}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5366:4800","data-source-comp":"App",children:[Lr.completionRate,"% completion rate"]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5366:4897","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:4972","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5366:5023","data-source-comp":"App",children:"Active Tasks"}),n.jsx(Sl,{className:"w-4 h-4 text-indigo-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-indigo-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:5151","data-source-comp":"App",children:ge.length}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5366:5232","data-source-comp":"App",children:"Daily & weekly routines"})]}),n.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5366:5308","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5366:5422","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-bold text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5366:5473","data-source-comp":"App",children:"Current Top Performer"}),n.jsx(id,{className:"w-4 h-4 text-amber-600"})]}),n.jsx("div",{className:"text-xl font-black text-amber-950 mt-2 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5366:5602","data-source-comp":"App",children:Yr?Yr.name:"TBD"}),n.jsx("p",{className:"text-xs text-amber-800 mt-1 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5366:5715","data-source-comp":"App",children:Yr?`${Yr.done} chores finished`:"Track chores to rank"})]})]}),n.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:5366:5863","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5366:5977","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5366:6088","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner","data-source-loc":"weekly_chores_household_hub.tsx:5366:6129","data-source-comp":"App",children:n.jsx(ap,{className:"w-6 h-6 text-amber-200"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5366:6285","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:6290","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full","data-source-loc":"weekly_chores_household_hub.tsx:5366:6331","data-source-comp":"App",children:"Monthly Incentive Prize"}),n.jsxs("span",{className:"text-xs opacity-90","data-source-loc":"weekly_chores_household_hub.tsx:5366:6464","data-source-comp":"App",children:[xn[it]," ",_t]})]}),n.jsx("h3",{className:"text-base font-extrabold mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5366:6561","data-source-comp":"App",children:"Top Performer Reward & Recognition"})]})]}),n.jsx("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5366:6660","data-source-comp":"App",children:n.jsxs("button",{onClick:()=>{Is(s=>!s),Rn(zo)},className:"text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5366:6701","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5369:203","data-source-comp":"App",children:Fs?"Cancel Edit":"Customize Incentive"})]})})]}),Fs?n.jsxs("div",{className:"pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5369:1186","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-white mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5369:1281","data-source-comp":"App",children:"Set Monthly Reward / Incentive Prize for the Top Performer:"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5369:1399","data-source-comp":"App",children:[n.jsx("input",{type:"text",value:Go,onChange:s=>Rn(s.target.value),placeholder:"e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass...",className:"flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300","data-source-loc":"weekly_chores_household_hub.tsx:5369:1427","data-source-comp":"App"}),n.jsx("button",{onClick:()=>{Go.trim()&&(Sa(Go.trim()),Is(!1),fe(`Updated Monthly Incentive: "${Go.trim()}"`),setTimeout(()=>fe(null),3e3))},className:"px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition","data-source-loc":"weekly_chores_household_hub.tsx:5369:1732","data-source-comp":"App",children:"Save Prize"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] pt-1","data-source-loc":"weekly_chores_household_hub.tsx:5376:140","data-source-comp":"App",children:[n.jsx("span",{className:"opacity-80","data-source-loc":"weekly_chores_household_hub.tsx:5376:210","data-source-comp":"App",children:"Quick ideas:"}),n.jsx("button",{onClick:()=>Rn("$15 Allowance Bonus & Pizza Night Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5376:258","data-source-comp":"App",children:"$15 + Pizza Night"}),n.jsx("button",{onClick:()=>Rn("1-Day Chore Exemption Pass & Movie Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5376:445","data-source-comp":"App",children:"1-Day Chore Pass"}),n.jsx("button",{onClick:()=>Rn("$20 Gift Card & Weekend Treat"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5376:628","data-source-comp":"App",children:"$20 Gift Card"}),n.jsx("button",{onClick:()=>Rn("Family Ice Cream Outing of Their Choice"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5376:802","data-source-comp":"App",children:"Ice Cream Outing"})]})]}):n.jsxs("div",{className:"pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5369:320","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5369:414","data-source-comp":"App",children:[n.jsx("div",{className:"text-amber-100 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5369:441","data-source-comp":"App",children:"Incentive for Highest Monthly Chore Completions:"}),n.jsxs("div",{className:"text-sm font-black text-white flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5369:539","data-source-comp":"App",children:[n.jsx(dd,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5369:662","data-source-comp":"App",children:zo})]})]}),Yr&&n.jsxs("div",{className:"bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5369:722","data-source-comp":"App",children:[n.jsx(id,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5369:915","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-amber-100 uppercase tracking-wider font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5369:920","data-source-comp":"App",children:"Leading Candidate"}),n.jsxs("div",{className:"font-extrabold text-xs text-white","data-source-loc":"weekly_chores_household_hub.tsx:5369:1022","data-source-comp":"App",children:[Yr.name," (",Yr.done," finished • ",Yr.pct,"%)"]})]})]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5376:1004","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5376:1079","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5376:1196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5376:1201","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5376:1242","data-source-comp":"App",children:"Family Members Completion"}),n.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5376:1323","data-source-comp":"App",children:["Kids & Minions (",Bn.length," Members)"]})]}),n.jsxs("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5376:1508","data-source-comp":"App",children:["Monthly Total Tracker ranked by total chores completed for ",xn[it]," ",_t,". Kids and minions completion leaderboard competing for the monthly reward."]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5376:1748","data-source-comp":"App",children:[n.jsx(Au,{className:"w-4 h-4 text-amber-500"}),n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5376:1856","data-source-comp":"App",children:"Ranked by Monthly Completions"})]})]}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5376:1951","data-source-comp":"App",children:Bn.map((s,i)=>{const c=i===0&&s.done>0,m=i===1&&s.done>0,h=i===2&&s.done>0;return n.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${c?"border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm":"border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5380:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5380:242","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5380:330","data-source-comp":"App",children:[n.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${c?"bg-amber-500 text-white shadow-xs":m?"bg-slate-300 text-slate-800":h?"bg-amber-700/80 text-white":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5380:371","data-source-comp":"App",children:c?n.jsx(id,{className:"w-4 h-4"}):`#${i+1}`}),n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5380:698","data-source-comp":"App",children:[n.jsx("span",{className:"w-3.5 h-3.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5380:739","data-source-comp":"App"}),n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5382:18","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-xs text-slate-500 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5382:95","data-source-comp":"App",children:["(",s.role," = ",s.role==="Supreme Overlord"?"Parent":"Kid",")"]}),n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.type==="biweekly"?"bg-pink-50 text-pink-700 border-pink-200":s.type==="casual"?"bg-sky-50 text-sky-700 border-sky-200":"bg-slate-100 text-slate-600 border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5382:223","data-source-comp":"App",children:s.residency}),c&&n.jsxs("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5382:516","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5382:673","data-source-comp":"App",children:"🏆"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5382:699","data-source-comp":"App",children:"Top Performer • Incentive Winner"})]})]})]}),n.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5382:773","data-source-comp":"App",children:[n.jsxs("div",{className:"text-right","data-source-loc":"weekly_chores_household_hub.tsx:5382:844","data-source-comp":"App",children:[n.jsx("span",{className:"font-extrabold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5382:872","data-source-comp":"App",children:s.done}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5382:943","data-source-comp":"App",children:[" / ",s.total," completed"]})]}),n.jsxs("span",{className:`font-black text-xs px-2 py-0.5 rounded-md ${s.pct>=80?"bg-emerald-100 text-emerald-800":s.pct>=50?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5382:1019","data-source-comp":"App",children:[s.pct,"%"]})]})]}),n.jsx("div",{className:"w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5382:1235","data-source-comp":"App",children:n.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500",style:{width:`${s.pct}%`,backgroundColor:c?"#D97706":s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5382:1310","data-source-comp":"App"})}),c&&n.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5385:36","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5385:165","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700 shrink-0"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5385:264","data-source-comp":"App",children:["Qualifying Reward: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5385:293","data-source-comp":"App",children:zo})]})]}),n.jsxs("span",{className:"font-bold text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5385:341","data-source-comp":"App",children:["Rank #1 in ",xn[it]]})]})]},s.id)})})]})]}),qt==="roster"&&n.jsx("div",{className:"max-w-5xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5386:60","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5386:105","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5386:180","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:292","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5386:297","data-source-comp":"App",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5386:338","data-source-comp":"App",children:"Household Hub Master Data"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5386:417","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500","data-source-loc":"weekly_chores_household_hub.tsx:5386:569","data-source-comp":"App"}),"Linked: Monthly Calendar & Printable Weekly Schedule"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5386:694","data-source-comp":"App",children:"Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files."})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5386:874","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5386:925","data-source-comp":"App",children:["Selected Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:1059","data-source-comp":"App",children:mt||Y.activeWeekStart})]}),n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200","data-source-loc":"weekly_chores_household_hub.tsx:5386:1136","data-source-comp":"App",children:["Kids Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:1262","data-source-comp":"App",children:Rr?"Active":"Inactive"})]}),n.jsxs("button",{type:"button",onClick:yo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer",title:"Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json","data-source-loc":"weekly_chores_household_hub.tsx:5386:1334","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:1654","data-source-comp":"App",children:"💾"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:1669","data-source-comp":"App",children:"Save as Default"})]}),n.jsxs("button",{type:"button",onClick:Uo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Download / export current configuration backup file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5386:1706","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:2008","data-source-comp":"App",children:"⬇️"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:2023","data-source-comp":"App",children:"Export Config"})]}),n.jsxs("label",{className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Import / restore a configuration file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5386:2058","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:2302","data-source-comp":"App",children:"⬆️"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5386:2317","data-source-comp":"App",children:"Import Config"}),n.jsx("input",{type:"file",accept:".json",onChange:Tl,className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5386:2343","data-source-comp":"App"})]})]})]}),n.jsxs("div",{className:"my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5386:2452","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5386:2597","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5386:2648","data-source-comp":"App",children:[n.jsx(_s,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-indigo-950","data-source-loc":"weekly_chores_household_hub.tsx:5386:2737","data-source-comp":"App",children:"Special Rules & Parameters"})]}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800","data-source-loc":"weekly_chores_household_hub.tsx:5386:2849","data-source-comp":"App",children:"Live Analytical Summary"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5386:2984","data-source-comp":"App",children:[(()=>{const s=x.filter(u=>u.active!==!1&&(u.role==="Supreme Overlord"||u.role==="Overseer Supreme")).map(u=>u.name),i=s.length>0?s.join(" & "):"None",c=x.filter(u=>u.active!==!1&&u.type==="regular").map(u=>u.name),m=x.filter(u=>u.active!==!1&&u.type==="biweekly").map(u=>u.name),h=Rr?[...c,...m]:c;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5392:22","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5392:112","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:182","data-source-comp":"App",children:"👑"}),"Supreme Overlords (Parents) & Minions (Kids)"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5392:263","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:321","data-source-comp":"App",children:i}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:364","data-source-comp":"App",children:"Supreme Overlords"}),", actively share daily chores with the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:433","data-source-comp":"App",children:"Kids"}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:464","data-source-comp":"App",children:"Minions"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:481","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:487","data-source-comp":"App",children:"Sunday Supper Rule:"})," On Sundays, ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:540","data-source-comp":"App",children:"Make Supper"})," is always assigned exclusively to ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:599","data-source-comp":"App",children:i}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:633","data-source-comp":"App"}),"They also conduct the Sunday ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:672","data-source-comp":"App",children:"Weekly Sign-Off & Inspection"}),"."]})]}),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5392:728","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-pink-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5392:816","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:884","data-source-comp":"App",children:"🏠"})," Custody Rotation: Kids Week"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5392:949","data-source-comp":"App",children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:1030","data-source-comp":"App",children:mt||Y.activeWeekStart}),", Kids Week = ",n.jsx("strong",{className:Rr?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5392:1118","data-source-comp":"App",children:Rr?"Active":"Inactive"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:1258","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:1264","data-source-comp":"App",children:m.length>0?m.join(" & "):"Bi-Weekly Occupants"})," are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5392:1486","data-source-comp":"App",children:"5:00 PM"}),". ",Rr?`Chores for this week are distributed across all ${h.length} active household members (${h.join(", ")}).`:`Chores for this week are distributed among the full-time roster (${c.join(", ")}).`]})]})]})})(),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5393:16","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-amber-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5393:105","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5393:174","data-source-comp":"App",children:"🚛"})," Alternating Curbside Schedule"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5393:241","data-source-comp":"App",children:["Curbside tasks alternate bi-weekly on Thursday evenings for the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5393:367","data-source-comp":"App",children:"Full-Time"})," & ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5393:400","data-source-comp":"App",children:"Bi-Weekly"})," occupants.",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5393:441","data-source-comp":"App"}),(()=>{const s=jt[3]||jt[0],i=s?Lt("Curbside Waste",s.year,s.month,s.day):!1,c=s?Lt("Curbside Recycling",s.year,s.month,s.day):!0;return n.jsxs(n.Fragment,{children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:45","data-source-comp":"App",children:mt||Y.activeWeekStart}),":",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:120","data-source-comp":"App"}),"Waste = ",n.jsx("strong",{className:i?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5397:138","data-source-comp":"App",children:i?"Active":"Inactive"}),n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:255","data-source-comp":"App"}),"Recycling = ",n.jsx("strong",{className:c?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5397:277","data-source-comp":"App",children:c?"Active":"Inactive"})]})})()]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4","data-source-loc":"weekly_chores_household_hub.tsx:5398:38","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-purple-50/70 border border-purple-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5398:98","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-purple-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5398:171","data-source-comp":"App",children:"Full-Time Occupants"}),n.jsx("div",{className:"text-[8px] italic text-purple-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5398:276","data-source-comp":"App",children:"(Eternally working)"}),n.jsxs("div",{className:"text-lg font-extrabold text-purple-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:394","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="regular").length," Members"]}),n.jsx("div",{className:"text-[11px] text-purple-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:553","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="regular").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-pink-50/70 border border-pink-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5398:751","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-pink-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5398:820","data-source-comp":"App",children:"Bi-Weekly Occupants"}),n.jsx("div",{className:"text-[8px] italic text-pink-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5398:923","data-source-comp":"App",children:"(Half-Timers)"}),n.jsxs("div",{className:"text-lg font-extrabold text-pink-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:1033","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="biweekly").length," Members"]}),n.jsx("div",{className:"text-[11px] text-pink-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:1191","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="biweekly").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-sky-50/70 border border-sky-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5398:1388","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-sky-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5398:1455","data-source-comp":"App",children:"Casual Assignees"}),n.jsx("div",{className:"text-[8px] italic text-sky-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5398:1554","data-source-comp":"App",children:"(Manually added to schedule)"}),n.jsxs("div",{className:"text-lg font-extrabold text-sky-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:1678","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="casual").length," Members"]}),n.jsx("div",{className:"text-[11px] text-sky-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:1833","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="casual").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 border border-amber-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5398:2027","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-amber-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5398:2098","data-source-comp":"App",children:"The Herd"}),n.jsx("div",{className:"text-[8px] italic text-amber-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5398:2191","data-source-comp":"App",children:"(Various beasts)"}),n.jsxs("div",{className:"text-lg font-extrabold text-amber-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:2305","data-source-comp":"App",children:[je.filter(s=>s.active!==!1).length," Pets"]}),n.jsx("div",{className:"text-[11px] text-amber-800 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5398:2433","data-source-comp":"App",children:je.filter(s=>s.active!==!1).map(s=>s.name).join(", ")||"None"})]})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:2609","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5398:2636","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5398:2703","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5398:2789","data-source-comp":"App",children:"Household Members"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5398:2860","data-source-comp":"App",children:"Rows 5–11 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:3007","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5398:3048","data-source-comp":"App",children:[x.length," Registered Occupants"]}),n.jsxs("button",{type:"button",onClick:()=>qr(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer",title:"Add a new household member","data-source-loc":"weekly_chores_household_hub.tsx:5398:3143","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5398:3436","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5398:3480","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5398:3560","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5398:3604","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5398:3727","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:3731","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:3760","data-source-comp":"App",children:"Role"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:3789","data-source-comp":"App",children:"Occupancy"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5398:3823","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5398:3871","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5398:3921","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5398:3977","data-source-comp":"App",children:x.map(s=>{const i=s.role==="Supreme Overlord"||s.role==="Overseer Supreme"?"Supreme Overlord":"Minion",c=s.type==="biweekly"?"Bi-Weekly":s.type==="casual"?"Casual":"Full-Time",m=["Parents","Kids","Non-Casual","All"],h=String(s.specialGroups||"").split(",").map(N=>N.trim()).filter(Boolean),u=Es===s.index_,d=qs===s.index_,f=()=>{const N=Er.trim()||s.name;ko(s.index_,{name:N}),un(null)},g=N=>{const j=new Set(h);j.has(N)?j.delete(N):j.add(N);const A=m.filter(w=>j.has(w));ko(s.index_,{specialGroups:A.join(", ")})};return n.jsxs("tr",{className:`transition ${d?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5427:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5427:153","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5427:202","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5427:243","data-source-comp":"App"}),d?n.jsx("input",{type:"text",value:Er,onChange:N=>Mr(N.target.value),onKeyDown:N=>{N.key==="Enter"&&f(),N.key==="Escape"&&un(null)},className:"w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5429:37","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5429:424","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5429:499","data-source-comp":"App",children:n.jsxs("select",{value:i,onChange:N=>ko(s.index_,{role:N.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${i==="Supreme Overlord"?"bg-amber-100 text-amber-900 border border-amber-300":"bg-indigo-50 text-indigo-800 border border-indigo-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5429:519","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5429:901","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5429:968","data-source-comp":"App",children:"Minion (Kid)"})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5429:1026","data-source-comp":"App",children:n.jsxs("select",{value:c,onChange:N=>ko(s.index_,{residency:N.target.value}),className:`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${c==="Bi-Weekly"?"bg-pink-50 text-pink-700 border border-pink-200":c==="Casual"?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5429:1046","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5429:1493","data-source-comp":"App",children:"Full-Time"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5429:1537","data-source-comp":"App",children:"Bi-Weekly"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5429:1581","data-source-comp":"App",children:"Casual"})]})}),n.jsxs("td",{className:"p-3 relative","data-source-loc":"weekly_chores_household_hub.tsx:5429:1633","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>En(u?null:s.index_),className:"w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5429:1662","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5429:2029","data-source-comp":"App",children:h.length>0?h.join(", "):"None selected"}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${u?"rotate-180 text-indigo-600":""}`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>En(null),"data-source-loc":"weekly_chores_household_hub.tsx:5429:2306","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5429:2393","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5429:2518","data-source-comp":"App",children:"Rotation Groups"}),m.map(N=>{const j=h.includes(N);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5431:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:j,onChange:()=>g(N),className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5431:164","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${j?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5431:353","data-source-comp":"App",children:N})]},N)})]})]})]}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5432:31","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:N=>ko(s.index_,{active:N.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5432:63","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5432:471","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5432:518","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5432:582","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5432:613","data-source-comp":"App",children:[d?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:f,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save name","data-source-loc":"weekly_chores_household_hub.tsx:5432:694","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>un(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel","data-source-loc":"weekly_chores_household_hub.tsx:5432:922","data-source-comp":"App",children:n.jsx(Yt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{un(s.index_),Mr(s.name)},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Rename ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5432:1157","data-source-comp":"App",children:n.jsx(Po,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Rl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Members`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:201","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:42","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5436:105","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5436:172","data-source-comp":"App",children:[n.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5436:213","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5436:261","data-source-comp":"App",children:"Household Pets"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5436:329","data-source-comp":"App",children:"Rows 27–32 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:501","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5436:542","data-source-comp":"App",children:[je.length," Registered Pets"]}),n.jsxs("button",{type:"button",onClick:()=>Ue(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer",title:"Add a new household pet member","data-source-loc":"weekly_chores_household_hub.tsx:5436:629","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5436:921","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-x-auto border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5436:965","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5436:1044","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5436:1088","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5436:1211","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:1215","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:1244","data-source-comp":"App",children:"Species"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:1276","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5436:1316","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5436:1362","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5436:1412","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5436:1468","data-source-comp":"App",children:je.map(s=>{const i=["Dog","Cat","Bird","Fish","Small Pet","Other"],c=s.type||"Dog";i.includes(c)||i.unshift(c);const m=Bs===s.index_,h=()=>{const u=cn.name.trim()||s.name;Co(s.index_,{name:u,routine:cn.routine.trim(),care:cn.care.trim()}),dn(null)};return n.jsxs("tr",{className:`transition ${m?"bg-amber-50/60":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5452:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5452:143","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5452:192","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5452:233","data-source-comp":"App"}),n.jsx("span",{className:"text-base shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5452:322","data-source-comp":"App",children:s.icon}),m?n.jsx("input",{type:"text",value:cn.name,onChange:u=>go(d=>({...d,name:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&h(),u.key==="Escape"&&dn(null)},className:"w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5452:392","data-source-comp":"App"}):n.jsx("span",{className:"px-2 py-0.5 rounded-full font-bold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5452:801","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5452:980","data-source-comp":"App",children:n.jsx("select",{value:c,onChange:u=>Co(s.index_,{type:u.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${c==="Dog"?"bg-amber-100 text-amber-900 border border-amber-300":c==="Cat"?"bg-orange-50 text-orange-800 border border-orange-200":"bg-slate-100 text-slate-800 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5452:1000","data-source-comp":"App",children:i.map(u=>n.jsx("option",{value:u,"data-source-loc":"weekly_chores_household_hub.tsx:5452:1485","data-source-comp":"App",children:u},u))})}),n.jsx("td",{className:"p-3 font-medium text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5452:1542","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:cn.routine,onChange:u=>go(d=>({...d,routine:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&h(),u.key==="Escape"&&dn(null)},className:"w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5452:1605","data-source-comp":"App"}):s.routine}),n.jsx("td",{className:"p-3 text-slate-600 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5452:2045","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:cn.care,onChange:u=>go(d=>({...d,care:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&h(),u.key==="Escape"&&dn(null)},className:"w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5452:2105","data-source-comp":"App"}):s.care}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5452:2524","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:u=>Co(s.index_,{active:u.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5452:2556","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5452:2951","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5452:2998","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5452:3062","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5452:3093","data-source-comp":"App",children:[m?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:h,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5452:3171","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>dn(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5452:3399","data-source-comp":"App",children:n.jsx(Yt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{dn(s.index_),go({name:s.name,routine:s.routine,care:s.care})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5452:3639","data-source-comp":"App",children:n.jsx(Po,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Fl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Pets`,"data-source-loc":"weekly_chores_household_hub.tsx:5459:196","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5460:42","data-source-comp":"App",children:[n.jsx("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5460:105","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5460:156","data-source-comp":"App",children:[n.jsx(np,{className:"w-4 h-4 text-purple-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5460:243","data-source-comp":"App",children:"Occupancy Categories & Rules"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5460:325","data-source-comp":"App",children:"Rows 14–17"})]})}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:451","data-source-comp":"App",children:U.map(s=>n.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:549","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5460:658","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5460:709","data-source-comp":"App",children:s.type}),n.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5460:777","data-source-comp":"App",children:"Active"})]}),n.jsx("div",{className:"text-[11px] font-semibold text-indigo-700","data-source-loc":"weekly_chores_household_hub.tsx:5460:888","data-source-comp":"App",children:s.description}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5460:970","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5460:1025","data-source-comp":"App",children:"Rule:"})," ",s.rules]})]},s.type))})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:1087","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5460:1186","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5460:1213","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5460:1264","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5460:1384","data-source-comp":"App",children:"Special Rotation Groups"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5460:1425","data-source-comp":"App",children:"Rows 20–25"})]}),n.jsx("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5460:1507","data-source-comp":"App",children:R.map(s=>n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:1563","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5460:1656","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5460:1707","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5460:1767","data-source-comp":"App",children:"Group"})]}),n.jsx("div",{className:"text-[11px] text-slate-600 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5460:1842","data-source-comp":"App",children:s.members})]},s.name))})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5460:1943","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5460:1970","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5460:2021","data-source-comp":"App",children:[n.jsx(sp,{className:"w-4 h-4 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5460:2145","data-source-comp":"App",children:"Schedule Configurations"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5460:2186","data-source-comp":"App",children:"Rows 18–21"})]}),n.jsxs("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5460:2268","data-source-comp":"App",children:[n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:2295","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5460:2373","data-source-comp":"App",children:"Active Week Start Date"}),n.jsx("div",{className:"text-sm font-extrabold text-indigo-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5460:2451","data-source-comp":"App",children:Y.activeWeekStart}),n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5460:2555","data-source-comp":"App",children:"Scope: Printable Weekly Schedule"})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:2645","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5460:2723","data-source-comp":"App",children:"Custody Schedule Rotation"}),n.jsx("div",{className:"text-sm font-extrabold text-pink-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5460:2804","data-source-comp":"App",children:Y.custodyRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5460:2906","data-source-comp":"App",children:["Bi-Weekly Schedule • Members: ",Y.custodyMembers]})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:3037","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5460:3115","data-source-comp":"App",children:"Waste / Recycling Schedule Rotation"}),n.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5460:3206","data-source-comp":"App",children:Y.wasteRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5460:3306","data-source-comp":"App",children:["Alternating weeks • Members: ",Y.wasteMembers]})]})]})]})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5460:3452","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5460:3515","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5460:3596","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5460:3601","data-source-comp":"App",children:[n.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5460:3642","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5460:3784","data-source-comp":"App",children:"Master Chores Template & Registry"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5460:3873","data-source-comp":"App",children:[Ce.length," Tasks • Rows 5–15 (Cols 6–10)"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5460:4084","data-source-comp":"App",children:"Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet."})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5460:4292","data-source-comp":"App",children:n.jsx("button",{onClick:()=>{xo(s=>!s)},className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer",title:"Add a new master chore","data-source-loc":"weekly_chores_household_hub.tsx:5460:4343","data-source-comp":"App",children:Aa?n.jsxs(n.Fragment,{children:[n.jsx(Yt,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5462:253","data-source-comp":"App",children:"Close Add Chore"})]}):n.jsxs(n.Fragment,{children:[n.jsx(bs,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5462:317","data-source-comp":"App",children:"Add Chore"})]})})})]}),Aa&&n.jsxs("div",{className:"my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn","data-source-loc":"weekly_chores_household_hub.tsx:5462:386","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5462:516","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-sm text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5462:599","data-source-comp":"App",children:[n.jsx(bs,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5462:720","data-source-comp":"App",children:"Add New Master Chore to Household Hub"})]}),n.jsx("button",{onClick:()=>xo(!1),className:"text-slate-400 hover:text-slate-700 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5462:776","data-source-comp":"App",children:n.jsx(Yt,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5462:920","data-source-comp":"App",children:[n.jsxs("div",{className:"md:col-span-2","data-source-loc":"weekly_chores_household_hub.tsx:5462:983","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5462:1014","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5462:1096","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:Ze.task,onChange:s=>Ht(i=>({...i,task:s.target.value})),onKeyDown:s=>{s.key==="Enter"&&Ze.task.trim()&&On(Ze)},placeholder:"e.g. Empty dishwasher, sanitize counters, sweep porch...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5462:1148","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:261","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:266","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:Ze.category,onChange:s=>Ht(i=>({...i,category:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:337","data-source-comp":"App",children:Sn.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5476:201","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5476:282","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5476:287","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:Ze.frequency,onChange:s=>{const i=s.target.value;Ht(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5476:359","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5485:172","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5485:208","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5485:256","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5485:315","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5485:320","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("select",{value:Ze.targetDay,onChange:s=>Ht(i=>({...i,targetDay:s.target.value})),className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5485:396","data-source-comp":"App"}),n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5490:37","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>jr(Wt==="NEW_CHORE"?null:"NEW_CHORE"),className:"w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5490:63","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5490:423","data-source-comp":"App",children:Ze.targetDay||"Select days..."}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${Wt==="NEW_CHORE"?"rotate-180 text-indigo-600":""}`})]}),Wt==="NEW_CHORE"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>jr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5490:719","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5490:804","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5490:929","data-source-comp":"App",children:"Select Day(s)"}),Hr.map(s=>{const i=Ze.selectedTargetDays||sn(Ze.targetDay).selectedDays,c=i.includes(s);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5490:1268","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:()=>{const m=new Set(i);m.has(s)?m.delete(s):m.add(s);const h=Hr.filter(d=>m.has(d)),u=Tr(h,!!Ze.customTargetEnabled,Ze.customTargetText||"");Ht(d=>({...d,selectedTargetDays:h,targetDay:u}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5490:1408","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${c?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5490:1962","data-source-comp":"App",children:s})]},s)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5490:2093","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5490:2170","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:!!Ze.customTargetEnabled,onChange:s=>{const i=s.target.checked,c=Ze.selectedTargetDays||sn(Ze.targetDay).selectedDays,m=Tr(c,i,Ze.customTargetText||"");Ht(h=>({...h,customTargetEnabled:i,targetDay:m}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5490:2242","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${Ze.customTargetEnabled?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5490:2800","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:Ze.customTargetText||"",onChange:s=>{const i=s.target.value,c=Ze.selectedTargetDays||[],m=Tr(c,!0,i);Ht(h=>({...h,customTargetEnabled:!0,customTargetText:i,targetDay:m}))},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5490:2948","data-source-comp":"App"})]})]})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5490:3539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5490:3544","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:Ze.rotationGroup==="All Non-Casual"?"Non-Casual":Ze.rotationGroup,onChange:s=>Ht(i=>({...i,rotationGroup:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5490:3621","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5495:174","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5495:216","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5495:262","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5495:296","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5495:336","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5495:379","data-source-comp":"App",children:x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5495:440","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))})]})]}),n.jsxs("div",{className:"md:col-span-3","data-source-loc":"weekly_chores_household_hub.tsx:5495:539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5495:570","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("input",{type:"text",value:Ze.notes,onChange:s=>Ht(i=>({...i,notes:s.target.value})),placeholder:"Instructions, supplies, details or timing notes...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5495:660","data-source-comp":"App"})]})]}),n.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5500:238","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>xo(!1),className:"px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition","data-source-loc":"weekly_chores_household_hub.tsx:5500:310","data-source-comp":"App",children:"Cancel"}),n.jsxs("button",{type:"button",onClick:()=>On({...Ze,rotationGroup:Ze.rotationGroup==="All Non-Casual"?"Non-Casual":Ze.rotationGroup}),disabled:!Ze.task.trim(),className:"px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5500:493","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5500:924","data-source-comp":"App",children:"Add Chore to Master List"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5500:983","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5500:1038","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5500:1106","data-source-comp":"App",children:"Total Template Chores"}),n.jsxs("div",{className:"text-xl font-bold text-slate-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5500:1220","data-source-comp":"App",children:[Ce.length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5500:1317","data-source-comp":"App",children:"All registered tasks"})]}),n.jsxs("div",{className:"p-3 bg-blue-50/70 rounded-xl border border-blue-200","data-source-loc":"weekly_chores_household_hub.tsx:5500:1395","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5500:1464","data-source-comp":"App",children:"Daily Chores"}),n.jsxs("div",{className:"text-xl font-bold text-blue-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5500:1568","data-source-comp":"App",children:[Ce.filter(s=>s.frequency.toLowerCase().includes("daily")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-blue-600","data-source-loc":"weekly_chores_household_hub.tsx:5500:1721","data-source-comp":"App",children:"Mon – Sun rotation"})]}),n.jsxs("div",{className:"p-3 bg-purple-50/70 rounded-xl border border-purple-200","data-source-loc":"weekly_chores_household_hub.tsx:5500:1796","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-purple-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5500:1869","data-source-comp":"App",children:"Once a Week"}),n.jsxs("div",{className:"text-xl font-bold text-purple-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5500:1974","data-source-comp":"App",children:[Ce.filter(s=>{const i=(s.frequency||"").toLowerCase();return(i.includes("weekly")||i.includes("once"))&&!i.includes("bi")}).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-purple-600","data-source-loc":"weekly_chores_household_hub.tsx:5500:2208","data-source-comp":"App",children:"Saturday & Sunday deep tasks"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 rounded-xl border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5500:2295","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5500:2366","data-source-comp":"App",children:"Bi-Weekly Tasks"}),n.jsxs("div",{className:"text-xl font-bold text-amber-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5500:2474","data-source-comp":"App",children:[Ce.filter(s=>s.frequency.toLowerCase().includes("bi-weekly")||s.frequency.toLowerCase().includes("biweekly")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5500:2682","data-source-comp":"App",children:"Split Curbside Recycling & Waste"})]})]}),n.jsxs("div",{className:"pt-2 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5500:2778","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5500:2810","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5500:2891","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search chores by name, category, group, or notes...",value:$r,onChange:s=>Os(s.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5500:3006","data-source-comp":"App"}),$r&&n.jsx("button",{onClick:()=>Os(""),className:"absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5500:3354","data-source-comp":"App",children:n.jsx(Yt,{className:"w-3.5 h-3.5"})})]}),n.jsxs("div",{className:"flex items-center gap-1.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5500:3523","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-500 font-semibold mr-1","data-source-loc":"weekly_chores_household_hub.tsx:5500:3574","data-source-comp":"App",children:"Frequency:"}),n.jsx("button",{onClick:()=>Ln("ALL"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Ar==="ALL"?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5500:3643","data-source-comp":"App",children:"All"}),n.jsx("button",{onClick:()=>Ln("Daily"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Ar==="Daily"?"bg-blue-600 text-white":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5500:3887","data-source-comp":"App",children:"Daily"}),n.jsx("button",{onClick:()=>Ln("Once a Week"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Ar==="Once a Week"?"bg-purple-600 text-white":"bg-purple-50 text-purple-700 hover:bg-purple-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5500:4132","data-source-comp":"App",children:"Weekly"}),n.jsx("button",{onClick:()=>Ln("Bi-Weekly"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Ar==="Bi-Weekly"?"bg-amber-600 text-white":"bg-amber-50 text-amber-800 hover:bg-amber-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5500:4398","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5500:4671","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-400 font-semibold mr-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5500:4743","data-source-comp":"App",children:"Category:"}),n.jsxs("button",{onClick:()=>Ws("ALL"),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${ot==="ALL"?"bg-slate-800 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5500:4820","data-source-comp":"App",children:["All Categories (",Ce.length,")"]}),Sn.map(s=>{const i=Ce.filter(c=>c.category.toLowerCase()===s.name.toLowerCase()).length;return n.jsxs("button",{onClick:()=>Ws(s.name),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${ot===s.name?"ring-2 ring-slate-800 shadow-xs":"opacity-85 hover:opacity-100"} ${s.bg} ${s.text} ${s.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5502:20","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5502:339","data-source-comp":"App",children:s.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5502:362","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] opacity-75","data-source-loc":"weekly_chores_household_hub.tsx:5502:385","data-source-comp":"App",children:["(",i,")"]})]},s.id)})]})]}),n.jsxs("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5503:26","data-source-comp":"App",children:[n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5503:106","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5503:150","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5503:273","data-source-comp":"App",children:[n.jsx("th",{className:"p-3 w-10 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5503:277","data-source-comp":"App",children:"#"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5503:320","data-source-comp":"App",children:"Chore / Task"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5503:357","data-source-comp":"App",children:"Category"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5503:390","data-source-comp":"App",children:"Frequency"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5503:424","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5503:462","data-source-comp":"App",children:"Rotation Group"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5503:501","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5503:557","data-source-comp":"App",children:an.map((s,i)=>{const c=Ps===s.index_,m=Sn.find(W=>W.name.toLowerCase()===(s.category||"").toLowerCase())||Sn[3],h=c&&(qe!=null&&qe.category)&&Sn.find(W=>W.name.toLowerCase()===qe.category.toLowerCase())||m,u=(s.frequency||"").toLowerCase().includes("bi")?"Bi-Weekly":(s.frequency||"").toLowerCase().includes("once")||(s.frequency||"").toLowerCase().includes("weekly")?"Once a Week":"Daily",d=c&&(qe!=null&&qe.frequency)?qe.frequency:u,f=s.targetDay||(u==="Daily"?"Mon – Sun":u==="Bi-Weekly"?"Thursday Evening":"Saturday"),g=c&&(qe==null?void 0:qe.targetDay)!==void 0?qe.targetDay:f,N=sn(g),j=c&&Array.isArray(qe==null?void 0:qe.selectedTargetDays)?qe.selectedTargetDays:N.selectedDays,A=c&&(qe==null?void 0:qe.customTargetEnabled)!==void 0?!!qe.customTargetEnabled:N.customEnabled,w=c&&(qe==null?void 0:qe.customTargetText)!==void 0?qe.customTargetText:N.customText,C=c&&Wt===s.index_,I=s.rotationGroup||"Non-Casual",z=c&&(qe!=null&&qe.rotationGroup)?qe.rotationGroup:I,P=()=>{const W=((qe==null?void 0:qe.task)||"").trim()||s.task,J=((qe==null?void 0:qe.notes)||"").trim(),Z=Tr(j,A,w);jr(null),Ta(s.index_,{oldTask:s.task,task:W,category:h.name,frequency:d,targetDay:Z,rotationGroup:z,notes:J})};return n.jsxs(ao.Fragment,{children:[n.jsxs("tr",{className:`transition ${i>0?"border-t border-slate-200":""} ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5541:75","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-center align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5541:208","data-source-comp":"App",children:n.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5541:266","data-source-comp":"App",children:i+1})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5541:416","data-source-comp":"App",children:c?n.jsx("input",{type:"text",value:(qe==null?void 0:qe.task)||"",onChange:W=>It(J=>({...J,task:W.target.value})),onKeyDown:W=>{W.key==="Enter"&&P(),W.key==="Escape"&&(jr(null),Dr(null),It(null))},className:"w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5541:518","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5541:1055","data-source-comp":"App",children:s.task})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5541:1133","data-source-comp":"App",children:c?n.jsx("select",{value:h.name,onChange:W=>It(J=>({...J,category:W.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${h.bg} ${h.text} ${h.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5541:1192","data-source-comp":"App",children:Sn.map(W=>n.jsxs("option",{value:W.name,"data-source-loc":"weekly_chores_household_hub.tsx:5541:1545","data-source-comp":"App",children:[W.icon," ",W.name]},W.id))}):n.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${m.bg} ${m.text} ${m.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5541:1623","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5541:1780","data-source-comp":"App",children:m.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5541:1809","data-source-comp":"App",children:m.name})]})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5541:1851","data-source-comp":"App",children:c?n.jsxs("select",{value:d,onChange:W=>{const J=W.target.value,Z=J==="Daily"?"Mon – Sun":J==="Bi-Weekly"?"Thursday Evening":g==="Mon – Sun"?"Saturday":g,ce=sn(Z);It(ue=>({...ue,frequency:J,targetDay:Z,selectedTargetDays:ce.selectedDays,customTargetEnabled:ce.customEnabled,customTargetText:ce.customText}))},className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${d==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":d==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5541:1910","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5553:354","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5553:390","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5553:438","data-source-comp":"App",children:"Bi-Weekly"})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${u==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":u==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5553:494","data-source-comp":"App",children:u})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle relative","data-source-loc":"weekly_chores_household_hub.tsx:5553:806","data-source-comp":"App",children:c?n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:()=>jr(C?null:s.index_),className:"min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5553:876","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5553:1232","data-source-comp":"App",children:Tr(j,A,w)}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${C?"rotate-180 text-indigo-600":""}`})]}),C&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>jr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5553:1516","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5553:1601","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5553:1726","data-source-comp":"App",children:"Target Day(s)"}),Hr.map(W=>{const J=j.includes(W);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5555:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:J,onChange:()=>{const Z=new Set(j);Z.has(W)?Z.delete(W):Z.add(W);const ce=Hr.filter(Fe=>Z.has(Fe)),ue=Tr(ce,A,w);It(Fe=>({...Fe,selectedTargetDays:ce,targetDay:ue}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5555:162","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${J?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5566:122","data-source-comp":"App",children:W})]},W)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5567:16","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5567:93","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:A,onChange:W=>{const J=W.target.checked,Z=Tr(j,J,w);It(ce=>({...ce,customTargetEnabled:J,targetDay:Z}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5567:165","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${A?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5575:120","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:w,onChange:W=>{const J=W.target.value,Z=Tr(j,!0,J);It(ce=>({...ce,customTargetEnabled:!0,customTargetText:J,targetDay:Z}))},onKeyDown:W=>{W.key==="Enter"&&jr(null)},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:252","data-source-comp":"App"})]})]})]})]}):n.jsx("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5584:327","data-source-comp":"App",children:f})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5584:502","data-source-comp":"App",children:c?n.jsxs("select",{value:z,onChange:W=>It(J=>({...J,rotationGroup:W.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${z==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":z==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":z==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":z==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5584:561","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5584:1181","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5584:1223","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5584:1269","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5584:1303","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5584:1343","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5584:1386","data-source-comp":"App",children:x.map(W=>n.jsx("option",{value:W.name,"data-source-loc":"weekly_chores_household_hub.tsx:5584:1447","data-source-comp":"App",children:W.name},W.id))})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${I==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":I==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":I==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":I==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5584:1523","data-source-comp":"App",children:I})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5584:1987","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5584:2062","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>Vr(s,"up"),disabled:i===0,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore up","data-source-loc":"weekly_chores_household_hub.tsx:5584:2122","data-source-comp":"App",children:n.jsx(Su,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Vr(s,"down"),disabled:i===an.length-1,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore down","data-source-loc":"weekly_chores_household_hub.tsx:5584:2404","data-source-comp":"App",children:n.jsx(Nu,{className:"w-3.5 h-3.5"})}),c?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:P,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5584:2737","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>{jr(null),Dr(null),It(null)},className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5584:2967","data-source-comp":"App",children:n.jsx(Yt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{const W=sn(f);jr(null),Dr(s.index_),It({task:s.task||"",category:m.name,frequency:u,targetDay:f,selectedTargetDays:W.selectedDays,customTargetEnabled:W.customEnabled,customTargetText:W.customText,rotationGroup:I,notes:s.notes||""})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.task}`,"data-source-loc":"weekly_chores_household_hub.tsx:5584:3275","data-source-comp":"App",children:n.jsx(Po,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>zt(s.index_,s.task),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove "${s.task}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5599:195","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]}),n.jsxs("tr",{className:`transition ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5599:472","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5599:559","data-source-comp":"App"}),n.jsx("td",{colSpan:6,className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5599:592","data-source-comp":"App",children:c?n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5599:648","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-[11px] text-indigo-800 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5599:806","data-source-comp":"App",children:"Instructions / Notes:"}),n.jsx("input",{type:"text",value:(qe==null?void 0:qe.notes)||"",onChange:W=>It(J=>({...J,notes:W.target.value})),onKeyDown:W=>{W.key==="Enter"&&P(),W.key==="Escape"&&(Dr(null),It(null))},placeholder:"Add operational instructions or routine notes...",className:"w-full text-xs text-slate-800 bg-transparent focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5599:899","data-source-comp":"App"})]}):n.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5599:1380","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5599:1502","data-source-comp":"App",children:"Instructions / Notes:"})," ",s.notes||n.jsx("span",{className:"italic text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5599:1591","data-source-comp":"App",children:"No instructions"})]})})]})]},`${s.index_||s.task}-${i}`)})})]}),an.length===0&&n.jsxs("div",{className:"p-8 text-center bg-white text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5600:68","data-source-comp":"App",children:[n.jsx(Sl,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),n.jsx("p",{className:"font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5600:185","data-source-comp":"App",children:"No chores match the current filters"}),Ce.length===0?n.jsx("button",{onClick:()=>xo(!0),className:"mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5600:285","data-source-comp":"App",children:"Add First Chore"}):n.jsx("button",{onClick:()=>{Ws("ALL"),Ln("ALL"),Os("")},className:"mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5600:446","data-source-comp":"App",children:"Reset Filters"})]})]})]})]})})]}),Ft&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5600:751","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5600:857","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5600:989","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5600:1068","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5600:1073","data-source-comp":"App",children:"Day Schedule"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5600:1172","data-source-comp":"App",children:(()=>{const s=Rt(Ft);return s?new Date(s.year,s.month,s.day).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}):Ft})()})]}),n.jsx("button",{onClick:()=>rn(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5610:27","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5610:204","data-source-comp":"App",children:[n.jsxs("span",{className:"text-slate-600 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5610:305","data-source-comp":"App",children:[ge.filter(s=>{var i,c;return(c=(i=ft[Ft])==null?void 0:i[s.index_])==null?void 0:c.done}).length," of"," ",ge.length," completed"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5613:72","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>{ge.forEach(s=>{Ur(Ft,s.index_,{done:!0})})},className:"px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5613:100","data-source-comp":"App",children:"Mark All Done"}),n.jsx("button",{onClick:()=>{ge.forEach(s=>{Ur(Ft,s.index_,{done:!1})})},className:"px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5619:142","data-source-comp":"App",children:"Reset All"})]})]}),n.jsx("div",{className:"p-4 overflow-y-auto space-y-2 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5625:144","data-source-comp":"App",children:ge.map(s=>{var i,c,m,h,u;const d=ir(Ft,s.index_),f=gr(s),g=Rt(Ft),N=g?(new Date(g.year,g.month,g.day).getDay()+6)%7:0,j=s.task||((i=s.row)==null?void 0:i[0])||"",A=j.toLowerCase(),w=A.includes("deep clean")||A.includes("feeding station")?N===6:A.includes("recycling")?N===3&&g&&Lt("recycling",g.year,g.month,g.day):A.includes("waste")?N===3&&g&&Lt("waste",g.year,g.month,g.day):f.frequency==="daily"?!0:f.frequency==="weekly"?N===f.dayOfWeek:f.frequency==="biweekly"?N===f.dayOfWeek&&g&&Lt(j,g.year,g.month,g.day):!1;return n.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col gap-2 transition ${d.done?"bg-emerald-50/60 border-emerald-200":f.frequency==="weekly"&&w?"bg-purple-50/60 border-purple-200":"bg-white border-slate-200 hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5648:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5648:309","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5648:366","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Ur(Ft,s.index_,{done:!d.done}),className:"text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5648:424","data-source-comp":"App",children:d.done?n.jsx(ud,{className:"w-5 h-5 text-emerald-600"}):n.jsx(Eu,{className:"w-5 h-5"})}),n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5650:199","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-semibold truncate ${d.done?"line-through text-slate-500":"text-slate-800"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5650:250","data-source-comp":"App",children:s.task||s.row[0]}),f.frequency==="weekly"&&n.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${w?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5650:428","data-source-comp":"App",children:w?"1x/wk (Today)":`1x/wk (${(c=Qt[f.dayOfWeek])==null?void 0:c.short})`})]})]}),hr(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded border shrink-0",style:{backgroundColor:((m=De(hr(s.task||s.row[0])))==null?void 0:m.bg)||"#FCE7F3",color:((h=De(hr(s.task||s.row[0])))==null?void 0:h.text)||"#BE185D",borderColor:(((u=De(hr(s.task||s.row[0])))==null?void 0:u.color)||"#ec4899")+"50"},"data-source-loc":"weekly_chores_household_hub.tsx:5650:805","data-source-comp":"App",children:hr(s.task||s.row[0])}):so(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5654:110","data-source-comp":"App",children:"Each Child"}):n.jsxs("select",{value:d.who,onChange:C=>Ur(Ft,s.index_,{who:C.target.value}),className:"text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs",style:{color:d.who?"#0f172a":"#334155"},"data-source-loc":"weekly_chores_household_hub.tsx:5654:244","data-source-comp":"App",children:[n.jsx("option",{value:"",style:{color:"#64748b",backgroundColor:"#FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5658:16","data-source-comp":"App",children:"Unassigned"}),n.jsx("optgroup",{label:"Full-Time Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5661:35","data-source-comp":"App",children:x.filter(C=>C.type==="regular").map(C=>n.jsxs("option",{value:C.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5665:74","data-source-comp":"App",children:[C.name,C.role?` (${C.role})`:""]},C.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5669:76","data-source-comp":"App",children:x.filter(C=>C.type==="biweekly").map(C=>{const I=Rt(Ft),z=I?io(I.year,I.month,I.day):null,P=z!=null&&z.isArrivalDay?" (Arrives 5 PM)":z!=null&&z.isDepartureDay?" (Leaves 5 PM)":z!=null&&z.isPresent?" (Here)":" (Away)";return n.jsxs("option",{value:C.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5677:22","data-source-comp":"App",children:[C.name,P]},C.id)})}),n.jsx("optgroup",{label:"Casual Assignees (Lesser Scale)",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5682:27","data-source-comp":"App",children:x.filter(C=>C.type==="casual").map(C=>n.jsx("option",{value:C.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5686:73","data-source-comp":"App",children:C.name},C.id))}),n.jsxs("optgroup",{label:"Special Groups",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5690:46","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual",style:{color:"#4338CA",backgroundColor:"#FFFFFF",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5694:16","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5698:39","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5702:35","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Thom / Meghan",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5706:33","data-source-comp":"App",children:"Thom / Meghan"}),n.jsx("option",{value:"Parents",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5710:38","data-source-comp":"App",children:"Parents"})]}),d.who&&!x.some(C=>C.name===d.who)&&!["All Non-Casual","Each Child","All Kids","Thom / Meghan","Parents"].includes(d.who)&&n.jsx("option",{value:d.who,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5714:207","data-source-comp":"App",children:d.who})]})]}),so(s.task||s.row[0])&&!hr(s.task||s.row[0])&&n.jsxs("div",{className:"bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5718:144","data-source-comp":"App",children:[n.jsxs("div",{className:"text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5718:218","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5718:312","data-source-comp":"App",children:"Individual Bedrooms to Clean:"}),n.jsx("span",{className:"text-[10px] text-pink-600 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5718:354","data-source-comp":"App",children:"Each child cleans own space"})]}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5718:450","data-source-comp":"App",children:zr(Ft).map(C=>{var I;const z=!!((I=d.kidsDone)!=null&&I[C]),P=De(C);return n.jsxs("button",{type:"button",onClick:()=>bo(Ft,s.index_,C),className:`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${z?"bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through":"bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5722:22","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5722:379","data-source-comp":"App",children:[n.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(P==null?void 0:P.color)||"#ec4899"},"data-source-loc":"weekly_chores_household_hub.tsx:5722:431","data-source-comp":"App"}),n.jsxs("span",{className:"font-semibold truncate","data-source-loc":"weekly_chores_household_hub.tsx:5724:20","data-source-comp":"App",children:[C,"'s Room"]})]}),n.jsx("span",{className:"font-bold ml-1","data-source-loc":"weekly_chores_household_hub.tsx:5724:90","data-source-comp":"App",children:z?"✓":"○"})]},C)})})]})]},s.index_)})}),n.jsx("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end","data-source-loc":"weekly_chores_household_hub.tsx:5726:20","data-source-comp":"App",children:n.jsx("button",{onClick:()=>rn(null),className:"px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5726:96","data-source-comp":"App",children:"Done"})})]})}),wa&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5726:309","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5726:415","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5726:520","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5726:630","data-source-comp":"App",children:[n.jsx(_s,{className:"w-5 h-5 text-amber-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5726:718","data-source-comp":"App",children:"Auto-Assign Schedule"})]}),n.jsx("button",{onClick:()=>uo(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5726:785","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5726:966","data-source-comp":"App",children:[n.jsxs("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5726:1005","data-source-comp":"App",children:["Distribute daily tasks and weekly routines (Clean Basement, Feeding Station Deep Clean, Curbside Waste & Recycling) evenly across household occupants for ",n.jsxs("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5726:1189","data-source-comp":"App",children:[xn[it]," ",_t]}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5726:1254","data-source-comp":"App"}),n.jsx("span",{className:"text-[11px] text-slate-500 italic mt-1 inline-block","data-source-loc":"weekly_chores_household_hub.tsx:5726:1260","data-source-comp":"App",children:"Note: Tidy Bedrooms and Laundry Tasks remain individual minion checklists where each child does their own."})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5726:1447","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-slate-800 block mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5726:1452","data-source-comp":"App",children:"Full-Time Occupants (Included in Chore Distribution):"}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5726:1570","data-source-comp":"App",children:x.filter(s=>s.type==="regular").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5726:1688","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-indigo-600 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5726:1814","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5726:1936","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5728:16","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5728:87","data-source-comp":"App",children:["(",s.role==="Overseer Supreme"?"Parent":"Kid",")"]})]},s.id))}),n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5728:208","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-pink-800 block","data-source-loc":"weekly_chores_household_hub.tsx:5728:266","data-source-comp":"App",children:"Bi-Weekly Occupants (Active During Stay Weeks Only):"}),n.jsx("span",{className:"text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded","data-source-loc":"weekly_chores_household_hub.tsx:5728:375","data-source-comp":"App",children:"Back Sunday, Oct. 18 @ 5:00 PM"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5728:536","data-source-comp":"App",children:x.filter(s=>s.type==="biweekly").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5728:655","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-pink-600 focus:ring-pink-500","data-source-loc":"weekly_chores_household_hub.tsx:5728:793","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5728:911","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5730:16","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5730:76","data-source-comp":"App",children:"Bi-weekly only"})]},s.id))}),n.jsxs("div",{className:"p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5730:196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5730:268","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sky-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5730:324","data-source-comp":"App",children:"Casual Members (Manual Add-Ins Only):"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300","data-source-loc":"weekly_chores_household_hub.tsx:5730:417","data-source-comp":"App",children:"Excluded from Auto-Assign"})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5730:565","data-source-comp":"App",children:x.filter(s=>s.type==="casual").map(s=>n.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5730:680","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5730:842","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5732:16","data-source-comp":"App",children:s.name})]},s.id))}),n.jsx("p",{className:"text-[11px] text-sky-700 mt-2 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5732:52","data-source-comp":"App",children:'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'})]})]}),n.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5732:275","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-pink-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5732:436","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5732:442","data-source-comp":"App",children:"Daily & Weekly Distribution:"})," Tasks are handed out so all available family members share the daily and weekly chores evenly. ",He," are included during stay weeks and skipped on away weeks. Tidy Bedrooms and Laundry Tasks remain individual checklists."]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5732:751","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>uo(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5732:833","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=x.filter(c=>{var m;return c.type==="regular"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name),i=x.filter(c=>{var m;return c.type==="biweekly"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name);Ma(s,i)},className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5732:1023","data-source-comp":"App",children:"Distribute Daily & Weekly Chores"})]})]})}),(ba||As)&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5742:240","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5742:346","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5742:478","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5742:557","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white","data-source-loc":"weekly_chores_household_hub.tsx:5742:598","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5742:730","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5742:735","data-source-comp":"App",children:"Add / Edit Master Chores"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5742:800","data-source-comp":"App",children:"Add new tasks, edit existing chores, or remove from the schedule"})]})]}),n.jsx("button",{onClick:()=>{Br(!1),Tn(!1),nn([]),Nr(null)},className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5742:922","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-100/70 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5747:143","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{_a("add"),Nr(null)},className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="add"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5747:211","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5750:259","data-source-comp":"App",children:"+ Add New Chore"})]}),n.jsxs("button",{type:"button",onClick:()=>_a("edit"),className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="edit"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5750:296","data-source-comp":"App",children:[n.jsx(Po,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5750:604","data-source-comp":"App",children:["✏️ Edit Chore (",ge.length,")"]})]})]}),mr==="add"&&n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5750:708","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5750:762","data-source-comp":"App",children:[n.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5750:767","data-source-comp":"App",children:["Chore / Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5750:859","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-chore-title-input",placeholder:"e.g. Clean oven, sweep patio, sanitize counters...",autoFocus:!0,onKeyDown:s=>{if(s.key==="Enter"){const i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who");vo(s.currentTarget.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:""})}},className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5750:911","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5761:159","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5761:222","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5761:227","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{id:"new-chore-frequency",defaultValue:"daily",onChange:s=>{const i=document.getElementById("day-select-container");i&&(i.style.display=s.target.value==="weekly"?"block":"none")},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5761:299","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5766:143","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5766:191","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5766:234","data-source-comp":"App",children:"Bi-Weekly (Curbside schedule)"})]})]}),n.jsxs("div",{id:"day-select-container",style:{display:"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5766:312","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:14","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{id:"new-chore-day",defaultValue:"5",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:87","data-source-comp":"App",children:Qt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5768:286","data-source-comp":"App",children:["Every ",s.name]},s.name))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5768:367","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:430","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:435","data-source-comp":"App",children:"Category"}),n.jsxs("select",{id:"new-chore-category",defaultValue:"Household",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:506","data-source-comp":"App",children:[n.jsx("option",{value:"Household","data-source-loc":"weekly_chores_household_hub.tsx:5768:692","data-source-comp":"App",children:"Household"}),n.jsx("option",{value:"Kitchen","data-source-loc":"weekly_chores_household_hub.tsx:5768:736","data-source-comp":"App",children:"Kitchen"}),n.jsx("option",{value:"Pet Care","data-source-loc":"weekly_chores_household_hub.tsx:5768:776","data-source-comp":"App",children:"Pet Care"}),n.jsx("option",{value:"Bedrooms","data-source-loc":"weekly_chores_household_hub.tsx:5768:818","data-source-comp":"App",children:"Bedrooms"}),n.jsx("option",{value:"Common Areas","data-source-loc":"weekly_chores_household_hub.tsx:5768:860","data-source-comp":"App",children:"Common Areas"}),n.jsx("option",{value:"Administration","data-source-loc":"weekly_chores_household_hub.tsx:5768:910","data-source-comp":"App",children:"Administration"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:979","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:984","data-source-comp":"App",children:"Default Rotation Group"}),n.jsxs("select",{id:"new-chore-who",defaultValue:"All Non-Casual",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:1069","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5768:1255","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5768:1348","data-source-comp":"App",children:"Rotating / Unassigned"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5768:1395","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5768:1447","data-source-comp":"App",children:"All Kids (Shared)"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5768:1498","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5768:1556","data-source-comp":"App",children:"Full-Time Roster"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5768:1614","data-source-comp":"App",children:"Parents Only"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5768:1659","data-source-comp":"App",children:"All Occupants"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5768:1735","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]}),n.jsxs("p",{className:"text-[10px] text-slate-500 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5768:1817","data-source-comp":"App",children:["💡 ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:1891","data-source-comp":"App",children:"All Non-Casual:"})," Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."]})]})]}),n.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5768:2065","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:2239","data-source-comp":"App",children:"Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory."})]})]}),(mr==="edit"||mr==="remove")&&n.jsx("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:2463","data-source-comp":"App",children:fr!==null?n.jsxs("div",{className:"space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5768:2607","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5768:2642","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Nr(null),className:"flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5768:2724","data-source-comp":"App",children:[n.jsx(ju,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:2923","data-source-comp":"App",children:"Back to All Chores"})]}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase","data-source-loc":"weekly_chores_household_hub.tsx:5768:2963","data-source-comp":"App",children:["Editing Item #",ge.findIndex(s=>s.index_===fr)+1]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:3117","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:3122","data-source-comp":"App",children:["Chore Title / Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:3207","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:ho,onChange:s=>Bo(s.target.value),className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold",placeholder:"Chore task title...",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5768:3259","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5768:3554","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:3609","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:3614","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:xr,onChange:s=>on(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:3686","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5768:3894","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5768:3942","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5768:3985","data-source-comp":"App",children:"Bi-Weekly"})]})]}),xr==="weekly"?n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:4073","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:4078","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{value:qo,onChange:s=>Ts(Number(s.target.value)),className:"w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:4151","data-source-comp":"App",children:Qt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5768:4399","data-source-comp":"App",children:["Every ",s.name]},s.name))})]}):n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:4477","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:4482","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:$o,onChange:s=>Ho(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:4559","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5768:4785","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5768:4878","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5768:4930","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5768:4984","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5768:5036","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5768:5078","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5768:5118","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5768:5200","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),xr==="weekly"&&n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:5326","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5768:5331","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:$o,onChange:s=>Ho(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5768:5408","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5768:5634","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5768:5727","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5768:5779","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5768:5833","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5768:5885","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5768:5927","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5768:5967","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5768:6049","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]}),n.jsxs("div",{className:"p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5768:6138","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:6324","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:6330","data-source-comp":"App",children:"Rotation Group Clarification:"})," ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:6381","data-source-comp":"App",children:"All Non-Casual"})," covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:6507","data-source-comp":"App",children:"No equivalent currently exists among the other groups"})," (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."]})]}),n.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5768:6728","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5768:6830","data-source-comp":"App",children:"List Order Position:"}),n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5768:6904","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Vr(fr,"up"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5768:6947","data-source-comp":"App",children:[n.jsx(Su,{className:"w-3.5 h-3.5"})," Move Up"]}),n.jsxs("button",{type:"button",onClick:()=>Vr(fr,"down"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5768:7241","data-source-comp":"App",children:[n.jsx(Nu,{className:"w-3.5 h-3.5"})," Move Down"]})]})]}),n.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5768:7553","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:7653","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900","data-source-loc":"weekly_chores_household_hub.tsx:5768:7658","data-source-comp":"App",children:"Remove This Chore"}),n.jsx("div",{className:"text-[11px] text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5768:7722","data-source-comp":"App",children:"Delete this chore from the schedule and spreadsheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{Kn(fr,ho),Nr(null)},className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5768:7828","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5771:190","data-source-comp":"App",children:"Remove Chore"})]})]})]}):n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5771:298","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5771:325","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5771:382","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search or filter chores to edit or remove...",value:Ds,onChange:s=>js(s.target.value),className:"w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5771:490","data-source-comp":"App"})]}),n.jsx("button",{type:"button",onClick:()=>{ar.length===ge.length?nn([]):nn(ge.map(s=>s.index_))},className:"text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap","data-source-loc":"weekly_chores_household_hub.tsx:5771:815","data-source-comp":"App",children:ar.length===ge.length?"Deselect All":"Select All"})]}),ar.length>0&&n.jsxs("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5777:288","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-rose-800","data-source-loc":"weekly_chores_household_hub.tsx:5777:398","data-source-comp":"App",children:[ar.length," chore(s) selected"]}),n.jsxs("button",{type:"button",onClick:Ea,className:"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5777:499","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5777:718","data-source-comp":"App",children:"Remove Selected"})]})]}),n.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto","data-source-loc":"weekly_chores_household_hub.tsx:5777:762","data-source-comp":"App",children:ge.filter(s=>Ds?(s.task||s.row[0]||"").toLowerCase().includes(Ds.toLowerCase()):!0).map((s,i)=>{var c;const m=ar.includes(s.index_),h=gr(s),u=s.task||s.row[0]||"Chore";return n.jsxs("div",{className:"p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5782:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5782:136","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:()=>{nn(d=>m?d.filter(f=>f!==s.index_):[...d,s.index_])},className:"rounded text-rose-600 focus:ring-rose-500",title:"Select for batch removal","data-source-loc":"weekly_chores_household_hub.tsx:5782:194","data-source-comp":"App"}),n.jsxs("div",{className:"min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5784:105","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-800 truncate block","data-source-loc":"weekly_chores_household_hub.tsx:5784:137","data-source-comp":"App",children:[i+1,". ",u]}),n.jsx("div",{className:"flex items-center gap-1.5 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5784:233","data-source-comp":"App",children:n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5784:283","data-source-comp":"App",children:h.frequency==="weekly"?`Once a week (${(c=Qt[h.dayOfWeek])==null?void 0:c.name})`:"Daily task"})})]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5784:481","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>zs(s),className:"px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition",title:"Edit chore details","data-source-loc":"weekly_chores_household_hub.tsx:5784:531","data-source-comp":"App",children:[n.jsx(Po,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5784:793","data-source-comp":"App",children:"Edit"})]}),n.jsx("button",{type:"button",onClick:()=>Kn(s.index_,u),className:"p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition",title:`Remove "${u}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5784:819","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})]},s.index_)})})]})}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5785:34","data-source-comp":"App",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5785:127","data-source-comp":"App",children:[ge.length," active master chores"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5785:234","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>{Br(!1),Tn(!1),nn([]),Nr(null)},className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5785:262","data-source-comp":"App",children:"Close"}),mr==="add"?n.jsx("button",{type:"button",onClick:()=>{const s=document.getElementById("new-chore-title-input"),i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who"),h=document.getElementById("new-chore-category");s&&s.value.trim()&&vo(s.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:"All Non-Casual",category:h?h.value:"Household"})},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5790:176","data-source-comp":"App",children:"Add Chore"}):fr!==null?n.jsx("button",{type:"button",onClick:Gs,className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5804:181","data-source-comp":"App",children:"Save Changes"}):ar.length>0&&n.jsxs("button",{type:"button",onClick:Ea,className:"px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5804:410","data-source-comp":"App",children:["Remove Selected (",ar.length,")"]})]})]})]})}),va&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5804:683","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5804:789","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5804:894","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5804:1007","data-source-comp":"App",children:[n.jsx(rp,{className:"w-5 h-5 text-purple-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5804:1096","data-source-comp":"App",children:"Combine Chores"})]}),n.jsx("button",{onClick:()=>po(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5804:1157","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5804:1335","data-source-comp":"App",children:[n.jsx("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5804:1374","data-source-comp":"App",children:"Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly."}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5804:1544","data-source-comp":"App",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5804:1549","data-source-comp":"App",children:"Suggested Combinations:"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5804:1674","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{ge[4]&&ge[5]&&(Mn(ge[4].index_),Rs(ge[5].index_),fo("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)"))},className:"p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5804:1729","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-purple-900 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5810:123","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3 h-3 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5810:238","data-source-comp":"App",children:"Chores #5 & #6 (Dinner)"})]}),n.jsx("div",{className:"text-[10px] text-purple-700 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5810:280","data-source-comp":"App",children:"Dinner Dishes + Put away food"})]}),n.jsxs("button",{type:"button",onClick:()=>{ge[0]&&ge[1]&&(Mn(ge[0].index_),Rs(ge[1].index_),fo("Tidy bedroom & vacuum floors, bring laundry downstairs"))},className:"p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5810:385","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5816:117","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3 h-3 text-slate-500"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5816:230","data-source-comp":"App",children:"Rows 5 & 6 (Bedroom)"})]}),n.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5816:269","data-source-comp":"App",children:"Tidy up bedroom + Vacuum floors"})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5816:387","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5816:392","data-source-comp":"App",children:"Primary Chore (Retains Position):"}),n.jsx("select",{value:$t??"",onChange:s=>{const i=Number(s.target.value);Mn(i);const c=ge.find(h=>h.index_===i),m=ge.find(h=>h.index_===yr);c&&m&&fo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5816:488","data-source-comp":"App",children:ge.map((s,i)=>n.jsxs("option",{value:s.index_,"data-source-loc":"weekly_chores_household_hub.tsx:5824:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5824:293","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5824:298","data-source-comp":"App",children:"Chore to Merge In & Remove:"}),n.jsx("select",{value:yr??"",onChange:s=>{const i=Number(s.target.value);Rs(i);const c=ge.find(h=>h.index_===$t),m=ge.find(h=>h.index_===i);c&&m&&fo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5824:388","data-source-comp":"App",children:ge.map((s,i)=>n.jsxs("option",{value:s.index_,disabled:s.index_===$t,"data-source-loc":"weekly_chores_household_hub.tsx:5832:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]," ",s.index_===$t?"(Cannot merge into itself)":""]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5832:404","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5832:409","data-source-comp":"App",children:"New Combined Chore Title:"}),n.jsx("input",{type:"text",value:Ca,onChange:s=>fo(s.target.value),placeholder:"Enter name for the combined chore...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5832:497","data-source-comp":"App"})]}),n.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5832:807","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-purple-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5832:990","data-source-comp":"App",children:"The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5832:1163","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>po(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5832:1245","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{$t!==null&&yr!==null&&$t!==yr&&Qo($t,yr,Ca)},disabled:$t===yr||!$t||!yr,className:"px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5832:1432","data-source-comp":"App",children:"Merge & Combine Chores"})]})]})}),ka&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5836:307","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5836:413","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5836:518","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5836:598","data-source-comp":"App",children:[n.jsx(ya,{className:"w-5 h-5 text-indigo-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5836:684","data-source-comp":"App",children:"Add Household Member"})]}),n.jsx("button",{onClick:()=>qr(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5836:751","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5836:931","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5836:972","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5836:977","data-source-comp":"App",children:["Full Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5836:1046","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-member-name",placeholder:"e.g. Alex, Jordan...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5836:1098","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5836:1328","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5836:1333","data-source-comp":"App",children:"Role"}),n.jsxs("select",{id:"new-member-role",defaultValue:"Minion",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5836:1400","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5836:1597","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5836:1664","data-source-comp":"App",children:"Minion (Kid)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5836:1723","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5836:1728","data-source-comp":"App",children:"Occupancy"}),n.jsxs("select",{id:"new-member-residency",defaultValue:"Full-Time",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5836:1800","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5836:2005","data-source-comp":"App",children:"Full-Time (Constant Residency)"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5836:2070","data-source-comp":"App",children:"Bi-Weekly (Half-Time Residency)"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5836:2136","data-source-comp":"App",children:"Casual (Periodic Residency)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5836:2210","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5836:2215","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("div",{className:"grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50","data-source-loc":"weekly_chores_household_hub.tsx:5836:2301","data-source-comp":"App",children:["Parents","Kids","Non-Casual","All"].map(s=>{const i=Ms.includes(s);return n.jsxs("label",{className:"flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5838:20","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:i,onChange:()=>{mo(c=>{const m=new Set(c);return m.has(s)?m.delete(s):m.add(s),["Parents","Kids","Non-Casual","All"].filter(h=>m.has(h))})},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5838:195","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${i?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5848:120","data-source-comp":"App",children:s})]},s)})})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5849:26","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5849:31","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{id:"new-member-active",defaultValue:"true",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5849:107","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5849:304","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5849:340","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5849:394","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5849:577","data-source-comp":"App",children:"Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5849:715","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>qr(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5849:797","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=document.getElementById("new-member-name"),i=document.getElementById("new-member-role"),c=document.getElementById("new-member-residency"),m=document.getElementById("new-member-active");s&&s.value.trim()&&Ml(s.value,i?i.value:"Minion",c?c.value:"Full-Time",Ms.length>0?Ms.join(", "):"All",m?m.value==="true":!0)},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5849:986","data-source-comp":"App",children:"Add to Household Roster"})]})]})}),Ks&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5863:202","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5863:308","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-amber-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5863:413","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5863:492","data-source-comp":"App",children:[n.jsx("span",{className:"text-xl","data-source-loc":"weekly_chores_household_hub.tsx:5863:533","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5863:579","data-source-comp":"App",children:"Add Household Pet Member"})]}),n.jsx("button",{onClick:()=>Ue(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5863:650","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5863:827","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5863:868","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5863:873","data-source-comp":"App",children:["Pet Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5863:941","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:Xt.name,onChange:s=>ln(i=>({...i,name:s.target.value})),placeholder:"e.g. Buster, Milo...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5863:993","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5868:205","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5868:210","data-source-comp":"App",children:"Species"}),n.jsxs("select",{value:Xt.type,onChange:s=>ln(i=>({...i,type:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5868:280","data-source-comp":"App",children:[n.jsx("option",{value:"Dog","data-source-loc":"weekly_chores_household_hub.tsx:5873:161","data-source-comp":"App",children:"Dog 🐕"}),n.jsx("option",{value:"Cat","data-source-loc":"weekly_chores_household_hub.tsx:5873:207","data-source-comp":"App",children:"Cat 🐈"}),n.jsx("option",{value:"Bird","data-source-loc":"weekly_chores_household_hub.tsx:5873:253","data-source-comp":"App",children:"Bird 🐦"}),n.jsx("option",{value:"Fish","data-source-loc":"weekly_chores_household_hub.tsx:5873:301","data-source-comp":"App",children:"Fish 🐟"}),n.jsx("option",{value:"Small Pet","data-source-loc":"weekly_chores_household_hub.tsx:5873:349","data-source-comp":"App",children:"Small Pet 🐾"}),n.jsx("option",{value:"Other","data-source-loc":"weekly_chores_household_hub.tsx:5873:407","data-source-comp":"App",children:"Other 🐾"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5873:472","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5873:477","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("input",{type:"text",value:Xt.routine,onChange:s=>ln(i=>({...i,routine:s.target.value})),placeholder:"e.g. Morning & Evening, Twice daily...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5873:555","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5878:213","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5878:218","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("textarea",{rows:2,value:Xt.care,onChange:s=>ln(i=>({...i,care:s.target.value})),placeholder:"e.g. Feed breakfast & supper, outdoor routine, fresh water bowls...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5878:302","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5883:267","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5883:272","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{value:Xt.active!==!1?"true":"false",onChange:s=>ln(i=>({...i,active:s.target.value==="true"})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5883:348","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5888:161","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5888:197","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5888:251","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-amber-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5888:430","data-source-comp":"App",children:"Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5888:558","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Ue(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5888:640","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>Ll(Xt.name,Xt.type,Xt.routine,Xt.care,Xt.active!==!1),disabled:!Xt.name.trim(),className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5888:826","data-source-comp":"App",children:"Add to Household Pets"})]})]})}),re&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5888:1220","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5888:1326","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5888:1458","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5888:1537","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5888:1580","data-source-comp":"App",children:n.jsx(Po,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5888:1717","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5888:1722","data-source-comp":"App",children:"Edit Chore Details"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5888:1781","data-source-comp":"App",children:"Update chore name, cadence, rotation group, or notes"})]})]}),n.jsx("button",{onClick:()=>pe(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5888:1891","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5888:2075","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5888:2137","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-800 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5888:2142","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5888:2224","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:re.task,onChange:s=>pe(i=>({...i,task:s.target.value})),placeholder:"Chore task description...",className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5888:2276","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5893:221","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5893:276","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5893:281","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:re.category||"Household",onChange:s=>pe(i=>({...i,category:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5893:352","data-source-comp":"App",children:Sn.map(s=>n.jsxs("option",{value:s.id,"data-source-loc":"weekly_chores_household_hub.tsx:5898:172","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5898:251","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5898:256","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:re.frequency||"Daily",onChange:s=>{const i=s.target.value;pe(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5898:328","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5907:143","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5907:179","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5907:227","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5907:286","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5907:291","data-source-comp":"App",children:"Target Day"}),n.jsx("input",{type:"text",value:re.targetDay||"Mon – Sun",onChange:s=>pe(i=>({...i,targetDay:s.target.value})),placeholder:"e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5907:364","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5912:226","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5912:231","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:re.rotationGroup||"All Non-Casual",onChange:s=>pe(i=>({...i,rotationGroup:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5912:308","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5917:145","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5917:238","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5917:290","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5917:344","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5917:396","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5917:438","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5917:478","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5917:536","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5917:618","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5917:712","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5917:717","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("textarea",{rows:2,value:re.notes||"",onChange:s=>pe(i=>({...i,notes:s.target.value})),placeholder:"Operational details, supplies, or instructions...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5917:807","data-source-comp":"App"})]}),n.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5922:242","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5922:324","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5922:329","data-source-comp":"App",children:"Delete this chore"}),n.jsx("div",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5922:401","data-source-comp":"App",children:"Remove from Printable Weekly Schedule"})]}),n.jsxs("button",{type:"button",onClick:()=>{Pn(re.index_,re.task)},className:"px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5922:494","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5924:210","data-source-comp":"App",children:"Delete Chore"})]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5924:256","data-source-comp":"App",children:[n.jsx("span",{className:"text-[11px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5924:349","data-source-comp":"App",children:"Real-time schedule update"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5924:438","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>pe(null),className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5924:466","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{fn(re.index_,{task:re.task,oldTask:re.originalTask||re.task,category:re.category,frequency:re.frequency,targetDay:re.targetDay,rotationGroup:re.rotationGroup,notes:re.notes,dayOfWeek:re.dayOfWeek})},disabled:!((ne=re.task)!=null&&ne.trim()),className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5924:652","data-source-comp":"App",children:"Save Changes"})]})]})]})}),tt&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5935:298","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5935:404","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-rose-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5935:509","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5935:587","data-source-comp":"App",children:[n.jsx(oo,{className:"w-5 h-5 text-rose-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5935:672","data-source-comp":"App",children:"Delete Chore"})]}),n.jsx("button",{onClick:()=>lt(null),className:"p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5935:731","data-source-comp":"App",children:n.jsx(Yt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 text-xs text-slate-700 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5935:911","data-source-comp":"App",children:[n.jsxs("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5935:965","data-source-comp":"App",children:["Are you sure you want to remove ",n.jsxs("strong",{className:"text-slate-900 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5935:1004","data-source-comp":"App",children:['"',tt.task,'"']})," from the Printable Weekly Schedule?"]}),n.jsx("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5935:1138","data-source-comp":"App",children:"This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately."})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5935:1375","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>lt(null),className:"px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5935:1465","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{Pn(tt.index_,tt.task)},className:"px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5935:1641","data-source-comp":"App",children:"Delete Chore"})]})]})})]})}var hp=class extends ao.Component{constructor(b){super(b),this.state={hasError:!1}}static getDerivedStateFromError(b){return{hasError:!0}}componentDidCatch(b,_){window.parent.postMessage({type:"ERROR",payload:{error:b?b.toString():"Unknown rendering error"}},"*")}render(){return this.state.hasError?n.jsx("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5961:37","data-source-comp":"ErrorBoundary",children:"Something went wrong."}):this.props.children}};function pp(){const[b,_]=F.useState(()=>{try{const M=localStorage.getItem(Ss);if(M){const H=JSON.parse(M);if(Array.isArray(H)&&H.length>0)return H}}catch(M){console.warn("Failed to load sheetData from localStorage:",M)}return jl}),[v,V]=F.useState(!0);F.useEffect(()=>{try{localStorage.setItem(Ss,JSON.stringify(b))}catch(M){console.warn("Failed to persist sheetData to localStorage:",M)}},[b]),F.useEffect(()=>{try{const M=localStorage.getItem(Ss),H=M?JSON.parse(M):b;Array.isArray(H)&&H.length>0&&fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:H})}).catch(()=>{})}catch{}},[]),F.useEffect(()=>{let M=null;const H=we=>{const{type:We,payload:xe}=we.data||{};We==="SYNC_DATA"&&(M&&(clearInterval(M),M=null),Array.isArray(xe)&&xe.length>0&&_(xe),V(!0))};window.addEventListener("message",H);const O=()=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"CHILD_READY",payload:{version:3}},"*")};O();let ee=0;return M=setInterval(()=>{if(ee++,ee>=50){clearInterval(M),M=null;return}O()},100),()=>{M&&clearInterval(M),window.removeEventListener("message",H)}},[]),F.useEffect(()=>{if(!v)return;const M=performance.now();let H=null;const O=requestAnimationFrame(()=>{H=requestAnimationFrame(()=>{const ee=performance.now()-M;window.parent&&window.parent!==window&&window.parent.postMessage({type:"RENDER_COMPLETE",payload:{status:"success",renderDurationMs:ee}},"*")})});return()=>{cancelAnimationFrame(O),H&&cancelAnimationFrame(H)}},[b,v]);const K=(M,H,O)=>{_(ee=>Array.isArray(ee)?ee.map((we,We)=>{if((we.index_!==void 0?we.index_:We)!==M)return we;const te=Array.isArray(we.data)?[...we.data]:[],Pe=te.findIndex(Ee=>Ee.index_===H);if(Pe>=0){const Ee=Array.isArray(te[Pe].row)?[...te[Pe].row]:[],re=Math.max(Ee.length,Array.isArray(O)?O.length:0),pe=new Array(re).fill(null);for(let tt=0;tt<re;tt++)pe[tt]=O&&O[tt]!==void 0?O[tt]:Ee[tt]!==void 0?Ee[tt]:null;te[Pe]={...te[Pe],row:pe}}else{const Ee=(O||[]).map(re=>re===void 0?null:re);te.push({index_:H,row:Ee}),te.sort((re,pe)=>re.index_-pe.index_)}return{...we,data:te}}):ee),window.parent&&window.parent!==window&&window.parent.postMessage({type:"PATCH",payload:{rangeIndex_:M,rowIndex_:H,row:O}},"*")},$=(M,H)=>{_(O=>Array.isArray(O)?O.map((ee,we)=>{if((ee.index_!==void 0?ee.index_:we)!==M)return ee;const xe=(ee.data||[]).filter(te=>te.index_!==H);return{...ee,data:xe}}):O),window.parent&&window.parent!==window&&window.parent.postMessage({type:"DELETE",payload:{rangeIndex_:M,rowIndex_:H}},"*")},Q=(M,H,O)=>{_(ee=>Array.isArray(ee)?ee.map((we,We)=>{if((we.index_!==void 0?we.index_:We)!==M)return we;const te=Array.isArray(we.data)?[...we.data]:[],Pe=(O||[]).map(Ee=>Ee===void 0?null:Ee);if(H!=null){const Ee=te.map(re=>re.index_>=H?{...re,index_:re.index_+1}:re);return Ee.push({index_:H,row:Pe}),Ee.sort((re,pe)=>re.index_-pe.index_),{...we,data:Ee}}else{const Ee=te.reduce((re,pe)=>Math.max(re,pe.index_||0),0);return te.push({index_:Ee+1,row:Pe}),{...we,data:te}}}):ee),window.parent&&window.parent!==window&&window.parent.postMessage({type:"INSERT",payload:{rangeIndex_:M,rowIndex_:H,row:O}},"*")},de=(M,H,O,ee)=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MOVE",payload:{fromRangeIndex_:M,fromRowIndex_:H,toRangeIndex_:O,toRowIndex_:ee}},"*")},ne=M=>{window.parent&&window.parent!==window?window.parent.postMessage({type:"FOLLOW_LINK",payload:{url:M}},"*"):M&&window.open(M,"_blank","noopener,noreferrer")};return v?n.jsx("div",{id:"app-container",className:"h-full w-full","data-source-loc":"weekly_chores_household_hub.tsx:6196:5","data-source-comp":"AppWrapper",children:n.jsx(hp,{children:n.jsx(up,{data:b,updateItem:K,deleteItem:$,insertItem:Q,moveItem:de,followLink:ne})})}):n.jsx("div",{className:"loading","data-source-loc":"weekly_chores_household_hub.tsx:6192:12","data-source-comp":"AppWrapper",children:"Waiting for data..."})}const mp=`// @ts-nocheck\r
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';\r
import {\r
  ArrowDown,\r
  ArrowUp,\r
  Award,\r
  Calendar,\r
  CalendarDays,\r
  Check,\r
  ChevronDown,\r
  ChevronLeft,\r
  ChevronRight,\r
  Circle,\r
  CircleCheck,\r
  Clock,\r
  Crown,\r
  Filter as Funnel,\r
  Gift,\r
  GitMerge,\r
  Info,\r
  Layers,\r
  LayoutGrid,\r
  ListTodo,\r
  Pen,\r
  Plus,\r
  Search,\r
  Settings2,\r
  Sparkles,\r
  Square,\r
  SquareCheckBig,\r
  Trash2,\r
  Trophy,\r
  Users,\r
  X\r
} from 'lucide-react';\r
\r
const STORAGE_KEY = 'weekly_chores_canvas_sheet_data_v5';\r
\r
export const INITIAL_SHEET_DATA = [\r
  {\r
    "index_": 0,\r
    "name": "Printable Weekly Schedule",\r
    "data": [\r
      {\r
        "index_": 0,\r
        "row": [\r
          "Chore Schedule",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 1,\r
        "row": [\r
          "FOR THE WEEK OF:",\r
          "MON",\r
          null,\r
          "TUE",\r
          null,\r
          "WED",\r
          null,\r
          "THU",\r
          null,\r
          "FRI",\r
          null,\r
          "SAT",\r
          null,\r
          "SUN",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 2,\r
        "row": [\r
          "2026-10-19",\r
          "19",\r
          null,\r
          "20",\r
          null,\r
          "21",\r
          null,\r
          "22",\r
          null,\r
          "23",\r
          null,\r
          "24",\r
          null,\r
          "25",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 3,\r
        "row": [\r
          "TASK",\r
          "WHO\\nDay 1",\r
          "DONE \\nDay 1",\r
          "WHO \\nDAY 2",\r
          "DONE \\nDAY 2",\r
          "WHO \\nDAY 3",\r
          "DONE  \\nDAY 3",\r
          "WHO \\nDAY 4",\r
          "DONE\\nDAY 4",\r
          "WHO\\nDAY 5",\r
          "DONE\\nDAY 5",\r
          "WHO\\nDAY 6",\r
          "DONE\\nDAY 6",\r
          "WHO\\nDAY 7",\r
          "DONE \\nDAY 7"\r
        ]\r
      },\r
      {\r
        "index_": 4,\r
        "row": [\r
          "Daily Tasks",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 5,\r
        "row": [\r
          "Empty the Litter Box \\n(Morning & Evening)",\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false,\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 6,\r
        "row": [\r
          "Feed the Herd \\n(Breakfast & Supper)",\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false,\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 7,\r
        "row": [\r
          "Empty Dishwasher (Before Supper) \\n- Put away clean dishes; Load any dirty ones",\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false,\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 8,\r
        "row": [\r
          "Make Supper: Plan Ahead!",\r
          "Mason",\r
          false,\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false,\r
          "Thom",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 9,\r
        "row": [\r
          "Dinner Dishes & Kitchen Clean-up \\n- Put away food; Load dishwasher; Wipe surfaces",\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false,\r
          "Sydney",\r
          false,\r
          "Cadence",\r
          false,\r
          "Mason",\r
          false,\r
          "Thom",\r
          false,\r
          "Meghan",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 10,\r
        "row": [\r
          "Weekly Tasks",\r
          "Description",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Initials / Assigned",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 11,\r
        "row": [\r
          "Personal Laundry",\r
          "Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",\r
          false,\r
          null,\r
          false,\r
          null,\r
          false,\r
          null,\r
          null,\r
          "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",\r
          null,\r
          null,\r
          false,\r
          null,\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 12,\r
        "row": [\r
          "Tidy Bedrooms / Personal Spaces",\r
          "Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",\r
          false,\r
          null,\r
          false,\r
          null,\r
          false,\r
          null,\r
          null,\r
          "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",\r
          null,\r
          null,\r
          false,\r
          null,\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 13,\r
        "row": [\r
          "Clean Up Basement",\r
          "Pick Up Mess; Dust Surfaces; Vacuum Floors & Litter Box Area",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Who: _____________________",\r
          null,\r
          null,\r
          null,\r
          "Done: ______",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 14,\r
        "row": [\r
          "Herd Feeding Station Deep Clean",\r
          "Wash & Sanitize Bowls; Vacuum Feeding Mat",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Who: _____________________",\r
          null,\r
          null,\r
          null,\r
          "Done: ______",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 15,\r
        "row": [\r
          "Curbside Recycling",\r
          "Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Who: _____________________",\r
          null,\r
          null,\r
          null,\r
          "Done: ______",\r
          false\r
        ]\r
      },\r
      {\r
        "index_": 18,\r
        "row": [\r
          "Weekly Sign-Off",\r
          "Parent Initials:",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "_________",\r
          false\r
        ]\r
      }\r
    ]\r
  },\r
  {\r
    "index_": 1,\r
    "name": "Household Hub (Background Data)",\r
    "data": [\r
      {\r
        "index_": 0,\r
        "row": [\r
          "HOUSEHOLD HUB & MASTER DIRECTORY",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 1,\r
        "row": [\r
          "Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 3,\r
        "row": [\r
          "HOUSEHOLD MEMBERS",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "MASTER CHORE REGISTRY & ALLOCATION RULES",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 4,\r
        "row": [\r
          "Name",\r
          "Role",\r
          "Occupancy",\r
          "Special Rotation Groups",\r
          "Active Status",\r
          null,\r
          "Chore",\r
          "Member / Group",\r
          "Frequency",\r
          "Suggested Days",\r
          "Details / Notes",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 5,\r
        "row": [\r
          "Thom",\r
          "Supreme Overlord",\r
          "Full-Time",\r
          "Parents, Non-Casual, All",\r
          true,\r
          null,\r
          "Empty the Litter Box (Morning & Evening)",\r
          "Non-Casual",\r
          "Daily",\r
          "N/A",\r
          "Scoop waste, refresh litter, dispose of waste.",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 6,\r
        "row": [\r
          "Meghan",\r
          "Supreme Overlord",\r
          "Full-Time",\r
          "Parents, Non-Casual, All",\r
          true,\r
          null,\r
          "Feed the Herd (Breakfast & Supper)",\r
          "Non-Casual",\r
          "Daily",\r
          "N/A",\r
          "Feed all animals the appropriate food and portions.",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 7,\r
        "row": [\r
          "Sydney",\r
          "Minion",\r
          "Full-Time",\r
          "Kids, Non-Casual, All",\r
          true,\r
          null,\r
          "Empty Dishwasher",\r
          "Non-Casual",\r
          "Daily",\r
          "Mon – Sun",\r
          "Put away clean dishes, Load any dirty dishes",\r
          "Kitchen"\r
        ]\r
      },\r
      {\r
        "index_": 8,\r
        "row": [\r
          "Cadence",\r
          "Minion",\r
          "Bi-Weekly",\r
          "Kids, Non-Casual, All",\r
          true,\r
          null,\r
          "Make Supper: Plan Ahead!",\r
          "Non-Casual",\r
          "Daily",\r
          "Mon – Sun",\r
          "Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 9,\r
        "row": [\r
          "Mason",\r
          "Minion",\r
          "Bi-Weekly",\r
          "Kids, Non-Casual, All",\r
          true,\r
          null,\r
          "Dinner Dishes & Kitchen Cleanup",\r
          "Non-Casual",\r
          "Daily",\r
          "N/A",\r
          "Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 10,\r
        "row": [\r
          "Koda",\r
          "Minion",\r
          "Casual",\r
          "All",\r
          true,\r
          null,\r
          "Tidy Bedrooms / Personal Spaces",\r
          "Kids",\r
          "Once a Week",\r
          "Saturday",\r
          "Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 11,\r
        "row": [\r
          "Keyanna",\r
          "Minion",\r
          "Casual",\r
          "All",\r
          true,\r
          null,\r
          "Laundry",\r
          "All",\r
          "Once a Week",\r
          "Saturday",\r
          "Wash, dry, fold & put away (each kid responsible for their own items)",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 12,\r
        "row": [\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Clean Basement (Pick Up, Dust, Vacuum)",\r
          "Non-Casual",\r
          "Once a Week",\r
          "Sunday",\r
          "Pick up mess & laundry, dust surfaces, vacuum floors",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 13,\r
        "row": [\r
          "OCCUPANCY CATEGORIES",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Herd Feeding Station Deep Clean",\r
          "All",\r
          "Once a Week",\r
          "Sunday",\r
          "Wash & sanitize pet bowls, vacuum feeding mat",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 14,\r
        "row": [\r
          "Type",\r
          "Description",\r
          "Rules",\r
          null,\r
          "Active Status",\r
          null,\r
          "Curbside Recycling",\r
          "Non-Casual",\r
          "Bi-Weekly",\r
          "Thursday Evening",\r
          "Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)",\r
          "Household"\r
        ]\r
      },\r
      {\r
        "index_": 15,\r
        "row": [\r
          "Full-Time",\r
          "Constant Residency",\r
          "Included in all weekly/monthly schedulings",\r
          null,\r
          true,\r
          null,\r
          "Curbside Waste",\r
          "Non-Casual",\r
          "Bi-Weekly",\r
          "Thursday Evening",\r
          "Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)",\r
          "Household"\r
        ]\r
      },\r
      {\r
        "index_": 16,\r
        "row": [\r
          "Bi-Weekly",\r
          "Half-Time Residency",\r
          "Included in weekly/monthly schedulings when in residence, Use \\"Custody Schedule Rotation\\" data",\r
          null,\r
          true,\r
          null,\r
          "Walk Dogs: Ellie & Lewis",\r
          "Non-Casual",\r
          "Daily",\r
          "Mon – Sun",\r
          "Walk Ellie & Lewis",\r
          "Pet Care"\r
        ]\r
      },\r
      {\r
        "index_": 17,\r
        "row": [\r
          "Casual",\r
          "Periodic Residency",\r
          "Manually added to any schedules",\r
          null,\r
          true,\r
          null,\r
          "SCHEDULE CONFIGURATIONS",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 18,\r
        "row": [\r
          "SPECIAL ROTATION GROUPS",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          "Active Week Start Date",\r
          "2026-10-19",\r
          "Printable Weekly Schedule",\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 19,\r
        "row": [\r
          "Name",\r
          "Members",\r
          null,\r
          null,\r
          "Active Status",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 20,\r
        "row": [\r
          "All",\r
          "Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",\r
          null,\r
          null,\r
          true,\r
          null,\r
          "Custody Schedule Rotation",\r
          "Kids Week",\r
          "Bi-Weekly Schedule",\r
          null,\r
          "Mason, Cadence",\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 21,\r
        "row": [\r
          "Kids",\r
          "Sydney, Cadence, Mason",\r
          null,\r
          null,\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 22,\r
        "row": [\r
          "Parents",\r
          "Thom, Meghan",\r
          null,\r
          null,\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 23,\r
        "row": [\r
          "Non-Casual",\r
          "Thom, Meghan, Sydney, Cadence, Mason",\r
          null,\r
          null,\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 26,\r
        "row": [\r
          "Pet Name",\r
          "Dog / Cat",\r
          "Routine",\r
          "Care Responsibilities",\r
          "Active Status",\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 27,\r
        "row": [\r
          "Ellie",\r
          "Dog",\r
          "Morning & Evening",\r
          "Feed morning/evening, let outside, walk frequently, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 28,\r
        "row": [\r
          "Lewis",\r
          "Dog",\r
          "Morning & Evening",\r
          "Feed morning/evening, let outside, walk frequently, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 29,\r
        "row": [\r
          "Casey",\r
          "Cat",\r
          "Morning & Evening",\r
          "Feed morning/evening, scoop litter box, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 30,\r
        "row": [\r
          "Gigi",\r
          "Cat",\r
          "Morning & Evening",\r
          "Feed morning/evening, scoop litter box, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 31,\r
        "row": [\r
          "Sloane",\r
          "Cat",\r
          "Morning & Evening",\r
          "Feed morning/evening, scoop litter box, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 32,\r
        "row": [\r
          "Scoob",\r
          "Cat",\r
          "Morning & Evening",\r
          "Feed morning/evening, scoop litter box, fresh water",\r
          true,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null,\r
          null\r
        ]\r
      },\r
      {\r
        "index_": 34,\r
        "row": [\r
          null,\r
          null,\r
          null,\r
          null,\r
          false,\r
          null,\r
          "Empty Dishwasher",\r
          "Non-Casual",\r
          "Daily",\r
          "Mon – Sun",\r
          null,\r
          null\r
        ]\r
      }\r
    ]\r
  }\r
];\r
\r
var DAY_STYLES = [{\r
  name: "Monday",\r
  short: "Mon",\r
  color: "#8E283A",\r
  lightBg: "#FDF2F4",\r
  border: "#F8B4BD"\r
}, {\r
  name: "Tuesday",\r
  short: "Tue",\r
  color: "#1A638B",\r
  lightBg: "#F0F7FB",\r
  border: "#A6D2ED"\r
}, {\r
  name: "Wednesday",\r
  short: "Wed",\r
  color: "#C45508",\r
  lightBg: "#FEF6F0",\r
  border: "#FBD3B6"\r
}, {\r
  name: "Thursday",\r
  short: "Thu",\r
  color: "#3D7841",\r
  lightBg: "#F2F8F3",\r
  border: "#B6DFBA"\r
}, {\r
  name: "Friday",\r
  short: "Fri",\r
  color: "#584B79",\r
  lightBg: "#F5F3F9",\r
  border: "#CDC3E6"\r
}, {\r
  name: "Saturday",\r
  short: "Sat",\r
  color: "#B81B6C",\r
  lightBg: "#FDF2F8",\r
  border: "#F8B4DB"\r
}, {\r
  name: "Sunday",\r
  short: "Sun",\r
  color: "#0C7B83",\r
  lightBg: "#EFF9FA",\r
  border: "#9EE1E6"\r
}];\r
var MEMBER_COLOR_PALETTES = [{\r
  color: "#8B5CF6",\r
  bg: "#EDE9FE",\r
  text: "#6D28D9"\r
},\r
// Violet\r
{\r
  color: "#2563EB",\r
  bg: "#DBEAFE",\r
  text: "#1D4ED8"\r
},\r
// Blue\r
{\r
  color: "#0D9488",\r
  bg: "#CCFBF1",\r
  text: "#0F766E"\r
},\r
// Teal\r
{\r
  color: "#EC4899",\r
  bg: "#FCE7F3",\r
  text: "#BE185D"\r
},\r
// Pink\r
{\r
  color: "#EA580C",\r
  bg: "#FFEDD5",\r
  text: "#C2410C"\r
},\r
// Orange\r
{\r
  color: "#0284C7",\r
  bg: "#E0F2FE",\r
  text: "#0369A1"\r
},\r
// Sky\r
{\r
  color: "#D97706",\r
  bg: "#FEF3C7",\r
  text: "#B45309"\r
},\r
// Amber\r
{\r
  color: "#10B981",\r
  bg: "#D1FAE5",\r
  text: "#047857"\r
},\r
// Emerald\r
{\r
  color: "#6366F1",\r
  bg: "#EEF2FF",\r
  text: "#4338CA"\r
}\r
  // Indigo\r
];\r
var PRESET_MEMBER_COLORS = {\r
  "meghan": {\r
    color: "#8B5CF6",\r
    bg: "#EDE9FE",\r
    text: "#6D28D9"\r
  },\r
  "thom": {\r
    color: "#2563EB",\r
    bg: "#DBEAFE",\r
    text: "#1D4ED8"\r
  },\r
  "sydney": {\r
    color: "#0D9488",\r
    bg: "#CCFBF1",\r
    text: "#0F766E"\r
  },\r
  "cadence": {\r
    color: "#EC4899",\r
    bg: "#FCE7F3",\r
    text: "#BE185D"\r
  },\r
  "mason": {\r
    color: "#EA580C",\r
    bg: "#FFEDD5",\r
    text: "#C2410C"\r
  },\r
  "koda": {\r
    color: "#0284C7",\r
    bg: "#E0F2FE",\r
    text: "#0369A1"\r
  },\r
  "keyanna": {\r
    color: "#D97706",\r
    bg: "#FEF3C7",\r
    text: "#B45309"\r
  }\r
};\r
var PRESET_PET_COLORS = {\r
  "ellie": {\r
    color: "#E11D48",\r
    bg: "#FFE4E6",\r
    text: "#BE123C",\r
    border: "#FECDD3"\r
  },\r
  "lewis": {\r
    color: "#059669",\r
    bg: "#D1FAE5",\r
    text: "#047857",\r
    border: "#A7F3D0"\r
  },\r
  "casey": {\r
    color: "#7C3AED",\r
    bg: "#EDE9FE",\r
    text: "#6D28D9",\r
    border: "#DDD6FE"\r
  },\r
  "gigi": {\r
    color: "#DB2777",\r
    bg: "#FCE7F3",\r
    text: "#BE185D",\r
    border: "#FBCFE8"\r
  },\r
  "sloane": {\r
    color: "#0284C7",\r
    bg: "#E0F2FE",\r
    text: "#0369A1",\r
    border: "#BAE6FD"\r
  },\r
  "sloan": {\r
    color: "#0284C7",\r
    bg: "#E0F2FE",\r
    text: "#0369A1",\r
    border: "#BAE6FD"\r
  },\r
  "scoob": {\r
    color: "#EA580C",\r
    bg: "#FFEDD5",\r
    text: "#C2410C",\r
    border: "#FED7AA"\r
  }\r
};\r
function normalizeTaskName(title) {\r
  if (!title) return "";\r
  return String(title).toLowerCase().replace(/[•\\-\\–\\—\\(\\)\\:\\,\\/]/g, " ").replace(/\\s+/g, " ").trim();\r
}\r
function getChoreCanonicalKey(title) {\r
  if (!title) return "";\r
  const lower = String(title).toLowerCase();\r
  if (lower.includes("litter")) return "litter_box";\r
  if (lower.includes("herd") && (lower.includes("breakfast") || lower.includes("supper") || lower.includes("feed the herd"))) return "feed_herd";\r
  if (lower.includes("dishwasher") && lower.includes("empty")) return "empty_dishwasher";\r
  if (lower.includes("supper") || lower.includes("dinner") && lower.includes("plan")) return "make_supper";\r
  if (lower.includes("dishes") || lower.includes("kitchen cleanup")) return "dinner_dishes";\r
  if (lower.includes("bedroom") || lower.includes("personal spaces")) return "tidy_bedrooms";\r
  if (lower.includes("laundry")) return "laundry";\r
  if (lower.includes("basement")) return "clean_basement";\r
  if (lower.includes("feeding station") || lower.includes("deep clean") && lower.includes("feeding")) return "feeding_station_deep_clean";\r
  if (lower.includes("recycling")) return "curbside_recycling";\r
  if (lower.includes("waste")) return "curbside_waste";\r
  if (lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection")) return "weekly_sign_off";\r
  if (lower.includes("walk") && lower.includes("dog")) return "walk_dogs";\r
  return normalizeTaskName(title);\r
}\r
function isBedroomChore(title) {\r
  const lower = String(title || "").toLowerCase();\r
  return lower.includes("tidy bedroom") || lower.includes("tidy up bedroom") || lower.includes("tidy bedrooms") || lower.includes("personal spaces");\r
}\r
function isLaundryChore(title) {\r
  const lower = String(title || "").toLowerCase();\r
  return lower.includes("laundry");\r
}\r
function isKidsChecklistChore(title) {\r
  return isBedroomChore(title) || isLaundryChore(title);\r
}\r
function isCleanBasementChore(title) {\r
  const lower = String(title || "").toLowerCase();\r
  return lower.includes("clean basement") || lower.includes("basement");\r
}\r
function isHerdFeedingStationChore(title) {\r
  const lower = String(title || "").toLowerCase();\r
  return lower.includes("feeding station") || lower.includes("herd feeding") || lower.includes("deep clean") && lower.includes("feeding");\r
}\r
function isSignOffChore(title) {\r
  const lower = String(title || "").toLowerCase();\r
  return lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection");\r
}\r
function isStreamlinedWeeklyTask(title, choreFreq) {\r
  if (isKidsChecklistChore(title) || isSignOffChore(title)) return false;\r
  if (isCleanBasementChore(title) || isHerdFeedingStationChore(title)) return true;\r
  const lower = String(title || "").toLowerCase();\r
  if (lower.includes("curbside") || lower.includes("recycling") || lower.includes("waste")) return true;\r
  if (choreFreq && (choreFreq.frequency === "weekly" || choreFreq.frequency === "biweekly")) {\r
    return true;\r
  }\r
  return false;\r
}\r
function getSpecificKidForChore(title) {\r
  const t = String(title || "");\r
  const match = t.match(/tidy bedroom:\\s*([A-Za-z]+)/i);\r
  return match ? match[1].trim() : null;\r
}\r
function getBiWeeklyStatus(year, month, day) {\r
  const target = new Date(year, month, day, 12, 0, 0);\r
  const anchor = new Date(2026, 9, 18, 12, 0, 0);\r
  const diffDays = Math.round((target.getTime() - anchor.getTime()) / (1e3 * 60 * 60 * 24));\r
  const cycleIndex = (diffDays % 14 + 14) % 14;\r
  if (cycleIndex === 0) {\r
    return {\r
      isPresent: true,\r
      label: "Arrives 5 PM",\r
      fullLabel: "Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",\r
      cycleIndex,\r
      isArrivalDay: true,\r
      isDepartureDay: false,\r
      isFullStay: false\r
    };\r
  } else if (cycleIndex >= 1 && cycleIndex <= 6) {\r
    return {\r
      isPresent: true,\r
      label: "Here (Kids Week)",\r
      fullLabel: "Cadence & Mason are here this week (Kids Week)",\r
      cycleIndex,\r
      isArrivalDay: false,\r
      isDepartureDay: false,\r
      isFullStay: true\r
    };\r
  } else if (cycleIndex === 7) {\r
    return {\r
      isPresent: true,\r
      label: "Leaves 5 PM",\r
      fullLabel: "Cadence & Mason depart today at 5:00 PM (End of Kids Week)",\r
      cycleIndex,\r
      isArrivalDay: false,\r
      isDepartureDay: true,\r
      isFullStay: false\r
    };\r
  } else {\r
    return {\r
      isPresent: false,\r
      label: "Away (Off Week)",\r
      fullLabel: "Cadence & Mason are away this week (Off week)",\r
      cycleIndex,\r
      isArrivalDay: false,\r
      isDepartureDay: false,\r
      isFullStay: false\r
    };\r
  }\r
}\r
function getWeekBiWeeklySummary(week, biWeeklyNames = "Cadence & Mason") {\r
  if (!week || week.length < 7) return null;\r
  const sunday = week[6];\r
  const monday = week[0];\r
  const monStatus = getBiWeeklyStatus(monday.year, monday.month, monday.day);\r
  const sunStatus = getBiWeeklyStatus(sunday.year, sunday.month, sunday.day);\r
  if (sunStatus.isArrivalDay) {\r
    return {\r
      text: \`\${biWeeklyNames} arrive Sunday at 5:00 PM\`,\r
      badgeBg: "bg-pink-50 text-pink-700 border-pink-200"\r
    };\r
  } else if (monStatus.isPresent && monStatus.isFullStay) {\r
    return {\r
      text: \`\${biWeeklyNames} here this week (leave Sun 5 PM)\`,\r
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"\r
    };\r
  } else {\r
    return {\r
      text: \`\${biWeeklyNames} away this week (next back on Sunday)\`,\r
      badgeBg: "bg-slate-100 text-slate-500 border-slate-200"\r
    };\r
  }\r
}\r
function isBiWeeklyInResidenceForWeek(weekDays) {\r
  if (!weekDays || weekDays.length < 6) return false;\r
  const sat = weekDays[5] || weekDays[weekDays.length - 1];\r
  const st = getBiWeeklyStatus(sat.year, sat.month, sat.day);\r
  return st.isFullStay || st.isDepartureDay;\r
}\r
function getSundaySupperAssignee(year, month, day, parents = ["Thom", "Meghan"]) {\r
  const d = new Date(year, month, day, 12, 0, 0);\r
  const anchorSunday = new Date(2026, 9, 11, 12, 0, 0);\r
  const diffWeeks = Math.round((d.getTime() - anchorSunday.getTime()) / (1e3 * 60 * 60 * 24 * 7));\r
  const pList = parents && parents.length > 0 ? parents : ["Thom", "Meghan"];\r
  const normalizedIndex = (diffWeeks % pList.length + pList.length) % pList.length;\r
  return pList[normalizedIndex];\r
}\r
var HOUSE_PETS = [{\r
  name: "Ellie",\r
  kind: "Dog",\r
  icon: "\\u{1F415}"\r
}, {\r
  name: "Lewis",\r
  kind: "Dog",\r
  icon: "\\u{1F415}"\r
}, {\r
  name: "Casey",\r
  kind: "Cat",\r
  icon: "\\u{1F408}"\r
}, {\r
  name: "Gigi",\r
  kind: "Cat",\r
  icon: "\\u{1F408}"\r
}, {\r
  name: "Sloane",\r
  kind: "Cat",\r
  icon: "\\u{1F408}"\r
}, {\r
  name: "Scoob",\r
  kind: "Cat",\r
  icon: "\\u{1F408}"\r
}];\r
var CHORE_CATEGORIES = [{\r
  id: "Pet Care",\r
  name: "Pet Care",\r
  icon: "\\u{1F43E}",\r
  bg: "bg-amber-50",\r
  text: "text-amber-800",\r
  border: "border-amber-200",\r
  dot: "#D97706"\r
}, {\r
  id: "Kitchen",\r
  name: "Kitchen",\r
  icon: "\\u{1F37D}\\uFE0F",\r
  bg: "bg-emerald-50",\r
  text: "text-emerald-800",\r
  border: "border-emerald-200",\r
  dot: "#059669"\r
}, {\r
  id: "Bedrooms",\r
  name: "Bedrooms",\r
  icon: "\\u{1F6CF}\\uFE0F",\r
  bg: "bg-pink-50",\r
  text: "text-pink-800",\r
  border: "border-pink-200",\r
  dot: "#DB2777"\r
}, {\r
  id: "Household",\r
  name: "Household",\r
  icon: "\\u{1F3E0}",\r
  bg: "bg-blue-50",\r
  text: "text-blue-800",\r
  border: "border-blue-200",\r
  dot: "#2563EB"\r
}];\r
var DEFAULT_MASTER_CHORES = [{\r
  title: "Empty the Litter Box (Morning & Evening)",\r
  category: "Pet Care",\r
  freq: {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  },\r
  targetDay: "Mon \\u2013 Sun",\r
  rotationGroup: "Kids Rotation",\r
  notes: "Morning & evening scoop, waste disposal"\r
}, {\r
  title: "Feed the Herd (Breakfast & Supper)",\r
  category: "Pet Care",\r
  freq: {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  },\r
  targetDay: "Mon \\u2013 Sun",\r
  rotationGroup: "Kids Rotation",\r
  notes: "Morning & evening feeding, refresh water bowls"\r
}, {\r
  title: "Make Supper: Plan Ahead!",\r
  category: "Kitchen",\r
  freq: {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  },\r
  targetDay: "Mon \\u2013 Sun",\r
  rotationGroup: "Parents & Kids",\r
  notes: "Meal prep, cooking, family dinner"\r
}, {\r
  title: "Dinner Dishes & Kitchen Cleanup",\r
  category: "Kitchen",\r
  freq: {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  },\r
  targetDay: "Mon \\u2013 Sun",\r
  rotationGroup: "Kids Rotation",\r
  notes: "Clear table, dishwasher, wipe counters & sink"\r
}, {\r
  title: "Tidy Bedrooms & Checklist",\r
  category: "Bedrooms",\r
  who: "Each Child",\r
  freq: {\r
    frequency: "weekly",\r
    dayOfWeek: 5\r
  },\r
  targetDay: "Saturday",\r
  rotationGroup: "All Occupants",\r
  notes: "Pick up mess & laundry, dust surfaces, vacuum floors"\r
}, {\r
  title: "Laundry (Wash, Fold, Put Away)",\r
  category: "Household",\r
  who: "Sydney",\r
  freq: {\r
    frequency: "weekly",\r
    dayOfWeek: 5\r
  },\r
  targetDay: "Saturday",\r
  rotationGroup: "Sydney",\r
  notes: "Linens, clothes, fold and put in drawers"\r
}, {\r
  title: "Clean Basement & Rec Room",\r
  category: "Household",\r
  freq: {\r
    frequency: "weekly",\r
    dayOfWeek: 5\r
  },\r
  targetDay: "Saturday",\r
  rotationGroup: "All Kids",\r
  notes: "Tidy items, organize games, vacuum carpet"\r
}, {\r
  title: "Weekly Sign-Off & Inspection",\r
  category: "Administration",\r
  who: "Parents",\r
  freq: {\r
    frequency: "weekly",\r
    dayOfWeek: 6\r
  },\r
  targetDay: "Sunday",\r
  rotationGroup: "Parents",\r
  notes: "Check off bedroom tidiness and completed chores"\r
}, {\r
  title: "Herd Feeding Station Deep Clean",\r
  category: "Pet Care",\r
  freq: {\r
    frequency: "weekly",\r
    dayOfWeek: 6\r
  },\r
  targetDay: "Sunday",\r
  rotationGroup: "Full-Time Roster",\r
  notes: "Wash & sanitize pet bowls, wipe feeding mat"\r
}, {\r
  title: "Curbside Recycling",\r
  category: "Household",\r
  freq: {\r
    frequency: "biweekly",\r
    dayOfWeek: 3\r
  },\r
  targetDay: "Thursday Evening",\r
  rotationGroup: "All Non-Casual",\r
  notes: "Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"\r
}, {\r
  title: "Curbside Waste",\r
  category: "Household",\r
  freq: {\r
    frequency: "biweekly",\r
    dayOfWeek: 3\r
  },\r
  targetDay: "Thursday Evening",\r
  rotationGroup: "All Non-Casual",\r
  notes: "Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"\r
}, {\r
  title: "Walk Dogs: Ellie & Lewis (Morning & Evening walk)",\r
  category: "Pet Care",\r
  freq: {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  },\r
  targetDay: "Mon \\u2013 Sun",\r
  rotationGroup: "Kids Rotation",\r
  notes: "Morning & evening walk for Ellie & Lewis"\r
}];\r
function isCurbsideActiveOnDate(taskName, year, month, day) {\r
  const lower = String(taskName || "").toLowerCase();\r
  const isRecycling = lower.includes("recycling");\r
  const isWaste = lower.includes("waste");\r
  if (!isRecycling && !isWaste) return true;\r
  const targetDate = new Date(year, month, day, 12, 0, 0);\r
  const recyclingAnchor = new Date(2026, 9, 15, 12, 0, 0);\r
  const diffDays = Math.round((targetDate.getTime() - recyclingAnchor.getTime()) / (1e3 * 60 * 60 * 24));\r
  const diffWeeks = Math.round(diffDays / 7);\r
  const cycleIndex = (diffWeeks % 2 + 2) % 2;\r
  if (isRecycling) {\r
    return cycleIndex === 0;\r
  }\r
  if (isWaste) {\r
    return cycleIndex === 1;\r
  }\r
  return true;\r
}\r
function getCurbsideStatusForDate(taskName, year, month, day) {\r
  const lower = String(taskName || "").toLowerCase();\r
  const isRecycling = lower.includes("recycling");\r
  const isWaste = lower.includes("waste");\r
  if (!isRecycling && !isWaste) return null;\r
  const targetDate = new Date(year, month, day, 12, 0, 0);\r
  const dayOfWeek = targetDate.getDay();\r
  const recyclingAnchor = new Date(2026, 9, 15, 12, 0, 0);\r
  const diffDays = Math.round((targetDate.getTime() - recyclingAnchor.getTime()) / (1e3 * 60 * 60 * 24));\r
  const diffWeeks = Math.round(diffDays / 7);\r
  const cycleIndex = (diffWeeks % 2 + 2) % 2;\r
  const isScheduledToday = dayOfWeek === 4 && (isRecycling ? cycleIndex === 0 : cycleIndex === 1);\r
  const isOppositeThursday = dayOfWeek === 4 && (isRecycling ? cycleIndex === 1 : cycleIndex === 0);\r
  return {\r
    isCurbside: true,\r
    isRecycling,\r
    isWaste,\r
    isScheduledToday,\r
    isOppositeThursday,\r
    cycleIndex,\r
    nextScheduledText: isRecycling ? cycleIndex === 0 ? "Today (Oct 15)" : "Next Thursday (Oct 29)" : cycleIndex === 1 ? "Today" : "Next Thu (Oct 22)"\r
  };\r
}\r
function getInitialChoreFrequency(taskName) {\r
  const lower = String(taskName || "").toLowerCase().trim();\r
  if (lower.includes("recycling") || lower.includes("waste")) {\r
    return {\r
      frequency: "biweekly",\r
      dayOfWeek: 3\r
    };\r
  }\r
  if (lower.includes("sign-off") || lower.includes("inspection") || lower.includes("deep clean") || lower.includes("feeding station")) {\r
    return {\r
      frequency: "weekly",\r
      dayOfWeek: 6\r
    };\r
  }\r
  if (lower.includes("tidy bedroom") || lower.includes("clean basement") || lower.includes("laundry")) {\r
    return {\r
      frequency: "weekly",\r
      dayOfWeek: 5\r
    };\r
  }\r
  return {\r
    frequency: "daily",\r
    dayOfWeek: 0\r
  };\r
}\r
function pad(n) {\r
  return n < 10 ? "0" + n : "" + n;\r
}\r
function formatDateKey(year, month, day) {\r
  return \`\${year}-\${pad(month + 1)}-\${pad(day)}\`;\r
}\r
function parseDateKey(val) {\r
  if (val === null || val === void 0 || val === "") return null;\r
  if (val instanceof Date) {\r
    return {\r
      year: val.getFullYear(),\r
      month: val.getMonth(),\r
      day: val.getDate()\r
    };\r
  }\r
  if (typeof val === "number") {\r
    if (val > 3e4 && val < 6e4) {\r
      const dateMs = (val - 25569) * 86400 * 1e3;\r
      const d = new Date(dateMs);\r
      return {\r
        year: d.getUTCFullYear(),\r
        month: d.getUTCMonth(),\r
        day: d.getUTCDate()\r
      };\r
    }\r
    return null;\r
  }\r
  const str = String(val).trim();\r
  if (!str.includes("-")) {\r
    const num = Number(str);\r
    if (!isNaN(num) && num > 3e4 && num < 6e4) {\r
      const d = new Date((num - 25569) * 86400 * 1e3);\r
      return {\r
        year: d.getUTCFullYear(),\r
        month: d.getUTCMonth(),\r
        day: d.getUTCDate()\r
      };\r
    }\r
    return null;\r
  }\r
  const parts = str.split("-").map(Number);\r
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return null;\r
  return {\r
    year: parts[0],\r
    month: parts[1] - 1,\r
    day: parts[2]\r
  };\r
}\r
function getMondayOfDate(year, month, day) {\r
  const d = new Date(year, month, day);\r
  const dayOfWeek = d.getDay();\r
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;\r
  const monday = new Date(year, month, day + diff);\r
  return {\r
    year: monday.getFullYear(),\r
    month: monday.getMonth(),\r
    day: monday.getDate()\r
  };\r
}\r
function getWeekDaysForDate(year, month, day) {\r
  const mon = getMondayOfDate(year, month, day);\r
  const weekDays = [];\r
  for (let i = 0; i < 7; i++) {\r
    const d = new Date(mon.year, mon.month, mon.day + i);\r
    const y = d.getFullYear();\r
    const m = d.getMonth();\r
    const dateNum = d.getDate();\r
    weekDays.push({\r
      year: y,\r
      month: m,\r
      day: dateNum,\r
      dateKey: formatDateKey(y, m, dateNum),\r
      isCurrentMonth: true,\r
      dayOfWeekIndex: i\r
    });\r
  }\r
  return weekDays;\r
}\r
function getCurrentWeekMonday() {\r
  const now = new Date();\r
  const mon = getMondayOfDate(now.getFullYear(), now.getMonth(), now.getDate());\r
  return {\r
    ...mon,\r
    todayYear: now.getFullYear(),\r
    todayMonth: now.getMonth(),\r
    todayDay: now.getDate(),\r
    dateKey: formatDateKey(mon.year, mon.month, mon.day)\r
  };\r
}\r
function generateWeekAssignments(startDateStr, choresList = DEFAULT_MASTER_CHORES) {\r
  const parsedStart = parseDateKey(startDateStr) || {\r
    year: 2026,\r
    month: 9,\r
    day: 12\r
  };\r
  const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);\r
  const parents = ["Thom", "Meghan"];\r
  const fullTimeKids = ["Sydney"];\r
  const allKids = ["Sydney", "Cadence", "Mason"];\r
  const fullTimeRoster = ["Thom", "Meghan", "Sydney"];\r
  const allNonCasual = ["Thom", "Meghan", "Sydney", "Cadence", "Mason"];\r
  const scheduleMap = {};\r
  const weekNum = Math.floor(parsedStart.day / 7);\r
\r
  weekDays.forEach((dayObj, dayIdx) => {\r
    const dKey = dayObj.dateKey;\r
    scheduleMap[dKey] = {};\r
    const bwStatus = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);\r
    const areKidsInResidence = bwStatus.isFullStay || bwStatus.isDepartureDay;\r
    const dailyRotation = areKidsInResidence ? allNonCasual : fullTimeRoster;\r
    const kids = areKidsInResidence ? allKids : fullTimeKids;\r
    const dayStartOffset = dayIdx % dailyRotation.length;\r
    let dailyCounter = 0;\r
    choresList.forEach((cr, choreIdx) => {\r
      var _a, _b, _c, _d, _e, _f, _g;\r
      const taskTitle = cr.task || cr.title || ((_a = cr.row) == null ? void 0 : _a[0]) || "";\r
      const tLower = taskTitle.toLowerCase();\r
      const freq = getInitialChoreFrequency(taskTitle);\r
      let isScheduled = false;\r
      const isDeepClean = tLower.includes("deep clean") || tLower.includes("feeding station");\r
      const isRecycling = tLower.includes("recycling");\r
      const isWaste = tLower.includes("waste");\r
      if (isDeepClean) {\r
        isScheduled = dayIdx === 6;\r
      } else if (isRecycling) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);\r
      } else if (isWaste) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);\r
      } else if (freq.frequency === "daily" || ((_b = cr.frequency) == null ? void 0 : _b.toLowerCase().includes("daily")) && !((_c = cr.frequency) == null ? void 0 : _c.toLowerCase().includes("once"))) {\r
        isScheduled = true;\r
      } else if (freq.frequency === "biweekly" || ((_d = cr.frequency) == null ? void 0 : _d.toLowerCase().includes("bi"))) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate(taskTitle, dayObj.year, dayObj.month, dayObj.day);\r
      } else if (freq.frequency === "weekly" || ((_e = cr.frequency) == null ? void 0 : _e.toLowerCase().includes("weekly")) && !((_f = cr.frequency) == null ? void 0 : _f.toLowerCase().includes("bi")) || ((_g = cr.frequency) == null ? void 0 : _g.toLowerCase().includes("once"))) {\r
        const targetDayLower = String(cr.targetDay || "").toLowerCase();\r
        const scheduledDay = targetDayLower.includes("sunday") ? 6 : targetDayLower.includes("thursday") ? 3 : 5;\r
        isScheduled = dayIdx === scheduledDay;\r
      }\r
      let assignedWho = "";\r
      if (!isScheduled) {\r
        assignedWho = "";\r
      } else if (isKidsChecklistChore(taskTitle)) {\r
        // Tidy Bedrooms and Laundry Tasks are individual minion checklists: DO NOT auto-assign to a single person!\r
        assignedWho = "";\r
      } else if (dayIdx === 6 && tLower.includes("supper")) {\r
        assignedWho = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parents);\r
      } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {\r
        assignedWho = parents[dayIdx % parents.length];\r
      } else if (tLower.includes("basement")) {\r
        assignedWho = kids[(weekNum + 1) % kids.length];\r
      } else if (isDeepClean) {\r
        assignedWho = dailyRotation[(weekNum + 2) % dailyRotation.length];\r
      } else if (tLower.includes("recycling")) {\r
        assignedWho = dailyRotation[(weekNum + 3) % dailyRotation.length];\r
      } else if (tLower.includes("waste")) {\r
        assignedWho = dailyRotation[(weekNum + 4) % dailyRotation.length];\r
      } else {\r
        const groupLower = String(cr.rotationGroup || "").toLowerCase();\r
        if (groupLower.includes("parent")) {\r
          assignedWho = parents[(dayStartOffset + dailyCounter) % parents.length];\r
        } else if (groupLower.includes("kid")) {\r
          assignedWho = kids[(dayStartOffset + dailyCounter) % kids.length];\r
        } else {\r
          assignedWho = dailyRotation[(dayStartOffset + dailyCounter) % dailyRotation.length];\r
          dailyCounter++;\r
        }\r
      }\r
      const choreKey = cr.index_ !== void 0 ? cr.index_ : 5 + choreIdx;\r
      const entry = {\r
        who: assignedWho,\r
        done: false,\r
        kidsDone: {}\r
      };\r
      scheduleMap[dKey][choreKey] = entry;\r
      if (cr.index_ !== void 0) {\r
        scheduleMap[dKey][cr.index_] = entry;\r
      }\r
      if (taskTitle) {\r
        scheduleMap[dKey][taskTitle] = entry;\r
        scheduleMap[dKey][tLower] = entry;\r
      }\r
    });\r
  });\r
  return scheduleMap;\r
}\r
function extractWeekFromSheet(sheetRows, startDateStr) {\r
  const parsedStart = parseDateKey(startDateStr) || {\r
    year: 2026,\r
    month: 9,\r
    day: 12\r
  };\r
  const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);\r
  const scheduleMap = {};\r
  weekDays.forEach(dayObj => {\r
    scheduleMap[dayObj.dateKey] = {};\r
  });\r
  if (!sheetRows || !Array.isArray(sheetRows)) return scheduleMap;\r
  sheetRows.forEach(r => {\r
    if (r.index_ < 4 || !r.row || r.row.length === 0) return;\r
    const taskTitle = String(r.row[0] || "").trim();\r
    const taskLowerCheck = taskTitle.toLowerCase();\r
    if (!taskTitle || taskTitle.startsWith("\\u2022") || taskLowerCheck === "daily tasks" || taskLowerCheck === "weekly tasks" || taskTitle.toUpperCase().includes("SECTION") || taskTitle.toUpperCase().includes("ONCE-A-WEEK") || taskTitle.toUpperCase().includes("ROSTER") || taskTitle.toUpperCase().includes("PET CARE")) {\r
      return;\r
    }\r
    const tLower = taskTitle.toLowerCase();\r
    const cKey = getChoreCanonicalKey(taskTitle);\r
    const choreKey = r.index_;\r
    weekDays.forEach((dayObj, dayIdx) => {\r
      const whoCol = 1 + dayIdx * 2;\r
      const doneCol = 2 + dayIdx * 2;\r
      const rawCellWho = r.row[whoCol] !== void 0 && r.row[whoCol] !== null ? String(r.row[whoCol]).trim() : "";\r
      const isPlaceholderOrDesc = rawCellWho.startsWith("-") || rawCellWho.startsWith("(") || rawCellWho.startsWith("SG:") || rawCellWho.startsWith("Done:") || rawCellWho.startsWith("Parent Initials") || rawCellWho.startsWith("___") || /^Who:\\s*_+$/i.test(rawCellWho);\r
      const cellWho = isPlaceholderOrDesc ? "" : rawCellWho.replace(/^Who:\\s*/i, "").trim();\r
      const cellDone = r.row[doneCol] === true || String(r.row[doneCol]).toLowerCase() === "true";\r
      const entry = {\r
        who: cellWho,\r
        done: cellDone,\r
        kidsDone: {}\r
      };\r
      if (isKidsChecklistChore(taskTitle)) {\r
        if (r.row[2] === true || String(r.row[2]).toLowerCase() === "true") entry.kidsDone["Sydney"] = true;\r
        if (r.row[4] === true || String(r.row[4]).toLowerCase() === "true") entry.kidsDone["Cadence"] = true;\r
        if (r.row[6] === true || String(r.row[6]).toLowerCase() === "true") entry.kidsDone["Mason"] = true;\r
        if (r.row[12] === true || String(r.row[12]).toLowerCase() === "true") entry.kidsDone["Koda"] = true;\r
        if (r.row[14] === true || String(r.row[14]).toLowerCase() === "true") entry.kidsDone["Keyanna"] = true;\r
      }\r
      scheduleMap[dayObj.dateKey][choreKey] = entry;\r
      scheduleMap[dayObj.dateKey][taskTitle] = entry;\r
      scheduleMap[dayObj.dateKey][tLower] = entry;\r
      if (cKey) {\r
        scheduleMap[dayObj.dateKey][cKey] = entry;\r
      }\r
    });\r
  });\r
  return scheduleMap;\r
}\r
function App({\r
  data,\r
  updateItem,\r
  deleteItem,\r
  insertItem,\r
  moveItem,\r
  followLink\r
}) {\r
  var _a, _b, _c;\r
  const [deletedChoreKeys, setDeletedChoreKeys] = useState(() => new Set());\r
  const [choreEdits, setChoreEdits] = useState({});\r
  const [customAddedChores, setCustomAddedChores] = useState([]);\r
  const [customMasterChores, setCustomMasterChores] = useState([]);\r
  const [choreOrderOverrides, setChoreOrderOverrides] = useState(null);\r
  const [editingPrintableChore, setEditingPrintableChore] = useState(null);\r
  const [deletingChoreTarget, setDeletingChoreTarget] = useState(null);\r
  const printableEnvelope = useMemo(() => {\r
    if (!data || !Array.isArray(data)) return null;\r
    return data.find(d => {\r
      const name = String(d.name || "").toLowerCase();\r
      return (name.includes("printable") || name.includes("weekly") && name.includes("schedule")) && !name.includes("hub");\r
    }) || data[0];\r
  }, [data]);\r
  const hubEnvelope = useMemo(() => {\r
    if (!data || !Array.isArray(data)) return null;\r
    return data.find(d => {\r
      const name = String(d.name || "").toLowerCase();\r
      return name.includes("hub") || name.includes("household") || name.includes("directory") || name.includes("roster");\r
    }) || (data.length > 1 ? data[1] : data[0]);\r
  }, [data]);\r
  const printableRangeIndex = (_a = printableEnvelope == null ? void 0 : printableEnvelope.index_) != null ? _a : 0;\r
  const hubRangeIndex = (_b = hubEnvelope == null ? void 0 : hubEnvelope.index_) != null ? _b : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
  const hubSheet = hubEnvelope || {\r
    data: []\r
  };\r
  const printableSheet = printableEnvelope || {\r
    data: []\r
  };\r
  const choreRangeIndex = printableRangeIndex;\r
  const rosterRangeIndex = hubRangeIndex;\r
  const rosterSheet = hubSheet;\r
  const rawRows = (printableSheet == null ? void 0 : printableSheet.data) || [];\r
  const findPrintableRow = (taskTitle, fallbackIndex) => {\r
    if (!(printableSheet == null ? void 0 : printableSheet.data) || printableSheet.data.length === 0) return null;\r
    const cKey = getChoreCanonicalKey(taskTitle);\r
    const norm = normalizeTaskName(taskTitle);\r
    if (cKey) {\r
      const canonicalMatch = printableSheet.data.find(r => {\r
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;\r
        return getChoreCanonicalKey(r.row[0]) === cKey;\r
      });\r
      if (canonicalMatch) return canonicalMatch;\r
    }\r
    if (norm) {\r
      const exactMatch = printableSheet.data.find(r => {\r
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;\r
        return normalizeTaskName(r.row[0]) === norm;\r
      });\r
      if (exactMatch) return exactMatch;\r
      const partialMatch = printableSheet.data.find(r => {\r
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;\r
        const rNorm = normalizeTaskName(r.row[0]);\r
        return rNorm.startsWith(norm) || norm.startsWith(rNorm) || rNorm.includes(norm) || norm.includes(rNorm);\r
      });\r
      if (partialMatch) return partialMatch;\r
    }\r
    if (!taskTitle && fallbackIndex !== void 0 && fallbackIndex !== null) {\r
      const byIdx = printableSheet.data.find(r => r.index_ === fallbackIndex && r.index_ >= 4);\r
      if (byIdx) return byIdx;\r
    }\r
    return null;\r
  };\r
  const getPrintableRowIndex = (taskTitle, fallbackIndex) => {\r
    const row = findPrintableRow(taskTitle, fallbackIndex);\r
    return row ? row.index_ : fallbackIndex;\r
  };\r
  const findHubChoreRow = (taskTitle, fallbackIndex) => {\r
    if (!(hubSheet == null ? void 0 : hubSheet.data) || hubSheet.data.length === 0) return null;\r
    const cKey = getChoreCanonicalKey(taskTitle);\r
    const norm = normalizeTaskName(taskTitle);\r
    if (cKey) {\r
      const canonicalMatch = hubSheet.data.find(r => {\r
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;\r
        return getChoreCanonicalKey(r.row[6]) === cKey;\r
      });\r
      if (canonicalMatch) return canonicalMatch;\r
    }\r
    if (norm) {\r
      const exactMatch = hubSheet.data.find(r => {\r
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;\r
        return normalizeTaskName(r.row[6]) === norm;\r
      });\r
      if (exactMatch) return exactMatch;\r
      const partialMatch = hubSheet.data.find(r => {\r
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;\r
        const rNorm = normalizeTaskName(r.row[6]);\r
        return rNorm.startsWith(norm) || norm.startsWith(rNorm) || rNorm.includes(norm) || norm.includes(rNorm);\r
      });\r
      if (partialMatch) return partialMatch;\r
    }\r
    if (!taskTitle && fallbackIndex !== void 0 && fallbackIndex !== null) {\r
      const byIdx = hubSheet.data.find(r => r.index_ === fallbackIndex && r.index_ >= 5);\r
      if (byIdx) return byIdx;\r
    }\r
    return null;\r
  };\r
  const getHubRowIndex = (taskTitle, fallbackIndex) => {\r
    const row = findHubChoreRow(taskTitle, fallbackIndex);\r
    return row ? row.index_ : fallbackIndex;\r
  };\r
  const hubScheduleConfig = useMemo(() => {\r
    const rRows = rosterSheet.data || [];\r
    let activeWeekStart = "2026-10-12";\r
    let custodyRotation = "Kids Week";\r
    let custodyMembers = "Mason, Cadence";\r
    let wasteRotation = "Bi-Weekly Schedule continuing on from first Friday specified";\r
    let wasteMembers = "Non-Casual";\r
    rRows.forEach(r => {\r
      if (!r.row) return;\r
      const paramCol = String(r.row[6] || "").toLowerCase().trim();\r
      const valCol = r.row[7];\r
      const scopeCol = String(r.row[8] || "").trim();\r
      const membersCol = String(r.row[10] || "").trim();\r
      if (paramCol.includes("active week")) {\r
        const parsed = parseDateKey(valCol);\r
        if (parsed) {\r
          activeWeekStart = formatDateKey(parsed.year, parsed.month, parsed.day);\r
        } else if (valCol) {\r
          activeWeekStart = String(valCol).trim();\r
        }\r
      } else if (paramCol.includes("custody schedule")) {\r
        if (valCol) custodyRotation = String(valCol).trim();\r
        if (membersCol) custodyMembers = membersCol;\r
      } else if (paramCol.includes("waste") || paramCol.includes("recycling")) {\r
        if (scopeCol) wasteRotation = scopeCol;\r
        if (membersCol) wasteMembers = membersCol;\r
      }\r
    });\r
    return {\r
      activeWeekStart,\r
      custodyRotation,\r
      custodyMembers,\r
      wasteRotation,\r
      wasteMembers\r
    };\r
  }, [rosterSheet]);\r
  const hubOccupancyCategories = useMemo(() => {\r
    const rRows = rosterSheet.data || [];\r
    const cats = [];\r
    rRows.forEach(r => {\r
      if (!r.row || r.index_ < 14 || r.index_ > 17) return;\r
      const col0 = String(r.row[0] || "").trim();\r
      if (!col0 || col0.toLowerCase() === "type" || col0.toLowerCase().includes("occupancy") || col0.toLowerCase().includes("special rotation")) return;\r
      cats.push({\r
        type: col0,\r
        description: String(r.row[1] || "").trim(),\r
        rules: String(r.row[2] || "").trim(),\r
        active: r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false"\r
      });\r
    });\r
    if (cats.length > 0) return cats;\r
    return [{\r
      type: "Full-Time",\r
      description: "Constant Residency",\r
      rules: "Included in all weekly/monthly schedulings",\r
      active: true\r
    }, {\r
      type: "Bi-Weekly",\r
      description: "Half-Time Residency",\r
      rules: 'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',\r
      active: true\r
    }, {\r
      type: "Casual",\r
      description: "Periodic Residency",\r
      rules: "Manually added to any schedules",\r
      active: true\r
    }];\r
  }, [rosterSheet]);\r
  const familyMembers = useMemo(() => {\r
    const rRows = rosterSheet.data || [];\r
    const memberRows = rRows.filter(r => {\r
      const isAddedMemberRow = Boolean(r.row && r.row[5] === "MEMBER_ROW");\r
      if (!isAddedMemberRow && (r.index_ < 4 || r.index_ > 12)) return false;\r
      if (!r.row || !r.row[0]) return false;\r
      const rawName = String(r.row[0]).trim();\r
      if (!rawName) return false;\r
      const lower = rawName.toLowerCase();\r
      if (lower === "household members" || lower === "name" || lower.includes("directory") || lower.includes("occupancy")) {\r
        return false;\r
      }\r
      return true;\r
    });\r
    if (memberRows.length === 0) {\r
      return [{\r
        id: "Thom",\r
        name: "Thom",\r
        role: "Overseer Supreme",\r
        residency: "Full-Time",\r
        type: "regular",\r
        specialGroups: "Parents, Non-Casual, All",\r
        active: true,\r
        color: "#2563EB",\r
        bg: "#DBEAFE",\r
        text: "#1D4ED8",\r
        index_: 5\r
      }, {\r
        id: "Meghan",\r
        name: "Meghan",\r
        role: "Overseer Supreme",\r
        residency: "Full-Time",\r
        type: "regular",\r
        specialGroups: "Parents, Non-Casual, All",\r
        active: true,\r
        color: "#8B5CF6",\r
        bg: "#EDE9FE",\r
        text: "#6D28D9",\r
        index_: 6\r
      }, {\r
        id: "Sydney",\r
        name: "Sydney",\r
        role: "Minion",\r
        residency: "Full-Time",\r
        type: "regular",\r
        specialGroups: "Kids, Non-Casual, All",\r
        active: true,\r
        color: "#0D9488",\r
        bg: "#CCFBF1",\r
        text: "#0F766E",\r
        index_: 7\r
      }, {\r
        id: "Cadence",\r
        name: "Cadence",\r
        role: "Minion",\r
        residency: "Bi-Weekly",\r
        type: "biweekly",\r
        specialGroups: "Kids, Non-Casual, All",\r
        active: true,\r
        color: "#EC4899",\r
        bg: "#FCE7F3",\r
        text: "#BE185D",\r
        index_: 8\r
      }, {\r
        id: "Mason",\r
        name: "Mason",\r
        role: "Minion",\r
        residency: "Bi-Weekly",\r
        type: "biweekly",\r
        specialGroups: "Kids, Non-Casual, All",\r
        active: true,\r
        color: "#EA580C",\r
        bg: "#FFEDD5",\r
        text: "#C2410C",\r
        index_: 9\r
      }, {\r
        id: "Koda",\r
        name: "Koda",\r
        role: "Minion",\r
        residency: "Casual",\r
        type: "casual",\r
        specialGroups: "All",\r
        active: true,\r
        color: "#0284C7",\r
        bg: "#E0F2FE",\r
        text: "#0369A1",\r
        index_: 10\r
      }, {\r
        id: "Keyanna",\r
        name: "Keyanna",\r
        role: "Minion",\r
        residency: "Casual",\r
        type: "casual",\r
        specialGroups: "All",\r
        active: true,\r
        color: "#D97706",\r
        bg: "#FEF3C7",\r
        text: "#B45309",\r
        index_: 11\r
      }];\r
    }\r
    return memberRows.map((r, i) => {\r
      const rawName = String(r.row[0] || "").trim();\r
      const rawRole = String(r.row[1] || "").trim() || (["thom", "meghan"].includes(rawName.toLowerCase()) ? "Overseer Supreme" : "Minion");\r
      const rawResidency = String(r.row[2] || "").trim();\r
      const rawSpecialGroups = String(r.row[3] || "").trim();\r
      const isActive = r.row[4] === true || String(r.row[4]).toLowerCase() === "true";\r
      const cleanRes = rawResidency.toLowerCase();\r
      let type = "regular";\r
      if (cleanRes.includes("bi-weekly") || cleanRes.includes("biweekly")) {\r
        type = "biweekly";\r
      } else if (cleanRes.includes("casual")) {\r
        type = "casual";\r
      }\r
      const palette = PRESET_MEMBER_COLORS[rawName.toLowerCase()] || MEMBER_COLOR_PALETTES[i % MEMBER_COLOR_PALETTES.length];\r
      return {\r
        id: rawName,\r
        name: rawName,\r
        role: rawRole,\r
        residency: rawResidency || (type === "biweekly" ? "Bi-Weekly" : type === "casual" ? "Casual" : "Full-Time"),\r
        type,\r
        specialGroups: rawSpecialGroups,\r
        schedule: type === "biweekly" ? "Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)" : type === "casual" ? "Periodic Residency (Manual Add)" : "Constant Residency (Full-Time)",\r
        active: isActive,\r
        color: palette.color,\r
        bg: palette.bg,\r
        text: palette.text,\r
        index_: r.index_\r
      };\r
    });\r
  }, [rosterSheet]);\r
  const hubSpecialGroups = useMemo(() => {\r
    const groupNames = ["All", "Kids", "Parents", "Non-Casual"];\r
    return groupNames.map(groupName => {\r
      const matchedMembers = familyMembers\r
        .filter(m => {\r
          const parsed = String(m.specialGroups || "")\r
            .split(",")\r
            .map(s => s.trim().toLowerCase())\r
            .filter(Boolean);\r
          return parsed.includes(groupName.toLowerCase());\r
        })\r
        .map(m => m.name);\r
      return {\r
        name: groupName,\r
        members: matchedMembers.length > 0 ? matchedMembers.join(", ") : "None",\r
        active: true\r
      };\r
    });\r
  }, [familyMembers]);\r
  const kidsList = useMemo(() => {\r
    return familyMembers.filter(m => {\r
      if (m.active === false) return false;\r
      const roleLower = String(m.role || "").toLowerCase();\r
      return !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord") && !roleLower.includes("admin") && !roleLower.includes("mom") && !roleLower.includes("dad");\r
    }).map(m => m.name);\r
  }, [familyMembers]);\r
  const allKidsList = useMemo(() => {\r
    const fallbackKids = ["Sydney", "Cadence", "Mason", "Koda", "Keyanna"];\r
    const merged = Array.from(new Set([...kidsList, ...fallbackKids]));\r
    return merged.length > 0 ? merged : fallbackKids;\r
  }, [kidsList]);\r
  const rosterPets = useMemo(() => {\r
    const rRows = rosterSheet.data || [];\r
    const petHeaderRow = rRows.find(r => {\r
      var _a2;\r
      const cell0 = String(((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim();\r
      return cell0.includes("pet care profile") || cell0 === "pet name";\r
    });\r
    if (petHeaderRow) {\r
      const petRows = rRows.filter(r => {\r
        if (r.index_ <= petHeaderRow.index_) return false;\r
        if (!r.row || !r.row[0]) return false;\r
        if (r.row[5] === "MEMBER_ROW") return false;\r
        const name = String(r.row[0]).trim();\r
        const lower = name.toLowerCase();\r
        return lower !== "pet name" && !lower.includes("profile");\r
      });\r
      return petRows.map((r, i) => {\r
        const rawName = String(r.row[0]).trim();\r
        const rawType = String(r.row[1] || "").trim();\r
        const rawRoutine = String(r.row[2] || "").trim();\r
        const rawCare = String(r.row[3] || "").trim();\r
        const isActive = r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false";\r
        const defaultIsDog = ["ellie", "lewis"].includes(rawName.toLowerCase());\r
        const type = rawType || (defaultIsDog ? "Dog" : "Cat");\r
        const typeLower = type.toLowerCase();\r
        const isDog = typeLower.includes("dog");\r
        const icon = isDog ? "\\u{1F415}" : typeLower.includes("cat") ? "\\u{1F408}" : typeLower.includes("bird") ? "\\u{1F426}" : typeLower.includes("fish") ? "\\u{1F41F}" : "\\u{1F43E}";\r
        const routine = rawRoutine || "Morning & Evening";\r
        const isPersonName = ["meghan", "thom", "sydney"].includes(rawCare.toLowerCase());\r
        const care = !rawCare || isPersonName ? isDog ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water" : rawCare;\r
        const palette = PRESET_PET_COLORS[rawName.toLowerCase()] || MEMBER_COLOR_PALETTES[i % MEMBER_COLOR_PALETTES.length];\r
        return {\r
          name: rawName,\r
          type,\r
          routine,\r
          care,\r
          active: isActive,\r
          icon,\r
          color: palette.color,\r
          bg: palette.bg,\r
          text: palette.text,\r
          border: palette.border || palette.color,\r
          index_: r.index_\r
        };\r
      });\r
    }\r
    return HOUSE_PETS.map((p, idx) => {\r
      const palette = PRESET_PET_COLORS[p.name.toLowerCase()] || MEMBER_COLOR_PALETTES[idx % MEMBER_COLOR_PALETTES.length];\r
      return {\r
        name: p.name,\r
        type: p.kind,\r
        routine: "Morning & Evening",\r
        care: p.kind === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water",\r
        active: true,\r
        icon: p.icon,\r
        color: palette.color,\r
        bg: palette.bg,\r
        text: palette.text,\r
        border: palette.border || palette.color,\r
        index_: 15 + idx\r
      };\r
    });\r
  }, [rosterSheet]);\r
  const hubMasterChores = useMemo(() => {\r
    const rRows = rosterSheet.data || [];\r
    let chores = [];\r
    const seenCanonicalKeys = new Set();\r
    const seenNames = new Set();\r
    rRows.forEach(r => {\r
      if (!r.row || r.index_ < 5) return;\r
      const taskVal = r.row[6] !== void 0 && r.row[6] !== null ? String(r.row[6]).trim() : "";\r
      if (!taskVal) return;\r
      const tLower = taskVal.toLowerCase();\r
      const norm = normalizeTaskName(taskVal);\r
      const cKey = getChoreCanonicalKey(taskVal);\r
      if (tLower === "chore" || tLower === "parameter" || tLower.includes("schedule configuration") || tLower.includes("active week") || tLower.includes("waste / recycling") || tLower.includes("custody schedule") || tLower.includes("pet care profile") || tLower.includes("special rotation") || tLower.includes("occupancy categories") || tLower.includes("household member") || isSignOffChore(taskVal) || cKey === "weekly_sign_off") {\r
        return;\r
      }\r
      if (seenCanonicalKeys.has(cKey) || seenNames.has(norm)) {\r
        return;\r
      }\r
      if (deletedChoreKeys.has(String(r.index_)) || deletedChoreKeys.has(tLower) || deletedChoreKeys.has(norm) || deletedChoreKeys.has(cKey)) {\r
        return;\r
      }\r
      const col7 = String(r.row[7] || "").trim();\r
      const col8 = String(r.row[8] || "").trim();\r
      const col9 = String(r.row[9] || "").trim();\r
      const col10 = String(r.row[10] || "").trim();\r
      const col11 = String(r.row[11] || "").trim();\r
      const isCol7Category = CHORE_CATEGORIES.some(c => c.name.toLowerCase() === col7.toLowerCase());\r
      const rawGroup = isCol7Category ? col10 || "Non-Casual" : col7 || "Non-Casual";\r
      const normalizeRotationGroup = (grp: string) => {\r
        const gLow = String(grp || "").trim().toLowerCase();\r
        if (!gLow || gLow === "all non-casual" || gLow === "non-casual" || gLow === "parents & kids" || gLow === "full-time roster") return "Non-Casual";\r
        if (gLow === "kids" || gLow === "kids rotation" || gLow === "all kids") return "Kids";\r
        if (gLow === "parents") return "Parents";\r
        if (gLow === "all" || gLow === "all occupants") return "All";\r
        return String(grp).trim();\r
      };\r
      const rotationGroup = normalizeRotationGroup(rawGroup);\r
      const rawFreq = col8 || (cKey.includes("curbside") ? "Bi-Weekly" : cKey.includes("deep_clean") || cKey.includes("sign_off") || cKey.includes("bedroom") || cKey.includes("laundry") || cKey.includes("basement") ? "Once a Week" : "Daily");\r
      const freqLower = rawFreq.toLowerCase();\r
      const frequency = freqLower.includes("bi") ? "Bi-Weekly" : freqLower.includes("once") || freqLower.includes("weekly") ? "Once a Week" : "Daily";\r
      const rawTarget = col9 === "N/A" || !col9 ? frequency === "Daily" ? "Mon \\u2013 Sun" : frequency === "Bi-Weekly" ? "Thursday Evening" : "Saturday" : col9;\r
      const targetDay = rawTarget.replace(/\\s*\\(required\\)/i, "").trim() || "Mon \\u2013 Sun";\r
      const notes = isCol7Category ? col11 : col10;\r
      let category = isCol7Category ? col7 : col11 && CHORE_CATEGORIES.some(c => c.name.toLowerCase() === col11.toLowerCase()) ? col11 : "Household";\r
      if (!isCol7Category && category === "Household") {\r
        if (tLower.includes("litter") || tLower.includes("feed") || tLower.includes("herd") || tLower.includes("walk")) {\r
          category = "Pet Care";\r
        } else if (tLower.includes("supper") || tLower.includes("dishes") || tLower.includes("dishwasher") || tLower.includes("kitchen") || tLower.includes("cook")) {\r
          category = "Kitchen";\r
        } else if (tLower.includes("bedroom")) {\r
          category = "Bedrooms";\r
        } else if (tLower.includes("basement")) {\r
          category = "Household";\r
        } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {\r
          category = "Administration";\r
        }\r
      }\r
      seenCanonicalKeys.add(cKey);\r
      seenNames.add(norm);\r
      chores.push({\r
        index_: r.index_,\r
        task: taskVal,\r
        canonicalKey: cKey,\r
        category,\r
        frequency,\r
        targetDay: targetDay === "N/A" ? "Mon \\u2013 Sun" : targetDay,\r
        rotationGroup,\r
        notes,\r
        source: "hub_master_registry"\r
      });\r
    });\r
    if (printableSheet == null ? void 0 : printableSheet.data) {\r
      printableSheet.data.forEach(pr => {\r
        if (pr.index_ < 4 || !pr.row || !pr.row[0]) return;\r
        const pTask = String(pr.row[0]).trim();\r
        const pLower = pTask.toLowerCase();\r
        const pNorm = normalizeTaskName(pTask);\r
        const pKey = getChoreCanonicalKey(pTask);\r
        if (!pNorm || pNorm === "daily tasks" || pNorm === "weekly tasks" || pNorm.includes("section") || pNorm.includes("once a week") || pNorm.includes("bedroom checklist") || pNorm.includes("pet care routine") || pNorm.startsWith("\\u2022") || isSignOffChore(pTask) || pKey === "weekly_sign_off" || seenCanonicalKeys.has(pKey) || seenNames.has(pNorm) || deletedChoreKeys.has(pNorm) || deletedChoreKeys.has(pKey) || deletedChoreKeys.has(String(pr.index_))) {\r
          return;\r
        }\r
        seenCanonicalKeys.add(pKey);\r
        seenNames.add(pNorm);\r
        const freqInfo = getInitialChoreFrequency(pTask);\r
        const isWeekly = freqInfo.frequency === "weekly";\r
        const isBi = freqInfo.frequency === "biweekly";\r
        let inferredCat = "Household";\r
        let inferredNotes = "";\r
        if (pLower.includes("litter") || pLower.includes("feed") || pLower.includes("herd") || pLower.includes("walk")) {\r
          inferredCat = "Pet Care";\r
          if (pLower.includes("walk")) inferredNotes = "Morning & evening walk for Ellie & Lewis";\r
        } else if (pLower.includes("supper") || pLower.includes("dishes") || pLower.includes("dishwasher") || pLower.includes("kitchen")) {\r
          inferredCat = "Kitchen";\r
        } else if (pLower.includes("bedroom")) {\r
          inferredCat = "Bedrooms";\r
        } else if (pLower.includes("basement")) {\r
          inferredCat = "Household";\r
        } else if (pLower.includes("sign-off") || pLower.includes("inspection")) {\r
          inferredCat = "Administration";\r
        }\r
        chores.push({\r
          index_: pr.index_,\r
          task: pTask,\r
          canonicalKey: pKey,\r
          category: inferredCat,\r
          frequency: isBi ? "Bi-Weekly" : isWeekly ? "Once a Week" : "Daily",\r
          targetDay: isBi ? "Thursday Evening" : isWeekly ? "Saturday" : "Mon \\u2013 Sun",\r
          rotationGroup: "Non-Casual",\r
          notes: inferredNotes,\r
          source: "printable_sheet"\r
        });\r
      });\r
    }\r
    if (customMasterChores.length > 0) {\r
      customMasterChores.forEach(cmc => {\r
        const cmcNorm = normalizeTaskName(cmc.task);\r
        const cmcKey = getChoreCanonicalKey(cmc.task);\r
        if (!seenCanonicalKeys.has(cmcKey) && !seenNames.has(cmcNorm) && !deletedChoreKeys.has(String(cmc.index_)) && !deletedChoreKeys.has(cmcNorm) && !deletedChoreKeys.has(cmcKey)) {\r
          seenCanonicalKeys.add(cmcKey);\r
          seenNames.add(cmcNorm);\r
          chores.push(cmc);\r
        }\r
      });\r
    }\r
    if (chores.length === 0) {\r
      chores = DEFAULT_MASTER_CHORES.filter(c => !isSignOffChore(c.title)).map((c, idx) => {\r
        var _a2, _b2;\r
        return {\r
          index_: 5 + idx,\r
          task: c.title,\r
          category: c.category || "Household",\r
          frequency: ((_a2 = c.freq) == null ? void 0 : _a2.frequency) === "weekly" ? "Once a Week" : ((_b2 = c.freq) == null ? void 0 : _b2.frequency) === "biweekly" ? "Bi-Weekly" : "Daily",\r
          targetDay: c.targetDay || "Mon \\u2013 Sun",\r
          rotationGroup: c.rotationGroup || "Non-Casual",\r
          notes: c.notes || "",\r
          source: "default"\r
        };\r
      });\r
    }\r
    if (choreOrderOverrides && Array.isArray(choreOrderOverrides) && choreOrderOverrides.length > 0) {\r
      const findOrderIdx = c => {\r
        const norm = normalizeTaskName(c.task);\r
        const idx = choreOrderOverrides.indexOf(norm);\r
        if (idx !== -1) return idx;\r
        const rawLower = (c.task || "").toLowerCase().trim();\r
        const rawIdx = choreOrderOverrides.indexOf(rawLower);\r
        if (rawIdx !== -1) return rawIdx;\r
        const cKey = getChoreCanonicalKey(c.task);\r
        if (cKey) {\r
          const cIdx = choreOrderOverrides.findIndex(k => getChoreCanonicalKey(k) === cKey);\r
          if (cIdx !== -1) return cIdx;\r
        }\r
        return -1;\r
      };\r
      chores.sort((a, b) => {\r
        const idxA = findOrderIdx(a);\r
        const idxB = findOrderIdx(b);\r
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;\r
        if (idxA !== -1) return -1;\r
        if (idxB !== -1) return 1;\r
        return 0;\r
      });\r
    }\r
    return chores;\r
  }, [rosterSheet, customMasterChores, choreOrderOverrides, deletedChoreKeys]);\r
  const getMember = useMemo(() => {\r
    return name => {\r
      if (!name) return null;\r
      const clean = String(name).trim().toLowerCase();\r
      return familyMembers.find(m => m.name.toLowerCase() === clean || m.id.toLowerCase() === clean || clean === "mom" && (m.name.toLowerCase().includes("megh") || m.role.toLowerCase().includes("mom") || m.role.toLowerCase().includes("parent")) || clean === "dad" && (m.name.toLowerCase() === "thom" || m.role.toLowerCase().includes("dad") || m.role.toLowerCase().includes("parent"))) || null;\r
    };\r
  }, [familyMembers]);\r
  const biWeeklyNamesString = useMemo(() => {\r
    const bw = familyMembers.filter(m => m.type === "biweekly").map(m => m.name);\r
    return bw.length > 0 ? bw.join(" & ") : "Cadence & Mason";\r
  }, [familyMembers]);\r
  const sheetStartDateStr = useMemo(() => {\r
    if (hubScheduleConfig == null ? void 0 : hubScheduleConfig.activeWeekStart) {\r
      return hubScheduleConfig.activeWeekStart;\r
    }\r
    return "2026-10-12";\r
  }, [hubScheduleConfig]);\r
  const initialDateObj = useMemo(() => {\r
    return parseDateKey(sheetStartDateStr) || {\r
      year: 2024,\r
      month: 6,\r
      day: 15\r
    };\r
  }, [sheetStartDateStr]);\r
  const printableScheduleItems = useMemo(() => {\r
    const rawPrintable = (printableSheet == null ? void 0 : printableSheet.data) || [];\r
\r
    const isChoreDaily = (taskName: string, freqStr?: string) => {\r
      const cKey = getChoreCanonicalKey(taskName);\r
      if (cKey === "litter_box" || cKey === "feed_herd" || cKey === "empty_dishwasher" || cKey === "make_supper" || cKey === "dinner_dishes" || cKey === "walk_dogs") {\r
        return true;\r
      }\r
      if (cKey === "curbside_recycling" || cKey === "curbside_waste" || cKey === "clean_basement" || cKey === "feeding_station_deep_clean" || cKey === "tidy_bedrooms" || cKey === "laundry") {\r
        return false;\r
      }\r
      const f = String(freqStr || "").toLowerCase();\r
      if (f.includes("bi") || f.includes("once") || f.includes("week")) return false;\r
      if (f.includes("daily")) return true;\r
      const freqInfo = getInitialChoreFrequency(taskName);\r
      return freqInfo.frequency === "daily";\r
    };\r
\r
    const dailyItems: any[] = [];\r
    const weeklyItems: any[] = [];\r
    const seenKeys = new Set<string>();\r
\r
    hubMasterChores.forEach(c => {\r
      if (isSignOffChore(c.task)) return;\r
      const cKey = getChoreCanonicalKey(c.task);\r
      const norm = normalizeTaskName(c.task);\r
      if (seenKeys.has(cKey) || seenKeys.has(norm)) return;\r
      seenKeys.add(cKey);\r
      seenKeys.add(norm);\r
\r
      const existingRow = rawPrintable.find(r => {\r
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;\r
        const rTask = String(r.row[0]).trim();\r
        return getChoreCanonicalKey(rTask) === cKey || normalizeTaskName(rTask) === norm;\r
      });\r
\r
      const isDaily = isChoreDaily(c.task, c.frequency);\r
      let rowData = existingRow?.row ? [...existingRow.row] : null;\r
      if (rowData) {\r
        if (!isDaily && c.notes && String(c.notes).trim()) {\r
          rowData[1] = String(c.notes).trim();\r
        }\r
      } else {\r
        if (isDaily) {\r
          rowData = [c.task, "", false, "", false, "", false, "", false, "", false, "", false, "", false];\r
        } else if (isKidsChecklistChore(c.task)) {\r
          rowData = [c.task, c.notes || "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum", false, null, false, null, false, null, null, "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____", null, null, false, null, false];\r
        } else {\r
          const desc = c.notes || (cKey.includes("recycling") ? "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : cKey.includes("waste") ? "- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : "- Pick Up, Organize, Dust & Vacuum");\r
          rowData = [c.task, desc, null, null, null, null, null, null, null, "Who: _____________________", null, null, null, "Done: ______", false];\r
        }\r
      }\r
\r
      const itemObj = {\r
        isSectionHeader: false,\r
        index_: existingRow ? existingRow.index_ : c.index_,\r
        row: rowData,\r
        task: c.task,\r
        category: c.category,\r
        frequency: c.frequency,\r
        targetDay: c.targetDay,\r
        rotationGroup: c.rotationGroup,\r
        notes: c.notes\r
      };\r
\r
      if (isDaily) {\r
        dailyItems.push(itemObj);\r
      } else {\r
        weeklyItems.push(itemObj);\r
      }\r
    });\r
\r
    rawPrintable.forEach(r => {\r
      if (r.index_ < 4 || !r.row || !r.row[0]) return;\r
      const cell0 = String(r.row[0]).trim();\r
      const lower0 = cell0.toLowerCase();\r
      if (!cell0 || lower0 === "daily tasks" || lower0 === "weekly tasks" || lower0.includes("once-a-week") || lower0.includes("bedroom checklist") || lower0.includes("pet care routine") || lower0.includes("household roster") || lower0.includes("bi-weekly schedule") || lower0.startsWith("\\u2022") || isSignOffChore(cell0)) {\r
        return;\r
      }\r
      const cKey = getChoreCanonicalKey(cell0);\r
      const norm = normalizeTaskName(cell0);\r
      if (seenKeys.has(cKey) || seenKeys.has(norm)) return;\r
      seenKeys.add(cKey);\r
      seenKeys.add(norm);\r
\r
      const isDaily = isChoreDaily(cell0);\r
      const itemObj = {\r
        isSectionHeader: false,\r
        index_: r.index_,\r
        row: r.row,\r
        task: cell0\r
      };\r
      if (isDaily) {\r
        dailyItems.push(itemObj);\r
      } else {\r
        weeklyItems.push(itemObj);\r
      }\r
    });\r
\r
    if (customAddedChores.length > 0) {\r
      customAddedChores.forEach(cac => {\r
        const cKey = getChoreCanonicalKey(cac.task);\r
        const norm = normalizeTaskName(cac.task);\r
        if (seenKeys.has(cKey) || seenKeys.has(norm)) return;\r
        seenKeys.add(cKey);\r
        seenKeys.add(norm);\r
        const isDaily = isChoreDaily(cac.task, cac.frequency);\r
        const itemObj = {\r
          isSectionHeader: false,\r
          index_: cac.index_,\r
          row: cac.row,\r
          task: cac.task,\r
          category: cac.category,\r
          frequency: cac.frequency,\r
          targetDay: cac.targetDay,\r
          rotationGroup: cac.rotationGroup,\r
          notes: cac.notes\r
        };\r
        if (isDaily) {\r
          dailyItems.push(itemObj);\r
        } else {\r
          weeklyItems.push(itemObj);\r
        }\r
      });\r
    }\r
\r
    const items: any[] = [];\r
    items.push({\r
      isSectionHeader: true,\r
      headerType: "daily",\r
      index_: 4,\r
      title: "Daily Tasks"\r
    });\r
    items.push(...dailyItems);\r
\r
    items.push({\r
      isSectionHeader: true,\r
      headerType: "weekly",\r
      index_: 10,\r
      title: "Weekly Tasks",\r
      descHeader: "Description",\r
      rightHeader: "Initials / Assigned"\r
    });\r
    items.push(...weeklyItems);\r
\r
    items.push({\r
      isSectionHeader: false,\r
      index_: 18,\r
      row: ["Weekly Sign-Off & Inspection", "Parents", false, null, null, null, null, null, null, "Thom / Meghan", null, null, null, null, null],\r
      task: "Weekly Sign-Off & Inspection",\r
      category: "Administration",\r
      frequency: "Once a Week",\r
      targetDay: "Sunday",\r
      rotationGroup: "Parents",\r
      notes: "Check off bedroom tidiness and completed chores"\r
    });\r
\r
    return items.filter(item => {\r
      if (item.isSectionHeader || isSignOffChore(item.task)) return true;\r
      const idKey = String(item.index_);\r
      const taskKey = String(item.task || "").toLowerCase().trim();\r
      const norm = normalizeTaskName(item.task);\r
      const cKey = getChoreCanonicalKey(item.task);\r
      if (deletedChoreKeys.has(idKey) || deletedChoreKeys.has(taskKey) || deletedChoreKeys.has(norm) || deletedChoreKeys.has(cKey)) {\r
        return false;\r
      }\r
      return true;\r
    }).map(item => {\r
      if (item.isSectionHeader) return item;\r
      const edit = choreEdits[item.index_] || choreEdits[String(item.task || "").toLowerCase().trim()] || (item.task ? choreEdits[getChoreCanonicalKey(item.task)] : null);\r
      if (!edit) return item;\r
      const updatedTask = edit.task || item.task;\r
      const updatedRow = edit.row ? [...edit.row] : [...(item.row || [])];\r
      updatedRow[0] = updatedTask;\r
      return {\r
        ...item,\r
        task: updatedTask,\r
        row: updatedRow,\r
        category: edit.category || item.category,\r
        frequency: edit.frequency || item.frequency,\r
        targetDay: edit.targetDay || item.targetDay,\r
        rotationGroup: edit.rotationGroup || item.rotationGroup,\r
        notes: edit.notes || item.notes\r
      };\r
    });\r
  }, [printableSheet, hubMasterChores, customAddedChores, deletedChoreKeys, choreEdits]);\r
  const choreRows = useMemo(() => {\r
    const rawPrintableChores = printableScheduleItems.filter(item => !item.isSectionHeader).map(item => {\r
      const title = item.task;\r
      const cKey = getChoreCanonicalKey(title);\r
      const tNorm = normalizeTaskName(title);\r
      const hubMatch = hubMasterChores.find(h => {\r
        if (cKey && getChoreCanonicalKey(h.task) === cKey) return true;\r
        if (tNorm && normalizeTaskName(h.task) === tNorm) return true;\r
        const hTask = h.task.toLowerCase().trim();\r
        const tLower = title.toLowerCase().trim();\r
        return tLower === hTask;\r
      }) || hubMasterChores.find(h => {\r
        const hTask = h.task.toLowerCase().trim();\r
        const tLower = title.toLowerCase().trim();\r
        if (tLower.includes("deep clean") && hTask.includes("deep clean")) return true;\r
        if (tLower.includes("feed the herd") && hTask.includes("feed the herd")) return true;\r
        return tLower.includes(hTask) || hTask.includes(tLower) || (tLower.includes("dishes") && hTask.includes("dishes")) || (tLower.includes("litter") && hTask.includes("litter")) || (tLower.includes("supper") && hTask.includes("supper")) || (tLower.includes("basement") && hTask.includes("basement")) || (tLower.includes("laundry") && hTask.includes("laundry")) || (tLower.includes("sign-off") && hTask.includes("sign-off"));\r
      });\r
      let category = (hubMatch == null ? void 0 : hubMatch.category) || "Household";\r
      let frequency = (hubMatch == null ? void 0 : hubMatch.frequency) || "Daily";\r
      let targetDay = (hubMatch == null ? void 0 : hubMatch.targetDay) || "Mon \\u2013 Sun";\r
      let rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "Kids Rotation";\r
      let notes = (hubMatch == null ? void 0 : hubMatch.notes) || "";\r
      if (title.toLowerCase().includes("deep clean") || title.toLowerCase().includes("feeding station")) {\r
        category = "Pet Care";\r
        frequency = "Once a Week";\r
        targetDay = "Sunday";\r
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All";\r
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Wash & sanitize pet bowls, vacuum feeding mat";\r
      } else if (title.toLowerCase().includes("recycling")) {\r
        category = "Household";\r
        frequency = "Bi-Weekly";\r
        targetDay = "Thursday Evening";\r
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All Non-Casual";\r
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)";\r
      } else if (title.toLowerCase().includes("waste")) {\r
        category = "Household";\r
        frequency = "Bi-Weekly";\r
        targetDay = "Thursday Evening";\r
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All Non-Casual";\r
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)";\r
      } else if (title.toLowerCase().includes("litter") || title.toLowerCase().includes("feed")) {\r
        category = "Pet Care";\r
      } else if (title.toLowerCase().includes("supper") || title.toLowerCase().includes("dishes")) {\r
        category = "Kitchen";\r
      } else if (isBedroomChore(title)) {\r
        category = "Bedrooms";\r
        frequency = "Once a Week";\r
        targetDay = "Saturday";\r
        const kid = getSpecificKidForChore(title);\r
        rotationGroup = kid || "Each Child";\r
      } else if (title.toLowerCase().includes("basement")) {\r
        category = "Household";\r
        frequency = "Once a Week";\r
        targetDay = "Saturday";\r
        rotationGroup = "All Kids";\r
      } else if (title.toLowerCase().includes("laundry")) {\r
        category = "Household";\r
        frequency = "Once a Week";\r
        targetDay = "Saturday";\r
        rotationGroup = "Sydney";\r
      } else if (title.toLowerCase().includes("sign-off")) {\r
        category = "Administration";\r
        frequency = "Once a Week";\r
        targetDay = "Sunday";\r
        rotationGroup = "Parents";\r
      }\r
      return {\r
        index_: item.index_,\r
        row: item.row,\r
        task: title,\r
        category,\r
        frequency,\r
        targetDay,\r
        rotationGroup,\r
        notes\r
      };\r
    });\r
    if (rawPrintableChores.length > 0) return rawPrintableChores;\r
    return DEFAULT_MASTER_CHORES.map((c, i) => {\r
      var _a2, _b2;\r
      return {\r
        index_: 4 + i,\r
        row: [c.title, null, false, null, false, null, false, null, false, null, false, null, false, null, false],\r
        task: c.title,\r
        category: c.category,\r
        frequency: ((_a2 = c.freq) == null ? void 0 : _a2.frequency) === "weekly" ? "Once a Week" : ((_b2 = c.freq) == null ? void 0 : _b2.frequency) === "biweekly" ? "Bi-Weekly" : "Daily",\r
        targetDay: c.targetDay,\r
        rotationGroup: c.rotationGroup,\r
        notes: c.notes\r
      };\r
    });\r
  }, [printableScheduleItems, hubMasterChores]);\r
  const currentWeekInfo = useMemo(() => getCurrentWeekMonday(), []);\r
  const [activeTab, setActiveTab] = useState("matrix");\r
  const [selectedYear, setSelectedYear] = useState(() => currentWeekInfo.todayYear);\r
  const [selectedMonth, setSelectedMonth] = useState(() => currentWeekInfo.todayMonth);\r
  const [activeSyncWeek, setActiveSyncWeek] = useState(() => currentWeekInfo.dateKey);\r
  const [selectedAssigneeFilter, setSelectedAssigneeFilter] = useState("ALL");\r
  const [activeDayModal, setActiveDayModal] = useState(null);\r
  const [showAutoAssignModal, setShowAutoAssignModal] = useState(false);\r
  const [showNewChoreModal, setShowNewChoreModal] = useState(false);\r
  const [showAddRemoveChoreModal, setShowAddRemoveChoreModal] = useState(false);\r
  const [addRemoveMode, setAddRemoveMode] = useState("add");\r
  const [selectedRemoveIndices, setSelectedRemoveIndices] = useState([]);\r
  const [removeSearchQuery, setRemoveSearchQuery] = useState("");\r
  const [editingChoreIndex, setEditingChoreIndex] = useState(null);\r
  const [editChoreTitle, setEditChoreTitle] = useState("");\r
  const [editChoreFreq, setEditChoreFreq] = useState("daily");\r
  const [editChoreDay, setEditChoreDay] = useState(5);\r
  const [editChoreRotationGroup, setEditChoreRotationGroup] = useState("All Non-Casual");\r
  const [showCombineModal, setShowCombineModal] = useState(false);\r
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);\r
  const [openMemberGroupDropdown, setOpenMemberGroupDropdown] = useState(null);\r
  const [newMemberGroups, setNewMemberGroups] = useState(["Kids", "Non-Casual", "All"]);\r
  const [combineTargetA, setCombineTargetA] = useState(null);\r
  const [combineTargetB, setCombineTargetB] = useState(null);\r
  const [customCombinedTitle, setCustomCombinedTitle] = useState("");\r
  const [searchQuery, setSearchQuery] = useState("");\r
  const [notice, setNotice] = useState(null);\r
  const [monthlyIncentive, setMonthlyIncentive] = useState("$15 Allowance Bonus & Choice of Friday Family Dinner");\r
  const [isEditingIncentive, setIsEditingIncentive] = useState(false);\r
  const [incentiveDraft, setIncentiveDraft] = useState("$15 Allowance Bonus & Choice of Friday Family Dinner");\r
  const [masterCategoryFilter, setMasterCategoryFilter] = useState("ALL");\r
  const [masterFrequencyFilter, setMasterFrequencyFilter] = useState("ALL");\r
  const [masterSearchQuery, setMasterSearchQuery] = useState("");\r
  const [editingMasterIndex, setEditingMasterIndex] = useState(null);\r
  const [masterInlineDraft, setMasterInlineDraft] = useState(null);\r
  const [openTargetDayDropdown, setOpenTargetDayDropdown] = useState<string | number | null>(null);\r
  const [showInlineAddForm, setShowInlineAddForm] = useState(false);\r
  const [newMasterDraft, setNewMasterDraft] = useState({\r
    task: "",\r
    category: "Household",\r
    frequency: "Daily",\r
    targetDay: "Mon \\u2013 Sun",\r
    selectedTargetDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],\r
    customTargetEnabled: false,\r
    customTargetText: "",\r
    rotationGroup: "Non-Casual",\r
    notes: ""\r
  });\r
  const handleSaveAsDefault = async () => {\r
    try {\r
      const rawData = localStorage.getItem(STORAGE_KEY);\r
      const dataToSave = rawData ? JSON.parse(rawData) : data;\r
      const res = await fetch('/__save-config?asDefault=true', {\r
        method: 'POST',\r
        headers: { 'Content-Type': 'application/json' },\r
        body: JSON.stringify({ sheetData: dataToSave }),\r
      });\r
      const resJson = await res.json();\r
      if (resJson.ok) {\r
        setNotice('✓ Current browser setup saved as the new default in code and weekly-chores-config.json!');\r
      } else {\r
        setNotice(\`⚠️ Save failed: \${resJson.error}\`);\r
      }\r
    } catch (e: any) {\r
      setNotice(\`⚠️ Save failed: \${e?.message || String(e)}\`);\r
    }\r
    setTimeout(() => setNotice(null), 4000);\r
  };\r
\r
  const handleExportConfig = () => {\r
    try {\r
      const rawData = localStorage.getItem(STORAGE_KEY);\r
      const dataToSave = rawData ? JSON.parse(rawData) : data;\r
      const payload = {\r
        sheetData: dataToSave,\r
        version: '5.0',\r
        exportedAt: new Date().toISOString(),\r
        appName: 'Weekly Chores & Household Hub',\r
      };\r
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });\r
      const url = URL.createObjectURL(blob);\r
      const a = document.createElement('a');\r
      const dateStr = new Date().toISOString().slice(0, 10);\r
      a.href = url;\r
      a.download = \`weekly-chores-config-\${dateStr}.json\`;\r
      document.body.appendChild(a);\r
      a.click();\r
      document.body.removeChild(a);\r
      URL.revokeObjectURL(url);\r
\r
      fetch('/__save-config', {\r
        method: 'POST',\r
        headers: { 'Content-Type': 'application/json' },\r
        body: JSON.stringify(payload),\r
      }).catch(() => {});\r
\r
      setNotice('✓ Configuration file exported and saved to workspace!');\r
      setTimeout(() => setNotice(null), 3500);\r
    } catch (e: any) {\r
      setNotice(\`⚠️ Export failed: \${e?.message || String(e)}\`);\r
      setTimeout(() => setNotice(null), 3500);\r
    }\r
  };\r
\r
  const handleImportConfigFile = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    const file = e.target.files?.[0];\r
    if (!file) return;\r
    const reader = new FileReader();\r
    reader.onload = (event) => {\r
      try {\r
        const parsed = JSON.parse(event.target?.result as string);\r
        const dataToLoad = parsed.sheetData || (Array.isArray(parsed) ? parsed : null);\r
        if (Array.isArray(dataToLoad) && dataToLoad.length > 0) {\r
          localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToLoad));\r
          window.postMessage({ type: 'SYNC_DATA', payload: dataToLoad }, '*');\r
          setNotice(\`✓ Loaded configuration from "\${file.name}"!\`);\r
        } else {\r
          setNotice('⚠️ Invalid configuration file: Missing sheetData');\r
        }\r
      } catch (err: any) {\r
        setNotice(\`⚠️ Failed to parse config file: \${err?.message || String(err)}\`);\r
      }\r
      setTimeout(() => setNotice(null), 4000);\r
    };\r
    reader.readAsText(file);\r
    e.target.value = '';\r
  };\r
\r
  const ALL_WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];\r
  const parseTargetDayState = (rawTargetDay: string) => {\r
    const clean = String(rawTargetDay || "").trim();\r
    if (!clean || clean === "Mon \\u2013 Sun" || clean === "Mon - Sun" || clean.toLowerCase() === "daily") {\r
      return {\r
        selectedDays: [...ALL_WEEK_DAYS],\r
        customEnabled: false,\r
        customText: ""\r
      };\r
    }\r
    const parts = clean.split(",").map(s => s.trim()).filter(Boolean);\r
    const selectedDays: string[] = [];\r
    const customParts: string[] = [];\r
    parts.forEach(p => {\r
      const matchedDay = ALL_WEEK_DAYS.find(d => d.toLowerCase() === p.toLowerCase());\r
      if (matchedDay) {\r
        if (!selectedDays.includes(matchedDay)) selectedDays.push(matchedDay);\r
      } else {\r
        customParts.push(p);\r
      }\r
    });\r
    return {\r
      selectedDays: ALL_WEEK_DAYS.filter(d => selectedDays.includes(d)),\r
      customEnabled: customParts.length > 0,\r
      customText: customParts.join(", ")\r
    };\r
  };\r
  const formatTargetDayState = (selectedDays: string[], customEnabled: boolean, customText: string) => {\r
    const orderedDays = ALL_WEEK_DAYS.filter(d => selectedDays.includes(d));\r
    const dayPart = orderedDays.length === 7 ? "Mon \\u2013 Sun" : orderedDays.join(", ");\r
    const cleanCustom = String(customText || "").trim();\r
    if (customEnabled && cleanCustom) {\r
      return dayPart ? \`\${dayPart}, \${cleanCustom}\` : cleanCustom;\r
    }\r
    return dayPart || "Mon \\u2013 Sun";\r
  };\r
  const filteredMasterChores = useMemo(() => {\r
    return hubMasterChores.filter(ch => {\r
      if (masterCategoryFilter !== "ALL" && (ch.category || "").toLowerCase() !== masterCategoryFilter.toLowerCase()) {\r
        return false;\r
      }\r
      if (masterFrequencyFilter !== "ALL") {\r
        const fLow = (ch.frequency || "").toLowerCase();\r
        const filterLow = masterFrequencyFilter.toLowerCase();\r
        if (filterLow === "daily" && !fLow.includes("daily")) return false;\r
        if ((filterLow === "once a week" || filterLow === "weekly") && ((!fLow.includes("once") && !fLow.includes("weekly")) || fLow.includes("bi"))) return false;\r
        if (filterLow === "bi-weekly" && !fLow.includes("bi")) return false;\r
      }\r
      if (masterSearchQuery) {\r
        const q = masterSearchQuery.toLowerCase();\r
        const match = (ch.task || "").toLowerCase().includes(q) || (ch.category || "").toLowerCase().includes(q) || (ch.rotationGroup || "").toLowerCase().includes(q) || (ch.notes || "").toLowerCase().includes(q) || (ch.targetDay || "").toLowerCase().includes(q);\r
        if (!match) return false;\r
      }\r
      return true;\r
    });\r
  }, [hubMasterChores, masterCategoryFilter, masterFrequencyFilter, masterSearchQuery]);\r
  const [hubChoreSearch, setHubChoreSearch] = useState("");\r
  const [showAddPetModal, setShowAddPetModal] = useState(false);\r
  const [newPetDraft, setNewPetDraft] = useState({\r
    name: "",\r
    type: "Dog",\r
    routine: "Morning & Evening",\r
    care: "",\r
    active: true\r
  });\r
  const [editingPetIndex, setEditingPetIndex] = useState<number | null>(null);\r
  const [petEditDraft, setPetEditDraft] = useState({\r
    name: "",\r
    routine: "",\r
    care: ""\r
  });\r
  const [editingMemberIndex, setEditingMemberIndex] = useState<number | null>(null);\r
  const [memberEditName, setMemberEditName] = useState("");\r
  useEffect(() => {\r
    if ((printableSheet == null ? void 0 : printableSheet.data) || (hubSheet == null ? void 0 : hubSheet.data)) {\r
      setCustomMasterChores(prev => prev.filter(cmc => {\r
        var _a2, _b2;\r
        const norm = normalizeTaskName(cmc.task);\r
        const inHub = (_a2 = hubSheet.data) == null ? void 0 : _a2.some(r => r.row && normalizeTaskName(r.row[6]) === norm);\r
        const inP = (_b2 = printableSheet.data) == null ? void 0 : _b2.some(r => r.row && normalizeTaskName(r.row[0]) === norm);\r
        return !inHub && !inP;\r
      }));\r
      setCustomAddedChores(prev => prev.filter(cac => {\r
        var _a2;\r
        const norm = normalizeTaskName(cac.task);\r
        const inP = (_a2 = printableSheet.data) == null ? void 0 : _a2.some(r => r.row && normalizeTaskName(r.row[0]) === norm);\r
        return !inP;\r
      }));\r
    }\r
  }, [printableSheet.data, hubSheet.data]);\r
  const [choreFrequencies, setChoreFrequencies] = useState({});\r
  const [tasksCadenceFilter, setTasksCadenceFilter] = useState("ALL");\r
  const getChoreFreq = cr => {\r
    var _a2;\r
    const title = (cr == null ? void 0 : cr.task) || ((_a2 = cr == null ? void 0 : cr.row) == null ? void 0 : _a2[0]) || "";\r
    if (choreFrequencies[title]) return choreFrequencies[title];\r
    if (choreFrequencies[cr == null ? void 0 : cr.index_]) return choreFrequencies[cr == null ? void 0 : cr.index_];\r
    const titleLower = String(title || "").toLowerCase();\r
    if (titleLower.includes("recycling") || titleLower.includes("waste")) {\r
      return {\r
        frequency: "biweekly",\r
        dayOfWeek: 3\r
      };\r
    }\r
    if (titleLower.includes("deep clean") || titleLower.includes("feeding station")) {\r
      return {\r
        frequency: "weekly",\r
        dayOfWeek: 6\r
      };\r
    }\r
    const cKey = getChoreCanonicalKey(title);\r
    const hubMatch = hubMasterChores.find(h => (cKey && getChoreCanonicalKey(h.task) === cKey) || normalizeTaskName(h.task) === normalizeTaskName(title) || h.task.toLowerCase() === title.toLowerCase());\r
    if (hubMatch) {\r
      const fLower = String(hubMatch.frequency || "").toLowerCase();\r
      const tLower = String(hubMatch.targetDay || "").toLowerCase();\r
      if (fLower.includes("bi-weekly") || fLower.includes("biweekly")) {\r
        return {\r
          frequency: "biweekly",\r
          dayOfWeek: 3\r
        };\r
      }\r
      if (fLower.includes("weekly") || fLower.includes("once")) {\r
        const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : tLower.includes("friday") ? 4 : 5;\r
        return {\r
          frequency: "weekly",\r
          dayOfWeek: dayIdx\r
        };\r
      }\r
      return {\r
        frequency: "daily",\r
        dayOfWeek: 0\r
      };\r
    }\r
    return getInitialChoreFrequency(title);\r
  };\r
  const handleSetChoreFrequency = (taskName, choreIndex, frequency, dayOfWeek = 5) => {\r
    var _a2;\r
    setChoreFrequencies(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      [taskName]: {\r
        frequency,\r
        dayOfWeek\r
      }\r
    }));\r
    setNotice(\`Set "\${taskName}" to \${frequency === "weekly" ? \`Once a Week (\${(_a2 = DAY_STYLES[dayOfWeek]) == null ? void 0 : _a2.name})\` : "Daily"}\`);\r
    setTimeout(() => setNotice(null), 3500);\r
  };\r
  const [monthSchedule, setMonthSchedule] = useState(() => {\r
    var _a2, _b2;\r
    const rawPrintable = ((_a2 = data == null ? void 0 : data.find(d => {\r
      const name = String(d.name || "").toLowerCase();\r
      return (name.includes("printable") || name.includes("weekly") && name.includes("schedule")) && !name.includes("hub");\r
    })) == null ? void 0 : _a2.data) || ((_b2 = data == null ? void 0 : data[0]) == null ? void 0 : _b2.data) || [];\r
    return extractWeekFromSheet(rawPrintable, getCurrentWeekMonday().dateKey);\r
  });\r
  const handleAutoAssignCurrentWeek = () => {\r
    const targetStartDate = activeSyncWeek || getCurrentWeekMonday().dateKey;\r
    const newSchedule = generateWeekAssignments(targetStartDate, choreRows);\r
    const parsedStart = parseDateKey(targetStartDate) || {\r
      year: 2026,\r
      month: 9,\r
      day: 12\r
    };\r
    const targetWeekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);\r
    const editsPatch = {};\r
\r
    if (printableRangeIndex >= 0) {\r
      choreRows.forEach(cr => {\r
        var _a2, _b2, _c2, _d, _e, _f;\r
        const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
        const pRow = findPrintableRow(taskTitle, cr.index_);\r
        if (!pRow) return;\r
\r
        // Skip Tidy Bedrooms and Laundry Tasks (they are personal minion checklists, not single-person tasks)\r
        if (isKidsChecklistChore(taskTitle)) {\r
          return;\r
        }\r
\r
        const choreFreq = getChoreFreq(cr);\r
        const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);\r
\r
        const rowUpdates = new Array(15).fill(void 0);\r
        let hasChanges = false;\r
        let weeklyAssignedWho = "";\r
\r
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
          const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayOffset);\r
          const dKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());\r
          const assignedWho = ((_b2 = (_a2 = newSchedule[dKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.who) || ((_d = (_c2 = newSchedule[dKey]) == null ? void 0 : _c2[cr.task]) == null ? void 0 : _d.who) || ((_f = (_e = newSchedule[dKey]) == null ? void 0 : _e[getChoreCanonicalKey(cr.task)]) == null ? void 0 : _f.who);\r
          if (assignedWho) {\r
            const whoCol = 1 + dayOffset * 2;\r
            rowUpdates[whoCol] = assignedWho;\r
            hasChanges = true;\r
            if (isStreamlined && !weeklyAssignedWho) {\r
              weeklyAssignedWho = assignedWho;\r
            }\r
          }\r
        }\r
\r
        if (isStreamlined && weeklyAssignedWho) {\r
          rowUpdates[9] = \`Who: \${weeklyAssignedWho}\`;\r
          hasChanges = true;\r
\r
          editsPatch[cr.index_] = {\r
            ...(choreEdits[cr.index_] || {}),\r
            who: weeklyAssignedWho,\r
            rotationGroup: weeklyAssignedWho\r
          };\r
          if (taskTitle) {\r
            editsPatch[taskTitle.toLowerCase().trim()] = {\r
              ...(choreEdits[taskTitle.toLowerCase().trim()] || {}),\r
              who: weeklyAssignedWho,\r
              rotationGroup: weeklyAssignedWho\r
            };\r
          }\r
\r
          // Propagate weekly assignment across all days of this week in newSchedule so getSingleWeeklyStatus finds it immediately\r
          targetWeekDays.forEach(dObj => {\r
            if (newSchedule[dObj.dateKey]) {\r
              const prevEntry = newSchedule[dObj.dateKey][cr.index_] || { done: false, kidsDone: {} };\r
              const updatedEntry = { ...prevEntry, who: weeklyAssignedWho };\r
              newSchedule[dObj.dateKey][cr.index_] = updatedEntry;\r
              if (taskTitle) {\r
                newSchedule[dObj.dateKey][taskTitle] = updatedEntry;\r
                newSchedule[dObj.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;\r
              }\r
            }\r
          });\r
        }\r
\r
        if (hasChanges) {\r
          updateItem(printableRangeIndex, pRow.index_, rowUpdates);\r
        }\r
      });\r
    }\r
\r
    setMonthSchedule(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      ...newSchedule\r
    }));\r
\r
    if (Object.keys(editsPatch).length > 0) {\r
      setChoreEdits(prev => ({\r
        ...prev,\r
        ...editsPatch\r
      }));\r
    }\r
\r
    setNotice(\`Distributed daily & weekly scheduled chores for week of \${targetStartDate} across active household members (Tidy Bedrooms & Laundry remain individual checklists)!\`);\r
    setTimeout(() => setNotice(null), 4500);\r
  };\r
  const activeWeekDays = useMemo(() => {\r
    const p = parseDateKey(activeSyncWeek) || {\r
      year: 2026,\r
      month: 9,\r
      day: 12\r
    };\r
    return getWeekDaysForDate(p.year, p.month, p.day);\r
  }, [activeSyncWeek]);\r
  const activeWeekBwSummary = useMemo(() => {\r
    return getWeekBiWeeklySummary(activeWeekDays, biWeeklyNamesString);\r
  }, [activeWeekDays, biWeeklyNamesString]);\r
  const isBiWeeklyHereThisWeek = useMemo(() => {\r
    return isBiWeeklyInResidenceForWeek(activeWeekDays);\r
  }, [activeWeekDays]);\r
  const activeWeeklyKids = useMemo(() => {\r
    return familyMembers.filter(m => {\r
      if (m.active === false) return false;\r
      const roleLower = String(m.role || "").toLowerCase();\r
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord");\r
      if (!isKid) return false;\r
      if (m.type === "regular") return true;\r
      if (m.type === "biweekly") return isBiWeeklyHereThisWeek;\r
      return false;\r
    }).map(m => m.name);\r
  }, [familyMembers, isBiWeeklyHereThisWeek]);\r
  const casualKidsList = useMemo(() => {\r
    const list = familyMembers.filter(m => {\r
      if (m.active === false) return false;\r
      const roleLower = String(m.role || "").toLowerCase();\r
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord");\r
      return isKid && m.type === "casual";\r
    }).map(m => m.name);\r
    return list.length > 0 ? list : ["Koda", "Keyanna"];\r
  }, [familyMembers]);\r
  useEffect(() => {\r
    if (!(printableSheet == null ? void 0 : printableSheet.data) || printableSheet.data.length === 0) return;\r
    const fromSheet = extractWeekFromSheet(printableSheet.data, activeSyncWeek || sheetStartDateStr || "2026-10-12");\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      Object.keys(fromSheet).forEach(dKey => {\r
        next[dKey] = {\r
          ...{\r
            ...(next[dKey] || {})\r
          },\r
          ...fromSheet[dKey]\r
        };\r
      });\r
      return next;\r
    });\r
  }, [printableSheet, activeSyncWeek, sheetStartDateStr]);\r
  const calendarWeeks = useMemo(() => {\r
    const daysInCurrentMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();\r
    const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();\r
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;\r
    const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();\r
    const weeks = [];\r
    let currentWeek = [];\r
    for (let i = offset - 1; i >= 0; i--) {\r
      const prevDate = daysInPrevMonth - i;\r
      const prevMonthIdx = selectedMonth === 0 ? 11 : selectedMonth - 1;\r
      const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;\r
      currentWeek.push({\r
        year: prevYear,\r
        month: prevMonthIdx,\r
        day: prevDate,\r
        dateKey: formatDateKey(prevYear, prevMonthIdx, prevDate),\r
        isCurrentMonth: false,\r
        dayOfWeekIndex: currentWeek.length\r
      });\r
    }\r
    for (let day = 1; day <= daysInCurrentMonth; day++) {\r
      currentWeek.push({\r
        year: selectedYear,\r
        month: selectedMonth,\r
        day,\r
        dateKey: formatDateKey(selectedYear, selectedMonth, day),\r
        isCurrentMonth: true,\r
        dayOfWeekIndex: currentWeek.length\r
      });\r
      if (currentWeek.length === 7) {\r
        weeks.push(currentWeek);\r
        currentWeek = [];\r
      }\r
    }\r
    if (currentWeek.length > 0) {\r
      let nextDay = 1;\r
      const nextMonthIdx = selectedMonth === 11 ? 0 : selectedMonth + 1;\r
      const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;\r
      while (currentWeek.length < 7) {\r
        currentWeek.push({\r
          year: nextYear,\r
          month: nextMonthIdx,\r
          day: nextDay,\r
          dateKey: formatDateKey(nextYear, nextMonthIdx, nextDay),\r
          isCurrentMonth: false,\r
          dayOfWeekIndex: currentWeek.length\r
        });\r
        nextDay++;\r
      }\r
      weeks.push(currentWeek);\r
    }\r
    return weeks;\r
  }, [selectedYear, selectedMonth]);\r
  const isWeekSyncedToSheet = week => {\r
    var _a2;\r
    const mondayKey = (_a2 = week[0]) == null ? void 0 : _a2.dateKey;\r
    return mondayKey === activeSyncWeek;\r
  };\r
  const getChoreStatus = (dateKey, choreIndex, choreTitle) => {\r
    const dayData = monthSchedule[dateKey];\r
    if (!dayData) return {\r
      who: "",\r
      done: false,\r
      kidsDone: {}\r
    };\r
    const s = dayData[choreIndex] || (choreTitle ? dayData[choreTitle] : null) || (choreTitle ? dayData[choreTitle.toLowerCase()] : null);\r
    if (!s) return {\r
      who: "",\r
      done: false,\r
      kidsDone: {}\r
    };\r
    return {\r
      who: s.who !== void 0 && s.who !== null ? String(s.who) : "",\r
      done: !!s.done,\r
      kidsDone: s.kidsDone || {}\r
    };\r
  };\r
  const getKidsPresentOnDate = dateKey => {\r
    const parsed = parseDateKey(dateKey);\r
    if (!parsed) return kidsList;\r
    const bwStatus = getBiWeeklyStatus(parsed.year, parsed.month, parsed.day);\r
    const areKidsInResidence = bwStatus.isFullStay || bwStatus.isDepartureDay;\r
    return kidsList.filter(kidName => {\r
      const member = getMember(kidName);\r
      if (member && member.type === "biweekly") {\r
        return areKidsInResidence;\r
      }\r
      return true;\r
    });\r
  };\r
  const handleToggleKidBedroom = (dateKey, choreIndex, kidName) => {\r
    const current = getChoreStatus(dateKey, choreIndex);\r
    const prevKids = current.kidsDone || {};\r
    const newKidState = !prevKids[kidName];\r
    const updatedKids = {\r
      ...{\r
        ...prevKids\r
      },\r
      [kidName]: newKidState\r
    };\r
    const presentKids = getKidsPresentOnDate(dateKey);\r
    const allPresentDone = presentKids.length > 0 && presentKids.every(k => updatedKids[k]);\r
    handleUpdateChore(dateKey, choreIndex, {\r
      kidsDone: updatedKids,\r
      done: allPresentDone,\r
      who: allPresentDone ? "All Kids" : "Each Child"\r
    });\r
  };\r
  const getWeeklyKidsStatus = (choreIndex, taskTitle) => {\r
    const result = {};\r
    allKidsList.forEach(k => {\r
      result[k] = false;\r
    });\r
    const cr = choreRows.find(r => {\r
      var _a2;\r
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === String(taskTitle).toLowerCase().trim();\r
    });\r
    if (cr && cr.row) {\r
      if (cr.row[2] === true || String(cr.row[2]).toLowerCase() === "true") result["Sydney"] = true;\r
      if (cr.row[4] === true || String(cr.row[4]).toLowerCase() === "true") result["Cadence"] = true;\r
      if (cr.row[6] === true || String(cr.row[6]).toLowerCase() === "true") result["Mason"] = true;\r
      if (cr.row[12] === true || String(cr.row[12]).toLowerCase() === "true") result["Koda"] = true;\r
      if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") result["Keyanna"] = true;\r
    }\r
    activeWeekDays.forEach(d => {\r
      const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);\r
      if (s.kidsDone) {\r
        Object.keys(s.kidsDone).forEach(k => {\r
          if (s.kidsDone[k]) result[k] = true;\r
        });\r
      }\r
      if (s.who === "All Kids" && s.done) {\r
        allKidsList.forEach(k => {\r
          var _a2;\r
          if (((_a2 = s.kidsDone) == null ? void 0 : _a2[k]) !== false) result[k] = true;\r
        });\r
      } else if (s.who && s.done) {\r
        const names = s.who.split(/[,&]+/).map(n => n.trim().toLowerCase());\r
        allKidsList.forEach(k => {\r
          if (names.includes(k.toLowerCase())) result[k] = true;\r
        });\r
      }\r
    });\r
    return result;\r
  };\r
  const handleToggleWeeklyKidChore = (choreIndex, kidName, taskTitle) => {\r
    const currentKidsDone = getWeeklyKidsStatus(choreIndex, taskTitle);\r
    const newKidState = !currentKidsDone[kidName];\r
    const updatedKids = {\r
      ...{\r
        ...currentKidsDone\r
      },\r
      [kidName]: newKidState\r
    };\r
    const doneCount = allKidsList.filter(k => updatedKids[k]).length;\r
    const allDone = doneCount === allKidsList.length && allKidsList.length > 0;\r
    const anyDone = doneCount > 0;\r
    let whoLabel = "Each Child";\r
    if (allDone) {\r
      whoLabel = "All Kids";\r
    } else if (anyDone) {\r
      const doneNames = allKidsList.filter(k => updatedKids[k]);\r
      whoLabel = doneNames.length <= 2 ? doneNames.join(" & ") : \`\${doneNames.length} Kids\`;\r
    }\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      activeWeekDays.forEach(d => {\r
        const curDay = next[d.dateKey] || {};\r
        const curChore = curDay[choreIndex] || {\r
          who: "",\r
          done: false,\r
          kidsDone: {}\r
        };\r
        next[d.dateKey] = {\r
          ...{\r
            ...curDay\r
          },\r
          [choreIndex]: {\r
            ...{\r
              ...curChore\r
            },\r
            who: whoLabel,\r
            done: anyDone,\r
            kidsDone: updatedKids\r
          }\r
        };\r
        if (taskTitle) {\r
          next[d.dateKey][taskTitle] = next[d.dateKey][choreIndex];\r
          next[d.dateKey][taskTitle.toLowerCase()] = next[d.dateKey][choreIndex];\r
        }\r
      });\r
      return next;\r
    });\r
    const pRowIdx = getPrintableRowIndex(taskTitle, choreIndex);\r
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {\r
      const updateRow = new Array(15).fill(void 0);\r
      const kLower = kidName.toLowerCase();\r
      if (kLower === "sydney") {\r
        updateRow[2] = newKidState;\r
      } else if (kLower === "koda") {\r
        updateRow[12] = newKidState;\r
      } else if (kLower === "keyanna") {\r
        updateRow[14] = newKidState;\r
      } else if (kLower === "cadence") {\r
        updateRow[4] = newKidState;\r
      } else if (kLower === "mason") {\r
        updateRow[6] = newKidState;\r
      }\r
      updateItem(printableRangeIndex, pRowIdx, updateRow);\r
    }\r
  };\r
  const handleSetAllKidsWeeklyChore = (choreIndex, taskTitle, allDoneState) => {\r
    const currentStatus = getWeeklyKidsStatus(choreIndex, taskTitle);\r
    const updatedKids = {\r
      ...currentStatus\r
    };\r
    const kidsToToggle = activeWeeklyKids.length > 0 ? activeWeeklyKids : ["Sydney"];\r
    kidsToToggle.forEach(k => {\r
      updatedKids[k] = allDoneState;\r
    });\r
    const whoLabel = allDoneState ? "All Kids" : "Each Child";\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      activeWeekDays.forEach(d => {\r
        const curDay = next[d.dateKey] || {};\r
        const curChore = curDay[choreIndex] || {\r
          who: "",\r
          done: false,\r
          kidsDone: {}\r
        };\r
        next[d.dateKey] = {\r
          ...{\r
            ...curDay\r
          },\r
          [choreIndex]: {\r
            ...{\r
              ...curChore\r
            },\r
            who: whoLabel,\r
            done: allDoneState,\r
            kidsDone: updatedKids\r
          }\r
        };\r
        if (taskTitle) {\r
          next[d.dateKey][taskTitle] = next[d.dateKey][choreIndex];\r
          next[d.dateKey][taskTitle.toLowerCase()] = next[d.dateKey][choreIndex];\r
        }\r
      });\r
      return next;\r
    });\r
    const pRowIdx = getPrintableRowIndex(taskTitle, choreIndex);\r
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[2] = allDoneState;\r
      if (isBiWeeklyHereThisWeek) {\r
        updateRow[4] = allDoneState;\r
        updateRow[6] = allDoneState;\r
      }\r
      updateRow[12] = allDoneState;\r
      updateRow[14] = allDoneState;\r
      updateItem(printableRangeIndex, pRowIdx, updateRow);\r
    }\r
  };\r
  const getSingleWeeklyStatus = (choreIndex, taskTitle) => {\r
    let who = "";\r
    let done = false;\r
    const cr = choreRows.find(r => {\r
      var _a2;\r
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === String(taskTitle).toLowerCase().trim();\r
    });\r
    if (cr && cr.row) {\r
      const isValidWhoString = val => {\r
        if (!val) return false;\r
        const s = String(val).trim();\r
        if (!s || s.startsWith("-") || s.startsWith("(") || s.startsWith("SG:") || s.startsWith("Done:") || s.startsWith("Parent Initials") || s.startsWith("___") || /^Who:\\s*_+$/i.test(s)) {\r
          return false;\r
        }\r
        return true;\r
      };\r
      const tLower = String(taskTitle || cr.task || "").toLowerCase();\r
      if (tLower.includes("basement") || tLower.includes("feeding station") || tLower.includes("deep clean") || tLower.includes("sign-off") || tLower.includes("curbside") || tLower.includes("recycling") || tLower.includes("waste")) {\r
        if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") done = true;\r
        const col9Text = String(cr.row[9] || "").replace(/^Who:\\s*/i, "").trim();\r
        const col1Text = String(cr.row[1] || "").trim();\r
        const candidateText = isValidWhoString(col9Text) ? col9Text : isValidWhoString(col1Text) ? col1Text : "";\r
        if (candidateText) {\r
          const matchWho = familyMembers.find(m => candidateText.toLowerCase().includes(m.name.toLowerCase()));\r
          if (matchWho) who = matchWho.name;\r
          else if (candidateText.toLowerCase().includes("parents")) who = "Parents";\r
          else who = candidateText;\r
        }\r
      }\r
      for (let dayIdx = 6; dayIdx >= 0; dayIdx--) {\r
        const w = cr.row[1 + dayIdx * 2];\r
        const d = cr.row[2 + dayIdx * 2];\r
        if (isValidWhoString(w) && !who) who = String(w).replace(/^Who:\\s*/i, "").trim();\r
        if ((d === true || String(d).toLowerCase() === "true") && !done) done = true;\r
      }\r
    }\r
    if (activeWeekDays && activeWeekDays.length > 0) {\r
      for (let i = activeWeekDays.length - 1; i >= 0; i--) {\r
        const d = activeWeekDays[i];\r
        const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);\r
        if (s.who && !who) who = s.who;\r
        if (s.done) done = true;\r
      }\r
    }\r
    if (!isBiWeeklyHereThisWeek && (who === "Cadence" || who === "Mason")) {\r
      who = "";\r
    }\r
    return {\r
      who,\r
      done\r
    };\r
  };\r
  const handleUpdateSingleWeeklyChore = (choreIndex, taskTitle, patch) => {\r
    const current = getSingleWeeklyStatus(choreIndex, taskTitle);\r
    const updatedWho = "who" in patch ? patch.who : current.who;\r
    const updatedDone = "done" in patch ? patch.done : current.done;\r
    const tLower = String(taskTitle || "").toLowerCase();\r
    const cKey = getChoreCanonicalKey(taskTitle);\r
    const dayOffset = tLower.includes("recycling") || tLower.includes("waste") || tLower.includes("curbside") ? 3 : tLower.includes("basement") || tLower.includes("saturday") ? 5 : 6;\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      activeWeekDays.forEach(d => {\r
        const curDay = next[d.dateKey] || {};\r
        const curChore = curDay[choreIndex] || {\r
          who: "",\r
          done: false,\r
          kidsDone: {}\r
        };\r
        const updatedEntry = {\r
          ...{\r
            ...curChore\r
          },\r
          who: updatedWho,\r
          done: updatedDone\r
        };\r
        next[d.dateKey] = {\r
          ...{\r
            ...curDay\r
          },\r
          [choreIndex]: updatedEntry\r
        };\r
        if (taskTitle) {\r
          next[d.dateKey][taskTitle] = updatedEntry;\r
          next[d.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;\r
        }\r
        if (cKey) {\r
          next[d.dateKey][cKey] = updatedEntry;\r
        }\r
      });\r
      return next;\r
    });\r
    setChoreEdits(prev => {\r
      const cur = prev[choreIndex] || {};\r
      const targetChore = choreRows.find(r => r.index_ === choreIndex);\r
      const existingRow = [...(cur.row || (targetChore == null ? void 0 : targetChore.row) || new Array(15).fill(""))];\r
      const whoCol = 1 + dayOffset * 2;\r
      const doneCol = 2 + dayOffset * 2;\r
      if ("who" in patch) existingRow[whoCol] = updatedWho;\r
      if ("done" in patch) existingRow[doneCol] = updatedDone;\r
      const tKey = String(taskTitle || (targetChore == null ? void 0 : targetChore.task) || "").toLowerCase().trim();\r
      const updatedObj = {\r
        ...{\r
          ...cur\r
        },\r
        row: existingRow,\r
        rotationGroup: updatedWho,\r
        who: updatedWho\r
      };\r
      return {\r
        ...{\r
          ...{\r
            ...{\r
              ...prev\r
            },\r
            [choreIndex]: updatedObj\r
          },\r
          ...(tKey ? {\r
            [tKey]: updatedObj\r
          } : {})\r
        },\r
        ...(cKey ? {\r
          [cKey]: updatedObj\r
        } : {})\r
      };\r
    });\r
    const pRow = findPrintableRow(taskTitle);\r
    if (printableRangeIndex >= 0 && pRow) {\r
      const pRowIdx = pRow.index_;\r
      const updateRow = new Array(15).fill(void 0);\r
      if (cKey === "clean_basement" || cKey === "feeding_station_deep_clean" || cKey === "curbside_recycling" || cKey === "curbside_waste") {\r
        if ("who" in patch) updateRow[9] = updatedWho ? \`Who: \${updatedWho}\` : "Who: _____________________";\r
        if ("done" in patch) updateRow[14] = updatedDone;\r
      } else if (cKey === "weekly_sign_off") {\r
        if ("who" in patch) updateRow[9] = updatedWho;\r
        if ("done" in patch) updateRow[14] = updatedDone;\r
      } else {\r
        const whoCol = 1 + dayOffset * 2;\r
        const doneCol = 2 + dayOffset * 2;\r
        if ("who" in patch) updateRow[whoCol] = updatedWho;\r
        if ("done" in patch) updateRow[doneCol] = updatedDone;\r
      }\r
      updateItem(printableRangeIndex, pRowIdx, updateRow);\r
    }\r
    const hRowIdx = getHubRowIndex(taskTitle, choreIndex);\r
    if (hubRangeIndex >= 0 && "who" in patch && hRowIdx !== void 0 && hRowIdx !== null) {\r
      const updateHub = new Array(12).fill(void 0);\r
      updateHub[7] = updatedWho;\r
      updateItem(hubRangeIndex, hRowIdx, updateHub);\r
    }\r
    setNotice(\`Updated "\${taskTitle || "Chore"}": Assigned to \${updatedWho || "unassigned"}\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const signOffChore = useMemo(() => {\r
    return choreRows.find(cr => {\r
      var _a2;\r
      return isSignOffChore(cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]));\r
    }) || {\r
      index_: 12,\r
      task: "Weekly Sign-Off & Inspection",\r
      rotationGroup: "Parents",\r
      category: "Administration"\r
    };\r
  }, [choreRows]);\r
  const signOffStatus = useMemo(() => {\r
    return getSingleWeeklyStatus(signOffChore == null ? void 0 : signOffChore.index_, signOffChore == null ? void 0 : signOffChore.task);\r
  }, [signOffChore, monthSchedule, activeWeekDays]);\r
  const handleToggleWeeklySignOff = () => {\r
    if (!signOffChore) return;\r
    const current = getSingleWeeklyStatus(signOffChore.index_, signOffChore.task);\r
    const nextDone = !current.done;\r
    const nextWho = current.who || "Parents";\r
    handleUpdateSingleWeeklyChore(signOffChore.index_, signOffChore.task, {\r
      done: nextDone,\r
      who: nextWho\r
    });\r
    setNotice(nextDone ? "Weekly Sign-Off & Inspection completed and verified for the week!" : "Weekly Sign-Off reset to pending.");\r
    setTimeout(() => setNotice(null), 3500);\r
  };\r
  const handleToggleKidChore = (dateKey, choreIndex, kidName, taskTitle, dayIdx) => {\r
    const current = getChoreStatus(dateKey, choreIndex, taskTitle);\r
    const prevKids = current.kidsDone || {};\r
    const newKidState = !prevKids[kidName];\r
    const updatedKids = {\r
      ...{\r
        ...prevKids\r
      },\r
      [kidName]: newKidState\r
    };\r
    const doneCount = allKidsList.filter(k => updatedKids[k]).length;\r
    const allDone = doneCount === allKidsList.length && allKidsList.length > 0;\r
    const anyDone = doneCount > 0;\r
    let whoLabel = "Each Child";\r
    if (allDone) {\r
      whoLabel = "All Kids";\r
    } else if (anyDone) {\r
      const doneNames = allKidsList.filter(k => updatedKids[k]);\r
      whoLabel = doneNames.length <= 2 ? doneNames.join(" & ") : \`\${doneNames.length} Kids\`;\r
    }\r
    setMonthSchedule(prev => {\r
      const curDay = prev[dateKey] || {};\r
      const curChore = curDay[choreIndex] || {\r
        who: "",\r
        done: false,\r
        kidsDone: {}\r
      };\r
      return {\r
        ...{\r
          ...prev\r
        },\r
        [dateKey]: {\r
          ...{\r
            ...curDay\r
          },\r
          [choreIndex]: {\r
            ...{\r
              ...curChore\r
            },\r
            who: whoLabel,\r
            done: anyDone,\r
            kidsDone: updatedKids\r
          }\r
        }\r
      };\r
    });\r
    if (printableRangeIndex >= 0 && dayIdx !== void 0) {\r
      const whoCol = 1 + dayIdx * 2;\r
      const doneCol = 2 + dayIdx * 2;\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[whoCol] = whoLabel;\r
      updateRow[doneCol] = anyDone;\r
      updateItem(printableRangeIndex, choreIndex, updateRow);\r
    }\r
  };\r
  const handleUpdateChore = (dateKey, choreIndex, patch) => {\r
    var _a2;\r
    const targetChore = choreRows.find(r => r.index_ === choreIndex);\r
    const choreTask = (targetChore == null ? void 0 : targetChore.task) || "";\r
    const norm = normalizeTaskName(choreTask);\r
    setMonthSchedule(prev => {\r
      const currentDay = prev[dateKey] || {};\r
      const currentChore = currentDay[choreIndex] || (norm ? currentDay[norm] : null) || {\r
        who: "",\r
        done: false\r
      };\r
      const updated = {\r
        ...{\r
          ...currentChore\r
        },\r
        ...patch\r
      };\r
      const nextDay = {\r
        ...{\r
          ...currentDay\r
        },\r
        [choreIndex]: updated\r
      };\r
      if (choreTask) nextDay[choreTask] = updated;\r
      if (norm) nextDay[norm] = updated;\r
      return {\r
        ...{\r
          ...prev\r
        },\r
        [dateKey]: nextDay\r
      };\r
    });\r
    const pRow = findPrintableRow(choreTask, choreIndex);\r
    if (printableRangeIndex >= 0 && pRow) {\r
      const parsedStart = parseDateKey(activeSyncWeek);\r
      const parsedTarget = parseDateKey(dateKey);\r
      if (parsedStart && parsedTarget) {\r
        const startDateObj = new Date(parsedStart.year, parsedStart.month, parsedStart.day);\r
        const targetDateObj = new Date(parsedTarget.year, parsedTarget.month, parsedTarget.day);\r
        const diffTime = targetDateObj.getTime() - startDateObj.getTime();\r
        const diffDays = Math.round(diffTime / (1e3 * 3600 * 24));\r
        if (diffDays >= 0 && diffDays < 7) {\r
          const whoCol = 1 + diffDays * 2;\r
          const doneCol = 2 + diffDays * 2;\r
          const updateArray = new Array(15).fill(void 0);\r
          updateArray[0] = choreTask || ((_a2 = pRow.row) == null ? void 0 : _a2[0]);\r
          if ("who" in patch) {\r
            updateArray[whoCol] = patch.who;\r
          }\r
          if ("done" in patch) {\r
            updateArray[doneCol] = patch.done;\r
          }\r
          updateItem(printableRangeIndex, pRow.index_, updateArray);\r
        }\r
      }\r
    }\r
  };\r
  const handleUpdatePrintableCell = (rowIndex_, dayIdx, field, value, taskTitle) => {\r
    var _a2, _b2, _c2;\r
    const colIdx = field === "who" ? 1 + dayIdx * 2 : 2 + dayIdx * 2;\r
    const parsedStart = parseDateKey(activeSyncWeek) || {\r
      year: 2026,\r
      month: 9,\r
      day: 12\r
    };\r
    const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx, 12, 0, 0);\r
    const dateKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());\r
    const tTitle = taskTitle || ((_a2 = choreRows.find(r => r.index_ === rowIndex_)) == null ? void 0 : _a2.task) || "";\r
    const cKey = getChoreCanonicalKey(tTitle);\r
    setMonthSchedule(prev => {\r
      const curDay = prev[dateKey] || {};\r
      const curChore = curDay[rowIndex_] || (tTitle ? curDay[tTitle] : null) || (cKey ? curDay[cKey] : null) || {\r
        who: "",\r
        done: false,\r
        kidsDone: {}\r
      };\r
      const updatedChore = {\r
        ...{\r
          ...curChore\r
        },\r
        [field]: value\r
      };\r
      const nextDay = {\r
        ...{\r
          ...curDay\r
        },\r
        [rowIndex_]: updatedChore\r
      };\r
      if (tTitle) {\r
        nextDay[tTitle] = updatedChore;\r
        nextDay[tTitle.toLowerCase().trim()] = updatedChore;\r
      }\r
      if (cKey) {\r
        nextDay[cKey] = updatedChore;\r
      }\r
      return {\r
        ...{\r
          ...prev\r
        },\r
        [dateKey]: nextDay\r
      };\r
    });\r
    setChoreEdits(prev => {\r
      const cur = prev[rowIndex_] || (tTitle ? prev[tTitle.toLowerCase().trim()] : null) || (cKey ? prev[cKey] : null) || {};\r
      const targetChore = choreRows.find(r => {\r
        var _a3;\r
        return r.index_ === rowIndex_ || tTitle && String(r.task || ((_a3 = r.row) == null ? void 0 : _a3[0]) || "").toLowerCase().trim() === tTitle.toLowerCase().trim();\r
      });\r
      const existingRow = [...(cur.row || (targetChore == null ? void 0 : targetChore.row) || new Array(15).fill(""))];\r
      existingRow[colIdx] = value;\r
      const updatedObj = {\r
        ...{\r
          ...{\r
            ...cur\r
          },\r
          row: existingRow\r
        },\r
        ...(field === "who" ? {\r
          who: value\r
        } : {\r
          done: value\r
        })\r
      };\r
      const nextEdits = {\r
        ...{\r
          ...prev\r
        },\r
        [rowIndex_]: updatedObj\r
      };\r
      if (tTitle) {\r
        nextEdits[tTitle.toLowerCase().trim()] = updatedObj;\r
      }\r
      if (cKey) {\r
        nextEdits[cKey] = updatedObj;\r
      }\r
      return nextEdits;\r
    });\r
    const pRow = findPrintableRow(tTitle, rowIndex_);\r
    if (printableRangeIndex >= 0 && pRow) {\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[colIdx] = value;\r
      updateItem(printableRangeIndex, pRow.index_, updateRow);\r
    }\r
    const hRow = findHubChoreRow(tTitle, rowIndex_);\r
    if (hubRangeIndex >= 0 && field === "who" && hRow) {\r
      const updateHub = new Array(12).fill(void 0);\r
      updateHub[7] = value;\r
      updateItem(hubRangeIndex, hRow.index_, updateHub);\r
    }\r
    setNotice(field === "who" ? \`Assigned "\${tTitle || "Chore"}" (\${(_b2 = DAY_STYLES[dayIdx]) == null ? void 0 : _b2.name}) to \${value || "unassigned"}\` : \`Marked "\${tTitle || "Chore"}" (\${(_c2 = DAY_STYLES[dayIdx]) == null ? void 0 : _c2.name}) as \${value ? "completed \\u2713" : "pending"}\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleSetSyncWeek = week => {\r
    var _a2;\r
    if (!week || week.length === 0) return;\r
    const monday = week[0];\r
    if (!monday) return;\r
    const newStartDateStr = monday.dateKey;\r
    setActiveSyncWeek(newStartDateStr);\r
    setSelectedYear(monday.year);\r
    setSelectedMonth(monday.month);\r
    const fullWeek = week.length === 7 ? week : getWeekDaysForDate(monday.year, monday.month, monday.day);\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
        const d = fullWeek[dayOffset];\r
        if (!d) continue;\r
        if (!next[d.dateKey]) next[d.dateKey] = {};\r
        choreRows.forEach(cr => {\r
          var _a3, _b2, _c2;\r
          if (!next[d.dateKey][cr.index_]) {\r
            const whoCol = 1 + dayOffset * 2;\r
            const doneCol = 2 + dayOffset * 2;\r
            const rawWho = (_a3 = cr.row) == null ? void 0 : _a3[whoCol];\r
            const whoVal = rawWho !== void 0 && rawWho !== null ? String(rawWho) : "";\r
            const doneVal = ((_b2 = cr.row) == null ? void 0 : _b2[doneCol]) === true || String((_c2 = cr.row) == null ? void 0 : _c2[doneCol]).toLowerCase() === "true";\r
            next[d.dateKey][cr.index_] = {\r
              who: whoVal,\r
              done: doneVal,\r
              kidsDone: {}\r
            };\r
          }\r
        });\r
      }\r
      return next;\r
    });\r
    if (printableRangeIndex >= 0) {\r
      choreRows.forEach(cr => {\r
        var _a3;\r
        const rowUpdates = new Array(15).fill(void 0);\r
        let hasChanges = false;\r
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
          const d = fullWeek[dayOffset];\r
          if (d && ((_a3 = monthSchedule[d.dateKey]) == null ? void 0 : _a3[cr.index_])) {\r
            const s = monthSchedule[d.dateKey][cr.index_];\r
            rowUpdates[1 + dayOffset * 2] = s.who || "";\r
            rowUpdates[2 + dayOffset * 2] = s.done ? true : false;\r
            hasChanges = true;\r
          }\r
        }\r
        if (hasChanges) {\r
          updateItem(printableRangeIndex, cr.index_, rowUpdates);\r
        }\r
      });\r
    }\r
    if (hubRangeIndex >= 0) {\r
      const configRow = (_a2 = hubSheet == null ? void 0 : hubSheet.data) == null ? void 0 : _a2.find(r => r.row && String(r.row[6] || "").toLowerCase().includes("active week"));\r
      if (configRow) {\r
        const updateRow = new Array(9).fill(void 0);\r
        updateRow[7] = newStartDateStr;\r
        updateItem(hubRangeIndex, configRow.index_, updateRow);\r
      }\r
    }\r
    setNotice(\`Synced active week to \${newStartDateStr} (\${fullWeek[0].dateKey} \\u2013 \${fullWeek[6].dateKey})\`);\r
    setTimeout(() => setNotice(null), 3500);\r
  };\r
  const handleAddNewMasterChore = choreData => {\r
    var _a2, _b2, _c2, _d, _e;\r
    const {\r
      task,\r
      category = "Household",\r
      frequency = "Daily",\r
      targetDay = "Mon \\u2013 Sun",\r
      rotationGroup = "All Non-Casual",\r
      notes = ""\r
    } = choreData;\r
    if (!task || !task.trim()) return;\r
    const cleanTask = task.trim();\r
    const cleanNorm = normalizeTaskName(cleanTask);\r
    const isDaily = frequency.toLowerCase().includes("daily");\r
    const existingP = findPrintableRow(cleanTask);\r
    if (existingP && printableRangeIndex >= 0) {\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[0] = cleanTask;\r
      if (rotationGroup) updateRow[1] = rotationGroup === "Each Child" ? "Each Child" : rotationGroup;\r
      updateItem(printableRangeIndex, existingP.index_, updateRow);\r
    } else if (printableRangeIndex >= 0) {\r
      const newPrintableRow = [cleanTask, rotationGroup === "Each Child" ? "Each Child" : rotationGroup || "", false, "", false, "", false, "", false, "", false, "", false, "", false];\r
      let insertPIdx = void 0;\r
      if (isDaily) {\r
        const weeklyRow = (_a2 = printableSheet.data) == null ? void 0 : _a2.find(r => r.index_ >= 4 && r.row && (normalizeTaskName(r.row[0]).includes("clean basement") || normalizeTaskName(r.row[0]).includes("once a week")));\r
        insertPIdx = weeklyRow ? weeklyRow.index_ : void 0;\r
      } else {\r
        const footerRow = (_b2 = printableSheet.data) == null ? void 0 : _b2.find(r => r.index_ >= 8 && r.row && (String(r.row[0] || "").toLowerCase().includes("pet care") || String(r.row[0] || "").startsWith("\\u2022")));\r
        insertPIdx = footerRow ? footerRow.index_ : void 0;\r
      }\r
      insertItem(printableRangeIndex, insertPIdx, newPrintableRow);\r
    }\r
    const existingH = findHubChoreRow(cleanTask);\r
    const newHubRow = new Array(12).fill(void 0);\r
    newHubRow[6] = cleanTask;\r
    newHubRow[7] = rotationGroup || "All Non-Casual";\r
    newHubRow[8] = frequency;\r
    newHubRow[9] = targetDay;\r
    newHubRow[10] = notes;\r
    newHubRow[11] = category;\r
    if (existingH && hubRangeIndex >= 0) {\r
      updateItem(hubRangeIndex, existingH.index_, newHubRow);\r
      (_c2 = hubSheet.data) == null ? void 0 : _c2.forEach(r => {\r
        if (r.index_ !== existingH.index_ && r.row && normalizeTaskName(r.row[6]) === cleanNorm) {\r
          if (r.row[0]) {\r
            const clearRow = new Array(12).fill(void 0);\r
            clearRow[6] = "";\r
            clearRow[7] = "";\r
            clearRow[8] = "";\r
            clearRow[9] = "";\r
            clearRow[10] = "";\r
            clearRow[11] = "";\r
            updateItem(hubRangeIndex, r.index_, clearRow);\r
          } else {\r
            deleteItem(hubRangeIndex, r.index_);\r
          }\r
        }\r
      });\r
    } else if (hubRangeIndex >= 0) {\r
      const emptyChoreRow = (_d = hubSheet.data) == null ? void 0 : _d.find(r => r.index_ >= 5 && r.index_ < 17 && (!r.row || !r.row[6] || String(r.row[6]).trim() === ""));\r
      if (emptyChoreRow) {\r
        updateItem(hubRangeIndex, emptyChoreRow.index_, newHubRow);\r
      } else {\r
        const configRow = (_e = hubSheet.data) == null ? void 0 : _e.find(r => r.row && String(r.row[6] || "").toLowerCase().includes("schedule configuration"));\r
        const insertHubIdx = configRow ? configRow.index_ : void 0;\r
        insertItem(hubRangeIndex, insertHubIdx, newHubRow);\r
      }\r
    }\r
    const fLower = frequency.toLowerCase();\r
    const tLower = targetDay.toLowerCase();\r
    const freqType = fLower.includes("bi-weekly") || fLower.includes("biweekly") ? "biweekly" : fLower.includes("weekly") || fLower.includes("once") ? "weekly" : "daily";\r
    const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : 5;\r
    const resolvedIndex = existingP ? existingP.index_ : existingH ? existingH.index_ : 2e3 + Date.now() % 1e5;\r
    const newChoreObj = {\r
      index_: resolvedIndex,\r
      task: cleanTask,\r
      category,\r
      frequency,\r
      targetDay,\r
      rotationGroup: rotationGroup || "All Non-Casual",\r
      notes,\r
      source: "user_added",\r
      row: [cleanTask, rotationGroup || "", false, "", false, "", false, "", false, "", false, "", false, "", false]\r
    };\r
    if (!existingH && !existingP) {\r
      setCustomMasterChores(prev => [...prev, newChoreObj]);\r
      setCustomAddedChores(prev => [...prev, newChoreObj]);\r
    }\r
    setDeletedChoreKeys(prev => {\r
      const next = new Set(prev);\r
      next.delete(cleanNorm);\r
      next.delete(cleanTask.toLowerCase().trim());\r
      return next;\r
    });\r
    setChoreOrderOverrides(prev => prev ? [...prev, normalizeTaskName(cleanTask)] : null);\r
    setChoreFrequencies(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      [cleanTask]: {\r
        frequency: freqType,\r
        dayOfWeek: dayIdx\r
      }\r
    }));\r
    setShowInlineAddForm(false);\r
    setShowNewChoreModal(false);\r
    setShowAddRemoveChoreModal(false);\r
    setNewMasterDraft({\r
      task: "",\r
      category: "Household",\r
      frequency: "Daily",\r
      targetDay: "Mon \\u2013 Sun",\r
      rotationGroup: "All Non-Casual",\r
      notes: ""\r
    });\r
    setNotice(\`Added "\${cleanTask}" to schedule and master registry!\`);\r
    setTimeout(() => setNotice(null), 3500);\r
  };\r
  const handleAddNewChore = (choreName, details = {}) => {\r
    var _a2;\r
    if (!choreName || !choreName.trim()) return;\r
    const cleanName = choreName.trim();\r
    const defWho = details.defaultWho || "All Non-Casual";\r
    const freqVal = details.frequency || "daily";\r
    const dayVal = details.dayOfWeek !== void 0 ? details.dayOfWeek : 5;\r
    const freqType = freqVal === "weekly" ? "Once a Week" : freqVal === "biweekly" ? "Bi-Weekly" : "Daily";\r
    const targetDayVal = freqVal === "weekly" ? (_a2 = DAY_STYLES[dayVal]) == null ? void 0 : _a2.name : freqVal === "biweekly" ? "Thursday Evening" : "Mon \\u2013 Sun";\r
    const choreCat = details.category || "Household";\r
    handleAddNewMasterChore({\r
      task: cleanName,\r
      category: choreCat,\r
      frequency: freqType,\r
      targetDay: targetDayVal,\r
      rotationGroup: defWho,\r
      notes: details.notes || ""\r
    });\r
  };\r
  const handleUpdateMasterChore = (choreIndex, patch) => {\r
    var _a2, _b2;\r
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === choreIndex);\r
    const oldTitle = patch.oldTask || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) || patch.task;\r
    const hRowIdx = getHubRowIndex(oldTitle, choreIndex);\r
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {\r
      const updateRow = new Array(12).fill(void 0);\r
      updateRow[6] = patch.task || oldTitle || "";\r
      if ("rotationGroup" in patch) updateRow[7] = patch.rotationGroup;\r
      if ("frequency" in patch) updateRow[8] = patch.frequency;\r
      if ("targetDay" in patch) updateRow[9] = patch.targetDay;\r
      if ("notes" in patch) updateRow[10] = patch.notes;\r
      if ("category" in patch) updateRow[11] = patch.category;\r
      updateItem(hubRangeIndex, hRowIdx, updateRow);\r
    }\r
    setCustomMasterChores(prev => prev.map(cmc => {\r
      if (cmc.index_ === choreIndex || normalizeTaskName(cmc.task) === normalizeTaskName(oldTitle)) {\r
        return {\r
          ...cmc,\r
          ...patch,\r
          task: patch.task || cmc.task\r
        };\r
      }\r
      return cmc;\r
    }));\r
    if (patch.task && oldTitle && normalizeTaskName(patch.task) !== normalizeTaskName(oldTitle)) {\r
      const oldNorm = normalizeTaskName(oldTitle);\r
      const newNorm = normalizeTaskName(patch.task);\r
      setChoreOrderOverrides(prev => prev ? prev.map(k => k === oldNorm ? newNorm : k) : null);\r
    }\r
    const pRowIdx = getPrintableRowIndex(oldTitle);\r
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {\r
      const updateP = new Array(15).fill(void 0);\r
      if ("task" in patch) updateP[0] = patch.task;\r
      if ("notes" in patch) updateP[1] = patch.notes;\r
      if ("task" in patch || "notes" in patch) {\r
        updateItem(printableRangeIndex, pRowIdx, updateP);\r
      }\r
    }\r
    if (patch.frequency || patch.targetDay) {\r
      const taskName = patch.task || oldTitle || "";\r
      if (taskName) {\r
        const fLower = String(patch.frequency || "").toLowerCase();\r
        const tLower = String(patch.targetDay || "").toLowerCase();\r
        const freqType = fLower.includes("bi-weekly") || fLower.includes("biweekly") ? "biweekly" : fLower.includes("weekly") || fLower.includes("once") ? "weekly" : "daily";\r
        const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : tLower.includes("friday") ? 4 : 5;\r
        setChoreFrequencies(prev => ({\r
          ...{\r
            ...prev\r
          },\r
          [taskName]: {\r
            frequency: freqType,\r
            dayOfWeek: dayIdx\r
          }\r
        }));\r
      }\r
    }\r
    setEditingMasterIndex(null);\r
    setMasterInlineDraft(null);\r
    setNotice(\`Updated "\${patch.task || oldTitle || "chore"}" in schedule and master registry!\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleDeleteMasterChore = (choreIndex, taskTitle) => {\r
    var _a2;\r
    const norm = normalizeTaskName(taskTitle);\r
    if (hubRangeIndex >= 0) {\r
      (_a2 = hubSheet.data) == null ? void 0 : _a2.forEach(r => {\r
        if (r.index_ < 5 || !r.row || !r.row[6]) return;\r
        if (normalizeTaskName(r.row[6]) === norm || r.index_ === choreIndex) {\r
          if (r.row[0]) {\r
            const clearRow = new Array(12).fill(void 0);\r
            clearRow[6] = "";\r
            clearRow[7] = "";\r
            clearRow[8] = "";\r
            clearRow[9] = "";\r
            clearRow[10] = "";\r
            clearRow[11] = "";\r
            updateItem(hubRangeIndex, r.index_, clearRow);\r
          } else {\r
            deleteItem(hubRangeIndex, r.index_);\r
          }\r
        }\r
      });\r
    }\r
    const pRow = findPrintableRow(taskTitle);\r
    if (printableRangeIndex >= 0 && pRow) {\r
      deleteItem(printableRangeIndex, pRow.index_);\r
    }\r
    const cleanTitle = String(taskTitle || "").toLowerCase().trim();\r
    setCustomMasterChores(prev => prev.filter(c => c.index_ !== choreIndex && (!cleanTitle || c.task.toLowerCase().trim() !== cleanTitle)));\r
    setDeletedChoreKeys(prev => {\r
      const next = new Set(prev);\r
      if (choreIndex !== void 0 && choreIndex !== null) next.add(String(choreIndex));\r
      if (cleanTitle) next.add(cleanTitle);\r
      return next;\r
    });\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      Object.keys(next).forEach(dKey => {\r
        if (next[dKey] && next[dKey][choreIndex]) {\r
          const dayCopy = {\r
            ...next[dKey]\r
          };\r
          delete dayCopy[choreIndex];\r
          next[dKey] = dayCopy;\r
        }\r
      });\r
      return next;\r
    });\r
    if (editingMasterIndex === choreIndex) {\r
      setEditingMasterIndex(null);\r
      setMasterInlineDraft(null);\r
    }\r
    setNotice(\`Removed "\${taskTitle || "chore"}" from Household Hub Master Chore Registry\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleSavePrintableChoreEdit = (choreIndex, editData) => {\r
    var _a2, _b2;\r
    const cleanTitle = (editData.task || "").trim();\r
    if (!cleanTitle) return;\r
    const oldTitle = editData.oldTask || cleanTitle;\r
    setChoreEdits(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      next[choreIndex] = {\r
        ...{\r
          ...editData\r
        },\r
        task: cleanTitle\r
      };\r
      if (oldTitle) {\r
        next[String(oldTitle).toLowerCase().trim()] = {\r
          ...{\r
            ...editData\r
          },\r
          task: cleanTitle\r
        };\r
      }\r
      next[cleanTitle.toLowerCase().trim()] = {\r
        ...{\r
          ...editData\r
        },\r
        task: cleanTitle\r
      };\r
      return next;\r
    });\r
    const freqType = editData.frequency === "Once a Week" ? "weekly" : editData.frequency === "Bi-Weekly" ? "biweekly" : "daily";\r
    const dayIdx = editData.dayOfWeek !== void 0 ? editData.dayOfWeek : ((_a2 = editData.targetDay) == null ? void 0 : _a2.toLowerCase().includes("sunday")) ? 6 : ((_b2 = editData.targetDay) == null ? void 0 : _b2.toLowerCase().includes("thursday")) ? 3 : 5;\r
    setChoreFrequencies(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      [cleanTitle]: {\r
        frequency: freqType,\r
        dayOfWeek: dayIdx\r
      },\r
      [choreIndex]: {\r
        frequency: freqType,\r
        dayOfWeek: dayIdx\r
      }\r
    }));\r
    if (editData.task && oldTitle && normalizeTaskName(editData.task) !== normalizeTaskName(oldTitle)) {\r
      const oldNorm = normalizeTaskName(oldTitle);\r
      const newNorm = normalizeTaskName(editData.task);\r
      setChoreOrderOverrides(prev => prev ? prev.map(k => k === oldNorm ? newNorm : k) : null);\r
    }\r
    const pRowIdx = getPrintableRowIndex(oldTitle);\r
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[0] = cleanTitle;\r
      if (editData.notes !== void 0) updateRow[1] = editData.notes;\r
      updateItem(printableRangeIndex, pRowIdx, updateRow);\r
    }\r
    const hRowIdx = getHubRowIndex(oldTitle, choreIndex);\r
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {\r
      const updateRow = new Array(12).fill(void 0);\r
      updateRow[6] = cleanTitle;\r
      if (editData.rotationGroup) updateRow[7] = editData.rotationGroup;\r
      if (editData.frequency) updateRow[8] = editData.frequency;\r
      if (editData.targetDay) updateRow[9] = editData.targetDay;\r
      if (editData.notes !== void 0) updateRow[10] = editData.notes;\r
      if (editData.category) updateRow[11] = editData.category;\r
      updateItem(hubRangeIndex, hRowIdx, updateRow);\r
    }\r
    if (oldTitle && oldTitle !== cleanTitle) {\r
      setMonthSchedule(prev => {\r
        const next = {\r
          ...prev\r
        };\r
        Object.keys(next).forEach(dKey => {\r
          if (next[dKey] && next[dKey][oldTitle]) {\r
            const dayCopy = {\r
              ...next[dKey]\r
            };\r
            dayCopy[cleanTitle] = dayCopy[oldTitle];\r
            dayCopy[cleanTitle.toLowerCase()] = dayCopy[oldTitle];\r
            next[dKey] = dayCopy;\r
          }\r
        });\r
        return next;\r
      });\r
    }\r
    setEditingPrintableChore(null);\r
    setNotice(\`Updated chore: "\${cleanTitle}"\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleDeletePrintableChore = (choreIndex, taskTitle) => {\r
    var _a2, _b2;\r
    const title = taskTitle || "";\r
    setDeletedChoreKeys(prev => {\r
      const next = new Set(prev);\r
      if (choreIndex !== void 0 && choreIndex !== null) next.add(String(choreIndex));\r
      if (title) next.add(title.toLowerCase().trim());\r
      return next;\r
    });\r
    const pRowIdx = getPrintableRowIndex(title, choreIndex);\r
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {\r
      deleteItem(printableRangeIndex, pRowIdx);\r
    }\r
    const hRowIdx = getHubRowIndex(title, choreIndex);\r
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {\r
      const existingRow = (_a2 = hubSheet.data) == null ? void 0 : _a2.find(r => r.index_ === hRowIdx);\r
      if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) {\r
        const clearRow = new Array(12).fill(void 0);\r
        clearRow[6] = "";\r
        clearRow[7] = "";\r
        clearRow[8] = "";\r
        clearRow[9] = "";\r
        clearRow[10] = "";\r
        clearRow[11] = "";\r
        updateItem(hubRangeIndex, hRowIdx, clearRow);\r
      } else {\r
        deleteItem(hubRangeIndex, hRowIdx);\r
      }\r
    }\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      Object.keys(next).forEach(dKey => {\r
        if (next[dKey]) {\r
          const dayCopy = {\r
            ...next[dKey]\r
          };\r
          if (choreIndex !== void 0) delete dayCopy[choreIndex];\r
          if (title) {\r
            delete dayCopy[title];\r
            delete dayCopy[title.toLowerCase().trim()];\r
          }\r
          next[dKey] = dayCopy;\r
        }\r
      });\r
      return next;\r
    });\r
    setDeletingChoreTarget(null);\r
    if (editingPrintableChore && editingPrintableChore.index_ === choreIndex) {\r
      setEditingPrintableChore(null);\r
    }\r
    setNotice(\`Removed chore: "\${title || "Chore"}" from schedule\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleDeleteChore = (choreIndex, name) => {\r
    handleDeletePrintableChore(choreIndex, name);\r
  };\r
  const handleBatchDeleteChores = () => {\r
    if (selectedRemoveIndices.length === 0) return;\r
    const count = selectedRemoveIndices.length;\r
    selectedRemoveIndices.forEach(idx => {\r
      var _a2;\r
      const cr = choreRows.find(r => r.index_ === idx);\r
      handleDeletePrintableChore(idx, (cr == null ? void 0 : cr.task) || ((_a2 = cr == null ? void 0 : cr.row) == null ? void 0 : _a2[0]) || "");\r
    });\r
    setSelectedRemoveIndices([]);\r
    setShowAddRemoveChoreModal(false);\r
    setNotice(\`Successfully removed \${count} chore(s) from master list\`);\r
    setTimeout(() => setNotice(null), 3500);\r
  };\r
  const handleRenameChore = (choreIndex, newName) => {\r
    if (!newName || !newName.trim()) return;\r
    const clean = newName.trim();\r
    if (printableRangeIndex >= 0) {\r
      const updateRow = new Array(15).fill(void 0);\r
      updateRow[0] = clean;\r
      updateItem(printableRangeIndex, choreIndex, updateRow);\r
    }\r
    setChoreEdits(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      [choreIndex]: {\r
        ...{\r
          ...(prev[choreIndex] || {})\r
        },\r
        task: clean\r
      }\r
    }));\r
  };\r
  const handleStartEditChore = chore => {\r
    var _a2, _b2;\r
    const title = chore.task || ((_a2 = chore.row) == null ? void 0 : _a2[0]) || "";\r
    const freq = getChoreFreq(chore);\r
    setEditingChoreIndex(chore.index_);\r
    setEditChoreTitle(title);\r
    setEditChoreFreq(freq.frequency || "daily");\r
    setEditChoreDay(freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5);\r
    setEditChoreRotationGroup(chore.rotationGroup || "All Non-Casual");\r
    setEditingPrintableChore({\r
      ...{\r
        ...chore\r
      },\r
      originalTask: title,\r
      task: title,\r
      category: chore.category || "Household",\r
      frequency: freq.frequency === "weekly" ? "Once a Week" : freq.frequency === "biweekly" ? "Bi-Weekly" : "Daily",\r
      targetDay: chore.targetDay || (freq.frequency === "weekly" ? (_b2 = DAY_STYLES[freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5]) == null ? void 0 : _b2.name : "Mon \\u2013 Sun"),\r
      rotationGroup: chore.rotationGroup || "All Non-Casual",\r
      notes: chore.notes || "",\r
      dayOfWeek: freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5\r
    });\r
  };\r
  const handleSaveChoreEdit = () => {\r
    var _a2;\r
    if (editingChoreIndex === null) return;\r
    const cleanTitle = editChoreTitle.trim();\r
    if (cleanTitle) {\r
      handleSavePrintableChoreEdit(editingChoreIndex, {\r
        task: cleanTitle,\r
        frequency: editChoreFreq === "weekly" ? "Once a Week" : editChoreFreq === "biweekly" ? "Bi-Weekly" : "Daily",\r
        targetDay: ((_a2 = DAY_STYLES[editChoreDay]) == null ? void 0 : _a2.name) || "Mon \\u2013 Sun",\r
        rotationGroup: editChoreRotationGroup,\r
        dayOfWeek: editChoreDay\r
      });\r
    }\r
    setEditingChoreIndex(null);\r
  };\r
  const handleMoveChore = (choreItemOrIndex, direction) => {\r
    const matchChore = (r, target) => {\r
      if (typeof target === "object" && target !== null) {\r
        return r === target || normalizeTaskName(r.task) === normalizeTaskName(target.task);\r
      }\r
      return r.index_ === target || String(r.index_) === String(target) || normalizeTaskName(r.task) === normalizeTaskName(String(target));\r
    };\r
    const visibleList = typeof choreItemOrIndex === "object" && choreItemOrIndex !== null && filteredMasterChores.length > 0 ? filteredMasterChores : hubMasterChores;\r
    const visibleIdx = visibleList.findIndex(r => matchChore(r, choreItemOrIndex));\r
    if (visibleIdx === -1) return;\r
    const targetVisibleIdx = direction === "up" ? visibleIdx - 1 : visibleIdx + 1;\r
    if (targetVisibleIdx < 0 || targetVisibleIdx >= visibleList.length) return;\r
    const itemCurrent = visibleList[visibleIdx];\r
    const itemTarget = visibleList[targetVisibleIdx];\r
    const currentList = [...hubMasterChores];\r
    const listIndex = currentList.findIndex(r => matchChore(r, itemCurrent));\r
    const targetListIndex = currentList.findIndex(r => matchChore(r, itemTarget));\r
    if (listIndex === -1 || targetListIndex === -1) return;\r
    const choreName = itemCurrent.task || "Chore";\r
    currentList[listIndex] = itemTarget;\r
    currentList[targetListIndex] = itemCurrent;\r
    const newOverrides = currentList.map(c => normalizeTaskName(c.task));\r
    setChoreOrderOverrides(newOverrides);\r
    if (printableRangeIndex >= 0) {\r
      const pCurrent = findPrintableRow(itemCurrent.task);\r
      const pTarget = findPrintableRow(itemTarget.task);\r
      const weeklyBanner = (printableSheet == null ? void 0 : printableSheet.data) == null ? void 0 : printableSheet.data.find(r => r.row && String(r.row[0] || "").toLowerCase().trim() === "weekly tasks");\r
      const bannerIdx = weeklyBanner ? weeklyBanner.index_ : 10;\r
      const inSamePrintableSection = pCurrent && pTarget && ((pCurrent.index_ < bannerIdx && pTarget.index_ < bannerIdx) || (pCurrent.index_ > bannerIdx && pTarget.index_ > bannerIdx));\r
      if (pCurrent && pTarget && pCurrent.index_ !== pTarget.index_ && inSamePrintableSection) {\r
        const rowDataA = [...(pCurrent.row || [])];\r
        const rowDataB = [...(pTarget.row || [])];\r
        updateItem(printableRangeIndex, pCurrent.index_, rowDataB);\r
        updateItem(printableRangeIndex, pTarget.index_, rowDataA);\r
      }\r
    }\r
    if (hubRangeIndex >= 0) {\r
      const rCurrent = findHubChoreRow(itemCurrent.task);\r
      const rTarget = findHubChoreRow(itemTarget.task);\r
      if (rCurrent && rTarget && rCurrent.index_ !== rTarget.index_) {\r
        const rowCurrent = rCurrent.row || [];\r
        const rowTarget = rTarget.row || [];\r
        const updateCurrent = new Array(12).fill(void 0);\r
        const updateTarget = new Array(12).fill(void 0);\r
        for (let c = 6; c <= 11; c++) {\r
          updateCurrent[c] = rowTarget[c] !== void 0 ? rowTarget[c] : "";\r
          updateTarget[c] = rowCurrent[c] !== void 0 ? rowCurrent[c] : "";\r
        }\r
        updateItem(hubRangeIndex, rCurrent.index_, updateCurrent);\r
        updateItem(hubRangeIndex, rTarget.index_, updateTarget);\r
      }\r
    }\r
    setNotice(\`Reordered: Moved "\${choreName}" \${direction}! Synchronized with Printable Weekly Schedule and Household Hub.\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleCombineChores = (choreAIndex, choreBIndex, overrideTitle) => {\r
    var _a2, _b2, _c2, _d, _e, _f;\r
    const choreA = choreRows.find(r => r.index_ === choreAIndex);\r
    const choreB = choreRows.find(r => r.index_ === choreBIndex);\r
    if (!choreA || !choreB || choreAIndex === choreBIndex) return;\r
    const mergedTitle = (overrideTitle == null ? void 0 : overrideTitle.trim()) || \`\${choreA.row[1]} & \${choreB.row[1]}\`;\r
    if (choreRangeIndex >= 0) {\r
      const updateRow = new Array(16).fill(void 0);\r
      updateRow[1] = mergedTitle;\r
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
        const whoCol = 2 + dayOffset * 2;\r
        const doneCol = 3 + dayOffset * 2;\r
        const whoA = ((_a2 = choreA.row) == null ? void 0 : _a2[whoCol]) || "";\r
        const whoB = ((_b2 = choreB.row) == null ? void 0 : _b2[whoCol]) || "";\r
        const doneA = ((_c2 = choreA.row) == null ? void 0 : _c2[doneCol]) === true || String((_d = choreA.row) == null ? void 0 : _d[doneCol]).toLowerCase() === "true";\r
        const doneB = ((_e = choreB.row) == null ? void 0 : _e[doneCol]) === true || String((_f = choreB.row) == null ? void 0 : _f[doneCol]).toLowerCase() === "true";\r
        updateRow[whoCol] = whoA || whoB || "";\r
        updateRow[doneCol] = doneA || doneB;\r
      }\r
      updateItem(choreRangeIndex, choreA.index_, updateRow);\r
      deleteItem(choreRangeIndex, choreB.index_);\r
    }\r
    setMonthSchedule(prev => {\r
      const next = {\r
        ...prev\r
      };\r
      Object.keys(next).forEach(dKey => {\r
        const dayData = {\r
          ...next[dKey]\r
        };\r
        const statusA = dayData[choreA.index_] || {\r
          who: "",\r
          done: false\r
        };\r
        const statusB = dayData[choreB.index_] || {\r
          who: "",\r
          done: false\r
        };\r
        dayData[choreA.index_] = {\r
          who: statusA.who || statusB.who || "",\r
          done: statusA.done || statusB.done\r
        };\r
        delete dayData[choreB.index_];\r
        next[dKey] = dayData;\r
      });\r
      return next;\r
    });\r
    setShowCombineModal(false);\r
    setNotice(\`Combined into: "\${mergedTitle}"\`);\r
    setTimeout(() => setNotice(null), 4e3);\r
  };\r
  const handleAutoAssignMonth = (regularSelected, biWeeklySelected) => {\r
    const regular = regularSelected || [];\r
    const biWeekly = biWeeklySelected || [];\r
    if (regular.length === 0 && biWeekly.length === 0) return;\r
    const updated = {\r
      ...monthSchedule\r
    };\r
    let dayStartOffset = 0;\r
    let weeklyKidCounter = 0;\r
    let weeklyCleanerCounter = 0;\r
    let weeklyCurbsideCounter = 0;\r
    const editsPatch = {};\r
\r
    calendarWeeks.forEach(week => {\r
      week.forEach(dayObj => {\r
        if (!dayObj.isCurrentMonth) return;\r
        const dKey = dayObj.dateKey;\r
        if (!updated[dKey]) updated[dKey] = {};\r
        const biWeeklyStatus = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);\r
        const areKidsInResidence = biWeeklyStatus.isFullStay || biWeeklyStatus.isDepartureDay;\r
        const dayMembers = [...regular];\r
        if (areKidsInResidence) {\r
          dayMembers.push(...biWeekly);\r
        }\r
        if (dayMembers.length === 0) return;\r
        const scheduledChoresForDay = choreRows.filter(cr => {\r
          var _a2;\r
          const taskT = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
          const tLow = taskT.toLowerCase();\r
          const freq = getChoreFreq(cr);\r
          if (tLow.includes("deep clean") || tLow.includes("feeding station")) {\r
            return dayObj.dayOfWeekIndex === 6;\r
          }\r
          if (tLow.includes("recycling")) {\r
            return dayObj.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);\r
          }\r
          if (tLow.includes("waste")) {\r
            return dayObj.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);\r
          }\r
          if (freq.frequency === "biweekly") {\r
            return dayObj.dayOfWeekIndex === freq.dayOfWeek && isCurbsideActiveOnDate(taskT, dayObj.year, dayObj.month, dayObj.day);\r
          }\r
          if (freq.frequency === "weekly") {\r
            return dayObj.dayOfWeekIndex === freq.dayOfWeek;\r
          }\r
          return true;\r
        });\r
        const nonCasualWorkers = dayMembers.filter(name => {\r
          const mem = getMember(name);\r
          return mem && mem.type !== "casual";\r
        });\r
        const activeWorkers = nonCasualWorkers.length > 0 ? nonCasualWorkers : dayMembers;\r
        const kidsWorkers = activeWorkers.filter(name => {\r
          const mem = getMember(name);\r
          const roleLower = String((mem == null ? void 0 : mem.role) || "").toLowerCase();\r
          return !roleLower.includes("parent") && !roleLower.includes("overseer");\r
        });\r
        let choreAssignCounter = 0;\r
        scheduledChoresForDay.forEach(cr => {\r
          var _a2;\r
          const current = updated[dKey][cr.index_] || {\r
            who: "",\r
            done: false,\r
            kidsDone: {}\r
          };\r
          const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
          const groupLower = String(cr.rotationGroup || "").toLowerCase();\r
          const tLower = taskTitle.toLowerCase();\r
\r
          // 1. Tidy Bedrooms and Laundry Tasks: Excluded from auto-assign (multi-kid personal checklists)\r
          if (isKidsChecklistChore(taskTitle)) {\r
            updated[dKey][cr.index_] = {\r
              who: "",\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
\r
          // 2. Sunday Supper: Parent rule\r
          if (dayObj.dayOfWeekIndex === 6 && tLower.includes("supper")) {\r
            const overseers = familyMembers.filter(m => m.role === "Overseer Supreme" || String(m.role || "").toLowerCase().includes("parent")).map(m => m.name);\r
            const parentList = overseers.length > 0 ? overseers : ["Thom", "Meghan"];\r
            const sundayCook = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parentList);\r
            updated[dKey][cr.index_] = {\r
              who: sundayCook,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
\r
          // 3. Weekly tasks: Clean Basement (Kids), Feeding Station Deep Clean (Active Workers), Curbside (Active Workers), Sign-Off (Parents)\r
          if (tLower.includes("basement")) {\r
            const kidPool = kidsWorkers.length > 0 ? kidsWorkers : (areKidsInResidence ? ["Sydney", "Cadence", "Mason"] : ["Sydney"]);\r
            const assignee = kidPool.length > 0 ? kidPool[weeklyKidCounter % kidPool.length] : "Sydney";\r
            updated[dKey][cr.index_] = {\r
              who: assignee,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            weeklyKidCounter++;\r
            return;\r
          }\r
          if (tLower.includes("deep clean") || tLower.includes("feeding station")) {\r
            const assignee = activeWorkers[weeklyCleanerCounter % activeWorkers.length];\r
            updated[dKey][cr.index_] = {\r
              who: assignee,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            weeklyCleanerCounter++;\r
            return;\r
          }\r
          if (tLower.includes("recycling") || tLower.includes("waste")) {\r
            const assignee = activeWorkers[weeklyCurbsideCounter % activeWorkers.length];\r
            updated[dKey][cr.index_] = {\r
              who: assignee,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            weeklyCurbsideCounter++;\r
            return;\r
          }\r
          if (tLower.includes("sign-off") || tLower.includes("inspection")) {\r
            updated[dKey][cr.index_] = {\r
              who: "Parents",\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
\r
          // 4. Daily tasks & general chores\r
          if (groupLower === "parents" || groupLower.includes("parent") && !groupLower.includes("kid") && !groupLower.includes("non-casual") && !groupLower.includes("all")) {\r
            const overseers = familyMembers.filter(m => m.role === "Overseer Supreme" || String(m.role || "").toLowerCase().includes("parent")).map(m => m.name);\r
            const parentAssignee = overseers.length > 0 ? overseers[(dayStartOffset + choreAssignCounter) % overseers.length] : "Thom";\r
            choreAssignCounter++;\r
            updated[dKey][cr.index_] = {\r
              who: parentAssignee,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
          if (groupLower === "kids" && kidsWorkers.length > 0) {\r
            const kidAssignee = kidsWorkers[(dayStartOffset + choreAssignCounter) % kidsWorkers.length];\r
            choreAssignCounter++;\r
            updated[dKey][cr.index_] = {\r
              who: kidAssignee,\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
          const assignedPerson = activeWorkers[(dayStartOffset + choreAssignCounter) % activeWorkers.length];\r
          choreAssignCounter++;\r
          updated[dKey][cr.index_] = {\r
            who: assignedPerson,\r
            done: current.done,\r
            kidsDone: current.kidsDone || {}\r
          };\r
        });\r
        dayStartOffset = (dayStartOffset + 1) % dayMembers.length;\r
      });\r
    });\r
\r
    setMonthSchedule(updated);\r
\r
    if (printableRangeIndex >= 0) {\r
      calendarWeeks.forEach(week => {\r
        if (isWeekSyncedToSheet(week)) {\r
          choreRows.forEach(cr => {\r
            var _a2;\r
            const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
            // Skip Tidy Bedrooms and Laundry Tasks\r
            if (isKidsChecklistChore(taskTitle)) {\r
              return;\r
            }\r
            const pRow = findPrintableRow(taskTitle, cr.index_);\r
            if (!pRow) return;\r
\r
            const choreFreq = getChoreFreq(cr);\r
            const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);\r
\r
            const rowUpdates = new Array(15).fill(void 0);\r
            let hasChanges = false;\r
            let weeklyAssignedWho = "";\r
\r
            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
              const d = week[dayOffset];\r
              if (d && ((_a2 = updated[d.dateKey]) == null ? void 0 : _a2[cr.index_])) {\r
                const assignedWho = updated[d.dateKey][cr.index_].who || "";\r
                if (assignedWho) {\r
                  const whoCol = 1 + dayOffset * 2;\r
                  rowUpdates[whoCol] = assignedWho;\r
                  hasChanges = true;\r
                  if (isStreamlined && !weeklyAssignedWho) {\r
                    weeklyAssignedWho = assignedWho;\r
                  }\r
                }\r
              }\r
            }\r
\r
            if (isStreamlined && weeklyAssignedWho) {\r
              rowUpdates[9] = \`Who: \${weeklyAssignedWho}\`;\r
              hasChanges = true;\r
\r
              editsPatch[cr.index_] = {\r
                ...(choreEdits[cr.index_] || {}),\r
                who: weeklyAssignedWho,\r
                rotationGroup: weeklyAssignedWho\r
              };\r
              if (taskTitle) {\r
                editsPatch[taskTitle.toLowerCase().trim()] = {\r
                  ...(choreEdits[taskTitle.toLowerCase().trim()] || {}),\r
                  who: weeklyAssignedWho,\r
                  rotationGroup: weeklyAssignedWho\r
                };\r
              }\r
\r
              // Propagate weekly assignment across all days of this week in updated\r
              week.forEach(dObj => {\r
                if (dObj && updated[dObj.dateKey]) {\r
                  const prevEntry = updated[dObj.dateKey][cr.index_] || { done: false, kidsDone: {} };\r
                  const updatedEntry = { ...prevEntry, who: weeklyAssignedWho };\r
                  updated[dObj.dateKey][cr.index_] = updatedEntry;\r
                  if (taskTitle) {\r
                    updated[dObj.dateKey][taskTitle] = updatedEntry;\r
                    updated[dObj.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;\r
                  }\r
                }\r
              });\r
            }\r
\r
            if (hasChanges) {\r
              updateItem(printableRangeIndex, pRow.index_, rowUpdates);\r
            }\r
          });\r
        }\r
      });\r
    }\r
\r
    if (Object.keys(editsPatch).length > 0) {\r
      setChoreEdits(prev => ({\r
        ...prev,\r
        ...editsPatch\r
      }));\r
    }\r
\r
    setShowAutoAssignModal(false);\r
    setNotice(\`Auto-assigned daily & weekly tasks for \${MONTH_NAMES[selectedMonth]} \${selectedYear}! (Tidy Bedrooms & Laundry remain individual checklists)\`);\r
    setTimeout(() => setNotice(null), 4500);\r
  };\r
  const handleUpdatePetChoresToRoster = () => {\r
    if (choreRangeIndex >= 0) {\r
      const feedRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("feed"));\r
      if (feedRow) {\r
        const updateRow = new Array(16).fill(void 0);\r
        updateRow[1] = "Feed Ellie & Lewis (dogs), Casey, Gigi, Sloan & Scoob (cats) - Breakfast & Supper";\r
        updateItem(choreRangeIndex, feedRow.index_, updateRow);\r
      }\r
      const litterRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("litter"));\r
      if (litterRow) {\r
        const updateRow = new Array(16).fill(void 0);\r
        updateRow[1] = "Empty Litter Boxes for Cats (Casey, Gigi, Sloan & Scoob) - Morning & Evening";\r
        updateItem(choreRangeIndex, litterRow.index_, updateRow);\r
      }\r
      const walkRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("walk"));\r
      if (!walkRow) {\r
        const newRow = [null, "Walk Dogs: Ellie & Lewis (Morning & Evening walk)", "", false, "", false, "", false, "", false, "", false, "", false, "", false];\r
        insertItem(choreRangeIndex, void 0, newRow);\r
      }\r
    }\r
    setNotice("Updated pet-related chores to reflect Ellie, Lewis, Casey, Gigi, Sloan, and Scoob!");\r
    setTimeout(() => setNotice(null), 4e3);\r
  };\r
  const handleUpdateRosterMember = (rowIndex_, patch) => {\r
    var _a2, _b2;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);\r
    const updateRow = new Array(12).fill(void 0);\r
    if ("name" in patch) updateRow[0] = patch.name;\r
    if ("role" in patch) updateRow[1] = patch.role;\r
    if ("residency" in patch) updateRow[2] = patch.residency;\r
    if ("specialGroups" in patch) updateRow[3] = patch.specialGroups;\r
    else if ("schedule" in patch) updateRow[3] = patch.schedule;\r
    if ("active" in patch) updateRow[4] = patch.active;\r
    updateItem(targetRange, rowIndex_, updateRow);\r
    setNotice(\`Updated "\${patch.name || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) || "member"}" in Household Hub!\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleAddRosterMember = (name, role, residency, specialGroups, active = true) => {\r
    var _a2;\r
    if (!name || !name.trim()) return;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const cleanName = name.trim();\r
    const cleanRole = role ? role.trim() : "Minion";\r
    const cleanRes = residency || "Full-Time";\r
    const defaultGroups = cleanRes === "Casual" ? "All" : cleanRole === "Supreme Overlord" ? "Parents, Non-Casual, All" : "Kids, Non-Casual, All";\r
    const cleanGroups = specialGroups ? specialGroups.trim() : defaultGroups;\r
    const emptySlot = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => {\r
      if (r.index_ < 5 || r.index_ > 12) return false;\r
      return !r.row || !r.row[0] || !String(r.row[0]).trim();\r
    });\r
    if (emptySlot) {\r
      const updateRow = new Array(12).fill(void 0);\r
      updateRow[0] = cleanName;\r
      updateRow[1] = cleanRole;\r
      updateRow[2] = cleanRes;\r
      updateRow[3] = cleanGroups;\r
      updateRow[4] = active;\r
      updateRow[5] = "MEMBER_ROW";\r
      updateItem(targetRange, emptySlot.index_, updateRow);\r
    } else {\r
      const newRow = [cleanName, cleanRole, cleanRes, cleanGroups, active, "MEMBER_ROW", null, null, null, null, null, null];\r
      insertItem(targetRange, void 0, newRow);\r
    }\r
    setShowAddMemberModal(false);\r
    setNotice(\`Added "\${cleanName}" to Household Hub!\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleDeleteRosterMember = (rowIndex_, name) => {\r
    var _a2, _b2;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);\r
    if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) {\r
      const clearRow = new Array(12).fill(void 0);\r
      clearRow[0] = "";\r
      clearRow[1] = "";\r
      clearRow[2] = "";\r
      clearRow[3] = "";\r
      clearRow[4] = false;\r
      updateItem(targetRange, rowIndex_, clearRow);\r
    } else {\r
      deleteItem(targetRange, rowIndex_);\r
    }\r
    setNotice(\`Removed "\${name}" from Household Hub\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleUpdateRosterPet = (rowIndex_, patch) => {\r
    var _a2, _b2;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);\r
    const updateRow = new Array(12).fill(void 0);\r
    if ("name" in patch) updateRow[0] = patch.name;\r
    if ("type" in patch) updateRow[1] = patch.type;\r
    if ("routine" in patch) updateRow[2] = patch.routine;\r
    if ("care" in patch) updateRow[3] = patch.care;\r
    if ("active" in patch) updateRow[4] = patch.active;\r
    updateItem(targetRange, rowIndex_, updateRow);\r
    setNotice(\`Updated pet "\${patch.name || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) || "profile"}" in Household Hub!\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleAddRosterPet = (name, type, routine, care, active = true) => {\r
    if (!name || !name.trim()) return;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const cleanName = name.trim();\r
    const cleanType = type || "Dog";\r
    const cleanRoutine = routine || "Morning & Evening";\r
    const cleanCare = care || (cleanType === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water");\r
    const newRow = [cleanName, cleanType, cleanRoutine, cleanCare, active, "PET_ROW", void 0, void 0, void 0, void 0, void 0, void 0];\r
    insertItem(targetRange, void 0, newRow);\r
    setShowAddPetModal(false);\r
    setNewPetDraft({\r
      name: "",\r
      type: "Dog",\r
      routine: "Morning & Evening",\r
      care: "",\r
      active: true\r
    });\r
    setNotice(\`Added pet "\${cleanName}" to Household Hub!\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const handleDeleteRosterPet = (rowIndex_, petName) => {\r
    var _a2, _b2;\r
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;\r
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);\r
    if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) {\r
      const clearRow = new Array(12).fill(void 0);\r
      clearRow[0] = "";\r
      clearRow[1] = "";\r
      clearRow[2] = "";\r
      clearRow[3] = "";\r
      clearRow[4] = false;\r
      updateItem(targetRange, rowIndex_, clearRow);\r
    } else {\r
      deleteItem(targetRange, rowIndex_);\r
    }\r
    setNotice(\`Removed pet "\${petName}" from Household Hub\`);\r
    setTimeout(() => setNotice(null), 3e3);\r
  };\r
  const monthStats = useMemo(() => {\r
    let totalScheduled = 0;\r
    let totalCompleted = 0;\r
    const assigneeCounts = {};\r
    familyMembers.forEach(m => {\r
      assigneeCounts[m.name] = {\r
        total: 0,\r
        done: 0\r
      };\r
    });\r
    calendarWeeks.forEach(week => {\r
      week.forEach(day => {\r
        if (!day.isCurrentMonth) return;\r
        choreRows.forEach(cr => {\r
          var _a2, _b2;\r
          const taskT = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
          const tLow = taskT.toLowerCase();\r
          const freq = getChoreFreq(cr);\r
          let isScheduledDay = false;\r
          if (tLow.includes("deep clean") || tLow.includes("feeding station")) {\r
            isScheduledDay = day.dayOfWeekIndex === 6;\r
          } else if (tLow.includes("recycling")) {\r
            isScheduledDay = day.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("recycling", day.year, day.month, day.day);\r
          } else if (tLow.includes("waste")) {\r
            isScheduledDay = day.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("waste", day.year, day.month, day.day);\r
          } else if (freq.frequency === "daily") {\r
            isScheduledDay = true;\r
          } else if (freq.frequency === "weekly") {\r
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek;\r
          } else if (freq.frequency === "biweekly") {\r
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek && isCurbsideActiveOnDate(taskT, day.year, day.month, day.day);\r
          }\r
          const status = getChoreStatus(day.dateKey, cr.index_, cr.task || ((_b2 = cr.row) == null ? void 0 : _b2[0]));\r
          const hasActivity = (status == null ? void 0 : status.done) || (status == null ? void 0 : status.who);\r
          if (!isScheduledDay && !hasActivity) return;\r
          totalScheduled++;\r
          const isDone = status == null ? void 0 : status.done;\r
          const who = status == null ? void 0 : status.who;\r
          if (isDone) totalCompleted++;\r
          if (who) {\r
            const member = getMember(who);\r
            if (member && assigneeCounts[member.name]) {\r
              assigneeCounts[member.name].total++;\r
              if (isDone) assigneeCounts[member.name].done++;\r
            }\r
          }\r
        });\r
      });\r
    });\r
    const completionRate = totalScheduled > 0 ? Math.round(totalCompleted / totalScheduled * 100) : 0;\r
    return {\r
      totalScheduled,\r
      totalCompleted,\r
      completionRate,\r
      assigneeCounts\r
    };\r
  }, [calendarWeeks, choreRows, monthSchedule, familyMembers, getMember]);\r
  const rankedMembers = useMemo(() => {\r
    return familyMembers\r
      .filter(m => {\r
        const nameLower = (m.name || "").toLowerCase().trim();\r
        const roleLower = String(m.role || "").toLowerCase();\r
        if (nameLower === "thom" || nameLower === "meghan") return false;\r
        if (roleLower.includes("overlord") || roleLower.includes("overseer") || roleLower.includes("parent")) return false;\r
        return true;\r
      })\r
      .map(m => {\r
        const stat = monthStats.assigneeCounts[m.name] || {\r
          total: 0,\r
          done: 0\r
        };\r
        const pct = stat.total > 0 ? Math.round(stat.done / stat.total * 100) : 0;\r
        return {\r
          ...{\r
            ...m\r
          },\r
          done: stat.done,\r
          total: stat.total,\r
          pct\r
        };\r
      }).sort((a, b) => {\r
        if (b.done !== a.done) return b.done - a.done;\r
        return b.pct - a.pct;\r
      });\r
  }, [familyMembers, monthStats]);\r
  const topPerformer = useMemo(() => {\r
    if (rankedMembers.length === 0) return null;\r
    if (rankedMembers[0].done === 0) return null;\r
    return rankedMembers[0];\r
  }, [rankedMembers]);\r
  const handlePrevMonth = () => {\r
    if (selectedMonth === 0) {\r
      setSelectedMonth(11);\r
      setSelectedYear(y => y - 1);\r
    } else {\r
      setSelectedMonth(m => m - 1);\r
    }\r
  };\r
  const handleNextMonth = () => {\r
    if (selectedMonth === 11) {\r
      setSelectedMonth(0);\r
      setSelectedYear(y => y + 1);\r
    } else {\r
      setSelectedMonth(m => m + 1);\r
    }\r
  };\r
  const handleCurrentMonth = () => {\r
    const cur = getCurrentWeekMonday();\r
    setSelectedYear(cur.todayYear);\r
    setSelectedMonth(cur.todayMonth);\r
    setActiveSyncWeek(cur.dateKey);\r
  };\r
  useEffect(() => {\r
    if (activeTab === "month") {\r
      const cur = getCurrentWeekMonday();\r
      setSelectedYear(cur.todayYear);\r
      setSelectedMonth(cur.todayMonth);\r
      setActiveSyncWeek(cur.dateKey);\r
      setTimeout(() => {\r
        const el = document.getElementById("active-calendar-week");\r
        if (el) {\r
          el.scrollIntoView({ behavior: "smooth", block: "center" });\r
        }\r
      }, 50);\r
    }\r
  }, [activeTab]);\r
  const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];\r
  return (\r
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">\r
      {notice && (\r
        <div className="no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all">\r
          <div className="flex items-center gap-2">\r
            <CircleCheck className="w-4 h-4 text-emerald-200" />\r
            <span>{notice}</span>\r
          </div>\r
          <button onClick={() => setNotice(null)} className="text-emerald-100 hover:text-white">\r
            <X className="w-4 h-4" />\r
          </button>\r
        </div>\r
      )}\r
      <header className="no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">\r
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">\r
          <div className="flex items-center gap-3">\r
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md">\r
              <Calendar className="w-5 h-5" />\r
            </div>\r
            <div>\r
              <div className="flex items-center gap-2">\r
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Chore Schedule</h1>\r
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">\r
                  Monthly Template & Sync\r
                </span>\r
              </div>\r
              <p className="text-xs text-slate-500">\r
                {"Interactive Chore Calendar w/ Printable Sheet \\u2022 Week of "}\r
                {activeSyncWeek}\r
              </p>\r
            </div>\r
          </div>\r
          <div className="flex flex-wrap items-center gap-2.5">\r
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">\r
              <button\r
                onClick={handlePrevMonth}\r
                className="p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm"\r
                title="Previous Month"\r
              >\r
                <ChevronLeft className="w-4 h-4" />\r
              </button>\r
              <div className="px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none">\r
                {MONTH_NAMES[selectedMonth]} {selectedYear}\r
              </div>\r
              <button\r
                onClick={handleNextMonth}\r
                className="p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm"\r
                title="Next Month"\r
              >\r
                <ChevronRight className="w-4 h-4" />\r
              </button>\r
              <button\r
                onClick={handleCurrentMonth}\r
                className="ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition"\r
              >\r
                Today\r
              </button>\r
            </div>\r
            <button\r
              onClick={() => setShowAutoAssignModal(true)}\r
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition"\r
            >\r
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />\r
              <span>Auto-Assign</span>\r
            </button>\r
          </div>\r
        </div>\r
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm">\r
          <div className="flex items-center gap-1">\r
            <button\r
              onClick={() => setActiveTab("month")}\r
              className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition \${activeTab === "month" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"\r
                }\`}\r
            >\r
              <CalendarDays className="w-3.5 h-3.5" />\r
              <span>Monthly Calendar</span>\r
            </button>\r
            <button\r
              onClick={() => setActiveTab("matrix")}\r
              className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition \${activeTab === "matrix" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"\r
                }\`}\r
            >\r
              <LayoutGrid className="w-3.5 h-3.5" />\r
              <span>Weekly Schedule</span>\r
            </button>\r
            <button\r
              onClick={() => setActiveTab("stats")}\r
              className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition \${activeTab === "stats" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"\r
                }\`}\r
            >\r
              <Award className="w-3.5 h-3.5" />\r
              <span>Leaderboard & Stats</span>\r
            </button>\r
            <button\r
              onClick={() => setActiveTab("roster")}\r
              className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition \${activeTab === "roster"\r
                ? "bg-indigo-600 text-white shadow-sm"\r
                : "text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"\r
                }\`}\r
            >\r
              <Users className="w-3.5 h-3.5" />\r
              <span>Household Hub ({familyMembers.length})</span>\r
            </button>\r
          </div>\r
        </div>\r
      </header>\r
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6"><div className="no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs"><div className="flex flex-wrap items-center gap-3"><div className="flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]"><Users className="w-4 h-4 text-indigo-600 shrink-0" /><span>Household Roster:</span></div><div className="flex flex-wrap items-center gap-1.5"><span className="text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Supreme Overlords:</span>{familyMembers.filter(m => m.active !== false && (m.role === "Supreme Overlord" || m.role === "Overseer Supreme")).map(m => <span key={m.id} className="px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300" style={{\r
        backgroundColor: m.bg,\r
        color: m.text\r
      }} title="Supreme Overlord (= Parent \\u2022 Included in Daily Chores)">{m.name}</span>)}<span className="text-slate-300 mx-1">{"\\u2022"}</span><span className="text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">Minions:</span>{familyMembers.filter(m => m.active !== false && m.role !== "Supreme Overlord" && m.role !== "Overseer Supreme").map(m => <span key={m.id} className="px-2 py-0.5 rounded-full font-medium text-[11px] border" style={{\r
        backgroundColor: m.bg,\r
        color: m.text,\r
        borderColor: m.type === "biweekly" ? "#F8B4BD" : m.type === "casual" ? "#A6D2ED" : "#E2E8F0"\r
      }} title={\`\${m.name} (\${m.residency} Minion = Kid)\`}>{m.name}</span>)}</div></div><div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100"><div className="flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]"><span className="w-4 text-center shrink-0">{"\\u{1F43E}"}</span><span>{"\\"The Herd\\":"}</span></div><div className="flex flex-wrap items-center gap-1.5"><span className="text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Dogs:</span>{rosterPets.filter(p => p.active !== false && p.type.toLowerCase().includes("dog")).map(p => <span key={\`\${p.index_}-\${p.name}\`} className="px-2 py-0.5 rounded-full font-semibold text-[11px] border" style={{\r
        backgroundColor: p.bg,\r
        color: p.text,\r
        borderColor: p.border\r
      }} title={\`\${p.name} (\${p.type} \\u2022 \${p.routine})\`}>{p.icon}{" "}{p.name}</span>)}<span className="text-slate-300 mx-1">{"\\u2022"}</span><span className="text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">Cats:</span>{rosterPets.filter(p => p.active !== false && p.type.toLowerCase().includes("cat")).map(p => <span key={\`\${p.index_}-\${p.name}\`} className="px-2 py-0.5 rounded-full font-medium text-[11px] border" style={{\r
        backgroundColor: p.bg,\r
        color: p.text,\r
        borderColor: p.border\r
      }} title={\`\${p.name} (\${p.type} \\u2022 \${p.routine})\`}>{p.icon}{" "}{p.name}</span>)}{rosterPets.some(p => p.active !== false && !p.type.toLowerCase().includes("dog") && !p.type.toLowerCase().includes("cat")) && <><span className="text-slate-300 mx-1">{"\\u2022"}</span><span className="text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Other Pets:</span>{rosterPets.filter(p => p.active !== false && !p.type.toLowerCase().includes("dog") && !p.type.toLowerCase().includes("cat")).map(p => <span key={\`\${p.index_}-\${p.name}\`} className="px-2 py-0.5 rounded-full font-medium text-[11px] border" style={{\r
        backgroundColor: p.bg,\r
        color: p.text,\r
        borderColor: p.border\r
      }} title={\`\${p.name} (\${p.type} \\u2022 \${p.routine})\`}>{p.icon}{" "}{p.name}</span>)}</>}</div></div></div><div className="no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-6"><div><p className="text-xs text-slate-500 font-medium">Month Overview</p><div className="flex items-baseline gap-2 mt-0.5"><span className="text-xl font-bold text-slate-900">{monthStats.totalCompleted}{" / "}{monthStats.totalScheduled}</span><span className="text-xs text-slate-500">completed</span></div></div><div className="hidden sm:block w-36"><div className="flex justify-between text-xs text-slate-600 mb-1 font-medium"><span>Progress</span><span>{monthStats.completionRate}%</span></div><div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden"><div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{\r
        width: \`\${monthStats.completionRate}%\`\r
      }} /></div></div></div><div className="flex items-center gap-3 text-xs"><div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /><span>{"Active Week: "}<strong>{activeSyncWeek}</strong>{" \\u2022 "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><button onClick={() => {\r
        const cur = getCurrentWeekMonday();\r
        const currentWeek = getWeekDaysForDate(cur.year, cur.month, cur.day);\r
        handleSetSyncWeek(currentWeek);\r
        handleAutoAssignCurrentWeek();\r
        setActiveTab("matrix");\r
      }} className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition" title={\`Sync and distribute chores for current week (\${activeSyncWeek})\`}>Sync & Distribute Week</button></div></div>{activeTab === "month" && <div className="space-y-4"><div className="grid grid-cols-7 gap-2 text-center">{DAY_STYLES.map((day, idx) => <div key={day.name} className="py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center" style={{\r
        backgroundColor: day.color\r
      }}><span>{day.name}</span><span className="text-[10px] font-normal opacity-90 hidden sm:inline">{"Day "}{idx + 1}</span></div>)}</div><div className="space-y-3">{calendarWeeks.map((week, weekIdx) => {\r
        const synced = isWeekSyncedToSheet(week);\r
        const isCurrentCalendarWeek = week[0].dateKey === currentWeekInfo.dateKey;\r
        return <div key={weekIdx} id={synced ? "active-calendar-week" : void 0} className={\`bg-white rounded-xl border transition-all \${synced ? "border-rose-400 ring-2 ring-rose-200 shadow-md" : "border-slate-200 shadow-sm hover:border-slate-300"}\`}><div className="bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="font-semibold text-slate-700">{"Week "}{weekIdx + 1}</span><span className="text-slate-400">{"\\u2022"}</span><span className="text-slate-500">{week[0].month + 1}/{week[0].day}{" \\u2013 "}{week[6].month + 1}/{week[6].day}</span>{isCurrentCalendarWeek && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">Current Week</span>}{(() => {\r
          const summary = getWeekBiWeeklySummary(week, biWeeklyNamesString);\r
          if (!summary) return null;\r
          return <span className={\`text-[10px] font-semibold px-2 py-0.5 rounded-full border \${summary.badgeBg}\`}>{summary.text}</span>;\r
        })()}{synced ? <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300"><span className="w-1.5 h-1.5 rounded-full bg-rose-600" />Live Synced with Sheet</span> : <button onClick={() => handleSetSyncWeek(week)} className="text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1">Set as Sheet Week</button>}</div><div className="text-[11px] text-slate-500">{week.reduce((acc, d) => {\r
          const count = choreRows.filter(cr => {\r
            var _a2, _b2;\r
            return (_b2 = (_a2 = monthSchedule[d.dateKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;\r
          }).length;\r
          return acc + count;\r
        }, 0)}{" "}chores completed</div></div><div className="grid grid-cols-7 divide-x divide-slate-100">{week.map((dayObj, dayIdx) => {\r
          const {\r
            dateKey,\r
            day,\r
            isCurrentMonth\r
          } = dayObj;\r
          const dayStyle = DAY_STYLES[dayIdx];\r
          const dayChores = choreRows.filter(cr => {\r
            var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;\r
            const freq = getChoreFreq(cr);\r
            const tLow = (cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "").toLowerCase();\r
            if (tLow.includes("deep clean") || tLow.includes("feeding station")) {\r
              const isScheduledDay = dayIdx === 6;\r
              const hasActivity = ((_c2 = (_b2 = monthSchedule[dateKey]) == null ? void 0 : _b2[cr.index_]) == null ? void 0 : _c2.done) || ((_e = (_d = monthSchedule[dateKey]) == null ? void 0 : _d[cr.index_]) == null ? void 0 : _e.who);\r
              if (!isScheduledDay && !hasActivity) return false;\r
            } else if (tLow.includes("recycling")) {\r
              const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);\r
              const hasActivity = ((_g = (_f = monthSchedule[dateKey]) == null ? void 0 : _f[cr.index_]) == null ? void 0 : _g.done) || ((_i = (_h = monthSchedule[dateKey]) == null ? void 0 : _h[cr.index_]) == null ? void 0 : _i.who);\r
              if (!isScheduledDay && !hasActivity) return false;\r
            } else if (tLow.includes("waste")) {\r
              const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);\r
              const hasActivity = ((_k = (_j = monthSchedule[dateKey]) == null ? void 0 : _j[cr.index_]) == null ? void 0 : _k.done) || ((_m = (_l = monthSchedule[dateKey]) == null ? void 0 : _l[cr.index_]) == null ? void 0 : _m.who);\r
              if (!isScheduledDay && !hasActivity) return false;\r
            } else if (freq.frequency === "weekly") {\r
              const isScheduledDay = dayIdx === freq.dayOfWeek;\r
              const hasActivity = ((_o = (_n = monthSchedule[dateKey]) == null ? void 0 : _n[cr.index_]) == null ? void 0 : _o.done) || ((_q = (_p = monthSchedule[dateKey]) == null ? void 0 : _p[cr.index_]) == null ? void 0 : _q.who);\r
              if (!isScheduledDay && !hasActivity) return false;\r
            } else if (freq.frequency === "biweekly") {\r
              const isScheduledDay = dayIdx === freq.dayOfWeek && isCurbsideActiveOnDate(cr.task || ((_r = cr.row) == null ? void 0 : _r[0]), dayObj.year, dayObj.month, dayObj.day);\r
              const hasActivity = ((_t = (_s = monthSchedule[dateKey]) == null ? void 0 : _s[cr.index_]) == null ? void 0 : _t.done) || ((_v = (_u = monthSchedule[dateKey]) == null ? void 0 : _u[cr.index_]) == null ? void 0 : _v.who);\r
              if (!isScheduledDay && !hasActivity) return false;\r
            }\r
            if (selectedAssigneeFilter === "ALL") return true;\r
            const st = (_w = monthSchedule[dateKey]) == null ? void 0 : _w[cr.index_];\r
            const whoStr = String((st == null ? void 0 : st.who) || "").toLowerCase();\r
            const filterMem = familyMembers.find(m => m.id === selectedAssigneeFilter || m.name === selectedAssigneeFilter);\r
            const filterName = ((filterMem == null ? void 0 : filterMem.name) || selectedAssigneeFilter).toLowerCase();\r
            if (isBedroomChore(cr.row[1])) {\r
              return kidsList.some(k => k.toLowerCase() === filterName);\r
            }\r
            if (!(st == null ? void 0 : st.who)) return false;\r
            if (whoStr === filterName) return true;\r
            if ((whoStr === "all kids" || whoStr === "each child") && kidsList.some(k => k.toLowerCase() === filterName)) {\r
              return true;\r
            }\r
            if ((whoStr === "all non-casual" || whoStr === "all non casual") && filterMem && filterMem.type !== "casual") {\r
              return true;\r
            }\r
            if ((whoStr === "parents" || whoStr === "parents only") && filterMem && String(filterMem.role || "").toLowerCase().includes("parent")) {\r
              return true;\r
            }\r
            const mem = getMember(st.who);\r
            return st.who === selectedAssigneeFilter || (mem == null ? void 0 : mem.id) === selectedAssigneeFilter || (mem == null ? void 0 : mem.name) === selectedAssigneeFilter;\r
          });\r
          const doneCount = dayChores.filter(cr => {\r
            var _a2, _b2;\r
            return (_b2 = (_a2 = monthSchedule[dateKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;\r
          }).length;\r
          const isAllDone = dayChores.length > 0 && doneCount === dayChores.length;\r
          return <div key={dateKey} className={\`min-h-[160px] p-2 flex flex-col justify-between transition-colors \${isCurrentMonth ? "bg-white" : "bg-slate-50/80 border-dashed border-slate-200"}\`}><div><div className="flex items-center justify-between mb-1.5"><span className={\`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center \${isCurrentMonth ? "bg-slate-100 text-slate-800" : "bg-slate-200/70 text-slate-700"}\`}>{day}</span><div className="flex items-center gap-1">{dayChores.length > 0 && <span className={\`text-[10px] font-semibold px-1.5 py-0.5 rounded \${isAllDone ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"}\`}>{doneCount}/{dayChores.length}</span>}<button onClick={() => setActiveDayModal(dateKey)} className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition" title="Open day details"><Pen className="w-2.5 h-2.5" /></button></div></div>{(() => {\r
            const status = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);\r
            if (status.isArrivalDay) {\r
              return <div className="text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay"><span>{"\\u{1F3E0} Cadence & Mason arrive 5 PM"}</span></div>;\r
            } else if (status.isDepartureDay) {\r
              return <div className="text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason depart today at 5:00 PM"><span>{"\\u{1F44B} Cadence & Mason leave 5 PM"}</span></div>;\r
            }\r
            return null;\r
          })()}<div className="space-y-1">{dayChores.slice(0, 3).map(cr => {\r
            var _a2, _b2;\r
            const status = getChoreStatus(dateKey, cr.index_, cr.task || cr.row[0]);\r
            const assignee = getMember(status.who);\r
            const freq = getChoreFreq(cr);\r
            return <div key={cr.index_} className={\`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition \${status.done ? "bg-emerald-50/70 border-emerald-200 text-slate-500" : freq.frequency === "weekly" ? "bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs" : "bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}\`}><div className="flex items-center justify-between gap-1 w-full"><div className="flex items-center gap-1 min-w-0 flex-1"><button onClick={() => handleUpdateChore(dateKey, cr.index_, {\r
              done: !status.done\r
            })} className="shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none">{status.done ? <SquareCheckBig className="w-3.5 h-3.5 text-emerald-600" /> : <Square className="w-3.5 h-3.5 hover:text-slate-600" />}</button><span className={\`truncate text-[10px] font-medium leading-tight \${status.done ? "line-through" : ""}\`}>{cr.task || cr.row[0]}</span></div><div className="flex items-center gap-1 shrink-0">{freq.frequency === "weekly" && <span className="text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase" title="Once-a-week task">1x/wk</span>}{getSpecificKidForChore(cr.task || cr.row[0]) ? <span className="shrink-0 text-[8px] px-1 py-0.2 rounded font-bold" style={{\r
              backgroundColor: ((_a2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _a2.bg) || "#FCE7F3",\r
              color: ((_b2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _b2.text) || "#BE185D"\r
            }}>{getSpecificKidForChore(cr.task || cr.row[0])}</span> : isBedroomChore(cr.task || cr.row[0]) ? <span className="shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700" title="Each child cleans own bedroom">Own Rooms</span> : status.who ? <span className="shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold" style={{\r
              backgroundColor: (assignee == null ? void 0 : assignee.bg) || "#F1F5F9",\r
              color: (assignee == null ? void 0 : assignee.text) || "#475569"\r
            }} title={String(status.who)}>{String(status.who).slice(0, 2)}</span> : <button onClick={() => setActiveDayModal(dateKey)} className="shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5" title="Assign person">+</button>}</div></div>{isBedroomChore(cr.task || cr.row[0]) && !getSpecificKidForChore(cr.task || cr.row[0]) && <div className="pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1">{getKidsPresentOnDate(dateKey).map(kidName => {\r
              var _a3;\r
              const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);\r
              const kidMember = getMember(kidName);\r
              return <button key={kidName} type="button" onClick={e => {\r
                e.stopPropagation();\r
                handleToggleKidBedroom(dateKey, cr.index_, kidName);\r
              }} className={\`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition \${isKidDone ? "bg-emerald-100 text-emerald-800 border-emerald-300 line-through" : "bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}\`} title={\`Click to toggle \${kidName}'s room\`}><span className="w-1.5 h-1.5 rounded-full inline-block" style={{\r
                backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#888"\r
              }} /><span>{kidName}</span>{isKidDone ? "\\u2713" : ""}</button>;\r
            })}</div>}</div>;\r
          })}{dayChores.length > 3 && <button onClick={() => setActiveDayModal(dateKey)} className="w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5">+{dayChores.length - 3}{" more"}</button>}{dayChores.length === 0 && <div className="text-[10px] text-slate-400 italic py-2 text-center">No chores</div>}</div></div><button onClick={() => setActiveDayModal(dateKey)} className="mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition">Manage Day</button></div>;\r
          return (\r
            <div\r
              key={dateKey}\r
              className={\`min-h-[160px] p-2 flex flex-col justify-between transition-colors \${isCurrentMonth ? "bg-white" : "bg-slate-50/80 border-dashed border-slate-200"\r
                }\`}\r
            >\r
              <div>\r
                <div className="flex items-center justify-between mb-1.5">\r
                  <span\r
                    className={\`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center \${isCurrentMonth ? "bg-slate-100 text-slate-800" : "bg-slate-200/70 text-slate-700"\r
                      }\`}\r
                  >\r
                    {day}\r
                  </span>\r
                  {dayChores.length > 0 && (\r
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">\r
                      {dayChores.length} chores\r
                    </span>\r
                  )}\r
                </div>\r
                {(() => {\r
                  const status = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);\r
                  if (status.isArrivalDay) {\r
                    return (\r
                      <div\r
                        className="text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs"\r
                        title="Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay"\r
                      >\r
                        <span>{"\\u{1F3E0} Cadence & Mason arrive 5 PM"}</span>\r
                      </div>\r
                    );\r
                  } else if (status.isDepartureDay) {\r
                    return (\r
                      <div\r
                        className="text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs"\r
                        title="Cadence & Mason depart today at 5:00 PM"\r
                      >\r
                        <span>{"\\u{1F44B} Cadence & Mason leave 5 PM"}</span>\r
                      </div>\r
                    );\r
                  }\r
                  return null;\r
                })()}\r
                <div className="space-y-1">\r
                  {dayChores.map(cr => {\r
                    var _a2, _b2;\r
                    const status = getChoreStatus(dateKey, cr.index_, cr.task || cr.row[0]);\r
                    const assignee = getMember(status.who);\r
                    const freq = getChoreFreq(cr);\r
                    const rawTaskTitle = cr.task || cr.row[0] || "";\r
                    const shortTitle = String(rawTaskTitle).split(/\\r?\\n/)[0].trim();\r
                    return (\r
                      <div\r
                        key={cr.index_}\r
                        className={\`text-[11px] p-1 rounded-md border flex flex-col gap-1 \${freq.frequency === "weekly"\r
                          ? "bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs"\r
                          : "bg-white border-slate-200 text-slate-800 shadow-2xs"\r
                          }\`}\r
                      >\r
                        <div className="flex items-center justify-between gap-1 w-full">\r
                          <span className="truncate text-[10px] font-medium leading-tight flex-1 min-w-0" title={rawTaskTitle}>\r
                            {shortTitle}\r
                          </span>\r
                          <div className="flex items-center gap-1 shrink-0">\r
                            {freq.frequency === "weekly" && (\r
                              <span\r
                                className="text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase"\r
                                title="Once-a-week task"\r
                              >\r
                                1x/wk\r
                              </span>\r
                            )}\r
                            {getSpecificKidForChore(rawTaskTitle) ? (\r
                              <span\r
                                className="shrink-0 text-[8.5px] px-1.5 py-0.2 rounded font-bold"\r
                                style={{\r
                                  backgroundColor:\r
                                    ((_a2 = getMember(getSpecificKidForChore(rawTaskTitle))) == null ? void 0 : _a2.bg) || "#FCE7F3",\r
                                  color:\r
                                    ((_b2 = getMember(getSpecificKidForChore(rawTaskTitle))) == null ? void 0 : _b2.text) || "#BE185D"\r
                                }}\r
                              >\r
                                {getSpecificKidForChore(rawTaskTitle)}\r
                              </span>\r
                            ) : isBedroomChore(rawTaskTitle) ? (\r
                              <span\r
                                className="shrink-0 text-[8.5px] px-1.5 py-0.2 rounded font-bold bg-pink-100 text-pink-700"\r
                                title="Each child cleans own bedroom"\r
                              >\r
                                Own Rooms\r
                              </span>\r
                            ) : status.who ? (\r
                              <span\r
                                className="shrink-0 text-[9px] px-1.5 py-0.2 rounded font-semibold"\r
                                style={{\r
                                  backgroundColor: (assignee == null ? void 0 : assignee.bg) || "#F1F5F9",\r
                                  color: (assignee == null ? void 0 : assignee.text) || "#475569"\r
                                }}\r
                                title={String(status.who)}\r
                              >\r
                                {String(status.who)}\r
                              </span>\r
                            ) : (\r
                              <span className="shrink-0 text-[8.5px] text-slate-400 italic px-1">Unassigned</span>\r
                            )}\r
                          </div>\r
                        </div>\r
                        {isBedroomChore(rawTaskTitle) && !getSpecificKidForChore(rawTaskTitle) && (\r
                          <div className="pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1">\r
                            {getKidsPresentOnDate(dateKey).map(kidName => {\r
                              const kidMember = getMember(kidName);\r
                              return (\r
                                <span\r
                                  key={kidName}\r
                                  className="text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border bg-white/90 text-slate-700 border-slate-200"\r
                                >\r
                                  <span\r
                                    className="w-1.5 h-1.5 rounded-full inline-block"\r
                                    style={{ backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#888" }}\r
                                  />\r
                                  <span>{kidName}</span>\r
                                </span>\r
                              );\r
                            })}\r
                          </div>\r
                        )}\r
                      </div>\r
                    );\r
                  })}\r
                  {dayChores.length === 0 && (\r
                    <div className="text-[10px] text-slate-400 italic py-2 text-center">No chores</div>\r
                  )}\r
                </div>\r
              </div>\r
            </div>\r
          );\r
        })}</div></div>;\r
      })}</div></div>}{activeTab === "matrix" && <div className="space-y-4"><div id="printable-schedule-card" className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden"><div className="no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2"><h2 className="text-base font-bold text-slate-900">Weekly Schedule</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />{"Active Week: "}{activeSyncWeek}{" \\u2022 "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><p className="text-xs text-slate-500 mt-0.5">{"Single-page Letter Landscape Layout - Printed.pdf"}</p></div><div className="flex flex-wrap items-center gap-2"><div className="relative"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search schedule chores..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div><button onClick={() => {\r
        const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || { year: 2026, month: 9, day: 19 };\r
        const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);\r
        setMonthSchedule(prev => {\r
          const next = { ...prev };\r
          weekDays.forEach(d => {\r
            next[d.dateKey] = {};\r
          });\r
          return next;\r
        });\r
        setChoreEdits({});\r
        if (printableRangeIndex >= 0 && printableSheet && Array.isArray(printableSheet.data)) {\r
          printableSheet.data.forEach(r => {\r
            if (r.index_ >= 5 && r.index_ <= 9) {\r
              const blankRow = new Array(15).fill(null);\r
              blankRow[0] = r.row[0];\r
              for (let dIdx = 0; dIdx < 7; dIdx++) {\r
                blankRow[1 + dIdx * 2] = "";\r
                blankRow[2 + dIdx * 2] = false;\r
              }\r
              updateItem(printableRangeIndex, r.index_, blankRow);\r
            } else if (r.index_ >= 13 && r.index_ <= 15) {\r
              const blankWeekly = new Array(15).fill(void 0);\r
              blankWeekly[9] = "Who: _____________________";\r
              blankWeekly[14] = false;\r
              updateItem(printableRangeIndex, r.index_, blankWeekly);\r
            }\r
          });\r
        }\r
        setNotice("Cleared daily & weekly WHO/DONE assignments for a blank printable template!");\r
        setTimeout(() => setNotice(null), 3000);\r
      }} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs" title="Clear WHO/DONE cells to print a blank fill-in sheet"><span>Clear Names (Blank Sheet)</span></button><button onClick={handleAutoAssignCurrentWeek} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs" title="Automatically distribute chores across active members for current week"><Sparkles className="w-3.5 h-3.5 text-amber-600" /><span>Distribute Current Week</span></button><button onClick={() => window.print()} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer" title="Print 1-page Letter Landscape schedule"><span>🖨️ Print Schedule</span></button></div></div><div className="overflow-x-auto"><table id="printable-schedule-table" className="w-full table-fixed border-collapse text-left text-xs" style={{ borderColor: "#C55A11" }}><colgroup><col style={{ width: "21%" }} />{DAY_STYLES.map(d => <React.Fragment key={\`col-\${d.name}\`}><col style={{ width: "7.5%" }} /><col style={{ width: "3.78%" }} /></React.Fragment>)}</colgroup><thead><tr style={{ backgroundColor: "#002060", borderBottom: "3px solid #FFFFFF" }}><th colSpan={15} className="py-2 px-3 text-left text-xl font-bold text-white tracking-tight">Chore Schedule</th></tr><tr><th className="p-0 align-top bg-white" style={{ borderRight: "2px solid #FFFFFF" }}><div className="text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white">FOR THE WEEK OF:</div><div className="text-lg font-bold py-1.5 text-center text-white" style={{ backgroundColor: "#002060" }}>{(() => {\r
        const p = parseDateKey(activeSyncWeek || sheetStartDateStr);\r
        return p ? \`\${p.month + 1}/\${p.day}/\${p.year}\` : activeSyncWeek || sheetStartDateStr || "10/19/2026";\r
      })()}</div></th>{DAY_STYLES.map((d, dayIdx) => {\r
        const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || {\r
          year: 2026,\r
          month: 9,\r
          day: 19\r
        };\r
        const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);\r
        const dayNumber = colDate.getDate();\r
        return <th key={d.name} colSpan={2} className="py-1.5 px-1 text-center text-white font-bold align-middle" style={{\r
          backgroundColor: d.color,\r
          borderRight: dayIdx < 6 ? "2px solid #FFFFFF" : "none"\r
        }}><div className="text-xs font-bold uppercase tracking-wider">{d.short.toUpperCase()}</div><div className="text-sm font-bold leading-tight mt-1">{dayNumber}</div></th>;\r
      })}</tr><tr className="bg-white text-[8.5px] font-bold text-slate-900" style={{ borderTop: "2px solid #FFFFFF", borderBottom: "2px solid #C55A11" }}><th className="py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]">TASK</th>{DAY_STYLES.map(d => <React.Fragment key={\`sub-\${d.name}\`}><th className="py-0.5 px-1 text-center uppercase font-bold">WHO</th><th className="py-0.5 px-1 text-center font-bold" title="Done"><SquareCheckBig className="w-3 h-3 mx-auto text-slate-800" /></th></React.Fragment>)}</tr></thead><tbody>{printableScheduleItems.filter(item => {\r
        if (searchQuery && !item.isSectionHeader) {\r
          if (!(item.task || "").toLowerCase().includes(searchQuery.toLowerCase())) return false;\r
        }\r
        if (!item.isSectionHeader && isSignOffChore(item.task)) {\r
          return false;\r
        }\r
        return true;\r
      }).map((item, idx) => {\r
        var _a2, _b2;\r
        if (item.isSectionHeader) {\r
          if (item.headerType === "daily") {\r
            return <tr key={\`header-daily-\${item.index_}\`} style={{ backgroundColor: "#002060", borderBottom: "1.5px solid #C55A11" }}><td colSpan={15} className="py-1.5 px-3 font-bold text-sm text-white">Daily Tasks</td></tr>;\r
          }\r
          return <tr key={\`header-weekly-\${item.index_}\`} style={{ backgroundColor: "#002060", borderTop: "1.5px solid #002060", borderBottom: "1.5px solid #C55A11" }} className="text-white font-bold"><td className="py-1.5 px-3 text-sm font-bold">Weekly Tasks</td><td colSpan={8} className="py-1.5 px-2.5 text-xs font-bold">Description</td><td colSpan={6} className="py-1.5 px-2.5 text-xs font-bold">Initials / Assigned</td></tr>;\r
        }\r
        const cr = item;\r
        const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "Chore";\r
        const titleLines = String(taskTitle).split(/\\r?\\n/).map(s => s.trim()).filter(Boolean);\r
        const mainTitle = titleLines[0] || taskTitle;\r
        const subTitle = titleLines.slice(1).join(" ");\r
        const choreFreq = getChoreFreq(cr);\r
        const isSpecialKidChore = getSpecificKidForChore(taskTitle);\r
        const isKidsChecklistTask = isKidsChecklistChore(taskTitle) && !isSpecialKidChore;\r
        const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);\r
        const rawDescription = (cr.notes && String(cr.notes).trim())\r
          ? String(cr.notes).trim()\r
          : ((_b2 = cr.row) == null ? void 0 : _b2[1]) && (isKidsChecklistTask || isStreamlined) && !familyMembers.some(m => m.name.toLowerCase() === String(cr.row[1]).trim().toLowerCase())\r
            ? String(cr.row[1]).trim()\r
            : isLaundryChore(taskTitle)\r
              ? "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away"\r
              : isBedroomChore(taskTitle)\r
                ? "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum"\r
                : isCleanBasementChore(taskTitle)\r
                  ? "- Pick Up, Organize, Dust & Vacuum"\r
                  : isHerdFeedingStationChore(taskTitle)\r
                    ? "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste"\r
                    : taskTitle.toLowerCase().includes("recycling")\r
                      ? "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)"\r
                      : taskTitle.toLowerCase().includes("waste")\r
                        ? "- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)"\r
                        : "";\r
        return <tr key={\`row-\${cr.index_}-\${taskTitle}\`} className="bg-white hover:bg-slate-50/60 transition-colors" style={{ borderBottom: "1px solid #C55A11" }}><td className="py-1.5 px-2 text-slate-900 bg-white align-middle" style={{ borderLeft: "1px solid #C55A11", borderRight: "1.5px solid #475569" }}><div className="leading-tight text-slate-900 font-semibold text-[11px]">{mainTitle}</div>{subTitle && <div className="text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight">{subTitle}</div>}</td>{isKidsChecklistTask ? (() => {\r
          const weeklyKidsDone = getWeeklyKidsStatus(cr.index_, taskTitle);\r
          const minionInitials = [\r
            { code: "SG", name: "Sydney" },\r
            { code: "CV", name: "Cadence" },\r
            { code: "MV", name: "Mason" },\r
            { code: "KV", name: "Koda" },\r
            { code: "KG", name: "Keyanna" }\r
          ];\r
          return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={6} className="py-1.5 px-2.5 align-middle bg-white" style={{ borderRight: "1px solid #C55A11" }}><div className="flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900">{minionInitials.map(m => {\r
            const isDone = !!weeklyKidsDone[m.name];\r
            return <button key={m.code} type="button" onClick={() => handleToggleWeeklyKidChore(cr.index_, m.name, taskTitle)} className="inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700" title={\`\${m.name} (\${m.code}) — Click to toggle\`}><span>{m.code}:</span><span className={\`inline-block min-w-[26px] text-center border-b border-slate-700 \${isDone ? "text-emerald-700 font-bold" : "text-transparent select-none"}\`}>{isDone ? "\\u2713" : "____"}</span></button>;\r
          })}</div></td></React.Fragment>;\r
        })() : isStreamlined ? (() => {\r
          const singleStatus = getSingleWeeklyStatus(cr.index_, taskTitle);\r
          const cleanWho = singleStatus.who && !singleStatus.who.startsWith("Who:") && !singleStatus.who.startsWith("Assigned:") ? singleStatus.who : "";\r
          return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={4} className="py-1.5 px-2.5 align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}><div className="flex items-baseline gap-1.5 text-[11px]"><span className="font-semibold text-slate-900 shrink-0">Who:</span><select value={cleanWho} onChange={e => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {\r
            who: e.target.value\r
          })} className="flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer"><option value=""></option><optgroup label="Full-Time Occupants">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Casual Assignees">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Special Groups"><option value="All Non-Casual">All Non-Casual</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option></optgroup></select></div></td><td colSpan={2} className="py-1.5 px-2 align-middle bg-white text-left" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={() => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {\r
            done: !singleStatus.done\r
          })} className="inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full" title="Click to toggle Done"><span>Done:</span><span className={\`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 \${singleStatus.done ? "text-emerald-700 font-bold" : "text-transparent select-none"}\`}>{singleStatus.done ? "\\u2713" : "______"}</span></button></td></React.Fragment>;\r
        })() : (/* BRANCH C: Standard Daily Chores (Mon-Sun Columns) */\r
          DAY_STYLES.map((d, dayIdx) => {\r
            var _a3, _b3, _c2, _d;\r
            const whoCol = 1 + dayIdx * 2;\r
            const doneCol = 2 + dayIdx * 2;\r
            const parsedStart = parseDateKey(sheetStartDateStr) || {\r
              year: 2026,\r
              month: 9,\r
              day: 19\r
            };\r
            const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);\r
            const colDateKey = formatDateKey(colDate.getFullYear(), colDate.getMonth(), colDate.getDate());\r
            const cellStatus = getChoreStatus(colDateKey, cr.index_, taskTitle);\r
            const editRow = ((_a3 = choreEdits[cr.index_]) == null ? void 0 : _a3.row) || (taskTitle ? (_b3 = choreEdits[taskTitle.toLowerCase().trim()]) == null ? void 0 : _b3.row : null);\r
            const curRowWho = (editRow == null ? void 0 : editRow[whoCol]) !== void 0 ? editRow[whoCol] : (_c2 = cr.row) == null ? void 0 : _c2[whoCol];\r
            const curRowDone = (editRow == null ? void 0 : editRow[doneCol]) !== void 0 ? editRow[doneCol] : (_d = cr.row) == null ? void 0 : _d[doneCol];\r
            const whoVal = curRowWho !== void 0 && curRowWho !== null ? String(curRowWho).trim() : (cellStatus == null ? void 0 : cellStatus.who) ? String(cellStatus.who).trim() : "";\r
            const isDone = curRowDone !== void 0 && curRowDone !== null ? curRowDone === true || String(curRowDone).toLowerCase() === "true" : !!(cellStatus == null ? void 0 : cellStatus.done);\r
            return <React.Fragment key={d.name}><td className="p-1 text-center align-middle bg-white" style={{ borderRight: "1px solid #94A3B8" }}><select value={whoVal} onChange={e => {\r
              handleUpdatePrintableCell(cr.index_, dayIdx, "who", e.target.value, taskTitle);\r
            }} className="w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer"><option value=""></option><optgroup label="Full-Time Occupants">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Casual Assignees">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Special Groups"><option value="Non-Casual">Non-Casual</option><option value="All Non-Casual">All Non-Casual</option><option value="Each Child">Each Child</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option></optgroup>{whoVal && !familyMembers.some(m => m.name === whoVal) && !["Non-Casual", "All Non-Casual", "Each Child", "All Kids", "Parents"].includes(whoVal) && <option value={whoVal}>{whoVal}</option>}</select></td><td className="p-1 text-center align-middle bg-white" style={{ borderRight: dayIdx < 6 ? "1.5px solid #475569" : "1px solid #C55A11" }}><button type="button" onClick={() => {\r
              handleUpdatePrintableCell(cr.index_, dayIdx, "done", !isDone, taskTitle);\r
            }} className="w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer" title={isDone ? "Mark as not done" : "Mark as done"}>{isDone ? <span className="text-emerald-700 font-black text-xs">{"\\u2713"}</span> : <span className="text-slate-300 print:hidden text-[10px]">☐</span>}</button></td></React.Fragment>;\r
          }))}</tr>;\r
      })}{/* Decorative 7-Day Color Band matching Weekly Chores Original - Printed.pdf */}\r
          <tr className="h-14"><td style={{ backgroundColor: "#002060" }} />{DAY_STYLES.map(d => <td key={\`band-\${d.name}\`} colSpan={2} style={{ backgroundColor: d.color }} />)}</tr>\r
          {/* Weekly Sign-Off Row matching Weekly Chores Original - Printed.pdf */}\r
          <tr className="bg-white text-slate-900" style={{ borderTop: "1px solid #475569", borderBottom: "2.5px solid #C55A11" }}><td className="py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white" style={{ borderLeft: "1px solid #C55A11", borderRight: "1.5px solid #475569" }}>Weekly Sign-Off</td><td colSpan={12} className="py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white" style={{ borderRight: "1.5px solid #475569" }}>Parent Initials:</td><td colSpan={2} className="py-2 px-2 text-center bg-white" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={handleToggleWeeklySignOff} className="inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900" title="Click to toggle Parent Sign-Off"><span className={\`inline-block min-w-[56px] border-b border-slate-800 \${signOffStatus.done ? "text-emerald-700 font-bold" : "text-transparent select-none"}\`}>{signOffStatus.done ? "\\u2713 TV / MV" : "_________"}</span></button></td></tr></tbody></table></div></div><div className="no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs"><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-indigo-900">HOUSEHOLD ROSTER</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div><strong className="text-slate-900">{"\\u2022 Full-Time:"}</strong>{" "}{familyMembers.filter(m => m.type === "regular").map(m => m.name).join(", ") || "Sydney, Thom, Meghan"}</div><div><strong className="text-pink-900">{"\\u2022 Bi-Weekly:"}</strong>{" "}{familyMembers.filter(m => m.type === "biweekly").map(m => m.name).join(" & ") || "Cadence & Mason"}</div><div><strong className="text-sky-900">{"\\u2022 Casual:"}</strong>{" "}{familyMembers.filter(m => m.type === "casual").map(m => m.name).join(", ") || "Koda, Keyanna"}</div></div></div><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-pink-900">BI-WEEKLY SCHEDULE</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div>{"\\u2022 Cadence & Mason: Alternating bi-weekly schedule"}</div><div>{"\\u2022 Status this week: Not here \\u2022 Arrive Sunday, Oct. 18 @ 5:00 PM"}</div><div>{"\\u2022 Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}</div><div>{"\\u2022 Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}</div><div>{"\\u2022 On-weeks (Starts Oct 19): Included in daily chore rotations"}</div></div></div><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-amber-900">{'PET CARE ROUTINE ("FEED THE HERD")'}</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div>{"\\u2022 Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}</div><div>{"\\u2022 Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}</div><div>{"\\u2022 Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}</div><div>{"\\u2022 Routine: Daily feeding, fresh water & station cleanup"}</div></div></div></div></div>}{activeTab === "stats" && <div className="max-w-4xl mx-auto space-y-6"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Scheduled Chores</span><Calendar className="w-4 h-4 text-slate-400" /></div><div className="text-2xl font-bold text-slate-900 mt-2">{monthStats.totalScheduled}</div><p className="text-xs text-slate-500 mt-1">{"Total across "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</p></div><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Completed Chores</span><CircleCheck className="w-4 h-4 text-emerald-500" /></div><div className="text-2xl font-bold text-emerald-600 mt-2">{monthStats.totalCompleted}</div><p className="text-xs text-slate-500 mt-1">{monthStats.completionRate}% completion rate</p></div><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Active Tasks</span><ListTodo className="w-4 h-4 text-indigo-500" /></div><div className="text-2xl font-bold text-indigo-600 mt-2">{choreRows.length}</div><p className="text-xs text-slate-500 mt-1">Daily & weekly routines</p></div><div className="bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-bold text-amber-900">Current Top Performer</span><Crown className="w-4 h-4 text-amber-600" /></div><div className="text-xl font-black text-amber-950 mt-2 truncate">{topPerformer ? topPerformer.name : "TBD"}</div><p className="text-xs text-amber-800 mt-1 truncate">{topPerformer ? \`\${topPerformer.done} chores finished\` : "Track chores to rank"}</p></div></div><div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner"><Trophy className="w-6 h-6 text-amber-200" /></div><div><div className="flex items-center gap-2"><span className="text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">Monthly Incentive Prize</span><span className="text-xs opacity-90">{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</span></div><h3 className="text-base font-extrabold mt-0.5">Top Performer Reward & Recognition</h3></div></div><div className="flex items-center gap-2"><button onClick={() => {\r
            setIsEditingIncentive(prev => !prev);\r
            setIncentiveDraft(monthlyIncentive);\r
          }} className="text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700" /><span>{isEditingIncentive ? "Cancel Edit" : "Customize Incentive"}</span></button></div></div>{!isEditingIncentive ? <div className="pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"><div className="space-y-1"><div className="text-amber-100 font-medium">Incentive for Highest Monthly Chore Completions:</div><div className="text-sm font-black text-white flex items-center gap-2"><Gift className="w-4 h-4 text-amber-200 shrink-0" /><span>{monthlyIncentive}</span></div></div>{topPerformer && <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20"><Crown className="w-4 h-4 text-amber-200 shrink-0" /><div><div className="text-[10px] text-amber-100 uppercase tracking-wider font-bold">Leading Candidate</div><div className="font-extrabold text-xs text-white">{topPerformer.name}{" ("}{topPerformer.done}{" finished \\u2022 "}{topPerformer.pct}%)</div></div></div>}</div> : <div className="pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20"><label className="block font-bold text-white mb-1">Set Monthly Reward / Incentive Prize for the Top Performer:</label><div className="flex gap-2"><input type="text" value={incentiveDraft} onChange={e => setIncentiveDraft(e.target.value)} placeholder="e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass..." className="flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300" /><button onClick={() => {\r
            if (incentiveDraft.trim()) {\r
              setMonthlyIncentive(incentiveDraft.trim());\r
              setIsEditingIncentive(false);\r
              setNotice(\`Updated Monthly Incentive: "\${incentiveDraft.trim()}"\`);\r
              setTimeout(() => setNotice(null), 3e3);\r
            }\r
          }} className="px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition">Save Prize</button></div><div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1"><span className="opacity-80">Quick ideas:</span><button onClick={() => setIncentiveDraft("$15 Allowance Bonus & Pizza Night Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$15 + Pizza Night"}</button><button onClick={() => setIncentiveDraft("1-Day Chore Exemption Pass & Movie Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">1-Day Chore Pass</button><button onClick={() => setIncentiveDraft("$20 Gift Card & Weekend Treat")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$20 Gift Card"}</button><button onClick={() => setIncentiveDraft("Family Ice Cream Outing of Their Choice")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">Ice Cream Outing</button></div></div>}</div><div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200"><div><div className="flex items-center gap-2"><h3 className="text-base font-bold text-slate-900">Family Members Completion</h3><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Kids & Minions ({rankedMembers.length}{" Members)"}</span></div><p className="text-xs text-slate-500 mt-0.5">{"Monthly Total Tracker ranked by total chores completed for "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}. Kids and minions completion leaderboard competing for the monthly reward.</p></div><div className="flex items-center gap-2 text-xs text-slate-500"><Award className="w-4 h-4 text-amber-500" /><span className="font-semibold text-slate-700">Ranked by Monthly Completions</span></div></div><div className="space-y-3">{rankedMembers.map((m, idx) => {\r
            const isFirst = idx === 0 && m.done > 0;\r
            const isSecond = idx === 1 && m.done > 0;\r
            const isThird = idx === 2 && m.done > 0;\r
            return <div key={m.id} className={\`p-3.5 rounded-xl border transition-all \${isFirst ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm" : "border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}\`}><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5"><div className="flex items-center gap-3"><div className={\`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 \${isFirst ? "bg-amber-500 text-white shadow-xs" : isSecond ? "bg-slate-300 text-slate-800" : isThird ? "bg-amber-700/80 text-white" : "bg-slate-100 text-slate-500"}\`}>{isFirst ? <Crown className="w-4 h-4" /> : \`#\${idx + 1}\`}</div><div className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full shrink-0" style={{\r
              backgroundColor: m.color\r
            }} /><span className="font-bold text-sm text-slate-900">{m.name}</span>{m.role && <span className="text-xs text-slate-500 font-normal">({m.role}{" = "}{m.role === "Supreme Overlord" ? "Parent" : "Kid"})</span>}<span className={\`text-[10px] font-semibold px-2 py-0.5 rounded-full border \${m.type === "biweekly" ? "bg-pink-50 text-pink-700 border-pink-200" : m.type === "casual" ? "bg-sky-50 text-sky-700 border-sky-200" : "bg-slate-100 text-slate-600 border-slate-200"}\`}>{m.residency}</span>{isFirst && <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs"><span>{"\\u{1F3C6}"}</span><span>{"Top Performer \\u2022 Incentive Winner"}</span></span>}</div></div><div className="flex items-center gap-3 self-end sm:self-auto text-xs"><div className="text-right"><span className="font-extrabold text-sm text-slate-900">{m.done}</span><span className="text-slate-500">{" / "}{m.total}{" completed"}</span></div><span className={\`font-black text-xs px-2 py-0.5 rounded-md \${m.pct >= 80 ? "bg-emerald-100 text-emerald-800" : m.pct >= 50 ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"}\`}>{m.pct}%</span></div></div><div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden"><div className="h-2.5 rounded-full transition-all duration-500" style={{\r
              width: \`\${m.pct}%\`,\r
              backgroundColor: isFirst ? "#D97706" : m.color\r
            }} /></div>{isFirst && <div className="mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium"><div className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700 shrink-0" /><span>{"Qualifying Reward: "}<strong>{monthlyIncentive}</strong></span></div><span className="font-bold text-amber-700">{"Rank #1 in "}{MONTH_NAMES[selectedMonth]}</span></div>}</div>;\r
          })}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub Master Data</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Monthly Calendar & Printable Weekly Schedule</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex flex-wrap items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Selected Week: "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Kids Week: "}<strong>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong></span><button type="button" onClick={handleSaveAsDefault} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer" title="Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json"><span>💾</span><span>Save as Default</span></button><button type="button" onClick={handleExportConfig} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Download / export current configuration backup file (.json)"><span>⬇️</span><span>Export Config</span></button><label className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Import / restore a configuration file (.json)"><span>⬆️</span><span>Import Config</span><input type="file" accept=".json" onChange={handleImportConfigFile} className="hidden" /></label></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Special Rules & Parameters</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{(() => {\r
            const activeOverlords = familyMembers.filter(m => m.active !== false && (m.role === "Supreme Overlord" || m.role === "Overseer Supreme")).map(m => m.name);\r
            const overlordsLabel = activeOverlords.length > 0 ? activeOverlords.join(" & ") : "None";\r
            const activeFullTime = familyMembers.filter(m => m.active !== false && m.type === "regular").map(m => m.name);\r
            const activeBiWeekly = familyMembers.filter(m => m.active !== false && m.type === "biweekly").map(m => m.name);\r
            const activeHereThisWeek = isBiWeeklyHereThisWeek ? [...activeFullTime, ...activeBiWeekly] : activeFullTime;\r
            return <><div className="p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1"><span className="font-bold text-indigo-900 flex items-center gap-1.5"><span>{"\\u{1F451}"}</span>{"Supreme Overlords (Parents) & Minions (Kids)"}</span><p className="text-[11px] text-slate-600 leading-relaxed"><strong>{overlordsLabel}</strong>{", AKA "}<em>Supreme Overlords</em>{", actively share daily chores with the "}<strong>Kids</strong>{", AKA "}<em>Minions</em>.<br /><strong>Sunday Supper Rule:</strong>{" On Sundays, "}<em>Make Supper</em>{" is always assigned exclusively to "}<strong>{overlordsLabel}</strong>.<br />{"They also conduct the Sunday "}<strong>Weekly Sign-Off & Inspection</strong>.</p></div><div className="p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1"><span className="font-bold text-pink-900 flex items-center gap-1.5"><span>{"\\u{1F3E0}"}</span>{" Custody Rotation: Kids Week"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"For selected week, "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong>{", Kids Week = "}<strong className={isBiWeeklyHereThisWeek ? "text-emerald-700" : "text-rose-700"}>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong>.<br /><strong>{activeBiWeekly.length > 0 ? activeBiWeekly.join(" & ") : "Bi-Weekly Occupants"}</strong>{" are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at "}<strong>5:00 PM</strong>{". "}{isBiWeeklyHereThisWeek ? \`Chores for this week are distributed across all \${activeHereThisWeek.length} active household members (\${activeHereThisWeek.join(", ")}).\` : \`Chores for this week are distributed among the full-time roster (\${activeFullTime.join(", ")}).\`}</p></div></>;\r
          })()}<div className="p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1"><span className="font-bold text-amber-900 flex items-center gap-1.5"><span>{"\\u{1F69B}"}</span>{" Alternating Curbside Schedule"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"Curbside tasks alternate bi-weekly on Thursday evenings for the "}<strong>Full-Time</strong>{" & "}<strong>Bi-Weekly</strong>{" occupants."}<br />{(() => {\r
            const thu = activeWeekDays[3] || activeWeekDays[0];\r
            const wasteActive = thu ? isCurbsideActiveOnDate("Curbside Waste", thu.year, thu.month, thu.day) : false;\r
            const recyclingActive = thu ? isCurbsideActiveOnDate("Curbside Recycling", thu.year, thu.month, thu.day) : true;\r
            return <>{"For selected week, "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong>{":"}<br />{"Waste = "}<strong className={wasteActive ? "text-emerald-700" : "text-rose-700"}>{wasteActive ? "Active" : "Inactive"}</strong><br />{"Recycling = "}<strong className={recyclingActive ? "text-emerald-700" : "text-rose-700"}>{recyclingActive ? "Active" : "Inactive"}</strong></>;\r
          })()}</p></div></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4"><div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl"><div className="text-[10px] font-bold text-purple-900 uppercase tracking-wider">Full-Time Occupants</div><div className="text-[8px] italic text-purple-800 leading-tight" style={{ fontSize: "8px" }}>(Eternally working)</div><div className="text-lg font-extrabold text-purple-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").length}{" Members"}</div><div className="text-[11px] text-purple-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-pink-50/70 border border-pink-200 rounded-xl"><div className="text-[10px] font-bold text-pink-900 uppercase tracking-wider">Bi-Weekly Occupants</div><div className="text-[8px] italic text-pink-800 leading-tight" style={{ fontSize: "8px" }}>(Half-Timers)</div><div className="text-lg font-extrabold text-pink-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").length}{" Members"}</div><div className="text-[11px] text-pink-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl"><div className="text-[10px] font-bold text-sky-900 uppercase tracking-wider">Casual Assignees</div><div className="text-[8px] italic text-sky-800 leading-tight" style={{ fontSize: "8px" }}>(Manually added to schedule)</div><div className="text-lg font-extrabold text-sky-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").length}{" Members"}</div><div className="text-[11px] text-sky-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl"><div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Herd</div><div className="text-[8px] italic text-amber-800 leading-tight" style={{ fontSize: "8px" }}>(Various beasts)</div><div className="text-lg font-extrabold text-amber-950 mt-0.5">{rosterPets.filter(p => p.active !== false).length}{" Pets"}</div><div className="text-[11px] text-amber-800 break-words leading-snug mt-0.5">{rosterPets.filter(p => p.active !== false).map(p => p.name).join(", ") || "None"}</div></div></div><div className="space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600" /><h3 className="text-sm font-bold text-slate-900">Household Members</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{"Rows 5\\u201311 \\u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{familyMembers.length}{" Registered Occupants"}</span><button type="button" onClick={() => setShowAddMemberModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer" title="Add a new household member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-visible border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Role</th><th className="p-3">Occupancy</th><th className="p-3">Special Rotation Groups</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{familyMembers.map(member => {\r
            const roleVal = member.role === "Supreme Overlord" || member.role === "Overseer Supreme" ? "Supreme Overlord" : "Minion";\r
            const resVal = member.type === "biweekly" ? "Bi-Weekly" : member.type === "casual" ? "Casual" : "Full-Time";\r
            const allGroupTypes = ["Parents", "Kids", "Non-Casual", "All"];\r
            const selectedGroups = String(member.specialGroups || "")\r
              .split(",")\r
              .map(s => s.trim())\r
              .filter(Boolean);\r
            const isDropdownOpen = openMemberGroupDropdown === member.index_;\r
            const isEditingMember = editingMemberIndex === member.index_;\r
            const saveMemberInlineEdit = () => {\r
              const cleanName = memberEditName.trim() || member.name;\r
              handleUpdateRosterMember(member.index_, {\r
                name: cleanName\r
              });\r
              setEditingMemberIndex(null);\r
            };\r
            const toggleGroupType = (grpType: string) => {\r
              const currentSet = new Set(selectedGroups);\r
              if (currentSet.has(grpType)) {\r
                currentSet.delete(grpType);\r
              } else {\r
                currentSet.add(grpType);\r
              }\r
              const nextOrdered = allGroupTypes.filter(g => currentSet.has(g));\r
              handleUpdateRosterMember(member.index_, {\r
                specialGroups: nextOrdered.join(", ")\r
              });\r
            };\r
            return <tr key={\`\${member.index_}-\${member.name}\`} className={\`transition \${isEditingMember ? "bg-indigo-50/50" : "hover:bg-slate-50/70"}\`}><td className="p-3 font-semibold text-slate-800"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full shrink-0" style={{\r
              backgroundColor: member.color\r
            }} />{isEditingMember ? <input type="text" value={memberEditName} onChange={e => setMemberEditName(e.target.value)} onKeyDown={e => { if (e.key === "Enter") saveMemberInlineEdit(); if (e.key === "Escape") setEditingMemberIndex(null); }} className="w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /> : <span className="font-bold text-slate-900">{member.name}</span>}</div></td><td className="p-3"><select value={roleVal} onChange={e => handleUpdateRosterMember(member.index_, { role: e.target.value })} className={\`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${roleVal === "Supreme Overlord" ? "bg-amber-100 text-amber-900 border border-amber-300" : "bg-indigo-50 text-indigo-800 border border-indigo-200"}\`}><option value="Supreme Overlord">Supreme Overlord (Parent)</option><option value="Minion">Minion (Kid)</option></select></td><td className="p-3"><select value={resVal} onChange={e => handleUpdateRosterMember(member.index_, { residency: e.target.value })} className={\`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${resVal === "Bi-Weekly" ? "bg-pink-50 text-pink-700 border border-pink-200" : resVal === "Casual" ? "bg-sky-50 text-sky-700 border border-sky-200" : "bg-slate-100 text-slate-700 border border-slate-200"}\`}><option value="Full-Time">Full-Time</option><option value="Bi-Weekly">Bi-Weekly</option><option value="Casual">Casual</option></select></td><td className="p-3 relative"><button type="button" onClick={() => setOpenMemberGroupDropdown(isDropdownOpen ? null : member.index_)} className="w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"><span className="truncate">{selectedGroups.length > 0 ? selectedGroups.join(", ") : "None selected"}</span><ChevronDown className={\`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform \${isDropdownOpen ? "rotate-180 text-indigo-600" : ""}\`} /></button>{isDropdownOpen && <><div className="fixed inset-0 z-20" onClick={() => setOpenMemberGroupDropdown(null)} /><div className="absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1"><div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Rotation Groups</div>{allGroupTypes.map(grpType => {\r
              const isChecked = selectedGroups.includes(grpType);\r
              return <label key={grpType} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => toggleGroupType(grpType)} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>{grpType}</span></label>;\r
            })}</div></>}</td><td className="p-3 text-center"><select value={member.active ? "true" : "false"} onChange={e => handleUpdateRosterMember(member.index_, { active: e.target.value === "true" })} className={\`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${member.active ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-slate-500 bg-slate-100 border border-slate-200"}\`}><option value="true">{"\\u2713 Active"}</option><option value="false">{"\\u25CB Inactive"}</option></select></td><td className="p-3 text-right"><div className="inline-flex items-center justify-end gap-1">{isEditingMember ? <><button type="button" onClick={saveMemberInlineEdit} className="p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer" title="Save name"><Check className="w-3.5 h-3.5" /></button><button type="button" onClick={() => setEditingMemberIndex(null)} className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer" title="Cancel"><X className="w-3.5 h-3.5" /></button></> : <button type="button" onClick={() => {\r
              setEditingMemberIndex(member.index_);\r
              setMemberEditName(member.name);\r
            }} className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer" title={\`Rename \${member.name}\`}><Pen className="w-3.5 h-3.5" /></button>}<button type="button" onClick={() => handleDeleteRosterMember(member.index_, member.name)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer" title={\`Remove \${member.name} from Household Members\`}><Trash2 className="w-3.5 h-3.5" /></button></div></td></tr>;\r
          })}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><span className="text-base">{"\\u{1F43E}"}</span><h3 className="text-sm font-bold text-slate-900">Household Pets</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{"Rows 27\\u201332 \\u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{rosterPets.length}{" Registered Pets"}</span><button type="button" onClick={() => setShowAddPetModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer" title="Add a new household pet member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Species</th><th className="p-3">Feeding Routine</th><th className="p-3">Care Responsibilities</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{rosterPets.map(pet => {\r
            const speciesOptions = ["Dog", "Cat", "Bird", "Fish", "Small Pet", "Other"];\r
            const currentSpecies = pet.type || "Dog";\r
            if (!speciesOptions.includes(currentSpecies)) {\r
              speciesOptions.unshift(currentSpecies);\r
            }\r
            const isEditingPet = editingPetIndex === pet.index_;\r
            const savePetInlineEdit = () => {\r
              const cleanName = petEditDraft.name.trim() || pet.name;\r
              handleUpdateRosterPet(pet.index_, {\r
                name: cleanName,\r
                routine: petEditDraft.routine.trim(),\r
                care: petEditDraft.care.trim()\r
              });\r
              setEditingPetIndex(null);\r
            };\r
            return <tr key={\`\${pet.index_}-\${pet.name}\`} className={\`transition \${isEditingPet ? "bg-amber-50/60" : "hover:bg-slate-50/70"}\`}><td className="p-3 font-semibold text-slate-800"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: pet.color }} /><span className="text-base shrink-0">{pet.icon}</span>{isEditingPet ? <input type="text" value={petEditDraft.name} onChange={e => setPetEditDraft(prev => ({ ...prev, name: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" autoFocus /> : <span className="px-2 py-0.5 rounded-full font-bold text-[11px] border" style={{ backgroundColor: pet.bg, color: pet.text, borderColor: pet.border }}>{pet.name}</span>}</div></td><td className="p-3"><select value={currentSpecies} onChange={e => handleUpdateRosterPet(pet.index_, { type: e.target.value })} className={\`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 \${currentSpecies === "Dog" ? "bg-amber-100 text-amber-900 border border-amber-300" : currentSpecies === "Cat" ? "bg-orange-50 text-orange-800 border border-orange-200" : "bg-slate-100 text-slate-800 border border-slate-200"}\`}>{speciesOptions.map(sp => <option key={sp} value={sp}>{sp}</option>)}</select></td><td className="p-3 font-medium text-slate-700">{isEditingPet ? <input type="text" value={petEditDraft.routine} onChange={e => setPetEditDraft(prev => ({ ...prev, routine: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" /> : pet.routine}</td><td className="p-3 text-slate-600 max-w-md">{isEditingPet ? <input type="text" value={petEditDraft.care} onChange={e => setPetEditDraft(prev => ({ ...prev, care: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" /> : pet.care}</td><td className="p-3 text-center"><select value={pet.active ? "true" : "false"} onChange={e => handleUpdateRosterPet(pet.index_, { active: e.target.value === "true" })} className={\`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 \${pet.active ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-slate-500 bg-slate-100 border border-slate-200"}\`}><option value="true">{"\\u2713 Active"}</option><option value="false">{"\\u25CB Inactive"}</option></select></td><td className="p-3 text-right"><div className="inline-flex items-center justify-end gap-1">{isEditingPet ? <><button type="button" onClick={savePetInlineEdit} className="p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer" title="Save changes"><Check className="w-3.5 h-3.5" /></button><button type="button" onClick={() => setEditingPetIndex(null)} className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer" title="Cancel editing"><X className="w-3.5 h-3.5" /></button></> : <button type="button" onClick={() => {\r
              setEditingPetIndex(pet.index_);\r
              setPetEditDraft({\r
                name: pet.name,\r
                routine: pet.routine,\r
                care: pet.care\r
              });\r
            }} className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer" title={\`Edit \${pet.name}\`}><Pen className="w-3.5 h-3.5" /></button>}<button type="button" onClick={() => handleDeleteRosterPet(pet.index_, pet.name)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer" title={\`Remove \${pet.name} from Household Pets\`}><Trash2 className="w-3.5 h-3.5" /></button></div></td></tr>;\r
          })}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Layers className="w-4 h-4 text-purple-600" /><h3 className="text-sm font-bold text-slate-900">Occupancy Categories & Rules</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Rows 14–17</span></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{hubOccupancyCategories.map(cat => <div key={cat.type} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-sm text-slate-900">{cat.type}</span><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Active</span></div><div className="text-[11px] font-semibold text-indigo-700">{cat.description}</div><p className="text-[11px] text-slate-600 leading-snug"><strong>Rule:</strong>{" "}{cat.rules}</p></div>)}</div></div><div className="mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs"><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-600" /><span>Special Rotation Groups</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 20–25</span></div><div className="space-y-2">{hubSpecialGroups.map(grp => <div key={grp.name} className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-slate-900">{grp.name}</span><span className="text-[10px] text-slate-400 font-medium">Group</span></div><div className="text-[11px] text-slate-600 mt-1 leading-snug">{grp.members}</div></div>)}</div></div><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Settings2 className="w-4 h-4 text-purple-600" /><span>Schedule Configurations</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 18–21</span></div><div className="space-y-2"><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Active Week Start Date</span><div className="text-sm font-extrabold text-indigo-600 mt-0.5">{hubScheduleConfig.activeWeekStart}</div><span className="text-[10px] text-slate-500">Scope: Printable Weekly Schedule</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Custody Schedule Rotation</span><div className="text-sm font-extrabold text-pink-600 mt-0.5">{hubScheduleConfig.custodyRotation}</div><span className="text-[10px] text-slate-500">{"Bi-Weekly Schedule \\u2022 Members: "}{hubScheduleConfig.custodyMembers}</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Waste / Recycling Schedule Rotation</span><div className="text-xs font-semibold text-slate-700 mt-0.5">{hubScheduleConfig.wasteRotation}</div><span className="text-[10px] text-slate-500">{"Alternating weeks \\u2022 Members: "}{hubScheduleConfig.wasteMembers}</span></div></div></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-4"><div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs"><ListTodo className="w-4 h-4" /></div><h3 className="text-base font-bold text-slate-900">Master Chores Template & Registry</h3><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{hubMasterChores.length}{" Tasks \\u2022 Rows 5\\u201315 (Cols 6\\u201310)"}</span></div><p className="text-xs text-slate-500 mt-1">Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet.</p></div><div className="flex flex-wrap items-center gap-2"><button onClick={() => {\r
            setShowInlineAddForm(prev => !prev);\r
          }} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer" title="Add a new master chore">{showInlineAddForm ? <><X className="w-4 h-4" /><span>Close Add Chore</span></> : <><Plus className="w-4 h-4" /><span>Add Chore</span></>}</button></div></div>{showInlineAddForm && <div className="my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn"><div className="flex items-center justify-between pb-2 border-b border-indigo-200"><div className="font-bold text-sm text-indigo-900 flex items-center gap-1.5"><Plus className="w-4 h-4 text-indigo-600" /><span>Add New Master Chore to Household Hub</span></div><button onClick={() => setShowInlineAddForm(false)} className="text-slate-400 hover:text-slate-700 p-1"><X className="w-4 h-4" /></button></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs"><div className="md:col-span-2"><label className="block font-bold text-slate-700 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newMasterDraft.task} onChange={e => setNewMasterDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            task: e.target.value\r
          }))} onKeyDown={e => {\r
            if (e.key === "Enter" && newMasterDraft.task.trim()) {\r
              handleAddNewMasterChore(newMasterDraft);\r
            }\r
          }} placeholder="e.g. Empty dishwasher, sanitize counters, sweep porch..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /></div><div><label className="block font-bold text-slate-700 mb-1">Category</label><select value={newMasterDraft.category} onChange={e => setNewMasterDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            category: e.target.value\r
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={newMasterDraft.frequency} onChange={e => {\r
            const val = e.target.value;\r
            setNewMasterDraft(prev => ({\r
              ...{\r
                ...prev\r
              },\r
              frequency: val,\r
              targetDay: val === "Daily" ? "Mon \\u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : "Saturday"\r
            }));\r
          }} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day(s)</label><select value={newMasterDraft.targetDay} onChange={e => setNewMasterDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            targetDay: e.target.value\r
          }))} className="hidden" /><div className="relative"><button type="button" onClick={() => setOpenTargetDayDropdown(openTargetDayDropdown === "NEW_CHORE" ? null : "NEW_CHORE")} className="w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"><span className="truncate">{newMasterDraft.targetDay || "Select days..."}</span><ChevronDown className={\`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform \${openTargetDayDropdown === "NEW_CHORE" ? "rotate-180 text-indigo-600" : ""}\`} /></button>{openTargetDayDropdown === "NEW_CHORE" && <><div className="fixed inset-0 z-20" onClick={() => setOpenTargetDayDropdown(null)} /><div className="absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1"><div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Select Day(s)</div>{ALL_WEEK_DAYS.map(dayName => { const currentDays = newMasterDraft.selectedTargetDays || parseTargetDayState(newMasterDraft.targetDay).selectedDays; const isChecked = currentDays.includes(dayName); return <label key={dayName} className="flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => { const set = new Set(currentDays); if (set.has(dayName)) set.delete(dayName); else set.add(dayName); const nextDays = ALL_WEEK_DAYS.filter(d => set.has(d)); const nextTarget = formatTargetDayState(nextDays, Boolean(newMasterDraft.customTargetEnabled), newMasterDraft.customTargetText || ""); setNewMasterDraft(prev => ({ ...prev, selectedTargetDays: nextDays, targetDay: nextTarget })); }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>{dayName}</span></label>; })}<div className="pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1"><label className="flex items-center gap-2.5 cursor-pointer select-none"><input type="checkbox" checked={Boolean(newMasterDraft.customTargetEnabled)} onChange={e => { const nextCustom = e.target.checked; const currentDays = newMasterDraft.selectedTargetDays || parseTargetDayState(newMasterDraft.targetDay).selectedDays; const nextTarget = formatTargetDayState(currentDays, nextCustom, newMasterDraft.customTargetText || ""); setNewMasterDraft(prev => ({ ...prev, customTargetEnabled: nextCustom, targetDay: nextTarget })); }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${newMasterDraft.customTargetEnabled ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>Custom</span></label><input type="text" value={newMasterDraft.customTargetText || ""} onChange={e => { const val = e.target.value; const currentDays = newMasterDraft.selectedTargetDays || []; const nextTarget = formatTargetDayState(currentDays, true, val); setNewMasterDraft(prev => ({ ...prev, customTargetEnabled: true, customTargetText: val, targetDay: nextTarget })); }} placeholder="e.g. Thursday Evening..." className="w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div></div></>}</div></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={newMasterDraft.rotationGroup === "All Non-Casual" ? "Non-Casual" : newMasterDraft.rotationGroup} onChange={e => setNewMasterDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            rotationGroup: e.target.value\r
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><optgroup label="Special Rotation Groups"><option value="Non-Casual">Non-Casual</option><option value="Kids">Kids</option><option value="Parents">Parents</option><option value="All">All</option></optgroup><optgroup label="Individual Members">{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</optgroup></select></div><div className="md:col-span-3"><label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label><input type="text" value={newMasterDraft.notes} onChange={e => setNewMasterDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            notes: e.target.value\r
          }))} placeholder="Instructions, supplies, details or timing notes..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium" /></div></div><div className="flex justify-end gap-2 pt-2 border-t border-indigo-200"><button type="button" onClick={() => setShowInlineAddForm(false)} className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition">Cancel</button><button type="button" onClick={() => handleAddNewMasterChore({ ...newMasterDraft, rotationGroup: newMasterDraft.rotationGroup === "All Non-Casual" ? "Non-Casual" : newMasterDraft.rotationGroup })} disabled={!newMasterDraft.task.trim()} className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" /><span>Add Chore to Master List</span></button></div></div>}<div className="grid grid-cols-2 sm:grid-cols-4 gap-3"><div className="p-3 bg-slate-50 rounded-xl border border-slate-200"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Total Template Chores</span><div className="text-xl font-bold text-slate-900 mt-0.5">{hubMasterChores.length}{" Tasks"}</div><span className="text-[11px] text-slate-500">All registered tasks</span></div><div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200"><span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Daily Chores</span><div className="text-xl font-bold text-blue-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("daily")).length}{" Tasks"}</div><span className="text-[11px] text-blue-600">Mon – Sun rotation</span></div><div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200"><span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">Once a Week</span><div className="text-xl font-bold text-purple-900 mt-0.5">{hubMasterChores.filter(c => { const f = (c.frequency || "").toLowerCase(); return (f.includes("weekly") || f.includes("once")) && !f.includes("bi"); }).length}{" Tasks"}</div><span className="text-[11px] text-purple-600">Saturday & Sunday deep tasks</span></div><div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200"><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Bi-Weekly Tasks</span><div className="text-xl font-bold text-amber-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("bi-weekly") || c.frequency.toLowerCase().includes("biweekly")).length}{" Tasks"}</div><span className="text-[11px] text-amber-700">Split Curbside Recycling & Waste</span></div></div><div className="pt-2 space-y-3"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="relative flex-1 max-w-md"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" /><input type="text" placeholder="Search chores by name, category, group, or notes..." value={masterSearchQuery} onChange={e => setMasterSearchQuery(e.target.value)} className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" />{masterSearchQuery && <button onClick={() => setMasterSearchQuery("")} className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"><X className="w-3.5 h-3.5" /></button>}</div><div className="flex items-center gap-1.5 text-xs"><span className="text-slate-500 font-semibold mr-1">Frequency:</span><button onClick={() => setMasterFrequencyFilter("ALL")} className={\`px-2.5 py-1 rounded-md font-semibold transition \${masterFrequencyFilter === "ALL" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}\`}>All</button><button onClick={() => setMasterFrequencyFilter("Daily")} className={\`px-2.5 py-1 rounded-md font-semibold transition \${masterFrequencyFilter === "Daily" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}\`}>Daily</button><button onClick={() => setMasterFrequencyFilter("Once a Week")} className={\`px-2.5 py-1 rounded-md font-semibold transition \${masterFrequencyFilter === "Once a Week" ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-700 hover:bg-purple-100"}\`}>Weekly</button><button onClick={() => setMasterFrequencyFilter("Bi-Weekly")} className={\`px-2.5 py-1 rounded-md font-semibold transition \${masterFrequencyFilter === "Bi-Weekly" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"}\`}>Bi-Weekly</button></div></div><div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs"><span className="text-slate-400 font-semibold mr-1 shrink-0">Category:</span><button onClick={() => setMasterCategoryFilter("ALL")} className={\`px-2.5 py-1 rounded-full font-semibold shrink-0 transition \${masterCategoryFilter === "ALL" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}\`}>All Categories ({hubMasterChores.length})</button>{CHORE_CATEGORIES.map(cat => {\r
            const count = hubMasterChores.filter(c => c.category.toLowerCase() === cat.name.toLowerCase()).length;\r
            return <button key={cat.id} onClick={() => setMasterCategoryFilter(cat.name)} className={\`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border \${masterCategoryFilter === cat.name ? "ring-2 ring-slate-800 shadow-xs" : "opacity-85 hover:opacity-100"} \${cat.bg} \${cat.text} \${cat.border}\`}><span>{cat.icon}</span><span>{cat.name}</span><span className="text-[10px] opacity-75">({count})</span></button>;\r
          })}</div></div><div className="overflow-visible border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3 w-10 text-center">#</th><th className="p-3">Chore / Task</th><th className="p-3">Category</th><th className="p-3">Frequency</th><th className="p-3">Target Day(s)</th><th className="p-3">Rotation Group</th><th className="p-3 text-right">Actions</th></tr></thead><tbody>{filteredMasterChores.map((ch, idx) => {\r
            const isEditing = editingMasterIndex === ch.index_;\r
            const catConfig = CHORE_CATEGORIES.find(c => c.name.toLowerCase() === (ch.category || "").toLowerCase()) || CHORE_CATEGORIES[3];\r
            const draftCatConfig = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.category)\r
              ? CHORE_CATEGORIES.find(c => c.name.toLowerCase() === masterInlineDraft.category.toLowerCase()) || catConfig\r
              : catConfig;\r
            const freqVal = (ch.frequency || "").toLowerCase().includes("bi") ? "Bi-Weekly" : (ch.frequency || "").toLowerCase().includes("once") || (ch.frequency || "").toLowerCase().includes("weekly") ? "Once a Week" : "Daily";\r
            const draftFreqVal = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.frequency) ? masterInlineDraft.frequency : freqVal;\r
            const currentTargetDay = ch.targetDay || (freqVal === "Daily" ? "Mon \\u2013 Sun" : freqVal === "Bi-Weekly" ? "Thursday Evening" : "Saturday");\r
            const draftTargetDay = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.targetDay) !== void 0 ? masterInlineDraft.targetDay : currentTargetDay;\r
            const parsedTargetState = parseTargetDayState(draftTargetDay);\r
            const draftSelectedDays: string[] = isEditing && Array.isArray(masterInlineDraft == null ? void 0 : masterInlineDraft.selectedTargetDays)\r
              ? masterInlineDraft.selectedTargetDays\r
              : parsedTargetState.selectedDays;\r
            const draftCustomEnabled: boolean = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.customTargetEnabled) !== void 0\r
              ? Boolean(masterInlineDraft.customTargetEnabled)\r
              : parsedTargetState.customEnabled;\r
            const draftCustomText: string = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.customTargetText) !== void 0\r
              ? masterInlineDraft.customTargetText\r
              : parsedTargetState.customText;\r
            const isTargetDayOpen = isEditing && openTargetDayDropdown === ch.index_;\r
            const groupVal = ch.rotationGroup || "Non-Casual";\r
            const draftGroupVal = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.rotationGroup) ? masterInlineDraft.rotationGroup : groupVal;\r
            const saveChoreInlineEdit = () => {\r
              const cleanTask = ((masterInlineDraft == null ? void 0 : masterInlineDraft.task) || "").trim() || ch.task;\r
              const cleanNotes = ((masterInlineDraft == null ? void 0 : masterInlineDraft.notes) || "").trim();\r
              const resolvedTargetDay = formatTargetDayState(draftSelectedDays, draftCustomEnabled, draftCustomText);\r
              setOpenTargetDayDropdown(null);\r
              handleUpdateMasterChore(ch.index_, {\r
                oldTask: ch.task,\r
                task: cleanTask,\r
                category: draftCatConfig.name,\r
                frequency: draftFreqVal,\r
                targetDay: resolvedTargetDay,\r
                rotationGroup: draftGroupVal,\r
                notes: cleanNotes\r
              });\r
            };\r
            return <React.Fragment key={\`\${ch.index_ || ch.task}-\${idx}\`}><tr className={\`transition \${idx > 0 ? "border-t border-slate-200" : ""} \${isEditing ? "bg-indigo-50/50" : "hover:bg-slate-50/70"}\`}><td className="px-3 pt-3 pb-1.5 text-center align-middle"><span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]">{idx + 1}</span></td><td className="px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle">{isEditing ? <input type="text" value={(masterInlineDraft == null ? void 0 : masterInlineDraft.task) || ""} onChange={e => setMasterInlineDraft(prev => ({ ...prev, task: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") saveChoreInlineEdit(); if (e.key === "Escape") { setOpenTargetDayDropdown(null); setEditingMasterIndex(null); setMasterInlineDraft(null); } }} className="w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /> : <span className="font-bold text-slate-900 leading-snug">{ch.task}</span>}</td><td className="px-3 pt-3 pb-1.5 align-middle">{isEditing ? <select value={draftCatConfig.name} onChange={e => setMasterInlineDraft(prev => ({ ...prev, category: e.target.value }))} className={\`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${draftCatConfig.bg} \${draftCatConfig.text} \${draftCatConfig.border}\`}>{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.icon}{" "}{c.name}</option>)}</select> : <span className={\`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border \${catConfig.bg} \${catConfig.text} \${catConfig.border}\`}><span>{catConfig.icon}</span><span>{catConfig.name}</span></span>}</td><td className="px-3 pt-3 pb-1.5 align-middle">{isEditing ? <select value={draftFreqVal} onChange={e => {\r
              const nextFreq = e.target.value;\r
              const nextTarget = nextFreq === "Daily" ? "Mon \\u2013 Sun" : nextFreq === "Bi-Weekly" ? "Thursday Evening" : draftTargetDay === "Mon \\u2013 Sun" ? "Saturday" : draftTargetDay;\r
              const nextParsed = parseTargetDayState(nextTarget);\r
              setMasterInlineDraft(prev => ({\r
                ...prev,\r
                frequency: nextFreq,\r
                targetDay: nextTarget,\r
                selectedTargetDays: nextParsed.selectedDays,\r
                customTargetEnabled: nextParsed.customEnabled,\r
                customTargetText: nextParsed.customText\r
              }));\r
            }} className={\`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${draftFreqVal === "Bi-Weekly" ? "bg-amber-50 text-amber-800 border-amber-200" : draftFreqVal === "Daily" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-purple-50 text-purple-700 border-purple-200"}\`}><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select> : <span className={\`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border \${freqVal === "Bi-Weekly" ? "bg-amber-50 text-amber-800 border-amber-200" : freqVal === "Daily" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-purple-50 text-purple-700 border-purple-200"}\`}>{freqVal}</span>}</td><td className="px-3 pt-3 pb-1.5 align-middle relative">{isEditing ? <><button type="button" onClick={() => setOpenTargetDayDropdown(isTargetDayOpen ? null : ch.index_)} className="min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"><span className="truncate">{formatTargetDayState(draftSelectedDays, draftCustomEnabled, draftCustomText)}</span><ChevronDown className={\`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform \${isTargetDayOpen ? "rotate-180 text-indigo-600" : ""}\`} /></button>{isTargetDayOpen && <><div className="fixed inset-0 z-20" onClick={() => setOpenTargetDayDropdown(null)} /><div className="absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1"><div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Target Day(s)</div>{ALL_WEEK_DAYS.map(dayName => {\r
              const isChecked = draftSelectedDays.includes(dayName);\r
              return <label key={dayName} className="flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => {\r
                const set = new Set(draftSelectedDays);\r
                if (set.has(dayName)) set.delete(dayName);\r
                else set.add(dayName);\r
                const nextDays = ALL_WEEK_DAYS.filter(d => set.has(d));\r
                const nextTarget = formatTargetDayState(nextDays, draftCustomEnabled, draftCustomText);\r
                setMasterInlineDraft(prev => ({\r
                  ...prev,\r
                  selectedTargetDays: nextDays,\r
                  targetDay: nextTarget\r
                }));\r
              }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>{dayName}</span></label>;\r
            })}<div className="pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1"><label className="flex items-center gap-2.5 cursor-pointer select-none"><input type="checkbox" checked={draftCustomEnabled} onChange={e => {\r
              const nextCustom = e.target.checked;\r
              const nextTarget = formatTargetDayState(draftSelectedDays, nextCustom, draftCustomText);\r
              setMasterInlineDraft(prev => ({\r
                ...prev,\r
                customTargetEnabled: nextCustom,\r
                targetDay: nextTarget\r
              }));\r
            }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${draftCustomEnabled ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>Custom</span></label><input type="text" value={draftCustomText} onChange={e => {\r
              const val = e.target.value;\r
              const nextTarget = formatTargetDayState(draftSelectedDays, true, val);\r
              setMasterInlineDraft(prev => ({\r
                ...prev,\r
                customTargetEnabled: true,\r
                customTargetText: val,\r
                targetDay: nextTarget\r
              }));\r
            }} onKeyDown={e => { if (e.key === "Enter") { setOpenTargetDayDropdown(null); } }} placeholder="e.g. Thursday Evening..." className="w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div></div></>}</> : <span className="inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200">{currentTargetDay}</span>}</td><td className="px-3 pt-3 pb-1.5 align-middle">{isEditing ? <select value={draftGroupVal} onChange={e => setMasterInlineDraft(prev => ({ ...prev, rotationGroup: e.target.value }))} className={\`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 \${draftGroupVal === "Non-Casual" ? "bg-purple-50 text-purple-800 border-purple-200" : draftGroupVal === "Kids" ? "bg-indigo-50 text-indigo-800 border-indigo-200" : draftGroupVal === "Parents" ? "bg-amber-100 text-amber-900 border-amber-300" : draftGroupVal === "All" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-sky-50 text-sky-800 border-sky-200"}\`}><optgroup label="Special Rotation Groups"><option value="Non-Casual">Non-Casual</option><option value="Kids">Kids</option><option value="Parents">Parents</option><option value="All">All</option></optgroup><optgroup label="Individual Members">{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup></select> : <span className={\`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border \${groupVal === "Non-Casual" ? "bg-purple-50 text-purple-800 border-purple-200" : groupVal === "Kids" ? "bg-indigo-50 text-indigo-800 border-indigo-200" : groupVal === "Parents" ? "bg-amber-100 text-amber-900 border-amber-300" : groupVal === "All" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-sky-50 text-sky-800 border-sky-200"}\`}>{groupVal}</span>}</td><td className="px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle"><div className="inline-flex items-center justify-end gap-1"><button type="button" onClick={() => handleMoveChore(ch, "up")} disabled={idx === 0} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer" title="Move chore up"><ArrowUp className="w-3.5 h-3.5" /></button><button type="button" onClick={() => handleMoveChore(ch, "down")} disabled={idx === filteredMasterChores.length - 1} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer" title="Move chore down"><ArrowDown className="w-3.5 h-3.5" /></button>{isEditing ? <><button type="button" onClick={saveChoreInlineEdit} className="p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer" title="Save changes"><Check className="w-3.5 h-3.5" /></button><button type="button" onClick={() => { setOpenTargetDayDropdown(null); setEditingMasterIndex(null); setMasterInlineDraft(null); }} className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer" title="Cancel editing"><X className="w-3.5 h-3.5" /></button></> : <button type="button" onClick={() => {\r
              const initTargetState = parseTargetDayState(currentTargetDay);\r
              setOpenTargetDayDropdown(null);\r
              setEditingMasterIndex(ch.index_);\r
              setMasterInlineDraft({\r
                task: ch.task || "",\r
                category: catConfig.name,\r
                frequency: freqVal,\r
                targetDay: currentTargetDay,\r
                selectedTargetDays: initTargetState.selectedDays,\r
                customTargetEnabled: initTargetState.customEnabled,\r
                customTargetText: initTargetState.customText,\r
                rotationGroup: groupVal,\r
                notes: ch.notes || ""\r
              });\r
            }} className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer" title={\`Edit \${ch.task}\`}><Pen className="w-3.5 h-3.5" /></button>}<button type="button" onClick={() => handleDeleteMasterChore(ch.index_, ch.task)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer" title={\`Remove "\${ch.task}"\`}><Trash2 className="w-3.5 h-3.5" /></button></div></td></tr><tr className={\`transition \${isEditing ? "bg-indigo-50/50" : "hover:bg-slate-50/70"}\`}><td className="px-3 pb-3 pt-0" /><td colSpan={6} className="px-3 pb-3 pt-0">{isEditing ? <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500"><span className="font-bold text-[11px] text-indigo-800 shrink-0">Instructions / Notes:</span><input type="text" value={(masterInlineDraft == null ? void 0 : masterInlineDraft.notes) || ""} onChange={e => setMasterInlineDraft(prev => ({ ...prev, notes: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") saveChoreInlineEdit(); if (e.key === "Escape") { setEditingMasterIndex(null); setMasterInlineDraft(null); } }} placeholder="Add operational instructions or routine notes..." className="w-full text-xs text-slate-800 bg-transparent focus:outline-none" /></div> : <div className="px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug"><span className="font-bold text-slate-700">Instructions / Notes:</span>{" "}{ch.notes || <span className="italic text-slate-400">No instructions</span>}</div>}</td></tr></React.Fragment>;\r
          })}</tbody></table>{filteredMasterChores.length === 0 && <div className="p-8 text-center bg-white text-slate-500"><ListTodo className="w-8 h-8 text-slate-300 mx-auto mb-2" /><p className="font-semibold">No chores match the current filters</p>{hubMasterChores.length === 0 ? <button onClick={() => setShowInlineAddForm(true)} className="mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg">Add First Chore</button> : <button onClick={() => { setMasterCategoryFilter("ALL"); setMasterFrequencyFilter("ALL"); setMasterSearchQuery(""); }} className="mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg">Reset Filters</button>}</div>}</div></div></div></div>}</main>{activeDayModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div><span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Day Schedule</span><h3 className="text-base font-bold">{(() => {\r
            const parsed = parseDateKey(activeDayModal);\r
            if (!parsed) return activeDayModal;\r
            const d = new Date(parsed.year, parsed.month, parsed.day);\r
            return d.toLocaleDateString(void 0, {\r
              weekday: "long",\r
              month: "long",\r
              day: "numeric",\r
              year: "numeric"\r
            });\r
          })()}</h3></div><button onClick={() => setActiveDayModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs"><span className="text-slate-600 font-medium">{choreRows.filter(cr => {\r
            var _a2, _b2;\r
            return (_b2 = (_a2 = monthSchedule[activeDayModal]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;\r
          }).length}{" of"}{" "}{choreRows.length}{" completed"}</span><div className="flex gap-2"><button onClick={() => {\r
            choreRows.forEach(cr => {\r
              handleUpdateChore(activeDayModal, cr.index_, {\r
                done: true\r
              });\r
            });\r
          }} className="px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition">Mark All Done</button><button onClick={() => {\r
            choreRows.forEach(cr => {\r
              handleUpdateChore(activeDayModal, cr.index_, {\r
                done: false\r
              });\r
            });\r
          }} className="px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition">Reset All</button></div></div><div className="p-4 overflow-y-auto space-y-2 flex-1">{choreRows.map(cr => {\r
            var _a2, _b2, _c2, _d, _e;\r
            const status = getChoreStatus(activeDayModal, cr.index_);\r
            const freq = getChoreFreq(cr);\r
            const parsed = parseDateKey(activeDayModal);\r
            const dayOfWeekIdx = parsed ? (new Date(parsed.year, parsed.month, parsed.day).getDay() + 6) % 7 : 0;\r
            const taskTitleStr = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";\r
            const tLowStr = taskTitleStr.toLowerCase();\r
            const isScheduledForToday = (() => {\r
              if (tLowStr.includes("deep clean") || tLowStr.includes("feeding station")) {\r
                return dayOfWeekIdx === 6;\r
              }\r
              if (tLowStr.includes("recycling")) {\r
                return dayOfWeekIdx === 3 && parsed && isCurbsideActiveOnDate("recycling", parsed.year, parsed.month, parsed.day);\r
              }\r
              if (tLowStr.includes("waste")) {\r
                return dayOfWeekIdx === 3 && parsed && isCurbsideActiveOnDate("waste", parsed.year, parsed.month, parsed.day);\r
              }\r
              if (freq.frequency === "daily") return true;\r
              if (freq.frequency === "weekly") return dayOfWeekIdx === freq.dayOfWeek;\r
              if (freq.frequency === "biweekly") return dayOfWeekIdx === freq.dayOfWeek && parsed && isCurbsideActiveOnDate(taskTitleStr, parsed.year, parsed.month, parsed.day);\r
              return false;\r
            })();\r
            return <div key={cr.index_} className={\`p-2.5 rounded-xl border flex flex-col gap-2 transition \${status.done ? "bg-emerald-50/60 border-emerald-200" : freq.frequency === "weekly" && isScheduledForToday ? "bg-purple-50/60 border-purple-200" : "bg-white border-slate-200 hover:border-slate-300"}\`}><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2.5 flex-1 min-w-0"><button onClick={() => handleUpdateChore(activeDayModal, cr.index_, {\r
              done: !status.done\r
            })} className="text-slate-400 hover:text-emerald-600 focus:outline-none">{status.done ? <SquareCheckBig className="w-5 h-5 text-emerald-600" /> : <Square className="w-5 h-5" />}</button><div className="flex items-center gap-1.5 min-w-0"><span className={\`text-xs font-semibold truncate \${status.done ? "line-through text-slate-500" : "text-slate-800"}\`}>{cr.task || cr.row[0]}</span>{freq.frequency === "weekly" && <span className={\`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 \${isScheduledForToday ? "bg-purple-100 text-purple-700 border border-purple-200" : "bg-slate-100 text-slate-500"}\`}>{isScheduledForToday ? "1x/wk (Today)" : \`1x/wk (\${(_b2 = DAY_STYLES[freq.dayOfWeek]) == null ? void 0 : _b2.short})\`}</span>}</div></div>{getSpecificKidForChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded border shrink-0" style={{\r
              backgroundColor: ((_c2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _c2.bg) || "#FCE7F3",\r
              color: ((_d = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _d.text) || "#BE185D",\r
              borderColor: (((_e = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _e.color) || "#ec4899") + "50"\r
            }}>{getSpecificKidForChore(cr.task || cr.row[0])}</div> : isBedroomChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0">Each Child</div> : <select value={status.who} onChange={e => handleUpdateChore(activeDayModal, cr.index_, {\r
              who: e.target.value\r
            })} className="text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs" style={{\r
              color: status.who ? "#0f172a" : "#334155"\r
            }}><option value="" style={{\r
              color: "#64748b",\r
              backgroundColor: "#FFFFFF"\r
            }}>Unassigned</option><optgroup label="Full-Time Occupants" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#F1F5F9",\r
              fontWeight: "bold"\r
            }}>{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name} style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>{m.name}{m.role ? \` (\${m.role})\` : ""}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#F1F5F9",\r
              fontWeight: "bold"\r
            }}>{familyMembers.filter(m => m.type === "biweekly").map(m => {\r
              const parsed2 = parseDateKey(activeDayModal);\r
              const bw = parsed2 ? getBiWeeklyStatus(parsed2.year, parsed2.month, parsed2.day) : null;\r
              const note = (bw == null ? void 0 : bw.isArrivalDay) ? " (Arrives 5 PM)" : (bw == null ? void 0 : bw.isDepartureDay) ? " (Leaves 5 PM)" : (bw == null ? void 0 : bw.isPresent) ? " (Here)" : " (Away)";\r
              return <option key={m.id} value={m.name} style={{\r
                color: "#0f172a",\r
                backgroundColor: "#FFFFFF",\r
                fontWeight: "600"\r
              }}>{m.name}{note}</option>;\r
            })}</optgroup><optgroup label="Casual Assignees (Lesser Scale)" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#F1F5F9",\r
              fontWeight: "bold"\r
            }}>{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name} style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>{m.name}</option>)}</optgroup><optgroup label="Special Groups" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#F1F5F9",\r
              fontWeight: "bold"\r
            }}><option value="All Non-Casual" style={{\r
              color: "#4338CA",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "bold"\r
            }}>All Non-Casual</option><option value="Each Child" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>Each Child</option><option value="All Kids" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>All Kids</option><option value="Thom / Meghan" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>Thom / Meghan</option><option value="Parents" style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>Parents</option></optgroup>{status.who && !familyMembers.some(m => m.name === status.who) && !["All Non-Casual", "Each Child", "All Kids", "Thom / Meghan", "Parents"].includes(status.who) && <option value={status.who} style={{\r
              color: "#0f172a",\r
              backgroundColor: "#FFFFFF",\r
              fontWeight: "600"\r
            }}>{status.who}</option>}</select>}</div>{isBedroomChore(cr.task || cr.row[0]) && !getSpecificKidForChore(cr.task || cr.row[0]) && <div className="bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1"><div className="text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between"><span>Individual Bedrooms to Clean:</span><span className="text-[10px] text-pink-600 font-normal">Each child cleans own space</span></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">{getKidsPresentOnDate(activeDayModal).map(kidName => {\r
              var _a3;\r
              const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);\r
              const kidMember = getMember(kidName);\r
              return <button key={kidName} type="button" onClick={() => handleToggleKidBedroom(activeDayModal, cr.index_, kidName)} className={\`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition \${isKidDone ? "bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through" : "bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}\`}><div className="flex items-center gap-1.5 truncate"><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{\r
                backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#ec4899"\r
              }} /><span className="font-semibold truncate">{kidName}'s Room</span></div><span className="font-bold ml-1">{isKidDone ? "\\u2713" : "\\u25CB"}</span></button>;\r
            })}</div></div>}</div>;\r
          })}</div><div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end"><button onClick={() => setActiveDayModal(null)} className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition">Done</button></div></div></div>}{showAutoAssignModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-200" /><h3 className="text-base font-bold">Auto-Assign Schedule</h3></div><button onClick={() => setShowAutoAssignModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs"><p className="text-slate-600">Distribute daily tasks and weekly routines (Clean Basement, Feeding Station Deep Clean, Curbside Waste & Recycling) evenly across household occupants for <strong>{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</strong>.<br /><span className="text-[11px] text-slate-500 italic mt-1 inline-block">Note: Tidy Bedrooms and Laundry Tasks remain individual minion checklists where each child does their own.</span></p><div><label className="font-bold text-slate-800 block mb-1.5">Full-Time Occupants (Included in Chore Distribution):</label><div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">{familyMembers.filter(m => m.type === "regular").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"><input type="checkbox" defaultChecked id={\`assignee-\${m.id}\`} className="rounded text-indigo-600 focus:ring-indigo-500" /><span className="w-3 h-3 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span className="font-medium text-slate-800">{m.name}</span>{m.role && <span className="text-[10px] text-slate-500">({m.role === "Overseer Supreme" ? "Parent" : "Kid"})</span>}</label>)}</div><div className="flex items-center justify-between mb-1.5"><label className="font-bold text-pink-800 block">Bi-Weekly Occupants (Active During Stay Weeks Only):</label><span className="text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded">{"Back Sunday, Oct. 18 @ 5:00 PM"}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">{familyMembers.filter(m => m.type === "biweekly").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer"><input type="checkbox" defaultChecked id={\`assignee-\${m.id}\`} className="rounded text-pink-600 focus:ring-pink-500" /><span className="w-3 h-3 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span className="font-medium text-slate-800">{m.name}</span><span className="text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold">Bi-weekly only</span></label>)}</div><div className="p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3"><div className="flex items-center justify-between mb-1"><span className="font-bold text-sky-900 text-xs">Casual Members (Manual Add-Ins Only):</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300">Excluded from Auto-Assign</span></div><div className="flex flex-wrap items-center gap-2 mt-1.5">{familyMembers.filter(m => m.type === "casual").map(m => <span key={m.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs"><span className="w-2 h-2 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span>{m.name}</span></span>)}</div><p className="text-[11px] text-sky-700 mt-2 leading-relaxed">{'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'}</p></div></div><div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-pink-600 mt-0.5" /><span><strong>Daily & Weekly Distribution:</strong>{" Tasks are handed out so all available family members share the daily and weekly chores evenly. "}{biWeeklyNamesString}{" are included during stay weeks and skipped on away weeks. Tidy Bedrooms and Laundry Tasks remain individual checklists."}</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAutoAssignModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {\r
            const regSelected = familyMembers.filter(m => {\r
              var _a2;\r
              return m.type === "regular" && ((_a2 = document.getElementById(\`assignee-\${m.id}\`)) == null ? void 0 : _a2.checked);\r
            }).map(m => m.name);\r
            const bwSelected = familyMembers.filter(m => {\r
              var _a2;\r
              return m.type === "biweekly" && ((_a2 = document.getElementById(\`assignee-\${m.id}\`)) == null ? void 0 : _a2.checked);\r
            }).map(m => m.name);\r
            handleAutoAssignMonth(regSelected, bwSelected);\r
          }} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition">Distribute Daily & Weekly Chores</button></div></div></div>}{(showAddRemoveChoreModal || showNewChoreModal) && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><ListTodo className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Add / Edit Master Chores</h3><p className="text-[11px] text-slate-400">Add new tasks, edit existing chores, or remove from the schedule</p></div></div><button onClick={() => {\r
            setShowAddRemoveChoreModal(false);\r
            setShowNewChoreModal(false);\r
            setSelectedRemoveIndices([]);\r
            setEditingChoreIndex(null);\r
          }} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="flex border-b border-slate-200 bg-slate-100/70 p-1"><button type="button" onClick={() => {\r
            setAddRemoveMode("add");\r
            setEditingChoreIndex(null);\r
          }} className={\`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition \${addRemoveMode === "add" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"}\`}><Plus className="w-3.5 h-3.5" /><span>+ Add New Chore</span></button><button type="button" onClick={() => setAddRemoveMode("edit")} className={\`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition \${addRemoveMode === "edit" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"}\`}><Pen className="w-3.5 h-3.5" /><span>{"\\u270F\\uFE0F Edit Chore ("}{choreRows.length})</span></button></div>{addRemoveMode === "add" && <div className="p-5 space-y-4 overflow-y-auto flex-1"><div><label className="block text-xs font-bold text-slate-700 mb-1">{"Chore / Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" id="new-chore-title-input" placeholder="e.g. Clean oven, sweep patio, sanitize counters..." autoFocus onKeyDown={e => {\r
            if (e.key === "Enter") {\r
              const freqEl = document.getElementById("new-chore-frequency");\r
              const dayEl = document.getElementById("new-chore-day");\r
              const whoEl = document.getElementById("new-chore-who");\r
              handleAddNewChore(e.currentTarget.value, {\r
                frequency: freqEl ? freqEl.value : "daily",\r
                dayOfWeek: dayEl ? Number(dayEl.value) : 5,\r
                defaultWho: whoEl ? whoEl.value : ""\r
              });\r
            }\r
          }} className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select id="new-chore-frequency" defaultValue="daily" onChange={e => {\r
            const dayContainer = document.getElementById("day-select-container");\r
            if (dayContainer) {\r
              dayContainer.style.display = e.target.value === "weekly" ? "block" : "none";\r
            }\r
          }} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="daily">Daily (Every Day)</option><option value="weekly">Once a Week</option><option value="biweekly">Bi-Weekly (Curbside schedule)</option></select></div><div id="day-select-container" style={{\r
            display: "none"\r
          }}><label className="block font-bold text-slate-700 mb-1">Target Day</label><select id="new-chore-day" defaultValue="5" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Category</label><select id="new-chore-category" defaultValue="Household" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="Household">Household</option><option value="Kitchen">Kitchen</option><option value="Pet Care">Pet Care</option><option value="Bedrooms">Bedrooms</option><option value="Common Areas">Common Areas</option><option value="Administration">Administration</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Default Rotation Group</label><select id="new-chore-who" defaultValue="All Non-Casual" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="">Rotating / Unassigned</option><option value="Kids Rotation">Kids Rotation</option><option value="All Kids">All Kids (Shared)</option><option value="Each Child">Each Child (Own Space)</option><option value="Full-Time Roster">Full-Time Roster</option><option value="Parents">Parents Only</option><option value="All Occupants">All Occupants</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select><p className="text-[10px] text-slate-500 mt-1 leading-snug">{"\\u{1F4A1} "}<strong>All Non-Casual:</strong>{" Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."}</p></div></div><div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span>Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory.</span></div></div>}{(addRemoveMode === "edit" || addRemoveMode === "remove") && <div className="p-5 space-y-4 overflow-y-auto flex-1">{editingChoreIndex !== null ? /* SUB-VIEW A: DETAILED CHORE EDITOR WITH IN-LINE REMOVE */ <div className="space-y-4 text-xs"><div className="flex items-center justify-between pb-2 border-b border-slate-200"><button type="button" onClick={() => setEditingChoreIndex(null)} className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition"><ChevronLeft className="w-4 h-4" /><span>Back to All Chores</span></button><span className="text-[11px] font-bold text-slate-400 uppercase">Editing Item #{choreRows.findIndex(r => r.index_ === editingChoreIndex) + 1}</span></div><div><label className="block font-bold text-slate-700 mb-1">{"Chore Title / Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editChoreTitle} onChange={e => setEditChoreTitle(e.target.value)} className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold" placeholder="Chore task title..." autoFocus /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={editChoreFreq} onChange={e => setEditChoreFreq(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="daily">Daily (Every Day)</option><option value="weekly">Once a Week</option><option value="biweekly">Bi-Weekly</option></select></div>{editChoreFreq === "weekly" ? <div><label className="block font-bold text-slate-700 mb-1">Target Day</label><select value={editChoreDay} onChange={e => setEditChoreDay(Number(e.target.value))} className="w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div> : <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}</div>{editChoreFreq === "weekly" && <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}<div className="p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span><strong>Rotation Group Clarification:</strong>{" "}<em>All Non-Casual</em>{" covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. "}<strong>No equivalent currently exists among the other groups</strong>{" (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."}</span></div><div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between"><span className="font-semibold text-slate-700">List Order Position:</span><div className="flex items-center gap-1.5"><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "up")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowUp className="w-3.5 h-3.5" />{" Move Up"}</button><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "down")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowDown className="w-3.5 h-3.5" />{" Move Down"}</button></div></div><div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between"><div><div className="font-bold text-rose-900">Remove This Chore</div><div className="text-[11px] text-rose-700">Delete this chore from the schedule and spreadsheet</div></div><button type="button" onClick={() => {\r
            handleDeleteChore(editingChoreIndex, editChoreTitle);\r
            setEditingChoreIndex(null);\r
          }} className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition"><Trash2 className="w-3.5 h-3.5" /><span>Remove Chore</span></button></div></div> : /* SUB-VIEW B: MASTER CHORES LIST FOR EDITING & REMOVAL */ <div className="space-y-3"><div className="flex items-center justify-between gap-2"><div className="relative flex-1"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search or filter chores to edit or remove..." value={removeSearchQuery} onChange={e => setRemoveSearchQuery(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" /></div><button type="button" onClick={() => {\r
            if (selectedRemoveIndices.length === choreRows.length) {\r
              setSelectedRemoveIndices([]);\r
            } else {\r
              setSelectedRemoveIndices(choreRows.map(r => r.index_));\r
            }\r
          }} className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap">{selectedRemoveIndices.length === choreRows.length ? "Deselect All" : "Select All"}</button></div>{selectedRemoveIndices.length > 0 && <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs"><span className="font-bold text-rose-800">{selectedRemoveIndices.length}{" chore(s) selected"}</span><button type="button" onClick={handleBatchDeleteChores} className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /><span>Remove Selected</span></button></div>}<div className="divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto">{choreRows.filter(cr => removeSearchQuery ? (cr.task || cr.row[0] || "").toLowerCase().includes(removeSearchQuery.toLowerCase()) : true).map((cr, idx) => {\r
            var _a2;\r
            const isSelected = selectedRemoveIndices.includes(cr.index_);\r
            const freq = getChoreFreq(cr);\r
            const choreLabel = cr.task || cr.row[0] || "Chore";\r
            return <div key={cr.index_} className="p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs"><div className="flex items-center gap-2.5 flex-1 min-w-0"><input type="checkbox" checked={isSelected} onChange={() => {\r
              setSelectedRemoveIndices(prev => isSelected ? prev.filter(i => i !== cr.index_) : [...prev, cr.index_]);\r
            }} className="rounded text-rose-600 focus:ring-rose-500" title="Select for batch removal" /><div className="min-w-0 flex-1"><span className="font-semibold text-slate-800 truncate block">{idx + 1}{". "}{choreLabel}</span><div className="flex items-center gap-1.5 mt-0.5"><span className="text-[10px] text-slate-500">{freq.frequency === "weekly" ? \`Once a week (\${(_a2 = DAY_STYLES[freq.dayOfWeek]) == null ? void 0 : _a2.name})\` : "Daily task"}</span></div></div></div><div className="flex items-center gap-1 shrink-0"><button type="button" onClick={() => handleStartEditChore(cr)} className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition" title="Edit chore details"><Pen className="w-3.5 h-3.5" /><span>Edit</span></button><button type="button" onClick={() => handleDeleteChore(cr.index_, choreLabel)} className="p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition" title={\`Remove "\${choreLabel}"\`}><Trash2 className="w-3.5 h-3.5" /></button></div></div>;\r
          })}</div></div>}</div>}<div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between"><span className="text-[11px] text-slate-500 font-medium">{choreRows.length}{" active master chores"}</span><div className="flex gap-2"><button type="button" onClick={() => {\r
            setShowAddRemoveChoreModal(false);\r
            setShowNewChoreModal(false);\r
            setSelectedRemoveIndices([]);\r
            setEditingChoreIndex(null);\r
          }} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Close</button>{addRemoveMode === "add" ? <button type="button" onClick={() => {\r
            const titleInput = document.getElementById("new-chore-title-input");\r
            const freqEl = document.getElementById("new-chore-frequency");\r
            const dayEl = document.getElementById("new-chore-day");\r
            const whoEl = document.getElementById("new-chore-who");\r
            const catEl = document.getElementById("new-chore-category");\r
            if (titleInput && titleInput.value.trim()) {\r
              handleAddNewChore(titleInput.value, {\r
                frequency: freqEl ? freqEl.value : "daily",\r
                dayOfWeek: dayEl ? Number(dayEl.value) : 5,\r
                defaultWho: whoEl ? whoEl.value : "All Non-Casual",\r
                category: catEl ? catEl.value : "Household"\r
              });\r
            }\r
          }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Add Chore</button> : editingChoreIndex !== null ? <button type="button" onClick={handleSaveChoreEdit} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Save Changes</button> : selectedRemoveIndices.length > 0 && <button type="button" onClick={handleBatchDeleteChores} className="px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition">Remove Selected ({selectedRemoveIndices.length})</button>}</div></div></div></div>}{showCombineModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><GitMerge className="w-5 h-5 text-purple-200" /><h3 className="text-base font-bold">Combine Chores</h3></div><button onClick={() => setShowCombineModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs"><p className="text-slate-600">Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly.</p><div><label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Suggested Combinations:</label><div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><button type="button" onClick={() => {\r
            if (choreRows[4] && choreRows[5]) {\r
              setCombineTargetA(choreRows[4].index_);\r
              setCombineTargetB(choreRows[5].index_);\r
              setCustomCombinedTitle("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)");\r
            }\r
          }} className="p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition"><div className="font-bold text-purple-900 flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-600" /><span>Chores #5 & #6 (Dinner)</span></div><div className="text-[10px] text-purple-700 truncate mt-0.5">Dinner Dishes + Put away food</div></button><button type="button" onClick={() => {\r
            if (choreRows[0] && choreRows[1]) {\r
              setCombineTargetA(choreRows[0].index_);\r
              setCombineTargetB(choreRows[1].index_);\r
              setCustomCombinedTitle("Tidy bedroom & vacuum floors, bring laundry downstairs");\r
            }\r
          }} className="p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"><div className="font-bold text-slate-800 flex items-center gap-1"><Sparkles className="w-3 h-3 text-slate-500" /><span>Rows 5 & 6 (Bedroom)</span></div><div className="text-[10px] text-slate-600 truncate mt-0.5">Tidy up bedroom + Vacuum floors</div></button></div></div><div><label className="block font-bold text-slate-700 mb-1">Primary Chore (Retains Position):</label><select value={combineTargetA != null ? combineTargetA : ""} onChange={e => {\r
            const val = Number(e.target.value);\r
            setCombineTargetA(val);\r
            const choreA = choreRows.find(r => r.index_ === val);\r
            const choreB = choreRows.find(r => r.index_ === combineTargetB);\r
            if (choreA && choreB) {\r
              setCustomCombinedTitle(\`\${choreA.row[1]} & \${choreB.row[1]}\`);\r
            }\r
          }} className="w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500">{choreRows.map((cr, idx) => <option key={cr.index_} value={cr.index_}>#{idx + 1}{": "}{cr.row[1]}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Chore to Merge In & Remove:</label><select value={combineTargetB != null ? combineTargetB : ""} onChange={e => {\r
            const val = Number(e.target.value);\r
            setCombineTargetB(val);\r
            const choreA = choreRows.find(r => r.index_ === combineTargetA);\r
            const choreB = choreRows.find(r => r.index_ === val);\r
            if (choreA && choreB) {\r
              setCustomCombinedTitle(\`\${choreA.row[1]} & \${choreB.row[1]}\`);\r
            }\r
          }} className="w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500">{choreRows.map((cr, idx) => <option key={cr.index_} value={cr.index_} disabled={cr.index_ === combineTargetA}>#{idx + 1}{": "}{cr.row[1]}{" "}{cr.index_ === combineTargetA ? "(Cannot merge into itself)" : ""}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">New Combined Chore Title:</label><input type="text" value={customCombinedTitle} onChange={e => setCustomCombinedTitle(e.target.value)} placeholder="Enter name for the combined chore..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium" /></div><div className="bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-purple-600 mt-0.5" /><span>The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowCombineModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {\r
            if (combineTargetA !== null && combineTargetB !== null && combineTargetA !== combineTargetB) {\r
              handleCombineChores(combineTargetA, combineTargetB, customCombinedTitle);\r
            }\r
          }} disabled={combineTargetA === combineTargetB || !combineTargetA || !combineTargetB} className="px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40">Merge & Combine Chores</button></div></div></div>}{showAddMemberModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-indigo-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-200" /><h3 className="text-base font-bold">Add Household Member</h3></div><button onClick={() => setShowAddMemberModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs"><div><label className="block font-bold text-slate-700 mb-1">{"Full Name "}<span className="text-rose-500">{"*"}</span></label><input type="text" id="new-member-name" placeholder="e.g. Alex, Jordan..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Role</label><select id="new-member-role" defaultValue="Minion" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="Supreme Overlord">Supreme Overlord (Parent)</option><option value="Minion">Minion (Kid)</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Occupancy</label><select id="new-member-residency" defaultValue="Full-Time" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="Full-Time">Full-Time (Constant Residency)</option><option value="Bi-Weekly">Bi-Weekly (Half-Time Residency)</option><option value="Casual">Casual (Periodic Residency)</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Special Rotation Groups</label><div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50">{["Parents", "Kids", "Non-Casual", "All"].map(grpType => {\r
            const isChecked = newMemberGroups.includes(grpType);\r
            return <label key={grpType} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => {\r
              setNewMemberGroups(prev => {\r
                const nextSet = new Set(prev);\r
                if (nextSet.has(grpType)) {\r
                  nextSet.delete(grpType);\r
                } else {\r
                  nextSet.add(grpType);\r
                }\r
                return ["Parents", "Kids", "Non-Casual", "All"].filter(g => nextSet.has(g));\r
              });\r
            }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={\`text-xs \${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}\`}>{grpType}</span></label>;\r
          })}</div></div><div><label className="block font-bold text-slate-700 mb-1">Active Status</label><select id="new-member-active" defaultValue="true" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="true">Active</option><option value="false">Inactive</option></select></div><div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span>Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAddMemberModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {\r
            const nameInput = document.getElementById("new-member-name") as HTMLInputElement | null;\r
            const roleInput = document.getElementById("new-member-role") as HTMLSelectElement | null;\r
            const resInput = document.getElementById("new-member-residency") as HTMLSelectElement | null;\r
            const activeInput = document.getElementById("new-member-active") as HTMLSelectElement | null;\r
            if (nameInput && nameInput.value.trim()) {\r
              handleAddRosterMember(\r
                nameInput.value,\r
                roleInput ? roleInput.value : "Minion",\r
                resInput ? resInput.value : "Full-Time",\r
                newMemberGroups.length > 0 ? newMemberGroups.join(", ") : "All",\r
                activeInput ? activeInput.value === "true" : true\r
              );\r
            }\r
          }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Add to Household Roster</button></div></div></div>}{showAddPetModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-amber-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-xl">{"\\u{1F43E}"}</span><h3 className="text-base font-bold">Add Household Pet Member</h3></div><button onClick={() => setShowAddPetModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs"><div><label className="block font-bold text-slate-700 mb-1">{"Pet Name "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newPetDraft.name} onChange={e => setNewPetDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            name: e.target.value\r
          }))} placeholder="e.g. Buster, Milo..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Species</label><select value={newPetDraft.type} onChange={e => setNewPetDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            type: e.target.value\r
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white"><option value="Dog">{"Dog \\u{1F415}"}</option><option value="Cat">{"Cat \\u{1F408}"}</option><option value="Bird">{"Bird \\u{1F426}"}</option><option value="Fish">{"Fish \\u{1F41F}"}</option><option value="Small Pet">{"Small Pet \\u{1F43E}"}</option><option value="Other">{"Other \\u{1F43E}"}</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Feeding Routine</label><input type="text" value={newPetDraft.routine} onChange={e => setNewPetDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            routine: e.target.value\r
          }))} placeholder="e.g. Morning & Evening, Twice daily..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Care Responsibilities</label><textarea rows={2} value={newPetDraft.care} onChange={e => setNewPetDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            care: e.target.value\r
          }))} placeholder="e.g. Feed breakfast & supper, outdoor routine, fresh water bowls..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug" /></div><div><label className="block font-bold text-slate-700 mb-1">Active Status</label><select value={newPetDraft.active !== false ? "true" : "false"} onChange={e => setNewPetDraft(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            active: e.target.value === "true"\r
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white"><option value="true">Active</option><option value="false">Inactive</option></select></div><div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" /><span>Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAddPetModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => handleAddRosterPet(newPetDraft.name, newPetDraft.type, newPetDraft.routine, newPetDraft.care, newPetDraft.active !== false)} disabled={!newPetDraft.name.trim()} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40">Add to Household Pets</button></div></div></div>}{editingPrintableChore && <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs"><Pen className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Edit Chore Details</h3><p className="text-[11px] text-slate-400">Update chore name, cadence, rotation group, or notes</p></div></div><button onClick={() => setEditingPrintableChore(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs"><div><label className="block font-bold text-slate-800 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editingPrintableChore.task} onChange={e => setEditingPrintableChore(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            task: e.target.value\r
          }))} placeholder="Chore task description..." className="w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Category</label><select value={editingPrintableChore.category || "Household"} onChange={e => setEditingPrintableChore(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            category: e.target.value\r
          }))} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={editingPrintableChore.frequency || "Daily"} onChange={e => {\r
            const val = e.target.value;\r
            setEditingPrintableChore(prev => ({\r
              ...{\r
                ...prev\r
              },\r
              frequency: val,\r
              targetDay: val === "Daily" ? "Mon \\u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : "Saturday"\r
            }));\r
          }} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day</label><input type="text" value={editingPrintableChore.targetDay || "Mon \\u2013 Sun"} onChange={e => setEditingPrintableChore(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            targetDay: e.target.value\r
          }))} placeholder="e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening..." className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500" /></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editingPrintableChore.rotationGroup || "All Non-Casual"} onChange={e => setEditingPrintableChore(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            rotationGroup: e.target.value\r
          }))} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Each Child">Each Child (Own Space)</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div></div><div><label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label><textarea rows={2} value={editingPrintableChore.notes || ""} onChange={e => setEditingPrintableChore(prev => ({\r
            ...{\r
              ...prev\r
            },\r
            notes: e.target.value\r
          }))} placeholder="Operational details, supplies, or instructions..." className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug" /></div><div className="pt-2 border-t border-slate-100 flex items-center justify-between"><div><div className="font-bold text-rose-900 text-xs">Delete this chore</div><div className="text-[10px] text-slate-500">Remove from Printable Weekly Schedule</div></div><button type="button" onClick={() => {\r
            handleDeletePrintableChore(editingPrintableChore.index_, editingPrintableChore.task);\r
          }} className="px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition"><Trash2 className="w-3.5 h-3.5" /><span>Delete Chore</span></button></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between"><span className="text-[11px] text-slate-400 font-medium">Real-time schedule update</span><div className="flex gap-2"><button type="button" onClick={() => setEditingPrintableChore(null)} className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition">Cancel</button><button type="button" onClick={() => {\r
            handleSavePrintableChoreEdit(editingPrintableChore.index_, {\r
              task: editingPrintableChore.task,\r
              oldTask: editingPrintableChore.originalTask || editingPrintableChore.task,\r
              category: editingPrintableChore.category,\r
              frequency: editingPrintableChore.frequency,\r
              targetDay: editingPrintableChore.targetDay,\r
              rotationGroup: editingPrintableChore.rotationGroup,\r
              notes: editingPrintableChore.notes,\r
              dayOfWeek: editingPrintableChore.dayOfWeek\r
            });\r
          }} disabled={!((_c = editingPrintableChore.task) == null ? void 0 : _c.trim())} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40">Save Changes</button></div></div></div></div>}{deletingChoreTarget && <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-rose-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Trash2 className="w-5 h-5 text-rose-200" /><h3 className="text-base font-bold">Delete Chore</h3></div><button onClick={() => setDeletingChoreTarget(null)} className="p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 text-xs text-slate-700 space-y-3"><p>{"Are you sure you want to remove "}<strong className="text-slate-900 font-bold">{'"'}{deletingChoreTarget.task}{'"'}</strong>{" from the Printable Weekly Schedule?"}</p><div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed">This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately.</div></div><div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs"><button type="button" onClick={() => setDeletingChoreTarget(null)} className="px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition">Cancel</button><button type="button" onClick={() => {\r
            handleDeletePrintableChore(deletingChoreTarget.index_, deletingChoreTarget.task);\r
          }} className="px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition">Delete Chore</button></div></div></div>}</div>\r
  );\r
}\r
var ErrorBoundary = class extends React.Component {\r
  constructor(props) {\r
    super(props);\r
    this.state = {\r
      hasError: false\r
    };\r
  }\r
  static getDerivedStateFromError(error) {\r
    return {\r
      hasError: true\r
    };\r
  }\r
  componentDidCatch(error, errorInfo) {\r
    window.parent.postMessage({\r
      type: "ERROR",\r
      payload: {\r
        error: error ? error.toString() : "Unknown rendering error"\r
      }\r
    }, "*");\r
  }\r
  render() {\r
    if (this.state.hasError) return <p>Something went wrong.</p>;\r
    return this.props.children;\r
  }\r
};\r
\r
export default function AppWrapper() {\r
  const [sheetData, setSheetData] = useState(() => {\r
    try {\r
      const saved = localStorage.getItem(STORAGE_KEY);\r
      if (saved) {\r
        const parsed = JSON.parse(saved);\r
        if (Array.isArray(parsed) && parsed.length > 0) {\r
          return parsed;\r
        }\r
      }\r
    } catch (e) {\r
      console.warn('Failed to load sheetData from localStorage:', e);\r
    }\r
    return INITIAL_SHEET_DATA;\r
  });\r
  const [isReady, setIsReady] = useState(true);\r
\r
  useEffect(() => {\r
    try {\r
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sheetData));\r
    } catch (e) {\r
      console.warn('Failed to persist sheetData to localStorage:', e);\r
    }\r
  }, [sheetData]);\r
\r
  useEffect(() => {\r
    try {\r
      const saved = localStorage.getItem(STORAGE_KEY);\r
      const dataToSave = saved ? JSON.parse(saved) : sheetData;\r
      if (Array.isArray(dataToSave) && dataToSave.length > 0) {\r
        fetch('/__save-config?asDefault=true', {\r
          method: 'POST',\r
          headers: { 'Content-Type': 'application/json' },\r
          body: JSON.stringify({ sheetData: dataToSave }),\r
        }).catch(() => {});\r
      }\r
    } catch (e) {}\r
  }, []);\r
\r
  useEffect(() => {\r
    let readyIntervalId = null;\r
    const handleMessage = event => {\r
      const { type, payload } = event.data || {};\r
      if (type === "SYNC_DATA") {\r
        if (readyIntervalId) {\r
          clearInterval(readyIntervalId);\r
          readyIntervalId = null;\r
        }\r
        if (Array.isArray(payload) && payload.length > 0) {\r
          setSheetData(payload);\r
        }\r
        setIsReady(true);\r
      }\r
    };\r
    window.addEventListener("message", handleMessage);\r
    const sendReady = () => {\r
      if (window.parent && window.parent !== window) {\r
        window.parent.postMessage({\r
          type: "CHILD_READY",\r
          payload: {\r
            version: 3\r
          }\r
        }, "*");\r
      }\r
    };\r
    sendReady();\r
    let attempts = 0;\r
    readyIntervalId = setInterval(() => {\r
      attempts++;\r
      if (attempts >= 50) {\r
        clearInterval(readyIntervalId);\r
        readyIntervalId = null;\r
        return;\r
      }\r
      sendReady();\r
    }, 100);\r
    return () => {\r
      if (readyIntervalId) clearInterval(readyIntervalId);\r
      window.removeEventListener("message", handleMessage);\r
    };\r
  }, []);\r
\r
  useEffect(() => {\r
    if (!isReady) return;\r
    const renderStart = performance.now();\r
    let innerRafId = null;\r
    const outerRafId = requestAnimationFrame(() => {\r
      innerRafId = requestAnimationFrame(() => {\r
        const renderDuration = performance.now() - renderStart;\r
        if (window.parent && window.parent !== window) {\r
          window.parent.postMessage({\r
            type: "RENDER_COMPLETE",\r
            payload: {\r
              status: "success",\r
              renderDurationMs: renderDuration\r
            }\r
          }, "*");\r
        }\r
      });\r
    });\r
    return () => {\r
      cancelAnimationFrame(outerRafId);\r
      if (innerRafId) {\r
        cancelAnimationFrame(innerRafId);\r
      }\r
    };\r
  }, [sheetData, isReady]);\r
\r
  const updateItem = (rangeIndex_, rowIndex_, rowArray) => {\r
    setSheetData(prev => {\r
      if (!Array.isArray(prev)) return prev;\r
      return prev.map((range, idx) => {\r
        const rIdx = range.index_ !== undefined ? range.index_ : idx;\r
        if (rIdx !== rangeIndex_) return range;\r
        const rows = Array.isArray(range.data) ? [...range.data] : [];\r
        const existingPos = rows.findIndex(r => r.index_ === rowIndex_);\r
        if (existingPos >= 0) {\r
          const oldRow = Array.isArray(rows[existingPos].row) ? [...rows[existingPos].row] : [];\r
          const maxLen = Math.max(oldRow.length, Array.isArray(rowArray) ? rowArray.length : 0);\r
          const mergedRow = new Array(maxLen).fill(null);\r
          for (let i = 0; i < maxLen; i++) {\r
            mergedRow[i] = (rowArray && rowArray[i] !== undefined) ? rowArray[i] : (oldRow[i] !== undefined ? oldRow[i] : null);\r
          }\r
          rows[existingPos] = { ...rows[existingPos], row: mergedRow };\r
        } else {\r
          const cleanRow = (rowArray || []).map(v => v === undefined ? null : v);\r
          rows.push({ index_: rowIndex_, row: cleanRow });\r
          rows.sort((a, b) => a.index_ - b.index_);\r
        }\r
        return { ...range, data: rows };\r
      });\r
    });\r
\r
    if (window.parent && window.parent !== window) {\r
      window.parent.postMessage({\r
        type: "PATCH",\r
        payload: {\r
          rangeIndex_,\r
          rowIndex_,\r
          row: rowArray\r
        }\r
      }, "*");\r
    }\r
  };\r
\r
  const deleteItem = (rangeIndex_, rowIndex_) => {\r
    setSheetData(prev => {\r
      if (!Array.isArray(prev)) return prev;\r
      return prev.map((range, idx) => {\r
        const rIdx = range.index_ !== undefined ? range.index_ : idx;\r
        if (rIdx !== rangeIndex_) return range;\r
        const rows = (range.data || []).filter(r => r.index_ !== rowIndex_);\r
        return { ...range, data: rows };\r
      });\r
    });\r
\r
    if (window.parent && window.parent !== window) {\r
      window.parent.postMessage({\r
        type: "DELETE",\r
        payload: {\r
          rangeIndex_,\r
          rowIndex_\r
        }\r
      }, "*");\r
    }\r
  };\r
\r
  const insertItem = (rangeIndex_, rowIndex_, rowArray) => {\r
    setSheetData(prev => {\r
      if (!Array.isArray(prev)) return prev;\r
      return prev.map((range, idx) => {\r
        const rIdx = range.index_ !== undefined ? range.index_ : idx;\r
        if (rIdx !== rangeIndex_) return range;\r
        const rows = Array.isArray(range.data) ? [...range.data] : [];\r
        const cleanRow = (rowArray || []).map(v => v === undefined ? null : v);\r
        if (rowIndex_ !== undefined && rowIndex_ !== null) {\r
          const shifted = rows.map(r => r.index_ >= rowIndex_ ? { ...r, index_: r.index_ + 1 } : r);\r
          shifted.push({ index_: rowIndex_, row: cleanRow });\r
          shifted.sort((a, b) => a.index_ - b.index_);\r
          return { ...range, data: shifted };\r
        } else {\r
          const maxIdx = rows.reduce((max, r) => Math.max(max, r.index_ || 0), 0);\r
          rows.push({ index_: maxIdx + 1, row: cleanRow });\r
          return { ...range, data: rows };\r
        }\r
      });\r
    });\r
\r
    if (window.parent && window.parent !== window) {\r
      window.parent.postMessage({\r
        type: "INSERT",\r
        payload: {\r
          rangeIndex_,\r
          rowIndex_,\r
          row: rowArray\r
        }\r
      }, "*");\r
    }\r
  };\r
\r
  const moveItem = (fromRangeIndex_, fromRowIndex_, toRangeIndex_, toRowIndex_) => {\r
    if (window.parent && window.parent !== window) {\r
      window.parent.postMessage({\r
        type: "MOVE",\r
        payload: {\r
          fromRangeIndex_,\r
          fromRowIndex_,\r
          toRangeIndex_,\r
          toRowIndex_\r
        }\r
      }, "*");\r
    }\r
  };\r
\r
  const followLink = url => {\r
    if (window.parent && window.parent !== window) {\r
      window.parent.postMessage({\r
        type: "FOLLOW_LINK",\r
        payload: { url }\r
      }, "*");\r
    } else if (url) {\r
      window.open(url, "_blank", "noopener,noreferrer");\r
    }\r
  };\r
\r
  if (!isReady) {\r
    return <div className="loading">Waiting for data...</div>;\r
  }\r
\r
  return (\r
    <div id="app-container" className="h-full w-full">\r
      <ErrorBoundary>\r
        <App\r
          data={sheetData}\r
          updateItem={updateItem}\r
          deleteItem={deleteItem}\r
          insertItem={insertItem}\r
          moveItem={moveItem}\r
          followLink={followLink}\r
        />\r
      </ErrorBoundary>\r
    </div>\r
  );\r
}\r
`,co=mp.split(/\r?\n/),md=(()=>{const b=co.findIndex((_,v)=>v>37&&_.startsWith("var DAY_STYLES"));return b>0?b:935})();function Dl(b){let _="",v=b;for(;v>=0;)_=String.fromCharCode(v%26+65)+_,v=Math.floor(v/26)-1;return _}const fd=new Map,yd=new Map;(()=>{let b=-1,_="",v=null,V=!1,K=-1;for(let $=36;$<md;$++){const Q=co[$]||"",de=Q.match(/"name":\s*"([^"]+)"/);if(de){_=de[1],b=_.toLowerCase().includes("hub")?1:0,v=null,V=!1;continue}const ne=Q.match(/"index_":\s*(\d+)/);if(ne&&!V){(co[$+1]||"").includes('"name":')||(v=parseInt(ne[1],10));continue}if(Q.includes('"row": [')){V=!0,K=0;continue}if(V){if(Q.trim().startsWith("]")){V=!1,K=-1;continue}if(b>=0&&v!==null){const M=$+1,H=Q.trim().replace(/,$/,"");let O=H;try{O=JSON.parse(H)}catch{}const ee={tsxLine:M,sheetIndex:b,sheetName:_,rowIndex:v,colIndex:K,value:O};fd.set(`${b}:${v}:${K}`,M),yd.set(M,ee)}K++}}})();function Iu(b){const _=[],v=(b.innerText||b.textContent||"").trim();if(v.length>=2&&v.length<=140&&!v.includes(`
`))_.push(v);else if(v.includes(`
`))for(const V of v.split(`
`)){const K=V.trim();K.length>=3&&K.length<=120&&_.push(K)}if(_.length===0)return null;for(const V of _){const K=V.replace(/\s+/g," ").trim();if(K.length<2)continue;const $=JSON.stringify(K).toLowerCase();let Q=-1;for(let de=36;de<md;de++){const ne=(co[de]||"").trim().toLowerCase();if(ne===$||ne===`${$},`){Q=de+1;break}}if(Q===-1&&K.length>=4){const de=K.toLowerCase();for(let ne=36;ne<md;ne++){const M=(co[ne]||"").trim().toLowerCase();if(M.startsWith('"')&&M.includes(de)){Q=ne+1;break}}}if(Q!==-1){const de=yd.get(Q),ne=de?de.rowIndex:null,M=de?de.colIndex:0,H=de?de.sheetName:"INITIAL_SHEET_DATA",O=H.toLowerCase().includes("hub"),ee=O?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",we=ne!==null?O?ne+2:ne+1:1,We=Dl(M+1);return{line:Q,text:(co[Q-1]||"").trim(),rowIndex:ne,colIndex:M,colLetter:We,sectionName:H,csvFile:ee,csvLine:we}}}return null}function Cs(b,_,v=1,V){const K=()=>{const $=document.createElement("a");$.href=`antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(b)}:${_}:${v}`,$.click()};fetch(`/__open-in-vscode?file=${encodeURIComponent(b)}&line=${_}&col=${v}`).then($=>$.json()).then($=>{(!$||!$.ok)&&K()}).catch(()=>{K()}),V&&V(`Opened ${b}:${_}`)}function zu(b,_){const v=`${window.location.origin}/?view=csv-map`,V=window.open(v,"CsvVisualMapWindow","popup=yes,width=1320,height=840,left=80,top=60");if(V){V.focus(),b&&b("Opened CSV Visual Map in a separate window!");return}fetch("/__popout-csv-map").catch(()=>{}),_&&_(),b&&b("Opened CSV Visual Map!")}const Ns=typeof BroadcastChannel<"u"?new BroadcastChannel("chores_csv_map_sync"):null;function Gu(b,_,v,V){Ns&&Ns.postMessage({sheetIndex:b,rowIndex:_,colIndex:v,tsxLine:V,updatedAt:Date.now()}),fetch(`/__csv-map-state?sheetIndex=${b}&rowIndex=${_}&colIndex=${v}${V?`&tsxLine=${V}`:""}`).catch(()=>{})}function Uu({isStandalone:b=!1,activeCsvSheetIdx:_,setActiveCsvSheetIdx:v,selectedCellKey:V,setSelectedCellKey:K,onClose:$,onToast:Q}){const de=jl[_]||jl[0],ne=_===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",M=_===1?12:15;return F.useEffect(()=>{if(!V)return;const H=document.querySelector(`[data-cell-key="${V}"]`);H&&H.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[V,_]),n.jsxs("div",{style:{width:"100%",height:"100%",backgroundColor:"#0F172A",color:"#F8FAFC",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"ui-sans-serif, system-ui, sans-serif"},children:[n.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#1E293B",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[n.jsx("span",{style:{fontWeight:800,fontSize:"13px",color:"#FBBF24"},children:"📊 Live .tsx ↔ .csv Visual Spreadsheet Map"}),n.jsxs("div",{style:{display:"flex",gap:"6px"},children:[n.jsx("button",{type:"button",onClick:()=>v(0),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===0?"1px solid #38BDF8":"1px solid #475569",backgroundColor:_===0?"#0284C7":"#0F172A",color:"#FFFFFF"},children:"Sheet 0: Printable Weekly Schedule (CSV)"}),n.jsx("button",{type:"button",onClick:()=>v(1),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===1?"1px solid #34D399":"1px solid #475569",backgroundColor:_===1?"#059669":"#0F172A",color:"#FFFFFF"},children:"Sheet 1: Household Hub - Data (CSV)"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"11px",color:"#CBD5E1"},children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#38BDF8"},children:".tsx"})," •"," ",n.jsx("strong",{children:"Shift+Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#FBBF24"},children:".csv"})]}),!b&&n.jsx("button",{type:"button",onClick:()=>{zu(Q),$&&$()},title:"Pop out into a separate standalone window",style:{padding:"4px 10px",borderRadius:"6px",backgroundColor:"#2563EB",color:"#FFFFFF",border:"1px solid #60A5FA",cursor:"pointer",fontWeight:700},children:"↗ Open in Separate Window"}),$&&n.jsx("button",{type:"button",onClick:$,style:{padding:"4px 9px",borderRadius:"6px",backgroundColor:"#334155",color:"#F8FAFC",border:"none",cursor:"pointer",fontWeight:700},children:"✕ Close"})]})]}),V&&(()=>{const[H,O,ee]=V.split(":"),we=parseInt(H,10),We=parseInt(O,10),xe=parseInt(ee,10),te=fd.get(V),Pe=te?yd.get(te):null,Ee=we===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",re=we===1?We+2:We+1,pe=Dl(xe+1);return n.jsxs("div",{style:{padding:"6px 14px",backgroundColor:"#022C22",borderBottom:"1px solid #065F46",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",fontSize:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",Ee," → Line ",re,", Col ",pe]}),n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["⚛️ weekly_chores_household_hub.tsx → Line ",te||"?"," (index_ ",We,", row[",xe,"])"]}),Pe&&n.jsx("span",{style:{color:"#F8FAFC",backgroundColor:"#064E3B",padding:"1px 8px",borderRadius:"4px",fontFamily:"monospace"},children:JSON.stringify(Pe.value)})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[te&&n.jsxs("button",{type:"button",onClick:()=>Cs("weekly_chores_household_hub.tsx",te,1,Q),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#059669",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .tsx Line ",te]}),n.jsxs("button",{type:"button",onClick:()=>Cs(Ee,re,1,Q),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#D97706",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .csv Line ",re]})]})]})})(),n.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{backgroundColor:"#1E293B",position:"sticky",top:0,zIndex:2},children:[n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#FBBF24",textAlign:"center",minWidth:"72px"},children:"CSV Line"}),n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#34D399",textAlign:"center",minWidth:"72px"},children:"TSX index_"}),Array.from({length:M}).map((H,O)=>n.jsxs("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#93C5FD",textAlign:"left",minWidth:"125px"},children:["Col ",Dl(O+1)," ",n.jsxs("span",{style:{color:"#64748B",fontWeight:400},children:["(row[",O,"])"]})]},O))]})}),n.jsx("tbody",{children:(de.data||[]).map(H=>{const O=H.index_,ee=_===1?O+2:O+1;return n.jsxs("tr",{style:{borderBottom:"1px solid #1E293B"},children:[n.jsxs("td",{onClick:()=>Cs(ne,ee,1,Q),title:`Click to open ${ne} at Line ${ee}`,style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#FDE68A",backgroundColor:"#1E293B",fontWeight:700,cursor:"pointer"},children:["L",ee]}),n.jsxs("td",{style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#A7F3D0",backgroundColor:"#0F172A",fontWeight:600},children:["#",O]}),Array.from({length:M}).map((we,We)=>{const xe=H.row?H.row[We]:null,te=fd.get(`${_}:${O}:${We}`),Pe=`${_}:${O}:${We}`,Ee=V===Pe,re=xe==null||xe==="";return n.jsx("td",{"data-cell-key":Pe,onClick:pe=>{K(Pe),Gu(_,O,We,te),pe.shiftKey?Cs(ne,ee,1,Q):te&&Cs("weekly_chores_household_hub.tsx",te,1,Q)},title:`TSX Line ${te||"?"} • ${ne} Line ${ee}, Col ${Dl(We+1)}
Click = Open in .tsx | Shift+Click = Open in .csv`,style:{border:Ee?"2px solid #F59E0B":"1px solid #334155",backgroundColor:Ee?"rgba(245, 158, 11, 0.28)":re?"#090D16":"#0F172A",color:re?"#334155":"#F8FAFC",padding:"5px 7px",cursor:"pointer",maxWidth:"210px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"4px",alignItems:"baseline"},children:[n.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:re?"·":String(xe)}),te&&n.jsxs("span",{style:{fontSize:"9px",color:Ee?"#FBBF24":"#475569",flexShrink:0},children:[":",te]})]})},We)})]},O)})})]})})]})}function fp(){const[b,_]=F.useState(1),[v,V]=F.useState(null),[K,$]=F.useState(null),Q=F.useRef(0),de=ne=>{$(ne),setTimeout(()=>$(null),2400)};return F.useEffect(()=>{document.title="📊 CSV Visual Map — Weekly Chores & Household Hub";const ne=H=>{const O=H.data;O&&typeof O.sheetIndex=="number"&&O.rowIndex!==null&&O.rowIndex!==void 0&&(Q.current=O.updatedAt||Date.now(),_(O.sheetIndex),V(`${O.sheetIndex}:${O.rowIndex}:${O.colIndex??0}`))};Ns&&Ns.addEventListener("message",ne);const M=setInterval(()=>{fetch("/__csv-map-state").then(H=>H.json()).then(H=>{H&&H.updatedAt>Q.current&&H.rowIndex!==null&&H.rowIndex!==void 0&&(Q.current=H.updatedAt,_(H.sheetIndex),V(`${H.sheetIndex}:${H.rowIndex}:${H.colIndex??0}`))}).catch(()=>{})},400);return()=>{Ns&&Ns.removeEventListener("message",ne),clearInterval(M)}},[]),n.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[n.jsx(Uu,{isStandalone:!0,activeCsvSheetIdx:b,setActiveCsvSheetIdx:_,selectedCellKey:v,setSelectedCellKey:V,onToast:de}),K&&n.jsxs("div",{style:{position:"fixed",bottom:"18px",right:"18px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"8px 14px",borderRadius:"8px",fontSize:"12px",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.35)",zIndex:9999},children:["✓ ",K]})]})}const Wu="__code_inspector_dock_corner";function xp(){const[b,_]=F.useState(!1),[v,V]=F.useState(!1),[K,$]=F.useState(()=>{try{const oe=localStorage.getItem(Wu);if(oe&&["top-right","bottom-left","top-left","bottom-right","float"].includes(oe))return oe}catch{}return"top-right"}),[Q,de]=F.useState({x:0,y:0}),ne=F.useRef(null),[M,H]=F.useState(null),[O,ee]=F.useState([]),[we,We]=F.useState(null),[xe,te]=F.useState(!1),[Pe,Ee]=F.useState(1),[re,pe]=F.useState(null),tt=F.useRef(""),lt=F.useRef(""),Je=b||v,Ge=oe=>{We(oe),setTimeout(()=>We(null),2400)},Re=async()=>{try{const oe=localStorage.getItem("weekly_chores_canvas_sheet_data_v5");if(!oe){Ge("⚠️ No data found in localStorage");return}const le=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:JSON.parse(oe)})})).json();le.ok?Ge("✓ Saved current browser setup as default in code and config file!"):Ge(`⚠️ Failed: ${le.error}`)}catch(oe){Ge(`⚠️ Failed: ${(oe==null?void 0:oe.message)||String(oe)}`)}},ke=()=>{try{const oe=localStorage.getItem("weekly_chores_canvas_sheet_data_v5"),ve={sheetData:oe?JSON.parse(oe):null,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},le=new Blob([JSON.stringify(ve,null,2)],{type:"application/json"}),L=URL.createObjectURL(le),Y=document.createElement("a"),U=new Date().toISOString().slice(0,10);Y.href=L,Y.download=`weekly-chores-config-${U}.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(L),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)}).catch(()=>{}),Ge("✓ Exported configuration backup (.json)!")}catch(oe){Ge(`⚠️ Export failed: ${(oe==null?void 0:oe.message)||String(oe)}`)}},Ye=oe=>{var L;const ve=(L=oe.target.files)==null?void 0:L[0];if(!ve)return;const le=new FileReader;le.onload=Y=>{var U;try{const x=JSON.parse((U=Y.target)==null?void 0:U.result),R=x.sheetData||(Array.isArray(x)?x:null);Array.isArray(R)&&R.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(R)),window.postMessage({type:"SYNC_DATA",payload:R},"*"),Ge(`✓ Loaded configuration from "${ve.name}"!`)):Ge("⚠️ Invalid config: missing sheetData")}catch(x){Ge(`⚠️ Failed to parse: ${(x==null?void 0:x.message)||String(x)}`)}},le.readAsText(ve),oe.target.value=""},Ae=()=>{$(oe=>{const ve=["top-right","bottom-left","top-left","bottom-right","float"],le=ve[(ve.indexOf(oe)+1)%ve.length];try{localStorage.setItem(Wu,le)}catch{}return Ge(`Inspector window docked: ${le.replace("-"," ").toUpperCase()}`),le})};F.useEffect(()=>{const oe=L=>{L.key==="Alt"?V(!0):L.key==="Escape"?b&&(_(!1),H(null)):(L.key==="d"||L.key==="D")&&Je&&Ae()},ve=L=>{L.key==="Alt"&&(V(!1),b||H(null))},le=()=>{V(!1)};return window.addEventListener("keydown",oe),window.addEventListener("keyup",ve),window.addEventListener("blur",le),()=>{window.removeEventListener("keydown",oe),window.removeEventListener("keyup",ve),window.removeEventListener("blur",le)}},[b]),F.useEffect(()=>{if(!Je){H(null);return}const oe=le=>{const L=le.target;if(!L||L.closest("#__code-inspector-ui")){H(null);return}de({x:le.clientX,y:le.clientY});const Y=L.closest("[data-source-loc]");if(!Y){H(null);return}const U=Y.getAttribute("data-source-loc")||"",x=Y.getAttribute("data-source-comp")||"",R=U.split(":");if(R.length<3)return;const ye=parseInt(R.pop(),10),be=parseInt(R.pop(),10),je=R.join(":"),Ce=Y.getBoundingClientRect(),De=Iu(Y);if(De&&De.rowIndex!==null){const Be=De.sectionName.toLowerCase().includes("hub")?1:0,pt=`${Be}:${De.rowIndex}:${De.colIndex}`;lt.current!==pt&&(lt.current=pt,Ee(Be),pe(pt),Gu(Be,De.rowIndex,De.colIndex,De.line))}H({file:je,line:be,col:ye,tag:Y.tagName.toLowerCase(),comp:x,rect:Ce,dataMatch:De});const He=`${je}:${be}`;if(tt.current!==He){tt.current=He;const Be=Math.max(1,be-1),pt=Math.min(co.length,be+1),ge=[];for(let pr=Be;pr<=pt;pr++)ge.push({line:pr,text:co[pr-1]??""});ee(ge)}},ve=le=>{const L=le.target;if(!L||L.closest("#__code-inspector-ui"))return;const Y=L.closest("[data-source-loc]");if(!Y)return;le.preventDefault(),le.stopPropagation();const x=(Y.getAttribute("data-source-loc")||"").split(":");if(x.length<3)return;let R=parseInt(x.pop(),10),ye=parseInt(x.pop(),10),be=x.join(":");const je=Iu(Y);(le.ctrlKey||le.metaKey)&&je?(be=je.csvFile,ye=je.csvLine,R=1):le.shiftKey&&je&&(ye=je.line,R=1),Cs(be,ye,R,Ge)};return window.addEventListener("mousemove",oe,!0),window.addEventListener("click",ve,!0),()=>{window.removeEventListener("mousemove",oe,!0),window.removeEventListener("click",ve,!0)}},[Je]);let ze={};if(M){const L=M.rect;if(K==="top-right")L.right>window.innerWidth-497&&L.top<336?ze={bottom:"64px",left:"16px"}:ze={top:"16px",right:"16px"};else if(K==="bottom-left")L.left<497&&L.bottom>window.innerHeight-384?ze={top:"16px",right:"16px"}:ze={bottom:"64px",left:"16px"};else if(K==="top-left")L.left<497&&L.top<336?ze={bottom:"64px",right:"16px"}:ze={top:"16px",left:"16px"};else if(K==="bottom-right")L.right>window.innerWidth-497&&L.bottom>window.innerHeight-384?ze={top:"16px",left:"16px"}:ze={bottom:"64px",right:"16px"};else{let Y=L.top,U=L.right+16;U+465>window.innerWidth-16&&(U=L.left-465-16),U<16&&(U=Math.max(16,Math.min(L.left,window.innerWidth-465-16)),Y=L.top>336?L.top-320-12:L.bottom+12),Y=Math.max(16,Math.min(Y,window.innerHeight-320-16)),ze={top:`${Y}px`,left:`${U}px`}}}let Oe=!1;if(ne.current&&Je){const oe=ne.current.getBoundingClientRect(),ve=Math.max(oe.left,Math.min(Q.x,oe.right)),le=Math.max(oe.top,Math.min(Q.y,oe.bottom));Math.hypot(Q.x-ve,Q.y-le)<40&&(Oe=!0)}return n.jsxs("div",{id:"__code-inspector-ui",style:{position:"fixed",zIndex:999999,pointerEvents:"none"},children:[Je&&M&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",top:M.rect.top,left:M.rect.left,width:M.rect.width,height:M.rect.height,border:"2px solid #3B82F6",backgroundColor:"rgba(59, 130, 246, 0.12)",borderRadius:"4px",pointerEvents:"none",transition:"all 0.04s ease-out"}}),n.jsxs("div",{style:{position:"fixed",top:M.rect.top>24?M.rect.top-22:M.rect.bottom+4,left:Math.max(4,Math.min(M.rect.left,window.innerWidth-240)),padding:"2px 8px",borderRadius:"4px",backgroundColor:"#0F172A",color:"#93C5FD",border:"1px solid #3B82F6",fontSize:"10px",fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none",whiteSpace:"nowrap",zIndex:999999,display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("span",{children:["<",M.tag,">",M.comp?` in <${M.comp}>`:""]}),n.jsxs("span",{style:{color:"#38BDF8",fontWeight:600},children:["• Line ",M.line]})]}),n.jsxs("div",{ref:ne,style:{position:"fixed",...ze,width:"465px",maxWidth:"calc(100vw - 32px)",backgroundColor:"#0F172A",color:"#F8FAFC",padding:"10px 14px",borderRadius:"10px",boxShadow:"0 12px 30px -5px rgba(0, 0, 0, 0.65)",border:"1px solid #334155",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",lineHeight:"1.45",pointerEvents:"auto",opacity:Oe?.22:.98,transition:"opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease",zIndex:999999},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"},children:[n.jsxs("span",{style:{color:"#60A5FA",fontWeight:700,fontSize:"11.5px"},children:["<",M.tag,">",M.comp?n.jsxs("span",{style:{color:"#C084FC",fontWeight:500},children:[" in ",M.comp]}):null]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("button",{type:"button",onClick:Ae,title:"Move inspector window corner (or press 'D' key)",style:{backgroundColor:"#1E293B",color:"#93C5FD",border:"1px solid #3B82F6",borderRadius:"4px",padding:"2px 7px",fontSize:"9.5px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",K.replace("-"," ")]})]}),n.jsxs("span",{style:{color:"#38BDF8",backgroundColor:"#1E293B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["Line ",M.line,":",M.col]})]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"6px"},children:[M.file," (",n.jsx("strong",{children:"Click"})," = UI code)"]}),O.length>0&&n.jsx("div",{style:{backgroundColor:"#020617",padding:"6px 8px",borderRadius:"5px",border:"1px solid #1E293B",overflowX:"hidden",whiteSpace:"pre"},children:O.map(oe=>{const ve=oe.line===M.line,le=ve&&M.col>30?Math.max(0,M.col-1):0,L=le>0?"…"+oe.text.slice(le,le+55):oe.text.trim().slice(0,56);return n.jsxs("div",{style:{backgroundColor:ve?"rgba(59, 130, 246, 0.22)":"transparent",color:ve?"#F8FAFC":"#64748B",fontWeight:ve?600:400,padding:"0 4px",borderRadius:"2px",textOverflow:"ellipsis",overflow:"hidden"},children:[n.jsx("span",{style:{display:"inline-block",width:"36px",color:ve?"#60A5FA":"#475569",userSelect:"none"},children:oe.line}),L]},oe.line)})}),M.dataMatch&&n.jsxs("div",{style:{marginTop:"8px",paddingTop:"6px",borderTop:"1px solid #334155"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"2px"},children:[n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["📊 TSX Data (index_ ",M.dataMatch.rowIndex,", row[",M.dataMatch.colIndex,"])"]}),n.jsxs("span",{style:{color:"#6EE7B7",backgroundColor:"#064E3B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["TSX Line ",M.dataMatch.line]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"4px"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",M.dataMatch.csvFile]}),n.jsxs("span",{style:{color:"#FDE68A",backgroundColor:"#78350F",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["CSV Line ",M.dataMatch.csvLine," • Col ",M.dataMatch.colLetter]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"4px"},children:[n.jsx("strong",{children:"Shift+Click"})," = .tsx Data • ",n.jsx("strong",{children:"Ctrl+Click"})," = .csv File"]}),n.jsxs("div",{style:{backgroundColor:"#022C22",color:"#ECFDF5",padding:"4px 8px",borderRadius:"4px",border:"1px solid #065F46",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.jsx("span",{style:{color:"#34D399",marginRight:"8px"},children:M.dataMatch.line}),M.dataMatch.text.slice(0,56)]})]})]})]}),we&&n.jsxs("div",{style:{position:"fixed",bottom:"54px",right:"16px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:["✓ ",we]}),xe&&n.jsx("div",{style:{position:"fixed",bottom:"56px",left:"16px",right:"16px",height:"52vh",pointerEvents:"auto",borderRadius:"12px",overflow:"hidden",border:"2px solid #F59E0B",boxShadow:"0 20px 45px rgba(0, 0, 0, 0.65)"},children:n.jsx(Uu,{isStandalone:!1,activeCsvSheetIdx:Pe,setActiveCsvSheetIdx:Ee,selectedCellKey:re,setSelectedCellKey:pe,onClose:()=>te(!1),onToast:Ge})}),n.jsxs("div",{style:{position:"fixed",bottom:"14px",right:"16px",pointerEvents:"auto",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{type:"button",onClick:()=>zu(Ge,()=>te(!0)),title:"Open the CSV Visual Map in a separate standalone desktop window",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #F59E0B",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"↗"}),n.jsx("span",{children:"Pop Out CSV Map"})]}),n.jsxs("button",{type:"button",onClick:Re,title:"Save current browser setup as the permanent default in code (.tsx) and configuration file",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #059669",backgroundColor:"#065F46",color:"#ECFDF5",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:"Save as Default"})]}),n.jsxs("button",{type:"button",onClick:ke,title:"Download/export configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"⬇️"}),n.jsx("span",{children:"Export Config"})]}),n.jsxs("label",{title:"Import/restore a configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"⬆️"}),n.jsx("span",{children:"Import Config"}),n.jsx("input",{type:"file",accept:".json",onChange:Ye,style:{display:"none"}})]}),n.jsxs("button",{type:"button",onClick:()=>{try{localStorage.removeItem("weekly_chores_canvas_sheet_data_v1"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v2"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v3"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v4"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v5")}catch{}window.postMessage({type:"SYNC_DATA",payload:jl},"*"),Ge("Reset to INITIAL_SHEET_DATA")},title:"Clear cached localStorage and reload INITIAL_SHEET_DATA from code",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"Reset Data"})]}),n.jsxs("button",{type:"button",onClick:()=>_(oe=>!oe),title:"Toggle Inspect Mode (or hold Alt key while hovering)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:Je?"2px solid #93C5FD":"1px solid #334155",backgroundColor:Je?"#2563EB":"#0F172A",color:"#FFFFFF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:Je?"Inspecting Code (Click element)":"Inspect Code (or hold Alt)"})]}),Je&&n.jsxs("button",{type:"button",onClick:Ae,title:"Cycle inspector info window corner (or press 'D' key while inspecting)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #475569",backgroundColor:"#1E293B",color:"#93C5FD",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",K.replace("-"," ")," (Key: D)"]})]})]})]})}const yp=typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="csv-map";Qh.createRoot(document.getElementById("root")).render(n.jsx(ao.StrictMode,{children:yp?n.jsx(fp,{}):n.jsxs(n.Fragment,{children:[n.jsx(pp,{}),n.jsx(xp,{})]})}));
