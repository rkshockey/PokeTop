export const levelFast = (xp) => {
    for(let i = 1; i < 200; i++){
        if (xp >= 0.8 * (i **3) && xp < 0.8 * ((i + 1) ** 3)){
            return i
        }
    }
}

export const xpFast = (xp) => {
    const lvl = levelFast(xp)
    const remain = (0.8 * ((lvl + 1) ** 3)) - xp
    return remain
}

export const levelMedFast = (xp) => {
    for(let i = 1; i < 200; i++){
        if (xp >= i **3 && xp < (i + 1) ** 3){
            return i
        }
    }
}

export const xpMedFast = (xp) => {
    const lvl = levelMedFast(xp)
    const remain = ((lvl + 1) ** 3) - xp
    return remain
}

function medSlow (level) {
    return ((1.2 * (level ** 3)) - (15 * (level **2)) + (100 * level) - 140)
}

export const levelMedSlow = (xp) => {
    for(let i = 1; i < 200; i++){
        if (xp >= medSlow(i) && xp < medSlow(i+1)){
            return i
        }
    }
}

export const xpMedSlow = (xp) => {
    const lvl = levelMedSlow(xp)
    const remain = medSlow(lvl + 1) - xp
    return remain
}

function slow (level){
    return (1.25 * (level ** 3))
}

export const levelSlow = (xp) => {
    for(let i = 1; i < 200; i++){
        if (xp >= slow(i) && xp < slow(i+1)){
            return i
        }
    }
}

export const xpSlow = (xp) => {
    const lvl = levelSlow(xp)
    const remain = slow(lvl + 1) - xp
    return remain
}