import { useState, type FormEvent } from 'react';
import { useI18n } from '../i18n';

export function Support() {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const mailtoSubject = encodeURIComponent(
      `[${form.subject}] Contact from ${form.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:contact@nenitech.dev?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus('success');
    setForm({ name: '', email: '', subject: 'general', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.support.title}</h1>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">{t.support.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">{t.support.contact.title}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t.support.contact.address}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      NENI TECH LLC<br />
                      5900 Balcones Drive, STE 100<br />
                      Austin, Texas 78731<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t.support.contact.phone}</h3>
                    <a href="tel:+19564746576" className="text-sm text-primary-300 hover:underline mt-1 block">
                      +1 (956) 474-6576
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t.support.contact.email}</h3>
                    <a href="mailto:contact@nenitech.dev" className="text-sm text-primary-300 hover:underline mt-1 block">
                      contact@nenitech.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t.support.contact.hours}</h3>
                    <p className="text-sm text-gray-400 mt-1">{t.support.contact.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-800 rounded-2xl shadow-sm border border-dark-600 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t.support.form.title}</h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-sm">
                    {t.support.form.success}
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                    {t.support.form.error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-dark-600 rounded-lg bg-dark-900 text-white focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none transition-colors placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-dark-600 rounded-lg bg-dark-900 text-white focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none transition-colors placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      {t.support.form.subject}
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none transition-colors bg-dark-900 text-white"
                    >
                      <option value="general">{t.support.form.subjects.general}</option>
                      <option value="technical">{t.support.form.subjects.technical}</option>
                      <option value="billing">{t.support.form.subjects.billing}</option>
                      <option value="partnership">{t.support.form.subjects.partnership}</option>
                      <option value="other">{t.support.form.subjects.other}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {t.support.form.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-dark-600 rounded-lg bg-dark-900 text-white focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none transition-colors resize-y placeholder:text-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary-800 to-primary-300 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {status === 'sending' ? '...' : t.support.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
