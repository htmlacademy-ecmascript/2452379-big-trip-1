(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);i&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",p="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=f;var g=function(e){return e instanceof D},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},M=m;M.l=$,M.i=g,M.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=f.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return M},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,u=!!M.u(t)||t,p=M.p(e),v=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},h=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case c:return u?v(1,0):v(31,11);case l:return u?v(1,_):v(0,_+1);case o:var b=this.$locale().weekStart||0,g=(f<b?f+7:f)-b;return v(u?m-g:m+(6-g),_);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case s:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,u=M.p(e),p="set"+(this.$u?"UTC":""),v=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[c]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[u],h=u===a?this.$D+(t-this.$W):t;if(u===l||u===c){var f=this.clone().set(d,1);f.$d[v](h),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else v&&this.$d[v](h);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[M.p(e)]()},_.add=function(n,u){var d,p=this;n=Number(n);var v=M.p(u),h=function(e){var t=w(p);return M.w(t.date(t.date()+Math.round(e*n)),p)};if(v===l)return this.set(l,this.$M+n);if(v===c)return this.set(c,this.$y+n);if(v===a)return h(1);if(v===o)return h(7);var f=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[v]||1,_=this.$d.getTime()+n*f;return M.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return M.s(r%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(e,t){return t||f[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,p){var v,h=M.p(d),f=w(n),_=(f.utcOffset()-this.utcOffset())*e,m=this-f,y=M.m(this,f);return y=(v={},v[c]=y/12,v[l]=y,v[u]=y/3,v[o]=(m-_)/6048e5,v[a]=(m-_)/864e5,v[r]=m/t,v[s]=m/e,v[i]=m/1e3,v)[h]||m,p?y:M.a(y)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return M.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},f}(),E=D.prototype;return w.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},p=function(e,t,n){return new y(e,n,t.$l)},v=function(e){return t.p(e)+"s"},h=function(e){return e<0},f=function(e){return h(e)?Math.ceil(e):Math.floor(e)},_=function(e){return Math.abs(e)},m=function(e,t){return e?h(e)?{negative:!0,format:""+_(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function h(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*c[v(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[v(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(u);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var _=h.prototype;return _.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},_.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=f(e/o),e%=o,this.$d.months=f(e/l),e%=l,this.$d.days=f(e/r),e%=r,this.$d.hours=f(e/s),e%=s,this.$d.minutes=f(e/i),e%=i,this.$d.seconds=f(e/n),e%=n,this.$d.milliseconds=e},_.toISOString=function(){var e=m(this.$d.years,"Y"),t=m(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=m(n,"D"),s=m(this.$d.hours,"H"),r=m(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=m(a,"S"),l=e.negative||t.negative||i.negative||s.negative||r.negative||o.negative,u=s.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+i.format+u+s.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},_.toJSON=function(){return this.toISOString()},_.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(i[e])}))},_.as=function(e){return this.$ms/c[v(e)]},_.get=function(e){var t=this.$ms,n=v(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?f(t/c[n]):this.$d[n],0===t?0:t},_.add=function(e,t,n){var i;return i=t?e*c[v(t)]:d(e)?e.$ms:p(e,this).$ms,p(this.$ms+i*(n?-1:1),this)},_.subtract=function(e,t){return this.add(e,t,!0)},_.locale=function(e){var t=this.clone();return t.$l=e,t},_.clone=function(){return p(this.$ms,this)},_.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},h}();return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return p(e,{$l:n},t)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),a.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],u=i.base?l[0]+i.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var p=n(d),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(v);else{var h=s(v,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),u=0;u<r.length;u++){var c=n(r[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=(e,t)=>{const n=Math.ceil(Math.min(e,t)),i=Math.floor(Math.max(e,t));return Math.floor(Math.random()*(i-n+1)+n)},t=(t,n=0,i=t.length-1)=>t[e(n,i)],i=(t,n=-1)=>{for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.slice(0,-1===n?e(0,t.length-1):n)},s=e=>t=>{t.preventDefault(),e()},r=(e,t)=>e.map((e=>e.id===r.id?t:e)),a="это самый крутой рыбный текст про город название которого написано выше в этом тексте отсутсвует орфография иаая-либо нормальная пнкктуация привет меня зовут Ректанг форм дивизион я с твоим тортом вчера",o={Montenegro:a.substring(e(1,100),e(100,200)),AVAVA:a.substring(e(1,100),e(100,200)),MAGNITAGORSK:a.substring(e(1,100),e(100,200)),BAKU:a.substring(e(1,100),e(100,200))},l=()=>{const n=t(Object.keys(o)),i=o[n],s=crypto.randomUUID,r=Array.from({length:e(0,4)},(()=>({src:`http://loremflickr.com/300/200?random=${e(1,100)}`,description:`${n}`})));return{id:s,name:n,description:i,pictures:r}};class u{destinations=Array.from({length:3},l);getDestinations(){return this.destinations}}const c=[{type:"Taxi",offers:[{id:crypto.randomUUID,title:"Огромное сиденье",price:20},{id:crypto.randomUUID,title:"Маленькое сиденье",price:12},{id:crypto.randomUUID,title:"Широкий водитель",price:0}]},{type:"Flight",offers:[{id:crypto.randomUUID,title:"Огромный SSL",price:20200},{id:crypto.randomUUID,title:"Мисс Кардашьян",price:12},{id:crypto.randomUUID,title:"твердое",price:1}]},{type:"Train",offers:[{id:crypto.randomUUID,title:"Гоблин-гном",price:243},{id:crypto.randomUUID,title:"мммммммм МММ",price:3}]}],d=e=>{const t=c.find((t=>t.type===e));return t?i(t.offers):[]};class p{getOffers(){return d().offers}}let v=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");const h=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],f=[{id:v(),price:1100,dateFrom:"2024-01-18T09:24:38",dateTo:"2024-01-18T19:54:38",destination:l(),isFavorite:!0},{id:v(),price:4150,dateFrom:"2024-01-16T04:24:38",dateTo:"2024-01-16T07:21:38",destination:l(),isFavorite:!1},{id:v(),price:10,dateFrom:"2024-01-20T08:20:38",dateTo:"2024-01-21T01:30:38",destination:l(),isFavorite:!1},{id:v(),price:110201220,dateFrom:"2024-01-18T09:24:38",dateTo:"2024-01-18T09:25:38",destination:l(),isFavorite:!0},{id:v(),price:41220,dateFrom:"2024-01-18T09:24:38",dateTo:"2024-01-18T09:25:38",destination:l(),isFavorite:!1},{id:v(),price:156,dateFrom:"2024-01-18T19:24:38",dateTo:"2024-01-20T09:25:38",destination:l(),isFavorite:!1}];f.forEach((e=>{const n=t(h);e.type=n,e.offers=d(n)}));class _{#e=(e=>i(f,5))();getRoutes(){return this.#e}}function m(e,t,n="beforeend"){if(!(e instanceof H))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function y(e,t){if(!(e instanceof H&&t instanceof H))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function b(e){if(null!==e){if(!(e instanceof H))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var g=n(379),$=n.n(g),w=n(795),M=n.n(w),D=n(569),E=n.n(D),C=n(565),k=n.n(C),S=n(216),x=n.n(S),A=n(589),T=n.n(A),F=n(10),O={};O.styleTagTransform=T(),O.setAttributes=k(),O.insert=E().bind(null,"head"),O.domAPI=M(),O.insertStyleElement=x(),$()(F.Z,O),F.Z&&F.Z.locals&&F.Z.locals;const V="shake";class H{#t=null;constructor(){if(new.target===H)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(e){this.element.classList.add(V),setTimeout((()=>{this.element.classList.remove(V),e?.()}),600)}}var R=n(484),U=n.n(R),Y=n(646),I=n.n(Y);U().extend(I());const L={eventTime:"HH:mm",eventDate:"DD MMM",eventEditDatetime:"DD/MM/YY HH:mm"},P=36e5,B=(e,t)=>e?U()(e).format(L[t]):"";class j extends H{#n;constructor(e){super(),this.#n=e}get template(){return(({type:e,destination:t,dateFrom:n,dateTo:i,offers:s,price:r})=>`\n<li class="trip-events__item"><form class="event event--edit" action="#" method="post">\n<header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n\n        <div class="event__type-item">\n          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n        </div>\n\n        <div class="event__type-item">\n          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n\n  <div class="event__field-group  event__field-group--destination">\n    <label class="event__label  event__type-output" for="event-destination-1">\n      ${e}\n    </label>\n    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n    <datalist id="destination-list-1">\n      <option value="Amsterdam"></option>\n      <option value="Geneva"></option>\n      <option value="Chamonix"></option>\n    </datalist>\n  </div>\n\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${B(n,"eventEditDatetime")}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-1">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${B(i,"eventEditDatetime")}">\n  </div>\n\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n  </div>\n\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Cancel</button>\n</header>\n<section class="event__details">\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n    <div class="event__available-offers">\n      ${(e=>{let t="";return e.forEach((e=>{t+=`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage" type="checkbox" name="event-offer-luggage" checked="">\n    <label class="event__offer-label" for="event-offer-luggage">\n      <span class="event__offer-title">${e.title}</span>\n      +€&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </label>\n  </div>`})),t})(s)}\n    </div>\n  </section>\n\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${t.name} ${t.description}</p>\n    ${(e=>{if(0===e.length)return"";let t='<div class="event__photos-container"><div class="event__photos-tape">';return e.forEach((e=>{t+=`<img class="event__photo" src="${e.src}" alt="${e.description}">`})),t+="</div></div>",t})(t.pictures)}\n  </section>\n</section>\n</form></li>\n`)(this.#n)}}class N extends H{get template(){return'<ul class="trip-events__list"></ul>'}}class W extends H{#i;constructor(e){super(),this.#i=e}get template(){return(({label:e,type:t})=>`\n<div class="trip-filters__filter">\n<input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}">\n<label class="trip-filters__filter-label" for="filter-${t}">${e}</label>\n</div>`)(this.#i)}}class q extends H{#s;get template(){return'<form class="trip-filters" action="#" method="get"><button class="visually-hidden" type="submit">Accept filter</button></form>'}}class Z extends H{#r;constructor(e){super(),this.#r=e}get template(){return(({label:e,type:t})=>`\n<div class="trip-sort__item  trip-sort__item--${t}">\n  <input label="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" label="trip-sort" value="sort-${t}" checked>\n  <label class="trip-sort__btn" for="sort-${t}">${e}</label>\n</div>\n`)(this.#r)}}class z extends H{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>'}}class J extends H{constructor(){super()}get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}class K extends H{#n;constructor({route:e,onSubmitClick:t,onArrowClick:n}){super(),this.#n=e,this.element.querySelector("form").addEventListener("submit",s(t)),this.element.querySelector(".event__rollup-btn").addEventListener("click",s(n))}get template(){return(({type:e,destination:t,dateFrom:n,dateTo:i,offers:s,price:r})=>`\n<li class="trip-events__item">\n          <form class="event event--edit" action="#" method="post">\n            <header class="event__header">\n              <div class="event__type-wrapper">\n                <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                  <span class="visually-hidden">Choose event type</span>\n                  <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n                </label>\n                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                <div class="event__type-list">\n                  <fieldset class="event__type-group">\n                    <legend class="visually-hidden">Event type</legend>\n\n                    <div class="event__type-item">\n                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                    </div>\n                  </fieldset>\n                </div>\n              </div>\n\n              <div class="event__field-group  event__field-group--destination">\n                <label class="event__label  event__type-output" for="event-destination-1">\n                  ${e}\n                </label>\n                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n                <datalist id="destination-list-1">\n                  <option value="Amsterdam"></option>\n                  <option value="Geneva"></option>\n                  <option value="Chamonix"></option>\n                </datalist>\n              </div>\n\n              <div class="event__field-group  event__field-group--time">\n                <label class="visually-hidden" for="event-start-time-1">From</label>\n                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${B(n,"eventEditDatetime")}">\n                &mdash;\n                <label class="visually-hidden" for="event-end-time-1">To</label>\n                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${B(i,"eventEditDatetime")}">\n              </div>\n\n              <div class="event__field-group  event__field-group--price">\n                <label class="event__label" for="event-price-1">\n                  <span class="visually-hidden">Price</span>\n                  &euro;\n                </label>\n                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n              </div>\n\n              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n              <button class="event__reset-btn" type="reset">Delete</button>\n              <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n              </button>\n            </header>\n            <section class="event__details">\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                <div class="event__available-offers">\n                  ${(e=>{let t="";return e.forEach((e=>{t+=`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage" type="checkbox" name="event-offer-luggage" checked="">\n    <label class="event__offer-label" for="event-offer-luggage">\n      <span class="event__offer-title">${e.title}</span>\n      +€&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </label>\n  </div>`})),t})(s)}\n                </div>\n              </section>\n\n              <section class="event__section  event__section--destination">\n                <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                <p class="event__destination-description">${t.name} ${t.description}</p>\n              </section>\n            </section>\n          </form>\n        </li>\n`)(this.#n)}}class X extends H{#n;constructor({route:e,onArrowClick:t,onFavoriteClick:n}){super(),this.#n=e,this.element.querySelector(".event__rollup-btn").addEventListener("click",s(t)),this.element.querySelector(".event__favorite-btn").addEventListener("click",s(n))}get template(){return(({type:e,destination:t,dateFrom:n,dateTo:i,offers:s,price:r,isFavorite:a})=>`\n<li class="trip-events__item"><div class="event">\n<time class="event__date" datetime="${n}">${B(n,"eventDate")}</time>\n<div class="event__type">\n  <img class="event__type-icon" width="42" height="42" src="img/icons/${e}.png" alt="Event type icon">\n</div>\n<h3 class="event__title">${e} ${t.name}</h3>\n<div class="event__schedule">\n  <p class="event__time">\n    <time class="event__start-time" datetime="${n}">${B(Date.parse(n),"eventTime")}</time>\n    &mdash;\n    <time class="event__end-time" datetime="${i}">${B(Date.parse(i),"eventTime")}</time>\n  </p>\n  <p class="event__duration">${((e,t)=>{const n=U()(t).diff(U()(e));switch(!0){case n>=864e5:return U().duration(n).format("DD[D] HH[H] mm[M]");case n>=P:return U().duration(n).format("HH[H] mm[M]");case n<P:return U().duration(n).format("mm[M]")}})(n,i)}</p>\n</div>\n<p class="event__price">\n  &euro;&nbsp;<span class="event__price-value">${r}</span>\n</p>\n<h4 class="visually-hidden">Offers:</h4>\n<ul class="event__selected-offers">\n  ${(e=>{let t="";return e.forEach((e=>{t+=`<li class="event__offer">\n    <span class="event__offer-title">${e.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${e.price}</span>\n  </li>`})),t})(s)}\n</ul>\n<button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n  <span class="visually-hidden">Add to favorite</span>\n  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n  </svg>\n</button>\n<button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n</button>\n</div></li>\n`)(this.#n)}}class G{#a;#n;#o;#l;#u=!1;#c;#d;constructor({routesContainer:e,handleDataChange:t,handleEditorOpen:n}){this.#a=e,this.#c=t,this.#d=n}init(e){this.#n=e;const t=this.#o,n=this.#l;this.#o=new X({route:this.#n,onArrowClick:this.#p,onFavoriteClick:this.#v}),this.#l=new K({route:this.#n,onArrowClick:this.#h}),t&&n?(this.#a.element.contains(t.element)&&y(this.#o,t),this.#a.element.contains(n.element)&&y(this.#l,n),b(t),b(n)):m(this.#o,this.#a.element)}resetView(){this.#u&&this.#f()}#_(){y(this.#l,this.#o),document.addEventListener("keydown",this.#m),this.#d(),this.#u=!0}#f(){y(this.#o,this.#l),document.removeEventListener("keydown",this.#m),this.#u=!1}#m=((e,t=null)=>n=>{"Escape"!==n.key||t&&!t(n)||(n.preventDefault(),e())})((()=>{this.#f(this.#o,this.#l),document.removeEventListener("keydown",this.#m)}));#p=()=>{this.#_()};#h=()=>{this.#f()};#v=()=>{this.#c({...this.#n,isFavorite:!this.#n.isFavorite})}}(new class{#y;#b;#g;#e;#$;#w;#M;#D;#E;#C;#k;#S;#x;constructor(){this.#y=new _,this.#b=new p,this.#g=new u,this.#e=[...this.#y.getRoutes()],this.#$=new Map,this.#C=new q,this.#S=new z,this.#w=new N,this.#E=[new W({label:"Everything",type:"everything"}),new W({label:"Future",type:"future"}),new W({label:"Present",type:"present"}),new W({label:"Past",type:"past"})],this.#k=[new Z({label:"Day",type:"day"}),new Z({label:"Route",type:"event"}),new Z({label:"Time",type:"time"}),new Z({label:"Price",type:"price"}),new Z({label:"Offers",type:"offers"})],this.#M=new j,this.#D=new J}present(){if(m(this.#C,document.querySelector(".trip-controls__filters")),m(this.#S,document.querySelector(".trip-events")),m(this.#w,this.#S.element,"afterend"),this.#E.forEach((e=>m(e,this.#C.element))),this.#e.length){this.#k.forEach((e=>m(e,this.#S.element)));for(let e=0;e<this.#e.length;e++)this.#A(this.#e[e])}else m(this.#D,this.#w.element)}#A(e){const t=new G({routesContainer:this.#w,handleDataChange:this.#T,handleEditorOpen:this.#F});t.init(e),this.#$.set(e.id,t)}#T=e=>{this.#e=r(this.#e,e),this.#$.get(e.id).init(e)};#F=()=>{this.#$.forEach((e=>e.resetView()))}}).present()})()})();
//# sourceMappingURL=bundle.eea6af2c34c0f47a2c3d.js.map