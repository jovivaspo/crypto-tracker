(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{122:function(e,t,a){},155:function(e,t){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),o=(a(122),a(12)),s=a(264),l=a(108),d=a(242),u=a(245),j=a(247),b=a(248),p=a(266),m=a(270),h=a(251),g=a(2),O=Object(n.createContext)(),x=function(e){var t=e.children,a=Object(n.useState)("usd"),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)("$"),l=Object(o.a)(s,2),d=l[0],u=l[1],j={coin:r,handleCoin:function(e){i(e.target.value),"eur"===e.target.value?u("\u20ac"):u("$")},symbol:d};return Object(g.jsx)(O.Provider,{value:j,children:t})},f=a(100),y=a.n(f),_=a(99),v=a.n(_),k=a(9),C=Object(d.a)((function(){return{appbar:{width:"100vw"},toolbar:{display:"flex",justifyContent:"space-between"},title:{fontWeight:700,flexGrow:1,cursor:"pointer"},select:{width:90,height:40,marginLeft:15,fontSize:12},icon:{marginLeft:10}}})),N=function(e){var t=e.theme,a=e.handleTheme,c=Object(k.f)(),r=C(),i=Object(n.useContext)(O),o=i.coin,s=i.handleCoin;return console.log(o),Object(g.jsx)(u.a,{position:"static",color:"transparent",className:r.appbar,children:Object(g.jsxs)(j.a,{className:r.toolbar,children:[Object(g.jsx)(b.a,{className:r.title,onClick:function(){return c("/crypto-tracker")},children:"Crypto Tracker"}),Object(g.jsxs)(p.a,{variant:"outlined",color:"secondary",className:r.select,onChange:s,children:[Object(g.jsx)(m.a,{value:"usd",style:{fontSize:12},children:"USD"}),Object(g.jsx)(m.a,{value:"eur",style:{fontSize:12},children:"EUR"})]}),Object(g.jsx)(h.a,{className:r.icon,onClick:a,children:"dark"===t?Object(g.jsx)(v.a,{}):Object(g.jsx)(y.a,{})})]})})},w=a(265),S=a(27),D=a(7),F=a(256),T=a(252),B=a(253),I=a(254),W=a(74),M=a.n(W),z=a(101),L=function(){var e=Object(z.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,a).then((function(e){return e.ok||Promise.reject({error:!0,status:e.statusText,statusText:e.statusText}),e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function P(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var E=a(103),H=a.n(E),R=a(104),A=a.n(R),G=a(105),U=a.n(G),J=a(106),V=a.n(J),Y=a(102),$=a.n(Y),X=a(255),q=Object(d.a)((function(e){var t,a,n,c;return{container:Object(D.a)({width:"40%"},e.breakpoints.down("sm"),{width:"100%",flexDirection:"column",justifyContent:"center",marginBottom:16}),logo:(t={display:"block",margin:"0 auto",marginBottom:30,height:200},Object(D.a)(t,e.breakpoints.down("md"),{height:120}),Object(D.a)(t,e.breakpoints.down("sm"),{height:70}),t),containerButton:Object(D.a)({display:"flex",justifyContent:"center",gap:10,margin:20},e.breakpoints.down("md"),{justifyContent:"center",gap:5,margin:10}),button:(a={backgroundColor:e.palette.text.primary,color:e.palette.primary.main},Object(D.a)(a,e.breakpoints.down("xs"),{fontSize:10}),Object(D.a)(a,"&:hover",{backgroundColor:e.palette.text.secondary,color:e.palette.text.primary}),a),selected:(n={backgroundColor:e.palette.text.primary,color:e.palette.primary.main,fontWeight:"bold"},Object(D.a)(n,e.breakpoints.down("xs"),{fontSize:10}),Object(D.a)(n,"&:hover",{backgroundColor:e.palette.text.secondary,color:e.palette.text.primary}),n),containerInfo:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:50},containerInfoMarket:(c={display:"flex",flexDirection:"column",justifyContent:"space-around"},Object(D.a)(c,e.breakpoints.down("sm"),{width:"80%"}),Object(D.a)(c,e.breakpoints.down("xs"),{width:"100%"}),c),containerData:{display:"flex",justifyContent:"space-between",borderBottom:"solid thin #ccc",marginBottom:16},data:{fontWeight:"bold",marginBottom:8,marginRight:12},containerSocial:{display:"flex",flexDirection:"column"}}})),K=function(){var e=Object(k.g)().id,t=q(),a=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(n.useState)("general"),j=Object(o.a)(u,2),b=j[0],p=j[1],m=Object(n.useContext)(O).coin;return Object(n.useEffect)((function(){L(function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)}(e)).then((function(e){console.log(e);var t={id:e.id,rank:e.coingecko_rank,imageLarge:e.image.large,home:e.links.homepage[0],imageSmall:e.image.small,name:e.name,symbol:e.symbol,circulating_suply:e.market_data.circulating_supply,current_price:{eur:e.market_data.current_price.eur,usd:e.market_data.current_price.usd},price_change_percentage_24h:e.market_data.price_change_percentage_24h,market_cap:{eur:e.market_data.market_cap.eur,usd:e.market_data.market_cap.usd},fully_diluted_valuation:{eur:e.market_data.fully_diluted_valuation.eur,usd:e.market_data.fully_diluted_valuation.usd},volumen:{usd:e.market_data.total_volume.usd,eur:e.market_data.total_volume.eur},max_supply:e.market_data.max_supply,sentiment_votes_down_percentage:e.sentiment_votes_down_percentage,sentiment_votes_up_percentage:e.sentiment_votes_up_percentage,description:e.description.en,community_data:e.community_data};d(t),r(!1)}))}),[e,m,b]),console.log(l),{loading:c,currency:l,info:b,handleInfo:function(e){e.target.dataset.id?p(e.target.dataset.id):p(e.target.parentNode.dataset.id)}}}(e),c=a.currency,r=a.loading,i=a.info,s=a.handleInfo,l=Object(n.useContext)(O),d=l.coin,u=l.symbol;return console.log(i),console.log(c,r),Object(g.jsxs)(T.a,{className:t.container,children:[Object(g.jsx)(b.a,{variant:"h3",align:"center",style:{fontWeight:"bold",margin:"10px"},children:e.toUpperCase()}),r?Object(g.jsx)(B.a,{align:"center",style:{display:"block",margin:"0 auto"},color:"secondary"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:c.imageLarge,className:t.logo}),Object(g.jsxs)("div",{className:t.containerButton,children:[Object(g.jsx)(I.a,{variant:"outlined","data-id":"general",onClick:s,className:"general"===i?t.selected:t.button,children:"General"}),Object(g.jsx)(I.a,{variant:"outlined","data-id":"market_data",onClick:s,className:"market_data"===i?t.selected:t.button,children:"Market Data"}),Object(g.jsx)(I.a,{variant:"outlined","data-id":"social",onClick:s,className:"social"===i?t.selected:t.button,children:"Social"})]}),Object(g.jsx)("div",{className:t.containerInfo,children:function(){if("general"===i)return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsxs)(b.a,{className:t.data,variant:"h6",children:["Rank: ",c.rank-1]}),Object(g.jsx)(I.a,{variant:"outlined",className:t.button,href:c.home,style:{width:100,height:32,fontWeight:"bold"},children:"WebSite"})]}),Object(g.jsx)("p",{children:$()(c.description.slice(0,750))+"..."})]});if("market_data"===i){var e=c.price_change_percentage_24h>0;return Object(g.jsxs)("div",{className:t.containerInfoMarket,children:[Object(g.jsx)("div",{className:t.containerData,children:Object(g.jsxs)(b.a,{className:t.data,variant:"h6",children:[c.current_price[d]?P(c.current_price[d].toFixed(2))+" "+u:"Not found",Object(g.jsx)("span",{style:{color:e?"green":"red",fontSize:14,marginLeft:10},children:c.price_change_percentage_24h?c.price_change_percentage_24h.toFixed(2)+" %":"Not Found"})]})}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Market Cap"}),Object(g.jsx)("span",{children:c.market_cap[d]?P(c.market_cap[d])+" "+u:"Not Found"})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"24h Hour Trading Vol"}),Object(g.jsx)("span",{children:c.volumen[d]?P(c.volumen[d])+" "+u:"Not Found"})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Fully Diluted Valuation"}),Object(g.jsx)("span",{children:c.fully_diluted_valuation[d]?P(c.fully_diluted_valuation[d])+" "+u:"Not Found"})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Circulation supply"}),Object(g.jsxs)("span",{children:[" ",c.circulating_suply?P(c.circulating_suply):"Not Found"]})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Total supply"}),Object(g.jsx)("span",{children:c.max_supply?P(c.max_supply):"Not Found"})]})]})}return Object(g.jsxs)("div",{className:t.containerSocial,children:[Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Positive votes"}),Object(g.jsxs)("span",{children:[Object(g.jsx)(H.a,{})," ",c.sentiment_votes_up_percentage?c.sentiment_votes_up_percentage+" %":"Not Found"," "]})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Negative votes"}),Object(g.jsxs)("span",{children:[Object(g.jsx)(X.a,{})," ",c.sentiment_votes_down_percentage?c.sentiment_votes_down_percentage:"Not Found"]})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:" Reddit Account"}),Object(g.jsxs)("span",{children:[Object(g.jsx)(A.a,{})," ",c.community_data.reddit_accounts_active_48h?c.community_data.reddit_accounts_active_48h:"Not Found"]})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Twitter followers"}),Object(g.jsxs)("span",{children:[Object(g.jsx)(U.a,{})," ",c.community_data.twitter_followers?P(c.community_data.twitter_followers):"Not Found"]})]}),Object(g.jsxs)("div",{className:t.containerData,children:[Object(g.jsx)("span",{children:"Telegram users"}),Object(g.jsxs)("span",{children:[" ",Object(g.jsx)(V.a,{})," ",c.community_data.telegram_channel_user_count?P(c.community_data.telegram_channel_user_count):"Not found"]})]})]})}()})]})]})},Q=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],Z=a(16),ee=a(109);Z.d.register(Z.c,Z.i,Z.k,Z.h,Z.o,Z.p,Z.f);var te=Object(d.a)((function(e){var t;return{container:Object(D.a)({display:"flex",flexDirection:"column",justifyContent:"center",width:"55%"},e.breakpoints.down("sm"),{width:"100%"}),containerButton:{display:"flex",justifyContent:"center",gap:10,margin:20},button:(t={backgroundColor:e.palette.text.primary,color:e.palette.primary.main},Object(D.a)(t,e.breakpoints.down("xs"),{fontSize:10}),Object(D.a)(t,"&:hover",{backgroundColor:e.palette.text.secondary,color:e.palette.text.primary}),t),selected:{backgroundColor:e.palette.text.primary,color:e.palette.primary.main,fontWeight:"bold","&:hover":{backgroundColor:e.palette.text.secondary,color:e.palette.text.primary}}}})),ae=function(){var e=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(n.useState)(1),j=Object(o.a)(u,2),b=j[0],p=j[1],m=Object(n.useContext)(O),h=m.coin;return m.symbol,Object(n.useEffect)((function(){L(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,a=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(a,"&days=").concat(t)}(e,b,h)).then((function(e){console.log(e),r(e.prices),d(!1)}))}),[h,b]),{loading:l,historicalData:c,day:b,coin:h,handleDay:function(e){e.target.dataset.value?p(e.target.dataset.value):p(e.target.parentNode.dataset.value)}}}(Object(k.g)().id),t=e.loading,a=e.historicalData,c=e.day,r=e.coin,i=e.handleDay,s=te();return console.log(c),console.log(a),Object(g.jsx)(T.a,{className:s.container,children:t?Object(g.jsx)(B.a,{align:"center",style:{display:"block",margin:"0 auto",marginTop:20},color:"secondary"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:s.containerButton,children:Q.map((function(e){return Object(g.jsx)(I.a,{className:s.button,variant:"contained",onClick:i,"data-value":e.value,children:e.label})}))}),Object(g.jsx)(ee.a,{data:{labels:a.map((function(e){var t=new Date(e[0]),a=t.getHours>12?"".concat(t.getHours()-12," : ").concat(t.getMinutes()," PM"):"".concat(t.getHours()," : ").concat(t.getMinutes()," AM");return 1===c?a:t.toLocaleDateString()})),datasets:[{data:a.map((function(e){return e[1]})),label:"Price (Past ".concat(c," Days) in ").concat(r),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}})]})})},ne=Object(d.a)((function(e){return{container:Object(D.a)({display:"flex",justifyContent:"center",marginTop:20},e.breakpoints.down("sm"),{flexDirection:"column",justifyContent:"center"})}})),ce=function(){var e=ne();return Object(g.jsxs)("div",{className:e.container,children:[Object(g.jsx)(K,{}),Object(g.jsx)(F.a,{}),Object(g.jsx)(ae,{})]})},re=function(){return Object(g.jsx)(ce,{})},ie=a(107),oe=a.n(ie),se=Object(d.a)((function(e){return{carousel:{display:"flex",flexDirection:"row",alignItems:"center",height:"50%",marginTop:20},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase"},carouselData:{color:e.palette.text.primary,fontSize:12,fontWeight:"bold"},carouselImg:Object(D.a)({},e.breakpoints.down("sm"),{height:"40px"})}})),le=function(){var e=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),s=i[0],l=i[1],d=Object(n.useContext)(O),u=d.coin;return d.symbol,Object(n.useEffect)((function(){var e;l(!0),L((e=u,"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"))).then((function(e){console.log(e);var t=e.map((function(e){return{id:e.id,image:e.image,name:e.name,symbol:e.symbol,price_change_percentage_24h:e.price_change_percentage_24h,current_price:e.current_price}}));c(t),l(!1)}))}),[u]),{trending:a,loading:s}}(),t=e.trending,a=(e.loading,se()),c=t.map((function(e){var t=e.price_change_percentage_24h>0;return Object(g.jsxs)(S.b,{className:a.carouselItem,to:"/crypto-tracker/coin/".concat(e.id),children:[Object(g.jsx)("img",{className:a.carouselImg,src:e.image,alt:e.alt,height:"80",style:{marginBottom:10}}),Object(g.jsx)("span",{className:a.carouselData,children:e.symbol}),Object(g.jsx)("span",{children:t?Object(g.jsxs)("span",{style:{color:"green",fontWeight:"bold"},children:[" + ",P(e.price_change_percentage_24h.toFixed(2)),"%"]}):Object(g.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:[P(e.price_change_percentage_24h.toFixed(2)),"%"]})})]})}));return Object(g.jsx)("div",{className:a.carousel,children:Object(g.jsx)(oe.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,responsive:{0:{items:2},512:{items:4}},autoPlay:!0,disableButtonsControls:!0,items:c})})},de=Object(d.a)((function(e){return{banner:{},container:Object(D.a)({display:"flex",flexDirection:"column",paddingTop:"25",justifyContent:"center",alignContent:"center",height:260},e.breakpoints.down("sm"),{height:200}),title:Object(D.a)({fontWeight:700},e.breakpoints.down("sm"),{fontSize:30}),subtitle:Object(D.a)({},e.breakpoints.down("sm"),{fontSize:12}),tagline:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),ue=function(){var e=de();return Object(g.jsx)("div",{className:e.banner,children:Object(g.jsx)(T.a,{className:e.container,children:Object(g.jsxs)("div",{className:e.tagline,children:[Object(g.jsx)(b.a,{variant:"h4",align:"center",className:e.title,children:"Crypto Tracker"}),Object(g.jsx)(b.a,{variant:"subtitle1",align:"center",className:e.subtitle,children:"Crypto Tracker: Get All The Info Of Your Favourite CryptoCurrency "}),Object(g.jsx)(le,{})]})})})},je=a(268),be=a(257),pe=a(258),me=a(259),he=a(260),ge=a(261),Oe=a(262),xe=a(263),fe=a(267),ye=Object(d.a)((function(e){return{table:{marginTop:25},tableHead:Object(D.a)({fontWeight:"bold",fontSize:16},e.breakpoints.down("xs"),{fontSize:12}),tableBodyCell:Object(D.a)({fontWeight:"bold",cursor:"pointer"},e.breakpoints.down("xs"),{fontSize:12,fontWeight:"normal",padding:"10px 2px"}),pagination:Object(D.a)({display:"flex",justifyContent:"center",margin:30},e.breakpoints.down("xs"),{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%",margin:0,marginTop:10,marginBottom:10})}})),_e=function(){var e=function(){var e,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(n.useState)(!1),j=Object(o.a)(u,2),b=j[0],p=j[1],m=Object(n.useState)(1),h=Object(o.a)(m,2),g=h[0],x=h[1],f=Object(n.useContext)(O),y=f.coin,_=f.symbol;return Object(n.useEffect)((function(){var e;p(!0),L((e=y,"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false"))).then((function(e){var t=e.map((function(e){return{id:e.id,image:e.image,name:e.name,symbol:e.symbol,price_change_percentage_24h:e.price_change_percentage_24h,current_price:e.current_price,market_cap:e.market_cap,circulating_supply:e.circulating_supply,total_supply:e.total_supply}}));d(t),p(!1)}))}),[y,c,g]),e={search:c,setSearch:r,coinList:l,loading:b},Object(D.a)(e,"search",c),Object(D.a)(e,"coin",y),Object(D.a)(e,"symbol",_),Object(D.a)(e,"handleSearch",(function(e){r(e.target.value)})),Object(D.a)(e,"handleSearchCoin",(function(){return l.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||e.symbol.toLowerCase().includes(c.toLowerCase())}))})),Object(D.a)(e,"page",g),Object(D.a)(e,"handlePagination",(function(e,t){x(t),window.scroll(0,450)})),e}(),t=e.search,a=e.loading,c=e.coinList,r=(e.coin,e.symbol),i=e.page,s=e.handleSearch,l=e.handleSearchCoin,d=e.handlePagination,u=ye(),j=Object(k.f)();return console.log(c),console.log(t),Object(g.jsx)("div",{style:{width:"100vw"},children:Object(g.jsxs)(T.a,{align:"center",children:[Object(g.jsx)(b.a,{variant:"h5",style:{fontWeight:"bold",margin:20},children:"CryptoCurrency Prices by Market Cup"}),Object(g.jsx)(je.a,{label:"Search...",value:t,onChange:s,variant:"outlined",style:{width:"100%"}}),a?Object(g.jsx)(be.a,{}):Object(g.jsx)(pe.a,{style:{overflowX:"hidden"},children:Object(g.jsxs)(me.a,{className:u.table,children:[Object(g.jsx)(he.a,{children:Object(g.jsx)(ge.a,{color:"secondary",children:["Coin","Price","price change 24h","Mkt Cap"].map((function(e){return Object(g.jsx)(Oe.a,{className:u.tableHead,style:{textAlign:"Coin"===e?"left":"center"},children:e})}))})}),Object(g.jsx)(xe.a,{children:l().slice(10*i-10,10*i).map((function(e){var t=e.price_change_percentage_24h>0;return Object(g.jsxs)(ge.a,{onClick:function(){return j("/crypto-tracker/coin/".concat(e.id))},children:[Object(g.jsxs)(Oe.a,{className:u.tableBodyCell,style:{display:"flex",alignItems:"center"},align:"left",children:[Object(g.jsx)("img",{src:e.image,height:"40",style:{marginRight:10}}),Object(g.jsx)("span",{children:e.symbol})]}),Object(g.jsx)(Oe.a,{className:u.tableBodyCell,align:"center",children:P(e.current_price)+" "+r}),t?Object(g.jsx)(Oe.a,{className:u.tableBodyCell,align:"center",style:{color:"green"},children:Object(g.jsxs)("span",{children:["+ ",P(e.price_change_percentage_24h.toFixed(2))," %"]})}):Object(g.jsx)(Oe.a,{className:u.tableBodyCell,align:"center",style:{color:"red"},children:Object(g.jsxs)("span",{children:[P(e.price_change_percentage_24h.toFixed(2))," %"]})}),Object(g.jsx)(Oe.a,{className:u.tableBodyCell,align:"center",children:P(e.market_cap.toString().slice(0,-6))+"M"})]})}))})]})}),Object(g.jsx)(fe.a,{className:u.pagination,count:10,onChange:d})]})})},ve=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(ue,{}),Object(g.jsx)(_e,{})]})};var ke=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(l.a)({palette:{type:"light"===a?"light":"dark",primary:{main:"light"===a?"#fafafa":"#212121"},secondary:{main:"light"===a?"#212121":"#ccc"},background:{paper:"light"===a?"#fafafa":"#212121"}},typography:{fontFamily:"Montserrat"}});return Object(g.jsxs)(s.a,{theme:r,children:[Object(g.jsx)(w.a,{}),Object(g.jsxs)(S.a,{children:[Object(g.jsx)(N,{theme:a,handleTheme:function(){c("light"===a?"dark":"light")}}),Object(g.jsxs)(k.c,{children:[Object(g.jsx)(k.a,{path:"/crypto-tracker",element:Object(g.jsx)(ve,{})}),Object(g.jsx)(k.a,{path:"/crypto-tracker/coin/:id",element:Object(g.jsx)(re,{})})]})]})]})};a(207);i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(x,{children:Object(g.jsx)(ke,{})})}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.3506a407.chunk.js.map