interface CRUDService<T, S> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(entity: S): Promise<T | null>;
    update(id: number, entity: S): Promise<T | null>;
    delete(id: number): Promise<void>;
}

export default CRUDService;
