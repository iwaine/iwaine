'use client';

import { useState } from 'react';
import { macProducts, type MacProduct } from '@/data/macs';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function ComparePage() {
  const { t } = useLanguage();
  const [selectedMacs, setSelectedMacs] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'laptop' | 'desktop'>('all');

  const toggleMac = (macId: string) => {
    if (selectedMacs.includes(macId)) {
      setSelectedMacs(selectedMacs.filter(id => id !== macId));
    } else if (selectedMacs.length < 3) {
      setSelectedMacs([...selectedMacs, macId]);
    }
  };

  const filteredMacs = filterCategory === 'all'
    ? macProducts
    : macProducts.filter(mac => mac.category === filterCategory);

  const selectedProducts = selectedMacs.map(id =>
    macProducts.find(mac => mac.id === id)
  ).filter(Boolean) as MacProduct[];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.compare.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.compare.subtitle}
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
            }`}
          >
            {t.compare.filters.all}
          </button>
          <button
            onClick={() => setFilterCategory('laptop')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'laptop'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
            }`}
          >
            {t.compare.filters.laptops}
          </button>
          <button
            onClick={() => setFilterCategory('desktop')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'desktop'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
            }`}
          >
            {t.compare.filters.desktops}
          </button>
        </div>

        {/* Selected Macs Count */}
        {selectedMacs.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 text-center">
            <p className="text-blue-900 dark:text-blue-200">
              {t.compare.selected.replace('{count}', selectedMacs.length.toString())}
              {selectedMacs.length > 0 && (
                <button
                  onClick={() => setSelectedMacs([])}
                  className="ml-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t.compare.clearAll}
                </button>
              )}
            </p>
          </div>
        )}

        {/* Mac Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredMacs.map(mac => (
            <button
              key={mac.id}
              onClick={() => toggleMac(mac.id)}
              disabled={!selectedMacs.includes(mac.id) && selectedMacs.length >= 3}
              className={`p-4 rounded-lg border-2 text-left transition ${
                selectedMacs.includes(mac.id)
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400'
              } ${
                !selectedMacs.includes(mac.id) && selectedMacs.length >= 3
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{mac.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{mac.chip}</p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                ${mac.price.base.toLocaleString()}
              </p>
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedProducts.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      {t.compare.table.specification}
                    </th>
                    {selectedProducts.map(mac => (
                      <th key={mac.id} className="px-6 py-4 text-left">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {mac.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {mac.releaseYear}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {/* Price */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.startingPrice}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          ${mac.price.base.toLocaleString()}
                        </span>
                        {mac.refurbishedAvailable && mac.refurbishedPrice && (
                          <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                            {t.compare.table.refurb} ${mac.refurbishedPrice.toLocaleString()}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Chip */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.chip}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {mac.chip}
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {t.compare.table.cpuGpu.replace('{cpu}', mac.chipCores.cpu.toString()).replace('{gpu}', mac.chipCores.gpu.toString())}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Memory */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.memoryOptions}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {mac.memory.join('GB, ')}GB
                      </td>
                    ))}
                  </tr>

                  {/* Storage */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.storageOptions}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {mac.storage.map(s => s >= 1024 ? `${s/1024}TB` : `${s}GB`).join(', ')}
                      </td>
                    ))}
                  </tr>

                  {/* Display */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.display}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {mac.display ? (
                          <>
                            {mac.display.size}" {mac.display.type}
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {mac.display.resolution}
                            </div>
                          </>
                        ) : (
                          t.compare.table.noDisplay
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Battery (for laptops) */}
                  {selectedProducts.some(mac => mac.batteryLife) && (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {t.compare.table.batteryLife}
                      </td>
                      {selectedProducts.map(mac => (
                        <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                          {mac.batteryLife ? t.compare.table.upToHours.replace('{hours}', mac.batteryLife.toString()) : 'N/A'}
                        </td>
                      ))}
                    </tr>
                  )}

                  {/* Weight (for laptops) */}
                  {selectedProducts.some(mac => mac.weight) && (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {t.compare.table.weight}
                      </td>
                      {selectedProducts.map(mac => (
                        <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                          {mac.weight ? `${mac.weight} kg` : 'N/A'}
                        </td>
                      ))}
                    </tr>
                  )}

                  {/* Ports */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.ports}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="space-y-1">
                          <li>• {mac.ports.thunderbolt} {t.compare.table.thunderbolt}</li>
                          {mac.ports.usb > 0 && <li>• {mac.ports.usb} {t.compare.table.usbA}</li>}
                          {mac.ports.hdmi && <li>• {t.compare.table.hdmi}</li>}
                          {mac.ports.sdCard && <li>• {t.compare.table.sdCard}</li>}
                          {mac.ports.ethernet && <li>• {t.compare.table.ethernet}</li>}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Best For */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.bestFor}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {mac.bestFor.map(use => use.replace('-', ' ')).join(', ')}
                      </td>
                    ))}
                  </tr>

                  {/* Buy Links */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {t.compare.table.buyNow}
                    </td>
                    {selectedProducts.map(mac => (
                      <td key={mac.id} className="px-6 py-4">
                        <div className="space-y-2">
                          <a
                            href={mac.affiliateLinks.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-blue-600 text-white px-3 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition"
                          >
                            {t.compare.table.apple}
                          </a>
                          {mac.affiliateLinks.amazon && (
                            <a
                              href={mac.affiliateLinks.amazon}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            >
                              {t.compare.table.amazon}
                            </a>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {t.compare.emptyState}
          </div>
        )}
      </div>
    </div>
  );
}
