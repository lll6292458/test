(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cc78a86a"],{"28c8":function(t,e,r){t.exports=r.p+"img/card.7c787cc9.png"},8101:function(t,e,r){"use strict";r.r(e);var n=(r("b0c0"),r("d3b7"),r("466d"),r("1276"),r("96cf"),r("bc3a")),a=r.n(n),o={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],imgUrlBase64:{},url:"",card:"",name:"",fullscreenLoading:!1,phone:"",merchantId:"",token:"",tokenId:"",cardhead:{}}},watch:{card:function(t,e){this.card.length>=13&&this.card.length<=19&&this.cardName()}},created:function(){this.version=this.$stact.state.version,this.agentNo=this.$stact.state.agentNo,this.merchantNo=JSON.parse(this.$stact.state.token)[0].merchantNo,this.merchantId=JSON.parse(this.$stact.state.token)[0].id},mounted:function(){this.$inputLen.inputJs()},methods:{handleChange:function(t,e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length>0)){t.next=5;break}return this.fileList=e,this.url=e[e.length-1].url,t.next=5,regeneratorRuntime.awrap(this.chageBase("10K",e[e.length-1]));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),null,this)},handleChangeMax:function(t,e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:vm.$message({message:"上传图片次数过多，请勿重复",center:!0,offset:30,duration:2500,type:"success"});case 1:case"end":return t.stop()}}))},none:function(){},chageBase:function(t,e){var r=this,n=e.raw,o=new FileReader;this.imgUrlBase64=o.readAsDataURL(n),o.onload=function(){var e={imageData:o.result.split(",")[1],imageType:t,merchantNo:r.merchantNo};r.fullscreenLoading=!0;a.a.post("http://yihuan.llyzf.cn/lly-posp-proxy/app/imageUpload.app",e,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(t){r.fullscreenLoading=!1,r.$message({message:t.data.msg,center:!0,offset:30,duration:2500,type:"success"})})).catch((function(t){r.fullscreenLoading=!1}))}},cardName:function(){var t=this,e={0:"0700",3:"690013",15:t.card,42:t.merchantNo,59:t.version},r=t.$utils.queryParams(t.$mdata.mdGet(e));t.$http.get("request.app".concat(r)).then((function(e){"00"===e.data[39]&&(t.cardhead=JSON.parse(e.data[16]))})).catch((function(t){}))},uploadImg:function(){var t=this;if(this.fileList.length<1)this.$message({message:"必须上传一张储蓄卡",center:!0,offset:30,duration:2e3,type:"warning"});else if(this.card.match(/^[ ]*$/))this.$message({message:"您的储蓄卡号必须填写",center:!0,offset:30,duration:2e3,type:"warning"});else if(this.phone.match(/^[ ]*$/))this.$message({message:"手机号码必须填写",center:!0,offset:30,duration:2e3,type:"warning"});else if(/^1[1-9]\d{9}$/.test(this.phone)){var e={0:"0700",1:t.phone,2:t.merchantId,3:"190938",5:t.$route.query.name,6:t.$route.query.card,7:t.card,43:t.cardhead.bankCode,59:t.version};t.fullscreenLoading=!0;var r=t.$utils.queryParams(t.$mdata.mdGet(e));t.$http.get("request.app".concat(r)).then((function(e){t.fullscreenLoading=!1,"00"===e.data[39]?(t.$message({message:"实名成功",center:!0,offset:30,duration:2500,type:"success"}),setTimeout((function(){t.$router.push({name:"my"})}),1500)):t.$message({message:e.data[39],center:!0,offset:30,duration:2500,type:"success"})})).catch((function(e){t.fullscreenLoading=!1}))}else this.$message({message:"手机号码有误，请重填",center:!0,offset:30,duration:2e3,type:"warning"})}}},i=r("2877"),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"verifiedImage"},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"#","show-file-list":!1,multiple:!0,accept:"image/*","on-change":t.handleChange,"on-exceed":t.handleChangeMax,"http-request":t.none,"file-list":t.fileList,"auto-upload":!0,limit:5,"list-type":"picture-card"}},[n("img",{staticClass:"iDcard",attrs:{src:t.url?t.url:r("28c8")}})])],1),t._m(0),n("div",{staticClass:"realTitle"},[t._v("请输入您的储蓄卡号")]),n("div",{staticClass:"verifiedContent"},[n("div",{staticClass:"allFlex setInput"},[n("div",{staticClass:"setName"},[t._v("储蓄卡")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.card,expression:"card"}],staticClass:"setEntryLong",attrs:{type:"text",oninput:"this.value=this.value.replace(/[\\u4e00-\\u9fa5]/ig,'')",onafterpaste:"this.value=this.value.replace(/[\\u4e00-\\u9fa5]/ig,'')",placeholder:"请输入您的储蓄卡号"},domProps:{value:t.card},on:{input:function(e){e.target.composing||(t.card=e.target.value)}}})]),n("div",{staticClass:"allFlex setInput"},[n("div",{staticClass:"setName"},[t._v("手机号码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"setEntryLong",attrs:{type:"text",placeholder:"请输入您的手机号码",oninput:"this.value=this.value.replace(/[\\u4e00-\\u9fa5]/ig,'')",onafterpaste:"this.value=this.value.replace(/[\\u4e00-\\u9fa5]/ig,'')"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"transferConfirm",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.7)"},on:{click:function(e){return t.uploadImg()}}},[t._v(" 下一步 ")]),n("div",{staticClass:"bottomLong"})])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"verifiedName"},[t._v(" 点击上传 "),r("span",{staticClass:"blueColor"},[t._v("储蓄卡")])])}],!1,null,null,null);e.default=s.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new _(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?f:"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",h="executing",f="completed",p={};function d(){}function g(){}function m(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(C([])));w&&w!==r&&n.call(w,o)&&(v=w);var L=m.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t){function e(r,a,o,i){var s=u(t[r],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,i)}))}i(s.arg)}var r;this._invoke=function(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}}function $(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return g.prototype=L.constructor=m,m.constructor=g,m[s]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,a){var o=new b(c(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(L),L[s]="Generator",L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-cc78a86a.f35556e5.js.map