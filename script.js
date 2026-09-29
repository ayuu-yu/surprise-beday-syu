function startSurprise(){
  const music=document.getElementById("bgMusic");
  music.volume=0.6;
  music.play().catch(()=>{});
  document.getElementById("opening").style.display="none";
  document.getElementById("section1").classList.add("active");
  createPetals();
}

function nextSection(number){
  const current=document.querySelector(".section.active");
  if(current) current.classList.remove("active");
  const next=document.getElementById("section"+number);
  if(next) next.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function createPetals(){
  const container=document.getElementById("petals");
  setInterval(()=>{
    const petal=document.createElement("div");
    petal.classList.add("petal");
    const flowers=["🌸","🌺","🌷","🌹","💮"];
    petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];
    petal.style.left=Math.random()*100+"%";
    petal.style.fontSize=(Math.random()*20+15)+"px";
    const duration=Math.random()*4+4;
    petal.style.animationDuration=duration+"s";
    container.appendChild(petal);
    setTimeout(()=>petal.remove(),duration*1000);
  },180);
}
