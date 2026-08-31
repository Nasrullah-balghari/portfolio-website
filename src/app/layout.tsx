import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE = 'https://nasrullah-dev.vercel.app'
const TITLE = 'Nasrullah Balghari — WordPress & Next.js Frontend Developer'
const DESCRIPTION = 'Frontend developer with 3+ years building WordPress sites, WooCommerce stores and Next.js & Angular web apps. See my projects or hire me for your website.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'WordPress developer, frontend developer, Next.js developer, Angular developer, WooCommerce, Elementor, React, TypeScript, web developer Pakistan',
  authors: [{ name: 'Nasrullah Balghari', url: SITE }],
  creator: 'Nasrullah Balghari',
  alternates: { canonical: '/' },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  manifest: '/site.webmanifest',
  verification: { google: 'CkNLMYPM3Z4HiDRsjAW39HgGMa8XScN09bVetgYNWog' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/assets/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE,
    siteName: 'Nasrullah Balghari',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Nasrullah Balghari — WordPress & Next.js Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE}/assets/og-image.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#0E1117',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'Nasrullah Balghari — WordPress & Next.js Frontend Developer',
      description: 'Portfolio of Nasrullah Balghari, a WordPress and Next.js frontend developer based in Rawalpindi, Pakistan.',
      inLanguage: 'en',
      publisher: { '@id': `${SITE}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: 'Nasrullah Balghari | WordPress & Next.js Frontend Developer',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#person` },
      mainEntity: { '@id': `${SITE}/#person` },
      primaryImageOfPage: { '@id': `${SITE}/#primaryimage` },
      inLanguage: 'en',
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE}/#primaryimage`,
      url: `${SITE}/assets/og-image.png`,
      contentUrl: `${SITE}/assets/og-image.png`,
      width: 1200,
      height: 630,
      caption: 'Nasrullah Balghari — WordPress & Next.js Frontend Developer',
    },
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Nasrullah Balghari',
      givenName: 'Nasrullah',
      familyName: 'Balghari',
      url: `${SITE}/`,
      image: {
        '@type': 'ImageObject',
        url: `${SITE}/assets/nasrullah.jpg`,
        width: 800,
        height: 800,
      },
      jobTitle: 'WordPress & Next.js Frontend Developer',
      description: 'Results-driven software developer with 3+ years in web development, specializing in WordPress, WooCommerce, Elementor and Angular UI.',
      email: 'mailto:nasrullahbalghari676@gmail.com',
      telephone: '+92-340-4412985',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawalpindi',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      nationality: { '@type': 'Country', name: 'Pakistan' },
      worksFor: { '@type': 'Organization', name: 'SAUFIK Technologies' },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'WordPress & Next.js Frontend Developer',
        occupationLocation: { '@type': 'City', name: 'Rawalpindi' },
        skills: 'WordPress, WooCommerce, Elementor, DIVI, WP-Bakery, Wix, Squarespace, Angular, JavaScript, HTML5, CSS3, Figma, Git',
      },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of Karachi (UBIT)' },
        { '@type': 'CollegeOrUniversity', name: 'Degree College Skardu' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Responsive Web Design',
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: 'freeCodeCamp' },
        url: 'https://freecodecamp-certificate.netlify.app/',
      },
      knowsAbout: ['WordPress', 'WooCommerce', 'Elementor', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Web Design', 'On-page SEO', 'Figma'],
      sameAs: [
        'https://www.linkedin.com/in/nasrullah-balghari/',
        'https://github.com/nasrullah-balghari',
        'https://www.instagram.com/nasrullah6258/',
        'https://www.facebook.com/nasurullahkhan.balghari/',
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE}/#work`,
      name: 'Selected projects',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: 9,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TaskFlow', url: 'https://taskflow-sooty-chi.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'CPR Enroll', url: 'https://cprenroll.com/' },
        { '@type': 'ListItem', position: 3, name: 'NorthNectar', url: 'https://northnectar.com/' },
        { '@type': 'ListItem', position: 4, name: 'Lyvona', url: 'https://www.lyvona.com/' },
        { '@type': 'ListItem', position: 5, name: 'SIAG CPR Enroll', url: 'https://siagcprenroll.com.mx/' },
        { '@type': 'ListItem', position: 6, name: 'The Tech Excellence', url: 'https://thetechexcellence.com/' },
        { '@type': 'ListItem', position: 7, name: "Orlando's Sportswear", url: 'https://orlandossportswear.com/' },
        { '@type': 'ListItem', position: 8, name: 'KC Maxx Performance', url: 'https://kcmaxxperformance.com/' },
        { '@type': 'ListItem', position: 9, name: 'Saphiros Health', url: 'https://saphiroshealth.com/' },
      ],
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${SITE}/#services`,
      name: 'Web development services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress Development',
            description: 'Custom themes, plugins and complete WordPress builds tailored to your brand and goals.',
            serviceType: 'WordPress Development',
            provider: { '@id': `${SITE}/#person` },
            areaServed: 'Worldwide',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'WooCommerce and Shopify stores with secure checkout and conversion-focused design.',
            serviceType: 'E-commerce Development',
            provider: { '@id': `${SITE}/#person` },
            areaServed: 'Worldwide',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Page Builder Development',
            description: 'Pixel-perfect, responsive sites built with Elementor, Divi and clean custom CSS.',
            serviceType: 'Page Builder Development',
            provider: { '@id': `${SITE}/#person` },
            areaServed: 'Worldwide',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Speed & SEO Optimization',
            description: 'Performance tuning, Core Web Vitals and on-page SEO so your site ranks and loads fast.',
            serviceType: 'SEO and Performance Optimization',
            provider: { '@id': `${SITE}/#person` },
            areaServed: 'Worldwide',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      isPartOf: { '@id': `${SITE}/#webpage` },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a WordPress website cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on scope. A polished multi-page business site typically lands in a different range than a full WooCommerce store with custom checkout logic. I quote per project after a short discovery call, so you get one fixed price with no hourly surprises.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard business or portfolio site usually takes two to three weeks from kickoff to launch. WooCommerce stores and larger custom builds run four to six weeks. I share a timeline up front and keep you updated at each milestone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you convert a Figma design into a working website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this is a core part of my work. I build pixel-perfect, fully responsive front ends from Figma, XD or PSD files, matching spacing, typography and interaction states rather than approximating them.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build WooCommerce and online stores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. I build WooCommerce and Shopify stores with secure checkout, payment gateway integration, product filtering and a conversion-focused layout, plus the analytics needed to see what is actually selling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with Elementor or write custom code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both. I use Elementor and Divi where a page builder genuinely speeds delivery, and write custom themes and clean CSS where performance or flexibility matters. The choice follows the project, not habit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer ongoing maintenance and support after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. I offer post-launch support covering plugin and core updates, security monitoring, backups, speed checks and content changes, either as a monthly retainer or on demand.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://s.wordpress.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
