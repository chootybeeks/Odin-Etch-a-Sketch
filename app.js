const sketchContainer = document.getElementById('sketch-grid-container')

//Create grid using CSS grid
const createGrid = (rows, columns) => {
    sketchContainer.style.setProperty('--grid-rows', rows)
    sketchContainer.style.setProperty('--grid-columns', columns)

    //for loop to create a div for each 'cell' and append it to the sketchContainer
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div')
        cell.textContent = ''
        sketchContainer.appendChild(cell).className = 'grid-item'
        cell.addEventListener('mousemove', () => {
            cell.style.backgroundColor = 'black' 
        })
    }
}

createGrid(16, 16)

//Add a button to the top of the screen prompting user for number of
//squares per side
const titleSection = document.getElementById('header')
const title = document.createElement('h1')
title.textContent = 'Etch-A-SketchPad'
titleSection.append(title)

let gridSizeButton = document.createElement('button')
gridSizeButton.textContent = 'Select Grid Size?'
title.appendChild(gridSizeButton)





