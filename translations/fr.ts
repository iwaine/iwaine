import { Translation } from './en';

export const fr: Translation = {
  // Navigation
  nav: {
    title: 'Mac Finder',
    findYourMac: 'Trouvez votre Mac',
    compare: 'Comparer',
    budget: 'Calculateur de Budget',
    learn: 'Apprendre',
    backToHome: 'Retour à l\'accueil',
  },

  // Home page
  home: {
    hero: {
      title: 'Trouvez votre Mac Parfait',
      subtitle: 'Répondez à quelques questions et découvrez le Mac idéal pour vos besoins, votre budget et votre style de vie.',
      startQuiz: 'Commencer le Quiz',
      compareModels: 'Comparer les Modèles',
    },
    features: {
      title: 'Pourquoi utiliser Mac Finder?',
      personalized: {
        title: 'Recommandations Personnalisées',
        description: 'Notre algorithme intelligent analyse vos besoins pour recommander le Mac parfait pour vous.',
      },
      budget: {
        title: 'Calculateur de Budget',
        description: 'Comparez les prix, trouvez des offres et explorez les options reconditionnées pour économiser.',
      },
      expert: {
        title: 'Conseils d\'Experts',
        description: 'Découvrez les spécifications Mac, les fonctionnalités et prenez une décision éclairée.',
      },
    },
    lineup: {
      title: 'Gamme Mac 2024/2025',
      from: 'À partir de',
      learnMore: 'En savoir plus',
    },
    cta: {
      title: 'Prêt à trouver votre Mac parfait?',
      subtitle: 'Répondez à notre quiz rapide et obtenez des recommandations personnalisées en quelques minutes.',
      button: 'Commencer le Quiz',
    },
    footer: {
      description: 'Nous vous aidons à trouver le Mac parfait depuis 2024. Comparez les modèles, calculez les budgets et prenez des décisions éclairées.',
      quickLinks: 'Liens Rapides',
      disclosure: 'Divulgation',
      disclosureText: 'Nous gagnons des commissions sur les achats qualifiés via des liens d\'affiliation. Cela nous aide à fournir du contenu gratuit.',
      copyright: '2024 Mac Finder. Non affilié à Apple Inc.',
    },
  },

  // Quiz
  quiz: {
    title: 'Trouvez votre Mac parfait - Quiz interactif',
    subtitle: 'Répondez à quelques questions simples et obtenez des recommandations Mac personnalisées basées sur vos besoins, votre budget et vos préférences.',
    progress: 'Question {current} sur {total}',
    complete: '{percent}% Complété',
    goBack: 'Retour',

    results: {
      title: 'Vos Mac Parfaits',
      subtitle: 'Basé sur vos réponses, voici nos meilleures recommandations:',
      bestMatch: 'Meilleure Correspondance',
      chip: 'Puce',
      memory: 'Mémoire',
      display: 'Écran',
      battery: 'Batterie',
      upTo: 'Jusqu\'à',
      hours: 'heures',
      keyFeatures: 'Caractéristiques Principales:',
      refurbished: 'Reconditionné:',
      save: 'Économisez',
      buyOnApple: 'Acheter sur Apple.com',
      checkAmazon: 'Voir sur Amazon',
      startOver: 'Recommencer',
      compareSideBySide: 'Ou comparez tous les modèles Mac côte à côte',
      disclosure: 'Divulgation:',
      disclosureText: 'Nous gagnons des commissions sur les achats qualifiés via des liens d\'affiliation. Cela n\'affecte pas votre prix et nous aide à fournir du contenu gratuit.',
    },

    questions: {
      usage: {
        question: 'Pour quelle utilisation principale avez-vous besoin de votre Mac?',
        everyday: 'Tâches quotidiennes (web, email, documents)',
        student: 'Travail étudiant (recherche, rédaction, présentations)',
        professional: 'Travail professionnel (applications professionnelles, productivité)',
        photo: 'Retouche photo',
        video: 'Montage vidéo',
        dev: 'Développement logiciel',
        rendering: 'Rendu 3D et travail créatif intensif',
      },
      performance: {
        question: 'Quelle est l\'intensité de vos charges de travail?',
        light: 'Légère (navigation web, emails, documents)',
        medium: 'Moyenne (multitâche, applications modérées)',
        heavy: 'Lourde (plusieurs applications pro, gros fichiers)',
        extreme: 'Extrême (vidéo 4K/8K, 3D, simulations complexes)',
      },
      portability: {
        question: 'Avez-vous besoin de portabilité?',
        yes: 'Oui, je dois le transporter',
        no: 'Non, il restera au même endroit',
        flexible: 'Je suis flexible',
      },
      battery: {
        question: 'Quelle est l\'importance d\'une longue autonomie? (pour les portables)',
        critical: 'Très importante - J\'ai besoin d\'une autonomie toute la journée',
        important: 'Assez importante - 8+ heures c\'est bien',
        notImportant: 'Pas importante - Généralement branché',
        na: 'Non applicable - J\'achète un ordinateur de bureau',
      },
      displays: {
        question: 'Utiliserez-vous des écrans externes?',
        none: 'Non, seulement l\'écran intégré',
        one: 'Oui, un écran externe',
        multiple: 'Oui, deux écrans ou plus',
        pro: 'Plusieurs écrans haute résolution (4K+)',
      },
      memory: {
        question: 'Combien de multitâche faites-vous?',
        light: 'Léger - Peu d\'applications ouvertes',
        moderate: 'Modéré - Plusieurs applications et onglets de navigateur',
        heavy: 'Lourd - Beaucoup d\'applications, VMs ou gros projets',
        extreme: 'Extrême - Flux de travail professionnels avec d\'énormes fichiers',
      },
      budget: {
        question: 'Quel est votre budget?',
        low: 'Moins de 1 000 $',
        mediumLow: '1 000 $ - 1 500 $',
        medium: '1 500 $ - 2 500 $',
        high: '2 500 $ - 4 000 $',
        veryHigh: 'Plus de 4 000 $',
      },
      refurbished: {
        question: 'Êtes-vous ouvert aux Mac reconditionnés?',
        yes: 'Oui, je veux économiser de l\'argent',
        maybe: 'Peut-être, si les économies sont significatives',
        no: 'Non, je préfère du neuf uniquement',
        info: 'Dites-m\'en plus sur les reconditionnés',
      },
      screen: {
        question: 'Préférence de taille d\'écran?',
        compact: 'Compact (13")',
        medium: 'Moyen (14-15")',
        large: 'Grand (16"+)',
        none: 'Je n\'ai pas besoin d\'écran (ordinateur de bureau)',
      },
      futureproof: {
        question: 'Combien de temps prévoyez-vous de garder ce Mac?',
        short: '2-3 ans',
        medium: '4-5 ans',
        long: '5+ ans - Je veux qu\'il dure',
        veryLong: '7+ ans - Longévité maximale',
      },
    },
  },

  // Common
  common: {
    loading: 'Chargement...',
    error: 'Une erreur s\'est produite',
    tryAgain: 'Réessayer',
  },
};
