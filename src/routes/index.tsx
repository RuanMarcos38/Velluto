import { createFileRoute } from "@tanstack/react-router";

const WA = (msg: string) =>
  `https://wa.me/5547999457467?text=${encodeURIComponent(msg)}`;

const PHONE_DISPLAY = "(47) 99945-7467";
const PHONE_LINK = "tel:+5547999457467";
const EMAIL = "contato@vellutohomedecor.com.br";
const ENDERECO = "R. Dr. João Colin, 1349 — América, Joinville — SC, 89204-001";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. Dr. João Colin, 1349 - América, Joinville - SC, 89204-001");

const TITLE = "Cortinas e Persianas Sob Medida em Joinville | VELLUTO";
const DESCRIPTION =
  "VELLUTO Home Decor: cortinas, persianas e soluções sob medida em Joinville. Projetos residenciais e corporativos com atendimento personalizado desde 1988.";
const CANONICAL = "https://modeski.com.br/";
const OG_IMAGE = `${CANONICAL.replace(/\/$/, "")}/images/hero-sala.webp`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "VELLUTO Home Decor" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Projeto real de cortinas sob medida da VELLUTO Home Decor em ambiente residencial",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "VELLUTO Home Decor",
          alternateName: "Modeski",
          description: DESCRIPTION,
          foundingDate: "1988",
          url: CANONICAL,
          telephone: "+55 47 99945-7467",
          email: EMAIL,
          image: OG_IMAGE,
          areaServed: { "@type": "City", name: "Joinville" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Dr. João Colin, 1349",
            addressLocality: "Joinville",
            addressRegion: "SC",
            postalCode: "89204-001",
            addressCountry: "BR",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Soluções VELLUTO Home Decor",
            itemListElement: [
              "Cortinas sob medida",
              "Persianas sob medida",
              "Soluções em decoração",
            ].map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service },
            })),
          },
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#a-velluto", label: "A VELLUTO" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const SOLUTIONS = [
  {
    img: "/images/cortinas-sob-medida.webp",
    alt: "Cortina sob medida com composição clássica, tecido texturizado e voil claro",
    title: "Cortinas sob medida",
    text: "Caimento, textura, transparência e controle de luz definidos para valorizar cada ambiente.",
  },
  {
    img: "/images/persianas-sob-medida.webp",
    alt: "Persianas rolô sob medida instaladas em cozinha planejada",
    title: "Persianas sob medida",
    text: "Praticidade, precisão e acabamento limpo para projetos residenciais e corporativos.",
  },
  {
    img: "/images/decoracao-sob-medida.webp",
    alt: "Sala de jantar contemporânea com cortinas claras do piso ao teto",
    title: "Soluções em decoração",
    text: "Composições pensadas para integrar estética, conforto e funcionalidade com naturalidade.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <path
        fill="currentColor"
        d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.56-1.71a12.74 12.74 0 0 0 6.26 1.63h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.02 3.2Zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.58 10.58 0 0 1-1.62-5.66c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.52-10.73 10.52Zm5.83-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-graphite text-cream/85">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 py-2 text-center sm:flex-row">
          <p className="eyebrow">A Modeski agora é VELLUTO Home Decor</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a className="eyebrow transition-colors hover:text-gold" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <p className="eyebrow text-gold">Desde 1988</p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/94 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#hero" className="shrink-0" aria-label="VELLUTO Home Decor — início">
            <img
              src="/velluto-logo.svg"
              alt="Logomarca VELLUTO Home Decor"
              className="h-10 w-auto sm:h-11 md:h-12"
              width={187}
              height={120}
            />
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex xl:gap-10">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="eyebrow text-muted-foreground transition-colors hover:text-wine"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WA("Olá! Gostaria de falar com a VELLUTO Home Decor sobre cortinas e persianas sob medida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow whitespace-nowrap border border-wine px-3 py-3 text-wine transition-colors hover:bg-wine hover:text-primary-foreground sm:px-5"
          >
            <span className="hidden sm:inline">Fale com a VELLUTO</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="grid overflow-hidden lg:min-h-[690px] lg:grid-cols-2">
          <div className="flex items-center bg-wine px-6 py-20 text-cream md:px-14 lg:py-28">
            <div className="reveal mx-auto w-full max-w-xl">
              <p className="eyebrow text-gold">Cortinas e persianas sob medida em Joinville</p>
              <h1 className="mt-8 text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.05] tracking-tight">
                Elegância que transforma cada ambiente.
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-cream/80">
                Projetos reais e personalizados que unem beleza, conforto e funcionalidade para residências e empresas.
              </p>
              <a
                href={WA("Olá! Gostaria de solicitar atendimento da VELLUTO Home Decor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-12 inline-block border border-gold bg-gold px-9 py-4 text-graphite transition-colors hover:bg-transparent hover:text-gold"
              >
                Solicitar atendimento
              </a>
              <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-cream/15 pt-8 sm:grid-cols-3">
                {[
                  ["Desde", "1988"],
                  ["Confiança", "7 mil+ clientes atendidos"],
                  ["Projeto", "Sob medida para cada espaço"],
                ].map(([key, value]) => (
                  <div key={key}>
                    <dt className="eyebrow text-cream/50">{key}</dt>
                    <dd className="mt-2 font-display text-lg text-cream">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative min-h-[500px] lg:min-h-full">
            <img
              src="/images/hero-sala.webp"
              alt="Projeto real de sala com cortina clara do piso ao teto e sofá em couro"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
              width={868}
              height={1156}
            />
          </div>
        </section>

        <section id="a-velluto" className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-wine">Modeski agora é VELLUTO Home Decor</p>
              <h2 className="rule-gold mt-6 text-[clamp(2rem,3.4vw,3rem)] leading-tight">
                Uma nova marca. A mesma excelência desde 1988.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Há mais de três décadas, transformamos ambientes com cortinas, persianas e soluções em decoração sob medida. A VELLUTO nasce como a evolução da nossa história: mais sofisticada, sem abrir mão do cuidado, da confiança e do atendimento personalizado que já conquistaram mais de 7 mil clientes.
              </p>
            </div>
          </div>
        </section>

        <section id="solucoes" className="bg-cream/60 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <p className="eyebrow text-wine">Soluções</p>
              <h2 className="mt-6 text-[clamp(2rem,3.4vw,3rem)] leading-tight">Feito à medida do seu espaço.</h2>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {SOLUTIONS.map((solution) => (
                <article key={solution.title} className="min-w-0">
                  <div className="overflow-hidden bg-card">
                    <img
                      src={solution.img}
                      alt={solution.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                  </div>
                  <h3 className="mt-7 text-2xl">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow text-wine">A experiência VELLUTO</p>
              <h2 className="mt-6 text-[clamp(2rem,3.4vw,3rem)] leading-tight">Do primeiro olhar ao ambiente final.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Antes de escolher tecidos ou mecanismos, entendemos o seu estilo, a sua rotina e as necessidades reais de cada ambiente.
              </p>
            </div>
            <ol className="mt-16 grid gap-px border-t border-border md:grid-cols-3">
              {[
                ["01", "Escuta personalizada", "Uma conversa atenta para compreender o ambiente e o seu jeito de viver nele."],
                ["02", "Curadoria sob medida", "Seleção precisa de tecidos, trilhos e persianas para cada proposta."],
                ["03", "Acabamento cuidadoso", "Medição, confecção e instalação com o rigor de quem cuida dos detalhes."],
              ].map(([number, heading, text]) => (
                <li key={number} className="border-t border-border pt-8 md:border-t-0 md:pr-10">
                  <span className="font-display text-3xl text-gold">{number}</span>
                  <h3 className="mt-5 text-xl">{heading}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative isolate overflow-hidden">
          <img
            src="/images/decoracao-sob-medida.webp"
            alt="Projeto real de sala contemporânea com cortinas claras do piso ao teto"
            loading="lazy"
            width={868}
            height={1156}
            className="h-[60vh] min-h-[420px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-graphite/48" />
          <div className="absolute inset-0 flex items-center px-6">
            <div className="mx-auto w-full max-w-6xl text-cream">
              <p className="eyebrow text-gold">Residencial &amp; corporativo</p>
              <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.4rem)] leading-tight">Ambientes que revelam personalidade.</h2>
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-wine">Contato</p>
              <h2 className="rule-gold mt-6 text-[clamp(2rem,3.4vw,3rem)] leading-tight">Seu novo ambiente começa aqui.</h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Atendimento personalizado para residências e empresas em Joinville e região.
              </p>
              <div className="mt-9 space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="eyebrow mr-3 text-wine">Telefone</span>
                  <a className="transition-colors hover:text-wine" href={PHONE_LINK}>{PHONE_DISPLAY}</a>
                </p>
                <p className="break-words">
                  <span className="eyebrow mr-3 text-wine">E-mail</span>
                  <a className="transition-colors hover:text-wine" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
              <a
                href={WA("Olá! Vim pelo site da VELLUTO Home Decor e gostaria de um atendimento sobre cortinas e persianas sob medida.")}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-10 inline-flex items-center gap-3 bg-wine px-9 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
            <div className="min-w-0 lg:pt-4">
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border bg-card p-8 transition-colors hover:border-gold"
              >
                <p className="eyebrow text-muted-foreground">Showroom</p>
                <address className="mt-4 font-display text-2xl not-italic leading-snug text-wine">{ENDERECO}</address>
                <p className="eyebrow mt-6 text-gold">Ver no Google Maps</p>
              </a>
              <iframe
                title="Mapa do showroom VELLUTO Home Decor em Joinville"
                src="https://www.google.com/maps?q=R.%20Dr.%20Jo%C3%A3o%20Colin%2C%201349%20-%20Am%C3%A9rica%2C%20Joinville%20-%20SC%2C%2089204-001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-6 h-72 w-full border border-border grayscale-[28%]"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-graphite px-6 py-14 text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-7 text-center md:grid-cols-[auto_1fr_auto] md:text-left">
          <img
            src="/velluto-logo.svg"
            alt="Logomarca VELLUTO Home Decor"
            loading="lazy"
            width={187}
            height={120}
            className="mx-auto h-12 w-auto brightness-0 invert md:mx-0"
          />
          <div className="md:justify-self-center">
            <p className="text-sm text-cream/70">Cortinas, persianas e decoração sob medida em Joinville.</p>
            <a className="mt-2 block text-sm text-cream/70 transition-colors hover:text-gold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <p className="eyebrow text-cream/40">© {new Date().getFullYear()} VELLUTO</p>
        </div>
      </footer>

      <a
        href={WA("Olá! Gostaria de mais informações sobre cortinas e persianas sob medida.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a VELLUTO Home Decor pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
