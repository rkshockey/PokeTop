import {normal, fire, water, electr, grass, ice, fight, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy} from './typechart'

import {close, medium, far} from './attackdex'

export const human = {
    species: 'Human',
    index: 000,
    picture: {normal: null, shiny: null},
    type: [fight],
    height: null,
    weight: null,
    metricHeight: null,
    catchRate: null,
    evolvesAt: null,
    evolvesTo: null,
    baseStats: {
        hp: 100,
        att: 101,
        def: 90,
        spAt: 44,
        spDef: 95,
        speed: 50
    },
    biomes: null,
    abilities: [],
    moveList: [],
}

const pokedex = [
    {
        species: 'Bulbasaur',
        index: 001,
        picture: {
            normal: 'https://www.serebii.net/swordshield/pokemon/001.png', 
            shiny: 'https://www.serebii.net/Shiny/SWSH/001.png'
        },
        type: [grass, poison],
        height: "2'04",
        weight: "15.2lbs",
        metricHeight: 0.7,
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
    },
    {
        species: 'Charmander',
        index: 004,
        picture: {
            normal: 'https://www.serebii.net/swordshield/pokemon/004.png',
            shiny: 'https://www.serebii.net/Shiny/SWSH/004.png'
        },
        type: [fire],
        height: "2'00",
        weight: '18.7lbs',
        metricHeight: 0.6,
        catchRate: 45,
        evolvesAt: 16,
        evolvesTo: 'Charmeleon',
        baseStats: {
            hp: 39,
            att: 52,
            def: 43,
            spAt: 60,
            spDef: 50,
            speed: 65
        },
        biomes: null,
        abilities: [
            {
                name: 'Blaze',
                hidden: false
            },
            {
                name: 'Solar Power',
                hidden: true
            }
        ],
        moveList: [
            {
                name: 'Scratch',
                level: 1
            },
            {
                name: 'Growl',
                level: 1
            },
            {
                name: 'Ember',
                level: 4
            },
            {
                name: 'Smokescreen',
                level: 8
            },
            {
                name: 'Dragon Breath',
                level: 12
            }
        ],
    }
]

export default pokedex