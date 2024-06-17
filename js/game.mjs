import { getRand } from './tetrominos.mjs'
import { board } from './board.mjs'
import { preView } from './preview.mjs'

const name = 'WPGRocks'
const initialInterval = 1000
let lastAnimateTimeStamp = 0
let currentInterval = initialInterval

const boardDiv = document.getElementById('board')

const animate = (timeStamp) => {
    if (timeStamp  - lastAnimateTimeStamp > currentInterval) {
        const rtet = getRand()
        const preViewDiv = document.getElementById('preview')
        preView.showPreview(preViewDiv, rtet)
        lastAnimateTimeStamp = timeStamp
    }
    requestAnimationFrame(animate)
}

animate()

export {
    name
}