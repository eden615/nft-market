(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{845:function(t,e,r){var content=r(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("6dcc23ee",content,!0,{sourceMap:!1})},848:function(t,e,r){"use strict";r(845)},849:function(t,e,r){var d=r(7)(!1);d.push([t.i,'.card[data-v-339dc7b6]{overflow:hidden;position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-339dc7b6]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative;z-index:1}.card[data-v-339dc7b6]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card img[data-v-339dc7b6]{border-radius:5px 5px 0 0}.card img[data-v-339dc7b6],.card video[data-v-339dc7b6]{display:block;width:100%;height:100%}.card .card__info-badge[data-v-339dc7b6]{display:none;position:absolute;top:0;left:0;right:0;text-align:center;font-size:14px;height:32px;line-height:32px;color:#fff;font-weight:600}.card .card__info-badge.sold[data-v-339dc7b6]{display:block;background:linear-gradient(90deg,rgba(0,87,255,.85098),rgba(0,209,255,.85098))}.card .card__info-badge.expired[data-v-339dc7b6]{display:block;background:linear-gradient(90deg,rgba(255,118,0,.85098),rgba(255,24,0,.85098))}.card .card__info[data-v-339dc7b6]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px 10px 15px}.card .card__info-title[data-v-339dc7b6]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-339dc7b6]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-339dc7b6]{width:100%}.card .card__info-token-wrapper[data-v-339dc7b6]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-339dc7b6]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:500}.card .card__info-token-symbol img[data-v-339dc7b6]{width:auto;height:17px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-339dc7b6]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media screen and (max-width:767px){.card .card__info[data-v-339dc7b6]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-339dc7b6]{font-size:14px;line-height:22px;font-weight:500}}',""]),t.exports=d},850:function(t,e,r){"use strict";r.r(e);var d=r(9),n=(r(53),r(20),r(43),r(270),r(269)),o={props:{cardData:{required:!0,type:Object,default:function(){return null}},testFlag:{required:!1,type:Boolean,default:!1}},data:function(){return{metaData:null}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={symbol:t.cardData.symbol,tid:t.cardData.tid},e.next=3,Object(n.b)(t.$axios,r);case 3:return d=e.sent,e.next=6,Object(n.i)(t.$axios,[d,d.uri]);case 6:t.metaData=e.sent;case 7:case"end":return e.stop()}}),e)})))()},getBadgeType:function(){return"1"===(2*Math.random()).toFixed(0)?"sold":"expired"}}},c=(r(848),r(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return null!==t.metaData?r("div",{staticClass:"card"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.testFlag,expression:"testFlag"}],staticClass:"card__info-badge",class:t.getBadgeType()},[r("span",[t._v(t._s(t.getBadgeType().toUpperCase()))])]),t._v(" "),"image"===t.metaData.filer_type?r("img",{style:{background:t.metaData.background_color},attrs:{srcset:t.metaData.image,src:t.metaData.image,alt:t.metaData.name}}):r("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:t.metaData.image,src:t.metaData.image},domProps:{muted:!0}}),t._v(" "),r("div",{staticClass:"card__info"},[r("div",{staticClass:"card__info-token"},[r("div",{staticClass:"card__info-token-wrapper"},[r("div",{staticClass:"card__info-token-symbol"},[r("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+t.cardData.symbol.toUpperCase()+".png",alt:t.metaData.name}}),t._v(" "),r("span",[t._v(t._s(t.cardData.symbol))])])])]),t._v(" "),r("div",{staticClass:"card__info-title"},[r("span",[t._v(t._s(t.metaData.name))])])])]):t._e()}),[],!1,null,"339dc7b6",null);e.default=component.exports}}]);