"use client";

import { type FormEvent, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portraitDataUrl = "https://avatars.githubusercontent.com/u/178131381?v=4";
const upworkUrl = "https://www.upwork.com/freelancers/~015c368d6586ba4860?mp_source=share";
const emailAddress = "adeeliqbalajum@gmail.com";

const cards = [
  ["WordPress Websites", "Fast, responsive business websites built for credibility and conversion.", "shape-a"],
  ["Elementor Builds", "Pixel-clean Elementor Pro builds with reusable sections and clean structure.", "thumbs"],
  ["WooCommerce", "Store setup, product pages, checkout improvements and payment integration.", "shape-b"],
  ["Bug Fixing", "Plugin conflicts, broken layouts, CSS issues and WordPress troubleshooting.", "shape-d"],
  ["Website Redesign", "Outdated websites rebuilt into modern, conversion-ready experiences.", "shape-c"],
  ["Speed Optimization", "Performance improvements for load time, Core Web Vitals and UX.", "shape-a"],
  ["Maintenance", "Updates, backups, monitoring, migrations and WordPress support.", "shape-b"],
] as const;

const stats = [
  ["3+", "years", "Hands-on WordPress, WooCommerce and Elementor Pro experience for international clients."],
  ["50+", "projects", "Business, healthcare, education, travel, e-commerce and service websites delivered."],
  ["10+", "niches", "Work across healthcare, tech, HR, local business, travel, education, wellness and law."],
  ["End-to-end", "support", "From design implementation to fixes, optimization, launch support and maintenance."],
] as const;

const services = [
  ["WordPress Website Development", "Professional business websites with responsive layouts, clear page structure and clean WordPress setup."],
  ["Elementor Website Design", "Elementor and Elementor Pro pages, landing pages, template systems and easy content editing."],
  ["WooCommerce Store Development", "Product pages, checkout setup, payment gateways, store structure and user-focused shopping flow."],
  ["WordPress Bug Fixing", "Fix Elementor issues, CSS problems, plugin conflicts, broken pages, forms and WordPress errors."],
  ["Website Redesign", "Redesign outdated websites into cleaner, stronger, modern and mobile-friendly experiences."],
  ["Speed Optimization & Maintenance", "Caching, image optimization, updates, backups, monitoring and ongoing site care."],
] as const;

const featuredProjects = [
  {
    client: "Artisan Technologies",
    category: "Smart Home Technology",
    url: "https://artisantechnologies.com/",
    summary: "Modern WordPress website for smart-home and automation services, structured to showcase solutions, service categories and a premium brand feel.",
    results: ["Premium visual presentation", "Clear service architecture", "Inquiry-focused page structure"],
    tags: ["WordPress", "Elementor", "Tech"],
    gradient: "linear-gradient(135deg,#0b1220,#1f3b75,#4fd1c5)",
  },
  {
    client: "FastDocNow",
    category: "Online Healthcare Platform",
    url: "https://fastdocnow.com/",
    summary: "Healthcare website for online consultations, medication refills, lab testing, imaging and patient-friendly service access.",
    results: ["Clear medical service layout", "Fast CTA pathways", "Trust-building content flow"],
    tags: ["Healthcare", "Telehealth", "Appointments"],
    gradient: "linear-gradient(135deg,#06141f,#0c4a6e,#38bdf8)",
  },
  {
    client: "Griffin Resources",
    category: "HR Outsourcing & Recruitment",
    url: "https://griffin-resources.com/",
    summary: "Corporate website for HR outsourcing, payroll support, recruitment, leadership coaching and business support services.",
    results: ["Professional corporate positioning", "Multi-service navigation", "Conversion-ready contact flow"],
    tags: ["Corporate", "HR", "Services"],
    gradient: "linear-gradient(135deg,#13151a,#5b21b6,#c084fc)",
  },
  {
    client: "Griffin-IT",
    category: "Hardware Solutions for MSPs",
    url: "https://griffin-it.com/",
    summary: "B2B IT website presenting hardware solutions for MSPs and IT service providers with product categories, portal access and lead-generation structure.",
    results: ["B2B credibility layout", "Structured product discovery", "Lead-generation support"],
    tags: ["B2B IT", "Hardware", "Lead Gen"],
    gradient: "linear-gradient(135deg,#111827,#0f766e,#2dd4bf)",
  },
  {
    client: "Dasert Safari Dubai",
    category: "Tour & Booking Website",
    url: "https://dasertsafaridubai.com/",
    summary: "Travel website for desert safaris, buggy rides and ATV experiences with package-focused content and booking-oriented browsing.",
    results: ["Travel-friendly UX", "Package discovery flow", "Booking-first CTAs"],
    tags: ["Travel", "Tours", "Booking"],
    gradient: "linear-gradient(135deg,#2b1207,#c2410c,#fb923c)",
  },
  {
    client: "KK Travels & Tours",
    category: "Travel, Visa & Umrah Services",
    url: "https://kktravelsandtours.com/",
    summary: "Travel agency website for Umrah, visa assistance, air tickets, hotel reservations and tour services with clear service segmentation.",
    results: ["Service-rich homepage", "Clear offer hierarchy", "Lead capture support"],
    tags: ["Travel", "Visa", "Umrah"],
    gradient: "linear-gradient(135deg,#1f0f2c,#7c3aed,#f472b6)",
  },
  {
    client: "Al Emirates Tours",
    category: "Dubai Tours & Attractions",
    url: "https://alemiratestours.com/",
    summary: "Tourism website for desert safari, city tours, combo tours and destination packages across Dubai and the UAE.",
    results: ["Destination-focused structure", "Tour category clarity", "Package-driven browsing"],
    tags: ["Dubai", "Packages", "Tours"],
    gradient: "linear-gradient(135deg,#052e16,#15803d,#86efac)",
  },
  {
    client: "GetCareMD",
    category: "24/7 Telehealth Website",
    url: "https://getcaremd.com/",
    summary: "Healthcare website focused on 24/7 access to trusted medical professionals, patient pathways, condition-based discovery and provider chat.",
    results: ["Trust-first healthcare UX", "Easy patient journey", "Structured service education"],
    tags: ["Health", "24/7 Care", "Patient Flow"],
    gradient: "linear-gradient(135deg,#082f49,#0284c7,#67e8f9)",
  },
  {
    client: "Happy Hearts Children’s Center",
    category: "Daycare & Preschool Website",
    url: "https://www.happyheartschildrencenter.com/",
    summary: "Local childcare website highlighting daycare and preschool programs, two locations, schedule-a-tour CTAs and family-focused information.",
    results: ["Parent-friendly structure", "Program clarity", "Strong local-service trust"],
    tags: ["Daycare", "Programs", "Tours"],
    gradient: "linear-gradient(135deg,#3f1d5d,#9333ea,#f0abfc)",
  },
  {
    client: "ReloCrate",
    category: "Eco-Friendly Moving Crates",
    url: "https://relocrate.com/",
    summary: "Local business website for reusable moving crates with residential and commercial packages, product-led storytelling and sustainable positioning.",
    results: ["Product-led homepage", "Offer clarity", "Local business positioning"],
    tags: ["Local Business", "Ecommerce", "Moving"],
    gradient: "linear-gradient(135deg,#11231a,#16a34a,#86efac)",
  },
] as const;

const moreClients = [
  ["Book My Holidays", "https://bookmyholidays.uk/"],
  ["Junk Veteran", "https://junkveteran.com/"],
  ["Sparktivo", "https://sparktivo.com/"],
  ["Pacific Valor Law", "https://pacificvalorlaw.com/"],
  ["Todd Malloy", "https://toddmalloy.com/"],
  ["ThriveWell Solutions", "https://thrivewellsolutions.com/"],
  ["Hercules Roof Systems", "https://herculesdfw.com/"],
  ["7 Sky Consultant", "https://7skyconsultant.com/"],
  ["Seva Wealth", "https://seva-wealth.com/"],
] as const;

const caseStudies = [
  ["Case Study 01", "Healthcare platforms", "FastDocNow & GetCareMD", "Clear service navigation, patient reassurance, action-focused CTAs and simplified care-access pathways."],
  ["Case Study 02", "Corporate & B2B", "Griffin Resources & Griffin-IT", "Multi-service business websites with stronger positioning, service discovery and inquiry-oriented layouts."],
  ["Case Study 03", "Travel & booking", "Dubai tourism projects", "Package-focused browsing, destination categories, visual browsing and booking prompts for faster decisions."],
] as const;

const processSteps = [
  ["01", "Review", "I review your current website, design file or issue details and suggest the best implementation path."],
  ["02", "Build or Improve", "I design, develop, redesign, fix or optimize the website while keeping the work structured and reliable."],
  ["03", "Quality Check", "I test layout behavior, responsiveness, content flow, CTA clarity and overall usability across devices."],
  ["04", "Launch & Support", "I help with launch, handover and ongoing maintenance when you need continuous WordPress support."],
] as const;

const skills = ["WordPress", "Elementor Pro", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript", "Landing Pages", "Website Redesign", "Bug Fixing", "Speed Optimization", "LiteSpeed Cache", "Cloudflare", "ACF", "Figma to WordPress", "PSD to WordPress", "Responsive Design", "Website Maintenance"] as const;
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
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")), { threshold: 0.15 });
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
        <a href="#clients">Clients</a>
        <a href="#contact" className="nav-cta">Hire Me</a>
      </nav>

      <section className="hero" id="home">
        <div className="gradient-stage" ref={gradientRef} aria-hidden="true"><div className="gblob orange" /><div className="gblob purple" /><div className="gblob green" /><div className="pointer-glow" /></div>
        <div className="hero-inner">
          <div className="status-pill reveal"><strong>Available</strong> for WordPress, Elementor & WooCommerce projects</div>
          <h1 className="reveal"><span className="soft">WordPress & Elementor developer</span> building websites that look sharp and convert</h1>
          <p className="subline reveal">I build, redesign, fix, optimize and maintain WordPress websites for businesses that need clean design, reliable functionality and stronger online presence.</p>
          <div className="hero-tags reveal">{["WordPress Development", "Elementor Pro", "WooCommerce", "Bug Fixing", "Speed Optimization", "Maintenance"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="actions reveal"><a className="btn btn-dark" href={upworkUrl} target="_blank" rel="noopener noreferrer">✦ Hire me on Upwork</a><a className="btn btn-ghost" href="#projects">Browse projects</a></div>

          <motion.div className="showcase reveal" initial={{ opacity: 0, y: 42, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: motionEase, delay: 0.2 }}>
            <div className="showcase-haze" />
            <motion.div className="strip" aria-hidden="true" initial={{ x: "calc(-50% - 80px)", y: "-36%" }} animate={{ x: "calc(-50% + 80px)", y: "-36%" }} transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
              {cards.map(([title, desc, shape], index) => (
                <motion.article className="site-card" key={title} initial={{ opacity: 0, y: 36, rotate: index % 2 === 0 ? -2 : 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65, ease: motionEase, delay: index * 0.04 }}>
                  <div className="browser"><i /><i /><i /></div><div className="site-body"><h3>{title}</h3><p>{desc}</p>{shape === "thumbs" ? <div className="thumb-row"><span /><span /><span /></div> : <div className={`site-shape ${shape}`} />}</div>
                </motion.article>
              ))}
            </motion.div>
            <motion.div className="portrait-card" ref={portraitRef} initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: motionEase, delay: 0.35 }}><img src={portraitDataUrl} alt="Muhammad Adeel Iqbal portrait" className="portrait-img" /></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section grey" id="about"><div className="container stats-layout"><aside className="about-card reveal"><div><h2>I&apos;m Muhammad Adeel Iqbal</h2><p>A WordPress and Elementor developer specializing in business websites, WooCommerce stores, bug fixing, redesign, speed optimization and ongoing maintenance for international clients.</p></div><a href={`mailto:${emailAddress}`} className="about-button">Work with me <span className="mini-avatar"><img src={portraitDataUrl} alt="Adeel" /></span></a></aside><div className="stats-grid">{stats.map(([value, label, text], index) => <motion.div className="stat reveal" key={value} initial={{ opacity: 0, y: 34, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, ease: motionEase, delay: index * 0.06 }}><div className="stat-top"><strong>{value}</strong><span>{label}</span></div><p>{text}</p></motion.div>)}</div></div></section>

      <section className="section" id="services"><div className="container projects-head"><div className="eyebrow reveal">Services</div><h2 className="reveal">WordPress services clients hire me for</h2><div className="service-grid">{services.map(([title, text], index) => <motion.article className="service-card reveal" key={title} initial={{ opacity: 0, y: 42, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.68, ease: motionEase, delay: index * 0.04 }}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section>

      <section className="section grey" id="projects" ref={projectRef}><div className="container projects-head"><div className="eyebrow reveal">Featured projects</div><h2 className="reveal">Client work across healthcare, tech, travel, education and local business</h2><p className="section-subline reveal">Project-focused covers, client names and result-driven summaries make this portfolio more credible, visual and conversion-ready.</p><motion.div className="project-board reveal" style={{ y: boardY, scale: boardScale }}><div className="project-cards portfolio-rich-grid">{featuredProjects.map((project, index) => <motion.article className="project portfolio-rich-card" key={project.client} initial={{ opacity: 0, y: 52, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.72, ease: motionEase, delay: index * 0.04 }} whileHover={{ y: -8, scale: 1.012 }}><div className="project-visual" style={{ background: project.gradient }}><div className="project-browser"><i /><i /><i /></div><div className="project-visual-content"><small>Client Project</small><strong>{project.client}</strong><span>{project.category}</span><div>{project.tags.map((tag) => <em key={`${project.client}-${tag}`}>{tag}</em>)}</div></div></div><div className="project-meta-top"><small>{project.category}</small><span className="project-client">{project.client}</span></div><h3>{project.client}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map((tag) => <span key={`${project.client}-${tag}`}>{tag}</span>)}</div><ul className="result-list">{project.results.map((item) => <li key={`${project.client}-${item}`}>{item}</li>)}</ul><div className="project-actions"><a href={project.url} target="_blank" rel="noopener noreferrer">View live site</a><a href="#contact">Need something similar?</a></div></motion.article>)}</div></motion.div></div></section>

      <section className="section"><div className="container projects-head"><div className="eyebrow reveal">Project outcomes</div><h2 className="reveal">How I position projects for stronger client trust</h2><div className="case-strip">{caseStudies.map(([small, title, result, text], index) => <motion.article className="project case-card" key={`case-${title}`} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 24 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: 0.75, ease: motionEase, delay: index * 0.08 }}><small>{small}</small><h3>{title}</h3><p>{text}</p><div className="case-result">Focus: <strong>{result}</strong></div></motion.article>)}</div></div></section>

      <section className="section grey" id="clients"><div className="container trust-layout clients-layout"><div className="skills-card reveal"><div className="eyebrow">Clients & industries</div><h2>Additional projects and clients I&apos;ve worked with</h2><p className="client-copy">More client work across travel, service businesses, consulting, law, wellness, roofing and finance.</p><div className="clients-cloud">{moreClients.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="client-chip">{name}</a>)}</div></div><aside className="testimonial-card reveal"><p>“Adeel proved to be an exceptional WordPress developer with strong expertise in custom theme development, plugin integration, and performance optimization. Delivered a scalable, SEO-friendly site with clean code architecture and flawless responsiveness.”</p><div><strong>Aseel G.</strong><span>Project Manager</span></div></aside></div></section>

      <section className="section" id="process"><div className="container projects-head"><div className="eyebrow reveal">Process</div><h2 className="reveal">Simple process, clear communication, polished delivery</h2><div className="process-grid">{processSteps.map(([step, title, text], index) => <motion.article className="process-card reveal" key={step} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.62, ease: motionEase, delay: index * 0.06 }}><strong>{step}</strong><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section>

      <section className="section grey"><div className="container trust-layout"><div className="skills-card reveal"><div className="eyebrow">Technical skills</div><h2>Built for business websites that need more than a template</h2><div className="skills-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><aside className="testimonial-card reveal"><p>Whether you need a fresh WordPress website, a WooCommerce build, a redesign, a bug fix, better speed or long-term maintenance, I focus on clean delivery and practical business outcomes.</p><div><strong>What clients usually need</strong><span>WordPress websites, Elementor builds, WooCommerce, fixes, redesigns and support</span></div></aside></div></section>

      <section className="section grey" id="contact"><div className="container contact-layout"><div className="contact-copy reveal"><div className="eyebrow">Let&apos;s build together</div><h2>Have a WordPress project in mind?</h2><p>Send me your website URL, design file or issue details, and I&apos;ll review the requirements and help you move forward with the right solution.</p><div className="actions contact-actions"><a className="btn btn-dark" href={upworkUrl} target="_blank" rel="noopener noreferrer">Hire me on Upwork</a><a className="btn btn-ghost" href={`mailto:${emailAddress}`}>Email me</a><a className="btn btn-ghost" href="https://linkedin.com/in/adeelatwork/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div><form className="contact-form reveal" onSubmit={handleContactSubmit}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Website URL<input name="website" type="url" placeholder="https://example.com" /></label><div className="form-row"><label>Project Type<select name="projectType" defaultValue="New WordPress Website"><option>New WordPress Website</option><option>Elementor Website</option><option>WooCommerce Store</option><option>Bug Fixing</option><option>Website Redesign</option><option>Speed Optimization</option><option>Maintenance</option><option>Other</option></select></label><label>Budget Range<select name="budget" defaultValue="$300 - $700"><option>Under $300</option><option>$300 - $700</option><option>$700 - $1,500</option><option>$1,500+</option><option>Not sure yet</option></select></label></div><label>Message<textarea name="message" placeholder="Tell me what you need built, fixed or improved..." rows={5} required /></label><button className="btn btn-dark form-submit" type="submit">Send project details</button></form></div></section>
    </main>
  );
}
