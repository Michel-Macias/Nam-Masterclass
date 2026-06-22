# Tasks: branching-stories

## 1. Setup & HTML

- [ ] 1.1 Agregar tarjeta de "Historias Ramificadas" en la rejilla del menú principal (`#menu-home` en [index.html](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/index.html))
- [ ] 1.2 Agregar la vista `<section id="story-viewer" class="view">` en [index.html](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/index.html) con botón de volver y contenedores de viñetas, textos narrativos y opciones de decisión
- [ ] 1.3 Agregar contenedor `#story-results` para inyectar los KPIs y feedback final al terminar una historia

## 2. CSS Styles

- [ ] 2.1 Diseñar botones de opciones ramificadas `.btn-story-option` con animaciones de hover y active adaptadas a modo claro/oscuro en [style.css](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/src/style.css)
- [ ] 2.2 Estilizar el contenedor de la historia ramificada y la pantalla de resultados (satisfacción e ingresos) en [style.css](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/src/style.css)

## 3. JS Data Structure (Stories Database)

- [ ] 3.1 Escribir el objeto global `stories` en [main.js](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/src/main.js) conteniendo la estructura completa de nodos para las 3 historias planificadas (Alérgenos, Hora Punta y Venta Sugestiva)

## 4. JS Engine Logic & Render

- [ ] 4.1 Enlazar la navegación al hacer clic en la tarjeta del menú e inicializar las variables de estado (nodo inicial, satisfacción = 100%, ingresos = 0) en [main.js](file:///home/m1txel/Escritorio/02_Proyectos/Michel_Macias_Repos/Nam-Masterclass/src/main.js)
- [ ] 4.2 Implementar la función `showStorySelection()` para listar las historias disponibles si hay múltiples
- [ ] 4.3 Programar la función `renderStoryNode(storyKey, nodeId)` encargada de inyectar la viñeta, el texto y renderizar botones dinámicamente según si es un paso lineal, una decisión o un final
- [ ] 4.4 Programar el gestor de eventos de los botones para aplicar los impactos de KPIs, avanzar en el grafo e invocar la pantalla de resultados y confeti

## 5. Verification

- [ ] 5.1 Validar empaquetado del proyecto ejecutando la compilación de Vite (`npm run build`)
