"use strict";(self.webpackChunkexperiments=self.webpackChunkexperiments||[]).push([[28],{2028:(Le,D,y)=>{y.r(D),y.d(D,{WikiModule:()=>Ae});var b=y(6895),te=y(4466),J=y(6773),r=y(8256),ne=y(9646),re=y(9751),se=y(4351),oe=y(9300),P=y(4004);class S{}class O{}class v{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const o=e.indexOf(":");if(o>0){const s=e.slice(0,o),i=s.toLowerCase(),l=e.slice(o+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(l):this.headers.set(i,[l])}})}:()=>{this.headers=new Map,Object.entries(t).forEach(([e,o])=>{let s;if(s="string"==typeof o?[o]:"number"==typeof o?[o.toString()]:o.map(i=>i.toString()),s.length>0){const i=e.toLowerCase();this.headers.set(i,s),this.maybeSetNormalizedName(e,i)}})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new v;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let o=t.value;if("string"==typeof o&&(o=[o]),0===o.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...o),this.headers.set(e,s);break;case"d":const i=t.value;if(i){let l=this.headers.get(e);if(!l)return;l=l.filter(h=>-1===i.indexOf(h)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class ie{encodeKey(t){return L(t)}encodeValue(t){return L(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const le=/%(\d[a-f0-9])/gi,ue={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function L(n){return encodeURIComponent(n).replace(le,(t,e)=>ue[e]??t)}function N(n){return`${n}`}class E{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ie,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ae(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[l,h]=-1==i?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,i)),t.decodeValue(s.slice(i+1))],a=e.get(l)||[];a.push(h),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const o=t.fromObject[e],s=Array.isArray(o)?o.map(N):[N(o)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(o=>{const s=t[o];Array.isArray(s)?s.forEach(i=>{e.push({param:o,value:i,op:"a"})}):e.push({param:o,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(o=>e+"="+this.encoder.encodeValue(o)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new E({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(N(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let o=this.map.get(t.param)||[];const s=o.indexOf(N(t.value));-1!==s&&o.splice(s,1),o.length>0?this.map.set(t.param,o):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function j(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function X(n){return typeof Blob<"u"&&n instanceof Blob}function U(n){return typeof FormData<"u"&&n instanceof FormData}class k{constructor(t,e,o,s){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function de(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==o?o:null,i=s):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new v),this.context||(this.context=new ce),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+l}}else this.params=new E,this.urlWithParams=e}serializeBody(){return null===this.body?null:j(this.body)||X(this.body)||U(this.body)||function pe(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||U(this.body)?null:X(this.body)?this.body.type||null:j(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,o=t.url||this.url,s=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,l=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,f=t.params||this.params;const R=t.context??this.context;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((C,g)=>C.set(g,t.setHeaders[g]),a)),t.setParams&&(f=Object.keys(t.setParams).reduce((C,g)=>C.set(g,t.setParams[g]),f)),new k(e,o,i,{params:f,headers:a,context:R,reportProgress:h,responseType:s,withCredentials:l})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class x{constructor(t,e=200,o="OK"){this.headers=t.headers||new v,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||o,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class _ extends x{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new _({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class M extends x{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new M({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z extends x{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function F(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let B=(()=>{class n{constructor(e){this.handler=e}request(e,o,s={}){let i;if(e instanceof k)i=e;else{let a,f;a=s.headers instanceof v?s.headers:new v(s.headers),s.params&&(f=s.params instanceof E?s.params:new E({fromObject:s.params})),i=new k(e,o,void 0!==s.body?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const l=(0,ne.of)(i).pipe((0,se.b)(a=>this.handler.handle(a)));if(e instanceof k||"events"===s.observe)return l;const h=l.pipe((0,oe.h)(a=>a instanceof M));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return h.pipe((0,P.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,P.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,P.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,P.U)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,o={}){return this.request("DELETE",e,o)}get(e,o={}){return this.request("GET",e,o)}head(e,o={}){return this.request("HEAD",e,o)}jsonp(e,o){return this.request("JSONP",e,{params:(new E).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,o={}){return this.request("OPTIONS",e,o)}patch(e,o,s={}){return this.request("PATCH",e,F(s,o))}post(e,o,s={}){return this.request("POST",e,F(s,o))}put(e,o,s={}){return this.request("PUT",e,F(s,o))}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(S))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();function W(n,t){return t(n)}function he(n,t){return(e,o)=>t.intercept(e,{handle:s=>n(s,o)})}const me=new r.OlP("HTTP_INTERCEPTORS"),H=new r.OlP("HTTP_INTERCEPTOR_FNS");function ye(){let n=null;return(t,e)=>(null===n&&(n=((0,r.f3M)(me,{optional:!0})??[]).reduceRight(he,W)),n(t,e))}let Z=(()=>{class n extends S{constructor(e,o){super(),this.backend=e,this.injector=o,this.chain=null}handle(e){if(null===this.chain){const o=Array.from(new Set(this.injector.get(H)));this.chain=o.reduceRight((s,i)=>function fe(n,t,e){return(o,s)=>e.runInContext(()=>t(o,i=>n(i,s)))}(s,i,this.injector),W)}return this.chain(e,o=>this.backend.handle(o))}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(O),r.LFG(r.lqb))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();const Ce=/^\)\]\}',?\n/;let K=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new re.y(o=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((u,p)=>s.setRequestHeader(u,p.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const u=e.detectContentTypeHeader();null!==u&&s.setRequestHeader("Content-Type",u)}if(e.responseType){const u=e.responseType.toLowerCase();s.responseType="json"!==u?u:"text"}const i=e.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const u=s.statusText||"OK",p=new v(s.getAllResponseHeaders()),T=function be(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(s)||e.url;return l=new _({headers:p,status:s.status,statusText:u,url:T}),l},a=()=>{let{headers:u,status:p,statusText:T,url:ee}=h(),m=null;204!==p&&(m=typeof s.response>"u"?s.responseText:s.response),0===p&&(p=m?200:0);let A=p>=200&&p<300;if("json"===e.responseType&&"string"==typeof m){const De=m;m=m.replace(Ce,"");try{m=""!==m?JSON.parse(m):null}catch(Je){m=De,A&&(A=!1,m={error:Je,text:m})}}A?(o.next(new M({body:m,headers:u,status:p,statusText:T,url:ee||void 0})),o.complete()):o.error(new z({error:m,headers:u,status:p,statusText:T,url:ee||void 0}))},f=u=>{const{url:p}=h(),T=new z({error:u,status:s.status||0,statusText:s.statusText||"Unknown Error",url:p||void 0});o.error(T)};let R=!1;const C=u=>{R||(o.next(h()),R=!0);let p={type:d.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),"text"===e.responseType&&s.responseText&&(p.partialText=s.responseText),o.next(p)},g=u=>{let p={type:d.UploadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),o.next(p)};return s.addEventListener("load",a),s.addEventListener("error",f),s.addEventListener("timeout",f),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",C),null!==i&&s.upload&&s.upload.addEventListener("progress",g)),s.send(i),o.next({type:d.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",a),s.removeEventListener("timeout",f),e.reportProgress&&(s.removeEventListener("progress",C),null!==i&&s.upload&&s.upload.removeEventListener("progress",g)),s.readyState!==s.DONE&&s.abort()}})}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(b.JF))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();const I=new r.OlP("XSRF_ENABLED"),V=new r.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),G=new r.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class ${}let ke=(()=>{class n{constructor(e,o,s){this.doc=e,this.platform=o,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,b.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(b.K0),r.LFG(r.Lbi),r.LFG(V))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();function He(n,t){const e=n.url.toLowerCase();if(!(0,r.f3M)(I)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const o=(0,r.f3M)($).getToken(),s=(0,r.f3M)(G);return null!=o&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,o)})),t(n)}var c=(()=>((c=c||{})[c.Interceptors=0]="Interceptors",c[c.LegacyInterceptors=1]="LegacyInterceptors",c[c.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",c[c.NoXsrfProtection=3]="NoXsrfProtection",c[c.JsonpSupport=4]="JsonpSupport",c[c.RequestsMadeViaParent=5]="RequestsMadeViaParent",c))();function w(n,t){return{\u0275kind:n,\u0275providers:t}}function Re(...n){const t=[B,K,Z,{provide:S,useExisting:Z},{provide:O,useExisting:K},{provide:H,useValue:He,multi:!0},{provide:I,useValue:!0},{provide:$,useClass:ke}];for(const e of n)t.push(...e.\u0275providers);return(0,r.MR2)(t)}const Y=new r.OlP("LEGACY_INTERCEPTOR_FN");let Se=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[Re(w(c.LegacyInterceptors,[{provide:Y,useFactory:ye},{provide:H,useExisting:Y,multi:!0}]))]}),n})(),Q=(()=>{class n{constructor(e){this.http=e}search(e,o){return this.http.get("https://"+o+".wikipedia.org/w/api.php",{params:{action:"query",format:"json",list:"search",utf8:"1",srsearch:e,origin:"*"}})}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(B))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ne=y(2523);let Me=(()=>{class n{constructor(){this.submitedEvent=new r.vpe,this.languageEvent=new r.vpe,this.term=""}onSearch(e){0!=e&&e.preventDefault(),this.submitedEvent.emit(this.term)}onLanguageChange(e){this.languageEvent.emit(e.target.value),console.log("SEARCH",e.target.value)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-search"]],outputs:{submitedEvent:"submitedEvent",languageEvent:"languageEvent"},decls:18,vars:0,consts:[[3,"submit"],[1,"ui","equal","width","stackable","grid"],[1,"ui","column"],[1,"ui","input"],[3,"input"],[1,"ui","container","equal","width","center","aligned","padded","stackable","grid"],[1,"ui","selection","dropdown",3,"change"],["value","pl",1,"item"],["value","en",1,"item"],["value","sq",1,"item"],[1,"ui","button","primary","column"]],template:function(e,o){1&e&&(r.TgZ(0,"form",0),r.NdJ("submit",function(i){return o.onSearch(i)}),r.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),r.NdJ("input",function(i){return o.term=i.target.value}),r.qZA()()(),r.TgZ(5,"div",2)(6,"div",5)(7,"div",2)(8,"select",6),r.NdJ("change",function(i){return o.onLanguageChange(i)}),r.TgZ(9,"option",7),r._uU(10,"Polski"),r.qZA(),r.TgZ(11,"option",8),r._uU(12,"English"),r.qZA(),r.TgZ(13,"option",9),r._uU(14,"Shqip (Alba\u0144ski)"),r.qZA()()(),r.TgZ(15,"div",2)(16,"button",10),r._uU(17,"Szukaj"),r.qZA()()()()()())},styles:[".button[_ngcontent-%COMP%]{margin-left:15px;margin-bottom:15px}.ui.input[_ngcontent-%COMP%]{top:14px;width:100%}"]}),n})();function Oe(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"tr",3),r.NdJ("click",function(){const i=r.CHM(e).$implicit,l=r.oxw(2);return r.KtG(l.openWiki(i.pageid))}),r.TgZ(1,"td")(2,"a"),r._uU(3),r.qZA()(),r.TgZ(4,"td"),r._uU(5),r.qZA(),r._UZ(6,"td",4),r.qZA()}if(2&n){const e=t.$implicit;r.xp6(3),r.Oqu(e.title),r.xp6(2),r.Oqu(e.wordcount),r.xp6(1),r.Q6J("innerHTML",e.snippet,r.oJD)}}function xe(n,t){if(1&n&&(r.TgZ(0,"table",1)(1,"thead")(2,"tr")(3,"th"),r._uU(4,"Wytu\u0142"),r.qZA(),r.TgZ(5,"th"),r._uU(6,"Ilo\u015b\u0107 s\u0142\xf3w"),r.qZA(),r.TgZ(7,"th"),r._uU(8,"Wycinek"),r.qZA()()(),r.TgZ(9,"tbody"),r.YNc(10,Oe,7,3,"tr",2),r.qZA()()),2&n){const e=r.oxw();r.xp6(10),r.Q6J("ngForOf",e.results)}}let _e=(()=>{class n{constructor(){this.results=[],this.language=""}openWiki(e){window.open("https://"+this.language+".wikipedia.org?curid="+e,"_blank"),console.log("OPEN")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-display"]],inputs:{results:"results",language:"language"},decls:1,vars:1,consts:[["class","ui orange celled table",4,"ngIf"],[1,"ui","orange","celled","table"],["class","row",3,"click",4,"ngFor","ngForOf"],[1,"row",3,"click"],[3,"innerHTML"]],template:function(e,o){1&e&&r.YNc(0,xe,11,1,"table",0),2&e&&r.Q6J("ngIf",o.results.length)},dependencies:[b.sg,b.O5],styles:[".row[_ngcontent-%COMP%]:hover{background-color:#e9f4ff;cursor:pointer}.searchmatch[_ngcontent-%COMP%]{font-weight:700}"]}),n})();const Fe=[{path:"",component:(()=>{class n{constructor(e){this.wiki=e,this.results=[],this.language="pl",this.term=""}setTerm(e){this.term=e,this.askWiki()}setLanguage(e){this.language=e,this.askWiki()}askWiki(){this.term&&(this.wiki.search(this.term,this.language).subscribe(e=>{this.results=e.query.search}),console.log(this.results))}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(Q))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-wiki-home"]],decls:8,vars:2,consts:[[1,"ui","container","segment"],[3,"submitedEvent","languageEvent"],[1,"ui","message","success"],[3,"results","language"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0)(1,"app-title"),r._uU(2,"Szukaj w Wikipedii"),r.qZA(),r._uU(3," Wystarczy wybra\u0107 inny j\u0119zyk z menu, \u017ceby wyniki dla wpisanego has\u0142a si\u0119 od\u015bwie\u017cy\u0142y.\n"),r.TgZ(4,"app-search",1),r.NdJ("submitedEvent",function(i){return o.setTerm(i)})("languageEvent",function(i){return o.setLanguage(i)}),r.qZA(),r.TgZ(5,"div",2),r._uU(6,"Powy\u017cszy komponent emituje 2 zdarzenia przy zmianie j\u0119zyka i naci\u015bni\u0119ciu Wy\u015blij, kt\xf3re uruchamiaj\u0105 dwie metody w g\u0142\xf3wnym komponencie tej strony. Ka\u017cda z nich mo\u017ce uruchomi\u0107 z kolei serwis, uzyskuj\u0105cy dane z API Wikipedii."),r.qZA(),r._UZ(7,"app-display",3),r.qZA()),2&e&&(r.xp6(7),r.Q6J("results",o.results)("language",o.language))},dependencies:[Ne.r,Me,_e]}),n})()}];let Ie=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[J.Bz.forChild(Fe),J.Bz]}),n})(),Ae=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[Q],imports:[b.ez,Ie,te.m,Se]}),n})()}}]);