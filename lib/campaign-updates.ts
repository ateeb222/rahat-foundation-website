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
    slug: 'jnmc-wheelchair-handover',
    campaign: 'JNMC Hospital Patient Mobility Initiative',
    status: 'Handover completed',
    title: '80 wheelchairs formally handed over to JNMC Hospital',
    summary: 'Rahat Foundation completed the initiative with the formal handover of 80 wheelchairs to Jawaharlal Nehru Medical College & Hospital, Aligarh Muslim University, Aligarh.',
    date: '14 August 2026',
  },
  {
    slug: 'wheelchair-quality-review',
    campaign: 'JNMC Hospital Patient Mobility Initiative',
    status: 'Procurement and preparation',
    title: 'Wheelchairs reviewed during campaign preparation',
    summary: 'Rahat Foundation reviewed wheelchair preparation before the completed initiative\'s formal handover on 14 August 2026.',
    date: 'July 2026',
    image: '/images/wheelchair/factory-visit.jpeg',
    imageAlt: 'Rahat Foundation representative reviewing wheelchairs during campaign preparation',
    instagramUrl: 'https://www.instagram.com/rahat.social.impact.foundation/',
  },
];
