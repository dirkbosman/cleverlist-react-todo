(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(14),n(1)),u=n(6);n(15);function l(e){var t=e.list,n=e.done,a=e.remove,i=e.changeState,o=e.save;return r.a.createElement("ul",{className:"entries"},t.sort((function(e,t){return e.priority.charCodeAt(0)-t.priority.charCodeAt(0)})).reverse().filter((function(e){return e.done===n})).map((function(e,t){return r.a.createElement(s,{todoItem:e,remove:a,changeState:i,save:o,key:t})})))}function s(e){var t=e.todoItem,n=e.remove,a=e.changeState,i=e.save;return r.a.createElement("li",{id:t.priority},r.a.createElement("input",{checked:t.done,onChange:function(){return a(t)},type:"checkbox"}),r.a.createElement("input",{value:t.value,onChange:function(e){return i(t,e.target.value)},type:"text"}),r.a.createElement("button",{onClick:function(){return n(t)}},"remove"))}var m=n(2),h=n(3),v=function(){function e(t,n,a){Object(m.a)(this,e),this.value=t,this.done=n,this.priority=a}return Object(h.a)(e,[{key:"copy",value:function(){return new e(this.value,this.done,this.priority)}}]),e}();function f(e){return e instanceof v?new p(e.copy()):new d(e)}function d(e){var t=Object(c.a)(e);this.removeItem=function(e){return function(t){var n=e.indexOf(t);return e.splice(n,1),e}}(t),this.replace=function(e){return function(t){return new b(e,t)}}(t),this.get=function(){return t}}var b=function(){function e(t,n){Object(m.a)(this,e),this.list=t,this.first_obj=n}return Object(h.a)(e,[{key:"with",value:function(e){var t=this.list.indexOf(this.first_obj);return[].concat(Object(c.a)(this.list.slice(0,t)),[e],Object(c.a)(this.list.slice(t+1)))}}]),e}(),p=function(){function e(t){Object(m.a)(this,e),this.obj=t}return Object(h.a)(e,[{key:"change",value:function(e){return new E(this.obj,e)}}]),e}(),E=function(){function e(t,n){Object(m.a)(this,e),this.obj=t,this.property=n}return Object(h.a)(e,[{key:"to",value:function(e){return this.obj[this.property]=e,this.obj}}]),e}();function w(){var e=Object(a.useState)([new v("item_1",!1,"a"),new v("item_2",!0,"b"),new v("item_3",!0,"c"),new v("item_4",!1,"a"),new v("item_5",!0,"b"),new v("item_6",!1,"c"),new v("item_7",!0,"b"),new v("item_8",!0,"a"),new v("item_9",!1,"c")]),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("a"),s=Object(u.a)(o,2),m=s[0],h=s[1],d=Object(a.useRef)(null),b=function(e,t){var a=new v(e,!1,t);i([].concat(Object(c.a)(n),[a]))},p=function(e){window.confirm("Sure you wanna delete item?")&&i(f(n).removeItem(e))},E=function(e){var t=f(e).change("done").to(!e.done),a=f(n).removeItem(e);i([].concat(Object(c.a)(a),[t]))},w=function(e,t){var a=f(e).change("value").to(t),r=f(n).replace(e).with(a);i(r)},j=function(e){h(e.target.value)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},"Clever")))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"create",id:m},r.a.createElement("h1",null,"New To-do"),r.a.createElement("div",{className:"priority"},r.a.createElement("h4",null,"How important is this todo?"),r.a.createElement("form",null,["a","b","c"].map((function(e,t){return r.a.createElement("span",null,r.a.createElement("input",{type:"radio",name:"priority",id:e,value:e,onChange:j,key:t,checked:e===m,required:!0}),r.a.createElement("label",{htmlFor:"not"},e))})))),r.a.createElement("div",{className:"textbox"},r.a.createElement("input",{ref:d,placeholder:"What to do next?",required:!0})),r.a.createElement("button",{onClick:function(){var e=d.current;!function(e){return!function(e){return!e.value.trim()}(e)}(e)?alert("Do add something!"):(b(e.value,m),function(e){e.value=""}(e),h("a"))}},"Create")),r.a.createElement("div",null,r.a.createElement("h1",null,"To-Do's"),r.a.createElement(l,{done:!1,list:n,remove:p,changeState:E,save:w})),r.a.createElement("div",null,r.a.createElement("h1",null,"Done"),r.a.createElement(l,{done:!0,list:n,remove:p,changeState:E,save:w}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.627588ee.chunk.js.map