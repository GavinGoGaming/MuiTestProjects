var AWAYFL=function(e){"use strict";const t="DecompressionStream"in self,s=e=>67===e[0]&&87===e[1]&&83===e[2],r=e=>new DataView(e.buffer).getUint32(4,!0);function i(e="",i=(e=>e)){let n,o=0,a=[];return i&&i(0),fetch(e).then((e=>(o=+e.headers.get("Content-Length"),n=e.body.getReader(),n.read()))).then((e=>{const h=e.value;console.debug("[Loader] Header:",String.fromCharCode.apply(null,h.slice(0,3).reverse()));let l,c=0;if(t&&s(h)){const e=r(h),s=h.slice(0,8);s[0]=70,console.debug("[Loader] SWC size:",r(h)),l=function(e,s=8){if(!t)throw"Your browser not support DecompressionStream =(";const r=new self.DecompressionStream("deflate"),i=r.writable.getWriter(),n=r.readable.getReader(),o=new Uint8Array(e);let a,h=!1,l=!1;function c(){n.read().then((function t(r){const i=r.done,h=r.value;return h&&(o.set(h,s),s+=h.length),i||s>=e?(l=!0,a&&a(),void console.debug("[Loader] Decoder closed:",s)):n.read().then(t)}))}return{get buffer(){return o},write(e){i.ready.then((()=>{i.write(e),h||(h=!0,c())}))},readAll:()=>l?Promise.resolve(o):new Promise((e=>{a=()=>{e(o)}}))}}(e,8),l.buffer.set(s),l.write(h.slice(8))}else a.push(h);return c+=h.length,i&&i(Math.min(1,c/o)),n.read().then((function e(t){if(t.done){if(l)return l.readAll();{let e=new Uint8Array(c),t=0;return a.forEach((s=>{e.set(s,t),t+=s.length})),e}}const s=t.value;return c+=s.length,i&&i(c/o),l?l.write(s):a.push(s),n.read().then(e)}))}))}function n(e,s=(e=>e)){const r=e.path.indexOf(".js")>-1;if(!r&&t)return i(e.path,s).then((t=>Object.assign(e,{data:t.buffer,type:"swf"})));const n=new XMLHttpRequest;return n.addEventListener("progress",(t=>{const r=t.total||+n.getResponseHeader("content-length")||e.size||0;r?(console.log("XHR",t.loaded,r),s(Math.min(1,t.loaded/r))):s(1)})),n.open("GET",e.path,!0),n.responseType=r?"text":"arraybuffer",new Promise(((t,i)=>{n.addEventListener("error",i),n.addEventListener("load",(()=>{if(s(1),r){const e=new Blob([n.response],{type:"text/javascript"});o(URL.createObjectURL(e)).then((()=>t(void 0)))}else t({meta:e.meta||{},name:e.name,path:e.path,resourceType:e.resourceType,data:n.response,type:r?"js":"swf"})})),n.send()}))}function o(e,t){const s=document.querySelector("head"),r=document.createElement("script");return new Promise(((i,n)=>{Object.assign(r,{type:"text/javascript",async:!0,src:"string"==typeof e?e:e.path,onload:()=>{t&&t(1),i(r)},onerror:n}),s.appendChild(r)}))}class a{constructor(e,t,s=1){this.callback=e,this.weight=s,this.id=a.ID++,this.value=0,this._childs=[],this._report=this._report.bind(this),this.childs=t}set childs(e){for(let e of this._childs)e.callback===this._report&&(e.callback=null);if(this._childs.length=0,e){for(let t of e){if(t===this)throw"Reporter loop";t.callback=this._report}this._childs=e.slice()}}get childs(){return this._childs}_report(e){if(0===this._childs.length)this.value=e*this.weight;else{let e=0,t=0;this._childs.forEach((s=>{e+=s.weight||1,t+=s.value||0})),this.value=t/e}this.callback&&this.callback(this.value)}get report(){return this._report}}a.ID=0;class h{constructor(e){this.config=e}run(e,t,s=(e=>{}),r=!1){const i=e.length,h=t.length,l=e.concat(t),c=Array.from({length:i+h},(()=>new a));let d;return this.progress=new a(s,c),r?(d=t.map(((e,t)=>n(e,c[t].report))),d=d.concat(e.map(((e,t)=>o(e,c[t+h].report))))):d=l.map(((e,t)=>n(e,c[t].report))),Promise.all(d).then((e=>e.filter((e=>e&&"swf"===e.type))))}}const l=(e,t)=>"string"!=typeof e?+e:e.includes("%")?parseFloat(e)/100*t:parseFloat(e);class c{constructor(e=document,t){this.root=e,this.config=t,this.onUpdate=this.onUpdate.bind(this),this.onProgress=this.onProgress.bind(this),window.addEventListener("resize",this.onUpdate)}build(){this.splash=this.root.querySelector("#splash__image"),this.prRoot=this.root.querySelector("#progress__root"),this.prLine=this.root.querySelector("#progress__line")}init(){if(this.build(),!this.splash)return;const e=this.config;e.backgroundColor&&(document.body.style.backgroundColor=e.backgroundColor),e.splash&&Object.assign(this.splash.style,{backgroundImage:`url(${e.splash})`,visibility:"visible"});const t=e.progress;"object"==typeof t&&(t.rect=t.rect||[.1,.9,.8,.01],Object.assign(this.prRoot.style,{background:t.back,left:100*t.rect[0]+"%",top:100*t.rect[1]+"%",width:100*t.rect[2]+"%",height:100*t.rect[3]+"%"}),Object.assign(this.prLine.style,{background:t.line})),this.onUpdate()}onProgress(e){const t=this.config.progress;if(this.prLine&&t)if("tb"===t.direction)Object.assign(this.prLine.style,{height:100*e+"%",width:"100%"});else Object.assign(this.prLine.style,{height:"100%",width:100*e+"%"})}onUpdate(){if(!this.splash)return;const e=this.config;let t=l(e.x,window.innerWidth)||0,s=l(e.y,window.innerHeight)||0,r=l(e.w,window.innerWidth)||window.innerWidth,i=l(e.h,window.innerHeight)||window.innerHeight;const n=Math.min(i/e.height,r/e.width),o=Math.ceil(e.width*n),a=Math.ceil(e.height*n),h=t+(r-o)/2,c=s+(i-a)/2;Object.assign(this.splash.style,{width:`${o}px`,height:`${a}px`,left:`${h}px`,top:`${c}px`})}ready(){this.splash&&(this.config.start&&(this.splash.style.background=`url(${this.config.start})`),Object.assign(this.prRoot.style,{visibility:"hidden",opacity:0}))}hide(e=!1){if(!this.splash)return;Object.assign(this.prRoot.style,{visibility:"hidden",opacity:0}),Object.assign(this.splash.style,{visibility:"hidden",opacity:0});const t=new Promise((e=>setTimeout(e,500)));return e?t.then((()=>this.dispose())):t}dispose(){this.splash&&(window.removeEventListener("resize",this.onUpdate),this.splash.remove(),this.prRoot.remove(),this.splash=null)}}class d{constructor(e,t){this.loader=e,this.config=t}runGame(e=(e=>e)){const t=this.config,s=t.binary=(Array.isArray(t.binary)?t.binary:[t.binary]).map((e=>"string"==typeof e?{path:e}:e)),r=t.runtime=(Array.isArray(t.runtime)?t.runtime:[t.runtime]).map((e=>"string"==typeof e?{path:e,type:"js"}:e)),i=new a(null,null,4),n=new a((e=>{console.log("AVM Load",e)}),null,t.progressParserWeight?t.progressParserWeight:.001);return this.progress=new a(e,[i,n]),Object.assign(window,{updatePokiProgressBar:n.report}),this.loader.run(r,s,i.report,t.debug).then((e=>(t.files=e,t)))}}let p,g,u;const f={init(e){g=new h(e),p=new d(g,e),u=new c(document,e),u.init(),window.setStageDimensions=function(t,s,r,i){e.x=t,e.y=s,e.w=r,e.h=i,window.AVMPlayerPoki&&window.AVMPlayerPoki.setStageDimensions(t,s,r,i),u.onUpdate()}},runGame(e=(e=>e),t=((e,t)=>0)){const s=p.config,r=e=>{if(s.start){u.ready();const t=t=>{if(u.hide(!0),!e)throw"PokiPlayer did not send a callback for starting game";e()};window.addEventListener("click",t,{once:!0})}else u.hide(!0)};return Object.assign(window,{swfParseComplete:r}),p.runGame((t=>{console.log("progress:",t),u.onProgress(t),e(t)})).then((e=>{t(e,r)}))}};return e.LegacyLoader=f,e.Loader=h,e.ProgressUI=c,e.Reporter=a,e.Runner=d,e}({});
window.AWAYFL=AWAYFL;
//# sourceMappingURL=loader.js.map