(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{841:function(t,e,n){"use strict";var r=n(28);e.a={data:function(){return{}},created:function(){},beforeDestroy:function(){},methods:{$_isEmpty:function(t){return Object(r.c)(t)}}}},849:function(t,e,n){var content=n(878);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2bfce593",content,!0,{sourceMap:!1})},872:function(t,e,n){"use strict";var r=n(10),o=n(136),c=n(48),d=n(32),_=n(11),l=n(873),m=n(272),k=n(874),v=n(875),f=n(135),w=n(876),x=[],h=x.sort,y=_((function(){x.sort(void 0)})),C=_((function(){x.sort(null)})),S=m("sort"),z=!_((function(){if(f)return f<70;if(!(k&&k>3)){if(v)return!0;if(w)return w<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:y||!C||!S||!z},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(z)return void 0===t?h.call(e):h.call(e,t);var n,r,_=[],m=d(e.length);for(r=0;r<m;r++)r in e&&_.push(e[r]);for(n=(_=l(_,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}}(t))).length,r=0;r<n;)e[r]=_[r++];for(;r<m;)delete e[r++];return e}})},873:function(t,e){var n=Math.floor,r=function(t,e){var d=t.length,_=n(d/2);return d<8?o(t,e):c(r(t.slice(0,_),e),r(t.slice(_),e),e)},o=function(t,e){for(var element,n,r=t.length,i=1;i<r;){for(n=i,element=t[i];n&&e(t[n-1],element)>0;)t[n]=t[--n];n!==i++&&(t[n]=element)}return t},c=function(t,e,n){for(var r=t.length,o=e.length,c=0,d=0,_=[];c<r||d<o;)c<r&&d<o?_.push(n(t[c],e[d])<=0?t[c++]:e[d++]):_.push(c<r?t[c++]:e[d++]);return _};t.exports=r},874:function(t,e,n){var r=n(134).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},875:function(t,e,n){var r=n(134);t.exports=/MSIE|Trident/.test(r)},876:function(t,e,n){var r=n(134).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},877:function(t,e,n){"use strict";n(849)},878:function(t,e,n){var r=n(7)(!1);r.push([t.i,".market-bn__container[data-v-6b3d12a8]{box-sizing:border-box;display:flex;justify-content:center;cursor:-webkit-grab;cursor:grab}.market-bn__container[data-v-6b3d12a8]:active{cursor:-webkit-grabbing;cursor:grabbing}.market-bn__group[data-v-6b3d12a8]{display:flex;align-items:center;width:100%}.market-bn__wrap[data-v-6b3d12a8]{position:relative;left:0;right:0;margin:0 auto;width:100%}.market-bn__wrap.show[data-v-6b3d12a8]{-webkit-animation:ani-fadein .5s cubic-bezier(.215,.61,.355,1);animation:ani-fadein .5s cubic-bezier(.215,.61,.355,1)}.item-banner__title[data-v-6b3d12a8]{display:block;margin-bottom:10px;font-size:18px;color:#000}.market-bn__set[data-v-6b3d12a8]{min-width:unset;max-width:unset;width:100%}.market-bn__wrap .banner_pagination_group[data-v-6b3d12a8]{position:absolute;left:0;right:0;bottom:21px;font-size:0;text-align:center}.market-bn__wrap .banner_pagination_group .banner_pagination_wrap[data-v-6b3d12a8]{display:inline-block;vertical-align:top}.market-bn__wrap .banner_pagination_group .banner_pagination_point[aria-current=true][data-v-6b3d12a8]{width:27px}.market-bn__wrap .banner_pagination_group .banner_pagination_point[data-v-6b3d12a8]{border:none;background-color:transparent;cursor:pointer;-webkit-appearance:none;display:block;position:relative;width:15px;height:15px}.market-bn__wrap .banner_pagination_group .banner_pagination_point[aria-current=true][data-v-6b3d12a8]:before{width:18px;opacity:1}.market-bn__content[data-v-6b3d12a8]{display:block}.market-bn__content[data-v-6b3d12a8],.market-bn__content .market-bn__content-group[data-v-6b3d12a8]{width:100%;height:100%}.market-bn__content .market-bn__content-group a[data-v-6b3d12a8]{display:block;background:#000;border-radius:10px;overflow:hidden}.market-bn__content .market-bn__content-wrap[data-v-6b3d12a8]{position:relative;display:flex;justify-content:flex-start;align-items:flex-end;width:100%;border-bottom:5px solid #000}.market-bn__content .market-bn__content-wrap img[data-v-6b3d12a8]{width:100%}.market-bn__content .market-bn__content-wrap.right[data-v-6b3d12a8]{justify-content:flex-end}.market-bn__content .market-bn__content-wrap.right .market-bn__text--description[data-v-6b3d12a8],.market-bn__content .market-bn__content-wrap.right .market-bn__text--title[data-v-6b3d12a8]{text-align:right}.market-bn__content .market-bn__content-wrap.right .market-bn__text--button[data-v-6b3d12a8]{display:flex;justify-content:flex-end}.market-bn__content .market-bn__content-wrap .market-bn__text-set[data-v-6b3d12a8]{position:absolute;z-index:1;padding:10px 16px;width:60%}.market-bn__content .market-bn__content-wrap .market-bn__text[data-v-6b3d12a8]{width:100%;height:100%;color:#fff;transition:all .3s}.market-bn__content .market-bn__content-wrap .market-bn__text--badge.right[data-v-6b3d12a8]{text-align:right}.market-bn__content .market-bn__content-wrap .market-bn__text--badge span[data-v-6b3d12a8]{padding:1px 8px;font-size:12px;display:inline-block;white-space:nowrap;border-radius:5px}.market-bn__content .market-bn__content-wrap .market-bn__text--title[data-v-6b3d12a8]{font-size:20px;line-height:25px;margin:10px 0 5px;font-weight:600}.market-bn__content .market-bn__content-wrap .market-bn__text--description[data-v-6b3d12a8],.market-bn__content .market-bn__content-wrap .market-bn__text--title[data-v-6b3d12a8]{width:100%;text-align:left;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-break:keep-all;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;text-shadow:0 0 20px rgba(0,0,0,.2)}.market-bn__content .market-bn__content-wrap .market-bn__text--description[data-v-6b3d12a8]{font-size:14px;line-height:20px}.market-bn__content .market-bn__content-wrap .market-bn__text--button-box[data-v-6b3d12a8]{position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content}.market-bn__content .market-bn__content-wrap .market-bn__text--button-box button[data-v-6b3d12a8]{font-size:14px;border-radius:6px;text-transform:uppercase}.market-bn__content .market-bn__content-wrap .market-bn__text--button a[data-v-6b3d12a8]{position:relative;display:block}.market-bn__content .market-bn__content-wrap .market-bn__text--symbol[data-v-6b3d12a8]{position:absolute;top:16px;right:-45px;width:26px;height:auto}.market-bn__button[data-v-6b3d12a8]{margin:18px 0 10px}.market-bn__button ul[data-v-6b3d12a8]{display:flex;grid-gap:20px;gap:20px}.link[data-v-6b3d12a8]{display:inline-block;height:50px;line-height:50px;border-radius:100px;background-color:#000;vertical-align:top;text-align:center}.link[data-v-6b3d12a8],.link span[data-v-6b3d12a8]{position:relative}.link span[data-v-6b3d12a8]{padding:0 62px 0 26px}.link em[data-v-6b3d12a8]{font-size:20px;font-weight:700}",""]),t.exports=r},913:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(872),n(20),n(47),n(53),n(841)),c=n(269),d={mixins:[o.a],data:function(){return{swiperData:null,swiperOption:{breakpoints:{1280:{slidesPerView:"3"},1024:{slidesPerView:"2"},768:{slidesPerView:"1 "}},spaceBetween:25,centeredSlides:!1,autoplayDisableOnInteraction:!1,freeMode:!1,freeModeSticky:!1,loop:!0,speed:500,allowTouchMove:!0,simulateTouch:!0,fadeEffect:{crossFade:!0},parallax:!1,observer:!0,observeParents:!0,lazy:{loadPrevNext:!0,loadPrevNextAmount:1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},device:""}},watch:{"$store.state.app.device":function(t){this.device=t}},mounted:function(){this.init()},created:function(){},methods:{init:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t.$axios);case 2:n=e.sent,t.swiperData=n.nft.banners,console.log(t.swiperData);case 5:case"end":return e.stop()}}),e)})))()},shuffle:function(t){t.sort((function(){return Math.random()-.5}))},stopAutoplay:function(){try{this.startProgress=!1}catch(t){}},startAutoplay:function(){try{this.startProgress=!0}catch(t){console.log(t)}},onSwiperRedied:function(t){console.log(t)},onSwiperSlide:function(t,e){console.log(e)},setButtonStyle:function(t){return"button-color--"+t.toLowerCase()},converter:function(text){return text.replace(/\n/g,"<br />")}}},_=(n(877),n(3)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"market-bn__container"},[n("div",{staticClass:"market-bn__group"},[n("div",{staticClass:"market-bn__wrap",class:{show:null!==t.swiperData}},[null!==t.swiperData?n("div",{directives:[{name:"swiper",rawName:"v-swiper:bannerSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bannerSwiper"}],staticClass:"swiper",on:{"click-slide":t.onSwiperSlide}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("div",{staticClass:"market-bn__set"},[n("div",{staticClass:"market-bn__content"},[n("div",{staticClass:"market-bn__content-group"},[n("a",{attrs:{href:e.action,target:"_blink"}},[n("div",{staticClass:"market-bn__content-wrap"},[n("img",{attrs:{srcset:e.bannerImg,src:e.bannerImg,alt:e.title}}),t._v(" "),n("div",{staticClass:"market-bn__text-set"},[n("div",{staticClass:"market-bn__text"},[n("div",{staticClass:"market-bn__text--badge"},[n("span",{style:{background:e.btnColor}},[t._v("\n                              "+t._s(e.title)+"\n                            ")])]),t._v(" "),n("div",{staticClass:"market-bn__text--title",style:{color:e.titleColor}},[t._v("\n                            "+t._s(e.title)+"\n                          ")]),t._v(" "),n("div",{staticClass:"market-bn__text--description"},[n("span",{style:{color:e.subTextColor}},[t._v("\n                              "+t._s(e.subText)+"\n                            ")])])])])])])])])])])})),0),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})]):t._e()])])])}),[],!1,null,"6b3d12a8",null);e.default=component.exports}}]);