"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[77939],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76571:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(93106),r=n(4706),l="tabItem_hkNs";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},7907:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(93106),r=n(4706),l=n(53620),o=n(55080),i=n(39564),p=n(48297),u="tabList_HZIO",d="tabItem_bO0X";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:c,groupId:k,className:g}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=c?c:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const f=null===m?m:null!==(b=null!=m?m:null===(t=N.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:N[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[C,x]=(0,a.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==C&&(O(t),x(a),null!=k&&w(k,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},h.map((({value:e,label:t,attributes:n})=>a.createElement("li",s({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:E,onFocus:j,onClick:j},n,{className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,l.Z)();return a.createElement(m,s({key:String(t)},e))}},42065:function(e,t,n){n.d(t,{gQ:function(){return o},p6:function(){return r}});var a=n(93106);function r(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:l}},"Vue"))}const l="#4fc08d";function o(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},17750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});n(93106);var a=n(79874),r=n(7907),l=n(76571),o=n(42065);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={title:"\u8def\u7531\u5e93"},d=void 0,s={unversionedId:"router-extend",id:"version-3.x/router-extend",title:"\u8def\u7531\u5e93",description:"Taro v3.6 \u5f00\u59cb\u652f\u6301\u3002",source:"@site/versioned_docs/version-3.x/router-extend.mdx",sourceDirName:".",slug:"/router-extend",permalink:"/taro-docs/en/docs/router-extend",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/router-extend.mdx",tags:[],version:"3.x",frontMatter:{title:"\u8def\u7531\u5e93"},sidebar:"docs",previous:{title:"Router",permalink:"/taro-docs/en/docs/router"},next:{title:"Static resource references",permalink:"/taro-docs/en/docs/static-reference"}},m={},c=[{value:"Taro \u9875\u9762\u8def\u7531\u7ba1\u7406",id:"taro-\u9875\u9762\u8def\u7531\u7ba1\u7406",level:2},{value:"\u9875\u9762\u8def\u7531\u521d\u59cb\u5316",id:"\u9875\u9762\u8def\u7531\u521d\u59cb\u5316",level:2},{value:"\u4f7f\u7528\u8def\u7531\u5e93",id:"\u4f7f\u7528\u8def\u7531\u5e93",level:2},{value:"\u5e94\u7528\u914d\u7f6e",id:"\u5e94\u7528\u914d\u7f6e",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u793a\u4f8b DEMO",id:"\u793a\u4f8b-demo",level:2},{value:"API",id:"api",level:2},{value:"window.location",id:"windowlocation",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:4},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:4},{value:"hashchange",id:"hashchange",level:5},{value:"window.history",id:"windowhistory",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027-1",level:4},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6-1",level:4},{value:"popstate",id:"popstate",level:5},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2}],k={toc:c};function g(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",i({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.6 \u5f00\u59cb\u652f\u6301\u3002")),(0,a.kt)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528\u524d\u7aef\u8def\u7531\u5e93\uff0c\u5305\u62ec ",(0,a.kt)("a",i({parentName:"p"},{href:"https://reactrouter.com/en/main"}),"react-router")," \u548c ",(0,a.kt)("a",i({parentName:"p"},{href:"https://router.vuejs.org/zh/"}),"vue-router"),"\u3002"),(0,a.kt)("h2",i({},{id:"taro-\u9875\u9762\u8def\u7531\u7ba1\u7406"}),"Taro \u9875\u9762\u8def\u7531\u7ba1\u7406"),(0,a.kt)("p",null,"\u524d\u7aef\u8def\u7531\u5e93\u7684\u57fa\u672c\u539f\u7406\u662f\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"popstate")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"hashchange")," \u4e8b\u4ef6\u89e6\u53d1\u540e\uff0c\u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u5bf9\u89c6\u56fe\u8fdb\u884c\u64cd\u63a7\u66f4\u65b0\u3002 Taro \u4e3a\u4e86\u652f\u6301\u524d\u7aef\u8def\u7531\u5e93\u7684\u4f7f\u7528\uff0c\u5728\u8fd0\u884c\u65f6\u4e2d\u5f15\u5165\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"histroy")," ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u7684\u5b9e\u73b0\uff0c\u4e14\u5c3d\u53ef\u80fd\u4e0e Web \u7aef\u89c4\u8303\u5bf9\u9f50\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\u4e0a\u8bbf\u95ee\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u7edf\u79f0\u4e3a\u9875\u9762\u8def\u7531\u72b6\u6001\u3002")),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5929\u7136\u652f\u6301\u591a\u9875\u9762(",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),"\u6570\u7ec4)\uff0cTaro \u5e76\u975e\u4ee5\u6574\u4e2a\u5e94\u7528\u4e3a\u4e00\u4e2a\u8def\u7531\u7cfb\u7edf\uff0c\u800c\u662f\u987a\u5e94\u5c0f\u7a0b\u5e8f\u89c4\u8303\u4ee5\u9875\u9762\u7ef4\u5ea6\u8fdb\u884c\u8def\u7531\u7ba1\u7406\u3002\u6bcf\u5f53\u5207\u6362\u9875\u9762\u65f6\uff0c\u4f1a\u5c06\u5f53\u524d\u9875\u9762\u7684\u9875\u9762\u8def\u7531\u72b6\u6001\u7f13\u5b58\u3002\u8df3\u8f6c\u81f3\u65b0\u9875\u9762\u540e\u4f1a\u91cd\u65b0\u521b\u5efa\u9875\u9762\u8def\u7531\u72b6\u6001\uff0c\u5e76\u6302\u8f7d\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\u4e0a\u3002\u5f53\u8fd4\u56de\u4e0a\u4e00\u7ea7\u9875\u9762\u65f6\uff0c\u4f1a\u91cd\u65b0\u5c06\u5f53\u524d\u9875\u9762\u7684\u9875\u9762\u8def\u7531\u72b6\u6001\u6302\u8f7d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\u4e2d\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u5728 \u201c\u793a\u4f8b DEMO\u201d \u4e2d\u89c2\u5bdf\u9875\u9762\u5207\u6362\u8fc7\u7a0b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"history")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u7684\u53d8\u5316.")),(0,a.kt)("p",null,"\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u4ec5\u63cf\u8ff0\u5f53\u524d\u9875\u9762\u7684\u94fe\u63a5\u72b6\u6001\uff0c\u9875\u9762\u7684\u8df3\u8f6c\u4ecd\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.navigateTo()")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="\u9875\u9762\u8df3\u8f6c"',title:'"\u9875\u9762\u8df3\u8f6c"'}),'// \u274c \u9519\u8bef\nwindow.location.assign("...");\nwindow.location.href = "..."; // \u65e0\u6cd5\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c\uff0c\u4f46\u53ef\u4ee5\u91cd\u65b0\u8d4b\u503c\n// \u2705 \u6b63\u786e\nTaro.navigateTo({ url: "..." });\n')),(0,a.kt)("h2",i({},{id:"\u9875\u9762\u8def\u7531\u521d\u59cb\u5316"}),"\u9875\u9762\u8def\u7531\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5f53\u901a\u8fc7\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u8fdb\u884c\u9875\u9762\u8df3\u8f6c\uff0c\u8fdb\u5165\u65b0\u9875\u9762\u540e\uff0c\u9875\u9762\u8def\u7531\u72b6\u6001\u4f1a\u521d\u59cb\u5316\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),'// \u4f20\u5165\u53c2\u6570 id=2&type=test#a=1&b=2\nTaro.navigateTo({\n  url: "/pages/page/path/name?id=2&type=test#a=1&b=2",\n});\n')),(0,a.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"location.href")," \u4e0a\u8bfb\u53d6\u5230\u5b8c\u6574\u94fe\u63a5\u4fe1\u606f ",(0,a.kt)("inlineCode",{parentName:"p"},"https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2"),"\uff0c\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"history.state")," \u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "state": null,\n  "title": "",\n  "url": "https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2"\n}\n')),(0,a.kt)("h2",i({},{id:"\u4f7f\u7528\u8def\u7531\u5e93"}),"\u4f7f\u7528\u8def\u7531\u5e93"),(0,a.kt)("admonition",i({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro \u9700\u8981\u5347\u7ea7\u81f3 ",(0,a.kt)("strong",{parentName:"p"},"v3.6"))),(0,a.kt)("h3",i({},{id:"\u5e94\u7528\u914d\u7f6e"}),"\u5e94\u7528\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u8def\u7531\u5e93\u4e2d\uff0c\u8bf8\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," \u7ec4\u4ef6\u5185\u90e8\u4f1a\u52a8\u6001\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," \u6807\u7b7e\uff0c\u56e0\u6b64\u9700\u8981\u5f15\u5165 ",(0,a.kt)("a",i({parentName:"p"},{href:"./use-h5"}),(0,a.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-html"))," \u63d2\u4ef6\u4ee5\u652f\u6301\u5728 Taro \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," \u6807\u7b7e\u5f00\u53d1\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-json",metastring:'title="config/index.js"',title:'"config/index.js"'}),'{\n  "plugins": ["@tarojs/plugin-html"]\n}\n')),(0,a.kt)("p",null,"\u5f53 Taro DOM \u5e8f\u5217\u5316\u6570\u636e\u7684 nn \u5b57\u6bb5\u4e3a HTML \u6807\u7b7e\u65f6\uff0c\u4f1a\u6620\u5c04\u4e3a\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u540d\u79f0\u3002\u7531\u4e8e\u65e0\u6cd5\u63d0\u524d\u9884\u77e5\u52a8\u6001\u6807\u7b7e\uff0c\u56e0\u6b64\u9700\u8981\u5e94\u7528\u663e\u5f0f\u544a\u77e5\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230\u7684\u52a8\u6001\u6807\u7b7e\u3002\u4f8b\u5982\u5728\u5e94\u7528\u4e2d\u585e\u5165\u4e00\u4e2a\u65e0\u6837\u5f0f\u7684\u6807\u7b7e\u540d\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<View>\n  <a></a>\n</View>\n")),(0,a.kt)("h3",i({},{id:"\u4ee3\u7801\u793a\u4f8b"}),"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:(0,a.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="/pages/index/index.js"',title:'"/pages/index/index.js"'}),'import { BrowserRouter, Routes, Route, Link } from "react-router-dom";\nexport default class Index extends Component {\n  render() {\n    return (\n      <BrowserRouter>\n        <View className="drawer-box">\n          <View className="box-item">\n            <Link to="/pages/router/index/view1?a=1&b=2">view1</Link>\n          </View>\n          <View className="box-item">\n            <Link to="/pages/router/index/view2#a=3&b=4">view2</Link>\n          </View>\n          <View className="box-item">\n            <Link to="/pages/router/index/2?a=1&b=2#a=3&b=4">view3</Link>\n          </View>\n        </View>\n\n        <Routes>\n          <Route path="/pages/browser-router/index" element={<Home />}></Route>\n          <Route path="/pages/router/index/view1" element={<View1 />}></Route>\n          <Route path="/pages/router/index/view2" element={<View2 />}></Route>\n          <Route path="/pages/router/index/:id" element={<View3 />}></Route>\n        </Routes>\n      </BrowserRouter>\n    );\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="app.js"',title:'"app.js"'}),'import { createApp } from "vue";\nimport { createWebHistory } from "vue-router";\n// \u81ea\u5b9a\u4e49\u7ec4\u4ef6\nimport Home from "./components/home.vue";\nimport Tab1 from "./components/tab-1.vue";\nimport Tab2 from "./components/tab-2.vue";\nimport Tab3 from "./components/tab-3.vue";\n\nconst routes = [\n  { path: "/", component: Home },\n  { path: "/tab1", component: Tab1 },\n  { path: "/tab2", component: Tab2 },\n  { path: "/tab3/:groupId/:id", component: Tab3 },\n];\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes,\n});\n\nconst App = createApp({\n  onShow(options) {},\n});\n\nApp.use(router);\n\nexport default App;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="/pages/index/index.vue"',title:'"/pages/index/index.vue"'}),'<template>\n  <view>\n    <view>\n      <a></a>\n      <view>\n        <view class="tab-box">\n          <router-link class="tab-item" to="/" replace>Home</router-link>\n          <router-link class="tab-item" to="/tab1?name=advancedcat&from=china" replace>Tab 1</router-link>\n          <router-link class="tab-item" to="/tab2">Tab 2</router-link>\n          <router-link class="tab-item" to="/tab3/1234/8765">Tab 3</router-link>\n          <router-link class="tab-item" :to="{ name: \'user\', params: { id: \'9876\' }}">User</router-link>\n        </view>\n        <router-view></router-view>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script setup>\n\n<\/script>\n')))),(0,a.kt)("h2",i({},{id:"\u793a\u4f8b-demo"}),"\u793a\u4f8b DEMO"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u4ee5\u4e0b demo \u4e2d\u770b\u5230\u66f4\u591a\u8def\u7531\u7279\u6027\u7528\u6cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/AdvancedCat/taro-react-router"}),"React + react-router v6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/AdvancedCat/taro-vue-router"}),"Vue3 + vue-router v4"))),(0,a.kt)("h2",i({},{id:"api"}),"API"),(0,a.kt)("h3",i({},{id:"windowlocation"}),"window.location"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\uff0c\u8de8\u57df\u4e09\u8981\u7d20\u9501\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"https://taro.com"),"\u3002")),(0,a.kt)("h4",i({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"protocol"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https:")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u534f\u8bae\u5934\u90e8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"hostname"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"taro.com")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u57df\u540d\u4e3b\u4f53")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"port"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7aef\u53e3\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"pathname"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u8def\u5f84\u90e8\u5206")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"search"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u67e5\u8be2\u53c2\u6570\uff0c\u975e\u7a7a\u5219\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"td"},"?")," \u5b57\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"hash"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"hash \u90e8\u5206\uff0c\u975e\u7a7a\u5219\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," \u5b57\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"toString"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"() => string")),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u8fd4\u56de\u5b8c\u6574 ",(0,a.kt)("inlineCode",{parentName:"td"},"href"))))),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.location.xxx = 'yyy'")," \u6765\u91cd\u65b0\u8d4b\u503c\u5bf9\u5e94\u5c5e\u6027.\u7279\u522b\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"window.location.href = 'new url'")," \u4f1a\u6309\u7167\u5bf9\u5e94\u90e8\u5206\u5206\u522b\u8bbe\u7f6e\u76f8\u5e94\u5c5e\u6027(\u9664\u4e86\u8de8\u57df\u4e09\u8981\u7d20\u4e0d\u53ef\u4fee\u6539)\uff0c \u540c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," \u5386\u53f2\u6808\u589e\u52a0\u4e00\u6761\u8bb0\u5f55\u3002"),(0,a.kt)("h4",i({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,a.kt)("h5",i({},{id:"hashchange"}),"hashchange"),(0,a.kt)("p",null,"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"hash")," \u90e8\u5206\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u540c\u6b65\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"hashchange")," \u4e8b\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'window.addEventListener("hashchange", () => {\n  console.log("hash\u53d1\u751f\u53d8\u5316");\n});\n')),(0,a.kt)("h3",i({},{id:"windowhistory"}),"window.history"),(0,a.kt)("h4",i({},{id:"\u5c5e\u6027-1"}),"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"state"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{state: any; title: string; url: string}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5386\u53f2\u5806\u6808\u7684\u9876\u90e8\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"length"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5386\u53f2\u5806\u6808\u957f\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"go"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(delta: number) => {}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5207\u6362\u81f3\u76f8\u5bf9\u4f4d\u7f6e\u7684\u5386\u53f2\u72b6\u6001\uff0c\u8d8a\u754c\u65f6\u53d6\u5386\u53f2\u5806\u6808\u7684\u8fb9\u754c\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"back"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"() => {}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},"go(-1)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"forward"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"() => {}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},"go(1)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"pushState"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(state: any, title: string, url: string) => {}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u6309\u6307\u5b9a\u7684\u540d\u79f0\u548c URL\uff08\u5982\u679c\u63d0\u4f9b\u8be5\u53c2\u6570\uff09\u5c06\u6570\u636e push \u8fdb\u5386\u53f2\u5806\u6808")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"replaceState"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(state: any, title: string, url: string) => {}")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u66f4\u65b0 state\uff0c\u4f46\u4e0d\u4fee\u6539\u5386\u53f2\u5806\u6808")))),(0,a.kt)("h4",i({},{id:"\u4e8b\u4ef6-1"}),"\u4e8b\u4ef6"),(0,a.kt)("h5",i({},{id:"popstate"}),"popstate"),(0,a.kt)("p",null,"\u5f53\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"history.go()")," \u65b9\u6cd5\u65f6\uff0c\u540c\u6b65\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"hashchange")," \u4e8b\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"history.state")," \u4f1a\u66f4\u65b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'window.addEventListener("popstate", () => {\n  console.log("popstate\u89e6\u53d1");\n});\n')),(0,a.kt)("h2",i({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 Web \u7aef\u53ef\u4ee5\u901a\u8fc7\u8d4b\u503c location.href \u5b9e\u73b0\u9875\u9762\u52a0\u8f7d\uff0c\u4f46\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u9002\u7528\uff0c\u5c0f\u7a0b\u5e8f\u7aef\u7684\u9875\u9762\u8df3\u8f6c\u4ecd\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Taro.navigateTo")," \u7b49\u5b98\u65b9 api\u3002\u5728\u5c0f\u7a0b\u5e8f\u4fa7\uff0c\u5e94\u8be5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"location")," \u4e0a\u7684\u5c5e\u6027\u89c6\u4e3a\u53ea\u8bfb\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"location.origin")," \u5c06\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"https://taro.com"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"location.assigin()")," ",(0,a.kt)("inlineCode",{parentName:"li"},"location.replace()")," \u5728\u5c0f\u7a0b\u5e8f\u4fa7\u65e0\u6548\uff1b")),(0,a.kt)("h2",i({},{id:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\u8be6\u7ec6\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8bbe\u8ba1\u8bf7\u770b ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/feat/history/rfcs/0009-router-support.md"}),"RFC"),"\u3002"))}g.isMDXComponent=!0}}]);