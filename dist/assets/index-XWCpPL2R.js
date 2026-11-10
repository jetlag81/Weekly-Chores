(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const K of document.querySelectorAll('link[rel="modulepreload"]'))U(K);new MutationObserver(K=>{for(const q of K)if(q.type==="childList")for(const Y of q.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&U(Y)}).observe(document,{childList:!0,subtree:!0});function v(K){const q={};return K.integrity&&(q.integrity=K.integrity),K.referrerPolicy&&(q.referrerPolicy=K.referrerPolicy),K.crossOrigin==="use-credentials"?q.credentials="include":K.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function U(K){if(K.ep)return;K.ep=!0;const q=v(K);fetch(K.href,q)}})();function Ou(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var td={exports:{}},xa={},rd={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu;function Bh(){if(xu)return He;xu=1;var b=Symbol.for("react.element"),_=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),Y=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),P=Symbol.iterator;function ne(x){return x===null||typeof x!="object"?null:(x=P&&x[P]||x["@@iterator"],typeof x=="function"?x:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fe=Object.assign,ce={};function se(x,R,ue){this.props=x,this.context=R,this.refs=ce,this.updater=ue||Se}se.prototype.isReactComponent={},se.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},se.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function $e(){}$e.prototype=se.prototype;function Le(x,R,ue){this.props=x,this.context=R,this.refs=ce,this.updater=ue||Se}var te=Le.prototype=new $e;te.constructor=Le,Fe(te,se.prototype),te.isPureReactComponent=!0;var fe=Array.isArray,ze=Object.prototype.hasOwnProperty,ot={current:null},Ze={key:!0,ref:!0,__self:!0,__source:!0};function Ue(x,R,ue){var be,ye={},_e=null,ke=null;if(R!=null)for(be in R.ref!==void 0&&(ke=R.ref),R.key!==void 0&&(_e=""+R.key),R)ze.call(R,be)&&!Ze.hasOwnProperty(be)&&(ye[be]=R[be]);var Be=arguments.length-2;if(Be===1)ye.children=ue;else if(1<Be){for(var Ke=Array(Be),Ge=0;Ge<Be;Ge++)Ke[Ge]=arguments[Ge+2];ye.children=Ke}if(x&&x.defaultProps)for(be in Be=x.defaultProps,Be)ye[be]===void 0&&(ye[be]=Be[be]);return{$$typeof:b,type:x,key:_e,ref:ke,props:ye,_owner:ot.current}}function Ee(x,R){return{$$typeof:b,type:x.type,key:R,ref:x.ref,props:x.props,_owner:x._owner}}function Ce(x){return typeof x=="object"&&x!==null&&x.$$typeof===b}function Ye(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return R[ue]})}var Ne=/\/+/g;function Oe(x,R){return typeof x=="object"&&x!==null&&x.key!=null?Ye(""+x.key):R.toString(36)}function Qe(x,R,ue,be,ye){var _e=typeof x;(_e==="undefined"||_e==="boolean")&&(x=null);var ke=!1;if(x===null)ke=!0;else switch(_e){case"string":case"number":ke=!0;break;case"object":switch(x.$$typeof){case b:case _:ke=!0}}if(ke)return ke=x,ye=ye(ke),x=be===""?"."+Oe(ke,0):be,fe(ye)?(ue="",x!=null&&(ue=x.replace(Ne,"$&/")+"/"),Qe(ye,R,ue,"",function(Ge){return Ge})):ye!=null&&(Ce(ye)&&(ye=Ee(ye,ue+(!ye.key||ke&&ke.key===ye.key?"":(""+ye.key).replace(Ne,"$&/")+"/")+x)),R.push(ye)),1;if(ke=0,be=be===""?".":be+":",fe(x))for(var Be=0;Be<x.length;Be++){_e=x[Be];var Ke=be+Oe(_e,Be);ke+=Qe(_e,R,ue,Ke,ye)}else if(Ke=ne(x),typeof Ke=="function")for(x=Ke.call(x),Be=0;!(_e=x.next()).done;)_e=_e.value,Ke=be+Oe(_e,Be++),ke+=Qe(_e,R,ue,Ke,ye);else if(_e==="object")throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ke}function re(x,R,ue){if(x==null)return x;var be=[],ye=0;return Qe(x,be,"","",function(_e){return R.call(ue,_e,ye++)}),be}function Te(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var ie={current:null},L={transition:null},V={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:L,ReactCurrentOwner:ot};function X(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:re,forEach:function(x,R,ue){re(x,function(){R.apply(this,arguments)},ue)},count:function(x){var R=0;return re(x,function(){R++}),R},toArray:function(x){return re(x,function(R){return R})||[]},only:function(x){if(!Ce(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},He.Component=se,He.Fragment=v,He.Profiler=K,He.PureComponent=Le,He.StrictMode=U,He.Suspense=ee,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,He.act=X,He.cloneElement=function(x,R,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var be=Fe({},x.props),ye=x.key,_e=x.ref,ke=x._owner;if(R!=null){if(R.ref!==void 0&&(_e=R.ref,ke=ot.current),R.key!==void 0&&(ye=""+R.key),x.type&&x.type.defaultProps)var Be=x.type.defaultProps;for(Ke in R)ze.call(R,Ke)&&!Ze.hasOwnProperty(Ke)&&(be[Ke]=R[Ke]===void 0&&Be!==void 0?Be[Ke]:R[Ke])}var Ke=arguments.length-2;if(Ke===1)be.children=ue;else if(1<Ke){Be=Array(Ke);for(var Ge=0;Ge<Ke;Ge++)Be[Ge]=arguments[Ge+2];be.children=Be}return{$$typeof:b,type:x.type,key:ye,ref:_e,props:be,_owner:ke}},He.createContext=function(x){return x={$$typeof:Y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:q,_context:x},x.Consumer=x},He.createElement=Ue,He.createFactory=function(x){var R=Ue.bind(null,x);return R.type=x,R},He.createRef=function(){return{current:null}},He.forwardRef=function(x){return{$$typeof:le,render:x}},He.isValidElement=Ce,He.lazy=function(x){return{$$typeof:H,_payload:{_status:-1,_result:x},_init:Te}},He.memo=function(x,R){return{$$typeof:M,type:x,compare:R===void 0?null:R}},He.startTransition=function(x){var R=L.transition;L.transition={};try{x()}finally{L.transition=R}},He.unstable_act=X,He.useCallback=function(x,R){return ie.current.useCallback(x,R)},He.useContext=function(x){return ie.current.useContext(x)},He.useDebugValue=function(){},He.useDeferredValue=function(x){return ie.current.useDeferredValue(x)},He.useEffect=function(x,R){return ie.current.useEffect(x,R)},He.useId=function(){return ie.current.useId()},He.useImperativeHandle=function(x,R,ue){return ie.current.useImperativeHandle(x,R,ue)},He.useInsertionEffect=function(x,R){return ie.current.useInsertionEffect(x,R)},He.useLayoutEffect=function(x,R){return ie.current.useLayoutEffect(x,R)},He.useMemo=function(x,R){return ie.current.useMemo(x,R)},He.useReducer=function(x,R,ue){return ie.current.useReducer(x,R,ue)},He.useRef=function(x){return ie.current.useRef(x)},He.useState=function(x){return ie.current.useState(x)},He.useSyncExternalStore=function(x,R,ue){return ie.current.useSyncExternalStore(x,R,ue)},He.useTransition=function(){return ie.current.useTransition()},He.version="18.3.1",He}var yu;function xd(){return yu||(yu=1,rd.exports=Bh()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function qh(){if(gu)return xa;gu=1;var b=xd(),_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),U=Object.prototype.hasOwnProperty,K=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function Y(le,ee,M){var H,P={},ne=null,Se=null;M!==void 0&&(ne=""+M),ee.key!==void 0&&(ne=""+ee.key),ee.ref!==void 0&&(Se=ee.ref);for(H in ee)U.call(ee,H)&&!q.hasOwnProperty(H)&&(P[H]=ee[H]);if(le&&le.defaultProps)for(H in ee=le.defaultProps,ee)P[H]===void 0&&(P[H]=ee[H]);return{$$typeof:_,type:le,key:ne,ref:Se,props:P,_owner:K.current}}return xa.Fragment=v,xa.jsx=Y,xa.jsxs=Y,xa}var wu;function $h(){return wu||(wu=1,td.exports=qh()),td.exports}var n=$h(),I=xd();const io=Ou(I);var Nl={},nd={exports:{}},ar={},od={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function Hh(){return bu||(bu=1,(function(b){function _(L,V){var X=L.length;L.push(V);e:for(;0<X;){var x=X-1>>>1,R=L[x];if(0<K(R,V))L[x]=V,L[X]=R,X=x;else break e}}function v(L){return L.length===0?null:L[0]}function U(L){if(L.length===0)return null;var V=L[0],X=L.pop();if(X!==V){L[0]=X;e:for(var x=0,R=L.length,ue=R>>>1;x<ue;){var be=2*(x+1)-1,ye=L[be],_e=be+1,ke=L[_e];if(0>K(ye,X))_e<R&&0>K(ke,ye)?(L[x]=ke,L[_e]=X,x=_e):(L[x]=ye,L[be]=X,x=be);else if(_e<R&&0>K(ke,X))L[x]=ke,L[_e]=X,x=_e;else break e}}return V}function K(L,V){var X=L.sortIndex-V.sortIndex;return X!==0?X:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var q=performance;b.unstable_now=function(){return q.now()}}else{var Y=Date,le=Y.now();b.unstable_now=function(){return Y.now()-le}}var ee=[],M=[],H=1,P=null,ne=3,Se=!1,Fe=!1,ce=!1,se=typeof setTimeout=="function"?setTimeout:null,$e=typeof clearTimeout=="function"?clearTimeout:null,Le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(L){for(var V=v(M);V!==null;){if(V.callback===null)U(M);else if(V.startTime<=L)U(M),V.sortIndex=V.expirationTime,_(ee,V);else break;V=v(M)}}function fe(L){if(ce=!1,te(L),!Fe)if(v(ee)!==null)Fe=!0,Te(ze);else{var V=v(M);V!==null&&ie(fe,V.startTime-L)}}function ze(L,V){Fe=!1,ce&&(ce=!1,$e(Ue),Ue=-1),Se=!0;var X=ne;try{for(te(V),P=v(ee);P!==null&&(!(P.expirationTime>V)||L&&!Ye());){var x=P.callback;if(typeof x=="function"){P.callback=null,ne=P.priorityLevel;var R=x(P.expirationTime<=V);V=b.unstable_now(),typeof R=="function"?P.callback=R:P===v(ee)&&U(ee),te(V)}else U(ee);P=v(ee)}if(P!==null)var ue=!0;else{var be=v(M);be!==null&&ie(fe,be.startTime-V),ue=!1}return ue}finally{P=null,ne=X,Se=!1}}var ot=!1,Ze=null,Ue=-1,Ee=5,Ce=-1;function Ye(){return!(b.unstable_now()-Ce<Ee)}function Ne(){if(Ze!==null){var L=b.unstable_now();Ce=L;var V=!0;try{V=Ze(!0,L)}finally{V?Oe():(ot=!1,Ze=null)}}else ot=!1}var Oe;if(typeof Le=="function")Oe=function(){Le(Ne)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,re=Qe.port2;Qe.port1.onmessage=Ne,Oe=function(){re.postMessage(null)}}else Oe=function(){se(Ne,0)};function Te(L){Ze=L,ot||(ot=!0,Oe())}function ie(L,V){Ue=se(function(){L(b.unstable_now())},V)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(L){L.callback=null},b.unstable_continueExecution=function(){Fe||Se||(Fe=!0,Te(ze))},b.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<L?Math.floor(1e3/L):5},b.unstable_getCurrentPriorityLevel=function(){return ne},b.unstable_getFirstCallbackNode=function(){return v(ee)},b.unstable_next=function(L){switch(ne){case 1:case 2:case 3:var V=3;break;default:V=ne}var X=ne;ne=V;try{return L()}finally{ne=X}},b.unstable_pauseExecution=function(){},b.unstable_requestPaint=function(){},b.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=ne;ne=L;try{return V()}finally{ne=X}},b.unstable_scheduleCallback=function(L,V,X){var x=b.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?x+X:x):X=x,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=X+R,L={id:H++,callback:V,priorityLevel:L,startTime:X,expirationTime:R,sortIndex:-1},X>x?(L.sortIndex=X,_(M,L),v(ee)===null&&L===v(M)&&(ce?($e(Ue),Ue=-1):ce=!0,ie(fe,X-x))):(L.sortIndex=R,_(ee,L),Fe||Se||(Fe=!0,Te(ze))),L},b.unstable_shouldYield=Ye,b.unstable_wrapCallback=function(L){var V=ne;return function(){var X=ne;ne=V;try{return L.apply(this,arguments)}finally{ne=X}}}})(sd)),sd}var _u;function zh(){return _u||(_u=1,od.exports=Hh()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu;function Gh(){if(vu)return ar;vu=1;var b=xd(),_=zh();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U=new Set,K={};function q(e,t){Y(e,t),Y(e+"Capture",t)}function Y(e,t){for(K[e]=t,e=0;e<t.length;e++)U.add(t[e])}var le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},P={};function ne(e){return ee.call(P,e)?!0:ee.call(H,e)?!1:M.test(e)?P[e]=!0:(H[e]=!0,!1)}function Se(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fe(e,t,r,o){if(t===null||typeof t>"u"||Se(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,r,o,a,l,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=h}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ce(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ce(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ce(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ce(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){se[e]=new ce(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){se[e]=new ce(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){se[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var $e=/[\-:]([a-z])/g;function Le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($e,Le);se[t]=new ce(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($e,Le);se[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($e,Le);se[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)}),se.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){se[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,t,r,o){var a=se.hasOwnProperty(t)?se[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fe(t,r,a,o)&&(r=null),o||a===null?ne(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,o=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var fe=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),ot=Symbol.for("react.portal"),Ze=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Ye=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),L=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,x;function R(e){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ue=!1;function be(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),l=o.stack.split(`
`),h=a.length-1,g=l.length-1;1<=h&&0<=g&&a[h]!==l[g];)g--;for(;1<=h&&0<=g;h--,g--)if(a[h]!==l[g]){if(h!==1||g!==1)do if(h--,g--,0>g||a[h]!==l[g]){var C=`
`+a[h].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=h&&0<=g);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function ye(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=be(e.type,!1),e;case 11:return e=be(e.type.render,!1),e;case 1:return e=be(e.type,!0),e;default:return""}}function _e(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ze:return"Fragment";case ot:return"Portal";case Ee:return"Profiler";case Ue:return"StrictMode";case Oe:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ye:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(t);case 8:return t===Ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=Ke(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){o=""+h,l.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(h){o=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||(e._valueTracker=Ge(e))}function At(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function mt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nr(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function kt(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=Be(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tn(e,t){t=t.checked,t!=null&&te(e,"checked",t,!1)}function ct(e,t){Tn(e,t);var r=Be(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xt(e,t.type,r):t.hasOwnProperty("defaultValue")&&xt(e,t.type,Be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Br(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xt(e,t,r){(t!=="number"||mt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var tn=Array.isArray;function Xt(e,t,r,o){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Be(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ot(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(v(92));if(tn(r)){if(1<r.length)throw Error(v(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Be(r)}}function rn(e,t){var r=Be(t.value),o=Be(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ho(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ho(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,ba=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_a=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){_a.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function lr(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function nn(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=lr(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,a):e[r]=a}}var Ds=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(Ds[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function fr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,xr=null,on=null;function qo(e){if(e=ta(e)){if(typeof Bo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Pa(t),Bo(e.stateNode,e.type,t))}}function Ts(e){xr?on?on.push(e):on=[e]:xr=e}function $o(){if(xr){var e=xr,t=on;if(on=xr=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Ho(e,t){return e(t)}function va(){}var mo=!1;function ka(e,t,r){if(mo)return e(t,r);mo=!0;try{return Ho(e,t,r)}finally{mo=!1,(xr!==null||on!==null)&&(va(),$o())}}function $r(e,t){var r=e.stateNode;if(r===null)return null;var o=Pa(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(v(231,t,typeof r));return r}var Es=!1;if(le)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Es=!1}function Ms(e,t,r,o,a,l,h,g,C){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch($){this.onError($)}}var fo=!1,zt=null,Rn=!1,yr=null,Rs={onError:function(e){fo=!0,zt=e}};function Ca(e,t,r,o,a,l,h,g,C){fo=!1,zt=null,Ms.apply(Rs,arguments)}function xo(e,t,r,o,a,l,h,g,C){if(Ca.apply(this,arguments),fo){if(fo){var E=zt;fo=!1,zt=null}else throw Error(v(198));Rn||(Rn=!0,yr=E)}}function Ar(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ls(e){if(Ar(e)!==e)throw Error(v(188))}function ge(e){var t=e.alternate;if(!t){if(t=Ar(e),t===null)throw Error(v(188));return t!==e?null:e}for(var r=e,o=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Ls(a),e;if(l===o)return Ls(a),t;l=l.sibling}throw Error(v(188))}if(r.return!==o.return)r=a,o=l;else{for(var h=!1,g=a.child;g;){if(g===r){h=!0,r=a,o=l;break}if(g===o){h=!0,o=a,r=l;break}g=g.sibling}if(!h){for(g=l.child;g;){if(g===r){h=!0,r=l,o=a;break}if(g===o){h=!0,o=l,r=a;break}g=g.sibling}if(!h)throw Error(v(189))}}if(r.alternate!==o)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?e:t}function zo(e){return e=ge(e),e!==null?Sa(e):null}function Sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sa(e);if(t!==null)return t;e=e.sibling}return null}var Is=_.unstable_scheduleCallback,Ws=_.unstable_cancelCallback,Go=_.unstable_shouldYield,Ln=_.unstable_requestPaint,lt=_.unstable_now,Fs=_.unstable_getCurrentPriorityLevel,Dr=_.unstable_ImmediatePriority,In=_.unstable_UserBlockingPriority,Hr=_.unstable_NormalPriority,Os=_.unstable_LowPriority,Ks=_.unstable_IdlePriority,jr=null,qe=null;function Kt(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(jr,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:yo,Tr=Math.log,Aa=Math.LN2;function yo(e){return e>>>=0,e===0?32:31-(Tr(e)/Aa|0)|0}var rt=64,Gt=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,h=r&268435455;if(h!==0){var g=h&~a;g!==0?o=go(g):(l&=h,l!==0&&(o=go(l)))}else h=r&~a,h!==0?o=go(h):l!==0&&(o=go(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Pt(t),a=1<<r,o|=e[r],t&=~a;return o}function Tl(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var h=31-Pt(l),g=1<<h,C=a[h];C===-1?((g&r)===0||(g&o)!==0)&&(a[h]=Tl(g,t)):C<=t&&(e.expiredLanes|=g),l&=~g}}function sn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Er(){var e=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),e}function an(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=r}function gd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Pt(r),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,r&=~l}}function Ps(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Pt(r),a=1<<o;a&t|e[o]&t&&(e[o]|=t),r&=~a}}var Ve=0;function Zt(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ln,Bs,dn,cn,wo,qs=!1,un=[],Mr=null,Rr=null,ir=null,hn=new Map,Yo=new Map,pn=[],gr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ut(e,t){switch(e){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(t.pointerId)}}function Ct(e,t,r,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ta(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Da(e,t,r,o,a){switch(t){case"focusin":return Mr=Ct(Mr,e,t,r,o,a),!0;case"dragenter":return Rr=Ct(Rr,e,t,r,o,a),!0;case"mouseover":return ir=Ct(ir,e,t,r,o,a),!0;case"pointerover":var l=a.pointerId;return hn.set(l,Ct(hn.get(l)||null,e,t,r,o,a)),!0;case"gotpointercapture":return l=a.pointerId,Yo.set(l,Ct(Yo.get(l)||null,e,t,r,o,a)),!0}return!1}function Mt(e){var t=Ao(e.target);if(t!==null){var r=Ar(t);if(r!==null){if(t=r.tag,t===13){if(t=Na(r),t!==null){e.blockedOn=t,wo(e.priority,function(){dn(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=er(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Sr=o,r.target.dispatchEvent(o),Sr=null}else return t=ta(r),t!==null&&Bs(t),e.blockedOn=r,!1;t.shift()}return!0}function Lr(e,t,r){mn(e)&&r.delete(t)}function bo(){qs=!1,Mr!==null&&mn(Mr)&&(Mr=null),Rr!==null&&mn(Rr)&&(Rr=null),ir!==null&&mn(ir)&&(ir=null),hn.forEach(Lr),Yo.forEach(Lr)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,bo)))}function dr(e){function t(a){return Wn(a,e)}if(0<un.length){Wn(un[0],e);for(var r=1;r<un.length;r++){var o=un[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Mr!==null&&Wn(Mr,e),Rr!==null&&Wn(Rr,e),ir!==null&&Wn(ir,e),hn.forEach(t),Yo.forEach(t),r=0;r<pn.length;r++)o=pn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)Mt(r),r.blockedOn===null&&pn.shift()}var Gr=fe.ReactCurrentBatchConfig,_o=!0;function ja(e,t,r,o){var a=Ve,l=Gr.transition;Gr.transition=null;try{Ve=1,Fn(e,t,r,o)}finally{Ve=a,Gr.transition=l}}function El(e,t,r,o){var a=Ve,l=Gr.transition;Gr.transition=null;try{Ve=4,Fn(e,t,r,o)}finally{Ve=a,Gr.transition=l}}function Fn(e,t,r,o){if(_o){var a=er(e,t,r,o);if(a===null)zl(e,t,o,On,r),ut(e,o);else if(Da(a,e,t,r,o))o.stopPropagation();else if(ut(e,o),t&4&&-1<gr.indexOf(e)){for(;a!==null;){var l=ta(a);if(l!==null&&ln(l),l=er(e,t,r,o),l===null&&zl(e,t,o,On,r),l===a)break;a=l}a!==null&&o.stopPropagation()}else zl(e,t,o,null,r)}}var On=null;function er(e,t,r,o){if(On=null,e=po(o),e=Ao(e),e!==null)if(t=Ar(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Na(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return On=e,null}function $s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fs()){case Dr:return 1;case In:return 4;case Hr:case Os:return 16;case Ks:return 536870912;default:return 16}default:return 16}}var Ur=null,Vr=null,vo=null;function Hs(){if(vo)return vo;var e,t=Vr,r=t.length,o,a="value"in Ur?Ur.value:Ur.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var h=r-e;for(o=1;o<=h&&t[r-o]===a[l-o];o++);return vo=a.slice(e,1<o?1-o:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Ta(){return!1}function Ut(e){function t(r,o,a,l,h){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(r=e[g],this[g]=r?r(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ko:Ta,this.isPropagationStopped=Ta,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Ut(fn),Bn=X({},fn,{view:0,detail:0}),Ea=Ut(Bn),zs,Gs,Yr,Qo=X({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(zs=e.screenX-Yr.screenX,Gs=e.screenY-Yr.screenY):Gs=zs=0,Yr=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Ma=Ut(Qo),Co=X({},Qo,{dataTransfer:0}),Ml=Ut(Co),Rl=X({},Bn,{relatedTarget:0}),No=Ut(Rl),Ll=X({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Il=Ut(Ll),Ir=X({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qn=Ut(Ir),Qr=X({},fn,{data:0}),Ra=Ut(Qr),Wl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xn[e])?!!t[e]:!1}function i(){return s}var c=X({},Bn,{key:function(e){if(e.key){var t=Wl[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m=Ut(c),p=X({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u=Ut(p),d=X({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i}),y=Ut(d),w=X({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),N=Ut(w),D=X({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S=Ut(D),f=[9,13,27,32],k=le&&"CompositionEvent"in window,W=null;le&&"documentMode"in document&&(W=document.documentMode);var z=le&&"TextEvent"in window&&!W,O=le&&(!k||W&&8<W&&11>=W),F=" ",Q=!1;function Z(e,t){switch(e){case"keyup":return f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pe=!1;function Ie(e,t){switch(e){case"compositionend":return he(t);case"keypress":return t.which!==32?null:(Q=!0,F);case"textInput":return e=t.data,e===F&&Q?null:e;default:return null}}function We(e,t){if(pe)return e==="compositionend"||!k&&Z(e,t)?(e=Hs(),vo=Vr=Ur=null,pe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return O&&t.locale!=="ko"?null:t.data;default:return null}}var je={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ve(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!je[e.type]:t==="textarea"}function Pe(e,t,r,o){Ts(o),t=Fa(t,"onChange"),0<t.length&&(r=new Pn("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var st=null,et=null;function _t(e){Md(e,0)}function Dt(e){var t=os(e);if(At(t))return e}function tt(e,t){if(e==="change")return t}var Us=!1;if(le){var Jo;if(le){var Xo="oninput"in document;if(!Xo){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Xo=typeof Vs.oninput=="function"}Jo=Xo}else Jo=!1;Us=Jo&&(!document.documentMode||9<document.documentMode)}function So(){st&&(st.detachEvent("onpropertychange",$n),et=st=null)}function $n(e){if(e.propertyName==="value"&&Dt(et)){var t=[];Pe(t,et,e,po(e)),ka(_t,t)}}function Hn(e,t,r){e==="focusin"?(So(),st=t,et=r,st.attachEvent("onpropertychange",$n)):e==="focusout"&&So()}function yn(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dt(et)}function zn(e,t){if(e==="click")return Dt(t)}function Ys(e,t){if(e==="input"||e==="change")return Dt(t)}function Zo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Zo;function Rt(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!ee.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var r=wd(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wd(r)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=mt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=mt(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vu(e){var t=vd(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_d(r.ownerDocument.documentElement,r)){if(o!==null&&Ol(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=bd(r,l);var h=bd(r,o);a&&h&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=le&&"documentMode"in document&&11>=document.documentMode,es=null,Kl=null,Qs=null,Pl=!1;function kd(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pl||es==null||es!==mt(o)||(o=es,"selectionStart"in o&&Ol(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Rt(Qs,o)||(Qs=o,o=Fa(Kl,"onSelect"),0<o.length&&(t=new Pn("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=es)))}function La(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ts={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Bl={},Cd={};le&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Ia(e){if(Bl[e])return Bl[e];if(!ts[e])return e;var t=ts[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cd)return Bl[e]=t[r];return e}var Nd=Ia("animationend"),Sd=Ia("animationiteration"),Ad=Ia("animationstart"),Dd=Ia("transitionend"),jd=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){jd.set(e,t),q(t,[e])}for(var ql=0;ql<Td.length;ql++){var $l=Td[ql],Qu=$l.toLowerCase(),Ju=$l[0].toUpperCase()+$l.slice(1);Gn(Qu,"on"+Ju)}Gn(Nd,"onAnimationEnd"),Gn(Sd,"onAnimationIteration"),Gn(Ad,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(Dd,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Ed(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,xo(o,t,void 0,e),e.currentTarget=null}function Md(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var h=o.length-1;0<=h;h--){var g=o[h],C=g.instance,E=g.currentTarget;if(g=g.listener,C!==l&&a.isPropagationStopped())break e;Ed(a,g,E),l=C}else for(h=0;h<o.length;h++){if(g=o[h],C=g.instance,E=g.currentTarget,g=g.listener,C!==l&&a.isPropagationStopped())break e;Ed(a,g,E),l=C}}}if(Rn)throw e=yr,Rn=!1,yr=null,e}function ht(e,t){var r=t[Jl];r===void 0&&(r=t[Jl]=new Set);var o=e+"__bubble";r.has(o)||(Rd(t,e,2,!1),r.add(o))}function Hl(e,t,r){var o=0;t&&(o|=4),Rd(r,e,o,t)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[Wa]){e[Wa]=!0,U.forEach(function(r){r!=="selectionchange"&&(Xu.has(r)||Hl(r,!1,e),Hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wa]||(t[Wa]=!0,Hl("selectionchange",!1,t))}}function Rd(e,t,r,o){switch($s(t)){case 1:var a=ja;break;case 4:a=El;break;default:a=Fn}r=a.bind(null,t,r,e),a=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function zl(e,t,r,o,a){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var g=o.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(h===4)for(h=o.return;h!==null;){var C=h.tag;if((C===3||C===4)&&(C=h.stateNode.containerInfo,C===a||C.nodeType===8&&C.parentNode===a))return;h=h.return}for(;g!==null;){if(h=Ao(g),h===null)return;if(C=h.tag,C===5||C===6){o=l=h;continue e}g=g.parentNode}}o=o.return}ka(function(){var E=l,$=po(r),G=[];e:{var B=jd.get(e);if(B!==void 0){var oe=Pn,de=e;switch(e){case"keypress":if(Kn(r)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":de="focus",oe=No;break;case"focusout":de="blur",oe=No;break;case"beforeblur":case"afterblur":oe=No;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=y;break;case Nd:case Sd:case Ad:oe=Il;break;case Dd:oe=N;break;case"scroll":oe=Ea;break;case"wheel":oe=S;break;case"copy":case"cut":case"paste":oe=qn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=u}var me=(t&4)!==0,bt=!me&&e==="scroll",j=me?B!==null?B+"Capture":null:B;me=[];for(var A=E,T;A!==null;){T=A;var J=T.stateNode;if(T.tag===5&&J!==null&&(T=J,j!==null&&(J=$r(A,j),J!=null&&me.push(Zs(A,J,T)))),bt)break;A=A.return}0<me.length&&(B=new oe(B,de,null,r,$),G.push({event:B,listeners:me}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",B&&r!==Sr&&(de=r.relatedTarget||r.fromElement)&&(Ao(de)||de[gn]))break e;if((oe||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,oe?(de=r.relatedTarget||r.toElement,oe=E,de=de?Ao(de):null,de!==null&&(bt=Ar(de),de!==bt||de.tag!==5&&de.tag!==6)&&(de=null)):(oe=null,de=E),oe!==de)){if(me=Ma,J="onMouseLeave",j="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(me=u,J="onPointerLeave",j="onPointerEnter",A="pointer"),bt=oe==null?B:os(oe),T=de==null?B:os(de),B=new me(J,A+"leave",oe,r,$),B.target=bt,B.relatedTarget=T,J=null,Ao($)===E&&(me=new me(j,A+"enter",de,r,$),me.target=T,me.relatedTarget=bt,J=me),bt=J,oe&&de)t:{for(me=oe,j=de,A=0,T=me;T;T=rs(T))A++;for(T=0,J=j;J;J=rs(J))T++;for(;0<A-T;)me=rs(me),A--;for(;0<T-A;)j=rs(j),T--;for(;A--;){if(me===j||j!==null&&me===j.alternate)break t;me=rs(me),j=rs(j)}me=null}else me=null;oe!==null&&Ld(G,B,oe,me,!1),de!==null&&bt!==null&&Ld(G,bt,de,me,!0)}}e:{if(B=E?os(E):window,oe=B.nodeName&&B.nodeName.toLowerCase(),oe==="select"||oe==="input"&&B.type==="file")var xe=tt;else if(ve(B))if(Us)xe=Ys;else{xe=yn;var Ae=Hn}else(oe=B.nodeName)&&oe.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(xe=zn);if(xe&&(xe=xe(e,E))){Pe(G,xe,r,$);break e}Ae&&Ae(e,B,E),e==="focusout"&&(Ae=B._wrapperState)&&Ae.controlled&&B.type==="number"&&xt(B,"number",B.value)}switch(Ae=E?os(E):window,e){case"focusin":(ve(Ae)||Ae.contentEditable==="true")&&(es=Ae,Kl=E,Qs=null);break;case"focusout":Qs=Kl=es=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,kd(G,r,$);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":kd(G,r,$)}var De;if(k)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else pe?Z(e,r)&&(Re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Re="onCompositionStart");Re&&(O&&r.locale!=="ko"&&(pe||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&pe&&(De=Hs()):(Ur=$,Vr="value"in Ur?Ur.value:Ur.textContent,pe=!0)),Ae=Fa(E,Re),0<Ae.length&&(Re=new Ra(Re,e,null,r,$),G.push({event:Re,listeners:Ae}),De?Re.data=De:(De=he(r),De!==null&&(Re.data=De)))),(De=z?Ie(e,r):We(e,r))&&(E=Fa(E,"onBeforeInput"),0<E.length&&($=new Ra("onBeforeInput","beforeinput",null,r,$),G.push({event:$,listeners:E}),$.data=De))}Md(G,t)})}function Zs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fa(e,t){for(var r=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=$r(e,r),l!=null&&o.unshift(Zs(e,l,a)),l=$r(e,t),l!=null&&o.push(Zs(e,l,a))),e=e.return}return o}function rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,r,o,a){for(var l=t._reactName,h=[];r!==null&&r!==o;){var g=r,C=g.alternate,E=g.stateNode;if(C!==null&&C===o)break;g.tag===5&&E!==null&&(g=E,a?(C=$r(r,l),C!=null&&h.unshift(Zs(r,C,g))):a||(C=$r(r,l),C!=null&&h.push(Zs(r,C,g)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var Zu=/\r\n?/g,eh=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(Zu,`
`).replace(eh,"")}function Oa(e,t,r){if(t=Id(t),Id(e)!==t&&r)throw Error(v(425))}function Ka(){}var Gl=null,Ul=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(nh)}:Yl;function nh(e){setTimeout(function(){throw e})}function Ql(e,t){var r=t,o=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){e.removeChild(a),dr(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);dr(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ns=Math.random().toString(36).slice(2),Jr="__reactFiber$"+ns,ea="__reactProps$"+ns,gn="__reactContainer$"+ns,Jl="__reactEvents$"+ns,oh="__reactListeners$"+ns,sh="__reactHandles$"+ns;function Ao(e){var t=e[Jr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gn]||r[Jr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fd(e);e!==null;){if(r=e[Jr])return r;e=Fd(e)}return t}e=r,r=e.parentNode}return null}function ta(e){return e=e[Jr]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function os(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Pa(e){return e[ea]||null}var Xl=[],ss=-1;function Vn(e){return{current:e}}function pt(e){0>ss||(e.current=Xl[ss],Xl[ss]=null,ss--)}function it(e,t){ss++,Xl[ss]=e.current,e.current=t}var Yn={},Bt=Vn(Yn),tr=Vn(!1),Do=Yn;function as(e,t){var r=e.type.contextTypes;if(!r)return Yn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function rr(e){return e=e.childContextTypes,e!=null}function Ba(){pt(tr),pt(Bt)}function Od(e,t,r){if(Bt.current!==Yn)throw Error(v(168));it(Bt,t),it(tr,r)}function Kd(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(v(108,ke(e)||"Unknown",a));return X({},r,o)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Do=Bt.current,it(Bt,e),it(tr,tr.current),!0}function Pd(e,t,r){var o=e.stateNode;if(!o)throw Error(v(169));r?(e=Kd(e,t,Do),o.__reactInternalMemoizedMergedChildContext=e,pt(tr),pt(Bt),it(Bt,e)):pt(tr),it(tr,r)}var wn=null,$a=!1,Zl=!1;function Bd(e){wn===null?wn=[e]:wn.push(e)}function ah(e){$a=!0,Bd(e)}function Qn(){if(!Zl&&wn!==null){Zl=!0;var e=0,t=Ve;try{var r=wn;for(Ve=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}wn=null,$a=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),Is(Dr,Qn),a}finally{Ve=t,Zl=!1}}return null}var ls=[],is=0,Ha=null,za=0,wr=[],br=0,jo=null,bn=1,_n="";function To(e,t){ls[is++]=za,ls[is++]=Ha,Ha=e,za=t}function qd(e,t,r){wr[br++]=bn,wr[br++]=_n,wr[br++]=jo,jo=e;var o=bn;e=_n;var a=32-Pt(o)-1;o&=~(1<<a),r+=1;var l=32-Pt(t)+a;if(30<l){var h=a-a%5;l=(o&(1<<h)-1).toString(32),o>>=h,a-=h,bn=1<<32-Pt(t)+a|r<<a|o,_n=l+e}else bn=1<<l|r<<a|o,_n=e}function ei(e){e.return!==null&&(To(e,1),qd(e,1,0))}function ti(e){for(;e===Ha;)Ha=ls[--is],ls[is]=null,za=ls[--is],ls[is]=null;for(;e===jo;)jo=wr[--br],wr[br]=null,_n=wr[--br],wr[br]=null,bn=wr[--br],wr[br]=null}var cr=null,ur=null,ft=!1,Wr=null;function $d(e,t){var r=Cr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,cr=e,ur=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,cr=e,ur=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jo!==null?{id:bn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Cr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,cr=e,ur=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(ft){var t=ur;if(t){var r=t;if(!Hd(e,t)){if(ri(e))throw Error(v(418));t=Un(r.nextSibling);var o=cr;t&&Hd(e,t)?$d(o,r):(e.flags=e.flags&-4097|2,ft=!1,cr=e)}}else{if(ri(e))throw Error(v(418));e.flags=e.flags&-4097|2,ft=!1,cr=e}}}function zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cr=e}function Ga(e){if(e!==cr)return!1;if(!ft)return zd(e),ft=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=ur)){if(ri(e))throw Gd(),Error(v(418));for(;t;)$d(e,t),t=Un(t.nextSibling)}if(zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ur=Un(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ur=null}}else ur=cr?Un(e.stateNode.nextSibling):null;return!0}function Gd(){for(var e=ur;e;)e=Un(e.nextSibling)}function ds(){ur=cr=null,ft=!1}function oi(e){Wr===null?Wr=[e]:Wr.push(e)}var lh=fe.ReactCurrentBatchConfig;function ra(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var o=r.stateNode}if(!o)throw Error(v(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(h){var g=a.refs;h===null?delete g[l]:g[l]=h},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Vd(e){function t(j,A){if(e){var T=j.deletions;T===null?(j.deletions=[A],j.flags|=16):T.push(A)}}function r(j,A){if(!e)return null;for(;A!==null;)t(j,A),A=A.sibling;return null}function o(j,A){for(j=new Map;A!==null;)A.key!==null?j.set(A.key,A):j.set(A.index,A),A=A.sibling;return j}function a(j,A){return j=oo(j,A),j.index=0,j.sibling=null,j}function l(j,A,T){return j.index=T,e?(T=j.alternate,T!==null?(T=T.index,T<A?(j.flags|=2,A):T):(j.flags|=2,A)):(j.flags|=1048576,A)}function h(j){return e&&j.alternate===null&&(j.flags|=2),j}function g(j,A,T,J){return A===null||A.tag!==6?(A=Yi(T,j.mode,J),A.return=j,A):(A=a(A,T),A.return=j,A)}function C(j,A,T,J){var xe=T.type;return xe===Ze?$(j,A,T.props.children,J,T.key):A!==null&&(A.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Te&&Ud(xe)===A.type)?(J=a(A,T.props),J.ref=ra(j,A,T),J.return=j,J):(J=yl(T.type,T.key,T.props,null,j.mode,J),J.ref=ra(j,A,T),J.return=j,J)}function E(j,A,T,J){return A===null||A.tag!==4||A.stateNode.containerInfo!==T.containerInfo||A.stateNode.implementation!==T.implementation?(A=Qi(T,j.mode,J),A.return=j,A):(A=a(A,T.children||[]),A.return=j,A)}function $(j,A,T,J,xe){return A===null||A.tag!==7?(A=Oo(T,j.mode,J,xe),A.return=j,A):(A=a(A,T),A.return=j,A)}function G(j,A,T){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Yi(""+A,j.mode,T),A.return=j,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ze:return T=yl(A.type,A.key,A.props,null,j.mode,T),T.ref=ra(j,null,A),T.return=j,T;case ot:return A=Qi(A,j.mode,T),A.return=j,A;case Te:var J=A._init;return G(j,J(A._payload),T)}if(tn(A)||V(A))return A=Oo(A,j.mode,T,null),A.return=j,A;Ua(j,A)}return null}function B(j,A,T,J){var xe=A!==null?A.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return xe!==null?null:g(j,A,""+T,J);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ze:return T.key===xe?C(j,A,T,J):null;case ot:return T.key===xe?E(j,A,T,J):null;case Te:return xe=T._init,B(j,A,xe(T._payload),J)}if(tn(T)||V(T))return xe!==null?null:$(j,A,T,J,null);Ua(j,T)}return null}function oe(j,A,T,J,xe){if(typeof J=="string"&&J!==""||typeof J=="number")return j=j.get(T)||null,g(A,j,""+J,xe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case ze:return j=j.get(J.key===null?T:J.key)||null,C(A,j,J,xe);case ot:return j=j.get(J.key===null?T:J.key)||null,E(A,j,J,xe);case Te:var Ae=J._init;return oe(j,A,T,Ae(J._payload),xe)}if(tn(J)||V(J))return j=j.get(T)||null,$(A,j,J,xe,null);Ua(A,J)}return null}function de(j,A,T,J){for(var xe=null,Ae=null,De=A,Re=A=0,Et=null;De!==null&&Re<T.length;Re++){De.index>Re?(Et=De,De=null):Et=De.sibling;var Xe=B(j,De,T[Re],J);if(Xe===null){De===null&&(De=Et);break}e&&De&&Xe.alternate===null&&t(j,De),A=l(Xe,A,Re),Ae===null?xe=Xe:Ae.sibling=Xe,Ae=Xe,De=Et}if(Re===T.length)return r(j,De),ft&&To(j,Re),xe;if(De===null){for(;Re<T.length;Re++)De=G(j,T[Re],J),De!==null&&(A=l(De,A,Re),Ae===null?xe=De:Ae.sibling=De,Ae=De);return ft&&To(j,Re),xe}for(De=o(j,De);Re<T.length;Re++)Et=oe(De,j,Re,T[Re],J),Et!==null&&(e&&Et.alternate!==null&&De.delete(Et.key===null?Re:Et.key),A=l(Et,A,Re),Ae===null?xe=Et:Ae.sibling=Et,Ae=Et);return e&&De.forEach(function(so){return t(j,so)}),ft&&To(j,Re),xe}function me(j,A,T,J){var xe=V(T);if(typeof xe!="function")throw Error(v(150));if(T=xe.call(T),T==null)throw Error(v(151));for(var Ae=xe=null,De=A,Re=A=0,Et=null,Xe=T.next();De!==null&&!Xe.done;Re++,Xe=T.next()){De.index>Re?(Et=De,De=null):Et=De.sibling;var so=B(j,De,Xe.value,J);if(so===null){De===null&&(De=Et);break}e&&De&&so.alternate===null&&t(j,De),A=l(so,A,Re),Ae===null?xe=so:Ae.sibling=so,Ae=so,De=Et}if(Xe.done)return r(j,De),ft&&To(j,Re),xe;if(De===null){for(;!Xe.done;Re++,Xe=T.next())Xe=G(j,Xe.value,J),Xe!==null&&(A=l(Xe,A,Re),Ae===null?xe=Xe:Ae.sibling=Xe,Ae=Xe);return ft&&To(j,Re),xe}for(De=o(j,De);!Xe.done;Re++,Xe=T.next())Xe=oe(De,j,Re,Xe.value,J),Xe!==null&&(e&&Xe.alternate!==null&&De.delete(Xe.key===null?Re:Xe.key),A=l(Xe,A,Re),Ae===null?xe=Xe:Ae.sibling=Xe,Ae=Xe);return e&&De.forEach(function(Ph){return t(j,Ph)}),ft&&To(j,Re),xe}function bt(j,A,T,J){if(typeof T=="object"&&T!==null&&T.type===Ze&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ze:e:{for(var xe=T.key,Ae=A;Ae!==null;){if(Ae.key===xe){if(xe=T.type,xe===Ze){if(Ae.tag===7){r(j,Ae.sibling),A=a(Ae,T.props.children),A.return=j,j=A;break e}}else if(Ae.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Te&&Ud(xe)===Ae.type){r(j,Ae.sibling),A=a(Ae,T.props),A.ref=ra(j,Ae,T),A.return=j,j=A;break e}r(j,Ae);break}else t(j,Ae);Ae=Ae.sibling}T.type===Ze?(A=Oo(T.props.children,j.mode,J,T.key),A.return=j,j=A):(J=yl(T.type,T.key,T.props,null,j.mode,J),J.ref=ra(j,A,T),J.return=j,j=J)}return h(j);case ot:e:{for(Ae=T.key;A!==null;){if(A.key===Ae)if(A.tag===4&&A.stateNode.containerInfo===T.containerInfo&&A.stateNode.implementation===T.implementation){r(j,A.sibling),A=a(A,T.children||[]),A.return=j,j=A;break e}else{r(j,A);break}else t(j,A);A=A.sibling}A=Qi(T,j.mode,J),A.return=j,j=A}return h(j);case Te:return Ae=T._init,bt(j,A,Ae(T._payload),J)}if(tn(T))return de(j,A,T,J);if(V(T))return me(j,A,T,J);Ua(j,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,A!==null&&A.tag===6?(r(j,A.sibling),A=a(A,T),A.return=j,j=A):(r(j,A),A=Yi(T,j.mode,J),A.return=j,j=A),h(j)):r(j,A)}return bt}var cs=Vd(!0),Yd=Vd(!1),Va=Vn(null),Ya=null,us=null,si=null;function ai(){si=us=Ya=null}function li(e){var t=Va.current;pt(Va),e._currentValue=t}function ii(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function hs(e,t){Ya=e,si=us=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nr=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},us===null){if(Ya===null)throw Error(v(308));us=e,Ya.dependencies={lanes:0,firstContext:e}}else us=us.next=e;return t}var Eo=null;function di(e){Eo===null?Eo=[e]:Eo.push(e)}function Qd(e,t,r,o){var a=t.interleaved;return a===null?(r.next=r,di(t)):(r.next=a.next,a.next=r),t.interleaved=r,vn(e,o)}function vn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Jn=!1;function ci(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,vn(e,r)}return a=o.interleaved,a===null?(t.next=t,di(o)):(t.next=a.next,a.next=t),o.interleaved=t,vn(e,r)}function Qa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ps(e,r)}}function Xd(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=h:l=l.next=h,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ja(e,t,r,o){var a=e.updateQueue;Jn=!1;var l=a.firstBaseUpdate,h=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var C=g,E=C.next;C.next=null,h===null?l=E:h.next=E,h=C;var $=e.alternate;$!==null&&($=$.updateQueue,g=$.lastBaseUpdate,g!==h&&(g===null?$.firstBaseUpdate=E:g.next=E,$.lastBaseUpdate=C))}if(l!==null){var G=a.baseState;h=0,$=E=C=null,g=l;do{var B=g.lane,oe=g.eventTime;if((o&B)===B){$!==null&&($=$.next={eventTime:oe,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var de=e,me=g;switch(B=t,oe=r,me.tag){case 1:if(de=me.payload,typeof de=="function"){G=de.call(oe,G,B);break e}G=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=me.payload,B=typeof de=="function"?de.call(oe,G,B):de,B==null)break e;G=X({},G,B);break e;case 2:Jn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[g]:B.push(g))}else oe={eventTime:oe,lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},$===null?(E=$=oe,C=G):$=$.next=oe,h|=B;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;B=g,g=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if($===null&&(C=G),a.baseState=C,a.firstBaseUpdate=E,a.lastBaseUpdate=$,t=a.shared.interleaved,t!==null){a=t;do h|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Lo|=h,e.lanes=h,e.memoizedState=G}}function Zd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var na={},Xr=Vn(na),oa=Vn(na),sa=Vn(na);function Mo(e){if(e===na)throw Error(v(174));return e}function ui(e,t){switch(it(sa,t),it(oa,e),it(Xr,na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:As(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=As(t,e)}pt(Xr),it(Xr,t)}function ps(){pt(Xr),pt(oa),pt(sa)}function ec(e){Mo(sa.current);var t=Mo(Xr.current),r=As(t,e.type);t!==r&&(it(oa,e),it(Xr,r))}function hi(e){oa.current===e&&(pt(Xr),pt(oa))}var yt=Vn(0);function Xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pi=[];function mi(){for(var e=0;e<pi.length;e++)pi[e]._workInProgressVersionPrimary=null;pi.length=0}var Za=fe.ReactCurrentDispatcher,fi=fe.ReactCurrentBatchConfig,Ro=0,gt=null,Nt=null,jt=null,el=!1,aa=!1,la=0,ih=0;function qt(){throw Error(v(321))}function xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!nt(e[r],t[r]))return!1;return!0}function yi(e,t,r,o,a,l){if(Ro=l,gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?hh:ph,e=r(o,a),aa){l=0;do{if(aa=!1,la=0,25<=l)throw Error(v(301));l+=1,jt=Nt=null,t.updateQueue=null,Za.current=mh,e=r(o,a)}while(aa)}if(Za.current=nl,t=Nt!==null&&Nt.next!==null,Ro=0,jt=Nt=gt=null,el=!1,t)throw Error(v(300));return e}function gi(){var e=la!==0;return la=0,e}function Zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?gt.memoizedState=jt=e:jt=jt.next=e,jt}function vr(){if(Nt===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Nt.next;var t=jt===null?gt.memoizedState:jt.next;if(t!==null)jt=t,Nt=e;else{if(e===null)throw Error(v(310));Nt=e,e={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},jt===null?gt.memoizedState=jt=e:jt=jt.next=e}return jt}function ia(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=vr(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=Nt,a=o.baseQueue,l=r.pending;if(l!==null){if(a!==null){var h=a.next;a.next=l.next,l.next=h}o.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,o=o.baseState;var g=h=null,C=null,E=l;do{var $=E.lane;if((Ro&$)===$)C!==null&&(C=C.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var G={lane:$,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};C===null?(g=C=G,h=o):C=C.next=G,gt.lanes|=$,Lo|=$}E=E.next}while(E!==null&&E!==l);C===null?h=o:C.next=g,nt(o,t.memoizedState)||(nr=!0),t.memoizedState=o,t.baseState=h,t.baseQueue=C,r.lastRenderedState=o}if(e=r.interleaved,e!==null){a=e;do l=a.lane,gt.lanes|=l,Lo|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function bi(e){var t=vr(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var h=a=a.next;do l=e(l,h.action),h=h.next;while(h!==a);nt(l,t.memoizedState)||(nr=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,o]}function tc(){}function rc(e,t){var r=gt,o=vr(),a=t(),l=!nt(o.memoizedState,a);if(l&&(o.memoizedState=a,nr=!0),o=o.queue,_i(sc.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||jt!==null&&jt.memoizedState.tag&1){if(r.flags|=2048,da(9,oc.bind(null,r,o,a,t),void 0,null),Tt===null)throw Error(v(349));(Ro&30)!==0||nc(r,t,a)}return a}function nc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=gt.updateQueue,t===null?(t={lastEffect:null,stores:null},gt.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function oc(e,t,r,o){t.value=r,t.getSnapshot=o,ac(t)&&lc(e)}function sc(e,t,r){return r(function(){ac(t)&&lc(e)})}function ac(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!nt(e,r)}catch{return!0}}function lc(e){var t=vn(e,1);t!==null&&Pr(t,e,1,-1)}function ic(e){var t=Zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t.queue=e,e=e.dispatch=uh.bind(null,gt,e),[t.memoizedState,e]}function da(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=gt.updateQueue,t===null?(t={lastEffect:null,stores:null},gt.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function dc(){return vr().memoizedState}function tl(e,t,r,o){var a=Zr();gt.flags|=e,a.memoizedState=da(1|t,r,void 0,o===void 0?null:o)}function rl(e,t,r,o){var a=vr();o=o===void 0?null:o;var l=void 0;if(Nt!==null){var h=Nt.memoizedState;if(l=h.destroy,o!==null&&xi(o,h.deps)){a.memoizedState=da(t,r,l,o);return}}gt.flags|=e,a.memoizedState=da(1|t,r,l,o)}function cc(e,t){return tl(8390656,8,e,t)}function _i(e,t){return rl(2048,8,e,t)}function uc(e,t){return rl(4,2,e,t)}function hc(e,t){return rl(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mc(e,t,r){return r=r!=null?r.concat([e]):null,rl(4,4,pc.bind(null,t,e),r)}function vi(){}function fc(e,t){var r=vr();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function xc(e,t){var r=vr();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function yc(e,t,r){return(Ro&21)===0?(e.baseState&&(e.baseState=!1,nr=!0),e.memoizedState=r):(nt(r,t)||(r=Er(),gt.lanes|=r,Lo|=r,e.baseState=!0),t)}function dh(e,t){var r=Ve;Ve=r!==0&&4>r?r:4,e(!0);var o=fi.transition;fi.transition={};try{e(!1),t()}finally{Ve=r,fi.transition=o}}function gc(){return vr().memoizedState}function ch(e,t,r){var o=ro(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},wc(e))bc(t,r);else if(r=Qd(e,t,r,o),r!==null){var a=Yt();Pr(r,e,o,a),_c(r,t,o)}}function uh(e,t,r){var o=ro(e),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(wc(e))bc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var h=t.lastRenderedState,g=l(h,r);if(a.hasEagerState=!0,a.eagerState=g,nt(g,h)){var C=t.interleaved;C===null?(a.next=a,di(t)):(a.next=C.next,C.next=a),t.interleaved=a;return}}catch{}finally{}r=Qd(e,t,a,o),r!==null&&(a=Yt(),Pr(r,e,o,a),_c(r,t,o))}}function wc(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function bc(e,t){aa=el=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _c(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ps(e,r)}}var nl={readContext:_r,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},hh={readContext:_r,useCallback:function(e,t){return Zr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:cc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,tl(4194308,4,pc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var r=Zr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Zr();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=ch.bind(null,gt,e),[o.memoizedState,e]},useRef:function(e){var t=Zr();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:vi,useDeferredValue:function(e){return Zr().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=dh.bind(null,e[1]),Zr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=gt,a=Zr();if(ft){if(r===void 0)throw Error(v(407));r=r()}else{if(r=t(),Tt===null)throw Error(v(349));(Ro&30)!==0||nc(o,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,cc(sc.bind(null,o,l,e),[e]),o.flags|=2048,da(9,oc.bind(null,o,l,r,t),void 0,null),r},useId:function(){var e=Zr(),t=Tt.identifierPrefix;if(ft){var r=_n,o=bn;r=(o&~(1<<32-Pt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=la++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ih++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ph={readContext:_r,useCallback:fc,useContext:_r,useEffect:_i,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:hc,useMemo:xc,useReducer:wi,useRef:dc,useState:function(){return wi(ia)},useDebugValue:vi,useDeferredValue:function(e){var t=vr();return yc(t,Nt.memoizedState,e)},useTransition:function(){var e=wi(ia)[0],t=vr().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1},mh={readContext:_r,useCallback:fc,useContext:_r,useEffect:_i,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:hc,useMemo:xc,useReducer:bi,useRef:dc,useState:function(){return bi(ia)},useDebugValue:vi,useDeferredValue:function(e){var t=vr();return Nt===null?t.memoizedState=e:yc(t,Nt.memoizedState,e)},useTransition:function(){var e=bi(ia)[0],t=vr().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1};function Fr(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ki(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ol={isMounted:function(e){return(e=e._reactInternals)?Ar(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Yt(),a=ro(e),l=kn(o,a);l.payload=t,r!=null&&(l.callback=r),t=Xn(e,l,a),t!==null&&(Pr(t,e,a,o),Qa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Yt(),a=ro(e),l=kn(o,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Xn(e,l,a),t!==null&&(Pr(t,e,a,o),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Yt(),o=ro(e),a=kn(r,o);a.tag=2,t!=null&&(a.callback=t),t=Xn(e,a,o),t!==null&&(Pr(t,e,o,r),Qa(t,e,o))}};function vc(e,t,r,o,a,l,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,h):t.prototype&&t.prototype.isPureReactComponent?!Rt(r,o)||!Rt(a,l):!0}function kc(e,t,r){var o=!1,a=Yn,l=t.contextType;return typeof l=="object"&&l!==null?l=_r(l):(a=rr(t)?Do:Bt.current,o=t.contextTypes,l=(o=o!=null)?as(e,a):Yn),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Cc(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ci(e,t,r,o){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ci(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=_r(l):(l=rr(t)?Do:Bt.current,a.context=as(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ki(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ol.enqueueReplaceState(a,a.state,null),Ja(e,r,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ms(e,t){try{var r="",o=t;do r+=ye(o),o=o.return;while(o);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Ni(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Si(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,r){r=kn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ul||(ul=!0,Bi=o),Si(e,t)},r}function Sc(e,t,r){r=kn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;r.payload=function(){return o(a)},r.callback=function(){Si(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Si(e,t),typeof o!="function"&&(eo===null?eo=new Set([this]):eo.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Ac(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new fh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(r)||(a.add(r),e=jh.bind(null,e,t,r),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,r,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kn(-1,1),t.tag=2,Xn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var xh=fe.ReactCurrentOwner,nr=!1;function Vt(e,t,r,o){t.child=e===null?Yd(t,null,r,o):cs(t,e.child,r,o)}function Tc(e,t,r,o,a){r=r.render;var l=t.ref;return hs(t,a),o=yi(e,t,r,o,l,a),r=gi(),e!==null&&!nr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(ft&&r&&ei(t),t.flags|=1,Vt(e,t,o,a),t.child)}function Ec(e,t,r,o,a){if(e===null){var l=r.type;return typeof l=="function"&&!Vi(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Mc(e,t,l,o,a)):(e=yl(r.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var h=l.memoizedProps;if(r=r.compare,r=r!==null?r:Rt,r(h,o)&&e.ref===t.ref)return Cn(e,t,a)}return t.flags|=1,e=oo(l,o),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,r,o,a){if(e!==null){var l=e.memoizedProps;if(Rt(l,o)&&e.ref===t.ref)if(nr=!1,t.pendingProps=o=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(nr=!0);else return t.lanes=e.lanes,Cn(e,t,a)}return Ai(e,t,r,o,a)}function Rc(e,t,r){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(xs,hr),hr|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,it(xs,hr),hr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:r,it(xs,hr),hr|=o}else l!==null?(o=l.baseLanes|r,t.memoizedState=null):o=r,it(xs,hr),hr|=o;return Vt(e,t,a,r),t.child}function Lc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,r,o,a){var l=rr(r)?Do:Bt.current;return l=as(t,l),hs(t,a),r=yi(e,t,r,o,l,a),o=gi(),e!==null&&!nr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(ft&&o&&ei(t),t.flags|=1,Vt(e,t,r,a),t.child)}function Ic(e,t,r,o,a){if(rr(r)){var l=!0;qa(t)}else l=!1;if(hs(t,a),t.stateNode===null)al(e,t),kc(t,r,o),Ci(t,r,o,a),o=!0;else if(e===null){var h=t.stateNode,g=t.memoizedProps;h.props=g;var C=h.context,E=r.contextType;typeof E=="object"&&E!==null?E=_r(E):(E=rr(r)?Do:Bt.current,E=as(t,E));var $=r.getDerivedStateFromProps,G=typeof $=="function"||typeof h.getSnapshotBeforeUpdate=="function";G||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==o||C!==E)&&Cc(t,h,o,E),Jn=!1;var B=t.memoizedState;h.state=B,Ja(t,o,h,a),C=t.memoizedState,g!==o||B!==C||tr.current||Jn?(typeof $=="function"&&(ki(t,r,$,o),C=t.memoizedState),(g=Jn||vc(t,r,g,o,B,C,E))?(G||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=C),h.props=o,h.state=C,h.context=E,o=g):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{h=t.stateNode,Jd(e,t),g=t.memoizedProps,E=t.type===t.elementType?g:Fr(t.type,g),h.props=E,G=t.pendingProps,B=h.context,C=r.contextType,typeof C=="object"&&C!==null?C=_r(C):(C=rr(r)?Do:Bt.current,C=as(t,C));var oe=r.getDerivedStateFromProps;($=typeof oe=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==G||B!==C)&&Cc(t,h,o,C),Jn=!1,B=t.memoizedState,h.state=B,Ja(t,o,h,a);var de=t.memoizedState;g!==G||B!==de||tr.current||Jn?(typeof oe=="function"&&(ki(t,r,oe,o),de=t.memoizedState),(E=Jn||vc(t,r,E,o,B,de,C)||!1)?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,de,C),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,de,C)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=de),h.props=o,h.state=de,h.context=C,o=E):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),o=!1)}return Di(e,t,r,o,l,a)}function Di(e,t,r,o,a,l){Lc(e,t);var h=(t.flags&128)!==0;if(!o&&!h)return a&&Pd(t,r,!1),Cn(e,t,l);o=t.stateNode,xh.current=t;var g=h&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&h?(t.child=cs(t,e.child,null,l),t.child=cs(t,null,g,l)):Vt(e,t,g,l),t.memoizedState=o.state,a&&Pd(t,r,!0),t.child}function Wc(e){var t=e.stateNode;t.pendingContext?Od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Od(e,t.context,!1),ui(e,t.containerInfo)}function Fc(e,t,r,o,a){return ds(),oi(a),t.flags|=256,Vt(e,t,r,o),t.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,r){var o=t.pendingProps,a=yt.current,l=!1,h=(t.flags&128)!==0,g;if((g=h)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),it(yt,a&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=o.children,e=o.fallback,l?(o=t.mode,l=t.child,h={mode:"hidden",children:h},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=h):l=gl(h,o,0,null),e=Oo(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ti(r),t.memoizedState=ji,e):Ei(t,h));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return yh(e,t,h,o,g,a,r);if(l){l=o.fallback,h=t.mode,a=e.child,g=a.sibling;var C={mode:"hidden",children:o.children};return(h&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=C,t.deletions=null):(o=oo(a,C),o.subtreeFlags=a.subtreeFlags&14680064),g!==null?l=oo(g,l):(l=Oo(l,h,r,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,h=e.child.memoizedState,h=h===null?Ti(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},l.memoizedState=h,l.childLanes=e.childLanes&~r,t.memoizedState=ji,o}return l=e.child,e=l.sibling,o=oo(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ei(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sl(e,t,r,o){return o!==null&&oi(o),cs(t,e.child,null,r),e=Ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yh(e,t,r,o,a,l,h){if(r)return t.flags&256?(t.flags&=-257,o=Ni(Error(v(422))),sl(e,t,h,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=gl({mode:"visible",children:o.children},a,0,null),l=Oo(l,a,h,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&cs(t,e.child,null,h),t.child.memoizedState=Ti(h),t.memoizedState=ji,l);if((t.mode&1)===0)return sl(e,t,h,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var g=o.dgst;return o=g,l=Error(v(419)),o=Ni(l,o,void 0),sl(e,t,h,o)}if(g=(h&e.childLanes)!==0,nr||g){if(o=Tt,o!==null){switch(h&-h){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|h))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,vn(e,a),Pr(o,e,a,-1))}return Ui(),o=Ni(Error(v(421))),sl(e,t,h,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Th.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ur=Un(a.nextSibling),cr=t,ft=!0,Wr=null,e!==null&&(wr[br++]=bn,wr[br++]=_n,wr[br++]=jo,bn=e.id,_n=e.overflow,jo=t),t=Ei(t,o.children),t.flags|=4096,t)}function Kc(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ii(e.return,t,r)}function Mi(e,t,r,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=r,l.tailMode=a)}function Pc(e,t,r){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if(Vt(e,t,o.children,r),o=yt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,r,t);else if(e.tag===19)Kc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(it(yt,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Xa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Mi(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Xa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Mi(t,!0,r,null,l);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Lo|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,r=oo(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=oo(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function gh(e,t,r){switch(t.tag){case 3:Wc(t),ds();break;case 5:ec(t);break;case 1:rr(t.type)&&qa(t);break;case 4:ui(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;it(Va,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(it(yt,yt.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Oc(e,t,r):(it(yt,yt.current&1),e=Cn(e,t,r),e!==null?e.sibling:null);it(yt,yt.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Pc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),it(yt,yt.current),o)break;return null;case 22:case 23:return t.lanes=0,Rc(e,t,r)}return Cn(e,t,r)}var Bc,Ri,qc,$c;Bc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ri=function(){},qc=function(e,t,r,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Mo(Xr.current);var l=null;switch(r){case"input":a=Nr(e,a),o=Nr(e,o),l=[];break;case"select":a=X({},a,{value:void 0}),o=X({},o,{value:void 0}),l=[];break;case"textarea":a=ga(e,a),o=ga(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ka)}js(r,o);var h;r=null;for(E in a)if(!o.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var g=a[E];for(h in g)g.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(K.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in o){var C=o[E];if(g=a!=null?a[E]:void 0,o.hasOwnProperty(E)&&C!==g&&(C!=null||g!=null))if(E==="style")if(g){for(h in g)!g.hasOwnProperty(h)||C&&C.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in C)C.hasOwnProperty(h)&&g[h]!==C[h]&&(r||(r={}),r[h]=C[h])}else r||(l||(l=[]),l.push(E,r)),r=C;else E==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,g=g?g.__html:void 0,C!=null&&g!==C&&(l=l||[]).push(E,C)):E==="children"?typeof C!="string"&&typeof C!="number"||(l=l||[]).push(E,""+C):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(K.hasOwnProperty(E)?(C!=null&&E==="onScroll"&&ht("scroll",e),l||g===C||(l=[])):(l=l||[]).push(E,C))}r&&(l=l||[]).push("style",r);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},$c=function(e,t,r,o){r!==o&&(t.flags|=4)};function ca(e,t){if(!ft)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $t(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function wh(e,t,r){var o=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(t),null;case 1:return rr(t.type)&&Ba(),$t(t),null;case 3:return o=t.stateNode,ps(),pt(tr),pt(Bt),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wr!==null&&(Hi(Wr),Wr=null))),Ri(e,t),$t(t),null;case 5:hi(t);var a=Mo(sa.current);if(r=t.type,e!==null&&t.stateNode!=null)qc(e,t,r,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(v(166));return $t(t),null}if(e=Mo(Xr.current),Ga(t)){o=t.stateNode,r=t.type;var l=t.memoizedProps;switch(o[Jr]=t,o[ea]=l,e=(t.mode&1)!==0,r){case"dialog":ht("cancel",o),ht("close",o);break;case"iframe":case"object":case"embed":ht("load",o);break;case"video":case"audio":for(a=0;a<Js.length;a++)ht(Js[a],o);break;case"source":ht("error",o);break;case"img":case"image":case"link":ht("error",o),ht("load",o);break;case"details":ht("toggle",o);break;case"input":kt(o,l),ht("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},ht("invalid",o);break;case"textarea":Ot(o,l),ht("invalid",o)}js(r,l),a=null;for(var h in l)if(l.hasOwnProperty(h)){var g=l[h];h==="children"?typeof g=="string"?o.textContent!==g&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,g,e),a=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,g,e),a=["children",""+g]):K.hasOwnProperty(h)&&g!=null&&h==="onScroll"&&ht("scroll",o)}switch(r){case"input":we(o),Br(o,l,!0);break;case"textarea":we(o),wa(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Ka)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{h=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ho(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=h.createElement(r,{is:o.is}):(e=h.createElement(r),r==="select"&&(h=e,o.multiple?h.multiple=!0:o.size&&(h.size=o.size))):e=h.createElementNS(e,r),e[Jr]=t,e[ea]=o,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(h=fr(r,o),r){case"dialog":ht("cancel",e),ht("close",e),a=o;break;case"iframe":case"object":case"embed":ht("load",e),a=o;break;case"video":case"audio":for(a=0;a<Js.length;a++)ht(Js[a],e);a=o;break;case"source":ht("error",e),a=o;break;case"img":case"image":case"link":ht("error",e),ht("load",e),a=o;break;case"details":ht("toggle",e),a=o;break;case"input":kt(e,o),a=Nr(e,o),ht("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=X({},o,{value:void 0}),ht("invalid",e);break;case"textarea":Ot(e,o),a=ga(e,o),ht("invalid",e);break;default:a=o}js(r,a),g=a;for(l in g)if(g.hasOwnProperty(l)){var C=g[l];l==="style"?nn(e,C):l==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&ba(e,C)):l==="children"?typeof C=="string"?(r!=="textarea"||C!=="")&&qr(e,C):typeof C=="number"&&qr(e,""+C):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(K.hasOwnProperty(l)?C!=null&&l==="onScroll"&&ht("scroll",e):C!=null&&te(e,l,C,h))}switch(r){case"input":we(e),Br(e,o,!1);break;case"textarea":we(e),wa(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Be(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Xt(e,!!o.multiple,l,!1):o.defaultValue!=null&&Xt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ka)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $t(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(v(166));if(r=Mo(sa.current),Mo(Xr.current),Ga(t)){if(o=t.stateNode,r=t.memoizedProps,o[Jr]=t,(l=o.nodeValue!==r)&&(e=cr,e!==null))switch(e.tag){case 3:Oa(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(o.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Jr]=t,t.stateNode=o}return $t(t),null;case 13:if(pt(yt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ft&&ur!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gd(),ds(),t.flags|=98560,l=!1;else if(l=Ga(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Jr]=t}else ds(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$t(t),l=!1}else Wr!==null&&(Hi(Wr),Wr=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(yt.current&1)!==0?St===0&&(St=3):Ui())),t.updateQueue!==null&&(t.flags|=4),$t(t),null);case 4:return ps(),Ri(e,t),e===null&&Xs(t.stateNode.containerInfo),$t(t),null;case 10:return li(t.type._context),$t(t),null;case 17:return rr(t.type)&&Ba(),$t(t),null;case 19:if(pt(yt),l=t.memoizedState,l===null)return $t(t),null;if(o=(t.flags&128)!==0,h=l.rendering,h===null)if(o)ca(l,!1);else{if(St!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Xa(e),h!==null){for(t.flags|=128,ca(l,!1),o=h.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)l=r,e=o,l.flags&=14680066,h=l.alternate,h===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=h.childLanes,l.lanes=h.lanes,l.child=h.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=h.memoizedProps,l.memoizedState=h.memoizedState,l.updateQueue=h.updateQueue,l.type=h.type,e=h.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return it(yt,yt.current&1|2),t.child}e=e.sibling}l.tail!==null&&lt()>ys&&(t.flags|=128,o=!0,ca(l,!1),t.lanes=4194304)}else{if(!o)if(e=Xa(h),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ca(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!ft)return $t(t),null}else 2*lt()-l.renderingStartTime>ys&&r!==1073741824&&(t.flags|=128,o=!0,ca(l,!1),t.lanes=4194304);l.isBackwards?(h.sibling=t.child,t.child=h):(r=l.last,r!==null?r.sibling=h:t.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=lt(),t.sibling=null,r=yt.current,it(yt,o?r&1|2:r&1),t):($t(t),null);case 22:case 23:return Gi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(hr&1073741824)!==0&&($t(t),t.subtreeFlags&6&&(t.flags|=8192)):$t(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function bh(e,t){switch(ti(t),t.tag){case 1:return rr(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(),pt(tr),pt(Bt),mi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(pt(yt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pt(yt),null;case 4:return ps(),null;case 10:return li(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var ll=!1,Ht=!1,_h=typeof WeakSet=="function"?WeakSet:Set,ae=null;function fs(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){wt(e,t,o)}else r.current=null}function Li(e,t,r){try{r()}catch(o){wt(e,t,o)}}var Hc=!1;function vh(e,t){if(Gl=_o,e=vd(),Ol(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var h=0,g=-1,C=-1,E=0,$=0,G=e,B=null;t:for(;;){for(var oe;G!==r||a!==0&&G.nodeType!==3||(g=h+a),G!==l||o!==0&&G.nodeType!==3||(C=h+o),G.nodeType===3&&(h+=G.nodeValue.length),(oe=G.firstChild)!==null;)B=G,G=oe;for(;;){if(G===e)break t;if(B===r&&++E===a&&(g=h),B===l&&++$===o&&(C=h),(oe=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=oe}r=g===-1||C===-1?null:{start:g,end:C}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ul={focusedElem:e,selectionRange:r},_o=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var de=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var me=de.memoizedProps,bt=de.memoizedState,j=t.stateNode,A=j.getSnapshotBeforeUpdate(t.elementType===t.type?me:Fr(t.type,me),bt);j.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(J){wt(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return de=Hc,Hc=!1,de}function ua(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Li(t,r,l)}a=a.next}while(a!==o)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Ii(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zc(e){var t=e.alternate;t!==null&&(e.alternate=null,zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jr],delete t[ea],delete t[Jl],delete t[oh],delete t[sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gc(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ka));else if(o!==4&&(e=e.child,e!==null))for(Wi(e,t,r),e=e.sibling;e!==null;)Wi(e,t,r),e=e.sibling}function Fi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Fi(e,t,r),e=e.sibling;e!==null;)Fi(e,t,r),e=e.sibling}var Lt=null,Or=!1;function Zn(e,t,r){for(r=r.child;r!==null;)Vc(e,t,r),r=r.sibling}function Vc(e,t,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(jr,r)}catch{}switch(r.tag){case 5:Ht||fs(r,t);case 6:var o=Lt,a=Or;Lt=null,Zn(e,t,r),Lt=o,Or=a,Lt!==null&&(Or?(e=Lt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Lt.removeChild(r.stateNode));break;case 18:Lt!==null&&(Or?(e=Lt,r=r.stateNode,e.nodeType===8?Ql(e.parentNode,r):e.nodeType===1&&Ql(e,r),dr(e)):Ql(Lt,r.stateNode));break;case 4:o=Lt,a=Or,Lt=r.stateNode.containerInfo,Or=!0,Zn(e,t,r),Lt=o,Or=a;break;case 0:case 11:case 14:case 15:if(!Ht&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,h=l.destroy;l=l.tag,h!==void 0&&((l&2)!==0||(l&4)!==0)&&Li(r,t,h),a=a.next}while(a!==o)}Zn(e,t,r);break;case 1:if(!Ht&&(fs(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(g){wt(r,t,g)}Zn(e,t,r);break;case 21:Zn(e,t,r);break;case 22:r.mode&1?(Ht=(o=Ht)||r.memoizedState!==null,Zn(e,t,r),Ht=o):Zn(e,t,r);break;default:Zn(e,t,r)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _h),t.forEach(function(o){var a=Eh.bind(null,e,o);r.has(o)||(r.add(o),o.then(a,a))})}}function Kr(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var l=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 5:Lt=g.stateNode,Or=!1;break e;case 3:Lt=g.stateNode.containerInfo,Or=!0;break e;case 4:Lt=g.stateNode.containerInfo,Or=!0;break e}g=g.return}if(Lt===null)throw Error(v(160));Vc(l,h,a),Lt=null,Or=!1;var C=a.alternate;C!==null&&(C.return=null),a.return=null}catch(E){wt(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kr(t,e),en(e),o&4){try{ua(3,e,e.return),il(3,e)}catch(me){wt(e,e.return,me)}try{ua(5,e,e.return)}catch(me){wt(e,e.return,me)}}break;case 1:Kr(t,e),en(e),o&512&&r!==null&&fs(r,r.return);break;case 5:if(Kr(t,e),en(e),o&512&&r!==null&&fs(r,r.return),e.flags&32){var a=e.stateNode;try{qr(a,"")}catch(me){wt(e,e.return,me)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,h=r!==null?r.memoizedProps:l,g=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{g==="input"&&l.type==="radio"&&l.name!=null&&Tn(a,l),fr(g,h);var E=fr(g,l);for(h=0;h<C.length;h+=2){var $=C[h],G=C[h+1];$==="style"?nn(a,G):$==="dangerouslySetInnerHTML"?ba(a,G):$==="children"?qr(a,G):te(a,$,G,E)}switch(g){case"input":ct(a,l);break;case"textarea":rn(a,l);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var oe=l.value;oe!=null?Xt(a,!!l.multiple,oe,!1):B!==!!l.multiple&&(l.defaultValue!=null?Xt(a,!!l.multiple,l.defaultValue,!0):Xt(a,!!l.multiple,l.multiple?[]:"",!1))}a[ea]=l}catch(me){wt(e,e.return,me)}}break;case 6:if(Kr(t,e),en(e),o&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(me){wt(e,e.return,me)}}break;case 3:if(Kr(t,e),en(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(me){wt(e,e.return,me)}break;case 4:Kr(t,e),en(e);break;case 13:Kr(t,e),en(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Pi=lt())),o&4&&Yc(e);break;case 22:if($=r!==null&&r.memoizedState!==null,e.mode&1?(Ht=(E=Ht)||$,Kr(t,e),Ht=E):Kr(t,e),en(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!$&&(e.mode&1)!==0)for(ae=e,$=e.child;$!==null;){for(G=ae=$;ae!==null;){switch(B=ae,oe=B.child,B.tag){case 0:case 11:case 14:case 15:ua(4,B,B.return);break;case 1:fs(B,B.return);var de=B.stateNode;if(typeof de.componentWillUnmount=="function"){o=B,r=B.return;try{t=o,de.props=t.memoizedProps,de.state=t.memoizedState,de.componentWillUnmount()}catch(me){wt(o,r,me)}}break;case 5:fs(B,B.return);break;case 22:if(B.memoizedState!==null){Zc(G);continue}}oe!==null?(oe.return=B,ae=oe):Zc(G)}$=$.sibling}e:for($=null,G=e;;){if(G.tag===5){if($===null){$=G;try{a=G.stateNode,E?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(g=G.stateNode,C=G.memoizedProps.style,h=C!=null&&C.hasOwnProperty("display")?C.display:null,g.style.display=lr("display",h))}catch(me){wt(e,e.return,me)}}}else if(G.tag===6){if($===null)try{G.stateNode.nodeValue=E?"":G.memoizedProps}catch(me){wt(e,e.return,me)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;$===G&&($=null),G=G.return}$===G&&($=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Kr(t,e),en(e),o&4&&Yc(e);break;case 21:break;default:Kr(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gc(r)){var o=r;break e}r=r.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(qr(a,""),o.flags&=-33);var l=Uc(e);Fi(e,l,a);break;case 3:case 4:var h=o.stateNode.containerInfo,g=Uc(e);Wi(e,g,h);break;default:throw Error(v(161))}}catch(C){wt(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e,t,r){ae=e,Jc(e)}function Jc(e,t,r){for(var o=(e.mode&1)!==0;ae!==null;){var a=ae,l=a.child;if(a.tag===22&&o){var h=a.memoizedState!==null||ll;if(!h){var g=a.alternate,C=g!==null&&g.memoizedState!==null||Ht;g=ll;var E=Ht;if(ll=h,(Ht=C)&&!E)for(ae=a;ae!==null;)h=ae,C=h.child,h.tag===22&&h.memoizedState!==null?eu(a):C!==null?(C.return=h,ae=C):eu(a);for(;l!==null;)ae=l,Jc(l),l=l.sibling;ae=a,ll=g,Ht=E}Xc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,ae=l):Xc(e)}}function Xc(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ht||il(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ht)if(r===null)o.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Fr(t.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Zd(t,l,o);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zd(t,h,r)}break;case 5:var g=t.stateNode;if(r===null&&t.flags&4){r=g;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&r.focus();break;case"img":C.src&&(r.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var $=E.memoizedState;if($!==null){var G=$.dehydrated;G!==null&&dr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}Ht||t.flags&512&&Ii(t)}catch(B){wt(t,t.return,B)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function Zc(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function eu(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{il(4,t)}catch(C){wt(t,r,C)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(C){wt(t,a,C)}}var l=t.return;try{Ii(t)}catch(C){wt(t,l,C)}break;case 5:var h=t.return;try{Ii(t)}catch(C){wt(t,h,C)}}}catch(C){wt(t,t.return,C)}if(t===e){ae=null;break}var g=t.sibling;if(g!==null){g.return=t.return,ae=g;break}ae=t.return}}var Ch=Math.ceil,dl=fe.ReactCurrentDispatcher,Oi=fe.ReactCurrentOwner,kr=fe.ReactCurrentBatchConfig,Je=0,Tt=null,vt=null,It=0,hr=0,xs=Vn(0),St=0,ha=null,Lo=0,cl=0,Ki=0,pa=null,or=null,Pi=0,ys=1/0,Nn=null,ul=!1,Bi=null,eo=null,hl=!1,to=null,pl=0,ma=0,qi=null,ml=-1,fl=0;function Yt(){return(Je&6)!==0?lt():ml!==-1?ml:ml=lt()}function ro(e){return(e.mode&1)===0?1:(Je&2)!==0&&It!==0?It&-It:lh.transition!==null?(fl===0&&(fl=Er()),fl):(e=Ve,e!==0||(e=window.event,e=e===void 0?16:$s(e.type)),e)}function Pr(e,t,r,o){if(50<ma)throw ma=0,qi=null,Error(v(185));Vo(e,r,o),((Je&2)===0||e!==Tt)&&(e===Tt&&((Je&2)===0&&(cl|=r),St===4&&no(e,It)),sr(e,o),r===1&&Je===0&&(t.mode&1)===0&&(ys=lt()+500,$a&&Qn()))}function sr(e,t){var r=e.callbackNode;zr(e,t);var o=Uo(e,e===Tt?It:0);if(o===0)r!==null&&Ws(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Ws(r),t===1)e.tag===0?ah(ru.bind(null,e)):Bd(ru.bind(null,e)),rh(function(){(Je&6)===0&&Qn()}),r=null;else{switch(Zt(o)){case 1:r=Dr;break;case 4:r=In;break;case 16:r=Hr;break;case 536870912:r=Ks;break;default:r=Hr}r=cu(r,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function tu(e,t){if(ml=-1,fl=0,(Je&6)!==0)throw Error(v(327));var r=e.callbackNode;if(gs()&&e.callbackNode!==r)return null;var o=Uo(e,e===Tt?It:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=xl(e,o);else{t=o;var a=Je;Je|=2;var l=ou();(Tt!==e||It!==t)&&(Nn=null,ys=lt()+500,Wo(e,t));do try{Ah();break}catch(g){nu(e,g)}while(!0);ai(),dl.current=l,Je=a,vt!==null?t=0:(Tt=null,It=0,t=St)}if(t!==0){if(t===2&&(a=sn(e),a!==0&&(o=a,t=$i(e,a))),t===1)throw r=ha,Wo(e,0),no(e,o),sr(e,lt()),r;if(t===6)no(e,o);else{if(a=e.current.alternate,(o&30)===0&&!Nh(a)&&(t=xl(e,o),t===2&&(l=sn(e),l!==0&&(o=l,t=$i(e,l))),t===1))throw r=ha,Wo(e,0),no(e,o),sr(e,lt()),r;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(v(345));case 2:Fo(e,or,Nn);break;case 3:if(no(e,o),(o&130023424)===o&&(t=Pi+500-lt(),10<t)){if(Uo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Yl(Fo.bind(null,e,or,Nn),t);break}Fo(e,or,Nn);break;case 4:if(no(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var h=31-Pt(o);l=1<<h,h=t[h],h>a&&(a=h),o&=~l}if(o=a,o=lt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ch(o/1960))-o,10<o){e.timeoutHandle=Yl(Fo.bind(null,e,or,Nn),o);break}Fo(e,or,Nn);break;case 5:Fo(e,or,Nn);break;default:throw Error(v(329))}}}return sr(e,lt()),e.callbackNode===r?tu.bind(null,e):null}function $i(e,t){var r=pa;return e.current.memoizedState.isDehydrated&&(Wo(e,t).flags|=256),e=xl(e,t),e!==2&&(t=or,or=r,t!==null&&Hi(t)),e}function Hi(e){or===null?or=e:or.push.apply(or,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],l=a.getSnapshot;a=a.value;try{if(!nt(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function no(e,t){for(t&=~Ki,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Pt(t),o=1<<r;e[r]=-1,t&=~o}}function ru(e){if((Je&6)!==0)throw Error(v(327));gs();var t=Uo(e,0);if((t&1)===0)return sr(e,lt()),null;var r=xl(e,t);if(e.tag!==0&&r===2){var o=sn(e);o!==0&&(t=o,r=$i(e,o))}if(r===1)throw r=ha,Wo(e,0),no(e,t),sr(e,lt()),r;if(r===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fo(e,or,Nn),sr(e,lt()),null}function zi(e,t){var r=Je;Je|=1;try{return e(t)}finally{Je=r,Je===0&&(ys=lt()+500,$a&&Qn())}}function Io(e){to!==null&&to.tag===0&&(Je&6)===0&&gs();var t=Je;Je|=1;var r=kr.transition,o=Ve;try{if(kr.transition=null,Ve=1,e)return e()}finally{Ve=o,kr.transition=r,Je=t,(Je&6)===0&&Qn()}}function Gi(){hr=xs.current,pt(xs)}function Wo(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,th(r)),vt!==null)for(r=vt.return;r!==null;){var o=r;switch(ti(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ba();break;case 3:ps(),pt(tr),pt(Bt),mi();break;case 5:hi(o);break;case 4:ps();break;case 13:pt(yt);break;case 19:pt(yt);break;case 10:li(o.type._context);break;case 22:case 23:Gi()}r=r.return}if(Tt=e,vt=e=oo(e.current,null),It=hr=t,St=0,ha=null,Ki=cl=Lo=0,or=pa=null,Eo!==null){for(t=0;t<Eo.length;t++)if(r=Eo[t],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,l=r.pending;if(l!==null){var h=l.next;l.next=a,o.next=h}r.pending=o}Eo=null}return e}function nu(e,t){do{var r=vt;try{if(ai(),Za.current=nl,el){for(var o=gt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}el=!1}if(Ro=0,jt=Nt=gt=null,aa=!1,la=0,Oi.current=null,r===null||r.return===null){St=1,ha=t,vt=null;break}e:{var l=e,h=r.return,g=r,C=t;if(t=It,g.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var E=C,$=g,G=$.tag;if(($.mode&1)===0&&(G===0||G===11||G===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var oe=Dc(h);if(oe!==null){oe.flags&=-257,jc(oe,h,g,l,t),oe.mode&1&&Ac(l,E,t),t=oe,C=E;var de=t.updateQueue;if(de===null){var me=new Set;me.add(C),t.updateQueue=me}else de.add(C);break e}else{if((t&1)===0){Ac(l,E,t),Ui();break e}C=Error(v(426))}}else if(ft&&g.mode&1){var bt=Dc(h);if(bt!==null){(bt.flags&65536)===0&&(bt.flags|=256),jc(bt,h,g,l,t),oi(ms(C,g));break e}}l=C=ms(C,g),St!==4&&(St=2),pa===null?pa=[l]:pa.push(l),l=h;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var j=Nc(l,C,t);Xd(l,j);break e;case 1:g=C;var A=l.type,T=l.stateNode;if((l.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(eo===null||!eo.has(T)))){l.flags|=65536,t&=-t,l.lanes|=t;var J=Sc(l,g,t);Xd(l,J);break e}}l=l.return}while(l!==null)}au(r)}catch(xe){t=xe,vt===r&&r!==null&&(vt=r=r.return);continue}break}while(!0)}function ou(){var e=dl.current;return dl.current=nl,e===null?nl:e}function Ui(){(St===0||St===3||St===2)&&(St=4),Tt===null||(Lo&268435455)===0&&(cl&268435455)===0||no(Tt,It)}function xl(e,t){var r=Je;Je|=2;var o=ou();(Tt!==e||It!==t)&&(Nn=null,Wo(e,t));do try{Sh();break}catch(a){nu(e,a)}while(!0);if(ai(),Je=r,dl.current=o,vt!==null)throw Error(v(261));return Tt=null,It=0,St}function Sh(){for(;vt!==null;)su(vt)}function Ah(){for(;vt!==null&&!Go();)su(vt)}function su(e){var t=du(e.alternate,e,hr);e.memoizedProps=e.pendingProps,t===null?au(e):vt=t,Oi.current=null}function au(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=wh(r,t,hr),r!==null){vt=r;return}}else{if(r=bh(r,t),r!==null){r.flags&=32767,vt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{St=6,vt=null;return}}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);St===0&&(St=5)}function Fo(e,t,r){var o=Ve,a=kr.transition;try{kr.transition=null,Ve=1,Dh(e,t,r,o)}finally{kr.transition=a,Ve=o}return null}function Dh(e,t,r,o){do gs();while(to!==null);if((Je&6)!==0)throw Error(v(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(gd(e,l),e===Tt&&(vt=Tt=null,It=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||hl||(hl=!0,cu(Hr,function(){return gs(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=kr.transition,kr.transition=null;var h=Ve;Ve=1;var g=Je;Je|=4,Oi.current=null,vh(e,r),Qc(r,e),Vu(Ul),_o=!!Gl,Ul=Gl=null,e.current=r,kh(r),Ln(),Je=g,Ve=h,kr.transition=l}else e.current=r;if(hl&&(hl=!1,to=e,pl=a),l=e.pendingLanes,l===0&&(eo=null),Kt(r.stateNode),sr(e,lt()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=Bi,Bi=null,e;return(pl&1)!==0&&e.tag!==0&&gs(),l=e.pendingLanes,(l&1)!==0?e===qi?ma++:(ma=0,qi=e):ma=0,Qn(),null}function gs(){if(to!==null){var e=Zt(pl),t=kr.transition,r=Ve;try{if(kr.transition=null,Ve=16>e?16:e,to===null)var o=!1;else{if(e=to,to=null,pl=0,(Je&6)!==0)throw Error(v(331));var a=Je;for(Je|=4,ae=e.current;ae!==null;){var l=ae,h=l.child;if((ae.flags&16)!==0){var g=l.deletions;if(g!==null){for(var C=0;C<g.length;C++){var E=g[C];for(ae=E;ae!==null;){var $=ae;switch($.tag){case 0:case 11:case 15:ua(8,$,l)}var G=$.child;if(G!==null)G.return=$,ae=G;else for(;ae!==null;){$=ae;var B=$.sibling,oe=$.return;if(zc($),$===E){ae=null;break}if(B!==null){B.return=oe,ae=B;break}ae=oe}}}var de=l.alternate;if(de!==null){var me=de.child;if(me!==null){de.child=null;do{var bt=me.sibling;me.sibling=null,me=bt}while(me!==null)}}ae=l}}if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,ae=h;else e:for(;ae!==null;){if(l=ae,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ua(9,l,l.return)}var j=l.sibling;if(j!==null){j.return=l.return,ae=j;break e}ae=l.return}}var A=e.current;for(ae=A;ae!==null;){h=ae;var T=h.child;if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,ae=T;else e:for(h=A;ae!==null;){if(g=ae,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:il(9,g)}}catch(xe){wt(g,g.return,xe)}if(g===h){ae=null;break e}var J=g.sibling;if(J!==null){J.return=g.return,ae=J;break e}ae=g.return}}if(Je=a,Qn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(jr,e)}catch{}o=!0}return o}finally{Ve=r,kr.transition=t}}return!1}function lu(e,t,r){t=ms(r,t),t=Nc(e,t,1),e=Xn(e,t,1),t=Yt(),e!==null&&(Vo(e,1,t),sr(e,t))}function wt(e,t,r){if(e.tag===3)lu(e,e,r);else for(;t!==null;){if(t.tag===3){lu(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(eo===null||!eo.has(o))){e=ms(r,e),e=Sc(t,e,1),t=Xn(t,e,1),e=Yt(),t!==null&&(Vo(t,1,e),sr(t,e));break}}t=t.return}}function jh(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Yt(),e.pingedLanes|=e.suspendedLanes&r,Tt===e&&(It&r)===r&&(St===4||St===3&&(It&130023424)===It&&500>lt()-Pi?Wo(e,0):Ki|=r),sr(e,t)}function iu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var r=Yt();e=vn(e,t),e!==null&&(Vo(e,t,r),sr(e,r))}function Th(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),iu(e,r)}function Eh(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(t),iu(e,r)}var du;du=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tr.current)nr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return nr=!1,gh(e,t,r);nr=(e.flags&131072)!==0}else nr=!1,ft&&(t.flags&1048576)!==0&&qd(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;al(e,t),e=t.pendingProps;var a=as(t,Bt.current);hs(t,r),a=yi(null,t,o,e,a,r);var l=gi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rr(o)?(l=!0,qa(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ci(t),a.updater=ol,t.stateNode=a,a._reactInternals=t,Ci(t,o,e,r),t=Di(null,t,o,!0,l,r)):(t.tag=0,ft&&l&&ei(t),Vt(null,t,a,r),t=t.child),t;case 16:o=t.elementType;e:{switch(al(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Rh(o),e=Fr(o,e),a){case 0:t=Ai(null,t,o,e,r);break e;case 1:t=Ic(null,t,o,e,r);break e;case 11:t=Tc(null,t,o,e,r);break e;case 14:t=Ec(null,t,o,Fr(o.type,e),r);break e}throw Error(v(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),Ai(e,t,o,a,r);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),Ic(e,t,o,a,r);case 3:e:{if(Wc(t),e===null)throw Error(v(387));o=t.pendingProps,l=t.memoizedState,a=l.element,Jd(e,t),Ja(t,o,null,r);var h=t.memoizedState;if(o=h.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=ms(Error(v(423)),t),t=Fc(e,t,o,r,a);break e}else if(o!==a){a=ms(Error(v(424)),t),t=Fc(e,t,o,r,a);break e}else for(ur=Un(t.stateNode.containerInfo.firstChild),cr=t,ft=!0,Wr=null,r=Yd(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ds(),o===a){t=Cn(e,t,r);break e}Vt(e,t,o,r)}t=t.child}return t;case 5:return ec(t),e===null&&ni(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,h=a.children,Vl(o,a)?h=null:l!==null&&Vl(o,l)&&(t.flags|=32),Lc(e,t),Vt(e,t,h,r),t.child;case 6:return e===null&&ni(t),null;case 13:return Oc(e,t,r);case 4:return ui(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=cs(t,null,o,r):Vt(e,t,o,r),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),Tc(e,t,o,a,r);case 7:return Vt(e,t,t.pendingProps,r),t.child;case 8:return Vt(e,t,t.pendingProps.children,r),t.child;case 12:return Vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,h=a.value,it(Va,o._currentValue),o._currentValue=h,l!==null)if(nt(l.value,h)){if(l.children===a.children&&!tr.current){t=Cn(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var g=l.dependencies;if(g!==null){h=l.child;for(var C=g.firstContext;C!==null;){if(C.context===o){if(l.tag===1){C=kn(-1,r&-r),C.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var $=E.pending;$===null?C.next=C:(C.next=$.next,$.next=C),E.pending=C}}l.lanes|=r,C=l.alternate,C!==null&&(C.lanes|=r),ii(l.return,r,t),g.lanes|=r;break}C=C.next}}else if(l.tag===10)h=l.type===t.type?null:l.child;else if(l.tag===18){if(h=l.return,h===null)throw Error(v(341));h.lanes|=r,g=h.alternate,g!==null&&(g.lanes|=r),ii(h,r,t),h=l.sibling}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===t){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}Vt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,hs(t,r),a=_r(a),o=o(a),t.flags|=1,Vt(e,t,o,r),t.child;case 14:return o=t.type,a=Fr(o,t.pendingProps),a=Fr(o.type,a),Ec(e,t,o,a,r);case 15:return Mc(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),al(e,t),t.tag=1,rr(o)?(e=!0,qa(t)):e=!1,hs(t,r),kc(t,o,a),Ci(t,o,a,r),Di(null,t,o,!0,e,r);case 19:return Pc(e,t,r);case 22:return Rc(e,t,r)}throw Error(v(156,t.tag))};function cu(e,t){return Is(e,t)}function Mh(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cr(e,t,r,o){return new Mh(e,t,r,o)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rh(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===re)return 14}return 2}function oo(e,t){var r=e.alternate;return r===null?(r=Cr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function yl(e,t,r,o,a,l){var h=2;if(o=e,typeof e=="function")Vi(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case Ze:return Oo(r.children,a,l,t);case Ue:h=8,a|=8;break;case Ee:return e=Cr(12,r,t,a|2),e.elementType=Ee,e.lanes=l,e;case Oe:return e=Cr(13,r,t,a),e.elementType=Oe,e.lanes=l,e;case Qe:return e=Cr(19,r,t,a),e.elementType=Qe,e.lanes=l,e;case ie:return gl(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:h=10;break e;case Ye:h=9;break e;case Ne:h=11;break e;case re:h=14;break e;case Te:h=16,o=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Cr(h,r,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function Oo(e,t,r,o){return e=Cr(7,e,o,t),e.lanes=r,e}function gl(e,t,r,o){return e=Cr(22,e,o,t),e.elementType=ie,e.lanes=r,e.stateNode={isHidden:!1},e}function Yi(e,t,r){return e=Cr(6,e,null,t),e.lanes=r,e}function Qi(e,t,r){return t=Cr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lh(e,t,r,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=an(0),this.expirationTimes=an(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ji(e,t,r,o,a,l,h,g,C){return e=new Lh(e,t,r,g,C),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Cr(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ci(l),e}function Ih(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function uu(e){if(!e)return Yn;e=e._reactInternals;e:{if(Ar(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var r=e.type;if(rr(r))return Kd(e,r,t)}return t}function hu(e,t,r,o,a,l,h,g,C){return e=Ji(r,o,!0,e,a,l,h,g,C),e.context=uu(null),r=e.current,o=Yt(),a=ro(r),l=kn(o,a),l.callback=t??null,Xn(r,l,a),e.current.lanes=a,Vo(e,a,o),sr(e,o),e}function wl(e,t,r,o){var a=t.current,l=Yt(),h=ro(a);return r=uu(r),t.context===null?t.context=r:t.pendingContext=r,t=kn(l,h),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Xn(a,t,h),e!==null&&(Pr(e,a,h,l),Qa(e,a,h)),h}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xi(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function Wh(){return null}var mu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zi(e){this._internalRoot=e}_l.prototype.render=Zi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));wl(e,t,null,null)},_l.prototype.unmount=Zi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Io(function(){wl(null,e,null,null)}),t[gn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=cn();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&Mt(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function Fh(e,t,r,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var E=bl(h);l.call(E)}}var h=hu(t,o,e,0,null,!1,!1,"",fu);return e._reactRootContainer=h,e[gn]=h.current,Xs(e.nodeType===8?e.parentNode:e),Io(),h}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var g=o;o=function(){var E=bl(C);g.call(E)}}var C=Ji(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=C,e[gn]=C.current,Xs(e.nodeType===8?e.parentNode:e),Io(function(){wl(t,C,r,o)}),C}function kl(e,t,r,o,a){var l=r._reactRootContainer;if(l){var h=l;if(typeof a=="function"){var g=a;a=function(){var C=bl(h);g.call(C)}}wl(t,h,e,a)}else h=Fh(r,t,e,a,o);return bl(h)}ln=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=go(t.pendingLanes);r!==0&&(Ps(t,r|1),sr(t,lt()),(Je&6)===0&&(ys=lt()+500,Qn()))}break;case 13:Io(function(){var o=vn(e,1);if(o!==null){var a=Yt();Pr(o,e,1,a)}}),Xi(e,1)}},Bs=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var r=Yt();Pr(t,e,134217728,r)}Xi(e,134217728)}},dn=function(e){if(e.tag===13){var t=ro(e),r=vn(e,t);if(r!==null){var o=Yt();Pr(r,e,t,o)}Xi(e,t)}},cn=function(){return Ve},wo=function(e,t){var r=Ve;try{return Ve=e,t()}finally{Ve=r}},Bo=function(e,t,r){switch(t){case"input":if(ct(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var a=Pa(o);if(!a)throw Error(v(90));At(o),ct(o,a)}}}break;case"textarea":rn(e,r);break;case"select":t=r.value,t!=null&&Xt(e,!!r.multiple,t,!1)}},Ho=zi,va=Io;var Oh={usingClientEntryPoint:!1,Events:[ta,os,Pa,Ts,$o,zi]},fa={findFiberByHostInstance:Ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kh={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zo(e),e===null?null:e.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||Wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{jr=Cl.inject(Kh),qe=Cl}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh,ar.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(v(200));return Ih(e,t,null,r)},ar.createRoot=function(e,t){if(!ed(e))throw Error(v(299));var r=!1,o="",a=mu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ji(e,1,!1,null,null,r,!1,o,a),e[gn]=t.current,Xs(e.nodeType===8?e.parentNode:e),new Zi(t)},ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=zo(t),e=e===null?null:e.stateNode,e},ar.flushSync=function(e){return Io(e)},ar.hydrate=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!0,r)},ar.hydrateRoot=function(e,t,r){if(!ed(e))throw Error(v(405));var o=r!=null&&r.hydratedSources||null,a=!1,l="",h=mu;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=hu(t,null,e,1,r??null,a,!1,l,h),e[gn]=t.current,Xs(e),o)for(e=0;e<o.length;e++)r=o[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new _l(t)},ar.render=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!1,r)},ar.unmountComponentAtNode=function(e){if(!vl(e))throw Error(v(40));return e._reactRootContainer?(Io(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1},ar.unstable_batchedUpdates=zi,ar.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!vl(r))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return kl(e,t,r,!1,o)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var ku;function Uh(){if(ku)return nd.exports;ku=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(_){console.error(_)}}return b(),nd.exports=Gh(),nd.exports}var Cu;function Vh(){if(Cu)return Nl;Cu=1;var b=Uh();return Nl.createRoot=b.createRoot,Nl.hydrateRoot=b.hydrateRoot,Nl}var Yh=Vh();const Qh=Ou(Yh);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ku=(...b)=>b.filter((_,v,U)=>!!_&&_.trim()!==""&&U.indexOf(_)===v).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=I.forwardRef(({color:b="currentColor",size:_=24,strokeWidth:v=2,absoluteStrokeWidth:U,className:K="",children:q,iconNode:Y,...le},ee)=>I.createElement("svg",{ref:ee,...Xh,width:_,height:_,stroke:b,strokeWidth:U?Number(v)*24/Number(_):v,className:Ku("lucide",K),...le},[...Y.map(([M,H])=>I.createElement(M,H)),...Array.isArray(q)?q:[q]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(b,_)=>{const v=I.forwardRef(({className:U,...K},q)=>I.createElement(Zh,{ref:q,iconNode:_,className:Ku(`lucide-${Jh(b)}`,U),...K}));return v.displayName=`${b}`,v};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=at("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=at("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=at("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=at("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=at("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=at("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=at("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=at("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=at("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=at("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=at("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=at("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=at("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=at("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=at("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=at("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=at("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=at("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=at("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=at("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=at("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=at("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=at("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=at("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=at("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=at("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=at("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=at("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ss="weekly_chores_canvas_sheet_data_v5",jl=[{index_:0,name:"Printable Weekly Schedule",data:[{index_:0,row:["Chore Schedule",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["FOR THE WEEK OF:","MON",null,"TUE",null,"WED",null,"THU",null,"FRI",null,"SAT",null,"SUN",null]},{index_:2,row:["2026-10-19","19",null,"20",null,"21",null,"22",null,"23",null,"24",null,"25",null]},{index_:3,row:["TASK",`WHO
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
- Put away food; Load dishwasher; Wipe surfaces`,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1]},{index_:10,row:["Weekly Tasks","Description",null,null,null,null,null,null,null,"Initials / Assigned",null,null,null,null,null]},{index_:11,row:["Personal Laundry","Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:12,row:["Tidy Bedrooms / Personal Spaces","Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:13,row:["Clean Up Basement","Pick Up Mess; Dust Surfaces; Vacuum Floors & Litter Box Area",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:14,row:["Herd Feeding Station Deep Clean","Wash & Sanitize Bowls; Vacuum Feeding Mat",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:15,row:["Curbside Recycling","Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:18,row:["Weekly Sign-Off","Parent Initials:",null,null,null,null,null,null,null,null,null,null,null,"_________",!1]}]},{index_:1,name:"Household Hub (Background Data)",data:[{index_:0,row:["HOUSEHOLD HUB & MASTER DIRECTORY",null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",null,null,null,null,null,null,null,null,null,null,null]},{index_:3,row:["HOUSEHOLD MEMBERS",null,null,null,null,null,"MASTER CHORE REGISTRY & ALLOCATION RULES",null,null,null,null,null]},{index_:4,row:["Name","Role","Occupancy","Special Rotation Groups","Active Status",null,"Chore","Member / Group","Frequency","Suggested Days","Details / Notes",null]},{index_:5,row:["Thom","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Empty the Litter Box (Morning & Evening)","Non-Casual","Daily","N/A","Scoop waste, refresh litter, dispose of waste.",null]},{index_:6,row:["Meghan","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Feed the Herd (Breakfast & Supper)","Non-Casual","Daily","N/A","Feed all animals the appropriate food and portions.",null]},{index_:7,row:["Sydney","Minion","Full-Time","Kids, Non-Casual, All",!0,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun","Put away clean dishes, Load any dirty dishes","Kitchen"]},{index_:8,row:["Cadence","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Make Supper: Plan Ahead!","Non-Casual","Daily","Mon – Sun","Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",null]},{index_:9,row:["Mason","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Dinner Dishes & Kitchen Cleanup","Non-Casual","Daily","N/A","Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",null]},{index_:10,row:["Koda","Minion","Casual","All",!0,null,"Tidy Bedrooms / Personal Spaces","Kids","Once a Week","Saturday","Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",null]},{index_:11,row:["Keyanna","Minion","Casual","All",!0,null,"Laundry","All","Once a Week","Saturday","Wash, dry, fold & put away (each kid responsible for their own items)",null]},{index_:12,row:[null,null,null,null,null,null,"Clean Basement (Pick Up, Dust, Vacuum)","Non-Casual","Once a Week","Sunday","Pick up mess & laundry, dust surfaces, vacuum floors",null]},{index_:13,row:["OCCUPANCY CATEGORIES",null,null,null,null,null,"Herd Feeding Station Deep Clean","All","Once a Week","Sunday","Wash & sanitize pet bowls, vacuum feeding mat",null]},{index_:14,row:["Type","Description","Rules",null,"Active Status",null,"Curbside Recycling","Non-Casual","Bi-Weekly","Thursday Evening","Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:15,row:["Full-Time","Constant Residency","Included in all weekly/monthly schedulings",null,!0,null,"Curbside Waste","Non-Casual","Bi-Weekly","Thursday Evening","Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)","Household"]},{index_:16,row:["Bi-Weekly","Half-Time Residency",'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',null,!0,null,"Walk Dogs: Ellie & Lewis","Non-Casual","Daily","Mon – Sun","Walk Ellie & Lewis","Pet Care"]},{index_:17,row:["Casual","Periodic Residency","Manually added to any schedules",null,!0,null,"SCHEDULE CONFIGURATIONS",null,null,null,null,null]},{index_:18,row:["SPECIAL ROTATION GROUPS",null,null,null,null,null,"Active Week Start Date","2026-10-19","Printable Weekly Schedule",null,null,null]},{index_:19,row:["Name","Members",null,null,"Active Status",null,null,null,null,null,null,null]},{index_:20,row:["All","Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",null,null,!0,null,"Custody Schedule Rotation","Kids Week","Bi-Weekly Schedule",null,"Mason, Cadence",null]},{index_:21,row:["Kids","Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:22,row:["Parents","Thom, Meghan",null,null,!0,null,null,null,null,null,null,null]},{index_:23,row:["Non-Casual","Thom, Meghan, Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:26,row:["Pet Name","Dog / Cat","Routine","Care Responsibilities","Active Status",null,null,null,null,null,null,null]},{index_:27,row:["Ellie","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:28,row:["Lewis","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:29,row:["Casey","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:30,row:["Gigi","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:31,row:["Sloane","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:32,row:["Scoob","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:34,row:[null,null,null,null,!1,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun",null,null]}]}];var Jt=[{name:"Monday",short:"Mon",color:"#8E283A",lightBg:"#FDF2F4",border:"#F8B4BD"},{name:"Tuesday",short:"Tue",color:"#1A638B",lightBg:"#F0F7FB",border:"#A6D2ED"},{name:"Wednesday",short:"Wed",color:"#C45508",lightBg:"#FEF6F0",border:"#FBD3B6"},{name:"Thursday",short:"Thu",color:"#3D7841",lightBg:"#F2F8F3",border:"#B6DFBA"},{name:"Friday",short:"Fri",color:"#584B79",lightBg:"#F5F3F9",border:"#CDC3E6"},{name:"Saturday",short:"Sat",color:"#B81B6C",lightBg:"#FDF2F8",border:"#F8B4DB"},{name:"Sunday",short:"Sun",color:"#0C7B83",lightBg:"#EFF9FA",border:"#9EE1E6"}],vs=[{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},{color:"#D97706",bg:"#FEF3C7",text:"#B45309"},{color:"#10B981",bg:"#D1FAE5",text:"#047857"},{color:"#6366F1",bg:"#EEF2FF",text:"#4338CA"}],lp={meghan:{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},thom:{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},sydney:{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},cadence:{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},mason:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},koda:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},keyanna:{color:"#D97706",bg:"#FEF3C7",text:"#B45309"}},Mu={ellie:{color:"#E11D48",bg:"#FFE4E6",text:"#BE123C",border:"#FECDD3"},lewis:{color:"#059669",bg:"#D1FAE5",text:"#047857",border:"#A7F3D0"},casey:{color:"#7C3AED",bg:"#EDE9FE",text:"#6D28D9",border:"#DDD6FE"},gigi:{color:"#DB2777",bg:"#FCE7F3",text:"#BE185D",border:"#FBCFE8"},sloane:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},sloan:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},scoob:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",border:"#FED7AA"}};function Me(b){return b?String(b).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g," ").replace(/\s+/g," ").trim():""}function dt(b){if(!b)return"";const _=String(b).toLowerCase();return _.includes("litter")?"litter_box":_.includes("herd")&&(_.includes("breakfast")||_.includes("supper")||_.includes("feed the herd"))?"feed_herd":_.includes("dishwasher")&&_.includes("empty")?"empty_dishwasher":_.includes("supper")||_.includes("dinner")&&_.includes("plan")?"make_supper":_.includes("dishes")||_.includes("kitchen cleanup")?"dinner_dishes":_.includes("bedroom")||_.includes("personal spaces")?"tidy_bedrooms":_.includes("laundry")?"laundry":_.includes("basement")?"clean_basement":_.includes("feeding station")||_.includes("deep clean")&&_.includes("feeding")?"feeding_station_deep_clean":_.includes("recycling")?"curbside_recycling":_.includes("waste")?"curbside_waste":_.includes("sign-off")||_.includes("sign off")||_.includes("inspection")?"weekly_sign_off":_.includes("walk")&&_.includes("dog")?"walk_dogs":Me(b)}function lo(b){const _=String(b||"").toLowerCase();return _.includes("tidy bedroom")||_.includes("tidy up bedroom")||_.includes("tidy bedrooms")||_.includes("personal spaces")}function Pu(b){return String(b||"").toLowerCase().includes("laundry")}function co(b){return lo(b)||Pu(b)}function Bu(b){const _=String(b||"").toLowerCase();return _.includes("clean basement")||_.includes("basement")}function qu(b){const _=String(b||"").toLowerCase();return _.includes("feeding station")||_.includes("herd feeding")||_.includes("deep clean")&&_.includes("feeding")}function An(b){const _=String(b||"").toLowerCase();return _.includes("sign-off")||_.includes("sign off")||_.includes("inspection")}function hd(b,_){if(co(b)||An(b))return!1;if(Bu(b)||qu(b))return!0;const v=String(b||"").toLowerCase();return!!(v.includes("curbside")||v.includes("recycling")||v.includes("waste")||_&&(_.frequency==="weekly"||_.frequency==="biweekly"))}function pr(b){const v=String(b||"").match(/tidy bedroom:\s*([A-Za-z]+)/i);return v?v[1].trim():null}function jn(b,_,v){const U=new Date(b,_,v,12,0,0),K=new Date(2026,9,18,12,0,0),Y=(Math.round((U.getTime()-K.getTime())/(1e3*60*60*24))%14+14)%14;return Y===0?{isPresent:!0,label:"Arrives 5 PM",fullLabel:"Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",cycleIndex:Y,isArrivalDay:!0,isDepartureDay:!1,isFullStay:!1}:Y>=1&&Y<=6?{isPresent:!0,label:"Here (Kids Week)",fullLabel:"Cadence & Mason are here this week (Kids Week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!0}:Y===7?{isPresent:!0,label:"Leaves 5 PM",fullLabel:"Cadence & Mason depart today at 5:00 PM (End of Kids Week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!0,isFullStay:!1}:{isPresent:!1,label:"Away (Off Week)",fullLabel:"Cadence & Mason are away this week (Off week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!1}}function Ru(b,_="Cadence & Mason"){if(!b||b.length<7)return null;const v=b[6],U=b[0],K=jn(U.year,U.month,U.day);return jn(v.year,v.month,v.day).isArrivalDay?{text:`${_} arrive Sunday at 5:00 PM`,badgeBg:"bg-pink-50 text-pink-700 border-pink-200"}:K.isPresent&&K.isFullStay?{text:`${_} here this week (leave Sun 5 PM)`,badgeBg:"bg-emerald-50 text-emerald-700 border-emerald-200"}:{text:`${_} away this week (next back on Sunday)`,badgeBg:"bg-slate-100 text-slate-500 border-slate-200"}}function ip(b){if(!b||b.length<6)return!1;const _=b[5]||b[b.length-1],v=jn(_.year,_.month,_.day);return v.isFullStay||v.isDepartureDay}function $u(b,_,v,U=["Thom","Meghan"]){const K=new Date(b,_,v,12,0,0),q=new Date(2026,9,11,12,0,0),Y=Math.round((K.getTime()-q.getTime())/(1e3*60*60*24*7)),le=U&&U.length>0?U:["Thom","Meghan"],ee=(Y%le.length+le.length)%le.length;return le[ee]}var dp=[{name:"Ellie",kind:"Dog",icon:"🐕"},{name:"Lewis",kind:"Dog",icon:"🐕"},{name:"Casey",kind:"Cat",icon:"🐈"},{name:"Gigi",kind:"Cat",icon:"🐈"},{name:"Sloane",kind:"Cat",icon:"🐈"},{name:"Scoob",kind:"Cat",icon:"🐈"}],Sn=[{id:"Pet Care",name:"Pet Care",icon:"🐾",bg:"bg-amber-50",text:"text-amber-800",border:"border-amber-200",dot:"#D97706"},{id:"Kitchen",name:"Kitchen",icon:"🍽️",bg:"bg-emerald-50",text:"text-emerald-800",border:"border-emerald-200",dot:"#059669"},{id:"Bedrooms",name:"Bedrooms",icon:"🛏️",bg:"bg-pink-50",text:"text-pink-800",border:"border-pink-200",dot:"#DB2777"},{id:"Household",name:"Household",icon:"🏠",bg:"bg-blue-50",text:"text-blue-800",border:"border-blue-200",dot:"#2563EB"}],pd=[{title:"Empty the Litter Box (Morning & Evening)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening scoop, waste disposal"},{title:"Feed the Herd (Breakfast & Supper)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening feeding, refresh water bowls"},{title:"Make Supper: Plan Ahead!",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Parents & Kids",notes:"Meal prep, cooking, family dinner"},{title:"Dinner Dishes & Kitchen Cleanup",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Clear table, dishwasher, wipe counters & sink"},{title:"Tidy Bedrooms & Checklist",category:"Bedrooms",who:"Each Child",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Occupants",notes:"Pick up mess & laundry, dust surfaces, vacuum floors"},{title:"Laundry (Wash, Fold, Put Away)",category:"Household",who:"Sydney",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"Sydney",notes:"Linens, clothes, fold and put in drawers"},{title:"Clean Basement & Rec Room",category:"Household",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Kids",notes:"Tidy items, organize games, vacuum carpet"},{title:"Weekly Sign-Off & Inspection",category:"Administration",who:"Parents",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"},{title:"Herd Feeding Station Deep Clean",category:"Pet Care",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Full-Time Roster",notes:"Wash & sanitize pet bowls, wipe feeding mat"},{title:"Curbside Recycling",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"},{title:"Curbside Waste",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"},{title:"Walk Dogs: Ellie & Lewis (Morning & Evening walk)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening walk for Ellie & Lewis"}];function Ft(b,_,v,U){const K=String(b||"").toLowerCase(),q=K.includes("recycling"),Y=K.includes("waste");if(!q&&!Y)return!0;const le=new Date(_,v,U,12,0,0),ee=new Date(2026,9,15,12,0,0),M=Math.round((le.getTime()-ee.getTime())/(1e3*60*60*24)),P=(Math.round(M/7)%2+2)%2;return q?P===0:Y?P===1:!0}function Al(b){const _=String(b||"").toLowerCase().trim();return _.includes("recycling")||_.includes("waste")?{frequency:"biweekly",dayOfWeek:3}:_.includes("sign-off")||_.includes("inspection")||_.includes("deep clean")||_.includes("feeding station")?{frequency:"weekly",dayOfWeek:6}:_.includes("tidy bedroom")||_.includes("personal spaces")||_.includes("basement")||_.includes("laundry")?{frequency:"weekly",dayOfWeek:5}:{frequency:"daily",dayOfWeek:0}}function Lu(b){return b<10?"0"+b:""+b}function Dn(b,_,v){return`${b}-${Lu(_+1)}-${Lu(v)}`}function Wt(b){if(b==null||b==="")return null;if(b instanceof Date)return{year:b.getFullYear(),month:b.getMonth(),day:b.getDate()};if(typeof b=="number"){if(b>3e4&&b<6e4){const U=(b-25569)*86400*1e3,K=new Date(U);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const _=String(b).trim();if(!_.includes("-")){const U=Number(_);if(!isNaN(U)&&U>3e4&&U<6e4){const K=new Date((U-25569)*86400*1e3);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const v=_.split("-").map(Number);return v.length!==3||isNaN(v[0])||isNaN(v[1])||isNaN(v[2])?null:{year:v[0],month:v[1]-1,day:v[2]}}function Hu(b,_,v){const K=new Date(b,_,v).getDay(),q=K===0?-6:1-K,Y=new Date(b,_,v+q);return{year:Y.getFullYear(),month:Y.getMonth(),day:Y.getDate()}}function Po(b,_,v){const U=Hu(b,_,v),K=[];for(let q=0;q<7;q++){const Y=new Date(U.year,U.month,U.day+q),le=Y.getFullYear(),ee=Y.getMonth(),M=Y.getDate();K.push({year:le,month:ee,day:M,dateKey:Dn(le,ee,M),isCurrentMonth:!0,dayOfWeekIndex:q})}return K}function ks(){const b=new Date,_=Hu(b.getFullYear(),b.getMonth(),b.getDate());return{..._,todayYear:b.getFullYear(),todayMonth:b.getMonth(),todayDay:b.getDate(),dateKey:Dn(_.year,_.month,_.day)}}function cp(b,_=pd){const v=Wt(b)||{year:2026,month:9,day:12},U=Po(v.year,v.month,v.day),K=["Thom","Meghan"],q=["Sydney"],Y=["Sydney","Cadence","Mason"],le=["Thom","Meghan","Sydney"],ee=["Thom","Meghan","Sydney","Cadence","Mason"],M={},H=Math.floor(v.day/7),P=U[3]||U[0],ne=jn(P.year,P.month,P.day),Se=ne.isFullStay||ne.isDepartureDay,Fe=Se?Y:q,ce=Se?ee:le,se=Fe[(H+1)%Fe.length],$e=ce[(H+2)%ce.length],Le=ce[(H+3)%ce.length],te=ce[(H+4)%ce.length];return U.forEach((fe,ze)=>{const ot=fe.dateKey;M[ot]={};const Ze=jn(fe.year,fe.month,fe.day),Ue=Ze.isFullStay||Ze.isDepartureDay,Ee=Ue?ee:le,Ce=Ue?Y:q,Ye=ze%Ee.length;let Ne=0;_.forEach((Oe,Qe)=>{var re,Te,ie,L,V,X,x;const R=Oe.task||Oe.title||((re=Oe.row)==null?void 0:re[0])||"",ue=R.toLowerCase(),be=Al(R);let ye=!1;const _e=ue.includes("deep clean")||ue.includes("feeding station"),ke=ue.includes("recycling"),Be=ue.includes("waste"),Ke=ue.includes("basement");if(_e)ye=ze===6;else if(ke)ye=ze===3&&Ft("recycling",fe.year,fe.month,fe.day);else if(Be)ye=ze===3&&Ft("waste",fe.year,fe.month,fe.day);else if(Ke)ye=ze===5;else if(be.frequency==="daily"||(Te=Oe.frequency)!=null&&Te.toLowerCase().includes("daily")&&!((ie=Oe.frequency)!=null&&ie.toLowerCase().includes("once")))ye=!0;else if(be.frequency==="biweekly"||(L=Oe.frequency)!=null&&L.toLowerCase().includes("bi"))ye=ze===3&&Ft(R,fe.year,fe.month,fe.day);else if(be.frequency==="weekly"||(V=Oe.frequency)!=null&&V.toLowerCase().includes("weekly")&&!((X=Oe.frequency)!=null&&X.toLowerCase().includes("bi"))||(x=Oe.frequency)!=null&&x.toLowerCase().includes("once")){const mt=String(Oe.targetDay||"").toLowerCase(),Nr=mt.includes("sunday")?6:mt.includes("thursday")?3:5;ye=ze===Nr}let Ge="";if(!ye)Ge="";else if(co(R))Ge="";else if(ze===6&&ue.includes("supper"))Ge=$u(fe.year,fe.month,fe.day,K);else if(ue.includes("sign-off")||ue.includes("inspection"))Ge=K[ze%K.length];else if(Ke)Ge=se;else if(_e)Ge=$e;else if(ke)Ge=Le;else if(Be)Ge=te;else{const mt=String(Oe.rotationGroup||"").toLowerCase();mt.includes("parent")?Ge=K[(Ye+Ne)%K.length]:mt.includes("kid")?Ge=Ce[(Ye+Ne)%Ce.length]:(Ge=Ee[(Ye+Ne)%Ee.length],Ne++)}const we=Oe.index_!==void 0?Oe.index_:5+Qe,At={who:Ge,done:!1,kidsDone:{}};if(M[ot][we]=At,Oe.index_!==void 0&&(M[ot][Oe.index_]=At),R){M[ot][R]=At,M[ot][ue]=At;const mt=dt(R);mt&&(M[ot][mt]=At)}})}),M}function Iu(b,_){const v=Wt(_)||{year:2026,month:9,day:12},U=Po(v.year,v.month,v.day),K={};return U.forEach(q=>{K[q.dateKey]={}}),!b||!Array.isArray(b)||b.forEach(q=>{if(q.index_<4||!q.row||q.row.length===0)return;const Y=String(q.row[0]||"").trim(),le=Y.toLowerCase();if(!Y||Y.startsWith("•")||le==="daily tasks"||le==="weekly tasks"||Y.toUpperCase().includes("SECTION")||Y.toUpperCase().includes("ONCE-A-WEEK")||Y.toUpperCase().includes("ROSTER")||Y.toUpperCase().includes("PET CARE"))return;const ee=Y.toLowerCase(),M=dt(Y),H=q.index_;U.forEach((P,ne)=>{const Se=1+ne*2,Fe=2+ne*2,ce=q.row[Se]!==void 0&&q.row[Se]!==null?String(q.row[Se]).trim():"",$e=ce.startsWith("-")||ce.startsWith("(")||ce.startsWith("SG:")||ce.startsWith("Done:")||ce.startsWith("Parent Initials")||ce.startsWith("___")||/^Who:\s*_+$/i.test(ce)?"":ce.replace(/^Who:\s*/i,"").trim(),Le=q.row[Fe]===!0||String(q.row[Fe]).toLowerCase()==="true",te={who:$e,done:Le,kidsDone:{}};co(Y)&&((q.row[2]===!0||String(q.row[2]).toLowerCase()==="true")&&(te.kidsDone.Sydney=!0),(q.row[4]===!0||String(q.row[4]).toLowerCase()==="true")&&(te.kidsDone.Cadence=!0),(q.row[6]===!0||String(q.row[6]).toLowerCase()==="true")&&(te.kidsDone.Mason=!0),(q.row[12]===!0||String(q.row[12]).toLowerCase()==="true")&&(te.kidsDone.Koda=!0),(q.row[14]===!0||String(q.row[14]).toLowerCase()==="true")&&(te.kidsDone.Keyanna=!0)),K[P.dateKey][H]=te,K[P.dateKey][Y]=te,K[P.dateKey][ee]=te,M&&(K[P.dateKey][M]=te)})}),K}function up({data:b,updateItem:_,deleteItem:v,insertItem:U,moveItem:K,followLink:q}){var Y,le,ee;const[M,H]=I.useState(()=>new Set),[P,ne]=I.useState({}),[Se,Fe]=I.useState([]),[ce,se]=I.useState([]),[$e,Le]=I.useState(null),[te,fe]=I.useState(null),[ze,ot]=I.useState(null),Ze=I.useMemo(()=>!b||!Array.isArray(b)?null:b.find(s=>{const i=String(s.name||"").toLowerCase();return(i.includes("printable")||i.includes("weekly")&&i.includes("schedule"))&&!i.includes("hub")})||b[0],[b]),Ue=I.useMemo(()=>!b||!Array.isArray(b)?null:b.find(s=>{const i=String(s.name||"").toLowerCase();return i.includes("hub")||i.includes("household")||i.includes("directory")||i.includes("roster")})||(b.length>1?b[1]:b[0]),[b]),Ee=(Y=Ze==null?void 0:Ze.index_)!=null?Y:0,Ce=(le=Ue==null?void 0:Ue.index_)!=null?le:(b==null?void 0:b.length)>1?1:0,Ye=Ue||{data:[]},Ne=Ze||{data:[]},Oe=Ee,Qe=Ye;Ne!=null&&Ne.data;const re=(s,i)=>{if(!(Ne!=null&&Ne.data)||Ne.data.length===0)return null;const c=dt(s),m=Me(s);if(c){const p=Ne.data.find(u=>u.index_<4||!u.row||!u.row[0]?!1:dt(u.row[0])===c);if(p)return p}if(m){const p=Ne.data.find(d=>d.index_<4||!d.row||!d.row[0]?!1:Me(d.row[0])===m);if(p)return p;const u=Ne.data.find(d=>{if(d.index_<4||!d.row||!d.row[0])return!1;const y=Me(d.row[0]);return y.startsWith(m)||m.startsWith(y)||y.includes(m)||m.includes(y)});if(u)return u}if(!s&&i!==void 0&&i!==null){const p=Ne.data.find(u=>u.index_===i&&u.index_>=4);if(p)return p}return null},Te=(s,i)=>{const c=re(s,i);return c?c.index_:i},ie=(s,i)=>{if(!(Ye!=null&&Ye.data)||Ye.data.length===0)return null;const c=dt(s),m=Me(s);if(c){const p=Ye.data.find(u=>u.index_<5||!u.row||!u.row[6]?!1:dt(u.row[6])===c);if(p)return p}if(m){const p=Ye.data.find(d=>d.index_<5||!d.row||!d.row[6]?!1:Me(d.row[6])===m);if(p)return p;const u=Ye.data.find(d=>{if(d.index_<5||!d.row||!d.row[6])return!1;const y=Me(d.row[6]);return y.startsWith(m)||m.startsWith(y)||y.includes(m)||m.includes(y)});if(u)return u}if(!s&&i!==void 0&&i!==null){const p=Ye.data.find(u=>u.index_===i&&u.index_>=5);if(p)return p}return null},L=(s,i)=>{const c=ie(s,i);return c?c.index_:i},V=I.useMemo(()=>{const s=Qe.data||[];let i="2026-10-12",c="Kids Week",m="Mason, Cadence",p="Bi-Weekly Schedule continuing on from first Friday specified",u="Non-Casual";return s.forEach(d=>{if(!d.row)return;const y=String(d.row[6]||"").toLowerCase().trim(),w=d.row[7],N=String(d.row[8]||"").trim(),D=String(d.row[10]||"").trim();if(y.includes("active week")){const S=Wt(w);S?i=Dn(S.year,S.month,S.day):w&&(i=String(w).trim())}else y.includes("custody schedule")?(w&&(c=String(w).trim()),D&&(m=D)):(y.includes("waste")||y.includes("recycling"))&&(N&&(p=N),D&&(u=D))}),{activeWeekStart:i,custodyRotation:c,custodyMembers:m,wasteRotation:p,wasteMembers:u}},[Qe]),X=I.useMemo(()=>{const s=Qe.data||[],i=[];return s.forEach(c=>{if(!c.row||c.index_<14||c.index_>17)return;const m=String(c.row[0]||"").trim();!m||m.toLowerCase()==="type"||m.toLowerCase().includes("occupancy")||m.toLowerCase().includes("special rotation")||i.push({type:m,description:String(c.row[1]||"").trim(),rules:String(c.row[2]||"").trim(),active:c.row[4]!==!1&&String(c.row[4]).toLowerCase()!=="false"})}),i.length>0?i:[{type:"Full-Time",description:"Constant Residency",rules:"Included in all weekly/monthly schedulings",active:!0},{type:"Bi-Weekly",description:"Half-Time Residency",rules:'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',active:!0},{type:"Casual",description:"Periodic Residency",rules:"Manually added to any schedules",active:!0}]},[Qe]),x=I.useMemo(()=>{const i=(Qe.data||[]).filter(c=>{if(!!!(c.row&&c.row[5]==="MEMBER_ROW")&&(c.index_<4||c.index_>12)||!c.row||!c.row[0])return!1;const p=String(c.row[0]).trim();if(!p)return!1;const u=p.toLowerCase();return!(u==="household members"||u==="name"||u.includes("directory")||u.includes("occupancy"))});return i.length===0?[{id:"Thom",name:"Thom",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8",index_:5},{id:"Meghan",name:"Meghan",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9",index_:6},{id:"Sydney",name:"Sydney",role:"Minion",residency:"Full-Time",type:"regular",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#0D9488",bg:"#CCFBF1",text:"#0F766E",index_:7},{id:"Cadence",name:"Cadence",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EC4899",bg:"#FCE7F3",text:"#BE185D",index_:8},{id:"Mason",name:"Mason",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",index_:9},{id:"Koda",name:"Koda",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",index_:10},{id:"Keyanna",name:"Keyanna",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#D97706",bg:"#FEF3C7",text:"#B45309",index_:11}]:i.map((c,m)=>{const p=String(c.row[0]||"").trim(),u=String(c.row[1]||"").trim()||(["thom","meghan"].includes(p.toLowerCase())?"Overseer Supreme":"Minion"),d=String(c.row[2]||"").trim(),y=String(c.row[3]||"").trim(),w=c.row[4]===!0||String(c.row[4]).toLowerCase()==="true",N=d.toLowerCase();let D="regular";N.includes("bi-weekly")||N.includes("biweekly")?D="biweekly":N.includes("casual")&&(D="casual");const S=lp[p.toLowerCase()]||vs[m%vs.length];return{id:p,name:p,role:u,residency:d||(D==="biweekly"?"Bi-Weekly":D==="casual"?"Casual":"Full-Time"),type:D,specialGroups:y,schedule:D==="biweekly"?"Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)":D==="casual"?"Periodic Residency (Manual Add)":"Constant Residency (Full-Time)",active:w,color:S.color,bg:S.bg,text:S.text,index_:c.index_}})},[Qe]),R=I.useMemo(()=>["All","Kids","Parents","Non-Casual"].map(i=>{const c=x.filter(m=>String(m.specialGroups||"").split(",").map(u=>u.trim().toLowerCase()).filter(Boolean).includes(i.toLowerCase())).map(m=>m.name);return{name:i,members:c.length>0?c.join(", "):"None",active:!0}}),[x]),ue=I.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")&&!i.includes("admin")&&!i.includes("mom")&&!i.includes("dad")}).map(s=>s.name),[x]),be=I.useMemo(()=>{const s=["Sydney","Cadence","Mason","Koda","Keyanna"],i=Array.from(new Set([...ue,...s]));return i.length>0?i:s},[ue]),ye=I.useMemo(()=>{const s=Qe.data||[],i=s.find(c=>{var m;const p=String(((m=c.row)==null?void 0:m[0])||"").toLowerCase().trim();return p.includes("pet care profile")||p==="pet name"});return i?s.filter(m=>{if(m.index_<=i.index_||!m.row||!m.row[0]||m.row[5]==="MEMBER_ROW")return!1;const u=String(m.row[0]).trim().toLowerCase();return u!=="pet name"&&!u.includes("profile")}).map((m,p)=>{const u=String(m.row[0]).trim(),d=String(m.row[1]||"").trim(),y=String(m.row[2]||"").trim(),w=String(m.row[3]||"").trim(),N=m.row[4]!==!1&&String(m.row[4]).toLowerCase()!=="false",D=["ellie","lewis"].includes(u.toLowerCase()),S=d||(D?"Dog":"Cat"),f=S.toLowerCase(),k=f.includes("dog"),W=k?"🐕":f.includes("cat")?"🐈":f.includes("bird")?"🐦":f.includes("fish")?"🐟":"🐾",z=y||"Morning & Evening",O=["meghan","thom","sydney"].includes(w.toLowerCase()),F=!w||O?k?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water":w,Q=Mu[u.toLowerCase()]||vs[p%vs.length];return{name:u,type:S,routine:z,care:F,active:N,icon:W,color:Q.color,bg:Q.bg,text:Q.text,border:Q.border||Q.color,index_:m.index_}}):dp.map((c,m)=>{const p=Mu[c.name.toLowerCase()]||vs[m%vs.length];return{name:c.name,type:c.kind,routine:"Morning & Evening",care:c.kind==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water",active:!0,icon:c.icon,color:p.color,bg:p.bg,text:p.text,border:p.border||p.color,index_:15+m}})},[Qe]),_e=I.useMemo(()=>{const s=Qe.data||[];let i=[];const c=new Set,m=new Set;if(s.forEach(p=>{if(!p.row||p.index_<5)return;const u=p.row[6]!==void 0&&p.row[6]!==null?String(p.row[6]).trim():"";if(!u)return;const d=u.toLowerCase(),y=Me(u),w=dt(u);if(d==="chore"||d==="parameter"||d.includes("schedule configuration")||d.includes("active week")||d.includes("waste / recycling")||d.includes("custody schedule")||d.includes("pet care profile")||d.includes("special rotation")||d.includes("occupancy categories")||d.includes("household member")||An(u)||w==="weekly_sign_off"||c.has(w)||m.has(y)||M.has(String(p.index_))||M.has(d)||M.has(y)||M.has(w))return;const N=String(p.row[7]||"").trim(),D=String(p.row[8]||"").trim(),S=String(p.row[9]||"").trim(),f=String(p.row[10]||"").trim(),k=String(p.row[11]||"").trim(),W=Sn.some(ve=>ve.name.toLowerCase()===N.toLowerCase()),F=(ve=>{const Pe=String(ve).trim().toLowerCase();return!Pe||Pe==="all non-casual"||Pe==="non-casual"||Pe==="parents & kids"||Pe==="full-time roster"?"Non-Casual":Pe==="kids"||Pe==="kids rotation"||Pe==="all kids"?"Kids":Pe==="parents"?"Parents":Pe==="all"||Pe==="all occupants"?"All":String(ve).trim()})(W?f||"Non-Casual":N||"Non-Casual"),Z=(D||(w.includes("curbside")?"Bi-Weekly":w.includes("deep_clean")||w.includes("sign_off")||w.includes("bedroom")||w.includes("laundry")||w.includes("basement")?"Once a Week":"Daily")).toLowerCase(),he=Z.includes("bi")?"Bi-Weekly":Z.includes("once")||Z.includes("weekly")?"Once a Week":"Daily",Ie=(S==="N/A"||!S?he==="Daily"?"Mon – Sun":he==="Bi-Weekly"?"Thursday Evening":"Saturday":S).replace(/\s*\(required\)/i,"").trim()||"Mon – Sun",We=W?k:f;let je=W?N:k&&Sn.some(ve=>ve.name.toLowerCase()===k.toLowerCase())?k:"Household";!W&&je==="Household"&&(d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?je="Pet Care":d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")||d.includes("cook")?je="Kitchen":d.includes("bedroom")?je="Bedrooms":d.includes("basement")?je="Household":(d.includes("sign-off")||d.includes("inspection"))&&(je="Administration")),c.add(w),m.add(y),i.push({index_:p.index_,task:u,canonicalKey:w,category:je,frequency:he,targetDay:Ie==="N/A"?"Mon – Sun":Ie,rotationGroup:F,notes:We,source:"hub_master_registry"})}),Ne!=null&&Ne.data&&Ne.data.forEach(p=>{if(p.index_<4||!p.row||!p.row[0])return;const u=String(p.row[0]).trim(),d=u.toLowerCase(),y=Me(u),w=dt(u);if(!y||y==="daily tasks"||y==="weekly tasks"||y.includes("section")||y.includes("once a week")||y.includes("bedroom checklist")||y.includes("pet care routine")||y.startsWith("•")||An(u)||w==="weekly_sign_off"||c.has(w)||m.has(y)||M.has(y)||M.has(w)||M.has(String(p.index_)))return;c.add(w),m.add(y);const N=Al(u),D=N.frequency==="weekly",S=N.frequency==="biweekly";let f="Household",k="";d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?(f="Pet Care",d.includes("walk")&&(k="Morning & evening walk for Ellie & Lewis")):d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")?f="Kitchen":d.includes("bedroom")?f="Bedrooms":d.includes("basement")?f="Household":(d.includes("sign-off")||d.includes("inspection"))&&(f="Administration"),i.push({index_:p.index_,task:u,canonicalKey:w,category:f,frequency:S?"Bi-Weekly":D?"Once a Week":"Daily",targetDay:S?"Thursday Evening":D?"Saturday":"Mon – Sun",rotationGroup:"Non-Casual",notes:k,source:"printable_sheet"})}),ce.length>0&&ce.forEach(p=>{const u=Me(p.task),d=dt(p.task);!c.has(d)&&!m.has(u)&&!M.has(String(p.index_))&&!M.has(u)&&!M.has(d)&&(c.add(d),m.add(u),i.push(p))}),i.length===0&&(i=pd.filter(p=>!An(p.title)).map((p,u)=>{var d,y;return{index_:5+u,task:p.title,category:p.category||"Household",frequency:((d=p.freq)==null?void 0:d.frequency)==="weekly"?"Once a Week":((y=p.freq)==null?void 0:y.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:p.targetDay||"Mon – Sun",rotationGroup:p.rotationGroup||"Non-Casual",notes:p.notes||"",source:"default"}})),$e&&Array.isArray($e)&&$e.length>0){const p=u=>{const d=Me(u.task),y=$e.indexOf(d);if(y!==-1)return y;const w=(u.task||"").toLowerCase().trim(),N=$e.indexOf(w);if(N!==-1)return N;const D=dt(u.task);if(D){const S=$e.findIndex(f=>dt(f)===D);if(S!==-1)return S}return-1};i.sort((u,d)=>{const y=p(u),w=p(d);return y!==-1&&w!==-1?y-w:y!==-1?-1:w!==-1?1:0})}return i},[Qe,ce,$e,M]),ke=I.useMemo(()=>s=>{if(!s)return null;const i=String(s).trim().toLowerCase();return x.find(c=>c.name.toLowerCase()===i||c.id.toLowerCase()===i||i==="mom"&&(c.name.toLowerCase().includes("megh")||c.role.toLowerCase().includes("mom")||c.role.toLowerCase().includes("parent"))||i==="dad"&&(c.name.toLowerCase()==="thom"||c.role.toLowerCase().includes("dad")||c.role.toLowerCase().includes("parent")))||null},[x]),Be=I.useMemo(()=>{const s=x.filter(i=>i.type==="biweekly").map(i=>i.name);return s.length>0?s.join(" & "):"Cadence & Mason"},[x]),Ke=I.useMemo(()=>V!=null&&V.activeWeekStart?V.activeWeekStart:"2026-10-12",[V]);I.useMemo(()=>Wt(Ke)||{year:2024,month:6,day:15},[Ke]);const Ge=I.useMemo(()=>{const s=(Ne==null?void 0:Ne.data)||[],i=(d,y)=>{const w=dt(d);if(w==="litter_box"||w==="feed_herd"||w==="empty_dishwasher"||w==="make_supper"||w==="dinner_dishes"||w==="walk_dogs")return!0;if(w==="curbside_recycling"||w==="curbside_waste"||w==="clean_basement"||w==="feeding_station_deep_clean"||w==="tidy_bedrooms"||w==="laundry")return!1;const N=String(y||"").toLowerCase();return N.includes("bi")||N.includes("once")||N.includes("week")?!1:N.includes("daily")?!0:Al(d).frequency==="daily"},c=[],m=[],p=new Set;_e.forEach(d=>{if(An(d.task))return;const y=dt(d.task),w=Me(d.task);if(p.has(y)||p.has(w))return;p.add(y),p.add(w);const N=s.find(k=>{if(k.index_<4||!k.row||!k.row[0])return!1;const W=String(k.row[0]).trim();return dt(W)===y||Me(W)===w}),D=i(d.task,d.frequency);let S=N!=null&&N.row?[...N.row]:null;if(S)!D&&d.notes&&String(d.notes).trim()&&(S[1]=String(d.notes).trim());else if(D)S=[d.task,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];else if(co(d.task))S=[d.task,d.notes||"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1];else{const k=d.notes||(y.includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":y.includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"- Pick Up, Organize, Dust & Vacuum");S=[d.task,k,null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]}const f={isSectionHeader:!1,index_:N?N.index_:d.index_,row:S,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};D?c.push(f):m.push(f)}),s.forEach(d=>{if(d.index_<4||!d.row||!d.row[0])return;const y=String(d.row[0]).trim(),w=y.toLowerCase();if(!y||w==="daily tasks"||w==="weekly tasks"||w.includes("once-a-week")||w.includes("bedroom checklist")||w.includes("pet care routine")||w.includes("household roster")||w.includes("bi-weekly schedule")||w.startsWith("•")||An(y))return;const N=dt(y),D=Me(y);if(p.has(N)||p.has(D))return;p.add(N),p.add(D);const S=i(y),f={isSectionHeader:!1,index_:d.index_,row:d.row,task:y};S?c.push(f):m.push(f)}),Se.length>0&&Se.forEach(d=>{const y=dt(d.task),w=Me(d.task);if(p.has(y)||p.has(w))return;p.add(y),p.add(w);const N=i(d.task,d.frequency),D={isSectionHeader:!1,index_:d.index_,row:d.row,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};N?c.push(D):m.push(D)});const u=[];return u.push({isSectionHeader:!0,headerType:"daily",index_:4,title:"Daily Tasks"}),u.push(...c),u.push({isSectionHeader:!0,headerType:"weekly",index_:10,title:"Weekly Tasks",descHeader:"Description",rightHeader:"Initials / Assigned"}),u.push(...m),u.push({isSectionHeader:!1,index_:18,row:["Weekly Sign-Off & Inspection","Parents",!1,null,null,null,null,null,null,"Thom / Meghan",null,null,null,null,null],task:"Weekly Sign-Off & Inspection",category:"Administration",frequency:"Once a Week",targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"}),u.filter(d=>{if(d.isSectionHeader||An(d.task))return!0;const y=String(d.index_),w=String(d.task||"").toLowerCase().trim(),N=Me(d.task),D=dt(d.task);return!(M.has(y)||M.has(w)||M.has(N)||M.has(D))}).map(d=>{if(d.isSectionHeader)return d;const y=P[d.index_]||P[String(d.task||"").toLowerCase().trim()]||(d.task?P[dt(d.task)]:null);if(!y)return d;const w=y.task||d.task,N=y.row?[...y.row]:[...d.row||[]];return N[0]=w,{...d,task:w,row:N,category:y.category||d.category,frequency:y.frequency||d.frequency,targetDay:y.targetDay||d.targetDay,rotationGroup:y.rotationGroup||d.rotationGroup,notes:y.notes||d.notes}})},[Ne,_e,Se,M,P]),we=I.useMemo(()=>{const s=Ge.filter(i=>!i.isSectionHeader).map(i=>{const c=i.task,m=dt(c),p=Me(c),u=_e.find(S=>{if(m&&dt(S.task)===m||p&&Me(S.task)===p)return!0;const f=S.task.toLowerCase().trim();return c.toLowerCase().trim()===f})||_e.find(S=>{const f=S.task.toLowerCase().trim(),k=c.toLowerCase().trim();return k.includes("deep clean")&&f.includes("deep clean")||k.includes("feed the herd")&&f.includes("feed the herd")?!0:k.includes(f)||f.includes(k)||k.includes("dishes")&&f.includes("dishes")||k.includes("litter")&&f.includes("litter")||k.includes("supper")&&f.includes("supper")||k.includes("basement")&&f.includes("basement")||k.includes("laundry")&&f.includes("laundry")||k.includes("sign-off")&&f.includes("sign-off")});let d=(u==null?void 0:u.category)||"Household",y=(u==null?void 0:u.frequency)||"Daily",w=(u==null?void 0:u.targetDay)||"Mon – Sun",N=(u==null?void 0:u.rotationGroup)||"Kids Rotation",D=(u==null?void 0:u.notes)||"";return c.toLowerCase().includes("deep clean")||c.toLowerCase().includes("feeding station")?(d="Pet Care",y="Once a Week",w="Sunday",N=(u==null?void 0:u.rotationGroup)||"All",D=(u==null?void 0:u.notes)||"Wash & sanitize pet bowls, vacuum feeding mat"):c.toLowerCase().includes("recycling")?(d="Household",y="Bi-Weekly",w="Thursday Evening",N=(u==null?void 0:u.rotationGroup)||"All Non-Casual",D=(u==null?void 0:u.notes)||"Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)"):c.toLowerCase().includes("waste")?(d="Household",y="Bi-Weekly",w="Thursday Evening",N=(u==null?void 0:u.rotationGroup)||"All Non-Casual",D=(u==null?void 0:u.notes)||"Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)"):c.toLowerCase().includes("litter")||c.toLowerCase().includes("feed")?d="Pet Care":c.toLowerCase().includes("supper")||c.toLowerCase().includes("dishes")?d="Kitchen":lo(c)?(d="Bedrooms",y="Once a Week",w="Saturday",N=pr(c)||"Each Child"):c.toLowerCase().includes("basement")?(d="Household",y="Once a Week",w="Saturday",N="All Kids"):c.toLowerCase().includes("laundry")?(d="Household",y="Once a Week",w="Saturday",N="Sydney"):c.toLowerCase().includes("sign-off")&&(d="Administration",y="Once a Week",w="Sunday",N="Parents"),{index_:i.index_,row:i.row,task:c,category:d,frequency:y,targetDay:w,rotationGroup:N,notes:D}});return s.length>0?s:pd.map((i,c)=>{var m,p;return{index_:4+c,row:[i.title,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1],task:i.title,category:i.category,frequency:((m=i.freq)==null?void 0:m.frequency)==="weekly"?"Once a Week":((p=i.freq)==null?void 0:p.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:i.targetDay,rotationGroup:i.rotationGroup,notes:i.notes}})},[Ge,_e]),At=I.useMemo(()=>ks(),[]),[mt,Nr]=I.useState("matrix"),[kt,Tn]=I.useState(()=>At.todayYear),[ct,Br]=I.useState(()=>At.todayMonth),[xt,tn]=I.useState(()=>At.dateKey),[Xt,ga]=I.useState("ALL"),[Ot,rn]=I.useState(null),[wa,ho]=I.useState(!1),[As,En]=I.useState(!1),[ba,qr]=I.useState(!1),[mr,_a]=I.useState("add"),[lr,nn]=I.useState([]),[Ds,js]=I.useState(""),[fr,Sr]=I.useState(null),[po,Bo]=I.useState(""),[xr,on]=I.useState("daily"),[qo,Ts]=I.useState(5),[$o,Ho]=I.useState("All Non-Casual"),[va,mo]=I.useState(!1),[ka,$r]=I.useState(!1),[Es,Mn]=I.useState(null),[Ms,fo]=I.useState(["Kids","Non-Casual","All"]),[zt,Rn]=I.useState(null),[yr,Rs]=I.useState(null),[Ca,xo]=I.useState(""),[Ar,Na]=I.useState(""),[Ls,ge]=I.useState(null),[zo,Sa]=I.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Is,Ws]=I.useState(!1),[Go,Ln]=I.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[lt,Fs]=I.useState("ALL"),[Dr,In]=I.useState("ALL"),[Hr,Os]=I.useState(""),[Ks,jr]=I.useState(null),[qe,Kt]=I.useState(null),[Pt,Tr]=I.useState(null),[Aa,yo]=I.useState(!1),[rt,Gt]=I.useState({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",selectedTargetDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],customTargetEnabled:!1,customTargetText:"",rotationGroup:"Non-Casual",notes:""}),go=async()=>{try{const s=localStorage.getItem(Ss),i=s?JSON.parse(s):b,m=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:i})})).json();m.ok?ge("✓ Current browser setup saved as the new default in code and weekly-chores-config.json!"):ge(`⚠️ Save failed: ${m.error}`)}catch(s){ge(`⚠️ Save failed: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>ge(null),4e3)},Uo=()=>{try{const s=localStorage.getItem(Ss),c={sheetData:s?JSON.parse(s):b,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},m=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),u=document.createElement("a"),d=new Date().toISOString().slice(0,10);u.href=p,u.download=`weekly-chores-config-${d}.json`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(p),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{}),ge("✓ Configuration file exported and saved to workspace!"),setTimeout(()=>ge(null),3500)}catch(s){ge(`⚠️ Export failed: ${(s==null?void 0:s.message)||String(s)}`),setTimeout(()=>ge(null),3500)}},Tl=s=>{var m;const i=(m=s.target.files)==null?void 0:m[0];if(!i)return;const c=new FileReader;c.onload=p=>{var u;try{const d=JSON.parse((u=p.target)==null?void 0:u.result),y=d.sheetData||(Array.isArray(d)?d:null);Array.isArray(y)&&y.length>0?(localStorage.setItem(Ss,JSON.stringify(y)),window.postMessage({type:"SYNC_DATA",payload:y},"*"),ge(`✓ Loaded configuration from "${i.name}"!`)):ge("⚠️ Invalid configuration file: Missing sheetData")}catch(d){ge(`⚠️ Failed to parse config file: ${(d==null?void 0:d.message)||String(d)}`)}setTimeout(()=>ge(null),4e3)},c.readAsText(i),s.target.value=""},zr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],sn=s=>{const i=String(s||"").trim();if(!i||i==="Mon – Sun"||i==="Mon - Sun"||i.toLowerCase()==="daily")return{selectedDays:[...zr],customEnabled:!1,customText:""};const c=i.split(",").map(u=>u.trim()).filter(Boolean),m=[],p=[];return c.forEach(u=>{const d=zr.find(y=>y.toLowerCase()===u.toLowerCase());d?m.includes(d)||m.push(d):p.push(u)}),{selectedDays:zr.filter(u=>m.includes(u)),customEnabled:p.length>0,customText:p.join(", ")}},Er=(s,i,c)=>{const m=zr.filter(d=>s.includes(d)),p=m.length===7?"Mon – Sun":m.join(", "),u=String(c||"").trim();return i&&u?p?`${p}, ${u}`:u:p||"Mon – Sun"},an=I.useMemo(()=>_e.filter(s=>{if(lt!=="ALL"&&(s.category||"").toLowerCase()!==lt.toLowerCase())return!1;if(Dr!=="ALL"){const i=(s.frequency||"").toLowerCase(),c=Dr.toLowerCase();if(c==="daily"&&!i.includes("daily")||(c==="once a week"||c==="weekly")&&(!i.includes("once")&&!i.includes("weekly")||i.includes("bi"))||c==="bi-weekly"&&!i.includes("bi"))return!1}if(Hr){const i=Hr.toLowerCase();if(!((s.task||"").toLowerCase().includes(i)||(s.category||"").toLowerCase().includes(i)||(s.rotationGroup||"").toLowerCase().includes(i)||(s.notes||"").toLowerCase().includes(i)||(s.targetDay||"").toLowerCase().includes(i)))return!1}return!0}),[_e,lt,Dr,Hr]),[Vo,gd]=I.useState(""),[Ps,Ve]=I.useState(!1),[Zt,ln]=I.useState({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),[Bs,dn]=I.useState(null),[cn,wo]=I.useState({name:"",routine:"",care:""}),[qs,un]=I.useState(null),[Mr,Rr]=I.useState("");I.useEffect(()=>{(Ne!=null&&Ne.data||Ye!=null&&Ye.data)&&(se(s=>s.filter(i=>{var c,m;const p=Me(i.task),u=(c=Ye.data)==null?void 0:c.some(y=>y.row&&Me(y.row[6])===p),d=(m=Ne.data)==null?void 0:m.some(y=>y.row&&Me(y.row[0])===p);return!u&&!d})),Fe(s=>s.filter(i=>{var c;const m=Me(i.task);return!((c=Ne.data)==null?void 0:c.some(u=>u.row&&Me(u.row[0])===m))})))},[Ne.data,Ye.data]);const[ir,hn]=I.useState({}),[Yo,pn]=I.useState("ALL"),gr=s=>{var i;const c=(s==null?void 0:s.task)||((i=s==null?void 0:s.row)==null?void 0:i[0])||"";if(ir[c])return ir[c];if(ir[s==null?void 0:s.index_])return ir[s==null?void 0:s.index_];const m=String(c||"").toLowerCase();if(m.includes("recycling")||m.includes("waste"))return{frequency:"biweekly",dayOfWeek:3};if(m.includes("deep clean")||m.includes("feeding station"))return{frequency:"weekly",dayOfWeek:6};if(m.includes("basement"))return{frequency:"weekly",dayOfWeek:5};const p=dt(c),u=_e.find(d=>p&&dt(d.task)===p||Me(d.task)===Me(c)||d.task.toLowerCase()===c.toLowerCase());if(u){const d=String(u.frequency||"").toLowerCase(),y=String(u.targetDay||"").toLowerCase();return d.includes("bi-weekly")||d.includes("biweekly")?{frequency:"biweekly",dayOfWeek:3}:d.includes("weekly")||d.includes("once")?{frequency:"weekly",dayOfWeek:y.includes("sunday")?6:y.includes("thursday")?3:y.includes("friday")?4:5}:{frequency:"daily",dayOfWeek:0}}return Al(c)},[ut,Ct]=I.useState(()=>{var s,i;const c=((s=b==null?void 0:b.find(m=>{const p=String(m.name||"").toLowerCase();return(p.includes("printable")||p.includes("weekly")&&p.includes("schedule"))&&!p.includes("hub")}))==null?void 0:s.data)||((i=b==null?void 0:b[0])==null?void 0:i.data)||[];return Iu(c,ks().dateKey)}),Da=()=>{const s=xt||ks().dateKey,i=cp(s,we),c=Wt(s)||{year:2026,month:9,day:12},m=Po(c.year,c.month,c.day),p={};Ee>=0&&we.forEach(u=>{var d,y,w,N,D,S;const f=u.task||((d=u.row)==null?void 0:d[0])||"",k=re(f,u.index_);if(!k||co(f))return;const W=gr(u),z=hd(f,W),O=new Array(15).fill(void 0);let F=!1,Q="";for(let Z=0;Z<7;Z++){const he=new Date(c.year,c.month,c.day+Z),pe=Dn(he.getFullYear(),he.getMonth(),he.getDate()),Ie=((y=(d=i[pe])==null?void 0:d[u.index_])==null?void 0:y.who)||((N=(w=i[pe])==null?void 0:w[u.task])==null?void 0:N.who)||((S=(D=i[pe])==null?void 0:D[dt(u.task)])==null?void 0:S.who);if(Ie){const We=1+Z*2;O[We]=Ie,F=!0,z&&!Q&&(Q=Ie)}}z&&Q&&(O[9]=`Who: ${Q}`,F=!0,p[u.index_]={...P[u.index_]||{},who:Q,rotationGroup:Q},f&&(p[f.toLowerCase().trim()]={...P[f.toLowerCase().trim()]||{},who:Q,rotationGroup:Q}),m.forEach(Z=>{if(i[Z.dateKey]){const pe={...i[Z.dateKey][u.index_]||{done:!1,kidsDone:{}},who:Q};i[Z.dateKey][u.index_]=pe,f&&(i[Z.dateKey][f]=pe,i[Z.dateKey][f.toLowerCase().trim()]=pe)}})),F&&_(Ee,k.index_,O)}),Ct(u=>({...u,...i})),Object.keys(p).length>0&&ne(u=>({...u,...p})),ge(`Distributed daily & weekly scheduled chores for week of ${s} across active household members (Tidy Bedrooms & Laundry remain individual checklists)!`),setTimeout(()=>ge(null),4500)},Mt=I.useMemo(()=>{const s=Wt(xt)||{year:2026,month:9,day:12};return Po(s.year,s.month,s.day)},[xt]),mn=I.useMemo(()=>Ru(Mt,Be),[Mt,Be]),Lr=I.useMemo(()=>ip(Mt),[Mt]);I.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")?s.type==="regular"?!0:s.type==="biweekly"?Lr:!1:!1}).map(s=>s.name),[x,Lr]),I.useMemo(()=>{const s=x.filter(i=>{if(i.active===!1)return!1;const c=String(i.role||"").toLowerCase();return!c.includes("parent")&&!c.includes("overseer")&&!c.includes("overlord")&&i.type==="casual"}).map(i=>i.name);return s.length>0?s:["Koda","Keyanna"]},[x]),I.useEffect(()=>{if(!(Ne!=null&&Ne.data)||Ne.data.length===0)return;const s=Iu(Ne.data,xt||Ke||"2026-10-12");Ct(i=>{const c={...i};return Object.keys(s).forEach(m=>{c[m]={...c[m]||{},...s[m]}}),c})},[Ne,xt,Ke]);const bo=I.useMemo(()=>{const s=new Date(kt,ct+1,0).getDate(),i=new Date(kt,ct,1).getDay(),c=i===0?6:i-1,m=new Date(kt,ct,0).getDate(),p=[];let u=[];for(let d=c-1;d>=0;d--){const y=m-d,w=ct===0?11:ct-1,N=ct===0?kt-1:kt;u.push({year:N,month:w,day:y,dateKey:Dn(N,w,y),isCurrentMonth:!1,dayOfWeekIndex:u.length})}for(let d=1;d<=s;d++)u.push({year:kt,month:ct,day:d,dateKey:Dn(kt,ct,d),isCurrentMonth:!0,dayOfWeekIndex:u.length}),u.length===7&&(p.push(u),u=[]);if(u.length>0){let d=1;const y=ct===11?0:ct+1,w=ct===11?kt+1:kt;for(;u.length<7;)u.push({year:w,month:y,day:d,dateKey:Dn(w,y,d),isCurrentMonth:!1,dayOfWeekIndex:u.length}),d++;p.push(u)}return p},[kt,ct]),Wn=s=>{var i;return((i=s[0])==null?void 0:i.dateKey)===xt},dr=(s,i,c)=>{const m=ut[s];if(!m)return{who:"",done:!1,kidsDone:{}};const p=m[i]||(c?m[c]:null)||(c?m[c.toLowerCase()]:null);return p?{who:p.who!==void 0&&p.who!==null?String(p.who):"",done:!!p.done,kidsDone:p.kidsDone||{}}:{who:"",done:!1,kidsDone:{}}},Gr=s=>{const i=Wt(s);if(!i)return ue;const c=jn(i.year,i.month,i.day),m=c.isFullStay||c.isDepartureDay;return ue.filter(p=>{const u=ke(p);return u&&u.type==="biweekly"?m:!0})},_o=(s,i,c)=>{const p=dr(s,i).kidsDone||{},u=!p[c],d={...p,[c]:u},y=Gr(s),w=y.length>0&&y.every(N=>d[N]);Vr(s,i,{kidsDone:d,done:w,who:w?"All Kids":"Each Child"})},ja=(s,i)=>{const c={};be.forEach(p=>{c[p]=!1});const m=we.find(p=>{var u;return p.index_===s||i&&String(p.task||((u=p.row)==null?void 0:u[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});return m&&m.row&&((m.row[2]===!0||String(m.row[2]).toLowerCase()==="true")&&(c.Sydney=!0),(m.row[4]===!0||String(m.row[4]).toLowerCase()==="true")&&(c.Cadence=!0),(m.row[6]===!0||String(m.row[6]).toLowerCase()==="true")&&(c.Mason=!0),(m.row[12]===!0||String(m.row[12]).toLowerCase()==="true")&&(c.Koda=!0),(m.row[14]===!0||String(m.row[14]).toLowerCase()==="true")&&(c.Keyanna=!0)),Mt.forEach(p=>{const u=dr(p.dateKey,s,i);if(u.kidsDone&&Object.keys(u.kidsDone).forEach(d=>{u.kidsDone[d]&&(c[d]=!0)}),u.who==="All Kids"&&u.done)be.forEach(d=>{var y;((y=u.kidsDone)==null?void 0:y[d])!==!1&&(c[d]=!0)});else if(u.who&&u.done){const d=u.who.split(/[,&]+/).map(y=>y.trim().toLowerCase());be.forEach(y=>{d.includes(y.toLowerCase())&&(c[y]=!0)})}}),c},El=(s,i,c)=>{const m=ja(s,c),p=!m[i],u={...m,[i]:p},d=be.filter(S=>u[S]).length,y=d===be.length&&be.length>0,w=d>0;let N="Each Child";if(y)N="All Kids";else if(w){const S=be.filter(f=>u[f]);N=S.length<=2?S.join(" & "):`${S.length} Kids`}Ct(S=>{const f={...S};return Mt.forEach(k=>{const W=f[k.dateKey]||{},z=W[s]||{who:"",done:!1,kidsDone:{}};f[k.dateKey]={...W,[s]:{...z,who:N,done:w,kidsDone:u}},c&&(f[k.dateKey][c]=f[k.dateKey][s],f[k.dateKey][c.toLowerCase()]=f[k.dateKey][s])}),f});const D=Te(c,s);if(Ee>=0&&D!==void 0&&D!==null){const S=new Array(15).fill(void 0),f=i.toLowerCase();f==="sydney"?S[2]=p:f==="koda"?S[12]=p:f==="keyanna"?S[14]=p:f==="cadence"?S[4]=p:f==="mason"&&(S[6]=p),_(Ee,D,S)}},Fn=(s,i)=>{let c="",m=!1;const p=String(i||"").toLowerCase().trim(),u=dt(i),d=D=>{if(!D)return!1;const S=String(D).replace(/^Who:\s*/i,"").replace(/^Assigned:\s*/i,"").trim();if(!S||S.startsWith("-")||S.startsWith("(")||S.startsWith("SG:")||S.startsWith("Done:")||S.startsWith("Parent Initials")||S.startsWith("___")||/^_+$/.test(S))return!1;const f=S.toLowerCase();return!!(x.some(k=>k.name.toLowerCase()===f)||f==="parents"||f==="all kids"||f==="all non-casual"||f==="each child"||f.includes("meghan")||f.includes("thom"))},y=D=>{if(!D)return"";const S=String(D).replace(/^Who:\s*/i,"").replace(/^Assigned:\s*/i,"").trim(),f=x.find(k=>k.name.toLowerCase()===S.toLowerCase());return f?f.name:S.toLowerCase().includes("parents")?"Parents":S.toLowerCase().includes("all kids")?"All Kids":S.toLowerCase().includes("all non-casual")?"All Non-Casual":S},w=P[s]||(p?P[p]:null)||(u?P[u]:null);if(w&&w.who&&d(w.who)&&(c=y(w.who)),w&&w.done!==void 0&&(m=!!w.done),!c&&Mt&&Mt.length>0)for(let D=Mt.length-1;D>=0;D--){const S=Mt[D],f=dr(S.dateKey,s,i);if(f.who&&d(f.who)){c=y(f.who);break}f.done&&(m=!0)}const N=we.find(D=>{var S;return D.index_===s||i&&String(D.task||((S=D.row)==null?void 0:S[0])||"").toLowerCase().trim()===p});if(N&&N.row&&((N.row[14]===!0||String(N.row[14]).toLowerCase()==="true")&&(m=!0),!c)){const D=String(N.row[9]||"").replace(/^Who:\s*/i,"").trim();if(d(D))c=y(D);else for(const S of[13,11,7,5,3]){const f=String(N.row[S]||"").replace(/^Who:\s*/i,"").trim();if(d(f)){c=y(f);break}}}return!Lr&&(c==="Cadence"||c==="Mason")&&(c=""),{who:c,done:m}},On=(s,i,c)=>{const m=Fn(s,i),p="who"in c?c.who:m.who,u="done"in c?c.done:m.done,d=String(i||"").toLowerCase(),y=dt(i),w=d.includes("recycling")||d.includes("waste")||d.includes("curbside")?3:d.includes("basement")||d.includes("saturday")?5:6;Ct(S=>{const f={...S};return Mt.forEach(k=>{const W=f[k.dateKey]||{},O={...W[s]||{who:"",done:!1,kidsDone:{}},who:p,done:u};f[k.dateKey]={...W,[s]:O},i&&(f[k.dateKey][i]=O,f[k.dateKey][i.toLowerCase().trim()]=O),y&&(f[k.dateKey][y]=O)}),f}),ne(S=>{const f=S[s]||{},k=we.find(Z=>Z.index_===s),W=[...f.row||(k==null?void 0:k.row)||new Array(15).fill("")],z=1+w*2,O=2+w*2;"who"in c&&(W[z]=p),"done"in c&&(W[O]=u);const F=String(i||(k==null?void 0:k.task)||"").toLowerCase().trim(),Q={...f,row:W,rotationGroup:p,who:p};return{...S,[s]:Q,...F?{[F]:Q}:{},...y?{[y]:Q}:{}}});const N=re(i);if(Ee>=0&&N){const S=N.index_,f=new Array(15).fill(void 0);if(y==="clean_basement"||y==="feeding_station_deep_clean"||y==="curbside_recycling"||y==="curbside_waste")"who"in c&&(f[9]=p?`Who: ${p}`:"Who: _____________________"),"done"in c&&(f[14]=u);else if(y==="weekly_sign_off")"who"in c&&(f[9]=p),"done"in c&&(f[14]=u);else{const k=1+w*2,W=2+w*2;"who"in c&&(f[k]=p),"done"in c&&(f[W]=u)}_(Ee,S,f)}const D=L(i,s);if(Ce>=0&&"who"in c&&D!==void 0&&D!==null){const S=new Array(12).fill(void 0);S[7]=p,_(Ce,D,S)}ge(`Updated "${i||"Chore"}": Assigned to ${p||"unassigned"}`),setTimeout(()=>ge(null),3e3)},er=I.useMemo(()=>we.find(s=>{var i;return An(s.task||((i=s.row)==null?void 0:i[0]))})||{index_:12,task:"Weekly Sign-Off & Inspection",rotationGroup:"Parents",category:"Administration"},[we]),$s=I.useMemo(()=>Fn(er==null?void 0:er.index_,er==null?void 0:er.task),[er,ut,Mt]),Ur=()=>{if(!er)return;const s=Fn(er.index_,er.task),i=!s.done,c=s.who||"Parents";On(er.index_,er.task,{done:i,who:c}),ge(i?"Weekly Sign-Off & Inspection completed and verified for the week!":"Weekly Sign-Off reset to pending."),setTimeout(()=>ge(null),3500)},Vr=(s,i,c)=>{var m;const p=we.find(w=>w.index_===i),u=(p==null?void 0:p.task)||"",d=Me(u);Ct(w=>{const N=w[s]||{},S={...N[i]||(d?N[d]:null)||{who:"",done:!1},...c},f={...N,[i]:S};return u&&(f[u]=S),d&&(f[d]=S),{...w,[s]:f}});const y=re(u,i);if(Ee>=0&&y){const w=Wt(xt),N=Wt(s);if(w&&N){const D=new Date(w.year,w.month,w.day),f=new Date(N.year,N.month,N.day).getTime()-D.getTime(),k=Math.round(f/(1e3*3600*24));if(k>=0&&k<7){const W=1+k*2,z=2+k*2,O=new Array(15).fill(void 0);O[0]=u||((m=y.row)==null?void 0:m[0]),"who"in c&&(O[W]=c.who),"done"in c&&(O[z]=c.done),_(Ee,y.index_,O)}}}},vo=(s,i,c,m,p)=>{var u,d,y;const w=c==="who"?1+i*2:2+i*2,N=Wt(xt)||{year:2026,month:9,day:12},D=new Date(N.year,N.month,N.day+i,12,0,0),S=Dn(D.getFullYear(),D.getMonth(),D.getDate()),f=p||((u=we.find(O=>O.index_===s))==null?void 0:u.task)||"",k=dt(f);Ct(O=>{const F=O[S]||{},Z={...F[s]||(f?F[f]:null)||(k?F[k]:null)||{who:"",done:!1,kidsDone:{}},[c]:m},he={...F,[s]:Z};return f&&(he[f]=Z,he[f.toLowerCase().trim()]=Z),k&&(he[k]=Z),{...O,[S]:he}}),ne(O=>{const F=O[s]||(f?O[f.toLowerCase().trim()]:null)||(k?O[k]:null)||{},Q=we.find(Ie=>{var We;return Ie.index_===s||f&&String(Ie.task||((We=Ie.row)==null?void 0:We[0])||"").toLowerCase().trim()===f.toLowerCase().trim()}),Z=[...F.row||(Q==null?void 0:Q.row)||new Array(15).fill("")];Z[w]=m;const he={...F,row:Z,...c==="who"?{who:m}:{done:m}},pe={...O,[s]:he};return f&&(pe[f.toLowerCase().trim()]=he),k&&(pe[k]=he),pe});const W=re(f,s);if(Ee>=0&&W){const O=new Array(15).fill(void 0);O[w]=m,_(Ee,W.index_,O)}const z=ie(f,s);if(Ce>=0&&c==="who"&&z){const O=new Array(12).fill(void 0);O[7]=m,_(Ce,z.index_,O)}ge(c==="who"?`Assigned "${f||"Chore"}" (${(d=Jt[i])==null?void 0:d.name}) to ${m||"unassigned"}`:`Marked "${f||"Chore"}" (${(y=Jt[i])==null?void 0:y.name}) as ${m?"completed ✓":"pending"}`),setTimeout(()=>ge(null),3e3)},Hs=s=>{var i;if(!s||s.length===0)return;const c=s[0];if(!c)return;const m=c.dateKey;tn(m),Tn(c.year),Br(c.month);const p=s.length===7?s:Po(c.year,c.month,c.day);if(Ct(u=>{const d={...u};for(let y=0;y<7;y++){const w=p[y];w&&(d[w.dateKey]||(d[w.dateKey]={}),we.forEach(N=>{var D,S,f;if(!d[w.dateKey][N.index_]){const k=1+y*2,W=2+y*2,z=(D=N.row)==null?void 0:D[k],O=z!=null?String(z):"",F=((S=N.row)==null?void 0:S[W])===!0||String((f=N.row)==null?void 0:f[W]).toLowerCase()==="true";d[w.dateKey][N.index_]={who:O,done:F,kidsDone:{}}}}))}return d}),Ee>=0&&we.forEach(u=>{var d;const y=new Array(15).fill(void 0);let w=!1;for(let N=0;N<7;N++){const D=p[N];if(D&&((d=ut[D.dateKey])!=null&&d[u.index_])){const S=ut[D.dateKey][u.index_];y[1+N*2]=S.who||"",y[2+N*2]=!!S.done,w=!0}}w&&_(Ee,u.index_,y)}),Ce>=0){const u=(i=Ye==null?void 0:Ye.data)==null?void 0:i.find(d=>d.row&&String(d.row[6]||"").toLowerCase().includes("active week"));if(u){const d=new Array(9).fill(void 0);d[7]=m,_(Ce,u.index_,d)}}ge(`Synced active week to ${m} (${p[0].dateKey} – ${p[6].dateKey})`),setTimeout(()=>ge(null),3500)},Kn=s=>{var i,c,m,p,u;const{task:d,category:y="Household",frequency:w="Daily",targetDay:N="Mon – Sun",rotationGroup:D="All Non-Casual",notes:S=""}=s;if(!d||!d.trim())return;const f=d.trim(),k=Me(f),W=w.toLowerCase().includes("daily"),z=re(f);if(z&&Ee>=0){const je=new Array(15).fill(void 0);je[0]=f,D&&(je[1]=D==="Each Child"?"Each Child":D),_(Ee,z.index_,je)}else if(Ee>=0){const je=[f,D==="Each Child"?"Each Child":D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];let ve;if(W){const Pe=(i=Ne.data)==null?void 0:i.find(st=>st.index_>=4&&st.row&&(Me(st.row[0]).includes("clean basement")||Me(st.row[0]).includes("once a week")));ve=Pe?Pe.index_:void 0}else{const Pe=(c=Ne.data)==null?void 0:c.find(st=>st.index_>=8&&st.row&&(String(st.row[0]||"").toLowerCase().includes("pet care")||String(st.row[0]||"").startsWith("•")));ve=Pe?Pe.index_:void 0}U(Ee,ve,je)}const O=ie(f),F=new Array(12).fill(void 0);if(F[6]=f,F[7]=D||"All Non-Casual",F[8]=w,F[9]=N,F[10]=S,F[11]=y,O&&Ce>=0)_(Ce,O.index_,F),(m=Ye.data)==null||m.forEach(je=>{if(je.index_!==O.index_&&je.row&&Me(je.row[6])===k)if(je.row[0]){const ve=new Array(12).fill(void 0);ve[6]="",ve[7]="",ve[8]="",ve[9]="",ve[10]="",ve[11]="",_(Ce,je.index_,ve)}else v(Ce,je.index_)});else if(Ce>=0){const je=(p=Ye.data)==null?void 0:p.find(ve=>ve.index_>=5&&ve.index_<17&&(!ve.row||!ve.row[6]||String(ve.row[6]).trim()===""));if(je)_(Ce,je.index_,F);else{const ve=(u=Ye.data)==null?void 0:u.find(st=>st.row&&String(st.row[6]||"").toLowerCase().includes("schedule configuration")),Pe=ve?ve.index_:void 0;U(Ce,Pe,F)}}const Q=w.toLowerCase(),Z=N.toLowerCase(),he=Q.includes("bi-weekly")||Q.includes("biweekly")?"biweekly":Q.includes("weekly")||Q.includes("once")?"weekly":"daily",pe=Z.includes("sunday")?6:Z.includes("thursday")?3:5,We={index_:z?z.index_:O?O.index_:2e3+Date.now()%1e5,task:f,category:y,frequency:w,targetDay:N,rotationGroup:D||"All Non-Casual",notes:S,source:"user_added",row:[f,D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1]};!O&&!z&&(se(je=>[...je,We]),Fe(je=>[...je,We])),H(je=>{const ve=new Set(je);return ve.delete(k),ve.delete(f.toLowerCase().trim()),ve}),Le(je=>je?[...je,Me(f)]:null),hn(je=>({...je,[f]:{frequency:he,dayOfWeek:pe}})),yo(!1),En(!1),qr(!1),Gt({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",rotationGroup:"All Non-Casual",notes:""}),ge(`Added "${f}" to schedule and master registry!`),setTimeout(()=>ge(null),3500)},ko=(s,i={})=>{var c;if(!s||!s.trim())return;const m=s.trim(),p=i.defaultWho||"All Non-Casual",u=i.frequency||"daily",d=i.dayOfWeek!==void 0?i.dayOfWeek:5,y=u==="weekly"?"Once a Week":u==="biweekly"?"Bi-Weekly":"Daily",w=u==="weekly"?(c=Jt[d])==null?void 0:c.name:u==="biweekly"?"Thursday Evening":"Mon – Sun",N=i.category||"Household";Kn({task:m,category:N,frequency:y,targetDay:w,rotationGroup:p,notes:i.notes||""})},Ta=(s,i)=>{var c,m;const p=(c=Qe.data)==null?void 0:c.find(w=>w.index_===s),u=i.oldTask||((m=p==null?void 0:p.row)==null?void 0:m[6])||i.task,d=L(u,s);if(Ce>=0&&d!==void 0&&d!==null){const w=new Array(12).fill(void 0);w[6]=i.task||u||"","rotationGroup"in i&&(w[7]=i.rotationGroup),"frequency"in i&&(w[8]=i.frequency),"targetDay"in i&&(w[9]=i.targetDay),"notes"in i&&(w[10]=i.notes),"category"in i&&(w[11]=i.category),_(Ce,d,w)}if(se(w=>w.map(N=>N.index_===s||Me(N.task)===Me(u)?{...N,...i,task:i.task||N.task}:N)),i.task&&u&&Me(i.task)!==Me(u)){const w=Me(u),N=Me(i.task);Le(D=>D?D.map(S=>S===w?N:S):null)}const y=Te(u);if(Ee>=0&&y!==void 0&&y!==null){const w=new Array(15).fill(void 0);"task"in i&&(w[0]=i.task),"notes"in i&&(w[1]=i.notes),("task"in i||"notes"in i)&&_(Ee,y,w)}if(i.frequency||i.targetDay){const w=i.task||u||"";if(w){const N=String(i.frequency||"").toLowerCase(),D=String(i.targetDay||"").toLowerCase(),S=N.includes("bi-weekly")||N.includes("biweekly")?"biweekly":N.includes("weekly")||N.includes("once")?"weekly":"daily",f=D.includes("sunday")?6:D.includes("thursday")?3:D.includes("friday")?4:5;hn(k=>({...k,[w]:{frequency:S,dayOfWeek:f}}))}}jr(null),Kt(null),ge(`Updated "${i.task||u||"chore"}" in schedule and master registry!`),setTimeout(()=>ge(null),3e3)},Ut=(s,i)=>{var c;const m=Me(i);Ce>=0&&((c=Ye.data)==null||c.forEach(d=>{if(!(d.index_<5||!d.row||!d.row[6])&&(Me(d.row[6])===m||d.index_===s))if(d.row[0]){const y=new Array(12).fill(void 0);y[6]="",y[7]="",y[8]="",y[9]="",y[10]="",y[11]="",_(Ce,d.index_,y)}else v(Ce,d.index_)}));const p=re(i);Ee>=0&&p&&v(Ee,p.index_);const u=String(i||"").toLowerCase().trim();se(d=>d.filter(y=>y.index_!==s&&(!u||y.task.toLowerCase().trim()!==u))),H(d=>{const y=new Set(d);return s!=null&&y.add(String(s)),u&&y.add(u),y}),Ct(d=>{const y={...d};return Object.keys(y).forEach(w=>{if(y[w]&&y[w][s]){const N={...y[w]};delete N[s],y[w]=N}}),y}),Ks===s&&(jr(null),Kt(null)),ge(`Removed "${i||"chore"}" from Household Hub Master Chore Registry`),setTimeout(()=>ge(null),3e3)},fn=(s,i)=>{var c,m;const p=(i.task||"").trim();if(!p)return;const u=i.oldTask||p;ne(D=>{const S={...D};return S[s]={...i,task:p},u&&(S[String(u).toLowerCase().trim()]={...i,task:p}),S[p.toLowerCase().trim()]={...i,task:p},S});const d=i.frequency==="Once a Week"?"weekly":i.frequency==="Bi-Weekly"?"biweekly":"daily",y=i.dayOfWeek!==void 0?i.dayOfWeek:(c=i.targetDay)!=null&&c.toLowerCase().includes("sunday")?6:(m=i.targetDay)!=null&&m.toLowerCase().includes("thursday")?3:5;if(hn(D=>({...D,[p]:{frequency:d,dayOfWeek:y},[s]:{frequency:d,dayOfWeek:y}})),i.task&&u&&Me(i.task)!==Me(u)){const D=Me(u),S=Me(i.task);Le(f=>f?f.map(k=>k===D?S:k):null)}const w=Te(u);if(Ee>=0&&w!==void 0&&w!==null){const D=new Array(15).fill(void 0);D[0]=p,i.notes!==void 0&&(D[1]=i.notes),_(Ee,w,D)}const N=L(u,s);if(Ce>=0&&N!==void 0&&N!==null){const D=new Array(12).fill(void 0);D[6]=p,i.rotationGroup&&(D[7]=i.rotationGroup),i.frequency&&(D[8]=i.frequency),i.targetDay&&(D[9]=i.targetDay),i.notes!==void 0&&(D[10]=i.notes),i.category&&(D[11]=i.category),_(Ce,N,D)}u&&u!==p&&Ct(D=>{const S={...D};return Object.keys(S).forEach(f=>{if(S[f]&&S[f][u]){const k={...S[f]};k[p]=k[u],k[p.toLowerCase()]=k[u],S[f]=k}}),S}),fe(null),ge(`Updated chore: "${p}"`),setTimeout(()=>ge(null),3e3)},Pn=(s,i)=>{var c,m;const p=i||"";H(y=>{const w=new Set(y);return s!=null&&w.add(String(s)),p&&w.add(p.toLowerCase().trim()),w});const u=Te(p,s);Ee>=0&&u!==void 0&&u!==null&&v(Ee,u);const d=L(p,s);if(Ce>=0&&d!==void 0&&d!==null){const y=(c=Ye.data)==null?void 0:c.find(w=>w.index_===d);if((m=y==null?void 0:y.row)!=null&&m[0]){const w=new Array(12).fill(void 0);w[6]="",w[7]="",w[8]="",w[9]="",w[10]="",w[11]="",_(Ce,d,w)}else v(Ce,d)}Ct(y=>{const w={...y};return Object.keys(w).forEach(N=>{if(w[N]){const D={...w[N]};s!==void 0&&delete D[s],p&&(delete D[p],delete D[p.toLowerCase().trim()]),w[N]=D}}),w}),ot(null),te&&te.index_===s&&fe(null),ge(`Removed chore: "${p||"Chore"}" from schedule`),setTimeout(()=>ge(null),3e3)},Bn=(s,i)=>{Pn(s,i)},Ea=()=>{if(lr.length===0)return;const s=lr.length;lr.forEach(i=>{var c;const m=we.find(p=>p.index_===i);Pn(i,(m==null?void 0:m.task)||((c=m==null?void 0:m.row)==null?void 0:c[0])||"")}),nn([]),qr(!1),ge(`Successfully removed ${s} chore(s) from master list`),setTimeout(()=>ge(null),3500)},zs=s=>{var i,c;const m=s.task||((i=s.row)==null?void 0:i[0])||"",p=gr(s);Sr(s.index_),Bo(m),on(p.frequency||"daily"),Ts(p.dayOfWeek!==void 0?p.dayOfWeek:5),Ho(s.rotationGroup||"All Non-Casual"),fe({...s,originalTask:m,task:m,category:s.category||"Household",frequency:p.frequency==="weekly"?"Once a Week":p.frequency==="biweekly"?"Bi-Weekly":"Daily",targetDay:s.targetDay||(p.frequency==="weekly"?(c=Jt[p.dayOfWeek!==void 0?p.dayOfWeek:5])==null?void 0:c.name:"Mon – Sun"),rotationGroup:s.rotationGroup||"All Non-Casual",notes:s.notes||"",dayOfWeek:p.dayOfWeek!==void 0?p.dayOfWeek:5})},Gs=()=>{var s;if(fr===null)return;const i=po.trim();i&&fn(fr,{task:i,frequency:xr==="weekly"?"Once a Week":xr==="biweekly"?"Bi-Weekly":"Daily",targetDay:((s=Jt[qo])==null?void 0:s.name)||"Mon – Sun",rotationGroup:$o,dayOfWeek:qo}),Sr(null)},Yr=(s,i)=>{const c=(k,W)=>typeof W=="object"&&W!==null?k===W||Me(k.task)===Me(W.task):k.index_===W||String(k.index_)===String(W)||Me(k.task)===Me(String(W)),m=typeof s=="object"&&s!==null&&an.length>0?an:_e,p=m.findIndex(k=>c(k,s));if(p===-1)return;const u=i==="up"?p-1:p+1;if(u<0||u>=m.length)return;const d=m[p],y=m[u],w=[..._e],N=w.findIndex(k=>c(k,d)),D=w.findIndex(k=>c(k,y));if(N===-1||D===-1)return;const S=d.task||"Chore";w[N]=y,w[D]=d;const f=w.map(k=>Me(k.task));if(Le(f),Ee>=0){const k=re(d.task),W=re(y.task),z=(Ne==null?void 0:Ne.data)==null?void 0:Ne.data.find(Q=>Q.row&&String(Q.row[0]||"").toLowerCase().trim()==="weekly tasks"),O=z?z.index_:10,F=k&&W&&(k.index_<O&&W.index_<O||k.index_>O&&W.index_>O);if(k&&W&&k.index_!==W.index_&&F){const Q=[...k.row||[]],Z=[...W.row||[]];_(Ee,k.index_,Z),_(Ee,W.index_,Q)}}if(Ce>=0){const k=ie(d.task),W=ie(y.task);if(k&&W&&k.index_!==W.index_){const z=k.row||[],O=W.row||[],F=new Array(12).fill(void 0),Q=new Array(12).fill(void 0);for(let Z=6;Z<=11;Z++)F[Z]=O[Z]!==void 0?O[Z]:"",Q[Z]=z[Z]!==void 0?z[Z]:"";_(Ce,k.index_,F),_(Ce,W.index_,Q)}}ge(`Reordered: Moved "${S}" ${i}! Synchronized with Printable Weekly Schedule and Household Hub.`),setTimeout(()=>ge(null),3e3)},Qo=(s,i,c)=>{var m,p,u,d,y,w;const N=we.find(f=>f.index_===s),D=we.find(f=>f.index_===i);if(!N||!D||s===i)return;const S=(c==null?void 0:c.trim())||`${N.row[1]} & ${D.row[1]}`;if(Oe>=0){const f=new Array(16).fill(void 0);f[1]=S;for(let k=0;k<7;k++){const W=2+k*2,z=3+k*2,O=((m=N.row)==null?void 0:m[W])||"",F=((p=D.row)==null?void 0:p[W])||"",Q=((u=N.row)==null?void 0:u[z])===!0||String((d=N.row)==null?void 0:d[z]).toLowerCase()==="true",Z=((y=D.row)==null?void 0:y[z])===!0||String((w=D.row)==null?void 0:w[z]).toLowerCase()==="true";f[W]=O||F||"",f[z]=Q||Z}_(Oe,N.index_,f),v(Oe,D.index_)}Ct(f=>{const k={...f};return Object.keys(k).forEach(W=>{const z={...k[W]},O=z[N.index_]||{who:"",done:!1},F=z[D.index_]||{who:"",done:!1};z[N.index_]={who:O.who||F.who||"",done:O.done||F.done},delete z[D.index_],k[W]=z}),k}),mo(!1),ge(`Combined into: "${S}"`),setTimeout(()=>ge(null),4e3)},Ma=(s,i)=>{const c=s||[],m=i||[];if(c.length===0&&m.length===0)return;const p={...ut};let u=0,d=0,y=0,w=0;const N={};bo.forEach(D=>{D.forEach(S=>{if(!S.isCurrentMonth)return;const f=S.dateKey;p[f]||(p[f]={});const k=jn(S.year,S.month,S.day),W=k.isFullStay||k.isDepartureDay,z=[...c];if(W&&z.push(...m),z.length===0)return;const O=we.filter(pe=>{var Ie;const We=pe.task||((Ie=pe.row)==null?void 0:Ie[0])||"",je=We.toLowerCase(),ve=gr(pe);return je.includes("deep clean")||je.includes("feeding station")?S.dayOfWeekIndex===6:je.includes("recycling")?S.dayOfWeekIndex===3&&Ft("recycling",S.year,S.month,S.day):je.includes("waste")?S.dayOfWeekIndex===3&&Ft("waste",S.year,S.month,S.day):je.includes("basement")?S.dayOfWeekIndex===5:ve.frequency==="biweekly"?S.dayOfWeekIndex===ve.dayOfWeek&&Ft(We,S.year,S.month,S.day):ve.frequency==="weekly"?S.dayOfWeekIndex===ve.dayOfWeek:!0}),F=z.filter(pe=>{const Ie=ke(pe);return Ie&&Ie.type!=="casual"}),Q=F.length>0?F:z,Z=Q.filter(pe=>{const Ie=ke(pe),We=String((Ie==null?void 0:Ie.role)||"").toLowerCase();return!We.includes("parent")&&!We.includes("overseer")});let he=0;O.forEach(pe=>{var Ie;const We=p[f][pe.index_]||{done:!1,kidsDone:{}},je=pe.task||((Ie=pe.row)==null?void 0:Ie[0])||"",ve=String(pe.rotationGroup||"").toLowerCase(),Pe=je.toLowerCase();if(co(je)){p[f][pe.index_]={who:"",done:We.done,kidsDone:We.kidsDone||{}};return}if(S.dayOfWeekIndex===6&&Pe.includes("supper")){const et=x.filter(tt=>tt.role==="Overseer Supreme"||String(tt.role||"").toLowerCase().includes("parent")).map(tt=>tt.name),_t=et.length>0?et:["Thom","Meghan"],Dt=$u(S.year,S.month,S.day,_t);p[f][pe.index_]={who:Dt,done:We.done,kidsDone:We.kidsDone||{}};return}if(Pe.includes("basement")){const et=Z.length>0?Z:W?["Sydney","Cadence","Mason"]:["Sydney"],_t=et.length>0?et[d%et.length]:"Sydney";p[f][pe.index_]={who:_t,done:We.done,kidsDone:We.kidsDone||{}},d++;return}if(Pe.includes("deep clean")||Pe.includes("feeding station")){const et=Q[y%Q.length];p[f][pe.index_]={who:et,done:We.done,kidsDone:We.kidsDone||{}},y++;return}if(Pe.includes("recycling")||Pe.includes("waste")){const et=Q[w%Q.length];p[f][pe.index_]={who:et,done:We.done,kidsDone:We.kidsDone||{}},w++;return}if(Pe.includes("sign-off")||Pe.includes("inspection")){p[f][pe.index_]={who:"Parents",done:We.done,kidsDone:We.kidsDone||{}};return}if(ve==="parents"||ve.includes("parent")&&!ve.includes("kid")&&!ve.includes("non-casual")&&!ve.includes("all")){const et=x.filter(Dt=>Dt.role==="Overseer Supreme"||String(Dt.role||"").toLowerCase().includes("parent")).map(Dt=>Dt.name),_t=et.length>0?et[(u+he)%et.length]:"Thom";he++,p[f][pe.index_]={who:_t,done:We.done,kidsDone:We.kidsDone||{}};return}if(ve==="kids"&&Z.length>0){const et=Z[(u+he)%Z.length];he++,p[f][pe.index_]={who:et,done:We.done,kidsDone:We.kidsDone||{}};return}const st=Q[(u+he)%Q.length];he++,p[f][pe.index_]={who:st,done:We.done,kidsDone:We.kidsDone||{}}}),u=(u+1)%z.length})}),Ct(p),Ee>=0&&bo.forEach(D=>{Wn(D)&&we.forEach(S=>{var f;const k=S.task||((f=S.row)==null?void 0:f[0])||"";if(co(k))return;const W=re(k,S.index_);if(!W)return;const z=gr(S),O=hd(k,z),F=new Array(15).fill(void 0);let Q=!1,Z="";for(let he=0;he<7;he++){const pe=D[he];if(pe&&((f=p[pe.dateKey])!=null&&f[S.index_])){const Ie=p[pe.dateKey][S.index_].who||"";if(Ie){const We=1+he*2;F[We]=Ie,Q=!0,O&&!Z&&(Z=Ie)}}}O&&Z&&(F[9]=`Who: ${Z}`,Q=!0,N[S.index_]={...P[S.index_]||{},who:Z,rotationGroup:Z},k&&(N[k.toLowerCase().trim()]={...P[k.toLowerCase().trim()]||{},who:Z,rotationGroup:Z}),D.forEach(he=>{if(he&&p[he.dateKey]){const Ie={...p[he.dateKey][S.index_]||{done:!1,kidsDone:{}},who:Z};p[he.dateKey][S.index_]=Ie,k&&(p[he.dateKey][k]=Ie,p[he.dateKey][k.toLowerCase().trim()]=Ie)}})),Q&&_(Ee,W.index_,F)})}),Object.keys(N).length>0&&ne(D=>({...D,...N})),ho(!1),ge(`Auto-assigned daily & weekly tasks for ${xn[ct]} ${kt}! (Tidy Bedrooms & Laundry remain individual checklists)`),setTimeout(()=>ge(null),4500)},Co=(s,i)=>{var c,m;const p=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,u=(c=Qe.data)==null?void 0:c.find(y=>y.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"role"in i&&(d[1]=i.role),"residency"in i&&(d[2]=i.residency),"specialGroups"in i?d[3]=i.specialGroups:"schedule"in i&&(d[3]=i.schedule),"active"in i&&(d[4]=i.active),_(p,s,d),ge(`Updated "${i.name||((m=u==null?void 0:u.row)==null?void 0:m[0])||"member"}" in Household Hub!`),setTimeout(()=>ge(null),3e3)},Ml=(s,i,c,m,p=!0)=>{var u;if(!s||!s.trim())return;const d=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,y=s.trim(),w=i?i.trim():"Minion",N=c||"Full-Time",S=m?m.trim():N==="Casual"?"All":w==="Supreme Overlord"?"Parents, Non-Casual, All":"Kids, Non-Casual, All",f=(u=Qe.data)==null?void 0:u.find(k=>k.index_<5||k.index_>12?!1:!k.row||!k.row[0]||!String(k.row[0]).trim());if(f){const k=new Array(12).fill(void 0);k[0]=y,k[1]=w,k[2]=N,k[3]=S,k[4]=p,k[5]="MEMBER_ROW",_(d,f.index_,k)}else U(d,void 0,[y,w,N,S,p,"MEMBER_ROW",null,null,null,null,null,null]);$r(!1),ge(`Added "${y}" to Household Hub!`),setTimeout(()=>ge(null),3e3)},Rl=(s,i)=>{var c,m;const p=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,u=(c=Qe.data)==null?void 0:c.find(d=>d.index_===s);if((m=u==null?void 0:u.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);ge(`Removed "${i}" from Household Hub`),setTimeout(()=>ge(null),3e3)},No=(s,i)=>{var c,m;const p=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,u=(c=Qe.data)==null?void 0:c.find(y=>y.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"type"in i&&(d[1]=i.type),"routine"in i&&(d[2]=i.routine),"care"in i&&(d[3]=i.care),"active"in i&&(d[4]=i.active),_(p,s,d),ge(`Updated pet "${i.name||((m=u==null?void 0:u.row)==null?void 0:m[0])||"profile"}" in Household Hub!`),setTimeout(()=>ge(null),3e3)},Ll=(s,i,c,m,p=!0)=>{if(!s||!s.trim())return;const u=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,d=s.trim(),y=i||"Dog";U(u,void 0,[d,y,c||"Morning & Evening",m||(y==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water"),p,"PET_ROW",void 0,void 0,void 0,void 0,void 0,void 0]),Ve(!1),ln({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),ge(`Added pet "${d}" to Household Hub!`),setTimeout(()=>ge(null),3e3)},Il=(s,i)=>{var c,m;const p=Ce>=0?Ce:(b==null?void 0:b.length)>1?1:0,u=(c=Qe.data)==null?void 0:c.find(d=>d.index_===s);if((m=u==null?void 0:u.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);ge(`Removed pet "${i}" from Household Hub`),setTimeout(()=>ge(null),3e3)},Ir=I.useMemo(()=>{let s=0,i=0;const c={};x.forEach(p=>{c[p.name]={total:0,done:0}}),bo.forEach(p=>{p.forEach(u=>{u.isCurrentMonth&&we.forEach(d=>{var y,w;const N=d.task||((y=d.row)==null?void 0:y[0])||"",D=N.toLowerCase(),S=gr(d);let f=!1;D.includes("deep clean")||D.includes("feeding station")?f=u.dayOfWeekIndex===6:D.includes("recycling")?f=u.dayOfWeekIndex===3&&Ft("recycling",u.year,u.month,u.day):D.includes("waste")?f=u.dayOfWeekIndex===3&&Ft("waste",u.year,u.month,u.day):D.includes("basement")?f=u.dayOfWeekIndex===5:S.frequency==="daily"?f=!0:S.frequency==="weekly"?f=u.dayOfWeekIndex===S.dayOfWeek:S.frequency==="biweekly"&&(f=u.dayOfWeekIndex===S.dayOfWeek&&Ft(N,u.year,u.month,u.day));const k=dr(u.dateKey,d.index_,d.task||((w=d.row)==null?void 0:w[0])),W=(k==null?void 0:k.done)||(k==null?void 0:k.who);if(!f&&!W)return;s++;const z=k==null?void 0:k.done,O=k==null?void 0:k.who;if(z&&i++,O){const F=ke(O);F&&c[F.name]&&(c[F.name].total++,z&&c[F.name].done++)}})})});const m=s>0?Math.round(i/s*100):0;return{totalScheduled:s,totalCompleted:i,completionRate:m,assigneeCounts:c}},[bo,we,ut,x,ke]),qn=I.useMemo(()=>x.filter(s=>{const i=(s.name||"").toLowerCase().trim(),c=String(s.role||"").toLowerCase();return!(i==="thom"||i==="meghan"||c.includes("overlord")||c.includes("overseer")||c.includes("parent"))}).map(s=>{const i=Ir.assigneeCounts[s.name]||{total:0,done:0},c=i.total>0?Math.round(i.done/i.total*100):0;return{...s,done:i.done,total:i.total,pct:c}}).sort((s,i)=>i.done!==s.done?i.done-s.done:i.pct-s.pct),[x,Ir]),Qr=I.useMemo(()=>qn.length===0||qn[0].done===0?null:qn[0],[qn]),Ra=()=>{ct===0?(Br(11),Tn(s=>s-1)):Br(s=>s-1)},Wl=()=>{ct===11?(Br(0),Tn(s=>s+1)):Br(s=>s+1)},Fl=()=>{const s=ks();Tn(s.todayYear),Br(s.todayMonth),tn(s.dateKey)};I.useEffect(()=>{if(mt==="month"){const s=ks();Tn(s.todayYear),Br(s.todayMonth),tn(s.dateKey),setTimeout(()=>{const i=document.getElementById("active-calendar-week");i&&i.scrollIntoView({behavior:"smooth",block:"center"})},50)}},[mt]);const xn=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans","data-source-loc":"weekly_chores_household_hub.tsx:4921:5","data-source-comp":"App",children:[Ls&&n.jsxs("div",{className:"no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all","data-source-loc":"weekly_chores_household_hub.tsx:4923:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4924:11","data-source-comp":"App",children:[n.jsx(Tu,{className:"w-4 h-4 text-emerald-200"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4926:13","data-source-comp":"App",children:Ls})]}),n.jsx("button",{onClick:()=>ge(null),className:"text-emerald-100 hover:text-white","data-source-loc":"weekly_chores_household_hub.tsx:4928:11","data-source-comp":"App",children:n.jsx(Qt,{className:"w-4 h-4"})})]}),n.jsxs("header",{className:"no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30","data-source-loc":"weekly_chores_household_hub.tsx:4933:7","data-source-comp":"App",children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4934:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4935:11","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:4936:13","data-source-comp":"App",children:n.jsx(Du,{className:"w-5 h-5"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4939:13","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4940:15","data-source-comp":"App",children:[n.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4941:17","data-source-comp":"App",children:"Chore Schedule"}),n.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4942:17","data-source-comp":"App",children:"Monthly Template & Sync"})]}),n.jsxs("p",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4946:15","data-source-comp":"App",children:["Interactive Chore Calendar w/ Printable Sheet • Week of ",xt]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:4952:11","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4953:13","data-source-comp":"App",children:[n.jsx("button",{onClick:Ra,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Previous Month","data-source-loc":"weekly_chores_household_hub.tsx:4954:15","data-source-comp":"App",children:n.jsx(ju,{className:"w-4 h-4"})}),n.jsxs("div",{className:"px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none","data-source-loc":"weekly_chores_household_hub.tsx:4961:15","data-source-comp":"App",children:[xn[ct]," ",kt]}),n.jsx("button",{onClick:Wl,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Next Month","data-source-loc":"weekly_chores_household_hub.tsx:4964:15","data-source-comp":"App",children:n.jsx(tp,{className:"w-4 h-4"})}),n.jsx("button",{onClick:Fl,className:"ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:4971:15","data-source-comp":"App",children:"Today"})]}),n.jsxs("button",{onClick:()=>ho(!0),className:"flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:4978:13","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4983:15","data-source-comp":"App",children:"Auto-Assign"})]})]})]}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm","data-source-loc":"weekly_chores_household_hub.tsx:4987:9","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4988:11","data-source-comp":"App",children:[n.jsxs("button",{onClick:()=>Nr("month"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${mt==="month"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4989:13","data-source-comp":"App",children:[n.jsx(ep,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4995:15","data-source-comp":"App",children:"Monthly Calendar"})]}),n.jsxs("button",{onClick:()=>Nr("matrix"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${mt==="matrix"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4997:13","data-source-comp":"App",children:[n.jsx(op,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5003:15","data-source-comp":"App",children:"Weekly Schedule"})]}),n.jsxs("button",{onClick:()=>Nr("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${mt==="stats"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5005:13","data-source-comp":"App",children:[n.jsx(Au,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5011:15","data-source-comp":"App",children:"Leaderboard & Stats"})]}),n.jsxs("button",{onClick:()=>Nr("roster"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${mt==="roster"?"bg-indigo-600 text-white shadow-sm":"text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5013:13","data-source-comp":"App",children:[n.jsx(ya,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5021:15","data-source-comp":"App",children:["Household Hub (",x.length,")"]})]})]})})]}),n.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6","data-source-loc":"weekly_chores_household_hub.tsx:5026:7","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5026:68","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5026:178","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:5026:229","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5026:365","data-source-comp":"App",children:"Household Roster:"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5026:401","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5026:454","data-source-comp":"App",children:"Supreme Overlords:"}),x.filter(s=>s.active!==!1&&(s.role==="Supreme Overlord"||s.role==="Overseer Supreme")).map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300",style:{backgroundColor:s.bg,color:s.text},title:"Supreme Overlord (= Parent \\u2022 Included in Daily Chores)","data-source-loc":"weekly_chores_household_hub.tsx:5026:726","data-source-comp":"App",children:s.name},s.id)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:5029:95","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5029:150","data-source-comp":"App",children:"Minions:"}),x.filter(s=>s.active!==!1&&s.role!=="Supreme Overlord"&&s.role!=="Overseer Supreme").map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.type==="biweekly"?"#F8B4BD":s.type==="casual"?"#A6D2ED":"#E2E8F0"},title:`${s.name} (${s.residency} Minion = Kid)`,"data-source-loc":"weekly_chores_household_hub.tsx:5029:413","data-source-comp":"App",children:s.name},s.id))]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5033:89","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:5033:171","data-source-comp":"App",children:[n.jsx("span",{className:"w-4 text-center shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5033:253","data-source-comp":"App",children:"🐾"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5033:316","data-source-comp":"App",children:'"The Herd":'})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5033:352","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5033:405","data-source-comp":"App",children:"Dogs:"}),ye.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("dog")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:5033:633","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:5037:92","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200","data-source-loc":"weekly_chores_household_hub.tsx:5037:147","data-source-comp":"App",children:"Cats:"}),ye.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:5037:378","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),ye.some(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat"))&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:5041:221","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200","data-source-loc":"weekly_chores_household_hub.tsx:5041:276","data-source-comp":"App",children:"Other Pets:"}),ye.filter(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:5041:558","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`))]})]})]})]}),n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5045:114","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-6","data-source-loc":"weekly_chores_household_hub.tsx:5045:253","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5045:294","data-source-comp":"App",children:[n.jsx("p",{className:"text-xs text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5045:299","data-source-comp":"App",children:"Month Overview"}),n.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5045:367","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xl font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5045:417","data-source-comp":"App",children:[Ir.totalCompleted," / ",Ir.totalScheduled]}),n.jsx("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5045:536","data-source-comp":"App",children:"completed"})]})]}),n.jsxs("div",{className:"hidden sm:block w-36","data-source-loc":"weekly_chores_household_hub.tsx:5045:605","data-source-comp":"App",children:[n.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5045:643","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5045:721","data-source-comp":"App",children:"Progress"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5045:742","data-source-comp":"App",children:[Ir.completionRate,"%"]})]}),n.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5045:789","data-source-comp":"App",children:n.jsx("div",{className:"bg-emerald-500 h-2 rounded-full transition-all duration-500",style:{width:`${Ir.completionRate}%`},"data-source-loc":"weekly_chores_household_hub.tsx:5045:859","data-source-comp":"App"})})]})]}),n.jsxs("div",{className:"flex items-center gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5047:30","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5047:79","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:5047:191","data-source-comp":"App"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5047:258","data-source-comp":"App",children:["Active Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5047:281","data-source-comp":"App",children:xt})," • ",(mn==null?void 0:mn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("button",{onClick:()=>{const s=ks(),i=Po(s.year,s.month,s.day);Hs(i),Da(),Nr("matrix")},className:"px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition",title:`Sync and distribute chores for current week (${xt})`,"data-source-loc":"weekly_chores_household_hub.tsx:5047:452","data-source-comp":"App",children:"Sync & Distribute Week"})]})]}),mt==="month"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5053:285","data-source-comp":"App",children:[n.jsx("div",{className:"grid grid-cols-7 gap-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5053:312","data-source-comp":"App",children:Jt.map((s,i)=>n.jsxs("div",{className:"py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5053:394","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5055:10","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] font-normal opacity-90 hidden sm:inline","data-source-loc":"weekly_chores_household_hub.tsx:5055:33","data-source-comp":"App",children:["Day ",i+1]})]},s.name))}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5055:141","data-source-comp":"App",children:bo.map((s,i)=>{const c=Wn(s),m=s[0].dateKey===At.dateKey;return n.jsxs("div",{id:c?"active-calendar-week":void 0,className:`bg-white rounded-xl border transition-all ${c?"border-rose-400 ring-2 ring-rose-200 shadow-md":"border-slate-200 shadow-sm hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5058:16","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5058:252","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5058:377","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5058:418","data-source-comp":"App",children:["Week ",i+1]}),n.jsx("span",{className:"text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5058:494","data-source-comp":"App",children:"•"}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5058:544","data-source-comp":"App",children:[s[0].month+1,"/",s[0].day," – ",s[6].month+1,"/",s[6].day]}),m&&n.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300","data-source-loc":"weekly_chores_household_hub.tsx:5058:688","data-source-comp":"App",children:"Current Week"}),(()=>{const p=Ru(s,Be);return p?n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeBg}`,"data-source-loc":"weekly_chores_household_hub.tsx:5061:18","data-source-comp":"App",children:p.text}):null})(),c?n.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300","data-source-loc":"weekly_chores_household_hub.tsx:5062:24","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-600","data-source-loc":"weekly_chores_household_hub.tsx:5062:173","data-source-comp":"App"}),"Live Synced with Sheet"]}):n.jsx("button",{onClick:()=>Hs(s),className:"text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5062:262","data-source-comp":"App",children:"Set as Sheet Week"})]}),n.jsxs("div",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5062:456","data-source-comp":"App",children:[s.reduce((p,u)=>{const d=we.filter(y=>{var w,N;return(N=(w=ut[u.dateKey])==null?void 0:w[y.index_])==null?void 0:N.done}).length;return p+d},0)," ","chores completed"]})]}),n.jsx("div",{className:"grid grid-cols-7 divide-x divide-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5068:48","data-source-comp":"App",children:s.map((p,u)=>{const{dateKey:d,day:y,isCurrentMonth:w}=p,N=we.filter(f=>{var k,W,z,O,F,Q,Z,he,pe,Ie,We,je,ve,Pe,st,et,_t,Dt,tt,Us,Jo,Xo,Vs;const So=gr(f),$n=(f.task||((k=f.row)==null?void 0:k[0])||"").toLowerCase();if($n.includes("deep clean")||$n.includes("feeding station")){const nt=u===6,Rt=((z=(W=ut[d])==null?void 0:W[f.index_])==null?void 0:z.done)||((F=(O=ut[d])==null?void 0:O[f.index_])==null?void 0:F.who);if(!nt&&!Rt)return!1}else if($n.includes("recycling")){const nt=u===3&&Ft("recycling",p.year,p.month,p.day),Rt=((Z=(Q=ut[d])==null?void 0:Q[f.index_])==null?void 0:Z.done)||((pe=(he=ut[d])==null?void 0:he[f.index_])==null?void 0:pe.who);if(!nt&&!Rt)return!1}else if($n.includes("waste")){const nt=u===3&&Ft("waste",p.year,p.month,p.day),Rt=((We=(Ie=ut[d])==null?void 0:Ie[f.index_])==null?void 0:We.done)||((ve=(je=ut[d])==null?void 0:je[f.index_])==null?void 0:ve.who);if(!nt&&!Rt)return!1}else if($n.includes("basement")){const nt=u===5,Rt=((st=(Pe=ut[d])==null?void 0:Pe[f.index_])==null?void 0:st.done)||((_t=(et=ut[d])==null?void 0:_t[f.index_])==null?void 0:_t.who);if(!nt&&!Rt)return!1}else if(So.frequency==="weekly"){const nt=u===So.dayOfWeek,Rt=((st=(Pe=ut[d])==null?void 0:Pe[f.index_])==null?void 0:st.done)||((_t=(et=ut[d])==null?void 0:et[f.index_])==null?void 0:_t.who);if(!nt&&!Rt)return!1}else if(So.frequency==="biweekly"){const nt=u===So.dayOfWeek&&Ft(f.task||((Dt=f.row)==null?void 0:Dt[0]),p.year,p.month,p.day),Rt=((Us=(tt=ut[d])==null?void 0:tt[f.index_])==null?void 0:Us.done)||((Xo=(Jo=ut[d])==null?void 0:Jo[f.index_])==null?void 0:Xo.who);if(!nt&&!Rt)return!1}if(Xt==="ALL")return!0;const Hn=(Vs=ut[d])==null?void 0:Vs[f.index_],yn=String((Hn==null?void 0:Hn.who)||"").toLowerCase(),zn=x.find(nt=>nt.id===Xt||nt.name===Xt),Ys=((zn==null?void 0:zn.name)||Xt).toLowerCase();if(lo(f.row[1]))return ue.some(nt=>nt.toLowerCase()===Ys);if(!(Hn!=null&&Hn.who))return!1;if(yn===Ys||(yn==="all kids"||yn==="each child")&&ue.some(nt=>nt.toLowerCase()===Ys)||(yn==="all non-casual"||yn==="all non casual")&&zn&&zn.type!=="casual"||(yn==="parents"||yn==="parents only")&&zn&&String(zn.role||"").toLowerCase().includes("parent"))return!0;const Zo=ke(Hn.who);return Hn.who===Xt||(Zo==null?void 0:Zo.id)===Xt||(Zo==null?void 0:Zo.name)===Xt}),D=N.filter(f=>{var k,W;return(W=(k=ut[d])==null?void 0:k[f.index_])==null?void 0:W.done}).length,S=N.length>0&&D===N.length;return n.jsxs("div",{className:`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${w?"bg-white":"bg-slate-50/80 border-dashed border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5131:18","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5131:198","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5131:203","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${w?"bg-slate-100 text-slate-800":"bg-slate-200/70 text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5131:261","data-source-comp":"App",children:y}),n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5131:450","data-source-comp":"App",children:[N.length>0&&n.jsxs("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded ${S?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5131:516","data-source-comp":"App",children:[D,"/",N.length]}),n.jsx("button",{onClick:()=>rn(d),className:"p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition",title:"Open day details","data-source-loc":"weekly_chores_household_hub.tsx:5131:703","data-source-comp":"App",children:n.jsx(Ko,{className:"w-2.5 h-2.5"})})]})]}),(()=>{const f=jn(p.year,p.month,p.day);return f.isArrivalDay?n.jsx("div",{className:"text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay","data-source-loc":"weekly_chores_household_hub.tsx:5134:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5134:263","data-source-comp":"App",children:"🏠 Cadence & Mason arrive 5 PM"})}):f.isDepartureDay?n.jsx("div",{className:"text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason depart today at 5:00 PM","data-source-loc":"weekly_chores_household_hub.tsx:5136:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5136:241","data-source-comp":"App",children:"👋 Cadence & Mason leave 5 PM"})}):null})(),n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5139:16","data-source-comp":"App",children:[N.slice(0,3).map(f=>{var k,W;const z=dr(d,f.index_,f.task||f.row[0]),O=ke(z.who),F=gr(f);return n.jsxs("div",{className:`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${z.done?"bg-emerald-50/70 border-emerald-200 text-slate-500":F.frequency==="weekly"?"bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs":"bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5144:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-1 w-full","data-source-loc":"weekly_chores_household_hub.tsx:5144:370","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5144:434","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Vr(d,f.index_,{done:!z.done}),className:"shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5144:490","data-source-comp":"App",children:z.done?n.jsx(ud,{className:"w-3.5 h-3.5 text-emerald-600"}):n.jsx(Eu,{className:"w-3.5 h-3.5 hover:text-slate-600"})}),n.jsx("span",{className:`truncate text-[10px] font-medium leading-tight ${z.done?"line-through":""}`,"data-source-loc":"weekly_chores_household_hub.tsx:5146:237","data-source-comp":"App",children:f.task||f.row[0]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5146:376","data-source-comp":"App",children:[F.frequency==="weekly"&&n.jsx("span",{className:"text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase",title:"Once-a-week task","data-source-loc":"weekly_chores_household_hub.tsx:5146:458","data-source-comp":"App",children:"1x/wk"}),pr(f.task||f.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold",style:{backgroundColor:((k=ke(pr(f.task||f.row[0])))==null?void 0:k.bg)||"#FCE7F3",color:((W=ke(pr(f.task||f.row[0])))==null?void 0:W.text)||"#BE185D"},"data-source-loc":"weekly_chores_household_hub.tsx:5146:643","data-source-comp":"App",children:pr(f.task||f.row[0])}):lo(f.task||f.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700",title:"Each child cleans own bedroom","data-source-loc":"weekly_chores_household_hub.tsx:5149:111","data-source-comp":"App",children:"Own Rooms"}):z.who?n.jsx("span",{className:"shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold",style:{backgroundColor:(O==null?void 0:O.bg)||"#F1F5F9",color:(O==null?void 0:O.text)||"#475569"},title:String(z.who),"data-source-loc":"weekly_chores_household_hub.tsx:5149:275","data-source-comp":"App",children:String(z.who).slice(0,2)}):n.jsx("button",{onClick:()=>rn(d),className:"shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5",title:"Assign person","data-source-loc":"weekly_chores_household_hub.tsx:5152:85","data-source-comp":"App",children:"+"})]})]}),lo(f.task||f.row[0])&&!pr(f.task||f.row[0])&&n.jsx("div",{className:"pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5152:347","data-source-comp":"App",children:Gr(d).map(Q=>{var Z;const he=!!((Z=z.kidsDone)!=null&&Z[Q]),pe=ke(Q);return n.jsxs("button",{type:"button",onClick:Ie=>{Ie.stopPropagation(),_o(d,f.index_,Q)},className:`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${he?"bg-emerald-100 text-emerald-800 border-emerald-300 line-through":"bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`,title:`Click to toggle ${Q}'s room`,"data-source-loc":"weekly_chores_household_hub.tsx:5156:22","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full inline-block",style:{backgroundColor:(pe==null?void 0:pe.color)||"#888"},"data-source-loc":"weekly_chores_household_hub.tsx:5159:318","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5161:20","data-source-comp":"App",children:Q}),he?"✓":""]},Q)})})]},f.index_)}),N.length>3&&n.jsxs("button",{onClick:()=>rn(d),className:"w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:39","data-source-comp":"App",children:["+",N.length-3," more"]}),N.length===0&&n.jsx("div",{className:"text-[10px] text-slate-400 italic py-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5163:277","data-source-comp":"App",children:"No chores"})]})]}),n.jsx("button",{onClick:()=>rn(d),className:"mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition","data-source-loc":"weekly_chores_household_hub.tsx:5163:373","data-source-comp":"App",children:"Manage Day"})]},d)})})]},i)})})]}),mt==="matrix"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5165:50","data-source-comp":"App",children:[n.jsxs("div",{id:"printable-schedule-card",className:"bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5165:77","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5165:193","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5165:311","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5165:316","data-source-comp":"App",children:[n.jsx("h2",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5165:357","data-source-comp":"App",children:"Weekly Schedule"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5165:428","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:5165:571","data-source-comp":"App"}),"Active Week: ",xt," • ",(mn==null?void 0:mn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5165:813","data-source-comp":"App",children:"Single-page Letter Landscape Layout - Printed.pdf"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5165:921","data-source-comp":"App",children:[n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5165:972","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search schedule chores...",value:Ar,onChange:s=>Na(s.target.value),className:"pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5165:1073","data-source-comp":"App"})]}),n.jsx("button",{onClick:()=>{const s=Wt(xt||Ke)||{year:2026,month:9,day:19},i=Po(s.year,s.month,s.day);Ct(c=>{const m={...c};return i.forEach(p=>{m[p.dateKey]={}}),m}),ne({}),Ee>=0&&Ne&&Array.isArray(Ne.data)&&Ne.data.forEach(c=>{if(c.index_>=5&&c.index_<=9){const m=new Array(15).fill(null);m[0]=c.row[0];for(let p=0;p<7;p++)m[1+p*2]="",m[2+p*2]=!1;_(Ee,c.index_,m)}else if(c.index_>=13&&c.index_<=15){const m=new Array(15).fill(void 0);m[9]="Who: _____________________",m[14]=!1,_(Ee,c.index_,m)}}),ge("Cleared daily & weekly WHO/DONE assignments for a blank printable template!"),setTimeout(()=>ge(null),3e3)},className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs",title:"Clear WHO/DONE cells to print a blank fill-in sheet","data-source-loc":"weekly_chores_household_hub.tsx:5165:1342","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:238","data-source-comp":"App",children:"Clear Names (Blank Sheet)"})}),n.jsxs("button",{onClick:Da,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs",title:"Automatically distribute chores across active members for current week","data-source-loc":"weekly_chores_household_hub.tsx:5196:285","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:632","data-source-comp":"App",children:"Distribute Current Week"})]}),n.jsx("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer",title:"Print 1-page Letter Landscape schedule","data-source-loc":"weekly_chores_household_hub.tsx:5196:677","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:924","data-source-comp":"App",children:"🖨️ Print Schedule"})})]})]}),n.jsx("div",{className:"overflow-x-auto","data-source-loc":"weekly_chores_household_hub.tsx:5196:976","data-source-comp":"App",children:n.jsxs("table",{id:"printable-schedule-table",className:"w-full table-fixed border-collapse text-left text-xs",style:{borderColor:"#C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1009","data-source-comp":"App",children:[n.jsxs("colgroup",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:1146","data-source-comp":"App",children:[n.jsx("col",{style:{width:"21%"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1156","data-source-comp":"App"}),Jt.map(s=>n.jsxs(io.Fragment,{children:[n.jsx("col",{style:{width:"7.5%"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1247","data-source-comp":"App"}),n.jsx("col",{style:{width:"3.78%"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1280","data-source-comp":"App"})]},`col-${s.name}`))]}),n.jsxs("thead",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:1344","data-source-comp":"App",children:[n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"3px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1351","data-source-comp":"App",children:n.jsx("th",{colSpan:15,className:"py-2 px-3 text-left text-xl font-bold text-white tracking-tight","data-source-loc":"weekly_chores_household_hub.tsx:5196:1429","data-source-comp":"App",children:"Chore Schedule"})}),n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5196:1546","data-source-comp":"App",children:[n.jsxs("th",{className:"p-0 align-top bg-white",style:{borderRight:"2px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1550","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5196:1634","data-source-comp":"App",children:"FOR THE WEEK OF:"}),n.jsx("div",{className:"text-lg font-bold py-1.5 text-center text-white",style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5196:1767","data-source-comp":"App",children:(()=>{const s=Wt(xt||Ke);return s?`${s.month+1}/${s.day}/${s.year}`:xt||Ke||"10/19/2026"})()})]}),Jt.map((s,i)=>{const c=Wt(xt||Ke)||{year:2026,month:9,day:19},p=new Date(c.year,c.month,c.day+i).getDate();return n.jsxs("th",{colSpan:2,className:"py-1.5 px-1 text-center text-white font-bold align-middle",style:{backgroundColor:s.color,borderRight:i<6?"2px solid #FFFFFF":"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5207:16","data-source-comp":"App",children:[n.jsx("div",{className:"text-xs font-bold uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5210:12","data-source-comp":"App",children:s.short.toUpperCase()}),n.jsx("div",{className:"text-sm font-bold leading-tight mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5210:101","data-source-comp":"App",children:p})]},s.name)})]}),n.jsxs("tr",{className:"bg-white text-[8.5px] font-bold text-slate-900",style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5211:15","data-source-comp":"App",children:[n.jsx("th",{className:"py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]","data-source-loc":"weekly_chores_household_hub.tsx:5211:156","data-source-comp":"App",children:"TASK"}),Jt.map(s=>n.jsxs(io.Fragment,{children:[n.jsx("th",{className:"py-0.5 px-1 text-center uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5211:313","data-source-comp":"App",children:"WHO"}),n.jsx("th",{className:"py-0.5 px-1 text-center font-bold",title:"Done","data-source-loc":"weekly_chores_household_hub.tsx:5211:381","data-source-comp":"App",children:n.jsx(ud,{className:"w-3 h-3 mx-auto text-slate-800"})})]},`sub-${s.name}`))]})]}),n.jsxs("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5211:542","data-source-comp":"App",children:[Ge.filter(s=>!(Ar&&!s.isSectionHeader&&!(s.task||"").toLowerCase().includes(Ar.toLowerCase())||!s.isSectionHeader&&An(s.task))).map((s,i)=>{var c,m;if(s.isSectionHeader)return s.headerType==="daily"?n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"1.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5223:20","data-source-comp":"App",children:n.jsx("td",{colSpan:15,className:"py-1.5 px-3 font-bold text-sm text-white","data-source-loc":"weekly_chores_household_hub.tsx:5223:136","data-source-comp":"App",children:"Daily Tasks"})},`header-daily-${s.index_}`):n.jsxs("tr",{style:{backgroundColor:"#002060",borderTop:"1.5px solid #002060",borderBottom:"1.5px solid #C55A11"},className:"text-white font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5225:18","data-source-comp":"App",children:[n.jsx("td",{className:"py-1.5 px-3 text-sm font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5225:202","data-source-comp":"App",children:"Weekly Tasks"}),n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5225:265","data-source-comp":"App",children:"Description"}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5225:341","data-source-comp":"App",children:"Initials / Assigned"})]},`header-weekly-${s.index_}`);const p=s,u=p.task||((c=p.row)==null?void 0:c[0])||"Chore",d=String(u).split(/\r?\n/).map(W=>W.trim()).filter(Boolean),y=d[0]||u,w=d.slice(1).join(" "),N=gr(p),D=pr(u),S=co(u)&&!D,f=hd(u,N),k=p.notes&&String(p.notes).trim()?String(p.notes).trim():(m=p.row)!=null&&m[1]&&(S||f)&&!x.some(W=>W.name.toLowerCase()===String(p.row[1]).trim().toLowerCase())?String(p.row[1]).trim():Pu(u)?"(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away":lo(u)?"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum":Bu(u)?"- Pick Up, Organize, Dust & Vacuum":qu(u)?"- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste":u.toLowerCase().includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":u.toLowerCase().includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"";return n.jsxs("tr",{className:"bg-white hover:bg-slate-50/60 transition-colors",style:{borderBottom:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5253:16","data-source-comp":"App",children:[n.jsxs("td",{className:"py-1.5 px-2 text-slate-900 bg-white align-middle",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5253:164","data-source-comp":"App",children:[n.jsx("div",{className:"leading-tight text-slate-900 font-semibold text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5253:309","data-source-comp":"App",children:y}),w&&n.jsx("div",{className:"text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight","data-source-loc":"weekly_chores_household_hub.tsx:5253:411","data-source-comp":"App",children:w})]}),S?(()=>{const W=ja(p.index_,u),z=[{code:"SG",name:"Sydney"},{code:"CV",name:"Cadence"},{code:"MV",name:"Mason"},{code:"KV",name:"Koda"},{code:"KG",name:"Keyanna"}];return n.jsxs(io.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5262:34","data-source-comp":"App",children:k}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5262:205","data-source-comp":"App",children:n.jsx("div",{className:"flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5262:314","data-source-comp":"App",children:z.map(O=>{const F=!!W[O.name];return n.jsxs("button",{type:"button",onClick:()=>El(p.index_,O.name,u),className:"inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700",title:`${O.name} (${O.code}) — Click to toggle`,"data-source-loc":"weekly_chores_household_hub.tsx:5264:20","data-source-comp":"App",children:[n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5264:262","data-source-comp":"App",children:[O.code,":"]}),n.jsx("span",{className:`inline-block min-w-[26px] text-center border-b border-slate-700 ${F?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5264:284","data-source-comp":"App",children:F?"✓":"____"})]},O.code)})})})]})})():f?(()=>{const W=Fn(p.index_,u),z=W.who&&!W.who.startsWith("Who:")&&!W.who.startsWith("Assigned:")?W.who:"";return n.jsxs(io.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5269:34","data-source-comp":"App",children:k}),n.jsx("td",{colSpan:4,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5269:205","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-baseline gap-1.5 text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5269:316","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-900 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5269:373","data-source-comp":"App",children:"Who:"}),n.jsxs("select",{value:z,onChange:O=>On(p.index_,u,{who:O.target.value}),className:"flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5269:440","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5271:168","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5271:194","data-source-comp":"App",children:x.filter(O=>O.type==="regular").map(O=>n.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5271:290","data-source-comp":"App",children:O.name},O.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5271:354","data-source-comp":"App",children:x.filter(O=>O.type==="biweekly").map(O=>n.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5271:451","data-source-comp":"App",children:O.name},O.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5271:515","data-source-comp":"App",children:x.filter(O=>O.type==="casual").map(O=>n.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5271:607","data-source-comp":"App",children:O.name},O.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5271:671","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5271:704","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5271:758","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5271:800","data-source-comp":"App",children:"Parents"})]})]})]})}),n.jsx("td",{colSpan:2,className:"py-1.5 px-2 align-middle bg-white text-left",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5271:871","data-source-comp":"App",children:n.jsxs("button",{type:"button",onClick:()=>On(p.index_,u,{done:!W.done}),className:"inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full",title:"Click to toggle Done","data-source-loc":"weekly_chores_household_hub.tsx:5271:988","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5273:152","data-source-comp":"App",children:"Done:"}),n.jsx("span",{className:`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${W.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5273:170","data-source-comp":"App",children:W.done?"✓":"______"})]})})]})})():Jt.map((W,z)=>{var O,F,Q,Z;const he=1+z*2,pe=2+z*2,Ie=Wt(Ke)||{year:2026,month:9,day:19},We=new Date(Ie.year,Ie.month,Ie.day+z),je=Dn(We.getFullYear(),We.getMonth(),We.getDate()),ve=dr(je,p.index_,u),Pe=((O=P[p.index_])==null?void 0:O.row)||(u?(F=P[u.toLowerCase().trim()])==null?void 0:F.row:null),st=(Pe==null?void 0:Pe[he])!==void 0?Pe[he]:(Q=p.row)==null?void 0:Q[he],et=(Pe==null?void 0:Pe[pe])!==void 0?Pe[pe]:(Z=p.row)==null?void 0:Z[pe],_t=st!=null?String(st).trim():ve!=null&&ve.who?String(ve.who).trim():"",Dt=et!=null?et===!0||String(et).toLowerCase()==="true":!!(ve!=null&&ve.done);return n.jsxs(io.Fragment,{children:[n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:"1px solid #94A3B8"},"data-source-loc":"weekly_chores_household_hub.tsx:5292:49","data-source-comp":"App",children:n.jsxs("select",{value:_t,onChange:tt=>{vo(p.index_,z,"who",tt.target.value,u)},className:"w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5292:148","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5294:149","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5294:175","data-source-comp":"App",children:x.filter(tt=>tt.type==="regular").map(tt=>n.jsx("option",{value:tt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5294:271","data-source-comp":"App",children:tt.name},tt.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5294:335","data-source-comp":"App",children:x.filter(tt=>tt.type==="biweekly").map(tt=>n.jsx("option",{value:tt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5294:432","data-source-comp":"App",children:tt.name},tt.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5294:496","data-source-comp":"App",children:x.filter(tt=>tt.type==="casual").map(tt=>n.jsx("option",{value:tt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5294:588","data-source-comp":"App",children:tt.name},tt.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5294:652","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5294:685","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5294:731","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5294:785","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5294:831","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5294:873","data-source-comp":"App",children:"Parents"})]}),_t&&!x.some(tt=>tt.name===_t)&&!["Non-Casual","All Non-Casual","Each Child","All Kids","Parents"].includes(_t)&&n.jsx("option",{value:_t,"data-source-loc":"weekly_chores_household_hub.tsx:5294:1073","data-source-comp":"App",children:_t})]})}),n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:z<6?"1.5px solid #475569":"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5294:1128","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:()=>{vo(p.index_,z,"done",!Dt,u)},className:"w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer",title:Dt?"Mark as not done":"Mark as done","data-source-loc":"weekly_chores_household_hub.tsx:5294:1264","data-source-comp":"App",children:Dt?n.jsx("span",{className:"text-emerald-700 font-black text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5296:196","data-source-comp":"App",children:"✓"}):n.jsx("span",{className:"text-slate-300 print:hidden text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5296:270","data-source-comp":"App",children:"☐"})})})]},W.name)})]},`row-${p.index_}-${u}`)}),n.jsxs("tr",{className:"h-14","data-source-loc":"weekly_chores_household_hub.tsx:5299:11","data-source-comp":"App",children:[n.jsx("td",{style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5299:32","data-source-comp":"App"}),Jt.map(s=>n.jsx("td",{colSpan:2,style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5299:98","data-source-comp":"App"},`band-${s.name}`))]}),n.jsxs("tr",{className:"bg-white text-slate-900",style:{borderTop:"1px solid #475569",borderBottom:"2.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5301:11","data-source-comp":"App",children:[n.jsx("td",{className:"py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5301:131","data-source-comp":"App",children:"Weekly Sign-Off"}),n.jsx("td",{colSpan:12,className:"py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5301:305","data-source-comp":"App",children:"Parent Initials:"}),n.jsx("td",{colSpan:2,className:"py-2 px-2 text-center bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5301:469","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:Ur,className:"inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900",title:"Click to toggle Parent Sign-Off","data-source-loc":"weekly_chores_household_hub.tsx:5301:573","data-source-comp":"App",children:n.jsx("span",{className:`inline-block min-w-[56px] border-b border-slate-800 ${$s.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5301:782","data-source-comp":"App",children:$s.done?"✓ TV / MV":"_________"})})})]})]})]})})]}),n.jsxs("div",{className:"no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5301:1047","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:1119","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:1204","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-indigo-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:1311","data-source-comp":"App",children:"HOUSEHOLD ROSTER"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5301:1405","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5301:1490","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:1562","data-source-comp":"App",children:[n.jsx("strong",{className:"text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:1567","data-source-comp":"App",children:"• Full-Time:"})," ",x.filter(s=>s.type==="regular").map(s=>s.name).join(", ")||"Sydney, Thom, Meghan"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:1746","data-source-comp":"App",children:[n.jsx("strong",{className:"text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:1751","data-source-comp":"App",children:"• Bi-Weekly:"})," ",x.filter(s=>s.type==="biweekly").map(s=>s.name).join(" & ")||"Cadence & Mason"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:1926","data-source-comp":"App",children:[n.jsx("strong",{className:"text-sky-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:1931","data-source-comp":"App",children:"• Casual:"})," ",x.filter(s=>s.type==="casual").map(s=>s.name).join(", ")||"Koda, Keyanna"]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:2109","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:2194","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:2301","data-source-comp":"App",children:"BI-WEEKLY SCHEDULE"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5301:2395","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5301:2480","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:2552","data-source-comp":"App",children:"• Cadence & Mason: Alternating bi-weekly schedule"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:2621","data-source-comp":"App",children:"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:2709","data-source-comp":"App",children:"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:2797","data-source-comp":"App",children:"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:2900","data-source-comp":"App",children:"• On-weeks (Starts Oct 19): Included in daily chore rotations"})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:2993","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:3078","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:3185","data-source-comp":"App",children:'PET CARE ROUTINE ("FEED THE HERD")'}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5301:3300","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5301:3385","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:3457","data-source-comp":"App",children:"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:3548","data-source-comp":"App",children:"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:3640","data-source-comp":"App",children:"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:3741","data-source-comp":"App",children:"• Routine: Daily feeding, fresh water & station cleanup"})]})]})]})]}),mt==="stats"&&n.jsxs("div",{className:"max-w-4xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5301:3867","data-source-comp":"App",children:[n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5","data-source-loc":"weekly_chores_household_hub.tsx:5301:3912","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5301:3984","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:4059","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5301:4110","data-source-comp":"App",children:"Scheduled Chores"}),n.jsx(Du,{className:"w-4 h-4 text-slate-400"})]}),n.jsx("div",{className:"text-2xl font-bold text-slate-900 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:4241","data-source-comp":"App",children:Ir.totalScheduled}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5301:4330","data-source-comp":"App",children:["Total across ",xn[ct]," ",kt]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5301:4447","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:4522","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5301:4573","data-source-comp":"App",children:"Completed Chores"}),n.jsx(Tu,{className:"w-4 h-4 text-emerald-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-emerald-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:4709","data-source-comp":"App",children:Ir.totalCompleted}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5301:4800","data-source-comp":"App",children:[Ir.completionRate,"% completion rate"]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5301:4897","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:4972","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5301:5023","data-source-comp":"App",children:"Active Tasks"}),n.jsx(Sl,{className:"w-4 h-4 text-indigo-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-indigo-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:5151","data-source-comp":"App",children:we.length}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5301:5232","data-source-comp":"App",children:"Daily & weekly routines"})]}),n.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5301:5308","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5301:5422","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-bold text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5301:5473","data-source-comp":"App",children:"Current Top Performer"}),n.jsx(id,{className:"w-4 h-4 text-amber-600"})]}),n.jsx("div",{className:"text-xl font-black text-amber-950 mt-2 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5301:5602","data-source-comp":"App",children:Qr?Qr.name:"TBD"}),n.jsx("p",{className:"text-xs text-amber-800 mt-1 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5301:5715","data-source-comp":"App",children:Qr?`${Qr.done} chores finished`:"Track chores to rank"})]})]}),n.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:5301:5863","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5301:5977","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5301:6088","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner","data-source-loc":"weekly_chores_household_hub.tsx:5301:6129","data-source-comp":"App",children:n.jsx(ap,{className:"w-6 h-6 text-amber-200"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5301:6285","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:6290","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full","data-source-loc":"weekly_chores_household_hub.tsx:5301:6331","data-source-comp":"App",children:"Monthly Incentive Prize"}),n.jsxs("span",{className:"text-xs opacity-90","data-source-loc":"weekly_chores_household_hub.tsx:5301:6464","data-source-comp":"App",children:[xn[ct]," ",kt]})]}),n.jsx("h3",{className:"text-base font-extrabold mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5301:6561","data-source-comp":"App",children:"Top Performer Reward & Recognition"})]})]}),n.jsx("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5301:6660","data-source-comp":"App",children:n.jsxs("button",{onClick:()=>{Ws(s=>!s),Ln(zo)},className:"text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5301:6701","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5304:203","data-source-comp":"App",children:Is?"Cancel Edit":"Customize Incentive"})]})})]}),Is?n.jsxs("div",{className:"pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5304:1186","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-white mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5304:1281","data-source-comp":"App",children:"Set Monthly Reward / Incentive Prize for the Top Performer:"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5304:1399","data-source-comp":"App",children:[n.jsx("input",{type:"text",value:Go,onChange:s=>Ln(s.target.value),placeholder:"e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass...",className:"flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300","data-source-loc":"weekly_chores_household_hub.tsx:5304:1427","data-source-comp":"App"}),n.jsx("button",{onClick:()=>{Go.trim()&&(Sa(Go.trim()),Ws(!1),ge(`Updated Monthly Incentive: "${Go.trim()}"`),setTimeout(()=>ge(null),3e3))},className:"px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition","data-source-loc":"weekly_chores_household_hub.tsx:5304:1732","data-source-comp":"App",children:"Save Prize"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] pt-1","data-source-loc":"weekly_chores_household_hub.tsx:5311:140","data-source-comp":"App",children:[n.jsx("span",{className:"opacity-80","data-source-loc":"weekly_chores_household_hub.tsx:5311:210","data-source-comp":"App",children:"Quick ideas:"}),n.jsx("button",{onClick:()=>Ln("$15 Allowance Bonus & Pizza Night Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5311:258","data-source-comp":"App",children:"$15 + Pizza Night"}),n.jsx("button",{onClick:()=>Ln("1-Day Chore Exemption Pass & Movie Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5311:445","data-source-comp":"App",children:"1-Day Chore Pass"}),n.jsx("button",{onClick:()=>Ln("$20 Gift Card & Weekend Treat"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5311:628","data-source-comp":"App",children:"$20 Gift Card"}),n.jsx("button",{onClick:()=>Ln("Family Ice Cream Outing of Their Choice"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5311:802","data-source-comp":"App",children:"Ice Cream Outing"})]})]}):n.jsxs("div",{className:"pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5304:320","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5304:414","data-source-comp":"App",children:[n.jsx("div",{className:"text-amber-100 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5304:441","data-source-comp":"App",children:"Incentive for Highest Monthly Chore Completions:"}),n.jsxs("div",{className:"text-sm font-black text-white flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5304:539","data-source-comp":"App",children:[n.jsx(dd,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5304:662","data-source-comp":"App",children:zo})]})]}),Qr&&n.jsxs("div",{className:"bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5304:722","data-source-comp":"App",children:[n.jsx(id,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5304:915","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-amber-100 uppercase tracking-wider font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5304:920","data-source-comp":"App",children:"Leading Candidate"}),n.jsxs("div",{className:"font-extrabold text-xs text-white","data-source-loc":"weekly_chores_household_hub.tsx:5304:1022","data-source-comp":"App",children:[Qr.name," (",Qr.done," finished • ",Qr.pct,"%)"]})]})]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5311:1004","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5311:1079","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5311:1196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5311:1201","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5311:1242","data-source-comp":"App",children:"Family Members Completion"}),n.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5311:1323","data-source-comp":"App",children:["Kids & Minions (",qn.length," Members)"]})]}),n.jsxs("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5311:1508","data-source-comp":"App",children:["Monthly Total Tracker ranked by total chores completed for ",xn[ct]," ",kt,". Kids and minions completion leaderboard competing for the monthly reward."]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5311:1748","data-source-comp":"App",children:[n.jsx(Au,{className:"w-4 h-4 text-amber-500"}),n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5311:1856","data-source-comp":"App",children:"Ranked by Monthly Completions"})]})]}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5311:1951","data-source-comp":"App",children:qn.map((s,i)=>{const c=i===0&&s.done>0,m=i===1&&s.done>0,p=i===2&&s.done>0;return n.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${c?"border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm":"border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5315:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5315:242","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5315:330","data-source-comp":"App",children:[n.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${c?"bg-amber-500 text-white shadow-xs":m?"bg-slate-300 text-slate-800":p?"bg-amber-700/80 text-white":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5315:371","data-source-comp":"App",children:c?n.jsx(id,{className:"w-4 h-4"}):`#${i+1}`}),n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5315:698","data-source-comp":"App",children:[n.jsx("span",{className:"w-3.5 h-3.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5315:739","data-source-comp":"App"}),n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5317:18","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-xs text-slate-500 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5317:95","data-source-comp":"App",children:["(",s.role," = ",s.role==="Supreme Overlord"?"Parent":"Kid",")"]}),n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.type==="biweekly"?"bg-pink-50 text-pink-700 border-pink-200":s.type==="casual"?"bg-sky-50 text-sky-700 border-sky-200":"bg-slate-100 text-slate-600 border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5317:223","data-source-comp":"App",children:s.residency}),c&&n.jsxs("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5317:516","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5317:673","data-source-comp":"App",children:"🏆"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5317:699","data-source-comp":"App",children:"Top Performer • Incentive Winner"})]})]})]}),n.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5317:773","data-source-comp":"App",children:[n.jsxs("div",{className:"text-right","data-source-loc":"weekly_chores_household_hub.tsx:5317:844","data-source-comp":"App",children:[n.jsx("span",{className:"font-extrabold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5317:872","data-source-comp":"App",children:s.done}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5317:943","data-source-comp":"App",children:[" / ",s.total," completed"]})]}),n.jsxs("span",{className:`font-black text-xs px-2 py-0.5 rounded-md ${s.pct>=80?"bg-emerald-100 text-emerald-800":s.pct>=50?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5317:1019","data-source-comp":"App",children:[s.pct,"%"]})]})]}),n.jsx("div",{className:"w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5317:1235","data-source-comp":"App",children:n.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500",style:{width:`${s.pct}%`,backgroundColor:c?"#D97706":s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5317:1310","data-source-comp":"App"})}),c&&n.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5320:36","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5320:165","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700 shrink-0"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5320:264","data-source-comp":"App",children:["Qualifying Reward: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5320:293","data-source-comp":"App",children:zo})]})]}),n.jsxs("span",{className:"font-bold text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5320:341","data-source-comp":"App",children:["Rank #1 in ",xn[ct]]})]})]},s.id)})})]})]}),mt==="roster"&&n.jsx("div",{className:"max-w-5xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5321:60","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5321:105","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5321:180","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:292","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5321:297","data-source-comp":"App",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5321:338","data-source-comp":"App",children:"Household Hub Master Data"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5321:417","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500","data-source-loc":"weekly_chores_household_hub.tsx:5321:569","data-source-comp":"App"}),"Linked: Monthly Calendar & Printable Weekly Schedule"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5321:694","data-source-comp":"App",children:"Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files."})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5321:874","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5321:925","data-source-comp":"App",children:["Selected Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:1059","data-source-comp":"App",children:xt||V.activeWeekStart})]}),n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200","data-source-loc":"weekly_chores_household_hub.tsx:5321:1136","data-source-comp":"App",children:["Kids Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:1262","data-source-comp":"App",children:Lr?"Active":"Inactive"})]}),n.jsxs("button",{type:"button",onClick:go,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer",title:"Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json","data-source-loc":"weekly_chores_household_hub.tsx:5321:1334","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:1654","data-source-comp":"App",children:"💾"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:1669","data-source-comp":"App",children:"Save as Default"})]}),n.jsxs("button",{type:"button",onClick:Uo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Download / export current configuration backup file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5321:1706","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:2008","data-source-comp":"App",children:"⬇️"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:2023","data-source-comp":"App",children:"Export Config"})]}),n.jsxs("label",{className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Import / restore a configuration file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5321:2058","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:2302","data-source-comp":"App",children:"⬆️"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5321:2317","data-source-comp":"App",children:"Import Config"}),n.jsx("input",{type:"file",accept:".json",onChange:Tl,className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5321:2343","data-source-comp":"App"})]})]})]}),n.jsxs("div",{className:"my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5321:2452","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5321:2597","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5321:2648","data-source-comp":"App",children:[n.jsx(_s,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-indigo-950","data-source-loc":"weekly_chores_household_hub.tsx:5321:2737","data-source-comp":"App",children:"Special Rules & Parameters"})]}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800","data-source-loc":"weekly_chores_household_hub.tsx:5321:2849","data-source-comp":"App",children:"Live Analytical Summary"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5321:2984","data-source-comp":"App",children:[(()=>{const s=x.filter(u=>u.active!==!1&&(u.role==="Supreme Overlord"||u.role==="Overseer Supreme")).map(u=>u.name),i=s.length>0?s.join(" & "):"None",c=x.filter(u=>u.active!==!1&&u.type==="regular").map(u=>u.name),m=x.filter(u=>u.active!==!1&&u.type==="biweekly").map(u=>u.name),p=Lr?[...c,...m]:c;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5327:22","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5327:112","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:182","data-source-comp":"App",children:"👑"}),"Supreme Overlords (Parents) & Minions (Kids)"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5327:263","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:321","data-source-comp":"App",children:i}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:364","data-source-comp":"App",children:"Supreme Overlords"}),", actively share daily chores with the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:433","data-source-comp":"App",children:"Kids"}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:464","data-source-comp":"App",children:"Minions"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:481","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:487","data-source-comp":"App",children:"Sunday Supper Rule:"})," On Sundays, ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:540","data-source-comp":"App",children:"Make Supper"})," is always assigned exclusively to ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:599","data-source-comp":"App",children:i}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:633","data-source-comp":"App"}),"They also conduct the Sunday ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:672","data-source-comp":"App",children:"Weekly Sign-Off & Inspection"}),"."]})]}),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5327:728","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-pink-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5327:816","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:884","data-source-comp":"App",children:"🏠"})," Custody Rotation: Kids Week"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5327:949","data-source-comp":"App",children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:1030","data-source-comp":"App",children:xt||V.activeWeekStart}),", Kids Week = ",n.jsx("strong",{className:Lr?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5327:1118","data-source-comp":"App",children:Lr?"Active":"Inactive"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:1258","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:1264","data-source-comp":"App",children:m.length>0?m.join(" & "):"Bi-Weekly Occupants"})," are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5327:1486","data-source-comp":"App",children:"5:00 PM"}),". ",Lr?`Chores for this week are distributed across all ${p.length} active household members (${p.join(", ")}).`:`Chores for this week are distributed among the full-time roster (${c.join(", ")}).`]})]})]})})(),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5328:16","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-amber-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5328:105","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5328:174","data-source-comp":"App",children:"🚛"})," Alternating Curbside Schedule"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5328:241","data-source-comp":"App",children:["Curbside tasks alternate bi-weekly on Thursday evenings for the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5328:367","data-source-comp":"App",children:"Full-Time"})," & ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5328:400","data-source-comp":"App",children:"Bi-Weekly"})," occupants.",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5328:441","data-source-comp":"App"}),(()=>{const s=Mt[3]||Mt[0],i=s?Ft("Curbside Waste",s.year,s.month,s.day):!1,c=s?Ft("Curbside Recycling",s.year,s.month,s.day):!0;return n.jsxs(n.Fragment,{children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5332:45","data-source-comp":"App",children:xt||V.activeWeekStart}),":",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5332:120","data-source-comp":"App"}),"Waste = ",n.jsx("strong",{className:i?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5332:138","data-source-comp":"App",children:i?"Active":"Inactive"}),n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5332:255","data-source-comp":"App"}),"Recycling = ",n.jsx("strong",{className:c?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5332:277","data-source-comp":"App",children:c?"Active":"Inactive"})]})})()]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4","data-source-loc":"weekly_chores_household_hub.tsx:5333:38","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-purple-50/70 border border-purple-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5333:98","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-purple-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5333:171","data-source-comp":"App",children:"Full-Time Occupants"}),n.jsx("div",{className:"text-[8px] italic text-purple-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5333:276","data-source-comp":"App",children:"(Eternally working)"}),n.jsxs("div",{className:"text-lg font-extrabold text-purple-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:394","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="regular").length," Members"]}),n.jsx("div",{className:"text-[11px] text-purple-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:553","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="regular").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-pink-50/70 border border-pink-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5333:751","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-pink-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5333:820","data-source-comp":"App",children:"Bi-Weekly Occupants"}),n.jsx("div",{className:"text-[8px] italic text-pink-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5333:923","data-source-comp":"App",children:"(Half-Timers)"}),n.jsxs("div",{className:"text-lg font-extrabold text-pink-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:1033","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="biweekly").length," Members"]}),n.jsx("div",{className:"text-[11px] text-pink-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:1191","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="biweekly").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-sky-50/70 border border-sky-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5333:1388","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-sky-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5333:1455","data-source-comp":"App",children:"Casual Assignees"}),n.jsx("div",{className:"text-[8px] italic text-sky-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5333:1554","data-source-comp":"App",children:"(Manually added to schedule)"}),n.jsxs("div",{className:"text-lg font-extrabold text-sky-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:1678","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="casual").length," Members"]}),n.jsx("div",{className:"text-[11px] text-sky-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:1833","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="casual").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 border border-amber-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5333:2027","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-amber-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5333:2098","data-source-comp":"App",children:"The Herd"}),n.jsx("div",{className:"text-[8px] italic text-amber-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5333:2191","data-source-comp":"App",children:"(Various beasts)"}),n.jsxs("div",{className:"text-lg font-extrabold text-amber-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:2305","data-source-comp":"App",children:[ye.filter(s=>s.active!==!1).length," Pets"]}),n.jsx("div",{className:"text-[11px] text-amber-800 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5333:2433","data-source-comp":"App",children:ye.filter(s=>s.active!==!1).map(s=>s.name).join(", ")||"None"})]})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:2609","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5333:2636","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5333:2703","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5333:2789","data-source-comp":"App",children:"Household Members"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5333:2860","data-source-comp":"App",children:"Rows 5–11 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:3007","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5333:3048","data-source-comp":"App",children:[x.length," Registered Occupants"]}),n.jsxs("button",{type:"button",onClick:()=>$r(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer",title:"Add a new household member","data-source-loc":"weekly_chores_household_hub.tsx:5333:3143","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5333:3436","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5333:3480","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5333:3560","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5333:3604","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5333:3727","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:3731","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:3760","data-source-comp":"App",children:"Role"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:3789","data-source-comp":"App",children:"Occupancy"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5333:3823","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5333:3871","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5333:3921","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5333:3977","data-source-comp":"App",children:x.map(s=>{const i=s.role==="Supreme Overlord"||s.role==="Overseer Supreme"?"Supreme Overlord":"Minion",c=s.type==="biweekly"?"Bi-Weekly":s.type==="casual"?"Casual":"Full-Time",m=["Parents","Kids","Non-Casual","All"],p=String(s.specialGroups||"").split(",").map(N=>N.trim()).filter(Boolean),u=Es===s.index_,d=qs===s.index_,y=()=>{const N=Mr.trim()||s.name;Co(s.index_,{name:N}),un(null)},w=N=>{const D=new Set(p);D.has(N)?D.delete(N):D.add(N);const S=m.filter(f=>D.has(f));Co(s.index_,{specialGroups:S.join(", ")})};return n.jsxs("tr",{className:`transition ${d?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5362:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5362:153","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5362:202","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5362:243","data-source-comp":"App"}),d?n.jsx("input",{type:"text",value:Mr,onChange:N=>Rr(N.target.value),onKeyDown:N=>{N.key==="Enter"&&y(),N.key==="Escape"&&un(null)},className:"w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5364:37","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5364:424","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5364:499","data-source-comp":"App",children:n.jsxs("select",{value:i,onChange:N=>Co(s.index_,{role:N.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${i==="Supreme Overlord"?"bg-amber-100 text-amber-900 border border-amber-300":"bg-indigo-50 text-indigo-800 border border-indigo-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5364:519","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5364:901","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5364:968","data-source-comp":"App",children:"Minion (Kid)"})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5364:1026","data-source-comp":"App",children:n.jsxs("select",{value:c,onChange:N=>Co(s.index_,{residency:N.target.value}),className:`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${c==="Bi-Weekly"?"bg-pink-50 text-pink-700 border border-pink-200":c==="Casual"?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5364:1046","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5364:1493","data-source-comp":"App",children:"Full-Time"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5364:1537","data-source-comp":"App",children:"Bi-Weekly"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5364:1581","data-source-comp":"App",children:"Casual"})]})}),n.jsxs("td",{className:"p-3 relative","data-source-loc":"weekly_chores_household_hub.tsx:5364:1633","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Mn(u?null:s.index_),className:"w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5364:1662","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5364:2029","data-source-comp":"App",children:p.length>0?p.join(", "):"None selected"}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${u?"rotate-180 text-indigo-600":""}`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Mn(null),"data-source-loc":"weekly_chores_household_hub.tsx:5364:2306","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5364:2393","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5364:2518","data-source-comp":"App",children:"Rotation Groups"}),m.map(N=>{const D=p.includes(N);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5366:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:D,onChange:()=>w(N),className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5366:164","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${D?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5366:353","data-source-comp":"App",children:N})]},N)})]})]})]}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5367:31","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:N=>Co(s.index_,{active:N.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5367:63","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5367:471","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5367:518","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5367:582","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5367:613","data-source-comp":"App",children:[d?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:y,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save name","data-source-loc":"weekly_chores_household_hub.tsx:5367:694","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>un(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel","data-source-loc":"weekly_chores_household_hub.tsx:5367:922","data-source-comp":"App",children:n.jsx(Qt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{un(s.index_),Rr(s.name)},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Rename ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5367:1157","data-source-comp":"App",children:n.jsx(Ko,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Rl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Members`,"data-source-loc":"weekly_chores_household_hub.tsx:5370:201","data-source-comp":"App",children:n.jsx(ao,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:42","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5371:105","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5371:172","data-source-comp":"App",children:[n.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5371:213","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5371:261","data-source-comp":"App",children:"Household Pets"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5371:329","data-source-comp":"App",children:"Rows 27–32 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:501","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5371:542","data-source-comp":"App",children:[ye.length," Registered Pets"]}),n.jsxs("button",{type:"button",onClick:()=>Ve(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer",title:"Add a new household pet member","data-source-loc":"weekly_chores_household_hub.tsx:5371:629","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5371:921","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-x-auto border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5371:965","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5371:1044","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5371:1088","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5371:1211","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:1215","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:1244","data-source-comp":"App",children:"Species"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:1276","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5371:1316","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5371:1362","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5371:1412","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5371:1468","data-source-comp":"App",children:ye.map(s=>{const i=["Dog","Cat","Bird","Fish","Small Pet","Other"],c=s.type||"Dog";i.includes(c)||i.unshift(c);const m=Bs===s.index_,p=()=>{const u=cn.name.trim()||s.name;No(s.index_,{name:u,routine:cn.routine.trim(),care:cn.care.trim()}),dn(null)};return n.jsxs("tr",{className:`transition ${m?"bg-amber-50/60":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5387:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5387:143","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5387:192","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5387:233","data-source-comp":"App"}),n.jsx("span",{className:"text-base shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5387:322","data-source-comp":"App",children:s.icon}),m?n.jsx("input",{type:"text",value:cn.name,onChange:u=>wo(d=>({...d,name:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&p(),u.key==="Escape"&&dn(null)},className:"w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5387:392","data-source-comp":"App"}):n.jsx("span",{className:"px-2 py-0.5 rounded-full font-bold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5387:801","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5387:980","data-source-comp":"App",children:n.jsx("select",{value:c,onChange:u=>No(s.index_,{type:u.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${c==="Dog"?"bg-amber-100 text-amber-900 border border-amber-300":c==="Cat"?"bg-orange-50 text-orange-800 border border-orange-200":"bg-slate-100 text-slate-800 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5387:1000","data-source-comp":"App",children:i.map(u=>n.jsx("option",{value:u,"data-source-loc":"weekly_chores_household_hub.tsx:5387:1485","data-source-comp":"App",children:u},u))})}),n.jsx("td",{className:"p-3 font-medium text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5387:1542","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:cn.routine,onChange:u=>wo(d=>({...d,routine:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&p(),u.key==="Escape"&&dn(null)},className:"w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5387:1605","data-source-comp":"App"}):s.routine}),n.jsx("td",{className:"p-3 text-slate-600 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5387:2045","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:cn.care,onChange:u=>wo(d=>({...d,care:u.target.value})),onKeyDown:u=>{u.key==="Enter"&&p(),u.key==="Escape"&&dn(null)},className:"w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5387:2105","data-source-comp":"App"}):s.care}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5387:2524","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:u=>No(s.index_,{active:u.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5387:2556","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5387:2951","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5387:2998","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5387:3062","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5387:3093","data-source-comp":"App",children:[m?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:p,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5387:3171","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>dn(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5387:3399","data-source-comp":"App",children:n.jsx(Qt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{dn(s.index_),wo({name:s.name,routine:s.routine,care:s.care})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5387:3639","data-source-comp":"App",children:n.jsx(Ko,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Il(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Pets`,"data-source-loc":"weekly_chores_household_hub.tsx:5394:196","data-source-comp":"App",children:n.jsx(ao,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5395:42","data-source-comp":"App",children:[n.jsx("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5395:105","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5395:156","data-source-comp":"App",children:[n.jsx(np,{className:"w-4 h-4 text-purple-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5395:243","data-source-comp":"App",children:"Occupancy Categories & Rules"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5395:325","data-source-comp":"App",children:"Rows 14–17"})]})}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:451","data-source-comp":"App",children:X.map(s=>n.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:549","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5395:658","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5395:709","data-source-comp":"App",children:s.type}),n.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5395:777","data-source-comp":"App",children:"Active"})]}),n.jsx("div",{className:"text-[11px] font-semibold text-indigo-700","data-source-loc":"weekly_chores_household_hub.tsx:5395:888","data-source-comp":"App",children:s.description}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5395:970","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5395:1025","data-source-comp":"App",children:"Rule:"})," ",s.rules]})]},s.type))})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:1087","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5395:1186","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5395:1213","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5395:1264","data-source-comp":"App",children:[n.jsx(ya,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5395:1384","data-source-comp":"App",children:"Special Rotation Groups"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5395:1425","data-source-comp":"App",children:"Rows 20–25"})]}),n.jsx("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5395:1507","data-source-comp":"App",children:R.map(s=>n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:1563","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5395:1656","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5395:1707","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5395:1767","data-source-comp":"App",children:"Group"})]}),n.jsx("div",{className:"text-[11px] text-slate-600 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5395:1842","data-source-comp":"App",children:s.members})]},s.name))})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5395:1943","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5395:1970","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5395:2021","data-source-comp":"App",children:[n.jsx(sp,{className:"w-4 h-4 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5395:2145","data-source-comp":"App",children:"Schedule Configurations"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5395:2186","data-source-comp":"App",children:"Rows 18–21"})]}),n.jsxs("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5395:2268","data-source-comp":"App",children:[n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:2295","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5395:2373","data-source-comp":"App",children:"Active Week Start Date"}),n.jsx("div",{className:"text-sm font-extrabold text-indigo-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5395:2451","data-source-comp":"App",children:V.activeWeekStart}),n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5395:2555","data-source-comp":"App",children:"Scope: Printable Weekly Schedule"})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:2645","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5395:2723","data-source-comp":"App",children:"Custody Schedule Rotation"}),n.jsx("div",{className:"text-sm font-extrabold text-pink-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5395:2804","data-source-comp":"App",children:V.custodyRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5395:2906","data-source-comp":"App",children:["Bi-Weekly Schedule • Members: ",V.custodyMembers]})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:3037","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5395:3115","data-source-comp":"App",children:"Waste / Recycling Schedule Rotation"}),n.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5395:3206","data-source-comp":"App",children:V.wasteRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5395:3306","data-source-comp":"App",children:["Alternating weeks • Members: ",V.wasteMembers]})]})]})]})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5395:3452","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5395:3515","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5395:3596","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5395:3601","data-source-comp":"App",children:[n.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5395:3642","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5395:3784","data-source-comp":"App",children:"Master Chores Template & Registry"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5395:3873","data-source-comp":"App",children:[_e.length," Tasks • Rows 5–15 (Cols 6–10)"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5395:4084","data-source-comp":"App",children:"Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet."})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5395:4292","data-source-comp":"App",children:n.jsx("button",{onClick:()=>{yo(s=>!s)},className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer",title:"Add a new master chore","data-source-loc":"weekly_chores_household_hub.tsx:5395:4343","data-source-comp":"App",children:Aa?n.jsxs(n.Fragment,{children:[n.jsx(Qt,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:253","data-source-comp":"App",children:"Close Add Chore"})]}):n.jsxs(n.Fragment,{children:[n.jsx(bs,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:317","data-source-comp":"App",children:"Add Chore"})]})})})]}),Aa&&n.jsxs("div",{className:"my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn","data-source-loc":"weekly_chores_household_hub.tsx:5397:386","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5397:516","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-sm text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5397:599","data-source-comp":"App",children:[n.jsx(bs,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5397:720","data-source-comp":"App",children:"Add New Master Chore to Household Hub"})]}),n.jsx("button",{onClick:()=>yo(!1),className:"text-slate-400 hover:text-slate-700 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5397:776","data-source-comp":"App",children:n.jsx(Qt,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5397:920","data-source-comp":"App",children:[n.jsxs("div",{className:"md:col-span-2","data-source-loc":"weekly_chores_household_hub.tsx:5397:983","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5397:1014","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5397:1096","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:rt.task,onChange:s=>Gt(i=>({...i,task:s.target.value})),onKeyDown:s=>{s.key==="Enter"&&rt.task.trim()&&Kn(rt)},placeholder:"e.g. Empty dishwasher, sanitize counters, sweep porch...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5397:1148","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5406:261","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5406:266","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:rt.category,onChange:s=>Gt(i=>({...i,category:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5406:337","data-source-comp":"App",children:Sn.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5411:201","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5411:282","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5411:287","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:rt.frequency,onChange:s=>{const i=s.target.value;Gt(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5411:359","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5420:172","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5420:208","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5420:256","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5420:315","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5420:320","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("select",{value:rt.targetDay,onChange:s=>Gt(i=>({...i,targetDay:s.target.value})),className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5420:396","data-source-comp":"App"}),n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5425:37","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Tr(Pt==="NEW_CHORE"?null:"NEW_CHORE"),className:"w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5425:63","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5425:423","data-source-comp":"App",children:rt.targetDay||"Select days..."}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${Pt==="NEW_CHORE"?"rotate-180 text-indigo-600":""}`})]}),Pt==="NEW_CHORE"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Tr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5425:719","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5425:804","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5425:929","data-source-comp":"App",children:"Select Day(s)"}),zr.map(s=>{const i=rt.selectedTargetDays||sn(rt.targetDay).selectedDays,c=i.includes(s);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5425:1268","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:c,onChange:()=>{const m=new Set(i);m.has(s)?m.delete(s):m.add(s);const p=zr.filter(d=>m.has(d)),u=Er(p,!!rt.customTargetEnabled,rt.customTargetText||"");Gt(d=>({...d,selectedTargetDays:p,targetDay:u}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5425:1408","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${c?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5425:1962","data-source-comp":"App",children:s})]},s)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5425:2093","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5425:2170","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:!!rt.customTargetEnabled,onChange:s=>{const i=s.target.checked,c=rt.selectedTargetDays||sn(rt.targetDay).selectedDays,m=Er(c,i,rt.customTargetText||"");Gt(p=>({...p,customTargetEnabled:i,targetDay:m}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5425:2242","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${rt.customTargetEnabled?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5425:2800","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:rt.customTargetText||"",onChange:s=>{const i=s.target.value,c=rt.selectedTargetDays||[],m=Er(c,!0,i);Gt(p=>({...p,customTargetEnabled:!0,customTargetText:i,targetDay:m}))},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5425:2948","data-source-comp":"App"})]})]})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5425:3539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5425:3544","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:rt.rotationGroup==="All Non-Casual"?"Non-Casual":rt.rotationGroup,onChange:s=>Gt(i=>({...i,rotationGroup:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5425:3621","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5430:174","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5430:216","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5430:262","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5430:296","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5430:336","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5430:379","data-source-comp":"App",children:x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5430:440","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))})]})]}),n.jsxs("div",{className:"md:col-span-3","data-source-loc":"weekly_chores_household_hub.tsx:5430:539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5430:570","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("input",{type:"text",value:rt.notes,onChange:s=>Gt(i=>({...i,notes:s.target.value})),placeholder:"Instructions, supplies, details or timing notes...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5430:660","data-source-comp":"App"})]})]}),n.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5435:238","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>yo(!1),className:"px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition","data-source-loc":"weekly_chores_household_hub.tsx:5435:310","data-source-comp":"App",children:"Cancel"}),n.jsxs("button",{type:"button",onClick:()=>Kn({...rt,rotationGroup:rt.rotationGroup==="All Non-Casual"?"Non-Casual":rt.rotationGroup}),disabled:!rt.task.trim(),className:"px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5435:493","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5435:924","data-source-comp":"App",children:"Add Chore to Master List"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5435:983","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5435:1038","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5435:1106","data-source-comp":"App",children:"Total Template Chores"}),n.jsxs("div",{className:"text-xl font-bold text-slate-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5435:1220","data-source-comp":"App",children:[_e.length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5435:1317","data-source-comp":"App",children:"All registered tasks"})]}),n.jsxs("div",{className:"p-3 bg-blue-50/70 rounded-xl border border-blue-200","data-source-loc":"weekly_chores_household_hub.tsx:5435:1395","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5435:1464","data-source-comp":"App",children:"Daily Chores"}),n.jsxs("div",{className:"text-xl font-bold text-blue-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5435:1568","data-source-comp":"App",children:[_e.filter(s=>s.frequency.toLowerCase().includes("daily")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-blue-600","data-source-loc":"weekly_chores_household_hub.tsx:5435:1721","data-source-comp":"App",children:"Mon – Sun rotation"})]}),n.jsxs("div",{className:"p-3 bg-purple-50/70 rounded-xl border border-purple-200","data-source-loc":"weekly_chores_household_hub.tsx:5435:1796","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-purple-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5435:1869","data-source-comp":"App",children:"Once a Week"}),n.jsxs("div",{className:"text-xl font-bold text-purple-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5435:1974","data-source-comp":"App",children:[_e.filter(s=>{const i=(s.frequency||"").toLowerCase();return(i.includes("weekly")||i.includes("once"))&&!i.includes("bi")}).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-purple-600","data-source-loc":"weekly_chores_household_hub.tsx:5435:2208","data-source-comp":"App",children:"Saturday & Sunday deep tasks"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 rounded-xl border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5435:2295","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5435:2366","data-source-comp":"App",children:"Bi-Weekly Tasks"}),n.jsxs("div",{className:"text-xl font-bold text-amber-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5435:2474","data-source-comp":"App",children:[_e.filter(s=>s.frequency.toLowerCase().includes("bi-weekly")||s.frequency.toLowerCase().includes("biweekly")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5435:2682","data-source-comp":"App",children:"Split Curbside Recycling & Waste"})]})]}),n.jsxs("div",{className:"pt-2 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5435:2778","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5435:2810","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5435:2891","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search chores by name, category, group, or notes...",value:Hr,onChange:s=>Os(s.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5435:3006","data-source-comp":"App"}),Hr&&n.jsx("button",{onClick:()=>Os(""),className:"absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5435:3354","data-source-comp":"App",children:n.jsx(Qt,{className:"w-3.5 h-3.5"})})]}),n.jsxs("div",{className:"flex items-center gap-1.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5435:3523","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-500 font-semibold mr-1","data-source-loc":"weekly_chores_household_hub.tsx:5435:3574","data-source-comp":"App",children:"Frequency:"}),n.jsx("button",{onClick:()=>In("ALL"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Dr==="ALL"?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:3643","data-source-comp":"App",children:"All"}),n.jsx("button",{onClick:()=>In("Daily"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Dr==="Daily"?"bg-blue-600 text-white":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:3887","data-source-comp":"App",children:"Daily"}),n.jsx("button",{onClick:()=>In("Once a Week"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Dr==="Once a Week"?"bg-purple-600 text-white":"bg-purple-50 text-purple-700 hover:bg-purple-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:4132","data-source-comp":"App",children:"Weekly"}),n.jsx("button",{onClick:()=>In("Bi-Weekly"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Dr==="Bi-Weekly"?"bg-amber-600 text-white":"bg-amber-50 text-amber-800 hover:bg-amber-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:4398","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5435:4671","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-400 font-semibold mr-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5435:4743","data-source-comp":"App",children:"Category:"}),n.jsxs("button",{onClick:()=>Fs("ALL"),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${lt==="ALL"?"bg-slate-800 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5435:4820","data-source-comp":"App",children:["All Categories (",_e.length,")"]}),Sn.map(s=>{const i=_e.filter(c=>c.category.toLowerCase()===s.name.toLowerCase()).length;return n.jsxs("button",{onClick:()=>Fs(s.name),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${lt===s.name?"ring-2 ring-slate-800 shadow-xs":"opacity-85 hover:opacity-100"} ${s.bg} ${s.text} ${s.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5437:20","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5437:339","data-source-comp":"App",children:s.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5437:362","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] opacity-75","data-source-loc":"weekly_chores_household_hub.tsx:5437:385","data-source-comp":"App",children:["(",i,")"]})]},s.id)})]})]}),n.jsxs("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5438:26","data-source-comp":"App",children:[n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5438:106","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5438:150","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5438:273","data-source-comp":"App",children:[n.jsx("th",{className:"p-3 w-10 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5438:277","data-source-comp":"App",children:"#"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5438:320","data-source-comp":"App",children:"Chore / Task"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5438:357","data-source-comp":"App",children:"Category"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5438:390","data-source-comp":"App",children:"Frequency"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5438:424","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5438:462","data-source-comp":"App",children:"Rotation Group"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5438:501","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5438:557","data-source-comp":"App",children:an.map((s,i)=>{const c=Ks===s.index_,m=Sn.find(F=>F.name.toLowerCase()===(s.category||"").toLowerCase())||Sn[3],p=c&&(qe!=null&&qe.category)&&Sn.find(F=>F.name.toLowerCase()===qe.category.toLowerCase())||m,u=(s.frequency||"").toLowerCase().includes("bi")?"Bi-Weekly":(s.frequency||"").toLowerCase().includes("once")||(s.frequency||"").toLowerCase().includes("weekly")?"Once a Week":"Daily",d=c&&(qe!=null&&qe.frequency)?qe.frequency:u,y=s.targetDay||(u==="Daily"?"Mon – Sun":u==="Bi-Weekly"?"Thursday Evening":"Saturday"),w=c&&(qe==null?void 0:qe.targetDay)!==void 0?qe.targetDay:y,N=sn(w),D=c&&Array.isArray(qe==null?void 0:qe.selectedTargetDays)?qe.selectedTargetDays:N.selectedDays,S=c&&(qe==null?void 0:qe.customTargetEnabled)!==void 0?!!qe.customTargetEnabled:N.customEnabled,f=c&&(qe==null?void 0:qe.customTargetText)!==void 0?qe.customTargetText:N.customText,k=c&&Pt===s.index_,W=s.rotationGroup||"Non-Casual",z=c&&(qe!=null&&qe.rotationGroup)?qe.rotationGroup:W,O=()=>{const F=((qe==null?void 0:qe.task)||"").trim()||s.task,Q=((qe==null?void 0:qe.notes)||"").trim(),Z=Er(D,S,f);Tr(null),Ta(s.index_,{oldTask:s.task,task:F,category:p.name,frequency:d,targetDay:Z,rotationGroup:z,notes:Q})};return n.jsxs(io.Fragment,{children:[n.jsxs("tr",{className:`transition ${i>0?"border-t border-slate-200":""} ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5476:75","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-center align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5476:208","data-source-comp":"App",children:n.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5476:266","data-source-comp":"App",children:i+1})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5476:416","data-source-comp":"App",children:c?n.jsx("input",{type:"text",value:(qe==null?void 0:qe.task)||"",onChange:F=>Kt(Q=>({...Q,task:F.target.value})),onKeyDown:F=>{F.key==="Enter"&&O(),F.key==="Escape"&&(Tr(null),jr(null),Kt(null))},className:"w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5476:518","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5476:1055","data-source-comp":"App",children:s.task})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5476:1133","data-source-comp":"App",children:c?n.jsx("select",{value:p.name,onChange:F=>Kt(Q=>({...Q,category:F.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${p.bg} ${p.text} ${p.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5476:1192","data-source-comp":"App",children:Sn.map(F=>n.jsxs("option",{value:F.name,"data-source-loc":"weekly_chores_household_hub.tsx:5476:1545","data-source-comp":"App",children:[F.icon," ",F.name]},F.id))}):n.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${m.bg} ${m.text} ${m.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5476:1623","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5476:1780","data-source-comp":"App",children:m.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5476:1809","data-source-comp":"App",children:m.name})]})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5476:1851","data-source-comp":"App",children:c?n.jsxs("select",{value:d,onChange:F=>{const Q=F.target.value,Z=Q==="Daily"?"Mon – Sun":Q==="Bi-Weekly"?"Thursday Evening":w==="Mon – Sun"?"Saturday":w,he=sn(Z);Kt(pe=>({...pe,frequency:Q,targetDay:Z,selectedTargetDays:he.selectedDays,customTargetEnabled:he.customEnabled,customTargetText:he.customText}))},className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${d==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":d==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5476:1910","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5488:354","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5488:390","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5488:438","data-source-comp":"App",children:"Bi-Weekly"})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${u==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":u==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5488:494","data-source-comp":"App",children:u})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle relative","data-source-loc":"weekly_chores_household_hub.tsx:5488:806","data-source-comp":"App",children:c?n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:()=>Tr(k?null:s.index_),className:"min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5488:876","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5488:1232","data-source-comp":"App",children:Er(D,S,f)}),n.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${k?"rotate-180 text-indigo-600":""}`})]}),k&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Tr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5488:1516","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5488:1601","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5488:1726","data-source-comp":"App",children:"Target Day(s)"}),zr.map(F=>{const Q=D.includes(F);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5490:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:Q,onChange:()=>{const Z=new Set(D);Z.has(F)?Z.delete(F):Z.add(F);const he=zr.filter(Ie=>Z.has(Ie)),pe=Er(he,S,f);Kt(Ie=>({...Ie,selectedTargetDays:he,targetDay:pe}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5490:162","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${Q?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5501:122","data-source-comp":"App",children:F})]},F)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5502:16","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5502:93","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:S,onChange:F=>{const Q=F.target.checked,Z=Er(D,Q,f);Kt(he=>({...he,customTargetEnabled:Q,targetDay:Z}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5502:165","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${S?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5510:120","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:f,onChange:F=>{const Q=F.target.value,Z=Er(D,!0,Q);Kt(he=>({...he,customTargetEnabled:!0,customTargetText:Q,targetDay:Z}))},onKeyDown:F=>{F.key==="Enter"&&Tr(null)},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5510:252","data-source-comp":"App"})]})]})]})]}):n.jsx("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5519:327","data-source-comp":"App",children:y})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5519:502","data-source-comp":"App",children:c?n.jsxs("select",{value:z,onChange:F=>Kt(Q=>({...Q,rotationGroup:F.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${z==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":z==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":z==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":z==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5519:561","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5519:1181","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5519:1223","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5519:1269","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5519:1303","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5519:1343","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5519:1386","data-source-comp":"App",children:x.map(F=>n.jsx("option",{value:F.name,"data-source-loc":"weekly_chores_household_hub.tsx:5519:1447","data-source-comp":"App",children:F.name},F.id))})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${W==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":W==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":W==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":W==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5519:1523","data-source-comp":"App",children:W})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5519:1987","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5519:2062","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>Yr(s,"up"),disabled:i===0,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore up","data-source-loc":"weekly_chores_household_hub.tsx:5519:2122","data-source-comp":"App",children:n.jsx(Su,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Yr(s,"down"),disabled:i===an.length-1,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore down","data-source-loc":"weekly_chores_household_hub.tsx:5519:2404","data-source-comp":"App",children:n.jsx(Nu,{className:"w-3.5 h-3.5"})}),c?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:O,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5519:2737","data-source-comp":"App",children:n.jsx(ad,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>{Tr(null),jr(null),Kt(null)},className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5519:2967","data-source-comp":"App",children:n.jsx(Qt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{const F=sn(y);Tr(null),jr(s.index_),Kt({task:s.task||"",category:m.name,frequency:u,targetDay:y,selectedTargetDays:F.selectedDays,customTargetEnabled:F.customEnabled,customTargetText:F.customText,rotationGroup:W,notes:s.notes||""})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.task}`,"data-source-loc":"weekly_chores_household_hub.tsx:5519:3275","data-source-comp":"App",children:n.jsx(Ko,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Ut(s.index_,s.task),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove "${s.task}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5534:195","data-source-comp":"App",children:n.jsx(ao,{className:"w-3.5 h-3.5"})})]})})]}),n.jsxs("tr",{className:`transition ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5534:472","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5534:559","data-source-comp":"App"}),n.jsx("td",{colSpan:6,className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5534:592","data-source-comp":"App",children:c?n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5534:648","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-[11px] text-indigo-800 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5534:806","data-source-comp":"App",children:"Instructions / Notes:"}),n.jsx("input",{type:"text",value:(qe==null?void 0:qe.notes)||"",onChange:F=>Kt(Q=>({...Q,notes:F.target.value})),onKeyDown:F=>{F.key==="Enter"&&O(),F.key==="Escape"&&(jr(null),Kt(null))},placeholder:"Add operational instructions or routine notes...",className:"w-full text-xs text-slate-800 bg-transparent focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5534:899","data-source-comp":"App"})]}):n.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5534:1380","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5534:1502","data-source-comp":"App",children:"Instructions / Notes:"})," ",s.notes||n.jsx("span",{className:"italic text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5534:1591","data-source-comp":"App",children:"No instructions"})]})})]})]},`${s.index_||s.task}-${i}`)})})]}),an.length===0&&n.jsxs("div",{className:"p-8 text-center bg-white text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5535:68","data-source-comp":"App",children:[n.jsx(Sl,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),n.jsx("p",{className:"font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5535:185","data-source-comp":"App",children:"No chores match the current filters"}),_e.length===0?n.jsx("button",{onClick:()=>yo(!0),className:"mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5535:285","data-source-comp":"App",children:"Add First Chore"}):n.jsx("button",{onClick:()=>{Fs("ALL"),In("ALL"),Os("")},className:"mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5535:446","data-source-comp":"App",children:"Reset Filters"})]})]})]})]})})]}),Ot&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5535:751","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5535:857","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5535:989","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5535:1068","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5535:1073","data-source-comp":"App",children:"Day Schedule"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5535:1172","data-source-comp":"App",children:(()=>{const s=Wt(Ot);return s?new Date(s.year,s.month,s.day).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}):Ot})()})]}),n.jsx("button",{onClick:()=>rn(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5545:27","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5545:204","data-source-comp":"App",children:[n.jsxs("span",{className:"text-slate-600 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5545:305","data-source-comp":"App",children:[we.filter(s=>{var i,c;return(c=(i=ut[Ot])==null?void 0:i[s.index_])==null?void 0:c.done}).length," of"," ",we.length," completed"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5548:72","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>{we.forEach(s=>{Vr(Ot,s.index_,{done:!0})})},className:"px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5548:100","data-source-comp":"App",children:"Mark All Done"}),n.jsx("button",{onClick:()=>{we.forEach(s=>{Vr(Ot,s.index_,{done:!1})})},className:"px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5554:142","data-source-comp":"App",children:"Reset All"})]})]}),n.jsx("div",{className:"p-4 overflow-y-auto space-y-2 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5560:144","data-source-comp":"App",children:we.map(s=>{var i,c,m,p,u;const d=dr(Ot,s.index_),y=gr(s),w=Wt(Ot),N=w?(new Date(w.year,w.month,w.day).getDay()+6)%7:0,D=s.task||((i=s.row)==null?void 0:i[0])||"",S=D.toLowerCase(),f=S.includes("deep clean")||S.includes("feeding station")?N===6:S.includes("recycling")?N===3&&w&&Ft("recycling",w.year,w.month,w.day):S.includes("waste")?N===3&&w&&Ft("waste",w.year,w.month,w.day):y.frequency==="daily"?!0:y.frequency==="weekly"?N===y.dayOfWeek:y.frequency==="biweekly"?N===y.dayOfWeek&&w&&Ft(D,w.year,w.month,w.day):!1;return n.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col gap-2 transition ${d.done?"bg-emerald-50/60 border-emerald-200":y.frequency==="weekly"&&f?"bg-purple-50/60 border-purple-200":"bg-white border-slate-200 hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5583:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5583:309","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5583:366","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Vr(Ot,s.index_,{done:!d.done}),className:"text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5583:424","data-source-comp":"App",children:d.done?n.jsx(ud,{className:"w-5 h-5 text-emerald-600"}):n.jsx(Eu,{className:"w-5 h-5"})}),n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5585:199","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-semibold truncate ${d.done?"line-through text-slate-500":"text-slate-800"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5585:250","data-source-comp":"App",children:s.task||s.row[0]}),y.frequency==="weekly"&&n.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${f?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5585:428","data-source-comp":"App",children:f?"1x/wk (Today)":`1x/wk (${(c=Jt[y.dayOfWeek])==null?void 0:c.short})`})]})]}),pr(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded border shrink-0",style:{backgroundColor:((m=ke(pr(s.task||s.row[0])))==null?void 0:m.bg)||"#FCE7F3",color:((p=ke(pr(s.task||s.row[0])))==null?void 0:p.text)||"#BE185D",borderColor:(((u=ke(pr(s.task||s.row[0])))==null?void 0:u.color)||"#ec4899")+"50"},"data-source-loc":"weekly_chores_household_hub.tsx:5585:805","data-source-comp":"App",children:pr(s.task||s.row[0])}):lo(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5589:110","data-source-comp":"App",children:"Each Child"}):n.jsxs("select",{value:d.who,onChange:k=>Vr(Ot,s.index_,{who:k.target.value}),className:"text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs",style:{color:d.who?"#0f172a":"#334155"},"data-source-loc":"weekly_chores_household_hub.tsx:5589:244","data-source-comp":"App",children:[n.jsx("option",{value:"",style:{color:"#64748b",backgroundColor:"#FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5593:16","data-source-comp":"App",children:"Unassigned"}),n.jsx("optgroup",{label:"Full-Time Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5596:35","data-source-comp":"App",children:x.filter(k=>k.type==="regular").map(k=>n.jsxs("option",{value:k.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5600:74","data-source-comp":"App",children:[k.name,k.role?` (${k.role})`:""]},k.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5604:76","data-source-comp":"App",children:x.filter(k=>k.type==="biweekly").map(k=>{const W=Wt(Ot),z=W?jn(W.year,W.month,W.day):null,O=z!=null&&z.isArrivalDay?" (Arrives 5 PM)":z!=null&&z.isDepartureDay?" (Leaves 5 PM)":z!=null&&z.isPresent?" (Here)":" (Away)";return n.jsxs("option",{value:k.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5612:22","data-source-comp":"App",children:[k.name,O]},k.id)})}),n.jsx("optgroup",{label:"Casual Assignees (Lesser Scale)",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5617:27","data-source-comp":"App",children:x.filter(k=>k.type==="casual").map(k=>n.jsx("option",{value:k.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5621:73","data-source-comp":"App",children:k.name},k.id))}),n.jsxs("optgroup",{label:"Special Groups",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5625:46","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual",style:{color:"#4338CA",backgroundColor:"#FFFFFF",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5629:16","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5633:39","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5637:35","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Thom / Meghan",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5641:33","data-source-comp":"App",children:"Thom / Meghan"}),n.jsx("option",{value:"Parents",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5645:38","data-source-comp":"App",children:"Parents"})]}),d.who&&!x.some(k=>k.name===d.who)&&!["All Non-Casual","Each Child","All Kids","Thom / Meghan","Parents"].includes(d.who)&&n.jsx("option",{value:d.who,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5649:207","data-source-comp":"App",children:d.who})]})]}),lo(s.task||s.row[0])&&!pr(s.task||s.row[0])&&n.jsxs("div",{className:"bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5653:144","data-source-comp":"App",children:[n.jsxs("div",{className:"text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5653:218","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5653:312","data-source-comp":"App",children:"Individual Bedrooms to Clean:"}),n.jsx("span",{className:"text-[10px] text-pink-600 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5653:354","data-source-comp":"App",children:"Each child cleans own space"})]}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5653:450","data-source-comp":"App",children:Gr(Ot).map(k=>{var W;const z=!!((W=d.kidsDone)!=null&&W[k]),O=ke(k);return n.jsxs("button",{type:"button",onClick:()=>_o(Ot,s.index_,k),className:`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${z?"bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through":"bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5657:22","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5657:379","data-source-comp":"App",children:[n.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(O==null?void 0:O.color)||"#ec4899"},"data-source-loc":"weekly_chores_household_hub.tsx:5657:431","data-source-comp":"App"}),n.jsxs("span",{className:"font-semibold truncate","data-source-loc":"weekly_chores_household_hub.tsx:5659:20","data-source-comp":"App",children:[k,"'s Room"]})]}),n.jsx("span",{className:"font-bold ml-1","data-source-loc":"weekly_chores_household_hub.tsx:5659:90","data-source-comp":"App",children:z?"✓":"○"})]},k)})})]})]},s.index_)})}),n.jsx("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end","data-source-loc":"weekly_chores_household_hub.tsx:5661:20","data-source-comp":"App",children:n.jsx("button",{onClick:()=>rn(null),className:"px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5661:96","data-source-comp":"App",children:"Done"})})]})}),wa&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5661:309","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5661:415","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5661:520","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5661:630","data-source-comp":"App",children:[n.jsx(_s,{className:"w-5 h-5 text-amber-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5661:718","data-source-comp":"App",children:"Auto-Assign Schedule"})]}),n.jsx("button",{onClick:()=>ho(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5661:785","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5661:966","data-source-comp":"App",children:[n.jsxs("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5661:1005","data-source-comp":"App",children:["Distribute daily tasks and weekly routines (Clean Basement, Feeding Station Deep Clean, Curbside Waste & Recycling) evenly across household occupants for ",n.jsxs("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5661:1189","data-source-comp":"App",children:[xn[ct]," ",kt]}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5661:1254","data-source-comp":"App"}),n.jsx("span",{className:"text-[11px] text-slate-500 italic mt-1 inline-block","data-source-loc":"weekly_chores_household_hub.tsx:5661:1260","data-source-comp":"App",children:"Note: Tidy Bedrooms and Laundry Tasks remain individual minion checklists where each child does their own."})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5661:1447","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-slate-800 block mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5661:1452","data-source-comp":"App",children:"Full-Time Occupants (Included in Chore Distribution):"}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5661:1570","data-source-comp":"App",children:x.filter(s=>s.type==="regular").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5661:1688","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-indigo-600 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5661:1814","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5661:1936","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5663:16","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5663:87","data-source-comp":"App",children:["(",s.role==="Overseer Supreme"?"Parent":"Kid",")"]})]},s.id))}),n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5663:208","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-pink-800 block","data-source-loc":"weekly_chores_household_hub.tsx:5663:266","data-source-comp":"App",children:"Bi-Weekly Occupants (Active During Stay Weeks Only):"}),n.jsx("span",{className:"text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded","data-source-loc":"weekly_chores_household_hub.tsx:5663:375","data-source-comp":"App",children:"Back Sunday, Oct. 18 @ 5:00 PM"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5663:536","data-source-comp":"App",children:x.filter(s=>s.type==="biweekly").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5663:655","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-pink-600 focus:ring-pink-500","data-source-loc":"weekly_chores_household_hub.tsx:5663:793","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5663:911","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5665:16","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5665:76","data-source-comp":"App",children:"Bi-weekly only"})]},s.id))}),n.jsxs("div",{className:"p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5665:196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5665:268","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sky-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5665:324","data-source-comp":"App",children:"Casual Members (Manual Add-Ins Only):"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300","data-source-loc":"weekly_chores_household_hub.tsx:5665:417","data-source-comp":"App",children:"Excluded from Auto-Assign"})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5665:565","data-source-comp":"App",children:x.filter(s=>s.type==="casual").map(s=>n.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5665:680","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5665:842","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5667:16","data-source-comp":"App",children:s.name})]},s.id))}),n.jsx("p",{className:"text-[11px] text-sky-700 mt-2 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5667:52","data-source-comp":"App",children:'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'})]})]}),n.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5667:275","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-pink-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5667:436","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5667:442","data-source-comp":"App",children:"Daily & Weekly Distribution:"})," Tasks are handed out so all available family members share the daily and weekly chores evenly. ",Be," are included during stay weeks and skipped on away weeks. Tidy Bedrooms and Laundry Tasks remain individual checklists."]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5667:751","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>ho(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5667:833","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=x.filter(c=>{var m;return c.type==="regular"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name),i=x.filter(c=>{var m;return c.type==="biweekly"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name);Ma(s,i)},className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5667:1023","data-source-comp":"App",children:"Distribute Daily & Weekly Chores"})]})]})}),(ba||As)&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5677:240","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5677:346","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5677:478","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5677:557","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white","data-source-loc":"weekly_chores_household_hub.tsx:5677:598","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5677:730","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5677:735","data-source-comp":"App",children:"Add / Edit Master Chores"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5677:800","data-source-comp":"App",children:"Add new tasks, edit existing chores, or remove from the schedule"})]})]}),n.jsx("button",{onClick:()=>{qr(!1),En(!1),nn([]),Sr(null)},className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5677:922","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-100/70 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5682:143","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{_a("add"),Sr(null)},className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="add"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5682:211","data-source-comp":"App",children:[n.jsx(bs,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5685:259","data-source-comp":"App",children:"+ Add New Chore"})]}),n.jsxs("button",{type:"button",onClick:()=>_a("edit"),className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="edit"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5685:296","data-source-comp":"App",children:[n.jsx(Ko,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5685:604","data-source-comp":"App",children:["✏️ Edit Chore (",we.length,")"]})]})]}),mr==="add"&&n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5685:708","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5685:762","data-source-comp":"App",children:[n.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5685:767","data-source-comp":"App",children:["Chore / Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5685:859","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-chore-title-input",placeholder:"e.g. Clean oven, sweep patio, sanitize counters...",autoFocus:!0,onKeyDown:s=>{if(s.key==="Enter"){const i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who");ko(s.currentTarget.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:""})}},className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5685:911","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5696:159","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5696:222","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5696:227","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{id:"new-chore-frequency",defaultValue:"daily",onChange:s=>{const i=document.getElementById("day-select-container");i&&(i.style.display=s.target.value==="weekly"?"block":"none")},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5696:299","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5701:143","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5701:191","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5701:234","data-source-comp":"App",children:"Bi-Weekly (Curbside schedule)"})]})]}),n.jsxs("div",{id:"day-select-container",style:{display:"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5701:312","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:14","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{id:"new-chore-day",defaultValue:"5",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:87","data-source-comp":"App",children:Jt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5703:286","data-source-comp":"App",children:["Every ",s.name]},s.name))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5703:367","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:430","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:435","data-source-comp":"App",children:"Category"}),n.jsxs("select",{id:"new-chore-category",defaultValue:"Household",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:506","data-source-comp":"App",children:[n.jsx("option",{value:"Household","data-source-loc":"weekly_chores_household_hub.tsx:5703:692","data-source-comp":"App",children:"Household"}),n.jsx("option",{value:"Kitchen","data-source-loc":"weekly_chores_household_hub.tsx:5703:736","data-source-comp":"App",children:"Kitchen"}),n.jsx("option",{value:"Pet Care","data-source-loc":"weekly_chores_household_hub.tsx:5703:776","data-source-comp":"App",children:"Pet Care"}),n.jsx("option",{value:"Bedrooms","data-source-loc":"weekly_chores_household_hub.tsx:5703:818","data-source-comp":"App",children:"Bedrooms"}),n.jsx("option",{value:"Common Areas","data-source-loc":"weekly_chores_household_hub.tsx:5703:860","data-source-comp":"App",children:"Common Areas"}),n.jsx("option",{value:"Administration","data-source-loc":"weekly_chores_household_hub.tsx:5703:910","data-source-comp":"App",children:"Administration"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:979","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:984","data-source-comp":"App",children:"Default Rotation Group"}),n.jsxs("select",{id:"new-chore-who",defaultValue:"All Non-Casual",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:1069","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5703:1255","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5703:1348","data-source-comp":"App",children:"Rotating / Unassigned"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5703:1395","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5703:1447","data-source-comp":"App",children:"All Kids (Shared)"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5703:1498","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5703:1556","data-source-comp":"App",children:"Full-Time Roster"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5703:1614","data-source-comp":"App",children:"Parents Only"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5703:1659","data-source-comp":"App",children:"All Occupants"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5703:1735","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]}),n.jsxs("p",{className:"text-[10px] text-slate-500 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5703:1817","data-source-comp":"App",children:["💡 ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:1891","data-source-comp":"App",children:"All Non-Casual:"})," Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."]})]})]}),n.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5703:2065","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:2239","data-source-comp":"App",children:"Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory."})]})]}),(mr==="edit"||mr==="remove")&&n.jsx("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:2463","data-source-comp":"App",children:fr!==null?n.jsxs("div",{className:"space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5703:2607","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5703:2642","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Sr(null),className:"flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5703:2724","data-source-comp":"App",children:[n.jsx(ju,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:2923","data-source-comp":"App",children:"Back to All Chores"})]}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase","data-source-loc":"weekly_chores_household_hub.tsx:5703:2963","data-source-comp":"App",children:["Editing Item #",we.findIndex(s=>s.index_===fr)+1]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:3117","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:3122","data-source-comp":"App",children:["Chore Title / Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:3207","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:po,onChange:s=>Bo(s.target.value),className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold",placeholder:"Chore task title...",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5703:3259","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5703:3554","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:3609","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:3614","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:xr,onChange:s=>on(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:3686","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5703:3894","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5703:3942","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5703:3985","data-source-comp":"App",children:"Bi-Weekly"})]})]}),xr==="weekly"?n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:4073","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:4078","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{value:qo,onChange:s=>Ts(Number(s.target.value)),className:"w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:4151","data-source-comp":"App",children:Jt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5703:4399","data-source-comp":"App",children:["Every ",s.name]},s.name))})]}):n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:4477","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:4482","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:$o,onChange:s=>Ho(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:4559","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5703:4785","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5703:4878","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5703:4930","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5703:4984","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5703:5036","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5703:5078","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5703:5118","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5703:5200","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),xr==="weekly"&&n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:5326","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5703:5331","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:$o,onChange:s=>Ho(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5703:5408","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5703:5634","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5703:5727","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5703:5779","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5703:5833","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5703:5885","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5703:5927","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5703:5967","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5703:6049","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]}),n.jsxs("div",{className:"p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5703:6138","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:6324","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:6330","data-source-comp":"App",children:"Rotation Group Clarification:"})," ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:6381","data-source-comp":"App",children:"All Non-Casual"})," covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:6507","data-source-comp":"App",children:"No equivalent currently exists among the other groups"})," (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."]})]}),n.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5703:6728","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5703:6830","data-source-comp":"App",children:"List Order Position:"}),n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5703:6904","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Yr(fr,"up"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5703:6947","data-source-comp":"App",children:[n.jsx(Su,{className:"w-3.5 h-3.5"})," Move Up"]}),n.jsxs("button",{type:"button",onClick:()=>Yr(fr,"down"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5703:7241","data-source-comp":"App",children:[n.jsx(Nu,{className:"w-3.5 h-3.5"})," Move Down"]})]})]}),n.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5703:7553","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5703:7653","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900","data-source-loc":"weekly_chores_household_hub.tsx:5703:7658","data-source-comp":"App",children:"Remove This Chore"}),n.jsx("div",{className:"text-[11px] text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5703:7722","data-source-comp":"App",children:"Delete this chore from the schedule and spreadsheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{Bn(fr,po),Sr(null)},className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5703:7828","data-source-comp":"App",children:[n.jsx(ao,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5706:190","data-source-comp":"App",children:"Remove Chore"})]})]})]}):n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5706:298","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5706:325","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5706:382","data-source-comp":"App",children:[n.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search or filter chores to edit or remove...",value:Ds,onChange:s=>js(s.target.value),className:"w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5706:490","data-source-comp":"App"})]}),n.jsx("button",{type:"button",onClick:()=>{lr.length===we.length?nn([]):nn(we.map(s=>s.index_))},className:"text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap","data-source-loc":"weekly_chores_household_hub.tsx:5706:815","data-source-comp":"App",children:lr.length===we.length?"Deselect All":"Select All"})]}),lr.length>0&&n.jsxs("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5712:288","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-rose-800","data-source-loc":"weekly_chores_household_hub.tsx:5712:398","data-source-comp":"App",children:[lr.length," chore(s) selected"]}),n.jsxs("button",{type:"button",onClick:Ea,className:"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5712:499","data-source-comp":"App",children:[n.jsx(ao,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5712:718","data-source-comp":"App",children:"Remove Selected"})]})]}),n.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto","data-source-loc":"weekly_chores_household_hub.tsx:5712:762","data-source-comp":"App",children:we.filter(s=>Ds?(s.task||s.row[0]||"").toLowerCase().includes(Ds.toLowerCase()):!0).map((s,i)=>{var c;const m=lr.includes(s.index_),p=gr(s),u=s.task||s.row[0]||"Chore";return n.jsxs("div",{className:"p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5717:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5717:136","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:()=>{nn(d=>m?d.filter(y=>y!==s.index_):[...d,s.index_])},className:"rounded text-rose-600 focus:ring-rose-500",title:"Select for batch removal","data-source-loc":"weekly_chores_household_hub.tsx:5717:194","data-source-comp":"App"}),n.jsxs("div",{className:"min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5719:105","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-800 truncate block","data-source-loc":"weekly_chores_household_hub.tsx:5719:137","data-source-comp":"App",children:[i+1,". ",u]}),n.jsx("div",{className:"flex items-center gap-1.5 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5719:233","data-source-comp":"App",children:n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5719:283","data-source-comp":"App",children:p.frequency==="weekly"?`Once a week (${(c=Jt[p.dayOfWeek])==null?void 0:c.name})`:"Daily task"})})]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5719:481","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>zs(s),className:"px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition",title:"Edit chore details","data-source-loc":"weekly_chores_household_hub.tsx:5719:531","data-source-comp":"App",children:[n.jsx(Ko,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5719:793","data-source-comp":"App",children:"Edit"})]}),n.jsx("button",{type:"button",onClick:()=>Bn(s.index_,u),className:"p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition",title:`Remove "${u}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5719:819","data-source-comp":"App",children:n.jsx(ao,{className:"w-3.5 h-3.5"})})]})]},s.index_)})})]})}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5720:34","data-source-comp":"App",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5720:127","data-source-comp":"App",children:[we.length," active master chores"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5720:234","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>{qr(!1),En(!1),nn([]),Sr(null)},className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5720:262","data-source-comp":"App",children:"Close"}),mr==="add"?n.jsx("button",{type:"button",onClick:()=>{const s=document.getElementById("new-chore-title-input"),i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who"),p=document.getElementById("new-chore-category");s&&s.value.trim()&&ko(s.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:"All Non-Casual",category:p?p.value:"Household"})},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5725:176","data-source-comp":"App",children:"Add Chore"}):fr!==null?n.jsx("button",{type:"button",onClick:Gs,className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5739:181","data-source-comp":"App",children:"Save Changes"}):lr.length>0&&n.jsxs("button",{type:"button",onClick:Ea,className:"px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5739:410","data-source-comp":"App",children:["Remove Selected (",lr.length,")"]})]})]})]})}),va&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5739:683","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5739:789","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5739:894","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5739:1007","data-source-comp":"App",children:[n.jsx(rp,{className:"w-5 h-5 text-purple-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5739:1096","data-source-comp":"App",children:"Combine Chores"})]}),n.jsx("button",{onClick:()=>mo(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5739:1157","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5739:1335","data-source-comp":"App",children:[n.jsx("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5739:1374","data-source-comp":"App",children:"Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly."}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5739:1544","data-source-comp":"App",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5739:1549","data-source-comp":"App",children:"Suggested Combinations:"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5739:1674","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{we[4]&&we[5]&&(Rn(we[4].index_),Rs(we[5].index_),xo("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)"))},className:"p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5739:1729","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-purple-900 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5745:123","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3 h-3 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5745:238","data-source-comp":"App",children:"Chores #5 & #6 (Dinner)"})]}),n.jsx("div",{className:"text-[10px] text-purple-700 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5745:280","data-source-comp":"App",children:"Dinner Dishes + Put away food"})]}),n.jsxs("button",{type:"button",onClick:()=>{we[0]&&we[1]&&(Rn(we[0].index_),Rs(we[1].index_),xo("Tidy bedroom & vacuum floors, bring laundry downstairs"))},className:"p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5745:385","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5751:117","data-source-comp":"App",children:[n.jsx(_s,{className:"w-3 h-3 text-slate-500"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5751:230","data-source-comp":"App",children:"Rows 5 & 6 (Bedroom)"})]}),n.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5751:269","data-source-comp":"App",children:"Tidy up bedroom + Vacuum floors"})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5751:387","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5751:392","data-source-comp":"App",children:"Primary Chore (Retains Position):"}),n.jsx("select",{value:zt??"",onChange:s=>{const i=Number(s.target.value);Rn(i);const c=we.find(p=>p.index_===i),m=we.find(p=>p.index_===yr);c&&m&&xo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5751:488","data-source-comp":"App",children:we.map((s,i)=>n.jsxs("option",{value:s.index_,"data-source-loc":"weekly_chores_household_hub.tsx:5759:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5759:293","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5759:298","data-source-comp":"App",children:"Chore to Merge In & Remove:"}),n.jsx("select",{value:yr??"",onChange:s=>{const i=Number(s.target.value);Rs(i);const c=we.find(p=>p.index_===zt),m=we.find(p=>p.index_===i);c&&m&&xo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5759:388","data-source-comp":"App",children:we.map((s,i)=>n.jsxs("option",{value:s.index_,disabled:s.index_===zt,"data-source-loc":"weekly_chores_household_hub.tsx:5767:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]," ",s.index_===zt?"(Cannot merge into itself)":""]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5767:404","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5767:409","data-source-comp":"App",children:"New Combined Chore Title:"}),n.jsx("input",{type:"text",value:Ca,onChange:s=>xo(s.target.value),placeholder:"Enter name for the combined chore...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5767:497","data-source-comp":"App"})]}),n.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5767:807","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-purple-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5767:990","data-source-comp":"App",children:"The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5767:1163","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>mo(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5767:1245","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{zt!==null&&yr!==null&&zt!==yr&&Qo(zt,yr,Ca)},disabled:zt===yr||!zt||!yr,className:"px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5767:1432","data-source-comp":"App",children:"Merge & Combine Chores"})]})]})}),ka&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5771:307","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5771:413","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5771:518","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5771:598","data-source-comp":"App",children:[n.jsx(ya,{className:"w-5 h-5 text-indigo-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5771:684","data-source-comp":"App",children:"Add Household Member"})]}),n.jsx("button",{onClick:()=>$r(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5771:751","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5771:931","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5771:972","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5771:977","data-source-comp":"App",children:["Full Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5771:1046","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-member-name",placeholder:"e.g. Alex, Jordan...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5771:1098","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5771:1328","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5771:1333","data-source-comp":"App",children:"Role"}),n.jsxs("select",{id:"new-member-role",defaultValue:"Minion",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5771:1400","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5771:1597","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5771:1664","data-source-comp":"App",children:"Minion (Kid)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5771:1723","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5771:1728","data-source-comp":"App",children:"Occupancy"}),n.jsxs("select",{id:"new-member-residency",defaultValue:"Full-Time",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5771:1800","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5771:2005","data-source-comp":"App",children:"Full-Time (Constant Residency)"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5771:2070","data-source-comp":"App",children:"Bi-Weekly (Half-Time Residency)"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5771:2136","data-source-comp":"App",children:"Casual (Periodic Residency)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5771:2210","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5771:2215","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("div",{className:"grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50","data-source-loc":"weekly_chores_household_hub.tsx:5771:2301","data-source-comp":"App",children:["Parents","Kids","Non-Casual","All"].map(s=>{const i=Ms.includes(s);return n.jsxs("label",{className:"flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5773:20","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:i,onChange:()=>{fo(c=>{const m=new Set(c);return m.has(s)?m.delete(s):m.add(s),["Parents","Kids","Non-Casual","All"].filter(p=>m.has(p))})},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5773:195","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${i?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5783:120","data-source-comp":"App",children:s})]},s)})})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5784:26","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5784:31","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{id:"new-member-active",defaultValue:"true",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5784:107","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5784:304","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5784:340","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5784:394","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5784:577","data-source-comp":"App",children:"Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5784:715","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>$r(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5784:797","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=document.getElementById("new-member-name"),i=document.getElementById("new-member-role"),c=document.getElementById("new-member-residency"),m=document.getElementById("new-member-active");s&&s.value.trim()&&Ml(s.value,i?i.value:"Minion",c?c.value:"Full-Time",Ms.length>0?Ms.join(", "):"All",m?m.value==="true":!0)},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5784:986","data-source-comp":"App",children:"Add to Household Roster"})]})]})}),Ps&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5798:202","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5798:308","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-amber-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5798:413","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5798:492","data-source-comp":"App",children:[n.jsx("span",{className:"text-xl","data-source-loc":"weekly_chores_household_hub.tsx:5798:533","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5798:579","data-source-comp":"App",children:"Add Household Pet Member"})]}),n.jsx("button",{onClick:()=>Ve(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5798:650","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5798:827","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5798:868","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5798:873","data-source-comp":"App",children:["Pet Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5798:941","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:Zt.name,onChange:s=>ln(i=>({...i,name:s.target.value})),placeholder:"e.g. Buster, Milo...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5798:993","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5803:205","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5803:210","data-source-comp":"App",children:"Species"}),n.jsxs("select",{value:Zt.type,onChange:s=>ln(i=>({...i,type:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5803:280","data-source-comp":"App",children:[n.jsx("option",{value:"Dog","data-source-loc":"weekly_chores_household_hub.tsx:5808:161","data-source-comp":"App",children:"Dog 🐕"}),n.jsx("option",{value:"Cat","data-source-loc":"weekly_chores_household_hub.tsx:5808:207","data-source-comp":"App",children:"Cat 🐈"}),n.jsx("option",{value:"Bird","data-source-loc":"weekly_chores_household_hub.tsx:5808:253","data-source-comp":"App",children:"Bird 🐦"}),n.jsx("option",{value:"Fish","data-source-loc":"weekly_chores_household_hub.tsx:5808:301","data-source-comp":"App",children:"Fish 🐟"}),n.jsx("option",{value:"Small Pet","data-source-loc":"weekly_chores_household_hub.tsx:5808:349","data-source-comp":"App",children:"Small Pet 🐾"}),n.jsx("option",{value:"Other","data-source-loc":"weekly_chores_household_hub.tsx:5808:407","data-source-comp":"App",children:"Other 🐾"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5808:472","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5808:477","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("input",{type:"text",value:Zt.routine,onChange:s=>ln(i=>({...i,routine:s.target.value})),placeholder:"e.g. Morning & Evening, Twice daily...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5808:555","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5813:213","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5813:218","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("textarea",{rows:2,value:Zt.care,onChange:s=>ln(i=>({...i,care:s.target.value})),placeholder:"e.g. Feed breakfast & supper, outdoor routine, fresh water bowls...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5813:302","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5818:267","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5818:272","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{value:Zt.active!==!1?"true":"false",onChange:s=>ln(i=>({...i,active:s.target.value==="true"})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5818:348","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5823:161","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5823:197","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5823:251","data-source-comp":"App",children:[n.jsx(ws,{className:"w-4 h-4 shrink-0 text-amber-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5823:430","data-source-comp":"App",children:"Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5823:558","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Ve(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5823:640","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>Ll(Zt.name,Zt.type,Zt.routine,Zt.care,Zt.active!==!1),disabled:!Zt.name.trim(),className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5823:826","data-source-comp":"App",children:"Add to Household Pets"})]})]})}),te&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5823:1220","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5823:1326","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5823:1458","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5823:1537","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5823:1580","data-source-comp":"App",children:n.jsx(Ko,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5823:1717","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5823:1722","data-source-comp":"App",children:"Edit Chore Details"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5823:1781","data-source-comp":"App",children:"Update chore name, cadence, rotation group, or notes"})]})]}),n.jsx("button",{onClick:()=>fe(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5823:1891","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5823:2075","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5823:2137","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-800 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5823:2142","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5823:2224","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:te.task,onChange:s=>fe(i=>({...i,task:s.target.value})),placeholder:"Chore task description...",className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5823:2276","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5828:221","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5828:276","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5828:281","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:te.category||"Household",onChange:s=>fe(i=>({...i,category:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5828:352","data-source-comp":"App",children:Sn.map(s=>n.jsxs("option",{value:s.id,"data-source-loc":"weekly_chores_household_hub.tsx:5833:172","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5833:251","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5833:256","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:te.frequency||"Daily",onChange:s=>{const i=s.target.value;fe(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5833:328","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5842:143","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5842:179","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5842:227","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5842:286","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5842:291","data-source-comp":"App",children:"Target Day"}),n.jsx("input",{type:"text",value:te.targetDay||"Mon – Sun",onChange:s=>fe(i=>({...i,targetDay:s.target.value})),placeholder:"e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5842:364","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5847:226","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5847:231","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:te.rotationGroup||"All Non-Casual",onChange:s=>fe(i=>({...i,rotationGroup:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5847:308","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5852:145","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5852:238","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5852:290","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5852:344","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5852:396","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5852:438","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5852:478","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5852:536","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5852:618","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5852:712","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5852:717","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("textarea",{rows:2,value:te.notes||"",onChange:s=>fe(i=>({...i,notes:s.target.value})),placeholder:"Operational details, supplies, or instructions...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5852:807","data-source-comp":"App"})]}),n.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5857:242","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5857:324","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5857:329","data-source-comp":"App",children:"Delete this chore"}),n.jsx("div",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5857:401","data-source-comp":"App",children:"Remove from Printable Weekly Schedule"})]}),n.jsxs("button",{type:"button",onClick:()=>{Pn(te.index_,te.task)},className:"px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5857:494","data-source-comp":"App",children:[n.jsx(ao,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5859:210","data-source-comp":"App",children:"Delete Chore"})]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5859:256","data-source-comp":"App",children:[n.jsx("span",{className:"text-[11px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5859:349","data-source-comp":"App",children:"Real-time schedule update"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5859:438","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>fe(null),className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5859:466","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{fn(te.index_,{task:te.task,oldTask:te.originalTask||te.task,category:te.category,frequency:te.frequency,targetDay:te.targetDay,rotationGroup:te.rotationGroup,notes:te.notes,dayOfWeek:te.dayOfWeek})},disabled:!((ee=te.task)!=null&&ee.trim()),className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5859:652","data-source-comp":"App",children:"Save Changes"})]})]})]})}),ze&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5870:298","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5870:404","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-rose-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5870:509","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5870:587","data-source-comp":"App",children:[n.jsx(ao,{className:"w-5 h-5 text-rose-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5870:672","data-source-comp":"App",children:"Delete Chore"})]}),n.jsx("button",{onClick:()=>ot(null),className:"p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5870:731","data-source-comp":"App",children:n.jsx(Qt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 text-xs text-slate-700 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5870:911","data-source-comp":"App",children:[n.jsxs("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5870:965","data-source-comp":"App",children:["Are you sure you want to remove ",n.jsxs("strong",{className:"text-slate-900 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5870:1004","data-source-comp":"App",children:['"',ze.task,'"']})," from the Printable Weekly Schedule?"]}),n.jsx("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5870:1138","data-source-comp":"App",children:"This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately."})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5870:1375","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>ot(null),className:"px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5870:1465","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{Pn(ze.index_,ze.task)},className:"px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5870:1641","data-source-comp":"App",children:"Delete Chore"})]})]})})]})}var hp=class extends io.Component{constructor(b){super(b),this.state={hasError:!1}}static getDerivedStateFromError(b){return{hasError:!0}}componentDidCatch(b,_){window.parent.postMessage({type:"ERROR",payload:{error:b?b.toString():"Unknown rendering error"}},"*")}render(){return this.state.hasError?n.jsx("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5896:37","data-source-comp":"ErrorBoundary",children:"Something went wrong."}):this.props.children}};function pp(){const[b,_]=I.useState(()=>{try{const M=localStorage.getItem(Ss);if(M){const H=JSON.parse(M);if(Array.isArray(H)&&H.length>0)return H}}catch(M){console.warn("Failed to load sheetData from localStorage:",M)}return jl}),[v,U]=I.useState(!0);I.useEffect(()=>{try{localStorage.setItem(Ss,JSON.stringify(b))}catch(M){console.warn("Failed to persist sheetData to localStorage:",M)}},[b]),I.useEffect(()=>{try{const M=localStorage.getItem(Ss),H=M?JSON.parse(M):b;Array.isArray(H)&&H.length>0&&fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:H})}).catch(()=>{})}catch{}},[]),I.useEffect(()=>{let M=null;const H=Se=>{const{type:Fe,payload:ce}=Se.data||{};Fe==="SYNC_DATA"&&(M&&(clearInterval(M),M=null),Array.isArray(ce)&&ce.length>0&&_(ce),U(!0))};window.addEventListener("message",H);const P=()=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"CHILD_READY",payload:{version:3}},"*")};P();let ne=0;return M=setInterval(()=>{if(ne++,ne>=50){clearInterval(M),M=null;return}P()},100),()=>{M&&clearInterval(M),window.removeEventListener("message",H)}},[]),I.useEffect(()=>{if(!v)return;const M=performance.now();let H=null;const P=requestAnimationFrame(()=>{H=requestAnimationFrame(()=>{const ne=performance.now()-M;window.parent&&window.parent!==window&&window.parent.postMessage({type:"RENDER_COMPLETE",payload:{status:"success",renderDurationMs:ne}},"*")})});return()=>{cancelAnimationFrame(P),H&&cancelAnimationFrame(H)}},[b,v]);const K=(M,H,P)=>{_(ne=>Array.isArray(ne)?ne.map((Se,Fe)=>{if((Se.index_!==void 0?Se.index_:Fe)!==M)return Se;const se=Array.isArray(Se.data)?[...Se.data]:[],$e=se.findIndex(Le=>Le.index_===H);if($e>=0){const Le=Array.isArray(se[$e].row)?[...se[$e].row]:[],te=Math.max(Le.length,Array.isArray(P)?P.length:0),fe=new Array(te).fill(null);for(let ze=0;ze<te;ze++)fe[ze]=P&&P[ze]!==void 0?P[ze]:Le[ze]!==void 0?Le[ze]:null;se[$e]={...se[$e],row:fe}}else{const Le=(P||[]).map(te=>te===void 0?null:te);se.push({index_:H,row:Le}),se.sort((te,fe)=>te.index_-fe.index_)}return{...Se,data:se}}):ne),window.parent&&window.parent!==window&&window.parent.postMessage({type:"PATCH",payload:{rangeIndex_:M,rowIndex_:H,row:P}},"*")},q=(M,H)=>{_(P=>Array.isArray(P)?P.map((ne,Se)=>{if((ne.index_!==void 0?ne.index_:Se)!==M)return ne;const ce=(ne.data||[]).filter(se=>se.index_!==H);return{...ne,data:ce}}):P),window.parent&&window.parent!==window&&window.parent.postMessage({type:"DELETE",payload:{rangeIndex_:M,rowIndex_:H}},"*")},Y=(M,H,P)=>{_(ne=>Array.isArray(ne)?ne.map((Se,Fe)=>{if((Se.index_!==void 0?Se.index_:Fe)!==M)return Se;const se=Array.isArray(Se.data)?[...Se.data]:[],$e=(P||[]).map(Le=>Le===void 0?null:Le);if(H!=null){const Le=se.map(te=>te.index_>=H?{...te,index_:te.index_+1}:te);return Le.push({index_:H,row:$e}),Le.sort((te,fe)=>te.index_-fe.index_),{...Se,data:Le}}else{const Le=se.reduce((te,fe)=>Math.max(te,fe.index_||0),0);return se.push({index_:Le+1,row:$e}),{...Se,data:se}}}):ne),window.parent&&window.parent!==window&&window.parent.postMessage({type:"INSERT",payload:{rangeIndex_:M,rowIndex_:H,row:P}},"*")},le=(M,H,P,ne)=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MOVE",payload:{fromRangeIndex_:M,fromRowIndex_:H,toRangeIndex_:P,toRowIndex_:ne}},"*")},ee=M=>{window.parent&&window.parent!==window?window.parent.postMessage({type:"FOLLOW_LINK",payload:{url:M}},"*"):M&&window.open(M,"_blank","noopener,noreferrer")};return v?n.jsx("div",{id:"app-container",className:"h-full w-full","data-source-loc":"weekly_chores_household_hub.tsx:6131:5","data-source-comp":"AppWrapper",children:n.jsx(hp,{children:n.jsx(up,{data:b,updateItem:K,deleteItem:q,insertItem:Y,moveItem:le,followLink:ee})})}):n.jsx("div",{className:"loading","data-source-loc":"weekly_chores_household_hub.tsx:6127:12","data-source-comp":"AppWrapper",children:"Waiting for data..."})}const mp=`// @ts-nocheck\r
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
  if (lower.includes("tidy bedroom") || lower.includes("personal spaces") || lower.includes("basement") || lower.includes("laundry")) {\r
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
  const thu = weekDays[3] || weekDays[0];\r
  const thuBwStatus = getBiWeeklyStatus(thu.year, thu.month, thu.day);\r
  const areKidsInResidenceThisWeek = thuBwStatus.isFullStay || thuBwStatus.isDepartureDay;\r
  const availableKidsThisWeek = areKidsInResidenceThisWeek ? allKids : fullTimeKids;\r
  const availableWorkersThisWeek = areKidsInResidenceThisWeek ? allNonCasual : fullTimeRoster;\r
\r
  const basementWorker = availableKidsThisWeek[(weekNum + 1) % availableKidsThisWeek.length];\r
  const deepCleanWorker = availableWorkersThisWeek[(weekNum + 2) % availableWorkersThisWeek.length];\r
  const recyclingWorker = availableWorkersThisWeek[(weekNum + 3) % availableWorkersThisWeek.length];\r
  const wasteWorker = availableWorkersThisWeek[(weekNum + 4) % availableWorkersThisWeek.length];\r
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
      const isBasement = tLower.includes("basement");\r
\r
      if (isDeepClean) {\r
        isScheduled = dayIdx === 6;\r
      } else if (isRecycling) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);\r
      } else if (isWaste) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);\r
      } else if (isBasement) {\r
        isScheduled = dayIdx === 5;\r
      } else if (freq.frequency === "daily" || ((_b = cr.frequency) == null ? void 0 : _b.toLowerCase().includes("daily")) && !((_c = cr.frequency) == null ? void 0 : _c.toLowerCase().includes("once"))) {\r
        isScheduled = true;\r
      } else if (freq.frequency === "biweekly" || ((_d = cr.frequency) == null ? void 0 : _d.toLowerCase().includes("bi"))) {\r
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate(taskTitle, dayObj.year, dayObj.month, dayObj.day);\r
      } else if (freq.frequency === "weekly" || ((_e = cr.frequency) == null ? void 0 : _e.toLowerCase().includes("weekly")) && !((_f = cr.frequency) == null ? void 0 : _f.toLowerCase().includes("bi")) || ((_g = cr.frequency) == null ? void 0 : _g.toLowerCase().includes("once"))) {\r
        const targetDayLower = String(cr.targetDay || "").toLowerCase();\r
        const scheduledDay = targetDayLower.includes("sunday") ? 6 : targetDayLower.includes("thursday") ? 3 : 5;\r
        isScheduled = dayIdx === scheduledDay;\r
      }\r
\r
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
      } else if (isBasement) {\r
        assignedWho = basementWorker;\r
      } else if (isDeepClean) {\r
        assignedWho = deepCleanWorker;\r
      } else if (isRecycling) {\r
        assignedWho = recyclingWorker;\r
      } else if (isWaste) {\r
        assignedWho = wasteWorker;\r
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
        const cKey = getChoreCanonicalKey(taskTitle);\r
        if (cKey) {\r
          scheduleMap[dKey][cKey] = entry;\r
        }\r
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
    if (titleLower.includes("basement")) {\r
      return {\r
        frequency: "weekly",\r
        dayOfWeek: 5\r
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
    const tLower = String(taskTitle || "").toLowerCase().trim();\r
    const cKey = getChoreCanonicalKey(taskTitle);\r
\r
    const isMemberOrSpecialGroup = (val) => {\r
      if (!val) return false;\r
      const s = String(val).replace(/^Who:\\s*/i, "").replace(/^Assigned:\\s*/i, "").trim();\r
      if (!s || s.startsWith("-") || s.startsWith("(") || s.startsWith("SG:") || s.startsWith("Done:") || s.startsWith("Parent Initials") || s.startsWith("___") || /^_+$/.test(s)) {\r
        return false;\r
      }\r
      const sLow = s.toLowerCase();\r
      if (familyMembers.some(m => m.name.toLowerCase() === sLow)) return true;\r
      if (sLow === "parents" || sLow === "all kids" || sLow === "all non-casual" || sLow === "each child" || sLow.includes("meghan") || sLow.includes("thom")) return true;\r
      return false;\r
    };\r
\r
    const getCanonicalMemberName = (val) => {\r
      if (!val) return "";\r
      const s = String(val).replace(/^Who:\\s*/i, "").replace(/^Assigned:\\s*/i, "").trim();\r
      const match = familyMembers.find(m => m.name.toLowerCase() === s.toLowerCase());\r
      if (match) return match.name;\r
      if (s.toLowerCase().includes("parents")) return "Parents";\r
      if (s.toLowerCase().includes("all kids")) return "All Kids";\r
      if (s.toLowerCase().includes("all non-casual")) return "All Non-Casual";\r
      return s;\r
    };\r
\r
    // 1. Check choreEdits first (immediate state / patch)\r
    const edit = choreEdits[choreIndex] || (tLower ? choreEdits[tLower] : null) || (cKey ? choreEdits[cKey] : null);\r
    if (edit && edit.who && isMemberOrSpecialGroup(edit.who)) {\r
      who = getCanonicalMemberName(edit.who);\r
    }\r
    if (edit && edit.done !== undefined) {\r
      done = !!edit.done;\r
    }\r
\r
    // 2. Check activeWeekDays in monthSchedule (populated by Auto-Assign)\r
    if (!who && activeWeekDays && activeWeekDays.length > 0) {\r
      for (let i = activeWeekDays.length - 1; i >= 0; i--) {\r
        const d = activeWeekDays[i];\r
        const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);\r
        if (s.who && isMemberOrSpecialGroup(s.who)) {\r
          who = getCanonicalMemberName(s.who);\r
          break;\r
        }\r
        if (s.done) done = true;\r
      }\r
    }\r
\r
    // 3. Check underlying sheet row (Sheet 0 column 9 = "Who: Name" or designated day columns)\r
    const cr = choreRows.find(r => {\r
      var _a2;\r
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === tLower;\r
    });\r
    if (cr && cr.row) {\r
      if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") {\r
        done = true;\r
      }\r
      if (!who) {\r
        // Col 9 is the designated Who cell for weekly tasks in Sheet 0\r
        const col9Text = String(cr.row[9] || "").replace(/^Who:\\s*/i, "").trim();\r
        if (isMemberOrSpecialGroup(col9Text)) {\r
          who = getCanonicalMemberName(col9Text);\r
        } else {\r
          // Check day columns [13, 11, 7, 5, 3] — NEVER column 1 which is Description!\r
          for (const colIdx of [13, 11, 7, 5, 3]) {\r
            const val = String(cr.row[colIdx] || "").replace(/^Who:\\s*/i, "").trim();\r
            if (isMemberOrSpecialGroup(val)) {\r
              who = getCanonicalMemberName(val);\r
              break;\r
            }\r
          }\r
        }\r
      }\r
    }\r
\r
    // 4. Bi-weekly custody check: if Cadence or Mason are assigned on an off-week, clear it\r
    if (!isBiWeeklyHereThisWeek && (who === "Cadence" || who === "Mason")) {\r
      who = "";\r
    }\r
\r
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
          if (tLow.includes("basement")) {\r
            return dayObj.dayOfWeekIndex === 5;\r
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
          } else if (tLow.includes("basement")) {\r
            isScheduledDay = day.dayOfWeekIndex === 5;\r
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
            } else if (tLow.includes("basement")) {\r
              const isScheduledDay = dayIdx === 5;\r
              const hasActivity = ((_o = (_n = monthSchedule[dateKey]) == null ? void 0 : _n[cr.index_]) == null ? void 0 : _o.done) || ((_q = (_p = monthSchedule[dateKey]) == null ? void 0 : _q[cr.index_]) == null ? void 0 : _q.who);\r
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
`,uo=mp.split(/\r?\n/),md=(()=>{const b=uo.findIndex((_,v)=>v>37&&_.startsWith("var DAY_STYLES"));return b>0?b:935})();function Dl(b){let _="",v=b;for(;v>=0;)_=String.fromCharCode(v%26+65)+_,v=Math.floor(v/26)-1;return _}const fd=new Map,yd=new Map;(()=>{let b=-1,_="",v=null,U=!1,K=-1;for(let q=36;q<md;q++){const Y=uo[q]||"",le=Y.match(/"name":\s*"([^"]+)"/);if(le){_=le[1],b=_.toLowerCase().includes("hub")?1:0,v=null,U=!1;continue}const ee=Y.match(/"index_":\s*(\d+)/);if(ee&&!U){(uo[q+1]||"").includes('"name":')||(v=parseInt(ee[1],10));continue}if(Y.includes('"row": [')){U=!0,K=0;continue}if(U){if(Y.trim().startsWith("]")){U=!1,K=-1;continue}if(b>=0&&v!==null){const M=q+1,H=Y.trim().replace(/,$/,"");let P=H;try{P=JSON.parse(H)}catch{}const ne={tsxLine:M,sheetIndex:b,sheetName:_,rowIndex:v,colIndex:K,value:P};fd.set(`${b}:${v}:${K}`,M),yd.set(M,ne)}K++}}})();function Wu(b){const _=[],v=(b.innerText||b.textContent||"").trim();if(v.length>=2&&v.length<=140&&!v.includes(`
`))_.push(v);else if(v.includes(`
`))for(const U of v.split(`
`)){const K=U.trim();K.length>=3&&K.length<=120&&_.push(K)}if(_.length===0)return null;for(const U of _){const K=U.replace(/\s+/g," ").trim();if(K.length<2)continue;const q=JSON.stringify(K).toLowerCase();let Y=-1;for(let le=36;le<md;le++){const ee=(uo[le]||"").trim().toLowerCase();if(ee===q||ee===`${q},`){Y=le+1;break}}if(Y===-1&&K.length>=4){const le=K.toLowerCase();for(let ee=36;ee<md;ee++){const M=(uo[ee]||"").trim().toLowerCase();if(M.startsWith('"')&&M.includes(le)){Y=ee+1;break}}}if(Y!==-1){const le=yd.get(Y),ee=le?le.rowIndex:null,M=le?le.colIndex:0,H=le?le.sheetName:"INITIAL_SHEET_DATA",P=H.toLowerCase().includes("hub"),ne=P?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",Se=ee!==null?P?ee+2:ee+1:1,Fe=Dl(M+1);return{line:Y,text:(uo[Y-1]||"").trim(),rowIndex:ee,colIndex:M,colLetter:Fe,sectionName:H,csvFile:ne,csvLine:Se}}}return null}function Cs(b,_,v=1,U){const K=()=>{const q=document.createElement("a");q.href=`antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(b)}:${_}:${v}`,q.click()};fetch(`/__open-in-vscode?file=${encodeURIComponent(b)}&line=${_}&col=${v}`).then(q=>q.json()).then(q=>{(!q||!q.ok)&&K()}).catch(()=>{K()}),U&&U(`Opened ${b}:${_}`)}function zu(b,_){const v=`${window.location.origin}/?view=csv-map`,U=window.open(v,"CsvVisualMapWindow","popup=yes,width=1320,height=840,left=80,top=60");if(U){U.focus(),b&&b("Opened CSV Visual Map in a separate window!");return}fetch("/__popout-csv-map").catch(()=>{}),_&&_(),b&&b("Opened CSV Visual Map!")}const Ns=typeof BroadcastChannel<"u"?new BroadcastChannel("chores_csv_map_sync"):null;function Gu(b,_,v,U){Ns&&Ns.postMessage({sheetIndex:b,rowIndex:_,colIndex:v,tsxLine:U,updatedAt:Date.now()}),fetch(`/__csv-map-state?sheetIndex=${b}&rowIndex=${_}&colIndex=${v}${U?`&tsxLine=${U}`:""}`).catch(()=>{})}function Uu({isStandalone:b=!1,activeCsvSheetIdx:_,setActiveCsvSheetIdx:v,selectedCellKey:U,setSelectedCellKey:K,onClose:q,onToast:Y}){const le=jl[_]||jl[0],ee=_===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",M=_===1?12:15;return I.useEffect(()=>{if(!U)return;const H=document.querySelector(`[data-cell-key="${U}"]`);H&&H.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[U,_]),n.jsxs("div",{style:{width:"100%",height:"100%",backgroundColor:"#0F172A",color:"#F8FAFC",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"ui-sans-serif, system-ui, sans-serif"},children:[n.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#1E293B",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[n.jsx("span",{style:{fontWeight:800,fontSize:"13px",color:"#FBBF24"},children:"📊 Live .tsx ↔ .csv Visual Spreadsheet Map"}),n.jsxs("div",{style:{display:"flex",gap:"6px"},children:[n.jsx("button",{type:"button",onClick:()=>v(0),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===0?"1px solid #38BDF8":"1px solid #475569",backgroundColor:_===0?"#0284C7":"#0F172A",color:"#FFFFFF"},children:"Sheet 0: Printable Weekly Schedule (CSV)"}),n.jsx("button",{type:"button",onClick:()=>v(1),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===1?"1px solid #34D399":"1px solid #475569",backgroundColor:_===1?"#059669":"#0F172A",color:"#FFFFFF"},children:"Sheet 1: Household Hub - Data (CSV)"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"11px",color:"#CBD5E1"},children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#38BDF8"},children:".tsx"})," •"," ",n.jsx("strong",{children:"Shift+Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#FBBF24"},children:".csv"})]}),!b&&n.jsx("button",{type:"button",onClick:()=>{zu(Y),q&&q()},title:"Pop out into a separate standalone window",style:{padding:"4px 10px",borderRadius:"6px",backgroundColor:"#2563EB",color:"#FFFFFF",border:"1px solid #60A5FA",cursor:"pointer",fontWeight:700},children:"↗ Open in Separate Window"}),q&&n.jsx("button",{type:"button",onClick:q,style:{padding:"4px 9px",borderRadius:"6px",backgroundColor:"#334155",color:"#F8FAFC",border:"none",cursor:"pointer",fontWeight:700},children:"✕ Close"})]})]}),U&&(()=>{const[H,P,ne]=U.split(":"),Se=parseInt(H,10),Fe=parseInt(P,10),ce=parseInt(ne,10),se=fd.get(U),$e=se?yd.get(se):null,Le=Se===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",te=Se===1?Fe+2:Fe+1,fe=Dl(ce+1);return n.jsxs("div",{style:{padding:"6px 14px",backgroundColor:"#022C22",borderBottom:"1px solid #065F46",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",fontSize:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",Le," → Line ",te,", Col ",fe]}),n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["⚛️ weekly_chores_household_hub.tsx → Line ",se||"?"," (index_ ",Fe,", row[",ce,"])"]}),$e&&n.jsx("span",{style:{color:"#F8FAFC",backgroundColor:"#064E3B",padding:"1px 8px",borderRadius:"4px",fontFamily:"monospace"},children:JSON.stringify($e.value)})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[se&&n.jsxs("button",{type:"button",onClick:()=>Cs("weekly_chores_household_hub.tsx",se,1,Y),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#059669",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .tsx Line ",se]}),n.jsxs("button",{type:"button",onClick:()=>Cs(Le,te,1,Y),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#D97706",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .csv Line ",te]})]})]})})(),n.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{backgroundColor:"#1E293B",position:"sticky",top:0,zIndex:2},children:[n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#FBBF24",textAlign:"center",minWidth:"72px"},children:"CSV Line"}),n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#34D399",textAlign:"center",minWidth:"72px"},children:"TSX index_"}),Array.from({length:M}).map((H,P)=>n.jsxs("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#93C5FD",textAlign:"left",minWidth:"125px"},children:["Col ",Dl(P+1)," ",n.jsxs("span",{style:{color:"#64748B",fontWeight:400},children:["(row[",P,"])"]})]},P))]})}),n.jsx("tbody",{children:(le.data||[]).map(H=>{const P=H.index_,ne=_===1?P+2:P+1;return n.jsxs("tr",{style:{borderBottom:"1px solid #1E293B"},children:[n.jsxs("td",{onClick:()=>Cs(ee,ne,1,Y),title:`Click to open ${ee} at Line ${ne}`,style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#FDE68A",backgroundColor:"#1E293B",fontWeight:700,cursor:"pointer"},children:["L",ne]}),n.jsxs("td",{style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#A7F3D0",backgroundColor:"#0F172A",fontWeight:600},children:["#",P]}),Array.from({length:M}).map((Se,Fe)=>{const ce=H.row?H.row[Fe]:null,se=fd.get(`${_}:${P}:${Fe}`),$e=`${_}:${P}:${Fe}`,Le=U===$e,te=ce==null||ce==="";return n.jsx("td",{"data-cell-key":$e,onClick:fe=>{K($e),Gu(_,P,Fe,se),fe.shiftKey?Cs(ee,ne,1,Y):se&&Cs("weekly_chores_household_hub.tsx",se,1,Y)},title:`TSX Line ${se||"?"} • ${ee} Line ${ne}, Col ${Dl(Fe+1)}
Click = Open in .tsx | Shift+Click = Open in .csv`,style:{border:Le?"2px solid #F59E0B":"1px solid #334155",backgroundColor:Le?"rgba(245, 158, 11, 0.28)":te?"#090D16":"#0F172A",color:te?"#334155":"#F8FAFC",padding:"5px 7px",cursor:"pointer",maxWidth:"210px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"4px",alignItems:"baseline"},children:[n.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:te?"·":String(ce)}),se&&n.jsxs("span",{style:{fontSize:"9px",color:Le?"#FBBF24":"#475569",flexShrink:0},children:[":",se]})]})},Fe)})]},P)})})]})})]})}function fp(){const[b,_]=I.useState(1),[v,U]=I.useState(null),[K,q]=I.useState(null),Y=I.useRef(0),le=ee=>{q(ee),setTimeout(()=>q(null),2400)};return I.useEffect(()=>{document.title="📊 CSV Visual Map — Weekly Chores & Household Hub";const ee=H=>{const P=H.data;P&&typeof P.sheetIndex=="number"&&P.rowIndex!==null&&P.rowIndex!==void 0&&(Y.current=P.updatedAt||Date.now(),_(P.sheetIndex),U(`${P.sheetIndex}:${P.rowIndex}:${P.colIndex??0}`))};Ns&&Ns.addEventListener("message",ee);const M=setInterval(()=>{fetch("/__csv-map-state").then(H=>H.json()).then(H=>{H&&H.updatedAt>Y.current&&H.rowIndex!==null&&H.rowIndex!==void 0&&(Y.current=H.updatedAt,_(H.sheetIndex),U(`${H.sheetIndex}:${H.rowIndex}:${H.colIndex??0}`))}).catch(()=>{})},400);return()=>{Ns&&Ns.removeEventListener("message",ee),clearInterval(M)}},[]),n.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[n.jsx(Uu,{isStandalone:!0,activeCsvSheetIdx:b,setActiveCsvSheetIdx:_,selectedCellKey:v,setSelectedCellKey:U,onToast:le}),K&&n.jsxs("div",{style:{position:"fixed",bottom:"18px",right:"18px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"8px 14px",borderRadius:"8px",fontSize:"12px",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.35)",zIndex:9999},children:["✓ ",K]})]})}const Fu="__code_inspector_dock_corner";function xp(){const[b,_]=I.useState(!1),[v,U]=I.useState(!1),[K,q]=I.useState(()=>{try{const re=localStorage.getItem(Fu);if(re&&["top-right","bottom-left","top-left","bottom-right","float"].includes(re))return re}catch{}return"top-right"}),[Y,le]=I.useState({x:0,y:0}),ee=I.useRef(null),[M,H]=I.useState(null),[P,ne]=I.useState([]),[Se,Fe]=I.useState(null),[ce,se]=I.useState(!1),[$e,Le]=I.useState(1),[te,fe]=I.useState(null),ze=I.useRef(""),ot=I.useRef(""),Ze=b||v,Ue=re=>{Fe(re),setTimeout(()=>Fe(null),2400)},Ee=async()=>{try{const re=localStorage.getItem("weekly_chores_canvas_sheet_data_v5");if(!re){Ue("⚠️ No data found in localStorage");return}const ie=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:JSON.parse(re)})})).json();ie.ok?Ue("✓ Saved current browser setup as default in code and config file!"):Ue(`⚠️ Failed: ${ie.error}`)}catch(re){Ue(`⚠️ Failed: ${(re==null?void 0:re.message)||String(re)}`)}},Ce=()=>{try{const re=localStorage.getItem("weekly_chores_canvas_sheet_data_v5"),Te={sheetData:re?JSON.parse(re):null,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},ie=new Blob([JSON.stringify(Te,null,2)],{type:"application/json"}),L=URL.createObjectURL(ie),V=document.createElement("a"),X=new Date().toISOString().slice(0,10);V.href=L,V.download=`weekly-chores-config-${X}.json`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(L),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Te)}).catch(()=>{}),Ue("✓ Exported configuration backup (.json)!")}catch(re){Ue(`⚠️ Export failed: ${(re==null?void 0:re.message)||String(re)}`)}},Ye=re=>{var L;const Te=(L=re.target.files)==null?void 0:L[0];if(!Te)return;const ie=new FileReader;ie.onload=V=>{var X;try{const x=JSON.parse((X=V.target)==null?void 0:X.result),R=x.sheetData||(Array.isArray(x)?x:null);Array.isArray(R)&&R.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(R)),window.postMessage({type:"SYNC_DATA",payload:R},"*"),Ue(`✓ Loaded configuration from "${Te.name}"!`)):Ue("⚠️ Invalid config: missing sheetData")}catch(x){Ue(`⚠️ Failed to parse: ${(x==null?void 0:x.message)||String(x)}`)}},ie.readAsText(Te),re.target.value=""},Ne=()=>{q(re=>{const Te=["top-right","bottom-left","top-left","bottom-right","float"],ie=Te[(Te.indexOf(re)+1)%Te.length];try{localStorage.setItem(Fu,ie)}catch{}return Ue(`Inspector window docked: ${ie.replace("-"," ").toUpperCase()}`),ie})};I.useEffect(()=>{const re=L=>{L.key==="Alt"?U(!0):L.key==="Escape"?b&&(_(!1),H(null)):(L.key==="d"||L.key==="D")&&Ze&&Ne()},Te=L=>{L.key==="Alt"&&(U(!1),b||H(null))},ie=()=>{U(!1)};return window.addEventListener("keydown",re),window.addEventListener("keyup",Te),window.addEventListener("blur",ie),()=>{window.removeEventListener("keydown",re),window.removeEventListener("keyup",Te),window.removeEventListener("blur",ie)}},[b]),I.useEffect(()=>{if(!Ze){H(null);return}const re=ie=>{const L=ie.target;if(!L||L.closest("#__code-inspector-ui")){H(null);return}le({x:ie.clientX,y:ie.clientY});const V=L.closest("[data-source-loc]");if(!V){H(null);return}const X=V.getAttribute("data-source-loc")||"",x=V.getAttribute("data-source-comp")||"",R=X.split(":");if(R.length<3)return;const ue=parseInt(R.pop(),10),be=parseInt(R.pop(),10),ye=R.join(":"),_e=V.getBoundingClientRect(),ke=Wu(V);if(ke&&ke.rowIndex!==null){const Ke=ke.sectionName.toLowerCase().includes("hub")?1:0,Ge=`${Ke}:${ke.rowIndex}:${ke.colIndex}`;ot.current!==Ge&&(ot.current=Ge,Le(Ke),fe(Ge),Gu(Ke,ke.rowIndex,ke.colIndex,ke.line))}H({file:ye,line:be,col:ue,tag:V.tagName.toLowerCase(),comp:x,rect:_e,dataMatch:ke});const Be=`${ye}:${be}`;if(ze.current!==Be){ze.current=Be;const Ke=Math.max(1,be-1),Ge=Math.min(uo.length,be+1),we=[];for(let At=Ke;At<=Ge;At++)we.push({line:At,text:uo[At-1]??""});ne(we)}},Te=ie=>{const L=ie.target;if(!L||L.closest("#__code-inspector-ui"))return;const V=L.closest("[data-source-loc]");if(!V)return;ie.preventDefault(),ie.stopPropagation();const x=(V.getAttribute("data-source-loc")||"").split(":");if(x.length<3)return;let R=parseInt(x.pop(),10),ue=parseInt(x.pop(),10),be=x.join(":");const ye=Wu(V);(ie.ctrlKey||ie.metaKey)&&ye?(be=ye.csvFile,ue=ye.csvLine,R=1):ie.shiftKey&&ye&&(ue=ye.line,R=1),Cs(be,ue,R,Ue)};return window.addEventListener("mousemove",re,!0),window.addEventListener("click",Te,!0),()=>{window.removeEventListener("mousemove",re,!0),window.removeEventListener("click",Te,!0)}},[Ze]);let Oe={};if(M){const L=M.rect;if(K==="top-right")L.right>window.innerWidth-497&&L.top<336?Oe={bottom:"64px",left:"16px"}:Oe={top:"16px",right:"16px"};else if(K==="bottom-left")L.left<497&&L.bottom>window.innerHeight-384?Oe={top:"16px",right:"16px"}:Oe={bottom:"64px",left:"16px"};else if(K==="top-left")L.left<497&&L.top<336?Oe={bottom:"64px",right:"16px"}:Oe={top:"16px",left:"16px"};else if(K==="bottom-right")L.right>window.innerWidth-497&&L.bottom>window.innerHeight-384?Oe={top:"16px",left:"16px"}:Oe={bottom:"64px",right:"16px"};else{let V=L.top,X=L.right+16;X+465>window.innerWidth-16&&(X=L.left-465-16),X<16&&(X=Math.max(16,Math.min(L.left,window.innerWidth-465-16)),V=L.top>336?L.top-320-12:L.bottom+12),V=Math.max(16,Math.min(V,window.innerHeight-320-16)),Oe={top:`${V}px`,left:`${X}px`}}}let Qe=!1;if(ee.current&&Ze){const re=ee.current.getBoundingClientRect(),Te=Math.max(re.left,Math.min(Y.x,re.right)),ie=Math.max(re.top,Math.min(Y.y,re.bottom));Math.hypot(Y.x-Te,Y.y-ie)<40&&(Qe=!0)}return n.jsxs("div",{id:"__code-inspector-ui",style:{position:"fixed",zIndex:999999,pointerEvents:"none"},children:[Ze&&M&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",top:M.rect.top,left:M.rect.left,width:M.rect.width,height:M.rect.height,border:"2px solid #3B82F6",backgroundColor:"rgba(59, 130, 246, 0.12)",borderRadius:"4px",pointerEvents:"none",transition:"all 0.04s ease-out"}}),n.jsxs("div",{style:{position:"fixed",top:M.rect.top>24?M.rect.top-22:M.rect.bottom+4,left:Math.max(4,Math.min(M.rect.left,window.innerWidth-240)),padding:"2px 8px",borderRadius:"4px",backgroundColor:"#0F172A",color:"#93C5FD",border:"1px solid #3B82F6",fontSize:"10px",fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none",whiteSpace:"nowrap",zIndex:999999,display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("span",{children:["<",M.tag,">",M.comp?` in <${M.comp}>`:""]}),n.jsxs("span",{style:{color:"#38BDF8",fontWeight:600},children:["• Line ",M.line]})]}),n.jsxs("div",{ref:ee,style:{position:"fixed",...Oe,width:"465px",maxWidth:"calc(100vw - 32px)",backgroundColor:"#0F172A",color:"#F8FAFC",padding:"10px 14px",borderRadius:"10px",boxShadow:"0 12px 30px -5px rgba(0, 0, 0, 0.65)",border:"1px solid #334155",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",lineHeight:"1.45",pointerEvents:"auto",opacity:Qe?.22:.98,transition:"opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease",zIndex:999999},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"},children:[n.jsxs("span",{style:{color:"#60A5FA",fontWeight:700,fontSize:"11.5px"},children:["<",M.tag,">",M.comp?n.jsxs("span",{style:{color:"#C084FC",fontWeight:500},children:[" in ",M.comp]}):null]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("button",{type:"button",onClick:Ne,title:"Move inspector window corner (or press 'D' key)",style:{backgroundColor:"#1E293B",color:"#93C5FD",border:"1px solid #3B82F6",borderRadius:"4px",padding:"2px 7px",fontSize:"9.5px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",K.replace("-"," ")]})]}),n.jsxs("span",{style:{color:"#38BDF8",backgroundColor:"#1E293B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["Line ",M.line,":",M.col]})]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"6px"},children:[M.file," (",n.jsx("strong",{children:"Click"})," = UI code)"]}),P.length>0&&n.jsx("div",{style:{backgroundColor:"#020617",padding:"6px 8px",borderRadius:"5px",border:"1px solid #1E293B",overflowX:"hidden",whiteSpace:"pre"},children:P.map(re=>{const Te=re.line===M.line,ie=Te&&M.col>30?Math.max(0,M.col-1):0,L=ie>0?"…"+re.text.slice(ie,ie+55):re.text.trim().slice(0,56);return n.jsxs("div",{style:{backgroundColor:Te?"rgba(59, 130, 246, 0.22)":"transparent",color:Te?"#F8FAFC":"#64748B",fontWeight:Te?600:400,padding:"0 4px",borderRadius:"2px",textOverflow:"ellipsis",overflow:"hidden"},children:[n.jsx("span",{style:{display:"inline-block",width:"36px",color:Te?"#60A5FA":"#475569",userSelect:"none"},children:re.line}),L]},re.line)})}),M.dataMatch&&n.jsxs("div",{style:{marginTop:"8px",paddingTop:"6px",borderTop:"1px solid #334155"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"2px"},children:[n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["📊 TSX Data (index_ ",M.dataMatch.rowIndex,", row[",M.dataMatch.colIndex,"])"]}),n.jsxs("span",{style:{color:"#6EE7B7",backgroundColor:"#064E3B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["TSX Line ",M.dataMatch.line]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"4px"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",M.dataMatch.csvFile]}),n.jsxs("span",{style:{color:"#FDE68A",backgroundColor:"#78350F",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["CSV Line ",M.dataMatch.csvLine," • Col ",M.dataMatch.colLetter]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"4px"},children:[n.jsx("strong",{children:"Shift+Click"})," = .tsx Data • ",n.jsx("strong",{children:"Ctrl+Click"})," = .csv File"]}),n.jsxs("div",{style:{backgroundColor:"#022C22",color:"#ECFDF5",padding:"4px 8px",borderRadius:"4px",border:"1px solid #065F46",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.jsx("span",{style:{color:"#34D399",marginRight:"8px"},children:M.dataMatch.line}),M.dataMatch.text.slice(0,56)]})]})]})]}),Se&&n.jsxs("div",{style:{position:"fixed",bottom:"54px",right:"16px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:["✓ ",Se]}),ce&&n.jsx("div",{style:{position:"fixed",bottom:"56px",left:"16px",right:"16px",height:"52vh",pointerEvents:"auto",borderRadius:"12px",overflow:"hidden",border:"2px solid #F59E0B",boxShadow:"0 20px 45px rgba(0, 0, 0, 0.65)"},children:n.jsx(Uu,{isStandalone:!1,activeCsvSheetIdx:$e,setActiveCsvSheetIdx:Le,selectedCellKey:te,setSelectedCellKey:fe,onClose:()=>se(!1),onToast:Ue})}),n.jsxs("div",{style:{position:"fixed",bottom:"14px",right:"16px",pointerEvents:"auto",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{type:"button",onClick:()=>zu(Ue,()=>se(!0)),title:"Open the CSV Visual Map in a separate standalone desktop window",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #F59E0B",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"↗"}),n.jsx("span",{children:"Pop Out CSV Map"})]}),n.jsxs("button",{type:"button",onClick:Ee,title:"Save current browser setup as the permanent default in code (.tsx) and configuration file",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #059669",backgroundColor:"#065F46",color:"#ECFDF5",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:"Save as Default"})]}),n.jsxs("button",{type:"button",onClick:Ce,title:"Download/export configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"⬇️"}),n.jsx("span",{children:"Export Config"})]}),n.jsxs("label",{title:"Import/restore a configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"⬆️"}),n.jsx("span",{children:"Import Config"}),n.jsx("input",{type:"file",accept:".json",onChange:Ye,style:{display:"none"}})]}),n.jsxs("button",{type:"button",onClick:()=>{try{localStorage.removeItem("weekly_chores_canvas_sheet_data_v1"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v2"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v3"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v4"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v5")}catch{}window.postMessage({type:"SYNC_DATA",payload:jl},"*"),Ue("Reset to INITIAL_SHEET_DATA")},title:"Clear cached localStorage and reload INITIAL_SHEET_DATA from code",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"Reset Data"})]}),n.jsxs("button",{type:"button",onClick:()=>_(re=>!re),title:"Toggle Inspect Mode (or hold Alt key while hovering)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:Ze?"2px solid #93C5FD":"1px solid #334155",backgroundColor:Ze?"#2563EB":"#0F172A",color:"#FFFFFF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:Ze?"Inspecting Code (Click element)":"Inspect Code (or hold Alt)"})]}),Ze&&n.jsxs("button",{type:"button",onClick:Ne,title:"Cycle inspector info window corner (or press 'D' key while inspecting)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #475569",backgroundColor:"#1E293B",color:"#93C5FD",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",K.replace("-"," ")," (Key: D)"]})]})]})]})}const yp=typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="csv-map";Qh.createRoot(document.getElementById("root")).render(n.jsx(io.StrictMode,{children:yp?n.jsx(fp,{}):n.jsxs(n.Fragment,{children:[n.jsx(pp,{}),n.jsx(xp,{})]})}));
