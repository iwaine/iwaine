'use client';

import { useState } from 'react';
import { macProducts, getMacsByBudget } from '@/data/macs';
import Link from 'next/link';

export default function BudgetPage() {
  const [budget, setBudget] = useState(2000);
  const [includeRefurbished, setIncludeRefurbished] = useState(true);
  const [financingMonths, setFinancingMonths] = useState(12);
  const [showFinancing, setShowFinancing] = useState(false);

  const affordableMacs = getMacsByBudget(budget);

  const macsWithRefurb = includeRefurbished
    ? macProducts.filter(mac =>
        mac.price.base <= budget ||
        (mac.refurbishedAvailable && mac.refurbishedPrice && mac.refurbishedPrice <= budget)
      )
    : affordableMacs;

  const calculateMonthlyPayment = (price: number) => {
    // Simple calculation without interest for demonstration
    return (price / financingMonths).toFixed(2);
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Budget Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find the best Mac within your budget, including refurbished options
          </p>
        </div>

        {/* Budget Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Budget Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Budget: <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${budget.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="500"
                max="8000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>$500</span>
                <span>$8,000</span>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeRefurbished}
                  onChange={(e) => setIncludeRefurbished(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Include refurbished models
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showFinancing}
                  onChange={(e) => setShowFinancing(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Show financing options
                </span>
              </label>
            </div>

            {/* Financing Options */}
            {showFinancing && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Financing Period: {financingMonths} months
                </label>
                <select
                  value={financingMonths}
                  onChange={(e) => setFinancingMonths(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                >
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
          <p className="text-center text-lg text-gray-900 dark:text-white">
            Found <strong>{macsWithRefurb.length} Mac models</strong> within your ${budget.toLocaleString()} budget
            {includeRefurbished && ' (including refurbished)'}
          </p>
        </div>

        {/* Mac Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {macsWithRefurb.map(mac => {
            const isNewAffordable = mac.price.base <= budget;
            const isRefurbAffordable = mac.refurbishedAvailable && mac.refurbishedPrice && mac.refurbishedPrice <= budget;
            const displayPrice = isNewAffordable ? mac.price.base : mac.refurbishedPrice || mac.price.base;
            const isRefurb = !isNewAffordable && isRefurbAffordable;

            return (
              <div key={mac.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                {isRefurb && (
                  <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Refurbished Only
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {mac.name}
                </h3>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    ${displayPrice.toLocaleString()}
                  </div>
                  {showFinancing && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      ${calculateMonthlyPayment(displayPrice)}/month for {financingMonths} months
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Chip:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{mac.chip}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mac.memory[0]}GB - {mac.memory[mac.memory.length - 1]}GB
                    </span>
                  </div>
                  {mac.display && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Display:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {mac.display.size}"
                      </span>
                    </div>
                  )}
                </div>

                {isNewAffordable && mac.refurbishedAvailable && mac.refurbishedPrice && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                    <p className="text-sm text-green-800 dark:text-green-300 font-semibold">
                      Save ${(mac.price.base - mac.refurbishedPrice).toLocaleString()} with refurbished!
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                      Refurb: ${mac.refurbishedPrice.toLocaleString()}
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  {isNewAffordable && (
                    <a
                      href={mac.affiliateLinks.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Buy New - ${mac.price.base.toLocaleString()}
                    </a>
                  )}
                  {mac.refurbishedAvailable && mac.refurbishedPrice && mac.refurbishedPrice <= budget && (
                    <a
                      href={mac.affiliateLinks.apple + '/refurbished'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Buy Refurbished - ${mac.refurbishedPrice.toLocaleString()}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {macsWithRefurb.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No Macs found within your budget. Try increasing your budget.
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              The most affordable Mac starts at $599 (Mac mini M4)
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            About Refurbished Macs
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>What is a refurbished Mac?</strong> Apple Certified Refurbished products are pre-owned Apple products that have been thoroughly tested and certified by Apple.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full Apple warranty (1 year)</li>
              <li>Like-new condition with new outer shell</li>
              <li>Thoroughly tested and certified</li>
              <li>Eligible for AppleCare+</li>
              <li>Save 15-30% off retail price</li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>Disclosure:</strong> We earn commissions from qualifying purchases through affiliate links.
            Prices shown are approximate and may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
