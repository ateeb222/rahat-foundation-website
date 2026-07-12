import { createHmac, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';

function safeEqual(left: string, right: string) {
  const a = new Uint8Array(Buffer.from(left));
  const b = new Uint8Array(Buffer.from(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_KEY_SECRET?.trim();
  if (!secret) return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 });
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const paymentId = typeof body?.razorpay_payment_id === 'string' ? body.razorpay_payment_id : '';
  const subscriptionId = typeof body?.razorpay_subscription_id === 'string' ? body.razorpay_subscription_id : '';
  const signature = typeof body?.razorpay_signature === 'string' ? body.razorpay_signature : '';
  if (!paymentId || !subscriptionId || !signature) return NextResponse.json({ error: 'Incomplete mandate response.' }, { status: 400 });
  const expected = createHmac('sha256', secret).update(`${paymentId}|${subscriptionId}`).digest('hex');
  if (!safeEqual(expected, signature)) return NextResponse.json({ error: 'Mandate verification failed.' }, { status: 400 });
  return NextResponse.json({ success: true, paymentId, subscriptionId });
}
