const apiKey = "13d850d2ad3cdeba6a76b816d47be1f3";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const searchbutton = document.querySelector(".search-bar button");

const errorMsg = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        errorMsg.style.display = "flex";
        weatherDisplay.style.display = "none";
    }
    else {
        weatherDisplay.style.display = "flex";
        errorMsg.style.display = "none";
    }
    var data = await response.json();
    console.log(data);

    let cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;

    let temperature = document.querySelector(".temperature");
    temperature.innerHTML = Math.floor(data.main.temp) + "°C";

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    let wind = document.querySelector(".wind");
    wind.innerHTML = Math.floor(data.wind.speed) + " kmph";

    let weatherImage = document.querySelector(".weather-icon");

    if (data.weather[0].main === "Clouds") {
        weatherImage.src = "clouds.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherImage.src = "snow.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherImage.src = "clear.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherImage.src = "mist.png";
    }
    else {
        weatherImage.src = "rain.png";
    }
}

searchbutton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


