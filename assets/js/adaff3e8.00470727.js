"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Emby"},i=void 0,s={unversionedId:"applications/media-serving/emby",id:"applications/media-serving/emby",title:"Emby",description:"Homepage:",source:"@site/docs/applications/media-serving/emby.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/emby",permalink:"/docs/applications/media-serving/emby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/media-serving/emby.md",tags:[],version:"current",frontMatter:{title:"Emby"},sidebar:"tutorialSidebar",previous:{title:"Calibre-web",permalink:"/docs/applications/media-serving/calibre"},next:{title:"Jellyfin",permalink:"/docs/applications/media-serving/jellyfin"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Naming movies and TV shows",id:"naming-movies-and-tv-shows",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://emby.media/"},"https://emby.media/")),(0,a.kt)("p",null,"Emby is a mostly open-source media server with a client-server model. This\ninstall for Ansible-NAS provides a server, which various clients can then\nconnect to from platforms such as other computers, smartphones and smart TVs."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("a",{parentName:"p",href:"https://www.plex.tv/"},"Plex"),", also included in Ansible-NAS, has a very\nsimilar functionality."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"emby_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. There are further\nparameters you can edit such as ",(0,a.kt)("inlineCode",{parentName:"p"},"movies_root")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tv_root")," lower down."),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,"The emby web interface can be found at port 8096 (http) or 8920 (https, if\nconfigured) of your NAS. Heimdall has a dedicated icon for emby\nBy default, Ansible-NAS gives emby read/write access to the folders where your\nmovies and TV shows are stored. To change this to read-only, edit the following\nlines in ",(0,a.kt)("inlineCode",{parentName:"p"},"all.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'        emby_movies_permissions: "rw"\n        emby_tv_permissions: "rw"\n')),(0,a.kt)("p",null,"so that they end in ",(0,a.kt)("inlineCode",{parentName:"p"},"ro")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"rw"),". Note that emby will not be able to\ndelete files then, which might be exactly what you want. However, you will not\nhave the option to store cover art in the related folders. Always leave the\nconfiguration directory read/write"),(0,a.kt)("h2",{id:"naming-movies-and-tv-shows"},"Naming movies and TV shows"),(0,a.kt)("p",null,"Emby is very fussy about how movies and TV shows must be named to enable\nautomatic downloads of cover art and metadata. In short, movie files should\nfollow how movies are listed in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.imdb.com/"},"IMDb"),", including the\nyear of publication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-raw"},"        movies/Bride of Frankenstein (1935).mp4\n")),(0,a.kt)("p",null,'Note the spaces. You should probably remove colons and other special characters\nTV shows require a folder structure with the name of the series - again if\npossible with the year of publication - followed by sub-folders for the\nindividual seasons. For example, the first episode of the first season of\nthe original "Doctor Who" could be stored as:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-raw"},"        tv/Doctor Who (1963)/Season 1/Doctor Who - s01e01.mp4\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.thetvdb.com/"},"TVDB")," is one source for the exact names of TV\nshows."),(0,a.kt)("p",null,"Unfortunately, there are number of special cases, especially related to split\nmovies and older series. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MediaBrowser/Wiki/wiki/Movie%20naming"},"movie\nnaming")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MediaBrowser/Wiki/wiki/TV-naming"},"TV\nnaming")," guides for further\ninformation."))}m.isMDXComponent=!0}}]);