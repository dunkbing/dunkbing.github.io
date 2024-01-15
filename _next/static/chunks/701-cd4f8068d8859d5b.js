(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{1820:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Image}});let r=i(1351),n=i(5815),a=n._(i(959)),o=r._(i(851)),l=i(7158),s=i(9240),c=i(9400);i(6235);let d=i(8395);function normalizeSrc(e){return"/"===e[0]?e.slice(1):e}let u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},g=new Set,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",m=new Map([["default",function(e){let{config:t,src:i,width:r,quality:n}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:(0,d.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}],["imgix",function(e){let{config:t,src:i,width:r,quality:n}=e,a=new URL(""+t.path+normalizeSrc(i)),o=a.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),n&&o.set("q",n.toString()),a.href}],["cloudinary",function(e){let{config:t,src:i,width:r,quality:n}=e,a=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return""+t.path+a+normalizeSrc(i)}],["akamai",function(e){let{config:t,src:i,width:r}=e;return""+t.path+normalizeSrc(i)+"?imwidth="+r}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function isStaticRequire(e){return void 0!==e.default}function generateImgAttrs(e){let{config:t,src:i,unoptimized:r,layout:n,width:a,quality:o,sizes:l,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,i,r){let{deviceSizes:n,allSizes:a}=e;if(r&&("fill"===i||"responsive"===i)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t||"fill"===i||"responsive"===i)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:o,kind:"x"}}(t,a,n,l),u=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map((e,r)=>s({config:t,src:i,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:s({config:t,src:i,quality:o,width:c[u]})}}function getInt(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function defaultImageLoader(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",r=m.get(i);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+l.VALID_LOADERS.join(", ")+". Received: "+i)}function handleLoading(e,t,i,r,n,a){if(!e||e.src===f||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode&&(g.add(t),"blur"===r&&a(!0),null==n?void 0:n.current)){let{naturalWidth:t,naturalHeight:i}=e;n.current({naturalWidth:t,naturalHeight:i})}})}let ImageElement=e=>{let{imgAttributes:t,heightInt:i,widthInt:r,qualityInt:n,layout:o,className:l,imgStyle:s,blurStyle:c,isLazy:d,placeholder:u,loading:g,srcString:f,config:m,unoptimized:h,loader:p,onLoadingCompleteRef:y,setBlurComplete:b,setIntersection:v,onLoad:w,onError:A,isVisible:_,noscriptSizes:k,...x}=e;return g=d?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",{...x,...t,decoding:"async","data-nimg":o,className:l,style:{...s,...c},ref:(0,a.useCallback)(e=>{v(e),(null==e?void 0:e.complete)&&handleLoading(e,f,o,u,y,b)},[v,f,o,u,y,b]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,o,u,y,b),w&&w(e)},onError:e=>{"blur"===u&&b(!0),A&&A(e)}}),(d||"blur"===u)&&a.default.createElement("noscript",null,a.default.createElement("img",{...x,loading:g,decoding:"async","data-nimg":o,style:s,className:l,...generateImgAttrs({config:m,src:f,unoptimized:h,layout:o,width:r,quality:n,sizes:k,loader:p})})))};function Image(e){var t;let i,{src:r,sizes:n,unoptimized:d=!1,priority:m=!1,loading:h,lazyRoot:p=null,lazyBoundary:y,className:b,quality:v,width:w,height:A,style:_,objectFit:k,objectPosition:x,onLoadingComplete:S,placeholder:I="empty",blurDataURL:E,...z}=e,j=(0,a.useContext)(c.ImageConfigContext),O=(0,a.useMemo)(()=>{let e=u||j||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[j]),C=n?"responsive":"intrinsic";"layout"in z&&(z.layout&&(C=z.layout),delete z.layout);let L=defaultImageLoader;if("loader"in z){if(z.loader){let e=z.loader;L=t=>{let{config:i,...r}=t;return e(r)}}delete z.loader}let R="";if("object"==typeof(t=r)&&(isStaticRequire(t)||void 0!==t.src)){let e=isStaticRequire(r)?r.default:r;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(E=E||e.blurDataURL,R=e.src,(!C||"fill"!==C)&&(A=A||e.height,w=w||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let N=!m&&("lazy"===h||void 0===h);((r="string"==typeof r?r:R).startsWith("data:")||r.startsWith("blob:"))&&(d=!0,N=!1),g.has(r)&&(N=!1),O.unoptimized&&(d=!0);let[P,B]=(0,a.useState)(!1),[W,M,G]=(0,s.useIntersection)({rootRef:p,rootMargin:y||"200px",disabled:!N}),q=!N||M,F={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},T={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},D=!1,U=getInt(w),V=getInt(A),H=getInt(v),J=Object.assign({},_,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:x}),Q="blur"!==I||P?{}:{backgroundSize:k||"cover",backgroundPosition:x||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+E+'")'};if("fill"===C)F.display="block",F.position="absolute",F.top=0,F.left=0,F.bottom=0,F.right=0;else if(void 0!==U&&void 0!==V){let e=V/U,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===C?(F.display="block",F.position="relative",D=!0,T.paddingTop=t):"intrinsic"===C?(F.display="inline-block",F.position="relative",F.maxWidth="100%",D=!0,T.maxWidth="100%",i="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+U+"%27%20height=%27"+V+"%27/%3e"):"fixed"===C&&(F.display="inline-block",F.position="relative",F.width=U,F.height=V)}let K={src:f,srcSet:void 0,sizes:void 0};q&&(K=generateImgAttrs({config:O,src:r,unoptimized:d,layout:C,width:U,quality:H,sizes:n,loader:L}));let X=r,Y={imageSrcSet:K.srcSet,imageSizes:K.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy},Z=a.default.useLayoutEffect,$=(0,a.useRef)(S),ee=(0,a.useRef)(r);(0,a.useEffect)(()=>{$.current=S},[S]),Z(()=>{ee.current!==r&&(G(),ee.current=r)},[G,r]);let et={isLazy:N,imgAttributes:K,heightInt:V,widthInt:U,qualityInt:H,layout:C,className:b,imgStyle:J,blurStyle:Q,loading:h,config:O,unoptimized:d,placeholder:I,loader:L,srcString:X,onLoadingCompleteRef:$,setBlurComplete:B,setIntersection:W,isVisible:q,noscriptSizes:n,...z};return a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:F},D?a.default.createElement("span",{style:T},i?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:i}):null):null,a.default.createElement(ImageElement,et)),m?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,...Y})):null)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5253:function(e,t,i){e.exports=i(1820)},4745:function(e,t,i){"use strict";i.d(t,{uOf:function(){return FiGithub},JID:function(){return FiInstagram},Ccr:function(){return FiTwitter}});var r=i(959),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(n),__assign=function(){return(__assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]]);return i};function iconBase_GenIcon(e){return function(t){return r.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return r.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var i,n=e.attr,a=e.size,o=e.title,l=__rest(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:i,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return elem(e)}):elem(n)}function FiGithub(e){return iconBase_GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function FiInstagram(e){return iconBase_GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(e)}function FiTwitter(e){return iconBase_GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(e)}}}]);