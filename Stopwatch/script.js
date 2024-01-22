let displayTime = document.querySelector('.display-timer')
let pauseBtn = document.querySelector('.pause-btn');
let startBtn = document.querySelector('.start-btn');
let restartBtn = document.querySelector('.restart-btn');
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;
function startTimer(){
  seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++
    }
  }
  let s = seconds < 10 ? '0'+seconds:seconds;
  let m = minutes < 10 ? '0'+minutes:minutes;
  let h = hours < 10 ? '0'+hours:hours;
  displayTime.innerHTML = `${h} : ${m} : ${s}`;
}
startBtn.addEventListener('click',()=>{
  timeInterval = setInterval(startTimer,1000);
})
pauseBtn.addEventListener('click',()=>{
  clearInterval(timeInterval);
})
restartBtn.addEventListener('click',()=>{
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.innerHTML = `00 : 00 : 00`;
})
