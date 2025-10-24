# Mac Finder

A comprehensive web application that helps users find the perfect Mac based on their needs, budget, and preferences. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 1. Interactive Quiz
- Smart questionnaire that analyzes user needs
- Intelligent recommendation engine
- Personalized Mac suggestions based on:
  - Usage patterns (everyday, professional, creative work)
  - Budget constraints
  - Portability requirements
  - Screen size preferences

### 2. Comparison Tool
- Side-by-side comparison of up to 3 Mac models
- Detailed specifications including:
  - Chips (M2, M3, M4, Pro, Max, Ultra)
  - Memory and storage options
  - Display specifications
  - Ports and connectivity
  - Battery life and weight
- Filter by category (laptops vs desktops)

### 3. Budget Calculator
- Interactive budget slider ($500 - $8,000)
- Refurbished Mac options with savings calculation
- Financing calculator with monthly payment breakdown
- Real-time filtering based on budget
- Detailed savings information for refurbished models

### 4. Educational Content
- Comprehensive guide to Mac specifications
- Detailed explanations of:
  - Apple Silicon chips (M2, M3, M4 families)
  - Unified Memory architecture
  - Display technologies (Retina, XDR, ProMotion)
  - Ports and connectivity options
- Use case recommendations

### 5. Complete Mac Database
- **2024/2025 Mac lineup** including:
  - MacBook Air (M2, M3 - 13" & 15")
  - MacBook Pro (M3, M4, Pro, Max - 14" & 16")
  - iMac (M3, M4 - 24")
  - Mac mini (M2, M4, Pro)
  - Mac Studio (M2 Max, Ultra)
  - Mac Pro (M2 Ultra)

### 6. Affiliate Monetization
- Integrated affiliate link system for:
  - Apple.com
  - Amazon
  - Best Buy
  - B&H Photo
- Refurbished product links
- Transparent affiliate disclosure

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Deployment Ready**: Static site generation (SSG)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd iwaine
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
iwaine/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage with hero and Mac lineup
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   ├── quiz/              # Interactive quiz page
│   ├── compare/           # Comparison tool page
│   ├── budget/            # Budget calculator page
│   └── learn/             # Educational content page
├── components/            # React components
│   └── Quiz.tsx          # Quiz logic and recommendation engine
├── data/                 # Data layer
│   └── macs.ts          # Mac product database and helpers
├── public/              # Static assets
└── README.md           # This file
```

## Key Features Breakdown

### Recommendation Engine
The quiz uses a sophisticated scoring algorithm that considers:
- Use case matching (10 points per matching use case)
- Category preference (15 points for laptop/desktop match)
- Budget constraints (20 points for within budget, -20 penalty for over)
- Screen size preference (10 points for matching size)
- Performance requirements (bonus for newer chips)

### Budget Calculator Features
- Real-time Mac filtering based on budget slider
- Toggle for including/excluding refurbished models
- Financing calculator with customizable payment periods (6, 12, 18, 24 months)
- Visual savings indicators for refurbished options
- Separate "Buy New" and "Buy Refurbished" links

### Comparison Tool
- Select up to 3 Mac models for detailed comparison
- Filter by category (all, laptops, desktops)
- Comprehensive specification table including:
  - Pricing (new and refurbished)
  - Chip details (CPU/GPU cores)
  - Memory and storage configurations
  - Display specifications
  - Battery life and weight (for laptops)
  - Port configurations
  - Best use cases
- Direct purchase links for each model

## Customization

### Adding New Mac Models

Edit `data/macs.ts` and add new entries to the `macProducts` array:

```typescript
{
  id: 'unique-id',
  model: 'MacBook Air',
  category: 'laptop',
  name: 'MacBook Air 13" M5',
  chip: 'M5',
  // ... other properties
}
```

### Updating Affiliate Links

Modify the `affiliateLinks` object in each Mac product:

```typescript
affiliateLinks: {
  apple: 'YOUR_APPLE_AFFILIATE_LINK',
  amazon: 'YOUR_AMAZON_AFFILIATE_LINK',
  bestbuy: 'YOUR_BESTBUY_AFFILIATE_LINK',
  bhphoto: 'YOUR_BH_AFFILIATE_LINK',
}
```

### Customizing the Quiz

Edit `components/Quiz.tsx` to modify questions or scoring logic:
- Add/remove questions in the `quizQuestions` array
- Adjust scoring weights in `calculateRecommendations()`
- Customize the recommendation display

## SEO Optimization

The application includes:
- Semantic HTML structure
- Meta tags for title, description, and keywords
- Proper heading hierarchy (h1, h2, h3)
- Descriptive page titles for each route
- Fast loading times with Next.js optimization
- Mobile-responsive design

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Other Platforms
The app is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Affiliate IDs (optional)
NEXT_PUBLIC_APPLE_AFFILIATE_ID=your-apple-affiliate-id
NEXT_PUBLIC_AMAZON_ASSOCIATE_ID=your-amazon-associate-id
```

## Future Enhancements

Potential features to add:
- [ ] User accounts and saved preferences
- [ ] Mac availability checker (in stock/out of stock)
- [ ] Price tracking and alerts
- [ ] User reviews and ratings
- [ ] Comparison history
- [ ] More detailed technical specs
- [ ] Video reviews integration
- [ ] Deal alerts and promotions
- [ ] Trade-in value calculator
- [ ] Mac accessories recommendations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Disclaimer

This website is not affiliated with Apple Inc. Mac, MacBook, iMac, Mac mini, Mac Studio, and Mac Pro are trademarks of Apple Inc.

All product specifications and prices are subject to change. Please verify current specifications and pricing on the official Apple website or authorized retailers.

## Affiliate Disclosure

This website contains affiliate links. When you purchase through these links, we may earn a commission at no additional cost to you. This helps support the maintenance and development of this free tool.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Built with ❤️ for Mac enthusiasts
