const gridContainer = document.querySelector('.grid-container')
const gridItem = document.querySelector('.grid-item')

let gridSides = 16; 
// Creates a 16x16 grid
function createGrid() {
    clearGrid()
    gridContainer.style.gridTemplateColumns = (`repeat(${gridSides}, 1fr)`)
    gridContainer.style.gridTemplateRows = (`repeat(${gridSides}), 1fr)`)

    console.log(gridSides)
    for(let i = 0; i < (gridSides * gridSides); i++) {
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
    createGrid()
});

//slider for number of sides
const sliderInput = document.querySelector('#slider-input')
const sliderValue = document.querySelector('#slider-value')
//sliderValue.textContent = sliderValue.sliderInput

sliderInput.addEventListener("input", function(e) {
    sliderValue.textContent = e.target.value
    console.log(e.target.value)
    return gridSides = e.target.value, createGrid()
})

