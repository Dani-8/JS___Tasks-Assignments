import { apiKey, currentUnit, statusMSG, lastSearchedCity } from "./main.js";
import { updateUI } from "./main.js";


export async function fetchWeather(city){
    if (city === ""){
        alert("Please enter a city name.")
        return
    }
    // -------------------------------------

    // lastSearchedCity = city
    statusMSG.textContent = "SEARCHING...";
    statusMSG.classList.remove('hidden')


    try{
        let [res, fres] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${currentUnit}&appid=${apiKey}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${currentUnit}&appid=${apiKey}`)
        ])

        if(!res.ok){
            throw new Error("City not found")
        }

        let data = await res.json()
        let fData = await fres.json()
        updateUI(data, fData)
    }catch(err){
        statusMSG.textContent = err.message.toUpperCase()
        setTimeout(() => {
            statusMSG.classList.add('hidden')
        }, 2500);
    }





}
















