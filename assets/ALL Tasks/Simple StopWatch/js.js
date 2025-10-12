let display = document.getElementById("display")
let startBTN = document.getElementById("start-btn")
let resetBTN = document.getElementById("reset-btn")

let seconds = 0;
let running = false

function timeFormat(ms){
    let milliSeconds = String(Math.floor((ms % 1000)) / 10).padStart(2, "0")
    let totalSeconds = String(Math.floor(ms / 1000))
    let secs = String(Math.floor(totalSeconds % 60)).padStart(2, "0")
    let mints = String(Math.floor((totalSeconds / 60) % 60)).padStart(2, "0")
    let hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0")

    return `${hrs}:${mints}:${secs}.<span class="milli">${milliSeconds}</span>`;
}

function UpdateDisplay(){
    seconds += 10
    display.innerHTML = timeFormat(seconds)
}



// startBTN.addEventListener("click", () => {
//     timer = setInterval(UpdateDisplay, 10);

// })

function startStopWatch(){
    if(running){
        running = false
        clearInterval(timer)
        
        startBTN.textContent = "Resume"
        startBTN.classList.remove('pause-btn');
        startBTN.classList.add('start-btn');

    }else{
        running = true

        timer = setInterval(UpdateDisplay, 10);

        startBTN.textContent = "Pause"
        startBTN.classList.remove('start-btn');
        startBTN.classList.add('pause-btn');
        
    }
}
startBTN.addEventListener("click", startStopWatch)

resetBTN.addEventListener("click", () => {
    clearInterval(timer)
    seconds = 0
    UpdateDisplay()
})




























