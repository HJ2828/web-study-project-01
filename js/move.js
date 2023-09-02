const item = document.querySelector(".moveItem");

var active = false; // 움직임 활성화/비활성화
var area = false;   // 움직일 수 있는 영역
var initialX;   // 클릭 x 위치
var initialY;   // 클릭 y 위치
var currentX;   // 현재 x 위치
var currentY;   // 현재 y 위치
var xOffset = 0;    // 이벤트 대상 객체의 x 위치
var yOffset = 0;    // 이벤트 대상 객체의 y 위치
var remainX;
var remainY;

function onMove(event) {
    if(active) {
        event.preventDefault();

        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
    
        xOffset = currentX;
        yOffset = currentY;

        remainX = window.innerWidth - (currentX + item.clientWidth);        // 요소와 창의 남은 우측 x 거리
        remainY = window.innerHeight - (currentY + item.clientHeight);      // 요소와 창의 남은 우측 y 거리

        if(remainX < 0 || currentX < 0 || remainY < 0 || currentY < 0 ) {    // 화면 영역 벗어날 경우
            remainX = 0;
            remainY = 0;
        }
        else {
            setTranslate(currentX, currentY, item);
        }
    }
}
function onMouseDown(event) {
    if(event.target === item) {     // 클릭 이벤트 대상이 위젯과 같을 경우
        active = true;              // 움직임 활성화
        area = true;
    }
    initialX = event.clientX - xOffset;     
    initialY = event.clientY - yOffset;

    console.log(xOffset, yOffset)
}
function onMouseUp(event) {
    initialX = currentX;
    initialY = currentY;

    active = false;     // 움직임 비활성화
}


function setTranslate(xPos, yPos, el) {     // 요소 움직이기
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
 }

item.addEventListener("mousemove", onMove);
item.addEventListener("mousedown", onMouseDown);
item.addEventListener("mouseup", onMouseUp);
