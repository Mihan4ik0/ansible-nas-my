"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Nodemation (n8n)"},i=void 0,l={unversionedId:"applications/home-automation/n8n",id:"applications/home-automation/n8n",title:"Nodemation (n8n)",description:"Homepage:",source:"@site/docs/applications/home-automation/n8n.md",sourceDirName:"applications/home-automation",slug:"/applications/home-automation/n8n",permalink:"/docs/applications/home-automation/n8n",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/home-automation/n8n.md",tags:[],version:"current",frontMatter:{title:"Nodemation (n8n)"},sidebar:"tutorialSidebar",previous:{title:"Mosquitto",permalink:"/docs/applications/home-automation/mosquitto"},next:{title:"openHAB",permalink:"/docs/applications/home-automation/openhab"}},s={},c=[{value:"Usage",id:"usage",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://n8n.io"},"https://n8n.io")),(0,o.kt)("p",null,"Extendable workflow automation tool that enables you to connect anything to everything. More pragrmatically, it helps you interconnect API with each other to build your own information / work flows."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"n8n_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"n8n is secured by default, he user and password can be set with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    n8n_basic_auth_user: "<user name>"\n    n8n_basic_auth_password: "<user password>"\n')),(0,o.kt)("p",null,'The default for these is "n8n_user" and "n8n_change_me" respectively, it is recommended to change these.'))}u.isMDXComponent=!0}}]);