import { NextResponse } from 'next/server';

const allowedPurposes = new Set([
  'Wheelchair Sadaqah',
  'General Sadaqah',
  'Interest / Riba Disposal',
  'Stretcher Support',
  'Hospital Digitisation',
  'Computer Support',
]);

export async function POST(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

  if (!keyId || !keySecret) {
    return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { amount?: unknown; purpose?: unknown } | null;
  const amount = typeof body?.amount === 'number' ? body.amount : Number(body?.amount);
  const purpose = typeof body?.purpose === 'string' ? body.purpose.trim() : '';

  if (!Number.isInteger(amount) || amount < 10 || amount > 500000) {
    return NextResponse.json({ error: 'Enter an amount between ₹10 and ₹5,00,000.' }, { status: 400 });
  }

  if (!allowedPurposes.has(purpose)) {
    return NextResponse.json({ error: 'Select a valid donation purpose.' }, { status: 400 });
  }

  const receipt = `rahat_${Date.now()}`;
  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: amount * 100,
      currency: 'INR',
      receipt,
      notes: { purpose, source: 'rahatsocialimpact.com' },
    }),
    cache: 'no-store',
  });

  const result = (await response.json().catch(() => null)) as { id?: string; amount?: number; currency?: string; error?: { description?: string } } | null;

  if (!response.ok || !result?.id) {
    return NextResponse.json(
      { error: result?.error?.description || 'Unable to start Razorpay checkout.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ orderId: result.id, amount: result.amount, currency: result.currency, keyId });
}
