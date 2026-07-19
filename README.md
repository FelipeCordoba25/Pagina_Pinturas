# Portafolio de Artista Visual — Nancy Córdoba

Sitio web de portafolio para una artista visual independiente, pensado para dar
visibilidad a su obra y facilitar el contacto de posibles compradores.

## 🎨 Estado del proyecto

El sitio está **funcional**, pero el contenido final (títulos y descripciones
de cada obra) está pendiente de que la artista lo envíe. Actualmente el
catálogo se muestra con datos de ejemplo/placeholder en esos campos
específicos, mientras que la técnica, dimensiones, precio y disponibilidad de
cada pintura sí son datos reales.

## 🛠️ Tecnologías

- HTML, CSS y JavaScript puro (sin frameworks ni librerías)
- `fetch` + JSON para cargar y renderizar el catálogo de forma dinámica
- [Formspree](https://formspree.io/) para el envío del formulario de contacto sin backend propio

## 📄 Páginas

- **`index.html`** — Presentación de la artista y obras destacadas
- **`catalogo.html`** — Galería completa de pinturas, con un modal/lightbox que
  muestra técnica, dimensiones, precio, disponibilidad y descripción al hacer
  clic en cada obra
- **`contacto.html`** — Formulario de contacto funcional (envía el mensaje por correo vía Formspree)

## 📂 Estructura

```
├── index.html
├── catalogo.html
├── contacto.html
├── css/
│   └── styles.css
├── JS/
│   ├── catalogo.js       # Carga el catálogo desde data/pinturas.json y maneja el modal
│   └── contacto.js       # Envío del formulario a Formspree
├── data/
│   └── pinturas.json     # Datos de cada obra (técnica, dimensiones, precio, etc.)
└── images/
```

## ▶️ Cómo verlo localmente

Al usar `fetch` para cargar el JSON del catálogo, no basta con abrir
`index.html` directamente desde el explorador de archivos — hay que servirlo
con un servidor local. Por ejemplo, con la extensión **Live Server** de VS
Code, o con Python:

```bash
python -m http.server 8000
```

Y luego abrir `http://localhost:8000` en el navegador.

## 📝 Pendiente

- [ ] Reemplazar los títulos y descripciones de las obras con la información definitiva de la artista
- [ ] Agregar la biografía real de la artista en la sección "Sobre la Artista" (index.html), actualmente con un texto provisional
- [ ] Reemplazar la foto provisional junto a "Sobre la Artista" por una foto real
- [ ] Agregar el número de WhatsApp y usuario de Instagram reales en contacto.html (actualmente son placeholders sin destino real)
- [ ] Publicar en un dominio propio (en evaluación)
