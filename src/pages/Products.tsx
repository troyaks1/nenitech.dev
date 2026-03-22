import { useI18n } from '../i18n';

export function Products() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.products.title}</h1>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-300 bg-dark-700 px-3 py-1 rounded-full">
                {t.products.agents4chat.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
                {t.products.agents4chat.name}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t.products.agents4chat.desc}
              </p>
              <a
                href="https://agents4chat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-800 to-primary-300 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.products.agents4chat.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {t.products.agents4chat.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-dark-700" />
      </div>

      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="lg:order-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-300 bg-dark-700 px-3 py-1 rounded-full">
                {t.products.mynute.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
                {t.products.mynute.name}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t.products.mynute.desc}
              </p>
              <a
                href="https://mynute.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-300 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.products.mynute.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mt-10 lg:mt-0 lg:order-1">
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {t.products.mynute.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
