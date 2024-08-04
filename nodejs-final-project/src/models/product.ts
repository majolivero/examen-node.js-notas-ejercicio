// src/models/Product.ts
//Importación de módulos: Importamos varios decoradores y tipos de sequelize-typescript que nos permitirán definir el modelo y sus columnas, así como las relaciones con otros modelos.
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';  //Importamos el modelo User desde otro archivo. Esto es necesario para establecer relaciones entre el modelo Product y el modelo User.

@Table({  //Utilizamos el decorador @Table para definir la configuración de la tabla
    tableName: 'products',  //Especifica el nombre de la tabla en la base de datos
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente. Indica que sequelize debe manejar las columnas automaticamente.
})
export class Product extends Model<Product> {  //Creamos una clase Product que extiende Model<Product> Esto define el modelo 'Product' que Sequelize usará para interactuar con la tabla products
    @Column({  //Utilizamos el decorador @column para definir la columna name 
        type: DataType.STRING, //Especifica que el tipo de dato es una cadena de texto
        allowNull: false, //Indica que esta columna no puede ser nula
    })
    name!: string; //Define la propiedad name en la clase Product con el tipo string

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price!: number;

    @ForeignKey(() => User) //Define que esta columna es una clave foranea que referencia al modelo User
    @Column({  //Define la columna userId
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number; //Define la propiedad userId en la clase Product con el tipo number

    @BelongsTo(() => User) //Define una relación de pertenencia, indicando que cada Product pertenece a un User
    user!: User; //Define la propiedad user en la clase Product con el tipo User. Esto permite acceder al usuario relacionado desde una instancia de Product. 
}

//Este código completo define un modelo Product con tres columnas (name, price y userId) 
//y una relación de pertenencia con el modelo User. 
//Sequelize utilizará esta definición para mapear la clase Product a la tabla products en la base de datos 
//y manejar las operaciones CRUD y las relaciones automáticamente.