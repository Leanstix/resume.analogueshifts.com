(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{1729:function(e,t,n){Promise.resolve().then(n.bind(n,2018))},3619:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(){return(0,r.jsx)("div",{className:"fixed z-50 top-0 left-0 w-screen h-screen bg-black/10 flex justify-center items-center",children:(0,r.jsxs)("div",{className:"lds-ellipsis",children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})})}},8302:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437),s=n(6691),i=n.n(s),a={src:"/_next/static/media/logo.79a82f19.png",height:490,width:509,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42mMAgSvrzZnB9AargqsbbDRAbCDNBJa8t8OOEUSfXG4nAFT49cp6iwkg/tmVJiwMEIYZK4i+u806+8p6y4VXN1gt+HvJUxwkdmYl0BQY6C3VTL220WLn7rkuAlHeSlYMyMDWSCQSSPXd32HTdm+HdTKQPdtCTyQMSQnLuqWdes0PdtqF39piucHJXNqagYlnD1iKjZM/hoGBb9m97dbbgHaqX1prMfHZfrs4oNRkYy3hRJDuncu7dDtvbrb4dmmd2ZnL68xeA005zikoYcHFzXsCAD4STx6c6i8HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o=()=>(0,r.jsxs)("div",{className:"flex gap-3",children:[(0,r.jsx)(i(),{src:a,className:"w-10 h-10",alt:""}),(0,r.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[(0,r.jsx)("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},7908:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7437),s=n(2265),i=n(7948);n(3343);var a=n(4033),o=n(1490);function c(e){let{children:t}=e,n=(0,a.useRouter)();return(0,s.useEffect)(()=>{o.Z.get("analogueshifts")&&n.push("/dashboard/account")},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ix,{position:"top-center"}),t]})}},2018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7437),s=n(8302);n(7306),n(6691);var i=n(2265),a=n(1396),o=n.n(a),c=n(3619),l=n(7948),u=n(7908),d=n(1490);function p(){let[e,t]=(0,i.useState)(""),[a,p]=(0,i.useState)(""),[f,x]=(0,i.useState)(!1),m=async t=>{t.preventDefault();let r=n(5994);JSON.stringify({email:e,password:a});let s={method:"POST",url:"https://api.analogueshifts.com/login",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:e,password:a})};x(!0),r.request(s).then(async e=>{let t=JSON.stringify({...e.data.data.user,token:e.data.data.token});d.Z.set("analogueshifts",t),x(!1),l.Am.success("Login Successful",{position:"top-right",autoClose:3e3}),window.location.href="/dashboard/account"}).catch(e=>{x(!1),l.Am.error(e.message,{position:"top-right",autoClose:3e3})})};return(0,r.jsxs)(u.Z,{children:[f&&(0,r.jsx)(c.Z,{}),(0,r.jsxs)("main",{className:"w-full pb-12 pt-[100px] bg-[#f0f0f0] flex flex-col items-center justify-center  gap-[70px]",children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{className:"max-w-[90%] w-[500px] rounded-xl h-max p-8 bg-white shadow-xl flex flex-col max-[500px]:p-4",children:[(0,r.jsx)("p",{className:"text-black/70 text-2xl text-center font-extrabold pb-3",children:"Login"}),(0,r.jsx)("p",{className:"text-gray-500/90 text-base text-center pb-5",children:"We're happy to see you back!"}),(0,r.jsxs)("form",{onSubmit:m,method:"POST",className:"w-full pt-5 flex flex-col",children:[(0,r.jsx)("input",{value:e,onChange:e=>t(e.target.value),type:"email",placeholder:"Enter Email",className:"w-full border mb-4 rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500",required:!0}),(0,r.jsx)("input",{value:a,onChange:e=>p(e.target.value),type:"password",placeholder:"Enter Password",className:"w-full border rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500",required:!0}),(0,r.jsxs)("div",{className:"w-full flex justify-end gap-1 pt-2 pr-2",children:[(0,r.jsx)("p",{className:"text-xs text-gray-400",children:"Don't have an account?"}),(0,r.jsx)(o(),{href:"/register",className:"text-xs underline text-gray-400",children:"Sign Up"})]}),(0,r.jsx)("input",{type:"submit",value:"Continue",className:"w-full rounded-md px-4 py-3.5 outline-none cursor-pointer mt-5 text-sm font-medium text-white bg-black/90 text-center"})]})]})]})]})}},7306:function(){},1490:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return s}});var s=function e(t,n){function s(e,s,i){if("undefined"!=typeof document){"number"==typeof(i=r({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var o in i)i[o]&&(a+="; "+o,!0!==i[o]&&(a+="="+i[o].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+a}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},s=0;s<n.length;s++){var i=n[s].split("="),a=i.slice(1).join("=");try{var o=decodeURIComponent(i[0]);if(r[o]=t.read(a,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){s(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[2426,263,5994,2971,2472,1744],function(){return e(e.s=1729)}),_N_E=e.O()}]);