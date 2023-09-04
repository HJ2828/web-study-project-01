const btnToday = document.querySelector("#funcitonButtons button:nth-child(1)");
const btnStopwatch = document.querySelector("#funcitonButtons button:nth-child(2)");
const btnChecklist = document.querySelector("#funcitonButtons button:nth-child(3)");
const btnImg = document.querySelector("#funcitonButtons button:nth-child(4)");

const dayInfo = document.querySelector("#dayInfo");
const stopwatch = document.querySelector("#stopwatch");

const imgButtons = document.querySelector("#backImgButtons");

let dayInfoActive = false;  // 날짜, 날씨 활성화/비활성화
let stopwatchActive = false;  // 스톱워치 활성화/비활성화
let imgActive = false;  // 배경 관련 기능 버튼 활성화/비활성화

function onTodayButtons() { // 날짜, 날씨 on/off 버튼
    if(dayInfoActive) { // 활성화 -> 비활성화
        dayInfoActive = false;
        dayInfo.classList.add("functionHidden");
        btnToday.style.fontVariationSettings = "'FILL' 0"; // 아이콘 fill 채우기x
    } else {    // 비활성화 -> 활성화
        dayInfoActive = true;
        dayInfo.classList.remove("functionHidden");
        btnToday.style.fontVariationSettings = "'FILL' 1"; // 아이콘 fill 채우기
    }
}

function onStopwatchButtons() { // 스톱워치 on/off 버튼
    if(stopwatchActive) { // 활성화 -> 비활성화
        stopwatchActive = false;
        stopwatch.classList.add("functionHidden");
        btnStopwatch.style.fontVariationSettings = "'FILL' 0"; // 아이콘 fill 채우기x
    } else {    // 비활성화 -> 활성화
        stopwatchActive = true;
        stopwatch.classList.remove("functionHidden");
        btnStopwatch.style.fontVariationSettings = "'FILL' 1"; // 아이콘 fill 채우기
    }
}

function onImageButtons() { // 배경 관련 기능 버튼
    if(imgActive) { // 활성화 -> 비활성화
        imgActive = false;
        imgButtons.classList.add("functionHidden");
        btnImg.style.fontVariationSettings = "'FILL' 0"; // 아이콘 fill 채우기x
    } else {    // 비활성화 -> 활성화
        imgActive = true;
        imgButtons.classList.remove("functionHidden");
        btnImg.style.fontVariationSettings = "'FILL' 1"; // 아이콘 fill 채우기
    }
}

btnToday.addEventListener("click", onTodayButtons); // 날짜, 날씨 on/off 버튼
btnStopwatch.addEventListener("click", onStopwatchButtons); // 스톱워치 on/off 버튼
btnImg.addEventListener("click", onImageButtons); // 배경 관련 기능 버튼
