import Link from 'next/link';

import { donationConfig, phase2CampaignProgress } from '@/lib/donation-config';

type WheelchairPhase2CampaignProps = {
  compact?: boolean;
  headingLevel?: 'h2' | 'h3';
};

const sponsorHref = '/donate?type=one-time&amount=5800&purpose=wheelchair-phase-2';

export function WheelchairPhase2Campaign({
  compact = false,
  headingLevel = 'h2',
}: WheelchairPhase2CampaignProps) {
  const campaign = donationConfig.phase2Campaign;
  const Heading = headingLevel;
  const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

  return (
    <section
      aria-labelledby={compact ? 'phase-2-donate-heading' : 'phase-2-campaign-heading'}
      className={
        compact
          ? 'border-b border-[#D9A441]/30 bg-[#F1F7EE] px-4 py-5 sm:px-6'
          : 'border border-[#D9A441]/40 bg-white p-5 shadow-[0_14px_38px_rgba(7,54,31,0.08)] sm:rounded-lg sm:p-7'
      }
    >
      <div className={compact ? '' : 'grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center'}>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">
            Phase 2 · Active
          </p>
          <Heading
            id={compact ? 'phase-2-donate-heading' : 'phase-2-campaign-heading'}
            className={`${compact ? 'mt-2 text-xl sm:text-2xl' : 'mt-3 text-2xl sm:text-4xl'} font-bold leading-tight text-[#07361F]`}
          >
            {campaign.title}
          </Heading>
          <p className={`${compact ? 'mt-2 text-sm leading-6' : 'mt-3 text-base leading-7'} text-slate-700`}>
            After completing our first 80-wheelchair initiative, Rahat Social Impact Foundation has opened Phase 2 of its patient mobility programme. Our next goal is to mobilise support for 50 additional wheelchairs.
          </p>
        </div>

        <div className={compact ? 'mt-4' : ''}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#07361F]">50 Wheelchairs Required</p>
              <p className="mt-1 text-2xl font-bold text-[#07361F]">
                {campaign.fundedUnits} / {campaign.goalUnits}{' '}
                <span className="text-sm font-semibold text-slate-600">sponsored</span>
              </p>
            </div>
            <p className="shrink-0 text-sm font-bold text-[#3B635D]">
              {phase2CampaignProgress.progressPercentage}% complete
            </p>
          </div>
          <div
            className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={campaign.goalUnits}
            aria-valuenow={campaign.fundedUnits}
            aria-label={`Phase 2 wheelchair sponsorship progress: ${campaign.fundedUnits} of ${campaign.goalUnits} wheelchairs sponsored`}
          >
            <div
              className="h-full rounded-full bg-[#2A7A45]"
              style={{ width: `${phase2CampaignProgress.progressPercentage}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm font-semibold text-slate-700">
            <span>{formatCurrency(campaign.unitCost)} sponsors one wheelchair</span>
            <span>Goal: {formatCurrency(campaign.goalAmount)}</span>
          </div>
          <Link
            href={sponsorHref}
            className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-center text-base font-bold text-white shadow-lg transition hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:w-auto"
          >
            Sponsor a wheelchair — ₹5,800
          </Link>
        </div>
      </div>
    </section>
  );
}
