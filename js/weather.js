const API_KEY = config.weatherApiKey;   // api key

function onGeoOk(position) {    // 성공
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;  // 경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector("#weather img");
        const weatherCity = document.querySelector("#weather span:nth-child(2)");
        const weatherTemp = document.querySelector("#weather span:last-child");
    
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;   // 아이콘
        weatherCity.innerText = `/ ${data.name} / `;    // 위치
        weatherTemp.innerText = `${data.main.temp}°C`;  // 온도
    });
}

function onGeoError() {     // 실패
    alert("날씨 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // 성공: onGeoOk, 실패: onGeoError