export const ability = (ab) => {
    const ability = abilitydex.find(item => item.name === ab.name)

    return <p>{ability.name}: {ability.effect} {ab.hidden && <span>(hidden)</span>}</p>
}

const abilitydex = [
    {
        name: null,
        effect: null
    },
    {
        name: 'Blaze',
        effect: 'When HP is below 1/3 its maximum, roll double dice for Fire-type moves.'
    },
    {
        name: 'Chlorophyll',
        effect: "When sunny, the Pokemon's speed doubles"
    },
    {
        name: 'Overgrow',
        effect: 'When HP is below 1/3rd its maximum, Grass type moves get an extra half die.'
    },
    {
        name: 'Solar Power',
        effect: "During sunshine, the Pokemon's SpAttack raises to 1.5 times but HP decreases by 10% of max each turn."
    }
]

export default abilitydex