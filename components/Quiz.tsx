'use client';

import { useState } from 'react';
import Image from 'next/image';
import { macProducts, type UseCase, type MacProduct } from '@/data/macs';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizQuestion {
  id: string;
  options: {
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
    options: [
      { value: 'everyday', useCases: ['everyday'] },
      { value: 'student', useCases: ['student'] },
      { value: 'professional', useCases: ['professional'] },
      { value: 'photo', useCases: ['photo-editing', 'creative'] },
      { value: 'video', useCases: ['video-editing', 'creative'], minBudget: 1599 },
      { value: 'dev', useCases: ['developer', 'professional'] },
      { value: 'rendering', useCases: ['3d-rendering', 'creative'], minBudget: 1999 },
    ],
  },
  {
    id: 'performance',
    options: [
      { value: 'light' },
      { value: 'medium' },
      { value: 'heavy', minBudget: 1599 },
      { value: 'extreme', minBudget: 2500 },
    ],
  },
  {
    id: 'portability',
    options: [
      { value: 'yes', categoryPreference: 'laptop', portability: true },
      { value: 'no', categoryPreference: 'desktop', portability: false },
      { value: 'flexible' },
    ],
  },
  {
    id: 'battery',
    options: [
      { value: 'critical' },
      { value: 'important' },
      { value: 'notImportant' },
      { value: 'na', categoryPreference: 'desktop' },
    ],
  },
  {
    id: 'displays',
    options: [
      { value: 'none' },
      { value: 'one' },
      { value: 'multiple', minBudget: 1299 },
      { value: 'pro', minBudget: 1999 },
    ],
  },
  {
    id: 'memory',
    options: [
      { value: 'light' },
      { value: 'moderate' },
      { value: 'heavy', minBudget: 1599 },
      { value: 'extreme', minBudget: 2500 },
    ],
  },
  {
    id: 'budget',
    options: [
      { value: 'low', minBudget: 0 },
      { value: 'mediumLow', minBudget: 1000 },
      { value: 'medium', minBudget: 1500 },
      { value: 'high', minBudget: 2500 },
      { value: 'veryHigh', minBudget: 4000 },
    ],
  },
  {
    id: 'refurbished',
    options: [
      { value: 'yes' },
      { value: 'maybe' },
      { value: 'no' },
      { value: 'info' },
    ],
  },
  {
    id: 'screen',
    options: [
      { value: 'compact' },
      { value: 'medium' },
      { value: 'large' },
      { value: 'none', categoryPreference: 'desktop' },
    ],
  },
  {
    id: 'futureproof',
    options: [
      { value: 'short' },
      { value: 'medium' },
      { value: 'long', minBudget: 1299 },
      { value: 'veryLong', minBudget: 1999 },
    ],
  },
];

