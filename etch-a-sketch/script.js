const container = document.querySelector('.container');
let gridSize = 16;



function createGrid() {

    container.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    
        square.style.width = `calc(100% / ${gridSize})`;
        square.style.height = `calc(100% / ${gridSize})`;
    
        // square.dataset.darkness = 0; // Custom data attribute to track darkening level

    
        square.addEventListener('mouseenter', () => {

            
             if (isEraserActive) {
                    square.style.backgroundColor = 'white';
                } else {
                    if (isRGBActive) {
                        square.style.backgroundColor = getRandomRGB();
                    } else {
                        square.style.backgroundColor = 'black';
                    }
                }

        });
    }
    
}

createGrid();




const button = document.getElementById('resize-button');

// Add an event listener to the button
button.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter the number of squares per side (max 100):"));

    // Ensure the new size is a valid number and within the limit (1 to 100)
    if (newSize <= 100 && newSize > 0) {
        gridSize = newSize;
        createGrid()
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});







function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Red: random number between 0 and 255
    const g = Math.floor(Math.random() * 256); // Green: random number between 0 and 255
    const b = Math.floor(Math.random() * 256); // Blue: random number between 0 and 255
    return `rgb(${r}, ${g}, ${b})`; // Return the color as an RGB string
}



const resetColor = document.getElementById('reset-color');

resetColor.addEventListener('click', () => {
    createGrid()
});



// const blackWhiteButton = document.getElementById('black-white-button');
const rgbButton = document.getElementById('rgb-button');
const eraserButton = document.getElementById('eraser-button');

let isEraserActive = false;

eraserButton.addEventListener('click', () => {
    isEraserActive = !isEraserActive; // Toggle eraser mode on/off
    eraserButton.style.backgroundColor = isEraserActive ? 'blue' : ''; // Optional: change button color to show active mode
    eraserButton.style.color = isEraserActive ? 'white' : ''; // Optional: change button color to show active mode

});


let isRGBActive = false;


rgbButton.addEventListener('click', () => {
    isRGBActive = !isRGBActive; // Toggle eraser mode on/off
    rgbButton.style.backgroundColor = isRGBActive ? '#DC143C' : ''; // Optional: change button color to show active mode
    rgbButton.style.color = isRGBActive ? 'white' : ''; // Optional: change button color to show active mode

});







