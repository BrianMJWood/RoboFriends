(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(5),a=r.n(s),i=(r(15),r(3)),o=r.n(i),h=r(6),j=r(4),b=(r(17),r(0)),u=function(e){var t=e.name,r=e.email,n=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(n+10,"?200x200"),alt:"robot"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:r})]})]})},l=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(u,{name:e.name,email:e.email,id:e.id},e.id)}))})},d=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1 px solid black",height:"1000px"},children:e.children})},O=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots..."})})},f=r(7),p=r(8),x=r(10),v=r(9),m=function(e){Object(x.a)(r,e);var t=Object(v.a)(r);function r(){var e;return Object(f.a)(this,r),(e=t.call(this)).state={hasError:!1},e}return Object(p.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oops! We've hit an error."}):this.props.children}}]),r}(n.Component);var g=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),i=a[0],u=a[1],f=r.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(h.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"ROBOFRIENDS"}),Object(b.jsx)(O,{searchChange:function(e){u(e.target.value)}}),Object(b.jsx)(d,{children:Object(b.jsx)(m,{children:Object(b.jsx)(l,{robots:f})})})]}):Object(b.jsx)("h1",{children:"Loading"})};r(19);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.98bea1bc.chunk.js.map