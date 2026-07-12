import { createHmac, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_KEY_SECRET?.trim();
  if (!secret) return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 });

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const orderId = typeof body?.razorpay_order_id === 'string' ? body.razorpay_order_id : '';
  const paymentId = typeof body?.razorpay_payment_id === 'string' ? body.razorpay_payment_id : '';
  const signature = typeof body?.razorpay_signature === 'string' ? body.razorpay_signature : '';

  if (!orderId || !paymentId || !signature) {
    return NextResponse.json({ error: 'Incomplete payment response.' }, { status: 400 });
  }

  const expected = createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest('hex');
  if (!safeEqual(expected, signature)) {
    return NextResponse.json({ error: 'Payment signature verification failed.' }, { status: 400 });
  }

  return NextResponse.json({ success: true, orderId, paymentId });
}
