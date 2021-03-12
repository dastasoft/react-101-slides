<!-- section-title: 🎉 Props  -->

# 🎉 Props

<br />

Dado que los componentes están muy relacionados entre si y podemos dividir el código a niveles atómicos, necesitamos alguna forma de poder pasar los datos entre los componentes, para esto hacemos uso de las `props` que no dejan de ser propiedades/atributos del componente.

```js
import React from 'react';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home = () => {
  const onScrollHandler = () => console.log('User is scrolling');

  return (
    <div>
      <Header title="Cool Webpage" />
      <Body onScroll={onScrollHandler} />
      <Footer year={2021} />
    </div>
  );
};

export default Home;
```

---

## Declarar props en un componente

Las props que tenga un componente pueden venir definidas por una librería de terceros que estemos utilizando en nuestro proyecto, por el propio React o en el caso de ser un componente que hemos creado nosotros podemos definir las props que necesitemos.

```js
import React from 'react';

const Header = props => {
  return <header>{props.title}</header>;
};
```

Todos los componentes de React, contienen un objeto `props` del cual saldrán las propiedades que envíemos desde los componentes padre.

En las propiedades podemos enviar todo tipo de datos, cualquier primitive de JS como strings o numbers, arrays, functions o incluso componentes enteros.

---

## "Alternativas" a las props

Una de las alternativas mas utilizadas a las props es el uso del `Context` que veremos en slides posteriores pero también podemos enviar el contenido de un tag como propiedad.

```js
import React from 'react';

import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header>Cool Webpage</Header>
    </div>
  );
};

export default Header;
```

```js
import React from 'react';

const Header = props => {
  return <header>{props.children}</header>;
};
```

`children` es una propiedad especial que contiene todo lo que este entre los tags del componente.