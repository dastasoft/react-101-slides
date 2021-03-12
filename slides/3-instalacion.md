<!-- section-title: 🛠️ Instalación y requisitos -->

# 🛠️ Instalación y requisitos

<br />

## Requisitos

- [NodeJS](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Navegador](https://www.google.es/chrome/)
- [JavaScript ES6](https://kentcdodds.com/blog/javascript-to-know-for-react)

---

## Formas de utilizar React

### Online Sandboxes

- [CodePen](https://reactjs.org/redirect-to-codepen/hello-world)
- [CodeSandbox](https://codesandbox.io/s/new)
- [Stackblitz](https://stackblitz.com/fork/react)

---

## CDN

Podemos importar la librería React directamente desde la CDN a nuestro proyecto HTML existente.

```html
<body>
  <script
    crossorigin
    src="https://unpkg.com/react@17/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
  ></script>
</body>
```

```js
class App extends React.Component {
  //...
}
```

---

## Create React App

Facebook tiene una herramienta con la cual crear nuevos proyectos React a través de una template que se va actualizando con las nuevas versiones y las configuraciones más comunes, dicha herramienta la podéis encontrar en [Create React App](https://github.com/facebook/create-react-app)

<br />

<!-- block-start: grid -->
<!-- block-start: column -->

Para utilizarla, en un Terminal:

```sh
npx create-react-app my-react-app
```

<!-- block-end -->
<!-- block-start: column -->

![create-react-app](https://www.taniarascia.com/static/1c5a36e06f57edfc718276e9ddf9a9c1/a6d36/Screen-Shot-2018-08-18-at-11.37.59-AM.png)

<!-- block-end -->
<!-- block-end -->
