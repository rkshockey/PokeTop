export const att = 'Attack'
export const def = 'Defense'
export const spAtt = 'Sp. Attack'
export const spDef = "Sp. Defense"
export const speed = 'Speed'

const base = {
    att: 1,
    def: 1,
    spAtt: 1,
    spDef: 1,
    speed: 1
}

const natures = [
    {
        ...base,
        name: 'Hardy',
        up: att,
        down: att
    },
    {
        ...base,
        name: 'Lonely',
        up: att,
        down: def,
        att: 1.1,
        def: 0.9
    },
    {
        ...base,
        name: 'Adamant',
        up: att,
        down: spAtt,
        att: 1.1,
        spAtt: 0.9
    },
    {
        ...base,
        name: 'Naughty',
        up: att,
        down: spDef,
        att: 1.1,
        spDef: 0.9
    },
    {
        ...base,
        name: 'Brave',
        up: att,
        down: speed,
        att: 1.1,
        speed: 0.9
    },
    {
        ...base,
        name: 'Bold',
        up: def,
        down: att,
        att: 0.9,
        def: 1.1
    },
    {
        ...base,
        name: 'Docile',
        up: def,
        down: def
    },
    {
        ...base,
        name: 'Impish',
        up: def,
        down: spAtt,
        def: 1.1,
        spAtt: 0.9
    },
    {
        ...base,
        name: 'Lax',
        up: def,
        down: spDef,
        def: 1.1,
        spDef: 0.9
    },
    {
        ...base,
        name: 'Relaxed',
        up: def,
        down: speed,
        def: 1.1,
        speed: 0.9
    },
    {
        ...base,
        name: 'Modest',
        up: spAtt,
        down: att,
        att: 0.9,
        spAtt: 1.1
    },
    {
        ...base,
        name: 'Mild',
        up: spAtt,
        down: def,
        def: 0.9,
        spAtt: 1.1
    },
    {
        ...base,
        name: 'Bashful',
        up: spAtt,
        down: spAtt
    },
    {
        ...base,
        name: 'Rash',
        up: spAtt,
        down: spDef,
        spAtt: 1.1,
        spDef: 0.9
    },
    {
        ...base,
        name: "Quiet",
        up: spAtt,
        down: speed,
        spAtt: 1.1,
        speed: 0.9
    },
    {
        ...base,
        name: 'Calm',
        up: spDef,
        down: att,
        att: 0.9,
        spDef: 1.1
    },
    {
        ...base,
        name: 'Gentle',
        up: spDef,
        down: def,
        def: 0.9,
        spDef: 1.1
    },
    {
        ...base,
        name: 'Careful',
        up: spDef,
        down: spAtt,
        spAtt: 0.9,
        spDef: 1.1
    },
    {
        ...base,
        name: 'Quirky',
        up: spDef,
        down: spDef
    },
    {
        ...base,
        name: 'Sassy',
        up: spDef,
        down: speed,
        spDef: 1.1,
        speed: 0.9
    },
    {
        ...base,
        name: 'Timid',
        up: speed,
        down: att,
        att: 0.9,
        speed: 1.1
    },
    {
        ...base,
        name: 'Hasty',
        up: speed,
        down: def,
        def: 0.9,
        speed: 1.1
    },
    {
        ...base,
        name: 'Jolly',
        up: speed,
        down: spAtt,
        spAtt: 0.9,
        speed: 1.1
    },
    {
        ...base,
        name: 'Naive',
        up: speed,
        down: spDef,
        spDef: 0.9,
        speed: 1.1
    },
    {
        ...base,
        name: 'Serious',
        up: speed,
        down: speed
    }
]

export default natures