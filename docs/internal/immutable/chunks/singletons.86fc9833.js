import{w as u,a as b}from"./paths.8efaa893.js";const v="1709162191832",E="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},_=location.origin;function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===_&&e.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function x(e){let t=null,n=null,o=null,r=null,l=null,s=null,a=e;for(;a&&a!==document.documentElement;)o===null&&(o=c(a,"preload-code")),r===null&&(r=c(a,"preload-data")),t===null&&(t=c(a,"keepfocus")),n===null&&(n=c(a,"noscroll")),l===null&&(l=c(a,"reload")),s===null&&(s=c(a,"replacestate")),a=g(a);function i(h){switch(h){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[o??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(s)}}function p(e){const t=u(e);let n=!0;function o(){n=!0,t.update(s=>s)}function r(s){n=!1,t.set(s)}function l(s){let a;return t.subscribe(i=>{(a===void 0||n&&i!==a)&&s(a=i)})}return{notify:o,set:r,subscribe:l}}function k(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${b}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==v;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:o}}function m(e,t){return e.origin!==_||!e.pathname.startsWith(t)}function O(e){e.client}const U={url:p({}),page:p({}),navigating:u(null),updated:k()};export{R as I,f as P,A as S,E as a,T as b,x as c,I as d,O as e,S as f,y as g,m as i,_ as o,U as s};
