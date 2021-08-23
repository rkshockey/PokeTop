import {normal, fire, water, electr, grass, ice, fight, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy} from './typechart'

const phys = 'Physical'
const spec = 'Special'
const boost = 'Boost'

const self = 'Affects the user'
const close = 'Close Quarters Attack'
const medium = 'Distant Attack'
const far = 'Long-range Attack'

const single = 'Affects a single target'

const cool = 'Cool'
const tough = 'Tough'
const beauty = 'Beauty'
const clever = 'Clever'
const cute = 'Cute'

const attackdex = [
    {
        name: 'blank',
        type: null,
        class: null,
        damage: null,
        energy: null,
        hq: null,
        range: null,
        aoe: null,
        contestType: null,
        appeal: null,
        effect: null,
        description: null,
        details: null
    },
    {
        name: 'Dragon Breath',
        type: dragon,
        class: spec,
        damage: '1d12',
        energy: 2,
        hq: 0,
        range: medium,
        aoe: "Hits all Pokemon in a cone.",
        contestType: cool,
        appeal: 2,
        effect: 'Badly startles the last Pokemon to act before the user.',
        description: "The user exhales a mighty just that inflict damage. It also causes paralysis on a 15 or better.",
        details: "Increases chance of misbehavior by 20%"
    },
    {
        name: 'Ember',
        type: fire,
        class: spec,
        damage: '1d8',
        energy: 2,
        hq: 0,
        range: medium,
        aoe: single,
        contestType: cute,
        appeal: 4,
        effect: 'Quite an appealing move.',
        description: "The target is attacked with small flames. This leaves the target with a burn at 19 or better.",
        details: null
    },
    {
        name: 'Growl',
        type: normal,
        class: boost,
        damage: '-',
        energy: 0,
        hq: 0,
        range: medium,
        aoe: 'Hits all rival Pokemon in range',
        contestType: cute,
        appeal: 2,
        effect: 'Works great when used last',
        description: 'The user growls in an endearing way, making the opposing Pokemon less wary. This lowers their Attack stats.',
        details: 'Lowers attack one stage. Extra appeal point when used last.'
    },
    {
        name: 'Growth',
        type: normal,
        class: boost,
        damage: '-',
        energy: 2,
        hq: -1,
        range: self,
        aoe: single,
        contestType: beauty,
        appeal: 1,
        effect: 'Gets the Pokemon pumped up. Helps prevent nervousness, too.',
        description: "The user's body grows all at once, raising the Attack and Sp.Attack stats",
        details: 'Raises Att and SpAtt one stage, except when Sunny Day or Drought are in effect in which case it raises by two stages. In contest, lowers chance of misbehavior by 10% and doubles next appeal'
    },
    {
        name: 'Leech Seed',
        type: grass,
        class: boost,
        damage: '-',
        energy: 5,
        hq: 2,
        range: close,
        aoe: single,
        contestType: clever,
        appeal: 1,
        effect: 'Gets the Pokemon pumped up. Helps prevent nervousness, too.',
        description: "A seed is planted on the target. It steals some HP from the target every turn.",
        details: "Steals 10% of the target's max HP per turn. In contest, lowers chance of misbehavior by 10% and doubles next appeal."
    },
    {
        name: 'Poison Powder',
        type: poison,
        class: boost,
        damage: '-',
        energy: 1,
        hq: 5,
        range: medium,
        aoe: 'Affects all Pokemon in range.',
        contestType: clever,
        appeal: 3,
        effect: 'Brings down the energy of other Pokemon that follow',
        description: "The user scatters a cloud of poisonous dust that poisons the target",
        details: "In contest, lowers adversaries' appeal round by three total points if they perform after the user."
    },
    {
        name: 'Razor Leaf',
        type: grass,
        class: phys,
        damage: '1d10 + 1',
        energy: 2,
        hq: 1,
        range: medium,
        aoe: 'Hits all rival pokemon in a cone if they are not blocked by an ally',
        contestType: cool,
        appeal: 4,
        effect: 'Quite an appealing move.',
        description: "Sharp-edged leaves are launched to slash at opposing Pokemon. Critical hits land more easily.",
        details: "Crits have a +1 chance."
    },
    {
        name: 'Scratch',
        type: normal,
        class: phys,
        damage: '1d8',
        energy: 1,
        hq: 0,
        range: close,
        aoe: single,
        contestType: tough,
        appeal: 4,
        effect: 'Quite an appealing move.',
        description: "Hard, pointed, sharp claws rake the target to inflict damage.",
        details: null
    },
    {
        name: 'Sleep Powder',
        type: grass,
        class: boost,
        damage: '-',
        energy: 3,
        hq: 5,
        range: medium,
        aoe: 'Affects all Pokemon in range.',
        contestType: clever,
        appeal: 1,
        effect: 'Startles all the Pokemon that perform before the user.',
        description: "The user scatters a big cloud of sleep-inducing dust around the target.",
        details: "In contest, raises the chance of rival misbehavior by 10%."
    },
    {
        name: 'Smokescreen',
        type: normal,
        class: boost,
        damage: '-',
        energy: 2,
        hq: 0,
        range: medium,
        aoe: "Affects all rival Pokemon in range.",
        contestType: clever,
        appeal: 2,
        effect: 'Prevents the user from being startled one time this turn.',
        description: "The user releases an obscuring cloud of smoke or ink. It reduces the target's accuracy.",
        details: "Lowers accuracy by one stage."
    },
    {
        name: 'Tackle',
        type: normal,
        class: phys,
        damage: '1d8',
        energy: 0,
        hq: 0,
        range: close,
        aoe: single,
        contestType: tough,
        appeal: 4,
        effect: 'Quite an appealing move',
        description: 'A physical attack in which the user charges and slams into the target with its whole body.',
        details: null
    },
    {
        name: 'Vine Whip',
        type: grass,
        class: phys,
        damage: '1d8 + 1',
        energy: 2,
        hq: 0,
        range: medium,
        aoe: single,
        contestType: cool,
        appeal: 4,
        effect: 'Quite an appealing move',
        description: 'The target is struck with slender, whiplike vines to inflict damage.',
        details: null
    }
]

export default attackdex