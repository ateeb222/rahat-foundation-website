export type MediaClipping = Readonly<{
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  outlet?: string;
  language: 'Hindi' | 'Urdu';
}>;

export type OnlineCoverage = Readonly<{
  source: string;
  category: 'Institutional coverage' | 'Online coverage';
  title: string;
  date: string;
  url: string;
}>;

export type SocialCoverage = Readonly<{
  platform: 'Instagram' | 'Facebook';
  type: 'Post' | 'Reel' | 'Video';
  url: string;
  embedUrl?: string;
}>;

export const onlineCoverage: readonly OnlineCoverage[] = [
  {
    source: 'Aligarh Muslim University',
    category: 'Institutional coverage',
    title: 'Rahat Social Impact Foundation donates wheelchairs to JNMC, AMU',
    date: '14 August 2026',
    url: 'https://www.amu.ac.in/news/2026/08/14/rahat-social-impact-foundation-donates-wheelchairs-to-jnmc-amu',
  },
  {
    source: 'India Education Diary',
    category: 'Online coverage',
    title: 'Rahat Social Impact Foundation donates wheelchairs to JNMC, AMU',
    date: '14 August 2026',
    url: 'https://indiaeducationdiary.in/rahat-social-impact-foundation-donates-wheelchairs-to-jnmc-amu/',
  },
  {
    source: 'Hindusthan Samachar',
    category: 'Online coverage',
    title: 'Coverage of the JNMC wheelchair handover programme',
    date: '14 August 2026',
    url: 'https://urdu.hindusthansamachar.in//Encyc/2026/8/14/Rahat-Social-Impact-Foundation.php',
  },
];

export const mediaClippings: readonly MediaClipping[] = [
  {
    id: 'dainik-ruhela-times',
    src: '/images/impact/jnmc-wheelchair-handover-2026/media/rahat-foundation-80-wheelchairs-jnmc-amu-handover-2026.jpg',
    alt: 'Hindi newspaper clipping about the handover of 80 wheelchairs at JNMC Hospital',
    width: 996,
    height: 1472,
    caption: 'Hindi newspaper coverage of the handover of 80 wheelchairs at JNMC Hospital.',
    outlet: 'Dainik Ruhela Times, Rampur',
    language: 'Hindi',
  },
  {
    id: 'inquilab',
    src: '/images/impact/jnmc-wheelchair-handover-2026/media/rahat-foundation-patient-mobility-initiative-jnmc-amu-2026.jpg',
    alt: 'Inquilab newspaper clipping about the JNMC wheelchair handover programme',
    width: 1080,
    height: 1073,
    caption: 'Urdu newspaper coverage of the JNMC wheelchair handover programme.',
    outlet: 'Inquilab',
    language: 'Urdu',
  },
  {
    id: 'hindustan',
    src: '/images/impact/jnmc-wheelchair-handover-2026/media/rahat-foundation-wheelchair-donation-jnmc-amu-aligarh-2026.jpg',
    alt: 'Hindustan newspaper clipping reporting the handover of 80 wheelchairs to JNMC',
    width: 677,
    height: 710,
    caption: 'Hindi newspaper coverage reporting the handover of 80 wheelchairs to JNMC.',
    outlet: 'Hindustan',
    language: 'Hindi',
  },
  {
    id: 'urdu-newspaper-clipping',
    src: '/images/impact/jnmc-wheelchair-handover-2026/media/rahat-foundation-wheelchair-event-jnmc-amu-aligarh-2026.jpg',
    alt: 'Urdu newspaper clipping about the JNMC wheelchair handover programme',
    width: 1027,
    height: 1372,
    caption: 'Urdu newspaper coverage of the JNMC wheelchair handover programme.',
    language: 'Urdu',
  },
];

export const socialCoverage: readonly SocialCoverage[] = [
  {
    platform: 'Instagram',
    type: 'Post',
    url: 'https://www.instagram.com/p/DcBCgIPGlzo/?igsh=MWZ3ZTBmNmtza2QwdQ==',
    embedUrl: 'https://www.instagram.com/p/DcBCgIPGlzo/embed/',
  },
  {
    platform: 'Instagram',
    type: 'Reel',
    url: 'https://www.instagram.com/reel/DcBCUEZqzEE/?igsh=Z3hyamFqbXN5dHoy',
    embedUrl: 'https://www.instagram.com/reel/DcBCUEZqzEE/embed/',
  },
  {
    platform: 'Instagram',
    type: 'Post',
    url: 'https://www.instagram.com/p/DcCGb6gEiqY/?igsh=M21vOW5qdHc0Nnpx',
    embedUrl: 'https://www.instagram.com/p/DcCGb6gEiqY/embed/',
  },
  {
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/p/1AUtH6hjj5/',
  },
  {
    platform: 'Facebook',
    type: 'Video',
    url: 'https://www.facebook.com/share/v/19767TyurP/',
  },
  {
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/1GnH5bEaDo/',
  },
];
