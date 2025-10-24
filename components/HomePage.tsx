'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { macProducts } from '@/data/macs';

export default function HomePage() {
  const { t } = useLanguage();

  // Get representative products for each Mac model
  const featuredMacs = [
    macProducts.find(m => m.id === 'mba-m3-13')!, // MacBook Air
    macProducts.find(m => m.id === 'mbp-m4-14')!, // MacBook Pro
    macProducts.find(m => m.id === 'imac-m4-24')!, // iMac
    macProducts.find(m => m.id === 'mini-m4')!, // Mac mini
    macProducts.find(m => m.id === 'studio-m2max')!, // Mac Studio
    macProducts.find(m => m.id === 'pro-m2ultra')!, // Mac Pro
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.nav.title}</h1>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/quiz" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t.nav.findYourMac}
              </Link>
              <Link href="/compare" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t.nav.compare}
              </Link>
              <Link href="/budget" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t.nav.budget}
              </Link>
              <Link href="/learn" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t.nav.learn}
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              {t.home.hero.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                {t.home.hero.startQuiz}
              </Link>
              <Link
                href="/compare"
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >
                {t.home.hero.compareModels}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.home.features.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.home.features.personalized.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {t.home.features.personalized.description}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.home.features.budget.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {t.home.features.budget.description}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.home.features.expert.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {t.home.features.expert.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Lineup */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.home.lineup.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMacs.map((mac) => (
              <div key={mac.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition overflow-hidden">
                {/* Product Image */}
                <div className="relative h-48 mb-6">
                  <Image
                    src={mac.image}
                    alt={mac.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{mac.model}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.lineup.from} ${mac.price.base.toLocaleString()}</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  {mac.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <Link
                  href="/quiz"
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {t.home.lineup.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.home.cta.title}
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            {t.home.cta.subtitle}
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-white font-semibold mb-4">{t.nav.title}</h5>
              <p className="text-sm">
                {t.home.footer.description}
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">{t.home.footer.quickLinks}</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/quiz" className="hover:text-white">{t.nav.findYourMac}</Link></li>
                <li><Link href="/compare" className="hover:text-white">{t.nav.compare}</Link></li>
                <li><Link href="/budget" className="hover:text-white">{t.nav.budget}</Link></li>
                <li><Link href="/learn" className="hover:text-white">{t.nav.learn}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">{t.home.footer.disclosure}</h5>
              <p className="text-sm">
                {t.home.footer.disclosureText}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>{t.home.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
