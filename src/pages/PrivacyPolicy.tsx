import { useI18n } from '../i18n';

export function PrivacyPolicy() {
  const { t, lang } = useI18n();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{t.privacy.title}</h1>
          <p className="mt-2 text-primary-200">{t.privacy.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          {lang === 'pt' ? <PrivacyContentPT /> : <PrivacyContentEN />}
        </div>
      </section>
    </>
  );
}

function PrivacyContentEN() {
  return (
    <div className="space-y-8 text-gray-300 leading-relaxed">
      <div>
        <p>
          This Privacy Policy describes how <strong>NENI TECH LLC</strong> ("Company", "we", "us", or "our"),
          located at 5900 Balcones Drive, STE 100, Austin, Texas 78731, United States, collects, uses,
          shares, and protects your personal information when you visit our website{' '}
          <a href="https://nenitech.dev" className="text-primary-300 hover:underline">nenitech.dev</a>{' '}
          and use our services, including our products Agents for Chat (<a href="https://agents4chat.com" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">agents4chat.com</a>) and Mynute (<a href="https://mynute.app" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">mynute.app</a>).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.1 Information You Provide Directly</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Account Information:</strong> When you create an account on any of our platforms, we collect your name, email address, phone number, company name, and billing address.</li>
          <li><strong>Payment Information:</strong> When you make a purchase, payment information is collected and processed by our third-party payment processor, Stripe. We do not store your full credit card number on our servers.</li>
          <li><strong>Communications:</strong> When you contact us via our support form, email, or phone, we collect the information you provide, including your name, email, and message content.</li>
          <li><strong>User Content:</strong> Information you input into our platforms, including chatbot configurations, scheduling settings, business data, and conversation logs.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.2 Information Collected Automatically</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Log Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and timestamps.</li>
          <li><strong>Device Information:</strong> Device type, screen resolution, and unique device identifiers.</li>
          <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior and preferences.</li>
          <li><strong>Usage Data:</strong> Features used, actions taken within our platforms, and performance metrics.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.3 Information from Third Parties</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Payment Processors:</strong> Transaction confirmation and billing details from Stripe.</li>
          <li><strong>Social Media Platforms:</strong> If you interact with us through Facebook or other social media, we may receive profile information per your privacy settings on those platforms.</li>
          <li><strong>Analytics Providers:</strong> Aggregated and anonymized usage statistics.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Service Delivery:</strong> To provide, maintain, and improve our products and services, including Agents for Chat and Mynute.</li>
          <li><strong>Account Management:</strong> To create, manage, and authenticate your account.</li>
          <li><strong>Payment Processing:</strong> To process transactions and send billing-related communications.</li>
          <li><strong>Customer Support:</strong> To respond to your inquiries and resolve issues.</li>
          <li><strong>Communication:</strong> To send service updates, security alerts, and administrative messages.</li>
          <li><strong>Marketing:</strong> With your consent, to send promotional communications about our products and services. You can opt out at any time.</li>
          <li><strong>Analytics:</strong> To understand usage patterns and improve our platforms.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
          <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security issues.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We may share your information with the following parties:</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.1 Service Providers</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stripe:</strong> For payment processing. Stripe's privacy policy governs their handling of your payment data. Visit <a href="https://stripe.com/privacy" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.</li>
          <li><strong>Cloud Hosting Providers:</strong> To host our infrastructure and store data securely.</li>
          <li><strong>AI Service Providers:</strong> We integrate with AI providers (such as OpenAI, Google, and others) to power our chatbot features. Conversation data may be processed by these providers per their respective privacy policies.</li>
          <li><strong>Communication Providers:</strong> For sending emails, SMS, and WhatsApp notifications.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.2 Advertising and Social Media Partners</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Facebook/Meta:</strong> We may use Facebook's tools for advertising, analytics, and login features. Information shared with Facebook is governed by <a href="https://www.facebook.com/privacy/policy/" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Facebook's Data Policy</a>.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.3 Legal and Regulatory</h3>
        <p>We may disclose your information when required by law, in response to valid legal processes (such as subpoenas or court orders), to protect our rights and property, to enforce our terms, or in connection with an investigation of suspected illegal activity.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.4 Business Transfers</h3>
        <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change and any choices you may have.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">4. Method of Disclosure</h2>
        <p>When we share information with third parties, we do so through:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Secure API Integrations:</strong> Encrypted connections (TLS/SSL) to third-party services.</li>
          <li><strong>Contractual Safeguards:</strong> Data Processing Agreements (DPAs) with service providers that limit how they can use your information.</li>
          <li><strong>Anonymization:</strong> Where possible, we anonymize or aggregate data before sharing for analytics or reporting purposes.</li>
          <li><strong>Consent-Based Sharing:</strong> For marketing communications and non-essential data sharing, we obtain your explicit consent.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">5. Security Measures</h2>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher. Sensitive data at rest is encrypted using AES-256.</li>
          <li><strong>Access Controls:</strong> Strict role-based access controls limit who within our organization can access personal data.</li>
          <li><strong>Infrastructure Security:</strong> Our systems are hosted on secure, SOC 2-compliant cloud infrastructure with regular security audits.</li>
          <li><strong>Payment Security:</strong> All payment processing is handled by Stripe, which is PCI DSS Level 1 certified.</li>
          <li><strong>Monitoring:</strong> We employ continuous monitoring and logging to detect unauthorized access or anomalies.</li>
          <li><strong>Incident Response:</strong> We maintain an incident response plan and will notify affected users in the event of a data breach as required by applicable law.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
          <li><strong>Portability:</strong> Request your data in a portable, machine-readable format.</li>
          <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time by clicking "unsubscribe" in our emails or contacting us.</li>
          <li><strong>Restrict Processing:</strong> Request that we limit how we use your data in certain circumstances.</li>
        </ul>
        <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
        <p>We use cookies and similar tracking technologies for:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Essential Cookies:</strong> Required for the operation of our websites and services.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our websites.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences (such as language).</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
        </ul>
        <p className="mt-4">You can manage cookie preferences through your browser settings.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
        <p>Our services are not directed to children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in the United States, where our servers are located. By using our services, you consent to the transfer of your information to the United States and other jurisdictions where we or our service providers operate.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
        <div className="mt-4 bg-dark-800 rounded-lg p-6 border border-dark-600">
          <p className="font-semibold text-white">NENI TECH LLC</p>
          <p>5900 Balcones Drive, STE 100</p>
          <p>Austin, Texas 78731</p>
          <p>United States</p>
          <p className="mt-2">
            Phone: <a href="tel:+19564746576" className="text-primary-300 hover:underline">+1 (956) 474-6576</a>
          </p>
          <p>
            Email: <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PrivacyContentPT() {
  return (
    <div className="space-y-8 text-gray-300 leading-relaxed">
      <div>
        <p>
          Esta Política de Privacidade descreve como a <strong>NENI TECH LLC</strong> ("Empresa", "nós" ou "nosso"),
          localizada em 5900 Balcones Drive, STE 100, Austin, Texas 78731, Estados Unidos, coleta, utiliza,
          compartilha e protege suas informações pessoais quando você visita nosso website{' '}
          <a href="https://nenitech.dev" className="text-primary-300 hover:underline">nenitech.dev</a>{' '}
          e utiliza nossos serviços, incluindo nossos produtos Agents for Chat (<a href="https://agents4chat.com" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">agents4chat.com</a>) e Mynute (<a href="https://mynute.app" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">mynute.app</a>).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.1 Informações Fornecidas Diretamente</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Informações de Conta:</strong> Ao criar uma conta em qualquer uma de nossas plataformas, coletamos seu nome, endereço de e-mail, número de telefone, nome da empresa e endereço de cobrança.</li>
          <li><strong>Informações de Pagamento:</strong> Ao realizar uma compra, as informações de pagamento são coletadas e processadas pelo nosso processador de pagamentos terceirizado, Stripe. Não armazenamos o número completo do cartão de crédito em nossos servidores.</li>
          <li><strong>Comunicações:</strong> Ao entrar em contato conosco via formulário de suporte, e-mail ou telefone, coletamos as informações que você fornece, incluindo nome, e-mail e conteúdo da mensagem.</li>
          <li><strong>Conteúdo do Usuário:</strong> Informações inseridas em nossas plataformas, incluindo configurações de chatbot, configurações de agendamento, dados comerciais e registros de conversas.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.2 Informações Coletadas Automaticamente</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Dados de Log:</strong> Endereço IP, tipo de navegador, sistema operacional, URLs de referência, páginas visitadas e timestamps.</li>
          <li><strong>Informações do Dispositivo:</strong> Tipo de dispositivo, resolução de tela e identificadores únicos do dispositivo.</li>
          <li><strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies, web beacons e tecnologias de rastreamento similares para coletar informações sobre seu comportamento de navegação e preferências.</li>
          <li><strong>Dados de Uso:</strong> Recursos utilizados, ações realizadas em nossas plataformas e métricas de desempenho.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">1.3 Informações de Terceiros</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Processadores de Pagamento:</strong> Confirmação de transação e detalhes de cobrança do Stripe.</li>
          <li><strong>Plataformas de Mídias Sociais:</strong> Se você interagir conosco através do Facebook ou outras mídias sociais, podemos receber informações de perfil conforme suas configurações de privacidade nessas plataformas.</li>
          <li><strong>Provedores de Análise:</strong> Estatísticas de uso agregadas e anonimizadas.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">2. Como Utilizamos Suas Informações</h2>
        <p>Utilizamos as informações coletadas para os seguintes fins:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Prestação de Serviços:</strong> Para fornecer, manter e melhorar nossos produtos e serviços, incluindo Agents for Chat e Mynute.</li>
          <li><strong>Gestão de Conta:</strong> Para criar, gerenciar e autenticar sua conta.</li>
          <li><strong>Processamento de Pagamentos:</strong> Para processar transações e enviar comunicações relacionadas a cobranças.</li>
          <li><strong>Suporte ao Cliente:</strong> Para responder às suas consultas e resolver problemas.</li>
          <li><strong>Comunicação:</strong> Para enviar atualizações de serviço, alertas de segurança e mensagens administrativas.</li>
          <li><strong>Marketing:</strong> Com seu consentimento, para enviar comunicações promocionais sobre nossos produtos e serviços. Você pode cancelar a inscrição a qualquer momento.</li>
          <li><strong>Análises:</strong> Para entender padrões de uso e melhorar nossas plataformas.</li>
          <li><strong>Conformidade Legal:</strong> Para cumprir leis, regulamentos e processos legais aplicáveis.</li>
          <li><strong>Segurança:</strong> Para detectar, prevenir e resolver fraudes, abusos e problemas de segurança.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">3. Como Compartilhamos Suas Informações</h2>
        <p>Não vendemos suas informações pessoais. Podemos compartilhar suas informações com as seguintes partes:</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.1 Provedores de Serviço</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stripe:</strong> Para processamento de pagamentos. A política de privacidade do Stripe rege o tratamento dos seus dados de pagamento. Visite <a href="https://stripe.com/privacy" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.</li>
          <li><strong>Provedores de Hospedagem em Nuvem:</strong> Para hospedar nossa infraestrutura e armazenar dados de forma segura.</li>
          <li><strong>Provedores de Serviços de IA:</strong> Integramos com provedores de IA (como OpenAI, Google e outros) para alimentar nossos recursos de chatbot. Dados de conversas podem ser processados por esses provedores conforme suas respectivas políticas de privacidade.</li>
          <li><strong>Provedores de Comunicação:</strong> Para envio de e-mails, SMS e notificações por WhatsApp.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.2 Parceiros de Publicidade e Mídias Sociais</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Facebook/Meta:</strong> Podemos usar ferramentas do Facebook para publicidade, análises e recursos de login. As informações compartilhadas com o Facebook são regidas pela <a href="https://www.facebook.com/privacy/policy/" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Política de Dados do Facebook</a>.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.3 Legal e Regulatório</h3>
        <p>Podemos divulgar suas informações quando exigido por lei, em resposta a processos legais válidos (como intimações ou ordens judiciais), para proteger nossos direitos e propriedade, para fazer cumprir nossos termos, ou em conexão com investigação de atividade ilegal suspeita.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.4 Transferências Empresariais</h3>
        <p>Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas. Notificaremos você sobre qualquer alteração e quaisquer escolhas que você possa ter.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">4. Método de Divulgação</h2>
        <p>Quando compartilhamos informações com terceiros, fazemos isso através de:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Integrações Seguras via API:</strong> Conexões criptografadas (TLS/SSL) para serviços de terceiros.</li>
          <li><strong>Salvaguardas Contratuais:</strong> Acordos de Processamento de Dados (DPAs) com provedores de serviço que limitam como eles podem usar suas informações.</li>
          <li><strong>Anonimização:</strong> Quando possível, anonimizamos ou agregamos dados antes de compartilhar para fins de análise ou relatórios.</li>
          <li><strong>Compartilhamento Baseado em Consentimento:</strong> Para comunicações de marketing e compartilhamento de dados não essenciais, obtemos seu consentimento explícito.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">5. Medidas de Segurança</h2>
        <p>Implementamos medidas de segurança padrão da indústria para proteger suas informações:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Criptografia:</strong> Todos os dados transmitidos entre seu navegador e nossos servidores são criptografados usando TLS 1.2 ou superior. Dados sensíveis em repouso são criptografados usando AES-256.</li>
          <li><strong>Controles de Acesso:</strong> Controles rigorosos de acesso baseados em função limitam quem dentro da nossa organização pode acessar dados pessoais.</li>
          <li><strong>Segurança da Infraestrutura:</strong> Nossos sistemas são hospedados em infraestrutura de nuvem segura e em conformidade com SOC 2, com auditorias de segurança regulares.</li>
          <li><strong>Segurança de Pagamentos:</strong> Todo processamento de pagamentos é feito pelo Stripe, que é certificado PCI DSS Nível 1.</li>
          <li><strong>Monitoramento:</strong> Empregamos monitoramento e registro contínuos para detectar acessos não autorizados ou anomalias.</li>
          <li><strong>Resposta a Incidentes:</strong> Mantemos um plano de resposta a incidentes e notificaremos os usuários afetados em caso de violação de dados conforme exigido pela legislação aplicável.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">6. Retenção de Dados</h2>
        <p>Retemos suas informações pessoais pelo tempo necessário para cumprir os fins descritos nesta política, cumprir nossas obrigações legais, resolver disputas e fazer cumprir nossos acordos. Quando os dados não são mais necessários, nós os excluímos ou anonimizamos de forma segura.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos</h2>
        <p>Dependendo da sua localização, você pode ter os seguintes direitos em relação às suas informações pessoais:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Acesso:</strong> Solicitar uma cópia dos dados pessoais que mantemos sobre você.</li>
          <li><strong>Correção:</strong> Solicitar a correção de dados imprecisos ou incompletos.</li>
          <li><strong>Exclusão:</strong> Solicitar a exclusão dos seus dados pessoais, sujeito a requisitos legais de retenção.</li>
          <li><strong>Portabilidade:</strong> Solicitar seus dados em formato portátil e legível por máquina.</li>
          <li><strong>Cancelamento:</strong> Cancelar comunicações de marketing a qualquer momento clicando em "cancelar inscrição" em nossos e-mails ou entrando em contato conosco.</li>
          <li><strong>Restringir Processamento:</strong> Solicitar que limitemos como usamos seus dados em certas circunstâncias.</li>
        </ul>
        <p className="mt-4">Para exercer qualquer um desses direitos, entre em contato conosco em <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
        <p>Utilizamos cookies e tecnologias de rastreamento similares para:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento de nossos sites e serviços.</li>
          <li><strong>Cookies de Análise:</strong> Nos ajudam a entender como os visitantes usam nossos sites.</li>
          <li><strong>Cookies de Preferência:</strong> Lembram suas configurações e preferências (como idioma).</li>
          <li><strong>Cookies de Marketing:</strong> Usados para exibir anúncios relevantes.</li>
        </ul>
        <p className="mt-4">Você pode gerenciar as preferências de cookies nas configurações do seu navegador.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">9. Privacidade de Crianças</h2>
        <p>Nossos serviços não se destinam a crianças menores de 13 anos (ou 16 anos em certas jurisdições). Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que uma criança nos forneceu informações pessoais, entre em contato conosco e nós as excluiremos prontamente.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">10. Transferências Internacionais de Dados</h2>
        <p>Suas informações podem ser transferidas e processadas nos Estados Unidos, onde nossos servidores estão localizados. Ao usar nossos serviços, você consente com a transferência de suas informações para os Estados Unidos e outras jurisdições onde nós ou nossos provedores de serviço operamos.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">11. Alterações nesta Política</h2>
        <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações materiais publicando a política atualizada nesta página e atualizando a data de "Última Atualização". Seu uso contínuo de nossos serviços após quaisquer alterações constitui sua aceitação da política atualizada.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">12. Fale Conosco</h2>
        <p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco:</p>
        <div className="mt-4 bg-dark-800 rounded-lg p-6 border border-dark-600">
          <p className="font-semibold text-white">NENI TECH LLC</p>
          <p>5900 Balcones Drive, STE 100</p>
          <p>Austin, Texas 78731</p>
          <p>Estados Unidos</p>
          <p className="mt-2">
            Telefone: <a href="tel:+19564746576" className="text-primary-300 hover:underline">+1 (956) 474-6576</a>
          </p>
          <p>
            E-mail: <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}
