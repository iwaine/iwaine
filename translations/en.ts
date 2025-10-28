export const en = {
  // Navigation
  nav: {
    title: 'Mac Finder',
    findYourMac: 'Find Your Mac',
    compare: 'Compare',
    budget: 'Budget Calculator',
    learn: 'Learn',
    backToHome: 'Back to Home',
  },

  // Home page
  home: {
    hero: {
      title: 'Find Your Perfect Mac',
      subtitle: 'Answer a few questions and discover the ideal Mac for your needs, budget, and lifestyle.',
      startQuiz: 'Start Quiz',
      compareModels: 'Compare Models',
    },
    features: {
      title: 'Why Use Mac Finder?',
      personalized: {
        title: 'Personalized Recommendations',
        description: 'Our smart algorithm analyzes your needs to recommend the perfect Mac for you.',
      },
      budget: {
        title: 'Budget Calculator',
        description: 'Compare prices, find deals, and explore refurbished options to save money.',
      },
      expert: {
        title: 'Expert Guidance',
        description: 'Learn about Mac specs, features, and make an informed decision.',
      },
    },
    lineup: {
      title: '2024/2025 Mac Lineup',
      from: 'From',
      learnMore: 'Learn More',
    },
    cta: {
      title: 'Ready to Find Your Perfect Mac?',
      subtitle: 'Take our quick quiz and get personalized recommendations in minutes.',
      button: 'Start the Quiz Now',
    },
    footer: {
      description: 'Helping you find the perfect Mac since 2024. Compare models, calculate budgets, and make informed decisions.',
      quickLinks: 'Quick Links',
      disclosure: 'Disclosure',
      disclosureText: 'We earn commissions from qualifying purchases through affiliate links. This helps us provide free content.',
      copyright: '2024 Mac Finder. Not affiliated with Apple Inc.',
    },
  },

  // Quiz
  quiz: {
    title: 'Find Your Perfect Mac - Interactive Quiz',
    subtitle: 'Answer a few simple questions and get personalized Mac recommendations based on your needs, budget, and preferences.',
    progress: 'Question {current} of {total}',
    complete: '{percent}% Complete',
    goBack: 'Go Back',

    results: {
      title: 'Your Perfect Mac Matches',
      subtitle: 'Based on your answers, here are our top recommendations:',
      bestMatch: 'Best Match',
      chip: 'Chip',
      memory: 'Memory',
      display: 'Display',
      battery: 'Battery',
      upTo: 'Up to',
      hours: 'hours',
      keyFeatures: 'Key Features:',
      refurbished: 'Refurbished:',
      save: 'Save',
      buyOnApple: 'Buy on Apple.com',
      checkAmazon: 'Check Amazon',
      startOver: 'Start Over',
      compareSideBySide: 'Or compare all Mac models side-by-side',
      disclosure: 'Disclosure:',
      disclosureText: 'We earn commissions from qualifying purchases through affiliate links. This doesn\'t affect your price and helps us provide free content.',
    },

    questions: {
      usage: {
        question: 'What will you primarily use your Mac for?',
        everyday: 'Everyday tasks (web, email, documents)',
        student: 'Student work (research, writing, presentations)',
        professional: 'Professional work (business apps, productivity)',
        photo: 'Photo editing',
        video: 'Video editing',
        dev: 'Software development',
        rendering: '3D rendering & heavy creative work',
      },
      performance: {
        question: 'How demanding are your workloads?',
        light: 'Light (web browsing, emails, documents)',
        medium: 'Medium (multitasking, moderate apps)',
        heavy: 'Heavy (multiple pro apps, large files)',
        extreme: 'Extreme (4K/8K video, 3D, complex simulations)',
      },
      portability: {
        question: 'Do you need portability?',
        yes: 'Yes, I need to take it with me',
        no: 'No, it will stay in one place',
        flexible: "I'm flexible",
      },
      battery: {
        question: 'How important is long battery life? (for laptops)',
        critical: 'Very important - I need all-day battery',
        important: 'Somewhat important - 8+ hours is good',
        notImportant: 'Not important - Usually plugged in',
        na: 'Not applicable - Getting a desktop',
      },
      displays: {
        question: 'Will you use external displays?',
        none: 'No, just the built-in display',
        one: 'Yes, one external display',
        multiple: 'Yes, two or more displays',
        pro: 'Multiple high-resolution displays (4K+)',
      },
      memory: {
        question: 'How much multitasking do you do?',
        light: 'Light - Few apps open at once',
        moderate: 'Moderate - Multiple apps and browser tabs',
        heavy: 'Heavy - Many apps, VMs, or large projects',
        extreme: 'Extreme - Professional workflows with huge files',
      },
      budget: {
        question: "What's your budget?",
        low: 'Under $1,000',
        mediumLow: '$1,000 - $1,500',
        medium: '$1,500 - $2,500',
        high: '$2,500 - $4,000',
        veryHigh: '$4,000+',
      },
      refurbished: {
        question: 'Are you open to refurbished Macs?',
        yes: 'Yes, I want to save money',
        maybe: 'Maybe, if the savings are significant',
        no: 'No, I prefer brand new only',
        info: 'Tell me more about refurbished',
      },
      screen: {
        question: 'Screen size preference?',
        compact: 'Compact (13")',
        medium: 'Medium (14-15")',
        large: 'Large (16"+)',
        none: "I don't need a display (desktop)",
      },
      futureproof: {
        question: 'How long do you plan to keep this Mac?',
        short: '2-3 years',
        medium: '4-5 years',
        long: '5+ years - I want it to last',
        veryLong: '7+ years - Maximum longevity',
      },
    },
  },

  // Budget
  budget: {
    title: 'Budget Calculator',
    subtitle: 'Find the best Mac within your budget, including refurbished options',
    controls: {
      yourBudget: 'Your Budget:',
      includeRefurbished: 'Include refurbished models',
      showFinancing: 'Show financing options',
      financingPeriod: 'Financing Period: {months} months',
      months: '{n} months',
    },
    results: {
      found: 'Found {count} Mac models within your ${budget} budget',
      includingRefurb: '(including refurbished)',
      refurbishedOnly: 'Refurbished Only',
      chip: 'Chip:',
      memory: 'Memory:',
      display: 'Display:',
      save: 'Save ${amount} with refurbished!',
      refurbPrice: 'Refurb: ${price}',
      buyNew: 'Buy New - ${price}',
      buyRefurbished: 'Buy Refurbished - ${price}',
      monthlyPayment: '${amount}/month for {months} months',
    },
    emptyState: {
      title: 'No Macs found within your budget. Try increasing your budget.',
      subtitle: 'The most affordable Mac starts at $599 (Mac mini M4)',
    },
    info: {
      title: 'About Refurbished Macs',
      question: 'What is a refurbished Mac?',
      answer: 'Apple Certified Refurbished products are pre-owned Apple products that have been thoroughly tested and certified by Apple.',
      benefits: {
        warranty: 'Full Apple warranty (1 year)',
        condition: 'Like-new condition with new outer shell',
        tested: 'Thoroughly tested and certified',
        applecare: 'Eligible for AppleCare+',
        savings: 'Save 15-30% off retail price',
      },
    },
    disclosure: {
      title: 'Disclosure:',
      text: 'We earn commissions from qualifying purchases through affiliate links. Prices shown are approximate and may vary.',
    },
  },

  // Compare
  compare: {
    title: 'Compare Mac Models',
    subtitle: 'Select up to 3 Mac models to compare side-by-side',
    filters: {
      all: 'All Macs',
      laptops: 'Laptops',
      desktops: 'Desktops',
    },
    selected: '{count} of 3 models selected',
    clearAll: 'Clear all',
    emptyState: 'Select Mac models above to start comparing',
    table: {
      specification: 'Specification',
      startingPrice: 'Starting Price',
      refurb: 'Refurb:',
      chip: 'Chip',
      cpuGpu: '{cpu}-core CPU, {gpu}-core GPU',
      memoryOptions: 'Memory Options',
      storageOptions: 'Storage Options',
      display: 'Display',
      noDisplay: 'No built-in display',
      batteryLife: 'Battery Life',
      upToHours: 'Up to {hours} hours',
      weight: 'Weight',
      ports: 'Ports',
      thunderbolt: 'Thunderbolt',
      usbA: 'USB-A',
      hdmi: 'HDMI',
      sdCard: 'SD Card',
      ethernet: 'Ethernet',
      bestFor: 'Best For',
      buyNow: 'Buy Now',
      apple: 'Apple',
      amazon: 'Amazon',
    },
  },

  // Learn
  learn: {
    title: 'Understanding Mac Specifications',
    subtitle: 'Everything you need to know to make an informed decision',
    toc: {
      title: 'Quick Navigation',
      chips: 'Apple Silicon Chips (M-series)',
      memory: 'Unified Memory (RAM)',
      storage: 'Storage Options',
      displays: 'Display Technology',
      ports: 'Ports & Connectivity',
      choosing: 'Choosing the Right Mac',
    },
    cta: {
      title: 'Ready to Find Your Perfect Mac?',
      subtitle: 'Take our interactive quiz to get personalized recommendations',
      button: 'Start the Quiz',
    },
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    tryAgain: 'Try Again',
  },
};

export type Translation = typeof en;
