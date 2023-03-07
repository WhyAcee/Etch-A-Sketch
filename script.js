const gridContainer = document.querySelector('.grid-container')
const gridItem = document.querySelector('.grid-item')

let gridSides = 16; 
// Creates a 16x16 grid
function createGrid() {
    clearGrid()
    gridContainer.style.gridTemplateColumns = (`repeat(${gridSides}, ${600 / gridSides}px)`)
    gridContainer.style.gridTemplateRows = (`repeat(${gridSides}), ${600 / gridSides}px)`)

    for(let i = 0; i < (gridSides * gridSides); i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.style.padding = `${200 / gridSides}px`
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = `${defaultColor}`;
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

//Color picker
const colorPicker = document.querySelector('#color-picker')
let defaultColor = colorPicker.value

colorPicker.addEventListener("input", function(e) {
    return defaultColor = e.target.value
})

//slider for number of sides
const sliderInput = document.querySelector('#slider-input')
const sliderValue = document.querySelector('#slider-value')

sliderInput.addEventListener("input", function(e) {
    sliderValue.textContent = e.target.value
    console.log(e.target.value)
    return gridSides = e.target.value, createGrid()
})

