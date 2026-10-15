# POSTROBBU - KDS Board Jira V4

## Entrada directa al tablero
Abrir `kds.html` (o `https://gustavochan21.github.io/POSTROBBU/kds.html`) para ver las 4 columnas del tablero sin pasar por la antigua vista KDS. En `index.html`, seleccionar Cocina/KDS abre este tablero.

## Instalación
No requiere npm, Vite, React o Supabase. Todos los archivos de la aplicación se encuentran en la raíz. GitHub Pages: Settings > Pages > GitHub Actions. El flujo está en `.github/workflows/pages.yml` porque GitHub lo exige.

## Pruebas
`node --check app.js && node --check kds.js && node --check seed.js`.

La base de prueba utiliza localStorage con 8 comandas repartidas entre los cuatro estados. El botón Reiniciar tablero regenera las 8 comandas. Interacciones: arrastrar mouse, arrastrar touch y cambiar mediante select o flecha. Si la URL antigua muestra una caché previa, navegar directamente a `/POSTROBBU/kds.html`.

Es una demo local y pagos simulados; no sincroniza múltiples equipos ni está conectada a Supabase.
