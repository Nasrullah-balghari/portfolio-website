'use client'

import { useEffect, useRef, useState } from 'react'

/* ---------- shared inline icons ---------- */

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

const ExternalArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
)

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17v-7h10v7M7 10V7h10v3M10 14h4" /></svg>
)

const MailStrokeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6l-10 7L2 6M2 6h20v12H2z" /></svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" /></svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
)

const MailFillIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5.33L4 8.2V6.5l8 5.33 8-5.33v1.7z" /></svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.42 1.27 4.86L2 22l5.28-1.38A9.94 9.94 0 0 0 12.02 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" /></svg>
)

const CertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a5 5 0 100-10 5 5 0 000 10z" /><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7" /></svg>
)

const MarqueeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>
)

const SocialLinks = () => (
  <>
    <a href="https://www.linkedin.com/in/nasrullah-balghari/" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
    <a href="https://github.com/nasrullah-balghari" target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
    <a href="https://www.instagram.com/nasrullah6258/" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
    <a href="https://www.facebook.com/nasurullahkhan.balghari/" target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
  </>
)

/* ---------- data ---------- */

const PHRASES = ['ship faster', 'scale smarter', 'Work perfectly']

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'nextjs', label: 'Next.js' },
  { key: 'webapp', label: 'Web App' },
  { key: 'wordpress', label: 'WordPress' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'saas', label: 'SaaS' },
]

const MARQUEE_TECHS = ['WordPress', 'Elementor', 'WooCommerce', 'Wix', 'Squarespace', 'DIVI', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Adobe XD']

type Project = {
  cat: string
  art: string
  domain: string
  url: string
  tag: string
  title: string
  desc: string
  pills: string[]
  visitLabel?: string
  linkLabel?: string
}

const PROJECTS: Project[] = [
  {
    cat: 'nextjs', art: 'art-violet', domain: 'tachyon-website-jet.vercel.app', url: 'https://tachyon-website-jet.vercel.app/',
    tag: 'Next.js · React · Frontend', title: 'Tachyon Website',
    desc: 'Modern web experience built with Next.js and React, focused on responsive sections, reusable UI blocks, and a polished user journey.',
    pills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'CSS'],
    visitLabel: 'View live project', linkLabel: 'Live project',
  },
  {
    cat: 'webapp', art: 'art-blue', domain: 'taskflow-sooty-chi.vercel.app', url: 'https://taskflow-sooty-chi.vercel.app/',
    tag: 'Web App · Angular', title: 'TaskFlow',
    desc: 'A signals-driven Angular task manager with drag-and-drop boards, a command palette and a fast, keyboard-first workflow.',
    pills: ['Angular', 'TypeScript', 'SCSS', 'CDK'],
  },
  {
    cat: 'wordpress', art: 'art-blue', domain: 'cprenroll.com', url: 'https://cprenroll.com/',
    tag: 'Healthcare · Enrollment', title: 'CPR Enroll',
    desc: 'A CPR certification & enrollment platform with a WordPress front end, custom plugin flows and a connected admin dashboard.',
    pills: ['WordPress', 'Custom Plugin', 'PHP', 'Stripe'],
  },
  {
    cat: 'ecommerce', art: 'art-teal', domain: 'northnectar.com', url: 'https://northnectar.com/',
    tag: 'E-commerce · Brand', title: 'NorthNectar',
    desc: 'A natural Himalayan products storefront — honey, shilajit, dry fruits and cold-pressed oils — with a full WooCommerce shopping experience.',
    pills: ['WordPress', 'WooCommerce', 'Elementor'],
  },
  {
    cat: 'wordpress', art: 'art-indigo', domain: 'lyvona.com', url: 'https://www.lyvona.com/',
    tag: 'Healthcare · Landing', title: 'Lyvona',
    desc: 'A healthcare cost-transparency platform for expecting moms — a polished, conversion-focused Elementor build with an AI-companion section.',
    pills: ['WordPress', 'Elementor', 'PHP', 'Responsive'],
  },
  {
    cat: 'wordpress', art: 'art-navy', domain: 'siagcprenroll.com.mx', url: 'https://siagcprenroll.com.mx/',
    tag: 'Healthcare · Enrollment', title: 'SIAG CPR Enroll',
    desc: 'The Mexico edition of the CPR Enroll platform — a Spanish-language WordPress front end with account creation and free-trial enrollment flows.',
    pills: ['WordPress', 'Custom Plugin', 'PHP', 'MariaDB'],
  },
  {
    cat: 'saas', art: 'art-violet', domain: 'thetechexcellence.com', url: 'https://thetechexcellence.com/',
    tag: 'SaaS · AI', title: 'The Tech Excellence',
    desc: 'A modern product site for an AI-automation company — animated Next.js front end presenting intelligent agents and conversation-analytics tools.',
    pills: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    cat: 'ecommerce', art: 'art-teal', domain: 'orlandossportswear.com', url: 'https://orlandossportswear.com/',
    tag: 'E-commerce · Custom Apparel', title: "Orlando's Sportswear",
    desc: "A custom sportswear manufacturer's WooCommerce storefront — team jerseys, uniforms and printed gear, with product categories, wishlist and cart flows.",
    pills: ['WordPress', 'WooCommerce', 'PHP', 'Responsive'],
  },
  {
    cat: 'ecommerce', art: 'art-navy', domain: 'kcmaxxperformance.com', url: 'https://kcmaxxperformance.com/',
    tag: 'Automotive · Services', title: 'KC Maxx Performance',
    desc: 'A Kansas City dyno-tuning and performance shop — service pages and booking alongside a WooCommerce store for gear, parts and merchandise.',
    pills: ['WordPress', 'WooCommerce', 'Elementor', 'SEO'],
  },
  {
    cat: 'wordpress', art: 'art-blue', domain: 'saphiroshealth.com', url: 'https://saphiroshealth.com/',
    tag: 'Healthcare · Telehealth', title: 'Saphiros Health',
    desc: 'A direct-to-consumer telehealth clinic — treatment categories, a four-step patient journey and a connected intake system, built for a licensed multi-state practice.',
    pills: ['WordPress', 'Elementor', 'PHP', 'Responsive'],
  },
]

