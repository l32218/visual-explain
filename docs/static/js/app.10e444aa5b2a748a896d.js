webpackJsonp([1],{"1z8E":function(t,e,n){t.exports=n.p+"static/img/github-viz.05ed285.png"},"5qOL":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={name:"App",data:function(){return{sourceCodeLink:"https://github.com/ssthouse/visual-explain",title:"Visual Explain"}},methods:{toMainPage:function(){this.$router.push("/")}},mounted:function(){window.$d3=this.$d3}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("top-bar",{attrs:{sourceCodeLink:this.sourceCodeLink,title:this.title},on:{"to-main-page":this.toMainPage}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")(i,o,!1,function(t){n("Pfar")},null,null).exports,s=n("/ocq"),l=n("Zrlr"),c=n.n(l),u=n("wxAW"),d=n.n(u),h=function(){function t(e,n){c()(this,t),this.name=e,this._children=n,this.visible=!1,this.key=1e3*Math.random()}return d()(t,[{key:"addChild",value:function(t){this._children||(this._children=[]),this._children.push(t)}},{key:"filterChildren",value:function(){this._children&&(this.children=this._children.filter(function(t){return t.visible}),this.children&&this.children.forEach(function(t){return t.filterChildren()}))}},{key:"hide",value:function(t){this.name!==t?this._children&&this._children.forEach(function(e){return e.hide(t)}):this.visible=!1}},{key:"show",value:function(t){this.name!==t?this._children&&this._children.forEach(function(e){return e.show(t)}):this.visible=!0}}]),t}(),p=function(){function t(e){c()(this,t),this.rootDomNode=e}return d()(t,[{key:"restore",value:function(){this.rootDomNode.restore()}},{key:"hide",value:function(t){this.rootDomNode.hide(t)}},{key:"show",value:function(t){this.rootDomNode.show(t)}},{key:"getData",value:function(){return!1===this.rootDomNode.visible?null:(this.rootDomNode.filterChildren(),this.rootDomNode)}}]),t}(),f=new h("html",null),m=new h("body",null);f.addChild(m);var v=new h("head",null);f.addChild(v);var g=new h("title",null),y=new h("style",null);v.addChild(g),v.addChild(y);var k=new h("h1",null),x=new h("ul",null);m.addChild(k),m.addChild(x);var w=new h("li",null);x.addChild(w);var S=new p(f),C=function(){function t(e,n,r){c()(this,t),this.contentStr=e,this.stepArray=n,this.domTreeData=r,this.initData()}return d()(t,[{key:"initData",value:function(){this.rows=this.contentStr.split("\n"),this.curStep=-1}},{key:"restore",value:function(){this.curStep=-1,this.hideAll()}},{key:"hideAll",value:function(){var t=this;this.stepArray.forEach(function(e){t.domTreeData.hide(e.nodeName)})}},{key:"stepForward",value:function(){this.curStep>=this.stepArray.length-1||(this.curStep+=1,this.domTreeData.show(this.stepArray[this.curStep].nodeName))}},{key:"stepBackword",value:function(){this.curStep<=-1||(this.curStep-=1,this.domTreeData.hide(this.stepArray[this.curStep+1].nodeName))}},{key:"isLastStep",value:function(){return this.curStep>=this.stepArray.length-1}},{key:"getCurContent",value:function(){this.getCurRows().join("\n")}},{key:"getCurRows",value:function(){for(var t=0,e=0;e<=this.curStep;e++)t+=this.stepArray[e].count;return this.getAllRows().slice(0,t)}},{key:"getCurDomTreeData",value:function(){return this.domTreeData.getData()}},{key:"getAllRows",value:function(){return this.rows}}]),t}(),A=new C("<!DOCTYPE html>\n<html>\n    <head>\n      <title>Web app lifecycle</title>\n      <style>\n          #list { color: green;}\n          #second { color: red;}\n      </style>\n    </head>\n    <body>\n        <h1>head one</h1>\n        <ul id=\"list\"></ul>\n        <script>\n            var liElement = document.createElement(\"li\");\n            liElement.textContent = 'I am a li';\n            document.getElementById('list').appendChild(liElement);\n        <\/script>\n    </body>\n</html>",[{count:2,nodeName:"html"},{count:1,nodeName:"head"},{count:1,nodeName:"title"},{count:4,nodeName:"style"},{count:1,nodeName:""},{count:1,nodeName:"body"},{count:1,nodeName:"h1"},{count:1,nodeName:"ul"},{count:5,nodeName:"li"},{count:2,nodeName:""}],S),b={name:"Root",data:function(){return{yScale:null,codeView:null,domTree:null,codeSnippet:A,nodeRadius:30,nodeWidth:80,nodeHeight:140}},mounted:function(){this.domTree=this.$d3.select("#domTree"),this.codeView=this.$d3.select("#codeView"),this.linkContainer=this.$d3.select("#linkContainer"),this.circleContainer=this.$d3.select("#circleContainer"),this.textContainer=this.$d3.select("#textContainer"),window.code=this},methods:{previousStep:function(){this.codeSnippet.stepBackword(),this.updateView(this.codeSnippet.getCurRows()),this.updateDomTree()},nextStep:function(){this.codeSnippet.stepForward(),this.updateView(this.codeSnippet.getCurRows()),this.updateDomTree()},autoPlay:function(){this.clearDomTree(),this.codeSnippet.restore(),this.autoNextStep()},clearDomTree:function(){this.codeView.selectAll("*").remove(),this.linkContainer.selectAll("*").remove(),this.circleContainer.selectAll("*").remove(),this.textContainer.selectAll("*").remove()},autoNextStep:function(){var t=this;this.codeSnippet.isLastStep()||setTimeout(function(){t.nextStep(),t.autoNextStep()},1e3)},updateView:function(t){var e=this.codeView.selectAll("text").data(t);e.style("stroke","black"),e.enter().append("text").text(function(t){return t}).style("stroke","blue").style("font-family","monospace").style("stroke-width",.5).attr("x",-100).style("opacity",0).attr("xml:space","preserve").transition().attr("font-size","20px").attr("x","30").attr("y",function(t,e){return 30*(e+1)}).style("opacity",1).style("stroke","black").style("stroke-width",.5),e.exit().transition().style("stroke","red").attr("x","-100px").attr("y",0).style("opacity",0).remove()},updateDomTree:function(){if(this.codeSnippet.getCurDomTreeData()){var t=this.$d3.hierarchy(this.codeSnippet.getCurDomTreeData()),e=this.$d3.tree().nodeSize([this.nodeWidth,this.nodeHeight])(t);this.drawDomTree(e.descendants(),e.links())}else this.drawDomTree([],[])},drawDomTree:function(t,e){var n=this.domTree.style("width"),r=parseInt(n.substring(0,n.length-2))/2,i=this.linkContainer.selectAll(".link").data(e),o=this;i.enter().append("path").attr("class","link").attr("fill","transparent").attr("stroke","black").merge(i).attr("d",function(t,e){return o.$d3.linkVertical().x(function(t){return t.x+r}).y(function(t){return t.y+100}).source(function(t){return{x:t.source.x,y:t.source.y}}).target(function(){return{x:t.target.x,y:t.target.y}})(t)}),i.exit().remove();var a=this.circleContainer.selectAll("circle").data(t,function(t){return t.data.key});a.enter().append("circle").attr("class","node").attr("fill","white").attr("stroke","black").attr("r",this.nodeRadius).merge(a).transition().attr("cx",function(t){return t.x+r}).attr("cy",function(t){return t.y+100}),a.exit().remove();var s=this.textContainer.selectAll("text").data(t,function(t){return t.data.key});s.enter().append("text").attr("text-anchor","middle").attr("font-size","20px").attr("dy",".4em").merge(s).transition().attr("x",function(t){return t.x+r}).attr("y",function(t){return t.y+100}).text(function(t){return t.data.name}),s.exit().remove()}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"domRender"}},[n("div",{attrs:{id:"control-panel"}},[n("v-tooltip",{attrs:{bottom:""}},[n("v-btn",{attrs:{slot:"activator",icon:"",color:"primary"},on:{click:function(e){t.previousStep()}},slot:"activator"},[n("v-icon",[t._v("navigate_before")])],1),t._v(" "),n("span",[t._v("Step Backward")])],1),t._v(" "),n("v-tooltip",{attrs:{bottom:""}},[n("v-btn",{attrs:{slot:"activator",icon:"",color:"primary"},on:{click:function(e){t.nextStep()}},slot:"activator"},[n("v-icon",[t._v("navigate_next")])],1),t._v(" "),n("span",[t._v("Step Forward")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.autoPlay()}}},[t._v("Auto play")])],1),t._v(" "),n("div",{attrs:{id:"svg-container"}},[n("svg",{attrs:{id:"codeView"}}),t._v(" "),n("svg",{attrs:{id:"domTree"}},[n("g",{attrs:{id:"linkContainer"}}),t._v(" "),n("g",{attrs:{id:"circleContainer"}}),t._v(" "),n("g",{attrs:{id:"textContainer"}})])])])},staticRenderFns:[]};var _=n("VU/8")(b,N,!1,function(t){n("5qOL")},null,null).exports,D=function(){function t(e,n){c()(this,t),this.svgNode=e,this.d3=n}return d()(t,[{key:"initData",value:function(){var t=this;this.links=[{source:"Microsoft",target:"Amazon",type:"licensing"},{source:"Microsoft",target:"HTC",type:"licensing"},{source:"Samsung",target:"Apple",type:"suit"},{source:"Motorola",target:"Apple",type:"suit"},{source:"Nokia",target:"Apple",type:"resolved"},{source:"HTC",target:"Apple",type:"suit"},{source:"Kodak",target:"Apple",type:"suit"},{source:"Microsoft",target:"Barnes & Noble",type:"suit"},{source:"Microsoft",target:"Foxconn",type:"suit"},{source:"Oracle",target:"Google",type:"suit"},{source:"Apple",target:"HTC",type:"suit"},{source:"Microsoft",target:"Inventec",type:"suit"},{source:"Samsung",target:"Kodak",type:"resolved"},{source:"LG",target:"Kodak",type:"resolved"},{source:"RIM",target:"Kodak",type:"suit"},{source:"Sony",target:"LG",type:"suit"},{source:"Kodak",target:"LG",type:"resolved"},{source:"Apple",target:"Nokia",type:"resolved"},{source:"Qualcomm",target:"Nokia",type:"resolved"},{source:"Apple",target:"Motorola",type:"suit"},{source:"Microsoft",target:"Motorola",type:"suit"},{source:"Motorola",target:"Microsoft",type:"suit"},{source:"Huawei",target:"ZTE",type:"suit"},{source:"Ericsson",target:"ZTE",type:"suit"},{source:"Kodak",target:"Samsung",type:"resolved"},{source:"Apple",target:"Samsung",type:"suit"},{source:"Kodak",target:"RIM",type:"suit"},{source:"Nokia",target:"Qualcomm",type:"suit"}],this.nodes={},this.links.forEach(function(e){e.source=t.nodes[e.source]||(t.nodes[e.source]={name:e.source}),e.target=t.nodes[e.target]||(t.nodes[e.target]={name:e.target})}),console.log(this.nodes)}},{key:"initView",value:function(){this.svgNode.append("defs").selectAll("marker").data(["suit","licensing","resolved"]).enter().append("marker").attr("id",function(t){return t}).attr("viewBox","0 -5 10 10").attr("refX",22).attr("refY",-1.5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5"),this.path=this.svgNode.append("g").selectAll("path").data(this.links).enter().append("path").attr("class",function(t){return"link "+t.type}).attr("marker-end",function(t){return"url(#"+t.type+")"}),this.circle=this.svgNode.append("g").selectAll("circle").data(this.d3.values(this.nodes)).enter().append("circle").attr("r",10).style("cursor","pointer").call(this.enableDragFunc()),this.text=this.svgNode.append("g").selectAll("text").data(this.d3.values(this.nodes)).enter().append("text").attr("x",12).attr("y",".31em").text(function(t){return t.name})}},{key:"linkArc",value:function(t){var e=t.target.x-t.source.x,n=t.target.y-t.source.y,r=Math.sqrt(e*e+n*n);return"M"+t.source.x+","+t.source.y+"A"+r+","+r+" 0 0,1 "+t.target.x+","+t.target.y}},{key:"draw",value:function(){var t=this;this.initData(),this.initView();var e=parseInt(this.svgNode.style("width").substring(0,this.svgNode.style("width").length-2)),n=parseInt(this.svgNode.style("height").substring(0,this.svgNode.style("height").length-2));function r(t){return"translate("+t.x+","+t.y+")"}var i=this.d3.forceLink(this.links).distance(80).strength(.2).iterations(3);this.force=this.d3.forceSimulation(this.d3.values(this.nodes)).force("charge",this.d3.forceManyBody().strength(50)).force("collide",this.d3.forceCollide().radius(50)).force("link",i).force("center",this.d3.forceCenter().x(e/2).y(n/2)).on("tick",function(){t.path&&(t.path.attr("d",t.linkArc),t.circle.attr("transform",r),t.text.attr("transform",r))}),this.svgNode.attr("width",e).attr("height",n),this.enableDragFunc()}},{key:"enableDragFunc",value:function(){var t=this;return this.d3.drag().on("start",function(e){t.d3.event.active||t.force.alphaTarget(.3).restart(),e.fx=t.d3.event.x,e.fy=t.d3.event.y}).on("drag",function(e){e.fx=t.d3.event.x,e.fy=t.d3.event.y}).on("end",function(e){t.d3.event.active||t.force.alphaTarget(0),e.fx=null,e.fy=null})}},{key:"drawSampleNodes",value:function(){var t=this.svgNode.append("g").attr("class","sampleContainer"),e=[{source:{name:"Nokia",x:200,y:100},target:{name:"Qualcomm",x:300,y:100},title:"Still in suit:",type:"suit"},{source:{name:"Qualcomm",x:200,y:200},target:{name:"Nokia",x:300,y:200},title:"Already resolved:",type:"resolved"},{source:{name:"Microsoft",x:200,y:300},target:{name:"Amazon",x:300,y:300},title:"Locensing now:",type:"licensing"}],n={};e.forEach(function(t,e){n[t.source.name+e]=t.source,n[t.target.name+e]=t.target}),t.selectAll("path").data(e).enter().append("path").attr("class",function(t){return"link "+t.type}).attr("marker-end",function(t){return"url(#"+t.type+")"}).attr("d",this.linkArc),t.selectAll("circle").data(this.d3.values(n)).enter().append("circle").attr("r",10).style("cursor","pointer").attr("transform",function(t){return"translate("+t.x+", "+t.y+")"}),t.selectAll(".companyTitle").data(this.d3.values(n)).enter().append("text").style("text-anchor","middle").attr("x",function(t){return t.x}).attr("y",function(t){return t.y+24}).text(function(t){return t.name}),t.selectAll(".title").data(e).enter().append("text").attr("class","msg-title").style("text-anchor","end").attr("x",function(t){return t.source.x-30}).attr("y",function(t){return t.source.y+5}).text(function(t){return t.title})}}]),t}(),T={name:"PatentSuit",data:function(){return{graphGenerator:null}},methods:{},mounted:function(){var t=this.$d3.select(".main-svg");this.graphGenerator=new D(t,this.$d3),this.graphGenerator.draw(),this.graphGenerator.drawSampleNodes()}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"patent-suit"}},[e("svg",{staticClass:"main-svg"})])},staticRenderFns:[]};var E=n("VU/8")(T,M,!1,function(t){n("g3VM")},null,null).exports,R=n("1z8E"),V=n.n(R),$={name:"Root",data:function(){return{links:[{title:"Dom Render",to:"/list/domRender",imgSrc:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/dom-render/img/step9.png"},{title:"Mobile Patent Suit",to:"/list/patent-suit",imgSrc:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/mobile-patent-suit/img/row_display.png"},{title:"Visual Github Repo",to:"https://ssthouse.github.io/github-visualization/#/main",imgSrc:V.a}]}},methods:{goto:function(t){if(t){if(t.startsWith("http")){var e=document.createElement("a");return e.target="_blank",e.href=t,void e.click()}this.$router.push(t)}}},mounted:function(){}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-list"},t._l(t.links,function(e){return n("div",{key:e.to,staticClass:"item",on:{click:function(n){t.goto(e.to)}}},[n("span",{staticClass:"title",attrs:{to:e.to}},[t._v(t._s(e.title))]),t._v(" "),n("img",{attrs:{src:e.imgSrc}})])}))},staticRenderFns:[]};var z=n("VU/8")($,L,!1,function(t){n("ff/S")},null,null).exports;r.default.use(s.a);var F=new s.a({routes:[{path:"/",redirect:"/list"},{path:"/list",name:"index",component:z},{path:"/list/domRender",name:"domRender",component:_},{path:"/list/patent-suit",name:"patent-suit",component:E}]}),P=n("vwbq"),G=(n("bfSU"),n("3EgV")),H=n.n(G);n("7zck");r.default.use(H.a),r.default.config.productionTip=!1,r.default.prototype.$d3=P,new r.default({el:"#app",router:F,components:{App:a},template:"<App/>"})},Pfar:function(t,e){},"ff/S":function(t,e){},g3VM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.10e444aa5b2a748a896d.js.map