export default function Quiz() {
  const { t } = useLanguage();
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
      calculateRecommendations(newAnswers);
      setShowResults(true);
    }
  };

  const calculateRecommendations = (userAnswers: Record<string, any>) => {
    let scored = macProducts.map(mac => {
      let score = 0;

      const usageAnswer = userAnswers.usage;
      if (usageAnswer?.useCases) {
        const matchingUseCases = mac.bestFor.filter(use =>
          usageAnswer.useCases.includes(use)
        );
        score += matchingUseCases.length * 10;
      }

      const performanceAnswer = userAnswers.performance;
      if (performanceAnswer) {
        if (performanceAnswer.value === 'light' && (mac.chip === 'M2' || mac.chip === 'M3')) score += 10;
        if (performanceAnswer.value === 'medium' && (mac.chip === 'M3' || mac.chip === 'M4')) score += 10;
        if (performanceAnswer.value === 'heavy' && (mac.chip.includes('Pro') || mac.chip.includes('Max'))) score += 15;
        if (performanceAnswer.value === 'extreme' && (mac.chip.includes('Max') || mac.chip.includes('Ultra'))) score += 20;
      }

      const portabilityAnswer = userAnswers.portability;
      if (portabilityAnswer?.categoryPreference) {
        if (mac.category === portabilityAnswer.categoryPreference) {
          score += 15;
        }
      }

      const batteryAnswer = userAnswers.battery;
      if (batteryAnswer && mac.batteryLife) {
        if (batteryAnswer.value === 'critical' && mac.batteryLife >= 18) score += 10;
        if (batteryAnswer.value === 'important' && mac.batteryLife >= 15) score += 5;
        if (batteryAnswer.categoryPreference === 'desktop' && mac.category === 'desktop') score += 10;
      }

      const displaysAnswer = userAnswers.displays;
      if (displaysAnswer) {
        if (displaysAnswer.value === 'multiple' && (mac.chip.includes('Pro') || mac.chip.includes('Max') || mac.chip === 'M3' || mac.chip === 'M4')) {
          score += 10;
        }
        if (displaysAnswer.value === 'pro' && (mac.chip.includes('Max') || mac.chip.includes('Ultra') || mac.chip.includes('Pro'))) {
          score += 15;
        }
      }

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

      const budgetAnswer = userAnswers.budget;
      if (budgetAnswer) {
        const budgetMax = budgetAnswer.value === 'low' ? 1000 :
                         budgetAnswer.value === 'mediumLow' ? 1500 :
                         budgetAnswer.value === 'medium' ? 2500 :
                         budgetAnswer.value === 'high' ? 4000 : 100000;

        if (mac.price.base <= budgetMax) {
          score += 20;
          if (mac.price.base <= budgetMax * 0.8) {
            score += 5;
          }
        } else {
          score -= 20;
        }
      }

      const refurbishedAnswer = userAnswers.refurbished;
      if (refurbishedAnswer) {
        if (refurbishedAnswer.value === 'yes' && mac.refurbishedAvailable) score += 8;
        if (refurbishedAnswer.value === 'no' && !mac.refurbishedAvailable) score += 3;
      }

      if (screenAnswer && mac.display) {
        if (screenAnswer.value === 'compact' && mac.display.size <= 13.6) score += 10;
        if (screenAnswer.value === 'medium' && mac.display.size >= 14 && mac.display.size <= 15.5) score += 10;
        if (screenAnswer.value === 'large' && mac.display.size >= 16) score += 10;
      }

      const futureproofAnswer = userAnswers.futureproof;
      if (futureproofAnswer) {
        if (futureproofAnswer.value === 'long' && (mac.chip === 'M4' || mac.chip.includes('M4') || mac.chip === 'M3')) score += 10;
        if (futureproofAnswer.value === 'veryLong' && mac.chip.includes('M4')) score += 15;
      }

      if (usageAnswer?.minBudget && mac.price.base >= usageAnswer.minBudget) {
        score += 5;
      }

      if (mac.chip.includes('M4')) score += 5;
      else if (mac.chip.includes('M3')) score += 3;

      return { mac, score };
    });

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
            {t.quiz.results.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.quiz.results.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recommendations.map((mac, index) => (
            <div key={mac.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative">
              {index === 0 && (
                <div className="flex justify-center mb-4 -mt-2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {t.quiz.results.bestMatch}
                  </span>
                </div>
              )}

              <div className="relative h-40 mb-6 flex items-center justify-center">
                <img
                  src={mac.image}
                  alt={mac.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {mac.name}
              </h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                ${mac.price.base.toLocaleString()}
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.quiz.results.chip}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{mac.chip}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.quiz.results.memory}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {mac.memory[0]}GB - {mac.memory[mac.memory.length - 1]}GB
                  </p>
                </div>
                {mac.display && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.quiz.results.display}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {mac.display.size}" {mac.display.type}
                    </p>
                  </div>
                )}
                {mac.batteryLife && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.quiz.results.battery}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t.quiz.results.upTo} {mac.batteryLife} {t.quiz.results.hours}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t.quiz.results.keyFeatures}</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {mac.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {mac.refurbishedAvailable && mac.refurbishedPrice && (
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <strong>{t.quiz.results.refurbished}</strong> ${mac.refurbishedPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                    {t.quiz.results.save} ${(mac.price.base - mac.refurbishedPrice).toLocaleString()}!
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
                  {t.quiz.results.buyOnApple}
                </a>
                {mac.affiliateLinks.amazon && (
                  <a
                    href={mac.affiliateLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    {t.quiz.results.checkAmazon}
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
            {t.quiz.results.startOver}
          </button>
          <div>
            <Link
              href="/compare"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t.quiz.results.compareSideBySide}
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>{t.quiz.results.disclosure}</strong> {t.quiz.results.disclosureText}
          </p>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const getQuestionText = () => {
    const q = t.quiz.questions[question.id as keyof typeof t.quiz.questions];
    return q.question;
  };

  const getOptionLabel = (optionValue: string) => {
    const q = t.quiz.questions[question.id as keyof typeof t.quiz.questions] as any;
    return q[optionValue] || optionValue;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{t.quiz.progress.replace('{current}', (currentQuestion + 1).toString()).replace('{total}', quizQuestions.length.toString())}</span>
          <span>{t.quiz.complete.replace('{percent}', Math.round(progress).toString())}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {getQuestionText()}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <span className="text-lg text-gray-900 dark:text-white font-medium">
                {getOptionLabel(option.value)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {currentQuestion > 0 && (
        <div className="text-center">
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← {t.quiz.goBack}
          </button>
        </div>
      )}
    </div>
  );
}
