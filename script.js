// Function to generate a square grid of a given size (number of squares per row/col)
// that fills a 960x960px square
function generateGrid(gridSize) {
    // Remove previous grid if it exists
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    // Alter the DOM to build the grid structure with divs
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let i = 0; i < gridSize; i++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
    // Format the grid using flexbox and add class to change color on mouseover
    const rows = document.querySelectorAll('.row');
    const squares = document.querySelectorAll('.square');

    container.style.display = 'flex';
    container.style['flex-direction'] = 'column';
    rows.forEach(elem => {
        elem.style.display = 'flex';
        elem.style.flex = '1 1 auto';
    });

    squares.forEach(elem => {
        elem.style.flex = '1 1 auto';
        elem.style.border = '1px solid rgb(225,225,225)'
        elem.addEventListener('mouseover', () => {elem.classList.add('hover');}, {once: true})
    });
}

// Function to run when the reset button is pressed
function resetButtonPressed() {
    let size = parseInt(prompt('Enter a grid size (1-100)'));
    if (size >= 1 && size <= 100) {
        generateGrid(size);
    } else {
        alert('Invalid entry. Enter an integer between 1 and 100.')
        resetButtonPressed();
    }
}


// Get DOM nodes
const container = document.querySelector('.container');
const reset_button = document.querySelector('#reset-button');

// Generate Initial Grid
generateGrid(16);

// Generate new grid if user hits the reset button
reset_button.addEventListener('click', resetButtonPressed);
