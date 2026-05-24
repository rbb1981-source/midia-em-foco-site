import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  Film,
  Globe2,
  Home,
  Instagram,
  LayoutDashboard,
  MessageCircle,
  PhoneCall,
  Scissors,
  ShoppingBag,
  Sparkles,
  Sprout,
  Star,
  Stethoscope,
  Store,
  UserPlus,
  UsersRound,
  WandSparkles,
  Zap
} from "lucide-react";

const CONTACT = {
  brand: "Mídia em Foco IA",
  domain: "midiaemfoco.ia.br",
  email: "atendimento@midiaemfoco.ia.br",
  whatsappDisplay: "(19) 98987-7559",
  whatsappNumber: "5519989877559",
  message:
    "Olá, quero uma demonstração da Mídia em Foco IA para automatizar minha empresa."
};

const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.message)}`;

const services = [
  {
    icon: MessageCircle,
    title: "Atendimento IA no WhatsApp",
    text: "Agentes inteligentes para responder, qualificar leads e organizar oportunidades 24 horas por dia."
  },
  {
    icon: Film,
    title: "Comerciais com IA",
    text: "Vídeos realistas com roteiro, locução e apresentação profissional para divulgar sua empresa."
  },
  {
    icon: Instagram,
    title: "Social Media Profissional",
    text: "Cuidamos do seu Instagram com planejamento, conteúdo e estratégia para vender todos os dias."
  },
  {
    icon: UserPlus,
    title: "Automação de Leads",
    text: "Fluxos para captar contatos, separar interessados e acelerar o atendimento comercial."
  },
  {
    icon: Globe2,
    title: "Sites e Landing Pages",
    text: "Páginas modernas, rápidas e focadas em transformar visitantes em conversas no WhatsApp."
  }
];

const steps = [
  "Você chama no WhatsApp",
  "Entendemos seu negócio",
  "Criamos seu agente, vídeo ou automação",
  "Sua empresa começa a vender com mais profissionalismo"
];

const niches = [
  { icon: Stethoscope, title: "Clínicas" },
  { icon: Scissors, title: "Salões de beleza" },
  { icon: Home, title: "Imobiliárias" },
  { icon: Dumbbell, title: "Academias" },
  { icon: Store, title: "Papelarias" },
  { icon: Sprout, title: "Hortifrutis" },
  { icon: ShoppingBag, title: "Lojas locais" },
  { icon: Building2, title: "Prestadores de serviço" }
];

const benefits = [
  "Atendimento automático",
  "Respostas rápidas",
  "Captação de leads",
  "Organização de contatos",
  "Mais oportunidades de venda",
  "Menos clientes perdidos"
];

const demoCards = [
  {
    icon: MessageCircle,
    title: "Chat WhatsApp IA",
    text: "Simulação de atendimento automático respondendo dúvidas e direcionando o cliente."
  },
  {
    icon: WandSparkles,
    title: "Vídeo comercial IA",
    text: "Roteiro, apresentador virtual, locução e formato pronto para redes sociais."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard de leads",
    text: "Visão organizada das oportunidades para acompanhar contatos e próximos passos."
  },
  {
    icon: Zap,
    title: "Automação de atendimento",
    text: "Fluxos inteligentes para reduzir demora e evitar perda de clientes interessados."
  }
];

const commercialVideos = [
  {
    label: "Demonstração 1",
    src: "https://www.instagram.com/p/DVpHu2uAO7X/embed"
  },
  {
    label: "Demonstração 2",
    src: "https://www.instagram.com/p/DYIpzqSBKbx/embed"
  }
];

const clientVideos = [
  {
    label: "Cliente 1",
    src: "https://www.instagram.com/p/DYmengMN78G/embed"
  },
  {
    label: "Cliente 2",
    src: "https://www.instagram.com/p/DXUkaE-jjWc/embed"
  },
  {
    label: "Cliente 3",
    src: "https://www.instagram.com/p/DWPz9pWmcfj/embed"
  },
  {
    label: "Cliente 4",
    src: "https://www.instagram.com/p/DVgEqCyjv1S/embed"
  }
];

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <span className="inline-flex rounded-full border border-neon/25 bg-neon/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-neon">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-white/68 md:text-lg">{text}</p> : null}
    </div>
  );
}

function CtaButton({
  children,
  variant = "primary",
  href = whatsappUrl
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-neon text-ink shadow-glow hover:-translate-y-0.5 hover:bg-white"
      : "border border-white/15 bg-white/7 text-white hover:-translate-y-0.5 hover:border-neon/60 hover:bg-neon/10";

  return (
    <a className={`${base} ${styles}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
        <div className="section-shell flex min-h-20 items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="#">
            <Image
              src="/logo-symbol.jpeg"
              alt="Símbolo Mídia em Foco IA"
              width={54}
              height={54}
              className="rounded-full border border-neon/30 shadow-glow"
              priority
            />
            <div>
              <strong className="block font-display text-base leading-none text-white md:text-lg">
                Mídia em Foco IA
              </strong>
              <span className="hidden text-xs font-semibold text-white/55 sm:block">
                Automação, IA e vendas digitais
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/68 lg:flex">
            <a className="hover:text-neon" href="#solucoes">Soluções</a>
            <a className="hover:text-neon" href="#whatsapp-ia">WhatsApp IA</a>
            <a className="hover:text-neon" href="#videos">Vídeos</a>
            <a className="hover:text-neon" href="#como-funciona">Como funciona</a>
          </nav>

          <CtaButton>Solicitar demonstração</CtaButton>
        </div>
      </header>

      <section className="relative pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/20 blur-3xl" />
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-neon">
              <Sparkles size={15} />
              Soluções digitais com IA
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] text-white md:text-6xl lg:text-7xl">
              Automatizamos empresas com <span className="gradient-text">Inteligência Artificial</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Atendimento automático no WhatsApp, comerciais profissionais com IA e automações para sua empresa vender mais todos os dias.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Solicitar demonstração</CtaButton>
              <CtaButton variant="secondary" href="#solucoes">Ver soluções</CtaButton>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 text-sm text-white/70 md:grid-cols-4">
              {["WhatsApp IA", "Vídeos com IA", "Social media", "Leads organizados"].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3" key={item}>
                  <Check className="mb-2 text-neon" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass relative animate-float rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07100f] p-4">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-neon" />
                  <span className="h-3 w-3 rounded-full bg-ocean" />
                  <span className="h-3 w-3 rounded-full bg-violet" />
                </div>
                <span className="rounded-full bg-neon/10 px-3 py-1 text-xs font-bold text-neon">
                  IA online
                </span>
              </div>

              <div className="space-y-4">
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-neon px-4 py-3 text-sm font-bold text-ink">
                  Olá, quero saber valores e horários.
                </div>
                <div className="max-w-[86%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/8 px-4 py-3 text-sm leading-6 text-white/78">
                  Oi! Sou o agente IA da Mídia em Foco. Posso te mostrar planos, tirar dúvidas e direcionar para uma demonstração.
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/7 p-4">
                    <Clock3 className="mb-3 text-ocean" />
                    <strong className="block text-2xl text-white">24h</strong>
                    <span className="text-sm text-white/58">atendimento ativo</span>
                  </div>
                  <div className="rounded-2xl bg-white/7 p-4">
                    <BarChart3 className="mb-3 text-neon" />
                    <strong className="block text-2xl text-white">+ leads</strong>
                    <span className="text-sm text-white/58">contatos organizados</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-neon/20 bg-neon/8 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <Bot className="text-neon" />
                    <strong>Agente personalizado</strong>
                  </div>
                  <div className="h-2 rounded-full bg-white/8">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-neon to-ocean" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="solucoes">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Soluções"
            title="Tecnologia simples para sua empresa vender com mais profissionalismo"
            text="Criamos soluções que ajudam pequenos negócios a atender melhor, aparecer melhor e não perder oportunidades."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-neon/40" key={service.title}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/12 text-neon">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-white/64">{service.text}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-neon" href={whatsappUrl} target="_blank" rel="noreferrer">
                    Quero saber mais
                    <ChevronRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="whatsapp-ia">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full border border-ocean/25 bg-ocean/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-ocean">
              WhatsApp IA
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Sua empresa respondendo clientes 24 horas por dia
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Criamos agentes inteligentes personalizados para atender, qualificar leads, responder dúvidas, enviar informações e organizar oportunidades de venda.
            </p>
            <div className="mt-8">
              <CtaButton>Solicitar demonstração</CtaButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div className="rounded-2xl border border-white/10 bg-white/7 p-4 text-sm font-bold text-white/78" key={benefit}>
                <Check className="mb-3 text-neon" size={20} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="como-funciona">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro contato à automação rodando"
          />

          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article className="relative rounded-3xl border border-white/10 bg-white/6 p-6" key={step}>
                <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-neon text-base font-black text-ink">
                  {index + 1}
                </span>
                <h3 className="font-display text-lg font-bold leading-snug text-white">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Nichos atendidos"
            title="Soluções para negócios que precisam responder rápido e vender melhor"
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {niches.map((niche) => {
              const Icon = niche.icon;
              return (
                <div className="rounded-2xl border border-white/10 bg-white/6 p-5 text-center" key={niche.title}>
                  <Icon className="mx-auto mb-3 text-ocean" size={25} />
                  <strong className="text-sm text-white/78">{niche.title}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="videos">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Vídeos comerciais com IA"
            title="Comerciais profissionais sem precisar gravar"
            text="Criamos vídeos realistas com apresentadores, locução e roteiro estratégico para divulgar sua empresa nas redes sociais."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {commercialVideos.map((video, index) => (
              <article className="glass overflow-hidden rounded-3xl" key={video.src}>
                <div className="border-b border-white/10 px-5 py-4">
                  <span className="text-sm font-bold text-white/72">{video.label}</span>
                </div>
                <div className="embed-frame bg-ink">
                  <iframe src={video.src} title={`Vídeo comercial IA ${index + 1}`} scrolling="no" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-neon">
                  Vídeos de clientes
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                  Trabalhos reais para negócios que já querem aparecer melhor
                </h3>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-extrabold text-neon" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero um vídeo assim
                <ChevronRight size={17} />
              </a>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {clientVideos.map((video, index) => (
                <article className="glass overflow-hidden rounded-3xl" key={video.src}>
                  <div className="border-b border-white/10 px-5 py-4">
                    <span className="text-sm font-bold text-white/72">{video.label}</span>
                  </div>
                  <div className="embed-frame bg-ink">
                    <iframe src={video.src} title={`Vídeo de cliente ${index + 1}`} scrolling="no" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Demonstração"
            title="Veja como a IA entra na rotina do seu negócio"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {demoCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/9 to-white/[0.03] p-6" key={card.title}>
                  <Icon className="mb-5 text-neon" size={28} />
                  <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="glass rounded-[2rem] p-7 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-violet/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-violet">
                  <Star size={15} />
                  Autoridade
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                  IA para pequenos negócios venderem mais
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  A Mídia em Foco IA ajuda pequenos negócios a venderem mais usando tecnologia simples, visual profissional e atendimento inteligente.
                </p>
              </div>
              <div className="grid gap-4">
                {["Espaço para depoimento futuro", "Espaço para resultado de cliente", "Espaço para case local"].map((item) => (
                  <div className="rounded-2xl border border-white/10 bg-white/7 p-5 text-sm font-semibold text-white/64" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-12 md:pb-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] border border-neon/20 bg-gradient-to-br from-neon/18 via-ocean/12 to-violet/18 p-8 text-center shadow-glow md:p-14">
            <BrainCircuit className="mx-auto mb-6 text-neon" size={42} />
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Sua empresa ainda perde clientes por demora no atendimento?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Solicite uma demonstração e veja como a IA pode trabalhar para o seu negócio.
            </p>
            <div className="mt-8">
              <CtaButton>Chamar no WhatsApp</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell grid gap-8 text-sm text-white/60 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src="/logo-symbol.jpeg" alt="Mídia em Foco IA" width={54} height={54} className="mb-4 rounded-full" />
            <strong className="font-display text-lg text-white">{CONTACT.brand}</strong>
            <p className="mt-2 max-w-sm">Automação, WhatsApp IA, vídeos comerciais, social media e soluções digitais.</p>
          </div>
          <div>
            <strong className="mb-3 block text-white">Serviços</strong>
            <p>Atendimento IA no WhatsApp</p>
            <p>Comerciais com IA</p>
            <p>Social Media Profissional</p>
            <p>Automação de Leads</p>
            <p>Sites e Landing Pages</p>
          </div>
          <div>
            <strong className="mb-3 block text-white">Contato</strong>
            <a className="block hover:text-neon" href={`mailto:${CONTACT.email}`}>E-mail: {CONTACT.email}</a>
            <a className="block hover:text-neon" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: {CONTACT.whatsappDisplay}</a>
            <a className="block hover:text-neon" href="https://midiaemfoco.ia.br" target="_blank" rel="noreferrer">Site: {CONTACT.domain}</a>
          </div>
        </div>
      </footer>

      <a
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon text-ink shadow-glow animate-pulseSoft"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <PhoneCall size={24} />
      </a>
    </main>
  );
}
