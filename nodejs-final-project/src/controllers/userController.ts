import { Request, Response } from "express";
import { container } from "tsyringe"; //Importación del contenedor de inyección de dependencias de tsyringe
import UserService from "../services/userService"; //Aquí se importa el servicio UserService desde el archivo UserService ubicado en el directorio services. Este servicio contiene la lógica de negocio relacionada con los usuarios. 

export default class UserController {  //Esta clase contiene métodos estáticos que actúan como controladores para las rutas relacionadas con los usuarios
  static async getAllUsers(_: Request, res: Response) { //Este método es un controlador para manejar la solicitud de obtener todos los usuarios
    const userService = container.resolve(UserService); //Resolución del servicio UserService. Utiliza el contenedor tsyringe para resolver una instancia del UserService. Esto permite la inyección de dpendencias de manera automática.
    const users = await userService.getAllUsers(); //LLamada al método getAllUsers del UserService para obtener la lista de todos los usuarios.  Esta llamada es asincrónica y se espera con await
    res.json(users); //Envía la lista de usuarios como una respuesta JSON
  }

  static async getUserById(req: Request, res: Response) { //Este método es un controlador para manjera la solicitud de obtener un usuario por su Id.
    const userService = container.resolve(UserService); //Resuleve la instancia del UserService utilizando el contenedor de tsyringe
    const user = await userService.getUserById(parseInt(req.params.id)); //Llama al método getUserById del servicio UserService para obtener un usuario específico por su Id. Convierte el parámetro de ruta id a un entero con parseInt y espera la llamada con await
    res.json(user); //Envía el usuario encontrado como una respuesta JSON
  }

  static async createUser(req: Request, res: Response) { //Este método es un controlador para manejar la solicitud de creación de un nuevo usuario.
    const userService = container.resolve(UserService); //Resuelve una instancia del UserService utilizando el contenedor de tsyringe.
    const user = await userService.createUser(req.body); //Llama al método createUser del servicio UserService para crear un nuevo usuario utilizando los datos del cuerpo de la solicitud (req.body). La llamada es asincrónica y se espera con await.
    res.status(201).json(user); //Envía el nuevo usuario creado como una respuesta JSON con el código de estado 201 (Creado).
  }
}