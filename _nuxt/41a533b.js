(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{855:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return m})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"h",(function(){return _})),n.d(e,"d",(function(){return w}));var o=n(6);n(49),n(68),n(19),n(45),n(56),n(25),n(69);function r(t){return t.$get("https://che.wemixnetwork.net/wal/rn_app/wemix-wallet/production/data.json")}function d(t,e){return t.$post("/dex/nft/search",e)}function c(t,e){return t.$post("/dex/nft/search",e)}function m(t,e){return t.$post("/dex/nft/search",e)}function l(t,e){return t.$get("/dex/nft/detail?symbol=".concat(e.symbol,"&tid=").concat(e.tid))}function f(t,e){var n={symbol:e.symbol,tid:parseInt(e.tid)};return t.$post("/balance/uri",n)}function _(t,e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(t){var e=t.split(".").pop().toLowerCase();return["mp4"].includes(e)?"video":"image"},t.next=3,e.$get(n[1]);case 3:return o=t.sent,null!==n[0]&&(o.default=n[0].order),o.filer_type=Object.keys(o).includes("media")?o.media.mime_type.split("/")[0].toLowerCase():r(o.image),t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return t.$post("/history/nft",e)}},856:function(t,e,n){"use strict";var o=n(857),r=n.n(o);e.a={data:function(){return{ERROR_IMAGE_URL:r.a}},methods:{$_errorImageDefault:function(t){t.target.src=this.ERROR_IMAGE_URL}}}},857:function(t,e,n){t.exports=n.p+"img/default.11d43b0.svg"},868:function(t,e,n){var content=n(890);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("8b0531d4",content,!0,{sourceMap:!1})},889:function(t,e,n){"use strict";n(868)},890:function(t,e,n){var o=n(7)(!1);o.push([t.i,'.card[data-v-9fb1809e]{position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-9fb1809e]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative}.card[data-v-9fb1809e]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card .card__cover[data-v-9fb1809e]{display:flex;align-items:center;justify-content:center;width:100%;position:relative}.card .card__cover[data-v-9fb1809e]:after{content:"";display:block;padding-bottom:100%}.card img[data-v-9fb1809e]{position:absolute;-o-object-fit:cover;object-fit:cover}.card img[data-v-9fb1809e],.card video[data-v-9fb1809e]{display:block;width:100%;height:100%;border-radius:5px 5px 0 0}.card .card__info[data-v-9fb1809e]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px 10px 15px}.card .card__info-title[data-v-9fb1809e]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-9fb1809e]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-9fb1809e]{width:100%}.card .card__info-token-wrapper[data-v-9fb1809e]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-9fb1809e]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:500}.card .card__info-token-symbol img[data-v-9fb1809e]{width:auto;height:16px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-9fb1809e]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media screen and (max-width:767px){.card .card__info[data-v-9fb1809e]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-9fb1809e]{font-size:14px;line-height:22px;font-weight:500}}',""]),t.exports=o},891:function(t,e,n){var content=n(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("1b68cabe",content,!0,{sourceMap:!1})},896:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(49),n(25),n(69),n(855)),d={mixins:[n(856).a],props:{cardData:{required:!0,type:Object,default:function(){return null}},testFlag:{required:!1,type:Boolean,default:!1}},data:function(){return{metaData:null}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={symbol:t.cardData.symbol,tid:t.cardData.tid},e.next=3,Object(r.b)(t.$axios,n);case 3:return o=e.sent,e.next=6,Object(r.h)(t.$axios,[o,o.uri]);case 6:t.metaData=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}},c=(n(889),n(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.metaData?n("div",{staticClass:"card"},[n("div",{staticClass:"card__cover"},["image"===t.metaData.filer_type?n("img",{style:{background:t.metaData.background_color},attrs:{src:t.metaData.image,alt:t.metaData.name},on:{error:t.$_errorImageDefault}}):n("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:t.metaData.image,src:t.metaData.image},domProps:{muted:!0}})]),t._v(" "),n("div",{staticClass:"card__info"},[n("div",{staticClass:"card__info-token"},[n("div",{staticClass:"card__info-token-wrapper"},[n("div",{staticClass:"card__info-token-symbol"},[n("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+t.cardData.symbol.toUpperCase()+".png",alt:t.metaData.name}}),t._v(" "),n("span",[t._v(t._s(t.cardData.symbol))])])])]),t._v(" "),n("div",{staticClass:"card__info-title"},[n("span",[t._v(t._s(t.metaData.name))])])])]):t._e()}),[],!1,null,"9fb1809e",null);e.default=component.exports},920:function(t,e,n){"use strict";n(891)},921:function(t,e,n){var o=n(7)(!1);o.push([t.i,'.my-own-item__container .my-own-item__set[data-v-692ff098]{display:flex;align-items:center;width:100%}.my-own-item__container .my-own-item__group[data-v-692ff098]{position:relative;left:0;right:0;margin:0 auto;width:100%}.my-own-item__container .my-own-item__group ul[data-v-692ff098]{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}.my-own-item__container .my-own-item__group li[data-v-692ff098]{height:auto;cursor:pointer}.my-own-item__container .my-own-item__content[data-v-692ff098]{padding:25px}.my-own-item__container .my-own-item__content img[data-v-692ff098]{display:block;width:100%;height:100%;border-radius:5px}.my-own-item__container .my-own-item__content .my-own-item__game[data-v-692ff098]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;padding:10px 0}.my-own-item__container .my-own-item__content .my-own-item__game--title[data-v-692ff098]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.my-own-item__container .my-own-item__content .my-own-item__game--description[data-v-692ff098]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.my-own-item__container .my-own-item__content .store-product__item-inner[data-v-692ff098]{width:100%}.my-own-item__container .my-own-item__content .store-product__item-wrapper[data-v-692ff098]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.my-own-item__container .my-own-item__content .store-product__item-cate[data-v-692ff098]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.my-own-item__container .my-own-item__content .store-product__item-cate img[data-v-692ff098]{width:auto;height:16px;position:relative;top:-1px}.my-own-item__container .my-own-item__content .store-product__item-cate span[data-v-692ff098]{opacity:.4}.my-own-item__container .my-own-item__content .store-product__item-aos[data-v-692ff098]{display:flex;height:100%;align-items:center;font-size:17px}.my-own-item__container .my-own-item__content .store-product__item-aos img[data-v-692ff098]{width:18px;position:relative;top:2px}.my-own-item__container .my-own-item__content .store-product__item-ios[data-v-692ff098]{display:flex;width:40px;height:100%;align-items:center;font-size:20px}.my-own-item__container .my-own-item__content .store-product__item-ios img[data-v-692ff098]{width:18px;position:relative;top:2px}.my-own-item__container .my-own-item__nodata[data-v-692ff098]{text-align:center;height:120px;line-height:120px}@media screen and (max-width:1280px){.my-own-item__container .my-own-item__group ul[data-v-692ff098]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}}@media screen and (max-width:1024px){.my-own-item__container .my-own-item__group[data-v-692ff098]{padding-right:0}.my-own-item__container .my-own-item__group ul[data-v-692ff098]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:36px 20px;gap:36px 20px;width:100%}}@media screen and (max-width:768px){.my-own-item__container .my-own-item__content[data-v-692ff098]{padding:20px}.my-own-item__container .my-own-item__group ul[data-v-692ff098]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-gap:30px 10px;gap:30px 10px;width:100%}}@media screen and (max-width:414px){.my-own-item__container .my-own-item__group ul[data-v-692ff098]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:30px 15px;gap:30px 15px;width:100%}}',""]),t.exports=o},945:function(t,e,n){"use strict";n.r(e);n(57),n(68);var o=n(896),r=n(29),d={components:{MyOwnItemCard:o.default},layout:"index",data:function(){return{symbol:this.$route.params.id.toUpperCase(),cardData:[]}},computed:{tokenItem:function(){return this.$store.state.user.nft},symbolFullName:function(){var t=this;return this.$store.state.market.loginInfo.tokens.filter((function(e,i){return e.symbol===t.symbol}))[0].desc}},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(r.c)(this.tokenItem)||(this.cardData=this.tokenItem.filter((function(e){return e.symbol===t.symbol})))},clickCard:function(t,symbol){var e=this;this.$nextTick((function(){e.$router.push({path:"/assets/".concat(t,"?symbol=").concat(symbol,"&type=owner")})}))}}},c=(n(920),n(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-own-item__container"},[t.cardData.length>0?n("section",[n("div",{staticClass:"my-own-item__set"},[n("div",{staticClass:"my-own-item__group"},[n("ul",t._l(t.cardData,(function(e,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:"assets/"+e.tid,event:"",exact:""},nativeOn:{click:function(n){return n.preventDefault(),t.clickCard(e.tid,e.symbol)}}},[n("MyOwnItemCard",{attrs:{"card-data":e}})],1)],1)})),0)])])]):n("section",{staticClass:"my-own-item__nodata"},[t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("No items to display")])])}],!1,null,"692ff098",null);e.default=component.exports}}]);