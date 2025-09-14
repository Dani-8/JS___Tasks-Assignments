// 1. Positive Integer
function positiveIntegerTask() {
    console.log("Task 1: Positive Integer");
    let num = +prompt("Enter a positive integer:");
    console.log("Number:", num);
    console.log("Round off:", Math.round(num));
    console.log("Floor:", Math.floor(num));
    console.log("Ceil:", Math.ceil(num));

    console.log("----------------------------------------");
}
positiveIntegerTask();

// 2. Negative Floating
function negativeFloatTask() {
    console.log("Task 2: Negative Float");
    let num = +prompt("Enter a negative floating number:");
    console.log("Number:", num);
    console.log("Round off:", Math.round(num));
    console.log("Floor:", Math.floor(num));
    console.log("Ceil:", Math.ceil(num));

    console.log("----------------------------------------");
}
negativeFloatTask();

// 3. Absolute Value
function absoluteValueTask() {
    console.log("Task 3: Absolute Value");
    let num = +prompt("Enter a number to find absolute value:");
    console.log("Number:", num);
    console.log("Absolute:", Math.abs(num));

    console.log("----------------------------------------");
}
absoluteValueTask();

// 4. Dice Roll
function diceRollTask() {
    console.log("Task 4: Dice Roll");
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Value:", dice);

    console.log("----------------------------------------");
}
diceRollTask();

// 5. Coin Toss
function coinTossTask() {
    console.log("Task 5: Coin Toss");
    let toss = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log("Coin:", toss);

    console.log("----------------------------------------");
}
coinTossTask();

// 6. Random 1-100
function randomNumberTask() {
    console.log("Task 6: Random 1-100");
    let num = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number:", num);

    console.log("----------------------------------------");
}
randomNumberTask();

// 7. Weight Parse
function weightTask() {
    console.log("Task 7: Weight Parse");
    let input = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
    let weight = parseFloat(input);
    console.log("Your weight is:", weight, "kgs");

    console.log("----------------------------------------");
}
weightTask();

// 8. Secret Number
function secretNumberTask() {
    console.log("Task 8: Secret Number");
    let secret = Math.floor(Math.random() * 10) + 1;
    let userGuess = +prompt("Guess the secret number between 1 and 10:");
    if (userGuess === secret) {
        console.log("Congrats! You guessed it right.");
    } else {
        console.log("Try again! The secret was:", secret);
    }

    console.log("----------------------------------------");
}
secretNumberTask();
