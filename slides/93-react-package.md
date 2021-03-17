<!-- section-title: 📦 Paquete React -->

# 📦 Paquete React

<br />

## Estructura de un proyecto React

Los proyectos React cuando están montados sobre un proyecto propio más allá del uso por CDNs, suelen venir acompañados de algunos conceptos adicionales.

- package manager: Normalmente utilizamos [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/), este software nos ayuda a manejar las dependencias al instalar librerias de terceros. En el archivo `package.json` en la raiz de nuestro proyecto encontraremos una lista de dependencias y sus versiones.

- module bundler: Lo más común es utilizar [webpack](https://webpack.js.org/), el cual ya viene por defecto al usar Create React App, aun que también hay alternativas como [Parcel](https://parceljs.org/). El module bundler genera un paquete con las dependencias, así como con los diferentes modulos JS que tenemos en nuestra aplicación para generar los archivos que finalmente subiremos a Internet. En ese proceso de construcción se le pueden indicar diferentes reglas a la hora de que version de JS queremos "compilar" u otros cambios.

---

## Estructura de carpetas

Todo el código que se desarrolle estará alojado en la carpeta `src`, la cual está dividida de la siguiente forma.

### assets

Cualquier contenido estático, como fuentes e imágenes que no está pensado que cambien.

### components

Los elementos de pantalla que sean suisceptibles de repetirse deberán de abstraerse y crearse en forma de componente en esta carpeta con el fin de ser reutilizados.

### context

Aquellos contextos que necesitemos para nuestra aplicación estarán alojados en esta carpeta.

### hooks

Igual que con las piezas de UI, si tenemos lógica que se repite habitualmente debemos valorar abstraerlo en un hook.

### pages

Cualquier ruta que decidamos que sea accesible mediante navegación debe ir en esta carpeta de cara a tener una visión rápida y clara de cuantas/cuales pantallas tiene el proyecto.