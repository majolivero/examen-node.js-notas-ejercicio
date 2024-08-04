import { Router } from 'express';
import AuthController from '../controllers/authController'; //importa el AuthController que contiene la lógica de autenticación

export const authRouter = Router(); //Crea una instancia de Router llamada authRouter

authRouter.post('/login', AuthController.login); //Define una ruta POST en login que etsa vinculada al método login del AuthController

//Esta ruta se utiliza para manejar solicitudes de inicio de sesión, donde los datos de la solitud POST 
//por ejemplo, nombre de usuario y contraseña, son procesados por el método login del AuthController