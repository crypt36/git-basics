/*
  STUDENTS: Edit this file only.
  - Change text, links, and section order in `blocks`.
  - Keep every block `id` and `type` stable.
*/

import type { PortfolioConfig } from "./portfolio.schema";

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
};

export const portfolioConfig: PortfolioConfig = {
  site: {
    name: "Sulove Shrestha",
    role: "Senior Digital Marketing Officer",
  },
  person: {
    fullName: "Sulove Shrestha",
    location: "Nepal",
    email: "sulove.shrest07@gmail.com",
    linkedin: "linkedin.com/in/suloveshrestha",
  },
  nav: {
    brand: {
      text: "Sulove",
      accentText: ".",
      href: "#",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Hire Me",
      href: "#contact",
    },
  },
  seo: {
    title: "Sulove Shrestha | Digital Marketing Portfolio",
    description:
      "Senior Digital Marketing Officer — SEO, PPC, social media, and data-driven growth strategies.",
    author: "Sulove Shrestha",
    twitterSite: "@Lovable",
    ogImage:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8a26296c-4b36-46bf-829e-0469bb62ecf2/id-preview-6db04203--557eecb1-1f64-4c35-842e-6bd4d1e84a18.lovable.app-1775816077576.png",
  },
  theme: {
    mode: "light",
    colors: {
      // Edit values to re-theme the site globally. Keys map to CSS variables in src/styles.css.
      background: "oklch(0.97 0.005 260)",
      foreground: "oklch(0.18 0.04 260)",
      primary: "oklch(0.18 0.04 260)",
      "primary-foreground": "oklch(0.97 0.005 260)",
      accent: "oklch(0.63 0.22 30)",
      "accent-foreground": "oklch(1 0 0)",
      coral: "oklch(0.63 0.22 30)",
      "coral-foreground": "oklch(1 0 0)",
      navy: "oklch(0.18 0.04 260)",
      "navy-foreground": "oklch(0.97 0.005 260)",
    },
  },
  blocks: [
    {
      id: "hero-main",
      type: "hero",
      badge: "Senior Digital Marketing Officer",
      headingPrefix: "Hi, I'm",
      headingHighlight: "Sulove Shrestha",
      description:
        "I craft data-driven marketing campaigns that transform brands, boost engagement, and deliver measurable results across digital channels.",
      primaryCta: {
        label: "Let's Connect",
        href: "#contact",
      },
      secondaryCta: {
        label: "View Services",
        href: "#services",
      },
      image: {
        src: withBase("/images/hero-clipart.png"),
        alt: "Digital marketing professional with social media and analytics icons",
        width: 1024,
        height: 1024,
      },
    },
    {
      id: "about-main",
      type: "about",
      title: "About",
      titleHighlight: "Me",
      paragraphs: [
        "I'm a passionate digital marketing professional with expertise in crafting comprehensive marketing strategies. From SEO and content marketing to paid advertising and social media management, I bring a holistic approach to digital growth.",
        "My focus is on delivering data-driven results that make a real impact — growing audiences, increasing conversions, and building brand authority across all digital channels.",
      ],
      image: {
        src: withBase("/images/sulove-profile.jpeg"),
        alt: "Sulove Shrestha - Senior Digital Marketing Officer",
        width: 500,
        height: 600,
      },
      nameTag: "Sulove Shrestha",
      stats: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Campaigns Launched" },
        { value: "200%", label: "Avg. ROI Increase" },
        { value: "15+", label: "Brands Served" },
      ],
    },
    {
      id: "skills-main",
      type: "skills",
      title: "My",
      titleHighlight: "Skills",
      subtitle:
        "A comprehensive toolkit built from years of hands-on digital marketing experience.",
      items: [
        { name: "SEO & SEM", level: 95 },
        { name: "Social Media Marketing", level: 90 },
        { name: "Content Strategy", level: 88 },
        { name: "Google Ads & PPC", level: 92 },
        { name: "Email Marketing", level: 85 },
        { name: "Analytics & Data", level: 90 },
        { name: "Brand Strategy", level: 87 },
        { name: "Marketing Automation", level: 82 },
      ],
      image: {
        src: withBase("/images/skills-clipart.png"),
        alt: "Achievement and skills illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "services-main",
      type: "services",
      title: "What I",
      titleHighlight: "Do",
      subtitle:
        "Full-spectrum digital marketing services that drive real business results.",
      items: [
        {
          icon: "📊",
          title: "SEO Optimization",
          desc: "Boost organic visibility with keyword research, on-page optimization, and technical SEO audits.",
        },
        {
          icon: "📱",
          title: "Social Media Management",
          desc: "Strategic content planning, community engagement, and growth across all major platforms.",
        },
        {
          icon: "🎯",
          title: "PPC Advertising",
          desc: "High-ROI Google Ads and social media ad campaigns with precise audience targeting.",
        },
        {
          icon: "✉️",
          title: "Email Marketing",
          desc: "Automated email sequences, newsletter campaigns, and lead nurturing workflows.",
        },
        {
          icon: "📝",
          title: "Content Strategy",
          desc: "Compelling content that drives traffic, educates audiences, and converts leads.",
        },
        {
          icon: "📈",
          title: "Analytics & Reporting",
          desc: "Data-driven insights with comprehensive dashboards and actionable recommendations.",
        },
      ],
      image: {
        src: withBase("/images/services-clipart.png"),
        alt: "Digital marketing tools",
        width: 800,
        height: 800,
      },
    },
    {
      id: "experience-main",
      type: "experience",
      title: "My",
      titleHighlight: "Journey",
      subtitle: "A track record of growing brands through digital excellence.",
      items: [
        {
          year: "2023 – Present",
          role: "Senior Digital Marketing Officer",
          company: "Sulove Shrestha — Freelance",
          desc: "Leading digital strategy, managing multi-channel campaigns, and driving 200%+ ROI across paid and organic channels.",
        },
        {
          year: "2021 – 2023",
          role: "Digital Marketing Specialist",
          company: "Marketing Agency",
          desc: "Managed SEO, social media, and content strategies that increased organic traffic by 150% and engagement by 300%.",
        },
        {
          year: "2019 – 2021",
          role: "Marketing Coordinator",
          company: "Digital Agency",
          desc: "Coordinated campaign execution across multiple clients, specializing in PPC and email marketing automation.",
        },
        {
          year: "2018 – 2019",
          role: "Marketing Intern",
          company: "Startup Studio",
          desc: "Supported social media management and content creation for early-stage startups.",
        },
      ],
    },
    {
      id: "contact-main",
      type: "contact",
      title: "Let's",
      titleHighlight: "Talk",
      subtitle:
        "Ready to elevate your digital presence? Let's discuss how I can help grow your brand with strategic marketing.",
      cardTitle: "Send a Message",
      submitLabel: "Send Message",
      successMessage: "Thanks for your message. I will get back to you soon.",
      errorMessage: "Unable to send your message right now. Please try again shortly.",
      contactItems: [
        { icon: "✉️", label: "Email", value: "sulove.shrest07@gmail.com", href: "mailto:sulove.shrest07@gmail.com" },
        { icon: "📍", label: "Location", value: "Nepal" },
        { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/suloveshrestha", href: "https://linkedin.com/in/suloveshrestha" },
      ],
      image: {
        src: withBase("/images/contact-clipart.png"),
        alt: "Contact and communication illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "footer-main",
      type: "footer",
      socialLinks: [
        { label: "LinkedIn", href: "https://linkedin.com/in/suloveshrestha" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
      ],
      copyrightText: "All rights reserved.",
    },
  ],
};
