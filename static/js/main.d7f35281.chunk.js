(this.webpackJsonplabels=this.webpackJsonplabels||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(14),c=a.n(o),i=(a(56),a(8)),s=a(28),r=a(18),u=a.n(r),d=a(52),b=a(6);var h=function(e){var t=e.final_data,a=Object(n.useMemo)((function(){return t}),[t]),l={columns:[{label:"Call ID",field:"call_id",sort:"asc",width:150},{label:"Labels",field:"label",width:270}],rows:null===a||void 0===a?void 0:a.map((function(e){return{call_id:e.call_id,label:e.label_id.toString()}}))};return Object(b.jsx)(d.c,{striped:!0,bordered:!0,hover:!0,data:l})};var p=function(){var e=[],t=[],a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],c=l[1],r={operation:{callList:[],label_ops:[]}},d=function(e){r.operation.callList=j.map((function(e){return e.value})),r.operation.label_ops=O.map((function(t){return{name:t.value,op:e?"add":"remove"}})),console.log(r),u.a.post("https://damp-garden-93707.herokuapp.com/applyLabels",r,{headers:{user_id:"24b456"}}).then((function(e){var t=e.data;return console.log(t)})),console.log(o)};Object(n.useEffect)((function(){u.a.get("https://damp-garden-93707.herokuapp.com/getcalllist",{headers:{user_id:"24b456"}}).then((function(t){t.data.data.call_data.forEach((function(t){var a={label:t.call_id,value:t.call_id};e.push(a)}))})).catch((function(e){console.log(e)})),u.a.get("https://damp-garden-93707.herokuapp.com/getlistoflabels",{headers:{user_id:"24b456"}}).then((function(e){e.data.data.unique_label_list.forEach((function(e){var a={label:e,value:e};t.push(a)}))})).catch((function(e){console.log(e)}))}));var p=Object(n.useState)([]),f=Object(i.a)(p,2),j=f[0],g=f[1],v=Object(n.useState)([]),m=Object(i.a)(v,2),O=m[0],_=m[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add or Remove Labels "}),Object(b.jsx)(s.a,{options:e,value:j,onChange:g,labelledBy:"Select"}),Object(b.jsx)(s.a,{options:t,value:O,onChange:_,labelledBy:"Select"}),Object(b.jsx)("button",{type:"submit",onClick:function(){d(!0)},children:"Add Label"}),Object(b.jsx)("button",{type:"submit",onClick:function(){d(!1)},children:"Remove Label"}),Object(b.jsx)("button",{type:"submit",onClick:function(){u.a.get("https://damp-garden-93707.herokuapp.com/getcalllist",{headers:{user_id:"24b456"}}).then((function(e){var t=e.data;c([]),c(t.data.call_data)})).catch((function(e){console.log(e)}))},children:"Showdata"}),Object(b.jsx)(h,{final_data:o})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),o(e),c(e)}))};a(106),a(107),a(108);c.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),f()},56:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.d7f35281.chunk.js.map