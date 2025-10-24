import { Translation } from './en';

export const es: Translation = {
  // Navigation
  nav: {
    title: 'Mac Finder',
    findYourMac: 'Encuentra tu Mac',
    compare: 'Comparar',
    budget: 'Calculadora de Presupuesto',
    learn: 'Aprender',
    backToHome: 'Volver al Inicio',
  },

  // Home page
  home: {
    hero: {
      title: 'Encuentra tu Mac Perfecto',
      subtitle: 'Responde algunas preguntas y descubre la Mac ideal para tus necesidades, presupuesto y estilo de vida.',
      startQuiz: 'Comenzar Quiz',
      compareModels: 'Comparar Modelos',
    },
    features: {
      title: '¿Por qué usar Mac Finder?',
      personalized: {
        title: 'Recomendaciones Personalizadas',
        description: 'Nuestro algoritmo inteligente analiza tus necesidades para recomendar la Mac perfecta para ti.',
      },
      budget: {
        title: 'Calculadora de Presupuesto',
        description: 'Compara precios, encuentra ofertas y explora opciones reacondicionadas para ahorrar dinero.',
      },
      expert: {
        title: 'Guía Experta',
        description: 'Aprende sobre especificaciones Mac, características y toma una decisión informada.',
      },
    },
    lineup: {
      title: 'Línea Mac 2024/2025',
      from: 'Desde',
      learnMore: 'Saber Más',
    },
    cta: {
      title: '¿Listo para encontrar tu Mac perfecta?',
      subtitle: 'Realiza nuestro quiz rápido y obtén recomendaciones personalizadas en minutos.',
      button: 'Comenzar el Quiz Ahora',
    },
    footer: {
      description: 'Ayudándote a encontrar la Mac perfecta desde 2024. Compara modelos, calcula presupuestos y toma decisiones informadas.',
      quickLinks: 'Enlaces Rápidos',
      disclosure: 'Divulgación',
      disclosureText: 'Ganamos comisiones de compras calificadas a través de enlaces de afiliados. Esto nos ayuda a proporcionar contenido gratuito.',
      copyright: '2024 Mac Finder. No afiliado con Apple Inc.',
    },
  },

  // Quiz
  quiz: {
    title: 'Encuentra tu Mac perfecta - Quiz interactivo',
    subtitle: 'Responde algunas preguntas simples y obtén recomendaciones Mac personalizadas basadas en tus necesidades, presupuesto y preferencias.',
    progress: 'Pregunta {current} de {total}',
    complete: '{percent}% Completado',
    goBack: 'Volver',

    results: {
      title: 'Tus Macs Perfectas',
      subtitle: 'Basado en tus respuestas, aquí están nuestras mejores recomendaciones:',
      bestMatch: 'Mejor Opción',
      chip: 'Chip',
      memory: 'Memoria',
      display: 'Pantalla',
      battery: 'Batería',
      upTo: 'Hasta',
      hours: 'horas',
      keyFeatures: 'Características Clave:',
      refurbished: 'Reacondicionada:',
      save: 'Ahorra',
      buyOnApple: 'Comprar en Apple.com',
      checkAmazon: 'Ver en Amazon',
      startOver: 'Empezar de Nuevo',
      compareSideBySide: 'O compara todos los modelos Mac lado a lado',
      disclosure: 'Divulgación:',
      disclosureText: 'Ganamos comisiones de compras calificadas a través de enlaces de afiliados. Esto no afecta tu precio y nos ayuda a proporcionar contenido gratuito.',
    },

    questions: {
      usage: {
        question: '¿Para qué usarás principalmente tu Mac?',
        everyday: 'Tareas cotidianas (web, correo, documentos)',
        student: 'Trabajo estudiantil (investigación, escritura, presentaciones)',
        professional: 'Trabajo profesional (aplicaciones empresariales, productividad)',
        photo: 'Edición de fotos',
        video: 'Edición de video',
        dev: 'Desarrollo de software',
        rendering: 'Renderizado 3D y trabajo creativo intensivo',
      },
      performance: {
        question: '¿Qué tan exigentes son tus cargas de trabajo?',
        light: 'Ligera (navegación web, correos, documentos)',
        medium: 'Media (multitarea, aplicaciones moderadas)',
        heavy: 'Pesada (múltiples aplicaciones pro, archivos grandes)',
        extreme: 'Extrema (video 4K/8K, 3D, simulaciones complejas)',
      },
      portability: {
        question: '¿Necesitas portabilidad?',
        yes: 'Sí, necesito llevarlo conmigo',
        no: 'No, se quedará en un lugar',
        flexible: 'Soy flexible',
      },
      battery: {
        question: '¿Qué tan importante es la duración de la batería? (para portátiles)',
        critical: 'Muy importante - Necesito batería para todo el día',
        important: 'Algo importante - 8+ horas está bien',
        notImportant: 'No importante - Generalmente conectado',
        na: 'No aplica - Compraré una de escritorio',
      },
      displays: {
        question: '¿Usarás pantallas externas?',
        none: 'No, solo la pantalla integrada',
        one: 'Sí, una pantalla externa',
        multiple: 'Sí, dos o más pantallas',
        pro: 'Múltiples pantallas de alta resolución (4K+)',
      },
      memory: {
        question: '¿Cuánta multitarea haces?',
        light: 'Ligera - Pocas aplicaciones abiertas',
        moderate: 'Moderada - Múltiples aplicaciones y pestañas del navegador',
        heavy: 'Pesada - Muchas aplicaciones, VMs o proyectos grandes',
        extreme: 'Extrema - Flujos de trabajo profesionales con archivos enormes',
      },
      budget: {
        question: '¿Cuál es tu presupuesto?',
        low: 'Menos de $1,000',
        mediumLow: '$1,000 - $1,500',
        medium: '$1,500 - $2,500',
        high: '$2,500 - $4,000',
        veryHigh: 'Más de $4,000',
      },
      refurbished: {
        question: '¿Estás abierto a Macs reacondicionadas?',
        yes: 'Sí, quiero ahorrar dinero',
        maybe: 'Tal vez, si el ahorro es significativo',
        no: 'No, prefiero solo nuevas',
        info: 'Cuéntame más sobre reacondicionadas',
      },
      screen: {
        question: '¿Preferencia de tamaño de pantalla?',
        compact: 'Compacta (13")',
        medium: 'Media (14-15")',
        large: 'Grande (16"+)',
        none: 'No necesito pantalla (escritorio)',
      },
      futureproof: {
        question: '¿Cuánto tiempo planeas mantener esta Mac?',
        short: '2-3 años',
        medium: '4-5 años',
        long: '5+ años - Quiero que dure',
        veryLong: '7+ años - Máxima longevidad',
      },
    },
  },

  // Common
  common: {
    loading: 'Cargando...',
    error: 'Ocurrió un error',
    tryAgain: 'Intentar de Nuevo',
  },
};
