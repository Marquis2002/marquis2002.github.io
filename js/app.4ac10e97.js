(function(){var n={8970:function(n,o,t){"use strict";var e=t(3862),r=t(3396);function i(n,o,t,e,i,c){const u=(0,r.up)("demo-component");return(0,r.wg)(),(0,r.j4)(u)}const c={class:"container"},u={class:"row"},a={class:"col-md-12 my-3"},s=(0,r._)("h2",null,"Room",-1),f={class:"row"},l={class:"col-md-12"},d={class:""},p={class:"row"},m={class:"col-md-12 my-3"},v={class:"row"},h={class:"col-md-12"},b=(0,r._)("h2",null,"Captured Image",-1),g={class:"figure"},w=["src"];function _(n,o,t,i,_,y){const S=(0,r.up)("vue-webrtc");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[(0,r._)("div",a,[s,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>_.roomId=n)},null,512),[[e.nr,_.roomId]])])]),(0,r._)("div",f,[(0,r._)("div",l,[(0,r._)("div",d,[(0,r.Wm)(S,{ref:"webrtc",width:"100%",roomId:_.roomId,enableLogs:!0,onJoinedRoom:y.logEvent,onLeftRoom:y.logEvent,onOpenedRoom:y.logEvent,onShareStarted:y.logEvent,onShareStopped:y.logEvent,onError:y.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"])]),(0,r._)("div",p,[(0,r._)("div",m,[(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=(...n)=>y.onJoin&&y.onJoin(...n))},"Join"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=(...n)=>y.onLeave&&y.onLeave(...n))},"Leave"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=(...n)=>y.onCapture&&y.onCapture(...n))},"Capture Photo"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[4]||(o[4]=(...n)=>y.onShareScreen&&y.onShareScreen(...n))},"Share Screen")])])])]),(0,r._)("div",v,[(0,r._)("div",h,[b,(0,r._)("figure",g,[(0,r._)("img",{src:_.img,class:"img-responsive"},null,8,w)])])])])}var y=t(7387),S=t(5941),E={name:"demo-component",components:{"vue-webrtc":y.se},data(){return{img:null,roomId:"public-room-v3"}},mounted:function(){},computed:{},watch:{},methods:{onCapture(){this.img=this.$refs.webrtc.capture()},onJoin(){this.$refs.webrtc.join()},onLeave(){this.$refs.webrtc.leave()},onShareScreen(){this.img=this.$refs.webrtc.shareScreen()},onError(n,o){S.log("On Error Event",n,o)},logEvent(n){S.log("Event : ",n)}}},O=t(89);const C=(0,O.Z)(E,[["render",_]]);var k=C,j={name:"App",components:{"demo-component":k}};const I=(0,O.Z)(j,[["render",i]]);var L=I;(0,e.ri)(L).mount("#app")},950:function(){},6601:function(){},9214:function(){},6419:function(){},6353:function(){},8623:function(){},7748:function(){},5568:function(){},9386:function(){},1616:function(){},6619:function(){},8325:function(){},7108:function(){},8929:function(){},2439:function(){},9862:function(){},964:function(){},1408:function(){},3646:function(){},3021:function(){},4973:function(){},282:function(){},2026:function(){}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){var n=[];t.O=function(o,e,r,i){if(!e){var c=1/0;for(f=0;f<n.length;f++){e=n[f][0],r=n[f][1],i=n[f][2];for(var u=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(n){return t.O[n](e[a])}))?e.splice(a--,1):(u=!1,i<c&&(c=i));if(u){n.splice(f--,1);var s=r();void 0!==s&&(o=s)}}return o}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[e,r,i]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,i,c=e[0],u=e[1],a=e[2],s=0;if(c.some((function(o){return 0!==n[o]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var f=a(t)}for(o&&o(e);s<c.length;s++)i=c[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(f)},e=self["webpackChunksample"]=self["webpackChunksample"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(8970)}));e=t.O(e)})();
//# sourceMappingURL=app.4ac10e97.js.map