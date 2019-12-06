!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],e):"object"==typeof exports?exports.CarrouseWj=e(require("React"),require("ReactDOM")):t.CarrouseWj=e(t.React,t.ReactDOM)}(window,(function(t,e){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(1),r=n(2),o=n(3);n(4);class s extends i.Component{constructor(t){super(t),this.mAngle=0,this.mCarrouselViews=[],this.state={},this.init=()=>{this.mCarrouselR=this.props.mCarrouselR?this.props.mCarrouselR:this.contentObj.clientWidth/2,this.mRotationX=this.props.mRotationX?this.props.mRotationX:0,this.mRotationZ=this.props.mRotationZ?this.props.mRotationZ:0,this.mDistance=2*this.mCarrouselR,this.mAngle=this.props.mAngle?this.props.mAngle:0},this.getChildViews=()=>{let t=this.contentObj.childNodes;this.viewCount=t.length;for(let e of t)this.mCarrouselViews.push(e)},this.refreshLayout=()=>{for(let t=0;t<this.mCarrouselViews.length;t++){this.mCarrouselViews[t].classList.add("carrousel-child");let e=this.mAngle+180-360*t/this.viewCount,n=Math.sin(o.toRadians(e))*this.mCarrouselR,i=Math.cos(o.toRadians(e))*this.mCarrouselR,r=(this.mDistance-i)/(this.mDistance+this.mCarrouselR),s=Math.sin(o.toRadians(this.mRotationX*Math.cos(o.toRadians(e))))*this.mCarrouselR,a=-Math.sin(o.toRadians(-this.mRotationZ))*n,l=Math.cos(o.toRadians(-this.mRotationZ))*n-n;this.mCarrouselViews[t].style.transform=`scale(${r},${r}) translate(${n+l}px,${s+a}px)`,console.log("translateX"+t,n+l),console.log("translateY"+t,s+a)}},this.autoRun=()=>{this.stopAutoRun(),this.timer=setInterval(()=>{this.mAngle+=72,this.setMAngle(this.mAngle)},this.props.autoTime)},this.stopAutoRun=()=>{this.timer&&clearInterval(this.timer)},this.setMRotationX=t=>{this.mRotationX=t,this.refreshLayout()},this.setMRotationZ=t=>{this.mRotationZ=t,this.refreshLayout()},this.setMAngle=t=>{this.mAngle=t,this.refreshLayout()},this.setMCarrouselR=t=>{this.mCarrouselR=t,this.refreshLayout()},this.xLocation=0,this.zLocation=0}componentDidMount(){this.init(),this.getChildViews(),this.refreshLayout()}render(){return i.createElement(i.Fragment,null,i.createElement("div",{style:this.props.style,ref:t=>{this.contentObj=t},className:this.props.className+" content"},this.props.children),i.createElement("button",{onClick:()=>{this.xLocation-=5,this.setMRotationX(this.xLocation)},style:{margin:"auto"}},"设置X轴"),i.createElement("button",{onClick:()=>{this.zLocation-=5,this.setMRotationZ(this.zLocation)},style:{margin:"auto"}},"设置Z轴"),i.createElement("button",{onClick:()=>{this.mAngle+=72,this.setMAngle(this.mAngle)},style:{margin:"auto"}},"设置旋转角度"),i.createElement("button",{onClick:()=>{this.mCarrouselR-=10,this.setMCarrouselR(this.mCarrouselR)},style:{margin:"auto"}},"设置旋转半径"),i.createElement("button",{onClick:()=>{this.autoRun()},style:{margin:"auto"}},"自动旋转"))}}e.Carrouse=s,s.defaultProps={auto:!1,autoTime:1500},r.render(i.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},i.createElement(s,{mRotationX:-20,ref:()=>{}},i.createElement("div",null,i.createElement("img",{height:"60%",width:"60%",src:"./img/box_cal_big.png"}),i.createElement("img",{width:172,height:96.5,src:"./img/box_middle_big.png"})),i.createElement("div",null,i.createElement("img",{height:"60%",width:"60%",src:"./img/box_can_big.png"}),i.createElement("img",{width:172,height:96.5,src:"./img/box_middle_big.png"})),i.createElement("div",null,i.createElement("img",{height:"60%",width:"60%",src:"./img/box_flow_big.png"}),i.createElement("img",{width:172,height:96.5,src:"./img/box_middle_big.png"})),i.createElement("div",null,i.createElement("img",{height:"60%",width:"60%",src:"./img/box_sub_big.png"}),i.createElement("img",{width:172,height:96.5,src:"./img/box_middle_big.png"})),i.createElement("div",null,i.createElement("img",{height:"60%",width:"60%",src:"./img/box_node_big.png"}),i.createElement("img",{width:172,height:96.5,src:"./img/box_middle_big.png"})))),document.getElementById("example"))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toRadians=function(t){return t*Math.PI/180}},function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(7)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"html,body,p,ul,ol{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.content{\r\n    width:100%;\r\n    background:#0d1a26;\r\n    height:3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.carrousel-child{\r\n   position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 140px;\r\n    width:140px;\r\n    border-radius: 4px;\r\n    flex-direction: column;\r\n    transition: 0.2s;\r\n}\r\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(o).concat([r]).join("\n")}var s,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(g(i.parts[s],e))}else{for(var a=[];s<i.parts.length;s++)a.push(g(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var r=s(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function m(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=h(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,f=0;function g(t,e){var n,i,r;if(e.singleton){var o=f++;n=p||(p=c(e)),i=m.bind(null,n,o,!1),r=m.bind(null,n,o,!0)}else n=c(e),i=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t,e);return l(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o],c=r[s.id];c&&(c.refs--,i.push(c))}t&&l(a(t,e),e);for(var u=0;u<i.length;u++){var h=i[u];if(0===h.refs){for(var m=0;m<h.parts.length;m++)h.parts[m]();delete r[h.id]}}}}}])}));
//# sourceMappingURL=CarrouseWj.js.map