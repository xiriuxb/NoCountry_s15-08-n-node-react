import dotenv from 'dotenv';
dotenv.config();

export const DB_NAME = process.env.DB_NAME || 'fish_season';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const PORT = Number(process.env.DB_PORT) || 3306;
