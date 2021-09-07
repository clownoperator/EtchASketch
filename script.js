// Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector('.container');

function makeGrid(col, row) {
    for(let i = 0 ; i < (row * col); i++){
        const div = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
 makeGrid(20,20)

 
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them.

window.onload = () => {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black' 
        
    }))
}

function rainbow () {
        const boxes = container.querySelectorAll('.box')
            boxes.forEach(box => box.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                box.style.backgroundColor = `rgb(${r},${g},${b})`
        }))
    }


function black() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black'  
    }))
}




// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

function reset() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.style.backgroundColor = 'white');
    let size = window.prompt ('Enter a canvas size.');
    makeGrid(size, size);
}    

function gridSize () {
    let size = window.prompt ('Enter a canvas size.');
    makeGrid(size, size);
}
     



