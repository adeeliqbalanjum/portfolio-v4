"use client";

import { useEffect, useRef } from "react";

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
          <div className="status-pill reveal"><strong>Available</strong> for new projects — UAE · UK · USA</div>
          <h1 className="reveal"><span className="soft">WordPress developer</span> building fast, high-impact websites</h1>
          <p className="subline reveal">I build and redesign WordPress & WooCommerce websites for businesses in the UAE, UK, and USA — from Figma designs to pixel-perfect, conversion-ready sites.</p>
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
