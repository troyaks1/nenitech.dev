import { useI18n } from '../i18n';

export function TermsOfService() {
  const { t, lang } = useI18n();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{t.terms.title}</h1>
          <p className="mt-2 text-primary-200">{t.terms.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          {lang === 'pt' ? <TermsContentPT /> : <TermsContentEN />}
        </div>
      </section>
    </>
  );
}

function TermsContentEN() {
  return (
    <div className="space-y-8 text-gray-300 leading-relaxed">
      <div>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the websites, products, and services
          provided by <strong>NENI TECH LLC</strong> ("Company", "we", "us", or "our"), a limited liability company
          registered in the United States, with its principal place of business at 5900 Balcones Drive, STE 100,
          Austin, Texas 78731. This includes our website{' '}
          <a href="https://nenitech.dev" className="text-primary-300 hover:underline">nenitech.dev</a>, as well as our
          products Agents for Chat (<a href="https://agents4chat.com" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">agents4chat.com</a>)
          and Mynute (<a href="https://mynute.app" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">mynute.app</a>)
          (collectively, the "Services").
        </p>
        <p className="mt-4">
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
          Terms, you must not use our Services.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">1. Eligibility</h2>
        <p>You must be at least 18 years of age, or the age of legal majority in your jurisdiction, to use our Services. By using our Services, you represent and warrant that you meet this eligibility requirement. If you are using our Services on behalf of a business or legal entity, you represent that you have the authority to bind that entity to these Terms.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">2. Account Registration</h2>
        <p>To access certain features of our Services, you may be required to create an account. You agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Provide accurate, current, and complete information during registration.</li>
          <li>Maintain and promptly update your account information.</li>
          <li>Keep your password confidential and not share your account credentials.</li>
          <li>Accept responsibility for all activities that occur under your account.</li>
          <li>Notify us immediately of any unauthorized use of your account.</li>
        </ul>
        <p className="mt-4">We reserve the right to suspend or terminate your account if any information provided is inaccurate, outdated, or incomplete, or if we suspect unauthorized or fraudulent activity.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">3. Services Description</h2>
        <p>NENI TECH LLC provides the following services:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Agents for Chat:</strong> An AI-powered customer service automation platform that enables businesses to automate customer interactions via WhatsApp and web channels using artificial intelligence.</li>
          <li><strong>Mynute:</strong> A SaaS scheduling and appointment management platform for businesses with multi-location support, employee management, and automated reminders.</li>
          <li><strong>Custom Software Development:</strong> Bespoke software solutions tailored to client requirements.</li>
          <li><strong>IT Consulting:</strong> Strategic technology consulting and advisory services.</li>
        </ul>
        <p className="mt-4">We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.1 Pricing and Billing</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prices for our Services are as listed on the respective product pages and are subject to change with notice.</li>
          <li>Subscription services are billed on a recurring basis (monthly or annually) depending on the plan selected.</li>
          <li>Prepaid credits (such as those used in Agents for Chat) are non-refundable once consumed.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.2 Payment Processing</h3>
        <p>All payments are processed through <strong>Stripe</strong>, our third-party payment processor. By making a payment, you agree to Stripe's <a href="https://stripe.com/legal" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://stripe.com/privacy" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. We do not store your full payment card information on our servers.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.3 Refunds</h3>
        <p>Refund policies vary by product. Subscription fees may be refunded within 30 days of the initial charge if you are not satisfied with the Service. Prepaid credits are non-refundable. To request a refund, contact us at <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.4 Taxes</h3>
        <p>You are responsible for any applicable taxes, duties, or levies associated with your use of our Services, unless otherwise stated. Prices may or may not include taxes depending on your jurisdiction.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
        <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree <strong>not</strong> to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Use our Services for any illegal, harmful, or fraudulent activity.</li>
          <li>Violate any applicable laws, regulations, or third-party rights.</li>
          <li>Send spam, unsolicited messages, or bulk communications through our platforms.</li>
          <li>Transmit viruses, malware, or other malicious code.</li>
          <li>Attempt to gain unauthorized access to our systems, accounts, or data.</li>
          <li>Reverse-engineer, decompile, or disassemble any part of our Services.</li>
          <li>Use our Services to harass, abuse, or harm others.</li>
          <li>Scrape, crawl, or extract data from our Services without written permission.</li>
          <li>Impersonate any person or entity or misrepresent your affiliation.</li>
          <li>Use our AI features to generate content that is illegal, harmful, deceptive, or violates third-party rights.</li>
        </ul>
        <p className="mt-4">We reserve the right to investigate and take appropriate action against anyone who violates these provisions, including suspending or terminating access to the Services and reporting to law enforcement authorities.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.1 Our Intellectual Property</h3>
        <p>All content, features, functionality, software, code, designs, trademarks, logos, and other intellectual property associated with our Services are owned by NENI TECH LLC or its licensors. These materials are protected by copyright, trademark, and other intellectual property laws.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.2 Your Content</h3>
        <p>You retain ownership of any content you submit or upload to our Services ("User Content"). By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, process, and display your content solely for the purpose of providing and improving our Services.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.3 Feedback</h3>
        <p>Any feedback, suggestions, or ideas you provide to us regarding our Services may be used by us without obligation or compensation to you.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services</h2>
        <p>Our Services integrate with or rely on third-party services, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Stripe:</strong> Payment processing (<a href="https://stripe.com/legal" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/legal</a>)</li>
          <li><strong>Facebook/Meta:</strong> Social media integration and advertising (<a href="https://www.facebook.com/legal/terms" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/legal/terms</a>)</li>
          <li><strong>WhatsApp:</strong> Messaging integration</li>
          <li><strong>AI Providers:</strong> OpenAI, Google, and others for AI-powered features</li>
        </ul>
        <p className="mt-4">Your use of these third-party services is subject to their respective terms and privacy policies. We are not responsible for the practices or content of third-party services.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">8. Data and Privacy</h2>
        <p>Your privacy is important to us. Our collection, use, and sharing of personal information is described in our <a href="/privacy-policy" className="text-primary-300 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. By using our Services, you agree to the terms of our Privacy Policy.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
        <p>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.</p>
        <p className="mt-4">We do not guarantee that:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Our Services will be uninterrupted, error-free, or secure.</li>
          <li>Results obtained from the use of our Services will be accurate or reliable.</li>
          <li>AI-generated responses or content will be free from errors or biases.</li>
          <li>Any defects will be corrected in a timely manner.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NENI TECH LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES.</p>
        <p className="mt-4">OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless NENI TECH LLC and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Your use of our Services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any law or the rights of any third party.</li>
          <li>Any content you submit through our Services.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
        <p>We may suspend or terminate your access to our Services at any time, with or without cause and with or without notice, including for violation of these Terms. Upon termination:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Your right to use the Services will immediately cease.</li>
          <li>We may delete your account and associated data, subject to our data retention policies and legal obligations.</li>
          <li>All provisions of these Terms which by their nature should survive termination shall survive, including intellectual property, disclaimers, limitation of liability, and indemnification.</li>
        </ul>
        <p className="mt-4">You may terminate your account at any time by contacting us at <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Dispute Resolution</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law principles.</p>
        <p className="mt-4">Any disputes arising from or relating to these Terms or our Services shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in Austin, Texas. Either party may seek injunctive or other equitable relief in any court of competent jurisdiction.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our Services after the effective date of any changes constitutes your acceptance of the updated Terms.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
        <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
        <p>These Terms, together with our Privacy Policy and any product-specific terms, constitute the entire agreement between you and NENI TECH LLC regarding the use of our Services and supersede all prior agreements and understandings.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
        <p>For questions about these Terms of Service, please contact us:</p>
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

function TermsContentPT() {
  return (
    <div className="space-y-8 text-gray-300 leading-relaxed">
      <div>
        <p>
          Estes Termos de Serviço ("Termos") regem seu acesso e uso dos sites, produtos e serviços
          fornecidos pela <strong>NENI TECH LLC</strong> ("Empresa", "nós" ou "nosso"), uma empresa de responsabilidade limitada
          registrada nos Estados Unidos, com sede em 5900 Balcones Drive, STE 100,
          Austin, Texas 78731. Isso inclui nosso website{' '}
          <a href="https://nenitech.dev" className="text-primary-300 hover:underline">nenitech.dev</a>, bem como nossos
          produtos Agents for Chat (<a href="https://agents4chat.com" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">agents4chat.com</a>)
          e Mynute (<a href="https://mynute.app" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">mynute.app</a>)
          (coletivamente, os "Serviços").
        </p>
        <p className="mt-4">
          Ao acessar ou usar nossos Serviços, você concorda em estar vinculado a estes Termos. Se você não concordar com estes
          Termos, não deve usar nossos Serviços.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">1. Elegibilidade</h2>
        <p>Você deve ter pelo menos 18 anos de idade, ou a maioridade legal em sua jurisdição, para usar nossos Serviços. Ao usar nossos Serviços, você declara e garante que atende a este requisito de elegibilidade. Se estiver usando nossos Serviços em nome de uma empresa ou entidade legal, você declara que tem autoridade para vincular essa entidade a estes Termos.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">2. Registro de Conta</h2>
        <p>Para acessar determinados recursos de nossos Serviços, pode ser necessário criar uma conta. Você concorda em:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Fornecer informações precisas, atuais e completas durante o registro.</li>
          <li>Manter e atualizar prontamente as informações da sua conta.</li>
          <li>Manter sua senha confidencial e não compartilhar suas credenciais de conta.</li>
          <li>Aceitar responsabilidade por todas as atividades que ocorram em sua conta.</li>
          <li>Nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.</li>
        </ul>
        <p className="mt-4">Reservamo-nos o direito de suspender ou encerrar sua conta se qualquer informação fornecida for imprecisa, desatualizada ou incompleta, ou se suspeitarmos de atividade não autorizada ou fraudulenta.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">3. Descrição dos Serviços</h2>
        <p>A NENI TECH LLC fornece os seguintes serviços:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Agents for Chat:</strong> Uma plataforma de automação de atendimento ao cliente com IA que permite que empresas automatizem interações com clientes via WhatsApp e canais web usando inteligência artificial.</li>
          <li><strong>Mynute:</strong> Uma plataforma SaaS de agendamento e gestão de compromissos para empresas com suporte a múltiplas filiais, gestão de funcionários e lembretes automatizados.</li>
          <li><strong>Desenvolvimento de Software Personalizado:</strong> Soluções de software sob medida adaptadas aos requisitos do cliente.</li>
          <li><strong>Consultoria em TI:</strong> Serviços de consultoria e assessoria tecnológica estratégica.</li>
        </ul>
        <p className="mt-4">Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto de nossos Serviços a qualquer momento, com ou sem aviso prévio.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">4. Termos de Pagamento</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.1 Preços e Faturamento</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Os preços de nossos Serviços são conforme listados nas respectivas páginas de produtos e estão sujeitos a alterações mediante aviso.</li>
          <li>Os serviços de assinatura são cobrados de forma recorrente (mensal ou anualmente), dependendo do plano selecionado.</li>
          <li>Créditos pré-pagos (como os usados no Agents for Chat) não são reembolsáveis após consumidos.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.2 Processamento de Pagamentos</h3>
        <p>Todos os pagamentos são processados através do <strong>Stripe</strong>, nosso processador de pagamentos terceirizado. Ao efetuar um pagamento, você concorda com os <a href="https://stripe.com/legal" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Termos de Serviço</a> e a <a href="https://stripe.com/privacy" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> do Stripe. Não armazenamos as informações completas do cartão de pagamento em nossos servidores.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.3 Reembolsos</h3>
        <p>As políticas de reembolso variam por produto. As taxas de assinatura podem ser reembolsadas dentro de 30 dias da cobrança inicial se você não estiver satisfeito com o Serviço. Créditos pré-pagos não são reembolsáveis. Para solicitar um reembolso, entre em contato em <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.4 Impostos</h3>
        <p>Você é responsável por quaisquer impostos, taxas ou tributos aplicáveis associados ao uso de nossos Serviços, salvo indicação em contrário. Os preços podem ou não incluir impostos dependendo da sua jurisdição.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">5. Uso Aceitável</h2>
        <p>Você concorda em usar nossos Serviços apenas para fins lícitos e de acordo com estes Termos. Você concorda em <strong>não</strong>:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Usar nossos Serviços para qualquer atividade ilegal, prejudicial ou fraudulenta.</li>
          <li>Violar quaisquer leis, regulamentos ou direitos de terceiros aplicáveis.</li>
          <li>Enviar spam, mensagens não solicitadas ou comunicações em massa através de nossas plataformas.</li>
          <li>Transmitir vírus, malware ou outro código malicioso.</li>
          <li>Tentar obter acesso não autorizado a nossos sistemas, contas ou dados.</li>
          <li>Fazer engenharia reversa, descompilar ou desmontar qualquer parte de nossos Serviços.</li>
          <li>Usar nossos Serviços para assediar, abusar ou prejudicar outros.</li>
          <li>Raspar, rastrear ou extrair dados de nossos Serviços sem permissão por escrito.</li>
          <li>Se passar por qualquer pessoa ou entidade ou deturpar sua afiliação.</li>
          <li>Usar nossos recursos de IA para gerar conteúdo ilegal, prejudicial, enganoso ou que viole direitos de terceiros.</li>
        </ul>
        <p className="mt-4">Reservamo-nos o direito de investigar e tomar as medidas cabíveis contra qualquer pessoa que viole estas disposições, incluindo suspensão ou encerramento do acesso aos Serviços e denúncia às autoridades policiais.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.1 Nossa Propriedade Intelectual</h3>
        <p>Todo conteúdo, recursos, funcionalidades, software, código, designs, marcas, logotipos e outra propriedade intelectual associada aos nossos Serviços são de propriedade da NENI TECH LLC ou de seus licenciadores. Estes materiais são protegidos por leis de direitos autorais, marcas e outras leis de propriedade intelectual.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.2 Seu Conteúdo</h3>
        <p>Você mantém a propriedade de qualquer conteúdo que envie ou carregue para nossos Serviços ("Conteúdo do Usuário"). Ao enviar Conteúdo do Usuário, você nos concede uma licença não exclusiva, mundial e gratuita para usar, armazenar, processar e exibir seu conteúdo exclusivamente para fins de fornecer e melhorar nossos Serviços.</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.3 Feedback</h3>
        <p>Qualquer feedback, sugestão ou ideia que você nos fornecer sobre nossos Serviços pode ser usado por nós sem obrigação ou compensação para você.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">7. Serviços de Terceiros</h2>
        <p>Nossos Serviços se integram ou dependem de serviços de terceiros, incluindo, entre outros:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Stripe:</strong> Processamento de pagamentos (<a href="https://stripe.com/legal" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/legal</a>)</li>
          <li><strong>Facebook/Meta:</strong> Integração com mídias sociais e publicidade (<a href="https://www.facebook.com/legal/terms" className="text-primary-300 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/legal/terms</a>)</li>
          <li><strong>WhatsApp:</strong> Integração de mensagens</li>
          <li><strong>Provedores de IA:</strong> OpenAI, Google e outros para recursos alimentados por IA</li>
        </ul>
        <p className="mt-4">Seu uso desses serviços de terceiros está sujeito aos seus respectivos termos e políticas de privacidade. Não somos responsáveis pelas práticas ou conteúdo de serviços de terceiros.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">8. Dados e Privacidade</h2>
        <p>Sua privacidade é importante para nós. Nossa coleta, uso e compartilhamento de informações pessoais está descrita em nossa <a href="/privacy-policy" className="text-primary-300 hover:underline">Política de Privacidade</a>, que é incorporada a estes Termos por referência. Ao usar nossos Serviços, você concorda com os termos de nossa Política de Privacidade.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">9. Isenções de Responsabilidade</h2>
        <p>NOSSOS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO LIMITADO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO, NÃO VIOLAÇÃO E PRECISÃO.</p>
        <p className="mt-4">Não garantimos que:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Nossos Serviços serão ininterruptos, livres de erros ou seguros.</li>
          <li>Os resultados obtidos com o uso de nossos Serviços serão precisos ou confiáveis.</li>
          <li>Respostas ou conteúdos gerados por IA serão livres de erros ou vieses.</li>
          <li>Quaisquer defeitos serão corrigidos em tempo hábil.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">10. Limitação de Responsabilidade</h2>
        <p>NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, A NENI TECH LLC, SEUS DIRETORES, FUNCIONÁRIOS E AGENTES NÃO SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO LIMITADO A, PERDA DE LUCROS, DADOS, OPORTUNIDADES DE NEGÓCIOS OU GOODWILL, DECORRENTES DE OU RELACIONADOS AO SEU USO DE NOSSOS SERVIÇOS.</p>
        <p className="mt-4">NOSSA RESPONSABILIDADE TOTAL POR QUAISQUER REIVINDICAÇÕES DECORRENTES DE OU RELACIONADAS A ESTES TERMOS OU NOSSOS SERVIÇOS NÃO EXCEDERÁ O VALOR PAGO POR VOCÊ A NÓS NOS DOZE (12) MESES ANTERIORES À REIVINDICAÇÃO.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">11. Indenização</h2>
        <p>Você concorda em indenizar, defender e isentar a NENI TECH LLC e seus diretores, funcionários, agentes e afiliados de e contra todas e quaisquer reivindicações, danos, perdas, responsabilidades, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes de:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Seu uso de nossos Serviços.</li>
          <li>Sua violação destes Termos.</li>
          <li>Sua violação de qualquer lei ou dos direitos de terceiros.</li>
          <li>Qualquer conteúdo que você envie através de nossos Serviços.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">12. Rescisão</h2>
        <p>Podemos suspender ou encerrar seu acesso aos nossos Serviços a qualquer momento, com ou sem motivo e com ou sem aviso prévio, inclusive por violação destes Termos. Após a rescisão:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Seu direito de usar os Serviços cessará imediatamente.</li>
          <li>Podemos excluir sua conta e dados associados, sujeito às nossas políticas de retenção de dados e obrigações legais.</li>
          <li>Todas as disposições destes Termos que por sua natureza devam sobreviver à rescisão sobreviverão, incluindo propriedade intelectual, isenções, limitação de responsabilidade e indenização.</li>
        </ul>
        <p className="mt-4">Você pode encerrar sua conta a qualquer momento entrando em contato conosco em <a href="mailto:contact@nenitech.dev" className="text-primary-300 hover:underline">contact@nenitech.dev</a>.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">13. Lei Aplicável e Resolução de Disputas</h2>
        <p>Estes Termos serão regidos e interpretados de acordo com as leis do Estado do Texas, Estados Unidos, sem considerar seus princípios de conflito de leis.</p>
        <p className="mt-4">Quaisquer disputas decorrentes de ou relacionadas a estes Termos ou nossos Serviços serão resolvidas por arbitragem vinculante administrada pela American Arbitration Association (AAA) em Austin, Texas. Qualquer das partes pode buscar medidas cautelares ou outras formas de reparação equitativa em qualquer tribunal de jurisdição competente.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">14. Alterações nos Termos</h2>
        <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre alterações materiais publicando os Termos atualizados nesta página e atualizando a data de "Última Atualização". Seu uso contínuo de nossos Serviços após a data efetiva de quaisquer alterações constitui sua aceitação dos Termos atualizados.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">15. Divisibilidade</h2>
        <p>Se qualquer disposição destes Termos for considerada inválida, ilegal ou inexequível, as demais disposições continuarão em pleno vigor e efeito.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">16. Acordo Integral</h2>
        <p>Estes Termos, juntamente com nossa Política de Privacidade e quaisquer termos específicos de produtos, constituem o acordo integral entre você e a NENI TECH LLC em relação ao uso de nossos Serviços e substituem todos os acordos e entendimentos anteriores.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">17. Informações de Contato</h2>
        <p>Para dúvidas sobre estes Termos de Serviço, entre em contato conosco:</p>
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
