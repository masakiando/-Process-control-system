(this["webpackJsonpmy-cra"]=this["webpackJsonpmy-cra"]||[]).push([[0],{14:function(e,n,t){e.exports=t(33)},3:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return i}));var o=t(2),r=Object(o.b)({name:"counterSlice",initialState:{theCounter:0},reducers:{incrementCounter:function(e,n){var t,o=null!==(t=n.payload)&&void 0!==t?t:1;e.theCounter+=o},decrementCounter:function(e,n){var t,o=null!==(t=n.payload)&&void 0!==t?t:1;e.theCounter-=o},resetCounter:function(e){e.theCounter=0}}}),c=r.actions,u=c.incrementCounter,a=c.decrementCounter,i=c.resetCounter;n.b=r.reducer},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(5),u=t.n(c),a=t(4),i=t(13),l=t(2),d=["background: blue","color: white"].join(";"),f=["background: green","color: white"].join(";"),s=["background: darkorange","color: white"].join(";"),p=["background: red","color: white"].join(";"),b=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){return function(t){return function(o){if(!e)return t(o);var r=n.getState(),c=t(o),u=n.getState();return m("%c ".concat(o.type," "),g(o)),C("%cprev state","color: darkorange",r),C("%caction payload","color: blue",o.payload),C("%cnext state","color: darkgreen",u),v(),c}}}};function m(){var e="function"===typeof console.groupCollapsed?console.groupCollapsed:console.info;e.apply(void 0,arguments)}function v(){var e="function"===typeof console.groupEnd?console.groupEnd:console.info;e.apply(void 0,arguments)}function C(){var e;(e=console).info.apply(e,arguments)}function g(e){return e.meta&&e.meta.async?e.type.indexOf("_COMPLETED")>-1?f:e.type.indexOf("_FAILED")>-1?p:s:d}var y=t(1),h=t(3),j=Object(y.combineReducers)({counter:h.b});var E=Object(l.a)({reducer:j,middleware:[].concat(Object(i.a)(Object(l.c)()),[b(!1)])});t(31);!function(){var e=t(34).default;u.a.render(r.a.createElement(a.a,{store:E},r.a.createElement(e,null)),document.getElementById("root"))}()},34:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(4),u=(t(32),t(3)),a=function(){var e=Object(c.b)(),n=Object(c.c)((function(e){return e.counter})).theCounter;return r.a.createElement("div",{className:"Counter"},"the counter:"," ",n,r.a.createElement("button",{onClick:function(){return e(Object(u.c)())}},"Increment"),r.a.createElement("button",{onClick:function(){return e(Object(u.a)())}},"Decrement"),r.a.createElement("button",{onClick:function(){return e(Object(u.d)())}},"Reset"))};n.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(a,null))}}},[[14,1,2]]]);
//# sourceMappingURL=main.82f2f2da.chunk.js.map