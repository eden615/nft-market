(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{866:function(t,e,r){var content=r(897);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("414d5dbb",content,!0,{sourceMap:!1})},896:function(t,e,r){"use strict";r(866)},897:function(t,e,r){var l=r(7)(!1);l.push([t.i,".tab-record__title[data-v-e07111ba]{font-weight:600;font-size:20px;text-transform:capitalize}.tab-record__table table[data-v-e07111ba]{width:100%;border-color:#777784 #fff #d4d4d4;border-style:solid;border-width:1px;table-layout:fixed;border-collapse:collapse}.tab-record__table tr .table__cell-from[data-v-e07111ba],.tab-record__table tr .table__cell-price[data-v-e07111ba],.tab-record__table tr .table__cell-to[data-v-e07111ba],.tab-record__table tr .table__cell-txn[data-v-e07111ba]{width:20%;text-align:left}.tab-record__table tr .table__cell-date[data-v-e07111ba]{width:20%;text-align:right}caption[data-v-e07111ba]{overflow:hidden;width:1px;height:1px;font-size:0;line-height:0}.tab-record__table th[data-v-e07111ba]{height:42px;font-size:12px;color:#636469;text-transform:capitalize;text-align:left}.tab-record__table th strong[data-v-e07111ba]{font-weight:500}.tab-record__table th a[data-v-e07111ba]{display:block;position:relative;color:#636469;text-decoration:none}.tab-record__table tr:first-child td[data-v-e07111ba]{background-image:none}.tab-record__table td[data-v-e07111ba]{border-top:1px solid rgba(0,0,0,.05);font-size:12px;text-align:left}.tab-record__table tr:first-child td .inner[data-v-e07111ba]{margin-top:-1px}.tab-record__table td .inner[data-v-e07111ba]{padding:12px 0}.tab-record__table td .inner .price[data-v-e07111ba]{display:flex;align-items:center;grid-gap:5px;gap:5px}.tab-record__table td .inner .price img[data-v-e07111ba]{width:22px;height:22px}.tab-record__table td span[data-v-e07111ba]{color:#2e2e2e}.tab-record__table .align-right[data-v-e07111ba]{text-align:right}.tab-record__table td .inner.nodata[data-v-e07111ba]{height:120px;line-height:120px;text-align:center}.tab-record__table td .inner.nodata span[data-v-e07111ba]{color:rgba(0,0,0,.5)}@media screen and (min-width:1940px){.auction-nft__picture img[data-v-e07111ba]{max-height:820px}}@media only screen and (max-width:1024px){.tab-record__table[data-v-e07111ba]{overflow:hidden;overflow-x:scroll}.tab-record__table tr .table__cell-from[data-v-e07111ba],.tab-record__table tr .table__cell-price[data-v-e07111ba],.tab-record__table tr .table__cell-to[data-v-e07111ba],.tab-record__table tr .table__cell-txn[data-v-e07111ba]{width:150px}.tab-record__table tr .table__cell-date[data-v-e07111ba]{width:100px}}",""]),t.exports=l},925:function(t,e,r){"use strict";r.r(e);var l=r(9),c=(r(53),r(28)),n=r(269),o={data:function(){return{query:{tid:parseInt(this.$route.params.id),symbol:this.$route.query.symbol,articles:10,page:1},isLoading:!0,historyData:null}},mounted:function(){this.getItemHistory()},methods:{getItemHistory:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.d)(t.$axios,t.query);case 2:t.historyData=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getNumberFormat:function(t){return Object(c.d)(t)},getFullSplitString:function(t,e,r){return Object(c.b)(t,e,r)}}},_=(r(896),r(3)),component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"auction-nft__record"},[l("div",{staticClass:"tab-record__table"},[l("table",{attrs:{summary:"판매 내역",cellspacing:"0"}},[l("caption",[t._v("\n        입찰 내역\n      ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),null!==t.historyData?l("tbody",[0===t.historyData.datas.length?l("tr",[t._m(2)]):t._l(t.historyData.datas,(function(e,i){return l("tr",{key:i},[l("td",{staticClass:"table__cell-txn"},[l("div",{staticClass:"inner"},[l("span",[t._v(t._s(t.getFullSplitString(e.txhash)))])])]),t._v(" "),l("td",{staticClass:"table__cell-to"},[l("div",{staticClass:"inner"},[l("span",[t._v(t._s(t.getFullSplitString(e.to)))])])]),t._v(" "),l("td",{staticClass:"table__cell-from"},[l("div",{staticClass:"inner"},[l("span",[t._v(t._s(t.getFullSplitString(e.from)))])])]),t._v(" "),l("td",{staticClass:"table__cell-price"},[l("div",{staticClass:"inner"},[l("div",{staticClass:"price"},[l("img",{attrs:{src:r(72),alt:""}}),t._v(" "),l("span",[t._v(t._s(t.getNumberFormat(e.price)))])])])]),t._v(" "),l("td",{staticClass:"table__cell-date"},[l("div",{staticClass:"inner align-right"},[l("span",[t._v(t._s(e.time))])])])])}))],2):t._e()])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("colgroup",[r("col",{staticClass:"table__cell-txn"}),t._v(" "),r("col",{staticClass:"table__cell-to"}),t._v(" "),r("col",{staticClass:"table__cell-from"}),t._v(" "),r("col",{staticClass:"table__cell-price"}),t._v(" "),r("col",{staticClass:"table__cell-date"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"table__cell-txn",attrs:{scope:"col"}},[r("div",{staticClass:"inner"},[r("strong",[t._v("TXN")])])]),t._v(" "),r("th",{staticClass:"table__cell-to",attrs:{scope:"col"}},[r("div",{staticClass:"inner"},[r("strong",[t._v("To")])])]),t._v(" "),r("th",{staticClass:"table__cell-from",attrs:{scope:"col"}},[r("div",{staticClass:"inner"},[r("strong",[t._v("From")])])]),t._v(" "),r("th",{staticClass:"table__cell-price",attrs:{scope:"col"}},[r("div",{staticClass:"inner"},[r("strong",{staticClass:"sort"},[t._v(" Price")])])]),t._v(" "),r("th",{staticClass:"table__cell-date align-right",attrs:{scope:"col"}},[r("a",{staticClass:"inner",attrs:{href:"javascript:;"}},[r("strong",{staticClass:"sort"},[t._v(" Date")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{attrs:{colspan:"5"}},[r("div",{staticClass:"inner nodata"},[r("span",[t._v("No data")])])])}],!1,null,"e07111ba",null);e.default=component.exports}}]);