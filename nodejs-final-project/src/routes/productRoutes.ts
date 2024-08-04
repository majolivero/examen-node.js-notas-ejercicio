import { Router } from 'express';
import ProductController from '../controllers/productController';

export const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts); //Obtener todos los productos
productRouter.get('/:id', ProductController.getProductById); //obtener un producto específico por su id.
productRouter.get('/user/:userId', ProductController.getProductsByUserId); //Trae productos por id de usuario. Cuando se una solicitud get a esta ruta, se llama al método getProductByUserId del Product Controller, que maneja la lógica para obtener y devolver productos asociados con un suario específico.
productRouter.post('/', ProductController.createProduct); //Crea un nuevo producto

//Cada ruta está asociada a un método en el ProductController que contiene la lógica para manejar las solicitudes correspondientes. 