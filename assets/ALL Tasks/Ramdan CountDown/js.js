function calculateDaysLeft(){
    let daysLeft = document.getElementById("days-left")
    let displayDays = document.getElementById("display-days")
    let note = document.getElementById("note")
    let toggleButton = document.getElementById("toggle-btn")

    let ramzanStartDate = new Date("Sep 22, 2025 00:00:00")
    let today = new Date()
    

    let differenceInTime = ramzanStartDate.getTime() - today.getTime()
    let differenceInDay = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    

    if(differenceInDay <= 0){
        displayDays.textContent = "Ramadan Mubarak!..."
        daysLeft.classList.add("hidden")
        toggleButton.classList.add("hidden")
        note.classList.add("hidden")
    }


}


document.addEventListener("DOMContentLoaded", calculateDaysLeft)

