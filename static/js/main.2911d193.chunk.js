(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(46)},37:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),i=t.n(r),c=(t(37),t(15)),o=t(16),s=t(19),u=t(17),m=t(20),d=t(4),p=t(8);var E=function(e){var a=e.claps,t=e.hearts;return l.a.createElement("div",{id:"home"},l.a.createElement("div",{className:"top"},l.a.createElement("div",null,"Total hearts = ",l.a.createElement("b",null,t)),l.a.createElement("div",null,"Total claps = ",l.a.createElement("b",null,a))),l.a.createElement("div",{className:"main"},"This is a mock for my future blog site"))};var g=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Story heading for FIRST blog"),l.a.createElement("p",null,"I have made the blog content like this, instead of a formated style/compontent because I want to make a dynamic and interactive blog here in the future."),l.a.createElement("div",{className:"contentButtons"},l.a.createElement("div",{className:"buttons",onClick:e.addClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4f")),l.a.createElement("div",{className:"buttons",onClick:e.decreaseClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4e"))))};var h=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Story heading for SECOND blog"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("div",{className:"contentButtons"},l.a.createElement("div",{className:"buttons",onClick:e.addClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4f")),l.a.createElement("div",{className:"buttons",onClick:e.decreaseClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4e"))))};var v=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Story heading for THIRD blog"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("div",{className:"contentButtons"},l.a.createElement("div",{className:"buttons",onClick:e.addClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4f")),l.a.createElement("div",{className:"buttons",onClick:e.decreaseClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4e"))))};var b=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Story heading for FOURTH blog"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("div",{className:"contentButtons"},l.a.createElement("div",{className:"buttons",onClick:e.addClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4f")),l.a.createElement("div",{className:"buttons",onClick:e.decreaseClaps},l.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4e"))))};var f=function(e){var a=e.claps,t=e.addClaps,n=e.decreaseClaps;return l.a.createElement("div",{id:"blogs"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"blogContainer"},l.a.createElement("ul",{className:"blogIndex"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/blogs/firstBlog"},"First Blog")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/blogs/secondBlog"},"Second Blog")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/blogs/thirdBlog"},"Third Blog")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/blogs/fourthBlog"},"Fourth Blog"))),l.a.createElement("div",{className:"blogContent"},l.a.createElement(p.a,{exact:!0,path:"/blogs/",render:function(){return l.a.createElement(g,{addClaps:t,decreaseClaps:n})}}),l.a.createElement(p.a,{path:"/blogs/firstBlog",render:function(){return l.a.createElement(g,{addClaps:t,decreaseClaps:n})}}),l.a.createElement(p.a,{path:"/blogs/secondBlog",render:function(){return l.a.createElement(h,{addClaps:t,decreaseClaps:n})}}),l.a.createElement(p.a,{path:"/blogs/thirdBlog",render:function(){return l.a.createElement(v,{addClaps:t,decreaseClaps:n})}}),l.a.createElement(p.a,{path:"/blogs/fourthBlog",render:function(){return l.a.createElement(b,{addClaps:t,decreaseClaps:n})}})))),l.a.createElement("div",null,"total claps = ",a))},C=t(31),y=t(28),k=t(29);var B=function(e){var a=Object(n.useState)(!1),t=Object(C.a)(a,2),r=t[0],i=t[1];return l.a.createElement("div",{className:"imgGalleryContainer"},l.a.createElement("img",{src:e.pics,onDoubleClick:function(a){r||(a.target.nextElementSibling.firstElementChild.style.color="red",e.addHearts(),i(!0))},alt:"",width:"300",height:"300"}),l.a.createElement("div",null,l.a.createElement(y.a,{icon:k.a}),l.a.createElement("span",null,"This is an example caption, you can double click the img to like")))},x=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.hearts,t=e.addHearts,n=this.props.pics.map(function(e,a){return l.a.createElement(B,{pics:e,addHearts:t,key:a})});return l.a.createElement("div",null,l.a.createElement("div",{style:{paddingTop:"50px",textAlign:"center"}},l.a.createElement("h1",null,"Try hovering on a pic"),l.a.createElement("h5",{style:{color:"gray"}},"Count of likes : ",a)),l.a.createElement("div",{id:"gallery"},n))}}]),a}(n.Component),N=t(18),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={pics:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?limit=20").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e){return e.download_url+"?grayscale"});e.setState({pics:t})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"App"},l.a.createElement(d.a,null,l.a.createElement("div",{id:"nav"},l.a.createElement("div",null,l.a.createElement(d.b,{to:"/Mock-React-Blog"},"MyMockBlog")),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/Mock-React-Blog"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/blogs"},"Blogs")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/gallery"},"Gallery")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:niwdla0405@gmail.com"},"Connect"))))),l.a.createElement("div",null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(E,{claps:e.props.claps,hearts:e.props.hearts})}}),l.a.createElement(p.a,{exact:!0,path:"/Mock-React-Blog",render:function(){return l.a.createElement(E,{claps:e.props.claps,hearts:e.props.hearts})}}),l.a.createElement(p.a,{exact:!0,path:"/blogs",render:function(){return l.a.createElement(f,{claps:e.props.claps,addClaps:e.props.addClaps,decreaseClaps:e.props.decreaseClaps})}}),l.a.createElement(p.a,{exact:!0,path:"/gallery",render:function(){return l.a.createElement(x,{hearts:e.props.hearts,addHearts:e.props.addHearts,pics:e.state.pics})}}))))}}]),a}(l.a.Component),O=Object(N.b)(function(e){return e},function(e){return{addHearts:function(){e({type:"addHeart"})},addClaps:function(){e({type:"addClap"})},decreaseClaps:function(){e({type:"decreaseClap"})}}})(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(12);var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"addHeart":return e+1;default:return e}};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"addClap":return e+1;case"decreaseClap":return e<=0?0:e-1;default:return e}},S=Object(j.b)({hearts:q,claps:H}),T=Object(j.c)(S,{hearts:0,claps:0});console.log(T.getState()),i.a.render(l.a.createElement(function(){return l.a.createElement(N.a,{store:T},l.a.createElement(O,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.2911d193.chunk.js.map