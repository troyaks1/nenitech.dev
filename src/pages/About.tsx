import { useI18n } from '../i18n';

export function About() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.about.title}</h1>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">{t.about.mission.title}</h2>
          <p className="text-lg text-gray-400 leading-relaxed">{t.about.mission.desc}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.about.values.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(
              [
                t.about.values.innovation,
                t.about.values.quality,
                t.about.values.partnership,
                t.about.values.transparency,
              ] as { title: string; desc: string }[]
            ).map((v, i) => (
              <div key={i} className="bg-dark-800 rounded-xl p-6 shadow-sm border border-dark-600 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary-800 to-primary-300 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">{t.about.team.title}</h2>
          <ul className="space-y-4">
            {t.about.team.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Company info (bot-readable) */}
      <section className="py-16 bg-dark-900" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <meta itemProp="name" content="NENI TECH LLC" />
          <meta itemProp="url" content="https://nenitech.dev" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <p className="text-gray-400 text-sm">
              <span itemProp="name" className="font-semibold text-white">NENI TECH LLC</span><br />
              <span itemProp="streetAddress">5900 Balcones Drive, STE 100</span><br />
              <span itemProp="addressLocality">Austin</span>,{' '}
              <span itemProp="addressRegion">Texas</span>{' '}
              <span itemProp="postalCode">78731</span><br />
              <span itemProp="addressCountry">United States</span>
            </p>
          </div>
          <p className="mt-3 text-gray-400 text-sm">
            <a href="tel:+19564746576" itemProp="telephone" className="hover:text-primary-300">+1 (956) 474-6576</a>
            {' · '}
            <a href="mailto:contact@nenitech.dev" itemProp="email" className="hover:text-primary-300">contact@nenitech.dev</a>
          </p>
        </div>
      </section>
    </>
  );
}
