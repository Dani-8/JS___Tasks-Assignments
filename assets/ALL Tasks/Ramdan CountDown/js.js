function calculateDaysLeft(){
    let displayDays = document.getElementById("display-days")

    let ramzanStartDate = new Date("Feb 17, 2026 00:00:00")
    let today = new Date()
    

    let differenceInTime = ramzanStartDate.getTime() - today.getTime()
    let differenceInDay = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    

    if(differenceInDay > 0){
        displayDays.textContent = differenceInDay
    }else if(differenceInDay === 0){
        displayDays.textContent = "Today..."
    }else{
        displayDays.textContent = "In progress or passed..."
    }


}


document.addEventListener("DOMContentLoaded", calculateDaysLeft)

