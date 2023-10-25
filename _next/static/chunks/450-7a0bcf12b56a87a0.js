(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{4732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return f},ACTION_SERVER_ACTION:function(){return l}});var r,n,o="refresh",a="navigate",u="restore",i="server-patch",c="prefetch",f="fast-refresh",l="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7146:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(7450),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4683:function(e,t,r){"use strict";var n=r(6904),o=r(3982),a=r(7784),u=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});var i=r(1351)._(r(959)),c=r(4078),f=r(4843),l=r(6562),s=r(4619),d=r(2938),p=r(3220),y=r(3910),v=r(2054),b=r(7146),h=r(1210),m=r(4732),g=new Set;function prefetch(e,t,r,n,o,a){if(a||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(u))return;g.add(u)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}var O=i.default.forwardRef(function(e,t){var r,n,l=e.href,g=e.as,O=e.children,_=e.prefetch,j=void 0===_?null:_,P=e.passHref,C=e.replace,E=e.shallow,w=e.scroll,M=e.locale,S=e.onClick,A=e.onMouseEnter,k=e.onTouchStart,T=e.legacyBehavior,I=void 0!==T&&T,R=a(e,u);r=O,I&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));var x=i.default.useContext(p.RouterContext),U=i.default.useContext(y.AppRouterContext),L=null!=x?x:U,D=!x,H=!1!==j,N=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,K=i.default.useMemo(function(){if(!x){var e=formatStringOrUrl(l);return{href:e,as:g?formatStringOrUrl(g):e}}var t=o((0,c.resolveHref)(x,l,!0),2),r=t[0],n=t[1];return{href:r,as:g?(0,c.resolveHref)(x,g):n||r}},[x,l,g]),F=K.href,B=K.as,V=i.default.useRef(F),$=i.default.useRef(B);I&&(n=i.default.Children.only(r));var q=I?n&&"object"==typeof n&&n.ref:t,z=o((0,v.useIntersection)({rootMargin:"200px"}),3),G=z[0],Q=z[1],W=z[2],Y=i.default.useCallback(function(e){($.current!==B||V.current!==F)&&(W(),$.current=B,V.current=F),G(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[B,q,F,W,G]);i.default.useEffect(function(){L&&Q&&H&&prefetch(L,F,B,{locale:M},{kind:N},D)},[B,F,Q,M,H,null==x?void 0:x.locale,L,D,N]);var Z={ref:Y,onClick:function(e){I||"function"!=typeof S||S(e),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,a,u,c,l,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!l&&!(0,f.isLocalURL)(r)))){e.preventDefault();var d,navigate=function(){var e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};l?i.default.startTransition(navigate):navigate()}}(e,L,F,B,C,E,w,M,D,H)},onMouseEnter:function(e){I||"function"!=typeof A||A(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(H||!D)&&prefetch(L,F,B,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:N},D)},onTouchStart:function(e){I||"function"!=typeof k||k(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(H||!D)&&prefetch(L,F,B,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:N},D)}};if((0,s.isAbsoluteUrl)(B))Z.href=B;else if(!I||P||"a"===n.type&&!("href"in n.props)){var J=void 0!==M?M:null==x?void 0:x.locale,X=(null==x?void 0:x.isLocaleDomain)&&(0,b.getDomainLocale)(B,J,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);Z.href=X||(0,h.addBasePath)((0,d.addLocale)(B,J,null==x?void 0:x.defaultLocale))}return I?i.default.cloneElement(n,Z):i.default.createElement("a",_objectSpread(_objectSpread({},R),Z),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2054:function(e,t,r){"use strict";var n=r(3982);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});var o=r(959),a=r(4924),u="function"==typeof IntersectionObserver,i=new Map,c=[];function useIntersection(e){var t=e.rootRef,r=e.rootMargin,f=e.disabled||!u,l=n((0,o.useState)(!1),2),s=l[0],d=l[1],p=(0,o.useRef)(null),y=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(u){if(!f&&!s){var e,n,o,l,y=p.current;if(y&&y.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=i.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),i.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(l=e.elements).set(y,function(e){return e&&d(e)}),o.observe(y),function(){if(l.delete(y),o.unobserve(y),0===l.size){o.disconnect(),i.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var v=(0,a.requestIdleCallback)(function(){return d(!0)});return function(){return(0,a.cancelIdleCallback)(v)}}},[f,r,t,s,p.current]),[y,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2875:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(1351)._(r(959)).default.createContext({})},5317:function(e,t){"use strict";function isInAmpMode(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},2580:function(e,t,r){"use strict";var n=r(6904);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return _defaultHead},default:function(){return _default2}});var o=r(1351),a=r(5815)._(r(959)),u=o._(r(4916)),i=r(2875),c=r(745),f=r(5317);function _defaultHead(e){void 0===e&&(e=!1);var t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(8792);var l=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){var r,o,u,i,c=t.inAmpMode;return e.reduce(onlyReactElement,[]).reverse().concat(_defaultHead(c).reverse()).filter((r=new Set,o=new Set,u=new Set,i={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var a=e.key.slice(e.key.indexOf("$")+1);r.has(a)?t=!1:r.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var c=0,f=l.length;c<f;c++){var s=l[c];if(e.props.hasOwnProperty(s)){if("charSet"===s)u.has(s)?t=!1:u.add(s);else{var d=e.props[s],p=i[s]||new Set;("name"!==s||!n)&&p.has(d)?t=!1:(p.add(d),i[s]=p)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:r})})}var _default2=function(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:reduceComponents,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});var n=r(959),o=n.useLayoutEffect,a=n.useEffect;function SideEffect(e){var t=e.headManager,r=e.reduceComponentsToState;function emitChange(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=emitChange),function(){t&&(t._pendingUpdate=emitChange)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},8792:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});var warnOnce=function(e){}},8013:function(e,t,r){e.exports=r(2580)},1961:function(e,t,r){e.exports=r(4683)},6499:function(e,t,r){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){i=!0,n=e}finally{try{u||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return _slicedToArray}})}}]);