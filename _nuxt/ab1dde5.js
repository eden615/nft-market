(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{842:function(t,e,r){"use strict";var n=r(28);e.a={data:function(){return{}},created:function(){},beforeDestroy:function(){},methods:{$_isEmpty:function(t){return Object(n.c)(t)}}}},847:function(t,e,r){var content=r(860);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("6618c734",content,!0,{sourceMap:!1})},859:function(t,e,r){"use strict";r(847)},860:function(t,e,r){var n=r(7)(!1);n.push([t.i,'.card[data-v-11686b44]{overflow:hidden;position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-11686b44]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative;z-index:1}.card[data-v-11686b44]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card img[data-v-11686b44]{border-radius:5px 5px 0 0}.card img[data-v-11686b44],.card video[data-v-11686b44]{display:block;width:100%;height:100%}.card .card__info[data-v-11686b44]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px}.card .card__info-title[data-v-11686b44]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-11686b44]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-11686b44]{width:100%}.card .card__info-token-wrapper[data-v-11686b44]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-11686b44]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:600}.card .card__info-token-symbol img[data-v-11686b44]{width:auto;height:17px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-11686b44]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card__price-amount[data-v-11686b44]{display:flex;align-items:center;grid-gap:6px;gap:6px;justify-content:flex-end;padding-top:12px}.card__price-amount .card__price-amount-title[data-v-11686b44]{color:rgba(0,0,0,.5);font-size:15px;font-weight:300;padding-right:2px}.card__price-amount .card__price-amount-symbol[data-v-11686b44]{display:flex}.card__price-amount .card__price-amount-symbol img[data-v-11686b44]{width:auto;height:25px;border-radius:50px;position:relative;top:-1px}.card__price-amount .card__price-amount-value[data-v-11686b44]{font-style:normal;font-size:18px;font-weight:600;letter-spacing:.2px;color:#05c289;font-family:"Montserrat",sans-serif}@media screen and (max-width:767px){.card .card__info[data-v-11686b44]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-11686b44]{font-size:14px;line-height:22px;font-weight:500}.card__price-amount[data-v-11686b44]{display:flex;align-items:center;grid-gap:5px;gap:5px;justify-content:flex-end;padding-top:12px}.card__price-amount .card__price-amount-title[data-v-11686b44]{color:rgba(0,0,0,.5);font-size:15px;font-weight:300;padding-right:2px}.card__price-amount .card__price-amount-symbol[data-v-11686b44]{display:flex}.card__price-amount .card__price-amount-symbol img[data-v-11686b44]{width:auto;height:21px;border-radius:50px;position:relative;top:-1px}.card__price-amount .card__price-amount-value[data-v-11686b44]{font-size:15px;font-weight:600}}',""]),t.exports=n},861:function(t,e,r){var content=r(881);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("3ee5450a",content,!0,{sourceMap:!1})},873:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__price-amount-symbol"},[e("img",{attrs:{src:r(72),alt:""}})])}],o=r(9),d=(r(53),r(20),r(43),r(19),r(269)),c=r(28),l={props:{cardData:{required:!0,type:Object,default:function(){return{}}},itemType:{required:!1,type:String,default:""}},data:function(){return{detailData:{}}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.getItemDetaItemMetaUri()},methods:{getItemDetaItemMetaUri:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(t.$axios,t.cardData);case 2:r=e.sent,t.getUriparsing(r,r.uri);case 4:case"end":return e.stop()}}),e)})))()},getUriparsing:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.i)(r.$axios,[t,e]);case 2:r.detailData=n.sent;case 3:case"end":return n.stop()}}),n)})))()},getNumberFormat:function(t){return Object(c.d)(t)},getAssetType:function(t){var e=t.split(".").pop().toLowerCase();return["mp4"].includes(e)?"video":"image"}}},f=(r(859),r(3)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return 0!==Object.keys(t.detailData).length?r("div",{staticClass:"card"},[t.getAssetType(t.detailData.image)?r("img",{style:{background:t.detailData.background_color},attrs:{srcset:t.detailData.image,src:t.detailData.image,alt:t.detailData.name}}):r("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:t.detailData.image,src:t.detailData.image},domProps:{muted:!0}}),t._v(" "),r("div",{staticClass:"card__info"},[r("div",{staticClass:"card__info-token"},[r("div",{staticClass:"card__info-token-wrapper"},[r("div",{staticClass:"card__info-token-symbol"},[r("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+t.cardData.symbol+".png",alt:t.detailData.name}}),t._v(" "),r("span",[t._v(t._s(t.cardData.symbol.toUpperCase().replace(" ","_")))])])])]),t._v(" "),r("div",{staticClass:"card__info-title"},[r("span",[t._v(t._s(t.detailData.name))])]),t._v(" "),r("div",{staticClass:"card__price-amount"},[t._m(0),t._v(" "),r("span",{staticClass:"card__price-amount-value"},[t._v("\n        "+t._s(t.getNumberFormat(t.cardData.price))+"\n      ")])])])]):t._e()}),n,!1,null,"11686b44",null);e.default=component.exports},880:function(t,e,r){"use strict";r(861)},881:function(t,e,r){var n=r(7)(!1);n.push([t.i,'.market__container[data-v-ffc76674]{box-sizing:border-box;display:flex;justify-content:center;flex-direction:column}.market__container h2[data-v-ffc76674]{font-family:"Montserrat-Bold",sans-serif;font-size:20px;padding-bottom:20px;position:relative;overflow:hidden}.market__container h2[data-v-ffc76674]:before{width:40px;height:1px;background-color:#31343c;display:inline-block;margin:0 14px 0 0;content:""}.market__set[data-v-ffc76674]{display:flex;align-items:center;width:100%}.market__group[data-v-ffc76674]{position:relative;left:0;right:0;margin:0 auto;width:100%}.market__group ul[data-v-ffc76674]{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}.market__group li[data-v-ffc76674]{height:auto;cursor:pointer}.market__content img[data-v-ffc76674]{display:block;width:100%;height:100%;border-radius:5px}.market__content .market__game[data-v-ffc76674]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;padding:10px 0}.market__content .market__game--title[data-v-ffc76674]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.market__content .market__game--description[data-v-ffc76674]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.market__content .store-product__item-inner[data-v-ffc76674]{width:100%}.market__content .store-product__item-wrapper[data-v-ffc76674]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.market__content .store-product__item-cate[data-v-ffc76674]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.market__content .store-product__item-cate img[data-v-ffc76674]{width:auto;height:16px;position:relative;top:-1px}.market__content .store-product__item-cate span[data-v-ffc76674]{opacity:.4}.market__content .store-product__item-aos[data-v-ffc76674]{display:flex;height:100%;align-items:center;font-size:17px}.market__content .store-product__item-aos img[data-v-ffc76674]{width:18px;position:relative;top:2px}.market__content .store-product__item-ios[data-v-ffc76674]{display:flex;width:40px;height:100%;align-items:center;font-size:20px}.market__content .store-product__item-ios img[data-v-ffc76674]{width:18px;position:relative;top:2px}@media screen and (max-width:1280px){.market__group ul[data-v-ffc76674]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}}@media screen and (max-width:1024px){.market__group[data-v-ffc76674]{padding-right:0}.market__group ul[data-v-ffc76674]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:36px 20px;gap:36px 20px;width:100%}}@media screen and (max-width:768px){.market__container h2[data-v-ffc76674]{font-family:"Montserrat-Bold",sans-serif;font-size:18px;padding-bottom:15px;position:relative}.market__container h2[data-v-ffc76674]:before{display:none!important;width:40px;height:1px;background-color:#31343c;display:inline-block;margin:0 14px 0 0;content:""}.market__container h2[data-v-ffc76674]:after{position:absolute;top:15px;width:100%;height:1px;background-color:#31343c;display:inline-block;margin:0 0 0 14px;content:""}.market__group ul[data-v-ffc76674]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-gap:30px 10px;gap:30px 10px;width:100%}}@media screen and (max-width:414px){.market__group ul[data-v-ffc76674]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:30px 15px;gap:30px 15px;width:100%}}',""]),t.exports=n},915:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(53),r(873)),d=r(269),c=r(842),l={components:{CardRecentDeals:o.default},mixins:[c.a],data:function(){return{cardData:null,limit:6}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.g)(t.$axios,{filter:{symbol:"",name:"",word:"",owner:"0x0000000000000000000000000000000000000000",tid:0,closed:!1,sold:!1,include_removed:!1},sort:{field:"date",ascending:-1},articles:6,page:1});case 2:t.cardData=e.sent;case 3:case"end":return e.stop()}}),e)})))()},clickCard:function(t,symbol){this.$message({message:"최근 판매된 NFT",type:"success"})}}},f=(r(880),r(3)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"market__container"},[r("h2",[t._v("RECENT DEALS")]),t._v(" "),r("div",{staticClass:"market__set"},[r("div",{staticClass:"market__group"},[null!==t.cardData?r("ul",t._l(t.cardData.orders,(function(e,i){return r("li",{key:i},[r("nuxt-link",{attrs:{to:"assets/"+e.tid,event:"",exact:""},nativeOn:{click:function(r){return r.preventDefault(),t.clickCard(e.tid,e.symbol)}}},[r("CardRecentDeals",{attrs:{"card-data":t.cardData.orders[i],"item-type":"recentDeals"}})],1)],1)})),0):t._e()])])])}),[],!1,null,"ffc76674",null);e.default=component.exports}}]);