import { getRand } from './tetrominos.mjs'
import { board } from './board.mjs'
import { preView } from './preview.mjs'


const boardDiv = document.getElementById('board')
board.createEmptyBoard(boardDiv)

const rtet = getRand()
const preViewDiv = document.getElementById('preview')
preView.showPreview(preViewDiv, rtet)

const name = 'WPGRocks'

export {
    name
}