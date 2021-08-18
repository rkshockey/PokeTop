import {normal, fire, water, electr, grass, ice, fight, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy} from './typechart'

const pokedex = [
    {
        species: 'Human',
        index: 0,
        picture: null,
        type: fight,
        height: null,
        weight: null,
        sizeClass: null,
        catchRate: null,
        baseStats: {
            hp: 100,
            att: 101,
            def: 90,
            spAt: 44,
            spDef: 95,
            speed: 50
        },
        biomes: null,
        ranges: null,
        abilities: [],
        moveList: []
    }
]

export default pokedex