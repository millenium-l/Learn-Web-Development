// changing attribute

let img = document.getElementById("image");
img.src = "foodiesfeed.com_burger-with-melted-cheese.jpg";

img.style.width = "100%";
img.style.height = "auto";


// creating an element eg button
let button = document.createElement("button");
let container = document.getElementById("container");

container.appendChild(button);

let buttonText = document.createTextNode("ADD ITEM");
button.appendChild(buttonText);

// removing a document
let li = document.getElementsByClassName("remove");
li = li[0];

let ul = document.getElementById("list");
ul.removeChild(li);