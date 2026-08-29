// Store the secret number
const secretNumber = 7;

// Store the guess (you can change this value to test)
let guess = 5;

// Validate that guess is a number before comparing
if (typeof guess !== "number" || isNaN(guess)) {
    console.log("Invalid guess. Please enter a number.");
} else {
    // Compare guess to secretNumber
    if (guess === secretNumber) {
        console.log("Correct!");
    } else {
        console.log("Try again next time!");
    }
}

