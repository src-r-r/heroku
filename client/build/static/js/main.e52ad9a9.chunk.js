(this["webpackJsonpplugsmile-page"]=this["webpackJsonpplugsmile-page"]||[]).push([[0],{47:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.d2752c18.png"},63:function(e,t,a){e.exports=a(99)},65:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/pattaya.f7d690bc.jpg"},95:function(e,t){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=(a(65),a(21)),l=a(24),o=a(25),s=a(11),c=a(12),u=a(15),m=a(13),p=a(14),h=(a(47),a(18)),g=a(53),d=a.n(g),v=(a(73),a(16)),b=a(9),f="RESERVE_FLAG",y="FALSE_FLAG",O="NO_DROP_DOWN",j="SIGN_UP_REQUEST",E="GET_ERRORS";function k(e){return{type:f,payload:e}}function N(e){return{type:y,payload:e}}function S(e){return{type:O,payload:e}}function C(e){return{type:j,payload:e}}function F(e){return{type:E,data:e}}var w=a(33),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onReserve=a.onReserve.bind(Object(v.a)(a)),a.state={clicked:!1,linkKey:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({linkKey:this.props.linkKey,clicked:this.props.clicked})}},{key:"componentWillReceiveProps",value:function(e){e.compareKey===this.state.linkKey?this.setState({clicked:!0}):this.setState({clicked:!1}),!1===e.falseFlag.flag&&this.setState({clicked:!1})}},{key:"onReserve",value:function(){var e={title:this.state.linkKey,flag:!1};this.props.reserveFlag(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.clicked?r.a.createElement(w.e,{onClick:this.onReserve,className:"nav-active-btn"},this.props.title):r.a.createElement(w.e,{onClick:this.onReserve,className:"nav-btn"},this.props.title))}}]),t}(n.Component),I=Object(h.b)((function(e){return{falseFlag:e.falseFlag}}),(function(e){return Object(b.bindActionCreators)({reserveFlag:k},e)}))(L),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={compareKey:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({compareKey:e.reserveTitle.title})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar-wrapper"},r.a.createElement("img",{src:d.a,className:"logo",alt:"logo",title:"logo"}),r.a.createElement(I,{title:"Sign Up",linkKey:"signup",compareKey:this.state.compareKey}),r.a.createElement(I,{title:"Log In",linkKey:"login",compareKey:this.state.compareKey}))}}]),t}(n.Component),R=Object(h.b)((function(e){return{reserveTitle:e.reserveFlag}}))(U),P=a(29),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onSignUp=a.onSignUp.bind(Object(v.a)(a)),a.onChange=a.onChange.bind(Object(v.a)(a)),a.fadeOut=a.fadeOut.bind(Object(v.a)(a)),a.state={name:"",phone:"",city:"",country:"",modal:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onSignUp",value:function(e){e.preventDefault();var t={name:this.state.name,phone:this.state.phone,city:this.state.city,country:this.state.country};if(""===t.name||""===t.phone||""===t.city||""===t.country)return this.props.errors("Please Enter Your Data"),!1;this.props.signUpRequest(t),this.setState({modal:!this.state.modal})}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value)),this.props.errors("")}},{key:"fadeOut",value:function(){var e=this;setTimeout((function(){e.setState({modal:!1})}),3e3)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.onSignUp,className:"sign-form"},r.a.createElement("input",{style:{margin:0},className:"common-input",value:this.state.name,onChange:this.onChange,name:"name",placeholder:"Full Name"}),""===this.state.name?r.a.createElement("div",{className:"place-star FullName"},"*"):r.a.createElement("div",{className:"hidden"}),r.a.createElement("input",{className:"common-input",value:this.state.phone,onChange:this.onChange,name:"phone",placeholder:"Phone Number"}),""===this.state.phone?r.a.createElement("div",{className:"place-star Phone"},"*"):r.a.createElement("div",{className:"hidden"}),r.a.createElement("input",{className:"common-input",value:this.state.country,onChange:this.onChange,name:"country",placeholder:"Your Country"}),""===this.state.country?r.a.createElement("div",{className:"place-star Country"},"*"):r.a.createElement("div",{className:"hidden"}),r.a.createElement("input",{className:"common-input",value:this.state.city,onChange:this.onChange,name:"city",placeholder:"Your City"}),""===this.state.city?r.a.createElement("div",{className:"place-star City"},"*"):r.a.createElement("div",{className:"hidden"}),r.a.createElement("button",{className:"common-btn"},"SIGN UP")),this.state.modal?r.a.createElement(w.f,{isOpen:this.state.modal,className:"success-modal"},r.a.createElement("span",null,"THANK YOU FOR JOINING PLUGsmile, Please use our Amazon Alexa Skill to Get Started"),this.fadeOut()):r.a.createElement("div",{className:"hidden"}))}}]),t}(n.Component),K=Object(h.b)(null,(function(e){return Object(b.bindActionCreators)({signUpRequest:C,errors:F},e)}))(T),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onLogIn=a.onLogIn.bind(Object(v.a)(a)),a.onChange=a.onChange.bind(Object(v.a)(a)),a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"onLogIn",value:function(e){e.preventDefault(),alert("Login")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onLogIn},r.a.createElement("input",{className:"common-input",style:{margin:0},value:this.state.email,onChange:this.onChange,placeholder:"Enter Email",name:"email"}),r.a.createElement("input",{className:"common-input",value:this.state.password,onChange:this.onChange,placeholder:"Enter Password",name:"password"}),r.a.createElement("button",{className:"common-btn"},"LOG IN"))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onLogIn=a.onLogIn.bind(Object(v.a)(a)),a.onSignUp=a.onSignUp.bind(Object(v.a)(a)),a.state={visible:!0,title:"signup"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){""===this.state.title&&this.setState({visible:!0,title:e.reserveTitle.title}),e.reserveTitle.title===this.state.title?!0===e.reserveTitle.flag?this.setState({visible:!0,title:e.reserveTitle.title}):(this.setState({visible:!this.state.visible,title:""}),this.props.falseFlag(!1)):(this.setState({visible:!0,title:e.reserveTitle.title}),this.props.falseFlag(!0))}},{key:"onLogIn",value:function(){this.setState({title:"login"});this.props.noDropDownFlag({flag:!0,title:"login"})}},{key:"onSignUp",value:function(){this.setState({title:"signup"});this.props.noDropDownFlag({flag:!0,title:"signup"})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.visible?r.a.createElement("div",{className:"MainBody"},r.a.createElement("div",{style:{display:"flex"}},"login"===this.state.title?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{name:"signup",onClick:this.onSignUp,className:"inactive-btn"},"Sign Up"),r.a.createElement("div",{name:"login",onClick:this.onLogIn,className:"active-btn"},"Log In")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{name:"signup",onClick:this.onSignUp,className:"active-btn"},"Sign Up"),r.a.createElement("div",{name:"login",onClick:this.onLogIn,className:"inactive-btn"},"Log In"))),"login"===this.state.title?r.a.createElement("h1",null,"Log In"):r.a.createElement("h1",null,"Sign Up for free"),"login"===this.state.title?r.a.createElement(D,null):r.a.createElement(K,null)):r.a.createElement("div",{className:"hidden"}))}}]),t}(n.Component),A=Object(h.b)((function(e){return{reserveTitle:e.reserveFlag}}),(function(e){return Object(b.bindActionCreators)({noDropDownFlag:S,falseFlag:N},e)}))(x),G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slide-left-part"},r.a.createElement("h1",{className:"top-title"},"PLUGsmile for Anytime, Anywhere Cash Withdrawal and Deposit service from and to your Bank account!"),r.a.createElement("h1",{className:"left-title"},"Never look for an ATM again!"),r.a.createElement("h1",{className:"right-title"},"Local Currency delivered",r.a.createElement("br",null),"to your Hotel room!"))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={error:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("error"),console.log(e),this.setState({error:e.errors.error})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,""!==this.state.error?r.a.createElement("div",{className:"AlertBox"},this.state.error):r.a.createElement("div",{className:"hidden"}))}}]),t}(n.Component),_=Object(h.b)((function(e){return{errors:e.errors}}))(W),B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LandingPage"},r.a.createElement(R,null),r.a.createElement(A,null),r.a.createElement(G,null),r.a.createElement(_,null))}}]),t}(n.Component);var M=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{path:"/",component:B}))},Y=a(62),J=a(58),q=a(59),H=a(36),z=a(60),Q=a.n(z),V=a(26),X={title:"",flag:!1},Z={flag:!0},$={error:""},ee={key:"root",storage:Q.a,whitelist:["user","theme","compareBoardId","templateType"]},te=Object(b.combineReducers)({reserveFlag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case O:return Object(V.a)({},e,{title:t.payload.title,flag:t.payload.flag});default:return e}},falseFlag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(V.a)({},e,{flag:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return console.log("reducer"),console.log(t.payload),Object(V.a)({},e,{error:t.data});default:return e}}}),ae=Object(H.a)(ee,te),ne=a(28),re=a.n(ne),ie=a(37),le=(a(95),re.a.mark(ce)),oe=re.a.mark(ue),se=re.a.mark(me);function ce(e){var t,a,n,r;return re.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(r in i.prev=0,t=e.payload,console.log(e.payload),"https://srcrrherokuangular.herokuapp.com/register",a=new FormData,n=t)a.append(r,n[r]);fetch("https://srcrrherokuangular.herokuapp.com/register",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("username","username")})).catch((function(e){return console.log(e)})),i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(0),i.next=14,Object(ie.b)(F());case 14:case"end":return i.stop()}}),le,null,[[0,10]])}function ue(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.c)(j,ce);case 2:case"end":return e.stop()}}),oe)}function me(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([ue()]);case 2:case"end":return e.stop()}}),se)}var pe=Object(Y.a)(),he=Object(J.createLogger)(),ge=Object(b.applyMiddleware)(pe,he),de=Object(b.createStore)(ae,Object(q.composeWithDevTools)(ge)),ve=Object(H.b)(de);pe.run(me);var be=a(61);a(96),a(97),a(98);Object(i.render)(r.a.createElement(h.a,{store:de},r.a.createElement(l.a,null,r.a.createElement(be.a,{persistor:ve},r.a.createElement(M,null)))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e52ad9a9.chunk.js.map