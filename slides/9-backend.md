<!-- section-title: 📡 Comunicación -->

# 📡 Comunicación

<br />

Hasta ahora hemos visto puramente la parte de la vista, pero en algún momento si nuestra web es mas una aplicación web que una web necesitaremos interactuar con datos exteriores.

Las dos formas mas comunes de comunicarse con el exterior en React son:

- Usar la propia API de Javascript `fetch`.
- Usar una librería de terceros como `axios`.

Comunicarse con el exterior en React esta considerado como un `side-effect` y a estas alturas ya conocemos el sitio perfecto donde hacer uso de los efectos.

---

## fetch

```js
import React, { useEffect, useState } from 'react';

const PostFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(result => {
        setPosts(result);
      });
  }, []);

  return (
    <div>
      {posts && posts.length ? (
        posts.map(post => (
          <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
};

export default PostFetch;
```

---

## axios

```js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        setPosts(result);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {posts && posts.length ? (
        posts.map(post => (
          <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
};

export default PostFetch;
```

---

## fetch vs axios

### fetch

- Fetch viene integrado en el propio JS, no es necesario instalar ninguna librería de terceros.
- Fetch es una API moderna por lo que navegadores mas antiguos no la tienen integrada.

### axios

- Axios ofrece mayor compatibilidad entre navegadores
- Permite mucha configuración a nivel de headers, respuestas por defecto, etc.
- Ofrece interceptores para hacer acciones globales en las request y responses.
- Conversion automática de las respuestas JSON.
- Protección contra ataques XSRF (Cross-site request forgery).
