import { getRand } from './tetrominos.mjs'
import { board } from './board.mjs'
import { preView } from './preview.mjs'

const name = 'WPGRocks'
const initialInterval = 1000
let lastAnimateTimeStamp = 0
let currentInterval = initialInterval
let speedUp = 0.9
let speedUpAfter = 20

let cnt = 1
let level = 1

let isStarted = false;

const boardDiv = document.getElementById('board')
const preViewDiv = document.getElementById('preview')

board.showStartScreen(boardDiv)

let currentTetromino
let nextTetromino = getRand()

preView.showPreview(preViewDiv, nextTetromino)

const start = () => {
    isStarted = true
    board.createEmptyBoard(boardDiv)
    getNewTetromino()
    board.insertAtTop(currentTetromino)
    lastAnimateTimeStamp = performance.now()
    animate()
}

const getNewTetromino = () => {
    currentTetromino = nextTetromino
    nextTetromino = getRand()
    preView.showPreview(preViewDiv, nextTetromino)
}


const stop = () => {
    isStarted = false
}

const increaseLevelIfNeeded = () => {
    if (cnt % speedUpAfter == 0) {
        level++
        currentInterval = currentInterval * speedUp
    }
}
let needsAnimation = false
const animate = (timeStamp) => {
    if (isStarted) {
        requestAnimationFrame(animate)
        if (timeStamp - lastAnimateTimeStamp > currentInterval
            || needsAnimation
        ) {
            needsAnimation = false
            lastAnimateTimeStamp = timeStamp
            cnt++;
            increaseLevelIfNeeded()
            if (!board.moveTet(currentTetromino, 0, 1)) {
                board.countAndRemovePerfectRows()
                getNewTetromino()
                if (!board.insertAtTop(currentTetromino)) {
                    isStarted = false
                    board.showGameOverScreen()
                }
            }
        }
    }
}


const moveRight = () => {
    board.moveTet(currentTetromino, 1, 0)
}

const moveLeft = () => {
    board.moveTet(currentTetromino, -1, 0)
}

const moveDown = () => {
    if (!board.moveTet(currentTetromino, 0, 1)) {
        needsAnimation = true
    }
}

const turn = () => {
    const currentRot = currentTetromino.rot
    const { x, y } = currentTetromino.pos
    const newRot = (currentRot + 1) % currentTetromino.grids.length
    if (y != 0 && newRot != currentRot && board.checkTurn(currentTetromino, newRot)) {
        board.moveRotTet(currentTetromino, newRot, x, y)
        currentTetromino.rot = newRot
        board.updateDisplay()
    }
}
const inputResolution = 50
let lastKeyEventTimeStamp = 0
document.addEventListener('keydown', function (e) {
    if (typeof currentTetromino !== 'undefined' && isStarted) {
        if (performance.now() - lastKeyEventTimeStamp > inputResolution) {
            if (e.key === 'ArrowRight') {
                moveRight()
            } else if (e.key === 'ArrowLeft') {
                moveLeft()
            } else if (e.key === 'ArrowDown') {
                moveDown()
            } else if (e.key === 'ArrowUp') {
                turn()
            }
            lastKeyEventTimeStamp = performance.now()
        }
    }
    e.preventDefault()
})

window[name] = {
    start,
    stop
}

export {
    name
}
