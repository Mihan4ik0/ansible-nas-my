"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Ansible-NAS is an Ansible playbook that sets up applications of your choice on your home server.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Enabling Applications",permalink:"/docs/getting-started/enabling-applications"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Running Ansible-NAS",id:"running-ansible-nas",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Ansible-NAS is an Ansible playbook that sets up applications of your choice on your home server."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A Linux environment with Ansible installed (in Ansible terms the "control node"). See the official ',(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"},"Installing Ansible")," docs for more info."),(0,r.kt)("li",{parentName:"ul"},"SSH access to an Ubuntu 22.04 server that'll become your Ansible-NAS box. It's recommended to use a fresh Ubutu Server 22.04 installation. Do not use non-LTS releases.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The control node and your Ansible-NAS box can be the same computer, if you choose.")),(0,r.kt)("h2",{id:"running-ansible-nas"},"Running Ansible-NAS"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Before running anything, check out the playbook and understand what it does. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Do not"))," blindly download code from the internet and trust that it's going to work as you expect.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone Ansible-NAS:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create your own inventory and config files by copying ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/sample")," to your own directory:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cp -rfp inventories/sample inventories/my-ansible-nas"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review ",(0,r.kt)("inlineCode",{parentName:"p"},"group_vars/all.yml"),". Change settings by overriding them in ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/my-ansible-nas/group_vars/nas.yml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/my-ansible-nas/inventory"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the dependent roles: ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-galaxy install -r requirements.yml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the playbook - ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K")))))}u.isMDXComponent=!0}}]);