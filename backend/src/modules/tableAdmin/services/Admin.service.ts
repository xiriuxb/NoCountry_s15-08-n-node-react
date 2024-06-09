import AdminModel from '../model/AdminModel';

export default class AdminService {
    async create(entity: any): Promise<any> {
        try {
            const admin = await AdminModel.create({ ...entity });
            return admin;
        } catch (error) {
            throw error;
        }
    }
}
