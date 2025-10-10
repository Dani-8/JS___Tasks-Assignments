let display = document.getElementById("display")
let startBTN = document.getElementById("start-btn")
let resetBTN = document.getElementById("reset-btn")

let seconds = 0;


function timeFormat(sec){
    let hrs = String(Math.floor(sec / 3600))
    let mints = String(Math.floor(sec % 3600))
    let secs = String(Math.floor(sec % 60))

    return `${hrs}:${mints}:${secs}`
}

function UpdateDisplay(){
    display.textContent = timeFormat(seconds)
}































