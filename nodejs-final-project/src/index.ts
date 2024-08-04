import "reflect-metadata";
import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api",router);

const startServer = async () => {
    try{
        await sequelize.authenticate();
        console.log("Dtabase connected");
        await sequelize.sync();
        app.listen(PORT,() => {
            console.log("Server started on port 3000");
        })
    }catch(error){
        console.error("Unable to connect to the database",error);
    }
};

startServer();

