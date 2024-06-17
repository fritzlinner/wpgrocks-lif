import { getRand } from './tetrominos.mjs'
import { board } from './board.mjs'
import { preView } from './preview.mjs'

const name = 'WPGRocks'
const initialInterval = 1000
let lastAnimateTimeStamp = 0
let currentInterval = initialInterval

let isStarted = false;


const boardDiv = document.getElementById('board')

const start = () {
    isStarted = true
animate()
board.createEmptyBoard(boardDiv)
}

const stop = () => {
    isStarted = false
}

const increaseLevelIfNeeded = () =>{
    if (cnt % speedUpAfter == 0
        level++
        currentInterval = currentInterval * speedUpAfter
    )
}
const animate = (timeStamp) => {
    if ( isStarted && 
        timeStamp  - lastAnimateTimeStamp > currentInterval) {
        const rtet = getRand()
        const preViewDiv = document.getElementById('preview')
        preView.showPreview(preViewDiv, rtet)
        lastAnimateTimeStamp = timeStamp
    }
    requestAnimationFrame(animate)
}

window[name] = {
    start,
    stop
}

export {
    name
}