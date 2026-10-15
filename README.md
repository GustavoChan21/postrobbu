# POSTROBBU — Kanban V5

Aplicación completamente estática, sin compilación, sin Supabase. Subir TODOS los archivos a la **raíz** de `GustavoChan21/POSTROBBU` (única excepción `.github/workflows/pages.yml`).

**Importante:** eliminar versiones antiguas de `index.html`, `app.js` y `kds.html` al subir estos archivos. Configurar Settings → Pages → GitHub Actions y confirmar el despliegue.

- POS: `https://gustavochan21.github.io/POSTROBBU/`
- KDS DIRECTO: `https://gustavochan21.github.io/POSTROBBU/kds.html?v=kanban-v5`

El menú Cocina / KDS contiene un **enlace HTML directo** a `kds.html`; evita completamente ejecutar la vista anterior de `app.js`.
`kds.html` tiene cuatro columnas en HTML inicial; `kds.js` muestra las comandas demo y maneja arrastrar/soltar, selector y botón de avance.

Para probar localmente: `python3 -m http.server 8080`, luego abrir `http://localhost:8080/kds.html`. La base demo es independiente en cada navegador mediante localStorage, sin sincronización.

## Comprobaciones
`node --check app.js; node --check seed.js; node --check kds.js; node verify-board.cjs`
