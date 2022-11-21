"use strict";(self.webpackChunkpetly_project_front=self.webpackChunkpetly_project_front||[]).push([[516],{3516:function(n,e,t){t.r(e),t.d(e,{default:function(){return Vn}});var i,r,a,d,o,s,c,l,m,h,x,u,p,f,g,b,w,Z,j,v,y,k,E,F,z,_,N,L,C,T,U,D,S,R,B,M,O,W=t(885),A=t(168),I=t(1087),J=t(9202),P=J.Z.div(i||(i=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 14px;\n  margin-bottom: 40px;\n  border-radius: 20px;\n  color: inherit;\n  background: ",";\n  box-shadow: ",";\n\n  @media screen and (min-width: ",") {\n    position: relative;\n    margin-bottom: 20px;\n    padding: 24px 40px 24px 0;\n    min-width: calc((100vw - 704px) / 2 + 704px);\n    border-radius: 0px 40px 40px 0px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n    padding: 20px 16px 103px 0;\n    min-width: calc(100vw - (100vw - 1247px) / 2 - 853px);\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.shadows.primary}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),X=J.Z.div(r||(r=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    flex-direction: row-reverse;\n  }\n\n  @media screen and (max-width: ",") {\n    flex-direction: column;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: column;\n    margin-left: auto;\n  }\n"])),(function(n){return n.theme.screens.toDesktop}),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.desktop})),q=J.Z.div(a||(a=(0,A.Z)(["\n  @media screen and (max-width: ",") {\n    margin-right: 52px;\n  }\n  @media screen and (max-width: ",") {\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.screens.toDesktop}),(function(n){return n.theme.screens.toTablet})),G=((0,J.Z)(I.rU)(d||(d=(0,A.Z)(["\n  text-decoration: none;\n  display: flex;\n"]))),t(4942)),H=t(2554),K=function(n){var e=n.theme;return(0,H.iv)(o||(o=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 4px;\n\n    @media screen and (min-width: ",") {\n      margin-bottom: 8px;\n    }\n  }\n"])),e.screens.tablet)},Q=J.Z.div(s||(s=(0,A.Z)(["\n  ","\n"])),K),V=J.Z.form(c||(c=(0,A.Z)(["\n  ","\n"])),K),Y=J.Z.label(l||(l=(0,A.Z)(["\n  margin-right: 8px;\n  width: 56px;\n\n  font-weight: 500;\n  font-size: 12px;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    width: 83px;\n    margin-right: 24px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),$=J.Z.input(m||(m=(0,A.Z)(["\n  width: 159px;\n  height: 24px;\n  padding: 4px 18px;\n  line-height: 1.33;\n  margin-right: 9px;\n\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n\n  font-weight: 500;\n  font-size: 12px;\n\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n\n  &.edit {\n    background-color: ",";\n  }\n\n  &.non-edit {\n    background-color: none;\n    border: transparent;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 216px;\n    height: 32px;\n    padding: 4px 12px;\n    margin-right: 24px;\n    font-size: 18px;\n    line-height: 1.38;\n  }\n"])),(function(n){return n.theme.backgrounds.primary}),(function(n){return n.theme.screens.tablet})),nn=J.Z.button(h||(h=(0,A.Z)(["\n  background: #fdf7f2;\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border-radius: 20px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n    padding: 8px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),en=J.Z.svg(x||(x=(0,A.Z)(["\n  fill: ",";\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.palette.accent})),tn=J.Z.svg(u||(u=(0,A.Z)(["\n  fill: ",";\n  width: 100%;\n  height: 100%;\n\n  button:disabled & {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.backgrounds.backdrop})),rn=t(7139),an=t(4094),dn=t(2791),on=t(3329),sn=function(n){var e=n.id,t=n.label,i=n.text,r=n.isEditing,a=n.onFieldEddited,d=(0,dn.useState)(!1),o=(0,W.Z)(d,2),s=o[0],c=o[1],l=(0,dn.useState)(""),m=(0,W.Z)(l,2),h=m[0],x=m[1],u=(0,rn.ec)(),p=(0,W.Z)(u,1)[0];(0,dn.useEffect)((function(){x(i)}),[i]);return(0,on.jsx)(on.Fragment,{children:s?(0,on.jsxs)(V,{onSubmit:function(n){n.preventDefault();var t=(0,G.Z)({},e,h),i=JSON.stringify(t);p({data:i}),a(!1),c(!1)},children:[(0,on.jsx)(Y,{htmlFor:t,children:t}),(0,on.jsx)($,{type:"text",id:t,name:t,readOnly:!s,className:"edit",value:h,onChange:function(n){var e=n.currentTarget.value;x(e)}}),(0,on.jsx)(nn,{type:"submit",children:(0,on.jsx)(en,{children:(0,on.jsx)("use",{href:"".concat(an.Z,"#icon-check")})})})]}):(0,on.jsxs)(Q,{children:[(0,on.jsx)(Y,{htmlFor:t,children:t}),(0,on.jsx)($,{type:"text",id:t,name:t,readOnly:!s,className:"non-edit",value:h}),(0,on.jsx)(nn,{type:"button",onClick:function(){c(!0),a(!0)},disabled:!s&&r,children:(0,on.jsx)(tn,{children:(0,on.jsx)("use",{href:"".concat(an.Z,"#icon-pensil")})})})]})})},cn=J.Z.div(p||(p=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: fit-content;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-end;\n    margin-bottom: 36px;\n    margin-right: -84px;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),ln=J.Z.div(f||(f=(0,A.Z)(["\n  width: 233px;\n  height: 233px;\n  margin-bottom: 12px;\n\n  background-color: ",";\n  border-radius: 50%;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.backgrounds.backdrop}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),mn=J.Z.label(g||(g=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (min-width: ",") {\n    transform: translateX(-12px);\n  }\n"])),(function(n){return n.theme.screens.desktop})),hn=J.Z.input(b||(b=(0,A.Z)(["\n  display: none;\n"]))),xn=J.Z.svg(w||(w=(0,A.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 4px;\n\n  fill: ",";\n"])),(function(n){return n.theme.palette.accent})),un=J.Z.p(Z||(Z=(0,A.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.83;\n"]))),pn=function(n){var e=n.isEditing,t=(n.onFieldEdited,(0,rn.ec)()),i=(0,W.Z)(t,1)[0];return(0,on.jsxs)(cn,{children:[(0,on.jsx)(ln,{children:(0,on.jsx)("img",{src:"",alt:""})}),(0,on.jsxs)(mn,{htmlFor:"avatar",children:[(0,on.jsx)(xn,{children:(0,on.jsx)("use",{href:"".concat(an.Z,"#icon-camera")})}),(0,on.jsx)(un,{children:"Edit photo"})]}),(0,on.jsx)(hn,{id:"avatar",type:"file",disabled:e,onChange:function(n){n.preventDefault();var e=n.target.files[0];i({file:e})}})]})},fn=J.Z.button(j||(j=(0,A.Z)(["\n  text-decoration: none;\n  display: flex;\n  margin-left: auto;\n  margin-top: 40px;\n  border: none;\n  background: none;\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    bottom: 24px;\n    right: 620px;\n    margin: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    bottom: 40px;\n    right: 310px;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),gn=J.Z.svg(v||(v=(0,A.Z)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.palette.accent})),bn=J.Z.p(y||(y=(0,A.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.backgrounds.backdrop})),wn=t(5048),Zn=t(1472),jn=t(6208),vn=function(){var n=(0,wn.v9)(Zn.x4),e=(0,jn.DU)(n),t=(0,W.Z)(e,1)[0];return(0,on.jsxs)(fn,{type:"button",onClick:t,children:[(0,on.jsx)(gn,{children:(0,on.jsx)("use",{href:"".concat(an.Z,"#icon-logout")})}),(0,on.jsx)(bn,{children:"Log Out"})]})},yn=function(n){var e=n.user,t=(0,dn.useState)(!1),i=(0,W.Z)(t,2),r=i[0],a=i[1],d=e.name,o=e.email,s=e.birthday,c=e.phone,l=e.location,m=function(n){a(n)};return(0,on.jsxs)(P,{children:[(0,on.jsxs)(X,{children:[(0,on.jsx)(pn,{isEditing:r,onFieldEddited:m}),(0,on.jsxs)(q,{children:[(0,on.jsx)(sn,{id:"name",label:"Name",text:d,isEditing:r,onFieldEddited:m}),(0,on.jsx)(sn,{id:"email",label:"Email",text:o,isEditing:r,onFieldEddited:m}),(0,on.jsx)(sn,{id:"birthday",label:"Birthday",text:null!==s&&void 0!==s?s:"00.00.0000",isEditing:r,onFieldEddited:m}),(0,on.jsx)(sn,{id:"phone",label:"Phone",text:c,isEditing:r,onFieldEddited:m}),(0,on.jsx)(sn,{id:"location",label:"City",text:l,isEditing:r,onFieldEddited:m})]})]}),(0,on.jsx)(vn,{})]})},kn=J.Z.h2(k||(k=(0,A.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.36;\n\n  &.information {\n    margin-bottom: 18px;\n    @media screen and (min-width: ",") {\n      margin-bottom: 24px;\n    }\n  }\n\n  &.pets {\n    margin-bottom: 24px;\n  }\n\n  &.user {\n    @media screen and (max-width: ",") {\n      width: 280px;\n    }\n\n    @media screen and (min-width: ",") {\n      width: 394px;\n      margin-left: auto;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 28px;\n    line-height: 1.43;\n  }\n"])),(function(n){return n.theme.screens.desktop}),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.desktop}),(function(n){return n.theme.screens.tablet})),En=function(n){var e=n.text,t=n.className,i=void 0===t?"":t;return(0,on.jsx)(kn,{className:i,children:e})},Fn=J.Z.div(E||(E=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),zn=t(3429),_n=J.Z.div(F||(F=(0,A.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  padding: 20px;\n  border-radius: 20px;\n  color: inherit;\n  background: ",";\n  box-shadow: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-start;\n    border-radius: 40px;\n    position: relative;\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.shadows.primary}),(function(n){return n.theme.screens.tablet})),Nn=J.Z.div(z||(z=(0,A.Z)(["\n  width: 240px;\n  height: 240px;\n  background-color: grey;\n  border-radius: 20px;\n  margin-bottom: 16px;\n\n  @media screen and (min-width: ",") {\n    border-radius: 40px;\n    max-width: 161px;\n    height: 161px;\n    margin-bottom: 0;\n    margin-right: 32px;\n  }\n\n  & > img {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.screens.tablet})),Ln=J.Z.div(_||(_=(0,A.Z)(["\n  width: fit-content;\n"]))),Cn=J.Z.p(N||(N=(0,A.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.57;\n  margin-right: auto;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  &.delete {\n    margin: 0;\n  }\n\n  @media screen and (min-width: ",") {\n    font-weight: 400;\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.screens.tablet})),Tn=J.Z.div(L||(L=(0,A.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 12px;\n"]))),Un=((0,J.Z)(zn.Z)(C||(C=(0,A.Z)(["\n  && {\n    @media screen and (max-width: ",") {\n      width: 20px;\n      height: 20px;\n    }\n\n    @media screen and (min-width: ",") {\n      position: absolute;\n      right: 0;\n    }\n  }\n"])),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.tablet})),t(8952)),Dn=function(n){var e=n._id,t=n.name,i=n.birthday,r=n.breed,a=n.imageURL,d=n.comments,o=n.owner;return(0,on.jsxs)(_n,{children:[(0,on.jsx)(Nn,{children:(0,on.jsx)("img",{src:a?a.mobile:"",alt:t})}),(0,on.jsxs)(Ln,{children:[(0,on.jsxs)(Tn,{children:[(0,on.jsxs)(Cn,{className:"delete",children:["Name: ",t]}),(0,on.jsx)(zn.Z,{petId:e,owner:o})]}),(0,on.jsxs)(Cn,{children:["Date of birth: ",i?(0,Un.um)(i):"00.00.0000"]}),(0,on.jsxs)(Cn,{children:["Breed: ",r]}),(0,on.jsxs)(Cn,{children:["Comments: ",d]})]})]})},Sn=function(n){var e=n.pets,t=0!==e.length;return(0,on.jsx)(on.Fragment,{children:t&&(0,on.jsx)(Fn,{children:e.map((function(n){var e=n._id,t=n.name,i=n.birthday,r=n.breed,a=n.imageURL,d=n.comments,o=n.owner;return(0,on.jsx)(Dn,{_id:e,name:t,birthday:i,breed:r,imageURL:a,comments:d,owner:o},e)}))})})},Rn=J.Z.div(T||(T=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]))),Bn=J.Z.p(U||(U=(0,A.Z)(["\n  margin-right: 15px;\n\n  font-weight: 500;\n  font-size: 20px;\n  color: inherit;\n"]))),Mn=(0,J.Z)(I.rU)(D||(D=(0,A.Z)(["\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.theme.palette.accent})),On=J.Z.svg(S||(S=(0,A.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.palette.triadic})),Wn=function(){return(0,on.jsxs)(Rn,{children:[(0,on.jsx)(Bn,{children:"Add pet"}),(0,on.jsx)(Mn,{to:"add pet",children:(0,on.jsx)(On,{children:(0,on.jsx)("use",{href:"".concat(an.Z,"#icon-plus")})})})]})},An=J.Z.div(R||(R=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 45px;\n\n  @media screen and (min-width: ",") {\n    padding-top: 20px;\n    margin-right: auto;\n    justify-content: left;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),In=J.Z.div(B||(B=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 26px;\n\n  @media screen and (min-width: ",") {\n    margin-bottom: 25px;\n    width: 705px;\n    margin-left: auto;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 805px;\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Jn=J.Z.div(M||(M=(0,A.Z)([""]))),Pn=J.Z.div(O||(O=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: ",") {\n    width: 280px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 704px;\n    margin-left: auto;\n  }\n  @media screen and (min-width: ",") {\n    width: 821px;\n    margin-left: 32px;\n  }\n"])),(function(n){return n.theme.screens.toTablet}),(function(n){return n.theme.screens.tablet}),(function(n){return n.theme.screens.desktop})),Xn=t(6247),qn=768,Gn=1280,Hn="mobile",Kn="tablet",Qn="desktop",Vn=function(){var n=(0,Xn.tZ)(),e=n.user,t=n.isLoading,i=function(){return window.innerWidth>=Gn?Qn:window.innerWidth>=qn?Kn:Hn},r=(0,dn.useState)(i),a=(0,W.Z)(r,2),d=a[0],o=a[1],s=function(){o(i)};return(0,dn.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}})),(0,on.jsx)(on.Fragment,{children:t?"loading...":(0,on.jsxs)(An,{children:[(0,on.jsxs)(Jn,{children:[d===Kn?(0,on.jsxs)(In,{children:[(0,on.jsx)(En,{text:"My information:",className:"user"}),(0,on.jsx)(Wn,{})]}):(0,on.jsx)(En,{text:"My information:",className:"user information"}),(0,on.jsx)(yn,{user:e})]}),(0,on.jsxs)(Pn,{children:[d!==Kn?(0,on.jsxs)(In,{children:[(0,on.jsx)(En,{text:"My pets:"}),(0,on.jsx)(Wn,{})]}):(0,on.jsx)(En,{text:"My pets:",className:"pets"}),(0,on.jsx)(Sn,{pets:[{_id:"637a6769dd0464a181a70aa0",name:"Bob",birthday:"2022-03-01T00:00:00.000Z",breed:"labrador",imageURL:null,comments:"my lovely dog",owner:"6371376655714f3cabcd9df2"},{_id:"637a6769dd0464a181a70aa4",name:"Bob",birthday:"2022-03-01T00:00:00.000Z",breed:"labrador",imageURL:{mobile:"pets/637a6769dd0464a181a70aa0-240x240.jpg",mobile_retina:"pets/637a6769dd0464a181a70aa0-240x240@2x.jpg",tablet:"pets/637a6769dd0464a181a70aa0-161x161.jpg",tablet_retina:"pets/637a6769dd0464a181a70aa0-161x161@2x.jpg",profile:"pets/637a6769dd0464a181a70aa0-288x328.jpg",profile_retina:"pets/637a6769dd0464a181a70aa0-288x328@2x.jpg"},comments:"my lovely dog",owner:"6371376655714f3cabcd9df2"}]})]})]})})}}}]);
//# sourceMappingURL=516.1a437e62.chunk.js.map