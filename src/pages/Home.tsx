import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-100 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                {t.hero.cta}
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t.hero.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[t.services.dev, t.services.ai, t.services.consulting, t.services.outsourcing].map(
              (service, i) => (
                <div
                  key={i}
                  className="bg-dark-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-dark-600 hover:border-primary-800"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-800 to-primary-300 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                      {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                      {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-20 sm:py-28 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.products.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agents4Chat */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-200">
                {t.products.agents4chat.tagline}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                {t.products.agents4chat.name}
              </h3>
              <p className="text-primary-100 leading-relaxed mb-6">
                {t.products.agents4chat.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-primary-800 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {t.hero.learnMore}
                </Link>
                <a
                  href="https://agents4chat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {t.products.agents4chat.cta} ↗
                </a>
              </div>
            </div>

            {/* Mynute */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-300 rounded-2xl p-8 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-50">
                {t.products.mynute.tagline}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                {t.products.mynute.name}
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                {t.products.mynute.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-primary-500 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {t.hero.learnMore}
                </Link>
                <a
                  href="https://mynute.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {t.products.mynute.cta} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dark-800 via-primary-900 to-dark-800 border-y border-dark-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t.hero.cta}
          </h2>
          <p className="text-primary-200 mb-8 text-lg">
            {t.hero.subtitle}
          </p>
          <Link
            to="/support"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
