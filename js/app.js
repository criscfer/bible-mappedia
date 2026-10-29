
(function(){
const root=document.documentElement;
let theme=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
root.dataset.theme=theme;
const tb=document.getElementById("themeBtn");
if(tb)tb.onclick=()=>{theme=theme==="dark"?"light":"dark";root.dataset.theme=theme};
if(typeof REGIONS==="undefined")return;

const NS="http://www.w3.org/2000/svg";
const svg=document.getElementById("map"),list=document.getElementById("regionList"),
      tip=document.getElementById("tooltip"),det=document.getElementById("details");
const g=document.createElementNS(NS,"g");svg.appendChild(g);
const byId={};

function centroid(d){const n=d.match(/-?\d+/g).map(Number);let x=0,y=0,c=n.length/2;
  for(let i=0;i<n.length;i+=2){x+=n[i];y+=n[i+1]}return[x/c,y/c]}

REGIONS.forEach(r=>{
  byId[r.id]=r;
  const p=document.createElementNS(NS,"path");
  p.setAttribute("d",r.path);p.setAttribute("class","region");p.setAttribute("tabindex","0");
  p.setAttribute("role","button");p.setAttribute("aria-label",r.name);p.dataset.id=r.id;
  p.addEventListener("mousemove",e=>showTip(r,e.clientX,e.clientY));
  p.addEventListener("mouseleave",hideTip);
  p.addEventListener("focus",()=>{const b=p.getBoundingClientRect();showTip(r,b.left+b.width/2,b.top)});
  p.addEventListener("blur",hideTip);
  p.addEventListener("click",()=>{if(!moved)select(r.id)});
  p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select(r.id)}});
  g.appendChild(p);
  const [cx,cy]=centroid(r.path),t=document.createElementNS(NS,"text");
  t.setAttribute("x",cx);t.setAttribute("y",cy);t.setAttribute("class","label");t.textContent=r.name.split(" / ")[0];
  g.appendChild(t);
  const b=document.createElement("button");b.textContent=r.name;b.dataset.id=r.id;b.setAttribute("aria-pressed","false");
  b.onclick=()=>select(r.id);list.appendChild(b);
});

function showTip(r,x,y){
  tip.innerHTML="";const s=document.createElement("strong");s.textContent=r.name;
  const d=document.createElement("span");d.textContent=r.summary;tip.append(s,d);
  tip.style.left=Math.min(x+16,innerWidth-340)+"px";tip.style.top=Math.min(y+16,innerHeight-110)+"px";tip.classList.add("show")}
function hideTip(){tip.classList.remove("show")}

function select(id){
  const r=byId[id];if(!r)return;
  document.querySelectorAll(".region").forEach(n=>n.classList.toggle("active",n.dataset.id===id));
  list.querySelectorAll("button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.id===id)));
  det.innerHTML="";
  const h=document.createElement("h2");h.textContent=r.name;
  const p=document.createElement("p");p.textContent=r.detail;
  const f=document.createElement("p");f.className="refs";f.textContent="Key passages: "+r.refs;
  const s=document.createElement("p");s.className="src";
  s.textContent="TODO: add scholarly citations (e.g. Anchor Yale Bible Dictionary, Oxford Bible Atlas) in js/regions.js.";
  det.append(h,p,f,s);
}

// pan and zoom
let vb={x:0,y:0,w:1200,h:900},moved=false,drag=null;
const apply=()=>svg.setAttribute("viewBox",`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
svg.addEventListener("wheel",e=>{e.preventDefault();
  const k=e.deltaY>0?1.1:0.9,r=svg.getBoundingClientRect(),
  mx=vb.x+(e.clientX-r.left)/r.width*vb.w,my=vb.y+(e.clientY-r.top)/r.height*vb.h,
  nw=Math.min(2400,Math.max(300,vb.w*k)),nh=nw*0.75;
  vb.x=mx-(mx-vb.x)*nw/vb.w;vb.y=my-(my-vb.y)*nh/vb.h;vb.w=nw;vb.h=nh;apply()},{passive:false});
svg.addEventListener("pointerdown",e=>{drag={x:e.clientX,y:e.clientY,vx:vb.x,vy:vb.y};moved=false});
addEventListener("pointermove",e=>{if(!drag)return;
  const r=svg.getBoundingClientRect(),dx=e.clientX-drag.x,dy=e.clientY-drag.y;
  if(Math.abs(dx)+Math.abs(dy)>4){moved=true;svg.classList.add("drag")}
  if(moved){vb.x=drag.vx-dx/r.width*vb.w;vb.y=drag.vy-dy/r.height*vb.h;apply()}});
addEventListener("pointerup",()=>{drag=null;svg.classList.remove("drag");setTimeout(()=>moved=false,0)});
select("canaan");
})();
