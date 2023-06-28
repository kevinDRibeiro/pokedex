export interface Pokemon {
    name: string,
    url: string,
    id: string,
    height?: number,
    weight?: number,
    health: number,
    defense: number,
    speed: number,
    atack: number,
    description?: string,
    type?: string,
    imgBasic?: string,
}