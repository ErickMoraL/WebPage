# Portafolio Personal - Erick Morales

Sitio web personal desarrollado como portafolio profesional para presentar mi perfil académico, habilidades técnicas y proyectos como estudiante de Ingeniería en Informática.

## Descripción

Este es mi primer proyecto personal completo y estructurado, diseñado para mostrar mi trayectoria académica y profesional. El sitio incluye información sobre mi formación en el IPN-UPIICSA, mis habilidades técnicas, y un formulario de contacto funcional.

## Características

- Diseño responsive adaptable a diferentes dispositivos
- Navegación fluida con enlaces internos
- Sección "Sobre mí" con información académica y profesional
- Catálogo de habilidades técnicas y blandas
- Galería de proyectos
- Formulario de contacto interactivo con validación
- Interfaz moderna con gradientes y sombras sutiles
- Optimización de accesibilidad (reduced motion support)

## Tecnologías

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos modernos con CSS custom properties, flexbox y grid
- **JavaScript (Vanilla)**: Interactividad del formulario de contacto

### Características técnicas del CSS
- Variables CSS para temas consistentes
- Grid layout para secciones complejas (contacto)
- Flexbox para navegación y elementos adaptables
- Media queries para diseño responsive
- Transiciones y animaciones suaves
- Focus states para accesibilidad

## Estructura del Proyecto

```
PaginaWeb/
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── script.js           # Lógica del formulario
├── Pictures/           # Recursos de imagen
│   └── profilePicture.png
└── README.md           # Documentación
```

## Instalación y Uso

### Requisitos previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

### Ejecución local

1. Clona este repositorio:
```bash
git clone <url-del-repositorio>
cd PaginaWeb
```

2. Abre el archivo `index.html` en tu navegador preferido:
```bash
# Opción 1: Abrir directamente
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Opción 2: Usar un servidor local
python3 -m http.server 8000
# Luego visita: http://localhost:8000
```

## Secciones del Sitio

### 1. Sobre mí
- Extracto profesional
- Datos académicos (IPN - UPIICSA)
- Lista de habilidades técnicas y soft skills

### 2. Proyectos
- Galería de proyectos destacados
- Descripciones y enlaces (en desarrollo)

### 3. Contacto
- Formulario de contacto con validación
- Información de contacto directo (email, teléfono, ubicación)

## Personalización

Para adaptar este sitio a tus necesidades:

1. **Colores**: Modifica las variables CSS en `styles.css:22-32`
```css
:root {
  --bg: #fafafa;
  --primary: #374151;
  --accent: #4b5563;
  /* ... más variables */
}
```

2. **Contenido**: Edita el texto en `index.html`

3. **Estilos**: Ajusta `styles.css` según tus preferencias

## Futuras Mejoras

- Integración con servicio de email real (EmailJS, Formspree)
- Añadir animaciones más complejas
- Implementar modo oscuro
- Añadir sección de blog/artículos
- Galería de proyectos con más detalles e imágenes
- Integración con GitHub API para mostrar repositorios
- Versión en inglés

## Navegadores Compatibles

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)

## Licencia

Este proyecto es personal y está disponible bajo uso educativo.

## Contacto

**Erick Alejandro Morales Lucio**
- Email: erickmora0503@gmail.com
- Teléfono: +52 55 7992 8573
- Ubicación: Ciudad de México, Iztapalapa

---

Desarrollado con dedicación como mi primer proyecto personal completo.
