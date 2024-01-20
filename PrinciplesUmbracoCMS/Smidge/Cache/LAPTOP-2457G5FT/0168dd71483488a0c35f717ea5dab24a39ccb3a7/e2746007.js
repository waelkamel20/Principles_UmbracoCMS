(function(Z){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=window,Ie=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Mt=new WeakMap;let Dt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Mt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Mt.set(t,e))}return e}toString(){return this.cssText}};const ti=r=>new Dt(typeof r=="string"?r:r+"",void 0,Ue),P=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Dt(t,r,Ue)},ri=(r,e)=>{Ie?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=pe.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)})},Nt=Ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ti(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;const fe=window,Vt=fe.trustedTypes,ii=Vt?Vt.emptyScript:"",Wt=fe.reactiveElementPolyfillSupport,Le={toAttribute(r,e){switch(e){case Boolean:r=r?ii:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},qt=(r,e)=>e!==r&&(e==e||r==r),Re={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:qt},Me="finalized";let j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Re}static finalize(){if(this.hasOwnProperty(Me))return!1;this[Me]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Nt(o))}else e!==void 0&&t.push(Nt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ri(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Re){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Le).toAttribute(t,i.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Le;this._$El=s,this[s]=a.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||qt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};j[Me]=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},Wt?.({ReactiveElement:j}),((Te=fe.reactiveElementVersions)!==null&&Te!==void 0?Te:fe.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const ve=window,F=ve.trustedTypes,Ht=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ne="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,jt="?"+U,oi=`<${jt}>`,R=document,Q=()=>R.createComment(""),X=r=>r===null||typeof r!="object"&&typeof r!="function",Ft=Array.isArray,si=r=>Ft(r)||typeof r?.[Symbol.iterator]=="function",Ve=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Jt=/>/g,M=RegExp(`>|${Ve}(?:([^\\s"'>=/]+)(${Ve}*=${Ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Gt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,ni=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=ni(1),A=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Zt=new WeakMap,D=R.createTreeWalker(R,129,null,!1);function Qt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(e):e}const ai=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":"",n=ee;for(let a=0;a<t;a++){const l=r[a];let c,h,m=-1,b=0;for(;b<l.length&&(n.lastIndex=b,h=n.exec(l),h!==null);)b=n.lastIndex,n===ee?h[1]==="!--"?n=Bt:h[1]!==void 0?n=Jt:h[2]!==void 0?(Kt.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=M):h[3]!==void 0&&(n=M):n===M?h[0]===">"?(n=o??ee,m=-1):h[1]===void 0?m=-2:(m=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?M:h[3]==='"'?Gt:Yt):n===Gt||n===Yt?n=M:n===Bt||n===Jt?n=ee:(n=M,o=void 0);const $=n===M&&r[a+1].startsWith("/>")?" ":"";s+=n===ee?l+oi:m>=0?(i.push(c),l.slice(0,m)+Ne+l.slice(m)+U+$):l+U+(m===-2?(i.push(void 0),a):$)}return[Qt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class te{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const a=e.length-1,l=this.parts,[c,h]=ai(e,t);if(this.el=te.createElement(c,i),D.currentNode=this.el.content,t===2){const m=this.el.content,b=m.firstChild;b.remove(),m.append(...b.childNodes)}for(;(o=D.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const m=[];for(const b of o.getAttributeNames())if(b.endsWith(Ne)||b.startsWith(U)){const $=h[n++];if(m.push(b),$!==void 0){const Rt=o.getAttribute($.toLowerCase()+Ne).split(U),E=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:E[2],strings:Rt,ctor:E[1]==="."?ui:E[1]==="?"?di:E[1]==="@"?hi:me})}else l.push({type:6,index:s})}for(const b of m)o.removeAttribute(b)}if(Kt.test(o.tagName)){const m=o.textContent.split(U),b=m.length-1;if(b>0){o.textContent=F?F.emptyScript:"";for(let $=0;$<b;$++)o.append(m[$],Q()),D.nextNode(),l.push({type:2,index:++s});o.append(m[b],Q())}}}else if(o.nodeType===8)if(o.data===jt)l.push({type:2,index:s});else{let m=-1;for(;(m=o.data.indexOf(U,m+1))!==-1;)l.push({type:7,index:s}),m+=U.length-1}s++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function B(r,e,t=r,i){var o,s,n,a;if(e===A)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=X(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,i)),i!==void 0?((n=(a=t)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=B(r,l._$AS(r,e.values),l,i)),e}class li{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:R).importNode(i,!0);D.currentNode=s;let n=D.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new re(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new pi(n,this,e)),this._$AV.push(h),c=o[++l]}a!==c?.index&&(n=D.nextNode(),a++)}return D.currentNode=R,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class re{constructor(e,t,i,o){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),X(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):si(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=te.createElement(Qt(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const n=new li(s,this),a=n.u(this.options);n.v(i),this.$(a),this._$AH=n}}_$AC(e){let t=Zt.get(e.strings);return t===void 0&&Zt.set(e.strings,t=new te(e)),t}T(e){Ft(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new re(this.k(Q()),this.k(Q()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class me{constructor(e,t,i,o,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(s===void 0)e=B(this,e,t,0),n=!X(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=B(this,a[i+l],t,l),c===A&&(c=this._$AH[l]),n||(n=!X(c)||c!==this._$AH[l]),c===f?e=f:e!==f&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ui extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}const ci=F?F.emptyScript:"";class di extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,ci):this.element.removeAttribute(this.name)}}class hi extends me{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=B(this,e,t,0))!==null&&i!==void 0?i:f)===A)return;const o=this._$AH,s=e===f&&o!==f||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class pi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Xt=ve.litHtmlPolyfillSupport;Xt?.(te,re),((De=ve.litHtmlVersions)!==null&&De!==void 0?De:ve.litHtmlVersions=[]).push("2.8.0");const fi=(r,e,t)=>{var i,o;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const a=(o=t?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new re(e.insertBefore(Q(),a),a,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We,qe;let y=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return A}};y.finalized=!0,y._$litElement$=!0,(We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis,{LitElement:y});const er=globalThis.litElementPolyfillSupport;er?.({LitElement:y}),((qe=globalThis.litElementVersions)!==null&&qe!==void 0?qe:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(n){customElements.define(t,n)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},mi=(r,e,t)=>{e.constructor.createProperty(t,r)};function p(r){return(e,t)=>t!==void 0?mi(r,e,t):vi(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(r){return p({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=({finisher:r,descriptor:e})=>(t,i)=>{var o;if(i===void 0){const s=(o=t.originalKey)!==null&&o!==void 0?o:t.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return r!=null&&(n.finisher=function(a){r(a,s)}),n}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function He(r,e){return tr({descriptor:t=>{const i={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r))!==null&&n!==void 0?n:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;const gi=((je=window.HTMLSlotElement)===null||je===void 0?void 0:je.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function rr(r){const{slot:e,selector:t}=r??{};return tr({descriptor:i=>({get(){var o;const s="slot"+(e?`[name=${e}]`:":not([name])"),n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s),a=n!=null?gi(n,r):[];return t?a.filter(l=>l.matches(t)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=r=>r??f;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=r=>r===null||typeof r!="object"&&typeof r!="function",wi=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},or=r=>(...e)=>({_$litDirective$:r,values:e});let sr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=(r,e)=>{var t,i;const o=r._$AN;if(o===void 0)return!1;for(const s of o)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),ie(s,e);return!0},ge=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},nr=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),$i(e)}};function yi(r){this._$AN!==void 0?(ge(this),this._$AM=r,nr(this)):this._$AM=r}function _i(r,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)ie(i[s],!1),ge(i[s]);else i!=null&&(ie(i,!1),ge(i));else ie(this,r)}const $i=r=>{var e,t,i,o;r.type==ir.CHILD&&((e=(i=r)._$AP)!==null&&e!==void 0||(i._$AP=_i),(t=(o=r)._$AQ)!==null&&t!==void 0||(o._$AQ=yi))};let Ei=class extends sr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),nr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(ie(this,e),ge(this))}setValue(e){if(wi(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ci{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Pi{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.Z=t))}resume(){var e;(e=this.Z)===null||e===void 0||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=r=>!bi(r)&&typeof r.then=="function",lr=1073741823;class xi extends Ei{constructor(){super(...arguments),this._$C_t=lr,this._$Cwt=[],this._$Cq=new Ci(this),this._$CK=new Pi}render(...e){var t;return(t=e.find(i=>!ar(i)))!==null&&t!==void 0?t:A}update(e,t){const i=this._$Cwt;let o=i.length;this._$Cwt=t;const s=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$C_t);a++){const l=t[a];if(!ar(l))return this._$C_t=a,l;a<o&&l===i[a]||(this._$C_t=lr,o=0,Promise.resolve(l).then(async c=>{for(;n.get();)await n.get();const h=s.deref();if(h!==void 0){const m=h._$Cwt.indexOf(l);m>-1&&m<h._$C_t&&(h._$C_t=m,h.setValue(c))}}))}return A}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const v=or(xi);var Be=function(r,e){return Be=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},Be(r,e)};function oe(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Be(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Je(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function be(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,s=[],n;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(a){n={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}return s}function we(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,s;i<o;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return r.concat(s||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;function z(r){return typeof r=="function"}function Ye(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ge=Ye(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Ke(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var ye=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,s;if(!this.closed){this.closed=!0;var n=this._parentage;if(n)if(this._parentage=null,Array.isArray(n))try{for(var a=Je(n),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(E){e={error:E}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else n.remove(this);var h=this.initialTeardown;if(z(h))try{h()}catch(E){s=E instanceof Ge?E.errors:[E]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var b=Je(m),$=b.next();!$.done;$=b.next()){var Rt=$.value;try{dr(Rt)}catch(E){s=s??[],E instanceof Ge?s=we(we([],be(s)),be(E.errors)):s.push(E)}}}catch(E){i={error:E}}finally{try{$&&!$.done&&(o=b.return)&&o.call(b)}finally{if(i)throw i.error}}}if(s)throw new Ge(s)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)dr(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Ke(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Ke(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),ur=ye.EMPTY;function cr(r){return r instanceof ye||r&&"closed"in r&&z(r.remove)&&z(r.add)&&z(r.unsubscribe)}function dr(r){z(r)?r():r.unsubscribe()}var hr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ze={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];var o=Ze.delegate;return o?.setTimeout?o.setTimeout.apply(o,we([r,e],be(t))):setTimeout.apply(void 0,we([r,e],be(t)))},clearTimeout:function(r){var e=Ze.delegate;return(e?.clearTimeout||clearTimeout)(r)},delegate:void 0};function Si(r){Ze.setTimeout(function(){throw r})}function pr(){}function _e(r){r()}var fr=function(r){oe(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,cr(t)&&t.add(i)):i.destination=ki,i}return e.create=function(t,i,o){return new $e(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(ye),Ai=Function.prototype.bind;function Qe(r,e){return Ai.call(r,e)}var zi=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Ee(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Ee(i)}else Ee(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Ee(t)}},r}(),$e=function(r){oe(e,r);function e(t,i,o){var s=r.call(this)||this,n;if(z(t)||!t)n={next:t??void 0,error:i??void 0,complete:o??void 0};else{var a;s&&hr.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},n={next:t.next&&Qe(t.next,a),error:t.error&&Qe(t.error,a),complete:t.complete&&Qe(t.complete,a)}):n=t}return s.destination=new zi(n),s}return e}(fr);function Ee(r){Si(r)}function Oi(r){throw r}var ki={closed:!0,next:pr,error:Oi,complete:pr},Ii=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ui(r){return r}function Ti(r){return r.length===0?Ui:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var vr=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,s=Ri(e)?e:new $e(e,t,i);return _e(function(){var n=o,a=n.operator,l=n.source;s.add(a?a.call(s,l):l?o._subscribe(s):o._trySubscribe(s))}),s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=mr(t),new t(function(o,s){var n=new $e({next:function(a){try{e(a)}catch(l){s(l),n.unsubscribe()}},error:s,complete:o});i.subscribe(n)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[Ii]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Ti(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=mr(e),new e(function(i,o){var s;t.subscribe(function(n){return s=n},function(n){return o(n)},function(){return i(s)})})},r.create=function(e){return new r(e)},r}();function mr(r){var e;return(e=r??hr.Promise)!==null&&e!==void 0?e:Promise}function Li(r){return r&&z(r.next)&&z(r.error)&&z(r.complete)}function Ri(r){return r&&r instanceof fr||Li(r)&&cr(r)}var Mi=Ye(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),gr=function(r){oe(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new br(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new Mi},e.prototype.next=function(t){var i=this;_e(function(){var o,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var n=Je(i.currentObservers),a=n.next();!a.done;a=n.next()){var l=a.value;l.next(t)}}catch(c){o={error:c}}finally{try{a&&!a.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;_e(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;_e(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,s=o.hasError,n=o.isStopped,a=o.observers;return s||n?ur:(this.currentObservers=null,a.push(t),new ye(function(){i.currentObservers=null,Ke(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,s=i.thrownError,n=i.isStopped;o?t.error(s):n&&t.complete()},e.prototype.asObservable=function(){var t=new vr;return t.source=this,t},e.create=function(t,i){return new br(t,i)},e}(vr),br=function(r){oe(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:ur},e}(gr),wr={now:function(){return(wr.delegate||Date).now()},delegate:void 0},yr=function(r){oe(e,r);function e(t,i,o){t===void 0&&(t=1/0),i===void 0&&(i=1/0),o===void 0&&(o=wr);var s=r.call(this)||this;return s._bufferSize=t,s._windowTime=i,s._timestampProvider=o,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=i===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,i),s}return e.prototype.next=function(t){var i=this,o=i.isStopped,s=i._buffer,n=i._infiniteTimeWindow,a=i._timestampProvider,l=i._windowTime;o||(s.push(t),!n&&s.push(a.now()+l)),this._trimBuffer(),r.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var i=this._innerSubscribe(t),o=this,s=o._infiniteTimeWindow,n=o._buffer,a=n.slice(),l=0;l<a.length&&!t.closed;l+=s?1:2)t.next(a[l]);return this._checkFinalizedStatuses(t),i},e.prototype._trimBuffer=function(){var t=this,i=t._bufferSize,o=t._timestampProvider,s=t._buffer,n=t._infiniteTimeWindow,a=(n?1:2)*i;if(i<1/0&&a<s.length&&s.splice(0,s.length-a),!n){for(var l=o.now(),c=0,h=1;h<s.length&&s[h]<=l;h+=2)c=h;c&&s.splice(0,c+1)}},e}(gr),Di=Ye(function(r){return function(){r(this),this.name="EmptyError",this.message="no elements in sequence"}});function _r(r,e){var t=typeof e=="object";return new Promise(function(i,o){var s=new $e({next:function(n){i(n),s.unsubscribe()},error:o,complete:function(){t?i(e.defaultValue):o(new Di)}});r.subscribe(s)})}class Ni{#e=!1;#t="localizedtext";#r=new yr(1);async#i(){if(this.#e)return;this.#e=!0;const e=await fetch(this.#t);if(!e.ok)throw new Error(`Failed to fetch localized resources: ${e.status} ${e.statusText}`);const t=await e.json(),i=new Map;for(const[o,s]of Object.entries(t))for(const[n,a]of Object.entries(s))i.set(`${o}_${n}`,a);this.#r.next(i)}async localize(e,t,i){return this._lookup(e,t,i)}async localizeMany(e){this.#i();const t=await _r(this.#r);return e.map(i=>t.get(i)??i??"")}tokenReplace(e,t){if(t)for(let i=0;i<t.length;i++)e=e.replace("%"+i+"%",t[i]);return e}async _lookup(e,t,i){this.#i();const o=await _r(this.#r);e&&e[0]==="@"&&(e=e.substring(1));let s=e.indexOf("_");e&&s<0&&(e="general_"+e);const n=o.get(e);return n?this.tokenReplace(n,t):i||`[${e}]`}}const d=new Ni;class Vi{#e="backoffice/umbracoapi/authentication/postlogin";async login(e){try{const t=new Request(this.#e,{method:"POST",body:JSON.stringify({username:e.username,password:e.password,rememberMe:e.persist}),headers:{"Content-Type":"application/json"}}),i=await fetch(t),o={status:i.status};if(!i.ok)return o.error=await this.#t(i),o;try{const s=await i.text();s&&(o.data=JSON.parse(this.#r(s)))}catch{}return{status:i.status,data:o?.data,twoFactorView:o?.twoFactorView}}catch(t){return{status:500,error:t instanceof Error?t.message:"Unknown error"}}}async resetPassword(e){const t=new Request("backoffice/umbracoapi/authentication/PostRequestPasswordReset",{method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}}),i=await fetch(t);return{status:i.status,error:i.ok?void 0:await this.#t(i)}}async validatePasswordResetCode(e,t){const i=new Request("backoffice/umbracoapi/authentication/validatepasswordresetcode",{method:"POST",body:JSON.stringify({userId:e,resetCode:t}),headers:{"Content-Type":"application/json"}}),o=await fetch(i);return{status:o.status,error:o.ok?void 0:await this.#t(o)}}async newPassword(e,t,i){const o=new Request("backoffice/umbracoapi/authentication/PostSetPassword",{method:"POST",body:JSON.stringify({password:e,resetCode:t,userId:i}),headers:{"Content-Type":"application/json"}}),s=await fetch(o);return{status:s.status,error:s.ok?void 0:await this.#t(s)}}async newInvitedUserPassword(e){const t=new Request("backoffice/umbracoapi/authentication/PostSetInvitedUserPassword",{method:"POST",body:JSON.stringify({newPassWord:e}),headers:{"Content-Type":"application/json"}}),i=await fetch(t);return{status:i.status,error:i.ok?void 0:await this.#t(i)}}async getPasswordConfig(e){const t=new Request(`backoffice/umbracoapi/authentication/GetPasswordConfig?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}),i=await fetch(t);if(i.ok){let o=await i.text();o=this.#r(o);const s=JSON.parse(o);return{status:i.status,data:s}}return{status:i.status,error:i.ok?void 0:this.#t(i)}}async getInvitedUser(){const e=new Request("backoffice/umbracoapi/authentication/GetCurrentInvitedUser",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await fetch(e);if(t.ok){let i=await t.text();i=this.#r(i);const o=JSON.parse(i);return{status:t.status,user:o}}return{status:t.status,error:this.#t(t)}}async getMfaProviders(){const e=new Request("backoffice/umbracoapi/authentication/Get2faProviders",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await fetch(e);if(t.ok){let i=await t.text();i=this.#r(i);const o=JSON.parse(i);return{status:t.status,providers:o}}return{status:t.status,error:await this.#t(t),providers:[]}}async validateMfaCode(e,t){const i=new Request("backoffice/umbracoapi/authentication/PostVerify2faCode",{method:"POST",body:JSON.stringify({code:e,provider:t}),headers:{"Content-Type":"application/json"}}),o=await fetch(i);let s=await o.text();s=this.#r(s);const n=JSON.parse(s);return o.ok?{data:n,status:o.status}:{status:o.status,error:n.Message??"An unknown error occurred."}}async#t(e){switch(e.status){case 400:case 401:return d.localize("login_userFailedLogin",void 0,"Oops! We couldn't log you in. Please check your credentials and try again.");case 402:return d.localize("login_2faText",void 0,"You have enabled 2-factor authentication and must verify your identity.");case 500:return d.localize("errors_receivedErrorFromServer",void 0,"Received error from server");default:return e.statusText??await d.localize("errors_receivedErrorFromServer",void 0,"Received error from server")}}#r(e){return e.startsWith(`)]}',
`)&&(e=e.split(`
`)[1]),e}}class Wi{constructor(){this.supportsPersistLogin=!1,this.disableLocalLogin=!1,this.#e=new Vi,this.#t=""}#e;#t;set returnPath(e){this.#t=e}get returnPath(){const e=new URLSearchParams(window.location.search);let t=e.get("ReturnUrl")??e.get("returnPath")??this.#t;if(t.indexOf("/security/back-office/authorize")===-1&&(t=decodeURIComponent(t)),!t)return"";const i=new URL(t,window.location.origin);return i.origin!==window.location.origin?"":i.toString()}async login(e){return this.#e.login(e)}async resetPassword(e){return this.#e.resetPassword(e)}async validatePasswordResetCode(e,t){return this.#e.validatePasswordResetCode(e,t)}async newPassword(e,t,i){const o=Number.parseInt(i);return this.#e.newPassword(e,t,o)}async newInvitedUserPassword(e){return this.#e.newInvitedUserPassword(e)}async getPasswordConfig(e){return this.#e.getPasswordConfig(e)}async getInvitedUser(){return this.#e.getInvitedUser()}getMfaProviders(){return this.#e.getMfaProviders()}validateMfaCode(e,t){return this.#e.validateMfaCode(e,t)}}const g=new Wi,qi=`#umb-login-form umb-login-input{width:100%;height:var(--input-height);box-sizing:border-box;display:block;border:1px solid var(--uui-color-border);border-radius:var(--uui-border-radius);outline:none;background-color:var(--uui-color-surface)}#umb-login-form umb-login-input input{width:100%;height:100%;display:block;box-sizing:border-box;border:none;outline:none;background:none;padding:var(--uui-size-1, 3px) var(--uui-size-space-4, 9px);font-size:inherit}#umb-login-form uui-form-layout-item{margin-top:var(--uui-size-space-4);margin-bottom:var(--uui-size-space-4)}#umb-login-form umb-login-input:focus-within{border-color:var(--uui-input-border-color-focus, var(--uui-color-border-emphasis, #a1a1a1));outline:calc(2px * var(--uui-show-focus-outline, 1)) solid var(--uui-color-focus)}#umb-login-form umb-login-input:hover:not(:focus-within){border-color:var(--uui-input-border-color-hover, var(--uui-color-border-standalone, #c2c2c2))}
`;var Hi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,O=(r,e,t,i)=>{for(var o=i>1?void 0:i?ji(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Hi(e,t,o),o},Fi=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Bi=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Ji=(r,e,t)=>(Fi(r,e,"access private method"),t),Xe,$r;const Er=r=>{const e=document.createElement("umb-login-input");return e.type=r.type,e.name=r.name,e.autocomplete=r.autocomplete,e.id=r.id,e.required=!0,e.requiredMessage=r.requiredMessage,e.label=r.label,e.spellcheck=!1,e.inputMode=r.inputmode,e},Cr=r=>{const e=document.createElement("uui-label"),t=document.createElement("umb-localize");return t.key=r.localizeAlias,e.for=r.forId,e.appendChild(t),e},Pr=(r,e)=>{const t=document.createElement("uui-form-layout-item");return t.appendChild(r),t.appendChild(e),t},Yi=r=>{const e=document.createElement("style");e.innerHTML=qi;const t=document.createElement("form");return t.id="umb-login-form",t.name="login-form",t.noValidate=!0,r.push(e),r.forEach(i=>t.appendChild(i)),t};let x=class extends y{constructor(){super(),Bi(this,Xe),this.usernameIsEmail=!1,this.allowPasswordReset=!1,this.allowUserInvite=!1,this.classList.add("uui-text"),this.classList.add("uui-font"),this.addEventListener("umb-login-flow",r=>{r instanceof CustomEvent&&(this.flow=r.detail.flow||void 0),this.requestUpdate()})}set disableLocalLogin(r){g.disableLocalLogin=r}set returnPath(r){g.returnPath=r}connectedCallback(){super.connectedCallback(),Ji(this,Xe,$r).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._usernameLayoutItem?.remove(),this._passwordLayoutItem?.remove(),this._usernameLabel?.remove(),this._usernameInput?.remove(),this._passwordLabel?.remove(),this._passwordInput?.remove()}render(){return u`
      <umb-auth-layout
        background-image=${Fe(this.backgroundImage)}
        logo-image=${Fe(this.logoImage)}
        logo-image-alternative=${Fe(this.logoImageAlternative)}>
        ${this._renderFlowAndStatus()}
      </umb-auth-layout>
    `}_renderFlowAndStatus(){const r=new URLSearchParams(window.location.search);let e=this.flow||r.get("flow")?.toLowerCase();const t=r.get("status");if(t==="resetCodeExpired")return u`
        <umb-error-layout
          header="Hi there"
          message=${v(d.localize("login_resetCodeExpired",void 0,"The link you have clicked on is invalid or has expired"))}>
        </umb-error-layout>`;if(e==="invite-user"&&t==="false")return u`
        <umb-error-layout
          header="Hi there"
          message=${v(d.localize("user_userinviteExpiredMessage",void 0,"Welcome to Umbraco! Unfortunately your invite has expired. Please contact your administrator and ask them to resend it."))}>
        </umb-error-layout>`;switch(e&&e==="mfa"&&!g.isMfaEnabled&&(e=void 0),e){case"mfa":return u`
          <umb-mfa-page></umb-mfa-page>`;case"reset":return u`
          <umb-reset-password-page></umb-reset-password-page>`;case"reset-password":return u`
          <umb-new-password-page></umb-new-password-page>`;case"invite-user":return u`
          <umb-invite-page></umb-invite-page>`;default:return u`
          <umb-login-page
            ?allow-password-reset=${this.allowPasswordReset}
            ?username-is-email=${this.usernameIsEmail}>
            <slot></slot>
            <slot name="subheadline" slot="subheadline"></slot>
            <slot name="external" slot="external"></slot>
          </umb-login-page>`}}};Xe=new WeakSet,$r=async function(){const r=this.usernameIsEmail?await d.localize("general_email",void 0,"Email"):await d.localize("general_username",void 0,"Username"),e=await d.localize("general_password",void 0,"Password"),t=await d.localize("general_required",void 0,"Required");this._usernameInput=Er({id:"username-input",type:"text",name:"username",autocomplete:"username",requiredMessage:t,label:r,inputmode:this.usernameIsEmail?"email":""}),this._passwordInput=Er({id:"password-input",type:"password",name:"password",autocomplete:"current-password",requiredMessage:t,label:e,inputmode:""}),this._usernameLabel=Cr({forId:"username-input",localizeAlias:this.usernameIsEmail?"general_email":"general_username"}),this._passwordLabel=Cr({forId:"password-input",localizeAlias:"general_password"}),this._usernameLayoutItem=Pr(this._usernameLabel,this._usernameInput),this._passwordLayoutItem=Pr(this._passwordLabel,this._passwordInput),this._form=Yi([this._usernameLayoutItem,this._passwordLayoutItem]),this.insertAdjacentElement("beforeend",this._form)},O([p({type:Boolean,attribute:"disable-local-login"})],x.prototype,"disableLocalLogin",1),O([p({attribute:"background-image"})],x.prototype,"backgroundImage",2),O([p({attribute:"logo-image"})],x.prototype,"logoImage",2),O([p({attribute:"logo-image-alternative"})],x.prototype,"logoImageAlternative",2),O([p({type:Boolean,attribute:"username-is-email"})],x.prototype,"usernameIsEmail",2),O([p({type:Boolean,attribute:"allow-password-reset"})],x.prototype,"allowPasswordReset",2),O([p({type:Boolean,attribute:"allow-user-invite"})],x.prototype,"allowUserInvite",2),O([p({attribute:"return-url"})],x.prototype,"returnPath",1),x=O([_("umb-auth")],x);var Gi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Zi=(r,e,t,i)=>{for(var o=i>1?void 0:i?Ki(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Gi(e,t,o),o},Qi=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Xi=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},eo=(r,e,t)=>(Qi(r,e,"access private method"),t),et,xr;let tt=class extends y{constructor(){super(...arguments),Xi(this,et)}render(){return u`
			<button type="button" @click=${eo(this,et,xr)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
				<span><umb-localize key="login_returnToLogin">Return to login form</umb-localize></span>
			</button>
		`}};et=new WeakSet,xr=function(){this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"login"}}))},tt.styles=[P`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			button {
				cursor: pointer;
				background: none;
				border: 0;
				height: 1rem;
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				gap: var(--uui-size-space-1);
				align-self: center;
				text-decoration: none;
				display: inline-flex;
				line-height: 1;
				font-size: 14px;
				font-family: var(--uui-font-family);
			}
			button svg {
				width: 1rem;
			}
			button:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`],tt=Zi([_("umb-back-to-login-button")],tt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(r,e,t){return r?e():t?.()}var to=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Pe=(r,e,t,i)=>{for(var o=i>1?void 0:i?ro(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&to(e,t,o),o},io=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Sr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Ar=(r,e,t)=>(io(r,e,"access private method"),t),rt,zr,it,Or;let J=class extends y{constructor(){super(...arguments),Sr(this,rt),Sr(this,it)}updated(r){super.updated(r),r.has("backgroundImage")&&(this.style.setProperty("--logo-alternative-display",this.backgroundImage?"none":"unset"),this.style.setProperty("--image",`url('${this.backgroundImage}') no-repeat center center/cover`))}render(){return u`
      <div id=${this.backgroundImage?"main":"main-no-image"}>
        ${Ar(this,rt,zr).call(this)} ${Ar(this,it,Or).call(this)}
      </div>
      ${Ce(this.logoImageAlternative,()=>u`<img id="logo-on-background" src=${this.logoImageAlternative} alt="logo" aria-hidden="true"/>`)}
    `}};rt=new WeakSet,zr=function(){return this.backgroundImage?u`
      <div id="image-container">
        <div id="image">
          <svg
            id="curve-top"
            width="1746"
            height="1374"
            viewBox="0 0 1746 1374"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15"/>
          </svg>
          <svg
            id="curve-bottom"
            width="1364"
            height="552"
            viewBox="0 0 1364 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15"/>
          </svg>
          ${Ce(this.logoImage,()=>u`<img id="logo-on-image" src=${this.logoImage} alt="logo" aria-hidden="true"/>`)}
        </div>
      </div>
    `:f},it=new WeakSet,Or=function(){return u`
      <div id="content-container">
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `},J.styles=[P`
      :host {
        --uui-color-interactive: var(--umb-login-primary-color, #283a97);
        --uui-button-border-radius: var(--umb-login-button-border-radius, 45px);
        --uui-color-default: var(--uui-color-interactive);
        --uui-button-height: 42px;
        --uui-select-height: 38px;
        --input-height: 40px;
        --header-font-size: var(--umb-login-header-font-size, 3rem);
        --header-secondary-font-size: var(--umb-login-header-secondary-font-size, 2.4rem);
        --curves-color: var(--umb-login-curves-color, #f5c1bc);
        --curves-display: var(--umb-login-curves-display, inline);
        display: block;
        background: var(--umb-login-background, #f4f4f4);
        color: var(--umb-login-text-color, #000);
      }
      #main-no-image,
      #main {
        max-width: 1920px;
        display: flex;
        justify-content: center;
        height: 100vh;
        padding: 8px;
        box-sizing: border-box;
        margin: 0 auto;
      }
      #image-container {
        display: var(--umb-login-image-display, none);
        width: 100%;
      }
      #content-container {
        background: var(--umb-login-content-background, none);
        display: var(--umb-login-content-display, flex);
        width: var(--umb-login-content-width, 100%);
        height: var(--umb-login-content-height, 100%);
        box-sizing: border-box;
        overflow: auto;
        border-radius: var(--umb-login-content-border-radius, 0);
      }
      #content {
        max-width: 360px;
        margin: auto;
        width: 100%;
      }
      #image {
        background: var(--umb-login-image, var(--image));
        width: 100%;
        height: 100%;
        border-radius: var(--umb-login-image-border-radius, 38px);
        position: relative;
        overflow: hidden;
        color: var(--curves-color);
      }
      #image svg {
        position: absolute;
        width: 45%;
        height: fit-content;
        display: var(--curves-display);
      }
      #curve-top {
        top: 0;
        right: 0;
      }
      #curve-bottom {
        bottom: 0;
        left: 0;
      }
      #logo-on-image,
      #logo-on-background {
        position: absolute;
        top: 24px;
        left: 24px;
        height: 55px;
      }
      @media only screen and (min-width: 900px) {
        :host {
          --header-font-size: var(--umb-login-header-font-size-large, 4rem);
        }
        #main {
          padding: 32px;
          padding-right: 0;
          align-items: var(--umb-login-align-items, unset);
        }
        #image-container {
          display: var(--umb-login-image-display, block);
        }
        #content-container {
          display: var(--umb-login-content-display, flex);
          padding: 16px;
        }
        #logo-on-background {
          display: var(--logo-alternative-display);
        }
      }
    `],Pe([p({attribute:"background-image"})],J.prototype,"backgroundImage",2),Pe([p({attribute:"logo-image"})],J.prototype,"logoImage",2),Pe([p({attribute:"logo-image-alternative"})],J.prototype,"logoImageAlternative",2),J=Pe([_("umb-auth-layout")],J);var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ot=(r,e,t,i)=>{for(var o=i>1?void 0:i?so(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&oo(e,t,o),o},kr=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},no=(r,e,t)=>(kr(r,e,"read from private field"),t?t.call(r):e.get(r)),xe=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},st=(r,e,t)=>(kr(r,e,"access private method"),t),nt,at,Ir,lt,Ur,ut,Tr;let se=class extends y{constructor(){super(...arguments),xe(this,at),xe(this,lt),xe(this,ut),this.resetCallState=void 0,this.error="",xe(this,nt,async r=>{r.preventDefault();const e=r.target;if(!e||!e.checkValidity())return;const i=new FormData(e).get("email");this.resetCallState="waiting";const o=await g.resetPassword(i);this.resetCallState=o.status===200?"success":"failed",this.error=o.error||""})}render(){return this.resetCallState==="success"?st(this,ut,Tr).call(this):st(this,at,Ir).call(this)}};nt=new WeakMap,at=new WeakSet,Ir=function(){return u`
      <uui-form>
        <form id="LoginForm" name="login" @submit="${no(this,nt)}">
          <header id="header">
            <h1>
              <umb-localize key="login_forgottenPassword">Forgotten password?</umb-localize>
            </h1>
            <span>
							<umb-localize key="login_forgottenPasswordInstruction"
              >An email will be sent to the address specified with a link to reset your password</umb-localize
              >
						</span>
          </header>
          <uui-form-layout-item>
            <uui-label for="email" slot="label" required>
              <umb-localize key="general_email">Email</umb-localize>
            </uui-label>
            <uui-input
              type="email"
              id="email"
              name="email"
              .label=${v(d.localize("general_email",void 0,"Email"))}
              required
              required-message=${v(d.localize("general_required",void 0,"Required"))}></uui-input>
          </uui-form-layout-item>
          ${st(this,lt,Ur).call(this)}
          <uui-button
            type="submit"
            .label=${v(d.localize("general_submit",void 0,"Submit"))}
            look="primary"
            color="default"
            .state=${this.resetCallState}></uui-button>
        </form>
      </uui-form>
      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `},lt=new WeakSet,Ur=function(){return!this.error||this.resetCallState!=="failed"?f:u`<span class="text-danger">${this.error}</span>`},ut=new WeakSet,Tr=function(){return u`
      <umb-confirmation-layout
        header=${v(d.localize("login_forgottenPassword",void 0,"Forgotten password?"))}
        message=${v(d.localize("login_requestPasswordResetConfirmation",void 0,"An email with password reset instructions will be sent to the specified address if it matched our records"))}>
      </umb-confirmation-layout>
    `},se.styles=[P`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }
      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }
      uui-form-layout-item {
        margin: 0;
      }
      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }
      uui-input {
        width: 100%;
      }
      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
      #resend {
        display: inline-flex;
        font-size: 14px;
        align-self: center;
        gap: var(--uui-size-space-1);
      }
      #resend a {
        color: var(--uui-color-selected);
        font-weight: 600;
        text-decoration: none;
      }
      #resend a:hover {
        color: var(--uui-color-interactive-emphasis);
      }
    `],ot([w()],se.prototype,"resetCallState",2),ot([w()],se.prototype,"error",2),se=ot([_("umb-reset-password-page")],se);var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,N=(r,e,t,i)=>{for(var o=i>1?void 0:i?lo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&ao(e,t,o),o},uo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Lr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Rr=(r,e,t)=>(uo(r,e,"access private method"),t),ct,Mr,dt,Dr;let T=class extends y{constructor(){super(),Lr(this,ct),Lr(this,dt),this.state=void 0,this.page="new",this.error="",this.userId=null,this.resetCode=null;const r=new URLSearchParams(window.location.search);this.resetCode=r.get("resetCode"),this.userId=r.get("userId"),(!this.userId||!this.resetCode)&&(this.page="error")}render(){return this.userId&&this.resetCode?Rr(this,dt,Dr).call(this):u`
        <umb-error-layout
          header=${v(d.localize("general_error",void 0,"Error"))}
          message=${v(d.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
        </umb-error-layout>`}};ct=new WeakSet,Mr=async function(r){r.preventDefault();const e=new URLSearchParams(window.location.search),t=e.get("resetCode"),i=e.get("userId"),o=r.detail.password;if(!t||!i)return;this.state="waiting";const s=await g.newPassword(o,t,i);this.state=s.status===200?"success":"failed",this.page=s.status===200?"done":"new",this.error=s.error||""},dt=new WeakSet,Dr=function(){switch(this.page){case"new":return u`
          <umb-new-password-layout
            @submit=${Rr(this,ct,Mr)}
            .userId=${this.userId}
            .state=${this.state}
            .error=${this.error}></umb-new-password-layout>`;case"error":return u`
          <umb-error-layout
            header=${v(d.localize("general_error",void 0,"Error"))}
            message=${v(d.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
          </umb-error-layout>`;case"done":return u`
          <umb-confirmation-layout
            header=${v(d.localize("general_success",void 0,"Success"))}
            message=${v(d.localize("login_setPasswordConfirmation",void 0,"Your new password has been set and you may now use it to log in."))}>
          </umb-confirmation-layout>`}},N([He("#confirmPassword")],T.prototype,"confirmPasswordElement",2),N([w()],T.prototype,"state",2),N([w()],T.prototype,"page",2),N([w()],T.prototype,"error",2),N([w()],T.prototype,"userId",2),N([w()],T.prototype,"resetCode",2),T=N([_("umb-new-password-page")],T);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends sr{constructor(e){if(super(e),this.et=f,e.type!==ir.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.ft=void 0,this.et=e;if(e===A)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ht.directiveName="unsafeHTML",ht.resultType=1;const Nr=or(ht);async function pt(r){if(r.endsWith(".html"))return fetch(r).then(t=>t.text());const e=await import(r);if(!e.default)throw new Error("No default export found");return new e.default}function ft(r){return typeof r=="string"?u`${Nr(r)}`:r}var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,ne=(r,e,t,i)=>{for(var o=i>1?void 0:i?ho(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&co(e,t,o),o},po=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},fo=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},vo=(r,e,t)=>(po(r,e,"access private method"),t),vt,Vr;let V=class extends y{constructor(){super(),fo(this,vt),this.providers=[],this.loading=!0,this.error=null,vo(this,vt,Vr).call(this)}async handleSubmit(r){r.preventDefault(),this.error=null;const e=r.target;if(!e)return;const t=e.elements.namedItem("2facode");if(t&&(t.error=!1,t.errorMessage=""),!e.checkValidity())return;const i=new FormData(e);let o=i.get("provider");if(o||(o=this.providers[0].value),!o){this.error="No provider selected";return}const s=i.get("token");this.buttonState="waiting";try{const n=await g.validateMfaCode(s,o);if(n.error){t?(t.error=!0,t.errorMessage=n.error):this.error=n.error,this.buttonState="failed";return}this.buttonState="success";const a=g.returnPath;a&&(location.href=a),this.dispatchEvent(new CustomEvent("umb-login-success",{bubbles:!0,composed:!0,detail:n.data}))}catch(n){n instanceof Error?this.error=n.message??"Unknown error":this.error="Unknown error",this.buttonState="failed",this.dispatchEvent(new CustomEvent("umb-login-failed",{bubbles:!0,composed:!0,detail:n}))}}renderDefaultView(){return u`
      <uui-form>
        <form id="LoginForm" @submit=${this.handleSubmit}>
          <header id="header">
            <h1>
              <umb-localize key="login_2faTitle">One last step</umb-localize>
            </h1>
            <p>
              <umb-localize key="login_2faText">
                You have enabled 2-factor authentication and must verify your identity.
              </umb-localize>
            </p>
          </header>
          <!-- if there's only one provider active, it will skip this step! -->
          ${this.providers.length>1?u`
              <uui-form-layout-item label="@login_2faMultipleText">
                <uui-label id="providerLabel" for="provider" slot="label" required>
                  <umb-localize key="login_2faMultipleText">Please choose a 2-factor provider</umb-localize>
                </uui-label>
                <div class="uui-input-wrapper">
                  <uui-select id="provider" name="provider" .options=${this.providers} aria-required="true" required>
                  </uui-select>
                </div>
              </uui-form-layout-item>
            `:f}
          <uui-form-layout-item>
            <uui-label id="2facodeLabel" for="2facode" slot="label" required>
              <umb-localize key="login_2faCodeInput">Verification code</umb-localize>
            </uui-label>
            <uui-input
              autofocus
              id="2facode"
              type="text"
              name="token"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder=${v(d.localize("login_2faCodeInputHelp"),"Please enter the verification code")}
              aria-required="true"
              required
              required-message=${v(d.localize("login_2faCodeInputHelp"),"Please enter the verification code")}
              style="width:100%;">
            </uui-input>
          </uui-form-layout-item>
          ${this.error?u` <span class="text-danger">${this.error}</span> `:f}
          <uui-button
            .state=${this.buttonState}
            button-style="success"
            look="primary"
            color="default"
            label=${v(d.localize("general_validate"),"Validate")}
            type="submit"></uui-button>
        </form>
      </uui-form>
      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `}async renderCustomView(){const r=g.twoFactorView;if(!r)return f;try{const e=await pt(r);return typeof e=="object"&&(e.providers=this.providers.map(t=>t.value),e.returnPath=g.returnPath),ft(e)}catch(e){const t=e instanceof Error?e.message:"Unknown error";return console.group("[MFA login] Failed to load custom view"),console.log("Element reference",this),console.log("Custom view",r),console.error("Failed to load custom view:",e),console.groupEnd(),u`<span class="text-danger">${t}</span>`}}render(){return this.loading?u`
        <uui-loader-bar></uui-loader-bar>`:g.twoFactorView?v(this.renderCustomView(),u`
          <uui-loader-bar></uui-loader-bar>`):this.renderDefaultView()}};vt=new WeakSet,Vr=async function(){try{const r=await g.getMfaProviders();this.providers=r.providers.map(e=>({name:e,value:e,selected:!1})),this.providers.length&&(this.providers[0].selected=!0),r.error&&(this.error=r.error)}catch(r){r instanceof Error?this.error=r.message??"Unknown error":this.error="Unknown error",this.providers=[]}this.loading=!1},V.styles=[P`
      #header {
        text-align: center;
      }
      #header h1 {
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }
      .uui-input-wrapper {
        background-color: var(--uui-color-surface);
      }
      uui-form-layout-item {
        margin: 0;
      }
      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }
      uui-input {
        width: 100%;
      }
      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `],ne([w()],V.prototype,"providers",2),ne([w()],V.prototype,"loading",2),ne([w()],V.prototype,"buttonState",2),ne([w()],V.prototype,"error",2),V=ne([_("umb-mfa-page")],V);var mo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,W=(r,e,t,i)=>{for(var o=i>1?void 0:i?go(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&mo(e,t,o),o},mt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Y=(r,e,t)=>(mt(r,e,"read from private field"),t?t.call(r):e.get(r)),q=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},bo=(r,e,t,i)=>(mt(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),gt=(r,e,t)=>(mt(r,e,"access private method"),t),G,bt,Wr,wt,yt,qr,_t,$t,Hr,Et,jr;let k=class extends y{constructor(){super(...arguments),q(this,bt),q(this,yt),q(this,$t),q(this,Et),this.usernameIsEmail=!1,this.allowPasswordReset=!1,this._loginState=void 0,this._loginError="",q(this,G,void 0),q(this,wt,async r=>{r.preventDefault();const e=r.target;if(!e||!e.checkValidity())return;const t=new FormData(e),i=t.get("username"),o=t.get("password"),s=t.has("persist");this._loginState="waiting";const n=await g.login({username:i,password:o,persist:s});if(this._loginError=n.error||"",this._loginState=n.error?"failed":"success",n.status===402){g.isMfaEnabled=!0,n.twoFactorView&&(g.twoFactorView=n.twoFactorView),this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"mfa"}}));return}if(n.error){this.dispatchEvent(new CustomEvent("umb-login-failed",{bubbles:!0,composed:!0,detail:n}));return}const a=g.returnPath;a&&(location.href=a),this.dispatchEvent(new CustomEvent("umb-login-success",{bubbles:!0,composed:!0,detail:n.data}))}),q(this,_t,()=>{Y(this,G)?.requestSubmit()})}get disableLocalLogin(){return g.disableLocalLogin}render(){return u`
      <header id="header">
        <h1 id="greeting">
          <umb-localize .key=${Y(this,yt,qr)}></umb-localize>
        </h1>
        <slot name="subheadline"></slot>
      </header>
      ${this.disableLocalLogin?f:u`
          <slot @slotchange=${gt(this,bt,Wr)}></slot>
          <div id="secondary-actions">
            ${Ce(g.supportsPersistLogin,()=>u`
                <uui-form-layout-item>
                  <uui-checkbox
                    name="persist"
                    .label=${v(d.localize("user_rememberMe",void 0,"Remember me"))}>
                    <umb-localize key="user_rememberMe">Remember me</umb-localize>
                  </uui-checkbox>
                </uui-form-layout-item>`)}
            ${Ce(this.allowPasswordReset,()=>u`
                  <button type="button" id="forgot-password" @click=${gt(this,Et,jr)}>
                    <umb-localize key="login_forgottenPassword">Forgotten password?</umb-localize>
                  </button>`)}
          </div>
          <uui-button
            type="submit"
            id="umb-login-button"
            look="primary"
            @click=${Y(this,_t)}
            .label=${v(d.localize("general_login",void 0,"Login"),"Login")}
            color="default"
            .state=${this._loginState}></uui-button>
          ${gt(this,$t,Hr).call(this)}
        `}
      <umb-external-login-providers-layout .showDivider=${!this.disableLocalLogin}>
        <slot name="external"></slot>
      </umb-external-login-providers-layout>
    `}};G=new WeakMap,bt=new WeakSet,Wr=async function(){bo(this,G,this.slottedElements?.find(r=>r.id==="umb-login-form")),Y(this,G)&&(Y(this,G).onsubmit=Y(this,wt))},wt=new WeakMap,yt=new WeakSet,qr=function(){return["login_greeting0","login_greeting1","login_greeting2","login_greeting3","login_greeting4","login_greeting5","login_greeting6"][new Date().getDay()]},_t=new WeakMap,$t=new WeakSet,Hr=function(){return!this._loginError||this._loginState!=="failed"?f:u`<span class="text-error text-danger">${this._loginError}</span>`},Et=new WeakSet,jr=function(){this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"reset"}}))},k.styles=[P`
      :host {
        display: flex;
        flex-direction: column;
      }
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }
      #greeting {
        color: var(--uui-color-interactive);
        text-align: center;
        font-weight: 400;
        font-size: var(--header-font-size);
        margin: 0 0 var(--uui-size-layout-1);
        line-height: 1.2;
      }
      #umb-login-button {
        margin-top: var(--uui-size-space-4);
        width: 100%;
      }
      #forgot-password {
        cursor: pointer;
        background: none;
        border: 0;
        height: 1rem;
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        gap: var(--uui-size-space-1);
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        line-height: 1;
        font-size: 14px;
        font-family: var(--uui-font-family);
        margin-left: auto;
        margin-bottom: var(--uui-size-space-3);
      }
      #forgot-password:hover {
        color: var(--uui-color-interactive-emphasis);
      }
      .text-error {
        margin-top: var(--uui-size-space-4);
      }
      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
      #secondary-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `],W([p({type:Boolean,attribute:"username-is-email"})],k.prototype,"usernameIsEmail",2),W([rr({flatten:!0})],k.prototype,"slottedElements",2),W([p({type:Boolean,attribute:"allow-password-reset"})],k.prototype,"allowPasswordReset",2),W([w()],k.prototype,"_loginState",2),W([w()],k.prototype,"_loginError",2),W([w()],k.prototype,"disableLocalLogin",1),k=W([_("umb-login-page")],k);var wo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,Se=(r,e,t,i)=>{for(var o=i>1?void 0:i?yo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&wo(e,t,o),o},_o=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},$o=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Eo=(r,e,t)=>(_o(r,e,"access private method"),t),Ct,Fr;let ae=class extends y{constructor(){super(...arguments),$o(this,Ct),this.state=void 0,this.error=""}async firstUpdated(r){super.firstUpdated(r);const e=await g.getInvitedUser();if(!e.user?.id){this.error="No invited user found";return}this.invitedUser=e.user}render(){return this.invitedUser?u`
        <umb-new-password-layout
          @submit=${Eo(this,Ct,Fr)}
          .userId=${this.invitedUser.id}
          .userName=${this.invitedUser.name}
          .state=${this.state}
          .error=${this.error}></umb-new-password-layout>`:this.error?u`
          <umb-error-layout
            .header=${v(d.localize("general_error",void 0,"Error"))}
            .message=${this.error}></umb-error-layout>`:u`
          <umb-error-layout
            header=${v(d.localize("general_error",void 0,"Error"))}
            message=${v(d.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
          </umb-error-layout>`}};Ct=new WeakSet,Fr=async function(r){r.preventDefault();const e=r.detail.password;if(!e)return;this.state="waiting";const t=await g.newInvitedUserPassword(e);if(t.error){this.error=t.error,this.state="failed";return}this.state="success",window.location.href=g.returnPath},Se([w()],ae.prototype,"state",2),Se([w()],ae.prototype,"error",2),Se([w()],ae.prototype,"invitedUser",2),ae=Se([_("umb-invite-page")],ae);var Co=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Pt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Po(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Co(e,t,o),o};let le=class extends y{constructor(){super(...arguments),this.showDivider=!0}firstUpdated(){this.slottedElements?.length?this.toggleAttribute("empty",!1):this.toggleAttribute("empty",!0)}render(){return u`
      ${this.showDivider?u`
          <div id="divider" aria-hidden="true">
            <span>${v(d.localize("general_or",void 0,"or").then(r=>r.toLocaleLowerCase()))}</span>
          </div>
        `:f}
      <div>
        <slot></slot>
      </div>
    `}};le.styles=[P`
      :host {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
      }
      :host([empty]) {
        display: none;
      }
      slot {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-4);
      }
      #divider {
        width: calc(100% - 18px);
        margin: 0 auto;
        margin-bottom: 16px;
        text-align: center;
        z-index: 0;
        overflow: hidden;
      }
      #divider span {
        padding-inline: 10px;
        position: relative;
        color: var(--uui-color-border-emphasis);
      }
      #divider span::before,
      #divider span::after {
        content: '';
        display: block;
        width: 500px; /* Arbitrary value, just be bigger than 50% of the max width of the container */
        height: 1px;
        background-color: var(--uui-color-border);
        position: absolute;
        top: calc(50% + 1px);
      }
      #divider span::before {
        right: 100%;
      }
      #divider span::after {
        left: 100%;
      }
    `],Pt([p({type:Boolean,attribute:"divider"})],le.prototype,"showDivider",2),Pt([rr({flatten:!0})],le.prototype,"slottedElements",2),le=Pt([_("umb-external-login-providers-layout")],le);var xo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,I=(r,e,t,i)=>{for(var o=i>1?void 0:i?So(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&xo(e,t,o),o},Br=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Ao=(r,e,t)=>(Br(r,e,"read from private field"),t?t.call(r):e.get(r)),zo=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Oo=(r,e,t,i)=>(Br(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),Ae;let C=class extends y{constructor(){super(),this.displayName="",this.providerName="",this.userViewState="loggingIn",this.icon="icon-lock",this.buttonLook="outline",this.buttonColor="default",zo(this,Ae,""),new URLSearchParams(window.location.search).get("logout")==="true"&&(this.userViewState="loggedOut")}set externalLoginUrl(r){const e=new URL(r,window.location.origin),t=new URLSearchParams(e.search);e.searchParams.append("redirectUrl",decodeURIComponent(t.get("returnPath")??"")),Oo(this,Ae,e.pathname+e.search)}get externalLoginUrl(){return Ao(this,Ae)}render(){return this.customView?v(this.renderCustomView(),u`
        <uui-loader-bar></uui-loader-bar>`):this.renderDefaultView()}renderDefaultView(){return u`
      <form id="defaultView" method="post" action=${this.externalLoginUrl}>
        <uui-button
          type="submit"
          name="provider"
          .value=${this.providerName}
          .label=${v(d.localize("login_signInWith",void 0,"Sign in with").then(r=>`${r} ${this.displayName}`))}
          .look=${this.buttonLook}
          .color=${this.buttonColor}>
          ${this.displayName?u`
              <div>
                <uui-icon name=${this.icon}></uui-icon>
                <umb-localize key="login_signInWith">Sign in with</umb-localize>
                ${this.displayName}
              </div>
            `:f}
          <slot></slot>
        </uui-button>
      </form>
    `}async renderCustomView(){try{if(!this.customView)return;const r=await pt(this.customView);return typeof r=="object"&&(r.displayName=this.displayName,r.providerName=this.providerName,r.externalLoginUrl=this.externalLoginUrl,r.userViewState=this.userViewState),ft(r)}catch(r){console.group("[External login] Failed to load custom view"),console.log("Provider name",this.providerName),console.log("Element reference",this),console.log("Custom view",this.customView),console.error("Failed to load custom view:",r),console.groupEnd()}}};Ae=new WeakMap,C.styles=[P`
      #defaultView uui-button {
        width: 100%;
        --uui-button-font-weight: 400;
      }
      #defaultView uui-button div {
        /* TODO: Remove this when uui-button has setting for aligning content */
        position: absolute;
        top: 50%;
        left: 0;
        margin: auto;
        transform: translateY(-50%);
        text-align: left;
        padding-left: 15px;
      }
      #defaultView uui-icon {
        color: #00000080;
        padding-right: 2px;
      }
      #defaultView button {
        font-size: var(--uui-button-font-size);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-button-border-radius);
        width: 100%;
        padding: 9px;
        text-align: left;
        background-color: var(--uui-color-surface);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-2);
        box-sizing: border-box;
        line-height: 1.1; /* makes the text vertically centered */
        color: var(--uui-color-interactive);
      }
      #defaultView button:hover {
        color: var(--uui-color-interactive-emphasis);
        border-color: var(--uui-color-border-standalone);
      }
    `],I([p({attribute:"custom-view"})],C.prototype,"customView",2),I([p({attribute:"display-name"})],C.prototype,"displayName",2),I([p({attribute:"provider-name"})],C.prototype,"providerName",2),I([p({attribute:"user-view-state"})],C.prototype,"userViewState",2),I([p({attribute:"external-login-url"})],C.prototype,"externalLoginUrl",1),I([p({attribute:"icon"})],C.prototype,"icon",2),I([p({attribute:"button-look"})],C.prototype,"buttonLook",2),I([p({attribute:"button-color"})],C.prototype,"buttonColor",2),C=I([_("umb-external-login-provider")],C);var ko=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,L=(r,e,t,i)=>{for(var o=i>1?void 0:i?Io(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&ko(e,t,o),o},Uo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Jr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Yr=(r,e,t)=>(Uo(r,e,"access private method"),t),xt,Gr,St,Kr;let S=class extends y{constructor(){super(...arguments),Jr(this,xt),Jr(this,St),this.state=void 0,this.error=""}async firstUpdated(r){if(super.firstUpdated(r),this.userId){const e=await g.getPasswordConfig(this.userId);this.passwordConfig=e.data}}renderHeader(){return this.userName?u`
        <h1>Hi, ${this.userName}</h1>
        <span>
          <umb-localize key="user_userinviteWelcomeMessage">
            Welcome to Umbraco! Just need to get your password setup and then you're good to go
          </umb-localize>
        </span>
      `:u`
        <h1>
          <umb-localize key="user_newPassword">New password</umb-localize>
        </h1>
        <span>
            <umb-localize key="login_setPasswordInstruction">Please provide a new password.</umb-localize>
        </span>
      `}render(){return u`
      <uui-form>
        <form id="LoginForm" name="login" @submit=${Yr(this,xt,Gr)}>
          <header id="header">${this.renderHeader()}</header>
          <uui-form-layout-item>
            <uui-label id="passwordLabel" for="password" slot="label" required>
              <umb-localize key="user_newPassword">New password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              .label=${v(d.localize("user_newPassword",void 0,"New password"))}
              required
              required-message=${v(d.localize("user_passwordIsBlank",void 0,"Your new password cannot be blank!"))}></uui-input-password>
          </uui-form-layout-item>
          <uui-form-layout-item>
            <uui-label id="confirmPasswordLabel" for="confirmPassword" slot="label" required>
              <umb-localize key="user_confirmNewPassword">Confirm new password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="new-password"
              .label=${v(d.localize("user_confirmNewPassword",void 0,"Confirm new password"))}
              required
              required-message=${v(d.localize("general_required",void 0,"Required"))}></uui-input-password>
          </uui-form-layout-item>
          ${Yr(this,St,Kr).call(this)}
          <uui-button
            type="submit"
            label=${v(d.localize("general_continue",void 0,"Continue"))}
            look="primary"
            color="default"
            .state=${this.state}></uui-button>
        </form>
      </uui-form>
      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `}};xt=new WeakSet,Gr=async function(r){if(r.preventDefault(),!this.passwordConfig)return;const e=r.target;if(this.passwordElement.setCustomValidity(""),this.confirmPasswordElement.setCustomValidity(""),!e||!e.checkValidity())return;const t=new FormData(e),i=t.get("password"),o=t.get("confirmPassword");let s=!1;if(this.passwordConfig.minPasswordLength>0&&i.length<this.passwordConfig.minPasswordLength&&(s=!0),this.passwordConfig.minNonAlphaNumericChars>0&&i.replace(/[a-zA-Z0-9]/g,"").length<this.passwordConfig?.minNonAlphaNumericChars&&(s=!0),s){const n=await d.localize("errorHandling_errorInPasswordFormat",[this.passwordConfig.minPasswordLength,this.passwordConfig.minNonAlphaNumericChars],"The password doesn't meet the minimum requirements!");this.passwordElement.setCustomValidity(n);return}if(i!==o){const n=await d.localize("user_passwordMismatch",void 0,"The confirmed password doesn't match the new password!");this.confirmPasswordElement.setCustomValidity(n);return}this.dispatchEvent(new CustomEvent("submit",{detail:{password:i}}))},St=new WeakSet,Kr=function(){return!this.error||this.state!=="failed"?f:u`<span class="text-danger">${this.error}</span>`},S.styles=[P`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }
      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      uui-form-layout-item {
        margin: 0;
      }
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }
      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `],L([He("#password")],S.prototype,"passwordElement",2),L([He("#confirmPassword")],S.prototype,"confirmPasswordElement",2),L([p()],S.prototype,"state",2),L([p()],S.prototype,"error",2),L([p()],S.prototype,"userId",2),L([p()],S.prototype,"userName",2),L([w()],S.prototype,"passwordConfig",2),S=L([_("umb-new-password-layout")],S);var To=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,At=(r,e,t,i)=>{for(var o=i>1?void 0:i?Lo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&To(e,t,o),o};let ue=class extends y{constructor(){super(...arguments),this.header="",this.message=""}render(){return u`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>
      <umb-back-to-login-button></umb-back-to-login-button>
      <slot></slot>
    `}};ue.styles=[P`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }
      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }
      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `],At([p({type:String})],ue.prototype,"header",2),At([p({type:String})],ue.prototype,"message",2),ue=At([_("umb-confirmation-layout")],ue);var Ro=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,zt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Mo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Ro(e,t,o),o};let ce=class extends y{constructor(){super(...arguments),this.header="",this.message=""}render(){return u`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>
      <slot></slot>
      <umb-back-to-login-button></umb-back-to-login-button>
    `}};ce.styles=[P`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }
      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }
      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }
      ::slotted(uui-button) {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `],zt([p({type:String})],ce.prototype,"header",2),zt([p({type:String})],ce.prototype,"message",2),ce=zt([_("umb-error-layout")],ce);var Do=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Vo=(r,e,t,i)=>{for(var o=i>1?void 0:i?No(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Do(e,t,o),o};let Ot=class extends Z.UUIInputElement{firstUpdated(){const r=this.querySelector("input");r?.removeAttribute("id"),r?.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),r?.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}getFormElement(){const r=this.querySelector("input");if(!r)throw new Error("Form element not found");return r}createRenderRoot(){return this}};Ot.styles=[...Z.UUIInputElement.styles],Ot=Vo([_("umb-login-input")],Ot);var Wo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Ho=(r,e,t,i)=>{for(var o=i>1?void 0:i?qo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Wo(e,t,o),o};class jo extends Z.UUIIconRegistry{acceptIcon(e){if(e.startsWith("{{")&&e.endsWith("}}"))return!1;const t=this.provideIcon(e);return this.#r().subscribe(i=>{i[e]?t.svg=i[e]:console.warn(`Icon ${e} not found`)}),!0}#e=!1;#t=new yr(1);#r(){return this.#e||(this.#e=!0,fetch("backoffice/umbracoapi/icon/geticons").then(e=>{if(!e.ok)throw new Error("Could not fetch icons");return e.json()}).then(e=>{this.#t.next(e),this.#t.complete()})),this.#t.asObservable()}}let Zr=class extends Z.UUIIconRegistryElement{constructor(){super(),new Z.UUIIconRegistryEssential().attach(this),this.registry=new jo}createRenderRoot(){return this}};Zr=Ho([_("umb-backoffice-icon-registry")],Zr);var Fo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var o=i>1?void 0:i?Bo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Fo(e,t,o),o},kt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},K=(r,e,t)=>(kt(r,e,"read from private field"),t?t.call(r):e.get(r)),It=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Qr=(r,e,t,i)=>(kt(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),Xr=(r,e,t)=>(kt(r,e,"access private method"),t),de,H,Oe,Ut;let he=class extends y{constructor(){super(...arguments),It(this,Oe),this.component=null,It(this,de,void 0),It(this,H,void 0)}set customView(r){Qr(this,H,r),Xr(this,Oe,Ut).call(this)}set args(r){Qr(this,de,r),Xr(this,Oe,Ut).call(this)}render(){return v(this.component)}};de=new WeakMap,H=new WeakMap,Oe=new WeakSet,Ut=async function(){if(!K(this,H)||!K(this,H).endsWith(".js")&&!K(this,H).endsWith(".html"))return;const r=await pt(K(this,H));K(this,de)&&Object.entries(K(this,de)).forEach(([e,t])=>{r[e]=t}),this.component=ft(r)},ze([p({attribute:"custom-view"})],he.prototype,"customView",1),ze([p({type:Object,attribute:"args"})],he.prototype,"args",1),ze([w()],he.prototype,"component",2),he=ze([_("umb-custom-view")],he);var Jo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Yo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Jo(e,t,o),o},Go=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Ko=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Zo=(r,e,t)=>(Go(r,e,"access private method"),t),Lt,ei;let ke=class extends y{constructor(){super(...arguments),Ko(this,Lt),this.value=""}connectedCallback(){super.connectedCallback(),Zo(this,Lt,ei).call(this)}async localize(r,e){return d.localize(r,void 0,e)}render(){return this.value?u`${Nr(this.value)}`:u`<slot></slot>`}};Lt=new WeakSet,ei=async function(){try{this.value=await this.localize(this.key)}catch(r){console.error("Failed to localize key:",this.key,r)}},Tt([p({type:String})],ke.prototype,"key",2),Tt([w()],ke.prototype,"value",2),ke=Tt([_("umb-localize")],ke)})(uui);
//# sourceMappingURL=/umbraco/login/login.iife.js.map;