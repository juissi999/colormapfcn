(()=>{"use strict";const t={set:function(t,n,r,e,i,s){this.rstart=t,this.gstart=n,this.bstart=r,this.rincrement=e,this.gincrement=i,this.bincrement=s},getValue:function(t){return{r:(this.rstart+this.rincrement*t)%256,g:(this.gstart+this.gincrement*t)%256,b:(this.bstart+this.bincrement*t)%256}},randStartLocs:function(){this.rstart=Math.floor(256*Math.random()),this.gstart=Math.floor(256*Math.random()),this.bstart=Math.floor(256*Math.random())},randIncrements:function(){this.rincrement=Math.floor(256*Math.random()),this.gincrement=Math.floor(256*Math.random()),this.bincrement=Math.floor(256*Math.random())},rstart:0,gstart:0,bstart:0,rincrement:1,gincrement:1,bincrement:1},n=()=>{t.randStartLocs(),t.randIncrements(),document.getElementById("fcn").innerHTML="rgb((4+31*index)%256,(15+199*index)%256,(80+7*index)%256)";const n=document.getElementById("colors");n.innerHTML="";for(let r=0;r<101;r++){const e=document.createElement("DIV"),i=t.getValue(r);e.innerHTML=i.r+","+i.g+","+i.b,e.style.display="inline-block",e.style.height="5rem",e.style.width="5rem",e.style.backgroundColor=`rgb(${i.r},${i.g},${i.b})`,n.appendChild(e)}};n(),document.getElementById("randbutton").onclick=()=>{n()}})();