import { NextResponse } from 'next/server';
import { planById } from '@/lib/sadaqah-plans';

function nextStartAt(day: number) {
  const istNow = new Date(Date.now() + 330 * 60 * 1000);
  let year = istNow.getUTCFullYear();
  let month = istNow.getUTCMonth();
  if (day <= istNow.getUTCDate()) {
    month += 1;
    if (month > 11) { month = 0; year += 1; }
  }
  return Math.floor(Date.UTC(year, month, day, 3, 30, 0) / 1000);
}

export async function POST(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();
  if (!keyId || !keySecret) return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 });
  const body = (await request.json().catch(() => null)) as { planId?: unknown; startDay?: unknown } | null;
  const planId = typeof body?.planId === 'string' ? body.planId : '';
  const plan = planById.get(planId);
  if (!plan) return NextResponse.json({ error: 'Select a valid monthly plan.' }, { status: 400 });
  const startDay = body?.startDay === 'immediate' ? 'immediate' : Number(body?.startDay);
  if (startDay !== 'immediate' && ![1, 5, 10, 15].includes(startDay)) return NextResponse.json({ error: 'Select a valid monthly debit date.' }, { status: 400 });
  const payload: Record<string, unknown> = {
    plan_id: plan.planId,
    total_count: 120,
    customer_notify: true,
    notes: { source: 'rahatsocialimpact.com/sadaqah', monthly_amount: String(plan.amount), purpose: 'Monthly Sadaqah' },
  };
  if (startDay !== 'immediate') payload.start_at = nextStartAt(startDay);
  const response = await fetch('https://api.razorpay.com/v1/subscriptions', {
    method: 'POST',
    headers: { Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });
  const result = (await response.json().catch(() => null)) as { id?: string; start_at?: number; error?: { description?: string } } | null;
  if (!response.ok || !result?.id) return NextResponse.json({ error: result?.error?.description || 'Unable to create the monthly mandate.' }, { status: 502 });
  return NextResponse.json({ subscriptionId: result.id, keyId, amount: plan.amount, startAt: result.start_at || null });
}
