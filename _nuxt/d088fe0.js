(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{849:function(t,e,n){var content=n(853);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("689f86f6",content,!0,{sourceMap:!1})},852:function(t,e,n){"use strict";n(849)},853:function(t,e,n){var o=n(8)(!1);o.push([t.i,'.card[data-v-688e54d6]{overflow:hidden;position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-688e54d6]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative;z-index:1}.card[data-v-688e54d6]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card img[data-v-688e54d6]{border-radius:5px 5px 0 0}.card img[data-v-688e54d6],.card video[data-v-688e54d6]{display:block;width:100%;height:100%}.card .card__info-badge[data-v-688e54d6]{display:none;position:absolute;top:0;left:0;right:0;text-align:center;font-size:14px;height:32px;line-height:32px;color:#fff;font-weight:600}.card .card__info-badge.sold[data-v-688e54d6]{display:block;background:linear-gradient(90deg,rgba(0,87,255,.85098),rgba(0,209,255,.85098))}.card .card__info-badge.expired[data-v-688e54d6]{display:block;background:linear-gradient(90deg,rgba(255,118,0,.85098),rgba(255,24,0,.85098))}.card .card__info[data-v-688e54d6]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px 10px 15px}.card .card__info-title[data-v-688e54d6]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-688e54d6]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-688e54d6]{width:100%}.card .card__info-token-wrapper[data-v-688e54d6]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-688e54d6]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:600}.card .card__info-token-symbol img[data-v-688e54d6]{width:auto;height:17px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-688e54d6]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media screen and (max-width:767px){.card .card__info[data-v-688e54d6]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-688e54d6]{font-size:14px;line-height:22px;font-weight:500}}',""]),t.exports=o},854:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(55),n(19),n(43),n(475),n(110)),d={props:{cardData:{required:!0,type:Object,default:function(){return null}},testFlag:{required:!1,type:Boolean,default:!1}},data:function(){return{metaData:null}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={symbol:t.cardData.symbol,tid:t.cardData.tid},e.next=3,Object(r.b)(t.$axios,n);case 3:return o=e.sent,e.next=6,Object(r.i)(t.$axios,[o,o.uri]);case 6:t.metaData=e.sent;case 7:case"end":return e.stop()}}),e)})))()},getBadgeType:function(){return"1"===(2*Math.random()).toFixed(0)?"sold":"expired"}}},c=(n(852),n(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.metaData?n("div",{staticClass:"card"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.testFlag,expression:"testFlag"}],staticClass:"card__info-badge",class:t.getBadgeType()},[n("span",[t._v(t._s(t.getBadgeType().toUpperCase()))])]),t._v(" "),"image"===t.metaData.filer_type?n("img",{style:{background:t.metaData.background_color},attrs:{srcset:t.metaData.image,src:t.metaData.image,alt:t.metaData.name}}):n("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:t.metaData.image,src:t.metaData.image},domProps:{muted:!0}}),t._v(" "),n("div",{staticClass:"card__info"},[n("div",{staticClass:"card__info-token"},[n("div",{staticClass:"card__info-token-wrapper"},[n("div",{staticClass:"card__info-token-symbol"},[n("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+t.cardData.symbol.toUpperCase()+".png",alt:t.metaData.name}}),t._v(" "),n("span",[t._v(t._s(t.cardData.symbol))])])])]),t._v(" "),n("div",{staticClass:"card__info-title"},[n("span",[t._v(t._s(t.metaData.name))])])])]):t._e()}),[],!1,null,"688e54d6",null);e.default=component.exports},875:function(t,e,n){var content=n(903);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("dfe3ecaa",content,!0,{sourceMap:!1})},902:function(t,e,n){"use strict";n(875)},903:function(t,e,n){var o=n(8)(!1);o.push([t.i,'.my-own-item__container .my-own-item__set[data-v-0ef560d9]{display:flex;align-items:center;width:100%}.my-own-item__container .my-own-item__group[data-v-0ef560d9]{position:relative;left:0;right:0;margin:0 auto;width:100%}.my-own-item__container .my-own-item__group ul[data-v-0ef560d9]{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}.my-own-item__container .my-own-item__group li[data-v-0ef560d9]{height:auto;cursor:pointer}.my-own-item__container .my-own-item__content[data-v-0ef560d9]{padding:25px}.my-own-item__container .my-own-item__content img[data-v-0ef560d9]{display:block;width:100%;height:100%;border-radius:5px}.my-own-item__container .my-own-item__content .my-own-item__game[data-v-0ef560d9]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;padding:10px 0}.my-own-item__container .my-own-item__content .my-own-item__game--title[data-v-0ef560d9]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.my-own-item__container .my-own-item__content .my-own-item__game--description[data-v-0ef560d9]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.my-own-item__container .my-own-item__content .store-product__item-inner[data-v-0ef560d9]{width:100%}.my-own-item__container .my-own-item__content .store-product__item-wrapper[data-v-0ef560d9]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.my-own-item__container .my-own-item__content .store-product__item-cate[data-v-0ef560d9]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.my-own-item__container .my-own-item__content .store-product__item-cate img[data-v-0ef560d9]{width:auto;height:16px;position:relative;top:-1px}.my-own-item__container .my-own-item__content .store-product__item-cate span[data-v-0ef560d9]{opacity:.4}.my-own-item__container .my-own-item__content .store-product__item-aos[data-v-0ef560d9]{display:flex;height:100%;align-items:center;font-size:17px}.my-own-item__container .my-own-item__content .store-product__item-aos img[data-v-0ef560d9]{width:18px;position:relative;top:2px}.my-own-item__container .my-own-item__content .store-product__item-ios[data-v-0ef560d9]{display:flex;width:40px;height:100%;align-items:center;font-size:20px}.my-own-item__container .my-own-item__content .store-product__item-ios img[data-v-0ef560d9]{width:18px;position:relative;top:2px}.my-own-item__container .my-own-item__nodata[data-v-0ef560d9]{text-align:center;height:120px;line-height:120px}@media screen and (max-width:1280px){.my-own-item__container .my-own-item__group ul[data-v-0ef560d9]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}}@media screen and (max-width:1024px){.my-own-item__container .my-own-item__group[data-v-0ef560d9]{padding-right:0}.my-own-item__container .my-own-item__group ul[data-v-0ef560d9]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:36px 20px;gap:36px 20px;width:100%}}@media screen and (max-width:768px){.my-own-item__container .my-own-item__content[data-v-0ef560d9]{padding:20px}.my-own-item__container .my-own-item__group ul[data-v-0ef560d9]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-gap:30px 10px;gap:30px 10px;width:100%}}@media screen and (max-width:400px){.my-own-item__container .my-own-item__group ul[data-v-0ef560d9]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:30px 15px;gap:30px 15px;width:100%}}',""]),t.exports=o},928:function(t,e,n){"use strict";n.r(e);n(47),n(56);var o=n(854),r=n(28),d={components:{MyCard:o.default},layout:"index",data:function(){return{symbol:this.$route.params.id.toUpperCase(),cardData:[]}},computed:{tokenItem:function(){return this.$store.state.user.nft},symbolFullName:function(){var t=this;return this.$store.state.market.tokenInfo.tokens.filter((function(e,i){return e.symbol===t.symbol}))[0].desc}},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(r.c)(this.tokenItem)||(this.cardData=this.tokenItem.filter((function(e){return e.symbol===t.symbol})))},clickCard:function(t,symbol){var e=this;this.$nextTick((function(){e.$router.push({path:"/assets/".concat(t,"?symbol=").concat(symbol,"&type=owner")})}))}}},c=(n(902),n(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-own-item__container"},[t.cardData.length>0?n("section",[n("div",{staticClass:"my-own-item__set"},[n("div",{staticClass:"my-own-item__group"},[n("ul",t._l(t.cardData,(function(e,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:"assets/"+e.tid,event:"",exact:""},nativeOn:{click:function(n){return n.preventDefault(),t.clickCard(e.tid,e.symbol)}}},[n("MyCard",{attrs:{"card-data":e}})],1)],1)})),0)])])]):n("section",{staticClass:"my-own-item__nodata"},[t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("No items to display")])])}],!1,null,"0ef560d9",null);e.default=component.exports}}]);