(this.webpackJsonpsixth=this.webpackJsonpsixth||[]).push([[0],{10:function(e,t,a){e.exports={header:"Header_header__j4PNV",list:"Header_list__mpCu9",item:"Header_item__1vos5",link:"Header_link__2jT_E",userNavigation:"Header_userNavigation__3Hp9z"}},35:function(e,t,a){e.exports={title:"Main_title__3JnPs"}},43:function(e,t,a){},44:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(14),r=a.n(c),l=(a(43),a(3)),i=(a(44),a(16)),o=a(31),m=a(32),j=a(38),p=a(37),d=a(9),u=a.n(d),b=a.p+"static/media/user.b6ca791b.png",_=a(33),h=a.n(_),O=a(1),y=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://reqres.in/api/users?per_page=12").then((function(t){e.props.setEmployees(t.data.data)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:u.a.title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(O.jsx)("ul",{className:u.a.employees,children:this.props.employees.map((function(t){return Object(O.jsxs)("li",{className:u.a.employee,children:[Object(O.jsxs)("div",{className:u.a.header,children:[Object(O.jsx)("div",{className:u.a.avatarWrapper,children:Object(O.jsx)("img",{className:u.a.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",src:null!=t.avatar?t.avatar:b})}),Object(O.jsx)("button",{className:u.a.button,onClick:function(){return e.props.removeEmployee(t.id)},children:"remove"})]}),Object(O.jsxs)("div",{className:u.a.body,children:[Object(O.jsxs)("h3",{className:u.a.name,children:[t.first_name," ",t.last_name]}),Object(O.jsx)("p",{className:u.a.email,children:t.email})]})]},t.id)}))})]})}}]),a}(n.a.Component),x=a(36),v=a(17),E={employees:[]},f=Object(i.b)((function(e){return{employees:e.employeesPage.employees}}),(function(e){return{setEmployees:function(t){e(function(e){return{type:"SET_EMPLOYEES",employees:e}}(t))},removeEmployee:function(t){e(function(e){return{type:"REMOVE_EMPLOYEE",employeeId:e}}(t))}}}))(y),N=a(11),g=a(10),k=a.n(g);var M=function(){return Object(O.jsxs)("header",{className:k.a.header,children:[Object(O.jsx)("nav",{className:k.a.nav,children:Object(O.jsxs)("ul",{className:k.a.list,children:[Object(O.jsx)("li",{className:k.a.item,children:Object(O.jsx)(N.b,{className:k.a.link,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(O.jsx)("li",{className:k.a.item,children:Object(O.jsx)(N.b,{className:k.a.link,to:"/employees",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})})]})}),Object(O.jsx)("ul",{className:k.a.userNavigation,children:Object(O.jsx)("li",{className:k.a.item,children:Object(O.jsx)(N.b,{className:k.a.link,to:"/login",children:"\u0412\u0445\u043e\u0434"})})})]})},P=a(35),H=a.n(P);var w=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{className:H.a.title,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})})};var R=function(){return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(M,{}),Object(O.jsxs)("div",{className:"wrapper-content",children:[Object(O.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(w,{})}}),Object(O.jsx)(l.a,{path:"/employees",render:function(){return Object(O.jsx)(f,{})}})]})]})},T=a(22),Y=Object(T.a)({employeesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMPLOYEES":return Object(v.a)(Object(v.a)({},e),{},{employees:Object(x.a)(t.employees)});case"REMOVE_EMPLOYEE":var a=Object(v.a)({},e);return a.employees=a.employees.filter((function(e){return e.id!==t.employeeId})),a;default:return e}}}),C=Object(T.b)(Y);r.a.render(Object(O.jsx)(N.a,{children:Object(O.jsx)(i.a,{store:C,children:Object(O.jsx)(R,{})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={title:"Employees_title__Ze-Df",employees:"Employees_employees__B5BnK",employee:"Employees_employee__2ipji",header:"Employees_header__TwcEV",avatarWrapper:"Employees_avatarWrapper__XeRIH",avatar:"Employees_avatar__1RTr2",button:"Employees_button__3s2_Y",name:"Employees_name__2RCjc",email:"Employees_email__7dOJt"}}},[[70,1,2]]]);
//# sourceMappingURL=main.1aba6693.chunk.js.map