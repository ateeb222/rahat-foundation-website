'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { MediaClipping } from '@/lib/media-coverage';

type MediaClippingGalleryProps = {
  items: readonly MediaClipping[];
};

export function MediaClippingGallery({ items }: MediaClippingGalleryProps) {
  const [activeItem, setActiveItem] = useState<MediaClipping | null>(null);

  useEffect(() => {
    if (!activeItem) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveItem(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeItem]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="flex min-h-[260px] w-full items-center justify-center bg-[#F1F3F2] p-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C8951A] sm:min-h-[300px]"
              aria-label={`Open larger view of ${item.outlet ?? item.language + ' newspaper'} clipping`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 46vw, calc(100vw - 56px)"
                className="h-auto max-h-[360px] w-auto max-w-full object-contain"
              />
            </button>
            <div className="border-t border-slate-200 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#3B635D]">
                {item.outlet ?? `${item.language} newspaper clipping`}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.caption}</p>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="mt-3 inline-flex min-h-[44px] items-center font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4"
              >
                View readable clipping
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.outlet ?? activeItem.language + ' newspaper'} clipping viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveItem(null);
          }}
        >
          <div className="flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-bold text-[#07361F]">
                  {activeItem.outlet ?? `${activeItem.language} newspaper clipping`}
                </p>
                <p className="text-xs text-slate-500">Original dimensions: {activeItem.width} × {activeItem.height}px</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-2xl text-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#C8951A]"
                aria-label="Close clipping viewer"
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="overflow-auto bg-[#E7E9E8] p-3 sm:p-5">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                sizes={`${activeItem.width}px`}
                className="mx-auto h-auto w-auto max-w-none bg-white object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-200 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="leading-6 text-slate-600">Scroll within the viewer to inspect the clipping at its native resolution.</p>
              <a
                href={activeItem.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] shrink-0 items-center font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4"
              >
                Open original image
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
