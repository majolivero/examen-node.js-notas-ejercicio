import { Sequelize } from 'sequelize-typescript';
import { User, Product } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'finalproject',
    models: [User, Product], // Añade todos tus modelos aquí
});

export default sequelize;