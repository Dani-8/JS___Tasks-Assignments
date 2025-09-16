// Grocery Bill
function groceryBillTask() {
    // Prices per 1kg
    let prices = {
    chicken: 500,
    rice: 250,
    sugar: 150,
    beef: 800
    };

    // Ask quantities
    let chickenQty = +prompt("How many kg Chicken?");
    let riceQty = +prompt("How many kg Rice?");
    let sugarQty = +prompt("How many kg Sugar?");
    let beefQty = +prompt("How many kg Beef?");

    // Calculate totals
    let chickenTotal = chickenQty * prices.chicken;
    let riceTotal = riceQty * prices.rice;
    let sugarTotal = sugarQty * prices.sugar;
    let beefTotal = beefQty * prices.beef;

    let grandTotal = chickenTotal + riceTotal + sugarTotal + beefTotal;

    // Build receipt
    // let receipt = "        🧾 Grocery Receipt\n";
    // receipt += "---------------------------------\n";
    // receipt += "Item     Qty   Price   Total\n";
    // receipt += "Chicken  " + chickenQty + "kg   " + prices.chicken + "   " + chickenTotal + "\n";
    // receipt += "Rice     " + riceQty + "kg   " + prices.rice + "   " + riceTotal + "\n";
    // receipt += "Sugar    " + sugarQty + "kg   " + prices.sugar + "   " + sugarTotal + "\n";
    // receipt += "Beef     " + beefQty + "kg   " + prices.beef + "   " + beefTotal + "\n";
    // receipt += "---------------------------------\n";
    // receipt += "Grand Total = " + grandTotal + " PKR";

// Build receipt
let receipt = `
      🧾 Grocery Receipt
---------------------------------
Item     Qty   Price   Total
Chicken  ${chickenQty}kg   ${prices.chicken}     ${chickenTotal}
Rice     ${riceQty}kg   ${prices.rice}     ${riceTotal}
Sugar    ${sugarQty}kg   ${prices.sugar}     ${sugarTotal}
Beef     ${beefQty}kg   ${prices.beef}     ${beefTotal}

---------------------------------

Grand Total = ${grandTotal} PKR
`

    document.getElementById("out1").innerText = receipt;
}

// Roll No Search
function rollNoSearchTask() {
    let rollNos = [101, 102, 103, 104, 105];
    let search = +prompt("Enter roll number to search:");

    if (rollNos.includes(search)) {
    document.getElementById("out2").innerText =
        "Roll No " + search + " found ✅";
    } else {
    document.getElementById("out2").innerText =
        "Roll No " + search + " not found ❌";
    }
}