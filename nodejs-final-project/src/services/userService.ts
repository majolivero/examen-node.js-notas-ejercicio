import UserRepository from "../repositories/userRepository"; //Importa el repositorio UserRepository desde el directorio repositories. Este repositorio contiene los métodos necesarios para interactuar con la base de datos relacionada con los usuarios.
import { injectable, inject } from "tsyringe"; //Importa los decoradores injectable e inject de la biblioteca tsyringe, utilizados para la inyección de dependencias. injectable se usa para marcar una clase como inyectable, y inject se usa para inyectar dependencias en el constructor.
import { User } from "../models/user"; //Importa el modelo User desde el directorio models. Este modelo representa la entidad User en la base de datos.

@injectable() //Marca la clase UserService como inyectable, lo que permite que tsyringe pueda gestionar su ciclo de vida y sus dependencias automáticamente.
export default class UserService { //Define y exporta por defecto la clase UserService. Esta clase contiene métodos que encapsulan la lógica de negocio relacionada con los usuarios.
  constructor(@inject(UserRepository) private userRepository: UserRepository) {} //Define un constructor que inyecta una instancia de UserRepository utilizando el decorador @inject. La dependencia UserRepository se asigna a la propiedad privada userRepository.

  async getAllUsers() { //Define un método asíncrono getAllUsers que llama al método findAll del userRepository para obtener todos los usuarios de la base de datos.
    return await this.userRepository.findAll(); //Devuelve la lista de usuarios.
  }

  async getUserById(id: number) {  //Define un método asíncrono getUserById que toma un id como parámetro.
    return await this.userRepository.findById(id); //Llama al método findById del userRepository para obtener un usuario específico por su ID. Devuelve el usuario encontrado
  }

  async getUserByEmail(email: string): Promise<User | null> { //Define un método asíncrono getUserByEmail que toma un email como parámetro.
    return await this.userRepository.findByEmail(email); //Llama al método findByEmail del userRepository para obtener un usuario específico por su correo electrónico. Devuelve el usuario encontrado o null si no se encuentra.
  }

  async createUser(user: Partial<User>) { //Define un método asíncrono createUser que toma un objeto user (parcialmente definido) como parámetro. Llama al método create del userRepository para crear un nuevo usuario en la base de datos.
    return await this.userRepository.create(user); //Devuelve el usuario creado.
  }

  async checkUserCredentials( //Define un método asíncrono checkUserCredentials que toma email y password como parámetros. Este método se usa para verificar las credenciales del usuario.
    email: string, 
    password: string
  ): Promise<User> {
    const user = await this.getUserByEmail(email); //Llama al método getUserByEmail para obtener el usuario correspondiente al correo electrónico proporcionado.
    if (user && user.password === password) { //Verifica si el usuario existe y si la contraseña proporcionada coincide con la contraseña almacenada. Si coinciden, devuelve el usuario.
      return user;
    }
    throw new Error("Invalid credentials"); //Si las credenciales no son válidas, lanza un error con el mensaje "Invalid credentials".
  }
}

/**
 * @injectable() es un decorador que indica que la clase es un servicio que puede ser inyectado en otras clases.
 * @inject(UserRepository) es un decorador que indica que el parámetro userRepository del constructor debe ser resuelto por el contenedor de inyección de dependencias.
 * El contenedor de inyección de dependencias se encarga de crear una instancia de la clase UserService y de inyectar una instancia de UserRepository en el parámetro userRepository del constructor.
 *
 * Partial se utiliza para definir un tipo que tiene todas las propiedades de otro tipo como opcionales.
 */



//Este código define una clase UserService que proporciona métodos para interactuar con los usuarios en la base de datos:

// Constructor: Inyecta una instancia de UserRepository.
// Métodos:
// getAllUsers(): Obtiene todos los usuarios.
// getUserById(id: number): Obtiene un usuario por su ID.
// getUserByEmail(email: string): Obtiene un usuario por su correo electrónico.
// createUser(user: Partial<User>): Crea un nuevo usuario.
// checkUserCredentials(email: string, password: string): Verifica las credenciales del usuario.
// Estos métodos utilizan el UserRepository para realizar las operaciones en la base de datos, y tsyringe para la inyección de dependencias, lo que facilita la gestión y el mantenimiento del código.