// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var userInput = prompt("Enter a positive integer:");

var number = parseInt(userInput);

var roundOff = Math.round(number);

var floorValue = Math.floor(number);

var ceilValue = Math.ceil(number);

document.write("<h1>Number Information</h1>");
document.write("<p>Number: " + number + "</p>");
document.write("<p>Round Off: " + roundOff + "</p>");
document.write("<p>Floor Value: " + floorValue + "</p>");
document.write("<p>Ceil Value: " + ceilValue + "</p>");

//  2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var userInput = prompt("Enter a negative floating-point number:");
var number = parseFloat(userInput);
var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

// display reslut in browser

document.write("<h1>Number Information</h1>");
document.write("<p>Number: " + number + "</p>");
document.write("<p>Round Off: " + roundOff + "</p>");
document.write("<p>Floor Value: " + floorValue + "</p>");
document.write("<p>Ceil Value: " + ceilValue + "</p>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Prompt the user for a number
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Calculate the absolute value
var absoluteValue = Math.abs(number);

// Display the result in the browser
document.write("<h1>Absolute Value</h1>");
document.write(
  "<p>The absolute value of " + number + " is " + absoluteValue + "</p>"
);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


var diceValue = Math.floor(Math.random() * 6) + 1;


document.write("Dice value: " + diceValue);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var randomNum = Math.random();


var coinValue = randomNum < 0.5 ? "Heads" : "Tails";


document.write("Coin value: " + coinValue);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random number: " + randomNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var userInput = prompt("Enter your weight:");


var weight = userInput.replace(/[^\d.]/g, "");


document.write("Your weight is: " + weight + " kgs");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userInput === secretNumber) {
  alert("Congratulations! You guessed the right secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}