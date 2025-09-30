import type { Locale } from "@/config/i18n-config";

export const metadata = {
  title: "Pricing - Kolektt",
  description: "Simple pricing for Kolektt BPM collection management platform."
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = await params;
  // Unused variable warning suppressed
  void lang;
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Fair Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your music collection needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $0<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-8">Perfect for getting started</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Up to 100 tracks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                BPM detection
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Basic organization
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">
                $9<span className="text-lg font-normal opacity-75">/month</span>
              </div>
              <p className="opacity-75 mb-8">For serious collectors</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Unlimited tracks
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Advanced search
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Cloud sync
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Export features
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us if you need help choosing the right plan.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
