import Quiz from '@/components/Quiz';
import Link from 'next/link';

export const metadata = {
  title: 'Find Your Perfect Mac - Interactive Quiz | Mac Finder',
  description: 'Answer a few simple questions and get personalized Mac recommendations based on your needs, budget, and preferences.',
};

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Mac Finder
            </Link>
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              ← Back to Home
            </Link>
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
