// ..........................MATH EXPRESSIONS...........................
//...........................Assignment # 6 ............................

// 1. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser: 


var a =10;
document.write("RESULT"+ "<br>")
document.write("The value of a is:"+ a + "<br>")
document.write("........................."+ "<br>")
 ++a;
 
document.write("The value of ++a is:"+ a + "<br>")
document.write("Now the value of a is:"+ a + "<br>")
a++;

document.write("The value of a++ is:"+ a + "<br>")
document.write("Now the value of a is:"+ a + "<br>")

--a;
document.write("The value of --a is:"+ a + "<br>")
document.write("Now the value of a is:"+ a + "<br>")

a--;
document.write("The value of a-- is:"+ a + "<br>")
document.write("Now the value of a is:"+ a + "<br>")

// 2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
//--a;
//tpre decrement operator will subtarct 1 from a ,now the value of a is 1 
// --a - --b;
//initially the value of a is 2 and after using pre decrement,the value of a will be 1
//initially the value of b is 1 and after using pre decrement,the value of a will be 0
//so 1-0=1
// --a - --b + ++b;
//initially the value of a is 2 and after using pre decrement,the value of a will be 1
//initially the value of b is 1 and after using pre decrement,the value of a will be 0
//now the value of b is 0 and after using pre increment,the value of b will be 1

//so 1-0+1=2

// --a - --b + ++b + b--; 
//initially the value of a is 2 and after using pre decrement,the value of a will be 1
//initially the value of b is 1 and after using pre decrement,the value of a will be 0
//now the value of b is 0 and after using pre increment,the value of b will be 1

//so 1-0+1+1=3


var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 

document.write("The value of a is: " + a +"<br>");
document.write("The value of b is: " + b  +"<br>");
document.write("The value of result is: " + result +"<br>");

// 3. Write a program that takes input a name from user & 
// greet the user. 

var userName=prompt("type your name");
alert("Welcome "+userName);

// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default. 

var x= prompt("Enter a number to generate a Table" );
console.log(x);
if(x=="")
{
   x=5; 
}
    for (let j = 1; j <=10; j++) 
    {
        res=x*j;
         document.write(x+"x" +j+"="+res+"<br>");    
    }

 // 6. Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

var subject1=prompt("Type Subject Name");
var subject2=prompt("Type Subject Name");
var subject3=prompt("Type Subject Name");
var totalMark1=100;
var totalMark2=100;
var totalMark3=100;
var totalMarks=totalMark1+totalMark2+totalMark3;
var obtainedMarks1 =+ prompt("Type marks of "+ subject1 );
var obtainedMarks2 =+ prompt("Type marks of "+ subject2);
var obtainedMarks3 =+ prompt("Type marks of "+ subject3);
var obtainedMarks =obtainedMarks1+ obtainedMarks2+ obtainedMarks3;
var percentage;

percentage=Math.round((obtainedMarks/totalMarks) *100);
document.write("Obtained Marks: " +obtainedMarks+"<br>");
document.write("Percentage: " + percentage +"%");