import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-dark-950 text-gray-300 border-t border-dark-700" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="h-8 brightness-0 invert mb-4" />
            <p className="text-sm text-gray-400" itemProp="description">
              {t.footer.tagline}
            </p>
            <meta itemProp="name" content="NENI TECH LLC" />
            <meta itemProp="legalName" content="NENI TECH LLC" />
            <meta itemProp="url" content="https://nenitech.dev" />
            <link itemProp="logo" href="https://nenitech.dev/logo.svg" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-300 transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/about" className="hover:text-primary-300 transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/products" className="hover:text-primary-300 transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/support" className="hover:text-primary-300 transition-colors">{t.nav.support}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary-300 transition-colors">{t.nav.privacy}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-300 transition-colors">{t.nav.terms}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.contact}</h3>
            <address className="not-italic text-sm space-y-2">
              <p>
                <span itemProp="name" className="font-medium text-white">NENI TECH LLC</span>
              </p>
              <p>
                <span itemProp="streetAddress">5900 Balcones Drive, STE 100</span><br />
                <span itemProp="addressLocality">Austin</span>,{' '}
                <span itemProp="addressRegion">Texas</span>{' '}
                <span itemProp="postalCode">78731</span><br />
                <span itemProp="addressCountry">United States</span>
              </p>
              <p>
                <a href="tel:+19564746576" className="hover:text-primary-300 transition-colors" itemProp="telephone">
                  +1 (956) 474-6576
                </a>
              </p>
              <p>
                <a href="mailto:contact@nenitech.dev" className="hover:text-primary-300 transition-colors" itemProp="email">
                  contact@nenitech.dev
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-700 text-center text-xs text-gray-500">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
