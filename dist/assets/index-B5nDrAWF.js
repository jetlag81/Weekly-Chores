(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const K of document.querySelectorAll('link[rel="modulepreload"]'))V(K);new MutationObserver(K=>{for(const z of K)if(z.type==="childList")for(const Y of z.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&V(Y)}).observe(document,{childList:!0,subtree:!0});function v(K){const z={};return K.integrity&&(z.integrity=K.integrity),K.referrerPolicy&&(z.referrerPolicy=K.referrerPolicy),K.crossOrigin==="use-credentials"?z.credentials="include":K.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function V(K){if(K.ep)return;K.ep=!0;const z=v(K);fetch(K.href,z)}})();function Ou(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var td={exports:{}},fa={},rd={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu;function Kh(){if(fu)return Be;fu=1;var w=Symbol.for("react.element"),_=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),Y=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),q=Symbol.iterator;function re(y){return y===null||typeof y!="object"?null:(y=q&&y[q]||y["@@iterator"],typeof y=="function"?y:null)}var be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,le={};function oe(y,F,xe){this.props=y,this.context=F,this.refs=le,this.updater=xe||be}oe.prototype.isReactComponent={},oe.prototype.setState=function(y,F){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,F,"setState")},oe.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Fe(){}Fe.prototype=oe.prototype;function De(y,F,xe){this.props=y,this.context=F,this.refs=le,this.updater=xe||be}var J=De.prototype=new Fe;J.constructor=De,Le(J,oe.prototype),J.isPureReactComponent=!0;var Ee=Array.isArray,Qe=Object.prototype.hasOwnProperty,ot={current:null},Ye={key:!0,ref:!0,__self:!0,__source:!0};function He(y,F,xe){var ge,ke={},we=null,Ce=null;if(F!=null)for(ge in F.ref!==void 0&&(Ce=F.ref),F.key!==void 0&&(we=""+F.key),F)Qe.call(F,ge)&&!Ye.hasOwnProperty(ge)&&(ke[ge]=F[ge]);var qe=arguments.length-2;if(qe===1)ke.children=xe;else if(1<qe){for(var Oe=Array(qe),ut=0;ut<qe;ut++)Oe[ut]=arguments[ut+2];ke.children=Oe}if(y&&y.defaultProps)for(ge in qe=y.defaultProps,qe)ke[ge]===void 0&&(ke[ge]=qe[ge]);return{$$typeof:w,type:y,key:we,ref:Ce,props:ke,_owner:ot.current}}function Me(y,F){return{$$typeof:w,type:y.type,key:F,ref:y.ref,props:y.props,_owner:y._owner}}function ye(y){return typeof y=="object"&&y!==null&&y.$$typeof===w}function Ue(y){var F={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(xe){return F[xe]})}var fe=/\/+/g;function Ie(y,F){return typeof y=="object"&&y!==null&&y.key!=null?Ue(""+y.key):F.toString(36)}function $e(y,F,xe,ge,ke){var we=typeof y;(we==="undefined"||we==="boolean")&&(y=null);var Ce=!1;if(y===null)Ce=!0;else switch(we){case"string":case"number":Ce=!0;break;case"object":switch(y.$$typeof){case w:case _:Ce=!0}}if(Ce)return Ce=y,ke=ke(Ce),y=ge===""?"."+Ie(Ce,0):ge,Ee(ke)?(xe="",y!=null&&(xe=y.replace(fe,"$&/")+"/"),$e(ke,F,xe,"",function(ut){return ut})):ke!=null&&(ye(ke)&&(ke=Me(ke,xe+(!ke.key||Ce&&Ce.key===ke.key?"":(""+ke.key).replace(fe,"$&/")+"/")+y)),F.push(ke)),1;if(Ce=0,ge=ge===""?".":ge+":",Ee(y))for(var qe=0;qe<y.length;qe++){we=y[qe];var Oe=ge+Ie(we,qe);Ce+=$e(we,F,xe,Oe,ke)}else if(Oe=re(y),typeof Oe=="function")for(y=Oe.call(y),qe=0;!(we=y.next()).done;)we=we.value,Oe=ge+Ie(we,qe++),Ce+=$e(we,F,xe,Oe,ke);else if(we==="object")throw F=String(y),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ee(y,F,xe){if(y==null)return y;var ge=[],ke=0;return $e(y,ge,"","",function(we){return F.call(xe,we,ke++)}),ge}function Se(y){if(y._status===-1){var F=y._result;F=F(),F.then(function(xe){(y._status===0||y._status===-1)&&(y._status=1,y._result=xe)},function(xe){(y._status===0||y._status===-1)&&(y._status=2,y._result=xe)}),y._status===-1&&(y._status=0,y._result=F)}if(y._status===1)return y._result.default;throw y._result}var ce={current:null},L={transition:null},$={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:L,ReactCurrentOwner:ot};function X(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:ee,forEach:function(y,F,xe){ee(y,function(){F.apply(this,arguments)},xe)},count:function(y){var F=0;return ee(y,function(){F++}),F},toArray:function(y){return ee(y,function(F){return F})||[]},only:function(y){if(!ye(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Be.Component=oe,Be.Fragment=v,Be.Profiler=K,Be.PureComponent=De,Be.StrictMode=V,Be.Suspense=te,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,Be.act=X,Be.cloneElement=function(y,F,xe){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ge=Le({},y.props),ke=y.key,we=y.ref,Ce=y._owner;if(F!=null){if(F.ref!==void 0&&(we=F.ref,Ce=ot.current),F.key!==void 0&&(ke=""+F.key),y.type&&y.type.defaultProps)var qe=y.type.defaultProps;for(Oe in F)Qe.call(F,Oe)&&!Ye.hasOwnProperty(Oe)&&(ge[Oe]=F[Oe]===void 0&&qe!==void 0?qe[Oe]:F[Oe])}var Oe=arguments.length-2;if(Oe===1)ge.children=xe;else if(1<Oe){qe=Array(Oe);for(var ut=0;ut<Oe;ut++)qe[ut]=arguments[ut+2];ge.children=qe}return{$$typeof:w,type:y.type,key:ke,ref:we,props:ge,_owner:Ce}},Be.createContext=function(y){return y={$$typeof:Y,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:z,_context:y},y.Consumer=y},Be.createElement=He,Be.createFactory=function(y){var F=He.bind(null,y);return F.type=y,F},Be.createRef=function(){return{current:null}},Be.forwardRef=function(y){return{$$typeof:de,render:y}},Be.isValidElement=ye,Be.lazy=function(y){return{$$typeof:P,_payload:{_status:-1,_result:y},_init:Se}},Be.memo=function(y,F){return{$$typeof:M,type:y,compare:F===void 0?null:F}},Be.startTransition=function(y){var F=L.transition;L.transition={};try{y()}finally{L.transition=F}},Be.unstable_act=X,Be.useCallback=function(y,F){return ce.current.useCallback(y,F)},Be.useContext=function(y){return ce.current.useContext(y)},Be.useDebugValue=function(){},Be.useDeferredValue=function(y){return ce.current.useDeferredValue(y)},Be.useEffect=function(y,F){return ce.current.useEffect(y,F)},Be.useId=function(){return ce.current.useId()},Be.useImperativeHandle=function(y,F,xe){return ce.current.useImperativeHandle(y,F,xe)},Be.useInsertionEffect=function(y,F){return ce.current.useInsertionEffect(y,F)},Be.useLayoutEffect=function(y,F){return ce.current.useLayoutEffect(y,F)},Be.useMemo=function(y,F){return ce.current.useMemo(y,F)},Be.useReducer=function(y,F,xe){return ce.current.useReducer(y,F,xe)},Be.useRef=function(y){return ce.current.useRef(y)},Be.useState=function(y){return ce.current.useState(y)},Be.useSyncExternalStore=function(y,F,xe){return ce.current.useSyncExternalStore(y,F,xe)},Be.useTransition=function(){return ce.current.useTransition()},Be.version="18.3.1",Be}var xu;function fd(){return xu||(xu=1,rd.exports=Kh()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu;function Bh(){if(yu)return fa;yu=1;var w=fd(),_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,K=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function Y(de,te,M){var P,q={},re=null,be=null;M!==void 0&&(re=""+M),te.key!==void 0&&(re=""+te.key),te.ref!==void 0&&(be=te.ref);for(P in te)V.call(te,P)&&!z.hasOwnProperty(P)&&(q[P]=te[P]);if(de&&de.defaultProps)for(P in te=de.defaultProps,te)q[P]===void 0&&(q[P]=te[P]);return{$$typeof:_,type:de,key:re,ref:be,props:q,_owner:K.current}}return fa.Fragment=v,fa.jsx=Y,fa.jsxs=Y,fa}var gu;function qh(){return gu||(gu=1,td.exports=Bh()),td.exports}var r=qh(),I=fd();const ao=Ou(I);var Cl={},nd={exports:{}},rr={},od={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu;function $h(){return wu||(wu=1,(function(w){function _(L,$){var X=L.length;L.push($);e:for(;0<X;){var y=X-1>>>1,F=L[y];if(0<K(F,$))L[y]=$,L[X]=F,X=y;else break e}}function v(L){return L.length===0?null:L[0]}function V(L){if(L.length===0)return null;var $=L[0],X=L.pop();if(X!==$){L[0]=X;e:for(var y=0,F=L.length,xe=F>>>1;y<xe;){var ge=2*(y+1)-1,ke=L[ge],we=ge+1,Ce=L[we];if(0>K(ke,X))we<F&&0>K(Ce,ke)?(L[y]=Ce,L[we]=X,y=we):(L[y]=ke,L[ge]=X,y=ge);else if(we<F&&0>K(Ce,X))L[y]=Ce,L[we]=X,y=we;else break e}}return $}function K(L,$){var X=L.sortIndex-$.sortIndex;return X!==0?X:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var z=performance;w.unstable_now=function(){return z.now()}}else{var Y=Date,de=Y.now();w.unstable_now=function(){return Y.now()-de}}var te=[],M=[],P=1,q=null,re=3,be=!1,Le=!1,le=!1,oe=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(L){for(var $=v(M);$!==null;){if($.callback===null)V(M);else if($.startTime<=L)V(M),$.sortIndex=$.expirationTime,_(te,$);else break;$=v(M)}}function Ee(L){if(le=!1,J(L),!Le)if(v(te)!==null)Le=!0,Se(Qe);else{var $=v(M);$!==null&&ce(Ee,$.startTime-L)}}function Qe(L,$){Le=!1,le&&(le=!1,Fe(He),He=-1),be=!0;var X=re;try{for(J($),q=v(te);q!==null&&(!(q.expirationTime>$)||L&&!Ue());){var y=q.callback;if(typeof y=="function"){q.callback=null,re=q.priorityLevel;var F=y(q.expirationTime<=$);$=w.unstable_now(),typeof F=="function"?q.callback=F:q===v(te)&&V(te),J($)}else V(te);q=v(te)}if(q!==null)var xe=!0;else{var ge=v(M);ge!==null&&ce(Ee,ge.startTime-$),xe=!1}return xe}finally{q=null,re=X,be=!1}}var ot=!1,Ye=null,He=-1,Me=5,ye=-1;function Ue(){return!(w.unstable_now()-ye<Me)}function fe(){if(Ye!==null){var L=w.unstable_now();ye=L;var $=!0;try{$=Ye(!0,L)}finally{$?Ie():(ot=!1,Ye=null)}}else ot=!1}var Ie;if(typeof De=="function")Ie=function(){De(fe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ee=$e.port2;$e.port1.onmessage=fe,Ie=function(){ee.postMessage(null)}}else Ie=function(){oe(fe,0)};function Se(L){Ye=L,ot||(ot=!0,Ie())}function ce(L,$){He=oe(function(){L(w.unstable_now())},$)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(L){L.callback=null},w.unstable_continueExecution=function(){Le||be||(Le=!0,Se(Qe))},w.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<L?Math.floor(1e3/L):5},w.unstable_getCurrentPriorityLevel=function(){return re},w.unstable_getFirstCallbackNode=function(){return v(te)},w.unstable_next=function(L){switch(re){case 1:case 2:case 3:var $=3;break;default:$=re}var X=re;re=$;try{return L()}finally{re=X}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=re;re=L;try{return $()}finally{re=X}},w.unstable_scheduleCallback=function(L,$,X){var y=w.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?y+X:y):X=y,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,L={id:P++,callback:$,priorityLevel:L,startTime:X,expirationTime:F,sortIndex:-1},X>y?(L.sortIndex=X,_(M,L),v(te)===null&&L===v(M)&&(le?(Fe(He),He=-1):le=!0,ce(Ee,X-y))):(L.sortIndex=F,_(te,L),Le||be||(Le=!0,Se(Qe))),L},w.unstable_shouldYield=Ue,w.unstable_wrapCallback=function(L){var $=re;return function(){var X=re;re=$;try{return L.apply(this,arguments)}finally{re=X}}}})(sd)),sd}var bu;function Hh(){return bu||(bu=1,od.exports=$h()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function zh(){if(_u)return rr;_u=1;var w=fd(),_=Hh();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V=new Set,K={};function z(e,t){Y(e,t),Y(e+"Capture",t)}function Y(e,t){for(K[e]=t,e=0;e<t.length;e++)V.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},q={};function re(e){return te.call(q,e)?!0:te.call(P,e)?!1:M.test(e)?q[e]=!0:(P[e]=!0,!1)}function be(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Le(e,t,n,o){if(t===null||typeof t>"u"||be(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,o,a,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){oe[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){oe[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){oe[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function De(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fe,De);oe[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fe,De);oe[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fe,De);oe[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),oe.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){oe[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,t,n,o){var a=oe.hasOwnProperty(t)?oe[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Le(t,n,a,o)&&(n=null),o||a===null?re(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Ee=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qe=Symbol.for("react.element"),ot=Symbol.for("react.portal"),Ye=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ue=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),L=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,y;function F(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var xe=!1;function ge(e,t){if(!e||xe)return"";xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),l=o.stack.split(`
`),u=a.length-1,g=l.length-1;1<=u&&0<=g&&a[u]!==l[g];)g--;for(;1<=u&&0<=g;u--,g--)if(a[u]!==l[g]){if(u!==1||g!==1)do if(u--,g--,0>g||a[u]!==l[g]){var k=`
`+a[u].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=u&&0<=g);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function ke(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function we(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ye:return"Fragment";case ot:return"Portal";case Me:return"Profiler";case He:return"StrictMode";case Ie:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ue:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:we(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(t);case 8:return t===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ut(e){var t=Oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){o=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(u){o=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function me(e){e._valueTracker||(e._valueTracker=ut(e))}function ur(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Pt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tn(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wt(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=qe(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tn(e,t){t=t.checked,t!=null&&J(e,"checked",t,!1)}function st(e,t){Tn(e,t);var n=qe(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ht(e,t.type,n):t.hasOwnProperty("defaultValue")&&ht(e,t.type,qe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ht(e,t,n){(t!=="number"||Pt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rn=Array.isArray;function Vt(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mt(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(rn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qe(n)}}function nn(e,t){var n=qe(t.value),o=qe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function co(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?co(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,wa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ba=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){ba.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function nr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function on(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=nr(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var As=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(As[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function pr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vr=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Po=null,mr=null,sn=null;function Ko(e){if(e=ea(e)){if(typeof Po!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Pa(t),Po(e.stateNode,e.type,t))}}function js(e){mr?sn?sn.push(e):sn=[e]:mr=e}function Bo(){if(mr){var e=mr,t=sn;if(sn=mr=null,Ko(e),t)for(e=0;e<t.length;e++)Ko(t[e])}}function qo(e,t){return e(t)}function _a(){}var ho=!1;function va(e,t,n){if(ho)return e(t,n);ho=!0;try{return qo(e,t,n)}finally{ho=!1,(mr!==null||sn!==null)&&(_a(),Bo())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var o=Pa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var Ts=!1;if(de)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ts=!1}function Es(e,t,n,o,a,l,u,g,k){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(H){this.onError(H)}}var po=!1,Kt=null,Rn=!1,fr=null,Ms={onError:function(e){po=!0,Kt=e}};function ka(e,t,n,o,a,l,u,g,k){po=!1,Kt=null,Es.apply(Ms,arguments)}function mo(e,t,n,o,a,l,u,g,k){if(ka.apply(this,arguments),po){if(po){var E=Kt;po=!1,Kt=null}else throw Error(v(198));Rn||(Rn=!0,fr=E)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rs(e){if(kr(e)!==e)throw Error(v(188))}function pe(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Rs(a),e;if(l===o)return Rs(a),t;l=l.sibling}throw Error(v(188))}if(n.return!==o.return)n=a,o=l;else{for(var u=!1,g=a.child;g;){if(g===n){u=!0,n=a,o=l;break}if(g===o){u=!0,o=a,n=l;break}g=g.sibling}if(!u){for(g=l.child;g;){if(g===n){u=!0,n=l,o=a;break}if(g===o){u=!0,o=l,n=a;break}g=g.sibling}if(!u)throw Error(v(189))}}if(n.alternate!==o)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function $o(e){return e=pe(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Na(e);if(t!==null)return t;e=e.sibling}return null}var Ls=_.unstable_scheduleCallback,Fs=_.unstable_cancelCallback,Ho=_.unstable_shouldYield,Ln=_.unstable_requestPaint,tt=_.unstable_now,Is=_.unstable_getCurrentPriorityLevel,Cr=_.unstable_ImmediatePriority,Fn=_.unstable_UserBlockingPriority,qr=_.unstable_NormalPriority,Os=_.unstable_LowPriority,Ws=_.unstable_IdlePriority,Nr=null,We=null;function Rt(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:fo,Sr=Math.log,Sa=Math.LN2;function fo(e){return e>>>=0,e===0?32:31-(Sr(e)/Sa|0)|0}var Je=64,Bt=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var g=u&~a;g!==0?o=xo(g):(l&=u,l!==0&&(o=xo(l)))}else u=n&~a,u!==0?o=xo(u):l!==0&&(o=xo(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Lt(t),a=1<<n,o|=e[n],t&=~a;return o}function Tl(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $r(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Lt(l),g=1<<u,k=a[u];k===-1?((g&n)===0||(g&o)!==0)&&(a[u]=Tl(g,t)):k<=t&&(e.expiredLanes|=g),l&=~g}}function an(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ar(){var e=Je;return Je<<=1,(Je&4194240)===0&&(Je=64),e}function ln(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Lt(n),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~l}}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Lt(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var ze=0;function Yt(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var dn,Ks,cn,un,yo,Bs=!1,hn=[],Dr=null,jr=null,or=null,pn=new Map,Uo=new Map,mn=[],Hr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pt(e,t){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function bt(e,t,n,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ea(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Aa(e,t,n,o,a){switch(t){case"focusin":return Dr=bt(Dr,e,t,n,o,a),!0;case"dragenter":return jr=bt(jr,e,t,n,o,a),!0;case"mouseover":return or=bt(or,e,t,n,o,a),!0;case"pointerover":var l=a.pointerId;return pn.set(l,bt(pn.get(l)||null,e,t,n,o,a)),!0;case"gotpointercapture":return l=a.pointerId,Uo.set(l,bt(Uo.get(l)||null,e,t,n,o,a)),!0}return!1}function At(e){var t=So(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,yo(e.priority,function(){cn(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);vr=o,n.target.dispatchEvent(o),vr=null}else return t=ea(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Tr(e,t,n){fn(e)&&n.delete(t)}function go(){Bs=!1,Dr!==null&&fn(Dr)&&(Dr=null),jr!==null&&fn(jr)&&(jr=null),or!==null&&fn(or)&&(or=null),pn.forEach(Tr),Uo.forEach(Tr)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Bs||(Bs=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,go)))}function sr(e){function t(a){return In(a,e)}if(0<hn.length){In(hn[0],e);for(var n=1;n<hn.length;n++){var o=hn[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Dr!==null&&In(Dr,e),jr!==null&&In(jr,e),or!==null&&In(or,e),pn.forEach(t),Uo.forEach(t),n=0;n<mn.length;n++)o=mn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)At(n),n.blockedOn===null&&mn.shift()}var zr=Ee.ReactCurrentBatchConfig,wo=!0;function Da(e,t,n,o){var a=ze,l=zr.transition;zr.transition=null;try{ze=1,On(e,t,n,o)}finally{ze=a,zr.transition=l}}function El(e,t,n,o){var a=ze,l=zr.transition;zr.transition=null;try{ze=4,On(e,t,n,o)}finally{ze=a,zr.transition=l}}function On(e,t,n,o){if(wo){var a=Qt(e,t,n,o);if(a===null)zl(e,t,o,Wn,n),pt(e,o);else if(Aa(a,e,t,n,o))o.stopPropagation();else if(pt(e,o),t&4&&-1<Hr.indexOf(e)){for(;a!==null;){var l=ea(a);if(l!==null&&dn(l),l=Qt(e,t,n,o),l===null&&zl(e,t,o,Wn,n),l===a)break;a=l}a!==null&&o.stopPropagation()}else zl(e,t,o,null,n)}}var Wn=null;function Qt(e,t,n,o){if(Wn=null,e=uo(o),e=So(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wn=e,null}function qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Is()){case Cr:return 1;case Fn:return 4;case qr:case Os:return 16;case Ws:return 536870912;default:return 16}default:return 16}}var Gr=null,Ur=null,bo=null;function $s(){if(bo)return bo;var e,t=Ur,n=t.length,o,a="value"in Gr?Gr.value:Gr.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(o=1;o<=u&&t[n-o]===a[l-o];o++);return bo=a.slice(e,1<o?1-o:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function ja(){return!1}function qt(e){function t(n,o,a,l,u){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_o:ja,this.isPropagationStopped=ja,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=qt(xn),Bn=X({},xn,{view:0,detail:0}),Ta=qt(Bn),Hs,zs,Vr,Vo=X({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Hs=e.screenX-Vr.screenX,zs=e.screenY-Vr.screenY):zs=Hs=0,Vr=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:zs}}),Ea=qt(Vo),vo=X({},Vo,{dataTransfer:0}),Ml=qt(vo),Rl=X({},Bn,{relatedTarget:0}),ko=qt(Rl),Ll=X({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fl=qt(Ll),Er=X({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qn=qt(Er),Yr=X({},xn,{data:0}),Ma=qt(Yr),Il={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ol={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yn[e])?!!t[e]:!1}function i(){return s}var c=X({},Bn,{key:function(e){if(e.key){var t=Il[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ol[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m=qt(c),p=X({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h=qt(p),d=X({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i}),f=qt(d),x=X({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),C=qt(x),D=X({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=qt(D),b=[9,13,27,32],N=de&&"CompositionEvent"in window,O=null;de&&"documentMode"in document&&(O=document.documentMode);var U=de&&"TextEvent"in window&&!O,W=de&&(!N||O&&8<O&&11>=O),R=" ",Z=!1;function ne(e,t){switch(e){case"keyup":return b.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Re(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pe=!1;function it(e,t){switch(e){case"compositionend":return Re(t);case"keypress":return t.which!==32?null:(Z=!0,R);case"textInput":return e=t.data,e===R&&Z?null:e;default:return null}}function kt(e,t){if(Pe)return e==="compositionend"||!N&&ne(e,t)?(e=$s(),bo=Ur=Gr=null,Pe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return W&&t.locale!=="ko"?null:t.data;default:return null}}var Ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function je(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ne[e.type]:t==="textarea"}function Ke(e,t,n,o){js(o),t=Ia(t,"onChange"),0<t.length&&(n=new Kn("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Xe=null,ar=null;function Mr(e){Ed(e,0)}function Rr(e){var t=rs(e);if(ur(t))return e}function rt(e,t){if(e==="change")return t}var Gs=!1;if(de){var Yo;if(de){var Qo="oninput"in document;if(!Qo){var Us=document.createElement("div");Us.setAttribute("oninput","return;"),Qo=typeof Us.oninput=="function"}Yo=Qo}else Yo=!1;Gs=Yo&&(!document.documentMode||9<document.documentMode)}function Co(){Xe&&(Xe.detachEvent("onpropertychange",No),ar=Xe=null)}function No(e){if(e.propertyName==="value"&&Rr(ar)){var t=[];Ke(t,ar,e,uo(e)),va(Mr,t)}}function $n(e,t,n){e==="focusin"?(Co(),Xe=t,ar=n,Xe.attachEvent("onpropertychange",No)):e==="focusout"&&Co()}function gn(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rr(ar)}function Hn(e,t){if(e==="click")return Rr(t)}function Vs(e,t){if(e==="input"||e==="change")return Rr(t)}function Jo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Jo;function $t(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!te.call(t,a)||!Ze(e[a],t[a]))return!1}return!0}function gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wd(e,t){var n=gd(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gd(n)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=Pt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pt(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uu(e){var t=_d(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(o!==null&&Wl(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=wd(n,l);var u=wd(n,o);a&&u&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vu=de&&"documentMode"in document&&11>=document.documentMode,Xo=null,Pl=null,Ys=null,Kl=!1;function vd(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Xo==null||Xo!==Pt(o)||(o=Xo,"selectionStart"in o&&Wl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&$t(Ys,o)||(Ys=o,o=Ia(Pl,"onSelect"),0<o.length&&(t=new Kn("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Xo)))}function Ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Bl={},kd={};de&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function La(e){if(Bl[e])return Bl[e];if(!Zo[e])return e;var t=Zo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Bl[e]=t[n];return e}var Cd=La("animationend"),Nd=La("animationiteration"),Sd=La("animationstart"),Ad=La("transitionend"),Dd=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Dd.set(e,t),z(t,[e])}for(var ql=0;ql<jd.length;ql++){var $l=jd[ql],Yu=$l.toLowerCase(),Qu=$l[0].toUpperCase()+$l.slice(1);zn(Yu,"on"+Qu)}zn(Cd,"onAnimationEnd"),zn(Nd,"onAnimationIteration"),zn(Sd,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(Ad,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),z("onBeforeInput",["compositionend","keypress","textInput","paste"]),z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ju=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Td(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,mo(o,t,void 0,e),e.currentTarget=null}function Ed(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var u=o.length-1;0<=u;u--){var g=o[u],k=g.instance,E=g.currentTarget;if(g=g.listener,k!==l&&a.isPropagationStopped())break e;Td(a,g,E),l=k}else for(u=0;u<o.length;u++){if(g=o[u],k=g.instance,E=g.currentTarget,g=g.listener,k!==l&&a.isPropagationStopped())break e;Td(a,g,E),l=k}}}if(Rn)throw e=fr,Rn=!1,fr=null,e}function at(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var o=e+"__bubble";n.has(o)||(Md(t,e,2,!1),n.add(o))}function Hl(e,t,n){var o=0;t&&(o|=4),Md(n,e,o,t)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function Js(e){if(!e[Fa]){e[Fa]=!0,V.forEach(function(n){n!=="selectionchange"&&(Ju.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fa]||(t[Fa]=!0,Hl("selectionchange",!1,t))}}function Md(e,t,n,o){switch(qs(t)){case 1:var a=Da;break;case 4:a=El;break;default:a=On}n=a.bind(null,t,n,e),a=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function zl(e,t,n,o,a){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var g=o.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(u===4)for(u=o.return;u!==null;){var k=u.tag;if((k===3||k===4)&&(k=u.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;u=u.return}for(;g!==null;){if(u=So(g),u===null)return;if(k=u.tag,k===5||k===6){o=l=u;continue e}g=g.parentNode}}o=o.return}va(function(){var E=l,H=uo(n),G=[];e:{var B=Dd.get(e);if(B!==void 0){var se=Kn,ie=e;switch(e){case"keypress":if(Pn(n)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ie="focus",se=ko;break;case"focusout":ie="blur",se=ko;break;case"beforeblur":case"afterblur":se=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=f;break;case Cd:case Nd:case Sd:se=Fl;break;case Ad:se=C;break;case"scroll":se=Ta;break;case"wheel":se=T;break;case"copy":case"cut":case"paste":se=qn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=h}var ue=(t&4)!==0,yt=!ue&&e==="scroll",A=ue?B!==null?B+"Capture":null:B;ue=[];for(var S=E,j;S!==null;){j=S;var Q=j.stateNode;if(j.tag===5&&Q!==null&&(j=Q,A!==null&&(Q=Br(S,A),Q!=null&&ue.push(Xs(S,Q,j)))),yt)break;S=S.return}0<ue.length&&(B=new se(B,ie,null,n,H),G.push({event:B,listeners:ue}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",B&&n!==vr&&(ie=n.relatedTarget||n.fromElement)&&(So(ie)||ie[wn]))break e;if((se||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,se?(ie=n.relatedTarget||n.toElement,se=E,ie=ie?So(ie):null,ie!==null&&(yt=kr(ie),ie!==yt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(se=null,ie=E),se!==ie)){if(ue=Ea,Q="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ue=h,Q="onPointerLeave",A="onPointerEnter",S="pointer"),yt=se==null?B:rs(se),j=ie==null?B:rs(ie),B=new ue(Q,S+"leave",se,n,H),B.target=yt,B.relatedTarget=j,Q=null,So(H)===E&&(ue=new ue(A,S+"enter",ie,n,H),ue.target=j,ue.relatedTarget=yt,Q=ue),yt=Q,se&&ie)t:{for(ue=se,A=ie,S=0,j=ue;j;j=es(j))S++;for(j=0,Q=A;Q;Q=es(Q))j++;for(;0<S-j;)ue=es(ue),S--;for(;0<j-S;)A=es(A),j--;for(;S--;){if(ue===A||A!==null&&ue===A.alternate)break t;ue=es(ue),A=es(A)}ue=null}else ue=null;se!==null&&Rd(G,B,se,ue,!1),ie!==null&&yt!==null&&Rd(G,yt,ie,ue,!0)}}e:{if(B=E?rs(E):window,se=B.nodeName&&B.nodeName.toLowerCase(),se==="select"||se==="input"&&B.type==="file")var he=rt;else if(je(B))if(Gs)he=Vs;else{he=gn;var _e=$n}else(se=B.nodeName)&&se.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(he=Hn);if(he&&(he=he(e,E))){Ke(G,he,n,H);break e}_e&&_e(e,B,E),e==="focusout"&&(_e=B._wrapperState)&&_e.controlled&&B.type==="number"&&ht(B,"number",B.value)}switch(_e=E?rs(E):window,e){case"focusin":(je(_e)||_e.contentEditable==="true")&&(Xo=_e,Pl=E,Ys=null);break;case"focusout":Ys=Pl=Xo=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,vd(G,n,H);break;case"selectionchange":if(Vu)break;case"keydown":case"keyup":vd(G,n,H)}var ve;if(N)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Pe?ne(e,n)&&(Te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Te="onCompositionStart");Te&&(W&&n.locale!=="ko"&&(Pe||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Pe&&(ve=$s()):(Gr=H,Ur="value"in Gr?Gr.value:Gr.textContent,Pe=!0)),_e=Ia(E,Te),0<_e.length&&(Te=new Ma(Te,e,null,n,H),G.push({event:Te,listeners:_e}),ve?Te.data=ve:(ve=Re(n),ve!==null&&(Te.data=ve)))),(ve=U?it(e,n):kt(e,n))&&(E=Ia(E,"onBeforeInput"),0<E.length&&(H=new Ma("onBeforeInput","beforeinput",null,n,H),G.push({event:H,listeners:E}),H.data=ve))}Ed(G,t)})}function Xs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Br(e,n),l!=null&&o.unshift(Xs(e,l,a)),l=Br(e,t),l!=null&&o.push(Xs(e,l,a))),e=e.return}return o}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,t,n,o,a){for(var l=t._reactName,u=[];n!==null&&n!==o;){var g=n,k=g.alternate,E=g.stateNode;if(k!==null&&k===o)break;g.tag===5&&E!==null&&(g=E,a?(k=Br(n,l),k!=null&&u.unshift(Xs(n,k,g))):a||(k=Br(n,l),k!=null&&u.push(Xs(n,k,g)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Xu=/\r\n?/g,Zu=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(Xu,`
`).replace(Zu,"")}function Oa(e,t,n){if(t=Ld(t),Ld(e)!==t&&n)throw Error(v(425))}function Wa(){}var Gl=null,Ul=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(e){return Fd.resolve(null).then(e).catch(rh)}:Yl;function rh(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),sr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);sr(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Qr="__reactFiber$"+ts,Zs="__reactProps$"+ts,wn="__reactContainer$"+ts,Jl="__reactEvents$"+ts,nh="__reactListeners$"+ts,oh="__reactHandles$"+ts;function So(e){var t=e[Qr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[Qr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Id(e);e!==null;){if(n=e[Qr])return n;e=Id(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[Qr]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Pa(e){return e[Zs]||null}var Xl=[],ns=-1;function Un(e){return{current:e}}function lt(e){0>ns||(e.current=Xl[ns],Xl[ns]=null,ns--)}function nt(e,t){ns++,Xl[ns]=e.current,e.current=t}var Vn={},Ft=Un(Vn),Jt=Un(!1),Ao=Vn;function os(e,t){var n=e.type.contextTypes;if(!n)return Vn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xt(e){return e=e.childContextTypes,e!=null}function Ka(){lt(Jt),lt(Ft)}function Od(e,t,n){if(Ft.current!==Vn)throw Error(v(168));nt(Ft,t),nt(Jt,n)}function Wd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(v(108,Ce(e)||"Unknown",a));return X({},n,o)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,Ao=Ft.current,nt(Ft,e),nt(Jt,Jt.current),!0}function Pd(e,t,n){var o=e.stateNode;if(!o)throw Error(v(169));n?(e=Wd(e,t,Ao),o.__reactInternalMemoizedMergedChildContext=e,lt(Jt),lt(Ft),nt(Ft,e)):lt(Jt),nt(Jt,n)}var bn=null,qa=!1,Zl=!1;function Kd(e){bn===null?bn=[e]:bn.push(e)}function sh(e){qa=!0,Kd(e)}function Yn(){if(!Zl&&bn!==null){Zl=!0;var e=0,t=ze;try{var n=bn;for(ze=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}bn=null,qa=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),Ls(Cr,Yn),a}finally{ze=t,Zl=!1}}return null}var ss=[],as=0,$a=null,Ha=0,xr=[],yr=0,Do=null,_n=1,vn="";function jo(e,t){ss[as++]=Ha,ss[as++]=$a,$a=e,Ha=t}function Bd(e,t,n){xr[yr++]=_n,xr[yr++]=vn,xr[yr++]=Do,Do=e;var o=_n;e=vn;var a=32-Lt(o)-1;o&=~(1<<a),n+=1;var l=32-Lt(t)+a;if(30<l){var u=a-a%5;l=(o&(1<<u)-1).toString(32),o>>=u,a-=u,_n=1<<32-Lt(t)+a|n<<a|o,vn=l+e}else _n=1<<l|n<<a|o,vn=e}function ei(e){e.return!==null&&(jo(e,1),Bd(e,1,0))}function ti(e){for(;e===$a;)$a=ss[--as],ss[as]=null,Ha=ss[--as],ss[as]=null;for(;e===Do;)Do=xr[--yr],xr[yr]=null,vn=xr[--yr],xr[yr]=null,_n=xr[--yr],xr[yr]=null}var lr=null,ir=null,dt=!1,Lr=null;function qd(e,t){var n=_r(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lr=e,ir=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lr=e,ir=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Do!==null?{id:_n,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_r(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lr=e,ir=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(dt){var t=ir;if(t){var n=t;if(!$d(e,t)){if(ri(e))throw Error(v(418));t=Gn(n.nextSibling);var o=lr;t&&$d(e,t)?qd(o,n):(e.flags=e.flags&-4097|2,dt=!1,lr=e)}}else{if(ri(e))throw Error(v(418));e.flags=e.flags&-4097|2,dt=!1,lr=e}}}function Hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function za(e){if(e!==lr)return!1;if(!dt)return Hd(e),dt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=ir)){if(ri(e))throw zd(),Error(v(418));for(;t;)qd(e,t),t=Gn(t.nextSibling)}if(Hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ir=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ir=null}}else ir=lr?Gn(e.stateNode.nextSibling):null;return!0}function zd(){for(var e=ir;e;)e=Gn(e.nextSibling)}function ls(){ir=lr=null,dt=!1}function oi(e){Lr===null?Lr=[e]:Lr.push(e)}var ah=Ee.ReactCurrentBatchConfig;function ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var o=n.stateNode}if(!o)throw Error(v(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var g=a.refs;u===null?delete g[l]:g[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gd(e){var t=e._init;return t(e._payload)}function Ud(e){function t(A,S){if(e){var j=A.deletions;j===null?(A.deletions=[S],A.flags|=16):j.push(S)}}function n(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function o(A,S){for(A=new Map;S!==null;)S.key!==null?A.set(S.key,S):A.set(S.index,S),S=S.sibling;return A}function a(A,S){return A=no(A,S),A.index=0,A.sibling=null,A}function l(A,S,j){return A.index=j,e?(j=A.alternate,j!==null?(j=j.index,j<S?(A.flags|=2,S):j):(A.flags|=2,S)):(A.flags|=1048576,S)}function u(A){return e&&A.alternate===null&&(A.flags|=2),A}function g(A,S,j,Q){return S===null||S.tag!==6?(S=Yi(j,A.mode,Q),S.return=A,S):(S=a(S,j),S.return=A,S)}function k(A,S,j,Q){var he=j.type;return he===Ye?H(A,S,j.props.children,Q,j.key):S!==null&&(S.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Se&&Gd(he)===S.type)?(Q=a(S,j.props),Q.ref=ta(A,S,j),Q.return=A,Q):(Q=xl(j.type,j.key,j.props,null,A.mode,Q),Q.ref=ta(A,S,j),Q.return=A,Q)}function E(A,S,j,Q){return S===null||S.tag!==4||S.stateNode.containerInfo!==j.containerInfo||S.stateNode.implementation!==j.implementation?(S=Qi(j,A.mode,Q),S.return=A,S):(S=a(S,j.children||[]),S.return=A,S)}function H(A,S,j,Q,he){return S===null||S.tag!==7?(S=Oo(j,A.mode,Q,he),S.return=A,S):(S=a(S,j),S.return=A,S)}function G(A,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Yi(""+S,A.mode,j),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qe:return j=xl(S.type,S.key,S.props,null,A.mode,j),j.ref=ta(A,null,S),j.return=A,j;case ot:return S=Qi(S,A.mode,j),S.return=A,S;case Se:var Q=S._init;return G(A,Q(S._payload),j)}if(rn(S)||$(S))return S=Oo(S,A.mode,j,null),S.return=A,S;Ga(A,S)}return null}function B(A,S,j,Q){var he=S!==null?S.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:g(A,S,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Qe:return j.key===he?k(A,S,j,Q):null;case ot:return j.key===he?E(A,S,j,Q):null;case Se:return he=j._init,B(A,S,he(j._payload),Q)}if(rn(j)||$(j))return he!==null?null:H(A,S,j,Q,null);Ga(A,j)}return null}function se(A,S,j,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return A=A.get(j)||null,g(S,A,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Qe:return A=A.get(Q.key===null?j:Q.key)||null,k(S,A,Q,he);case ot:return A=A.get(Q.key===null?j:Q.key)||null,E(S,A,Q,he);case Se:var _e=Q._init;return se(A,S,j,_e(Q._payload),he)}if(rn(Q)||$(Q))return A=A.get(j)||null,H(S,A,Q,he,null);Ga(S,Q)}return null}function ie(A,S,j,Q){for(var he=null,_e=null,ve=S,Te=S=0,St=null;ve!==null&&Te<j.length;Te++){ve.index>Te?(St=ve,ve=null):St=ve.sibling;var Ve=B(A,ve,j[Te],Q);if(Ve===null){ve===null&&(ve=St);break}e&&ve&&Ve.alternate===null&&t(A,ve),S=l(Ve,S,Te),_e===null?he=Ve:_e.sibling=Ve,_e=Ve,ve=St}if(Te===j.length)return n(A,ve),dt&&jo(A,Te),he;if(ve===null){for(;Te<j.length;Te++)ve=G(A,j[Te],Q),ve!==null&&(S=l(ve,S,Te),_e===null?he=ve:_e.sibling=ve,_e=ve);return dt&&jo(A,Te),he}for(ve=o(A,ve);Te<j.length;Te++)St=se(ve,A,Te,j[Te],Q),St!==null&&(e&&St.alternate!==null&&ve.delete(St.key===null?Te:St.key),S=l(St,S,Te),_e===null?he=St:_e.sibling=St,_e=St);return e&&ve.forEach(function(oo){return t(A,oo)}),dt&&jo(A,Te),he}function ue(A,S,j,Q){var he=$(j);if(typeof he!="function")throw Error(v(150));if(j=he.call(j),j==null)throw Error(v(151));for(var _e=he=null,ve=S,Te=S=0,St=null,Ve=j.next();ve!==null&&!Ve.done;Te++,Ve=j.next()){ve.index>Te?(St=ve,ve=null):St=ve.sibling;var oo=B(A,ve,Ve.value,Q);if(oo===null){ve===null&&(ve=St);break}e&&ve&&oo.alternate===null&&t(A,ve),S=l(oo,S,Te),_e===null?he=oo:_e.sibling=oo,_e=oo,ve=St}if(Ve.done)return n(A,ve),dt&&jo(A,Te),he;if(ve===null){for(;!Ve.done;Te++,Ve=j.next())Ve=G(A,Ve.value,Q),Ve!==null&&(S=l(Ve,S,Te),_e===null?he=Ve:_e.sibling=Ve,_e=Ve);return dt&&jo(A,Te),he}for(ve=o(A,ve);!Ve.done;Te++,Ve=j.next())Ve=se(ve,A,Te,Ve.value,Q),Ve!==null&&(e&&Ve.alternate!==null&&ve.delete(Ve.key===null?Te:Ve.key),S=l(Ve,S,Te),_e===null?he=Ve:_e.sibling=Ve,_e=Ve);return e&&ve.forEach(function(Ph){return t(A,Ph)}),dt&&jo(A,Te),he}function yt(A,S,j,Q){if(typeof j=="object"&&j!==null&&j.type===Ye&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Qe:e:{for(var he=j.key,_e=S;_e!==null;){if(_e.key===he){if(he=j.type,he===Ye){if(_e.tag===7){n(A,_e.sibling),S=a(_e,j.props.children),S.return=A,A=S;break e}}else if(_e.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Se&&Gd(he)===_e.type){n(A,_e.sibling),S=a(_e,j.props),S.ref=ta(A,_e,j),S.return=A,A=S;break e}n(A,_e);break}else t(A,_e);_e=_e.sibling}j.type===Ye?(S=Oo(j.props.children,A.mode,Q,j.key),S.return=A,A=S):(Q=xl(j.type,j.key,j.props,null,A.mode,Q),Q.ref=ta(A,S,j),Q.return=A,A=Q)}return u(A);case ot:e:{for(_e=j.key;S!==null;){if(S.key===_e)if(S.tag===4&&S.stateNode.containerInfo===j.containerInfo&&S.stateNode.implementation===j.implementation){n(A,S.sibling),S=a(S,j.children||[]),S.return=A,A=S;break e}else{n(A,S);break}else t(A,S);S=S.sibling}S=Qi(j,A.mode,Q),S.return=A,A=S}return u(A);case Se:return _e=j._init,yt(A,S,_e(j._payload),Q)}if(rn(j))return ie(A,S,j,Q);if($(j))return ue(A,S,j,Q);Ga(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,S!==null&&S.tag===6?(n(A,S.sibling),S=a(S,j),S.return=A,A=S):(n(A,S),S=Yi(j,A.mode,Q),S.return=A,A=S),u(A)):n(A,S)}return yt}var is=Ud(!0),Vd=Ud(!1),Ua=Un(null),Va=null,ds=null,si=null;function ai(){si=ds=Va=null}function li(e){var t=Ua.current;lt(Ua),e._currentValue=t}function ii(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function cs(e,t){Va=e,si=ds=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Zt=!0),e.firstContext=null)}function gr(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},ds===null){if(Va===null)throw Error(v(308));ds=e,Va.dependencies={lanes:0,firstContext:e}}else ds=ds.next=e;return t}var To=null;function di(e){To===null?To=[e]:To.push(e)}function Yd(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,di(t)):(n.next=a.next,a.next=n),t.interleaved=n,kn(e,o)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function ci(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ge&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,kn(e,n)}return a=o.interleaved,a===null?(t.next=t,di(o)):(t.next=a.next,a.next=t),o.interleaved=t,kn(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ps(e,n)}}function Jd(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qa(e,t,n,o){var a=e.updateQueue;Qn=!1;var l=a.firstBaseUpdate,u=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var k=g,E=k.next;k.next=null,u===null?l=E:u.next=E,u=k;var H=e.alternate;H!==null&&(H=H.updateQueue,g=H.lastBaseUpdate,g!==u&&(g===null?H.firstBaseUpdate=E:g.next=E,H.lastBaseUpdate=k))}if(l!==null){var G=a.baseState;u=0,H=E=k=null,g=l;do{var B=g.lane,se=g.eventTime;if((o&B)===B){H!==null&&(H=H.next={eventTime:se,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var ie=e,ue=g;switch(B=t,se=n,ue.tag){case 1:if(ie=ue.payload,typeof ie=="function"){G=ie.call(se,G,B);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ue.payload,B=typeof ie=="function"?ie.call(se,G,B):ie,B==null)break e;G=X({},G,B);break e;case 2:Qn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[g]:B.push(g))}else se={eventTime:se,lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},H===null?(E=H=se,k=G):H=H.next=se,u|=B;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;B=g,g=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if(H===null&&(k=G),a.baseState=k,a.firstBaseUpdate=E,a.lastBaseUpdate=H,t=a.shared.interleaved,t!==null){a=t;do u|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Ro|=u,e.lanes=u,e.memoizedState=G}}function Xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var ra={},Jr=Un(ra),na=Un(ra),oa=Un(ra);function Eo(e){if(e===ra)throw Error(v(174));return e}function ui(e,t){switch(nt(oa,t),nt(na,e),nt(Jr,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}lt(Jr),nt(Jr,t)}function us(){lt(Jr),lt(na),lt(oa)}function Zd(e){Eo(oa.current);var t=Eo(Jr.current),n=Ss(t,e.type);t!==n&&(nt(na,e),nt(Jr,n))}function hi(e){na.current===e&&(lt(Jr),lt(na))}var mt=Un(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pi=[];function mi(){for(var e=0;e<pi.length;e++)pi[e]._workInProgressVersionPrimary=null;pi.length=0}var Xa=Ee.ReactCurrentDispatcher,fi=Ee.ReactCurrentBatchConfig,Mo=0,ft=null,_t=null,Ct=null,Za=!1,sa=!1,aa=0,lh=0;function It(){throw Error(v(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function yi(e,t,n,o,a,l){if(Mo=l,ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?uh:hh,e=n(o,a),sa){l=0;do{if(sa=!1,aa=0,25<=l)throw Error(v(301));l+=1,Ct=_t=null,t.updateQueue=null,Xa.current=ph,e=n(o,a)}while(sa)}if(Xa.current=rl,t=_t!==null&&_t.next!==null,Mo=0,Ct=_t=ft=null,Za=!1,t)throw Error(v(300));return e}function gi(){var e=aa!==0;return aa=0,e}function Xr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ft.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function wr(){if(_t===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var t=Ct===null?ft.memoizedState:Ct.next;if(t!==null)Ct=t,_t=e;else{if(e===null)throw Error(v(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ct===null?ft.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function la(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=wr(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var o=_t,a=o.baseQueue,l=n.pending;if(l!==null){if(a!==null){var u=a.next;a.next=l.next,l.next=u}o.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,o=o.baseState;var g=u=null,k=null,E=l;do{var H=E.lane;if((Mo&H)===H)k!==null&&(k=k.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var G={lane:H,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};k===null?(g=k=G,u=o):k=k.next=G,ft.lanes|=H,Ro|=H}E=E.next}while(E!==null&&E!==l);k===null?u=o:k.next=g,Ze(o,t.memoizedState)||(Zt=!0),t.memoizedState=o,t.baseState=u,t.baseQueue=k,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do l=a.lane,ft.lanes|=l,Ro|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=wr(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do l=e(l,u.action),u=u.next;while(u!==a);Ze(l,t.memoizedState)||(Zt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function ec(){}function tc(e,t){var n=ft,o=wr(),a=t(),l=!Ze(o.memoizedState,a);if(l&&(o.memoizedState=a,Zt=!0),o=o.queue,_i(oc.bind(null,n,o,e),[e]),o.getSnapshot!==t||l||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,ia(9,nc.bind(null,n,o,a,t),void 0,null),Nt===null)throw Error(v(349));(Mo&30)!==0||rc(n,t,a)}return a}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ft.updateQueue,t===null?(t={lastEffect:null,stores:null},ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,o){t.value=n,t.getSnapshot=o,sc(t)&&ac(e)}function oc(e,t,n){return n(function(){sc(t)&&ac(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ac(e){var t=kn(e,1);t!==null&&Wr(t,e,1,-1)}function lc(e){var t=Xr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t.queue=e,e=e.dispatch=ch.bind(null,ft,e),[t.memoizedState,e]}function ia(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ft.updateQueue,t===null?(t={lastEffect:null,stores:null},ft.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function ic(){return wr().memoizedState}function el(e,t,n,o){var a=Xr();ft.flags|=e,a.memoizedState=ia(1|t,n,void 0,o===void 0?null:o)}function tl(e,t,n,o){var a=wr();o=o===void 0?null:o;var l=void 0;if(_t!==null){var u=_t.memoizedState;if(l=u.destroy,o!==null&&xi(o,u.deps)){a.memoizedState=ia(t,n,l,o);return}}ft.flags|=e,a.memoizedState=ia(1|t,n,l,o)}function dc(e,t){return el(8390656,8,e,t)}function _i(e,t){return tl(2048,8,e,t)}function cc(e,t){return tl(4,2,e,t)}function uc(e,t){return tl(4,4,e,t)}function hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pc(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,hc.bind(null,t,e),n)}function vi(){}function mc(e,t){var n=wr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function fc(e,t){var n=wr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&xi(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function xc(e,t,n){return(Mo&21)===0?(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=n):(Ze(n,t)||(n=Ar(),ft.lanes|=n,Ro|=n,e.baseState=!0),t)}function ih(e,t){var n=ze;ze=n!==0&&4>n?n:4,e(!0);var o=fi.transition;fi.transition={};try{e(!1),t()}finally{ze=n,fi.transition=o}}function yc(){return wr().memoizedState}function dh(e,t,n){var o=to(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))wc(t,n);else if(n=Yd(e,t,n,o),n!==null){var a=zt();Wr(n,e,o,a),bc(n,t,o)}}function ch(e,t,n){var o=to(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))wc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,g=l(u,n);if(a.hasEagerState=!0,a.eagerState=g,Ze(g,u)){var k=t.interleaved;k===null?(a.next=a,di(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}n=Yd(e,t,a,o),n!==null&&(a=zt(),Wr(n,e,o,a),bc(n,t,o))}}function gc(e){var t=e.alternate;return e===ft||t!==null&&t===ft}function wc(e,t){sa=Za=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ps(e,n)}}var rl={readContext:gr,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},uh={readContext:gr,useCallback:function(e,t){return Xr().memoizedState=[e,t===void 0?null:t],e},useContext:gr,useEffect:dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=Xr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Xr();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=dh.bind(null,ft,e),[o.memoizedState,e]},useRef:function(e){var t=Xr();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:vi,useDeferredValue:function(e){return Xr().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=ih.bind(null,e[1]),Xr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ft,a=Xr();if(dt){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Nt===null)throw Error(v(349));(Mo&30)!==0||rc(o,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,dc(oc.bind(null,o,l,e),[e]),o.flags|=2048,ia(9,nc.bind(null,o,l,n,t),void 0,null),n},useId:function(){var e=Xr(),t=Nt.identifierPrefix;if(dt){var n=vn,o=_n;n=(o&~(1<<32-Lt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=aa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hh={readContext:gr,useCallback:mc,useContext:gr,useEffect:_i,useImperativeHandle:pc,useInsertionEffect:cc,useLayoutEffect:uc,useMemo:fc,useReducer:wi,useRef:ic,useState:function(){return wi(la)},useDebugValue:vi,useDeferredValue:function(e){var t=wr();return xc(t,_t.memoizedState,e)},useTransition:function(){var e=wi(la)[0],t=wr().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:yc,unstable_isNewReconciler:!1},ph={readContext:gr,useCallback:mc,useContext:gr,useEffect:_i,useImperativeHandle:pc,useInsertionEffect:cc,useLayoutEffect:uc,useMemo:fc,useReducer:bi,useRef:ic,useState:function(){return bi(la)},useDebugValue:vi,useDeferredValue:function(e){var t=wr();return _t===null?t.memoizedState=e:xc(t,_t.memoizedState,e)},useTransition:function(){var e=bi(la)[0],t=wr().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:yc,unstable_isNewReconciler:!1};function Fr(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ki(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=zt(),a=to(e),l=Cn(o,a);l.payload=t,n!=null&&(l.callback=n),t=Jn(e,l,a),t!==null&&(Wr(t,e,a,o),Ya(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=zt(),a=to(e),l=Cn(o,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Jn(e,l,a),t!==null&&(Wr(t,e,a,o),Ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),o=to(e),a=Cn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Jn(e,a,o),t!==null&&(Wr(t,e,o,n),Ya(t,e,o))}};function _c(e,t,n,o,a,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,u):t.prototype&&t.prototype.isPureReactComponent?!$t(n,o)||!$t(a,l):!0}function vc(e,t,n){var o=!1,a=Vn,l=t.contextType;return typeof l=="object"&&l!==null?l=gr(l):(a=Xt(t)?Ao:Ft.current,o=t.contextTypes,l=(o=o!=null)?os(e,a):Vn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function kc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Ci(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},ci(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=gr(l):(l=Xt(t)?Ao:Ft.current,a.context=os(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ki(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&nl.enqueueReplaceState(a,a.state,null),Qa(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function hs(e,t){try{var n="",o=t;do n+=ke(o),o=o.return;while(o);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,t,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){cl||(cl=!0,Bi=o),Si(e,t)},n}function Nc(e,t,n){n=Cn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Si(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Si(e,t),typeof o!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Sc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new mh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Dh.bind(null,e,t,n),t.then(e,e))}function Ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dc(e,t,n,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Cn(-1,1),t.tag=2,Jn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var fh=Ee.ReactCurrentOwner,Zt=!1;function Ht(e,t,n,o){t.child=e===null?Vd(t,null,n,o):is(t,e.child,n,o)}function jc(e,t,n,o,a){n=n.render;var l=t.ref;return cs(t,a),o=yi(e,t,n,o,l,a),n=gi(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(dt&&n&&ei(t),t.flags|=1,Ht(e,t,o,a),t.child)}function Tc(e,t,n,o,a){if(e===null){var l=n.type;return typeof l=="function"&&!Vi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ec(e,t,l,o,a)):(e=xl(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:$t,n(u,o)&&e.ref===t.ref)return Nn(e,t,a)}return t.flags|=1,e=no(l,o),e.ref=t.ref,e.return=t,t.child=e}function Ec(e,t,n,o,a){if(e!==null){var l=e.memoizedProps;if($t(l,o)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=o=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Zt=!0);else return t.lanes=e.lanes,Nn(e,t,a)}return Ai(e,t,n,o,a)}function Mc(e,t,n){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ms,dr),dr|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,nt(ms,dr),dr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,nt(ms,dr),dr|=o}else l!==null?(o=l.baseLanes|n,t.memoizedState=null):o=n,nt(ms,dr),dr|=o;return Ht(e,t,a,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,o,a){var l=Xt(n)?Ao:Ft.current;return l=os(t,l),cs(t,a),n=yi(e,t,n,o,l,a),o=gi(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(dt&&o&&ei(t),t.flags|=1,Ht(e,t,n,a),t.child)}function Lc(e,t,n,o,a){if(Xt(n)){var l=!0;Ba(t)}else l=!1;if(cs(t,a),t.stateNode===null)sl(e,t),vc(t,n,o),Ci(t,n,o,a),o=!0;else if(e===null){var u=t.stateNode,g=t.memoizedProps;u.props=g;var k=u.context,E=n.contextType;typeof E=="object"&&E!==null?E=gr(E):(E=Xt(n)?Ao:Ft.current,E=os(t,E));var H=n.getDerivedStateFromProps,G=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function";G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==o||k!==E)&&kc(t,u,o,E),Qn=!1;var B=t.memoizedState;u.state=B,Qa(t,o,u,a),k=t.memoizedState,g!==o||B!==k||Jt.current||Qn?(typeof H=="function"&&(ki(t,n,H,o),k=t.memoizedState),(g=Qn||_c(t,n,g,o,B,k,E))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),u.props=o,u.state=k,u.context=E,o=g):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Qd(e,t),g=t.memoizedProps,E=t.type===t.elementType?g:Fr(t.type,g),u.props=E,G=t.pendingProps,B=u.context,k=n.contextType,typeof k=="object"&&k!==null?k=gr(k):(k=Xt(n)?Ao:Ft.current,k=os(t,k));var se=n.getDerivedStateFromProps;(H=typeof se=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==G||B!==k)&&kc(t,u,o,k),Qn=!1,B=t.memoizedState,u.state=B,Qa(t,o,u,a);var ie=t.memoizedState;g!==G||B!==ie||Jt.current||Qn?(typeof se=="function"&&(ki(t,n,se,o),ie=t.memoizedState),(E=Qn||_c(t,n,E,o,B,ie,k)||!1)?(H||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,ie,k),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,ie,k)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ie),u.props=o,u.state=ie,u.context=k,o=E):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),o=!1)}return Di(e,t,n,o,l,a)}function Di(e,t,n,o,a,l){Rc(e,t);var u=(t.flags&128)!==0;if(!o&&!u)return a&&Pd(t,n,!1),Nn(e,t,l);o=t.stateNode,fh.current=t;var g=u&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&u?(t.child=is(t,e.child,null,l),t.child=is(t,null,g,l)):Ht(e,t,g,l),t.memoizedState=o.state,a&&Pd(t,n,!0),t.child}function Fc(e){var t=e.stateNode;t.pendingContext?Od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Od(e,t.context,!1),ui(e,t.containerInfo)}function Ic(e,t,n,o,a){return ls(),oi(a),t.flags|=256,Ht(e,t,n,o),t.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,n){var o=t.pendingProps,a=mt.current,l=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),nt(mt,a&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=o.children,e=o.fallback,l?(o=t.mode,l=t.child,u={mode:"hidden",children:u},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=yl(u,o,0,null),e=Oo(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ti(n),t.memoizedState=ji,e):Ei(t,u));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return xh(e,t,u,o,g,a,n);if(l){l=o.fallback,u=t.mode,a=e.child,g=a.sibling;var k={mode:"hidden",children:o.children};return(u&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=no(a,k),o.subtreeFlags=a.subtreeFlags&14680064),g!==null?l=no(g,l):(l=Oo(l,u,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,u=e.child.memoizedState,u=u===null?Ti(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=ji,o}return l=e.child,e=l.sibling,o=no(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ei(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,o){return o!==null&&oi(o),is(t,e.child,null,n),e=Ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xh(e,t,n,o,a,l,u){if(n)return t.flags&256?(t.flags&=-257,o=Ni(Error(v(422))),ol(e,t,u,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=yl({mode:"visible",children:o.children},a,0,null),l=Oo(l,a,u,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&is(t,e.child,null,u),t.child.memoizedState=Ti(u),t.memoizedState=ji,l);if((t.mode&1)===0)return ol(e,t,u,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var g=o.dgst;return o=g,l=Error(v(419)),o=Ni(l,o,void 0),ol(e,t,u,o)}if(g=(u&e.childLanes)!==0,Zt||g){if(o=Nt,o!==null){switch(u&-u){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|u))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,kn(e,a),Wr(o,e,a,-1))}return Ui(),o=Ni(Error(v(421))),ol(e,t,u,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=jh.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ir=Gn(a.nextSibling),lr=t,dt=!0,Lr=null,e!==null&&(xr[yr++]=_n,xr[yr++]=vn,xr[yr++]=Do,_n=e.id,vn=e.overflow,Do=t),t=Ei(t,o.children),t.flags|=4096,t)}function Wc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ii(e.return,t,n)}function Mi(e,t,n,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=a)}function Pc(e,t,n){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if(Ht(e,t,o.children,n),o=mt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wc(e,n,t);else if(e.tag===19)Wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(nt(mt,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Mi(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ja(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Mi(t,!0,n,null,l);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ro|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=no(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=no(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yh(e,t,n){switch(t.tag){case 3:Fc(t),ls();break;case 5:Zd(t);break;case 1:Xt(t.type)&&Ba(t);break;case 4:ui(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;nt(Ua,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(nt(mt,mt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Oc(e,t,n):(nt(mt,mt.current&1),e=Nn(e,t,n),e!==null?e.sibling:null);nt(mt,mt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Pc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),nt(mt,mt.current),o)break;return null;case 22:case 23:return t.lanes=0,Mc(e,t,n)}return Nn(e,t,n)}var Kc,Ri,Bc,qc;Kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ri=function(){},Bc=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Eo(Jr.current);var l=null;switch(n){case"input":a=tn(e,a),o=tn(e,o),l=[];break;case"select":a=X({},a,{value:void 0}),o=X({},o,{value:void 0}),l=[];break;case"textarea":a=ya(e,a),o=ya(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Wa)}Ds(n,o);var u;n=null;for(E in a)if(!o.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var g=a[E];for(u in g)g.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(K.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in o){var k=o[E];if(g=a!=null?a[E]:void 0,o.hasOwnProperty(E)&&k!==g&&(k!=null||g!=null))if(E==="style")if(g){for(u in g)!g.hasOwnProperty(u)||k&&k.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in k)k.hasOwnProperty(u)&&g[u]!==k[u]&&(n||(n={}),n[u]=k[u])}else n||(l||(l=[]),l.push(E,n)),n=k;else E==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,g=g?g.__html:void 0,k!=null&&g!==k&&(l=l||[]).push(E,k)):E==="children"?typeof k!="string"&&typeof k!="number"||(l=l||[]).push(E,""+k):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(K.hasOwnProperty(E)?(k!=null&&E==="onScroll"&&at("scroll",e),l||g===k||(l=[])):(l=l||[]).push(E,k))}n&&(l=l||[]).push("style",n);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},qc=function(e,t,n,o){n!==o&&(t.flags|=4)};function da(e,t){if(!dt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function gh(e,t,n){var o=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Xt(t.type)&&Ka(),Ot(t),null;case 3:return o=t.stateNode,us(),lt(Jt),lt(Ft),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lr!==null&&(Hi(Lr),Lr=null))),Ri(e,t),Ot(t),null;case 5:hi(t);var a=Eo(oa.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(v(166));return Ot(t),null}if(e=Eo(Jr.current),za(t)){o=t.stateNode,n=t.type;var l=t.memoizedProps;switch(o[Qr]=t,o[Zs]=l,e=(t.mode&1)!==0,n){case"dialog":at("cancel",o),at("close",o);break;case"iframe":case"object":case"embed":at("load",o);break;case"video":case"audio":for(a=0;a<Qs.length;a++)at(Qs[a],o);break;case"source":at("error",o);break;case"img":case"image":case"link":at("error",o),at("load",o);break;case"details":at("toggle",o);break;case"input":wt(o,l),at("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},at("invalid",o);break;case"textarea":Mt(o,l),at("invalid",o)}Ds(n,l),a=null;for(var u in l)if(l.hasOwnProperty(u)){var g=l[u];u==="children"?typeof g=="string"?o.textContent!==g&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,g,e),a=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(l.suppressHydrationWarning!==!0&&Oa(o.textContent,g,e),a=["children",""+g]):K.hasOwnProperty(u)&&g!=null&&u==="onScroll"&&at("scroll",o)}switch(n){case"input":me(o),Pr(o,l,!0);break;case"textarea":me(o),ga(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Wa)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{u=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=co(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=u.createElement(n,{is:o.is}):(e=u.createElement(n),n==="select"&&(u=e,o.multiple?u.multiple=!0:o.size&&(u.size=o.size))):e=u.createElementNS(e,n),e[Qr]=t,e[Zs]=o,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(u=pr(n,o),n){case"dialog":at("cancel",e),at("close",e),a=o;break;case"iframe":case"object":case"embed":at("load",e),a=o;break;case"video":case"audio":for(a=0;a<Qs.length;a++)at(Qs[a],e);a=o;break;case"source":at("error",e),a=o;break;case"img":case"image":case"link":at("error",e),at("load",e),a=o;break;case"details":at("toggle",e),a=o;break;case"input":wt(e,o),a=tn(e,o),at("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=X({},o,{value:void 0}),at("invalid",e);break;case"textarea":Mt(e,o),a=ya(e,o),at("invalid",e);break;default:a=o}Ds(n,a),g=a;for(l in g)if(g.hasOwnProperty(l)){var k=g[l];l==="style"?on(e,k):l==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&wa(e,k)):l==="children"?typeof k=="string"?(n!=="textarea"||k!=="")&&Kr(e,k):typeof k=="number"&&Kr(e,""+k):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(K.hasOwnProperty(l)?k!=null&&l==="onScroll"&&at("scroll",e):k!=null&&J(e,l,k,u))}switch(n){case"input":me(e),Pr(e,o,!1);break;case"textarea":me(e),ga(e);break;case"option":o.value!=null&&e.setAttribute("value",""+qe(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Vt(e,!!o.multiple,l,!1):o.defaultValue!=null&&Vt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(v(166));if(n=Eo(oa.current),Eo(Jr.current),za(t)){if(o=t.stateNode,n=t.memoizedProps,o[Qr]=t,(l=o.nodeValue!==n)&&(e=lr,e!==null))switch(e.tag){case 3:Oa(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(o.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Qr]=t,t.stateNode=o}return Ot(t),null;case 13:if(lt(mt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(dt&&ir!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zd(),ls(),t.flags|=98560,l=!1;else if(l=za(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Qr]=t}else ls(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),l=!1}else Lr!==null&&(Hi(Lr),Lr=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(mt.current&1)!==0?vt===0&&(vt=3):Ui())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return us(),Ri(e,t),e===null&&Js(t.stateNode.containerInfo),Ot(t),null;case 10:return li(t.type._context),Ot(t),null;case 17:return Xt(t.type)&&Ka(),Ot(t),null;case 19:if(lt(mt),l=t.memoizedState,l===null)return Ot(t),null;if(o=(t.flags&128)!==0,u=l.rendering,u===null)if(o)da(l,!1);else{if(vt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ja(e),u!==null){for(t.flags|=128,da(l,!1),o=u.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)l=n,e=o,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return nt(mt,mt.current&1|2),t.child}e=e.sibling}l.tail!==null&&tt()>fs&&(t.flags|=128,o=!0,da(l,!1),t.lanes=4194304)}else{if(!o)if(e=Ja(u),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),da(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!dt)return Ot(t),null}else 2*tt()-l.renderingStartTime>fs&&n!==1073741824&&(t.flags|=128,o=!0,da(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=tt(),t.sibling=null,n=mt.current,nt(mt,o?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return Gi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(dr&1073741824)!==0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function wh(e,t){switch(ti(t),t.tag){case 1:return Xt(t.type)&&Ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return us(),lt(Jt),lt(Ft),mi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(lt(mt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));ls()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return lt(mt),null;case 4:return us(),null;case 10:return li(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var al=!1,Wt=!1,bh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ps(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){xt(e,t,o)}else n.current=null}function Li(e,t,n){try{n()}catch(o){xt(e,t,o)}}var $c=!1;function _h(e,t){if(Gl=wo,e=_d(),Wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,g=-1,k=-1,E=0,H=0,G=e,B=null;t:for(;;){for(var se;G!==n||a!==0&&G.nodeType!==3||(g=u+a),G!==l||o!==0&&G.nodeType!==3||(k=u+o),G.nodeType===3&&(u+=G.nodeValue.length),(se=G.firstChild)!==null;)B=G,G=se;for(;;){if(G===e)break t;if(B===n&&++E===a&&(g=u),B===l&&++H===o&&(k=u),(se=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=se}n=g===-1||k===-1?null:{start:g,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},wo=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var ie=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var ue=ie.memoizedProps,yt=ie.memoizedState,A=t.stateNode,S=A.getSnapshotBeforeUpdate(t.elementType===t.type?ue:Fr(t.type,ue),yt);A.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(Q){xt(t,t.return,Q)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return ie=$c,$c=!1,ie}function ca(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Li(t,n,l)}a=a.next}while(a!==o)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qr],delete t[Zs],delete t[Jl],delete t[nh],delete t[oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wa));else if(o!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Oi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var Dt=null,Ir=!1;function Xn(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Nr,n)}catch{}switch(n.tag){case 5:Wt||ps(n,t);case 6:var o=Dt,a=Ir;Dt=null,Xn(e,t,n),Dt=o,Ir=a,Dt!==null&&(Ir?(e=Dt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Ir?(e=Dt,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),sr(e)):Ql(Dt,n.stateNode));break;case 4:o=Dt,a=Ir,Dt=n.stateNode.containerInfo,Ir=!0,Xn(e,t,n),Dt=o,Ir=a;break;case 0:case 11:case 14:case 15:if(!Wt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&Li(n,t,u),a=a.next}while(a!==o)}Xn(e,t,n);break;case 1:if(!Wt&&(ps(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(g){xt(n,t,g)}Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:n.mode&1?(Wt=(o=Wt)||n.memoizedState!==null,Xn(e,t,n),Wt=o):Xn(e,t,n);break;default:Xn(e,t,n)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bh),t.forEach(function(o){var a=Th.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Or(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var l=e,u=t,g=u;e:for(;g!==null;){switch(g.tag){case 5:Dt=g.stateNode,Ir=!1;break e;case 3:Dt=g.stateNode.containerInfo,Ir=!0;break e;case 4:Dt=g.stateNode.containerInfo,Ir=!0;break e}g=g.return}if(Dt===null)throw Error(v(160));Uc(l,u,a),Dt=null,Ir=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(E){xt(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yc(t,e),t=t.sibling}function Yc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(t,e),Zr(e),o&4){try{ca(3,e,e.return),ll(3,e)}catch(ue){xt(e,e.return,ue)}try{ca(5,e,e.return)}catch(ue){xt(e,e.return,ue)}}break;case 1:Or(t,e),Zr(e),o&512&&n!==null&&ps(n,n.return);break;case 5:if(Or(t,e),Zr(e),o&512&&n!==null&&ps(n,n.return),e.flags&32){var a=e.stateNode;try{Kr(a,"")}catch(ue){xt(e,e.return,ue)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,g=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{g==="input"&&l.type==="radio"&&l.name!=null&&Tn(a,l),pr(g,u);var E=pr(g,l);for(u=0;u<k.length;u+=2){var H=k[u],G=k[u+1];H==="style"?on(a,G):H==="dangerouslySetInnerHTML"?wa(a,G):H==="children"?Kr(a,G):J(a,H,G,E)}switch(g){case"input":st(a,l);break;case"textarea":nn(a,l);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var se=l.value;se!=null?Vt(a,!!l.multiple,se,!1):B!==!!l.multiple&&(l.defaultValue!=null?Vt(a,!!l.multiple,l.defaultValue,!0):Vt(a,!!l.multiple,l.multiple?[]:"",!1))}a[Zs]=l}catch(ue){xt(e,e.return,ue)}}break;case 6:if(Or(t,e),Zr(e),o&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(ue){xt(e,e.return,ue)}}break;case 3:if(Or(t,e),Zr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(ue){xt(e,e.return,ue)}break;case 4:Or(t,e),Zr(e);break;case 13:Or(t,e),Zr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ki=tt())),o&4&&Vc(e);break;case 22:if(H=n!==null&&n.memoizedState!==null,e.mode&1?(Wt=(E=Wt)||H,Or(t,e),Wt=E):Or(t,e),Zr(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!H&&(e.mode&1)!==0)for(ae=e,H=e.child;H!==null;){for(G=ae=H;ae!==null;){switch(B=ae,se=B.child,B.tag){case 0:case 11:case 14:case 15:ca(4,B,B.return);break;case 1:ps(B,B.return);var ie=B.stateNode;if(typeof ie.componentWillUnmount=="function"){o=B,n=B.return;try{t=o,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(ue){xt(o,n,ue)}}break;case 5:ps(B,B.return);break;case 22:if(B.memoizedState!==null){Xc(G);continue}}se!==null?(se.return=B,ae=se):Xc(G)}H=H.sibling}e:for(H=null,G=e;;){if(G.tag===5){if(H===null){H=G;try{a=G.stateNode,E?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(g=G.stateNode,k=G.memoizedProps.style,u=k!=null&&k.hasOwnProperty("display")?k.display:null,g.style.display=nr("display",u))}catch(ue){xt(e,e.return,ue)}}}else if(G.tag===6){if(H===null)try{G.stateNode.nodeValue=E?"":G.memoizedProps}catch(ue){xt(e,e.return,ue)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;H===G&&(H=null),G=G.return}H===G&&(H=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Or(t,e),Zr(e),o&4&&Vc(e);break;case 21:break;default:Or(t,e),Zr(e)}}function Zr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zc(n)){var o=n;break e}n=n.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Kr(a,""),o.flags&=-33);var l=Gc(e);Oi(e,l,a);break;case 3:case 4:var u=o.stateNode.containerInfo,g=Gc(e);Ii(e,g,u);break;default:throw Error(v(161))}}catch(k){xt(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vh(e,t,n){ae=e,Qc(e)}function Qc(e,t,n){for(var o=(e.mode&1)!==0;ae!==null;){var a=ae,l=a.child;if(a.tag===22&&o){var u=a.memoizedState!==null||al;if(!u){var g=a.alternate,k=g!==null&&g.memoizedState!==null||Wt;g=al;var E=Wt;if(al=u,(Wt=k)&&!E)for(ae=a;ae!==null;)u=ae,k=u.child,u.tag===22&&u.memoizedState!==null?Zc(a):k!==null?(k.return=u,ae=k):Zc(a);for(;l!==null;)ae=l,Qc(l),l=l.sibling;ae=a,al=g,Wt=E}Jc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,ae=l):Jc(e)}}function Jc(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Wt||ll(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Wt)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Fr(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xd(t,l,o);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xd(t,u,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&n.focus();break;case"img":k.src&&(n.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var H=E.memoizedState;if(H!==null){var G=H.dehydrated;G!==null&&sr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}Wt||t.flags&512&&Fi(t)}catch(B){xt(t,t.return,B)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Xc(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Zc(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(k){xt(t,n,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(k){xt(t,a,k)}}var l=t.return;try{Fi(t)}catch(k){xt(t,l,k)}break;case 5:var u=t.return;try{Fi(t)}catch(k){xt(t,u,k)}}}catch(k){xt(t,t.return,k)}if(t===e){ae=null;break}var g=t.sibling;if(g!==null){g.return=t.return,ae=g;break}ae=t.return}}var kh=Math.ceil,il=Ee.ReactCurrentDispatcher,Wi=Ee.ReactCurrentOwner,br=Ee.ReactCurrentBatchConfig,Ge=0,Nt=null,gt=null,jt=0,dr=0,ms=Un(0),vt=0,ua=null,Ro=0,dl=0,Pi=0,ha=null,er=null,Ki=0,fs=1/0,Sn=null,cl=!1,Bi=null,Zn=null,ul=!1,eo=null,hl=0,pa=0,qi=null,pl=-1,ml=0;function zt(){return(Ge&6)!==0?tt():pl!==-1?pl:pl=tt()}function to(e){return(e.mode&1)===0?1:(Ge&2)!==0&&jt!==0?jt&-jt:ah.transition!==null?(ml===0&&(ml=Ar()),ml):(e=ze,e!==0||(e=window.event,e=e===void 0?16:qs(e.type)),e)}function Wr(e,t,n,o){if(50<pa)throw pa=0,qi=null,Error(v(185));Go(e,n,o),((Ge&2)===0||e!==Nt)&&(e===Nt&&((Ge&2)===0&&(dl|=n),vt===4&&ro(e,jt)),tr(e,o),n===1&&Ge===0&&(t.mode&1)===0&&(fs=tt()+500,qa&&Yn()))}function tr(e,t){var n=e.callbackNode;$r(e,t);var o=zo(e,e===Nt?jt:0);if(o===0)n!==null&&Fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Fs(n),t===1)e.tag===0?sh(tu.bind(null,e)):Kd(tu.bind(null,e)),th(function(){(Ge&6)===0&&Yn()}),n=null;else{switch(Yt(o)){case 1:n=Cr;break;case 4:n=Fn;break;case 16:n=qr;break;case 536870912:n=Ws;break;default:n=qr}n=du(n,eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eu(e,t){if(pl=-1,ml=0,(Ge&6)!==0)throw Error(v(327));var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var o=zo(e,e===Nt?jt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=fl(e,o);else{t=o;var a=Ge;Ge|=2;var l=nu();(Nt!==e||jt!==t)&&(Sn=null,fs=tt()+500,Fo(e,t));do try{Sh();break}catch(g){ru(e,g)}while(!0);ai(),il.current=l,Ge=a,gt!==null?t=0:(Nt=null,jt=0,t=vt)}if(t!==0){if(t===2&&(a=an(e),a!==0&&(o=a,t=$i(e,a))),t===1)throw n=ua,Fo(e,0),ro(e,o),tr(e,tt()),n;if(t===6)ro(e,o);else{if(a=e.current.alternate,(o&30)===0&&!Ch(a)&&(t=fl(e,o),t===2&&(l=an(e),l!==0&&(o=l,t=$i(e,l))),t===1))throw n=ua,Fo(e,0),ro(e,o),tr(e,tt()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(v(345));case 2:Io(e,er,Sn);break;case 3:if(ro(e,o),(o&130023424)===o&&(t=Ki+500-tt(),10<t)){if(zo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){zt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Yl(Io.bind(null,e,er,Sn),t);break}Io(e,er,Sn);break;case 4:if(ro(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var u=31-Lt(o);l=1<<u,u=t[u],u>a&&(a=u),o&=~l}if(o=a,o=tt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kh(o/1960))-o,10<o){e.timeoutHandle=Yl(Io.bind(null,e,er,Sn),o);break}Io(e,er,Sn);break;case 5:Io(e,er,Sn);break;default:throw Error(v(329))}}}return tr(e,tt()),e.callbackNode===n?eu.bind(null,e):null}function $i(e,t){var n=ha;return e.current.memoizedState.isDehydrated&&(Fo(e,t).flags|=256),e=fl(e,t),e!==2&&(t=er,er=n,t!==null&&Hi(t)),e}function Hi(e){er===null?er=e:er.push.apply(er,e)}function Ch(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],l=a.getSnapshot;a=a.value;try{if(!Ze(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ro(e,t){for(t&=~Pi,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),o=1<<n;e[n]=-1,t&=~o}}function tu(e){if((Ge&6)!==0)throw Error(v(327));xs();var t=zo(e,0);if((t&1)===0)return tr(e,tt()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var o=an(e);o!==0&&(t=o,n=$i(e,o))}if(n===1)throw n=ua,Fo(e,0),ro(e,t),tr(e,tt()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Io(e,er,Sn),tr(e,tt()),null}function zi(e,t){var n=Ge;Ge|=1;try{return e(t)}finally{Ge=n,Ge===0&&(fs=tt()+500,qa&&Yn())}}function Lo(e){eo!==null&&eo.tag===0&&(Ge&6)===0&&xs();var t=Ge;Ge|=1;var n=br.transition,o=ze;try{if(br.transition=null,ze=1,e)return e()}finally{ze=o,br.transition=n,Ge=t,(Ge&6)===0&&Yn()}}function Gi(){dr=ms.current,lt(ms)}function Fo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eh(n)),gt!==null)for(n=gt.return;n!==null;){var o=n;switch(ti(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ka();break;case 3:us(),lt(Jt),lt(Ft),mi();break;case 5:hi(o);break;case 4:us();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:li(o.type._context);break;case 22:case 23:Gi()}n=n.return}if(Nt=e,gt=e=no(e.current,null),jt=dr=t,vt=0,ua=null,Pi=dl=Ro=0,er=ha=null,To!==null){for(t=0;t<To.length;t++)if(n=To[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,l=n.pending;if(l!==null){var u=l.next;l.next=a,o.next=u}n.pending=o}To=null}return e}function ru(e,t){do{var n=gt;try{if(ai(),Xa.current=rl,Za){for(var o=ft.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Za=!1}if(Mo=0,Ct=_t=ft=null,sa=!1,aa=0,Wi.current=null,n===null||n.return===null){vt=1,ua=t,gt=null;break}e:{var l=e,u=n.return,g=n,k=t;if(t=jt,g.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var E=k,H=g,G=H.tag;if((H.mode&1)===0&&(G===0||G===11||G===15)){var B=H.alternate;B?(H.updateQueue=B.updateQueue,H.memoizedState=B.memoizedState,H.lanes=B.lanes):(H.updateQueue=null,H.memoizedState=null)}var se=Ac(u);if(se!==null){se.flags&=-257,Dc(se,u,g,l,t),se.mode&1&&Sc(l,E,t),t=se,k=E;var ie=t.updateQueue;if(ie===null){var ue=new Set;ue.add(k),t.updateQueue=ue}else ie.add(k);break e}else{if((t&1)===0){Sc(l,E,t),Ui();break e}k=Error(v(426))}}else if(dt&&g.mode&1){var yt=Ac(u);if(yt!==null){(yt.flags&65536)===0&&(yt.flags|=256),Dc(yt,u,g,l,t),oi(hs(k,g));break e}}l=k=hs(k,g),vt!==4&&(vt=2),ha===null?ha=[l]:ha.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var A=Cc(l,k,t);Jd(l,A);break e;case 1:g=k;var S=l.type,j=l.stateNode;if((l.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Zn===null||!Zn.has(j)))){l.flags|=65536,t&=-t,l.lanes|=t;var Q=Nc(l,g,t);Jd(l,Q);break e}}l=l.return}while(l!==null)}su(n)}catch(he){t=he,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function nu(){var e=il.current;return il.current=rl,e===null?rl:e}function Ui(){(vt===0||vt===3||vt===2)&&(vt=4),Nt===null||(Ro&268435455)===0&&(dl&268435455)===0||ro(Nt,jt)}function fl(e,t){var n=Ge;Ge|=2;var o=nu();(Nt!==e||jt!==t)&&(Sn=null,Fo(e,t));do try{Nh();break}catch(a){ru(e,a)}while(!0);if(ai(),Ge=n,il.current=o,gt!==null)throw Error(v(261));return Nt=null,jt=0,vt}function Nh(){for(;gt!==null;)ou(gt)}function Sh(){for(;gt!==null&&!Ho();)ou(gt)}function ou(e){var t=iu(e.alternate,e,dr);e.memoizedProps=e.pendingProps,t===null?su(e):gt=t,Wi.current=null}function su(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=gh(n,t,dr),n!==null){gt=n;return}}else{if(n=wh(n,t),n!==null){n.flags&=32767,gt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,gt=null;return}}if(t=t.sibling,t!==null){gt=t;return}gt=t=e}while(t!==null);vt===0&&(vt=5)}function Io(e,t,n){var o=ze,a=br.transition;try{br.transition=null,ze=1,Ah(e,t,n,o)}finally{br.transition=a,ze=o}return null}function Ah(e,t,n,o){do xs();while(eo!==null);if((Ge&6)!==0)throw Error(v(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(yd(e,l),e===Nt&&(gt=Nt=null,jt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ul||(ul=!0,du(qr,function(){return xs(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=br.transition,br.transition=null;var u=ze;ze=1;var g=Ge;Ge|=4,Wi.current=null,_h(e,n),Yc(n,e),Uu(Ul),wo=!!Gl,Ul=Gl=null,e.current=n,vh(n),Ln(),Ge=g,ze=u,br.transition=l}else e.current=n;if(ul&&(ul=!1,eo=e,hl=a),l=e.pendingLanes,l===0&&(Zn=null),Rt(n.stateNode),tr(e,tt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(cl)throw cl=!1,e=Bi,Bi=null,e;return(hl&1)!==0&&e.tag!==0&&xs(),l=e.pendingLanes,(l&1)!==0?e===qi?pa++:(pa=0,qi=e):pa=0,Yn(),null}function xs(){if(eo!==null){var e=Yt(hl),t=br.transition,n=ze;try{if(br.transition=null,ze=16>e?16:e,eo===null)var o=!1;else{if(e=eo,eo=null,hl=0,(Ge&6)!==0)throw Error(v(331));var a=Ge;for(Ge|=4,ae=e.current;ae!==null;){var l=ae,u=l.child;if((ae.flags&16)!==0){var g=l.deletions;if(g!==null){for(var k=0;k<g.length;k++){var E=g[k];for(ae=E;ae!==null;){var H=ae;switch(H.tag){case 0:case 11:case 15:ca(8,H,l)}var G=H.child;if(G!==null)G.return=H,ae=G;else for(;ae!==null;){H=ae;var B=H.sibling,se=H.return;if(Hc(H),H===E){ae=null;break}if(B!==null){B.return=se,ae=B;break}ae=se}}}var ie=l.alternate;if(ie!==null){var ue=ie.child;if(ue!==null){ie.child=null;do{var yt=ue.sibling;ue.sibling=null,ue=yt}while(ue!==null)}}ae=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,ae=u;else e:for(;ae!==null;){if(l=ae,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ca(9,l,l.return)}var A=l.sibling;if(A!==null){A.return=l.return,ae=A;break e}ae=l.return}}var S=e.current;for(ae=S;ae!==null;){u=ae;var j=u.child;if((u.subtreeFlags&2064)!==0&&j!==null)j.return=u,ae=j;else e:for(u=S;ae!==null;){if(g=ae,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:ll(9,g)}}catch(he){xt(g,g.return,he)}if(g===u){ae=null;break e}var Q=g.sibling;if(Q!==null){Q.return=g.return,ae=Q;break e}ae=g.return}}if(Ge=a,Yn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Nr,e)}catch{}o=!0}return o}finally{ze=n,br.transition=t}}return!1}function au(e,t,n){t=hs(n,t),t=Cc(e,t,1),e=Jn(e,t,1),t=zt(),e!==null&&(Go(e,1,t),tr(e,t))}function xt(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Zn===null||!Zn.has(o))){e=hs(n,e),e=Nc(t,e,1),t=Jn(t,e,1),e=zt(),t!==null&&(Go(t,1,e),tr(t,e));break}}t=t.return}}function Dh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,Nt===e&&(jt&n)===n&&(vt===4||vt===3&&(jt&130023424)===jt&&500>tt()-Ki?Fo(e,0):Pi|=n),tr(e,t)}function lu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var n=zt();e=kn(e,t),e!==null&&(Go(e,t,n),tr(e,n))}function jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lu(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(t),lu(e,n)}var iu;iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Zt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Zt=!1,yh(e,t,n);Zt=(e.flags&131072)!==0}else Zt=!1,dt&&(t.flags&1048576)!==0&&Bd(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;sl(e,t),e=t.pendingProps;var a=os(t,Ft.current);cs(t,n),a=yi(null,t,o,e,a,n);var l=gi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xt(o)?(l=!0,Ba(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ci(t),a.updater=nl,t.stateNode=a,a._reactInternals=t,Ci(t,o,e,n),t=Di(null,t,o,!0,l,n)):(t.tag=0,dt&&l&&ei(t),Ht(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Mh(o),e=Fr(o,e),a){case 0:t=Ai(null,t,o,e,n);break e;case 1:t=Lc(null,t,o,e,n);break e;case 11:t=jc(null,t,o,e,n);break e;case 14:t=Tc(null,t,o,Fr(o.type,e),n);break e}throw Error(v(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),Ai(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),Lc(e,t,o,a,n);case 3:e:{if(Fc(t),e===null)throw Error(v(387));o=t.pendingProps,l=t.memoizedState,a=l.element,Qd(e,t),Qa(t,o,null,n);var u=t.memoizedState;if(o=u.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=hs(Error(v(423)),t),t=Ic(e,t,o,n,a);break e}else if(o!==a){a=hs(Error(v(424)),t),t=Ic(e,t,o,n,a);break e}else for(ir=Gn(t.stateNode.containerInfo.firstChild),lr=t,dt=!0,Lr=null,n=Vd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),o===a){t=Nn(e,t,n);break e}Ht(e,t,o,n)}t=t.child}return t;case 5:return Zd(t),e===null&&ni(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,u=a.children,Vl(o,a)?u=null:l!==null&&Vl(o,l)&&(t.flags|=32),Rc(e,t),Ht(e,t,u,n),t.child;case 6:return e===null&&ni(t),null;case 13:return Oc(e,t,n);case 4:return ui(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=is(t,null,o,n):Ht(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),jc(e,t,o,a,n);case 7:return Ht(e,t,t.pendingProps,n),t.child;case 8:return Ht(e,t,t.pendingProps.children,n),t.child;case 12:return Ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,u=a.value,nt(Ua,o._currentValue),o._currentValue=u,l!==null)if(Ze(l.value,u)){if(l.children===a.children&&!Jt.current){t=Nn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var g=l.dependencies;if(g!==null){u=l.child;for(var k=g.firstContext;k!==null;){if(k.context===o){if(l.tag===1){k=Cn(-1,n&-n),k.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var H=E.pending;H===null?k.next=k:(k.next=H.next,H.next=k),E.pending=k}}l.lanes|=n,k=l.alternate,k!==null&&(k.lanes|=n),ii(l.return,n,t),g.lanes|=n;break}k=k.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(v(341));u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),ii(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Ht(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,cs(t,n),a=gr(a),o=o(a),t.flags|=1,Ht(e,t,o,n),t.child;case 14:return o=t.type,a=Fr(o,t.pendingProps),a=Fr(o.type,a),Tc(e,t,o,a,n);case 15:return Ec(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Fr(o,a),sl(e,t),t.tag=1,Xt(o)?(e=!0,Ba(t)):e=!1,cs(t,n),vc(t,o,a),Ci(t,o,a,n),Di(null,t,o,!0,e,n);case 19:return Pc(e,t,n);case 22:return Mc(e,t,n)}throw Error(v(156,t.tag))};function du(e,t){return Ls(e,t)}function Eh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(e,t,n,o){return new Eh(e,t,n,o)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mh(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===ee)return 14}return 2}function no(e,t){var n=e.alternate;return n===null?(n=_r(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,o,a,l){var u=2;if(o=e,typeof e=="function")Vi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Ye:return Oo(n.children,a,l,t);case He:u=8,a|=8;break;case Me:return e=_r(12,n,t,a|2),e.elementType=Me,e.lanes=l,e;case Ie:return e=_r(13,n,t,a),e.elementType=Ie,e.lanes=l,e;case $e:return e=_r(19,n,t,a),e.elementType=$e,e.lanes=l,e;case ce:return yl(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:u=10;break e;case Ue:u=9;break e;case fe:u=11;break e;case ee:u=14;break e;case Se:u=16,o=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=_r(u,n,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function Oo(e,t,n,o){return e=_r(7,e,o,t),e.lanes=n,e}function yl(e,t,n,o){return e=_r(22,e,o,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=_r(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=_r(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ji(e,t,n,o,a,l,u,g,k){return e=new Rh(e,t,n,g,k),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_r(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ci(l),e}function Lh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function cu(e){if(!e)return Vn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(Xt(n))return Wd(e,n,t)}return t}function uu(e,t,n,o,a,l,u,g,k){return e=Ji(n,o,!0,e,a,l,u,g,k),e.context=cu(null),n=e.current,o=zt(),a=to(n),l=Cn(o,a),l.callback=t??null,Jn(n,l,a),e.current.lanes=a,Go(e,a,o),tr(e,o),e}function gl(e,t,n,o){var a=t.current,l=zt(),u=to(a);return n=cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Cn(l,u),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Jn(a,t,u),e!==null&&(Wr(e,a,u,l),Ya(e,a,u)),u}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xi(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function Fh(){return null}var pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zi(e){this._internalRoot=e}bl.prototype.render=Zi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));gl(e,t,null,null)},bl.prototype.unmount=Zi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lo(function(){gl(null,e,null,null)}),t[wn]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=un();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&At(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function Ih(e,t,n,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var E=wl(u);l.call(E)}}var u=uu(t,o,e,0,null,!1,!1,"",mu);return e._reactRootContainer=u,e[wn]=u.current,Js(e.nodeType===8?e.parentNode:e),Lo(),u}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var g=o;o=function(){var E=wl(k);g.call(E)}}var k=Ji(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=k,e[wn]=k.current,Js(e.nodeType===8?e.parentNode:e),Lo(function(){gl(t,k,n,o)}),k}function vl(e,t,n,o,a){var l=n._reactRootContainer;if(l){var u=l;if(typeof a=="function"){var g=a;a=function(){var k=wl(u);g.call(k)}}gl(t,u,e,a)}else u=Ih(n,t,e,a,o);return wl(u)}dn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(Ps(t,n|1),tr(t,tt()),(Ge&6)===0&&(fs=tt()+500,Yn()))}break;case 13:Lo(function(){var o=kn(e,1);if(o!==null){var a=zt();Wr(o,e,1,a)}}),Xi(e,1)}},Ks=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=zt();Wr(t,e,134217728,n)}Xi(e,134217728)}},cn=function(e){if(e.tag===13){var t=to(e),n=kn(e,t);if(n!==null){var o=zt();Wr(n,e,t,o)}Xi(e,t)}},un=function(){return ze},yo=function(e,t){var n=ze;try{return ze=e,t()}finally{ze=n}},Po=function(e,t,n){switch(t){case"input":if(st(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Pa(o);if(!a)throw Error(v(90));ur(o),st(o,a)}}}break;case"textarea":nn(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}},qo=zi,_a=Lo;var Oh={usingClientEntryPoint:!1,Events:[ea,rs,Pa,js,Bo,zi]},ma={findFiberByHostInstance:So,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wh={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Fh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Nr=kl.inject(Wh),We=kl}catch{}}return rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh,rr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(v(200));return Lh(e,t,null,n)},rr.createRoot=function(e,t){if(!ed(e))throw Error(v(299));var n=!1,o="",a=pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ji(e,1,!1,null,null,n,!1,o,a),e[wn]=t.current,Js(e.nodeType===8?e.parentNode:e),new Zi(t)},rr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=$o(t),e=e===null?null:e.stateNode,e},rr.flushSync=function(e){return Lo(e)},rr.hydrate=function(e,t,n){if(!_l(t))throw Error(v(200));return vl(null,e,t,!0,n)},rr.hydrateRoot=function(e,t,n){if(!ed(e))throw Error(v(405));var o=n!=null&&n.hydratedSources||null,a=!1,l="",u=pu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=uu(t,null,e,1,n??null,a,!1,l,u),e[wn]=t.current,Js(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new bl(t)},rr.render=function(e,t,n){if(!_l(t))throw Error(v(200));return vl(null,e,t,!1,n)},rr.unmountComponentAtNode=function(e){if(!_l(e))throw Error(v(40));return e._reactRootContainer?(Lo(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1},rr.unstable_batchedUpdates=zi,rr.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!_l(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return vl(e,t,n,!1,o)},rr.version="18.3.1-next-f1338f8080-20240426",rr}var vu;function Gh(){if(vu)return nd.exports;vu=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(_){console.error(_)}}return w(),nd.exports=zh(),nd.exports}var ku;function Uh(){if(ku)return Cl;ku=1;var w=Gh();return Cl.createRoot=w.createRoot,Cl.hydrateRoot=w.hydrateRoot,Cl}var Vh=Uh();const Yh=Ou(Vh);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wu=(...w)=>w.filter((_,v,V)=>!!_&&_.trim()!==""&&V.indexOf(_)===v).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=I.forwardRef(({color:w="currentColor",size:_=24,strokeWidth:v=2,absoluteStrokeWidth:V,className:K="",children:z,iconNode:Y,...de},te)=>I.createElement("svg",{ref:te,...Jh,width:_,height:_,stroke:w,strokeWidth:V?Number(v)*24/Number(_):v,className:Wu("lucide",K),...de},[...Y.map(([M,P])=>I.createElement(M,P)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(w,_)=>{const v=I.forwardRef(({className:V,...K},z)=>I.createElement(Xh,{ref:z,iconNode:_,className:Wu(`lucide-${Qh(w)}`,V),...K}));return v.displayName=`${w}`,v};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=et("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=et("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=et("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=et("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=et("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=et("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=et("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=et("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=et("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=et("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=et("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=et("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=et("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=et("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=et("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=et("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=et("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=et("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=et("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=et("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=et("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=et("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ns="weekly_chores_canvas_sheet_data_v5",Dl=[{index_:0,name:"Printable Weekly Schedule",data:[{index_:0,row:["Chore Schedule",null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["FOR THE WEEK OF:","MON",null,"TUE",null,"WED",null,"THU",null,"FRI",null,"SAT",null,"SUN",null]},{index_:2,row:["2026-10-19","19",null,"20",null,"21",null,"22",null,"23",null,"24",null,"25",null]},{index_:3,row:["TASK",`WHO
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
- Put away food; Load dishwasher; Wipe surfaces`,"Thom",!1,"Meghan",!1,"Sydney",!1,"Cadence",!1,"Mason",!1,"Thom",!1,"Meghan",!1]},{index_:10,row:["Weekly Tasks","Description",null,null,null,null,null,null,null,"Initials / Assigned",null,null,null,null,null]},{index_:11,row:["Personal Laundry","Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:12,row:["Tidy Bedrooms / Personal Spaces","Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1]},{index_:13,row:["Clean Up Basement","Pick Up Mess; Dust Surfaces; Vacuum Floors & Litter Box Area",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:14,row:["Herd Feeding Station Deep Clean","Wash & Sanitize Bowls; Vacuum Feeding Mat",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:15,row:["Curbside Recycling","Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]},{index_:18,row:["Weekly Sign-Off","Parent Initials:",null,null,null,null,null,null,null,null,null,null,null,"_________",!1]}]},{index_:1,name:"Household Hub (Background Data)",data:[{index_:0,row:["HOUSEHOLD HUB & MASTER DIRECTORY",null,null,null,null,null,null,null,null,null,null,null]},{index_:1,row:["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",null,null,null,null,null,null,null,null,null,null,null]},{index_:3,row:["HOUSEHOLD MEMBERS",null,null,null,null,null,"MASTER CHORE REGISTRY & ALLOCATION RULES",null,null,null,null,null]},{index_:4,row:["Name","Role","Occupancy","Special Rotation Groups","Active Status",null,"Chore","Member / Group","Frequency","Suggested Days","Details / Notes",null]},{index_:5,row:["Thom","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Empty the Litter Box (Morning & Evening)","Non-Casual","Daily","N/A","Scoop waste, refresh litter, dispose of waste.",null]},{index_:6,row:["Meghan","Supreme Overlord","Full-Time","Parents, Non-Casual, All",!0,null,"Feed the Herd (Breakfast & Supper)","Non-Casual","Daily","N/A","Feed all animals the appropriate food and portions.",null]},{index_:7,row:["Sydney","Minion","Full-Time","Kids, Non-Casual, All",!0,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun","Put away clean dishes, Load any dirty dishes","Kitchen"]},{index_:8,row:["Cadence","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Make Supper: Plan Ahead!","Non-Casual","Daily","Mon – Sun","Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",null]},{index_:9,row:["Mason","Minion","Bi-Weekly","Kids, Non-Casual, All",!0,null,"Dinner Dishes & Kitchen Cleanup","Non-Casual","Daily","N/A","Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",null]},{index_:10,row:["Koda","Minion","Casual","All",!0,null,"Tidy Bedrooms / Personal Spaces","Kids","Once a Week","Saturday","Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",null]},{index_:11,row:["Keyanna","Minion","Casual","All",!0,null,"Laundry","All","Once a Week","Saturday","Wash, dry, fold & put away (each kid responsible for their own items)",null]},{index_:12,row:[null,null,null,null,null,null,"Clean Basement (Pick Up, Dust, Vacuum)","Non-Casual","Once a Week","Sunday","Pick up mess & laundry, dust surfaces, vacuum floors",null]},{index_:13,row:["OCCUPANCY CATEGORIES",null,null,null,null,null,"Herd Feeding Station Deep Clean","All","Once a Week","Sunday","Wash & sanitize pet bowls, vacuum feeding mat",null]},{index_:14,row:["Type","Description","Rules",null,"Active Status",null,"Curbside Recycling","Non-Casual","Bi-Weekly","Thursday Evening","Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)","Household"]},{index_:15,row:["Full-Time","Constant Residency","Included in all weekly/monthly schedulings",null,!0,null,"Curbside Waste","Non-Casual","Bi-Weekly","Thursday Evening","Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)","Household"]},{index_:16,row:["Bi-Weekly","Half-Time Residency",'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',null,!0,null,"Walk Dogs: Ellie & Lewis","Non-Casual","Daily","Mon – Sun","Walk Ellie & Lewis","Pet Care"]},{index_:17,row:["Casual","Periodic Residency","Manually added to any schedules",null,!0,null,"SCHEDULE CONFIGURATIONS",null,null,null,null,null]},{index_:18,row:["SPECIAL ROTATION GROUPS",null,null,null,null,null,"Active Week Start Date","2026-10-19","Printable Weekly Schedule",null,null,null]},{index_:19,row:["Name","Members",null,null,"Active Status",null,null,null,null,null,null,null]},{index_:20,row:["All","Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",null,null,!0,null,"Custody Schedule Rotation","Kids Week","Bi-Weekly Schedule",null,"Mason, Cadence",null]},{index_:21,row:["Kids","Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:22,row:["Parents","Thom, Meghan",null,null,!0,null,null,null,null,null,null,null]},{index_:23,row:["Non-Casual","Thom, Meghan, Sydney, Cadence, Mason",null,null,!0,null,null,null,null,null,null,null]},{index_:26,row:["Pet Name","Dog / Cat","Routine","Care Responsibilities","Active Status",null,null,null,null,null,null,null]},{index_:27,row:["Ellie","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:28,row:["Lewis","Dog","Morning & Evening","Feed morning/evening, let outside, walk frequently, fresh water",!0,null,null,null,null,null,null,null]},{index_:29,row:["Casey","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:30,row:["Gigi","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:31,row:["Sloane","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:32,row:["Scoob","Cat","Morning & Evening","Feed morning/evening, scoop litter box, fresh water",!0,null,null,null,null,null,null,null]},{index_:34,row:[null,null,null,null,!1,null,"Empty Dishwasher","Non-Casual","Daily","Mon – Sun",null,null]}]}];var Ut=[{name:"Monday",short:"Mon",color:"#8E283A",lightBg:"#FDF2F4",border:"#F8B4BD"},{name:"Tuesday",short:"Tue",color:"#1A638B",lightBg:"#F0F7FB",border:"#A6D2ED"},{name:"Wednesday",short:"Wed",color:"#C45508",lightBg:"#FEF6F0",border:"#FBD3B6"},{name:"Thursday",short:"Thu",color:"#3D7841",lightBg:"#F2F8F3",border:"#B6DFBA"},{name:"Friday",short:"Fri",color:"#584B79",lightBg:"#F5F3F9",border:"#CDC3E6"},{name:"Saturday",short:"Sat",color:"#B81B6C",lightBg:"#FDF2F8",border:"#F8B4DB"},{name:"Sunday",short:"Sun",color:"#0C7B83",lightBg:"#EFF9FA",border:"#9EE1E6"}],bs=[{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},{color:"#D97706",bg:"#FEF3C7",text:"#B45309"},{color:"#10B981",bg:"#D1FAE5",text:"#047857"},{color:"#6366F1",bg:"#EEF2FF",text:"#4338CA"}],ap={meghan:{color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9"},thom:{color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8"},sydney:{color:"#0D9488",bg:"#CCFBF1",text:"#0F766E"},cadence:{color:"#EC4899",bg:"#FCE7F3",text:"#BE185D"},mason:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C"},koda:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1"},keyanna:{color:"#D97706",bg:"#FEF3C7",text:"#B45309"}},Eu={ellie:{color:"#E11D48",bg:"#FFE4E6",text:"#BE123C",border:"#FECDD3"},lewis:{color:"#059669",bg:"#D1FAE5",text:"#047857",border:"#A7F3D0"},casey:{color:"#7C3AED",bg:"#EDE9FE",text:"#6D28D9",border:"#DDD6FE"},gigi:{color:"#DB2777",bg:"#FCE7F3",text:"#BE185D",border:"#FBCFE8"},sloane:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},sloan:{color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",border:"#BAE6FD"},scoob:{color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",border:"#FED7AA"}};function Ae(w){return w?String(w).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g," ").replace(/\s+/g," ").trim():""}function ct(w){if(!w)return"";const _=String(w).toLowerCase();return _.includes("litter")?"litter_box":_.includes("herd")&&(_.includes("breakfast")||_.includes("supper")||_.includes("feed the herd"))?"feed_herd":_.includes("dishwasher")&&_.includes("empty")?"empty_dishwasher":_.includes("supper")||_.includes("dinner")&&_.includes("plan")?"make_supper":_.includes("dishes")||_.includes("kitchen cleanup")?"dinner_dishes":_.includes("bedroom")||_.includes("personal spaces")?"tidy_bedrooms":_.includes("laundry")?"laundry":_.includes("basement")?"clean_basement":_.includes("feeding station")||_.includes("deep clean")&&_.includes("feeding")?"feeding_station_deep_clean":_.includes("recycling")?"curbside_recycling":_.includes("waste")?"curbside_waste":_.includes("sign-off")||_.includes("sign off")||_.includes("inspection")?"weekly_sign_off":_.includes("walk")&&_.includes("dog")?"walk_dogs":Ae(w)}function en(w){const _=String(w||"").toLowerCase();return _.includes("tidy bedroom")||_.includes("tidy up bedroom")||_.includes("tidy bedrooms")||_.includes("personal spaces")}function Pu(w){return String(w||"").toLowerCase().includes("laundry")}function jl(w){return en(w)||Pu(w)}function Ku(w){const _=String(w||"").toLowerCase();return _.includes("clean basement")||_.includes("basement")}function Bu(w){const _=String(w||"").toLowerCase();return _.includes("feeding station")||_.includes("herd feeding")||_.includes("deep clean")&&_.includes("feeding")}function Dn(w){const _=String(w||"").toLowerCase();return _.includes("sign-off")||_.includes("sign off")||_.includes("inspection")}function lp(w,_){if(jl(w)||Dn(w))return!1;if(Ku(w)||Bu(w))return!0;const v=String(w||"").toLowerCase();return!!(v.includes("curbside")||v.includes("recycling")||v.includes("waste")||_&&(_.frequency==="weekly"||_.frequency==="biweekly"))}function cr(w){const v=String(w||"").match(/tidy bedroom:\s*([A-Za-z]+)/i);return v?v[1].trim():null}function lo(w,_,v){const V=new Date(w,_,v,12,0,0),K=new Date(2026,9,18,12,0,0),Y=(Math.round((V.getTime()-K.getTime())/(1e3*60*60*24))%14+14)%14;return Y===0?{isPresent:!0,label:"Arrives 5 PM",fullLabel:"Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",cycleIndex:Y,isArrivalDay:!0,isDepartureDay:!1,isFullStay:!1}:Y>=1&&Y<=6?{isPresent:!0,label:"Here (Kids Week)",fullLabel:"Cadence & Mason are here this week (Kids Week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!0}:Y===7?{isPresent:!0,label:"Leaves 5 PM",fullLabel:"Cadence & Mason depart today at 5:00 PM (End of Kids Week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!0,isFullStay:!1}:{isPresent:!1,label:"Away (Off Week)",fullLabel:"Cadence & Mason are away this week (Off week)",cycleIndex:Y,isArrivalDay:!1,isDepartureDay:!1,isFullStay:!1}}function Mu(w,_="Cadence & Mason"){if(!w||w.length<7)return null;const v=w[6],V=w[0],K=lo(V.year,V.month,V.day);return lo(v.year,v.month,v.day).isArrivalDay?{text:`${_} arrive Sunday at 5:00 PM`,badgeBg:"bg-pink-50 text-pink-700 border-pink-200"}:K.isPresent&&K.isFullStay?{text:`${_} here this week (leave Sun 5 PM)`,badgeBg:"bg-emerald-50 text-emerald-700 border-emerald-200"}:{text:`${_} away this week (next back on Sunday)`,badgeBg:"bg-slate-100 text-slate-500 border-slate-200"}}function ip(w){if(!w||w.length<6)return!1;const _=w[5]||w[w.length-1],v=lo(_.year,_.month,_.day);return v.isFullStay||v.isDepartureDay}function qu(w,_,v,V=["Thom","Meghan"]){const K=new Date(w,_,v,12,0,0),z=new Date(2026,9,11,12,0,0),Y=Math.round((K.getTime()-z.getTime())/(1e3*60*60*24*7)),de=V&&V.length>0?V:["Thom","Meghan"],te=(Y%de.length+de.length)%de.length;return de[te]}var dp=[{name:"Ellie",kind:"Dog",icon:"🐕"},{name:"Lewis",kind:"Dog",icon:"🐕"},{name:"Casey",kind:"Cat",icon:"🐈"},{name:"Gigi",kind:"Cat",icon:"🐈"},{name:"Sloane",kind:"Cat",icon:"🐈"},{name:"Scoob",kind:"Cat",icon:"🐈"}],An=[{id:"Pet Care",name:"Pet Care",icon:"🐾",bg:"bg-amber-50",text:"text-amber-800",border:"border-amber-200",dot:"#D97706"},{id:"Kitchen",name:"Kitchen",icon:"🍽️",bg:"bg-emerald-50",text:"text-emerald-800",border:"border-emerald-200",dot:"#059669"},{id:"Bedrooms",name:"Bedrooms",icon:"🛏️",bg:"bg-pink-50",text:"text-pink-800",border:"border-pink-200",dot:"#DB2777"},{id:"Household",name:"Household",icon:"🏠",bg:"bg-blue-50",text:"text-blue-800",border:"border-blue-200",dot:"#2563EB"}],hd=[{title:"Empty the Litter Box (Morning & Evening)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening scoop, waste disposal"},{title:"Feed the Herd (Breakfast & Supper)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening feeding, refresh water bowls"},{title:"Make Supper: Plan Ahead!",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Parents & Kids",notes:"Meal prep, cooking, family dinner"},{title:"Dinner Dishes & Kitchen Cleanup",category:"Kitchen",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Clear table, dishwasher, wipe counters & sink"},{title:"Tidy Bedrooms & Checklist",category:"Bedrooms",who:"Each Child",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Occupants",notes:"Pick up mess & laundry, dust surfaces, vacuum floors"},{title:"Laundry (Wash, Fold, Put Away)",category:"Household",who:"Sydney",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"Sydney",notes:"Linens, clothes, fold and put in drawers"},{title:"Clean Basement & Rec Room",category:"Household",freq:{frequency:"weekly",dayOfWeek:5},targetDay:"Saturday",rotationGroup:"All Kids",notes:"Tidy items, organize games, vacuum carpet"},{title:"Weekly Sign-Off & Inspection",category:"Administration",who:"Parents",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"},{title:"Herd Feeding Station Deep Clean",category:"Pet Care",freq:{frequency:"weekly",dayOfWeek:6},targetDay:"Sunday",rotationGroup:"Full-Time Roster",notes:"Wash & sanitize pet bowls, wipe feeding mat"},{title:"Curbside Recycling",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"},{title:"Curbside Waste",category:"Household",freq:{frequency:"biweekly",dayOfWeek:3},targetDay:"Thursday Evening",rotationGroup:"All Non-Casual",notes:"Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"},{title:"Walk Dogs: Ellie & Lewis (Morning & Evening walk)",category:"Pet Care",freq:{frequency:"daily",dayOfWeek:0},targetDay:"Mon – Sun",rotationGroup:"Kids Rotation",notes:"Morning & evening walk for Ellie & Lewis"}];function Et(w,_,v,V){const K=String(w||"").toLowerCase(),z=K.includes("recycling"),Y=K.includes("waste");if(!z&&!Y)return!0;const de=new Date(_,v,V,12,0,0),te=new Date(2026,9,15,12,0,0),M=Math.round((de.getTime()-te.getTime())/(1e3*60*60*24)),q=(Math.round(M/7)%2+2)%2;return z?q===0:Y?q===1:!0}function Sl(w){const _=String(w||"").toLowerCase().trim();return _.includes("recycling")||_.includes("waste")?{frequency:"biweekly",dayOfWeek:3}:_.includes("sign-off")||_.includes("inspection")||_.includes("deep clean")||_.includes("feeding station")?{frequency:"weekly",dayOfWeek:6}:_.includes("tidy bedroom")||_.includes("clean basement")||_.includes("laundry")?{frequency:"weekly",dayOfWeek:5}:{frequency:"daily",dayOfWeek:0}}function Ru(w){return w<10?"0"+w:""+w}function jn(w,_,v){return`${w}-${Ru(_+1)}-${Ru(v)}`}function Tt(w){if(w==null||w==="")return null;if(w instanceof Date)return{year:w.getFullYear(),month:w.getMonth(),day:w.getDate()};if(typeof w=="number"){if(w>3e4&&w<6e4){const V=(w-25569)*86400*1e3,K=new Date(V);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const _=String(w).trim();if(!_.includes("-")){const V=Number(_);if(!isNaN(V)&&V>3e4&&V<6e4){const K=new Date((V-25569)*86400*1e3);return{year:K.getUTCFullYear(),month:K.getUTCMonth(),day:K.getUTCDate()}}return null}const v=_.split("-").map(Number);return v.length!==3||isNaN(v[0])||isNaN(v[1])||isNaN(v[2])?null:{year:v[0],month:v[1]-1,day:v[2]}}function $u(w,_,v){const K=new Date(w,_,v).getDay(),z=K===0?-6:1-K,Y=new Date(w,_,v+z);return{year:Y.getFullYear(),month:Y.getMonth(),day:Y.getDate()}}function ks(w,_,v){const V=$u(w,_,v),K=[];for(let z=0;z<7;z++){const Y=new Date(V.year,V.month,V.day+z),de=Y.getFullYear(),te=Y.getMonth(),M=Y.getDate();K.push({year:de,month:te,day:M,dateKey:jn(de,te,M),isCurrentMonth:!0,dayOfWeekIndex:z})}return K}function _s(){const w=new Date,_=$u(w.getFullYear(),w.getMonth(),w.getDate());return{..._,todayYear:w.getFullYear(),todayMonth:w.getMonth(),todayDay:w.getDate(),dateKey:jn(_.year,_.month,_.day)}}function cp(w,_=hd){const v=Tt(w)||{year:2026,month:9,day:12},V=ks(v.year,v.month,v.day),K=["Thom","Meghan"],z=["Sydney"],Y=["Sydney","Cadence","Mason"],de=["Thom","Meghan","Sydney"],te=["Thom","Meghan","Sydney","Cadence","Mason"],M={};return V.forEach((P,q)=>{const re=P.dateKey;M[re]={};const be=lo(P.year,P.month,P.day),Le=be.isFullStay||be.isDepartureDay,le=Le?te:de,oe=Le?Y:z,Fe=q%le.length;let De=0;_.forEach((J,Ee)=>{var Qe,ot,Ye,He,Me,ye,Ue;const fe=J.task||J.title||((Qe=J.row)==null?void 0:Qe[0])||"",Ie=fe.toLowerCase(),$e=Sl(fe);let ee=!1;const Se=Ie.includes("deep clean")||Ie.includes("feeding station"),ce=Ie.includes("recycling"),L=Ie.includes("waste");if(Se)ee=q===6;else if(ce)ee=q===3&&Et("recycling",P.year,P.month,P.day);else if(L)ee=q===3&&Et("waste",P.year,P.month,P.day);else if($e.frequency==="daily"||(ot=J.frequency)!=null&&ot.toLowerCase().includes("daily")&&!((Ye=J.frequency)!=null&&Ye.toLowerCase().includes("once")))ee=!0;else if($e.frequency==="biweekly"||(He=J.frequency)!=null&&He.toLowerCase().includes("bi"))ee=q===3&&Et(fe,P.year,P.month,P.day);else if($e.frequency==="weekly"||(Me=J.frequency)!=null&&Me.toLowerCase().includes("weekly")&&!((ye=J.frequency)!=null&&ye.toLowerCase().includes("bi"))||(Ue=J.frequency)!=null&&Ue.toLowerCase().includes("once")){const F=String(J.targetDay||"").toLowerCase(),xe=F.includes("sunday")?6:F.includes("thursday")?3:5;ee=q===xe}let $="";ee?en(fe)?$=Le?"Each Child":"Sydney":q===6&&Ie.includes("supper")?$=qu(P.year,P.month,P.day,K):Ie.includes("sign-off")||Ie.includes("inspection")?$=K[q%K.length]:Ie.includes("basement")?$=oe[(Fe+1)%oe.length]:Ie.includes("laundry")?$=oe[Fe%oe.length]:Se?$=le[(Fe+1)%le.length]:Ie.includes("recycling")?$=le[(Fe+3)%le.length]:Ie.includes("waste")?$=le[(Fe+2)%le.length]:($=le[(Fe+De)%le.length],De++):$="";const X=J.index_!==void 0?J.index_:5+Ee,y={who:$,done:!1,kidsDone:{}};M[re][X]=y,J.index_!==void 0&&(M[re][J.index_]=y),fe&&(M[re][fe]=y,M[re][Ie]=y)})}),M}function Lu(w,_){const v=Tt(_)||{year:2026,month:9,day:12},V=ks(v.year,v.month,v.day),K={};return V.forEach(z=>{K[z.dateKey]={}}),!w||!Array.isArray(w)||w.forEach(z=>{if(z.index_<4||!z.row||z.row.length===0)return;const Y=String(z.row[0]||"").trim(),de=Y.toLowerCase();if(!Y||Y.startsWith("•")||de==="daily tasks"||de==="weekly tasks"||Y.toUpperCase().includes("SECTION")||Y.toUpperCase().includes("ONCE-A-WEEK")||Y.toUpperCase().includes("ROSTER")||Y.toUpperCase().includes("PET CARE"))return;const te=Y.toLowerCase(),M=ct(Y),P=z.index_;V.forEach((q,re)=>{const be=1+re*2,Le=2+re*2,le=z.row[be]!==void 0&&z.row[be]!==null?String(z.row[be]).trim():"",Fe=le.startsWith("-")||le.startsWith("(")||le.startsWith("SG:")||le.startsWith("Done:")||le.startsWith("Parent Initials")||le.startsWith("___")||/^Who:\s*_+$/i.test(le)?"":le.replace(/^Who:\s*/i,"").trim(),De=z.row[Le]===!0||String(z.row[Le]).toLowerCase()==="true",J={who:Fe,done:De,kidsDone:{}};jl(Y)&&((z.row[2]===!0||String(z.row[2]).toLowerCase()==="true")&&(J.kidsDone.Sydney=!0),(z.row[4]===!0||String(z.row[4]).toLowerCase()==="true")&&(J.kidsDone.Cadence=!0),(z.row[6]===!0||String(z.row[6]).toLowerCase()==="true")&&(J.kidsDone.Mason=!0),(z.row[12]===!0||String(z.row[12]).toLowerCase()==="true")&&(J.kidsDone.Koda=!0),(z.row[14]===!0||String(z.row[14]).toLowerCase()==="true")&&(J.kidsDone.Keyanna=!0)),K[q.dateKey][P]=J,K[q.dateKey][Y]=J,K[q.dateKey][te]=J,M&&(K[q.dateKey][M]=J)})}),K}function up({data:w,updateItem:_,deleteItem:v,insertItem:V,moveItem:K,followLink:z}){var Y,de,te;const[M,P]=I.useState(()=>new Set),[q,re]=I.useState({}),[be,Le]=I.useState([]),[le,oe]=I.useState([]),[Fe,De]=I.useState(null),[J,Ee]=I.useState(null),[Qe,ot]=I.useState(null),Ye=I.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return(i.includes("printable")||i.includes("weekly")&&i.includes("schedule"))&&!i.includes("hub")})||w[0],[w]),He=I.useMemo(()=>!w||!Array.isArray(w)?null:w.find(s=>{const i=String(s.name||"").toLowerCase();return i.includes("hub")||i.includes("household")||i.includes("directory")||i.includes("roster")})||(w.length>1?w[1]:w[0]),[w]),Me=(Y=Ye==null?void 0:Ye.index_)!=null?Y:0,ye=(de=He==null?void 0:He.index_)!=null?de:(w==null?void 0:w.length)>1?1:0,Ue=He||{data:[]},fe=Ye||{data:[]},Ie=Me,$e=Ue;fe!=null&&fe.data;const ee=(s,i)=>{if(!(fe!=null&&fe.data)||fe.data.length===0)return null;const c=ct(s),m=Ae(s);if(c){const p=fe.data.find(h=>h.index_<4||!h.row||!h.row[0]?!1:ct(h.row[0])===c);if(p)return p}if(m){const p=fe.data.find(d=>d.index_<4||!d.row||!d.row[0]?!1:Ae(d.row[0])===m);if(p)return p;const h=fe.data.find(d=>{if(d.index_<4||!d.row||!d.row[0])return!1;const f=Ae(d.row[0]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=fe.data.find(h=>h.index_===i&&h.index_>=4);if(p)return p}return null},Se=(s,i)=>{const c=ee(s,i);return c?c.index_:i},ce=(s,i)=>{if(!(Ue!=null&&Ue.data)||Ue.data.length===0)return null;const c=ct(s),m=Ae(s);if(c){const p=Ue.data.find(h=>h.index_<5||!h.row||!h.row[6]?!1:ct(h.row[6])===c);if(p)return p}if(m){const p=Ue.data.find(d=>d.index_<5||!d.row||!d.row[6]?!1:Ae(d.row[6])===m);if(p)return p;const h=Ue.data.find(d=>{if(d.index_<5||!d.row||!d.row[6])return!1;const f=Ae(d.row[6]);return f.startsWith(m)||m.startsWith(f)||f.includes(m)||m.includes(f)});if(h)return h}if(!s&&i!==void 0&&i!==null){const p=Ue.data.find(h=>h.index_===i&&h.index_>=5);if(p)return p}return null},L=(s,i)=>{const c=ce(s,i);return c?c.index_:i},$=I.useMemo(()=>{const s=$e.data||[];let i="2026-10-12",c="Kids Week",m="Mason, Cadence",p="Bi-Weekly Schedule continuing on from first Friday specified",h="Non-Casual";return s.forEach(d=>{if(!d.row)return;const f=String(d.row[6]||"").toLowerCase().trim(),x=d.row[7],C=String(d.row[8]||"").trim(),D=String(d.row[10]||"").trim();if(f.includes("active week")){const T=Tt(x);T?i=jn(T.year,T.month,T.day):x&&(i=String(x).trim())}else f.includes("custody schedule")?(x&&(c=String(x).trim()),D&&(m=D)):(f.includes("waste")||f.includes("recycling"))&&(C&&(p=C),D&&(h=D))}),{activeWeekStart:i,custodyRotation:c,custodyMembers:m,wasteRotation:p,wasteMembers:h}},[$e]),X=I.useMemo(()=>{const s=$e.data||[],i=[];return s.forEach(c=>{if(!c.row||c.index_<14||c.index_>17)return;const m=String(c.row[0]||"").trim();!m||m.toLowerCase()==="type"||m.toLowerCase().includes("occupancy")||m.toLowerCase().includes("special rotation")||i.push({type:m,description:String(c.row[1]||"").trim(),rules:String(c.row[2]||"").trim(),active:c.row[4]!==!1&&String(c.row[4]).toLowerCase()!=="false"})}),i.length>0?i:[{type:"Full-Time",description:"Constant Residency",rules:"Included in all weekly/monthly schedulings",active:!0},{type:"Bi-Weekly",description:"Half-Time Residency",rules:'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',active:!0},{type:"Casual",description:"Periodic Residency",rules:"Manually added to any schedules",active:!0}]},[$e]),y=I.useMemo(()=>{const i=($e.data||[]).filter(c=>{if(!!!(c.row&&c.row[5]==="MEMBER_ROW")&&(c.index_<4||c.index_>12)||!c.row||!c.row[0])return!1;const p=String(c.row[0]).trim();if(!p)return!1;const h=p.toLowerCase();return!(h==="household members"||h==="name"||h.includes("directory")||h.includes("occupancy"))});return i.length===0?[{id:"Thom",name:"Thom",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#2563EB",bg:"#DBEAFE",text:"#1D4ED8",index_:5},{id:"Meghan",name:"Meghan",role:"Overseer Supreme",residency:"Full-Time",type:"regular",specialGroups:"Parents, Non-Casual, All",active:!0,color:"#8B5CF6",bg:"#EDE9FE",text:"#6D28D9",index_:6},{id:"Sydney",name:"Sydney",role:"Minion",residency:"Full-Time",type:"regular",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#0D9488",bg:"#CCFBF1",text:"#0F766E",index_:7},{id:"Cadence",name:"Cadence",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EC4899",bg:"#FCE7F3",text:"#BE185D",index_:8},{id:"Mason",name:"Mason",role:"Minion",residency:"Bi-Weekly",type:"biweekly",specialGroups:"Kids, Non-Casual, All",active:!0,color:"#EA580C",bg:"#FFEDD5",text:"#C2410C",index_:9},{id:"Koda",name:"Koda",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#0284C7",bg:"#E0F2FE",text:"#0369A1",index_:10},{id:"Keyanna",name:"Keyanna",role:"Minion",residency:"Casual",type:"casual",specialGroups:"All",active:!0,color:"#D97706",bg:"#FEF3C7",text:"#B45309",index_:11}]:i.map((c,m)=>{const p=String(c.row[0]||"").trim(),h=String(c.row[1]||"").trim()||(["thom","meghan"].includes(p.toLowerCase())?"Overseer Supreme":"Minion"),d=String(c.row[2]||"").trim(),f=String(c.row[3]||"").trim(),x=c.row[4]===!0||String(c.row[4]).toLowerCase()==="true",C=d.toLowerCase();let D="regular";C.includes("bi-weekly")||C.includes("biweekly")?D="biweekly":C.includes("casual")&&(D="casual");const T=ap[p.toLowerCase()]||bs[m%bs.length];return{id:p,name:p,role:h,residency:d||(D==="biweekly"?"Bi-Weekly":D==="casual"?"Casual":"Full-Time"),type:D,specialGroups:f,schedule:D==="biweekly"?"Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)":D==="casual"?"Periodic Residency (Manual Add)":"Constant Residency (Full-Time)",active:x,color:T.color,bg:T.bg,text:T.text,index_:c.index_}})},[$e]),F=I.useMemo(()=>["All","Kids","Parents","Non-Casual"].map(i=>{const c=y.filter(m=>String(m.specialGroups||"").split(",").map(h=>h.trim().toLowerCase()).filter(Boolean).includes(i.toLowerCase())).map(m=>m.name);return{name:i,members:c.length>0?c.join(", "):"None",active:!0}}),[y]),xe=I.useMemo(()=>y.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")&&!i.includes("admin")&&!i.includes("mom")&&!i.includes("dad")}).map(s=>s.name),[y]),ge=I.useMemo(()=>{const s=["Sydney","Cadence","Mason","Koda","Keyanna"],i=Array.from(new Set([...xe,...s]));return i.length>0?i:s},[xe]),ke=I.useMemo(()=>{const s=$e.data||[],i=s.find(c=>{var m;const p=String(((m=c.row)==null?void 0:m[0])||"").toLowerCase().trim();return p.includes("pet care profile")||p==="pet name"});return i?s.filter(m=>{if(m.index_<=i.index_||!m.row||!m.row[0]||m.row[5]==="MEMBER_ROW")return!1;const h=String(m.row[0]).trim().toLowerCase();return h!=="pet name"&&!h.includes("profile")}).map((m,p)=>{const h=String(m.row[0]).trim(),d=String(m.row[1]||"").trim(),f=String(m.row[2]||"").trim(),x=String(m.row[3]||"").trim(),C=m.row[4]!==!1&&String(m.row[4]).toLowerCase()!=="false",D=["ellie","lewis"].includes(h.toLowerCase()),T=d||(D?"Dog":"Cat"),b=T.toLowerCase(),N=b.includes("dog"),O=N?"🐕":b.includes("cat")?"🐈":b.includes("bird")?"🐦":b.includes("fish")?"🐟":"🐾",U=f||"Morning & Evening",W=["meghan","thom","sydney"].includes(x.toLowerCase()),R=!x||W?N?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water":x,Z=Eu[h.toLowerCase()]||bs[p%bs.length];return{name:h,type:T,routine:U,care:R,active:C,icon:O,color:Z.color,bg:Z.bg,text:Z.text,border:Z.border||Z.color,index_:m.index_}}):dp.map((c,m)=>{const p=Eu[c.name.toLowerCase()]||bs[m%bs.length];return{name:c.name,type:c.kind,routine:"Morning & Evening",care:c.kind==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water",active:!0,icon:c.icon,color:p.color,bg:p.bg,text:p.text,border:p.border||p.color,index_:15+m}})},[$e]),we=I.useMemo(()=>{const s=$e.data||[];let i=[];const c=new Set,m=new Set;if(s.forEach(p=>{if(!p.row||p.index_<5)return;const h=p.row[6]!==void 0&&p.row[6]!==null?String(p.row[6]).trim():"";if(!h)return;const d=h.toLowerCase(),f=Ae(h),x=ct(h);if(d==="chore"||d==="parameter"||d.includes("schedule configuration")||d.includes("active week")||d.includes("waste / recycling")||d.includes("custody schedule")||d.includes("pet care profile")||d.includes("special rotation")||d.includes("occupancy categories")||d.includes("household member")||Dn(h)||x==="weekly_sign_off"||c.has(x)||m.has(f)||M.has(String(p.index_))||M.has(d)||M.has(f)||M.has(x))return;const C=String(p.row[7]||"").trim(),D=String(p.row[8]||"").trim(),T=String(p.row[9]||"").trim(),b=String(p.row[10]||"").trim(),N=String(p.row[11]||"").trim(),O=An.some(je=>je.name.toLowerCase()===C.toLowerCase()),R=(je=>{const Ke=String(je).trim().toLowerCase();return!Ke||Ke==="all non-casual"||Ke==="non-casual"||Ke==="parents & kids"||Ke==="full-time roster"?"Non-Casual":Ke==="kids"||Ke==="kids rotation"||Ke==="all kids"?"Kids":Ke==="parents"?"Parents":Ke==="all"||Ke==="all occupants"?"All":String(je).trim()})(O?b||"Non-Casual":C||"Non-Casual"),ne=(D||(x.includes("curbside")?"Bi-Weekly":x.includes("deep_clean")||x.includes("sign_off")||x.includes("bedroom")||x.includes("laundry")||x.includes("basement")?"Once a Week":"Daily")).toLowerCase(),Re=ne.includes("bi")?"Bi-Weekly":ne.includes("once")||ne.includes("weekly")?"Once a Week":"Daily",it=(T==="N/A"||!T?Re==="Daily"?"Mon – Sun":Re==="Bi-Weekly"?"Thursday Evening":"Saturday":T).replace(/\s*\(required\)/i,"").trim()||"Mon – Sun",kt=O?N:b;let Ne=O?C:N&&An.some(je=>je.name.toLowerCase()===N.toLowerCase())?N:"Household";!O&&Ne==="Household"&&(d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?Ne="Pet Care":d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")||d.includes("cook")?Ne="Kitchen":d.includes("bedroom")?Ne="Bedrooms":d.includes("basement")?Ne="Household":(d.includes("sign-off")||d.includes("inspection"))&&(Ne="Administration")),c.add(x),m.add(f),i.push({index_:p.index_,task:h,canonicalKey:x,category:Ne,frequency:Re,targetDay:it==="N/A"?"Mon – Sun":it,rotationGroup:R,notes:kt,source:"hub_master_registry"})}),fe!=null&&fe.data&&fe.data.forEach(p=>{if(p.index_<4||!p.row||!p.row[0])return;const h=String(p.row[0]).trim(),d=h.toLowerCase(),f=Ae(h),x=ct(h);if(!f||f==="daily tasks"||f==="weekly tasks"||f.includes("section")||f.includes("once a week")||f.includes("bedroom checklist")||f.includes("pet care routine")||f.startsWith("•")||Dn(h)||x==="weekly_sign_off"||c.has(x)||m.has(f)||M.has(f)||M.has(x)||M.has(String(p.index_)))return;c.add(x),m.add(f);const C=Sl(h),D=C.frequency==="weekly",T=C.frequency==="biweekly";let b="Household",N="";d.includes("litter")||d.includes("feed")||d.includes("herd")||d.includes("walk")?(b="Pet Care",d.includes("walk")&&(N="Morning & evening walk for Ellie & Lewis")):d.includes("supper")||d.includes("dishes")||d.includes("dishwasher")||d.includes("kitchen")?b="Kitchen":d.includes("bedroom")?b="Bedrooms":d.includes("basement")?b="Household":(d.includes("sign-off")||d.includes("inspection"))&&(b="Administration"),i.push({index_:p.index_,task:h,canonicalKey:x,category:b,frequency:T?"Bi-Weekly":D?"Once a Week":"Daily",targetDay:T?"Thursday Evening":D?"Saturday":"Mon – Sun",rotationGroup:"Non-Casual",notes:N,source:"printable_sheet"})}),le.length>0&&le.forEach(p=>{const h=Ae(p.task),d=ct(p.task);!c.has(d)&&!m.has(h)&&!M.has(String(p.index_))&&!M.has(h)&&!M.has(d)&&(c.add(d),m.add(h),i.push(p))}),i.length===0&&(i=hd.filter(p=>!Dn(p.title)).map((p,h)=>{var d,f;return{index_:5+h,task:p.title,category:p.category||"Household",frequency:((d=p.freq)==null?void 0:d.frequency)==="weekly"?"Once a Week":((f=p.freq)==null?void 0:f.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:p.targetDay||"Mon – Sun",rotationGroup:p.rotationGroup||"Non-Casual",notes:p.notes||"",source:"default"}})),Fe&&Array.isArray(Fe)&&Fe.length>0){const p=h=>{const d=Ae(h.task),f=Fe.indexOf(d);if(f!==-1)return f;const x=(h.task||"").toLowerCase().trim(),C=Fe.indexOf(x);if(C!==-1)return C;const D=ct(h.task);if(D){const T=Fe.findIndex(b=>ct(b)===D);if(T!==-1)return T}return-1};i.sort((h,d)=>{const f=p(h),x=p(d);return f!==-1&&x!==-1?f-x:f!==-1?-1:x!==-1?1:0})}return i},[$e,le,Fe,M]),Ce=I.useMemo(()=>s=>{if(!s)return null;const i=String(s).trim().toLowerCase();return y.find(c=>c.name.toLowerCase()===i||c.id.toLowerCase()===i||i==="mom"&&(c.name.toLowerCase().includes("megh")||c.role.toLowerCase().includes("mom")||c.role.toLowerCase().includes("parent"))||i==="dad"&&(c.name.toLowerCase()==="thom"||c.role.toLowerCase().includes("dad")||c.role.toLowerCase().includes("parent")))||null},[y]),qe=I.useMemo(()=>{const s=y.filter(i=>i.type==="biweekly").map(i=>i.name);return s.length>0?s.join(" & "):"Cadence & Mason"},[y]),Oe=I.useMemo(()=>$!=null&&$.activeWeekStart?$.activeWeekStart:"2026-10-12",[$]);I.useMemo(()=>Tt(Oe)||{year:2024,month:6,day:15},[Oe]);const ut=I.useMemo(()=>{const s=(fe==null?void 0:fe.data)||[],i=(d,f)=>{const x=ct(d);if(x==="litter_box"||x==="feed_herd"||x==="empty_dishwasher"||x==="make_supper"||x==="dinner_dishes"||x==="walk_dogs")return!0;if(x==="curbside_recycling"||x==="curbside_waste"||x==="clean_basement"||x==="feeding_station_deep_clean"||x==="tidy_bedrooms"||x==="laundry")return!1;const C=String(f||"").toLowerCase();return C.includes("bi")||C.includes("once")||C.includes("week")?!1:C.includes("daily")?!0:Sl(d).frequency==="daily"},c=[],m=[],p=new Set;we.forEach(d=>{if(Dn(d.task))return;const f=ct(d.task),x=Ae(d.task);if(p.has(f)||p.has(x))return;p.add(f),p.add(x);const C=s.find(N=>{if(N.index_<4||!N.row||!N.row[0])return!1;const O=String(N.row[0]).trim();return ct(O)===f||Ae(O)===x}),D=i(d.task,d.frequency);let T=C!=null&&C.row?[...C.row]:null;if(T)!D&&d.notes&&String(d.notes).trim()&&(T[1]=String(d.notes).trim());else if(D)T=[d.task,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];else if(jl(d.task))T=[d.task,d.notes||"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",!1,null,!1,null,!1,null,null,"SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",null,null,!1,null,!1];else{const N=d.notes||(f.includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":f.includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"- Pick Up, Organize, Dust & Vacuum");T=[d.task,N,null,null,null,null,null,null,null,"Who: _____________________",null,null,null,"Done: ______",!1]}const b={isSectionHeader:!1,index_:C?C.index_:d.index_,row:T,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};D?c.push(b):m.push(b)}),s.forEach(d=>{if(d.index_<4||!d.row||!d.row[0])return;const f=String(d.row[0]).trim(),x=f.toLowerCase();if(!f||x==="daily tasks"||x==="weekly tasks"||x.includes("once-a-week")||x.includes("bedroom checklist")||x.includes("pet care routine")||x.includes("household roster")||x.includes("bi-weekly schedule")||x.startsWith("•")||Dn(f))return;const C=ct(f),D=Ae(f);if(p.has(C)||p.has(D))return;p.add(C),p.add(D);const T=i(f),b={isSectionHeader:!1,index_:d.index_,row:d.row,task:f};T?c.push(b):m.push(b)}),be.length>0&&be.forEach(d=>{const f=ct(d.task),x=Ae(d.task);if(p.has(f)||p.has(x))return;p.add(f),p.add(x);const C=i(d.task,d.frequency),D={isSectionHeader:!1,index_:d.index_,row:d.row,task:d.task,category:d.category,frequency:d.frequency,targetDay:d.targetDay,rotationGroup:d.rotationGroup,notes:d.notes};C?c.push(D):m.push(D)});const h=[];return h.push({isSectionHeader:!0,headerType:"daily",index_:4,title:"Daily Tasks"}),h.push(...c),h.push({isSectionHeader:!0,headerType:"weekly",index_:10,title:"Weekly Tasks",descHeader:"Description",rightHeader:"Initials / Assigned"}),h.push(...m),h.push({isSectionHeader:!1,index_:18,row:["Weekly Sign-Off & Inspection","Parents",!1,null,null,null,null,null,null,"Thom / Meghan",null,null,null,null,null],task:"Weekly Sign-Off & Inspection",category:"Administration",frequency:"Once a Week",targetDay:"Sunday",rotationGroup:"Parents",notes:"Check off bedroom tidiness and completed chores"}),h.filter(d=>{if(d.isSectionHeader||Dn(d.task))return!0;const f=String(d.index_),x=String(d.task||"").toLowerCase().trim(),C=Ae(d.task),D=ct(d.task);return!(M.has(f)||M.has(x)||M.has(C)||M.has(D))}).map(d=>{if(d.isSectionHeader)return d;const f=q[d.index_]||q[String(d.task||"").toLowerCase().trim()]||(d.task?q[ct(d.task)]:null);if(!f)return d;const x=f.task||d.task,C=f.row?[...f.row]:[...d.row||[]];return C[0]=x,{...d,task:x,row:C,category:f.category||d.category,frequency:f.frequency||d.frequency,targetDay:f.targetDay||d.targetDay,rotationGroup:f.rotationGroup||d.rotationGroup,notes:f.notes||d.notes}})},[fe,we,be,M,q]),me=I.useMemo(()=>{const s=ut.filter(i=>!i.isSectionHeader).map(i=>{const c=i.task,m=ct(c),p=Ae(c),h=we.find(T=>{if(m&&ct(T.task)===m||p&&Ae(T.task)===p)return!0;const b=T.task.toLowerCase().trim();return c.toLowerCase().trim()===b})||we.find(T=>{const b=T.task.toLowerCase().trim(),N=c.toLowerCase().trim();return N.includes("deep clean")&&b.includes("deep clean")||N.includes("feed the herd")&&b.includes("feed the herd")?!0:N.includes(b)||b.includes(N)||N.includes("dishes")&&b.includes("dishes")||N.includes("litter")&&b.includes("litter")||N.includes("supper")&&b.includes("supper")||N.includes("basement")&&b.includes("basement")||N.includes("laundry")&&b.includes("laundry")||N.includes("sign-off")&&b.includes("sign-off")});let d=(h==null?void 0:h.category)||"Household",f=(h==null?void 0:h.frequency)||"Daily",x=(h==null?void 0:h.targetDay)||"Mon – Sun",C=(h==null?void 0:h.rotationGroup)||"Kids Rotation",D=(h==null?void 0:h.notes)||"";return c.toLowerCase().includes("deep clean")||c.toLowerCase().includes("feeding station")?(d="Pet Care",f="Once a Week",x="Sunday",C=(h==null?void 0:h.rotationGroup)||"All",D=(h==null?void 0:h.notes)||"Wash & sanitize pet bowls, vacuum feeding mat"):c.toLowerCase().includes("recycling")?(d="Household",f="Bi-Weekly",x="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)"):c.toLowerCase().includes("waste")?(d="Household",f="Bi-Weekly",x="Thursday Evening",C=(h==null?void 0:h.rotationGroup)||"All Non-Casual",D=(h==null?void 0:h.notes)||"Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)"):c.toLowerCase().includes("litter")||c.toLowerCase().includes("feed")?d="Pet Care":c.toLowerCase().includes("supper")||c.toLowerCase().includes("dishes")?d="Kitchen":en(c)?(d="Bedrooms",f="Once a Week",x="Saturday",C=cr(c)||"Each Child"):c.toLowerCase().includes("basement")?(d="Household",f="Once a Week",x="Saturday",C="All Kids"):c.toLowerCase().includes("laundry")?(d="Household",f="Once a Week",x="Saturday",C="Sydney"):c.toLowerCase().includes("sign-off")&&(d="Administration",f="Once a Week",x="Sunday",C="Parents"),{index_:i.index_,row:i.row,task:c,category:d,frequency:f,targetDay:x,rotationGroup:C,notes:D}});return s.length>0?s:hd.map((i,c)=>{var m,p;return{index_:4+c,row:[i.title,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1,null,!1],task:i.title,category:i.category,frequency:((m=i.freq)==null?void 0:m.frequency)==="weekly"?"Once a Week":((p=i.freq)==null?void 0:p.frequency)==="biweekly"?"Bi-Weekly":"Daily",targetDay:i.targetDay,rotationGroup:i.rotationGroup,notes:i.notes}})},[ut,we]),ur=I.useMemo(()=>_s(),[]),[Pt,tn]=I.useState("matrix"),[wt,Tn]=I.useState(()=>ur.todayYear),[st,Pr]=I.useState(()=>ur.todayMonth),[ht,rn]=I.useState(()=>ur.dateKey),[Vt,ya]=I.useState("ALL"),[Mt,nn]=I.useState(null),[ga,co]=I.useState(!1),[Ss,En]=I.useState(!1),[wa,Kr]=I.useState(!1),[hr,ba]=I.useState("add"),[nr,on]=I.useState([]),[As,Ds]=I.useState(""),[pr,vr]=I.useState(null),[uo,Po]=I.useState(""),[mr,sn]=I.useState("daily"),[Ko,js]=I.useState(5),[Bo,qo]=I.useState("All Non-Casual"),[_a,ho]=I.useState(!1),[va,Br]=I.useState(!1),[Ts,Mn]=I.useState(null),[Es,po]=I.useState(["Kids","Non-Casual","All"]),[Kt,Rn]=I.useState(null),[fr,Ms]=I.useState(null),[ka,mo]=I.useState(""),[kr,Ca]=I.useState(""),[Rs,pe]=I.useState(null),[$o,Na]=I.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[Ls,Fs]=I.useState(!1),[Ho,Ln]=I.useState("$15 Allowance Bonus & Choice of Friday Family Dinner"),[tt,Is]=I.useState("ALL"),[Cr,Fn]=I.useState("ALL"),[qr,Os]=I.useState(""),[Ws,Nr]=I.useState(null),[We,Rt]=I.useState(null),[Lt,Sr]=I.useState(null),[Sa,fo]=I.useState(!1),[Je,Bt]=I.useState({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",selectedTargetDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],customTargetEnabled:!1,customTargetText:"",rotationGroup:"Non-Casual",notes:""}),xo=async()=>{try{const s=localStorage.getItem(Ns),i=s?JSON.parse(s):w,m=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:i})})).json();m.ok?pe("✓ Current browser setup saved as the new default in code and weekly-chores-config.json!"):pe(`⚠️ Save failed: ${m.error}`)}catch(s){pe(`⚠️ Save failed: ${(s==null?void 0:s.message)||String(s)}`)}setTimeout(()=>pe(null),4e3)},zo=()=>{try{const s=localStorage.getItem(Ns),c={sheetData:s?JSON.parse(s):w,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},m=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),h=document.createElement("a"),d=new Date().toISOString().slice(0,10);h.href=p,h.download=`weekly-chores-config-${d}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{}),pe("✓ Configuration file exported and saved to workspace!"),setTimeout(()=>pe(null),3500)}catch(s){pe(`⚠️ Export failed: ${(s==null?void 0:s.message)||String(s)}`),setTimeout(()=>pe(null),3500)}},Tl=s=>{var m;const i=(m=s.target.files)==null?void 0:m[0];if(!i)return;const c=new FileReader;c.onload=p=>{var h;try{const d=JSON.parse((h=p.target)==null?void 0:h.result),f=d.sheetData||(Array.isArray(d)?d:null);Array.isArray(f)&&f.length>0?(localStorage.setItem(Ns,JSON.stringify(f)),window.postMessage({type:"SYNC_DATA",payload:f},"*"),pe(`✓ Loaded configuration from "${i.name}"!`)):pe("⚠️ Invalid configuration file: Missing sheetData")}catch(d){pe(`⚠️ Failed to parse config file: ${(d==null?void 0:d.message)||String(d)}`)}setTimeout(()=>pe(null),4e3)},c.readAsText(i),s.target.value=""},$r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],an=s=>{const i=String(s||"").trim();if(!i||i==="Mon – Sun"||i==="Mon - Sun"||i.toLowerCase()==="daily")return{selectedDays:[...$r],customEnabled:!1,customText:""};const c=i.split(",").map(h=>h.trim()).filter(Boolean),m=[],p=[];return c.forEach(h=>{const d=$r.find(f=>f.toLowerCase()===h.toLowerCase());d?m.includes(d)||m.push(d):p.push(h)}),{selectedDays:$r.filter(h=>m.includes(h)),customEnabled:p.length>0,customText:p.join(", ")}},Ar=(s,i,c)=>{const m=$r.filter(d=>s.includes(d)),p=m.length===7?"Mon – Sun":m.join(", "),h=String(c||"").trim();return i&&h?p?`${p}, ${h}`:h:p||"Mon – Sun"},ln=I.useMemo(()=>we.filter(s=>{if(tt!=="ALL"&&(s.category||"").toLowerCase()!==tt.toLowerCase())return!1;if(Cr!=="ALL"){const i=(s.frequency||"").toLowerCase(),c=Cr.toLowerCase();if(c==="daily"&&!i.includes("daily")||(c==="once a week"||c==="weekly")&&(!i.includes("once")&&!i.includes("weekly")||i.includes("bi"))||c==="bi-weekly"&&!i.includes("bi"))return!1}if(qr){const i=qr.toLowerCase();if(!((s.task||"").toLowerCase().includes(i)||(s.category||"").toLowerCase().includes(i)||(s.rotationGroup||"").toLowerCase().includes(i)||(s.notes||"").toLowerCase().includes(i)||(s.targetDay||"").toLowerCase().includes(i)))return!1}return!0}),[we,tt,Cr,qr]),[Go,yd]=I.useState(""),[Ps,ze]=I.useState(!1),[Yt,dn]=I.useState({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),[Ks,cn]=I.useState(null),[un,yo]=I.useState({name:"",routine:"",care:""}),[Bs,hn]=I.useState(null),[Dr,jr]=I.useState("");I.useEffect(()=>{(fe!=null&&fe.data||Ue!=null&&Ue.data)&&(oe(s=>s.filter(i=>{var c,m;const p=Ae(i.task),h=(c=Ue.data)==null?void 0:c.some(f=>f.row&&Ae(f.row[6])===p),d=(m=fe.data)==null?void 0:m.some(f=>f.row&&Ae(f.row[0])===p);return!h&&!d})),Le(s=>s.filter(i=>{var c;const m=Ae(i.task);return!((c=fe.data)==null?void 0:c.some(h=>h.row&&Ae(h.row[0])===m))})))},[fe.data,Ue.data]);const[or,pn]=I.useState({}),[Uo,mn]=I.useState("ALL"),Hr=s=>{var i;const c=(s==null?void 0:s.task)||((i=s==null?void 0:s.row)==null?void 0:i[0])||"";if(or[c])return or[c];if(or[s==null?void 0:s.index_])return or[s==null?void 0:s.index_];const m=String(c||"").toLowerCase();if(m.includes("recycling")||m.includes("waste"))return{frequency:"biweekly",dayOfWeek:3};if(m.includes("deep clean")||m.includes("feeding station"))return{frequency:"weekly",dayOfWeek:6};const p=ct(c),h=we.find(d=>p&&ct(d.task)===p||Ae(d.task)===Ae(c)||d.task.toLowerCase()===c.toLowerCase());if(h){const d=String(h.frequency||"").toLowerCase(),f=String(h.targetDay||"").toLowerCase();return d.includes("bi-weekly")||d.includes("biweekly")?{frequency:"biweekly",dayOfWeek:3}:d.includes("weekly")||d.includes("once")?{frequency:"weekly",dayOfWeek:f.includes("sunday")?6:f.includes("thursday")?3:f.includes("friday")?4:5}:{frequency:"daily",dayOfWeek:0}}return Sl(c)},[pt,bt]=I.useState(()=>{var s,i;const c=((s=w==null?void 0:w.find(m=>{const p=String(m.name||"").toLowerCase();return(p.includes("printable")||p.includes("weekly")&&p.includes("schedule"))&&!p.includes("hub")}))==null?void 0:s.data)||((i=w==null?void 0:w[0])==null?void 0:i.data)||[];return Lu(c,_s().dateKey)}),Aa=()=>{const s=ht||_s().dateKey,i=cp(s,me);if(bt(c=>({...c,...i})),Me>=0){const c=Tt(s)||{year:2026,month:9,day:12};me.forEach(m=>{var p,h,d,f,x,C;const D=ee(m.task,m.index_);if(!D)return;const T=new Array(15).fill(void 0);let b=!1;for(let N=0;N<7;N++){const O=new Date(c.year,c.month,c.day+N),U=jn(O.getFullYear(),O.getMonth(),O.getDate()),W=((h=(p=i[U])==null?void 0:p[m.index_])==null?void 0:h.who)||((f=(d=i[U])==null?void 0:d[m.task])==null?void 0:f.who)||((C=(x=i[U])==null?void 0:x[ct(m.task)])==null?void 0:C.who);if(W){const R=1+N*2;T[R]=W,b=!0}}b&&_(Me,D.index_,T)})}pe(`Distributed & assigned all scheduled chores for week of ${s} across Thom, Meghan, Sydney, Cadence, and Mason (Sunday Supper assigned to parents)!`),setTimeout(()=>pe(null),4500)},At=I.useMemo(()=>{const s=Tt(ht)||{year:2026,month:9,day:12};return ks(s.year,s.month,s.day)},[ht]),fn=I.useMemo(()=>Mu(At,qe),[At,qe]),Tr=I.useMemo(()=>ip(At),[At]);I.useMemo(()=>y.filter(s=>{if(s.active===!1)return!1;const i=String(s.role||"").toLowerCase();return!i.includes("parent")&&!i.includes("overseer")&&!i.includes("overlord")?s.type==="regular"?!0:s.type==="biweekly"?Tr:!1:!1}).map(s=>s.name),[y,Tr]),I.useMemo(()=>{const s=y.filter(i=>{if(i.active===!1)return!1;const c=String(i.role||"").toLowerCase();return!c.includes("parent")&&!c.includes("overseer")&&!c.includes("overlord")&&i.type==="casual"}).map(i=>i.name);return s.length>0?s:["Koda","Keyanna"]},[y]),I.useEffect(()=>{if(!(fe!=null&&fe.data)||fe.data.length===0)return;const s=Lu(fe.data,ht||Oe||"2026-10-12");bt(i=>{const c={...i};return Object.keys(s).forEach(m=>{c[m]={...c[m]||{},...s[m]}}),c})},[fe,ht,Oe]);const go=I.useMemo(()=>{const s=new Date(wt,st+1,0).getDate(),i=new Date(wt,st,1).getDay(),c=i===0?6:i-1,m=new Date(wt,st,0).getDate(),p=[];let h=[];for(let d=c-1;d>=0;d--){const f=m-d,x=st===0?11:st-1,C=st===0?wt-1:wt;h.push({year:C,month:x,day:f,dateKey:jn(C,x,f),isCurrentMonth:!1,dayOfWeekIndex:h.length})}for(let d=1;d<=s;d++)h.push({year:wt,month:st,day:d,dateKey:jn(wt,st,d),isCurrentMonth:!0,dayOfWeekIndex:h.length}),h.length===7&&(p.push(h),h=[]);if(h.length>0){let d=1;const f=st===11?0:st+1,x=st===11?wt+1:wt;for(;h.length<7;)h.push({year:x,month:f,day:d,dateKey:jn(x,f,d),isCurrentMonth:!1,dayOfWeekIndex:h.length}),d++;p.push(h)}return p},[wt,st]),In=s=>{var i;return((i=s[0])==null?void 0:i.dateKey)===ht},sr=(s,i,c)=>{const m=pt[s];if(!m)return{who:"",done:!1,kidsDone:{}};const p=m[i]||(c?m[c]:null)||(c?m[c.toLowerCase()]:null);return p?{who:p.who!==void 0&&p.who!==null?String(p.who):"",done:!!p.done,kidsDone:p.kidsDone||{}}:{who:"",done:!1,kidsDone:{}}},zr=s=>{const i=Tt(s);if(!i)return xe;const c=lo(i.year,i.month,i.day),m=c.isFullStay||c.isDepartureDay;return xe.filter(p=>{const h=Ce(p);return h&&h.type==="biweekly"?m:!0})},wo=(s,i,c)=>{const p=sr(s,i).kidsDone||{},h=!p[c],d={...p,[c]:h},f=zr(s),x=f.length>0&&f.every(C=>d[C]);Ur(s,i,{kidsDone:d,done:x,who:x?"All Kids":"Each Child"})},Da=(s,i)=>{const c={};ge.forEach(p=>{c[p]=!1});const m=me.find(p=>{var h;return p.index_===s||i&&String(p.task||((h=p.row)==null?void 0:h[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});return m&&m.row&&((m.row[2]===!0||String(m.row[2]).toLowerCase()==="true")&&(c.Sydney=!0),(m.row[4]===!0||String(m.row[4]).toLowerCase()==="true")&&(c.Cadence=!0),(m.row[6]===!0||String(m.row[6]).toLowerCase()==="true")&&(c.Mason=!0),(m.row[12]===!0||String(m.row[12]).toLowerCase()==="true")&&(c.Koda=!0),(m.row[14]===!0||String(m.row[14]).toLowerCase()==="true")&&(c.Keyanna=!0)),At.forEach(p=>{const h=sr(p.dateKey,s,i);if(h.kidsDone&&Object.keys(h.kidsDone).forEach(d=>{h.kidsDone[d]&&(c[d]=!0)}),h.who==="All Kids"&&h.done)ge.forEach(d=>{var f;((f=h.kidsDone)==null?void 0:f[d])!==!1&&(c[d]=!0)});else if(h.who&&h.done){const d=h.who.split(/[,&]+/).map(f=>f.trim().toLowerCase());ge.forEach(f=>{d.includes(f.toLowerCase())&&(c[f]=!0)})}}),c},El=(s,i,c)=>{const m=Da(s,c),p=!m[i],h={...m,[i]:p},d=ge.filter(T=>h[T]).length,f=d===ge.length&&ge.length>0,x=d>0;let C="Each Child";if(f)C="All Kids";else if(x){const T=ge.filter(b=>h[b]);C=T.length<=2?T.join(" & "):`${T.length} Kids`}bt(T=>{const b={...T};return At.forEach(N=>{const O=b[N.dateKey]||{},U=O[s]||{who:"",done:!1,kidsDone:{}};b[N.dateKey]={...O,[s]:{...U,who:C,done:x,kidsDone:h}},c&&(b[N.dateKey][c]=b[N.dateKey][s],b[N.dateKey][c.toLowerCase()]=b[N.dateKey][s])}),b});const D=Se(c,s);if(Me>=0&&D!==void 0&&D!==null){const T=new Array(15).fill(void 0),b=i.toLowerCase();b==="sydney"?T[2]=p:b==="koda"?T[12]=p:b==="keyanna"?T[14]=p:b==="cadence"?T[4]=p:b==="mason"&&(T[6]=p),_(Me,D,T)}},On=(s,i)=>{let c="",m=!1;const p=me.find(h=>{var d;return h.index_===s||i&&String(h.task||((d=h.row)==null?void 0:d[0])||"").toLowerCase().trim()===String(i).toLowerCase().trim()});if(p&&p.row){const h=f=>{if(!f)return!1;const x=String(f).trim();return!(!x||x.startsWith("-")||x.startsWith("(")||x.startsWith("SG:")||x.startsWith("Done:")||x.startsWith("Parent Initials")||x.startsWith("___")||/^Who:\s*_+$/i.test(x))},d=String(i||p.task||"").toLowerCase();if(d.includes("basement")||d.includes("feeding station")||d.includes("deep clean")||d.includes("sign-off")||d.includes("curbside")||d.includes("recycling")||d.includes("waste")){(p.row[14]===!0||String(p.row[14]).toLowerCase()==="true")&&(m=!0);const f=String(p.row[9]||"").replace(/^Who:\s*/i,"").trim(),x=String(p.row[1]||"").trim(),C=h(f)?f:h(x)?x:"";if(C){const D=y.find(T=>C.toLowerCase().includes(T.name.toLowerCase()));D?c=D.name:C.toLowerCase().includes("parents")?c="Parents":c=C}}for(let f=6;f>=0;f--){const x=p.row[1+f*2],C=p.row[2+f*2];h(x)&&!c&&(c=String(x).replace(/^Who:\s*/i,"").trim()),(C===!0||String(C).toLowerCase()==="true")&&!m&&(m=!0)}}if(At&&At.length>0)for(let h=At.length-1;h>=0;h--){const d=At[h],f=sr(d.dateKey,s,i);f.who&&!c&&(c=f.who),f.done&&(m=!0)}return!Tr&&(c==="Cadence"||c==="Mason")&&(c=""),{who:c,done:m}},Wn=(s,i,c)=>{const m=On(s,i),p="who"in c?c.who:m.who,h="done"in c?c.done:m.done,d=String(i||"").toLowerCase(),f=ct(i),x=d.includes("recycling")||d.includes("waste")||d.includes("curbside")?3:d.includes("basement")||d.includes("saturday")?5:6;bt(T=>{const b={...T};return At.forEach(N=>{const O=b[N.dateKey]||{},W={...O[s]||{who:"",done:!1,kidsDone:{}},who:p,done:h};b[N.dateKey]={...O,[s]:W},i&&(b[N.dateKey][i]=W,b[N.dateKey][i.toLowerCase().trim()]=W),f&&(b[N.dateKey][f]=W)}),b}),re(T=>{const b=T[s]||{},N=me.find(ne=>ne.index_===s),O=[...b.row||(N==null?void 0:N.row)||new Array(15).fill("")],U=1+x*2,W=2+x*2;"who"in c&&(O[U]=p),"done"in c&&(O[W]=h);const R=String(i||(N==null?void 0:N.task)||"").toLowerCase().trim(),Z={...b,row:O,rotationGroup:p,who:p};return{...T,[s]:Z,...R?{[R]:Z}:{},...f?{[f]:Z}:{}}});const C=ee(i);if(Me>=0&&C){const T=C.index_,b=new Array(15).fill(void 0);if(f==="clean_basement"||f==="feeding_station_deep_clean"||f==="curbside_recycling"||f==="curbside_waste")"who"in c&&(b[9]=p?`Who: ${p}`:"Who: _____________________"),"done"in c&&(b[14]=h);else if(f==="weekly_sign_off")"who"in c&&(b[9]=p),"done"in c&&(b[14]=h);else{const N=1+x*2,O=2+x*2;"who"in c&&(b[N]=p),"done"in c&&(b[O]=h)}_(Me,T,b)}const D=L(i,s);if(ye>=0&&"who"in c&&D!==void 0&&D!==null){const T=new Array(12).fill(void 0);T[7]=p,_(ye,D,T)}pe(`Updated "${i||"Chore"}": Assigned to ${p||"unassigned"}`),setTimeout(()=>pe(null),3e3)},Qt=I.useMemo(()=>me.find(s=>{var i;return Dn(s.task||((i=s.row)==null?void 0:i[0]))})||{index_:12,task:"Weekly Sign-Off & Inspection",rotationGroup:"Parents",category:"Administration"},[me]),qs=I.useMemo(()=>On(Qt==null?void 0:Qt.index_,Qt==null?void 0:Qt.task),[Qt,pt,At]),Gr=()=>{if(!Qt)return;const s=On(Qt.index_,Qt.task),i=!s.done,c=s.who||"Parents";Wn(Qt.index_,Qt.task,{done:i,who:c}),pe(i?"Weekly Sign-Off & Inspection completed and verified for the week!":"Weekly Sign-Off reset to pending."),setTimeout(()=>pe(null),3500)},Ur=(s,i,c)=>{var m;const p=me.find(x=>x.index_===i),h=(p==null?void 0:p.task)||"",d=Ae(h);bt(x=>{const C=x[s]||{},T={...C[i]||(d?C[d]:null)||{who:"",done:!1},...c},b={...C,[i]:T};return h&&(b[h]=T),d&&(b[d]=T),{...x,[s]:b}});const f=ee(h,i);if(Me>=0&&f){const x=Tt(ht),C=Tt(s);if(x&&C){const D=new Date(x.year,x.month,x.day),b=new Date(C.year,C.month,C.day).getTime()-D.getTime(),N=Math.round(b/(1e3*3600*24));if(N>=0&&N<7){const O=1+N*2,U=2+N*2,W=new Array(15).fill(void 0);W[0]=h||((m=f.row)==null?void 0:m[0]),"who"in c&&(W[O]=c.who),"done"in c&&(W[U]=c.done),_(Me,f.index_,W)}}}},bo=(s,i,c,m,p)=>{var h,d,f;const x=c==="who"?1+i*2:2+i*2,C=Tt(ht)||{year:2026,month:9,day:12},D=new Date(C.year,C.month,C.day+i,12,0,0),T=jn(D.getFullYear(),D.getMonth(),D.getDate()),b=p||((h=me.find(W=>W.index_===s))==null?void 0:h.task)||"",N=ct(b);bt(W=>{const R=W[T]||{},ne={...R[s]||(b?R[b]:null)||(N?R[N]:null)||{who:"",done:!1,kidsDone:{}},[c]:m},Re={...R,[s]:ne};return b&&(Re[b]=ne,Re[b.toLowerCase().trim()]=ne),N&&(Re[N]=ne),{...W,[T]:Re}}),re(W=>{const R=W[s]||(b?W[b.toLowerCase().trim()]:null)||(N?W[N]:null)||{},Z=me.find(it=>{var kt;return it.index_===s||b&&String(it.task||((kt=it.row)==null?void 0:kt[0])||"").toLowerCase().trim()===b.toLowerCase().trim()}),ne=[...R.row||(Z==null?void 0:Z.row)||new Array(15).fill("")];ne[x]=m;const Re={...R,row:ne,...c==="who"?{who:m}:{done:m}},Pe={...W,[s]:Re};return b&&(Pe[b.toLowerCase().trim()]=Re),N&&(Pe[N]=Re),Pe});const O=ee(b,s);if(Me>=0&&O){const W=new Array(15).fill(void 0);W[x]=m,_(Me,O.index_,W)}const U=ce(b,s);if(ye>=0&&c==="who"&&U){const W=new Array(12).fill(void 0);W[7]=m,_(ye,U.index_,W)}pe(c==="who"?`Assigned "${b||"Chore"}" (${(d=Ut[i])==null?void 0:d.name}) to ${m||"unassigned"}`:`Marked "${b||"Chore"}" (${(f=Ut[i])==null?void 0:f.name}) as ${m?"completed ✓":"pending"}`),setTimeout(()=>pe(null),3e3)},$s=s=>{var i;if(!s||s.length===0)return;const c=s[0];if(!c)return;const m=c.dateKey;rn(m),Tn(c.year),Pr(c.month);const p=s.length===7?s:ks(c.year,c.month,c.day);if(bt(h=>{const d={...h};for(let f=0;f<7;f++){const x=p[f];x&&(d[x.dateKey]||(d[x.dateKey]={}),me.forEach(C=>{var D,T,b;if(!d[x.dateKey][C.index_]){const N=1+f*2,O=2+f*2,U=(D=C.row)==null?void 0:D[N],W=U!=null?String(U):"",R=((T=C.row)==null?void 0:T[O])===!0||String((b=C.row)==null?void 0:b[O]).toLowerCase()==="true";d[x.dateKey][C.index_]={who:W,done:R,kidsDone:{}}}}))}return d}),Me>=0&&me.forEach(h=>{var d;const f=new Array(15).fill(void 0);let x=!1;for(let C=0;C<7;C++){const D=p[C];if(D&&((d=pt[D.dateKey])!=null&&d[h.index_])){const T=pt[D.dateKey][h.index_];f[1+C*2]=T.who||"",f[2+C*2]=!!T.done,x=!0}}x&&_(Me,h.index_,f)}),ye>=0){const h=(i=Ue==null?void 0:Ue.data)==null?void 0:i.find(d=>d.row&&String(d.row[6]||"").toLowerCase().includes("active week"));if(h){const d=new Array(9).fill(void 0);d[7]=m,_(ye,h.index_,d)}}pe(`Synced active week to ${m} (${p[0].dateKey} – ${p[6].dateKey})`),setTimeout(()=>pe(null),3500)},Pn=s=>{var i,c,m,p,h;const{task:d,category:f="Household",frequency:x="Daily",targetDay:C="Mon – Sun",rotationGroup:D="All Non-Casual",notes:T=""}=s;if(!d||!d.trim())return;const b=d.trim(),N=Ae(b),O=x.toLowerCase().includes("daily"),U=ee(b);if(U&&Me>=0){const Ne=new Array(15).fill(void 0);Ne[0]=b,D&&(Ne[1]=D==="Each Child"?"Each Child":D),_(Me,U.index_,Ne)}else if(Me>=0){const Ne=[b,D==="Each Child"?"Each Child":D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1];let je;if(O){const Ke=(i=fe.data)==null?void 0:i.find(Xe=>Xe.index_>=4&&Xe.row&&(Ae(Xe.row[0]).includes("clean basement")||Ae(Xe.row[0]).includes("once a week")));je=Ke?Ke.index_:void 0}else{const Ke=(c=fe.data)==null?void 0:c.find(Xe=>Xe.index_>=8&&Xe.row&&(String(Xe.row[0]||"").toLowerCase().includes("pet care")||String(Xe.row[0]||"").startsWith("•")));je=Ke?Ke.index_:void 0}V(Me,je,Ne)}const W=ce(b),R=new Array(12).fill(void 0);if(R[6]=b,R[7]=D||"All Non-Casual",R[8]=x,R[9]=C,R[10]=T,R[11]=f,W&&ye>=0)_(ye,W.index_,R),(m=Ue.data)==null||m.forEach(Ne=>{if(Ne.index_!==W.index_&&Ne.row&&Ae(Ne.row[6])===N)if(Ne.row[0]){const je=new Array(12).fill(void 0);je[6]="",je[7]="",je[8]="",je[9]="",je[10]="",je[11]="",_(ye,Ne.index_,je)}else v(ye,Ne.index_)});else if(ye>=0){const Ne=(p=Ue.data)==null?void 0:p.find(je=>je.index_>=5&&je.index_<17&&(!je.row||!je.row[6]||String(je.row[6]).trim()===""));if(Ne)_(ye,Ne.index_,R);else{const je=(h=Ue.data)==null?void 0:h.find(Xe=>Xe.row&&String(Xe.row[6]||"").toLowerCase().includes("schedule configuration")),Ke=je?je.index_:void 0;V(ye,Ke,R)}}const Z=x.toLowerCase(),ne=C.toLowerCase(),Re=Z.includes("bi-weekly")||Z.includes("biweekly")?"biweekly":Z.includes("weekly")||Z.includes("once")?"weekly":"daily",Pe=ne.includes("sunday")?6:ne.includes("thursday")?3:5,kt={index_:U?U.index_:W?W.index_:2e3+Date.now()%1e5,task:b,category:f,frequency:x,targetDay:C,rotationGroup:D||"All Non-Casual",notes:T,source:"user_added",row:[b,D||"",!1,"",!1,"",!1,"",!1,"",!1,"",!1,"",!1]};!W&&!U&&(oe(Ne=>[...Ne,kt]),Le(Ne=>[...Ne,kt])),P(Ne=>{const je=new Set(Ne);return je.delete(N),je.delete(b.toLowerCase().trim()),je}),De(Ne=>Ne?[...Ne,Ae(b)]:null),pn(Ne=>({...Ne,[b]:{frequency:Re,dayOfWeek:Pe}})),fo(!1),En(!1),Kr(!1),Bt({task:"",category:"Household",frequency:"Daily",targetDay:"Mon – Sun",rotationGroup:"All Non-Casual",notes:""}),pe(`Added "${b}" to schedule and master registry!`),setTimeout(()=>pe(null),3500)},_o=(s,i={})=>{var c;if(!s||!s.trim())return;const m=s.trim(),p=i.defaultWho||"All Non-Casual",h=i.frequency||"daily",d=i.dayOfWeek!==void 0?i.dayOfWeek:5,f=h==="weekly"?"Once a Week":h==="biweekly"?"Bi-Weekly":"Daily",x=h==="weekly"?(c=Ut[d])==null?void 0:c.name:h==="biweekly"?"Thursday Evening":"Mon – Sun",C=i.category||"Household";Pn({task:m,category:C,frequency:f,targetDay:x,rotationGroup:p,notes:i.notes||""})},ja=(s,i)=>{var c,m;const p=(c=$e.data)==null?void 0:c.find(x=>x.index_===s),h=i.oldTask||((m=p==null?void 0:p.row)==null?void 0:m[6])||i.task,d=L(h,s);if(ye>=0&&d!==void 0&&d!==null){const x=new Array(12).fill(void 0);x[6]=i.task||h||"","rotationGroup"in i&&(x[7]=i.rotationGroup),"frequency"in i&&(x[8]=i.frequency),"targetDay"in i&&(x[9]=i.targetDay),"notes"in i&&(x[10]=i.notes),"category"in i&&(x[11]=i.category),_(ye,d,x)}if(oe(x=>x.map(C=>C.index_===s||Ae(C.task)===Ae(h)?{...C,...i,task:i.task||C.task}:C)),i.task&&h&&Ae(i.task)!==Ae(h)){const x=Ae(h),C=Ae(i.task);De(D=>D?D.map(T=>T===x?C:T):null)}const f=Se(h);if(Me>=0&&f!==void 0&&f!==null){const x=new Array(15).fill(void 0);"task"in i&&(x[0]=i.task),"notes"in i&&(x[1]=i.notes),("task"in i||"notes"in i)&&_(Me,f,x)}if(i.frequency||i.targetDay){const x=i.task||h||"";if(x){const C=String(i.frequency||"").toLowerCase(),D=String(i.targetDay||"").toLowerCase(),T=C.includes("bi-weekly")||C.includes("biweekly")?"biweekly":C.includes("weekly")||C.includes("once")?"weekly":"daily",b=D.includes("sunday")?6:D.includes("thursday")?3:D.includes("friday")?4:5;pn(N=>({...N,[x]:{frequency:T,dayOfWeek:b}}))}}Nr(null),Rt(null),pe(`Updated "${i.task||h||"chore"}" in schedule and master registry!`),setTimeout(()=>pe(null),3e3)},qt=(s,i)=>{var c;const m=Ae(i);ye>=0&&((c=Ue.data)==null||c.forEach(d=>{if(!(d.index_<5||!d.row||!d.row[6])&&(Ae(d.row[6])===m||d.index_===s))if(d.row[0]){const f=new Array(12).fill(void 0);f[6]="",f[7]="",f[8]="",f[9]="",f[10]="",f[11]="",_(ye,d.index_,f)}else v(ye,d.index_)}));const p=ee(i);Me>=0&&p&&v(Me,p.index_);const h=String(i||"").toLowerCase().trim();oe(d=>d.filter(f=>f.index_!==s&&(!h||f.task.toLowerCase().trim()!==h))),P(d=>{const f=new Set(d);return s!=null&&f.add(String(s)),h&&f.add(h),f}),bt(d=>{const f={...d};return Object.keys(f).forEach(x=>{if(f[x]&&f[x][s]){const C={...f[x]};delete C[s],f[x]=C}}),f}),Ws===s&&(Nr(null),Rt(null)),pe(`Removed "${i||"chore"}" from Household Hub Master Chore Registry`),setTimeout(()=>pe(null),3e3)},xn=(s,i)=>{var c,m;const p=(i.task||"").trim();if(!p)return;const h=i.oldTask||p;re(D=>{const T={...D};return T[s]={...i,task:p},h&&(T[String(h).toLowerCase().trim()]={...i,task:p}),T[p.toLowerCase().trim()]={...i,task:p},T});const d=i.frequency==="Once a Week"?"weekly":i.frequency==="Bi-Weekly"?"biweekly":"daily",f=i.dayOfWeek!==void 0?i.dayOfWeek:(c=i.targetDay)!=null&&c.toLowerCase().includes("sunday")?6:(m=i.targetDay)!=null&&m.toLowerCase().includes("thursday")?3:5;if(pn(D=>({...D,[p]:{frequency:d,dayOfWeek:f},[s]:{frequency:d,dayOfWeek:f}})),i.task&&h&&Ae(i.task)!==Ae(h)){const D=Ae(h),T=Ae(i.task);De(b=>b?b.map(N=>N===D?T:N):null)}const x=Se(h);if(Me>=0&&x!==void 0&&x!==null){const D=new Array(15).fill(void 0);D[0]=p,i.notes!==void 0&&(D[1]=i.notes),_(Me,x,D)}const C=L(h,s);if(ye>=0&&C!==void 0&&C!==null){const D=new Array(12).fill(void 0);D[6]=p,i.rotationGroup&&(D[7]=i.rotationGroup),i.frequency&&(D[8]=i.frequency),i.targetDay&&(D[9]=i.targetDay),i.notes!==void 0&&(D[10]=i.notes),i.category&&(D[11]=i.category),_(ye,C,D)}h&&h!==p&&bt(D=>{const T={...D};return Object.keys(T).forEach(b=>{if(T[b]&&T[b][h]){const N={...T[b]};N[p]=N[h],N[p.toLowerCase()]=N[h],T[b]=N}}),T}),Ee(null),pe(`Updated chore: "${p}"`),setTimeout(()=>pe(null),3e3)},Kn=(s,i)=>{var c,m;const p=i||"";P(f=>{const x=new Set(f);return s!=null&&x.add(String(s)),p&&x.add(p.toLowerCase().trim()),x});const h=Se(p,s);Me>=0&&h!==void 0&&h!==null&&v(Me,h);const d=L(p,s);if(ye>=0&&d!==void 0&&d!==null){const f=(c=Ue.data)==null?void 0:c.find(x=>x.index_===d);if((m=f==null?void 0:f.row)!=null&&m[0]){const x=new Array(12).fill(void 0);x[6]="",x[7]="",x[8]="",x[9]="",x[10]="",x[11]="",_(ye,d,x)}else v(ye,d)}bt(f=>{const x={...f};return Object.keys(x).forEach(C=>{if(x[C]){const D={...x[C]};s!==void 0&&delete D[s],p&&(delete D[p],delete D[p.toLowerCase().trim()]),x[C]=D}}),x}),ot(null),J&&J.index_===s&&Ee(null),pe(`Removed chore: "${p||"Chore"}" from schedule`),setTimeout(()=>pe(null),3e3)},Bn=(s,i)=>{Kn(s,i)},Ta=()=>{if(nr.length===0)return;const s=nr.length;nr.forEach(i=>{var c;const m=me.find(p=>p.index_===i);Kn(i,(m==null?void 0:m.task)||((c=m==null?void 0:m.row)==null?void 0:c[0])||"")}),on([]),Kr(!1),pe(`Successfully removed ${s} chore(s) from master list`),setTimeout(()=>pe(null),3500)},Hs=s=>{var i,c;const m=s.task||((i=s.row)==null?void 0:i[0])||"",p=Hr(s);vr(s.index_),Po(m),sn(p.frequency||"daily"),js(p.dayOfWeek!==void 0?p.dayOfWeek:5),qo(s.rotationGroup||"All Non-Casual"),Ee({...s,originalTask:m,task:m,category:s.category||"Household",frequency:p.frequency==="weekly"?"Once a Week":p.frequency==="biweekly"?"Bi-Weekly":"Daily",targetDay:s.targetDay||(p.frequency==="weekly"?(c=Ut[p.dayOfWeek!==void 0?p.dayOfWeek:5])==null?void 0:c.name:"Mon – Sun"),rotationGroup:s.rotationGroup||"All Non-Casual",notes:s.notes||"",dayOfWeek:p.dayOfWeek!==void 0?p.dayOfWeek:5})},zs=()=>{var s;if(pr===null)return;const i=uo.trim();i&&xn(pr,{task:i,frequency:mr==="weekly"?"Once a Week":mr==="biweekly"?"Bi-Weekly":"Daily",targetDay:((s=Ut[Ko])==null?void 0:s.name)||"Mon – Sun",rotationGroup:Bo,dayOfWeek:Ko}),vr(null)},Vr=(s,i)=>{const c=(N,O)=>typeof O=="object"&&O!==null?N===O||Ae(N.task)===Ae(O.task):N.index_===O||String(N.index_)===String(O)||Ae(N.task)===Ae(String(O)),m=typeof s=="object"&&s!==null&&ln.length>0?ln:we,p=m.findIndex(N=>c(N,s));if(p===-1)return;const h=i==="up"?p-1:p+1;if(h<0||h>=m.length)return;const d=m[p],f=m[h],x=[...we],C=x.findIndex(N=>c(N,d)),D=x.findIndex(N=>c(N,f));if(C===-1||D===-1)return;const T=d.task||"Chore";x[C]=f,x[D]=d;const b=x.map(N=>Ae(N.task));if(De(b),Me>=0){const N=ee(d.task),O=ee(f.task),U=(fe==null?void 0:fe.data)==null?void 0:fe.data.find(Z=>Z.row&&String(Z.row[0]||"").toLowerCase().trim()==="weekly tasks"),W=U?U.index_:10,R=N&&O&&(N.index_<W&&O.index_<W||N.index_>W&&O.index_>W);if(N&&O&&N.index_!==O.index_&&R){const Z=[...N.row||[]],ne=[...O.row||[]];_(Me,N.index_,ne),_(Me,O.index_,Z)}}if(ye>=0){const N=ce(d.task),O=ce(f.task);if(N&&O&&N.index_!==O.index_){const U=N.row||[],W=O.row||[],R=new Array(12).fill(void 0),Z=new Array(12).fill(void 0);for(let ne=6;ne<=11;ne++)R[ne]=W[ne]!==void 0?W[ne]:"",Z[ne]=U[ne]!==void 0?U[ne]:"";_(ye,N.index_,R),_(ye,O.index_,Z)}}pe(`Reordered: Moved "${T}" ${i}! Synchronized with Printable Weekly Schedule and Household Hub.`),setTimeout(()=>pe(null),3e3)},Vo=(s,i,c)=>{var m,p,h,d,f,x;const C=me.find(b=>b.index_===s),D=me.find(b=>b.index_===i);if(!C||!D||s===i)return;const T=(c==null?void 0:c.trim())||`${C.row[1]} & ${D.row[1]}`;if(Ie>=0){const b=new Array(16).fill(void 0);b[1]=T;for(let N=0;N<7;N++){const O=2+N*2,U=3+N*2,W=((m=C.row)==null?void 0:m[O])||"",R=((p=D.row)==null?void 0:p[O])||"",Z=((h=C.row)==null?void 0:h[U])===!0||String((d=C.row)==null?void 0:d[U]).toLowerCase()==="true",ne=((f=D.row)==null?void 0:f[U])===!0||String((x=D.row)==null?void 0:x[U]).toLowerCase()==="true";b[O]=W||R||"",b[U]=Z||ne}_(Ie,C.index_,b),v(Ie,D.index_)}bt(b=>{const N={...b};return Object.keys(N).forEach(O=>{const U={...N[O]},W=U[C.index_]||{who:"",done:!1},R=U[D.index_]||{who:"",done:!1};U[C.index_]={who:W.who||R.who||"",done:W.done||R.done},delete U[D.index_],N[O]=U}),N}),ho(!1),pe(`Combined into: "${T}"`),setTimeout(()=>pe(null),4e3)},Ea=(s,i)=>{const c=s||[],m=i||[];if(c.length===0&&m.length===0)return;const p={...pt};let h=0;go.forEach(d=>{d.forEach(f=>{if(!f.isCurrentMonth)return;const x=f.dateKey;p[x]||(p[x]={});const C=lo(f.year,f.month,f.day),D=C.isFullStay||C.isDepartureDay,T=[...c];if(D&&T.push(...m),T.length===0)return;const b=me.filter(R=>{var Z;const ne=R.task||((Z=R.row)==null?void 0:Z[0])||"",Re=ne.toLowerCase(),Pe=Hr(R);return Re.includes("deep clean")||Re.includes("feeding station")?f.dayOfWeekIndex===6:Re.includes("recycling")?f.dayOfWeekIndex===3&&Et("recycling",f.year,f.month,f.day):Re.includes("waste")?f.dayOfWeekIndex===3&&Et("waste",f.year,f.month,f.day):Pe.frequency==="biweekly"?f.dayOfWeekIndex===Pe.dayOfWeek&&Et(ne,f.year,f.month,f.day):Pe.frequency==="weekly"?f.dayOfWeekIndex===Pe.dayOfWeek:!0}),N=T.filter(R=>{const Z=Ce(R);return Z&&Z.type!=="casual"}),O=N.length>0?N:T,U=O.filter(R=>{const Z=Ce(R),ne=String((Z==null?void 0:Z.role)||"").toLowerCase();return!ne.includes("parent")&&!ne.includes("overseer")});let W=0;b.forEach(R=>{var Z;const ne=p[x][R.index_]||{done:!1,kidsDone:{}},Re=R.task||((Z=R.row)==null?void 0:Z[0])||"",Pe=String(R.rotationGroup||"").toLowerCase(),it=Re.toLowerCase();if(en(Re)){p[x][R.index_]={who:D?"Each Child":"Sydney",done:ne.done,kidsDone:ne.kidsDone||{}};return}if(f.dayOfWeekIndex===6&&it.includes("supper")){const Ne=y.filter(Xe=>Xe.role==="Overseer Supreme"||String(Xe.role||"").toLowerCase().includes("parent")).map(Xe=>Xe.name),je=Ne.length>0?Ne:["Thom","Meghan"],Ke=qu(f.year,f.month,f.day,je);p[x][R.index_]={who:Ke,done:ne.done,kidsDone:ne.kidsDone||{}};return}if(Pe==="parents"||Pe.includes("parent")&&!Pe.includes("kid")&&!Pe.includes("non-casual")&&!Pe.includes("all")){const Ne=y.filter(Ke=>Ke.role==="Overseer Supreme"||String(Ke.role||"").toLowerCase().includes("parent")).map(Ke=>Ke.name),je=Ne.length>0?Ne[(h+W)%Ne.length]:"Thom";W++,p[x][R.index_]={who:je,done:ne.done,kidsDone:ne.kidsDone||{}};return}if(Pe==="kids"&&U.length>0){const Ne=U[(h+W)%U.length];W++,p[x][R.index_]={who:Ne,done:ne.done,kidsDone:ne.kidsDone||{}};return}const kt=O[(h+W)%O.length];W++,p[x][R.index_]={who:kt,done:ne.done,kidsDone:ne.kidsDone||{}}}),h=(h+1)%T.length})}),bt(p),Me>=0&&go.forEach(d=>{In(d)&&me.forEach(f=>{var x;const C=new Array(15).fill(void 0);let D=!1;for(let T=0;T<7;T++){const b=d[T];if(b&&((x=p[b.dateKey])!=null&&x[f.index_])){const N=1+T*2;C[N]=p[b.dateKey][f.index_].who||"",D=!0}}D&&_(Me,f.index_,C)})}),co(!1),pe(`Auto-assigned & populated Printable Weekly Schedule for ${yn[st]} ${wt}!`),setTimeout(()=>pe(null),4500)},vo=(s,i)=>{var c,m;const p=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,h=(c=$e.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"role"in i&&(d[1]=i.role),"residency"in i&&(d[2]=i.residency),"specialGroups"in i?d[3]=i.specialGroups:"schedule"in i&&(d[3]=i.schedule),"active"in i&&(d[4]=i.active),_(p,s,d),pe(`Updated "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"member"}" in Household Hub!`),setTimeout(()=>pe(null),3e3)},Ml=(s,i,c,m,p=!0)=>{var h;if(!s||!s.trim())return;const d=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,f=s.trim(),x=i?i.trim():"Minion",C=c||"Full-Time",T=m?m.trim():C==="Casual"?"All":x==="Supreme Overlord"?"Parents, Non-Casual, All":"Kids, Non-Casual, All",b=(h=$e.data)==null?void 0:h.find(N=>N.index_<5||N.index_>12?!1:!N.row||!N.row[0]||!String(N.row[0]).trim());if(b){const N=new Array(12).fill(void 0);N[0]=f,N[1]=x,N[2]=C,N[3]=T,N[4]=p,N[5]="MEMBER_ROW",_(d,b.index_,N)}else V(d,void 0,[f,x,C,T,p,"MEMBER_ROW",null,null,null,null,null,null]);Br(!1),pe(`Added "${f}" to Household Hub!`),setTimeout(()=>pe(null),3e3)},Rl=(s,i)=>{var c,m;const p=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,h=(c=$e.data)==null?void 0:c.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);pe(`Removed "${i}" from Household Hub`),setTimeout(()=>pe(null),3e3)},ko=(s,i)=>{var c,m;const p=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,h=(c=$e.data)==null?void 0:c.find(f=>f.index_===s),d=new Array(12).fill(void 0);"name"in i&&(d[0]=i.name),"type"in i&&(d[1]=i.type),"routine"in i&&(d[2]=i.routine),"care"in i&&(d[3]=i.care),"active"in i&&(d[4]=i.active),_(p,s,d),pe(`Updated pet "${i.name||((m=h==null?void 0:h.row)==null?void 0:m[0])||"profile"}" in Household Hub!`),setTimeout(()=>pe(null),3e3)},Ll=(s,i,c,m,p=!0)=>{if(!s||!s.trim())return;const h=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,d=s.trim(),f=i||"Dog";V(h,void 0,[d,f,c||"Morning & Evening",m||(f==="Dog"?"Feed breakfast & supper, outdoor routine, fresh water":"Feed morning/evening, scoop litter box, fresh water"),p,"PET_ROW",void 0,void 0,void 0,void 0,void 0,void 0]),ze(!1),dn({name:"",type:"Dog",routine:"Morning & Evening",care:"",active:!0}),pe(`Added pet "${d}" to Household Hub!`),setTimeout(()=>pe(null),3e3)},Fl=(s,i)=>{var c,m;const p=ye>=0?ye:(w==null?void 0:w.length)>1?1:0,h=(c=$e.data)==null?void 0:c.find(d=>d.index_===s);if((m=h==null?void 0:h.row)!=null&&m[6]){const d=new Array(12).fill(void 0);d[0]="",d[1]="",d[2]="",d[3]="",d[4]=!1,_(p,s,d)}else v(p,s);pe(`Removed pet "${i}" from Household Hub`),setTimeout(()=>pe(null),3e3)},Er=I.useMemo(()=>{let s=0,i=0;const c={};y.forEach(p=>{c[p.name]={total:0,done:0}}),go.forEach(p=>{p.forEach(h=>{h.isCurrentMonth&&me.forEach(d=>{var f,x;const C=d.task||((f=d.row)==null?void 0:f[0])||"",D=C.toLowerCase(),T=Hr(d);let b=!1;D.includes("deep clean")||D.includes("feeding station")?b=h.dayOfWeekIndex===6:D.includes("recycling")?b=h.dayOfWeekIndex===3&&Et("recycling",h.year,h.month,h.day):D.includes("waste")?b=h.dayOfWeekIndex===3&&Et("waste",h.year,h.month,h.day):T.frequency==="daily"?b=!0:T.frequency==="weekly"?b=h.dayOfWeekIndex===T.dayOfWeek:T.frequency==="biweekly"&&(b=h.dayOfWeekIndex===T.dayOfWeek&&Et(C,h.year,h.month,h.day));const N=sr(h.dateKey,d.index_,d.task||((x=d.row)==null?void 0:x[0])),O=(N==null?void 0:N.done)||(N==null?void 0:N.who);if(!b&&!O)return;s++;const U=N==null?void 0:N.done,W=N==null?void 0:N.who;if(U&&i++,W){const R=Ce(W);R&&c[R.name]&&(c[R.name].total++,U&&c[R.name].done++)}})})});const m=s>0?Math.round(i/s*100):0;return{totalScheduled:s,totalCompleted:i,completionRate:m,assigneeCounts:c}},[go,me,pt,y,Ce]),qn=I.useMemo(()=>[...y].map(s=>{const i=Er.assigneeCounts[s.name]||{total:0,done:0},c=i.total>0?Math.round(i.done/i.total*100):0;return{...s,done:i.done,total:i.total,pct:c}}).sort((s,i)=>i.done!==s.done?i.done-s.done:i.pct-s.pct),[y,Er]),Yr=I.useMemo(()=>qn.length===0||qn[0].done===0?null:qn[0],[qn]),Ma=()=>{st===0?(Pr(11),Tn(s=>s-1)):Pr(s=>s-1)},Il=()=>{st===11?(Pr(0),Tn(s=>s+1)):Pr(s=>s+1)},Ol=()=>{const s=_s();Tn(s.todayYear),Pr(s.todayMonth),rn(s.dateKey)};I.useEffect(()=>{if(Pt==="month"){const s=_s();Tn(s.todayYear),Pr(s.todayMonth),rn(s.dateKey),setTimeout(()=>{const i=document.getElementById("active-calendar-week");i&&i.scrollIntoView({behavior:"smooth",block:"center"})},50)}},[Pt]);const yn=["January","February","March","April","May","June","July","August","September","October","November","December"];return r.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans","data-source-loc":"weekly_chores_household_hub.tsx:4666:5","data-source-comp":"App",children:[Rs&&r.jsxs("div",{className:"no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all","data-source-loc":"weekly_chores_household_hub.tsx:4668:9","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4669:11","data-source-comp":"App",children:[r.jsx(ju,{className:"w-4 h-4 text-emerald-200"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4671:13","data-source-comp":"App",children:Rs})]}),r.jsx("button",{onClick:()=>pe(null),className:"text-emerald-100 hover:text-white","data-source-loc":"weekly_chores_household_hub.tsx:4673:11","data-source-comp":"App",children:r.jsx(Gt,{className:"w-4 h-4"})})]}),r.jsxs("header",{className:"no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30","data-source-loc":"weekly_chores_household_hub.tsx:4678:7","data-source-comp":"App",children:[r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4679:9","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4680:11","data-source-comp":"App",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:4681:13","data-source-comp":"App",children:r.jsx(Au,{className:"w-5 h-5"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4684:13","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4685:15","data-source-comp":"App",children:[r.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4686:17","data-source-comp":"App",children:"Chore Schedule"}),r.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4687:17","data-source-comp":"App",children:"Monthly Template & Sync"})]}),r.jsxs("p",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4691:15","data-source-comp":"App",children:["Interactive Chore Calendar w/ Printable Sheet • Week of ",ht]})]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:4697:11","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:4698:13","data-source-comp":"App",children:[r.jsx("button",{onClick:Ma,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Previous Month","data-source-loc":"weekly_chores_household_hub.tsx:4699:15","data-source-comp":"App",children:r.jsx(Du,{className:"w-4 h-4"})}),r.jsxs("div",{className:"px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none","data-source-loc":"weekly_chores_household_hub.tsx:4706:15","data-source-comp":"App",children:[yn[st]," ",wt]}),r.jsx("button",{onClick:Il,className:"p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm",title:"Next Month","data-source-loc":"weekly_chores_household_hub.tsx:4709:15","data-source-comp":"App",children:r.jsx(ep,{className:"w-4 h-4"})}),r.jsx("button",{onClick:Ol,className:"ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:4716:15","data-source-comp":"App",children:"Today"})]}),r.jsxs("button",{onClick:()=>co(!0),className:"flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:4723:13","data-source-comp":"App",children:[r.jsx(ws,{className:"w-3.5 h-3.5 text-amber-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4728:15","data-source-comp":"App",children:"Auto-Assign"})]})]})]}),r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm","data-source-loc":"weekly_chores_household_hub.tsx:4732:9","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4733:11","data-source-comp":"App",children:[r.jsxs("button",{onClick:()=>tn("month"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Pt==="month"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4734:13","data-source-comp":"App",children:[r.jsx(Zh,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4740:15","data-source-comp":"App",children:"Monthly Calendar"})]}),r.jsxs("button",{onClick:()=>tn("matrix"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Pt==="matrix"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4742:13","data-source-comp":"App",children:[r.jsx(np,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4748:15","data-source-comp":"App",children:"Weekly Schedule"})]}),r.jsxs("button",{onClick:()=>tn("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Pt==="stats"?"bg-slate-900 text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4750:13","data-source-comp":"App",children:[r.jsx(Su,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4756:15","data-source-comp":"App",children:"Leaderboard & Stats"})]}),r.jsxs("button",{onClick:()=>tn("roster"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Pt==="roster"?"bg-indigo-600 text-white shadow-sm":"text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4758:13","data-source-comp":"App",children:[r.jsx(xa,{className:"w-3.5 h-3.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4766:15","data-source-comp":"App",children:["Household Hub (",y.length,")"]})]})]})})]}),r.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6","data-source-loc":"weekly_chores_household_hub.tsx:4771:7","data-source-comp":"App",children:[r.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs space-y-2.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4771:68","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:4771:178","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4771:229","data-source-comp":"App",children:[r.jsx(xa,{className:"w-4 h-4 text-indigo-600 shrink-0"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4771:365","data-source-comp":"App",children:"Household Roster:"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4771:401","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4771:454","data-source-comp":"App",children:"Supreme Overlords:"}),y.filter(s=>s.active!==!1&&(s.role==="Supreme Overlord"||s.role==="Overseer Supreme")).map(s=>r.jsx("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300",style:{backgroundColor:s.bg,color:s.text},title:"Supreme Overlord (= Parent \\u2022 Included in Daily Chores)","data-source-loc":"weekly_chores_household_hub.tsx:4771:726","data-source-comp":"App",children:s.name},s.id)),r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4774:95","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:4774:150","data-source-comp":"App",children:"Minions:"}),y.filter(s=>s.active!==!1&&s.role!=="Supreme Overlord"&&s.role!=="Overseer Supreme").map(s=>r.jsx("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.type==="biweekly"?"#F8B4BD":s.type==="casual"?"#A6D2ED":"#E2E8F0"},title:`${s.name} (${s.residency} Minion = Kid)`,"data-source-loc":"weekly_chores_household_hub.tsx:4774:413","data-source-comp":"App",children:s.name},s.id))]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4778:89","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-slate-800 min-w-[130px]","data-source-loc":"weekly_chores_household_hub.tsx:4778:171","data-source-comp":"App",children:[r.jsx("span",{className:"w-4 text-center shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4778:253","data-source-comp":"App",children:"🐾"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4778:316","data-source-comp":"App",children:'"The Herd":'})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4778:352","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:4778:405","data-source-comp":"App",children:"Dogs:"}),ke.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("dog")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-semibold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4778:633","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4782:92","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-orange-800 uppercase bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200","data-source-loc":"weekly_chores_household_hub.tsx:4782:147","data-source-comp":"App",children:"Cats:"}),ke.filter(s=>s.active!==!1&&s.type.toLowerCase().includes("cat")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4782:378","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`)),ke.some(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat"))&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"text-slate-300 mx-1","data-source-loc":"weekly_chores_household_hub.tsx:4786:221","data-source-comp":"App",children:"•"}),r.jsx("span",{className:"text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200","data-source-loc":"weekly_chores_household_hub.tsx:4786:276","data-source-comp":"App",children:"Other Pets:"}),ke.filter(s=>s.active!==!1&&!s.type.toLowerCase().includes("dog")&&!s.type.toLowerCase().includes("cat")).map(s=>r.jsxs("span",{className:"px-2 py-0.5 rounded-full font-medium text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},title:`${s.name} (${s.type} • ${s.routine})`,"data-source-loc":"weekly_chores_household_hub.tsx:4786:558","data-source-comp":"App",children:[s.icon," ",s.name]},`${s.index_}-${s.name}`))]})]})]})]}),r.jsxs("div",{className:"no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:4790:114","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-6","data-source-loc":"weekly_chores_household_hub.tsx:4790:253","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4790:294","data-source-comp":"App",children:[r.jsx("p",{className:"text-xs text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4790:299","data-source-comp":"App",children:"Month Overview"}),r.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4790:367","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xl font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:4790:417","data-source-comp":"App",children:[Er.totalCompleted," / ",Er.totalScheduled]}),r.jsx("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4790:536","data-source-comp":"App",children:"completed"})]})]}),r.jsxs("div",{className:"hidden sm:block w-36","data-source-loc":"weekly_chores_household_hub.tsx:4790:605","data-source-comp":"App",children:[r.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:4790:643","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4790:721","data-source-comp":"App",children:"Progress"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4790:742","data-source-comp":"App",children:[Er.completionRate,"%"]})]}),r.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:4790:789","data-source-comp":"App",children:r.jsx("div",{className:"bg-emerald-500 h-2 rounded-full transition-all duration-500",style:{width:`${Er.completionRate}%`},"data-source-loc":"weekly_chores_household_hub.tsx:4790:859","data-source-comp":"App"})})]})]}),r.jsxs("div",{className:"flex items-center gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4792:30","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:4792:79","data-source-comp":"App",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:4792:191","data-source-comp":"App"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4792:258","data-source-comp":"App",children:["Active Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:4792:281","data-source-comp":"App",children:ht})," • ",(fn==null?void 0:fn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),r.jsx("button",{onClick:()=>{const s=_s(),i=ks(s.year,s.month,s.day);$s(i),Aa(),tn("matrix")},className:"px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition",title:`Sync and distribute chores for current week (${ht})`,"data-source-loc":"weekly_chores_household_hub.tsx:4792:452","data-source-comp":"App",children:"Sync & Distribute Week"})]})]}),Pt==="month"&&r.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:4798:285","data-source-comp":"App",children:[r.jsx("div",{className:"grid grid-cols-7 gap-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4798:312","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("div",{className:"py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:4798:394","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4800:10","data-source-comp":"App",children:s.name}),r.jsxs("span",{className:"text-[10px] font-normal opacity-90 hidden sm:inline","data-source-loc":"weekly_chores_household_hub.tsx:4800:33","data-source-comp":"App",children:["Day ",i+1]})]},s.name))}),r.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:4800:141","data-source-comp":"App",children:go.map((s,i)=>{const c=In(s),m=s[0].dateKey===ur.dateKey;return r.jsxs("div",{id:c?"active-calendar-week":void 0,className:`bg-white rounded-xl border transition-all ${c?"border-rose-400 ring-2 ring-rose-200 shadow-md":"border-slate-200 shadow-sm hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4803:16","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:4803:252","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:4803:377","data-source-comp":"App",children:[r.jsxs("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:4803:418","data-source-comp":"App",children:["Week ",i+1]}),r.jsx("span",{className:"text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:4803:494","data-source-comp":"App",children:"•"}),r.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4803:544","data-source-comp":"App",children:[s[0].month+1,"/",s[0].day," – ",s[6].month+1,"/",s[6].day]}),m&&r.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300","data-source-loc":"weekly_chores_household_hub.tsx:4803:688","data-source-comp":"App",children:"Current Week"}),(()=>{const p=Mu(s,qe);return p?r.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeBg}`,"data-source-loc":"weekly_chores_household_hub.tsx:4806:18","data-source-comp":"App",children:p.text}):null})(),c?r.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300","data-source-loc":"weekly_chores_household_hub.tsx:4807:24","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-600","data-source-loc":"weekly_chores_household_hub.tsx:4807:173","data-source-comp":"App"}),"Live Synced with Sheet"]}):r.jsx("button",{onClick:()=>$s(s),className:"text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4807:262","data-source-comp":"App",children:"Set as Sheet Week"})]}),r.jsxs("div",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:4807:456","data-source-comp":"App",children:[s.reduce((p,h)=>{const d=me.filter(f=>{var x,C;return(C=(x=pt[h.dateKey])==null?void 0:x[f.index_])==null?void 0:C.done}).length;return p+d},0)," ","chores completed"]})]}),r.jsx("div",{className:"grid grid-cols-7 divide-x divide-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:4813:48","data-source-comp":"App",children:s.map((p,h)=>{const{dateKey:d,day:f,isCurrentMonth:x}=p,C=me.filter(b=>{var N,O,U,W,R,Z,ne,Re,Pe,it,kt,Ne,je,Ke,Xe,ar,Mr,Rr,rt,Gs,Yo,Qo,Us;const Co=Hr(b),No=(b.task||((N=b.row)==null?void 0:N[0])||"").toLowerCase();if(No.includes("deep clean")||No.includes("feeding station")){const Ze=h===6,$t=((U=(O=pt[d])==null?void 0:O[b.index_])==null?void 0:U.done)||((R=(W=pt[d])==null?void 0:W[b.index_])==null?void 0:R.who);if(!Ze&&!$t)return!1}else if(No.includes("recycling")){const Ze=h===3&&Et("recycling",p.year,p.month,p.day),$t=((ne=(Z=pt[d])==null?void 0:Z[b.index_])==null?void 0:ne.done)||((Pe=(Re=pt[d])==null?void 0:Re[b.index_])==null?void 0:Pe.who);if(!Ze&&!$t)return!1}else if(No.includes("waste")){const Ze=h===3&&Et("waste",p.year,p.month,p.day),$t=((kt=(it=pt[d])==null?void 0:it[b.index_])==null?void 0:kt.done)||((je=(Ne=pt[d])==null?void 0:Ne[b.index_])==null?void 0:je.who);if(!Ze&&!$t)return!1}else if(Co.frequency==="weekly"){const Ze=h===Co.dayOfWeek,$t=((Xe=(Ke=pt[d])==null?void 0:Ke[b.index_])==null?void 0:Xe.done)||((Mr=(ar=pt[d])==null?void 0:ar[b.index_])==null?void 0:Mr.who);if(!Ze&&!$t)return!1}else if(Co.frequency==="biweekly"){const Ze=h===Co.dayOfWeek&&Et(b.task||((Rr=b.row)==null?void 0:Rr[0]),p.year,p.month,p.day),$t=((Gs=(rt=pt[d])==null?void 0:rt[b.index_])==null?void 0:Gs.done)||((Qo=(Yo=pt[d])==null?void 0:Yo[b.index_])==null?void 0:Qo.who);if(!Ze&&!$t)return!1}if(Vt==="ALL")return!0;const $n=(Us=pt[d])==null?void 0:Us[b.index_],gn=String(($n==null?void 0:$n.who)||"").toLowerCase(),Hn=y.find(Ze=>Ze.id===Vt||Ze.name===Vt),Vs=((Hn==null?void 0:Hn.name)||Vt).toLowerCase();if(en(b.row[1]))return xe.some(Ze=>Ze.toLowerCase()===Vs);if(!($n!=null&&$n.who))return!1;if(gn===Vs||(gn==="all kids"||gn==="each child")&&xe.some(Ze=>Ze.toLowerCase()===Vs)||(gn==="all non-casual"||gn==="all non casual")&&Hn&&Hn.type!=="casual"||(gn==="parents"||gn==="parents only")&&Hn&&String(Hn.role||"").toLowerCase().includes("parent"))return!0;const Jo=Ce($n.who);return $n.who===Vt||(Jo==null?void 0:Jo.id)===Vt||(Jo==null?void 0:Jo.name)===Vt}),D=C.filter(b=>{var N,O;return(O=(N=pt[d])==null?void 0:N[b.index_])==null?void 0:O.done}).length,T=C.length>0&&D===C.length;return r.jsxs("div",{className:`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${x?"bg-white":"bg-slate-50/80 border-dashed border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4872:18","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:4872:198","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:4872:203","data-source-comp":"App",children:[r.jsx("span",{className:`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${x?"bg-slate-100 text-slate-800":"bg-slate-200/70 text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4872:261","data-source-comp":"App",children:f}),r.jsxs("div",{className:"flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4872:450","data-source-comp":"App",children:[C.length>0&&r.jsxs("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded ${T?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4872:516","data-source-comp":"App",children:[D,"/",C.length]}),r.jsx("button",{onClick:()=>nn(d),className:"p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition",title:"Open day details","data-source-loc":"weekly_chores_household_hub.tsx:4872:703","data-source-comp":"App",children:r.jsx(Wo,{className:"w-2.5 h-2.5"})})]})]}),(()=>{const b=lo(p.year,p.month,p.day);return b.isArrivalDay?r.jsx("div",{className:"text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay","data-source-loc":"weekly_chores_household_hub.tsx:4875:22","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4875:263","data-source-comp":"App",children:"🏠 Cadence & Mason arrive 5 PM"})}):b.isDepartureDay?r.jsx("div",{className:"text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs",title:"Cadence & Mason depart today at 5:00 PM","data-source-loc":"weekly_chores_household_hub.tsx:4877:22","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4877:241","data-source-comp":"App",children:"👋 Cadence & Mason leave 5 PM"})}):null})(),r.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:4880:16","data-source-comp":"App",children:[C.slice(0,3).map(b=>{var N,O;const U=sr(d,b.index_,b.task||b.row[0]),W=Ce(U.who),R=Hr(b);return r.jsxs("div",{className:`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${U.done?"bg-emerald-50/70 border-emerald-200 text-slate-500":R.frequency==="weekly"?"bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs":"bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`,"data-source-loc":"weekly_chores_household_hub.tsx:4885:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-1 w-full","data-source-loc":"weekly_chores_household_hub.tsx:4885:370","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:4885:434","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>Ur(d,b.index_,{done:!U.done}),className:"shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:4885:490","data-source-comp":"App",children:U.done?r.jsx(ud,{className:"w-3.5 h-3.5 text-emerald-600"}):r.jsx(Tu,{className:"w-3.5 h-3.5 hover:text-slate-600"})}),r.jsx("span",{className:`truncate text-[10px] font-medium leading-tight ${U.done?"line-through":""}`,"data-source-loc":"weekly_chores_household_hub.tsx:4887:237","data-source-comp":"App",children:b.task||b.row[0]})]}),r.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:4887:376","data-source-comp":"App",children:[R.frequency==="weekly"&&r.jsx("span",{className:"text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase",title:"Once-a-week task","data-source-loc":"weekly_chores_household_hub.tsx:4887:458","data-source-comp":"App",children:"1x/wk"}),cr(b.task||b.row[0])?r.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold",style:{backgroundColor:((N=Ce(cr(b.task||b.row[0])))==null?void 0:N.bg)||"#FCE7F3",color:((O=Ce(cr(b.task||b.row[0])))==null?void 0:O.text)||"#BE185D"},"data-source-loc":"weekly_chores_household_hub.tsx:4887:643","data-source-comp":"App",children:cr(b.task||b.row[0])}):en(b.task||b.row[0])?r.jsx("span",{className:"shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700",title:"Each child cleans own bedroom","data-source-loc":"weekly_chores_household_hub.tsx:4890:111","data-source-comp":"App",children:"Own Rooms"}):U.who?r.jsx("span",{className:"shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold",style:{backgroundColor:(W==null?void 0:W.bg)||"#F1F5F9",color:(W==null?void 0:W.text)||"#475569"},title:String(U.who),"data-source-loc":"weekly_chores_household_hub.tsx:4890:275","data-source-comp":"App",children:String(U.who).slice(0,2)}):r.jsx("button",{onClick:()=>nn(d),className:"shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5",title:"Assign person","data-source-loc":"weekly_chores_household_hub.tsx:4893:85","data-source-comp":"App",children:"+"})]})]}),en(b.task||b.row[0])&&!cr(b.task||b.row[0])&&r.jsx("div",{className:"pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1","data-source-loc":"weekly_chores_household_hub.tsx:4893:347","data-source-comp":"App",children:zr(d).map(Z=>{var ne;const Re=!!((ne=U.kidsDone)!=null&&ne[Z]),Pe=Ce(Z);return r.jsxs("button",{type:"button",onClick:it=>{it.stopPropagation(),wo(d,b.index_,Z)},className:`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${Re?"bg-emerald-100 text-emerald-800 border-emerald-300 line-through":"bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`,title:`Click to toggle ${Z}'s room`,"data-source-loc":"weekly_chores_household_hub.tsx:4897:22","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full inline-block",style:{backgroundColor:(Pe==null?void 0:Pe.color)||"#888"},"data-source-loc":"weekly_chores_household_hub.tsx:4900:318","data-source-comp":"App"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:4902:20","data-source-comp":"App",children:Z}),Re?"✓":""]},Z)})})]},b.index_)}),C.length>3&&r.jsxs("button",{onClick:()=>nn(d),className:"w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:4904:39","data-source-comp":"App",children:["+",C.length-3," more"]}),C.length===0&&r.jsx("div",{className:"text-[10px] text-slate-400 italic py-2 text-center","data-source-loc":"weekly_chores_household_hub.tsx:4904:277","data-source-comp":"App",children:"No chores"})]})]}),r.jsx("button",{onClick:()=>nn(d),className:"mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition","data-source-loc":"weekly_chores_household_hub.tsx:4904:373","data-source-comp":"App",children:"Manage Day"})]},d)})})]},i)})})]}),Pt==="matrix"&&r.jsxs("div",{className:"space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5042:50","data-source-comp":"App",children:[r.jsxs("div",{id:"printable-schedule-card",className:"bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5042:77","data-source-comp":"App",children:[r.jsxs("div",{className:"no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5042:193","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5042:311","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5042:316","data-source-comp":"App",children:[r.jsx("h2",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5042:357","data-source-comp":"App",children:"Weekly Schedule"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5042:428","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse","data-source-loc":"weekly_chores_household_hub.tsx:5042:571","data-source-comp":"App"}),"Active Week: ",ht," • ",(fn==null?void 0:fn.text)||"Cadence & Mason arrive Sun Oct 18 @ 5 PM"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5042:813","data-source-comp":"App",children:"Single-page Letter Landscape Layout - Printed.pdf"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5042:921","data-source-comp":"App",children:[r.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5042:972","data-source-comp":"App",children:[r.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search schedule chores...",value:kr,onChange:s=>Ca(s.target.value),className:"pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5042:1073","data-source-comp":"App"})]}),r.jsx("button",{onClick:()=>{const s=Tt(ht||Oe)||{year:2026,month:9,day:19},i=ks(s.year,s.month,s.day);bt(c=>{const m={...c};return i.forEach(p=>{m[p.dateKey]={}}),m}),re({}),Me>=0&&fe&&Array.isArray(fe.data)&&fe.data.forEach(c=>{if(c.index_>=5&&c.index_<=9){const m=new Array(15).fill(null);m[0]=c.row[0];for(let p=0;p<7;p++)m[1+p*2]="",m[2+p*2]=!1;_(Me,c.index_,m)}}),pe("Cleared daily WHO/DONE assignments for a blank printable template!"),setTimeout(()=>pe(null),3e3)},className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs",title:"Clear WHO/DONE cells to print a blank fill-in sheet","data-source-loc":"weekly_chores_household_hub.tsx:5042:1342","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:238","data-source-comp":"App",children:"Clear Names (Blank Sheet)"})}),r.jsxs("button",{onClick:Aa,className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs",title:"Automatically distribute chores across active members for current week","data-source-loc":"weekly_chores_household_hub.tsx:5068:285","data-source-comp":"App",children:[r.jsx(ws,{className:"w-3.5 h-3.5 text-amber-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:632","data-source-comp":"App",children:"Distribute Current Week"})]}),r.jsx("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer",title:"Print 1-page Letter Landscape schedule","data-source-loc":"weekly_chores_household_hub.tsx:5068:677","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:924","data-source-comp":"App",children:"🖨️ Print Schedule"})})]})]}),r.jsx("div",{className:"overflow-x-auto","data-source-loc":"weekly_chores_household_hub.tsx:5068:976","data-source-comp":"App",children:r.jsxs("table",{id:"printable-schedule-table",className:"w-full table-fixed border-collapse text-left text-xs",style:{borderColor:"#C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1009","data-source-comp":"App",children:[r.jsxs("colgroup",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:1146","data-source-comp":"App",children:[r.jsx("col",{style:{width:"21%"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1156","data-source-comp":"App"}),Ut.map(s=>r.jsxs(ao.Fragment,{children:[r.jsx("col",{style:{width:"7.5%"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1247","data-source-comp":"App"}),r.jsx("col",{style:{width:"3.78%"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1280","data-source-comp":"App"})]},`col-${s.name}`))]}),r.jsxs("thead",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:1344","data-source-comp":"App",children:[r.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"3px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1351","data-source-comp":"App",children:r.jsx("th",{colSpan:15,className:"py-2 px-3 text-left text-xl font-bold text-white tracking-tight","data-source-loc":"weekly_chores_household_hub.tsx:5068:1429","data-source-comp":"App",children:"Chore Schedule"})}),r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5068:1546","data-source-comp":"App",children:[r.jsxs("th",{className:"p-0 align-top bg-white",style:{borderRight:"2px solid #FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1550","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5068:1634","data-source-comp":"App",children:"FOR THE WEEK OF:"}),r.jsx("div",{className:"text-lg font-bold py-1.5 text-center text-white",style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5068:1767","data-source-comp":"App",children:(()=>{const s=Tt(ht||Oe);return s?`${s.month+1}/${s.day}/${s.year}`:ht||Oe||"10/19/2026"})()})]}),Ut.map((s,i)=>{const c=Tt(ht||Oe)||{year:2026,month:9,day:19},p=new Date(c.year,c.month,c.day+i).getDate();return r.jsxs("th",{colSpan:2,className:"py-1.5 px-1 text-center text-white font-bold align-middle",style:{backgroundColor:s.color,borderRight:i<6?"2px solid #FFFFFF":"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5079:16","data-source-comp":"App",children:[r.jsx("div",{className:"text-xs font-bold uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5082:12","data-source-comp":"App",children:s.short.toUpperCase()}),r.jsx("div",{className:"text-sm font-bold leading-tight mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5082:101","data-source-comp":"App",children:p})]},s.name)})]}),r.jsxs("tr",{className:"bg-white text-[8.5px] font-bold text-slate-900",style:{borderTop:"2px solid #FFFFFF",borderBottom:"2px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5083:15","data-source-comp":"App",children:[r.jsx("th",{className:"py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]","data-source-loc":"weekly_chores_household_hub.tsx:5083:156","data-source-comp":"App",children:"TASK"}),Ut.map(s=>r.jsxs(ao.Fragment,{children:[r.jsx("th",{className:"py-0.5 px-1 text-center uppercase font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5083:313","data-source-comp":"App",children:"WHO"}),r.jsx("th",{className:"py-0.5 px-1 text-center font-bold",title:"Done","data-source-loc":"weekly_chores_household_hub.tsx:5083:381","data-source-comp":"App",children:r.jsx(ud,{className:"w-3 h-3 mx-auto text-slate-800"})})]},`sub-${s.name}`))]})]}),r.jsxs("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5083:542","data-source-comp":"App",children:[ut.filter(s=>!(kr&&!s.isSectionHeader&&!(s.task||"").toLowerCase().includes(kr.toLowerCase())||!s.isSectionHeader&&Dn(s.task))).map((s,i)=>{var c,m;if(s.isSectionHeader)return s.headerType==="daily"?r.jsx("tr",{style:{backgroundColor:"#002060",borderBottom:"1.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5095:20","data-source-comp":"App",children:r.jsx("td",{colSpan:15,className:"py-1.5 px-3 font-bold text-sm text-white","data-source-loc":"weekly_chores_household_hub.tsx:5095:136","data-source-comp":"App",children:"Daily Tasks"})},`header-daily-${s.index_}`):r.jsxs("tr",{style:{backgroundColor:"#002060",borderTop:"1.5px solid #002060",borderBottom:"1.5px solid #C55A11"},className:"text-white font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5097:18","data-source-comp":"App",children:[r.jsx("td",{className:"py-1.5 px-3 text-sm font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5097:202","data-source-comp":"App",children:"Weekly Tasks"}),r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5097:265","data-source-comp":"App",children:"Description"}),r.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 text-xs font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5097:341","data-source-comp":"App",children:"Initials / Assigned"})]},`header-weekly-${s.index_}`);const p=s,h=p.task||((c=p.row)==null?void 0:c[0])||"Chore",d=String(h).split(/\r?\n/).map(O=>O.trim()).filter(Boolean),f=d[0]||h,x=d.slice(1).join(" "),C=Hr(p),D=cr(h),T=jl(h)&&!D,b=lp(h,C),N=p.notes&&String(p.notes).trim()?String(p.notes).trim():(m=p.row)!=null&&m[1]&&(T||b)&&!y.some(O=>O.name.toLowerCase()===String(p.row[1]).trim().toLowerCase())?String(p.row[1]).trim():Pu(h)?"(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away":en(h)?"(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum":Ku(h)?"- Pick Up, Organize, Dust & Vacuum":Bu(h)?"- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste":h.toLowerCase().includes("recycling")?"- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)":h.toLowerCase().includes("waste")?"- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)":"";return r.jsxs("tr",{className:"bg-white hover:bg-slate-50/60 transition-colors",style:{borderBottom:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5125:16","data-source-comp":"App",children:[r.jsxs("td",{className:"py-1.5 px-2 text-slate-900 bg-white align-middle",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5125:164","data-source-comp":"App",children:[r.jsx("div",{className:"leading-tight text-slate-900 font-semibold text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5125:309","data-source-comp":"App",children:f}),x&&r.jsx("div",{className:"text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight","data-source-loc":"weekly_chores_household_hub.tsx:5125:411","data-source-comp":"App",children:x})]}),T?(()=>{const O=Da(p.index_,h),U=[{code:"SG",name:"Sydney"},{code:"CV",name:"Cadence"},{code:"MV",name:"Mason"},{code:"KV",name:"Koda"},{code:"KG",name:"Keyanna"}];return r.jsxs(ao.Fragment,{children:[r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5134:34","data-source-comp":"App",children:N}),r.jsx("td",{colSpan:6,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5134:205","data-source-comp":"App",children:r.jsx("div",{className:"flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5134:314","data-source-comp":"App",children:U.map(W=>{const R=!!O[W.name];return r.jsxs("button",{type:"button",onClick:()=>El(p.index_,W.name,h),className:"inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700",title:`${W.name} (${W.code}) — Click to toggle`,"data-source-loc":"weekly_chores_household_hub.tsx:5136:20","data-source-comp":"App",children:[r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5136:262","data-source-comp":"App",children:[W.code,":"]}),r.jsx("span",{className:`inline-block min-w-[26px] text-center border-b border-slate-700 ${R?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5136:284","data-source-comp":"App",children:R?"✓":"____"})]},W.code)})})})]})})():b?(()=>{const O=On(p.index_,h),U=O.who&&!O.who.startsWith("Who:")&&!O.who.startsWith("Assigned:")?O.who:"";return r.jsxs(ao.Fragment,{children:[r.jsx("td",{colSpan:8,className:"py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5141:34","data-source-comp":"App",children:N}),r.jsx("td",{colSpan:4,className:"py-1.5 px-2.5 align-middle bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5141:205","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-baseline gap-1.5 text-[11px]","data-source-loc":"weekly_chores_household_hub.tsx:5141:316","data-source-comp":"App",children:[r.jsx("span",{className:"font-semibold text-slate-900 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5141:373","data-source-comp":"App",children:"Who:"}),r.jsxs("select",{value:U,onChange:W=>Wn(p.index_,h,{who:W.target.value}),className:"flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5141:440","data-source-comp":"App",children:[r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5143:168","data-source-comp":"App"}),r.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5143:194","data-source-comp":"App",children:y.filter(W=>W.type==="regular").map(W=>r.jsx("option",{value:W.name,"data-source-loc":"weekly_chores_household_hub.tsx:5143:290","data-source-comp":"App",children:W.name},W.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5143:354","data-source-comp":"App",children:y.filter(W=>W.type==="biweekly").map(W=>r.jsx("option",{value:W.name,"data-source-loc":"weekly_chores_household_hub.tsx:5143:451","data-source-comp":"App",children:W.name},W.id))}),r.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5143:515","data-source-comp":"App",children:y.filter(W=>W.type==="casual").map(W=>r.jsx("option",{value:W.name,"data-source-loc":"weekly_chores_household_hub.tsx:5143:607","data-source-comp":"App",children:W.name},W.id))}),r.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5143:671","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5143:704","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5143:758","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5143:800","data-source-comp":"App",children:"Parents"})]})]})]})}),r.jsx("td",{colSpan:2,className:"py-1.5 px-2 align-middle bg-white text-left",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5143:871","data-source-comp":"App",children:r.jsxs("button",{type:"button",onClick:()=>Wn(p.index_,h,{done:!O.done}),className:"inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full",title:"Click to toggle Done","data-source-loc":"weekly_chores_household_hub.tsx:5143:988","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5145:152","data-source-comp":"App",children:"Done:"}),r.jsx("span",{className:`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${O.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5145:170","data-source-comp":"App",children:O.done?"✓":"______"})]})})]})})():Ut.map((O,U)=>{var W,R,Z,ne;const Re=1+U*2,Pe=2+U*2,it=Tt(Oe)||{year:2026,month:9,day:19},kt=new Date(it.year,it.month,it.day+U),Ne=jn(kt.getFullYear(),kt.getMonth(),kt.getDate()),je=sr(Ne,p.index_,h),Ke=((W=q[p.index_])==null?void 0:W.row)||(h?(R=q[h.toLowerCase().trim()])==null?void 0:R.row:null),Xe=(Ke==null?void 0:Ke[Re])!==void 0?Ke[Re]:(Z=p.row)==null?void 0:Z[Re],ar=(Ke==null?void 0:Ke[Pe])!==void 0?Ke[Pe]:(ne=p.row)==null?void 0:ne[Pe],Mr=Xe!=null?String(Xe).trim():je!=null&&je.who?String(je.who).trim():"",Rr=ar!=null?ar===!0||String(ar).toLowerCase()==="true":!!(je!=null&&je.done);return r.jsxs(ao.Fragment,{children:[r.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:"1px solid #94A3B8"},"data-source-loc":"weekly_chores_household_hub.tsx:5164:49","data-source-comp":"App",children:r.jsxs("select",{value:Mr,onChange:rt=>{bo(p.index_,U,"who",rt.target.value,h)},className:"w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5164:148","data-source-comp":"App",children:[r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5166:149","data-source-comp":"App"}),r.jsx("optgroup",{label:"Full-Time Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5166:175","data-source-comp":"App",children:y.filter(rt=>rt.type==="regular").map(rt=>r.jsx("option",{value:rt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5166:271","data-source-comp":"App",children:rt.name},rt.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5166:335","data-source-comp":"App",children:y.filter(rt=>rt.type==="biweekly").map(rt=>r.jsx("option",{value:rt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5166:432","data-source-comp":"App",children:rt.name},rt.id))}),r.jsx("optgroup",{label:"Casual Assignees","data-source-loc":"weekly_chores_household_hub.tsx:5166:496","data-source-comp":"App",children:y.filter(rt=>rt.type==="casual").map(rt=>r.jsx("option",{value:rt.name,"data-source-loc":"weekly_chores_household_hub.tsx:5166:588","data-source-comp":"App",children:rt.name},rt.id))}),r.jsxs("optgroup",{label:"Special Groups","data-source-loc":"weekly_chores_household_hub.tsx:5166:652","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5166:685","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5166:731","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5166:785","data-source-comp":"App",children:"Each Child"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5166:831","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5166:873","data-source-comp":"App",children:"Parents"})]}),Mr&&!y.some(rt=>rt.name===Mr)&&!["Non-Casual","All Non-Casual","Each Child","All Kids","Parents"].includes(Mr)&&r.jsx("option",{value:Mr,"data-source-loc":"weekly_chores_household_hub.tsx:5166:1073","data-source-comp":"App",children:Mr})]})}),r.jsx("td",{className:"p-1 text-center align-middle bg-white",style:{borderRight:U<6?"1.5px solid #475569":"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5166:1128","data-source-comp":"App",children:r.jsx("button",{type:"button",onClick:()=>{bo(p.index_,U,"done",!Rr,h)},className:"w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer",title:Rr?"Mark as not done":"Mark as done","data-source-loc":"weekly_chores_household_hub.tsx:5166:1264","data-source-comp":"App",children:Rr?r.jsx("span",{className:"text-emerald-700 font-black text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5168:196","data-source-comp":"App",children:"✓"}):r.jsx("span",{className:"text-slate-300 print:hidden text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5168:270","data-source-comp":"App",children:"☐"})})})]},O.name)})]},`row-${p.index_}-${h}`)}),r.jsxs("tr",{className:"h-14","data-source-loc":"weekly_chores_household_hub.tsx:5171:11","data-source-comp":"App",children:[r.jsx("td",{style:{backgroundColor:"#002060"},"data-source-loc":"weekly_chores_household_hub.tsx:5171:32","data-source-comp":"App"}),Ut.map(s=>r.jsx("td",{colSpan:2,style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5171:98","data-source-comp":"App"},`band-${s.name}`))]}),r.jsxs("tr",{className:"bg-white text-slate-900",style:{borderTop:"1px solid #475569",borderBottom:"2.5px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5173:11","data-source-comp":"App",children:[r.jsx("td",{className:"py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white",style:{borderLeft:"1px solid #C55A11",borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5173:131","data-source-comp":"App",children:"Weekly Sign-Off"}),r.jsx("td",{colSpan:12,className:"py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white",style:{borderRight:"1.5px solid #475569"},"data-source-loc":"weekly_chores_household_hub.tsx:5173:305","data-source-comp":"App",children:"Parent Initials:"}),r.jsx("td",{colSpan:2,className:"py-2 px-2 text-center bg-white",style:{borderRight:"1px solid #C55A11"},"data-source-loc":"weekly_chores_household_hub.tsx:5173:469","data-source-comp":"App",children:r.jsx("button",{type:"button",onClick:Gr,className:"inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900",title:"Click to toggle Parent Sign-Off","data-source-loc":"weekly_chores_household_hub.tsx:5173:573","data-source-comp":"App",children:r.jsx("span",{className:`inline-block min-w-[56px] border-b border-slate-800 ${qs.done?"text-emerald-700 font-bold":"text-transparent select-none"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5173:782","data-source-comp":"App",children:qs.done?"✓ TV / MV":"_________"})})})]})]})]})})]}),r.jsxs("div",{className:"no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5173:1047","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:1119","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:1204","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-indigo-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:1311","data-source-comp":"App",children:"HOUSEHOLD ROSTER"}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5173:1405","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5173:1490","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:1562","data-source-comp":"App",children:[r.jsx("strong",{className:"text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:1567","data-source-comp":"App",children:"• Full-Time:"})," ",y.filter(s=>s.type==="regular").map(s=>s.name).join(", ")||"Sydney, Thom, Meghan"]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:1746","data-source-comp":"App",children:[r.jsx("strong",{className:"text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:1751","data-source-comp":"App",children:"• Bi-Weekly:"})," ",y.filter(s=>s.type==="biweekly").map(s=>s.name).join(" & ")||"Cadence & Mason"]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:1926","data-source-comp":"App",children:[r.jsx("strong",{className:"text-sky-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:1931","data-source-comp":"App",children:"• Casual:"})," ",y.filter(s=>s.type==="casual").map(s=>s.name).join(", ")||"Koda, Keyanna"]})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:2109","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:2194","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-pink-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:2301","data-source-comp":"App",children:"BI-WEEKLY SCHEDULE"}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5173:2395","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5173:2480","data-source-comp":"App",children:[r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:2552","data-source-comp":"App",children:"• Cadence & Mason: Alternating bi-weekly schedule"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:2621","data-source-comp":"App",children:"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:2709","data-source-comp":"App",children:"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:2797","data-source-comp":"App",children:"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:2900","data-source-comp":"App",children:"• On-weeks (Starts Oct 19): Included in daily chore rotations"})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:2993","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:3078","data-source-comp":"App",children:[r.jsx("span",{className:"uppercase tracking-wider text-[11px] text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:3185","data-source-comp":"App",children:'PET CARE ROUTINE ("FEED THE HERD")'}),r.jsx("span",{className:"text-[10px] text-slate-400 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5173:3300","data-source-comp":"App",children:"Sheet Row 19–22"})]}),r.jsxs("div",{className:"space-y-1.5 text-slate-700 text-[11px] leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5173:3385","data-source-comp":"App",children:[r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:3457","data-source-comp":"App",children:"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:3548","data-source-comp":"App",children:"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:3640","data-source-comp":"App",children:"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}),r.jsx("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:3741","data-source-comp":"App",children:"• Routine: Daily feeding, fresh water & station cleanup"})]})]})]})]}),Pt==="stats"&&r.jsxs("div",{className:"max-w-4xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5173:3867","data-source-comp":"App",children:[r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5","data-source-loc":"weekly_chores_household_hub.tsx:5173:3912","data-source-comp":"App",children:[r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5173:3984","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:4059","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5173:4110","data-source-comp":"App",children:"Scheduled Chores"}),r.jsx(Au,{className:"w-4 h-4 text-slate-400"})]}),r.jsx("div",{className:"text-2xl font-bold text-slate-900 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:4241","data-source-comp":"App",children:Er.totalScheduled}),r.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5173:4330","data-source-comp":"App",children:["Total across ",yn[st]," ",wt]})]}),r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5173:4447","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:4522","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5173:4573","data-source-comp":"App",children:"Completed Chores"}),r.jsx(ju,{className:"w-4 h-4 text-emerald-500"})]}),r.jsx("div",{className:"text-2xl font-bold text-emerald-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:4709","data-source-comp":"App",children:Er.totalCompleted}),r.jsxs("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5173:4800","data-source-comp":"App",children:[Er.completionRate,"% completion rate"]})]}),r.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5173:4897","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:4972","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-semibold text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5173:5023","data-source-comp":"App",children:"Active Tasks"}),r.jsx(Nl,{className:"w-4 h-4 text-indigo-500"})]}),r.jsx("div",{className:"text-2xl font-bold text-indigo-600 mt-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:5151","data-source-comp":"App",children:me.length}),r.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5173:5232","data-source-comp":"App",children:"Daily & weekly routines"})]}),r.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5173:5308","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5173:5422","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-bold text-amber-900","data-source-loc":"weekly_chores_household_hub.tsx:5173:5473","data-source-comp":"App",children:"Current Top Performer"}),r.jsx(id,{className:"w-4 h-4 text-amber-600"})]}),r.jsx("div",{className:"text-xl font-black text-amber-950 mt-2 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5173:5602","data-source-comp":"App",children:Yr?Yr.name:"TBD"}),r.jsx("p",{className:"text-xs text-amber-800 mt-1 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5173:5715","data-source-comp":"App",children:Yr?`${Yr.done} chores finished`:"Track chores to rank"})]})]}),r.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md","data-source-loc":"weekly_chores_household_hub.tsx:5173:5863","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5173:5977","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5173:6088","data-source-comp":"App",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner","data-source-loc":"weekly_chores_household_hub.tsx:5173:6129","data-source-comp":"App",children:r.jsx(sp,{className:"w-6 h-6 text-amber-200"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5173:6285","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:6290","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full","data-source-loc":"weekly_chores_household_hub.tsx:5173:6331","data-source-comp":"App",children:"Monthly Incentive Prize"}),r.jsxs("span",{className:"text-xs opacity-90","data-source-loc":"weekly_chores_household_hub.tsx:5173:6464","data-source-comp":"App",children:[yn[st]," ",wt]})]}),r.jsx("h3",{className:"text-base font-extrabold mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5173:6561","data-source-comp":"App",children:"Top Performer Reward & Recognition"})]})]}),r.jsx("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5173:6660","data-source-comp":"App",children:r.jsxs("button",{onClick:()=>{Fs(s=>!s),Ln($o)},className:"text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5173:6701","data-source-comp":"App",children:[r.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5176:203","data-source-comp":"App",children:Ls?"Cancel Edit":"Customize Incentive"})]})})]}),Ls?r.jsxs("div",{className:"pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5176:1186","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-white mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5176:1281","data-source-comp":"App",children:"Set Monthly Reward / Incentive Prize for the Top Performer:"}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5176:1399","data-source-comp":"App",children:[r.jsx("input",{type:"text",value:Ho,onChange:s=>Ln(s.target.value),placeholder:"e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass...",className:"flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300","data-source-loc":"weekly_chores_household_hub.tsx:5176:1427","data-source-comp":"App"}),r.jsx("button",{onClick:()=>{Ho.trim()&&(Na(Ho.trim()),Fs(!1),pe(`Updated Monthly Incentive: "${Ho.trim()}"`),setTimeout(()=>pe(null),3e3))},className:"px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition","data-source-loc":"weekly_chores_household_hub.tsx:5176:1732","data-source-comp":"App",children:"Save Prize"})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] pt-1","data-source-loc":"weekly_chores_household_hub.tsx:5183:140","data-source-comp":"App",children:[r.jsx("span",{className:"opacity-80","data-source-loc":"weekly_chores_household_hub.tsx:5183:210","data-source-comp":"App",children:"Quick ideas:"}),r.jsx("button",{onClick:()=>Ln("$15 Allowance Bonus & Pizza Night Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5183:258","data-source-comp":"App",children:"$15 + Pizza Night"}),r.jsx("button",{onClick:()=>Ln("1-Day Chore Exemption Pass & Movie Pick"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5183:445","data-source-comp":"App",children:"1-Day Chore Pass"}),r.jsx("button",{onClick:()=>Ln("$20 Gift Card & Weekend Treat"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5183:628","data-source-comp":"App",children:"$20 Gift Card"}),r.jsx("button",{onClick:()=>Ln("Family Ice Cream Outing of Their Choice"),className:"px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white","data-source-loc":"weekly_chores_household_hub.tsx:5183:802","data-source-comp":"App",children:"Ice Cream Outing"})]})]}):r.jsxs("div",{className:"pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5176:320","data-source-comp":"App",children:[r.jsxs("div",{className:"space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5176:414","data-source-comp":"App",children:[r.jsx("div",{className:"text-amber-100 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5176:441","data-source-comp":"App",children:"Incentive for Highest Monthly Chore Completions:"}),r.jsxs("div",{className:"text-sm font-black text-white flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5176:539","data-source-comp":"App",children:[r.jsx(dd,{className:"w-4 h-4 text-amber-200 shrink-0"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5176:662","data-source-comp":"App",children:$o})]})]}),Yr&&r.jsxs("div",{className:"bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20","data-source-loc":"weekly_chores_household_hub.tsx:5176:722","data-source-comp":"App",children:[r.jsx(id,{className:"w-4 h-4 text-amber-200 shrink-0"}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5176:915","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] text-amber-100 uppercase tracking-wider font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5176:920","data-source-comp":"App",children:"Leading Candidate"}),r.jsxs("div",{className:"font-extrabold text-xs text-white","data-source-loc":"weekly_chores_household_hub.tsx:5176:1022","data-source-comp":"App",children:[Yr.name," (",Yr.done," finished • ",Yr.pct,"%)"]})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5183:1004","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5183:1079","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5183:1196","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5183:1201","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5183:1242","data-source-comp":"App",children:"Family Members Completion"}),r.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5183:1323","data-source-comp":"App",children:["Unified Roster (",qn.length," Members)"]})]}),r.jsxs("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5183:1508","data-source-comp":"App",children:["Monthly Total Tracker ranked by total chores completed for ",yn[st]," ",wt,". All household members are displayed together in a single unified leaderboard."]})]}),r.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5183:1752","data-source-comp":"App",children:[r.jsx(Su,{className:"w-4 h-4 text-amber-500"}),r.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5183:1860","data-source-comp":"App",children:"Ranked by Monthly Completions"})]})]}),r.jsx("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5183:1955","data-source-comp":"App",children:qn.map((s,i)=>{const c=i===0&&s.done>0,m=i===1&&s.done>0,p=i===2&&s.done>0;return r.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${c?"border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm":"border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5187:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5187:242","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5187:330","data-source-comp":"App",children:[r.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${c?"bg-amber-500 text-white shadow-xs":m?"bg-slate-300 text-slate-800":p?"bg-amber-700/80 text-white":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5187:371","data-source-comp":"App",children:c?r.jsx(id,{className:"w-4 h-4"}):`#${i+1}`}),r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5187:698","data-source-comp":"App",children:[r.jsx("span",{className:"w-3.5 h-3.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5187:739","data-source-comp":"App"}),r.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5189:18","data-source-comp":"App",children:s.name}),s.role&&r.jsxs("span",{className:"text-xs text-slate-500 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5189:95","data-source-comp":"App",children:["(",s.role," = ",s.role==="Supreme Overlord"?"Parent":"Kid",")"]}),r.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.type==="biweekly"?"bg-pink-50 text-pink-700 border-pink-200":s.type==="casual"?"bg-sky-50 text-sky-700 border-sky-200":"bg-slate-100 text-slate-600 border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5189:223","data-source-comp":"App",children:s.residency}),c&&r.jsxs("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5189:516","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5189:673","data-source-comp":"App",children:"🏆"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5189:699","data-source-comp":"App",children:"Top Performer • Incentive Winner"})]})]})]}),r.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5189:773","data-source-comp":"App",children:[r.jsxs("div",{className:"text-right","data-source-loc":"weekly_chores_household_hub.tsx:5189:844","data-source-comp":"App",children:[r.jsx("span",{className:"font-extrabold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5189:872","data-source-comp":"App",children:s.done}),r.jsxs("span",{className:"text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5189:943","data-source-comp":"App",children:[" / ",s.total," completed"]})]}),r.jsxs("span",{className:`font-black text-xs px-2 py-0.5 rounded-md ${s.pct>=80?"bg-emerald-100 text-emerald-800":s.pct>=50?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-600"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5189:1019","data-source-comp":"App",children:[s.pct,"%"]})]})]}),r.jsx("div",{className:"w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5189:1235","data-source-comp":"App",children:r.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500",style:{width:`${s.pct}%`,backgroundColor:c?"#D97706":s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5189:1310","data-source-comp":"App"})}),c&&r.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5192:36","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5192:165","data-source-comp":"App",children:[r.jsx(dd,{className:"w-3.5 h-3.5 text-amber-700 shrink-0"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5192:264","data-source-comp":"App",children:["Qualifying Reward: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5192:293","data-source-comp":"App",children:$o})]})]}),r.jsxs("span",{className:"font-bold text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5192:341","data-source-comp":"App",children:["Rank #1 in ",yn[st]]})]})]},s.id)})})]}),r.jsxs("div",{className:"p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5193:26","data-source-comp":"App",children:[r.jsx("h4",{className:"text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5193:107","data-source-comp":"App",children:r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:212","data-source-comp":"App",children:"🐾 House Pets Overview"})}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5193:263","data-source-comp":"App",children:ke.filter(s=>s.active!==!1).map(s=>r.jsxs("div",{className:"p-2.5 rounded-lg border flex items-center gap-2",style:{backgroundColor:s.bg,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5193:381","data-source-comp":"App",children:[r.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5193:541","data-source-comp":"App"}),r.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5193:634","data-source-comp":"App",children:s.icon}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:679","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5193:684","data-source-comp":"App",children:s.name}),r.jsx("div",{className:"text-[10px] opacity-80",style:{color:s.text},"data-source-loc":"weekly_chores_household_hub.tsx:5193:755","data-source-comp":"App",children:s.type})]})]},`${s.index_}-${s.name}`))})]})]}),Pt==="roster"&&r.jsx("div",{className:"max-w-5xl mx-auto space-y-6","data-source-loc":"weekly_chores_household_hub.tsx:5193:899","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm","data-source-loc":"weekly_chores_household_hub.tsx:5193:944","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5193:1019","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:1131","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5193:1136","data-source-comp":"App",children:[r.jsx("h2",{className:"text-lg font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5193:1177","data-source-comp":"App",children:"Household Hub Master Data"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5193:1256","data-source-comp":"App",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500","data-source-loc":"weekly_chores_household_hub.tsx:5193:1408","data-source-comp":"App"}),"Linked: Monthly Calendar & Printable Weekly Schedule"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5193:1533","data-source-comp":"App",children:"Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files."})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5193:1713","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5193:1764","data-source-comp":"App",children:["Selected Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:1898","data-source-comp":"App",children:ht||$.activeWeekStart})]}),r.jsxs("span",{className:"text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200","data-source-loc":"weekly_chores_household_hub.tsx:5193:1975","data-source-comp":"App",children:["Kids Week: ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:2101","data-source-comp":"App",children:Tr?"Active":"Inactive"})]}),r.jsxs("button",{type:"button",onClick:xo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer",title:"Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json","data-source-loc":"weekly_chores_household_hub.tsx:5193:2173","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:2493","data-source-comp":"App",children:"💾"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:2508","data-source-comp":"App",children:"Save as Default"})]}),r.jsxs("button",{type:"button",onClick:zo,className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Download / export current configuration backup file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5193:2545","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:2847","data-source-comp":"App",children:"⬇️"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:2862","data-source-comp":"App",children:"Export Config"})]}),r.jsxs("label",{className:"flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer",title:"Import / restore a configuration file (.json)","data-source-loc":"weekly_chores_household_hub.tsx:5193:2897","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:3141","data-source-comp":"App",children:"⬆️"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5193:3156","data-source-comp":"App",children:"Import Config"}),r.jsx("input",{type:"file",accept:".json",onChange:Tl,className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5193:3182","data-source-comp":"App"})]})]})]}),r.jsxs("div",{className:"my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5193:3291","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5193:3436","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5193:3487","data-source-comp":"App",children:[r.jsx(ws,{className:"w-4 h-4 text-indigo-600"}),r.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-indigo-950","data-source-loc":"weekly_chores_household_hub.tsx:5193:3576","data-source-comp":"App",children:"Special Rules & Parameters"})]}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800","data-source-loc":"weekly_chores_household_hub.tsx:5193:3688","data-source-comp":"App",children:"Live Analytical Summary"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5193:3823","data-source-comp":"App",children:[(()=>{const s=y.filter(h=>h.active!==!1&&(h.role==="Supreme Overlord"||h.role==="Overseer Supreme")).map(h=>h.name),i=s.length>0?s.join(" & "):"None",c=y.filter(h=>h.active!==!1&&h.type==="regular").map(h=>h.name),m=y.filter(h=>h.active!==!1&&h.type==="biweekly").map(h=>h.name),p=Tr?[...c,...m]:c;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5199:22","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5199:112","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:182","data-source-comp":"App",children:"👑"}),"Supreme Overlords (Parents) & Minions (Kids)"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5199:263","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:321","data-source-comp":"App",children:i}),", AKA ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:364","data-source-comp":"App",children:"Supreme Overlords"}),", actively share daily chores with the ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:433","data-source-comp":"App",children:"Kids"}),", AKA ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:464","data-source-comp":"App",children:"Minions"}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:481","data-source-comp":"App"}),r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:487","data-source-comp":"App",children:"Sunday Supper Rule:"})," On Sundays, ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:540","data-source-comp":"App",children:"Make Supper"})," is always assigned exclusively to ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:599","data-source-comp":"App",children:i}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:633","data-source-comp":"App"}),"They also conduct the Sunday ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:672","data-source-comp":"App",children:"Weekly Sign-Off & Inspection"}),"."]})]}),r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5199:728","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-pink-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5199:816","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:884","data-source-comp":"App",children:"🏠"})," Custody Rotation: Kids Week"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5199:949","data-source-comp":"App",children:["For selected week, ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:1030","data-source-comp":"App",children:ht||$.activeWeekStart}),", Kids Week = ",r.jsx("strong",{className:Tr?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5199:1118","data-source-comp":"App",children:Tr?"Active":"Inactive"}),".",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:1258","data-source-comp":"App"}),r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:1264","data-source-comp":"App",children:m.length>0?m.join(" & "):"Bi-Weekly Occupants"})," are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5199:1486","data-source-comp":"App",children:"5:00 PM"}),". ",Tr?`Chores for this week are distributed across all ${p.length} active household members (${p.join(", ")}).`:`Chores for this week are distributed among the full-time roster (${c.join(", ")}).`]})]})]})})(),r.jsxs("div",{className:"p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5200:16","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-amber-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5200:105","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5200:174","data-source-comp":"App",children:"🚛"})," Alternating Curbside Schedule"]}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5200:241","data-source-comp":"App",children:["Curbside tasks alternate bi-weekly on Thursday evenings for the ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5200:367","data-source-comp":"App",children:"Full-Time"})," & ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5200:400","data-source-comp":"App",children:"Bi-Weekly"})," occupants.",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5200:441","data-source-comp":"App"}),(()=>{const s=At[3]||At[0],i=s?Et("Curbside Waste",s.year,s.month,s.day):!1,c=s?Et("Curbside Recycling",s.year,s.month,s.day):!0;return r.jsxs(r.Fragment,{children:["For selected week, ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5204:45","data-source-comp":"App",children:ht||$.activeWeekStart}),":",r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5204:120","data-source-comp":"App"}),"Waste = ",r.jsx("strong",{className:i?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5204:138","data-source-comp":"App",children:i?"Active":"Inactive"}),r.jsx("br",{"data-source-loc":"weekly_chores_household_hub.tsx:5204:255","data-source-comp":"App"}),"Recycling = ",r.jsx("strong",{className:c?"text-emerald-700":"text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5204:277","data-source-comp":"App",children:c?"Active":"Inactive"})]})})()]})]})]})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4","data-source-loc":"weekly_chores_household_hub.tsx:5205:38","data-source-comp":"App",children:[r.jsxs("div",{className:"p-3 bg-purple-50/70 border border-purple-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5205:98","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-purple-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5205:171","data-source-comp":"App",children:"Full-Time Occupants"}),r.jsx("div",{className:"text-[8px] italic text-purple-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5205:276","data-source-comp":"App",children:"(Eternally working)"}),r.jsxs("div",{className:"text-lg font-extrabold text-purple-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:394","data-source-comp":"App",children:[y.filter(s=>s.active!==!1&&s.type==="regular").length," Members"]}),r.jsx("div",{className:"text-[11px] text-purple-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:553","data-source-comp":"App",children:y.filter(s=>s.active!==!1&&s.type==="regular").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-pink-50/70 border border-pink-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5205:751","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-pink-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5205:820","data-source-comp":"App",children:"Bi-Weekly Occupants"}),r.jsx("div",{className:"text-[8px] italic text-pink-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5205:923","data-source-comp":"App",children:"(Half-Timers)"}),r.jsxs("div",{className:"text-lg font-extrabold text-pink-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:1033","data-source-comp":"App",children:[y.filter(s=>s.active!==!1&&s.type==="biweekly").length," Members"]}),r.jsx("div",{className:"text-[11px] text-pink-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:1191","data-source-comp":"App",children:y.filter(s=>s.active!==!1&&s.type==="biweekly").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-sky-50/70 border border-sky-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5205:1388","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-sky-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5205:1455","data-source-comp":"App",children:"Casual Assignees"}),r.jsx("div",{className:"text-[8px] italic text-sky-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5205:1554","data-source-comp":"App",children:"(Manually added to schedule)"}),r.jsxs("div",{className:"text-lg font-extrabold text-sky-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:1678","data-source-comp":"App",children:[y.filter(s=>s.active!==!1&&s.type==="casual").length," Members"]}),r.jsx("div",{className:"text-[11px] text-sky-700 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:1833","data-source-comp":"App",children:y.filter(s=>s.active!==!1&&s.type==="casual").map(s=>s.name).join(", ")||"None"})]}),r.jsxs("div",{className:"p-3 bg-amber-50/70 border border-amber-200 rounded-xl","data-source-loc":"weekly_chores_household_hub.tsx:5205:2027","data-source-comp":"App",children:[r.jsx("div",{className:"text-[10px] font-bold text-amber-900 uppercase tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5205:2098","data-source-comp":"App",children:"The Herd"}),r.jsx("div",{className:"text-[8px] italic text-amber-800 leading-tight",style:{fontSize:"8px"},"data-source-loc":"weekly_chores_household_hub.tsx:5205:2191","data-source-comp":"App",children:"(Various beasts)"}),r.jsxs("div",{className:"text-lg font-extrabold text-amber-950 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:2305","data-source-comp":"App",children:[ke.filter(s=>s.active!==!1).length," Pets"]}),r.jsx("div",{className:"text-[11px] text-amber-800 break-words leading-snug mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5205:2433","data-source-comp":"App",children:ke.filter(s=>s.active!==!1).map(s=>s.name).join(", ")||"None"})]})]}),r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:2609","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5205:2636","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5205:2703","data-source-comp":"App",children:[r.jsx(xa,{className:"w-4 h-4 text-indigo-600"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5205:2789","data-source-comp":"App",children:"Household Members"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5205:2860","data-source-comp":"App",children:"Rows 5–11 • Linked Data"})]}),r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:3007","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5205:3048","data-source-comp":"App",children:[y.length," Registered Occupants"]}),r.jsxs("button",{type:"button",onClick:()=>Br(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer",title:"Add a new household member","data-source-loc":"weekly_chores_household_hub.tsx:5205:3143","data-source-comp":"App",children:[r.jsx(gs,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5205:3436","data-source-comp":"App",children:"Add Member"})]})]})]}),r.jsx("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5205:3480","data-source-comp":"App",children:r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5205:3560","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5205:3604","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5205:3727","data-source-comp":"App",children:[r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:3731","data-source-comp":"App",children:"Name"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:3760","data-source-comp":"App",children:"Role"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:3789","data-source-comp":"App",children:"Occupancy"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5205:3823","data-source-comp":"App",children:"Special Rotation Groups"}),r.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5205:3871","data-source-comp":"App",children:"Active Status"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5205:3921","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5205:3977","data-source-comp":"App",children:y.map(s=>{const i=s.role==="Supreme Overlord"||s.role==="Overseer Supreme"?"Supreme Overlord":"Minion",c=s.type==="biweekly"?"Bi-Weekly":s.type==="casual"?"Casual":"Full-Time",m=["Parents","Kids","Non-Casual","All"],p=String(s.specialGroups||"").split(",").map(C=>C.trim()).filter(Boolean),h=Ts===s.index_,d=Bs===s.index_,f=()=>{const C=Dr.trim()||s.name;vo(s.index_,{name:C}),hn(null)},x=C=>{const D=new Set(p);D.has(C)?D.delete(C):D.add(C);const T=m.filter(b=>D.has(b));vo(s.index_,{specialGroups:T.join(", ")})};return r.jsxs("tr",{className:`transition ${d?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5234:20","data-source-comp":"App",children:[r.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5234:153","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5234:202","data-source-comp":"App",children:[r.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5234:243","data-source-comp":"App"}),d?r.jsx("input",{type:"text",value:Dr,onChange:C=>jr(C.target.value),onKeyDown:C=>{C.key==="Enter"&&f(),C.key==="Escape"&&hn(null)},className:"w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5236:37","data-source-comp":"App"}):r.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5236:424","data-source-comp":"App",children:s.name})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5236:499","data-source-comp":"App",children:r.jsxs("select",{value:i,onChange:C=>vo(s.index_,{role:C.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${i==="Supreme Overlord"?"bg-amber-100 text-amber-900 border border-amber-300":"bg-indigo-50 text-indigo-800 border border-indigo-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5236:519","data-source-comp":"App",children:[r.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5236:901","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),r.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5236:968","data-source-comp":"App",children:"Minion (Kid)"})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5236:1026","data-source-comp":"App",children:r.jsxs("select",{value:c,onChange:C=>vo(s.index_,{residency:C.target.value}),className:`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${c==="Bi-Weekly"?"bg-pink-50 text-pink-700 border border-pink-200":c==="Casual"?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5236:1046","data-source-comp":"App",children:[r.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5236:1493","data-source-comp":"App",children:"Full-Time"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5236:1537","data-source-comp":"App",children:"Bi-Weekly"}),r.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5236:1581","data-source-comp":"App",children:"Casual"})]})}),r.jsxs("td",{className:"p-3 relative","data-source-loc":"weekly_chores_household_hub.tsx:5236:1633","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Mn(h?null:s.index_),className:"w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5236:1662","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5236:2029","data-source-comp":"App",children:p.length>0?p.join(", "):"None selected"}),r.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${h?"rotate-180 text-indigo-600":""}`})]}),h&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Mn(null),"data-source-loc":"weekly_chores_household_hub.tsx:5236:2306","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5236:2393","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5236:2518","data-source-comp":"App",children:"Rotation Groups"}),m.map(C=>{const D=p.includes(C);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5238:22","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:D,onChange:()=>x(C),className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5238:164","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${D?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5238:353","data-source-comp":"App",children:C})]},C)})]})]})]}),r.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5239:31","data-source-comp":"App",children:r.jsxs("select",{value:s.active?"true":"false",onChange:C=>vo(s.index_,{active:C.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5239:63","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5239:471","data-source-comp":"App",children:"✓ Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5239:518","data-source-comp":"App",children:"○ Inactive"})]})}),r.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5239:582","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5239:613","data-source-comp":"App",children:[d?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:f,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save name","data-source-loc":"weekly_chores_household_hub.tsx:5239:694","data-source-comp":"App",children:r.jsx(ad,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>hn(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel","data-source-loc":"weekly_chores_household_hub.tsx:5239:922","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{hn(s.index_),jr(s.name)},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Rename ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5239:1157","data-source-comp":"App",children:r.jsx(Wo,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Rl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Members`,"data-source-loc":"weekly_chores_household_hub.tsx:5242:201","data-source-comp":"App",children:r.jsx(so,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:42","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5243:105","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5243:172","data-source-comp":"App",children:[r.jsx("span",{className:"text-base","data-source-loc":"weekly_chores_household_hub.tsx:5243:213","data-source-comp":"App",children:"🐾"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5243:261","data-source-comp":"App",children:"Household Pets"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5243:329","data-source-comp":"App",children:"Rows 27–32 • Linked Data"})]}),r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:501","data-source-comp":"App",children:[r.jsxs("span",{className:"text-xs text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5243:542","data-source-comp":"App",children:[ke.length," Registered Pets"]}),r.jsxs("button",{type:"button",onClick:()=>ze(!0),className:"flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer",title:"Add a new household pet member","data-source-loc":"weekly_chores_household_hub.tsx:5243:629","data-source-comp":"App",children:[r.jsx(gs,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5243:921","data-source-comp":"App",children:"Add Member"})]})]})]}),r.jsx("div",{className:"overflow-x-auto border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5243:965","data-source-comp":"App",children:r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5243:1044","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5243:1088","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5243:1211","data-source-comp":"App",children:[r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:1215","data-source-comp":"App",children:"Name"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:1244","data-source-comp":"App",children:"Species"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:1276","data-source-comp":"App",children:"Feeding Routine"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5243:1316","data-source-comp":"App",children:"Care Responsibilities"}),r.jsx("th",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5243:1362","data-source-comp":"App",children:"Active Status"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5243:1412","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{className:"divide-y divide-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5243:1468","data-source-comp":"App",children:ke.map(s=>{const i=["Dog","Cat","Bird","Fish","Small Pet","Other"],c=s.type||"Dog";i.includes(c)||i.unshift(c);const m=Ks===s.index_,p=()=>{const h=un.name.trim()||s.name;ko(s.index_,{name:h,routine:un.routine.trim(),care:un.care.trim()}),cn(null)};return r.jsxs("tr",{className:`transition ${m?"bg-amber-50/60":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5259:20","data-source-comp":"App",children:[r.jsx("td",{className:"p-3 font-semibold text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5259:143","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5259:192","data-source-comp":"App",children:[r.jsx("span",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5259:233","data-source-comp":"App"}),r.jsx("span",{className:"text-base shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5259:322","data-source-comp":"App",children:s.icon}),m?r.jsx("input",{type:"text",value:un.name,onChange:h=>yo(d=>({...d,name:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5259:392","data-source-comp":"App"}):r.jsx("span",{className:"px-2 py-0.5 rounded-full font-bold text-[11px] border",style:{backgroundColor:s.bg,color:s.text,borderColor:s.border},"data-source-loc":"weekly_chores_household_hub.tsx:5259:801","data-source-comp":"App",children:s.name})]})}),r.jsx("td",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5259:980","data-source-comp":"App",children:r.jsx("select",{value:c,onChange:h=>ko(s.index_,{type:h.target.value}),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${c==="Dog"?"bg-amber-100 text-amber-900 border border-amber-300":c==="Cat"?"bg-orange-50 text-orange-800 border border-orange-200":"bg-slate-100 text-slate-800 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5259:1000","data-source-comp":"App",children:i.map(h=>r.jsx("option",{value:h,"data-source-loc":"weekly_chores_household_hub.tsx:5259:1485","data-source-comp":"App",children:h},h))})}),r.jsx("td",{className:"p-3 font-medium text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5259:1542","data-source-comp":"App",children:m?r.jsx("input",{type:"text",value:un.routine,onChange:h=>yo(d=>({...d,routine:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5259:1605","data-source-comp":"App"}):s.routine}),r.jsx("td",{className:"p-3 text-slate-600 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5259:2045","data-source-comp":"App",children:m?r.jsx("input",{type:"text",value:un.care,onChange:h=>yo(d=>({...d,care:h.target.value})),onKeyDown:h=>{h.key==="Enter"&&p(),h.key==="Escape"&&cn(null)},className:"w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500","data-source-loc":"weekly_chores_household_hub.tsx:5259:2105","data-source-comp":"App"}):s.care}),r.jsx("td",{className:"p-3 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5259:2524","data-source-comp":"App",children:r.jsxs("select",{value:s.active?"true":"false",onChange:h=>ko(s.index_,{active:h.target.value==="true"}),className:`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${s.active?"text-emerald-700 bg-emerald-50 border border-emerald-200":"text-slate-500 bg-slate-100 border border-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5259:2556","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5259:2951","data-source-comp":"App",children:"✓ Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5259:2998","data-source-comp":"App",children:"○ Inactive"})]})}),r.jsx("td",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5259:3062","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5259:3093","data-source-comp":"App",children:[m?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:p,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5259:3171","data-source-comp":"App",children:r.jsx(ad,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>cn(null),className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5259:3399","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{cn(s.index_),yo({name:s.name,routine:s.routine,care:s.care})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.name}`,"data-source-loc":"weekly_chores_household_hub.tsx:5259:3639","data-source-comp":"App",children:r.jsx(Wo,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Fl(s.index_,s.name),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove ${s.name} from Household Pets`,"data-source-loc":"weekly_chores_household_hub.tsx:5266:196","data-source-comp":"App",children:r.jsx(so,{className:"w-3.5 h-3.5"})})]})})]},`${s.index_}-${s.name}`)})})]})})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5267:42","data-source-comp":"App",children:[r.jsx("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5267:105","data-source-comp":"App",children:r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5267:156","data-source-comp":"App",children:[r.jsx(rp,{className:"w-4 h-4 text-purple-600"}),r.jsx("h3",{className:"text-sm font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5267:243","data-source-comp":"App",children:"Occupancy Categories & Rules"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5267:325","data-source-comp":"App",children:"Rows 14–17"})]})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:451","data-source-comp":"App",children:X.map(s=>r.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:549","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5267:658","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-sm text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5267:709","data-source-comp":"App",children:s.type}),r.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5267:777","data-source-comp":"App",children:"Active"})]}),r.jsx("div",{className:"text-[11px] font-semibold text-indigo-700","data-source-loc":"weekly_chores_household_hub.tsx:5267:888","data-source-comp":"App",children:s.description}),r.jsxs("p",{className:"text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5267:970","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5267:1025","data-source-comp":"App",children:"Rule:"})," ",s.rules]})]},s.type))})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:1087","data-source-comp":"App",children:[r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5267:1186","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5267:1213","data-source-comp":"App",children:[r.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5267:1264","data-source-comp":"App",children:[r.jsx(xa,{className:"w-4 h-4 text-indigo-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5267:1384","data-source-comp":"App",children:"Special Rotation Groups"})]}),r.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5267:1425","data-source-comp":"App",children:"Rows 20–25"})]}),r.jsx("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5267:1507","data-source-comp":"App",children:F.map(s=>r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:1563","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5267:1656","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5267:1707","data-source-comp":"App",children:s.name}),r.jsx("span",{className:"text-[10px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5267:1767","data-source-comp":"App",children:"Group"})]}),r.jsx("div",{className:"text-[11px] text-slate-600 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5267:1842","data-source-comp":"App",children:s.members})]},s.name))})]}),r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5267:1943","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5267:1970","data-source-comp":"App",children:[r.jsxs("h3",{className:"text-sm font-bold text-slate-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5267:2021","data-source-comp":"App",children:[r.jsx(op,{className:"w-4 h-4 text-purple-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5267:2145","data-source-comp":"App",children:"Schedule Configurations"})]}),r.jsx("span",{className:"text-[10px] text-slate-500 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5267:2186","data-source-comp":"App",children:"Rows 18–21"})]}),r.jsxs("div",{className:"space-y-2","data-source-loc":"weekly_chores_household_hub.tsx:5267:2268","data-source-comp":"App",children:[r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:2295","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5267:2373","data-source-comp":"App",children:"Active Week Start Date"}),r.jsx("div",{className:"text-sm font-extrabold text-indigo-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5267:2451","data-source-comp":"App",children:$.activeWeekStart}),r.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5267:2555","data-source-comp":"App",children:"Scope: Printable Weekly Schedule"})]}),r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:2645","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5267:2723","data-source-comp":"App",children:"Custody Schedule Rotation"}),r.jsx("div",{className:"text-sm font-extrabold text-pink-600 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5267:2804","data-source-comp":"App",children:$.custodyRotation}),r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5267:2906","data-source-comp":"App",children:["Bi-Weekly Schedule • Members: ",$.custodyMembers]})]}),r.jsxs("div",{className:"p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:3037","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-900 block","data-source-loc":"weekly_chores_household_hub.tsx:5267:3115","data-source-comp":"App",children:"Waste / Recycling Schedule Rotation"}),r.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5267:3206","data-source-comp":"App",children:$.wasteRotation}),r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5267:3306","data-source-comp":"App",children:["Alternating weeks • Members: ",$.wasteMembers]})]})]})]})]}),r.jsxs("div",{className:"mt-8 pt-5 border-t border-slate-200 space-y-4","data-source-loc":"weekly_chores_household_hub.tsx:5267:3452","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4","data-source-loc":"weekly_chores_household_hub.tsx:5267:3515","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5267:3596","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5267:3601","data-source-comp":"App",children:[r.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5267:3642","data-source-comp":"App",children:r.jsx(Nl,{className:"w-4 h-4"})}),r.jsx("h3",{className:"text-base font-bold text-slate-900","data-source-loc":"weekly_chores_household_hub.tsx:5267:3784","data-source-comp":"App",children:"Master Chores Template & Registry"}),r.jsxs("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5267:3873","data-source-comp":"App",children:[we.length," Tasks • Rows 5–15 (Cols 6–10)"]})]}),r.jsx("p",{className:"text-xs text-slate-500 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5267:4084","data-source-comp":"App",children:"Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet."})]}),r.jsx("div",{className:"flex flex-wrap items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5267:4292","data-source-comp":"App",children:r.jsx("button",{onClick:()=>{fo(s=>!s)},className:"flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer",title:"Add a new master chore","data-source-loc":"weekly_chores_household_hub.tsx:5267:4343","data-source-comp":"App",children:Sa?r.jsxs(r.Fragment,{children:[r.jsx(Gt,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5269:253","data-source-comp":"App",children:"Close Add Chore"})]}):r.jsxs(r.Fragment,{children:[r.jsx(gs,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5269:317","data-source-comp":"App",children:"Add Chore"})]})})})]}),Sa&&r.jsxs("div",{className:"my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn","data-source-loc":"weekly_chores_household_hub.tsx:5269:386","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5269:516","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-sm text-indigo-900 flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5269:599","data-source-comp":"App",children:[r.jsx(gs,{className:"w-4 h-4 text-indigo-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5269:720","data-source-comp":"App",children:"Add New Master Chore to Household Hub"})]}),r.jsx("button",{onClick:()=>fo(!1),className:"text-slate-400 hover:text-slate-700 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5269:776","data-source-comp":"App",children:r.jsx(Gt,{className:"w-4 h-4"})})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5269:920","data-source-comp":"App",children:[r.jsxs("div",{className:"md:col-span-2","data-source-loc":"weekly_chores_household_hub.tsx:5269:983","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5269:1014","data-source-comp":"App",children:["Chore Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5269:1096","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:Je.task,onChange:s=>Bt(i=>({...i,task:s.target.value})),onKeyDown:s=>{s.key==="Enter"&&Je.task.trim()&&Pn(Je)},placeholder:"e.g. Empty dishwasher, sanitize counters, sweep porch...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5269:1148","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5278:261","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5278:266","data-source-comp":"App",children:"Category"}),r.jsx("select",{value:Je.category,onChange:s=>Bt(i=>({...i,category:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5278:337","data-source-comp":"App",children:An.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5283:201","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5283:282","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5283:287","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:Je.frequency,onChange:s=>{const i=s.target.value;Bt(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5283:359","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5292:172","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5292:208","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5292:256","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5292:315","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5292:320","data-source-comp":"App",children:"Target Day(s)"}),r.jsx("select",{value:Je.targetDay,onChange:s=>Bt(i=>({...i,targetDay:s.target.value})),className:"hidden","data-source-loc":"weekly_chores_household_hub.tsx:5292:396","data-source-comp":"App"}),r.jsxs("div",{className:"relative","data-source-loc":"weekly_chores_household_hub.tsx:5297:37","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Sr(Lt==="NEW_CHORE"?null:"NEW_CHORE"),className:"w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5297:63","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5297:423","data-source-comp":"App",children:Je.targetDay||"Select days..."}),r.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${Lt==="NEW_CHORE"?"rotate-180 text-indigo-600":""}`})]}),Lt==="NEW_CHORE"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Sr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5297:719","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5297:804","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5297:929","data-source-comp":"App",children:"Select Day(s)"}),$r.map(s=>{const i=Je.selectedTargetDays||an(Je.targetDay).selectedDays,c=i.includes(s);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5297:1268","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:c,onChange:()=>{const m=new Set(i);m.has(s)?m.delete(s):m.add(s);const p=$r.filter(d=>m.has(d)),h=Ar(p,!!Je.customTargetEnabled,Je.customTargetText||"");Bt(d=>({...d,selectedTargetDays:p,targetDay:h}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5297:1408","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${c?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5297:1962","data-source-comp":"App",children:s})]},s)}),r.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5297:2093","data-source-comp":"App",children:[r.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5297:2170","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:!!Je.customTargetEnabled,onChange:s=>{const i=s.target.checked,c=Je.selectedTargetDays||an(Je.targetDay).selectedDays,m=Ar(c,i,Je.customTargetText||"");Bt(p=>({...p,customTargetEnabled:i,targetDay:m}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5297:2242","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${Je.customTargetEnabled?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5297:2800","data-source-comp":"App",children:"Custom"})]}),r.jsx("input",{type:"text",value:Je.customTargetText||"",onChange:s=>{const i=s.target.value,c=Je.selectedTargetDays||[],m=Ar(c,!0,i);Bt(p=>({...p,customTargetEnabled:!0,customTargetText:i,targetDay:m}))},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5297:2948","data-source-comp":"App"})]})]})]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5297:3539","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5297:3544","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Je.rotationGroup==="All Non-Casual"?"Non-Casual":Je.rotationGroup,onChange:s=>Bt(i=>({...i,rotationGroup:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5297:3621","data-source-comp":"App",children:[r.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5302:174","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5302:216","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5302:262","data-source-comp":"App",children:"Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5302:296","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5302:336","data-source-comp":"App",children:"All"})]}),r.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5302:379","data-source-comp":"App",children:y.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5302:440","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))})]})]}),r.jsxs("div",{className:"md:col-span-3","data-source-loc":"weekly_chores_household_hub.tsx:5302:539","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5302:570","data-source-comp":"App",children:"Operational Notes / Routine"}),r.jsx("input",{type:"text",value:Je.notes,onChange:s=>Bt(i=>({...i,notes:s.target.value})),placeholder:"Instructions, supplies, details or timing notes...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5302:660","data-source-comp":"App"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2 pt-2 border-t border-indigo-200","data-source-loc":"weekly_chores_household_hub.tsx:5307:238","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>fo(!1),className:"px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition","data-source-loc":"weekly_chores_household_hub.tsx:5307:310","data-source-comp":"App",children:"Cancel"}),r.jsxs("button",{type:"button",onClick:()=>Pn({...Je,rotationGroup:Je.rotationGroup==="All Non-Casual"?"Non-Casual":Je.rotationGroup}),disabled:!Je.task.trim(),className:"px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5307:493","data-source-comp":"App",children:[r.jsx(gs,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5307:924","data-source-comp":"App",children:"Add Chore to Master List"})]})]})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5307:983","data-source-comp":"App",children:[r.jsxs("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5307:1038","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5307:1106","data-source-comp":"App",children:"Total Template Chores"}),r.jsxs("div",{className:"text-xl font-bold text-slate-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5307:1220","data-source-comp":"App",children:[we.length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5307:1317","data-source-comp":"App",children:"All registered tasks"})]}),r.jsxs("div",{className:"p-3 bg-blue-50/70 rounded-xl border border-blue-200","data-source-loc":"weekly_chores_household_hub.tsx:5307:1395","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5307:1464","data-source-comp":"App",children:"Daily Chores"}),r.jsxs("div",{className:"text-xl font-bold text-blue-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5307:1568","data-source-comp":"App",children:[we.filter(s=>s.frequency.toLowerCase().includes("daily")).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-blue-600","data-source-loc":"weekly_chores_household_hub.tsx:5307:1721","data-source-comp":"App",children:"Mon – Sun rotation"})]}),r.jsxs("div",{className:"p-3 bg-purple-50/70 rounded-xl border border-purple-200","data-source-loc":"weekly_chores_household_hub.tsx:5307:1796","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-purple-700 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5307:1869","data-source-comp":"App",children:"Once a Week"}),r.jsxs("div",{className:"text-xl font-bold text-purple-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5307:1974","data-source-comp":"App",children:[we.filter(s=>{const i=(s.frequency||"").toLowerCase();return(i.includes("weekly")||i.includes("once"))&&!i.includes("bi")}).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-purple-600","data-source-loc":"weekly_chores_household_hub.tsx:5307:2208","data-source-comp":"App",children:"Saturday & Sunday deep tasks"})]}),r.jsxs("div",{className:"p-3 bg-amber-50/70 rounded-xl border border-amber-200","data-source-loc":"weekly_chores_household_hub.tsx:5307:2295","data-source-comp":"App",children:[r.jsx("span",{className:"text-[10px] font-bold text-amber-800 uppercase tracking-wider block","data-source-loc":"weekly_chores_household_hub.tsx:5307:2366","data-source-comp":"App",children:"Bi-Weekly Tasks"}),r.jsxs("div",{className:"text-xl font-bold text-amber-900 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5307:2474","data-source-comp":"App",children:[we.filter(s=>s.frequency.toLowerCase().includes("bi-weekly")||s.frequency.toLowerCase().includes("biweekly")).length," Tasks"]}),r.jsx("span",{className:"text-[11px] text-amber-700","data-source-loc":"weekly_chores_household_hub.tsx:5307:2682","data-source-comp":"App",children:"Split Curbside Recycling & Waste"})]})]}),r.jsxs("div",{className:"pt-2 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5307:2778","data-source-comp":"App",children:[r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5307:2810","data-source-comp":"App",children:[r.jsxs("div",{className:"relative flex-1 max-w-md","data-source-loc":"weekly_chores_household_hub.tsx:5307:2891","data-source-comp":"App",children:[r.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search chores by name, category, group, or notes...",value:qr,onChange:s=>Os(s.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5307:3006","data-source-comp":"App"}),qr&&r.jsx("button",{onClick:()=>Os(""),className:"absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5307:3354","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}),r.jsxs("div",{className:"flex items-center gap-1.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5307:3523","data-source-comp":"App",children:[r.jsx("span",{className:"text-slate-500 font-semibold mr-1","data-source-loc":"weekly_chores_household_hub.tsx:5307:3574","data-source-comp":"App",children:"Frequency:"}),r.jsx("button",{onClick:()=>Fn("ALL"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Cr==="ALL"?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5307:3643","data-source-comp":"App",children:"All"}),r.jsx("button",{onClick:()=>Fn("Daily"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Cr==="Daily"?"bg-blue-600 text-white":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5307:3887","data-source-comp":"App",children:"Daily"}),r.jsx("button",{onClick:()=>Fn("Once a Week"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Cr==="Once a Week"?"bg-purple-600 text-white":"bg-purple-50 text-purple-700 hover:bg-purple-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5307:4132","data-source-comp":"App",children:"Weekly"}),r.jsx("button",{onClick:()=>Fn("Bi-Weekly"),className:`px-2.5 py-1 rounded-md font-semibold transition ${Cr==="Bi-Weekly"?"bg-amber-600 text-white":"bg-amber-50 text-amber-800 hover:bg-amber-100"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5307:4398","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5307:4671","data-source-comp":"App",children:[r.jsx("span",{className:"text-slate-400 font-semibold mr-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5307:4743","data-source-comp":"App",children:"Category:"}),r.jsxs("button",{onClick:()=>Is("ALL"),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${tt==="ALL"?"bg-slate-800 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5307:4820","data-source-comp":"App",children:["All Categories (",we.length,")"]}),An.map(s=>{const i=we.filter(c=>c.category.toLowerCase()===s.name.toLowerCase()).length;return r.jsxs("button",{onClick:()=>Is(s.name),className:`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${tt===s.name?"ring-2 ring-slate-800 shadow-xs":"opacity-85 hover:opacity-100"} ${s.bg} ${s.text} ${s.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5309:20","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5309:339","data-source-comp":"App",children:s.icon}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5309:362","data-source-comp":"App",children:s.name}),r.jsxs("span",{className:"text-[10px] opacity-75","data-source-loc":"weekly_chores_household_hub.tsx:5309:385","data-source-comp":"App",children:["(",i,")"]})]},s.id)})]})]}),r.jsxs("div",{className:"overflow-visible border border-slate-200 rounded-xl shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5310:26","data-source-comp":"App",children:[r.jsxs("table",{className:"w-full text-left text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5310:106","data-source-comp":"App",children:[r.jsx("thead",{className:"bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider","data-source-loc":"weekly_chores_household_hub.tsx:5310:150","data-source-comp":"App",children:r.jsxs("tr",{"data-source-loc":"weekly_chores_household_hub.tsx:5310:273","data-source-comp":"App",children:[r.jsx("th",{className:"p-3 w-10 text-center","data-source-loc":"weekly_chores_household_hub.tsx:5310:277","data-source-comp":"App",children:"#"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5310:320","data-source-comp":"App",children:"Chore / Task"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5310:357","data-source-comp":"App",children:"Category"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5310:390","data-source-comp":"App",children:"Frequency"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5310:424","data-source-comp":"App",children:"Target Day(s)"}),r.jsx("th",{className:"p-3","data-source-loc":"weekly_chores_household_hub.tsx:5310:462","data-source-comp":"App",children:"Rotation Group"}),r.jsx("th",{className:"p-3 text-right","data-source-loc":"weekly_chores_household_hub.tsx:5310:501","data-source-comp":"App",children:"Actions"})]})}),r.jsx("tbody",{"data-source-loc":"weekly_chores_household_hub.tsx:5310:557","data-source-comp":"App",children:ln.map((s,i)=>{const c=Ws===s.index_,m=An.find(R=>R.name.toLowerCase()===(s.category||"").toLowerCase())||An[3],p=c&&(We!=null&&We.category)&&An.find(R=>R.name.toLowerCase()===We.category.toLowerCase())||m,h=(s.frequency||"").toLowerCase().includes("bi")?"Bi-Weekly":(s.frequency||"").toLowerCase().includes("once")||(s.frequency||"").toLowerCase().includes("weekly")?"Once a Week":"Daily",d=c&&(We!=null&&We.frequency)?We.frequency:h,f=s.targetDay||(h==="Daily"?"Mon – Sun":h==="Bi-Weekly"?"Thursday Evening":"Saturday"),x=c&&(We==null?void 0:We.targetDay)!==void 0?We.targetDay:f,C=an(x),D=c&&Array.isArray(We==null?void 0:We.selectedTargetDays)?We.selectedTargetDays:C.selectedDays,T=c&&(We==null?void 0:We.customTargetEnabled)!==void 0?!!We.customTargetEnabled:C.customEnabled,b=c&&(We==null?void 0:We.customTargetText)!==void 0?We.customTargetText:C.customText,N=c&&Lt===s.index_,O=s.rotationGroup||"Non-Casual",U=c&&(We!=null&&We.rotationGroup)?We.rotationGroup:O,W=()=>{const R=((We==null?void 0:We.task)||"").trim()||s.task,Z=((We==null?void 0:We.notes)||"").trim(),ne=Ar(D,T,b);Sr(null),ja(s.index_,{oldTask:s.task,task:R,category:p.name,frequency:d,targetDay:ne,rotationGroup:U,notes:Z})};return r.jsxs(ao.Fragment,{children:[r.jsxs("tr",{className:`transition ${i>0?"border-t border-slate-200":""} ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5348:75","data-source-comp":"App",children:[r.jsx("td",{className:"px-3 pt-3 pb-1.5 text-center align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5348:208","data-source-comp":"App",children:r.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]","data-source-loc":"weekly_chores_household_hub.tsx:5348:266","data-source-comp":"App",children:i+1})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[200px] align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5348:416","data-source-comp":"App",children:c?r.jsx("input",{type:"text",value:(We==null?void 0:We.task)||"",onChange:R=>Rt(Z=>({...Z,task:R.target.value})),onKeyDown:R=>{R.key==="Enter"&&W(),R.key==="Escape"&&(Sr(null),Nr(null),Rt(null))},className:"w-full px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5348:518","data-source-comp":"App"}):r.jsx("span",{className:"font-bold text-slate-900 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5348:1055","data-source-comp":"App",children:s.task})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5348:1133","data-source-comp":"App",children:c?r.jsx("select",{value:p.name,onChange:R=>Rt(Z=>({...Z,category:R.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${p.bg} ${p.text} ${p.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5348:1192","data-source-comp":"App",children:An.map(R=>r.jsxs("option",{value:R.name,"data-source-loc":"weekly_chores_household_hub.tsx:5348:1545","data-source-comp":"App",children:[R.icon," ",R.name]},R.id))}):r.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${m.bg} ${m.text} ${m.border}`,"data-source-loc":"weekly_chores_household_hub.tsx:5348:1623","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5348:1780","data-source-comp":"App",children:m.icon}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5348:1809","data-source-comp":"App",children:m.name})]})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5348:1851","data-source-comp":"App",children:c?r.jsxs("select",{value:d,onChange:R=>{const Z=R.target.value,ne=Z==="Daily"?"Mon – Sun":Z==="Bi-Weekly"?"Thursday Evening":x==="Mon – Sun"?"Saturday":x,Re=an(ne);Rt(Pe=>({...Pe,frequency:Z,targetDay:ne,selectedTargetDays:Re.selectedDays,customTargetEnabled:Re.customEnabled,customTargetText:Re.customText}))},className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${d==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":d==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5348:1910","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5360:354","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5360:390","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5360:438","data-source-comp":"App",children:"Bi-Weekly"})]}):r.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${h==="Bi-Weekly"?"bg-amber-50 text-amber-800 border-amber-200":h==="Daily"?"bg-blue-50 text-blue-700 border-blue-200":"bg-purple-50 text-purple-700 border-purple-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5360:494","data-source-comp":"App",children:h})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle relative","data-source-loc":"weekly_chores_household_hub.tsx:5360:806","data-source-comp":"App",children:c?r.jsxs(r.Fragment,{children:[r.jsxs("button",{type:"button",onClick:()=>Sr(N?null:s.index_),className:"min-w-[155px] flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-white text-slate-800 border border-indigo-300 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5360:876","data-source-comp":"App",children:[r.jsx("span",{className:"truncate","data-source-loc":"weekly_chores_household_hub.tsx:5360:1232","data-source-comp":"App",children:Ar(D,T,b)}),r.jsx(ld,{className:`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${N?"rotate-180 text-indigo-600":""}`})]}),N&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fixed inset-0 z-20",onClick:()=>Sr(null),"data-source-loc":"weekly_chores_household_hub.tsx:5360:1516","data-source-comp":"App"}),r.jsxs("div",{className:"absolute left-3 top-full mt-1 z-30 w-56 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1","data-source-loc":"weekly_chores_household_hub.tsx:5360:1601","data-source-comp":"App",children:[r.jsx("div",{className:"px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100","data-source-loc":"weekly_chores_household_hub.tsx:5360:1726","data-source-comp":"App",children:"Target Day(s)"}),$r.map(R=>{const Z=D.includes(R);return r.jsxs("label",{className:"flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5362:22","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:Z,onChange:()=>{const ne=new Set(D);ne.has(R)?ne.delete(R):ne.add(R);const Re=$r.filter(it=>ne.has(it)),Pe=Ar(Re,T,b);Rt(it=>({...it,selectedTargetDays:Re,targetDay:Pe}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5362:162","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${Z?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5373:122","data-source-comp":"App",children:R})]},R)}),r.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1","data-source-loc":"weekly_chores_household_hub.tsx:5374:16","data-source-comp":"App",children:[r.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none","data-source-loc":"weekly_chores_household_hub.tsx:5374:93","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:T,onChange:R=>{const Z=R.target.checked,ne=Ar(D,Z,b);Rt(Re=>({...Re,customTargetEnabled:Z,targetDay:ne}))},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5374:165","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${T?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5382:120","data-source-comp":"App",children:"Custom"})]}),r.jsx("input",{type:"text",value:b,onChange:R=>{const Z=R.target.value,ne=Ar(D,!0,Z);Rt(Re=>({...Re,customTargetEnabled:!0,customTargetText:Z,targetDay:ne}))},onKeyDown:R=>{R.key==="Enter"&&Sr(null)},placeholder:"e.g. Thursday Evening...",className:"w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5382:252","data-source-comp":"App"})]})]})]})]}):r.jsx("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5391:327","data-source-comp":"App",children:f})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5391:502","data-source-comp":"App",children:c?r.jsxs("select",{value:U,onChange:R=>Rt(Z=>({...Z,rotationGroup:R.target.value})),className:`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${U==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":U==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":U==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":U==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5391:561","data-source-comp":"App",children:[r.jsxs("optgroup",{label:"Special Rotation Groups","data-source-loc":"weekly_chores_household_hub.tsx:5391:1181","data-source-comp":"App",children:[r.jsx("option",{value:"Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5391:1223","data-source-comp":"App",children:"Non-Casual"}),r.jsx("option",{value:"Kids","data-source-loc":"weekly_chores_household_hub.tsx:5391:1269","data-source-comp":"App",children:"Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5391:1303","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"All","data-source-loc":"weekly_chores_household_hub.tsx:5391:1343","data-source-comp":"App",children:"All"})]}),r.jsx("optgroup",{label:"Individual Members","data-source-loc":"weekly_chores_household_hub.tsx:5391:1386","data-source-comp":"App",children:y.map(R=>r.jsx("option",{value:R.name,"data-source-loc":"weekly_chores_household_hub.tsx:5391:1447","data-source-comp":"App",children:R.name},R.id))})]}):r.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${O==="Non-Casual"?"bg-purple-50 text-purple-800 border-purple-200":O==="Kids"?"bg-indigo-50 text-indigo-800 border-indigo-200":O==="Parents"?"bg-amber-100 text-amber-900 border-amber-300":O==="All"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-sky-50 text-sky-800 border-sky-200"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5391:1523","data-source-comp":"App",children:O})}),r.jsx("td",{className:"px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle","data-source-loc":"weekly_chores_household_hub.tsx:5391:1987","data-source-comp":"App",children:r.jsxs("div",{className:"inline-flex items-center justify-end gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5391:2062","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>Vr(s,"up"),disabled:i===0,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore up","data-source-loc":"weekly_chores_household_hub.tsx:5391:2122","data-source-comp":"App",children:r.jsx(Nu,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>Vr(s,"down"),disabled:i===ln.length-1,className:"p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer",title:"Move chore down","data-source-loc":"weekly_chores_household_hub.tsx:5391:2404","data-source-comp":"App",children:r.jsx(Cu,{className:"w-3.5 h-3.5"})}),c?r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:W,className:"p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer",title:"Save changes","data-source-loc":"weekly_chores_household_hub.tsx:5391:2737","data-source-comp":"App",children:r.jsx(ad,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>{Sr(null),Nr(null),Rt(null)},className:"p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer",title:"Cancel editing","data-source-loc":"weekly_chores_household_hub.tsx:5391:2967","data-source-comp":"App",children:r.jsx(Gt,{className:"w-3.5 h-3.5"})})]}):r.jsx("button",{type:"button",onClick:()=>{const R=an(f);Sr(null),Nr(s.index_),Rt({task:s.task||"",category:m.name,frequency:h,targetDay:f,selectedTargetDays:R.selectedDays,customTargetEnabled:R.customEnabled,customTargetText:R.customText,rotationGroup:O,notes:s.notes||""})},className:"p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer",title:`Edit ${s.task}`,"data-source-loc":"weekly_chores_household_hub.tsx:5391:3275","data-source-comp":"App",children:r.jsx(Wo,{className:"w-3.5 h-3.5"})}),r.jsx("button",{type:"button",onClick:()=>qt(s.index_,s.task),className:"p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer",title:`Remove "${s.task}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5406:195","data-source-comp":"App",children:r.jsx(so,{className:"w-3.5 h-3.5"})})]})})]}),r.jsxs("tr",{className:`transition ${c?"bg-indigo-50/50":"hover:bg-slate-50/70"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5406:472","data-source-comp":"App",children:[r.jsx("td",{className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5406:559","data-source-comp":"App"}),r.jsx("td",{colSpan:6,className:"px-3 pb-3 pt-0","data-source-loc":"weekly_chores_household_hub.tsx:5406:592","data-source-comp":"App",children:c?r.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-300 shadow-2xs focus-within:ring-2 focus-within:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5406:648","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-[11px] text-indigo-800 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5406:806","data-source-comp":"App",children:"Instructions / Notes:"}),r.jsx("input",{type:"text",value:(We==null?void 0:We.notes)||"",onChange:R=>Rt(Z=>({...Z,notes:R.target.value})),onKeyDown:R=>{R.key==="Enter"&&W(),R.key==="Escape"&&(Nr(null),Rt(null))},placeholder:"Add operational instructions or routine notes...",className:"w-full text-xs text-slate-800 bg-transparent focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5406:899","data-source-comp":"App"})]}):r.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5406:1380","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5406:1502","data-source-comp":"App",children:"Instructions / Notes:"})," ",s.notes||r.jsx("span",{className:"italic text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5406:1591","data-source-comp":"App",children:"No instructions"})]})})]})]},`${s.index_||s.task}-${i}`)})})]}),ln.length===0&&r.jsxs("div",{className:"p-8 text-center bg-white text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5407:68","data-source-comp":"App",children:[r.jsx(Nl,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),r.jsx("p",{className:"font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5407:185","data-source-comp":"App",children:"No chores match the current filters"}),we.length===0?r.jsx("button",{onClick:()=>fo(!0),className:"mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5407:285","data-source-comp":"App",children:"Add First Chore"}):r.jsx("button",{onClick:()=>{Is("ALL"),Fn("ALL"),Os("")},className:"mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg","data-source-loc":"weekly_chores_household_hub.tsx:5407:446","data-source-comp":"App",children:"Reset Filters"})]})]})]})]})})]}),Mt&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5407:751","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5407:857","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5407:989","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5407:1068","data-source-comp":"App",children:[r.jsx("span",{className:"text-xs uppercase tracking-wider text-slate-400 font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5407:1073","data-source-comp":"App",children:"Day Schedule"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5407:1172","data-source-comp":"App",children:(()=>{const s=Tt(Mt);return s?new Date(s.year,s.month,s.day).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}):Mt})()})]}),r.jsx("button",{onClick:()=>nn(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5417:27","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5417:204","data-source-comp":"App",children:[r.jsxs("span",{className:"text-slate-600 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5417:305","data-source-comp":"App",children:[me.filter(s=>{var i,c;return(c=(i=pt[Mt])==null?void 0:i[s.index_])==null?void 0:c.done}).length," of"," ",me.length," completed"]}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5420:72","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>{me.forEach(s=>{Ur(Mt,s.index_,{done:!0})})},className:"px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5420:100","data-source-comp":"App",children:"Mark All Done"}),r.jsx("button",{onClick:()=>{me.forEach(s=>{Ur(Mt,s.index_,{done:!1})})},className:"px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition","data-source-loc":"weekly_chores_household_hub.tsx:5426:142","data-source-comp":"App",children:"Reset All"})]})]}),r.jsx("div",{className:"p-4 overflow-y-auto space-y-2 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5432:144","data-source-comp":"App",children:me.map(s=>{var i,c,m,p,h;const d=sr(Mt,s.index_),f=Hr(s),x=Tt(Mt),C=x?(new Date(x.year,x.month,x.day).getDay()+6)%7:0,D=s.task||((i=s.row)==null?void 0:i[0])||"",T=D.toLowerCase(),b=T.includes("deep clean")||T.includes("feeding station")?C===6:T.includes("recycling")?C===3&&x&&Et("recycling",x.year,x.month,x.day):T.includes("waste")?C===3&&x&&Et("waste",x.year,x.month,x.day):f.frequency==="daily"?!0:f.frequency==="weekly"?C===f.dayOfWeek:f.frequency==="biweekly"?C===f.dayOfWeek&&x&&Et(D,x.year,x.month,x.day):!1;return r.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col gap-2 transition ${d.done?"bg-emerald-50/60 border-emerald-200":f.frequency==="weekly"&&b?"bg-purple-50/60 border-purple-200":"bg-white border-slate-200 hover:border-slate-300"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5455:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5455:309","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5455:366","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>Ur(Mt,s.index_,{done:!d.done}),className:"text-slate-400 hover:text-emerald-600 focus:outline-none","data-source-loc":"weekly_chores_household_hub.tsx:5455:424","data-source-comp":"App",children:d.done?r.jsx(ud,{className:"w-5 h-5 text-emerald-600"}):r.jsx(Tu,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex items-center gap-1.5 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5457:199","data-source-comp":"App",children:[r.jsx("span",{className:`text-xs font-semibold truncate ${d.done?"line-through text-slate-500":"text-slate-800"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5457:250","data-source-comp":"App",children:s.task||s.row[0]}),f.frequency==="weekly"&&r.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${b?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-500"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5457:428","data-source-comp":"App",children:b?"1x/wk (Today)":`1x/wk (${(c=Ut[f.dayOfWeek])==null?void 0:c.short})`})]})]}),cr(s.task||s.row[0])?r.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded border shrink-0",style:{backgroundColor:((m=Ce(cr(s.task||s.row[0])))==null?void 0:m.bg)||"#FCE7F3",color:((p=Ce(cr(s.task||s.row[0])))==null?void 0:p.text)||"#BE185D",borderColor:(((h=Ce(cr(s.task||s.row[0])))==null?void 0:h.color)||"#ec4899")+"50"},"data-source-loc":"weekly_chores_household_hub.tsx:5457:805","data-source-comp":"App",children:cr(s.task||s.row[0])}):en(s.task||s.row[0])?r.jsx("div",{className:"text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5461:110","data-source-comp":"App",children:"Each Child"}):r.jsxs("select",{value:d.who,onChange:N=>Ur(Mt,s.index_,{who:N.target.value}),className:"text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs",style:{color:d.who?"#0f172a":"#334155"},"data-source-loc":"weekly_chores_household_hub.tsx:5461:244","data-source-comp":"App",children:[r.jsx("option",{value:"",style:{color:"#64748b",backgroundColor:"#FFFFFF"},"data-source-loc":"weekly_chores_household_hub.tsx:5465:16","data-source-comp":"App",children:"Unassigned"}),r.jsx("optgroup",{label:"Full-Time Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5468:35","data-source-comp":"App",children:y.filter(N=>N.type==="regular").map(N=>r.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5472:74","data-source-comp":"App",children:[N.name,N.role?` (${N.role})`:""]},N.id))}),r.jsx("optgroup",{label:"Bi-Weekly Occupants",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5476:76","data-source-comp":"App",children:y.filter(N=>N.type==="biweekly").map(N=>{const O=Tt(Mt),U=O?lo(O.year,O.month,O.day):null,W=U!=null&&U.isArrivalDay?" (Arrives 5 PM)":U!=null&&U.isDepartureDay?" (Leaves 5 PM)":U!=null&&U.isPresent?" (Here)":" (Away)";return r.jsxs("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5484:22","data-source-comp":"App",children:[N.name,W]},N.id)})}),r.jsx("optgroup",{label:"Casual Assignees (Lesser Scale)",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5489:27","data-source-comp":"App",children:y.filter(N=>N.type==="casual").map(N=>r.jsx("option",{value:N.name,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5493:73","data-source-comp":"App",children:N.name},N.id))}),r.jsxs("optgroup",{label:"Special Groups",style:{color:"#0f172a",backgroundColor:"#F1F5F9",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5497:46","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual",style:{color:"#4338CA",backgroundColor:"#FFFFFF",fontWeight:"bold"},"data-source-loc":"weekly_chores_household_hub.tsx:5501:16","data-source-comp":"App",children:"All Non-Casual"}),r.jsx("option",{value:"Each Child",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5505:39","data-source-comp":"App",children:"Each Child"}),r.jsx("option",{value:"All Kids",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5509:35","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Thom / Meghan",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5513:33","data-source-comp":"App",children:"Thom / Meghan"}),r.jsx("option",{value:"Parents",style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5517:38","data-source-comp":"App",children:"Parents"})]}),d.who&&!y.some(N=>N.name===d.who)&&!["All Non-Casual","Each Child","All Kids","Thom / Meghan","Parents"].includes(d.who)&&r.jsx("option",{value:d.who,style:{color:"#0f172a",backgroundColor:"#FFFFFF",fontWeight:"600"},"data-source-loc":"weekly_chores_household_hub.tsx:5521:207","data-source-comp":"App",children:d.who})]})]}),en(s.task||s.row[0])&&!cr(s.task||s.row[0])&&r.jsxs("div",{className:"bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1","data-source-loc":"weekly_chores_household_hub.tsx:5525:144","data-source-comp":"App",children:[r.jsxs("div",{className:"text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5525:218","data-source-comp":"App",children:[r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5525:312","data-source-comp":"App",children:"Individual Bedrooms to Clean:"}),r.jsx("span",{className:"text-[10px] text-pink-600 font-normal","data-source-loc":"weekly_chores_household_hub.tsx:5525:354","data-source-comp":"App",children:"Each child cleans own space"})]}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5525:450","data-source-comp":"App",children:zr(Mt).map(N=>{var O;const U=!!((O=d.kidsDone)!=null&&O[N]),W=Ce(N);return r.jsxs("button",{type:"button",onClick:()=>wo(Mt,s.index_,N),className:`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${U?"bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through":"bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5529:22","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-1.5 truncate","data-source-loc":"weekly_chores_household_hub.tsx:5529:379","data-source-comp":"App",children:[r.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(W==null?void 0:W.color)||"#ec4899"},"data-source-loc":"weekly_chores_household_hub.tsx:5529:431","data-source-comp":"App"}),r.jsxs("span",{className:"font-semibold truncate","data-source-loc":"weekly_chores_household_hub.tsx:5531:20","data-source-comp":"App",children:[N,"'s Room"]})]}),r.jsx("span",{className:"font-bold ml-1","data-source-loc":"weekly_chores_household_hub.tsx:5531:90","data-source-comp":"App",children:U?"✓":"○"})]},N)})})]})]},s.index_)})}),r.jsx("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end","data-source-loc":"weekly_chores_household_hub.tsx:5533:20","data-source-comp":"App",children:r.jsx("button",{onClick:()=>nn(null),className:"px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5533:96","data-source-comp":"App",children:"Done"})})]})}),ga&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5533:309","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5533:415","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5533:520","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5533:630","data-source-comp":"App",children:[r.jsx(ws,{className:"w-5 h-5 text-amber-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5533:718","data-source-comp":"App",children:"Auto-Assign Monthly Template"})]}),r.jsx("button",{onClick:()=>co(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5533:793","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5533:974","data-source-comp":"App",children:[r.jsxs("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5533:1013","data-source-comp":"App",children:["Distribute daily tasks evenly across household occupants so"," ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5533:1107","data-source-comp":"App",children:"everyone has a chore on each day"})," instead of one person handling all tasks, for"," ",r.jsxs("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5533:1211","data-source-comp":"App",children:[yn[st]," ",wt]}),"."]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5533:1280","data-source-comp":"App",children:[r.jsx("label",{className:"font-bold text-slate-800 block mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5533:1285","data-source-comp":"App",children:"Full-Time Occupants (Included in Daily Chore Distribution):"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5533:1409","data-source-comp":"App",children:y.filter(s=>s.type==="regular").map(s=>r.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5533:1527","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-indigo-600 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5533:1653","data-source-comp":"App"}),r.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5533:1775","data-source-comp":"App"}),r.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5535:16","data-source-comp":"App",children:s.name}),s.role&&r.jsxs("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5535:87","data-source-comp":"App",children:["(",s.role==="Overseer Supreme"?"Parent":"Kid",")"]})]},s.id))}),r.jsxs("div",{className:"flex items-center justify-between mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5535:208","data-source-comp":"App",children:[r.jsx("label",{className:"font-bold text-pink-800 block","data-source-loc":"weekly_chores_household_hub.tsx:5535:266","data-source-comp":"App",children:"Bi-Weekly Occupants (Active During Stay Weeks Only):"}),r.jsx("span",{className:"text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded","data-source-loc":"weekly_chores_household_hub.tsx:5535:375","data-source-comp":"App",children:"Back Sunday, Oct. 18 @ 5:00 PM"})]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5535:536","data-source-comp":"App",children:y.filter(s=>s.type==="biweekly").map(s=>r.jsxs("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5535:655","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",defaultChecked:!0,id:`assignee-${s.id}`,className:"rounded text-pink-600 focus:ring-pink-500","data-source-loc":"weekly_chores_household_hub.tsx:5535:793","data-source-comp":"App"}),r.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5535:911","data-source-comp":"App"}),r.jsx("span",{className:"font-medium text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5537:16","data-source-comp":"App",children:s.name}),r.jsx("span",{className:"text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold","data-source-loc":"weekly_chores_household_hub.tsx:5537:76","data-source-comp":"App",children:"Bi-weekly only"})]},s.id))}),r.jsxs("div",{className:"p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3","data-source-loc":"weekly_chores_household_hub.tsx:5537:196","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5537:268","data-source-comp":"App",children:[r.jsx("span",{className:"font-bold text-sky-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5537:324","data-source-comp":"App",children:"Casual Members (Manual Add-Ins Only):"}),r.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300","data-source-loc":"weekly_chores_household_hub.tsx:5537:417","data-source-comp":"App",children:"Excluded from Auto-Assign"})]}),r.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5537:565","data-source-comp":"App",children:y.filter(s=>s.type==="casual").map(s=>r.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs","data-source-loc":"weekly_chores_household_hub.tsx:5537:680","data-source-comp":"App",children:[r.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color},"data-source-loc":"weekly_chores_household_hub.tsx:5537:842","data-source-comp":"App"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:16","data-source-comp":"App",children:s.name})]},s.id))}),r.jsx("p",{className:"text-[11px] text-sky-700 mt-2 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5539:52","data-source-comp":"App",children:'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'})]})]}),r.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5539:275","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-pink-600 mt-0.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:436","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5539:442","data-source-comp":"App",children:"Daily Distribution:"})," Each day's tasks are handed out so all available family members (including Thom & Meghan as Overseer Supreme = Parent) share the daily chores evenly. ",qe," are included during stay weeks and skipped on away weeks."]})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5539:735","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>co(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5539:817","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{const s=y.filter(c=>{var m;return c.type==="regular"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name),i=y.filter(c=>{var m;return c.type==="biweekly"&&((m=document.getElementById(`assignee-${c.id}`))==null?void 0:m.checked)}).map(c=>c.name);Ea(s,i)},className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5539:1007","data-source-comp":"App",children:"Distribute Daily Chores"})]})]})}),(wa||Ss)&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5549:231","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5549:337","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5549:469","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5549:548","data-source-comp":"App",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white","data-source-loc":"weekly_chores_household_hub.tsx:5549:589","data-source-comp":"App",children:r.jsx(Nl,{className:"w-4 h-4"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5549:721","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5549:726","data-source-comp":"App",children:"Add / Edit Master Chores"}),r.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5549:791","data-source-comp":"App",children:"Add new tasks, edit existing chores, or remove from the schedule"})]})]}),r.jsx("button",{onClick:()=>{Kr(!1),En(!1),on([]),vr(null)},className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5549:913","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-100/70 p-1","data-source-loc":"weekly_chores_household_hub.tsx:5554:143","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>{ba("add"),vr(null)},className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${hr==="add"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5554:211","data-source-comp":"App",children:[r.jsx(gs,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5557:259","data-source-comp":"App",children:"+ Add New Chore"})]}),r.jsxs("button",{type:"button",onClick:()=>ba("edit"),className:`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${hr==="edit"?"bg-white text-indigo-700 shadow-xs":"text-slate-600 hover:text-slate-900"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5557:296","data-source-comp":"App",children:[r.jsx(Wo,{className:"w-3.5 h-3.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5557:604","data-source-comp":"App",children:["✏️ Edit Chore (",me.length,")"]})]})]}),hr==="add"&&r.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5557:708","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5557:762","data-source-comp":"App",children:[r.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5557:767","data-source-comp":"App",children:["Chore / Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5557:859","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",id:"new-chore-title-input",placeholder:"e.g. Clean oven, sweep patio, sanitize counters...",autoFocus:!0,onKeyDown:s=>{if(s.key==="Enter"){const i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who");_o(s.currentTarget.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:""})}},className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5557:911","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5568:159","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5568:222","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5568:227","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{id:"new-chore-frequency",defaultValue:"daily",onChange:s=>{const i=document.getElementById("day-select-container");i&&(i.style.display=s.target.value==="weekly"?"block":"none")},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5568:299","data-source-comp":"App",children:[r.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5573:143","data-source-comp":"App",children:"Daily (Every Day)"}),r.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5573:191","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5573:234","data-source-comp":"App",children:"Bi-Weekly (Curbside schedule)"})]})]}),r.jsxs("div",{id:"day-select-container",style:{display:"none"},"data-source-loc":"weekly_chores_household_hub.tsx:5573:312","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:14","data-source-comp":"App",children:"Target Day"}),r.jsx("select",{id:"new-chore-day",defaultValue:"5",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:87","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5575:286","data-source-comp":"App",children:["Every ",s.name]},s.name))})]})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5575:367","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:430","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:435","data-source-comp":"App",children:"Category"}),r.jsxs("select",{id:"new-chore-category",defaultValue:"Household",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:506","data-source-comp":"App",children:[r.jsx("option",{value:"Household","data-source-loc":"weekly_chores_household_hub.tsx:5575:692","data-source-comp":"App",children:"Household"}),r.jsx("option",{value:"Kitchen","data-source-loc":"weekly_chores_household_hub.tsx:5575:736","data-source-comp":"App",children:"Kitchen"}),r.jsx("option",{value:"Pet Care","data-source-loc":"weekly_chores_household_hub.tsx:5575:776","data-source-comp":"App",children:"Pet Care"}),r.jsx("option",{value:"Bedrooms","data-source-loc":"weekly_chores_household_hub.tsx:5575:818","data-source-comp":"App",children:"Bedrooms"}),r.jsx("option",{value:"Common Areas","data-source-loc":"weekly_chores_household_hub.tsx:5575:860","data-source-comp":"App",children:"Common Areas"}),r.jsx("option",{value:"Administration","data-source-loc":"weekly_chores_household_hub.tsx:5575:910","data-source-comp":"App",children:"Administration"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:979","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:984","data-source-comp":"App",children:"Default Rotation Group"}),r.jsxs("select",{id:"new-chore-who",defaultValue:"All Non-Casual",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:1069","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5575:1255","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"","data-source-loc":"weekly_chores_household_hub.tsx:5575:1348","data-source-comp":"App",children:"Rotating / Unassigned"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5575:1395","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5575:1447","data-source-comp":"App",children:"All Kids (Shared)"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5575:1498","data-source-comp":"App",children:"Each Child (Own Space)"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5575:1556","data-source-comp":"App",children:"Full-Time Roster"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5575:1614","data-source-comp":"App",children:"Parents Only"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5575:1659","data-source-comp":"App",children:"All Occupants"}),y.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5575:1735","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]}),r.jsxs("p",{className:"text-[10px] text-slate-500 mt-1 leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5575:1817","data-source-comp":"App",children:["💡 ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:1891","data-source-comp":"App",children:"All Non-Casual:"})," Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."]})]})]}),r.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5575:2065","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:2239","data-source-comp":"App",children:"Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory."})]})]}),(hr==="edit"||hr==="remove")&&r.jsx("div",{className:"p-5 space-y-4 overflow-y-auto flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:2463","data-source-comp":"App",children:pr!==null?r.jsxs("div",{className:"space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5575:2607","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200","data-source-loc":"weekly_chores_household_hub.tsx:5575:2642","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>vr(null),className:"flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5575:2724","data-source-comp":"App",children:[r.jsx(Du,{className:"w-4 h-4"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:2923","data-source-comp":"App",children:"Back to All Chores"})]}),r.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase","data-source-loc":"weekly_chores_household_hub.tsx:5575:2963","data-source-comp":"App",children:["Editing Item #",me.findIndex(s=>s.index_===pr)+1]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:3117","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:3122","data-source-comp":"App",children:["Chore Title / Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:3207","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:uo,onChange:s=>Po(s.target.value),className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold",placeholder:"Chore task title...",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5575:3259","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5575:3554","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:3609","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:3614","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:mr,onChange:s=>sn(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:3686","data-source-comp":"App",children:[r.jsx("option",{value:"daily","data-source-loc":"weekly_chores_household_hub.tsx:5575:3894","data-source-comp":"App",children:"Daily (Every Day)"}),r.jsx("option",{value:"weekly","data-source-loc":"weekly_chores_household_hub.tsx:5575:3942","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"biweekly","data-source-loc":"weekly_chores_household_hub.tsx:5575:3985","data-source-comp":"App",children:"Bi-Weekly"})]})]}),mr==="weekly"?r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:4073","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:4078","data-source-comp":"App",children:"Target Day"}),r.jsx("select",{value:Ko,onChange:s=>js(Number(s.target.value)),className:"w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:4151","data-source-comp":"App",children:Ut.map((s,i)=>r.jsxs("option",{value:i,"data-source-loc":"weekly_chores_household_hub.tsx:5575:4399","data-source-comp":"App",children:["Every ",s.name]},s.name))})]}):r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:4477","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:4482","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Bo,onChange:s=>qo(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:4559","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5575:4785","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5575:4878","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5575:4930","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5575:4984","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5575:5036","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5575:5078","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5575:5118","data-source-comp":"App",children:"Full-Time Roster"}),y.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5575:5200","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),mr==="weekly"&&r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:5326","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5575:5331","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:Bo,onChange:s=>qo(s.target.value),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5575:5408","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5575:5634","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5575:5727","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5575:5779","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5575:5833","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5575:5885","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5575:5927","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5575:5967","data-source-comp":"App",children:"Full-Time Roster"}),y.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5575:6049","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]}),r.jsxs("div",{className:"p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5575:6138","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsxs("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:6324","data-source-comp":"App",children:[r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:6330","data-source-comp":"App",children:"Rotation Group Clarification:"})," ",r.jsx("em",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:6381","data-source-comp":"App",children:"All Non-Casual"})," covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. ",r.jsx("strong",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:6507","data-source-comp":"App",children:"No equivalent currently exists among the other groups"})," (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."]})]}),r.jsxs("div",{className:"bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5575:6728","data-source-comp":"App",children:[r.jsx("span",{className:"font-semibold text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5575:6830","data-source-comp":"App",children:"List Order Position:"}),r.jsxs("div",{className:"flex items-center gap-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5575:6904","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Vr(pr,"up"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5575:6947","data-source-comp":"App",children:[r.jsx(Nu,{className:"w-3.5 h-3.5"})," Move Up"]}),r.jsxs("button",{type:"button",onClick:()=>Vr(pr,"down"),className:"px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700","data-source-loc":"weekly_chores_household_hub.tsx:5575:7241","data-source-comp":"App",children:[r.jsx(Cu,{className:"w-3.5 h-3.5"})," Move Down"]})]})]}),r.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5575:7553","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5575:7653","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold text-rose-900","data-source-loc":"weekly_chores_household_hub.tsx:5575:7658","data-source-comp":"App",children:"Remove This Chore"}),r.jsx("div",{className:"text-[11px] text-rose-700","data-source-loc":"weekly_chores_household_hub.tsx:5575:7722","data-source-comp":"App",children:"Delete this chore from the schedule and spreadsheet"})]}),r.jsxs("button",{type:"button",onClick:()=>{Bn(pr,uo),vr(null)},className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5575:7828","data-source-comp":"App",children:[r.jsx(so,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5578:190","data-source-comp":"App",children:"Remove Chore"})]})]})]}):r.jsxs("div",{className:"space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5578:298","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5578:325","data-source-comp":"App",children:[r.jsxs("div",{className:"relative flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5578:382","data-source-comp":"App",children:[r.jsx(cd,{className:"w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"}),r.jsx("input",{type:"text",placeholder:"Search or filter chores to edit or remove...",value:As,onChange:s=>Ds(s.target.value),className:"w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5578:490","data-source-comp":"App"})]}),r.jsx("button",{type:"button",onClick:()=>{nr.length===me.length?on([]):on(me.map(s=>s.index_))},className:"text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap","data-source-loc":"weekly_chores_household_hub.tsx:5578:815","data-source-comp":"App",children:nr.length===me.length?"Deselect All":"Select All"})]}),nr.length>0&&r.jsxs("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5584:288","data-source-comp":"App",children:[r.jsxs("span",{className:"font-bold text-rose-800","data-source-loc":"weekly_chores_household_hub.tsx:5584:398","data-source-comp":"App",children:[nr.length," chore(s) selected"]}),r.jsxs("button",{type:"button",onClick:Ta,className:"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5584:499","data-source-comp":"App",children:[r.jsx(so,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5584:718","data-source-comp":"App",children:"Remove Selected"})]})]}),r.jsx("div",{className:"divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto","data-source-loc":"weekly_chores_household_hub.tsx:5584:762","data-source-comp":"App",children:me.filter(s=>As?(s.task||s.row[0]||"").toLowerCase().includes(As.toLowerCase()):!0).map((s,i)=>{var c;const m=nr.includes(s.index_),p=Hr(s),h=s.task||s.row[0]||"Chore";return r.jsxs("div",{className:"p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5589:20","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0","data-source-loc":"weekly_chores_household_hub.tsx:5589:136","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:m,onChange:()=>{on(d=>m?d.filter(f=>f!==s.index_):[...d,s.index_])},className:"rounded text-rose-600 focus:ring-rose-500",title:"Select for batch removal","data-source-loc":"weekly_chores_household_hub.tsx:5589:194","data-source-comp":"App"}),r.jsxs("div",{className:"min-w-0 flex-1","data-source-loc":"weekly_chores_household_hub.tsx:5591:105","data-source-comp":"App",children:[r.jsxs("span",{className:"font-semibold text-slate-800 truncate block","data-source-loc":"weekly_chores_household_hub.tsx:5591:137","data-source-comp":"App",children:[i+1,". ",h]}),r.jsx("div",{className:"flex items-center gap-1.5 mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5591:233","data-source-comp":"App",children:r.jsx("span",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5591:283","data-source-comp":"App",children:p.frequency==="weekly"?`Once a week (${(c=Ut[p.dayOfWeek])==null?void 0:c.name})`:"Daily task"})})]})]}),r.jsxs("div",{className:"flex items-center gap-1 shrink-0","data-source-loc":"weekly_chores_household_hub.tsx:5591:481","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>Hs(s),className:"px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition",title:"Edit chore details","data-source-loc":"weekly_chores_household_hub.tsx:5591:531","data-source-comp":"App",children:[r.jsx(Wo,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5591:793","data-source-comp":"App",children:"Edit"})]}),r.jsx("button",{type:"button",onClick:()=>Bn(s.index_,h),className:"p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition",title:`Remove "${h}"`,"data-source-loc":"weekly_chores_household_hub.tsx:5591:819","data-source-comp":"App",children:r.jsx(so,{className:"w-3.5 h-3.5"})})]})]},s.index_)})})]})}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5592:34","data-source-comp":"App",children:[r.jsxs("span",{className:"text-[11px] text-slate-500 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5592:127","data-source-comp":"App",children:[me.length," active master chores"]}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5592:234","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>{Kr(!1),En(!1),on([]),vr(null)},className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5592:262","data-source-comp":"App",children:"Close"}),hr==="add"?r.jsx("button",{type:"button",onClick:()=>{const s=document.getElementById("new-chore-title-input"),i=document.getElementById("new-chore-frequency"),c=document.getElementById("new-chore-day"),m=document.getElementById("new-chore-who"),p=document.getElementById("new-chore-category");s&&s.value.trim()&&_o(s.value,{frequency:i?i.value:"daily",dayOfWeek:c?Number(c.value):5,defaultWho:m?m.value:"All Non-Casual",category:p?p.value:"Household"})},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5597:176","data-source-comp":"App",children:"Add Chore"}):pr!==null?r.jsx("button",{type:"button",onClick:zs,className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5611:181","data-source-comp":"App",children:"Save Changes"}):nr.length>0&&r.jsxs("button",{type:"button",onClick:Ta,className:"px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5611:410","data-source-comp":"App",children:["Remove Selected (",nr.length,")"]})]})]})]})}),_a&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5611:683","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5611:789","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5611:894","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5611:1007","data-source-comp":"App",children:[r.jsx(tp,{className:"w-5 h-5 text-purple-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5611:1096","data-source-comp":"App",children:"Combine Chores"})]}),r.jsx("button",{onClick:()=>ho(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5611:1157","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5611:1335","data-source-comp":"App",children:[r.jsx("p",{className:"text-slate-600","data-source-loc":"weekly_chores_household_hub.tsx:5611:1374","data-source-comp":"App",children:"Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly."}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5611:1544","data-source-comp":"App",children:[r.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5","data-source-loc":"weekly_chores_household_hub.tsx:5611:1549","data-source-comp":"App",children:"Suggested Combinations:"}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5611:1674","data-source-comp":"App",children:[r.jsxs("button",{type:"button",onClick:()=>{me[4]&&me[5]&&(Rn(me[4].index_),Ms(me[5].index_),mo("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)"))},className:"p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5611:1729","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-purple-900 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5617:123","data-source-comp":"App",children:[r.jsx(ws,{className:"w-3 h-3 text-purple-600"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5617:238","data-source-comp":"App",children:"Chores #5 & #6 (Dinner)"})]}),r.jsx("div",{className:"text-[10px] text-purple-700 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5617:280","data-source-comp":"App",children:"Dinner Dishes + Put away food"})]}),r.jsxs("button",{type:"button",onClick:()=>{me[0]&&me[1]&&(Rn(me[0].index_),Ms(me[1].index_),mo("Tidy bedroom & vacuum floors, bring laundry downstairs"))},className:"p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition","data-source-loc":"weekly_chores_household_hub.tsx:5617:385","data-source-comp":"App",children:[r.jsxs("div",{className:"font-bold text-slate-800 flex items-center gap-1","data-source-loc":"weekly_chores_household_hub.tsx:5623:117","data-source-comp":"App",children:[r.jsx(ws,{className:"w-3 h-3 text-slate-500"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5623:230","data-source-comp":"App",children:"Rows 5 & 6 (Bedroom)"})]}),r.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5","data-source-loc":"weekly_chores_household_hub.tsx:5623:269","data-source-comp":"App",children:"Tidy up bedroom + Vacuum floors"})]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5623:387","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5623:392","data-source-comp":"App",children:"Primary Chore (Retains Position):"}),r.jsx("select",{value:Kt??"",onChange:s=>{const i=Number(s.target.value);Rn(i);const c=me.find(p=>p.index_===i),m=me.find(p=>p.index_===fr);c&&m&&mo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5623:488","data-source-comp":"App",children:me.map((s,i)=>r.jsxs("option",{value:s.index_,"data-source-loc":"weekly_chores_household_hub.tsx:5631:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]]},s.index_))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5631:293","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5631:298","data-source-comp":"App",children:"Chore to Merge In & Remove:"}),r.jsx("select",{value:fr??"",onChange:s=>{const i=Number(s.target.value);Ms(i);const c=me.find(p=>p.index_===Kt),m=me.find(p=>p.index_===i);c&&m&&mo(`${c.row[1]} & ${m.row[1]}`)},className:"w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500","data-source-loc":"weekly_chores_household_hub.tsx:5631:388","data-source-comp":"App",children:me.map((s,i)=>r.jsxs("option",{value:s.index_,disabled:s.index_===Kt,"data-source-loc":"weekly_chores_household_hub.tsx:5639:198","data-source-comp":"App",children:["#",i+1,": ",s.row[1]," ",s.index_===Kt?"(Cannot merge into itself)":""]},s.index_))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5639:404","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5639:409","data-source-comp":"App",children:"New Combined Chore Title:"}),r.jsx("input",{type:"text",value:ka,onChange:s=>mo(s.target.value),placeholder:"Enter name for the combined chore...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5639:497","data-source-comp":"App"})]}),r.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5639:807","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-purple-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5639:990","data-source-comp":"App",children:"The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5639:1163","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>ho(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5639:1245","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{Kt!==null&&fr!==null&&Kt!==fr&&Vo(Kt,fr,ka)},disabled:Kt===fr||!Kt||!fr,className:"px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5639:1432","data-source-comp":"App",children:"Merge & Combine Chores"})]})]})}),va&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5643:307","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5643:413","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-indigo-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5643:518","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5643:598","data-source-comp":"App",children:[r.jsx(xa,{className:"w-5 h-5 text-indigo-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5643:684","data-source-comp":"App",children:"Add Household Member"})]}),r.jsx("button",{onClick:()=>Br(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5643:751","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5643:931","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5643:972","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5643:977","data-source-comp":"App",children:["Full Name ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5643:1046","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",id:"new-member-name",placeholder:"e.g. Alex, Jordan...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5643:1098","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5643:1328","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5643:1333","data-source-comp":"App",children:"Role"}),r.jsxs("select",{id:"new-member-role",defaultValue:"Minion",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5643:1400","data-source-comp":"App",children:[r.jsx("option",{value:"Supreme Overlord","data-source-loc":"weekly_chores_household_hub.tsx:5643:1597","data-source-comp":"App",children:"Supreme Overlord (Parent)"}),r.jsx("option",{value:"Minion","data-source-loc":"weekly_chores_household_hub.tsx:5643:1664","data-source-comp":"App",children:"Minion (Kid)"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5643:1723","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5643:1728","data-source-comp":"App",children:"Occupancy"}),r.jsxs("select",{id:"new-member-residency",defaultValue:"Full-Time",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5643:1800","data-source-comp":"App",children:[r.jsx("option",{value:"Full-Time","data-source-loc":"weekly_chores_household_hub.tsx:5643:2005","data-source-comp":"App",children:"Full-Time (Constant Residency)"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5643:2070","data-source-comp":"App",children:"Bi-Weekly (Half-Time Residency)"}),r.jsx("option",{value:"Casual","data-source-loc":"weekly_chores_household_hub.tsx:5643:2136","data-source-comp":"App",children:"Casual (Periodic Residency)"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5643:2210","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5643:2215","data-source-comp":"App",children:"Special Rotation Groups"}),r.jsx("div",{className:"grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50","data-source-loc":"weekly_chores_household_hub.tsx:5643:2301","data-source-comp":"App",children:["Parents","Kids","Non-Casual","All"].map(s=>{const i=Es.includes(s);return r.jsxs("label",{className:"flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition","data-source-loc":"weekly_chores_household_hub.tsx:5645:20","data-source-comp":"App",children:[r.jsx("input",{type:"checkbox",checked:i,onChange:()=>{po(c=>{const m=new Set(c);return m.has(s)?m.delete(s):m.add(s),["Parents","Kids","Non-Casual","All"].filter(p=>m.has(p))})},className:"w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer","data-source-loc":"weekly_chores_household_hub.tsx:5645:195","data-source-comp":"App"}),r.jsx("span",{className:`text-xs ${i?"font-bold text-indigo-950":"font-medium text-slate-700"}`,"data-source-loc":"weekly_chores_household_hub.tsx:5655:120","data-source-comp":"App",children:s})]},s)})})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5656:26","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5656:31","data-source-comp":"App",children:"Active Status"}),r.jsxs("select",{id:"new-member-active",defaultValue:"true",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5656:107","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5656:304","data-source-comp":"App",children:"Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5656:340","data-source-comp":"App",children:"Inactive"})]})]}),r.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5656:394","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-indigo-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5656:577","data-source-comp":"App",children:"Adding this member writes to the Household Hub spreadsheet and immediately links them across all dashboard views."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5656:715","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>Br(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5656:797","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>{const s=document.getElementById("new-member-name"),i=document.getElementById("new-member-role"),c=document.getElementById("new-member-residency"),m=document.getElementById("new-member-active");s&&s.value.trim()&&Ml(s.value,i?i.value:"Minion",c?c.value:"Full-Time",Es.length>0?Es.join(", "):"All",m?m.value==="true":!0)},className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5656:986","data-source-comp":"App",children:"Add to Household Roster"})]})]})}),Ps&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5670:202","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5670:308","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-amber-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5670:413","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5670:492","data-source-comp":"App",children:[r.jsx("span",{className:"text-xl","data-source-loc":"weekly_chores_household_hub.tsx:5670:533","data-source-comp":"App",children:"🐾"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5670:579","data-source-comp":"App",children:"Add Household Pet Member"})]}),r.jsx("button",{onClick:()=>ze(!1),className:"p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5670:650","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-3.5 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5670:827","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5670:868","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5670:873","data-source-comp":"App",children:["Pet Name ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5670:941","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:Yt.name,onChange:s=>dn(i=>({...i,name:s.target.value})),placeholder:"e.g. Buster, Milo...",autoFocus:!0,className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5670:993","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5675:205","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5675:210","data-source-comp":"App",children:"Species"}),r.jsxs("select",{value:Yt.type,onChange:s=>dn(i=>({...i,type:s.target.value})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5675:280","data-source-comp":"App",children:[r.jsx("option",{value:"Dog","data-source-loc":"weekly_chores_household_hub.tsx:5680:161","data-source-comp":"App",children:"Dog 🐕"}),r.jsx("option",{value:"Cat","data-source-loc":"weekly_chores_household_hub.tsx:5680:207","data-source-comp":"App",children:"Cat 🐈"}),r.jsx("option",{value:"Bird","data-source-loc":"weekly_chores_household_hub.tsx:5680:253","data-source-comp":"App",children:"Bird 🐦"}),r.jsx("option",{value:"Fish","data-source-loc":"weekly_chores_household_hub.tsx:5680:301","data-source-comp":"App",children:"Fish 🐟"}),r.jsx("option",{value:"Small Pet","data-source-loc":"weekly_chores_household_hub.tsx:5680:349","data-source-comp":"App",children:"Small Pet 🐾"}),r.jsx("option",{value:"Other","data-source-loc":"weekly_chores_household_hub.tsx:5680:407","data-source-comp":"App",children:"Other 🐾"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5680:472","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5680:477","data-source-comp":"App",children:"Feeding Routine"}),r.jsx("input",{type:"text",value:Yt.routine,onChange:s=>dn(i=>({...i,routine:s.target.value})),placeholder:"e.g. Morning & Evening, Twice daily...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800","data-source-loc":"weekly_chores_household_hub.tsx:5680:555","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5685:213","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5685:218","data-source-comp":"App",children:"Care Responsibilities"}),r.jsx("textarea",{rows:2,value:Yt.care,onChange:s=>dn(i=>({...i,care:s.target.value})),placeholder:"e.g. Feed breakfast & supper, outdoor routine, fresh water bowls...",className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5685:302","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5690:267","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5690:272","data-source-comp":"App",children:"Active Status"}),r.jsxs("select",{value:Yt.active!==!1?"true":"false",onChange:s=>dn(i=>({...i,active:s.target.value==="true"})),className:"w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white","data-source-loc":"weekly_chores_household_hub.tsx:5690:348","data-source-comp":"App",children:[r.jsx("option",{value:"true","data-source-loc":"weekly_chores_household_hub.tsx:5695:161","data-source-comp":"App",children:"Active"}),r.jsx("option",{value:"false","data-source-loc":"weekly_chores_household_hub.tsx:5695:197","data-source-comp":"App",children:"Inactive"})]})]}),r.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5695:251","data-source-comp":"App",children:[r.jsx(ys,{className:"w-4 h-4 shrink-0 text-amber-600 mt-0.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5695:430","data-source-comp":"App",children:"Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab."})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5695:558","data-source-comp":"App",children:[r.jsx("button",{onClick:()=>ze(!1),className:"px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5695:640","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{onClick:()=>Ll(Yt.name,Yt.type,Yt.routine,Yt.care,Yt.active!==!1),disabled:!Yt.name.trim(),className:"px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5695:826","data-source-comp":"App",children:"Add to Household Pets"})]})]})}),J&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5695:1220","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]","data-source-loc":"weekly_chores_household_hub.tsx:5695:1326","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-slate-900 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5695:1458","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2.5","data-source-loc":"weekly_chores_household_hub.tsx:5695:1537","data-source-comp":"App",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs","data-source-loc":"weekly_chores_household_hub.tsx:5695:1580","data-source-comp":"App",children:r.jsx(Wo,{className:"w-4 h-4"})}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5695:1717","data-source-comp":"App",children:[r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5695:1722","data-source-comp":"App",children:"Edit Chore Details"}),r.jsx("p",{className:"text-[11px] text-slate-400","data-source-loc":"weekly_chores_household_hub.tsx:5695:1781","data-source-comp":"App",children:"Update chore name, cadence, rotation group, or notes"})]})]}),r.jsx("button",{onClick:()=>Ee(null),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition","data-source-loc":"weekly_chores_household_hub.tsx:5695:1891","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5695:2075","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5695:2137","data-source-comp":"App",children:[r.jsxs("label",{className:"block font-bold text-slate-800 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5695:2142","data-source-comp":"App",children:["Chore Task Description ",r.jsx("span",{className:"text-rose-500","data-source-loc":"weekly_chores_household_hub.tsx:5695:2224","data-source-comp":"App",children:"*"})]}),r.jsx("input",{type:"text",value:J.task,onChange:s=>Ee(i=>({...i,task:s.target.value})),placeholder:"Chore task description...",className:"w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",autoFocus:!0,"data-source-loc":"weekly_chores_household_hub.tsx:5695:2276","data-source-comp":"App"})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3","data-source-loc":"weekly_chores_household_hub.tsx:5700:221","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5700:276","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5700:281","data-source-comp":"App",children:"Category"}),r.jsx("select",{value:J.category||"Household",onChange:s=>Ee(i=>({...i,category:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5700:352","data-source-comp":"App",children:An.map(s=>r.jsxs("option",{value:s.id,"data-source-loc":"weekly_chores_household_hub.tsx:5705:172","data-source-comp":"App",children:[s.icon," ",s.name]},s.id))})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5705:251","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5705:256","data-source-comp":"App",children:"Frequency"}),r.jsxs("select",{value:J.frequency||"Daily",onChange:s=>{const i=s.target.value;Ee(c=>({...c,frequency:i,targetDay:i==="Daily"?"Mon – Sun":i==="Bi-Weekly"?"Thursday Evening":"Saturday"}))},className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5705:328","data-source-comp":"App",children:[r.jsx("option",{value:"Daily","data-source-loc":"weekly_chores_household_hub.tsx:5714:143","data-source-comp":"App",children:"Daily"}),r.jsx("option",{value:"Once a Week","data-source-loc":"weekly_chores_household_hub.tsx:5714:179","data-source-comp":"App",children:"Once a Week"}),r.jsx("option",{value:"Bi-Weekly","data-source-loc":"weekly_chores_household_hub.tsx:5714:227","data-source-comp":"App",children:"Bi-Weekly"})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5714:286","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5714:291","data-source-comp":"App",children:"Target Day"}),r.jsx("input",{type:"text",value:J.targetDay||"Mon – Sun",onChange:s=>Ee(i=>({...i,targetDay:s.target.value})),placeholder:"e.g. Mon \\u2013 Sun, Saturday, Sunday, Thursday Evening...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5714:364","data-source-comp":"App"})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5719:226","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5719:231","data-source-comp":"App",children:"Rotation Group"}),r.jsxs("select",{value:J.rotationGroup||"All Non-Casual",onChange:s=>Ee(i=>({...i,rotationGroup:s.target.value})),className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500","data-source-loc":"weekly_chores_household_hub.tsx:5719:308","data-source-comp":"App",children:[r.jsx("option",{value:"All Non-Casual","data-source-loc":"weekly_chores_household_hub.tsx:5724:145","data-source-comp":"App",children:"All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)"}),r.jsx("option",{value:"Kids Rotation","data-source-loc":"weekly_chores_household_hub.tsx:5724:238","data-source-comp":"App",children:"Kids Rotation"}),r.jsx("option",{value:"Parents & Kids","data-source-loc":"weekly_chores_household_hub.tsx:5724:290","data-source-comp":"App",children:"Parents & Kids"}),r.jsx("option",{value:"All Occupants","data-source-loc":"weekly_chores_household_hub.tsx:5724:344","data-source-comp":"App",children:"All Occupants"}),r.jsx("option",{value:"All Kids","data-source-loc":"weekly_chores_household_hub.tsx:5724:396","data-source-comp":"App",children:"All Kids"}),r.jsx("option",{value:"Parents","data-source-loc":"weekly_chores_household_hub.tsx:5724:438","data-source-comp":"App",children:"Parents"}),r.jsx("option",{value:"Each Child","data-source-loc":"weekly_chores_household_hub.tsx:5724:478","data-source-comp":"App",children:"Each Child (Own Space)"}),r.jsx("option",{value:"Full-Time Roster","data-source-loc":"weekly_chores_household_hub.tsx:5724:536","data-source-comp":"App",children:"Full-Time Roster"}),y.map(s=>r.jsxs("option",{value:s.name,"data-source-loc":"weekly_chores_household_hub.tsx:5724:618","data-source-comp":"App",children:[s.name," (",s.residency,")"]},s.id))]})]})]}),r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5724:712","data-source-comp":"App",children:[r.jsx("label",{className:"block font-bold text-slate-700 mb-1","data-source-loc":"weekly_chores_household_hub.tsx:5724:717","data-source-comp":"App",children:"Operational Notes / Routine"}),r.jsx("textarea",{rows:2,value:J.notes||"",onChange:s=>Ee(i=>({...i,notes:s.target.value})),placeholder:"Operational details, supplies, or instructions...",className:"w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug","data-source-loc":"weekly_chores_household_hub.tsx:5724:807","data-source-comp":"App"})]}),r.jsxs("div",{className:"pt-2 border-t border-slate-100 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5729:242","data-source-comp":"App",children:[r.jsxs("div",{"data-source-loc":"weekly_chores_household_hub.tsx:5729:324","data-source-comp":"App",children:[r.jsx("div",{className:"font-bold text-rose-900 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5729:329","data-source-comp":"App",children:"Delete this chore"}),r.jsx("div",{className:"text-[10px] text-slate-500","data-source-loc":"weekly_chores_household_hub.tsx:5729:401","data-source-comp":"App",children:"Remove from Printable Weekly Schedule"})]}),r.jsxs("button",{type:"button",onClick:()=>{Kn(J.index_,J.task)},className:"px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition","data-source-loc":"weekly_chores_household_hub.tsx:5729:494","data-source-comp":"App",children:[r.jsx(so,{className:"w-3.5 h-3.5"}),r.jsx("span",{"data-source-loc":"weekly_chores_household_hub.tsx:5731:210","data-source-comp":"App",children:"Delete Chore"})]})]})]}),r.jsxs("div",{className:"p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5731:256","data-source-comp":"App",children:[r.jsx("span",{className:"text-[11px] text-slate-400 font-medium","data-source-loc":"weekly_chores_household_hub.tsx:5731:349","data-source-comp":"App",children:"Real-time schedule update"}),r.jsxs("div",{className:"flex gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5731:438","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>Ee(null),className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5731:466","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{type:"button",onClick:()=>{xn(J.index_,{task:J.task,oldTask:J.originalTask||J.task,category:J.category,frequency:J.frequency,targetDay:J.targetDay,rotationGroup:J.rotationGroup,notes:J.notes,dayOfWeek:J.dayOfWeek})},disabled:!((te=J.task)!=null&&te.trim()),className:"px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40","data-source-loc":"weekly_chores_household_hub.tsx:5731:652","data-source-comp":"App",children:"Save Changes"})]})]})]})}),Qe&&r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4","data-source-loc":"weekly_chores_household_hub.tsx:5742:298","data-source-comp":"App",children:r.jsxs("div",{className:"bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden","data-source-loc":"weekly_chores_household_hub.tsx:5742:404","data-source-comp":"App",children:[r.jsxs("div",{className:"p-4 bg-rose-600 text-white flex items-center justify-between","data-source-loc":"weekly_chores_household_hub.tsx:5742:509","data-source-comp":"App",children:[r.jsxs("div",{className:"flex items-center gap-2","data-source-loc":"weekly_chores_household_hub.tsx:5742:587","data-source-comp":"App",children:[r.jsx(so,{className:"w-5 h-5 text-rose-200"}),r.jsx("h3",{className:"text-base font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5742:672","data-source-comp":"App",children:"Delete Chore"})]}),r.jsx("button",{onClick:()=>ot(null),className:"p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition","data-source-loc":"weekly_chores_household_hub.tsx:5742:731","data-source-comp":"App",children:r.jsx(Gt,{className:"w-5 h-5"})})]}),r.jsxs("div",{className:"p-5 text-xs text-slate-700 space-y-3","data-source-loc":"weekly_chores_household_hub.tsx:5742:911","data-source-comp":"App",children:[r.jsxs("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5742:965","data-source-comp":"App",children:["Are you sure you want to remove ",r.jsxs("strong",{className:"text-slate-900 font-bold","data-source-loc":"weekly_chores_household_hub.tsx:5742:1004","data-source-comp":"App",children:['"',Qe.task,'"']})," from the Printable Weekly Schedule?"]}),r.jsx("div",{className:"p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed","data-source-loc":"weekly_chores_household_hub.tsx:5742:1138","data-source-comp":"App",children:"This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately."})]}),r.jsxs("div",{className:"p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs","data-source-loc":"weekly_chores_household_hub.tsx:5742:1375","data-source-comp":"App",children:[r.jsx("button",{type:"button",onClick:()=>ot(null),className:"px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition","data-source-loc":"weekly_chores_household_hub.tsx:5742:1465","data-source-comp":"App",children:"Cancel"}),r.jsx("button",{type:"button",onClick:()=>{Kn(Qe.index_,Qe.task)},className:"px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition","data-source-loc":"weekly_chores_household_hub.tsx:5742:1641","data-source-comp":"App",children:"Delete Chore"})]})]})})]})}var hp=class extends ao.Component{constructor(w){super(w),this.state={hasError:!1}}static getDerivedStateFromError(w){return{hasError:!0}}componentDidCatch(w,_){window.parent.postMessage({type:"ERROR",payload:{error:w?w.toString():"Unknown rendering error"}},"*")}render(){return this.state.hasError?r.jsx("p",{"data-source-loc":"weekly_chores_household_hub.tsx:5768:37","data-source-comp":"ErrorBoundary",children:"Something went wrong."}):this.props.children}};function pp(){const[w,_]=I.useState(()=>{try{const M=localStorage.getItem(Ns);if(M){const P=JSON.parse(M);if(Array.isArray(P)&&P.length>0)return P}}catch(M){console.warn("Failed to load sheetData from localStorage:",M)}return Dl}),[v,V]=I.useState(!0);I.useEffect(()=>{try{localStorage.setItem(Ns,JSON.stringify(w))}catch(M){console.warn("Failed to persist sheetData to localStorage:",M)}},[w]),I.useEffect(()=>{try{const M=localStorage.getItem(Ns),P=M?JSON.parse(M):w;Array.isArray(P)&&P.length>0&&fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:P})}).catch(()=>{})}catch{}},[]),I.useEffect(()=>{let M=null;const P=be=>{const{type:Le,payload:le}=be.data||{};Le==="SYNC_DATA"&&(M&&(clearInterval(M),M=null),Array.isArray(le)&&le.length>0&&_(le),V(!0))};window.addEventListener("message",P);const q=()=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"CHILD_READY",payload:{version:3}},"*")};q();let re=0;return M=setInterval(()=>{if(re++,re>=50){clearInterval(M),M=null;return}q()},100),()=>{M&&clearInterval(M),window.removeEventListener("message",P)}},[]),I.useEffect(()=>{if(!v)return;const M=performance.now();let P=null;const q=requestAnimationFrame(()=>{P=requestAnimationFrame(()=>{const re=performance.now()-M;window.parent&&window.parent!==window&&window.parent.postMessage({type:"RENDER_COMPLETE",payload:{status:"success",renderDurationMs:re}},"*")})});return()=>{cancelAnimationFrame(q),P&&cancelAnimationFrame(P)}},[w,v]);const K=(M,P,q)=>{_(re=>Array.isArray(re)?re.map((be,Le)=>{if((be.index_!==void 0?be.index_:Le)!==M)return be;const oe=Array.isArray(be.data)?[...be.data]:[],Fe=oe.findIndex(De=>De.index_===P);if(Fe>=0){const De=Array.isArray(oe[Fe].row)?[...oe[Fe].row]:[],J=Math.max(De.length,Array.isArray(q)?q.length:0),Ee=new Array(J).fill(null);for(let Qe=0;Qe<J;Qe++)Ee[Qe]=q&&q[Qe]!==void 0?q[Qe]:De[Qe]!==void 0?De[Qe]:null;oe[Fe]={...oe[Fe],row:Ee}}else{const De=(q||[]).map(J=>J===void 0?null:J);oe.push({index_:P,row:De}),oe.sort((J,Ee)=>J.index_-Ee.index_)}return{...be,data:oe}}):re),window.parent&&window.parent!==window&&window.parent.postMessage({type:"PATCH",payload:{rangeIndex_:M,rowIndex_:P,row:q}},"*")},z=(M,P)=>{_(q=>Array.isArray(q)?q.map((re,be)=>{if((re.index_!==void 0?re.index_:be)!==M)return re;const le=(re.data||[]).filter(oe=>oe.index_!==P);return{...re,data:le}}):q),window.parent&&window.parent!==window&&window.parent.postMessage({type:"DELETE",payload:{rangeIndex_:M,rowIndex_:P}},"*")},Y=(M,P,q)=>{_(re=>Array.isArray(re)?re.map((be,Le)=>{if((be.index_!==void 0?be.index_:Le)!==M)return be;const oe=Array.isArray(be.data)?[...be.data]:[],Fe=(q||[]).map(De=>De===void 0?null:De);if(P!=null){const De=oe.map(J=>J.index_>=P?{...J,index_:J.index_+1}:J);return De.push({index_:P,row:Fe}),De.sort((J,Ee)=>J.index_-Ee.index_),{...be,data:De}}else{const De=oe.reduce((J,Ee)=>Math.max(J,Ee.index_||0),0);return oe.push({index_:De+1,row:Fe}),{...be,data:oe}}}):re),window.parent&&window.parent!==window&&window.parent.postMessage({type:"INSERT",payload:{rangeIndex_:M,rowIndex_:P,row:q}},"*")},de=(M,P,q,re)=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MOVE",payload:{fromRangeIndex_:M,fromRowIndex_:P,toRangeIndex_:q,toRowIndex_:re}},"*")},te=M=>{window.parent&&window.parent!==window?window.parent.postMessage({type:"FOLLOW_LINK",payload:{url:M}},"*"):M&&window.open(M,"_blank","noopener,noreferrer")};return v?r.jsx("div",{id:"app-container",className:"h-full w-full","data-source-loc":"weekly_chores_household_hub.tsx:6003:5","data-source-comp":"AppWrapper",children:r.jsx(hp,{children:r.jsx(up,{data:w,updateItem:K,deleteItem:z,insertItem:Y,moveItem:de,followLink:te})})}):r.jsx("div",{className:"loading","data-source-loc":"weekly_chores_household_hub.tsx:5999:12","data-source-comp":"AppWrapper",children:"Waiting for data..."})}const mp=`// @ts-nocheck\r
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
          })}</div></div><div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm"><h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5"><span>{"\\u{1F43E} House Pets Overview"}</span></h4><div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">{rosterPets.filter(p => p.active !== false).map(pet => <div key={\`\${pet.index_}-\${pet.name}\`} className="p-2.5 rounded-lg border flex items-center gap-2" style={{ backgroundColor: pet.bg, borderColor: pet.border }}><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pet.color }} /><span className="text-base">{pet.icon}</span><div><div className="font-bold" style={{ color: pet.text }}>{pet.name}</div><div className="text-[10px] opacity-80" style={{ color: pet.text }}>{pet.type}</div></div></div>)}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub Master Data</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Monthly Calendar & Printable Weekly Schedule</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex flex-wrap items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Selected Week: "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Kids Week: "}<strong>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong></span><button type="button" onClick={handleSaveAsDefault} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer" title="Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json"><span>💾</span><span>Save as Default</span></button><button type="button" onClick={handleExportConfig} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Download / export current configuration backup file (.json)"><span>⬇️</span><span>Export Config</span></button><label className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Import / restore a configuration file (.json)"><span>⬆️</span><span>Import Config</span><input type="file" accept=".json" onChange={handleImportConfigFile} className="hidden" /></label></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Special Rules & Parameters</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{(() => {\r
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
`,io=mp.split(/\r?\n/),pd=(()=>{const w=io.findIndex((_,v)=>v>37&&_.startsWith("var DAY_STYLES"));return w>0?w:935})();function Al(w){let _="",v=w;for(;v>=0;)_=String.fromCharCode(v%26+65)+_,v=Math.floor(v/26)-1;return _}const md=new Map,xd=new Map;(()=>{let w=-1,_="",v=null,V=!1,K=-1;for(let z=36;z<pd;z++){const Y=io[z]||"",de=Y.match(/"name":\s*"([^"]+)"/);if(de){_=de[1],w=_.toLowerCase().includes("hub")?1:0,v=null,V=!1;continue}const te=Y.match(/"index_":\s*(\d+)/);if(te&&!V){(io[z+1]||"").includes('"name":')||(v=parseInt(te[1],10));continue}if(Y.includes('"row": [')){V=!0,K=0;continue}if(V){if(Y.trim().startsWith("]")){V=!1,K=-1;continue}if(w>=0&&v!==null){const M=z+1,P=Y.trim().replace(/,$/,"");let q=P;try{q=JSON.parse(P)}catch{}const re={tsxLine:M,sheetIndex:w,sheetName:_,rowIndex:v,colIndex:K,value:q};md.set(`${w}:${v}:${K}`,M),xd.set(M,re)}K++}}})();function Fu(w){const _=[],v=(w.innerText||w.textContent||"").trim();if(v.length>=2&&v.length<=140&&!v.includes(`
`))_.push(v);else if(v.includes(`
`))for(const V of v.split(`
`)){const K=V.trim();K.length>=3&&K.length<=120&&_.push(K)}if(_.length===0)return null;for(const V of _){const K=V.replace(/\s+/g," ").trim();if(K.length<2)continue;const z=JSON.stringify(K).toLowerCase();let Y=-1;for(let de=36;de<pd;de++){const te=(io[de]||"").trim().toLowerCase();if(te===z||te===`${z},`){Y=de+1;break}}if(Y===-1&&K.length>=4){const de=K.toLowerCase();for(let te=36;te<pd;te++){const M=(io[te]||"").trim().toLowerCase();if(M.startsWith('"')&&M.includes(de)){Y=te+1;break}}}if(Y!==-1){const de=xd.get(Y),te=de?de.rowIndex:null,M=de?de.colIndex:0,P=de?de.sheetName:"INITIAL_SHEET_DATA",q=P.toLowerCase().includes("hub"),re=q?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",be=te!==null?q?te+2:te+1:1,Le=Al(M+1);return{line:Y,text:(io[Y-1]||"").trim(),rowIndex:te,colIndex:M,colLetter:Le,sectionName:P,csvFile:re,csvLine:be}}}return null}function vs(w,_,v=1,V){const K=()=>{const z=document.createElement("a");z.href=`antigravity-ide://file/c:/Dev%20Projects/Weekly_Chores/Weekly-Chores/${encodeURIComponent(w)}:${_}:${v}`,z.click()};fetch(`/__open-in-vscode?file=${encodeURIComponent(w)}&line=${_}&col=${v}`).then(z=>z.json()).then(z=>{(!z||!z.ok)&&K()}).catch(()=>{K()}),V&&V(`Opened ${w}:${_}`)}function Hu(w,_){const v=`${window.location.origin}/?view=csv-map`,V=window.open(v,"CsvVisualMapWindow","popup=yes,width=1320,height=840,left=80,top=60");if(V){V.focus(),w&&w("Opened CSV Visual Map in a separate window!");return}fetch("/__popout-csv-map").catch(()=>{}),_&&_(),w&&w("Opened CSV Visual Map!")}const Cs=typeof BroadcastChannel<"u"?new BroadcastChannel("chores_csv_map_sync"):null;function zu(w,_,v,V){Cs&&Cs.postMessage({sheetIndex:w,rowIndex:_,colIndex:v,tsxLine:V,updatedAt:Date.now()}),fetch(`/__csv-map-state?sheetIndex=${w}&rowIndex=${_}&colIndex=${v}${V?`&tsxLine=${V}`:""}`).catch(()=>{})}function Gu({isStandalone:w=!1,activeCsvSheetIdx:_,setActiveCsvSheetIdx:v,selectedCellKey:V,setSelectedCellKey:K,onClose:z,onToast:Y}){const de=Dl[_]||Dl[0],te=_===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",M=_===1?12:15;return I.useEffect(()=>{if(!V)return;const P=document.querySelector(`[data-cell-key="${V}"]`);P&&P.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[V,_]),r.jsxs("div",{style:{width:"100%",height:"100%",backgroundColor:"#0F172A",color:"#F8FAFC",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"ui-sans-serif, system-ui, sans-serif"},children:[r.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#1E293B",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[r.jsx("span",{style:{fontWeight:800,fontSize:"13px",color:"#FBBF24"},children:"📊 Live .tsx ↔ .csv Visual Spreadsheet Map"}),r.jsxs("div",{style:{display:"flex",gap:"6px"},children:[r.jsx("button",{type:"button",onClick:()=>v(0),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===0?"1px solid #38BDF8":"1px solid #475569",backgroundColor:_===0?"#0284C7":"#0F172A",color:"#FFFFFF"},children:"Sheet 0: Printable Weekly Schedule (CSV)"}),r.jsx("button",{type:"button",onClick:()=>v(1),style:{padding:"5px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",border:_===1?"1px solid #34D399":"1px solid #475569",backgroundColor:_===1?"#059669":"#0F172A",color:"#FFFFFF"},children:"Sheet 1: Household Hub - Data (CSV)"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"11px",color:"#CBD5E1"},children:[r.jsxs("span",{children:[r.jsx("strong",{children:"Click Cell"})," = Open in ",r.jsx("code",{style:{color:"#38BDF8"},children:".tsx"})," •"," ",r.jsx("strong",{children:"Shift+Click Cell"})," = Open in ",r.jsx("code",{style:{color:"#FBBF24"},children:".csv"})]}),!w&&r.jsx("button",{type:"button",onClick:()=>{Hu(Y),z&&z()},title:"Pop out into a separate standalone window",style:{padding:"4px 10px",borderRadius:"6px",backgroundColor:"#2563EB",color:"#FFFFFF",border:"1px solid #60A5FA",cursor:"pointer",fontWeight:700},children:"↗ Open in Separate Window"}),z&&r.jsx("button",{type:"button",onClick:z,style:{padding:"4px 9px",borderRadius:"6px",backgroundColor:"#334155",color:"#F8FAFC",border:"none",cursor:"pointer",fontWeight:700},children:"✕ Close"})]})]}),V&&(()=>{const[P,q,re]=V.split(":"),be=parseInt(P,10),Le=parseInt(q,10),le=parseInt(re,10),oe=md.get(V),Fe=oe?xd.get(oe):null,De=be===1?"Household Hub - Data (CSV).csv":"Printable Weekly Schedule (CSV).csv",J=be===1?Le+2:Le+1,Ee=Al(le+1);return r.jsxs("div",{style:{padding:"6px 14px",backgroundColor:"#022C22",borderBottom:"1px solid #065F46",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",fontSize:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:[r.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",De," → Line ",J,", Col ",Ee]}),r.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["⚛️ weekly_chores_household_hub.tsx → Line ",oe||"?"," (index_ ",Le,", row[",le,"])"]}),Fe&&r.jsx("span",{style:{color:"#F8FAFC",backgroundColor:"#064E3B",padding:"1px 8px",borderRadius:"4px",fontFamily:"monospace"},children:JSON.stringify(Fe.value)})]}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[oe&&r.jsxs("button",{type:"button",onClick:()=>vs("weekly_chores_household_hub.tsx",oe,1,Y),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#059669",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .tsx Line ",oe]}),r.jsxs("button",{type:"button",onClick:()=>vs(De,J,1,Y),style:{padding:"3px 8px",borderRadius:"5px",backgroundColor:"#D97706",color:"#FFFFFF",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700},children:["Jump to .csv Line ",J]})]})]})})(),r.jsx("div",{style:{flex:1,overflow:"auto",padding:"8px"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{backgroundColor:"#1E293B",position:"sticky",top:0,zIndex:2},children:[r.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#FBBF24",textAlign:"center",minWidth:"72px"},children:"CSV Line"}),r.jsx("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#34D399",textAlign:"center",minWidth:"72px"},children:"TSX index_"}),Array.from({length:M}).map((P,q)=>r.jsxs("th",{style:{border:"1px solid #334155",padding:"6px 8px",color:"#93C5FD",textAlign:"left",minWidth:"125px"},children:["Col ",Al(q+1)," ",r.jsxs("span",{style:{color:"#64748B",fontWeight:400},children:["(row[",q,"])"]})]},q))]})}),r.jsx("tbody",{children:(de.data||[]).map(P=>{const q=P.index_,re=_===1?q+2:q+1;return r.jsxs("tr",{style:{borderBottom:"1px solid #1E293B"},children:[r.jsxs("td",{onClick:()=>vs(te,re,1,Y),title:`Click to open ${te} at Line ${re}`,style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#FDE68A",backgroundColor:"#1E293B",fontWeight:700,cursor:"pointer"},children:["L",re]}),r.jsxs("td",{style:{border:"1px solid #334155",padding:"5px 6px",textAlign:"center",color:"#A7F3D0",backgroundColor:"#0F172A",fontWeight:600},children:["#",q]}),Array.from({length:M}).map((be,Le)=>{const le=P.row?P.row[Le]:null,oe=md.get(`${_}:${q}:${Le}`),Fe=`${_}:${q}:${Le}`,De=V===Fe,J=le==null||le==="";return r.jsx("td",{"data-cell-key":Fe,onClick:Ee=>{K(Fe),zu(_,q,Le,oe),Ee.shiftKey?vs(te,re,1,Y):oe&&vs("weekly_chores_household_hub.tsx",oe,1,Y)},title:`TSX Line ${oe||"?"} • ${te} Line ${re}, Col ${Al(Le+1)}
Click = Open in .tsx | Shift+Click = Open in .csv`,style:{border:De?"2px solid #F59E0B":"1px solid #334155",backgroundColor:De?"rgba(245, 158, 11, 0.28)":J?"#090D16":"#0F172A",color:J?"#334155":"#F8FAFC",padding:"5px 7px",cursor:"pointer",maxWidth:"210px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"4px",alignItems:"baseline"},children:[r.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:J?"·":String(le)}),oe&&r.jsxs("span",{style:{fontSize:"9px",color:De?"#FBBF24":"#475569",flexShrink:0},children:[":",oe]})]})},Le)})]},q)})})]})})]})}function fp(){const[w,_]=I.useState(1),[v,V]=I.useState(null),[K,z]=I.useState(null),Y=I.useRef(0),de=te=>{z(te),setTimeout(()=>z(null),2400)};return I.useEffect(()=>{document.title="📊 CSV Visual Map — Weekly Chores & Household Hub";const te=P=>{const q=P.data;q&&typeof q.sheetIndex=="number"&&q.rowIndex!==null&&q.rowIndex!==void 0&&(Y.current=q.updatedAt||Date.now(),_(q.sheetIndex),V(`${q.sheetIndex}:${q.rowIndex}:${q.colIndex??0}`))};Cs&&Cs.addEventListener("message",te);const M=setInterval(()=>{fetch("/__csv-map-state").then(P=>P.json()).then(P=>{P&&P.updatedAt>Y.current&&P.rowIndex!==null&&P.rowIndex!==void 0&&(Y.current=P.updatedAt,_(P.sheetIndex),V(`${P.sheetIndex}:${P.rowIndex}:${P.colIndex??0}`))}).catch(()=>{})},400);return()=>{Cs&&Cs.removeEventListener("message",te),clearInterval(M)}},[]),r.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[r.jsx(Gu,{isStandalone:!0,activeCsvSheetIdx:w,setActiveCsvSheetIdx:_,selectedCellKey:v,setSelectedCellKey:V,onToast:de}),K&&r.jsxs("div",{style:{position:"fixed",bottom:"18px",right:"18px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"8px 14px",borderRadius:"8px",fontSize:"12px",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.35)",zIndex:9999},children:["✓ ",K]})]})}const Iu="__code_inspector_dock_corner";function xp(){const[w,_]=I.useState(!1),[v,V]=I.useState(!1),[K,z]=I.useState(()=>{try{const ee=localStorage.getItem(Iu);if(ee&&["top-right","bottom-left","top-left","bottom-right","float"].includes(ee))return ee}catch{}return"top-right"}),[Y,de]=I.useState({x:0,y:0}),te=I.useRef(null),[M,P]=I.useState(null),[q,re]=I.useState([]),[be,Le]=I.useState(null),[le,oe]=I.useState(!1),[Fe,De]=I.useState(1),[J,Ee]=I.useState(null),Qe=I.useRef(""),ot=I.useRef(""),Ye=w||v,He=ee=>{Le(ee),setTimeout(()=>Le(null),2400)},Me=async()=>{try{const ee=localStorage.getItem("weekly_chores_canvas_sheet_data_v5");if(!ee){He("⚠️ No data found in localStorage");return}const ce=await(await fetch("/__save-config?asDefault=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sheetData:JSON.parse(ee)})})).json();ce.ok?He("✓ Saved current browser setup as default in code and config file!"):He(`⚠️ Failed: ${ce.error}`)}catch(ee){He(`⚠️ Failed: ${(ee==null?void 0:ee.message)||String(ee)}`)}},ye=()=>{try{const ee=localStorage.getItem("weekly_chores_canvas_sheet_data_v5"),Se={sheetData:ee?JSON.parse(ee):null,version:"5.0",exportedAt:new Date().toISOString(),appName:"Weekly Chores & Household Hub"},ce=new Blob([JSON.stringify(Se,null,2)],{type:"application/json"}),L=URL.createObjectURL(ce),$=document.createElement("a"),X=new Date().toISOString().slice(0,10);$.href=L,$.download=`weekly-chores-config-${X}.json`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(L),fetch("/__save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Se)}).catch(()=>{}),He("✓ Exported configuration backup (.json)!")}catch(ee){He(`⚠️ Export failed: ${(ee==null?void 0:ee.message)||String(ee)}`)}},Ue=ee=>{var L;const Se=(L=ee.target.files)==null?void 0:L[0];if(!Se)return;const ce=new FileReader;ce.onload=$=>{var X;try{const y=JSON.parse((X=$.target)==null?void 0:X.result),F=y.sheetData||(Array.isArray(y)?y:null);Array.isArray(F)&&F.length>0?(localStorage.setItem("weekly_chores_canvas_sheet_data_v5",JSON.stringify(F)),window.postMessage({type:"SYNC_DATA",payload:F},"*"),He(`✓ Loaded configuration from "${Se.name}"!`)):He("⚠️ Invalid config: missing sheetData")}catch(y){He(`⚠️ Failed to parse: ${(y==null?void 0:y.message)||String(y)}`)}},ce.readAsText(Se),ee.target.value=""},fe=()=>{z(ee=>{const Se=["top-right","bottom-left","top-left","bottom-right","float"],ce=Se[(Se.indexOf(ee)+1)%Se.length];try{localStorage.setItem(Iu,ce)}catch{}return He(`Inspector window docked: ${ce.replace("-"," ").toUpperCase()}`),ce})};I.useEffect(()=>{const ee=L=>{L.key==="Alt"?V(!0):L.key==="Escape"?w&&(_(!1),P(null)):(L.key==="d"||L.key==="D")&&Ye&&fe()},Se=L=>{L.key==="Alt"&&(V(!1),w||P(null))},ce=()=>{V(!1)};return window.addEventListener("keydown",ee),window.addEventListener("keyup",Se),window.addEventListener("blur",ce),()=>{window.removeEventListener("keydown",ee),window.removeEventListener("keyup",Se),window.removeEventListener("blur",ce)}},[w]),I.useEffect(()=>{if(!Ye){P(null);return}const ee=ce=>{const L=ce.target;if(!L||L.closest("#__code-inspector-ui")){P(null);return}de({x:ce.clientX,y:ce.clientY});const $=L.closest("[data-source-loc]");if(!$){P(null);return}const X=$.getAttribute("data-source-loc")||"",y=$.getAttribute("data-source-comp")||"",F=X.split(":");if(F.length<3)return;const xe=parseInt(F.pop(),10),ge=parseInt(F.pop(),10),ke=F.join(":"),we=$.getBoundingClientRect(),Ce=Fu($);if(Ce&&Ce.rowIndex!==null){const Oe=Ce.sectionName.toLowerCase().includes("hub")?1:0,ut=`${Oe}:${Ce.rowIndex}:${Ce.colIndex}`;ot.current!==ut&&(ot.current=ut,De(Oe),Ee(ut),zu(Oe,Ce.rowIndex,Ce.colIndex,Ce.line))}P({file:ke,line:ge,col:xe,tag:$.tagName.toLowerCase(),comp:y,rect:we,dataMatch:Ce});const qe=`${ke}:${ge}`;if(Qe.current!==qe){Qe.current=qe;const Oe=Math.max(1,ge-1),ut=Math.min(io.length,ge+1),me=[];for(let ur=Oe;ur<=ut;ur++)me.push({line:ur,text:io[ur-1]??""});re(me)}},Se=ce=>{const L=ce.target;if(!L||L.closest("#__code-inspector-ui"))return;const $=L.closest("[data-source-loc]");if(!$)return;ce.preventDefault(),ce.stopPropagation();const y=($.getAttribute("data-source-loc")||"").split(":");if(y.length<3)return;let F=parseInt(y.pop(),10),xe=parseInt(y.pop(),10),ge=y.join(":");const ke=Fu($);(ce.ctrlKey||ce.metaKey)&&ke?(ge=ke.csvFile,xe=ke.csvLine,F=1):ce.shiftKey&&ke&&(xe=ke.line,F=1),vs(ge,xe,F,He)};return window.addEventListener("mousemove",ee,!0),window.addEventListener("click",Se,!0),()=>{window.removeEventListener("mousemove",ee,!0),window.removeEventListener("click",Se,!0)}},[Ye]);let Ie={};if(M){const L=M.rect;if(K==="top-right")L.right>window.innerWidth-497&&L.top<336?Ie={bottom:"64px",left:"16px"}:Ie={top:"16px",right:"16px"};else if(K==="bottom-left")L.left<497&&L.bottom>window.innerHeight-384?Ie={top:"16px",right:"16px"}:Ie={bottom:"64px",left:"16px"};else if(K==="top-left")L.left<497&&L.top<336?Ie={bottom:"64px",right:"16px"}:Ie={top:"16px",left:"16px"};else if(K==="bottom-right")L.right>window.innerWidth-497&&L.bottom>window.innerHeight-384?Ie={top:"16px",left:"16px"}:Ie={bottom:"64px",right:"16px"};else{let $=L.top,X=L.right+16;X+465>window.innerWidth-16&&(X=L.left-465-16),X<16&&(X=Math.max(16,Math.min(L.left,window.innerWidth-465-16)),$=L.top>336?L.top-320-12:L.bottom+12),$=Math.max(16,Math.min($,window.innerHeight-320-16)),Ie={top:`${$}px`,left:`${X}px`}}}let $e=!1;if(te.current&&Ye){const ee=te.current.getBoundingClientRect(),Se=Math.max(ee.left,Math.min(Y.x,ee.right)),ce=Math.max(ee.top,Math.min(Y.y,ee.bottom));Math.hypot(Y.x-Se,Y.y-ce)<40&&($e=!0)}return r.jsxs("div",{id:"__code-inspector-ui",style:{position:"fixed",zIndex:999999,pointerEvents:"none"},children:[Ye&&M&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:M.rect.top,left:M.rect.left,width:M.rect.width,height:M.rect.height,border:"2px solid #3B82F6",backgroundColor:"rgba(59, 130, 246, 0.12)",borderRadius:"4px",pointerEvents:"none",transition:"all 0.04s ease-out"}}),r.jsxs("div",{style:{position:"fixed",top:M.rect.top>24?M.rect.top-22:M.rect.bottom+4,left:Math.max(4,Math.min(M.rect.left,window.innerWidth-240)),padding:"2px 8px",borderRadius:"4px",backgroundColor:"#0F172A",color:"#93C5FD",border:"1px solid #3B82F6",fontSize:"10px",fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none",whiteSpace:"nowrap",zIndex:999999,display:"flex",alignItems:"center",gap:"6px"},children:[r.jsxs("span",{children:["<",M.tag,">",M.comp?` in <${M.comp}>`:""]}),r.jsxs("span",{style:{color:"#38BDF8",fontWeight:600},children:["• Line ",M.line]})]}),r.jsxs("div",{ref:te,style:{position:"fixed",...Ie,width:"465px",maxWidth:"calc(100vw - 32px)",backgroundColor:"#0F172A",color:"#F8FAFC",padding:"10px 14px",borderRadius:"10px",boxShadow:"0 12px 30px -5px rgba(0, 0, 0, 0.65)",border:"1px solid #334155",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",lineHeight:"1.45",pointerEvents:"auto",opacity:$e?.22:.98,transition:"opacity 0.15s ease, top 0.2s ease, left 0.2s ease, right 0.2s ease, bottom 0.2s ease",zIndex:999999},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"},children:[r.jsxs("span",{style:{color:"#60A5FA",fontWeight:700,fontSize:"11.5px"},children:["<",M.tag,">",M.comp?r.jsxs("span",{style:{color:"#C084FC",fontWeight:500},children:[" in ",M.comp]}):null]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsxs("button",{type:"button",onClick:fe,title:"Move inspector window corner (or press 'D' key)",style:{backgroundColor:"#1E293B",color:"#93C5FD",border:"1px solid #3B82F6",borderRadius:"4px",padding:"2px 7px",fontSize:"9.5px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx("span",{children:"◰"}),r.jsxs("span",{children:["Dock: ",K.replace("-"," ")]})]}),r.jsxs("span",{style:{color:"#38BDF8",backgroundColor:"#1E293B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["Line ",M.line,":",M.col]})]})]}),r.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"6px"},children:[M.file," (",r.jsx("strong",{children:"Click"})," = UI code)"]}),q.length>0&&r.jsx("div",{style:{backgroundColor:"#020617",padding:"6px 8px",borderRadius:"5px",border:"1px solid #1E293B",overflowX:"hidden",whiteSpace:"pre"},children:q.map(ee=>{const Se=ee.line===M.line,ce=Se&&M.col>30?Math.max(0,M.col-1):0,L=ce>0?"…"+ee.text.slice(ce,ce+55):ee.text.trim().slice(0,56);return r.jsxs("div",{style:{backgroundColor:Se?"rgba(59, 130, 246, 0.22)":"transparent",color:Se?"#F8FAFC":"#64748B",fontWeight:Se?600:400,padding:"0 4px",borderRadius:"2px",textOverflow:"ellipsis",overflow:"hidden"},children:[r.jsx("span",{style:{display:"inline-block",width:"36px",color:Se?"#60A5FA":"#475569",userSelect:"none"},children:ee.line}),L]},ee.line)})}),M.dataMatch&&r.jsxs("div",{style:{marginTop:"8px",paddingTop:"6px",borderTop:"1px solid #334155"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"2px"},children:[r.jsxs("span",{style:{color:"#34D399",fontWeight:700},children:["📊 TSX Data (index_ ",M.dataMatch.rowIndex,", row[",M.dataMatch.colIndex,"])"]}),r.jsxs("span",{style:{color:"#6EE7B7",backgroundColor:"#064E3B",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["TSX Line ",M.dataMatch.line]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"4px"},children:[r.jsxs("span",{style:{color:"#FBBF24",fontWeight:700},children:["📄 ",M.dataMatch.csvFile]}),r.jsxs("span",{style:{color:"#FDE68A",backgroundColor:"#78350F",padding:"1px 6px",borderRadius:"4px",fontWeight:600},children:["CSV Line ",M.dataMatch.csvLine," • Col ",M.dataMatch.colLetter]})]}),r.jsxs("div",{style:{color:"#94A3B8",fontSize:"10px",marginBottom:"4px"},children:[r.jsx("strong",{children:"Shift+Click"})," = .tsx Data • ",r.jsx("strong",{children:"Ctrl+Click"})," = .csv File"]}),r.jsxs("div",{style:{backgroundColor:"#022C22",color:"#ECFDF5",padding:"4px 8px",borderRadius:"4px",border:"1px solid #065F46",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r.jsx("span",{style:{color:"#34D399",marginRight:"8px"},children:M.dataMatch.line}),M.dataMatch.text.slice(0,56)]})]})]})]}),be&&r.jsxs("div",{style:{position:"fixed",bottom:"54px",right:"16px",backgroundColor:"#10B981",color:"#FFFFFF",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:["✓ ",be]}),le&&r.jsx("div",{style:{position:"fixed",bottom:"56px",left:"16px",right:"16px",height:"52vh",pointerEvents:"auto",borderRadius:"12px",overflow:"hidden",border:"2px solid #F59E0B",boxShadow:"0 20px 45px rgba(0, 0, 0, 0.65)"},children:r.jsx(Gu,{isStandalone:!1,activeCsvSheetIdx:Fe,setActiveCsvSheetIdx:De,selectedCellKey:J,setSelectedCellKey:Ee,onClose:()=>oe(!1),onToast:He})}),r.jsxs("div",{style:{position:"fixed",bottom:"14px",right:"16px",pointerEvents:"auto",display:"flex",alignItems:"center",gap:"8px"},children:[r.jsxs("button",{type:"button",onClick:()=>Hu(He,()=>oe(!0)),title:"Open the CSV Visual Map in a separate standalone desktop window",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #F59E0B",backgroundColor:"#78350F",color:"#FEF3C7",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"↗"}),r.jsx("span",{children:"Pop Out CSV Map"})]}),r.jsxs("button",{type:"button",onClick:Me,title:"Save current browser setup as the permanent default in code (.tsx) and configuration file",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #059669",backgroundColor:"#065F46",color:"#ECFDF5",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"💾"}),r.jsx("span",{children:"Save as Default"})]}),r.jsxs("button",{type:"button",onClick:ye,title:"Download/export configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"⬇️"}),r.jsx("span",{children:"Export Config"})]}),r.jsxs("label",{title:"Import/restore a configuration backup file (.json)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"⬆️"}),r.jsx("span",{children:"Import Config"}),r.jsx("input",{type:"file",accept:".json",onChange:Ue,style:{display:"none"}})]}),r.jsxs("button",{type:"button",onClick:()=>{try{localStorage.removeItem("weekly_chores_canvas_sheet_data_v1"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v2"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v3"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v4"),localStorage.removeItem("weekly_chores_canvas_sheet_data_v5")}catch{}window.postMessage({type:"SYNC_DATA",payload:Dl},"*"),He("Reset to INITIAL_SHEET_DATA")},title:"Clear cached localStorage and reload INITIAL_SHEET_DATA from code",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #334155",backgroundColor:"#1E293B",color:"#E2E8F0",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"🔄"}),r.jsx("span",{children:"Reset Data"})]}),r.jsxs("button",{type:"button",onClick:()=>_(ee=>!ee),title:"Toggle Inspect Mode (or hold Alt key while hovering)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:Ye?"2px solid #93C5FD":"1px solid #334155",backgroundColor:Ye?"#2563EB":"#0F172A",color:"#FFFFFF",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"🔍"}),r.jsx("span",{children:Ye?"Inspecting Code (Click element)":"Inspect Code (or hold Alt)"})]}),Ye&&r.jsxs("button",{type:"button",onClick:fe,title:"Cycle inspector info window corner (or press 'D' key while inspecting)",style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer",border:"1px solid #475569",backgroundColor:"#1E293B",color:"#93C5FD",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.25)",transition:"all 0.15s ease"},children:[r.jsx("span",{children:"◰"}),r.jsxs("span",{children:["Dock: ",K.replace("-"," ")," (Key: D)"]})]})]})]})}const yp=typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="csv-map";Yh.createRoot(document.getElementById("root")).render(r.jsx(ao.StrictMode,{children:yp?r.jsx(fp,{}):r.jsxs(r.Fragment,{children:[r.jsx(pp,{}),r.jsx(xp,{})]})}));
