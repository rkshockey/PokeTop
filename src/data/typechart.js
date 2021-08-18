import pokedex from "./pokedex"

export const normal = 'Normal'
export const fire = 'Fire'
export const water = 'Water'
export const electr = 'Electric'
export const grass = 'Grass'
export const ice = 'Ice'
export const fight = 'Fighting'
export const poison = 'Poison'
export const ground = 'Ground'
export const flying = "Flying"
export const psychic = "Psychic"
export const bug = "Bug"
export const rock = "Rock"
export const ghost = "Ghost"
export const dragon = "Dragon"
export const dark = "Dark"
export const steel = "Steel"
export const fairy = "Fairy"

const base = {
    normal: 1,
    fire: 1,
    water: 1,
    electr: 1,
    grass: 1,
    ice: 1,
    fight: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1
}


const typechart = [
    {
        ...base,
        name: normal,
        fight: 2,
        ghost: 0
    },
    {
        ...base,
        name: fire,
        fire: 0.5,
        water: 2,
        grass: 0.5,
        ice: 0.5,
        ground: 2,
        bug: 0.5,
        rock: 2,
        steel: 0.5
    },
    {
        ...base,
        name: water,
        fire: 0.5,
        water: 0.5,
        electr: 2,
        grass: 2,
        ice: 0.5,
        steel: 0.5
    },
    {
        ...base,
        name: electr,
        electr: 0.5,
        ground: 2,
        flying: 0.5,
        steel: 0.5
    },
    {
        ...base,
        name: grass,
        fire: 2,
        water: 0.5,
        electr: 0.5,
        grass: 0.5,
        ice: 2,
        poison: 2,
        ground: 0.5,
        flying: 2,
        bug: 2
    },
    {
        ...base,
        name: ice,
        fire: 2,
        ice: 0.5,
        fight: 2,
        rock: 2,
        steel: 2
    },
    {
        ...base,
        name: fight,
        flying: 2,
        psychic: 2,
        bug: 0.5,
        rock: 0.5,
        dark: 0.5,
        fairy: 2
    },
    {
        ...base,
        name: poison,
        grass: 0.5,
        fight: 0.5,
        poison: 0.5,
        ground: 2,
        psychic: 2,
        bug: 0.5
    },
    {
        ...base,
        name: ground,
        water: 2,
        electr: 0,
        grass: 2,
        ice: 2,
        poison: 9.5,
        rock: 0.5
    },
    {
        ...base,
        name: flying,
        electr: 2,
        grass: 0.5,
        ice: 2,
        fight: 0.5,
        ground: 0,
        bug: 0.5,
        rock: 2
    },
    {
        ...base,
        name: psychic,
        fight: 0.5,
        psychic: 0.5,
        bug: 2,
        ghost: 2,
        dark: 2
    },
    {
        ...base,
        name: bug,
        fire: 2,
        grass: 0.5,
        fight: 0.5,
        ground: 0.5,
        flying: 2,
        rock: 2,
        fairy: 2
    },
    {
        ...base,
        name: rock,
        normal: 0.5,
        fire: 0.5,
        water: 2,
        grass: 2,
        fight: 2,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        steel: 2
    },
    {
        ...base,
        name: ghost,
        normal: 0,
        fight: 0,
        poison: 0.5,
        bug: 0.5,
        ghost: 2,
        dark: 2
    },
    {
        ...base,
        name: dragon,
        fire: 0.5,
        water: 0.5,
        electr: 0.5,
        grass: 0.5,
        ice: 2,
        dragon: 2,
        fairy: 2
    },
    {
        ...base,
        name: dark,
        fight: 2,
        psychic: 0,
        bug: 2,
        ghost: 0.5,
        dark: 0.5,
        fairy: 2
    },
    {
        ...base,
        name: steel,
        normal: 0.5,
        fire: 2,
        grass: 0.5,
        ice: 0.5,
        fight: 2,
        poison: 0,
        ground: 2,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 0.5,
        ghost: 0.5,
        dragon: 0.5,
        dark: 0.5,
        steel: 0.5,
        fairy: 0.5
    },
    {
        ...base,
        name: fairy,
        fight: 0.5,
        bug: 0.5,
        dragon: 0,
        dark: 0.5,
        steel: 2
    }
]

export default typechart