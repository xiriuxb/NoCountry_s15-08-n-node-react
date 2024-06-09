export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
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

export enum stateEvent {
    ACTIVO = 'Active',
    FINALIZADO = 'Finished'
}

export const ImageFormat: string[] = [
    'png',
    'jpg',
    'jpeg',
    'gif',
    'webp',
    'avif',
    'svg',
    'bmp',
    'tiff'
];

export interface Tips {
    id_tip: number;
    id_user: number;
    id_fish: number;
    zone: string;
    description: string;
}

export interface Event {
    id_event?: number;
    id_point_interest: number;
    id_user: number;
    name: string;
    edition: string;
    description: string;
    expertize: Expertise;
    date: Date;
    state: stateEvent;
    schedule: string;
    sponsor: string | null;
}

export interface Competitor {
    id_competitor: number;
    id_event: number;
    id_user: number;
}

export interface Comment {
    id_comment: number;
    id_user: number;
    id_publication: number;
    description: string;
    createdAt: Date;
}

export interface ImageUpload {
    public_id: string;
    url: string;
}

export interface MulterRequest extends Express.Request {
    file: Express.Multer.File;
}
