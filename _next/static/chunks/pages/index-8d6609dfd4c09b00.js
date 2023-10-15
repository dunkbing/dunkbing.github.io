(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1145:function(e,t,n){"use strict";n(959);var i=n(7368),s=n(9255),A=n(2632),r=n.n(A),a=n(1527);t.Z=function(e){return(0,a.jsx)("article",{className:"bg-color-theme mt-5",style:{borderRadius:"25px"},children:(0,a.jsxs)("div",{style:{padding:"20px 20px 5px 20px"},children:[(0,a.jsx)("p",{className:"mb-1 text-sm text-gray-500 dark:text-gray-400",children:(0,i.Z)((0,s.Z)(e.modifiedTime),"MMMM dd, yyyy")}),(0,a.jsx)("h1",{className:"mb-2 text-xl",children:(0,a.jsxs)(r(),{as:"/posts/".concat(e.slug),href:"/posts/[slug]",className:"text-gray-900 dark:text-white dark:hover:text-blue-400",children:["\uD83D\uDD8D️ ",e.title]})}),(0,a.jsx)("p",{className:"mb-3",children:e.description}),(0,a.jsx)("p",{children:(0,a.jsx)(r(),{as:"/posts/".concat(e.slug),href:"/posts/[slug]",children:"Read More"})})]})})}},4737:function(e,t,n){"use strict";n.d(t,{D:function(){return Title}}),n(959);var i=n(1527),Title=function(e){var t=e.message;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",verticalAlign:"center"},children:(0,i.jsx)("h2",{className:"title m-0.5",children:t})})};t.Z=function(){return(0,i.jsxs)("div",{className:"mx-3 w-3/5",children:[(0,i.jsx)(Title,{message:"Hello"}),(0,i.jsx)("p",{children:"I am Bui Dang Binh, a software engineering student and games programming enthusiast."})]})}},4678:function(e,t,n){"use strict";n.r(t),n.d(t,{Index:function(){return Index},__N_SSG:function(){return b},default:function(){return y}}),n(959);var i=n(8681),s=n(1527),Gap=function(){return(0,s.jsx)("div",{style:{width:20,height:20}})};Gap.XXS=function(){return(0,s.jsx)("div",{style:{width:5,height:5}})},Gap.XS=function(){return(0,s.jsx)("div",{style:{width:10,height:10}})},Gap.S=function(){return(0,s.jsx)("div",{style:{width:20,height:20}})},Gap.M=function(){return(0,s.jsx)("div",{style:{width:40,height:40}})},Gap.L=function(){return(0,s.jsx)("div",{style:{width:60,height:60}})},n(5740);var A=n(1284);n(6500),n(1145);var r=n(5883),a=n.n(r),ProjectItem=function(e){var t=e.description,n=e.image,i=e.name,A=e.techs,r=e.url;return(0,s.jsxs)("div",{className:"flex flex-row mb-2.5",children:[(0,s.jsx)("div",{className:"my-auto w-1/5 flex flex-row  justify-center",children:(0,s.jsx)(a(),{src:n,alt:"cyber purr",className:"image rounded-full mx-auto",width:60,height:60,objectFit:"cover"})}),(0,s.jsx)(Gap.S,{}),(0,s.jsxs)("div",{className:"w-4/5",children:[(0,s.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:i}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"w-full font-mono",children:t}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:A.map(function(e){return(0,s.jsxs)("span",{className:"mr-0.5 border border-solid border-white px-1 rounded-md text-xs",children:["#",e]},e)})})]})]})},components_Projects=function(e){var t=e.projects;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Gap.XS,{}),(0,s.jsx)("p",{children:"Sometimes, I build personal projects, enhance my skill, and ... for fun!"}),(0,s.jsx)("div",{className:"grid md:grid-cols-2",children:t.map(function(e){return(0,s.jsx)(ProjectItem,{description:e.description,image:e.image,images:e.images,techs:e.techs,url:e.url,name:e.name},e.name)})})]})},c=n(4740),o=n.n(c),l=n(4745),Contact_Social=function(){return(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("span",{children:"Find me on"}),(0,s.jsx)(o(),{href:"https://twitter.com/dunkbingg",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(l.Ccr,{size:24,style:{marginLeft:10,marginTop:4}})}),(0,s.jsx)(o(),{href:"https://www.instagram.com/dunkbingg/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(l.JID,{size:24,style:{marginLeft:10,marginTop:4}})}),(0,s.jsx)(o(),{href:"https://github.com/dunkbing",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(l.uOf,{size:24,style:{marginLeft:10,marginTop:4}})}),(0,s.jsx)(o(),{href:"https://www.facebook.com/dunkbinggg/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(l.Bsb,{size:24,style:{marginLeft:10,marginTop:4}})})]})};n(2862);var m=n(4737),d=n(3677),g=n.n(d),TimeLineItem=function(e){return(0,s.jsxs)("div",{className:"".concat(g()["timeline-event"]," ").concat(g()["is-done"]),children:[e.lastItem?null:(0,s.jsx)("div",{className:"color-theme",style:{content:"",display:"inline-block",position:"absolute",left:"-40px",height:"100%",width:"4px",borderLeft:"3px solid #000"}}),(0,s.jsx)("p",{children:e.experience}),(0,s.jsx)("p",{children:e.company}),(0,s.jsxs)("p",{className:g().year,children:[e.startTime," ",e.endTime&&" - ".concat(e.endTime)]}),(0,s.jsx)("div",{className:"color-theme",style:{content:"",display:"inline-block",position:"absolute",top:0,left:"-44px",width:"12px",height:"12px",borderRadius:"50%",fontSize:"10px"}})]})},Contact_TimeLine=function(){return(0,s.jsx)("div",{className:g().timeline,children:(0,s.jsxs)("div",{className:g()["timeline-list"],children:[(0,s.jsx)(TimeLineItem,{experience:"☀️ Full-stack Developer",company:"FPT Software",startTime:"02/2023",endTime:"current"}),(0,s.jsx)(TimeLineItem,{experience:"☀️ Backend Developer",company:"Vietnam AI System",startTime:"02/2022",endTime:"12/2022"}),(0,s.jsx)(TimeLineItem,{experience:"\uD83C\uDF93 Bachelor's degree",company:"Software Engineering",startTime:"2021"}),(0,s.jsx)(TimeLineItem,{experience:"☀️ C++ Internship",company:"Gameloft",startTime:"03/2021",endTime:"09/2021",lastItem:!0})]})})},components_Contact=function(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",verticalAlign:"center"},children:[(0,s.jsx)(Contact_TimeLine,{}),(0,s.jsx)(Contact_Social,{})]})},h={src:"/_next/static/media/1.94faefe9.png",height:997,width:1787,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaklEQVR42mNgZuTmYBJmYGRnYlRmY1dhYGBnYxQEkgwibDLyvCqiDNqtfjlNnhkcDFryguoSPEoMQgwCHMwMxgxmvYl13aHVlgzmXNy8MnwKDEoSskJsojIM3MpWbiq27pIMnILMAnyMvAD0AQtKEOuOnQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},x={src:"/_next/static/media/default.44e2a5df.jpg",height:415,width:600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIIOf//EABoQAAICAwAAAAAAAAAAAAAAABESABMDI0H/2gAIAQEAAT8AfFUlewlzyf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:6},u={src:"/_next/static/media/profile.75ee852f.jpg",height:230,width:239,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAo4T/xAAdEAABAgcAAAAAAAAAAAAAAAABABECBAUSEyEz/9oACAEBAAE/AITNmoDphOmYWr//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AXb//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8ADL//2Q==",blurWidth:8,blurHeight:8},Header_ProfilePic=function(){return(0,s.jsx)("div",{className:"flex flex-col align-center justify-center md:w-1/5 w-2/5",children:(0,s.jsx)(a(),{className:"image rounded-full",src:u,objectFit:"fill",alt:"profile_pic"})})},components_Header=function(){return(0,s.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,s.jsx)(Header_ProfilePic,{}),(0,s.jsx)(Gap.S,{}),(0,s.jsx)(m.Z,{})]})},p=n(2336),j=n(2943),f={ts:"https://www.typescriptlang.org/",python:"https://www.python.org/",cpp:"https://cplusplus.com/",golang:"https://go.dev/",deno:"https://deno.com/",csharp:"https://docs.microsoft.com/en-us/dotnet/csharp/",reactjs:"https://reactjs.org/",nextjs:"https://nextjs.org/",nodejs:"https://nodejs.org/en/",mysql:"https://www.mysql.com/",postgresql:"https://www.postgresql.org/",redis:"https://redis.io/",unity:"https://unity.com/"},TechItem=function(e){var t=e.icon,n=e.name,i=(0,j.F)().theme;return(0,s.jsxs)(o(),{className:"w-12 h-12 mx-1 my-0.5 cursor-pointer",href:f[n],target:"_blank","data-tip":n,children:[t,(0,s.jsx)(p.Z,{place:"top",type:"dark"===i?"light":"dark",effect:"float"})]})},Languages=function(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsx)(TechItem,{name:"ts",icon:(0,s.jsx)(i.oi,{})}),(0,s.jsx)(TechItem,{name:"python",icon:(0,s.jsx)(i.gx,{})}),(0,s.jsx)(TechItem,{name:"cpp",icon:(0,s.jsx)(i.yR,{})}),(0,s.jsx)(TechItem,{name:"golang",icon:(0,s.jsx)(i.Ql,{})}),(0,s.jsx)(TechItem,{name:"csharp",icon:(0,s.jsx)(i.DF,{})})]})},Backend=function(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsx)(TechItem,{name:"nodejs",icon:(0,s.jsx)(i.Ux,{})}),(0,s.jsx)(TechItem,{name:"golang",icon:(0,s.jsx)(i.Ql,{})}),(0,s.jsx)(TechItem,{name:"mysql",icon:(0,s.jsx)(i.rR,{})}),(0,s.jsx)(TechItem,{name:"postgresql",icon:(0,s.jsx)(i.om,{})}),(0,s.jsx)(TechItem,{name:"redis",icon:(0,s.jsx)(i.SR,{})}),(0,s.jsx)(TechItem,{name:"deno",icon:(0,s.jsx)(i.n1,{})})]})},Frontend=function(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsx)(TechItem,{name:"reactjs",icon:(0,s.jsx)(i.gQ,{})}),(0,s.jsx)(TechItem,{name:"nextjs",icon:(0,s.jsx)(i.$f,{})})]})},w=[{image:{src:"/_next/static/media/site-preview.0889670a.png",height:760,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAMElEQVR42i3JMQoAIAwDwPz/ZS5CcfMVNkm7i+Cth/pgSaQM7RVzRMNknszC++7yBUQBJSH84ZRiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},description:"me learning react/nextjs",images:[x],techs:["react","nextjs"],name:"Personal site",url:"https://github.com/dunkbing/dunkbing.github.io"},{image:{src:"/_next/static/media/text2audio.cdfa3601.png",height:630,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAATElEQVR42mMAAYHsMg7+7DJhIGYBYn4QZkAGAhBBXyD2BOJgILZiAAIgzcgAZYgBcTAQ+wNxEBBboCgQyClnBHLYQBhoGjuQZoWZDgAdFhdz5k66pQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},description:"Online TTS Tool",images:[x],techs:["preact","freshjs","deno"],name:"Text2Audio",url:"https://text2audio.cc/"},{image:x,description:"A free, peer-to-peer, group video call web app, built with Deno and WebRTC",images:[x],techs:["preact","freshjs","deno"],name:"M33t.fun",url:"https://m33t.deno.dev/"},{image:h,description:"me learning unity",images:[h],techs:["unity"],name:"Cyber Purr",url:"https://github.com/dunkbing/cyber-purr"},{image:x,description:"A simple bot for joining and recording audio in the online meeting. (Google Meet, Zoom, and Teams)",images:[],techs:["golang","gstreamer","docker"],name:"Meeting bot",url:"https://github.com/dunkbing/meeting-bot"},{image:x,description:"Simple terminal chat application made with Go and Redis pub/sub",images:[],techs:["golang"],name:"Tchat",url:"https://github.com/dunkbing/tchat"}],b=!0,Index=function(e){return e.posts,(0,s.jsxs)(A.Z,{favIcon:i.zn,children:[(0,s.jsx)(components_Header,{}),(0,s.jsx)(components_Contact,{}),(0,s.jsx)(Gap.M,{}),(0,s.jsx)(m.D,{message:"Languages Known"}),(0,s.jsx)(Languages,{}),(0,s.jsx)(m.D,{message:"Frontend"}),(0,s.jsx)(Frontend,{}),(0,s.jsx)(m.D,{message:"Backend, Database"}),(0,s.jsx)(Backend,{}),(0,s.jsx)(Gap.M,{}),(0,s.jsx)(m.D,{message:"My Projects"}),(0,s.jsx)(components_Projects,{projects:w}),(0,s.jsx)(Gap.M,{})]})},y=Index},1110:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4678)}])},3677:function(e){e.exports={timeline:"timeline_timeline__yw86X","timeline-list":"timeline_timeline-list__4THPW","timeline-event":"timeline_timeline-event__4NqGg",year:"timeline_year__afaI3","is-not-done":"timeline_is-not-done__CYbjG","is-done":"timeline_is-done__95Hqc"}}},function(e){e.O(0,[226,933,112,774,888,179],function(){return e(e.s=1110)}),_N_E=e.O()}]);