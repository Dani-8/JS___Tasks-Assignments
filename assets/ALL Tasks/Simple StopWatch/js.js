let display = document.getElementById("display")
let startBTN = document.getElementById("start-btn")
let resetBTN = document.getElementById("reset-btn")

let seconds = 0;


function timeFormat(sec){
    let hrs = String(Math.floor(sec / 3600)).padStart(2, "0")
    let mints = String(Math.floor((sec % 3600) / 60)).padStart(2, "0")
    let secs = String(Math.floor(sec % 60)).padStart(2, "0")

    return `${hrs}:${mints}:${secs}`
}

function UpdateDisplay(){
    display.textContent = timeFormat(seconds)
}



startBTN.addEventListener("click", () => {
    setInterval(() => {
        seconds++
        UpdateDisplay()
    }, 5);

})




























