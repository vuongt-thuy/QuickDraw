(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RnYt:function(t,e,n){"use strict";var a=n("rePB");e.a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name";return(t.find((function(t){return t.id==e}))||Object(a.a)({},n,""))[n]}},ZCeM:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),r=n.n(a),c=n("1OyB"),i=n("vuIU"),s=n("md7G"),l=n("foSv"),o=n("Ji7U"),u=n("q1tI"),p=n.n(u),f=n("YFqc"),m=n.n(f),g=n("8Kt/"),h=n.n(g),d=n("wOhW"),b=n("pvp9"),v=n("R+Of"),k=n("5cDc"),w=n("vDqi"),y=n.n(w),N=n("RnYt"),j=p.a.createElement;function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var q=function(t){Object(o.a)(a,t);var e,n=(e=a,function(){var t,n=Object(l.a)(e);if(O()){var a=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(s.a)(this,t)});function a(){return Object(c.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.thanksList,n=t.data.languages,a=this.props.lang.thanks;return j(d.a,null,j(h.a,null,j("title",null,a.pageTitle),j("meta",{name:"description",content:a.description})),j("div",{className:"title"},j("div",null,j(m.a,{href:this.props.data.mobile?"/options":"/"},j("button",{className:"back"}))),j(v.a,{title:a.title}),j("div",null)),j("div",{className:"content thanks"},j("div",{className:"left"},j("span",null,j("h3",null,a.subtitle),j("figure",null),j("p",null,a.text)),j("a",{href:"https://crowdin.com/project/garticio",target:"_blank",className:"btYellowBig ic-copylink"},j("strong",null,a.button))),j("div",{className:"right bg"},j(k.a,{margin:5},e.map((function(t){return t.link?j("a",{href:t.link},j("div",{className:"item",key:t.name},j("figure",{className:"lang-"+Object(N.a)(n,t.language,"iso")}),j("p",{className:"nick"},t.name),j("p",{className:"lang"},Object(N.a)(n,t.language)))):j("div",{className:"item",key:t.name},j("figure",{className:"lang-"+Object(N.a)(n,t.language,"iso")}),j("p",{className:"nick"},t.name),j("p",{className:"lang"},Object(N.a)(n,t.language)))})))),this.props.data.mobile&&j("a",{href:"https://crowdin.com/project/garticio",target:"_blank",className:"btYellowBig ic-copylink"},j("strong",null,a.button))))}}],[{key:"getInitialProps",value:function(t){var e,n,a,c;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=t.req,n=t.query,t.data,a=[],!e){i.next=6;break}a=n.thanks,i.next=10;break;case 6:return i.next=8,r.a.awrap(y.a.get("/req/thanks",{responseType:"json"}));case 8:c=i.sent,a=c.data;case 10:return i.abrupt("return",{thanksList:a});case 11:case"end":return i.stop()}}),null,null,null,Promise)}}]),a}(p.a.Component);e.default=Object(b.a)(q)},e7Dq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thanks",function(){return n("ZCeM")}])}},[["e7Dq",0,2,5,1,4,3,6]]]);