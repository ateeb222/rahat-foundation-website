
# Rahat Website — Design Guidelines

## Purpose
Design rules for the Rahat Social Impact Foundation website. These guidelines ensure the site feels premium, healthcare-focused, trust-first, mobile-first, professional, modern, and accessible.

## Visual Tone & Principles
- Premium and institutional — confident, restrained, and credible.
- Healthcare-first — clinical clarity, empathy, and patient-centric language.
- Trust-first — visible transparency signals, clear provenance, and evidence of impact.
- Mobile-first — layouts and interaction patterns prioritize small screens.
- Modern & professional — current UI patterns, clear hierarchy, minimal ornament.
- Accessible — WCAG AA minimum, semantic markup, keyboard-first interactions.

## Avoid
- Generic NGO templates or overtly "startup" aesthetics
- Excessive gradients, glassmorphism, and heavy animations
- Cluttered layouts, competing CTAs, and dense information without hierarchy

## Focus Areas
- Strong typography and readable type scale
- Generous, consistent whitespace and spacing system
- Clear CTA hierarchy (primary, secondary, tertiary)
- Institutional credibility: partner badges, reports, registration
- Transparency: easy access to financials, governance, and policies

## Brand Colors (from project guidelines)
- Primary: `#1A4D2E` — use for primary CTAs, headers, and brand accents
- Secondary: `#2A7A45` — use for supportive accents and secondary CTAs
- Accent: `#C8951A` — sparing use for highlights, links, and intent markers
- Background: `#F8F5EF` — primary page background and card backgrounds
- Text: `#1F2937` — primary body text

Suggested CSS custom properties / Tailwind tokens:
- `--color-primary: #1A4D2E`
- `--color-secondary: #2A7A45`
- `--color-accent: #C8951A`
- `--color-bg: #F8F5EF`
- `--color-text: #1F2937`

## Typography
- Use a neutral, highly legible type family pairing: a humanist sans for UI and a clear serif or neutral sans for headings if needed.
- Scale (mobile-first):
	- H1: 28–32px (mobile), 40–48px (desktop)
	- H2: 22–26px (mobile), 32–36px (desktop)
	- H3: 18–20px
	- Body: 16px (line-height 1.5)
	- Small/captions: 12–14px
- Weight: Use medium (500) / semibold (600) for headings and strong labels; regular (400) for body.

## Spacing & Layout
- Mobile-first responsive grid with generous gutters and consistent rhythm.
- Base spacing unit: 8px. Use multiples for margins/padding (8, 12, 16, 24, 32, 40...).
- Whitespace > decoration: prefer breathing room over added visuals.
- Max content width for long text: 680–780px for improved readability on wide viewports.

## CTA Hierarchy
- Primary CTA: solid `--color-primary`, high contrast, prominent placement (hero, donation strip).
- Secondary CTA: outline or `--color-secondary` background for supportive actions.
- Tertiary: text links or subtle ghost buttons.
- Limit CTAs per view to 1–2 clear actions; avoid equal-weight CTAs.

## Imagery & Photography
- Use authentic, high-quality photos of healthcare contexts: hospitals, caregivers, patients (consent-compliant), volunteers in action.
- Prefer natural lighting, muted color grading, and subtle desaturation to match palette.
- Avoid clichéd NGO stock imagery, overly polished lifestyle shots, or abstract startup imagery.

## Components & Patterns
- Header: compact, sticky on desktop optional; mobile nav with clear close/escape affordance.
- Trust strip: compact band near top with partner logos, registration link, or impact metrics.
- Card surfaces: subtle shadows or borders on `--color-bg`; keep components airy.
- Forms: single-column, labelled fields, inline validation, clear success states.
- Tables/reports: accessible markup, sortable columns, clear export/print affordances.

## Motion & Interaction
- Keep motion subtle and purposeful: micro-interactions for state changes, gentle fades/transitions (150–200ms).
- Avoid large parallax, rotating elements, or long animated backgrounds.

## Accessibility Requirements
- Minimum WCAG AA contrast across body text and interactive elements.
- All images must have descriptive `alt` text; decorative images use empty `alt=""`.
- Ensure keyboard focus states and visible focus rings for interactive controls.
- Forms: associate `label` with inputs, provide clear error messages and ARIA where needed.
- Test with screen readers and keyboard-only navigation regularly.

## Content & Tone
- Tone: factual, empathetic, mission-centered, and evidence-based. Avoid sensationalized appeals.
- CTAs: outcome-oriented and specific (e.g., "Support medical transport" vs "Donate now").

## Implementation Notes (developer-friendly)
- Tailwind tokens: expose colors as `theme.colors.rahat.primary` etc., and map spacing to the 8px scale.
- Use CSS variables to allow design/brand updates without refactors.
- Mobile-first breakpoints: base → `sm` (≥640px) → `md` (≥768px) → `lg` (≥1024px).

## Do / Don't Quick Guide
- Do: strong left-aligned headings, one clear primary CTA, partner logos with context.
- Don't: use gradient hero backgrounds, multiple competing CTAs, or heavy decorative flourishes.

## QA Checklist (pre-release)
- Mobile-first checks at small, medium, large widths.
- Color contrast tests for all text and CTAs.
- Keyboard and screen-reader walkthroughs of key flows (donate, volunteer, contact).
- Verify brand color tokens match `PROJECT_GUIDELINES.md`.

## Governance
- Design approvals: product owner + director.
- Update process: merge changes to `PROJECT_DESIGN_GUIDELINES.md` with version note and date.

---
Revision: 2026-06-04

