

// Declare an empty array using JS literal notation to store student names in future\
var studName=[];


// Declare an empty array using JS object notation to store student names in future.
var studName={};


// Declare and initialize a strings array
var stringArray=["mango","apple","orange",""];


// Declare and initialize a numbers array.
var numbersArray=[12, 67, 2003];


// Declare and initialize a boolean array.
var booleanArray=[true,false,true];


// Declare and initialize a mixed array.
var mixedArray=["Mango",12,13,true];


// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
var qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MSC", "MS", "M.PHIL", "PHD"];
document.write("<h3>7-Qualifications:</h3>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}


// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students
document.write("<h3>8-Score of a students</h3>")
var studName=["Bisma","Hadi","Asad"];
var score=[330,410,762];
var total=500;
var percentage1=(score[0]/total)*100;
var percentage2=(score[1]/total)*100;
var percentage3=(score[2]/total)*100;
document.write("Score of "+studName[0]+" is "+score[0]+ ". Percentage: "+percentage1+"% <br>");
document.write("Score of "+studName[1]+" is "+score[1]+ ". Percentage: "+percentage2+"% <br>");
document.write("Score of "+studName[2]+" is "+score[2]+ ". Percentage: "+percentage3+"%");



// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser

document.write("<h3>Question:9</h3>")
var colorName = ["red", "blue", "green"];
document.write("<h4>Original Array:</h4>");
document.write(colorName);

// Part-a

var addBeg = prompt("What color you want to add in the beginning");
document.write("<h4>Add color in the begnning of an  array:</h4>");
colorName.unshift(addBeg);
document.write(colorName);

// Part-b

var addEnd = prompt("What color you want to add in the end of an array");
document.write("<h4>Add color in the end of an  array:</h4>");
colorName.push(addEnd);
document.write(colorName);

// Part-c

var addBeg1 = prompt("What color you want to add in the beginning of an array");
var addBeg2 = prompt("What another color you want to add in the beginning of an array");
document.write("<h4>Add two or more colors in the begnning of an  array:</h4>");
colorName.unshift(addBeg1, addBeg2);
document.write(colorName);

// Part-d

document.write("<h4>Delete first color from the begnning of an  array:</h4>");
colorName.shift(colorName[0]);
document.write(colorName);

// Part-e

document.write("<h4>Delete last color from the begnning of an  array:</h4>");
colorName.pop(colorName[0]);
document.write(colorName);

// Part-f

var index = +prompt("Enter the position of an array you want to add color");
var color = prompt("Enter your color");
colorName.splice(index, 0, color)
document.write("<h4>Updated array:</h4>");
document.write(colorName);

// Part-g
var deleteIndex = +prompt("At which index in an array you want to delete the color.");
var deleteColor = +prompt("How many colors you want to delete");
if (deleteIndex >= 0 && deleteIndex < colorName.length) {
    if (deleteColor > 0 && deleteColor <= colorName.length - deleteIndex) {
        colorName.splice(deleteIndex, deleteColor)
    } else {
        document.write("Invalid input")
    }
} else {
    document.write("Invalid input")
}
document.write("<h4>Updated array:</h4>");
document.write(colorName)


// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
function compareNum(a, b) {
    return a - b
}
var studScore = [459, 236, 312, 119, 420, 99]
document.write("<h4>Students socre:</h4> "+studScore)
var sorted = studScore.sort(compareNum);
document.write("<h4>10-Sorted array in an ascending order: </h4>" +sorted)


// Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar","Faislabad"];
document.write("<h4>11-Cities array: </h4>"+city)
var selectedCities=city.slice(2,5);
document.write("<h4>Selected cities: </h4>"+selectedCities)


// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
document.write("<h4>12-Converting array into string<h4/>")
var arr = ["This", "is","my","cat"];
var string = arr.join(" ")
document.write(string)


// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

document.write("<h3>13-First In First Out (FIFO)</h3>")
var FIFO=["keyboard","monitor","mouse","CPU"]
document.write(`<h4>Devices:</h4>${FIFO}`)
document.write("<h4>Out:</h4>")
document.write( FIFO.shift([0]))
document.write("<h4>Out:</h4>")
document.write( FIFO.shift([1]))
document.write("<h4>Out:</h4>")
document.write( FIFO.shift([2]))
document.write("<h4>Out:</h4>")
document.write( FIFO.shift([3]))


// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var values = []; 
values.push("value 1"); 
values.push("value 2"); 
values.push("value 3"); 

console.log("Original array: " + values); 

var reversedValues = []; 
while (values.length > 0) 
  reversedValues.push(values.pop()); 

console.log("Reversed array: " + reversedValues); // display reversed array in console


// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

document.write("<h3>15-Drop down</h3>")
var manufacturers=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
dropdown=()=>{
  document.write("<select>") 
  for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value=" + manufacturers[i] +">" + manufacturers[i] + "</option>");
  }

  document.write("</select>");
}
dropdown();