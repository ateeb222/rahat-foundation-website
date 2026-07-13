export type CampaignUpdate = {
  slug: string;
  campaign: string;
  status: 'Fundraising in progress' | 'Procurement and preparation' | 'Handover completed';
  title: string;
  summary: string;
  date: string;
  image?: string;
  imageAlt?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
};

// Add approved campaign photographs, Instagram posts and YouTube links here.
// The public layout adapts automatically without requiring a new page design.
export const campaignUpdates: CampaignUpdate[] = [
  {
    slug: 'wheelchair-quality-review',
    campaign: 'JNMC Hospital Patient Mobility Initiative',
    status: 'Procurement and preparation',
    title: 'Wheelchairs reviewed during campaign preparation',
    summary: 'Rahat reviewed wheelchair preparation as the community-funded campaign progresses towards its formal handover stage.',
    date: 'July 2026',
    image: '/images/wheelchair/factory-visit.jpeg',
    imageAlt: 'Rahat representative reviewing wheelchairs during campaign preparation',
    instagramUrl: 'https://www.instagram.com/rahat.social.impact.foundation/',
  },
];
