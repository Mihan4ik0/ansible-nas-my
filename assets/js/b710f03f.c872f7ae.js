"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9935],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(b,i(i({ref:t},c),{},{components:o})):r.createElement(b,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2532:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={title:"Ombi"},i=void 0,l={unversionedId:"applications/download-tools/ombi",id:"applications/download-tools/ombi",title:"Ombi",description:"Homepage:",source:"@site/docs/applications/download-tools/ombi.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/ombi",permalink:"/docs/applications/download-tools/ombi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/download-tools/ombi.md",tags:[],version:"current",frontMatter:{title:"Ombi"},sidebar:"tutorialSidebar",previous:{title:"NZBGet",permalink:"/docs/applications/download-tools/nzbget"},next:{title:"Overseerr",permalink:"/docs/applications/download-tools/overseerr"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://ombi.io/"},"https://ombi.io/")),(0,n.kt)("p",null,"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"ombi_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."))}u.isMDXComponent=!0}}]);