import{S as pe,i as me,s as be,k as w,l as y,m as $,h as l,n as m,b as _,E as D,J as g,L as we,M as ye,a as x,e as ue,N as ge,c as E,O as z,P as he,f as U,t as W,K as ce,Q as de,o as ke,v as xe,x as X,q as O,y as Y,r as H,z as Z,R as Q,u as Ee,A as ee,T as $e}from"../../../chunks/index-7cc81915.js";import{f as De,c as qe,B as Se,b as _e,I as Ve,i as fe,a as Ie,d as Le,e as Be,g as Me,m as Ne,h as te,H as Pe,S as Te}from"../../../chunks/model_out-a4023712.js";function Ce(s){let a,r;return{c(){a=w("div"),r=w("div"),this.h()},l(t){a=y(t,"DIV",{class:!0});var d=$(a);r=y(d,"DIV",{id:!0}),$(r).forEach(l),d.forEach(l),this.h()},h(){m(r,"id","table"),m(a,"class","table-auto")},m(t,d){_(t,a,d),D(a,r)},p:g,i:g,o:g,d(t){t&&l(a)}}}function Oe(s,a,r){let t;function d(v,f){if(console.log("in debug...."),t=v??t,!t||t.length==0)return;console.log("debug data is",t);let i=De(t);console.log("data table done,",i.print()),document.getElementById("table").innerHTML=i.toHTML()}return[d]}class He extends pe{constructor(a){super(),me(this,a,Oe,Ce,be,{render:0})}get render(){return this.$$.ctx[0]}}function Je(s){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function Re(s){let a,r,t,d,v,f,i=Object.keys(te)+"",o,u,b,N,P,h,V=JSON.stringify(s[4],null,2)+"",I,T,q,J,C,c,p,L,B,K,G,M,k,j,S,R,F,ae;a=new Pe({props:{country:"Ethiopia Data View",initTime:s[17]}});let ve={};return S=new He({props:ve}),s[11](S),{c(){X(a.$$.fragment),r=x(),t=w("div"),d=O("Models available"),v=x(),f=w("div"),o=O(i),u=x(),b=w("div"),N=O("Parameters currently"),P=x(),h=w("div"),I=O(V),T=x(),q=w("div"),J=O("Enter selected model"),C=x(),c=w("div"),p=w("input"),L=x(),B=w("div"),K=O("Enter param updates"),G=x(),M=w("div"),k=w("input"),j=x(),X(S.$$.fragment),this.h()},l(e){Y(a.$$.fragment,e),r=E(e),t=y(e,"DIV",{class:!0});var n=$(t);d=H(n,"Models available"),n.forEach(l),v=E(e),f=y(e,"DIV",{class:!0});var A=$(f);o=H(A,i),A.forEach(l),u=E(e),b=y(e,"DIV",{class:!0});var le=$(b);N=H(le,"Parameters currently"),le.forEach(l),P=E(e),h=y(e,"DIV",{class:!0});var re=$(h);I=H(re,V),re.forEach(l),T=E(e),q=y(e,"DIV",{class:!0});var se=$(q);J=H(se,"Enter selected model"),se.forEach(l),C=E(e),c=y(e,"DIV",{class:!0});var ne=$(c);p=y(ne,"INPUT",{type:!0,class:!0}),ne.forEach(l),L=E(e),B=y(e,"DIV",{class:!0});var ie=$(B);K=H(ie,"Enter param updates"),ie.forEach(l),G=E(e),M=y(e,"DIV",{class:!0});var oe=$(M);k=y(oe,"INPUT",{type:!0,class:!0}),oe.forEach(l),j=E(e),Y(S.$$.fragment,e),this.h()},h(){m(t,"class","text-2xl text-center svelte-1rq187w"),m(f,"class","px-5 py-2 bg-white border-solid border-2 border-black svelte-1rq187w"),m(b,"class","text-2xl text-center svelte-1rq187w"),m(h,"class","px-5 py-2 bg-white border-solid border-2 border-black svelte-1rq187w"),m(q,"class","text-2xl py-2 text-center svelte-1rq187w"),m(p,"type","text"),m(p,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),m(c,"class","px-[1%] py-[1%] ml-[5.9%] svelte-1rq187w"),m(B,"class","text-2xl py-2 text-center svelte-1rq187w"),m(k,"type","text"),m(k,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),m(M,"class","px-[1%] py-[1%] ml-[5.9%] svelte-1rq187w")},m(e,n){Z(a,e,n),_(e,r,n),_(e,t,n),D(t,d),_(e,v,n),_(e,f,n),D(f,o),_(e,u,n),_(e,b,n),D(b,N),_(e,P,n),_(e,h,n),D(h,I),_(e,T,n),_(e,q,n),D(q,J),_(e,C,n),_(e,c,n),D(c,p),Q(p,s[1]),_(e,L,n),_(e,B,n),D(B,K),_(e,G,n),_(e,M,n),D(M,k),Q(k,s[3]),_(e,j,n),Z(S,e,n),R=!0,F||(ae=[z(p,"input",s[9]),z(p,"change",s[7]),z(k,"input",s[10]),z(k,"change",s[6])],F=!0)},p(e,n){(!R||n&16)&&V!==(V=JSON.stringify(e[4],null,2)+"")&&Ee(I,V),n&2&&p.value!==e[1]&&Q(p,e[1]),n&8&&k.value!==e[3]&&Q(k,e[3]);const A={};S.$set(A)},i(e){R||(U(a.$$.fragment,e),U(S.$$.fragment,e),R=!0)},o(e){W(a.$$.fragment,e),W(S.$$.fragment,e),R=!1},d(e){ee(a,e),e&&l(r),e&&l(t),e&&l(v),e&&l(f),e&&l(u),e&&l(b),e&&l(P),e&&l(h),e&&l(T),e&&l(q),e&&l(C),e&&l(c),e&&l(L),e&&l(B),e&&l(G),e&&l(M),e&&l(j),s[11](null),ee(S,e),F=!1,$e(ae)}}}function ze(s){let a,r;return a=new Te({}),{c(){X(a.$$.fragment)},l(t){Y(a.$$.fragment,t)},m(t,d){Z(a,t,d),r=!0},p:g,i(t){r||(U(a.$$.fragment,t),r=!0)},o(t){W(a.$$.fragment,t),r=!1},d(t){ee(a,t)}}}function Ge(s){let a,r,t,d,v,f;we(s[8]);let i={ctx:s,current:null,token:null,hasCatch:!1,pending:ze,then:Re,catch:Je,value:17,blocks:[,,,]};return ye(s[5],i),{c(){a=w("meta"),r=x(),t=ue(),i.block.c(),this.h()},l(o){const u=ge("svelte-1qxraob",document.head);a=y(u,"META",{name:!0,content:!0}),u.forEach(l),r=E(o),t=ue(),i.block.l(o),this.h()},h(){document.title="DESDR: Ethiopia",m(a,"name","description"),m(a,"content","DESDR Ethiopia")},m(o,u){D(document.head,a),_(o,r,u),_(o,t,u),i.block.m(o,i.anchor=u),i.mount=()=>t.parentNode,i.anchor=t,d=!0,v||(f=z(window,"resize",s[8]),v=!0)},p(o,[u]){s=o,he(i,s,u)},i(o){d||(U(i.block),d=!0)},o(o){for(let u=0;u<3;u+=1){const b=i.blocks[u];W(b)}d=!1},d(o){l(a),o&&l(r),o&&l(t),i.block.d(o),i.token=null,i=null,v=!1,f()}}}function je(s,a,r){let t,d;ce(s,_e,c=>r(13,t=c)),ce(s,fe,c=>r(14,d=c));let v=0,f=null,i=null,o=null,u=null,b={region:"Genete",dekcap:24,freq:.263,year_start:1981,year_end:2020,back_fill_year:2001,sum_early_weight:.4,sum_late_weight:.4,vegetation_weight:.6,sum_early_first:28,sum_early_last:33,sum_late_first:29,sum_late_last:34,vegetation_first:10,vegetation_last:30,scalar_vegetation:100,exit_multiplier:.8};de(_e,t=new Se,t),de(fe,d=new Ve,d);let N=t.createBackend({id:"duckdb1",type:"DuckDBBackend",name:"chirps_raw",url:qe,schema:[]});async function P(c){console.log("dbGoLive started");let p=Date.now();await c.init(!1),await c.loadCSVString("admin_raw",Ie),await c.loadCSVString("crop_cal_raw",Le),await c.loadCSVString("badyear_raw",Be),await c.loadCSVString("evi_raw",Me);let L=Date.now();return console.log("db go live time is,",L-p),L-p}let h=P(N),V=function(){console.log("new param raw entry is: ",u);let c=String(u),p=JSON.parse(c);console.log("new parameters received",p),r(4,b=Ne(b,p)),I()},I=function(){console.log("executing model: ",te[f].query),i=t.createBackend({id:"query_under_debug",type:"QueryBackend",query:te[f].query,name:"test",params:b,backend:N}),i.registerView(o),i.execute(b)};ke(async()=>{await h});function T(){r(0,v=window.innerWidth)}function q(){f=this.value,r(1,f)}function J(){u=this.value,r(3,u)}function C(c){xe[c?"unshift":"push"](()=>{o=c,r(2,o)})}return[v,f,o,u,b,h,V,I,T,q,J,C]}class Ue extends pe{constructor(a){super(),me(this,a,je,Ge,be,{})}}export{Ue as default};
