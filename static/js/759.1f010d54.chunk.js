"use strict";(self.webpackChunkpetly_project_front=self.webpackChunkpetly_project_front||[]).push([[759],{3429:function(n,t,e){e.d(t,{Z:function(){return O}});var r,o,i,a,c,u=e(4165),s=e(5861),l=e(885),d=e(2791),f=e(5048),p=e(1472),h=e(433),v=e(4175),g=e(168),m=e(9202),x=m.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),b=m.Z.button(o||(o=(0,g.Z)(["\n  padding: 8px;\n\n  font-size: inherit;\n  font-weight: 500;\n\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 20px;\n  background: transparent;\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.palette.accent}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transform})),k=e(3329),Z=function(n){var t=n.onClickYes,e=n.onClickNo;return(0,k.jsxs)(x,{children:[(0,k.jsx)(b,{type:"button",title:"Confirm",onClick:t,children:"Yes"}),(0,k.jsx)(b,{type:"button",title:"Deny",onClick:e,children:"No"})]})},w=m.Z.div(i||(i=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),y=m.Z.button(a||(a=(0,g.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 44px;\n  height: 44px;\n\n  color: rgba(17, 17, 17, 0.6);\n\n  background-color: ",";\n  backdrop-filter: blur(2px);\n  border: none;\n  border-radius: 50%;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){var t=n.translucent,e=n.theme;return!0===t?e.backgrounds.whiteTranslucent:e.backgrounds.primary}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.animations.transform})),C=m.Z.svg(c||(c=(0,g.Z)(["\n  width: 19.5;\n  height: 21px;\n\n  fill: currentColor;\n"]))),j=e(5521),L=e(3524),A=e(9085),I=L._.icons,O=function(n){var t=n.translucent,e=void 0!==t&&t,r=n.petId,o=n.noticeId,i=n.owner,a=(0,d.useState)(!1),c=(0,l.Z)(a,2),g=c[0],m=c[1],x=(0,h.IW)(),b=(0,l.Z)(x,1)[0],L=(0,f.v9)(p.sR),O=(0,f.v9)(p.x4),M=(0,j.nS)({userId:L&&O?O:null,owner:i}),_=function(){var n=(0,s.Z)((0,u.Z)().mark((function n(t){var e,r;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.noticeId,r=t.petId,!e||!M){n.next=10;break}return n.prev=2,n.next=5,b({noticeId:e}).then((function(n){var t,e;(n.error&&A.Am.error(n.error.data.message),n.data)&&A.Am.success(null!==(t=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message)&&void 0!==t?t:"Success")}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.log(n.t0);case 10:r&&M&&console.log(r),m(!1);case 12:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(t){return n.apply(this,arguments)}}();return L&&M?(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{type:"button",translucent:e,title:"Remove",onClick:function(){return m(!0)},children:(0,k.jsx)(C,{"aria-label":"Delete icon",children:(0,k.jsx)("use",{href:"".concat(I,"#icon-trashcan")})})}),g&&(0,k.jsx)(v.Z,{message:"Are you sure?",onClose:function(){return m(!1)},children:(0,k.jsx)(Z,{onClickYes:function(){return _({noticeId:o,petId:r})},onClickNo:function(){return m(!1)}})})]}):(0,k.jsx)(k.Fragment,{})}},4175:function(n,t,e){e.d(t,{Z:function(){return m}});var r,o,i,a,c=e(2791),u=e(3524),s=e(168),l=e(9202),d=l.Z.div(r||(r=(0,s.Z)(["\n  position: absolute;\n  right: 54px;\n  top: 10px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  width: 200px;\n  max-width: 200px;\n\n  background-color: rgba(17, 17, 17, 0.8);\n  backdrop-filter: blur(2px);\n\n  border: none;\n  border-radius: 40px;\n  border-top-right-radius: 0;\n\n  box-shadow: 0 0 20px ",";\n\n  z-index: 20;\n"])),(function(n){return n.theme.palette.hoverAccent})),f=l.Z.p(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n\n  text-align: center;\n\n  color: ",";\n"])),(function(n){return n.theme.palette.accent})),p=l.Z.button(i||(i=(0,s.Z)(["\n  padding: 4px;\n  width: 20px;\n  height: 20px;\n  margin-left: auto;\n  margin-bottom: 12px;\n\n  color: ",";\n  background: transparent;\n  border: none;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.theme.palette.triadic}),(function(n){return n.theme.animations.transition}),(function(n){return n.theme.palette.hoverAccent}),(function(n){return n.theme.animations.transform})),h=l.Z.svg(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: currentColor;\n"]))),v=e(3329),g=u._.icons,m=function(n){var t=n.message,e=void 0===t?"":t,r=n.onClose,o=n.children;return(0,c.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]),(0,v.jsxs)(d,{children:[(0,v.jsx)(p,{type:"button",title:"Close",onClick:r,children:(0,v.jsx)(h,{"aria-label":"Close icon",children:(0,v.jsx)("use",{href:"".concat(g,"#icon-close")})})}),(0,v.jsx)(f,{children:e}),o]})}},7275:function(n,t,e){e.d(t,{mz:function(){return d},tZ:function(){return p},zB:function(){return c},Kg:function(){return s},fx:function(){return a}});var r=e(5048),o=e(1472),i=e(433),a=function(n){var t,e,a,c,u=n.categoryName,s=n.page,l=void 0===s?1:s,d=n.limit,f=void 0===d?8:d,p=(0,r.v9)(o.sR),h="own"===u,v="favorite"===u,g=!h&&!v,m=(0,i.mr)({category:u,page:l,limit:f},{skip:h||v,refetchOnMountOrArgChange:!0}),x=m.data,b=m.isLoading,k=(0,i.Mi)({category:u,page:l,limit:f},{skip:!p||v||g,refetchOnMountOrArgChange:!0}),Z=k.data,w=k.isLoading,y=(0,i.Mi)({category:u,page:l,limit:f,favorite:!0},{skip:!p||h||g,refetchOnMountOrArgChange:!0}),C=y.data,j=y.isLoading;switch(u){case"own":c=Z;break;case"favorite":c=C;break;default:c=x}return{notices:null!==(t=null===(e=c)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.notices)&&void 0!==t?t:[],isLoading:b||w||j}},c=function(n){var t,e,r=n.noticeId,o=(0,i.UN)({noticeId:r},{refetchOnMountOrArgChange:!0}),a=o.data,c=o.isLoading,u=o.isSuccess;return{notice:null!==(t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.notice)&&void 0!==t?t:null,isLoading:c,isSuccess:u}},u=(e(9085),e(2454)),s=function(n){var t,e=n.page,r=void 0===e?1:e,o=n.query,i=void 0===o?"":o,a=(0,u.t)({page:r,query:i}),c=a.data,s=a.isLoading;return{data:null!==(t=null===c||void 0===c?void 0:c.news)&&void 0!==t?t:[],isLoading:s}},l=e(2296),d=function(){var n,t,e=(0,l.s)().data;return null!==(n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.friends)&&void 0!==n?n:[]},f=e(7139),p=function(){var n,t,e,r=(0,f.XC)(),o=r.data,i=r.isLoading;return{user:null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.user,pets:null!==(t=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.pets)&&void 0!==t?t:[],isLoading:i}}}}]);
//# sourceMappingURL=759.1f010d54.chunk.js.map