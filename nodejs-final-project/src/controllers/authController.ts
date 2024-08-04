// src/controllers/ProductController.ts
import { container } from "tsyringe"; //Se importa el objeto container de la biblioteca tsyringe, que se usa para gestionar la inyección de dependencias de manera automática.
import { Request, Response } from "express";  
import UserService from "../services/userService";
import jwt from "jsonwebtoken"; //Se importa el módulo jsonwebtoken, que se utiliza para generar y verificar tokens JWT (JSON Web Tokens).
import { User } from "../models"; //Se importa el modelo User desde el archivo models. Este modelo representa la entidad User en la base de datos.

export default class AuthController { //Se define y exporta por defecto la clase AuthController. Esta clase contiene métodos estáticos que actúan como controladores para las rutas relacionadas con la autenticación.
  static async login(req: Request, res: Response) { //Este método es un controlador para manejar la solicitud de inicio de sesión.
    try {
      const { email, password } = req.body; //Extrae el correo electrónico (email) y la contraseña (password) del cuerpo de la solicitud (req.body).
      const userService = container.resolve(UserService); //Utiliza el contenedor de tsyringe para resolver una instancia del UserService. Esto permite la inyección de dependencias de manera automática.
      const user: User = await userService.checkUserCredentials(  //Llama al método checkUserCredentials del UserService para verificar las credenciales del usuario. La llamada es asincrónica y se espera con await. //Si las credenciales son correctas, el método devuelve un objeto User
        email,
        password
      );
      // Generar token JWT
      const token = AuthController.generateToken({ //Llama al método generateToken de AuthController para generar un token JWT para el usuario autenticado. Se pasa un objeto con el ID del usuario (id) y el correo electrónico del usuario (username).
        id: user.id,
        username: user.email,
      });
      res.status(200).json({ status: 200, token }); //Envía una respuesta con el código de estado 200 (OK) y un objeto JSON que contiene el estado y el token JWT generado.
    } catch (error: any) {
      res.status(401).json({ message: error.message }); //Si ocurre un error durante la autenticación (por ejemplo, credenciales incorrectas), se envía una respuesta con el código de estado 401 (No autorizado) y un mensaje de error.
    }
  }

  static generateToken = (user: { id: number; username: string }) => { //Este método es una función que genera un token JWT. Toma un parámetro user, que es un objeto que contiene el ID del usuario (id) y el nombre de usuario (username).
    const token = jwt.sign(user, "secret", { expiresIn: "1h" }); //Utiliza el método sign de jsonwebtoken para firmar el token. El primer parámetro es el objeto user que contiene los datos del usuario. El segundo parámetro es una cadena secreta utilizada para firmar el token (en este caso, "secret"). El tercer parámetro es un objeto de opciones, donde se especifica que el token expirará en 1 hora (expiresIn: "1h").
    return token; //Devuelve el token JWT generado.
  };
}

//Resumen
//Este código define un controlador de autenticación (AuthController) con dos métodos principales:

// login:

// Verifica las credenciales del usuario utilizando el UserService.
// Si las credenciales son correctas, genera un token JWT y lo envía en la respuesta.
// Si ocurre un error (por ejemplo, credenciales incorrectas), envía una respuesta de error.

// generateToken:

// Genera un token JWT utilizando la biblioteca jsonwebtoken.
// Toma un objeto user con el ID y el nombre de usuario, y firma el token con una clave secreta, configurando una expiración de 1 hora.