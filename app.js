const sketchContainer = document.getElementById('sketch-grid-container')

//Create grid using CSS grid
const createGrid = (rows, columns) => {
    //sketchContainer.style.setProperty('--grid-rows', rows)
    //sketchContainer.style.setProperty('--grid-columns', columns)

    //for loop to create a div for each 'cell' and append it to the sketchContainer
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div')
        sketchContainer.style.gridTemplateRows = `repeat(${columns}, auto)`
        sketchContainer.style.gridTemplateColumns = `repeat(${rows}, auto)`
        sketchContainer.appendChild(cell).className = 'grid-item'
        cell.addEventListener('mousemove', () => {
            cell.style.backgroundColor = 'black' 
        })
    }
}

createGrid(16, 16)

const getUserInput = () => {
    let userInput = prompt('Please Enter a Number between 1 and 100: ')
    const cell = sketchContainer.querySelectorAll('.grid-item')
    cell.forEach(cell => cell.remove())
    createGrid(parseInt(userInput), parseInt(userInput))
}

const clearGrid = () => {
    const cell = sketchContainer.querySelectorAll('.grid-item')
    cell.forEach(cell => cell.style.backgroundColor = 'white')
}

const resizeButton = document.getElementById('resize-button')
resizeButton.addEventListener('click', getUserInput)

const clearGridButton = document.getElementById('clear-grid-button')
clearGridButton.addEventListener('click', clearGrid)