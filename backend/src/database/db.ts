import { Sequelize } from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT } from '@/Config/config';
import { initializeModels } from './syncEntity';

export const mySqlSequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: Number(PORT)
});

export const connection = async () => {
    await initializeModels(mySqlSequelize);
    mySqlSequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((error) => {
            console.error('Unable to connect to the database:', error);
        });
    mySqlSequelize.sync();
};
