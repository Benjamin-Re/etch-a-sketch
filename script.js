const container = document.querySelector(".container");
// Add a grid of 16x16 square divs to container
let numItems = 16;
for(let i = 0; i < numItems**2; i++) {
    let newDiv = document.createElement("div");
    let size = 800/numItems;
    newDiv.style.cssText = `background-color: red; width: ${size}px; height: ${size}px`;
    container.appendChild(newDiv); 
}
// Change the div color on hover
// Get node list of all divs
let divs = document.querySelectorAll(".container>div");

// Loop through the node list and add an event listener to each div
divs.forEach(div => div.addEventListener("mouseover", changeColor));

// The function for the event listener adds a new class to the div
function changeColor(e){
    e.target.style.backgroundColor = "blue";
}