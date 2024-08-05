# examen-node.js-notas-ejercicio

PROYECTO FINAL NodeJS - TypeScript

1.Arquitectura
Se considera una arquitectura de tres capas:
*Capa de presentación: rutas, controlador.
*Capa lógica de negocio: servicio.
*Capa de acceso a base de datos: modelos,repositorios.

2.Flujo
*Nuestro punto de entrada es el archivo index.ts.
*El index.ts ataca el router que es donde se encuentran las rutas(resources).
*Cada ruta ataca un controlador.
*El controlador ataca a al servicio(lógica de negocio).
*El servicio ataca al repositorio.
*Repositorio ataca el modelo. 

3.PASOS A SEGUIR
1. Creo el directorio del proyecto:

mkdir nodejs-final-project
cd nodejs-final-project

2. Inicializar el proyecto con npm

npm init -y
Con esto se crea la carpeta package.json

3. Instalar las librerias o dependencias necesarias

*express: Framework para Node.js: Se instala como dependencia de producción: (npm install express)
Con Esto se crean las carpetas node_modules y package-lock.json

*sequelize: ORM para Node.js: Se instala como dependencia de producción: (npm install sequelize)

*instalar typescript y los tipos para node.js:
(npm install typescript @types/node --save-dev)

*inicializar typescript:
(npx tsc --init) Se crea el archivo tsconfig.json

*sequelize-typescript: Decoradores de TypeScript para Sequelize. Nos permite: 
(npm install sequelize sequelize-typescript reflect-metadata)

-Definir modelos con clases de TypeScript.
-Definir relaciones entre modelos con decoradores.
-Definir validaciones con decoradores.

*mysql2: Driver de MySQL para Node.js.
(npm install mysql2)

*nodemon: Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando la aplicación cuando se detectan cambios en el código fuente. 
(npm install --save-dev nodemon)

*En el packaje.json creamos un script con "start": "nodemon"

*ts-node: Ejecuta typescript directamente en node.js sin necesidad de compilarlo nuevamente. 
(npm install -D ts-node)

*tsyringe: Contenedor de inyección de dependencias para TypeScript.
(npm install tsyringe)

*@types/express: Definiciones de tipos para Express. Recordemos que @types significa que es un paquete de definiciones de tipos TypeScript.
(npm install --save-dev @types/express)

*@types/sequelize: Definiciones de tipos para Sequelize.
(npm install --save-dev @types/sequelize
)

*@types/node: Definiciones de tipos para Node.js
(npm install --save-dev @types/node)

*jsonwebtoken: se utiliza para crear y verificar JSON Web Tokens(JWT). lOS JWT son una forma compacta y segura de transmitir información entre partes como un objeto JSON. Son especialmente útiles para la autenticación y la autorización en aplicaciones web.
(npm install jsonwebtoken)

*@types/jsonwebtoken
(npm install --save-dev @types/jsonwebtoken)

*dotenv
npm install dotenv

4. Aegurarse de tener la configuración básica en el tsconfig.json

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src"]
}

5. Estructura de archivos y directorios

project-name/
├── src/
│ ├── config/
│ │ └── db.ts
│ │ └── container.ts
│ ├── controllers/
│ │ ├── userController.ts
│ │ └── productController.ts
| | └── ...
│ ├── models/
│ │ ├── User.ts
│ │ └── Product.ts
| | └── ...
│ ├── repositories/
│ │ ├── UserRepository.ts
│ │ └── ProductRepository.ts
| | └── ...
│ ├── routes/
│ │ ├── Router.ts
│ │ ├── UserRoutes.ts
│ │ └── ProductRoutes.ts
| | └── ...
│ ├── services/
│ │ ├── UserService.ts
│ │ └── ProductService.ts
| | └── ...
│ └── index.ts
├── node_modules/
├── package.json
├── tsconfig.json
└── nodemon.json


CODIGOS DE ESTADO
Los códigos de estado de respuesta HTTP son importantes para entender cómo los servidores web responden a las solicitudes realizadas por los clientes (como navegadores web). Estos códigos están divididos en cinco categorías principales, cada una representada por el primer dígito del código. Aquí tienes una lista de los códigos de estado más comunes para los diferentes verbos HTTP:

1xx: Informativos
100 Continue: El cliente debe continuar con la solicitud.
101 Switching Protocols: El servidor acepta cambiar el protocolo de comunicación.
2xx: Éxito
200 OK: La solicitud ha tenido éxito. Común para GET, POST, PUT, DELETE.
201 Created: La solicitud ha tenido éxito y se ha creado un nuevo recurso. Común para POST y PUT.
202 Accepted: La solicitud ha sido aceptada para procesamiento, pero no se ha completado. Común para POST, PUT, DELETE.
204 No Content: La solicitud ha tenido éxito pero no devuelve contenido. Común para DELETE.
3xx: Redirección
301 Moved Permanently: El recurso solicitado ha sido movido permanentemente a una nueva URL.
302 Found: El recurso solicitado reside temporalmente en una URL diferente.
304 Not Modified: No hay contenido nuevo para devolver, se puede usar la versión en caché del recurso.
4xx: Error del Cliente
400 Bad Request: La solicitud no puede ser procesada debido a un error del cliente (p. ej., sintaxis incorrecta).
401 Unauthorized: La solicitud requiere autenticación. Común para cualquier verbo HTTP si se necesita autenticación.
403 Forbidden: El servidor entiende la solicitud, pero se niega a autorizarla.
404 Not Found: El servidor no puede encontrar el recurso solicitado. Común para GET.
405 Method Not Allowed: El método especificado en la solicitud no está permitido para el recurso.
409 Conflict: La solicitud no puede ser completada debido a un conflicto con el estado actual del recurso. Común para PUT.
422 Unprocessable Entity: La solicitud está bien formada, pero no se puede procesar debido a errores semánticos.
5xx: Error del Servidor
500 Internal Server Error: El servidor ha encontrado una situación que no sabe cómo manejar.
501 Not Implemented: El servidor no reconoce el método de solicitud o no tiene capacidad para cumplirlo.
502 Bad Gateway: El servidor recibió una respuesta inválida de un servidor de respaldo.
503 Service Unavailable: El servidor no está disponible temporalmente, generalmente debido a mantenimiento o sobrecarga.
504 Gateway Timeout: El servidor no recibió una respuesta a tiempo de un servidor de respaldo.
Ejemplos de Uso con Verbos HTTP
GET /recurso

200 OK: El recurso se ha recuperado con éxito.
404 Not Found: El recurso no existe.
304 Not Modified: No hay cambios en el recurso.
POST /recurso

201 Created: El recurso se ha creado con éxito.
400 Bad Request: Los datos enviados son incorrectos.
409 Conflict: El recurso ya existe.
PUT /recurso

200 OK: El recurso se ha actualizado con éxito.
201 Created: El recurso no existía y se ha creado.
400 Bad Request: Los datos enviados son incorrectos.
404 Not Found: El recurso a actualizar no existe.
DELETE /recurso

200 OK: El recurso se ha eliminado con éxito.
204 No Content: El recurso se ha eliminado con éxito, sin contenido adicional.
404 Not Found: El recurso no existe.