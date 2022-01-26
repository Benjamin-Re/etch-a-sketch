// fields
const container = document.querySelector(".container");
let rainbow = false;
let gray = false;
let erase = false;
let color = "#2f75ff";
let numItems = undefined;



function createGrid(numItems) {
    if(numItems === undefined){
        numItems = 16;
    }
    for (let i = 0; i < numItems ** 2; i++) {
        let newDiv = document.createElement("div");
        let size = 800 / numItems;
        newDiv.style.cssText = `background-color: white; width: ${size}px; height: ${size}px`;
        container.appendChild(newDiv);
    }
    // Set default color
    color = "#2f75ff";
    // Change the div color on hover
    // Get node list of all divs
    let divs = document.querySelectorAll(".container>div");

    // Loop through the node list and add an event listener to each div
    // Create a counter to keep track of the number of events
    divs.forEach(div => div.addEventListener("mouseover", changeColor));
    // Give each div a counter attribute
    divs.forEach(div => div.setAttribute("data-count", 1));
}



// The function for the event listener adds a new class to the div
function changeColor(e) {
    
    if(rainbow){
        let red = Math.floor(Math.random()*255)+1;
        let green = Math.floor(Math.random()*255)+1;
        let blue = Math.floor(Math.random()*255)+1;
        color = `rgb(${red},${green},${blue})`;
    } else if (gray){
        let currentData = e.target.getAttribute("data-count");
        if(currentData < 10){
            e.target.setAttribute("data-count", +currentData+1);
        }
        color = `rgb(0, 0, 0, ${currentData/10})`; 
    } else if (erase) {
        color = "white";
    }
    e.target.style.backgroundColor = color;
}

// Configure button to clear the current grid & ask user for number of rows
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);
function clear() {
    // Delete the old grid
    container.textContent="";
    // Create a new grid in the same space
    createGrid(numItems);
}

// Configure rainbow button to draw rainbow colors
// Get the btn
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", drawRainbow);

function drawRainbow(){
    if(rainbow){
        rainbow=false;
    } else {
        rainbow = true;
        gray = false;
        erase = false;
    }
    
}

// Get gray scale button
const grayBtn = document.querySelector(".gray");
grayBtn.addEventListener("click", drawGray);

function drawGray(){
    if(gray){
        gray=false;
    } else {
        gray = true;
        rainbow = false;
        erase = false;
    }
}

// Get eraser button
const eraseBtn = document.querySelector(".eraser");
eraseBtn.addEventListener("click", drawErase);

function drawErase(){
    if(erase){
        erase=false;
    } else {
        erase = true;
        rainbow = false;
        gray = false;
    }
}

// Get color picker
const picker = document.querySelector(".picker");
picker.addEventListener("input", drawPicker);

function drawPicker(e){
    color = e.target.value;
    console.log(e.target.value);
    erase = false;
    rainbow = false;
    gray = false;
}

// Get the size range
const sizeRange = document.querySelector(".size");
sizeRange.addEventListener("change", setSize);

function setSize(e){
    numItems = e.target.value;
    clear();
}

// Create the grid on page load
createGrid();