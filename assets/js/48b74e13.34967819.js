"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8917],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6281:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},i="NFS Exports",s={unversionedId:"further-configuration/nfs-exports",id:"further-configuration/nfs-exports",title:"NFS Exports",description:"Ansible-NAS uses the awesome geerlingguy.nfs Ansible role to configure NFS exports.",source:"@site/docs/further-configuration/nfs-exports.md",sourceDirName:"further-configuration",slug:"/further-configuration/nfs-exports",permalink:"/docs/further-configuration/nfs-exports",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/further-configuration/nfs-exports.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating from FreeNAS",permalink:"/docs/further-configuration/migrating-from-freenas"},next:{title:"Samba Shares",permalink:"/docs/further-configuration/samba-shares"}},l={},p=[{value:"NFS Examples",id:"nfs-examples",level:2},{value:"Permissions",id:"permissions",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nfs-exports"},"NFS Exports"),(0,o.kt)("p",null,"Ansible-NAS uses the awesome ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geerlingguy/ansible-role-nfs"},"geerlingguy.nfs")," Ansible role to configure NFS exports."),(0,o.kt)("h2",{id:"nfs-examples"},"NFS Examples"),(0,o.kt)("p",null,"Ansible-NAS shares are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nfs_exports")," section within ",(0,o.kt)("inlineCode",{parentName:"p"},"group_vars/all.yml"),". The example provided will allow anyone to read the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ nfs_shares_root }}/public")," on your Ansible-NAS box."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,'NFS "exports" (an equivalent of a Samba share) are permissioned differently to Samba shares. Samba shares are permissioned with users and groups, and NFS exports are permissioned by the host wanting to access them, and then usual Linux permissions are applied to the files and directories within there. As mentioned above, the example will allow any computer on your network to read and write to the export.'))}c.isMDXComponent=!0}}]);