//first we create a function for multiplying an image we got from the internet
//we create a for loop with the loop control variable being i
//we set while i is less than amount we create a document element
// and we set the img source for the image we have taken
// we then append the variable to the end of the body of the document

function multiplyImages() {
  amount = 10;
  for (var i = 1; i < amount; i++) {
    let img_els = document.createElement("img");
    img_els.src =
      "https://vignette.wikia.nocookie.net/dragonball/images/1/1c/SnakeWayEp06.png/revision/latest?cb=20120531174715";
    document.body.appendChild(img_els);
  }
}

//we create a document element and save the element in a img variable
//we set the img source to an img we took from the internet
//append the variable to the body of the document
var img = document.createElement("img");
img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf0aff8-3a0c-4f97-97c6-3879137d6c1e/da6juqa-4e6908c7-db39-4136-825d-fbe9e4fe8e92.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mY2YwYWZmOC0zYTBjLTRmOTctOTdjNi0zODc5MTM3ZDZjMWUvZGE2anVxYS00ZTY5MDhjNy1kYjM5LTQxMzYtODI1ZC1mYmU5ZTRmZThlOTIuanBnIn1dXX0.i2kbApv6U4jlmQmy1Y3qSDFc-eOTaQ9_pyOXZQNoKzw";
document.body.appendChild(img);


//we set the img height and width to 500 px
img.style.height = "500px";
img.style.width = "500px";


//we create a button element and save in newButton variable
//we set the text content of the newButton to cool trick
//append the variable to the body of the document
var newButton = document.createElement("button");
newButton.textContent = "cooltrick!";
document.body.appendChild(newButton);


//we add an event listener to the newButton
//we set a click event
//for the event we see if the type is set to "click"
//if type if click and the user clicks the button, we prompt the user to see if they want to change the image
//If the response is "yes" the source of the first img changes to another source, a gif source
//else if the response is no we alert the user to press D to end the entire webpage
newButton.addEventListener("click", (event) =>
{ if (event.type == "click")
  var response = prompt("Do you want to change the image");
  if (response === "yes" || response === "Yes")
  img.src = "https://i.makeagif.com/media/9-08-2015/1wz4fT.gif";
  else
    if (response === "no")
      {alert("press D to end this website")}

});

//we create another button element and save the data in a variable
//we add an event listener
//the type is a "mouseover" where if you just move the mouse over the button 
//the event is if the event type is "mouseover", we prompt ther user if they want to see something cool
var buttonOne = document.getElementById("buttonOne")
buttonOne.addEventListener("mouseover", (event) => {
  if (event.type === "mouseover")
    var responseTwo = prompt("You want to see something cool?")
  
//if the response is "yes", we change the source of the same img to a different source than before
//then alert the user there going to see something cool
//else if they type anything but yes, they will get an alert to press D to end the website
    if (responseTwo === "yes" || responseTwo === "Yes")
      {img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3B3dTF4YnZidGJ4Znhic2g1NHhmY25wb25pdzM1azZmdm92enIyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3UP4fTE6QfuoooLaC/giphy.gif";
      alert("Your going to see something really cool!")}

    else
        alert("press D to end this Website")



     
});

//then we create a event listener for the entire website
//the listener type is for a keydown, where the user presses a certain key something will happen
//if the event key == "D" the document will write to the entire screen "GAME OVER"

window.addEventListener("keydown", (event) => {
  if (event.key == "d")
    document.write("GAME OVER")
});


//We call the multiplyImages function we created at the beginning
multiplyImages();

