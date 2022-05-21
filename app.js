const sketchContainer = document.getElementById('sketch-grid-container')

//Create grid using CSS grid
const createGrid = (rows, columns) => {
    sketchContainer.style.setProperty('--grid-rows', rows)
    sketchContainer.style.setProperty('--grid-columns', columns)

    //for loop to create a div for each 'cell' and append it to the sketchContainer
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div')
        cell.textContent = i + 1
        sketchContainer.appendChild(cell).className = 'grid-item'
    }
}

createGrid(16, 16)

/*let cell = document.createElement('div')
            cell.textContent = j + 1
            sketchContainer.appendChild(cell).className = 'grid-item' */




