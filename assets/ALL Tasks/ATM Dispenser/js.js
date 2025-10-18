function withdraw(){
    let amount = parseInt(document.getElementById("amount").value)
    let output = document.getElementById("output")

    if(amount % 10 !== 0){
        output.textContent = "❌ Cannot dispense the exact amount with available denominations.";
        return;
    }
    // console.log(amount);
    

    let notes = [5000, 1000, 500, 100, 50, 20, 10]
    let result = {}

    

}

let btn = document.getElementById("btn")
btn.addEventListener("click", withdraw)



















