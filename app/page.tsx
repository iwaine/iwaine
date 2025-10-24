import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mac Finder</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/quiz" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Find Your Mac
              </Link>
              <Link href="/compare" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Compare
              </Link>
              <Link href="/budget" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Budget Calculator
              </Link>
              <Link href="/learn" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Learn
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Find Your Perfect Mac
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Answer a few questions and discover the ideal Mac for your needs, budget, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Quiz
              </Link>
              <Link
                href="/compare"
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >
                Compare Models
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Use Mac Finder?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Personalized Recommendations
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our smart algorithm analyzes your needs to recommend the perfect Mac for you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Budget Calculator
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Compare prices, find deals, and explore refurbished options to save money.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Guidance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about Mac specs, features, and make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Lineup */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            2024/2025 Mac Lineup
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MacBook Air */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MacBook Air</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $1,099</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M2 or M3 chip</li>
                <li>• 13" or 15" display</li>
                <li>• Fanless design</li>
                <li>• Up to 18 hours battery</li>
              </ul>
              <Link
                href="/quiz?preference=macbook-air"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* MacBook Pro */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MacBook Pro</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $1,599</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M3, M4, Pro, or Max chips</li>
                <li>• 14" or 16" XDR display</li>
                <li>• ProMotion 120Hz</li>
                <li>• Up to 24 hours battery</li>
              </ul>
              <Link
                href="/quiz?preference=macbook-pro"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* iMac */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">iMac</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $1,299</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M3 or M4 chip</li>
                <li>• 24" 4.5K Retina display</li>
                <li>• Seven vibrant colors</li>
                <li>• All-in-one design</li>
              </ul>
              <Link
                href="/quiz?preference=imac"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Mac mini */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mac mini</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $599</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M2, M4, or Pro chips</li>
                <li>• Ultra-compact design</li>
                <li>• Best value Mac</li>
                <li>• Bring your own display</li>
              </ul>
              <Link
                href="/quiz?preference=mac-mini"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Mac Studio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mac Studio</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $1,999</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M2 Max or Ultra chip</li>
                <li>• Professional powerhouse</li>
                <li>• Extensive connectivity</li>
                <li>• Compact desktop</li>
              </ul>
              <Link
                href="/quiz?preference=mac-studio"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Mac Pro */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mac Pro</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">From $6,999</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• M2 Ultra chip</li>
                <li>• PCIe expansion</li>
                <li>• Maximum performance</li>
                <li>• Rack mountable</li>
              </ul>
              <Link
                href="/quiz?preference=mac-pro"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Mac?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Take our quick quiz and get personalized recommendations in minutes.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start the Quiz Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-white font-semibold mb-4">Mac Finder</h5>
              <p className="text-sm">
                Helping you find the perfect Mac since 2024. Compare models, calculate budgets, and make informed decisions.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/quiz" className="hover:text-white">Find Your Mac</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare Models</Link></li>
                <li><Link href="/budget" className="hover:text-white">Budget Calculator</Link></li>
                <li><Link href="/learn" className="hover:text-white">Learn About Macs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Disclosure</h5>
              <p className="text-sm">
                We earn commissions from qualifying purchases through affiliate links. This helps us provide free content.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Mac Finder. Not affiliated with Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
