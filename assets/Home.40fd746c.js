import{_ as d,f as h,u as k,g as i,h as e,o,c as a,a as c,i as F,j as r,t as l,k as g,N as x,F as I,l as L,r as A,b as m,m as y}from"./app.a7737b35.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=h({setup(p){const{site:s,frontmatter:t}=k(),_=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(_)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):r("",!0),e(v)?(o(),a("h1",b,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var j=d(V,[["__scopeId","data-v-370f18c0"]]);const D={key:0,class:"home-features"},S={class:"wrapper"},E={class:"container"},q={class:"features"},z={key:0,class:"title"},G={key:1,class:"details"},J=h({setup(p){const{frontmatter:s}=k(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",D,[c("div",S,[c("div",E,[c("div",q,[(o(!0),a(I,null,L(e(_),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",z,l(n.title),1)):r("",!0),n.details?(o(),a("p",G,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var K=d(J,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=h({setup(p){const{frontmatter:s}=k();return(t,_)=>e(s).footer?(o(),a("footer",M,[c("div",O,[c("p",P,l(e(s).footer),1)])])):r("",!0)}});var R=d(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({setup(p){return(s,t)=>{const _=A("Content");return o(),a("main",U,[m(j),y(s.$slots,"hero",{},void 0,!0),m(K),c("div",W,[m(_)]),y(s.$slots,"features",{},void 0,!0),m(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};
