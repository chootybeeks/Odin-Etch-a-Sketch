const sketchContainer = document.getElementById('sketch-grid-container')

//Create grid using CSS grid
const createGrid = (rows, columns) => {
    //sketchContainer.style.setProperty('--grid-rows', rows)
    //sketchContainer.style.setProperty('--grid-columns', columns)

    //for loop to create a div for each 'cell' and append it to the sketchContainer
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div')
        sketchContainer.style.gridTemplateRows = `repeat(${columns}, 1fr)`
        sketchContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
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

const resizeButton = document.getElementById('resize-button')
resizeButton.addEventListener('click', getUserInput)

