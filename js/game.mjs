import { getRand} from './tetrominos.mjs'

const rtet= getRand()

for(let i = 0; i < 5; i++) {
const tet = rtet[i % rtet.length]
for ( let j = 0; j < tet.length; j++) {
    console.log(tet[j])
}
console.log('Drehen')
}
const name = 'WPGROCKS'

export {
    name
}

