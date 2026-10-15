# POSTROBBU · Hotel POS (demo estática)

Basado en la estrategia de **GroceryStore**: `index.html`, `style.css` y JavaScript plano desde la raíz, **sin Node, Vite, React, npm ni Supabase** para operar esta versión de demostración.

## GitHub Pages
1. Sube **el contenido** de esta carpeta directamente a la raíz de `GustavoChan21/POSTROBBU` (no subas la carpeta contenedora).
2. Conservar la única subcarpeta obligatoria: `.github/workflows/pages.yml`.
3. Configura `Settings > Pages > Build and deployment > GitHub Actions`.
4. El push a `main` publica automáticamente en `https://gustavochan21.github.io/POSTROBBU/`.
5. Comprueba en la pestaña Actions que la ejecución terminó correctamente. No se requiere `npm install`.

## Vista previa en local
Abre `index.html` directamente en tu navegador. También puedes usar `python3 -m http.server 8080` y abrir `http://localhost:8080`.

## Prueba guiada
- POS: selecciona Restaurante Arbequina, toca Chilaquiles, elige extras, agrega a comanda y envía.
- KDS: mueve Nueva > Preparando > Lista > Entregada.
- Mesas y cuentas: cobra el pedido con tarjeta o cargo a habitación (simulados).
- Inventario: comprueba el consumo de recetas y los movimientos de respaldo. Cambia a Pool Bar para transferir tequila desde Almacén general.
- Dashboard: revisa ventas por punto de venta.
- Configuración: crea 3 comandas de prueba, exporta respaldo o restablece la demo.

## Base demo
`seed.js` contiene el catálogo, puntos de venta, almacenes, insumos, recetas y modificadores. `app.js` guarda los movimientos en `localStorage` bajo `postrobbu-local-v3`. Los movimientos no se comparten entre dispositivos y no son contabilidad real.

## Importante
Las operaciones de caja, PMS y habitación son simulaciones; no existe conexión con terminal bancaria ni bases remotas. Las validaciones de inventario son demostrativas. Para producción hace falta backend transaccional, permisos, auditoría y sincronización multi-dispositivo.


## Mejoras touch y KDS
- Stepper de cantidades con botones táctiles de 52 px (60 px en móvil) y valor central.
- Cocina en 4 columnas: Nuevo, En preparación, Listo y Entregado.
- Cada comanda muestra progreso visual, etapas y tiempo transcurrido.
- El historial `history` de estados se guarda en la base demo del navegador.


## KDS estilo Jira (nuevo)
El KDS presenta cuatro columnas: **Nuevo**, **En preparación**, **Listo** y **Entregado**. Las tarjetas se pueden arrastrar entre columnas con mouse. En pantallas touch utiliza el asa `⠿ Arrastrar comanda` para moverlas con el dedo. Como alternativa accesible, cada tarjeta incluye un selector **Cambiar estado** y un botón para avanzar. Los cambios se registran localmente en `history` con fecha y hora y persisten después de recargar.

## KDS tablero Jira (versión actualizada)
- **Cuatro columnas permanentes**: Nuevo, En preparación, Listo, Entregado.
- En primer arranque se precargan **8 comandas de ejemplo**, distribuidas 3/2/2/1 entre columnas para mostrar el tablero completo. Se conservan en localStorage.
- Mover entre columnas arrastrando la tarjeta (mouse), desde el asa «Mover tarjeta» (touch), seleccionando el estado o pulsando la flecha.
- Para reiniciar la demo y ver los 8 ejemplos, ir a Configuración > Restablecer demo.
