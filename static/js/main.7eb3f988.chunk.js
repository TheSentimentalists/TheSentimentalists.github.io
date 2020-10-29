(this["webpackJsonpsentimentalistsapp-frontend"]=this["webpackJsonpsentimentalistsapp-frontend"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(77),a(30)),l=(a(22),a(142)),c=a(136),m=a(146),u=a(133),d=a(45),p=a.n(d),f=a(57),g=a(143),y=a(141),b=(a(79),a(34)),h=a.n(b),x=a(138),E=Object(u.a)({mainLogo:{display:"block",width:"100%",height:"auto",padding:"10px",maxHeight:"270px",maxWidth:"273px",margin:"auto"},mainHeading:{fontSize:"22px",textAlign:"center",fontFamily:"Graduate, sans-serif"},appDescription:{textAlign:"left",fontFamily:"Roboto, sans-serif",marginTop:"18px",marginBottom:"25px",paddingLeft:"10px"}});var v=function(){var e=E();return r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:7,sm:5,md:4,lg:4},r.a.createElement("img",{src:h.a,alt:"The Sentimentalists Logo",className:e.mainLogo})),r.a.createElement(c.a,{item:!0,xs:10},r.a.createElement(x.a,{variant:"h1",className:e.mainHeading},"Analysing Media",r.a.createElement("br",null),"Sentiment Since 2020")),r.a.createElement(c.a,{item:!0,xs:12,sm:8,md:6,lg:5},r.a.createElement(x.a,{variant:"body2",className:e.appDescription},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.")))},w=Object(u.a)((function(){return{inputURLArea:{paddingTop:"25px",paddingBottom:"55px"},inputBox:{textAlign:"center",marginBottom:"30px",fontFamily:"Graduate, sans-serif"},inputButton:{background:"#6bb26d",borderRadius:0,fontFamily:"Graduate,",fontSize:"20px"}}}));var T=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1],l=w();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",align:"center",className:l.inputURLArea},r.a.createElement("form",null,r.a.createElement(c.a,{item:!0,xs:10,sm:8,md:6,lg:3},r.a.createElement(g.a,{className:l.inputBox,fullWidth:!0,required:!0,label:"Input URL",variant:"outlined",value:i,onChange:function(e){o(e.target.value)},color:"secondary",error:!0,id:"standard-error"})),r.a.createElement(y.a,{style:{fontFamily:"Graduate"},className:l.inputButton,size:"large",variant:"contained",onClick:function(){e.setLoading(!0);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i})};fetch("https://1rrk3o1dq0.execute-api.eu-west-2.amazonaws.com/prod/analysis",t).then(function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(n=t.sent,a.ok){t.next=6;break}return r=n&&n.message||a.status,t.abrupt("return",Promise.reject(r));case 6:e.setRequest(n),e.setLoading(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setLoading(!1),console.error("There was an error!",t)}))},disableElevation:!0},"Analyse"))))};var k=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Just a moment..."))},S=(a(83),a(62)),N=Object(u.a)({trustScoreHeader:{textAlign:"center",paddingBottom:"20px"}});var j=function(e){var t,a=N(),n=e.Bscore;return t=n<30?"linear-gradient(to right, #e60202, #7d1225)":n>=30&&n<70?"linear-gradient(to right, #ffcf53, #e79b37)":"linear-gradient(to right, #396f5c, #5ba45b)",r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:10,sm:10,md:10,lg:10},r.a.createElement(x.a,{variant:"h5",className:a.trustScoreHeader},"Trust Score")),r.a.createElement(c.a,{item:!0,xs:10,sm:10,md:10,lg:10},r.a.createElement(S.ProgressBar,{percent:n,unfilledBackground:"lightgrey",filledBackground:t,height:15}))))},A=a(145),B=Object(u.a)({ArticleSummaryText:{fontFamily:"Roboto, sans-serif",padding:"10px",textAlign:"left",marginBottom:"25px"},ArticleTitle:{fontSize:"20px",fontWeight:"700",marginBottom:"18px"},ArticleURL:{fontSize:"14px",marginBottom:"10px"},SummaryText:{marginBottom:"12px",fontSize:"16px"},keywordChip:{backgroundColor:"#f8ce94",margin:"3px",fontWeight:"700"}});var L=function(e){var t,a,n,i=B();return e.displayArticle.hasOwnProperty("error")?(t="The Article Title could not be generated.",a="The article summary could not be generated.",n="No keywords"):(t=e.displayArticle.header,a=e.displayArticle.summary,n=e.displayArticle.keywords),function(){var e;a.length>350&&(e=a.slice(0,350)+"..."),a=e}(),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"flex-start",direction:"column",className:i.ArticleSummaryText},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"h4",className:i.ArticleTitle},t)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"body1",className:i.ArticleURL,noWrap:!0},e.displayURL)),r.a.createElement(c.a,{item:!0,xs:12,lg:9},r.a.createElement(x.a,{variant:"body2",className:i.SummaryText},a)),r.a.createElement(c.a,{item:!0,xs:12,md:8},r.a.createElement(x.a,{variant:"body1"},"Keywords:"),n.map((function(e,t){return r.a.createElement(A.a,{key:t,label:e.charAt(0).toUpperCase()+e.slice(1),className:i.keywordChip})})))))},C=a(41),O=a.n(C),R=a(144),z=a(42),F=a.n(z),G=Object(u.a)({credibilityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},resultsHeading:{fontFamily:"Graduate, sans-serif"},categoryGauge:{marginTop:"15px"},categoryTitle:{fontFamily:"Roboto, sans-serif",textAlign:"left",paddingLeft:"45px",fontWeight:"600",marginBottom:"5px  "},categoryChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif",fontWeight:"600"},sourceChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif",cursor:"pointer"},chipLink:{textDecoration:"none"},categoryText:{paddingLeft:"45px",textAlign:"left",paddingRight:"10px",marginBottom:"15px"},credibilityHelp:{color:"#6bb26d"},credibilityTooltip:{fontSize:"30px"}});var H=function(e){var t,a,n,i=G();e.hasOwnProperty("error")?(t=0,a="No Category Available",n="No Source Available"):(t=e.outcome.score/100,a=e.outcome.category,n=e.outcome.source);var o=function(){switch(e.category){case"Left Center":o="These media sources have a slight to moderate liberal bias. \n        They often publish factual information that utilizes loaded words \n        (wording that attempts to influence an audience by using appeal to emotion or stereotypes)\n         to favor liberal causes. These sources are generally trustworthy for information, but\n        may require further investigation.";break;case"Left":o="These media sources are moderately to strongly biased toward liberal causes through\n          story selection and/or political affiliation. They may utilize strong loaded words \n          (wording that attempts to influence an audience by using appeal to emotion or stereotypes),\n          publish misleadingreports and omit reporting of information that may damage liberal causes.\n          Some sources in this category may be untrustworthy.";break;case"Right Center":o="These media sources are slightly to moderately conservative in bias. \n          They often publish factual information that utilizes loaded words (wording that attempts\n             to influence an audience by using appeal to emotion or stereotypes) to favor conservative\n              causes. These sources are generally trustworthy for information, but may require further investigation.";break;case"Right":o="These media sources are moderately to strongly biased toward conservative causes through\n           story selection and/or political affiliation. They may utilize strong loaded words (wording that attempts \n            to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit \n            reporting of information that may damage conservative causes. Some sources in this category may be untrustworthy";break;case"Conspiracy":o="Sources in the Conspiracy-Pseudoscience category may publish unverifiable information that is\n              not always supported by evidence. These sources maybe untrustworthy for credible/verifiable information, \n              therefore fact checking and further investigation is recommended on a per article basis when obtaining information\n              from these sources";break;case"Fake News":o="A questionable source exhibits one or more of the following: extreme bias, consistent promotion of \n                propaganda/conspiracies, poor or no sourcing to credible information, a complete lack of transparency and/or \n                is fake news. Fake News is the deliberate attempt to publish hoaxes and/or disinformation for the purpose of\n                 profit or influence. Sources listed in the Questionable Category maybe very untrustworthy and should be fact \n                 checked on a per article basis. Please note sources on this listare not considered fake news unless specifically\n                 written in the reasoning section for that source.";break;default:o="Not enough about this source exists to calculate a score"}};return o(),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(O.a,{className:i.categoryGauge,id:"main-gauge",percent:t,hideText:!1,textColor:"#000000",nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"]})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"h5",className:i.credibilityGaugeHeading},"Credibility")),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,justify:"flex-start",alignItems:"flex-start",style:{marginBottom:"7px"}},r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{variant:"subtitle2",className:i.categoryTitle},"Category:"," ")),r.a.createElement(c.a,{item:!0},r.a.createElement(A.a,{label:a,className:i.categoryChip})),r.a.createElement(c.a,{item:!0},r.a.createElement(R.a,{placement:"bottom",arrow:!0,title:r.a.createElement("p",{style:{fontSize:"16px"}},o),className:i.credibilityTooltip},r.a.createElement(F.a,{className:i.credibilityHelp}))))),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"subtitle2",className:i.categoryTitle},"Source:"," ",r.a.createElement("a",{href:"https://mediabiasfactcheck.com/",className:i.chipLink},r.a.createElement(A.a,{label:n,className:i.sourceChip}))))))},q=Object(u.a)({objectivityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},objectivityGauge:{marginTop:"15px"},objectivityText:{textAlign:"left",paddingLeft:"35px",fontSize:"16px"},objectivityTooltip:{fontSize:"30px"},objectivityHelp:{color:"#6bb26d"}});var U=function(e){var t=q(),a=e.displayObjectivity;return r.a.createElement("div",null,r.a.createElement(c.a,{containerjustify:"center",direction:"column"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(O.a,{className:t.objectivityGauge,textColor:"#000000",id:"objectivity-gauge",percent:a,hideText:!1,nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"]})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,justify:"flex-start",alignItems:"flex-start"},r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{variant:"subtitle2",className:t.objectivityGaugeHeading},"Objectivity")),r.a.createElement(c.a,{item:!0},r.a.createElement(R.a,{placement:"bottom",arrow:!0,className:t.objectivityTooltip,title:r.a.createElement("p",{style:{fontSize:"16px"}},"Quantifies the amount of factual information X personal opinion contained in the text. The higher objectivity means that the text contains factual information rather than personal opinion.")},r.a.createElement(F.a,{className:t.objectivityHelp})))))))};var W=function(e){var t=e.displayResults,a=t.url;console.log(t);var n=t.article,i=t.results[0].outcome,o=t.results[2].outcome.score,s=100-t.results[3].outcome.score;return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(L,{displayURL:a,displayArticle:n})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(j,{Bscore:s})),r.a.createElement(c.a,{item:!0,xs:12,md:4},r.a.createElement(H,{outcome:i})),r.a.createElement(c.a,{item:!0,xs:12,md:4},r.a.createElement(U,{displayObjectivity:o}))))},P=a(64),D=Object(u.a)({containerStyle:{paddingTop:"20px",paddingBottom:"25px"},innerContainer:{boxShadow:"8px 8px #d9d9d9",background:"#ffffff"},errorDisplay:{paddingTop:"15px",paddingBottom:"50px"},errorText:{fontSize:"25px"},tryAgainButton:{background:"#f8ce94",fontFamily:"Graduate, sans-serif",fontSize:"20px",border:"none",padding:"15px",cursor:"pointer"},loading:{zIndex:999,color:"#fff"},footer:{background:"#6bb26d",padding:"7px"}});var I=function(){var e=D(),t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{fixed:!0},r.a.createElement("div",{className:e.containerStyle},r.a.createElement("div",{className:e.innerContainer},i?r.a.createElement("div",null,r.a.createElement(P.ErrorBoundary,{FallbackComponent:function(t){var a=t.resetErrorBoundary;return r.a.createElement("div",{role:"alert",className:e.errorDisplay},r.a.createElement("img",{src:h.a,alt:"The Sentimentalists Logo"}),r.a.createElement("p",{className:e.errorText},"Please enter a valid URL"),r.a.createElement("button",{className:e.tryAgainButton,onClick:a},"Try again"))},onReset:function(){o("")},resetKeys:[i]},r.a.createElement(W,{displayResults:i})),r.a.createElement("p",null,i.error)):r.a.createElement(T,{setRequest:o,setLoading:f}),r.a.createElement(c.a,{container:!0,className:e.footer},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("h5",null,"The Sentimentalists \xa9 2020"))))),r.a.createElement(m.a,{className:e.loading,open:p},r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/Sentimentalists_Logo_270X273.b29c69c5.png"},72:function(e,t,a){e.exports=a(100)},77:function(e,t,a){},79:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.7eb3f988.chunk.js.map