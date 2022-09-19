"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={title:"Booksonic"},a=void 0,p={unversionedId:"applications/media-serving/booksonic",id:"applications/media-serving/booksonic",title:"Booksonic",description:"Homepage:",source:"@site/docs/applications/media-serving/booksonic.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/booksonic",permalink:"/docs/applications/media-serving/booksonic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/media-serving/booksonic.md",tags:[],version:"current",frontMatter:{title:"Booksonic"},sidebar:"tutorialSidebar",previous:{title:"Airsonic",permalink:"/docs/applications/media-serving/airsonic"},next:{title:"Calibre-web",permalink:"/docs/applications/media-serving/calibre"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://booksonic.org/"},"https://booksonic.org/")),(0,r.kt)("p",null,"Stream your audiobooks to any pc or android phone. Most of the functionality is also available on other platforms that have apps for subsonic."),(0,r.kt)("p",null,"Fully Open-Source. You can find the code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/popeen?tab=repositories&q=booksonic"},"GitHub")),(0,r.kt)("p",null,"Get the Android app on ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=github.popeen.dsub"},"Google Play")," or build it from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/popeen/Popeens-DSub"},"source")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"booksonic_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"The Booksonic web interface can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:4041"},"http://ansible_nas_host_or_ip:4041"),"."),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"The default username and password is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," - you'll need to change this immediately after logging in."))}u.isMDXComponent=!0}}]);