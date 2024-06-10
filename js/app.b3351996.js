(function(){var n={4475:function(n,o,t){"use strict";var e=t(3862),r=t(3396);function i(n,o,t,e,i,c){const u=(0,r.up)("demo-component");return(0,r.wg)(),(0,r.j4)(u)}const c={class:"container"},u={class:"row"},a={class:"col-md-12 my-3"},s=(0,r._)("h2",null,"唠唠随机视频聊天",-1),l={class:"row"},f={class:"col-md-12"},d={class:"col-md-12 vh-100"},m={class:"row"},h={class:"col-md-12 my-3"},p={key:0},v={key:1},b={class:"row"},g={class:"col-md-12"},w=(0,r._)("h2",null,"Captured Image",-1),y={class:"figure"},_=["src"];function k(n,o,t,i,k,S){const E=(0,r.up)("vue-webrtc");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[(0,r._)("div",a,[s,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>k.roomId=n)},null,512),[[e.nr,k.roomId]])])]),(0,r._)("div",l,[(0,r._)("div",f,[(0,r._)("div",d,[(0,r.Wm)(E,{ref:"webrtc","camera-height":"480",width:"200%",roomId:k.roomId,enableLogs:!0,onJoinedRoom:S.logEvent,onLeftRoom:S.logEvent,onOpenedRoom:S.logEvent,onShareStarted:S.logEvent,onShareStopped:S.logEvent,onError:S.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"])]),(0,r._)("div",m,[(0,r._)("div",h,[(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=(...n)=>S.onJoin&&S.onJoin(...n))},"加入房间"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=(...n)=>S.onLeave&&S.onLeave(...n))},"离开房间"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=(...n)=>S.onCapture&&S.onCapture(...n))},"捕捉瞬间"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[4]||(o[4]=(...n)=>S.onShareScreen&&S.onShareScreen(...n))},"屏幕共享"),(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=(...n)=>S.requestMatch&&S.requestMatch(...n))},"进行随机匹配"),k.matching?((0,r.wg)(),(0,r.iD)("div",p,"正在匹配中... ")):k.roomId?((0,r.wg)(),(0,r.iD)("div",v,"匹配成功")):(0,r.kq)("",!0)])])])]),(0,r._)("div",b,[(0,r._)("div",g,[w,(0,r._)("figure",y,[(0,r._)("img",{src:k.img,class:"img-responsive"},null,8,_)])])])])}var S=t(7387),E=t(5941),O={name:"demo-component",components:{"vue-webrtc":S.se},data(){return{matching:!1,img:null,roomId:"public-room-v3",socket:null}},mounted:function(){this.initSocket(),this.matching=!0},computed:{},watch:{},methods:{initSocket(){this.socket.on("connect",(()=>{E.log("Connected to the server")})),this.socket.on("match-found",(n=>{E.log("Match found, room ID:",n.roomId),this.roomId=n.roomId,this.matching=!1,this.onJoin()}))},requestMatch(){this.socket.emit("match"),this.matching=!0},onCapture(){this.img=this.$refs.webrtc.capture()},onJoin(){this.$refs.webrtc.join()},onLeave(){this.$refs.webrtc.leave()},onShareScreen(){this.img=this.$refs.webrtc.shareScreen()},onError(n,o){E.log("On Error Event",n,o)},logEvent(n){E.log("Event : ",n)}}},C=t(89);const I=(0,C.Z)(O,[["render",k]]);var j=I,J={name:"App",components:{"demo-component":j}};const L=(0,C.Z)(J,[["render",i]]);var R=L;(0,e.ri)(R).mount("#app")},950:function(){},6601:function(){},9214:function(){},6419:function(){},6353:function(){},8623:function(){},7748:function(){},5568:function(){},9386:function(){},1616:function(){},6619:function(){},8325:function(){},7108:function(){},8929:function(){},2439:function(){},9862:function(){},964:function(){},1408:function(){},3646:function(){},3021:function(){},4973:function(){},282:function(){},2026:function(){}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){var n=[];t.O=function(o,e,r,i){if(!e){var c=1/0;for(l=0;l<n.length;l++){e=n[l][0],r=n[l][1],i=n[l][2];for(var u=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(n){return t.O[n](e[a])}))?e.splice(a--,1):(u=!1,i<c&&(c=i));if(u){n.splice(l--,1);var s=r();void 0!==s&&(o=s)}}return o}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,r,i]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,i,c=e[0],u=e[1],a=e[2],s=0;if(c.some((function(o){return 0!==n[o]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(o&&o(e);s<c.length;s++)i=c[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},e=self["webpackChunksample"]=self["webpackChunksample"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(4475)}));e=t.O(e)})();
//# sourceMappingURL=app.b3351996.js.map