import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('fish_season', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
});

export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
