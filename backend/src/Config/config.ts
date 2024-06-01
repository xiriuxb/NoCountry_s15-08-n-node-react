import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const DB_NAME = process.env.DB_NAME || 'fish_season';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASS || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const PORT = process.env.PORT || 3306;
export const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
