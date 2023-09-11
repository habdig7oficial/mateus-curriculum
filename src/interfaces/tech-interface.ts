export type uses = "Front-end (Web)" | "Back-end (Web)" | "Database" | "High Performance Apps" | "Game Development"

export interface impl {
    name: string
    logo: string
}

export interface basic {
    name: string, 
    link: string
}

export interface framework {
    name: string
    logo: string
    examples?: Array<basic>
    isfront?: boolean
}

export default interface tecnologies {
    name: string,
    logo: string, 
    learning_type: string,
    used_for: Array<uses>,
    frameworks?: Array<framework>,
    //impl?: Array<impl>,
    score: 1 | 2 | 3 | 4 | 5,

    nickname?: string
}