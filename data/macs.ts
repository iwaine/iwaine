export type MacCategory = 'laptop' | 'desktop';
export type MacModel = 'MacBook Air' | 'MacBook Pro' | 'iMac' | 'Mac mini' | 'Mac Studio' | 'Mac Pro';
export type ChipType = 'M2' | 'M3' | 'M3 Pro' | 'M3 Max' | 'M4' | 'M4 Pro' | 'M4 Max' | 'M2 Pro' | 'M2 Max' | 'M2 Ultra';
export type UseCase = 'everyday' | 'student' | 'professional' | 'creative' | 'developer' | 'gaming' | 'video-editing' | 'photo-editing' | '3d-rendering';

export interface MacProduct {
  id: string;
  model: MacModel;
  category: MacCategory;
  name: string;
  chip: ChipType;
  chipCores: {
    cpu: number;
    gpu: number;
  };
  memory: number[];
  storage: number[];
  display: {
    size: number;
    resolution: string;
    type: string;
  } | null;
  ports: {
    thunderbolt: number;
    usb: number;
    hdmi: boolean;
    sdCard: boolean;
    ethernet: boolean;
  };
  price: {
    base: number;
    currency: string;
  };
  features: string[];
  bestFor: UseCase[];
  releaseYear: number;
  weight?: number; // in kg
  batteryLife?: number; // in hours
  image: string; // Product image URL
  affiliateLinks: {
    apple: string;
    amazon?: string;
    bestbuy?: string;
    bhphoto?: string;
  };
  refurbishedAvailable: boolean;
  refurbishedPrice?: number;
}

