(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{841:function(t,e,d){var content=d(844);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(8).default)("2670c821",content,!0,{sourceMap:!1})},843:function(t,e,d){"use strict";d(841)},844:function(t,e,d){var r=d(7)(!1);r.push([t.i,'.card[data-v-7dd493d8]{overflow:hidden;position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-7dd493d8]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative;z-index:1}.card[data-v-7dd493d8]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card img[data-v-7dd493d8]{border-radius:5px 5px 0 0}.card img[data-v-7dd493d8],.card video[data-v-7dd493d8]{display:block;width:100%;height:100%}.card .card__info-badge.sold[data-v-7dd493d8]{display:block;background:linear-gradient(90deg,rgba(0,87,255,.85098),rgba(0,209,255,.85098))}.card .card__info-badge.expired[data-v-7dd493d8]{display:block;background:linear-gradient(90deg,rgba(255,118,0,.85098),rgba(255,24,0,.85098))}.card .card__info[data-v-7dd493d8]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px}.card .card__info-title[data-v-7dd493d8]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-7dd493d8]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-7dd493d8]{width:100%}.card .card__info-token-wrapper[data-v-7dd493d8]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-7dd493d8]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:500}.card .card__info-token-symbol img[data-v-7dd493d8]{width:auto;height:17px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-7dd493d8]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card__price-amount[data-v-7dd493d8]{display:flex;align-items:center;grid-gap:6px;gap:6px;justify-content:flex-end;padding-top:12px}.card__price-amount .card__price-amount-title[data-v-7dd493d8]{color:rgba(0,0,0,.5);font-size:15px;font-weight:300;padding-right:2px}.card__price-amount .card__price-amount-symbol[data-v-7dd493d8]{display:flex}.card__price-amount .card__price-amount-symbol img[data-v-7dd493d8]{width:auto;height:25px;border-radius:50px;position:relative;top:-1px}.card__price-amount .card__price-amount-value[data-v-7dd493d8]{font-style:normal;font-size:18px;font-weight:600;letter-spacing:.2px;color:#05c289;font-family:"Montserrat",sans-serif}@media screen and (max-width:767px){.card .card__info[data-v-7dd493d8]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-7dd493d8]{font-size:14px;line-height:22px;font-weight:500}.card__price-amount[data-v-7dd493d8]{display:flex;align-items:center;grid-gap:5px;gap:5px;justify-content:flex-end;padding-top:12px}.card__price-amount .card__price-amount-title[data-v-7dd493d8]{color:rgba(0,0,0,.5);font-size:15px;font-weight:300;padding-right:2px}.card__price-amount .card__price-amount-symbol[data-v-7dd493d8]{display:flex}.card__price-amount .card__price-amount-symbol img[data-v-7dd493d8]{width:auto;height:21px;border-radius:50px;position:relative;top:-1px}.card__price-amount .card__price-amount-value[data-v-7dd493d8]{font-size:15px;font-weight:600}}',""]),t.exports=r},846:function(t,e,d){"use strict";d.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__price-amount-symbol"},[e("img",{attrs:{src:d(72),alt:""}})])}],n=d(9),o=(d(53),d(20),d(43),d(19),d(269)),c=d(28),l={props:{cardData:{required:!0,type:Object,default:function(){return{}}},itemType:{required:!1,type:String,default:""}},data:function(){return{detailData:{}}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.getItemDetail()},methods:{getItemDetail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(t.$axios,t.cardData);case 2:d=e.sent,t.getUriparsing(d,d.order.tokenUri);case 4:case"end":return e.stop()}}),e)})))()},getUriparsing:function(t,e){var d=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(o.i)(d.$axios,[t,e]);case 2:d.detailData=r.sent;case 3:case"end":return r.stop()}}),r)})))()},getNumberFormat:function(t){return Object(c.d)(t)},getAssetType:function(t){var e=t.split(".").pop().toLowerCase();return["mp4"].includes(e)?"video":"image"}}},f=(d(843),d(3)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return 0!==Object.keys(t.detailData).length?d("div",{staticClass:"card"},[t.getAssetType(t.detailData.image)?d("img",{style:{background:t.detailData.background_color},attrs:{srcset:t.detailData.image,src:t.detailData.image,alt:t.detailData.name}}):d("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:t.detailData.image,src:t.detailData.image},domProps:{muted:!0}}),t._v(" "),d("div",{staticClass:"card__info"},[d("div",{staticClass:"card__info-token"},[d("div",{staticClass:"card__info-token-wrapper"},[d("div",{staticClass:"card__info-token-symbol"},[d("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+t.detailData.default.symbol+".png",alt:t.detailData.name}}),t._v(" "),d("span",[t._v(t._s(t.cardData.symbol.toUpperCase().replace(" ","_")))])])])]),t._v(" "),d("div",{staticClass:"card__info-title"},[d("span",[t._v(t._s(t.detailData.name))])]),t._v(" "),d("div",{staticClass:"card__price-amount"},[t._m(0),t._v(" "),d("span",{staticClass:"card__price-amount-value"},[t._v("\n        "+t._s(t.getNumberFormat(t.cardData.price))+"\n      ")])])])]):t._e()}),r,!1,null,"7dd493d8",null);e.default=component.exports}}]);