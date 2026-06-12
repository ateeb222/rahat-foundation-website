'use client';

import { useState } from 'react';

type CopyButtonProps = {
  value: string;
  label?: string;
  className?: string;
  ariaLabel?: string;
};

type CopyState = 'idle' | 'copied' | 'manual';

export function CopyButton({ value, label = 'Copy', className = '', ariaLabel }: CopyButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function handleCopy() {
    let success = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.setAttribute('aria-hidden', 'true');
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '-9999px';
      textarea.style.width = '1px';
      textarea.style.height = '1px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);

      try {
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, value.length);
        success = document.execCommand('copy');
      } catch {
        success = false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    if (success) {
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 1800);
      return;
    }

    setCopyState('manual');
  }

  return (
    <span className="block">
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-[0_10px_22px_rgba(7,54,31,0.22)] transition hover:-translate-y-0.5 hover:bg-[#25472D] hover:shadow-[0_14px_28px_rgba(7,54,31,0.28)] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 active:translate-y-0 active:bg-[#07361F] ${className}`}
        aria-label={ariaLabel ?? `${label} to clipboard`}
        aria-live="polite"
      >
        {copyState === 'copied' ? 'Copied' : copyState === 'manual' ? 'Copy manually' : label}
      </button>
      {copyState === 'manual' ? (
        <span className="mt-2 block text-sm font-semibold leading-5 text-[#7A5D13]" role="status" aria-live="polite">
          Your browser blocked auto-copy. Long press and copy manually.
        </span>
      ) : null}
    </span>
  );
}
