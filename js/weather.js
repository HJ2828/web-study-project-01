const API_KEY = config.weatherApiKey;   // api key

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    // function a(response) {
    //     return response.json();
    // }
    // function b(data) {
    //     console.log(data.name, data.weather[0].main);
    // }

    // fetch(url).then(a).then(b);

    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector("#weather img");
        const weatherCity = document.querySelector("#weather span:nth-child(2)");
        const weatherTemp = document.querySelector("#weather span:last-child");
    
        // weatherIcon.innerText = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherCity.innerText = data.name;
        weatherTemp.innerText = `${data.main.temp}°C`;

        console.log("굿");
    });
    console.log("굿ㅇㅇ");
}

function onGeoError() {
    alert("날씨 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // 성공: onGeoOk, 실패: onGeoError