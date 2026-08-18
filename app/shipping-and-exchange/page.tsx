import type { Metadata } from 'next';
import { PolicyPage } from '@/components/legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Shipping and Exchange',
  description: 'Shipping and exchange policy for the donation-only Rahat Social Impact Foundation website.',
};

export default function ShippingAndExchangePage() {
  return (
    <PolicyPage
      eyebrow="Donation service information"
      title="Shipping and Exchange Policy"
      summary="Rahat Foundation is a charitable organisation and this website currently accepts donations; it does not operate an online store or sell physical goods to donors."
    >
      <h2>1. No sale or shipment to donors</h2>
      <p>
        Payments made through this website are voluntary charitable donations, including one-time and recurring contributions. They are not orders for products. Accordingly, no physical item is shipped or delivered to a donor in exchange for a donation, and no commercial exchange, replacement, or return facility applies.
      </p>

      <h2>2. Electronic acknowledgements</h2>
      <p>
        Donation confirmations, acknowledgements, receipts, mandate information, and campaign updates may be provided electronically by email, website confirmation, telephone, WhatsApp, or another official communication channel after payment verification and reconciliation. Delivery of an electronic acknowledgement may depend on the accuracy of the contact details supplied by the donor.
      </p>

      <h2>3. Donated medical equipment and programme assets</h2>
      <p>
        Where a campaign funds wheelchairs, stretchers, medical equipment, or other programme assets, Rahat Foundation procures or arranges those assets for the designated beneficiary institution or charitable programme. Such assets are not purchased by, owned by, or shipped to the donor. Procurement, tagging, handover, deployment, and reporting are programme activities and not retail fulfilment.
      </p>

      <h2>4. Donor recognition</h2>
      <p>
        Where a campaign permits donor or memorial recognition on an asset, the recognition is an acknowledgement of support and not a product supplied to the donor. Spelling, wording, eligibility, space, institutional approval, and production constraints may apply. Rahat Foundation may contact the donor to verify recognition text before implementation.
      </p>

      <h2>5. Incorrect payment or cancellation</h2>
      <p>
        Because there is no product shipment or exchange, requests concerning duplicate payments, wrong amounts, unauthorised transactions, or cancellation of future recurring debits are handled under Rahat Foundation&apos;s Cancellation and Refund Policy rather than an exchange process.
      </p>

      <h2>6. Future merchandise or physical fulfilment</h2>
      <p>
        If Rahat Foundation later offers merchandise, event material, publications, or any other physical item through a separate transaction, the applicable product description and specific delivery, return, replacement, or exchange terms will be published before payment. This page does not create a current offer to sell or ship goods.
      </p>

      <h2>7. Contact</h2>
      <p>
        For questions about an electronic acknowledgement, donor recognition, or programme handover, use the official Rahat Foundation contact page and include the relevant transaction reference without sharing any confidential banking credential.
      </p>
    </PolicyPage>
  );
}
