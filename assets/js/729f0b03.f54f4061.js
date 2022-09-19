"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Code Server"},i=void 0,s={unversionedId:"applications/development-tools/code-server",id:"applications/development-tools/code-server",title:"Code Server",description:"Homepage:",source:"@site/docs/applications/development-tools/code-server.md",sourceDirName:"applications/development-tools",slug:"/applications/development-tools/code-server",permalink:"/docs/applications/development-tools/code-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/development-tools/code-server.md",tags:[],version:"current",frontMatter:{title:"Code Server"},sidebar:"tutorialSidebar",previous:{title:"Development Tools",permalink:"/docs/category/development-tools"},next:{title:"Gitea",permalink:"/docs/applications/development-tools/gitea"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),(0,n.kt)("p",null,"Code Server: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.linuxserver.io/images/docker-code-server"},"https://docs.linuxserver.io/images/docker-code-server")),(0,n.kt)("p",null,"Run VSCode on you NAS, accessible through the browser. This web based IDE works exactly like VSCode Desktop would, but with the freedom of using it from anywhere."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"code_server_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"Code Server's web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8443"},"http://ansible_nas_host_or_ip:8443")),(0,n.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,n.kt)("p",null,"Code Server uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"code_root")," folder to store its projects, by default defined as a zfs dataset on ",(0,n.kt)("inlineCode",{parentName:"p"},"samba_shares_root"),"."))}u.isMDXComponent=!0}}]);