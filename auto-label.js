(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{60:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=l(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(0));l(o(2)),l(o(78));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===l)t.children=r;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const h=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/auto-label.html")+t),a.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const n=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(a),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const c=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),o};c(()=>o.e(27).then(o.bind(null,79))),c(()=>o.e(27).then(o.bind(null,80)));var b=s("h1",{},void 0,s("code",{},void 0,"auto label")),f=s("p",{},void 0,"Get the labels for a pull request. Doesn't do much, but the return value lets you write you own scripts based off of the PR labels!"),p=s("p",{},void 0,"The following will only run the ",s("code",{},void 0,"test:visual")," script when the PR has has the ",s("code",{},void 0,"Visual")," label."),v=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,s("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",s("span",{className:"hljs-variable"},void 0,"$PATH"),s("br",{}),s("br",{}),s("span",{className:"hljs-keyword"},void 0,"if")," [ `auto label --pr ",s("span",{className:"hljs-variable"},void 0,"$PR_NUMBER")," | grep -c ",s("span",{className:"hljs-string"},void 0,"'^Visual'"),"` -ne 0 ];",s("br",{}),s("span",{className:"hljs-keyword"},void 0,"then"),s("br",{}),"    npm run ",s("span",{className:"hljs-built_in"},void 0,"test"),":visual",s("br",{}),s("span",{className:"hljs-keyword"},void 0,"fi"),s("br",{}))),m=s("pre",{},void 0,s("code",{className:"language-bash"},void 0,">  auto label -h",s("br",{}),s("br",{}),"Options",s("br",{}),s("br",{}),"  --pr number   The pull request number you want the labels of (defaults to last merged PR)",s("br",{}),s("br",{}),"Global Options",s("br",{}),s("br",{}),"  -h, --",s("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",s("span",{className:"hljs-built_in"},void 0,"help")," output ",s("span",{className:"hljs-keyword"},void 0,"for")," the ",s("span",{className:"hljs-built_in"},void 0,"command"),s("br",{}),"  -v, --verbose         Show some more logs",s("br",{}),"  -w, --very-verbose    Show a lot more logs",s("br",{}),"  --repo string         The repo to ",s("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",s("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",s("span",{className:"hljs-keyword"},void 0,"for")," the platform",s("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",s("span",{className:"hljs-keyword"},void 0,"for")," the platform",s("br",{}),"  --github-api string   GitHub API to use",s("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",s("br",{}),s("br",{}),"Examples",s("br",{}),s("br",{}),"  $ auto label --pr 123",s("br",{}))),y=s("p",{},void 0,"Running ",s("code",{},void 0,"auto label")," without the PR number enables it to run in master after a PR has been merged. You can use these labels to automate more things in your merge build pipeline other than the release."),w=s("p",{},void 0,s("code",{},void 0,"auto")," the project uses this to only deploy the documentation when the last merged PR has a ",s("code",{},void 0,"documentation")," label.");var g=e=>s("div",{className:e.className},void 0,s("section",{},void 0,b,f,p,v,m,s("h2",{id:"without-pr-number"},void 0,"Without PR Number ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#without-pr-number","aria-hidden":"true"})),y,w));t.default=g,e.exports=t.default}}]);
//# sourceMappingURL=auto-label.js.map