export const master = 'master'
export const player = 'player'

const users = [
    {
        id: 1,
        role: master,
        name: 'Romy',
        username: 'CatOrWall', 
        players: ['Alden', 'Zoey'],
        character: null
    },
    {
        id: 2,
        role: player,
        name: 'Alden',
        username: 'ireofzues',
        character: 'Alden',
        players: null
    },
    {
        id: 3,
        role: player,
        name: 'Zoey',
        username: 'VelvetElixer',
        character: 'Zoey',
        players: null
    }
]

export default users