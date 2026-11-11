// The 15 supported inverter brands and platforms, in the order the owner lists them.
// Logos stay at /img/brands/* (linked by absolute URL from the production email templates).
export interface Brand {
  name: string;
  slug: string;
  logo: string;
  width: number;
  height: number;
  /** Logo carries large built-in margins and needs more room to read at the same size. */
  tall?: boolean;
}

export const BRANDS: Brand[] = [
  { name: 'Sunsynk', slug: 'sunsynk', logo: '/img/brands/sunsynk.png', width: 1509, height: 782, tall: true },
  { name: 'Deye', slug: 'deye', logo: '/img/brands/deye.svg', width: 120, height: 36 },
  { name: 'Solarman', slug: 'solarman', logo: '/img/brands/solarman.jpg', width: 600, height: 400, tall: true },
  { name: 'Solis', slug: 'solis', logo: '/img/brands/solis.png', width: 166, height: 60 },
  { name: 'Huawei FusionSolar', slug: 'huawei-fusionsolar', logo: '/img/brands/huawei.png', width: 266, height: 60 },
  { name: 'SolarEdge', slug: 'solaredge', logo: '/img/brands/solaredge.svg', width: 120, height: 36 },
  { name: 'FoxESS', slug: 'foxess', logo: '/img/brands/foxess.png', width: 320, height: 320 },
  { name: 'GoodWe', slug: 'goodwe', logo: '/img/brands/goodwe.svg', width: 120, height: 36 },
  { name: 'Growatt', slug: 'growatt', logo: '/img/brands/growatt.png', width: 182, height: 31 },
  { name: 'Sungrow', slug: 'sungrow', logo: '/img/brands/sungrow.svg', width: 120, height: 36 },
  { name: 'LuxPower', slug: 'luxpower', logo: '/img/brands/luxpower.webp', width: 1030, height: 186 },
  { name: 'Sol-Ark', slug: 'sol-ark', logo: '/img/brands/solark.png', width: 600, height: 190 },
  { name: 'ATESS', slug: 'atess', logo: '/img/brands/atess.svg', width: 120, height: 36 },
  { name: 'Canadian Solar', slug: 'canadian-solar', logo: '/img/brands/canadiansolar.png', width: 631, height: 118 },
  { name: 'Solar Assistant', slug: 'solar-assistant', logo: '/img/brands/solarassistant.png', width: 503, height: 300, tall: true },
];

export const BRAND_NAMES = BRANDS.map((b) => b.name).join(', ');

export const SITE = 'https://www.pvbiz.co.za';
export const APP = 'https://app.pvbiz.co.za';
export const REGISTER = `${APP}/register`;
export const TERMS = `${APP}/legal/terms`;
export const EMAIL = 'info@pvbiz.co.za';
export const PHONE = '+27 61 546 7165';
export const PHONE_TEL = '+27615467165';
export const APP_STORE = 'https://apps.apple.com/za/app/pvbiz/id6742043415';
export const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.pvbiz';
export const TWITTER = 'https://twitter.com/pv_biz_solar';
export const FACEBOOK = 'https://www.facebook.com/profile.php?id=100091740205316';

/** Shared Organization node (carried from Phase 0). */
export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PVBiz',
  url: SITE,
  logo: `${SITE}/img/pvbiz_logo.png`,
  description:
    'Solar monitoring, analytics and automation across 14+ inverter brands and platforms, including Sunsynk, Deye, Solarman, Sol-Ark, Solis, Huawei FusionSolar and Solar Assistant.',
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'admin@pvbiz.co.za',
    telephone: PHONE_TEL,
    contactType: 'customer service',
  },
  sameAs: [TWITTER, FACEBOOK, APP_STORE, PLAY_STORE],
};

/** Shared SoftwareApplication + Offer node (carried from Phase 0). */
export const SOFTWARE_APPLICATION = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PVBiz',
  url: `${SITE}/`,
  image: `${SITE}/img/og-card.jpg`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Solar monitoring',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Solar monitoring, smart notifications, forecasting, reporting and automation for solar plants on 14+ inverter brands and platforms, including Sunsynk, Deye, Solarman, Sol-Ark, Solis, Huawei FusionSolar and Solar Assistant.',
  publisher: { '@type': 'Organization', name: 'PVBiz', url: SITE },
  offers: [
    {
      '@type': 'Offer',
      name: 'Monthly Billing (2 solar plants)',
      price: '55',
      priceCurrency: 'ZAR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '55',
        priceCurrency: 'ZAR',
        billingDuration: 'P1M',
      },
      url: REGISTER,
    },
    {
      '@type': 'Offer',
      name: 'Yearly Billing (2 solar plants)',
      price: '549',
      priceCurrency: 'ZAR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '549',
        priceCurrency: 'ZAR',
        billingDuration: 'P1Y',
      },
      url: REGISTER,
    },
  ],
};

export const INSTALLER_APPLICATION = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PVBiz Installer Platform',
  url: `${SITE}/installers/`,
  image: `${SITE}/img/og-card.jpg`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Solar fleet monitoring and O&M',
  operatingSystem: 'Web',
  description: `Multi-brand solar fleet monitoring, alerting, reporting, tariff modelling and analytics for solar installers and O&M teams, across 14+ inverter brands and platforms including ${BRAND_NAMES}.`,
  publisher: { '@type': 'Organization', name: 'PVBiz', url: SITE, logo: `${SITE}/img/pvbiz_logo.png` },
};

export interface Faq {
  q: string;
  a: string;
}

export function faqPage(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
}

/** The six home FAQs, carried from the live site's FAQPage schema. */
export const HOME_FAQ: Faq[] = [
  {
    q: 'What is PVBiz?',
    a: "PVBiz is a solar monitoring solution that provides near real-time insights and smart notifications for solar plants on 14+ inverter brands and platforms, including Sunsynk, Deye, Solarman, Sol-Ark, Solis, Huawei FusionSolar and Solar Assistant. It helps you optimize your solar system's performance and stay informed about its health.",
  },
  {
    q: 'How do I get started with PVBiz?',
    a: 'To get started, simply sign up for a free trial on our platform. Once registered, you can connect your solar plants and start monitoring your system in real-time.',
  },
  {
    q: 'How does PVBiz access my solar plant data?',
    a: 'You need to share your solar plant to allow PVBiz to access your data (only read-only visitor access is required). For Sunsynk, share the plant with admin@pvbiz.co.za. For Solarman or Deye, under your Authorizations, search for PVBiz under businesses and share the plant as a visitor.',
  },
  {
    q: 'What types of notifications does PVBiz provide?',
    a: 'PVBiz provides real-time notifications via email, Telegram, and push notifications through the browser and mobile app. You can customise rules for 10 inverter metrics. WhatsApp notifications are available as an optional add-on through message bundles that can be added to any plan.',
  },
  {
    q: 'Can I use PVBiz with multiple plants?',
    a: 'Yes, PVBiz supports monitoring for multiple plants, even from different solar cloud platforms. PVBiz supports 14+ inverter brands and platforms, such as Sunsynk, Solarman, Deye, Sol-Ark, Solis, Huawei FusionSolar and Solar Assistant. You can add and manage all your plants from a single dashboard.',
  },
  {
    q: 'What happens after my free trial ends?',
    a: 'After your free trial ends, you can choose from our monthly or yearly plans to continue using PVBiz. For custom solutions, please contact us. No data or settings will be lost during the transition.',
  },
];
