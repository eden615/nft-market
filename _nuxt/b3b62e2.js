(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{845:function(e,t,r){var content=r(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("689f86f6",content,!0,{sourceMap:!1})},848:function(e,t,r){"use strict";r(845)},849:function(e,t,r){var d=r(7)(!1);d.push([e.i,'.card[data-v-688e54d6]{overflow:hidden;position:relative;border:1px solid #e5e8eb;transition:all .15s ease-out;border-radius:10px}.card[data-v-688e54d6]:hover{transform:translateY(-4px);box-shadow:0 0 0 0 rgba(0,0,0,.05),0 3px 5px 0 rgba(0,0,0,.05),0 10px 10px -2px rgba(0,0,0,.05);position:relative;z-index:1}.card[data-v-688e54d6]:active{transform:translateY(2px);box-shadow:0 1px 2px 0 transparent,0 0 5px 0 transparent,0 2px 0 -2px transparent;border:1px solid #e5e8eb}.card img[data-v-688e54d6]{border-radius:5px 5px 0 0}.card img[data-v-688e54d6],.card video[data-v-688e54d6]{display:block;width:100%;height:100%}.card .card__info-badge[data-v-688e54d6]{display:none;position:absolute;top:0;left:0;right:0;text-align:center;font-size:14px;height:32px;line-height:32px;color:#fff;font-weight:600}.card .card__info-badge.sold[data-v-688e54d6]{display:block;background:linear-gradient(90deg,rgba(0,87,255,.85098),rgba(0,209,255,.85098))}.card .card__info-badge.expired[data-v-688e54d6]{display:block;background:linear-gradient(90deg,rgba(255,118,0,.85098),rgba(255,24,0,.85098))}.card .card__info[data-v-688e54d6]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#000;padding:10px 10px 15px}.card .card__info-title[data-v-688e54d6]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;font-weight:600;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-688e54d6]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-688e54d6]{width:100%}.card .card__info-token-wrapper[data-v-688e54d6]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-688e54d6]{font-family:"Poppins",sans-serif;width:100%;font-size:13px;display:flex;grid-gap:6px;gap:6px;color:rgba(0,0,0,.35);font-weight:600}.card .card__info-token-symbol img[data-v-688e54d6]{width:auto;height:17px;position:relative;top:1px}.card .card__info-token-symbol span[data-v-688e54d6]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media screen and (max-width:767px){.card .card__info[data-v-688e54d6]{grid-gap:3px;gap:3px}.card .card__info-title[data-v-688e54d6]{font-size:14px;line-height:22px;font-weight:500}}',""]),e.exports=d},850:function(e,t,r){"use strict";r.r(t);var d=r(9),n=(r(53),r(20),r(43),r(270),r(269)),o={props:{cardData:{required:!0,type:Object,default:function(){return null}},testFlag:{required:!1,type:Boolean,default:!1}},data:function(){return{metaData:null}},computed:{filenameExtension:function(){return this.icon.split(".").pop()}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={symbol:e.cardData.symbol,tid:e.cardData.tid},t.next=3,Object(n.b)(e.$axios,r);case 3:return d=t.sent,t.next=6,Object(n.i)(e.$axios,[d,d.uri]);case 6:e.metaData=t.sent;case 7:case"end":return t.stop()}}),t)})))()},getBadgeType:function(){return"1"===(2*Math.random()).toFixed(0)?"sold":"expired"}}},l=(r(848),r(3)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return null!==e.metaData?r("div",{staticClass:"card"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.testFlag,expression:"testFlag"}],staticClass:"card__info-badge",class:e.getBadgeType()},[r("span",[e._v(e._s(e.getBadgeType().toUpperCase()))])]),e._v(" "),"image"===e.metaData.filer_type?r("img",{style:{background:e.metaData.background_color},attrs:{srcset:e.metaData.image,src:e.metaData.image,alt:e.metaData.name}}):r("video",{attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",poster:e.metaData.image,src:e.metaData.image},domProps:{muted:!0}}),e._v(" "),r("div",{staticClass:"card__info"},[r("div",{staticClass:"card__info-token"},[r("div",{staticClass:"card__info-token-wrapper"},[r("div",{staticClass:"card__info-token-symbol"},[r("img",{attrs:{src:"https://che.wemixnetwork.net/wal/rn_app/img/common/token/"+e.cardData.symbol.toUpperCase()+".png",alt:e.metaData.name}}),e._v(" "),r("span",[e._v(e._s(e.cardData.symbol))])])])]),e._v(" "),r("div",{staticClass:"card__info-title"},[r("span",[e._v(e._s(e.metaData.name))])])])]):e._e()}),[],!1,null,"688e54d6",null);t.default=component.exports}}]);