const FAQS = [
  {
    q: 'What kind of engineering work do you focus on?',
    a: 'I focus on frontend implementation, responsive UI development, and production-facing website builds — with a strong foundation in WordPress, custom theme work, and modern frontend stacks like React, Angular, Next.js, and TypeScript.',
  },
  {
    q: 'How has your skill set evolved over time?',
    a: 'My progression has been WordPress → custom WordPress/PHP → APIs and integrations → Angular/TypeScript → React/Next.js. That path reflects a steady move from CMS delivery to modern frontend product work while keeping a strong real-world CMS foundation.',
  },
  {
    q: 'Can you work from design files and production constraints?',
    a: 'Yes. I’ve worked from design specifications and platform constraints to translate a concept into a responsive, implementation-ready web experience, keeping performance, usability, and business goals in view.',
  },
  {
    q: 'Which projects best reflect your strongest work?',
    a: "The clearest examples are Tachyon Website for modern frontend delivery, CPR Enroll for workflow and enrollment logic, TaskFlow for Angular UI work, and e-commerce builds like NorthNectar and Orlando's Sportswear.",
  },
  {
    q: 'Do you still build WordPress projects?',
    a: 'Yes. WordPress remains one of my strongest real-world skills, especially for business websites, WooCommerce storefronts, and custom plugin or theme work. I use it where it fits the product and still continue to expand into modern frontend engineering.',
  },
  {
    q: 'Are you available for full-time or contract roles?',
    a: 'Yes. I’m available for remote, full-time, and contract opportunities, especially where frontend engineering, responsive UI work, and production-facing web products are a priority.',
  },
]

const SKILLS = ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design', 'WordPress', 'Elementor', 'WooCommerce', 'WP-Bakery', 'DIVI', 'Wix', 'Squarespace', 'Figma', 'Git', 'SEO']

