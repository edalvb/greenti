# GreenTI Landing Page

Este proyecto es la implementación de la landing page para GreenTI, una empresa de desarrollo de software.

## Tecnologías Utilizadas

*   **Next.js:** Framework de React para renderizado en servidor (SSR) y generación de sitios estáticos (SSG).
*   **React:** Biblioteca de JavaScript para construir interfaces de usuario.
*   **TypeScript:** Superset de JavaScript que añade tipado estático.
*   **Tailwind CSS:** Framework de CSS "utility-first" para un diseño rápido y personalizado.

## Estructura del Proyecto

El proyecto sigue una arquitectura orientada a características (features), con una clara separación de responsabilidades:

```
src
  app
    [feature] (e.g., home)
      presentation
        - [feature]_view.tsx       # (En este caso, page.tsx actúa como la vista principal)
        - [feature]_context.tsx
        - [feature]_controller.ts
        - [feature]_store.ts
        - [feature]_state.ts
      components
        layout
          - navbar_component.tsx
          - footer_component.tsx
        sections
          - hero_section_component.tsx
          - ... (otros componentes de sección)
      domain
        - [feature]_[model_name]_model.ts
      data
        dto
          requests
          responses
        repository
          - i_[feature]_repository.ts
          - [feature]_repository_impl.ts
  core
    components
      ui
        - button_component.tsx
        - ... (otros componentes UI reutilizables)
    config
      - app_config.ts
    utils
      - constants.ts
      - utils.ts
```

## Empezando

1.  Clona el repositorio:
    ```bash
    git clone <repository-url>
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd greenti-landing
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```
4.  Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Scripts Disponibles

*   `dev`: Inicia el servidor de desarrollo.
*   `build`: Compila la aplicación para producción.
*   `start`: Inicia un servidor de producción.
*   `lint`: Ejecuta ESLint para analizar el código.

## Despliegue

Este proyecto está optimizado para desplegarse en plataformas como Vercel o Netlify, que ofrecen una excelente integración con Next.js.
