<!-- section-title: 💪 JSX JavaScript + XML  -->

# 💪 JSX: JavaScript + XML

<br />

Si has mirado código anteriormente de React, habrás visto código que parece HTML pero realmente no lo es, en realidad utilizamos _JSX_ el cual viene de JavaScript XML.

<br />

Si conoces HTML las diferencias son pocas por lo que la curva de aprendizaje no es pronunciada.

```js
const myJSX = <h1 className="my-css-class">Hello, React!</h1>;
```

Utilizar JSX no es obligatorio pero si altamente recomendado, React por detrás esta generando algo como esto:

```js
const myJSX = React.createElement(
  'h1',
  { className: 'my-css-class' },
  'Hello, React!'
);
```

---

## Algunas diferencias

Realmente JSX está mas cerca de JavaScript que de HTML, pero hay algunas diferencias a tener en cuenta.

- `className` se utiliza en vez de `class` para los nombres de clase en CSS ya que class es una palabra reservada en JS.
- Las propiedades en JSX son camelCase, por ejemplo `onclick` es `onClick`
- Las tags deben auto cerrarse `<img />`

Se puede utilizar JavaScript dentro del JSX.

```js
const year = new Date().getFullYear();
const heading = <h1>Welcome Marty, you're in year {year}</h1>;
```
