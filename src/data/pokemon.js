const normal = 'normal'
const shiny = 'shiny'
const albino = 'albino'
const melan = 'melanistic'

export const initialPokemon =
    {
        id: null,
        species: 'Bulbasaur',
        trainer: null,
        nickname: null,
        variance: normal,
        picture: null,
        ability: null,
        nature: 'Hardy',
        happiness: 0,
        xp: 0,
        IVs: {
            hp: 0,
            att: 0,
            def: 0,
            spAtt: 0,
            spDef: 0,
            speed: 0
        },
        EVs: {
            hp: 0,
            att: 0,
            def: 0,
            spAtt: 0,
            spDef: 0,
            speed: 0
        },
        moveSet: []
    }

const Pokemon = [
    {
        id: 1,
        species: 'Bulbasaur',
        trainer: 'Master',
        nickname: null,
        variance: normal,
        picture: null,
        ability: 'Overgrow',
        nature: 'Hardy',
        happiness: 0,
        xp: 1000,
        IVs: {
            hp: 0,
            att: 0,
            def: 0,
            spAtt: 0,
            spDef: 0,
            speed: 0
        },
        EVs: {
            hp: 0,
            att: 0,
            def: 0,
            spAtt: 0,
            spDef: 0,
            speed: 0
        },
        moveSet: [
            'Tackle',
            'Growl',
            'Vine Whip'
        ]
    }
]

export default Pokemon