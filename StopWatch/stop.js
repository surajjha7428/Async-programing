let display=document.querySelector(".display");
let hours=document.querySelector(".hour");
let minutes=document.querySelector(".minute");
let seconds=document.querySelector(".second");
let start=document.getElementById("start");
let pause=document.getElementById("pause");
let reset=document.getElementById("reset");
let second=0;
let minute=0;
let hour=0;
start.addEventListener("click",function(){
  id = setInterval(() =>{
    second++;
    if(second>=60){
      second= 0;
      minute++;
    }
    if(minute>=60){
      minute=0;
      hour++;
    }
    seconds.textContent=(second < 10 ? "0" : "")+second;
    minutes.textContent=(minute < 10 ? "0" : "")+minute;
    hours.textContent=(hour < 10 ? "0" : "")+hour;
  },1000);
  start.disabled=true;
  pause.disabled=false;
  start.style.background="rgb(115, 203, 233)";
  if(start.disabled=true){
    pause.style.background="red";
  }
})
pause.addEventListener("click",function(){
  clearInterval(id);
  start.disabled=false;
  pause.disabled=true;
  pause.disabled=true;
  start.disabled=false;
  pause.style.background="rgb(247, 122, 122)";
  if(pause.disabled=true){
    start.style.background="blue";
  }
})
reset.addEventListener("click",function(){
   clearInterval(id);
   second=0
   minute=0
   hour=0
   seconds.textContent="00"
   minutes.textContent="00"
   hours.textContent="00"
  start.disabled=false;
  start.style.background="blue";
  pause.disabled=false;
  pause.style.background="red";
})
