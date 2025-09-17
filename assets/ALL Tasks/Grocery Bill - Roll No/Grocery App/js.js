let groceriesItems = [
    { id: 'chicken', name: 'Chicken', price: 425, unit: 'kg' },
    { id: 'beef', name: 'Beef', price: 1100, unit: 'kg' },
    { id: 'rice', name: 'Rice', price: 325, unit: 'kg' },
    { id: 'potatoes', name: 'Potatoes', price: 120, unit: 'kg' },
    { id: 'onions', name: 'Onions', price: 150, unit: 'kg' },
    { id: 'tomatoes', name: 'Tomatoes', price: 200, unit: 'kg' },
    { id: 'bananas', name: 'Bananas', price: 180, unit: 'dozen' },
    { id: 'milk', name: 'Milk', price: 220, unit: 'liter' },
    { id: 'eggs', name: 'Eggs', price: 300, unit: 'dozen' },
    { id: 'yogurt', name: 'Yogurt', price: 180, unit: 'kg' },
    { id: 'cheese', name: 'Cheese', price: 850, unit: 'pack' },
    { id: 'flour', name: 'Flour', price: 130, unit: 'kg' },
    { id: 'cooking-oil', name: 'Cooking Oil', price: 600, unit: 'liter' },
    { id: 'lentils', name: 'Lentils', price: 350, unit: 'kg' },
    { id: 'spices', name: 'Spices', price: 250, unit: 'pack' },
    { id: 'tea-bags', name: 'Tea Bags', price: 400, unit: 'box' },
    { id: 'coffee', name: 'Coffee', price: 750, unit: 'jar' },
    { id: 'soap', name: 'Soap', price: 100, unit: 'bar' },
    { id: 'detergent', name: 'Detergent', price: 500, unit: 'pack' },
    { id: 'paper-towels', name: 'Paper Towels', price: 250, unit: 'roll' }

]

let itemCards = document.querySelectorAll('.item-card');
let generateBtn = document.getElementById("generate-btn")
let clearBtn = document.getElementById("clear-btn")
let billReceiptDiv = document.getElementById('bill-receipt');


itemCards.forEach(card => {
    card.addEventListener("click", (e) => {
        let inputContainer = card.querySelector(".input-cont")
        let qtyInput = card.querySelector(".item-input")

        if(e.target.tagName !== "INPUT"){
            if(card.classList.contains("selected")){
                card.classList.remove("selected")
                inputContainer.classList.remove('active');
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
        qtyInput.value = ""
    })
    
    billReceiptDiv.innerHTML = '<p>Your bill will be generated here.</p>';
}



function generateBill(){
    let quantities = {}

    groceriesItems.forEach(item => {
        let qtyInput = document.getElementById(`${item.id}-qty`)
        quantities[item.id] = parseFloat(qtyInput.value)
    })

    let billItems = []
    let totalBill = 0

    groceriesItems.forEach(item => {
        let quantity = quantities[item.id]
        if(quantity > 0){
            let subTotal = quantity * item.price
            totalBill += subTotal
            billItems.push({
                name: item.name,
                quantity: quantity,
                unit: item.unit,
                price: item.price,
                subTotal: subTotal
            })
        }
    })


    if(billItems.length === 0){
        billReceiptDiv.innerHTML = '<p>Your bill will be generated here...</p>';
        return
    }


    // BUILD RECEIPT
    let billHTML = `
        <table class="receipt-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th style="text-align: right;">Subtotal (Rs.)</th>
                </tr>
            </thead>
            <tbody>
    `

    billItems.forEach(item => {
        billHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity} ${item.unit}</td>
                <td>Rs. ${item.price}</td>
                <td style="text-align: right;">Rs. ${item.subTotal.toFixed(2)}</td>
            </tr>
        `
    })

    billHTML += `
            </tbody>
        </table>
    `

    billHTML += `
        <div class="receipt-total">
            <p class="receipt-total-label">Total:</p>
            <p class="receipt-total-amount">Rs. ${totalBill.toFixed(2)}</p>
        </div>
        <p class="receipt-footer">Thank you for shopping with us!</p>
    `;



    billReceiptDiv.innerHTML = billHTML;
}


generateBtn.addEventListener('click', generateBill);
clearBtn.addEventListener("click", clearAll)

















