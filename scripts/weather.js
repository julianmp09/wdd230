const apiKey = "6a80c1491ad62534e02c13b4eac8fcfc"; 
const city = "Buenos Aires";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const locationElement = document.getElementById("weatherLocation");
        const weatherDataElement = document.getElementById("weatherData");

        const tempRounded = Math.round(data.main.temp);

        locationElement.textContent = ` ${data.name}, ${data.sys.country} `;
        weatherDataElement.textContent = `🌡️ ${tempRounded}°C - ${data.weather[0].description}`;
    })
    .catch(error => console.error("Error fetching weather data:", error));
