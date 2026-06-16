"use client";

import { useEffect, useRef } from "react";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

const portraitDataUrl = "https://avatars.githubusercontent.com/u/178131381?v=4";

const cards = [
  ["Desert Safari Dubai", "Custom booking plugin — tiered pricing, admin approvals and payment integration.", "shape-a"],
  ["Embassy of Pakistan", "Official government website with real-time passport tracking system.", "shape-b"],
  ["Figma to WordPress", "Pixel-perfect Elementor builds from designer files for agency clients.", "thumbs"],
  ["WooCommerce Store", "Full e-commerce setup for Dubai lighting company — products, orders, payments.", "shape-c"],
  ["Booking Plugin", "Tiered pricing, admin approvals, automated emails and WhatsApp fields.", "shape-d"],
  ["Landing Pages", "High-converting Elementor pages for UAE, UK and USA businesses.", "shape-a"],
  ["Website Rebuilds", "Full redesigns turning outdated sites into fast, modern platforms.", "shape-b"],
];

const stats = [
  ["3+", "years", "Hands-on WordPress, WooCommerce and Elementor Pro experience for international clients."],
  ["50+", "projects", "Business, e-commerce, education and custom WordPress builds delivered."],
  ["20+", "builds", "Figma and PSD designs converted into responsive, pixel-perfect WordPress websites."],
  ["6s→1.8s", "speed", "Load-time improvements through cache, image, plugin and Core Web Vitals optimisation."],
];

const caseStudies = [
  {
    number: "01",
    type: "Dubai Tourism",
    title: "Desert Safari Dubai",
    summary: "A custom WordPress booking experience with Private and Sharing tour tabs, tiered AED pricing, WhatsApp fields, admin approvals, and Telr payment integration.",
    metric: "Booking system",
    detail: "Custom plugin + checkout flow",
    accent: "#ff7a18",
  },
  {
    number: "02",
    type: "Government",
    title: "Embassy of Pakistan",
    summary: "Official Embassy of Pakistan website for Muscat, Oman, built with Elementor and ACF, plus a custom PHP passport application tracking system.",
    metric: "CPT + PHP",
    detail: "Real-time status tracking",
    accent: "#22c55e",
  },
  {
    number: "03",
    type: "E-commerce",
    title: "ESNCO Lighting Dubai",
    summary: "WooCommerce store support for products, orders, content updates, migration, backups, troubleshooting, and stable uptime maintenance.",
    metric: "WooCommerce",
    detail: "Store operations + migration",
    accent: "#a855f7",
  },
  {
    number: "04",
    type: "Performance",
    title: "6s to 1.8s load time",
    summary: "A speed optimisation sprint using LiteSpeed Cache, image optimisation, plugin auditing, and Core Web Vitals improvements for a smoother user experience.",
    metric: "95+ score",
    detail: "Speed + Core Web Vitals",
    accent: "#ff7a18",
  },
  {
    number: "05",
    type: "Agency Builds",
    title: "20+ Figma to WordPress",
    summary: "Pixel-perfect Elementor Pro builds from Figma and PSD files, delivered as responsive WordPress websites for agency and business clients.",
    metric: "20+ builds",
    detail: "Responsive Elementor delivery",
    accent: "#22c55e",
  },
  {
    number: "06",
    type: "Partnership Page",
    title: "US Supply Chain Corp",
    summary: "A self-contained HTML partnership page with dark/light theming, IntersectionObserver scroll animations, and zero dependencies for Elementor embedding.",
    metric: "0 deps",
    detail: "Elementor HTML widget build",
    accent: "#a855f7",
  },
  {
    number: "07",
    type: "Automation",
    title: "AI chatbot workflow",
    summary: "Portfolio and client-site automation concepts for lead qualification, support triage, FAQs, and smarter follow-up flows.",
    metric: "AI flow",
    detail: "Chatbot + automation concept",
    accent: "#ff7a18",
  },
];

