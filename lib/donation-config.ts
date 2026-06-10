export const donationConfig = {
  campaign: {
    name: 'JNMC Hospital Patient Mobility Initiative',
    phase: 'Phase 1',
    totalGoal: 80,
    verifiedSponsored: 0,
    sponsorshipAmount: 5800,
    lastUpdated: 'Pending first verified reconciliation',
  },
  razorpay: {
    status: 'pending',
    message:
      'Razorpay payment gateway activation is in progress. Until then, please use official UPI or bank transfer details below.',
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
      'Rahat can currently accept donations only from Indian bank accounts and eligible Indian domestic payment sources.',
    body: [
      'At present, Rahat Social Impact Foundation can accept donations only from Indian bank accounts and eligible Indian domestic payment sources.',
      'We cannot accept donations from foreign bank accounts, foreign cards, foreign companies, foreign citizens, OCI/PIO cardholders, PayPal, Wise, Xoom, international cards, or international payment sources until FCRA registration or prior permission is obtained.',
      'If you are outside India or unsure whether your donation is permitted, please contact Rahat before making any payment.',
    ],
  },
  religiousGiving: {
    accepted: ['Wheelchair Sadaqah', 'General Sadaqah', 'Interest / Riba Disposal', 'Stretcher Support'],
    notAccepted: ['Zakat', 'Foreign donations'],
    riba:
      'For donors who wish to dispose of bank interest or impermissible income, Rahat may use such funds for public healthcare benefit, including patient mobility support. This is not Zakat. If you are unsure, please consult a qualified scholar.',
    zakat:
      "Please do not send Zakat to this account at present. Rahat's current wheelchair and public healthcare support model is structured as Sadaqah, voluntary support, and interest/riba disposal for public benefit, not as a Zakat distribution mechanism.",
  },
  contact: {
    whatsapp: '',
    phone: '',
    email: '',
    note: 'Official WhatsApp, call, and email details are pending final approval.',
  },
  social: {
    instagram: '',
    linkedin: '',
    youtube: '',
    whatsappUpdates: '',
    note: 'Official social links are pending final approval.',
  },
} as const;

export const donationAmounts = [
  { amount: '₹500', label: 'Support patient mobility', featured: false },
  { amount: '₹1,000', label: 'Help healthcare access', featured: false },
  { amount: '₹5,800', label: 'Sponsor one wheelchair', featured: true },
  { amount: 'Custom Amount', label: 'Give as per your intention', featured: false },
] as const;

export const recurringOptions = {
  Weekly: ['₹100/week', '₹250/week', '₹500/week'],
  Monthly: ['₹500/month', '₹1,000/month', '₹5,800/month - sponsor one wheelchair every month'],
  Yearly: ['₹5,800/year - sponsor one wheelchair every year', '₹15,000/year - stretcher support', 'Custom yearly support'],
} as const;
