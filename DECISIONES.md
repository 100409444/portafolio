# Registro de Decisiones de Diseño y Arquitectura (DECISIONES.md)

## 1. Secciones del Sitio
- **Hero:** Impacto inicial con propuesta de valor clara y llamadas a la acción (CTA).
- **Sobre mí:** Contexto profesional, filosofía de trabajo y enfoque en desarrollo web.
- **Proyectos:** Selección de 3 proyectos clave con demostración de tecnologías aplicadas.
- **Habilidades:** Agrupadas en Frontend, Herramientas y Metodologías para facilitar lectura rápida por reclutadores.
- **Contacto:** Formulario funcional con validación JS y accesos directos a redes.

## 2. Paleta de Colores y Contraste
- `--color-primario`: `hsl(220, 70%, 45%)` -> Azul profesional, elegido por dar legibilidad y sensación de confianza.
- `--color-fondo`: `hsl(0, 0%, 98%)` -> Blanco no puro para reducir la fatiga visual.
- `--color-texto`: `hsl(220, 15%, 20%)` -> Gris oscuro con alto contraste sobre el fondo (ratio > 4.5:1 en WebAIM).
- `--color-acento`: `hsl(180, 60%, 45%)` -> Creado para llamadas a la acción e interacciones visuales.

## 3. Tipografía
- **Principal:** `'Inter', system-ui, sans-serif` -> Excelente legibilidad en resoluciones móviles y pantallas de alta densidad.
- **Código:** `'JetBrains Mono', monospace` -> Utilizada para fragmentos técnicos.

## 4. Arquitectura del Código
- **HTML Semántico:** Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>` para optimizar SEO y lectura con lectores de pantalla.
- **CSS Modular:** Separado en 7 archivos específicos para facilitar el mantenimiento sin depender de compiladores.
- **JS Vanilla (ES6+):** Enfoque ligero y sin dependencias externas para garantizar la máxima velocidad de carga y cumplimiento de métricas Lighthouse.