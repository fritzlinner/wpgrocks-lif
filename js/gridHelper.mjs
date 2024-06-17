const cssClassNameForColumnCount = {
    4: 'has-4-columns',
    10: 'has-10-columns',
    20: 'has-20-columns'
}
const showGrid = (rootElem, matrix) => {
    rootElem.innerHTML = ''
    rootElem.setAttribute('class', 'grid ' + cssClassNameForColumnCount[matrix[0].length])
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const cell = document.createElement('div')
            if (matrix[i][j] === 0) {
                cell.setAttribute('class', 'cell empty')
            } else {
                cell.setAttribute('class', 'cell redCell')
            }
            rootElem.append(cell)
        }
    }
}

const showEmptyGrid = (rootElem, cols, rows ) =>{

}

export {
    showGrid, showEmptyGrid
}