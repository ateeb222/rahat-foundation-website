import type { Metadata } from 'next';
import Link from 'next/link';
import { PolicyPage } from '@/components/legal/PolicyPage';
import { organization } from '@/lib/organization';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms governing donations, recurring AutoPay mandates, and use of the Rahat Social Impact Foundation website.',
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage
      eyebrow="Legal and donor information"
      title="Terms and Conditions"
      summary="These terms govern use of this website and donations made to Rahat Social Impact Foundation, including recurring contributions authorised through Razorpay AutoPay."
    >
      <h2>1. About Rahat</h2>
      <p>
        {organization.legalName} is a {organization.entityType}, bearing CIN {organization.cin}. Its registered office is at {organization.registeredOffice}.
      </p>

      <h2>2. Website use</h2>
      <p>
        You may use this website only for lawful purposes. You must not attempt to disrupt the website, misuse payment facilities, submit false information, impersonate another person, or use Rahat&apos;s name, logo, donation links, QR codes, or content without authorisation.
      </p>

      <h2>3. Nature of contributions</h2>
      <p>
        Contributions made through this website are voluntary donations for Rahat&apos;s charitable objects and identified healthcare initiatives. A donation does not purchase goods, create an investment, confer ownership in any asset, or guarantee that a donor will receive a particular service or benefit.
      </p>
      <p>
        Rahat presently accepts eligible domestic Indian donations in Indian rupees only. Foreign contributions, including payments from foreign citizens, OCI or PIO cardholders, foreign bank accounts, foreign cards, or other foreign sources, must not be made unless Rahat has the legally required FCRA registration or prior permission and expressly confirms acceptance.
      </p>

      <h2>4. Payment processing</h2>
      <p>
        Online payments and recurring mandates may be processed by Razorpay, participating banks, UPI applications, card networks, or other regulated payment partners. Their separate terms, technical limits, authentication steps, and banking rules also apply. Rahat does not receive or store your complete card, UPI PIN, internet-banking password, or similar payment credentials.
      </p>
      <p>
        A payment is treated as received only after successful confirmation from the payment provider and reconciliation in Rahat&apos;s records. A screenshot, pending status, mandate request, or failed transaction does not by itself establish receipt of a donation.
      </p>

      <h2>5. Recurring donations and AutoPay</h2>
      <p>
        When you approve a recurring mandate, you authorise the selected amount to be debited at the stated frequency until the mandate ends or is cancelled. The mandate may require a small authentication or authorisation transaction under the payment provider&apos;s rules; such an amount is not treated as a charitable donation unless it is separately captured and recorded as one.
      </p>
      <p>
        You may cancel future debits through the relevant UPI application, bank, Razorpay facility where available, or by contacting Rahat. Cancellation is effective only when successfully processed before the next debit. Completed debits remain subject to the <Link href="/cancellation-and-refund">Cancellation and Refund Policy</Link>.
      </p>

      <h2>6. Donor information and acknowledgements</h2>
      <p>
        You are responsible for providing accurate donor, contact, citizenship, payment-reference, and identification information. Rahat may contact you to verify a payment or complete statutory records. Receipts and acknowledgements are issued after payment reconciliation and may be sent electronically.
      </p>
      <p>
        Do not assume that a donation qualifies for an income-tax deduction. A tax benefit applies only when Rahat holds the required approval for the relevant period and expressly issues a valid certificate or receipt in accordance with applicable law.
      </p>

      <h2>7. Campaign allocation</h2>
      <p>
        Rahat will make reasonable efforts to use restricted campaign donations for the stated initiative. Where a campaign is completed, materially changed, cannot proceed, or has excess funds, Rahat may contact affected donors or apply the funds to a closely related charitable healthcare purpose, subject to applicable law, donor restrictions, and internal approval.
      </p>

      <h2>8. Accuracy and availability</h2>
      <p>
        Rahat aims to keep campaign, payment, and organisational information accurate. Progress figures may be updated only after confirmation and reconciliation, so website figures can lag behind recent payments. The website or payment service may occasionally be unavailable because of maintenance, network issues, banking downtime, or events outside Rahat&apos;s control.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        Unless otherwise stated, website text, branding, graphics, and original materials belong to Rahat or are used with permission. Limited personal sharing of official campaign links is permitted, but alteration, commercial use, deceptive fundraising, or creation of unofficial payment material is prohibited.
      </p>

      <h2>10. Liability</h2>
      <p>
        To the extent permitted by law, Rahat is not responsible for losses caused by incorrect donor details, payments to unofficial accounts, third-party banking failures, unauthorised access caused by a user&apos;s own conduct, or circumstances beyond reasonable control. Nothing in these terms excludes liability that cannot lawfully be excluded.
      </p>

      <h2>11. Changes and governing law</h2>
      <p>
        Rahat may update these terms when its services, payment facilities, or legal obligations change. The version published on this page applies from its stated effective date. These terms are governed by the laws of India, and disputes are subject to the competent courts in New Delhi, unless applicable law requires otherwise.
      </p>

      <h2>12. Related policies</h2>
      <p>
        Please also read our <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/cancellation-and-refund">Cancellation and Refund Policy</Link>, and <Link href="/shipping-and-exchange">Shipping and Exchange Policy</Link>.
      </p>
    </PolicyPage>
  );
}
