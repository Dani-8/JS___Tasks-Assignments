let car = document.getElementById("car")
let trafficLights = document.querySelectorAll('.light');
let lane = document.getElementById("lane")

// ------------------------------------------------------------

let CAR_WIDTH = 60
let CAR_HEIGHT = 100
let ROAD_WIDTH = 445
let ROAD_HEIGHT = 700


let CAR_STOP_Y = 580
let CAR_FAST_Y = 150
let ACCEL_RATE = 3.0
let STEERING_SPEED = 5
let MAX_CAR_X = ROAD_WIDTH - CAR_WIDTH

let carTop = CAR_STOP_Y
let carX = (ROAD_WIDTH / 2) - (CAR_WIDTH / 2)
let keys = []


let LIGHT_CYCLE = {
    'green': 6000, 
    'yellow': 2500, 
    'red': 4000     
};
let LIGHT_ORDER = ['green', 'yellow', 'red'];
let trafficLightRule
// ------------------------------------------------------------


function trafficLight(color){
    currentLight = color

    trafficLights.forEach(light => {
        light.classList.remove("active")
        if(light.dataset.color === color){
            light.classList.add("active")
        }
    })

    warningMessage.classList.remove('active', 'yellow', 'red')
    let msg = ""

    if(color == "red"){
        lane.classList.add("stop")
        message = '🛑 STOP NOW 🛑'
        warningMessage.classList.add('red', 'active')
    }else{
        lane.classList.remove("stop")
        if(color == "yellow"){
            message = '⚠️ SLOW DOWN ⚠️'
            warningMessage.classList.add('yellow', 'active')
        }
    }

    warningMessage.textContent = msg
}

function startLight(){
    let lightIndex = 0
    
    function cycle(){
        let color = LIGHT_ORDER[lightIndex]
        trafficLight(color)

        let duration = LIGHT_CYCLE[color]
        lightIndex = (lightIndex + 1) % LIGHT_ORDER.length
        trafficLightRule = setInterval(cycle, duration)
    }
    cycle()
}



function game(){
    // TOP & DOWN
    if(keys["ArrowUp"]){
        carTop = Math.max(CAR_FAST_Y, carTop - ACCEL_RATE);
    }
    if(keys["ArrowDown"]){
        carTop = Math.min(CAR_STOP_Y, carTop + ACCEL_RATE);
    }
    car.style.top = carTop + 'px';
    // ------------------------------------------------------
    // LEFT & RIGHT
    if (keys['ArrowLeft']) {
        carX = Math.max(0, carX - STEERING_SPEED);
    }
    if (keys['ArrowRight']) {
        carX = Math.min(MAX_CAR_X, carX + STEERING_SPEED);
    }
    car.style.left = carX + 'px';
    
    

}

function loop(){
    game()
    requestAnimationFrame(loop)
}
loop()


document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft" || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown'){
        keys[e.key] = true
        e.preventDefault()
    }
})
document.addEventListener("keyup", (e) => {
    if(e.key === "ArrowLeft" || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown'){
        keys[e.key] = false
    }
})























