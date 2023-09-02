const btnToday = document.querySelector("#funcitonButtons button:nth-child(1)");
const btnStopwatch = document.querySelector("#funcitonButtons button:nth-child(2)");
const btnChecklist = document.querySelector("#funcitonButtons button:nth-child(3)");
const btnImg = document.querySelector("#funcitonButtons button:nth-child(4)");

const imgButtons = document.querySelector("#backImgButtons");

let imgActive = false;  // 배경 관련 기능 버튼 활성화/비활성화

function onImageButtons() { // 배경 관련 기능 버튼
    if(imgActive) {
        imgActive = false;
        imgButtons.classList.add("btnHidden");
    } else {
        imgActive = true;
        imgButtons.classList.remove("btnHidden");
    }
}

btnImg.addEventListener("click", onImageButtons);
