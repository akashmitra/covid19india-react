(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{171:function(e,t,a){e.exports=a(199)},176:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(100),c=a.n(l),s=a(26),i=a(20),o=(a(176),a(2)),d=a(218),m=a(219),u=a(24),f=a.n(u),h=a(220),v=a(221),p=a(202);var g=function(e){var t=Object(r.useState)(e.state),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){c(e.state)}),[e.state]),n.a.createElement("tr",null,n.a.createElement("td",{style:{fontWeight:600}},l.state),n.a.createElement("td",null,l.confirmed),n.a.createElement("td",{style:{color:0===parseInt(l.active)?"#B5B5B5":"inherit"}},0===parseInt(l.active)?"-":l.active),n.a.createElement("td",{style:{color:0===parseInt(l.recovered)?"#B5B5B5":"inherit"}},0===parseInt(l.recovered)?"-":l.recovered),n.a.createElement("td",{style:{color:0===parseInt(l.deaths)?"#B5B5B5":"inherit"}},0===parseInt(l.deaths)?"-":l.deaths))};var E=function(e){var t=Object(r.useState)(e.states),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(r.useState)({sortColumn:"confirmed",isAscending:!1}),f=Object(o.a)(u,2),h=f[0],v=f[1];Object(r.useEffect)((function(){!0===e.summary?c(e.states.slice(0,9)):c(e.states)}),[e.states]),Object(r.useEffect)((function(){if(l.length>0){var t=0;e.states.map((function(a,r){0!==r&&a.confirmed>0&&(t+=1),r===e.states.length-1&&m(t)}))}}),[l.length]);var E=function(e,t){var a=e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase();v({sortColumn:a,isAscending:h.sortColumn==a?!h.isAscending:"state"===h.sortColumn})};return function(e,t){var a=l.splice(0,1);l.sort((function(e,t){var a=h.sortColumn,r=e[a],n=t[a];return"state"!=a&&(r=parseInt(e[a]),n=parseInt(t[a])),h.isAscending?r>n?1:-1:r>n?-1:1})),l.unshift(a[0])}(),n.a.createElement("table",{className:"table fadeInUp",style:{animationDelay:"1s"}},n.a.createElement("h5",{className:"affected-count"},d," States/UTS Affected"),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"state-heading",onClick:function(e){return E(e)}},n.a.createElement("div",{className:"heading-content"},n.a.createElement("abbr",{title:"State"},"State/UT"),n.a.createElement("div",{style:{display:"state"===h.sortColumn?"initial":"none"}},n.a.createElement(p.a,null)))),n.a.createElement("th",{onClick:function(e){return E(e)}},n.a.createElement("div",{className:"heading-content"},n.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-cherry":""),title:"Confirmed"},window.innerWidth<=769?window.innerWidth<=375?"C":"Cnfrmd":"Confirmed"),n.a.createElement("div",{style:{display:"confirmed"===h.sortColumn?"initial":"none"}},n.a.createElement(p.a,null)))),n.a.createElement("th",{onClick:function(e){return E(e)}},n.a.createElement("div",{className:"heading-content"},n.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-blue":""),title:"Active"},window.innerWidth<=769?window.innerWidth<=375?"A":"Actv":"Active"),n.a.createElement("div",{style:{display:"active"===h.sortColumn?"initial":"none"}},n.a.createElement(p.a,null)))),n.a.createElement("th",{onClick:function(e){return E(e)}},n.a.createElement("div",{className:"heading-content"},n.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-green":""),title:"Recovered"},window.innerWidth<=769?window.innerWidth<=375?"R":"Rcvrd":"Recovered"),n.a.createElement("div",{className:"recovered"===h.sortColumn?"sort-black":""}),n.a.createElement("div",{style:{display:"recovered"===h.sortColumn?"initial":"none"}},n.a.createElement(p.a,null)))),n.a.createElement("th",{onClick:function(e){return E(e)}},n.a.createElement("div",{className:"heading-content"},n.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-gray":""),title:"Deaths"},window.innerWidth<=769?window.innerWidth<=375?"D":"DCSD":"Deaths"),n.a.createElement("div",{style:{display:"deaths"===h.sortColumn?"initial":"none"}},n.a.createElement(p.a,null)))))),n.a.createElement("tbody",null,l.map((function(e,t){if(0!==t&&e.confirmed>0)return n.a.createElement(g,{key:t,state:e})})),l.length>1&&!1===e.summary&&n.a.createElement(g,{key:0,state:l[0],total:!0})))};var y=function(e){var t=Object(r.useState)(e.data),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(r.useState)(0),f=Object(o.a)(u,2),h=f[0],v=f[1],p=Object(r.useState)(0),g=Object(o.a)(p,2),E=g[0],y=g[1],b=Object(r.useState)(0),w=Object(o.a)(b,2),j=w[0],N=w[1];Object(r.useEffect)((function(){c(e.data),O()}));var O=function(){var e=0,t=0,a=0,r=0;l.map((function(n,l){0!==l&&(e+=parseInt(n.confirmed),t+=parseInt(n.active),a+=parseInt(n.recovered),r+=parseInt(n.deaths))})),m(e),v(t),y(a),N(r)};return n.a.createElement("div",{className:"Level fadeInUp",style:{animationDelay:"0.8s"}},n.a.createElement("div",{className:"level-item is-cherry"},n.a.createElement("h5",null,"Confirmed"),n.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta>=0?"+"+e.deltas.confirmeddelta:e.deltas.confirmeddelta:"","]"),n.a.createElement("h1",null,d," ")),n.a.createElement("div",{className:"level-item is-blue"},n.a.createElement("h5",{className:"heading"},"Active"),n.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta>=0?"+"+(e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta).toString():e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta:"","]"),n.a.createElement("h1",{className:"title has-text-info"},h)),n.a.createElement("div",{className:"level-item is-green"},n.a.createElement("h5",{className:"heading"},"Recovered"),n.a.createElement("h4",null,"[",e.deltas?e.deltas.recovereddelta>=0?"+"+e.deltas.recovereddelta:e.deltas.recovereddelta:"","]"),n.a.createElement("h1",{className:"title has-text-success"},E," ")),n.a.createElement("div",{className:"level-item is-gray"},n.a.createElement("h5",{className:"heading"},"Deceased"),n.a.createElement("h4",null,"[",e.deltas?e.deltas.deceaseddelta>=0?"+"+e.deltas.deceaseddelta:e.deltas.deceaseddelta:"","]"),n.a.createElement("h1",{className:"title has-text-grey"},j)))},b=a(1),w=a(104),j=a(43);var N=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),l=(a[0],a[1],Object(r.useState)(e.states)),c=Object(o.a)(l,2),s=c[0],i=c[1],d=Object(r.useState)({}),m=Object(o.a)(d,2),u=m[0],f=m[1],h=Object(r.useState)({}),v=Object(o.a)(h,2),p=v[0],g=v[1],E=Object(r.useState)(1),y=Object(o.a)(E,2),N=(y[0],y[1]),O=Object(r.useRef)(null);Object(r.useEffect)((function(){e.states.length>1&&O.current&&(k(O.current),f(s[1]))}),[p]),Object(r.useEffect)((function(){if(s.length>1){for(var e=0,t=parseInt(s[1].confirmed),a=parseInt(s[1].confirmed),r=1;r<s.length;r++)e+=parseInt(s[r].confirmed),parseInt(s[r].confirmed)>parseInt(t)&&(t=parseInt(s[r].confirmed)),parseInt(s[r].confirmed)<parseInt(a)&&(a=parseInt(s[r].confirmed));g({total:e,maxConfirmed:t,minConfirmed:a})}}),[s.length]),Object(r.useEffect)((function(){i(e.states)}),[e.states]);var k=function(e){var t=b.o(e),a=+t.attr("width"),r=+t.attr("height"),n=b.k(),l=b.f().center([78.9,19]).scale(1e3).translate([a/2,r/2]),c=b.g(l);var i=b.m().domain([0,20]).range(["rgb(255, 245, 240)","rgb(171, 16, 23)"]);t.append("g").attr("class","legendLinear").attr("transform","translate(1, 375)");var d=Object(w.a)().shapeWidth(50).cells(6).titleWidth(3).labels((function(e){var t=e.i,a=e.genLength,r=e.generatedLabels;if(e.labelDelimiter,console.log(r),0===t){var n=r[t];return"Less than ".concat(n)}if(t===a-1){r[t][1];return"".concat(20," or more")}var l=r[t],c=r[t+1];return"".concat(l," - ").concat(c)})).title("Percentage Distribution of Total Confirmed Cases").orient("vertical").scale(i);t.select(".legendLinear").call(d);var m=[b.i("/india.json")];Promise.all(m).then((function(e){var a=Object(o.a)(e,1)[0];s.map((function(e,t){n.set(e.state.toLowerCase(),e.confirmed)})),t.append("g").attr("class","states").selectAll("path").data(j.a(a,a.objects.india).features).enter().append("path").attr("fill",(function(e){var t=n.get(e.properties.ST_NM.toLowerCase());return b.h(e.confirmed=.05*(t>0)+t/p.maxConfirmed*.8)})).attr("d",c).attr("pointer-events","all").on("mouseover",(function(e){var t;t=e.properties.ST_NM,s.map((function(e,a){e.state.toLowerCase()===t.toLowerCase()&&(f(e),N(a))})),b.o(b.d.target).attr("fill","#424242")})).on("mouseout",(function(e){var t=n.get(e.properties.ST_NM.toLowerCase());b.o(b.d.target).attr("fill",b.h(e.confirmed=.05*(t>0)+t/p.maxConfirmed*.8))})).style("cursor","pointer").append("title").text((function(e){return parseFloat(n.get(e.properties.ST_NM.toLowerCase())/p.total*100).toFixed(2)+"% from "+x(e.properties.ST_NM)})),t.append("path").attr("stroke","#ff073a20").attr("fill","none").attr("stroke-width",2).attr("d",c(j.b(a,a.objects.india)))}))},x=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};return n.a.createElement("div",{className:"ChoroplethMap fadeInUp",style:{animationDelay:"1.2s"}},n.a.createElement("h1",{className:"header"},"Map"),n.a.createElement("h6",{className:"header"},"Hover over a state for more details"),n.a.createElement("div",{className:"svg-parent"},n.a.createElement("svg",{id:"chart",width:"650",height:window.innerWidth<=479?650:750,viewBox:"0 0 650 ".concat(window.innerWidth<=479?650:750),preserveAspectRatio:"xMidYMid meet",ref:O})),n.a.createElement("div",{className:"map-stats"},n.a.createElement("h4",null,u.state),n.a.createElement("div",{className:"stats"},n.a.createElement("h5",null,"Confirmed"),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h1",null,u.confirmed),n.a.createElement("h6",null))),n.a.createElement("div",{className:"stats is-blue"},n.a.createElement("h5",null,"Active"),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h1",null,u.active),n.a.createElement("h6",null))),n.a.createElement("div",{className:"stats is-green"},n.a.createElement("h5",null,"Recovered"),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h1",null,u.recovered),n.a.createElement("h6",null))),n.a.createElement("div",{className:"stats is-gray"},n.a.createElement("h5",null,"Deceased"),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h1",null,u.deaths),n.a.createElement("h6",null)))))};var O=function(e){var t=Object(r.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)({}),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(r.useState)(10),f=Object(o.a)(u,2),h=f[0],v=f[1],p=Object(r.useState)(e.mode),g=Object(o.a)(p,2),E=g[0],y=g[1],w=Object(r.useState)(-1),j=Object(o.a)(w,2),N=j[0],O=j[1],k=Object(r.useRef)(null),x=Object(r.useRef)(null),D=Object(r.useRef)(null),C=Object(r.useRef)(null),S=Object(r.useRef)(null),I=Object(r.useRef)(null);Object(r.useEffect)((function(){e.timeseries.length>1&&c(e.timeseries.slice(0,e.timeseries.length-1))}),[e.timeseries.length]),Object(r.useEffect)((function(){l.length>1&&M(l)}),[l.length]),Object(r.useEffect)((function(){y(e.mode),O(N+1)}),[e.mode]),Object(r.useEffect)((function(){N>0&&A(M)}),[N]);var A=function(){for(var e=[k,x,D,C,S,I],t=0;t<=e.length;t++){if(t===e.length)return void M(l);b.o(e[t].current).selectAll("*").remove()}},M=function(e){var t=e;m(e[e.length-1]),v(e.length-1);var a=b.o(k.current),r=0,n=20,l=650-n-20,c=100-r-10,s=b.o(x.current),i=b.o(D.current),o=b.o(C.current),d=b.o(S.current),u=b.o(I.current),f=b.n().domain(b.e(t,(function(e){return new Date(e.date+"2020")}))).range([n,l]);a.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f)),s.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f)),i.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f)),o.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f)),d.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f)),u.append("g").attr("transform","translate(0,"+c+")").attr("class","axis").call(b.a(f));var h=b.m().domain([0,b.l(t,(function(e){return+e.totalconfirmed}))]).range([c,r]),p=b.m().domain([0,b.l(t,(function(e){return+e.totalrecovered}))]).range([c,r]),g=b.m().domain([0,b.l(t,(function(e){return+e.totaldeceased}))]).range([c,r]),y=b.m().domain([0,b.l(t,(function(e){return+e.dailyconfirmed}))]).range([c,r]),w=b.m().domain([0,b.l(t,(function(e){return+e.dailyrecovered}))]).range([c,r]),j=b.m().domain([0,b.l(t,(function(e){return+e.dailydeceased}))]).range([c,r]);a.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(h).tickFormat((function(e){if(e%100!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),s.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(E?h:p).tickFormat((function(e){if(e%4!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),i.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(E?h:g).tickFormat((function(e){if(e%100!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),o.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(E?h:y).tickFormat((function(e){if(e%100!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),d.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(E?h:w).tickFormat((function(e){if(e%2===0&&e%100!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),u.append("g").attr("transform","translate(".concat(l,", ",0,")")).attr("class","axis").call(b.b(E?h:j).tickFormat((function(e){if(Math.floor(e)===e&&e%100!==0)return e}))).selectAll(".tick text").attr("transform","translate(40,0)"),a.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return h(e.totalconfirmed)-5})).curve(b.c)),a.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return h(e.totalconfirmed)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")})),s.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return E?h(e.totalrecovered)-5:p(e.totalrecovered)-5})).curve(b.c)),s.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?h(e.totalrecovered)-5:p(e.totalrecovered)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")})),i.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return E?h(e.totaldeceased):g(e.totaldeceased)-5})).curve(b.c)),i.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?h(e.totaldeceased)-5:g(e.totaldeceased)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")})),o.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return E?h(e.dailyconfirmed)-5:y(e.dailyconfirmed)-5})).curve(b.c)),o.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?h(e.dailyconfirmed)-5:y(e.dailyconfirmed)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")})),d.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return E?h(e.dailyrecovered)-5:w(e.dailyrecovered)-5})).curve(b.c)),d.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?h(e.dailyrecovered)-5:w(e.dailyrecovered)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")})),u.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return f(new Date(e.date+"2020"))})).y((function(e){return E?h(e.dailydeceased)-5:j(e.dailydeceased)-5})).curve(b.c)),u.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return f(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?h(e.dailydeceased)-5:j(e.dailydeceased)-5})).on("mouseover",(function(e,t){b.o(b.d.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","3")}))};return n.a.createElement("div",{className:"TimeSeries-Parent fadeInUp",style:{animationDelay:"1.7s"}},n.a.createElement("div",{className:"timeseries",style:{display:1===e.type?"flex":"none"}},n.a.createElement("div",{className:"svg-parent"},n.a.createElement("div",{className:"stats"},n.a.createElement("h5",null,"Confirmed ",d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.totalconfirmed),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].totalconfirmed-l[h-1].totalconfirmed>=0?"+"+(l[h].totalconfirmed-l[h-1].totalconfirmed):l[h].totalconfirmed-l[h-1].totalconfirmed:""))),n.a.createElement("svg",{ref:k,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-green"},n.a.createElement("div",{className:"stats is-green"},n.a.createElement("h5",null,"Recovered ",d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.totalrecovered),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].totalrecovered-l[h-1].totalrecovered>=0?"+"+(l[h].totalrecovered-l[h-1].totalrecovered):l[h].totalrecovered-l[h-1].totalrecovered:""))),n.a.createElement("svg",{ref:x,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-gray"},n.a.createElement("div",{className:"stats is-gray"},n.a.createElement("h5",null,"Deceased ",n.a.createElement("br",null),d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.totaldeceased),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].totaldeceased-l[h-1].totaldeceased>=0?"+"+(l[h].totaldeceased-l[h-1].totaldeceased):l[h].totaldeceased-l[h-1].totaldeceased:""))),n.a.createElement("svg",{ref:D,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"}))),n.a.createElement("div",{className:"timeseries",style:{display:2===e.type?"flex":"none"}},n.a.createElement("div",{className:"svg-parent"},n.a.createElement("div",{className:"stats"},n.a.createElement("h5",null,"Confirmed ",d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.dailyconfirmed),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].dailyconfirmed-l[h-1].dailyconfirmed>=0?"+"+(l[h].dailyconfirmed-l[h-1].dailyconfirmed):l[h].dailyconfirmed-l[h-1].dailyconfirmed:""))),n.a.createElement("svg",{ref:C,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-green"},n.a.createElement("div",{className:"stats is-green"},n.a.createElement("h5",null,"Recovered ",d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.dailyrecovered),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].dailyrecovered-l[h-1].dailyrecovered>=0?"+"+(l[h].dailyrecovered-l[h-1].dailyrecovered):l[h].dailyrecovered-l[h-1].dailyrecovered:""))),n.a.createElement("svg",{ref:S,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-gray"},n.a.createElement("div",{className:"stats is-gray"},n.a.createElement("h5",null,"Deceased ",n.a.createElement("br",null),d.date),n.a.createElement("div",{className:"stats-bottom"},n.a.createElement("h2",null,d.dailydeceased),n.a.createElement("h6",null,l.length>0&&0!==h?l[h].dailydeceased-l[h-1].dailydeceased>=0?"+"+(l[h].dailydeceased-l[h-1].dailydeceased):l[h].dailydeceased-l[h-1].dailydeceased:""))),n.a.createElement("svg",{ref:I,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"}))))};var k=function(e){var t=Object(r.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)({}),i=Object(o.a)(s,2),d=(i[0],i[1]),m=Object(r.useRef)(null),u=Object(r.useRef)(null),f=Object(r.useRef)(null),h=Object(r.useRef)(null);Object(r.useEffect)((function(){e.timeseries.length>1&&c(e.timeseries.slice(0,e.timeseries.length-2))}),[e.timeseries.length]),Object(r.useEffect)((function(){l.length>1&&function(t){var a=t;d(a[a.length-1]);var r=b.n().domain(b.e(a.slice(a.length-10,a.length-1),(function(e){return new Date(e.date+"2020")}))).range([0,p]),n=b.m().domain([0,b.l(a,(function(e){return+e.dailyconfirmed}))]).range([g,0]),l=(b.m().domain([0,b.l(a,(function(e){return+e.dailyconfirmed}))]).range([g,0]),b.m().domain([0,b.l(a,(function(e){return+e.dailyrecovered}))]).range([g,0]),b.m().domain([0,b.l(a,(function(e){return+e.dailydeceased}))]).range([g,0]),v.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.j().x((function(e){return r(new Date(e.date+"2020"))})).y((function(e,t){return n(e.dailyconfirmed)})).curve(b.c))),c=l.node().getTotalLength();l.attr("stroke-dasharray",c+" "+c).attr("stroke-dashoffset",c).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),v.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return r(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailyconfirmed)})).on("mouseover",(function(e){b.o(b.d.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var s=E.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#007bff99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return r(new Date(e.date+"2020"))})).y((function(e,t){if(0===t){a[a.length-9].dailyconfirmed,a[a.length-9].dailyrecovered,a[a.length-9].dailydeceased,a[a.length-10].dailyconfirmed,a[a.length-10].dailyrecovered,a[a.length-10].dailydeceased;return n(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)}a[a.length-9+t].dailyconfirmed,a[a.length-9+t].dailyrecovered,a[a.length-9+t].dailydeceased,a[a.length-10+t].dailyconfirmed,a[a.length-10+t].dailyrecovered,a[a.length-10+t].dailydeceased;return n(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).curve(b.c)),i=s.node().getTotalLength();s.attr("stroke-dasharray",i+" "+i).attr("stroke-dashoffset",i).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),E.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#007bff").attr("stroke","#007bff").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return r(new Date(e.date+"2020"))})).attr("cy",(function(e){a[a.length-1].dailyconfirmed,a[a.length-1].dailyrecovered,a[a.length-1].dailydeceased,a[a.length-2].dailyconfirmed,a[a.length-2].dailyrecovered,a[a.length-2].dailydeceased;return n(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).on("mouseover",(function(e){b.o(b.d.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var o=y.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.j().x((function(e){return r(new Date(e.date+"2020"))})).y((function(e,t){return n(e.dailyrecovered)})).curve(b.c)),m=l.node().getTotalLength();o.attr("stroke-dasharray",m+" "+m).attr("stroke-dashoffset",m).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),y.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return r(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailyrecovered)})).on("mouseover",(function(e){b.o(b.d.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var u=w.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return r(new Date(e.date+"2020"))})).y((function(e,t){return n(e.dailydeceased)})).curve(b.c)),f=u.node().getTotalLength();u.attr("stroke-dasharray",f+" "+f).attr("stroke-dashoffset",f).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),w.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return r(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailydeceased)})).on("mouseover",(function(e){b.o(b.d.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.o(b.d.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1)}(l)}),[l.length]);var v=b.o(m.current),p=100-0-5,g=100-30-30,E=b.o(u.current),y=b.o(f.current),w=b.o(h.current);return n.a.createElement("div",{className:"Minigraph"},n.a.createElement("div",{className:"svg-parent fadeInUp",style:{animationDelay:"0.6s"}},n.a.createElement("svg",{ref:m,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-blue fadeInUp",style:{animationDelay:"0.7s"}},n.a.createElement("svg",{ref:u,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-green fadeInUp",style:{animationDelay:"0.8s"}},n.a.createElement("svg",{ref:f,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),n.a.createElement("div",{className:"svg-parent is-gray fadeInUp",style:{animationDelay:"0.9s"}},n.a.createElement("svg",{ref:h,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})))};var x=function(e){var t=Object(r.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],p=i[1],g=Object(r.useState)(1),b=Object(o.a)(g,2),w=b[0],j=b[1],x=Object(r.useState)(""),D=Object(o.a)(x,2),C=D[0],S=D[1],I=Object(r.useState)([]),A=Object(o.a)(I,2),M=A[0],R=A[1],L=Object(r.useState)([]),U=Object(o.a)(L,2),B=U[0],W=U[1],T=Object(r.useState)(!0),H=Object(o.a)(T,2),_=H[0],Y=H[1];Object(r.useEffect)((function(){!1===u&&F()}),[u]);var F=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){c(e.data.statewise),R(e.data.cases_time_series),S(e.data.statewise[0].lastupdatedtime.slice(0,15)+e.data.statewise[0].lastupdatedtime.slice(18)),W(e.data.key_values[0]),p(!0)})).catch((function(e){console.log(e)}))};return n.a.createElement("div",{className:"Home"},n.a.createElement("div",{className:"home-left"},n.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},n.a.createElement("h1",null,"India COVID-19 Tracker"),n.a.createElement("div",{className:"header-mid"},n.a.createElement("a",{className:"button",href:"https://bit.ly/patientdb",target:"_noblank"},n.a.createElement(d.a,null),n.a.createElement("span",null,"Crowdsourced Patient Database\xa0")),n.a.createElement("div",{className:"last-update"},n.a.createElement("h6",null,"Last Reported Case"),n.a.createElement("h3",null,0===C.length?"":Object(v.a)(Object(h.a)(new Date(C),"Asia/Calcutta"),Object(h.a)(new Date))+" Ago"))),n.a.createElement("a",{href:"https://t.me/covid19indiaops",className:"button telegram",target:"_noblank"},n.a.createElement(m.a,null),n.a.createElement("span",null,"Join Telegram to Collaborate!"))),n.a.createElement(y,{data:l,deltas:B}),n.a.createElement(k,{timeseries:M,animate:!0}),n.a.createElement(E,{states:l,summary:!1})),n.a.createElement("div",{className:"home-right"},n.a.createElement(N,{states:l}),n.a.createElement("div",{className:"timeseries-header fadeInUp",style:{animationDelay:"1.5s"}},n.a.createElement("h1",null,"Spread Trends"),n.a.createElement("div",{className:"tabs"},n.a.createElement("div",{className:"tab ".concat(1===w?"focused":""),onClick:function(){j(1)}},n.a.createElement("h4",null,"Cumulative")),n.a.createElement("div",{className:"tab ".concat(2===w?"focused":""),onClick:function(){j(2)}},n.a.createElement("h4",null,"Daily"))),n.a.createElement("div",{className:"timeseries-mode"},n.a.createElement("label",{htmlFor:"timeseries-mode"},"Scale Uniformly"),n.a.createElement("input",{type:"checkbox",checked:_,onChange:function(e){Y(!_)}}))),n.a.createElement(O,{timeseries:M,type:w,mode:_})))};var D=function(e){var t=Object(r.useState)("Home"),a=Object(o.a)(t,2),l=a[0],c=a[1];return"/summary"!==window.location.pathname?n.a.createElement("div",{className:"Navbar",style:{animationDelay:"0.5s"}},n.a.createElement("img",{className:"fadeInUp",src:"/icon.png",style:{animationDelay:"0.0s"}}),n.a.createElement("div",{className:"navbar-left"},n.a.createElement(s.b,{to:"/",onClick:function(){c("Home")}},n.a.createElement("span",{className:"fadeInUp ".concat("Home"===l?"focused":""),style:{animationDelay:"0.2s"}},"Home")),n.a.createElement(s.b,{to:"/networkmap",onClick:function(){c("Network Map")}},n.a.createElement("span",{className:"fadeInUp ".concat("Network Map"===l?"focused":""),style:{animationDelay:"0.3s"}},"Network Map")),n.a.createElement(s.b,{to:"/links",onClick:function(){c("Helpful Links")}},n.a.createElement("span",{className:"fadeInUp ".concat("Helpful Links"===l?"focused":""),style:{animationDelay:"0.4s"}},"Helpful Links"))),n.a.createElement("div",{className:"navbar-right"})):n.a.createElement("div",null)};var C=function(e){return n.a.createElement("div",{className:"Links"},n.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.2s"}},n.a.createElement("h3",null,"HELPLINE NUMBERS [by State]"),n.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf")),n.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.3s"}},n.a.createElement("h3",null,"Ministry of Health and Family Welfare, Gov. of India"),n.a.createElement("a",{href:"https://www.mohfw.gov.in/"},"https://www.mohfw.gov.in/")),n.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.4s"}},n.a.createElement("h3",null,"WHO : COVID-19 Home Page"),n.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"https://www.who.int/emergencies/diseases/novel-coronavirus-2019")),n.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.5s"}},n.a.createElement("h3",null,"CDC"),n.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html"},"https://www.cdc.gov/coronavirus/2019-ncov/faq.html")),n.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.6s"}},n.a.createElement("h3",null,"COVID-19 Global Tracker"),n.a.createElement("a",{href:"https://coronavirus.thebaselab.com/"},"https://coronavirus.thebaselab.com/")))};var S=function(e){var t=Object(r.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)([]),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(r.useState)([]),h=Object(o.a)(u,2),v=h[0],p=h[1],g=Object(r.useState)(!1),b=Object(o.a)(g,2),w=b[0],j=b[1];Object(r.useEffect)((function(){!1===w&&N()}),[w]);var N=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){c(e.data.statewise),m(e.data.key_values[0]),p(e.data.cases_time_series),j(!0)})).catch((function(e){console.log(e)}))};return n.a.createElement("div",{className:"Summary"},n.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},n.a.createElement("h1",null,"India COVID-19 Tracker")),n.a.createElement(k,{timeseries:v,animate:!1}),n.a.createElement(y,{data:l,deltas:d}),n.a.createElement(E,{states:l,summary:!0}),n.a.createElement("div",{className:"summary-bottom"},n.a.createElement("div",{className:"summary-bottom-left"},n.a.createElement("img",{src:"icon.png",alt:"logo"}),n.a.createElement("h5",null,"We stand with everyone fighting on the frontlines")),n.a.createElement("div",{className:"link"},n.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india.org"))))};var I=function(e){return Object(r.useEffect)((function(){window.location.replace("https://cluster.covid19india.org")})),n.a.createElement("div",null)},A=a(12).createBrowserHistory;var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s.a,{history:A},n.a.createElement(i.b,{render:function(e){var t=e.location;return n.a.createElement("div",{className:"Almighty-Router"},n.a.createElement(D,null),n.a.createElement(i.b,{exact:!0,path:"/",render:function(){return n.a.createElement(i.a,{to:"/"})}}),n.a.createElement(i.d,{location:t},n.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return n.a.createElement(x,e)}}),n.a.createElement(i.b,{exact:!0,path:"/links",render:function(e){return n.a.createElement(C,e)}}),n.a.createElement(i.b,{exact:!0,path:"/summary",render:function(e){return n.a.createElement(S,e)}}),n.a.createElement(i.b,{exact:!0,path:"/networkmap",render:function(e){return n.a.createElement(I,e)}})))}})),n.a.createElement("footer",null,n.a.createElement("img",{src:"/icon.png",alt:"logo"}),n.a.createElement("h5",null,"We stand with everyone fighting on the frontlines"),n.a.createElement("div",{className:"link"},n.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.5ff04afe.chunk.js.map