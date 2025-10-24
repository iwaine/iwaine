'use client';

import { useState } from 'react';
import { macProducts, type UseCase, type MacProduct } from '@/data/macs';
import Link from 'next/link';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    useCases?: UseCase[];
    categoryPreference?: 'laptop' | 'desktop';
    minBudget?: number;
    portability?: boolean;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'usage',
    question: 'What will you primarily use your Mac for?',
    options: [
      { label: 'Everyday tasks (web, email, documents)', value: 'everyday', useCases: ['everyday'] },
      { label: 'Student work (research, writing, presentations)', value: 'student', useCases: ['student'] },
      { label: 'Professional work (business apps, productivity)', value: 'professional', useCases: ['professional'] },
      { label: 'Photo editing', value: 'photo', useCases: ['photo-editing', 'creative'] },
      { label: 'Video editing', value: 'video', useCases: ['video-editing', 'creative'], minBudget: 1599 },
      { label: 'Software development', value: 'dev', useCases: ['developer', 'professional'] },
      { label: '3D rendering & heavy creative work', value: '3d', useCases: ['3d-rendering', 'creative'], minBudget: 1999 },
    ],
  },
  {
    id: 'performance',
    question: 'How demanding are your workloads?',
    options: [
      { label: 'Light (web browsing, emails, documents)', value: 'light' },
      { label: 'Medium (multitasking, moderate apps)', value: 'medium' },
      { label: 'Heavy (multiple pro apps, large files)', value: 'heavy', minBudget: 1599 },
      { label: 'Extreme (4K/8K video, 3D, complex simulations)', value: 'extreme', minBudget: 2500 },
    ],
  },
  {
    id: 'portability',
    question: 'Do you need portability?',
    options: [
      { label: 'Yes, I need to take it with me', value: 'yes', categoryPreference: 'laptop', portability: true },
      { label: 'No, it will stay in one place', value: 'no', categoryPreference: 'desktop', portability: false },
      { label: "I'm flexible", value: 'flexible' },
    ],
  },
  {
    id: 'battery',
    question: 'How important is long battery life? (for laptops)',
    options: [
      { label: 'Very important - I need all-day battery', value: 'critical' },
      { label: 'Somewhat important - 8+ hours is good', value: 'important' },
      { label: 'Not important - Usually plugged in', value: 'not-important' },
      { label: 'Not applicable - Getting a desktop', value: 'na', categoryPreference: 'desktop' },
    ],
  },
  {
    id: 'displays',
    question: 'Will you use external displays?',
    options: [
      { label: 'No, just the built-in display', value: 'none' },
      { label: 'Yes, one external display', value: 'one' },
      { label: 'Yes, two or more displays', value: 'multiple', minBudget: 1299 },
      { label: 'Multiple high-resolution displays (4K+)', value: 'pro-displays', minBudget: 1999 },
    ],
  },
  {
    id: 'memory',
    question: 'How much multitasking do you do?',
    options: [
      { label: 'Light - Few apps open at once', value: 'light' },
      { label: 'Moderate - Multiple apps and browser tabs', value: 'moderate' },
      { label: 'Heavy - Many apps, VMs, or large projects', value: 'heavy', minBudget: 1599 },
      { label: 'Extreme - Professional workflows with huge files', value: 'extreme', minBudget: 2500 },
    ],
  },
  {
    id: 'budget',
    question: "What's your budget?",
    options: [
      { label: 'Under $1,000', value: 'low', minBudget: 0 },
      { label: '$1,000 - $1,500', value: 'medium-low', minBudget: 1000 },
      { label: '$1,500 - $2,500', value: 'medium', minBudget: 1500 },
      { label: '$2,500 - $4,000', value: 'high', minBudget: 2500 },
      { label: '$4,000+', value: 'very-high', minBudget: 4000 },
    ],
  },
  {
    id: 'refurbished',
    question: 'Are you open to refurbished Macs?',
    options: [
      { label: 'Yes, I want to save money', value: 'yes' },
      { label: 'Maybe, if the savings are significant', value: 'maybe' },
      { label: 'No, I prefer brand new only', value: 'no' },
      { label: 'Tell me more about refurbished', value: 'info' },
    ],
  },
  {
    id: 'screen',
    question: 'Screen size preference?',
    options: [
      { label: 'Compact (13")', value: 'compact' },
      { label: 'Medium (14-15")', value: 'medium' },
      { label: 'Large (16"+)', value: 'large' },
      { label: "I don't need a display (desktop)", value: 'none', categoryPreference: 'desktop' },
    ],
  },
  {
    id: 'futureproof',
    question: 'How long do you plan to keep this Mac?',
    options: [
      { label: '2-3 years', value: 'short' },
      { label: '4-5 years', value: 'medium' },
      { label: '5+ years - I want it to last', value: 'long', minBudget: 1299 },
      { label: '7+ years - Maximum longevity', value: 'very-long', minBudget: 1999 },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [recommendations, setRecommendations] = useState<MacProduct[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, option: any) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendations
      calculateRecommendations(newAnswers);
      setShowResults(true);
    }
  };

  const calculateRecommendations = (userAnswers: Record<string, any>) => {
    let scored = macProducts.map(mac => {
      let score = 0;

      // Usage match
      const usageAnswer = userAnswers.usage;
      if (usageAnswer?.useCases) {
        const matchingUseCases = mac.bestFor.filter(use =>
          usageAnswer.useCases.includes(use)
        );
        score += matchingUseCases.length * 10;
      }

      // Performance requirements
      const performanceAnswer = userAnswers.performance;
      if (performanceAnswer) {
        if (performanceAnswer.value === 'light' && (mac.chip === 'M2' || mac.chip === 'M3')) score += 10;
        if (performanceAnswer.value === 'medium' && (mac.chip === 'M3' || mac.chip === 'M4')) score += 10;
        if (performanceAnswer.value === 'heavy' && (mac.chip.includes('Pro') || mac.chip.includes('Max'))) score += 15;
        if (performanceAnswer.value === 'extreme' && (mac.chip.includes('Max') || mac.chip.includes('Ultra'))) score += 20;
      }

      // Category preference (laptop vs desktop)
      const portabilityAnswer = userAnswers.portability;
      if (portabilityAnswer?.categoryPreference) {
        if (mac.category === portabilityAnswer.categoryPreference) {
          score += 15;
        }
      }

      // Battery life importance (for laptops)
      const batteryAnswer = userAnswers.battery;
      if (batteryAnswer && mac.batteryLife) {
        if (batteryAnswer.value === 'critical' && mac.batteryLife >= 18) score += 10;
        if (batteryAnswer.value === 'important' && mac.batteryLife >= 15) score += 5;
        if (batteryAnswer.categoryPreference === 'desktop' && mac.category === 'desktop') score += 10;
      }

      // External displays
      const displaysAnswer = userAnswers.displays;
      if (displaysAnswer) {
        if (displaysAnswer.value === 'multiple' && (mac.chip.includes('Pro') || mac.chip.includes('Max') || mac.chip === 'M3' || mac.chip === 'M4')) {
          score += 10;
        }
        if (displaysAnswer.value === 'pro-displays' && (mac.chip.includes('Max') || mac.chip.includes('Ultra') || mac.chip.includes('Pro'))) {
          score += 15;
        }
      }

      // Memory/Multitasking needs
      const memoryAnswer = userAnswers.memory;
      if (memoryAnswer) {
        if (memoryAnswer.value === 'light' && mac.memory.includes(8)) score += 8;
        if (memoryAnswer.value === 'moderate' && mac.memory.includes(16)) score += 10;
        if (memoryAnswer.value === 'heavy' && (mac.memory.includes(32) || mac.memory.includes(36))) score += 12;
        if (memoryAnswer.value === 'extreme' && mac.memory[mac.memory.length - 1] >= 64) score += 15;
      }

      const screenAnswer = userAnswers.screen;
      if (screenAnswer?.categoryPreference === 'desktop' && mac.category === 'desktop') {
        score += 15;
      }

      // Budget match
      const budgetAnswer = userAnswers.budget;
      if (budgetAnswer) {
        const budgetMax = budgetAnswer.value === 'low' ? 1000 :
                         budgetAnswer.value === 'medium-low' ? 1500 :
                         budgetAnswer.value === 'medium' ? 2500 :
                         budgetAnswer.value === 'high' ? 4000 : 100000;

        if (mac.price.base <= budgetMax) {
          score += 20;
          // Bonus for being well within budget
          if (mac.price.base <= budgetMax * 0.8) {
            score += 5;
          }
        } else {
          score -= 20; // Penalty for exceeding budget
        }
      }

      // Refurbished preference
      const refurbishedAnswer = userAnswers.refurbished;
      if (refurbishedAnswer) {
        if (refurbishedAnswer.value === 'yes' && mac.refurbishedAvailable) score += 8;
        if (refurbishedAnswer.value === 'no' && !mac.refurbishedAvailable) score += 3;
      }

      // Screen size preference
      if (screenAnswer && mac.display) {
        if (screenAnswer.value === 'compact' && mac.display.size <= 13.6) score += 10;
        if (screenAnswer.value === 'medium' && mac.display.size >= 14 && mac.display.size <= 15.5) score += 10;
        if (screenAnswer.value === 'large' && mac.display.size >= 16) score += 10;
      }

      // Future-proofing
      const futureproofAnswer = userAnswers.futureproof;
      if (futureproofAnswer) {
        if (futureproofAnswer.value === 'long' && (mac.chip === 'M4' || mac.chip.includes('M4') || mac.chip === 'M3')) score += 10;
        if (futureproofAnswer.value === 'very-long' && mac.chip.includes('M4')) score += 15;
      }

      // Minimum budget requirements
      if (usageAnswer?.minBudget && mac.price.base >= usageAnswer.minBudget) {
        score += 5;
      }

      // Prefer newer models (M4 > M3 > M2)
      if (mac.chip.includes('M4')) score += 5;
      else if (mac.chip.includes('M3')) score += 3;

      return { mac, score };
    });

    // Sort by score and take top 3
    scored.sort((a, b) => b.score - a.score);
    const topRecommendations = scored.slice(0, 3).map(item => item.mac);
    setRecommendations(topRecommendations);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setRecommendations([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Perfect Mac Matches
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Based on your answers, here are our top recommendations:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recommendations.map((mac, index) => (
            <div key={mac.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative">
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Best Match
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 mt-2">
                {mac.name}
              </h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                ${mac.price.base.toLocaleString()}
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chip</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{mac.chip}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Memory</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {mac.memory[0]}GB - {mac.memory[mac.memory.length - 1]}GB
                  </p>
                </div>
                {mac.display && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Display</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {mac.display.size}" {mac.display.type}
                    </p>
                  </div>
                )}
                {mac.batteryLife && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Battery</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Up to {mac.batteryLife} hours
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {mac.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {mac.refurbishedAvailable && mac.refurbishedPrice && (
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <strong>Refurbished:</strong> ${mac.refurbishedPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                    Save ${(mac.price.base - mac.refurbishedPrice).toLocaleString()}!
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <a
                  href={mac.affiliateLinks.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy on Apple.com
                </a>
                {mac.affiliateLinks.amazon && (
                  <a
                    href={mac.affiliateLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    Check Amazon
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={restartQuiz}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Start Over
          </button>
          <div>
            <Link
              href="/compare"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Or compare all Mac models side-by-side
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>Disclosure:</strong> We earn commissions from qualifying purchases through affiliate links.
            This doesn't affect your price and helps us provide free content.
          </p>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <span className="text-lg text-gray-900 dark:text-white font-medium">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <div className="text-center">
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
}
