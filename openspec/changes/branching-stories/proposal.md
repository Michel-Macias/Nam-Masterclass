## Why

Actualmente, Ñam Masterclass cuenta con guías de formación estáticas y un sistema básico de preguntas y respuestas. Para mejorar el aprendizaje activo, la retención de información y simular la toma de decisiones en el entorno real de un restaurante, es necesario introducir "Historias Ramificadas" (estilo elige tu propia aventura) donde los empleados tomen decisiones ante situaciones cotidianas del servicio y experimenten las consecuencias visuales de inmediato.

## What Changes

*   **Nuevo Visor de Historias:** Creación de una sección "Historias Ramificadas" en el menú principal.
*   **Motor de Ramificación en JS:** Implementación de un motor de lógica que maneje nodos de historia, decisiones, estados y transiciones en función de las elecciones del usuario.
*   **Historias de Formación (Casos de Uso):**
    *   *Historia 1: Gestión de Alérgenos (Gluten)*: Tomar comanda a un cliente celíaco, coordinar con cocina y evitar contaminación cruzada.
    *   *Historia 2: La Terraza en Hora Punta*: Gestión del tiempo, agrupación de pedidos y control del estrés del cliente.
    *   *Historia 3: La Sugerencia Irresistible*: Técnicas de venta sugestiva (postres y maridaje de vinos) sin ser invasivo.
*   **Interfaz de Decisión:** Presentación de botones de elección múltiple al final de las viñetas clave.
*   **Pantalla de Feedback Final:** Resumen que evalúe la satisfacción del cliente conseguida, los ingresos generados (en el caso de venta sugestiva) y consejos personalizados.

## Capabilities

### New Capabilities
- `branching-stories`: Capacidad para cargar, jugar y evaluar historias interactivas de toma de decisiones en formato cómic.

### Modified Capabilities
<!-- Ninguna capacidad existente cambia de comportamiento, esto es una funcionalidad completamente nueva -->

## Impact

*   `index.html`: Nueva sección de navegación para historias y botones correspondientes.
*   `src/main.js`: Implementación de la base de datos de historias, la lógica del motor de ramificación y la inyección en el DOM.
*   `src/style.css`: Estilos para botones de opción, contenedor de historias ramificadas y feedback.
*   Assets de imagen: Carga y mapeo de las viñetas asociadas a cada nodo de decisión.
