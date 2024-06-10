const showPreview = (rootElem, tetromino) => {
    const tet = tetromino[0]
    for (let i = 0; i < tet.length; i++) {
        for (let j = 0; j < tet[0].length; j++) {
            const cell = document.createElement('div')
            if (tet[i][j] === 0) {
                cell.setAttribute('class', 'cell empty')
            } else {
                cell.setAttribute('class', 'cell redCell')
            }
            rootElem.append(cell)
        }
    }
}

const preView = { showPreview }

export { preView }