const dayInfoDate = document.querySelector("#date");
const dayInfoTime = document.querySelector("#time");
const greeting = document.querySelector("#dayPart");

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var dayPart;    // 아침, 오후, 저녁, 밤 구분 변수

function getDate() {    // 날짜
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();

    dayInfoDate.innerText = `${year}/${month+1}/${date}/${dayNames[day]}`;
}

function getTime() {    // 시간
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");  // ex) 5분 -> 05로 표기
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    dayInfoTime.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDayPart() {     // mornig, afternoon, evening, night 구분
    const now = new Date();
    switch(now.getHours()) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 22:
        case 23:
            dayPart = "Night";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            dayPart = "Morning";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            dayPart = "Afternoon";
            break;
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            dayPart = "Evening";
            break;
    }
    greeting.innerText = `Good ${dayPart},`;
}

getDate();
getTime();
getDayPart();

setInterval(getDate, 1000); // 1초마다 함수 실행
setInterval(getTime, 1000); // 1초마다 함수 실행
setInterval(getDayPart, 1000); // 1초마다 함수 실행