// Get DOM nodes
const container = document.querySelector('.container');
const reset_button = document.querySelector('#reset-button');

// Function to generate a square grid of a given size (number of squares per row/col)
// 
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
    // Format the grid using flexbox
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
        elem.style.border = '2px solid black'
    });
}

// Function to run when the reset button is pressed
function resetButtonPressed() {
    let size = prompt('Enter a grid size (1-100)');
}

// Generate Initial Grid
generateGrid(16);

// Generate new grid if user requests

