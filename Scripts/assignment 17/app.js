// 1. Create a signup form and display form data in your web 
// page on submission.
function display()
{
    var res1 = document.getElementById("Fname").value;
    var res2 = document.getElementById("Lname").value;
    var res3 = document.getElementById("email").value;
    var res4 = document.getElementById("password").value;
   
    document.getElementById("fname-display").innerHTML = "<br>" + "First Name: " + res1
    document.getElementById("lname-diplay").innerHTML = "Last Name: " + res2
    document.getElementById("email-display").innerHTML = "E-mail: " + res3
    document.getElementById("password-display").innerHTML = "Password: " + res4 
}


// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed. 
var firstHalf = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur dolorum quod fugit perferendis ea eos voluptates, aspernatur sequi provident voluptate. Ducimus exercitationem totam a dolor magnam voluptates minima odit!" 
document.getElementById("paragraph").innerHTML = firstHalf;

function readMore()
{
    var secondHalf = " lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur dolorum quod fugit perferendis ea eos voluptates, aspernatur sequi provident voluptate. Ducimus exercitationem totam a dolor magnam voluptates minima odit!"

    var completePara = firstHalf + secondHalf

    document.getElementById("paragraph").innerHTML = completePara;
    document.getElementById("remove").innerHTML = "";
}


// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row

function rowDelete(o) 
{
    var element = o.parentNode.parentNode;
    element.parentNode.removeChild(element);
}

function rowDEdite(o) 
{
    var ele = o.parentNode.parentNode;
    
}