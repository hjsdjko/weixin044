(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinleixing-list"],{"0a14":function(t,e,n){"use strict";var i={"mescroll-uni":n("f05e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[n("v-uni-view",{style:{minHeight:"100rpx",width:"100%",position:"relative",alignItems:"center",justifyContent:"space-between",display:"flex"}},[n("v-uni-view",{style:{backgroundColor:"#f5f5f5",margin:"0 30rpx 0 30rpx",color:"#333333",alignItems:"center",borderRadius:"0px",flex:"1",display:"flex",lineHeight:"64rpx",fontSize:"24rpx",height:"64rpx"}},[n("v-uni-text",{staticClass:"iconfont icon-sousuo1",style:{margin:"0 16rpx 0 16rpx"}}),n("v-uni-input",{style:{background:"transparent",height:"100%"},attrs:{type:"text",placeholder:"类型"},model:{value:t.searchForm.leixing,callback:function(e){t.$set(t.searchForm,"leixing",e)},expression:"searchForm.leixing"}})],1),n("v-uni-button",{style:{border:"0px",padding:"0 40rpx 0 40rpx",margin:"0 20rpx 0 0px",borderRadius:"0px",background:"#f0f0f0",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1),n("v-uni-view",{style:{width:"100%",flexWrap:"wrap",background:"#ffffff",justifyContent:"space-between",display:"flex",height:"auto"}},[n("v-uni-view",{staticClass:"uni-product-list",style:{padding:"24rpx 24rpx 24rpx 24rpx",margin:"40rpx 0 0 0",alignItems:"flex-start",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-product",style:{boxShadow:"0 6rpx 12rpx #eeeeee",margin:"0 0 40rpx 0",backgroundColor:"#ffffff",borderRadius:"8rpx",flexWrap:"wrap",textAlign:"center",display:"flex",width:"48%",justifyContent:"center",height:"auto"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onDetailTap(e)}}},[n("v-uni-view",{style:{padding:"0",margin:"8rpx 0 0 0",display:"flex",width:"100%",justifyContent:"space-between",height:"auto",order:"3"}},[t.userid&&t.isAuth("shangpinleixing","修改")||!t.userid&&t.isAuthFront("shangpinleixing","修改")?n("v-uni-view",{style:{border:"0px solid #dcf8f5",padding:"0px 20rpx 20rpx 20rpx",borderRadius:"60rpx",display:"flex"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.onUpdateTap(e.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-xiugai2",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#1D5DCA",display:"inline-block"}}),n("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#1D5DCA",display:"inline-block"}},[t._v("修改")])],1):t._e(),t.userid&&t.isAuth("shangpinleixing","删除")||!t.userid&&t.isAuthFront("shangpinleixing","删除")?n("v-uni-view",{style:{border:"0px solid #f9dede",padding:"0px 20rpx 20rpx 20rpx",borderRadius:"60rpx",display:"flex"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.onDeleteTap(e.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu4",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}}),n("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}},[t._v("删除")])],1):t._e()],1)],1)})),1)],1)],1),t.userid&&t.isAuth("shangpinleixing","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 2rpx 12rpx #cccccc",color:"#333333",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#75ebde",width:"80rpx",lineHeight:"80rpx",fontSize:"28rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddTap()}}},[t._v("新增")]):t._e(),!t.userid&&t.isAuthFront("shangpinleixing","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 2rpx 12rpx #cccccc",color:"#333333",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#75ebde",width:"80rpx",lineHeight:"80rpx",fontSize:"28rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddTap()}}},[t._v("新增")]):t._e()],1)],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"2b08":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6"),n("55dd"),n("96cf");var r=i(n("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",screenBoxShow:!1}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.userid?this.userid=e.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{priceChange:function(t){return Number(t).toFixed(2)},preHttp:function(t){return t&&"http"==t.substr(0,4)},queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.leixing=""},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var n,i,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={page:e.num,limit:e.size},this.searchForm.leixing&&(n["leixing"]="%"+this.searchForm.leixing+"%"),i={},!this.userid){t.next=9;break}return t.next=6,this.$api.page("shangpinleixing",n);case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,this.$api.list("shangpinleixing",n);case 11:i=t.sent;case 12:for(1==e.num&&(this.list=[]),this.list=this.list.concat(i.data.list),r=Math.ceil(this.list.length/6),a=[],s=0;s<r;s++)a[s]=this.list.slice(6*s,6*(s+1));this.lists=a,0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 20:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onUpdateTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(t){var e=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(i){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!i.confirm){n.next=5;break}return n.next=3,e.$api.del("shangpinleixing",JSON.stringify([t]));case 3:e.hasNext=!0,e.mescroll.resetUpScroll();case 5:case"end":return n.stop()}}),n)})));function i(t){return n.apply(this,arguments)}return i}()})},search:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,n,i,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.leixing&&(e["leixing"]="%"+this.searchForm.leixing+"%"),n={},!this.userid){t.next=10;break}return t.next=7,this.$api.page("shangpinleixing",e);case 7:n=t.sent,t.next=13;break;case 10:return t.next=12,this.$api.list("shangpinleixing",e);case 12:n=t.sent;case 13:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),i=Math.ceil(this.list.length/6),r=[],a=0;a<i;a++)r[a]=this.list.slice(6*a,6*(a+1));this.lists=r,0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext),this.screenBoxShow=!1;case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=a},"67af":function(t,e,n){var i=n("db0c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7cd2b90c",i,!0,{sourceMap:!1,shadowMode:!1})},"79bc":function(t,e,n){"use strict";n.r(e);var i=n("0a14"),r=n("7adb");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("d5b2");var s,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"4b38b705",null,!1,i["a"],s);e["default"]=c.exports},"7adb":function(t,e,n){"use strict";n.r(e);var i=n("2b08"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},d5b2:function(t,e,n){"use strict";var i=n("67af"),r=n.n(i);r.a},db0c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4b38b705]{min-height:calc(100vh - 44px);box-sizing:border-box}.category-one .tab[data-v-4b38b705]{cursor:pointer;padding:0 %?20?% 0 %?20?%;color:#333;background:#fff;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%;height:%?80?%}.category-one .tab.active[data-v-4b38b705]{cursor:pointer;padding:0 %?20?% 0 %?20?%;color:#fff;background:#1d5dca;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%}.category-two .tab[data-v-4b38b705]{cursor:pointer;padding:0 0 0 0;margin:0 0 %?24?%;color:#333;background:url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat 100%,rgba(6,152,136,.19);display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center;height:%?80?%}.category-two .tab.active[data-v-4b38b705]{cursor:pointer;padding:0 0 0 0;margin:0 0 %?24?%;color:#fff;background:url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat 100%,#069888;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.category-three .tab[data-v-4b38b705]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#333;background:rgba(6,152,136,.19);display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center;height:%?80?%}.category-three .tab.active[data-v-4b38b705]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#fff;background:#069888;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.screenBoxBG[data-v-4b38b705]{position:fixed;width:100%;height:100%;z-index:665;top:0;left:0;background:rgba(0,0,0,.3)}.screenBox[data-v-4b38b705]{width:80%;position:fixed;height:100%;right:0;top:0;z-index:666;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;overflow-y:scroll}.screenBox .screenTab[data-v-4b38b705]{border-radius:%?40?%;margin:%?10?% 0 %?10?% 0;color:#666;background:#fff;width:calc(100% / 3 - %?24?%);line-height:%?72?%;text-align:center}.screenBox .screenTabActive[data-v-4b38b705]{border-radius:%?40?%;margin:%?10?% 0 %?10?% 0;color:#333;background:#75ebde;width:calc(100% / 3 - %?20?%);line-height:%?72?%;text-align:center}.screenBoxActive[data-v-4b38b705]{-webkit-transform:translateZ(0);transform:translateZ(0)}',""]),t.exports=e}}]);