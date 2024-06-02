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

export enum expertize {
    CASUAL = 'Casual',
    AMATEUR = 'Amateur',
    PROFESIONAL = 'Profesional'
}

export enum stateEvent {
    ACTIVO = 'Activo',
    FINALIZADO = 'Finalizado'
}

export interface Tips {
    id_tip: number,
    id_user: number,
    id_fish: number,
    zone: string,
    description: string
}

export interface Event {
    id_event: number,
    id_point_interest: number,
    id_usert: number,
    name: string,
    edition: string,
    description: string,
    expertize: expertize,
    date: Date,
    state: stateEvent,
    schedule: string,
    sponsor: string
}

