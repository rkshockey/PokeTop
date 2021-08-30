export const master = 'master'
export const player = 'player'

const users = [
    {
        id: 0,
        role: null,
        name: null,
        username: '--Select User--', 
        players: [],
        trainers: []
    },
    {
        id: 1,
        role: master,
        name: 'Romy',
        username: 'CatOrWall', 
        players: ['Alden', 'Zoey'],
        trainers: []
    },
    {
        id: 2,
        role: player,
        name: 'Alden',
        username: 'ireofzues',
        trainers: ['Alden'],
        players: []
    },
    {
        id: 3,
        role: player,
        name: 'Zoey',
        username: 'VelvetElixer',
        trainers: ['Zoey'],
        players: []
    }
]

export default users