# IMAGINAUTAK (front)
Este es un proyecto de FrontEnd cuyo BackEnd está en este repo [este repositorio](https://github.com/crdalila/Imaginautak) y que está inspirado en la asociación [Imaginautak](https://www.instagram.com/imaginautak/), que junta una vez al mes en Bilbao diez personas que muestran sus creaciones y pasión por el arte.


## REQUISITOS Y TECNOLOGÍAS
- React Vite
- Rutas con React Router
- Manejo de usuarios y autenticación con JWT
- Gestión de imágenes múltiples con multer
- Enfoque Mobile First


## PUESTA EN MARCHA
Para poder visualizar e interactuar con este proyecto, necesitas la parte de [Backend de Imaginautak](https://github.com/crdalila/Imaginautak). Sigue las instrucciones del README del BackEnd para ponerlo en marcha.

Una vez configurado el BackEnd, para acceder al FrontEnd, necesitas ejecutar el comando:
```
npm install
```
Una vez ejecutado el install (se hace una sola vez), podrás acceder al Front siempre utilizando este otro comando y accediendo al link que se te proporciona en **Local:**:
```
npm run dev
```

## SISTEMA DE CARPETAS
La estructura y organización de carpetas para este proyecto es:

- **public > images**
    - Imágenes utilizadas en el Front (iconos SVG para navbars y utilidades)
- **src > componentes**
    - Componentes pequeños que se utilizan en pages (buttonBack, projectCard...)
- **src > context**
    - AuthContext.js: Para el contexto de Auth, que gestiona el login, registro y logout.
    - RouteContext.js: Manejo de rutas antes de usar React Router. En desuso
- **src > pages**
    - Componentes más grandes que funcionan como una página entera (artistOne, Home, CategoryList...)
- **src > utils**
    - Fetch.js: Fetch genérico para conectar el FrontEnd con el BackEnd
    - localStorage.js: Gestión de los datos de usuario que se guardan en el LocalStorage para manejo de permisos y autenticación
    - *.js: Fetch concretos para conectar los componentes con los controladores del BackEnd
- **index.css**
    - Reset del CSS para que afecte al CSS del resto de componentes
- **main.jsx**
    - Componente principal desde el que se genera el resto
- **routes.jsx**
    - Rutas genéricas y principales con React Router y sus loaders
