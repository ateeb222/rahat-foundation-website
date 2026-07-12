export const sadaqahPlans = [
  { amount: 100, daily: '₹3/day', name: 'Start Small', planId: 'plan_TCX8VCsYLrB76Z' },
  { amount: 300, daily: '₹10/day', name: 'Regular Sadaqah', planId: 'plan_TCX7z3N8FrlsRy', recommended: true },
  { amount: 600, daily: '₹20/day', name: 'Patient Mobility Support', planId: 'plan_TCX9aDxi0bEchm' },
  { amount: 1100, daily: '₹36/day', name: 'Sustaining Support', planId: 'plan_TCXA9nzk092xGs' },
  { amount: 1500, daily: '₹50/day', name: 'Extended Support', planId: 'plan_TCYiJ40NQdN1oe', secondary: true },
  { amount: 5000, daily: '₹164/day', name: 'Healthcare Partner', planId: 'plan_TCYjr8pyBvJn51', secondary: true },
  { amount: 10000, daily: '₹329/day', name: 'Healthcare Partner Plus', planId: 'plan_TCYkMbrUprlbO2', secondary: true },
] as const;

export const planById: ReadonlyMap<string, (typeof sadaqahPlans)[number]> = new Map(
  sadaqahPlans.map((plan) => [plan.planId, plan]),
);
