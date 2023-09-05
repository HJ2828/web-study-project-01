const inputBox = document.getElementById("inputBox");
const todoList = document.getElementById("todoList");
const addBtn = document.querySelector(".row button");

function keyCheck(event) {
    if(event.keyCode === 13) {    // 엔터키
        addTask();
    }
}

function addTask() {    // 투두 출력
    if(inputBox.value !== '') { // 값 있으면
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        todoList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // x 표시
        li.appendChild(span);
    }
    inputBox.value = "";    // input 비우기
    saveData();
}

function saveData() {   // 데이터 저장
    localStorage.setItem("data", todoList.innerHTML);
}
function showTask() {   // 데이터 가져오기
    todoList.innerHTML = localStorage.getItem("data");
}

addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keyup",keyCheck);

// 투두 리스트 내용 작성 클릭
todoList.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") { // 내용 클릭
        event.target.classList.toggle("checked");   // 체크박스
        saveData();
    }
    else if(event.target.tagName === "SPAN") {  // x 클릭
        event.target.parentElement.remove();    // 부모요소 제거(내용 제거)
        saveData();
    }
}, false);

showTask();