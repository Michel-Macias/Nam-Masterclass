## ADDED Requirements

### Requirement: Registro y Visualización del Menú de Historias
El sistema SHALL registrar un listado de historias ramificadas en el menú principal y permitir al usuario iniciar cualquiera de ellas de forma independiente.

#### Scenario: Visualización de historias en menú
- **GIVEN** El usuario está en el menú de inicio
- **WHEN** El usuario visualiza la sección de "Historias Ramificadas"
- **THEN** El sistema SHALL mostrar las opciones de historias disponibles (Alérgenos, Hora Punta, Venta Sugestiva) con sus respectivos títulos y resúmenes

---

### Requirement: Lógica de Ramificación y Navegación de Nodos
El sistema SHALL gestionar la historia en forma de grafo dirigido de nodos (pantallas), donde cada nodo contiene una viñeta, una descripción y un conjunto de opciones o un botón de continuación. Al seleccionar una opción, el sistema SHALL cambiar el nodo actual por el destino especificado.

#### Scenario: Avance lineal sin decisiones
- **GIVEN** El usuario está en un nodo intermedio que no requiere tomar decisiones
- **WHEN** El usuario hace clic en el botón de continuar
- **THEN** El sistema SHALL cargar y mostrar el siguiente nodo lineal de la historia

#### Scenario: Bifurcación al tomar una decisión
- **GIVEN** El usuario está en un nodo que requiere tomar una decisión crítica del servicio
- **WHEN** El usuario hace clic en uno de los botones de opción presentados
- **THEN** El sistema SHALL actualizar el estado del juego con la elección y transicionar de forma animada al nodo correspondiente, mostrando la consecuencia visual de su decisión

---

### Requirement: Evaluación de Resultados y Pantalla Final
El sistema SHALL realizar el seguimiento de las elecciones tomadas por el usuario, calcular la satisfacción final del cliente (y otros KPIs opcionales como facturación adicional) y mostrar una pantalla de resumen final con recomendaciones pedagógicas y un botón para reiniciar la historia.

#### Scenario: Llegada a un nodo final
- **GIVEN** El usuario selecciona la última opción de la historia y llega a un nodo terminal
- **WHEN** El sistema detecta que el nodo actual no tiene más salidas ni opciones
- **THEN** El sistema SHALL calcular los KPIs del servicio basados en la ruta tomada, mostrar la pantalla de resultados, otorgar un rango de servicio y disparar una celebración visual si la puntuación es sobresaliente
