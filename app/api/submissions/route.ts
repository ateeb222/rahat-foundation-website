import { NextResponse } from 'next/server';

type SubmissionType = 'donation' | 'volunteer' | 'contact';

const validTypes = new Set<SubmissionType>(['donation', 'volunteer', 'contact']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function validatePayload(payload: unknown) {
  if (!isRecord(payload)) {
    return { ok: false as const, error: 'Invalid submission payload.' };
  }

  const type = cleanString(payload.type) as SubmissionType;

  if (!validTypes.has(type)) {
    return { ok: false as const, error: 'Invalid submission type.' };
  }

  const data = payload.data;

  if (!isRecord(data)) {
    return { ok: false as const, error: 'Invalid submission data.' };
  }

  return { ok: true as const, type, data };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_WEB_APP_URL;
  const submissionSecret = process.env.FORM_SUBMISSION_SECRET;

  if (!appsScriptUrl || !submissionSecret) {
    return NextResponse.json(
      { success: false, error: 'Form backend is not configured.' },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: validation.type,
        data: validation.data,
        secret: submissionSecret,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: 'Submission service is temporarily unavailable.' },
        { status: 502 },
      );
    }

    const result = (await response.json().catch(() => null)) as unknown;

    if (!isRecord(result) || result.success !== true) {
      return NextResponse.json(
        { success: false, error: 'Submission could not be saved.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      submissionId: typeof result.submissionId === 'string' ? result.submissionId : undefined,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Submission service is temporarily unavailable.' },
      { status: 502 },
    );
  }
}
