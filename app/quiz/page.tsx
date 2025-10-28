'use client';

import Quiz from '@/components/Quiz';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function QuizPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.nav.title}
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                ← {t.nav.backToHome}
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Quiz Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <Quiz />
      </div>
    </div>
  );
}
