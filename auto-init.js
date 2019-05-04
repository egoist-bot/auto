(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=s(o(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0));s(o(2)),s(o(78));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===s)t.children=n;else if(s>1){for(var l=new Array(s),u=0;u<s;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const c=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?r.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/auto-init.html")+t),r.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const r=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(r),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends r.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(27).then(o.bind(null,79))),h(()=>o.e(27).then(o.bind(null,80)));var b=i("h1",{},void 0,"Initialization"),p=i("code",{},void 0,"auto"),v=i("code",{},void 0,"auto init"),f=i("p",{},void 0,"Interactive setup for most configurable options."),m=i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"$ auto init --",i("span",{className:"hljs-built_in"},void 0,"help"),i("br",{}),i("br",{}),"Options",i("br",{}),i("br",{}),"  --only-labels    Only run init ",i("span",{className:"hljs-keyword"},void 0,"for")," the labels. As most other options are ",i("span",{className:"hljs-keyword"},void 0,"for")," advanced users",i("br",{}),"  -d, --dry-run    Report what ",i("span",{className:"hljs-built_in"},void 0,"command")," will ",i("span",{className:"hljs-keyword"},void 0,"do")," but ",i("span",{className:"hljs-keyword"},void 0,"do")," not actually ",i("span",{className:"hljs-keyword"},void 0,"do")," anything",i("br",{}),i("br",{}),"Examples",i("br",{}),i("br",{}),"  $ auto init",i("br",{}))),y=i("code",{},void 0,"auto create-labels"),g=i("p",{},void 0,"Create your project's labels on github. If labels exist it will update them."),w=i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"$ auto create-labels --",i("span",{className:"hljs-built_in"},void 0,"help"),i("br",{}),i("br",{}),"Options",i("br",{}),i("br",{}),"  -d, --dry-run    Report what ",i("span",{className:"hljs-built_in"},void 0,"command")," will ",i("span",{className:"hljs-keyword"},void 0,"do")," but ",i("span",{className:"hljs-keyword"},void 0,"do")," not actually ",i("span",{className:"hljs-keyword"},void 0,"do")," anything",i("br",{}),i("br",{}),"Global Options",i("br",{}),i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",i("span",{className:"hljs-built_in"},void 0,"help")," output ",i("span",{className:"hljs-keyword"},void 0,"for")," the ",i("span",{className:"hljs-built_in"},void 0,"command"),i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -w, --very-verbose    Show a lot more logs",i("br",{}),"  --repo string         The repo to ",i("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",i("span",{className:"hljs-keyword"},void 0,"in")," the package.json",i("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package.json",i("br",{}),"  --github-api string   GitHub API to use",i("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",i("br",{}),i("br",{}),"Examples",i("br",{}),i("br",{}),"  $ auto create-labels",i("br",{}))),j=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ For this to work you must have a ",i("code",{},void 0,"GH_TOKEN")," set, ex: ",i("code",{},void 0,"GH_TOKEN=YOUR_TOKEN auto create-labels"))));var O=e=>i("div",{className:e.className},void 0,i("section",{},void 0,b,i("p",{},void 0,p," provides some tools to quickly set up your project. If you do not want to use the interactive experience all these options can be configured via the ",i(c,{currentPage:e.currentPage,to:"/auto/pages/autorc.html"},void 0,".autorc")," and most can be configure via CLI options."),i("h2",{id:"auto-init"},void 0,v," ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-init","aria-hidden":"true"})),f,m,i("h2",{id:"auto-create-labels"},void 0,y," ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-create-labels","aria-hidden":"true"})),g,w,j));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=auto-init.js.map