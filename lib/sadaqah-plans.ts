export const sadaqahPlans = [
  { amount: 100, daily: 'about ₹3.30/day', name: 'Start Small', planId: 'plan_TCX8VCsYLrB76Z' },
  { amount: 300, daily: 'about ₹10/day', name: 'Regular Sadaqah', planId: 'plan_TCX7z3N8FrlsRy', recommended: true },
  { amount: 600, daily: 'about ₹20/day', name: 'Patient Mobility Support', planId: 'plan_TCX9aDxi0bEchm' },
  { amount: 1100, daily: 'about ₹36/day', name: 'Sustaining Support', planId: 'plan_TCXA9nzk092xGs' },
  { amount: 1500, daily: 'about ₹50/day', name: 'Extended Support', planId: 'plan_TCYiJ40NQdN1oe', secondary: true },
  { amount: 5000, daily: 'about ₹164/day', name: 'Healthcare Partner', planId: 'plan_TCYjr8pyBvJn51', secondary: true },
  { amount: 10000, daily: 'about ₹329/day', name: 'Healthcare Partner Plus', planId: 'plan_TCYkMbrUprlbO2', secondary: true },
] as const;

export const planById: ReadonlyMap<string, (typeof sadaqahPlans)[number]> = new Map(
  sadaqahPlans.map((plan) => [plan.planId, plan]),
);
