import {normal, fire, water, electr, grass, ice, fight, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy} from './typechart'

export const human = {
    species: 'Human',
    index: 0,
    picture: {normal: null, shiny: null},
    type: [fight],
    height: null,
    weight: null,
    sizeClass: null,
    catchRate: null,
    evolvesAt: null,
    evolvesTp: null,
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
    moveList: [],
}

const pokedex = [
    {
        species: 'Bulbasaur',
        index: 1,
        picture: {
            normal: 'https://www.serebii.net/swordshield/pokemon/001.png', 
            shiny: 'https://www.serebii.net/Shiny/SWSH/001.png'
        },
        type: [grass, poison],
        height: "2'04",
        weight: "15.2lbs",
        sizeClass: 2,
        catchRate: 45,
        evolvesAt: 16,
        evolvesTo: 'Ivysaur',
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
        abilities: [
            {
                name: 'Overgrow',
                hidden: false
            },
            {
                name: 'Chlorophyll',
                hidden: true
            }
        ],
        moveList: [
            {
                name: 'Tackle',
                level: 1
            },
            {
                name: 'Growl',
                level: 1,
            },
            {
                name: 'Vine Whip',
                level: 3
            },
            {
                name: 'Growth',
                level: 6
            },
            {
                name: 'Leech Seed',
                level: 9
            },
            {
                name: 'Razor Leaf',
                level: 12
            },
            {
                name: 'Poison Powder',
                level: 15
            },
            {
                name: 'Sleep Powder',
                level: 15
            }
        ]
    }
]

export default pokedex