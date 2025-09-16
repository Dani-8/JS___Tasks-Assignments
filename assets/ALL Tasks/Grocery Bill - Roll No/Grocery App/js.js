let groceriesItems = [
    {id: "chicken", name: "Chicken", price: 600},
    {id: "beef", name: "Beef", price: 1100},
    {id: "beef", name: "Beef", price: 1100},

]

let itemCards = document.querySelectorAll('.item-card');
let generateBtn = document.getElementById("generate-id")
let clearBtn = document.getElementById("clear-id")


itemCards.forEach(card => {
    card.addEventListener("click", (e) => {
        let inputContainer = card.querySelector(".input-cont")
        let qtyInput = card.querySelector(".item-input")

        if(e.target.tagName !== "INPUT"){
            if(card.classList.contains("selected")){
                card.classList.remove("selected")
                inputContainer.classList.remove('active');
                qtyInput.value = '0';
            }else{
                card.classList.add("selected")
                inputContainer.classList.add('active');
                qtyInput.focus()
            }
        }
    })
})


function clearAll(){
    itemCards.forEach(card => {
        card.classList.remove("selected")
        let inputContainer = card.querySelector(".input-cont")
        inputContainer.classList.remove("active")
        let qtyInput = card.querySelector(".item-input")
        qtyInput.value = "0"
    })

}





















