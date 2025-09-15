// 1
function positiveIntegerTask() {
    let num = +prompt("Enter a positive integer:");
    document.getElementById("out1").innerText =
    `Number: ${num}\nRound off: ${Math.round(num)}\nFloor: ${Math.floor(num)}\nCeil: ${Math.ceil(num)}`;
}

// 2
function negativeFloatTask() {
    let num = +prompt("Enter a negative floating number:");
    document.getElementById("out2").innerText =
    `Number: ${num}\nRound off: ${Math.round(num)}\nFloor: ${Math.floor(num)}\nCeil: ${Math.ceil(num)}`;
}

// 3
function absoluteValueTask() {
    let num = +prompt("Enter a number:");
    document.getElementById("out3").innerText =
    `Number: ${num}\nAbsolute: ${Math.abs(num)}`;
}

// 4
function diceRollTask() {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("out4").innerText = `Dice Value: ${dice}`;
}

// 5
function coinTossTask() {
    let toss = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById("out5").innerText = `Coin: ${toss}`;
}

// 6
function randomNumberTask() {
    let num = Math.floor(Math.random() * 100) + 1;
    document.getElementById("out6").innerText = `Random Number: ${num}`;
}

// 7
function weightTask() {
    let input = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
    let weight = parseFloat(input);
    document.getElementById("out7").innerText = `Your weight is: ${weight} kgs`;
}

// 8
function secretNumberTask() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess = +prompt("Guess a number between 1 and 10:");
    if (guess === secret) {
    document.getElementById("out8").innerText = "Congrats! You guessed it right.";
    } else {
    document.getElementById("out8").innerText = `Try again! The secret was: ${secret}`;
    }
}
