export class EntityNotFound extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EntityNotFound';
    }
}

export class EntityInvalid extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EntityInvalid';
    }
}

export class InvalidArgument extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidArgument';
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}
