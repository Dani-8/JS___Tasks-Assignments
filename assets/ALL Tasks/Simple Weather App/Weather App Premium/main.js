import { fetchWeather } from "./api.js"
// ---------------------------------------------------------

export let apiKey = "345dcc38843fc6a31c10ba8609e3f255"
export let currentUnit = 'metric';
export let lastSearchedCity = '';
export let tChart = null;
export let rChart = null;
// ---------------------------------------------------------

export let mainCard = document.getElementById('main-card')
export let header = document.getElementById('header')
export let cityInput = document.getElementById('city-input')
export let searchBTN = document.getElementById('search-btn')
export let unitToggle = document.getElementById("unit-toggle")

export let statusMSG = document.getElementById("status-msg")
export let weatherCont = document.getElementById("weather-cont")
export let placeholder = document.getElementById("placeholder")
// ---------------------------------------------------------


export function updateUI(data, fData){
    

}














