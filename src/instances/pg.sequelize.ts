import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://YOURUSER:password@localhost:5432/databaseName')

export async function initDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync(); // This will create the table if it doesn't exist (or recreate it if it does)
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}