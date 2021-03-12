<!-- section-title: 🚂 Componentes  -->

# 🚂 Componentes

<br />

Un componente es un modulo independiente el cual puede contener, lógica, estado y vista. Prácticamente todo en React está hecho a base de componentes, los hay de dos tipos `class components` o `function components`.

<!-- block-start: grid -->
<!-- block-start: column -->

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default App;
```

<!-- block-end -->
<!-- block-start: column -->

```js
import React from 'react';

const App = () => (
  <div className="App">
    <h1>Hello, React!</h1>
  </div>
);

export default App;
```

<!-- block-end -->
<!-- block-end -->

Actualmente lo mas común es encontrar `function components`.

---

## Estructura de componentes

Los componentes como ya hemos visto son piezas atómicas, estas piezas se hacen públicas al resto de nuestra aplicación por medio de la keyword `export`.

En React podemos combinar diferentes piezas atómicas para crear entidades más grandes como moléculas y seguir combinándolas entre si para crear la estructura que se adecue a nuestras necesidades.

```js
import React from 'react';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
```

---

## Diferencias entre componentes

A parte de los ya mencionados tipos de componentes, diferenciamos los componentes según la complejidad de los mismos, en este caso a grandes rasgos también tenemos dos tipos.

<br />

- `Componentes presentacionales`: Son componentes sin o con poca lógica, sin estado propio, puramente dedicados a mostrar UI.
- `Componentes Contenedor`: Componentes que no suelen ser atómicos, contienen una combinación de otros componentes mas pequeños, tienen lógica, estado propio, llamadas a servicios, etc.

No hay una diferencia en la sintaxis en como utilizar un componente u otro, es algo meramente teórico.
