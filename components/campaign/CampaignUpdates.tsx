import Image from 'next/image';
import { campaignUpdates } from '@/lib/campaign-updates';
import { SocialLink } from '@/components/social/SocialLink';

export function CampaignUpdates() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {campaignUpdates.map((update) => (
        <article key={update.slug} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
          {update.image && update.imageAlt && (
            <div className="bg-[#EAF3E2]">
              <Image src={update.image} alt={update.imageAlt} width={1082} height={1916} className="h-auto w-full object-contain" sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw" />
            </div>
          )}
          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide">
              <span className="text-[#3B635D]">{update.status}</span>
              <time className="text-slate-500">{update.date}</time>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">{update.campaign}</p>
            <h3 className="mt-2 text-xl font-bold leading-tight text-[#07361F]">{update.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">{update.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-[#07361F]">
              {update.instagramUrl && <SocialLink platform="instagram" href={update.instagramUrl} label="View on Instagram" className="underline decoration-[#C8951A] underline-offset-4" />}
              {update.youtubeUrl && <SocialLink platform="youtube" href={update.youtubeUrl} label="Watch video" className="underline decoration-[#C8951A] underline-offset-4" />}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
