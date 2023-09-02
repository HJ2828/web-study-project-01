//const images = [...Array(4)].map((item, index) => `${index}.gif`);  // map(): map에서 리턴된 값으로 배열 채울 수 있음 https://hjcode.tistory.com/73
const bgImageSrcForm = document.querySelector("#bgImageSrc");
const bgImageSrcInput = document.querySelector("#bgImageSrc input");
const bgImageSrcInput1 = document.querySelector("#bgImageSrc input:first-child");

const btnBackImgPrev = document.querySelector("#backImgButtons button:nth-child(1)");
const btnBackImgNext = document.querySelector("#backImgButtons button:nth-child(2)");
const btnBackImgPin = document.querySelector("#backImgButtons button:nth-child(3)");

const images = ["0.gif", "1.gif", "2.gif", "3.gif"];    // 배경 이미지 배열
const BACKGROUNDIMG_KEY = "backgroundImg";

let pinCheck = false;     // 이미지 고정

// ----- 브라우저 창이 처음 실행될 때 -----
let imgNum = Math.floor(Math.random() * images.length);    // 배경 이미지 배열 움직이기
const chosenImg = images[imgNum];  // 배경 이미지 랜덤

const backgroundImg = document.createElement("img");    // img 요소 생성
backgroundImg.id = "bgImage";                           // img의 id

const pinImage = localStorage.getItem(BACKGROUNDIMG_KEY);   // 로컬 저장소에 핀 고정 배경 이미지 가져오기

if(pinImage === null) {    // 로컬 저장소에 배경이 저장되어 있지 않을 경우(핀 고정 X)
    backgroundImg.src = `background/${chosenImg}`;          // img의 src
} else {    // 핀 고정 O
    const parsedPin = JSON.parse(pinImage);
    backgroundImg.src = parsedPin.src;          // img의 src
    pinCheck = parsedPin.pin;   // 핀 활성화/비활성화
    btnBackImgPin.innerText = "고정";
}
document.body.appendChild(backgroundImg);               // img를 html body에 넣기

// ----------------------------------------

function onImgSrcSubmit(event) {    // 이미지 주소 입력
    event.preventDefault();
    const imgSrc = bgImageSrcInput.value;
    backgroundImg.src = `${imgSrc}`;    // 입력한 이미지 주소의 이미지로 배경 이미지 변경
    bgImageSrcInput.value = null;

    // 핀이 고정되어 있을 경우를 대비해서 미리 초기화
    cancelPin();
}

function onImgPrev() {  // 이전 배경 이미지
    imgNum--;
    if(imgNum < 0) {
        imgNum = images.length - 1;
    } 
    backgroundImg.src = `background/${images[imgNum]}`;          // img의 src
    cancelPin();
}

function onImgNext() {  // 다음 배경 이미지
    imgNum++;
    if(imgNum > images.length - 1) {
        imgNum = 0;
    } 
    backgroundImg.src = `background/${images[imgNum]}`;          // img의 src
    cancelPin();
}

function onImgPin() {   // 배경 이미지 고정
    if(pinCheck) {
        cancelPin();
    } else {
        pinCheck = true;    // 이미지 고정
        const backgroundNow  = {
            'pin': pinCheck,
            'src': backgroundImg.src,
        }
        localStorage.setItem(BACKGROUNDIMG_KEY, JSON.stringify(backgroundNow));   // 로컬 저장소에 핀 고정 배경 이미지 저장
        console.log(backgroundNow);
        console.log(typeof backgroundNow);
        btnBackImgPin.innerText = "핀o";
    }
}

function cancelPin() {
    pinCheck = false;    // 이미지 고정 취소
    localStorage.removeItem(BACKGROUNDIMG_KEY);     // 로컬 저장소에서 핀 삭제
    btnBackImgPin.innerText = "핀x";
}

bgImageSrcForm.addEventListener("submit", onImgSrcSubmit);  // 이미지 주소 입력

btnBackImgPrev.addEventListener("click", onImgPrev);  // 이전 배경 이미지
btnBackImgNext.addEventListener("click", onImgNext);  // 다음 배경 이미지
btnBackImgPin.addEventListener("click", onImgPin);   // 배경 이미지 고정