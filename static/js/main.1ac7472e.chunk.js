(this["webpackJsonpsentimentalistsapp-frontend"]=this["webpackJsonpsentimentalistsapp-frontend"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=(a(79),a(35)),s=(a(25),a(146)),c=a(140),m=a(150),d=a(137),u=a(45),p=a.n(u),f=a(55),g=a(147),y=a(145),h=(a(81),a(26)),x=a.n(h),b=a(142),E=Object(d.a)({mainLogo:{display:"block",width:"100%",height:"auto",padding:"10px",maxHeight:"270px",maxWidth:"273px",margin:"auto"},mainHeading:{fontSize:"22px",textAlign:"center",fontFamily:"Graduate, sans-serif",marginBottom:"50px"},appDescription:{textAlign:"left",fontFamily:"Roboto, sans-serif",marginTop:"18px",marginBottom:"25px",paddingLeft:"10px"}});var v=function(){var e=E();return r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:7,sm:5,md:4,lg:4},r.a.createElement("img",{src:x.a,alt:"The Sentimentalists Logo",className:e.mainLogo})),r.a.createElement(c.a,{item:!0,xs:10},r.a.createElement(b.a,{variant:"h1",className:e.mainHeading},"Analysing Media",r.a.createElement("br",null),"Sentiment Since 2020")))},w=a(148),T=a(14),S=a.n(T),N=Object(d.a)((function(){return{inputURLArea:{paddingTop:"25px",paddingBottom:"85px"},inputBox:{textAlign:"center",marginBottom:"30px",fontFamily:"Graduate, sans-serif"},inputButton:{background:"#6bb26d",borderRadius:0,fontFamily:"Graduate,",fontSize:"20px"},infoText:{fontSize:"16px"},info:{color:"#6bb26d",fontSize:"25px"}}}));var j=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],o=a[1],s=N();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",align:"center",className:s.inputURLArea},r.a.createElement("form",null,r.a.createElement(c.a,{item:!0,xs:10,sm:8,md:6,lg:3},r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",align:"center"},r.a.createElement(c.a,{item:!0,xs:11},r.a.createElement(g.a,{className:s.inputBox,fullWidth:!0,required:!0,label:"Input URL",variant:"outlined",value:i,onChange:function(e){o(e.target.value)},color:"secondary",error:!0,id:"standard-error"})),r.a.createElement(c.a,{item:!0},r.a.createElement(w.a,{arrow:!0,placement:"bottom",title:r.a.createElement("p",{style:{fontSize:"16px "}},"Have you ever wondered if you can trust what you read in the news?",r.a.createElement("br",null),"Are you ever baffled by bias and puzzled by politics?",r.a.createElement("br",null),"The Sentimentalists App is designed to help you make informed judgments/decisions/conclusions about the news content you consume online.",r.a.createElement("br",null),"To find out if what you\u2019ve been reading is a worthwhile source, just enter a URL and click Analyse.")},r.a.createElement(S.a,{className:s.info}))))),r.a.createElement(y.a,{style:{fontFamily:"Graduate"},className:s.inputButton,size:"large",variant:"contained",onClick:function(){e.setLoading(!0);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i})};fetch("https://1rrk3o1dq0.execute-api.eu-west-2.amazonaws.com/prod/analysis",t).then(function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(n=t.sent,a.ok){t.next=6;break}return r=n&&n.message||a.status,t.abrupt("return",Promise.reject(r));case 6:e.setRequest(n),e.setLoading(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setLoading(!1),console.error("There was an error!",t)}))},disableElevation:!0},"Analyse"))))},A=a(61),k=a.n(A),B=a(62),L=a.n(B);var z=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:L.a,alt:"Beating Heart"}),r.a.createElement("h2",null," ",r.a.createElement(k.a,{items:["Analysing underlying sentiment...","Converging opinionated opinions...","Evaluating controversial topics...","Calculating trust vectors...","Extrapolating emotion exertion...","Peeling political facade..."],cursor:!1,emptyPause:0,typingInterval:0,deletingInterval:0})))},C=(a(88),a(63)),O=Object(d.a)({trustScoreHeader:{textAlign:"left",paddingBottom:"20px"},trustScoreTooltip:{fontSize:"30px"},trustScoreHelp:{textAlign:"right",color:"#6bb26d"}});var R=function(e){var t,a,n=O(),i=e.Bscore;return i<30?(t="linear-gradient(to right, #7d1225, #e60202 )",a="\ud83d\ude41"):i>=30&&i<70?(t="linear-gradient(to right, #ffcf53, #e79b37)",a="\ud83d\ude10"):(t="linear-gradient(to right, #5ba45b, #396f5c)",a="\ud83d\ude03"),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:10,sm:10,md:10,lg:10},r.a.createElement(c.a,{container:!0,justify:"left"},r.a.createElement(b.a,{variant:"h5",className:n.trustScoreHeader},"Trust Indicator"),r.a.createElement(c.a,null,r.a.createElement(w.a,{className:n.trustScoreTooltip,title:r.a.createElement("p",{style:{fontSize:"16px"}},"Trust indicator breifly provides Trustworthiness of an article. It is calculated with equal weightage on Credibility, Objectivity and Polarity of the Article. A Green progress bar means article has Trustworthiness greater than 70%, a yellow bar means the article has Trustworthiness between 30% to 70%  and a red bar means that the article has Trustworthiness less than 30%.")},r.a.createElement(S.a,{className:n.trustScoreHelp}))))),r.a.createElement(c.a,{item:!0,xs:10,sm:10,md:10,lg:10},r.a.createElement(c.a,{item:!0,justify:"center"},a),r.a.createElement(C.ProgressBar,{percent:i,unfilledBackground:"lightgrey",filledBackground:t,height:15}))))},H=a(149),F=Object(d.a)({ArticleSummaryText:{fontFamily:"Roboto, sans-serif",padding:"10px",textAlign:"left",marginBottom:"25px"},ArticleTitle:{fontSize:"20px",fontWeight:"700",marginBottom:"18px"},ArticleURL:{fontSize:"14px",marginBottom:"10px"},SummaryText:{marginBottom:"12px",fontSize:"16px"},keywordChip:{backgroundColor:"#f8ce94",margin:"3px",fontWeight:"700"}});var G=function(e){var t,a,n,i=F();return e.displayArticle.hasOwnProperty("error")?(t="The Article Title could not be generated.",a="The article summary could not be generated.",n="No keywords"):(t=e.displayArticle.header,a=e.displayArticle.summary,n=e.displayArticle.keywords),function(){var e;a.length>350&&(e=a.slice(0,350)+"..."),a=e}(),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"flex-start",direction:"column",className:i.ArticleSummaryText},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h4",className:i.ArticleTitle},t)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"body1",className:i.ArticleURL,noWrap:!0},e.displayURL)),r.a.createElement(c.a,{item:!0,xs:12,lg:9},r.a.createElement(b.a,{variant:"body2",className:i.SummaryText},a)),r.a.createElement(c.a,{item:!0,xs:12,md:8},r.a.createElement(b.a,{variant:"body1"},"Keywords:"),n.map((function(e,t){return r.a.createElement(H.a,{key:t,label:e.charAt(0).toUpperCase()+e.slice(1),className:i.keywordChip})})))))},P=a(27),W=a.n(P),I=Object(d.a)({credibilityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},resultsHeading:{fontFamily:"Graduate, sans-serif"},categoryTitle:{fontFamily:"Roboto, sans-serif",textAlign:"left",paddingLeft:"45px",fontWeight:"600",marginBottom:"5px  "},categoryChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif",fontWeight:"600"},sourceChip:{background:"#f8ce94",fontFamily:"Roboto, sans-serif",cursor:"pointer"},chipLink:{textDecoration:"none"},categoryText:{paddingLeft:"45px",textAlign:"left",paddingRight:"10px",marginBottom:"15px"},credibilityHelp:{color:"#6bb26d"},credibilityTooltip:{fontSize:"30px"}});var M=function(e){var t,a,n,i=I();e.hasOwnProperty("error")?(t=0,a="No Category Available",n="No Source Available"):(t=e.outcome.score/100,a=e.outcome.category,n=e.outcome.source);var o=function(){switch(e.category){case"Left Center":o="These media sources have a slight to moderate liberal bias. \n        They often publish factual information that utilizes loaded words \n        (wording that attempts to influence an audience by using appeal to emotion or stereotypes)\n         to favor liberal causes. These sources are generally trustworthy for information, but\n        may require further investigation.";break;case"Left":o="These media sources are moderately to strongly biased toward liberal causes through\n          story selection and/or political affiliation. They may utilize strong loaded words \n          (wording that attempts to influence an audience by using appeal to emotion or stereotypes),\n          publish misleadingreports and omit reporting of information that may damage liberal causes.\n          Some sources in this category may be untrustworthy.";break;case"Right Center":o="These media sources are slightly to moderately conservative in bias. \n          They often publish factual information that utilizes loaded words (wording that attempts\n             to influence an audience by using appeal to emotion or stereotypes) to favor conservative\n              causes. These sources are generally trustworthy for information, but may require further investigation.";break;case"Right":o="These media sources are moderately to strongly biased toward conservative causes through\n           story selection and/or political affiliation. They may utilize strong loaded words (wording that attempts \n            to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit \n            reporting of information that may damage conservative causes. Some sources in this category may be untrustworthy";break;case"Conspiracy":o="Sources in the Conspiracy-Pseudoscience category may publish unverifiable information that is\n              not always supported by evidence. These sources maybe untrustworthy for credible/verifiable information, \n              therefore fact checking and further investigation is recommended on a per article basis when obtaining information\n              from these sources";break;case"Fake News":o="A questionable source exhibits one or more of the following: extreme bias, consistent promotion of \n                propaganda/conspiracies, poor or no sourcing to credible information, a complete lack of transparency and/or \n                is fake news. Fake News is the deliberate attempt to publish hoaxes and/or disinformation for the purpose of\n                 profit or influence. Sources listed in the Questionable Category maybe very untrustworthy and should be fact \n                 checked on a per article basis. Please note sources on this listare not considered fake news unless specifically\n                 written in the reasoning section for that source.";break;default:o="Not enough about this source exists to calculate a score"}};return o(),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(W.a,{className:i.categoryGauge,id:"main-gauge",percent:t,hideText:!1,textColor:"#000000",nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"],needleColor:"#d9d9d9"})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h5",className:i.credibilityGaugeHeading},"Credibility")),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,justify:"flex-start",alignItems:"flex-start",style:{marginBottom:"7px"}},r.a.createElement(c.a,{item:!0},r.a.createElement(b.a,{variant:"subtitle2",className:i.categoryTitle},"Category:"," ")),r.a.createElement(c.a,{item:!0},r.a.createElement(H.a,{label:a,className:i.categoryChip})),r.a.createElement(c.a,{item:!0},r.a.createElement(w.a,{placement:"bottom",arrow:!0,title:r.a.createElement("p",{style:{fontSize:"16px"}},o),className:i.credibilityTooltip},r.a.createElement(S.a,{className:i.credibilityHelp}))))),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"subtitle2",className:i.categoryTitle},"Source:"," ",r.a.createElement("a",{href:"https://mediabiasfactcheck.com/",className:i.chipLink},r.a.createElement(H.a,{label:n,className:i.sourceChip}))))))},U=Object(d.a)({objectivityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},objectivityText:{textAlign:"left",paddingLeft:"35px",fontSize:"16px"},objectivityTooltip:{fontSize:"30px"},objectivityHelp:{color:"#6bb26d"}});var q=function(e){var t=U(),a=e.displayObjectivity;return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(W.a,{className:t.objectivityGauge,textColor:"#000000",id:"objectivity-gauge",percent:a,hideText:!1,nrOfLevels:3,colors:["#ee445e","#f8ce94","#6bb26d"],needleColor:"#d9d9d9"})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,justify:"flex-start",alignItems:"flex-start"},r.a.createElement(c.a,{item:!0},r.a.createElement(b.a,{variant:"subtitle2",className:t.objectivityGaugeHeading},"Objectivity")),r.a.createElement(c.a,{item:!0},r.a.createElement(w.a,{placement:"bottom",arrow:!0,className:t.objectivityTooltip,title:r.a.createElement("p",{style:{fontSize:"16px"}},"Quantifies the amount of factual information X personal opinion contained in the text. The higher objectivity means that the text contains factual information rather than personal opinion.")},r.a.createElement(S.a,{className:t.objectivityHelp})))))))},D=Object(d.a)({polarityGaugeHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",fontSize:"18px",paddingLeft:"35px",paddingBottom:"10px"},polarityText:{textAlign:"left",paddingLeft:"35px",fontSize:"16px"},polarityTooltip:{fontSize:"30px"},polarityHelp:{color:"#6bb26d"}});var J=function(e){var t=D();console.log(e.displayPolarity);var a=(e.displayPolarity+1)/2,n="";return a<.25?n="\ud83d\ude21":a>=.25&&a<.45?n="\ud83d\ude41":a>=.45&&a<.55?n="\ud83d\ude10":a>=.55&&a<.75?n="\ud83d\ude0a":a>=.75&&a<1&&(n="\ud83d\ude03"),r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(W.a,{className:t.polarityGauge,textColor:"#000000",id:"polarity-gauge",percent:a,hideText:!1,nrOfLevels:3,colors:["#e62a4c","#d1d1d1","#6bb26d"],formatTextValue:function(){return n},arcsLength:[.45,.1,.45],needleColor:"#d9d9d9"})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,justify:"flex-start",alignItems:"flex-start"},r.a.createElement(c.a,{item:!0},r.a.createElement(b.a,{variant:"subtitle2",className:t.polarityGaugeHeading},"Polarity")),r.a.createElement(c.a,{item:!0},r.a.createElement(w.a,{placement:"bottom",arrow:!0,className:t.polarityTooltip,title:r.a.createElement("p",{style:{fontSize:"16px"}},"Measures the emotion behind the article, from negative to positive.")},r.a.createElement(S.a,{className:t.polarityHelp})))))))},K=Object(d.a)({header:{background:"#d9d9d9"},logo:{display:"block",width:"100%",height:"auto",maxHeight:"110px",maxWidth:"113px",margin:"auto",padding:"10px"},credibilityBox:{paddingLeft:"12px",paddingTop:"18px"},credibilityText:{textAlign:"left",fontFamily:"Roboto, sans-serif",paddingLeft:"30px",marginTop:"10px",marginBottom:"25px"},sentimentBox:{paddingLeft:"12px",paddingTop:"18px"},sentimentHeading:{fontFamily:"Graduate, sans-serif",textAlign:"left",paddingLeft:"30px"},sentimentText:{textAlign:"left",fontFamily:"Roboto, sans-serif",paddingLeft:"30px",marginBottom:"25px"}});var Q=function(e){var t=K(),a=e.displayResults,n=a.url;console.log(a);var i=a.article,o=a.results[0].outcome,l=a.results[1].outcome.score,s=a.results[2].outcome.score,m=100-a.results[3].outcome.score;return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(c.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:t.header},r.a.createElement(c.a,{item:!0,xs:6,sm:6,md:3,lg:2},r.a.createElement("img",{src:x.a,alt:"The Sentimentalists Logo",className:t.logo})),r.a.createElement(c.a,{item:!0,xs:6,sm:6,md:3,lg:3},r.a.createElement(b.a,{variant:"h1",style:{fontSize:"18px",fontFamily:"Graduate, sans-serif"}},"Analysing Media Sentiment Since 2020")))),r.a.createElement(c.a,{item:!0,xs:12,style:{borderBottom:"1px solid #efefef"}},r.a.createElement(G,{displayURL:n,displayArticle:i})),r.a.createElement(c.a,{item:!0,xs:12,style:{borderBottom:"1px solid #efefef",paddingTop:"12px",paddingBottom:"20px"}},r.a.createElement(R,{Bscore:m})),r.a.createElement(c.a,{item:!0,xs:12,md:4,style:{borderRight:"1px solid #efefef"}},r.a.createElement(c.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",className:t.credibilityBox},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(M,{outcome:o})),r.a.createElement(c.a,{item:!0,xs:10},r.a.createElement(b.a,{variant:"body2",className:t.credibilityText},r.a.createElement("strong",null,"What?")," The credibility of a website is very important and we will tell you why.",r.a.createElement("br",null),r.a.createElement("strong",null,"Why?")," Article context is very important, if you give us a chance we will tell you why. More text....MoreMore text.... text....More text....More text....More text....More")))),r.a.createElement(c.a,{container:!0,justify:"flex-start",direction:"row",alignItems:"flex-start",md:8,className:t.sentimentBox},r.a.createElement(c.a,{item:!0,xs:12,md:6},r.a.createElement(q,{displayObjectivity:s})),r.a.createElement(c.a,{item:!0,xs:12,md:6},r.a.createElement(J,{displayPolarity:l})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"subtitle1",className:t.sentimentHeading},"Sentiment Analysis")),r.a.createElement(c.a,{item:!0,xs:10},r.a.createElement(b.a,{variant:"body2",className:t.sentimentText},r.a.createElement("strong",null,"What?")," Sentiment Analysis the process of analysing online pieces of writing to determine the tone they carry.",r.a.createElement("br",null),r.a.createElement("strong",null,"Why?")," When consuming content it\u2019s important to know the author\u2019s attitude to something. They might have negative views about something you feel positively about, and vice versa. Knowing that this can influence what you are reading provides you with powerful insight when assessing whether or an article is fully factual.")))))},X=a(64),_=Object(d.a)({containerStyle:{paddingTop:"20px",paddingBottom:"25px"},innerContainer:{boxShadow:"8px 8px #d9d9d9",background:"#ffffff"},errorDisplay:{paddingTop:"15px",paddingBottom:"50px"},errorText:{fontSize:"25px"},tryAgainButton:{background:"#f8ce94",fontFamily:"Graduate, sans-serif",fontSize:"20px",border:"none",padding:"15px",cursor:"pointer"},loading:{zIndex:999,color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.8)"},footer:{background:"#6bb26d",padding:"7px"}});var V=function(){var e=_(),t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],o=a[1],d=Object(n.useState)(!1),u=Object(l.a)(d,2),p=u[0],f=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{fixed:!0},r.a.createElement("div",{className:e.containerStyle},r.a.createElement("div",{className:e.innerContainer},i?r.a.createElement("div",null,r.a.createElement(X.ErrorBoundary,{FallbackComponent:function(t){var a=t.resetErrorBoundary;return r.a.createElement("div",{role:"alert",className:e.errorDisplay},r.a.createElement("img",{src:x.a,alt:"The Sentimentalists Logo"}),r.a.createElement("p",{className:e.errorText},"Please enter a valid URL"),r.a.createElement("button",{className:e.tryAgainButton,onClick:a},"Try again"))},onReset:function(){o("")},resetKeys:[i]},r.a.createElement(Q,{displayResults:i})),r.a.createElement("p",null,i.error)):r.a.createElement(j,{setRequest:o,setLoading:f}),r.a.createElement(c.a,{container:!0,className:e.footer},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("h5",null,"The Sentimentalists \xa9 2020"))))),r.a.createElement(m.a,{className:e.loading,open:p},r.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/Sentimentalists_Logo_270X273.b29c69c5.png"},62:function(e,t,a){e.exports=a.p+"static/media/heart.4485b915.gif"},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){},81:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.1ac7472e.chunk.js.map