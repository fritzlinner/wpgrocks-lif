import { showGrid } from "./gridHelper.mjs"

const showPreview = (rootElem, tetromino) => {
    const tet = tetromino.grids[0]
    showGrid(rootElem, tet)
}

const preView = { showPreview }

export { preView }