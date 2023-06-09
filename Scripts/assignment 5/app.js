// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = +(prompt("Enter first num"))
var num2 = +(prompt("Enter second num"))
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is: " + sum);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.



var num1 = +(prompt("Enter first num"))
var num2 = +(prompt("Enter second num"))
var sum = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is: " + sum);

var num1 = +(prompt("Enter first num"))
var num2 = +(prompt("Enter second num"))
var sum = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is: " + sum);

var num1 = +(prompt("Enter first num"))
var num2 = +(prompt("Enter second num"))
var sum = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is: " + sum);

var num1 = +(prompt("Enter first num"))
var num2 = +(prompt("Enter second num"))
var sum = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is: " + sum);



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


var num
document.write("Value after variable deceleration is: " + num);
num = 5
document.write("<br>Initial value is: " + num)
num++;
document.write("<br>Value after increment is: " + num)
num += 7
document.write("<br>Value after addition is: " + num)
num--;
document.write("<br>Value after decrement is: " + num);
var division = num % 3;
alert("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600
var output = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is:" + output)



// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var x = +prompt("Enter any table");
document.write("<h4>Table of " + x + "<br></h4>");
for (var i = 1; i <= 10; i++) {
    var result = i * x;
    document.write(x + " x " + i + "=" + result + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// °C = ( °F -32) x 5/9
// °F = ( °C X 5/9 ) + 32

var celsius = 25; 
document.write("<br><br>"+celsius+"°C is "+((celsius * 9 / 5) + 32)+"°F") ; 
var Fahrenheit = 70;
document.write("<br>"+Fahrenheit+"°F is "+(Fahrenheit - 32) * 5 / 9+"°C") ; 



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


var item1Price = 500;
var item2Price = 700;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 100;
var totalCost = (item1 * orderedItem1) + (item2 * orderedItem2) + charges;
document.write("<h2>shopping reciept</h2><br> Price of item 1 is: " + item1 +"<br> Quantity of item 1 is: " + orderedItem1 + 
    "<br>Price of item 2 is: "+ item2 + "<br>Quantity of orderd item 2 is:" + orderedItem2 + "<br>Shipping charges: " + charges + 
    "<br><br>Total cost of your order is: " + totalCost)


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 380;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 380;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var totalUS = 10;
var totalSR = 25;
var totalPKR = totalUS * 104.8 + totalSR * 28;

document.write("Total currency in PKR: " + totalPKR);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let numN = 3;
let result = ((numN + 5) * 10) / 2;
console.log(result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = new Date().getFullYear();
var birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output them to the screen like so: “They are either NN or NN years old”.
document.write("They are either " + age1 + " or " + age2 + " years old.");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2;
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "kitkat";


var currentAge = 15;


var maxAge = 65;


var amountPerDay = 3;


var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;


document.write(
  "I will need " +
    totalNeeded +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge +
    "."
);