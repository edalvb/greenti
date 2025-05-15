# GreenTI Landing Page

Este proyecto es la implementación de la landing page para GreenTI, una empresa de desarrollo de software, construida con Next.js y enfocada en Generación de Sitios Estáticos (SSG) e internacionalización (i18n).

## Tecnologías Utilizadas

-   **Framework**: [Next.js](https://nextjs.org/) (App Router, SSG)
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI**: [HeroUI](https://www.heroui.com/) (o similar, según implementación)
-   **Gestión de Estado (Cliente)**: [Zustand](https://github.com/pmndrs/zustand) (para escenarios específicos, SSG minimiza su necesidad)
-   **Manejo de Formularios**: [React Hook Form](https://react-hook-form.com/)
-   **Validación de Esquemas**: [Zod](https://zod.dev/)
-   **Cliente HTTP**: [Axios](https://axios-http.com/) (para interacciones client-side o build-time data fetching si es necesario)
-   **Inyección de Dependencias**: [InversifyJS](http://inversify.io/)
-   **Internacionalización (i18n)**: [next-intl](https://next-intl.dev/)
-   **Linting/Formatting**: ESLint, Prettier (configuración implícita)

## Arquitectura del Proyecto

El proyecto sigue una Arquitectura Hexagonal combinada con Vertical Slicing y Screaming Architecture:

-   `messages/`: Archivos de traducción para `next-intl` (ej. `es.json`, `en.json`).
-   `public/`: Assets estáticos.
-   `src/app/[locale]/`: Rutas de la aplicación internacionalizadas utilizando el App Router de Next.js.
    -   `(landing)/page.tsx`: Página principal de la landing.
    -   `layout.tsx`: Layout raíz para el locale.
    -   `not-found.tsx`: Página 404 personalizada.
-   `src/components/ui/`: Componentes UI genéricos y reutilizables (construidos con Tailwind CSS y/o HeroUI).
-   `src/core/`: Lógica transversal a la aplicación.
    -   `config/`: Configuraciones globales (i18n, app).
    -   `infrastructure/di/`: Configuración de Inversión de Dependencias (InversifyJS).
    -   `infrastructure/http/`: Instancia configurada de Axios.
    -   `providers/`: React Context Providers globales (ej. `AppProviders`).
    -   `utils/`: Utilidades y constantes globales.
-   `src/features/`: Lógica de negocio organizada por características (slices verticales).
    -   `home/`: Característica principal para la landing page.
        -   `application/`: Casos de uso (ej. enviar formulario de contacto), DTOs (validados con Zod).
        -   `domain/`: Entidades del dominio (ej. `Testimonial`, `FaqItem`), interfaces de repositorio (puertos).
        -   `infrastructure/`: Implementaciones concretas (adaptadores).
            -   `components/`: Componentes de React específicos de la característica (secciones de la landing, layouts específicos del feature).
            -   `data/`: Datos mock o estáticos.
            -   `repositories/`: Implementaciones de los repositorios del dominio.
            -   `store/`: Stores de Zustand específicas del feature (si aplica).
-   `src/hooks/`: Hooks de React personalizados.
-   `src/lib/`: Bibliotecas o utilidades de bajo nivel.
-   `src/middleware.ts`: Middleware de `next-intl` para el enrutamiento i18n.

## Empezando

1.  **Clonar el repositorio**:
    ```bash
    git clone <tu-repositorio-url>
    cd greenti-landing
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    # o yarn install / pnpm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env.local` en la raíz del proyecto, copiando de `.env.example` si existe, y define las variables necesarias (ej. `NEXT_PUBLIC_BASE_URL`).

4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

-   `dev`: Inicia el servidor de desarrollo.
-   `build`: Compila la aplicación para producción (genera archivos estáticos en `out/`).
-   `start`: Inicia un servidor de producción (no aplicable directamente para SSG puro, se sirve desde `out/`).
-   `lint`: Ejecuta ESLint para analizar el código.
-   `lint:fix`: Ejecuta ESLint y corrige problemas automáticamente.
-   `deploy`: (Si está configurado, ej. para GitHub Pages) Despliega el sitio estático.

## Despliegue (SSG)

La aplicación está configurada para Generación de Sitios Estáticos (`output: 'export'` en `next.config.ts`). El comando `npm run build` generará el sitio estático en la carpeta `out/`. Este directorio puede ser desplegado en cualquier servicio de hosting estático como Vercel, Netlify, GitHub Pages, etc.
