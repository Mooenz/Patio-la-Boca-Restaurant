# 🍽️ Patio La Boca Restaurant - Carta Digital

Carta digital interactiva de **Patio La Boca Restaurant**, una aplicación web moderna y bilingüe (español e inglés) para presentar el menú del restaurante con una experiencia de usuario optimizada.

## 📋 Descripción del Proyecto

Este proyecto es una carta digital para Patio La Boca Restaurant que incluye:

- **Menú Digital Interactivo**: Catálogo completo de platos organizados por categorías (carnes a la parrilla, pastas caseras, sándwiches, pescados, milanesas, vegetarianos, salsas, acompañamientos, postres, bebidas, vinos, entre otros)
- **Sitio Multiidioma**: Soporte para español e inglés con navegación automática según preferencias del usuario
- **Interfaz Responsiva**: Diseño moderno y adaptativo para dispositivos móviles y escritorio
- **Animaciones Fluidas**: Experiencia visual atractiva usando GSAP
- **Información del Restaurante**: Sección de contacto, ubicación e información general
- **Sistema de Autenticación**: Panel de administración con login seguro
- **Dashboard de Administración**: Gestión completa de menús y platos

## 🛠️ Stack Tecnológico

- **Astro 5.16.1**: Framework meta para sitios web ultrarrápidos
- **TailwindCSS 4.1.17**: Framework CSS utility-first para estilos
- **TypeScript**: Tipado estático para mayor seguridad
- **GSAP 3.13.0**: Librería de animaciones profesionales
- **Supabase**: Backend as a Service (autenticación + base de datos)
- **Vercel**: Plataforma de hosting y despliegue

**Requisitos:**

- Node.js >= 22.0.0

## 🚀 Cómo Levantar el Proyecto

### 1. Instalación de Dependencias

```bash
pnpm install
```

Si no tienes `pnpm` instalado, puedes instalarlo globalmente:

```bash
npm install -g pnpm
```

### 2. Servidor de Desarrollo

Para ejecutar el servidor de desarrollo en modo local:

```bash
pnpm dev
```

El sitio estará disponible en: **`http://localhost:3000`** (o el puerto que Astro asigne)

### 3. Compilación para Producción

Para construir la versión optimizada para producción:

```bash
pnpm build
```

Los archivos compilados se generarán en la carpeta `dist/`

### 4. Vista Previa de Producción

Para previsualizar la compilación de producción antes de desplegar:

```bash
pnpm preview
```

## 📁 Estructura del Proyecto

```
src/
├── assets/icons/          # Iconos SVG reutilizables
├── components/            # Componentes Astro reutilizables
│   ├── ButtonsLateral.astro
│   ├── Language.astro     # Selector de idioma
│   ├── Link.astro
│   └── MenuInfoItem.astro
├── constant/              # Datos de menú y configuraciones
│   ├── desserts.ts        # Postres
│   ├── drinks.ts          # Bebidas
│   ├── grilled_Meat.ts    # Carnes a la parrilla
│   ├── homemade_Pasta.ts  # Pastas caseras
│   ├── milanesas.ts       # Milanesas
│   ├── pescado.ts         # Pescados
│   ├── sandwich.ts        # Sándwiches
│   ├── sauces.ts          # Salsas
│   ├── vegetariano.ts     # Platos vegetarianos
│   ├── wine.ts            # Vinos
│   └── menu.json          # Configuración del menú
├── i18n/                  # Internacionalización (es/en)
├── layout/                # Layouts principales
├── pages/                 # Páginas y rutas
│   ├── index.astro        # Página principal (español)
│   └── en/index.astro     # Página principal (inglés)
├── sections/              # Secciones grandes del sitio
│   ├── Info.astro         # Información del restaurante
│   ├── Menu.astro         # Sección de menú
│   └── InfoMenu.astro     # Información del menú
├── styles/                # Estilos globales
├── utilities/             # Funciones auxiliares y animaciones
│   ├── auth.ts            # Autenticación con Supabase
│   ├── cache.ts           # Sistema de caché para menús
│   ├── menu-db.ts         # Operaciones CRUD de menús
│   └── supabase.ts        # Cliente de Supabase
├── scripts/               # Scripts de dashboard
│   └── dashboard.ts       # Lógica del panel de administración
└── components/dashboard/  # Componentes del dashboard
    ├── DashboardHeader.astro
    ├── DashboardTabs.astro
    ├── MenuList.astro
    ├── ItemList.astro
    ├── MenuModal.astro
    ├── ItemModal.astro
    └── DeleteModal.astro
```

## 🔐 Sistema de Administración

El proyecto incluye un panel de administración completo para gestionar el menú del restaurante.

### Características del Dashboard

- **Autenticación segura** con Supabase Auth
- **Gestión de Menús**: Crear, editar y eliminar secciones del menú
- **Gestión de Platos**: CRUD completo de platos con filtros y búsqueda
- **Subida de imágenes** con validación (dimensiones, tamaño, formato)
- **Sistema de caché** para optimizar el rendimiento
- **Protección de APIs** con verificación de autenticación

### Acceso al Dashboard

1. Navega a `/login`
2. Inicia sesión con tus credenciales de Supabase
3. Accede al panel en `/dashboard`

### Seguridad

- **Row Level Security (RLS)** habilitado en Supabase
- **APIs protegidas** - Solo usuarios autenticados pueden modificar datos
- **Validación de imágenes** - Magic bytes, tamaño y dimensiones
- **Cookies seguras** - httpOnly, sameSite, secure en producción

## 🎨 Características Principales

### Menú Dinámico

- Múltiples categorías de platos
- Interfaz interactiva y fácil de navegar
- Información detallada de cada plato

### Multiidioma (i18n)

- Español como idioma por defecto
- Soporte completo para inglés
- Cambio de idioma sin recarga de página

### Diseño Responsivo

- Mobile-first approach
- Optimización para todos los tamaños de pantalla
- Componentes flexibles

### Animaciones

- Transiciones suaves con GSAP
- Efectos visuales atractivos
- Rendimiento optimizado

## 📱 Despliegue

El proyecto está configurado para desplegar en **Vercel** automáticamente:

```javascript
adapter: vercel({});
output: 'server';
```

**Sitio en vivo:** https://patio-la-boca.vercel.app/

## 👥 Autores

- [Jose Manuel Montaño Saenz](https://www.mooenz.me/)
- [Kevin Silva Zarate](https://www.linkedin.com/in/kevinsilvaz/)

## 📝 Notas Adicionales

- No hay comandos especiales necesarios
- El proyecto utiliza `pnpm` como gestor de paquetes (recomendado pero compatible con npm)
- La configuración de TailwindCSS 4 está integrada vía Vite
- El output está configurado como `server` para Vercel (SSR)
- Los cambios en el dashboard se reflejan en la carta en ~2-3 minutos (caché)

---

**¡Disfruta explorando Patio La Boca! 🎉**
