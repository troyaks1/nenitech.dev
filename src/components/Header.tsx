import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useI18n } from '../i18n';

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/products', label: t.nav.products },
    { to: '/support', label: t.nav.support },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-dark-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-dark-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3" aria-label="NENI TECH LLC Home">
            <Logo className="h-9" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-primary-300 border-b-2 border-primary-300 pb-0.5'
                    : 'text-gray-400 hover:text-primary-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-600 text-gray-400 hover:bg-dark-700 transition-colors"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'PT 🇧🇷' : 'EN 🇺🇸'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:bg-dark-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-dark-700">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-3 text-sm font-medium rounded-md ${
                  isActive(link.to)
                    ? 'text-primary-300 bg-dark-700'
                    : 'text-gray-400 hover:bg-dark-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setLang(lang === 'en' ? 'pt' : 'en'); setMobileOpen(false); }}
              className="mt-2 ml-3 text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-600 text-gray-400"
            >
              {lang === 'en' ? 'PT 🇧🇷' : 'EN 🇺🇸'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
