# ☕ Simple Coffee Listing - Frontend Challenge

Una aplicación web moderna y responsiva para mostrar un catálogo dinámico de cafés, construida con **React** y **Vite**.

## 🎯 Objetivos de Aprendizaje Cumplidos

✅ **Configuración de entornos modernos con Vite**
- Proyecto creado con Vite (no CRA)
- Hot Module Replacement (HMR) para desarrollo rápido
- Optimizaciones de build automáticas

✅ **Creación de Componentes Funcionales y Props**
- `Card.jsx`: Componente reutilizable que recibe datos vía props
- `FilterBar.jsx`: Componente de botones de filtro
- `List.jsx`: Componente controlador de la lista
- `SkeletonCard.jsx`: Componente de carga

✅ **Renderizado Condicional y Listas con Keys**
- Tags de "Popular" renderizados condicionalmente
- Badge "Vendido" para productos no disponibles
- Rating y votos mostrados solo si existen
- Mapeo correcto con `key={coffee.id}`

✅ **useState y useEffect**
- Estado de datos: `allCoffees`, `activeFilter`, `loading`, `error`
- Fetch de API en `useEffect` sin dependencias (montar solo)
- Derivación de datos filtrados sin estado adicional

✅ **Lifting State Up**
- Filtro centralizado en `App.jsx`
- Props `activeFilter` y `onFilterChange` en `FilterBar`
- Un único origen de verdad para el estado compartido

## 🚀 "Plus" - Requerimientos Adicionales Implementados

✅ **Skeleton Loading**
- Animación de carga con gradiente en movimiento
- Se muestra mientras `loading === true`
- Desaparece al cargar los datos

✅ **Empty State**
- Mensaje amigable cuando no hay productos disponibles
- Ícono de café y texto descriptivo
- Mejora la experiencia del usuario

✅ **Diseño Responsive**
- Mobile-first approach
- Grid responsivo que se adapta a:
  - **Desktop**: 3-4 columnas
  - **Tablet**: 2-3 columnas
  - **Mobile**: 1 columna
- Padding, font-sizes y espaciamiento adaptativos
- Cumple con WCAG 2.1 (accesibilidad)

## 📁 Estructura del Proyecto


reto-react/
├── src/
│   ├── components/
│   │   ├── Card.jsx           # Tarjeta reutilizable
│   │   ├── FilterBar.jsx      # Botones de filtro
│   │   ├── List.jsx           # Controlador de lista
│   │   └── SkeletonCard.jsx   # Placeholder de carga
│   ├── App.jsx                # Componente raíz (lógica principal)
│   ├── index.css              # Estilos globales responsivos
│   ├── main.jsx               # Punto de entrada React
│
├── index.html                 # HTML principal
├── vite.config.js             # Configuración Vite
├── package.json               # Dependencias
├── eslint.config.js           # Configuración ESLint
└── README.md                  # Este archivo


## 🔧 Instalación y Ejecución

### Requisitos previos
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (o yarn)

### Pasos para ejecutar

1. **Clonar el repositorio**
   git clone https://github.com/<tu-usuario>/<tu-repo>.git
   cd reto-react
   

2. **Instalar dependencias**
   npm install
   

3. **Ejecutar en desarrollo**
   npm run dev
   
   La aplicación se abrirá en `http://localhost:5173/` (o el puerto disponible siguiente)

4. **Build para producción**
   npm run build
   

5. **Previsualizar build**
   npm run preview
   

- **Mobile**: máx 480px (1 columna)
- **Tablet**: 481px - 768px (2-3 columnas)
- **Desktop**: 769px+ (3-4 columnas)

## 📦 Dependencias

### Producción
- **react** ^19.2.0
- **react-dom** ^19.2.0

### Desarrollo
- **vite** ^7.3.1
- **eslint** ^9.39.1
- Plugins de React y Vite

## 🔗 API Utilizada

**Endpoint:**

https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json


## 👥 Integrantes del Equipo

- **[Nombre 1]** - Jhoan David Ortega Ramos
- **[Nombre 2]** - 

## 📝 Notas de Desarrollo

- El estado del filtro se centraliza en `App.jsx` siguiendo el patrón "Lifting State Up"
- Se usa derivación de datos en lugar de estado adicional para la lista filtrada
- Los estilos son CSS puro (sin frameworks) para máximo control
- La animación skeleton se logra con gradientes en movimiento CSS
- El código es totalmente accesible (WCAG 2.1)

## 🔗 Enlaces Útiles

- [Desafío Original](https://devchallenges.io/challenge/simple-coffee-listing)
- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [DevChallenges](https://devchallenges.io/)
