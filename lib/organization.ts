export const organization = {
  legalName: 'RAHAT SOCIAL IMPACT FOUNDATION',
  displayName: 'Rahat Social Impact Foundation',
  entityType: 'Section 8 company incorporated under the Companies Act, 2013',
  cin: 'U86909DL2026NPL466630',
  registeredOffice:
    'G 66/7, First Floor, Shaheen Bagh, Abul Fazal Enclave Part 2, Jamia Nagar, New Delhi, Delhi 110025, India',
  website: 'https://www.rahatsocialimpact.com',
  email: 'info@rahatsocialimpact.com',
  phoneDisplay: '+91 9625293030',
  phoneHref: 'tel:+919625293030',
  whatsappHref: 'https://wa.me/919625293030',
  instagram: 'https://www.instagram.com/rahat.social.impact.foundation/',
  linkedin: 'https://www.linkedin.com/company/rahatsocialimpactfoundation/',
  policyEffectiveDate: '12 July 2026',
} as const;

type Director = {
  name: string;
  role: string;
  credentials: string;
  description: string;
  initials: string;
  image: string | null;
  links: ReadonlyArray<{ label: string; href: string }>;
};

export const directors: ReadonlyArray<Director> = [
  {
    name: 'Ramsha Sultan',
    role: 'Director — Campaigns and Social Impact',
    credentials: 'B.Tech, Electronics and Communication Engineering · MBA',
    description:
      'A digital creator and entrepreneur with an audience of millions across YouTube and Instagram and more than 5 billion global impressions. She leads Rahat’s campaign strategy, public awareness and social media work, bringing long-standing philanthropic involvement together with large-scale public communication.',
    initials: 'RS',
    image: null,
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/ramsha.sultan.khan' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramshasultan/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@ramshasultankhan' },
    ],
  },
  {
    name: 'Ateeb Sultan Khan',
    role: 'Director — Policy, Healthcare and Institutional Coordination',
    credentials: 'BBA LL.B. · Advocate',
    description:
      'A law and healthcare-sector professional coordinating Rahat’s hospital-support, patient-mobility and digital-care initiatives. He leads institutional coordination, ground-level execution and the foundation’s volunteer network.',
    initials: 'AK',
    image: null,
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ateeb-sultan-khan-74015a253/' },
    ],
  },
] as const;
