## Context

Para implementar las historias ramificadas en Ñam Masterclass, utilizaremos la arquitectura de aplicación de una sola página (SPA) actual. Diseñaremos un motor de juego conversacional en Vanilla JavaScript que cargue historias en formato JSON/Object, gestione el estado de las variables (como la satisfacción del cliente y el volumen de ventas) y renderice las pantallas dinámicamente sin recargar la página.

## Goals / Non-Goals

**Goals:**
*   Implementar un visor interactivo de historias que use las imágenes de cómic ya existentes en el repositorio (recortándolas mediante clases CSS de panel).
*   Soportar historias con múltiples ramificaciones y finales alternativos.
*   Calcular KPIs al final de la historia (Satisfacción en %, Ingresos extra en €).
*   Integrar la nueva sección dentro del menú principal de Ñam Masterclass.

**Non-Goals:**
*   No se integrará persistencia en base de datos externa ni backend en esta fase. Toda la progresión es local en memoria durante la sesión del usuario.
*   No se descargarán nuevas imágenes de Internet; usaremos los assets existentes reorganizándolos para simular las situaciones de la historia.

## Decisions

### 1. Estructura de Datos de una Historia
Definiremos las historias en una constante `stories` en JavaScript. Cada historia tendrá nodos indexados por una clave única (`id`), permitiendo saltos directos al tomar elecciones.

*Estructura del Nodo:*
```typescript
interface StoryNode {
  id: string;
  desc: string;            // Texto narrativo
  image: string;           // URL de la imagen del cómic
  panelClass: string;      // Posicionamiento CSS del cómic
  // Si requiere decisión:
  options?: Array<{
    text: string;
    next: string;          // ID del nodo destino
    kpi?: {
      satisfaction?: number;
      revenue?: number;
    }
  }>;
  // Si es lineal (sin opciones, solo botón "Continuar"):
  next?: string;
  // Si es un nodo terminal:
  isEnd?: boolean;
  feedback?: string;       // Consejo o comentario pedagógico al finalizar
}
```

*Rationale:* Esta estructura es flexible, soporta tanto narraciones lineales de varios pasos como árboles complejos de decisiones con múltiples entradas y salidas.

### 2. Integración en el HTML y Navegación
*   Crearemos una nueva sección `<section id="story-viewer" class="view">` en `index.html` con un contenedor para la viñeta, la descripción y el contenedor de botones/opciones.
*   Utilizaremos la función existente `switchView()` para transicionar de forma animada a esta sección.

### 3. Sistema de Celebración y Resultados
*   Al llegar a un nodo con `isEnd: true`, se ocultará el panel de lectura y se inyectará dinámicamente el resumen de resultados dentro de la sección, reutilizando la estética del quiz (círculo de puntuación y feedback personalizado).
*   Si la satisfacción del cliente es igual o superior al 80%, se disparará la animación de confeti nativa en canvas.

## Risks / Trade-offs

*   **[Risk] Reutilización de imágenes:** Dado que no tenemos imágenes específicas para cada ramificación de la historia, debemos reutilizar paneles del cómic original.
    *   *Mitigation:* Usaremos descripciones de texto claras que contextualicen la escena, y recortaremos partes de los cómics que mejor encajen con la situación emocional (ej. caras sonrientes para aciertos, desorden o caras estresadas para fallos).
*   **[Risk] Complejidad del grafo:** Grafos muy profundos pueden volverse difíciles de mantener.
    *   *Mitigation:* Limitaremos las historias de esta fase a un máximo de 3-4 niveles de profundidad y 3 finales por historia.
