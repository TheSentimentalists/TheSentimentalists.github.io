(this["webpackJsonpsentimentalistsapp-frontend"]=this["webpackJsonpsentimentalistsapp-frontend"]||[]).push([[0],{24:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/Sentimentalists_Logo_270X273.b29c69c5.png"},56:function(e,t,a){e.exports=a(82)},61:function(e,t,a){},63:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),l=(a(61),a(28)),o=(a(24),a(123)),c=a(119),m=a(126),u=a(116),d=a(34),p=a.n(d),g=a(42),f=a(124),x=a(122),E=(a(63),a(43)),b=a.n(E),h=a(121),y=Object(u.a)({mainLogo:{display:"block",width:"100%",height:"auto",padding:"10px",maxHeight:"270px",maxWidth:"273px",margin:"auto"},mainHeading:{fontSize:"22px",textAlign:"center",fontFamily:"Graduate, sans-serif"},appDescription:{textAlign:"left",fontFamily:"Roboto, sans-serif",marginTop:"18px",marginBottom:"25px",paddingLeft:"10px"}});var v=function(){var e=y();return r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:7,sm:5,md:4,lg:4},r.a.createElement("img",{src:b.a,alt:"The Sentimentalists Logo",className:e.mainLogo})),r.a.createElement(c.a,{item:!0,xs:10},r.a.createElement(h.a,{variant:"h1",className:e.mainHeading},"Analysing Media",r.a.createElement("br",null),"Sentiment Since 2020")),r.a.createElement(c.a,{item:!0,xs:12,sm:8,md:6,lg:5},r.a.createElement(h.a,{variant:"body2",className:e.appDescription},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.")))},N=Object(u.a)((function(){return{inputURLArea:{paddingTop:"25px",paddingBottom:"55px"},inputBox:{textAlign:"center",marginBottom:"30px",fontFamily:"Graduate, sans-serif"},inputButton:{background:"#6bb26d",borderRadius:0,fontFamily:"Graduate,",fontSize:"20px"}}}));var T=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],s=a[1],o=N();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",align:"center",className:o.inputURLArea},r.a.createElement("form",null,r.a.createElement(c.a,{item:!0,xs:10,sm:8,md:6,lg:3},r.a.createElement(f.a,{className:o.inputBox,fullWidth:!0,required:!0,label:"Input URL",variant:"outlined",value:i,onChange:function(e){s(e.target.value)},color:"secondary"})),r.a.createElement(x.a,{style:{fontFamily:"Graduate"},className:o.inputButton,size:"large",variant:"contained",onClick:function(){e.setLoading(!0);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i})};fetch("https://1rrk3o1dq0.execute-api.eu-west-2.amazonaws.com/prod/analysis",t).then(function(){var t=Object(g.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(n=t.sent,a.ok){t.next=6;break}return r=n&&n.message||a.status,t.abrupt("return",Promise.reject(r));case 6:e.setRequest(n),e.setLoading(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setLoading(!1),console.error("There was an error!",t)}))},disableElevation:!0},"Analyse"))))};var w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Just a moment..."))},S=a(48),j=a.n(S),k=a(49),A=a.n(k),L=a(125),B=Object(u.a)({ArticleSummaryText:{fontFamily:"Roboto, sans-serif",padding:"10px",textAlign:"left"},ArticleTitle:{fontSize:"20px",fontWeight:"700",marginBottom:"18px"},ArticleURL:{fontSize:"14px",marginBottom:"10px"},SummaryText:{marginBottom:"12px",fontSize:"16px"},keywordChip:{backgroundColor:"#f8ce94",margin:"3px"}});var O=function(){var e=B();return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"flex-start",direction:"column",className:e.ArticleSummaryText},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"h4",className:e.ArticleTitle},"Greater Manchester to get tier 3 Covid restrictions imposed after talks fail")),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"body1",className:e.ArticleURL,noWrap:!0},"https://www.theguardian.com/world/2020/oct/20/government-fails-to-reach-deal-with-manchester-over-tier-3-covid-restrictions")),r.a.createElement(c.a,{item:!0,xs:12,lg:9},r.a.createElement(h.a,{variant:"body2",className:e.SummaryText},"The summary of the article.The summary of the article.The summary of the article.The summary of the article.The summary of the article.")),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"body1"},"Keywords:",r.a.createElement(L.a,{label:"Boris Johnson",className:e.keywordChip}),r.a.createElement(L.a,{label:"Brexit",className:e.keywordChip}),r.a.createElement(L.a,{label:"Economy",className:e.keywordChip})))))},C=Object(u.a)({mainGaugeHeading:{fontFamily:"Graduate, sans-serif",paddingTop:"20px",paddingBottom:"40px",textAlign:"center"},mainGauge:{},resultsTable:{padding:"7px"},resultsHeading:{fontFamily:"Graduate, sans-serif"},resultsText:{fontFamily:"Roboto, sans-serif",textAlign:"center"}});var R=function(e){var t=C(),a=e.displayResults,n=a.url;console.log(a);var i=a.results[0].outcome.score/100,s=a.results[0].outcome.source,l=a.results[0].outcome.category;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:12,sm:10},r.a.createElement(h.a,{variant:"h5",className:t.mainGaugeHeading},"Credibility Score")),r.a.createElement(c.a,{item:!0,xs:12,sm:10,md:8,lg:6},r.a.createElement(j.a,{className:t.mainGauge,id:"main-gauge",percent:i,hideText:!1,textColor:"#000000",nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"]})),r.a.createElement(c.a,{item:!0,xs:12,sm:10,md:8,lg:8},r.a.createElement(c.a,{container:!0,justify:"center",alignItems:"center",className:t.resultsTable},r.a.createElement(c.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"subtitle1",className:t.resultsHeading},"Your URL:")),r.a.createElement(c.a,{item:!0,xs:10,sm:6},r.a.createElement(A.a,{className:t.resultsText,mode:"multi"},n)),r.a.createElement(c.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"subtitle1",className:t.resultsHeading},"Source:")),r.a.createElement(c.a,{item:!0,xs:10,sm:6},r.a.createElement(h.a,{variant:"body2",className:t.resultsText},s)),r.a.createElement(c.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"subtitle1",className:t.resultsHeading},"Category:")),r.a.createElement(c.a,{item:!0,xs:10,sm:6},r.a.createElement(h.a,{variant:"body2",className:t.resultsText},l))))))},G=Object(u.a)({containerStyle:{paddingTop:"20px",paddingBottom:"25px"},innerContainer:{boxShadow:"8px 8px #d9d9d9",background:"#ffffff"},loading:{zIndex:999,color:"#fff"},footer:{background:"#6bb26d",padding:"7px"}});var q=function(){var e=G(),t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],s=a[1],u=Object(n.useState)(!1),d=Object(l.a)(u,2),p=d[0],g=d[1];return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{fixed:!0},r.a.createElement("div",{className:e.containerStyle},r.a.createElement("div",{className:e.innerContainer},i?r.a.createElement("div",null,r.a.createElement(R,{displayResults:i}),r.a.createElement("p",null,i.error)):r.a.createElement(T,{setRequest:s,setLoading:g}),r.a.createElement(c.a,{container:!0,className:e.footer},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("h5",null,"The Sentimentalists \xa9 2020"))))),r.a.createElement(m.a,{className:e.loading,open:p},r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.df116577.chunk.js.map