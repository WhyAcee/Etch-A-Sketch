const gridContainer = document.querySelector('.grid-container')
const gridItem = document.querySelector('.grid-item')

let gridSize = 16; 
// Creates a 16x16 grid
function createGrid() {
    clearGrid()
    for(let i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        })
        gridContainer.appendChild(div)
    }
}
createGrid();

//Function to Delete grid and generate a new one
 function clearGrid() {
    while (gridContainer.firstChild)
        gridContainer.removeChild(gridContainer.firstChild)
    }
//Buttons:
//Clear button
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', function(e) {
    clearGrid()
    createGrid()
});
 