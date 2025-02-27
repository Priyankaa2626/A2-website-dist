(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const lt={},Ur=[],Fn=()=>{},Dm=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),Vt=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Um=Object.prototype.hasOwnProperty,tt=(t,e)=>Um.call(t,e),Fe=Array.isArray,Ir=t=>Zo(t)==="[object Map]",Nd=t=>Zo(t)==="[object Set]",ze=t=>typeof t=="function",St=t=>typeof t=="string",ri=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",Od=t=>(pt(t)||ze(t))&&ze(t.then)&&ze(t.catch),Fd=Object.prototype.toString,Zo=t=>Fd.call(t),Im=t=>Zo(t).slice(8,-1),Bd=t=>Zo(t)==="[object Object]",cc=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nm=/-(\w)/g,Ai=Jo(t=>t.replace(Nm,(e,n)=>n?n.toUpperCase():"")),Om=/\B([A-Z])/g,or=Jo(t=>t.replace(Om,"-$1").toLowerCase()),Hd=Jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ta=Jo(t=>t?`on${Hd(t)}`:""),yi=(t,e)=>!Object.is(t,e),Mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wc;const Qo=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uc(t){if(Fe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=St(i)?zm(i):uc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(t)||pt(t))return t}const Fm=/;(?![^(]*\))/g,Bm=/:([^]+)/,Hm=/\/\*[^]*?\*\//g;function zm(t){const e={};return t.replace(Hm,"").split(Fm).forEach(n=>{if(n){const i=n.split(Bm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mn(t){let e="";if(St(t))e=t;else if(Fe(t))for(let n=0;n<t.length;n++){const i=mn(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",km=oc(Gm);function Gd(t){return!!t||t===""}const kd=t=>!!(t&&t.__v_isRef===!0),_i=t=>St(t)?t:t==null?"":Fe(t)||pt(t)&&(t.toString===Fd||!ze(t.toString))?kd(t)?_i(t.value):JSON.stringify(t,Vd,2):String(t),Vd=(t,e)=>kd(e)?Vd(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Aa(i,s)+" =>"]=r,n),{})}:Nd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Aa(n))}:ri(e)?Aa(e):pt(e)&&!Fe(e)&&!Bd(e)?String(e):e,Aa=(t,e="")=>{var n;return ri(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class Wd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=an;try{return an=this,e()}finally{an=n}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vm(t){return new Wd(t)}function Wm(){return an}let dt;const wa=new WeakSet;class Xd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&an.active&&an.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xc(this),$d(this);const e=dt,n=Tn;dt=this,Tn=!0;try{return this.fn()}finally{Yd(this),dt=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hc(e);this.deps=this.depsTail=void 0,Xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let qd=0,hs,ps;function jd(t,e=!1){if(t.flags|=8,e){t.next=ps,ps=t;return}t.next=hs,hs=t}function fc(){qd++}function dc(){if(--qd>0)return;if(ps){let e=ps;for(ps=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hs;){let e=hs;for(hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hc(i),Xm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ys))return;t.globalVersion=ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!El(t)){t.flags&=-3;return}const n=dt,i=Tn;dt=t,Tn=!0;try{$d(t);const r=t.fn(t._value);(e.version===0||yi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{dt=n,Tn=i,Yd(t),t.flags&=-3}}function hc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)hc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const Zd=[];function Ci(){Zd.push(Tn),Tn=!1}function Pi(){const t=Zd.pop();Tn=t===void 0?!0:t}function Xc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=dt;dt=void 0;try{e()}finally{dt=n}}}let ys=0;class qm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!dt||!Tn||dt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==dt)n=this.activeLink=new qm(dt,this),dt.deps?(n.prevDep=dt.depsTail,dt.depsTail.nextDep=n,dt.depsTail=n):dt.deps=dt.depsTail=n,Jd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=dt.depsTail,n.nextDep=void 0,dt.depsTail.nextDep=n,dt.depsTail=n,dt.deps===n&&(dt.deps=i)}return n}trigger(e){this.version++,ys++,this.notify(e)}notify(e){fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dc()}}}function Jd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ml=new WeakMap,$i=Symbol(""),bl=Symbol(""),Es=Symbol("");function Bt(t,e,n){if(Tn&&dt){let i=Ml.get(t);i||Ml.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new pc),r.map=i,r.key=n),r.track()}}function Kn(t,e,n,i,r,s){const o=Ml.get(t);if(!o){ys++;return}const a=l=>{l&&l.trigger()};if(fc(),e==="clear")o.forEach(a);else{const l=Fe(t),c=l&&cc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Es||!ri(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get($i)),Ir(t)&&a(o.get(bl)));break;case"delete":l||(a(o.get($i)),Ir(t)&&a(o.get(bl)));break;case"set":Ir(t)&&a(o.get($i));break}}dc()}function cr(t){const e=et(t);return e===t?e:(Bt(e,"iterate",Es),_n(t)?e:e.map(Ht))}function ea(t){return Bt(t=et(t),"iterate",Es),t}const jm={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,Ht)},concat(...t){return cr(this).concat(...t.map(e=>Fe(e)?cr(e):e))},entries(){return Ra(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return Gn(this,"find",t,e,Ht,arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ca(this,"includes",t)},indexOf(...t){return Ca(this,"indexOf",t)},join(t){return cr(this).join(t)},lastIndexOf(...t){return Ca(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...t){return Jr(this,"push",t)},reduce(t,...e){return qc(this,"reduce",t,e)},reduceRight(t,...e){return qc(this,"reduceRight",t,e)},shift(){return Jr(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return Jr(this,"splice",t)},toReversed(){return cr(this).toReversed()},toSorted(t){return cr(this).toSorted(t)},toSpliced(...t){return cr(this).toSpliced(...t)},unshift(...t){return Jr(this,"unshift",t)},values(){return Ra(this,"values",Ht)}};function Ra(t,e,n){const i=ea(t),r=i[e]();return i!==t&&!_n(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const $m=Array.prototype;function Gn(t,e,n,i,r,s){const o=ea(t),a=o!==t&&!_n(t),l=o[e];if(l!==$m[e]){const f=l.apply(t,s);return a?Ht(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ht(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function qc(t,e,n,i){const r=ea(t);let s=n;return r!==t&&(_n(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),r[e](s,...i)}function Ca(t,e,n){const i=et(t);Bt(i,"iterate",Es);const r=i[e](...n);return(r===-1||r===!1)&&_c(n[0])?(n[0]=et(n[0]),i[e](...n)):r}function Jr(t,e,n=[]){Ci(),fc();const i=et(t)[e].apply(t,n);return dc(),Pi(),i}const Ym=oc("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ri));function Km(t){ri(t)||(t=String(t));const e=et(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class eh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?og:rh:s?ih:nh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){let l;if(o&&(l=jm[n]))return l;if(n==="hasOwnProperty")return Km}const a=Reflect.get(e,n,kt(e)?e:i);return(ri(n)?Qd.has(n):Ym(n))||(r||Bt(e,"get",n),s)?a:kt(a)?o&&cc(n)?a:a.value:pt(a)?r?oh(a):Us(a):a}}class th extends eh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=er(s);if(!_n(i)&&!er(i)&&(s=et(s),i=et(i)),!Fe(e)&&kt(s)&&!kt(i))return l?!1:(s.value=i,!0)}const o=Fe(e)&&cc(n)?Number(n)<e.length:tt(e,n),a=Reflect.set(e,n,i,kt(e)?e:r);return e===et(r)&&(o?yi(i,s)&&Kn(e,"set",n,i):Kn(e,"add",n,i)),a}deleteProperty(e,n){const i=tt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Kn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ri(n)||!Qd.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",Fe(e)?"length":$i),Reflect.ownKeys(e)}}class Zm extends eh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jm=new th,Qm=new Zm,eg=new th(!0);const Tl=t=>t,Xs=t=>Reflect.getPrototypeOf(t);function tg(t,e,n){return function(...i){const r=this.__v_raw,s=et(r),o=Ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Tl:e?Al:Ht;return!e&&Bt(s,"iterate",l?bl:$i),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function qs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ng(t,e){const n={get(r){const s=this.__v_raw,o=et(s),a=et(r);t||(yi(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:l}=Xs(o),c=e?Tl:t?Al:Ht;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Bt(et(r),"iterate",$i),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=et(s),a=et(r);return t||(yi(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=et(a),c=e?Tl:t?Al:Ht;return!t&&Bt(l,"iterate",$i),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Vt(n,t?{add:qs("add"),set:qs("set"),delete:qs("delete"),clear:qs("clear")}:{add(r){!e&&!_n(r)&&!er(r)&&(r=et(r));const s=et(this);return Xs(s).has.call(s,r)||(s.add(r),Kn(s,"add",r,r)),this},set(r,s){!e&&!_n(s)&&!er(s)&&(s=et(s));const o=et(this),{has:a,get:l}=Xs(o);let c=a.call(o,r);c||(r=et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?yi(s,u)&&Kn(o,"set",r,s):Kn(o,"add",r,s),this},delete(r){const s=et(this),{has:o,get:a}=Xs(s);let l=o.call(s,r);l||(r=et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Kn(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,o=r.clear();return s&&Kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=tg(r,t,e)}),n}function mc(t,e){const n=ng(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(tt(n,r)&&r in i?n:i,r,s)}const ig={get:mc(!1,!1)},rg={get:mc(!1,!0)},sg={get:mc(!0,!1)};const nh=new WeakMap,ih=new WeakMap,rh=new WeakMap,og=new WeakMap;function ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(t){return t.__v_skip||!Object.isExtensible(t)?0:ag(Im(t))}function Us(t){return er(t)?t:gc(t,!1,Jm,ig,nh)}function sh(t){return gc(t,!1,eg,rg,ih)}function oh(t){return gc(t,!0,Qm,sg,rh)}function gc(t,e,n,i,r){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=lg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Nr(t){return er(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function _c(t){return t?!!t.__v_raw:!1}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function ah(t){return!tt(t,"__v_skip")&&Object.isExtensible(t)&&zd(t,"__v_skip",!0),t}const Ht=t=>pt(t)?Us(t):t,Al=t=>pt(t)?oh(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function st(t){return lh(t,!1)}function vc(t){return lh(t,!0)}function lh(t,e){return kt(t)?t:new cg(t,e)}class cg{constructor(e,n){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:et(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||_n(e)||er(e);e=i?e:et(e),yi(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Ke(t){return kt(t)?t.value:t}const ug={get:(t,e,n)=>e==="__v_raw"?t:Ke(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ch(t){return Nr(t)?t:new Proxy(t,ug)}class fg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return jd(this,!0),!0}get value(){const e=this.dep.track();return Kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dg(t,e,n=!1){let i,r;return ze(t)?i=t:(i=t.get,r=t.set),new fg(i,r,n)}const js={},Uo=new WeakMap;let zi;function hg(t,e=!1,n=zi){if(n){let i=Uo.get(n);i||Uo.set(n,i=[]),i.push(t)}}function pg(t,e,n=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=T=>r?T:_n(T)||r===!1||r===0?Zn(T,1):Zn(T);let u,f,d,h,g=!1,_=!1;if(kt(t)?(f=()=>t.value,g=_n(t)):Nr(t)?(f=()=>c(t),g=!0):Fe(t)?(_=!0,g=t.some(T=>Nr(T)||_n(T)),f=()=>t.map(T=>{if(kt(T))return T.value;if(Nr(T))return c(T);if(ze(T))return l?l(T,2):T()})):ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ci();try{d()}finally{Pi()}}const T=zi;zi=u;try{return l?l(t,3,[h]):t(h)}finally{zi=T}}:f=Fn,e&&r){const T=f,D=r===!0?1/0:r;f=()=>Zn(T(),D)}const m=Wm(),p=()=>{u.stop(),m&&m.active&&lc(m.effects,u)};if(s&&e){const T=e;e=(...D)=>{T(...D),p()}}let E=_?new Array(t.length).fill(js):js;const y=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const D=u.run();if(r||g||(_?D.some((P,R)=>yi(P,E[R])):yi(D,E))){d&&d();const P=zi;zi=u;try{const R=[D,E===js?void 0:_&&E[0]===js?[]:E,h];l?l(e,3,R):e(...R),E=D}finally{zi=P}}}else u.run()};return a&&a(y),u=new Xd(f),u.scheduler=o?()=>o(y,!1):y,h=T=>hg(T,!1,u),d=u.onStop=()=>{const T=Uo.get(u);if(T){if(l)l(T,4);else for(const D of T)D();Uo.delete(u)}},e?i?y(!0):E=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Zn(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))Zn(t.value,e,n);else if(Fe(t))for(let i=0;i<t.length;i++)Zn(t[i],e,n);else if(Nd(t)||Ir(t))t.forEach(i=>{Zn(i,e,n)});else if(Bd(t)){for(const i in t)Zn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Zn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Is(t,e,n,i){try{return i?t(...i):t()}catch(r){ta(r,e,n)}}function Hn(t,e,n,i){if(ze(t)){const r=Is(t,e,n,i);return r&&Od(r)&&r.catch(s=>{ta(s,e,n)}),r}if(Fe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Hn(t[s],e,n,i));return r}}function ta(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ci(),Is(s,null,10,[t,l,c]),Pi();return}}mg(t,n,r,i,o)}function mg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Zt=[];let In=-1;const Or=[];let hi=null,Rr=0;const uh=Promise.resolve();let Io=null;function xc(t){const e=Io||uh;return t?e.then(this?t.bind(this):t):e}function gg(t){let e=In+1,n=Zt.length;for(;e<n;){const i=e+n>>>1,r=Zt[i],s=Ms(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Sc(t){if(!(t.flags&1)){const e=Ms(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=Ms(n)?Zt.push(t):Zt.splice(gg(e),0,t),t.flags|=1,fh()}}function fh(){Io||(Io=uh.then(hh))}function _g(t){Fe(t)?Or.push(...t):hi&&t.id===-1?hi.splice(Rr+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),fh()}function jc(t,e,n=In+1){for(;n<Zt.length;n++){const i=Zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dh(t){if(Or.length){const e=[...new Set(Or)].sort((n,i)=>Ms(n)-Ms(i));if(Or.length=0,hi){hi.push(...e);return}for(hi=e,Rr=0;Rr<hi.length;Rr++){const n=hi[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hi=null,Rr=0}}const Ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hh(t){try{for(In=0;In<Zt.length;In++){const e=Zt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Zt.length;In++){const e=Zt[In];e&&(e.flags&=-2)}In=-1,Zt.length=0,dh(),Io=null,(Zt.length||Or.length)&&hh()}}let Ut=null,ph=null;function No(t){const e=Ut;return Ut=t,ph=t&&t.type.__scopeId||null,e}function qt(t,e=Ut,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&su(-1);const s=No(e);let o;try{o=t(...r)}finally{No(s),i._d&&su(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ur(t,e){if(Ut===null)return t;const n=oa(Ut),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=lt]=e[r];s&&(ze(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ii(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ci(),Hn(l,n,8,[t.el,a,t,e]),Pi())}}const mh=Symbol("_vte"),vg=t=>t.__isTeleport,ms=t=>t&&(t.disabled||t.disabled===""),$c=t=>t&&(t.defer||t.defer===""),Yc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Kc=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,wl=(t,e)=>{const n=t&&t.to;return St(n)?e?e(n):null:n},gh={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=ms(e.props);let{shapeFlag:E,children:y,dynamicChildren:T}=e;if(t==null){const D=e.el=_(""),P=e.anchor=_("");h(D,n,i),h(P,n,i);const R=(M,A)=>{E&16&&(r&&r.isCE&&(r.ce._teleportTarget=M),u(y,M,A,r,s,o,a,l))},ne=()=>{const M=e.target=wl(e.props,g),A=_h(M,e,_,h);M&&(o!=="svg"&&Yc(M)?o="svg":o!=="mathml"&&Kc(M)&&(o="mathml"),p||(R(M,A),bo(e,!1)))};p&&(R(n,P),bo(e,!0)),$c(e.props)?Yt(()=>{ne(),e.el.__isMounted=!0},s):ne()}else{if($c(e.props)&&!t.el.__isMounted){Yt(()=>{gh.process(t,e,n,i,r,s,o,a,l,c),delete t.el.__isMounted},s);return}e.el=t.el,e.targetStart=t.targetStart;const D=e.anchor=t.anchor,P=e.target=t.target,R=e.targetAnchor=t.targetAnchor,ne=ms(t.props),M=ne?n:P,A=ne?D:R;if(o==="svg"||Yc(P)?o="svg":(o==="mathml"||Kc(P))&&(o="mathml"),T?(d(t.dynamicChildren,T,M,r,s,o,a),Mc(t,e,!0)):l||f(t,e,M,A,r,s,o,a,!1),p)ne?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):$s(e,n,D,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ee=e.target=wl(e.props,g);ee&&$s(e,ee,null,c,0)}else ne&&$s(e,P,R,c,1);bo(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!ms(d);for(let g=0;g<a.length;g++){const _=a[g];i(_,e,n,h,!!_.dynamicChildren)}}},move:$s,hydrate:xg};function $s(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||ms(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function xg(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const d=e.target=wl(e.props,l);if(d){const h=ms(e.props),g=d._lpa||d.firstChild;if(e.shapeFlag&16)if(h)e.anchor=f(o(t),e,a(t),n,i,r,s),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||_h(d,e,u,c),f(g&&o(g),e,d,n,i,r,s)}bo(e,h)}return e.anchor&&o(e.anchor)}const Sg=gh;function bo(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function _h(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[mh]=s,t&&(i(r,t),i(s,t)),s}function yc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rn(t,e){return ze(t)?Vt({name:t.name},e,{setup:t}):t}function yg(){const t=Gh();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function vh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oo(t,e,n,i,r=!1){if(Fe(t)){t.forEach((g,_)=>Oo(g,e&&(Fe(e)?e[_]:e),n,i,r));return}if(Fr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Oo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?oa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState,d=et(f),h=f===lt?()=>!1:g=>tt(d,g);if(c!=null&&c!==l&&(St(c)?(u[c]=null,h(c)&&(f[c]=null)):kt(c)&&(c.value=null)),ze(l))Is(l,a,12,[o,u]);else{const g=St(l),_=kt(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Fe(p)&&lc(p,s):Fe(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Yt(m,n)):m()}}}Qo().requestIdleCallback;Qo().cancelIdleCallback;const Fr=t=>!!t.type.__asyncLoader,xh=t=>t.type.__isKeepAlive;function Eg(t,e){Sh(t,"a",e)}function Mg(t,e){Sh(t,"da",e)}function Sh(t,e,n=zt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(na(e,i,n),n){let r=n.parent;for(;r&&r.parent;)xh(r.parent.vnode)&&bg(i,e,n,r),r=r.parent}}function bg(t,e,n,i){const r=na(e,t,i,!0);ni(()=>{lc(i[e],r)},n)}function na(t,e,n=zt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ci();const a=Ns(n),l=Hn(e,n,t,o);return a(),Pi(),l});return i?r.unshift(s):r.push(s),s}}const si=t=>(e,n=zt)=>{(!As||t==="sp")&&na(t,(...i)=>e(...i),n)},Tg=si("bm"),ti=si("m"),Ag=si("bu"),wg=si("u"),yh=si("bum"),ni=si("um"),Rg=si("sp"),Cg=si("rtg"),Pg=si("rtc");function Lg(t,e=zt){na("ec",t,e)}const Dg=Symbol.for("v-ndc");function Fo(t,e,n,i){let r;const s=n,o=Fe(t);if(o||St(t)){const a=o&&Nr(t);let l=!1;a&&(l=!_n(t),t=ea(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Ht(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Ug(t,e,n={},i,r){if(Ut.ce||Ut.parent&&Fr(Ut.parent)&&Ut.parent.ce)return Je(),Ho(xt,null,[qe("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),Je();const o=s&&Eh(s(n)),a=n.key||o&&o.key,l=Ho(xt,{key:(a&&!ri(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Eh(t){return t.some(e=>Ts(e)?!(e.type===wi||e.type===xt&&!Eh(e.children)):!0)?t:null}const Rl=t=>t?kh(t)?oa(t):Rl(t.parent):null,gs=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rl(t.parent),$root:t=>Rl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bh(t),$forceUpdate:t=>t.f||(t.f=()=>{Sc(t.update)}),$nextTick:t=>t.n||(t.n=xc.bind(t.proxy)),$watch:t=>e_.bind(t)}),Pa=(t,e)=>t!==lt&&!t.__isScriptSetup&&tt(t,e),Ig={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Pa(i,e))return o[e]=1,i[e];if(r!==lt&&tt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(n!==lt&&tt(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const u=gs[e];let f,d;if(u)return e==="$attrs"&&Bt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==lt&&tt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Pa(r,e)?(r[e]=n,!0):i!==lt&&tt(i,e)?(i[e]=n,!0):tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==lt&&tt(t,o)||Pa(e,o)||(a=s[0])&&tt(a,o)||tt(i,o)||tt(gs,o)||tt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zc(t){return Fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function Ng(t){const e=bh(t),n=t.proxy,i=t.ctx;Cl=!1,e.beforeCreate&&Jc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:y,unmounted:T,render:D,renderTracked:P,renderTriggered:R,errorCaptured:ne,serverPrefetch:M,expose:A,inheritAttrs:ee,components:ae,directives:me,filters:I}=e;if(c&&Og(c,i,null),o)for(const K in o){const Y=o[K];ze(Y)&&(i[K]=Y.bind(n))}if(r){const K=r.call(n,n);pt(K)&&(t.data=Us(K))}if(Cl=!0,s)for(const K in s){const Y=s[K],le=ze(Y)?Y.bind(n,n):ze(Y.get)?Y.get.bind(n,n):Fn,ce=!ze(Y)&&ze(Y.set)?Y.set.bind(n):Fn,te=Xe({get:le,set:ce});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>te.value,set:ie=>te.value=ie})}if(a)for(const K in a)Mh(a[K],i,n,K);if(l){const K=ze(l)?l.call(n):l;Reflect.ownKeys(K).forEach(Y=>{An(Y,K[Y])})}u&&Jc(u,t,"c");function X(K,Y){Fe(Y)?Y.forEach(le=>K(le.bind(n))):Y&&K(Y.bind(n))}if(X(Tg,f),X(ti,d),X(Ag,h),X(wg,g),X(Eg,_),X(Mg,m),X(Lg,ne),X(Pg,P),X(Cg,R),X(yh,E),X(ni,T),X(Rg,M),Fe(A))if(A.length){const K=t.exposed||(t.exposed={});A.forEach(Y=>{Object.defineProperty(K,Y,{get:()=>n[Y],set:le=>n[Y]=le})})}else t.exposed||(t.exposed={});D&&t.render===Fn&&(t.render=D),ee!=null&&(t.inheritAttrs=ee),ae&&(t.components=ae),me&&(t.directives=me),M&&vh(t)}function Og(t,e,n=Fn){Fe(t)&&(t=Pl(t));for(const i in t){const r=t[i];let s;pt(r)?"default"in r?s=bt(r.from||i,r.default,!0):s=bt(r.from||i):s=bt(r),kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jc(t,e,n){Hn(Fe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mh(t,e,n,i){let r=i.includes(".")?Oh(n,i):()=>n[i];if(St(t)){const s=e[t];ze(s)&&ei(r,s)}else if(ze(t))ei(r,t.bind(n));else if(pt(t))if(Fe(t))t.forEach(s=>Mh(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&ei(r,s,t)}}function bh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Bo(l,c,o,!0)),Bo(l,e,o)),pt(e)&&s.set(e,l),l}function Bo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Bo(t,s,n,!0),r&&r.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Fg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fg={data:Qc,props:eu,emits:eu,methods:cs,computed:cs,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:cs,directives:cs,watch:Hg,provide:Qc,inject:Bg};function Qc(t,e){return e?t?function(){return Vt(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function Bg(t,e){return cs(Pl(t),Pl(e))}function Pl(t){if(Fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function cs(t,e){return t?Vt(Object.create(null),t,e):e}function eu(t,e){return t?Fe(t)&&Fe(e)?[...new Set([...t,...e])]:Vt(Object.create(null),Zc(t),Zc(e??{})):e}function Hg(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const i in e)n[i]=jt(t[i],e[i]);return n}function Th(){return{app:null,config:{isNativeTag:Dm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zg=0;function Gg(t,e){return function(i,r=null){ze(i)||(i=Vt({},i)),r!=null&&!pt(r)&&(r=null);const s=Th(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:zg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:y_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||qe(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,oa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Br;Br=c;try{return u()}finally{Br=f}}};return c}}let Br=null;function An(t,e){if(zt){let n=zt.provides;const i=zt.parent&&zt.parent.provides;i===n&&(n=zt.provides=Object.create(i)),n[t]=e}}function bt(t,e,n=!1){const i=zt||Ut;if(i||Br){const r=Br?Br._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}const Ah={},wh=()=>Object.create(Ah),Rh=t=>Object.getPrototypeOf(t)===Ah;function kg(t,e,n,i=!1){const r={},s=wh();t.propsDefaults=Object.create(null),Ch(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:sh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Vg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=et(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ia(t.emitsOptions,d))continue;const h=e[d];if(l)if(tt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=Ai(d);r[g]=Ll(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Ch(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=or(f))===f||!tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ll(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&Kn(t.attrs,"set","")}function Ch(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ds(l))continue;const c=e[l];let u;r&&tt(r,u=Ai(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ia(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=et(n),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ll(r,l,f,c[f],t,!tt(c,f))}}return o}function Ll(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ns(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===or(n))&&(i=!0))}return i}const Wg=new WeakMap;function Ph(t,e,n=!1){const i=n?Wg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[d,h]=Ph(f,e,!0);Vt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return pt(t)&&i.set(t,Ur),Ur;if(Fe(s))for(let u=0;u<s.length;u++){const f=Ai(s[u]);tu(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=Ai(u);if(tu(f)){const d=s[u],h=o[f]=Fe(d)||ze(d)?{type:d}:Vt({},d),g=h.type;let _=!1,m=!0;if(Fe(g))for(let p=0;p<g.length;++p){const E=g[p],y=ze(E)&&E.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=ze(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||tt(h,"default"))&&a.push(f)}}const c=[o,a];return pt(t)&&i.set(t,c),c}function tu(t){return t[0]!=="$"&&!ds(t)}const Lh=t=>t[0]==="_"||t==="$stable",Ec=t=>Fe(t)?t.map(Nn):[Nn(t)],Xg=(t,e,n)=>{if(e._n)return e;const i=qt((...r)=>Ec(e(...r)),n);return i._c=!1,i},Dh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Lh(r))continue;const s=t[r];if(ze(s))e[r]=Xg(r,s,i);else if(s!=null){const o=Ec(s);e[r]=()=>o}}},Uh=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},Ih=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},qg=(t,e,n)=>{const i=t.slots=wh();if(t.vnode.shapeFlag&32){const r=e._;r?(Ih(i,e,n),n&&zd(i,"_",r,!0)):Dh(e,i)}else e&&Uh(t,e)},jg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ih(r,e,n):(s=!e.$stable,Dh(e,r)),o=e}else e&&(Uh(t,e),o={default:1});if(s)for(const a in r)!Lh(a)&&o[a]==null&&delete r[a]},Yt=a_;function $g(t){return Yg(t)}function Yg(t,e){const n=Qo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Fn,insertStaticContent:g}=t,_=(x,w,L,H=null,F=null,J=null,oe=void 0,S=null,v=!!w.dynamicChildren)=>{if(x===w)return;x&&!Qr(x,w)&&(H=N(x),ie(x,F,J,!0),x=null),w.patchFlag===-2&&(v=!1,w.dynamicChildren=null);const{type:C,ref:q,shapeFlag:O}=w;switch(C){case ra:m(x,w,L,H);break;case wi:p(x,w,L,H);break;case To:x==null&&E(w,L,H,oe);break;case xt:ae(x,w,L,H,F,J,oe,S,v);break;default:O&1?D(x,w,L,H,F,J,oe,S,v):O&6?me(x,w,L,H,F,J,oe,S,v):(O&64||O&128)&&C.process(x,w,L,H,F,J,oe,S,v,he)}q!=null&&F&&Oo(q,x&&x.ref,J,w||x,!w)},m=(x,w,L,H)=>{if(x==null)i(w.el=a(w.children),L,H);else{const F=w.el=x.el;w.children!==x.children&&c(F,w.children)}},p=(x,w,L,H)=>{x==null?i(w.el=l(w.children||""),L,H):w.el=x.el},E=(x,w,L,H)=>{[x.el,x.anchor]=g(x.children,w,L,H,x.el,x.anchor)},y=({el:x,anchor:w},L,H)=>{let F;for(;x&&x!==w;)F=d(x),i(x,L,H),x=F;i(w,L,H)},T=({el:x,anchor:w})=>{let L;for(;x&&x!==w;)L=d(x),r(x),x=L;r(w)},D=(x,w,L,H,F,J,oe,S,v)=>{w.type==="svg"?oe="svg":w.type==="math"&&(oe="mathml"),x==null?P(w,L,H,F,J,oe,S,v):M(x,w,F,J,oe,S,v)},P=(x,w,L,H,F,J,oe,S)=>{let v,C;const{props:q,shapeFlag:O,transition:G,dirs:pe}=x;if(v=x.el=o(x.type,J,q&&q.is,q),O&8?u(v,x.children):O&16&&ne(x.children,v,null,H,F,La(x,J),oe,S),pe&&Ii(x,null,H,"created"),R(v,x,x.scopeId,oe,H),q){for(const ge in q)ge!=="value"&&!ds(ge)&&s(v,ge,null,q[ge],J,H);"value"in q&&s(v,"value",null,q.value,J),(C=q.onVnodeBeforeMount)&&Ln(C,H,x)}pe&&Ii(x,null,H,"beforeMount");const de=Kg(F,G);de&&G.beforeEnter(v),i(v,w,L),((C=q&&q.onVnodeMounted)||de||pe)&&Yt(()=>{C&&Ln(C,H,x),de&&G.enter(v),pe&&Ii(x,null,H,"mounted")},F)},R=(x,w,L,H,F)=>{if(L&&h(x,L),H)for(let J=0;J<H.length;J++)h(x,H[J]);if(F){let J=F.subTree;if(w===J||Bh(J.type)&&(J.ssContent===w||J.ssFallback===w)){const oe=F.vnode;R(x,oe,oe.scopeId,oe.slotScopeIds,F.parent)}}},ne=(x,w,L,H,F,J,oe,S,v=0)=>{for(let C=v;C<x.length;C++){const q=x[C]=S?pi(x[C]):Nn(x[C]);_(null,q,w,L,H,F,J,oe,S)}},M=(x,w,L,H,F,J,oe)=>{const S=w.el=x.el;let{patchFlag:v,dynamicChildren:C,dirs:q}=w;v|=x.patchFlag&16;const O=x.props||lt,G=w.props||lt;let pe;if(L&&Ni(L,!1),(pe=G.onVnodeBeforeUpdate)&&Ln(pe,L,w,x),q&&Ii(w,x,L,"beforeUpdate"),L&&Ni(L,!0),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&u(S,""),C?A(x.dynamicChildren,C,S,L,H,La(w,F),J):oe||Y(x,w,S,null,L,H,La(w,F),J,!1),v>0){if(v&16)ee(S,O,G,L,F);else if(v&2&&O.class!==G.class&&s(S,"class",null,G.class,F),v&4&&s(S,"style",O.style,G.style,F),v&8){const de=w.dynamicProps;for(let ge=0;ge<de.length;ge++){const Se=de[ge],Ce=O[Se],ue=G[Se];(ue!==Ce||Se==="value")&&s(S,Se,Ce,ue,F,L)}}v&1&&x.children!==w.children&&u(S,w.children)}else!oe&&C==null&&ee(S,O,G,L,F);((pe=G.onVnodeUpdated)||q)&&Yt(()=>{pe&&Ln(pe,L,w,x),q&&Ii(w,x,L,"updated")},H)},A=(x,w,L,H,F,J,oe)=>{for(let S=0;S<w.length;S++){const v=x[S],C=w[S],q=v.el&&(v.type===xt||!Qr(v,C)||v.shapeFlag&70)?f(v.el):L;_(v,C,q,null,H,F,J,oe,!0)}},ee=(x,w,L,H,F)=>{if(w!==L){if(w!==lt)for(const J in w)!ds(J)&&!(J in L)&&s(x,J,w[J],null,F,H);for(const J in L){if(ds(J))continue;const oe=L[J],S=w[J];oe!==S&&J!=="value"&&s(x,J,S,oe,F,H)}"value"in L&&s(x,"value",w.value,L.value,F)}},ae=(x,w,L,H,F,J,oe,S,v)=>{const C=w.el=x?x.el:a(""),q=w.anchor=x?x.anchor:a("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:pe}=w;pe&&(S=S?S.concat(pe):pe),x==null?(i(C,L,H),i(q,L,H),ne(w.children||[],L,q,F,J,oe,S,v)):O>0&&O&64&&G&&x.dynamicChildren?(A(x.dynamicChildren,G,L,F,J,oe,S),(w.key!=null||F&&w===F.subTree)&&Mc(x,w,!0)):Y(x,w,L,q,F,J,oe,S,v)},me=(x,w,L,H,F,J,oe,S,v)=>{w.slotScopeIds=S,x==null?w.shapeFlag&512?F.ctx.activate(w,L,H,oe,v):I(w,L,H,F,J,oe,v):k(x,w,v)},I=(x,w,L,H,F,J,oe)=>{const S=x.component=m_(x,H,F);if(xh(x)&&(S.ctx.renderer=he),g_(S,!1,oe),S.asyncDep){if(F&&F.registerDep(S,X,oe),!x.el){const v=S.subTree=qe(wi);p(null,v,w,L)}}else X(S,x,w,L,F,J,oe)},k=(x,w,L)=>{const H=w.component=x.component;if(s_(x,w,L))if(H.asyncDep&&!H.asyncResolved){K(H,w,L);return}else H.next=w,H.update();else w.el=x.el,H.vnode=w},X=(x,w,L,H,F,J,oe)=>{const S=()=>{if(x.isMounted){let{next:O,bu:G,u:pe,parent:de,vnode:ge}=x;{const Ue=Nh(x);if(Ue){O&&(O.el=ge.el,K(x,O,oe)),Ue.asyncDep.then(()=>{x.isUnmounted||S()});return}}let Se=O,Ce;Ni(x,!1),O?(O.el=ge.el,K(x,O,oe)):O=ge,G&&Mo(G),(Ce=O.props&&O.props.onVnodeBeforeUpdate)&&Ln(Ce,de,O,ge),Ni(x,!0);const ue=iu(x),Ve=x.subTree;x.subTree=ue,_(Ve,ue,f(Ve.el),N(Ve),x,F,J),O.el=ue.el,Se===null&&o_(x,ue.el),pe&&Yt(pe,F),(Ce=O.props&&O.props.onVnodeUpdated)&&Yt(()=>Ln(Ce,de,O,ge),F)}else{let O;const{el:G,props:pe}=w,{bm:de,m:ge,parent:Se,root:Ce,type:ue}=x,Ve=Fr(w);Ni(x,!1),de&&Mo(de),!Ve&&(O=pe&&pe.onVnodeBeforeMount)&&Ln(O,Se,w),Ni(x,!0);{Ce.ce&&Ce.ce._injectChildStyle(ue);const Ue=x.subTree=iu(x);_(null,Ue,L,H,x,F,J),w.el=Ue.el}if(ge&&Yt(ge,F),!Ve&&(O=pe&&pe.onVnodeMounted)){const Ue=w;Yt(()=>Ln(O,Se,Ue),F)}(w.shapeFlag&256||Se&&Fr(Se.vnode)&&Se.vnode.shapeFlag&256)&&x.a&&Yt(x.a,F),x.isMounted=!0,w=L=H=null}};x.scope.on();const v=x.effect=new Xd(S);x.scope.off();const C=x.update=v.run.bind(v),q=x.job=v.runIfDirty.bind(v);q.i=x,q.id=x.uid,v.scheduler=()=>Sc(q),Ni(x,!0),C()},K=(x,w,L)=>{w.component=x;const H=x.vnode.props;x.vnode=w,x.next=null,Vg(x,w.props,H,L),jg(x,w.children,L),Ci(),jc(x),Pi()},Y=(x,w,L,H,F,J,oe,S,v=!1)=>{const C=x&&x.children,q=x?x.shapeFlag:0,O=w.children,{patchFlag:G,shapeFlag:pe}=w;if(G>0){if(G&128){ce(C,O,L,H,F,J,oe,S,v);return}else if(G&256){le(C,O,L,H,F,J,oe,S,v);return}}pe&8?(q&16&&be(C,F,J),O!==C&&u(L,O)):q&16?pe&16?ce(C,O,L,H,F,J,oe,S,v):be(C,F,J,!0):(q&8&&u(L,""),pe&16&&ne(O,L,H,F,J,oe,S,v))},le=(x,w,L,H,F,J,oe,S,v)=>{x=x||Ur,w=w||Ur;const C=x.length,q=w.length,O=Math.min(C,q);let G;for(G=0;G<O;G++){const pe=w[G]=v?pi(w[G]):Nn(w[G]);_(x[G],pe,L,null,F,J,oe,S,v)}C>q?be(x,F,J,!0,!1,O):ne(w,L,H,F,J,oe,S,v,O)},ce=(x,w,L,H,F,J,oe,S,v)=>{let C=0;const q=w.length;let O=x.length-1,G=q-1;for(;C<=O&&C<=G;){const pe=x[C],de=w[C]=v?pi(w[C]):Nn(w[C]);if(Qr(pe,de))_(pe,de,L,null,F,J,oe,S,v);else break;C++}for(;C<=O&&C<=G;){const pe=x[O],de=w[G]=v?pi(w[G]):Nn(w[G]);if(Qr(pe,de))_(pe,de,L,null,F,J,oe,S,v);else break;O--,G--}if(C>O){if(C<=G){const pe=G+1,de=pe<q?w[pe].el:H;for(;C<=G;)_(null,w[C]=v?pi(w[C]):Nn(w[C]),L,de,F,J,oe,S,v),C++}}else if(C>G)for(;C<=O;)ie(x[C],F,J,!0),C++;else{const pe=C,de=C,ge=new Map;for(C=de;C<=G;C++){const ye=w[C]=v?pi(w[C]):Nn(w[C]);ye.key!=null&&ge.set(ye.key,C)}let Se,Ce=0;const ue=G-de+1;let Ve=!1,Ue=0;const Le=new Array(ue);for(C=0;C<ue;C++)Le[C]=0;for(C=pe;C<=O;C++){const ye=x[C];if(Ce>=ue){ie(ye,F,J,!0);continue}let Pe;if(ye.key!=null)Pe=ge.get(ye.key);else for(Se=de;Se<=G;Se++)if(Le[Se-de]===0&&Qr(ye,w[Se])){Pe=Se;break}Pe===void 0?ie(ye,F,J,!0):(Le[Pe-de]=C+1,Pe>=Ue?Ue=Pe:Ve=!0,_(ye,w[Pe],L,null,F,J,oe,S,v),Ce++)}const Re=Ve?Zg(Le):Ur;for(Se=Re.length-1,C=ue-1;C>=0;C--){const ye=de+C,Pe=w[ye],Ze=ye+1<q?w[ye+1].el:H;Le[C]===0?_(null,Pe,L,Ze,F,J,oe,S,v):Ve&&(Se<0||C!==Re[Se]?te(Pe,L,Ze,2):Se--)}}},te=(x,w,L,H,F=null)=>{const{el:J,type:oe,transition:S,children:v,shapeFlag:C}=x;if(C&6){te(x.component.subTree,w,L,H);return}if(C&128){x.suspense.move(w,L,H);return}if(C&64){oe.move(x,w,L,he);return}if(oe===xt){i(J,w,L);for(let O=0;O<v.length;O++)te(v[O],w,L,H);i(x.anchor,w,L);return}if(oe===To){y(x,w,L);return}if(H!==2&&C&1&&S)if(H===0)S.beforeEnter(J),i(J,w,L),Yt(()=>S.enter(J),F);else{const{leave:O,delayLeave:G,afterLeave:pe}=S,de=()=>i(J,w,L),ge=()=>{O(J,()=>{de(),pe&&pe()})};G?G(J,de,ge):ge()}else i(J,w,L)},ie=(x,w,L,H=!1,F=!1)=>{const{type:J,props:oe,ref:S,children:v,dynamicChildren:C,shapeFlag:q,patchFlag:O,dirs:G,cacheIndex:pe}=x;if(O===-2&&(F=!1),S!=null&&Oo(S,null,L,x,!0),pe!=null&&(w.renderCache[pe]=void 0),q&256){w.ctx.deactivate(x);return}const de=q&1&&G,ge=!Fr(x);let Se;if(ge&&(Se=oe&&oe.onVnodeBeforeUnmount)&&Ln(Se,w,x),q&6)xe(x.component,L,H);else{if(q&128){x.suspense.unmount(L,H);return}de&&Ii(x,null,w,"beforeUnmount"),q&64?x.type.remove(x,w,L,he,H):C&&!C.hasOnce&&(J!==xt||O>0&&O&64)?be(C,w,L,!1,!0):(J===xt&&O&384||!F&&q&16)&&be(v,w,L),H&&V(x)}(ge&&(Se=oe&&oe.onVnodeUnmounted)||de)&&Yt(()=>{Se&&Ln(Se,w,x),de&&Ii(x,null,w,"unmounted")},L)},V=x=>{const{type:w,el:L,anchor:H,transition:F}=x;if(w===xt){re(L,H);return}if(w===To){T(x);return}const J=()=>{r(L),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(x.shapeFlag&1&&F&&!F.persisted){const{leave:oe,delayLeave:S}=F,v=()=>oe(L,J);S?S(x.el,J,v):v()}else J()},re=(x,w)=>{let L;for(;x!==w;)L=d(x),r(x),x=L;r(w)},xe=(x,w,L)=>{const{bum:H,scope:F,job:J,subTree:oe,um:S,m:v,a:C}=x;nu(v),nu(C),H&&Mo(H),F.stop(),J&&(J.flags|=8,ie(oe,x,w,L)),S&&Yt(S,w),Yt(()=>{x.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},be=(x,w,L,H=!1,F=!1,J=0)=>{for(let oe=J;oe<x.length;oe++)ie(x[oe],w,L,H,F)},N=x=>{if(x.shapeFlag&6)return N(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const w=d(x.anchor||x.el),L=w&&w[mh];return L?d(L):w};let fe=!1;const se=(x,w,L)=>{x==null?w._vnode&&ie(w._vnode,null,null,!0):_(w._vnode||null,x,w,null,null,null,L),w._vnode=x,fe||(fe=!0,jc(),dh(),fe=!1)},he={p:_,um:ie,m:te,r:V,mt:I,mc:ne,pc:Y,pbc:A,n:N,o:t};return{render:se,hydrate:void 0,createApp:Gg(se)}}function La({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ni({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Kg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Mc(t,e,n=!1){const i=t.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Mc(o,a)),a.type===ra&&(a.el=o.el)}}function Zg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Nh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nh(e)}function nu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jg=Symbol.for("v-scx"),Qg=()=>bt(Jg);function ar(t,e){return bc(t,null,e)}function ei(t,e,n){return bc(t,e,n)}function bc(t,e,n=lt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Vt({},n),l=e&&i||!e&&s!=="post";let c;if(As){if(s==="sync"){const h=Qg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Fn,h.resume=Fn,h.pause=Fn,h}}const u=zt;a.call=(h,g,_)=>Hn(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{Yt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Sc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=pg(t,e,a);return As&&(c?c.push(d):l&&d()),d}function e_(t,e,n){const i=this.proxy,r=St(t)?t.includes(".")?Oh(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=Ns(this),a=bc(r,s.bind(i),n);return o(),a}function Oh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const t_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ai(e)}Modifiers`]||t[`${or(e)}Modifiers`];function n_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||lt;let r=n;const s=e.startsWith("update:"),o=s&&t_(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>St(u)?u.trim():u)),o.number&&(r=n.map(yl)));let a,l=i[a=Ta(e)]||i[a=Ta(Ai(e))];!l&&s&&(l=i[a=Ta(or(e))]),l&&Hn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hn(c,t,6,r)}}function Fh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=Fh(c,e,!0);u&&(a=!0,Vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(pt(t)&&i.set(t,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Vt(o,s),pt(t)&&i.set(t,o),o)}function ia(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(t,e[0].toLowerCase()+e.slice(1))||tt(t,or(e))||tt(t,e))}function iu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=No(t);let p,E;try{if(n.shapeFlag&4){const T=r||i,D=T;p=Nn(c.call(D,T,u,f,h,d,g)),E=a}else{const T=e;p=Nn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),E=e.props?a:i_(a)}}catch(T){_s.length=0,ta(T,t,1),p=qe(wi)}let y=p;if(E&&_!==!1){const T=Object.keys(E),{shapeFlag:D}=y;T.length&&D&7&&(s&&T.some(ac)&&(E=r_(E,s)),y=tr(y,E,!1,!0))}return n.dirs&&(y=tr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&yc(y,n.transition),p=y,No(m),p}const i_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},r_=(t,e)=>{const n={};for(const i in t)(!ac(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function s_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ru(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ia(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ru(i,o,c):!0:!!o;return!1}function ru(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ia(n,s))return!0}return!1}function o_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bh=t=>t.__isSuspense;function a_(t,e){e&&e.pendingBranch?Fe(t)?e.effects.push(...t):e.effects.push(t):_g(t)}const xt=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),_s=[];let ln=null;function Je(t=!1){_s.push(ln=t?null:[])}function l_(){_s.pop(),ln=_s[_s.length-1]||null}let bs=1;function su(t,e=!1){bs+=t,t<0&&ln&&e&&(ln.hasOnce=!0)}function Hh(t){return t.dynamicChildren=bs>0?ln||Ur:null,l_(),bs>0&&ln&&ln.push(t),t}function ot(t,e,n,i,r,s){return Hh(z(t,e,n,i,r,s,!0))}function Ho(t,e,n,i,r){return Hh(qe(t,e,n,i,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function Qr(t,e){return t.type===e.type&&t.key===e.key}const zh=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||kt(t)||ze(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,i=0,r=null,s=t===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zh(e),ref:e&&Ao(e),scopeId:ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return a?(Tc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=St(n)?8:16),bs>0&&!o&&ln&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ln.push(l),l}const qe=c_;function c_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Dg)&&(t=wi),Ts(t)){const a=tr(t,e,!0);return n&&Tc(a,n),bs>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag=-2,a}if(S_(t)&&(t=t.__vccOpts),e){e=u_(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=mn(a)),pt(l)&&(_c(l)&&!Fe(l)&&(l=Vt({},l)),e.style=uc(l))}const o=St(t)?1:Bh(t)?128:vg(t)?64:pt(t)?4:ze(t)?2:0;return z(t,e,n,i,r,o,s,!0)}function u_(t){return t?_c(t)||Rh(t)?Vt({},t):t:null}function tr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?d_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zh(c),ref:e&&e.ref?n&&s?Fe(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&yc(u,l.clone(u)),u}function it(t=" ",e=0){return qe(ra,null,t,e)}function sa(t,e){const n=qe(To,null,t);return n.staticCount=e,n}function f_(t="",e=!1){return e?(Je(),Ho(wi,null,t)):qe(wi,null,t)}function Nn(t){return t==null||typeof t=="boolean"?qe(wi):Fe(t)?qe(xt,null,t.slice()):Ts(t)?pi(t):qe(ra,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function Tc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Fe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Tc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Rh(e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),i&64?(n=16,e=[it(e)]):n=8);t.children=e,t.shapeFlag|=n}function d_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mn([e.class,i.class]));else if(r==="style")e.style=uc([e.style,i.style]);else if(Ko(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ln(t,e,n,i=null){Hn(t,e,7,[n,i])}const h_=Th();let p_=0;function m_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||h_,s={uid:p_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(i,r),emitsOptions:Fh(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=n_.bind(null,s),t.ce&&t.ce(s),s}let zt=null;const Gh=()=>zt||Ut;let zo,Dl;{const t=Qo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};zo=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),Dl=e("__VUE_SSR_SETTERS__",n=>As=n)}const Ns=t=>{const e=zt;return zo(t),t.scope.on(),()=>{t.scope.off(),zo(e)}},ou=()=>{zt&&zt.scope.off(),zo(null)};function kh(t){return t.vnode.shapeFlag&4}let As=!1;function g_(t,e=!1,n=!1){e&&Dl(e);const{props:i,children:r}=t.vnode,s=kh(t);kg(t,i,s,e),qg(t,r,n);const o=s?__(t,e):void 0;return e&&Dl(!1),o}function __(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ig);const{setup:i}=n;if(i){Ci();const r=t.setupContext=i.length>1?x_(t):null,s=Ns(t),o=Is(i,t,0,[t.props,r]),a=Od(o);if(Pi(),s(),(a||t.sp)&&!Fr(t)&&vh(t),a){if(o.then(ou,ou),e)return o.then(l=>{au(t,l)}).catch(l=>{ta(l,t,0)});t.asyncDep=o}else au(t,o)}else Vh(t)}function au(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=ch(e)),Vh(t)}function Vh(t,e,n){const i=t.type;t.render||(t.render=i.render||Fn);{const r=Ns(t);Ci();try{Ng(t)}finally{Pi(),r()}}}const v_={get(t,e){return Bt(t,"get",""),t[e]}};function x_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,v_),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ch(ah(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function S_(t){return ze(t)&&"__vccOpts"in t}const Xe=(t,e)=>dg(t,e,As);function Pt(t,e,n){const i=arguments.length;return i===2?pt(e)&&!Fe(e)?Ts(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ts(n)&&(n=[n]),qe(t,e,n))}const y_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ul;const lu=typeof window<"u"&&window.trustedTypes;if(lu)try{Ul=lu.createPolicy("vue",{createHTML:t=>t})}catch{}const Wh=Ul?t=>Ul.createHTML(t):t=>t,E_="http://www.w3.org/2000/svg",M_="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,cu=Yn&&Yn.createElement("template"),b_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Yn.createElementNS(E_,t):e==="mathml"?Yn.createElementNS(M_,t):n?Yn.createElement(t,{is:n}):Yn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{cu.innerHTML=Wh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=cu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},T_=Symbol("_vtc");function A_(t,e,n){const i=t[T_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uu=Symbol("_vod"),w_=Symbol("_vsh"),R_=Symbol(""),C_=/(^|;)\s*display\s*:/;function P_(t,e,n){const i=t.style,r=St(n);let s=!1;if(n&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wo(i,a,"")}else for(const o in e)n[o]==null&&wo(i,o,"");for(const o in n)o==="display"&&(s=!0),wo(i,o,n[o])}else if(r){if(e!==n){const o=i[R_];o&&(n+=";"+o),i.cssText=n,s=C_.test(n)}}else e&&t.removeAttribute("style");uu in t&&(t[uu]=s?i.display:"",t[w_]&&(i.display="none"))}const fu=/\s*!important$/;function wo(t,e,n){if(Fe(n))n.forEach(i=>wo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=L_(t,e);fu.test(n)?t.setProperty(or(i),n.replace(fu,""),"important"):t[i]=n}}const du=["Webkit","Moz","ms"],Da={};function L_(t,e){const n=Da[e];if(n)return n;let i=Ai(e);if(i!=="filter"&&i in t)return Da[e]=i;i=Hd(i);for(let r=0;r<du.length;r++){const s=du[r]+i;if(s in t)return Da[e]=s}return e}const hu="http://www.w3.org/1999/xlink";function pu(t,e,n,i,r,s=km(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(hu,e.slice(6,e.length)):t.setAttributeNS(hu,e,n):n==null||s&&!Gd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ri(n)?String(n):n)}function mu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Wh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Gd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Cr(t,e,n,i){t.addEventListener(e,n,i)}function D_(t,e,n,i){t.removeEventListener(e,n,i)}const gu=Symbol("_vei");function U_(t,e,n,i,r=null){const s=t[gu]||(t[gu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I_(e);if(i){const c=s[e]=F_(i,r);Cr(t,a,c,l)}else o&&(D_(t,a,o,l),s[e]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function I_(t){let e;if(_u.test(t)){e={};let i;for(;i=t.match(_u);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let Ua=0;const N_=Promise.resolve(),O_=()=>Ua||(N_.then(()=>Ua=0),Ua=Date.now());function F_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hn(B_(i,n.value),e,5,[i])};return n.value=t,n.attached=O_(),n}function B_(t,e){if(Fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const vu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,H_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?A_(t,i,o):e==="style"?P_(t,n,i):Ko(e)?ac(e)||U_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z_(t,e,i,o))?(mu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(i))?mu(t,Ai(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),pu(t,e,i,o))};function z_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&vu(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vu(e)&&St(n)?!1:e in t}const xu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Fe(e)?n=>Mo(e,n):e};function G_(t){t.target.composing=!0}function Su(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ia=Symbol("_assign"),fr={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ia]=xu(r);const s=i||r.props&&r.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=yl(a)),t[Ia](a)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",G_),Cr(t,"compositionend",Su),Cr(t,"change",Su))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Ia]=xu(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?yl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},k_=["ctrl","shift","alt","meta"],V_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>k_.some(n=>t[`${n}Key`]&&!e.includes(n))},W_=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=V_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},X_=Vt({patchProp:H_},b_);let yu;function q_(){return yu||(yu=$g(X_))}const j_=(...t)=>{const e=q_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Y_(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,$_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Y_(t){return St(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const K_=Symbol();var Eu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Eu||(Eu={}));function Z_(){const t=Vm(!0),e=t.run(()=>st({}));let n=[],i=[];const r=ah({install(s){r._a=s,s.provide(K_,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pr=typeof document<"u";function Xh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xh(t.default)}const Qe=Object.assign;function Na(t,e){const n={};for(const i in e){const r=e[i];n[i]=wn(r)?r.map(t):t(r)}return n}const vs=()=>{},wn=Array.isArray,qh=/#/g,Q_=/&/g,e0=/\//g,t0=/=/g,n0=/\?/g,jh=/\+/g,i0=/%5B/g,r0=/%5D/g,$h=/%5E/g,s0=/%60/g,Yh=/%7B/g,o0=/%7C/g,Kh=/%7D/g,a0=/%20/g;function Ac(t){return encodeURI(""+t).replace(o0,"|").replace(i0,"[").replace(r0,"]")}function l0(t){return Ac(t).replace(Yh,"{").replace(Kh,"}").replace($h,"^")}function Il(t){return Ac(t).replace(jh,"%2B").replace(a0,"+").replace(qh,"%23").replace(Q_,"%26").replace(s0,"`").replace(Yh,"{").replace(Kh,"}").replace($h,"^")}function c0(t){return Il(t).replace(t0,"%3D")}function u0(t){return Ac(t).replace(qh,"%23").replace(n0,"%3F")}function f0(t){return t==null?"":u0(t).replace(e0,"%2F")}function ws(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const d0=/\/$/,h0=t=>t.replace(d0,"");function Oa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=_0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ws(o)}}function p0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function m0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Gr(e.matched[i],n.matched[r])&&Zh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!g0(t[n],e[n]))return!1;return!0}function g0(t,e){return wn(t)?bu(t,e):wn(e)?bu(e,t):t===e}function bu(t,e){return wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function _0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rs;(function(t){t.pop="pop",t.push="push"})(Rs||(Rs={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function v0(t){if(!t)if(Pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),h0(t)}const x0=/^[^#]+#/;function S0(t,e){return t.replace(x0,"#")+e}function y0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const aa=()=>({left:window.scrollX,top:window.scrollY});function E0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=y0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tu(t,e){return(history.state?history.state.position-e:-1)+t}const Nl=new Map;function M0(t,e){Nl.set(t,e)}function b0(t){const e=Nl.get(t);return Nl.delete(t),e}let T0=()=>location.protocol+"//"+location.host;function Jh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mu(l,"")}return Mu(n,t)+i+r}function A0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Jh(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Rs.pop,direction:m?m>0?xs.forward:xs.back:xs.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(Qe({},d.state,{scroll:aa()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Au(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?aa():null}}function w0(t){const{history:e,location:n}=window,i={value:Jh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:T0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=Qe({},e.state,Au(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:aa()});s(u.current,u,!0);const f=Qe({},Au(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function R0(t){t=v0(t);const e=w0(t),n=A0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Qe({location:"",base:t,go:i,createHref:S0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function C0(t){return typeof t=="string"||t&&typeof t=="object"}function Qh(t){return typeof t=="string"||typeof t=="symbol"}const ep=Symbol("");var wu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wu||(wu={}));function kr(t,e){return Qe(new Error,{type:t,[ep]:!0},e)}function kn(t,e){return t instanceof Error&&ep in t&&(e==null||!!(t.type&e))}const Ru="[^/]+?",P0={sensitive:!1,strict:!1,start:!0,end:!0},L0=/[.+*?^${}()[\]/\\]/g;function D0(t,e){const n=Qe({},P0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(L0,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const E=p||Ru;if(E!==Ru){h+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+T.message)}}let y=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,h+=20,m&&(h+=-8),_&&(h+=-20),E===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(wn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=wn(p)?p.join("/"):p;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function U0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=U0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Cu(i))return 1;if(Cu(r))return-1}return r.length-i.length}function Cu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const I0={type:0,value:""},N0=/[a-zA-Z0-9_]/;function O0(t){if(!t)return[[]];if(t==="/")return[[I0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:N0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function F0(t,e,n){const i=D0(O0(t.path),n),r=Qe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function B0(t,e){const n=[],i=new Map;e=Uu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=Lu(f);_.aliasOf=h&&h.record;const m=Uu(e,f),p=[_];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of T)p.push(Lu(Qe({},_,{components:h?h.record.components:_.components,path:D,aliasOf:h?h.record:_})))}let E,y;for(const T of p){const{path:D}=T;if(d&&D[0]!=="/"){const P=d.record.path,R=P[P.length-1]==="/"?"":"/";T.path=d.record.path+(D&&R+D)}if(E=F0(T,d,m),h?h.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),g&&f.name&&!Du(E)&&o(f.name)),np(E)&&l(E),_.children){const P=_.children;for(let R=0;R<P.length;R++)s(P[R],E,h&&h.children[R])}h=h||E}return y?()=>{o(y)}:vs}function o(f){if(Qh(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=G0(f,n);n.splice(d,0,f),f.record.name&&!Du(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw kr(1,{location:f});m=h.record.name,g=Qe(Pu(d.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Pu(f.params,h.keys.map(y=>y.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(y=>y.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!h)throw kr(1,{location:f,currentLocation:d});m=h.record.name,g=Qe({},d.params,f.params),_=h.stringify(g)}const p=[];let E=h;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:_,params:g,matched:p,meta:z0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Pu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Lu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:H0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function H0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Du(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function z0(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function Uu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function G0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;tp(t,e[s])<0?i=s:n=s+1}const r=k0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function k0(t){let e=t;for(;e=e.parent;)if(np(e)&&tp(t,e)===0)return e}function np({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function V0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(jh," "),o=s.indexOf("="),a=ws(o<0?s:s.slice(0,o)),l=o<0?null:ws(s.slice(o+1));if(a in e){let c=e[a];wn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Iu(t){let e="";for(let n in t){const i=t[n];if(n=c0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(i)?i.map(s=>s&&Il(s)):[i&&Il(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function W0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const X0=Symbol(""),Nu=Symbol(""),la=Symbol(""),ip=Symbol(""),Ol=Symbol("");function es(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(kr(4,{from:n,to:e})):d instanceof Error?l(d):C0(d)?l(kr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Fa(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Xh(l)){const u=(l.__vccOpts||l)[e];u&&s.push(mi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=J_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&mi(h,n,i,o,a,r)()}))}}return s}function Ou(t){const e=bt(la),n=bt(ip),i=Xe(()=>{const l=Ke(t.to);return e.resolve(l)}),r=Xe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Gr.bind(null,u));if(d>-1)return d;const h=Fu(l[c-2]);return c>1&&Fu(u)===h&&f[f.length-1].path!==h?f.findIndex(Gr.bind(null,l[c-2])):d}),s=Xe(()=>r.value>-1&&Y0(n.params,i.value.params)),o=Xe(()=>r.value>-1&&r.value===n.matched.length-1&&Zh(n.params,i.value.params));function a(l={}){if($0(l)){const c=e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Xe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function q0(t){return t.length===1?t[0]:t}const j0=Rn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ou,setup(t,{slots:e}){const n=Us(Ou(t)),{options:i}=bt(la),r=Xe(()=>({[Bu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Bu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&q0(e.default(n));return t.custom?s:Pt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Un=j0;function $0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Fu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bu=(t,e,n)=>t??e??n,K0=Rn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=bt(Ol),r=Xe(()=>t.route||i.value),s=bt(Nu,0),o=Xe(()=>{let c=Ke(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Xe(()=>r.value.matched[o.value]);An(Nu,Xe(()=>o.value+1)),An(X0,a),An(Ol,r);const l=st();return ei(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Gr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Hu(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Pt(d,Qe({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Hu(n.default,{Component:m,route:c})||m}}});function Hu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rp=K0;function Z0(t){const e=B0(t.routes,t),n=t.parseQuery||V0,i=t.stringifyQuery||Iu,r=t.history,s=es(),o=es(),a=es(),l=vc(ai);let c=ai;Pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,N=>""+N),f=Na.bind(null,f0),d=Na.bind(null,ws);function h(N,fe){let se,he;return Qh(N)?(se=e.getRecordMatcher(N),he=fe):he=N,e.addRoute(he,se)}function g(N){const fe=e.getRecordMatcher(N);fe&&e.removeRoute(fe)}function _(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,fe){if(fe=Qe({},fe||l.value),typeof N=="string"){const L=Oa(n,N,fe.path),H=e.resolve({path:L.path},fe),F=r.createHref(L.fullPath);return Qe(L,H,{params:d(H.params),hash:ws(L.hash),redirectedFrom:void 0,href:F})}let se;if(N.path!=null)se=Qe({},N,{path:Oa(n,N.path,fe.path).path});else{const L=Qe({},N.params);for(const H in L)L[H]==null&&delete L[H];se=Qe({},N,{params:f(L)}),fe.params=f(fe.params)}const he=e.resolve(se,fe),Ae=N.hash||"";he.params=u(d(he.params));const x=p0(i,Qe({},N,{hash:l0(Ae),path:he.path})),w=r.createHref(x);return Qe({fullPath:x,hash:Ae,query:i===Iu?W0(N.query):N.query||{}},he,{redirectedFrom:void 0,href:w})}function E(N){return typeof N=="string"?Oa(n,N,l.value.path):Qe({},N)}function y(N,fe){if(c!==N)return kr(8,{from:fe,to:N})}function T(N){return R(N)}function D(N){return T(Qe(E(N),{replace:!0}))}function P(N){const fe=N.matched[N.matched.length-1];if(fe&&fe.redirect){const{redirect:se}=fe;let he=typeof se=="function"?se(N):se;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=E(he):{path:he},he.params={}),Qe({query:N.query,hash:N.hash,params:he.path!=null?{}:N.params},he)}}function R(N,fe){const se=c=p(N),he=l.value,Ae=N.state,x=N.force,w=N.replace===!0,L=P(se);if(L)return R(Qe(E(L),{state:typeof L=="object"?Qe({},Ae,L.state):Ae,force:x,replace:w}),fe||se);const H=se;H.redirectedFrom=fe;let F;return!x&&m0(i,he,se)&&(F=kr(16,{to:H,from:he}),te(he,he,!0,!1)),(F?Promise.resolve(F):A(H,he)).catch(J=>kn(J)?kn(J,2)?J:ce(J):Y(J,H,he)).then(J=>{if(J){if(kn(J,2))return R(Qe({replace:w},E(J.to),{state:typeof J.to=="object"?Qe({},Ae,J.to.state):Ae,force:x}),fe||H)}else J=ae(H,he,!0,w,Ae);return ee(H,he,J),J})}function ne(N,fe){const se=y(N,fe);return se?Promise.reject(se):Promise.resolve()}function M(N){const fe=re.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(N):N()}function A(N,fe){let se;const[he,Ae,x]=J0(N,fe);se=Fa(he.reverse(),"beforeRouteLeave",N,fe);for(const L of he)L.leaveGuards.forEach(H=>{se.push(mi(H,N,fe))});const w=ne.bind(null,N,fe);return se.push(w),be(se).then(()=>{se=[];for(const L of s.list())se.push(mi(L,N,fe));return se.push(w),be(se)}).then(()=>{se=Fa(Ae,"beforeRouteUpdate",N,fe);for(const L of Ae)L.updateGuards.forEach(H=>{se.push(mi(H,N,fe))});return se.push(w),be(se)}).then(()=>{se=[];for(const L of x)if(L.beforeEnter)if(wn(L.beforeEnter))for(const H of L.beforeEnter)se.push(mi(H,N,fe));else se.push(mi(L.beforeEnter,N,fe));return se.push(w),be(se)}).then(()=>(N.matched.forEach(L=>L.enterCallbacks={}),se=Fa(x,"beforeRouteEnter",N,fe,M),se.push(w),be(se))).then(()=>{se=[];for(const L of o.list())se.push(mi(L,N,fe));return se.push(w),be(se)}).catch(L=>kn(L,8)?L:Promise.reject(L))}function ee(N,fe,se){a.list().forEach(he=>M(()=>he(N,fe,se)))}function ae(N,fe,se,he,Ae){const x=y(N,fe);if(x)return x;const w=fe===ai,L=Pr?history.state:{};se&&(he||w?r.replace(N.fullPath,Qe({scroll:w&&L&&L.scroll},Ae)):r.push(N.fullPath,Ae)),l.value=N,te(N,fe,se,w),ce()}let me;function I(){me||(me=r.listen((N,fe,se)=>{if(!xe.listening)return;const he=p(N),Ae=P(he);if(Ae){R(Qe(Ae,{replace:!0,force:!0}),he).catch(vs);return}c=he;const x=l.value;Pr&&M0(Tu(x.fullPath,se.delta),aa()),A(he,x).catch(w=>kn(w,12)?w:kn(w,2)?(R(Qe(E(w.to),{force:!0}),he).then(L=>{kn(L,20)&&!se.delta&&se.type===Rs.pop&&r.go(-1,!1)}).catch(vs),Promise.reject()):(se.delta&&r.go(-se.delta,!1),Y(w,he,x))).then(w=>{w=w||ae(he,x,!1),w&&(se.delta&&!kn(w,8)?r.go(-se.delta,!1):se.type===Rs.pop&&kn(w,20)&&r.go(-1,!1)),ee(he,x,w)}).catch(vs)}))}let k=es(),X=es(),K;function Y(N,fe,se){ce(N);const he=X.list();return he.length?he.forEach(Ae=>Ae(N,fe,se)):console.error(N),Promise.reject(N)}function le(){return K&&l.value!==ai?Promise.resolve():new Promise((N,fe)=>{k.add([N,fe])})}function ce(N){return K||(K=!N,I(),k.list().forEach(([fe,se])=>N?se(N):fe()),k.reset()),N}function te(N,fe,se,he){const{scrollBehavior:Ae}=t;if(!Pr||!Ae)return Promise.resolve();const x=!se&&b0(Tu(N.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return xc().then(()=>Ae(N,fe,x)).then(w=>w&&E0(w)).catch(w=>Y(w,N,fe))}const ie=N=>r.go(N);let V;const re=new Set,xe={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:T,replace:D,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:le,install(N){const fe=this;N.component("RouterLink",Un),N.component("RouterView",rp),N.config.globalProperties.$router=fe,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(l)}),Pr&&!V&&l.value===ai&&(V=!0,T(r.location).catch(Ae=>{}));const se={};for(const Ae in ai)Object.defineProperty(se,Ae,{get:()=>l.value[Ae],enumerable:!0});N.provide(la,fe),N.provide(ip,sh(se)),N.provide(Ol,l);const he=N.unmount;re.add(N),N.unmount=function(){re.delete(N),re.size<1&&(c=ai,me&&me(),me=null,l.value=ai,V=!1,K=!1),he()}}};function be(N){return N.reduce((fe,se)=>fe.then(()=>M(se)),Promise.resolve())}return xe}function J0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Gr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Gr(c,l))||r.push(l))}return[n,i,r]}function Q0(){return bt(la)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="160",ev=0,zu=1,tv=2,sp=1,nv=2,$n=3,Ri=0,en=1,Jn=2,Ei=0,Hr=1,Gu=2,ku=3,Vu=4,iv=5,Vi=100,rv=101,sv=102,Wu=103,Xu=104,ov=200,av=201,lv=202,cv=203,Fl=204,Bl=205,uv=206,fv=207,dv=208,hv=209,pv=210,mv=211,gv=212,_v=213,vv=214,xv=0,Sv=1,yv=2,Go=3,Ev=4,Mv=5,bv=6,Tv=7,op=0,Av=1,wv=2,Mi=0,Rv=1,Cv=2,Pv=3,Lv=4,Dv=5,Uv=6,ap=300,Vr=301,Wr=302,Hl=303,zl=304,ca=306,Gl=1e3,Mn=1001,kl=1002,Kt=1003,qu=1004,Ba=1005,hn=1006,Iv=1007,Cs=1008,bi=1009,Nv=1010,Ov=1011,Rc=1012,lp=1013,vi=1014,xi=1015,Ps=1016,cp=1017,up=1018,Yi=1020,Fv=1021,bn=1023,Bv=1024,Hv=1025,Ki=1026,Xr=1027,zv=1028,fp=1029,Gv=1030,dp=1031,hp=1033,Ha=33776,za=33777,Ga=33778,ka=33779,ju=35840,$u=35841,Yu=35842,Ku=35843,pp=36196,Zu=37492,Ju=37496,Qu=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,of=37814,af=37815,lf=37816,cf=37817,uf=37818,ff=37819,df=37820,hf=37821,Va=36492,pf=36494,mf=36495,kv=36283,gf=36284,_f=36285,vf=36286,mp=3e3,Zi=3001,Vv=3200,Wv=3201,Xv=0,qv=1,gn="",Dt="srgb",ii="srgb-linear",Cc="display-p3",ua="display-p3-linear",ko="linear",ht="srgb",Vo="rec709",Wo="p3",dr=7680,xf=519,jv=512,$v=513,Yv=514,gp=515,Kv=516,Zv=517,Jv=518,Qv=519,Sf=35044,yf="300 es",Vl=1035,Qn=2e3,Xo=2001;class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,Wl=180/Math.PI;function Os(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function ex(t,e){return(t%e+e)%e}function Xa(t,e,n){return(1-n)*t+n*e}function Ef(t){return(t&t-1)===0&&t!==0}function Xl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],y=r[4],T=r[7],D=r[2],P=r[5],R=r[8];return s[0]=o*_+a*E+l*D,s[3]=o*m+a*y+l*P,s[6]=o*p+a*T+l*R,s[1]=c*_+u*E+f*D,s[4]=c*m+u*y+f*P,s[7]=c*p+u*T+f*R,s[2]=d*_+h*E+g*D,s[5]=d*m+h*y+g*P,s[8]=d*p+h*T+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qa.makeScale(e,n)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,n){return this.premultiply(qa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Ye;function _p(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tx(){const t=qo("canvas");return t.style.display="block",t}const Mf={};function Ss(t){t in Mf||(Mf[t]=!0,console.warn(t))}const bf=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tf=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[ii]:{transfer:ko,primaries:Vo,toReference:t=>t,fromReference:t=>t},[Dt]:{transfer:ht,primaries:Vo,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ua]:{transfer:ko,primaries:Wo,toReference:t=>t.applyMatrix3(Tf),fromReference:t=>t.applyMatrix3(bf)},[Cc]:{transfer:ht,primaries:Wo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tf),fromReference:t=>t.applyMatrix3(bf).convertLinearToSRGB()}},nx=new Set([ii,ua]),rt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===gn?ko:Ys[t].transfer}};function zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ja(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hr;class vp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=qo("canvas")),hr.width=e.width,hr.height=e.height;const i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zr(n[i]/255)*255):n[i]=zr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ix=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $a(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class cn extends jr{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Mn,r=Mn,s=hn,o=Cs,a=bn,l=bi,c=cn.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Os(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zi?Dt:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Zi:mp}set encoding(e){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zi?Dt:gn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ap;cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,T=(h+1)/2,D=(p+1)/2,P=(u+d)/4,R=(f+_)/4,ne=(g+m)/4;return y>T&&y>D?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=R/i):T>D?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=P/r,s=ne/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=R/s,r=ne/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zi?Dt:gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends sx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sp extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ox extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),P=Math.atan2(D,p*E);m=Math.sin(m*P)/D,a=Math.sin(a*P)/D}const T=a*E;if(l=l*m+d*T,c=c*m+h*T,u=u*m+g*T,f=f*m+_*T,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Af.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Af.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new $,Af=new Fs;class Bs{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Zs.subVectors(this.max,ns),pr.subVectors(e.a,ns),mr.subVectors(e.b,ns),gr.subVectors(e.c,ns),li.subVectors(mr,pr),ci.subVectors(gr,mr),Oi.subVectors(pr,gr);let n=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Oi.z,Oi.y,li.z,0,-li.x,ci.z,0,-ci.x,Oi.z,0,-Oi.x,-li.y,li.x,0,-ci.y,ci.x,0,-Oi.y,Oi.x,0];return!Ka(n,pr,mr,gr,Zs)||(n=[1,0,0,0,1,0,0,0,1],!Ka(n,pr,mr,gr,Zs))?!1:(Js.crossVectors(li,ci),n=[Js.x,Js.y,Js.z],Ka(n,pr,mr,gr,Zs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new $,new $,new $,new $,new $,new $,new $,new $],xn=new $,Ks=new Bs,pr=new $,mr=new $,gr=new $,li=new $,ci=new $,Oi=new $,ns=new $,Zs=new $,Js=new $,Fi=new $;function Ka(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fi.fromArray(t,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=n.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ax=new Bs,is=new $,Za=new $;class fa{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ax.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const n=is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Za)),this.expandByPoint(is.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new $,Ja=new $,Qs=new $,ui=new $,Qa=new $,eo=new $,el=new $;class yp{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,n),Wn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ja.copy(e).add(n).multiplyScalar(.5),Qs.copy(n).sub(e).normalize(),ui.copy(this.origin).sub(Ja);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Qs),a=ui.dot(this.direction),l=-ui.dot(Qs),c=ui.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(Qs,d),h}intersectSphere(e,n){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,n,i,r,s){Qa.subVectors(n,e),eo.subVectors(i,e),el.crossVectors(Qa,eo);let o=this.direction.dot(el),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(eo.crossVectors(ui,eo));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(el);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,cx)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),fi.crossVectors(i,sn),fi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),fi.crossVectors(i,sn)),fi.normalize(),to.crossVectors(sn,fi),r[0]=fi.x,r[4]=to.x,r[8]=sn.x,r[1]=fi.y,r[5]=to.y,r[9]=sn.y,r[2]=fi.z,r[6]=to.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],y=i[7],T=i[11],D=i[15],P=r[0],R=r[4],ne=r[8],M=r[12],A=r[1],ee=r[5],ae=r[9],me=r[13],I=r[2],k=r[6],X=r[10],K=r[14],Y=r[3],le=r[7],ce=r[11],te=r[15];return s[0]=o*P+a*A+l*I+c*Y,s[4]=o*R+a*ee+l*k+c*le,s[8]=o*ne+a*ae+l*X+c*ce,s[12]=o*M+a*me+l*K+c*te,s[1]=u*P+f*A+d*I+h*Y,s[5]=u*R+f*ee+d*k+h*le,s[9]=u*ne+f*ae+d*X+h*ce,s[13]=u*M+f*me+d*K+h*te,s[2]=g*P+_*A+m*I+p*Y,s[6]=g*R+_*ee+m*k+p*le,s[10]=g*ne+_*ae+m*X+p*ce,s[14]=g*M+_*me+m*K+p*te,s[3]=E*P+y*A+T*I+D*Y,s[7]=E*R+y*ee+T*k+D*le,s[11]=E*ne+y*ae+T*X+D*ce,s[15]=E*M+y*me+T*K+D*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,y=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,T=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,D=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,P=n*E+i*y+r*T+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=E*R,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*R,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*R,e[4]=y*R,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*R,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*R,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*R,e[8]=T*R,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*R,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*R,e[12]=D*R,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*R,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,E=l*c,y=l*u,T=l*f,D=i.x,P=i.y,R=i.z;return r[0]=(1-(_+p))*D,r[1]=(h+T)*D,r[2]=(g-y)*D,r[3]=0,r[4]=(h-T)*P,r[5]=(1-(d+p))*P,r[6]=(m+E)*P,r[7]=0,r[8]=(g+y)*R,r[9]=(m-E)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const o=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Qn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===Qn)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xo)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Qn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,_;if(a===Qn)g=(o+s)*f,_=-2*f;else if(a===Xo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new $,Sn=new Lt,lx=new $(0,0,0),cx=new $(1,1,1),fi=new $,to=new $,sn=new $,wf=new Lt,Rf=new Fs;class da{constructor(e=0,n=0,i=0,r=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const Cf=new $,vr=new Fs,Xn=new Lt,no=new $,rs=new $,fx=new $,dx=new Fs,Pf=new $(1,0,0),Lf=new $(0,1,0),Df=new $(0,0,1),hx={type:"added"},px={type:"removed"};class tn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new $,n=new da,i=new Fs,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ye}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,n){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?no.copy(e):no.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(rs,no,this.up):Xn.lookAt(no,rs,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Xn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new $(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new $,qn=new $,tl=new $,jn=new $,xr=new $,Sr=new $,Uf=new $,nl=new $,il=new $,rl=new $;let io=!1;class En{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),qn.subVectors(i,n),tl.subVectors(e,n);const o=yn.dot(yn),a=yn.dot(qn),l=yn.dot(tl),c=qn.dot(qn),u=qn.dot(tl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,n,i,r,s,o,a,l){return io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),io=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),qn.subVectors(e,n),yn.cross(qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return En.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),io=!0),En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,i),Sr.subVectors(s,i),nl.subVectors(e,i);const l=xr.dot(nl),c=Sr.dot(nl);if(l<=0&&c<=0)return n.copy(i);il.subVectors(e,r);const u=xr.dot(il),f=Sr.dot(il);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(xr,o);rl.subVectors(e,s);const h=xr.dot(rl),g=Sr.dot(rl);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Sr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Uf.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Uf,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(xr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ro={h:0,s:0,l:0};function sl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=ex(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sl(o,s,e+1/3),this.g=sl(o,s,e),this.b=sl(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dt){const i=Mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return rt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Qt(Ft.r*255,0,255))*65536+Math.round(Qt(Ft.g*255,0,255))*256+Math.round(Qt(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){rt.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Dt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+n,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(di),e.getHSL(ro);const i=Xa(di.h,ro.h,n),r=Xa(di.s,ro.s,n),s=Xa(di.l,ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new nt;nt.NAMES=Mp;let mx=0;class Hs extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Hr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bp extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new $,so=new at;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)so.fromBufferAttribute(this,n),so.applyMatrix3(e),this.setXY(n,so.x,so.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sf&&(e.usage=this.usage),e}}class Tp extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ap extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ti extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gx=0;const dn=new Lt,ol=new tn,yr=new $,on=new Bs,ss=new Bs,Ct=new $;class oi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?Ap:Tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(on.min,ss.min),on.expandByPoint(Ct),Ct.addVectors(on.max,ss.max),on.expandByPoint(Ct)):(on.expandByPoint(ss.min),on.expandByPoint(ss.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),Ct.add(yr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new $,u[A]=new $;const f=new $,d=new $,h=new $,g=new at,_=new at,m=new at,p=new $,E=new $;function y(A,ee,ae){f.fromArray(r,A*3),d.fromArray(r,ee*3),h.fromArray(r,ae*3),g.fromArray(o,A*2),_.fromArray(o,ee*2),m.fromArray(o,ae*2),d.sub(f),h.sub(f),_.sub(g),m.sub(g);const me=1/(_.x*m.y-m.x*_.y);isFinite(me)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(h,-_.y).multiplyScalar(me),E.copy(h).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(me),c[A].add(p),c[ee].add(p),c[ae].add(p),u[A].add(E),u[ee].add(E),u[ae].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,ee=T.length;A<ee;++A){const ae=T[A],me=ae.start,I=ae.count;for(let k=me,X=me+I;k<X;k+=3)y(i[k+0],i[k+1],i[k+2])}const D=new $,P=new $,R=new $,ne=new $;function M(A){R.fromArray(s,A*3),ne.copy(R);const ee=c[A];D.copy(ee),D.sub(R.multiplyScalar(R.dot(ee))).normalize(),P.crossVectors(ne,ee);const me=P.dot(u[A])<0?-1:1;l[A*4]=D.x,l[A*4+1]=D.y,l[A*4+2]=D.z,l[A*4+3]=me}for(let A=0,ee=T.length;A<ee;++A){const ae=T[A],me=ae.start,I=ae.count;for(let k=me,X=me+I;k<X;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Bn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new Lt,Bi=new yp,oo=new fa,Nf=new $,Er=new $,Mr=new $,br=new $,al=new $,ao=new $,lo=new at,co=new at,uo=new at,Of=new $,Ff=new $,Bf=new $,fo=new $,ho=new $;class Si extends tn{constructor(e=new oi,n=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(al.fromBufferAttribute(f,e),o?ao.addScaledVector(al,u):ao.addScaledVector(al.sub(n),u))}n.add(ao)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(oo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(oo,Nf)===null||Bi.origin.distanceToSquared(Nf)>(e.far-e.near)**2))&&(If.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(If),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Bi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=E,D=y;T<D;T+=3){const P=a.getX(T),R=a.getX(T+1),ne=a.getX(T+2);r=po(this,p,e,i,c,u,f,P,R,ne),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);r=po(this,o,e,i,c,u,f,E,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=E,D=y;T<D;T+=3){const P=T,R=T+1,ne=T+2;r=po(this,p,e,i,c,u,f,P,R,ne),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=m,y=m+1,T=m+2;r=po(this,o,e,i,c,u,f,E,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _x(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;ho.copy(a),ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ho);return c<n.near||c>n.far?null:{distance:c,point:ho.clone(),object:t}}function po(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Er),t.getVertexPosition(l,Mr),t.getVertexPosition(c,br);const u=_x(t,e,n,i,Er,Mr,br,fo);if(u){r&&(lo.fromBufferAttribute(r,a),co.fromBufferAttribute(r,l),uo.fromBufferAttribute(r,c),u.uv=En.getInterpolation(fo,Er,Mr,br,lo,co,uo,new at)),s&&(lo.fromBufferAttribute(s,a),co.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,c),u.uv1=En.getInterpolation(fo,Er,Mr,br,lo,co,uo,new at),u.uv2=u.uv1),o&&(Of.fromBufferAttribute(o,a),Ff.fromBufferAttribute(o,l),Bf.fromBufferAttribute(o,c),u.normal=En.getInterpolation(fo,Er,Mr,br,Of,Ff,Bf,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};En.getNormal(Er,Mr,br,f.normal),u.face=f}return u}class zs extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(f,2));function g(_,m,p,E,y,T,D,P,R,ne,M){const A=T/R,ee=D/ne,ae=T/2,me=D/2,I=P/2,k=R+1,X=ne+1;let K=0,Y=0;const le=new $;for(let ce=0;ce<X;ce++){const te=ce*ee-me;for(let ie=0;ie<k;ie++){const V=ie*A-ae;le[_]=V*E,le[m]=te*y,le[p]=I,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=P>0?1:-1,u.push(le.x,le.y,le.z),f.push(ie/R),f.push(1-ce/ne),K+=1}}for(let ce=0;ce<ne;ce++)for(let te=0;te<R;te++){const ie=d+te+k*ce,V=d+te+k*(ce+1),re=d+(te+1)+k*(ce+1),xe=d+(te+1)+k*ce;l.push(ie,V,xe),l.push(V,re,xe),Y+=6}a.addGroup(h,Y,M),h+=Y,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=qr(t[n]);for(const r in i)e[r]=i[r]}return e}function vx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wp(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const xx={clone:qr,merge:$t};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rp extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Rp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class Ex extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const s=new pn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const o=new pn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const a=new pn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const l=new pn(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const c=new pn(Tr,Ar,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cp extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Vr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zi?Dt:gn),this.texture=new Cp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zs(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ei});s.uniforms.tEquirect.value=n;const o=new Si(r,s),a=n.minFilter;return n.minFilter===Cs&&(n.minFilter=hn),new Ex(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ll=new $,bx=new $,Tx=new Ye;class Gi{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ll.subVectors(i,n).cross(bx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Tx.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new fa,mo=new $;class Pp{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,m-h,T-p).normalize(),i[1].setComponents(l+s,d+c,m+h,T+p).normalize(),i[2].setComponents(l+o,d+u,m+g,T+E).normalize(),i[3].setComponents(l-o,d-u,m-g,T-E).normalize(),i[4].setComponents(l-a,d-f,m-_,T-y).normalize(),n===Qn)i[5].setComponents(l+a,d+f,m+_,T+y).normalize();else if(n===Xo)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ax(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(t.bindBuffer(f,c),h.count===-1&&g.length===0&&t.bufferSubData(f,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];n?t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}h.count!==-1&&(n?t.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):t.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Pc extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<c;y++){const T=y*f-s;g.push(T,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,T=E+c*(p+1),D=E+1+c*(p+1),P=E+1+c*p;h.push(y,T,P),h.push(T,D,P)}this.setIndex(h),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$y=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:wx,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Ux,aomap_pars_fragment:Ix,batching_pars_vertex:Nx,batching_vertex:Ox,begin_vertex:Fx,beginnormal_vertex:Bx,bsdfs:Hx,iridescence_fragment:zx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:jx,color_pars_vertex:$x,color_vertex:Yx,common:Kx,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:SS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:fS,fog_fragment:dS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_fragment:mS,lightmap_pars_fragment:gS,lights_lambert_fragment:_S,lights_lambert_pars_fragment:vS,lights_pars_begin:xS,lights_toon_fragment:yS,lights_toon_pars_fragment:ES,lights_phong_fragment:MS,lights_phong_pars_fragment:bS,lights_physical_fragment:TS,lights_physical_pars_fragment:AS,lights_fragment_begin:wS,lights_fragment_maps:RS,lights_fragment_end:CS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:US,map_fragment:IS,map_pars_fragment:NS,map_particle_fragment:OS,map_particle_pars_fragment:FS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:HS,morphcolor_vertex:zS,morphnormal_vertex:GS,morphtarget_pars_vertex:kS,morphtarget_vertex:VS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:qS,normal_pars_vertex:jS,normal_vertex:$S,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:QS,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:fy,skinbase_vertex:dy,skinning_pars_vertex:hy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:_y,tonemapping_fragment:vy,tonemapping_pars_fragment:xy,transmission_fragment:Sy,transmission_pars_fragment:yy,uv_pars_fragment:Ey,uv_pars_vertex:My,uv_vertex:by,worldpos_vertex:Ty,background_vert:Ay,background_frag:wy,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Py,cube_frag:Ly,depth_vert:Dy,depth_frag:Uy,distanceRGBA_vert:Iy,distanceRGBA_frag:Ny,equirect_vert:Oy,equirect_frag:Fy,linedashed_vert:By,linedashed_frag:Hy,meshbasic_vert:zy,meshbasic_frag:Gy,meshlambert_vert:ky,meshlambert_frag:Vy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:jy,meshphong_vert:$y,meshphong_frag:Yy,meshphysical_vert:Ky,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},ve={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};On.physical={uniforms:$t([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const go={r:0,b:0,g:0};function oE(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(m,p){let E=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?n:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ca)?(u===void 0&&(u=new Si(new zs(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:qr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,(f!==y||d!==y.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Si(new Pc(2,2),new ir({name:"BackgroundMaterial",uniforms:qr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,h=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(go,wp(t)),i.buffers.color.setClear(go.r,go.g,go.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function aE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,k,X,K,Y){let le=!1;if(o){const ce=_(K,X,k);c!==ce&&(c=ce,h(c.object)),le=p(I,K,X,Y),le&&E(I,K,X,Y)}else{const ce=k.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==ce)&&(c.geometry=K.id,c.program=X.id,c.wireframe=ce,le=!0)}Y!==null&&n.update(Y,t.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,ne(I,k,X,K),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,k,X){const K=X.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let le=Y[k.id];le===void 0&&(le={},Y[k.id]=le);let ce=le[K];return ce===void 0&&(ce=m(d()),le[K]=ce),ce}function m(I){const k=[],X=[],K=[];for(let Y=0;Y<r;Y++)k[Y]=0,X[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:K,object:I,attributes:{},index:null}}function p(I,k,X,K){const Y=c.attributes,le=k.attributes;let ce=0;const te=X.getAttributes();for(const ie in te)if(te[ie].location>=0){const re=Y[ie];let xe=le[ie];if(xe===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),re===void 0||re.attribute!==xe||xe&&re.data!==xe.data)return!0;ce++}return c.attributesNum!==ce||c.index!==K}function E(I,k,X,K){const Y={},le=k.attributes;let ce=0;const te=X.getAttributes();for(const ie in te)if(te[ie].location>=0){let re=le[ie];re===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const xe={};xe.attribute=re,re&&re.data&&(xe.data=re.data),Y[ie]=xe,ce++}c.attributes=Y,c.attributesNum=ce,c.index=K}function y(){const I=c.newAttributes;for(let k=0,X=I.length;k<X;k++)I[k]=0}function T(I){D(I,0)}function D(I,k){const X=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;X[I]=1,K[I]===0&&(t.enableVertexAttribArray(I),K[I]=1),Y[I]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),Y[I]=k)}function P(){const I=c.newAttributes,k=c.enabledAttributes;for(let X=0,K=k.length;X<K;X++)k[X]!==I[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function R(I,k,X,K,Y,le,ce){ce===!0?t.vertexAttribIPointer(I,k,X,Y,le):t.vertexAttribPointer(I,k,X,K,Y,le)}function ne(I,k,X,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Y=K.attributes,le=X.getAttributes(),ce=k.defaultAttributeValues;for(const te in le){const ie=le[te];if(ie.location>=0){let V=Y[te];if(V===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){const re=V.normalized,xe=V.itemSize,be=n.get(V);if(be===void 0)continue;const N=be.buffer,fe=be.type,se=be.bytesPerElement,he=i.isWebGL2===!0&&(fe===t.INT||fe===t.UNSIGNED_INT||V.gpuType===lp);if(V.isInterleavedBufferAttribute){const Ae=V.data,x=Ae.stride,w=V.offset;if(Ae.isInstancedInterleavedBuffer){for(let L=0;L<ie.locationSize;L++)D(ie.location+L,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let L=0;L<ie.locationSize;L++)T(ie.location+L);t.bindBuffer(t.ARRAY_BUFFER,N);for(let L=0;L<ie.locationSize;L++)R(ie.location+L,xe/ie.locationSize,fe,re,x*se,(w+xe/ie.locationSize*L)*se,he)}else{if(V.isInstancedBufferAttribute){for(let Ae=0;Ae<ie.locationSize;Ae++)D(ie.location+Ae,V.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ae=0;Ae<ie.locationSize;Ae++)T(ie.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,N);for(let Ae=0;Ae<ie.locationSize;Ae++)R(ie.location+Ae,xe/ie.locationSize,fe,re,xe*se,xe/ie.locationSize*Ae*se,he)}}else if(ce!==void 0){const re=ce[te];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(ie.location,re);break;case 3:t.vertexAttrib3fv(ie.location,re);break;case 4:t.vertexAttrib4fv(ie.location,re);break;default:t.vertexAttrib1fv(ie.location,re)}}}}P()}function M(){ae();for(const I in a){const k=a[I];for(const X in k){const K=k[X];for(const Y in K)g(K[Y].object),delete K[Y];delete k[X]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const X in k){const K=k[X];for(const Y in K)g(K[Y].object),delete K[Y];delete k[X]}delete a[I.id]}function ee(I){for(const k in a){const X=a[k];if(X[I.id]===void 0)continue;const K=X[I.id];for(const Y in K)g(K[Y].object),delete K[Y];delete X[I.id]}}function ae(){me(),u=!0,c!==l&&(c=l,h(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:me,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:ee,initAttributes:y,enableAttribute:T,disableUnusedAttributes:P}}function lE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=t,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=o||e.has("OES_texture_float"),D=y&&T,P=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:D,maxSamples:P}}function uE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,y=E*4;let T=p.clippingState||null;l.value=T,T=u(g,d,y,h);for(let D=0;D!==y;++D)T[D]=n[D];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=h;y!==_;++y,T+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function fE(t){let e=new WeakMap;function n(o,a){return a===Hl?o.mapping=Vr:a===zl&&(o.mapping=Wr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===zl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mx(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dE extends Rp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,Hf=[.125,.215,.35,.446,.526,.582],Wi=20,cl=new dE,zf=new nt;let ul=null,fl=0,dl=0;const ki=(1+Math.sqrt(5))/2,wr=1/ki,Gf=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,ki,wr),new $(0,ki,-wr),new $(wr,0,ki),new $(-wr,0,ki),new $(ki,wr,0),new $(-ki,wr,0)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ps,format:bn,colorSpace:ii,depthBuffer:!1},r=Vf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hE(s)),this._blurMaterial=pE(s,e,n)}return r}_compileMaterial(e){const n=new Si(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zf),u.toneMapping=Mi,u.autoClear=!1;const h=new bp({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Si(new zs,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(zf),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;_o(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gf[(r-1)%Gf.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Si(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Wi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let E=0;for(let R=0;R<Wi;++R){const ne=R/_,M=Math.exp(-ne*ne/2);p.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const T=this._sizeLods[r],D=3*T*(r>y-Lr?r-y+Lr:0),P=4*(this._cubeSize-T);_o(n,D,P,3*T,2*T),l.setRenderTarget(n),l.render(f,cl)}}function hE(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+Hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lr?l=Hf[o-t+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*h),y=new Float32Array(m*g*h),T=new Float32Array(p*g*h);for(let P=0;P<h;P++){const R=P%3*2/3-1,ne=P>2?0:-1,M=[R,ne,0,R+2/3,ne,0,R+2/3,ne+1,0,R,ne,0,R+2/3,ne+1,0,R,ne+1,0];E.set(M,_*g*P),y.set(d,m*g*P);const A=[P,P,P,P,P,P];T.set(A,p*g*P)}const D=new oi;D.setAttribute("position",new Bn(E,_)),D.setAttribute("uv",new Bn(y,m)),D.setAttribute("faceIndex",new Bn(T,p)),e.push(D),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vf(t,e,n){const i=new nr(t,e,n);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pE(t,e,n){const i=new Float32Array(Wi),r=new $(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Wf(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Xf(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===zl,u=l===Vr||l===Wr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new kf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new kf(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _E(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let y=0,T=E.length;y<T;y+=3){const D=E[y+0],P=E[y+1],R=E[y+2];d.push(D,P,P,R,R,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const D=y+0,P=y+1,R=y+2;d.push(D,P,P,R,R,D)}}else return;const m=new(_p(d)?Ap:Tp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vE(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){t.drawElements(s,g,a,h*l),n.update(g,s,1)}function f(h,g,_){if(_===0)return;let m,p;if(r)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,h*l,_),n.update(g,s,_)}function d(h,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(h[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let p=0;for(let E=0;E<_;E++)p+=g[E];n.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function xE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SE(t,e){return t[0]-e[0]}function yE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let k=function(){me.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var h=k;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],ne=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),T===!0&&(M=2),D===!0&&(M=3);let A=u.attributes.position.count*M,ee=1;A>e.maxTextureSize&&(ee=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ae=new Float32Array(A*ee*4*_),me=new Sp(ae,A,ee,_);me.type=xi,me.needsUpdate=!0;const I=M*4;for(let X=0;X<_;X++){const K=P[X],Y=R[X],le=ne[X],ce=A*ee*4*X;for(let te=0;te<K.count;te++){const ie=te*I;y===!0&&(o.fromBufferAttribute(K,te),ae[ce+ie+0]=o.x,ae[ce+ie+1]=o.y,ae[ce+ie+2]=o.z,ae[ce+ie+3]=0),T===!0&&(o.fromBufferAttribute(Y,te),ae[ce+ie+4]=o.x,ae[ce+ie+5]=o.y,ae[ce+ie+6]=o.z,ae[ce+ie+7]=0),D===!0&&(o.fromBufferAttribute(le,te),ae[ce+ie+8]=o.x,ae[ce+ie+9]=o.y,ae[ce+ie+10]=o.z,ae[ce+ie+11]=le.itemSize===4?o.w:1)}}m={count:_,texture:me,size:new at(A,ee)},s.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const E=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];i[u.id]=_}for(let T=0;T<g;T++){const D=_[T];D[0]=T,D[1]=d[T]}_.sort(yE);for(let T=0;T<8;T++)T<g&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(SE);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const D=a[T],P=D[0],R=D[1];P!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+T)!==m[P]&&u.setAttribute("morphTarget"+T,m[P]),p&&u.getAttribute("morphNormal"+T)!==p[P]&&u.setAttribute("morphNormal"+T,p[P]),r[T]=R,E+=R):(m&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),p&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const y=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ME(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Dp extends cn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ki&&(i=vi),i===void 0&&u===Xr&&(i=Yi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Up=new cn,Ip=new Dp(1,1);Ip.compareFunction=gp;const Np=new Sp,Op=new ox,Fp=new Cp,qf=[],jf=[],$f=new Float32Array(16),Yf=new Float32Array(9),Kf=new Float32Array(4);function $r(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qf[r];if(s===void 0&&(s=new Float32Array(r),qf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ha(t,e){let n=jf[e];n===void 0&&(n=new Int32Array(e),jf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Kf.set(i),t.uniformMatrix2fv(this.addr,!1,Kf),At(n,i)}}function CE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Yf.set(i),t.uniformMatrix3fv(this.addr,!1,Yf),At(n,i)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;$f.set(i),t.uniformMatrix4fv(this.addr,!1,$f),At(n,i)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ip:Up;n.setTexture2D(e||s,r)}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Op,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Fp,r)}function kE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Np,r)}function VE(t){switch(t){case 5126:return bE;case 35664:return TE;case 35665:return AE;case 35666:return wE;case 35674:return RE;case 35675:return CE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return UE;case 35669:case 35673:return IE;case 5125:return NE;case 36294:return OE;case 36295:return FE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return kE}}function WE(t,e){t.uniform1fv(this.addr,e)}function XE(t,e){const n=$r(e,this.size,2);t.uniform2fv(this.addr,n)}function qE(t,e){const n=$r(e,this.size,3);t.uniform3fv(this.addr,n)}function jE(t,e){const n=$r(e,this.size,4);t.uniform4fv(this.addr,n)}function $E(t,e){const n=$r(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YE(t,e){const n=$r(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KE(t,e){const n=$r(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZE(t,e){t.uniform1iv(this.addr,e)}function JE(t,e){t.uniform2iv(this.addr,e)}function QE(t,e){t.uniform3iv(this.addr,e)}function eM(t,e){t.uniform4iv(this.addr,e)}function tM(t,e){t.uniform1uiv(this.addr,e)}function nM(t,e){t.uniform2uiv(this.addr,e)}function iM(t,e){t.uniform3uiv(this.addr,e)}function rM(t,e){t.uniform4uiv(this.addr,e)}function sM(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Up,s[o])}function oM(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Op,s[o])}function aM(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Fp,s[o])}function lM(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Np,s[o])}function cM(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return qE;case 35666:return jE;case 35674:return $E;case 35675:return YE;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return JE;case 35668:case 35672:return QE;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class uM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VE(n.type)}}class fM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Zf(t,e){t.seq.push(e),t.map[e.id]=e}function hM(t,e,n){const i=t.name,r=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),o=hl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zf(n,c===void 0?new uM(a,t,e):new fM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new dM(a),Zf(n,f)),n=f}}}class Ro{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Jf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pM=37297;let mM=0;function gM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _M(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Wo&&n===Vo?i="LinearDisplayP3ToLinearSRGB":e===Vo&&n===Wo&&(i="LinearSRGBToLinearDisplayP3"),t){case ii:case ua:return[i,"LinearTransferOETF"];case Dt:case Cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Qf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gM(t.getShaderSource(e),o)}else return r}function vM(t,e){const n=_M(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xM(t,e){let n;switch(e){case Rv:n="Linear";break;case Cv:n="Reinhard";break;case Pv:n="OptimizedCineon";break;case Lv:n="ACESFilmic";break;case Uv:n="AgX";break;case Dv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function yM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Dr).join(`
`)}function EM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Dr(t){return t!==""}function ed(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(t){return t.replace(bM,AM)}const TM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AM(t,e){let n=ke[e];if(n===void 0){const i=TM.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ql(n)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(t){return t.replace(wM,RM)}function RM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function id(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function PM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vr:case Wr:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case op:e="ENVMAP_BLENDING_MULTIPLY";break;case Av:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CM(n),c=PM(n),u=LM(n),f=DM(n),d=UM(n),h=n.isWebGL2?"":SM(n),g=yM(n),_=EM(s),m=r.createProgram();let p,E,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Dr).join(`
`),p.length>0&&(p+=`
`),E=[h,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Dr).join(`
`),E.length>0&&(E+=`
`)):(p=[id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),E=[h,id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Mi?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,vM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dr).join(`
`)),o=ql(o),o=ed(o,n),o=td(o,n),a=ql(a),a=ed(a,n),a=td(a,n),o=nd(o),a=nd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=y+p+o,D=y+E+a,P=Jf(r,r.VERTEX_SHADER,T),R=Jf(r,r.FRAGMENT_SHADER,D);r.attachShader(m,P),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function ne(ae){if(t.debug.checkShaderErrors){const me=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(R).trim();let X=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,P,R);else{const Y=Qf(r,P,"vertex"),le=Qf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+Y+`
`+le)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(I===""||k==="")&&(K=!1);K&&(ae.diagnostics={runnable:X,programLog:me,vertexShader:{log:I,prefix:p},fragmentShader:{log:k,prefix:E}})}r.deleteShader(P),r.deleteShader(R),M=new Ro(r,m),A=MM(r,m)}let M;this.getUniforms=function(){return M===void 0&&ne(this),M};let A;this.getAttributes=function(){return A===void 0&&ne(this),A};let ee=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=r.getProgramParameter(m,pM)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=R,this}let NM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FM(e),n.set(e,i)),i}}class FM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function BM(t,e,n,i,r,s,o){const a=new Ep,l=new OM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,A,ee,ae,me){const I=ae.fog,k=me.geometry,X=M.isMeshStandardMaterial?ae.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),Y=K&&K.mapping===ca?K.image.height:null,le=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=ce!==void 0?ce.length:0;let ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let V,re,xe,be;if(le){const Wt=On[le];V=Wt.vertexShader,re=Wt.fragmentShader}else V=M.vertexShader,re=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);const N=t.getRenderTarget(),fe=me.isInstancedMesh===!0,se=me.isBatchedMesh===!0,he=!!M.map,Ae=!!M.matcap,x=!!K,w=!!M.aoMap,L=!!M.lightMap,H=!!M.bumpMap,F=!!M.normalMap,J=!!M.displacementMap,oe=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,C=M.anisotropy>0,q=M.clearcoat>0,O=M.iridescence>0,G=M.sheen>0,pe=M.transmission>0,de=C&&!!M.anisotropyMap,ge=q&&!!M.clearcoatMap,Se=q&&!!M.clearcoatNormalMap,Ce=q&&!!M.clearcoatRoughnessMap,ue=O&&!!M.iridescenceMap,Ve=O&&!!M.iridescenceThicknessMap,Ue=G&&!!M.sheenColorMap,Le=G&&!!M.sheenRoughnessMap,Re=!!M.specularMap,ye=!!M.specularColorMap,Pe=!!M.specularIntensityMap,Ze=pe&&!!M.transmissionMap,gt=pe&&!!M.thicknessMap,je=!!M.gradientMap,_e=!!M.alphaMap,U=M.alphaTest>0,Ee=!!M.alphaHash,Me=!!M.extensions,Ne=!!k.attributes.uv1,De=!!k.attributes.uv2,ct=!!k.attributes.uv3;let ut=Mi;return M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ut=t.toneMapping),{isWebGL2:u,shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:re,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:se,instancing:fe,instancingColor:fe&&me.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ii,map:he,matcap:Ae,envMap:x,envMapMode:x&&K.mapping,envMapCubeUVHeight:Y,aoMap:w,lightMap:L,bumpMap:H,normalMap:F,displacementMap:d&&J,emissiveMap:oe,normalMapObjectSpace:F&&M.normalMapType===qv,normalMapTangentSpace:F&&M.normalMapType===Xv,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:de,clearcoat:q,clearcoatMap:ge,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,iridescence:O,iridescenceMap:ue,iridescenceThicknessMap:Ve,sheen:G,sheenColorMap:Ue,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:ye,specularIntensityMap:Pe,transmission:pe,transmissionMap:Ze,thicknessMap:gt,gradientMap:je,opaque:M.transparent===!1&&M.blending===Hr,alphaMap:_e,alphaTest:U,alphaHash:Ee,combine:M.combine,mapUv:he&&_(M.map.channel),aoMapUv:w&&_(M.aoMap.channel),lightMapUv:L&&_(M.lightMap.channel),bumpMapUv:H&&_(M.bumpMap.channel),normalMapUv:F&&_(M.normalMap.channel),displacementMapUv:J&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Pe&&_(M.specularIntensityMap.channel),transmissionMapUv:Ze&&_(M.transmissionMap.channel),thicknessMapUv:gt&&_(M.thicknessMap.channel),alphaMapUv:_e&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(F||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:De,vertexUv3s:ct,pointsUvs:me.isPoints===!0&&!!k.attributes.uv&&(he||_e),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:me.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:ut,useLegacyLights:t._useLegacyLights,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Me&&M.extensions.derivatives===!0,extensionFragDepth:Me&&M.extensions.fragDepth===!0,extensionDrawBuffers:Me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ee in M.defines)A.push(ee),A.push(M.defines[ee]);return M.isRawShaderMaterial===!1&&(E(A,M),y(A,M),A.push(t.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){const A=g[M.type];let ee;if(A){const ae=On[A];ee=xx.clone(ae.uniforms)}else ee=M.uniforms;return ee}function D(M,A){let ee;for(let ae=0,me=c.length;ae<me;ae++){const I=c[ae];if(I.cacheKey===A){ee=I,++ee.usedTimes;break}}return ee===void 0&&(ee=new IM(t,A,M,s),c.push(ee)),ee}function P(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function ne(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:D,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:ne}}function HM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||zM),i.length>1&&i.sort(d||rd),r.length>1&&r.sort(d||rd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sd,t.set(i,[o])):r>=s.length?(o=new sd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new nt};break;case"SpotLight":n={position:new $,direction:new $,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function VM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WM=0;function XM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qM(t,e){const n=new kM,i=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new Lt,a=new Lt;function l(u,f){let d=0,h=0,g=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let _=0,m=0,p=0,E=0,y=0,T=0,D=0,P=0,R=0,ne=0,M=0;u.sort(XM);const A=f===!0?Math.PI:1;for(let ae=0,me=u.length;ae<me;ae++){const I=u[ae],k=I.color,X=I.intensity,K=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=k.r*X*A,h+=k.g*X*A,g+=k.b*X*A;else if(I.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(I.sh.coefficients[le],X);M++}else if(I.isDirectionalLight){const le=n.get(I);if(le.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const ce=I.shadow,te=i.get(I);te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=I.shadow.matrix,T++}r.directional[_]=le,_++}else if(I.isSpotLight){const le=n.get(I);le.position.setFromMatrixPosition(I.matrixWorld),le.color.copy(k).multiplyScalar(X*A),le.distance=K,le.coneCos=Math.cos(I.angle),le.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),le.decay=I.decay,r.spot[p]=le;const ce=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ce.updateMatrices(I),I.castShadow&&ne++),r.spotLightMatrix[p]=ce.matrix,I.castShadow){const te=i.get(I);te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,r.spotShadow[p]=te,r.spotShadowMap[p]=Y,P++}p++}else if(I.isRectAreaLight){const le=n.get(I);le.color.copy(k).multiplyScalar(X),le.halfWidth.set(I.width*.5,0,0),le.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=le,E++}else if(I.isPointLight){const le=n.get(I);if(le.color.copy(I.color).multiplyScalar(I.intensity*A),le.distance=I.distance,le.decay=I.decay,I.castShadow){const ce=I.shadow,te=i.get(I);te.shadowBias=ce.bias,te.shadowNormalBias=ce.normalBias,te.shadowRadius=ce.radius,te.shadowMapSize=ce.mapSize,te.shadowCameraNear=ce.camera.near,te.shadowCameraFar=ce.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=I.shadow.matrix,D++}r.point[m]=le,m++}else if(I.isHemisphereLight){const le=n.get(I);le.skyColor.copy(I.color).multiplyScalar(X*A),le.groundColor.copy(I.groundColor).multiplyScalar(X*A),r.hemi[y]=le,y++}}E>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const ee=r.hash;(ee.directionalLength!==_||ee.pointLength!==m||ee.spotLength!==p||ee.rectAreaLength!==E||ee.hemiLength!==y||ee.numDirectionalShadows!==T||ee.numPointShadows!==D||ee.numSpotShadows!==P||ee.numSpotMaps!==R||ee.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+R-ne,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=ne,r.numLightProbes=M,ee.directionalLength=_,ee.pointLength=m,ee.spotLength=p,ee.rectAreaLength=E,ee.hemiLength=y,ee.numDirectionalShadows=T,ee.numPointShadows=D,ee.numSpotShadows=P,ee.numSpotMaps=R,ee.numLightProbes=M,r.version=WM++)}function c(u,f){let d=0,h=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const T=u[E];if(T.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(p),d++}else if(T.isSpotLight){const D=r.spot[g];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const D=r.rectArea[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const D=r.point[h];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const D=r.hemi[m];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function od(t,e){const n=new qM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jM(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new od(t,e),n.set(s,[l])):o>=a.length?(l=new od(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class $M extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JM(t,e,n){let i=new Pp;const r=new at,s=new at,o=new It,a=new $M({depthPacking:Wv}),l=new YM,c={},u=n.maxTextureSize,f={[Ri]:en,[en]:Ri,[Jn]:Jn},d=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:KM,fragmentShader:ZM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let p=this.type;this.render=function(P,R,ne){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=t.getRenderTarget(),A=t.getActiveCubeFace(),ee=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(Ei),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const me=p!==$n&&this.type===$n,I=p===$n&&this.type!==$n;for(let k=0,X=P.length;k<X;k++){const K=P[k],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const le=Y.getFrameExtents();if(r.multiply(le),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,Y.mapSize.y=s.y)),Y.map===null||me===!0||I===!0){const te=this.type!==$n?{minFilter:Kt,magFilter:Kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new nr(r.x,r.y,te),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const ce=Y.getViewportCount();for(let te=0;te<ce;te++){const ie=Y.getViewport(te);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),ae.viewport(o),Y.updateMatrices(K,te),i=Y.getFrustum(),T(R,ne,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===$n&&E(Y,ne),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,A,ee)};function E(P,R){const ne=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new nr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(R,null,ne,d,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(R,null,ne,h,_,null)}function y(P,R,ne,M){let A=null;const ee=ne.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(ee!==void 0)A=ee;else if(A=ne.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ae=A.uuid,me=R.uuid;let I=c[ae];I===void 0&&(I={},c[ae]=I);let k=I[me];k===void 0&&(k=A.clone(),I[me]=k,R.addEventListener("dispose",D)),A=k}if(A.visible=R.visible,A.wireframe=R.wireframe,M===$n?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,ne.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=t.properties.get(A);ae.light=ne}return A}function T(P,R,ne,M,A){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===$n)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld);const me=e.update(P),I=P.material;if(Array.isArray(I)){const k=me.groups;for(let X=0,K=k.length;X<K;X++){const Y=k[X],le=I[Y.materialIndex];if(le&&le.visible){const ce=y(P,le,M,A);P.onBeforeShadow(t,P,R,ne,me,ce,Y),t.renderBufferDirect(ne,null,me,ce,P,Y),P.onAfterShadow(t,P,R,ne,me,ce,Y)}}}else if(I.visible){const k=y(P,I,M,A);P.onBeforeShadow(t,P,R,ne,me,k,null),t.renderBufferDirect(ne,null,me,k,P,null),P.onAfterShadow(t,P,R,ne,me,k,null)}}const ae=P.children;for(let me=0,I=ae.length;me<I;me++)T(ae[me],R,ne,M,A)}function D(P){P.target.removeEventListener("dispose",D);for(const ne in c){const M=c[ne],A=P.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function QM(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const Ee=new It;let Me=null;const Ne=new It(0,0,0,0);return{setMask:function(De){Me!==De&&!U&&(t.colorMask(De,De,De,De),Me=De)},setLocked:function(De){U=De},setClear:function(De,ct,ut,wt,Wt){Wt===!0&&(De*=wt,ct*=wt,ut*=wt),Ee.set(De,ct,ut,wt),Ne.equals(Ee)===!1&&(t.clearColor(De,ct,ut,wt),Ne.copy(Ee))},reset:function(){U=!1,Me=null,Ne.set(-1,0,0,0)}}}function s(){let U=!1,Ee=null,Me=null,Ne=null;return{setTest:function(De){De?se(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(De){Ee!==De&&!U&&(t.depthMask(De),Ee=De)},setFunc:function(De){if(Me!==De){switch(De){case xv:t.depthFunc(t.NEVER);break;case Sv:t.depthFunc(t.ALWAYS);break;case yv:t.depthFunc(t.LESS);break;case Go:t.depthFunc(t.LEQUAL);break;case Ev:t.depthFunc(t.EQUAL);break;case Mv:t.depthFunc(t.GEQUAL);break;case bv:t.depthFunc(t.GREATER);break;case Tv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=De}},setLocked:function(De){U=De},setClear:function(De){Ne!==De&&(t.clearDepth(De),Ne=De)},reset:function(){U=!1,Ee=null,Me=null,Ne=null}}}function o(){let U=!1,Ee=null,Me=null,Ne=null,De=null,ct=null,ut=null,wt=null,Wt=null;return{setTest:function(ft){U||(ft?se(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(ft){Ee!==ft&&!U&&(t.stencilMask(ft),Ee=ft)},setFunc:function(ft,Xt,Pn){(Me!==ft||Ne!==Xt||De!==Pn)&&(t.stencilFunc(ft,Xt,Pn),Me=ft,Ne=Xt,De=Pn)},setOp:function(ft,Xt,Pn){(ct!==ft||ut!==Xt||wt!==Pn)&&(t.stencilOp(ft,Xt,Pn),ct=ft,ut=Xt,wt=Pn)},setLocked:function(ft){U=ft},setClear:function(ft){Wt!==ft&&(t.clearStencil(ft),Wt=ft)},reset:function(){U=!1,Ee=null,Me=null,Ne=null,De=null,ct=null,ut=null,wt=null,Wt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],m=null,p=!1,E=null,y=null,T=null,D=null,P=null,R=null,ne=null,M=new nt(0,0,0),A=0,ee=!1,ae=null,me=null,I=null,k=null,X=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,le=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ce)[1]),Y=le>=1):ce.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),Y=le>=2);let te=null,ie={};const V=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),xe=new It().fromArray(V),be=new It().fromArray(re);function N(U,Ee,Me,Ne){const De=new Uint8Array(4),ct=t.createTexture();t.bindTexture(U,ct),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ut=0;ut<Me;ut++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(Ee+ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return ct}const fe={};fe[t.TEXTURE_2D]=N(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=N(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[t.TEXTURE_2D_ARRAY]=N(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=N(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(t.DEPTH_TEST),l.setFunc(Go),oe(!1),S(zu),se(t.CULL_FACE),F(Ei);function se(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function he(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Ae(U,Ee){return h[U]!==Ee?(t.bindFramebuffer(U,Ee),h[U]=Ee,i&&(U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ee),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function x(U,Ee){let Me=_,Ne=!1;if(U)if(Me=g.get(Ee),Me===void 0&&(Me=[],g.set(Ee,Me)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(Me.length!==De.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let ct=0,ut=De.length;ct<ut;ct++)Me[ct]=t.COLOR_ATTACHMENT0+ct;Me.length=De.length,Ne=!0}}else Me[0]!==t.COLOR_ATTACHMENT0&&(Me[0]=t.COLOR_ATTACHMENT0,Ne=!0);else Me[0]!==t.BACK&&(Me[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function w(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const L={[Vi]:t.FUNC_ADD,[rv]:t.FUNC_SUBTRACT,[sv]:t.FUNC_REVERSE_SUBTRACT};if(i)L[Wu]=t.MIN,L[Xu]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(L[Wu]=U.MIN_EXT,L[Xu]=U.MAX_EXT)}const H={[ov]:t.ZERO,[av]:t.ONE,[lv]:t.SRC_COLOR,[Fl]:t.SRC_ALPHA,[pv]:t.SRC_ALPHA_SATURATE,[dv]:t.DST_COLOR,[uv]:t.DST_ALPHA,[cv]:t.ONE_MINUS_SRC_COLOR,[Bl]:t.ONE_MINUS_SRC_ALPHA,[hv]:t.ONE_MINUS_DST_COLOR,[fv]:t.ONE_MINUS_DST_ALPHA,[mv]:t.CONSTANT_COLOR,[gv]:t.ONE_MINUS_CONSTANT_COLOR,[_v]:t.CONSTANT_ALPHA,[vv]:t.ONE_MINUS_CONSTANT_ALPHA};function F(U,Ee,Me,Ne,De,ct,ut,wt,Wt,ft){if(U===Ei){p===!0&&(he(t.BLEND),p=!1);return}if(p===!1&&(se(t.BLEND),p=!0),U!==iv){if(U!==E||ft!==ee){if((y!==Vi||P!==Vi)&&(t.blendEquation(t.FUNC_ADD),y=Vi,P=Vi),ft)switch(U){case Hr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gu:t.blendFunc(t.ONE,t.ONE);break;case ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,D=null,R=null,ne=null,M.set(0,0,0),A=0,E=U,ee=ft}return}De=De||Ee,ct=ct||Me,ut=ut||Ne,(Ee!==y||De!==P)&&(t.blendEquationSeparate(L[Ee],L[De]),y=Ee,P=De),(Me!==T||Ne!==D||ct!==R||ut!==ne)&&(t.blendFuncSeparate(H[Me],H[Ne],H[ct],H[ut]),T=Me,D=Ne,R=ct,ne=ut),(wt.equals(M)===!1||Wt!==A)&&(t.blendColor(wt.r,wt.g,wt.b,Wt),M.copy(wt),A=Wt),E=U,ee=!1}function J(U,Ee){U.side===Jn?he(t.CULL_FACE):se(t.CULL_FACE);let Me=U.side===en;Ee&&(Me=!Me),oe(Me),U.blending===Hr&&U.transparent===!1?F(Ei):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ne=U.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(U){ae!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),ae=U)}function S(U){U!==ev?(se(t.CULL_FACE),U!==me&&(U===zu?t.cullFace(t.BACK):U===tv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),me=U}function v(U){U!==I&&(Y&&t.lineWidth(U),I=U)}function C(U,Ee,Me){U?(se(t.POLYGON_OFFSET_FILL),(k!==Ee||X!==Me)&&(t.polygonOffset(Ee,Me),k=Ee,X=Me)):he(t.POLYGON_OFFSET_FILL)}function q(U){U?se(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function O(U){U===void 0&&(U=t.TEXTURE0+K-1),te!==U&&(t.activeTexture(U),te=U)}function G(U,Ee,Me){Me===void 0&&(te===null?Me=t.TEXTURE0+K-1:Me=te);let Ne=ie[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},ie[Me]=Ne),(Ne.type!==U||Ne.texture!==Ee)&&(te!==Me&&(t.activeTexture(Me),te=Me),t.bindTexture(U,Ee||fe[U]),Ne.type=U,Ne.texture=Ee)}function pe(){const U=ie[te];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){xe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function Ze(U){be.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),be.copy(U))}function gt(U,Ee){let Me=f.get(Ee);Me===void 0&&(Me=new WeakMap,f.set(Ee,Me));let Ne=Me.get(U);Ne===void 0&&(Ne=t.getUniformBlockIndex(Ee,U.name),Me.set(U,Ne))}function je(U,Ee){const Ne=f.get(Ee).get(U);u.get(Ee)!==Ne&&(t.uniformBlockBinding(Ee,Ne,U.__bindingPointIndex),u.set(Ee,Ne))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,ie={},h={},g=new WeakMap,_=[],m=null,p=!1,E=null,y=null,T=null,D=null,P=null,R=null,ne=null,M=new nt(0,0,0),A=0,ee=!1,ae=null,me=null,I=null,k=null,X=null,xe.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:he,bindFramebuffer:Ae,drawBuffers:x,useProgram:w,setBlending:F,setMaterial:J,setFlipSided:oe,setCullFace:S,setLineWidth:v,setPolygonOffset:C,setScissorTest:q,activeTexture:O,bindTexture:G,unbindTexture:pe,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:Re,texImage3D:ye,updateUBOMapping:gt,uniformBlockBinding:je,texStorage2D:Ue,texStorage3D:Le,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ve,scissor:Pe,viewport:Ze,reset:_e}}function eb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return h?new OffscreenCanvas(S,v):qo("canvas")}function _(S,v,C,q){let O=1;if((S.width>q||S.height>q)&&(O=q/Math.max(S.width,S.height)),O<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const G=v?Xl:Math.floor,pe=G(O*S.width),de=G(O*S.height);f===void 0&&(f=g(pe,de));const ge=C?g(pe,de):f;return ge.width=pe,ge.height=de,ge.getContext("2d").drawImage(S,0,0,pe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+pe+"x"+de+")."),ge}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ef(S.width)&&Ef(S.height)}function p(S){return a?!1:S.wrapS!==Mn||S.wrapT!==Mn||S.minFilter!==Kt&&S.minFilter!==hn}function E(S,v){return S.generateMipmaps&&v&&S.minFilter!==Kt&&S.minFilter!==hn}function y(S){t.generateMipmap(S)}function T(S,v,C,q,O=!1){if(a===!1)return v;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===t.RED&&(C===t.FLOAT&&(G=t.R32F),C===t.HALF_FLOAT&&(G=t.R16F),C===t.UNSIGNED_BYTE&&(G=t.R8)),v===t.RED_INTEGER&&(C===t.UNSIGNED_BYTE&&(G=t.R8UI),C===t.UNSIGNED_SHORT&&(G=t.R16UI),C===t.UNSIGNED_INT&&(G=t.R32UI),C===t.BYTE&&(G=t.R8I),C===t.SHORT&&(G=t.R16I),C===t.INT&&(G=t.R32I)),v===t.RG&&(C===t.FLOAT&&(G=t.RG32F),C===t.HALF_FLOAT&&(G=t.RG16F),C===t.UNSIGNED_BYTE&&(G=t.RG8)),v===t.RGBA){const pe=O?ko:rt.getTransfer(q);C===t.FLOAT&&(G=t.RGBA32F),C===t.HALF_FLOAT&&(G=t.RGBA16F),C===t.UNSIGNED_BYTE&&(G=pe===ht?t.SRGB8_ALPHA8:t.RGBA8),C===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),C===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function D(S,v,C){return E(S,C)===!0||S.isFramebufferTexture&&S.minFilter!==Kt&&S.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function P(S){return S===Kt||S===qu||S===Ba?t.NEAREST:t.LINEAR}function R(S){const v=S.target;v.removeEventListener("dispose",R),M(v),v.isVideoTexture&&u.delete(v)}function ne(S){const v=S.target;v.removeEventListener("dispose",ne),ee(v)}function M(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,q=d.get(C);if(q){const O=q[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&A(S),Object.keys(q).length===0&&d.delete(C)}i.remove(S)}function A(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const C=S.source,q=d.get(C);delete q[v.__cacheKey],o.memory.textures--}function ee(S){const v=S.texture,C=i.get(S),q=i.get(v);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(C.__webglFramebuffer[O]))for(let G=0;G<C.__webglFramebuffer[O].length;G++)t.deleteFramebuffer(C.__webglFramebuffer[O][G]);else t.deleteFramebuffer(C.__webglFramebuffer[O]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[O])}else{if(Array.isArray(C.__webglFramebuffer))for(let O=0;O<C.__webglFramebuffer.length;O++)t.deleteFramebuffer(C.__webglFramebuffer[O]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let O=0;O<C.__webglColorRenderbuffer.length;O++)C.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[O]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let O=0,G=v.length;O<G;O++){const pe=i.get(v[O]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(v[O])}i.remove(v),i.remove(S)}let ae=0;function me(){ae=0}function I(){const S=ae;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),ae+=1,S}function k(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function X(S,v){const C=i.get(S);if(S.isVideoTexture&&J(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(C,S,v);return}}n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+v)}function K(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){xe(C,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+v)}function Y(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){xe(C,S,v);return}n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+v)}function le(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){be(C,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+v)}const ce={[Gl]:t.REPEAT,[Mn]:t.CLAMP_TO_EDGE,[kl]:t.MIRRORED_REPEAT},te={[Kt]:t.NEAREST,[qu]:t.NEAREST_MIPMAP_NEAREST,[Ba]:t.NEAREST_MIPMAP_LINEAR,[hn]:t.LINEAR,[Iv]:t.LINEAR_MIPMAP_NEAREST,[Cs]:t.LINEAR_MIPMAP_LINEAR},ie={[jv]:t.NEVER,[Qv]:t.ALWAYS,[$v]:t.LESS,[gp]:t.LEQUAL,[Yv]:t.EQUAL,[Jv]:t.GEQUAL,[Kv]:t.GREATER,[Zv]:t.NOTEQUAL};function V(S,v,C){if(C?(t.texParameteri(S,t.TEXTURE_WRAP_S,ce[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ce[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ce[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,te[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,te[v.minFilter])):(t.texParameteri(S,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(S,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==Mn||v.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,t.TEXTURE_MAG_FILTER,P(v.magFilter)),t.texParameteri(S,t.TEXTURE_MIN_FILTER,P(v.minFilter)),v.minFilter!==Kt&&v.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Kt||v.minFilter!==Ba&&v.minFilter!==Cs||v.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ps&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function re(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));const q=v.source;let O=d.get(q);O===void 0&&(O={},d.set(q,O));const G=k(v);if(G!==S.__cacheKey){O[G]===void 0&&(O[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,C=!0),O[G].usedTimes++;const pe=O[S.__cacheKey];pe!==void 0&&(O[S.__cacheKey].usedTimes--,pe.usedTimes===0&&A(v)),S.__cacheKey=G,S.__webglTexture=O[G].texture}return C}function xe(S,v,C){let q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=t.TEXTURE_3D);const O=re(S,v),G=v.source;n.bindTexture(q,S.__webglTexture,t.TEXTURE0+C);const pe=i.get(G);if(G.version!==pe.__version||O===!0){n.activeTexture(t.TEXTURE0+C);const de=rt.getPrimaries(rt.workingColorSpace),ge=v.colorSpace===gn?null:rt.getPrimaries(v.colorSpace),Se=v.colorSpace===gn||de===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ce=p(v)&&m(v.image)===!1;let ue=_(v.image,Ce,!1,r.maxTextureSize);ue=oe(v,ue);const Ve=m(ue)||a,Ue=s.convert(v.format,v.colorSpace);let Le=s.convert(v.type),Re=T(v.internalFormat,Ue,Le,v.colorSpace,v.isVideoTexture);V(q,v,Ve);let ye;const Pe=v.mipmaps,Ze=a&&v.isVideoTexture!==!0&&Re!==pp,gt=pe.__version===void 0||O===!0,je=D(v,ue,Ve);if(v.isDepthTexture)Re=t.DEPTH_COMPONENT,a?v.type===xi?Re=t.DEPTH_COMPONENT32F:v.type===vi?Re=t.DEPTH_COMPONENT24:v.type===Yi?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:v.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ki&&Re===t.DEPTH_COMPONENT&&v.type!==Rc&&v.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=vi,Le=s.convert(v.type)),v.format===Xr&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,v.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Yi,Le=s.convert(v.type))),gt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Re,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Re,ue.width,ue.height,0,Ue,Le,null));else if(v.isDataTexture)if(Pe.length>0&&Ve){Ze&&gt&&n.texStorage2D(t.TEXTURE_2D,je,Re,Pe[0].width,Pe[0].height);for(let _e=0,U=Pe.length;_e<U;_e++)ye=Pe[_e],Ze?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Ue,Le,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Re,ye.width,ye.height,0,Ue,Le,ye.data);v.generateMipmaps=!1}else Ze?(gt&&n.texStorage2D(t.TEXTURE_2D,je,Re,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ue,Le,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ue.width,ue.height,0,Ue,Le,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Re,Pe[0].width,Pe[0].height,ue.depth);for(let _e=0,U=Pe.length;_e<U;_e++)ye=Pe[_e],v.format!==bn?Ue!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,ue.depth,Ue,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Re,ye.width,ye.height,ue.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,ue.depth,Ue,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Re,ye.width,ye.height,ue.depth,0,Ue,Le,ye.data)}else{Ze&&gt&&n.texStorage2D(t.TEXTURE_2D,je,Re,Pe[0].width,Pe[0].height);for(let _e=0,U=Pe.length;_e<U;_e++)ye=Pe[_e],v.format!==bn?Ue!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Ue,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Ue,Le,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Re,ye.width,ye.height,0,Ue,Le,ye.data)}else if(v.isDataArrayTexture)Ze?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Re,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ue,Le,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,Ue,Le,ue.data);else if(v.isData3DTexture)Ze?(gt&&n.texStorage3D(t.TEXTURE_3D,je,Re,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ue,Le,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,Ue,Le,ue.data);else if(v.isFramebufferTexture){if(gt)if(Ze)n.texStorage2D(t.TEXTURE_2D,je,Re,ue.width,ue.height);else{let _e=ue.width,U=ue.height;for(let Ee=0;Ee<je;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Re,_e,U,0,Ue,Le,null),_e>>=1,U>>=1}}else if(Pe.length>0&&Ve){Ze&&gt&&n.texStorage2D(t.TEXTURE_2D,je,Re,Pe[0].width,Pe[0].height);for(let _e=0,U=Pe.length;_e<U;_e++)ye=Pe[_e],Ze?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ue,Le,ye):n.texImage2D(t.TEXTURE_2D,_e,Re,Ue,Le,ye);v.generateMipmaps=!1}else Ze?(gt&&n.texStorage2D(t.TEXTURE_2D,je,Re,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ue,Le,ue)):n.texImage2D(t.TEXTURE_2D,0,Re,Ue,Le,ue);E(v,Ve)&&y(q),pe.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function be(S,v,C){if(v.image.length!==6)return;const q=re(S,v),O=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+C);const G=i.get(O);if(O.version!==G.__version||q===!0){n.activeTexture(t.TEXTURE0+C);const pe=rt.getPrimaries(rt.workingColorSpace),de=v.colorSpace===gn?null:rt.getPrimaries(v.colorSpace),ge=v.colorSpace===gn||pe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,Ce=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let _e=0;_e<6;_e++)!Se&&!Ce?ue[_e]=_(v.image[_e],!1,!0,r.maxCubemapSize):ue[_e]=Ce?v.image[_e].image:v.image[_e],ue[_e]=oe(v,ue[_e]);const Ve=ue[0],Ue=m(Ve)||a,Le=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),ye=T(v.internalFormat,Le,Re,v.colorSpace),Pe=a&&v.isVideoTexture!==!0,Ze=G.__version===void 0||q===!0;let gt=D(v,Ve,Ue);V(t.TEXTURE_CUBE_MAP,v,Ue);let je;if(Se){Pe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ye,Ve.width,Ve.height);for(let _e=0;_e<6;_e++){je=ue[_e].mipmaps;for(let U=0;U<je.length;U++){const Ee=je[U];v.format!==bn?Le!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,0,0,Ee.width,Ee.height,Le,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,0,0,Ee.width,Ee.height,Le,Re,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,ye,Ee.width,Ee.height,0,Le,Re,Ee.data)}}}else{je=v.mipmaps,Pe&&Ze&&(je.length>0&&gt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ye,ue[0].width,ue[0].height));for(let _e=0;_e<6;_e++)if(Ce){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ue[_e].width,ue[_e].height,Le,Re,ue[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,ue[_e].width,ue[_e].height,0,Le,Re,ue[_e].data);for(let U=0;U<je.length;U++){const Me=je[U].image[_e].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,0,0,Me.width,Me.height,Le,Re,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,ye,Me.width,Me.height,0,Le,Re,Me.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le,Re,ue[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,Le,Re,ue[_e]);for(let U=0;U<je.length;U++){const Ee=je[U];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,0,0,Le,Re,Ee.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,ye,Le,Re,Ee.image[_e])}}}E(v,Ue)&&y(t.TEXTURE_CUBE_MAP),G.__version=O.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function N(S,v,C,q,O,G){const pe=s.convert(C.format,C.colorSpace),de=s.convert(C.type),ge=T(C.internalFormat,pe,de,C.colorSpace);if(!i.get(v).__hasExternalTextures){const Ce=Math.max(1,v.width>>G),ue=Math.max(1,v.height>>G);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,G,ge,Ce,ue,v.depth,0,pe,de,null):n.texImage2D(O,G,ge,Ce,ue,0,pe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),F(v)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,O,i.get(C).__webglTexture,0,H(v)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,O,i.get(C).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(S,v,C){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(C||F(v)){const O=v.depthTexture;O&&O.isDepthTexture&&(O.type===xi?q=t.DEPTH_COMPONENT32F:O.type===vi&&(q=t.DEPTH_COMPONENT24));const G=H(v);F(v)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,q,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,G,q,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const q=H(v);C&&F(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,v.width,v.height):F(v)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,S)}else{const q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let O=0;O<q.length;O++){const G=q[O],pe=s.convert(G.format,G.colorSpace),de=s.convert(G.type),ge=T(G.internalFormat,pe,de,G.colorSpace),Se=H(v);C&&F(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ge,v.width,v.height):F(v)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,ge,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ge,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const q=i.get(v.depthTexture).__webglTexture,O=H(v);if(v.depthTexture.format===Ki)F(v)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(v.depthTexture.format===Xr)F(v)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function he(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]=t.createRenderbuffer(),fe(v.__webglDepthbuffer[q],S,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),fe(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(S,v,C){const q=i.get(S);v!==void 0&&N(q.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),C!==void 0&&he(S)}function x(S){const v=S.texture,C=i.get(S),q=i.get(v);S.addEventListener("dispose",ne),S.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=v.version,o.memory.textures++);const O=S.isWebGLCubeRenderTarget===!0,G=S.isWebGLMultipleRenderTargets===!0,pe=m(S)||a;if(O){C.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[de]=[];for(let ge=0;ge<v.mipmaps.length;ge++)C.__webglFramebuffer[de][ge]=t.createFramebuffer()}else C.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)C.__webglFramebuffer[de]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(G)if(r.drawBuffers){const de=S.texture;for(let ge=0,Se=de.length;ge<Se;ge++){const Ce=i.get(de[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&F(S)===!1){const de=G?v:[v];C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){const Se=de[ge];C.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[ge]);const Ce=s.convert(Se.format,Se.colorSpace),ue=s.convert(Se.type),Ve=T(Se.internalFormat,Ce,ue,Se.colorSpace,S.isXRRenderTarget===!0),Ue=H(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ve,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,C.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(C.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(O){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),V(t.TEXTURE_CUBE_MAP,v,pe);for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)N(C.__webglFramebuffer[de][ge],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else N(C.__webglFramebuffer[de],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);E(v,pe)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(G){const de=S.texture;for(let ge=0,Se=de.length;ge<Se;ge++){const Ce=de[ge],ue=i.get(Ce);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),V(t.TEXTURE_2D,Ce,pe),N(C.__webglFramebuffer,S,Ce,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),E(Ce,pe)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?de=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,q.__webglTexture),V(de,v,pe),a&&v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)N(C.__webglFramebuffer[ge],S,v,t.COLOR_ATTACHMENT0,de,ge);else N(C.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,de,0);E(v,pe)&&y(de),n.unbindTexture()}S.depthBuffer&&he(S)}function w(S){const v=m(S)||a,C=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0,O=C.length;q<O;q++){const G=C[q];if(E(G,v)){const pe=S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(G).__webglTexture;n.bindTexture(pe,de),y(pe),n.unbindTexture()}}}function L(S){if(a&&S.samples>0&&F(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],C=S.width,q=S.height;let O=t.COLOR_BUFFER_BIT;const G=[],pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(S),ge=S.isWebGLMultipleRenderTargets===!0;if(ge)for(let Se=0;Se<v.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){G.push(t.COLOR_ATTACHMENT0+Se),S.depthBuffer&&G.push(pe);const Ce=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ce===!1&&(S.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Se]),Ce===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[pe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[pe])),ge){const ue=i.get(v[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,C,q,0,0,C,q,O,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<v.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,de.__webglColorRenderbuffer[Se]);const Ce=i.get(v[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function H(S){return Math.min(r.maxSamples,S.samples)}function F(S){const v=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function oe(S,v){const C=S.colorSpace,q=S.format,O=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Vl||C!==ii&&C!==gn&&(rt.getTransfer(C)===ht?a===!1?e.has("EXT_sRGB")===!0&&q===bn?(S.format=Vl,S.minFilter=hn,S.generateMipmaps=!1):v=vp.sRGBToLinear(v):(q!==bn||O!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}this.allocateTextureUnit=I,this.resetTextureUnits=me,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=le,this.rebindTextures=Ae,this.setupRenderTarget=x,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=N,this.useMultisampledRTT=F}function tb(t,e,n){const i=n.isWebGL2;function r(s,o=gn){let a;const l=rt.getTransfer(o);if(s===bi)return t.UNSIGNED_BYTE;if(s===cp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===up)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Nv)return t.BYTE;if(s===Ov)return t.SHORT;if(s===Rc)return t.UNSIGNED_SHORT;if(s===lp)return t.INT;if(s===vi)return t.UNSIGNED_INT;if(s===xi)return t.FLOAT;if(s===Ps)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Fv)return t.ALPHA;if(s===bn)return t.RGBA;if(s===Bv)return t.LUMINANCE;if(s===Hv)return t.LUMINANCE_ALPHA;if(s===Ki)return t.DEPTH_COMPONENT;if(s===Xr)return t.DEPTH_STENCIL;if(s===Vl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zv)return t.RED;if(s===fp)return t.RED_INTEGER;if(s===Gv)return t.RG;if(s===dp)return t.RG_INTEGER;if(s===hp)return t.RGBA_INTEGER;if(s===Ha||s===za||s===Ga||s===ka)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ju||s===$u||s===Yu||s===Ku)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ju)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ku)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zu||s===Ju)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zu)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ju)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===cf||s===uf||s===ff||s===df||s===hf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ef)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===of)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===af)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ff)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===df)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hf)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Va||s===pf||s===mf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Va)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kv||s===gf||s===_f||s===vf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_f)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yi?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class nb extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vo extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rb extends jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=n.getContextAttributes();let m=null,p=null;const E=[],y=[],T=new at;let D=null;const P=new pn;P.layers.enable(1),P.viewport=new It;const R=new pn;R.layers.enable(2),R.viewport=new It;const ne=[P,R],M=new nb;M.layers.enable(1),M.layers.enable(2);let A=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=E[V];return re===void 0&&(re=new pl,E[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=E[V];return re===void 0&&(re=new pl,E[V]=re),re.getGripSpace()},this.getHand=function(V){let re=E[V];return re===void 0&&(re=new pl,E[V]=re),re.getHandSpace()};function ae(V){const re=y.indexOf(V.inputSource);if(re===-1)return;const xe=E[re];xe!==void 0&&(xe.update(V.inputSource,V.frame,c||o),xe.dispatchEvent({type:V.type,data:V.inputSource}))}function me(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",me),r.removeEventListener("inputsourceschange",I);for(let V=0;V<E.length;V++){const re=y[V];re!==null&&(y[V]=null,E[V].disconnect(re))}A=null,ee=null,e.setRenderTarget(m),h=null,d=null,f=null,r=null,p=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",me),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),p=new nr(h.framebufferWidth,h.framebufferHeight,{format:bn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,xe=null,be=null;_.depth&&(be=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=_.stencil?Xr:Ki,xe=_.stencil?Yi:vi);const N={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(N),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new nr(d.textureWidth,d.textureHeight,{format:bn,type:bi,depthTexture:new Dp(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const fe=e.properties.get(p);fe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(V){for(let re=0;re<V.removed.length;re++){const xe=V.removed[re],be=y.indexOf(xe);be>=0&&(y[be]=null,E[be].disconnect(xe))}for(let re=0;re<V.added.length;re++){const xe=V.added[re];let be=y.indexOf(xe);if(be===-1){for(let fe=0;fe<E.length;fe++)if(fe>=y.length){y.push(xe),be=fe;break}else if(y[fe]===null){y[fe]=xe,be=fe;break}if(be===-1)break}const N=E[be];N&&N.connect(xe)}}const k=new $,X=new $;function K(V,re,xe){k.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const be=k.distanceTo(X),N=re.projectionMatrix.elements,fe=xe.projectionMatrix.elements,se=N[14]/(N[10]-1),he=N[14]/(N[10]+1),Ae=(N[9]+1)/N[5],x=(N[9]-1)/N[5],w=(N[8]-1)/N[0],L=(fe[8]+1)/fe[0],H=se*w,F=se*L,J=be/(-w+L),oe=J*-w;re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(oe),V.translateZ(J),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const S=se+J,v=he+J,C=H-oe,q=F+(be-oe),O=Ae*he/v*S,G=x*he/v*S;V.projectionMatrix.makePerspective(C,q,O,G,S,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;M.near=R.near=P.near=V.near,M.far=R.far=P.far=V.far,(A!==M.near||ee!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,ee=M.far);const re=V.parent,xe=M.cameras;Y(M,re);for(let be=0;be<xe.length;be++)Y(xe[be],re);xe.length===2?K(M,P,R):M.projectionMatrix.copy(P.projectionMatrix),le(V,M,re)};function le(V,re,xe){xe===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(xe.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Wl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)};let ce=null;function te(V,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let be=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let N=0;N<xe.length;N++){const fe=xe[N];let se=null;if(h!==null)se=h.getViewport(fe);else{const Ae=f.getViewSubImage(d,fe);se=Ae.viewport,N===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let he=ne[N];he===void 0&&(he=new pn,he.layers.enable(N),he.viewport=new It,ne[N]=he),he.matrix.fromArray(fe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(fe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(se.x,se.y,se.width,se.height),N===0&&(M.matrix.copy(he.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(he)}}for(let xe=0;xe<E.length;xe++){const be=y[xe],N=E[xe];be!==null&&N!==void 0&&N.update(be,re,c||o)}ce&&ce(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const ie=new Lp;ie.setAnimationLoop(te),this.setAnimationLoop=function(V){ce=V},this.dispose=function(){}}}function sb(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ob(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const T=y.program;i.uniformBlockBinding(E,T)}function c(E,y){let T=r[E.id];T===void 0&&(g(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",m));const D=y.program;i.updateUBOMapping(E,D);const P=e.render.frame;s[E.id]!==P&&(d(E),s[E.id]=P)}function u(E){const y=f();E.__bindingPointIndex=y;const T=t.createBuffer(),D=E.__size,P=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],T=E.uniforms,D=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let P=0,R=T.length;P<R;P++){const ne=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,A=ne.length;M<A;M++){const ee=ne[M];if(h(ee,P,M,D)===!0){const ae=ee.__offset,me=Array.isArray(ee.value)?ee.value:[ee.value];let I=0;for(let k=0;k<me.length;k++){const X=me[k],K=_(X);typeof X=="number"||typeof X=="boolean"?(ee.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,ae+I,ee.__data)):X.isMatrix3?(ee.__data[0]=X.elements[0],ee.__data[1]=X.elements[1],ee.__data[2]=X.elements[2],ee.__data[3]=0,ee.__data[4]=X.elements[3],ee.__data[5]=X.elements[4],ee.__data[6]=X.elements[5],ee.__data[7]=0,ee.__data[8]=X.elements[6],ee.__data[9]=X.elements[7],ee.__data[10]=X.elements[8],ee.__data[11]=0):(X.toArray(ee.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ae,ee.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,y,T,D){const P=E.value,R=y+"_"+T;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{const ne=D[R];if(typeof P=="number"||typeof P=="boolean"){if(ne!==P)return D[R]=P,!0}else if(ne.equals(P)===!1)return ne.copy(P),!0}return!1}function g(E){const y=E.uniforms;let T=0;const D=16;for(let R=0,ne=y.length;R<ne;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,ee=M.length;A<ee;A++){const ae=M[A],me=Array.isArray(ae.value)?ae.value:[ae.value];for(let I=0,k=me.length;I<k;I++){const X=me[I],K=_(X),Y=T%D;Y!==0&&D-Y<K.boundary&&(T+=D-Y),ae.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=T,T+=K.storage}}}const P=T%D;return P>0&&(T+=D-P),E.__size=T,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Bp{constructor(e={}){const{canvas:n=tx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const y=this;let T=!1,D=0,P=0,R=null,ne=-1,M=null;const A=new It,ee=new It;let ae=null;const me=new nt(0);let I=0,k=n.width,X=n.height,K=1,Y=null,le=null;const ce=new It(0,0,k,X),te=new It(0,0,k,X);let ie=!1;const V=new Pp;let re=!1,xe=!1,be=null;const N=new Lt,fe=new at,se=new $,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return R===null?K:1}let x=i;function w(b,B){for(let j=0;j<b.length;j++){const Z=b[j],W=n.getContext(Z,B);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wc}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),x=w(B,b),x===null)throw w(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let L,H,F,J,oe,S,v,C,q,O,G,pe,de,ge,Se,Ce,ue,Ve,Ue,Le,Re,ye,Pe,Ze;function gt(){L=new gE(x),H=new cE(x,L,e),L.init(H),ye=new tb(x,L,H),F=new QM(x,L,H),J=new xE(x),oe=new HM,S=new eb(x,L,F,oe,H,ye,J),v=new fE(y),C=new mE(y),q=new Ax(x,H),Pe=new aE(x,L,q,H),O=new _E(x,q,J,Pe),G=new ME(x,O,q,J),Ue=new EE(x,H,S),Ce=new uE(oe),pe=new BM(y,v,C,L,H,Pe,Ce),de=new sb(y,oe),ge=new GM,Se=new jM(L,H),Ve=new oE(y,v,C,F,G,d,l),ue=new JM(y,G,H),Ze=new ob(x,J,H,F),Le=new lE(x,L,J,H),Re=new vE(x,L,J,H),J.programs=pe.programs,y.capabilities=H,y.extensions=L,y.properties=oe,y.renderLists=ge,y.shadowMap=ue,y.state=F,y.info=J}gt();const je=new rb(y,x);this.xr=je,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(k,X,!1))},this.getSize=function(b){return b.set(k,X)},this.setSize=function(b,B,j=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,X=B,n.width=Math.floor(b*K),n.height=Math.floor(B*K),j===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(k*K,X*K).floor()},this.setDrawingBufferSize=function(b,B,j){k=b,X=B,K=j,n.width=Math.floor(b*j),n.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,B,j,Z){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,B,j,Z),F.viewport(A.copy(ce).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,B,j,Z){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,B,j,Z),F.scissor(ee.copy(te).multiplyScalar(K).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){F.setScissorTest(ie=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(b=!0,B=!0,j=!0){let Z=0;if(b){let W=!1;if(R!==null){const Te=R.texture.format;W=Te===hp||Te===dp||Te===fp}if(W){const Te=R.texture.type,we=Te===bi||Te===vi||Te===Rc||Te===Yi||Te===cp||Te===up,Ie=Ve.getClearColor(),Oe=Ve.getClearAlpha(),We=Ie.r,Be=Ie.g,Ge=Ie.b;we?(h[0]=We,h[1]=Be,h[2]=Ge,h[3]=Oe,x.clearBufferuiv(x.COLOR,0,h)):(g[0]=We,g[1]=Be,g[2]=Ge,g[3]=Oe,x.clearBufferiv(x.COLOR,0,g))}else Z|=x.COLOR_BUFFER_BIT}B&&(Z|=x.DEPTH_BUFFER_BIT),j&&(Z|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ge.dispose(),Se.dispose(),oe.dispose(),v.dispose(),C.dispose(),G.dispose(),Pe.dispose(),Ze.dispose(),pe.dispose(),je.dispose(),je.removeEventListener("sessionstart",Wt),je.removeEventListener("sessionend",ft),be&&(be.dispose(),be=null),Xt.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=J.autoReset,B=ue.enabled,j=ue.autoUpdate,Z=ue.needsUpdate,W=ue.type;gt(),J.autoReset=b,ue.enabled=B,ue.autoUpdate=j,ue.needsUpdate=Z,ue.type=W}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Me(b){const B=b.target;B.removeEventListener("dispose",Me),Ne(B)}function Ne(b){De(b),oe.remove(b)}function De(b){const B=oe.get(b).programs;B!==void 0&&(B.forEach(function(j){pe.releaseProgram(j)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,j,Z,W,Te){B===null&&(B=he);const we=W.isMesh&&W.matrixWorld.determinant()<0,Ie=Rm(b,B,j,Z,W);F.setMaterial(Z,we);let Oe=j.index,We=1;if(Z.wireframe===!0){if(Oe=O.getWireframeAttribute(j),Oe===void 0)return;We=2}const Be=j.drawRange,Ge=j.attributes.position;let vt=Be.start*We,rn=(Be.start+Be.count)*We;Te!==null&&(vt=Math.max(vt,Te.start*We),rn=Math.min(rn,(Te.start+Te.count)*We)),Oe!==null?(vt=Math.max(vt,0),rn=Math.min(rn,Oe.count)):Ge!=null&&(vt=Math.max(vt,0),rn=Math.min(rn,Ge.count));const Rt=rn-vt;if(Rt<0||Rt===1/0)return;Pe.setup(W,Z,Ie,j,Oe);let zn,mt=Le;if(Oe!==null&&(zn=q.get(Oe),mt=Re,mt.setIndex(zn)),W.isMesh)Z.wireframe===!0?(F.setLineWidth(Z.wireframeLinewidth*Ae()),mt.setMode(x.LINES)):mt.setMode(x.TRIANGLES);else if(W.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),F.setLineWidth($e*Ae()),W.isLineSegments?mt.setMode(x.LINES):W.isLineLoop?mt.setMode(x.LINE_LOOP):mt.setMode(x.LINE_STRIP)}else W.isPoints?mt.setMode(x.POINTS):W.isSprite&&mt.setMode(x.TRIANGLES);if(W.isBatchedMesh)mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)mt.renderInstances(vt,Rt,W.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ya=Math.min(j.instanceCount,$e);mt.renderInstances(vt,Rt,ya)}else mt.render(vt,Rt)};function ct(b,B,j){b.transparent===!0&&b.side===Jn&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Ws(b,B,j),b.side=Ri,b.needsUpdate=!0,Ws(b,B,j),b.side=Jn):Ws(b,B,j)}this.compile=function(b,B,j=null){j===null&&(j=b),m=Se.get(j),m.init(),E.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(y._useLegacyLights);const Z=new Set;return b.traverse(function(W){const Te=W.material;if(Te)if(Array.isArray(Te))for(let we=0;we<Te.length;we++){const Ie=Te[we];ct(Ie,j,W),Z.add(Ie)}else ct(Te,j,W),Z.add(Te)}),E.pop(),m=null,Z},this.compileAsync=function(b,B,j=null){const Z=this.compile(b,B,j);return new Promise(W=>{function Te(){if(Z.forEach(function(we){oe.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){W(b);return}setTimeout(Te,10)}L.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ut=null;function wt(b){ut&&ut(b)}function Wt(){Xt.stop()}function ft(){Xt.start()}const Xt=new Lp;Xt.setAnimationLoop(wt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(b){ut=b,je.setAnimationLoop(b),b===null?Xt.stop():Xt.start()},je.addEventListener("sessionstart",Wt),je.addEventListener("sessionend",ft),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(B),B=je.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,B,R),m=Se.get(b,E.length),m.init(),E.push(m),N.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(N),xe=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,xe),_=ge.get(b,p.length),_.init(),p.push(_),Pn(b,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,le),this.info.render.frame++,re===!0&&Ce.beginShadows();const j=m.state.shadowsArray;if(ue.render(j,b,B),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(_,b),m.setupLights(y._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let W=0,Te=Z.length;W<Te;W++){const we=Z[W];Bc(_,b,we,we.viewport)}}else Bc(_,b,B);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,B),Pe.resetDefaultState(),ne=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(b,B,j,Z){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){Z&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);const we=G.update(b),Ie=b.material;Ie.visible&&_.push(b,we,Ie,j,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const we=G.update(b),Ie=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),se.copy(we.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(Ie)){const Oe=we.groups;for(let We=0,Be=Oe.length;We<Be;We++){const Ge=Oe[We],vt=Ie[Ge.materialIndex];vt&&vt.visible&&_.push(b,we,vt,j,se.z,Ge)}}else Ie.visible&&_.push(b,we,Ie,j,se.z,null)}}const Te=b.children;for(let we=0,Ie=Te.length;we<Ie;we++)Pn(Te[we],B,j,Z)}function Bc(b,B,j,Z){const W=b.opaque,Te=b.transmissive,we=b.transparent;m.setupLightsView(j),re===!0&&Ce.setGlobalState(y.clippingPlanes,j),Te.length>0&&wm(W,Te,B,j),Z&&F.viewport(A.copy(Z)),W.length>0&&Vs(W,B,j),Te.length>0&&Vs(Te,B,j),we.length>0&&Vs(we,B,j),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wm(b,B,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Te=H.isWebGL2;be===null&&(be=new nr(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Ps:bi,minFilter:Cs,samples:Te?4:0})),y.getDrawingBufferSize(fe),Te?be.setSize(fe.x,fe.y):be.setSize(Xl(fe.x),Xl(fe.y));const we=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(me),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Ie=y.toneMapping;y.toneMapping=Mi,Vs(b,j,Z),S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be);let Oe=!1;for(let We=0,Be=B.length;We<Be;We++){const Ge=B[We],vt=Ge.object,rn=Ge.geometry,Rt=Ge.material,zn=Ge.group;if(Rt.side===Jn&&vt.layers.test(Z.layers)){const mt=Rt.side;Rt.side=en,Rt.needsUpdate=!0,Hc(vt,j,Z,rn,Rt,zn),Rt.side=mt,Rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be)),y.setRenderTarget(we),y.setClearColor(me,I),y.toneMapping=Ie}function Vs(b,B,j){const Z=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Te=b.length;W<Te;W++){const we=b[W],Ie=we.object,Oe=we.geometry,We=Z===null?we.material:Z,Be=we.group;Ie.layers.test(j.layers)&&Hc(Ie,B,j,Oe,We,Be)}}function Hc(b,B,j,Z,W,Te){b.onBeforeRender(y,B,j,Z,W,Te),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(y,B,j,Z,b,Te),W.transparent===!0&&W.side===Jn&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,y.renderBufferDirect(j,B,Z,W,b,Te),W.side=Ri,W.needsUpdate=!0,y.renderBufferDirect(j,B,Z,W,b,Te),W.side=Jn):y.renderBufferDirect(j,B,Z,W,b,Te),b.onAfterRender(y,B,j,Z,W,Te)}function Ws(b,B,j){B.isScene!==!0&&(B=he);const Z=oe.get(b),W=m.state.lights,Te=m.state.shadowsArray,we=W.state.version,Ie=pe.getParameters(b,W.state,Te,B,j),Oe=pe.getProgramCacheKey(Ie);let We=Z.programs;Z.environment=b.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(b.isMeshStandardMaterial?C:v).get(b.envMap||Z.environment),We===void 0&&(b.addEventListener("dispose",Me),We=new Map,Z.programs=We);let Be=We.get(Oe);if(Be!==void 0){if(Z.currentProgram===Be&&Z.lightsStateVersion===we)return Gc(b,Ie),Be}else Ie.uniforms=pe.getUniforms(b),b.onBuild(j,Ie,y),b.onBeforeCompile(Ie,y),Be=pe.acquireProgram(Ie,Oe),We.set(Oe,Be),Z.uniforms=Ie.uniforms;const Ge=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=Ce.uniform),Gc(b,Ie),Z.needsLights=Pm(b),Z.lightsStateVersion=we,Z.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Be,Z.uniformsList=null,Be}function zc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Ro.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Gc(b,B){const j=oe.get(b);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Rm(b,B,j,Z,W){B.isScene!==!0&&(B=he),S.resetTextureUnits();const Te=B.fog,we=Z.isMeshStandardMaterial?B.environment:null,Ie=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ii,Oe=(Z.isMeshStandardMaterial?C:v).get(Z.envMap||we),We=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,rn=!!j.morphAttributes.color;let Rt=Mi;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Rt=y.toneMapping);const zn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=zn!==void 0?zn.length:0,$e=oe.get(Z),ya=m.state.lights;if(re===!0&&(xe===!0||b!==M)){const fn=b===M&&Z.id===ne;Ce.setState(Z,b,fn)}let _t=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ya.state.version||$e.outputColorSpace!==Ie||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||$e.envMap!==Oe||Z.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ce.numPlanes||$e.numIntersection!==Ce.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==Be||$e.morphTargets!==Ge||$e.morphNormals!==vt||$e.morphColors!==rn||$e.toneMapping!==Rt||H.isWebGL2===!0&&$e.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,$e.__version=Z.version);let Di=$e.currentProgram;_t===!0&&(Di=Ws(Z,B,W));let kc=!1,Zr=!1,Ea=!1;const Nt=Di.getUniforms(),Ui=$e.uniforms;if(F.useProgram(Di.program)&&(kc=!0,Zr=!0,Ea=!0),Z.id!==ne&&(ne=Z.id,Zr=!0),kc||M!==b){Nt.setValue(x,"projectionMatrix",b.projectionMatrix),Nt.setValue(x,"viewMatrix",b.matrixWorldInverse);const fn=Nt.map.cameraPosition;fn!==void 0&&fn.setValue(x,se.setFromMatrixPosition(b.matrixWorld)),H.logarithmicDepthBuffer&&Nt.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Zr=!0,Ea=!0)}if(W.isSkinnedMesh){Nt.setOptional(x,W,"bindMatrix"),Nt.setOptional(x,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(H.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Nt.setValue(x,"boneTexture",fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Nt.setOptional(x,W,"batchingTexture"),Nt.setValue(x,"batchingTexture",W._matricesTexture,S));const Ma=j.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&H.isWebGL2===!0)&&Ue.update(W,j,Di),(Zr||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,Nt.setValue(x,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ui.envMap.value=Oe,Ui.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Zr&&(Nt.setValue(x,"toneMappingExposure",y.toneMappingExposure),$e.needsLights&&Cm(Ui,Ea),Te&&Z.fog===!0&&de.refreshFogUniforms(Ui,Te),de.refreshMaterialUniforms(Ui,Z,K,X,be),Ro.upload(x,zc($e),Ui,S)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ro.upload(x,zc($e),Ui,S),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(x,"center",W.center),Nt.setValue(x,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(x,"normalMatrix",W.normalMatrix),Nt.setValue(x,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let ba=0,Lm=fn.length;ba<Lm;ba++)if(H.isWebGL2){const Vc=fn[ba];Ze.update(Vc,Di),Ze.bind(Vc,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Cm(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Pm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,B,j){oe.get(b.texture).__webglTexture=B,oe.get(b.depthTexture).__webglTexture=j;const Z=oe.get(b);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const j=oe.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,j=0){R=b,D=B,P=j;let Z=!0,W=null,Te=!1,we=!1;if(b){const Oe=oe.get(b);Oe.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(x.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?S.setupRenderTarget(b):Oe.__hasExternalTextures&&S.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Be=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?W=Be[B][j]:W=Be[B],Te=!0):H.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?W=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[j]:W=Be,A.copy(b.viewport),ee.copy(b.scissor),ae=b.scissorTest}else A.copy(ce).multiplyScalar(K).floor(),ee.copy(te).multiplyScalar(K).floor(),ae=ie;if(F.bindFramebuffer(x.FRAMEBUFFER,W)&&H.drawBuffers&&Z&&F.drawBuffers(b,W),F.viewport(A),F.scissor(ee),F.setScissorTest(ae),Te){const Oe=oe.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,j)}else if(we){const Oe=oe.get(b.texture),We=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Oe.__webglTexture,j||0,We)}ne=-1},this.readRenderTargetPixels=function(b,B,j,Z,W,Te,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){F.bindFramebuffer(x.FRAMEBUFFER,Ie);try{const Oe=b.texture,We=Oe.format,Be=Oe.type;if(We!==bn&&ye.convert(We)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===Ps&&(L.has("EXT_color_buffer_half_float")||H.isWebGL2&&L.has("EXT_color_buffer_float"));if(Be!==bi&&ye.convert(Be)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===xi&&(H.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Z&&j>=0&&j<=b.height-W&&x.readPixels(B,j,Z,W,ye.convert(We),ye.convert(Be),Te)}finally{const Oe=R!==null?oe.get(R).__webglFramebuffer:null;F.bindFramebuffer(x.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(b,B,j=0){const Z=Math.pow(2,-j),W=Math.floor(B.image.width*Z),Te=Math.floor(B.image.height*Z);S.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,j,0,0,b.x,b.y,W,Te),F.unbindTexture()},this.copyTextureToTexture=function(b,B,j,Z=0){const W=B.image.width,Te=B.image.height,we=ye.convert(j.format),Ie=ye.convert(j.type);S.setTexture2D(j,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,j.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,W,Te,we,Ie,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,we,Ie,B.image),Z===0&&j.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,B,j,Z,W=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ie=b.max.z-b.min.z+1,Oe=ye.convert(Z.format),We=ye.convert(Z.type);let Be;if(Z.isData3DTexture)S.setTexture3D(Z,0),Be=x.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)S.setTexture2DArray(Z,0),Be=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ge=x.getParameter(x.UNPACK_ROW_LENGTH),vt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),rn=x.getParameter(x.UNPACK_SKIP_PIXELS),Rt=x.getParameter(x.UNPACK_SKIP_ROWS),zn=x.getParameter(x.UNPACK_SKIP_IMAGES),mt=j.isCompressedTexture?j.mipmaps[W]:j.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,b.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,b.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?x.texSubImage3D(Be,W,B.x,B.y,B.z,Te,we,Ie,Oe,We,mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Be,W,B.x,B.y,B.z,Te,we,Ie,Oe,mt.data)):x.texSubImage3D(Be,W,B.x,B.y,B.z,Te,we,Ie,Oe,We,mt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ge),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,vt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,rn),x.pixelStorei(x.UNPACK_SKIP_ROWS,Rt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,zn),W===0&&Z.generateMipmaps&&x.generateMipmap(Be),F.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,F.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Cc?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Zi:mp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zi?Dt:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ab extends Bp{}ab.prototype.isWebGL1Renderer=!0;class lb extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Hp extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new Lt,jl=new yp,xo=new fa,So=new $;class cb extends tn{constructor(e=new oi,n=new Hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;ad.copy(r).invert(),jl.copy(e.ray).applyMatrix4(ad);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);So.fromBufferAttribute(f,m),ld(So,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)So.fromBufferAttribute(f,g),ld(So,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ld(t,e,n,i,r,s,o){const a=jl.distanceSqToPoint(t);if(a<n){const l=new $;jl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const vn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},ub={__name:"StarsBackground",setup(t){const e=st(null);return ti(()=>{let n,i,r,s;const o=()=>{n=new lb,i=new pn(90,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=4,r=new Bp({alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),e.value.appendChild(r.domElement);const l=new oi,c=new Hp({color:15330028,size:.007,transparent:!0,opacity:.69}),u=[];for(let d=0;d<1500;d++){const h=(Math.random()-.5)*10,g=(Math.random()-.5)*10,_=(Math.random()-.5)*10;u.push(h,g,_)}l.setAttribute("position",new Ti(u,3)),s=new cb(l,c),n.add(s);const f=()=>{requestAnimationFrame(f),s.rotation.y+=.003,r.render(n,i)};f(),window.addEventListener("resize",a)},a=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};o(),yh(()=>{window.removeEventListener("resize",a),r.dispose()})}),(n,i)=>(Je(),ot("div",{ref_key:"container",ref:e,class:"stars-container"},null,512))}},fb=vn(ub,[["__scopeId","data-v-49c87b3f"]]);function Dc(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Uc(){let t=[],e={addEventListener(n,i,r,s){return n.addEventListener(i,r,s),e.add(()=>n.removeEventListener(i,r,s))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return Dc(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,r){let s=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:r}),this.add(()=>{Object.assign(n.style,{[i]:s})})},group(n){let i=Uc();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let r of t.splice(i,1))r()}},dispose(){for(let n of t.splice(0))n()}};return e}var cd;let db=Symbol("headlessui.useid"),hb=0;const zp=(cd=yg)!=null?cd:function(){return bt(db,()=>`${++hb}`)()};function Mt(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function rr(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,rr),i}var pb=Object.defineProperty,mb=(t,e,n)=>e in t?pb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ud=(t,e,n)=>(mb(t,typeof e!="symbol"?e+"":e,n),n);let gb=class{constructor(){ud(this,"current",this.detect()),ud(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},pa=new gb;function lr(t){if(pa.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Mt(t);if(e)return e.ownerDocument}return document}let $l=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var gi=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(gi||{}),Gp=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Gp||{}),_b=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(_b||{});function vb(t=document.body){return t==null?[]:Array.from(t.querySelectorAll($l)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var kp=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(kp||{});function xb(t,e=0){var n;return t===((n=lr(t))==null?void 0:n.body)?!1:rr(e,{0(){return t.matches($l)},1(){let i=t;for(;i!==null;){if(i.matches($l))return!0;i=i.parentElement}return!1}})}var Sb=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(Sb||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Ji(t){t==null||t.focus({preventScroll:!0})}let yb=["textarea","input"].join(",");function Eb(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,yb))!=null?n:!1}function Mb(t,e=n=>n){return t.slice().sort((n,i)=>{let r=e(n),s=e(i);if(r===null||s===null)return 0;let o=r.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Co(t,e,{sorted:n=!0,relativeTo:i=null,skipElements:r=[]}={}){var s;let o=(s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?s:document,a=Array.isArray(t)?n?Mb(t):t:vb(t);r.length>0&&a.length>1&&(a=a.filter(g=>!r.includes(g))),i=i??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(i))-1;if(e&4)return Math.max(0,a.indexOf(i))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},f=0,d=a.length,h;do{if(f>=d||f+d<=0)return 0;let g=c+f;if(e&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}h=a[g],h==null||h.focus(u),f+=l}while(h!==o.activeElement);return e&6&&Eb(h)&&h.select(),2}function Vp(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function bb(){return/Android/gi.test(window.navigator.userAgent)}function Tb(){return Vp()||bb()}function yo(t,e,n){pa.isServer||ar(i=>{document.addEventListener(t,e,n),i(()=>document.removeEventListener(t,e,n))})}function Wp(t,e,n){pa.isServer||ar(i=>{window.addEventListener(t,e,n),i(()=>window.removeEventListener(t,e,n))})}function Ab(t,e,n=Xe(()=>!0)){function i(s,o){if(!n.value||s.defaultPrevented)return;let a=o(s);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Mt(c);if(u!=null&&u.contains(a)||s.composed&&s.composedPath().includes(u))return}return!xb(a,kp.Loose)&&a.tabIndex!==-1&&s.preventDefault(),e(s,a)}let r=st(null);yo("pointerdown",s=>{var o,a;n.value&&(r.value=((a=(o=s.composedPath)==null?void 0:o.call(s))==null?void 0:a[0])||s.target)},!0),yo("mousedown",s=>{var o,a;n.value&&(r.value=((a=(o=s.composedPath)==null?void 0:o.call(s))==null?void 0:a[0])||s.target)},!0),yo("click",s=>{Tb()||r.value&&(i(s,()=>r.value),r.value=null)},!0),yo("touchend",s=>i(s,()=>s.target instanceof HTMLElement?s.target:null),!0),Wp("blur",s=>i(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Yl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Yl||{}),wb=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(wb||{});function Li({visible:t=!0,features:e=0,ourProps:n,theirProps:i,...r}){var s;let o=qp(i,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return ml(a);if(e&1){let l=(s=o.unmount)==null||s?0:1;return rr(l,{0(){return null},1(){return ml({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return ml(a)}function ml({props:t,attrs:e,slots:n,slot:i,name:r}){var s,o;let{as:a,...l}=Rb(t,["unmount","static"]),c=(s=n.default)==null?void 0:s.call(n,i),u={};if(i){let f=!1,d=[];for(let[h,g]of Object.entries(i))typeof g=="boolean"&&(f=!0),g===!0&&d.push(h);f&&(u["data-headlessui-state"]=d.join(" "))}if(a==="template"){if(c=Xp(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[f,...d]=c??[];if(!Cb(f)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,m,p)=>p.indexOf(_)===m).sort((_,m)=>_.localeCompare(m)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let h=qp((o=f.props)!=null?o:{},l,u),g=tr(f,h,!0);for(let _ in h)_.startsWith("on")&&(g.props||(g.props={}),g.props[_]=h[_]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return Pt(a,Object.assign({},l,u),{default:()=>c})}function Xp(t){return t.flatMap(e=>e.type===xt?Xp(e.children):[e])}function qp(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let r in i)r.startsWith("on")&&typeof i[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(i[r])):e[r]=i[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](r,...s){let o=n[i];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...s)}}});return e}function Rb(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}function Cb(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var Ls=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Ls||{});let jo=Rn({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var i;let{features:r,...s}=t,o={"aria-hidden":(r&2)===2?!0:(i=s["aria-hidden"])!=null?i:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return Li({ourProps:o,theirProps:s,slot:{},attrs:n,slots:e,name:"Hidden"})}}}),Pb=Symbol("Context");var us=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(us||{});function Lb(){return bt(Pb,null)}var jp=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(jp||{});function Db(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let Xi=[];Db(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&Xi[0]!==e.target&&(Xi.unshift(e.target),Xi=Xi.filter(n=>n!=null&&n.isConnected),Xi.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function $p(t,e,n,i){pa.isServer||ar(r=>{t=t??window,t.addEventListener(e,n,i),r(()=>t.removeEventListener(e,n,i))})}var fs=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(fs||{});function Ub(){let t=st(0);return Wp("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}function Yp(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let i=Mt(n);i instanceof HTMLElement&&e.add(i)}return e}var Kp=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(Kp||{});let os=Object.assign(Rn({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:st(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:i}){let r=st(null);i({el:r,$el:r});let s=Xe(()=>lr(r)),o=st(!1);ti(()=>o.value=!0),ni(()=>o.value=!1),Nb({ownerDocument:s},Xe(()=>o.value&&!!(t.features&16)));let a=Ob({ownerDocument:s,container:r,initialFocus:Xe(()=>t.initialFocus)},Xe(()=>o.value&&!!(t.features&2)));Fb({ownerDocument:s,container:r,containers:t.containers,previousActiveElement:a},Xe(()=>o.value&&!!(t.features&8)));let l=Ub();function c(h){let g=Mt(r);g&&(_=>_())(()=>{rr(l.value,{[fs.Forwards]:()=>{Co(g,gi.First,{skipElements:[h.relatedTarget]})},[fs.Backwards]:()=>{Co(g,gi.Last,{skipElements:[h.relatedTarget]})}})})}let u=st(!1);function f(h){h.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function d(h){if(!o.value)return;let g=Yp(t.containers);Mt(r)instanceof HTMLElement&&g.add(Mt(r));let _=h.relatedTarget;_ instanceof HTMLElement&&_.dataset.headlessuiFocusGuard!=="true"&&(Zp(g,_)||(u.value?Co(Mt(r),rr(l.value,{[fs.Forwards]:()=>gi.Next,[fs.Backwards]:()=>gi.Previous})|gi.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&Ji(h.target)))}return()=>{let h={},g={ref:r,onKeydown:f,onFocusout:d},{features:_,initialFocus:m,containers:p,...E}=t;return Pt(xt,[!!(_&4)&&Pt(jo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Ls.Focusable}),Li({ourProps:g,theirProps:{...e,...E},slot:h,attrs:e,slots:n,name:"FocusTrap"}),!!(_&4)&&Pt(jo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Ls.Focusable})])}}}),{features:Kp});function Ib(t){let e=st(Xi.slice());return ei([t],([n],[i])=>{i===!0&&n===!1?Dc(()=>{e.value.splice(0)}):i===!1&&n===!0&&(e.value=Xi.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(i=>i!=null&&i.isConnected))!=null?n:null}}function Nb({ownerDocument:t},e){let n=Ib(e);ti(()=>{ar(()=>{var i,r;e.value||((i=t.value)==null?void 0:i.activeElement)===((r=t.value)==null?void 0:r.body)&&Ji(n())},{flush:"post"})}),ni(()=>{e.value&&Ji(n())})}function Ob({ownerDocument:t,container:e,initialFocus:n},i){let r=st(null),s=st(!1);return ti(()=>s.value=!0),ni(()=>s.value=!1),ti(()=>{ei([e,n,i],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!i.value)return;let l=Mt(e);l&&Dc(()=>{var c,u;if(!s.value)return;let f=Mt(n),d=(c=t.value)==null?void 0:c.activeElement;if(f){if(f===d){r.value=d;return}}else if(l.contains(d)){r.value=d;return}f?Ji(f):Co(l,gi.First|gi.NoScroll)===Gp.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),r}function Fb({ownerDocument:t,container:e,containers:n,previousActiveElement:i},r){var s;$p((s=t.value)==null?void 0:s.defaultView,"focus",o=>{if(!r.value)return;let a=Yp(n);Mt(e)instanceof HTMLElement&&a.add(Mt(e));let l=i.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?Zp(a,c)?(i.value=c,Ji(c)):(o.preventDefault(),o.stopPropagation(),Ji(l)):Ji(i.value)},!0)}function Zp(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function Bb(t){let e=vc(t.getSnapshot());return ni(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function Hb(t,e){let n=t(),i=new Set;return{getSnapshot(){return n},subscribe(r){return i.add(r),()=>i.delete(r)},dispatch(r,...s){let o=e[r].call(n,...s);o&&(n=o,i.forEach(a=>a()))}}}function zb(){let t;return{before({doc:e}){var n;let i=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth},after({doc:e,d:n}){let i=e.documentElement,r=i.clientWidth-i.offsetWidth,s=t-r;n.style(i,"paddingRight",`${s}px`)}}}function Gb(){return Vp()?{before({doc:t,d:e,meta:n}){function i(r){return n.containers.flatMap(s=>s()).some(s=>s.contains(r))}e.microTask(()=>{var r;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=Uc();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let s=(r=window.scrollY)!=null?r:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!i(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(i(a.target)){let l=a.target;for(;l.parentElement&&i(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(i(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;s!==l&&window.scrollTo(0,s),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function kb(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function Vb(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let qi=Hb(()=>new Map,{PUSH(t,e){var n;let i=(n=this.get(t))!=null?n:{doc:t,count:0,d:Uc(),meta:new Set};return i.count++,i.meta.add(e),this.set(t,i),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let i={doc:t,d:e,meta:Vb(n)},r=[Gb(),zb(),kb()];r.forEach(({before:s})=>s==null?void 0:s(i)),r.forEach(({after:s})=>s==null?void 0:s(i))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});qi.subscribe(()=>{let t=qi.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let i=e.get(n.doc)==="hidden",r=n.count!==0;(r&&!i||!r&&i)&&qi.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&qi.dispatch("TEARDOWN",n)}});function Wb(t,e,n){let i=Bb(qi),r=Xe(()=>{let s=t.value?i.value.get(t.value):void 0;return s?s.count>0:!1});return ei([t,e],([s,o],[a],l)=>{if(!s||!o)return;qi.dispatch("PUSH",s,n);let c=!1;l(()=>{c||(qi.dispatch("POP",a??s,n),c=!0)})},{immediate:!0}),r}let gl=new Map,as=new Map;function fd(t,e=st(!0)){ar(n=>{var i;if(!e.value)return;let r=Mt(t);if(!r)return;n(function(){var o;if(!r)return;let a=(o=as.get(r))!=null?o:1;if(a===1?as.delete(r):as.set(r,a-1),a!==1)return;let l=gl.get(r);l&&(l["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",l["aria-hidden"]),r.inert=l.inert,gl.delete(r))});let s=(i=as.get(r))!=null?i:0;as.set(r,s+1),s===0&&(gl.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function Xb({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let i=st(null),r=lr(i);function s(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(Mt(i))||u.contains((l=(a=Mt(i))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(f=>u.contains(f))||c.push(u));return c}return{resolveContainers:s,contains(o){return s().some(a=>a.contains(o))},mainTreeNodeRef:i,MainTreeNode(){return n!=null?null:Pt(jo,{features:Ls.Hidden,ref:i})}}}function qb(){let t=st(null);return{mainTreeNodeRef:t,MainTreeNode(){return Pt(jo,{features:Ls.Hidden,ref:t})}}}let Jp=Symbol("ForcePortalRootContext");function jb(){return bt(Jp,!1)}let dd=Rn({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return An(Jp,t.force),()=>{let{force:i,...r}=t;return Li({theirProps:r,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),Qp=Symbol("StackContext");var Kl=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(Kl||{});function $b(){return bt(Qp,()=>{})}function Yb({type:t,enabled:e,element:n,onUpdate:i}){let r=$b();function s(...o){i==null||i(...o),r(...o)}ti(()=>{ei(e,(o,a)=>{o?s(0,t,n):a===!0&&s(1,t,n)},{immediate:!0,flush:"sync"})}),ni(()=>{e.value&&s(1,t,n)}),An(Qp,s)}let Kb=Symbol("DescriptionContext");function Zb({slot:t=st({}),name:e="Description",props:n={}}={}){let i=st([]);function r(s){return i.value.push(s),()=>{let o=i.value.indexOf(s);o!==-1&&i.value.splice(o,1)}}return An(Kb,{register:r,slot:t,name:e,props:n}),Xe(()=>i.value.length>0?i.value.join(" "):void 0)}function Jb(t){let e=lr(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let i=e.createElement("div");return i.setAttribute("id","headlessui-portal-root"),e.body.appendChild(i)}const Zl=new WeakMap;function Qb(t){var e;return(e=Zl.get(t))!=null?e:0}function hd(t,e){let n=e(Qb(t));return n<=0?Zl.delete(t):Zl.set(t,n),n}let eT=Rn({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let i=st(null),r=Xe(()=>lr(i)),s=jb(),o=bt(em,null),a=st(s===!0||o==null?Jb(i.value):o.resolveTarget());a.value&&hd(a.value,d=>d+1);let l=st(!1);ti(()=>{l.value=!0}),ar(()=>{s||o!=null&&(a.value=o.resolveTarget())});let c=bt(Jl,null),u=!1,f=Gh();return ei(i,()=>{if(u||!c)return;let d=Mt(i);d&&(ni(c.register(d),f),u=!0)}),ni(()=>{var d,h;let g=(d=r.value)==null?void 0:d.getElementById("headlessui-portal-root");!g||a.value!==g||hd(a.value,_=>_-1)||a.value.children.length>0||(h=a.value.parentElement)==null||h.removeChild(a.value)}),()=>{if(!l.value||a.value===null)return null;let d={ref:i,"data-headlessui-portal":""};return Pt(Sg,{to:a.value},Li({ourProps:d,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),Jl=Symbol("PortalParentContext");function tT(){let t=bt(Jl,null),e=st([]);function n(s){return e.value.push(s),t&&t.register(s),()=>i(s)}function i(s){let o=e.value.indexOf(s);o!==-1&&e.value.splice(o,1),t&&t.unregister(s)}let r={register:n,unregister:i,portals:e};return[e,Rn({name:"PortalWrapper",setup(s,{slots:o}){return An(Jl,r),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let em=Symbol("PortalGroupContext"),nT=Rn({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let i=Us({resolveTarget(){return t.target}});return An(em,i),()=>{let{target:r,...s}=t;return Li({theirProps:s,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var iT=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(iT||{});let Ql=Symbol("DialogContext");function tm(t){let e=bt(Ql,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,tm),n}return e}let Eo="DC8F892D-2EBD-447C-A4C8-A03058436FF4",rT=Rn({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Eo},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:i,expose:r}){var s,o;let a=(s=t.id)!=null?s:`headlessui-dialog-${zp()}`,l=st(!1);ti(()=>{l.value=!0});let c=!1,u=Xe(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),f=st(0),d=Lb(),h=Xe(()=>t.open===Eo&&d!==null?(d.value&us.Open)===us.Open:t.open),g=st(null),_=Xe(()=>lr(g));if(r({el:g,$el:g}),!(t.open!==Eo||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===Eo?void 0:t.open}`);let m=Xe(()=>l.value&&h.value?0:1),p=Xe(()=>m.value===0),E=Xe(()=>f.value>1),y=bt(Ql,null)!==null,[T,D]=tT(),{resolveContainers:P,mainTreeNodeRef:R,MainTreeNode:ne}=Xb({portals:T,defaultContainers:[Xe(()=>{var te;return(te=K.panelRef.value)!=null?te:g.value})]}),M=Xe(()=>E.value?"parent":"leaf"),A=Xe(()=>d!==null?(d.value&us.Closing)===us.Closing:!1),ee=Xe(()=>y||A.value?!1:p.value),ae=Xe(()=>{var te,ie,V;return(V=Array.from((ie=(te=_.value)==null?void 0:te.querySelectorAll("body > *"))!=null?ie:[]).find(re=>re.id==="headlessui-portal-root"?!1:re.contains(Mt(R))&&re instanceof HTMLElement))!=null?V:null});fd(ae,ee);let me=Xe(()=>E.value?!0:p.value),I=Xe(()=>{var te,ie,V;return(V=Array.from((ie=(te=_.value)==null?void 0:te.querySelectorAll("[data-headlessui-portal]"))!=null?ie:[]).find(re=>re.contains(Mt(R))&&re instanceof HTMLElement))!=null?V:null});fd(I,me),Yb({type:"Dialog",enabled:Xe(()=>m.value===0),element:g,onUpdate:(te,ie)=>{if(ie==="Dialog")return rr(te,{[Kl.Add]:()=>f.value+=1,[Kl.Remove]:()=>f.value-=1})}});let k=Zb({name:"DialogDescription",slot:Xe(()=>({open:h.value}))}),X=st(null),K={titleId:X,panelRef:st(null),dialogState:m,setTitleId(te){X.value!==te&&(X.value=te)},close(){e("close",!1)}};An(Ql,K);let Y=Xe(()=>!(!p.value||E.value));Ab(P,(te,ie)=>{te.preventDefault(),K.close(),xc(()=>ie==null?void 0:ie.focus())},Y);let le=Xe(()=>!(E.value||m.value!==0));$p((o=_.value)==null?void 0:o.defaultView,"keydown",te=>{le.value&&(te.defaultPrevented||te.key===jp.Escape&&(te.preventDefault(),te.stopPropagation(),K.close()))});let ce=Xe(()=>!(A.value||m.value!==0||y));return Wb(_,ce,te=>{var ie;return{containers:[...(ie=te.containers)!=null?ie:[],P]}}),ar(te=>{if(m.value!==0)return;let ie=Mt(g);if(!ie)return;let V=new ResizeObserver(re=>{for(let xe of re){let be=xe.target.getBoundingClientRect();be.x===0&&be.y===0&&be.width===0&&be.height===0&&K.close()}});V.observe(ie),te(()=>V.disconnect())}),()=>{let{open:te,initialFocus:ie,...V}=t,re={...n,ref:g,id:a,role:u.value,"aria-modal":m.value===0?!0:void 0,"aria-labelledby":X.value,"aria-describedby":k.value},xe={open:m.value===0};return Pt(dd,{force:!0},()=>[Pt(eT,()=>Pt(nT,{target:g.value},()=>Pt(dd,{force:!1},()=>Pt(os,{initialFocus:ie,containers:P,features:p.value?rr(M.value,{parent:os.features.RestoreFocus,leaf:os.features.All&~os.features.FocusLock}):os.features.None},()=>Pt(D,{},()=>Li({ourProps:re,theirProps:{...V,...n},slot:xe,attrs:n,slots:i,visible:m.value===0,features:Yl.RenderStrategy|Yl.Static,name:"Dialog"})))))),Pt(ne)])}}}),sT=Rn({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:i}){var r;let s=(r=t.id)!=null?r:`headlessui-dialog-panel-${zp()}`,o=tm("DialogPanel");i({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:s,ref:o.panelRef,onClick:a};return Li({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}});var oT=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(oT||{});let aT=Symbol("PopoverGroupContext"),lT=Rn({name:"PopoverGroup",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n,expose:i}){let r=st(null),s=vc([]),o=Xe(()=>lr(r)),a=qb();i({el:r,$el:r});function l(d){let h=s.value.indexOf(d);h!==-1&&s.value.splice(h,1)}function c(d){return s.value.push(d),()=>{l(d)}}function u(){var d;let h=o.value;if(!h)return!1;let g=h.activeElement;return(d=Mt(r))!=null&&d.contains(g)?!0:s.value.some(_=>{var m,p;return((m=h.getElementById(_.buttonId.value))==null?void 0:m.contains(g))||((p=h.getElementById(_.panelId.value))==null?void 0:p.contains(g))})}function f(d){for(let h of s.value)h.buttonId.value!==d&&h.close()}return An(aT,{registerPopover:c,unregisterPopover:l,isFocusWithinPopoverGroup:u,closeOthers:f,mainTreeNodeRef:a.mainTreeNodeRef}),()=>Pt(xt,[Li({ourProps:{ref:r},theirProps:{...t,...e},slot:{},attrs:e,slots:n,name:"PopoverGroup"}),Pt(a.MainTreeNode)])}});function cT(t,e){return Je(),ot("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function uT(t,e){return Je(),ot("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}function fT(t,e){return Je(),ot("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[z("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"})])}function dT(t,e){return Je(),ot("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[z("path",{"fill-rule":"evenodd",d:"M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z","clip-rule":"evenodd"})])}function hT(t,e){return Je(),ot("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[z("path",{d:"M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"}),z("path",{"fill-rule":"evenodd",d:"M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z","clip-rule":"evenodd"})])}const pT="/assets/headerAnimation-B2r5UkYN.webm",mT={},gT={class:"inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary shadow hover:bg-primary/90 relative px-8 py-3 text-white text-lg font-medium bg-gradient-to-r from-indigo-900 to-purple-900 before:absolute before:inset-0 before:bg-black/20 before:rounded-lg after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:after:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 rounded-lg border-0 w-24 h-9 p-4 w-max cursor-pointer"};function _T(t,e){return Je(),ot("button",gT,[Ug(t.$slots,"default")])}const pd=vn(mT,[["render",_T]]),md="/assets/logo-D39_Wxba.svg",vT={class:""},xT={class:"mx-auto flex items-center justify-between w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-99","aria-label":"Global",id:"header"},ST={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between"},yT={class:"flex lg:flex-1 items-center"},ET={class:"flex items-center"},MT=["src"],bT={class:"flex lg:hidden text-gray-200"},TT={class:"hidden lg:flex lg:flex-1 lg:justify-end items-center"},AT={class:"text-[16px] font-semibold text-gray-200"},wT={class:"text-[16px] font-semibold text-gray-200"},RT={class:"text-[16px] font-semibold text-gray-200"},CT={class:"flex items-center justify-between"},PT={class:"flex items-center"},LT=["src"],DT={class:"mt-6 flow-root"},UT={class:"-my-6 divide-y divide-gray-500/10"},IT={class:"space-y-2 py-6"},NT={class:"text-[16px] font-semibold text-gray-200"},OT={class:"text-[16px] font-semibold text-gray-200"},FT={class:"text-[16px] font-semibold text-gray-200"},BT={class:"py-2"},HT={autoPlay:"",muted:"",loop:"",class:"rotate-180 opacity-80 left-0 w-full h-screen object-cover -z-20 duration-500 transition-all fixed -top-[45%]",id:"header-bg-video"},zT=["src"],GT={__name:"Header",setup(t){const e=st(!1);window.onscroll=function(){i()};function n(){window.open("https://portal.augmentappz.ai","_blank")}function i(){document.body.scrollTop>50||document.documentElement.scrollTop>50?(document.getElementById("header").classList.add("shadow-lg"),document.getElementById("header-bg-video").classList.add("hidden")):(document.getElementById("header").classList.remove("shadow-lg"),document.getElementById("header-bg-video").classList.remove("hidden"))}return(r,s)=>(Je(),ot("header",vT,[z("nav",xT,[z("div",ST,[z("div",yT,[qe(Ke(Un),{to:"/",class:"-m-1.5 p-1.5"},{default:qt(()=>[z("div",ET,[z("img",{src:Ke(md),class:"w-[50px] rounded-sm"},null,8,MT),s[3]||(s[3]=z("span",{class:"text-[20px] text-gray-200 ml-2 font-semibold"},"Augmentappz.ai",-1))])]),_:1})]),z("div",bT,[z("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200",onClick:s[0]||(s[0]=o=>e.value=!0)},[s[4]||(s[4]=z("span",{class:"sr-only"},"Open main menu",-1)),qe(Ke(cT),{class:"size-6","aria-hidden":"true"})])]),z("div",TT,[qe(Ke(lT),{class:"hidden lg:flex lg:gap-x-12 mr-10"},{default:qt(()=>[z("nav",AT,[qe(Ke(Un),{to:"/about-us"},{default:qt(()=>s[5]||(s[5]=[it(" About Us ")])),_:1})]),z("nav",wT,[qe(Ke(Un),{to:"/pricing"},{default:qt(()=>s[6]||(s[6]=[it(" Pricing ")])),_:1})]),z("nav",RT,[qe(Ke(Un),{to:"/contact-us"},{default:qt(()=>s[7]||(s[7]=[it(" Contact Us ")])),_:1})])]),_:1}),qe(pd,{class:"px-6 ml-6",onClick:n},{default:qt(()=>s[8]||(s[8]=[it(" Get Started ")])),_:1})])])]),qe(Ke(rT),{class:"lg:hidden",onClose:s[2]||(s[2]=o=>e.value=!1),open:e.value},{default:qt(()=>[s[15]||(s[15]=z("div",{class:"fixed inset-0 z-10"},null,-1)),qe(Ke(sT),{class:"fixed inset-y-0 right-0 z-99 w-full overflow-y-auto bg-[#030014] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:qt(()=>[z("div",CT,[qe(Ke(Un),{to:"/",class:"-m-1.5 p-1.5"},{default:qt(()=>[z("div",PT,[z("img",{src:Ke(md),class:"w-[50px]"},null,8,LT),s[9]||(s[9]=z("span",{class:"text-[20px] text-gray-200 ml-2 font-semibold"},"Augmentappz.ai",-1))])]),_:1}),z("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:s[1]||(s[1]=o=>e.value=!1)},[s[10]||(s[10]=z("span",{class:"sr-only"},"Close menu",-1)),qe(Ke(uT),{class:"size-6","aria-hidden":"true"})])]),z("div",DT,[z("div",UT,[z("div",IT,[z("nav",NT,[qe(Ke(Un),{to:"/about-us"},{default:qt(()=>s[11]||(s[11]=[it(" About Us ")])),_:1})]),z("nav",OT,[qe(Ke(Un),{to:"/pricing"},{default:qt(()=>s[12]||(s[12]=[it(" Pricing ")])),_:1})]),z("nav",FT,[qe(Ke(Un),{to:"/contact-us"},{default:qt(()=>s[13]||(s[13]=[it(" Contact Us ")])),_:1})])]),z("div",BT,[qe(Ke(Un),{to:"https://portal.augmentappz.ai"},{default:qt(()=>[qe(pd,{class:"px-6"},{default:qt(()=>s[14]||(s[14]=[it(" Get Started ")])),_:1})]),_:1})])])])]),_:1})]),_:1},8,["open"]),z("video",HT,[z("source",{src:Ke(pT),type:"video/webm"},null,8,zT),s[16]||(s[16]=it(" Your browser does not support HTML video. "))])]))}},kT={},VT={class:"w-full bg-[#0B0B1E]/80 backdrop-blur-lg border-t border-purple-900/30"};function WT(t,e){return Je(),ot("section",VT,e[0]||(e[0]=[sa('<div class="pt-12 pb-8 container mx-auto w-full px-4 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 pb-2 text-gray-900"><div class="max-w-xl lg:max-w-lg"><h2 class="text-2xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2><p class="mt-4 text-lg text-gray-300">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p><div class="mt-6 flex max-w-md gap-x-4"><label for="email-address" class="sr-only">Email address</label><input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter your email"><button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button></div></div><dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2"><div class="flex flex-col items-start"><dt class="text-[18px] font-semibold tracking-tight text-white">Product</dt><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Features</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Integrations</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Documentation</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">FAQs</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Pricing</a></div><div class="flex flex-col items-start"><dt class="text-[18px] font-semibold tracking-tight text-white">About Us</dt><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Our Story</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Company</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Privacy</a><a href="#" class="flex mb-3 text-sm font-medium text-gray-400 mt-2 transition hover:text-gray-700 md:mb-2 hover:text-primary">Blog</a></div></dl></div><div class="pt-5 mt-3 border-t border-gray-100 md:flex-row md:items-center"><p class="mb-4 text-sm text-center text-gray-500 md:mb-0"> © Copyright 2025 Augmentappz.ai. All Rights Reserved. </p></div></div>',1)]))}const XT=vn(kT,[["render",WT]]),qT={class:"pt-[65px]"},jT={__name:"AugmentAppzMainLayout",setup(t){return(e,n)=>(Je(),ot(xt,null,[qe(fb),qe(GT),z("div",qT,[qe(Ke(rp))]),qe(XT)],64))}},$T={__name:"App",setup(t){return(e,n)=>(Je(),Ho(jT))}},gd="/assets/p1-DarELBq3.png",_d="/assets/p2-B2X8_9hy.png",vd="/assets/p3-FD6AzK74.png",xd="/assets/p4-BmX4l6sX.png",Sd="/assets/p5-CgQH3DIa.png",YT={initial:"hidden",animate:"visible",class:"flex flex-row items-center justify-center md:px-20 px-10 mt-20 w-full z-[20] relative hero-section-wrapper"},KT={class:"hidden lg:block w-full mt-[360px]"},ZT={initial:"hidden",animate:"visible",class:"absolute flex items-center justify-center left-4 group top-[15%] z-50"},JT={class:"relative flex items-center transition-transform hover:scale-105 active:scale-95"},QT=["src"],eA={initial:"hidden",animate:"visible",class:"absolute left-48 flex items-center justify-center group top-[65%] z-50"},tA={class:"relative flex items-center transition-transform hover:scale-105 active:scale-95"},nA=["src"],iA={initial:"hidden",animate:"visible",class:"absolute flex items-center justify-center inset-0 group top-[130%]"},rA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},sA=["src"],oA={initial:"hidden",animate:"visible",class:"absolute right-48 flex items-center justify-center group top-[65%]"},aA={class:"relative flex items-center transition-transform hover:scale-105 active:scale-95"},lA=["src"],cA={initial:"hidden",animate:"visible",class:"absolute flex items-center justify-center right-4 group top-[15%]"},uA={class:"relative flex items-center transition-transform hover:scale-105 active:scale-95"},fA=["src"],dA={class:"block lg:hidden w-full mt-[360px]"},hA={initial:"hidden",animate:"visible",class:"absolute left-[50%] group top-[50%] z-50 text-center",style:{transform:"translate(-50%, -50%)"}},pA={class:"flex lg:hidden mt-20 w-[95vw] overflow-auto sm:justify-left md:justify-center items-center no-scrollbar gap-3"},mA={initial:"hidden",animate:"visible",class:"flex items-center justify-center inset-0 group"},gA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},_A=["src"],vA={initial:"hidden",animate:"visible",class:"flex items-center justify-center inset-0 group"},xA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},SA=["src"],yA={initial:"hidden",animate:"visible",class:"flex items-center justify-center inset-0 group"},EA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},MA=["src"],bA={initial:"hidden",animate:"visible",class:"flex items-center justify-center inset-0 group"},TA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},AA=["src"],wA={initial:"hidden",animate:"visible",class:"flex items-center justify-center inset-0 group"},RA={class:"relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"},CA=["src"],PA={__name:"HeroSection",setup(t){return(e,n)=>(Je(),ot("div",YT,[z("div",KT,[n[5]||(n[5]=z("div",{initial:"hidden",animate:"visible",class:"absolute flex items-center justify-center left-[50%] group top-[35%] z-50 text-center",style:{transform:"translate(-50%, -50%)"}},[z("div",{class:"relative text-white flex justify-center items-center mx-auto text-4xl font-semibold leading-7 tracking-wide"},[z("p",{class:"select-none leading-10"},[it(" Supercharge Your "),z("span",{class:"text-4xl text-transparent bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text"}," Apps "),it(" with "),z("br"),it(" Ai and Intelligent Agents ")])])],-1)),z("div",ZT,[z("div",JT,[n[0]||(n[0]=z("p",{class:"mr-4 text-lg font-semibold text-left text-white w-36"}," Augment Ai Powered Apps ",-1)),z("img",{src:Ke(gd),class:"size-48"},null,8,QT)])]),z("div",eA,[z("div",tA,[n[1]||(n[1]=z("p",{class:"mr-4 text-lg font-semibold text-left text-white w-36"}," Artificial General Intelligence ",-1)),z("img",{src:Ke(_d),class:"size-48"},null,8,nA)])]),z("div",iA,[z("div",rA,[z("img",{src:Ke(vd),class:"size-48"},null,8,sA),n[2]||(n[2]=z("p",{class:"mt-4 text-lg font-semibold text-left text-white w-36"}," AI Agent Mesh ",-1))])]),z("div",oA,[z("div",aA,[z("img",{src:Ke(xd),class:"size-48"},null,8,lA),n[3]||(n[3]=z("p",{class:"ml-4 text-lg font-semibold text-left text-white bg-black w-36"}," Enterprise Ready ",-1))])]),z("div",cA,[z("div",uA,[z("img",{src:Ke(Sd),class:"size-48"},null,8,fA),n[4]||(n[4]=z("p",{class:"ml-4 text-lg font-semibold text-left text-white bg-black w-36"}," Our Solves ",-1))])])]),z("div",dA,[z("div",hA,[n[11]||(n[11]=z("div",{class:"relative text-white flex justify-center items-center mx-auto text-4xl font-semibold leading-7 tracking-wide"},[z("p",{class:"select-none leading-10 w-[85vw]"},[it(" Supercharge Your "),z("span",{class:"text-4xl text-transparent bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text"}," Apps "),it(" with "),z("br"),it(" Ai and Intelligent Agents ")])],-1)),z("div",pA,[z("div",mA,[z("div",gA,[z("img",{src:Ke(gd),class:"size-48"},null,8,_A),n[6]||(n[6]=z("p",{class:"mt-4 text-lg font-semibold text-center text-white w-36"}," Augment Ai Powered Apps ",-1))])]),z("div",vA,[z("div",xA,[z("img",{src:Ke(_d),class:"size-48"},null,8,SA),n[7]||(n[7]=z("p",{class:"mt-4 text-lg font-semibold text-center text-white w-36"}," Artificial General Intelligence ",-1))])]),z("div",yA,[z("div",EA,[z("img",{src:Ke(vd),class:"size-48"},null,8,MA),n[8]||(n[8]=z("p",{class:"mt-4 text-lg font-semibold text-center text-white w-36"},[it(" AI Agent "),z("br"),it(" Mesh ")],-1))])]),z("div",bA,[z("div",TA,[z("img",{src:Ke(xd),class:"size-48"},null,8,AA),n[9]||(n[9]=z("p",{class:"mt-4 text-lg font-semibold text-center text-white w-36"},[it(" Enterprise "),z("br"),it(" Ready ")],-1))])]),z("div",wA,[z("div",RA,[z("img",{src:Ke(Sd),class:"size-48"},null,8,CA),n[10]||(n[10]=z("p",{class:"mt-4 text-lg font-semibold text-center text-white w-36"},[it(" Our "),z("br"),it(" Solves ")],-1))])])])])])]))}},LA=vn(PA,[["__scopeId","data-v-297c305b"]]),DA={},UA={id:"skills",style:{transform:"scale(0.9)"},class:"text-white pt-15 pb-20 px-4 flex flex-col items-center justify-center lg:mt-[250px]"};function IA(t,e){return Je(),ot("section",UA,e[0]||(e[0]=[sa('<h2 class="text-4xl md:text-5xl font-bold mb-4 text-center"> Elevate Your Journey with <span class="bg-gradient-to-r from-[#773dfd] to-[#3599DE] text-transparent bg-clip-text"> Our Unique Benefits! </span></h2><p class="text-xl mb-16 text-gray-300"> Step into a World of Opportunities </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"><div class="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm"><h3 class="text-5xl font-bold text-purple-400 mb-4">10x</h3><p class="text-lg">Accelerated Development</p></div><div class="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm"><h3 class="text-5xl font-bold text-purple-400 mb-4">100+</h3><p class="text-lg">Agents</p></div><div class="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm"><h3 class="text-5xl font-bold text-purple-400 mb-4">4x</h3><p class="text-lg">Faster Time to Market</p></div><div class="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm"><h3 class="text-5xl font-bold text-purple-400 mb-4">70%</h3><p class="text-lg">Cost Savings</p></div></div>',3)]))}const NA=vn(DA,[["render",IA]]),OA="/assets/skills-bg-Bxgl9DAG.webm",FA="/assets/Picture1-EP-biX2I.png",BA="/assets/Picture2-AWM_zyOj.png",HA="/assets/Picture3-fN0gEfre.png",zA="/assets/Picture4-Bzs5BRWd.png",GA="/assets/Picture5-CSPw6oT-.png",kA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAACXBIWXMAABcSAAAXEgFnn9JSAAALvUlEQVR4Xu2dX6wcVRnAf9+Zvb3/2novbQPcUjBRmyjmFmkwgvxRBK0xEmPoAyBKC8WEaDTR6AOJEhPffDEmvhGIUYjpE0rkATQlRMMLJoYQQasSjCJCKy2l/+7d+Xw4Z3Zndm/bvfee2XPv7Pe7ne7uzNmZPXN++82Z2TnnCD0oiIDqfjaRcR1wJ3ATwhxKC+kk7T47N4pWXp1EeIWcJ4DH5GEO+9l+m6WUtaH7mcNxO8JehXmBjYAoIUMyUL5QRUPCHOVNhOeBx8l5Rh7m6DDztJao7LyOTPfwXlocQLgLYQswQU6GVN4xyI6vCiUosEDOKeBFcn7M6zwpT3GmlKoWFDLu4QbG+DZwLTCFsCEsLOdqkHxVcya0Uc6iHEN5kjY/kUd5sZR6ZHDlFwKqd7AVxwFgHzCHMoHiiq/jqlAEpYVjGuFqzfg629nTm6wW9nE9Lb4J3IiwCRhTRbQs0zLQMIUXDmEDjm04bqfFN/ReriglHxkqQgEwza04Po2wDR+F3Mp2+TlxqjhgXJSrc+VzeoCd4CNkT9oo6D52IOxRuElhCsXpUnlfBkWw1uKF4oJlmxFuQLmtnH5UqOxU3c8m4OMI70dwFPtNEfHPiv04aMFL+Ou8I3yr/XaFKee4CuUjfnZcSoJ+CMc1ImwW/xFcJSNF3gY93EEnvUBxyBRA1K9jO47rdR/bKu8ZAarfUsdWhcuBTWEnlZcPvrP76RRZsZJQ2AJcjHKF+kLu1ksiUKyvnXGZOi7rW3mf7iugJGIp6o0D21G2h/krX/86w0Epw46NIkwAzkfvwHK+uRcirKv7H5O5sJm9tEqpopIpk/hKeDevMfMEEL4sAooiKkwCM52lI0K1EJUMX8HsEnvH09m7EqJg5pQW06ur05wXwYmvtxWvo+epgoCAo8VY76KmU18hno+6C7SHnMjH0gvQ2VY+3HyuBdIIlYJwPKoVQUapvrQU/ULFqoYPgEJx4Ks1gBSnq1B+Ug/D8HYt0y+UYayCtSFUzRHKGB5rQyijMSQVShju2ZdRP0mFMppHcqFE8X9vWLBqAsmFMpqFCWVExYQyorIWhKrc2GCsb9aCUOQAG02qJpBWqHCF3NmV8saQVqhA3jvDWLckE8pCUjNJJlQZO+Q1h+RCKXbIaxLJhBrlm9CaTG0tTQZFQKXaYN1YxySLUEYzMaGMqCQTqnKME5RZO+w1gWRCGc0kmVClszy16wbNIZlQRjNZK0Ipc1aHagJrRSijIZhQRlTSCuXv1ay9bwNjeKQVymgcyYTqC0mHemcY65FkQgHdi1H243BjSCaU3b7STJIJ1cEq5I0irVCmUuNIK1SBoGwzvZpAMqEUuhUp+3G4MSQTymgmyYQSsCvlDSSZUGVygCtNqiaQVqjQqbez873GkFaoIZEDasoOhZEQyhgeyYQqAobS4KsGfozPkSJty2GlGG1HeKnGn/e6I2566ttSxyARhJyssnAESBahOjcaCBtzZQuzjFcSrBLvKejdTDvYKo6NdYq0BFMoO8Lz4W45IcmEKhCYFMdOlCuhG7RWO3U20GIXjnmUSfxtMrXmOWzY/5jkuFHvYjOQ936+9ThVMnoOat25F6AY7TcT2AXcoV/hfX4BGmPS/eyixV3AboaX12Jc5Y3AdUzwZe5nC8TLV6qplMdzkq4OJUBxjVyYQ/kiY2Tcx7MqHAn1Hj8qpsOPqrfUY46Q48gRWj592793hoxPItyqyqVhk36dw8EhzCE8QM4lHODPmvNuOzRrXeuVq3Z4zABatFnkJMobvMWr8mtOlpJWEAD13yrVA1yF8COUmzUsrbEQivs0NfwnopxE+CvwOsUYwT6OOZRi9HEX5goa5rvwCIIfQFoEtgIXI0yEZR7/rK48dXOFv/QlPn9ngX8BxzSc1Nb3AeJQZCJ8zjZwHOVV4HlO8TS/4N+yxAl6uggFooKiXmZAVZgSmAfm+w5QS5WAV6j7PDyWklbDdN0ygTfIb7XIFwoT4A/n65GwExUhF/g8U+zgDn6qj3O0V6reYhsq4nc6+EdfAEIO5GiUyUcsOjulXpk8Ij5Cgt+eCzt9fU++cqHAxSgPMs2nuJ8JekgZoTzVEdIFX/eISuTVDUY1X1mSz7AKOp+3UjFBFRbF0aLN11jgD1CtTyWNUMY6QPoi7hg5oo7dtLlC97KhnDx9hDLWHwICE2xgOy3G8ScdgEUoY1CWOmYLLc5UL3qaUMagFIe9LkvUdk0oIyomlDE4ffGoHxPKiIoJZUTFhDKiYkIZUTGhjKiYUEZUTCgjKiaUERUTyoiKCWVExYQyomJCGVExoYyomFBGVEwoIyomlBEVa6QwXOKPauNvehvg1rfhYELVS7lNG5R7Oy4UKDeTPwdlB0VCw+SiZYB/v0/SXdMF11kXJlR9aNGvZyj4gtwvRRDfqnm5iI9zvkPu0jpKK/NLEmBC1YN2IkjxWvBN44XTwCmURbqdnAyMKiJKhmMMYQplXPz2qm1QCt2GjAlVB9WwU/TXAPBf4ClyDpHzGspJUXLGysnPwwKgZIwzi++g7RaU6xCmEdpo6CVo6Bp1MaHqRPH1Jv/3O+A7HOYvHOJMb9IV8DR38ghT7AG+B+zE0cZ3g5RMKbtsEJtS/1AhMp0GfkObuznGS3yCs6y+wP37FzjOa/yKNg8ArwSZfP0Kyp9laFiEqoeis7E2yt8QHuQR3gJEDnYOf6tBAfQgApxmL39khh8qPCo+SKxW2BVjEaoeij4p3wae4G1e5iGE3trVKgnbyIETnOE5yXkOXxlvE3lbg2JC1UH37OoIyjNykDYPDd7x6XIQUA6inOIowlMIi4RO1lJgQkWmVJA5cJScf0AnmtSC+G2dpc0L+N7mpL9ni+FgQtWBrxa3gXc5wbu9i2vhTXJavIGvt6EDXIGvAxMqMp1S9OO8tJld/sXLFeHHbPZXqqxSbjQFEyoytVWUBqTYfqoQZUIZUTGhjKiYUEZUTCgjKiaUERUTyoiKCWVExYSKTKrrPwXF9lNdDzOhmoT/uScpJlRd+B9nM/43xNFg27Q0cZkm3XjDyYAptjDZu6AWZnHkzEgo01SHXhOqDnxpOpRZFtgOoDWWcYhKY7TYib+9rxh9c+iYUHWgoXWvMIPwsd7F0dmLsMA0ObfgI2OC5gkeE6oGStFoFuEL+iUureuOTQVhmjGEXQh7UDLtbfQ5REyoehDxUo0DVzPBg3ovFylIrEpzZ127aZHxQRzfBS7CkYtPkEQpa0YVG0FC3wNFgW5S4T4V1O3jB5zgqB4MI8CvDmEv44ub2J05vi9ws4JKTqZhyynuKzehhoBAS4SvkvFRZvgl+zikjlc5zgneXHY7vRaXs4VxPgx8tgW3ATsADVExKSZUHQhF/Ok8U8UJXIXyATK+hfAfZniLGRa4ULcWRSzzZ25TwCXAFmASCZclcpwKHaWqD8PDhKoHgXCm55/7gvW1p83Ae1C2UTQqKHQapPh92jH8ZQnfrDPM7bx98LVFx4Sqi1CX6qkoSVG5Usikt4I+SK2qiHyFNEtHt/45Q8KEqpNuBd2jPfXkFRZ76CPK4+NTwQrXGA8Tqm6Wih90Sn7JZRcixdnboES5JmIYBSaUERUTyoiKCWVExYQyomJCGVExoYyomFBGVEwoIyomlBEVE8qIigllRMWEMqJiQhlRMaGMqJhQRlT6hSq3wRjkllRjdBjAh36hAtU7Sw2jy/m8qgrV7qbVMJGslbyxxuhtcAF5vxtLRSgFi05GDyV1pHido4xXpeoV6h2E0yTqCsZYR/gug97mHRbLs51fFgT6E/9EOYxyDFApquj+sGeSjSLFENx4T4QwupZymJyXOcjpjj+UmlEpiLzAgs7zWzKuQbjWz6YNOJTwz2OHxGbTGz1EUfXNSp3k5MDPaHGkJ1lXqI5lZ/g9E/ycjGmEeQBC1zAm0ejQV9YOBATlFMrjjPEYRzhRjk6wxPsAdD9zOG4CPgPMq7BNfF9HxmiyiHAc5e/kPEfOEzzCy50qkWHUxf8Bgdm/YnUnZGUAAAAASUVORK5CYII=",VA="/assets/Picture7-rn8A2zTY.png",WA="/assets/Picture8-CLGBADlE.png",XA="/assets/Picture9-D9h6K3sW.png",qA="/assets/Picture10-BAb5Es9x.png",jA="/assets/Picture11-wwG9Qt6-.png",$A="/assets/Picture12-NDaXQAck.png",YA="/assets/Picture13-C2kItEs_.png",KA="/assets/Picture14-Bhb45LQ0.png",ZA="/assets/Picture15-J8CjfSGd.png",JA="/assets/Picture16-CBLPQI5I.png",QA="/assets/Picture17-BHnvKB3r.png",ew="/assets/Picture18-Bdun2-et.png",tw={className:"text-white py-16 px-4 flex flex-col items-center justify-center relative"},nw={autoPlay:"",muted:"",loop:"",class:"opacity-80 left-0 w-full h-screen object-cover -z-20 duration-500 transition-all absolute"},iw=["src"],rw={className:"grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto mb-12"},sw=["src"],ow={__name:"Integrations",setup(t){const e=[{image:FA},{image:BA},{image:HA},{image:zA},{image:GA},{image:kA},{image:VA},{image:WA},{image:XA},{image:qA},{image:jA},{image:$A},{image:YA},{image:KA},{image:ZA},{image:JA},{image:QA},{image:ew}];return(n,i)=>(Je(),ot("section",tw,[z("video",nw,[z("source",{src:Ke(OA),type:"video/webm"},null,8,iw),i[0]||(i[0]=it(" Your browser does not support HTML video. "))]),i[1]||(i[1]=z("h2",{className:"text-4xl md:text-5xl font-bold mb-4 text-center"},[it(" Unlock Endless Possibilities with "),z("span",{className:"bg-gradient-to-r from-[#773dfd] to-[#3599DE] text-transparent bg-clip-text"},"Prebuilt"),it(" Integrations ")],-1)),i[2]||(i[2]=z("p",{className:"text-xl mb-16 text-gray-300"}," Seamlessly Connect and Innovate ",-1)),z("div",rw,[(Je(),ot(xt,null,Fo(e,(r,s)=>z("div",{className:"bg-purple-900/30 p-4 rounded-lg backdrop-blur-md flex items-center justify-center hover:bg-purple-800/40 transition-colors",key:s},[z("img",{src:r.image,alt:"",style:{width:"40px",height:"40px"}},null,8,sw)])),64))])]))}},aw={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8 main-container"},lw={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8"},cw={__name:"Homepage",setup(t){return(e,n)=>(Je(),ot(xt,null,[z("div",aw,[qe(LA)]),z("div",lw,[qe(NA),qe(ow)])],64))}},uw={},fw={class:"text-white text-center text-4xl"};function dw(t,e){return Je(),ot("p",fw,"Augment Ai powered Apps")}const hw=vn(uw,[["render",dw]]),pw={};function mw(t,e){return e[0]||(e[0]=sa('<p class="text-white text-center text-4xl">Artificial general intelligence</p><div class="grid w-full grid-cols-1 gap-8 pt-8 lg:grid-cols-3 md:pt-12 lg:pt-16"><div style="opacity:1;transform:none;will-change:auto;"><div class="flex flex-col rounded-2xl border cursor-pointer transition-all bg-background items-start w-full select-none border-border/60 hover:border-muted-foreground/50"><div class="p-4 md:p-8 flex rounded-2xl flex-col items-start rounded-b-none border-b border-border/60 w-full relative bg-neutral-500/10"><span class="font-medium text-muted-foreground">Free Plan</span><h3 class="mt-4 text-2xl font-medium md:text-3xl">₹0</h3><span class="mt-2 text-neutral-500">per month</span></div><div class="flex flex-col items-start w-full p-5 gap-y-4"><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">AI-Powered Caption Generation</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Multi-Platform Publishing</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Content Calendar</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Basic Analytics Insights</span></div></div><div class="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6"><button class="inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none bg-foreground text-background hover:opacity-70 h-11 rounded-md px-8 w-full"> Get Started for Free</button><span class="px-2 mt-4 text-sm text-muted-foreground">No credit card required</span></div></div></div><div style="opacity:1;transform:none;will-change:auto;"><div class="flex flex-col rounded-2xl border cursor-pointer transition-all bg-background items-start w-full select-none border-primary/60 hover:border-primary"><div class="p-4 md:p-8 flex rounded-2xl flex-col items-start rounded-b-none border-b border-border/60 w-full relative bg-primary/10"><span class="font-medium text-muted-foreground">Standard Plan</span><h3 class="mt-4 text-2xl font-medium md:text-3xl">₹499</h3><span class="mt-2 text-neutral-500">per month</span><span class="absolute border border-primary/60 bg-primary/20 top-3 right-3 rounded-full px-3 py-1.5 text-xs text-primary">Most Popular</span></div><div class="flex flex-col items-start w-full p-5 gap-y-4"><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-primary fill-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">AI-Powered Caption Generation</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-primary fill-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Multi-Platform Publishing</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-primary fill-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Content Calendar</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-primary fill-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Advanced Analytics Insights</span></div></div><div class="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6"><button class="inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none bg-primary text-primary-foreground hover:opacity-70 hover:ring-4 hover:ring-primary/10 h-11 rounded-md px-8 w-full"> Upgrade to Standard</button><span class="px-2 mt-4 text-sm text-muted-foreground">No credit card required</span></div></div></div><div style="opacity:1;transform:none;will-change:auto;"><div class="flex flex-col rounded-2xl border cursor-pointer transition-all bg-background items-start w-full select-none border-border/60 hover:border-muted-foreground/50"><div class="p-4 md:p-8 flex rounded-2xl flex-col items-start rounded-b-none border-b border-border/60 w-full relative bg-neutral-500/10"><span class="font-medium text-muted-foreground">Premium Plan</span><h3 class="mt-4 text-2xl font-medium md:text-3xl">₹999</h3><span class="mt-2 text-neutral-500">per month</span></div><div class="flex flex-col items-start w-full p-5 gap-y-4"><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">AI-Powered Caption Generation</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Multi-Platform Publishing</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Content Calendar</span></div><div class="flex items-center justify-start gap-2"><div class="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-3 h-3 text-neutral-600 fill-neutral-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><span class="text-neutral-500">Tailored Analytics Insights</span></div></div><div class="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6"><button class="inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none bg-foreground text-background hover:opacity-70 h-11 rounded-md px-8 w-full"> Upgrade to Premium</button><span class="px-2 mt-4 text-sm text-muted-foreground">No credit card required</span></div></div></div></div>',2))}const gw=vn(pw,[["render",mw]]),_w={},vw={class:"text-white text-center text-4xl"};function xw(t,e){return Je(),ot("p",vw,"Ai Agent Mesh comes here")}const Sw=vn(_w,[["render",xw]]),yw={},Ew={class:"text-white text-center text-4xl"};function Mw(t,e){return Je(),ot("p",Ew,"Enterprise ready")}const bw=vn(yw,[["render",Mw]]),Tw={},Aw={class:"text-white text-center text-4xl"};function ww(t,e){return Je(),ot("p",Aw,"Our solves")}const Rw=vn(Tw,[["render",ww]]),Cw={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8"},Pw={class:"grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 md:gap-6 my-10 px-5"},Lw=["id"],Dw={class:"mt-4 flex items-baseline gap-x-2"},Uw={class:mn(["text-3xl font-semibold tracking-tight"])},Iw={class:mn(["mt-4 text-base/6"])},Nw={role:"list",class:mn(["mt-8 space-y-3 text-sm/6 sm:mt-10"])},Ow={__name:"PricingPage",setup(t){const e=Q0(),n=[{name:"Hobby",id:"tier-hobby",href:"#",priceMonthly:"$29",description:"The perfect plan if you're just getting started with our product.",features:["25 products","Up to 10,000 subscribers","Advanced analytics","24-hour support response time"],featured:!1},{name:"Testing",id:"tier-hobby2",href:"#",priceMonthly:"$29",description:"The perfect plan if you're just getting started with our product.",features:["25 products","Up to 10,000 subscribers","Advanced analytics","24-hour support response time"],featured:!1},{name:"Enterprise",id:"tier-enterprise",href:"#",priceMonthly:"$99",description:"You will get dedicated support and infrastructure for your company.",features:["Unlimited products","Unlimited subscribers","Advanced analytics","Marketing automations"],featured:!0},{name:"Hobby",id:"tier-hobby3",href:"#",priceMonthly:"$29",description:"The perfect plan if you're just getting started with our product.",features:["25 products","Up to 10,000 subscribers","Advanced analytics","24-hour support response time"],featured:!1}],i=()=>{e.push("/contact-us")};return(r,s)=>(Je(),ot("div",Cw,[s[1]||(s[1]=z("div",{class:"mx-auto max-w-4xl text-center mt-25"},[z("p",{class:"text-4xl md:text-5xl font-bold mb-4 text-center text-white"},[it(" Choose the "),z("span",{class:"bg-gradient-to-r from-[#773dfd] to-[#3599DE] text-transparent bg-clip-text"},"right plan"),it(" for you ")])],-1)),s[2]||(s[2]=z("p",{class:"mx-auto max-w-2xl text-xl mb-16 text-gray-300 text-center"}," Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales. ",-1)),z("div",Pw,[(Je(),ot(xt,null,Fo(n,(o,a)=>z("div",{key:a,class:"w-full mx-auto mb-5 sm:mb-0"},[z("div",{class:mn(["backdrop-blur-sm border-1 rounded-t-3xl lg:rounded-bl-3xl rounded-3xl p-6 ring-1 ring-gray-900/10 text-white",[o.featured?"bg-purple-900/20 border-[#773dfd70] ":"bg-[#12101f] border-[#1b1a26]"]])},[z("h3",{id:o.id,class:mn([o.featured?"text-[#773dfd] border-[#773dfd70] border-1 w-max px-2 rounded-xl flex items-center":"text-indigo-600","text-base/7 font-semibold"])},_i(o.name),11,Lw),z("p",Dw,[z("span",Uw,_i(o.priceMonthly),1),s[0]||(s[0]=z("span",{class:mn(["text-base"])},"/month",-1))]),z("p",Iw,_i(o.description),1),z("ul",Nw,[(Je(!0),ot(xt,null,Fo(o.features,l=>(Je(),ot("li",{key:l,class:"flex gap-x-3"},[qe(Ke(fT),{class:mn([o.featured?"text-[#773dfd]":"text-[#4e4c5a]","h-6 w-5 flex-none"]),"aria-hidden":"true"},null,8,["class"]),it(" "+_i(l),1)]))),128))]),z("button",{class:mn(["w-full mx-auto text-blue-700 font-semibold cursor-pointer py-2 px-4 hover:border-transparent rounded",o.featured?"button-gradient text-white mt-7":"bg-white mt-8"]),onClick:i}," Contact Us ",2)],2)])),64))])]))}};function nm(t,e){return function(){return t.apply(e,arguments)}}const{toString:Fw}=Object.prototype,{getPrototypeOf:Ic}=Object,ma=(t=>e=>{const n=Fw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=t=>(t=t.toLowerCase(),e=>ma(e)===t),ga=t=>e=>typeof e===t,{isArray:Yr}=Array,Ds=ga("undefined");function Bw(t){return t!==null&&!Ds(t)&&t.constructor!==null&&!Ds(t.constructor)&&un(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const im=Cn("ArrayBuffer");function Hw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&im(t.buffer),e}const zw=ga("string"),un=ga("function"),rm=ga("number"),_a=t=>t!==null&&typeof t=="object",Gw=t=>t===!0||t===!1,Po=t=>{if(ma(t)!=="object")return!1;const e=Ic(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},kw=Cn("Date"),Vw=Cn("File"),Ww=Cn("Blob"),Xw=Cn("FileList"),qw=t=>_a(t)&&un(t.pipe),jw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||un(t.append)&&((e=ma(t))==="formdata"||e==="object"&&un(t.toString)&&t.toString()==="[object FormData]"))},$w=Cn("URLSearchParams"),[Yw,Kw,Zw,Jw]=["ReadableStream","Request","Response","Headers"].map(Cn),Qw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gs(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Yr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function sm(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,om=t=>!Ds(t)&&t!==ji;function ec(){const{caseless:t}=om(this)&&this||{},e={},n=(i,r)=>{const s=t&&sm(e,r)||r;Po(e[s])&&Po(i)?e[s]=ec(e[s],i):Po(i)?e[s]=ec({},i):Yr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Gs(arguments[i],n);return e}const e1=(t,e,n,{allOwnKeys:i}={})=>(Gs(e,(r,s)=>{n&&un(r)?t[s]=nm(r,n):t[s]=r},{allOwnKeys:i}),t),t1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),n1=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},i1=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ic(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},r1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},s1=t=>{if(!t)return null;if(Yr(t))return t;let e=t.length;if(!rm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},o1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ic(Uint8Array)),a1=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},l1=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},c1=Cn("HTMLFormElement"),u1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),yd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),f1=Cn("RegExp"),am=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Gs(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},d1=t=>{am(t,(e,n)=>{if(un(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(un(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},h1=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Yr(t)?i(t):i(String(t).split(e)),n},p1=()=>{},m1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,_l="abcdefghijklmnopqrstuvwxyz",Ed="0123456789",lm={DIGIT:Ed,ALPHA:_l,ALPHA_DIGIT:_l+_l.toUpperCase()+Ed},g1=(t=16,e=lm.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function _1(t){return!!(t&&un(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const v1=t=>{const e=new Array(10),n=(i,r)=>{if(_a(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Yr(i)?[]:{};return Gs(i,(o,a)=>{const l=n(o,r+1);!Ds(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},x1=Cn("AsyncFunction"),S1=t=>t&&(_a(t)||un(t))&&un(t.then)&&un(t.catch),cm=((t,e)=>t?setImmediate:e?((n,i)=>(ji.addEventListener("message",({source:r,data:s})=>{r===ji&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),ji.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",un(ji.postMessage)),y1=typeof queueMicrotask<"u"?queueMicrotask.bind(ji):typeof process<"u"&&process.nextTick||cm,Q={isArray:Yr,isArrayBuffer:im,isBuffer:Bw,isFormData:jw,isArrayBufferView:Hw,isString:zw,isNumber:rm,isBoolean:Gw,isObject:_a,isPlainObject:Po,isReadableStream:Yw,isRequest:Kw,isResponse:Zw,isHeaders:Jw,isUndefined:Ds,isDate:kw,isFile:Vw,isBlob:Ww,isRegExp:f1,isFunction:un,isStream:qw,isURLSearchParams:$w,isTypedArray:o1,isFileList:Xw,forEach:Gs,merge:ec,extend:e1,trim:Qw,stripBOM:t1,inherits:n1,toFlatObject:i1,kindOf:ma,kindOfTest:Cn,endsWith:r1,toArray:s1,forEachEntry:a1,matchAll:l1,isHTMLForm:c1,hasOwnProperty:yd,hasOwnProp:yd,reduceDescriptors:am,freezeMethods:d1,toObjectSet:h1,toCamelCase:u1,noop:p1,toFiniteNumber:m1,findKey:sm,global:ji,isContextDefined:om,ALPHABET:lm,generateString:g1,isSpecCompliantForm:_1,toJSONObject:v1,isAsyncFn:x1,isThenable:S1,setImmediate:cm,asap:y1};function He(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Q.inherits(He,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.status}}});const um=He.prototype,fm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{fm[t]={value:t}});Object.defineProperties(He,fm);Object.defineProperty(um,"isAxiosError",{value:!0});He.from=(t,e,n,i,r,s)=>{const o=Object.create(um);return Q.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),He.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const E1=null;function tc(t){return Q.isPlainObject(t)||Q.isArray(t)}function dm(t){return Q.endsWith(t,"[]")?t.slice(0,-2):t}function Md(t,e,n){return t?t.concat(e).map(function(r,s){return r=dm(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function M1(t){return Q.isArray(t)&&!t.some(tc)}const b1=Q.toFlatObject(Q,{},null,function(e){return/^is[A-Z]/.test(e)});function va(t,e,n){if(!Q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!Q.isUndefined(m[_])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Q.isSpecCompliantForm(e);if(!Q.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Q.isDate(g))return g.toISOString();if(!l&&Q.isBlob(g))throw new He("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(g)||Q.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let p=g;if(g&&!m&&typeof g=="object"){if(Q.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(Q.isArray(g)&&M1(g)||(Q.isFileList(g)||Q.endsWith(_,"[]"))&&(p=Q.toArray(g)))return _=dm(_),p.forEach(function(y,T){!(Q.isUndefined(y)||y===null)&&e.append(o===!0?Md([_],T,s):o===null?_:_+"[]",c(y))}),!1}return tc(g)?!0:(e.append(Md(m,_,s),c(g)),!1)}const f=[],d=Object.assign(b1,{defaultVisitor:u,convertValue:c,isVisitable:tc});function h(g,_){if(!Q.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),Q.forEach(g,function(p,E){(!(Q.isUndefined(p)||p===null)&&r.call(e,p,Q.isString(E)?E.trim():E,_,d))===!0&&h(p,_?_.concat(E):[E])}),f.pop()}}if(!Q.isObject(t))throw new TypeError("data must be an object");return h(t),e}function bd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Nc(t,e){this._pairs=[],t&&va(t,this,e)}const hm=Nc.prototype;hm.append=function(e,n){this._pairs.push([e,n])};hm.toString=function(e){const n=e?function(i){return e.call(this,i,bd)}:bd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function T1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pm(t,e,n){if(!e)return t;const i=n&&n.encode||T1;Q.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=Q.isURLSearchParams(e)?e.toString():new Nc(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Td{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const mm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A1=typeof URLSearchParams<"u"?URLSearchParams:Nc,w1=typeof FormData<"u"?FormData:null,R1=typeof Blob<"u"?Blob:null,C1={isBrowser:!0,classes:{URLSearchParams:A1,FormData:w1,Blob:R1},protocols:["http","https","file","blob","url","data"]},Oc=typeof window<"u"&&typeof document<"u",nc=typeof navigator=="object"&&navigator||void 0,P1=Oc&&(!nc||["ReactNative","NativeScript","NS"].indexOf(nc.product)<0),L1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",D1=Oc&&window.location.href||"http://localhost",U1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oc,hasStandardBrowserEnv:P1,hasStandardBrowserWebWorkerEnv:L1,navigator:nc,origin:D1},Symbol.toStringTag,{value:"Module"})),Gt={...U1,...C1};function I1(t,e){return va(t,new Gt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Gt.isNode&&Q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function N1(t){return Q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function O1(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function gm(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Q.isArray(r)?r.length:o,l?(Q.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Q.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Q.isArray(r[o])&&(r[o]=O1(r[o])),!a)}if(Q.isFormData(t)&&Q.isFunction(t.entries)){const n={};return Q.forEachEntry(t,(i,r)=>{e(N1(i),r,n,0)}),n}return null}function F1(t,e,n){if(Q.isString(t))try{return(e||JSON.parse)(t),Q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ks={transitional:mm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Q.isObject(e);if(s&&Q.isHTMLForm(e)&&(e=new FormData(e)),Q.isFormData(e))return r?JSON.stringify(gm(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)||Q.isReadableStream(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return I1(e,this.formSerializer).toString();if((a=Q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return va(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),F1(e)):e}],transformResponse:[function(e){const n=this.transitional||ks.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(Q.isResponse(e)||Q.isReadableStream(e))return e;if(e&&Q.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?He.from(a,He.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],t=>{ks.headers[t]={}});const B1=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),H1=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&B1[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Ad=Symbol("internals");function ls(t){return t&&String(t).trim().toLowerCase()}function Lo(t){return t===!1||t==null?t:Q.isArray(t)?t.map(Lo):String(t)}function z1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const G1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vl(t,e,n,i,r){if(Q.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Q.isString(e)){if(Q.isString(i))return e.indexOf(i)!==-1;if(Q.isRegExp(i))return i.test(e)}}function k1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function V1(t,e){const n=Q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let nn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=ls(l);if(!u)throw new Error("header name must be a non-empty string");const f=Q.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Lo(a))}const o=(a,l)=>Q.forEach(a,(c,u)=>s(c,u,l));if(Q.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Q.isString(e)&&(e=e.trim())&&!G1(e))o(H1(e),n);else if(Q.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=ls(e),e){const i=Q.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return z1(r);if(Q.isFunction(n))return n.call(this,r,i);if(Q.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ls(e),e){const i=Q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||vl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=ls(o),o){const a=Q.findKey(i,o);a&&(!n||vl(i,i[a],a,n))&&(delete i[a],r=!0)}}return Q.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||vl(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Q.forEach(this,(r,s)=>{const o=Q.findKey(i,s);if(o){n[o]=Lo(r),delete n[s];return}const a=e?k1(s):String(s).trim();a!==s&&delete n[s],n[a]=Lo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Q.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Ad]=this[Ad]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ls(o);i[a]||(V1(r,o),i[a]=!0)}return Q.isArray(e)?e.forEach(s):s(e),this}};nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Q.reduceDescriptors(nn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Q.freezeMethods(nn);function xl(t,e){const n=this||ks,i=e||n,r=nn.from(i.headers);let s=i.data;return Q.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function _m(t){return!!(t&&t.__CANCEL__)}function Kr(t,e,n){He.call(this,t??"canceled",He.ERR_CANCELED,e,n),this.name="CanceledError"}Q.inherits(Kr,He,{__CANCEL__:!0});function vm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new He("Request failed with status code "+n.status,[He.ERR_BAD_REQUEST,He.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function W1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function X1(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function q1(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const $o=(t,e,n=3)=>{let i=0;const r=X1(50,250);return q1(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},wd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Rd=t=>(...e)=>Q.asap(()=>t(...e)),j1=Gt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Gt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,$1=Gt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Q.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Q.isString(i)&&o.push("path="+i),Q.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Y1(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function K1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function xm(t,e){return t&&!Y1(e)?K1(t,e):e}const Cd=t=>t instanceof nn?{...t}:t;function sr(t,e){e=e||{};const n={};function i(c,u,f,d){return Q.isPlainObject(c)&&Q.isPlainObject(u)?Q.merge.call({caseless:d},c,u):Q.isPlainObject(u)?Q.merge({},u):Q.isArray(u)?u.slice():u}function r(c,u,f,d){if(Q.isUndefined(u)){if(!Q.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!Q.isUndefined(u))return i(void 0,u)}function o(c,u){if(Q.isUndefined(u)){if(!Q.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Cd(c),Cd(u),f,!0)};return Q.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);Q.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Sm=t=>{const e=sr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=nn.from(o),e.url=pm(xm(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Q.isFormData(n)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Gt.hasStandardBrowserEnv&&(i&&Q.isFunction(i)&&(i=i(e)),i||i!==!1&&j1(e.url))){const c=r&&s&&$1.read(s);c&&o.set(r,c)}return e},Z1=typeof XMLHttpRequest<"u",J1=Z1&&function(t){return new Promise(function(n,i){const r=Sm(t);let s=r.data;const o=nn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,h,g;function _(){h&&h(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const y=nn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),D={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:y,config:t,request:m};vm(function(R){n(R),_()},function(R){i(R),_()},D),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new He("Request aborted",He.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new He("Network Error",He.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let T=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const D=r.transitional||mm;r.timeoutErrorMessage&&(T=r.timeoutErrorMessage),i(new He(T,D.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&Q.forEach(o.toJSON(),function(T,D){m.setRequestHeader(D,T)}),Q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=$o(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=$o(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(r.cancelToken||r.signal)&&(u=y=>{m&&(i(!y||y.type?new Kr(null,t,m):y),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const E=W1(r.url);if(E&&Gt.protocols.indexOf(E)===-1){i(new He("Unsupported protocol "+E+":",He.ERR_BAD_REQUEST,t));return}m.send(s||null)})},Q1=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof He?u:new Kr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new He(`timeout ${e} of ms exceeded`,He.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Q.asap(a),l}},eR=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},tR=async function*(t,e){for await(const n of nR(t))yield*eR(n,e)},nR=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Pd=(t,e,n,i)=>{const r=tR(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},xa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ym=xa&&typeof ReadableStream=="function",iR=xa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Em=(t,...e)=>{try{return!!t(...e)}catch{return!1}},rR=ym&&Em(()=>{let t=!1;const e=new Request(Gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ld=64*1024,ic=ym&&Em(()=>Q.isReadableStream(new Response("").body)),Yo={stream:ic&&(t=>t.body)};xa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Yo[e]&&(Yo[e]=Q.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new He(`Response type '${e}' is not supported`,He.ERR_NOT_SUPPORT,i)})})})(new Response);const sR=async t=>{if(t==null)return 0;if(Q.isBlob(t))return t.size;if(Q.isSpecCompliantForm(t))return(await new Request(Gt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Q.isArrayBufferView(t)||Q.isArrayBuffer(t))return t.byteLength;if(Q.isURLSearchParams(t)&&(t=t+""),Q.isString(t))return(await iR(t)).byteLength},oR=async(t,e)=>{const n=Q.toFiniteNumber(t.getContentLength());return n??sR(e)},aR=xa&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Sm(t);c=c?(c+"").toLowerCase():"text";let h=Q1([r,s&&s.toAbortSignal()],o),g;const _=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(l&&rR&&n!=="get"&&n!=="head"&&(m=await oR(u,i))!==0){let D=new Request(e,{method:"POST",body:i,duplex:"half"}),P;if(Q.isFormData(i)&&(P=D.headers.get("content-type"))&&u.setContentType(P),D.body){const[R,ne]=wd(m,$o(Rd(l)));i=Pd(D.body,Ld,R,ne)}}Q.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let E=await fetch(g);const y=ic&&(c==="stream"||c==="response");if(ic&&(a||y&&_)){const D={};["status","statusText","headers"].forEach(M=>{D[M]=E[M]});const P=Q.toFiniteNumber(E.headers.get("content-length")),[R,ne]=a&&wd(P,$o(Rd(a),!0))||[];E=new Response(Pd(E.body,Ld,R,()=>{ne&&ne(),_&&_()}),D)}c=c||"text";let T=await Yo[Q.findKey(Yo,c)||"text"](E,t);return!y&&_&&_(),await new Promise((D,P)=>{vm(D,P,{data:T,headers:nn.from(E.headers),status:E.status,statusText:E.statusText,config:t,request:g})})}catch(p){throw _&&_(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new He("Network Error",He.ERR_NETWORK,t,g),{cause:p.cause||p}):He.from(p,p&&p.code,t,g)}}),rc={http:E1,xhr:J1,fetch:aR};Q.forEach(rc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Dd=t=>`- ${t}`,lR=t=>Q.isFunction(t)||t===null||t===!1,Mm={getAdapter:t=>{t=Q.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!lR(n)&&(i=rc[(o=String(n)).toLowerCase()],i===void 0))throw new He(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Dd).join(`
`):" "+Dd(s[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:rc};function Sl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kr(null,t)}function Ud(t){return Sl(t),t.headers=nn.from(t.headers),t.data=xl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Mm.getAdapter(t.adapter||ks.adapter)(t).then(function(i){return Sl(t),i.data=xl.call(t,t.transformResponse,i),i.headers=nn.from(i.headers),i},function(i){return _m(i)||(Sl(t),i&&i.response&&(i.response.data=xl.call(t,t.transformResponse,i.response),i.response.headers=nn.from(i.response.headers))),Promise.reject(i)})}const bm="1.7.9",Sa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Sa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Id={};Sa.transitional=function(e,n,i){function r(s,o){return"[Axios v"+bm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new He(r(o," has been removed"+(n?" in "+n:"")),He.ERR_DEPRECATED);return n&&!Id[o]&&(Id[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Sa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function cR(t,e,n){if(typeof t!="object")throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new He("option "+s+" must be "+l,He.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new He("Unknown option "+s,He.ERR_BAD_OPTION)}}const Do={assertOptions:cR,validators:Sa},Dn=Do.validators;let Qi=class{constructor(e){this.defaults=e,this.interceptors={request:new Td,response:new Td}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=sr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Do.assertOptions(i,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),r!=null&&(Q.isFunction(r)?n.paramsSerializer={serialize:r}:Do.assertOptions(r,{encode:Dn.function,serialize:Dn.function},!0)),Do.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Q.merge(s.common,s[n.method]);s&&Q.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=nn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Ud.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(f=0;f<d;){const g=a[f++],_=a[f++];try{h=g(h)}catch(m){_.call(this,m);break}}try{u=Ud.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=sr(this.defaults,e);const n=xm(e.baseURL,e.url);return pm(n,e.params,e.paramsSerializer)}};Q.forEach(["delete","get","head","options"],function(e){Qi.prototype[e]=function(n,i){return this.request(sr(i||{},{method:e,url:n,data:(i||{}).data}))}});Q.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(sr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Qi.prototype[e]=n(),Qi.prototype[e+"Form"]=n(!0)});let uR=class Tm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Kr(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Tm(function(r){e=r}),cancel:e}}};function fR(t){return function(n){return t.apply(null,n)}}function dR(t){return Q.isObject(t)&&t.isAxiosError===!0}const sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sc).forEach(([t,e])=>{sc[e]=t});function Am(t){const e=new Qi(t),n=nm(Qi.prototype.request,e);return Q.extend(n,Qi.prototype,e,{allOwnKeys:!0}),Q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Am(sr(t,r))},n}const yt=Am(ks);yt.Axios=Qi;yt.CanceledError=Kr;yt.CancelToken=uR;yt.isCancel=_m;yt.VERSION=bm;yt.toFormData=va;yt.AxiosError=He;yt.Cancel=yt.CanceledError;yt.all=function(e){return Promise.all(e)};yt.spread=fR;yt.isAxiosError=dR;yt.mergeConfig=sr;yt.AxiosHeaders=nn;yt.formToJSON=t=>gm(Q.isHTMLForm(t)?new FormData(t):t);yt.getAdapter=Mm.getAdapter;yt.HttpStatusCode=sc;yt.default=yt;const{Axios:VR,AxiosError:WR,CanceledError:XR,isCancel:qR,CancelToken:jR,VERSION:$R,all:YR,Cancel:KR,isAxiosError:ZR,spread:JR,toFormData:QR,AxiosHeaders:eC,HttpStatusCode:tC,formToJSON:nC,getAdapter:iC,mergeConfig:rC}=yt,hR="/assets/mail-BJ0OUg_B.png",pR={data(){return{form:{firstName:"",lastName:"",companyName:"",jobTitle:"",workEmail:"",message:""},loading:!1,message:"",success:!1}},methods:{async submitForm(){this.loading=!0,this.message="";try{const t=await yt.post("sendMail.php",this.form);this.success=t.data.success,this.message=t.data.message,t.data.success&&(this.form={firstName:"",lastName:"",companyName:"",jobTitle:"",workEmail:"",message:""})}catch{this.success=!1,this.message="Something went wrong. Please try again."}finally{this.loading=!1}}}},mR={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8"},gR={class:"contact-container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-20 mb-10"},_R={class:"form-section bg-purple-900/20 border-[#773dfd40] border-1"},vR={class:"input-group mb-2"},xR={class:"input-group mb-2"},SR={class:"mb-2"},yR=["disabled"];function ER(t,e,n,i,r,s){return Je(),ot("div",mR,[z("div",gR,[e[7]||(e[7]=z("div",{class:"text-section mt-20"},[z("h2",{className:"text-4xl md:text-5xl font-bold mb-4 text-left"},[z("span",{class:"bg-gradient-to-r from-[#773dfd] to-[#3599DE] text-transparent bg-clip-text"},"Contact Us")]),z("br"),z("p",{class:"max-w-2xl"}," Contact our team today to discover how Augment Appz can elevate your business to new heights "),z("p",{class:"email mt-5"},[z("img",{src:hR,alt:"Email"}),z("a",{href:"mailto:sales@augmentappz.ai",class:"highlight-purple"},"sales@augmentappz.ai")])],-1)),z("div",_R,[z("form",{onSubmit:e[6]||(e[6]=W_((...o)=>s.submitForm&&s.submitForm(...o),["prevent"]))},[z("div",vR,[ur(z("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>r.form.firstName=o),placeholder:"First Name",required:""},null,512),[[fr,r.form.firstName]]),ur(z("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>r.form.lastName=o),placeholder:"Last Name",required:""},null,512),[[fr,r.form.lastName]])]),z("div",xR,[ur(z("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>r.form.companyName=o),placeholder:"Company Name",required:""},null,512),[[fr,r.form.companyName]]),ur(z("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>r.form.jobTitle=o),placeholder:"Job Title",required:""},null,512),[[fr,r.form.jobTitle]])]),z("div",SR,[ur(z("input",{type:"email","onUpdate:modelValue":e[4]||(e[4]=o=>r.form.workEmail=o),placeholder:"Work Email",required:""},null,512),[[fr,r.form.workEmail]])]),ur(z("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>r.form.message=o),placeholder:"Tell us your challenges, requirements, or ask us a question"},null,512),[[fr,r.form.message]]),z("button",{type:"submit",disabled:r.loading,class:"mt-4 rounded-sm"},_i(r.loading?"Submitting...":"Submit"),9,yR),r.message?(Je(),ot("p",{key:0,class:mn({success:r.success,error:!r.success})},_i(r.message),3)):f_("",!0)],32)])])])}const MR=vn(pR,[["render",ER],["__scopeId","data-v-8a56949c"]]),bR="/assets/aboutUs-C_qhodGo.png",TR={class:"container mx-auto w-full px-4 sm:px-6 lg:px-8"},AR={class:"py-24 lg:py-32 mt-5"},wR={class:"mx-auto px-6 lg:px-8"},RR={class:"mx-auto grid grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"},CR={class:""},PR={class:"lg:max-w-lg"},LR={class:"mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none"},DR={class:"inline"},UR=["src"],IR={__name:"AboutUs",setup(t){const e=[{name:"about us.",description:"At the forefront of innovation, we boast a robust portfolio of over 15 patentable solutions. Our pioneering efforts have led to the successful implementation of 6 innovative IPs across more than 200 customers worldwide, making a significant global impact."},{name:"IP",description:"Our intellectual properties are recognized as leaders by top analysts, including Gartner, and have secured over $750 million in deals, showcasing our proven success. We are trusted by banks and credit card companies, thanks to our extensive experience with rigorous security reviews.",icon:dT},{name:"team",description:"Our team is a synergistic blend of seasoned, multiskilled professionals with a strong track record of working together seamlessly. We are committed to driving forward with cutting-edge solutions and maintaining the highest standards of security and innovation.",icon:hT}];return(n,i)=>(Je(),ot("div",TR,[z("div",AR,[z("div",wR,[z("div",RR,[z("div",CR,[z("div",PR,[i[0]||(i[0]=z("p",{class:"mt-2 text-4xl font-bold tracking-tight text-pretty text-indigo-500 sm:text-5xl"},"About Us",-1)),i[1]||(i[1]=z("p",{class:"mt-6 text-lg/8 text-white"},null,-1)),z("dl",LR,[(Je(),ot(xt,null,Fo(e,r=>z("div",{key:r.name,class:"relative"},[z("dd",DR,_i(r.description),1)])),64))])])]),z("div",null,[z("img",{src:Ke(bR),alt:"Product screenshot",class:"w-full max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 md:-ml-4 lg:-ml-0"},null,8,UR)])])])])]))}},NR={},OR={class:"container mx-auto w-full px-4 sm:px-6 lg:px-30 mt-8 text-white py-20"};function FR(t,e){return Je(),ot("div",OR,e[0]||(e[0]=[sa('<h2 class="text-4xl md:text-5xl font-bold mb-4 text-center"> Privacy Policy </h2><div class="mt-20"><div class="mt-10"><h4 class="text-[20px] font-semibold">Sub heading comes here</h4><p class="mt-2 text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sed iusto tenetur vel blanditiis non suscipit rem quae provident doloremque fuga ut vero quibusdam, laborum quisquam laboriosam iure repudiandae veniam.</p><p class="mt-2 text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sed iusto tenetur vel blanditiis non suscipit rem quae provident doloremque fuga ut vero quibusdam, laborum quisquam laboriosam iure repudiandae veniam.</p></div><div class="mt-10"><h4 class="text-[20px] font-semibold">Sub heading 2 comes here</h4><p class="mt-2 text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sed iusto tenetur vel blanditiis non suscipit rem quae provident doloremque fuga ut vero quibusdam, laborum quisquam laboriosam iure repudiandae veniam.</p></div></div>',2)]))}const BR=vn(NR,[["render",FR]]),HR=Z0({history:R0("/"),routes:[{path:"/",name:"home",component:cw},{path:"/augment-ai-powered-apps",name:"AugmentAiPoweredApps",component:hw},{path:"/artificial-general-intelligence",name:"ArtificialGeneralIntelligence",component:gw},{path:"/ai-agent-mesh",name:"AiAgentMesh",component:Sw},{path:"/enterprise-ready",name:"EnterpriseReady",component:bw},{path:"/our-solves",name:"OurSolves",component:Rw},{path:"/pricing",name:"Pricing",component:Ow},{path:"/contact-us",name:"ContactUs",component:MR},{path:"/about-us",name:"AboutUs",component:IR},{path:"/privacy-policy",name:"PrivacyPolicy",component:BR}]}),Fc=j_($T);Fc.use(Z_());Fc.use(HR);Fc.mount("#app");
