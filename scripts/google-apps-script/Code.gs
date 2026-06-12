const SHEET_ID = '1hSeTI1P7X8tDL9L1UTbGfpab4rZ0lisR45FvWOiNqvI';
const FORM_SUBMISSION_SECRET = 'REPLACE_WITH_STRONG_SHARED_SECRET';
const ALERT_EMAIL = '[info@rahatsocialimpact.com](mailto:info@rahatsocialimpact.com)';

function doGet() {
return jsonResponse({
ok: true,
success: true,
message: 'Rahat website form backend is active.'
});
}

function doPost(e) {
var timestamp = new Date();
var submissionId = createSubmissionId(timestamp);

try {
var rawBody = '{}';

```
if (e && e.postData && e.postData.contents) {
  rawBody = e.postData.contents;
}

var payload = JSON.parse(rawBody);
var type = String(payload.type || '').trim().toLowerCase();
var data = payload.data || {};

if (payload.secret !== FORM_SUBMISSION_SECRET) {
  appendAudit(timestamp, submissionId, type || 'unknown', 'Rejected', 'Invalid shared secret');
  return jsonResponse({
    ok: false,
    success: false,
    error: 'Unauthorized'
  });
}

if (type === 'donation') {
  appendDonation(timestamp, submissionId, data);
} else if (type === 'volunteer') {
  appendVolunteer(timestamp, submissionId, data);
} else if (type === 'contact') {
  appendContact(timestamp, submissionId, data);
} else {
  appendAudit(timestamp, submissionId, type || 'unknown', 'Rejected', 'Invalid submission type');
  return jsonResponse({
    ok: false,
    success: false,
    error: 'Invalid submission type'
  });
}

appendAudit(timestamp, submissionId, type, 'Accepted', 'Submission saved');
sendAlertEmail(type, submissionId, data);

return jsonResponse({
  ok: true,
  success: true,
  submissionId: submissionId,
  message: 'Submission received'
});
```

} catch (error) {
appendAudit(timestamp, submissionId, 'unknown', 'Error', String(error));

```
return jsonResponse({
  ok: false,
  success: false,
  error: String(error)
});
```

}
}

function appendDonation(timestamp, submissionId, data) {
var sheet = getSheetWithHeaders('Donation_Acknowledgements', [
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
'Message'
]);

sheet.appendRow([
timestamp,
submissionId,
'New',
cleanValue(data.fullName),
cleanValue(data.mobile),
cleanValue(data.email),
cleanValue(data.amount),
cleanValue(data.method),
cleanValue(data.transactionId),
cleanValue(data.purpose),
cleanValue(data.recognition),
cleanValue(data.recognitionName),
cleanValue(data.volunteerInterest),
cleanValue(data.domesticDeclaration),
cleanValue(data.ribaDeclaration),
cleanValue(data.message)
]);
}

function appendVolunteer(timestamp, submissionId, data) {
var sheet = getSheetWithHeaders('Volunteer_Applications', [
'Timestamp',
'Submission ID',
'Status',
'Name',
'Mobile',
'Email',
'Availability',
'Mode',
'Skills'
]);

sheet.appendRow([
timestamp,
submissionId,
'New',
cleanValue(data.name),
cleanValue(data.mobile),
cleanValue(data.email),
cleanValue(data.availability),
cleanValue(data.mode),
cleanValue(data.skills)
]);
}

function appendContact(timestamp, submissionId, data) {
var sheet = getSheetWithHeaders('Contact_Requests', [
'Timestamp',
'Submission ID',
'Status',
'Name',
'Email',
'Mobile',
'Reason',
'Message'
]);

sheet.appendRow([
timestamp,
submissionId,
'New',
cleanValue(data.name),
cleanValue(data.email),
cleanValue(data.mobile),
cleanValue(data.reason),
cleanValue(data.message)
]);
}

function appendAudit(timestamp, submissionId, type, status, note) {
try {
var sheet = getSheetWithHeaders('Audit_Log', [
'Timestamp',
'Submission ID',
'Type',
'Status',
'Note'
]);

```
sheet.appendRow([
  timestamp,
  submissionId,
  cleanValue(type),
  cleanValue(status),
  cleanValue(note)
]);
```

} catch (error) {
// Audit logging should not block form submission.
}
}

function getSheetWithHeaders(tabName, headers) {
var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
var sheet = spreadsheet.getSheetByName(tabName);

if (!sheet) {
sheet = spreadsheet.insertSheet(tabName);
}

var firstCellValue = sheet.getRange(1, 1).getValue();

if (!firstCellValue) {
sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
sheet.setFrozenRows(1);
}

return sheet;
}

function sendAlertEmail(type, submissionId, data) {
try {
var subject = '[Rahat Website] New ' + type + ' submission - ' + submissionId;

```
var body = [
  'A new Rahat website submission has been received.',
  '',
  'Submission ID: ' + submissionId,
  'Type: ' + type,
  '',
  'Details:',
  JSON.stringify(data, null, 2),
  '',
  'Open the Rahat Website Submissions Google Sheet to verify and update status.'
].join('\n');

MailApp.sendEmail(ALERT_EMAIL, subject, body);
```

} catch (error) {
appendAudit(new Date(), submissionId, type, 'Email Error', String(error));
}
}

function cleanValue(value) {
if (value === null || value === undefined) {
return '';
}

if (Array.isArray(value)) {
return value.join(', ');
}

if (typeof value === 'object') {
return JSON.stringify(value);
}

return String(value).trim();
}

function createSubmissionId(dateValue) {
var datePart = Utilities.formatDate(dateValue, 'Asia/Kolkata', 'yyyyMMdd-HHmmss');
var randomPart = Math.floor(Math.random() * 9000) + 1000;

return 'RAHAT-' + datePart + '-' + randomPart;
}

function jsonResponse(payload) {
return ContentService
.createTextOutput(JSON.stringify(payload))
.setMimeType(ContentService.MimeType.JSON);
}
