"use client";

import { type FormEvent, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portraitDataUrl = "https://avatars.githubusercontent.com/u/178131381?v=4";
const upworkUrl = "https://www.upwork.com/freelancers/~015c368d6586ba4860?mp_source=share";
const emailAddress = "adeeliqbalajum@gmail.com";

const cards = [
  ["FastDocNow", "Healthcare website with appointment flow, service pages and responsive Elementor layouts.", "shape-a"],
  ["Griffin-IT", "B2B IT hardware website for MSPs and service providers with inquiry-focused sections.", "shape-c"],
  ["Figma to WordPress", "Pixel-perfect Elementor builds from designer files for agency clients.", "thumbs"],
  ["WooCommerce", "Store setup, product pages, checkout improvements, payments and maintenance.", "shape-b"],
  ["Bug Fixing", "Plugin conflicts, Elementor issues, CSS fixes, broken layouts and PHP errors.", "shape-d"],
  ["Speed Optimization", "LiteSpeed, Cloudflare, image optimization, plugin cleanup and Core Web Vitals.", "shape-a"],
  ["Maintenance", "Backups, updates, security checks, migrations and ongoing WordPress support.", "shape-b"],
];

const stats = [
  ["3+", "years", "Hands-on WordPress, WooCommerce and Elementor Pro experience for international clients."],
  ["50+", "projects", "Business, healthcare, travel, e-commerce and custom WordPress builds delivered."],
  ["20+", "builds", "Figma and PSD designs converted into responsive, pixel-perfect WordPress websites."],
  ["6s→1.8s", "speed", "Load-time improvements through cache, image, plugin and Core Web Vitals optimization."],
];

const services = [
  ["WordPress Website Development", "Custom business websites built with clean structure, responsive layouts and easy content management."],
  ["Elementor Website Design", "Elementor and Elementor Pro pages, landing pages, templates, popups and complete website builds."],
  ["WooCommerce Store Development", "Store setup, product pages, checkout customization, payment gateways and conversion improvements."],
  ["WordPress Bug Fixing", "Fix plugin conflicts, Elementor errors, PHP issues, CSS problems, broken pages and contact forms."],
  ["Website Redesign", "Modern redesigns for outdated WordPress sites with better UX, mobile responsiveness and clear CTAs."],
  ["Speed Optimization & Maintenance", "Caching, image optimization, Core Web Vitals, backups, updates, security and ongoing support."],
];

const projectCards = [
  {
    small: "01 — Healthcare",
    title: "FastDocNow",
    text: "Healthcare WordPress website for online doctor consultations, medication refills, lab testing, imaging and appointment booking.",
    tags: ["WordPress", "Elementor", "Healthcare", "Booking"],
    url: "https://fastdocnow.com/",
  },
  {
    small: "02 — Telehealth",
    title: "GetCareMD",
    text: "Telehealth website for online care, provider access, treatment pages, patient-focused service presentation and contact flow.",
    tags: ["WordPress", "Elementor", "Healthcare", "Responsive"],
    url: "https://getcaremd.com/",
  },
  {
    small: "03 — HR & Recruitment",
    title: "Griffin Resources",
    text: "Corporate WordPress website for HR outsourcing, recruitment, payroll, leadership coaching and business support services.",
    tags: ["WordPress", "Elementor", "Corporate", "Services"],
    url: "https://griffin-resources.com/",
  },
  {
    small: "04 — B2B IT",
    title: "Griffin-IT",
    text: "B2B WordPress website for MSPs and IT service providers, built to showcase hardware solutions and generate inquiries.",
    tags: ["WordPress", "Elementor", "B2B", "Landing Page"],
    url: "https://griffin-it.com/",
  },
  {
    small: "05 — Local Business",
    title: "Happy Hearts Children’s Center",
    text: "Daycare and preschool website with program pages, parent-focused content, gallery, FAQs and tour calls-to-action.",
    tags: ["WordPress", "Elementor", "Local Business", "CTA"],
    url: "https://www.happyheartschildrencenter.com/",
  },
  {
    small: "06 — Dubai Travel",
    title: "Al Emirates Tours",
    text: "Dubai tour website with package listings, tour categories, WhatsApp booking CTAs and mobile-friendly service pages.",
    tags: ["WordPress", "Elementor", "Travel", "Booking"],
    url: "https://alemiratestours.com/",
  },
  {
    small: "07 — Travel Agency",
    title: "KK Travels & Tours",
    text: "Travel agency website for Umrah packages, visa services, air tickets, hotel reservations and inquiry generation.",
    tags: ["WordPress", "Elementor", "Travel", "Forms"],
    url: "https://kktravelsandtours.com/",
  },
  {
    small: "08 — Service Business",
    title: "Junk Veteran",
    text: "Local service website structured for clear service presentation, trust signals, contact flow and mobile visitors.",
    tags: ["WordPress", "Elementor", "Service Website", "Mobile"],
    url: "https://junkveteran.com/",
  },
];

const caseStudies = [
  ["Case Study 01", "Healthcare booking experience", "FastDocNow", "Built a responsive healthcare website with clear service sections, appointment-focused CTAs, FAQ/blog areas and a patient-friendly mobile experience."],
  ["Case Study 02", "B2B service positioning", "Griffin-IT", "Structured technical service content for MSP and IT buyers with feature blocks, benefit-led copy, FAQ sections and inquiry-driven navigation."],
  ["Case Study 03", "Tour package conversion flow", "Dubai Tours", "Created travel website layouts with package listings, activity sections, WhatsApp booking touchpoints and mobile-first browsing for tour buyers."],
];

const processSteps = [
  ["01", "Review", "I review your website URL, design file or issue details and suggest the cleanest approach."],
  ["02", "Build or Fix", "I develop, redesign, fix or optimize the WordPress website using reliable implementation."],
  ["03", "Test", "I check responsiveness, forms, layout behavior, speed basics and cross-device usability."],
  ["04", "Launch & Support", "I help with launch, handover, updates, backups and ongoing maintenance when needed."],
];

const skills = [
  "WordPress", "Elementor Pro", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript", "ACF", "Custom Post Types", "Figma to WordPress", "PSD to WordPress", "Landing Pages", "Website Redesign", "Bug Fixing", "Speed Optimization", "LiteSpeed Cache", "Cloudflare", "cPanel",
];

const motionEase = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: projectRef, offset: ["start end", "end start"] });
  const boardY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const boardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

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

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `WordPress project inquiry — ${data.get("projectType") || "Portfolio website"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Website URL: ${data.get("website") || ""}`,
      `Project Type: ${data.get("projectType") || ""}`,
      `Budget Range: ${data.get("budget") || ""}`,
      "",
      `Message: ${data.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
  };

  return (
    <main>
      <div className="noise" />
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav-logo" href="#home" aria-label="Muhammad Adeel Iqbal home">AD</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#process">Process</a>
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
          <div className="status-pill reveal"><strong>Available</strong> for WordPress, Elementor & WooCommerce projects</div>
          <h1 className="reveal"><span className="soft">WordPress & Elementor developer</span> for fast, responsive business websites</h1>
          <p className="subline reveal">I build, redesign, fix, optimize and maintain WordPress websites for businesses that need clean design, reliable functionality and better performance.</p>
          <div className="hero-tags reveal" aria-label="Core services">
            {["WordPress Development", "Elementor Pro", "WooCommerce", "Bug Fixing", "Speed Optimization", "Maintenance"].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="actions reveal">
            <a className="btn btn-dark" href={upworkUrl} target="_blank" rel="noopener noreferrer">✦ Hire me on Upwork</a>
            <a className="btn btn-ghost" href="#projects">View case studies</a>
          </div>

          <motion.div className="showcase reveal" aria-label="Portfolio preview carousel" initial={{ opacity: 0, y: 42, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: motionEase, delay: 0.2 }}>
            <div className="showcase-haze" />
            <motion.div className="strip" aria-hidden="true" initial={{ x: "calc(-50% - 80px)", y: "-36%" }} animate={{ x: "calc(-50% + 80px)", y: "-36%" }} transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
              {cards.map(([title, desc, shape], index) => (
                <motion.article className="site-card" key={title} initial={{ opacity: 0, y: 36, rotate: index % 2 === 0 ? -2 : 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65, ease: motionEase, delay: index * 0.04 }}>
                  <div className="browser"><i /><i /><i /></div>
                  <div className="site-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    {shape === "thumbs" ? <div className="thumb-row"><span /><span /><span /></div> : <div className={`site-shape ${shape}`} />}
                  </div>
                </motion.article>
              ))}
            </motion.div>
            <motion.div className="portrait-card" ref={portraitRef} initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: motionEase, delay: 0.35 }}>
              <img src={portraitDataUrl} alt="Muhammad Adeel Iqbal portrait" className="portrait-img" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section grey" id="about">
        <div className="container stats-layout">
          <aside className="about-card reveal">
            <div>
              <h2>I&apos;m Muhammad Adeel Iqbal</h2>
              <p>A WordPress and Elementor developer specializing in professional websites, WooCommerce stores, redesigns, bug fixing, speed optimization and ongoing maintenance for international clients.</p>
            </div>
            <a href={`mailto:${emailAddress}`} className="about-button">Work with me <span className="mini-avatar"><img src={portraitDataUrl} alt="Adeel" /></span></a>
          </aside>
          <div className="stats-grid">
            {stats.map(([value, label, text], index) => (
              <motion.div className="stat reveal" key={value} initial={{ opacity: 0, y: 34, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, ease: motionEase, delay: index * 0.06 }}>
                <div className="stat-top"><strong>{value}</strong><span>{label}</span></div>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container projects-head">
          <div className="eyebrow reveal">Services</div>
          <h2 className="reveal">WordPress services I can help you with</h2>
          <div className="service-grid">
            {services.map(([title, text], index) => (
              <motion.article className="service-card reveal" key={title} initial={{ opacity: 0, y: 42, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.68, ease: motionEase, delay: index * 0.04 }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section grey" id="projects" ref={projectRef}>
        <div className="container projects-head">
          <div className="eyebrow reveal">Real work, real clients</div>
          <h2 className="reveal">Featured WordPress projects</h2>
          <p className="section-subline reveal">A focused selection of healthcare, B2B, travel, local business and service websites built with WordPress, Elementor and conversion-focused structure.</p>
          <motion.div className="project-board reveal" style={{ y: boardY, scale: boardScale }}>
            <div className="project-cards portfolio-grid">
              {projectCards.map((project, index) => (
                <motion.article className="project portfolio-card" key={project.title} initial={{ opacity: 0, y: 52, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.72, ease: motionEase, delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.015 }}>
                  <small>{project.small}</small>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">View live site</a>
                    <a href="#contact">Start similar project</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section case-strip-section" aria-label="Case study motion strip">
        <div className="container projects-head">
          <div className="eyebrow reveal">Case studies</div>
          <h2 className="reveal">A closer look at selected outcomes</h2>
          <div className="case-strip" aria-label="Animated case studies">
            {caseStudies.map(([small, title, result, text], index) => (
              <motion.article className="project case-card" key={`case-${title}`} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 24 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.75, ease: motionEase, delay: index * 0.08 }}>
                <small>{small}</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="case-result">Result focus: <strong>{result}</strong></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section grey" id="process">
        <div className="container projects-head">
          <div className="eyebrow reveal">Process</div>
          <h2 className="reveal">Simple process, clear results</h2>
          <div className="process-grid">
            {processSteps.map(([step, title, text], index) => (
              <motion.article className="process-card reveal" key={step} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.62, ease: motionEase, delay: index * 0.06 }}>
                <strong>{step}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-layout">
          <div className="skills-card reveal">
            <div className="eyebrow">Technical skills</div>
            <h2>Built for WordPress work that needs more than a template</h2>
            <div className="skills-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
          <aside className="testimonial-card reveal">
            <p>“Adeel proved to be an exceptional WordPress developer with strong expertise in custom theme development, plugin integration, and performance optimization. Delivered a scalable, SEO-friendly site with clean code architecture and flawless responsiveness.”</p>
            <div><strong>Aseel G.</strong><span>Project Manager</span></div>
          </aside>
        </div>
      </section>

      <section className="section grey" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy reveal">
            <div className="eyebrow">Let&apos;s build together</div>
            <h2>Need a WordPress website that looks good and works properly?</h2>
            <p>Send me your website URL, design file or issue details, and I&apos;ll review your requirements and suggest the best next step.</p>
            <div className="actions contact-actions">
              <a className="btn btn-dark" href={upworkUrl} target="_blank" rel="noopener noreferrer">Hire me on Upwork</a>
              <a className="btn btn-ghost" href={`mailto:${emailAddress}`}>Email me</a>
              <a className="btn btn-ghost" href="https://linkedin.com/in/adeelatwork/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleContactSubmit}>
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Website URL<input name="website" type="url" placeholder="https://example.com" /></label>
            <div className="form-row">
              <label>Project Type<select name="projectType" defaultValue="New WordPress Website"><option>New WordPress Website</option><option>Elementor Website</option><option>WooCommerce Store</option><option>Bug Fixing</option><option>Website Redesign</option><option>Speed Optimization</option><option>Maintenance</option><option>Other</option></select></label>
              <label>Budget Range<select name="budget" defaultValue="$300 - $700"><option>Under $300</option><option>$300 - $700</option><option>$700 - $1,500</option><option>$1,500+</option><option>Not sure yet</option></select></label>
            </div>
            <label>Message<textarea name="message" placeholder="Tell me what you need built, fixed or improved..." rows={5} required /></label>
            <button className="btn btn-dark form-submit" type="submit">Send project details</button>
          </form>
        </div>
      </section>
    </main>
  );
}
