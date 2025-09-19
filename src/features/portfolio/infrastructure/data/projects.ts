import { Project } from "@/features/portfolio/domain/Project";
import { slugify } from "@/features/home/infrastructure/data/portfolioProjects";

// Dataset mínimo para demo. Puedes reemplazarlo por fetch a una API/CMS.
export const projects: Project[] = [
  new Project({
    name: "Beblis",
    sector: "Turismo y alojamiento",
    pais: "México",
    Plataforma: ["Mobile", "Web"],
    image_logo: "/assets/images/porfolio/beblis_logo.png",
    images: ["/assets/images/porfolio/beblis_image_portada.png"],
    resume:
      "Beblis es una aplicación móvil Flutter que conecta customers y managers en una plataforma integral de servicios. Incluye chat en tiempo real, sistema de reservas con pagos Stripe, autenticación JWT multi-rol, y notificaciones push personalizadas. Desarrollada con Clean Architecture, utiliza Riverpod, Dio y Firebase. El proyecto abarca app móvil nativa y panel web administrativo con capacidades offline y sincronización automática.",
    team_size: 5,
    project_duration_months: 8,
    rating: 5,
    challenge:
      "El principal desafío fue crear una aplicación que manejara múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real y sistemas de pago seguros en una sola plataforma. Implementar Clean Architecture modular que permitiera escalabilidad sin comprometer performance, garantizando seguridad en transacciones y comunicación instantánea. La complejidad aumentó al desarrollar versiones móvil y web manteniendo sincronización de datos consistente.",
    solution:
      "Desarrollamos una arquitectura Clean modular con features independientes y capas bien definidas. Implementamos Riverpod para gestión de estado reactivo, WebSockets para comunicación instantánea, JWT con refresh tokens para autenticación segura, y Firebase para notificaciones push. Utilizamos Dio con interceptors personalizados para APIs centralizadas y code generation para optimizar performance. La separación entre core, shared y features permite desarrollo paralelo y escalabilidad horizontal.",
    technologies: ["Flutter", "Firebase", "Figma", "Python", "GitHub"],
    result_description:
      "La aplicación Beblis se convirtió en una plataforma robusta y escalable que maneja exitosamente múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real fluida y transacciones seguras. Los customers pueden reservar servicios, comunicarse instantáneamente con managers y realizar pagos de forma segura, mientras que los managers gestionan eficientemente sus servicios, clientes y disponibilidad desde una interfaz intuitiva. El sistema de autenticación JWT con refresh tokens garantiza sesiones seguras sin interrupciones, y las notificaciones push personalizadas mantienen a los usuarios informados en tiempo real. \n\n La arquitectura Clean implementada permite que nuevas funcionalidades se agreguen sin afectar módulos existentes, facilitando el mantenimiento y la evolución del producto. El panel web administrativo ofrece control total sobre la plataforma con analytics en tiempo real, gestión de usuarios y configuraciones avanzadas. La sincronización perfecta entre la aplicación móvil y el dashboard web, junto con las capacidades offline, aseguran una experiencia de usuario excepcional y continuidad operacional. El resultado es una solución tecnológica integral que demuestra las mejores prácticas de desarrollo Flutter y arquitectura de software empresarial. ",
    result_images_main: ["/assets/images/porfolio/beblis_result_image.png"],
    result_images_secondary: [
      "/assets/images/porfolio/beblis_image_secondary_01.png",
      "/assets/images/porfolio/beblis_image_secondary_02.png",
      "/assets/images/porfolio/beblis_image_secondary_03.png",
      "/assets/images/porfolio/beblis_image_secondary_04.png",
      "/assets/images/porfolio/beblis_image_secondary_05.png",
      "/assets/images/porfolio/beblis_image_secondary_06.png",
    ],
    url: "https://www.beblis.com",
    client_testimonial: {
      quote:
        "Trabajar con el equipo de desarrollo fue una experiencia increíble. Entendieron nuestras necesidades y entregaron una plataforma que superó nuestras expectativas.",
      author: "Ana Martínez, CEO de Beblis",
      avatar_url: "/assets/images/testimonial_avatar_stephenson.png",
      company: "Beblis",
      position: "CEO",
    },
  }),
  new Project({
    name: "Britcam landscape",
    sector: "Servicios",
    pais: "EEUU",
    Plataforma: ["Mobile", "Web"],
    image_logo: "/assets/images/porfolio/britcam_logo.png",
    images: ["/assets/images/porfolio/britcam_image_portada.png"],
    resume:
      "Britcam es una aplicación móvil Flutter que conecta clientes y proveedores de servicios de seguridad en una plataforma integral. Incluye chat en tiempo real, sistema de reservas con pagos Stripe, autenticación JWT multi-rol, y notificaciones push personalizadas. Desarrollada con Clean Architecture, utiliza Riverpod, Dio y Firebase. El proyecto abarca app móvil nativa y panel web administrativo con capacidades offline y sincronización automática.",
    team_size: 5,
    project_duration_months: 8,
    rating: 5,
    challenge:
      "El principal desafío fue crear una aplicación que manejara múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real y sistemas de pago seguros en una sola plataforma. Implementar Clean Architecture modular que permitiera escalabilidad sin comprometer performance, garant",
    solution:
      "Desarrollamos una arquitectura Clean modular con features independientes y capas bien definidas. Implementamos Riverpod para gestión de estado reactivo, WebSockets para comunicación instantánea, JWT con refresh tokens para autenticación segura, y Firebase para notificaciones push. Utilizamos Dio con interceptors personalizados para APIs centralizadas y code generation para optimizar performance. La separación entre core, shared y features permite desarrollo paralelo y escalabilidad horizontal.",
    technologies: ["Flutter", "Firebase", "Figma", "Python", "GitHub"],
    result_description:
      "La aplicación Britcam se convirtió en una plataforma robusta y escalable que maneja exitosamente múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real fluida y transacciones seguras. Los customers pueden reservar servicios, comunicarse instantáneamente con managers y realizar pagos de forma segura, mientras que los managers gestionan eficientemente sus servicios, clientes y disponibilidad desde una interfaz intuitiva. El sistema de autenticación JWT con refresh tokens garantiza sesiones seguras sin interrupciones, y las notificaciones push personalizadas mantienen a los usuarios informados en tiempo real. \n\n La arquitectura Clean implementada permite que nuevas funcionalidades se agreguen sin afectar módulos existentes, facilitando el mantenimiento y la evolución del producto. El panel web administrativo ofrece control total sobre la plataforma con analytics en tiempo real, gestión de usuarios y configuraciones avanzadas. La sincronización perfecta entre la aplicación móvil y el dashboard web, junto con las capacidades offline, aseguran una experiencia de usuario excepcional y continuidad operacional. El resultado es una solución tecnológica integral que demuestra las mejores prácticas de desarrollo Flutter y arquitectura de software empresarial. ",
    result_images_main: ["/assets/images/porfolio/britcam_result_image.png"],
    result_images_secondary: [
      "/assets/images/porfolio/britcam_image_secondary_01.png",
      "/assets/images/porfolio/britcam_image_secondary_02.png",
      "/assets/images/porfolio/britcam_image_secondary_03.png",
      "/assets/images/porfolio/britcam_image_secondary_04.png",
      "/assets/images/porfolio/britcam_image_secondary_05.png",
      "/assets/images/porfolio/britcam_image_secondary_06.png",
    ],
    url: "https://play.google.com/store/apps/details?id=app.britcam.landscape.com",
    client_testimonial: {
      quote:
        "El equipo de desarrollo demostró un compromiso excepcional con nuestro proyecto. Su experiencia técnica y enfoque colaborativo resultaron en una plataforma que realmente transformó nuestro negocio.",
      author: "Ricauter, CEO de Britcam",
      avatar_url: "/assets/images/testimonial_avatar_stephenson.png",
      company: "Britcam",
      position: "CEO",
    },
  }),
  new Project({
    name: "Coosofan cooperativa",
    sector: "Financiero",
    pais: "Paraguay",
    Plataforma: ["Mobile", "Web"],
    image_logo: "/assets/images/porfolio/coosofan_logo.png",
    images: ["/assets/images/porfolio/coosofan_image_portada.png"],
    resume:
      "Coosofan es una aplicación móvil Flutter que conecta clientes y proveedores de servicios de seguridad en una plataforma integral. Incluye chat en tiempo real, sistema de reservas con pagos Stripe, autenticación JWT multi-rol, y notificaciones push personalizadas. Desarrollada con Clean Architecture, utiliza Riverpod, Dio y Firebase. El proyecto abarca app móvil nativa y panel web administrativo con capacidades offline y sincronización automática.",
    team_size: 5,
    project_duration_months: 8,
    rating: 5,
    challenge:
      "El principal desafío fue crear una aplicación que manejara múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real y sistemas de pago seguros en una sola plataforma. Implementar Clean Architecture modular que permitiera escalabilidad sin comprometer performance, garant",
    solution:
      "Desarrollamos una arquitectura Clean modular con features independientes y capas bien definidas. Implementamos Riverpod para gestión de estado reactivo, WebSockets para comunicación instantánea, JWT con refresh tokens para autenticación segura, y Firebase para notificaciones push. Utilizamos Dio con interceptors personalizados para APIs centralizadas y code generation para optimizar performance. La separación entre core, shared y features permite desarrollo paralelo y escalabilidad horizontal.",
    technologies: ["Flutter", "Firebase", "Figma", "Python", "GitHub"],
    result_description:
      "La aplicación Coosofan se convirtió en una plataforma robusta y escalable que maneja exitosamente múltiples tipos de usuarios con roles dinámicos, comunicación en tiempo real fluida y transacciones seguras. Los customers pueden reservar servicios, comunicarse instantáneamente con managers y realizar pagos de forma segura, mientras que los managers gestionan eficientemente sus servicios, clientes y disponibilidad desde una interfaz intuitiva. El sistema de autenticación JWT con refresh tokens garantiza sesiones seguras sin interrupciones, y las notificaciones push personalizadas mantienen a los usuarios informados en tiempo real. \n\n La arquitectura Clean implementada permite que nuevas funcionalidades se agreguen sin afectar módulos existentes, facilitando el mantenimiento y la evolución del producto. El panel web administrativo ofrece control total sobre la plataforma con analytics en tiempo real, gestión de usuarios y configuraciones avanzadas. La sincronización perfecta entre la aplicación móvil y el dashboard web, junto con las capacidades offline, aseguran una experiencia de usuario excepcional y continuidad operacional. El resultado es una solución tecnológica integral que demuestra las mejores prácticas de desarrollo Flutter y arquitectura de software empresarial. ",
    result_images_main: ["/assets/images/porfolio/coosofan_result_image.png"],
    result_images_secondary: [
      "/assets/images/porfolio/coosofan_image_secondary_01.png",
      "/assets/images/porfolio/coosofan_image_secondary_02.png",
      "/assets/images/porfolio/coosofan_image_secondary_03.png",
      "/assets/images/porfolio/coosofan_image_secondary_04.png",
      "/assets/images/porfolio/coosofan_image_secondary_05.png",
      "/assets/images/porfolio/coosofan_image_secondary_06.png",
    ],
    url: "https://play.google.com/store/apps/details?id=app.britcam.landscape.com",
    client_testimonial: {
      quote:
        "El equipo de desarrollo demostró un compromiso excepcional con nuestro proyecto. Su experiencia técnica y enfoque colaborativo resultaron en una plataforma que realmente transformó nuestro negocio.",
      author: "Arturo, CEO de Coosofan",
      avatar_url: "/assets/images/testimonial_avatar_stephenson.png",
      company: "Coosofan",
      position: "CEO",
    },
  }),
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => slugify(p.name) === slug);
};

export const allProjectSlugs = () =>
  projects.map((p) => ({ slug: slugify(p.name) }));
