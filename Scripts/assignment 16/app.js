// 1. Show an alert box on click on a link.
function showAlert()
{
    alert("You clicked the link")
}

// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.
function imageAlert()
{
    alert("Thanks for purchasing a phone from us") 
}

// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.
function rowDelete(o) 
{
    var element = o.parentNode.parentNode;
    element.parentNode.removeChild(element);
}


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser
var data = 0
document.getElementById("value").innerText = data;

function increase()
{
    data = data +1;
    document.getElementById("value").innerText = data;

}

function decrease()
{
    data = data - 1;
    document.getElementById("value").innerText = data;

}