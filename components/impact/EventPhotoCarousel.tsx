'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { EventPhoto } from '@/lib/jnmc-handover-media';

type EventPhotoCarouselProps = {
  photos: readonly EventPhoto[];
  ariaLabel: string;
  autoplayIntervalMs?: number;
  imageSizes?: string;
};

export function EventPhotoCarousel({
  photos,
  ariaLabel,
  autoplayIntervalMs,
  imageSizes = '(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)',
}: EventPhotoCarouselProps) {
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

  const activePhoto = photos[activeIndex] ?? photos[0]!;

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
            <div
              className="flex w-full max-h-[72svh] items-center justify-center bg-[#F1F3F2] p-1.5 sm:p-2"
              style={{ aspectRatio: `${activePhoto.width} / ${activePhoto.height}` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                preload={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                sizes={imageSizes}
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 sm:text-[15px]">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous photo"
            title="Previous photo"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#07361F] bg-white text-xl font-bold text-[#07361F] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <p aria-live="polite" className="text-sm font-bold text-slate-700">
              {activeIndex + 1} / {photos.length}
            </p>
            <div
              className="grid w-full max-w-sm gap-1"
              style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {photos.map((photo, index) => (
                <span
                  key={photo.src}
                  className={`h-1.5 rounded-full ${activeIndex === index ? 'bg-[#07361F]' : 'bg-[#B9C7C0]'}`}
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
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#07361F] bg-white text-xl font-bold text-[#07361F] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </section>
  );
}
