let car = document.getElementById("car")


let keys = {}

function game(){
    if(keys["ArrowUp"]){
        
    }
    

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























