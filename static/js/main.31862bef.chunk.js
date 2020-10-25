(this["webpackJsonpsentimentalistsapp-frontend"]=this["webpackJsonpsentimentalistsapp-frontend"]||[]).push([[0],{22:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/Sentimentalists_Logo_270X273.b29c69c5.png"},66:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},73:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(71),a(30)),c=(a(22),a(127)),l=a(121),m=a(131),u=a(118),d=a(39),p=a.n(d),f=a(48),g=a(128),h=a(126),y=(a(73),a(49)),b=a.n(y),x=a(123),v=Object(u.a)({mainLogo:{display:"block",width:"100%",height:"auto",padding:"10px",maxHeight:"270px",maxWidth:"273px",margin:"auto"},mainHeading:{fontSize:"22px",textAlign:"center",fontFamily:"Graduate, sans-serif"},appDescription:{textAlign:"left",fontFamily:"Roboto, sans-serif",marginTop:"18px",marginBottom:"25px",paddingLeft:"10px"}});var E=function(){var e=v();return r.a.createElement(l.a,{container:!0,justify:"center"},r.a.createElement(l.a,{item:!0,xs:7,sm:5,md:4,lg:4},r.a.createElement("img",{src:b.a,alt:"The Sentimentalists Logo",className:e.mainLogo})),r.a.createElement(l.a,{item:!0,xs:10},r.a.createElement(x.a,{variant:"h1",className:e.mainHeading},"Analysing Media",r.a.createElement("br",null),"Sentiment Since 2020")),r.a.createElement(l.a,{item:!0,xs:12,sm:8,md:6,lg:5},r.a.createElement(x.a,{variant:"body2",className:e.appDescription},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.")))},w=Object(u.a)((function(){return{inputURLArea:{paddingTop:"25px",paddingBottom:"55px"},inputBox:{textAlign:"center",marginBottom:"30px",fontFamily:"Graduate, sans-serif"},inputButton:{background:"#6bb26d",borderRadius:0,fontFamily:"Graduate,",fontSize:"20px"}}}));var k=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1],c=w();return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(l.a,{container:!0,direction:"column",justify:"center",align:"center",className:c.inputURLArea},r.a.createElement("form",null,r.a.createElement(l.a,{item:!0,xs:10,sm:8,md:6,lg:3},r.a.createElement(g.a,{className:c.inputBox,fullWidth:!0,required:!0,label:"Input URL",variant:"outlined",value:i,onChange:function(e){o(e.target.value)},color:"secondary"})),r.a.createElement(h.a,{style:{fontFamily:"Graduate"},className:c.inputButton,size:"large",variant:"contained",onClick:function(){e.setLoading(!0);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i})};fetch("https://1rrk3o1dq0.execute-api.eu-west-2.amazonaws.com/prod/analysis",t).then(function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(n=t.sent,a.ok){t.next=6;break}return r=n&&n.message||a.status,t.abrupt("return",Promise.reject(r));case 6:e.setRequest(n),e.setLoading(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setLoading(!1),console.error("There was an error!",t)}))},disableElevation:!0},"Analyse"))))};var T=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Just a moment..."))},S=a(130),N=Object(u.a)({ArticleSummaryText:{fontFamily:"Roboto, sans-serif",padding:"10px",textAlign:"left"},ArticleTitle:{fontSize:"20px",fontWeight:"700",marginBottom:"18px"},ArticleURL:{fontSize:"14px",marginBottom:"10px"},SummaryText:{marginBottom:"12px",fontSize:"16px"},keywordChip:{backgroundColor:"#f8ce94",margin:"3px",fontWeight:"700"}});var A=function(e){var t,a,n=N();return e.displayArticle.hasOwnProperty("error")?(t="The Article Title could not be generated.",a="The article summary could not be generated."):(t=e.displayArticle.header,a=e.displayArticle.summary),r.a.createElement("div",null,r.a.createElement(l.a,{container:!0,justify:"flex-start",direction:"column",className:n.ArticleSummaryText},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"h4",className:n.ArticleTitle},t)),r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"body1",className:n.ArticleURL,noWrap:!0},e.displayURL)),r.a.createElement(l.a,{item:!0,xs:12,lg:9},r.a.createElement(x.a,{variant:"body2",className:n.SummaryText},a)),r.a.createElement(l.a,{item:!0,xs:12,md:8},r.a.createElement(x.a,{variant:"body1"},"Keywords:",["low","admits","covid","results","contacts","test","week","failings","hours","previous","contacttracing","reached","hits","system","englands","times","testing"].map((function(e){return r.a.createElement(S.a,{label:e.charAt(0).toUpperCase()+e.slice(1),className:n.keywordChip})}))))))},L=a(54),C=a.n(L),R=a(129),j=a(56),B=a.n(j),O=Object(u.a)({credibilityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},resultsHeading:{fontFamily:"Graduate, sans-serif"},categoryGauge:{marginTop:"15px"},categoryTitle:{fontFamily:"Roboto, sans-serif",textAlign:"left",paddingLeft:"45px",fontWeight:"600",marginBottom:"5px  "},categoryChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif"},sourceChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif",cursor:"pointer"},chipLink:{textDecoration:"none"},categoryText:{paddingLeft:"45px",textAlign:"left",paddingRight:"10px",marginBottom:"15px"}});var q=function(e){var t=O(),a=function(){switch(e.category){case"Left Center":a="These media sources have a slight to moderate liberal bias. \n        They often publish factual information that utilizes loaded words \n        (wording that attempts to influence an audience by using appeal to emotion or stereotypes)\n         to favor liberal causes. These sources are generally trustworthy for information, but\n        may require further investigation.";break;case"Left":a="These media sources are moderately to strongly biased toward liberal causes through\n          story selection and/or political affiliation. They may utilize strong loaded words \n          (wording that attempts to influence an audience by using appeal to emotion or stereotypes),\n          publish misleadingreports and omit reporting of information that may damage liberal causes.\n          Some sources in this category may be untrustworthy.";break;case"Right Center":a="These media sources are slightly to moderately conservative in bias. \n          They often publish factual information that utilizes loaded words (wording that attempts\n             to influence an audience by using appeal to emotion or stereotypes) to favor conservative\n              causes. These sources are generally trustworthy for information, but may require further investigation.";break;case"Right":a="These media sources are moderately to strongly biased toward conservative causes through\n           story selection and/or political affiliation. They may utilize strong loaded words (wording that attempts \n            to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit \n            reporting of information that may damage conservative causes. Some sources in this category may be untrustworthy";break;case"Conspiracy":a="Sources in the Conspiracy-Pseudoscience category may publish unverifiable information that is\n              not always supported by evidence. These sources maybe untrustworthy for credible/verifiable information, \n              therefore fact checking and further investigation is recommended on a per article basis when obtaining information\n              from these sources";break;case"Fake News":a="A questionable source exhibits one or more of the following: extreme bias, consistent promotion of \n                propaganda/conspiracies, poor or no sourcing to credible information, a complete lack of transparency and/or \n                is fake news. Fake News is the deliberate attempt to publish hoaxes and/or disinformation for the purpose of\n                 profit or influence. Sources listed in the Questionable Category maybe very untrustworthy and should be fact \n                 checked on a per article basis. Please note sources on this listare not considered fake news unless specifically\n                 written in the reasoning section for that source.";break;default:a="Not enough about this source exists to calculate a score"}};return a(),r.a.createElement("div",null,r.a.createElement(l.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(l.a,{item:!0,xs:12,md:4},r.a.createElement(C.a,{className:t.categoryGauge,id:"main-gauge",percent:e.credibilityScore,hideText:!1,textColor:"#000000",nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"]})),r.a.createElement(l.a,{item:!0,xs:12,md:4},r.a.createElement(x.a,{variant:"h5",className:t.credibilityGaugeHeading},"Credibility")),r.a.createElement(l.a,{item:!0,xs:12,md:4},r.a.createElement(x.a,{variant:"subtitle2",className:t.categoryTitle},"Category:"," ",r.a.createElement(S.a,{label:e.category,className:t.categoryChip}),r.a.createElement(R.a,{title:a},r.a.createElement(B.a,{color:"primary"})))),r.a.createElement(l.a,{item:!0,xs:12,md:4},r.a.createElement(x.a,{variant:"subtitle2",className:t.categoryTitle},"Source:"," ",r.a.createElement("a",{href:"https://mediabiasfactcheck.com/",className:t.chipLink},r.a.createElement(S.a,{label:e.source,className:t.sourceChip}))))))};var z=function(e){var t=e.displayResults,a=t.url;console.log(t);var n=t.article,i=t.results[0].outcome.score/100,o=t.results[0].outcome.source,s=t.results[0].outcome.category;return r.a.createElement("div",null,r.a.createElement(A,{displayURL:a,displayArticle:n}),r.a.createElement(q,{score:i,category:s,source:o}))},F=Object(u.a)({containerStyle:{paddingTop:"20px",paddingBottom:"25px"},innerContainer:{boxShadow:"8px 8px #d9d9d9",background:"#ffffff"},loading:{zIndex:999,color:"#fff"},footer:{background:"#6bb26d",padding:"7px"}});var G=function(){var e=F(),t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{fixed:!0},r.a.createElement("div",{className:e.containerStyle},r.a.createElement("div",{className:e.innerContainer},i?r.a.createElement("div",null,r.a.createElement(z,{displayResults:i}),r.a.createElement("p",null,i.error)):r.a.createElement(k,{setRequest:o,setLoading:f}),r.a.createElement(l.a,{container:!0,className:e.footer},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement("h5",null,"The Sentimentalists \xa9 2020"))))),r.a.createElement(m.a,{className:e.loading,open:p},r.a.createElement(T,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.31862bef.chunk.js.map