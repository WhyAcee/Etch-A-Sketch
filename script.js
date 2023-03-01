const gridContainer = document.querySelector('.grid-container')
let gridItem = document.createElement('div')


function Grid16() {
    for(let i = 0; i < 256; i++) {
        gridItem.classList.add('grid-item')
        gridContainer.appendChild(gridItem.cloneNode(true))
    }
}

Grid16();