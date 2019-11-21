(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=t(14),l=t(2),i=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{filter:n,onChange:t}))},s=function(e,n){return r.a.createElement("div",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return n(e)}},"delete"))},m=function(e){var n=e.persons,t=e.filter,a=e.handlePersonDelete,o=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})).map((function(e){return s(e,a)}));return r.a.createElement(r.a.Fragment,null,o)},f=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=t(3),b=t.n(d),h="/api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},g=function(e){return b.a.post(h,e).then((function(e){return e.data}))},v=function(e){return b.a.delete(h+"/".concat(e))},O=function(e){return b.a.put(h+"/".concat(e.id),e).then((function(e){return e.data}))},E=function(e){var n=e.message,t=e.className;return n?r.a.createElement("div",{className:t},n):null};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],b=s[1],h=Object(a.useState)(""),j=Object(l.a)(h,2),y=j[0],P=j[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),k=N[0],D=N[1],S=Object(a.useState)({message:null,class:null}),T=Object(l.a)(S,2),F=T[0],x=T[1];return Object(a.useEffect)((function(){p().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{className:F.class,message:F.message}),r.a.createElement(i,{filter:k,handleFilterChange:function(e){D(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(f,{addPerson:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===d&&e.number===y})).length>0)alert("".concat(d," is already added to phonebook"));else{var n=t.find((function(e){return e.name===d}));if(n)return window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))?void O(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{number:y})).then((function(e){x({message:"Updated ".concat(e.name),class:"notification"}),setTimeout((function(){x({message:null,class:null})}),5e3),o(t.map((function(t){return t.id!==n.id?t:e}))),b(""),P("")})).catch((function(e){x({message:"Information of ".concat(n.name," has already been removed from server"),class:"error"}),setTimeout((function(){x({message:null,class:null})}),5e3)})):void 0;g({id:null,name:d,number:y}).then((function(e){x({message:"Added ".concat(e.name),class:"notification"}),setTimeout((function(){x({message:null,class:null})}),5e3),o(t.concat(e)),b(""),P("")})).catch((function(e){console.log(e.response.data),x({message:e.response.data.error,class:"error"}),setTimeout((function(){x({message:null,class:null})}),5e3)}))}},newName:d,handleNameChange:function(e){b(e.target.value)},newNumber:y,handleNumberChange:function(e){P(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:t,filter:k,handlePersonDelete:function(e){window.confirm("Delete ".concat(e.name," ?"))&&v(e.id).then((function(){return o(t.filter((function(n){return n.id!==e.id})))}))}}))};t(37);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.008ae541.chunk.js.map