const btnToday = document.querySelector("#funcitonButtons button:nth-child(1)");
const btnStopwatch = document.querySelector("#funcitonButtons button:nth-child(2)");
const btnTodolist = document.querySelector("#funcitonButtons button:nth-child(3)");
const btnImg = document.querySelector("#funcitonButtons button:nth-child(4)");

const dayInfo = document.querySelector("#dayInfo");
const stopwatch = document.querySelector("#stopwatch");
const todo = document.querySelector("#todo");

const imgButtons = document.querySelector("#backImgButtons");

let dayInfoActive;  // 날짜, 날씨 활성화/비활성화
let stopwatchActive;  // 스톱워치 활성화/비활성화
let todoActive;  // 스톱워치 활성화/비활성화
let imgActive;  // 배경 관련 기능 버튼 활성화/비활성화

// ----- 브라우저 창이 처음 실행될 때 -----
const onOff = JSON.parse(localStorage.getItem("onoff"));

// !로 해주는 이유: 비활성화일 때 함수를 실행하면 활성화가 되므로 처음부터 활성화 상태라고 하고 비활성화가 될 수 있게
if(onOff === null) {
    dayInfoActive = !false;  // 날짜, 날씨 비활성화
    stopwatchActive = !false;  // 스톱워치 비활성화
    todoActive = !false;  // 스톱워치 비활성화
    imgActive = !false;  // 배경 관련 기능 버튼 비활성화
    console.log("1", dayInfoActive);
} else {
    dayInfoActive = !onOff.dayInfoActive;
    stopwatchActive = !onOff.stopwatchActive;
    todoActive = !onOff.todoActive;
    imgActive = !onOff.imgActive;
}
onTodayButtons();
onStopwatchButtons();
onTodoButtons();
onImageButtons();
// ----------------------------------------

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
    saveOnOff();
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
    saveOnOff();
}

function onTodoButtons() { // 투두 on/off 버튼
    if(todoActive) { // 활성화 -> 비활성화
        todoActive = false;
        todo.classList.add("functionHidden");
        btnTodolist.style.fontVariationSettings = "'FILL' 0"; // 아이콘 fill 채우기x
    } else {    // 비활성화 -> 활성화
        todoActive = true;
        todo.classList.remove("functionHidden");
        btnTodolist.style.fontVariationSettings = "'FILL' 1"; // 아이콘 fill 채우기
    }
    saveOnOff();
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
    saveOnOff();
}

function saveOnOff() {   // 데이터 저장
    let onoff = {
        'dayInfoActive': dayInfoActive,
        'stopwatchActive': stopwatchActive,
        'todoActive': todoActive,
        'imgActive': imgActive,
    }
    localStorage.setItem("onoff", JSON.stringify(onoff));
}

btnToday.addEventListener("click", onTodayButtons); // 날짜, 날씨 on/off 버튼
btnStopwatch.addEventListener("click", onStopwatchButtons); // 스톱워치 on/off 버튼
btnImg.addEventListener("click", onImageButtons); // 배경 관련 기능 버튼
btnTodolist.addEventListener("click", onTodoButtons); // 투두 on/off 버튼
