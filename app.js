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





