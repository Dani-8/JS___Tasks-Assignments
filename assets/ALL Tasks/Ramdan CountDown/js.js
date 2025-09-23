function calculateDaysLeft(){
    let daysLeft = document.getElementById("days-left")
    let displayDays = document.getElementById("display-days")
    let note = document.getElementById("note")
    let toggleButton = document.getElementById("toggle-btn")

    let detailed = false


    let ramzanStartDate = new Date("Sep 30, 2025 00:00:00")
    let today = new Date()
    

    let differenceInTime = ramzanStartDate.getTime() - today.getTime()
    let differenceInDay = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    

    if(differenceInDay <= 0){
        displayDays.textContent = "Ramadan Mubarak!..."
        daysLeft.classList.add("hidden")
        toggleButton.classList.add("hidden")
        note.classList.add("hidden")
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


    toggleButton.addEventListener("click", function(){
        detailed = !detailed
        if(detailed){
            toggleButton.textContent = 'Show Simple Countdown';
        }else {
            toggleButton.textContent = 'Show Detailed Countdown';
        }
    })


}


document.addEventListener("DOMContentLoaded", calculateDaysLeft)

