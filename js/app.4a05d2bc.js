(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/beauty-place/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"022f":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={class:"cart-item"};function o(e,t){return Object(r["p"])(),Object(r["d"])("div",n)}const c={};c.render=o;t["default"]=c},"0418":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=a("9b19"),o=a.n(n),c=Object(r["B"])("data-v-4e7f1b7b");Object(r["s"])("data-v-4e7f1b7b");var s={class:"header"},i={class:"container"},u=Object(r["g"])("div",{class:"logo"},[Object(r["g"])("img",{src:o.a,width:"100",height:"37"})],-1),d=Object(r["f"])("Catalogue"),l=Object(r["f"])("About"),f=Object(r["f"])("Admin");Object(r["q"])();var p=c((function(e,t,a,n,o,p){var b=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("header",s,[Object(r["g"])("div",i,[u,Object(r["g"])("nav",null,[Object(r["g"])(b,{to:"/",exact:""},{default:c((function(){return[d]})),_:1}),Object(r["g"])(b,{to:"/about"},{default:c((function(){return[l]})),_:1}),Object(r["g"])(b,{to:"/admin"},{default:c((function(){return[f]})),_:1}),Object(r["g"])(b,{to:"/cart"},{default:c((function(){return[Object(r["f"])("Cart ("+Object(r["y"])(o.cartItems)+")",1)]})),_:1})])])])})),b={name:"header",data:function(){return{cartItems:0}}};a("635e");b.render=p,b.__scopeId="data-v-4e7f1b7b";t["default"]=b},"06ee":function(e,t,a){e.exports=a.p+"fonts/Montserrat-Medium.4193cb37.woff2"},"0737":function(e,t,a){e.exports=a.p+"img/product1.67574fe5.jpg"},"17d1":function(e,t,a){e.exports=a.p+"img/product5.f19547e5.jpg"},1817:function(e,t,a){"use strict";a("229a")},"229a":function(e,t,a){},"2a7d":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["B"])("data-v-22de7cf8");Object(r["s"])("data-v-22de7cf8");var o={class:"button"};Object(r["q"])();var c=n((function(e,t,a,n,c,s){return Object(r["p"])(),Object(r["d"])("button",o)})),s={name:"button",props:{name:String,class:String}};s.render=c,s.__scopeId="data-v-22de7cf8";t["default"]=s},"2e14":function(e,t,a){"use strict";a("cef6")},3530:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={class:"container"},o=Object(r["g"])("form",{id:"add-product",class:"form",action:"/"},[Object(r["g"])("input",{type:"text",name:"image"})],-1),c={class:"products"};function s(e,t){var a=Object(r["w"])("Product");return Object(r["p"])(),Object(r["d"])("div",n,[o,Object(r["g"])("div",c,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.productList,(function(e){return Object(r["p"])(),Object(r["d"])(a,{id:e.id,key:e.id,image:e.image,alt:e.alt,describe:e.describe,price:e.price,sizes:e.sizes},null,8,["id","image","alt","describe","price","sizes"])})),128))])])}const i={};i.render=s;t["default"]=i},"3dfd":function(e,t,a){"use strict";a.r(t);var r=a("7a23");function n(e,t,a,n,o,c){var s=Object(r["w"])("Header"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(s),Object(r["g"])(i)],64)}var o=a("0418"),c={name:"App",components:{Header:o["default"]}};a("86e5");c.render=n;t["default"]=c},4360:function(e,t,a){"use strict";a.r(t);a("7db0");var r=a("5502");t["default"]=Object(r["a"])({state:{orders:[],products:[{id:1,image:"assets/products/product1.jpg",alt:"@@",describe:"Crossbody bag with shoulder strap in beige diamond quilt",sizes:["xl","l","md","s","xs"],price:10},{id:2,image:"assets/products/product2.jpg",alt:"@@",describe:"Shoulder Bag",sizes:["xxl","xl","l"],price:20},{id:3,image:"assets/products/product3.jpg",alt:"@@",describe:"Unisex Backpack",sizes:["l","md","s"],price:30},{id:4,image:"assets/products/product4.jpg",alt:"@@",describe:"Handheld Bag",sizes:["s","xs","xxs"],price:40},{id:5,image:"assets/products/product5.jpg",alt:"@@",describe:"Crossbody bag",sizes:["xxl","xl","l","md","s","xs","xxs"],price:50}],lastOrderId:0,lastProductId:5,sizes:["xxl","xl","l","md","s","xs","xxs"]},getters:{getTotalProductCount:function(e){return e.products.length},getProductList:function(e){return e.products},getProductById:function(e,t){return t.products.find((function(t){return t.id===e}))},getOrderById:function(e,t){return t.orders.find((function(t){return t.id===e}))},getSizes:function(e){return e.sizes}},mutations:{addOrder:function(){},addOrderPosition:function(){},removeOrderPosition:function(){},addProduct:function(){},removeProduct:function(){}},actions:{addOrder:function(){},addOrderPosition:function(){},removeOrderPosition:function(){},addProduct:function(){},removeProduct:function(){}},modules:{}})},"44ff":function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),n=Object(r["B"])("data-v-ea65c862");Object(r["s"])("data-v-ea65c862");var o={class:"check-item"},c={class:"check-item__label"};Object(r["q"])();var s=n((function(e,t,a,n,s,i){return Object(r["p"])(),Object(r["d"])("label",o,[Object(r["g"])("input",{type:a.type,value:a.value,name:a.name,checked:a.isChecked,disabled:a.isDisabled,required:a.isRequired},null,8,["type","value","name","checked","disabled","required"]),Object(r["g"])("span",c,Object(r["y"])(a.valueName),1)])})),i={name:"CheckItem",props:{type:String,value:String,valueName:String,name:String,isChecked:Boolean,isDisabled:Boolean,isRequired:Boolean}};i.render=s,i.__scopeId="data-v-ea65c862";t["default"]=i},"452e":function(e,t,a){e.exports=a.p+"fonts/Montserrat-Bold.137a9f5f.woff"},"4abd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=a("3dfd"),o=(a("ddb8"),a("a18c")),c=a("4360");Object(r["c"])(n["default"]).use(c["default"]).use(o["default"]).mount("#app")},"5ea0":function(e,t,a){e.exports=a.p+"img/product2.30a5fb25.jpg"},"635e":function(e,t,a){"use strict";a("4abd")},"66e1":function(e,t,a){e.exports=a.p+"fonts/Montserrat-Regular.6c880721.woff2"},"7fa1":function(e,t,a){e.exports=a.p+"img/product3.cc43c5ae.jpg"},"80a4":function(e,t,a){"use strict";a("d31e")},"86e5":function(e,t,a){"use strict";a("9899")},"8ed2":function(e,t,a){e.exports=a.p+"fonts/Montserrat-Bold.1eaf5953.woff2"},9899:function(e,t,a){},"9b19":function(e,t,a){e.exports=a.p+"img/logo.22a59d9d.svg"},a18c:function(e,t,a){"use strict";a.r(t);a("d3b7"),a("3ca3"),a("ddb0");var r=a("6c02"),n=a("bb51"),o=[{path:"/",name:"Catalogue",component:n["default"]},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/admin",name:"Admin",component:function(){return Promise.resolve().then(a.bind(null,"3530"))}},{path:"/cart",name:"Cart",component:function(){return Promise.resolve().then(a.bind(null,"b789"))}}],c=Object(r["a"])({history:Object(r["b"])("/beauty-place/"),routes:o,linkActiveClass:"is-active",linkExactActiveClass:"is-active",scrollBehavior:function(e,t,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})}});t["default"]=c},a8ec:function(e,t,a){var r={"./App":"3dfd","./App.vue":"3dfd","./assets/fonts/Montserrat-Bold.woff":"452e","./assets/fonts/Montserrat-Bold.woff2":"8ed2","./assets/fonts/Montserrat-Medium.woff":"e9ff","./assets/fonts/Montserrat-Medium.woff2":"06ee","./assets/fonts/Montserrat-Regular.woff":"aa34","./assets/fonts/Montserrat-Regular.woff2":"66e1","./assets/logo.png":"cf05","./assets/logo.svg":"9b19","./assets/products/product1.jpg":"0737","./assets/products/product2.jpg":"5ea0","./assets/products/product3.jpg":"7fa1","./assets/products/product4.jpg":"fe12","./assets/products/product5.jpg":"17d1","./components/Button":"2a7d","./components/Button.vue":"2a7d","./components/CartItem":"022f","./components/CartItem.vue":"022f","./components/CheckItem":"44ff","./components/CheckItem.vue":"44ff","./components/GoodsCounter":"e2de","./components/GoodsCounter.vue":"e2de","./components/Header":"0418","./components/Header.vue":"0418","./components/HelloWorld":"fdab","./components/HelloWorld.vue":"fdab","./components/Product":"be6f","./components/Product.vue":"be6f","./main":"56d7","./main.js":"56d7","./registerServiceWorker":"ddb8","./registerServiceWorker.js":"ddb8","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./views/About":"f820","./views/About.vue":"f820","./views/Admin":"3530","./views/Admin.vue":"3530","./views/Cart":"b789","./views/Cart.vue":"b789","./views/Home":"bb51","./views/Home.vue":"bb51"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="a8ec"},aa34:function(e,t,a){e.exports=a.p+"fonts/Montserrat-Regular.c0b8804a.woff"},b1b0:function(e,t,a){"use strict";a("c7fb")},b789:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={class:"cart"},o=Object(r["g"])("h1",null,"This is an cart page",-1);function c(e,t){return Object(r["p"])(),Object(r["d"])("div",n,[o])}const s={};s.render=c;t["default"]=s},bb51:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["B"])("data-v-bafed216");Object(r["s"])("data-v-bafed216");var o={class:"home"},c={class:"container"},s={class:"products"};Object(r["q"])();var i=n((function(e,t,a,n,i,u){var d=Object(r["w"])("GoodsCounter"),l=Object(r["w"])("Product");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("div",c,[Object(r["g"])(d,{count:u.totalProducts,describe:i.goodsMessage},null,8,["count","describe"]),Object(r["g"])("div",s,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(u.productList,(function(e){return Object(r["p"])(),Object(r["d"])(l,{id:e.id,key:e.id,image:e.image,alt:e.alt,describe:e.describe,price:e.price,sizes:e.sizes},null,8,["id","image","alt","describe","price","sizes"])})),128))])])])})),u=a("be6f"),d=a("e2de"),l={name:"Home",data:function(){return{goodsMessage:"goods total"}},computed:{productList:function(){return this.$store.getters.getProductList},totalProducts:function(){return this.$store.getters.getTotalProductCount}},components:{Product:u["default"],GoodsCounter:d["default"]}};a("80a4");l.render=i,l.__scopeId="data-v-bafed216";t["default"]=l},be6f:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["B"])("data-v-1fea5519");Object(r["s"])("data-v-1fea5519");var o={class:"product"},c={class:"product__image"},s={class:"product__data"},i={class:"product__price"},u={class:"product__sizes"};Object(r["q"])();var d=n((function(e,t,n,d,l,f){var p=Object(r["w"])("CheckItem");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("div",c,[Object(r["g"])("img",{src:a("a8ec")("./".concat(n.image)),alt:n.alt},null,8,["src","alt"])]),Object(r["g"])("p",null,Object(r["y"])(n.describe),1),Object(r["g"])("div",s,[Object(r["g"])("div",i,Object(r["y"])("$".concat(n.price)),1),Object(r["g"])("div",u,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.sizes,(function(e,t){return Object(r["p"])(),Object(r["d"])(p,{key:t,type:"radio",value:e,name:"size-".concat(n.id),valueName:e},null,8,["value","name","valueName"])})),128))])])])})),l=(a("a9e3"),a("44ff")),f={name:"product",props:{id:String,image:String,alt:String,describe:String,sizes:Array,price:Number,button:Object},components:{CheckItem:l["default"]}};a("b1b0");f.render=d,f.__scopeId="data-v-1fea5519";t["default"]=f},c7fb:function(e,t,a){},cef6:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d31e:function(e,t,a){},ddb8:function(e,t,a){"use strict";a.r(t);var r=a("9483");Object(r["a"])("".concat("/beauty-place/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},e2de:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["B"])("data-v-f97db06a");Object(r["s"])("data-v-f97db06a");var o={class:"goods-counter"};Object(r["q"])();var c=n((function(e,t,a,n,c,s){return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("span",null,Object(r["y"])(a.count)+" "+Object(r["y"])(a.describe),1)])})),s=(a("a9e3"),{name:"GoodsCounter",props:{count:Number,describe:String}});a("2e14");s.render=c,s.__scopeId="data-v-f97db06a";t["default"]=s},e9ff:function(e,t,a){e.exports=a.p+"fonts/Montserrat-Medium.72aebf45.woff"},f820:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={class:"about"},o=Object(r["g"])("div",{class:"container"},[Object(r["g"])("h1",null,"About us"),Object(r["g"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam rem magni, dolorum autem praesentium incidunt veritatis eius ad assumenda nemo! Numquam temporibus ea voluptas alias sed cupiditate? Itaque, ullam? "),Object(r["g"])("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio porro amet similique error, iusto veritatis pariatur deleniti facere omnis. Nostrum totam temporibus inventore. Consectetur ab voluptates sint nesciunt aliquid placeat? ")],-1);function c(e,t){return Object(r["p"])(),Object(r["d"])("div",n,[o])}const s={};s.render=c;t["default"]=s},fdab:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n=Object(r["B"])("data-v-a48034f0");Object(r["s"])("data-v-a48034f0");var o={class:"hello"},c=Object(r["e"])('<p data-v-a48034f0> For a guide and recipes on how to configure / customize this project,<br data-v-a48034f0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>vue-cli documentation</a>. </p><h3 data-v-a48034f0>Installed CLI Plugins</h3><ul data-v-a48034f0><li data-v-a48034f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-a48034f0>babel</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-a48034f0>pwa</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-a48034f0>router</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-a48034f0>vuex</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-a48034f0>eslint</a></li></ul><h3 data-v-a48034f0>Essential Links</h3><ul data-v-a48034f0><li data-v-a48034f0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>Core Docs</a></li><li data-v-a48034f0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>Forum</a></li><li data-v-a48034f0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>Community Chat</a></li><li data-v-a48034f0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-a48034f0>Twitter</a></li><li data-v-a48034f0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>News</a></li></ul><h3 data-v-a48034f0>Ecosystem</h3><ul data-v-a48034f0><li data-v-a48034f0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>vue-router</a></li><li data-v-a48034f0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>vuex</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-a48034f0>vue-devtools</a></li><li data-v-a48034f0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-a48034f0>vue-loader</a></li><li data-v-a48034f0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-a48034f0>awesome-vue</a></li></ul>',7);Object(r["q"])();var s=n((function(e,t,a,n,s,i){return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("h1",null,Object(r["y"])(a.msg),1),c])})),i={name:"HelloWorld",props:{msg:String}};a("1817");i.render=s,i.__scopeId="data-v-a48034f0";t["default"]=i},fe12:function(e,t,a){e.exports=a.p+"img/product4.54a95d53.jpg"}});
//# sourceMappingURL=app.4a05d2bc.js.map