"use strict";(self.webpackChunkpetly_project_front=self.webpackChunkpetly_project_front||[]).push([[619],{6247:function(n,i,t){t.d(i,{mz:function(){return h},tZ:function(){return u},zB:function(){return l},Kg:function(){return s},fx:function(){return a}});var e=t(5048),r=t(1472),o=t(433),a=function(n){var i,t,a,l,d,s,c,h,f,u,m,p=n.categoryName,g=n.page,x=void 0===g?1:g,v=n.limit,b=void 0===v?8:v,y=(0,e.v9)(r.sR),k="own"===p,w="favorite"===p,j=!k&&!w,Z=null===(i=(0,o.mr)({category:p,page:x,limit:b},{skip:k||w,refetchOnMountOrArgChange:!0}))||void 0===i||null===(t=i.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.notices,C=null===(l=(0,o.Mi)({category:p,page:x,limit:b},{skip:!y||w||j,refetchOnMountOrArgChange:!0}))||void 0===l||null===(d=l.data)||void 0===d||null===(s=d.data)||void 0===s?void 0:s.notices,z=null===(c=(0,o.Mi)({category:p,page:x,limit:b,favorite:!0},{skip:!y||k||j,refetchOnMountOrArgChange:!0}))||void 0===c||null===(h=c.data)||void 0===h||null===(f=h.data)||void 0===f?void 0:f.notices;switch(p){case"own":m=C;break;case"favorite":m=z;break;default:m=Z}return null!==(u=m)&&void 0!==u?u:[]},l=function(n){var i,t,e=n.noticeId,r=(0,o.UN)({noticeId:e},{refetchOnMountOrArgChange:!0}).data;return null!==(i=null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.notice)&&void 0!==i?i:null},d=(t(8174),t(2454)),s=function(n){var i,t=n.page,e=void 0===t?1:t,r=n.query,o=void 0===r?"":r,a=(0,d.t)({page:e,query:o}),l=a.data,s=a.isLoading;return{data:null!==(i=null===l||void 0===l?void 0:l.news)&&void 0!==i?i:[],isLoading:s}},c=t(2296),h=function(){var n,i,t=(0,c.s)().data;return null!==(n=null===t||void 0===t||null===(i=t.data)||void 0===i?void 0:i.friends)&&void 0!==n?n:[]},f=t(7139),u=function(){var n,i,t,e=(0,f.XC)(),r=e.data,o=e.isLoading;return{user:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.user,pets:null!==(i=null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.pets)&&void 0!==i?i:[],isLoading:o}}},6619:function(n,i,t){t.r(i),t.d(i,{default:function(){return tn}});var e,r,o,a,l,d,s,c,h,f,u,m,p,g,x=t(8952),v=t(168),b=t(9202),y=x.rS.fonts,k=x.rS.screens,w={Title:b.Z.h2(e||(e=(0,v.Z)(["\n  font-family: ",",\n  font-weight: 700;\n  margin-bottom: 40px;\n  font-size: 24px;\n  line-height: 1.38;\n   @media (min-width: ",") {\n    font-size: 48px;\n    margin-bottom: 45px;\n   } ;\n   \n    @media (min-width: ",") {\n      margin-bottom: 60px;\n   }"])),y.primary,k.tablet,k.desktop)},j=t(3329),Z=w.Title,C=function(){return(0,j.jsx)(Z,{children:"Our friends"})},z=x.rS.backgrounds,I=x.rS.shadows,L=x.rS.fonts,O=x.rS.screens,T=x.rS.palette,W=b.Z.li(r||(r=(0,v.Z)(["\n  background-color: ",";\n  text-align: center;\n  border-radius: 40px;\n  margin-bottom: 12px;\n  padding: 12px 4px;\n  box-shadow: ",";\n  @media (min-width: ",") {\n    margin-bottom: 32px;\n    margin-right: 32px;\n    flex-basis: calc(100% / 2 - 32px);\n    padding: 16px 17px;\n  }\n\n  @media (min-width: ",") {\n    flex-basis: calc(100% / 3 - 32px);\n  } ;\n"])),z.secondary,I.card,O.tablet,O.desktop),S=b.Z.img(o||(o=(0,v.Z)(["\n  margin-right: 12px;\n  width: 110px;\n  @media (min-width: ",") {\n    margin-right: 14px;\n    width: 120px;\n  }\n  @media (min-width: ",") {\n    margin-right: 12px;\n    width: 158px;\n  } ;\n"])),O.tablet,O.desktop),A=b.Z.ul(a||(a=(0,v.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  @media (min-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: -32px;\n    margin-right: -32px;\n  } ;\n"])),O.tablet),_=b.Z.div(l||(l=(0,v.Z)(["\n  display: flex;\n  align-items: start;\n  justify-content: space-around;\n  text-align: start;\n"]))),D=b.Z.h3(d||(d=(0,v.Z)(["\n  font-family: ",";\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  @media (min-width: ",") {\n    font-size: 20px;\n    line-height: 1.35;\n  } ;\n"])),L.primary,T.accent,O.tablet),M=b.Z.a(s||(s=(0,v.Z)(["\n  font-family: inherit;\n  font-weight: inherit;\n  margin-bottom: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n"]))),N=b.Z.ul(c||(c=(0,v.Z)(["\n  visibility: hidden;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transform: translate(0, 100%);\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  box-shadow: ",";\n  padding: 12px;\n"])),z.secondary,T.accent,I.card),B=b.Z.div(h||(h=(0,v.Z)(["\n  position: relative;\n"]))),U={Card:W,List:A,BoxContent:_,Name:D,WorkDaysList:N,InfoTitle:b.Z.p(f||(f=(0,v.Z)(["\n  font-family: ",";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.37;\n  transition: color 250ms;\n  &:hover {\n    color: ",";\n    cursor: pointer;\n  }\n\n  @media (min-width: ",") {\n    font-size: 14px;\n    line-height: 1.36;\n  }\n  @media (min-width: ",") {\n    font-size: 16px;\n    line-height: 1.38;\n  }\n"])),L.primary,T.accent,O.tablet,O.desktop),InfoBox:B,InfoLinks:b.Z.a(u||(u=(0,v.Z)(["\n  font-family: inherit;\n  line-height: inherit;\n  text-decoration: none;\n  color: inherit;\n"]))),InfoAddress:b.Z.a(m||(m=(0,v.Z)(["\n  font-family: inherit;\n  line-height: inherit;\n  text-decoration: underline;\n  color: inherit;\n"]))),CardPic:S,WorkDaysItem:b.Z.li(p||(p=(0,v.Z)(["\n  font-family: ",";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.33;\n  &:not(:last-child) {\n    margin-bottom: 4px;\n  }\n"])),L.primary),WorkDaysTime:b.Z.span(g||(g=(0,v.Z)(["\n  margin-left: 12px;\n"]))),NameLink:M},P=U.Card,q=U.List,E=U.BoxContent,R=U.Name,F=U.WorkDaysList,H=U.InfoTitle,K=U.InfoBox,X=U.InfoLinks,G=U.InfoAddress,J=U.CardPic,Q=U.WorkDaysItem,V=U.WorkDaysTime,Y=U.NameLink,$=function(n){var i=n.showWorkdays,t=n.friends,e=["MN","TU","WE","TH","FR","SA","SU"];return(0,j.jsx)(q,{children:t.map((function(n,t){var r=n.title,o=n.url,a=n.addressUrl,l=n.imageUrl,d=n.address,s=n.workDays,c=n.phone,h=n.email,f=s&&s.length>0;return(0,j.jsxs)(P,{children:[(0,j.jsx)(R,{children:(0,j.jsx)(Y,{href:o||"#",target:"_blank",children:r})}),(0,j.jsxs)(E,{children:[!!l&&(0,j.jsx)(J,{src:l,alt:r+" logo"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(K,{onClick:i,children:[(0,j.jsxs)(H,{children:["Time: ",(0,j.jsx)("br",{}),f?[s.find((function(n){return!0===n.isOpen}))].map((function(n){return"".concat(n.from,"- ").concat(n.to)})):"-----------------------------------"]}),!!f&&(0,j.jsx)(F,{children:s.map((function(n,i){return!n.isOpen||(0,j.jsxs)(Q,{children:["".concat(e[i]),(0,j.jsx)(V,{children:"".concat(n.from,"- ").concat(n.to)})]},i)}))})]}),(0,j.jsxs)(H,{children:["Adress: ",(0,j.jsx)("br",{}),d?(0,j.jsx)(G,{href:a||"#",target:"_blank",children:d}):"-----------------------------------"]}),(0,j.jsxs)(H,{children:["Email: ",(0,j.jsx)("br",{}),(0,j.jsx)(X,{href:h?"mailto:"+h:"#",target:"_blank",children:h||"-----------------------------------"})]}),(0,j.jsxs)(H,{children:["Phone: ",(0,j.jsx)("br",{}),(0,j.jsx)(X,{href:c?"tel:"+c:"#",target:"_blank",children:c||"-----------------------------------"})]})]})]})]},t)}))})},nn=t(6247),tn=function(){var n=(0,nn.mz)();return(0,j.jsxs)(x.W2,{children:[(0,j.jsx)(C,{}),(0,j.jsx)($,{showWorkdays:function(n){var i=n.currentTarget.children;i[1]&&("visible"!==i[1].style.visibility?i[1].style.visibility="visible":i[1].style.visibility="hidden")},friends:n})]})}}}]);
//# sourceMappingURL=619.a900d33b.chunk.js.map