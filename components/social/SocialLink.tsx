type SocialPlatform = 'instagram' | 'linkedin' | 'youtube';

type SocialLinkProps = {
  platform: SocialPlatform;
  href: string;
  label?: string;
  className?: string;
};

const platformLabel: Record<SocialPlatform, string> = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === 'instagram') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>;
  }
  if (platform === 'linkedin') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor"><path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.9c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.8H8.8V22h3.6v-7c0-1.8.4-3.6 2.7-3.6 2.2 0 2.3 2.1 2.3 3.7V22H22v-8.1Z"/></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>;
}

export function SocialLink({ platform, href, label, className = '' }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 ${className}`} aria-label={`${label || platformLabel[platform]} — opens in a new tab`}>
      <SocialIcon platform={platform} />
      <span>{label || platformLabel[platform]}</span>
    </a>
  );
}
