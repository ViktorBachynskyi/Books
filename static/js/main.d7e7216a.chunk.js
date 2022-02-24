(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),c=n(12),a=n.n(c),s=(n(17),n(1)),i=n.n(s),u=n(3),d=n(4),j=n(11),b=n.n(j),l="https://my-json-server.typicode.com/ViktorBachynskyi/json-server/books";function h(){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(l,"/").concat(e),{method:"DELETE"});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(19);var k=n(9),y=n(5),g=n(6),v=(n(20),n(0)),B=function(t){var e=Object(r.useState)({id:0,title:"",author:"",category:"",ISBN:""}),n=Object(d.a)(e,2),o=n[0],c=n[1],a=function(t){c(Object(g.a)(Object(g.a)({},o),{},Object(y.a)({id:Math.random()},t.target.name,t.target.value)))},s=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f(o);case 3:t.setBooks([].concat(Object(k.a)(t.books),[o])),c({id:0,title:"",author:"",category:"",ISBN:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("form",{className:"addBook-form",onSubmit:s,children:Object(v.jsxs)("fieldset",{className:"addBook-form__container",children:[Object(v.jsx)("button",{type:"button",className:"addBook-form__button-close",onClick:function(){return t.showAddForm()},children:"X"}),Object(v.jsx)("legend",{children:"Add book"}),"Book title",Object(v.jsx)("input",{name:"title",value:o.title,type:"text",required:!0,onChange:a}),"Author name",Object(v.jsx)("input",{name:"author",value:o.author,type:"text",required:!0,onChange:a}),"Category",Object(v.jsx)("input",{name:"category",value:o.category,type:"text",required:!0,onChange:a}),"International Standard Book Number (ISBN)",Object(v.jsx)("input",{name:"ISBN",value:o.ISBN,type:"text",required:!0,autoComplete:"off",minLength:6,maxLength:6,onChange:a}),Object(v.jsx)("button",{type:"submit",className:"addBook-form__button",children:"Add book"})]})})},N=(n(22),function(t){var e=function(){var e=Object(u.a)(i.a.mark((function e(n,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:t.setBooks(t.books.filter((function(t){return t.id!==r})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"books",children:Object(v.jsxs)("table",{className:"books__table",children:[Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Book title"}),Object(v.jsx)("td",{children:"Author name"}),Object(v.jsx)("td",{children:"Category"}),Object(v.jsx)("td",{children:"ISBN"}),Object(v.jsx)("td",{children:"Actions"})]})}),t.books.map((function(n){return Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:n.title}),Object(v.jsx)("td",{children:n.author}),Object(v.jsx)("td",{children:n.category}),Object(v.jsx)("td",{children:n.ISBN}),Object(v.jsxs)("td",{className:"books__field-actions",children:[Object(v.jsx)("button",{type:"button",onClick:function(){return t.toggleSelectedBook(n)},children:"Edit"}),Object(v.jsx)("button",{type:"button",onClick:function(t){return e(t,n.id)},children:"Delete"})]})]})},n.id)}))]})})}),S=(n(23),{id:0,title:"",author:"",category:"",ISBN:""}),C=function(t){var e=t.books,n=t.setBooks,o=t.selectedBook,c=t.toggleSelectedBook,a=Object(r.useState)(o||S),s=Object(d.a)(a,2),i=s[0],u=s[1];Object(r.useEffect)((function(){o&&u(o)}),[o]);var j=function(t){u(Object(g.a)(Object(g.a)({},i),{},Object(y.a)({},t.target.name,t.target.value)))};return Object(v.jsx)("form",{className:"addBook-form",children:Object(v.jsxs)("fieldset",{className:"addBook-form__container",children:[Object(v.jsx)("button",{type:"button",className:"addBook-form__button-close",onClick:function(){return c()},children:"X"}),Object(v.jsx)("legend",{children:"Edit book"}),"Book title",Object(v.jsx)("input",{name:"title",value:i.title,type:"text",required:!0,onChange:j}),"Author name",Object(v.jsx)("input",{name:"author",value:i.author,type:"text",required:!0,onChange:j}),"Category",Object(v.jsx)("input",{name:"category",value:i.category,type:"text",required:!0,onChange:j}),"International Standard Book Number (ISBN)",Object(v.jsx)("input",{name:"ISBN",value:i.ISBN,type:"text",required:!0,autoComplete:"off",minLength:6,maxLength:6,onChange:j}),Object(v.jsx)("button",{type:"button",className:"addBook-form__button",onClick:function(){e.find((function(t){return t.id===i.id}))?(e.splice(e.findIndex((function(t){return t.id===i.id})),1,i),n(Object(k.a)(e))):u({id:0,title:"",author:"",category:"",ISBN:""})},children:"Edit book"})]})})},w=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(!1),a=Object(d.a)(c,2),s=a[0],j=a[1],l=Object(r.useState)(null),p=Object(d.a)(l,2),f=p[0],O=p[1];Object(r.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var x=function(){j(!s)},m=function(t){O(t||null)};return Object(v.jsxs)("div",{className:"page",children:[Object(v.jsx)("div",{className:b()({"side-addForm":!0,"side-addForm--opened":s}),children:Object(v.jsx)(B,{books:n,setBooks:o,showAddForm:x})}),Object(v.jsxs)("div",{className:"page-content",children:[Object(v.jsx)(N,{books:n,setBooks:o,toggleSelectedBook:m}),Object(v.jsx)("button",{type:"button",onClick:x,children:"Add book"})]}),Object(v.jsx)("div",{className:b()({"side-editForm":!0,"side-editForm--opened":f}),children:Object(v.jsx)(C,{books:n,setBooks:o,selectedBook:f,toggleSelectedBook:m})})]})};a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d7e7216a.chunk.js.map