(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))Y($);new MutationObserver($=>{for(const G of $)if(G.type==="childList")for(const Q of G.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&Y(Q)}).observe(document,{childList:!0,subtree:!0});function v($){const G={};return $.integrity&&(G.integrity=$.integrity),$.referrerPolicy&&(G.referrerPolicy=$.referrerPolicy),$.crossOrigin==="use-credentials"?G.credentials="include":$.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function Y($){if($.ep)return;$.ep=!0;const G=v($);fetch($.href,G)}})();function Iu(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var sd={exports:{}},ma={},ad={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu;function Wh(){if(mu)return Oe;mu=1;var w=Symbol.for("react.element"),_=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Q=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),H=Symbol.iterator;function te(x){return x===null||typeof x!="object"?null:(x=H&&x[H]||x["@@iterator"],typeof x=="function"?x:null)}var be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Te=Object.assign,le={};function re(x,R,ce){this.props=x,this.context=R,this.refs=le,this.updater=ce||be}re.prototype.isReactComponent={},re.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},re.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Me(){}Me.prototype=re.prototype;function Se(x,R,ce){this.props=x,this.context=R,this.refs=le,this.updater=ce||be}var X=Se.prototype=new Me;X.constructor=Se,Te(X,re.prototype),X.isPureReactComponent=!0;var De=Array.isArray,Ye=Object.prototype.hasOwnProperty,ot={current:null},Ve={key:!0,ref:!0,__self:!0,__source:!0};function Le(x,R,ce){var he,me={},xe=null,Ce=null;if(R!=null)for(he in R.ref!==void 0&&(Ce=R.ref),R.key!==void 0&&(xe=""+R.key),R)Ye.call(R,he)&&!Ve.hasOwnProperty(he)&&(me[he]=R[he]);var Re=arguments.length-2;if(Re===1)me.children=ce;else if(1<Re){for(var We=Array(Re),tt=0;tt<Re;tt++)We[tt]=arguments[tt+2];me.children=We}if(x&&x.defaultProps)for(he in Re=x.defaultProps,Re)me[he]===void 0&&(me[he]=Re[he]);return{$$typeof:w,type:x,key:xe,ref:Ce,props:me,_owner:ot.current}}function je(x,R){return{$$typeof:w,type:x.type,key:R,ref:x.ref,props:x.props,_owner:x._owner}}function ge(x){return typeof x=="object"&&x!==null&&x.$$typeof===w}function He(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ce){return R[ce]})}var we=/\/+/g;function ze(x,R){return typeof x=="object"&&x!==null&&x.key!=null?He(""+x.key):R.toString(36)}function Pe(x,R,ce,he,me){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Ce=!1;if(x===null)Ce=!0;else switch(xe){case"string":case"number":Ce=!0;break;case"object":switch(x.$$typeof){case w:case _:Ce=!0}}if(Ce)return Ce=x,me=me(Ce),x=he===""?"."+ze(Ce,0):he,De(me)?(ce="",x!=null&&(ce=x.replace(we,"$&/")+"/"),Pe(me,R,ce,"",function(tt){return tt})):me!=null&&(ge(me)&&(me=je(me,ce+(!me.key||Ce&&Ce.key===me.key?"":(""+me.key).replace(we,"$&/")+"/")+x)),R.push(me)),1;if(Ce=0,he=he===""?".":he+":",De(x))for(var Re=0;Re<x.length;Re++){xe=x[Re];var We=he+ze(xe,Re);Ce+=Pe(xe,R,ce,We,me)}else if(We=te(x),typeof We=="function")for(x=We.call(x),Re=0;!(xe=x.next()).done;)xe=xe.value,We=he+ze(xe,Re++),Ce+=Pe(xe,R,ce,We,me);else if(xe==="object")throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return Ce}function Ge(x,R,ce){if(x==null)return x;var he=[],me=0;return Pe(x,he,"","",function(xe){return R.call(ce,xe,me++)}),he}function Be(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(ce){(x._status===0||x._status===-1)&&(x._status=1,x._result=ce)},function(ce){(x._status===0||x._status===-1)&&(x._status=2,x._result=ce)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var $e={current:null},E={transition:null},K={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:E,ReactCurrentOwner:ot};function W(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:Ge,forEach:function(x,R,ce){Ge(x,function(){R.apply(this,arguments)},ce)},count:function(x){var R=0;return Ge(x,function(){R++}),R},toArray:function(x){return Ge(x,function(R){return R})||[]},only:function(x){if(!ge(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Oe.Component=re,Oe.Fragment=v,Oe.Profiler=$,Oe.PureComponent=Se,Oe.StrictMode=Y,Oe.Suspense=ee,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Oe.act=W,Oe.cloneElement=function(x,R,ce){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var he=Te({},x.props),me=x.key,xe=x.ref,Ce=x._owner;if(R!=null){if(R.ref!==void 0&&(xe=R.ref,Ce=ot.current),R.key!==void 0&&(me=""+R.key),x.type&&x.type.defaultProps)var Re=x.type.defaultProps;for(We in R)Ye.call(R,We)&&!Ve.hasOwnProperty(We)&&(he[We]=R[We]===void 0&&Re!==void 0?Re[We]:R[We])}var We=arguments.length-2;if(We===1)he.children=ce;else if(1<We){Re=Array(We);for(var tt=0;tt<We;tt++)Re[tt]=arguments[tt+2];he.children=Re}return{$$typeof:w,type:x.type,key:me,ref:xe,props:he,_owner:Ce}},Oe.createContext=function(x){return x={$$typeof:Q,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:G,_context:x},x.Consumer=x},Oe.createElement=Le,Oe.createFactory=function(x){var R=Le.bind(null,x);return R.type=x,R},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(x){return{$$typeof:de,render:x}},Oe.isValidElement=ge,Oe.lazy=function(x){return{$$typeof:B,_payload:{_status:-1,_result:x},_init:Be}},Oe.memo=function(x,R){return{$$typeof:L,type:x,compare:R===void 0?null:R}},Oe.startTransition=function(x){var R=E.transition;E.transition={};try{x()}finally{E.transition=R}},Oe.unstable_act=W,Oe.useCallback=function(x,R){return $e.current.useCallback(x,R)},Oe.useContext=function(x){return $e.current.useContext(x)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(x){return $e.current.useDeferredValue(x)},Oe.useEffect=function(x,R){return $e.current.useEffect(x,R)},Oe.useId=function(){return $e.current.useId()},Oe.useImperativeHandle=function(x,R,ce){return $e.current.useImperativeHandle(x,R,ce)},Oe.useInsertionEffect=function(x,R){return $e.current.useInsertionEffect(x,R)},Oe.useLayoutEffect=function(x,R){return $e.current.useLayoutEffect(x,R)},Oe.useMemo=function(x,R){return $e.current.useMemo(x,R)},Oe.useReducer=function(x,R,ce){return $e.current.useReducer(x,R,ce)},Oe.useRef=function(x){return $e.current.useRef(x)},Oe.useState=function(x){return $e.current.useState(x)},Oe.useSyncExternalStore=function(x,R,ce){return $e.current.useSyncExternalStore(x,R,ce)},Oe.useTransition=function(){return $e.current.useTransition()},Oe.version="18.3.1",Oe}var xu;function gd(){return xu||(xu=1,ad.exports=Wh()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu;function Ph(){if(fu)return ma;fu=1;var w=gd(),_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(de,ee,L){var B,H={},te=null,be=null;L!==void 0&&(te=""+L),ee.key!==void 0&&(te=""+ee.key),ee.ref!==void 0&&(be=ee.ref);for(B in ee)Y.call(ee,B)&&!G.hasOwnProperty(B)&&(H[B]=ee[B]);if(de&&de.defaultProps)for(B in ee=de.defaultProps,ee)H[B]===void 0&&(H[B]=ee[B]);return{$$typeof:_,type:de,key:te,ref:be,props:H,_owner:$.current}}return ma.Fragment=v,ma.jsx=Q,ma.jsxs=Q,ma}var yu;function Kh(){return yu||(yu=1,sd.exports=Ph()),sd.exports}var r=Kh(),F=gd();const oo=Iu(F);var kl={},ld={exports:{}},nr={},id={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function Bh(){return gu||(gu=1,(function(w){function _(E,K){var W=E.length;E.push(K);e:for(;0<W;){var x=W-1>>>1,R=E[x];if(0<$(R,K))E[x]=K,E[W]=R,W=x;else break e}}function v(E){return E.length===0?null:E[0]}function Y(E){if(E.length===0)return null;var K=E[0],W=E.pop();if(W!==K){E[0]=W;e:for(var x=0,R=E.length,ce=R>>>1;x<ce;){var he=2*(x+1)-1,me=E[he],xe=he+1,Ce=E[xe];if(0>$(me,W))xe<R&&0>$(Ce,me)?(E[x]=Ce,E[xe]=W,x=xe):(E[x]=me,E[he]=W,x=he);else if(xe<R&&0>$(Ce,W))E[x]=Ce,E[xe]=W,x=xe;else break e}}return K}function $(E,K){var W=E.sortIndex-K.sortIndex;return W!==0?W:E.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var G=performance;w.unstable_now=function(){return G.now()}}else{var Q=Date,de=Q.now();w.unstable_now=function(){return Q.now()-de}}var ee=[],L=[],B=1,H=null,te=3,be=!1,Te=!1,le=!1,re=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(E){for(var K=v(L);K!==null;){if(K.callback===null)Y(L);else if(K.startTime<=E)Y(L),K.sortIndex=K.expirationTime,_(ee,K);else break;K=v(L)}}function De(E){if(le=!1,X(E),!Te)if(v(ee)!==null)Te=!0,Be(Ye);else{var K=v(L);K!==null&&$e(De,K.startTime-E)}}function Ye(E,K){Te=!1,le&&(le=!1,Me(Le),Le=-1),be=!0;var W=te;try{for(X(K),H=v(ee);H!==null&&(!(H.expirationTime>K)||E&&!He());){var x=H.callback;if(typeof x=="function"){H.callback=null,te=H.priorityLevel;var R=x(H.expirationTime<=K);K=w.unstable_now(),typeof R=="function"?H.callback=R:H===v(ee)&&Y(ee),X(K)}else Y(ee);H=v(ee)}if(H!==null)var ce=!0;else{var he=v(L);he!==null&&$e(De,he.startTime-K),ce=!1}return ce}finally{H=null,te=W,be=!1}}var ot=!1,Ve=null,Le=-1,je=5,ge=-1;function He(){return!(w.unstable_now()-ge<je)}function we(){if(Ve!==null){var E=w.unstable_now();ge=E;var K=!0;try{K=Ve(!0,E)}finally{K?ze():(ot=!1,Ve=null)}}else ot=!1}var ze;if(typeof Se=="function")ze=function(){Se(we)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ge=Pe.port2;Pe.port1.onmessage=we,ze=function(){Ge.postMessage(null)}}else ze=function(){re(we,0)};function Be(E){Ve=E,ot||(ot=!0,ze())}function $e(E,K){Le=re(function(){E(w.unstable_now())},K)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(E){E.callback=null},w.unstable_continueExecution=function(){Te||be||(Te=!0,Be(Ye))},w.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<E?Math.floor(1e3/E):5},w.unstable_getCurrentPriorityLevel=function(){return te},w.unstable_getFirstCallbackNode=function(){return v(ee)},w.unstable_next=function(E){switch(te){case 1:case 2:case 3:var K=3;break;default:K=te}var W=te;te=K;try{return E()}finally{te=W}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(E,K){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var W=te;te=E;try{return K()}finally{te=W}},w.unstable_scheduleCallback=function(E,K,W){var x=w.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?x+W:x):W=x,E){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=W+R,E={id:B++,callback:K,priorityLevel:E,startTime:W,expirationTime:R,sortIndex:-1},W>x?(E.sortIndex=W,_(L,E),v(ee)===null&&E===v(L)&&(le?(Me(Le),Le=-1):le=!0,$e(De,W-x))):(E.sortIndex=R,_(ee,E),Te||be||(Te=!0,Be(Ye))),E},w.unstable_shouldYield=He,w.unstable_wrapCallback=function(E){var K=te;return function(){var W=te;te=K;try{return E.apply(this,arguments)}finally{te=W}}}})(dd)),dd}var wu;function $h(){return wu||(wu=1,id.exports=Bh()),id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function qh(){if(bu)return nr;bu=1;var w=gd(),_=$h();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y=new Set,$={};function G(e,t){Q(e,t),Q(e+"Capture",t)}function Q(e,t){for($[e]=t,e=0;e<t.length;e++)Y.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},H={};function te(e){return ee.call(H,e)?!0:ee.call(B,e)?!1:L.test(e)?H[e]=!0:(B[e]=!0,!1)}function be(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Te(e,t,n,o){if(t===null||typeof t>"u"||be(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,o,a,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){re[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){re[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){re[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){re[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Me=/[\-:]([a-z])/g;function Se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Me,Se);re[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Me,Se);re[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Me,Se);re[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){re[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),re.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){re[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,o){var a=re.hasOwnProperty(t)?re[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Te(t,n,a,o)&&(n=null),o||a===null?te(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var De=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ye=Symbol.for("react.element"),ot=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),He=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),E=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,x;function R(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ce=!1;function he(e,t){if(!e||ce)return"";ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var o=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){o=M}e.call(t.prototype)}else{try{throw Error()}catch(M){o=M}e()}}catch(M){if(M&&o&&typeof M.stack=="string"){for(var a=M.stack.split(`
`),l=o.stack.split(`
`),u=a.length-1,g=l.length-1;1<=u&&0<=g&&a[u]!==l[g];)g--;for(;1<=u&&0<=g;u--,g--)if(a[u]!==l[g]){if(u!==1||g!==1)do if(u--,g--,0>g||a[u]!==l[g]){var k=`
`+a[u].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=u&&0<=g);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function me(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function xe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ve:return"Fragment";case ot:return"Portal";case je:return"Profiler";case Le:return"StrictMode";case ze:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case He:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(t);case 8:return t===Le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=We(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){o=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(u){o=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fe(e){e._valueTracker||(e._valueTracker=tt(e))}function or(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pr(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dt(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Re(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jn(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function st(e,t){jn(e,t);var n=Re(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ht(e,t.type,n):t.hasOwnProperty("defaultValue")&&ht(e,t.type,Re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ht(e,t,n){(t!=="number"||yt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var an=Array.isArray;function Vt(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Re(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lt(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(an(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Re(n)}}function ln(e,t){var n=Re(t.value),o=Re(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,ya=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ga=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){ga.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function sr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function dn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=sr(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Cs=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ns(e,t){if(t){if(Cs[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function xr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tr=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oo=null,fr=null,cn=null;function Wo(e){if(e=Zs(e)){if(typeof Oo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Wa(t),Oo(e.stateNode,e.type,t))}}function Ss(e){fr?cn?cn.push(e):cn=[e]:fr=e}function Po(){if(fr){var e=fr,t=cn;if(cn=fr=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function Ko(e,t){return e(t)}function wa(){}var uo=!1;function ba(e,t,n){if(uo)return e(t,n);uo=!0;try{return Ko(e,t,n)}finally{uo=!1,(fr!==null||cn!==null)&&(wa(),Po())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var o=Wa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var As=!1;if(de)try{var En={};Object.defineProperty(En,"passive",{get:function(){As=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{As=!1}function Ds(e,t,n,o,a,l,u,g,k){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(z){this.onError(z)}}var ho=!1,$t=null,Mn=!1,yr=null,js={onError:function(e){ho=!0,$t=e}};function _a(e,t,n,o,a,l,u,g,k){ho=!1,$t=null,Ds.apply(js,arguments)}function po(e,t,n,o,a,l,u,g,k){if(_a.apply(this,arguments),ho){if(ho){var M=$t;ho=!1,$t=null}else throw Error(v(198));Mn||(Mn=!0,yr=M)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function va(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ts(e){if(Er(e)!==e)throw Error(v(188))}function oe(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ts(a),e;if(l===o)return Ts(a),t;l=l.sibling}throw Error(v(188))}if(n.return!==o.return)n=a,o=l;else{for(var u=!1,g=a.child;g;){if(g===n){u=!0,n=a,o=l;break}if(g===o){u=!0,o=a,n=l;break}g=g.sibling}if(!u){for(g=l.child;g;){if(g===n){u=!0,n=l,o=a;break}if(g===o){u=!0,o=l,n=a;break}g=g.sibling}if(!u)throw Error(v(189))}}if(n.alternate!==o)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Bo(e){return e=oe(e),e!==null?ka(e):null}function ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ka(e);if(t!==null)return t;e=e.sibling}return null}var Es=_.unstable_scheduleCallback,Ms=_.unstable_cancelCallback,$o=_.unstable_shouldYield,Rn=_.unstable_requestPaint,rt=_.unstable_now,Rs=_.unstable_getCurrentPriorityLevel,Mr=_.unstable_ImmediatePriority,Ln=_.unstable_UserBlockingPriority,Gr=_.unstable_NormalPriority,Ls=_.unstable_LowPriority,Is=_.unstable_IdlePriority,Rr=null,Ie=null;function It(e){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Rr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:mo,Lr=Math.log,Ca=Math.LN2;function mo(e){return e>>>=0,e===0?32:31-(Lr(e)/Ca|0)|0}var Qe=64,qt=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var g=u&~a;g!==0?o=xo(g):(l&=u,l!==0&&(o=xo(l)))}else u=n&~a,u!==0?o=xo(u):l!==0&&(o=xo(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Ft(t),a=1<<n,o|=e[n],t&=~a;return o}function Tl(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ft(l),g=1<<u,k=a[u];k===-1?((g&n)===0||(g&o)!==0)&&(a[u]=Tl(g,t)):k<=t&&(e.expiredLanes|=g),l&=~g}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Na(){var e=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),e}function gr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function Ur(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ft(n),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~l}}function Vr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Ft(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Je=0;function Ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sa,In,Yt,un,Aa,Yr=!1,Fr=[],ar=null,Qr=null,lr=null,Fn=new Map,On=new Map,ir=[],Os="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rl(e,t){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function Ho(e,t,n,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=Zs(t),t!==null&&In(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Jr(e,t,n,o,a){switch(t){case"focusin":return ar=Ho(ar,e,t,n,o,a),!0;case"dragenter":return Qr=Ho(Qr,e,t,n,o,a),!0;case"mouseover":return lr=Ho(lr,e,t,n,o,a),!0;case"pointerover":var l=a.pointerId;return Fn.set(l,Ho(Fn.get(l)||null,e,t,n,o,a)),!0;case"gotpointercapture":return l=a.pointerId,On.set(l,Ho(On.get(l)||null,e,t,n,o,a)),!0}return!1}function pt(e){var t=ko(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=va(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){Yt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ct(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Tr=o,n.target.dispatchEvent(o),Tr=null}else return t=Zs(n),t!==null&&In(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){Ct(e)&&n.delete(t)}function Ot(){Yr=!1,ar!==null&&Ct(ar)&&(ar=null),Qr!==null&&Ct(Qr)&&(Qr=null),lr!==null&&Ct(lr)&&(lr=null),Fn.forEach(Ws),On.forEach(Ws)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yr||(Yr=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,Ot)))}function Qt(e){function t(a){return Xr(a,e)}if(0<Fr.length){Xr(Fr[0],e);for(var n=1;n<Fr.length;n++){var o=Fr[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ar!==null&&Xr(ar,e),Qr!==null&&Xr(Qr,e),lr!==null&&Xr(lr,e),Fn.forEach(t),On.forEach(t),n=0;n<ir.length;n++)o=ir[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)pt(n),n.blockedOn===null&&ir.shift()}var wr=De.ReactCurrentBatchConfig,fo=!0;function hn(e,t,n,o){var a=Je,l=wr.transition;wr.transition=null;try{Je=1,zo(e,t,n,o)}finally{Je=a,wr.transition=l}}function Ps(e,t,n,o){var a=Je,l=wr.transition;wr.transition=null;try{Je=4,zo(e,t,n,o)}finally{Je=a,wr.transition=l}}function zo(e,t,n,o){if(fo){var a=Ks(e,t,n,o);if(a===null)Yl(e,t,o,yo,n),Rl(e,o);else if(Jr(a,e,t,n,o))o.stopPropagation();else if(Rl(e,o),t&4&&-1<Os.indexOf(e)){for(;a!==null;){var l=Zs(a);if(l!==null&&Sa(l),l=Ks(e,t,n,o),l===null&&Yl(e,t,o,yo,n),l===a)break;a=l}a!==null&&o.stopPropagation()}else Yl(e,t,o,null,n)}}var yo=null;function Ks(e,t,n,o){if(yo=null,e=co(o),e=ko(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=va(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function go(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rs()){case Mr:return 1;case Ln:return 4;case Gr:case Ls:return 16;case Is:return 536870912;default:return 16}default:return 16}}var br=null,Jt=null,wo=null;function Da(){if(wo)return wo;var e,t=Jt,n=t.length,o,a="value"in br?br.value:br.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(o=1;o<=u&&t[n-o]===a[l-o];o++);return wo=a.slice(e,1<o?1-o:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function Bs(){return!1}function jt(e){function t(n,o,a,l,u){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?bo:Bs,this.isPropagationStopped=Bs,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=jt(pn),_o=W({},pn,{view:0,detail:0}),ja=jt(_o),Wn,Go,Pn,Uo=W({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Wn=e.screenX-Pn.screenX,Go=e.screenY-Pn.screenY):Go=Wn=0,Pn=e),Wn)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Ta=jt(Uo),Vo=W({},Uo,{dataTransfer:0}),Ll=jt(Vo),Il=W({},_o,{relatedTarget:0}),mn=jt(Il),Fl=W({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ol=jt(Fl),qs=W({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wl=jt(qs),Pl=W({},pn,{data:0}),_r=jt(Pl),Kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bl(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kl[e])?!!t[e]:!1}function Hs(){return Bl}var xn=W({},_o,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s=jt(xn),i=W({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c=jt(i),m=W({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),p=jt(m),h=W({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),d=jt(h),f=W({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y=jt(f),C=[9,13,27,32],D=de&&"CompositionEvent"in window,T=null;de&&"documentMode"in document&&(T=document.documentMode);var b=de&&"TextEvent"in window&&!T,N=de&&(!D||T&&8<T&&11>=T),P=" ",V=!1;function O(e,t){switch(e){case"keyup":return C.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Z=!1;function ne(e,t){switch(e){case"compositionend":return I(t);case"keypress":return t.which!==32?null:(V=!0,P);case"textInput":return e=t.data,e===P&&V?null:e;default:return null}}function Ee(e,t){if(Z)return e==="compositionend"||!D&&O(e,t)?(e=Da(),wo=Jt=br=null,Z=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return N&&t.locale!=="ko"?null:t.data;default:return null}}var Ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function at(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ke[e.type]:t==="textarea"}function bt(e,t,n,o){Ss(o),t=Ia(t,"onChange"),0<t.length&&(n=new $s("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ye=null,ke=null;function Fe(e){Td(e,0)}function Xe(e){var t=ts(e);if(or(t))return e}function fn(e,t){if(e==="change")return t}var vr=!1;if(de){var en;if(de){var Ze="oninput"in document;if(!Ze){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Ze=typeof zs.oninput=="function"}en=Ze}else en=!1;vr=en&&(!document.documentMode||9<document.documentMode)}function Gs(){ye&&(ye.detachEvent("onpropertychange",Us),ke=ye=null)}function Us(e){if(e.propertyName==="value"&&Xe(ke)){var t=[];bt(t,ke,e,co(e)),ba(Fe,t)}}function Ea(e,t,n){e==="focusin"?(Gs(),ye=t,ke=n,ye.attachEvent("onpropertychange",Us)):e==="focusout"&&Gs()}function Yo(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xe(ke)}function Qo(e,t){if(e==="click")return Xe(t)}function Bn(e,t){if(e==="input"||e==="change")return Xe(t)}function yn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:yn;function gn(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!ee.call(t,a)||!Nt(e[a],t[a]))return!1}return!0}function vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _t(e,t){var n=vo(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vo(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(){for(var e=window,t=yt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yt(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zu(e){var t=bd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kr(n.ownerDocument.documentElement,n)){if(o!==null&&$l(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=_t(n,l);var u=_t(n,o);a&&u&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gu=de&&"documentMode"in document&&11>=document.documentMode,Jo=null,ql=null,Vs=null,Hl=!1;function _d(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Jo==null||Jo!==yt(o)||(o=Jo,"selectionStart"in o&&$l(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vs&&gn(Vs,o)||(Vs=o,o=Ia(ql,"onSelect"),0<o.length&&(t=new $s("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Jo)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xo={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},zl={},vd={};de&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Ra(e){if(zl[e])return zl[e];if(!Xo[e])return e;var t=Xo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return zl[e]=t[n];return e}var kd=Ra("animationend"),Cd=Ra("animationiteration"),Nd=Ra("animationstart"),Sd=Ra("transitionend"),Ad=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){Ad.set(e,t),G(t,[e])}for(var Gl=0;Gl<Dd.length;Gl++){var Ul=Dd[Gl],Uu=Ul.toLowerCase(),Vu=Ul[0].toUpperCase()+Ul.slice(1);$n(Uu,"on"+Vu)}$n(kd,"onAnimationEnd"),$n(Cd,"onAnimationIteration"),$n(Nd,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(Sd,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function jd(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,po(o,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var u=o.length-1;0<=u;u--){var g=o[u],k=g.instance,M=g.currentTarget;if(g=g.listener,k!==l&&a.isPropagationStopped())break e;jd(a,g,M),l=k}else for(u=0;u<o.length;u++){if(g=o[u],k=g.instance,M=g.currentTarget,g=g.listener,k!==l&&a.isPropagationStopped())break e;jd(a,g,M),l=k}}}if(Mn)throw e=yr,Mn=!1,yr=null,e}function lt(e,t){var n=t[ti];n===void 0&&(n=t[ti]=new Set);var o=e+"__bubble";n.has(o)||(Ed(t,e,2,!1),n.add(o))}function Vl(e,t,n){var o=0;t&&(o|=4),Ed(n,e,o,t)}var La="_reactListening"+Math.random().toString(36).slice(2);function Qs(e){if(!e[La]){e[La]=!0,Y.forEach(function(n){n!=="selectionchange"&&(Yu.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[La]||(t[La]=!0,Vl("selectionchange",!1,t))}}function Ed(e,t,n,o){switch(go(t)){case 1:var a=hn;break;case 4:a=Ps;break;default:a=zo}n=a.bind(null,t,n,e),a=void 0,!As||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Yl(e,t,n,o,a){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var g=o.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(u===4)for(u=o.return;u!==null;){var k=u.tag;if((k===3||k===4)&&(k=u.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;u=u.return}for(;g!==null;){if(u=ko(g),u===null)return;if(k=u.tag,k===5||k===6){o=l=u;continue e}g=g.parentNode}}o=o.return}ba(function(){var M=l,z=co(n),U=[];e:{var q=Ad.get(e);if(q!==void 0){var se=$s,ie=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":se=s;break;case"focusin":ie="focus",se=mn;break;case"focusout":ie="blur",se=mn;break;case"beforeblur":case"afterblur":se=mn;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ll;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=p;break;case kd:case Cd:case Nd:se=Ol;break;case Sd:se=d;break;case"scroll":se=ja;break;case"wheel":se=y;break;case"copy":case"cut":case"paste":se=Wl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=c}var ue=(t&4)!==0,gt=!ue&&e==="scroll",A=ue?q!==null?q+"Capture":null:q;ue=[];for(var S=M,j;S!==null;){j=S;var J=j.stateNode;if(j.tag===5&&J!==null&&(j=J,A!==null&&(J=zr(S,A),J!=null&&ue.push(Js(S,J,j)))),gt)break;S=S.return}0<ue.length&&(q=new se(q,ie,null,n,z),U.push({event:q,listeners:ue}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",q&&n!==Tr&&(ie=n.relatedTarget||n.fromElement)&&(ko(ie)||ie[wn]))break e;if((se||q)&&(q=z.window===z?z:(q=z.ownerDocument)?q.defaultView||q.parentWindow:window,se?(ie=n.relatedTarget||n.toElement,se=M,ie=ie?ko(ie):null,ie!==null&&(gt=Er(ie),ie!==gt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(se=null,ie=M),se!==ie)){if(ue=Ta,J="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ue=c,J="onPointerLeave",A="onPointerEnter",S="pointer"),gt=se==null?q:ts(se),j=ie==null?q:ts(ie),q=new ue(J,S+"leave",se,n,z),q.target=gt,q.relatedTarget=j,J=null,ko(z)===M&&(ue=new ue(A,S+"enter",ie,n,z),ue.target=j,ue.relatedTarget=gt,J=ue),gt=J,se&&ie)t:{for(ue=se,A=ie,S=0,j=ue;j;j=Zo(j))S++;for(j=0,J=A;J;J=Zo(J))j++;for(;0<S-j;)ue=Zo(ue),S--;for(;0<j-S;)A=Zo(A),j--;for(;S--;){if(ue===A||A!==null&&ue===A.alternate)break t;ue=Zo(ue),A=Zo(A)}ue=null}else ue=null;se!==null&&Md(U,q,se,ue,!1),ie!==null&&gt!==null&&Md(U,gt,ie,ue,!0)}}e:{if(q=M?ts(M):window,se=q.nodeName&&q.nodeName.toLowerCase(),se==="select"||se==="input"&&q.type==="file")var pe=fn;else if(at(q))if(vr)pe=Bn;else{pe=Yo;var _e=Ea}else(se=q.nodeName)&&se.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(pe=Qo);if(pe&&(pe=pe(e,M))){bt(U,pe,n,z);break e}_e&&_e(e,q,M),e==="focusout"&&(_e=q._wrapperState)&&_e.controlled&&q.type==="number"&&ht(q,"number",q.value)}switch(_e=M?ts(M):window,e){case"focusin":(at(_e)||_e.contentEditable==="true")&&(Jo=_e,ql=M,Vs=null);break;case"focusout":Vs=ql=Jo=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,_d(U,n,z);break;case"selectionchange":if(Gu)break;case"keydown":case"keyup":_d(U,n,z)}var ve;if(D)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Z?O(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(N&&n.locale!=="ko"&&(Z||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Z&&(ve=Da()):(br=z,Jt="value"in br?br.value:br.textContent,Z=!0)),_e=Ia(M,Ae),0<_e.length&&(Ae=new _r(Ae,e,null,n,z),U.push({event:Ae,listeners:_e}),ve?Ae.data=ve:(ve=I(n),ve!==null&&(Ae.data=ve)))),(ve=b?ne(e,n):Ee(e,n))&&(M=Ia(M,"onBeforeInput"),0<M.length&&(z=new _r("onBeforeInput","beforeinput",null,n,z),U.push({event:z,listeners:M}),z.data=ve))}Td(U,t)})}function Js(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=zr(e,n),l!=null&&o.unshift(Js(e,l,a)),l=zr(e,t),l!=null&&o.push(Js(e,l,a))),e=e.return}return o}function Zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Md(e,t,n,o,a){for(var l=t._reactName,u=[];n!==null&&n!==o;){var g=n,k=g.alternate,M=g.stateNode;if(k!==null&&k===o)break;g.tag===5&&M!==null&&(g=M,a?(k=zr(n,l),k!=null&&u.unshift(Js(n,k,g))):a||(k=zr(n,l),k!=null&&u.push(Js(n,k,g)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Qu=/\r\n?/g,Ju=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(Qu,`
`).replace(Ju,"")}function Fa(e,t,n){if(t=Rd(t),Rd(e)!==t&&n)throw Error(v(425))}function Oa(){}var Ql=null,Jl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Xu=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,Zu=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(eh)}:Zl;function eh(e){setTimeout(function(){throw e})}function ei(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Qt(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Qt(t)}function qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),tn="__reactFiber$"+es,Xs="__reactProps$"+es,wn="__reactContainer$"+es,ti="__reactEvents$"+es,th="__reactListeners$"+es,rh="__reactHandles$"+es;function ko(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Id(e);e!==null;){if(n=e[tn])return n;e=Id(e)}return t}e=n,n=e.parentNode}return null}function Zs(e){return e=e[tn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ts(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Wa(e){return e[Xs]||null}var ri=[],rs=-1;function Hn(e){return{current:e}}function it(e){0>rs||(e.current=ri[rs],ri[rs]=null,rs--)}function nt(e,t){rs++,ri[rs]=e.current,e.current=t}var zn={},Wt=Hn(zn),Xt=Hn(!1),Co=zn;function ns(e,t){var n=e.type.contextTypes;if(!n)return zn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Zt(e){return e=e.childContextTypes,e!=null}function Pa(){it(Xt),it(Wt)}function Fd(e,t,n){if(Wt.current!==zn)throw Error(v(168));nt(Wt,t),nt(Xt,n)}function Od(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(v(108,Ce(e)||"Unknown",a));return W({},n,o)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Co=Wt.current,nt(Wt,e),nt(Xt,Xt.current),!0}function Wd(e,t,n){var o=e.stateNode;if(!o)throw Error(v(169));n?(e=Od(e,t,Co),o.__reactInternalMemoizedMergedChildContext=e,it(Xt),it(Wt),nt(Wt,e)):it(Xt),nt(Xt,n)}var bn=null,Ba=!1,ni=!1;function Pd(e){bn===null?bn=[e]:bn.push(e)}function nh(e){Ba=!0,Pd(e)}function Gn(){if(!ni&&bn!==null){ni=!0;var e=0,t=Je;try{var n=bn;for(Je=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}bn=null,Ba=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),Es(Mr,Gn),a}finally{Je=t,ni=!1}}return null}var os=[],ss=0,$a=null,qa=0,Cr=[],Nr=0,No=null,_n=1,vn="";function So(e,t){os[ss++]=qa,os[ss++]=$a,$a=e,qa=t}function Kd(e,t,n){Cr[Nr++]=_n,Cr[Nr++]=vn,Cr[Nr++]=No,No=e;var o=_n;e=vn;var a=32-Ft(o)-1;o&=~(1<<a),n+=1;var l=32-Ft(t)+a;if(30<l){var u=a-a%5;l=(o&(1<<u)-1).toString(32),o>>=u,a-=u,_n=1<<32-Ft(t)+a|n<<a|o,vn=l+e}else _n=1<<l|n<<a|o,vn=e}function oi(e){e.return!==null&&(So(e,1),Kd(e,1,0))}function si(e){for(;e===$a;)$a=os[--ss],os[ss]=null,qa=os[--ss],os[ss]=null;for(;e===No;)No=Cr[--Nr],Cr[Nr]=null,vn=Cr[--Nr],Cr[Nr]=null,_n=Cr[--Nr],Cr[Nr]=null}var dr=null,cr=null,ct=!1,Wr=null;function Bd(e,t){var n=jr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dr=e,cr=qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dr=e,cr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=No!==null?{id:_n,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dr=e,cr=null,!0):!1;default:return!1}}function ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(ct){var t=cr;if(t){var n=t;if(!$d(e,t)){if(ai(e))throw Error(v(418));t=qn(n.nextSibling);var o=dr;t&&$d(e,t)?Bd(o,n):(e.flags=e.flags&-4097|2,ct=!1,dr=e)}}else{if(ai(e))throw Error(v(418));e.flags=e.flags&-4097|2,ct=!1,dr=e}}}function qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dr=e}function Ha(e){if(e!==dr)return!1;if(!ct)return qd(e),ct=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=cr)){if(ai(e))throw Hd(),Error(v(418));for(;t;)Bd(e,t),t=qn(t.nextSibling)}if(qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){cr=qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}cr=null}}else cr=dr?qn(e.stateNode.nextSibling):null;return!0}function Hd(){for(var e=cr;e;)e=qn(e.nextSibling)}function as(){cr=dr=null,ct=!1}function ii(e){Wr===null?Wr=[e]:Wr.push(e)}var oh=De.ReactCurrentBatchConfig;function ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var o=n.stateNode}if(!o)throw Error(v(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var g=a.refs;u===null?delete g[l]:g[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zd(e){var t=e._init;return t(e._payload)}function Gd(e){function t(A,S){if(e){var j=A.deletions;j===null?(A.deletions=[S],A.flags|=16):j.push(S)}}function n(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function o(A,S){for(A=new Map;S!==null;)S.key!==null?A.set(S.key,S):A.set(S.index,S),S=S.sibling;return A}function a(A,S){return A=eo(A,S),A.index=0,A.sibling=null,A}function l(A,S,j){return A.index=j,e?(j=A.alternate,j!==null?(j=j.index,j<S?(A.flags|=2,S):j):(A.flags|=2,S)):(A.flags|=1048576,S)}function u(A){return e&&A.alternate===null&&(A.flags|=2),A}function g(A,S,j,J){return S===null||S.tag!==6?(S=Zi(j,A.mode,J),S.return=A,S):(S=a(S,j),S.return=A,S)}function k(A,S,j,J){var pe=j.type;return pe===Ve?z(A,S,j.props.children,J,j.key):S!==null&&(S.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Be&&zd(pe)===S.type)?(J=a(S,j.props),J.ref=ea(A,S,j),J.return=A,J):(J=xl(j.type,j.key,j.props,null,A.mode,J),J.ref=ea(A,S,j),J.return=A,J)}function M(A,S,j,J){return S===null||S.tag!==4||S.stateNode.containerInfo!==j.containerInfo||S.stateNode.implementation!==j.implementation?(S=ed(j,A.mode,J),S.return=A,S):(S=a(S,j.children||[]),S.return=A,S)}function z(A,S,j,J,pe){return S===null||S.tag!==7?(S=Lo(j,A.mode,J,pe),S.return=A,S):(S=a(S,j),S.return=A,S)}function U(A,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Zi(""+S,A.mode,j),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ye:return j=xl(S.type,S.key,S.props,null,A.mode,j),j.ref=ea(A,null,S),j.return=A,j;case ot:return S=ed(S,A.mode,j),S.return=A,S;case Be:var J=S._init;return U(A,J(S._payload),j)}if(an(S)||K(S))return S=Lo(S,A.mode,j,null),S.return=A,S;za(A,S)}return null}function q(A,S,j,J){var pe=S!==null?S.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return pe!==null?null:g(A,S,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ye:return j.key===pe?k(A,S,j,J):null;case ot:return j.key===pe?M(A,S,j,J):null;case Be:return pe=j._init,q(A,S,pe(j._payload),J)}if(an(j)||K(j))return pe!==null?null:z(A,S,j,J,null);za(A,j)}return null}function se(A,S,j,J,pe){if(typeof J=="string"&&J!==""||typeof J=="number")return A=A.get(j)||null,g(S,A,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ye:return A=A.get(J.key===null?j:J.key)||null,k(S,A,J,pe);case ot:return A=A.get(J.key===null?j:J.key)||null,M(S,A,J,pe);case Be:var _e=J._init;return se(A,S,j,_e(J._payload),pe)}if(an(J)||K(J))return A=A.get(j)||null,z(S,A,J,pe,null);za(S,J)}return null}function ie(A,S,j,J){for(var pe=null,_e=null,ve=S,Ae=S=0,Dt=null;ve!==null&&Ae<j.length;Ae++){ve.index>Ae?(Dt=ve,ve=null):Dt=ve.sibling;var Ue=q(A,ve,j[Ae],J);if(Ue===null){ve===null&&(ve=Dt);break}e&&ve&&Ue.alternate===null&&t(A,ve),S=l(Ue,S,Ae),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue,ve=Dt}if(Ae===j.length)return n(A,ve),ct&&So(A,Ae),pe;if(ve===null){for(;Ae<j.length;Ae++)ve=U(A,j[Ae],J),ve!==null&&(S=l(ve,S,Ae),_e===null?pe=ve:_e.sibling=ve,_e=ve);return ct&&So(A,Ae),pe}for(ve=o(A,ve);Ae<j.length;Ae++)Dt=se(ve,A,Ae,j[Ae],J),Dt!==null&&(e&&Dt.alternate!==null&&ve.delete(Dt.key===null?Ae:Dt.key),S=l(Dt,S,Ae),_e===null?pe=Dt:_e.sibling=Dt,_e=Dt);return e&&ve.forEach(function(to){return t(A,to)}),ct&&So(A,Ae),pe}function ue(A,S,j,J){var pe=K(j);if(typeof pe!="function")throw Error(v(150));if(j=pe.call(j),j==null)throw Error(v(151));for(var _e=pe=null,ve=S,Ae=S=0,Dt=null,Ue=j.next();ve!==null&&!Ue.done;Ae++,Ue=j.next()){ve.index>Ae?(Dt=ve,ve=null):Dt=ve.sibling;var to=q(A,ve,Ue.value,J);if(to===null){ve===null&&(ve=Dt);break}e&&ve&&to.alternate===null&&t(A,ve),S=l(to,S,Ae),_e===null?pe=to:_e.sibling=to,_e=to,ve=Dt}if(Ue.done)return n(A,ve),ct&&So(A,Ae),pe;if(ve===null){for(;!Ue.done;Ae++,Ue=j.next())Ue=U(A,Ue.value,J),Ue!==null&&(S=l(Ue,S,Ae),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue);return ct&&So(A,Ae),pe}for(ve=o(A,ve);!Ue.done;Ae++,Ue=j.next())Ue=se(ve,A,Ae,Ue.value,J),Ue!==null&&(e&&Ue.alternate!==null&&ve.delete(Ue.key===null?Ae:Ue.key),S=l(Ue,S,Ae),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue);return e&&ve.forEach(function(Oh){return t(A,Oh)}),ct&&So(A,Ae),pe}function gt(A,S,j,J){if(typeof j=="object"&&j!==null&&j.type===Ve&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ye:e:{for(var pe=j.key,_e=S;_e!==null;){if(_e.key===pe){if(pe=j.type,pe===Ve){if(_e.tag===7){n(A,_e.sibling),S=a(_e,j.props.children),S.return=A,A=S;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Be&&zd(pe)===_e.type){n(A,_e.sibling),S=a(_e,j.props),S.ref=ea(A,_e,j),S.return=A,A=S;break e}n(A,_e);break}else t(A,_e);_e=_e.sibling}j.type===Ve?(S=Lo(j.props.children,A.mode,J,j.key),S.return=A,A=S):(J=xl(j.type,j.key,j.props,null,A.mode,J),J.ref=ea(A,S,j),J.return=A,A=J)}return u(A);case ot:e:{for(_e=j.key;S!==null;){if(S.key===_e)if(S.tag===4&&S.stateNode.containerInfo===j.containerInfo&&S.stateNode.implementation===j.implementation){n(A,S.sibling),S=a(S,j.children||[]),S.return=A,A=S;break e}else{n(A,S);break}else t(A,S);S=S.sibling}S=ed(j,A.mode,J),S.return=A,A=S}return u(A);case Be:return _e=j._init,gt(A,S,_e(j._payload),J)}if(an(j))return ie(A,S,j,J);if(K(j))return ue(A,S,j,J);za(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,S!==null&&S.tag===6?(n(A,S.sibling),S=a(S,j),S.return=A,A=S):(n(A,S),S=Zi(j,A.mode,J),S.return=A,A=S),u(A)):n(A,S)}return gt}var ls=Gd(!0),Ud=Gd(!1),Ga=Hn(null),Ua=null,is=null,di=null;function ci(){di=is=Ua=null}function ui(e){var t=Ga.current;it(Ga),e._currentValue=t}function hi(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function ds(e,t){Ua=e,di=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(er=!0),e.firstContext=null)}function Sr(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},is===null){if(Ua===null)throw Error(v(308));is=e,Ua.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return t}var Ao=null;function pi(e){Ao===null?Ao=[e]:Ao.push(e)}function Vd(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,pi(t)):(n.next=a.next,a.next=n),t.interleaved=n,kn(e,o)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Un=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qe&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,kn(e,n)}return a=o.interleaved,a===null?(t.next=t,pi(o)):(t.next=a.next,a.next=t),o.interleaved=t,kn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Vr(e,n)}}function Qd(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ya(e,t,n,o){var a=e.updateQueue;Un=!1;var l=a.firstBaseUpdate,u=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var k=g,M=k.next;k.next=null,u===null?l=M:u.next=M,u=k;var z=e.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==u&&(g===null?z.firstBaseUpdate=M:g.next=M,z.lastBaseUpdate=k))}if(l!==null){var U=a.baseState;u=0,z=M=k=null,g=l;do{var q=g.lane,se=g.eventTime;if((o&q)===q){z!==null&&(z=z.next={eventTime:se,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var ie=e,ue=g;switch(q=t,se=n,ue.tag){case 1:if(ie=ue.payload,typeof ie=="function"){U=ie.call(se,U,q);break e}U=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ue.payload,q=typeof ie=="function"?ie.call(se,U,q):ie,q==null)break e;U=W({},U,q);break e;case 2:Un=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,q=a.effects,q===null?a.effects=[g]:q.push(g))}else se={eventTime:se,lane:q,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(M=z=se,k=U):z=z.next=se,u|=q;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;q=g,g=q.next,q.next=null,a.lastBaseUpdate=q,a.shared.pending=null}}while(!0);if(z===null&&(k=U),a.baseState=k,a.firstBaseUpdate=M,a.lastBaseUpdate=z,t=a.shared.interleaved,t!==null){a=t;do u|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);To|=u,e.lanes=u,e.memoizedState=U}}function Jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var ta={},rn=Hn(ta),ra=Hn(ta),na=Hn(ta);function Do(e){if(e===ta)throw Error(v(174));return e}function xi(e,t){switch(nt(na,t),nt(ra,e),nt(rn,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}it(rn),nt(rn,t)}function cs(){it(rn),it(ra),it(na)}function Xd(e){Do(na.current);var t=Do(rn.current),n=ks(t,e.type);t!==n&&(nt(ra,e),nt(rn,n))}function fi(e){ra.current===e&&(it(rn),it(ra))}var mt=Hn(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yi=[];function gi(){for(var e=0;e<yi.length;e++)yi[e]._workInProgressVersionPrimary=null;yi.length=0}var Ja=De.ReactCurrentDispatcher,wi=De.ReactCurrentBatchConfig,jo=0,xt=null,vt=null,St=null,Xa=!1,oa=!1,sa=0,sh=0;function Pt(){throw Error(v(321))}function bi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function _i(e,t,n,o,a,l){if(jo=l,xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?dh:ch,e=n(o,a),oa){l=0;do{if(oa=!1,sa=0,25<=l)throw Error(v(301));l+=1,St=vt=null,t.updateQueue=null,Ja.current=uh,e=n(o,a)}while(oa)}if(Ja.current=tl,t=vt!==null&&vt.next!==null,jo=0,St=vt=xt=null,Xa=!1,t)throw Error(v(300));return e}function vi(){var e=sa!==0;return sa=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?xt.memoizedState=St=e:St=St.next=e,St}function Ar(){if(vt===null){var e=xt.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=St===null?xt.memoizedState:St.next;if(t!==null)St=t,vt=e;else{if(e===null)throw Error(v(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?xt.memoizedState=St=e:St=St.next=e}return St}function aa(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=Ar(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var o=vt,a=o.baseQueue,l=n.pending;if(l!==null){if(a!==null){var u=a.next;a.next=l.next,l.next=u}o.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,o=o.baseState;var g=u=null,k=null,M=l;do{var z=M.lane;if((jo&z)===z)k!==null&&(k=k.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),o=M.hasEagerState?M.eagerState:e(o,M.action);else{var U={lane:z,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};k===null?(g=k=U,u=o):k=k.next=U,xt.lanes|=z,To|=z}M=M.next}while(M!==null&&M!==l);k===null?u=o:k.next=g,Nt(o,t.memoizedState)||(er=!0),t.memoizedState=o,t.baseState=u,t.baseQueue=k,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do l=a.lane,xt.lanes|=l,To|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=Ar(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do l=e(l,u.action),u=u.next;while(u!==a);Nt(l,t.memoizedState)||(er=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function Zd(){}function ec(e,t){var n=xt,o=Ar(),a=t(),l=!Nt(o.memoizedState,a);if(l&&(o.memoizedState=a,er=!0),o=o.queue,Ni(nc.bind(null,n,o,e),[e]),o.getSnapshot!==t||l||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,la(9,rc.bind(null,n,o,a,t),void 0,null),At===null)throw Error(v(349));(jo&30)!==0||tc(n,t,a)}return a}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xt.updateQueue,t===null?(t={lastEffect:null,stores:null},xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rc(e,t,n,o){t.value=n,t.getSnapshot=o,oc(t)&&sc(e)}function nc(e,t,n){return n(function(){oc(t)&&sc(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function sc(e){var t=kn(e,1);t!==null&&$r(t,e,1,-1)}function ac(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=ih.bind(null,xt,e),[t.memoizedState,e]}function la(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=xt.updateQueue,t===null?(t={lastEffect:null,stores:null},xt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function lc(){return Ar().memoizedState}function Za(e,t,n,o){var a=nn();xt.flags|=e,a.memoizedState=la(1|t,n,void 0,o===void 0?null:o)}function el(e,t,n,o){var a=Ar();o=o===void 0?null:o;var l=void 0;if(vt!==null){var u=vt.memoizedState;if(l=u.destroy,o!==null&&bi(o,u.deps)){a.memoizedState=la(t,n,l,o);return}}xt.flags|=e,a.memoizedState=la(1|t,n,l,o)}function ic(e,t){return Za(8390656,8,e,t)}function Ni(e,t){return el(2048,8,e,t)}function dc(e,t){return el(4,2,e,t)}function cc(e,t){return el(4,4,e,t)}function uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,uc.bind(null,t,e),n)}function Si(){}function pc(e,t){var n=Ar();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&bi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function mc(e,t){var n=Ar();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&bi(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function xc(e,t,n){return(jo&21)===0?(e.baseState&&(e.baseState=!1,er=!0),e.memoizedState=n):(Nt(n,t)||(n=Na(),xt.lanes|=n,To|=n,e.baseState=!0),t)}function ah(e,t){var n=Je;Je=n!==0&&4>n?n:4,e(!0);var o=wi.transition;wi.transition={};try{e(!1),t()}finally{Je=n,wi.transition=o}}function fc(){return Ar().memoizedState}function lh(e,t,n){var o=Xn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))gc(t,n);else if(n=Vd(e,t,n,o),n!==null){var a=zt();$r(n,e,o,a),wc(n,t,o)}}function ih(e,t,n){var o=Xn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))gc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,g=l(u,n);if(a.hasEagerState=!0,a.eagerState=g,Nt(g,u)){var k=t.interleaved;k===null?(a.next=a,pi(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}n=Vd(e,t,a,o),n!==null&&(a=zt(),$r(n,e,o,a),wc(n,t,o))}}function yc(e){var t=e.alternate;return e===xt||t!==null&&t===xt}function gc(e,t){oa=Xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Vr(e,n)}}var tl={readContext:Sr,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},dh={readContext:Sr,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Sr,useEffect:ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=nn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=lh.bind(null,xt,e),[o.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:ac,useDebugValue:Si,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=ac(!1),t=e[0];return e=ah.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=xt,a=nn();if(ct){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),At===null)throw Error(v(349));(jo&30)!==0||tc(o,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,ic(nc.bind(null,o,l,e),[e]),o.flags|=2048,la(9,rc.bind(null,o,l,n,t),void 0,null),n},useId:function(){var e=nn(),t=At.identifierPrefix;if(ct){var n=vn,o=_n;n=(o&~(1<<32-Ft(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:Sr,useCallback:pc,useContext:Sr,useEffect:Ni,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:cc,useMemo:mc,useReducer:ki,useRef:lc,useState:function(){return ki(aa)},useDebugValue:Si,useDeferredValue:function(e){var t=Ar();return xc(t,vt.memoizedState,e)},useTransition:function(){var e=ki(aa)[0],t=Ar().memoizedState;return[e,t]},useMutableSource:Zd,useSyncExternalStore:ec,useId:fc,unstable_isNewReconciler:!1},uh={readContext:Sr,useCallback:pc,useContext:Sr,useEffect:Ni,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:cc,useMemo:mc,useReducer:Ci,useRef:lc,useState:function(){return Ci(aa)},useDebugValue:Si,useDeferredValue:function(e){var t=Ar();return vt===null?t.memoizedState=e:xc(t,vt.memoizedState,e)},useTransition:function(){var e=Ci(aa)[0],t=Ar().memoizedState;return[e,t]},useMutableSource:Zd,useSyncExternalStore:ec,useId:fc,unstable_isNewReconciler:!1};function Pr(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ai(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=zt(),a=Xn(e),l=Cn(o,a);l.payload=t,n!=null&&(l.callback=n),t=Vn(e,l,a),t!==null&&($r(t,e,a,o),Va(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=zt(),a=Xn(e),l=Cn(o,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Vn(e,l,a),t!==null&&($r(t,e,a,o),Va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),o=Xn(e),a=Cn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,o),t!==null&&($r(t,e,o,n),Va(t,e,o))}};function bc(e,t,n,o,a,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,u):t.prototype&&t.prototype.isPureReactComponent?!gn(n,o)||!gn(a,l):!0}function _c(e,t,n){var o=!1,a=zn,l=t.contextType;return typeof l=="object"&&l!==null?l=Sr(l):(a=Zt(t)?Co:Wt.current,o=t.contextTypes,l=(o=o!=null)?ns(e,a):zn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function vc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},mi(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Sr(l):(l=Zt(t)?Co:Wt.current,a.context=ns(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ai(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&rl.enqueueReplaceState(a,a.state,null),Ya(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t){try{var n="",o=t;do n+=me(o),o=o.return;while(o);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hh=typeof WeakMap=="function"?WeakMap:Map;function kc(e,t,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){dl||(dl=!0,zi=o),Ti(e,t)},n}function Cc(e,t,n){n=Cn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Ti(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ti(e,t),typeof o!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Nc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new hh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Sh.bind(null,e,t,n),t.then(e,e))}function Sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ac(e,t,n,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Cn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var ph=De.ReactCurrentOwner,er=!1;function Ht(e,t,n,o){t.child=e===null?Ud(t,null,n,o):ls(t,e.child,n,o)}function Dc(e,t,n,o,a){n=n.render;var l=t.ref;return ds(t,a),o=_i(e,t,n,o,l,a),n=vi(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(ct&&n&&oi(t),t.flags|=1,Ht(e,t,o,a),t.child)}function jc(e,t,n,o,a){if(e===null){var l=n.type;return typeof l=="function"&&!Xi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Tc(e,t,l,o,a)):(e=xl(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:gn,n(u,o)&&e.ref===t.ref)return Nn(e,t,a)}return t.flags|=1,e=eo(l,o),e.ref=t.ref,e.return=t,t.child=e}function Tc(e,t,n,o,a){if(e!==null){var l=e.memoizedProps;if(gn(l,o)&&e.ref===t.ref)if(er=!1,t.pendingProps=o=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(er=!0);else return t.lanes=e.lanes,Nn(e,t,a)}return Ei(e,t,n,o,a)}function Ec(e,t,n){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ps,ur),ur|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,nt(ps,ur),ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,nt(ps,ur),ur|=o}else l!==null?(o=l.baseLanes|n,t.memoizedState=null):o=n,nt(ps,ur),ur|=o;return Ht(e,t,a,n),t.child}function Mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,o,a){var l=Zt(n)?Co:Wt.current;return l=ns(t,l),ds(t,a),n=_i(e,t,n,o,l,a),o=vi(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(ct&&o&&oi(t),t.flags|=1,Ht(e,t,n,a),t.child)}function Rc(e,t,n,o,a){if(Zt(n)){var l=!0;Ka(t)}else l=!1;if(ds(t,a),t.stateNode===null)ol(e,t),_c(t,n,o),Di(t,n,o,a),o=!0;else if(e===null){var u=t.stateNode,g=t.memoizedProps;u.props=g;var k=u.context,M=n.contextType;typeof M=="object"&&M!==null?M=Sr(M):(M=Zt(n)?Co:Wt.current,M=ns(t,M));var z=n.getDerivedStateFromProps,U=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function";U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==o||k!==M)&&vc(t,u,o,M),Un=!1;var q=t.memoizedState;u.state=q,Ya(t,o,u,a),k=t.memoizedState,g!==o||q!==k||Xt.current||Un?(typeof z=="function"&&(Ai(t,n,z,o),k=t.memoizedState),(g=Un||bc(t,n,g,o,q,k,M))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),u.props=o,u.state=k,u.context=M,o=g):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Yd(e,t),g=t.memoizedProps,M=t.type===t.elementType?g:Pr(t.type,g),u.props=M,U=t.pendingProps,q=u.context,k=n.contextType,typeof k=="object"&&k!==null?k=Sr(k):(k=Zt(n)?Co:Wt.current,k=ns(t,k));var se=n.getDerivedStateFromProps;(z=typeof se=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==U||q!==k)&&vc(t,u,o,k),Un=!1,q=t.memoizedState,u.state=q,Ya(t,o,u,a);var ie=t.memoizedState;g!==U||q!==ie||Xt.current||Un?(typeof se=="function"&&(Ai(t,n,se,o),ie=t.memoizedState),(M=Un||bc(t,n,M,o,q,ie,k)||!1)?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,ie,k),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,ie,k)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ie),u.props=o,u.state=ie,u.context=k,o=M):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),o=!1)}return Mi(e,t,n,o,l,a)}function Mi(e,t,n,o,a,l){Mc(e,t);var u=(t.flags&128)!==0;if(!o&&!u)return a&&Wd(t,n,!1),Nn(e,t,l);o=t.stateNode,ph.current=t;var g=u&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&u?(t.child=ls(t,e.child,null,l),t.child=ls(t,null,g,l)):Ht(e,t,g,l),t.memoizedState=o.state,a&&Wd(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?Fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fd(e,t.context,!1),xi(e,t.containerInfo)}function Ic(e,t,n,o,a){return as(),ii(a),t.flags|=256,Ht(e,t,n,o),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,n){var o=t.pendingProps,a=mt.current,l=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),nt(mt,a&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=o.children,e=o.fallback,l?(o=t.mode,l=t.child,u={mode:"hidden",children:u},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=fl(u,o,0,null),e=Lo(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Li(n),t.memoizedState=Ri,e):Ii(t,u));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return mh(e,t,u,o,g,a,n);if(l){l=o.fallback,u=t.mode,a=e.child,g=a.sibling;var k={mode:"hidden",children:o.children};return(u&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=eo(a,k),o.subtreeFlags=a.subtreeFlags&14680064),g!==null?l=eo(g,l):(l=Lo(l,u,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,u=e.child.memoizedState,u=u===null?Li(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=Ri,o}return l=e.child,e=l.sibling,o=eo(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ii(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function nl(e,t,n,o){return o!==null&&ii(o),ls(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,o,a,l,u){if(n)return t.flags&256?(t.flags&=-257,o=ji(Error(v(422))),nl(e,t,u,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=fl({mode:"visible",children:o.children},a,0,null),l=Lo(l,a,u,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&ls(t,e.child,null,u),t.child.memoizedState=Li(u),t.memoizedState=Ri,l);if((t.mode&1)===0)return nl(e,t,u,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var g=o.dgst;return o=g,l=Error(v(419)),o=ji(l,o,void 0),nl(e,t,u,o)}if(g=(u&e.childLanes)!==0,er||g){if(o=At,o!==null){switch(u&-u){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|u))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,kn(e,a),$r(o,e,a,-1))}return Ji(),o=ji(Error(v(421))),nl(e,t,u,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ah.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,cr=qn(a.nextSibling),dr=t,ct=!0,Wr=null,e!==null&&(Cr[Nr++]=_n,Cr[Nr++]=vn,Cr[Nr++]=No,_n=e.id,vn=e.overflow,No=t),t=Ii(t,o.children),t.flags|=4096,t)}function Oc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),hi(e.return,t,n)}function Fi(e,t,n,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=a)}function Wc(e,t,n){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if(Ht(e,t,o.children,n),o=mt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(nt(mt,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Qa(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Fi(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qa(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Fi(t,!0,n,null,l);break;case"together":Fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ol(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),To|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=eo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=eo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xh(e,t,n){switch(t.tag){case 3:Lc(t),as();break;case 5:Xd(t);break;case 1:Zt(t.type)&&Ka(t);break;case 4:xi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;nt(Ga,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(nt(mt,mt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Fc(e,t,n):(nt(mt,mt.current&1),e=Nn(e,t,n),e!==null?e.sibling:null);nt(mt,mt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Wc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),nt(mt,mt.current),o)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,n)}return Nn(e,t,n)}var Pc,Oi,Kc,Bc;Pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Oi=function(){},Kc=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Do(rn.current);var l=null;switch(n){case"input":a=pr(e,a),o=pr(e,o),l=[];break;case"select":a=W({},a,{value:void 0}),o=W({},o,{value:void 0}),l=[];break;case"textarea":a=xa(e,a),o=xa(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Oa)}Ns(n,o);var u;n=null;for(M in a)if(!o.hasOwnProperty(M)&&a.hasOwnProperty(M)&&a[M]!=null)if(M==="style"){var g=a[M];for(u in g)g.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&($.hasOwnProperty(M)?l||(l=[]):(l=l||[]).push(M,null));for(M in o){var k=o[M];if(g=a!=null?a[M]:void 0,o.hasOwnProperty(M)&&k!==g&&(k!=null||g!=null))if(M==="style")if(g){for(u in g)!g.hasOwnProperty(u)||k&&k.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in k)k.hasOwnProperty(u)&&g[u]!==k[u]&&(n||(n={}),n[u]=k[u])}else n||(l||(l=[]),l.push(M,n)),n=k;else M==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,g=g?g.__html:void 0,k!=null&&g!==k&&(l=l||[]).push(M,k)):M==="children"?typeof k!="string"&&typeof k!="number"||(l=l||[]).push(M,""+k):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&($.hasOwnProperty(M)?(k!=null&&M==="onScroll"&&lt("scroll",e),l||g===k||(l=[])):(l=l||[]).push(M,k))}n&&(l=l||[]).push("style",n);var M=l;(t.updateQueue=M)&&(t.flags|=4)}},Bc=function(e,t,n,o){n!==o&&(t.flags|=4)};function ia(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function fh(e,t,n){var o=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(t),null;case 1:return Zt(t.type)&&Pa(),Kt(t),null;case 3:return o=t.stateNode,cs(),it(Xt),it(Wt),gi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wr!==null&&(Vi(Wr),Wr=null))),Oi(e,t),Kt(t),null;case 5:fi(t);var a=Do(na.current);if(n=t.type,e!==null&&t.stateNode!=null)Kc(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(v(166));return Kt(t),null}if(e=Do(rn.current),Ha(t)){o=t.stateNode,n=t.type;var l=t.memoizedProps;switch(o[tn]=t,o[Xs]=l,e=(t.mode&1)!==0,n){case"dialog":lt("cancel",o),lt("close",o);break;case"iframe":case"object":case"embed":lt("load",o);break;case"video":case"audio":for(a=0;a<Ys.length;a++)lt(Ys[a],o);break;case"source":lt("error",o);break;case"img":case"image":case"link":lt("error",o),lt("load",o);break;case"details":lt("toggle",o);break;case"input":dt(o,l),lt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},lt("invalid",o);break;case"textarea":Lt(o,l),lt("invalid",o)}Ns(n,l),a=null;for(var u in l)if(l.hasOwnProperty(u)){var g=l[u];u==="children"?typeof g=="string"?o.textContent!==g&&(l.suppressHydrationWarning!==!0&&Fa(o.textContent,g,e),a=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(l.suppressHydrationWarning!==!0&&Fa(o.textContent,g,e),a=["children",""+g]):$.hasOwnProperty(u)&&g!=null&&u==="onScroll"&&lt("scroll",o)}switch(n){case"input":fe(o),qr(o,l,!0);break;case"textarea":fe(o),fa(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Oa)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{u=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=u.createElement(n,{is:o.is}):(e=u.createElement(n),n==="select"&&(u=e,o.multiple?u.multiple=!0:o.size&&(u.size=o.size))):e=u.createElementNS(e,n),e[tn]=t,e[Xs]=o,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(u=xr(n,o),n){case"dialog":lt("cancel",e),lt("close",e),a=o;break;case"iframe":case"object":case"embed":lt("load",e),a=o;break;case"video":case"audio":for(a=0;a<Ys.length;a++)lt(Ys[a],e);a=o;break;case"source":lt("error",e),a=o;break;case"img":case"image":case"link":lt("error",e),lt("load",e),a=o;break;case"details":lt("toggle",e),a=o;break;case"input":dt(e,o),a=pr(e,o),lt("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=W({},o,{value:void 0}),lt("invalid",e);break;case"textarea":Lt(e,o),a=xa(e,o),lt("invalid",e);break;default:a=o}Ns(n,a),g=a;for(l in g)if(g.hasOwnProperty(l)){var k=g[l];l==="style"?dn(e,k):l==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ya(e,k)):l==="children"?typeof k=="string"?(n!=="textarea"||k!=="")&&Hr(e,k):typeof k=="number"&&Hr(e,""+k):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($.hasOwnProperty(l)?k!=null&&l==="onScroll"&&lt("scroll",e):k!=null&&X(e,l,k,u))}switch(n){case"input":fe(e),qr(e,o,!1);break;case"textarea":fe(e),fa(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Re(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Vt(e,!!o.multiple,l,!1):o.defaultValue!=null&&Vt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Kt(t),null;case 6:if(e&&t.stateNode!=null)Bc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(v(166));if(n=Do(na.current),Do(rn.current),Ha(t)){if(o=t.stateNode,n=t.memoizedProps,o[tn]=t,(l=o.nodeValue!==n)&&(e=dr,e!==null))switch(e.tag){case 3:Fa(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fa(o.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[tn]=t,t.stateNode=o}return Kt(t),null;case 13:if(it(mt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ct&&cr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hd(),as(),t.flags|=98560,l=!1;else if(l=Ha(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[tn]=t}else as(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Kt(t),l=!1}else Wr!==null&&(Vi(Wr),Wr=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(mt.current&1)!==0?kt===0&&(kt=3):Ji())),t.updateQueue!==null&&(t.flags|=4),Kt(t),null);case 4:return cs(),Oi(e,t),e===null&&Qs(t.stateNode.containerInfo),Kt(t),null;case 10:return ui(t.type._context),Kt(t),null;case 17:return Zt(t.type)&&Pa(),Kt(t),null;case 19:if(it(mt),l=t.memoizedState,l===null)return Kt(t),null;if(o=(t.flags&128)!==0,u=l.rendering,u===null)if(o)ia(l,!1);else{if(kt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Qa(e),u!==null){for(t.flags|=128,ia(l,!1),o=u.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)l=n,e=o,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return nt(mt,mt.current&1|2),t.child}e=e.sibling}l.tail!==null&&rt()>ms&&(t.flags|=128,o=!0,ia(l,!1),t.lanes=4194304)}else{if(!o)if(e=Qa(u),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ia(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ct)return Kt(t),null}else 2*rt()-l.renderingStartTime>ms&&n!==1073741824&&(t.flags|=128,o=!0,ia(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=rt(),t.sibling=null,n=mt.current,nt(mt,o?n&1|2:n&1),t):(Kt(t),null);case 22:case 23:return Qi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ur&1073741824)!==0&&(Kt(t),t.subtreeFlags&6&&(t.flags|=8192)):Kt(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function yh(e,t){switch(si(t),t.tag){case 1:return Zt(t.type)&&Pa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cs(),it(Xt),it(Wt),gi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fi(t),null;case 13:if(it(mt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));as()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return it(mt),null;case 4:return cs(),null;case 10:return ui(t.type._context),null;case 22:case 23:return Qi(),null;case 24:return null;default:return null}}var sl=!1,Bt=!1,gh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function hs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ft(e,t,o)}else n.current=null}function Wi(e,t,n){try{n()}catch(o){ft(e,t,o)}}var $c=!1;function wh(e,t){if(Ql=fo,e=bd(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,g=-1,k=-1,M=0,z=0,U=e,q=null;t:for(;;){for(var se;U!==n||a!==0&&U.nodeType!==3||(g=u+a),U!==l||o!==0&&U.nodeType!==3||(k=u+o),U.nodeType===3&&(u+=U.nodeValue.length),(se=U.firstChild)!==null;)q=U,U=se;for(;;){if(U===e)break t;if(q===n&&++M===a&&(g=u),q===l&&++z===o&&(k=u),(se=U.nextSibling)!==null)break;U=q,q=U.parentNode}U=se}n=g===-1||k===-1?null:{start:g,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},fo=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var ie=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var ue=ie.memoizedProps,gt=ie.memoizedState,A=t.stateNode,S=A.getSnapshotBeforeUpdate(t.elementType===t.type?ue:Pr(t.type,ue),gt);A.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(J){ft(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return ie=$c,$c=!1,ie}function da(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Wi(t,n,l)}a=a.next}while(a!==o)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qc(e){var t=e.alternate;t!==null&&(e.alternate=null,qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Xs],delete t[ti],delete t[th],delete t[rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oa));else if(o!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Bi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var Tt=null,Kr=!1;function Yn(e,t,n){for(n=n.child;n!==null;)Gc(e,t,n),n=n.sibling}function Gc(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Rr,n)}catch{}switch(n.tag){case 5:Bt||hs(n,t);case 6:var o=Tt,a=Kr;Tt=null,Yn(e,t,n),Tt=o,Kr=a,Tt!==null&&(Kr?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Kr?(e=Tt,n=n.stateNode,e.nodeType===8?ei(e.parentNode,n):e.nodeType===1&&ei(e,n),Qt(e)):ei(Tt,n.stateNode));break;case 4:o=Tt,a=Kr,Tt=n.stateNode.containerInfo,Kr=!0,Yn(e,t,n),Tt=o,Kr=a;break;case 0:case 11:case 14:case 15:if(!Bt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&Wi(n,t,u),a=a.next}while(a!==o)}Yn(e,t,n);break;case 1:if(!Bt&&(hs(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(g){ft(n,t,g)}Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:n.mode&1?(Bt=(o=Bt)||n.memoizedState!==null,Yn(e,t,n),Bt=o):Yn(e,t,n);break;default:Yn(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(o){var a=Dh.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Br(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var l=e,u=t,g=u;e:for(;g!==null;){switch(g.tag){case 5:Tt=g.stateNode,Kr=!1;break e;case 3:Tt=g.stateNode.containerInfo,Kr=!0;break e;case 4:Tt=g.stateNode.containerInfo,Kr=!0;break e}g=g.return}if(Tt===null)throw Error(v(160));Gc(l,u,a),Tt=null,Kr=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(M){ft(a,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vc(t,e),t=t.sibling}function Vc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Br(t,e),on(e),o&4){try{da(3,e,e.return),al(3,e)}catch(ue){ft(e,e.return,ue)}try{da(5,e,e.return)}catch(ue){ft(e,e.return,ue)}}break;case 1:Br(t,e),on(e),o&512&&n!==null&&hs(n,n.return);break;case 5:if(Br(t,e),on(e),o&512&&n!==null&&hs(n,n.return),e.flags&32){var a=e.stateNode;try{Hr(a,"")}catch(ue){ft(e,e.return,ue)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,g=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{g==="input"&&l.type==="radio"&&l.name!=null&&jn(a,l),xr(g,u);var M=xr(g,l);for(u=0;u<k.length;u+=2){var z=k[u],U=k[u+1];z==="style"?dn(a,U):z==="dangerouslySetInnerHTML"?ya(a,U):z==="children"?Hr(a,U):X(a,z,U,M)}switch(g){case"input":st(a,l);break;case"textarea":ln(a,l);break;case"select":var q=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var se=l.value;se!=null?Vt(a,!!l.multiple,se,!1):q!==!!l.multiple&&(l.defaultValue!=null?Vt(a,!!l.multiple,l.defaultValue,!0):Vt(a,!!l.multiple,l.multiple?[]:"",!1))}a[Xs]=l}catch(ue){ft(e,e.return,ue)}}break;case 6:if(Br(t,e),on(e),o&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(ue){ft(e,e.return,ue)}}break;case 3:if(Br(t,e),on(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Qt(t.containerInfo)}catch(ue){ft(e,e.return,ue)}break;case 4:Br(t,e),on(e);break;case 13:Br(t,e),on(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Hi=rt())),o&4&&Uc(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(Bt=(M=Bt)||z,Br(t,e),Bt=M):Br(t,e),on(e),o&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!z&&(e.mode&1)!==0)for(ae=e,z=e.child;z!==null;){for(U=ae=z;ae!==null;){switch(q=ae,se=q.child,q.tag){case 0:case 11:case 14:case 15:da(4,q,q.return);break;case 1:hs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){o=q,n=q.return;try{t=o,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(ue){ft(o,n,ue)}}break;case 5:hs(q,q.return);break;case 22:if(q.memoizedState!==null){Jc(U);continue}}se!==null?(se.return=q,ae=se):Jc(U)}z=z.sibling}e:for(z=null,U=e;;){if(U.tag===5){if(z===null){z=U;try{a=U.stateNode,M?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(g=U.stateNode,k=U.memoizedProps.style,u=k!=null&&k.hasOwnProperty("display")?k.display:null,g.style.display=sr("display",u))}catch(ue){ft(e,e.return,ue)}}}else if(U.tag===6){if(z===null)try{U.stateNode.nodeValue=M?"":U.memoizedProps}catch(ue){ft(e,e.return,ue)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;z===U&&(z=null),U=U.return}z===U&&(z=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Br(t,e),on(e),o&4&&Uc(e);break;case 21:break;default:Br(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hc(n)){var o=n;break e}n=n.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Hr(a,""),o.flags&=-33);var l=zc(e);Bi(e,l,a);break;case 3:case 4:var u=o.stateNode.containerInfo,g=zc(e);Ki(e,g,u);break;default:throw Error(v(161))}}catch(k){ft(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bh(e,t,n){ae=e,Yc(e)}function Yc(e,t,n){for(var o=(e.mode&1)!==0;ae!==null;){var a=ae,l=a.child;if(a.tag===22&&o){var u=a.memoizedState!==null||sl;if(!u){var g=a.alternate,k=g!==null&&g.memoizedState!==null||Bt;g=sl;var M=Bt;if(sl=u,(Bt=k)&&!M)for(ae=a;ae!==null;)u=ae,k=u.child,u.tag===22&&u.memoizedState!==null?Xc(a):k!==null?(k.return=u,ae=k):Xc(a);for(;l!==null;)ae=l,Yc(l),l=l.sibling;ae=a,sl=g,Bt=M}Qc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,ae=l):Qc(e)}}function Qc(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Bt||al(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Bt)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pr(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jd(t,l,o);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jd(t,u,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&n.focus();break;case"img":k.src&&(n.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var z=M.memoizedState;if(z!==null){var U=z.dehydrated;U!==null&&Qt(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}Bt||t.flags&512&&Pi(t)}catch(q){ft(t,t.return,q)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Jc(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Xc(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(k){ft(t,n,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(k){ft(t,a,k)}}var l=t.return;try{Pi(t)}catch(k){ft(t,l,k)}break;case 5:var u=t.return;try{Pi(t)}catch(k){ft(t,u,k)}}}catch(k){ft(t,t.return,k)}if(t===e){ae=null;break}var g=t.sibling;if(g!==null){g.return=t.return,ae=g;break}ae=t.return}}var _h=Math.ceil,ll=De.ReactCurrentDispatcher,$i=De.ReactCurrentOwner,Dr=De.ReactCurrentBatchConfig,qe=0,At=null,wt=null,Et=0,ur=0,ps=Hn(0),kt=0,ca=null,To=0,il=0,qi=0,ua=null,tr=null,Hi=0,ms=1/0,Sn=null,dl=!1,zi=null,Qn=null,cl=!1,Jn=null,ul=0,ha=0,Gi=null,hl=-1,pl=0;function zt(){return(qe&6)!==0?rt():hl!==-1?hl:hl=rt()}function Xn(e){return(e.mode&1)===0?1:(qe&2)!==0&&Et!==0?Et&-Et:oh.transition!==null?(pl===0&&(pl=Na()),pl):(e=Je,e!==0||(e=window.event,e=e===void 0?16:go(e.type)),e)}function $r(e,t,n,o){if(50<ha)throw ha=0,Gi=null,Error(v(185));Ir(e,n,o),((qe&2)===0||e!==At)&&(e===At&&((qe&2)===0&&(il|=n),kt===4&&Zn(e,Et)),rr(e,o),n===1&&qe===0&&(t.mode&1)===0&&(ms=rt()+500,Ba&&Gn()))}function rr(e,t){var n=e.callbackNode;El(e,t);var o=qo(e,e===At?Et:0);if(o===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?nh(eu.bind(null,e)):Pd(eu.bind(null,e)),Zu(function(){(qe&6)===0&&Gn()}),n=null;else{switch(Ml(o)){case 1:n=Mr;break;case 4:n=Ln;break;case 16:n=Gr;break;case 536870912:n=Is;break;default:n=Gr}n=iu(n,Zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zc(e,t){if(hl=-1,pl=0,(qe&6)!==0)throw Error(v(327));var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var o=qo(e,e===At?Et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=ml(e,o);else{t=o;var a=qe;qe|=2;var l=ru();(At!==e||Et!==t)&&(Sn=null,ms=rt()+500,Mo(e,t));do try{Ch();break}catch(g){tu(e,g)}while(!0);ci(),ll.current=l,qe=a,wt!==null?t=0:(At=null,Et=0,t=kt)}if(t!==0){if(t===2&&(a=Fs(e),a!==0&&(o=a,t=Ui(e,a))),t===1)throw n=ca,Mo(e,0),Zn(e,o),rr(e,rt()),n;if(t===6)Zn(e,o);else{if(a=e.current.alternate,(o&30)===0&&!vh(a)&&(t=ml(e,o),t===2&&(l=Fs(e),l!==0&&(o=l,t=Ui(e,l))),t===1))throw n=ca,Mo(e,0),Zn(e,o),rr(e,rt()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(v(345));case 2:Ro(e,tr,Sn);break;case 3:if(Zn(e,o),(o&130023424)===o&&(t=Hi+500-rt(),10<t)){if(qo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){zt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Zl(Ro.bind(null,e,tr,Sn),t);break}Ro(e,tr,Sn);break;case 4:if(Zn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var u=31-Ft(o);l=1<<u,u=t[u],u>a&&(a=u),o&=~l}if(o=a,o=rt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*_h(o/1960))-o,10<o){e.timeoutHandle=Zl(Ro.bind(null,e,tr,Sn),o);break}Ro(e,tr,Sn);break;case 5:Ro(e,tr,Sn);break;default:throw Error(v(329))}}}return rr(e,rt()),e.callbackNode===n?Zc.bind(null,e):null}function Ui(e,t){var n=ua;return e.current.memoizedState.isDehydrated&&(Mo(e,t).flags|=256),e=ml(e,t),e!==2&&(t=tr,tr=n,t!==null&&Vi(t)),e}function Vi(e){tr===null?tr=e:tr.push.apply(tr,e)}function vh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],l=a.getSnapshot;a=a.value;try{if(!Nt(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~qi,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),o=1<<n;e[n]=-1,t&=~o}}function eu(e){if((qe&6)!==0)throw Error(v(327));xs();var t=qo(e,0);if((t&1)===0)return rr(e,rt()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var o=Fs(e);o!==0&&(t=o,n=Ui(e,o))}if(n===1)throw n=ca,Mo(e,0),Zn(e,t),rr(e,rt()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ro(e,tr,Sn),rr(e,rt()),null}function Yi(e,t){var n=qe;qe|=1;try{return e(t)}finally{qe=n,qe===0&&(ms=rt()+500,Ba&&Gn())}}function Eo(e){Jn!==null&&Jn.tag===0&&(qe&6)===0&&xs();var t=qe;qe|=1;var n=Dr.transition,o=Je;try{if(Dr.transition=null,Je=1,e)return e()}finally{Je=o,Dr.transition=n,qe=t,(qe&6)===0&&Gn()}}function Qi(){ur=ps.current,it(ps)}function Mo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xu(n)),wt!==null)for(n=wt.return;n!==null;){var o=n;switch(si(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Pa();break;case 3:cs(),it(Xt),it(Wt),gi();break;case 5:fi(o);break;case 4:cs();break;case 13:it(mt);break;case 19:it(mt);break;case 10:ui(o.type._context);break;case 22:case 23:Qi()}n=n.return}if(At=e,wt=e=eo(e.current,null),Et=ur=t,kt=0,ca=null,qi=il=To=0,tr=ua=null,Ao!==null){for(t=0;t<Ao.length;t++)if(n=Ao[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,l=n.pending;if(l!==null){var u=l.next;l.next=a,o.next=u}n.pending=o}Ao=null}return e}function tu(e,t){do{var n=wt;try{if(ci(),Ja.current=tl,Xa){for(var o=xt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Xa=!1}if(jo=0,St=vt=xt=null,oa=!1,sa=0,$i.current=null,n===null||n.return===null){kt=1,ca=t,wt=null;break}e:{var l=e,u=n.return,g=n,k=t;if(t=Et,g.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var M=k,z=g,U=z.tag;if((z.mode&1)===0&&(U===0||U===11||U===15)){var q=z.alternate;q?(z.updateQueue=q.updateQueue,z.memoizedState=q.memoizedState,z.lanes=q.lanes):(z.updateQueue=null,z.memoizedState=null)}var se=Sc(u);if(se!==null){se.flags&=-257,Ac(se,u,g,l,t),se.mode&1&&Nc(l,M,t),t=se,k=M;var ie=t.updateQueue;if(ie===null){var ue=new Set;ue.add(k),t.updateQueue=ue}else ie.add(k);break e}else{if((t&1)===0){Nc(l,M,t),Ji();break e}k=Error(v(426))}}else if(ct&&g.mode&1){var gt=Sc(u);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),Ac(gt,u,g,l,t),ii(us(k,g));break e}}l=k=us(k,g),kt!==4&&(kt=2),ua===null?ua=[l]:ua.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var A=kc(l,k,t);Qd(l,A);break e;case 1:g=k;var S=l.type,j=l.stateNode;if((l.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Qn===null||!Qn.has(j)))){l.flags|=65536,t&=-t,l.lanes|=t;var J=Cc(l,g,t);Qd(l,J);break e}}l=l.return}while(l!==null)}ou(n)}catch(pe){t=pe,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function ru(){var e=ll.current;return ll.current=tl,e===null?tl:e}function Ji(){(kt===0||kt===3||kt===2)&&(kt=4),At===null||(To&268435455)===0&&(il&268435455)===0||Zn(At,Et)}function ml(e,t){var n=qe;qe|=2;var o=ru();(At!==e||Et!==t)&&(Sn=null,Mo(e,t));do try{kh();break}catch(a){tu(e,a)}while(!0);if(ci(),qe=n,ll.current=o,wt!==null)throw Error(v(261));return At=null,Et=0,kt}function kh(){for(;wt!==null;)nu(wt)}function Ch(){for(;wt!==null&&!$o();)nu(wt)}function nu(e){var t=lu(e.alternate,e,ur);e.memoizedProps=e.pendingProps,t===null?ou(e):wt=t,$i.current=null}function ou(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fh(n,t,ur),n!==null){wt=n;return}}else{if(n=yh(n,t),n!==null){n.flags&=32767,wt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{kt=6,wt=null;return}}if(t=t.sibling,t!==null){wt=t;return}wt=t=e}while(t!==null);kt===0&&(kt=5)}function Ro(e,t,n){var o=Je,a=Dr.transition;try{Dr.transition=null,Je=1,Nh(e,t,n,o)}finally{Dr.transition=a,Je=o}return null}function Nh(e,t,n,o){do xs();while(Jn!==null);if((qe&6)!==0)throw Error(v(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ur(e,l),e===At&&(wt=At=null,Et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||cl||(cl=!0,iu(Gr,function(){return xs(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Dr.transition,Dr.transition=null;var u=Je;Je=1;var g=qe;qe|=4,$i.current=null,wh(e,n),Vc(n,e),zu(Jl),fo=!!Ql,Jl=Ql=null,e.current=n,bh(n),Rn(),qe=g,Je=u,Dr.transition=l}else e.current=n;if(cl&&(cl=!1,Jn=e,ul=a),l=e.pendingLanes,l===0&&(Qn=null),It(n.stateNode),rr(e,rt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(dl)throw dl=!1,e=zi,zi=null,e;return(ul&1)!==0&&e.tag!==0&&xs(),l=e.pendingLanes,(l&1)!==0?e===Gi?ha++:(ha=0,Gi=e):ha=0,Gn(),null}function xs(){if(Jn!==null){var e=Ml(ul),t=Dr.transition,n=Je;try{if(Dr.transition=null,Je=16>e?16:e,Jn===null)var o=!1;else{if(e=Jn,Jn=null,ul=0,(qe&6)!==0)throw Error(v(331));var a=qe;for(qe|=4,ae=e.current;ae!==null;){var l=ae,u=l.child;if((ae.flags&16)!==0){var g=l.deletions;if(g!==null){for(var k=0;k<g.length;k++){var M=g[k];for(ae=M;ae!==null;){var z=ae;switch(z.tag){case 0:case 11:case 15:da(8,z,l)}var U=z.child;if(U!==null)U.return=z,ae=U;else for(;ae!==null;){z=ae;var q=z.sibling,se=z.return;if(qc(z),z===M){ae=null;break}if(q!==null){q.return=se,ae=q;break}ae=se}}}var ie=l.alternate;if(ie!==null){var ue=ie.child;if(ue!==null){ie.child=null;do{var gt=ue.sibling;ue.sibling=null,ue=gt}while(ue!==null)}}ae=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,ae=u;else e:for(;ae!==null;){if(l=ae,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:da(9,l,l.return)}var A=l.sibling;if(A!==null){A.return=l.return,ae=A;break e}ae=l.return}}var S=e.current;for(ae=S;ae!==null;){u=ae;var j=u.child;if((u.subtreeFlags&2064)!==0&&j!==null)j.return=u,ae=j;else e:for(u=S;ae!==null;){if(g=ae,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:al(9,g)}}catch(pe){ft(g,g.return,pe)}if(g===u){ae=null;break e}var J=g.sibling;if(J!==null){J.return=g.return,ae=J;break e}ae=g.return}}if(qe=a,Gn(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Rr,e)}catch{}o=!0}return o}finally{Je=n,Dr.transition=t}}return!1}function su(e,t,n){t=us(n,t),t=kc(e,t,1),e=Vn(e,t,1),t=zt(),e!==null&&(Ir(e,1,t),rr(e,t))}function ft(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qn===null||!Qn.has(o))){e=us(n,e),e=Cc(t,e,1),t=Vn(t,e,1),e=zt(),t!==null&&(Ir(t,1,e),rr(t,e));break}}t=t.return}}function Sh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,At===e&&(Et&n)===n&&(kt===4||kt===3&&(Et&130023424)===Et&&500>rt()-Hi?Mo(e,0):qi|=n),rr(e,t)}function au(e,t){t===0&&((e.mode&1)===0?t=1:(t=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var n=zt();e=kn(e,t),e!==null&&(Ir(e,t,n),rr(e,n))}function Ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),au(e,n)}function Dh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(t),au(e,n)}var lu;lu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)er=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return er=!1,xh(e,t,n);er=(e.flags&131072)!==0}else er=!1,ct&&(t.flags&1048576)!==0&&Kd(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ol(e,t),e=t.pendingProps;var a=ns(t,Wt.current);ds(t,n),a=_i(null,t,o,e,a,n);var l=vi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zt(o)?(l=!0,Ka(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,mi(t),a.updater=rl,t.stateNode=a,a._reactInternals=t,Di(t,o,e,n),t=Mi(null,t,o,!0,l,n)):(t.tag=0,ct&&l&&oi(t),Ht(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ol(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Th(o),e=Pr(o,e),a){case 0:t=Ei(null,t,o,e,n);break e;case 1:t=Rc(null,t,o,e,n);break e;case 11:t=Dc(null,t,o,e,n);break e;case 14:t=jc(null,t,o,Pr(o.type,e),n);break e}throw Error(v(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pr(o,a),Ei(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pr(o,a),Rc(e,t,o,a,n);case 3:e:{if(Lc(t),e===null)throw Error(v(387));o=t.pendingProps,l=t.memoizedState,a=l.element,Yd(e,t),Ya(t,o,null,n);var u=t.memoizedState;if(o=u.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=us(Error(v(423)),t),t=Ic(e,t,o,n,a);break e}else if(o!==a){a=us(Error(v(424)),t),t=Ic(e,t,o,n,a);break e}else for(cr=qn(t.stateNode.containerInfo.firstChild),dr=t,ct=!0,Wr=null,n=Ud(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),o===a){t=Nn(e,t,n);break e}Ht(e,t,o,n)}t=t.child}return t;case 5:return Xd(t),e===null&&li(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,u=a.children,Xl(o,a)?u=null:l!==null&&Xl(o,l)&&(t.flags|=32),Mc(e,t),Ht(e,t,u,n),t.child;case 6:return e===null&&li(t),null;case 13:return Fc(e,t,n);case 4:return xi(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ls(t,null,o,n):Ht(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pr(o,a),Dc(e,t,o,a,n);case 7:return Ht(e,t,t.pendingProps,n),t.child;case 8:return Ht(e,t,t.pendingProps.children,n),t.child;case 12:return Ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,u=a.value,nt(Ga,o._currentValue),o._currentValue=u,l!==null)if(Nt(l.value,u)){if(l.children===a.children&&!Xt.current){t=Nn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var g=l.dependencies;if(g!==null){u=l.child;for(var k=g.firstContext;k!==null;){if(k.context===o){if(l.tag===1){k=Cn(-1,n&-n),k.tag=2;var M=l.updateQueue;if(M!==null){M=M.shared;var z=M.pending;z===null?k.next=k:(k.next=z.next,z.next=k),M.pending=k}}l.lanes|=n,k=l.alternate,k!==null&&(k.lanes|=n),hi(l.return,n,t),g.lanes|=n;break}k=k.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(v(341));u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),hi(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Ht(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,ds(t,n),a=Sr(a),o=o(a),t.flags|=1,Ht(e,t,o,n),t.child;case 14:return o=t.type,a=Pr(o,t.pendingProps),a=Pr(o.type,a),jc(e,t,o,a,n);case 15:return Tc(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pr(o,a),ol(e,t),t.tag=1,Zt(o)?(e=!0,Ka(t)):e=!1,ds(t,n),_c(t,o,a),Di(t,o,a,n),Mi(null,t,o,!0,e,n);case 19:return Wc(e,t,n);case 22:return Ec(e,t,n)}throw Error(v(156,t.tag))};function iu(e,t){return Es(e,t)}function jh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,t,n,o){return new jh(e,t,n,o)}function Xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Th(e){if(typeof e=="function")return Xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===we)return 11;if(e===Ge)return 14}return 2}function eo(e,t){var n=e.alternate;return n===null?(n=jr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,o,a,l){var u=2;if(o=e,typeof e=="function")Xi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Ve:return Lo(n.children,a,l,t);case Le:u=8,a|=8;break;case je:return e=jr(12,n,t,a|2),e.elementType=je,e.lanes=l,e;case ze:return e=jr(13,n,t,a),e.elementType=ze,e.lanes=l,e;case Pe:return e=jr(19,n,t,a),e.elementType=Pe,e.lanes=l,e;case $e:return fl(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case He:u=9;break e;case we:u=11;break e;case Ge:u=14;break e;case Be:u=16,o=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=jr(u,n,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function Lo(e,t,n,o){return e=jr(7,e,o,t),e.lanes=n,e}function fl(e,t,n,o){return e=jr(22,e,o,t),e.elementType=$e,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=jr(6,e,null,t),e.lanes=n,e}function ed(e,t,n){return t=jr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eh(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gr(0),this.expirationTimes=gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function td(e,t,n,o,a,l,u,g,k){return e=new Eh(e,t,n,g,k),t===1?(t=1,l===!0&&(t|=8)):t=0,l=jr(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(l),e}function Mh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function du(e){if(!e)return zn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(Zt(n))return Od(e,n,t)}return t}function cu(e,t,n,o,a,l,u,g,k){return e=td(n,o,!0,e,a,l,u,g,k),e.context=du(null),n=e.current,o=zt(),a=Xn(n),l=Cn(o,a),l.callback=t??null,Vn(n,l,a),e.current.lanes=a,Ir(e,a,o),rr(e,o),e}function yl(e,t,n,o){var a=t.current,l=zt(),u=Xn(a);return n=du(n),t.context===null?t.context=n:t.pendingContext=n,t=Cn(l,u),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Vn(a,t,u),e!==null&&($r(e,a,u,l),Va(e,a,u)),u}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rd(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function Rh(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function nd(e){this._internalRoot=e}wl.prototype.render=nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));yl(e,t,null,null)},wl.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Eo(function(){yl(null,e,null,null)}),t[wn]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=un();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&pt(e)}};function od(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pu(){}function Lh(e,t,n,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var M=gl(u);l.call(M)}}var u=cu(t,o,e,0,null,!1,!1,"",pu);return e._reactRootContainer=u,e[wn]=u.current,Qs(e.nodeType===8?e.parentNode:e),Eo(),u}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var g=o;o=function(){var M=gl(k);g.call(M)}}var k=td(e,0,!1,null,null,!1,!1,"",pu);return e._reactRootContainer=k,e[wn]=k.current,Qs(e.nodeType===8?e.parentNode:e),Eo(function(){yl(t,k,n,o)}),k}function _l(e,t,n,o,a){var l=n._reactRootContainer;if(l){var u=l;if(typeof a=="function"){var g=a;a=function(){var k=gl(u);g.call(k)}}yl(t,u,e,a)}else u=Lh(n,t,e,a,o);return gl(u)}Sa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(Vr(t,n|1),rr(t,rt()),(qe&6)===0&&(ms=rt()+500,Gn()))}break;case 13:Eo(function(){var o=kn(e,1);if(o!==null){var a=zt();$r(o,e,1,a)}}),rd(e,1)}},In=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=zt();$r(t,e,134217728,n)}rd(e,134217728)}},Yt=function(e){if(e.tag===13){var t=Xn(e),n=kn(e,t);if(n!==null){var o=zt();$r(n,e,t,o)}rd(e,t)}},un=function(){return Je},Aa=function(e,t){var n=Je;try{return Je=e,t()}finally{Je=n}},Oo=function(e,t,n){switch(t){case"input":if(st(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Wa(o);if(!a)throw Error(v(90));or(o),st(o,a)}}}break;case"textarea":ln(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}},Ko=Yi,wa=Eo;var Ih={usingClientEntryPoint:!1,Events:[Zs,ts,Wa,Ss,Po,Yi]},pa={findFiberByHostInstance:ko,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fh={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:De.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bo(e),e===null?null:e.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||Rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Rr=vl.inject(Fh),Ie=vl}catch{}}return nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih,nr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(t))throw Error(v(200));return Mh(e,t,null,n)},nr.createRoot=function(e,t){if(!od(e))throw Error(v(299));var n=!1,o="",a=hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=td(e,1,!1,null,null,n,!1,o,a),e[wn]=t.current,Qs(e.nodeType===8?e.parentNode:e),new nd(t)},nr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Bo(t),e=e===null?null:e.stateNode,e},nr.flushSync=function(e){return Eo(e)},nr.hydrate=function(e,t,n){if(!bl(t))throw Error(v(200));return _l(null,e,t,!0,n)},nr.hydrateRoot=function(e,t,n){if(!od(e))throw Error(v(405));var o=n!=null&&n.hydratedSources||null,a=!1,l="",u=hu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=cu(t,null,e,1,n??null,a,!1,l,u),e[wn]=t.current,Qs(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new wl(t)},nr.render=function(e,t,n){if(!bl(t))throw Error(v(200));return _l(null,e,t,!1,n)},nr.unmountComponentAtNode=function(e){if(!bl(e))throw Error(v(40));return e._reactRootContainer?(Eo(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1},nr.unstable_batchedUpdates=Yi,nr.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!bl(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return _l(e,t,n,!1,o)},nr.version="18.3.1-next-f1338f8080-20240426",nr}var _u;function Hh(){if(_u)return ld.exports;_u=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(_){console.error(_)}}return w(),ld.exports=qh(),ld.exports}var vu;function zh(){if(vu)return kl;vu=1;var w=Hh();return kl.createRoot=w.createRoot,kl.hydrateRoot=w.hydrateRoot,kl}var Gh=zh();const Uh=Iu(Gh);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fu=(...w)=>w.filter((_,v,Y)=>!!_&&_.trim()!==""&&Y.indexOf(_)===v).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=F.forwardRef(({color:w="currentColor",size:_=24,strokeWidth:v=2,absoluteStrokeWidth:Y,className:$="",children:G,iconNode:Q,...de},ee)=>F.createElement("svg",{ref:ee,...Yh,width:_,height:_,stroke:w,strokeWidth:Y?Number(v)*24/Number(_):v,className:Fu("lucide",$),...de},[...Q.map(([L,B])=>F.createElement(L,B)),...Array.isArray(G)?G:[G]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(w,_)=>{const v=F.forwardRef(({className:Y,...$},G)=>F.createElement(Qh,{ref:G,iconNode:_,className:Fu(`lucide-${Vh(w)}`,Y),...$}));return v.displayName=`${w}`,v};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=et("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=et("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=et("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=et("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=et("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=et("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=et("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=et("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=et("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=et("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=et("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=et("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=et("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=et("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=et("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=et("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=et("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=et("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=et("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=et("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=et("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=et("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),so="weekly_chores_canvas_sheet_data_v5",Dl=[{index_:0,name:"Printable Weekly Schedule",data:[{index_:0,row:["Chore Schedule",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["FOR THE WEEK OF:","MON",null,"TUE",null,"WED",null,"THU",null,"FRI",null,"SAT",null,"SUN",null]},{index_:2,row:["2026-10-19","19",null,"20",null,"21",null,"22",null,"23",null,"24",null,"25",null]},{index_:3,row:["TASK",`WHO
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
- Put away food; Load dishwasher; Wipe surfaces`,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1]},{index_:10,row:["Weekly Tasks","Description",null,null,null,null,null,null,null,"Initials / Assigned",null,null,null,null,null]},{index_:11,row:["Personal Laundry","Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:12,row:["Tidy Bedrooms / Personal Spaces","Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:13,row:["Clean Up Basement","Pick Up, Organize, Dust & Vacuum",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:14,row:["Herd Feeding Station Deep Clean","Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:15,row:["Curbside Recycling","Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:18,row:["Weekly Sign-Off","Parent Initials:",null,null,null,null,null,null,null,null,null,null,null,"_________",!1]}]},{index_:1,name:"Household Hub (Background Data)",data:[{index_:0,row:["HOUSEHOLD HUB & MASTER DIRECTORY",null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",null,null,null,null,null,null,null,null,null,null,null]},{index_:3,row:["HOUSEHOLD MEMBERS",null,null,null,null,null,"MASTER CHORE REGISTRY & ALLOCATION RULES",null,null,null,null,null]},{index_:4,row:["Name","Role","Occupancy","Special Rotation Groups","Active Status",null,"Chore","Member / Group","Frequency","Suggested Days","Details / Notes",null]},{index_:5,row:["Thom","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Empty the Litter Box (Morning & Evening)","Non-Casual","Daily","N/A","Scoop waste, refresh litter, dispose of waste.",null]},{index_:6,row:["Meghan","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Feed the Herd (Breakfast & Supper)","Non-Casual","Daily","N/A","Feed all animals the appropriate food and portions.",null]},{index_:7,row:["Sydney","Minion","Full-Time","Kids, Non-Casual, All",!0,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun","Put away clean dishes, Load any dirty dishes","Kitchen"]},{index_:8,row:["Cadence","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Make Supper: Plan Ahead!","Non-Casual","Daily","Mon – Sun","Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",null]},{index_:9,row:["Mason","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Dinner Dishes & Kitchen Cleanup","Non-Casual","Daily","N/A","Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",null]},{index_:10,row:["Koda","Minion","Casual","All",!0,null,"Tidy Bedrooms / Personal Spaces","Kids","Once a Week","Saturday","Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",null]},{index_:11,row:["Keyanna","Minion","Casual","All",!0,null,"Laundry","All","Once a Week","Saturday","Wash, dry, fold & put away (each kid responsible for their own items)",null]},{index_:12,row:[null,null,null,null,null,null,"Clean Basement (Pick Up, Dust, Vacuum)","Non-Casual","Once a Week","Sunday","Pick up mess & laundry, dust surfaces, vacuum floors",null]},{index_:13,row:["OCCUPANCY CATEGORIES",null,null,null,null,null,"Herd Feeding Station Deep Clean","All","Once a Week","Sunday","Wash & sanitize pet bowls, vacuum feeding mat",null]},{index_:14,row:["Type","Description","Rules",null,"Active Status",null,"Curbside Recycling","Non-Casual","Bi-Weekly","Thursday Evening","Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:15,row:["Full-Time","Constant Residency","Included in all weekly/monthly schedulings",null,!0,null,"Curbside Waste","Non-Casual","Bi-Weekly","Thursday Evening","Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)","Household"]},{index_:16,row:["Bi-Weekly","Half-Time Residency",'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',null,!0,null,"Walk Dogs: Ellie & Lewis","Non-Casual","Daily","Mon – Sun","Walk Ellie & Lewis","Pet Care"]},{index_:17,row:["Casual","Periodic Residency","Manually added to any schedules",null,!0,null,"SCHEDULE CONFIGURATIONS",null,null,null,null,null]},{index_:18,row:["SPECIAL ROTATION GROUPS",null,null,null,null,null,"Active Week Start Date","2026-10-19","Printable Weekly Schedule",null,null,null]},{index_:19,row:["Name","Members",null,null,"Active Status",null,null,null,null,null,null,null]},{index_:20,row:["All","Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",null,null,!0,null,"Custody Schedule Rotation","Kids Week","Bi-Weekly Schedule",null,"Mason, Cadence",null]},{index_:21,row:["Kids","Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:22,row:["Parents","Thom, Meghan",null,null,!0,null,null,null,null,null,null,null]},{index_:23,row:["Non-Casual","Thom, Meghan, Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:26,row:["Pet Name","Dog / Cat","Routine","Care Responsibilities","Active Status",null,null,null,null,null,null,null]},{index_:27,row:["Ellie","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:28,row:["Lewis","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:29,row:["Casey","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:30,row:["Gigi","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:31,row:["Sloane","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:32,row:["Scoob","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:34,row:[null,null,null,null,!1,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun",null,null]}]}];var Ut=[{name:"Monday",short:"Mon",color:"#8E283A",lightBg:"#FDF2F4",border:"#F8B4BD"},{name:"Tuesday",short:"Tue",color:"#1A638B",lightBg:"#F0F7FB",border:"#A6D2ED"},{name:"Wednesday",short:"Wed",color:"#C45508",lightBg:"#FEF6F0",border:"#FBD3B6"},{name:"Thursday",short:"Thu",color:"#3D7841",lightBg:"#F2F8F3",border:"#B6DFBA"},{name:"Friday",short:"Fri",color:"#584B79",lightBg:"#F5F3F9",border:"#CDC3E6"},{name:"Saturday",short:"Sat",color:"#B81B6C",lightBg:"#FDF2F8",border:"#F8B4DB"},{name:"Sunday",short:"Sun",color:"#0C7B83",lightBg:"#EFF9FA",border:"#9EE1E6"}],Nl=[{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},{color:"#D97706",bg:"#FEF3C7",text:"#B45309"},{color:"#10B981",bg:"#D1FAE5",text:"#047857"},{color:"#6366F1",bg:"#EEF2FF",text:"#4338CA"}],op={meghan:{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},thom:{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},sydney:{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},cadence:{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},mason:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},koda:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},keyanna:{color:"#D97706",bg:"#FEF3C7",text:"#B45309"}},sp={ellie:{color:"#E11D48",bg:"#FFE4E6",text:"#BE123C",border:"#FECDD3"},lewis:{color:"#059669",bg:"#D1FAE5",text:"#047857",border:"#A7F3D0"},casey:{color:"#7C3AED",bg:"#EDE9FE",text:"#6D28D9",border:"#DDD6FE"},gigi:{color:"#DB2777",bg:"#FCE7F3",text:"#BE185D",border:"#FBCFE8"},sloane:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},sloan:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},scoob:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",border:"#FED7AA"}};function Ne(w){return w?String(w).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g," ").replace(/\s+/g," ").trim():""}function ut(w){if(!w)return"";const _=String(w).toLowerCase();return _.includes("litter")?"litter_box":_.includes("herd")&&(_.includes("breakfast")||_.includes("supper")||_.includes("feed the herd"))?"feed_herd":_.includes("dishwasher")&&_.includes("empty")?"empty_dishwasher":_.includes("supper")||_.includes("dinner")&&_.includes("plan")?"make_supper":_.includes("dishes")||_.includes("kitchen cleanup")?"dinner_dishes":_.includes("bedroom")||_.includes("personal spaces")?"tidy_bedrooms":_.includes("laundry")?"laundry":_.includes("basement")?"clean_basement":_.includes("feeding station")||_.includes("deep clean")&&_.includes("feeding")?"feeding_station_deep_clean":_.includes("recycling")?"curbside_recycling":_.includes("waste")?"curbside_waste":_.includes("sign-off")||_.includes("sign off")||_.includes("inspection")?"weekly_sign_off":_.includes("walk")&&_.includes("dog")?"walk_dogs":Ne(w)}function sn(w){const _=String(w||"").toLowerCase();return _.includes("tidy bedroom")||_.includes("tidy up bedroom")||_.includes("tidy bedrooms")||_.includes("personal spaces")}function Ou(w){return String(w||"").toLowerCase().includes("laundry")}function jl(w){return sn(w)||Ou(w)}function Wu(w){const _=String(w||"").toLowerCase();return _.includes("clean basement")||_.includes("basement")}function Pu(w){const _=String(w||"").toLowerCase();return _.includes("feeding station")||_.includes("herd feeding")||_.includes("deep clean")&&_.includes("feeding")}function no(w){const _=String(w||"").toLowerCase();return _.includes("sign-off")||_.includes("sign off")||_.includes("inspection")}function ap(w,_){if(jl(w)||no(w))return!1;if(Wu(w)||Pu(w))return!0;const v=String(w||"").toLowerCase();return!!(v.includes("curbside")||v.includes("recycling")||v.includes("waste")||_&&(_.frequency==="weekly"||_.frequency==="biweekly"))}function hr(w){const v=String(w||"").match(/tidy bedroom:\s*([A-Za-z]+)/i);return v?v[1].trim():null}function ao(w,_,v){const Y=new Date(w,_,v,12,0,0),$=new Date(2026,9,18,12,0,0),Q=(Math.round((Y.getTime()-$.getTime())/(1e3*60*60*24))%14+14)%14;return Q===0?{isPresent:!0,label:"Arrives 5 PM",fullLabel:"Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",cycleIndex:Q,isArrivalDay:!0,isDepartureDay:!1,isFullStay:!1}:Q>=1&&Q<=6?{isPresent:!0,label:"Here (Kids Week)",fullLabel:"Cadence & Mason are here this week (Kids Week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!0}:Q===7?{isPresent:!0,label:"Leaves 5 PM",fullLabel:"Cadence & Mason depart today at 5:00 PM (End of Kids Week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!0,isFullStay:!1}:{isPresent:!1,label:"Away (Off Week)",fullLabel:"Cadence & Mason are away this week (Off week)",cycleIndex:Q,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!1}}function Tu(w,_="Cadence & Mason"){if(!w||w.length<7)return null;const v=w[6],Y=w[0],$=ao(Y.year,Y.month,Y.day);return ao(v.year,v.month,v.day).isArrivalDay?{text:`${_} arrive Sunday at 5:00 PM`,badgeBg:"bg-pink-50 text-pink-700 border-pink-200"}:$.isPresent&&$.isFullStay?{text:`${_} here this week (leave Sun 5 PM)`,badgeBg:"bg-emerald-50 text-emerald-700 border-emerald-200"}:{text:`${_} away this week (next back on Sunday)`,badgeBg:"bg-slate-100 text-slate-500 border-slate-200"}}function lp(w){if(!w||w.length<6)return!1;const _=w[5]||w[w.length-1],v=ao(_.year,_.month,_.day);return v.isFullStay||v.isDepartureDay}function Ku(w,_,v,Y=["Thom","Meghan"]){const $=new Date(w,_,v,12,0,0),G=new Date(2026,9,11,12,0,0),Q=Math.round(($.getTime()-G.getTime())/(1e3*60*60*24*7)),de=Y&&Y.length>0?Y:["Thom","Meghan"],ee=(Q%de.length+de.length)%de.length;return de[ee]}var An=[{id:"Pet Care",name:"Pet Care",icon:"🐾",bg:"bg-amber-50",text:"text-amber-800",border:"border-amber-200",dot:"#D97706"},{id:"Kitchen",name:"Kitchen",icon:"🍽️",bg:"bg-emerald-50",text:"text-emerald-800",border:"border-emerald-200",dot:"#059669"},{id:"Bedrooms",name:"Bedrooms",icon:"🛏️",bg:"bg-pink-50",text:"text-pink-800",border:"border-pink-200",dot:"#DB2777"},{id:"Household",name:"Household",icon:"🏠",bg:"bg-blue-50",text:"text-blue-800",border:"border-blue-200",dot:"#2563EB"}],ip=[{title:"Empty the Litter Box (Morning & Evening)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening scoop, waste disposal"},{title:"Feed the Herd (Breakfast & Supper)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening feeding, refresh water bowls"},{title:"Make Supper: Plan Ahead!",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Parents & Kids",notes:"Meal prep, cooking, family dinner"},{title:"Dinner Dishes & Kitchen Cleanup",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Clear table, dishwasher, wipe counters & sink"},{title:"Tidy Bedrooms & Checklist",category:"Bedrooms",who:"Each Child",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Occupants",notes:"Pick up mess & laundry, dust surfaces, vacuum floors"},{title:"Laundry (Wash, Fold, Put Away)",category:"Household",who:"Sydney",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"Sydney",notes:"Linens, clothes, fold and put in drawers"},{title:"Clean Basement & Rec Room",category:"Household",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Kids",notes:"Tidy items, organize games, vacuum carpet"},{title:"Weekly Sign-Off & Inspection",category:"Administration",who:"Parents",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"},{title:"Herd Feeding Station Deep Clean",category:"Pet Care",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Full-Time Roster",notes:"Wash & sanitize pet bowls, wipe feeding mat"},{title:"Curbside Recycling",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"},{title:"Curbside Waste",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"},{title:"Walk Dogs: Ellie & Lewis (Morning & Evening walk)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening walk for Ellie & Lewis"}];function Rt(w,_,v,Y){const $=String(w||"").toLowerCase(),G=$.includes("recycling"),Q=$.includes("waste");if(!G&&!Q)return!0;const de=new Date(_,v,Y,12,0,0),ee=new Date(2026,9,15,12,0,0),L=Math.round((de.getTime()-ee.getTime())/(1e3*60*60*24)),H=(Math.round(L/7)%2+2)%2;return G?H===0:Q?H===1:!0}function Sl(w){const _=String(w||"").toLowerCase().trim();return _.includes("recycling")||_.includes("waste")?{frequency:"biweekly",dayOfWeek:3}:_.includes("sign-off")||_.includes("inspection")||_.includes("deep clean")||_.includes("feeding station")?{frequency:"weekly",dayOfWeek:6}:_.includes("tidy bedroom")||_.includes("clean basement")||_.includes("laundry")?{frequency:"weekly",dayOfWeek:5}:{frequency:"daily",dayOfWeek:0}}function Eu(w){return w<10?"0"+w:""+w}function Dn(w,_,v){return`${w}-${Eu(_+1)}-${Eu(v)}`}function Mt(w){if(w==null||w==="")return null;if(w instanceof Date)return{year:w.getFullYear(),month:w.getMonth(),day:w.getDate()};if(typeof w=="number"){if(w>3e4&&w<6e4){const Y=(w-25569)*86400*1e3,$=new Date(Y);return{year:$.getUTCFullYear(),month:$.getUTCMonth(),day:$.getUTCDate()}}return null}const _=String(w).trim();if(!_.includes("-")){const Y=Number(_);if(!isNaN(Y)&&Y>3e4&&Y<6e4){const $=new Date((Y-25569)*86400*1e3);return{year:$.getUTCFullYear(),month:$.getUTCMonth(),day:$.getUTCDate()}}return null}const v=_.split("-").map(Number);return v.length!==3||isNaN(v[0])||isNaN(v[1])||isNaN(v[2])?null:{year:v[0],month:v[1]-1,day:v[2]}}function Bu(w,_,v){const $=new Date(w,_,v).getDay(),G=$===0?-6:1-$,Q=new Date(w,_,v+G);return{year:Q.getFullYear(),month:Q.getMonth(),day:Q.getDate()}}function _s(w,_,v){const Y=Bu(w,_,v),$=[];for(let G=0;G<7;G++){const Q=new Date(Y.year,Y.month,Y.day+G),de=Q.getFullYear(),ee=Q.getMonth(),L=Q.getDate();$.push({year:de,month:ee,day:L,dateKey:Dn(de,ee,L),isCurrentMonth:!0,dayOfWeekIndex:G})}return $}function ws(){const w=new Date,_=Bu(w.getFullYear(),w.getMonth(),w.getDate());return{..._,todayYear:w.getFullYear(),todayMonth:w.getMonth(),todayDay:w.getDate(),dateKey:Dn(_.year,_.month,_.day)}}function dp(w,_=ip){const v=Mt(w)||{year:2026,month:9,day:12},Y=_s(v.year,v.month,v.day),$=["Thom","Meghan"],G=["Sydney"],Q=["Sydney","Cadence","Mason"],de=["Thom","Meghan","Sydney"],ee=["Thom","Meghan","Sydney","Cadence","Mason"],L={};return Y.forEach((B,H)=>{const te=B.dateKey;L[te]={};const be=ao(B.year,B.month,B.day),Te=be.isFullStay||be.isDepartureDay,le=Te?ee:de,re=Te?Q:G,Me=H%le.length;let Se=0;_.forEach((X,De)=>{var Ye,ot,Ve,Le,je,ge,He;const we=X.task||X.title||((Ye=X.row)==null?void 0:Ye[0])||"",ze=we.toLowerCase(),Pe=Sl(we);let Ge=!1;const Be=ze.includes("deep clean")||ze.includes("feeding station"),$e=ze.includes("recycling"),E=ze.includes("waste");if(Be)Ge=H===6;else if($e)Ge=H===3&&Rt("recycling",B.year,B.month,B.day);else if(E)Ge=H===3&&Rt("waste",B.year,B.month,B.day);else if(Pe.frequency==="daily"||(ot=X.frequency)!=null&&ot.toLowerCase().includes("daily")&&!((Ve=X.frequency)!=null&&Ve.toLowerCase().includes("once")))Ge=!0;else if(Pe.frequency==="biweekly"||(Le=X.frequency)!=null&&Le.toLowerCase().includes("bi"))Ge=H===3&&Rt(we,B.year,B.month,B.day);else if(Pe.frequency==="weekly"||(je=X.frequency)!=null&&je.toLowerCase().includes("weekly")&&!((ge=X.frequency)!=null&&ge.toLowerCase().includes("bi"))||(He=X.frequency)!=null&&He.toLowerCase().includes("once")){const R=String(X.targetDay||"").toLowerCase(),ce=R.includes("sunday")?6:R.includes("thursday")?3:5;Ge=H===ce}let K="";Ge?sn(we)?K=Te?"Each Child":"Sydney":H===6&&ze.includes("supper")?K=Ku(B.year,B.month,B.day,$):ze.includes("sign-off")||ze.includes("inspection")?K=$[H%$.length]:ze.includes("basement")?K=re[(Me+1)%re.length]:ze.includes("laundry")?K=re[Me%re.length]:Be?K=le[(Me+1)%le.length]:ze.includes("recycling")?K=le[(Me+3)%le.length]:ze.includes("waste")?K=le[(Me+2)%le.length]:(K=le[(Me+Se)%le.length],Se++):K="";const W=X.index_!==void 0?X.index_:5+De,x={who:K,done:!1,kidsDone:{}};L[te][W]=x,X.index_!==void 0&&(L[te][X.index_]=x),we&&(L[te][we]=x,L[te][ze]=x)})}),L}function Mu(w,_){const v=Mt(_)||{year:2026,month:9,day:12},Y=_s(v.year,v.month,v.day),$={};return Y.forEach(G=>{$[G.dateKey]={}}),!w||!Array.isArray(w)||w.forEach(G=>{if(G.index_<4||!G.row||G.row.length===0)return;const Q=String(G.row[0]||"").trim(),de=Q.toLowerCase();if(!Q||Q.startsWith("•")||de==="daily tasks"||de==="weekly tasks"||Q.toUpperCase().includes("SECTION")||Q.toUpperCase().includes("ONCE-A-WEEK")||Q.toUpperCase().includes("ROSTER")||Q.toUpperCase().includes("PET CARE"))return;const ee=Q.toLowerCase(),L=ut(Q),B=G.index_;Y.forEach((H,te)=>{const be=1+te*2,Te=2+te*2,le=G.row[be]!==void 0&&G.row[be]!==null?String(G.row[be]).trim():"",Me=le.startsWith("-")||le.startsWith("(")||le.startsWith("SG:")||le.startsWith("Done:")||le.startsWith("Parent Initials")||le.startsWith("___")||/^Who:\s*_+$/i.test(le)?"":le.replace(/^Who:\s*/i,"").trim(),Se=G.row[Te]===!0||String(G.row[Te]).toLowerCase()==="true",X={who:Me,done:Se,kidsDone:{}};jl(Q)&&((G.row[2]===!0||String(G.row[2]).toLowerCase()==="true")&&(X.kidsDone.Sydney=!0),(G.row[4]===!0||String(G.row[4]).toLowerCase()==="true")&&(X.kidsDone.Cadence=!0),(G.row[6]===!0||String(G.row[6]).toLowerCase()==="true")&&(X.kidsDone.Mason=!0),(G.row[12]===!0||String(G.row[12]).toLowerCase()==="true")&&(X.kidsDone.Koda=!0),(G.row[14]===!0||String(G.row[14]).toLowerCase()==="true")&&(X.kidsDone.Keyanna=!0)),$[H.dateKey][B]=X,$[H.dateKey][Q]=X,$[H.dateKey][ee]=X,L&&($[H.dateKey][L]=X)})}),$}function cp({data:w,updateItem:_,deleteItem:v,insertItem:Y,moveItem:$,followLink:G}){var Q,de,ee;const[L,B]=F.useState(()=>new Set),[H,te]=F.useState({}),[be,Te]=F.useState([]),[le,re]=F.useState([]),[Me,Se]=F.useState(null),[X,De]=F.useState(null),[Ye,ot]=F.useState(null),Ve=F.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return(i.includes("printable")||i.includes("weekly")&&i.includes("schedule"))&&!i.includes("hub")})||w[0],[w]),Le=F.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return i.includes("hub")||i.includes("household")||i.includes("directory")||i.includes("roster")})||(w.length>1?w[1]:w[0]),[w]),je=(Q=Ve==null?void 0:Ve.index_)!=null?Q:0,ge=(de=Le==null?void 0:Le.index_)!=null?de:(w==null?void 0:w.length)>1?1:0,He=Le||{data:[]},we=Ve||{data:[]},ze=je,Pe=He;we!=null&&we.data;const Ge=(s,i)=>{if(!(we!=null&&we.data)||we.data.length===0)return null;const c=ut(s),m=Ne(s);if(c){const p=we.data.find(h=>h.index_<4||!h.row||!h.row[0]?!1:ut(h.row[0])===c);if(p)return p}if(m){const p=we.data.find(d=>d.index_<4||!d.row||!d.row[0]?!1:Ne(d.row[0])===m);if(p)return p;const h=we.data.find(d=>{if(d.index_<4||!d.row||!d.row[0])return!1;const f=Ne(d.row[0]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=we.data.find(h=>h.index_===i&&h.index_>=4);if(p)return p}return null},Be=(s,i)=>{const c=Ge(s,i);return c?c.index_:i},$e=(s,i)=>{if(!(He!=null&&He.data)||He.data.length===0)return null;const c=ut(s),m=Ne(s);if(c){const p=He.data.find(h=>h.index_<5||!h.row||!h.row[6]?!1:ut(h.row[6])===c);if(p)return p}if(m){const p=He.data.find(d=>d.index_<5||!d.row||!d.row[6]?!1:Ne(d.row[6])===m);if(p)return p;const h=He.data.find(d=>{if(d.index_<5||!d.row||!d.row[6])return!1;const f=Ne(d.row[6]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=He.data.find(h=>h.index_===i&&h.index_>=5);if(p)return p}return null},E=(s,i)=>{const c=$e(s,i);return c?c.index_:i},K=F.useMemo(()=>{const s=Pe.data||[];let i="2026-10-12",c="Kids Week",m="Mason, Cadence",p="Bi-Weekly Schedule continuing on from first Friday specified",h="Non-Casual";return s.forEach(d=>{if(!d.row)return;const f=String(d.row[6]||"").toLowerCase().trim(),y=d.row[7],C=String(d.row[8]||"").trim(),D=String(d.row[10]||"").trim();if(f.includes("active week")){const T=Mt(y);T?i=Dn(T.year,T.month,T.day):y&&(i=String(y).trim())}else f.includes("custody schedule")?(y&&(c=String(y).trim()),D&&(m=D)):(f.includes("waste")||f.includes("recycling"))&&(C&&(p=C),D&&(h=D))}),{activeWeekStart:i,custodyRotation:c,custodyMembers:m,wasteRotation:p,wasteMembers:h}},[Pe]),W=F.useMemo(()=>{const s=Pe.data||[],i=[];return s.forEach(c=>{if(!c.row||c.index_<14||c.index_>17)return;const m=String(c.row[0]||"").trim();!m||m.toLowerCase()==="type"||m.toLowerCase().includes("occupancy")||m.toLowerCase().includes("special rotation")||i.push({type:m,description:String(c.row[1]||"").trim(),rules:String(c.row[2]||"").trim(),active:c.row[4]!==!1&&String(c.row[4]).toLowerCase()!=="false"})}),i.length>0?i:[{type:"Full-Time",description:"Constant Residency",rules:"Included in all weekly/monthly schedulings",active:!0},{type:"Bi-Weekly",description:"Half-Time Residency",rules:'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',active:!0},{type:"Casual",description:"Periodic Residency",rules:"Manually added to any schedules",active:!0}]},[Pe]),x=F.useMemo(()=>{const i=(Pe.data||[]).filter(c=>{if(!!!(c.row&&c.row[5]==="MEMBER_ROW")&&(c.index_<4||c.index_>12)||!c.row||!c.row[0])return!1;const p=String(c.row[0]).trim();if(!p)return!1;const h=p.toLowerCase();return!(h==="household members"||h==="name"||h.includes("directory")||h.includes("occupancy"))});return i.length===0?[]:i.map((c,m)=>{const p=String(c.row[0]||"").trim(),h=String(c.row[1]||"").trim()||(["thom","meghan"].includes(p.toLowerCase())?"Overseer Supreme":"Minion"),d=String(c.row[2]||"").trim(),f=String(c.row[3]||"").trim(),y=c.row[4]===!0||String(c.row[4]).toLowerCase()==="true",C=d.toLowerCase();let D="regular";C.includes("bi-weekly")||C.includes("biweekly")?D="biweekly":C.includes("casual")&&(D="casual");const T=op[p.toLowerCase()]||Nl[m%Nl.length];return{id:p,name:p,role:h,residency:d||(D==="biweekly"?"Bi-Weekly":D==="casual"?"Casual":"Full-Time"),type:D,specialGroups:f,schedule:D==="biweekly"?"Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)":D==="casual"?"Periodic Residency (Manual Add)":"Constant Residency (Full-Time)",active:y,color:T.color,bg:T.bg,text:T.text,index_:c.index_}})},[Pe]),R=F.useMemo(()=>["All","Kids","Parents","Non-Casual"].map(i=>{const c=x.filter(m=>String(m.specialGroups||"").split(",").map(h=>h.trim().toLowerCase()).filter(Boolean).includes(i.toLowerCase())).map(m=>m.name);return{name:i,members:c.length>0?c.join(", "):"None",active:!0}}),[x]),ce=F.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")&&!i.includes("admin")&&!i.includes("mom")&&!i.includes("dad")}).map(s=>s.name),[x]),he=F.useMemo(()=>ce,[ce]),me=F.useMemo(()=>{const s=Pe.data||[],i=s.find(c=>{var m;const p=String(((m=c.row)==null?void 0:m[0])||"").toLowerCase().trim();return p.includes("pet care profile")||p==="pet name"});return i?s.filter(m=>{if(m.index_<=i.index_||!m.row||!m.row[0]||m.row[5]==="MEMBER_ROW")return!1;const h=String(m.row[0]).trim().toLowerCase();return h!=="pet name"&&!h.includes("profile")}).map((m,p)=>{const h=String(m.row[0]).trim(),d=String(m.row[1]||"").trim(),f=String(m.row[2]||"").trim(),y=String(m.row[3]||"").trim(),C=m.row[4]!==!1&&String(m.row[4]).toLowerCase()!=="false",D=["ellie","lewis"].includes(h.toLowerCase()),T=d||(D?"Dog":"Cat"),b=T.toLowerCase(),N=b.includes("dog"),P=N?"🐕":b.includes("cat")?"🐈":b.includes("bird")?"🐦":b.includes("fish")?"🐟":"🐾",V=f||"Morning & Evening",O=["meghan","thom","sydney"].includes(y.toLowerCase()),I=!y||O?N?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water":y,Z=sp[h.toLowerCase()]||Nl[p%Nl.length];return{name:h,type:T,routine:V,care:I,active:C,icon:P,color:Z.color,bg:Z.bg,text:Z.text,border:Z.border||Z.color,index_:m.index_}}):[]},[Pe]),xe=F.useMemo(()=>{const s=Pe.data||[];let i=[];const c=new Set,m=new Set;if(s.forEach(p=>{if(!p.row||p.index_<5)return;const h=p.row[6]!==void 0&&p.row[6]!==null?String(p.row[6]).trim():"";if(!h)return;const d=h.toLowerCase(),f=Ne(h),y=ut(h);if(d==="chore"||d==="parameter"||d.includes("schedule configuration")||d.includes("active week")||d.includes("waste / recycling")||d.includes("custody schedule")||d.includes("pet care profile")||d.includes("special rotation")||d.includes("occupancy categories")||d.includes("household member")||no(h)||y==="weekly_sign_off"||c.has(y)||m.has(f)||L.has(String(p.index_))||L.has(d)||L.has(f)||L.has(y))return;const C=String(p.row[7]||"").trim(),D=String(p.row[8]||"").trim(),T=String(p.row[9]||"").trim(),b=String(p.row[10]||"").trim(),N=String(p.row[11]||"").trim(),P=An.some(ke=>ke.name.toLowerCase()===C.toLowerCase()),I=(ke=>{const Fe=String(ke).trim().toLowerCase();return!Fe||Fe==="all non-casual"||Fe==="non-casual"||Fe==="parents & kids"||Fe==="full-time roster"?"Non-Casual":Fe==="kids"||Fe==="kids rotation"||Fe==="all kids"?"Kids":Fe==="parents"?"Parents":Fe==="all"||Fe==="all occupants"?"All":String(ke).trim()})(P?b||"Non-Casual":C||"Non-Casual"),ne=(D||(y.includes("curbside")?"Bi-Weekly":y.includes("deep_clean")||y.includes("sign_off")||y.includes("bedroom")||y.includes("laundry")||y.includes("basement")?"Once a Week":"Daily")).toLowerCase(),Ee=ne.includes("bi")?"Bi-Weekly":ne.includes("once")||ne.includes("weekly")?"Once a Week":"Daily",at=(T==="N/A"||!T?Ee==="Daily"?"Mon – Sun":Ee==="Bi-Weekly"?"Thursday Evening":"Saturday":T).replace(/\s*\(required\)/i,"").trim()||"Mon – Sun",bt=P?N:b;let ye=P?C:N&&An.some(ke=>ke.name.toLowerCase()===N.toLowerCase())?N:"Household";!P&&ye==="Household"&&(d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?ye="Pet Care":d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")||d.includes("cook")?ye="Kitchen":d.includes("bedroom")?ye="Bedrooms":d.includes("basement")?ye="Household":(d.includes("sign-off")||d.includes("inspection"))&&(ye="Administration")),c.add(y),m.add(f),i.push({index_:p.index_,task:h,canonicalKey:y,category:ye,frequency:Ee,targetDay:at==="N/A"?"Mon – Sun":at,rotationGroup:I,notes:bt,source:"hub_master_registry"})}),we!=null&&we.data&&we.data.forEach(p=>{if(p.index_<4||!p.row||!p.row[0])return;const h=String(p.row[0]).trim(),d=h.toLowerCase(),f=Ne(h),y=ut(h);if(!f||f==="daily tasks"||f==="weekly tasks"||f.includes("section")||f.includes("once a week")||f.includes("bedroom checklist")||f.includes("pet care routine")||f.startsWith("•")||no(h)||y==="weekly_sign_off"||c.has(y)||m.has(f)||L.has(f)||L.has(y)||L.has(String(p.index_)))return;c.add(y),m.add(f);const C=Sl(h),D=C.frequency==="weekly",T=C.frequency==="biweekly";let b="Household",N="";d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?(b="Pet Care",d.includes("walk")&&(N="Morning & evening walk for Ellie & Lewis")):d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")?b="Kitchen":d.includes("bedroom")?b="Bedrooms":d.includes("basement")?b="Household":(d.includes("sign-off")||d.includes("inspection"))&&(b="Administration"),i.push({index_:p.index_,task:h,canonicalKey:y,category:b,frequency:T?"Bi-Weekly":D?"Once a Week":"Daily",targetDay:T?"Thursday Evening":D?"Saturday":"Mon – Sun",rotationGroup:"Non-Casual",notes:N,source:"printable_sheet"})}),le.length>0&&le.forEach(p=>{const h=Ne(p.task),d=ut(p.task);!c.has(d)&&!m.has(h)&&!L.has(String(p.index_))&&!L.has(h)&&!L.has(d)&&(c.add(d),m.add(h),i.push(p))}),i.length===0)return[];if(Me&&Array.isArray(Me)&&Me.length>0){const p=h=>{const d=Ne(h.task),f=Me.indexOf(d);if(f!==-1)return f;const y=(h.task||"").toLowerCase().trim(),C=Me.indexOf(y);if(C!==-1)return C;const D=ut(h.task);if(D){const T=Me.findIndex(b=>ut(b)===D);if(T!==-1)return T}return-1};i.sort((h,d)=>{const f=p(h),y=p(d);return f!==-1&&y!==-1?f-y:f!==-1?-1:y!==-1?1:0})}return i},[Pe,le,Me,L]),Ce=F.useMemo(()=>s=>{if(!s)return null;const i=String(s).trim().toLowerCase();return x.find(c=>c.name.toLowerCase()===i||c.id.toLowerCase()===i||i==="mom"&&(c.name.toLowerCase().includes("megh")||c.role.toLowerCase().includes("mom")||c.role.toLowerCase().includes("parent"))||i==="dad"&&(c.name.toLowerCase()==="thom"||c.role.toLowerCase().includes("dad")||c.role.toLowerCase().includes("parent")))||null},[x]),Re=F.useMemo(()=>{const s=x.filter(i=>i.type==="biweekly").map(i=>i.name);return s.length>0?s.join(" & "):"Cadence & Mason"},[x]),We=F.useMemo(()=>K!=null&&K.activeWeekStart?K.activeWeekStart:"2026-10-12",[K]);F.useMemo(()=>Mt(We)||{year:2024,month:6,day:15},[We]);const tt=F.useMemo(()=>{const s=(we==null?void 0:we.data)||[],i=(d,f)=>{const y=ut(d);if(y==="litter_box"||y==="feed_herd"||y==="empty_dishwasher"||y==="make_supper"||y==="dinner_dishes"||y==="walk_dogs")return!0;if(y==="curbside_recycling"||y==="curbside_waste"||y==="clean_basement"||y==="feeding_station_deep_clean"||y==="tidy_bedrooms"||y==="laundry")return!1;const C=String(f||"").toLowerCase();return C.includes("bi")||C.includes("once")||C.includes("week")?!1:C.includes("daily")?!0:Sl(d).frequency==="daily"},c=[],m=[],p=new Set;xe.forEach(d=>{if(no(d.task))return;const f=ut(d.task),y=Ne(d.task);if(p.has(f)||p.has(y))return;p.add(f),p.add(y);const C=s.find(N=>{if(N.index_<4||!N.row||!N.row[0])return!1;const P=String(N.row[0]).trim();return ut(P)===f||Ne(P)===y}),D=i(d.task,d.frequency);let T=C==null?void 0:C.row;if(!T)if(D)T=[d.task,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];else if(jl(d.task))T=[d.task,d.notes||"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1];else{const N=d.notes||(f.includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":f.includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"- Pick Up, Organize, Dust & Vacuum");T=[d.task,N,null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]}const b={isSectionHeader:!1,index_:C?C.index_:d.index_,row:T,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};D?c.push(b):m.push(b)}),s.forEach(d=>{if(d.index_<4||!d.row||!d.row[0])return;const f=String(d.row[0]).trim(),y=f.toLowerCase();if(!f||y==="daily tasks"||y==="weekly tasks"||y.includes("once-a-week")||y.includes("bedroom checklist")||y.includes("pet care routine")||y.includes("household roster")||y.includes("bi-weekly schedule")||y.startsWith("•")||no(f))return;const C=ut(f),D=Ne(f);if(p.has(C)||p.has(D))return;p.add(C),p.add(D);const T=i(f),b={isSectionHeader:!1,index_:d.index_,row:d.row,task:f};T?c.push(b):m.push(b)}),be.length>0&&be.forEach(d=>{const f=ut(d.task),y=Ne(d.task);if(p.has(f)||p.has(y))return;p.add(f),p.add(y);const C=i(d.task,d.frequency),D={isSectionHeader:!1,index_:d.index_,row:d.row,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};C?c.push(D):m.push(D)});const h=[];return h.push({isSectionHeader:!0,headerType:"daily",index_:4,title:"Daily Tasks"}),h.push(...c),h.push({isSectionHeader:!0,headerType:"weekly",index_:10,title:"Weekly Tasks",descHeader:"Description",rightHeader:"Initials / Assigned"}),h.push(...m),h.push({isSectionHeader:!1,index_:18,row:["Weekly Sign-Off & Inspection","Parents",!1,null,null,null,null,null,null,"Thom / Meghan",null,null,null,null,null],task:"Weekly Sign-Off & Inspection",category:"Administration",frequency:"Once a Week",targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"}),h.filter(d=>{if(d.isSectionHeader||no(d.task))return!0;const f=String(d.index_),y=String(d.task||"").toLowerCase().trim(),C=Ne(d.task),D=ut(d.task);return!(L.has(f)||L.has(y)||L.has(C)||L.has(D))}).map(d=>{if(d.isSectionHeader)return d;const f=H[d.index_]||H[String(d.task||"").toLowerCase().trim()]||(d.task?H[ut(d.task)]:null);if(!f)return d;const y=f.task||d.task,C=f.row?[...f.row]:[...d.row||[]];return C[0]=y,{...d,task:y,row:C,category:f.category||d.category,frequency:f.frequency||d.frequency,targetDay:f.targetDay||d.targetDay,rotationGroup:f.rotationGroup||d.rotationGroup,notes:f.notes||d.notes}})},[we,xe,be,L,H]),fe=F.useMemo(()=>{const s=tt.filter(i=>!i.isSectionHeader).map(i=>{const c=i.task,m=ut(c),p=Ne(c),h=xe.find(T=>{if(m&&ut(T.task)===m||p&&Ne(T.task)===p)return!0;const b=T.task.toLowerCase().trim();return c.toLowerCase().trim()===b})||xe.find(T=>{const b=T.task.toLowerCase().trim(),N=c.toLowerCase().trim();return N.includes("deep clean")&&b.includes("deep clean")||N.includes("feed the herd")&&b.includes("feed the herd")?!0:N.includes(b)||b.includes(N)||N.includes("dishes")&&b.includes("dishes")||N.includes("litter")&&b.includes("litter")||N.includes("supper")&&b.includes("supper")||N.includes("basement")&&b.includes("basement")||N.includes("laundry")&&b.includes("laundry")||N.includes("sign-off")&&b.includes("sign-off")});let d=(h==null?void 0:h.category)||"Household",f=(h==null?void 0:h.frequency)||"Daily",y=(h==null?void 0:h.targetDay)||"Mon – Sun",C=(h==null?void 0:h.rotationGroup)||"Kids Rotation",D=(h==null?void 0:h.notes)||"";return c.toLowerCase().includes("deep clean")||c.toLowerCase().includes("feeding station")?(d="Pet Care",f="Once a Week",y="Sunday",C=(h==null?void 0:h.rotationGroup)||"All",D=(h==null?void 0:h.notes)||"Wash & sanitize pet bowls, vacuum feeding mat"):c.toLowerCase().includes("recycling")?(d="Household",f="Bi-Weekly",y="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)"):c.toLowerCase().includes("waste")?(d="Household",f="Bi-Weekly",y="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)"):c.toLowerCase().includes("litter")||c.toLowerCase().includes("feed")?d="Pet Care":c.toLowerCase().includes("supper")||c.toLowerCase().includes("dishes")?d="Kitchen":sn(c)?(d="Bedrooms",f="Once a Week",y="Saturday",C=hr(c)||"Each Child"):c.toLowerCase().includes("basement")?(d="Household",f="Once a Week",y="Saturday",C="All Kids"):c.toLowerCase().includes("laundry")?(d="Household",f="Once a Week",y="Saturday",C="Sydney"):c.toLowerCase().includes("sign-off")&&(d="Administration",f="Once a Week",y="Sunday",C="Parents"),{index_:i.index_,row:i.row,task:c,category:d,frequency:f,targetDay:y,rotationGroup:C,notes:D}});return s.length>0?s:[]},[tt,xe]),or=F.useMemo(()=>ws(),[]),[yt,pr]=F.useState("matrix"),[dt,jn]=F.useState(()=>or.todayYear),[st,qr]=F.useState(()=>or.todayMonth),[ht,an]=F.useState(()=>or.dateKey),[Vt,xa]=F.useState("ALL"),[Lt,ln]=F.useState(null),[fa,io]=F.useState(!1),[ks,Tn]=F.useState(!1),[ya,Hr]=F.useState(!1),[mr,ga]=F.useState("add"),[sr,dn]=F.useState([]),[Cs,Ns]=F.useState(""),[xr,Tr]=F.useState(null),[co,Oo]=F.useState(""),[fr,cn]=F.useState("daily"),[Wo,Ss]=F.useState(5),[Po,Ko]=F.useState("All Non-Casual"),[wa,uo]=F.useState(!1),[ba,zr]=F.useState(!1),[As,En]=F.useState(null),[Ds,ho]=F.useState(["Kids","Non-Casual","All"]),[$t,Mn]=F.useState(null),[yr,js]=F.useState(null),[_a,po]=F.useState(""),[Er,va]=F.useState(""),[Ts,oe]=F.useState(null),[Bo,ka]=F.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Es,Ms]=F.useState(!1),[$o,Rn]=F.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[rt,Rs]=F.useState("ALL"),[Mr,Ln]=F.useState("ALL"),[Gr,Ls]=F.useState(""),[Is,Rr]=F.useState(null),[Ie,It]=F.useState(null),[Ft,Lr]=F.useState(null),[Ca,mo]=F.useState(!1),[Qe,qt]=F.useState({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",selectedTargetDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],customTargetEnabled:!1,customTargetText:"",rotationGroup:"Non-Casual",notes:""}),xo=async()=>{try{const s=localStorage.getItem(so),i=s?JSON.parse(s):w,m=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:i})})).json();m.ok?oe("✓ Current browser setup saved as the new default in code and weekly-chores-config.json!"):oe(`⚠️ Save failed: ${m.error}`)}catch(s){oe(`⚠️ Save failed: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>oe(null),4e3)},qo=()=>{try{const s=localStorage.getItem(so),c={sheetData:s?JSON.parse(s):w,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},m=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),h=document.createElement("a"),d=new Date().toISOString().slice(0,10);h.href=p,h.download=`weekly-chores-config-${d}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{}),oe("✓ Configuration file exported and saved to workspace!"),setTimeout(()=>oe(null),3500)}catch(s){oe(`⚠️ Export failed: ${(s==null?void 0:s.message)||String(s)}`),setTimeout(()=>oe(null),3500)}},Tl=s=>{var m;const i=(m=s.target.files)==null?void 0:m[0];if(!i)return;const c=new FileReader;c.onload=p=>{var h;try{const d=JSON.parse((h=p.target)==null?void 0:h.result),f=d.sheetData||(Array.isArray(d)?d:null);Array.isArray(f)&&f.length>0?(localStorage.setItem(so,JSON.stringify(f)),window.postMessage({type:"SYNC_DATA",payload:f},"*"),oe(`✓ Loaded configuration from "${i.name}"!`)):oe("⚠️ Invalid configuration file: Missing sheetData")}catch(d){oe(`⚠️ Failed to parse config file: ${(d==null?void 0:d.message)||String(d)}`)}setTimeout(()=>oe(null),4e3)},c.readAsText(i),s.target.value=""},El=async()=>{if(window.confirm(`Switch to a blank initialized starter template?

This provides a clean slate without names or chores populated, ready for a new user to set up.

Your current setup is preserved in 'weekly-chores-config.json' and you can restore it anytime.`)){try{const i=await(await fetch("/__load-starter")).json(),c=i.sheetData||(Array.isArray(i)?i:null);Array.isArray(c)&&c.length>0?(localStorage.setItem(so,JSON.stringify(c)),setSheetData(c),window.postMessage({type:"SYNC_DATA",payload:c},"*"),oe("✓ Initialized blank starter template loaded! Ready for a new user to set up.")):oe("⚠️ Starter template file could not be loaded.")}catch(s){oe(`⚠️ Failed to load starter template: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>oe(null),4e3)}},Fs=async()=>{try{const i=await(await fetch("/__load-config")).json(),c=i.sheetData||(Array.isArray(i)?i:null);Array.isArray(c)&&c.length>0?(localStorage.setItem(so,JSON.stringify(c)),setSheetData(c),window.postMessage({type:"SYNC_DATA",payload:c},"*"),oe("✓ Restored saved household configuration from weekly-chores-config.json!")):oe("⚠️ Saved config file could not be loaded.")}catch(s){oe(`⚠️ Failed to load saved config: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>oe(null),4e3)},Na=async()=>{try{const i=await(await fetch("/__load-starter")).json(),c=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),m=URL.createObjectURL(c),p=document.createElement("a");p.href=m,p.download="weekly-chores-starter-template.json",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(m),oe("✓ Downloaded blank starter template (weekly-chores-starter-template.json)!")}catch(s){oe(`⚠️ Export starter failed: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>oe(null),3500)},gr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ir=s=>{const i=String(s||"").trim();if(!i||i==="Mon – Sun"||i==="Mon - Sun"||i.toLowerCase()==="daily")return{selectedDays:[...gr],customEnabled:!1,customText:""};const c=i.split(",").map(h=>h.trim()).filter(Boolean),m=[],p=[];return c.forEach(h=>{const d=gr.find(f=>f.toLowerCase()===h.toLowerCase());d?m.includes(d)||m.push(d):p.push(h)}),{selectedDays:gr.filter(h=>m.includes(h)),customEnabled:p.length>0,customText:p.join(", ")}},Ur=(s,i,c)=>{const m=gr.filter(d=>s.includes(d)),p=m.length===7?"Mon – Sun":m.join(", "),h=String(c||"").trim();return i&&h?p?`${p}, ${h}`:h:p||"Mon – Sun"},Vr=F.useMemo(()=>xe.filter(s=>{if(rt!=="ALL"&&(s.category||"").toLowerCase()!==rt.toLowerCase())return!1;if(Mr!=="ALL"){const i=(s.frequency||"").toLowerCase(),c=Mr.toLowerCase();if(c==="daily"&&!i.includes("daily")||(c==="once a week"||c==="weekly")&&(!i.includes("once")&&!i.includes("weekly")||i.includes("bi"))||c==="bi-weekly"&&!i.includes("bi"))return!1}if(Gr){const i=Gr.toLowerCase();if(!((s.task||"").toLowerCase().includes(i)||(s.category||"").toLowerCase().includes(i)||(s.rotationGroup||"").toLowerCase().includes(i)||(s.notes||"").toLowerCase().includes(i)||(s.targetDay||"").toLowerCase().includes(i)))return!1}return!0}),[xe,rt,Mr,Gr]),[Je,Ml]=F.useState(""),[Sa,In]=F.useState(!1),[Yt,un]=F.useState({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),[Aa,Yr]=F.useState(null),[Fr,ar]=F.useState({name:"",routine:"",care:""}),[Qr,lr]=F.useState(null),[Fn,On]=F.useState("");F.useEffect(()=>{(we!=null&&we.data||He!=null&&He.data)&&(re(s=>s.filter(i=>{var c,m;const p=Ne(i.task),h=(c=He.data)==null?void 0:c.some(f=>f.row&&Ne(f.row[6])===p),d=(m=we.data)==null?void 0:m.some(f=>f.row&&Ne(f.row[0])===p);return!h&&!d})),Te(s=>s.filter(i=>{var c;const m=Ne(i.task);return!((c=we.data)==null?void 0:c.some(h=>h.row&&Ne(h.row[0])===m))})))},[we.data,He.data]);const[ir,Os]=F.useState({}),[Rl,Ho]=F.useState("ALL"),Jr=s=>{var i;const c=(s==null?void 0:s.task)||((i=s==null?void 0:s.row)==null?void 0:i[0])||"";if(ir[c])return ir[c];if(ir[s==null?void 0:s.index_])return ir[s==null?void 0:s.index_];const m=String(c||"").toLowerCase();if(m.includes("recycling")||m.includes("waste"))return{frequency:"biweekly",dayOfWeek:3};if(m.includes("deep clean")||m.includes("feeding station"))return{frequency:"weekly",dayOfWeek:6};const p=ut(c),h=xe.find(d=>p&&ut(d.task)===p||Ne(d.task)===Ne(c)||d.task.toLowerCase()===c.toLowerCase());if(h){const d=String(h.frequency||"").toLowerCase(),f=String(h.targetDay||"").toLowerCase();return d.includes("bi-weekly")||d.includes("biweekly")?{frequency:"biweekly",dayOfWeek:3}:d.includes("weekly")||d.includes("once")?{frequency:"weekly",dayOfWeek:f.includes("sunday")?6:f.includes("thursday")?3:f.includes("friday")?4:5}:{frequency:"daily",dayOfWeek:0}}return Sl(c)},[pt,Ct]=F.useState(()=>{var s,i;const c=((s=w==null?void 0:w.find(m=>{const p=String(m.name||"").toLowerCase();return(p.includes("printable")||p.includes("weekly")&&p.includes("schedule"))&&!p.includes("hub")}))==null?void 0:s.data)||((i=w==null?void 0:w[0])==null?void 0:i.data)||[];return Mu(c,ws().dateKey)}),Ws=()=>{const s=ht||ws().dateKey,i=dp(s,fe);if(Ct(c=>({...c,...i})),je>=0){const c=Mt(s)||{year:2026,month:9,day:12};fe.forEach(m=>{var p,h,d,f,y,C;const D=Ge(m.task,m.index_);if(!D)return;const T=new Array(15).fill(void 0);let b=!1;for(let N=0;N<7;N++){const P=new Date(c.year,c.month,c.day+N),V=Dn(P.getFullYear(),P.getMonth(),P.getDate()),O=((h=(p=i[V])==null?void 0:p[m.index_])==null?void 0:h.who)||((f=(d=i[V])==null?void 0:d[m.task])==null?void 0:f.who)||((C=(y=i[V])==null?void 0:y[ut(m.task)])==null?void 0:C.who);if(O){const I=1+N*2;T[I]=O,b=!0}}b&&_(je,D.index_,T)})}oe(`Distributed & assigned all scheduled chores for week of ${s} across Thom, Meghan, Sydney, Cadence, and Mason (Sunday Supper assigned to parents)!`),setTimeout(()=>oe(null),4500)},Ot=F.useMemo(()=>{const s=Mt(ht)||{year:2026,month:9,day:12};return _s(s.year,s.month,s.day)},[ht]),Xr=F.useMemo(()=>Tu(Ot,Re),[Ot,Re]),Qt=F.useMemo(()=>lp(Ot),[Ot]);F.useMemo(()=>x.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")?s.type==="regular"?!0:s.type==="biweekly"?Qt:!1:!1}).map(s=>s.name),[x,Qt]),F.useMemo(()=>{const s=x.filter(i=>{if(i.active===!1)return!1;const c=String(i.role||"").toLowerCase();return!c.includes("parent")&&!c.includes("overseer")&&!c.includes("overlord")&&i.type==="casual"}).map(i=>i.name);return s.length>0?s:["Koda","Keyanna"]},[x]),F.useEffect(()=>{if(!(we!=null&&we.data)||we.data.length===0)return;const s=Mu(we.data,ht||We||"2026-10-12");Ct(i=>{const c={...i};return Object.keys(s).forEach(m=>{c[m]={...c[m]||{},...s[m]}}),c})},[we,ht,We]);const wr=F.useMemo(()=>{const s=new Date(dt,st+1,0).getDate(),i=new Date(dt,st,1).getDay(),c=i===0?6:i-1,m=new Date(dt,st,0).getDate(),p=[];let h=[];for(let d=c-1;d>=0;d--){const f=m-d,y=st===0?11:st-1,C=st===0?dt-1:dt;h.push({year:C,month:y,day:f,dateKey:Dn(C,y,f),isCurrentMonth:!1,dayOfWeekIndex:h.length})}for(let d=1;d<=s;d++)h.push({year:dt,month:st,day:d,dateKey:Dn(dt,st,d),isCurrentMonth:!0,dayOfWeekIndex:h.length}),h.length===7&&(p.push(h),h=[]);if(h.length>0){let d=1;const f=st===11?0:st+1,y=st===11?dt+1:dt;for(;h.length<7;)h.push({year:y,month:f,day:d,dateKey:Dn(y,f,d),isCurrentMonth:!1,dayOfWeekIndex:h.length}),d++;p.push(h)}return p},[dt,st]),fo=s=>{var i;return((i=s[0])==null?void 0:i.dateKey)===ht},hn=(s,i,c)=>{const m=pt[s];if(!m)return{who:"",done:!1,kidsDone:{}};const p=m[i]||(c?m[c]:null)||(c?m[c.toLowerCase()]:null);return p?{who:p.who!==void 0&&p.who!==null?String(p.who):"",done:!!p.done,kidsDone:p.kidsDone||{}}:{who:"",done:!1,kidsDone:{}}},Ps=s=>{const i=Mt(s);if(!i)return ce;const c=ao(i.year,i.month,i.day),m=c.isFullStay||c.isDepartureDay;return ce.filter(p=>{const h=Ce(p);return h&&h.type==="biweekly"?m:!0})},zo=(s,i,c)=>{const p=hn(s,i).kidsDone||{},h=!p[c],d={...p,[c]:h},f=Ps(s),y=f.length>0&&f.every(C=>d[C]);Or(s,i,{kidsDone:d,done:y,who:y?"All Kids":"Each Child"})},yo=(s,i)=>{const c={};he.forEach(p=>{c[p]=!1});const m=fe.find(p=>{var h;return p.index_===s||i&&String(p.task||((h=p.row)==null?void 0:h[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});return m&&m.row&&((m.row[2]===!0||String(m.row[2]).toLowerCase()==="true")&&(c.Sydney=!0),(m.row[4]===!0||String(m.row[4]).toLowerCase()==="true")&&(c.Cadence=!0),(m.row[6]===!0||String(m.row[6]).toLowerCase()==="true")&&(c.Mason=!0),(m.row[12]===!0||String(m.row[12]).toLowerCase()==="true")&&(c.Koda=!0),(m.row[14]===!0||String(m.row[14]).toLowerCase()==="true")&&(c.Keyanna=!0)),Ot.forEach(p=>{const h=hn(p.dateKey,s,i);if(h.kidsDone&&Object.keys(h.kidsDone).forEach(d=>{h.kidsDone[d]&&(c[d]=!0)}),h.who==="All Kids"&&h.done)he.forEach(d=>{var f;((f=h.kidsDone)==null?void 0:f[d])!==!1&&(c[d]=!0)});else if(h.who&&h.done){const d=h.who.split(/[,&]+/).map(f=>f.trim().toLowerCase());he.forEach(f=>{d.includes(f.toLowerCase())&&(c[f]=!0)})}}),c},Ks=(s,i,c)=>{const m=yo(s,c),p=!m[i],h={...m,[i]:p},d=he.filter(T=>h[T]).length,f=d===he.length&&he.length>0,y=d>0;let C="Each Child";if(f)C="All Kids";else if(y){const T=he.filter(b=>h[b]);C=T.length<=2?T.join(" & "):`${T.length} Kids`}Ct(T=>{const b={...T};return Ot.forEach(N=>{const P=b[N.dateKey]||{},V=P[s]||{who:"",done:!1,kidsDone:{}};b[N.dateKey]={...P,[s]:{...V,who:C,done:y,kidsDone:h}},c&&(b[N.dateKey][c]=b[N.dateKey][s],b[N.dateKey][c.toLowerCase()]=b[N.dateKey][s])}),b});const D=Be(c,s);if(je>=0&&D!==void 0&&D!==null){const T=new Array(15).fill(void 0),b=i.toLowerCase();b==="sydney"?T[2]=p:b==="koda"?T[12]=p:b==="keyanna"?T[14]=p:b==="cadence"?T[4]=p:b==="mason"&&(T[6]=p),_(je,D,T)}},go=(s,i)=>{let c="",m=!1;const p=fe.find(h=>{var d;return h.index_===s||i&&String(h.task||((d=h.row)==null?void 0:d[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});if(p&&p.row){const h=f=>{if(!f)return!1;const y=String(f).trim();return!(!y||y.startsWith("-")||y.startsWith("(")||y.startsWith("SG:")||y.startsWith("Done:")||y.startsWith("Parent Initials")||y.startsWith("___")||/^Who:\s*_+$/i.test(y))},d=String(i||p.task||"").toLowerCase();if(d.includes("basement")||d.includes("feeding station")||d.includes("deep clean")||d.includes("sign-off")||d.includes("curbside")||d.includes("recycling")||d.includes("waste")){(p.row[14]===!0||String(p.row[14]).toLowerCase()==="true")&&(m=!0);const f=String(p.row[9]||"").replace(/^Who:\s*/i,"").trim(),y=String(p.row[1]||"").trim(),C=h(f)?f:h(y)?y:"";if(C){const D=x.find(T=>C.toLowerCase().includes(T.name.toLowerCase()));D?c=D.name:C.toLowerCase().includes("parents")?c="Parents":c=C}}for(let f=6;f>=0;f--){const y=p.row[1+f*2],C=p.row[2+f*2];h(y)&&!c&&(c=String(y).replace(/^Who:\s*/i,"").trim()),(C===!0||String(C).toLowerCase()==="true")&&!m&&(m=!0)}}if(Ot&&Ot.length>0)for(let h=Ot.length-1;h>=0;h--){const d=Ot[h],f=hn(d.dateKey,s,i);f.who&&!c&&(c=f.who),f.done&&(m=!0)}return!Qt&&(c==="Cadence"||c==="Mason")&&(c=""),{who:c,done:m}},br=(s,i,c)=>{const m=go(s,i),p="who"in c?c.who:m.who,h="done"in c?c.done:m.done,d=String(i||"").toLowerCase(),f=ut(i),y=d.includes("recycling")||d.includes("waste")||d.includes("curbside")?3:d.includes("basement")||d.includes("saturday")?5:6;Ct(T=>{const b={...T};return Ot.forEach(N=>{const P=b[N.dateKey]||{},O={...P[s]||{who:"",done:!1,kidsDone:{}},who:p,done:h};b[N.dateKey]={...P,[s]:O},i&&(b[N.dateKey][i]=O,b[N.dateKey][i.toLowerCase().trim()]=O),f&&(b[N.dateKey][f]=O)}),b}),te(T=>{const b=T[s]||{},N=fe.find(ne=>ne.index_===s),P=[...b.row||(N==null?void 0:N.row)||new Array(15).fill("")],V=1+y*2,O=2+y*2;"who"in c&&(P[V]=p),"done"in c&&(P[O]=h);const I=String(i||(N==null?void 0:N.task)||"").toLowerCase().trim(),Z={...b,row:P,rotationGroup:p,who:p};return{...T,[s]:Z,...I?{[I]:Z}:{},...f?{[f]:Z}:{}}});const C=Ge(i);if(je>=0&&C){const T=C.index_,b=new Array(15).fill(void 0);if(f==="clean_basement"||f==="feeding_station_deep_clean"||f==="curbside_recycling"||f==="curbside_waste")"who"in c&&(b[9]=p?`Who: ${p}`:"Who: _____________________"),"done"in c&&(b[14]=h);else if(f==="weekly_sign_off")"who"in c&&(b[9]=p),"done"in c&&(b[14]=h);else{const N=1+y*2,P=2+y*2;"who"in c&&(b[N]=p),"done"in c&&(b[P]=h)}_(je,T,b)}const D=E(i,s);if(ge>=0&&"who"in c&&D!==void 0&&D!==null){const T=new Array(12).fill(void 0);T[7]=p,_(ge,D,T)}oe(`Updated "${i||"Chore"}": Assigned to ${p||"unassigned"}`),setTimeout(()=>oe(null),3e3)},Jt=F.useMemo(()=>fe.find(s=>{var i;return no(s.task||((i=s.row)==null?void 0:i[0]))})||{index_:12,task:"Weekly Sign-Off & Inspection",rotationGroup:"Parents",category:"Administration"},[fe]),wo=F.useMemo(()=>go(Jt==null?void 0:Jt.index_,Jt==null?void 0:Jt.task),[Jt,pt,Ot]),Da=()=>{if(!Jt)return;const s=go(Jt.index_,Jt.task),i=!s.done,c=s.who||"Parents";br(Jt.index_,Jt.task,{done:i,who:c}),oe(i?"Weekly Sign-Off & Inspection completed and verified for the week!":"Weekly Sign-Off reset to pending."),setTimeout(()=>oe(null),3500)},Or=(s,i,c)=>{var m;const p=fe.find(y=>y.index_===i),h=(p==null?void 0:p.task)||"",d=Ne(h);Ct(y=>{const C=y[s]||{},T={...C[i]||(d?C[d]:null)||{who:"",done:!1},...c},b={...C,[i]:T};return h&&(b[h]=T),d&&(b[d]=T),{...y,[s]:b}});const f=Ge(h,i);if(je>=0&&f){const y=Mt(ht),C=Mt(s);if(y&&C){const D=new Date(y.year,y.month,y.day),b=new Date(C.year,C.month,C.day).getTime()-D.getTime(),N=Math.round(b/(1e3*3600*24));if(N>=0&&N<7){const P=1+N*2,V=2+N*2,O=new Array(15).fill(void 0);O[0]=h||((m=f.row)==null?void 0:m[0]),"who"in c&&(O[P]=c.who),"done"in c&&(O[V]=c.done),_(je,f.index_,O)}}}},bo=(s,i,c,m,p)=>{var h,d,f;const y=c==="who"?1+i*2:2+i*2,C=Mt(ht)||{year:2026,month:9,day:12},D=new Date(C.year,C.month,C.day+i,12,0,0),T=Dn(D.getFullYear(),D.getMonth(),D.getDate()),b=p||((h=fe.find(O=>O.index_===s))==null?void 0:h.task)||"",N=ut(b);Ct(O=>{const I=O[T]||{},ne={...I[s]||(b?I[b]:null)||(N?I[N]:null)||{who:"",done:!1,kidsDone:{}},[c]:m},Ee={...I,[s]:ne};return b&&(Ee[b]=ne,Ee[b.toLowerCase().trim()]=ne),N&&(Ee[N]=ne),{...O,[T]:Ee}}),te(O=>{const I=O[s]||(b?O[b.toLowerCase().trim()]:null)||(N?O[N]:null)||{},Z=fe.find(at=>{var bt;return at.index_===s||b&&String(at.task||((bt=at.row)==null?void 0:bt[0])||"").toLowerCase().trim()===b.toLowerCase().trim()}),ne=[...I.row||(Z==null?void 0:Z.row)||new Array(15).fill("")];ne[y]=m;const Ee={...I,row:ne,...c==="who"?{who:m}:{done:m}},Ke={...O,[s]:Ee};return b&&(Ke[b.toLowerCase().trim()]=Ee),N&&(Ke[N]=Ee),Ke});const P=Ge(b,s);if(je>=0&&P){const O=new Array(15).fill(void 0);O[y]=m,_(je,P.index_,O)}const V=$e(b,s);if(ge>=0&&c==="who"&&V){const O=new Array(12).fill(void 0);O[7]=m,_(ge,V.index_,O)}oe(c==="who"?`Assigned "${b||"Chore"}" (${(d=Ut[i])==null?void 0:d.name}) to ${m||"unassigned"}`:`Marked "${b||"Chore"}" (${(f=Ut[i])==null?void 0:f.name}) as ${m?"completed ✓":"pending"}`),setTimeout(()=>oe(null),3e3)},Bs=s=>{var i;if(!s||s.length===0)return;const c=s[0];if(!c)return;const m=c.dateKey;an(m),jn(c.year),qr(c.month);const p=s.length===7?s:_s(c.year,c.month,c.day);if(Ct(h=>{const d={...h};for(let f=0;f<7;f++){const y=p[f];y&&(d[y.dateKey]||(d[y.dateKey]={}),fe.forEach(C=>{var D,T,b;if(!d[y.dateKey][C.index_]){const N=1+f*2,P=2+f*2,V=(D=C.row)==null?void 0:D[N],O=V!=null?String(V):"",I=((T=C.row)==null?void 0:T[P])===!0||String((b=C.row)==null?void 0:b[P]).toLowerCase()==="true";d[y.dateKey][C.index_]={who:O,done:I,kidsDone:{}}}}))}return d}),je>=0&&fe.forEach(h=>{var d;const f=new Array(15).fill(void 0);let y=!1;for(let C=0;C<7;C++){const D=p[C];if(D&&((d=pt[D.dateKey])!=null&&d[h.index_])){const T=pt[D.dateKey][h.index_];f[1+C*2]=T.who||"",f[2+C*2]=!!T.done,y=!0}}y&&_(je,h.index_,f)}),ge>=0){const h=(i=He==null?void 0:He.data)==null?void 0:i.find(d=>d.row&&String(d.row[6]||"").toLowerCase().includes("active week"));if(h){const d=new Array(9).fill(void 0);d[7]=m,_(ge,h.index_,d)}}oe(`Synced active week to ${m} (${p[0].dateKey} – ${p[6].dateKey})`),setTimeout(()=>oe(null),3500)},jt=s=>{var i,c,m,p,h;const{task:d,category:f="Household",frequency:y="Daily",targetDay:C="Mon – Sun",rotationGroup:D="All Non-Casual",notes:T=""}=s;if(!d||!d.trim())return;const b=d.trim(),N=Ne(b),P=y.toLowerCase().includes("daily"),V=Ge(b);if(V&&je>=0){const ye=new Array(15).fill(void 0);ye[0]=b,D&&(ye[1]=D==="Each Child"?"Each Child":D),_(je,V.index_,ye)}else if(je>=0){const ye=[b,D==="Each Child"?"Each Child":D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];let ke;if(P){const Fe=(i=we.data)==null?void 0:i.find(Xe=>Xe.index_>=4&&Xe.row&&(Ne(Xe.row[0]).includes("clean basement")||Ne(Xe.row[0]).includes("once a week")));ke=Fe?Fe.index_:void 0}else{const Fe=(c=we.data)==null?void 0:c.find(Xe=>Xe.index_>=8&&Xe.row&&(String(Xe.row[0]||"").toLowerCase().includes("pet care")||String(Xe.row[0]||"").startsWith("•")));ke=Fe?Fe.index_:void 0}Y(je,ke,ye)}const O=$e(b),I=new Array(12).fill(void 0);if(I[6]=b,I[7]=D||"All Non-Casual",I[8]=y,I[9]=C,I[10]=T,I[11]=f,O&&ge>=0)_(ge,O.index_,I),(m=He.data)==null||m.forEach(ye=>{if(ye.index_!==O.index_&&ye.row&&Ne(ye.row[6])===N)if(ye.row[0]){const ke=new Array(12).fill(void 0);ke[6]="",ke[7]="",ke[8]="",ke[9]="",ke[10]="",ke[11]="",_(ge,ye.index_,ke)}else v(ge,ye.index_)});else if(ge>=0){const ye=(p=He.data)==null?void 0:p.find(ke=>ke.index_>=5&&ke.index_<17&&(!ke.row||!ke.row[6]||String(ke.row[6]).trim()===""));if(ye)_(ge,ye.index_,I);else{const ke=(h=He.data)==null?void 0:h.find(Xe=>Xe.row&&String(Xe.row[6]||"").toLowerCase().includes("schedule configuration")),Fe=ke?ke.index_:void 0;Y(ge,Fe,I)}}const Z=y.toLowerCase(),ne=C.toLowerCase(),Ee=Z.includes("bi-weekly")||Z.includes("biweekly")?"biweekly":Z.includes("weekly")||Z.includes("once")?"weekly":"daily",Ke=ne.includes("sunday")?6:ne.includes("thursday")?3:5,bt={index_:V?V.index_:O?O.index_:2e3+Date.now()%1e5,task:b,category:f,frequency:y,targetDay:C,rotationGroup:D||"All Non-Casual",notes:T,source:"user_added",row:[b,D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1]};!O&&!V&&(re(ye=>[...ye,bt]),Te(ye=>[...ye,bt])),B(ye=>{const ke=new Set(ye);return ke.delete(N),ke.delete(b.toLowerCase().trim()),ke}),Se(ye=>ye?[...ye,Ne(b)]:null),Os(ye=>({...ye,[b]:{frequency:Ee,dayOfWeek:Ke}})),mo(!1),Tn(!1),Hr(!1),qt({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",rotationGroup:"All Non-Casual",notes:""}),oe(`Added "${b}" to schedule and master registry!`),setTimeout(()=>oe(null),3500)},pn=(s,i={})=>{var c;if(!s||!s.trim())return;const m=s.trim(),p=i.defaultWho||"All Non-Casual",h=i.frequency||"daily",d=i.dayOfWeek!==void 0?i.dayOfWeek:5,f=h==="weekly"?"Once a Week":h==="biweekly"?"Bi-Weekly":"Daily",y=h==="weekly"?(c=Ut[d])==null?void 0:c.name:h==="biweekly"?"Thursday Evening":"Mon – Sun",C=i.category||"Household";jt({task:m,category:C,frequency:f,targetDay:y,rotationGroup:p,notes:i.notes||""})},$s=(s,i)=>{var c,m;const p=(c=Pe.data)==null?void 0:c.find(y=>y.index_===s),h=i.oldTask||((m=p==null?void 0:p.row)==null?void 0:m[6])||i.task,d=E(h,s);if(ge>=0&&d!==void 0&&d!==null){const y=new Array(12).fill(void 0);y[6]=i.task||h||"","rotationGroup"in i&&(y[7]=i.rotationGroup),"frequency"in i&&(y[8]=i.frequency),"targetDay"in i&&(y[9]=i.targetDay),"notes"in i&&(y[10]=i.notes),"category"in i&&(y[11]=i.category),_(ge,d,y)}if(re(y=>y.map(C=>C.index_===s||Ne(C.task)===Ne(h)?{...C,...i,task:i.task||C.task}:C)),i.task&&h&&Ne(i.task)!==Ne(h)){const y=Ne(h),C=Ne(i.task);Se(D=>D?D.map(T=>T===y?C:T):null)}const f=Be(h);if(je>=0&&"task"in i&&f!==void 0&&f!==null){const y=new Array(15).fill(void 0);y[0]=i.task,_(je,f,y)}if(i.frequency||i.targetDay){const y=i.task||h||"";if(y){const C=String(i.frequency||"").toLowerCase(),D=String(i.targetDay||"").toLowerCase(),T=C.includes("bi-weekly")||C.includes("biweekly")?"biweekly":C.includes("weekly")||C.includes("once")?"weekly":"daily",b=D.includes("sunday")?6:D.includes("thursday")?3:D.includes("friday")?4:5;Os(N=>({...N,[y]:{frequency:T,dayOfWeek:b}}))}}Rr(null),It(null),oe(`Updated "${i.task||h||"chore"}" in schedule and master registry!`),setTimeout(()=>oe(null),3e3)},_o=(s,i)=>{var c;const m=Ne(i);ge>=0&&((c=He.data)==null||c.forEach(d=>{if(!(d.index_<5||!d.row||!d.row[6])&&(Ne(d.row[6])===m||d.index_===s))if(d.row[0]){const f=new Array(12).fill(void 0);f[6]="",f[7]="",f[8]="",f[9]="",f[10]="",f[11]="",_(ge,d.index_,f)}else v(ge,d.index_)}));const p=Ge(i);je>=0&&p&&v(je,p.index_);const h=String(i||"").toLowerCase().trim();re(d=>d.filter(f=>f.index_!==s&&(!h||f.task.toLowerCase().trim()!==h))),B(d=>{const f=new Set(d);return s!=null&&f.add(String(s)),h&&f.add(h),f}),Ct(d=>{const f={...d};return Object.keys(f).forEach(y=>{if(f[y]&&f[y][s]){const C={...f[y]};delete C[s],f[y]=C}}),f}),Is===s&&(Rr(null),It(null)),oe(`Removed "${i||"chore"}" from Household Hub Master Chore Registry`),setTimeout(()=>oe(null),3e3)},ja=(s,i)=>{var c,m;const p=(i.task||"").trim();if(!p)return;const h=i.oldTask||p;te(D=>{const T={...D};return T[s]={...i,task:p},h&&(T[String(h).toLowerCase().trim()]={...i,task:p}),T[p.toLowerCase().trim()]={...i,task:p},T});const d=i.frequency==="Once a Week"?"weekly":i.frequency==="Bi-Weekly"?"biweekly":"daily",f=i.dayOfWeek!==void 0?i.dayOfWeek:(c=i.targetDay)!=null&&c.toLowerCase().includes("sunday")?6:(m=i.targetDay)!=null&&m.toLowerCase().includes("thursday")?3:5;if(Os(D=>({...D,[p]:{frequency:d,dayOfWeek:f},[s]:{frequency:d,dayOfWeek:f}})),i.task&&h&&Ne(i.task)!==Ne(h)){const D=Ne(h),T=Ne(i.task);Se(b=>b?b.map(N=>N===D?T:N):null)}const y=Be(h);if(je>=0&&y!==void 0&&y!==null){const D=new Array(15).fill(void 0);D[0]=p,_(je,y,D)}const C=E(h,s);if(ge>=0&&C!==void 0&&C!==null){const D=new Array(12).fill(void 0);D[6]=p,i.rotationGroup&&(D[7]=i.rotationGroup),i.frequency&&(D[8]=i.frequency),i.targetDay&&(D[9]=i.targetDay),i.notes!==void 0&&(D[10]=i.notes),i.category&&(D[11]=i.category),_(ge,C,D)}h&&h!==p&&Ct(D=>{const T={...D};return Object.keys(T).forEach(b=>{if(T[b]&&T[b][h]){const N={...T[b]};N[p]=N[h],N[p.toLowerCase()]=N[h],T[b]=N}}),T}),De(null),oe(`Updated chore: "${p}"`),setTimeout(()=>oe(null),3e3)},Wn=(s,i)=>{var c,m;const p=i||"";B(f=>{const y=new Set(f);return s!=null&&y.add(String(s)),p&&y.add(p.toLowerCase().trim()),y});const h=Be(p,s);je>=0&&h!==void 0&&h!==null&&v(je,h);const d=E(p,s);if(ge>=0&&d!==void 0&&d!==null){const f=(c=He.data)==null?void 0:c.find(y=>y.index_===d);if((m=f==null?void 0:f.row)!=null&&m[0]){const y=new Array(12).fill(void 0);y[6]="",y[7]="",y[8]="",y[9]="",y[10]="",y[11]="",_(ge,d,y)}else v(ge,d)}Ct(f=>{const y={...f};return Object.keys(y).forEach(C=>{if(y[C]){const D={...y[C]};s!==void 0&&delete D[s],p&&(delete D[p],delete D[p.toLowerCase().trim()]),y[C]=D}}),y}),ot(null),X&&X.index_===s&&De(null),oe(`Removed chore: "${p||"Chore"}" from schedule`),setTimeout(()=>oe(null),3e3)},Go=(s,i)=>{Wn(s,i)},Pn=()=>{if(sr.length===0)return;const s=sr.length;sr.forEach(i=>{var c;const m=fe.find(p=>p.index_===i);Wn(i,(m==null?void 0:m.task)||((c=m==null?void 0:m.row)==null?void 0:c[0])||"")}),dn([]),Hr(!1),oe(`Successfully removed ${s} chore(s) from master list`),setTimeout(()=>oe(null),3500)},Uo=s=>{var i,c;const m=s.task||((i=s.row)==null?void 0:i[0])||"",p=Jr(s);Tr(s.index_),Oo(m),cn(p.frequency||"daily"),Ss(p.dayOfWeek!==void 0?p.dayOfWeek:5),Ko(s.rotationGroup||"All Non-Casual"),De({...s,originalTask:m,task:m,category:s.category||"Household",frequency:p.frequency==="weekly"?"Once a Week":p.frequency==="biweekly"?"Bi-Weekly":"Daily",targetDay:s.targetDay||(p.frequency==="weekly"?(c=Ut[p.dayOfWeek!==void 0?p.dayOfWeek:5])==null?void 0:c.name:"Mon – Sun"),rotationGroup:s.rotationGroup||"All Non-Casual",notes:s.notes||"",dayOfWeek:p.dayOfWeek!==void 0?p.dayOfWeek:5})},Ta=()=>{var s;if(xr===null)return;const i=co.trim();i&&ja(xr,{task:i,frequency:fr==="weekly"?"Once a Week":fr==="biweekly"?"Bi-Weekly":"Daily",targetDay:((s=Ut[Wo])==null?void 0:s.name)||"Mon – Sun",rotationGroup:Po,dayOfWeek:Wo}),Tr(null)},Vo=(s,i)=>{const c=(N,P)=>typeof P=="object"&&P!==null?N===P||Ne(N.task)===Ne(P.task):N.index_===P||String(N.index_)===String(P)||Ne(N.task)===Ne(String(P)),m=typeof s=="object"&&s!==null&&Vr.length>0?Vr:xe,p=m.findIndex(N=>c(N,s));if(p===-1)return;const h=i==="up"?p-1:p+1;if(h<0||h>=m.length)return;const d=m[p],f=m[h],y=[...xe],C=y.findIndex(N=>c(N,d)),D=y.findIndex(N=>c(N,f));if(C===-1||D===-1)return;const T=d.task||"Chore";y[C]=f,y[D]=d;const b=y.map(N=>Ne(N.task));if(Se(b),je>=0){const N=Ge(d.task),P=Ge(f.task),V=(we==null?void 0:we.data)==null?void 0:we.data.find(Z=>Z.row&&String(Z.row[0]||"").toLowerCase().trim()==="weekly tasks"),O=V?V.index_:10,I=N&&P&&(N.index_<O&&P.index_<O||N.index_>O&&P.index_>O);if(N&&P&&N.index_!==P.index_&&I){const Z=[...N.row||[]],ne=[...P.row||[]];_(je,N.index_,ne),_(je,P.index_,Z)}}if(ge>=0){const N=$e(d.task),P=$e(f.task);if(N&&P&&N.index_!==P.index_){const V=N.row||[],O=P.row||[],I=new Array(12).fill(void 0),Z=new Array(12).fill(void 0);for(let ne=6;ne<=11;ne++)I[ne]=O[ne]!==void 0?O[ne]:"",Z[ne]=V[ne]!==void 0?V[ne]:"";_(ge,N.index_,I),_(ge,P.index_,Z)}}oe(`Reordered: Moved "${T}" ${i}! Synchronized with Printable Weekly Schedule and Household Hub.`),setTimeout(()=>oe(null),3e3)},Ll=(s,i,c)=>{var m,p,h,d,f,y;const C=fe.find(b=>b.index_===s),D=fe.find(b=>b.index_===i);if(!C||!D||s===i)return;const T=(c==null?void 0:c.trim())||`${C.row[1]} & ${D.row[1]}`;if(ze>=0){const b=new Array(16).fill(void 0);b[1]=T;for(let N=0;N<7;N++){const P=2+N*2,V=3+N*2,O=((m=C.row)==null?void 0:m[P])||"",I=((p=D.row)==null?void 0:p[P])||"",Z=((h=C.row)==null?void 0:h[V])===!0||String((d=C.row)==null?void 0:d[V]).toLowerCase()==="true",ne=((f=D.row)==null?void 0:f[V])===!0||String((y=D.row)==null?void 0:y[V]).toLowerCase()==="true";b[P]=O||I||"",b[V]=Z||ne}_(ze,C.index_,b),v(ze,D.index_)}Ct(b=>{const N={...b};return Object.keys(N).forEach(P=>{const V={...N[P]},O=V[C.index_]||{who:"",done:!1},I=V[D.index_]||{who:"",done:!1};V[C.index_]={who:O.who||I.who||"",done:O.done||I.done},delete V[D.index_],N[P]=V}),N}),uo(!1),oe(`Combined into: "${T}"`),setTimeout(()=>oe(null),4e3)},Il=(s,i)=>{const c=s||[],m=i||[];if(c.length===0&&m.length===0)return;const p={...pt};let h=0;wr.forEach(d=>{d.forEach(f=>{if(!f.isCurrentMonth)return;const y=f.dateKey;p[y]||(p[y]={});const C=ao(f.year,f.month,f.day),D=C.isFullStay||C.isDepartureDay,T=[...c];if(D&&T.push(...m),T.length===0)return;const b=fe.filter(I=>{var Z;const ne=I.task||((Z=I.row)==null?void 0:Z[0])||"",Ee=ne.toLowerCase(),Ke=Jr(I);return Ee.includes("deep clean")||Ee.includes("feeding station")?f.dayOfWeekIndex===6:Ee.includes("recycling")?f.dayOfWeekIndex===3&&Rt("recycling",f.year,f.month,f.day):Ee.includes("waste")?f.dayOfWeekIndex===3&&Rt("waste",f.year,f.month,f.day):Ke.frequency==="biweekly"?f.dayOfWeekIndex===Ke.dayOfWeek&&Rt(ne,f.year,f.month,f.day):Ke.frequency==="weekly"?f.dayOfWeekIndex===Ke.dayOfWeek:!0}),N=T.filter(I=>{const Z=Ce(I);return Z&&Z.type!=="casual"}),P=N.length>0?N:T,V=P.filter(I=>{const Z=Ce(I),ne=String((Z==null?void 0:Z.role)||"").toLowerCase();return!ne.includes("parent")&&!ne.includes("overseer")});let O=0;b.forEach(I=>{var Z;const ne=p[y][I.index_]||{done:!1,kidsDone:{}},Ee=I.task||((Z=I.row)==null?void 0:Z[0])||"",Ke=String(I.rotationGroup||"").toLowerCase(),at=Ee.toLowerCase();if(sn(Ee)){p[y][I.index_]={who:D?"Each Child":"Sydney",done:ne.done,kidsDone:ne.kidsDone||{}};return}if(f.dayOfWeekIndex===6&&at.includes("supper")){const ye=x.filter(Xe=>Xe.role==="Overseer Supreme"||String(Xe.role||"").toLowerCase().includes("parent")).map(Xe=>Xe.name),ke=ye.length>0?ye:["Thom","Meghan"],Fe=Ku(f.year,f.month,f.day,ke);p[y][I.index_]={who:Fe,done:ne.done,kidsDone:ne.kidsDone||{}};return}if(Ke==="parents"||Ke.includes("parent")&&!Ke.includes("kid")&&!Ke.includes("non-casual")&&!Ke.includes("all")){const ye=x.filter(Fe=>Fe.role==="Overseer Supreme"||String(Fe.role||"").toLowerCase().includes("parent")).map(Fe=>Fe.name),ke=ye.length>0?ye[(h+O)%ye.length]:"Thom";O++,p[y][I.index_]={who:ke,done:ne.done,kidsDone:ne.kidsDone||{}};return}if(Ke==="kids"&&V.length>0){const ye=V[(h+O)%V.length];O++,p[y][I.index_]={who:ye,done:ne.done,kidsDone:ne.kidsDone||{}};return}const bt=P[(h+O)%P.length];O++,p[y][I.index_]={who:bt,done:ne.done,kidsDone:ne.kidsDone||{}}}),h=(h+1)%T.length})}),Ct(p),je>=0&&wr.forEach(d=>{fo(d)&&fe.forEach(f=>{var y;const C=new Array(15).fill(void 0);let D=!1;for(let T=0;T<7;T++){const b=d[T];if(b&&((y=p[b.dateKey])!=null&&y[f.index_])){const N=1+T*2;C[N]=p[b.dateKey][f.index_].who||"",D=!0}}D&&_(je,f.index_,C)})}),io(!1),oe(`Auto-assigned & populated Printable Weekly Schedule for ${xn[st]} ${dt}!`),setTimeout(()=>oe(null),4500)},mn=(s,i)=>{var c,m;const p=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,h=(c=Pe.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"role"in i&&(d[1]=i.role),"residency"in i&&(d[2]=i.residency),"specialGroups"in i?d[3]=i.specialGroups:"schedule"in i&&(d[3]=i.schedule),"active"in i&&(d[4]=i.active),_(p,s,d),oe(`Updated "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"member"}" in Household Hub!`),setTimeout(()=>oe(null),3e3)},Fl=(s,i,c,m,p=!0)=>{var h;if(!s||!s.trim())return;const d=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,f=s.trim(),y=i?i.trim():"Minion",C=c||"Full-Time",T=m?m.trim():C==="Casual"?"All":y==="Supreme Overlord"?"Parents, Non-Casual, All":"Kids, Non-Casual, All",b=(h=Pe.data)==null?void 0:h.find(N=>N.index_<5||N.index_>12?!1:!N.row||!N.row[0]||!String(N.row[0]).trim());if(b){const N=new Array(12).fill(void 0);N[0]=f,N[1]=y,N[2]=C,N[3]=T,N[4]=p,N[5]="MEMBER_ROW",_(d,b.index_,N)}else Y(d,void 0,[f,y,C,T,p,"MEMBER_ROW",null,null,null,null,null,null]);zr(!1),oe(`Added "${f}" to Household Hub!`),setTimeout(()=>oe(null),3e3)},Ol=(s,i)=>{var c,m;const p=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,h=(c=Pe.data)==null?void 0:c.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);oe(`Removed "${i}" from Household Hub`),setTimeout(()=>oe(null),3e3)},qs=(s,i)=>{var c,m;const p=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,h=(c=Pe.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"type"in i&&(d[1]=i.type),"routine"in i&&(d[2]=i.routine),"care"in i&&(d[3]=i.care),"active"in i&&(d[4]=i.active),_(p,s,d),oe(`Updated pet "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"profile"}" in Household Hub!`),setTimeout(()=>oe(null),3e3)},Wl=(s,i,c,m,p=!0)=>{if(!s||!s.trim())return;const h=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,d=s.trim(),f=i||"Dog";Y(h,void 0,[d,f,c||"Morning & Evening",m||(f==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water"),p,"PET_ROW",void 0,void 0,void 0,void 0,void 0,void 0]),In(!1),un({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),oe(`Added pet "${d}" to Household Hub!`),setTimeout(()=>oe(null),3e3)},Pl=(s,i)=>{var c,m;const p=ge>=0?ge:(w==null?void 0:w.length)>1?1:0,h=(c=Pe.data)==null?void 0:c.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);oe(`Removed pet "${i}" from Household Hub`),setTimeout(()=>oe(null),3e3)},_r=F.useMemo(()=>{let s=0,i=0;const c={};x.forEach(p=>{c[p.name]={total:0,done:0}}),wr.forEach(p=>{p.forEach(h=>{h.isCurrentMonth&&fe.forEach(d=>{var f,y;const C=d.task||((f=d.row)==null?void 0:f[0])||"",D=C.toLowerCase(),T=Jr(d);let b=!1;D.includes("deep clean")||D.includes("feeding station")?b=h.dayOfWeekIndex===6:D.includes("recycling")?b=h.dayOfWeekIndex===3&&Rt("recycling",h.year,h.month,h.day):D.includes("waste")?b=h.dayOfWeekIndex===3&&Rt("waste",h.year,h.month,h.day):T.frequency==="daily"?b=!0:T.frequency==="weekly"?b=h.dayOfWeekIndex===T.dayOfWeek:T.frequency==="biweekly"&&(b=h.dayOfWeekIndex===T.dayOfWeek&&Rt(C,h.year,h.month,h.day));const N=hn(h.dateKey,d.index_,d.task||((y=d.row)==null?void 0:y[0])),P=(N==null?void 0:N.done)||(N==null?void 0:N.who);if(!b&&!P)return;s++;const V=N==null?void 0:N.done,O=N==null?void 0:N.who;if(V&&i++,O){const I=Ce(O);I&&c[I.name]&&(c[I.name].total++,V&&c[I.name].done++)}})})});const m=s>0?Math.round(i/s*100):0;return{totalScheduled:s,totalCompleted:i,completionRate:m,assigneeCounts:c}},[wr,fe,pt,x,Ce]),Kn=F.useMemo(()=>[...x].map(s=>{const i=_r.assigneeCounts[s.name]||{total:0,done:0},c=i.total>0?Math.round(i.done/i.total*100):0;return{...s,done:i.done,total:i.total,pct:c}}).sort((s,i)=>i.done!==s.done?i.done-s.done:i.pct-s.pct),[x,_r]),Zr=F.useMemo(()=>Kn.length===0||Kn[0].done===0?null:Kn[0],[Kn]),Kl=()=>{st===0?(qr(11),jn(s=>s-1)):qr(s=>s-1)},Bl=()=>{st===11?(qr(0),jn(s=>s+1)):qr(s=>s+1)},Hs=()=>{const s=ws();jn(s.todayYear),qr(s.todayMonth),an(s.dateKey)};F.useEffect(()=>{if(yt==="month"){const s=ws();jn(s.todayYear),qr(s.todayMonth),an(s.dateKey),setTimeout(()=>{const i=document.getElementById("active-calendar-week");i&&i.scrollIntoView({behavior:"smooth",block:"center"})},50)}},[yt]);const xn=["January","February","March","April","May","June","July","August","September","October","November","December"];return r.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans","data-source-loc":"weekly_chores_household_hub.tsx:4594:5","data-source-comp":"App",children:[Ts&&r.jsxs("div",{className:"no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all","data-source-loc":"weekly_chores_household_hub.tsx:4596:9","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4597:11","data-source-comp":"App",children:[r.jsx(Du,{className:"w-4 h-4 text-emerald-200"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4599:13","data-source-comp":"App",children:Ts})]}),r.jsx("button",{onClick:()=>oe(null),className:"text-emerald-100 hover:text-white","data-source-loc":"weekly_chores_household_hub.tsx:4601:11","data-source-comp":"App",children:r.jsx(Gt,{className:"w-4 h-4"})})]}),r.jsxs("header",{className:"no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30","data-source-loc":"weekly_chores_household_hub.tsx:4606:7","data-source-comp":"App",children:[r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4607:9","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4608:11","data-source-comp":"App",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:4609:13","data-source-comp":"App",children:r.jsx(Su,{className:"w-5 h-5"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4612:13","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4613:15","data-source-comp":"App",children:[r.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4614:17","data-source-comp":"App",children:"Chore Schedule"}),r.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4615:17","data-source-comp":"App",children:"Monthly Template & Sync"})]}),r.jsxs("p",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4619:15","data-source-comp":"App",children:["Interactive Chore Calendar w/ Printable Sheet • Week of ",ht]})]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:4625:11","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4626:13","data-source-comp":"App",children:[r.jsx("button",{onClick:Kl,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Previous Month","data-source-loc":"weekly_chores_household_hub.tsx:4627:15","data-source-comp":"App",children:r.jsx(Au,{className:"w-4 h-4"})}),r.jsxs("div",{className:"px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none","data-source-loc":"weekly_chores_household_hub.tsx:4634:15","data-source-comp":"App",children:[xn[st]," ",dt]}),r.jsx("button",{onClick:Bl,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Next Month","data-source-loc":"weekly_chores_household_hub.tsx:4637:15","data-source-comp":"App",children:r.jsx(Xh,{className:"w-4 h-4"})}),r.jsx("button",{onClick:Hs,className:"ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:4644:15","data-source-comp":"App",children:"Today"})]}),r.jsxs("button",{onClick:()=>io(!0),className:"flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:4651:13","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-3.5 h-3.5 text-amber-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4656:15","data-source-comp":"App",children:"Auto-Assign"})]})]})]}),r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm","data-source-loc":"weekly_chores_household_hub.tsx:4660:9","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4661:11","data-source-comp":"App",children:[r.jsxs("button",{onClick:()=>pr("month"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${yt==="month"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4662:13","data-source-comp":"App",children:[r.jsx(Jh,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4668:15","data-source-comp":"App",children:"Monthly Calendar"})]}),r.jsxs("button",{onClick:()=>pr("matrix"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${yt==="matrix"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4670:13","data-source-comp":"App",children:[r.jsx(tp,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4676:15","data-source-comp":"App",children:"Weekly Schedule"})]}),r.jsxs("button",{onClick:()=>pr("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${yt==="stats"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4678:13","data-source-comp":"App",children:[r.jsx(Nu,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4684:15","data-source-comp":"App",children:"Leaderboard & Stats"})]}),r.jsxs("button",{onClick:()=>pr("roster"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${yt==="roster"?"bg-indigo-600 text-white shadow-sm":"text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4686:13","data-source-comp":"App",children:[r.jsx(gs,{className:"w-3.5 h-3.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4694:15","data-source-comp":"App",children:["Household Hub (",x.length,")"]})]})]})})]}),r.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6","data-source-loc":"weekly_chores_household_hub.tsx:4699:7","data-source-comp":"App",children:[r.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4699:68","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4699:178","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4699:229","data-source-comp":"App",children:[r.jsx(gs,{className:"w-4 h-4 text-indigo-600 shrink-0"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4699:365","data-source-comp":"App",children:"Household Roster:"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4699:401","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4699:454","data-source-comp":"App",children:"Supreme Overlords:"}),x.filter(s=>s.active!==!1&&(s.role==="Supreme Overlord"||s.role==="Overseer Supreme")).map(s=>r.jsx("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300",style:{backgroundColor:s.bg,color:s.text},title:"Supreme Overlord (= Parent \\u2022 Included in Daily Chores)","data-source-loc":"weekly_chores_household_hub.tsx:4699:726","data-source-comp":"App",children:s.name},s.id)),r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4702:95","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:4702:150","data-source-comp":"App",children:"Minions:"}),x.filter(s=>s.active!==!1&&s.role!=="Supreme Overlord"&&s.role!=="Overseer Supreme").map(s=>r.jsx("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.type==="biweekly"?"#F8B4BD":s.type==="casual"?"#A6D2ED":"#E2E8F0"},title:`${s.name} (${s.residency} Minion = Kid)`,"data-source-loc":"weekly_chores_household_hub.tsx:4702:413","data-source-comp":"App",children:s.name},s.id))]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4706:89","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4706:171","data-source-comp":"App",children:[r.jsx("span",{className:"w-4 text-center shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4706:253","data-source-comp":"App",children:"🐾"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4706:316","data-source-comp":"App",children:'"The Herd":'})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4706:352","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4706:405","data-source-comp":"App",children:"Dogs:"}),me.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("dog")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4706:633","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4710:92","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200","data-source-loc":"weekly_chores_household_hub.tsx:4710:147","data-source-comp":"App",children:"Cats:"}),me.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("cat")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4710:378","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),me.some(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat"))&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4714:221","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200","data-source-loc":"weekly_chores_household_hub.tsx:4714:276","data-source-comp":"App",children:"Other Pets:"}),me.filter(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4714:558","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`))]})]})]})]}),r.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4718:114","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-6","data-source-loc":"weekly_chores_household_hub.tsx:4718:253","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4718:294","data-source-comp":"App",children:[r.jsx("p",{className:"text-xs text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4718:299","data-source-comp":"App",children:"Month Overview"}),r.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4718:367","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xl font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4718:417","data-source-comp":"App",children:[_r.totalCompleted," / ",_r.totalScheduled]}),r.jsx("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4718:536","data-source-comp":"App",children:"completed"})]})]}),r.jsxs("div",{className:"hidden sm:block w-36","data-source-loc":"weekly_chores_household_hub.tsx:4718:605","data-source-comp":"App",children:[r.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4718:643","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4718:721","data-source-comp":"App",children:"Progress"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4718:742","data-source-comp":"App",children:[_r.completionRate,"%"]})]}),r.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4718:789","data-source-comp":"App",children:r.jsx("div",{className:"bg-emerald-500 h-2 rounded-full transition-all duration-500",style:{width:`${_r.completionRate}%`},"data-source-loc":"weekly_chores_household_hub.tsx:4718:859","data-source-comp":"App"})})]})]}),r.jsxs("div",{className:"flex items-center gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4720:30","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:4720:79","data-source-comp":"App",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4720:191","data-source-comp":"App"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4720:258","data-source-comp":"App",children:["Active Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:4720:281","data-source-comp":"App",children:ht})," • ",(Xr==null?void 0:Xr.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),r.jsx("button",{onClick:()=>{const s=ws(),i=_s(s.year,s.month,s.day);Bs(i),Ws(),pr("matrix")},className:"px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition",title:`Sync and distribute chores for current week (${ht})`,"data-source-loc":"weekly_chores_household_hub.tsx:4720:452","data-source-comp":"App",children:"Sync & Distribute Week"})]})]}),yt==="month"&&r.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4726:285","data-source-comp":"App",children:[r.jsx("div",{className:"grid grid-cols-7 gap-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4726:312","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("div",{className:"py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:4726:394","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4728:10","data-source-comp":"App",children:s.name}),r.jsxs("span",{className:"text-[10px] font-normal opacity-90 hidden sm:inline","data-source-loc":"weekly_chores_household_hub.tsx:4728:33","data-source-comp":"App",children:["Day ",i+1]})]},s.name))}),r.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:4728:141","data-source-comp":"App",children:wr.map((s,i)=>{const c=fo(s),m=s[0].dateKey===or.dateKey;return r.jsxs("div",{id:c?"active-calendar-week":void 0,className:`bg-white rounded-xl border transition-all ${c?"border-rose-400 ring-2 ring-rose-200 shadow-md":"border-slate-200 shadow-sm hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4731:16","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4731:252","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4731:377","data-source-comp":"App",children:[r.jsxs("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:4731:418","data-source-comp":"App",children:["Week ",i+1]}),r.jsx("span",{className:"text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:4731:494","data-source-comp":"App",children:"•"}),r.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4731:544","data-source-comp":"App",children:[s[0].month+1,"/",s[0].day," – ",s[6].month+1,"/",s[6].day]}),m&&r.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300","data-source-loc":"weekly_chores_household_hub.tsx:4731:688","data-source-comp":"App",children:"Current Week"}),(()=>{const p=Tu(s,Re);return p?r.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeBg}`,"data-source-loc":"weekly_chores_household_hub.tsx:4734:18","data-source-comp":"App",children:p.text}):null})(),c?r.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300","data-source-loc":"weekly_chores_household_hub.tsx:4735:24","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-600","data-source-loc":"weekly_chores_household_hub.tsx:4735:173","data-source-comp":"App"}),"Live Synced with Sheet"]}):r.jsx("button",{onClick:()=>Bs(s),className:"text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4735:262","data-source-comp":"App",children:"Set as Sheet Week"})]}),r.jsxs("div",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4735:456","data-source-comp":"App",children:[s.reduce((p,h)=>{const d=fe.filter(f=>{var y,C;return(C=(y=pt[h.dateKey])==null?void 0:y[f.index_])==null?void 0:C.done}).length;return p+d},0)," ","chores completed"]})]}),r.jsx("div",{className:"grid grid-cols-7 divide-x divide-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4741:48","data-source-comp":"App",children:s.map((p,h)=>{const{dateKey:d,day:f,isCurrentMonth:y}=p,C=fe.filter(b=>{var N,P,V,O,I,Z,ne,Ee,Ke,at,bt,ye,ke,Fe,Xe,fn,vr,en,Ze,zs,Gs,Us,Ea;const Yo=Jr(b),Qo=(b.task||((N=b.row)==null?void 0:N[0])||"").toLowerCase();if(Qo.includes("deep clean")||Qo.includes("feeding station")){const _t=h===6,kr=((V=(P=pt[d])==null?void 0:P[b.index_])==null?void 0:V.done)||((I=(O=pt[d])==null?void 0:O[b.index_])==null?void 0:I.who);if(!_t&&!kr)return!1}else if(Qo.includes("recycling")){const _t=h===3&&Rt("recycling",p.year,p.month,p.day),kr=((ne=(Z=pt[d])==null?void 0:Z[b.index_])==null?void 0:ne.done)||((Ke=(Ee=pt[d])==null?void 0:Ee[b.index_])==null?void 0:Ke.who);if(!_t&&!kr)return!1}else if(Qo.includes("waste")){const _t=h===3&&Rt("waste",p.year,p.month,p.day),kr=((bt=(at=pt[d])==null?void 0:at[b.index_])==null?void 0:bt.done)||((ke=(ye=pt[d])==null?void 0:ye[b.index_])==null?void 0:ke.who);if(!_t&&!kr)return!1}else if(Yo.frequency==="weekly"){const _t=h===Yo.dayOfWeek,kr=((Xe=(Fe=pt[d])==null?void 0:Fe[b.index_])==null?void 0:Xe.done)||((vr=(fn=pt[d])==null?void 0:fn[b.index_])==null?void 0:vr.who);if(!_t&&!kr)return!1}else if(Yo.frequency==="biweekly"){const _t=h===Yo.dayOfWeek&&Rt(b.task||((en=b.row)==null?void 0:en[0]),p.year,p.month,p.day),kr=((zs=(Ze=pt[d])==null?void 0:Ze[b.index_])==null?void 0:zs.done)||((Us=(Gs=pt[d])==null?void 0:Gs[b.index_])==null?void 0:Us.who);if(!_t&&!kr)return!1}if(Vt==="ALL")return!0;const Bn=(Ea=pt[d])==null?void 0:Ea[b.index_],yn=String((Bn==null?void 0:Bn.who)||"").toLowerCase(),Nt=x.find(_t=>_t.id===Vt||_t.name===Vt),gn=((Nt==null?void 0:Nt.name)||Vt).toLowerCase();if(sn(b.row[1]))return ce.some(_t=>_t.toLowerCase()===gn);if(!(Bn!=null&&Bn.who))return!1;if(yn===gn||(yn==="all kids"||yn==="each child")&&ce.some(_t=>_t.toLowerCase()===gn)||(yn==="all non-casual"||yn==="all non casual")&&Nt&&Nt.type!=="casual"||(yn==="parents"||yn==="parents only")&&Nt&&String(Nt.role||"").toLowerCase().includes("parent"))return!0;const vo=Ce(Bn.who);return Bn.who===Vt||(vo==null?void 0:vo.id)===Vt||(vo==null?void 0:vo.name)===Vt}),D=C.filter(b=>{var N,P;return(P=(N=pt[d])==null?void 0:N[b.index_])==null?void 0:P.done}).length,T=C.length>0&&D===C.length;return r.jsxs("div",{className:`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${y?"bg-white":"bg-slate-50/80 border-dashed border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4800:18","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4800:198","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4800:203","data-source-comp":"App",children:[r.jsx("span",{className:`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${y?"bg-slate-100 text-slate-800":"bg-slate-200/70 text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4800:261","data-source-comp":"App",children:f}),r.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4800:450","data-source-comp":"App",children:[C.length>0&&r.jsxs("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded ${T?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4800:516","data-source-comp":"App",children:[D,"/",C.length]}),r.jsx("button",{onClick:()=>ln(d),className:"p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition",title:"Open day details","data-source-loc":"weekly_chores_household_hub.tsx:4800:703","data-source-comp":"App",children:r.jsx(Io,{className:"w-2.5 h-2.5"})})]})]}),(()=>{const b=ao(p.year,p.month,p.day);return b.isArrivalDay?r.jsx("div",{className:"text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay","data-source-loc":"weekly_chores_household_hub.tsx:4803:22","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4803:263","data-source-comp":"App",children:"🏠 Cadence & Mason arrive 5 PM"})}):b.isDepartureDay?r.jsx("div",{className:"text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason depart today at 5:00 PM","data-source-loc":"weekly_chores_household_hub.tsx:4805:22","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4805:241","data-source-comp":"App",children:"👋 Cadence & Mason leave 5 PM"})}):null})(),r.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:4808:16","data-source-comp":"App",children:[C.slice(0,3).map(b=>{var N,P;const V=hn(d,b.index_,b.task||b.row[0]),O=Ce(V.who),I=Jr(b);return r.jsxs("div",{className:`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${V.done?"bg-emerald-50/70 border-emerald-200 text-slate-500":I.frequency==="weekly"?"bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs":"bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4813:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-1 w-full","data-source-loc":"weekly_chores_household_hub.tsx:4813:370","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:4813:434","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>Or(d,b.index_,{done:!V.done}),className:"shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:4813:490","data-source-comp":"App",children:V.done?r.jsx(xd,{className:"w-3.5 h-3.5 text-emerald-600"}):r.jsx(ju,{className:"w-3.5 h-3.5 hover:text-slate-600"})}),r.jsx("span",{className:`truncate text-[10px] font-medium leading-tight ${V.done?"line-through":""}`,"data-source-loc":"weekly_chores_household_hub.tsx:4815:237","data-source-comp":"App",children:b.task||b.row[0]})]}),r.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4815:376","data-source-comp":"App",children:[I.frequency==="weekly"&&r.jsx("span",{className:"text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase",title:"Once-a-week task","data-source-loc":"weekly_chores_household_hub.tsx:4815:458","data-source-comp":"App",children:"1x/wk"}),hr(b.task||b.row[0])?r.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold",style:{backgroundColor:((N=Ce(hr(b.task||b.row[0])))==null?void 0:N.bg)||"#FCE7F3",color:((P=Ce(hr(b.task||b.row[0])))==null?void 0:P.text)||"#BE185D"},"data-source-loc":"weekly_chores_household_hub.tsx:4815:643","data-source-comp":"App",children:hr(b.task||b.row[0])}):sn(b.task||b.row[0])?r.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700",title:"Each child cleans own bedroom","data-source-loc":"weekly_chores_household_hub.tsx:4818:111","data-source-comp":"App",children:"Own Rooms"}):V.who?r.jsx("span",{className:"shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold",style:{backgroundColor:(O==null?void 0:O.bg)||"#F1F5F9",color:(O==null?void 0:O.text)||"#475569"},title:String(V.who),"data-source-loc":"weekly_chores_household_hub.tsx:4818:275","data-source-comp":"App",children:String(V.who).slice(0,2)}):r.jsx("button",{onClick:()=>ln(d),className:"shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5",title:"Assign person","data-source-loc":"weekly_chores_household_hub.tsx:4821:85","data-source-comp":"App",children:"+"})]})]}),sn(b.task||b.row[0])&&!hr(b.task||b.row[0])&&r.jsx("div",{className:"pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4821:347","data-source-comp":"App",children:Ps(d).map(Z=>{var ne;const Ee=!!((ne=V.kidsDone)!=null&&ne[Z]),Ke=Ce(Z);return r.jsxs("button",{type:"button",onClick:at=>{at.stopPropagation(),zo(d,b.index_,Z)},className:`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${Ee?"bg-emerald-100 text-emerald-800 border-emerald-300 line-through":"bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`,title:`Click to toggle ${Z}'s room`,"data-source-loc":"weekly_chores_household_hub.tsx:4825:22","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full inline-block",style:{backgroundColor:(Ke==null?void 0:Ke.color)||"#888"},"data-source-loc":"weekly_chores_household_hub.tsx:4828:318","data-source-comp":"App"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4830:20","data-source-comp":"App",children:Z}),Ee?"✓":""]},Z)})})]},b.index_)}),C.length>3&&r.jsxs("button",{onClick:()=>ln(d),className:"w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4832:39","data-source-comp":"App",children:["+",C.length-3," more"]}),C.length===0&&r.jsx("div",{className:"text-[10px] text-slate-400 italic py-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4832:277","data-source-comp":"App",children:"No chores"})]})]}),r.jsx("button",{onClick:()=>ln(d),className:"mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition","data-source-loc":"weekly_chores_household_hub.tsx:4832:373","data-source-comp":"App",children:"Manage Day"})]},d)})})]},i)})})]}),yt==="matrix"&&r.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4970:50","data-source-comp":"App",children:[r.jsxs("div",{id:"printable-schedule-card",className:"bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4970:77","data-source-comp":"App",children:[r.jsxs("div",{className:"no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4970:193","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4970:311","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4970:316","data-source-comp":"App",children:[r.jsx("h2",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4970:357","data-source-comp":"App",children:"Weekly Schedule"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4970:428","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4970:571","data-source-comp":"App"}),"Active Week: ",ht," • ",(Xr==null?void 0:Xr.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4970:813","data-source-comp":"App",children:"Single-page Letter Landscape Layout - Printed.pdf"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4970:921","data-source-comp":"App",children:[r.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:4970:972","data-source-comp":"App",children:[r.jsx(md,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search schedule chores...",value:Er,onChange:s=>va(s.target.value),className:"pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:4970:1073","data-source-comp":"App"})]}),r.jsx("button",{onClick:()=>{const s=Mt(ht||We)||{year:2026,month:9,day:19},i=_s(s.year,s.month,s.day);Ct(c=>{const m={...c};return i.forEach(p=>{m[p.dateKey]={}}),m}),te({}),je>=0&&we&&Array.isArray(we.data)&&we.data.forEach(c=>{if(c.index_>=5&&c.index_<=9){const m=new Array(15).fill(null);m[0]=c.row[0];for(let p=0;p<7;p++)m[1+p*2]="",m[2+p*2]=!1;_(je,c.index_,m)}}),oe("Cleared daily WHO/DONE assignments for a blank printable template!"),setTimeout(()=>oe(null),3e3)},className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs",title:"Clear WHO/DONE cells to print a blank fill-in sheet","data-source-loc":"weekly_chores_household_hub.tsx:4970:1342","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:238","data-source-comp":"App",children:"Clear Names (Blank Sheet)"})}),r.jsxs("button",{onClick:Ws,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs",title:"Automatically distribute chores across active members for current week","data-source-loc":"weekly_chores_household_hub.tsx:4996:285","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-3.5 h-3.5 text-amber-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:632","data-source-comp":"App",children:"Distribute Current Week"})]}),r.jsx("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer",title:"Print 1-page Letter Landscape schedule","data-source-loc":"weekly_chores_household_hub.tsx:4996:677","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:924","data-source-comp":"App",children:"🖨️ Print Schedule"})})]})]}),r.jsx("div",{className:"overflow-x-auto","data-source-loc":"weekly_chores_household_hub.tsx:4996:976","data-source-comp":"App",children:r.jsxs("table",{id:"printable-schedule-table",className:"w-full table-fixed border-collapse text-left text-xs",style:{borderColor:"#C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1009","data-source-comp":"App",children:[r.jsxs("colgroup",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:1146","data-source-comp":"App",children:[r.jsx("col",{style:{width:"21%"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1156","data-source-comp":"App"}),Ut.map(s=>r.jsxs(oo.Fragment,{children:[r.jsx("col",{style:{width:"7.5%"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1247","data-source-comp":"App"}),r.jsx("col",{style:{width:"3.78%"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1280","data-source-comp":"App"})]},`col-${s.name}`))]}),r.jsxs("thead",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:1344","data-source-comp":"App",children:[r.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"3px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1351","data-source-comp":"App",children:r.jsx("th",{colSpan:15,className:"py-2 px-3 text-left text-xl font-bold text-white tracking-tight","data-source-loc":"weekly_chores_household_hub.tsx:4996:1429","data-source-comp":"App",children:"Chore Schedule"})}),r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:4996:1546","data-source-comp":"App",children:[r.jsxs("th",{className:"p-0 align-top bg-white",style:{borderRight:"2px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1550","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white","data-source-loc":"weekly_chores_household_hub.tsx:4996:1634","data-source-comp":"App",children:"FOR THE WEEK OF:"}),r.jsx("div",{className:"text-lg font-bold py-1.5 text-center text-white",style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:4996:1767","data-source-comp":"App",children:(()=>{const s=Mt(ht||We);return s?`${s.month+1}/${s.day}/${s.year}`:ht||We||"10/19/2026"})()})]}),Ut.map((s,i)=>{const c=Mt(ht||We)||{year:2026,month:9,day:19},p=new Date(c.year,c.month,c.day+i).getDate();return r.jsxs("th",{colSpan:2,className:"py-1.5 px-1 text-center text-white font-bold align-middle",style:{backgroundColor:s.color,borderRight:i<6?"2px solid #FFFFFF":"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5007:16","data-source-comp":"App",children:[r.jsx("div",{className:"text-xs font-bold uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5010:12","data-source-comp":"App",children:s.short.toUpperCase()}),r.jsx("div",{className:"text-sm font-bold leading-tight mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5010:101","data-source-comp":"App",children:p})]},s.name)})]}),r.jsxs("tr",{className:"bg-white text-[8.5px] font-bold text-slate-900",style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5011:15","data-source-comp":"App",children:[r.jsx("th",{className:"py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]","data-source-loc":"weekly_chores_household_hub.tsx:5011:156","data-source-comp":"App",children:"TASK"}),Ut.map(s=>r.jsxs(oo.Fragment,{children:[r.jsx("th",{className:"py-0.5 px-1 text-center uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5011:313","data-source-comp":"App",children:"WHO"}),r.jsx("th",{className:"py-0.5 px-1 text-center font-bold",title:"Done","data-source-loc":"weekly_chores_household_hub.tsx:5011:381","data-source-comp":"App",children:r.jsx(xd,{className:"w-3 h-3 mx-auto text-slate-800"})})]},`sub-${s.name}`))]})]}),r.jsxs("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5011:542","data-source-comp":"App",children:[tt.filter(s=>!(Er&&!s.isSectionHeader&&!(s.task||"").toLowerCase().includes(Er.toLowerCase())||!s.isSectionHeader&&no(s.task))).map((s,i)=>{var c,m;if(s.isSectionHeader)return s.headerType==="daily"?r.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"1.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5023:20","data-source-comp":"App",children:r.jsx("td",{colSpan:15,className:"py-1.5 px-3 font-bold text-sm text-white","data-source-loc":"weekly_chores_household_hub.tsx:5023:136","data-source-comp":"App",children:"Daily Tasks"})},`header-daily-${s.index_}`):r.jsxs("tr",{style:{backgroundColor:"#002060",borderTop:"1.5px solid #002060",borderBottom:"1.5px solid #C55A11"},className:"text-white font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5025:18","data-source-comp":"App",children:[r.jsx("td",{className:"py-1.5 px-3 text-sm font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5025:202","data-source-comp":"App",children:"Weekly Tasks"}),r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5025:265","data-source-comp":"App",children:"Description"}),r.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5025:341","data-source-comp":"App",children:"Initials / Assigned"})]},`header-weekly-${s.index_}`);const p=s,h=p.task||((c=p.row)==null?void 0:c[0])||"Chore",d=String(h).split(/\r?\n/).map(P=>P.trim()).filter(Boolean),f=d[0]||h,y=d.slice(1).join(" "),C=Jr(p),D=hr(h),T=jl(h)&&!D,b=ap(h,C),N=(m=p.row)!=null&&m[1]&&(T||b)&&!x.some(P=>P.name.toLowerCase()===String(p.row[1]).trim().toLowerCase())?String(p.row[1]).trim():Ou(h)?"(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away":sn(h)?"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum":Wu(h)?"- Pick Up, Organize, Dust & Vacuum":Pu(h)?"- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste":h.toLowerCase().includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":h.toLowerCase().includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":p.notes||"";return r.jsxs("tr",{className:"bg-white hover:bg-slate-50/60 transition-colors",style:{borderBottom:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5037:16","data-source-comp":"App",children:[r.jsxs("td",{className:"py-1.5 px-2 text-slate-900 bg-white align-middle",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5037:164","data-source-comp":"App",children:[r.jsx("div",{className:"leading-tight text-slate-900 font-semibold text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5037:309","data-source-comp":"App",children:f}),y&&r.jsx("div",{className:"text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight","data-source-loc":"weekly_chores_household_hub.tsx:5037:411","data-source-comp":"App",children:y})]}),T?(()=>{const P=yo(p.index_,h),V=[{code:"SG",name:"Sydney"},{code:"CV",name:"Cadence"},{code:"MV",name:"Mason"},{code:"KV",name:"Koda"},{code:"KG",name:"Keyanna"}];return r.jsxs(oo.Fragment,{children:[r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5046:34","data-source-comp":"App",children:N}),r.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5046:205","data-source-comp":"App",children:r.jsx("div",{className:"flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5046:314","data-source-comp":"App",children:V.map(O=>{const I=!!P[O.name];return r.jsxs("button",{type:"button",onClick:()=>Ks(p.index_,O.name,h),className:"inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700",title:`${O.name} (${O.code}) — Click to toggle`,"data-source-loc":"weekly_chores_household_hub.tsx:5048:20","data-source-comp":"App",children:[r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5048:262","data-source-comp":"App",children:[O.code,":"]}),r.jsx("span",{className:`inline-block min-w-[26px] text-center border-b border-slate-700 ${I?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5048:284","data-source-comp":"App",children:I?"✓":"____"})]},O.code)})})})]})})():b?(()=>{const P=go(p.index_,h),V=P.who&&!P.who.startsWith("Who:")&&!P.who.startsWith("Assigned:")?P.who:"";return r.jsxs(oo.Fragment,{children:[r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5053:34","data-source-comp":"App",children:N}),r.jsx("td",{colSpan:4,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5053:205","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-baseline gap-1.5 text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5053:316","data-source-comp":"App",children:[r.jsx("span",{className:"font-semibold text-slate-900 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5053:373","data-source-comp":"App",children:"Who:"}),r.jsxs("select",{value:V,onChange:O=>br(p.index_,h,{who:O.target.value}),className:"flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5053:440","data-source-comp":"App",children:[r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5055:168","data-source-comp":"App"}),r.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5055:194","data-source-comp":"App",children:x.filter(O=>O.type==="regular").map(O=>r.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5055:290","data-source-comp":"App",children:O.name},O.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5055:354","data-source-comp":"App",children:x.filter(O=>O.type==="biweekly").map(O=>r.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5055:451","data-source-comp":"App",children:O.name},O.id))}),r.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5055:515","data-source-comp":"App",children:x.filter(O=>O.type==="casual").map(O=>r.jsx("option",{value:O.name,"data-source-loc":"weekly_chores_household_hub.tsx:5055:607","data-source-comp":"App",children:O.name},O.id))}),r.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5055:671","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5055:704","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5055:758","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5055:800","data-source-comp":"App",children:"Parents"})]})]})]})}),r.jsx("td",{colSpan:2,className:"py-1.5 px-2 align-middle bg-white text-left",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5055:871","data-source-comp":"App",children:r.jsxs("button",{type:"button",onClick:()=>br(p.index_,h,{done:!P.done}),className:"inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full",title:"Click to toggle Done","data-source-loc":"weekly_chores_household_hub.tsx:5055:988","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5057:152","data-source-comp":"App",children:"Done:"}),r.jsx("span",{className:`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${P.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5057:170","data-source-comp":"App",children:P.done?"✓":"______"})]})})]})})():Ut.map((P,V)=>{var O,I,Z,ne;const Ee=1+V*2,Ke=2+V*2,at=Mt(We)||{year:2026,month:9,day:19},bt=new Date(at.year,at.month,at.day+V),ye=Dn(bt.getFullYear(),bt.getMonth(),bt.getDate()),ke=hn(ye,p.index_,h),Fe=((O=H[p.index_])==null?void 0:O.row)||(h?(I=H[h.toLowerCase().trim()])==null?void 0:I.row:null),Xe=(Fe==null?void 0:Fe[Ee])!==void 0?Fe[Ee]:(Z=p.row)==null?void 0:Z[Ee],fn=(Fe==null?void 0:Fe[Ke])!==void 0?Fe[Ke]:(ne=p.row)==null?void 0:ne[Ke],vr=Xe!=null?String(Xe).trim():ke!=null&&ke.who?String(ke.who).trim():"",en=fn!=null?fn===!0||String(fn).toLowerCase()==="true":!!(ke!=null&&ke.done);return r.jsxs(oo.Fragment,{children:[r.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:"1px solid #94A3B8"},"data-source-loc":"weekly_chores_household_hub.tsx:5076:49","data-source-comp":"App",children:r.jsxs("select",{value:vr,onChange:Ze=>{bo(p.index_,V,"who",Ze.target.value,h)},className:"w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5076:148","data-source-comp":"App",children:[r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5078:149","data-source-comp":"App"}),r.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5078:175","data-source-comp":"App",children:x.filter(Ze=>Ze.type==="regular").map(Ze=>r.jsx("option",{value:Ze.name,"data-source-loc":"weekly_chores_household_hub.tsx:5078:271","data-source-comp":"App",children:Ze.name},Ze.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5078:335","data-source-comp":"App",children:x.filter(Ze=>Ze.type==="biweekly").map(Ze=>r.jsx("option",{value:Ze.name,"data-source-loc":"weekly_chores_household_hub.tsx:5078:432","data-source-comp":"App",children:Ze.name},Ze.id))}),r.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5078:496","data-source-comp":"App",children:x.filter(Ze=>Ze.type==="casual").map(Ze=>r.jsx("option",{value:Ze.name,"data-source-loc":"weekly_chores_household_hub.tsx:5078:588","data-source-comp":"App",children:Ze.name},Ze.id))}),r.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5078:652","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5078:685","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5078:731","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5078:785","data-source-comp":"App",children:"Each Child"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5078:831","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5078:873","data-source-comp":"App",children:"Parents"})]}),vr&&!x.some(Ze=>Ze.name===vr)&&!["Non-Casual","All Non-Casual","Each Child","All Kids","Parents"].includes(vr)&&r.jsx("option",{value:vr,"data-source-loc":"weekly_chores_household_hub.tsx:5078:1073","data-source-comp":"App",children:vr})]})}),r.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:V<6?"1.5px solid #475569":"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5078:1128","data-source-comp":"App",children:r.jsx("button",{type:"button",onClick:()=>{bo(p.index_,V,"done",!en,h)},className:"w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer",title:en?"Mark as not done":"Mark as done","data-source-loc":"weekly_chores_household_hub.tsx:5078:1264","data-source-comp":"App",children:en?r.jsx("span",{className:"text-emerald-700 font-black text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5080:196","data-source-comp":"App",children:"✓"}):r.jsx("span",{className:"text-slate-300 print:hidden text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5080:270","data-source-comp":"App",children:"☐"})})})]},P.name)})]},`row-${p.index_}-${h}`)}),r.jsxs("tr",{className:"h-14","data-source-loc":"weekly_chores_household_hub.tsx:5083:11","data-source-comp":"App",children:[r.jsx("td",{style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5083:32","data-source-comp":"App"}),Ut.map(s=>r.jsx("td",{colSpan:2,style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5083:98","data-source-comp":"App"},`band-${s.name}`))]}),r.jsxs("tr",{className:"bg-white text-slate-900",style:{borderTop:"1px solid #475569",borderBottom:"2.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5085:11","data-source-comp":"App",children:[r.jsx("td",{className:"py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5085:131","data-source-comp":"App",children:"Weekly Sign-Off"}),r.jsx("td",{colSpan:12,className:"py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5085:305","data-source-comp":"App",children:"Parent Initials:"}),r.jsx("td",{colSpan:2,className:"py-2 px-2 text-center bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5085:469","data-source-comp":"App",children:r.jsx("button",{type:"button",onClick:Da,className:"inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900",title:"Click to toggle Parent Sign-Off","data-source-loc":"weekly_chores_household_hub.tsx:5085:573","data-source-comp":"App",children:r.jsx("span",{className:`inline-block min-w-[56px] border-b border-slate-800 ${wo.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5085:782","data-source-comp":"App",children:wo.done?"✓ TV / MV":"_________"})})})]})]})]})})]}),r.jsxs("div",{className:"no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5085:1047","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:1119","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:1204","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-indigo-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:1311","data-source-comp":"App",children:"HOUSEHOLD ROSTER"}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5085:1405","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5085:1490","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:1562","data-source-comp":"App",children:[r.jsx("strong",{className:"text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:1567","data-source-comp":"App",children:"• Full-Time:"})," ",x.filter(s=>s.type==="regular").map(s=>s.name).join(", ")||"Sydney, Thom, Meghan"]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:1746","data-source-comp":"App",children:[r.jsx("strong",{className:"text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:1751","data-source-comp":"App",children:"• Bi-Weekly:"})," ",x.filter(s=>s.type==="biweekly").map(s=>s.name).join(" & ")||"Cadence & Mason"]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:1926","data-source-comp":"App",children:[r.jsx("strong",{className:"text-sky-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:1931","data-source-comp":"App",children:"• Casual:"})," ",x.filter(s=>s.type==="casual").map(s=>s.name).join(", ")||"Koda, Keyanna"]})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:2109","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:2194","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:2301","data-source-comp":"App",children:"BI-WEEKLY SCHEDULE"}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5085:2395","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5085:2480","data-source-comp":"App",children:[r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:2552","data-source-comp":"App",children:"• Cadence & Mason: Alternating bi-weekly schedule"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:2621","data-source-comp":"App",children:"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:2709","data-source-comp":"App",children:"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:2797","data-source-comp":"App",children:"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:2900","data-source-comp":"App",children:"• On-weeks (Starts Oct 19): Included in daily chore rotations"})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:2993","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:3078","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:3185","data-source-comp":"App",children:'PET CARE ROUTINE ("FEED THE HERD")'}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5085:3300","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5085:3385","data-source-comp":"App",children:[r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:3457","data-source-comp":"App",children:"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:3548","data-source-comp":"App",children:"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:3640","data-source-comp":"App",children:"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:3741","data-source-comp":"App",children:"• Routine: Daily feeding, fresh water & station cleanup"})]})]})]})]}),yt==="stats"&&r.jsxs("div",{className:"max-w-4xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5085:3867","data-source-comp":"App",children:[r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5","data-source-loc":"weekly_chores_household_hub.tsx:5085:3912","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5085:3984","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:4059","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5085:4110","data-source-comp":"App",children:"Scheduled Chores"}),r.jsx(Su,{className:"w-4 h-4 text-slate-400"})]}),r.jsx("div",{className:"text-2xl font-bold text-slate-900 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:4241","data-source-comp":"App",children:_r.totalScheduled}),r.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5085:4330","data-source-comp":"App",children:["Total across ",xn[st]," ",dt]})]}),r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5085:4447","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:4522","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5085:4573","data-source-comp":"App",children:"Completed Chores"}),r.jsx(Du,{className:"w-4 h-4 text-emerald-500"})]}),r.jsx("div",{className:"text-2xl font-bold text-emerald-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:4709","data-source-comp":"App",children:_r.totalCompleted}),r.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5085:4800","data-source-comp":"App",children:[_r.completionRate,"% completion rate"]})]}),r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5085:4897","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:4972","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5085:5023","data-source-comp":"App",children:"Active Tasks"}),r.jsx(Cl,{className:"w-4 h-4 text-indigo-500"})]}),r.jsx("div",{className:"text-2xl font-bold text-indigo-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:5151","data-source-comp":"App",children:fe.length}),r.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5085:5232","data-source-comp":"App",children:"Daily & weekly routines"})]}),r.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5085:5308","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5085:5422","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-bold text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:5473","data-source-comp":"App",children:"Current Top Performer"}),r.jsx(hd,{className:"w-4 h-4 text-amber-600"})]}),r.jsx("div",{className:"text-xl font-black text-amber-950 mt-2 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5085:5602","data-source-comp":"App",children:Zr?Zr.name:"TBD"}),r.jsx("p",{className:"text-xs text-amber-800 mt-1 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5085:5715","data-source-comp":"App",children:Zr?`${Zr.done} chores finished`:"Track chores to rank"})]})]}),r.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:5085:5863","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5085:5977","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5085:6088","data-source-comp":"App",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner","data-source-loc":"weekly_chores_household_hub.tsx:5085:6129","data-source-comp":"App",children:r.jsx(np,{className:"w-6 h-6 text-amber-200"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:6285","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:6290","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full","data-source-loc":"weekly_chores_household_hub.tsx:5085:6331","data-source-comp":"App",children:"Monthly Incentive Prize"}),r.jsxs("span",{className:"text-xs opacity-90","data-source-loc":"weekly_chores_household_hub.tsx:5085:6464","data-source-comp":"App",children:[xn[st]," ",dt]})]}),r.jsx("h3",{className:"text-base font-extrabold mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5085:6561","data-source-comp":"App",children:"Top Performer Reward & Recognition"})]})]}),r.jsx("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5085:6660","data-source-comp":"App",children:r.jsxs("button",{onClick:()=>{Ms(s=>!s),Rn(Bo)},className:"text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5085:6701","data-source-comp":"App",children:[r.jsx(pd,{className:"w-3.5 h-3.5 text-amber-700"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5088:203","data-source-comp":"App",children:Es?"Cancel Edit":"Customize Incentive"})]})})]}),Es?r.jsxs("div",{className:"pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5088:1186","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-white mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5088:1281","data-source-comp":"App",children:"Set Monthly Reward / Incentive Prize for the Top Performer:"}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5088:1399","data-source-comp":"App",children:[r.jsx("input",{type:"text",value:$o,onChange:s=>Rn(s.target.value),placeholder:"e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass...",className:"flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300","data-source-loc":"weekly_chores_household_hub.tsx:5088:1427","data-source-comp":"App"}),r.jsx("button",{onClick:()=>{$o.trim()&&(ka($o.trim()),Ms(!1),oe(`Updated Monthly Incentive: "${$o.trim()}"`),setTimeout(()=>oe(null),3e3))},className:"px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition","data-source-loc":"weekly_chores_household_hub.tsx:5088:1732","data-source-comp":"App",children:"Save Prize"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] pt-1","data-source-loc":"weekly_chores_household_hub.tsx:5095:140","data-source-comp":"App",children:[r.jsx("span",{className:"opacity-80","data-source-loc":"weekly_chores_household_hub.tsx:5095:210","data-source-comp":"App",children:"Quick ideas:"}),r.jsx("button",{onClick:()=>Rn("$15 Allowance Bonus & Pizza Night Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5095:258","data-source-comp":"App",children:"$15 + Pizza Night"}),r.jsx("button",{onClick:()=>Rn("1-Day Chore Exemption Pass & Movie Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5095:445","data-source-comp":"App",children:"1-Day Chore Pass"}),r.jsx("button",{onClick:()=>Rn("$20 Gift Card & Weekend Treat"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5095:628","data-source-comp":"App",children:"$20 Gift Card"}),r.jsx("button",{onClick:()=>Rn("Family Ice Cream Outing of Their Choice"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5095:802","data-source-comp":"App",children:"Ice Cream Outing"})]})]}):r.jsxs("div",{className:"pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5088:320","data-source-comp":"App",children:[r.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5088:414","data-source-comp":"App",children:[r.jsx("div",{className:"text-amber-100 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5088:441","data-source-comp":"App",children:"Incentive for Highest Monthly Chore Completions:"}),r.jsxs("div",{className:"text-sm font-black text-white flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5088:539","data-source-comp":"App",children:[r.jsx(pd,{className:"w-4 h-4 text-amber-200 shrink-0"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5088:662","data-source-comp":"App",children:Bo})]})]}),Zr&&r.jsxs("div",{className:"bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5088:722","data-source-comp":"App",children:[r.jsx(hd,{className:"w-4 h-4 text-amber-200 shrink-0"}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5088:915","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] text-amber-100 uppercase tracking-wider font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5088:920","data-source-comp":"App",children:"Leading Candidate"}),r.jsxs("div",{className:"font-extrabold text-xs text-white","data-source-loc":"weekly_chores_household_hub.tsx:5088:1022","data-source-comp":"App",children:[Zr.name," (",Zr.done," finished • ",Zr.pct,"%)"]})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5095:1004","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5095:1079","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:1196","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5095:1201","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5095:1242","data-source-comp":"App",children:"Family Members Completion"}),r.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5095:1323","data-source-comp":"App",children:["Unified Roster (",Kn.length," Members)"]})]}),r.jsxs("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5095:1508","data-source-comp":"App",children:["Monthly Total Tracker ranked by total chores completed for ",xn[st]," ",dt,". All household members are displayed together in a single unified leaderboard."]})]}),r.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5095:1752","data-source-comp":"App",children:[r.jsx(Nu,{className:"w-4 h-4 text-amber-500"}),r.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5095:1860","data-source-comp":"App",children:"Ranked by Monthly Completions"})]})]}),r.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5095:1955","data-source-comp":"App",children:Kn.map((s,i)=>{const c=i===0&&s.done>0,m=i===1&&s.done>0,p=i===2&&s.done>0;return r.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${c?"border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm":"border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5099:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5099:242","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5099:330","data-source-comp":"App",children:[r.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${c?"bg-amber-500 text-white shadow-xs":m?"bg-slate-300 text-slate-800":p?"bg-amber-700/80 text-white":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5099:371","data-source-comp":"App",children:c?r.jsx(hd,{className:"w-4 h-4"}):`#${i+1}`}),r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5099:698","data-source-comp":"App",children:[r.jsx("span",{className:"w-3.5 h-3.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5099:739","data-source-comp":"App"}),r.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5101:18","data-source-comp":"App",children:s.name}),s.role&&r.jsxs("span",{className:"text-xs text-slate-500 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5101:95","data-source-comp":"App",children:["(",s.role," = ",s.role==="Supreme Overlord"?"Parent":"Kid",")"]}),r.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.type==="biweekly"?"bg-pink-50 text-pink-700 border-pink-200":s.type==="casual"?"bg-sky-50 text-sky-700 border-sky-200":"bg-slate-100 text-slate-600 border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5101:223","data-source-comp":"App",children:s.residency}),c&&r.jsxs("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5101:516","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5101:673","data-source-comp":"App",children:"🏆"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5101:699","data-source-comp":"App",children:"Top Performer • Incentive Winner"})]})]})]}),r.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5101:773","data-source-comp":"App",children:[r.jsxs("div",{className:"text-right","data-source-loc":"weekly_chores_household_hub.tsx:5101:844","data-source-comp":"App",children:[r.jsx("span",{className:"font-extrabold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5101:872","data-source-comp":"App",children:s.done}),r.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5101:943","data-source-comp":"App",children:[" / ",s.total," completed"]})]}),r.jsxs("span",{className:`font-black text-xs px-2 py-0.5 rounded-md ${s.pct>=80?"bg-emerald-100 text-emerald-800":s.pct>=50?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5101:1019","data-source-comp":"App",children:[s.pct,"%"]})]})]}),r.jsx("div",{className:"w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5101:1235","data-source-comp":"App",children:r.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500",style:{width:`${s.pct}%`,backgroundColor:c?"#D97706":s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5101:1310","data-source-comp":"App"})}),c&&r.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5104:36","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5104:165","data-source-comp":"App",children:[r.jsx(pd,{className:"w-3.5 h-3.5 text-amber-700 shrink-0"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5104:264","data-source-comp":"App",children:["Qualifying Reward: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5104:293","data-source-comp":"App",children:Bo})]})]}),r.jsxs("span",{className:"font-bold text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5104:341","data-source-comp":"App",children:["Rank #1 in ",xn[st]]})]})]},s.id)})})]}),r.jsxs("div",{className:"p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5105:26","data-source-comp":"App",children:[r.jsx("h4",{className:"text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5105:107","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:212","data-source-comp":"App",children:"🐾 House Pets Overview"})}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5105:263","data-source-comp":"App",children:me.filter(s=>s.active!==!1).map(s=>r.jsxs("div",{className:"p-2.5 rounded-lg border flex items-center gap-2",style:{backgroundColor:s.bg,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5105:381","data-source-comp":"App",children:[r.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5105:541","data-source-comp":"App"}),r.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5105:634","data-source-comp":"App",children:s.icon}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:679","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5105:684","data-source-comp":"App",children:s.name}),r.jsx("div",{className:"text-[10px] opacity-80",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5105:755","data-source-comp":"App",children:s.type})]})]},`${s.index_}-${s.name}`))})]})]}),yt==="roster"&&r.jsx("div",{className:"max-w-5xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5105:899","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5105:944","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5105:1019","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:1131","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5105:1136","data-source-comp":"App",children:[r.jsx("h2",{className:"text-lg font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5105:1177","data-source-comp":"App",children:"Household Hub Master Data"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5105:1256","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500","data-source-loc":"weekly_chores_household_hub.tsx:5105:1408","data-source-comp":"App"}),"Linked: Monthly Calendar & Printable Weekly Schedule"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5105:1533","data-source-comp":"App",children:"Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files."})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5105:1713","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5105:1764","data-source-comp":"App",children:["Selected Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:1898","data-source-comp":"App",children:ht||K.activeWeekStart})]}),r.jsxs("span",{className:"text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200","data-source-loc":"weekly_chores_household_hub.tsx:5105:1975","data-source-comp":"App",children:["Kids Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:2101","data-source-comp":"App",children:Qt?"Active":"Inactive"})]}),r.jsxs("button",{type:"button",onClick:xo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer",title:"Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json","data-source-loc":"weekly_chores_household_hub.tsx:5105:2173","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:2493","data-source-comp":"App",children:"💾"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:2508","data-source-comp":"App",children:"Save as Default"})]}),r.jsxs("button",{type:"button",onClick:qo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Download / export current configuration backup file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5105:2545","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:2847","data-source-comp":"App",children:"⬇️"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:2862","data-source-comp":"App",children:"Export Config"})]}),r.jsxs("label",{className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Import / restore a configuration file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5105:2897","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3141","data-source-comp":"App",children:"⬆️"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3156","data-source-comp":"App",children:"Import Config"}),r.jsx("input",{type:"file",accept:".json",onChange:Tl,className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5105:3182","data-source-comp":"App"})]}),r.jsxs("button",{type:"button",onClick:El,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-amber-500 text-white rounded-lg hover:bg-amber-600 shadow-2xs transition cursor-pointer",title:"Load clean blank starter template without pre-populated names or chores","data-source-loc":"weekly_chores_household_hub.tsx:5105:3279","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3576","data-source-comp":"App",children:"✨"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3590","data-source-comp":"App",children:"Blank Starter"})]}),r.jsxs("button",{type:"button",onClick:Na,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-amber-800 border border-amber-300 rounded-lg hover:bg-amber-50 shadow-2xs transition cursor-pointer",title:"Download clean starter template file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5105:3625","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3920","data-source-comp":"App",children:"⬇️"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:3935","data-source-comp":"App",children:"Export Starter"})]}),r.jsxs("button",{type:"button",onClick:Fs,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 shadow-2xs transition cursor-pointer",title:"Restore previously saved setup from weekly-chores-config.json","data-source-loc":"weekly_chores_household_hub.tsx:5105:3971","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:4284","data-source-comp":"App",children:"🔄"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5105:4299","data-source-comp":"App",children:"Restore Setup"})]})]})]}),r.jsxs("div",{className:"my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5105:4346","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5105:4491","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5105:4542","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-4 h-4 text-indigo-600"}),r.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-indigo-950","data-source-loc":"weekly_chores_household_hub.tsx:5105:4631","data-source-comp":"App",children:"Special Rules & Parameters"})]}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800","data-source-loc":"weekly_chores_household_hub.tsx:5105:4743","data-source-comp":"App",children:"Live Analytical Summary"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5105:4878","data-source-comp":"App",children:[(()=>{const s=x.filter(h=>h.active!==!1&&(h.role==="Supreme Overlord"||h.role==="Overseer Supreme")).map(h=>h.name),i=s.length>0?s.join(" & "):"None",c=x.filter(h=>h.active!==!1&&h.type==="regular").map(h=>h.name),m=x.filter(h=>h.active!==!1&&h.type==="biweekly").map(h=>h.name),p=Qt?[...c,...m]:c;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5111:22","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5111:112","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:182","data-source-comp":"App",children:"👑"}),"Supreme Overlords (Parents) & Minions (Kids)"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5111:263","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:321","data-source-comp":"App",children:i}),", AKA ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:364","data-source-comp":"App",children:"Supreme Overlords"}),", actively share daily chores with the ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:433","data-source-comp":"App",children:"Kids"}),", AKA ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:464","data-source-comp":"App",children:"Minions"}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:481","data-source-comp":"App"}),r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:487","data-source-comp":"App",children:"Sunday Supper Rule:"})," On Sundays, ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:540","data-source-comp":"App",children:"Make Supper"})," is always assigned exclusively to ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:599","data-source-comp":"App",children:i}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:633","data-source-comp":"App"}),"They also conduct the Sunday ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:672","data-source-comp":"App",children:"Weekly Sign-Off & Inspection"}),"."]})]}),r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5111:728","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-pink-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5111:816","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:884","data-source-comp":"App",children:"🏠"})," Custody Rotation: Kids Week"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5111:949","data-source-comp":"App",children:["For selected week, ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:1030","data-source-comp":"App",children:ht||K.activeWeekStart}),", Kids Week = ",r.jsx("strong",{className:Qt?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5111:1118","data-source-comp":"App",children:Qt?"Active":"Inactive"}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:1258","data-source-comp":"App"}),r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:1264","data-source-comp":"App",children:m.length>0?m.join(" & "):"Bi-Weekly Occupants"})," are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5111:1486","data-source-comp":"App",children:"5:00 PM"}),". ",Qt?`Chores for this week are distributed across all ${p.length} active household members (${p.join(", ")}).`:`Chores for this week are distributed among the full-time roster (${c.join(", ")}).`]})]})]})})(),r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5112:16","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-amber-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5112:105","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5112:174","data-source-comp":"App",children:"🚛"})," Alternating Curbside Schedule"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5112:241","data-source-comp":"App",children:["Curbside tasks alternate bi-weekly on Thursday evenings for the ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5112:367","data-source-comp":"App",children:"Full-Time"})," & ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5112:400","data-source-comp":"App",children:"Bi-Weekly"})," occupants.",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5112:441","data-source-comp":"App"}),(()=>{const s=Ot[3]||Ot[0],i=s?Rt("Curbside Waste",s.year,s.month,s.day):!1,c=s?Rt("Curbside Recycling",s.year,s.month,s.day):!0;return r.jsxs(r.Fragment,{children:["For selected week, ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5116:45","data-source-comp":"App",children:ht||K.activeWeekStart}),":",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5116:120","data-source-comp":"App"}),"Waste = ",r.jsx("strong",{className:i?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5116:138","data-source-comp":"App",children:i?"Active":"Inactive"}),r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5116:255","data-source-comp":"App"}),"Recycling = ",r.jsx("strong",{className:c?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5116:277","data-source-comp":"App",children:c?"Active":"Inactive"})]})})()]})]})]})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4","data-source-loc":"weekly_chores_household_hub.tsx:5117:38","data-source-comp":"App",children:[r.jsxs("div",{className:"p-3 bg-purple-50/70 border border-purple-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5117:98","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-purple-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5117:171","data-source-comp":"App",children:"Full-Time Occupants"}),r.jsx("div",{className:"text-[8px] italic text-purple-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5117:276","data-source-comp":"App",children:"(Eternally working)"}),r.jsxs("div",{className:"text-lg font-extrabold text-purple-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:394","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="regular").length," Members"]}),r.jsx("div",{className:"text-[11px] text-purple-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:553","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="regular").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-pink-50/70 border border-pink-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5117:751","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-pink-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5117:820","data-source-comp":"App",children:"Bi-Weekly Occupants"}),r.jsx("div",{className:"text-[8px] italic text-pink-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5117:923","data-source-comp":"App",children:"(Half-Timers)"}),r.jsxs("div",{className:"text-lg font-extrabold text-pink-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:1033","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="biweekly").length," Members"]}),r.jsx("div",{className:"text-[11px] text-pink-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:1191","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="biweekly").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-sky-50/70 border border-sky-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5117:1388","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-sky-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5117:1455","data-source-comp":"App",children:"Casual Assignees"}),r.jsx("div",{className:"text-[8px] italic text-sky-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5117:1554","data-source-comp":"App",children:"(Manually added to schedule)"}),r.jsxs("div",{className:"text-lg font-extrabold text-sky-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:1678","data-source-comp":"App",children:[x.filter(s=>s.active!==!1&&s.type==="casual").length," Members"]}),r.jsx("div",{className:"text-[11px] text-sky-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:1833","data-source-comp":"App",children:x.filter(s=>s.active!==!1&&s.type==="casual").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-amber-50/70 border border-amber-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5117:2027","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-amber-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5117:2098","data-source-comp":"App",children:"The Herd"}),r.jsx("div",{className:"text-[8px] italic text-amber-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5117:2191","data-source-comp":"App",children:"(Various beasts)"}),r.jsxs("div",{className:"text-lg font-extrabold text-amber-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:2305","data-source-comp":"App",children:[me.filter(s=>s.active!==!1).length," Pets"]}),r.jsx("div",{className:"text-[11px] text-amber-800 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:2433","data-source-comp":"App",children:me.filter(s=>s.active!==!1).map(s=>s.name).join(", ")||"None"})]})]}),r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:2609","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5117:2636","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5117:2703","data-source-comp":"App",children:[r.jsx(gs,{className:"w-4 h-4 text-indigo-600"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5117:2789","data-source-comp":"App",children:"Household Members"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5117:2860","data-source-comp":"App",children:"Rows 5–11 • Linked Data"})]}),r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:3007","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5117:3048","data-source-comp":"App",children:[x.length," Registered Occupants"]}),r.jsxs("button",{type:"button",onClick:()=>zr(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer",title:"Add a new household member","data-source-loc":"weekly_chores_household_hub.tsx:5117:3143","data-source-comp":"App",children:[r.jsx(ys,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5117:3436","data-source-comp":"App",children:"Add Member"})]})]})]}),r.jsx("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5117:3480","data-source-comp":"App",children:r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5117:3560","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5117:3604","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5117:3727","data-source-comp":"App",children:[r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:3731","data-source-comp":"App",children:"Name"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:3760","data-source-comp":"App",children:"Role"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:3789","data-source-comp":"App",children:"Occupancy"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5117:3823","data-source-comp":"App",children:"Special Rotation Groups"}),r.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5117:3871","data-source-comp":"App",children:"Active Status"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5117:3921","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5117:3977","data-source-comp":"App",children:x.length===0?r.jsx("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5117:4052","data-source-comp":"App",children:r.jsx("td",{colSpan:6,className:"text-center py-8 text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5117:4056","data-source-comp":"App",children:r.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5117:4116","data-source-comp":"App",children:[r.jsx(gs,{className:"w-5 h-5 text-slate-300"}),r.jsx("span",{className:"font-semibold text-slate-600 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5117:4227","data-source-comp":"App",children:"No household members added yet"}),r.jsx("span",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5117:4319","data-source-comp":"App",children:"Click “+ Add Member” above to register your family members."})]})})}):x.map(s=>{const i=s.role==="Supreme Overlord"||s.role==="Overseer Supreme"?"Supreme Overlord":"Minion",c=s.type==="biweekly"?"Bi-Weekly":s.type==="casual"?"Casual":"Full-Time",m=["Parents","Kids","Non-Casual","All"],p=String(s.specialGroups||"").split(",").map(C=>C.trim()).filter(Boolean),h=As===s.index_,d=Qr===s.index_,f=()=>{const C=Fn.trim()||s.name;mn(s.index_,{name:C}),lr(null)},y=C=>{const D=new Set(p);D.has(C)?D.delete(C):D.add(C);const T=m.filter(b=>D.has(b));mn(s.index_,{specialGroups:T.join(", ")})};return r.jsxs("tr",{className:`transition ${d?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5146:20","data-source-comp":"App",children:[r.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5146:153","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5146:202","data-source-comp":"App",children:[r.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5146:243","data-source-comp":"App"}),d?r.jsx("input",{type:"text",value:Fn,onChange:C=>On(C.target.value),onKeyDown:C=>{C.key==="Enter"&&f(),C.key==="Escape"&&lr(null)},className:"w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5148:37","data-source-comp":"App"}):r.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5148:424","data-source-comp":"App",children:s.name})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5148:499","data-source-comp":"App",children:r.jsxs("select",{value:i,onChange:C=>mn(s.index_,{role:C.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${i==="Supreme Overlord"?"bg-amber-100 text-amber-900 border border-amber-300":"bg-indigo-50 text-indigo-800 border border-indigo-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5148:519","data-source-comp":"App",children:[r.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5148:901","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),r.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5148:968","data-source-comp":"App",children:"Minion (Kid)"})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5148:1026","data-source-comp":"App",children:r.jsxs("select",{value:c,onChange:C=>mn(s.index_,{residency:C.target.value}),className:`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${c==="Bi-Weekly"?"bg-pink-50 text-pink-700 border border-pink-200":c==="Casual"?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5148:1046","data-source-comp":"App",children:[r.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5148:1493","data-source-comp":"App",children:"Full-Time"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5148:1537","data-source-comp":"App",children:"Bi-Weekly"}),r.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5148:1581","data-source-comp":"App",children:"Casual"})]})}),r.jsxs("td",{className:"p-3 relative","data-source-loc":"weekly_chores_household_hub.tsx:5148:1633","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>En(h?null:s.index_),className:"w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5148:1662","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5148:2029","data-source-comp":"App",children:p.length>0?p.join(", "):"None selected"}),r.jsx(ud,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${h?"rotate-180 text-indigo-600":""}`})]}),h&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>En(null),"data-source-loc":"weekly_chores_household_hub.tsx:5148:2306","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5148:2393","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5148:2518","data-source-comp":"App",children:"Rotation Groups"}),m.map(C=>{const D=p.includes(C);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5150:22","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:D,onChange:()=>y(C),className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5150:164","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${D?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5150:353","data-source-comp":"App",children:C})]},C)})]})]})]}),r.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5151:31","data-source-comp":"App",children:r.jsxs("select",{value:s.active?"true":"false",onChange:C=>mn(s.index_,{active:C.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5151:63","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5151:471","data-source-comp":"App",children:"✓ Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5151:518","data-source-comp":"App",children:"○ Inactive"})]})}),r.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5151:582","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5151:613","data-source-comp":"App",children:[d?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:f,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save name","data-source-loc":"weekly_chores_household_hub.tsx:5151:694","data-source-comp":"App",children:r.jsx(cd,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>lr(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel","data-source-loc":"weekly_chores_household_hub.tsx:5151:922","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{lr(s.index_),On(s.name)},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Rename ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5151:1157","data-source-comp":"App",children:r.jsx(Io,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Ol(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Members`,"data-source-loc":"weekly_chores_household_hub.tsx:5154:201","data-source-comp":"App",children:r.jsx(ro,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:42","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5155:105","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5155:172","data-source-comp":"App",children:[r.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5155:213","data-source-comp":"App",children:"🐾"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5155:261","data-source-comp":"App",children:"Household Pets"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5155:329","data-source-comp":"App",children:"Rows 27–32 • Linked Data"})]}),r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:501","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5155:542","data-source-comp":"App",children:[me.length," Registered Pets"]}),r.jsxs("button",{type:"button",onClick:()=>In(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer",title:"Add a new household pet member","data-source-loc":"weekly_chores_household_hub.tsx:5155:629","data-source-comp":"App",children:[r.jsx(ys,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5155:921","data-source-comp":"App",children:"Add Member"})]})]})]}),r.jsx("div",{className:"overflow-x-auto border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5155:965","data-source-comp":"App",children:r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5155:1044","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5155:1088","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5155:1211","data-source-comp":"App",children:[r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:1215","data-source-comp":"App",children:"Name"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:1244","data-source-comp":"App",children:"Species"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:1276","data-source-comp":"App",children:"Feeding Routine"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:1316","data-source-comp":"App",children:"Care Responsibilities"}),r.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5155:1362","data-source-comp":"App",children:"Active Status"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5155:1412","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5155:1468","data-source-comp":"App",children:me.length===0?r.jsx("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5155:1540","data-source-comp":"App",children:r.jsx("td",{colSpan:6,className:"text-center py-8 text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5155:1544","data-source-comp":"App",children:r.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5155:1604","data-source-comp":"App",children:[r.jsx("span",{className:"text-xl opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5155:1671","data-source-comp":"App",children:"🐾"}),r.jsx("span",{className:"font-semibold text-slate-600 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5155:1717","data-source-comp":"App",children:"No household pets registered yet"}),r.jsx("span",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5155:1811","data-source-comp":"App",children:"Click “+ Add Member” above to register your pets."})]})})}):me.map(s=>{const i=["Dog","Cat","Bird","Fish","Small Pet","Other"],c=s.type||"Dog";i.includes(c)||i.unshift(c);const m=Aa===s.index_,p=()=>{const h=Fr.name.trim()||s.name;qs(s.index_,{name:h,routine:Fr.routine.trim(),care:Fr.care.trim()}),Yr(null)};return r.jsxs("tr",{className:`transition ${m?"bg-amber-50/60":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5171:20","data-source-comp":"App",children:[r.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5171:143","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5171:192","data-source-comp":"App",children:[r.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5171:233","data-source-comp":"App"}),r.jsx("span",{className:"text-base shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5171:322","data-source-comp":"App",children:s.icon}),m?r.jsx("input",{type:"text",value:Fr.name,onChange:h=>ar(d=>({...d,name:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&Yr(null)},className:"w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5171:392","data-source-comp":"App"}):r.jsx("span",{className:"px-2 py-0.5 rounded-full font-bold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5171:801","data-source-comp":"App",children:s.name})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5171:980","data-source-comp":"App",children:r.jsx("select",{value:c,onChange:h=>qs(s.index_,{type:h.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${c==="Dog"?"bg-amber-100 text-amber-900 border border-amber-300":c==="Cat"?"bg-orange-50 text-orange-800 border border-orange-200":"bg-slate-100 text-slate-800 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5171:1000","data-source-comp":"App",children:i.map(h=>r.jsx("option",{value:h,"data-source-loc":"weekly_chores_household_hub.tsx:5171:1485","data-source-comp":"App",children:h},h))})}),r.jsx("td",{className:"p-3 font-medium text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5171:1542","data-source-comp":"App",children:m?r.jsx("input",{type:"text",value:Fr.routine,onChange:h=>ar(d=>({...d,routine:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&Yr(null)},className:"w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5171:1605","data-source-comp":"App"}):s.routine}),r.jsx("td",{className:"p-3 text-slate-600 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5171:2045","data-source-comp":"App",children:m?r.jsx("input",{type:"text",value:Fr.care,onChange:h=>ar(d=>({...d,care:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&Yr(null)},className:"w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5171:2105","data-source-comp":"App"}):s.care}),r.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5171:2524","data-source-comp":"App",children:r.jsxs("select",{value:s.active?"true":"false",onChange:h=>qs(s.index_,{active:h.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5171:2556","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5171:2951","data-source-comp":"App",children:"✓ Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5171:2998","data-source-comp":"App",children:"○ Inactive"})]})}),r.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5171:3062","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5171:3093","data-source-comp":"App",children:[m?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:p,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5171:3171","data-source-comp":"App",children:r.jsx(cd,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Yr(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5171:3399","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{Yr(s.index_),ar({name:s.name,routine:s.routine,care:s.care})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5171:3639","data-source-comp":"App",children:r.jsx(Io,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Pl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Pets`,"data-source-loc":"weekly_chores_household_hub.tsx:5178:196","data-source-comp":"App",children:r.jsx(ro,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5179:42","data-source-comp":"App",children:[r.jsx("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5179:105","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5179:156","data-source-comp":"App",children:[r.jsx(ep,{className:"w-4 h-4 text-purple-600"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5179:243","data-source-comp":"App",children:"Occupancy Categories & Rules"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5179:325","data-source-comp":"App",children:"Rows 14–17"})]})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:451","data-source-comp":"App",children:W.map(s=>r.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:549","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5179:658","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5179:709","data-source-comp":"App",children:s.type}),r.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5179:777","data-source-comp":"App",children:"Active"})]}),r.jsx("div",{className:"text-[11px] font-semibold text-indigo-700","data-source-loc":"weekly_chores_household_hub.tsx:5179:888","data-source-comp":"App",children:s.description}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5179:970","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5179:1025","data-source-comp":"App",children:"Rule:"})," ",s.rules]})]},s.type))})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:1087","data-source-comp":"App",children:[r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5179:1186","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5179:1213","data-source-comp":"App",children:[r.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5179:1264","data-source-comp":"App",children:[r.jsx(gs,{className:"w-4 h-4 text-indigo-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5179:1384","data-source-comp":"App",children:"Special Rotation Groups"})]}),r.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5179:1425","data-source-comp":"App",children:"Rows 20–25"})]}),r.jsx("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5179:1507","data-source-comp":"App",children:R.map(s=>r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:1563","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5179:1656","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5179:1707","data-source-comp":"App",children:s.name}),r.jsx("span",{className:"text-[10px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5179:1767","data-source-comp":"App",children:"Group"})]}),r.jsx("div",{className:"text-[11px] text-slate-600 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5179:1842","data-source-comp":"App",children:s.members})]},s.name))})]}),r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5179:1943","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5179:1970","data-source-comp":"App",children:[r.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5179:2021","data-source-comp":"App",children:[r.jsx(rp,{className:"w-4 h-4 text-purple-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5179:2145","data-source-comp":"App",children:"Schedule Configurations"})]}),r.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5179:2186","data-source-comp":"App",children:"Rows 18–21"})]}),r.jsxs("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5179:2268","data-source-comp":"App",children:[r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:2295","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5179:2373","data-source-comp":"App",children:"Active Week Start Date"}),r.jsx("div",{className:"text-sm font-extrabold text-indigo-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5179:2451","data-source-comp":"App",children:K.activeWeekStart}),r.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5179:2555","data-source-comp":"App",children:"Scope: Printable Weekly Schedule"})]}),r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:2645","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5179:2723","data-source-comp":"App",children:"Custody Schedule Rotation"}),r.jsx("div",{className:"text-sm font-extrabold text-pink-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5179:2804","data-source-comp":"App",children:K.custodyRotation}),r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5179:2906","data-source-comp":"App",children:["Bi-Weekly Schedule • Members: ",K.custodyMembers]})]}),r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:3037","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5179:3115","data-source-comp":"App",children:"Waste / Recycling Schedule Rotation"}),r.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5179:3206","data-source-comp":"App",children:K.wasteRotation}),r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5179:3306","data-source-comp":"App",children:["Alternating weeks • Members: ",K.wasteMembers]})]})]})]})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5179:3452","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5179:3515","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5179:3596","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5179:3601","data-source-comp":"App",children:[r.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5179:3642","data-source-comp":"App",children:r.jsx(Cl,{className:"w-4 h-4"})}),r.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5179:3784","data-source-comp":"App",children:"Master Chores Template & Registry"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5179:3873","data-source-comp":"App",children:[xe.length," Tasks • Rows 5–15 (Cols 6–10)"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5179:4084","data-source-comp":"App",children:"Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet."})]}),r.jsx("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5179:4292","data-source-comp":"App",children:r.jsx("button",{onClick:()=>{mo(s=>!s)},className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer",title:"Add a new master chore","data-source-loc":"weekly_chores_household_hub.tsx:5179:4343","data-source-comp":"App",children:Ca?r.jsxs(r.Fragment,{children:[r.jsx(Gt,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5181:253","data-source-comp":"App",children:"Close Add Chore"})]}):r.jsxs(r.Fragment,{children:[r.jsx(ys,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5181:317","data-source-comp":"App",children:"Add Chore"})]})})})]}),Ca&&r.jsxs("div",{className:"my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn","data-source-loc":"weekly_chores_household_hub.tsx:5181:386","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5181:516","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-sm text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5181:599","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 text-indigo-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5181:720","data-source-comp":"App",children:"Add New Master Chore to Household Hub"})]}),r.jsx("button",{onClick:()=>mo(!1),className:"text-slate-400 hover:text-slate-700 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5181:776","data-source-comp":"App",children:r.jsx(Gt,{className:"w-4 h-4"})})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5181:920","data-source-comp":"App",children:[r.jsxs("div",{className:"md:col-span-2","data-source-loc":"weekly_chores_household_hub.tsx:5181:983","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5181:1014","data-source-comp":"App",children:["Chore Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5181:1096","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:Qe.task,onChange:s=>qt(i=>({...i,task:s.target.value})),onKeyDown:s=>{s.key==="Enter"&&Qe.task.trim()&&jt(Qe)},placeholder:"e.g. Empty dishwasher, sanitize counters, sweep porch...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5181:1148","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5190:261","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5190:266","data-source-comp":"App",children:"Category"}),r.jsx("select",{value:Qe.category,onChange:s=>qt(i=>({...i,category:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5190:337","data-source-comp":"App",children:An.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5195:201","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5195:282","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5195:287","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:Qe.frequency,onChange:s=>{const i=s.target.value;qt(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5195:359","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5204:172","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5204:208","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5204:256","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5204:315","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5204:320","data-source-comp":"App",children:"Target Day(s)"}),r.jsx("select",{value:Qe.targetDay,onChange:s=>qt(i=>({...i,targetDay:s.target.value})),className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5204:396","data-source-comp":"App"}),r.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5209:37","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Lr(Ft==="NEW_CHORE"?null:"NEW_CHORE"),className:"w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5209:63","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5209:423","data-source-comp":"App",children:Qe.targetDay||"Select days..."}),r.jsx(ud,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${Ft==="NEW_CHORE"?"rotate-180 text-indigo-600":""}`})]}),Ft==="NEW_CHORE"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Lr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5209:719","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5209:804","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5209:929","data-source-comp":"App",children:"Select Day(s)"}),gr.map(s=>{const i=Qe.selectedTargetDays||Ir(Qe.targetDay).selectedDays,c=i.includes(s);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5209:1268","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:c,onChange:()=>{const m=new Set(i);m.has(s)?m.delete(s):m.add(s);const p=gr.filter(d=>m.has(d)),h=Ur(p,!!Qe.customTargetEnabled,Qe.customTargetText||"");qt(d=>({...d,selectedTargetDays:p,targetDay:h}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5209:1408","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${c?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5209:1962","data-source-comp":"App",children:s})]},s)}),r.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5209:2093","data-source-comp":"App",children:[r.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5209:2170","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:!!Qe.customTargetEnabled,onChange:s=>{const i=s.target.checked,c=Qe.selectedTargetDays||Ir(Qe.targetDay).selectedDays,m=Ur(c,i,Qe.customTargetText||"");qt(p=>({...p,customTargetEnabled:i,targetDay:m}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5209:2242","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${Qe.customTargetEnabled?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5209:2800","data-source-comp":"App",children:"Custom"})]}),r.jsx("input",{type:"text",value:Qe.customTargetText||"",onChange:s=>{const i=s.target.value,c=Qe.selectedTargetDays||[],m=Ur(c,!0,i);qt(p=>({...p,customTargetEnabled:!0,customTargetText:i,targetDay:m}))},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5209:2948","data-source-comp":"App"})]})]})]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5209:3539","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5209:3544","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Qe.rotationGroup==="All Non-Casual"?"Non-Casual":Qe.rotationGroup,onChange:s=>qt(i=>({...i,rotationGroup:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5209:3621","data-source-comp":"App",children:[r.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5214:174","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5214:216","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5214:262","data-source-comp":"App",children:"Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5214:296","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5214:336","data-source-comp":"App",children:"All"})]}),r.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5214:379","data-source-comp":"App",children:x.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5214:440","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))})]})]}),r.jsxs("div",{className:"md:col-span-3","data-source-loc":"weekly_chores_household_hub.tsx:5214:539","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5214:570","data-source-comp":"App",children:"Operational Notes / Routine"}),r.jsx("input",{type:"text",value:Qe.notes,onChange:s=>qt(i=>({...i,notes:s.target.value})),placeholder:"Instructions, supplies, details or timing notes...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5214:660","data-source-comp":"App"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5219:238","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>mo(!1),className:"px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition","data-source-loc":"weekly_chores_household_hub.tsx:5219:310","data-source-comp":"App",children:"Cancel"}),r.jsxs("button",{type:"button",onClick:()=>jt({...Qe,rotationGroup:Qe.rotationGroup==="All Non-Casual"?"Non-Casual":Qe.rotationGroup}),disabled:!Qe.task.trim(),className:"px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5219:493","data-source-comp":"App",children:[r.jsx(ys,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5219:924","data-source-comp":"App",children:"Add Chore to Master List"})]})]})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5219:983","data-source-comp":"App",children:[r.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5219:1038","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5219:1106","data-source-comp":"App",children:"Total Template Chores"}),r.jsxs("div",{className:"text-xl font-bold text-slate-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5219:1220","data-source-comp":"App",children:[xe.length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5219:1317","data-source-comp":"App",children:"All registered tasks"})]}),r.jsxs("div",{className:"p-3 bg-blue-50/70 rounded-xl border border-blue-200","data-source-loc":"weekly_chores_household_hub.tsx:5219:1395","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5219:1464","data-source-comp":"App",children:"Daily Chores"}),r.jsxs("div",{className:"text-xl font-bold text-blue-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5219:1568","data-source-comp":"App",children:[xe.filter(s=>s.frequency.toLowerCase().includes("daily")).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-blue-600","data-source-loc":"weekly_chores_household_hub.tsx:5219:1721","data-source-comp":"App",children:"Mon – Sun rotation"})]}),r.jsxs("div",{className:"p-3 bg-purple-50/70 rounded-xl border border-purple-200","data-source-loc":"weekly_chores_household_hub.tsx:5219:1796","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-purple-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5219:1869","data-source-comp":"App",children:"Once a Week"}),r.jsxs("div",{className:"text-xl font-bold text-purple-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5219:1974","data-source-comp":"App",children:[xe.filter(s=>{const i=(s.frequency||"").toLowerCase();return(i.includes("weekly")||i.includes("once"))&&!i.includes("bi")}).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-purple-600","data-source-loc":"weekly_chores_household_hub.tsx:5219:2208","data-source-comp":"App",children:"Saturday & Sunday deep tasks"})]}),r.jsxs("div",{className:"p-3 bg-amber-50/70 rounded-xl border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5219:2295","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5219:2366","data-source-comp":"App",children:"Bi-Weekly Tasks"}),r.jsxs("div",{className:"text-xl font-bold text-amber-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5219:2474","data-source-comp":"App",children:[xe.filter(s=>s.frequency.toLowerCase().includes("bi-weekly")||s.frequency.toLowerCase().includes("biweekly")).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5219:2682","data-source-comp":"App",children:"Split Curbside Recycling & Waste"})]})]}),r.jsxs("div",{className:"pt-2 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5219:2778","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5219:2810","data-source-comp":"App",children:[r.jsxs("div",{className:"relative flex-1 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5219:2891","data-source-comp":"App",children:[r.jsx(md,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search chores by name, category, group, or notes...",value:Gr,onChange:s=>Ls(s.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5219:3006","data-source-comp":"App"}),Gr&&r.jsx("button",{onClick:()=>Ls(""),className:"absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5219:3354","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}),r.jsxs("div",{className:"flex items-center gap-1.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5219:3523","data-source-comp":"App",children:[r.jsx("span",{className:"text-slate-500 font-semibold mr-1","data-source-loc":"weekly_chores_household_hub.tsx:5219:3574","data-source-comp":"App",children:"Frequency:"}),r.jsx("button",{onClick:()=>Ln("ALL"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Mr==="ALL"?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5219:3643","data-source-comp":"App",children:"All"}),r.jsx("button",{onClick:()=>Ln("Daily"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Mr==="Daily"?"bg-blue-600 text-white":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5219:3887","data-source-comp":"App",children:"Daily"}),r.jsx("button",{onClick:()=>Ln("Once a Week"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Mr==="Once a Week"?"bg-purple-600 text-white":"bg-purple-50 text-purple-700 hover:bg-purple-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5219:4132","data-source-comp":"App",children:"Weekly"}),r.jsx("button",{onClick:()=>Ln("Bi-Weekly"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Mr==="Bi-Weekly"?"bg-amber-600 text-white":"bg-amber-50 text-amber-800 hover:bg-amber-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5219:4398","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5219:4671","data-source-comp":"App",children:[r.jsx("span",{className:"text-slate-400 font-semibold mr-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5219:4743","data-source-comp":"App",children:"Category:"}),r.jsxs("button",{onClick:()=>Rs("ALL"),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${rt==="ALL"?"bg-slate-800 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5219:4820","data-source-comp":"App",children:["All Categories (",xe.length,")"]}),An.map(s=>{const i=xe.filter(c=>c.category.toLowerCase()===s.name.toLowerCase()).length;return r.jsxs("button",{onClick:()=>Rs(s.name),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${rt===s.name?"ring-2 ring-slate-800 shadow-xs":"opacity-85 hover:opacity-100"} ${s.bg} ${s.text} ${s.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5221:20","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5221:339","data-source-comp":"App",children:s.icon}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5221:362","data-source-comp":"App",children:s.name}),r.jsxs("span",{className:"text-[10px] opacity-75","data-source-loc":"weekly_chores_household_hub.tsx:5221:385","data-source-comp":"App",children:["(",i,")"]})]},s.id)})]})]}),r.jsxs("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5222:26","data-source-comp":"App",children:[r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5222:106","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5222:150","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5222:273","data-source-comp":"App",children:[r.jsx("th",{className:"p-3 w-10 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5222:277","data-source-comp":"App",children:"#"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5222:320","data-source-comp":"App",children:"Chore / Task"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5222:357","data-source-comp":"App",children:"Category"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5222:390","data-source-comp":"App",children:"Frequency"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5222:424","data-source-comp":"App",children:"Target Day(s)"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5222:462","data-source-comp":"App",children:"Rotation Group"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5222:501","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5222:557","data-source-comp":"App",children:Vr.length===0?r.jsx("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5222:601","data-source-comp":"App",children:r.jsx("td",{colSpan:7,className:"text-center py-8 text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5222:605","data-source-comp":"App",children:r.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5222:665","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-5 h-5 text-slate-300"}),r.jsx("span",{className:"font-semibold text-slate-600 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5222:779","data-source-comp":"App",children:"No master chores registered yet"}),r.jsx("span",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5222:872","data-source-comp":"App",children:"Click “+ Add Chore” above to build your household chore list."})]})})}):Vr.map((s,i)=>{const c=Is===s.index_,m=An.find(I=>I.name.toLowerCase()===(s.category||"").toLowerCase())||An[3],p=c&&(Ie!=null&&Ie.category)&&An.find(I=>I.name.toLowerCase()===Ie.category.toLowerCase())||m,h=(s.frequency||"").toLowerCase().includes("bi")?"Bi-Weekly":(s.frequency||"").toLowerCase().includes("once")||(s.frequency||"").toLowerCase().includes("weekly")?"Once a Week":"Daily",d=c&&(Ie!=null&&Ie.frequency)?Ie.frequency:h,f=s.targetDay||(h==="Daily"?"Mon – Sun":h==="Bi-Weekly"?"Thursday Evening":"Saturday"),y=c&&(Ie==null?void 0:Ie.targetDay)!==void 0?Ie.targetDay:f,C=Ir(y),D=c&&Array.isArray(Ie==null?void 0:Ie.selectedTargetDays)?Ie.selectedTargetDays:C.selectedDays,T=c&&(Ie==null?void 0:Ie.customTargetEnabled)!==void 0?!!Ie.customTargetEnabled:C.customEnabled,b=c&&(Ie==null?void 0:Ie.customTargetText)!==void 0?Ie.customTargetText:C.customText,N=c&&Ft===s.index_,P=s.rotationGroup||"Non-Casual",V=c&&(Ie!=null&&Ie.rotationGroup)?Ie.rotationGroup:P,O=()=>{const I=((Ie==null?void 0:Ie.task)||"").trim()||s.task,Z=((Ie==null?void 0:Ie.notes)||"").trim(),ne=Ur(D,T,b);Lr(null),$s(s.index_,{oldTask:s.task,task:I,category:p.name,frequency:d,targetDay:ne,rotationGroup:V,notes:Z})};return r.jsxs(oo.Fragment,{children:[r.jsxs("tr",{className:`transition ${i>0?"border-t border-slate-200":""} ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5260:75","data-source-comp":"App",children:[r.jsx("td",{className:"px-3 pt-3 pb-1.5 text-center align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5260:208","data-source-comp":"App",children:r.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5260:266","data-source-comp":"App",children:i+1})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5260:416","data-source-comp":"App",children:c?r.jsx("input",{type:"text",value:(Ie==null?void 0:Ie.task)||"",onChange:I=>It(Z=>({...Z,task:I.target.value})),onKeyDown:I=>{I.key==="Enter"&&O(),I.key==="Escape"&&(Lr(null),Rr(null),It(null))},className:"w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5260:518","data-source-comp":"App"}):r.jsx("span",{className:"font-bold text-slate-900 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5260:1055","data-source-comp":"App",children:s.task})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5260:1133","data-source-comp":"App",children:c?r.jsx("select",{value:p.name,onChange:I=>It(Z=>({...Z,category:I.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${p.bg} ${p.text} ${p.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5260:1192","data-source-comp":"App",children:An.map(I=>r.jsxs("option",{value:I.name,"data-source-loc":"weekly_chores_household_hub.tsx:5260:1545","data-source-comp":"App",children:[I.icon," ",I.name]},I.id))}):r.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${m.bg} ${m.text} ${m.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5260:1623","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5260:1780","data-source-comp":"App",children:m.icon}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5260:1809","data-source-comp":"App",children:m.name})]})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5260:1851","data-source-comp":"App",children:c?r.jsxs("select",{value:d,onChange:I=>{const Z=I.target.value,ne=Z==="Daily"?"Mon – Sun":Z==="Bi-Weekly"?"Thursday Evening":y==="Mon – Sun"?"Saturday":y,Ee=Ir(ne);It(Ke=>({...Ke,frequency:Z,targetDay:ne,selectedTargetDays:Ee.selectedDays,customTargetEnabled:Ee.customEnabled,customTargetText:Ee.customText}))},className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${d==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":d==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5260:1910","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5272:354","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5272:390","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5272:438","data-source-comp":"App",children:"Bi-Weekly"})]}):r.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${h==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":h==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5272:494","data-source-comp":"App",children:h})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle relative","data-source-loc":"weekly_chores_household_hub.tsx:5272:806","data-source-comp":"App",children:c?r.jsxs(r.Fragment,{children:[r.jsxs("button",{type:"button",onClick:()=>Lr(N?null:s.index_),className:"min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5272:876","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5272:1232","data-source-comp":"App",children:Ur(D,T,b)}),r.jsx(ud,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${N?"rotate-180 text-indigo-600":""}`})]}),N&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Lr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5272:1516","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5272:1601","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5272:1726","data-source-comp":"App",children:"Target Day(s)"}),gr.map(I=>{const Z=D.includes(I);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5274:22","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:Z,onChange:()=>{const ne=new Set(D);ne.has(I)?ne.delete(I):ne.add(I);const Ee=gr.filter(at=>ne.has(at)),Ke=Ur(Ee,T,b);It(at=>({...at,selectedTargetDays:Ee,targetDay:Ke}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5274:162","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${Z?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5285:122","data-source-comp":"App",children:I})]},I)}),r.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5286:16","data-source-comp":"App",children:[r.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5286:93","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:T,onChange:I=>{const Z=I.target.checked,ne=Ur(D,Z,b);It(Ee=>({...Ee,customTargetEnabled:Z,targetDay:ne}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5286:165","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${T?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5294:120","data-source-comp":"App",children:"Custom"})]}),r.jsx("input",{type:"text",value:b,onChange:I=>{const Z=I.target.value,ne=Ur(D,!0,Z);It(Ee=>({...Ee,customTargetEnabled:!0,customTargetText:Z,targetDay:ne}))},onKeyDown:I=>{I.key==="Enter"&&Lr(null)},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5294:252","data-source-comp":"App"})]})]})]})]}):r.jsx("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5303:327","data-source-comp":"App",children:f})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5303:502","data-source-comp":"App",children:c?r.jsxs("select",{value:V,onChange:I=>It(Z=>({...Z,rotationGroup:I.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${V==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":V==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":V==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":V==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5303:561","data-source-comp":"App",children:[r.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5303:1181","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5303:1223","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5303:1269","data-source-comp":"App",children:"Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5303:1303","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5303:1343","data-source-comp":"App",children:"All"})]}),r.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5303:1386","data-source-comp":"App",children:x.map(I=>r.jsx("option",{value:I.name,"data-source-loc":"weekly_chores_household_hub.tsx:5303:1447","data-source-comp":"App",children:I.name},I.id))})]}):r.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${P==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":P==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":P==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":P==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5303:1523","data-source-comp":"App",children:P})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5303:1987","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5303:2062","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>Vo(s,"up"),disabled:i===0,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore up","data-source-loc":"weekly_chores_household_hub.tsx:5303:2122","data-source-comp":"App",children:r.jsx(Cu,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Vo(s,"down"),disabled:i===Vr.length-1,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore down","data-source-loc":"weekly_chores_household_hub.tsx:5303:2404","data-source-comp":"App",children:r.jsx(ku,{className:"w-3.5 h-3.5"})}),c?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:O,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5303:2737","data-source-comp":"App",children:r.jsx(cd,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>{Lr(null),Rr(null),It(null)},className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5303:2967","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{const I=Ir(f);Lr(null),Rr(s.index_),It({task:s.task||"",category:m.name,frequency:h,targetDay:f,selectedTargetDays:I.selectedDays,customTargetEnabled:I.customEnabled,customTargetText:I.customText,rotationGroup:P,notes:s.notes||""})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.task}`,"data-source-loc":"weekly_chores_household_hub.tsx:5303:3275","data-source-comp":"App",children:r.jsx(Io,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>_o(s.index_,s.task),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove "${s.task}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5318:195","data-source-comp":"App",children:r.jsx(ro,{className:"w-3.5 h-3.5"})})]})})]}),r.jsxs("tr",{className:`transition ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5318:472","data-source-comp":"App",children:[r.jsx("td",{className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5318:559","data-source-comp":"App"}),r.jsx("td",{colSpan:6,className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5318:592","data-source-comp":"App",children:c?r.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5318:648","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-[11px] text-indigo-800 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5318:806","data-source-comp":"App",children:"Instructions / Notes:"}),r.jsx("input",{type:"text",value:(Ie==null?void 0:Ie.notes)||"",onChange:I=>It(Z=>({...Z,notes:I.target.value})),onKeyDown:I=>{I.key==="Enter"&&O(),I.key==="Escape"&&(Rr(null),It(null))},placeholder:"Add operational instructions or routine notes...",className:"w-full text-xs text-slate-800 bg-transparent focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5318:899","data-source-comp":"App"})]}):r.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5318:1380","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5318:1502","data-source-comp":"App",children:"Instructions / Notes:"})," ",s.notes||r.jsx("span",{className:"italic text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5318:1591","data-source-comp":"App",children:"No instructions"})]})})]})]},`${s.index_||s.task}-${i}`)})})]}),Vr.length===0&&r.jsxs("div",{className:"p-8 text-center bg-white text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5319:68","data-source-comp":"App",children:[r.jsx(Cl,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),r.jsx("p",{className:"font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5319:185","data-source-comp":"App",children:"No chores match the current filters"}),xe.length===0?r.jsx("button",{onClick:()=>mo(!0),className:"mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5319:285","data-source-comp":"App",children:"Add First Chore"}):r.jsx("button",{onClick:()=>{Rs("ALL"),Ln("ALL"),Ls("")},className:"mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5319:446","data-source-comp":"App",children:"Reset Filters"})]})]})]})]})})]}),Lt&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5319:751","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5319:857","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5319:989","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5319:1068","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5319:1073","data-source-comp":"App",children:"Day Schedule"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5319:1172","data-source-comp":"App",children:(()=>{const s=Mt(Lt);return s?new Date(s.year,s.month,s.day).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}):Lt})()})]}),r.jsx("button",{onClick:()=>ln(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5329:27","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5329:204","data-source-comp":"App",children:[r.jsxs("span",{className:"text-slate-600 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5329:305","data-source-comp":"App",children:[fe.filter(s=>{var i,c;return(c=(i=pt[Lt])==null?void 0:i[s.index_])==null?void 0:c.done}).length," of"," ",fe.length," completed"]}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5332:72","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>{fe.forEach(s=>{Or(Lt,s.index_,{done:!0})})},className:"px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5332:100","data-source-comp":"App",children:"Mark All Done"}),r.jsx("button",{onClick:()=>{fe.forEach(s=>{Or(Lt,s.index_,{done:!1})})},className:"px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5338:142","data-source-comp":"App",children:"Reset All"})]})]}),r.jsx("div",{className:"p-4 overflow-y-auto space-y-2 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5344:144","data-source-comp":"App",children:fe.map(s=>{var i,c,m,p,h;const d=hn(Lt,s.index_),f=Jr(s),y=Mt(Lt),C=y?(new Date(y.year,y.month,y.day).getDay()+6)%7:0,D=s.task||((i=s.row)==null?void 0:i[0])||"",T=D.toLowerCase(),b=T.includes("deep clean")||T.includes("feeding station")?C===6:T.includes("recycling")?C===3&&y&&Rt("recycling",y.year,y.month,y.day):T.includes("waste")?C===3&&y&&Rt("waste",y.year,y.month,y.day):f.frequency==="daily"?!0:f.frequency==="weekly"?C===f.dayOfWeek:f.frequency==="biweekly"?C===f.dayOfWeek&&y&&Rt(D,y.year,y.month,y.day):!1;return r.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col gap-2 transition ${d.done?"bg-emerald-50/60 border-emerald-200":f.frequency==="weekly"&&b?"bg-purple-50/60 border-purple-200":"bg-white border-slate-200 hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5367:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5367:309","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5367:366","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>Or(Lt,s.index_,{done:!d.done}),className:"text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5367:424","data-source-comp":"App",children:d.done?r.jsx(xd,{className:"w-5 h-5 text-emerald-600"}):r.jsx(ju,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex items-center gap-1.5 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5369:199","data-source-comp":"App",children:[r.jsx("span",{className:`text-xs font-semibold truncate ${d.done?"line-through text-slate-500":"text-slate-800"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5369:250","data-source-comp":"App",children:s.task||s.row[0]}),f.frequency==="weekly"&&r.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${b?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5369:428","data-source-comp":"App",children:b?"1x/wk (Today)":`1x/wk (${(c=Ut[f.dayOfWeek])==null?void 0:c.short})`})]})]}),hr(s.task||s.row[0])?r.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded border shrink-0",style:{backgroundColor:((m=Ce(hr(s.task||s.row[0])))==null?void 0:m.bg)||"#FCE7F3",color:((p=Ce(hr(s.task||s.row[0])))==null?void 0:p.text)||"#BE185D",borderColor:(((h=Ce(hr(s.task||s.row[0])))==null?void 0:h.color)||"#ec4899")+"50"},"data-source-loc":"weekly_chores_household_hub.tsx:5369:805","data-source-comp":"App",children:hr(s.task||s.row[0])}):sn(s.task||s.row[0])?r.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5373:110","data-source-comp":"App",children:"Each Child"}):r.jsxs("select",{value:d.who,onChange:N=>Or(Lt,s.index_,{who:N.target.value}),className:"text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs",style:{color:d.who?"#0f172a":"#334155"},"data-source-loc":"weekly_chores_household_hub.tsx:5373:244","data-source-comp":"App",children:[r.jsx("option",{value:"",style:{color:"#64748b",backgroundColor:"#FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5377:16","data-source-comp":"App",children:"Unassigned"}),r.jsx("optgroup",{label:"Full-Time Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5380:35","data-source-comp":"App",children:x.filter(N=>N.type==="regular").map(N=>r.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5384:74","data-source-comp":"App",children:[N.name,N.role?` (${N.role})`:""]},N.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5388:76","data-source-comp":"App",children:x.filter(N=>N.type==="biweekly").map(N=>{const P=Mt(Lt),V=P?ao(P.year,P.month,P.day):null,O=V!=null&&V.isArrivalDay?" (Arrives 5 PM)":V!=null&&V.isDepartureDay?" (Leaves 5 PM)":V!=null&&V.isPresent?" (Here)":" (Away)";return r.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5396:22","data-source-comp":"App",children:[N.name,O]},N.id)})}),r.jsx("optgroup",{label:"Casual Assignees (Lesser Scale)",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5401:27","data-source-comp":"App",children:x.filter(N=>N.type==="casual").map(N=>r.jsx("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5405:73","data-source-comp":"App",children:N.name},N.id))}),r.jsxs("optgroup",{label:"Special Groups",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5409:46","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual",style:{color:"#4338CA",backgroundColor:"#FFFFFF",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5413:16","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"Each Child",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5417:39","data-source-comp":"App",children:"Each Child"}),r.jsx("option",{value:"All Kids",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5421:35","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Thom / Meghan",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5425:33","data-source-comp":"App",children:"Thom / Meghan"}),r.jsx("option",{value:"Parents",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5429:38","data-source-comp":"App",children:"Parents"})]}),d.who&&!x.some(N=>N.name===d.who)&&!["All Non-Casual","Each Child","All Kids","Thom / Meghan","Parents"].includes(d.who)&&r.jsx("option",{value:d.who,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5433:207","data-source-comp":"App",children:d.who})]})]}),sn(s.task||s.row[0])&&!hr(s.task||s.row[0])&&r.jsxs("div",{className:"bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5437:144","data-source-comp":"App",children:[r.jsxs("div",{className:"text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5437:218","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5437:312","data-source-comp":"App",children:"Individual Bedrooms to Clean:"}),r.jsx("span",{className:"text-[10px] text-pink-600 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5437:354","data-source-comp":"App",children:"Each child cleans own space"})]}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5437:450","data-source-comp":"App",children:Ps(Lt).map(N=>{var P;const V=!!((P=d.kidsDone)!=null&&P[N]),O=Ce(N);return r.jsxs("button",{type:"button",onClick:()=>zo(Lt,s.index_,N),className:`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${V?"bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through":"bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5441:22","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5441:379","data-source-comp":"App",children:[r.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(O==null?void 0:O.color)||"#ec4899"},"data-source-loc":"weekly_chores_household_hub.tsx:5441:431","data-source-comp":"App"}),r.jsxs("span",{className:"font-semibold truncate","data-source-loc":"weekly_chores_household_hub.tsx:5443:20","data-source-comp":"App",children:[N,"'s Room"]})]}),r.jsx("span",{className:"font-bold ml-1","data-source-loc":"weekly_chores_household_hub.tsx:5443:90","data-source-comp":"App",children:V?"✓":"○"})]},N)})})]})]},s.index_)})}),r.jsx("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end","data-source-loc":"weekly_chores_household_hub.tsx:5445:20","data-source-comp":"App",children:r.jsx("button",{onClick:()=>ln(null),className:"px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5445:96","data-source-comp":"App",children:"Done"})})]})}),fa&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5445:309","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5445:415","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5445:520","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5445:630","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-5 h-5 text-amber-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5445:718","data-source-comp":"App",children:"Auto-Assign Monthly Template"})]}),r.jsx("button",{onClick:()=>io(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5445:793","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5445:974","data-source-comp":"App",children:[r.jsxs("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5445:1013","data-source-comp":"App",children:["Distribute daily tasks evenly across household occupants so"," ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5445:1107","data-source-comp":"App",children:"everyone has a chore on each day"})," instead of one person handling all tasks, for"," ",r.jsxs("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5445:1211","data-source-comp":"App",children:[xn[st]," ",dt]}),"."]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5445:1280","data-source-comp":"App",children:[r.jsx("label",{className:"font-bold text-slate-800 block mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5445:1285","data-source-comp":"App",children:"Full-Time Occupants (Included in Daily Chore Distribution):"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5445:1409","data-source-comp":"App",children:x.filter(s=>s.type==="regular").map(s=>r.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5445:1527","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-indigo-600 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5445:1653","data-source-comp":"App"}),r.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5445:1775","data-source-comp":"App"}),r.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5447:16","data-source-comp":"App",children:s.name}),s.role&&r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5447:87","data-source-comp":"App",children:["(",s.role==="Overseer Supreme"?"Parent":"Kid",")"]})]},s.id))}),r.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5447:208","data-source-comp":"App",children:[r.jsx("label",{className:"font-bold text-pink-800 block","data-source-loc":"weekly_chores_household_hub.tsx:5447:266","data-source-comp":"App",children:"Bi-Weekly Occupants (Active During Stay Weeks Only):"}),r.jsx("span",{className:"text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded","data-source-loc":"weekly_chores_household_hub.tsx:5447:375","data-source-comp":"App",children:"Back Sunday, Oct. 18 @ 5:00 PM"})]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5447:536","data-source-comp":"App",children:x.filter(s=>s.type==="biweekly").map(s=>r.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5447:655","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-pink-600 focus:ring-pink-500","data-source-loc":"weekly_chores_household_hub.tsx:5447:793","data-source-comp":"App"}),r.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5447:911","data-source-comp":"App"}),r.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5449:16","data-source-comp":"App",children:s.name}),r.jsx("span",{className:"text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5449:76","data-source-comp":"App",children:"Bi-weekly only"})]},s.id))}),r.jsxs("div",{className:"p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5449:196","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5449:268","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-sky-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5449:324","data-source-comp":"App",children:"Casual Members (Manual Add-Ins Only):"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300","data-source-loc":"weekly_chores_household_hub.tsx:5449:417","data-source-comp":"App",children:"Excluded from Auto-Assign"})]}),r.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5449:565","data-source-comp":"App",children:x.filter(s=>s.type==="casual").map(s=>r.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5449:680","data-source-comp":"App",children:[r.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5449:842","data-source-comp":"App"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5451:16","data-source-comp":"App",children:s.name})]},s.id))}),r.jsx("p",{className:"text-[11px] text-sky-700 mt-2 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5451:52","data-source-comp":"App",children:'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'})]})]}),r.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5451:275","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-pink-600 mt-0.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5451:436","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5451:442","data-source-comp":"App",children:"Daily Distribution:"})," Each day's tasks are handed out so all available family members (including Thom & Meghan as Overseer Supreme = Parent) share the daily chores evenly. ",Re," are included during stay weeks and skipped on away weeks."]})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5451:735","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>io(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5451:817","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{const s=x.filter(c=>{var m;return c.type==="regular"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name),i=x.filter(c=>{var m;return c.type==="biweekly"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name);Il(s,i)},className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5451:1007","data-source-comp":"App",children:"Distribute Daily Chores"})]})]})}),(ya||ks)&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5461:231","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5461:337","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5461:469","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5461:548","data-source-comp":"App",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white","data-source-loc":"weekly_chores_household_hub.tsx:5461:589","data-source-comp":"App",children:r.jsx(Cl,{className:"w-4 h-4"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5461:721","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5461:726","data-source-comp":"App",children:"Add / Edit Master Chores"}),r.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5461:791","data-source-comp":"App",children:"Add new tasks, edit existing chores, or remove from the schedule"})]})]}),r.jsx("button",{onClick:()=>{Hr(!1),Tn(!1),dn([]),Tr(null)},className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5461:913","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-100/70 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5466:143","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>{ga("add"),Tr(null)},className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="add"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5466:211","data-source-comp":"App",children:[r.jsx(ys,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5469:259","data-source-comp":"App",children:"+ Add New Chore"})]}),r.jsxs("button",{type:"button",onClick:()=>ga("edit"),className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${mr==="edit"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5469:296","data-source-comp":"App",children:[r.jsx(Io,{className:"w-3.5 h-3.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5469:604","data-source-comp":"App",children:["✏️ Edit Chore (",fe.length,")"]})]})]}),mr==="add"&&r.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5469:708","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5469:762","data-source-comp":"App",children:[r.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5469:767","data-source-comp":"App",children:["Chore / Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5469:859","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",id:"new-chore-title-input",placeholder:"e.g. Clean oven, sweep patio, sanitize counters...",autoFocus:!0,onKeyDown:s=>{if(s.key==="Enter"){const i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who");pn(s.currentTarget.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:""})}},className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5469:911","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5480:159","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5480:222","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5480:227","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{id:"new-chore-frequency",defaultValue:"daily",onChange:s=>{const i=document.getElementById("day-select-container");i&&(i.style.display=s.target.value==="weekly"?"block":"none")},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5480:299","data-source-comp":"App",children:[r.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5485:143","data-source-comp":"App",children:"Daily (Every Day)"}),r.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5485:191","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5485:234","data-source-comp":"App",children:"Bi-Weekly (Curbside schedule)"})]})]}),r.jsxs("div",{id:"day-select-container",style:{display:"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5485:312","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:14","data-source-comp":"App",children:"Target Day"}),r.jsx("select",{id:"new-chore-day",defaultValue:"5",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:87","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5487:286","data-source-comp":"App",children:["Every ",s.name]},s.name))})]})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5487:367","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:430","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:435","data-source-comp":"App",children:"Category"}),r.jsxs("select",{id:"new-chore-category",defaultValue:"Household",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:506","data-source-comp":"App",children:[r.jsx("option",{value:"Household","data-source-loc":"weekly_chores_household_hub.tsx:5487:692","data-source-comp":"App",children:"Household"}),r.jsx("option",{value:"Kitchen","data-source-loc":"weekly_chores_household_hub.tsx:5487:736","data-source-comp":"App",children:"Kitchen"}),r.jsx("option",{value:"Pet Care","data-source-loc":"weekly_chores_household_hub.tsx:5487:776","data-source-comp":"App",children:"Pet Care"}),r.jsx("option",{value:"Bedrooms","data-source-loc":"weekly_chores_household_hub.tsx:5487:818","data-source-comp":"App",children:"Bedrooms"}),r.jsx("option",{value:"Common Areas","data-source-loc":"weekly_chores_household_hub.tsx:5487:860","data-source-comp":"App",children:"Common Areas"}),r.jsx("option",{value:"Administration","data-source-loc":"weekly_chores_household_hub.tsx:5487:910","data-source-comp":"App",children:"Administration"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:979","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:984","data-source-comp":"App",children:"Default Rotation Group"}),r.jsxs("select",{id:"new-chore-who",defaultValue:"All Non-Casual",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:1069","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5487:1255","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5487:1348","data-source-comp":"App",children:"Rotating / Unassigned"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5487:1395","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5487:1447","data-source-comp":"App",children:"All Kids (Shared)"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5487:1498","data-source-comp":"App",children:"Each Child (Own Space)"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5487:1556","data-source-comp":"App",children:"Full-Time Roster"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5487:1614","data-source-comp":"App",children:"Parents Only"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5487:1659","data-source-comp":"App",children:"All Occupants"}),x.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5487:1735","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]}),r.jsxs("p",{className:"text-[10px] text-slate-500 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5487:1817","data-source-comp":"App",children:["💡 ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:1891","data-source-comp":"App",children:"All Non-Casual:"})," Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."]})]})]}),r.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5487:2065","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:2239","data-source-comp":"App",children:"Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory."})]})]}),(mr==="edit"||mr==="remove")&&r.jsx("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:2463","data-source-comp":"App",children:xr!==null?r.jsxs("div",{className:"space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5487:2607","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5487:2642","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Tr(null),className:"flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5487:2724","data-source-comp":"App",children:[r.jsx(Au,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:2923","data-source-comp":"App",children:"Back to All Chores"})]}),r.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase","data-source-loc":"weekly_chores_household_hub.tsx:5487:2963","data-source-comp":"App",children:["Editing Item #",fe.findIndex(s=>s.index_===xr)+1]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:3117","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:3122","data-source-comp":"App",children:["Chore Title / Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:3207","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:co,onChange:s=>Oo(s.target.value),className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold",placeholder:"Chore task title...",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5487:3259","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5487:3554","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:3609","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:3614","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:fr,onChange:s=>cn(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:3686","data-source-comp":"App",children:[r.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5487:3894","data-source-comp":"App",children:"Daily (Every Day)"}),r.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5487:3942","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5487:3985","data-source-comp":"App",children:"Bi-Weekly"})]})]}),fr==="weekly"?r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:4073","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:4078","data-source-comp":"App",children:"Target Day"}),r.jsx("select",{value:Wo,onChange:s=>Ss(Number(s.target.value)),className:"w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:4151","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5487:4399","data-source-comp":"App",children:["Every ",s.name]},s.name))})]}):r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:4477","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:4482","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Po,onChange:s=>Ko(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:4559","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5487:4785","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5487:4878","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5487:4930","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5487:4984","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5487:5036","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5487:5078","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5487:5118","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5487:5200","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),fr==="weekly"&&r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:5326","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:5331","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Po,onChange:s=>Ko(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:5408","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5487:5634","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5487:5727","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5487:5779","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5487:5833","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5487:5885","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5487:5927","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5487:5967","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5487:6049","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]}),r.jsxs("div",{className:"p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5487:6138","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:6324","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:6330","data-source-comp":"App",children:"Rotation Group Clarification:"})," ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:6381","data-source-comp":"App",children:"All Non-Casual"})," covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:6507","data-source-comp":"App",children:"No equivalent currently exists among the other groups"})," (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."]})]}),r.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5487:6728","data-source-comp":"App",children:[r.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5487:6830","data-source-comp":"App",children:"List Order Position:"}),r.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5487:6904","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Vo(xr,"up"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5487:6947","data-source-comp":"App",children:[r.jsx(Cu,{className:"w-3.5 h-3.5"})," Move Up"]}),r.jsxs("button",{type:"button",onClick:()=>Vo(xr,"down"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5487:7241","data-source-comp":"App",children:[r.jsx(ku,{className:"w-3.5 h-3.5"})," Move Down"]})]})]}),r.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5487:7553","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:7653","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold text-rose-900","data-source-loc":"weekly_chores_household_hub.tsx:5487:7658","data-source-comp":"App",children:"Remove This Chore"}),r.jsx("div",{className:"text-[11px] text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5487:7722","data-source-comp":"App",children:"Delete this chore from the schedule and spreadsheet"})]}),r.jsxs("button",{type:"button",onClick:()=>{Go(xr,co),Tr(null)},className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5487:7828","data-source-comp":"App",children:[r.jsx(ro,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5490:190","data-source-comp":"App",children:"Remove Chore"})]})]})]}):r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5490:298","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5490:325","data-source-comp":"App",children:[r.jsxs("div",{className:"relative flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5490:382","data-source-comp":"App",children:[r.jsx(md,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search or filter chores to edit or remove...",value:Cs,onChange:s=>Ns(s.target.value),className:"w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5490:490","data-source-comp":"App"})]}),r.jsx("button",{type:"button",onClick:()=>{sr.length===fe.length?dn([]):dn(fe.map(s=>s.index_))},className:"text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap","data-source-loc":"weekly_chores_household_hub.tsx:5490:815","data-source-comp":"App",children:sr.length===fe.length?"Deselect All":"Select All"})]}),sr.length>0&&r.jsxs("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5496:288","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-rose-800","data-source-loc":"weekly_chores_household_hub.tsx:5496:398","data-source-comp":"App",children:[sr.length," chore(s) selected"]}),r.jsxs("button",{type:"button",onClick:Pn,className:"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5496:499","data-source-comp":"App",children:[r.jsx(ro,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5496:718","data-source-comp":"App",children:"Remove Selected"})]})]}),r.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto","data-source-loc":"weekly_chores_household_hub.tsx:5496:762","data-source-comp":"App",children:fe.filter(s=>Cs?(s.task||s.row[0]||"").toLowerCase().includes(Cs.toLowerCase()):!0).map((s,i)=>{var c;const m=sr.includes(s.index_),p=Jr(s),h=s.task||s.row[0]||"Chore";return r.jsxs("div",{className:"p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5501:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5501:136","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:m,onChange:()=>{dn(d=>m?d.filter(f=>f!==s.index_):[...d,s.index_])},className:"rounded text-rose-600 focus:ring-rose-500",title:"Select for batch removal","data-source-loc":"weekly_chores_household_hub.tsx:5501:194","data-source-comp":"App"}),r.jsxs("div",{className:"min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5503:105","data-source-comp":"App",children:[r.jsxs("span",{className:"font-semibold text-slate-800 truncate block","data-source-loc":"weekly_chores_household_hub.tsx:5503:137","data-source-comp":"App",children:[i+1,". ",h]}),r.jsx("div",{className:"flex items-center gap-1.5 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5503:233","data-source-comp":"App",children:r.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5503:283","data-source-comp":"App",children:p.frequency==="weekly"?`Once a week (${(c=Ut[p.dayOfWeek])==null?void 0:c.name})`:"Daily task"})})]})]}),r.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5503:481","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Uo(s),className:"px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition",title:"Edit chore details","data-source-loc":"weekly_chores_household_hub.tsx:5503:531","data-source-comp":"App",children:[r.jsx(Io,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5503:793","data-source-comp":"App",children:"Edit"})]}),r.jsx("button",{type:"button",onClick:()=>Go(s.index_,h),className:"p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition",title:`Remove "${h}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5503:819","data-source-comp":"App",children:r.jsx(ro,{className:"w-3.5 h-3.5"})})]})]},s.index_)})})]})}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5504:34","data-source-comp":"App",children:[r.jsxs("span",{className:"text-[11px] text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5504:127","data-source-comp":"App",children:[fe.length," active master chores"]}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5504:234","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>{Hr(!1),Tn(!1),dn([]),Tr(null)},className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5504:262","data-source-comp":"App",children:"Close"}),mr==="add"?r.jsx("button",{type:"button",onClick:()=>{const s=document.getElementById("new-chore-title-input"),i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who"),p=document.getElementById("new-chore-category");s&&s.value.trim()&&pn(s.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:"All Non-Casual",category:p?p.value:"Household"})},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5509:176","data-source-comp":"App",children:"Add Chore"}):xr!==null?r.jsx("button",{type:"button",onClick:Ta,className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5523:181","data-source-comp":"App",children:"Save Changes"}):sr.length>0&&r.jsxs("button",{type:"button",onClick:Pn,className:"px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5523:410","data-source-comp":"App",children:["Remove Selected (",sr.length,")"]})]})]})]})}),wa&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5523:683","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5523:789","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5523:894","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5523:1007","data-source-comp":"App",children:[r.jsx(Zh,{className:"w-5 h-5 text-purple-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5523:1096","data-source-comp":"App",children:"Combine Chores"})]}),r.jsx("button",{onClick:()=>uo(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5523:1157","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5523:1335","data-source-comp":"App",children:[r.jsx("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5523:1374","data-source-comp":"App",children:"Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly."}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5523:1544","data-source-comp":"App",children:[r.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5523:1549","data-source-comp":"App",children:"Suggested Combinations:"}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5523:1674","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>{fe[4]&&fe[5]&&(Mn(fe[4].index_),js(fe[5].index_),po("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)"))},className:"p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5523:1729","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-purple-900 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5529:123","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-3 h-3 text-purple-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5529:238","data-source-comp":"App",children:"Chores #5 & #6 (Dinner)"})]}),r.jsx("div",{className:"text-[10px] text-purple-700 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5529:280","data-source-comp":"App",children:"Dinner Dishes + Put away food"})]}),r.jsxs("button",{type:"button",onClick:()=>{fe[0]&&fe[1]&&(Mn(fe[0].index_),js(fe[1].index_),po("Tidy bedroom & vacuum floors, bring laundry downstairs"))},className:"p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5529:385","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5535:117","data-source-comp":"App",children:[r.jsx(Fo,{className:"w-3 h-3 text-slate-500"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5535:230","data-source-comp":"App",children:"Rows 5 & 6 (Bedroom)"})]}),r.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5535:269","data-source-comp":"App",children:"Tidy up bedroom + Vacuum floors"})]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5535:387","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5535:392","data-source-comp":"App",children:"Primary Chore (Retains Position):"}),r.jsx("select",{value:$t??"",onChange:s=>{const i=Number(s.target.value);Mn(i);const c=fe.find(p=>p.index_===i),m=fe.find(p=>p.index_===yr);c&&m&&po(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5535:488","data-source-comp":"App",children:fe.map((s,i)=>r.jsxs("option",{value:s.index_,"data-source-loc":"weekly_chores_household_hub.tsx:5543:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]]},s.index_))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5543:293","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5543:298","data-source-comp":"App",children:"Chore to Merge In & Remove:"}),r.jsx("select",{value:yr??"",onChange:s=>{const i=Number(s.target.value);js(i);const c=fe.find(p=>p.index_===$t),m=fe.find(p=>p.index_===i);c&&m&&po(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5543:388","data-source-comp":"App",children:fe.map((s,i)=>r.jsxs("option",{value:s.index_,disabled:s.index_===$t,"data-source-loc":"weekly_chores_household_hub.tsx:5551:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]," ",s.index_===$t?"(Cannot merge into itself)":""]},s.index_))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5551:404","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5551:409","data-source-comp":"App",children:"New Combined Chore Title:"}),r.jsx("input",{type:"text",value:_a,onChange:s=>po(s.target.value),placeholder:"Enter name for the combined chore...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5551:497","data-source-comp":"App"})]}),r.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5551:807","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-purple-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5551:990","data-source-comp":"App",children:"The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5551:1163","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>uo(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5551:1245","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{$t!==null&&yr!==null&&$t!==yr&&Ll($t,yr,_a)},disabled:$t===yr||!$t||!yr,className:"px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5551:1432","data-source-comp":"App",children:"Merge & Combine Chores"})]})]})}),ba&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5555:307","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5555:413","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5555:518","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5555:598","data-source-comp":"App",children:[r.jsx(gs,{className:"w-5 h-5 text-indigo-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5555:684","data-source-comp":"App",children:"Add Household Member"})]}),r.jsx("button",{onClick:()=>zr(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5555:751","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5555:931","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5555:972","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5555:977","data-source-comp":"App",children:["Full Name ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5555:1046","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",id:"new-member-name",placeholder:"e.g. Alex, Jordan...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5555:1098","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5555:1328","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5555:1333","data-source-comp":"App",children:"Role"}),r.jsxs("select",{id:"new-member-role",defaultValue:"Minion",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5555:1400","data-source-comp":"App",children:[r.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5555:1597","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),r.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5555:1664","data-source-comp":"App",children:"Minion (Kid)"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5555:1723","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5555:1728","data-source-comp":"App",children:"Occupancy"}),r.jsxs("select",{id:"new-member-residency",defaultValue:"Full-Time",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5555:1800","data-source-comp":"App",children:[r.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5555:2005","data-source-comp":"App",children:"Full-Time (Constant Residency)"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5555:2070","data-source-comp":"App",children:"Bi-Weekly (Half-Time Residency)"}),r.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5555:2136","data-source-comp":"App",children:"Casual (Periodic Residency)"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5555:2210","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5555:2215","data-source-comp":"App",children:"Special Rotation Groups"}),r.jsx("div",{className:"grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50","data-source-loc":"weekly_chores_household_hub.tsx:5555:2301","data-source-comp":"App",children:["Parents","Kids","Non-Casual","All"].map(s=>{const i=Ds.includes(s);return r.jsxs("label",{className:"flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5557:20","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:i,onChange:()=>{ho(c=>{const m=new Set(c);return m.has(s)?m.delete(s):m.add(s),["Parents","Kids","Non-Casual","All"].filter(p=>m.has(p))})},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5557:195","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${i?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5567:120","data-source-comp":"App",children:s})]},s)})})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5568:26","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5568:31","data-source-comp":"App",children:"Active Status"}),r.jsxs("select",{id:"new-member-active",defaultValue:"true",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5568:107","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5568:304","data-source-comp":"App",children:"Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5568:340","data-source-comp":"App",children:"Inactive"})]})]}),r.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5568:394","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5568:577","data-source-comp":"App",children:"Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5568:715","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>zr(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5568:797","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{const s=document.getElementById("new-member-name"),i=document.getElementById("new-member-role"),c=document.getElementById("new-member-residency"),m=document.getElementById("new-member-active");s&&s.value.trim()&&Fl(s.value,i?i.value:"Minion",c?c.value:"Full-Time",Ds.length>0?Ds.join(", "):"All",m?m.value==="true":!0)},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5568:986","data-source-comp":"App",children:"Add to Household Roster"})]})]})}),Sa&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5582:202","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5582:308","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-amber-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5582:413","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5582:492","data-source-comp":"App",children:[r.jsx("span",{className:"text-xl","data-source-loc":"weekly_chores_household_hub.tsx:5582:533","data-source-comp":"App",children:"🐾"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5582:579","data-source-comp":"App",children:"Add Household Pet Member"})]}),r.jsx("button",{onClick:()=>In(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5582:650","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5582:827","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5582:868","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5582:873","data-source-comp":"App",children:["Pet Name ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5582:941","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:Yt.name,onChange:s=>un(i=>({...i,name:s.target.value})),placeholder:"e.g. Buster, Milo...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5582:993","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5587:205","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5587:210","data-source-comp":"App",children:"Species"}),r.jsxs("select",{value:Yt.type,onChange:s=>un(i=>({...i,type:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5587:280","data-source-comp":"App",children:[r.jsx("option",{value:"Dog","data-source-loc":"weekly_chores_household_hub.tsx:5592:161","data-source-comp":"App",children:"Dog 🐕"}),r.jsx("option",{value:"Cat","data-source-loc":"weekly_chores_household_hub.tsx:5592:207","data-source-comp":"App",children:"Cat 🐈"}),r.jsx("option",{value:"Bird","data-source-loc":"weekly_chores_household_hub.tsx:5592:253","data-source-comp":"App",children:"Bird 🐦"}),r.jsx("option",{value:"Fish","data-source-loc":"weekly_chores_household_hub.tsx:5592:301","data-source-comp":"App",children:"Fish 🐟"}),r.jsx("option",{value:"Small Pet","data-source-loc":"weekly_chores_household_hub.tsx:5592:349","data-source-comp":"App",children:"Small Pet 🐾"}),r.jsx("option",{value:"Other","data-source-loc":"weekly_chores_household_hub.tsx:5592:407","data-source-comp":"App",children:"Other 🐾"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5592:472","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5592:477","data-source-comp":"App",children:"Feeding Routine"}),r.jsx("input",{type:"text",value:Yt.routine,onChange:s=>un(i=>({...i,routine:s.target.value})),placeholder:"e.g. Morning & Evening, Twice daily...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5592:555","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5597:213","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5597:218","data-source-comp":"App",children:"Care Responsibilities"}),r.jsx("textarea",{rows:2,value:Yt.care,onChange:s=>un(i=>({...i,care:s.target.value})),placeholder:"e.g. Feed breakfast & supper, outdoor routine, fresh water bowls...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5597:302","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5602:267","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5602:272","data-source-comp":"App",children:"Active Status"}),r.jsxs("select",{value:Yt.active!==!1?"true":"false",onChange:s=>un(i=>({...i,active:s.target.value==="true"})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5602:348","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5607:161","data-source-comp":"App",children:"Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5607:197","data-source-comp":"App",children:"Inactive"})]})]}),r.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5607:251","data-source-comp":"App",children:[r.jsx(fs,{className:"w-4 h-4 shrink-0 text-amber-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5607:430","data-source-comp":"App",children:"Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5607:558","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>In(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5607:640","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>Wl(Yt.name,Yt.type,Yt.routine,Yt.care,Yt.active!==!1),disabled:!Yt.name.trim(),className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5607:826","data-source-comp":"App",children:"Add to Household Pets"})]})]})}),X&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5607:1220","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5607:1326","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5607:1458","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5607:1537","data-source-comp":"App",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5607:1580","data-source-comp":"App",children:r.jsx(Io,{className:"w-4 h-4"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5607:1717","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5607:1722","data-source-comp":"App",children:"Edit Chore Details"}),r.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5607:1781","data-source-comp":"App",children:"Update chore name, cadence, rotation group, or notes"})]})]}),r.jsx("button",{onClick:()=>De(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5607:1891","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5607:2075","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5607:2137","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-800 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5607:2142","data-source-comp":"App",children:["Chore Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5607:2224","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:X.task,onChange:s=>De(i=>({...i,task:s.target.value})),placeholder:"Chore task description...",className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5607:2276","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5612:221","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5612:276","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5612:281","data-source-comp":"App",children:"Category"}),r.jsx("select",{value:X.category||"Household",onChange:s=>De(i=>({...i,category:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5612:352","data-source-comp":"App",children:An.map(s=>r.jsxs("option",{value:s.id,"data-source-loc":"weekly_chores_household_hub.tsx:5617:172","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5617:251","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5617:256","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:X.frequency||"Daily",onChange:s=>{const i=s.target.value;De(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5617:328","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5626:143","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5626:179","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5626:227","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5626:286","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5626:291","data-source-comp":"App",children:"Target Day"}),r.jsx("input",{type:"text",value:X.targetDay||"Mon – Sun",onChange:s=>De(i=>({...i,targetDay:s.target.value})),placeholder:"e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5626:364","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5631:226","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5631:231","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:X.rotationGroup||"All Non-Casual",onChange:s=>De(i=>({...i,rotationGroup:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5631:308","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5636:145","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5636:238","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5636:290","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5636:344","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5636:396","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5636:438","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5636:478","data-source-comp":"App",children:"Each Child (Own Space)"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5636:536","data-source-comp":"App",children:"Full-Time Roster"}),x.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5636:618","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5636:712","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5636:717","data-source-comp":"App",children:"Operational Notes / Routine"}),r.jsx("textarea",{rows:2,value:X.notes||"",onChange:s=>De(i=>({...i,notes:s.target.value})),placeholder:"Operational details, supplies, or instructions...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5636:807","data-source-comp":"App"})]}),r.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5641:242","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5641:324","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold text-rose-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5641:329","data-source-comp":"App",children:"Delete this chore"}),r.jsx("div",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5641:401","data-source-comp":"App",children:"Remove from Printable Weekly Schedule"})]}),r.jsxs("button",{type:"button",onClick:()=>{Wn(X.index_,X.task)},className:"px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5641:494","data-source-comp":"App",children:[r.jsx(ro,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5643:210","data-source-comp":"App",children:"Delete Chore"})]})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5643:256","data-source-comp":"App",children:[r.jsx("span",{className:"text-[11px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5643:349","data-source-comp":"App",children:"Real-time schedule update"}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5643:438","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>De(null),className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5643:466","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{type:"button",onClick:()=>{ja(X.index_,{task:X.task,oldTask:X.originalTask||X.task,category:X.category,frequency:X.frequency,targetDay:X.targetDay,rotationGroup:X.rotationGroup,notes:X.notes,dayOfWeek:X.dayOfWeek})},disabled:!((ee=X.task)!=null&&ee.trim()),className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5643:652","data-source-comp":"App",children:"Save Changes"})]})]})]})}),Ye&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5654:298","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5654:404","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-rose-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5654:509","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5654:587","data-source-comp":"App",children:[r.jsx(ro,{className:"w-5 h-5 text-rose-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5654:672","data-source-comp":"App",children:"Delete Chore"})]}),r.jsx("button",{onClick:()=>ot(null),className:"p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5654:731","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 text-xs text-slate-700 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5654:911","data-source-comp":"App",children:[r.jsxs("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5654:965","data-source-comp":"App",children:["Are you sure you want to remove ",r.jsxs("strong",{className:"text-slate-900 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5654:1004","data-source-comp":"App",children:['"',Ye.task,'"']})," from the Printable Weekly Schedule?"]}),r.jsx("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5654:1138","data-source-comp":"App",children:"This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately."})]}),r.jsxs("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5654:1375","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>ot(null),className:"px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5654:1465","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{type:"button",onClick:()=>{Wn(Ye.index_,Ye.task)},className:"px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5654:1641","data-source-comp":"App",children:"Delete Chore"})]})]})})]})}var up=class extends oo.Component{constructor(w){super(w),this.state={hasError:!1}}static getDerivedStateFromError(w){return{hasError:!0}}componentDidCatch(w,_){window.parent.postMessage({type:"ERROR",payload:{error:w?w.toString():"Unknown rendering error"}},"*")}render(){return this.state.hasError?r.jsx("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5680:37","data-source-comp":"ErrorBoundary",children:"Something went wrong."}):this.props.children}};function hp(){const[w,_]=F.useState(()=>{try{const L=localStorage.getItem(so);if(L){const B=JSON.parse(L);if(Array.isArray(B)&&B.length>0)return B}}catch(L){console.warn("Failed to load sheetData from localStorage:",L)}return Dl}),[v,Y]=F.useState(!0);F.useEffect(()=>{try{localStorage.setItem(so,JSON.stringify(w))}catch(L){console.warn("Failed to persist sheetData to localStorage:",L)}},[w]),F.useEffect(()=>{try{const L=localStorage.getItem(so),B=L?JSON.parse(L):w;Array.isArray(B)&&B.length>0&&fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:B})}).catch(()=>{})}catch{}},[]),F.useEffect(()=>{let L=null;const B=be=>{const{type:Te,payload:le}=be.data||{};Te==="SYNC_DATA"&&(L&&(clearInterval(L),L=null),Array.isArray(le)&&le.length>0&&_(le),Y(!0))};window.addEventListener("message",B);const H=()=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"CHILD_READY",payload:{version:3}},"*")};H();let te=0;return L=setInterval(()=>{if(te++,te>=50){clearInterval(L),L=null;return}H()},100),()=>{L&&clearInterval(L),window.removeEventListener("message",B)}},[]),F.useEffect(()=>{if(!v)return;const L=performance.now();let B=null;const H=requestAnimationFrame(()=>{B=requestAnimationFrame(()=>{const te=performance.now()-L;window.parent&&window.parent!==window&&window.parent.postMessage({type:"RENDER_COMPLETE",payload:{status:"success",renderDurationMs:te}},"*")})});return()=>{cancelAnimationFrame(H),B&&cancelAnimationFrame(B)}},[w,v]);const $=(L,B,H)=>{_(te=>Array.isArray(te)?te.map((be,Te)=>{if((be.index_!==void 0?be.index_:Te)!==L)return be;const re=Array.isArray(be.data)?[...be.data]:[],Me=re.findIndex(Se=>Se.index_===B);if(Me>=0){const Se=Array.isArray(re[Me].row)?[...re[Me].row]:[],X=Math.max(Se.length,Array.isArray(H)?H.length:0),De=new Array(X).fill(null);for(let Ye=0;Ye<X;Ye++)De[Ye]=H&&H[Ye]!==void 0?H[Ye]:Se[Ye]!==void 0?Se[Ye]:null;re[Me]={...re[Me],row:De}}else{const Se=(H||[]).map(X=>X===void 0?null:X);re.push({index_:B,row:Se}),re.sort((X,De)=>X.index_-De.index_)}return{...be,data:re}}):te),window.parent&&window.parent!==window&&window.parent.postMessage({type:"PATCH",payload:{rangeIndex_:L,rowIndex_:B,row:H}},"*")},G=(L,B)=>{_(H=>Array.isArray(H)?H.map((te,be)=>{if((te.index_!==void 0?te.index_:be)!==L)return te;const le=(te.data||[]).filter(re=>re.index_!==B);return{...te,data:le}}):H),window.parent&&window.parent!==window&&window.parent.postMessage({type:"DELETE",payload:{rangeIndex_:L,rowIndex_:B}},"*")},Q=(L,B,H)=>{_(te=>Array.isArray(te)?te.map((be,Te)=>{if((be.index_!==void 0?be.index_:Te)!==L)return be;const re=Array.isArray(be.data)?[...be.data]:[],Me=(H||[]).map(Se=>Se===void 0?null:Se);if(B!=null){const Se=re.map(X=>X.index_>=B?{...X,index_:X.index_+1}:X);return Se.push({index_:B,row:Me}),Se.sort((X,De)=>X.index_-De.index_),{...be,data:Se}}else{const Se=re.reduce((X,De)=>Math.max(X,De.index_||0),0);return re.push({index_:Se+1,row:Me}),{...be,data:re}}}):te),window.parent&&window.parent!==window&&window.parent.postMessage({type:"INSERT",payload:{rangeIndex_:L,rowIndex_:B,row:H}},"*")},de=(L,B,H,te)=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MOVE",payload:{fromRangeIndex_:L,fromRowIndex_:B,toRangeIndex_:H,toRowIndex_:te}},"*")},ee=L=>{window.parent&&window.parent!==window?window.parent.postMessage({type:"FOLLOW_LINK",payload:{url:L}},"*"):L&&window.open(L,"_blank","noopener,noreferrer")};return v?r.jsx("div",{id:"app-container",className:"h-full w-full","data-source-loc":"weekly_chores_household_hub.tsx:5915:5","data-source-comp":"AppWrapper",children:r.jsx(up,{children:r.jsx(cp,{data:w,updateItem:$,deleteItem:G,insertItem:Q,moveItem:de,followLink:ee})})}):r.jsx("div",{className:"loading","data-source-loc":"weekly_chores_household_hub.tsx:5911:12","data-source-comp":"AppWrapper",children:"Waiting for data..."})}const pp=`// @ts-nocheck\r
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
          "Pick Up, Organize, Dust & Vacuum",\r
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
          "Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste",\r
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
      } else if (isBedroomChore(taskTitle)) {\r
        assignedWho = areKidsInResidence ? "Each Child" : "Sydney";\r
      } else if (dayIdx === 6 && tLower.includes("supper")) {\r
        assignedWho = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parents);\r
      } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {\r
        assignedWho = parents[dayIdx % parents.length];\r
      } else if (tLower.includes("basement")) {\r
        assignedWho = kids[(dayStartOffset + 1) % kids.length];\r
      } else if (tLower.includes("laundry")) {\r
        assignedWho = kids[dayStartOffset % kids.length];\r
      } else if (isDeepClean) {\r
        assignedWho = dailyRotation[(dayStartOffset + 1) % dailyRotation.length];\r
      } else if (tLower.includes("recycling")) {\r
        assignedWho = dailyRotation[(dayStartOffset + 3) % dailyRotation.length];\r
      } else if (tLower.includes("waste")) {\r
        assignedWho = dailyRotation[(dayStartOffset + 2) % dailyRotation.length];\r
      } else {\r
        assignedWho = dailyRotation[(dayStartOffset + dailyCounter) % dailyRotation.length];\r
        dailyCounter++;\r
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
      return [];\r
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
    return kidsList;\r
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
    return [];\r
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
      return [];\r
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
      let rowData = existingRow?.row;\r
      if (!rowData) {\r
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
    return [];\r
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
  const handleLoadStarterTemplate = async () => {\r
    if (!window.confirm("Switch to a blank initialized starter template?\\n\\nThis provides a clean slate without names or chores populated, ready for a new user to set up.\\n\\nYour current setup is preserved in 'weekly-chores-config.json' and you can restore it anytime.")) {\r
      return;\r
    }\r
    try {\r
      const res = await fetch('/__load-starter');\r
      const json = await res.json();\r
      const starterData = json.sheetData || (Array.isArray(json) ? json : null);\r
      if (Array.isArray(starterData) && starterData.length > 0) {\r
        localStorage.setItem(STORAGE_KEY, JSON.stringify(starterData));\r
        setSheetData(starterData);\r
        window.postMessage({ type: 'SYNC_DATA', payload: starterData }, '*');\r
        setNotice('✓ Initialized blank starter template loaded! Ready for a new user to set up.');\r
      } else {\r
        setNotice('⚠️ Starter template file could not be loaded.');\r
      }\r
    } catch (e: any) {\r
      setNotice(\`⚠️ Failed to load starter template: \${e?.message || String(e)}\`);\r
    }\r
    setTimeout(() => setNotice(null), 4000);\r
  };\r
\r
  const handleLoadSavedSetup = async () => {\r
    try {\r
      const res = await fetch('/__load-config');\r
      const json = await res.json();\r
      const savedData = json.sheetData || (Array.isArray(json) ? json : null);\r
      if (Array.isArray(savedData) && savedData.length > 0) {\r
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));\r
        setSheetData(savedData);\r
        window.postMessage({ type: 'SYNC_DATA', payload: savedData }, '*');\r
        setNotice('✓ Restored saved household configuration from weekly-chores-config.json!');\r
      } else {\r
        setNotice('⚠️ Saved config file could not be loaded.');\r
      }\r
    } catch (e: any) {\r
      setNotice(\`⚠️ Failed to load saved config: \${e?.message || String(e)}\`);\r
    }\r
    setTimeout(() => setNotice(null), 4000);\r
  };\r
\r
  const handleExportStarterTemplate = async () => {\r
    try {\r
      const res = await fetch('/__load-starter');\r
      const json = await res.json();\r
      const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });\r
      const url = URL.createObjectURL(blob);\r
      const a = document.createElement('a');\r
      a.href = url;\r
      a.download = 'weekly-chores-starter-template.json';\r
      document.body.appendChild(a);\r
      a.click();\r
      document.body.removeChild(a);\r
      URL.revokeObjectURL(url);\r
      setNotice('✓ Downloaded blank starter template (weekly-chores-starter-template.json)!');\r
    } catch (e: any) {\r
      setNotice(\`⚠️ Export starter failed: \${e?.message || String(e)}\`);\r
    }\r
    setTimeout(() => setNotice(null), 3500);\r
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
    setMonthSchedule(prev => ({\r
      ...{\r
        ...prev\r
      },\r
      ...newSchedule\r
    }));\r
    if (printableRangeIndex >= 0) {\r
      const parsedStart = parseDateKey(targetStartDate) || {\r
        year: 2026,\r
        month: 9,\r
        day: 12\r
      };\r
      choreRows.forEach(cr => {\r
        var _a2, _b2, _c2, _d, _e, _f;\r
        const pRow = findPrintableRow(cr.task, cr.index_);\r
        if (!pRow) return;\r
        const rowUpdates = new Array(15).fill(void 0);\r
        let hasChanges = false;\r
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
          const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayOffset);\r
          const dKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());\r
          const assignedWho = ((_b2 = (_a2 = newSchedule[dKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.who) || ((_d = (_c2 = newSchedule[dKey]) == null ? void 0 : _c2[cr.task]) == null ? void 0 : _d.who) || ((_f = (_e = newSchedule[dKey]) == null ? void 0 : _e[getChoreCanonicalKey(cr.task)]) == null ? void 0 : _f.who);\r
          if (assignedWho) {\r
            const whoCol = 1 + dayOffset * 2;\r
            rowUpdates[whoCol] = assignedWho;\r
            hasChanges = true;\r
          }\r
        }\r
        if (hasChanges) {\r
          updateItem(printableRangeIndex, pRow.index_, rowUpdates);\r
        }\r
      });\r
    }\r
    setNotice(\`Distributed & assigned all scheduled chores for week of \${targetStartDate} across Thom, Meghan, Sydney, Cadence, and Mason (Sunday Supper assigned to parents)!\`);\r
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
    if (printableRangeIndex >= 0 && "task" in patch && pRowIdx !== void 0 && pRowIdx !== null) {\r
      const updateP = new Array(15).fill(void 0);\r
      updateP[0] = patch.task;\r
      updateItem(printableRangeIndex, pRowIdx, updateP);\r
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
          if (isBedroomChore(taskTitle)) {\r
            updated[dKey][cr.index_] = {\r
              who: areKidsInResidence ? "Each Child" : "Sydney",\r
              done: current.done,\r
              kidsDone: current.kidsDone || {}\r
            };\r
            return;\r
          }\r
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
    setMonthSchedule(updated);\r
    if (printableRangeIndex >= 0) {\r
      calendarWeeks.forEach(week => {\r
        if (isWeekSyncedToSheet(week)) {\r
          choreRows.forEach(cr => {\r
            var _a2;\r
            const rowUpdates = new Array(15).fill(void 0);\r
            let hasChanges = false;\r
            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {\r
              const d = week[dayOffset];\r
              if (d && ((_a2 = updated[d.dateKey]) == null ? void 0 : _a2[cr.index_])) {\r
                const whoCol = 1 + dayOffset * 2;\r
                rowUpdates[whoCol] = updated[d.dateKey][cr.index_].who || "";\r
                hasChanges = true;\r
              }\r
            }\r
            if (hasChanges) {\r
              updateItem(printableRangeIndex, cr.index_, rowUpdates);\r
            }\r
          });\r
        }\r
      });\r
    }\r
    setShowAutoAssignModal(false);\r
    setNotice(\`Auto-assigned & populated Printable Weekly Schedule for \${MONTH_NAMES[selectedMonth]} \${selectedYear}!\`);\r
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
    return [...familyMembers].map(m => {\r
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
            }\r
          });\r
        }\r
        setNotice("Cleared daily WHO/DONE assignments for a blank printable template!");\r
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
        const rawDescription = ((_b2 = cr.row) == null ? void 0 : _b2[1]) && (isKidsChecklistTask || isStreamlined) && !familyMembers.some(m => m.name.toLowerCase() === String(cr.row[1]).trim().toLowerCase()) ? String(cr.row[1]).trim() : isLaundryChore(taskTitle) ? "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away" : isBedroomChore(taskTitle) ? "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum" : isCleanBasementChore(taskTitle) ? "- Pick Up, Organize, Dust & Vacuum" : isHerdFeedingStationChore(taskTitle) ? "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste" : taskTitle.toLowerCase().includes("recycling") ? "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : taskTitle.toLowerCase().includes("waste") ? "- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : cr.notes || "";\r
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
          }} className="px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition">Save Prize</button></div><div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1"><span className="opacity-80">Quick ideas:</span><button onClick={() => setIncentiveDraft("$15 Allowance Bonus & Pizza Night Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$15 + Pizza Night"}</button><button onClick={() => setIncentiveDraft("1-Day Chore Exemption Pass & Movie Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">1-Day Chore Pass</button><button onClick={() => setIncentiveDraft("$20 Gift Card & Weekend Treat")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$20 Gift Card"}</button><button onClick={() => setIncentiveDraft("Family Ice Cream Outing of Their Choice")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">Ice Cream Outing</button></div></div>}</div><div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200"><div><div className="flex items-center gap-2"><h3 className="text-base font-bold text-slate-900">Family Members Completion</h3><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Unified Roster ({rankedMembers.length}{" Members)"}</span></div><p className="text-xs text-slate-500 mt-0.5">{"Monthly Total Tracker ranked by total chores completed for "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}. All household members are displayed together in a single unified leaderboard.</p></div><div className="flex items-center gap-2 text-xs text-slate-500"><Award className="w-4 h-4 text-amber-500" /><span className="font-semibold text-slate-700">Ranked by Monthly Completions</span></div></div><div className="space-y-3">{rankedMembers.map((m, idx) => {\r
            const isFirst = idx === 0 && m.done > 0;\r
            const isSecond = idx === 1 && m.done > 0;\r
            const isThird = idx === 2 && m.done > 0;\r
            return <div key={m.id} className={\`p-3.5 rounded-xl border transition-all \${isFirst ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm" : "border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}\`}><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5"><div className="flex items-center gap-3"><div className={\`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 \${isFirst ? "bg-amber-500 text-white shadow-xs" : isSecond ? "bg-slate-300 text-slate-800" : isThird ? "bg-amber-700/80 text-white" : "bg-slate-100 text-slate-500"}\`}>{isFirst ? <Crown className="w-4 h-4" /> : \`#\${idx + 1}\`}</div><div className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full shrink-0" style={{\r
              backgroundColor: m.color\r
            }} /><span className="font-bold text-sm text-slate-900">{m.name}</span>{m.role && <span className="text-xs text-slate-500 font-normal">({m.role}{" = "}{m.role === "Supreme Overlord" ? "Parent" : "Kid"})</span>}<span className={\`text-[10px] font-semibold px-2 py-0.5 rounded-full border \${m.type === "biweekly" ? "bg-pink-50 text-pink-700 border-pink-200" : m.type === "casual" ? "bg-sky-50 text-sky-700 border-sky-200" : "bg-slate-100 text-slate-600 border-slate-200"}\`}>{m.residency}</span>{isFirst && <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs"><span>{"\\u{1F3C6}"}</span><span>{"Top Performer \\u2022 Incentive Winner"}</span></span>}</div></div><div className="flex items-center gap-3 self-end sm:self-auto text-xs"><div className="text-right"><span className="font-extrabold text-sm text-slate-900">{m.done}</span><span className="text-slate-500">{" / "}{m.total}{" completed"}</span></div><span className={\`font-black text-xs px-2 py-0.5 rounded-md \${m.pct >= 80 ? "bg-emerald-100 text-emerald-800" : m.pct >= 50 ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"}\`}>{m.pct}%</span></div></div><div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden"><div className="h-2.5 rounded-full transition-all duration-500" style={{\r
              width: \`\${m.pct}%\`,\r
              backgroundColor: isFirst ? "#D97706" : m.color\r
            }} /></div>{isFirst && <div className="mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium"><div className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700 shrink-0" /><span>{"Qualifying Reward: "}<strong>{monthlyIncentive}</strong></span></div><span className="font-bold text-amber-700">{"Rank #1 in "}{MONTH_NAMES[selectedMonth]}</span></div>}</div>;\r
          })}</div></div><div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm"><h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5"><span>{"\\u{1F43E} House Pets Overview"}</span></h4><div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">{rosterPets.filter(p => p.active !== false).map(pet => <div key={\`\${pet.index_}-\${pet.name}\`} className="p-2.5 rounded-lg border flex items-center gap-2" style={{ backgroundColor: pet.bg, borderColor: pet.border }}><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pet.color }} /><span className="text-base">{pet.icon}</span><div><div className="font-bold" style={{ color: pet.text }}>{pet.name}</div><div className="text-[10px] opacity-80" style={{ color: pet.text }}>{pet.type}</div></div></div>)}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub Master Data</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Monthly Calendar & Printable Weekly Schedule</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex flex-wrap items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Selected Week: "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Kids Week: "}<strong>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong></span><button type="button" onClick={handleSaveAsDefault} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer" title="Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json"><span>💾</span><span>Save as Default</span></button><button type="button" onClick={handleExportConfig} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Download / export current configuration backup file (.json)"><span>⬇️</span><span>Export Config</span></button><label className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Import / restore a configuration file (.json)"><span>⬆️</span><span>Import Config</span><input type="file" accept=".json" onChange={handleImportConfigFile} className="hidden" /></label><button type="button" onClick={handleLoadStarterTemplate} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-amber-500 text-white rounded-lg hover:bg-amber-600 shadow-2xs transition cursor-pointer" title="Load clean blank starter template without pre-populated names or chores"><span>✨</span><span>Blank Starter</span></button><button type="button" onClick={handleExportStarterTemplate} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-amber-800 border border-amber-300 rounded-lg hover:bg-amber-50 shadow-2xs transition cursor-pointer" title="Download clean starter template file (.json)"><span>⬇️</span><span>Export Starter</span></button><button type="button" onClick={handleLoadSavedSetup} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 shadow-2xs transition cursor-pointer" title="Restore previously saved setup from weekly-chores-config.json"><span>🔄</span><span>Restore Setup</span></button></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Special Rules & Parameters</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{(() => {\r
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
          })()}</p></div></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4"><div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl"><div className="text-[10px] font-bold text-purple-900 uppercase tracking-wider">Full-Time Occupants</div><div className="text-[8px] italic text-purple-800 leading-tight" style={{ fontSize: "8px" }}>(Eternally working)</div><div className="text-lg font-extrabold text-purple-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").length}{" Members"}</div><div className="text-[11px] text-purple-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-pink-50/70 border border-pink-200 rounded-xl"><div className="text-[10px] font-bold text-pink-900 uppercase tracking-wider">Bi-Weekly Occupants</div><div className="text-[8px] italic text-pink-800 leading-tight" style={{ fontSize: "8px" }}>(Half-Timers)</div><div className="text-lg font-extrabold text-pink-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").length}{" Members"}</div><div className="text-[11px] text-pink-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl"><div className="text-[10px] font-bold text-sky-900 uppercase tracking-wider">Casual Assignees</div><div className="text-[8px] italic text-sky-800 leading-tight" style={{ fontSize: "8px" }}>(Manually added to schedule)</div><div className="text-lg font-extrabold text-sky-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").length}{" Members"}</div><div className="text-[11px] text-sky-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl"><div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Herd</div><div className="text-[8px] italic text-amber-800 leading-tight" style={{ fontSize: "8px" }}>(Various beasts)</div><div className="text-lg font-extrabold text-amber-950 mt-0.5">{rosterPets.filter(p => p.active !== false).length}{" Pets"}</div><div className="text-[11px] text-amber-800 break-words leading-snug mt-0.5">{rosterPets.filter(p => p.active !== false).map(p => p.name).join(", ") || "None"}</div></div></div><div className="space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600" /><h3 className="text-sm font-bold text-slate-900">Household Members</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{"Rows 5\\u201311 \\u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{familyMembers.length}{" Registered Occupants"}</span><button type="button" onClick={() => setShowAddMemberModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer" title="Add a new household member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-visible border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Role</th><th className="p-3">Occupancy</th><th className="p-3">Special Rotation Groups</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{familyMembers.length === 0 ? <tr><td colSpan={6} className="text-center py-8 text-slate-400"><div className="flex flex-col items-center justify-center gap-1.5"><Users className="w-5 h-5 text-slate-300" /><span className="font-semibold text-slate-600 text-xs">No household members added yet</span><span className="text-[11px] text-slate-400">Click &ldquo;+ Add Member&rdquo; above to register your family members.</span></div></td></tr> : familyMembers.map(member => {\r
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
          })}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><span className="text-base">{"\\u{1F43E}"}</span><h3 className="text-sm font-bold text-slate-900">Household Pets</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{"Rows 27\\u201332 \\u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{rosterPets.length}{" Registered Pets"}</span><button type="button" onClick={() => setShowAddPetModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer" title="Add a new household pet member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Species</th><th className="p-3">Feeding Routine</th><th className="p-3">Care Responsibilities</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{rosterPets.length === 0 ? <tr><td colSpan={6} className="text-center py-8 text-slate-400"><div className="flex flex-col items-center justify-center gap-1.5"><span className="text-xl opacity-40">🐾</span><span className="font-semibold text-slate-600 text-xs">No household pets registered yet</span><span className="text-[11px] text-slate-400">Click &ldquo;+ Add Member&rdquo; above to register your pets.</span></div></td></tr> : rosterPets.map(pet => {\r
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
          })}</div></div><div className="overflow-visible border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3 w-10 text-center">#</th><th className="p-3">Chore / Task</th><th className="p-3">Category</th><th className="p-3">Frequency</th><th className="p-3">Target Day(s)</th><th className="p-3">Rotation Group</th><th className="p-3 text-right">Actions</th></tr></thead><tbody>{filteredMasterChores.length === 0 ? <tr><td colSpan={7} className="text-center py-8 text-slate-400"><div className="flex flex-col items-center justify-center gap-1.5"><Sparkles className="w-5 h-5 text-slate-300" /><span className="font-semibold text-slate-600 text-xs">No master chores registered yet</span><span className="text-[11px] text-slate-400">Click &ldquo;+ Add Chore&rdquo; above to build your household chore list.</span></div></td></tr> : filteredMasterChores.map((ch, idx) => {\r
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
          })}</div><div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end"><button onClick={() => setActiveDayModal(null)} className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition">Done</button></div></div></div>}{showAutoAssignModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-200" /><h3 className="text-base font-bold">Auto-Assign Monthly Template</h3></div><button onClick={() => setShowAutoAssignModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs"><p className="text-slate-600">Distribute daily tasks evenly across household occupants so{" "}<strong>everyone has a chore on each day</strong>{" instead of one person handling all tasks, for"}{" "}<strong>{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</strong>.</p><div><label className="font-bold text-slate-800 block mb-1.5">Full-Time Occupants (Included in Daily Chore Distribution):</label><div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">{familyMembers.filter(m => m.type === "regular").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"><input type="checkbox" defaultChecked id={\`assignee-\${m.id}\`} className="rounded text-indigo-600 focus:ring-indigo-500" /><span className="w-3 h-3 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span className="font-medium text-slate-800">{m.name}</span>{m.role && <span className="text-[10px] text-slate-500">({m.role === "Overseer Supreme" ? "Parent" : "Kid"})</span>}</label>)}</div><div className="flex items-center justify-between mb-1.5"><label className="font-bold text-pink-800 block">Bi-Weekly Occupants (Active During Stay Weeks Only):</label><span className="text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded">{"Back Sunday, Oct. 18 @ 5:00 PM"}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">{familyMembers.filter(m => m.type === "biweekly").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer"><input type="checkbox" defaultChecked id={\`assignee-\${m.id}\`} className="rounded text-pink-600 focus:ring-pink-500" /><span className="w-3 h-3 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span className="font-medium text-slate-800">{m.name}</span><span className="text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold">Bi-weekly only</span></label>)}</div><div className="p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3"><div className="flex items-center justify-between mb-1"><span className="font-bold text-sky-900 text-xs">Casual Members (Manual Add-Ins Only):</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300">Excluded from Auto-Assign</span></div><div className="flex flex-wrap items-center gap-2 mt-1.5">{familyMembers.filter(m => m.type === "casual").map(m => <span key={m.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs"><span className="w-2 h-2 rounded-full" style={{\r
            backgroundColor: m.color\r
          }} /><span>{m.name}</span></span>)}</div><p className="text-[11px] text-sky-700 mt-2 leading-relaxed">{'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'}</p></div></div><div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-pink-600 mt-0.5" /><span><strong>Daily Distribution:</strong>{" Each day's tasks are handed out so all available family members (including Thom & Meghan as Overseer Supreme = Parent) share the daily chores evenly. "}{biWeeklyNamesString}{" are included during stay weeks and skipped on away weeks."}</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAutoAssignModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {\r
            const regSelected = familyMembers.filter(m => {\r
              var _a2;\r
              return m.type === "regular" && ((_a2 = document.getElementById(\`assignee-\${m.id}\`)) == null ? void 0 : _a2.checked);\r
            }).map(m => m.name);\r
            const bwSelected = familyMembers.filter(m => {\r
              var _a2;\r
              return m.type === "biweekly" && ((_a2 = document.getElementById(\`assignee-\${m.id}\`)) == null ? void 0 : _a2.checked);\r
            }).map(m => m.name);\r
            handleAutoAssignMonth(regSelected, bwSelected);\r
          }} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition">Distribute Daily Chores</button></div></div></div>}{(showAddRemoveChoreModal || showNewChoreModal) && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><ListTodo className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Add / Edit Master Chores</h3><p className="text-[11px] text-slate-400">Add new tasks, edit existing chores, or remove from the schedule</p></div></div><button onClick={() => {\r
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
        fetch('/__save-config', {\r
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
`,lo=pp.split(/\r?\n/),fd=(()=>{const w=lo.findIndex((_,v)=>v>37&&_.startsWith("var DAY_STYLES"));return w>0?w:935})();function Al(w){let _="",v=w;for(;v>=0;)_=String.fromCharCode(v%26+65)+_,v=Math.floor(v/26)-1;return _}const yd=new Map,wd=new Map;(()=>{let w=-1,_="",v=null,Y=!1,$=-1;for(let G=36;G<fd;G++){const Q=lo[G]||"",de=Q.match(/"name":\s*"([^"]+)"/);if(de){_=de[1],w=_.toLowerCase().includes("hub")?1:0,v=null,Y=!1;continue}const ee=Q.match(/"index_":\s*(\d+)/);if(ee&&!Y){(lo[G+1]||"").includes('"name":')||(v=parseInt(ee[1],10));continue}if(Q.includes('"row": [')){Y=!0,$=0;continue}if(Y){if(Q.trim().startsWith("]")){Y=!1,$=-1;continue}if(w>=0&&v!==null){const L=G+1,B=Q.trim().replace(/,$/,"");let H=B;try{H=JSON.parse(B)}catch{}const te={tsxLine:L,sheetIndex:w,sheetName:_,rowIndex:v,colIndex:$,value:H};yd.set(`${w}:${v}:${$}`,L),wd.set(L,te)}$++}}})();function Ru(w){const _=[],v=(w.innerText||w.textContent||"").trim();if(v.length>=2&&v.length<=140&&!v.includes(`
`))_.push(v);else if(v.includes(`
`))for(const Y of v.split(`
`)){const $=Y.trim();$.length>=3&&$.length<=120&&_.push($)}if(_.length===0)return null;for(const Y of _){const $=Y.replace(/\s+/g," ").trim();if($.length<2)continue;const G=JSON.stringify($).toLowerCase();let Q=-1;for(let de=36;de<fd;de++){const ee=(lo[de]||"").trim().toLowerCase();if(ee===G||ee===`${G},`){Q=de+1;break}}if(Q===-1&&$.length>=4){const de=$.toLowerCase();for(let ee=36;ee<fd;ee++){const L=(lo[ee]||"").trim().toLowerCase();if(L.startsWith('"')&&L.includes(de)){Q=ee+1;break}}}if(Q!==-1){const de=wd.get(Q),ee=de?de.rowIndex:null,L=de?de.colIndex:0,B=de?de.sheetName:"INITIAL_SHEET_DATA",H=B.toLowerCase().includes("hub"),te=H?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",be=ee!==null?H?ee+2:ee+1:1,Te=Al(L+1);return{line:Q,text:(lo[Q-1]||"").trim(),rowIndex:ee,colIndex:L,colLetter:Te,sectionName:B,csvFile:te,csvLine:be}}}return null}function bs(w,_,v=1,Y){const $=()=>{const G=document.createElement("a");G.href=`antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(w)}:${_}:${v}`,G.click()};fetch(`/__open-in-vscode?file=${encodeURIComponent(w)}&line=${_}&col=${v}`).then(G=>G.json()).then(G=>{(!G||!G.ok)&&$()}).catch(()=>{$()}),Y&&Y(`Opened ${w}:${_}`)}function $u(w,_){const v=`${window.location.origin}/?view=csv-map`,Y=window.open(v,"CsvVisualMapWindow","popup=yes,width=1320,height=840,left=80,top=60");if(Y){Y.focus(),w&&w("Opened CSV Visual Map in a separate window!");return}fetch("/__popout-csv-map").catch(()=>{}),_&&_(),w&&w("Opened CSV Visual Map!")}const vs=typeof BroadcastChannel<"u"?new BroadcastChannel("chores_csv_map_sync"):null;function qu(w,_,v,Y){vs&&vs.postMessage({sheetIndex:w,rowIndex:_,colIndex:v,tsxLine:Y,updatedAt:Date.now()}),fetch(`/__csv-map-state?sheetIndex=${w}&rowIndex=${_}&colIndex=${v}${Y?`&tsxLine=${Y}`:""}`).catch(()=>{})}function Hu({isStandalone:w=!1,activeCsvSheetIdx:_,setActiveCsvSheetIdx:v,selectedCellKey:Y,setSelectedCellKey:$,onClose:G,onToast:Q}){const de=Dl[_]||Dl[0],ee=_===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",L=_===1?12:15;return F.useEffect(()=>{if(!Y)return;const B=document.querySelector(`[data-cell-key="${Y}"]`);B&&B.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[Y,_]),r.jsxs("div",{style:{width:"100%",height:"100%",backgroundColor:"#0F172A",color:"#F8FAFC",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"ui-sans-serif, system-ui, sans-serif"},children:[r.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#1E293B",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[r.jsx("span",{style:{fontWeight:800,fontSize:"13px",color:"#FBBF24"},children:"📊 Live .tsx ↔ .csv Visual Spreadsheet Map"}),r.jsxs("div",{style:{display:"flex",gap:"6px"},children:[r.jsx("button",{type:"button",onClick:()=>v(0),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===0?"1px solid #38BDF8":"1px solid #475569",backgroundColor:_===0?"#0284C7":"#0F172A",color:"#FFFFFF"},children:"Sheet 0: Printable Weekly Schedule (CSV)"}),r.jsx("button",{type:"button",onClick:()=>v(1),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===1?"1px solid #34D399":"1px solid #475569",backgroundColor:_===1?"#059669":"#0F172A",color:"#FFFFFF"},children:"Sheet 1: Household Hub - Data (CSV)"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"11px",color:"#CBD5E1"},children:[r.jsxs("span",{children:[r.jsx("strong",{children:"Click Cell"})," = Open in ",r.jsx("code",{style:{color:"#38BDF8"},children:".tsx"})," •"," ",r.jsx("strong",{children:"Shift+Click Cell"})," = Open in ",r.jsx("code",{style:{color:"#FBBF24"},children:".csv"})]}),!w&&r.jsx("button",{type:"button",onClick:()=>{$u(Q),G&&G()},title:"Pop out into a separate standalone window",style:{padding:"4px 10px",borderRadius:"6px",backgroundColor:"#2563EB",color:"#FFFFFF",border:"1px solid #60A5FA",cursor:"pointer",fontWeight:700},children:"↗ Open in Separate Window"}),G&&r.jsx("button",{type:"button",onClick:G,style:{padding:"4px 9px",borderRadius:"6px",backgroundColor:"#334155",color:"#F8FAFC",border:"none",cursor:"pointer",fontWeight:700},children:"✕ Close"})]})]}),Y&&(()=>{const[B,H,te]=Y.split(":"),be=parseInt(B,10),Te=parseInt(H,10),le=parseInt(te,10),re=yd.get(Y),Me=re?wd.get(re):null,Se=be===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",X=be===1?Te+2:Te+1,De=Al(le+1);return r.jsxs("div",{style:{padding:"6px 14px",backgroundColor:"#022C22",borderBottom:"1px solid #065F46",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",fontSize:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:[r.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",Se," → Line ",X,", Col ",De]}),r.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["⚛️ weekly_chores_household_hub.tsx → Line ",re||"?"," (index_ ",Te,", row[",le,"])"]}),Me&&r.jsx("span",{style:{color:"#F8FAFC",backgroundColor:"#064E3B",padding:"1px 8px",borderRadius:"4px",fontFamily:"monospace"},children:JSON.stringify(Me.value)})]}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[re&&r.jsxs("button",{type:"button",onClick:()=>bs("weekly_chores_household_hub.tsx",re,1,Q),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#059669",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .tsx Line ",re]}),r.jsxs("button",{type:"button",onClick:()=>bs(Se,X,1,Q),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#D97706",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .csv Line ",X]})]})]})})(),r.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{backgroundColor:"#1E293B",position:"sticky",top:0,zIndex:2},children:[r.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#FBBF24",textAlign:"center",minWidth:"72px"},children:"CSV Line"}),r.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#34D399",textAlign:"center",minWidth:"72px"},children:"TSX index_"}),Array.from({length:L}).map((B,H)=>r.jsxs("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#93C5FD",textAlign:"left",minWidth:"125px"},children:["Col ",Al(H+1)," ",r.jsxs("span",{style:{color:"#64748B",fontWeight:400},children:["(row[",H,"])"]})]},H))]})}),r.jsx("tbody",{children:(de.data||[]).map(B=>{const H=B.index_,te=_===1?H+2:H+1;return r.jsxs("tr",{style:{borderBottom:"1px solid #1E293B"},children:[r.jsxs("td",{onClick:()=>bs(ee,te,1,Q),title:`Click to open ${ee} at Line ${te}`,style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#FDE68A",backgroundColor:"#1E293B",fontWeight:700,cursor:"pointer"},children:["L",te]}),r.jsxs("td",{style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#A7F3D0",backgroundColor:"#0F172A",fontWeight:600},children:["#",H]}),Array.from({length:L}).map((be,Te)=>{const le=B.row?B.row[Te]:null,re=yd.get(`${_}:${H}:${Te}`),Me=`${_}:${H}:${Te}`,Se=Y===Me,X=le==null||le==="";return r.jsx("td",{"data-cell-key":Me,onClick:De=>{$(Me),qu(_,H,Te,re),De.shiftKey?bs(ee,te,1,Q):re&&bs("weekly_chores_household_hub.tsx",re,1,Q)},title:`TSX Line ${re||"?"} • ${ee} Line ${te}, Col ${Al(Te+1)}
Click = Open in .tsx | Shift+Click = Open in .csv`,style:{border:Se?"2px solid #F59E0B":"1px solid #334155",backgroundColor:Se?"rgba(245, 158, 11, 0.28)":X?"#090D16":"#0F172A",color:X?"#334155":"#F8FAFC",padding:"5px 7px",cursor:"pointer",maxWidth:"210px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"4px",alignItems:"baseline"},children:[r.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:X?"·":String(le)}),re&&r.jsxs("span",{style:{fontSize:"9px",color:Se?"#FBBF24":"#475569",flexShrink:0},children:[":",re]})]})},Te)})]},H)})})]})})]})}function mp(){const[w,_]=F.useState(1),[v,Y]=F.useState(null),[$,G]=F.useState(null),Q=F.useRef(0),de=ee=>{G(ee),setTimeout(()=>G(null),2400)};return F.useEffect(()=>{document.title="📊 CSV Visual Map — Weekly Chores & Household Hub";const ee=B=>{const H=B.data;H&&typeof H.sheetIndex=="number"&&H.rowIndex!==null&&H.rowIndex!==void 0&&(Q.current=H.updatedAt||Date.now(),_(H.sheetIndex),Y(`${H.sheetIndex}:${H.rowIndex}:${H.colIndex??0}`))};vs&&vs.addEventListener("message",ee);const L=setInterval(()=>{fetch("/__csv-map-state").then(B=>B.json()).then(B=>{B&&B.updatedAt>Q.current&&B.rowIndex!==null&&B.rowIndex!==void 0&&(Q.current=B.updatedAt,_(B.sheetIndex),Y(`${B.sheetIndex}:${B.rowIndex}:${B.colIndex??0}`))}).catch(()=>{})},400);return()=>{vs&&vs.removeEventListener("message",ee),clearInterval(L)}},[]),r.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[r.jsx(Hu,{isStandalone:!0,activeCsvSheetIdx:w,setActiveCsvSheetIdx:_,selectedCellKey:v,setSelectedCellKey:Y,onToast:de}),$&&r.jsxs("div",{style:{position:"fixed",bottom:"18px",right:"18px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"8px 14px",borderRadius:"8px",fontSize:"12px",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.35)",zIndex:9999},children:["✓ ",$]})]})}const Lu="__code_inspector_dock_corner";function xp(){const[w,_]=F.useState(!1),[v,Y]=F.useState(!1),[$,G]=F.useState(()=>{try{const E=localStorage.getItem(Lu);if(E&&["top-right","bottom-left","top-left","bottom-right","float"].includes(E))return E}catch{}return"top-right"}),[Q,de]=F.useState({x:0,y:0}),ee=F.useRef(null),[L,B]=F.useState(null),[H,te]=F.useState([]),[be,Te]=F.useState(null),[le,re]=F.useState(!1),[Me,Se]=F.useState(1),[X,De]=F.useState(null),Ye=F.useRef(""),ot=F.useRef(""),Ve=w||v,Le=E=>{Te(E),setTimeout(()=>Te(null),2400)},je=async()=>{try{const E=localStorage.getItem("weekly_chores_canvas_sheet_data_v5");if(!E){Le("⚠️ No data found in localStorage");return}const W=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:JSON.parse(E)})})).json();W.ok?Le("✓ Saved current browser setup as default in code and config file!"):Le(`⚠️ Failed: ${W.error}`)}catch(E){Le(`⚠️ Failed: ${(E==null?void 0:E.message)||String(E)}`)}},ge=()=>{try{const E=localStorage.getItem("weekly_chores_canvas_sheet_data_v5"),K={sheetData:E?JSON.parse(E):null,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},W=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),x=URL.createObjectURL(W),R=document.createElement("a"),ce=new Date().toISOString().slice(0,10);R.href=x,R.download=`weekly-chores-config-${ce}.json`,document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(x),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K)}).catch(()=>{}),Le("✓ Exported configuration backup (.json)!")}catch(E){Le(`⚠️ Export failed: ${(E==null?void 0:E.message)||String(E)}`)}},He=E=>{var x;const K=(x=E.target.files)==null?void 0:x[0];if(!K)return;const W=new FileReader;W.onload=R=>{var ce;try{const he=JSON.parse((ce=R.target)==null?void 0:ce.result),me=he.sheetData||(Array.isArray(he)?he:null);Array.isArray(me)&&me.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(me)),window.postMessage({type:"SYNC_DATA",payload:me},"*"),Le(`✓ Loaded configuration from "${K.name}"!`)):Le("⚠️ Invalid config: missing sheetData")}catch(he){Le(`⚠️ Failed to parse: ${(he==null?void 0:he.message)||String(he)}`)}},W.readAsText(K),E.target.value=""},we=async()=>{if(window.confirm(`Switch to a blank initialized starter template?

This provides a clean slate without names or chores populated, ready for a new user to set up.

Your current setup is preserved in 'weekly-chores-config.json' and you can restore it anytime.`))try{const K=await(await fetch("/__load-starter")).json(),W=K.sheetData||(Array.isArray(K)?K:null);Array.isArray(W)&&W.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(W)),window.postMessage({type:"SYNC_DATA",payload:W},"*"),Le("✓ Initialized blank starter template loaded!")):Le("⚠️ Starter template file could not be loaded")}catch(E){Le(`⚠️ Failed to load starter: ${(E==null?void 0:E.message)||String(E)}`)}},ze=async()=>{try{const K=await(await fetch("/__load-config")).json(),W=K.sheetData||(Array.isArray(K)?K:null);Array.isArray(W)&&W.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(W)),window.postMessage({type:"SYNC_DATA",payload:W},"*"),Le("✓ Restored saved setup from weekly-chores-config.json!")):Le("⚠️ Saved config file could not be loaded")}catch(E){Le(`⚠️ Failed to restore saved config: ${(E==null?void 0:E.message)||String(E)}`)}},Pe=async()=>{try{const K=await(await fetch("/__load-starter")).json(),W=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),x=URL.createObjectURL(W),R=document.createElement("a");R.href=x,R.download="weekly-chores-starter-template.json",document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(x),Le("✓ Downloaded blank starter template (.json)!")}catch(E){Le(`⚠️ Export starter failed: ${(E==null?void 0:E.message)||String(E)}`)}},Ge=()=>{G(E=>{const K=["top-right","bottom-left","top-left","bottom-right","float"],W=K[(K.indexOf(E)+1)%K.length];try{localStorage.setItem(Lu,W)}catch{}return Le(`Inspector window docked: ${W.replace("-"," ").toUpperCase()}`),W})};F.useEffect(()=>{const E=x=>{x.key==="Alt"?Y(!0):x.key==="Escape"?w&&(_(!1),B(null)):(x.key==="d"||x.key==="D")&&Ve&&Ge()},K=x=>{x.key==="Alt"&&(Y(!1),w||B(null))},W=()=>{Y(!1)};return window.addEventListener("keydown",E),window.addEventListener("keyup",K),window.addEventListener("blur",W),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",K),window.removeEventListener("blur",W)}},[w]),F.useEffect(()=>{if(!Ve){B(null);return}const E=W=>{const x=W.target;if(!x||x.closest("#__code-inspector-ui")){B(null);return}de({x:W.clientX,y:W.clientY});const R=x.closest("[data-source-loc]");if(!R){B(null);return}const ce=R.getAttribute("data-source-loc")||"",he=R.getAttribute("data-source-comp")||"",me=ce.split(":");if(me.length<3)return;const xe=parseInt(me.pop(),10),Ce=parseInt(me.pop(),10),Re=me.join(":"),We=R.getBoundingClientRect(),tt=Ru(R);if(tt&&tt.rowIndex!==null){const or=tt.sectionName.toLowerCase().includes("hub")?1:0,yt=`${or}:${tt.rowIndex}:${tt.colIndex}`;ot.current!==yt&&(ot.current=yt,Se(or),De(yt),qu(or,tt.rowIndex,tt.colIndex,tt.line))}B({file:Re,line:Ce,col:xe,tag:R.tagName.toLowerCase(),comp:he,rect:We,dataMatch:tt});const fe=`${Re}:${Ce}`;if(Ye.current!==fe){Ye.current=fe;const or=Math.max(1,Ce-1),yt=Math.min(lo.length,Ce+1),pr=[];for(let dt=or;dt<=yt;dt++)pr.push({line:dt,text:lo[dt-1]??""});te(pr)}},K=W=>{const x=W.target;if(!x||x.closest("#__code-inspector-ui"))return;const R=x.closest("[data-source-loc]");if(!R)return;W.preventDefault(),W.stopPropagation();const he=(R.getAttribute("data-source-loc")||"").split(":");if(he.length<3)return;let me=parseInt(he.pop(),10),xe=parseInt(he.pop(),10),Ce=he.join(":");const Re=Ru(R);(W.ctrlKey||W.metaKey)&&Re?(Ce=Re.csvFile,xe=Re.csvLine,me=1):W.shiftKey&&Re&&(xe=Re.line,me=1),bs(Ce,xe,me,Le)};return window.addEventListener("mousemove",E,!0),window.addEventListener("click",K,!0),()=>{window.removeEventListener("mousemove",E,!0),window.removeEventListener("click",K,!0)}},[Ve]);let Be={};if(L){const x=L.rect;if($==="top-right")x.right>window.innerWidth-497&&x.top<336?Be={bottom:"64px",left:"16px"}:Be={top:"16px",right:"16px"};else if($==="bottom-left")x.left<497&&x.bottom>window.innerHeight-384?Be={top:"16px",right:"16px"}:Be={bottom:"64px",left:"16px"};else if($==="top-left")x.left<497&&x.top<336?Be={bottom:"64px",right:"16px"}:Be={top:"16px",left:"16px"};else if($==="bottom-right")x.right>window.innerWidth-497&&x.bottom>window.innerHeight-384?Be={top:"16px",left:"16px"}:Be={bottom:"64px",right:"16px"};else{let R=x.top,ce=x.right+16;ce+465>window.innerWidth-16&&(ce=x.left-465-16),ce<16&&(ce=Math.max(16,Math.min(x.left,window.innerWidth-465-16)),R=x.top>336?x.top-320-12:x.bottom+12),R=Math.max(16,Math.min(R,window.innerHeight-320-16)),Be={top:`${R}px`,left:`${ce}px`}}}let $e=!1;if(ee.current&&Ve){const E=ee.current.getBoundingClientRect(),K=Math.max(E.left,Math.min(Q.x,E.right)),W=Math.max(E.top,Math.min(Q.y,E.bottom));Math.hypot(Q.x-K,Q.y-W)<40&&($e=!0)}return r.jsxs("div",{id:"__code-inspector-ui",style:{position:"fixed",zIndex:999999,pointerEvents:"none"},children:[Ve&&L&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:L.rect.top,left:L.rect.left,width:L.rect.width,height:L.rect.height,border:"2px solid #3B82F6",backgroundColor:"rgba(59, 130, 246, 0.12)",borderRadius:"4px",pointerEvents:"none",transition:"all 0.04s ease-out"}}),r.jsxs("div",{style:{position:"fixed",top:L.rect.top>24?L.rect.top-22:L.rect.bottom+4,left:Math.max(4,Math.min(L.rect.left,window.innerWidth-240)),padding:"2px 8px",borderRadius:"4px",backgroundColor:"#0F172A",color:"#93C5FD",border:"1px solid #3B82F6",fontSize:"10px",fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none",whiteSpace:"nowrap",zIndex:999999,display:"flex",alignItems:"center",gap:"6px"},children:[r.jsxs("span",{children:["<",L.tag,">",L.comp?` in <${L.comp}>`:""]}),r.jsxs("span",{style:{color:"#38BDF8",fontWeight:600},children:["• Line ",L.line]})]}),r.jsxs("div",{ref:ee,style:{position:"fixed",...Be,width:"465px",maxWidth:"calc(100vw - 32px)",backgroundColor:"#0F172A",color:"#F8FAFC",padding:"10px 14px",borderRadius:"10px",boxShadow:"0 12px 30px -5px rgba(0, 0, 0, 0.65)",border:"1px solid #334155",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",lineHeight:"1.45",pointerEvents:"auto",opacity:$e?.22:.98,transition:"opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease",zIndex:999999},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"},children:[r.jsxs("span",{style:{color:"#60A5FA",fontWeight:700,fontSize:"11.5px"},children:["<",L.tag,">",L.comp?r.jsxs("span",{style:{color:"#C084FC",fontWeight:500},children:[" in ",L.comp]}):null]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsxs("button",{type:"button",onClick:Ge,title:"Move inspector window corner (or press 'D' key)",style:{backgroundColor:"#1E293B",color:"#93C5FD",border:"1px solid #3B82F6",borderRadius:"4px",padding:"2px 7px",fontSize:"9.5px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{children:"◰"}),r.jsxs("span",{children:["Dock: ",$.replace("-"," ")]})]}),r.jsxs("span",{style:{color:"#38BDF8",backgroundColor:"#1E293B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["Line ",L.line,":",L.col]})]})]}),r.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"6px"},children:[L.file," (",r.jsx("strong",{children:"Click"})," = UI code)"]}),H.length>0&&r.jsx("div",{style:{backgroundColor:"#020617",padding:"6px 8px",borderRadius:"5px",border:"1px solid #1E293B",overflowX:"hidden",whiteSpace:"pre"},children:H.map(E=>{const K=E.line===L.line,W=K&&L.col>30?Math.max(0,L.col-1):0,x=W>0?"…"+E.text.slice(W,W+55):E.text.trim().slice(0,56);return r.jsxs("div",{style:{backgroundColor:K?"rgba(59, 130, 246, 0.22)":"transparent",color:K?"#F8FAFC":"#64748B",fontWeight:K?600:400,padding:"0 4px",borderRadius:"2px",textOverflow:"ellipsis",overflow:"hidden"},children:[r.jsx("span",{style:{display:"inline-block",width:"36px",color:K?"#60A5FA":"#475569",userSelect:"none"},children:E.line}),x]},E.line)})}),L.dataMatch&&r.jsxs("div",{style:{marginTop:"8px",paddingTop:"6px",borderTop:"1px solid #334155"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"2px"},children:[r.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["📊 TSX Data (index_ ",L.dataMatch.rowIndex,", row[",L.dataMatch.colIndex,"])"]}),r.jsxs("span",{style:{color:"#6EE7B7",backgroundColor:"#064E3B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["TSX Line ",L.dataMatch.line]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"4px"},children:[r.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",L.dataMatch.csvFile]}),r.jsxs("span",{style:{color:"#FDE68A",backgroundColor:"#78350F",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["CSV Line ",L.dataMatch.csvLine," • Col ",L.dataMatch.colLetter]})]}),r.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"4px"},children:[r.jsx("strong",{children:"Shift+Click"})," = .tsx Data • ",r.jsx("strong",{children:"Ctrl+Click"})," = .csv File"]}),r.jsxs("div",{style:{backgroundColor:"#022C22",color:"#ECFDF5",padding:"4px 8px",borderRadius:"4px",border:"1px solid #065F46",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r.jsx("span",{style:{color:"#34D399",marginRight:"8px"},children:L.dataMatch.line}),L.dataMatch.text.slice(0,56)]})]})]})]}),be&&r.jsxs("div",{style:{position:"fixed",bottom:"54px",right:"16px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:["✓ ",be]}),le&&r.jsx("div",{style:{position:"fixed",bottom:"56px",left:"16px",right:"16px",height:"52vh",pointerEvents:"auto",borderRadius:"12px",overflow:"hidden",border:"2px solid #F59E0B",boxShadow:"0 20px 45px rgba(0, 0, 0, 0.65)"},children:r.jsx(Hu,{isStandalone:!1,activeCsvSheetIdx:Me,setActiveCsvSheetIdx:Se,selectedCellKey:X,setSelectedCellKey:De,onClose:()=>re(!1),onToast:Le})}),r.jsxs("div",{style:{position:"fixed",bottom:"14px",right:"16px",pointerEvents:"auto",display:"flex",alignItems:"center",gap:"8px"},children:[r.jsxs("button",{type:"button",onClick:()=>$u(Le,()=>re(!0)),title:"Open the CSV Visual Map in a separate standalone desktop window",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #F59E0B",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"↗"}),r.jsx("span",{children:"Pop Out CSV Map"})]}),r.jsxs("button",{type:"button",onClick:je,title:"Save current browser setup as the permanent default in code (.tsx) and configuration file",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #059669",backgroundColor:"#065F46",color:"#ECFDF5",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"💾"}),r.jsx("span",{children:"Save as Default"})]}),r.jsxs("button",{type:"button",onClick:we,title:"Load clean blank starter template without pre-populated names or chores (initialized app setup)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #D97706",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"✨"}),r.jsx("span",{children:"Blank Starter"})]}),r.jsxs("button",{type:"button",onClick:ze,title:"Restore your saved household configuration from weekly-chores-config.json",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #6366F1",backgroundColor:"#312E81",color:"#EEF2FF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"🔄"}),r.jsx("span",{children:"Restore Setup"})]}),r.jsxs("button",{type:"button",onClick:Pe,title:"Download the blank starter template JSON file",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"⬇️"}),r.jsx("span",{children:"Export Starter"})]}),r.jsxs("button",{type:"button",onClick:ge,title:"Download/export configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"⬇️"}),r.jsx("span",{children:"Export Config"})]}),r.jsxs("label",{title:"Import/restore a configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"⬆️"}),r.jsx("span",{children:"Import Config"}),r.jsx("input",{type:"file",accept:".json",onChange:He,style:{display:"none"}})]}),r.jsxs("button",{type:"button",onClick:()=>{try{localStorage.removeItem("weekly_chores_canvas_sheet_data_v1"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v2"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v3"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v4"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v5")}catch{}window.postMessage({type:"SYNC_DATA",payload:Dl},"*"),Le("Reset to INITIAL_SHEET_DATA")},title:"Clear cached localStorage and reload INITIAL_SHEET_DATA from code",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"🔄"}),r.jsx("span",{children:"Reset Data"})]}),r.jsxs("button",{type:"button",onClick:()=>_(E=>!E),title:"Toggle Inspect Mode (or hold Alt key while hovering)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:Ve?"2px solid #93C5FD":"1px solid #334155",backgroundColor:Ve?"#2563EB":"#0F172A",color:"#FFFFFF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"🔍"}),r.jsx("span",{children:Ve?"Inspecting Code (Click element)":"Inspect Code (or hold Alt)"})]}),Ve&&r.jsxs("button",{type:"button",onClick:Ge,title:"Cycle inspector info window corner (or press 'D' key while inspecting)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #475569",backgroundColor:"#1E293B",color:"#93C5FD",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"◰"}),r.jsxs("span",{children:["Dock: ",$.replace("-"," ")," (Key: D)"]})]})]})]})}const fp=typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="csv-map";Uh.createRoot(document.getElementById("root")).render(r.jsx(oo.StrictMode,{children:fp?r.jsx(mp,{}):r.jsxs(r.Fragment,{children:[r.jsx(hp,{}),r.jsx(xp,{})]})}));
