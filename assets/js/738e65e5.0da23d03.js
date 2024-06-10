"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1839],{5846:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(5893),t=a(1151);const r={},i="Samba Shares",o={id:"further-configuration/samba-shares",title:"Samba Shares",description:"Ansible-NAS uses the awesome vladgh.samba Ansible role to configure Samba - check out the Ansible Galaxy page for the many different options you can use to configure a share.",source:"@site/docs/further-configuration/samba-shares.md",sourceDirName:"further-configuration",slug:"/further-configuration/samba-shares",permalink:"/docs/further-configuration/samba-shares",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/further-configuration/samba-shares.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NFS Exports",permalink:"/docs/further-configuration/nfs-exports"},next:{title:"Contributing",permalink:"/docs/category/contributing"}},c={},l=[{value:"Share Examples",id:"share-examples",level:2},{value:"File Permissions",id:"file-permissions",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"samba-shares",children:"Samba Shares"}),"\n",(0,n.jsxs)(s.p,{children:["Ansible-NAS uses the awesome ",(0,n.jsx)(s.a,{href:"https://github.com/vladgh/ansible-collection-vladgh-samba",children:"vladgh.samba"})," Ansible role to configure Samba - check out ",(0,n.jsx)(s.a,{href:"https://galaxy.ansible.com/vladgh/samba",children:"the Ansible Galaxy page"})," for the many different options you can use to configure a share."]}),"\n",(0,n.jsx)(s.h2,{id:"share-examples",children:"Share Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Ansible-NAS shares are defined in the ",(0,n.jsx)(s.code,{children:"samba_shares"})," section within ",(0,n.jsx)(s.code,{children:"group_vars/all.yml"}),'. The examples provided are "public" shares that anyone on your LAN can read and write to.']}),"\n",(0,n.jsx)(s.h2,{id:"file-permissions",children:"File Permissions"}),"\n",(0,n.jsxs)(s.p,{children:["Ansible-NAS creates an ",(0,n.jsx)(s.code,{children:"ansible-nas"})," user and group on your server, which Samba will use to access the data in your shares. New data created will be permissioned correctly."]}),"\n",(0,n.jsxs)(s.p,{children:["However, if you have existing data this will need to be repermissioned so that Samba can read and serve it. An playbook is provided to do this for you - ",(0,n.jsx)(s.code,{children:"permission_data.yml"}),". It is separated from the main Ansible-NAS playbook due to the time it can take to run with large amounts of data - you should only need to run this once."]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>i});var n=a(7294);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);