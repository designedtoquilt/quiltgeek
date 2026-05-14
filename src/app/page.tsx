'use client';
export const runtime = 'edge';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PlaceholderImage = ({ width = 600, height = 400, label = 'Image' }: { width?: number; height?: number; label?: string }) => (
  <div className={`flex items-center justify-center bg-gradient-to-br from-brand-light to-gray-200 rounded-lg w-full shadow-sm border border-gray-200`} style={{ aspectRatio: `${width}/${height}` }}>
    <div className="text-center text-brand-gray">
      <p className="text-lg font-semibold mb-2">{label}</p>
      <p className="text-xs text-gray-500">({width}x{height})</p>
    </div>
  </div>
);

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-200 ${
          isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'
        }`}
      >
        <span className="font-semibold text-brand-dark text-lg">{title}</span>
        <span className={`text-2xl text-brand-red font-bold transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
          <p className="leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <main className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="text-3xl font-bold text-brand-dark font-heading">
            Quilt Geek
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#reviews" className="nav-link">Reviews</Link>
            <Link href="#personas" className="nav-link">For You</Link>
            <button className="btn-primary">
              Download Now
            </button>
          </nav>
          <button className="md:hidden text-brand-red text-2xl">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-light py-24 sm:py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-brand-dark mb-6 font-heading leading-tight">
            No more quilt math stress!
          </h1>
          <p className="text-xl sm:text-2xl text-brand-gray mb-4 font-medium">No charts, no guessing, no stress.</p>
          <p className="text-lg sm:text-xl text-brand-gray mb-12">Quilt Geek does the math for you.</p>

          <div className="mb-16">
            <p className="text-xl font-semibold text-brand-dark mb-3">Your first project is on us!</p>
            <p className="text-brand-red text-3xl font-bold">Try 7 days free.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="https://apps.apple.com/app/apple-store/id6499062474?pt=127665666&ct=DTQblog&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <PlaceholderImage width={160} height={48} label="App Store" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.designedtoquilt.quilt_geek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <PlaceholderImage width={160} height={48} label="Google Play" />
            </Link>
          </div>
        </div>
      </section>

      {/* Three Feature Highlights */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="feature-card">
              <div className="icon-circle mx-auto mb-6" style={{ backgroundColor: '#348b5a' }}>
                ✓
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Be Confident</h3>
              <p className="text-gray-700 leading-relaxed">Get accurate calculations for all your quilting projects with confidence.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle mx-auto mb-6" style={{ backgroundColor: '#ffa7c5' }}>
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Simplify</h3>
              <p className="text-gray-700 leading-relaxed">Eliminate complex calculations and focus on what you love&mdash;quilting.</p>
            </div>

            <div className="feature-card">
              <div className="icon-circle mx-auto mb-6" style={{ backgroundColor: '#e5563b' }}>
                📋
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Plan Ahead</h3>
              <p className="text-gray-700 leading-relaxed">Save your calculations and plan multiple projects with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections with Screenshots */}
      <section id="features" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Design Quilt Tops */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">Design Quilt Tops</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">Calculate all the fabric you need for borders, sashing, and piecing. From simple to complex designs, we&apos;ve got the math covered.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Borders Calculator</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Sashing Calculator</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Block Calculators</span>
                </li>
              </ul>
            </div>
            <PlaceholderImage width={600} height={500} label="Design Quilt Tops Screenshot" />
          </div>

          {/* Plan Your Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <PlaceholderImage width={600} height={500} label="Plan Your Blocks Screenshot" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">Plan Your Blocks</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">Figure out how many blocks you need, precut requirements, and setting triangles for on-point quilts.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Blocks to Quilt Size</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Precuts Calculator</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Setting Triangles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Finish Your Quilts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">Finish Your Quilts</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">Calculate all the backing, batting, and binding you need to complete your projects perfectly.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Binding Calculator</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Backing & Batting</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Diagonal Pieced Backing</span>
                </li>
              </ul>
            </div>
            <PlaceholderImage width={600} height={500} label="Finish Your Quilts Screenshot" />
          </div>

          {/* Save Calculations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <PlaceholderImage width={600} height={500} label="Save Calculations Screenshot" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">Save Calculations</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">Keep all your project notes in one place. Access your favorite calculations anytime, anywhere.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Cloud Sync</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Project Library</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-brand-red font-bold text-xl">→</span>
                  <span className="text-gray-700 text-lg">Notes & Favorites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section 1 */}
      <section className="bg-brand-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-10 font-heading">Ready to ditch the math?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://apps.apple.com/app/apple-store/id6499062474?pt=127665666&ct=DTQblog&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="App Store" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.designedtoquilt.quilt_geek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="Google Play" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Star Reviews Section */}
      <section id="reviews" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16 font-heading">Loved by Quilters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="review-card hover:shadow-lg hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  &quot;This app has completely changed how I plan my quilting projects. No more headaches calculating yardage!&quot;
                </p>
                <p className="font-bold text-brand-dark">Quilter {i}</p>
                <p className="text-sm text-gray-500">Verified User</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Quilt Geek for Me - Personas */}
      <section id="personas" className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16 font-heading">
            Is Quilt Geek for me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="feature-card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Beginner</h3>
              <p className="text-gray-700 leading-relaxed">
                Just starting your quilting journey? Quilt Geek removes the math anxiety and lets you focus on the fun of creating.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Advanced Quilter</h3>
              <p className="text-gray-700 leading-relaxed">
                Speed up your planning process. Spend less time calculating and more time creating beautiful quilts.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Pattern Designer</h3>
              <p className="text-gray-700 leading-relaxed">
                Test pattern calculations quickly and accurately. Perfect for creating patterns that work every time.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Fabric Shop Owner</h3>
              <p className="text-gray-700 leading-relaxed">
                Recommend Quilt Geek to customers for accurate fabric requirements and seamless quilt planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section 2 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">Start Today</h2>
          <p className="text-xl text-gray-700 mb-12">Download from your app store and get started</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://apps.apple.com/app/apple-store/id6499062474?pt=127665666&ct=DTQblog&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="App Store" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.designedtoquilt.quilt_geek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="Google Play" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Showcase Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16 font-heading">
            All the Calculators You Need
          </h2>
          
          <div className="bg-white rounded-xl overflow-hidden border border-gray-300 shadow-lg">
            <div className="flex flex-col sm:flex-row border-b border-gray-200">
              {['design', 'backing', 'yardage'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-5 text-center font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'design' && 'Design Quilts'}
                  {tab === 'backing' && 'Backing & Binding'}
                  {tab === 'yardage' && 'Yardage Tools'}
                </button>
              ))}
            </div>

            <div className="p-10">
              {activeTab === 'design' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-brand-dark font-heading mb-8">Quilt Design Calculators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Borders Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate up to 5 borders for mitered and non-mitered layouts</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Sashing Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate sashing with cornerstones and sashing borders</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Blocks to Quilt Size</h4>
                      <p className="text-sm text-gray-600">Determine how many blocks you need for desired quilt size</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">T-Shirt Quilt Calculator</h4>
                      <p className="text-sm text-gray-600">Plan and calculate T-shirt quilt projects</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'backing' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-brand-dark font-heading mb-8">Backing & Binding Calculators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Binding Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate binding strip length and yardage requirements</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Backing & Batting Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate vertical and horizontal piecing options</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Fabric-Saving Backing</h4>
                      <p className="text-sm text-gray-600">Minimize fabric waste with optimal piecing layouts</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Diagonal Pieced Backing</h4>
                      <p className="text-sm text-gray-600">Calculate diagonal backing piecing method</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'yardage' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-brand-dark font-heading mb-8">Yardage & Cutting Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Precuts Calculator</h4>
                      <p className="text-sm text-gray-600">Gauge precut requirements for desired quilt size</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Bias Binding Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate starting square for bias binding</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Pieces from Fabric</h4>
                      <p className="text-sm text-gray-600">Calculate max pieces you can cut from fabric</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold text-brand-dark">Unit Conversion</h4>
                      <p className="text-sm text-gray-600">Convert between inches, yards, and meters</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16 font-heading">
            We&apos;re Barbara and Ula
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <PlaceholderImage width={400} height={500} label="Barbara & Ula" />
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                After years of quilting and constantly struggling with complicated math calculations, we decided there had to be a better way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We created Quilt Geek to take the stress out of quilting by handling all the calculations, so you can focus on what you love&mdash;designing and creating beautiful quilts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re a beginner or an experienced quilter, Quilt Geek is here to support your creative journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16 font-heading">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-xl border border-gray-300 overflow-hidden shadow-md">
            <AccordionItem
              title="How does the free trial work?"
              content="Try all premium features for 7 days free with no obligation. You can cancel anytime before the trial ends with no charges. If you love it, continue with a subscription."
            />
            <AccordionItem
              title="How do I know if Quilt Geek is right for me?"
              content="Quilt Geek is perfect for quilters at all levels&mdash;from beginners just starting their first project to experienced quilters, pattern designers, and fabric shop owners. If you work with measurements and yardage calculations, Quilt Geek will save you time and stress."
            />
            <AccordionItem
              title="Can I cancel at any time?"
              content="Yes! You can cancel your subscription anytime before your renewal date through your app store account settings. No questions asked, no penalties."
            />
            <AccordionItem
              title="Is the app available for both iOS and Android?"
              content="Yes! Quilt Geek is available on both the Apple App Store and Google Play Store. Download it on whichever device you prefer."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-brand-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">
            Stop stressing about quilt math
          </h2>
          <p className="text-xl text-brand-gray mb-14 leading-relaxed">
            Join thousands of quilters who&apos;ve ditched the calculator and embraced Quilt Geek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://apps.apple.com/app/apple-store/id6499062474?pt=127665666&ct=DTQblog&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="App Store" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.designedtoquilt.quilt_geek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PlaceholderImage width={150} height={45} label="Google Play" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Quilt Geek</h3>
              <p className="text-gray-200 leading-relaxed">Making quilting math stress-free since 2024.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <Link
                  href="https://instagram.com/designedtoquilt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors font-medium"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/designedtoquilt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors font-medium"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.pinterest.com/designedtoquilt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors font-medium"
                >
                  Pinterest
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <Link
                href="mailto:hello@designedtoquilt.com"
                className="text-gray-200 hover:text-white transition-colors font-medium"
              >
                hello@designedtoquilt.com
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-10 text-center text-gray-300">
            <p>&copy; 2025 Designed to Quilt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
