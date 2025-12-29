import { fetchWeather } from "./api.js"
import { updateCharts } from "./chart.js"
// import { fetchWeather } from "./api.js"
// ---------------------------------------------------------

export let apiKey = "345dcc38843fc6a31c10ba8609e3f255"
export let currentUnit = 'metric'
export let lastSearchedCity = ''
export let tChart = null
export let rChart = null
// ---------------------------------------------------------

export let mainCard = document.getElementById('main-card')
export let header = document.getElementById('header')
export let headerHeading = document.getElementById('header-heading')
export let innerHeader = document.getElementById('inner-header')
export let cityInput = document.getElementById('city-input')
export let searchBTN = document.getElementById('search-btn')
export let unitToggle = document.getElementById("unit-toggle")

export let statusMSG = document.getElementById("status-msg")
export let weatherCont = document.getElementById("weather-cont")
export let placeholder = document.getElementById("placeholder")
// ---------------------------------------------------------


export function updateUI(data, fData){
    mainCard.classList.remove("card-initial")
    mainCard.classList.add("card-loaded")

    header.classList.remove("header-initial")
    header.classList.add("header-loaded")

    headerHeading.classList.remove("heading-initial")
    headerHeading.classList.add("heading-loaded")

    innerHeader.classList.remove("inner-header-initial")
    innerHeader.classList.add("inner-header-loaded")
    // ===============================================


    setTimeout(() => {
        weatherCont.classList.remove("hidden")
        setTimeout(() => {
            weatherCont.style.opacity = 1;
        }, 50);
    }, 500);
    // ========================================

    let main = data.weather[0].main.toLowerCase();
    let desc = data.weather[0].description.toLowerCase();
    document.body.className = 'bg-default';

    if(main.includes("clear")){
        document.body.classList.add('bg-clear');
    }else if(main.includes("clouds")){
        document.body.classList.add('bg-clouds');
    }else if(main.includes("rain") || main.includes("drizzle")){
        document.body.classList.add('bg-rain');
    }else if(main.includes("thunderstorm")){
        document.body.classList.add('bg-thunderstorm');
    }else if(main.includes("snow")){
        document.body.classList.add('bg-snow');
    }
    // ========================================

    let isSnow = main.includes("snow") || desc.includes("snow")
    document.getElementById("precipLabel").textContent = isSnow ? "Snow Probability (%)" : "Rain Probability (%)"


    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`
    let date = new Date()
    let options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
    document.getElementById("timing").textContent = date.toLocaleDateString('en-US', options)
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}`
    document.getElementById("temp-unit").textContent = currentUnit === 'metric' ? '°C' : '°F'
    document.getElementById("weather-descp").textContent = data.weather[0].description
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    document.getElementById("humidity").textContent = `${data.main.humidity}%`
    document.getElementById("wind-speed").textContent = `${(currentUnit === 'metric' ? data.wind.speed * 3.6 : data.wind.speed).toFixed(1)} ${currentUnit === 'metric' ? 'km/h' : 'mph'}`



    // UPDATE CHARTS
    updateCharts(fData)


    
    let forecastCont = document.getElementById("forecast-cards-cont")
    forecastCont.innerHTML = ''
    if(forecastCont){
        console.log(`forecaste`);
        
    }

    fData.list.filter(item => item.dt_txt.includes("12:00:00")).forEach(day => {
        let card = document.createElement("div")
        card.classList.add("forecast-card")
        card.innerHTML = `
            <p class="forecast-day">${new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img class="forecast-icon" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="">
            <p class="forecast-temp">${Math.round(day.main.temp)}°</p>
        `
        forecastCont.appendChild(card)
    })

}




// UNIT TOGGLE
unitToggle.addEventListener('click', () => {
    if(currentUnit === 'metric'){
        currentUnit = 'imperial'
        unitToggle.textContent = "°F"
    }else{
        currentUnit = 'metric'
        unitToggle.textContent = "°C"
    }

    document.getElementById("temp-unit").textContent = currentUnit === 'metric' ? '°C' : '°F'

    if(lastSearchedCity){
        fetchWeather(lastSearchedCity)
    }
})



// SEARCH HaNDLER
searchBTN.addEventListener("click", () => {
    lastSearchedCity = cityInput.value.trim();
    fetchWeather(lastSearchedCity);
})
cityInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        lastSearchedCity = cityInput.value.trim();
        fetchWeather(lastSearchedCity);
    }
})





