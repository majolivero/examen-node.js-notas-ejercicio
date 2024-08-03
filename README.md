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
(npx tsc --init)

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

