!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=1;function i(e){let{id:t=1,className:n="newSticker",head:i="Новый стикер",body:r="Текст стикера"}=e;return{id:t,className:n,head:i,body:r,toString:function(){return`makeSticker вернул объект: id : ${this.id}, className : ${this.className}, head : ${this.head}, body : ${this.body}`},show:function(e=1,u=1,d=1){document.write(`\n                <div id="${t}" class="${n}">\n                    <h1>${i}</h1>\n                    ${r}\n                </div>\n            `);const s=document.getElementById(t);s.style.position="absolute",s.style.left=e+"px",s.style.top=u+"px",function(e){var t=0,n=0,i=0,r=navigator.userAgent;-1!=r.indexOf("Opera")?n=1:-1!=r.indexOf("MSIE")?t=1:-1!=r.indexOf("Firefox")&&(i=1);var u=document.getElementById(e),d=0,s=0,a=0,c=0,l=0,f=0,p=0,m=0;function y(e){o++,u.style.zIndex=o,e?(a=e.pageX,c=e.pageY):(a=window.event.clientX,c=window.event.clientY,t&&(c-=2,a-=2)),l=u.offsetLeft,f=u.offsetTop,d=l-a,s=f-c,document.onmousemove=v,(n||i)&&document.addEventListener("onmousemove",v,!1)}function v(e){e?(a=e.pageX,c=e.pageY):(a=window.event.clientX,c=window.event.clientY,t&&(c-=2,a-=2)),p=d+a,m=s+c,u.style.top=m+"px",u.style.left=p+"px"}u.onmousedown=y,(n||i)&&u.addEventListener("onmousedown",y,!1),document.onmouseup=function(){document.onmousemove=null}}(this.id)}}}i({id:15,head:"Super HeadLine",body:"Some very intresting or important text"}).show(0,200),i({id:2}).show(100,150)}]);