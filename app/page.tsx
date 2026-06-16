"use client";

import { useEffect, useRef } from "react";

const portraitDataUrl = "https://avatars.githubusercontent.com/u/178131381?v=4";

const cards = [
  ["Speed audit system", "Core Web Vitals, image optimization and cache cleanup.", "shape-a"],
  ["Woo store rebuild", "Cleaner checkout and stable product flow.", "shape-b"],
  ["AI chatbot workflow", "Lead qualification and support automation.", "thumbs"],
  ["Passport tracking portal", "Custom post types and PHP status system.", "shape-c"],
  ["Booking plugin", "Tiered pricing, admin approvals and email updates.", "shape-d"],
  ["Figma to WordPress", "Pixel-ready responsive Elementor builds.", "shape-a"],
  ["Automation board", "Smarter follow-ups and site operations.", "shape-b"],
];

const stats = [
  ["3+", "years", "Hands-on WordPress, WooCommerce and performance engineering experience."],
  ["50+", "projects", "Business, e-commerce, education and custom WordPress builds delivered."],
  ["20+", "builds", "Figma and PSD designs converted into responsive WordPress websites."],
  ["6s→2s", "speed", "Load-time improvements through cache, image, plugin and Core Web Vitals work."],
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
        <a href="#contact" className="nav-cta">Book Audit</a>
      </nav>

      <section className="hero" id="home">
        <div className="gradient-stage" ref={gradientRef} aria-hidden="true">
          <div className="gblob orange" />
          <div className="gblob purple" />
          <div className="gblob green" />
          <div className="pointer-glow" />
        </div>

        <div className="hero-inner">
          <div className="status-pill reveal"><strong>3+ years</strong> available for select projects</div>
          <h1 className="reveal"><span className="soft">WordPress developer</span> crafting fast online presence</h1>
          <p className="subline reveal">I design, fix and optimize WordPress + WooCommerce websites that load faster, convert better, and can grow with AI automation.</p>
          <div className="actions reveal">
            <a className="btn btn-dark" href="mailto:adeeliqbalajum@gmail.com">✦ Let’s talk</a>
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
              <h2>I’m Muhammad Adeel Iqbal</h2>
              <p>A WordPress Performance & WooCommerce Specialist who transforms slow, unstable websites into fast, conversion-ready platforms with custom development and automation thinking.</p>
            </div>
            <a href="mailto:adeeliqbalajum@gmail.com" className="about-button">About me <span className="mini-avatar"><img src={portraitDataUrl} alt="Adeel" /></span></a>
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
          <div className="eyebrow reveal">Case snapshots</div>
          <h2 className="reveal">Projects I’m building and improving</h2>
          <div className="project-board reveal">
            <div className="project-cards">
              <article className="project"><small>01 — Performance</small><h3>6s to under 2s</h3><p>Speed-focused WordPress optimization for stronger UX, SEO and Core Web Vitals.</p></article>
              <article className="project"><small>02 — Custom system</small><h3>Passport tracking</h3><p>Custom CPT and PHP workflow for real-time application status checking.</p></article>
              <article className="project"><small>03 — AI workflow</small><h3>Chatbot + automation</h3><p>Lead qualification and support concepts for smarter portfolio and client sites.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section grey" id="contact">
        <div className="container projects-head">
          <div className="eyebrow reveal">Need a fix?</div>
          <h2 className="reveal">Let’s make your WordPress site faster and smarter.</h2>
          <div className="actions reveal" style={{ marginTop: 28 }}>
            <a className="btn btn-dark" href="mailto:adeeliqbalajum@gmail.com">Email me</a>
            <a className="btn btn-ghost" href="https://linkedin.com/in/adeelatwork/">LinkedIn profile</a>
          </div>
        </div>
      </section>
    </main>
  );
}
