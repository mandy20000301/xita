if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const a=e=>c(e,s),b={module:{uri:s},exports:t,require:a};i[s]=Promise.all(r.map((e=>b[e]||a(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"xita"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/xita/css/app.css",revision:"482d8155058821f8469df9ed802e3051"},{url:"/xita/css/chunk-vendors.css",revision:"574e925a56b00b74246eafcd944d2961"},{url:"/xita/img/aws.png",revision:"abf212a871d4ead561a203fef89edd09"},{url:"/xita/img/banner.png",revision:"5719bcaf5dadfa8c7130264716bcbe92"},{url:"/xita/img/bg.png",revision:"3d18898c0f9cf670967d3bfd15ce0cf1"},{url:"/xita/img/bg_mobile.png",revision:"aca3e933bf237f29ec8bc479585cbc06"},{url:"/xita/img/concept/concept_bg.png",revision:"c1b84e8d257af88b9b39ee5655281538"},{url:"/xita/img/concept_bg.png",revision:"c1b84e8d257af88b9b39ee5655281538"},{url:"/xita/img/feature1.png",revision:"e13cc367872292c26946fbcfdb2cf0a2"},{url:"/xita/img/feature2.png",revision:"2ee50ed4d2e194710201832cbb4b37df"},{url:"/xita/img/feature3.png",revision:"487e92eb4394d2f53091c7671e9e30b3"},{url:"/xita/img/woman/bg.png",revision:"3d18898c0f9cf670967d3bfd15ce0cf1"},{url:"/xita/img/woman/bg_mobile.png",revision:"aca3e933bf237f29ec8bc479585cbc06"},{url:"/xita/index.html",revision:"9ec06c3980824b85bc1d67b11bb1c121"},{url:"/xita/js/app.js",revision:"6911ac5567c55b646638f37bd9b953b7"},{url:"/xita/js/chunk-vendors.js",revision:"20f0f7928c9b95156608cda166dac82d"},{url:"/xita/manifest.json",revision:"ce15b02c99546bf66bcce988e4d2a71d"},{url:"/xita/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
