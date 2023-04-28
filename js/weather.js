const API_KEY = "913302e837cca6cbc0e15604a16fd94b";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

const weatherIcon = {
    "01d": "fas fa-sun", // 맑은 날씨 (day)
    "01n": "fas fa-moon", // 맑은 날씨 (night)
    "02d": "fas fa-cloud-sun", // 약간 구름 낀 날씨 (day)
    "02n": "fas fa-cloud-moon", // 약간 구름 낀 날씨 (night)
    "03d": "fas fa-cloud", // 구름이 많은 날씨 (day)
    "03n": "fas fa-cloud", // 구름이 많은 날씨 (night)
    "04d": "fas fa-cloud", // 흐린 날씨 (day)
    "04n": "fas fa-cloud", // 흐린 날씨 (night)
    "09d": "fas fa-cloud-rain", // 비 (day)
    "09n": "fas fa-cloud-rain", // 비 (night)
    "10d": "fas fa-cloud-showers-heavy", // 많은 비 (day)
    "10n": "fas fa-cloud-showers-heavy", // 많은 비 (night)
    "11d": "fas fa-bolt", // 번개 (day)
    "11n": "fas fa-bolt", // 번개 (night)
    "13d": "fas fa-snowflake", // 눈 (day)
    "13n": "fas fa-snowflake", // 눈 (night)
    "50d": "fas fa-smog", // 안개 (day)
    "50n": "fas fa-smog", // 안개 (night)
};

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const icon = data.weather[0].icon;
            weather.innerHTML = `<i class="${weatherIcon[icon]}"></i> ${data.weather[0].description} / ${data.main.temp}`;
        });
}