const shot = (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`

/* ---------- page ---------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [dynamicPhrase, setDynamicPhrase] = useState('Work perfectly')

  const spotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)

  /* typing hero phrase */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timer: ReturnType<typeof setTimeout>
    if (reduce) {
      timer = setTimeout(() => setDynamicPhrase('ship faster'), 0)
      return () => clearTimeout(timer)
    }
    let phraseIndex = 0
    let charIndex = 0
    const typePhrase = () => {
      const phrase = PHRASES[phraseIndex]
      setDynamicPhrase(phrase.slice(0, charIndex))
      if (charIndex < phrase.length) {
        charIndex++
        timer = setTimeout(typePhrase, 90)
      } else {
        timer = setTimeout(() => {
          phraseIndex = (phraseIndex + 1) % PHRASES.length
          charIndex = 0
          typePhrase()
        }, 1100)
      }
    }
    timer = setTimeout(typePhrase, 0)
    return () => clearTimeout(timer)
  }, [])

  /* scroll: nav state, back-to-top visibility + progress ring */
  useEffect(() => {
    const RING = 2 * Math.PI * 21
    if (ringRef.current) {
      ringRef.current.style.strokeDasharray = String(RING)
      ringRef.current.style.strokeDashoffset = String(RING)
    }
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setShowTop(y > 420)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(y / max, 1) : 0
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING * (1 - p))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* mobile drawer: body class, escape key, desktop resize */
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  /* cursor spotlight (fine pointers, motion allowed) */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !window.matchMedia('(pointer:fine)').matches) return
    const onMove = (e: MouseEvent) => {
      const spot = spotRef.current
      if (!spot) return
      spot.style.opacity = '1'
      spot.style.left = e.clientX + 'px'
      spot.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  /* reveal-on-scroll */
  useEffect(() => {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            ro.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="atmosphere"></div>
      <div className="grain"></div>
      <div className="spotlight" id="spotlight" ref={spotRef}></div>

      {/* NAV */}
      <nav id="nav" className={scrolled ? 'scrolled' : undefined}>
        <div className="wrap nav-inner">
          <a href="#top" className="logo">Nasrullah <b>Balghari</b></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#about">About</a>
            <a href="/assets/Nasrullah-resume.pdf" target="_blank" rel="noopener">Resume</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </div>
          <button
            className={menuOpen ? 'menu-btn open' : 'menu-btn'}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobilePanel"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={menuOpen ? 'mobile-backdrop open' : 'mobile-backdrop'} onClick={closeMenu}></div>
      <aside className={menuOpen ? 'mobile-panel open' : 'mobile-panel'} id="mobilePanel" aria-hidden={!menuOpen}>
        <div className="mobile-panel-head">
          <span className="logo">Nasrullah <b>Balghari</b></span>
          <button className="panel-close" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="mobile-nav">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="/assets/Nasrullah-resume.pdf" target="_blank" rel="noopener" onClick={closeMenu}>Resume</a>
        </nav>
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>Let&apos;s Talk <MailStrokeIcon /></a>
        <div className="mobile-socials">
          <a href="https://www.linkedin.com/in/nasrullah-balghari/" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="https://github.com/nasrullah-balghari" target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
          <a href="https://www.instagram.com/nasrullah6258/" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
          <a href="https://www.facebook.com/nasurullahkhan.balghari/" target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
        </div>
      </aside>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="status-pill reveal"><span className="status-dot"></span> Available for remote, full-time &amp; contract roles</div>
            <p className="kicker reveal">Software Engineer &amp; Frontend Developer · Rawalpindi, PK</p>
            <h1 className="reveal hero-title" aria-label="I build digital products that Work perfectly">
              <span className="hero-line hero-line-top">I build digital</span>
              <span className="hero-line hero-line-mid">products <span className="hero-word-that">that</span></span>
              <span className="hero-line hero-line-bottom">
                <span className="dynamic-phrase-wrap">
                  <span className="accent-italic dynamic-phrase">{dynamicPhrase}</span>
                </span>
              </span>
            </h1>
            <p className="lead reveal">I’m Nasrullah, a software engineer with 3+ years of experience building responsive web products, WordPress platforms, e-commerce experiences, and modern frontend interfaces.</p>
            <div className="btn-row reveal">
              <a href="#work" className="btn btn-primary">View My Work <ArrowRight /></a>
              <a href="/assets/Nasrullah-resume.pdf" target="_blank" rel="noopener" className="btn btn-ghost">View Resume <ResumeIcon /></a>
              <a href="#contact" className="btn btn-ghost">Contact Me <MailStrokeIcon /></a>
            </div>
            <div className="socials reveal" aria-label="Social links">
              <a href="https://github.com/nasrullah-balghari" target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/nasrullah-balghari/" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="mailto:nasrullahbalghari676@gmail.com" aria-label="Email"><MailFillIcon /></a>
            </div>
          </div>

          <div className="terminal reveal" id="terminal">
            <div className="terminal-bar">
              <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
              <span className="terminal-file">nasrullah.dev</span>
            </div>
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-initials">NB</div>
                <div className="profile-meta">
                  <h3>Nasrullah Balghari</h3>
                  <span>Software Engineer</span>
                </div>
              </div>
              <div className="profile-row">
                <span className="profile-label">Focus</span>
                <span className="profile-value">WordPress, Next.js, CMS, Angular</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Experience</span>
                <span className="profile-value">3+ Years</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Building</span>
                <span className="profile-value">Web Apps, APIs, E-commerce</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Tools</span>
                <span className="profile-value">TypeScript, Elementor, Git, Vercel</span>
              </div>
              <div className="profile-row availability-row">
                <span className="profile-label">Available</span>
                <span className="profile-status"><span className="status-dot small-dot"></span> Open to opportunities</span>
              </div>
              <div className="profile-footer"><code>const engineer = {'{'} problemSolver: true, collaborator: true {'}'}</code></div>
            </div>
          </div>
        </div>

        <div className="wrap hero-stats reveal">
          <div className="hero-stat">
            <div className="hero-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 7h6M7 10h10M8 15h8M6 20V6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5V20" /></svg>
            </div>
            <div className="hero-stat-copy"><span className="hero-stat-number">3+</span><span className="hero-stat-label">Years Experience</span></div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 1 0 9 9M12 7v5l3 3" /></svg>
            </div>
            <div className="hero-stat-copy"><span className="hero-stat-number">WordPress</span><span className="hero-stat-label">CMS · E-commerce</span></div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 18l-4-4 4-4M16 6l4 4-4 4M14 4l-4 16" /></svg>
            </div>
            <div className="hero-stat-copy"><span className="hero-stat-number">Next.js</span><span className="hero-stat-label">React · Angular</span></div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 17v-5m4 5V7m4 10v-8M5 19h14" /></svg>
            </div>
            <div className="hero-stat-copy"><span className="hero-stat-number">Remote</span><span className="hero-stat-label">Full-time · Contract</span></div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="stack">
        <div className="marquee">
          {[0, 1].map((pass) =>
            MARQUEE_TECHS.map((tech) => (
              <span className="tech" key={`${pass}-${tech}`}><MarqueeIcon />{tech}</span>
            ))
          )}
        </div>
      </div>

      {/* RECENT WORK GRID */}
      <section className="pad" id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow center">Recent Work</span>
            <h2>Projects I&apos;ve shipped</h2>
            <p>Real products, real clients, real users. Tap any card to visit the live site.</p>
          </div>

          <div className="filters reveal">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={activeFilter === f.key ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className={activeFilter === 'all' || activeFilter === p.cat ? 'pcard reveal' : 'pcard reveal hide'}
                data-cat={p.cat}
              >
                <a className="thumb" href={p.url} target="_blank" rel="noopener">
                  <div className="thumb-bar"><span className="d r"></span><span className="d y"></span><span className="d g"></span><span className="thumb-url">{p.domain}</span></div>
                  <div className={`thumb-art ${p.art}`}><img className="thumb-shot" loading="lazy" src={shot(p.url)} alt={`${p.title} screenshot`} /></div>
                  <span className="visit">{p.visitLabel ?? 'Visit live site'} <ExternalArrow /></span>
                </a>
                <div className="pcard-body">
                  <span className="pcard-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pills">{p.pills.map((pill) => <span className="pill" key={pill}>{pill}</span>)}</div>
                  <div className="pcard-links">
                    <a className="link-live" href={p.url} target="_blank" rel="noopener">{p.linkLabel ?? 'Live site'} <ArrowRight /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pad section-alt" id="stack">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow center">Core strengths</span>
            <h2>Engineering work across the stack</h2>
            <p>I bridge design, product logic, and implementation — from WordPress builds to modern frontend interfaces.</p>
          </div>
          <div className="cards-4">
            <div className="card reveal">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg></div>
              <h3>Frontend Engineering</h3>
              <p>Responsive interfaces, reusable components, and polished front-end implementation in React, Next.js, Angular, TypeScript, JavaScript, HTML5, CSS3, and SCSS.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></div>
              <h3>WordPress &amp; Commerce</h3>
              <p>Custom WordPress builds, theme customization, WooCommerce flows, and conversion-focused storefronts that balance usability and performance.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
              <h3>Product UI Delivery</h3>
              <p>Figma-to-code implementation, clean component structure, and consistent design execution for marketing and product experiences.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg></div>
              <h3>Performance &amp; Quality</h3>
              <p>Fast-loading layouts, responsive behavior, SEO awareness, and a focus on building experiences that work reliably in production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pad" id="about">
        <div className="wrap about-grid">
          <div className="reveal">
            <div className="avatar-frame">
              <div className="avatar">
                <img className="avatar-photo" loading="lazy" src="/assets/nasrullah.jpg" alt="Nasrullah Balghari — WordPress & Angular UI Developer" />
                <div className="code-tag">&lt;/ WordPress + Angular UI &gt;</div>
              </div>
            </div>
          </div>
          <div className="about-body">
            <span className="eyebrow reveal">About me</span>
            <h2 className="reveal">Frontend engineer with production experience and a WordPress + SEO foundation</h2>
            <p className="reveal">I&apos;m Nasrullah — a frontend engineer and software engineer with 3+ years of hands-on experience building scalable websites, business platforms, e-commerce experiences, and UI-driven web products. My work spans WordPress, custom PHP, Angular, React, Next.js, TypeScript, JavaScript, and SEO-centered frontend implementation.</p>
            <p className="reveal">I’m based in Islamabad / Rawalpindi but not limited to this location. I’m open to remote, onsite, relocation, and project-based opportunities anywhere, and I’m comfortable bridging design, frontend engineering, and search-friendly implementation.</p>
            <div className="skills reveal">
              {SKILLS.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section className="pad section-alt" id="experience">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow center">Career</span>
            <h2>Experience &amp; education</h2>
            <p>Three years of shipping websites — from internship to Angular UI work.</p>
          </div>

          <div className="timeline">
            <div className="tl-item reveal">
              <span className="tl-date">Jun 2025 — Present</span>
              <h3>SAUFIK Technologies</h3>
              <span className="tl-role">WordPress Developer → Angular UI Developer</span>
              <ul className="tl-list">
                <li>Developed, customized and revamped responsive WordPress websites with HTML, CSS, JavaScript and builders like Elementor.</li>
                <li>Converted Figma designs into pixel-perfect WordPress sites and handled on-page SEO.</li>
                <li>Transitioned into Angular-based UI development for internal and client-facing apps, implementing UI changes via Git workflows.</li>
                <li>Installed plugins, wrote custom code and extended functionality, working closely with backend and frontend teams.</li>
              </ul>
            </div>
            <div className="tl-item reveal">
              <span className="tl-date">Nov 2022 — May 2025</span>
              <h3>Legacy Tech</h3>
              <span className="tl-role">WordPress / CMS Developer</span>
              <ul className="tl-list">
                <li>Built and customized responsive websites in WordPress with Elementor, WP-Bakery and DIVI.</li>
                <li>Created and modified Wix and Squarespace sites and templates.</li>
                <li>Cloned and extended WordPress themes to match client requirements.</li>
                <li>Optimized page load speed, mobile responsiveness and overall user experience.</li>
              </ul>
            </div>
            <div className="tl-item reveal">
              <span className="tl-date">Jan 2022 — Nov 2022</span>
              <h3>Sylani Mass IT (SMIT)</h3>
              <span className="tl-role">Web Development Internship</span>
              <ul className="tl-list">
                <li>Built website templates with HTML, CSS and JavaScript and converted PSD / XD designs to markup.</li>
                <li>Created responsive layouts and small JavaScript apps — to-do list, calculator, stopwatch and more.</li>
                <li>Built Weather and Joke apps using third-party API integration.</li>
              </ul>
            </div>
          </div>

          <div className="edu-grid">
            <div className="edu-card reveal">
              <span className="tl-date">2020 — 2022</span>
              <h4>Master in Computer Science (MCS)</h4>
              <p>University of Karachi (UBIT)</p>
            </div>
            <div className="edu-card reveal">
              <span className="tl-date">2017 — 2019</span>
              <h4>Bachelor of Science (B.Sc)</h4>
              <p>Degree College Skardu</p>
            </div>
          </div>

          <div className="cert-line reveal">
            <CertIcon />
            <span><b>Responsive Web Design</b> — freeCodeCamp certification · <a href="https://freecodecamp-certificate.netlify.app/" target="_blank" rel="noopener">view certificate</a></span>
          </div>

          <div className="cert-line reveal">
            <CertIcon />
            <span><b>Web and App Development</b> — Sylani Mass IT (SMIT) certificate · <a href="/assets/web-and-app-development.jpeg" target="_blank" rel="noopener">view certificate</a></span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pad section-alt" id="testimonials">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow center">Kind words</span>
            <h2>What clients say</h2>
            <p>A few notes from people I&apos;ve built with.</p>
          </div>
          <div className="cards-3">
            <div className="quote-card reveal">
              <div className="stars">•</div>
              <blockquote>I work across design, implementation, and platform constraints so the final product is not just attractive but usable and reliable.</blockquote>
              <div className="client"><div className="client-av">A</div><div><div className="client-name">Approach</div><div className="client-role">Product-aware execution</div></div></div>
            </div>
            <div className="quote-card reveal">
              <div className="stars">•</div>
              <blockquote>I understand both business-facing websites and interface-heavy product work, which helps me balance conversion goals with clean technical execution.</blockquote>
              <div className="client"><div className="client-av">R</div><div><div className="client-name">Result</div><div className="client-role">Clearer user journeys</div></div></div>
            </div>
            <div className="quote-card reveal">
              <div className="stars">•</div>
              <blockquote>My work is grounded in real projects — e-commerce, healthcare, multilingual platforms, and Angular UI delivery — not just visual mockups.</blockquote>
              <div className="client"><div className="client-av">E</div><div><div className="client-name">Evidence</div><div className="client-role">Production experience</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad" id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow center">Good to know</span>
            <h2>Frequently asked questions</h2>
            <p>The things most clients ask before we start — answered up front.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <details className="faq-item reveal" key={faq.q}>
                <summary>{faq.q}</summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pad contact" id="contact">
        <div className="wrap">
          <div className="contact-inner reveal">
            <span className="eyebrow center">Let&apos;s connect</span>
            <h2>Have a project in mind?</h2>
            <p>I&apos;m currently available for freelance work and remote collaborations. Tell me about your website and let&apos;s make it happen.</p>
            <div className="btn-row">
              <a href="mailto:nasrullahbalghari676@gmail.com" className="btn btn-primary">Email me <MailStrokeIcon /></a>
              <a href="/assets/Nasrullah-resume.pdf" target="_blank" rel="noopener" className="btn btn-ghost">View resume <ResumeIcon /></a>
              <a href="https://wa.me/923404412985" target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp <WhatsAppIcon /></a>
            </div>
            <div className="socials">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-inner">
          <p>Designed &amp; built by <span className="accent">Nasrullah Balghari</span></p>
          <p>© 2026 — All rights reserved.</p>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        className={showTop ? 'to-top show' : 'to-top'}
        onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg className="to-top-ring" viewBox="0 0 48 48" aria-hidden="true">
          <circle className="ring-track" cx="24" cy="24" r="21" />
          <circle className="ring-bar" ref={ringRef} cx="24" cy="24" r="21" />
        </svg>
        <svg className="to-top-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </>
  )
}
