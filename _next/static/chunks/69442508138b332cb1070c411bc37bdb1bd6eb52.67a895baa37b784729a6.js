(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"R+Of":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createElement;e.a=function(t){return a("span",{className:"gTitle"},a("h2",null,t.title))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("a1gu"),i=n("Nsbk"),s=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=l(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var g=new Map,y=window.IntersectionObserver,b={};function w(){return f||(y?f=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){s(l,t);var e,n=(e=l,function(){var t,n=i(e);if(c()){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return o(this,t)});function l(t){var e;return r(this,l),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:m(t),as:e?m(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,s=o.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),s=s?(0,h.resolve)(c,s):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=s.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return a(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,h.resolve)(t,n);return[a,r?(0,h.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var o=p.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),l}(p.Component);e.default=k},r3VO:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("wx14"),a=n("1OyB"),o=n("vuIU"),i=n("md7G"),s=n("foSv"),c=n("Ji7U"),l=n("q1tI"),u=n.n(l),f=n("ynsN"),p=u.a.createElement;function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){return function(e){Object(c.a)(u,e);var n,l=(n=u,function(){var t,e=Object(s.a)(n);if(h()){var r=Object(s.a)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Object(i.a)(this,t)});function u(){return Object(a.a)(this,u),l.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){var e=this;return p(f.a.Consumer,null,(function(n){var a=n.data,o=n.lang,i=n.setData,s=n.setPopup;return p(t,Object(r.a)({},e.props,{data:a,lang:o,setData:i,setPopup:s}))}))}}]),u}(u.a.Component)}},wOhW:function(t,e,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),i=n("md7G"),s=n("foSv"),c=n("Ji7U"),l=n("rePB"),u=n("q1tI"),f=n.n(u),p=n("r3VO"),h=n("YFqc"),v=n.n(h),d=n("i2FJ"),m=n("rFDI"),g=n("TSYQ"),y=n.n(g),b=f.a.createElement;var w=Object(p.a)((function(t){var e=t.data,n=e.user,r=e.news,a=t.home,o=t.setPopup,i=t.lang.header;return b("header",{className:y()({hide:!a})},b("div",{className:y()({logged:!a})},b("div",{className:"getApp"},b("h5",null,i.getApp),b("span",null,b("a",{className:"ic-gPlay",href:"https://play.google.com/store/apps/details?id=io.gartic.Gartic"},b("p",null,i.android)),b("a",{className:"ic-iOS",href:"https://itunes.apple.com/us/app/gartic-io/id1270393677?mt=8"},b("p",null,i.ios)))),b("div",{className:y()("logo",{internal:!a})},b(v.a,{href:"/"},b("figure",null)),a&&b("span",null,"DRAW, GUESS, WIN")),a?b("a",{href:r.link,target:"_blank",className:"lastUpdates"},b("h5",null,i.lastUpdates),b("span",null,b("strong",null),b("p",null,r.title))):b(f.a.Fragment,null,b("div",{className:"userLogged"},n.logado?b(f.a.Fragment,null,b("div",{className:"infos"},b("span",null,n.nome),b("a",{href:"/logout",className:"ic-logout"},b("p",null,i.logout))),b(v.a,{href:"/"},b("div",null,b(d.a,{url:n.avatar})))):b(f.a.Fragment,null,b("div",{className:"infos"},b("span",null,n.nome)),b(v.a,{href:"/"},b("div",null,b(d.a,{type:n.avatar})))))),b("div",{className:"mobileActions"},b(v.a,{href:"/options"},b("div",{className:"options"},b("div",{className:"icon"}),b("span",null,i.info))),n.logado?b("a",{className:"logout",href:"/logout"},b("div",{className:"icon"}),b("span",null,i.logout)):b("div",{className:"login",onClick:function(){return o(m.a.LOGIN,{retorno:"home"})}},b("div",{className:"icon"}),b("span",null,i.login)))))})),k=f.a.createElement;var O=Object(p.a)((function(t){var e=t.setPopup,n=t.lang.footer;return k("footer",null,k("nav",null,k(v.a,{href:"/download"},k("a",{href:"/download"},n.download)),k("a",{href:"/terms.txt",target:"_blank"},n.termsService),k("a",{href:"/privacy.txt",target:"_blank"},n.privacy),k(v.a,{href:"/thanks"},k("a",{href:"/thanks"},n.specialThanks)),k("a",{onClick:function(){return e(m.a.CONTACT)}},n.contact)),k("div",{className:"follow"},k("a",{href:"https://www.facebook.com/gartic.io/",className:"ic-facebook",target:"_blank"}),k("a",{href:"https://twitter.com/garticio",className:"ic-twitter",target:"_blank"}),k("a",{href:"https://www.youtube.com/channel/UCVAzJZIgcEt31Cf8REvGuhg",className:"ic-youtube",target:"_blank"}),k("a",{href:"https://www.instagram.com/gartic.io/",className:"ic-instagram",target:"_blank"}),k("a",{href:"https://discord.gg/9TTZau3",className:"ic-discord",target:"_blank"})))})),N=f.a.createElement;function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=function(t){Object(c.a)(u,t);var e,n=(e=u,function(){var t,n=Object(s.a)(e);if(j()){var r=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function u(){var t;Object(r.a)(this,u);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return t=n.call.apply(n,[this].concat(a)),Object(l.a)(Object(o.a)(t),"state",{height:null}),Object(l.a)(Object(o.a)(t),"resize",(function(){var e=t.state.height,n=window.innerHeight-50;(!e||n>e)&&t.setState({height:n})})),t}return Object(a.a)(u,[{key:"componentDidMount",value:function(){this.props.data.mobile&&this.props.fixed&&(this.resize(),window.addEventListener("resize",this.resize,!1),this._resizeApplied=!0)}},{key:"componentWillUnmount",value:function(){this._resizeApplied&&window.removeEventListener("resize",this.resize,!1)}},{key:"render",value:function(){var t=this.state.height;return N("div",{className:"screenSystem",style:{height:t?t+"px":""}},N("div",{id:"screens"},N(w,this.props),N("div",null,this.props.children),N(O,null)))}}]),u}(f.a.Component);e.a=Object(p.a)(R)}}]);