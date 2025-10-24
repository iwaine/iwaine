import Link from 'next/link';

export const metadata = {
  title: 'Learn About Mac Specs & Features | Mac Finder',
  description: 'Comprehensive guide to understanding Mac specifications, chips, displays, and features. Make an informed decision when buying your next Mac.',
};

export default function LearnPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding Mac Specifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know to make an informed decision
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Navigation</h2>
          <ul className="space-y-2">
            <li><a href="#chips" className="text-blue-600 dark:text-blue-400 hover:underline">Apple Silicon Chips (M-series)</a></li>
            <li><a href="#memory" className="text-blue-600 dark:text-blue-400 hover:underline">Unified Memory (RAM)</a></li>
            <li><a href="#storage" className="text-blue-600 dark:text-blue-400 hover:underline">Storage Options</a></li>
            <li><a href="#displays" className="text-blue-600 dark:text-blue-400 hover:underline">Display Technology</a></li>
            <li><a href="#ports" className="text-blue-600 dark:text-blue-400 hover:underline">Ports & Connectivity</a></li>
            <li><a href="#choosing" className="text-blue-600 dark:text-blue-400 hover:underline">Choosing the Right Mac</a></li>
          </ul>
        </div>

        {/* Apple Silicon Chips */}
        <section id="chips" className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Apple Silicon Chips (M-series)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M2 Chip</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2022 | <strong>Best for:</strong> Everyday users, students
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>8-core CPU, up to 10-core GPU</li>
                <li>Excellent for web browsing, productivity apps, photo editing</li>
                <li>Up to 24GB unified memory</li>
                <li>Great battery life with fanless design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M3 Chip</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2023 | <strong>Best for:</strong> General users, light creative work
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>8-core CPU, up to 10-core GPU</li>
                <li>3nm technology for better efficiency</li>
                <li>Hardware-accelerated ray tracing</li>
                <li>Support for two external displays (MacBook Air)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M3 Pro</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2023 | <strong>Best for:</strong> Professionals, developers, video editors
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Up to 12-core CPU, 18-core GPU</li>
                <li>Up to 36GB unified memory</li>
                <li>150GB/s memory bandwidth</li>
                <li>Perfect for 4K video editing and software development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M3 Max</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2023 | <strong>Best for:</strong> Heavy creative work, 3D rendering
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Up to 16-core CPU, 40-core GPU</li>
                <li>Up to 128GB unified memory</li>
                <li>400GB/s memory bandwidth</li>
                <li>Ideal for 8K video, 3D rendering, ML workloads</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M4 Chip Family</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2024 | <strong>Latest generation with enhanced AI capabilities</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>M4:</strong> 10-core CPU, 10-core GPU - Best all-around performance</li>
                <li><strong>M4 Pro:</strong> Up to 14-core CPU, 20-core GPU - Thunderbolt 5 support</li>
                <li><strong>M4 Max:</strong> Up to 16-core CPU, 40-core GPU - Ultimate workstation power</li>
                <li>Advanced neural engine for AI/ML tasks</li>
                <li>Improved efficiency and battery life</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">M2 Ultra</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Release:</strong> 2023 | <strong>Best for:</strong> Professional studios, maximum performance
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>24-core CPU, up to 76-core GPU</li>
                <li>Up to 192GB unified memory</li>
                <li>800GB/s memory bandwidth</li>
                <li>Best for large-scale 3D, video production, scientific computing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Unified Memory */}
        <section id="memory" className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Unified Memory (RAM)
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Unlike traditional computers, Macs use <strong>unified memory</strong> that's shared between the CPU, GPU, and Neural Engine. This makes memory usage more efficient.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">8GB - Basic Use</h4>
              <p className="text-gray-700 dark:text-gray-300">Web browsing, email, documents, light photo editing</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">16GB - Recommended</h4>
              <p className="text-gray-700 dark:text-gray-300">Multitasking, photo editing, 4K video, software development</p>
            </div>

            <div className="border-l-4 border-yellow-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">24-32GB - Professional</h4>
              <p className="text-gray-700 dark:text-gray-300">Heavy multitasking, 4K/8K video editing, 3D modeling</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">48GB+ - Maximum Performance</h4>
              <p className="text-gray-700 dark:text-gray-300">Large datasets, machine learning, professional video production</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Important:</strong> Memory is NOT upgradeable after purchase. Choose wisely based on your future needs.
            </p>
          </div>
        </section>

        {/* Storage */}
        <section id="storage" className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Storage Options
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All Macs use ultra-fast SSD storage. Unlike memory, you can use external drives, but internal storage is fastest.
          </p>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-semibold text-gray-900 dark:text-white">256GB</span>
              <span className="text-gray-700 dark:text-gray-300">Light users, cloud storage</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-semibold text-gray-900 dark:text-white">512GB</span>
              <span className="text-gray-700 dark:text-gray-300">Most users (recommended)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-semibold text-gray-900 dark:text-white">1TB</span>
              <span className="text-gray-700 dark:text-gray-300">Photo/video libraries</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span className="font-semibold text-gray-900 dark:text-white">2TB+</span>
              <span className="text-gray-700 dark:text-gray-300">Professional content creators</span>
            </div>
          </div>
        </section>

        {/* Display Technology */}
        <section id="displays" className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Display Technology
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Liquid Retina</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Standard on MacBook Air and iMac. Bright, colorful displays with True Tone technology.
                Perfect for everyday use and photo editing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Liquid Retina XDR</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Available on MacBook Pro models. Features:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>ProMotion (120Hz refresh rate) for smoother scrolling</li>
                <li>1000 nits sustained brightness, 1600 nits peak</li>
                <li>1,000,000:1 contrast ratio</li>
                <li>Essential for professional video and photo work</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.5K Retina (iMac)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                24-inch display with 4480 x 2520 resolution. Stunning for photo editing and design work.
                P3 wide color gamut and True Tone.
              </p>
            </div>
          </div>
        </section>

        {/* Ports & Connectivity */}
        <section id="ports" className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ports & Connectivity
          </h2>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Thunderbolt 4 / USB-C</h4>
              <p className="text-gray-700 dark:text-gray-300">
                All modern Macs use Thunderbolt 4 ports. These support:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Data transfer up to 40 Gbps</li>
                <li>External displays (up to 6K)</li>
                <li>Charging</li>
                <li>USB devices with adapters</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Thunderbolt 5 (M4 Pro/Max)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Latest Mac models with M4 Pro/Max chips feature Thunderbolt 5:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Up to 120 Gbps bandwidth</li>
                <li>Better for high-resolution displays and fast storage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">MagSafe 3 (MacBook Pro/Air)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Magnetic charging port that disconnects safely if tripped. Leaves Thunderbolt ports free for accessories.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">HDMI (MacBook Pro, Mac Studio, Mac mini)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Direct connection to TVs and monitors without adapters. Supports 4K displays.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SDXC Card Slot (MacBook Pro, Mac Studio)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Essential for photographers - direct import from camera SD cards.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing the Right Mac */}
        <section id="choosing" className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Choosing the Right Mac
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Students & Everyday Use</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Recommended:</strong> MacBook Air M3 (13") or Mac mini M4
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Perfect for web browsing, documents, streaming, and light photo editing. Great battery life and silent operation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Professionals & Developers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Recommended:</strong> MacBook Pro 14" M4 or M4 Pro
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                XDR display, excellent performance, multiple external displays support. Ideal for coding, data analysis, and productivity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Video Editors & Creators</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Recommended:</strong> MacBook Pro 16" M4 Pro/Max or Mac Studio M2 Max
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Handles 4K/8K video editing, color grading, and motion graphics. Large display and powerful GPU.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For 3D Artists & Maximum Performance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Recommended:</strong> Mac Studio M2 Ultra or Mac Pro
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Ultimate performance for 3D rendering, simulation, large datasets, and professional studio work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-blue-600 dark:bg-blue-700 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Mac?</h3>
          <p className="mb-6">Take our interactive quiz to get personalized recommendations</p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
