"use strict";(self.webpackChunkpetly_project_front=self.webpackChunkpetly_project_front||[]).push([[516],{3429:function(n,e,t){t.d(e,{Z:function(){return F}});var i,r,o,s,a,d=t(4165),c=t(5861),l=t(885),u=t(2791),m=t(5048),h=t(1472),x=t(433),p=t(4175),f=t(168),g=t(9202),b=g.Z.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),w=g.Z.button(r||(r=(0,f.Z)(["\n  padding: 8px;\n\n  font-size: inherit;\n  font-weight: 500;\n\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 20px;\n  background: transparent;\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transform})),Z=t(3329),j=function(n){var e=n.onClickYes,t=n.onClickNo;return(0,Z.jsxs)(b,{children:[(0,Z.jsx)(w,{type:"button",title:"Confirm",onClick:e,children:"Yes"}),(0,Z.jsx)(w,{type:"button",title:"Deny",onClick:t,children:"No"})]})},v=g.Z.div(o||(o=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),k=g.Z.button(s||(s=(0,f.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 44px;\n  height: 44px;\n\n  color: rgba(17, 17, 17, 0.6);\n\n  background-color: ",";\n  backdrop-filter: blur(2px);\n  border: none;\n  border-radius: 50%;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){var e=n.translucent,t=n.theme;return!0===e?t.backgrounds.whiteTranslucent:t.backgrounds.primary}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.animations.transform})),y=g.Z.svg(a||(a=(0,f.Z)(["\n  width: 19.5;\n  height: 21px;\n\n  fill: currentColor;\n"]))),E=t(3032),C=t(3524),z=t(8174),A=C._.icons,F=function(n){var e=n.translucent,t=void 0!==e&&e,i=n.petId,r=n.noticeId,o=n.owner,s=(0,u.useState)(!1),a=(0,l.Z)(s,2),f=a[0],g=a[1],b=(0,x.IW)(),w=(0,l.Z)(b,1)[0],C=(0,m.v9)(h.sR),F=(0,m.v9)(h.x4),N=(0,E.nS)({userId:C&&F?F:null,owner:o}),I=function(){var n=(0,c.Z)((0,d.Z)().mark((function n(e){var t,i;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.noticeId,i=e.petId,!t||!N){n.next=10;break}return n.prev=2,n.next=5,w({noticeId:t}).then((function(n){var e,t;(n.error&&z.Am.error(n.error.data.message),n.data)&&z.Am.success(null!==(e=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)&&void 0!==e?e:"Success")}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.log(n.t0);case 10:i&&N&&console.log(i),g(!1);case 12:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e){return n.apply(this,arguments)}}();return C&&N?(0,Z.jsxs)(v,{children:[(0,Z.jsx)(k,{type:"button",translucent:t,title:"Remove",onClick:function(){return g(!0)},children:(0,Z.jsx)(y,{"aria-label":"Delete icon",children:(0,Z.jsx)("use",{href:"".concat(A,"#icon-trashcan")})})}),f&&(0,Z.jsx)(p.Z,{message:"Are you sure?",onClose:function(){return g(!1)},children:(0,Z.jsx)(j,{onClickYes:function(){return I({noticeId:r,petId:i})},onClickNo:function(){return g(!1)}})})]}):(0,Z.jsx)(Z.Fragment,{})}},4175:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,s,a=t(2791),d=t(3524),c=t(168),l=t(9202),u=l.Z.div(i||(i=(0,c.Z)(["\n  position: absolute;\n  right: 54px;\n  top: 10px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  width: 200px;\n  max-width: 200px;\n\n  background-color: rgba(17, 17, 17, 0.8);\n  backdrop-filter: blur(2px);\n\n  border: none;\n  border-radius: 40px;\n  border-top-right-radius: 0;\n\n  box-shadow: 0 0 20px ",";\n\n  z-index: 20;\n"])),(function(n){return n.theme.palette.hoverAccent})),m=l.Z.p(r||(r=(0,c.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n\n  text-align: center;\n\n  color: ",";\n"])),(function(n){return n.theme.palette.accent})),h=l.Z.button(o||(o=(0,c.Z)(["\n  padding: 4px;\n  width: 20px;\n  height: 20px;\n  margin-left: auto;\n  margin-bottom: 12px;\n\n  color: ",";\n  background: transparent;\n  border: none;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.animations.transform})),x=l.Z.svg(s||(s=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: currentColor;\n"]))),p=t(3329),f=d._.icons,g=function(n){var e=n.message,t=void 0===e?"":e,i=n.onClose,r=n.children;return(0,a.useEffect)((function(){var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[i]),(0,p.jsxs)(u,{children:[(0,p.jsx)(h,{type:"button",title:"Close",onClick:i,children:(0,p.jsx)(x,{"aria-label":"Close icon",children:(0,p.jsx)("use",{href:"".concat(f,"#icon-close")})})}),(0,p.jsx)(m,{children:t}),r]})}},3516:function(n,e,t){t.r(e),t.d(e,{default:function(){return Xn}});var i,r,o,s,a,d,c,l,u,m,h,x,p,f,g,b,w,Z,j,v,k,y,E,C,z,A,F,N,I,L,S,T,_,D,M,O,R,U=t(885),W=t(168),Y=t(1087),B=t(9202),J=B.Z.div(i||(i=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 14px;\n  margin-bottom: 40px;\n  border-radius: 20px;\n  color: inherit;\n  background: ",";\n  box-shadow: ",";\n\n  @media screen and (min-width: ",") {\n    position: relative;\n    margin-bottom: 20px;\n    padding: 24px 40px 24px 0;\n    min-width: calc((100vw - 704px) / 2 + 704px);\n    border-radius: 0px 40px 40px 0px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n    padding: 20px 16px 103px 0;\n    min-width: calc(100vw - (100vw - 1247px) / 2 - 853px);\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.shadows.primary}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),X=B.Z.div(r||(r=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    flex-direction: row-reverse;\n  }\n\n  @media screen and (max-width: ",") {\n    flex-direction: column;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: column;\n    margin-left: auto;\n  }\n"])),(function(n){return n.theme.screens.toDesktop}),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.desktop})),q=B.Z.div(o||(o=(0,W.Z)(["\n  @media screen and (max-width: ",") {\n    margin-right: 52px;\n  }\n  @media screen and (max-width: ",") {\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.screens.toDesktop}),(function(n){return n.theme.screens.toTablet})),G=((0,B.Z)(Y.rU)(s||(s=(0,W.Z)(["\n  text-decoration: none;\n  display: flex;\n"]))),t(2554)),H=function(n){var e=n.theme;return(0,G.iv)(a||(a=(0,W.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 4px;\n\n    @media screen and (min-width: ",") {\n      margin-bottom: 8px;\n    }\n  }\n"])),e.screens.tablet)},K=B.Z.div(d||(d=(0,W.Z)(["\n  ","\n"])),H),P=B.Z.form(c||(c=(0,W.Z)(["\n  ","\n"])),H),Q=B.Z.label(l||(l=(0,W.Z)(["\n  margin-right: 8px;\n  width: 56px;\n\n  font-weight: 500;\n  font-size: 12px;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    width: 83px;\n    margin-right: 24px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),V=B.Z.input(u||(u=(0,W.Z)(["\n  width: 159px;\n  height: 24px;\n  padding: 4px 18px;\n  line-height: 1.33;\n  margin-right: 9px;\n\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n\n  font-weight: 500;\n  font-size: 12px;\n\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n\n  &.edit {\n    background-color: ",";\n  }\n\n  &.non-edit {\n    background-color: none;\n    border: transparent;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 216px;\n    height: 32px;\n    padding: 4px 12px;\n    margin-right: 24px;\n    font-size: 18px;\n    line-height: 1.38;\n  }\n"])),(function(n){return n.theme.backgrounds.primary}),(function(n){return n.theme.screens.tablet})),$=B.Z.button(m||(m=(0,W.Z)(["\n  background: #fdf7f2;\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border-radius: 20px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n    padding: 8px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),nn=B.Z.svg(h||(h=(0,W.Z)(["\n  fill: ",";\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.palette.accent})),en=B.Z.svg(x||(x=(0,W.Z)(["\n  fill: ",";\n  width: 100%;\n  height: 100%;\n\n  button:disabled & {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.backgrounds.backdrop})),tn=t(4094),rn=t(2791),on=t(3329),sn=function(n){var e=n.label,t=(n.text,n.isEditing),i=n.onFieldEddited,r=(0,rn.useState)(!1),o=(0,U.Z)(r,2),s=o[0],a=o[1];return(0,on.jsx)(on.Fragment,{children:s?(0,on.jsxs)(P,{children:[(0,on.jsx)(Q,{htmlFor:e,children:e}),(0,on.jsx)(V,{type:"text",id:e,name:e,readOnly:!s,className:"edit"}),(0,on.jsx)($,{type:"submit",children:(0,on.jsx)(nn,{children:(0,on.jsx)("use",{href:"".concat(tn.Z,"#icon-check")})})})]}):(0,on.jsxs)(K,{children:[(0,on.jsx)(Q,{htmlFor:e,children:e}),(0,on.jsx)(V,{type:"text",id:e,name:e,readOnly:!s,className:"non-edit"}),(0,on.jsx)($,{type:"button",onClick:function(){a(!0),i()},disabled:!s&&t,children:(0,on.jsx)(en,{children:(0,on.jsx)("use",{href:"".concat(tn.Z,"#icon-pensil")})})})]})})},an=B.Z.div(p||(p=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: fit-content;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-end;\n    margin-bottom: 36px;\n    margin-right: -84px;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),dn=B.Z.div(f||(f=(0,W.Z)(["\n  width: 233px;\n  height: 233px;\n  margin-bottom: 12px;\n\n  background-color: ",";\n  border-radius: 50%;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.backgrounds.backdrop}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),cn=B.Z.label(g||(g=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (min-width: ",") {\n    transform: translateX(-12px);\n  }\n"])),(function(n){return n.theme.screens.desktop})),ln=B.Z.input(b||(b=(0,W.Z)(["\n  display: none;\n"]))),un=B.Z.svg(w||(w=(0,W.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 4px;\n\n  fill: ",";\n"])),(function(n){return n.theme.palette.accent})),mn=B.Z.p(Z||(Z=(0,W.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.83;\n"]))),hn=function(n){var e=n.isEditing;n.onFieldEddited;return(0,on.jsxs)(an,{children:[(0,on.jsx)(dn,{children:(0,on.jsx)("img",{src:"",alt:""})}),(0,on.jsxs)(cn,{htmlFor:"avatar",children:[(0,on.jsx)(un,{children:(0,on.jsx)("use",{href:"".concat(tn.Z,"#icon-camera")})}),(0,on.jsx)(mn,{children:"Edit photo"})]}),(0,on.jsx)(ln,{id:"avatar",type:"file",disabled:e})]})},xn=(0,B.Z)(Y.rU)(j||(j=(0,W.Z)(["\n  text-decoration: none;\n  display: flex;\n  margin-left: auto;\n  margin-top: 40px;\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    bottom: 24px;\n    right: 620px;\n    margin: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    bottom: 40px;\n    right: 310px;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),pn=B.Z.svg(v||(v=(0,W.Z)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.palette.accent})),fn=B.Z.p(k||(k=(0,W.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.backgrounds.backdrop})),gn=function(){return(0,on.jsxs)(xn,{to:"logout",children:[(0,on.jsx)(pn,{children:(0,on.jsx)("use",{href:"".concat(tn.Z,"#icon-logout")})}),(0,on.jsx)(fn,{children:"Log Out"})]})},bn=function(){var n=(0,rn.useState)(!1),e=(0,U.Z)(n,2),t=e[0],i=e[1],r=function(){i(!0)};return(0,on.jsxs)(J,{children:[(0,on.jsxs)(X,{children:[(0,on.jsx)(hn,{isEditing:t,onFieldEddited:r}),(0,on.jsxs)(q,{children:[(0,on.jsx)(sn,{label:"name",text:"Anna",isEditing:t,onFieldEddited:r}),(0,on.jsx)(sn,{label:"name",text:"Anna",isEditing:t,onFieldEddited:r}),(0,on.jsx)(sn,{label:"name",text:"Anna",isEditing:t,onFieldEddited:r}),(0,on.jsx)(sn,{label:"name",text:"Anna",isEditing:t,onFieldEddited:r})]})]}),(0,on.jsx)(gn,{})]})},wn=B.Z.h2(y||(y=(0,W.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.36;\n\n  &.information {\n    margin-bottom: 18px;\n    @media screen and (min-width: ",") {\n      margin-bottom: 24px;\n    }\n  }\n\n  &.pets {\n    margin-bottom: 24px;\n  }\n\n  &.user {\n    @media screen and (max-width: ",") {\n      width: 280px;\n    }\n\n    @media screen and (min-width: ",") {\n      width: 394px;\n      margin-left: auto;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 28px;\n    line-height: 1.43;\n  }\n"])),(function(n){return n.theme.screens.desktop}),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.desktop}),(function(n){return n.theme.screens.tablet})),Zn=function(n){var e=n.text,t=n.className,i=void 0===t?"":t;return(0,on.jsx)(wn,{className:i,children:e})},jn=B.Z.div(E||(E=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),vn=t(3429),kn=B.Z.div(C||(C=(0,W.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  border-radius: 20px;\n  color: inherit;\n  background: ",";\n  box-shadow: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-start;\n    border-radius: 40px;\n    position: relative;\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.shadows.primary}),(function(n){return n.theme.screens.tablet})),yn=B.Z.div(z||(z=(0,W.Z)(["\n  width: 240px;\n  height: 240px;\n  background-color: grey;\n  border-radius: 20px;\n  margin-bottom: 16px;\n\n  @media screen and (min-width: ",") {\n    border-radius: 40px;\n    max-width: 161px;\n    height: 161px;\n    margin-bottom: 0;\n    margin-right: 32px;\n  }\n\n  & > img {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.screens.tablet})),En=B.Z.div(A||(A=(0,W.Z)(["\n  width: fit-content;\n"]))),Cn=B.Z.p(F||(F=(0,W.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.57;\n  margin-right: auto;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  &.delete {\n    margin: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    font-weight: 400;\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),zn=B.Z.div(N||(N=(0,W.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 12px;\n"]))),An=(0,B.Z)(vn.Z)(I||(I=(0,W.Z)(["\n  && {\n    @media screen and (max-width: ",") {\n      width: 20px;\n      height: 20px;\n    }\n\n    @media screen and (min-width: ",") {\n      position: absolute;\n      right: 0;\n    }\n  }\n"])),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.tablet})),Fn=function(){return(0,on.jsxs)(kn,{children:[(0,on.jsx)(yn,{children:(0,on.jsx)("img",{src:"",alt:""})}),(0,on.jsxs)(En,{children:[(0,on.jsxs)(zn,{children:[(0,on.jsx)(Cn,{className:"delete",children:"Name: Jack"}),(0,on.jsx)(An,{onRemove:function(){}})]}),(0,on.jsx)(Cn,{children:"Date of birth: 22.04.2018"}),(0,on.jsx)(Cn,{children:"Breed: 22.04.2018"}),(0,on.jsx)(Cn,{children:"Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"})]})]})},Nn=function(n){var e=n.screen;return(0,on.jsxs)(jn,{children:[(0,on.jsx)(Fn,{}),(0,on.jsx)(Fn,{screen:e})]})},In=B.Z.div(L||(L=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]))),Ln=B.Z.p(S||(S=(0,W.Z)(["\n  margin-right: 15px;\n\n  font-weight: 500;\n  font-size: 20px;\n  color: inherit;\n"]))),Sn=(0,B.Z)(Y.rU)(T||(T=(0,W.Z)(["\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.theme.palette.accent})),Tn=B.Z.svg(_||(_=(0,W.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.palette.triadic})),_n=function(){return(0,on.jsxs)(In,{children:[(0,on.jsx)(Ln,{children:"Add pet"}),(0,on.jsx)(Sn,{to:"add pet",children:(0,on.jsx)(Tn,{children:(0,on.jsx)("use",{href:"".concat(tn.Z,"#icon-plus")})})})]})},Dn=B.Z.div(D||(D=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 45px;\n\n  @media screen and (min-width: ",") {\n    padding-top: 20px;\n    margin-right: auto;\n    justify-content: left;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Mn=B.Z.div(M||(M=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 26px;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 25px;\n    width: 705px;\n    margin-left: auto;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 805px;\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),On=B.Z.div(O||(O=(0,W.Z)([""]))),Rn=B.Z.div(R||(R=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: ",") {\n    width: 280px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 704px;\n    margin-left: auto;\n  }\n  @media screen and (min-width: ",") {\n    width: 821px;\n    margin-left: 32px;\n  }\n"])),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Un=768,Wn=1280,Yn="mobile",Bn="tablet",Jn="desktop",Xn=function(){var n=function(){return window.innerWidth>=Wn?Jn:window.innerWidth>=Un?Bn:Yn},e=(0,rn.useState)(n),t=(0,U.Z)(e,2),i=t[0],r=t[1],o=function(){r(n)};return(0,rn.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}})),(0,on.jsxs)(Dn,{children:[(0,on.jsxs)(On,{children:[i===Bn?(0,on.jsxs)(Mn,{children:[(0,on.jsx)(Zn,{text:"My information:",className:"user"}),(0,on.jsx)(_n,{})]}):(0,on.jsx)(Zn,{text:"My information:",className:"user information"}),(0,on.jsx)(bn,{})]}),(0,on.jsxs)(Rn,{children:[i!==Bn?(0,on.jsxs)(Mn,{children:[(0,on.jsx)(Zn,{text:"My pets:"}),(0,on.jsx)(_n,{})]}):(0,on.jsx)(Zn,{text:"My pets:",className:"pets"}),(0,on.jsx)(Nn,{screen:i})]})]})}}}]);
//# sourceMappingURL=516.f59f4d20.chunk.js.map