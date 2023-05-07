function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const appId = '791d810c5eadaecca0d4a0fabf5f5352';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const weatherData = data.weather[0].main;
        let img = document.createElement("img");
        img.classList.add("weather-img");
        if(weatherData === "Clouds") {
            img.src="img/cloudy.png";
        } else if (weatherData === "Rain") {
            img.src="img/rainy.png";
        } else if (weatherData === "Wind") {
            img.src="img/windy.png";
        } else if (weatherData === "Snow") {
            img.src="img/snowy.png";
        } else {
            img.src="img/sunny.png";
        }
        weather.appendChild(img);
        const cityTemperature = document.querySelector("#weather span:last-child");
        cityTemperature.innerText = `${data.name} / ${data.main.temp}`;
    });
}

function onGeoeError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoeError);