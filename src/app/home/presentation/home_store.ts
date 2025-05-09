import { FaqItemModel } from "../domain/faq_item_model";
import { TestimonialModel } from "../domain/testimonial_model";

const MOCK_TESTIMONIALS: TestimonialModel[] = [
  {
    id: 1,
    quote: "El proyecto fue su prioridad número uno y pensaron en lo que era mejor para él. Somnio siempre hacía excelentes sugerencias sobre cómo mejorar el proyecto desde una perspectiva comercial y de procesos, lo que lo hizo aún mejor y nos acercó a nuestros objetivos.",
    authorName: "Trac Stephenson",
    authorTitle: "Fundador, ProWallet",
    authorAvatarUrl: "/assets/images/testimonial_avatar_stephenson.png", 
    projectSummary: {
      sector: "Financiero",
      country: "Paraguay",
      duration: "5 Meses",
    },
  },
];

const MOCK_FAQ_ITEMS: FaqItemModel[] = [
  {
    id: 1,
    question: "¿Cuánto cuesta un proyecto/cuáles son sus tarifas?",
    answer: "Nuestras tarifas por proyecto varían según los requisitos específicos de cada proyecto, así como de factores como la antigüedad del equipo, el tamaño del equipo y la duración del proyecto. Para obtener un presupuesto detallado y personalizado, solicite una consulta gratuita."
  },
  {
    id: 2,
    question: "¿Por qué elegir Greenti en lugar de un profesional autónomo?",
    answer: "Greenti ofrece un equipo multidisciplinario, metodologías ágiles probadas, y un compromiso con la calidad y la entrega oportuna que un profesional autónomo podría tener dificultades para igualar consistentemente."
  },
  {
    id: 3,
    question: "¿Qué herramientas utilizas durante los proyectos?",
    answer: "Utilizamos una variedad de herramientas modernas y estándar de la industria para la gestión de proyectos (Jira, Trello), diseño (Figma, Adobe XD), desarrollo (VS Code, Docker, Git), y comunicación (Slack, Zoom)."
  },
  {
    id: 4,
    question: "¿Puedo ver el brochure de presentación de la empresa?",
    answer: "¡Claro que sí! Puedes solicitar nuestro brochure de presentación a través de nuestro formulario de contacto o enviándonos un correo electrónico."
  }
];

export class HomeStore {
  public async getInitialData(): Promise<{ testimonials: TestimonialModel[]; faqItems: FaqItemModel[] }> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          testimonials: MOCK_TESTIMONIALS,
          faqItems: MOCK_FAQ_ITEMS,
        });
      }, 50);
    });
  }
}
