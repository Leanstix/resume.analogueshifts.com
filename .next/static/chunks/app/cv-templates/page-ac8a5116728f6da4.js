(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7843],{3223:function(e,t,l){Promise.resolve().then(l.bind(l,3870))},9763:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var s=l(7437),a=l(2265),n=l(1396),r=l.n(n);function o(){let[e,t]=(0,a.useState)(""),l=[{question:"How do I build a resume?",answer:(0,s.jsxs)("p",{className:"text-sm tracking-wide text-black/70 ",children:["You can build a resume with our resume creator — simply upload your existing resume and edit it or start from the beginning. Check out our"," ",(0,s.jsx)(r(),{href:"/app/how-to-start",className:"text-AnalogueShiftsTextColor",children:"free resume builder"})," ","today and learn how to make a resume that gets you more job offers in your chosen industry."]})}];return(0,s.jsxs)("div",{className:"w-full h-max bg-white py-[80px] flex flex-col gap-5 items-center px-5",children:[(0,s.jsx)("p",{className:"py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80",children:"Frequently Asked Questions"}),l.map(l=>(0,s.jsxs)("div",{style:{height:"".concat(e===l.question?"auto":"72px")},className:"w-[900px] overflow-hidden max-w-[100%] rounded-lg border px-6 ".concat(e===l.question?"shadow-xl":"shadow-none"),children:[(0,s.jsxs)("div",{onClick:()=>{e===l.question?t(""):t(l.question)},className:"faq-box w-full h-[72px] flex justify-between items-center cursor-pointer",children:[(0,s.jsx)("p",{className:"w-[95%] text-base text-black/90 font-medium",children:l.question}),(0,s.jsx)("button",{className:"faq-plus w-5 h-5 rounded-full duration-300 flex justify-center items-center text-white font-semibold text-sm ".concat(e===l.question?"bg-AnalogueShiftsTextColor":"bg-gray-300"," ").concat(e===l.question?"rotate-45":"rotate-0"),children:"+"})]}),(0,s.jsx)("div",{className:"pb-5 w-full border-t pt-5 border-AnalogueShiftsTextColor",children:l.answer})]},crypto.randomUUID())),(0,s.jsxs)("p",{className:"text-sm tracking-wide text-black/70 text-center",children:["More questions?"," ",(0,s.jsx)(r(),{href:"/faq",className:"text-AnalogueShiftsTextColor",children:"Visit our FAQ library"})," ","."]})]})}},3619:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var s=l(7437);function a(){return(0,s.jsx)("div",{className:"fixed z-50 top-0 left-0 w-screen h-screen bg-black/10 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"lds-ellipsis",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}},4209:function(e,t,l){"use strict";l.d(t,{Z:function(){return p}});var s=l(7437),a=l(2265),n=l(2262);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,s)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach(function(t){var s;s=l[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}class c extends a.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let l=1/0,s=t.default||2;for(let a in t){let n=parseInt(a),r=n>0&&e<=n;r&&n<l&&(l=n,s=t[a])}s=Math.max(1,parseInt(s)||1),this.state.columnCount!==s&&this.setState({columnCount:s})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),l=a.Children.toArray(this.props.children);for(let s=0;s<l.length;s++){let a=s%e;t[a]||(t[a]=[]),t[a].push(l[s])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:l}=this.props,s=this.itemsInColumns(),n=`${100/s.length}%`,o=l;o&&"string"!=typeof o&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===o&&(o="my-masonry-grid_column"));let c=i(i(i({},e),t),{},{style:i(i({},t.style),{},{width:n}),className:o});return s.map((e,t)=>a.createElement("div",r({},c,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:l,columnClassName:s,columnAttrs:n,column:o,className:i}=e,c=function(e,t){if(null==e)return{};var l,s,a=function(e,t){if(null==e)return{};var l,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)l=n[s],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)l=n[s],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),u=i;return"string"!=typeof i&&(this.logDeprecated('The property "className" requires a string'),void 0===i&&(u="my-masonry-grid")),a.createElement("div",r({},c,{className:u}),this.renderColumns())}}c.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};var u=l(1396),x=l.n(u),m=l(6691),d=l.n(m),p=e=>{let{posts:t}=e,[l,r]=(0,a.useState)(3),o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{window.onresize=function(){window.innerWidth<=500?r(1):window.innerWidth<1281?r(2):r(3)}},[]),(0,a.useEffect)(()=>{window.innerWidth<=500?r(1):r(3)},[]),(0,s.jsx)("div",{className:"container mx-auto max-[500px]:w-[100%] max-[500px]:flex max-[500px]:justify-center",children:(0,s.jsx)(c,{breakpointCols:l,className:"flex w-full",columnClassName:"px-3 max-[500px]:px-0",ref:o,children:t.map(e=>{var t,l;return(0,s.jsx)(x(),{href:"blog/".concat(null==e?void 0:e.slug),className:"w-full mb-6 hover:scale-[1.05] duration-300 h-max pb-6  overflow-hidden rounded-2xl shadow-xl flex flex-col blog-box",children:(0,s.jsxs)("div",{className:"flex flex-col justify-evenly w-full h-6/12",children:[(0,s.jsxs)("div",{className:"flex flex-col pb-5 w-full gap-3",children:[(0,s.jsx)("div",{className:"h-56 w-full",children:(0,s.jsx)("img",{src:null==e?void 0:null===(t=e.yoast_head_json)||void 0===t?void 0:t.og_image[0].url,alt:null==e?void 0:null===(l=e.yoast_head_json)||void 0===l?void 0:l.og_image[0].url,className:"h-full w-full object-cover"})}),(0,s.jsxs)("div",{className:"flex flex-col w-full gap-3 p-3.5",children:[(0,s.jsx)("p",{className:"text-sm text-black/60 font-semibold",children:"BLOG"}),(0,s.jsx)("p",{className:"text-base text-black/80 font-medium",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.title.rendered}})})]})]}),(0,s.jsxs)("div",{className:"flex items-end w-full h-[40px] gap-4 px-3.5",children:[(0,s.jsx)(d(),{src:n.Z,alt:"",className:"w-[40px] h-[40px] rounded-full"}),(0,s.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,s.jsx)("p",{className:"text-sm text-black/80 font-medium",children:"AnalogueShifts"}),(0,s.jsx)("p",{className:"text-xs text-black/60 font-medium",children:null==e?void 0:e.date})]})]})]})},crypto.randomUUID())})})})}},127:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var s=l(7437),a=l(6691),n=l.n(a),r=l(1396),o=l.n(r);function i(e){let{data:t}=e;return(0,s.jsx)("div",{className:"w-full flex flex-wrap items-center gap-x-4 gap-y-4",children:t.map(e=>(0,s.jsxs)("div",{className:"h-max p-4 w-[450px] max-w-full bg-[#f8f9fb] rounded-lg resume-template-link",children:[(0,s.jsxs)("div",{className:"w-full h-[500px] max-[900px]:h-max relative template-img-box",children:[(0,s.jsx)("div",{className:"w-full h-full rounded-lg overflow-y-scroll scroll-hidden",children:(0,s.jsx)(n(),{className:"h-full w-max mx-auto rounded-lg object-fit",src:e.templateImage,alt:"Resume Template"})}),(0,s.jsx)(o(),{href:e.path,className:"link-button absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80",children:"Use Template"})]}),(0,s.jsxs)("div",{className:"w-full pl-2 h-max",children:[(0,s.jsx)("p",{className:"pt-6 text-base text-black/90 font-medium pb-2",children:e.name}),(0,s.jsx)("p",{className:"text-black/60 font-medium text-sm",children:null==e?void 0:e.description})]})]},crypto.randomUUID()))})}},3870:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return j}});var s=l(7437),a=l(2265),n=l(3619),r=l(9763),o=l(1396),i=l.n(o),c=l(6691),u=l.n(c),x=l(450);function m(){return(0,s.jsxs)("section",{className:"w-full h-max relative",children:[(0,s.jsx)("nav",{className:"sticky top-0 w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto",children:(0,s.jsx)("div",{className:"flex gap-4 w-max",children:x.C6.map(e=>(0,s.jsx)(i(),{href:e.path,className:"py-2.5 bg-gray-200/80 hover:bg-black hover:text-white duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80",children:e.name},crypto.randomUUID()))})}),(0,s.jsx)("div",{className:"w-full pt-6 flex flex-col pb-[100px] gap-[100px] px-10 max-[800px]:px-5",children:x.XJ.map(e=>(0,s.jsxs)("section",{className:"w-full border-b pb-[80px] flex justify-between h-max max-[929px]:flex-col max-[929px]:gap-5",id:e.id,children:[(0,s.jsx)("div",{className:"w-6/12  h-max max-[929px]:w-full rounded-lg shadow-xl cursor-pointer duration-300 hover:translate-x-1 hover:translate-y-1 cv-template-box",children:(0,s.jsx)("div",{className:"w-full h-max overflow-y-hidden max-h-[500px] rounded-lg shadow-xl -translate-x-2 -translate-y-2 duration-300 cv-template-img",children:(0,s.jsx)(u(),{src:e.template,alt:"Cv Template Image",className:"mx-auto w-max"})})}),(0,s.jsxs)("div",{className:"w-6/12 pl-6 max-[929px]:w-full max-[929px]:pl-0 flex flex-col",children:[(0,s.jsx)("p",{className:"text-[2rem] text-black/80 font-bold pb-5",children:e.name}),(0,s.jsx)("p",{className:"text-base text-black/80 font-medium pb-2.5",children:"Why should you use this template?"}),e.whyShouldYouUseThisTemplate,(0,s.jsx)("div",{className:"w-full pt-6",children:(0,s.jsxs)("div",{className:"mt-4 bg-[#f8f9fb] p-3 w-full h-max flex flex-col gap-3 rounded-lg",children:[(0,s.jsx)("p",{className:"text-black/60 font-medium text-base pb-2 mb-2",children:"CV Builder"}),(0,s.jsx)("p",{className:"text-black/60 font-medium text-sm pb-6",children:"Use our software and create a CV with a premade template. Let the Genius CV builder help you make your resume fast."}),(0,s.jsx)(i(),{href:"/resume-builder/app/how-to-start",className:"w-full bg-AnalogueShiftsTextColor/80 flex justify-center text-white font-semibold rounded-lg py-3",children:"Build My CV"})]})})]})]},crypto.randomUUID()))})]})}var d=l(4209),p=l(2500),h=l(3698),f=l(8460),w=l(336),b=l(2612),g=l(127);function A(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("main",{className:"w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white",children:[(0,s.jsxs)("div",{className:"flex w-full gap-4 items-center pb-8",children:[(0,s.jsxs)(i(),{href:"/",className:"flex gap-1.5 items-center",children:[(0,s.jsx)(u(),{src:f.default,alt:"Home Icon",className:"w-7 h-7"}),(0,s.jsx)("p",{className:"text-black/80 font-medium text-sm hover:underline",children:"Home"})]}),(0,s.jsx)(u(),{src:w.default,alt:"Divider Icon",className:"w-5 h-4"}),(0,s.jsx)("p",{className:"text-black/50 font-medium text-sm",children:"CV Templates"})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col items-center",children:[(0,s.jsx)("p",{className:"pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80",children:"CV Templates"}),(0,s.jsxs)("p",{className:"text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center",children:["Select a CV template from the templates below, to"," ",(0,s.jsx)(i(),{href:"/cv-maker",className:"text-AnalogueShiftsTextColor/80 hover:underline",children:"make your own professional CV."})]}),(0,s.jsx)("div",{className:"w-full flex max-[500px]:flex-col justify-center",children:(0,s.jsx)(i(),{className:"w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg",href:"/resume-builder/app/how-to-start",children:"Build My CV"})})]})]}),(0,s.jsxs)("div",{className:"w-full px-10 max-[800px]:px-5",children:[(0,s.jsxs)("section",{style:{backgroundImage:"url(/pop-bg.svg)"},className:"mt-10 w-full h-max flex flex-col  bg-no-repeat",children:[(0,s.jsx)("p",{className:"pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80",children:"Use an AnalogueShifts CV Template"}),(0,s.jsx)(g.Z,{data:b.G$.slice(0,2)})]}),(0,s.jsx)("div",{className:"w-full  h-max py-[60px] flex justify-center",children:(0,s.jsx)("p",{className:"pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80",children:"Downloadable CV Templates"})})]})]})}function j(){let[e,t]=(0,a.useState)(!1),[l,o]=(0,a.useState)([]);return(0,a.useEffect)(()=>{t(!0),p.Zw.get("/posts").then(e=>{let l=e.data;o(l.slice(0,3)),t(!1)}).catch(e=>{t(!1)})},[]),(0,s.jsxs)(h.default,{children:[e&&(0,s.jsx)(n.Z,{}),(0,s.jsxs)("main",{className:"w-full h-auto",children:[(0,s.jsx)(A,{}),(0,s.jsx)(m,{}),(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"w-full h-max flex flex-col items-center bg-white justify-center p-5 ",children:[(0,s.jsx)("p",{className:" pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80",children:"Related Articles"}),l[0]&&(0,s.jsx)(d.Z,{posts:l})]})]})]})}},2500:function(e,t,l){"use strict";l.d(t,{Zw:function(){return a}});var s=l(2173);s.Z.create({baseURL:"https://api.analogueshifts.com",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0});let a=s.Z.create({baseURL:"https://blog.analogueshifts.com/wp-json/wp/v2"});s.Z.create({baseURL:"https://api.analogueshifts.com"})},2262:function(e,t){"use strict";t.Z={src:"/_next/static/media/author.5697fa24.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEWRkI+CgoCBgYBrampXV1ZXV1U/Pz4/Pj49PT02NjY0NDQmJiYjIyMbGxoWFhYRERENDg4NDQ0LCwsEBAQDAwMDAgICAgIBAQEBAAAAAABdA/umAAAAN0lEQVR42gXAhRGEMAAEwHvFPRC2/0aZULiI07SrYvH+2OQgL3eNoe2afxFzP/6+q1RwiXoUeACwnwTjIkSFswAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8460:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/house-icon.16d79858.png",height:983,width:983,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwcEBwd/SyGlAAAAFHRSTlMAAQISFhcbHiQlJyouMDI0OEFFRgTSvwgAAAA4SURBVHjaJYeJDcAgDMRMadMQfth/VwScTpYNPOcbGm5orbrNGjQD+mvx64CknIsAfvwyPTjO3AIofgE6AMWv1wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},336:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/right-bracket.43028c9f.png",height:299,width:439,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAU0lEQVR42mOAAUUlRUYNDQ1mBiCQkpZmZEAG/IICYAEZWVlHKWkpeYgiKYQiOXk5qAIZXilp6TwGdCAgJAhT4AhUADZBEmICAigoKjCqA92ALgkAQBIG59kHkDYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[2426,263,2173,2612,3698,2971,2472,1744],function(){return e(e.s=3223)}),_N_E=e.O()}]);