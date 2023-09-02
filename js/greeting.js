const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetName = document.querySelector("#userName");
const nameBefore = document.querySelector("#before");
const nameAfter = document.querySelector("#after");

const btnLogout = document.querySelector("#funcitonButtons button:nth-child(5)");

const USERNAME_KEY = "userName";

function onLoginSubmit(event) { // 사용자 이름 submit
    event.preventDefault();      // 브라우저 새로 고침 방지
    const userName = loginInput.value;  // 사용자 이름
    loginForm.classList.add("hidden");  // 폼 숨기기
    // nameBefore.style.height = "0px";   // 로그인 시 검은 배경 
    localStorage.setItem(USERNAME_KEY, userName);     // 로컬 저장소에 사용자 이름 저장
    paintGreeting(userName);    // 사용자 이름 띄우기

    console.log("aa");
}

function paintGreeting(userName) {      // 사용자 이름 띄우기
    nameAfter.classList.remove("hidden");   // 다른 요소들 담고있는 div 숨기기 제거
    greetName.innerText = `${userName} :)`;
    nameBefore.style.height = "0px";
}

function logout() {
    loginForm.classList.remove("hidden");  // 폼 나타내기
    nameBefore.style.height = "100vh";
    // location.reload();
    loginInput.value = localStorage.getItem(USERNAME_KEY);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);   // 로컬 저장소에서 사용자 이름 가져오기

if(savedUserName === null) {    // 로컬 저장소에 사용자 이름이 없을 경우
    nameBefore.style.height = "100vh";
    loginForm.classList.remove("hidden");
    // loginForm.addEventListener("submit", onLoginSubmit);
} else {   
    paintGreeting(savedUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);

btnLogout.addEventListener("click", logout);

