(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{177:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(1),o=t(9),a=(t(0),t(187)),i={id:"resource_navigationToProps",title:"navigationToProps",sidebar_label:"navigationToProps"},s={id:"resources/resource_navigationToProps",title:"navigationToProps",description:"Simple HOC that will just get all navigation state and pass is to props. Additionally it will parse query string and pass it to props.",source:"@site/docs/resources/navigationToProps.md",permalink:"/frontend-docs/docs/resources/resource_navigationToProps",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/resources/navigationToProps.md",sidebar_label:"navigationToProps",sidebar:"resourcesSitebar",previous:{title:"withInfinityList",permalink:"/frontend-docs/docs/resources/resource_withInfinityList"},next:{title:"Hooks",permalink:"/frontend-docs/docs/resources/resource_hooks"}},c=[{value:"<del>API</del>",id:"api",children:[]}],p={rightToc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Simple HOC that will just get all navigation state and pass is to props. Additionally it will parse query string and pass it to props."),Object(a.b)("h2",{id:"api"},Object(a.b)("del",{parentName:"h2"},"API")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"navigationToProps(parseQueryParams)\n")),Object(a.b)("p",null,"parseQueryParams function not Required. By default it will use  parseQueryParams from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/queryParams/queryParams_about"}),"queryParams")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"navigationToProps()(MyReactElemt)\n")),Object(a.b)("p",null,"Example to prefetch data based on query string in browser url."),Object(a.b)("p",null,"for example u have a url ",Object(a.b)("inlineCode",{parentName:"p"},"users/list/?offset=20&limit=20&search=ma")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { navigationToProps, prefetchResources } from '@ds-frontend/resource'\nimport compose from 'redux'\n\nexport default compose(\n  navigationToProps(),\n  prefetchResources({\n    endpoint: 'users',\n    namespace: 'users',\n    queries: ['offset', 'limit', 'search']\n  })\n\n)\n")))}u.isMDXComponent=!0},187:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,s({ref:r},p,{components:t})):o.a.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);