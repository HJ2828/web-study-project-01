const stopWatch = document.querySelector("#stopwatch h3");
const start = document.querySelector("#stopwatch button:first-of-type");
const reset = document.querySelector("#stopwatch button:last-of-type");

let stopWatchHour = 0;
let stopWatchMinutes = 0;
let stopWatchSeconds = 0;
let stopWatchActive = false;   // 스톱워치 활성화
let interval;

function startTime() {
    stopWatchSeconds++;
    if(stopWatchSeconds == 60) {
        stopWatchMinutes++;
        stopWatchSeconds = 0;
        if(stopWatchMinutes == 60) {
            stopWatchHour++;
            stopWatchMinutes = 0;
        }
    }
    stopWatch.innerText = `${stopWatchHour}:${String(stopWatchMinutes).padStart(2, "0")}:${String(stopWatchSeconds).padStart(2, "0")}`;    
}

function onStart() {
    if(stopWatchActive) {   // 스톱워치 작동할 경우 (작동 -> 작동x)
        stopWatchActive = false;
        start.innerText = "START";
        clearInterval(interval);
    }
    else {   // 스톱워치 작동안할 경우 (작동x -> 작동)
        stopWatchActive = true;
        start.innerText = "STOP";
        
        interval = setInterval(startTime, 1000);    // 1초마다
    }
}

function onReset() {
    stopWatchActive = false;
    clearInterval(interval);
    stopWatchHour = 0;
    stopWatchMinutes = 0;
    stopWatchSeconds = 0;
    stopWatch.innerText = "0:00:00";
}

start.addEventListener("click", onStart);
reset.addEventListener("click", onReset);