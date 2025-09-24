let daysLeft = document.getElementById("days-left")
let displayDays = document.getElementById("display-days")
let note = document.getElementById("note")
let toggleButton = document.getElementById("toggle-btn")

let detailed = false

function calculateDaysLeft(){   
    let ramzanStartDate = new Date("Feb 17, 2026 00:00:00")
    let today = new Date()
    
    let differenceInTime = ramzanStartDate.getTime() - today.getTime()
    let differenceInDay = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    


    if(differenceInDay <= 0){
        displayDays.textContent = "Ramadan Mubarak!..."
        daysLeft.classList.add("hidden")
        toggleButton.classList.add("hidden")
        note.classList.add("hidden")
        return
    }


    if(detailed){
        let years = Math.floor(differenceInDay / 365)
        let months = Math.floor((differenceInDay % 365) / 30)
        let days = (differenceInDay % 365) % 30

        displayDays.innerHTML = `
        ${years > 0 ? `<span>${years} <small>Years</small></span>` : ''}
        ${months > 0 ? `<span>${months} <small>Months</small></span>` : ''}
        ${days > 0 ? `<span>${days} <small>Days</small></span>` : ''}
        `
    }else{
        displayDays.textContent = `${differenceInDay} Days`
    }
}


toggleButton.addEventListener("click", () => {
    detailed = !detailed
    if(detailed){
        toggleButton.textContent = 'Show Simple Countdown';
    }else {
        toggleButton.textContent = 'Show Detailed Countdown';
    }
    calculateDaysLeft()
})



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

let passwordDisplay = document.getElementById("password-display")
let copyButton = document.getElementById("copy-btn")

let lengthValue = document.getElementById("length-value")
let lengthSlider = document.getElementById("length-slider")

let inculudeUppercase = document.getElementById("include-uppercase")
let inculudeLowercase = document.getElementById("include-lowercase")
let inculudeNumbers = document.getElementById("include-numbers")
let inculudeSymbols = document.getElementById("include-symbols")

let generateButton = document.getElementById("generate-btn")

let strengthBar = document.getElementById("strength-bar")
let strengthText = document.getElementById("strength-text")


let character = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    Symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}



function generatePassword(){
    


}



































document.addEventListener("DOMContentLoaded", () => {
    calculateDaysLeft()
    setInterval(calculateDaysLeft, 1000);
});

