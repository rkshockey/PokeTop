import {normal, fire, water, electr, grass, ice, fight, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy} from './typechart'

export const fast = 'fast'
export const medfast = 'medium fast'
export const medslow = 'medium slow'
export const slow = 'slow'

export const initialPoke = {
    species: null,
    index: null,
    picture: {normal: null, shiny: null},
    type: [normal],
    height: null,
    weight: null,
    metricHeight: null,
    catchRate: null,
    evolvesAt: null,
    evolvesTo: null,
    evolution: {
        species: [null],
        complex: false
    },
    baseStats: {
        hp: null,
        att: null,
        def: null,
        spAtt: null,
        spDef: null,
        speed: null
    },
    eggGroup: null,
    levelSpeed: null,
    rarity: null,
    biomes: null,
    abilities: [{name: null, hidden: null}],
    moveList: [{name: 'blank', level: null}],
}

export const human = {
    species: 'Human',
    index: 0,
    picture: {normal: 'https://d.newsweek.com/en/full/1543337/pokemon-sword-shield-trainer-clothes.webp?w=790&f=8ccd3adbf5232ea6dd24802aab6023a3', shiny: null},
    type: [fight],
    height: null,
    weight: null,
    metricHeight: null,
    catchRate: null,
    evolvesAt: null,
    evolvesTo: null,
    evolution: {
        species: ['Human'],
        complex: false
    },
    baseStats: {
        hp: 100,
        att: 101,
        def: 90,
        spAt: 44,
        spDef: 95,
        speed: 50
    },
    pokedexEntry: "There is much debate about whether humans are, themselves, pokemon.",
    eggGroup: 'none',
    levelSpeed: slow,
    biomes: null,
    rarity: null,
    abilities: [{name: null, hidden: null}],
    moveList: [{name: null, level: null}],
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
        metricHeight: 0.7,
        catchRate: 45,
        evolvesAt: 16,
        evolvesTo: 'Ivysaur',
        evolution: {
            species: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
            complex: false
        },
        baseStats: {
            hp: 100,
            att: 101,
            def: 90,
            spAt: 44,
            spDef: 95,
            speed: 50
        },
        pokedexEntry: "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.",
        eggGroup: 'Monster, Grass',
        levelSpeed: medslow,
        biomes: null,
        rarity: null,
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
        index: 4,
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
        evolution: {
            species: ['Charmander', 'Charmeleon', 'Charizard'],
            complex: false
        },
        baseStats: {
            hp: 39,
            att: 52,
            def: 43,
            spAt: 60,
            spDef: 50,
            speed: 65
        },
        pokedexEntry: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
        eggGroup: 'Monster, Dragon',
        levelSpeed: medslow,
        biomes: null,
        rarity: null,
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