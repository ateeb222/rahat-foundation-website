import type { Metadata } from 'next';
import { PolicyPage } from '@/components/legal/PolicyPage';
import { organization } from '@/lib/organization';

export const metadata: Metadata = {
  title: 'Cancellation and Refund',
  description: 'Cancellation of recurring donations and refund handling for donations to Rahat Social Impact Foundation.',
};

export default function CancellationAndRefundPage() {
  return (
    <PolicyPage
      eyebrow="Donation support"
      title="Cancellation and Refund Policy"
      summary="This policy explains how to stop future recurring debits and how Rahat Foundation reviews duplicate, mistaken, unauthorised, or technically incorrect donation payments."
    >
      <h2>1. One-time donations</h2>
      <p>
        A successfully processed voluntary donation is generally final because Rahat Foundation may begin allocating or committing funds to the stated charitable purpose after reconciliation. A change of mind alone does not automatically create a right to a refund.
      </p>

      <h2>2. Circumstances in which a refund may be reviewed</h2>
      <p>Rahat Foundation may consider a refund request where there is credible evidence of:</p>
      <ul>
        <li>A duplicate debit for the same intended donation.</li>
        <li>An incorrect amount caused by a clear entry or payment-processing error.</li>
        <li>An unauthorised transaction reported promptly by the account holder.</li>
        <li>A successful debit where Rahat Foundation cannot accept the contribution under applicable law or its domestic-donation restrictions.</li>
        <li>A technical failure that resulted in an unintended completed payment.</li>
        <li>Cancellation of a restricted campaign before the relevant funds have been utilised or irrevocably committed, where refunding is feasible and appropriate.</li>
      </ul>

      <h2>3. How to request review</h2>
      <p>
        Contact Rahat Foundation as soon as possible, preferably within seven calendar days of the transaction, at{' '}
        <a href={`mailto:${organization.email}`}>{organization.email}</a> or through the official contact page. Include the donor name, mobile number, payment date, amount, transaction or UTR reference, payment method, reason for the request, and supporting bank or payment evidence. Do not send a UPI PIN, OTP, CVV, internet-banking password, or full card details.
      </p>

      <h2>4. Review and decision</h2>
      <p>
        Rahat Foundation will verify the request against payment-provider records, bank settlement information, internal accounts, campaign commitments, and applicable legal obligations. Additional identity or account-holder verification may be required. Submission of a request does not guarantee approval.
      </p>
      <p>
        Where approved, the refund will ordinarily be sent back through the original payment channel or to a verified source account. Processing time depends on Razorpay, the bank, UPI participant, card network, and settlement status. Rahat Foundation will communicate the available reference or status after initiating an approved refund.
      </p>

      <h2>5. Recurring mandate cancellation</h2>
      <p>
        A donor may cancel future recurring debits at any time through the relevant UPI application, bank, Razorpay mandate-management facility where available, or by contacting Rahat Foundation. Please act sufficiently before the next scheduled debit because a cancellation request that has not yet been processed may not stop an already initiated debit.
      </p>
      <p>
        Cancellation stops future debits after it becomes effective. It does not automatically reverse donations already completed. Any completed debit must be reviewed under the refund provisions above.
      </p>

      <h2>6. Failed, pending, or reversed payments</h2>
      <p>
        Do not make repeated payments merely because the first transaction appears pending. Check the bank or UPI account and payment status first. Failed or automatically reversed transactions are normally handled by the payment provider or bank and are not treated as received donations unless Rahat Foundation&apos;s settlement records show successful receipt.
      </p>

      <h2>7. Chargebacks and disputes</h2>
      <p>
        Before initiating a bank dispute or chargeback, contact Rahat Foundation so the transaction can be identified and reviewed. Fraudulent, misleading, or duplicate chargeback claims may be contested using payment, consent, mandate, and communication records.
      </p>

      <h2>8. Contact</h2>
      <p>
        Refund and cancellation requests must be made through official Rahat Foundation channels. Rahat Foundation will never ask for your UPI PIN, OTP, CVV, or banking password to process a cancellation or refund.
      </p>
    </PolicyPage>
  );
}
