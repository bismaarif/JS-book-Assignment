// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
function power(a,b)
{
    var result = a**b
    return result
}

var a = prompt("Enter a")
var b = prompt("Enter b")
document.write("value of " + a + " raised to " + b + " is: " + power(a, b))


// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
function LeapYear(year)
{
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 )
    {
        console.log("It is a leap year");
    }
    else
    {
        console.log("It is not a leap year");
    }
}

var Year = +prompt("Enter a year to check leap or not: ")
LeapYear(Year);


// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function calculatSides(a, b, c) 
{

    var s = (a + b + c) / 2;
    return s;
}

function calculateArea() 
{
    var a = +prompt("Enter value of side one: ")
    var b = +prompt("Enter value of side two: ")
    var c = +prompt("Enter value of side three: ")
    var S = calculatSides(a, b, c)
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

console.log(calculateArea())



// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
function mainFunction() 
{
    var sub1 = +prompt("Enter marks of subject one")
    var sub2 = +prompt("Enter marks of subject two")
    var sub3 = +prompt("Enter marks of subject three")
    console.log(calculatAverage(sub1,sub2,sub3))
    console.log(calculatePercentage(sub1,sub2,sub3))
}

function calculatAverage(sub1,sub2,sub3)
{
    var average = Math.round(((sub1 + sub2 + sub3)/3))
    return "Average: " + average
}

function calculatePercentage(sub1,sub2,sub3)
{
    var percentage = Math.round(((sub1 + sub2 + sub3)/300)*100)
    return "Percentage " + percentage + "%"
}
mainFunction() 



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
function indexOf() 
{
    var paragraph = 'Hello, welcome to my code'
    console.log("String: " + paragraph)
    var searchTerm = 'w'
    console.log("Searching character: " + searchTerm)

    for (i = 0; i < paragraph.length; i++) 
    {
        if (paragraph[i] == searchTerm) {
            console.log("The index of " + searchTerm + " is: " + i)
            break;
        }
    }
}

indexOf()



// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
function removeVowels() {
    const string = 'hello this is me';
    const noVowels = string.replace(/[aeiou]/gi, '');
    console.log(noVowels);
}
removeVowels()



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
var distance = +prompt("Enter distance between two cities in km")

function inMeters() {
    var res = distance * 1000
    console.log("Distance in meters is: " + res)
}
inMeters()

function inFeet() {
    var res = distance * 3280.84
    console.log("Distance in meters is: " + res)
}
inFeet()

function inInches() {
    var res = distance * 39370.1
    console.log("Distance in meters is: " + res)
}
inInches()

function incCntimeters() {
    var res = distance * 100000
    console.log("Distance in meters is: " + res)
}
incCntimeters()



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
var perHour = 12.00




// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer

var amount = +prompt("Enter Amount for withdraw: ")
var domination = [100, 50, 10]
var notes = []
function calculateNotes() 
{
    for(var i=0 ; i < domination.length ; i++)
    {
     notes[i] = Math.floor(amount / domination[i] );
    amount = amount % domination[i];
    }

    console.log("Notes of 100 will be needed : " + notes[0]);
    console.log("Notes of 50 will be needed : " + notes[1]);
    console.log("Notes of 10 will be needed : " + notes[2]);
}
calculateNotes() 
