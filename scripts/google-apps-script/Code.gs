const SHEET_ID = '1hSeTI1P7X8tDL9L1UTbGfpab4rZ0lisR45FvWOiNqvI';
const FORM_SUBMISSION_SECRET = 'REPLACE_WITH_STRONG_SHARED_SECRET';
const ALERT_EMAIL = 'info@rahatsocialimpact.com';

const TAB_BY_TYPE = {
  donation: 'Donation_Acknowledgements',
  volunteer: 'Volunteer_Applications',
  contact: 'Contact_Requests',
};

const HEADERS_BY_TYPE = {
  donation: [
    'Timestamp',
    'Submission ID',
    'Status',
    'Full Name',
    'Mobile',
    'Email',
    'Amount',
    'Method',
    'Transaction ID / UTR',
    'Purpose',
    'Recognition',
    'Recognition Name',
    'Volunteer Interest',
    'Domestic Declaration',
    'Riba Declaration',
    'Message',
  ],
  volunteer: [
    'Timestamp',
    'Submission ID',
    'Status',
    'Name',
    'Mobile',
    'Email',
    'Availability',
    'Mode',
    'Skills',
  ],
  contact: [
    'Timestamp',
    'Submission ID',
    'Status',
    'Name',
    'Email',
    'Mobile',
    'Reason',
    'Message',
  ],
};

const FIELD_BY_TYPE = {
  donation: [
    'fullName',
    'mobile',
    'email',
    'amount',
    'method',
    'transactionId',
    'purpose',
    'recognition',
    'recognitionName',
    'volunteerInterest',
    'domesticDeclaration',
    'ribaDeclaration',
    'message',
  ],
  volunteer: ['name', 'mobile', 'email', 'availability', 'mode', 'skills'],
  contact: ['name', 'email', 'mobile', 'reason', 'message'],
};

function doPost(e) {
  const timestamp = new Date();
  const submissionId = Utilities.getUuid();

  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const type = String(payload.type || '').trim();
    const data = payload.data || {};

    if (payload.secret !== FORM_SUBMISSION_SECRET) {
      writeAudit(timestamp, submissionId, type || 'unknown', 'Rejected', 'Invalid shared secret');
      return jsonResponse({ success: false, error: 'Unauthorized' }, 401);
    }

    if (!TAB_BY_TYPE[type]) {
      writeAudit(timestamp, submissionId, type || 'unknown', 'Rejected', 'Invalid submission type');
      return jsonResponse({ success: false, error: 'Invalid submission type' }, 400);
    }

    const sheet = getSheet(TAB_BY_TYPE[type], HEADERS_BY_TYPE[type]);
    const row = [
      timestamp,
      submissionId,
      'New',
    ].concat(FIELD_BY_TYPE[type].map(function (field) {
      return normalizeValue(data[field]);
    }));

    sheet.appendRow(row);
    writeAudit(timestamp, submissionId, type, 'New', 'Saved');
    sendAlert(type, submissionId, data);

    return jsonResponse({ success: true, submissionId: submissionId }, 200);
  } catch (error) {
    writeAudit(timestamp, submissionId, 'unknown', 'Error', String(error));
    return jsonResponse({ success: false, error: 'Submission failed' }, 500);
  }
}

function getSpreadsheet() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getSheet(name, headers) {
  const spreadsheet = getSpreadsheet();
  let sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
  }

  ensureHeaders(sheet, headers);
  return sheet;
}

function ensureHeaders(sheet, headers) {
  const range = sheet.getRange(1, 1, 1, headers.length);
  const values = range.getValues()[0];
  const hasHeaders = values.some(function (value) {
    return value !== '';
  });

  if (!hasHeaders) {
    range.setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function writeAudit(timestamp, submissionId, type, status, message) {
  const sheet = getSheet('Audit_Log', ['Timestamp', 'Submission ID', 'Type', 'Status', 'Message']);
  sheet.appendRow([timestamp, submissionId, type, status, message]);
}

function sendAlert(type, submissionId, data) {
  const subject = 'New Rahat ' + type + ' submission: ' + submissionId;
  const body = [
    'A new Rahat website form submission was received.',
    '',
    'Type: ' + type,
    'Submission ID: ' + submissionId,
    '',
    JSON.stringify(data, null, 2),
  ].join('\n');

  MailApp.sendEmail(ALERT_EMAIL, subject, body);
}

function normalizeValue(value) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return value.join(', ');
  return String(value).trim();
}

function jsonResponse(payload, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
