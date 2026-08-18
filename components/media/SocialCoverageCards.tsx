'use client';

import { useState } from 'react';

import type { SocialCoverage } from '@/lib/media-coverage';

type SocialCoverageCardsProps = {
  items: readonly SocialCoverage[];
};

function SocialCoverageCard({ item }: { item: SocialCoverage }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const label = `${item.platform} ${item.type}`;

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">{item.platform}</p>
        <h3 className="mt-2 text-xl font-bold text-[#07361F]">{label}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Open the original {item.type.toLowerCase()} on {item.platform}.
        </p>
        <div className="mt-4 flex flex-col gap-2 min-[420px]:flex-row">
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#07361F] px-4 py-2.5 font-bold text-white"
          >
            View post
          </a>
          {item.embedUrl && !showEmbed && (
            <button
              type="button"
              onClick={() => setShowEmbed(true)}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[#07361F] bg-white px-4 py-2.5 font-bold text-[#07361F]"
            >
              Load post here
            </button>
          )}
        </div>
      </div>

      {item.embedUrl && showEmbed && (
        <div className="border-t border-slate-200 bg-[#F1F3F2] p-2">
          <iframe
            src={item.embedUrl}
            title={`${label} embedded coverage`}
            loading="lazy"
            className="h-[590px] w-full border-0 bg-white sm:h-[650px]"
            allow="encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}
    </article>
  );
}

export function SocialCoverageCards({ items }: SocialCoverageCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <SocialCoverageCard key={`${item.platform}-${item.type}-${index}`} item={item} />
      ))}
    </div>
  );
}
