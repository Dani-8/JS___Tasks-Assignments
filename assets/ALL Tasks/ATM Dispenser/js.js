function withdraw(){
    let amount = parseInt(document.getElementById("amount").value)
    let output = document.getElementById("output")

    if(amount % 10 !== 0){
        output.textContent = "❌ Cannot dispense the exact amount with available denominations.";
        return;
    }
    

    let smallNotesSave = amount > 1000 ? 400 : 0
    let remaining = amount - smallNotesSave

    let notes = [5000, 1000, 500, 100, 50, 20, 10]
    let result = {}


    for (let note of notes) {
        result[note] = 0;
        if (note >= 500 && remaining >= note) {
        result[note] = Math.floor(remaining / note);
        remaining %= note;
        }
    }
    

    remaining += smallNotesSave
    for(let note of notes){
        while(remaining >= note){
            result[note]++
        }
        
    }


}

let btn = document.getElementById("btn")
btn.addEventListener("click", withdraw)



















