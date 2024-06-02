import { Sequelize } from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT } from '@/Config/config';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: Number(PORT)
});

export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
