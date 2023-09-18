const container = document.querySelector('.container');

// Alter the DOM to build the grid structure with divs
let grid_size = 16;
for (let i = 0; i < grid_size; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let i = 0; i < grid_size; i++) {
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
