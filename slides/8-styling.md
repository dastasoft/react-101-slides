<!-- section-title: 🎖️ Estilos -->

# 🎖️ Estilos

<br />

En React hay multitud de formas de cambiar los estilos de nuestra aplicación. Entre las mas comunes:

- CSS / SASS
- CSS / SASS Modules
- CSS in JS (in-line, styled-components, emotion)
- Frameworks (Bootstrap, TailwindCSS)

---

## CSS / SASS

Igual que se hace en HTML podemos utilizar archivos `.css` o `.scss` para dotar de estilo nuestros componentes.

La estructura general de archivos de un componente debería ser muy similar a la siguiente:

```sh
|- components
|-- MyComponent
|--- MyComponent.js
|--- MyComponent.css
|--- index.js
```

Dentro de `MyComponent.js` debemos incluir el archivo de estilos.

```js
import React from 'react';

import './MyComponent.css';

const MyComponent = () => {
  return <h1 className="my-component-style">MyComponent</h1>;
};

export default MyComponent;
```

_Recordad que `class` es una keyword reservada, debemos utilizar `className` para indicar que clase CSS queremos utilizar._

---

## CSS / SASS - Pros y Cons

### Pros

- CSS es un standard que lleva en la industria muchos años, los archivos CSS pueden ser re aprovechados en otras aplicaciones fuera del ecosistema React.

### Cons

- Por mucho que definamos los estilos a nivel de componente, al final React los emplaza en el tag `<head>` del HTML resultante, por lo que hay que tener en mente que si repetimos nombres de clases, colisionarán entre ellas.

---

## CSS / SASS Modules

Para solventar el problema que mencionábamos anteriormente, se crearon los `Modules`. Si hemos creado nuestro proyecto React con `create-react-app` es tan sencillo como hacer la siguiente estructura de archivos:

```sh
|- components
|-- MyComponent
|--- MyComponent.js
|--- MyComponent.module.css
|--- index.js
```

Dentro del archivo `MyComponent.module.css` definiremos las clases CSS de la misma forma, pero al aplicarlas en el componente lo haremos de la siguiente forma:

```js
import React from 'react';

import classes from './MyComponent.module.css';

const MyComponent = () => {
  return <div className={classes.MyClass} />;
};

export default MyComponent;
```

Con esto lo que conseguimos es que el builder inserte un hash al nombre de la clase CSS, de tal forma que no se repitan los nombres.

---

## Modules - Pros y Cons

### Pros

- No hay problemas con el solapamiento de nombres.
- Se sigue utilizando CSS.

---

## CSS in JS

Como sugiere el nombre, CSS in JS es un patrón para utilizar los atributos que hay en el CSS directamente en un objeto JS, por esta razón las propiedades serán camelCase.

```js
<div style={{ borderBottom: '1px solid black' }} />
```

Con esto nos aseguramos que no hay problemas de solapar nombres de clases CSS ya que asignamos individualmente los estilos a un elemento.

```js
const MyComponent = () => {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    margin: '0 5px auto'
  };

  style.backgroundColor = 'green';

  return (
    <div>
      <p style={style}>We have the same style</p>
      <p style={style}>We have the same style</p>
    </div>
  );
};
```

---

## CSS in JS - Pros y Cons

### Pros

- Es mas amigable para un perfil mas experto en JS que en CSS
- No hay problemas con el solapamiento de nombres
- Es mas sencillo manejar cambios de estilo a través de variables JS

### Cons

- No es un standard que se pueda utilizar fácilmente fuera del ecosistema React.
- Se debe recargar la aplicación mientras se codifica.
- Se incrementa notablemente el tamaño del JS a empaquetar.
