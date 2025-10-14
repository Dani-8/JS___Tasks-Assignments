let car = document.getElementById("car")
// ------------------------------------------------------------

let CAR_STOP_Y = 580
let CAR_FAST_Y = 150
let ACCEL_RATE = 3.0
let STEERING_SPEED = 10
let CAR_X = 0

let carX
let carTop = CAR_STOP_Y
let keys = {}
// ------------------------------------------------------------





function game(){
    if(keys["ArrowUp"]){
        carTop = Math.max(CAR_FAST_Y, carTop - ACCEL_RATE);
    }
    if(keys["ArrowDown"]){
        carTop = Math.min(CAR_STOP_Y, carTop + ACCEL_RATE);
    }
    car.style.top = carTop + 'px';


    if(keys["ArrowLeft"]){
        carX = Math.max(0, carX - STEERING_SPEED);
    }
    if(keys["ArrowRight"]){
        carX = Math.min(CAR_X, carX + STEERING_SPEED);
    }
    car.style.left = carX + 'px';
    
    

}
// Run the game loop continuously so key state is checked each frame
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























