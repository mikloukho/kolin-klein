(function(){var e={4190:function(e,t,a){var n={"./1.jpg":1464,"./2.jpg":3948,"./3.jpg":1971,"./4.jpg":7870,"./5.jpg":3532,"./6.jpg":4773};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=4190},2410:function(e,t,a){"use strict";var n=a(9963),o=a(6252);const r={id:"app"};function s(e,t,a,n,s,i){const c=(0,o.up)("BaseHeader"),l=(0,o.up)("router-view"),u=(0,o.up)("BaseFooter");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(c,{onShowSidebar:i.handleSidebar},null,8,["onShowSidebar"]),(0,o.Wm)(l),(0,o.Wm)(u,{showSideBar:e.isShowSideBar},null,8,["showSideBar"])])}var i=a(3577);const c={class:"header header--bg"},l=(0,o._)("div",{class:"header__shape"},[(0,o._)("div",{class:"header__shape-inner"})],-1),u={class:"container"},d={class:"navbar"},_={class:"navbar__row"},m={class:"header__logo"},f={class:"navbar__ul"},h={class:"navbar__item"},p=(0,o.Uk)("home"),v={class:"navbar__item navbar__item--has-sub"},b={class:"navbar__subset"},g={class:"navbar__item"},w=(0,o.Uk)("Menu 1"),k={class:"navbar__item"},y=(0,o.Uk)("Menu 2"),S={class:"navbar__item navbar__item--has-sub"},D=(0,o.Uk)("Menu 3"),C={class:"navbar__subset"},B={class:"navbar__item"},T=(0,o.Uk)("Menu 1"),j={class:"navbar__item"},E=(0,o.Uk)("Menu 2"),O={class:"navbar__item navbar__item--has-sub"},L=(0,o._)("a",{href:"",class:"navbar__link"},"Menu 3",-1),A={class:"navbar__subset"},U={class:"navbar__item"},x=(0,o.Uk)("Menu 1"),P={class:"navbar__item"},M=(0,o.Uk)("Menu 2"),N={class:"navbar__item"},W=(0,o.Uk)("Menu 3"),I={class:"navbar__item"},q=(0,o.Uk)("About us"),F=(0,o._)("li",{class:"navbar__item"},[(0,o._)("a",{href:"https://github.com/Tefoh/vue-ecommerce-template",class:"navbar__link"},"Contact us(github)")],-1),H={class:"navbar__action"},R={class:"header__basket"},z={class:"header__basket-count"},J={class:"header__dropdown-content header__dropdown-content--overflow"},Y={href:"",class:"header__basket-link"},Z=["src"],$={class:"header__basket-details"},K={class:"header__basket-title",href:""},Q={class:"header__basket-price"},G=["onClick"],V={class:"header__basket-btn"},X=(0,o.Uk)("complete order"),ee={class:"header__account"},te={class:"header__dropdown-content"},ae=(0,o.Uk)("Login"),ne=(0,o.Uk)("Register");function oe(e,t,r,s,oe,re){const se=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",c,[l,(0,o._)("div",u,[(0,o._)("div",d,[(0,o._)("div",_,[(0,o._)("div",m,[(0,o.Wm)(se,{to:{name:"Home"},class:"header__logo-img"})]),(0,o._)("div",{class:(0,i.C_)(["navbar__items",{"navbar__items--is-active":e.showSideBar}])},[(0,o._)("ul",f,[(0,o._)("li",h,[(0,o.Wm)(se,{to:{name:"Home"},class:"navbar__link navbar__link--is-active"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("li",v,[(0,o._)("a",{onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["prevent"])),href:"",class:"navbar__link"},"Categories"),(0,o._)("ul",b,[(0,o._)("li",g,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[w])),_:1})]),(0,o._)("li",k,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[y])),_:1})]),(0,o._)("li",S,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[D])),_:1}),(0,o._)("ul",C,[(0,o._)("li",B,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[T])),_:1})]),(0,o._)("li",j,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[E])),_:1})]),(0,o._)("li",O,[L,(0,o._)("ul",A,[(0,o._)("li",U,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[x])),_:1})]),(0,o._)("li",P,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[M])),_:1})]),(0,o._)("li",N,[(0,o.Wm)(se,{to:{name:"Category"},class:"navbar__link"},{default:(0,o.w5)((()=>[W])),_:1})])])])])])])]),(0,o._)("li",I,[(0,o.Wm)(se,{to:{name:"About"},class:"navbar__link"},{default:(0,o.w5)((()=>[q])),_:1})]),F])],2),(0,o._)("div",H,[(0,o._)("div",R,[(0,o._)("span",{class:"header__basket-icon",onClick:t[1]||(t[1]=(...e)=>re.showDropDownBasket&&re.showDropDownBasket(...e))}),(0,o._)("span",z,(0,i.zw)(e.count),1),(0,o._)("div",{class:(0,i.C_)(["header__dropdown",{"header__dropdown--is-active":e.isBasketDropDown}])},[(0,o._)("div",J,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"header__basket-item",key:t.id},[(0,o._)("a",Y,[(0,o._)("img",{src:a(4190)(`./${t.id}.jpg`),class:"header__basket-img"},null,8,Z)]),(0,o._)("div",$,[(0,o._)("h5",null,[(0,o._)("a",K,(0,i.zw)(t.name)+" ("+(0,i.zw)(t.quantity)+")",1)]),(0,o._)("div",Q,(0,i.zw)(re.formattedPrice(t.price)),1),(0,o._)("button",{onClick:a=>e.removeItem(t),type:"button",class:"header__basket-remove"}," remove ",8,G)])])))),128)),(0,o._)("div",V,[(0,o.Wm)(se,{to:{name:"Cart"},class:"btn btn--boxshadow btn--brand w--100"},{default:(0,o.w5)((()=>[X])),_:1})])])],2)]),(0,o._)("div",ee,[(0,o._)("span",{class:"header__account-icon",onClick:t[2]||(t[2]=(...e)=>re.showDropDownAccount&&re.showDropDownAccount(...e))}),(0,o._)("div",{class:(0,i.C_)(["header__dropdown header__dropdown--w200",{"header__dropdown--is-active":e.isAccountDropDown}])},[(0,o._)("div",te,[(0,o.Wm)(se,{to:{name:"Login"},class:"header__account-link"},{default:(0,o.w5)((()=>[ae])),_:1}),(0,o.Wm)(se,{to:{name:"Register"},class:"header__account-link"},{default:(0,o.w5)((()=>[ne])),_:1})])],2)]),(0,o._)("div",{class:(0,i.C_)(["header__menu",{"header__menu--is-active":e.showSideBar}]),onClick:t[3]||(t[3]=(...e)=>re.toggleSidebar&&re.toggleSidebar(...e))},null,2)])])])])])}var re=a(3907),se={name:"BaseHeader",data:()=>({isBasketDropDown:!1,isAccountDropDown:!1,showSideBar:!1}),computed:{...(0,re.rn)("cart",["items"]),...(0,re.Se)("cart",["count"])},methods:{showDropDownBasket(){this.isAccountDropDown=!1,this.isBasketDropDown=!this.isBasketDropDown},showDropDownAccount(){this.isBasketDropDown=!1,this.isAccountDropDown=!this.isAccountDropDown},eventListener(e){e.target.closest(".header__basket,.header__account")||(this.isBasketDropDown=!1,this.isAccountDropDown=!1),e.target.closest(".navbar")||(this.showSideBar=!1,this.$emit("show-sidebar",!1))},toggleSidebar(){this.showSideBar=!this.showSideBar,this.$emit("show-sidebar",this.showSideBar)},formattedPrice(e){return new Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(e)},...(0,re.nv)("cart",["removeItem"])},mounted(){document.addEventListener("click",this.eventListener)},unmounted(){document.removeEventListener("click",this.eventListener)}},ie=a(3744);const ce=(0,ie.Z)(se,[["render",oe]]);var le=ce;const ue={class:"footer"},de=(0,o.uE)('<div class="footer__top"><div class="container"><div class="footer__row"><div class="footer__getcall"><img src="img/tamasbama.png" alt=""><div class="footer__getcall-info"><h3 class="footer__getcall-h3">contact us</h3><span class="gooter__getcall-span">any questions? ask us !</span></div></div><div class="footer__info"><span class="footer__info-span">Email : info@domian.com</span><span class="footer__info-span margin--right-10"> Tel : 1023233030</span></div></div></div></div><div class="footer__main"><div class="container"><div class="footer__links"><a href="" class="footer__link">Link 1</a><a href="" class="footer__link">Link 1</a><a href="" class="footer__link">Link 1</a><a href="" class="footer__link">Link 1</a><a href="" class="footer__link">Link 1</a><a href="" class="footer__link">Link 1</a></div><div class="footer__hr"></div><div class="footer__about"><p class="footer__txt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse ipsa sed illum, distinctio voluptatem illo accusantium, mollitia voluptatibus tempora magni provident aut corporis? Est molestias adipisci labore nihil consequatur. </p></div></div><div class="footer__team"> design with ♥ by <a href="" class="footer__copy">mohammad nikoo &amp; tofiq hamza</a> © 2021 </div></div>',2);function _e(e,t,a,r,s,c){return(0,o.wg)(),(0,o.iD)("footer",ue,[(0,o.wy)((0,o._)("span",{class:"scroll__top",onClick:t[0]||(t[0]=(...e)=>c.goTop&&c.goTop(...e))},null,512),[[n.F8,e.showScrollTop]]),de,(0,o._)("div",{class:(0,i.C_)(["overlay",{"overlay--is-active":a.showSideBar}])},null,2)])}var me={name:"BaseFooter",props:{showSideBar:{type:Boolean,required:!0}},data:()=>({showScrollTop:!1,scrollTimeout:null}),methods:{handleScroll(){this.scrollTimeout||(console.log("user scrolled"),this.scrollTimeout=setTimeout((()=>{this.showScrollTop=window.scrollY>200,clearTimeout(this.scrollTimeout),this.scrollTimeout=0}),150))},goTop(){window.scrollTo({top:0,behavior:"smooth"})}},mounted(){axios.get("/hello").then((e=>{let t=e.data;console.log(t)})),document.addEventListener("scroll",this.handleScroll)},unmounted(){document.removeEventListener("scroll",this.handleScroll)}};const fe=(0,ie.Z)(me,[["render",_e]]);var he=fe,pe={data:()=>({isShowSideBar:!1}),components:{BaseHeader:le,BaseFooter:he},methods:{handleSidebar(e){this.isShowSideBar=e}},created(){}};const ve=(0,ie.Z)(pe,[["render",s]]);var be=ve,ge=a(2201),we=[{path:"/login",name:"Login",component:()=>a.e(535).then(a.bind(a,472))},{path:"/register",name:"Register",component:()=>a.e(685).then(a.bind(a,5044))},{path:"/reset-pass",name:"ResetPass",component:()=>a.e(383).then(a.bind(a,5885))}],ke=[{path:"/cart",name:"Cart",component:()=>a.e(511).then(a.bind(a,451))}],ye=[{path:"/",name:"Home",component:()=>Promise.all([a.e(358),a.e(443)]).then(a.bind(a,75))},{path:"/about",name:"About",component:()=>Promise.all([a.e(358),a.e(443)]).then(a.bind(a,4938))},{path:"/category",name:"Category",component:()=>a.e(34).then(a.bind(a,1791))},{path:"/product/:id",name:"Product",component:()=>Promise.all([a.e(358),a.e(18)]).then(a.bind(a,1937))}];const Se=[...ke,...ye,...we],De=(0,ge.p7)({history:(0,ge.r5)(),base:"/",routes:Se});var Ce=De;const Be="ADD_PRODUCT",Te="CHANGE_QUNTITY",je="REMOVE_ITEM",Ee={addItem({commit:e,state:t},a){e(Be,a),localStorage.setItem("cart",JSON.stringify(t))},changeQuantity({commit:e,state:t},a){e(Te,a),localStorage.setItem("cart",JSON.stringify(t))},removeItem({commit:e,state:t},a){e(je,a),localStorage.setItem("cart",JSON.stringify(t))}},Oe={[Be](e,t){const a=e.items.find((e=>e.id===t.id));a?a.quantity++:e.items.push({...t,quantity:1})},[Te](e,t){const a=e.items.find((e=>e.id===t.product.id));a.quantity=t.quantity},[je](e,t){e.items=e.items.filter((e=>e.id!==t.id))}},Le={subtotal(e){return e.items.reduce(((e,t)=>t.price*t.quantity+e),0)},tax:(e,t)=>.09*t.subtotal,total:(e,t)=>t.subtotal+t.tax,count:e=>e.items.length},Ae=JSON.parse(localStorage.getItem("cart"))?.items??[],Ue=()=>({items:Ae});var xe={namespaced:!0,actions:Ee,mutations:Oe,getters:Le,state:Ue},Pe={namespaced:!0,state:()=>({user:{name:"tofiq",id:1},isLoggedIn:!0}),getters:{name:(e,t,a,n)=>e.user.name},mutations:{SET_USER(e){e.user.name="mohammad"}},actions:{userLog(e,t){console.log(t)}}};const Me=()=>({products:[]});var Ne=Me,We={products:e=>e.products,name:e=>e.products,getProductById:e=>t=>e.products.find((e=>e.id===t))},Ie=a(8893),qe={[Ie._](e,t){e.products=t}},Fe=a(9669),He=a.n(Fe),Re={async getProducts(e,{text:t}){const{data:a}=await He().get("https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/49357fb98c1c6dde9070fd1a7ec1e5d532c43141/products.json");e.commit(Ie._,a),e.dispatch("log",t)},log(e,t){console.log(t)}},ze={namespaced:!0,state:Ne,getters:We,mutations:qe,actions:Re};const Je=(0,re.MT)({modules:{cart:xe,userName:Pe,products:ze}});var Ye=Je;(0,n.ri)(be).use(Ce).use(Ye).mount("#app")},8893:function(e,t,a){"use strict";a.d(t,{_:function(){return n}});const n="SET_PRODUCTS"},1464:function(e,t,a){"use strict";e.exports=a.p+"img/1.0af3562f.jpg"},3948:function(e,t,a){"use strict";e.exports=a.p+"img/2.47451133.jpg"},1971:function(e,t,a){"use strict";e.exports=a.p+"img/3.2c6fa5b6.jpg"},7870:function(e,t,a){"use strict";e.exports=a.p+"img/4.c5fec6fc.jpg"},3532:function(e,t,a){"use strict";e.exports=a.p+"img/5.fe95371a.jpg"},4773:function(e,t,a){"use strict";e.exports=a.p+"img/6.ab7237d8.jpg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({18:"product",34:"category",383:"reset-pass",443:"about",511:"cart",535:"login",685:"register"}[e]||e)+"."+{18:"eee64eca",34:"f013c1ec",358:"42b9e1ee",383:"876cb94c",443:"ecd74ac9",511:"b43221a8",535:"18d0e3db",685:"5e394f21"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{18:"product",443:"about"}[e]+"."+{18:"8818ac63",443:"e5f53db3"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";a.l=function(n,o,r,s){if(e[n])e[n].push(o);else{var i,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[o];var _=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(_.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=_.bind(null,i.onerror),i.onload=_.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)a();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=function(n){return new Promise((function(o,r){var s=a.miniCssF(n),i=a.p+s;if(t(s,i))return o();e(n,i,o,r)}))},o={143:0};a.f.miniCss=function(e,t){var a={18:1,443:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var s=a.p+a.u(t),i=new Error,c=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,o[1](i)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(t&&t(n);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2410)}));n=a.O(n)})();
//# sourceMappingURL=app.f2e21f93.js.map