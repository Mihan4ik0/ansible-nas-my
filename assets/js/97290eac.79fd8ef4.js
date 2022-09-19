"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const a={title:"FreshRSS"},o=void 0,i={unversionedId:"applications/news/freshrss",id:"applications/news/freshrss",title:"FreshRSS",description:"Homepage:",source:"@site/docs/applications/news/freshrss.md",sourceDirName:"applications/news",slug:"/applications/news/freshrss",permalink:"/docs/applications/news/freshrss",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/news/freshrss.md",tags:[],version:"current",frontMatter:{title:"FreshRSS"},sidebar:"tutorialSidebar",previous:{title:"News",permalink:"/docs/category/news"},next:{title:"Miniflux",permalink:"/docs/applications/news/miniflux"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Homepage: ",(0,s.kt)("a",{parentName:"p",href:"https://freshrss.org/"},"https://freshrss.org/")),(0,s.kt)("p",null,"FreshRSS is a self-hosted RSS feed aggregator like Leed or Kriss Feed."),(0,s.kt)("p",null,"It is lightweight, easy to work with, powerful, and customizable."),(0,s.kt)("p",null,"It is a multi-user application with an anonymous reading mode. It supports custom tags. There is an API for (mobile) clients, and a Command-Line Interface."),(0,s.kt)("p",null,"Thanks to the WebSub standard (formerly PubSubHubbub), FreshRSS is able to receive instant push notifications from compatible sources, such as Mastodon, Friendica, WordPress, Blogger, FeedBurner, etc."),(0,s.kt)("p",null,"FreshRSS natively supports basic Web scraping, based on XPath, for Web sites not providing any RSS / Atom feed."),(0,s.kt)("p",null,"Finally, it supports extensions for further tuning."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Set ",(0,s.kt)("inlineCode",{parentName:"p"},"freshrss_enabled: true")," in your ",(0,s.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,s.kt)("p",null,"The FreshRSS web interface can be found at ",(0,s.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8089"},"http://ansible_nas_host_or_ip:8089"),"."))}u.isMDXComponent=!0}}]);