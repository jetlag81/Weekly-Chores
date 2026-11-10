(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))G(P);new MutationObserver(P=>{for(const $ of P)if($.type==="childList")for(const U of $.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&G(U)}).observe(document,{childList:!0,subtree:!0});function v(P){const $={};return P.integrity&&($.integrity=P.integrity),P.referrerPolicy&&($.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?$.credentials="include":P.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function G(P){if(P.ep)return;P.ep=!0;const $=v(P);fetch(P.href,$)}})();function Iu(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var ed={exports:{}},xa={},td={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu;function Kh(){if(hu)return Be;hu=1;var w=Symbol.for("react.element"),_=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),U=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),B=Symbol.iterator;function re(g){return g===null||typeof g!="object"?null:(g=B&&g[B]||g["@@iterator"],typeof g=="function"?g:null)}var we={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Re=Object.assign,le={};function oe(g,I,ve){this.props=g,this.context=I,this.refs=le,this.updater=ve||we}oe.prototype.isReactComponent={},oe.prototype.setState=function(g,I){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,I,"setState")},oe.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Fe(){}Fe.prototype=oe.prototype;function Se(g,I,ve){this.props=g,this.context=I,this.refs=le,this.updater=ve||we}var Y=Se.prototype=new Fe;Y.constructor=Se,Re(Y,oe.prototype),Y.isPureReactComponent=!0;var Te=Array.isArray,Ye=Object.prototype.hasOwnProperty,nt={current:null},Ue={key:!0,ref:!0,__self:!0,__source:!0};function ot(g,I,ve){var fe,Le={},xe=null,Ae=null;if(I!=null)for(fe in I.ref!==void 0&&(Ae=I.ref),I.key!==void 0&&(xe=""+I.key),I)Ye.call(I,fe)&&!Ue.hasOwnProperty(fe)&&(Le[fe]=I[fe]);var qe=arguments.length-2;if(qe===1)Le.children=ve;else if(1<qe){for(var Pe=Array(qe),St=0;St<qe;St++)Pe[St]=arguments[St+2];Le.children=Pe}if(g&&g.defaultProps)for(fe in qe=g.defaultProps,qe)Le[fe]===void 0&&(Le[fe]=qe[fe]);return{$$typeof:w,type:g,key:xe,ref:Ae,props:Le,_owner:nt.current}}function Ce(g,I){return{$$typeof:w,type:g.type,key:I,ref:g.ref,props:g.props,_owner:g._owner}}function ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===w}function He(g){var I={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ve){return I[ve]})}var J=/\/+/g;function ke(g,I){return typeof g=="object"&&g!==null&&g.key!=null?He(""+g.key):I.toString(36)}function me(g,I,ve,fe,Le){var xe=typeof g;(xe==="undefined"||xe==="boolean")&&(g=null);var Ae=!1;if(g===null)Ae=!0;else switch(xe){case"string":case"number":Ae=!0;break;case"object":switch(g.$$typeof){case w:case _:Ae=!0}}if(Ae)return Ae=g,Le=Le(Ae),g=fe===""?"."+ke(Ae,0):fe,Te(Le)?(ve="",g!=null&&(ve=g.replace(J,"$&/")+"/"),me(Le,I,ve,"",function(St){return St})):Le!=null&&(ue(Le)&&(Le=Ce(Le,ve+(!Le.key||Ae&&Ae.key===Le.key?"":(""+Le.key).replace(J,"$&/")+"/")+g)),I.push(Le)),1;if(Ae=0,fe=fe===""?".":fe+":",Te(g))for(var qe=0;qe<g.length;qe++){xe=g[qe];var Pe=fe+ke(xe,qe);Ae+=me(xe,I,ve,Pe,Le)}else if(Pe=re(g),typeof Pe=="function")for(g=Pe.call(g),qe=0;!(xe=g.next()).done;)xe=xe.value,Pe=fe+ke(xe,qe++),Ae+=me(xe,I,ve,Pe,Le);else if(xe==="object")throw I=String(g),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ce(g,I,ve){if(g==null)return g;var fe=[],Le=0;return me(g,fe,"","",function(xe){return I.call(ve,xe,Le++)}),fe}function Ie(g){if(g._status===-1){var I=g._result;I=I(),I.then(function(ve){(g._status===0||g._status===-1)&&(g._status=1,g._result=ve)},function(ve){(g._status===0||g._status===-1)&&(g._status=2,g._result=ve)}),g._status===-1&&(g._status=0,g._result=I)}if(g._status===1)return g._result.default;throw g._result}var Oe={current:null},Q={transition:null},X={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:nt};function te(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:ce,forEach:function(g,I,ve){ce(g,function(){I.apply(this,arguments)},ve)},count:function(g){var I=0;return ce(g,function(){I++}),I},toArray:function(g){return ce(g,function(I){return I})||[]},only:function(g){if(!ue(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},Be.Component=oe,Be.Fragment=v,Be.Profiler=P,Be.PureComponent=Se,Be.StrictMode=G,Be.Suspense=ee,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Be.act=te,Be.cloneElement=function(g,I,ve){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var fe=Re({},g.props),Le=g.key,xe=g.ref,Ae=g._owner;if(I!=null){if(I.ref!==void 0&&(xe=I.ref,Ae=nt.current),I.key!==void 0&&(Le=""+I.key),g.type&&g.type.defaultProps)var qe=g.type.defaultProps;for(Pe in I)Ye.call(I,Pe)&&!Ue.hasOwnProperty(Pe)&&(fe[Pe]=I[Pe]===void 0&&qe!==void 0?qe[Pe]:I[Pe])}var Pe=arguments.length-2;if(Pe===1)fe.children=ve;else if(1<Pe){qe=Array(Pe);for(var St=0;St<Pe;St++)qe[St]=arguments[St+2];fe.children=qe}return{$$typeof:w,type:g.type,key:Le,ref:xe,props:fe,_owner:Ae}},Be.createContext=function(g){return g={$$typeof:U,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:$,_context:g},g.Consumer=g},Be.createElement=ot,Be.createFactory=function(g){var I=ot.bind(null,g);return I.type=g,I},Be.createRef=function(){return{current:null}},Be.forwardRef=function(g){return{$$typeof:de,render:g}},Be.isValidElement=ue,Be.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:Ie}},Be.memo=function(g,I){return{$$typeof:M,type:g,compare:I===void 0?null:I}},Be.startTransition=function(g){var I=Q.transition;Q.transition={};try{g()}finally{Q.transition=I}},Be.unstable_act=te,Be.useCallback=function(g,I){return Oe.current.useCallback(g,I)},Be.useContext=function(g){return Oe.current.useContext(g)},Be.useDebugValue=function(){},Be.useDeferredValue=function(g){return Oe.current.useDeferredValue(g)},Be.useEffect=function(g,I){return Oe.current.useEffect(g,I)},Be.useId=function(){return Oe.current.useId()},Be.useImperativeHandle=function(g,I,ve){return Oe.current.useImperativeHandle(g,I,ve)},Be.useInsertionEffect=function(g,I){return Oe.current.useInsertionEffect(g,I)},Be.useLayoutEffect=function(g,I){return Oe.current.useLayoutEffect(g,I)},Be.useMemo=function(g,I){return Oe.current.useMemo(g,I)},Be.useReducer=function(g,I,ve){return Oe.current.useReducer(g,I,ve)},Be.useRef=function(g){return Oe.current.useRef(g)},Be.useState=function(g){return Oe.current.useState(g)},Be.useSyncExternalStore=function(g,I,ve){return Oe.current.useSyncExternalStore(g,I,ve)},Be.useTransition=function(){return Oe.current.useTransition()},Be.version="18.3.1",Be}var pu;function pd(){return pu||(pu=1,td.exports=Kh()),td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu;function Bh(){if(mu)return xa;mu=1;var w=pd(),_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,P=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function U(de,ee,M){var O,B={},re=null,we=null;M!==void 0&&(re=""+M),ee.key!==void 0&&(re=""+ee.key),ee.ref!==void 0&&(we=ee.ref);for(O in ee)G.call(ee,O)&&!$.hasOwnProperty(O)&&(B[O]=ee[O]);if(de&&de.defaultProps)for(O in ee=de.defaultProps,ee)B[O]===void 0&&(B[O]=ee[O]);return{$$typeof:_,type:de,key:re,ref:we,props:B,_owner:P.current}}return xa.Fragment=v,xa.jsx=U,xa.jsxs=U,xa}var xu;function qh(){return xu||(xu=1,ed.exports=Bh()),ed.exports}var n=qh(),L=pd();const so=Iu(L);var Nl={},rd={exports:{}},tr={},nd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu;function $h(){return fu||(fu=1,(function(w){function _(Q,X){var te=Q.length;Q.push(X);e:for(;0<te;){var g=te-1>>>1,I=Q[g];if(0<P(I,X))Q[g]=X,Q[te]=I,te=g;else break e}}function v(Q){return Q.length===0?null:Q[0]}function G(Q){if(Q.length===0)return null;var X=Q[0],te=Q.pop();if(te!==X){Q[0]=te;e:for(var g=0,I=Q.length,ve=I>>>1;g<ve;){var fe=2*(g+1)-1,Le=Q[fe],xe=fe+1,Ae=Q[xe];if(0>P(Le,te))xe<I&&0>P(Ae,Le)?(Q[g]=Ae,Q[xe]=te,g=xe):(Q[g]=Le,Q[fe]=te,g=fe);else if(xe<I&&0>P(Ae,te))Q[g]=Ae,Q[xe]=te,g=xe;else break e}}return X}function P(Q,X){var te=Q.sortIndex-X.sortIndex;return te!==0?te:Q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var $=performance;w.unstable_now=function(){return $.now()}}else{var U=Date,de=U.now();w.unstable_now=function(){return U.now()-de}}var ee=[],M=[],O=1,B=null,re=3,we=!1,Re=!1,le=!1,oe=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(Q){for(var X=v(M);X!==null;){if(X.callback===null)G(M);else if(X.startTime<=Q)G(M),X.sortIndex=X.expirationTime,_(ee,X);else break;X=v(M)}}function Te(Q){if(le=!1,Y(Q),!Re)if(v(ee)!==null)Re=!0,Ie(Ye);else{var X=v(M);X!==null&&Oe(Te,X.startTime-Q)}}function Ye(Q,X){Re=!1,le&&(le=!1,Fe(ot),ot=-1),we=!0;var te=re;try{for(Y(X),B=v(ee);B!==null&&(!(B.expirationTime>X)||Q&&!He());){var g=B.callback;if(typeof g=="function"){B.callback=null,re=B.priorityLevel;var I=g(B.expirationTime<=X);X=w.unstable_now(),typeof I=="function"?B.callback=I:B===v(ee)&&G(ee),Y(X)}else G(ee);B=v(ee)}if(B!==null)var ve=!0;else{var fe=v(M);fe!==null&&Oe(Te,fe.startTime-X),ve=!1}return ve}finally{B=null,re=te,we=!1}}var nt=!1,Ue=null,ot=-1,Ce=5,ue=-1;function He(){return!(w.unstable_now()-ue<Ce)}function J(){if(Ue!==null){var Q=w.unstable_now();ue=Q;var X=!0;try{X=Ue(!0,Q)}finally{X?ke():(nt=!1,Ue=null)}}else nt=!1}var ke;if(typeof Se=="function")ke=function(){Se(J)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ce=me.port2;me.port1.onmessage=J,ke=function(){ce.postMessage(null)}}else ke=function(){oe(J,0)};function Ie(Q){Ue=Q,nt||(nt=!0,ke())}function Oe(Q,X){ot=oe(function(){Q(w.unstable_now())},X)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(Q){Q.callback=null},w.unstable_continueExecution=function(){Re||we||(Re=!0,Ie(Ye))},w.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<Q?Math.floor(1e3/Q):5},w.unstable_getCurrentPriorityLevel=function(){return re},w.unstable_getFirstCallbackNode=function(){return v(ee)},w.unstable_next=function(Q){switch(re){case 1:case 2:case 3:var X=3;break;default:X=re}var te=re;re=X;try{return Q()}finally{re=te}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(Q,X){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var te=re;re=Q;try{return X()}finally{re=te}},w.unstable_scheduleCallback=function(Q,X,te){var g=w.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?g+te:g):te=g,Q){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=te+I,Q={id:O++,callback:X,priorityLevel:Q,startTime:te,expirationTime:I,sortIndex:-1},te>g?(Q.sortIndex=te,_(M,Q),v(ee)===null&&Q===v(M)&&(le?(Fe(ot),ot=-1):le=!0,Oe(Te,te-g))):(Q.sortIndex=I,_(ee,Q),Re||we||(Re=!0,Ie(Ye))),Q},w.unstable_shouldYield=He,w.unstable_wrapCallback=function(Q){var X=re;return function(){var te=re;re=X;try{return Q.apply(this,arguments)}finally{re=te}}}})(od)),od}var yu;function Hh(){return yu||(yu=1,nd.exports=$h()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function zh(){if(gu)return tr;gu=1;var w=pd(),_=Hh();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G=new Set,P={};function $(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(P[e]=t,e=0;e<t.length;e++)G.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},B={};function re(e){return ee.call(B,e)?!0:ee.call(O,e)?!1:M.test(e)?B[e]=!0:(O[e]=!0,!1)}function we(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Re(e,t,r,o){if(t===null||typeof t>"u"||we(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,r,o,a,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){oe[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){oe[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){oe[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function Se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fe,Se);oe[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fe,Se);oe[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fe,Se);oe[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),oe.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){oe[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,r,o){var a=oe.hasOwnProperty(t)?oe[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Re(t,r,a,o)&&(r=null),o||a===null?re(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,o=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var Te=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ye=Symbol.for("react.element"),nt=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),He=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,g;function I(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var ve=!1;function fe(e,t){if(!e||ve)return"";ve=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),l=o.stack.split(`
`),c=a.length-1,y=l.length-1;1<=c&&0<=y&&a[c]!==l[y];)y--;for(;1<=c&&0<=y;c--,y--)if(a[c]!==l[y]){if(c!==1||y!==1)do if(c--,y--,0>y||a[c]!==l[y]){var k=`
`+a[c].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=c&&0<=y);break}}}finally{ve=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?I(e):""}function Le(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function xe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case nt:return"Portal";case Ce:return"Profiler";case ot:return"StrictMode";case ke:return"Suspense";case me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case He:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}function Ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(t);case 8:return t===ot?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function St(e){var t=Pe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(c){o=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||(e._valueTracker=St(e))}function io(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Pe(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function on(e,t){var r=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gt(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=qe(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tn(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function st(e,t){Tn(e,t);var r=qe(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ut(e,t.type,r):t.hasOwnProperty("defaultValue")&&ut(e,t.type,qe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wr(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ut(e,t,r){(t!=="number"||Kt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var sn=Array.isArray;function Ut(e,t,r,o){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&o&&(e[r].defaultSelected=!0)}else{for(r=""+qe(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mt(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(v(92));if(sn(r)){if(1<r.length)throw Error(v(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qe(r)}}function an(e,t){var r=qe(t.value),o=qe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function co(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?co(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,wa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ba=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){ba.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function rr(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function ln(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=rr(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,a):e[r]=a}}var Ns=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(Ns[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function cr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kr=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oo=null,ur=null,dn=null;function Po(e){if(e=ea(e)){if(typeof Oo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Ka(t),Oo(e.stateNode,e.type,t))}}function As(e){ur?dn?dn.push(e):dn=[e]:ur=e}function Ko(){if(ur){var e=ur,t=dn;if(dn=ur=null,Po(e),t)for(e=0;e<t.length;e++)Po(t[e])}}function Bo(e,t){return e(t)}function _a(){}var ho=!1;function va(e,t,r){if(ho)return e(t,r);ho=!0;try{return Bo(e,t,r)}finally{ho=!1,(ur!==null||dn!==null)&&(_a(),Ko())}}function Pr(e,t){var r=e.stateNode;if(r===null)return null;var o=Ka(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(v(231,t,typeof r));return r}var Ds=!1;if(de)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ds=!1}function js(e,t,r,o,a,l,c,y,k){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(q){this.onError(q)}}var po=!1,Bt=null,Rn=!1,hr=null,Ts={onError:function(e){po=!0,Bt=e}};function ka(e,t,r,o,a,l,c,y,k){po=!1,Bt=null,js.apply(Ts,arguments)}function mo(e,t,r,o,a,l,c,y,k){if(ka.apply(this,arguments),po){if(po){var E=Bt;po=!1,Bt=null}else throw Error(v(198));Rn||(Rn=!0,hr=E)}}function Cr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Es(e){if(Cr(e)!==e)throw Error(v(188))}function De(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(v(188));return t!==e?null:e}for(var r=e,o=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Es(a),e;if(l===o)return Es(a),t;l=l.sibling}throw Error(v(188))}if(r.return!==o.return)r=a,o=l;else{for(var c=!1,y=a.child;y;){if(y===r){c=!0,r=a,o=l;break}if(y===o){c=!0,o=a,r=l;break}y=y.sibling}if(!c){for(y=l.child;y;){if(y===r){c=!0,r=l,o=a;break}if(y===o){c=!0,o=l,r=a;break}y=y.sibling}if(!c)throw Error(v(189))}}if(r.alternate!==o)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?e:t}function qo(e){return e=De(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Na(e);if(t!==null)return t;e=e.sibling}return null}var Ms=_.unstable_scheduleCallback,Rs=_.unstable_cancelCallback,$o=_.unstable_shouldYield,Ln=_.unstable_requestPaint,Ze=_.unstable_now,Ls=_.unstable_getCurrentPriorityLevel,Nr=_.unstable_ImmediatePriority,Fn=_.unstable_UserBlockingPriority,Kr=_.unstable_NormalPriority,Fs=_.unstable_LowPriority,Is=_.unstable_IdlePriority,Sr=null,We=null;function Rt(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:xo,Ar=Math.log,Sa=Math.LN2;function xo(e){return e>>>=0,e===0?32:31-(Ar(e)/Sa|0)|0}var Qe=64,qt=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,c=r&268435455;if(c!==0){var y=c&~a;y!==0?o=Vt(y):(l&=c,l!==0&&(o=Vt(l)))}else c=r&~a,c!==0?o=Vt(c):l!==0&&(o=Vt(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Lt(t),a=1<<r,o|=e[r],t&=~a;return o}function qr(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-Lt(l),y=1<<c,k=a[c];k===-1?((y&r)===0||(y&o)!==0)&&(a[c]=qr(y,t)):k<=t&&(e.expiredLanes|=y),l&=~y}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function El(){var e=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),e}function Ws(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $r(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=r}function nr(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Lt(r),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,r&=~l}}function Hr(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Lt(r),a=1<<o;a&t|e[o]&t&&(e[o]|=t),r&=~a}}var Ve=0;function cn(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var un,In,Da,yo,Os,Ho=!1,hn=[],pr=null,pn=null,mn=null,Yt=new Map,et=new Map,mt=[],ja="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":et.delete(t.pointerId)}}function zr(e,t,r,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ea(t),t!==null&&In(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Gr(e,t,r,o,a){switch(t){case"focusin":return pr=zr(pr,e,t,r,o,a),!0;case"dragenter":return pn=zr(pn,e,t,r,o,a),!0;case"mouseover":return mn=zr(mn,e,t,r,o,a),!0;case"pointerover":var l=a.pointerId;return Yt.set(l,zr(Yt.get(l)||null,e,t,r,o,a)),!0;case"gotpointercapture":return l=a.pointerId,et.set(l,zr(et.get(l)||null,e,t,r,o,a)),!0}return!1}function Wn(e){var t=No(e.target);if(t!==null){var r=Cr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ca(r),t!==null){e.blockedOn=t,Os(e.priority,function(){Da(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);kr=o,r.target.dispatchEvent(o),kr=null}else return t=ea(r),t!==null&&In(t),e.blockedOn=r,!1;t.shift()}return!0}function Ur(e,t,r){go(e)&&r.delete(t)}function Ps(){Ho=!1,pr!==null&&go(pr)&&(pr=null),pn!==null&&go(pn)&&(pn=null),mn!==null&&go(mn)&&(mn=null),Yt.forEach(Ur),et.forEach(Ur)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Ho||(Ho=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,Ps)))}function Pn(e){function t(a){return On(a,e)}if(0<hn.length){On(hn[0],e);for(var r=1;r<hn.length;r++){var o=hn[r];o.blockedOn===e&&(o.blockedOn=null)}}for(pr!==null&&On(pr,e),pn!==null&&On(pn,e),mn!==null&&On(mn,e),Yt.forEach(t),et.forEach(t),r=0;r<mt.length;r++)o=mt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)Wn(r),r.blockedOn===null&&mt.shift()}var Kn=Te.ReactCurrentBatchConfig,xn=!0;function Ks(e,t,r,o){var a=Ve,l=Kn.transition;Kn.transition=null;try{Ve=1,zo(e,t,r,o)}finally{Ve=a,Kn.transition=l}}function mr(e,t,r,o){var a=Ve,l=Kn.transition;Kn.transition=null;try{Ve=4,zo(e,t,r,o)}finally{Ve=a,Kn.transition=l}}function zo(e,t,r,o){if(xn){var a=Vr(e,t,r,o);if(a===null)Hl(e,t,o,Go,r),At(e,o);else if(Gr(a,e,t,r,o))o.stopPropagation();else if(At(e,o),t&4&&-1<ja.indexOf(e)){for(;a!==null;){var l=ea(a);if(l!==null&&un(l),l=Vr(e,t,r,o),l===null&&Hl(e,t,o,Go,r),l===a)break;a=l}a!==null&&o.stopPropagation()}else Hl(e,t,o,null,r)}}var Go=null;function Vr(e,t,r,o){if(Go=null,e=uo(o),e=No(e),e!==null)if(t=Cr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ca(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ls()){case Nr:return 1;case Fn:return 4;case Kr:case Fs:return 16;case Is:return 536870912;default:return 16}default:return 16}}var Dr=null,wo=null,bo=null;function Ta(){if(bo)return bo;var e,t=wo,r=t.length,o,a="value"in Dr?Dr.value:Dr.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var c=r-e;for(o=1;o<=c&&t[r-o]===a[l-o];o++);return bo=a.slice(e,1<o?1-o:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function vo(){return!1}function Ft(e){function t(r,o,a,l,c){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(l):l[y]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_o:vo,this.isPropagationStopped=vo,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=Ft(fn),ko=te({},fn,{view:0,detail:0}),Vo=Ft(ko),$s,Hs,jr,Yo=te({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:p,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?($s=e.screenX-jr.screenX,Hs=e.screenY-jr.screenY):Hs=$s=0,jr=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),Ea=Ft(Yo),zs=te({},Yo,{dataTransfer:0}),Ml=Ft(zs),Rl=te({},ko,{relatedTarget:0}),or=Ft(Rl),Bn=te({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yr=Ft(Bn),Ll=te({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fl=Ft(Ll),Il=te({},fn,{data:0}),Qr=Ft(Il),s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u[e])?!!t[e]:!1}function p(){return m}var h=te({},ko,{key:function(e){if(e.key){var t=s[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:p,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d=Ft(h),x=te({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f=Ft(x),C=te({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:p}),D=Ft(C),T=te({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=Ft(T),N=te({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W=Ft(N),z=[9,13,27,32],F=de&&"CompositionEvent"in window,R=null;de&&"documentMode"in document&&(R=document.documentMode);var Z=de&&"TextEvent"in window&&!R,ne=de&&(!F||R&&8<R&&11>=R),Ee=" ",$e=!1;function at(e,t){switch(e){case"keyup":return z.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ye=!1;function Me(e,t){switch(e){case"compositionend":return wt(t);case"keypress":return t.which!==32?null:($e=!0,Ee);case"textInput":return e=t.data,e===Ee&&$e?null:e;default:return null}}function Ke(e,t){if(ye)return e==="compositionend"||!F&&at(e,t)?(e=Ta(),bo=wo=Dr=null,ye=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ne&&t.locale!=="ko"?null:t.data;default:return null}}var tt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tt[e.type]:t==="textarea"}function xr(e,t,r,o){As(o),t=Wa(t,"onChange"),0<t.length&&(r=new qs("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var fr=null,Xe=null;function Ma(e){Dd(e,0)}function Co(e){var t=ts(e);if(io(t))return e}function Ra(e,t){if(e==="change")return t}var Gs=!1;if(de){var qn;if(de){var $n="oninput"in document;if(!$n){var yn=document.createElement("div");yn.setAttribute("oninput","return;"),$n=typeof yn.oninput=="function"}qn=$n}else qn=!1;Gs=qn&&(!document.documentMode||9<document.documentMode)}function Jr(){fr&&(fr.detachEvent("onpropertychange",gn),Xe=fr=null)}function gn(e){if(e.propertyName==="value"&&Co(Xe)){var t=[];xr(t,Xe,e,uo(e)),va(Ma,t)}}function Us(e,t,r){e==="focusin"?(Jr(),fr=t,Xe=r,fr.attachEvent("onpropertychange",gn)):e==="focusout"&&Jr()}function Qo(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Xe)}function vt(e,t){if(e==="click")return Co(t)}function Tr(e,t){if(e==="input"||e==="change")return Co(t)}function Gu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Er=typeof Object.is=="function"?Object.is:Gu;function Vs(e,t){if(Er(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!ee.call(t,a)||!Er(e[a],t[a]))return!1}return!0}function xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var r=xd(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xd(r)}}function yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(){for(var e=window,t=Kt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uu(e){var t=gd(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yd(r.ownerDocument.documentElement,r)){if(o!==null&&Wl(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=fd(r,l);var c=fd(r,o);a&&c&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vu=de&&"documentMode"in document&&11>=document.documentMode,Xo=null,Ol=null,Ys=null,Pl=!1;function wd(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pl||Xo==null||Xo!==Kt(o)||(o=Xo,"selectionStart"in o&&Wl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&Vs(Ys,o)||(Ys=o,o=Wa(Ol,"onSelect"),0<o.length&&(t=new qs("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Xo)))}function La(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Jo={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Kl={},bd={};de&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function Fa(e){if(Kl[e])return Kl[e];if(!Jo[e])return e;var t=Jo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in bd)return Kl[e]=t[r];return e}var _d=Fa("animationend"),vd=Fa("animationiteration"),kd=Fa("animationstart"),Cd=Fa("transitionend"),Nd=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){Nd.set(e,t),$(t,[e])}for(var Bl=0;Bl<Sd.length;Bl++){var ql=Sd[Bl],Yu=ql.toLowerCase(),Qu=ql[0].toUpperCase()+ql.slice(1);Hn(Yu,"on"+Qu)}Hn(_d,"onAnimationEnd"),Hn(vd,"onAnimationIteration"),Hn(kd,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Cd,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Ad(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,mo(o,t,void 0,e),e.currentTarget=null}function Dd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var c=o.length-1;0<=c;c--){var y=o[c],k=y.instance,E=y.currentTarget;if(y=y.listener,k!==l&&a.isPropagationStopped())break e;Ad(a,y,E),l=k}else for(c=0;c<o.length;c++){if(y=o[c],k=y.instance,E=y.currentTarget,y=y.listener,k!==l&&a.isPropagationStopped())break e;Ad(a,y,E),l=k}}}if(Rn)throw e=hr,Rn=!1,hr=null,e}function lt(e,t){var r=t[Ql];r===void 0&&(r=t[Ql]=new Set);var o=e+"__bubble";r.has(o)||(jd(t,e,2,!1),r.add(o))}function $l(e,t,r){var o=0;t&&(o|=4),jd(r,e,o,t)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[Ia]){e[Ia]=!0,G.forEach(function(r){r!=="selectionchange"&&(Xu.has(r)||$l(r,!1,e),$l(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ia]||(t[Ia]=!0,$l("selectionchange",!1,t))}}function jd(e,t,r,o){switch(Bs(t)){case 1:var a=Ks;break;case 4:a=mr;break;default:a=zo}r=a.bind(null,t,r,e),a=void 0,!Ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Hl(e,t,r,o,a){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var y=o.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(c===4)for(c=o.return;c!==null;){var k=c.tag;if((k===3||k===4)&&(k=c.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;c=c.return}for(;y!==null;){if(c=No(y),c===null)return;if(k=c.tag,k===5||k===6){o=l=c;continue e}y=y.parentNode}}o=o.return}va(function(){var E=l,q=uo(r),H=[];e:{var K=Nd.get(e);if(K!==void 0){var se=qs,ie=e;switch(e){case"keypress":if(Uo(r)===0)break e;case"keydown":case"keyup":se=d;break;case"focusin":ie="focus",se=or;break;case"focusout":ie="blur",se=or;break;case"beforeblur":case"afterblur":se=or;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=D;break;case _d:case vd:case kd:se=Yr;break;case Cd:se=b;break;case"scroll":se=Vo;break;case"wheel":se=W;break;case"copy":case"cut":case"paste":se=Fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=f}var he=(t&4)!==0,ft=!he&&e==="scroll",A=he?K!==null?K+"Capture":null:K;he=[];for(var S=E,j;S!==null;){j=S;var V=j.stateNode;if(j.tag===5&&V!==null&&(j=V,A!==null&&(V=Pr(S,A),V!=null&&he.push(Js(S,V,j)))),ft)break;S=S.return}0<he.length&&(K=new se(K,ie,null,r,q),H.push({event:K,listeners:he}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",K&&r!==kr&&(ie=r.relatedTarget||r.fromElement)&&(No(ie)||ie[wn]))break e;if((se||K)&&(K=q.window===q?q:(K=q.ownerDocument)?K.defaultView||K.parentWindow:window,se?(ie=r.relatedTarget||r.toElement,se=E,ie=ie?No(ie):null,ie!==null&&(ft=Cr(ie),ie!==ft||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(se=null,ie=E),se!==ie)){if(he=Ea,V="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(he=f,V="onPointerLeave",A="onPointerEnter",S="pointer"),ft=se==null?K:ts(se),j=ie==null?K:ts(ie),K=new he(V,S+"leave",se,r,q),K.target=ft,K.relatedTarget=j,V=null,No(q)===E&&(he=new he(A,S+"enter",ie,r,q),he.target=j,he.relatedTarget=ft,V=he),ft=V,se&&ie)t:{for(he=se,A=ie,S=0,j=he;j;j=Zo(j))S++;for(j=0,V=A;V;V=Zo(V))j++;for(;0<S-j;)he=Zo(he),S--;for(;0<j-S;)A=Zo(A),j--;for(;S--;){if(he===A||A!==null&&he===A.alternate)break t;he=Zo(he),A=Zo(A)}he=null}else he=null;se!==null&&Td(H,K,se,he,!1),ie!==null&&ft!==null&&Td(H,ft,ie,he,!0)}}e:{if(K=E?ts(E):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var pe=Ra;else if(Xr(K))if(Gs)pe=Tr;else{pe=Qo;var be=Us}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(pe=vt);if(pe&&(pe=pe(e,E))){xr(H,pe,r,q);break e}be&&be(e,K,E),e==="focusout"&&(be=K._wrapperState)&&be.controlled&&K.type==="number"&&ut(K,"number",K.value)}switch(be=E?ts(E):window,e){case"focusin":(Xr(be)||be.contentEditable==="true")&&(Xo=be,Ol=E,Ys=null);break;case"focusout":Ys=Ol=Xo=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,wd(H,r,q);break;case"selectionchange":if(Vu)break;case"keydown":case"keyup":wd(H,r,q)}var _e;if(F)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ye?at(e,r)&&(je="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(je="onCompositionStart");je&&(ne&&r.locale!=="ko"&&(ye||je!=="onCompositionStart"?je==="onCompositionEnd"&&ye&&(_e=Ta()):(Dr=q,wo="value"in Dr?Dr.value:Dr.textContent,ye=!0)),be=Wa(E,je),0<be.length&&(je=new Qr(je,e,null,r,q),H.push({event:je,listeners:be}),_e?je.data=_e:(_e=wt(r),_e!==null&&(je.data=_e)))),(_e=Z?Me(e,r):Ke(e,r))&&(E=Wa(E,"onBeforeInput"),0<E.length&&(q=new Qr("onBeforeInput","beforeinput",null,r,q),H.push({event:q,listeners:E}),q.data=_e))}Dd(H,t)})}function Js(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Pr(e,r),l!=null&&o.unshift(Js(e,l,a)),l=Pr(e,t),l!=null&&o.push(Js(e,l,a))),e=e.return}return o}function Zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,r,o,a){for(var l=t._reactName,c=[];r!==null&&r!==o;){var y=r,k=y.alternate,E=y.stateNode;if(k!==null&&k===o)break;y.tag===5&&E!==null&&(y=E,a?(k=Pr(r,l),k!=null&&c.unshift(Js(r,k,y))):a||(k=Pr(r,l),k!=null&&c.push(Js(r,k,y)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var Ju=/\r\n?/g,Zu=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace(Ju,`
`).replace(Zu,"")}function Oa(e,t,r){if(t=Ed(t),Ed(e)!==t&&r)throw Error(v(425))}function Pa(){}var zl=null,Gl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(rh)}:Vl;function rh(e){setTimeout(function(){throw e})}function Yl(e,t){var r=t,o=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){e.removeChild(a),Pn(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);Pn(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),Zr="__reactFiber$"+es,Zs="__reactProps$"+es,wn="__reactContainer$"+es,Ql="__reactEvents$"+es,nh="__reactListeners$"+es,oh="__reactHandles$"+es;function No(e){var t=e[Zr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wn]||r[Zr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rd(e);e!==null;){if(r=e[Zr])return r;e=Rd(e)}return t}e=r,r=e.parentNode}return null}function ea(e){return e=e[Zr]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ts(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Ka(e){return e[Zs]||null}var Xl=[],rs=-1;function Gn(e){return{current:e}}function it(e){0>rs||(e.current=Xl[rs],Xl[rs]=null,rs--)}function rt(e,t){rs++,Xl[rs]=e.current,e.current=t}var Un={},It=Gn(Un),Qt=Gn(!1),So=Un;function ns(e,t){var r=e.type.contextTypes;if(!r)return Un;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xt(e){return e=e.childContextTypes,e!=null}function Ba(){it(Qt),it(It)}function Ld(e,t,r){if(It.current!==Un)throw Error(v(168));rt(It,t),rt(Qt,r)}function Fd(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(v(108,Ae(e)||"Unknown",a));return te({},r,o)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,So=It.current,rt(It,e),rt(Qt,Qt.current),!0}function Id(e,t,r){var o=e.stateNode;if(!o)throw Error(v(169));r?(e=Fd(e,t,So),o.__reactInternalMemoizedMergedChildContext=e,it(Qt),it(It),rt(It,e)):it(Qt),rt(Qt,r)}var bn=null,$a=!1,Jl=!1;function Wd(e){bn===null?bn=[e]:bn.push(e)}function sh(e){$a=!0,Wd(e)}function Vn(){if(!Jl&&bn!==null){Jl=!0;var e=0,t=Ve;try{var r=bn;for(Ve=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}bn=null,$a=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),Ms(Nr,Vn),a}finally{Ve=t,Jl=!1}}return null}var os=[],ss=0,Ha=null,za=0,yr=[],gr=0,Ao=null,_n=1,vn="";function Do(e,t){os[ss++]=za,os[ss++]=Ha,Ha=e,za=t}function Od(e,t,r){yr[gr++]=_n,yr[gr++]=vn,yr[gr++]=Ao,Ao=e;var o=_n;e=vn;var a=32-Lt(o)-1;o&=~(1<<a),r+=1;var l=32-Lt(t)+a;if(30<l){var c=a-a%5;l=(o&(1<<c)-1).toString(32),o>>=c,a-=c,_n=1<<32-Lt(t)+a|r<<a|o,vn=l+e}else _n=1<<l|r<<a|o,vn=e}function Zl(e){e.return!==null&&(Do(e,1),Od(e,1,0))}function ei(e){for(;e===Ha;)Ha=os[--ss],os[ss]=null,za=os[--ss],os[ss]=null;for(;e===Ao;)Ao=yr[--gr],yr[gr]=null,vn=yr[--gr],yr[gr]=null,_n=yr[--gr],yr[gr]=null}var sr=null,ar=null,dt=!1,Mr=null;function Pd(e,t){var r=vr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Kd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sr=e,ar=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sr=e,ar=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ao!==null?{id:_n,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=vr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,sr=e,ar=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ri(e){if(dt){var t=ar;if(t){var r=t;if(!Kd(e,t)){if(ti(e))throw Error(v(418));t=zn(r.nextSibling);var o=sr;t&&Kd(e,t)?Pd(o,r):(e.flags=e.flags&-4097|2,dt=!1,sr=e)}}else{if(ti(e))throw Error(v(418));e.flags=e.flags&-4097|2,dt=!1,sr=e}}}function Bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sr=e}function Ga(e){if(e!==sr)return!1;if(!dt)return Bd(e),dt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=ar)){if(ti(e))throw qd(),Error(v(418));for(;t;)Pd(e,t),t=zn(t.nextSibling)}if(Bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ar=zn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ar=null}}else ar=sr?zn(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=ar;e;)e=zn(e.nextSibling)}function as(){ar=sr=null,dt=!1}function ni(e){Mr===null?Mr=[e]:Mr.push(e)}var ah=Te.ReactCurrentBatchConfig;function ta(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var o=r.stateNode}if(!o)throw Error(v(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var y=a.refs;c===null?delete y[l]:y[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $d(e){var t=e._init;return t(e._payload)}function Hd(e){function t(A,S){if(e){var j=A.deletions;j===null?(A.deletions=[S],A.flags|=16):j.push(S)}}function r(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function o(A,S){for(A=new Map;S!==null;)S.key!==null?A.set(S.key,S):A.set(S.index,S),S=S.sibling;return A}function a(A,S){return A=ro(A,S),A.index=0,A.sibling=null,A}function l(A,S,j){return A.index=j,e?(j=A.alternate,j!==null?(j=j.index,j<S?(A.flags|=2,S):j):(A.flags|=2,S)):(A.flags|=1048576,S)}function c(A){return e&&A.alternate===null&&(A.flags|=2),A}function y(A,S,j,V){return S===null||S.tag!==6?(S=Vi(j,A.mode,V),S.return=A,S):(S=a(S,j),S.return=A,S)}function k(A,S,j,V){var pe=j.type;return pe===Ue?q(A,S,j.props.children,V,j.key):S!==null&&(S.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Ie&&$d(pe)===S.type)?(V=a(S,j.props),V.ref=ta(A,S,j),V.return=A,V):(V=yl(j.type,j.key,j.props,null,A.mode,V),V.ref=ta(A,S,j),V.return=A,V)}function E(A,S,j,V){return S===null||S.tag!==4||S.stateNode.containerInfo!==j.containerInfo||S.stateNode.implementation!==j.implementation?(S=Yi(j,A.mode,V),S.return=A,S):(S=a(S,j.children||[]),S.return=A,S)}function q(A,S,j,V,pe){return S===null||S.tag!==7?(S=Io(j,A.mode,V,pe),S.return=A,S):(S=a(S,j),S.return=A,S)}function H(A,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Vi(""+S,A.mode,j),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ye:return j=yl(S.type,S.key,S.props,null,A.mode,j),j.ref=ta(A,null,S),j.return=A,j;case nt:return S=Yi(S,A.mode,j),S.return=A,S;case Ie:var V=S._init;return H(A,V(S._payload),j)}if(sn(S)||X(S))return S=Io(S,A.mode,j,null),S.return=A,S;Ua(A,S)}return null}function K(A,S,j,V){var pe=S!==null?S.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return pe!==null?null:y(A,S,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ye:return j.key===pe?k(A,S,j,V):null;case nt:return j.key===pe?E(A,S,j,V):null;case Ie:return pe=j._init,K(A,S,pe(j._payload),V)}if(sn(j)||X(j))return pe!==null?null:q(A,S,j,V,null);Ua(A,j)}return null}function se(A,S,j,V,pe){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(j)||null,y(S,A,""+V,pe);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ye:return A=A.get(V.key===null?j:V.key)||null,k(S,A,V,pe);case nt:return A=A.get(V.key===null?j:V.key)||null,E(S,A,V,pe);case Ie:var be=V._init;return se(A,S,j,be(V._payload),pe)}if(sn(V)||X(V))return A=A.get(j)||null,q(S,A,V,pe,null);Ua(S,V)}return null}function ie(A,S,j,V){for(var pe=null,be=null,_e=S,je=S=0,Nt=null;_e!==null&&je<j.length;je++){_e.index>je?(Nt=_e,_e=null):Nt=_e.sibling;var Ge=K(A,_e,j[je],V);if(Ge===null){_e===null&&(_e=Nt);break}e&&_e&&Ge.alternate===null&&t(A,_e),S=l(Ge,S,je),be===null?pe=Ge:be.sibling=Ge,be=Ge,_e=Nt}if(je===j.length)return r(A,_e),dt&&Do(A,je),pe;if(_e===null){for(;je<j.length;je++)_e=H(A,j[je],V),_e!==null&&(S=l(_e,S,je),be===null?pe=_e:be.sibling=_e,be=_e);return dt&&Do(A,je),pe}for(_e=o(A,_e);je<j.length;je++)Nt=se(_e,A,je,j[je],V),Nt!==null&&(e&&Nt.alternate!==null&&_e.delete(Nt.key===null?je:Nt.key),S=l(Nt,S,je),be===null?pe=Nt:be.sibling=Nt,be=Nt);return e&&_e.forEach(function(no){return t(A,no)}),dt&&Do(A,je),pe}function he(A,S,j,V){var pe=X(j);if(typeof pe!="function")throw Error(v(150));if(j=pe.call(j),j==null)throw Error(v(151));for(var be=pe=null,_e=S,je=S=0,Nt=null,Ge=j.next();_e!==null&&!Ge.done;je++,Ge=j.next()){_e.index>je?(Nt=_e,_e=null):Nt=_e.sibling;var no=K(A,_e,Ge.value,V);if(no===null){_e===null&&(_e=Nt);break}e&&_e&&no.alternate===null&&t(A,_e),S=l(no,S,je),be===null?pe=no:be.sibling=no,be=no,_e=Nt}if(Ge.done)return r(A,_e),dt&&Do(A,je),pe;if(_e===null){for(;!Ge.done;je++,Ge=j.next())Ge=H(A,Ge.value,V),Ge!==null&&(S=l(Ge,S,je),be===null?pe=Ge:be.sibling=Ge,be=Ge);return dt&&Do(A,je),pe}for(_e=o(A,_e);!Ge.done;je++,Ge=j.next())Ge=se(_e,A,je,Ge.value,V),Ge!==null&&(e&&Ge.alternate!==null&&_e.delete(Ge.key===null?je:Ge.key),S=l(Ge,S,je),be===null?pe=Ge:be.sibling=Ge,be=Ge);return e&&_e.forEach(function(Ph){return t(A,Ph)}),dt&&Do(A,je),pe}function ft(A,S,j,V){if(typeof j=="object"&&j!==null&&j.type===Ue&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ye:e:{for(var pe=j.key,be=S;be!==null;){if(be.key===pe){if(pe=j.type,pe===Ue){if(be.tag===7){r(A,be.sibling),S=a(be,j.props.children),S.return=A,A=S;break e}}else if(be.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Ie&&$d(pe)===be.type){r(A,be.sibling),S=a(be,j.props),S.ref=ta(A,be,j),S.return=A,A=S;break e}r(A,be);break}else t(A,be);be=be.sibling}j.type===Ue?(S=Io(j.props.children,A.mode,V,j.key),S.return=A,A=S):(V=yl(j.type,j.key,j.props,null,A.mode,V),V.ref=ta(A,S,j),V.return=A,A=V)}return c(A);case nt:e:{for(be=j.key;S!==null;){if(S.key===be)if(S.tag===4&&S.stateNode.containerInfo===j.containerInfo&&S.stateNode.implementation===j.implementation){r(A,S.sibling),S=a(S,j.children||[]),S.return=A,A=S;break e}else{r(A,S);break}else t(A,S);S=S.sibling}S=Yi(j,A.mode,V),S.return=A,A=S}return c(A);case Ie:return be=j._init,ft(A,S,be(j._payload),V)}if(sn(j))return ie(A,S,j,V);if(X(j))return he(A,S,j,V);Ua(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,S!==null&&S.tag===6?(r(A,S.sibling),S=a(S,j),S.return=A,A=S):(r(A,S),S=Vi(j,A.mode,V),S.return=A,A=S),c(A)):r(A,S)}return ft}var ls=Hd(!0),zd=Hd(!1),Va=Gn(null),Ya=null,is=null,oi=null;function si(){oi=is=Ya=null}function ai(e){var t=Va.current;it(Va),e._currentValue=t}function li(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function ds(e,t){Ya=e,oi=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Jt=!0),e.firstContext=null)}function wr(e){var t=e._currentValue;if(oi!==e)if(e={context:e,memoizedValue:t,next:null},is===null){if(Ya===null)throw Error(v(308));is=e,Ya.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return t}var jo=null;function ii(e){jo===null?jo=[e]:jo.push(e)}function Gd(e,t,r,o){var a=t.interleaved;return a===null?(r.next=r,ii(t)):(r.next=a.next,a.next=r),t.interleaved=r,kn(e,o)}function kn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Yn=!1;function di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,kn(e,r)}return a=o.interleaved,a===null?(t.next=t,ii(o)):(t.next=a.next,a.next=t),o.interleaved=t,kn(e,r)}function Qa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Hr(e,r)}}function Vd(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=c:l=l.next=c,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Xa(e,t,r,o){var a=e.updateQueue;Yn=!1;var l=a.firstBaseUpdate,c=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var k=y,E=k.next;k.next=null,c===null?l=E:c.next=E,c=k;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==c&&(y===null?q.firstBaseUpdate=E:y.next=E,q.lastBaseUpdate=k))}if(l!==null){var H=a.baseState;c=0,q=E=k=null,y=l;do{var K=y.lane,se=y.eventTime;if((o&K)===K){q!==null&&(q=q.next={eventTime:se,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var ie=e,he=y;switch(K=t,se=r,he.tag){case 1:if(ie=he.payload,typeof ie=="function"){H=ie.call(se,H,K);break e}H=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=he.payload,K=typeof ie=="function"?ie.call(se,H,K):ie,K==null)break e;H=te({},H,K);break e;case 2:Yn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,K=a.effects,K===null?a.effects=[y]:K.push(y))}else se={eventTime:se,lane:K,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(E=q=se,k=H):q=q.next=se,c|=K;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;K=y,y=K.next,K.next=null,a.lastBaseUpdate=K,a.shared.pending=null}}while(!0);if(q===null&&(k=H),a.baseState=k,a.firstBaseUpdate=E,a.lastBaseUpdate=q,t=a.shared.interleaved,t!==null){a=t;do c|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Mo|=c,e.lanes=c,e.memoizedState=H}}function Yd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var ra={},en=Gn(ra),na=Gn(ra),oa=Gn(ra);function To(e){if(e===ra)throw Error(v(174));return e}function ci(e,t){switch(rt(oa,t),rt(na,e),rt(en,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}it(en),rt(en,t)}function cs(){it(en),it(na),it(oa)}function Qd(e){To(oa.current);var t=To(en.current),r=Cs(t,e.type);t!==r&&(rt(na,e),rt(en,r))}function ui(e){na.current===e&&(it(en),it(na))}var ht=Gn(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function pi(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var Za=Te.ReactCurrentDispatcher,mi=Te.ReactCurrentBatchConfig,Eo=0,pt=null,bt=null,kt=null,el=!1,sa=!1,aa=0,lh=0;function Wt(){throw Error(v(321))}function xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Er(e[r],t[r]))return!1;return!0}function fi(e,t,r,o,a,l){if(Eo=l,pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?uh:hh,e=r(o,a),sa){l=0;do{if(sa=!1,aa=0,25<=l)throw Error(v(301));l+=1,kt=bt=null,t.updateQueue=null,Za.current=ph,e=r(o,a)}while(sa)}if(Za.current=nl,t=bt!==null&&bt.next!==null,Eo=0,kt=bt=pt=null,el=!1,t)throw Error(v(300));return e}function yi(){var e=aa!==0;return aa=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?pt.memoizedState=kt=e:kt=kt.next=e,kt}function br(){if(bt===null){var e=pt.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=kt===null?pt.memoizedState:kt.next;if(t!==null)kt=t,bt=e;else{if(e===null)throw Error(v(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},kt===null?pt.memoizedState=kt=e:kt=kt.next=e}return kt}function la(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=br(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=bt,a=o.baseQueue,l=r.pending;if(l!==null){if(a!==null){var c=a.next;a.next=l.next,l.next=c}o.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,o=o.baseState;var y=c=null,k=null,E=l;do{var q=E.lane;if((Eo&q)===q)k!==null&&(k=k.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var H={lane:q,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};k===null?(y=k=H,c=o):k=k.next=H,pt.lanes|=q,Mo|=q}E=E.next}while(E!==null&&E!==l);k===null?c=o:k.next=y,Er(o,t.memoizedState)||(Jt=!0),t.memoizedState=o,t.baseState=c,t.baseQueue=k,r.lastRenderedState=o}if(e=r.interleaved,e!==null){a=e;do l=a.lane,pt.lanes|=l,Mo|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wi(e){var t=br(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var o=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var c=a=a.next;do l=e(l,c.action),c=c.next;while(c!==a);Er(l,t.memoizedState)||(Jt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,o]}function Xd(){}function Jd(e,t){var r=pt,o=br(),a=t(),l=!Er(o.memoizedState,a);if(l&&(o.memoizedState=a,Jt=!0),o=o.queue,bi(tc.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||kt!==null&&kt.memoizedState.tag&1){if(r.flags|=2048,ia(9,ec.bind(null,r,o,a,t),void 0,null),Ct===null)throw Error(v(349));(Eo&30)!==0||Zd(r,t,a)}return a}function Zd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ec(e,t,r,o){t.value=r,t.getSnapshot=o,rc(t)&&nc(e)}function tc(e,t,r){return r(function(){rc(t)&&nc(e)})}function rc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Er(e,r)}catch{return!0}}function nc(e){var t=kn(e,1);t!==null&&Ir(t,e,1,-1)}function oc(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t.queue=e,e=e.dispatch=ch.bind(null,pt,e),[t.memoizedState,e]}function ia(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function sc(){return br().memoizedState}function tl(e,t,r,o){var a=tn();pt.flags|=e,a.memoizedState=ia(1|t,r,void 0,o===void 0?null:o)}function rl(e,t,r,o){var a=br();o=o===void 0?null:o;var l=void 0;if(bt!==null){var c=bt.memoizedState;if(l=c.destroy,o!==null&&xi(o,c.deps)){a.memoizedState=ia(t,r,l,o);return}}pt.flags|=e,a.memoizedState=ia(1|t,r,l,o)}function ac(e,t){return tl(8390656,8,e,t)}function bi(e,t){return rl(2048,8,e,t)}function lc(e,t){return rl(4,2,e,t)}function ic(e,t){return rl(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cc(e,t,r){return r=r!=null?r.concat([e]):null,rl(4,4,dc.bind(null,t,e),r)}function _i(){}function uc(e,t){var r=br();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function hc(e,t){var r=br();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function pc(e,t,r){return(Eo&21)===0?(e.baseState&&(e.baseState=!1,Jt=!0),e.memoizedState=r):(Er(r,t)||(r=El(),pt.lanes|=r,Mo|=r,e.baseState=!0),t)}function ih(e,t){var r=Ve;Ve=r!==0&&4>r?r:4,e(!0);var o=mi.transition;mi.transition={};try{e(!1),t()}finally{Ve=r,mi.transition=o}}function mc(){return br().memoizedState}function dh(e,t,r){var o=eo(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},xc(e))fc(t,r);else if(r=Gd(e,t,r,o),r!==null){var a=Ht();Ir(r,e,o,a),yc(r,t,o)}}function ch(e,t,r){var o=eo(e),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(xc(e))fc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,y=l(c,r);if(a.hasEagerState=!0,a.eagerState=y,Er(y,c)){var k=t.interleaved;k===null?(a.next=a,ii(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}r=Gd(e,t,a,o),r!==null&&(a=Ht(),Ir(r,e,o,a),yc(r,t,o))}}function xc(e){var t=e.alternate;return e===pt||t!==null&&t===pt}function fc(e,t){sa=el=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function yc(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Hr(e,r)}}var nl={readContext:wr,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},uh={readContext:wr,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:wr,useEffect:ac,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,tl(4194308,4,dc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var r=tn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=tn();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=dh.bind(null,pt,e),[o.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:oc,useDebugValue:_i,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=oc(!1),t=e[0];return e=ih.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=pt,a=tn();if(dt){if(r===void 0)throw Error(v(407));r=r()}else{if(r=t(),Ct===null)throw Error(v(349));(Eo&30)!==0||Zd(o,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,ac(tc.bind(null,o,l,e),[e]),o.flags|=2048,ia(9,ec.bind(null,o,l,r,t),void 0,null),r},useId:function(){var e=tn(),t=Ct.identifierPrefix;if(dt){var r=vn,o=_n;r=(o&~(1<<32-Lt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=aa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=lh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hh={readContext:wr,useCallback:uc,useContext:wr,useEffect:bi,useImperativeHandle:cc,useInsertionEffect:lc,useLayoutEffect:ic,useMemo:hc,useReducer:gi,useRef:sc,useState:function(){return gi(la)},useDebugValue:_i,useDeferredValue:function(e){var t=br();return pc(t,bt.memoizedState,e)},useTransition:function(){var e=gi(la)[0],t=br().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Jd,useId:mc,unstable_isNewReconciler:!1},ph={readContext:wr,useCallback:uc,useContext:wr,useEffect:bi,useImperativeHandle:cc,useInsertionEffect:lc,useLayoutEffect:ic,useMemo:hc,useReducer:wi,useRef:sc,useState:function(){return wi(la)},useDebugValue:_i,useDeferredValue:function(e){var t=br();return bt===null?t.memoizedState=e:pc(t,bt.memoizedState,e)},useTransition:function(){var e=wi(la)[0],t=br().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Jd,useId:mc,unstable_isNewReconciler:!1};function Rr(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function vi(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ol={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ht(),a=eo(e),l=Cn(o,a);l.payload=t,r!=null&&(l.callback=r),t=Qn(e,l,a),t!==null&&(Ir(t,e,a,o),Qa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ht(),a=eo(e),l=Cn(o,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Qn(e,l,a),t!==null&&(Ir(t,e,a,o),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ht(),o=eo(e),a=Cn(r,o);a.tag=2,t!=null&&(a.callback=t),t=Qn(e,a,o),t!==null&&(Ir(t,e,o,r),Qa(t,e,o))}};function gc(e,t,r,o,a,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,c):t.prototype&&t.prototype.isPureReactComponent?!Vs(r,o)||!Vs(a,l):!0}function wc(e,t,r){var o=!1,a=Un,l=t.contextType;return typeof l=="object"&&l!==null?l=wr(l):(a=Xt(t)?So:It.current,o=t.contextTypes,l=(o=o!=null)?ns(e,a):Un),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function bc(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function ki(e,t,r,o){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},di(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=wr(l):(l=Xt(t)?So:It.current,a.context=ns(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(vi(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ol.enqueueReplaceState(a,a.state,null),Xa(e,r,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t){try{var r="",o=t;do r+=Le(o),o=o.return;while(o);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Ci(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ul||(ul=!0,Ki=o),Ni(e,t)},r}function vc(e,t,r){r=Cn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;r.payload=function(){return o(a)},r.callback=function(){Ni(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Ni(e,t),typeof o!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function kc(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new mh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(r)||(a.add(r),e=Dh.bind(null,e,t,r),t.then(e,e))}function Cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,r,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var xh=Te.ReactCurrentOwner,Jt=!1;function $t(e,t,r,o){t.child=e===null?zd(t,null,r,o):ls(t,e.child,r,o)}function Sc(e,t,r,o,a){r=r.render;var l=t.ref;return ds(t,a),o=fi(e,t,r,o,l,a),r=yi(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(dt&&r&&Zl(t),t.flags|=1,$t(e,t,o,a),t.child)}function Ac(e,t,r,o,a){if(e===null){var l=r.type;return typeof l=="function"&&!Ui(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Dc(e,t,l,o,a)):(e=yl(r.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var c=l.memoizedProps;if(r=r.compare,r=r!==null?r:Vs,r(c,o)&&e.ref===t.ref)return Nn(e,t,a)}return t.flags|=1,e=ro(l,o),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,r,o,a){if(e!==null){var l=e.memoizedProps;if(Vs(l,o)&&e.ref===t.ref)if(Jt=!1,t.pendingProps=o=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Jt=!0);else return t.lanes=e.lanes,Nn(e,t,a)}return Si(e,t,r,o,a)}function jc(e,t,r){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ps,lr),lr|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,rt(ps,lr),lr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:r,rt(ps,lr),lr|=o}else l!==null?(o=l.baseLanes|r,t.memoizedState=null):o=r,rt(ps,lr),lr|=o;return $t(e,t,a,r),t.child}function Tc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Si(e,t,r,o,a){var l=Xt(r)?So:It.current;return l=ns(t,l),ds(t,a),r=fi(e,t,r,o,l,a),o=yi(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(dt&&o&&Zl(t),t.flags|=1,$t(e,t,r,a),t.child)}function Ec(e,t,r,o,a){if(Xt(r)){var l=!0;qa(t)}else l=!1;if(ds(t,a),t.stateNode===null)al(e,t),wc(t,r,o),ki(t,r,o,a),o=!0;else if(e===null){var c=t.stateNode,y=t.memoizedProps;c.props=y;var k=c.context,E=r.contextType;typeof E=="object"&&E!==null?E=wr(E):(E=Xt(r)?So:It.current,E=ns(t,E));var q=r.getDerivedStateFromProps,H=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function";H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==o||k!==E)&&bc(t,c,o,E),Yn=!1;var K=t.memoizedState;c.state=K,Xa(t,o,c,a),k=t.memoizedState,y!==o||K!==k||Qt.current||Yn?(typeof q=="function"&&(vi(t,r,q,o),k=t.memoizedState),(y=Yn||gc(t,r,y,o,K,k,E))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),c.props=o,c.state=k,c.context=E,o=y):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{c=t.stateNode,Ud(e,t),y=t.memoizedProps,E=t.type===t.elementType?y:Rr(t.type,y),c.props=E,H=t.pendingProps,K=c.context,k=r.contextType,typeof k=="object"&&k!==null?k=wr(k):(k=Xt(r)?So:It.current,k=ns(t,k));var se=r.getDerivedStateFromProps;(q=typeof se=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==H||K!==k)&&bc(t,c,o,k),Yn=!1,K=t.memoizedState,c.state=K,Xa(t,o,c,a);var ie=t.memoizedState;y!==H||K!==ie||Qt.current||Yn?(typeof se=="function"&&(vi(t,r,se,o),ie=t.memoizedState),(E=Yn||gc(t,r,E,o,K,ie,k)||!1)?(q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,ie,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,ie,k)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ie),c.props=o,c.state=ie,c.context=k,o=E):(typeof c.componentDidUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),o=!1)}return Ai(e,t,r,o,l,a)}function Ai(e,t,r,o,a,l){Tc(e,t);var c=(t.flags&128)!==0;if(!o&&!c)return a&&Id(t,r,!1),Nn(e,t,l);o=t.stateNode,xh.current=t;var y=c&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&c?(t.child=ls(t,e.child,null,l),t.child=ls(t,null,y,l)):$t(e,t,y,l),t.memoizedState=o.state,a&&Id(t,r,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),ci(e,t.containerInfo)}function Rc(e,t,r,o,a){return as(),ni(a),t.flags|=256,$t(e,t,r,o),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lc(e,t,r){var o=t.pendingProps,a=ht.current,l=!1,c=(t.flags&128)!==0,y;if((y=c)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),rt(ht,a&1),e===null)return ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=o.children,e=o.fallback,l?(o=t.mode,l=t.child,c={mode:"hidden",children:c},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=gl(c,o,0,null),e=Io(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ji(r),t.memoizedState=Di,e):Ti(t,c));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return fh(e,t,c,o,y,a,r);if(l){l=o.fallback,c=t.mode,a=e.child,y=a.sibling;var k={mode:"hidden",children:o.children};return(c&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=ro(a,k),o.subtreeFlags=a.subtreeFlags&14680064),y!==null?l=ro(y,l):(l=Io(l,c,r,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,c=e.child.memoizedState,c=c===null?ji(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~r,t.memoizedState=Di,o}return l=e.child,e=l.sibling,o=ro(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ti(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sl(e,t,r,o){return o!==null&&ni(o),ls(t,e.child,null,r),e=Ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fh(e,t,r,o,a,l,c){if(r)return t.flags&256?(t.flags&=-257,o=Ci(Error(v(422))),sl(e,t,c,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=gl({mode:"visible",children:o.children},a,0,null),l=Io(l,a,c,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&ls(t,e.child,null,c),t.child.memoizedState=ji(c),t.memoizedState=Di,l);if((t.mode&1)===0)return sl(e,t,c,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var y=o.dgst;return o=y,l=Error(v(419)),o=Ci(l,o,void 0),sl(e,t,c,o)}if(y=(c&e.childLanes)!==0,Jt||y){if(o=Ct,o!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|c))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,kn(e,a),Ir(o,e,a,-1))}return Gi(),o=Ci(Error(v(421))),sl(e,t,c,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=jh.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ar=zn(a.nextSibling),sr=t,dt=!0,Mr=null,e!==null&&(yr[gr++]=_n,yr[gr++]=vn,yr[gr++]=Ao,_n=e.id,vn=e.overflow,Ao=t),t=Ti(t,o.children),t.flags|=4096,t)}function Fc(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),li(e.return,t,r)}function Ei(e,t,r,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=r,l.tailMode=a)}function Ic(e,t,r){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if($t(e,t,o.children,r),o=ht.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,r,t);else if(e.tag===19)Fc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(rt(ht,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ja(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ei(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ja(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ei(t,!0,r,null,l);break;case"together":Ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Mo|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,r=ro(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ro(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function yh(e,t,r){switch(t.tag){case 3:Mc(t),as();break;case 5:Qd(t);break;case 1:Xt(t.type)&&qa(t);break;case 4:ci(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;rt(Va,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(rt(ht,ht.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Lc(e,t,r):(rt(ht,ht.current&1),e=Nn(e,t,r),e!==null?e.sibling:null);rt(ht,ht.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Ic(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),rt(ht,ht.current),o)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,r)}return Nn(e,t,r)}var Wc,Mi,Oc,Pc;Wc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Mi=function(){},Oc=function(e,t,r,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,To(en.current);var l=null;switch(r){case"input":a=on(e,a),o=on(e,o),l=[];break;case"select":a=te({},a,{value:void 0}),o=te({},o,{value:void 0}),l=[];break;case"textarea":a=ya(e,a),o=ya(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Pa)}Ss(r,o);var c;r=null;for(E in a)if(!o.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var y=a[E];for(c in y)y.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(P.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in o){var k=o[E];if(y=a!=null?a[E]:void 0,o.hasOwnProperty(E)&&k!==y&&(k!=null||y!=null))if(E==="style")if(y){for(c in y)!y.hasOwnProperty(c)||k&&k.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in k)k.hasOwnProperty(c)&&y[c]!==k[c]&&(r||(r={}),r[c]=k[c])}else r||(l||(l=[]),l.push(E,r)),r=k;else E==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(l=l||[]).push(E,k)):E==="children"?typeof k!="string"&&typeof k!="number"||(l=l||[]).push(E,""+k):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(P.hasOwnProperty(E)?(k!=null&&E==="onScroll"&&lt("scroll",e),l||y===k||(l=[])):(l=l||[]).push(E,k))}r&&(l=l||[]).push("style",r);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},Pc=function(e,t,r,o){r!==o&&(t.flags|=4)};function da(e,t){if(!dt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function gh(e,t,r){var o=t.pendingProps;switch(ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Xt(t.type)&&Ba(),Ot(t),null;case 3:return o=t.stateNode,cs(),it(Qt),it(It),pi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mr!==null&&($i(Mr),Mr=null))),Mi(e,t),Ot(t),null;case 5:ui(t);var a=To(oa.current);if(r=t.type,e!==null&&t.stateNode!=null)Oc(e,t,r,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(v(166));return Ot(t),null}if(e=To(en.current),Ga(t)){o=t.stateNode,r=t.type;var l=t.memoizedProps;switch(o[Zr]=t,o[Zs]=l,e=(t.mode&1)!==0,r){case"dialog":lt("cancel",o),lt("close",o);break;case"iframe":case"object":case"embed":lt("load",o);break;case"video":case"audio":for(a=0;a<Qs.length;a++)lt(Qs[a],o);break;case"source":lt("error",o);break;case"img":case"image":case"link":lt("error",o),lt("load",o);break;case"details":lt("toggle",o);break;case"input":gt(o,l),lt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},lt("invalid",o);break;case"textarea":Mt(o,l),lt("invalid",o)}Ss(r,l),a=null;for(var c in l)if(l.hasOwnProperty(c)){var y=l[c];c==="children"?typeof y=="string"?o.textContent!==y&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,y,e),a=["children",y]):typeof y=="number"&&o.textContent!==""+y&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,y,e),a=["children",""+y]):P.hasOwnProperty(c)&&y!=null&&c==="onScroll"&&lt("scroll",o)}switch(r){case"input":ge(o),Wr(o,l,!0);break;case"textarea":ge(o),ga(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Pa)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=co(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(r,{is:o.is}):(e=c.createElement(r),r==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,r),e[Zr]=t,e[Zs]=o,Wc(e,t,!1,!1),t.stateNode=e;e:{switch(c=cr(r,o),r){case"dialog":lt("cancel",e),lt("close",e),a=o;break;case"iframe":case"object":case"embed":lt("load",e),a=o;break;case"video":case"audio":for(a=0;a<Qs.length;a++)lt(Qs[a],e);a=o;break;case"source":lt("error",e),a=o;break;case"img":case"image":case"link":lt("error",e),lt("load",e),a=o;break;case"details":lt("toggle",e),a=o;break;case"input":gt(e,o),a=on(e,o),lt("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=te({},o,{value:void 0}),lt("invalid",e);break;case"textarea":Mt(e,o),a=ya(e,o),lt("invalid",e);break;default:a=o}Ss(r,a),y=a;for(l in y)if(y.hasOwnProperty(l)){var k=y[l];l==="style"?ln(e,k):l==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&wa(e,k)):l==="children"?typeof k=="string"?(r!=="textarea"||k!=="")&&Or(e,k):typeof k=="number"&&Or(e,""+k):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(P.hasOwnProperty(l)?k!=null&&l==="onScroll"&&lt("scroll",e):k!=null&&Y(e,l,k,c))}switch(r){case"input":ge(e),Wr(e,o,!1);break;case"textarea":ge(e),ga(e);break;case"option":o.value!=null&&e.setAttribute("value",""+qe(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Ut(e,!!o.multiple,l,!1):o.defaultValue!=null&&Ut(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Pa)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)Pc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(v(166));if(r=To(oa.current),To(en.current),Ga(t)){if(o=t.stateNode,r=t.memoizedProps,o[Zr]=t,(l=o.nodeValue!==r)&&(e=sr,e!==null))switch(e.tag){case 3:Oa(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(o.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Zr]=t,t.stateNode=o}return Ot(t),null;case 13:if(it(ht),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(dt&&ar!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qd(),as(),t.flags|=98560,l=!1;else if(l=Ga(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Zr]=t}else as(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),l=!1}else Mr!==null&&($i(Mr),Mr=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ht.current&1)!==0?_t===0&&(_t=3):Gi())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return cs(),Mi(e,t),e===null&&Xs(t.stateNode.containerInfo),Ot(t),null;case 10:return ai(t.type._context),Ot(t),null;case 17:return Xt(t.type)&&Ba(),Ot(t),null;case 19:if(it(ht),l=t.memoizedState,l===null)return Ot(t),null;if(o=(t.flags&128)!==0,c=l.rendering,c===null)if(o)da(l,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ja(e),c!==null){for(t.flags|=128,da(l,!1),o=c.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)l=r,e=o,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return rt(ht,ht.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ze()>ms&&(t.flags|=128,o=!0,da(l,!1),t.lanes=4194304)}else{if(!o)if(e=Ja(c),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),da(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!dt)return Ot(t),null}else 2*Ze()-l.renderingStartTime>ms&&r!==1073741824&&(t.flags|=128,o=!0,da(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(r=l.last,r!==null?r.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ze(),t.sibling=null,r=ht.current,rt(ht,o?r&1|2:r&1),t):(Ot(t),null);case 22:case 23:return zi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(lr&1073741824)!==0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function wh(e,t){switch(ei(t),t.tag){case 1:return Xt(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cs(),it(Qt),it(It),pi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ui(t),null;case 13:if(it(ht),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));as()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return it(ht),null;case 4:return cs(),null;case 10:return ai(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var ll=!1,Pt=!1,bh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function hs(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){xt(e,t,o)}else r.current=null}function Ri(e,t,r){try{r()}catch(o){xt(e,t,o)}}var Kc=!1;function _h(e,t){if(zl=xn,e=gd(),Wl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var c=0,y=-1,k=-1,E=0,q=0,H=e,K=null;t:for(;;){for(var se;H!==r||a!==0&&H.nodeType!==3||(y=c+a),H!==l||o!==0&&H.nodeType!==3||(k=c+o),H.nodeType===3&&(c+=H.nodeValue.length),(se=H.firstChild)!==null;)K=H,H=se;for(;;){if(H===e)break t;if(K===r&&++E===a&&(y=c),K===l&&++q===o&&(k=c),(se=H.nextSibling)!==null)break;H=K,K=H.parentNode}H=se}r=y===-1||k===-1?null:{start:y,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gl={focusedElem:e,selectionRange:r},xn=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var ie=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var he=ie.memoizedProps,ft=ie.memoizedState,A=t.stateNode,S=A.getSnapshotBeforeUpdate(t.elementType===t.type?he:Rr(t.type,he),ft);A.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(V){xt(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return ie=Kc,Kc=!1,ie}function ca(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ri(t,r,l)}a=a.next}while(a!==o)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Li(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zr],delete t[Zs],delete t[Ql],delete t[nh],delete t[oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Pa));else if(o!==4&&(e=e.child,e!==null))for(Fi(e,t,r),e=e.sibling;e!==null;)Fi(e,t,r),e=e.sibling}function Ii(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ii(e,t,r),e=e.sibling;e!==null;)Ii(e,t,r),e=e.sibling}var Dt=null,Lr=!1;function Xn(e,t,r){for(r=r.child;r!==null;)Hc(e,t,r),r=r.sibling}function Hc(e,t,r){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Sr,r)}catch{}switch(r.tag){case 5:Pt||hs(r,t);case 6:var o=Dt,a=Lr;Dt=null,Xn(e,t,r),Dt=o,Lr=a,Dt!==null&&(Lr?(e=Dt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Dt.removeChild(r.stateNode));break;case 18:Dt!==null&&(Lr?(e=Dt,r=r.stateNode,e.nodeType===8?Yl(e.parentNode,r):e.nodeType===1&&Yl(e,r),Pn(e)):Yl(Dt,r.stateNode));break;case 4:o=Dt,a=Lr,Dt=r.stateNode.containerInfo,Lr=!0,Xn(e,t,r),Dt=o,Lr=a;break;case 0:case 11:case 14:case 15:if(!Pt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&Ri(r,t,c),a=a.next}while(a!==o)}Xn(e,t,r);break;case 1:if(!Pt&&(hs(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(y){xt(r,t,y)}Xn(e,t,r);break;case 21:Xn(e,t,r);break;case 22:r.mode&1?(Pt=(o=Pt)||r.memoizedState!==null,Xn(e,t,r),Pt=o):Xn(e,t,r);break;default:Xn(e,t,r)}}function zc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new bh),t.forEach(function(o){var a=Th.bind(null,e,o);r.has(o)||(r.add(o),o.then(a,a))})}}function Fr(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var l=e,c=t,y=c;e:for(;y!==null;){switch(y.tag){case 5:Dt=y.stateNode,Lr=!1;break e;case 3:Dt=y.stateNode.containerInfo,Lr=!0;break e;case 4:Dt=y.stateNode.containerInfo,Lr=!0;break e}y=y.return}if(Dt===null)throw Error(v(160));Hc(l,c,a),Dt=null,Lr=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(E){xt(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fr(t,e),rn(e),o&4){try{ca(3,e,e.return),il(3,e)}catch(he){xt(e,e.return,he)}try{ca(5,e,e.return)}catch(he){xt(e,e.return,he)}}break;case 1:Fr(t,e),rn(e),o&512&&r!==null&&hs(r,r.return);break;case 5:if(Fr(t,e),rn(e),o&512&&r!==null&&hs(r,r.return),e.flags&32){var a=e.stateNode;try{Or(a,"")}catch(he){xt(e,e.return,he)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,c=r!==null?r.memoizedProps:l,y=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{y==="input"&&l.type==="radio"&&l.name!=null&&Tn(a,l),cr(y,c);var E=cr(y,l);for(c=0;c<k.length;c+=2){var q=k[c],H=k[c+1];q==="style"?ln(a,H):q==="dangerouslySetInnerHTML"?wa(a,H):q==="children"?Or(a,H):Y(a,q,H,E)}switch(y){case"input":st(a,l);break;case"textarea":an(a,l);break;case"select":var K=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var se=l.value;se!=null?Ut(a,!!l.multiple,se,!1):K!==!!l.multiple&&(l.defaultValue!=null?Ut(a,!!l.multiple,l.defaultValue,!0):Ut(a,!!l.multiple,l.multiple?[]:"",!1))}a[Zs]=l}catch(he){xt(e,e.return,he)}}break;case 6:if(Fr(t,e),rn(e),o&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(he){xt(e,e.return,he)}}break;case 3:if(Fr(t,e),rn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Pn(t.containerInfo)}catch(he){xt(e,e.return,he)}break;case 4:Fr(t,e),rn(e);break;case 13:Fr(t,e),rn(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Pi=Ze())),o&4&&zc(e);break;case 22:if(q=r!==null&&r.memoizedState!==null,e.mode&1?(Pt=(E=Pt)||q,Fr(t,e),Pt=E):Fr(t,e),rn(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!q&&(e.mode&1)!==0)for(ae=e,q=e.child;q!==null;){for(H=ae=q;ae!==null;){switch(K=ae,se=K.child,K.tag){case 0:case 11:case 14:case 15:ca(4,K,K.return);break;case 1:hs(K,K.return);var ie=K.stateNode;if(typeof ie.componentWillUnmount=="function"){o=K,r=K.return;try{t=o,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(he){xt(o,r,he)}}break;case 5:hs(K,K.return);break;case 22:if(K.memoizedState!==null){Yc(H);continue}}se!==null?(se.return=K,ae=se):Yc(H)}q=q.sibling}e:for(q=null,H=e;;){if(H.tag===5){if(q===null){q=H;try{a=H.stateNode,E?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(y=H.stateNode,k=H.memoizedProps.style,c=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=rr("display",c))}catch(he){xt(e,e.return,he)}}}else if(H.tag===6){if(q===null)try{H.stateNode.nodeValue=E?"":H.memoizedProps}catch(he){xt(e,e.return,he)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;q===H&&(q=null),H=H.return}q===H&&(q=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Fr(t,e),rn(e),o&4&&zc(e);break;case 21:break;default:Fr(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(qc(r)){var o=r;break e}r=r.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Or(a,""),o.flags&=-33);var l=$c(e);Ii(e,l,a);break;case 3:case 4:var c=o.stateNode.containerInfo,y=$c(e);Fi(e,y,c);break;default:throw Error(v(161))}}catch(k){xt(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vh(e,t,r){ae=e,Uc(e)}function Uc(e,t,r){for(var o=(e.mode&1)!==0;ae!==null;){var a=ae,l=a.child;if(a.tag===22&&o){var c=a.memoizedState!==null||ll;if(!c){var y=a.alternate,k=y!==null&&y.memoizedState!==null||Pt;y=ll;var E=Pt;if(ll=c,(Pt=k)&&!E)for(ae=a;ae!==null;)c=ae,k=c.child,c.tag===22&&c.memoizedState!==null?Qc(a):k!==null?(k.return=c,ae=k):Qc(a);for(;l!==null;)ae=l,Uc(l),l=l.sibling;ae=a,ll=y,Pt=E}Vc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,ae=l):Vc(e)}}function Vc(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pt||il(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Pt)if(r===null)o.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Rr(t.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Yd(t,l,o);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yd(t,c,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&r.focus();break;case"img":k.src&&(r.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var q=E.memoizedState;if(q!==null){var H=q.dehydrated;H!==null&&Pn(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}Pt||t.flags&512&&Li(t)}catch(K){xt(t,t.return,K)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function Yc(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function Qc(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{il(4,t)}catch(k){xt(t,r,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(k){xt(t,a,k)}}var l=t.return;try{Li(t)}catch(k){xt(t,l,k)}break;case 5:var c=t.return;try{Li(t)}catch(k){xt(t,c,k)}}}catch(k){xt(t,t.return,k)}if(t===e){ae=null;break}var y=t.sibling;if(y!==null){y.return=t.return,ae=y;break}ae=t.return}}var kh=Math.ceil,dl=Te.ReactCurrentDispatcher,Wi=Te.ReactCurrentOwner,_r=Te.ReactCurrentBatchConfig,ze=0,Ct=null,yt=null,jt=0,lr=0,ps=Gn(0),_t=0,ua=null,Mo=0,cl=0,Oi=0,ha=null,Zt=null,Pi=0,ms=1/0,Sn=null,ul=!1,Ki=null,Jn=null,hl=!1,Zn=null,pl=0,pa=0,Bi=null,ml=-1,xl=0;function Ht(){return(ze&6)!==0?Ze():ml!==-1?ml:ml=Ze()}function eo(e){return(e.mode&1)===0?1:(ze&2)!==0&&jt!==0?jt&-jt:ah.transition!==null?(xl===0&&(xl=El()),xl):(e=Ve,e!==0||(e=window.event,e=e===void 0?16:Bs(e.type)),e)}function Ir(e,t,r,o){if(50<pa)throw pa=0,Bi=null,Error(v(185));$r(e,r,o),((ze&2)===0||e!==Ct)&&(e===Ct&&((ze&2)===0&&(cl|=r),_t===4&&to(e,jt)),er(e,o),r===1&&ze===0&&(t.mode&1)===0&&(ms=Ze()+500,$a&&Vn()))}function er(e,t){var r=e.callbackNode;fo(e,t);var o=Br(e,e===Ct?jt:0);if(o===0)r!==null&&Rs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Rs(r),t===1)e.tag===0?sh(Jc.bind(null,e)):Wd(Jc.bind(null,e)),th(function(){(ze&6)===0&&Vn()}),r=null;else{switch(cn(o)){case 1:r=Nr;break;case 4:r=Fn;break;case 16:r=Kr;break;case 536870912:r=Is;break;default:r=Kr}r=au(r,Xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xc(e,t){if(ml=-1,xl=0,(ze&6)!==0)throw Error(v(327));var r=e.callbackNode;if(xs()&&e.callbackNode!==r)return null;var o=Br(e,e===Ct?jt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=fl(e,o);else{t=o;var a=ze;ze|=2;var l=eu();(Ct!==e||jt!==t)&&(Sn=null,ms=Ze()+500,Lo(e,t));do try{Sh();break}catch(y){Zc(e,y)}while(!0);si(),dl.current=l,ze=a,yt!==null?t=0:(Ct=null,jt=0,t=_t)}if(t!==0){if(t===2&&(a=Aa(e),a!==0&&(o=a,t=qi(e,a))),t===1)throw r=ua,Lo(e,0),to(e,o),er(e,Ze()),r;if(t===6)to(e,o);else{if(a=e.current.alternate,(o&30)===0&&!Ch(a)&&(t=fl(e,o),t===2&&(l=Aa(e),l!==0&&(o=l,t=qi(e,l))),t===1))throw r=ua,Lo(e,0),to(e,o),er(e,Ze()),r;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(v(345));case 2:Fo(e,Zt,Sn);break;case 3:if(to(e,o),(o&130023424)===o&&(t=Pi+500-Ze(),10<t)){if(Br(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ht(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Vl(Fo.bind(null,e,Zt,Sn),t);break}Fo(e,Zt,Sn);break;case 4:if(to(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var c=31-Lt(o);l=1<<c,c=t[c],c>a&&(a=c),o&=~l}if(o=a,o=Ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kh(o/1960))-o,10<o){e.timeoutHandle=Vl(Fo.bind(null,e,Zt,Sn),o);break}Fo(e,Zt,Sn);break;case 5:Fo(e,Zt,Sn);break;default:throw Error(v(329))}}}return er(e,Ze()),e.callbackNode===r?Xc.bind(null,e):null}function qi(e,t){var r=ha;return e.current.memoizedState.isDehydrated&&(Lo(e,t).flags|=256),e=fl(e,t),e!==2&&(t=Zt,Zt=r,t!==null&&$i(t)),e}function $i(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function Ch(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],l=a.getSnapshot;a=a.value;try{if(!Er(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function to(e,t){for(t&=~Oi,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Lt(t),o=1<<r;e[r]=-1,t&=~o}}function Jc(e){if((ze&6)!==0)throw Error(v(327));xs();var t=Br(e,0);if((t&1)===0)return er(e,Ze()),null;var r=fl(e,t);if(e.tag!==0&&r===2){var o=Aa(e);o!==0&&(t=o,r=qi(e,o))}if(r===1)throw r=ua,Lo(e,0),to(e,t),er(e,Ze()),r;if(r===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fo(e,Zt,Sn),er(e,Ze()),null}function Hi(e,t){var r=ze;ze|=1;try{return e(t)}finally{ze=r,ze===0&&(ms=Ze()+500,$a&&Vn())}}function Ro(e){Zn!==null&&Zn.tag===0&&(ze&6)===0&&xs();var t=ze;ze|=1;var r=_r.transition,o=Ve;try{if(_r.transition=null,Ve=1,e)return e()}finally{Ve=o,_r.transition=r,ze=t,(ze&6)===0&&Vn()}}function zi(){lr=ps.current,it(ps)}function Lo(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,eh(r)),yt!==null)for(r=yt.return;r!==null;){var o=r;switch(ei(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ba();break;case 3:cs(),it(Qt),it(It),pi();break;case 5:ui(o);break;case 4:cs();break;case 13:it(ht);break;case 19:it(ht);break;case 10:ai(o.type._context);break;case 22:case 23:zi()}r=r.return}if(Ct=e,yt=e=ro(e.current,null),jt=lr=t,_t=0,ua=null,Oi=cl=Mo=0,Zt=ha=null,jo!==null){for(t=0;t<jo.length;t++)if(r=jo[t],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,l=r.pending;if(l!==null){var c=l.next;l.next=a,o.next=c}r.pending=o}jo=null}return e}function Zc(e,t){do{var r=yt;try{if(si(),Za.current=nl,el){for(var o=pt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}el=!1}if(Eo=0,kt=bt=pt=null,sa=!1,aa=0,Wi.current=null,r===null||r.return===null){_t=1,ua=t,yt=null;break}e:{var l=e,c=r.return,y=r,k=t;if(t=jt,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var E=k,q=y,H=q.tag;if((q.mode&1)===0&&(H===0||H===11||H===15)){var K=q.alternate;K?(q.updateQueue=K.updateQueue,q.memoizedState=K.memoizedState,q.lanes=K.lanes):(q.updateQueue=null,q.memoizedState=null)}var se=Cc(c);if(se!==null){se.flags&=-257,Nc(se,c,y,l,t),se.mode&1&&kc(l,E,t),t=se,k=E;var ie=t.updateQueue;if(ie===null){var he=new Set;he.add(k),t.updateQueue=he}else ie.add(k);break e}else{if((t&1)===0){kc(l,E,t),Gi();break e}k=Error(v(426))}}else if(dt&&y.mode&1){var ft=Cc(c);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),Nc(ft,c,y,l,t),ni(us(k,y));break e}}l=k=us(k,y),_t!==4&&(_t=2),ha===null?ha=[l]:ha.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var A=_c(l,k,t);Vd(l,A);break e;case 1:y=k;var S=l.type,j=l.stateNode;if((l.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Jn===null||!Jn.has(j)))){l.flags|=65536,t&=-t,l.lanes|=t;var V=vc(l,y,t);Vd(l,V);break e}}l=l.return}while(l!==null)}ru(r)}catch(pe){t=pe,yt===r&&r!==null&&(yt=r=r.return);continue}break}while(!0)}function eu(){var e=dl.current;return dl.current=nl,e===null?nl:e}function Gi(){(_t===0||_t===3||_t===2)&&(_t=4),Ct===null||(Mo&268435455)===0&&(cl&268435455)===0||to(Ct,jt)}function fl(e,t){var r=ze;ze|=2;var o=eu();(Ct!==e||jt!==t)&&(Sn=null,Lo(e,t));do try{Nh();break}catch(a){Zc(e,a)}while(!0);if(si(),ze=r,dl.current=o,yt!==null)throw Error(v(261));return Ct=null,jt=0,_t}function Nh(){for(;yt!==null;)tu(yt)}function Sh(){for(;yt!==null&&!$o();)tu(yt)}function tu(e){var t=su(e.alternate,e,lr);e.memoizedProps=e.pendingProps,t===null?ru(e):yt=t,Wi.current=null}function ru(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=gh(r,t,lr),r!==null){yt=r;return}}else{if(r=wh(r,t),r!==null){r.flags&=32767,yt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_t=6,yt=null;return}}if(t=t.sibling,t!==null){yt=t;return}yt=t=e}while(t!==null);_t===0&&(_t=5)}function Fo(e,t,r){var o=Ve,a=_r.transition;try{_r.transition=null,Ve=1,Ah(e,t,r,o)}finally{_r.transition=a,Ve=o}return null}function Ah(e,t,r,o){do xs();while(Zn!==null);if((ze&6)!==0)throw Error(v(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(nr(e,l),e===Ct&&(yt=Ct=null,jt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||hl||(hl=!0,au(Kr,function(){return xs(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=_r.transition,_r.transition=null;var c=Ve;Ve=1;var y=ze;ze|=4,Wi.current=null,_h(e,r),Gc(r,e),Uu(Gl),xn=!!zl,Gl=zl=null,e.current=r,vh(r),Ln(),ze=y,Ve=c,_r.transition=l}else e.current=r;if(hl&&(hl=!1,Zn=e,pl=a),l=e.pendingLanes,l===0&&(Jn=null),Rt(r.stateNode),er(e,Ze()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=Ki,Ki=null,e;return(pl&1)!==0&&e.tag!==0&&xs(),l=e.pendingLanes,(l&1)!==0?e===Bi?pa++:(pa=0,Bi=e):pa=0,Vn(),null}function xs(){if(Zn!==null){var e=cn(pl),t=_r.transition,r=Ve;try{if(_r.transition=null,Ve=16>e?16:e,Zn===null)var o=!1;else{if(e=Zn,Zn=null,pl=0,(ze&6)!==0)throw Error(v(331));var a=ze;for(ze|=4,ae=e.current;ae!==null;){var l=ae,c=l.child;if((ae.flags&16)!==0){var y=l.deletions;if(y!==null){for(var k=0;k<y.length;k++){var E=y[k];for(ae=E;ae!==null;){var q=ae;switch(q.tag){case 0:case 11:case 15:ca(8,q,l)}var H=q.child;if(H!==null)H.return=q,ae=H;else for(;ae!==null;){q=ae;var K=q.sibling,se=q.return;if(Bc(q),q===E){ae=null;break}if(K!==null){K.return=se,ae=K;break}ae=se}}}var ie=l.alternate;if(ie!==null){var he=ie.child;if(he!==null){ie.child=null;do{var ft=he.sibling;he.sibling=null,he=ft}while(he!==null)}}ae=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,ae=c;else e:for(;ae!==null;){if(l=ae,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ca(9,l,l.return)}var A=l.sibling;if(A!==null){A.return=l.return,ae=A;break e}ae=l.return}}var S=e.current;for(ae=S;ae!==null;){c=ae;var j=c.child;if((c.subtreeFlags&2064)!==0&&j!==null)j.return=c,ae=j;else e:for(c=S;ae!==null;){if(y=ae,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:il(9,y)}}catch(pe){xt(y,y.return,pe)}if(y===c){ae=null;break e}var V=y.sibling;if(V!==null){V.return=y.return,ae=V;break e}ae=y.return}}if(ze=a,Vn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Sr,e)}catch{}o=!0}return o}finally{Ve=r,_r.transition=t}}return!1}function nu(e,t,r){t=us(r,t),t=_c(e,t,1),e=Qn(e,t,1),t=Ht(),e!==null&&($r(e,1,t),er(e,t))}function xt(e,t,r){if(e.tag===3)nu(e,e,r);else for(;t!==null;){if(t.tag===3){nu(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Jn===null||!Jn.has(o))){e=us(r,e),e=vc(t,e,1),t=Qn(t,e,1),e=Ht(),t!==null&&($r(t,1,e),er(t,e));break}}t=t.return}}function Dh(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&r,Ct===e&&(jt&r)===r&&(_t===4||_t===3&&(jt&130023424)===jt&&500>Ze()-Pi?Lo(e,0):Oi|=r),er(e,t)}function ou(e,t){t===0&&((e.mode&1)===0?t=1:(t=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var r=Ht();e=kn(e,t),e!==null&&($r(e,t,r),er(e,r))}function jh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ou(e,r)}function Th(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(t),ou(e,r)}var su;su=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qt.current)Jt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Jt=!1,yh(e,t,r);Jt=(e.flags&131072)!==0}else Jt=!1,dt&&(t.flags&1048576)!==0&&Od(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;al(e,t),e=t.pendingProps;var a=ns(t,It.current);ds(t,r),a=fi(null,t,o,e,a,r);var l=yi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xt(o)?(l=!0,qa(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,di(t),a.updater=ol,t.stateNode=a,a._reactInternals=t,ki(t,o,e,r),t=Ai(null,t,o,!0,l,r)):(t.tag=0,dt&&l&&Zl(t),$t(null,t,a,r),t=t.child),t;case 16:o=t.elementType;e:{switch(al(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Mh(o),e=Rr(o,e),a){case 0:t=Si(null,t,o,e,r);break e;case 1:t=Ec(null,t,o,e,r);break e;case 11:t=Sc(null,t,o,e,r);break e;case 14:t=Ac(null,t,o,Rr(o.type,e),r);break e}throw Error(v(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Rr(o,a),Si(e,t,o,a,r);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Rr(o,a),Ec(e,t,o,a,r);case 3:e:{if(Mc(t),e===null)throw Error(v(387));o=t.pendingProps,l=t.memoizedState,a=l.element,Ud(e,t),Xa(t,o,null,r);var c=t.memoizedState;if(o=c.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=us(Error(v(423)),t),t=Rc(e,t,o,r,a);break e}else if(o!==a){a=us(Error(v(424)),t),t=Rc(e,t,o,r,a);break e}else for(ar=zn(t.stateNode.containerInfo.firstChild),sr=t,dt=!0,Mr=null,r=zd(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(as(),o===a){t=Nn(e,t,r);break e}$t(e,t,o,r)}t=t.child}return t;case 5:return Qd(t),e===null&&ri(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,c=a.children,Ul(o,a)?c=null:l!==null&&Ul(o,l)&&(t.flags|=32),Tc(e,t),$t(e,t,c,r),t.child;case 6:return e===null&&ri(t),null;case 13:return Lc(e,t,r);case 4:return ci(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ls(t,null,o,r):$t(e,t,o,r),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Rr(o,a),Sc(e,t,o,a,r);case 7:return $t(e,t,t.pendingProps,r),t.child;case 8:return $t(e,t,t.pendingProps.children,r),t.child;case 12:return $t(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,c=a.value,rt(Va,o._currentValue),o._currentValue=c,l!==null)if(Er(l.value,c)){if(l.children===a.children&&!Qt.current){t=Nn(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var y=l.dependencies;if(y!==null){c=l.child;for(var k=y.firstContext;k!==null;){if(k.context===o){if(l.tag===1){k=Cn(-1,r&-r),k.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var q=E.pending;q===null?k.next=k:(k.next=q.next,q.next=k),E.pending=k}}l.lanes|=r,k=l.alternate,k!==null&&(k.lanes|=r),li(l.return,r,t),y.lanes|=r;break}k=k.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(v(341));c.lanes|=r,y=c.alternate,y!==null&&(y.lanes|=r),li(c,r,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}$t(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,ds(t,r),a=wr(a),o=o(a),t.flags|=1,$t(e,t,o,r),t.child;case 14:return o=t.type,a=Rr(o,t.pendingProps),a=Rr(o.type,a),Ac(e,t,o,a,r);case 15:return Dc(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Rr(o,a),al(e,t),t.tag=1,Xt(o)?(e=!0,qa(t)):e=!1,ds(t,r),wc(t,o,a),ki(t,o,a,r),Ai(null,t,o,!0,e,r);case 19:return Ic(e,t,r);case 22:return jc(e,t,r)}throw Error(v(156,t.tag))};function au(e,t){return Ms(e,t)}function Eh(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(e,t,r,o){return new Eh(e,t,r,o)}function Ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mh(e){if(typeof e=="function")return Ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===ce)return 14}return 2}function ro(e,t){var r=e.alternate;return r===null?(r=vr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function yl(e,t,r,o,a,l){var c=2;if(o=e,typeof e=="function")Ui(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Ue:return Io(r.children,a,l,t);case ot:c=8,a|=8;break;case Ce:return e=vr(12,r,t,a|2),e.elementType=Ce,e.lanes=l,e;case ke:return e=vr(13,r,t,a),e.elementType=ke,e.lanes=l,e;case me:return e=vr(19,r,t,a),e.elementType=me,e.lanes=l,e;case Oe:return gl(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:c=10;break e;case He:c=9;break e;case J:c=11;break e;case ce:c=14;break e;case Ie:c=16,o=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=vr(c,r,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function Io(e,t,r,o){return e=vr(7,e,o,t),e.lanes=r,e}function gl(e,t,r,o){return e=vr(22,e,o,t),e.elementType=Oe,e.lanes=r,e.stateNode={isHidden:!1},e}function Vi(e,t,r){return e=vr(6,e,null,t),e.lanes=r,e}function Yi(e,t,r){return t=vr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,r,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qi(e,t,r,o,a,l,c,y,k){return e=new Rh(e,t,r,y,k),t===1?(t=1,l===!0&&(t|=8)):t=0,l=vr(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},di(l),e}function Lh(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function lu(e){if(!e)return Un;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var r=e.type;if(Xt(r))return Fd(e,r,t)}return t}function iu(e,t,r,o,a,l,c,y,k){return e=Qi(r,o,!0,e,a,l,c,y,k),e.context=lu(null),r=e.current,o=Ht(),a=eo(r),l=Cn(o,a),l.callback=t??null,Qn(r,l,a),e.current.lanes=a,$r(e,a,o),er(e,o),e}function wl(e,t,r,o){var a=t.current,l=Ht(),c=eo(a);return r=lu(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(l,c),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Qn(a,t,c),e!==null&&(Ir(e,a,c,l),Qa(e,a,c)),c}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xi(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function Fh(){return null}var cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ji(e){this._internalRoot=e}_l.prototype.render=Ji.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));wl(e,t,null,null)},_l.prototype.unmount=Ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ro(function(){wl(null,e,null,null)}),t[wn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=yo();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mt.length&&t!==0&&t<mt[r].priority;r++);mt.splice(r,0,e),r===0&&Wn(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Ih(e,t,r,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var E=bl(c);l.call(E)}}var c=iu(t,o,e,0,null,!1,!1,"",uu);return e._reactRootContainer=c,e[wn]=c.current,Xs(e.nodeType===8?e.parentNode:e),Ro(),c}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var y=o;o=function(){var E=bl(k);y.call(E)}}var k=Qi(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=k,e[wn]=k.current,Xs(e.nodeType===8?e.parentNode:e),Ro(function(){wl(t,k,r,o)}),k}function kl(e,t,r,o,a){var l=r._reactRootContainer;if(l){var c=l;if(typeof a=="function"){var y=a;a=function(){var k=bl(c);y.call(k)}}wl(t,c,e,a)}else c=Ih(r,t,e,a,o);return bl(c)}un=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Vt(t.pendingLanes);r!==0&&(Hr(t,r|1),er(t,Ze()),(ze&6)===0&&(ms=Ze()+500,Vn()))}break;case 13:Ro(function(){var o=kn(e,1);if(o!==null){var a=Ht();Ir(o,e,1,a)}}),Xi(e,1)}},In=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var r=Ht();Ir(t,e,134217728,r)}Xi(e,134217728)}},Da=function(e){if(e.tag===13){var t=eo(e),r=kn(e,t);if(r!==null){var o=Ht();Ir(r,e,t,o)}Xi(e,t)}},yo=function(){return Ve},Os=function(e,t){var r=Ve;try{return Ve=e,t()}finally{Ve=r}},Oo=function(e,t,r){switch(t){case"input":if(st(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var a=Ka(o);if(!a)throw Error(v(90));io(o),st(o,a)}}}break;case"textarea":an(e,r);break;case"select":t=r.value,t!=null&&Ut(e,!!r.multiple,t,!1)}},Bo=Hi,_a=Ro;var Wh={usingClientEntryPoint:!1,Events:[ea,ts,Ka,As,Ko,Hi]},ma={findFiberByHostInstance:No,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oh={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qo(e),e===null?null:e.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Fh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Sr=Cl.inject(Oh),We=Cl}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wh,tr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(v(200));return Lh(e,t,null,r)},tr.createRoot=function(e,t){if(!Zi(e))throw Error(v(299));var r=!1,o="",a=cu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qi(e,1,!1,null,null,r,!1,o,a),e[wn]=t.current,Xs(e.nodeType===8?e.parentNode:e),new Ji(t)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=qo(t),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return Ro(e)},tr.hydrate=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!0,r)},tr.hydrateRoot=function(e,t,r){if(!Zi(e))throw Error(v(405));var o=r!=null&&r.hydratedSources||null,a=!1,l="",c=cu;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=iu(t,null,e,1,r??null,a,!1,l,c),e[wn]=t.current,Xs(e),o)for(e=0;e<o.length;e++)r=o[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new _l(t)},tr.render=function(e,t,r){if(!vl(t))throw Error(v(200));return kl(null,e,t,!1,r)},tr.unmountComponentAtNode=function(e){if(!vl(e))throw Error(v(40));return e._reactRootContainer?(Ro(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1},tr.unstable_batchedUpdates=Hi,tr.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!vl(r))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return kl(e,t,r,!1,o)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var wu;function Gh(){if(wu)return rd.exports;wu=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(_){console.error(_)}}return w(),rd.exports=zh(),rd.exports}var bu;function Uh(){if(bu)return Nl;bu=1;var w=Gh();return Nl.createRoot=w.createRoot,Nl.hydrateRoot=w.hydrateRoot,Nl}var Vh=Uh();const Yh=Iu(Vh);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wu=(...w)=>w.filter((_,v,G)=>!!_&&_.trim()!==""&&G.indexOf(_)===v).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=L.forwardRef(({color:w="currentColor",size:_=24,strokeWidth:v=2,absoluteStrokeWidth:G,className:P="",children:$,iconNode:U,...de},ee)=>L.createElement("svg",{ref:ee,...Xh,width:_,height:_,stroke:w,strokeWidth:G?Number(v)*24/Number(_):v,className:Wu("lucide",P),...de},[...U.map(([M,O])=>L.createElement(M,O)),...Array.isArray($)?$:[$]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(w,_)=>{const v=L.forwardRef(({className:G,...P},$)=>L.createElement(Jh,{ref:$,iconNode:_,className:Wu(`lucide-${Qh(w)}`,G),...P}));return v.displayName=`${w}`,v};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=Je("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Je("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=Je("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Je("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=Je("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=Je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=Je("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=Je("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Je("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=Je("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=Je("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=Je("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Je("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=Je("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Je("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Je("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=Je("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=Je("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Je("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Je("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=Je("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=Je("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=Je("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=Je("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=Je("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Je("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=Je("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=Je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ju="weekly_chores_canvas_sheet_data_v5",jl=[{index_:0,name:"Printable Weekly Schedule",data:[{index_:0,row:["Chore Schedule",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["FOR THE WEEK OF:","MON",null,"TUE",null,"WED",null,"THU",null,"FRI",null,"SAT",null,"SUN",null]},{index_:2,row:["2026-10-19","19",null,"20",null,"21",null,"22",null,"23",null,"24",null,"25",null]},{index_:3,row:["TASK",`WHO
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
- Put away food; Load dishwasher; Wipe surfaces`,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1]},{index_:10,row:["Weekly Tasks","Description",null,null,null,null,null,null,null,"Initials / Assigned",null,null,null,null,null]},{index_:11,row:["Personal Laundry","(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:12,row:["Tidy Bedrooms / Personal Spaces","(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:13,row:["Clean Up Basement","- Pick Up, Organize, Dust & Vacuum",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:14,row:["Herd Feeding Station Deep Clean","- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:15,row:["Curbside Recycling","- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:18,row:["Weekly Sign-Off","Parent Initials:",null,null,null,null,null,null,null,null,null,null,null,"_________",!1]}]},{index_:1,name:"Household Hub (Background Data)",data:[{index_:0,row:["HOUSEHOLD HUB & MASTER DIRECTORY",null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",null,null,null,null,null,null,null,null,null,null,null]},{index_:3,row:["HOUSEHOLD MEMBERS",null,null,null,null,null,"MASTER CHORE REGISTRY & ALLOCATION RULES",null,null,null,null,null]},{index_:4,row:["Name","Role","Occupancy","Special Rotation Groups","Active Status",null,"Chore","Member / Group","Frequency","Suggested Days","Details / Notes",null]},{index_:5,row:["Thom","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Empty the Litter Box (Morning & Evening)","Non-Casual","Daily","N/A","Scoop waste, refresh litter, dispose of waste.",null]},{index_:6,row:["Meghan","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Feed the Herd (Breakfast & Supper)","Non-Casual","Daily","N/A","Feed all animals the appropriate food and portions.",null]},{index_:7,row:["Sydney","Minion","Full-Time","Kids, Non-Casual, All",!0,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun","Put away clean dishes, Load any dirty dishes","Kitchen"]},{index_:8,row:["Cadence","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Make Supper: Plan Ahead!","Non-Casual","Daily","Mon – Sun","Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",null]},{index_:9,row:["Mason","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Dinner Dishes & Kitchen Cleanup","Non-Casual","Daily","N/A","Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",null]},{index_:10,row:["Koda","Minion","Casual","All",!0,null,"Tidy Bedrooms / Personal Spaces","Kids","Once a Week","Saturday","Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",null]},{index_:11,row:["Keyanna","Minion","Casual","All",!0,null,"Laundry","All","Once a Week","Saturday","Wash, dry, fold & put away (each kid responsible for their own items)",null]},{index_:12,row:[null,null,null,null,null,null,"Clean Basement (Pick Up, Dust, Vacuum)","Non-Casual","Once a Week","Sunday","Pick up mess & laundry, dust surfaces, vacuum floors",null]},{index_:13,row:["OCCUPANCY CATEGORIES",null,null,null,null,null,"Herd Feeding Station Deep Clean","All","Once a Week","Sunday","Wash & sanitize pet bowls, vacuum feeding mat",null]},{index_:14,row:["Type","Description","Rules",null,"Active Status",null,"Curbside Recycling","Non-Casual","Bi-Weekly","Thursday Evening","Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:15,row:["Full-Time","Constant Residency","Included in all weekly/monthly schedulings",null,!0,null,"Curbside Waste","Non-Casual","Bi-Weekly","Thursday Evening","Roll waste bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:16,row:["Bi-Weekly","Half-Time Residency",'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',null,!0,null,"Walk Dogs: Ellie & Lewis (Morning & Evening walk)","Non-Casual","Daily","Mon – Sun","Morning & evening walk for Ellie & Lewis","Pet Care"]},{index_:17,row:["Casual","Periodic Residency","Manually added to any schedules",null,!0,null,"SCHEDULE CONFIGURATIONS",null,null,null,null,null]},{index_:18,row:["SPECIAL ROTATION GROUPS",null,null,null,null,null,"Active Week Start Date","2026-10-19","Printable Weekly Schedule",null,null,null]},{index_:19,row:["Name","Members",null,null,"Active Status",null,null,null,null,null,null,null]},{index_:20,row:["All","Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",null,null,!0,null,"Custody Schedule Rotation","Kids Week","Bi-Weekly Schedule",null,"Mason, Cadence",null]},{index_:21,row:["Kids","Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:22,row:["Parents","Thom, Meghan",null,null,!0,null,null,null,null,null,null,null]},{index_:23,row:["Non-Casual","Thom, Meghan, Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:26,row:["Pet Name","Dog / Cat","Routine","Care Responsibilities","Active Status",null,null,null,null,null,null,null]},{index_:27,row:["Ellie","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:28,row:["Lewis","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:29,row:["Casey","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:30,row:["Gigi","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:31,row:["Sloane","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:32,row:["Scoob","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:34,row:[null,null,null,null,!1,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun",null,null]}]}];var Gt=[{name:"Monday",short:"Mon",color:"#8E283A",lightBg:"#FDF2F4",border:"#F8B4BD"},{name:"Tuesday",short:"Tue",color:"#1A638B",lightBg:"#F0F7FB",border:"#A6D2ED"},{name:"Wednesday",short:"Wed",color:"#C45508",lightBg:"#FEF6F0",border:"#FBD3B6"},{name:"Thursday",short:"Thu",color:"#3D7841",lightBg:"#F2F8F3",border:"#B6DFBA"},{name:"Friday",short:"Fri",color:"#584B79",lightBg:"#F5F3F9",border:"#CDC3E6"},{name:"Saturday",short:"Sat",color:"#B81B6C",lightBg:"#FDF2F8",border:"#F8B4DB"},{name:"Sunday",short:"Sun",color:"#0C7B83",lightBg:"#EFF9FA",border:"#9EE1E6"}],ws=[{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},{color:"#D97706",bg:"#FEF3C7",text:"#B45309"},{color:"#10B981",bg:"#D1FAE5",text:"#047857"},{color:"#6366F1",bg:"#EEF2FF",text:"#4338CA"}],ap={meghan:{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},thom:{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},sydney:{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},cadence:{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},mason:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},koda:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},keyanna:{color:"#D97706",bg:"#FEF3C7",text:"#B45309"}},Tu={ellie:{color:"#E11D48",bg:"#FFE4E6",text:"#BE123C",border:"#FECDD3"},lewis:{color:"#059669",bg:"#D1FAE5",text:"#047857",border:"#A7F3D0"},casey:{color:"#7C3AED",bg:"#EDE9FE",text:"#6D28D9",border:"#DDD6FE"},gigi:{color:"#DB2777",bg:"#FCE7F3",text:"#BE185D",border:"#FBCFE8"},sloane:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},sloan:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},scoob:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",border:"#FED7AA"}};function Ne(w){return w?String(w).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g," ").replace(/\s+/g," ").trim():""}function ct(w){if(!w)return"";const _=String(w).toLowerCase();return _.includes("litter")?"litter_box":_.includes("herd")&&(_.includes("breakfast")||_.includes("supper")||_.includes("feed the herd"))?"feed_herd":_.includes("dishwasher")&&_.includes("empty")?"empty_dishwasher":_.includes("supper")||_.includes("dinner")&&_.includes("plan")?"make_supper":_.includes("dishes")||_.includes("kitchen cleanup")?"dinner_dishes":_.includes("bedroom")||_.includes("personal spaces")?"tidy_bedrooms":_.includes("laundry")?"laundry":_.includes("basement")?"clean_basement":_.includes("feeding station")||_.includes("deep clean")&&_.includes("feeding")?"feeding_station_deep_clean":_.includes("recycling")?"curbside_recycling":_.includes("waste")?"curbside_waste":_.includes("sign-off")||_.includes("sign off")||_.includes("inspection")?"weekly_sign_off":_.includes("walk")&&_.includes("dog")?"walk_dogs":Ne(w)}function nn(w){const _=String(w||"").toLowerCase();return _.includes("tidy bedroom")||_.includes("tidy up bedroom")||_.includes("tidy bedrooms")||_.includes("personal spaces")}function Ou(w){return String(w||"").toLowerCase().includes("laundry")}function Tl(w){return nn(w)||Ou(w)}function Pu(w){const _=String(w||"").toLowerCase();return _.includes("clean basement")||_.includes("basement")}function Ku(w){const _=String(w||"").toLowerCase();return _.includes("feeding station")||_.includes("herd feeding")||_.includes("deep clean")&&_.includes("feeding")}function Dn(w){const _=String(w||"").toLowerCase();return _.includes("sign-off")||_.includes("sign off")||_.includes("inspection")}function lp(w,_){if(Tl(w)||Dn(w))return!1;if(Pu(w)||Ku(w))return!0;const v=String(w||"").toLowerCase();return!!(v.includes("curbside")||v.includes("recycling")||v.includes("waste")||_&&(_.frequency==="weekly"||_.frequency==="biweekly"))}function ir(w){const v=String(w||"").match(/tidy bedroom:\s*([A-Za-z]+)/i);return v?v[1].trim():null}function ao(w,_,v){const G=new Date(w,_,v,12,0,0),P=new Date(2026,9,18,12,0,0),U=(Math.round((G.getTime()-P.getTime())/(1e3*60*60*24))%14+14)%14;return U===0?{isPresent:!0,label:"Arrives 5 PM",fullLabel:"Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",cycleIndex:U,isArrivalDay:!0,isDepartureDay:!1,isFullStay:!1}:U>=1&&U<=6?{isPresent:!0,label:"Here (Kids Week)",fullLabel:"Cadence & Mason are here this week (Kids Week)",cycleIndex:U,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!0}:U===7?{isPresent:!0,label:"Leaves 5 PM",fullLabel:"Cadence & Mason depart today at 5:00 PM (End of Kids Week)",cycleIndex:U,isArrivalDay:!1,isDepartureDay:!0,isFullStay:!1}:{isPresent:!1,label:"Away (Off Week)",fullLabel:"Cadence & Mason are away this week (Off week)",cycleIndex:U,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!1}}function Eu(w,_="Cadence & Mason"){if(!w||w.length<7)return null;const v=w[6],G=w[0],P=ao(G.year,G.month,G.day);return ao(v.year,v.month,v.day).isArrivalDay?{text:`${_} arrive Sunday at 5:00 PM`,badgeBg:"bg-pink-50 text-pink-700 border-pink-200"}:P.isPresent&&P.isFullStay?{text:`${_} here this week (leave Sun 5 PM)`,badgeBg:"bg-emerald-50 text-emerald-700 border-emerald-200"}:{text:`${_} away this week (next back on Sunday)`,badgeBg:"bg-slate-100 text-slate-500 border-slate-200"}}function ip(w){if(!w||w.length<6)return!1;const _=w[5]||w[w.length-1],v=ao(_.year,_.month,_.day);return v.isFullStay||v.isDepartureDay}function Bu(w,_,v,G=["Thom","Meghan"]){const P=new Date(w,_,v,12,0,0),$=new Date(2026,9,11,12,0,0),U=Math.round((P.getTime()-$.getTime())/(1e3*60*60*24*7)),de=G&&G.length>0?G:["Thom","Meghan"],ee=(U%de.length+de.length)%de.length;return de[ee]}var dp=[{name:"Ellie",kind:"Dog",icon:"🐕"},{name:"Lewis",kind:"Dog",icon:"🐕"},{name:"Casey",kind:"Cat",icon:"🐈"},{name:"Gigi",kind:"Cat",icon:"🐈"},{name:"Sloane",kind:"Cat",icon:"🐈"},{name:"Scoob",kind:"Cat",icon:"🐈"}],An=[{id:"Pet Care",name:"Pet Care",icon:"🐾",bg:"bg-amber-50",text:"text-amber-800",border:"border-amber-200",dot:"#D97706"},{id:"Kitchen",name:"Kitchen",icon:"🍽️",bg:"bg-emerald-50",text:"text-emerald-800",border:"border-emerald-200",dot:"#059669"},{id:"Bedrooms",name:"Bedrooms",icon:"🛏️",bg:"bg-pink-50",text:"text-pink-800",border:"border-pink-200",dot:"#DB2777"},{id:"Household",name:"Household",icon:"🏠",bg:"bg-blue-50",text:"text-blue-800",border:"border-blue-200",dot:"#2563EB"}],cd=[{title:"Empty the Litter Box (Morning & Evening)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening scoop, waste disposal"},{title:"Feed the Herd (Breakfast & Supper)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening feeding, refresh water bowls"},{title:"Make Supper: Plan Ahead!",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Parents & Kids",notes:"Meal prep, cooking, family dinner"},{title:"Dinner Dishes & Kitchen Cleanup",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Clear table, dishwasher, wipe counters & sink"},{title:"Tidy Bedrooms & Checklist",category:"Bedrooms",who:"Each Child",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Occupants",notes:"Pick up mess & laundry, dust surfaces, vacuum floors"},{title:"Laundry (Wash, Fold, Put Away)",category:"Household",who:"Sydney",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"Sydney",notes:"Linens, clothes, fold and put in drawers"},{title:"Clean Basement & Rec Room",category:"Household",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Kids",notes:"Tidy items, organize games, vacuum carpet"},{title:"Weekly Sign-Off & Inspection",category:"Administration",who:"Parents",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"},{title:"Herd Feeding Station Deep Clean",category:"Pet Care",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Full-Time Roster",notes:"Wash & sanitize pet bowls, wipe feeding mat"},{title:"Curbside Recycling",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"},{title:"Curbside Waste",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"},{title:"Walk Dogs: Ellie & Lewis (Morning & Evening walk)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening walk for Ellie & Lewis"}];function Et(w,_,v,G){const P=String(w||"").toLowerCase(),$=P.includes("recycling"),U=P.includes("waste");if(!$&&!U)return!0;const de=new Date(_,v,G,12,0,0),ee=new Date(2026,9,15,12,0,0),M=Math.round((de.getTime()-ee.getTime())/(1e3*60*60*24)),B=(Math.round(M/7)%2+2)%2;return $?B===0:U?B===1:!0}function Al(w){const _=String(w||"").toLowerCase().trim();return _.includes("recycling")||_.includes("waste")?{frequency:"biweekly",dayOfWeek:3}:_.includes("sign-off")||_.includes("inspection")||_.includes("deep clean")||_.includes("feeding station")?{frequency:"weekly",dayOfWeek:6}:_.includes("tidy bedroom")||_.includes("clean basement")||_.includes("laundry")?{frequency:"weekly",dayOfWeek:5}:{frequency:"daily",dayOfWeek:0}}function Mu(w){return w<10?"0"+w:""+w}function jn(w,_,v){return`${w}-${Mu(_+1)}-${Mu(v)}`}function Tt(w){if(w==null||w==="")return null;if(w instanceof Date)return{year:w.getFullYear(),month:w.getMonth(),day:w.getDate()};if(typeof w=="number"){if(w>3e4&&w<6e4){const G=(w-25569)*86400*1e3,P=new Date(G);return{year:P.getUTCFullYear(),month:P.getUTCMonth(),day:P.getUTCDate()}}return null}const _=String(w).trim();if(!_.includes("-")){const G=Number(_);if(!isNaN(G)&&G>3e4&&G<6e4){const P=new Date((G-25569)*86400*1e3);return{year:P.getUTCFullYear(),month:P.getUTCMonth(),day:P.getUTCDate()}}return null}const v=_.split("-").map(Number);return v.length!==3||isNaN(v[0])||isNaN(v[1])||isNaN(v[2])?null:{year:v[0],month:v[1]-1,day:v[2]}}function qu(w,_,v){const P=new Date(w,_,v).getDay(),$=P===0?-6:1-P,U=new Date(w,_,v+$);return{year:U.getFullYear(),month:U.getMonth(),day:U.getDate()}}function vs(w,_,v){const G=qu(w,_,v),P=[];for(let $=0;$<7;$++){const U=new Date(G.year,G.month,G.day+$),de=U.getFullYear(),ee=U.getMonth(),M=U.getDate();P.push({year:de,month:ee,day:M,dateKey:jn(de,ee,M),isCurrentMonth:!0,dayOfWeekIndex:$})}return P}function bs(){const w=new Date,_=qu(w.getFullYear(),w.getMonth(),w.getDate());return{..._,todayYear:w.getFullYear(),todayMonth:w.getMonth(),todayDay:w.getDate(),dateKey:jn(_.year,_.month,_.day)}}function cp(w,_=cd){const v=Tt(w)||{year:2026,month:9,day:12},G=vs(v.year,v.month,v.day),P=["Thom","Meghan"],$=["Sydney"],U=["Sydney","Cadence","Mason"],de=["Thom","Meghan","Sydney"],ee=["Thom","Meghan","Sydney","Cadence","Mason"],M={};return G.forEach((O,B)=>{const re=O.dateKey;M[re]={};const we=ao(O.year,O.month,O.day),Re=we.isFullStay||we.isDepartureDay,le=Re?ee:de,oe=Re?U:$,Fe=B%le.length;let Se=0;_.forEach((Y,Te)=>{var Ye,nt,Ue,ot,Ce,ue,He;const J=Y.task||Y.title||((Ye=Y.row)==null?void 0:Ye[0])||"",ke=J.toLowerCase(),me=Al(J);let ce=!1;const Ie=ke.includes("deep clean")||ke.includes("feeding station"),Oe=ke.includes("recycling"),Q=ke.includes("waste");if(Ie)ce=B===6;else if(Oe)ce=B===3&&Et("recycling",O.year,O.month,O.day);else if(Q)ce=B===3&&Et("waste",O.year,O.month,O.day);else if(me.frequency==="daily"||(nt=Y.frequency)!=null&&nt.toLowerCase().includes("daily")&&!((Ue=Y.frequency)!=null&&Ue.toLowerCase().includes("once")))ce=!0;else if(me.frequency==="biweekly"||(ot=Y.frequency)!=null&&ot.toLowerCase().includes("bi"))ce=B===3&&Et(J,O.year,O.month,O.day);else if(me.frequency==="weekly"||(Ce=Y.frequency)!=null&&Ce.toLowerCase().includes("weekly")&&!((ue=Y.frequency)!=null&&ue.toLowerCase().includes("bi"))||(He=Y.frequency)!=null&&He.toLowerCase().includes("once")){const I=String(Y.targetDay||"").toLowerCase(),ve=I.includes("sunday")?6:I.includes("thursday")?3:5;ce=B===ve}let X="";ce?nn(J)?X=Re?"Each Child":"Sydney":B===6&&ke.includes("supper")?X=Bu(O.year,O.month,O.day,P):ke.includes("sign-off")||ke.includes("inspection")?X=P[B%P.length]:ke.includes("basement")?X=oe[(Fe+1)%oe.length]:ke.includes("laundry")?X=oe[Fe%oe.length]:Ie?X=le[(Fe+1)%le.length]:ke.includes("recycling")?X=le[(Fe+3)%le.length]:ke.includes("waste")?X=le[(Fe+2)%le.length]:(X=le[(Fe+Se)%le.length],Se++):X="";const te=Y.index_!==void 0?Y.index_:5+Te,g={who:X,done:!1,kidsDone:{}};M[re][te]=g,Y.index_!==void 0&&(M[re][Y.index_]=g),J&&(M[re][J]=g,M[re][ke]=g)})}),M}function Ru(w,_){const v=Tt(_)||{year:2026,month:9,day:12},G=vs(v.year,v.month,v.day),P={};return G.forEach($=>{P[$.dateKey]={}}),!w||!Array.isArray(w)||w.forEach($=>{if($.index_<4||!$.row||$.row.length===0)return;const U=String($.row[0]||"").trim(),de=U.toLowerCase();if(!U||U.startsWith("•")||de==="daily tasks"||de==="weekly tasks"||U.toUpperCase().includes("SECTION")||U.toUpperCase().includes("ONCE-A-WEEK")||U.toUpperCase().includes("ROSTER")||U.toUpperCase().includes("PET CARE"))return;const ee=U.toLowerCase(),M=ct(U),O=$.index_;G.forEach((B,re)=>{const we=1+re*2,Re=2+re*2,le=$.row[we]!==void 0&&$.row[we]!==null?String($.row[we]).trim():"",Fe=le.startsWith("-")||le.startsWith("(")||le.startsWith("SG:")||le.startsWith("Done:")||le.startsWith("Parent Initials")||le.startsWith("___")||/^Who:\s*_+$/i.test(le)?"":le.replace(/^Who:\s*/i,"").trim(),Se=$.row[Re]===!0||String($.row[Re]).toLowerCase()==="true",Y={who:Fe,done:Se,kidsDone:{}};Tl(U)&&(($.row[2]===!0||String($.row[2]).toLowerCase()==="true")&&(Y.kidsDone.Sydney=!0),($.row[4]===!0||String($.row[4]).toLowerCase()==="true")&&(Y.kidsDone.Cadence=!0),($.row[6]===!0||String($.row[6]).toLowerCase()==="true")&&(Y.kidsDone.Mason=!0),($.row[12]===!0||String($.row[12]).toLowerCase()==="true")&&(Y.kidsDone.Koda=!0),($.row[14]===!0||String($.row[14]).toLowerCase()==="true")&&(Y.kidsDone.Keyanna=!0)),P[B.dateKey][O]=Y,P[B.dateKey][U]=Y,P[B.dateKey][ee]=Y,M&&(P[B.dateKey][M]=Y)})}),P}function up({data:w,updateItem:_,deleteItem:v,insertItem:G,moveItem:P,followLink:$}){var U,de,ee;const[M,O]=L.useState(()=>new Set),[B,re]=L.useState({}),[we,Re]=L.useState([]),[le,oe]=L.useState([]),[Fe,Se]=L.useState(null),[Y,Te]=L.useState(null),[Ye,nt]=L.useState(null),Ue=L.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return(i.includes("printable")||i.includes("weekly")&&i.includes("schedule"))&&!i.includes("hub")})||w[0],[w]),ot=L.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return i.includes("hub")||i.includes("household")||i.includes("directory")||i.includes("roster")})||(w.length>1?w[1]:w[0]),[w]),Ce=(U=Ue==null?void 0:Ue.index_)!=null?U:0,ue=(de=ot==null?void 0:ot.index_)!=null?de:(w==null?void 0:w.length)>1?1:0,He=ot||{data:[]},J=Ue||{data:[]},ke=Ce,me=He;J!=null&&J.data;const ce=(s,i)=>{if(!(J!=null&&J.data)||J.data.length===0)return null;const u=ct(s),m=Ne(s);if(u){const p=J.data.find(h=>h.index_<4||!h.row||!h.row[0]?!1:ct(h.row[0])===u);if(p)return p}if(m){const p=J.data.find(d=>d.index_<4||!d.row||!d.row[0]?!1:Ne(d.row[0])===m);if(p)return p;const h=J.data.find(d=>{if(d.index_<4||!d.row||!d.row[0])return!1;const x=Ne(d.row[0]);return x.startsWith(m)||m.startsWith(x)||x.includes(m)||m.includes(x)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=J.data.find(h=>h.index_===i&&h.index_>=4);if(p)return p}return null},Ie=(s,i)=>{const u=ce(s,i);return u?u.index_:i},Oe=(s,i)=>{if(!(He!=null&&He.data)||He.data.length===0)return null;const u=ct(s),m=Ne(s);if(u){const p=He.data.find(h=>h.index_<5||!h.row||!h.row[6]?!1:ct(h.row[6])===u);if(p)return p}if(m){const p=He.data.find(d=>d.index_<5||!d.row||!d.row[6]?!1:Ne(d.row[6])===m);if(p)return p;const h=He.data.find(d=>{if(d.index_<5||!d.row||!d.row[6])return!1;const x=Ne(d.row[6]);return x.startsWith(m)||m.startsWith(x)||x.includes(m)||m.includes(x)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=He.data.find(h=>h.index_===i&&h.index_>=5);if(p)return p}return null},Q=(s,i)=>{const u=Oe(s,i);return u?u.index_:i},X=L.useMemo(()=>{const s=me.data||[];let i="2026-10-12",u="Kids Week",m="Mason, Cadence",p="Bi-Weekly Schedule continuing on from first Friday specified",h="Non-Casual";return s.forEach(d=>{if(!d.row)return;const x=String(d.row[6]||"").toLowerCase().trim(),f=d.row[7],C=String(d.row[8]||"").trim(),D=String(d.row[10]||"").trim();if(x.includes("active week")){const T=Tt(f);T?i=jn(T.year,T.month,T.day):f&&(i=String(f).trim())}else x.includes("custody schedule")?(f&&(u=String(f).trim()),D&&(m=D)):(x.includes("waste")||x.includes("recycling"))&&(C&&(p=C),D&&(h=D))}),{activeWeekStart:i,custodyRotation:u,custodyMembers:m,wasteRotation:p,wasteMembers:h}},[me]),te=L.useMemo(()=>{const s=me.data||[],i=[];return s.forEach(u=>{if(!u.row||u.index_<14||u.index_>17)return;const m=String(u.row[0]||"").trim();!m||m.toLowerCase()==="type"||m.toLowerCase().includes("occupancy")||m.toLowerCase().includes("special rotation")||i.push({type:m,description:String(u.row[1]||"").trim(),rules:String(u.row[2]||"").trim(),active:u.row[4]!==!1&&String(u.row[4]).toLowerCase()!=="false"})}),i.length>0?i:[{type:"Full-Time",description:"Constant Residency",rules:"Included in all weekly/monthly schedulings",active:!0},{type:"Bi-Weekly",description:"Half-Time Residency",rules:'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',active:!0},{type:"Casual",description:"Periodic Residency",rules:"Manually added to any schedules",active:!0}]},[me]),g=L.useMemo(()=>{const i=(me.data||[]).filter(u=>{if(!!!(u.row&&u.row[5]==="MEMBER_ROW")&&(u.index_<4||u.index_>12)||!u.row||!u.row[0])return!1;const p=String(u.row[0]).trim();if(!p)return!1;const h=p.toLowerCase();return!(h==="household members"||h==="name"||h.includes("directory")||h.includes("occupancy"))});return i.length===0?[{id:"Thom",name:"Thom",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8",index_:5},{id:"Meghan",name:"Meghan",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9",index_:6},{id:"Sydney",name:"Sydney",role:"Minion",residency:"Full-Time",type:"regular",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#0D9488",bg:"#CCFBF1",text:"#0F766E",index_:7},{id:"Cadence",name:"Cadence",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EC4899",bg:"#FCE7F3",text:"#BE185D",index_:8},{id:"Mason",name:"Mason",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",index_:9},{id:"Koda",name:"Koda",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",index_:10},{id:"Keyanna",name:"Keyanna",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#D97706",bg:"#FEF3C7",text:"#B45309",index_:11}]:i.map((u,m)=>{const p=String(u.row[0]||"").trim(),h=String(u.row[1]||"").trim()||(["thom","meghan"].includes(p.toLowerCase())?"Overseer Supreme":"Minion"),d=String(u.row[2]||"").trim(),x=String(u.row[3]||"").trim(),f=u.row[4]===!0||String(u.row[4]).toLowerCase()==="true",C=d.toLowerCase();let D="regular";C.includes("bi-weekly")||C.includes("biweekly")?D="biweekly":C.includes("casual")&&(D="casual");const T=ap[p.toLowerCase()]||ws[m%ws.length];return{id:p,name:p,role:h,residency:d||(D==="biweekly"?"Bi-Weekly":D==="casual"?"Casual":"Full-Time"),type:D,specialGroups:x,schedule:D==="biweekly"?"Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)":D==="casual"?"Periodic Residency (Manual Add)":"Constant Residency (Full-Time)",active:f,color:T.color,bg:T.bg,text:T.text,index_:u.index_}})},[me]),I=L.useMemo(()=>["All","Kids","Parents","Non-Casual"].map(i=>{const u=g.filter(m=>String(m.specialGroups||"").split(",").map(h=>h.trim().toLowerCase()).filter(Boolean).includes(i.toLowerCase())).map(m=>m.name);return{name:i,members:u.length>0?u.join(", "):"None",active:!0}}),[g]),ve=L.useMemo(()=>g.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")&&!i.includes("admin")&&!i.includes("mom")&&!i.includes("dad")}).map(s=>s.name),[g]),fe=L.useMemo(()=>{const s=["Sydney","Cadence","Mason","Koda","Keyanna"],i=Array.from(new Set([...ve,...s]));return i.length>0?i:s},[ve]),Le=L.useMemo(()=>{const s=me.data||[],i=s.find(u=>{var m;const p=String(((m=u.row)==null?void 0:m[0])||"").toLowerCase().trim();return p.includes("pet care profile")||p==="pet name"});return i?s.filter(m=>{if(m.index_<=i.index_||!m.row||!m.row[0]||m.row[5]==="MEMBER_ROW")return!1;const h=String(m.row[0]).trim().toLowerCase();return h!=="pet name"&&!h.includes("profile")}).map((m,p)=>{const h=String(m.row[0]).trim(),d=String(m.row[1]||"").trim(),x=String(m.row[2]||"").trim(),f=String(m.row[3]||"").trim(),C=m.row[4]!==!1&&String(m.row[4]).toLowerCase()!=="false",D=["ellie","lewis"].includes(h.toLowerCase()),T=d||(D?"Dog":"Cat"),b=T.toLowerCase(),N=b.includes("dog"),W=N?"🐕":b.includes("cat")?"🐈":b.includes("bird")?"🐦":b.includes("fish")?"🐟":"🐾",z=x||"Morning & Evening",F=["meghan","thom","sydney"].includes(f.toLowerCase()),R=!f||F?N?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water":f,Z=Tu[h.toLowerCase()]||ws[p%ws.length];return{name:h,type:T,routine:z,care:R,active:C,icon:W,color:Z.color,bg:Z.bg,text:Z.text,border:Z.border||Z.color,index_:m.index_}}):dp.map((u,m)=>{const p=Tu[u.name.toLowerCase()]||ws[m%ws.length];return{name:u.name,type:u.kind,routine:"Morning & Evening",care:u.kind==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water",active:!0,icon:u.icon,color:p.color,bg:p.bg,text:p.text,border:p.border||p.color,index_:15+m}})},[me]),xe=L.useMemo(()=>{const s=me.data||[];let i=[];const u=new Set,m=new Set;if(s.forEach(p=>{if(!p.row||p.index_<5)return;const h=p.row[6]!==void 0&&p.row[6]!==null?String(p.row[6]).trim():"";if(!h)return;const d=h.toLowerCase(),x=Ne(h),f=ct(h);if(d==="chore"||d==="parameter"||d.includes("schedule configuration")||d.includes("active week")||d.includes("waste / recycling")||d.includes("custody schedule")||d.includes("pet care profile")||d.includes("special rotation")||d.includes("occupancy categories")||d.includes("household member")||Dn(h)||f==="weekly_sign_off"||u.has(f)||m.has(x)||M.has(String(p.index_))||M.has(d)||M.has(x)||M.has(f))return;const C=String(p.row[7]||"").trim(),D=String(p.row[8]||"").trim(),T=String(p.row[9]||"").trim(),b=String(p.row[10]||"").trim(),N=String(p.row[11]||"").trim(),W=An.some(Me=>Me.name.toLowerCase()===C.toLowerCase()),R=(Me=>{const Ke=String(Me).trim().toLowerCase();return!Ke||Ke==="all non-casual"||Ke==="non-casual"||Ke==="parents & kids"||Ke==="full-time roster"?"Non-Casual":Ke==="kids"||Ke==="kids rotation"||Ke==="all kids"?"Kids":Ke==="parents"?"Parents":Ke==="all"||Ke==="all occupants"?"All":String(Me).trim()})(W?b||"Non-Casual":C||"Non-Casual"),ne=(D||(f.includes("curbside")?"Bi-Weekly":f.includes("deep_clean")||f.includes("sign_off")||f.includes("bedroom")||f.includes("laundry")||f.includes("basement")?"Once a Week":"Daily")).toLowerCase(),Ee=ne.includes("bi")?"Bi-Weekly":ne.includes("once")||ne.includes("weekly")?"Once a Week":"Daily",at=(T==="N/A"||!T?Ee==="Daily"?"Mon – Sun":Ee==="Bi-Weekly"?"Thursday Evening":"Saturday":T).replace(/\s*\(required\)/i,"").trim()||"Mon – Sun",wt=W?N:b;let ye=W?C:N&&An.some(Me=>Me.name.toLowerCase()===N.toLowerCase())?N:"Household";!W&&ye==="Household"&&(d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?ye="Pet Care":d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")||d.includes("cook")?ye="Kitchen":d.includes("bedroom")?ye="Bedrooms":d.includes("basement")?ye="Household":(d.includes("sign-off")||d.includes("inspection"))&&(ye="Administration")),u.add(f),m.add(x),i.push({index_:p.index_,task:h,canonicalKey:f,category:ye,frequency:Ee,targetDay:at==="N/A"?"Mon – Sun":at,rotationGroup:R,notes:wt,source:"hub_master_registry"})}),J!=null&&J.data&&J.data.forEach(p=>{if(p.index_<4||!p.row||!p.row[0])return;const h=String(p.row[0]).trim(),d=h.toLowerCase(),x=Ne(h),f=ct(h);if(!x||x==="daily tasks"||x==="weekly tasks"||x.includes("section")||x.includes("once a week")||x.includes("bedroom checklist")||x.includes("pet care routine")||x.startsWith("•")||Dn(h)||f==="weekly_sign_off"||u.has(f)||m.has(x)||M.has(x)||M.has(f)||M.has(String(p.index_)))return;u.add(f),m.add(x);const C=Al(h),D=C.frequency==="weekly",T=C.frequency==="biweekly";let b="Household",N="";d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?(b="Pet Care",d.includes("walk")&&(N="Morning & evening walk for Ellie & Lewis")):d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")?b="Kitchen":d.includes("bedroom")?b="Bedrooms":d.includes("basement")?b="Household":(d.includes("sign-off")||d.includes("inspection"))&&(b="Administration"),i.push({index_:p.index_,task:h,canonicalKey:f,category:b,frequency:T?"Bi-Weekly":D?"Once a Week":"Daily",targetDay:T?"Thursday Evening":D?"Saturday":"Mon – Sun",rotationGroup:"Non-Casual",notes:N,source:"printable_sheet"})}),le.length>0&&le.forEach(p=>{const h=Ne(p.task),d=ct(p.task);!u.has(d)&&!m.has(h)&&!M.has(String(p.index_))&&!M.has(h)&&!M.has(d)&&(u.add(d),m.add(h),i.push(p))}),i.length===0&&(i=cd.filter(p=>!Dn(p.title)).map((p,h)=>{var d,x;return{index_:5+h,task:p.title,category:p.category||"Household",frequency:((d=p.freq)==null?void 0:d.frequency)==="weekly"?"Once a Week":((x=p.freq)==null?void 0:x.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:p.targetDay||"Mon – Sun",rotationGroup:p.rotationGroup||"Non-Casual",notes:p.notes||"",source:"default"}})),Fe&&Array.isArray(Fe)&&Fe.length>0){const p=h=>{const d=Ne(h.task),x=Fe.indexOf(d);if(x!==-1)return x;const f=(h.task||"").toLowerCase().trim(),C=Fe.indexOf(f);if(C!==-1)return C;const D=ct(h.task);if(D){const T=Fe.findIndex(b=>ct(b)===D);if(T!==-1)return T}return-1};i.sort((h,d)=>{const x=p(h),f=p(d);return x!==-1&&f!==-1?x-f:x!==-1?-1:f!==-1?1:0})}return i},[me,le,Fe,M]),Ae=L.useMemo(()=>s=>{if(!s)return null;const i=String(s).trim().toLowerCase();return g.find(u=>u.name.toLowerCase()===i||u.id.toLowerCase()===i||i==="mom"&&(u.name.toLowerCase().includes("megh")||u.role.toLowerCase().includes("mom")||u.role.toLowerCase().includes("parent"))||i==="dad"&&(u.name.toLowerCase()==="thom"||u.role.toLowerCase().includes("dad")||u.role.toLowerCase().includes("parent")))||null},[g]),qe=L.useMemo(()=>{const s=g.filter(i=>i.type==="biweekly").map(i=>i.name);return s.length>0?s.join(" & "):"Cadence & Mason"},[g]),Pe=L.useMemo(()=>X!=null&&X.activeWeekStart?X.activeWeekStart:"2026-10-12",[X]);L.useMemo(()=>Tt(Pe)||{year:2024,month:6,day:15},[Pe]);const St=L.useMemo(()=>{const s=(J==null?void 0:J.data)||[],i=(d,x)=>{const f=ct(d);if(f==="litter_box"||f==="feed_herd"||f==="empty_dishwasher"||f==="make_supper"||f==="dinner_dishes"||f==="walk_dogs")return!0;if(f==="curbside_recycling"||f==="curbside_waste"||f==="clean_basement"||f==="feeding_station_deep_clean"||f==="tidy_bedrooms"||f==="laundry")return!1;const C=String(x||"").toLowerCase();return C.includes("bi")||C.includes("once")||C.includes("week")?!1:C.includes("daily")?!0:Al(d).frequency==="daily"},u=[],m=[],p=new Set;xe.forEach(d=>{if(Dn(d.task))return;const x=ct(d.task),f=Ne(d.task);if(p.has(x)||p.has(f))return;p.add(x),p.add(f);const C=s.find(N=>{if(N.index_<4||!N.row||!N.row[0])return!1;const W=String(N.row[0]).trim();return ct(W)===x||Ne(W)===f}),D=i(d.task,d.frequency);let T=C==null?void 0:C.row;if(!T)if(D)T=[d.task,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];else if(Tl(d.task))T=[d.task,d.notes||"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1];else{const N=d.notes||(x.includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":x.includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"- Pick Up, Organize, Dust & Vacuum");T=[d.task,N,null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]}const b={isSectionHeader:!1,index_:C?C.index_:d.index_,row:T,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};D?u.push(b):m.push(b)}),s.forEach(d=>{if(d.index_<4||!d.row||!d.row[0])return;const x=String(d.row[0]).trim(),f=x.toLowerCase();if(!x||f==="daily tasks"||f==="weekly tasks"||f.includes("once-a-week")||f.includes("bedroom checklist")||f.includes("pet care routine")||f.includes("household roster")||f.includes("bi-weekly schedule")||f.startsWith("•")||Dn(x))return;const C=ct(x),D=Ne(x);if(p.has(C)||p.has(D))return;p.add(C),p.add(D);const T=i(x),b={isSectionHeader:!1,index_:d.index_,row:d.row,task:x};T?u.push(b):m.push(b)}),we.length>0&&we.forEach(d=>{const x=ct(d.task),f=Ne(d.task);if(p.has(x)||p.has(f))return;p.add(x),p.add(f);const C=i(d.task,d.frequency),D={isSectionHeader:!1,index_:d.index_,row:d.row,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};C?u.push(D):m.push(D)});const h=[];return h.push({isSectionHeader:!0,headerType:"daily",index_:4,title:"Daily Tasks"}),h.push(...u),h.push({isSectionHeader:!0,headerType:"weekly",index_:10,title:"Weekly Tasks",descHeader:"Description",rightHeader:"Initials / Assigned"}),h.push(...m),h.push({isSectionHeader:!1,index_:18,row:["Weekly Sign-Off & Inspection","Parents",!1,null,null,null,null,null,null,"Thom / Meghan",null,null,null,null,null],task:"Weekly Sign-Off & Inspection",category:"Administration",frequency:"Once a Week",targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"}),h.filter(d=>{if(d.isSectionHeader||Dn(d.task))return!0;const x=String(d.index_),f=String(d.task||"").toLowerCase().trim(),C=Ne(d.task),D=ct(d.task);return!(M.has(x)||M.has(f)||M.has(C)||M.has(D))}).map(d=>{if(d.isSectionHeader)return d;const x=B[d.index_]||B[String(d.task||"").toLowerCase().trim()]||(d.task?B[ct(d.task)]:null);if(!x)return d;const f=x.task||d.task,C=x.row?[...x.row]:[...d.row||[]];return C[0]=f,{...d,task:f,row:C,category:x.category||d.category,frequency:x.frequency||d.frequency,targetDay:x.targetDay||d.targetDay,rotationGroup:x.rotationGroup||d.rotationGroup,notes:x.notes||d.notes}})},[J,xe,we,M,B]),ge=L.useMemo(()=>{const s=St.filter(i=>!i.isSectionHeader).map(i=>{const u=i.task,m=ct(u),p=Ne(u),h=xe.find(T=>{if(m&&ct(T.task)===m||p&&Ne(T.task)===p)return!0;const b=T.task.toLowerCase().trim();return u.toLowerCase().trim()===b})||xe.find(T=>{const b=T.task.toLowerCase().trim(),N=u.toLowerCase().trim();return N.includes("deep clean")&&b.includes("deep clean")||N.includes("feed the herd")&&b.includes("feed the herd")?!0:N.includes(b)||b.includes(N)||N.includes("dishes")&&b.includes("dishes")||N.includes("litter")&&b.includes("litter")||N.includes("supper")&&b.includes("supper")||N.includes("basement")&&b.includes("basement")||N.includes("laundry")&&b.includes("laundry")||N.includes("sign-off")&&b.includes("sign-off")});let d=(h==null?void 0:h.category)||"Household",x=(h==null?void 0:h.frequency)||"Daily",f=(h==null?void 0:h.targetDay)||"Mon – Sun",C=(h==null?void 0:h.rotationGroup)||"Kids Rotation",D=(h==null?void 0:h.notes)||"";return u.toLowerCase().includes("deep clean")||u.toLowerCase().includes("feeding station")?(d="Pet Care",x="Once a Week",f="Sunday",C=(h==null?void 0:h.rotationGroup)||"All",D=(h==null?void 0:h.notes)||"Wash & sanitize pet bowls, vacuum feeding mat"):u.toLowerCase().includes("recycling")?(d="Household",x="Bi-Weekly",f="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)"):u.toLowerCase().includes("waste")?(d="Household",x="Bi-Weekly",f="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)"):u.toLowerCase().includes("litter")||u.toLowerCase().includes("feed")?d="Pet Care":u.toLowerCase().includes("supper")||u.toLowerCase().includes("dishes")?d="Kitchen":nn(u)?(d="Bedrooms",x="Once a Week",f="Saturday",C=ir(u)||"Each Child"):u.toLowerCase().includes("basement")?(d="Household",x="Once a Week",f="Saturday",C="All Kids"):u.toLowerCase().includes("laundry")?(d="Household",x="Once a Week",f="Saturday",C="Sydney"):u.toLowerCase().includes("sign-off")&&(d="Administration",x="Once a Week",f="Sunday",C="Parents"),{index_:i.index_,row:i.row,task:u,category:d,frequency:x,targetDay:f,rotationGroup:C,notes:D}});return s.length>0?s:cd.map((i,u)=>{var m,p;return{index_:4+u,row:[i.title,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1],task:i.title,category:i.category,frequency:((m=i.freq)==null?void 0:m.frequency)==="weekly"?"Once a Week":((p=i.freq)==null?void 0:p.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:i.targetDay,rotationGroup:i.rotationGroup,notes:i.notes}})},[St,xe]),io=L.useMemo(()=>bs(),[]),[Kt,on]=L.useState("matrix"),[gt,Tn]=L.useState(()=>io.todayYear),[st,Wr]=L.useState(()=>io.todayMonth),[ut,sn]=L.useState(()=>io.dateKey),[Ut,ya]=L.useState("ALL"),[Mt,an]=L.useState(null),[ga,co]=L.useState(!1),[Cs,En]=L.useState(!1),[wa,Or]=L.useState(!1),[dr,ba]=L.useState("add"),[rr,ln]=L.useState([]),[Ns,Ss]=L.useState(""),[cr,kr]=L.useState(null),[uo,Oo]=L.useState(""),[ur,dn]=L.useState("daily"),[Po,As]=L.useState(5),[Ko,Bo]=L.useState("All Non-Casual"),[_a,ho]=L.useState(!1),[va,Pr]=L.useState(!1),[Ds,Mn]=L.useState(null),[js,po]=L.useState(["Kids","Non-Casual","All"]),[Bt,Rn]=L.useState(null),[hr,Ts]=L.useState(null),[ka,mo]=L.useState(""),[Cr,Ca]=L.useState(""),[Es,De]=L.useState(null),[qo,Na]=L.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Ms,Rs]=L.useState(!1),[$o,Ln]=L.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Ze,Ls]=L.useState("ALL"),[Nr,Fn]=L.useState("ALL"),[Kr,Fs]=L.useState(""),[Is,Sr]=L.useState(null),[We,Rt]=L.useState(null),[Lt,Ar]=L.useState(null),[Sa,xo]=L.useState(!1),[Qe,qt]=L.useState({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",selectedTargetDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],customTargetEnabled:!1,customTargetText:"",rotationGroup:"Non-Casual",notes:""}),Vt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Br=s=>{const i=String(s||"").trim();if(!i||i==="Mon – Sun"||i==="Mon - Sun"||i.toLowerCase()==="daily")return{selectedDays:[...Vt],customEnabled:!1,customText:""};const u=i.split(",").map(h=>h.trim()).filter(Boolean),m=[],p=[];return u.forEach(h=>{const d=Vt.find(x=>x.toLowerCase()===h.toLowerCase());d?m.includes(d)||m.push(d):p.push(h)}),{selectedDays:Vt.filter(h=>m.includes(h)),customEnabled:p.length>0,customText:p.join(", ")}},qr=(s,i,u)=>{const m=Vt.filter(d=>s.includes(d)),p=m.length===7?"Mon – Sun":m.join(", "),h=String(u||"").trim();return i&&h?p?`${p}, ${h}`:h:p||"Mon – Sun"},fo=L.useMemo(()=>xe.filter(s=>{if(Ze!=="ALL"&&(s.category||"").toLowerCase()!==Ze.toLowerCase())return!1;if(Nr!=="ALL"){const i=(s.frequency||"").toLowerCase(),u=Nr.toLowerCase();if(u==="daily"&&!i.includes("daily")||(u==="once a week"||u==="weekly")&&(!i.includes("once")&&!i.includes("weekly")||i.includes("bi"))||u==="bi-weekly"&&!i.includes("bi"))return!1}if(Kr){const i=Kr.toLowerCase();if(!((s.task||"").toLowerCase().includes(i)||(s.category||"").toLowerCase().includes(i)||(s.rotationGroup||"").toLowerCase().includes(i)||(s.notes||"").toLowerCase().includes(i)||(s.targetDay||"").toLowerCase().includes(i)))return!1}return!0}),[xe,Ze,Nr,Kr]),[Aa,El]=L.useState(""),[Ws,$r]=L.useState(!1),[nr,Hr]=L.useState({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),[Ve,cn]=L.useState(null),[un,In]=L.useState({name:"",routine:"",care:""}),[Da,yo]=L.useState(null),[Os,Ho]=L.useState("");L.useEffect(()=>{(J!=null&&J.data||He!=null&&He.data)&&(oe(s=>s.filter(i=>{var u,m;const p=Ne(i.task),h=(u=He.data)==null?void 0:u.some(x=>x.row&&Ne(x.row[6])===p),d=(m=J.data)==null?void 0:m.some(x=>x.row&&Ne(x.row[0])===p);return!h&&!d})),Re(s=>s.filter(i=>{var u;const m=Ne(i.task);return!((u=J.data)==null?void 0:u.some(h=>h.row&&Ne(h.row[0])===m))})))},[J.data,He.data]);const[hn,pr]=L.useState({}),[pn,mn]=L.useState("ALL"),Yt=s=>{var i;const u=(s==null?void 0:s.task)||((i=s==null?void 0:s.row)==null?void 0:i[0])||"";if(hn[u])return hn[u];if(hn[s==null?void 0:s.index_])return hn[s==null?void 0:s.index_];const m=String(u||"").toLowerCase();if(m.includes("recycling")||m.includes("waste"))return{frequency:"biweekly",dayOfWeek:3};if(m.includes("deep clean")||m.includes("feeding station"))return{frequency:"weekly",dayOfWeek:6};const p=ct(u),h=xe.find(d=>p&&ct(d.task)===p||Ne(d.task)===Ne(u)||d.task.toLowerCase()===u.toLowerCase());if(h){const d=String(h.frequency||"").toLowerCase(),x=String(h.targetDay||"").toLowerCase();return d.includes("bi-weekly")||d.includes("biweekly")?{frequency:"biweekly",dayOfWeek:3}:d.includes("weekly")||d.includes("once")?{frequency:"weekly",dayOfWeek:x.includes("sunday")?6:x.includes("thursday")?3:x.includes("friday")?4:5}:{frequency:"daily",dayOfWeek:0}}return Al(u)},[et,mt]=L.useState(()=>{var s,i;const u=((s=w==null?void 0:w.find(m=>{const p=String(m.name||"").toLowerCase();return(p.includes("printable")||p.includes("weekly")&&p.includes("schedule"))&&!p.includes("hub")}))==null?void 0:s.data)||((i=w==null?void 0:w[0])==null?void 0:i.data)||[];return Ru(u,bs().dateKey)}),ja=()=>{const s=ut||bs().dateKey,i=cp(s,ge);if(mt(u=>({...u,...i})),Ce>=0){const u=Tt(s)||{year:2026,month:9,day:12};ge.forEach(m=>{var p,h,d,x,f,C;const D=ce(m.task,m.index_);if(!D)return;const T=new Array(15).fill(void 0);let b=!1;for(let N=0;N<7;N++){const W=new Date(u.year,u.month,u.day+N),z=jn(W.getFullYear(),W.getMonth(),W.getDate()),F=((h=(p=i[z])==null?void 0:p[m.index_])==null?void 0:h.who)||((x=(d=i[z])==null?void 0:d[m.task])==null?void 0:x.who)||((C=(f=i[z])==null?void 0:f[ct(m.task)])==null?void 0:C.who);if(F){const R=1+N*2;T[R]=F,b=!0}}b&&_(Ce,D.index_,T)})}De(`Distributed & assigned all scheduled chores for week of ${s} across Thom, Meghan, Sydney, Cadence, and Mason (Sunday Supper assigned to parents)!`),setTimeout(()=>De(null),4500)},At=L.useMemo(()=>{const s=Tt(ut)||{year:2026,month:9,day:12};return vs(s.year,s.month,s.day)},[ut]),zr=L.useMemo(()=>Eu(At,qe),[At,qe]),Gr=L.useMemo(()=>ip(At),[At]);L.useMemo(()=>g.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")?s.type==="regular"?!0:s.type==="biweekly"?Gr:!1:!1}).map(s=>s.name),[g,Gr]),L.useMemo(()=>{const s=g.filter(i=>{if(i.active===!1)return!1;const u=String(i.role||"").toLowerCase();return!u.includes("parent")&&!u.includes("overseer")&&!u.includes("overlord")&&i.type==="casual"}).map(i=>i.name);return s.length>0?s:["Koda","Keyanna"]},[g]),L.useEffect(()=>{if(!(J!=null&&J.data)||J.data.length===0)return;const s=Ru(J.data,ut||Pe||"2026-10-12");mt(i=>{const u={...i};return Object.keys(s).forEach(m=>{u[m]={...u[m]||{},...s[m]}}),u})},[J,ut,Pe]);const Wn=L.useMemo(()=>{const s=new Date(gt,st+1,0).getDate(),i=new Date(gt,st,1).getDay(),u=i===0?6:i-1,m=new Date(gt,st,0).getDate(),p=[];let h=[];for(let d=u-1;d>=0;d--){const x=m-d,f=st===0?11:st-1,C=st===0?gt-1:gt;h.push({year:C,month:f,day:x,dateKey:jn(C,f,x),isCurrentMonth:!1,dayOfWeekIndex:h.length})}for(let d=1;d<=s;d++)h.push({year:gt,month:st,day:d,dateKey:jn(gt,st,d),isCurrentMonth:!0,dayOfWeekIndex:h.length}),h.length===7&&(p.push(h),h=[]);if(h.length>0){let d=1;const x=st===11?0:st+1,f=st===11?gt+1:gt;for(;h.length<7;)h.push({year:f,month:x,day:d,dateKey:jn(f,x,d),isCurrentMonth:!1,dayOfWeekIndex:h.length}),d++;p.push(h)}return p},[gt,st]),go=s=>{var i;return((i=s[0])==null?void 0:i.dateKey)===ut},Ur=(s,i,u)=>{const m=et[s];if(!m)return{who:"",done:!1,kidsDone:{}};const p=m[i]||(u?m[u]:null)||(u?m[u.toLowerCase()]:null);return p?{who:p.who!==void 0&&p.who!==null?String(p.who):"",done:!!p.done,kidsDone:p.kidsDone||{}}:{who:"",done:!1,kidsDone:{}}},Ps=s=>{const i=Tt(s);if(!i)return ve;const u=ao(i.year,i.month,i.day),m=u.isFullStay||u.isDepartureDay;return ve.filter(p=>{const h=Ae(p);return h&&h.type==="biweekly"?m:!0})},On=(s,i,u)=>{const p=Ur(s,i).kidsDone||{},h=!p[u],d={...p,[u]:h},x=Ps(s),f=x.length>0&&x.every(C=>d[C]);Vr(s,i,{kidsDone:d,done:f,who:f?"All Kids":"Each Child"})},Pn=(s,i)=>{const u={};fe.forEach(p=>{u[p]=!1});const m=ge.find(p=>{var h;return p.index_===s||i&&String(p.task||((h=p.row)==null?void 0:h[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});return m&&m.row&&((m.row[2]===!0||String(m.row[2]).toLowerCase()==="true")&&(u.Sydney=!0),(m.row[4]===!0||String(m.row[4]).toLowerCase()==="true")&&(u.Cadence=!0),(m.row[6]===!0||String(m.row[6]).toLowerCase()==="true")&&(u.Mason=!0),(m.row[12]===!0||String(m.row[12]).toLowerCase()==="true")&&(u.Koda=!0),(m.row[14]===!0||String(m.row[14]).toLowerCase()==="true")&&(u.Keyanna=!0)),At.forEach(p=>{const h=Ur(p.dateKey,s,i);if(h.kidsDone&&Object.keys(h.kidsDone).forEach(d=>{h.kidsDone[d]&&(u[d]=!0)}),h.who==="All Kids"&&h.done)fe.forEach(d=>{var x;((x=h.kidsDone)==null?void 0:x[d])!==!1&&(u[d]=!0)});else if(h.who&&h.done){const d=h.who.split(/[,&]+/).map(x=>x.trim().toLowerCase());fe.forEach(x=>{d.includes(x.toLowerCase())&&(u[x]=!0)})}}),u},Kn=(s,i,u)=>{const m=Pn(s,u),p=!m[i],h={...m,[i]:p},d=fe.filter(T=>h[T]).length,x=d===fe.length&&fe.length>0,f=d>0;let C="Each Child";if(x)C="All Kids";else if(f){const T=fe.filter(b=>h[b]);C=T.length<=2?T.join(" & "):`${T.length} Kids`}mt(T=>{const b={...T};return At.forEach(N=>{const W=b[N.dateKey]||{},z=W[s]||{who:"",done:!1,kidsDone:{}};b[N.dateKey]={...W,[s]:{...z,who:C,done:f,kidsDone:h}},u&&(b[N.dateKey][u]=b[N.dateKey][s],b[N.dateKey][u.toLowerCase()]=b[N.dateKey][s])}),b});const D=Ie(u,s);if(Ce>=0&&D!==void 0&&D!==null){const T=new Array(15).fill(void 0),b=i.toLowerCase();b==="sydney"?T[2]=p:b==="koda"?T[12]=p:b==="keyanna"?T[14]=p:b==="cadence"?T[4]=p:b==="mason"&&(T[6]=p),_(Ce,D,T)}},xn=(s,i)=>{let u="",m=!1;const p=ge.find(h=>{var d;return h.index_===s||i&&String(h.task||((d=h.row)==null?void 0:d[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});if(p&&p.row){const h=x=>{if(!x)return!1;const f=String(x).trim();return!(!f||f.startsWith("-")||f.startsWith("(")||f.startsWith("SG:")||f.startsWith("Done:")||f.startsWith("Parent Initials")||f.startsWith("___")||/^Who:\s*_+$/i.test(f))},d=String(i||p.task||"").toLowerCase();if(d.includes("basement")||d.includes("feeding station")||d.includes("deep clean")||d.includes("sign-off")||d.includes("curbside")||d.includes("recycling")||d.includes("waste")){(p.row[14]===!0||String(p.row[14]).toLowerCase()==="true")&&(m=!0);const x=String(p.row[9]||"").replace(/^Who:\s*/i,"").trim(),f=String(p.row[1]||"").trim(),C=h(x)?x:h(f)?f:"";if(C){const D=g.find(T=>C.toLowerCase().includes(T.name.toLowerCase()));D?u=D.name:C.toLowerCase().includes("parents")?u="Parents":u=C}}for(let x=6;x>=0;x--){const f=p.row[1+x*2],C=p.row[2+x*2];h(f)&&!u&&(u=String(f).replace(/^Who:\s*/i,"").trim()),(C===!0||String(C).toLowerCase()==="true")&&!m&&(m=!0)}}if(At&&At.length>0)for(let h=At.length-1;h>=0;h--){const d=At[h],x=Ur(d.dateKey,s,i);x.who&&!u&&(u=x.who),x.done&&(m=!0)}return!Gr&&(u==="Cadence"||u==="Mason")&&(u=""),{who:u,done:m}},Ks=(s,i,u)=>{const m=xn(s,i),p="who"in u?u.who:m.who,h="done"in u?u.done:m.done,d=String(i||"").toLowerCase(),x=ct(i),f=d.includes("recycling")||d.includes("waste")||d.includes("curbside")?3:d.includes("basement")||d.includes("saturday")?5:6;mt(T=>{const b={...T};return At.forEach(N=>{const W=b[N.dateKey]||{},F={...W[s]||{who:"",done:!1,kidsDone:{}},who:p,done:h};b[N.dateKey]={...W,[s]:F},i&&(b[N.dateKey][i]=F,b[N.dateKey][i.toLowerCase().trim()]=F),x&&(b[N.dateKey][x]=F)}),b}),re(T=>{const b=T[s]||{},N=ge.find(ne=>ne.index_===s),W=[...b.row||(N==null?void 0:N.row)||new Array(15).fill("")],z=1+f*2,F=2+f*2;"who"in u&&(W[z]=p),"done"in u&&(W[F]=h);const R=String(i||(N==null?void 0:N.task)||"").toLowerCase().trim(),Z={...b,row:W,rotationGroup:p,who:p};return{...T,[s]:Z,...R?{[R]:Z}:{},...x?{[x]:Z}:{}}});const C=ce(i);if(Ce>=0&&C){const T=C.index_,b=new Array(15).fill(void 0);if(x==="clean_basement"||x==="feeding_station_deep_clean"||x==="curbside_recycling"||x==="curbside_waste")"who"in u&&(b[9]=p?`Who: ${p}`:"Who: _____________________"),"done"in u&&(b[14]=h);else if(x==="weekly_sign_off")"who"in u&&(b[9]=p),"done"in u&&(b[14]=h);else{const N=1+f*2,W=2+f*2;"who"in u&&(b[N]=p),"done"in u&&(b[W]=h)}_(Ce,T,b)}const D=Q(i,s);if(ue>=0&&"who"in u&&D!==void 0&&D!==null){const T=new Array(12).fill(void 0);T[7]=p,_(ue,D,T)}De(`Updated "${i||"Chore"}": Assigned to ${p||"unassigned"}`),setTimeout(()=>De(null),3e3)},mr=L.useMemo(()=>ge.find(s=>{var i;return Dn(s.task||((i=s.row)==null?void 0:i[0]))})||{index_:12,task:"Weekly Sign-Off & Inspection",rotationGroup:"Parents",category:"Administration"},[ge]),zo=L.useMemo(()=>xn(mr==null?void 0:mr.index_,mr==null?void 0:mr.task),[mr,et,At]),Go=()=>{if(!mr)return;const s=xn(mr.index_,mr.task),i=!s.done,u=s.who||"Parents";Ks(mr.index_,mr.task,{done:i,who:u}),De(i?"Weekly Sign-Off & Inspection completed and verified for the week!":"Weekly Sign-Off reset to pending."),setTimeout(()=>De(null),3500)},Vr=(s,i,u)=>{var m;const p=ge.find(f=>f.index_===i),h=(p==null?void 0:p.task)||"",d=Ne(h);mt(f=>{const C=f[s]||{},T={...C[i]||(d?C[d]:null)||{who:"",done:!1},...u},b={...C,[i]:T};return h&&(b[h]=T),d&&(b[d]=T),{...f,[s]:b}});const x=ce(h,i);if(Ce>=0&&x){const f=Tt(ut),C=Tt(s);if(f&&C){const D=new Date(f.year,f.month,f.day),b=new Date(C.year,C.month,C.day).getTime()-D.getTime(),N=Math.round(b/(1e3*3600*24));if(N>=0&&N<7){const W=1+N*2,z=2+N*2,F=new Array(15).fill(void 0);F[0]=h||((m=x.row)==null?void 0:m[0]),"who"in u&&(F[W]=u.who),"done"in u&&(F[z]=u.done),_(Ce,x.index_,F)}}}},Bs=(s,i,u,m,p)=>{var h,d,x;const f=u==="who"?1+i*2:2+i*2,C=Tt(ut)||{year:2026,month:9,day:12},D=new Date(C.year,C.month,C.day+i,12,0,0),T=jn(D.getFullYear(),D.getMonth(),D.getDate()),b=p||((h=ge.find(F=>F.index_===s))==null?void 0:h.task)||"",N=ct(b);mt(F=>{const R=F[T]||{},ne={...R[s]||(b?R[b]:null)||(N?R[N]:null)||{who:"",done:!1,kidsDone:{}},[u]:m},Ee={...R,[s]:ne};return b&&(Ee[b]=ne,Ee[b.toLowerCase().trim()]=ne),N&&(Ee[N]=ne),{...F,[T]:Ee}}),re(F=>{const R=F[s]||(b?F[b.toLowerCase().trim()]:null)||(N?F[N]:null)||{},Z=ge.find(at=>{var wt;return at.index_===s||b&&String(at.task||((wt=at.row)==null?void 0:wt[0])||"").toLowerCase().trim()===b.toLowerCase().trim()}),ne=[...R.row||(Z==null?void 0:Z.row)||new Array(15).fill("")];ne[f]=m;const Ee={...R,row:ne,...u==="who"?{who:m}:{done:m}},$e={...F,[s]:Ee};return b&&($e[b.toLowerCase().trim()]=Ee),N&&($e[N]=Ee),$e});const W=ce(b,s);if(Ce>=0&&W){const F=new Array(15).fill(void 0);F[f]=m,_(Ce,W.index_,F)}const z=Oe(b,s);if(ue>=0&&u==="who"&&z){const F=new Array(12).fill(void 0);F[7]=m,_(ue,z.index_,F)}De(u==="who"?`Assigned "${b||"Chore"}" (${(d=Gt[i])==null?void 0:d.name}) to ${m||"unassigned"}`:`Marked "${b||"Chore"}" (${(x=Gt[i])==null?void 0:x.name}) as ${m?"completed ✓":"pending"}`),setTimeout(()=>De(null),3e3)},Dr=s=>{var i;if(!s||s.length===0)return;const u=s[0];if(!u)return;const m=u.dateKey;sn(m),Tn(u.year),Wr(u.month);const p=s.length===7?s:vs(u.year,u.month,u.day);if(mt(h=>{const d={...h};for(let x=0;x<7;x++){const f=p[x];f&&(d[f.dateKey]||(d[f.dateKey]={}),ge.forEach(C=>{var D,T,b;if(!d[f.dateKey][C.index_]){const N=1+x*2,W=2+x*2,z=(D=C.row)==null?void 0:D[N],F=z!=null?String(z):"",R=((T=C.row)==null?void 0:T[W])===!0||String((b=C.row)==null?void 0:b[W]).toLowerCase()==="true";d[f.dateKey][C.index_]={who:F,done:R,kidsDone:{}}}}))}return d}),Ce>=0&&ge.forEach(h=>{var d;const x=new Array(15).fill(void 0);let f=!1;for(let C=0;C<7;C++){const D=p[C];if(D&&((d=et[D.dateKey])!=null&&d[h.index_])){const T=et[D.dateKey][h.index_];x[1+C*2]=T.who||"",x[2+C*2]=!!T.done,f=!0}}f&&_(Ce,h.index_,x)}),ue>=0){const h=(i=He==null?void 0:He.data)==null?void 0:i.find(d=>d.row&&String(d.row[6]||"").toLowerCase().includes("active week"));if(h){const d=new Array(9).fill(void 0);d[7]=m,_(ue,h.index_,d)}}De(`Synced active week to ${m} (${p[0].dateKey} – ${p[6].dateKey})`),setTimeout(()=>De(null),3500)},wo=s=>{var i,u,m,p,h;const{task:d,category:x="Household",frequency:f="Daily",targetDay:C="Mon – Sun",rotationGroup:D="All Non-Casual",notes:T=""}=s;if(!d||!d.trim())return;const b=d.trim(),N=Ne(b),W=f.toLowerCase().includes("daily"),z=ce(b);if(z&&Ce>=0){const ye=new Array(15).fill(void 0);ye[0]=b,D&&(ye[1]=D==="Each Child"?"Each Child":D),_(Ce,z.index_,ye)}else if(Ce>=0){const ye=[b,D==="Each Child"?"Each Child":D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];let Me;if(W){const Ke=(i=J.data)==null?void 0:i.find(tt=>tt.index_>=4&&tt.row&&(Ne(tt.row[0]).includes("clean basement")||Ne(tt.row[0]).includes("once a week")));Me=Ke?Ke.index_:void 0}else{const Ke=(u=J.data)==null?void 0:u.find(tt=>tt.index_>=8&&tt.row&&(String(tt.row[0]||"").toLowerCase().includes("pet care")||String(tt.row[0]||"").startsWith("•")));Me=Ke?Ke.index_:void 0}G(Ce,Me,ye)}const F=Oe(b),R=new Array(12).fill(void 0);if(R[6]=b,R[7]=D||"All Non-Casual",R[8]=f,R[9]=C,R[10]=T,R[11]=x,F&&ue>=0)_(ue,F.index_,R),(m=He.data)==null||m.forEach(ye=>{if(ye.index_!==F.index_&&ye.row&&Ne(ye.row[6])===N)if(ye.row[0]){const Me=new Array(12).fill(void 0);Me[6]="",Me[7]="",Me[8]="",Me[9]="",Me[10]="",Me[11]="",_(ue,ye.index_,Me)}else v(ue,ye.index_)});else if(ue>=0){const ye=(p=He.data)==null?void 0:p.find(Me=>Me.index_>=5&&Me.index_<17&&(!Me.row||!Me.row[6]||String(Me.row[6]).trim()===""));if(ye)_(ue,ye.index_,R);else{const Me=(h=He.data)==null?void 0:h.find(tt=>tt.row&&String(tt.row[6]||"").toLowerCase().includes("schedule configuration")),Ke=Me?Me.index_:void 0;G(ue,Ke,R)}}const Z=f.toLowerCase(),ne=C.toLowerCase(),Ee=Z.includes("bi-weekly")||Z.includes("biweekly")?"biweekly":Z.includes("weekly")||Z.includes("once")?"weekly":"daily",$e=ne.includes("sunday")?6:ne.includes("thursday")?3:5,wt={index_:z?z.index_:F?F.index_:2e3+Date.now()%1e5,task:b,category:x,frequency:f,targetDay:C,rotationGroup:D||"All Non-Casual",notes:T,source:"user_added",row:[b,D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1]};!F&&!z&&(oe(ye=>[...ye,wt]),Re(ye=>[...ye,wt])),O(ye=>{const Me=new Set(ye);return Me.delete(N),Me.delete(b.toLowerCase().trim()),Me}),Se(ye=>ye?[...ye,Ne(b)]:null),pr(ye=>({...ye,[b]:{frequency:Ee,dayOfWeek:$e}})),xo(!1),En(!1),Or(!1),qt({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",rotationGroup:"All Non-Casual",notes:""}),De(`Added "${b}" to schedule and master registry!`),setTimeout(()=>De(null),3500)},bo=(s,i={})=>{var u;if(!s||!s.trim())return;const m=s.trim(),p=i.defaultWho||"All Non-Casual",h=i.frequency||"daily",d=i.dayOfWeek!==void 0?i.dayOfWeek:5,x=h==="weekly"?"Once a Week":h==="biweekly"?"Bi-Weekly":"Daily",f=h==="weekly"?(u=Gt[d])==null?void 0:u.name:h==="biweekly"?"Thursday Evening":"Mon – Sun",C=i.category||"Household";wo({task:m,category:C,frequency:x,targetDay:f,rotationGroup:p,notes:i.notes||""})},Ta=(s,i)=>{var u,m;const p=(u=me.data)==null?void 0:u.find(f=>f.index_===s),h=i.oldTask||((m=p==null?void 0:p.row)==null?void 0:m[6])||i.task,d=Q(h,s);if(ue>=0&&d!==void 0&&d!==null){const f=new Array(12).fill(void 0);f[6]=i.task||h||"","rotationGroup"in i&&(f[7]=i.rotationGroup),"frequency"in i&&(f[8]=i.frequency),"targetDay"in i&&(f[9]=i.targetDay),"notes"in i&&(f[10]=i.notes),"category"in i&&(f[11]=i.category),_(ue,d,f)}if(oe(f=>f.map(C=>C.index_===s||Ne(C.task)===Ne(h)?{...C,...i,task:i.task||C.task}:C)),i.task&&h&&Ne(i.task)!==Ne(h)){const f=Ne(h),C=Ne(i.task);Se(D=>D?D.map(T=>T===f?C:T):null)}const x=Ie(h);if(Ce>=0&&"task"in i&&x!==void 0&&x!==null){const f=new Array(15).fill(void 0);f[0]=i.task,_(Ce,x,f)}if(i.frequency||i.targetDay){const f=i.task||h||"";if(f){const C=String(i.frequency||"").toLowerCase(),D=String(i.targetDay||"").toLowerCase(),T=C.includes("bi-weekly")||C.includes("biweekly")?"biweekly":C.includes("weekly")||C.includes("once")?"weekly":"daily",b=D.includes("sunday")?6:D.includes("thursday")?3:D.includes("friday")?4:5;pr(N=>({...N,[f]:{frequency:T,dayOfWeek:b}}))}}Sr(null),Rt(null),De(`Updated "${i.task||h||"chore"}" in schedule and master registry!`),setTimeout(()=>De(null),3e3)},Uo=(s,i)=>{var u;const m=Ne(i);ue>=0&&((u=He.data)==null||u.forEach(d=>{if(!(d.index_<5||!d.row||!d.row[6])&&(Ne(d.row[6])===m||d.index_===s))if(d.row[0]){const x=new Array(12).fill(void 0);x[6]="",x[7]="",x[8]="",x[9]="",x[10]="",x[11]="",_(ue,d.index_,x)}else v(ue,d.index_)}));const p=ce(i);Ce>=0&&p&&v(Ce,p.index_);const h=String(i||"").toLowerCase().trim();oe(d=>d.filter(x=>x.index_!==s&&(!h||x.task.toLowerCase().trim()!==h))),O(d=>{const x=new Set(d);return s!=null&&x.add(String(s)),h&&x.add(h),x}),mt(d=>{const x={...d};return Object.keys(x).forEach(f=>{if(x[f]&&x[f][s]){const C={...x[f]};delete C[s],x[f]=C}}),x}),Is===s&&(Sr(null),Rt(null)),De(`Removed "${i||"chore"}" from Household Hub Master Chore Registry`),setTimeout(()=>De(null),3e3)},_o=(s,i)=>{var u,m;const p=(i.task||"").trim();if(!p)return;const h=i.oldTask||p;re(D=>{const T={...D};return T[s]={...i,task:p},h&&(T[String(h).toLowerCase().trim()]={...i,task:p}),T[p.toLowerCase().trim()]={...i,task:p},T});const d=i.frequency==="Once a Week"?"weekly":i.frequency==="Bi-Weekly"?"biweekly":"daily",x=i.dayOfWeek!==void 0?i.dayOfWeek:(u=i.targetDay)!=null&&u.toLowerCase().includes("sunday")?6:(m=i.targetDay)!=null&&m.toLowerCase().includes("thursday")?3:5;if(pr(D=>({...D,[p]:{frequency:d,dayOfWeek:x},[s]:{frequency:d,dayOfWeek:x}})),i.task&&h&&Ne(i.task)!==Ne(h)){const D=Ne(h),T=Ne(i.task);Se(b=>b?b.map(N=>N===D?T:N):null)}const f=Ie(h);if(Ce>=0&&f!==void 0&&f!==null){const D=new Array(15).fill(void 0);D[0]=p,_(Ce,f,D)}const C=Q(h,s);if(ue>=0&&C!==void 0&&C!==null){const D=new Array(12).fill(void 0);D[6]=p,i.rotationGroup&&(D[7]=i.rotationGroup),i.frequency&&(D[8]=i.frequency),i.targetDay&&(D[9]=i.targetDay),i.notes!==void 0&&(D[10]=i.notes),i.category&&(D[11]=i.category),_(ue,C,D)}h&&h!==p&&mt(D=>{const T={...D};return Object.keys(T).forEach(b=>{if(T[b]&&T[b][h]){const N={...T[b]};N[p]=N[h],N[p.toLowerCase()]=N[h],T[b]=N}}),T}),Te(null),De(`Updated chore: "${p}"`),setTimeout(()=>De(null),3e3)},vo=(s,i)=>{var u,m;const p=i||"";O(x=>{const f=new Set(x);return s!=null&&f.add(String(s)),p&&f.add(p.toLowerCase().trim()),f});const h=Ie(p,s);Ce>=0&&h!==void 0&&h!==null&&v(Ce,h);const d=Q(p,s);if(ue>=0&&d!==void 0&&d!==null){const x=(u=He.data)==null?void 0:u.find(f=>f.index_===d);if((m=x==null?void 0:x.row)!=null&&m[0]){const f=new Array(12).fill(void 0);f[6]="",f[7]="",f[8]="",f[9]="",f[10]="",f[11]="",_(ue,d,f)}else v(ue,d)}mt(x=>{const f={...x};return Object.keys(f).forEach(C=>{if(f[C]){const D={...f[C]};s!==void 0&&delete D[s],p&&(delete D[p],delete D[p.toLowerCase().trim()]),f[C]=D}}),f}),nt(null),Y&&Y.index_===s&&Te(null),De(`Removed chore: "${p||"Chore"}" from schedule`),setTimeout(()=>De(null),3e3)},Ft=(s,i)=>{vo(s,i)},fn=()=>{if(rr.length===0)return;const s=rr.length;rr.forEach(i=>{var u;const m=ge.find(p=>p.index_===i);vo(i,(m==null?void 0:m.task)||((u=m==null?void 0:m.row)==null?void 0:u[0])||"")}),ln([]),Or(!1),De(`Successfully removed ${s} chore(s) from master list`),setTimeout(()=>De(null),3500)},qs=s=>{var i,u;const m=s.task||((i=s.row)==null?void 0:i[0])||"",p=Yt(s);kr(s.index_),Oo(m),dn(p.frequency||"daily"),As(p.dayOfWeek!==void 0?p.dayOfWeek:5),Bo(s.rotationGroup||"All Non-Casual"),Te({...s,originalTask:m,task:m,category:s.category||"Household",frequency:p.frequency==="weekly"?"Once a Week":p.frequency==="biweekly"?"Bi-Weekly":"Daily",targetDay:s.targetDay||(p.frequency==="weekly"?(u=Gt[p.dayOfWeek!==void 0?p.dayOfWeek:5])==null?void 0:u.name:"Mon – Sun"),rotationGroup:s.rotationGroup||"All Non-Casual",notes:s.notes||"",dayOfWeek:p.dayOfWeek!==void 0?p.dayOfWeek:5})},ko=()=>{var s;if(cr===null)return;const i=uo.trim();i&&_o(cr,{task:i,frequency:ur==="weekly"?"Once a Week":ur==="biweekly"?"Bi-Weekly":"Daily",targetDay:((s=Gt[Po])==null?void 0:s.name)||"Mon – Sun",rotationGroup:Ko,dayOfWeek:Po}),kr(null)},Vo=(s,i)=>{const u=(N,W)=>typeof W=="object"&&W!==null?N===W||Ne(N.task)===Ne(W.task):N.index_===W||String(N.index_)===String(W)||Ne(N.task)===Ne(String(W)),m=typeof s=="object"&&s!==null&&fo.length>0?fo:xe,p=m.findIndex(N=>u(N,s));if(p===-1)return;const h=i==="up"?p-1:p+1;if(h<0||h>=m.length)return;const d=m[p],x=m[h],f=[...xe],C=f.findIndex(N=>u(N,d)),D=f.findIndex(N=>u(N,x));if(C===-1||D===-1)return;const T=d.task||"Chore";f[C]=x,f[D]=d;const b=f.map(N=>Ne(N.task));if(Se(b),Ce>=0){const N=ce(d.task),W=ce(x.task),z=(J==null?void 0:J.data)==null?void 0:J.data.find(Z=>Z.row&&String(Z.row[0]||"").toLowerCase().trim()==="weekly tasks"),F=z?z.index_:10,R=N&&W&&(N.index_<F&&W.index_<F||N.index_>F&&W.index_>F);if(N&&W&&N.index_!==W.index_&&R){const Z=[...N.row||[]],ne=[...W.row||[]];_(Ce,N.index_,ne),_(Ce,W.index_,Z)}}if(ue>=0){const N=Oe(d.task),W=Oe(x.task);if(N&&W&&N.index_!==W.index_){const z=N.row||[],F=W.row||[],R=new Array(12).fill(void 0),Z=new Array(12).fill(void 0);for(let ne=6;ne<=11;ne++)R[ne]=F[ne]!==void 0?F[ne]:"",Z[ne]=z[ne]!==void 0?z[ne]:"";_(ue,N.index_,R),_(ue,W.index_,Z)}}De(`Reordered: Moved "${T}" ${i}! Synchronized with Printable Weekly Schedule and Household Hub.`),setTimeout(()=>De(null),3e3)},$s=(s,i,u)=>{var m,p,h,d,x,f;const C=ge.find(b=>b.index_===s),D=ge.find(b=>b.index_===i);if(!C||!D||s===i)return;const T=(u==null?void 0:u.trim())||`${C.row[1]} & ${D.row[1]}`;if(ke>=0){const b=new Array(16).fill(void 0);b[1]=T;for(let N=0;N<7;N++){const W=2+N*2,z=3+N*2,F=((m=C.row)==null?void 0:m[W])||"",R=((p=D.row)==null?void 0:p[W])||"",Z=((h=C.row)==null?void 0:h[z])===!0||String((d=C.row)==null?void 0:d[z]).toLowerCase()==="true",ne=((x=D.row)==null?void 0:x[z])===!0||String((f=D.row)==null?void 0:f[z]).toLowerCase()==="true";b[W]=F||R||"",b[z]=Z||ne}_(ke,C.index_,b),v(ke,D.index_)}mt(b=>{const N={...b};return Object.keys(N).forEach(W=>{const z={...N[W]},F=z[C.index_]||{who:"",done:!1},R=z[D.index_]||{who:"",done:!1};z[C.index_]={who:F.who||R.who||"",done:F.done||R.done},delete z[D.index_],N[W]=z}),N}),ho(!1),De(`Combined into: "${T}"`),setTimeout(()=>De(null),4e3)},Hs=(s,i)=>{const u=s||[],m=i||[];if(u.length===0&&m.length===0)return;const p={...et};let h=0;Wn.forEach(d=>{d.forEach(x=>{if(!x.isCurrentMonth)return;const f=x.dateKey;p[f]||(p[f]={});const C=ao(x.year,x.month,x.day),D=C.isFullStay||C.isDepartureDay,T=[...u];if(D&&T.push(...m),T.length===0)return;const b=ge.filter(R=>{var Z;const ne=R.task||((Z=R.row)==null?void 0:Z[0])||"",Ee=ne.toLowerCase(),$e=Yt(R);return Ee.includes("deep clean")||Ee.includes("feeding station")?x.dayOfWeekIndex===6:Ee.includes("recycling")?x.dayOfWeekIndex===3&&Et("recycling",x.year,x.month,x.day):Ee.includes("waste")?x.dayOfWeekIndex===3&&Et("waste",x.year,x.month,x.day):$e.frequency==="biweekly"?x.dayOfWeekIndex===$e.dayOfWeek&&Et(ne,x.year,x.month,x.day):$e.frequency==="weekly"?x.dayOfWeekIndex===$e.dayOfWeek:!0}),N=T.filter(R=>{const Z=Ae(R);return Z&&Z.type!=="casual"}),W=N.length>0?N:T,z=W.filter(R=>{const Z=Ae(R),ne=String((Z==null?void 0:Z.role)||"").toLowerCase();return!ne.includes("parent")&&!ne.includes("overseer")});let F=0;b.forEach(R=>{var Z;const ne=p[f][R.index_]||{done:!1,kidsDone:{}},Ee=R.task||((Z=R.row)==null?void 0:Z[0])||"",$e=String(R.rotationGroup||"").toLowerCase(),at=Ee.toLowerCase();if(nn(Ee)){p[f][R.index_]={who:D?"Each Child":"Sydney",done:ne.done,kidsDone:ne.kidsDone||{}};return}if(x.dayOfWeekIndex===6&&at.includes("supper")){const ye=g.filter(tt=>tt.role==="Overseer Supreme"||String(tt.role||"").toLowerCase().includes("parent")).map(tt=>tt.name),Me=ye.length>0?ye:["Thom","Meghan"],Ke=Bu(x.year,x.month,x.day,Me);p[f][R.index_]={who:Ke,done:ne.done,kidsDone:ne.kidsDone||{}};return}if($e==="parents"||$e.includes("parent")&&!$e.includes("kid")&&!$e.includes("non-casual")&&!$e.includes("all")){const ye=g.filter(Ke=>Ke.role==="Overseer Supreme"||String(Ke.role||"").toLowerCase().includes("parent")).map(Ke=>Ke.name),Me=ye.length>0?ye[(h+F)%ye.length]:"Thom";F++,p[f][R.index_]={who:Me,done:ne.done,kidsDone:ne.kidsDone||{}};return}if($e==="kids"&&z.length>0){const ye=z[(h+F)%z.length];F++,p[f][R.index_]={who:ye,done:ne.done,kidsDone:ne.kidsDone||{}};return}const wt=W[(h+F)%W.length];F++,p[f][R.index_]={who:wt,done:ne.done,kidsDone:ne.kidsDone||{}}}),h=(h+1)%T.length})}),mt(p),Ce>=0&&Wn.forEach(d=>{go(d)&&ge.forEach(x=>{var f;const C=new Array(15).fill(void 0);let D=!1;for(let T=0;T<7;T++){const b=d[T];if(b&&((f=p[b.dateKey])!=null&&f[x.index_])){const N=1+T*2;C[N]=p[b.dateKey][x.index_].who||"",D=!0}}D&&_(Ce,x.index_,C)})}),co(!1),De(`Auto-assigned & populated Printable Weekly Schedule for ${Qr[st]} ${gt}!`),setTimeout(()=>De(null),4500)},jr=(s,i)=>{var u,m;const p=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,h=(u=me.data)==null?void 0:u.find(x=>x.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"role"in i&&(d[1]=i.role),"residency"in i&&(d[2]=i.residency),"specialGroups"in i?d[3]=i.specialGroups:"schedule"in i&&(d[3]=i.schedule),"active"in i&&(d[4]=i.active),_(p,s,d),De(`Updated "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"member"}" in Household Hub!`),setTimeout(()=>De(null),3e3)},Yo=(s,i,u,m,p=!0)=>{var h;if(!s||!s.trim())return;const d=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,x=s.trim(),f=i?i.trim():"Minion",C=u||"Full-Time",T=m?m.trim():C==="Casual"?"All":f==="Supreme Overlord"?"Parents, Non-Casual, All":"Kids, Non-Casual, All",b=(h=me.data)==null?void 0:h.find(N=>N.index_<5||N.index_>12?!1:!N.row||!N.row[0]||!String(N.row[0]).trim());if(b){const N=new Array(12).fill(void 0);N[0]=x,N[1]=f,N[2]=C,N[3]=T,N[4]=p,N[5]="MEMBER_ROW",_(d,b.index_,N)}else G(d,void 0,[x,f,C,T,p,"MEMBER_ROW",null,null,null,null,null,null]);Pr(!1),De(`Added "${x}" to Household Hub!`),setTimeout(()=>De(null),3e3)},Ea=(s,i)=>{var u,m;const p=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,h=(u=me.data)==null?void 0:u.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);De(`Removed "${i}" from Household Hub`),setTimeout(()=>De(null),3e3)},zs=(s,i)=>{var u,m;const p=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,h=(u=me.data)==null?void 0:u.find(x=>x.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"type"in i&&(d[1]=i.type),"routine"in i&&(d[2]=i.routine),"care"in i&&(d[3]=i.care),"active"in i&&(d[4]=i.active),_(p,s,d),De(`Updated pet "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"profile"}" in Household Hub!`),setTimeout(()=>De(null),3e3)},Ml=(s,i,u,m,p=!0)=>{if(!s||!s.trim())return;const h=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,d=s.trim(),x=i||"Dog";G(h,void 0,[d,x,u||"Morning & Evening",m||(x==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water"),p,"PET_ROW",void 0,void 0,void 0,void 0,void 0,void 0]),$r(!1),Hr({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),De(`Added pet "${d}" to Household Hub!`),setTimeout(()=>De(null),3e3)},Rl=(s,i)=>{var u,m;const p=ue>=0?ue:(w==null?void 0:w.length)>1?1:0,h=(u=me.data)==null?void 0:u.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);De(`Removed pet "${i}" from Household Hub`),setTimeout(()=>De(null),3e3)},or=L.useMemo(()=>{let s=0,i=0;const u={};g.forEach(p=>{u[p.name]={total:0,done:0}}),Wn.forEach(p=>{p.forEach(h=>{h.isCurrentMonth&&ge.forEach(d=>{var x,f;const C=d.task||((x=d.row)==null?void 0:x[0])||"",D=C.toLowerCase(),T=Yt(d);let b=!1;D.includes("deep clean")||D.includes("feeding station")?b=h.dayOfWeekIndex===6:D.includes("recycling")?b=h.dayOfWeekIndex===3&&Et("recycling",h.year,h.month,h.day):D.includes("waste")?b=h.dayOfWeekIndex===3&&Et("waste",h.year,h.month,h.day):T.frequency==="daily"?b=!0:T.frequency==="weekly"?b=h.dayOfWeekIndex===T.dayOfWeek:T.frequency==="biweekly"&&(b=h.dayOfWeekIndex===T.dayOfWeek&&Et(C,h.year,h.month,h.day));const N=Ur(h.dateKey,d.index_,d.task||((f=d.row)==null?void 0:f[0])),W=(N==null?void 0:N.done)||(N==null?void 0:N.who);if(!b&&!W)return;s++;const z=N==null?void 0:N.done,F=N==null?void 0:N.who;if(z&&i++,F){const R=Ae(F);R&&u[R.name]&&(u[R.name].total++,z&&u[R.name].done++)}})})});const m=s>0?Math.round(i/s*100):0;return{totalScheduled:s,totalCompleted:i,completionRate:m,assigneeCounts:u}},[Wn,ge,et,g,Ae]),Bn=L.useMemo(()=>[...g].map(s=>{const i=or.assigneeCounts[s.name]||{total:0,done:0},u=i.total>0?Math.round(i.done/i.total*100):0;return{...s,done:i.done,total:i.total,pct:u}}).sort((s,i)=>i.done!==s.done?i.done-s.done:i.pct-s.pct),[g,or]),Yr=L.useMemo(()=>Bn.length===0||Bn[0].done===0?null:Bn[0],[Bn]),Ll=()=>{st===0?(Wr(11),Tn(s=>s-1)):Wr(s=>s-1)},Fl=()=>{st===11?(Wr(0),Tn(s=>s+1)):Wr(s=>s+1)},Il=()=>{const s=bs();Tn(s.todayYear),Wr(s.todayMonth),sn(s.dateKey)};L.useEffect(()=>{if(Kt==="month"){const s=bs();Tn(s.todayYear),Wr(s.todayMonth),sn(s.dateKey),setTimeout(()=>{const i=document.getElementById("active-calendar-week");i&&i.scrollIntoView({behavior:"smooth",block:"center"})},50)}},[Kt]);const Qr=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans","data-source-loc":"weekly_chores_household_hub.tsx:4578:5","data-source-comp":"App",children:[Es&&n.jsxs("div",{className:"no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all","data-source-loc":"weekly_chores_household_hub.tsx:4580:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4581:11","data-source-comp":"App",children:[n.jsx(Su,{className:"w-4 h-4 text-emerald-200"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4583:13","data-source-comp":"App",children:Es})]}),n.jsx("button",{onClick:()=>De(null),className:"text-emerald-100 hover:text-white","data-source-loc":"weekly_chores_household_hub.tsx:4585:11","data-source-comp":"App",children:n.jsx(zt,{className:"w-4 h-4"})})]}),n.jsxs("header",{className:"no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30","data-source-loc":"weekly_chores_household_hub.tsx:4590:7","data-source-comp":"App",children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4591:9","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4592:11","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:4593:13","data-source-comp":"App",children:n.jsx(Cu,{className:"w-5 h-5"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4596:13","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4597:15","data-source-comp":"App",children:[n.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4598:17","data-source-comp":"App",children:"Chore Schedule"}),n.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4599:17","data-source-comp":"App",children:"Monthly Template & Sync"})]}),n.jsxs("p",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4603:15","data-source-comp":"App",children:["Interactive Chore Calendar w/ Printable Sheet • Week of ",ut]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:4609:11","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4610:13","data-source-comp":"App",children:[n.jsx("button",{onClick:Ll,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Previous Month","data-source-loc":"weekly_chores_household_hub.tsx:4611:15","data-source-comp":"App",children:n.jsx(Nu,{className:"w-4 h-4"})}),n.jsxs("div",{className:"px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none","data-source-loc":"weekly_chores_household_hub.tsx:4618:15","data-source-comp":"App",children:[Qr[st]," ",gt]}),n.jsx("button",{onClick:Fl,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Next Month","data-source-loc":"weekly_chores_household_hub.tsx:4621:15","data-source-comp":"App",children:n.jsx(ep,{className:"w-4 h-4"})}),n.jsx("button",{onClick:Il,className:"ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:4628:15","data-source-comp":"App",children:"Today"})]}),n.jsxs("button",{onClick:()=>co(!0),className:"flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:4635:13","data-source-comp":"App",children:[n.jsx(gs,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4640:15","data-source-comp":"App",children:"Auto-Assign"})]})]})]}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm","data-source-loc":"weekly_chores_household_hub.tsx:4644:9","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4645:11","data-source-comp":"App",children:[n.jsxs("button",{onClick:()=>on("month"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Kt==="month"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4646:13","data-source-comp":"App",children:[n.jsx(Zh,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4652:15","data-source-comp":"App",children:"Monthly Calendar"})]}),n.jsxs("button",{onClick:()=>on("matrix"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Kt==="matrix"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4654:13","data-source-comp":"App",children:[n.jsx(np,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4660:15","data-source-comp":"App",children:"Weekly Schedule"})]}),n.jsxs("button",{onClick:()=>on("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Kt==="stats"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4662:13","data-source-comp":"App",children:[n.jsx(ku,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4668:15","data-source-comp":"App",children:"Leaderboard & Stats"})]}),n.jsxs("button",{onClick:()=>on("roster"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Kt==="roster"?"bg-indigo-600 text-white shadow-sm":"text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4670:13","data-source-comp":"App",children:[n.jsx(fa,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4678:15","data-source-comp":"App",children:["Household Hub (",g.length,")"]})]})]})})]}),n.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6","data-source-loc":"weekly_chores_household_hub.tsx:4683:7","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4683:68","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4683:178","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4683:229","data-source-comp":"App",children:[n.jsx(fa,{className:"w-4 h-4 text-indigo-600 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4683:365","data-source-comp":"App",children:"Household Roster:"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4683:401","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4683:454","data-source-comp":"App",children:"Supreme Overlords:"}),g.filter(s=>s.active!==!1&&(s.role==="Supreme Overlord"||s.role==="Overseer Supreme")).map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300",style:{backgroundColor:s.bg,color:s.text},title:"Supreme Overlord (= Parent \\u2022 Included in Daily Chores)","data-source-loc":"weekly_chores_household_hub.tsx:4683:726","data-source-comp":"App",children:s.name},s.id)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4686:95","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:4686:150","data-source-comp":"App",children:"Minions:"}),g.filter(s=>s.active!==!1&&s.role!=="Supreme Overlord"&&s.role!=="Overseer Supreme").map(s=>n.jsx("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.type==="biweekly"?"#F8B4BD":s.type==="casual"?"#A6D2ED":"#E2E8F0"},title:`${s.name} (${s.residency} Minion = Kid)`,"data-source-loc":"weekly_chores_household_hub.tsx:4686:413","data-source-comp":"App",children:s.name},s.id))]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4690:89","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4690:171","data-source-comp":"App",children:[n.jsx("span",{className:"w-4 text-center shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4690:253","data-source-comp":"App",children:"🐾"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4690:316","data-source-comp":"App",children:'"The Herd":'})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4690:352","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4690:405","data-source-comp":"App",children:"Dogs:"}),Le.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("dog")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4690:633","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4694:92","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200","data-source-loc":"weekly_chores_household_hub.tsx:4694:147","data-source-comp":"App",children:"Cats:"}),Le.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4694:378","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),Le.some(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat"))&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4698:221","data-source-comp":"App",children:"•"}),n.jsx("span",{className:"text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200","data-source-loc":"weekly_chores_household_hub.tsx:4698:276","data-source-comp":"App",children:"Other Pets:"}),Le.filter(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat")).map(s=>n.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4698:558","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`))]})]})]})]}),n.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4702:114","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-6","data-source-loc":"weekly_chores_household_hub.tsx:4702:253","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4702:294","data-source-comp":"App",children:[n.jsx("p",{className:"text-xs text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4702:299","data-source-comp":"App",children:"Month Overview"}),n.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4702:367","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xl font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4702:417","data-source-comp":"App",children:[or.totalCompleted," / ",or.totalScheduled]}),n.jsx("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4702:536","data-source-comp":"App",children:"completed"})]})]}),n.jsxs("div",{className:"hidden sm:block w-36","data-source-loc":"weekly_chores_household_hub.tsx:4702:605","data-source-comp":"App",children:[n.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4702:643","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4702:721","data-source-comp":"App",children:"Progress"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4702:742","data-source-comp":"App",children:[or.completionRate,"%"]})]}),n.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4702:789","data-source-comp":"App",children:n.jsx("div",{className:"bg-emerald-500 h-2 rounded-full transition-all duration-500",style:{width:`${or.completionRate}%`},"data-source-loc":"weekly_chores_household_hub.tsx:4702:859","data-source-comp":"App"})})]})]}),n.jsxs("div",{className:"flex items-center gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4704:30","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:4704:79","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4704:191","data-source-comp":"App"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4704:258","data-source-comp":"App",children:["Active Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:4704:281","data-source-comp":"App",children:ut})," • ",(zr==null?void 0:zr.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("button",{onClick:()=>{const s=bs(),i=vs(s.year,s.month,s.day);Dr(i),ja(),on("matrix")},className:"px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition",title:`Sync and distribute chores for current week (${ut})`,"data-source-loc":"weekly_chores_household_hub.tsx:4704:452","data-source-comp":"App",children:"Sync & Distribute Week"})]})]}),Kt==="month"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4710:285","data-source-comp":"App",children:[n.jsx("div",{className:"grid grid-cols-7 gap-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4710:312","data-source-comp":"App",children:Gt.map((s,i)=>n.jsxs("div",{className:"py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:4710:394","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4712:10","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] font-normal opacity-90 hidden sm:inline","data-source-loc":"weekly_chores_household_hub.tsx:4712:33","data-source-comp":"App",children:["Day ",i+1]})]},s.name))}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:4712:141","data-source-comp":"App",children:Wn.map((s,i)=>{const u=go(s),m=s[0].dateKey===io.dateKey;return n.jsxs("div",{id:u?"active-calendar-week":void 0,className:`bg-white rounded-xl border transition-all ${u?"border-rose-400 ring-2 ring-rose-200 shadow-md":"border-slate-200 shadow-sm hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4715:16","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4715:252","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4715:377","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:4715:418","data-source-comp":"App",children:["Week ",i+1]}),n.jsx("span",{className:"text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:4715:494","data-source-comp":"App",children:"•"}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4715:544","data-source-comp":"App",children:[s[0].month+1,"/",s[0].day," – ",s[6].month+1,"/",s[6].day]}),m&&n.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300","data-source-loc":"weekly_chores_household_hub.tsx:4715:688","data-source-comp":"App",children:"Current Week"}),(()=>{const p=Eu(s,qe);return p?n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeBg}`,"data-source-loc":"weekly_chores_household_hub.tsx:4718:18","data-source-comp":"App",children:p.text}):null})(),u?n.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300","data-source-loc":"weekly_chores_household_hub.tsx:4719:24","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-600","data-source-loc":"weekly_chores_household_hub.tsx:4719:173","data-source-comp":"App"}),"Live Synced with Sheet"]}):n.jsx("button",{onClick:()=>Dr(s),className:"text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4719:262","data-source-comp":"App",children:"Set as Sheet Week"})]}),n.jsxs("div",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4719:456","data-source-comp":"App",children:[s.reduce((p,h)=>{const d=ge.filter(x=>{var f,C;return(C=(f=et[h.dateKey])==null?void 0:f[x.index_])==null?void 0:C.done}).length;return p+d},0)," ","chores completed"]})]}),n.jsx("div",{className:"grid grid-cols-7 divide-x divide-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4725:48","data-source-comp":"App",children:s.map((p,h)=>{const{dateKey:d,day:x,isCurrentMonth:f}=p,C=ge.filter(b=>{var N,W,z,F,R,Z,ne,Ee,$e,at,wt,ye,Me,Ke,tt,Xr,xr,fr,Xe,Ma,Co,Ra,Gs;const qn=Yt(b),$n=(b.task||((N=b.row)==null?void 0:N[0])||"").toLowerCase();if($n.includes("deep clean")||$n.includes("feeding station")){const vt=h===6,Tr=((z=(W=et[d])==null?void 0:W[b.index_])==null?void 0:z.done)||((R=(F=et[d])==null?void 0:F[b.index_])==null?void 0:R.who);if(!vt&&!Tr)return!1}else if($n.includes("recycling")){const vt=h===3&&Et("recycling",p.year,p.month,p.day),Tr=((ne=(Z=et[d])==null?void 0:Z[b.index_])==null?void 0:ne.done)||(($e=(Ee=et[d])==null?void 0:Ee[b.index_])==null?void 0:$e.who);if(!vt&&!Tr)return!1}else if($n.includes("waste")){const vt=h===3&&Et("waste",p.year,p.month,p.day),Tr=((wt=(at=et[d])==null?void 0:at[b.index_])==null?void 0:wt.done)||((Me=(ye=et[d])==null?void 0:ye[b.index_])==null?void 0:Me.who);if(!vt&&!Tr)return!1}else if(qn.frequency==="weekly"){const vt=h===qn.dayOfWeek,Tr=((tt=(Ke=et[d])==null?void 0:Ke[b.index_])==null?void 0:tt.done)||((xr=(Xr=et[d])==null?void 0:Xr[b.index_])==null?void 0:xr.who);if(!vt&&!Tr)return!1}else if(qn.frequency==="biweekly"){const vt=h===qn.dayOfWeek&&Et(b.task||((fr=b.row)==null?void 0:fr[0]),p.year,p.month,p.day),Tr=((Ma=(Xe=et[d])==null?void 0:Xe[b.index_])==null?void 0:Ma.done)||((Ra=(Co=et[d])==null?void 0:Co[b.index_])==null?void 0:Ra.who);if(!vt&&!Tr)return!1}if(Ut==="ALL")return!0;const yn=(Gs=et[d])==null?void 0:Gs[b.index_],Jr=String((yn==null?void 0:yn.who)||"").toLowerCase(),gn=g.find(vt=>vt.id===Ut||vt.name===Ut),Us=((gn==null?void 0:gn.name)||Ut).toLowerCase();if(nn(b.row[1]))return ve.some(vt=>vt.toLowerCase()===Us);if(!(yn!=null&&yn.who))return!1;if(Jr===Us||(Jr==="all kids"||Jr==="each child")&&ve.some(vt=>vt.toLowerCase()===Us)||(Jr==="all non-casual"||Jr==="all non casual")&&gn&&gn.type!=="casual"||(Jr==="parents"||Jr==="parents only")&&gn&&String(gn.role||"").toLowerCase().includes("parent"))return!0;const Qo=Ae(yn.who);return yn.who===Ut||(Qo==null?void 0:Qo.id)===Ut||(Qo==null?void 0:Qo.name)===Ut}),D=C.filter(b=>{var N,W;return(W=(N=et[d])==null?void 0:N[b.index_])==null?void 0:W.done}).length,T=C.length>0&&D===C.length;return n.jsxs("div",{className:`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${f?"bg-white":"bg-slate-50/80 border-dashed border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4784:18","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4784:198","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4784:203","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${f?"bg-slate-100 text-slate-800":"bg-slate-200/70 text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4784:261","data-source-comp":"App",children:x}),n.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4784:450","data-source-comp":"App",children:[C.length>0&&n.jsxs("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded ${T?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4784:516","data-source-comp":"App",children:[D,"/",C.length]}),n.jsx("button",{onClick:()=>an(d),className:"p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition",title:"Open day details","data-source-loc":"weekly_chores_household_hub.tsx:4784:703","data-source-comp":"App",children:n.jsx(Wo,{className:"w-2.5 h-2.5"})})]})]}),(()=>{const b=ao(p.year,p.month,p.day);return b.isArrivalDay?n.jsx("div",{className:"text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay","data-source-loc":"weekly_chores_household_hub.tsx:4787:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4787:263","data-source-comp":"App",children:"🏠 Cadence & Mason arrive 5 PM"})}):b.isDepartureDay?n.jsx("div",{className:"text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason depart today at 5:00 PM","data-source-loc":"weekly_chores_household_hub.tsx:4789:22","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4789:241","data-source-comp":"App",children:"👋 Cadence & Mason leave 5 PM"})}):null})(),n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:4792:16","data-source-comp":"App",children:[C.slice(0,3).map(b=>{var N,W;const z=Ur(d,b.index_,b.task||b.row[0]),F=Ae(z.who),R=Yt(b);return n.jsxs("div",{className:`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${z.done?"bg-emerald-50/70 border-emerald-200 text-slate-500":R.frequency==="weekly"?"bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs":"bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4797:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-1 w-full","data-source-loc":"weekly_chores_household_hub.tsx:4797:370","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:4797:434","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Vr(d,b.index_,{done:!z.done}),className:"shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:4797:490","data-source-comp":"App",children:z.done?n.jsx(Au,{className:"w-3.5 h-3.5 text-emerald-600"}):n.jsx(Du,{className:"w-3.5 h-3.5 hover:text-slate-600"})}),n.jsx("span",{className:`truncate text-[10px] font-medium leading-tight ${z.done?"line-through":""}`,"data-source-loc":"weekly_chores_household_hub.tsx:4799:237","data-source-comp":"App",children:b.task||b.row[0]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4799:376","data-source-comp":"App",children:[R.frequency==="weekly"&&n.jsx("span",{className:"text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase",title:"Once-a-week task","data-source-loc":"weekly_chores_household_hub.tsx:4799:458","data-source-comp":"App",children:"1x/wk"}),ir(b.task||b.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold",style:{backgroundColor:((N=Ae(ir(b.task||b.row[0])))==null?void 0:N.bg)||"#FCE7F3",color:((W=Ae(ir(b.task||b.row[0])))==null?void 0:W.text)||"#BE185D"},"data-source-loc":"weekly_chores_household_hub.tsx:4799:643","data-source-comp":"App",children:ir(b.task||b.row[0])}):nn(b.task||b.row[0])?n.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700",title:"Each child cleans own bedroom","data-source-loc":"weekly_chores_household_hub.tsx:4802:111","data-source-comp":"App",children:"Own Rooms"}):z.who?n.jsx("span",{className:"shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold",style:{backgroundColor:(F==null?void 0:F.bg)||"#F1F5F9",color:(F==null?void 0:F.text)||"#475569"},title:String(z.who),"data-source-loc":"weekly_chores_household_hub.tsx:4802:275","data-source-comp":"App",children:String(z.who).slice(0,2)}):n.jsx("button",{onClick:()=>an(d),className:"shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5",title:"Assign person","data-source-loc":"weekly_chores_household_hub.tsx:4805:85","data-source-comp":"App",children:"+"})]})]}),nn(b.task||b.row[0])&&!ir(b.task||b.row[0])&&n.jsx("div",{className:"pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4805:347","data-source-comp":"App",children:Ps(d).map(Z=>{var ne;const Ee=!!((ne=z.kidsDone)!=null&&ne[Z]),$e=Ae(Z);return n.jsxs("button",{type:"button",onClick:at=>{at.stopPropagation(),On(d,b.index_,Z)},className:`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${Ee?"bg-emerald-100 text-emerald-800 border-emerald-300 line-through":"bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`,title:`Click to toggle ${Z}'s room`,"data-source-loc":"weekly_chores_household_hub.tsx:4809:22","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full inline-block",style:{backgroundColor:($e==null?void 0:$e.color)||"#888"},"data-source-loc":"weekly_chores_household_hub.tsx:4812:318","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4814:20","data-source-comp":"App",children:Z}),Ee?"✓":""]},Z)})})]},b.index_)}),C.length>3&&n.jsxs("button",{onClick:()=>an(d),className:"w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4816:39","data-source-comp":"App",children:["+",C.length-3," more"]}),C.length===0&&n.jsx("div",{className:"text-[10px] text-slate-400 italic py-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4816:277","data-source-comp":"App",children:"No chores"})]})]}),n.jsx("button",{onClick:()=>an(d),className:"mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition","data-source-loc":"weekly_chores_household_hub.tsx:4816:373","data-source-comp":"App",children:"Manage Day"})]},d)})})]},i)})})]}),Kt==="matrix"&&n.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4954:50","data-source-comp":"App",children:[n.jsxs("div",{id:"printable-schedule-card",className:"bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4954:77","data-source-comp":"App",children:[n.jsxs("div",{className:"no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4954:193","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4954:311","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4954:316","data-source-comp":"App",children:[n.jsx("h2",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4954:357","data-source-comp":"App",children:"Weekly Schedule"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4954:428","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4954:571","data-source-comp":"App"}),"Active Week: ",ut," • ",(zr==null?void 0:zr.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4954:813","data-source-comp":"App",children:"Single-page Letter Landscape Layout - Printed.pdf"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4954:921","data-source-comp":"App",children:[n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:4954:972","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search schedule chores...",value:Cr,onChange:s=>Ca(s.target.value),className:"pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:4954:1073","data-source-comp":"App"})]}),n.jsx("button",{onClick:()=>{const s=Tt(ut||Pe)||{year:2026,month:9,day:19},i=vs(s.year,s.month,s.day);mt(u=>{const m={...u};return i.forEach(p=>{m[p.dateKey]={}}),m}),re({}),Ce>=0&&J&&Array.isArray(J.data)&&J.data.forEach(u=>{if(u.index_>=5&&u.index_<=9){const m=new Array(15).fill(null);m[0]=u.row[0];for(let p=0;p<7;p++)m[1+p*2]="",m[2+p*2]=!1;_(Ce,u.index_,m)}}),De("Cleared daily WHO/DONE assignments for a blank printable template!"),setTimeout(()=>De(null),3e3)},className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs",title:"Clear WHO/DONE cells to print a blank fill-in sheet","data-source-loc":"weekly_chores_household_hub.tsx:4954:1342","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:238","data-source-comp":"App",children:"Clear Names (Blank Sheet)"})}),n.jsxs("button",{onClick:ja,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs",title:"Automatically distribute chores across active members for current week","data-source-loc":"weekly_chores_household_hub.tsx:4980:285","data-source-comp":"App",children:[n.jsx(gs,{className:"w-3.5 h-3.5 text-amber-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:632","data-source-comp":"App",children:"Distribute Current Week"})]}),n.jsx("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer",title:"Print 1-page Letter Landscape schedule","data-source-loc":"weekly_chores_household_hub.tsx:4980:677","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:924","data-source-comp":"App",children:"🖨️ Print Schedule"})})]})]}),n.jsx("div",{className:"overflow-x-auto","data-source-loc":"weekly_chores_household_hub.tsx:4980:976","data-source-comp":"App",children:n.jsxs("table",{id:"printable-schedule-table",className:"w-full table-fixed border-collapse text-left text-xs",style:{borderColor:"#C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1009","data-source-comp":"App",children:[n.jsxs("colgroup",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:1146","data-source-comp":"App",children:[n.jsx("col",{style:{width:"21%"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1156","data-source-comp":"App"}),Gt.map(s=>n.jsxs(so.Fragment,{children:[n.jsx("col",{style:{width:"7.5%"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1247","data-source-comp":"App"}),n.jsx("col",{style:{width:"3.78%"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1280","data-source-comp":"App"})]},`col-${s.name}`))]}),n.jsxs("thead",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:1344","data-source-comp":"App",children:[n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"3px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1351","data-source-comp":"App",children:n.jsx("th",{colSpan:15,className:"py-2 px-3 text-left text-xl font-bold text-white tracking-tight","data-source-loc":"weekly_chores_household_hub.tsx:4980:1429","data-source-comp":"App",children:"Chore Schedule"})}),n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:4980:1546","data-source-comp":"App",children:[n.jsxs("th",{className:"p-0 align-top bg-white",style:{borderRight:"2px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1550","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white","data-source-loc":"weekly_chores_household_hub.tsx:4980:1634","data-source-comp":"App",children:"FOR THE WEEK OF:"}),n.jsx("div",{className:"text-lg font-bold py-1.5 text-center text-white",style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:4980:1767","data-source-comp":"App",children:(()=>{const s=Tt(ut||Pe);return s?`${s.month+1}/${s.day}/${s.year}`:ut||Pe||"10/19/2026"})()})]}),Gt.map((s,i)=>{const u=Tt(ut||Pe)||{year:2026,month:9,day:19},p=new Date(u.year,u.month,u.day+i).getDate();return n.jsxs("th",{colSpan:2,className:"py-1.5 px-1 text-center text-white font-bold align-middle",style:{backgroundColor:s.color,borderRight:i<6?"2px solid #FFFFFF":"none"},"data-source-loc":"weekly_chores_household_hub.tsx:4991:16","data-source-comp":"App",children:[n.jsx("div",{className:"text-xs font-bold uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:4994:12","data-source-comp":"App",children:s.short.toUpperCase()}),n.jsx("div",{className:"text-sm font-bold leading-tight mt-1","data-source-loc":"weekly_chores_household_hub.tsx:4994:101","data-source-comp":"App",children:p})]},s.name)})]}),n.jsxs("tr",{className:"bg-white text-[8.5px] font-bold text-slate-900",style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:4995:15","data-source-comp":"App",children:[n.jsx("th",{className:"py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]","data-source-loc":"weekly_chores_household_hub.tsx:4995:156","data-source-comp":"App",children:"TASK"}),Gt.map(s=>n.jsxs(so.Fragment,{children:[n.jsx("th",{className:"py-0.5 px-1 text-left uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:4995:313","data-source-comp":"App",children:"WHO"}),n.jsx("th",{className:"py-0.5 px-1 text-right uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:4995:379","data-source-comp":"App",children:"DONE"})]},`sub-${s.name}`))]})]}),n.jsxs("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:4995:479","data-source-comp":"App",children:[St.filter(s=>!(Cr&&!s.isSectionHeader&&!(s.task||"").toLowerCase().includes(Cr.toLowerCase())||!s.isSectionHeader&&Dn(s.task))).map((s,i)=>{var u,m;if(s.isSectionHeader)return s.headerType==="daily"?n.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"1.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5007:20","data-source-comp":"App",children:n.jsx("td",{colSpan:15,className:"py-1.5 px-3 font-bold text-sm text-white","data-source-loc":"weekly_chores_household_hub.tsx:5007:136","data-source-comp":"App",children:"Daily Tasks"})},`header-daily-${s.index_}`):n.jsxs("tr",{style:{backgroundColor:"#002060",borderTop:"1.5px solid #002060",borderBottom:"1.5px solid #C55A11"},className:"text-white font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5009:18","data-source-comp":"App",children:[n.jsx("td",{className:"py-1.5 px-3 text-sm font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5009:202","data-source-comp":"App",children:"Weekly Tasks"}),n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5009:265","data-source-comp":"App",children:"Description"}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5009:341","data-source-comp":"App",children:"Initials / Assigned"})]},`header-weekly-${s.index_}`);const p=s,h=p.task||((u=p.row)==null?void 0:u[0])||"Chore",d=String(h).split(/\r?\n/).map(W=>W.trim()).filter(Boolean),x=d[0]||h,f=d.slice(1).join(" "),C=Yt(p),D=ir(h),T=Tl(h)&&!D,b=lp(h,C),N=(m=p.row)!=null&&m[1]&&(T||b)&&!g.some(W=>W.name.toLowerCase()===String(p.row[1]).trim().toLowerCase())?String(p.row[1]).trim():Ou(h)?"(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away":nn(h)?"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum":Pu(h)?"- Pick Up, Organize, Dust & Vacuum":Ku(h)?"- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste":h.toLowerCase().includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":h.toLowerCase().includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":p.notes||"";return n.jsxs("tr",{className:"bg-white hover:bg-slate-50/60 transition-colors",style:{borderBottom:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5021:16","data-source-comp":"App",children:[n.jsxs("td",{className:"py-1.5 px-2 text-slate-900 bg-white align-middle",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5021:164","data-source-comp":"App",children:[n.jsx("div",{className:"leading-tight text-slate-900 font-semibold text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5021:309","data-source-comp":"App",children:x}),f&&n.jsx("div",{className:"text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight","data-source-loc":"weekly_chores_household_hub.tsx:5021:411","data-source-comp":"App",children:f})]}),T?(()=>{const W=Pn(p.index_,h),z=[{code:"SG",name:"Sydney"},{code:"CV",name:"Cadence"},{code:"MV",name:"Mason"},{code:"KV",name:"Koda"},{code:"KG",name:"Keyanna"}];return n.jsxs(so.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5030:34","data-source-comp":"App",children:N}),n.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5030:205","data-source-comp":"App",children:n.jsx("div",{className:"flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5030:314","data-source-comp":"App",children:z.map(F=>{const R=!!W[F.name];return n.jsxs("button",{type:"button",onClick:()=>Kn(p.index_,F.name,h),className:"inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700",title:`${F.name} (${F.code}) — Click to toggle`,"data-source-loc":"weekly_chores_household_hub.tsx:5032:20","data-source-comp":"App",children:[n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5032:262","data-source-comp":"App",children:[F.code,":"]}),n.jsx("span",{className:`inline-block min-w-[26px] text-center border-b border-slate-700 ${R?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5032:284","data-source-comp":"App",children:R?"✓":"____"})]},F.code)})})})]})})():b?(()=>{const W=xn(p.index_,h),z=W.who&&!W.who.startsWith("Who:")&&!W.who.startsWith("Assigned:")?W.who:"";return n.jsxs(so.Fragment,{children:[n.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5037:34","data-source-comp":"App",children:N}),n.jsx("td",{colSpan:4,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5037:205","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-baseline gap-1.5 text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5037:316","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-900 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5037:373","data-source-comp":"App",children:"Who:"}),n.jsxs("select",{value:z,onChange:F=>Ks(p.index_,h,{who:F.target.value}),className:"flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5037:440","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5039:168","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5039:194","data-source-comp":"App",children:g.filter(F=>F.type==="regular").map(F=>n.jsx("option",{value:F.name,"data-source-loc":"weekly_chores_household_hub.tsx:5039:290","data-source-comp":"App",children:F.name},F.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5039:354","data-source-comp":"App",children:g.filter(F=>F.type==="biweekly").map(F=>n.jsx("option",{value:F.name,"data-source-loc":"weekly_chores_household_hub.tsx:5039:451","data-source-comp":"App",children:F.name},F.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5039:515","data-source-comp":"App",children:g.filter(F=>F.type==="casual").map(F=>n.jsx("option",{value:F.name,"data-source-loc":"weekly_chores_household_hub.tsx:5039:607","data-source-comp":"App",children:F.name},F.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5039:671","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5039:704","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5039:758","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5039:800","data-source-comp":"App",children:"Parents"})]})]})]})}),n.jsx("td",{colSpan:2,className:"py-1.5 px-2 align-middle bg-white text-left",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5039:871","data-source-comp":"App",children:n.jsxs("button",{type:"button",onClick:()=>Ks(p.index_,h,{done:!W.done}),className:"inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full",title:"Click to toggle Done","data-source-loc":"weekly_chores_household_hub.tsx:5039:988","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5041:152","data-source-comp":"App",children:"Done:"}),n.jsx("span",{className:`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${W.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5041:170","data-source-comp":"App",children:W.done?"✓":"______"})]})})]})})():Gt.map((W,z)=>{var F,R,Z,ne;const Ee=1+z*2,$e=2+z*2,at=Tt(Pe)||{year:2026,month:9,day:19},wt=new Date(at.year,at.month,at.day+z),ye=jn(wt.getFullYear(),wt.getMonth(),wt.getDate()),Me=Ur(ye,p.index_,h),Ke=((F=B[p.index_])==null?void 0:F.row)||(h?(R=B[h.toLowerCase().trim()])==null?void 0:R.row:null),tt=(Ke==null?void 0:Ke[Ee])!==void 0?Ke[Ee]:(Z=p.row)==null?void 0:Z[Ee],Xr=(Ke==null?void 0:Ke[$e])!==void 0?Ke[$e]:(ne=p.row)==null?void 0:ne[$e],xr=tt!=null?String(tt).trim():Me!=null&&Me.who?String(Me.who).trim():"",fr=Xr!=null?Xr===!0||String(Xr).toLowerCase()==="true":!!(Me!=null&&Me.done);return n.jsxs(so.Fragment,{children:[n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:"1px solid #94A3B8"},"data-source-loc":"weekly_chores_household_hub.tsx:5060:49","data-source-comp":"App",children:n.jsxs("select",{value:xr,onChange:Xe=>{Bs(p.index_,z,"who",Xe.target.value,h)},className:"w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5060:148","data-source-comp":"App",children:[n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5062:149","data-source-comp":"App"}),n.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5062:175","data-source-comp":"App",children:g.filter(Xe=>Xe.type==="regular").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5062:271","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5062:335","data-source-comp":"App",children:g.filter(Xe=>Xe.type==="biweekly").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5062:432","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5062:496","data-source-comp":"App",children:g.filter(Xe=>Xe.type==="casual").map(Xe=>n.jsx("option",{value:Xe.name,"data-source-loc":"weekly_chores_household_hub.tsx:5062:588","data-source-comp":"App",children:Xe.name},Xe.id))}),n.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5062:652","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5062:685","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5062:731","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5062:785","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5062:831","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5062:873","data-source-comp":"App",children:"Parents"})]}),xr&&!g.some(Xe=>Xe.name===xr)&&!["Non-Casual","All Non-Casual","Each Child","All Kids","Parents"].includes(xr)&&n.jsx("option",{value:xr,"data-source-loc":"weekly_chores_household_hub.tsx:5062:1073","data-source-comp":"App",children:xr})]})}),n.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:z<6?"1.5px solid #475569":"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5062:1128","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:()=>{Bs(p.index_,z,"done",!fr,h)},className:"w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer",title:fr?"Mark as not done":"Mark as done","data-source-loc":"weekly_chores_household_hub.tsx:5062:1264","data-source-comp":"App",children:fr?n.jsx("span",{className:"text-emerald-700 font-black text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5064:196","data-source-comp":"App",children:"✓"}):n.jsx("span",{className:"text-slate-300 print:hidden text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5064:270","data-source-comp":"App",children:"☐"})})})]},W.name)})]},`row-${p.index_}-${h}`)}),n.jsxs("tr",{className:"h-14","data-source-loc":"weekly_chores_household_hub.tsx:5067:11","data-source-comp":"App",children:[n.jsx("td",{style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5067:32","data-source-comp":"App"}),Gt.map(s=>n.jsx("td",{colSpan:2,style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5067:98","data-source-comp":"App"},`band-${s.name}`))]}),n.jsxs("tr",{className:"bg-white text-slate-900",style:{borderTop:"1px solid #475569",borderBottom:"2.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5069:11","data-source-comp":"App",children:[n.jsx("td",{className:"py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5069:131","data-source-comp":"App",children:"Weekly Sign-Off"}),n.jsx("td",{colSpan:12,className:"py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5069:305","data-source-comp":"App",children:"Parent Initials:"}),n.jsx("td",{colSpan:2,className:"py-2 px-2 text-center bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5069:469","data-source-comp":"App",children:n.jsx("button",{type:"button",onClick:Go,className:"inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900",title:"Click to toggle Parent Sign-Off","data-source-loc":"weekly_chores_household_hub.tsx:5069:573","data-source-comp":"App",children:n.jsx("span",{className:`inline-block min-w-[56px] border-b border-slate-800 ${zo.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5069:782","data-source-comp":"App",children:zo.done?"✓ TV / MV":"_________"})})})]})]})]})})]}),n.jsxs("div",{className:"no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5069:1047","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:1119","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:1204","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-indigo-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:1311","data-source-comp":"App",children:"HOUSEHOLD ROSTER"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5069:1405","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5069:1490","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:1562","data-source-comp":"App",children:[n.jsx("strong",{className:"text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:1567","data-source-comp":"App",children:"• Full-Time:"})," ",g.filter(s=>s.type==="regular").map(s=>s.name).join(", ")||"Sydney, Thom, Meghan"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:1746","data-source-comp":"App",children:[n.jsx("strong",{className:"text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:1751","data-source-comp":"App",children:"• Bi-Weekly:"})," ",g.filter(s=>s.type==="biweekly").map(s=>s.name).join(" & ")||"Cadence & Mason"]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:1926","data-source-comp":"App",children:[n.jsx("strong",{className:"text-sky-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:1931","data-source-comp":"App",children:"• Casual:"})," ",g.filter(s=>s.type==="casual").map(s=>s.name).join(", ")||"Koda, Keyanna"]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:2109","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:2194","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:2301","data-source-comp":"App",children:"BI-WEEKLY SCHEDULE"}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5069:2395","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5069:2480","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:2552","data-source-comp":"App",children:"• Cadence & Mason: Alternating bi-weekly schedule"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:2621","data-source-comp":"App",children:"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:2709","data-source-comp":"App",children:"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:2797","data-source-comp":"App",children:"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:2900","data-source-comp":"App",children:"• On-weeks (Starts Oct 19): Included in daily chore rotations"})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:2993","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:3078","data-source-comp":"App",children:[n.jsx("span",{className:"uppercase tracking-wider text-[11px] text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:3185","data-source-comp":"App",children:'PET CARE ROUTINE ("FEED THE HERD")'}),n.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5069:3300","data-source-comp":"App",children:"Sheet Row 19–22"})]}),n.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5069:3385","data-source-comp":"App",children:[n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:3457","data-source-comp":"App",children:"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:3548","data-source-comp":"App",children:"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:3640","data-source-comp":"App",children:"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}),n.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:3741","data-source-comp":"App",children:"• Routine: Daily feeding, fresh water & station cleanup"})]})]})]})]}),Kt==="stats"&&n.jsxs("div",{className:"max-w-4xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5069:3867","data-source-comp":"App",children:[n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5","data-source-loc":"weekly_chores_household_hub.tsx:5069:3912","data-source-comp":"App",children:[n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5069:3984","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:4059","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5069:4110","data-source-comp":"App",children:"Scheduled Chores"}),n.jsx(Cu,{className:"w-4 h-4 text-slate-400"})]}),n.jsx("div",{className:"text-2xl font-bold text-slate-900 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:4241","data-source-comp":"App",children:or.totalScheduled}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5069:4330","data-source-comp":"App",children:["Total across ",Qr[st]," ",gt]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5069:4447","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:4522","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5069:4573","data-source-comp":"App",children:"Completed Chores"}),n.jsx(Su,{className:"w-4 h-4 text-emerald-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-emerald-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:4709","data-source-comp":"App",children:or.totalCompleted}),n.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5069:4800","data-source-comp":"App",children:[or.completionRate,"% completion rate"]})]}),n.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5069:4897","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:4972","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5069:5023","data-source-comp":"App",children:"Active Tasks"}),n.jsx(Sl,{className:"w-4 h-4 text-indigo-500"})]}),n.jsx("div",{className:"text-2xl font-bold text-indigo-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:5151","data-source-comp":"App",children:ge.length}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5069:5232","data-source-comp":"App",children:"Daily & weekly routines"})]}),n.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5069:5308","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5069:5422","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-bold text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5069:5473","data-source-comp":"App",children:"Current Top Performer"}),n.jsx(ld,{className:"w-4 h-4 text-amber-600"})]}),n.jsx("div",{className:"text-xl font-black text-amber-950 mt-2 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5069:5602","data-source-comp":"App",children:Yr?Yr.name:"TBD"}),n.jsx("p",{className:"text-xs text-amber-800 mt-1 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5069:5715","data-source-comp":"App",children:Yr?`${Yr.done} chores finished`:"Track chores to rank"})]})]}),n.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:5069:5863","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5069:5977","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5069:6088","data-source-comp":"App",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner","data-source-loc":"weekly_chores_household_hub.tsx:5069:6129","data-source-comp":"App",children:n.jsx(sp,{className:"w-6 h-6 text-amber-200"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5069:6285","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:6290","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full","data-source-loc":"weekly_chores_household_hub.tsx:5069:6331","data-source-comp":"App",children:"Monthly Incentive Prize"}),n.jsxs("span",{className:"text-xs opacity-90","data-source-loc":"weekly_chores_household_hub.tsx:5069:6464","data-source-comp":"App",children:[Qr[st]," ",gt]})]}),n.jsx("h3",{className:"text-base font-extrabold mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5069:6561","data-source-comp":"App",children:"Top Performer Reward & Recognition"})]})]}),n.jsx("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5069:6660","data-source-comp":"App",children:n.jsxs("button",{onClick:()=>{Rs(s=>!s),Ln(qo)},className:"text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5069:6701","data-source-comp":"App",children:[n.jsx(id,{className:"w-3.5 h-3.5 text-amber-700"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5072:203","data-source-comp":"App",children:Ms?"Cancel Edit":"Customize Incentive"})]})})]}),Ms?n.jsxs("div",{className:"pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5072:1186","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-white mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5072:1281","data-source-comp":"App",children:"Set Monthly Reward / Incentive Prize for the Top Performer:"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5072:1399","data-source-comp":"App",children:[n.jsx("input",{type:"text",value:$o,onChange:s=>Ln(s.target.value),placeholder:"e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass...",className:"flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300","data-source-loc":"weekly_chores_household_hub.tsx:5072:1427","data-source-comp":"App"}),n.jsx("button",{onClick:()=>{$o.trim()&&(Na($o.trim()),Rs(!1),De(`Updated Monthly Incentive: "${$o.trim()}"`),setTimeout(()=>De(null),3e3))},className:"px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition","data-source-loc":"weekly_chores_household_hub.tsx:5072:1732","data-source-comp":"App",children:"Save Prize"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] pt-1","data-source-loc":"weekly_chores_household_hub.tsx:5079:140","data-source-comp":"App",children:[n.jsx("span",{className:"opacity-80","data-source-loc":"weekly_chores_household_hub.tsx:5079:210","data-source-comp":"App",children:"Quick ideas:"}),n.jsx("button",{onClick:()=>Ln("$15 Allowance Bonus & Pizza Night Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5079:258","data-source-comp":"App",children:"$15 + Pizza Night"}),n.jsx("button",{onClick:()=>Ln("1-Day Chore Exemption Pass & Movie Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5079:445","data-source-comp":"App",children:"1-Day Chore Pass"}),n.jsx("button",{onClick:()=>Ln("$20 Gift Card & Weekend Treat"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5079:628","data-source-comp":"App",children:"$20 Gift Card"}),n.jsx("button",{onClick:()=>Ln("Family Ice Cream Outing of Their Choice"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5079:802","data-source-comp":"App",children:"Ice Cream Outing"})]})]}):n.jsxs("div",{className:"pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5072:320","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5072:414","data-source-comp":"App",children:[n.jsx("div",{className:"text-amber-100 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5072:441","data-source-comp":"App",children:"Incentive for Highest Monthly Chore Completions:"}),n.jsxs("div",{className:"text-sm font-black text-white flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5072:539","data-source-comp":"App",children:[n.jsx(id,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5072:662","data-source-comp":"App",children:qo})]})]}),Yr&&n.jsxs("div",{className:"bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5072:722","data-source-comp":"App",children:[n.jsx(ld,{className:"w-4 h-4 text-amber-200 shrink-0"}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5072:915","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] text-amber-100 uppercase tracking-wider font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5072:920","data-source-comp":"App",children:"Leading Candidate"}),n.jsxs("div",{className:"font-extrabold text-xs text-white","data-source-loc":"weekly_chores_household_hub.tsx:5072:1022","data-source-comp":"App",children:[Yr.name," (",Yr.done," finished • ",Yr.pct,"%)"]})]})]})]})]}),n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5079:1004","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5079:1079","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5079:1196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5079:1201","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5079:1242","data-source-comp":"App",children:"Family Members Completion"}),n.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5079:1323","data-source-comp":"App",children:["Unified Roster (",Bn.length," Members)"]})]}),n.jsxs("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5079:1508","data-source-comp":"App",children:["Monthly Total Tracker ranked by total chores completed for ",Qr[st]," ",gt,". All household members are displayed together in a single unified leaderboard."]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5079:1752","data-source-comp":"App",children:[n.jsx(ku,{className:"w-4 h-4 text-amber-500"}),n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5079:1860","data-source-comp":"App",children:"Ranked by Monthly Completions"})]})]}),n.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5079:1955","data-source-comp":"App",children:Bn.map((s,i)=>{const u=i===0&&s.done>0,m=i===1&&s.done>0,p=i===2&&s.done>0;return n.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${u?"border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm":"border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5083:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5083:242","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5083:330","data-source-comp":"App",children:[n.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${u?"bg-amber-500 text-white shadow-xs":m?"bg-slate-300 text-slate-800":p?"bg-amber-700/80 text-white":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5083:371","data-source-comp":"App",children:u?n.jsx(ld,{className:"w-4 h-4"}):`#${i+1}`}),n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5083:698","data-source-comp":"App",children:[n.jsx("span",{className:"w-3.5 h-3.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5083:739","data-source-comp":"App"}),n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:18","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-xs text-slate-500 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5085:95","data-source-comp":"App",children:["(",s.role," = ",s.role==="Supreme Overlord"?"Parent":"Kid",")"]}),n.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.type==="biweekly"?"bg-pink-50 text-pink-700 border-pink-200":s.type==="casual"?"bg-sky-50 text-sky-700 border-sky-200":"bg-slate-100 text-slate-600 border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5085:223","data-source-comp":"App",children:s.residency}),u&&n.jsxs("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5085:516","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:673","data-source-comp":"App",children:"🏆"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5085:699","data-source-comp":"App",children:"Top Performer • Incentive Winner"})]})]})]}),n.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5085:773","data-source-comp":"App",children:[n.jsxs("div",{className:"text-right","data-source-loc":"weekly_chores_household_hub.tsx:5085:844","data-source-comp":"App",children:[n.jsx("span",{className:"font-extrabold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5085:872","data-source-comp":"App",children:s.done}),n.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5085:943","data-source-comp":"App",children:[" / ",s.total," completed"]})]}),n.jsxs("span",{className:`font-black text-xs px-2 py-0.5 rounded-md ${s.pct>=80?"bg-emerald-100 text-emerald-800":s.pct>=50?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5085:1019","data-source-comp":"App",children:[s.pct,"%"]})]})]}),n.jsx("div",{className:"w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5085:1235","data-source-comp":"App",children:n.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500",style:{width:`${s.pct}%`,backgroundColor:u?"#D97706":s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5085:1310","data-source-comp":"App"})}),u&&n.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5088:36","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5088:165","data-source-comp":"App",children:[n.jsx(id,{className:"w-3.5 h-3.5 text-amber-700 shrink-0"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5088:264","data-source-comp":"App",children:["Qualifying Reward: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5088:293","data-source-comp":"App",children:qo})]})]}),n.jsxs("span",{className:"font-bold text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5088:341","data-source-comp":"App",children:["Rank #1 in ",Qr[st]]})]})]},s.id)})})]}),n.jsxs("div",{className:"p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5089:26","data-source-comp":"App",children:[n.jsx("h4",{className:"text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5089:107","data-source-comp":"App",children:n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5089:212","data-source-comp":"App",children:"🐾 House Pets Overview"})}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5089:263","data-source-comp":"App",children:Le.filter(s=>s.active!==!1).map(s=>n.jsxs("div",{className:"p-2.5 rounded-lg border flex items-center gap-2",style:{backgroundColor:s.bg,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5089:381","data-source-comp":"App",children:[n.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5089:541","data-source-comp":"App"}),n.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5089:634","data-source-comp":"App",children:s.icon}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5089:679","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5089:684","data-source-comp":"App",children:s.name}),n.jsx("div",{className:"text-[10px] opacity-80",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5089:755","data-source-comp":"App",children:s.type})]})]},`${s.index_}-${s.name}`))})]})]}),Kt==="roster"&&n.jsx("div",{className:"max-w-5xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5089:899","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5089:944","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5089:1019","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5089:1131","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5089:1136","data-source-comp":"App",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5089:1177","data-source-comp":"App",children:"Household Hub Master Data"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5089:1256","data-source-comp":"App",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500","data-source-loc":"weekly_chores_household_hub.tsx:5089:1408","data-source-comp":"App"}),"Linked: Monthly Calendar & Printable Weekly Schedule"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5089:1533","data-source-comp":"App",children:"Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files."})]}),n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5089:1713","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5089:1754","data-source-comp":"App",children:["Selected Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5089:1888","data-source-comp":"App",children:ut||X.activeWeekStart})]}),n.jsxs("span",{className:"text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200","data-source-loc":"weekly_chores_household_hub.tsx:5089:1965","data-source-comp":"App",children:["Kids Week: ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5089:2091","data-source-comp":"App",children:Gr?"Active":"Inactive"})]})]})]}),n.jsxs("div",{className:"my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5089:2175","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5089:2320","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5089:2371","data-source-comp":"App",children:[n.jsx(gs,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-indigo-950","data-source-loc":"weekly_chores_household_hub.tsx:5089:2460","data-source-comp":"App",children:"Special Rules & Parameters"})]}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800","data-source-loc":"weekly_chores_household_hub.tsx:5089:2572","data-source-comp":"App",children:"Live Analytical Summary"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5089:2707","data-source-comp":"App",children:[(()=>{const s=g.filter(h=>h.active!==!1&&(h.role==="Supreme Overlord"||h.role==="Overseer Supreme")).map(h=>h.name),i=s.length>0?s.join(" & "):"None",u=g.filter(h=>h.active!==!1&&h.type==="regular").map(h=>h.name),m=g.filter(h=>h.active!==!1&&h.type==="biweekly").map(h=>h.name),p=Gr?[...u,...m]:u;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5095:22","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5095:112","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:182","data-source-comp":"App",children:"👑"}),"Supreme Overlords (Parents) & Minions (Kids)"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5095:263","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:321","data-source-comp":"App",children:i}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:364","data-source-comp":"App",children:"Supreme Overlords"}),", actively share daily chores with the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:433","data-source-comp":"App",children:"Kids"}),", AKA ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:464","data-source-comp":"App",children:"Minions"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:481","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:487","data-source-comp":"App",children:"Sunday Supper Rule:"})," On Sundays, ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:540","data-source-comp":"App",children:"Make Supper"})," is always assigned exclusively to ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:599","data-source-comp":"App",children:i}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:633","data-source-comp":"App"}),"They also conduct the Sunday ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:672","data-source-comp":"App",children:"Weekly Sign-Off & Inspection"}),"."]})]}),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5095:728","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-pink-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5095:816","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:884","data-source-comp":"App",children:"🏠"})," Custody Rotation: Kids Week"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5095:949","data-source-comp":"App",children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:1030","data-source-comp":"App",children:ut||X.activeWeekStart}),", Kids Week = ",n.jsx("strong",{className:Gr?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5095:1118","data-source-comp":"App",children:Gr?"Active":"Inactive"}),".",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:1258","data-source-comp":"App"}),n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:1264","data-source-comp":"App",children:m.length>0?m.join(" & "):"Bi-Weekly Occupants"})," are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5095:1486","data-source-comp":"App",children:"5:00 PM"}),". ",Gr?`Chores for this week are distributed across all ${p.length} active household members (${p.join(", ")}).`:`Chores for this week are distributed among the full-time roster (${u.join(", ")}).`]})]})]})})(),n.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5096:16","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-amber-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5096:105","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5096:174","data-source-comp":"App",children:"🚛"})," Alternating Curbside Schedule"]}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5096:241","data-source-comp":"App",children:["Curbside tasks alternate bi-weekly on Thursday evenings for the ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5096:367","data-source-comp":"App",children:"Full-Time"})," & ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5096:400","data-source-comp":"App",children:"Bi-Weekly"})," occupants.",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5096:441","data-source-comp":"App"}),(()=>{const s=At[3]||At[0],i=s?Et("Curbside Waste",s.year,s.month,s.day):!1,u=s?Et("Curbside Recycling",s.year,s.month,s.day):!0;return n.jsxs(n.Fragment,{children:["For selected week, ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5100:45","data-source-comp":"App",children:ut||X.activeWeekStart}),":",n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5100:120","data-source-comp":"App"}),"Waste = ",n.jsx("strong",{className:i?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5100:138","data-source-comp":"App",children:i?"Active":"Inactive"}),n.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5100:255","data-source-comp":"App"}),"Recycling = ",n.jsx("strong",{className:u?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5100:277","data-source-comp":"App",children:u?"Active":"Inactive"})]})})()]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4","data-source-loc":"weekly_chores_household_hub.tsx:5101:38","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-purple-50/70 border border-purple-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5101:98","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-purple-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5101:171","data-source-comp":"App",children:"Full-Time Occupants"}),n.jsx("div",{className:"text-[8px] italic text-purple-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5101:276","data-source-comp":"App",children:"(Eternally working)"}),n.jsxs("div",{className:"text-lg font-extrabold text-purple-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:394","data-source-comp":"App",children:[g.filter(s=>s.active!==!1&&s.type==="regular").length," Members"]}),n.jsx("div",{className:"text-[11px] text-purple-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:553","data-source-comp":"App",children:g.filter(s=>s.active!==!1&&s.type==="regular").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-pink-50/70 border border-pink-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5101:751","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-pink-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5101:820","data-source-comp":"App",children:"Bi-Weekly Occupants"}),n.jsx("div",{className:"text-[8px] italic text-pink-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5101:923","data-source-comp":"App",children:"(Half-Timers)"}),n.jsxs("div",{className:"text-lg font-extrabold text-pink-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:1033","data-source-comp":"App",children:[g.filter(s=>s.active!==!1&&s.type==="biweekly").length," Members"]}),n.jsx("div",{className:"text-[11px] text-pink-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:1191","data-source-comp":"App",children:g.filter(s=>s.active!==!1&&s.type==="biweekly").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-sky-50/70 border border-sky-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5101:1388","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-sky-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5101:1455","data-source-comp":"App",children:"Casual Assignees"}),n.jsx("div",{className:"text-[8px] italic text-sky-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5101:1554","data-source-comp":"App",children:"(Manually added to schedule)"}),n.jsxs("div",{className:"text-lg font-extrabold text-sky-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:1678","data-source-comp":"App",children:[g.filter(s=>s.active!==!1&&s.type==="casual").length," Members"]}),n.jsx("div",{className:"text-[11px] text-sky-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:1833","data-source-comp":"App",children:g.filter(s=>s.active!==!1&&s.type==="casual").map(s=>s.name).join(", ")||"None"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 border border-amber-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5101:2027","data-source-comp":"App",children:[n.jsx("div",{className:"text-[10px] font-bold text-amber-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5101:2098","data-source-comp":"App",children:"The Herd"}),n.jsx("div",{className:"text-[8px] italic text-amber-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5101:2191","data-source-comp":"App",children:"(Various beasts)"}),n.jsxs("div",{className:"text-lg font-extrabold text-amber-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:2305","data-source-comp":"App",children:[Le.filter(s=>s.active!==!1).length," Pets"]}),n.jsx("div",{className:"text-[11px] text-amber-800 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5101:2433","data-source-comp":"App",children:Le.filter(s=>s.active!==!1).map(s=>s.name).join(", ")||"None"})]})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:2609","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5101:2636","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5101:2703","data-source-comp":"App",children:[n.jsx(fa,{className:"w-4 h-4 text-indigo-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5101:2789","data-source-comp":"App",children:"Household Members"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5101:2860","data-source-comp":"App",children:"Rows 5–11 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:3007","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5101:3048","data-source-comp":"App",children:[g.length," Registered Occupants"]}),n.jsxs("button",{type:"button",onClick:()=>Pr(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer",title:"Add a new household member","data-source-loc":"weekly_chores_household_hub.tsx:5101:3143","data-source-comp":"App",children:[n.jsx(ys,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5101:3436","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5101:3480","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5101:3560","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5101:3604","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5101:3727","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:3731","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:3760","data-source-comp":"App",children:"Role"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:3789","data-source-comp":"App",children:"Occupancy"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5101:3823","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5101:3871","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5101:3921","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5101:3977","data-source-comp":"App",children:g.map(s=>{const i=s.role==="Supreme Overlord"||s.role==="Overseer Supreme"?"Supreme Overlord":"Minion",u=s.type==="biweekly"?"Bi-Weekly":s.type==="casual"?"Casual":"Full-Time",m=["Parents","Kids","Non-Casual","All"],p=String(s.specialGroups||"").split(",").map(C=>C.trim()).filter(Boolean),h=Ds===s.index_,d=Da===s.index_,x=()=>{const C=Os.trim()||s.name;jr(s.index_,{name:C}),yo(null)},f=C=>{const D=new Set(p);D.has(C)?D.delete(C):D.add(C);const T=m.filter(b=>D.has(b));jr(s.index_,{specialGroups:T.join(", ")})};return n.jsxs("tr",{className:`transition ${d?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5130:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5130:153","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5130:202","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5130:243","data-source-comp":"App"}),d?n.jsx("input",{type:"text",value:Os,onChange:C=>Ho(C.target.value),onKeyDown:C=>{C.key==="Enter"&&x(),C.key==="Escape"&&yo(null)},className:"w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5132:37","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5132:424","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5132:499","data-source-comp":"App",children:n.jsxs("select",{value:i,onChange:C=>jr(s.index_,{role:C.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${i==="Supreme Overlord"?"bg-amber-100 text-amber-900 border border-amber-300":"bg-indigo-50 text-indigo-800 border border-indigo-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5132:519","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5132:901","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5132:968","data-source-comp":"App",children:"Minion (Kid)"})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5132:1026","data-source-comp":"App",children:n.jsxs("select",{value:u,onChange:C=>jr(s.index_,{residency:C.target.value}),className:`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${u==="Bi-Weekly"?"bg-pink-50 text-pink-700 border border-pink-200":u==="Casual"?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5132:1046","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5132:1493","data-source-comp":"App",children:"Full-Time"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5132:1537","data-source-comp":"App",children:"Bi-Weekly"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5132:1581","data-source-comp":"App",children:"Casual"})]})}),n.jsxs("td",{className:"p-3 relative","data-source-loc":"weekly_chores_household_hub.tsx:5132:1633","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Mn(h?null:s.index_),className:"w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5132:1662","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5132:2029","data-source-comp":"App",children:p.length>0?p.join(", "):"None selected"}),n.jsx(ad,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${h?"rotate-180 text-indigo-600":""}`})]}),h&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Mn(null),"data-source-loc":"weekly_chores_household_hub.tsx:5132:2306","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5132:2393","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5132:2518","data-source-comp":"App",children:"Rotation Groups"}),m.map(C=>{const D=p.includes(C);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5134:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:D,onChange:()=>f(C),className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5134:164","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${D?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5134:353","data-source-comp":"App",children:C})]},C)})]})]})]}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5135:31","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:C=>jr(s.index_,{active:C.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5135:63","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5135:471","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5135:518","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5135:582","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5135:613","data-source-comp":"App",children:[d?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:x,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save name","data-source-loc":"weekly_chores_household_hub.tsx:5135:694","data-source-comp":"App",children:n.jsx(sd,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>yo(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel","data-source-loc":"weekly_chores_household_hub.tsx:5135:922","data-source-comp":"App",children:n.jsx(zt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{yo(s.index_),Ho(s.name)},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Rename ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5135:1157","data-source-comp":"App",children:n.jsx(Wo,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Ea(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Members`,"data-source-loc":"weekly_chores_household_hub.tsx:5138:201","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:42","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5139:105","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5139:172","data-source-comp":"App",children:[n.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5139:213","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5139:261","data-source-comp":"App",children:"Household Pets"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5139:329","data-source-comp":"App",children:"Rows 27–32 • Linked Data"})]}),n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:501","data-source-comp":"App",children:[n.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5139:542","data-source-comp":"App",children:[Le.length," Registered Pets"]}),n.jsxs("button",{type:"button",onClick:()=>$r(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer",title:"Add a new household pet member","data-source-loc":"weekly_chores_household_hub.tsx:5139:629","data-source-comp":"App",children:[n.jsx(ys,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5139:921","data-source-comp":"App",children:"Add Member"})]})]})]}),n.jsx("div",{className:"overflow-x-auto border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5139:965","data-source-comp":"App",children:n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5139:1044","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5139:1088","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5139:1211","data-source-comp":"App",children:[n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:1215","data-source-comp":"App",children:"Name"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:1244","data-source-comp":"App",children:"Species"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:1276","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5139:1316","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5139:1362","data-source-comp":"App",children:"Active Status"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5139:1412","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5139:1468","data-source-comp":"App",children:Le.map(s=>{const i=["Dog","Cat","Bird","Fish","Small Pet","Other"],u=s.type||"Dog";i.includes(u)||i.unshift(u);const m=Ve===s.index_,p=()=>{const h=un.name.trim()||s.name;zs(s.index_,{name:h,routine:un.routine.trim(),care:un.care.trim()}),cn(null)};return n.jsxs("tr",{className:`transition ${m?"bg-amber-50/60":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5155:20","data-source-comp":"App",children:[n.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5155:143","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5155:192","data-source-comp":"App",children:[n.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5155:233","data-source-comp":"App"}),n.jsx("span",{className:"text-base shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5155:322","data-source-comp":"App",children:s.icon}),m?n.jsx("input",{type:"text",value:un.name,onChange:h=>In(d=>({...d,name:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5155:392","data-source-comp":"App"}):n.jsx("span",{className:"px-2 py-0.5 rounded-full font-bold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5155:801","data-source-comp":"App",children:s.name})]})}),n.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5155:980","data-source-comp":"App",children:n.jsx("select",{value:u,onChange:h=>zs(s.index_,{type:h.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${u==="Dog"?"bg-amber-100 text-amber-900 border border-amber-300":u==="Cat"?"bg-orange-50 text-orange-800 border border-orange-200":"bg-slate-100 text-slate-800 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5155:1000","data-source-comp":"App",children:i.map(h=>n.jsx("option",{value:h,"data-source-loc":"weekly_chores_household_hub.tsx:5155:1485","data-source-comp":"App",children:h},h))})}),n.jsx("td",{className:"p-3 font-medium text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5155:1542","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:un.routine,onChange:h=>In(d=>({...d,routine:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5155:1605","data-source-comp":"App"}):s.routine}),n.jsx("td",{className:"p-3 text-slate-600 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5155:2045","data-source-comp":"App",children:m?n.jsx("input",{type:"text",value:un.care,onChange:h=>In(d=>({...d,care:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5155:2105","data-source-comp":"App"}):s.care}),n.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5155:2524","data-source-comp":"App",children:n.jsxs("select",{value:s.active?"true":"false",onChange:h=>zs(s.index_,{active:h.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5155:2556","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5155:2951","data-source-comp":"App",children:"✓ Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5155:2998","data-source-comp":"App",children:"○ Inactive"})]})}),n.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5155:3062","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5155:3093","data-source-comp":"App",children:[m?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:p,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5155:3171","data-source-comp":"App",children:n.jsx(sd,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>cn(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5155:3399","data-source-comp":"App",children:n.jsx(zt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{cn(s.index_),In({name:s.name,routine:s.routine,care:s.care})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5155:3639","data-source-comp":"App",children:n.jsx(Wo,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Rl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Pets`,"data-source-loc":"weekly_chores_household_hub.tsx:5162:196","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5163:42","data-source-comp":"App",children:[n.jsx("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5163:105","data-source-comp":"App",children:n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5163:156","data-source-comp":"App",children:[n.jsx(rp,{className:"w-4 h-4 text-purple-600"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5163:243","data-source-comp":"App",children:"Occupancy Categories & Rules"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5163:325","data-source-comp":"App",children:"Rows 14–17"})]})}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:451","data-source-comp":"App",children:te.map(s=>n.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:549","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5163:658","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5163:709","data-source-comp":"App",children:s.type}),n.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5163:777","data-source-comp":"App",children:"Active"})]}),n.jsx("div",{className:"text-[11px] font-semibold text-indigo-700","data-source-loc":"weekly_chores_household_hub.tsx:5163:888","data-source-comp":"App",children:s.description}),n.jsxs("p",{className:"text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5163:970","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5163:1025","data-source-comp":"App",children:"Rule:"})," ",s.rules]})]},s.type))})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:1087","data-source-comp":"App",children:[n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5163:1186","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5163:1213","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:1264","data-source-comp":"App",children:[n.jsx(fa,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5163:1384","data-source-comp":"App",children:"Special Rotation Groups"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5163:1425","data-source-comp":"App",children:"Rows 20–25"})]}),n.jsx("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5163:1507","data-source-comp":"App",children:I.map(s=>n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:1563","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5163:1656","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5163:1707","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5163:1767","data-source-comp":"App",children:"Group"})]}),n.jsx("div",{className:"text-[11px] text-slate-600 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5163:1842","data-source-comp":"App",children:s.members})]},s.name))})]}),n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5163:1943","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5163:1970","data-source-comp":"App",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:2021","data-source-comp":"App",children:[n.jsx(op,{className:"w-4 h-4 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5163:2145","data-source-comp":"App",children:"Schedule Configurations"})]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5163:2186","data-source-comp":"App",children:"Rows 18–21"})]}),n.jsxs("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5163:2268","data-source-comp":"App",children:[n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:2295","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5163:2373","data-source-comp":"App",children:"Active Week Start Date"}),n.jsx("div",{className:"text-sm font-extrabold text-indigo-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:2451","data-source-comp":"App",children:X.activeWeekStart}),n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5163:2555","data-source-comp":"App",children:"Scope: Printable Weekly Schedule"})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:2645","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5163:2723","data-source-comp":"App",children:"Custody Schedule Rotation"}),n.jsx("div",{className:"text-sm font-extrabold text-pink-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:2804","data-source-comp":"App",children:X.custodyRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5163:2906","data-source-comp":"App",children:["Bi-Weekly Schedule • Members: ",X.custodyMembers]})]}),n.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:3037","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5163:3115","data-source-comp":"App",children:"Waste / Recycling Schedule Rotation"}),n.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5163:3206","data-source-comp":"App",children:X.wasteRotation}),n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5163:3306","data-source-comp":"App",children:["Alternating weeks • Members: ",X.wasteMembers]})]})]})]})]}),n.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5163:3452","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5163:3515","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5163:3596","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5163:3601","data-source-comp":"App",children:[n.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5163:3642","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5163:3784","data-source-comp":"App",children:"Master Chores Template & Registry"}),n.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5163:3873","data-source-comp":"App",children:[xe.length," Tasks • Rows 5–15 (Cols 6–10)"]})]}),n.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5163:4084","data-source-comp":"App",children:"Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet."})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5163:4292","data-source-comp":"App",children:n.jsx("button",{onClick:()=>{xo(s=>!s)},className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer",title:"Add a new master chore","data-source-loc":"weekly_chores_household_hub.tsx:5163:4343","data-source-comp":"App",children:Sa?n.jsxs(n.Fragment,{children:[n.jsx(zt,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5165:253","data-source-comp":"App",children:"Close Add Chore"})]}):n.jsxs(n.Fragment,{children:[n.jsx(ys,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5165:317","data-source-comp":"App",children:"Add Chore"})]})})})]}),Sa&&n.jsxs("div",{className:"my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn","data-source-loc":"weekly_chores_household_hub.tsx:5165:386","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5165:516","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-sm text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5165:599","data-source-comp":"App",children:[n.jsx(ys,{className:"w-4 h-4 text-indigo-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5165:720","data-source-comp":"App",children:"Add New Master Chore to Household Hub"})]}),n.jsx("button",{onClick:()=>xo(!1),className:"text-slate-400 hover:text-slate-700 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5165:776","data-source-comp":"App",children:n.jsx(zt,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5165:920","data-source-comp":"App",children:[n.jsxs("div",{className:"md:col-span-2","data-source-loc":"weekly_chores_household_hub.tsx:5165:983","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5165:1014","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5165:1096","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:Qe.task,onChange:s=>qt(i=>({...i,task:s.target.value})),onKeyDown:s=>{s.key==="Enter"&&Qe.task.trim()&&wo(Qe)},placeholder:"e.g. Empty dishwasher, sanitize counters, sweep porch...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5165:1148","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5174:261","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5174:266","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:Qe.category,onChange:s=>qt(i=>({...i,category:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5174:337","data-source-comp":"App",children:An.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5179:201","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5179:282","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5179:287","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:Qe.frequency,onChange:s=>{const i=s.target.value;qt(u=>({...u,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5179:359","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5188:172","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5188:208","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5188:256","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5188:315","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5188:320","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("select",{value:Qe.targetDay,onChange:s=>qt(i=>({...i,targetDay:s.target.value})),className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5188:396","data-source-comp":"App"}),n.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5193:37","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Ar(Lt==="NEW_CHORE"?null:"NEW_CHORE"),className:"w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5193:63","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5193:423","data-source-comp":"App",children:Qe.targetDay||"Select days..."}),n.jsx(ad,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${Lt==="NEW_CHORE"?"rotate-180 text-indigo-600":""}`})]}),Lt==="NEW_CHORE"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Ar(null),"data-source-loc":"weekly_chores_household_hub.tsx:5193:719","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5193:804","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5193:929","data-source-comp":"App",children:"Select Day(s)"}),Vt.map(s=>{const i=Qe.selectedTargetDays||Br(Qe.targetDay).selectedDays,u=i.includes(s);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5193:1268","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:()=>{const m=new Set(i);m.has(s)?m.delete(s):m.add(s);const p=Vt.filter(d=>m.has(d)),h=qr(p,!!Qe.customTargetEnabled,Qe.customTargetText||"");qt(d=>({...d,selectedTargetDays:p,targetDay:h}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5193:1408","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${u?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5193:1962","data-source-comp":"App",children:s})]},s)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5193:2093","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5193:2170","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:!!Qe.customTargetEnabled,onChange:s=>{const i=s.target.checked,u=Qe.selectedTargetDays||Br(Qe.targetDay).selectedDays,m=qr(u,i,Qe.customTargetText||"");qt(p=>({...p,customTargetEnabled:i,targetDay:m}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5193:2242","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${Qe.customTargetEnabled?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5193:2800","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:Qe.customTargetText||"",onChange:s=>{const i=s.target.value,u=Qe.selectedTargetDays||[],m=qr(u,!0,i);qt(p=>({...p,customTargetEnabled:!0,customTargetText:i,targetDay:m}))},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5193:2948","data-source-comp":"App"})]})]})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:3539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5193:3544","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:Qe.rotationGroup==="All Non-Casual"?"Non-Casual":Qe.rotationGroup,onChange:s=>qt(i=>({...i,rotationGroup:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5193:3621","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5198:174","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5198:216","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5198:262","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5198:296","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5198:336","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5198:379","data-source-comp":"App",children:g.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5198:440","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))})]})]}),n.jsxs("div",{className:"md:col-span-3","data-source-loc":"weekly_chores_household_hub.tsx:5198:539","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5198:570","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("input",{type:"text",value:Qe.notes,onChange:s=>qt(i=>({...i,notes:s.target.value})),placeholder:"Instructions, supplies, details or timing notes...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5198:660","data-source-comp":"App"})]})]}),n.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5203:238","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>xo(!1),className:"px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition","data-source-loc":"weekly_chores_household_hub.tsx:5203:310","data-source-comp":"App",children:"Cancel"}),n.jsxs("button",{type:"button",onClick:()=>wo({...Qe,rotationGroup:Qe.rotationGroup==="All Non-Casual"?"Non-Casual":Qe.rotationGroup}),disabled:!Qe.task.trim(),className:"px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5203:493","data-source-comp":"App",children:[n.jsx(ys,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5203:924","data-source-comp":"App",children:"Add Chore to Master List"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5203:983","data-source-comp":"App",children:[n.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5203:1038","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5203:1106","data-source-comp":"App",children:"Total Template Chores"}),n.jsxs("div",{className:"text-xl font-bold text-slate-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5203:1220","data-source-comp":"App",children:[xe.length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5203:1317","data-source-comp":"App",children:"All registered tasks"})]}),n.jsxs("div",{className:"p-3 bg-blue-50/70 rounded-xl border border-blue-200","data-source-loc":"weekly_chores_household_hub.tsx:5203:1395","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5203:1464","data-source-comp":"App",children:"Daily Chores"}),n.jsxs("div",{className:"text-xl font-bold text-blue-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5203:1568","data-source-comp":"App",children:[xe.filter(s=>s.frequency.toLowerCase().includes("daily")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-blue-600","data-source-loc":"weekly_chores_household_hub.tsx:5203:1721","data-source-comp":"App",children:"Mon – Sun rotation"})]}),n.jsxs("div",{className:"p-3 bg-purple-50/70 rounded-xl border border-purple-200","data-source-loc":"weekly_chores_household_hub.tsx:5203:1796","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-purple-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5203:1869","data-source-comp":"App",children:"Once a Week"}),n.jsxs("div",{className:"text-xl font-bold text-purple-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5203:1974","data-source-comp":"App",children:[xe.filter(s=>{const i=(s.frequency||"").toLowerCase();return(i.includes("weekly")||i.includes("once"))&&!i.includes("bi")}).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-purple-600","data-source-loc":"weekly_chores_household_hub.tsx:5203:2208","data-source-comp":"App",children:"Saturday & Sunday deep tasks"})]}),n.jsxs("div",{className:"p-3 bg-amber-50/70 rounded-xl border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5203:2295","data-source-comp":"App",children:[n.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5203:2366","data-source-comp":"App",children:"Bi-Weekly Tasks"}),n.jsxs("div",{className:"text-xl font-bold text-amber-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5203:2474","data-source-comp":"App",children:[xe.filter(s=>s.frequency.toLowerCase().includes("bi-weekly")||s.frequency.toLowerCase().includes("biweekly")).length," Tasks"]}),n.jsx("span",{className:"text-[11px] text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5203:2682","data-source-comp":"App",children:"Split Curbside Recycling & Waste"})]})]}),n.jsxs("div",{className:"pt-2 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5203:2778","data-source-comp":"App",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5203:2810","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5203:2891","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search chores by name, category, group, or notes...",value:Kr,onChange:s=>Fs(s.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5203:3006","data-source-comp":"App"}),Kr&&n.jsx("button",{onClick:()=>Fs(""),className:"absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5203:3354","data-source-comp":"App",children:n.jsx(zt,{className:"w-3.5 h-3.5"})})]}),n.jsxs("div",{className:"flex items-center gap-1.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5203:3523","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-500 font-semibold mr-1","data-source-loc":"weekly_chores_household_hub.tsx:5203:3574","data-source-comp":"App",children:"Frequency:"}),n.jsx("button",{onClick:()=>Fn("ALL"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Nr==="ALL"?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5203:3643","data-source-comp":"App",children:"All"}),n.jsx("button",{onClick:()=>Fn("Daily"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Nr==="Daily"?"bg-blue-600 text-white":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5203:3887","data-source-comp":"App",children:"Daily"}),n.jsx("button",{onClick:()=>Fn("Once a Week"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Nr==="Once a Week"?"bg-purple-600 text-white":"bg-purple-50 text-purple-700 hover:bg-purple-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5203:4132","data-source-comp":"App",children:"Weekly"}),n.jsx("button",{onClick:()=>Fn("Bi-Weekly"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Nr==="Bi-Weekly"?"bg-amber-600 text-white":"bg-amber-50 text-amber-800 hover:bg-amber-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5203:4398","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5203:4671","data-source-comp":"App",children:[n.jsx("span",{className:"text-slate-400 font-semibold mr-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5203:4743","data-source-comp":"App",children:"Category:"}),n.jsxs("button",{onClick:()=>Ls("ALL"),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${Ze==="ALL"?"bg-slate-800 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5203:4820","data-source-comp":"App",children:["All Categories (",xe.length,")"]}),An.map(s=>{const i=xe.filter(u=>u.category.toLowerCase()===s.name.toLowerCase()).length;return n.jsxs("button",{onClick:()=>Ls(s.name),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${Ze===s.name?"ring-2 ring-slate-800 shadow-xs":"opacity-85 hover:opacity-100"} ${s.bg} ${s.text} ${s.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5205:20","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5205:339","data-source-comp":"App",children:s.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5205:362","data-source-comp":"App",children:s.name}),n.jsxs("span",{className:"text-[10px] opacity-75","data-source-loc":"weekly_chores_household_hub.tsx:5205:385","data-source-comp":"App",children:["(",i,")"]})]},s.id)})]})]}),n.jsxs("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5206:26","data-source-comp":"App",children:[n.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5206:106","data-source-comp":"App",children:[n.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5206:150","data-source-comp":"App",children:n.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5206:273","data-source-comp":"App",children:[n.jsx("th",{className:"p-3 w-10 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5206:277","data-source-comp":"App",children:"#"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5206:320","data-source-comp":"App",children:"Chore / Task"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5206:357","data-source-comp":"App",children:"Category"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5206:390","data-source-comp":"App",children:"Frequency"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5206:424","data-source-comp":"App",children:"Target Day(s)"}),n.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5206:462","data-source-comp":"App",children:"Rotation Group"}),n.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5206:501","data-source-comp":"App",children:"Actions"})]})}),n.jsx("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5206:557","data-source-comp":"App",children:fo.map((s,i)=>{const u=Is===s.index_,m=An.find(R=>R.name.toLowerCase()===(s.category||"").toLowerCase())||An[3],p=u&&(We!=null&&We.category)&&An.find(R=>R.name.toLowerCase()===We.category.toLowerCase())||m,h=(s.frequency||"").toLowerCase().includes("bi")?"Bi-Weekly":(s.frequency||"").toLowerCase().includes("once")||(s.frequency||"").toLowerCase().includes("weekly")?"Once a Week":"Daily",d=u&&(We!=null&&We.frequency)?We.frequency:h,x=s.targetDay||(h==="Daily"?"Mon – Sun":h==="Bi-Weekly"?"Thursday Evening":"Saturday"),f=u&&(We==null?void 0:We.targetDay)!==void 0?We.targetDay:x,C=Br(f),D=u&&Array.isArray(We==null?void 0:We.selectedTargetDays)?We.selectedTargetDays:C.selectedDays,T=u&&(We==null?void 0:We.customTargetEnabled)!==void 0?!!We.customTargetEnabled:C.customEnabled,b=u&&(We==null?void 0:We.customTargetText)!==void 0?We.customTargetText:C.customText,N=u&&Lt===s.index_,W=s.rotationGroup||"Non-Casual",z=u&&(We!=null&&We.rotationGroup)?We.rotationGroup:W,F=()=>{const R=((We==null?void 0:We.task)||"").trim()||s.task,Z=((We==null?void 0:We.notes)||"").trim(),ne=qr(D,T,b);Ar(null),Ta(s.index_,{oldTask:s.task,task:R,category:p.name,frequency:d,targetDay:ne,rotationGroup:z,notes:Z})};return n.jsxs(so.Fragment,{children:[n.jsxs("tr",{className:`transition ${i>0?"border-t border-slate-200":""} ${u?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5244:75","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-center align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5244:208","data-source-comp":"App",children:n.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5244:266","data-source-comp":"App",children:i+1})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5244:416","data-source-comp":"App",children:u?n.jsx("input",{type:"text",value:(We==null?void 0:We.task)||"",onChange:R=>Rt(Z=>({...Z,task:R.target.value})),onKeyDown:R=>{R.key==="Enter"&&F(),R.key==="Escape"&&(Ar(null),Sr(null),Rt(null))},className:"w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5244:518","data-source-comp":"App"}):n.jsx("span",{className:"font-bold text-slate-900 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5244:1055","data-source-comp":"App",children:s.task})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5244:1133","data-source-comp":"App",children:u?n.jsx("select",{value:p.name,onChange:R=>Rt(Z=>({...Z,category:R.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${p.bg} ${p.text} ${p.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5244:1192","data-source-comp":"App",children:An.map(R=>n.jsxs("option",{value:R.name,"data-source-loc":"weekly_chores_household_hub.tsx:5244:1545","data-source-comp":"App",children:[R.icon," ",R.name]},R.id))}):n.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${m.bg} ${m.text} ${m.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5244:1623","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5244:1780","data-source-comp":"App",children:m.icon}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5244:1809","data-source-comp":"App",children:m.name})]})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5244:1851","data-source-comp":"App",children:u?n.jsxs("select",{value:d,onChange:R=>{const Z=R.target.value,ne=Z==="Daily"?"Mon – Sun":Z==="Bi-Weekly"?"Thursday Evening":f==="Mon – Sun"?"Saturday":f,Ee=Br(ne);Rt($e=>({...$e,frequency:Z,targetDay:ne,selectedTargetDays:Ee.selectedDays,customTargetEnabled:Ee.customEnabled,customTargetText:Ee.customText}))},className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${d==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":d==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5244:1910","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5256:354","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5256:390","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5256:438","data-source-comp":"App",children:"Bi-Weekly"})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${h==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":h==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5256:494","data-source-comp":"App",children:h})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle relative","data-source-loc":"weekly_chores_household_hub.tsx:5256:806","data-source-comp":"App",children:u?n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:()=>Ar(N?null:s.index_),className:"min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5256:876","data-source-comp":"App",children:[n.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5256:1232","data-source-comp":"App",children:qr(D,T,b)}),n.jsx(ad,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${N?"rotate-180 text-indigo-600":""}`})]}),N&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Ar(null),"data-source-loc":"weekly_chores_household_hub.tsx:5256:1516","data-source-comp":"App"}),n.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5256:1601","data-source-comp":"App",children:[n.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5256:1726","data-source-comp":"App",children:"Target Day(s)"}),Vt.map(R=>{const Z=D.includes(R);return n.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5258:22","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:Z,onChange:()=>{const ne=new Set(D);ne.has(R)?ne.delete(R):ne.add(R);const Ee=Vt.filter(at=>ne.has(at)),$e=qr(Ee,T,b);Rt(at=>({...at,selectedTargetDays:Ee,targetDay:$e}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5258:162","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${Z?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5269:122","data-source-comp":"App",children:R})]},R)}),n.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5270:16","data-source-comp":"App",children:[n.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5270:93","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:T,onChange:R=>{const Z=R.target.checked,ne=qr(D,Z,b);Rt(Ee=>({...Ee,customTargetEnabled:Z,targetDay:ne}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5270:165","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${T?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5278:120","data-source-comp":"App",children:"Custom"})]}),n.jsx("input",{type:"text",value:b,onChange:R=>{const Z=R.target.value,ne=qr(D,!0,Z);Rt(Ee=>({...Ee,customTargetEnabled:!0,customTargetText:Z,targetDay:ne}))},onKeyDown:R=>{R.key==="Enter"&&Ar(null)},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5278:252","data-source-comp":"App"})]})]})]})]}):n.jsx("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5287:327","data-source-comp":"App",children:x})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5287:502","data-source-comp":"App",children:u?n.jsxs("select",{value:z,onChange:R=>Rt(Z=>({...Z,rotationGroup:R.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${z==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":z==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":z==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":z==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5287:561","data-source-comp":"App",children:[n.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5287:1181","data-source-comp":"App",children:[n.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5287:1223","data-source-comp":"App",children:"Non-Casual"}),n.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5287:1269","data-source-comp":"App",children:"Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5287:1303","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5287:1343","data-source-comp":"App",children:"All"})]}),n.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5287:1386","data-source-comp":"App",children:g.map(R=>n.jsx("option",{value:R.name,"data-source-loc":"weekly_chores_household_hub.tsx:5287:1447","data-source-comp":"App",children:R.name},R.id))})]}):n.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${W==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":W==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":W==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":W==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5287:1523","data-source-comp":"App",children:W})}),n.jsx("td",{className:"px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5287:1987","data-source-comp":"App",children:n.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5287:2062","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>Vo(s,"up"),disabled:i===0,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore up","data-source-loc":"weekly_chores_household_hub.tsx:5287:2122","data-source-comp":"App",children:n.jsx(vu,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Vo(s,"down"),disabled:i===fo.length-1,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore down","data-source-loc":"weekly_chores_household_hub.tsx:5287:2404","data-source-comp":"App",children:n.jsx(_u,{className:"w-3.5 h-3.5"})}),u?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:F,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5287:2737","data-source-comp":"App",children:n.jsx(sd,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>{Ar(null),Sr(null),Rt(null)},className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5287:2967","data-source-comp":"App",children:n.jsx(zt,{className:"w-3.5 h-3.5"})})]}):n.jsx("button",{type:"button",onClick:()=>{const R=Br(x);Ar(null),Sr(s.index_),Rt({task:s.task||"",category:m.name,frequency:h,targetDay:x,selectedTargetDays:R.selectedDays,customTargetEnabled:R.customEnabled,customTargetText:R.customText,rotationGroup:W,notes:s.notes||""})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.task}`,"data-source-loc":"weekly_chores_household_hub.tsx:5287:3275","data-source-comp":"App",children:n.jsx(Wo,{className:"w-3.5 h-3.5"})}),n.jsx("button",{type:"button",onClick:()=>Uo(s.index_,s.task),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove "${s.task}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5302:195","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})})]}),n.jsxs("tr",{className:`transition ${u?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5302:472","data-source-comp":"App",children:[n.jsx("td",{className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5302:559","data-source-comp":"App"}),n.jsx("td",{colSpan:6,className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5302:592","data-source-comp":"App",children:u?n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5302:648","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-[11px] text-indigo-800 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5302:806","data-source-comp":"App",children:"Instructions / Notes:"}),n.jsx("input",{type:"text",value:(We==null?void 0:We.notes)||"",onChange:R=>Rt(Z=>({...Z,notes:R.target.value})),onKeyDown:R=>{R.key==="Enter"&&F(),R.key==="Escape"&&(Sr(null),Rt(null))},placeholder:"Add operational instructions or routine notes...",className:"w-full text-xs text-slate-800 bg-transparent focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5302:899","data-source-comp":"App"})]}):n.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5302:1380","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5302:1502","data-source-comp":"App",children:"Instructions / Notes:"})," ",s.notes||n.jsx("span",{className:"italic text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5302:1591","data-source-comp":"App",children:"No instructions"})]})})]})]},`${s.index_||s.task}-${i}`)})})]}),fo.length===0&&n.jsxs("div",{className:"p-8 text-center bg-white text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5303:68","data-source-comp":"App",children:[n.jsx(Sl,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),n.jsx("p",{className:"font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5303:185","data-source-comp":"App",children:"No chores match the current filters"}),xe.length===0?n.jsx("button",{onClick:()=>xo(!0),className:"mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5303:285","data-source-comp":"App",children:"Add First Chore"}):n.jsx("button",{onClick:()=>{Ls("ALL"),Fn("ALL"),Fs("")},className:"mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5303:446","data-source-comp":"App",children:"Reset Filters"})]})]})]})]})})]}),Mt&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5303:751","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5303:857","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5303:989","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5303:1068","data-source-comp":"App",children:[n.jsx("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5303:1073","data-source-comp":"App",children:"Day Schedule"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5303:1172","data-source-comp":"App",children:(()=>{const s=Tt(Mt);return s?new Date(s.year,s.month,s.day).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}):Mt})()})]}),n.jsx("button",{onClick:()=>an(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5313:27","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5313:204","data-source-comp":"App",children:[n.jsxs("span",{className:"text-slate-600 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5313:305","data-source-comp":"App",children:[ge.filter(s=>{var i,u;return(u=(i=et[Mt])==null?void 0:i[s.index_])==null?void 0:u.done}).length," of"," ",ge.length," completed"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5316:72","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>{ge.forEach(s=>{Vr(Mt,s.index_,{done:!0})})},className:"px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5316:100","data-source-comp":"App",children:"Mark All Done"}),n.jsx("button",{onClick:()=>{ge.forEach(s=>{Vr(Mt,s.index_,{done:!1})})},className:"px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5322:142","data-source-comp":"App",children:"Reset All"})]})]}),n.jsx("div",{className:"p-4 overflow-y-auto space-y-2 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5328:144","data-source-comp":"App",children:ge.map(s=>{var i,u,m,p,h;const d=Ur(Mt,s.index_),x=Yt(s),f=Tt(Mt),C=f?(new Date(f.year,f.month,f.day).getDay()+6)%7:0,D=s.task||((i=s.row)==null?void 0:i[0])||"",T=D.toLowerCase(),b=T.includes("deep clean")||T.includes("feeding station")?C===6:T.includes("recycling")?C===3&&f&&Et("recycling",f.year,f.month,f.day):T.includes("waste")?C===3&&f&&Et("waste",f.year,f.month,f.day):x.frequency==="daily"?!0:x.frequency==="weekly"?C===x.dayOfWeek:x.frequency==="biweekly"?C===x.dayOfWeek&&f&&Et(D,f.year,f.month,f.day):!1;return n.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col gap-2 transition ${d.done?"bg-emerald-50/60 border-emerald-200":x.frequency==="weekly"&&b?"bg-purple-50/60 border-purple-200":"bg-white border-slate-200 hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5351:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5351:309","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5351:366","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Vr(Mt,s.index_,{done:!d.done}),className:"text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5351:424","data-source-comp":"App",children:d.done?n.jsx(Au,{className:"w-5 h-5 text-emerald-600"}):n.jsx(Du,{className:"w-5 h-5"})}),n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5353:199","data-source-comp":"App",children:[n.jsx("span",{className:`text-xs font-semibold truncate ${d.done?"line-through text-slate-500":"text-slate-800"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5353:250","data-source-comp":"App",children:s.task||s.row[0]}),x.frequency==="weekly"&&n.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${b?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5353:428","data-source-comp":"App",children:b?"1x/wk (Today)":`1x/wk (${(u=Gt[x.dayOfWeek])==null?void 0:u.short})`})]})]}),ir(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded border shrink-0",style:{backgroundColor:((m=Ae(ir(s.task||s.row[0])))==null?void 0:m.bg)||"#FCE7F3",color:((p=Ae(ir(s.task||s.row[0])))==null?void 0:p.text)||"#BE185D",borderColor:(((h=Ae(ir(s.task||s.row[0])))==null?void 0:h.color)||"#ec4899")+"50"},"data-source-loc":"weekly_chores_household_hub.tsx:5353:805","data-source-comp":"App",children:ir(s.task||s.row[0])}):nn(s.task||s.row[0])?n.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5357:110","data-source-comp":"App",children:"Each Child"}):n.jsxs("select",{value:d.who,onChange:N=>Vr(Mt,s.index_,{who:N.target.value}),className:"text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs",style:{color:d.who?"#0f172a":"#334155"},"data-source-loc":"weekly_chores_household_hub.tsx:5357:244","data-source-comp":"App",children:[n.jsx("option",{value:"",style:{color:"#64748b",backgroundColor:"#FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5361:16","data-source-comp":"App",children:"Unassigned"}),n.jsx("optgroup",{label:"Full-Time Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5364:35","data-source-comp":"App",children:g.filter(N=>N.type==="regular").map(N=>n.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5368:74","data-source-comp":"App",children:[N.name,N.role?` (${N.role})`:""]},N.id))}),n.jsx("optgroup",{label:"Bi-Weekly Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5372:76","data-source-comp":"App",children:g.filter(N=>N.type==="biweekly").map(N=>{const W=Tt(Mt),z=W?ao(W.year,W.month,W.day):null,F=z!=null&&z.isArrivalDay?" (Arrives 5 PM)":z!=null&&z.isDepartureDay?" (Leaves 5 PM)":z!=null&&z.isPresent?" (Here)":" (Away)";return n.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5380:22","data-source-comp":"App",children:[N.name,F]},N.id)})}),n.jsx("optgroup",{label:"Casual Assignees (Lesser Scale)",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5385:27","data-source-comp":"App",children:g.filter(N=>N.type==="casual").map(N=>n.jsx("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5389:73","data-source-comp":"App",children:N.name},N.id))}),n.jsxs("optgroup",{label:"Special Groups",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5393:46","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual",style:{color:"#4338CA",backgroundColor:"#FFFFFF",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5397:16","data-source-comp":"App",children:"All Non-Casual"}),n.jsx("option",{value:"Each Child",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5401:39","data-source-comp":"App",children:"Each Child"}),n.jsx("option",{value:"All Kids",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5405:35","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Thom / Meghan",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5409:33","data-source-comp":"App",children:"Thom / Meghan"}),n.jsx("option",{value:"Parents",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5413:38","data-source-comp":"App",children:"Parents"})]}),d.who&&!g.some(N=>N.name===d.who)&&!["All Non-Casual","Each Child","All Kids","Thom / Meghan","Parents"].includes(d.who)&&n.jsx("option",{value:d.who,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5417:207","data-source-comp":"App",children:d.who})]})]}),nn(s.task||s.row[0])&&!ir(s.task||s.row[0])&&n.jsxs("div",{className:"bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5421:144","data-source-comp":"App",children:[n.jsxs("div",{className:"text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5421:218","data-source-comp":"App",children:[n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5421:312","data-source-comp":"App",children:"Individual Bedrooms to Clean:"}),n.jsx("span",{className:"text-[10px] text-pink-600 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5421:354","data-source-comp":"App",children:"Each child cleans own space"})]}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5421:450","data-source-comp":"App",children:Ps(Mt).map(N=>{var W;const z=!!((W=d.kidsDone)!=null&&W[N]),F=Ae(N);return n.jsxs("button",{type:"button",onClick:()=>On(Mt,s.index_,N),className:`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${z?"bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through":"bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5425:22","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-1.5 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5425:379","data-source-comp":"App",children:[n.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(F==null?void 0:F.color)||"#ec4899"},"data-source-loc":"weekly_chores_household_hub.tsx:5425:431","data-source-comp":"App"}),n.jsxs("span",{className:"font-semibold truncate","data-source-loc":"weekly_chores_household_hub.tsx:5427:20","data-source-comp":"App",children:[N,"'s Room"]})]}),n.jsx("span",{className:"font-bold ml-1","data-source-loc":"weekly_chores_household_hub.tsx:5427:90","data-source-comp":"App",children:z?"✓":"○"})]},N)})})]})]},s.index_)})}),n.jsx("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end","data-source-loc":"weekly_chores_household_hub.tsx:5429:20","data-source-comp":"App",children:n.jsx("button",{onClick:()=>an(null),className:"px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5429:96","data-source-comp":"App",children:"Done"})})]})}),ga&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5429:309","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5429:415","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5429:520","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5429:630","data-source-comp":"App",children:[n.jsx(gs,{className:"w-5 h-5 text-amber-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5429:718","data-source-comp":"App",children:"Auto-Assign Monthly Template"})]}),n.jsx("button",{onClick:()=>co(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5429:793","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5429:974","data-source-comp":"App",children:[n.jsxs("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5429:1013","data-source-comp":"App",children:["Distribute daily tasks evenly across household occupants so"," ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5429:1107","data-source-comp":"App",children:"everyone has a chore on each day"})," instead of one person handling all tasks, for"," ",n.jsxs("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5429:1211","data-source-comp":"App",children:[Qr[st]," ",gt]}),"."]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5429:1280","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-slate-800 block mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5429:1285","data-source-comp":"App",children:"Full-Time Occupants (Included in Daily Chore Distribution):"}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5429:1409","data-source-comp":"App",children:g.filter(s=>s.type==="regular").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5429:1527","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-indigo-600 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5429:1653","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5429:1775","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5431:16","data-source-comp":"App",children:s.name}),s.role&&n.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5431:87","data-source-comp":"App",children:["(",s.role==="Overseer Supreme"?"Parent":"Kid",")"]})]},s.id))}),n.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5431:208","data-source-comp":"App",children:[n.jsx("label",{className:"font-bold text-pink-800 block","data-source-loc":"weekly_chores_household_hub.tsx:5431:266","data-source-comp":"App",children:"Bi-Weekly Occupants (Active During Stay Weeks Only):"}),n.jsx("span",{className:"text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded","data-source-loc":"weekly_chores_household_hub.tsx:5431:375","data-source-comp":"App",children:"Back Sunday, Oct. 18 @ 5:00 PM"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5431:536","data-source-comp":"App",children:g.filter(s=>s.type==="biweekly").map(s=>n.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5431:655","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-pink-600 focus:ring-pink-500","data-source-loc":"weekly_chores_household_hub.tsx:5431:793","data-source-comp":"App"}),n.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5431:911","data-source-comp":"App"}),n.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5433:16","data-source-comp":"App",children:s.name}),n.jsx("span",{className:"text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5433:76","data-source-comp":"App",children:"Bi-weekly only"})]},s.id))}),n.jsxs("div",{className:"p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5433:196","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5433:268","data-source-comp":"App",children:[n.jsx("span",{className:"font-bold text-sky-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5433:324","data-source-comp":"App",children:"Casual Members (Manual Add-Ins Only):"}),n.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300","data-source-loc":"weekly_chores_household_hub.tsx:5433:417","data-source-comp":"App",children:"Excluded from Auto-Assign"})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5433:565","data-source-comp":"App",children:g.filter(s=>s.type==="casual").map(s=>n.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5433:680","data-source-comp":"App",children:[n.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5433:842","data-source-comp":"App"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5435:16","data-source-comp":"App",children:s.name})]},s.id))}),n.jsx("p",{className:"text-[11px] text-sky-700 mt-2 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5435:52","data-source-comp":"App",children:'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'})]})]}),n.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5435:275","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-pink-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5435:436","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5435:442","data-source-comp":"App",children:"Daily Distribution:"})," Each day's tasks are handed out so all available family members (including Thom & Meghan as Overseer Supreme = Parent) share the daily chores evenly. ",qe," are included during stay weeks and skipped on away weeks."]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5435:735","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>co(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5435:817","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=g.filter(u=>{var m;return u.type==="regular"&&((m=document.getElementById(`assignee-${u.id}`))==null?void 0:m.checked)}).map(u=>u.name),i=g.filter(u=>{var m;return u.type==="biweekly"&&((m=document.getElementById(`assignee-${u.id}`))==null?void 0:m.checked)}).map(u=>u.name);Hs(s,i)},className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5435:1007","data-source-comp":"App",children:"Distribute Daily Chores"})]})]})}),(wa||Cs)&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5445:231","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5445:337","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5445:469","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5445:548","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white","data-source-loc":"weekly_chores_household_hub.tsx:5445:589","data-source-comp":"App",children:n.jsx(Sl,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5445:721","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5445:726","data-source-comp":"App",children:"Add / Edit Master Chores"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5445:791","data-source-comp":"App",children:"Add new tasks, edit existing chores, or remove from the schedule"})]})]}),n.jsx("button",{onClick:()=>{Or(!1),En(!1),ln([]),kr(null)},className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5445:913","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-100/70 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5450:143","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{ba("add"),kr(null)},className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${dr==="add"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5450:211","data-source-comp":"App",children:[n.jsx(ys,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5453:259","data-source-comp":"App",children:"+ Add New Chore"})]}),n.jsxs("button",{type:"button",onClick:()=>ba("edit"),className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${dr==="edit"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5453:296","data-source-comp":"App",children:[n.jsx(Wo,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5453:604","data-source-comp":"App",children:["✏️ Edit Chore (",ge.length,")"]})]})]}),dr==="add"&&n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5453:708","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5453:762","data-source-comp":"App",children:[n.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5453:767","data-source-comp":"App",children:["Chore / Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5453:859","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-chore-title-input",placeholder:"e.g. Clean oven, sweep patio, sanitize counters...",autoFocus:!0,onKeyDown:s=>{if(s.key==="Enter"){const i=document.getElementById("new-chore-frequency"),u=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who");bo(s.currentTarget.value,{frequency:i?i.value:"daily",dayOfWeek:u?Number(u.value):5,defaultWho:m?m.value:""})}},className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5453:911","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5464:159","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5464:222","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5464:227","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{id:"new-chore-frequency",defaultValue:"daily",onChange:s=>{const i=document.getElementById("day-select-container");i&&(i.style.display=s.target.value==="weekly"?"block":"none")},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5464:299","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5469:143","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5469:191","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5469:234","data-source-comp":"App",children:"Bi-Weekly (Curbside schedule)"})]})]}),n.jsxs("div",{id:"day-select-container",style:{display:"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5469:312","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:14","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{id:"new-chore-day",defaultValue:"5",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:87","data-source-comp":"App",children:Gt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5471:286","data-source-comp":"App",children:["Every ",s.name]},s.name))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5471:367","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:430","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:435","data-source-comp":"App",children:"Category"}),n.jsxs("select",{id:"new-chore-category",defaultValue:"Household",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:506","data-source-comp":"App",children:[n.jsx("option",{value:"Household","data-source-loc":"weekly_chores_household_hub.tsx:5471:692","data-source-comp":"App",children:"Household"}),n.jsx("option",{value:"Kitchen","data-source-loc":"weekly_chores_household_hub.tsx:5471:736","data-source-comp":"App",children:"Kitchen"}),n.jsx("option",{value:"Pet Care","data-source-loc":"weekly_chores_household_hub.tsx:5471:776","data-source-comp":"App",children:"Pet Care"}),n.jsx("option",{value:"Bedrooms","data-source-loc":"weekly_chores_household_hub.tsx:5471:818","data-source-comp":"App",children:"Bedrooms"}),n.jsx("option",{value:"Common Areas","data-source-loc":"weekly_chores_household_hub.tsx:5471:860","data-source-comp":"App",children:"Common Areas"}),n.jsx("option",{value:"Administration","data-source-loc":"weekly_chores_household_hub.tsx:5471:910","data-source-comp":"App",children:"Administration"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:979","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:984","data-source-comp":"App",children:"Default Rotation Group"}),n.jsxs("select",{id:"new-chore-who",defaultValue:"All Non-Casual",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:1069","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5471:1255","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5471:1348","data-source-comp":"App",children:"Rotating / Unassigned"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5471:1395","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5471:1447","data-source-comp":"App",children:"All Kids (Shared)"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5471:1498","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5471:1556","data-source-comp":"App",children:"Full-Time Roster"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5471:1614","data-source-comp":"App",children:"Parents Only"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5471:1659","data-source-comp":"App",children:"All Occupants"}),g.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5471:1735","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]}),n.jsxs("p",{className:"text-[10px] text-slate-500 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5471:1817","data-source-comp":"App",children:["💡 ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:1891","data-source-comp":"App",children:"All Non-Casual:"})," Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."]})]})]}),n.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5471:2065","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:2239","data-source-comp":"App",children:"Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory."})]})]}),(dr==="edit"||dr==="remove")&&n.jsx("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:2463","data-source-comp":"App",children:cr!==null?n.jsxs("div",{className:"space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5471:2607","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5471:2642","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>kr(null),className:"flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5471:2724","data-source-comp":"App",children:[n.jsx(Nu,{className:"w-4 h-4"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:2923","data-source-comp":"App",children:"Back to All Chores"})]}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase","data-source-loc":"weekly_chores_household_hub.tsx:5471:2963","data-source-comp":"App",children:["Editing Item #",ge.findIndex(s=>s.index_===cr)+1]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:3117","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:3122","data-source-comp":"App",children:["Chore Title / Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:3207","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:uo,onChange:s=>Oo(s.target.value),className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold",placeholder:"Chore task title...",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5471:3259","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5471:3554","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:3609","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:3614","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:ur,onChange:s=>dn(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:3686","data-source-comp":"App",children:[n.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5471:3894","data-source-comp":"App",children:"Daily (Every Day)"}),n.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5471:3942","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5471:3985","data-source-comp":"App",children:"Bi-Weekly"})]})]}),ur==="weekly"?n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:4073","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:4078","data-source-comp":"App",children:"Target Day"}),n.jsx("select",{value:Po,onChange:s=>As(Number(s.target.value)),className:"w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:4151","data-source-comp":"App",children:Gt.map((s,i)=>n.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5471:4399","data-source-comp":"App",children:["Every ",s.name]},s.name))})]}):n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:4477","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:4482","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:Ko,onChange:s=>Bo(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:4559","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5471:4785","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5471:4878","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5471:4930","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5471:4984","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5471:5036","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5471:5078","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5471:5118","data-source-comp":"App",children:"Full-Time Roster"}),g.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5471:5200","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),ur==="weekly"&&n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:5326","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5471:5331","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:Ko,onChange:s=>Bo(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5471:5408","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5471:5634","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5471:5727","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5471:5779","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5471:5833","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5471:5885","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5471:5927","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5471:5967","data-source-comp":"App",children:"Full-Time Roster"}),g.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5471:6049","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]}),n.jsxs("div",{className:"p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5471:6138","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:6324","data-source-comp":"App",children:[n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:6330","data-source-comp":"App",children:"Rotation Group Clarification:"})," ",n.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:6381","data-source-comp":"App",children:"All Non-Casual"})," covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. ",n.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:6507","data-source-comp":"App",children:"No equivalent currently exists among the other groups"})," (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."]})]}),n.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5471:6728","data-source-comp":"App",children:[n.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5471:6830","data-source-comp":"App",children:"List Order Position:"}),n.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5471:6904","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>Vo(cr,"up"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5471:6947","data-source-comp":"App",children:[n.jsx(vu,{className:"w-3.5 h-3.5"})," Move Up"]}),n.jsxs("button",{type:"button",onClick:()=>Vo(cr,"down"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5471:7241","data-source-comp":"App",children:[n.jsx(_u,{className:"w-3.5 h-3.5"})," Move Down"]})]})]}),n.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5471:7553","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5471:7653","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900","data-source-loc":"weekly_chores_household_hub.tsx:5471:7658","data-source-comp":"App",children:"Remove This Chore"}),n.jsx("div",{className:"text-[11px] text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5471:7722","data-source-comp":"App",children:"Delete this chore from the schedule and spreadsheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{Ft(cr,uo),kr(null)},className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5471:7828","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5474:190","data-source-comp":"App",children:"Remove Chore"})]})]})]}):n.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5474:298","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5474:325","data-source-comp":"App",children:[n.jsxs("div",{className:"relative flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5474:382","data-source-comp":"App",children:[n.jsx(dd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),n.jsx("input",{type:"text",placeholder:"Search or filter chores to edit or remove...",value:Ns,onChange:s=>Ss(s.target.value),className:"w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5474:490","data-source-comp":"App"})]}),n.jsx("button",{type:"button",onClick:()=>{rr.length===ge.length?ln([]):ln(ge.map(s=>s.index_))},className:"text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap","data-source-loc":"weekly_chores_household_hub.tsx:5474:815","data-source-comp":"App",children:rr.length===ge.length?"Deselect All":"Select All"})]}),rr.length>0&&n.jsxs("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5480:288","data-source-comp":"App",children:[n.jsxs("span",{className:"font-bold text-rose-800","data-source-loc":"weekly_chores_household_hub.tsx:5480:398","data-source-comp":"App",children:[rr.length," chore(s) selected"]}),n.jsxs("button",{type:"button",onClick:fn,className:"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5480:499","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5480:718","data-source-comp":"App",children:"Remove Selected"})]})]}),n.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto","data-source-loc":"weekly_chores_household_hub.tsx:5480:762","data-source-comp":"App",children:ge.filter(s=>Ns?(s.task||s.row[0]||"").toLowerCase().includes(Ns.toLowerCase()):!0).map((s,i)=>{var u;const m=rr.includes(s.index_),p=Yt(s),h=s.task||s.row[0]||"Chore";return n.jsxs("div",{className:"p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5485:20","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5485:136","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:m,onChange:()=>{ln(d=>m?d.filter(x=>x!==s.index_):[...d,s.index_])},className:"rounded text-rose-600 focus:ring-rose-500",title:"Select for batch removal","data-source-loc":"weekly_chores_household_hub.tsx:5485:194","data-source-comp":"App"}),n.jsxs("div",{className:"min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5487:105","data-source-comp":"App",children:[n.jsxs("span",{className:"font-semibold text-slate-800 truncate block","data-source-loc":"weekly_chores_household_hub.tsx:5487:137","data-source-comp":"App",children:[i+1,". ",h]}),n.jsx("div",{className:"flex items-center gap-1.5 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5487:233","data-source-comp":"App",children:n.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5487:283","data-source-comp":"App",children:p.frequency==="weekly"?`Once a week (${(u=Gt[p.dayOfWeek])==null?void 0:u.name})`:"Daily task"})})]})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5487:481","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>qs(s),className:"px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition",title:"Edit chore details","data-source-loc":"weekly_chores_household_hub.tsx:5487:531","data-source-comp":"App",children:[n.jsx(Wo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5487:793","data-source-comp":"App",children:"Edit"})]}),n.jsx("button",{type:"button",onClick:()=>Ft(s.index_,h),className:"p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition",title:`Remove "${h}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5487:819","data-source-comp":"App",children:n.jsx(oo,{className:"w-3.5 h-3.5"})})]})]},s.index_)})})]})}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5488:34","data-source-comp":"App",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5488:127","data-source-comp":"App",children:[ge.length," active master chores"]}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5488:234","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>{Or(!1),En(!1),ln([]),kr(null)},className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5488:262","data-source-comp":"App",children:"Close"}),dr==="add"?n.jsx("button",{type:"button",onClick:()=>{const s=document.getElementById("new-chore-title-input"),i=document.getElementById("new-chore-frequency"),u=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who"),p=document.getElementById("new-chore-category");s&&s.value.trim()&&bo(s.value,{frequency:i?i.value:"daily",dayOfWeek:u?Number(u.value):5,defaultWho:m?m.value:"All Non-Casual",category:p?p.value:"Household"})},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5493:176","data-source-comp":"App",children:"Add Chore"}):cr!==null?n.jsx("button",{type:"button",onClick:ko,className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5507:181","data-source-comp":"App",children:"Save Changes"}):rr.length>0&&n.jsxs("button",{type:"button",onClick:fn,className:"px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5507:410","data-source-comp":"App",children:["Remove Selected (",rr.length,")"]})]})]})]})}),_a&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5507:683","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5507:789","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5507:894","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5507:1007","data-source-comp":"App",children:[n.jsx(tp,{className:"w-5 h-5 text-purple-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5507:1096","data-source-comp":"App",children:"Combine Chores"})]}),n.jsx("button",{onClick:()=>ho(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5507:1157","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5507:1335","data-source-comp":"App",children:[n.jsx("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5507:1374","data-source-comp":"App",children:"Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly."}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5507:1544","data-source-comp":"App",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5507:1549","data-source-comp":"App",children:"Suggested Combinations:"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5507:1674","data-source-comp":"App",children:[n.jsxs("button",{type:"button",onClick:()=>{ge[4]&&ge[5]&&(Rn(ge[4].index_),Ts(ge[5].index_),mo("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)"))},className:"p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5507:1729","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-purple-900 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5513:123","data-source-comp":"App",children:[n.jsx(gs,{className:"w-3 h-3 text-purple-600"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5513:238","data-source-comp":"App",children:"Chores #5 & #6 (Dinner)"})]}),n.jsx("div",{className:"text-[10px] text-purple-700 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5513:280","data-source-comp":"App",children:"Dinner Dishes + Put away food"})]}),n.jsxs("button",{type:"button",onClick:()=>{ge[0]&&ge[1]&&(Rn(ge[0].index_),Ts(ge[1].index_),mo("Tidy bedroom & vacuum floors, bring laundry downstairs"))},className:"p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5513:385","data-source-comp":"App",children:[n.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5519:117","data-source-comp":"App",children:[n.jsx(gs,{className:"w-3 h-3 text-slate-500"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5519:230","data-source-comp":"App",children:"Rows 5 & 6 (Bedroom)"})]}),n.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5519:269","data-source-comp":"App",children:"Tidy up bedroom + Vacuum floors"})]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5519:387","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5519:392","data-source-comp":"App",children:"Primary Chore (Retains Position):"}),n.jsx("select",{value:Bt??"",onChange:s=>{const i=Number(s.target.value);Rn(i);const u=ge.find(p=>p.index_===i),m=ge.find(p=>p.index_===hr);u&&m&&mo(`${u.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5519:488","data-source-comp":"App",children:ge.map((s,i)=>n.jsxs("option",{value:s.index_,"data-source-loc":"weekly_chores_household_hub.tsx:5527:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5527:293","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5527:298","data-source-comp":"App",children:"Chore to Merge In & Remove:"}),n.jsx("select",{value:hr??"",onChange:s=>{const i=Number(s.target.value);Ts(i);const u=ge.find(p=>p.index_===Bt),m=ge.find(p=>p.index_===i);u&&m&&mo(`${u.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5527:388","data-source-comp":"App",children:ge.map((s,i)=>n.jsxs("option",{value:s.index_,disabled:s.index_===Bt,"data-source-loc":"weekly_chores_household_hub.tsx:5535:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]," ",s.index_===Bt?"(Cannot merge into itself)":""]},s.index_))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5535:404","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5535:409","data-source-comp":"App",children:"New Combined Chore Title:"}),n.jsx("input",{type:"text",value:ka,onChange:s=>mo(s.target.value),placeholder:"Enter name for the combined chore...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5535:497","data-source-comp":"App"})]}),n.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5535:807","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-purple-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5535:990","data-source-comp":"App",children:"The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5535:1163","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>ho(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5535:1245","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{Bt!==null&&hr!==null&&Bt!==hr&&$s(Bt,hr,ka)},disabled:Bt===hr||!Bt||!hr,className:"px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5535:1432","data-source-comp":"App",children:"Merge & Combine Chores"})]})]})}),va&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5539:307","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5539:413","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5539:518","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5539:598","data-source-comp":"App",children:[n.jsx(fa,{className:"w-5 h-5 text-indigo-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5539:684","data-source-comp":"App",children:"Add Household Member"})]}),n.jsx("button",{onClick:()=>Pr(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5539:751","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5539:931","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:972","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5539:977","data-source-comp":"App",children:["Full Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5539:1046","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",id:"new-member-name",placeholder:"e.g. Alex, Jordan...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5539:1098","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:1328","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5539:1333","data-source-comp":"App",children:"Role"}),n.jsxs("select",{id:"new-member-role",defaultValue:"Minion",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5539:1400","data-source-comp":"App",children:[n.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5539:1597","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),n.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5539:1664","data-source-comp":"App",children:"Minion (Kid)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:1723","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5539:1728","data-source-comp":"App",children:"Occupancy"}),n.jsxs("select",{id:"new-member-residency",defaultValue:"Full-Time",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5539:1800","data-source-comp":"App",children:[n.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5539:2005","data-source-comp":"App",children:"Full-Time (Constant Residency)"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5539:2070","data-source-comp":"App",children:"Bi-Weekly (Half-Time Residency)"}),n.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5539:2136","data-source-comp":"App",children:"Casual (Periodic Residency)"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:2210","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5539:2215","data-source-comp":"App",children:"Special Rotation Groups"}),n.jsx("div",{className:"grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50","data-source-loc":"weekly_chores_household_hub.tsx:5539:2301","data-source-comp":"App",children:["Parents","Kids","Non-Casual","All"].map(s=>{const i=js.includes(s);return n.jsxs("label",{className:"flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5541:20","data-source-comp":"App",children:[n.jsx("input",{type:"checkbox",checked:i,onChange:()=>{po(u=>{const m=new Set(u);return m.has(s)?m.delete(s):m.add(s),["Parents","Kids","Non-Casual","All"].filter(p=>m.has(p))})},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5541:195","data-source-comp":"App"}),n.jsx("span",{className:`text-xs ${i?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5551:120","data-source-comp":"App",children:s})]},s)})})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5552:26","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5552:31","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{id:"new-member-active",defaultValue:"true",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5552:107","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5552:304","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5552:340","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5552:394","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5552:577","data-source-comp":"App",children:"Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5552:715","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>Pr(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5552:797","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>{const s=document.getElementById("new-member-name"),i=document.getElementById("new-member-role"),u=document.getElementById("new-member-residency"),m=document.getElementById("new-member-active");s&&s.value.trim()&&Yo(s.value,i?i.value:"Minion",u?u.value:"Full-Time",js.length>0?js.join(", "):"All",m?m.value==="true":!0)},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5552:986","data-source-comp":"App",children:"Add to Household Roster"})]})]})}),Ws&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5566:202","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5566:308","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-amber-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5566:413","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5566:492","data-source-comp":"App",children:[n.jsx("span",{className:"text-xl","data-source-loc":"weekly_chores_household_hub.tsx:5566:533","data-source-comp":"App",children:"🐾"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5566:579","data-source-comp":"App",children:"Add Household Pet Member"})]}),n.jsx("button",{onClick:()=>$r(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5566:650","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5566:827","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5566:868","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5566:873","data-source-comp":"App",children:["Pet Name ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5566:941","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:nr.name,onChange:s=>Hr(i=>({...i,name:s.target.value})),placeholder:"e.g. Buster, Milo...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5566:993","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5571:205","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5571:210","data-source-comp":"App",children:"Species"}),n.jsxs("select",{value:nr.type,onChange:s=>Hr(i=>({...i,type:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5571:280","data-source-comp":"App",children:[n.jsx("option",{value:"Dog","data-source-loc":"weekly_chores_household_hub.tsx:5576:161","data-source-comp":"App",children:"Dog 🐕"}),n.jsx("option",{value:"Cat","data-source-loc":"weekly_chores_household_hub.tsx:5576:207","data-source-comp":"App",children:"Cat 🐈"}),n.jsx("option",{value:"Bird","data-source-loc":"weekly_chores_household_hub.tsx:5576:253","data-source-comp":"App",children:"Bird 🐦"}),n.jsx("option",{value:"Fish","data-source-loc":"weekly_chores_household_hub.tsx:5576:301","data-source-comp":"App",children:"Fish 🐟"}),n.jsx("option",{value:"Small Pet","data-source-loc":"weekly_chores_household_hub.tsx:5576:349","data-source-comp":"App",children:"Small Pet 🐾"}),n.jsx("option",{value:"Other","data-source-loc":"weekly_chores_household_hub.tsx:5576:407","data-source-comp":"App",children:"Other 🐾"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5576:472","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5576:477","data-source-comp":"App",children:"Feeding Routine"}),n.jsx("input",{type:"text",value:nr.routine,onChange:s=>Hr(i=>({...i,routine:s.target.value})),placeholder:"e.g. Morning & Evening, Twice daily...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5576:555","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5581:213","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5581:218","data-source-comp":"App",children:"Care Responsibilities"}),n.jsx("textarea",{rows:2,value:nr.care,onChange:s=>Hr(i=>({...i,care:s.target.value})),placeholder:"e.g. Feed breakfast & supper, outdoor routine, fresh water bowls...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5581:302","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5586:267","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5586:272","data-source-comp":"App",children:"Active Status"}),n.jsxs("select",{value:nr.active!==!1?"true":"false",onChange:s=>Hr(i=>({...i,active:s.target.value==="true"})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5586:348","data-source-comp":"App",children:[n.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5591:161","data-source-comp":"App",children:"Active"}),n.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5591:197","data-source-comp":"App",children:"Inactive"})]})]}),n.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5591:251","data-source-comp":"App",children:[n.jsx(fs,{className:"w-4 h-4 shrink-0 text-amber-600 mt-0.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5591:430","data-source-comp":"App",children:"Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab."})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5591:558","data-source-comp":"App",children:[n.jsx("button",{onClick:()=>$r(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5591:640","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{onClick:()=>Ml(nr.name,nr.type,nr.routine,nr.care,nr.active!==!1),disabled:!nr.name.trim(),className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5591:826","data-source-comp":"App",children:"Add to Household Pets"})]})]})}),Y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5591:1220","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5591:1326","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5591:1458","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5591:1537","data-source-comp":"App",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5591:1580","data-source-comp":"App",children:n.jsx(Wo,{className:"w-4 h-4"})}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5591:1717","data-source-comp":"App",children:[n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5591:1722","data-source-comp":"App",children:"Edit Chore Details"}),n.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5591:1781","data-source-comp":"App",children:"Update chore name, cadence, rotation group, or notes"})]})]}),n.jsx("button",{onClick:()=>Te(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5591:1891","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5591:2075","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5591:2137","data-source-comp":"App",children:[n.jsxs("label",{className:"block font-bold text-slate-800 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5591:2142","data-source-comp":"App",children:["Chore Task Description ",n.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5591:2224","data-source-comp":"App",children:"*"})]}),n.jsx("input",{type:"text",value:Y.task,onChange:s=>Te(i=>({...i,task:s.target.value})),placeholder:"Chore task description...",className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5591:2276","data-source-comp":"App"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5596:221","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5596:276","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5596:281","data-source-comp":"App",children:"Category"}),n.jsx("select",{value:Y.category||"Household",onChange:s=>Te(i=>({...i,category:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5596:352","data-source-comp":"App",children:An.map(s=>n.jsxs("option",{value:s.id,"data-source-loc":"weekly_chores_household_hub.tsx:5601:172","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5601:251","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5601:256","data-source-comp":"App",children:"Frequency"}),n.jsxs("select",{value:Y.frequency||"Daily",onChange:s=>{const i=s.target.value;Te(u=>({...u,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5601:328","data-source-comp":"App",children:[n.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5610:143","data-source-comp":"App",children:"Daily"}),n.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5610:179","data-source-comp":"App",children:"Once a Week"}),n.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5610:227","data-source-comp":"App",children:"Bi-Weekly"})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5610:286","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5610:291","data-source-comp":"App",children:"Target Day"}),n.jsx("input",{type:"text",value:Y.targetDay||"Mon – Sun",onChange:s=>Te(i=>({...i,targetDay:s.target.value})),placeholder:"e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5610:364","data-source-comp":"App"})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5615:226","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5615:231","data-source-comp":"App",children:"Rotation Group"}),n.jsxs("select",{value:Y.rotationGroup||"All Non-Casual",onChange:s=>Te(i=>({...i,rotationGroup:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5615:308","data-source-comp":"App",children:[n.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5620:145","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),n.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5620:238","data-source-comp":"App",children:"Kids Rotation"}),n.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5620:290","data-source-comp":"App",children:"Parents & Kids"}),n.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5620:344","data-source-comp":"App",children:"All Occupants"}),n.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5620:396","data-source-comp":"App",children:"All Kids"}),n.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5620:438","data-source-comp":"App",children:"Parents"}),n.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5620:478","data-source-comp":"App",children:"Each Child (Own Space)"}),n.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5620:536","data-source-comp":"App",children:"Full-Time Roster"}),g.map(s=>n.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5620:618","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5620:712","data-source-comp":"App",children:[n.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5620:717","data-source-comp":"App",children:"Operational Notes / Routine"}),n.jsx("textarea",{rows:2,value:Y.notes||"",onChange:s=>Te(i=>({...i,notes:s.target.value})),placeholder:"Operational details, supplies, or instructions...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5620:807","data-source-comp":"App"})]}),n.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5625:242","data-source-comp":"App",children:[n.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5625:324","data-source-comp":"App",children:[n.jsx("div",{className:"font-bold text-rose-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5625:329","data-source-comp":"App",children:"Delete this chore"}),n.jsx("div",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5625:401","data-source-comp":"App",children:"Remove from Printable Weekly Schedule"})]}),n.jsxs("button",{type:"button",onClick:()=>{vo(Y.index_,Y.task)},className:"px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5625:494","data-source-comp":"App",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5627:210","data-source-comp":"App",children:"Delete Chore"})]})]})]}),n.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5627:256","data-source-comp":"App",children:[n.jsx("span",{className:"text-[11px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5627:349","data-source-comp":"App",children:"Real-time schedule update"}),n.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5627:438","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>Te(null),className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5627:466","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{_o(Y.index_,{task:Y.task,oldTask:Y.originalTask||Y.task,category:Y.category,frequency:Y.frequency,targetDay:Y.targetDay,rotationGroup:Y.rotationGroup,notes:Y.notes,dayOfWeek:Y.dayOfWeek})},disabled:!((ee=Y.task)!=null&&ee.trim()),className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5627:652","data-source-comp":"App",children:"Save Changes"})]})]})]})}),Ye&&n.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5638:298","data-source-comp":"App",children:n.jsxs("div",{className:"bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5638:404","data-source-comp":"App",children:[n.jsxs("div",{className:"p-4 bg-rose-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5638:509","data-source-comp":"App",children:[n.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5638:587","data-source-comp":"App",children:[n.jsx(oo,{className:"w-5 h-5 text-rose-200"}),n.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5638:672","data-source-comp":"App",children:"Delete Chore"})]}),n.jsx("button",{onClick:()=>nt(null),className:"p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5638:731","data-source-comp":"App",children:n.jsx(zt,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"p-5 text-xs text-slate-700 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5638:911","data-source-comp":"App",children:[n.jsxs("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5638:965","data-source-comp":"App",children:["Are you sure you want to remove ",n.jsxs("strong",{className:"text-slate-900 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5638:1004","data-source-comp":"App",children:['"',Ye.task,'"']})," from the Printable Weekly Schedule?"]}),n.jsx("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5638:1138","data-source-comp":"App",children:"This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately."})]}),n.jsxs("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5638:1375","data-source-comp":"App",children:[n.jsx("button",{type:"button",onClick:()=>nt(null),className:"px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5638:1465","data-source-comp":"App",children:"Cancel"}),n.jsx("button",{type:"button",onClick:()=>{vo(Ye.index_,Ye.task)},className:"px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5638:1641","data-source-comp":"App",children:"Delete Chore"})]})]})})]})}var hp=class extends so.Component{constructor(w){super(w),this.state={hasError:!1}}static getDerivedStateFromError(w){return{hasError:!0}}componentDidCatch(w,_){window.parent.postMessage({type:"ERROR",payload:{error:w?w.toString():"Unknown rendering error"}},"*")}render(){return this.state.hasError?n.jsx("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5664:37","data-source-comp":"ErrorBoundary",children:"Something went wrong."}):this.props.children}};function pp(){const[w,_]=L.useState(()=>{try{const M=localStorage.getItem(ju);if(M){const O=JSON.parse(M);if(Array.isArray(O)&&O.length>0)return O}}catch(M){console.warn("Failed to load sheetData from localStorage:",M)}return jl}),[v,G]=L.useState(!0);L.useEffect(()=>{try{localStorage.setItem(ju,JSON.stringify(w))}catch(M){console.warn("Failed to persist sheetData to localStorage:",M)}},[w]),L.useEffect(()=>{let M=null;const O=we=>{const{type:Re,payload:le}=we.data||{};Re==="SYNC_DATA"&&(M&&(clearInterval(M),M=null),Array.isArray(le)&&le.length>0&&_(le),G(!0))};window.addEventListener("message",O);const B=()=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"CHILD_READY",payload:{version:3}},"*")};B();let re=0;return M=setInterval(()=>{if(re++,re>=50){clearInterval(M),M=null;return}B()},100),()=>{M&&clearInterval(M),window.removeEventListener("message",O)}},[]),L.useEffect(()=>{if(!v)return;const M=performance.now();let O=null;const B=requestAnimationFrame(()=>{O=requestAnimationFrame(()=>{const re=performance.now()-M;window.parent&&window.parent!==window&&window.parent.postMessage({type:"RENDER_COMPLETE",payload:{status:"success",renderDurationMs:re}},"*")})});return()=>{cancelAnimationFrame(B),O&&cancelAnimationFrame(O)}},[w,v]);const P=(M,O,B)=>{_(re=>Array.isArray(re)?re.map((we,Re)=>{if((we.index_!==void 0?we.index_:Re)!==M)return we;const oe=Array.isArray(we.data)?[...we.data]:[],Fe=oe.findIndex(Se=>Se.index_===O);if(Fe>=0){const Se=Array.isArray(oe[Fe].row)?[...oe[Fe].row]:[],Y=Math.max(Se.length,Array.isArray(B)?B.length:0),Te=new Array(Y).fill(null);for(let Ye=0;Ye<Y;Ye++)Te[Ye]=B&&B[Ye]!==void 0?B[Ye]:Se[Ye]!==void 0?Se[Ye]:null;oe[Fe]={...oe[Fe],row:Te}}else{const Se=(B||[]).map(Y=>Y===void 0?null:Y);oe.push({index_:O,row:Se}),oe.sort((Y,Te)=>Y.index_-Te.index_)}return{...we,data:oe}}):re),window.parent&&window.parent!==window&&window.parent.postMessage({type:"PATCH",payload:{rangeIndex_:M,rowIndex_:O,row:B}},"*")},$=(M,O)=>{_(B=>Array.isArray(B)?B.map((re,we)=>{if((re.index_!==void 0?re.index_:we)!==M)return re;const le=(re.data||[]).filter(oe=>oe.index_!==O);return{...re,data:le}}):B),window.parent&&window.parent!==window&&window.parent.postMessage({type:"DELETE",payload:{rangeIndex_:M,rowIndex_:O}},"*")},U=(M,O,B)=>{_(re=>Array.isArray(re)?re.map((we,Re)=>{if((we.index_!==void 0?we.index_:Re)!==M)return we;const oe=Array.isArray(we.data)?[...we.data]:[],Fe=(B||[]).map(Se=>Se===void 0?null:Se);if(O!=null){const Se=oe.map(Y=>Y.index_>=O?{...Y,index_:Y.index_+1}:Y);return Se.push({index_:O,row:Fe}),Se.sort((Y,Te)=>Y.index_-Te.index_),{...we,data:Se}}else{const Se=oe.reduce((Y,Te)=>Math.max(Y,Te.index_||0),0);return oe.push({index_:Se+1,row:Fe}),{...we,data:oe}}}):re),window.parent&&window.parent!==window&&window.parent.postMessage({type:"INSERT",payload:{rangeIndex_:M,rowIndex_:O,row:B}},"*")},de=(M,O,B,re)=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MOVE",payload:{fromRangeIndex_:M,fromRowIndex_:O,toRangeIndex_:B,toRowIndex_:re}},"*")},ee=M=>{window.parent&&window.parent!==window?window.parent.postMessage({type:"FOLLOW_LINK",payload:{url:M}},"*"):M&&window.open(M,"_blank","noopener,noreferrer")};return v?n.jsx("div",{id:"app-container",className:"h-full w-full","data-source-loc":"weekly_chores_household_hub.tsx:5885:5","data-source-comp":"AppWrapper",children:n.jsx(hp,{children:n.jsx(up,{data:w,updateItem:P,deleteItem:$,insertItem:U,moveItem:de,followLink:ee})})}):n.jsx("div",{className:"loading","data-source-loc":"weekly_chores_household_hub.tsx:5881:12","data-source-comp":"AppWrapper",children:"Waiting for data..."})}const mp=`// @ts-nocheck\r
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
          "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away",\r
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
          "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",\r
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
          "- Pick Up, Organize, Dust & Vacuum",\r
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
          "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste",\r
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
          "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",\r
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
          "Roll waste bin to curb Thursday evening for Friday pickup (alternating weeks)",\r
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
          "Walk Dogs: Ellie & Lewis (Morning & Evening walk)",\r
          "Non-Casual",\r
          "Daily",\r
          "Mon – Sun",\r
          "Morning & evening walk for Ellie & Lewis",\r
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
      })}</tr><tr className="bg-white text-[8.5px] font-bold text-slate-900" style={{ borderTop: "2px solid #FFFFFF", borderBottom: "2px solid #C55A11" }}><th className="py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]">TASK</th>{DAY_STYLES.map(d => <React.Fragment key={\`sub-\${d.name}\`}><th className="py-0.5 px-1 text-left uppercase font-bold">WHO</th><th className="py-0.5 px-1 text-right uppercase font-bold">DONE</th></React.Fragment>)}</tr></thead><tbody>{printableScheduleItems.filter(item => {\r
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
          })}</div></div><div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm"><h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5"><span>{"\\u{1F43E} House Pets Overview"}</span></h4><div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">{rosterPets.filter(p => p.active !== false).map(pet => <div key={\`\${pet.index_}-\${pet.name}\`} className="p-2.5 rounded-lg border flex items-center gap-2" style={{ backgroundColor: pet.bg, borderColor: pet.border }}><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pet.color }} /><span className="text-base">{pet.icon}</span><div><div className="font-bold" style={{ color: pet.text }}>{pet.name}</div><div className="text-[10px] opacity-80" style={{ color: pet.text }}>{pet.type}</div></div></div>)}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub Master Data</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Monthly Calendar & Printable Weekly Schedule</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Selected Week: "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Kids Week: "}<strong>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong></span></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Special Rules & Parameters</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{(() => {\r
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
`,lo=mp.split(/\r?\n/),ud=(()=>{const w=lo.findIndex((_,v)=>v>37&&_.startsWith("var DAY_STYLES"));return w>0?w:935})();function Dl(w){let _="",v=w;for(;v>=0;)_=String.fromCharCode(v%26+65)+_,v=Math.floor(v/26)-1;return _}const hd=new Map,md=new Map;(()=>{let w=-1,_="",v=null,G=!1,P=-1;for(let $=36;$<ud;$++){const U=lo[$]||"",de=U.match(/"name":\s*"([^"]+)"/);if(de){_=de[1],w=_.toLowerCase().includes("hub")?1:0,v=null,G=!1;continue}const ee=U.match(/"index_":\s*(\d+)/);if(ee&&!G){(lo[$+1]||"").includes('"name":')||(v=parseInt(ee[1],10));continue}if(U.includes('"row": [')){G=!0,P=0;continue}if(G){if(U.trim().startsWith("]")){G=!1,P=-1;continue}if(w>=0&&v!==null){const M=$+1,O=U.trim().replace(/,$/,"");let B=O;try{B=JSON.parse(O)}catch{}const re={tsxLine:M,sheetIndex:w,sheetName:_,rowIndex:v,colIndex:P,value:B};hd.set(`${w}:${v}:${P}`,M),md.set(M,re)}P++}}})();function Lu(w){const _=[],v=(w.innerText||w.textContent||"").trim();if(v.length>=2&&v.length<=140&&!v.includes(`
`))_.push(v);else if(v.includes(`
`))for(const G of v.split(`
`)){const P=G.trim();P.length>=3&&P.length<=120&&_.push(P)}if(_.length===0)return null;for(const G of _){const P=G.replace(/\s+/g," ").trim();if(P.length<2)continue;const $=JSON.stringify(P).toLowerCase();let U=-1;for(let de=36;de<ud;de++){const ee=(lo[de]||"").trim().toLowerCase();if(ee===$||ee===`${$},`){U=de+1;break}}if(U===-1&&P.length>=4){const de=P.toLowerCase();for(let ee=36;ee<ud;ee++){const M=(lo[ee]||"").trim().toLowerCase();if(M.startsWith('"')&&M.includes(de)){U=ee+1;break}}}if(U!==-1){const de=md.get(U),ee=de?de.rowIndex:null,M=de?de.colIndex:0,O=de?de.sheetName:"INITIAL_SHEET_DATA",B=O.toLowerCase().includes("hub"),re=B?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",we=ee!==null?B?ee+2:ee+1:1,Re=Dl(M+1);return{line:U,text:(lo[U-1]||"").trim(),rowIndex:ee,colIndex:M,colLetter:Re,sectionName:O,csvFile:re,csvLine:we}}}return null}function _s(w,_,v=1,G){const P=()=>{const $=document.createElement("a");$.href=`antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(w)}:${_}:${v}`,$.click()};fetch(`/__open-in-vscode?file=${encodeURIComponent(w)}&line=${_}&col=${v}`).then($=>$.json()).then($=>{(!$||!$.ok)&&P()}).catch(()=>{P()}),G&&G(`Opened ${w}:${_}`)}function $u(w,_){const v=`${window.location.origin}/?view=csv-map`,G=window.open(v,"CsvVisualMapWindow","popup=yes,width=1320,height=840,left=80,top=60");if(G){G.focus(),w&&w("Opened CSV Visual Map in a separate window!");return}fetch("/__popout-csv-map").catch(()=>{}),_&&_(),w&&w("Opened CSV Visual Map!")}const ks=typeof BroadcastChannel<"u"?new BroadcastChannel("chores_csv_map_sync"):null;function Hu(w,_,v,G){ks&&ks.postMessage({sheetIndex:w,rowIndex:_,colIndex:v,tsxLine:G,updatedAt:Date.now()}),fetch(`/__csv-map-state?sheetIndex=${w}&rowIndex=${_}&colIndex=${v}${G?`&tsxLine=${G}`:""}`).catch(()=>{})}function zu({isStandalone:w=!1,activeCsvSheetIdx:_,setActiveCsvSheetIdx:v,selectedCellKey:G,setSelectedCellKey:P,onClose:$,onToast:U}){const de=jl[_]||jl[0],ee=_===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",M=_===1?12:15;return L.useEffect(()=>{if(!G)return;const O=document.querySelector(`[data-cell-key="${G}"]`);O&&O.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[G,_]),n.jsxs("div",{style:{width:"100%",height:"100%",backgroundColor:"#0F172A",color:"#F8FAFC",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"ui-sans-serif, system-ui, sans-serif"},children:[n.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#1E293B",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[n.jsx("span",{style:{fontWeight:800,fontSize:"13px",color:"#FBBF24"},children:"📊 Live .tsx ↔ .csv Visual Spreadsheet Map"}),n.jsxs("div",{style:{display:"flex",gap:"6px"},children:[n.jsx("button",{type:"button",onClick:()=>v(0),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===0?"1px solid #38BDF8":"1px solid #475569",backgroundColor:_===0?"#0284C7":"#0F172A",color:"#FFFFFF"},children:"Sheet 0: Printable Weekly Schedule (CSV)"}),n.jsx("button",{type:"button",onClick:()=>v(1),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===1?"1px solid #34D399":"1px solid #475569",backgroundColor:_===1?"#059669":"#0F172A",color:"#FFFFFF"},children:"Sheet 1: Household Hub - Data (CSV)"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"11px",color:"#CBD5E1"},children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#38BDF8"},children:".tsx"})," •"," ",n.jsx("strong",{children:"Shift+Click Cell"})," = Open in ",n.jsx("code",{style:{color:"#FBBF24"},children:".csv"})]}),!w&&n.jsx("button",{type:"button",onClick:()=>{$u(U),$&&$()},title:"Pop out into a separate standalone window",style:{padding:"4px 10px",borderRadius:"6px",backgroundColor:"#2563EB",color:"#FFFFFF",border:"1px solid #60A5FA",cursor:"pointer",fontWeight:700},children:"↗ Open in Separate Window"}),$&&n.jsx("button",{type:"button",onClick:$,style:{padding:"4px 9px",borderRadius:"6px",backgroundColor:"#334155",color:"#F8FAFC",border:"none",cursor:"pointer",fontWeight:700},children:"✕ Close"})]})]}),G&&(()=>{const[O,B,re]=G.split(":"),we=parseInt(O,10),Re=parseInt(B,10),le=parseInt(re,10),oe=hd.get(G),Fe=oe?md.get(oe):null,Se=we===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",Y=we===1?Re+2:Re+1,Te=Dl(le+1);return n.jsxs("div",{style:{padding:"6px 14px",backgroundColor:"#022C22",borderBottom:"1px solid #065F46",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",fontSize:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",Se," → Line ",Y,", Col ",Te]}),n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["⚛️ weekly_chores_household_hub.tsx → Line ",oe||"?"," (index_ ",Re,", row[",le,"])"]}),Fe&&n.jsx("span",{style:{color:"#F8FAFC",backgroundColor:"#064E3B",padding:"1px 8px",borderRadius:"4px",fontFamily:"monospace"},children:JSON.stringify(Fe.value)})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[oe&&n.jsxs("button",{type:"button",onClick:()=>_s("weekly_chores_household_hub.tsx",oe,1,U),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#059669",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .tsx Line ",oe]}),n.jsxs("button",{type:"button",onClick:()=>_s(Se,Y,1,U),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#D97706",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .csv Line ",Y]})]})]})})(),n.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{backgroundColor:"#1E293B",position:"sticky",top:0,zIndex:2},children:[n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#FBBF24",textAlign:"center",minWidth:"72px"},children:"CSV Line"}),n.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#34D399",textAlign:"center",minWidth:"72px"},children:"TSX index_"}),Array.from({length:M}).map((O,B)=>n.jsxs("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#93C5FD",textAlign:"left",minWidth:"125px"},children:["Col ",Dl(B+1)," ",n.jsxs("span",{style:{color:"#64748B",fontWeight:400},children:["(row[",B,"])"]})]},B))]})}),n.jsx("tbody",{children:(de.data||[]).map(O=>{const B=O.index_,re=_===1?B+2:B+1;return n.jsxs("tr",{style:{borderBottom:"1px solid #1E293B"},children:[n.jsxs("td",{onClick:()=>_s(ee,re,1,U),title:`Click to open ${ee} at Line ${re}`,style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#FDE68A",backgroundColor:"#1E293B",fontWeight:700,cursor:"pointer"},children:["L",re]}),n.jsxs("td",{style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#A7F3D0",backgroundColor:"#0F172A",fontWeight:600},children:["#",B]}),Array.from({length:M}).map((we,Re)=>{const le=O.row?O.row[Re]:null,oe=hd.get(`${_}:${B}:${Re}`),Fe=`${_}:${B}:${Re}`,Se=G===Fe,Y=le==null||le==="";return n.jsx("td",{"data-cell-key":Fe,onClick:Te=>{P(Fe),Hu(_,B,Re,oe),Te.shiftKey?_s(ee,re,1,U):oe&&_s("weekly_chores_household_hub.tsx",oe,1,U)},title:`TSX Line ${oe||"?"} • ${ee} Line ${re}, Col ${Dl(Re+1)}
Click = Open in .tsx | Shift+Click = Open in .csv`,style:{border:Se?"2px solid #F59E0B":"1px solid #334155",backgroundColor:Se?"rgba(245, 158, 11, 0.28)":Y?"#090D16":"#0F172A",color:Y?"#334155":"#F8FAFC",padding:"5px 7px",cursor:"pointer",maxWidth:"210px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"4px",alignItems:"baseline"},children:[n.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:Y?"·":String(le)}),oe&&n.jsxs("span",{style:{fontSize:"9px",color:Se?"#FBBF24":"#475569",flexShrink:0},children:[":",oe]})]})},Re)})]},B)})})]})})]})}function xp(){const[w,_]=L.useState(1),[v,G]=L.useState(null),[P,$]=L.useState(null),U=L.useRef(0),de=ee=>{$(ee),setTimeout(()=>$(null),2400)};return L.useEffect(()=>{document.title="📊 CSV Visual Map — Weekly Chores & Household Hub";const ee=O=>{const B=O.data;B&&typeof B.sheetIndex=="number"&&B.rowIndex!==null&&B.rowIndex!==void 0&&(U.current=B.updatedAt||Date.now(),_(B.sheetIndex),G(`${B.sheetIndex}:${B.rowIndex}:${B.colIndex??0}`))};ks&&ks.addEventListener("message",ee);const M=setInterval(()=>{fetch("/__csv-map-state").then(O=>O.json()).then(O=>{O&&O.updatedAt>U.current&&O.rowIndex!==null&&O.rowIndex!==void 0&&(U.current=O.updatedAt,_(O.sheetIndex),G(`${O.sheetIndex}:${O.rowIndex}:${O.colIndex??0}`))}).catch(()=>{})},400);return()=>{ks&&ks.removeEventListener("message",ee),clearInterval(M)}},[]),n.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[n.jsx(zu,{isStandalone:!0,activeCsvSheetIdx:w,setActiveCsvSheetIdx:_,selectedCellKey:v,setSelectedCellKey:G,onToast:de}),P&&n.jsxs("div",{style:{position:"fixed",bottom:"18px",right:"18px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"8px 14px",borderRadius:"8px",fontSize:"12px",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.35)",zIndex:9999},children:["✓ ",P]})]})}const Fu="__code_inspector_dock_corner";function fp(){const[w,_]=L.useState(!1),[v,G]=L.useState(!1),[P,$]=L.useState(()=>{try{const J=localStorage.getItem(Fu);if(J&&["top-right","bottom-left","top-left","bottom-right","float"].includes(J))return J}catch{}return"top-right"}),[U,de]=L.useState({x:0,y:0}),ee=L.useRef(null),[M,O]=L.useState(null),[B,re]=L.useState([]),[we,Re]=L.useState(null),[le,oe]=L.useState(!1),[Fe,Se]=L.useState(1),[Y,Te]=L.useState(null),Ye=L.useRef(""),nt=L.useRef(""),Ue=w||v,ot=J=>{Re(J),setTimeout(()=>Re(null),2400)},Ce=()=>{$(J=>{const ke=["top-right","bottom-left","top-left","bottom-right","float"],me=ke[(ke.indexOf(J)+1)%ke.length];try{localStorage.setItem(Fu,me)}catch{}return ot(`Inspector window docked: ${me.replace("-"," ").toUpperCase()}`),me})};L.useEffect(()=>{const J=ce=>{ce.key==="Alt"?G(!0):ce.key==="Escape"?w&&(_(!1),O(null)):(ce.key==="d"||ce.key==="D")&&Ue&&Ce()},ke=ce=>{ce.key==="Alt"&&(G(!1),w||O(null))},me=()=>{G(!1)};return window.addEventListener("keydown",J),window.addEventListener("keyup",ke),window.addEventListener("blur",me),()=>{window.removeEventListener("keydown",J),window.removeEventListener("keyup",ke),window.removeEventListener("blur",me)}},[w]),L.useEffect(()=>{if(!Ue){O(null);return}const J=me=>{const ce=me.target;if(!ce||ce.closest("#__code-inspector-ui")){O(null);return}de({x:me.clientX,y:me.clientY});const Ie=ce.closest("[data-source-loc]");if(!Ie){O(null);return}const Oe=Ie.getAttribute("data-source-loc")||"",Q=Ie.getAttribute("data-source-comp")||"",X=Oe.split(":");if(X.length<3)return;const te=parseInt(X.pop(),10),g=parseInt(X.pop(),10),I=X.join(":"),ve=Ie.getBoundingClientRect(),fe=Lu(Ie);if(fe&&fe.rowIndex!==null){const xe=fe.sectionName.toLowerCase().includes("hub")?1:0,Ae=`${xe}:${fe.rowIndex}:${fe.colIndex}`;nt.current!==Ae&&(nt.current=Ae,Se(xe),Te(Ae),Hu(xe,fe.rowIndex,fe.colIndex,fe.line))}O({file:I,line:g,col:te,tag:Ie.tagName.toLowerCase(),comp:Q,rect:ve,dataMatch:fe});const Le=`${I}:${g}`;if(Ye.current!==Le){Ye.current=Le;const xe=Math.max(1,g-1),Ae=Math.min(lo.length,g+1),qe=[];for(let Pe=xe;Pe<=Ae;Pe++)qe.push({line:Pe,text:lo[Pe-1]??""});re(qe)}},ke=me=>{const ce=me.target;if(!ce||ce.closest("#__code-inspector-ui"))return;const Ie=ce.closest("[data-source-loc]");if(!Ie)return;me.preventDefault(),me.stopPropagation();const Q=(Ie.getAttribute("data-source-loc")||"").split(":");if(Q.length<3)return;let X=parseInt(Q.pop(),10),te=parseInt(Q.pop(),10),g=Q.join(":");const I=Lu(Ie);(me.ctrlKey||me.metaKey)&&I?(g=I.csvFile,te=I.csvLine,X=1):me.shiftKey&&I&&(te=I.line,X=1),_s(g,te,X,ot)};return window.addEventListener("mousemove",J,!0),window.addEventListener("click",ke,!0),()=>{window.removeEventListener("mousemove",J,!0),window.removeEventListener("click",ke,!0)}},[Ue]);let ue={};if(M){const ce=M.rect;if(P==="top-right")ce.right>window.innerWidth-497&&ce.top<336?ue={bottom:"64px",left:"16px"}:ue={top:"16px",right:"16px"};else if(P==="bottom-left")ce.left<497&&ce.bottom>window.innerHeight-384?ue={top:"16px",right:"16px"}:ue={bottom:"64px",left:"16px"};else if(P==="top-left")ce.left<497&&ce.top<336?ue={bottom:"64px",right:"16px"}:ue={top:"16px",left:"16px"};else if(P==="bottom-right")ce.right>window.innerWidth-497&&ce.bottom>window.innerHeight-384?ue={top:"16px",left:"16px"}:ue={bottom:"64px",right:"16px"};else{let Ie=ce.top,Oe=ce.right+16;Oe+465>window.innerWidth-16&&(Oe=ce.left-465-16),Oe<16&&(Oe=Math.max(16,Math.min(ce.left,window.innerWidth-465-16)),Ie=ce.top>336?ce.top-320-12:ce.bottom+12),Ie=Math.max(16,Math.min(Ie,window.innerHeight-320-16)),ue={top:`${Ie}px`,left:`${Oe}px`}}}let He=!1;if(ee.current&&Ue){const J=ee.current.getBoundingClientRect(),ke=Math.max(J.left,Math.min(U.x,J.right)),me=Math.max(J.top,Math.min(U.y,J.bottom));Math.hypot(U.x-ke,U.y-me)<40&&(He=!0)}return n.jsxs("div",{id:"__code-inspector-ui",style:{position:"fixed",zIndex:999999,pointerEvents:"none"},children:[Ue&&M&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",top:M.rect.top,left:M.rect.left,width:M.rect.width,height:M.rect.height,border:"2px solid #3B82F6",backgroundColor:"rgba(59, 130, 246, 0.12)",borderRadius:"4px",pointerEvents:"none",transition:"all 0.04s ease-out"}}),n.jsxs("div",{style:{position:"fixed",top:M.rect.top>24?M.rect.top-22:M.rect.bottom+4,left:Math.max(4,Math.min(M.rect.left,window.innerWidth-240)),padding:"2px 8px",borderRadius:"4px",backgroundColor:"#0F172A",color:"#93C5FD",border:"1px solid #3B82F6",fontSize:"10px",fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none",whiteSpace:"nowrap",zIndex:999999,display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("span",{children:["<",M.tag,">",M.comp?` in <${M.comp}>`:""]}),n.jsxs("span",{style:{color:"#38BDF8",fontWeight:600},children:["• Line ",M.line]})]}),n.jsxs("div",{ref:ee,style:{position:"fixed",...ue,width:"465px",maxWidth:"calc(100vw - 32px)",backgroundColor:"#0F172A",color:"#F8FAFC",padding:"10px 14px",borderRadius:"10px",boxShadow:"0 12px 30px -5px rgba(0, 0, 0, 0.65)",border:"1px solid #334155",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",lineHeight:"1.45",pointerEvents:"auto",opacity:He?.22:.98,transition:"opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease",zIndex:999999},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"},children:[n.jsxs("span",{style:{color:"#60A5FA",fontWeight:700,fontSize:"11.5px"},children:["<",M.tag,">",M.comp?n.jsxs("span",{style:{color:"#C084FC",fontWeight:500},children:[" in ",M.comp]}):null]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("button",{type:"button",onClick:Ce,title:"Move inspector window corner (or press 'D' key)",style:{backgroundColor:"#1E293B",color:"#93C5FD",border:"1px solid #3B82F6",borderRadius:"4px",padding:"2px 7px",fontSize:"9.5px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",P.replace("-"," ")]})]}),n.jsxs("span",{style:{color:"#38BDF8",backgroundColor:"#1E293B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["Line ",M.line,":",M.col]})]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"6px"},children:[M.file," (",n.jsx("strong",{children:"Click"})," = UI code)"]}),B.length>0&&n.jsx("div",{style:{backgroundColor:"#020617",padding:"6px 8px",borderRadius:"5px",border:"1px solid #1E293B",overflowX:"hidden",whiteSpace:"pre"},children:B.map(J=>{const ke=J.line===M.line,me=ke&&M.col>30?Math.max(0,M.col-1):0,ce=me>0?"…"+J.text.slice(me,me+55):J.text.trim().slice(0,56);return n.jsxs("div",{style:{backgroundColor:ke?"rgba(59, 130, 246, 0.22)":"transparent",color:ke?"#F8FAFC":"#64748B",fontWeight:ke?600:400,padding:"0 4px",borderRadius:"2px",textOverflow:"ellipsis",overflow:"hidden"},children:[n.jsx("span",{style:{display:"inline-block",width:"36px",color:ke?"#60A5FA":"#475569",userSelect:"none"},children:J.line}),ce]},J.line)})}),M.dataMatch&&n.jsxs("div",{style:{marginTop:"8px",paddingTop:"6px",borderTop:"1px solid #334155"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"2px"},children:[n.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["📊 TSX Data (index_ ",M.dataMatch.rowIndex,", row[",M.dataMatch.colIndex,"])"]}),n.jsxs("span",{style:{color:"#6EE7B7",backgroundColor:"#064E3B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["TSX Line ",M.dataMatch.line]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"4px"},children:[n.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",M.dataMatch.csvFile]}),n.jsxs("span",{style:{color:"#FDE68A",backgroundColor:"#78350F",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["CSV Line ",M.dataMatch.csvLine," • Col ",M.dataMatch.colLetter]})]}),n.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"4px"},children:[n.jsx("strong",{children:"Shift+Click"})," = .tsx Data • ",n.jsx("strong",{children:"Ctrl+Click"})," = .csv File"]}),n.jsxs("div",{style:{backgroundColor:"#022C22",color:"#ECFDF5",padding:"4px 8px",borderRadius:"4px",border:"1px solid #065F46",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.jsx("span",{style:{color:"#34D399",marginRight:"8px"},children:M.dataMatch.line}),M.dataMatch.text.slice(0,56)]})]})]})]}),we&&n.jsxs("div",{style:{position:"fixed",bottom:"54px",right:"16px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:["✓ ",we]}),le&&n.jsx("div",{style:{position:"fixed",bottom:"56px",left:"16px",right:"16px",height:"52vh",pointerEvents:"auto",borderRadius:"12px",overflow:"hidden",border:"2px solid #F59E0B",boxShadow:"0 20px 45px rgba(0, 0, 0, 0.65)"},children:n.jsx(zu,{isStandalone:!1,activeCsvSheetIdx:Fe,setActiveCsvSheetIdx:Se,selectedCellKey:Y,setSelectedCellKey:Te,onClose:()=>oe(!1),onToast:ot})}),n.jsxs("div",{style:{position:"fixed",bottom:"14px",right:"16px",pointerEvents:"auto",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{type:"button",onClick:()=>$u(ot,()=>oe(!0)),title:"Open the CSV Visual Map in a separate standalone desktop window",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #F59E0B",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"↗"}),n.jsx("span",{children:"Pop Out CSV Map"})]}),n.jsxs("button",{type:"button",onClick:()=>{try{localStorage.removeItem("weekly_chores_canvas_sheet_data_v1"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v2"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v3"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v4"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v5")}catch{}window.postMessage({type:"SYNC_DATA",payload:jl},"*"),ot("Reset to INITIAL_SHEET_DATA")},title:"Clear cached localStorage and reload INITIAL_SHEET_DATA from code",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"Reset Data"})]}),n.jsxs("button",{type:"button",onClick:()=>_(J=>!J),title:"Toggle Inspect Mode (or hold Alt key while hovering)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:Ue?"2px solid #93C5FD":"1px solid #334155",backgroundColor:Ue?"#2563EB":"#0F172A",color:"#FFFFFF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:Ue?"Inspecting Code (Click element)":"Inspect Code (or hold Alt)"})]}),Ue&&n.jsxs("button",{type:"button",onClick:Ce,title:"Cycle inspector info window corner (or press 'D' key while inspecting)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #475569",backgroundColor:"#1E293B",color:"#93C5FD",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[n.jsx("span",{children:"◰"}),n.jsxs("span",{children:["Dock: ",P.replace("-"," ")," (Key: D)"]})]})]})]})}const yp=typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="csv-map";Yh.createRoot(document.getElementById("root")).render(n.jsx(so.StrictMode,{children:yp?n.jsx(xp,{}):n.jsxs(n.Fragment,{children:[n.jsx(pp,{}),n.jsx(fp,{})]})}));
