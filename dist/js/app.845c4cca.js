(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-d133368e":"a06c7d2f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-d133368e":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-d133368e":"1a39c3e8"}[t]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],p.parentNode.removeChild(p),n(a)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c88":function(t,e,n){"use strict";var r=n("491d"),o=n.n(r);o.a},"491d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("TODOLIST")]),t._v(" | "),n("router-link",{attrs:{to:"/done"}},[t._v("DONELIST")])],1),n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TODOLIST"},[n("todo")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t.speech?n("input",{attrs:{type:"text","x-webkit-speech":""}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],staticClass:"todo",attrs:{type:"text"},domProps:{value:t.word},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.writelist(e)},input:function(e){e.target.composing||(t.word=e.target.value)}}}),n("svg",{staticClass:"icon icon-size",attrs:{t:"1585375453901",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2473",width:"200",height:"200"}},[n("path",{attrs:{d:"M226.8 608.1m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z",fill:"#242424","p-id":"2474"}}),n("path",{attrs:{d:"M766.1 607.7m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z",fill:"#242424","p-id":"2475"}}),n("path",{attrs:{d:"M495.7 803.8c-22.6 0-41 18.3-41 41v85.9c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41v-85.9c0-22.7-18.3-41-41-41z",fill:"#242424","p-id":"2476"}}),n("path",{attrs:{d:"M382.2 961.3c0 22.6 18.3 41 41 41h146.6c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41H423.2c-22.6 0.1-41 18.4-41 41zM656.9 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.3-41-41-41zM334.6 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.4-41-41-41z",fill:"#242424","p-id":"2477"}}),n("path",{attrs:{d:"M376.2 250.6c0-1.3-0.1-2.6-0.1-3.9 0-66.1 53.6-119.7 119.7-119.7s119.7 53.6 119.7 119.7v2.7l82.4-6.8C695.6 132.9 606 44.7 495.8 44.7c-111.6 0-202.1 90.5-202.1 202.1 0 5.2 0.2 10.4 0.6 15.5l81.9-11.7zM615.4 553.3v1.4c0 66.1-53.6 119.7-119.7 119.7S376 620.8 376 554.7c0-1.5 0-2.9 0.1-4.3h-82.5c0 1.4-0.1 2.9-0.1 4.3 0 111.6 90.5 202.1 202.1 202.1s202.1-90.5 202.1-202.1v-0.2l-82.3-1.2z",fill:"#242424","p-id":"2478"}}),n("path",{attrs:{d:"M725.3 605C706 713.9 610.9 796.5 496.5 796.5c-114.5 0-209.6-82.7-228.8-191.7L186 612c23.1 150.8 153.3 266.3 310.6 266.3 157.4 0 287.7-115.7 310.6-266.6l-81.9-6.7z",fill:"#242424","p-id":"2479"}})]),n("button",{staticClass:"submit",on:{click:t.writelist}},[t._v("提交")])]),n("div",[n("ul",t._l(t.list,(function(e,r){return n("li",{key:r},[t._v(" "+t._s(e)+" "),n("a",{staticClass:"delete",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.deleteWord(r)}}},[t._v("刪除")]),t._v("| "),n("a",{staticClass:"update",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.updateWord(r)}}},[t._v("修改")])])})),0)])])},h=[],v=(n("a434"),n("bc3a")),m=n.n(v),g={data:function(){return{word:"",list:[],dellist:[],speech:!1,info:""}},components:{},mounted:function(){var t=this,e=JSON.parse(localStorage.getItem("todo"));e&&(this.list=e),m.a.get("https://aip.baidubce.com/oauth/2.0/toke?grant_type=client_credentials&client_id=0k0OGhAb86tEzTRR9ZZoYljy&client_secret=B1dnUk5WCANqWUyRus6gpm4dzT6ZVjYt").then((function(e){return t.info=e}))},created:{ifSpeech:function(){void 0===document.createElement("input").webkitSpeech?this.speech=!1:this.speech=!0}},methods:{writelist:function(){if(""!==this.word){var t=/(^\s+$)/g;t.test(this.word)||(this.list.push(this.word),localStorage.setItem("todo",JSON.stringify(this.list)),this.word="")}},deleteWord:function(t){var e=this.list[t];try{var n=JSON.parse(localStorage.getItem("done"));0===n.length||(this.dellist=n),this.dellist.push(e)}catch(r){this.dellist.push(e)}localStorage.setItem("done",JSON.stringify(this.dellist)),this.list.splice(t,1),localStorage.setItem("todo",JSON.stringify(this.list))},updateWord:function(t){this.word=this.list[t],this.list.splice(t,1),localStorage.setItem("todo",JSON.stringify(this.list))}}},y=g,w=(n("2c88"),Object(a["a"])(y,f,h,!1,null,"62dd2e03",null)),b=w.exports,O={name:"TODOLIST",components:{todo:b}},S=O,_=Object(a["a"])(S,d,p,!1,null,null,null),k=_.exports;r["a"].use(u["a"]);var T=[{path:"/",name:"TODOLIST",component:k},{path:"/done",name:"DONELIST",component:function(){return n.e("chunk-d133368e").then(n.bind(null,"2324"))}}],x=new u["a"]({mode:"hash",routes:T}),C=x;r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.845c4cca.js.map