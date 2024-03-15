// Define the writeCards function
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

// Call writeCards function
const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';
const messages = writeCards(names, event);
console.log(messages);

// Define the countDown function
function countDown(number) {
    // Check if the input is a positive integer
    if (number <= 0 || !Number.isInteger(number)) {
        console.log("Please provide a positive integer.");
        return;
    }

    // Start counting down from the given number
    while (number >= 0) {
        console.log(number);
        number--; // Decrement the number
    }
}

// Call countDown function
countDown(10);

