(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(18),n(1)),l=n(2),u=n(11),s=n(12),m=n(3),h=n(8),d=n(6),f=(n(21),n(22),{food:["\ud83d\udc04 milk","\ud83e\udd51 avocado","\ud83c\udf5e bread","\ud83e\udd53 bacon","\ud83e\udd66 broccoli","\ud83c\udf73 eggs","\ud83e\udd57 salad","\ud83c\udf5d spaghetti"],personal:["\ud83c\udf93 study js","\ud83c\udde9\ud83c\uddea learn german","\ud83c\udfb2 game with friends","\ud83e\uddb7 dentist appoinment","\ud83d\udc69\u200d\u2695\ufe0f dr. appoinment","\ud83d\udcb5 pay rent","\ud83d\udcb5 do taxes","\ud83c\udf8a plan bday"],exercise:["\ud83e\uddd7\u200d\u2642\ufe0f climb","\ud83c\udfc4 surf","\ud83c\udfca swim","\ud83d\udef6 canoe","\u26bd soccer","\ud83d\udc5f running","\ud83e\uddd8\u200d\u2640\ufe0f yoga","\ud83d\udeb5\u200d\u2640\ufe0f cycle"],work:["\ud83d\udd0d stackOverflow","\ud83d\udcd2 ledger","\ud83d\udcc8 chart","\ud83d\uddc4\ufe0f file docs","\ud83d\udc54 shirt","\ud83d\udc0d python update","\ud83d\udcbb laptop","\ud83d\udee0\ufe0f build version"],general:["\ud83c\udf81 gift","\ud83c\udfa7 headphone","\ud83c\udfae video games","\ud83c\udfac movies","\ud83d\ude85 train","\u26fa tent","\u2708\ufe0f airplane","\ud83d\udc68\u200d\ud83c\udfa4 festival"]});function v(e){var t=e.list,n=e.done,a=e.remove,o=e.changeState,c=e.save;return r.a.createElement("ul",{className:"entries"},t.filter((function(e){return e.done===n})).sort((function(e,t){return t.priority.charCodeAt(0)-e.priority.charCodeAt(0)})).map((function(e,t){return r.a.createElement(p,{todoItem:e,remove:a,changeState:o,save:c,key:t})})))}function p(e){var t=e.todoItem,n=e.remove,a=e.changeState,o=e.save,c=t.done?"cut":"not-cut";return r.a.createElement("li",{id:t.priority},r.a.createElement("input",{checked:t.done,onChange:function(){return a(t)},type:"checkbox"}),r.a.createElement("input",{className:"todo-text-input "+c,value:t.value,onChange:function(e){return o(t,e.target.value)},type:"text"}),r.a.createElement("button",{className:"todo-button",onClick:function(){return n(t)}},"remove"))}var b=function(){function e(t,n,a){Object(i.a)(this,e),this.value=t,this.done=n,this.priority=a}return Object(l.a)(e,[{key:"copy",value:function(){return new e(this.value,this.done,this.priority)}}]),e}();function E(e){return e instanceof b?new j(e.copy()):new y(e)}function y(e){var t=Object(m.a)(e);this.removeItem=function(e){return function(t){var n=e.indexOf(t);return e.splice(n,1),e}}(t),this.replace=function(e){return function(t){return new g(e,t)}}(t),this.get=function(){return t}}var g=function(){function e(t,n){Object(i.a)(this,e),this.list=t,this.first_obj=n}return Object(l.a)(e,[{key:"with",value:function(e){var t=this.list.indexOf(this.first_obj);return[].concat(Object(m.a)(this.list.slice(0,t)),[e],Object(m.a)(this.list.slice(t+1)))}}]),e}(),j=function(){function e(t){Object(i.a)(this,e),this.obj=t}return Object(l.a)(e,[{key:"change",value:function(e){return new w(this.obj,e)}}]),e}(),w=function(){function e(t,n){Object(i.a)(this,e),this.obj=t,this.property=n}return Object(l.a)(e,[{key:"to",value:function(e){return this.obj[this.property]=e,this.obj}}]),e}();function O(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("a"),p=Object(h.a)(c,2),y=p[0],g=p[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoList"));if(e){var t=e.map((function(e){return new b((t=e).value,t.done,t.priority);var t}));o(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(n))}),[n]);var j=Object(a.useRef)(null),w=function(e){g(e.target.value)},O=function(e,t){var a=new b(e,!1,t);o([].concat(Object(m.a)(n),[a]))},k=function(e){if(window.confirm("Sure you wanna delete item?")){var t=E(n).removeItem(e);o(t)}},N=function(e){var t=E(e).change("done").to(!e.done),a=E(n).removeItem(e);o([].concat(Object(m.a)(a),[t]))},S=function(e,t){var a=E(e).change("value").to(t),r=E(n).replace(e).with(a);o(r)},x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDiv:!1},e}return Object(l.a)(n,[{key:"onButtonPress",value:function(e){var t=e.target.innerHTML;j.current.value=t}},{key:"render",value:function(){var e=this,t=this.state.showDiv;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setState({showDiv:!t})}},t?"hide":"show"),t&&r.a.createElement(d.d,null,r.a.createElement(d.b,null,Object.keys(f).map((function(e,t){return r.a.createElement(d.a,{key:t},e)}))),Object.keys(f).map((function(t,n){return r.a.createElement(d.c,{key:n},r.a.createElement("h3",null,t),r.a.createElement("ul",{className:"dropdownContent"},f[t].map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("button",{onClick:e.onButtonPress},t))}))))}))))}}]),n}(r.a.Component);return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},"Clever")))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"create",id:y},r.a.createElement("h1",null,"New To-do"),r.a.createElement(x,null),r.a.createElement("div",{className:"priority"},r.a.createElement("h4",null,"Importance?"),r.a.createElement("form",null,["a","b","c"].map((function(e,t){return r.a.createElement("span",null,r.a.createElement("input",{type:"radio",name:"priority",id:e,value:e,onChange:w,key:t,checked:e===y,required:!0}),r.a.createElement("label",{htmlFor:"not"},e))})))),r.a.createElement("div",{className:"textbox"},r.a.createElement("input",{className:"textbox",ref:j,name:"creationInput",placeholder:"What to do next?",required:!0})),r.a.createElement("button",{className:"addNew",onClick:function(){var e=j.current;!function(e){return!function(e){return!e.value.trim()}(e)}(e)?alert("Do add something!"):(O(e.value,y),function(e){e.value=""}(e),g("a"))}},"Add New")),r.a.createElement("div",null,r.a.createElement("h1",null,"To-Do's"),r.a.createElement(v,{done:!1,list:n,remove:k,changeState:N,save:S})),r.a.createElement("div",null,r.a.createElement("h1",null,"Done"),r.a.createElement(v,{done:!0,list:n,remove:k,changeState:N,save:S}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b36272c2.chunk.js.map