function projectImage(title: string, type: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="30" stdDeviation="35" flood-color="#000000" flood-opacity="0.14"/>
        </filter>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.92" />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="#fafaf8"/>
      <circle cx="930" cy="140" r="210" fill="${accent}" opacity="0.13"/>
      <circle cx="180" cy="600" r="250" fill="${accent}" opacity="0.09"/>
      <g filter="url(#shadow)">
        <rect x="120" y="110" width="960" height="540" rx="48" fill="#ffffff" stroke="#111111" stroke-opacity="0.07"/>
        <rect x="120" y="110" width="960" height="70" rx="48" fill="#ffffff"/>
        <circle cx="172" cy="145" r="10" fill="#111111" opacity="0.18"/>
        <circle cx="205" cy="145" r="10" fill="#111111" opacity="0.12"/>
        <circle cx="238" cy="145" r="10" fill="#111111" opacity="0.08"/>
        <rect x="170" y="230" width="410" height="42" rx="21" fill="#070707" opacity="0.92"/>
        <rect x="170" y="300" width="560" height="28" rx="14" fill="#070707" opacity="0.14"/>
        <rect x="170" y="348" width="460" height="28" rx="14" fill="#070707" opacity="0.09"/>
        <rect x="170" y="420" width="190" height="56" rx="28" fill="#070707"/>
        <rect x="700" y="245" width="260" height="250" rx="42" fill="url(#accent)"/>
        <rect x="745" y="545" width="245" height="28" rx="14" fill="#070707" opacity="0.1"/>
      </g>
      <text x="170" y="254" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#ffffff">${type}</text>
      <text x="170" y="585" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="900" letter-spacing="-3" fill="#070707">${title}</text>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const parallaxImages = caseStudies.map((item) => ({
  src: projectImage(item.title, item.type, item.accent),
  alt: `${item.title} case study preview`,
}));

export default function Home() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in"));
    }, { threshold: 0.15 });
    items.forEach((item) => io.observe(item));

    const onPointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gradientRef.current?.style.setProperty("--mx", `${x}%`);
      gradientRef.current?.style.setProperty("--my", `${y}%`);
      if (portraitRef.current) {
        const rect = portraitRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        if (e.clientY < window.innerHeight * 0.9) {
          portraitRef.current.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`);
          portraitRef.current.style.setProperty("--rx", `${(-py * 8).toFixed(2)}deg`);
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <main>
      <div className="noise" />
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav-logo" href="#home" aria-label="Muhammad Adeel Iqbal home">AI</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-cta">Hire Me</a>
      </nav>

      <section className="hero" id="home">
        <div className="gradient-stage" ref={gradientRef} aria-hidden="true">
          <div className="gblob orange" />
          <div className="gblob purple" />
          <div className="gblob green" />
          <div className="pointer-glow" />
        </div>

        <div className="hero-inner">
          <div className="status-pill reveal"><strong>Available</strong> for new projects</div>
          <h1 className="reveal"><span className="soft">WordPress developer</span> building fast, high-impact websites</h1>
          <p className="subline reveal">I build and redesign WordPress & WooCommerce websites for businesses — from Figma designs to pixel-perfect, conversion-ready sites.</p>
          <div className="actions reveal">
            <a className="btn btn-dark" href="mailto:adeeliqbalajum@gmail.com">✦ Let&apos;s talk</a>
            <a className="btn btn-ghost" href="#projects">Browse work</a>
          </div>

          <div className="showcase reveal" aria-label="Portfolio preview carousel">
            <div className="showcase-haze" />
            <div className="strip" aria-hidden="true">
              {cards.map(([title, desc, shape]) => (
                <article className="site-card" key={title}>
                  <div className="browser"><i /><i /><i /></div>
                  <div className="site-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    {shape === "thumbs" ? <div className="thumb-row"><span /><span /><span /></div> : <div className={`site-shape ${shape}`} />}
                  </div>
                </article>
              ))}
            </div>
            <div className="portrait-card" ref={portraitRef}>
              <img src={portraitDataUrl} alt="Muhammad Adeel Iqbal portrait" className="portrait-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section grey" id="about">
        <div className="container stats-layout">
          <aside className="about-card reveal">
            <div>
              <h2>I&apos;m Muhammad Adeel Iqbal</h2>
              <p>A WordPress Developer specialising in building, redesigning, and improving websites for international clients. From Figma to pixel-perfect Elementor builds, WooCommerce stores to custom plugins — I deliver on time, every time.</p>
            </div>
            <a href="mailto:adeeliqbalajum@gmail.com" className="about-button">Work with me <span className="mini-avatar"><img src={portraitDataUrl} alt="Adeel" /></span></a>
          </aside>
          <div className="stats-grid">
            {stats.map(([value, label, text]) => (
              <div className="stat reveal" key={value}>
                <div className="stat-top"><strong>{value}</strong><span>{label}</span></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-copy-section" aria-label="Animated case study statement">
        <TextRevealByWord
          text="Real projects, custom WordPress systems, WooCommerce stores, speed improvements, and production-ready websites delivered for clients."
          className="text-reveal-card"
        />
      </section>

      <section className="parallax-section" aria-label="Animated case study previews">
        <div className="container projects-head parallax-intro">
          <div className="eyebrow reveal">Motion case studies</div>
          <h2 className="reveal">Scroll through selected project outcomes</h2>
        </div>
        <ZoomParallax images={parallaxImages} />
      </section>

      <section className="section" id="projects">
        <div className="container projects-head">
          <div className="eyebrow reveal">Real work, real clients</div>
          <h2 className="reveal">Projects I&apos;ve built and delivered</h2>
          <div className="project-board reveal">
            <div className="project-cards">
              <article className="project">
                <small>01 — Dubai Tourism</small>
                <h3>Desert Safari Dubai</h3>
                <p>Custom WordPress booking plugin with Private/Sharing tour tabs, tiered AED pricing, WhatsApp fields, admin approval workflow, and Telr payment integration.</p>
              </article>
              <article className="project">
                <small>02 — Government</small>
                <h3>Embassy of Pakistan</h3>
                <p>Official government website for the Embassy of Pakistan in Muscat, Oman — built with Elementor and ACF, plus a custom PHP passport application tracking system.</p>
              </article>
              <article className="project">
                <small>03 — E-commerce</small>
                <h3>ESNCO Lighting Dubai</h3>
                <p>WooCommerce store management for a Dubai-based lighting company — products, orders, content updates, migration, and consistent uptime maintenance.</p>
              </article>
              <article className="project">
                <small>04 — Performance</small>
                <h3>6s to 1.8s load time</h3>
                <p>Speed-focused WordPress optimisation achieving 95+ PageSpeed score — LiteSpeed Cache, image optimisation, plugin auditing, and Core Web Vitals improvement.</p>
              </article>
              <article className="project">
                <small>05 — Agency Builds</small>
                <h3>20+ Figma to WordPress</h3>
                <p>Pixel-perfect Figma and PSD to WordPress conversions for agency clients — Elementor Pro, mobile-responsive, clean code, delivered on time.</p>
              </article>
              <article className="project">
                <small>06 — Partnership Page</small>
                <h3>US Supply Chain Corp</h3>
                <p>Self-contained HTML partnership page with dark/light theming, IntersectionObserver scroll animations, and zero dependencies — built for an Elementor HTML widget.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <FlowArt className="case-flow" aria-label="Animated project story scroll">
        {caseStudies.slice(0, 5).map((caseItem, index) => (
          <FlowSection
            key={caseItem.title}
            aria-label={`${caseItem.title} case study`}
            style={{
              background: index % 2 === 0 ? "var(--soft)" : "#050505",
              color: index % 2 === 0 ? "var(--ink)" : "#ffffff",
            }}
          >
            <div className="flow-case-top">
              <p>{caseItem.number} — {caseItem.type}</p>
              <span>{caseItem.metric}</span>
            </div>
            <div className="flow-case-grid">
              <h2>{caseItem.title}</h2>
              <article className="flow-case-card">
                <p>{caseItem.summary}</p>
                <div>
                  <strong>{caseItem.metric}</strong>
                  <span>{caseItem.detail}</span>
                </div>
              </article>
            </div>
          </FlowSection>
        ))}
      </FlowArt>

      <section className="section grey" id="contact">
        <div className="container projects-head">
          <div className="eyebrow reveal">Let&apos;s build together</div>
          <h2 className="reveal">Have a WordPress project? Let&apos;s make it happen.</h2>
          <p className="subline reveal" style={{ maxWidth: 520, margin: "16px auto 0" }}>
            Whether you need a new website, a redesign, a WooCommerce store, or a custom plugin — send me a message and I&apos;ll respond within a few hours.
          </p>
          <div className="actions reveal" style={{ marginTop: 28 }}>
            <a className="btn btn-dark" href="mailto:adeeliqbalajum@gmail.com">Email me</a>
            <a className="btn btn-ghost" href="https://linkedin.com/in/adeelatwork/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
