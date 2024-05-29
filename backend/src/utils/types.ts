export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

export enum Expertise {
    BEGINNER = 'beginner',
    INTERMEDIATE = 'intermediate',
    EXPERT = 'expert'
}

export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

export interface Tips {
    id_tip: number,
    id_user: number,
    id_fish: number,
    zone: string,
    description: string
}
