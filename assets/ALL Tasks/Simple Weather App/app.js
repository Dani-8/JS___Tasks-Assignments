let searchBTN = document.getElementById("get-weather-btn");
let apiKey = "345dcc38843fc6a31c10ba8609e3f255";

function getWeatherData(){
    let city = document.getElementById("city-input").value
    let weatherContainer = document.getElementById("weather");

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }
    // ---------------------------------------------------------

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            if(data.cod !== 200){
                weatherContainer.innerHTML = `<p class="error">${data.message}</p>`;
                return
            }

            weatherContainer.innerHTML = `
                <h3 class="city-name">${data.name}, ${data.sys.country}</h3>
                <p class="temperature">${data.main.temp} °C</p>
                <p class="weather-description">${data.weather[0].description}</p>
                <p class="humidity">Humidity: ${data.main.humidity}%</p>
                <p class="wind-speed">Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        // ---------------------------------------------------------

        .catch(() => {
            weatherContainer.innerHTML = `<p class="error">An error occurred while fetching the data. Please try again later.</p>`;
        })


}

searchBTN.addEventListener("click", getWeatherData);


















