export type SubmissionType = 'donation' | 'volunteer' | 'contact';
export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export async function submitWebsiteForm(type: SubmissionType, data: Record<string, string | boolean>) {
  const response = await fetch('/api/submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type, data }),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    error?: string;
  } | null;

  if (!response.ok || result?.success !== true) {
    throw new Error(result?.error || 'Submission failed. Please try again.');
  }
}
