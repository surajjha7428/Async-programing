let display=document.querySelector(".display");
let hours=document.querySelector(".hr");
let minutes=document.querySelector(".min");
let seconds=document.querySelector(".sec");
let start=document.getElementById("start");
let pause=document.getElementById("pause");
let reset=document.getElementById("reset");
let second=0;
let minute=0;
let hour=0;
start.addEventListener("click",function(){
    let second = parseInt(document.getElementById("second").value) || 0;
        let minute = parseInt(document.getElementById("minute").value) || 0;
        let hour = parseInt(document.getElementById("hour").value) || 0;
        document.getElementById("hour").value = "";
        document.getElementById("minute").value = "";
        document.getElementById("second").value = "";
  id = setInterval(() =>{
    if (second === 0 && minute === 0 && hour === 0) {
        clearInterval(id);
        return;
    }
    second--;
    if(second<0){
      second=59;
      minute--;
    }
    if(minute<0){
      minute=59;
      hour--;
    }
    else if(hour<0){
        minute=59;
        second=59
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
        document.getElementById("hour").value = "";
        document.getElementById("minute").value = "";
        document.getElementById("second").value = "";
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
