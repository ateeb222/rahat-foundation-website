export const donationConfig = {
  campaign: {
    name: 'JNMC Hospital Patient Mobility Initiative',
    phase: 'Phase 1',
    status: 'Completed',
    totalDelivered: 80,
    handoverDate: '14 August 2026',
    recipient: 'Jawaharlal Nehru Medical College & Hospital, Aligarh Muslim University, Aligarh',
    lastUpdated: 'Completed 14 August 2026',
  },
  razorpay: {
    status: 'active',
    message: 'Secure one-time Razorpay Checkout is active for eligible Indian domestic donations in INR.',
  },
  upi: {
    payeeName: 'M/S. RAHAT SOCIAL IMPACT FOUNDATION',
    id: 'MSRAHATSOCIALIMPACTFOUNDATION.eazypay@icici',
    qrPath: '/donation/rahat-icici-upi-qr.jpg',
    qrAlt: 'Official ICICI UPI QR code for Rahat Social Impact Foundation',
  },
  bank: {
    accountName: 'RAHAT SOCIAL IMPACT FOUNDATION',
    bankName: 'ICICI Bank',
    branch: 'New Delhi - Okhla Phase 1 Branch',
    ifsc: 'ICIC0000716',
    accountNumber: '071605005092',
    accountType: 'Current Account',
  },
  domesticWarning: {
    title: 'Domestic Donations Only',
    short:
      'Rahat Foundation can currently accept donations only from Indian bank accounts and eligible Indian domestic payment sources.',
    body: [
      'At present, Rahat Social Impact Foundation can accept donations only from Indian bank accounts and eligible Indian domestic payment sources.',
      'We cannot accept donations from foreign bank accounts, foreign cards, foreign companies, foreign citizens, OCI/PIO cardholders, PayPal, Wise, Xoom, international cards, or international payment sources until FCRA registration or prior permission is obtained.',
      'If you are outside India or unsure whether your donation is permitted, please contact Rahat Foundation before making any payment.',
    ],
  },
  religiousGiving: {
    accepted: ['Wheelchair Sadaqah', 'General Sadaqah', 'Interest / Riba Disposal', 'Stretcher Support'],
    notAccepted: ['Zakat', 'Foreign donations'],
    riba:
      'Received bank interest you do not wish to keep? You may direct it toward public healthcare benefit through Rahat Foundation. These funds can help support patient mobility, wheelchairs, stretchers, and hospital access. This is not Zakat.',
    zakat:
      "Please do not send Zakat to this account at present. Rahat Foundation's current wheelchair and public healthcare support model is structured as Sadaqah, voluntary support, and interest/riba disposal for public benefit, not as a Zakat distribution mechanism.",
  },
  contact: {
    whatsapp: 'https://wa.me/919625293030',
    phone: 'tel:+919625293030',
    displayPhone: '+91-9625293030',
    email: 'mailto:info@rahatsocialimpact.com',
    displayEmail: 'info@rahatsocialimpact.com',
    note: 'Reach Rahat Foundation through official call, WhatsApp, or email channels.',
  },
  social: {
    instagram: 'https://www.instagram.com/rahat.social.impact.foundation/',
    linkedin: 'https://www.linkedin.com/company/rahatsocialimpactfoundation',
    note: 'Follow official Rahat Foundation updates on verified social channels.',
  },
} as const;

export const donationAmounts = [
  { amount: '\u20b9500', label: 'General healthcare support' },
  { amount: '\u20b91,000', label: 'General healthcare support' },
  { amount: '\u20b92,500', label: 'General healthcare support' },
  { amount: 'Custom Amount', label: 'Choose your amount' },
] as const;
