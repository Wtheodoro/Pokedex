export interface PokemonInfo {
    name: string
    id: number
    weight: number
    sprites: PokemonSprites
    stats: PokemonStats[]
    // types: PokemonTypes[]
}

export interface PokemonSprites {
    front_default: string
}

export interface PokemonStats {
    base_stat: number
    stat: EachStat
}

export interface EachStat {
    name: string
    url: string
}

// export interface PokemonTypes {

// }