'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { EventPhoto } from '@/lib/jnmc-handover-media';

type EventPhotoCarouselProps = {
  photos: readonly EventPhoto[];
  ariaLabel: string;
  autoplayIntervalMs?: number;
};

export function EventPhotoCarousel({ photos, ariaLabel, autoplayIntervalMs }: EventPhotoCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  const goToSlide = useCallback((index: number, userInitiated = true) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextIndex = Math.max(0, Math.min(index, photos.length - 1));
    viewport.scrollTo({
      left: nextIndex * viewport.clientWidth,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    setActiveIndex(nextIndex);
    if (userInitiated) setHasInteracted(true);
  }, [photos.length, prefersReducedMotion]);

  useEffect(() => {
    if (
      !autoplayIntervalMs ||
      photos.length < 2 ||
      prefersReducedMotion ||
      hasInteracted ||
      isHovered ||
      isFocusedWithin
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
      goToSlide(nextIndex, false);
    }, autoplayIntervalMs);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplayIntervalMs, goToSlide, hasInteracted, isFocusedWithin, isHovered, photos.length, prefersReducedMotion]);

  if (photos.length === 0) {
    return null;
  }

  function updateActiveSlide() {
    const viewport = viewportRef.current;
    if (!viewport || viewport.clientWidth === 0) return;

    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, photos.length - 1)));
  }

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="w-full max-w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusedWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusedWithin(false);
      }}
    >
      <div
        ref={viewportRef}
        onScroll={updateActiveSlide}
        onPointerDown={() => setHasInteracted(true)}
        onKeyDown={() => setHasInteracted(true)}
        className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-lg border border-slate-200 bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            aria-label={`Photo ${index + 1} of ${photos.length}`}
            aria-roledescription="slide"
            className="w-full min-w-full snap-center"
          >
            <div className="flex min-h-[260px] items-center justify-center bg-[#F1F3F2] p-2 sm:min-h-[480px] sm:p-4">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="h-auto max-h-[78svh] w-auto max-w-full object-contain"
              />
            </div>
            <figcaption className="min-h-[72px] border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous photo"
            title="Previous photo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#07361F] bg-white text-xl font-bold text-[#07361F] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <p aria-live="polite" className="text-xs font-bold text-slate-600">
              Photo {activeIndex + 1} of {photos.length}
            </p>
            <div className="flex max-w-full flex-wrap justify-center gap-2" aria-label="Choose a photo">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`h-2.5 w-2.5 rounded-full border border-[#07361F] ${activeIndex === index ? 'bg-[#07361F]' : 'bg-white'}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === photos.length - 1}
            aria-label="Next photo"
            title="Next photo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#07361F] bg-white text-xl font-bold text-[#07361F] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </section>
  );
}
