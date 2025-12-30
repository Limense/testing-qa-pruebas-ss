# Pastel E-commerce 🛍️

E-commerce website creado con Next.js y shadcn/ui, ideal para practicar automatización con **ScreenPlay + Gradle + Cucumber**.

## 🎨 Características

- ✨ Diseño con colores pasteles
- 🛒 Funcionalidades de e-commerce completas
- 📱 Responsive design
- 🎯 Componentes reutilizables con shadcn/ui
- 🔍 Ideal para automatización de pruebas

## 🚀 Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📄 Páginas

- **/** - Página principal con productos destacados
- **/products** - Catálogo completo de productos
- **/product/[id]** - Detalle de producto individual
- **/cart** - Carrito de compras

## 🧪 Para Automatización

Esta aplicación está diseñada con elementos fácilmente identificables para automatización con **ScreenPlay Pattern**:

### Elementos principales a automatizar:

1. **Navegación**
   - Header con links de navegación
   - Botón del carrito de compras

2. **Lista de productos**
   - Cards de productos con precio y descripción
   - Botones "Ver Detalles" y "Añadir al Carrito"

3. **Detalle de producto**
   - Información completa del producto
   - Botones de compra

4. **Carrito**
   - Modificar cantidad de productos
   - Eliminar productos
   - Resumen del pedido

### Ejemplo de casos de prueba:

```gherkin
Feature: Navegación de productos
  Scenario: Ver detalles de un producto
    Given el usuario está en la página de productos
    When hace click en "Ver Detalles" del primer producto
    Then debe ver la página de detalle del producto

Feature: Carrito de compras
  Scenario: Añadir producto al carrito
    Given el usuario está en la página de un producto
    When hace click en "Añadir al Carrito"
    Then el producto debe aparecer en el carrito
```

## 🎨 Colores Pasteles

La aplicación usa una paleta de colores pasteles personalizada:

- **Pink**: #FFD1DC
- **Blue**: #AEC6CF
- **Purple**: #E0BBE4
- **Peach**: #FFDAB9
- **Mint**: #C7EEFF
- **Lavender**: #E6E6FA
- **Coral**: #FFB3B3
- **Sage**: #C9E4C5

## 📝 Estructura del Proyecto

```
pagina-testing/
├── app/                    # Rutas y páginas de Next.js
│   ├── cart/              # Página del carrito
│   ├── product/[id]/      # Página de detalle de producto
│   ├── products/          # Página de catálogo
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── button.tsx
│   ├── card.tsx
│   ├── header.tsx
│   ├── input.tsx
│   └── product-card.tsx
├── lib/                   # Utilidades y datos
│   ├── products.ts        # Datos de productos
│   └── utils.ts           # Funciones helper
└── public/                # Archivos estáticos
```

## 🤝 Contribuir

Este proyecto es para propósitos educativos de automatización de pruebas. Siéntete libre de hacer fork y personalizar.

## 📄 Licencia

ISC
