(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{29:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),o=n(11),u=n.n(o),i=n(25),m=n(28),s=function(e){var t=Object(a.useState)(null),n=Object(m.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){var t;null===(t=e.getData)||void 0===t||t.call(e,e.language).then((function(e){return c(e)}))}),[e]),r.a.createElement("div",null,r.a.createElement("ul",null,null===l?r.a.createElement("p",null,"Now loading..."):l.data.items.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",null,r.a.createElement("h4",null,r.a.createElement("a",{href:e.volumeInfo.canonicalVolumeLink},e.volumeInfo.title))),r.a.createElement("p",null,e.volumeInfo.authors," \u30fb ",e.volumeInfo.publisher),"undefined"!==typeof e.volumeInfo.imageLinks&&r.a.createElement("img",{src:e.volumeInfo.imageLinks.smallThumbnail}))}))))},p=n(9),f=n(1),g=n(26),E=n.n(g),v=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.googleapis.com/books/v1/volumes?q=intitle:",e.next=3,E.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=intitle:").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=["React","Vue","Angular"];return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"welcome to react app!!"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/react-practice"},"React")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/vue"},"vue")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/angular"},"angular"))),r.a.createElement("hr",null),r.a.createElement(f.a,{exact:!0,path:"/react-practice",render:function(t){return r.a.createElement(s,{language:e[0],getData:function(e){return v(e)}})}}),r.a.createElement(f.a,{path:"/vue",render:function(t){return r.a.createElement(s,{language:e[1],getData:function(e){return v(e)}})}}),r.a.createElement(f.a,{path:"/angular",render:function(t){return r.a.createElement(s,{language:e[2],getData:function(e){return v(e)}})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.157d4774.chunk.js.map