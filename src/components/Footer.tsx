import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white text-base">ABA Quality Index</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Independent, data-driven ratings for ABA therapy providers across the United States.
            </p>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Rankings</h3>
            <ul className="space-y-2.5">
              <li><Link href="/methodology" className="text-sm text-gray-400 hover:text-white transition-colors">Our Methodology</Link></li>
              <li><Link href="/for-providers" className="text-sm text-gray-400 hover:text-white transition-colors">For Providers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/editorial-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link href="/complaints" className="text-sm text-gray-400 hover:text-white transition-colors">Complaints</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="/non-discrimination" className="text-sm text-gray-400 hover:text-white transition-colors">Non-Discrimination</Link></li>
              <li><Link href="/medical-disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 text-center">
          &copy; {currentYear} ABA Quality Index. All rights reserved. Rankings are based on publicly available data and our proprietary methodology. Paid partnerships are clearly disclosed and do not influence scoring.
        </div>
      </div>
    </footer>
  );
}
