export type EventPhoto = Readonly<{
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}>;

export const jnmcWheelchairHandoverPhotos: readonly EventPhoto[] = [
  {
    src: '/images/impact/jnmc-wheelchair-handover-2026/event/rahat-foundation-jnmc-amu-handover-ceremony-2026.jpg',
    alt: 'Formal presentation of a commemorative plaque during the JNMC wheelchair handover ceremony',
    width: 2400,
    height: 1600,
  },
  {
    src: '/images/impact/jnmc-wheelchair-handover-2026/event/rahat-foundation-wheelchair-handover-officials-jnmc-2026.jpg',
    alt: 'Officials displaying a certificate of appreciation during the JNMC wheelchair handover ceremony',
    width: 2400,
    height: 1600,
  },
  {
    src: '/images/impact/jnmc-wheelchair-handover-2026/event/rahat-foundation-jnmc-wheelchair-handover-group-photo-2026.jpg',
    alt: 'Officials seated beneath the wheelchair donation and handover ceremony banner at JNMC Hospital',
    width: 2400,
    height: 1437,
  },
];