export const macProducts: MacProduct[] = [
  // MacBook Air M2
  {
    id: 'mba-m2-13',
    model: 'MacBook Air',
    category: 'laptop',
    name: 'MacBook Air 13" M2',
    chip: 'M2',
    chipCores: { cpu: 8, gpu: 8 },
    memory: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    display: {
      size: 13.6,
      resolution: '2560 x 1664',
      type: 'Liquid Retina'
    },
    ports: {
      thunderbolt: 2,
      usb: 0,
      hdmi: false,
      sdCard: false,
      ethernet: false
    },
    price: { base: 1099, currency: 'USD' },
    features: ['Fanless design', 'MagSafe 3', '1080p FaceTime HD camera', 'Four-speaker sound system'],
    bestFor: ['everyday', 'student', 'photo-editing'],
    releaseYear: 2022,
    weight: 1.24,
    batteryLife: 18,
    image: 'https://www.apple.com/v/macbook-air-m2/e/images/overview/design/design_hero__dvd39l6oqf6q_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2',
      amazon: 'https://amazon.com',
      bestbuy: 'https://bestbuy.com',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 929,
  },
  // MacBook Air M3
  {
    id: 'mba-m3-13',
    model: 'MacBook Air',
    category: 'laptop',
    name: 'MacBook Air 13" M3',
    chip: 'M3',
    chipCores: { cpu: 8, gpu: 10 },
    memory: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    display: {
      size: 13.6,
      resolution: '2560 x 1664',
      type: 'Liquid Retina'
    },
    ports: {
      thunderbolt: 2,
      usb: 0,
      hdmi: false,
      sdCard: false,
      ethernet: false
    },
    price: { base: 1099, currency: 'USD' },
    features: ['Fanless design', 'MagSafe 3', '1080p FaceTime HD camera', 'Support for two external displays'],
    bestFor: ['everyday', 'student', 'professional', 'photo-editing'],
    releaseYear: 2024,
    weight: 1.24,
    batteryLife: 18,
    image: 'https://www.apple.com/v/macbook-air-m2/e/images/overview/design/design_hero__dvd39l6oqf6q_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m3',
    },
    refurbishedAvailable: false,
  },
  // MacBook Air M3 15"
  {
    id: 'mba-m3-15',
    model: 'MacBook Air',
    category: 'laptop',
    name: 'MacBook Air 15" M3',
    chip: 'M3',
    chipCores: { cpu: 8, gpu: 10 },
    memory: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    display: {
      size: 15.3,
      resolution: '2880 x 1864',
      type: 'Liquid Retina'
    },
    ports: {
      thunderbolt: 2,
      usb: 0,
      hdmi: false,
      sdCard: false,
      ethernet: false
    },
    price: { base: 1299, currency: 'USD' },
    features: ['Fanless design', 'MagSafe 3', '1080p FaceTime HD camera', 'Six-speaker sound system'],
    bestFor: ['everyday', 'student', 'professional', 'creative'],
    releaseYear: 2024,
    weight: 1.51,
    batteryLife: 18,
    image: 'https://www.apple.com/v/macbook-air/s/images/overview/design/design_hero__bq0u11uh5xme_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-air/15-inch-m3',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M3 14"
  {
    id: 'mbp-m3-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M3',
    chip: 'M3',
    chipCores: { cpu: 8, gpu: 10 },
    memory: [8, 16, 24],
    storage: [512, 1024, 2048],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 2,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 1599, currency: 'USD' },
    features: ['XDR display', 'ProMotion 120Hz', 'Active cooling', 'HDMI 2.1', 'SDXC card slot'],
    bestFor: ['professional', 'creative', 'developer', 'video-editing', 'photo-editing'],
    releaseYear: 2023,
    weight: 1.55,
    batteryLife: 22,
    image: 'https://www.apple.com/v/macbook-pro-14-and-16/d/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m3',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 1359,
  },
  // MacBook Pro M3 Pro 14"
  {
    id: 'mbp-m3pro-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M3 Pro',
    chip: 'M3 Pro',
    chipCores: { cpu: 11, gpu: 14 },
    memory: [18, 36],
    storage: [512, 1024, 2048, 4096],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 1999, currency: 'USD' },
    features: ['XDR display', 'ProMotion 120Hz', 'Three Thunderbolt 4 ports', 'Up to 18 hours battery'],
    bestFor: ['professional', 'creative', 'developer', 'video-editing', '3d-rendering'],
    releaseYear: 2023,
    weight: 1.61,
    batteryLife: 18,
    image: 'https://www.apple.com/v/macbook-pro-14-and-16/d/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m3-pro-m3-max',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M3 Max 14"
  {
    id: 'mbp-m3max-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M3 Max',
    chip: 'M3 Max',
    chipCores: { cpu: 14, gpu: 30 },
    memory: [36, 64, 96, 128],
    storage: [1024, 2048, 4096, 8192],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 3199, currency: 'USD' },
    features: ['XDR display', 'ProMotion 120Hz', 'Maximum performance', 'Up to 128GB unified memory'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2023,
    weight: 1.62,
    batteryLife: 18,
    image: 'https://www.apple.com/v/macbook-pro-14-and-16/d/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m3-pro-m3-max',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M4 14"
  {
    id: 'mbp-m4-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M4',
    chip: 'M4',
    chipCores: { cpu: 10, gpu: 10 },
    memory: [16, 24, 32],
    storage: [512, 1024, 2048],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 1599, currency: 'USD' },
    features: ['Latest M4 chip', 'XDR display', 'Three Thunderbolt 4 ports', 'Nano-texture display option'],
    bestFor: ['professional', 'creative', 'developer', 'video-editing'],
    releaseYear: 2024,
    weight: 1.55,
    batteryLife: 24,
    image: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_intro_endframe__bk2ya25xknz6_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m4',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M4 Pro 14"
  {
    id: 'mbp-m4pro-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M4 Pro',
    chip: 'M4 Pro',
    chipCores: { cpu: 14, gpu: 20 },
    memory: [24, 48],
    storage: [512, 1024, 2048, 4096],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 1999, currency: 'USD' },
    features: ['M4 Pro chip', 'Thunderbolt 5 support', 'Up to 273 GB/s memory bandwidth'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2024,
    weight: 1.61,
    batteryLife: 24,
    image: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_intro_endframe__bk2ya25xknz6_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m4-pro-m4-max',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M4 Max 14"
  {
    id: 'mbp-m4max-14',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 14" M4 Max',
    chip: 'M4 Max',
    chipCores: { cpu: 16, gpu: 40 },
    memory: [36, 64, 128],
    storage: [1024, 2048, 4096, 8192],
    display: {
      size: 14.2,
      resolution: '3024 x 1964',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 3199, currency: 'USD' },
    features: ['M4 Max chip', 'Up to 128GB RAM', 'Ultimate performance', 'Thunderbolt 5'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2024,
    weight: 1.62,
    batteryLife: 24,
    image: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_intro_endframe__bk2ya25xknz6_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m4-pro-m4-max',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M4 Pro 16"
  {
    id: 'mbp-m4pro-16',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 16" M4 Pro',
    chip: 'M4 Pro',
    chipCores: { cpu: 14, gpu: 20 },
    memory: [24, 48],
    storage: [512, 1024, 2048, 4096],
    display: {
      size: 16.2,
      resolution: '3456 x 2234',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 2499, currency: 'USD' },
    features: ['Large 16" display', 'M4 Pro performance', 'Longest battery life'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2024,
    weight: 2.14,
    batteryLife: 24,
    image: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_intro_endframe__bk2ya25xknz6_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-m4-pro-m4-max',
    },
    refurbishedAvailable: false,
  },
  // MacBook Pro M4 Max 16"
  {
    id: 'mbp-m4max-16',
    model: 'MacBook Pro',
    category: 'laptop',
    name: 'MacBook Pro 16" M4 Max',
    chip: 'M4 Max',
    chipCores: { cpu: 16, gpu: 40 },
    memory: [36, 64, 128],
    storage: [1024, 2048, 4096, 8192],
    display: {
      size: 16.2,
      resolution: '3456 x 2234',
      type: 'Liquid Retina XDR'
    },
    ports: {
      thunderbolt: 3,
      usb: 0,
      hdmi: true,
      sdCard: true,
      ethernet: false
    },
    price: { base: 3499, currency: 'USD' },
    features: ['16" XDR display', 'Maximum M4 performance', 'Up to 128GB RAM', 'Best for pros'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2024,
    weight: 2.15,
    batteryLife: 24,
    image: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_intro_endframe__bk2ya25xknz6_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-m4-pro-m4-max',
    },
    refurbishedAvailable: false,
  },
  // iMac M3
  {
    id: 'imac-m3-24',
    model: 'iMac',
    category: 'desktop',
    name: 'iMac 24" M3',
    chip: 'M3',
    chipCores: { cpu: 8, gpu: 10 },
    memory: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    display: {
      size: 24,
      resolution: '4480 x 2520',
      type: '4.5K Retina'
    },
    ports: {
      thunderbolt: 2,
      usb: 2,
      hdmi: false,
      sdCard: false,
      ethernet: true
    },
    price: { base: 1299, currency: 'USD' },
    features: ['4.5K Retina display', 'Seven vibrant colors', '1080p FaceTime camera', 'Six-speaker sound'],
    bestFor: ['everyday', 'student', 'creative', 'photo-editing'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/imac/q/images/overview/hero/hero_intro_endframe__c8d2jbxq85iq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/imac',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 1099,
  },
  // iMac M4
  {
    id: 'imac-m4-24',
    model: 'iMac',
    category: 'desktop',
    name: 'iMac 24" M4',
    chip: 'M4',
    chipCores: { cpu: 10, gpu: 10 },
    memory: [16, 24, 32],
    storage: [256, 512, 1024, 2048],
    display: {
      size: 24,
      resolution: '4480 x 2520',
      type: '4.5K Retina'
    },
    ports: {
      thunderbolt: 4,
      usb: 0,
      hdmi: false,
      sdCard: false,
      ethernet: true
    },
    price: { base: 1299, currency: 'USD' },
    features: ['Latest M4 chip', '4.5K Retina display', 'Center Stage camera', 'Nano-texture option'],
    bestFor: ['everyday', 'student', 'professional', 'creative'],
    releaseYear: 2024,
    image: 'https://www.apple.com/v/imac/q/images/overview/hero/hero_intro_endframe__c8d2jbxq85iq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/imac',
    },
    refurbishedAvailable: false,
  },
  // Mac mini M2
  {
    id: 'mini-m2',
    model: 'Mac mini',
    category: 'desktop',
    name: 'Mac mini M2',
    chip: 'M2',
    chipCores: { cpu: 8, gpu: 10 },
    memory: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    display: null,
    ports: {
      thunderbolt: 2,
      usb: 2,
      hdmi: true,
      sdCard: false,
      ethernet: true
    },
    price: { base: 599, currency: 'USD' },
    features: ['Compact design', 'Great value', 'Gigabit Ethernet', 'Two Thunderbolt 4 ports'],
    bestFor: ['everyday', 'student', 'developer'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/mac-mini/p/images/overview/hero/hero_intro_endframe__b4k1ndvskyaa_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-mini',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 509,
  },
  // Mac mini M2 Pro
  {
    id: 'mini-m2pro',
    model: 'Mac mini',
    category: 'desktop',
    name: 'Mac mini M2 Pro',
    chip: 'M2 Pro',
    chipCores: { cpu: 12, gpu: 19 },
    memory: [16, 32],
    storage: [512, 1024, 2048, 4096, 8192],
    display: null,
    ports: {
      thunderbolt: 4,
      usb: 2,
      hdmi: true,
      sdCard: false,
      ethernet: true
    },
    price: { base: 1299, currency: 'USD' },
    features: ['M2 Pro performance', 'Four Thunderbolt 4 ports', '10Gb Ethernet option', 'Compact powerhouse'],
    bestFor: ['professional', 'developer', 'video-editing'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/mac-mini/p/images/overview/hero/hero_intro_endframe__b4k1ndvskyaa_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-mini',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 1099,
  },
  // Mac mini M4
  {
    id: 'mini-m4',
    model: 'Mac mini',
    category: 'desktop',
    name: 'Mac mini M4',
    chip: 'M4',
    chipCores: { cpu: 10, gpu: 10 },
    memory: [16, 24, 32],
    storage: [256, 512, 1024, 2048],
    display: null,
    ports: {
      thunderbolt: 3,
      usb: 2,
      hdmi: true,
      sdCard: false,
      ethernet: true
    },
    price: { base: 599, currency: 'USD' },
    features: ['Latest M4 chip', 'Incredibly compact', 'Three Thunderbolt 4 ports', 'Best value Mac'],
    bestFor: ['everyday', 'student', 'developer', 'professional'],
    releaseYear: 2024,
    image: 'https://www.apple.com/v/mac-mini/p/images/overview/hero/hero_intro_endframe__b4k1ndvskyaa_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-mini',
    },
    refurbishedAvailable: false,
  },
  // Mac mini M4 Pro
  {
    id: 'mini-m4pro',
    model: 'Mac mini',
    category: 'desktop',
    name: 'Mac mini M4 Pro',
    chip: 'M4 Pro',
    chipCores: { cpu: 14, gpu: 20 },
    memory: [24, 48, 64],
    storage: [512, 1024, 2048, 4096, 8192],
    display: null,
    ports: {
      thunderbolt: 5,
      usb: 2,
      hdmi: true,
      sdCard: false,
      ethernet: true
    },
    price: { base: 1399, currency: 'USD' },
    features: ['M4 Pro chip', 'Five Thunderbolt 5 ports', 'Thunderbolt 5 connectivity', 'Pro performance in compact size'],
    bestFor: ['professional', 'developer', 'video-editing', 'creative'],
    releaseYear: 2024,
    image: 'https://www.apple.com/v/mac-mini/p/images/overview/hero/hero_intro_endframe__b4k1ndvskyaa_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-mini',
    },
    refurbishedAvailable: false,
  },
  // Mac Studio M2 Max
  {
    id: 'studio-m2max',
    model: 'Mac Studio',
    category: 'desktop',
    name: 'Mac Studio M2 Max',
    chip: 'M2 Max',
    chipCores: { cpu: 12, gpu: 30 },
    memory: [32, 64, 96],
    storage: [512, 1024, 2048, 4096, 8192],
    display: null,
    ports: {
      thunderbolt: 4,
      usb: 2,
      hdmi: true,
      sdCard: true,
      ethernet: true
    },
    price: { base: 1999, currency: 'USD' },
    features: ['Powerful desktop', 'SDXC card slot', 'Four Thunderbolt 4 ports', '10Gb Ethernet'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/mac-studio/d/images/overview/hero/hero_intro_endframe__ev02wpqlqziq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-studio',
    },
    refurbishedAvailable: true,
    refurbishedPrice: 1699,
  },
  // Mac Studio M2 Ultra
  {
    id: 'studio-m2ultra',
    model: 'Mac Studio',
    category: 'desktop',
    name: 'Mac Studio M2 Ultra',
    chip: 'M2 Ultra',
    chipCores: { cpu: 24, gpu: 76 },
    memory: [64, 128, 192],
    storage: [1024, 2048, 4096, 8192],
    display: null,
    ports: {
      thunderbolt: 6,
      usb: 2,
      hdmi: true,
      sdCard: true,
      ethernet: true
    },
    price: { base: 3999, currency: 'USD' },
    features: ['Maximum performance', 'Six Thunderbolt 4 ports', 'Up to 192GB unified memory', 'Ultimate pro machine'],
    bestFor: ['professional', 'creative', 'video-editing', '3d-rendering'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/mac-studio/d/images/overview/hero/hero_intro_endframe__ev02wpqlqziq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-studio',
    },
    refurbishedAvailable: false,
  },
  // Mac Pro M2 Ultra
  {
    id: 'pro-m2ultra',
    model: 'Mac Pro',
    category: 'desktop',
    name: 'Mac Pro M2 Ultra',
    chip: 'M2 Ultra',
    chipCores: { cpu: 24, gpu: 76 },
    memory: [64, 128, 192],
    storage: [1024, 2048, 4096, 8192],
    display: null,
    ports: {
      thunderbolt: 6,
      usb: 2,
      hdmi: true,
      sdCard: false,
      ethernet: true
    },
    price: { base: 6999, currency: 'USD' },
    features: ['PCIe expansion slots', 'Rack mountable', 'Eight Thunderbolt 4 ports', 'Maximum expandability'],
    bestFor: ['professional', 'video-editing', '3d-rendering'],
    releaseYear: 2023,
    image: 'https://www.apple.com/v/mac-pro/j/images/overview/hero/hero_intro_endframe__bz9u3v0xqxiq_large.jpg',
    affiliateLinks: {
      apple: 'https://www.apple.com/shop/buy-mac/mac-pro',
    },
    refurbishedAvailable: false,
  },
];

export function getMacsByCategory(category: MacCategory): MacProduct[] {
  return macProducts.filter(mac => mac.category === category);
}

export function getMacsByUseCase(useCase: UseCase): MacProduct[] {
  return macProducts.filter(mac => mac.bestFor.includes(useCase));
}

export function getMacsByBudget(maxBudget: number): MacProduct[] {
  return macProducts.filter(mac => mac.price.base <= maxBudget).sort((a, b) => a.price.base - b.price.base);
}

export function getMacById(id: string): MacProduct | undefined {
  return macProducts.find(mac => mac.id === id);
}
