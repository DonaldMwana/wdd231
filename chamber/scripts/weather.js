const apiKey = "YOUR_API_KEY";
const lat = "-26.1";
const lon = "27.8";

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather(){
const response = await fetch(url);
const data = await response.json();

document.getElementById("current-temp").textContent =
data.list[0].main.temp + "°C";

document.getElementById("weather-desc").textContent =
data.list[0].weather[0].description;

const forecastDiv = document.getElementById("forecast");

for(let i=8;i<=24;i+=8){
const day = document.createElement("p");
day.textContent = data.list[i].main.temp + "°C";
forecastDiv.appendChild(day);
}
}

getWeather();