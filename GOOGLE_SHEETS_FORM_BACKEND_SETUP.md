
# Google Sheets Form Backend Setup

This website sends form submissions through:

Website form -> `/api/submissions` -> Google Apps Script Web App -> Google Sheet + email alert.

## 1. Create the Apps Script project

1. Open the Google Sheet with ID:
   `1hSeTI1P7X8tDL9L1UTbGfpab4rZ0lisR45FvWOiNqvI`
2. Go to `Extensions` -> `Apps Script`.
3. Replace the default script with the contents of:
   `scripts/google-apps-script/Code.gs`
4. In `Code.gs`, replace:
   `REPLACE_WITH_STRONG_SHARED_SECRET`
   with a strong private value.
5. Keep the same value for `FORM_SUBMISSION_SECRET` in Vercel.

## 2. Confirm sheet tabs

The script writes to these tabs and creates headers if needed:

- `Donation_Acknowledgements`
- `Volunteer_Applications`
- `Contact_Requests`
- `Audit_Log`

## 3. Deploy the Apps Script Web App

1. Click `Deploy` -> `New deployment`.
2. Choose type `Web app`.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Deploy and authorize the script.
6. Copy the Web App `/exec` URL.

Use the `/exec` URL, not the `/dev` URL, for production.

## 4. Add Vercel environment variables

In Vercel project settings, add:

```text
APPS_SCRIPT_WEB_APP_URL=https://script.google.com/macros/s/AKfycbxgwRPnn5qw3m3glQ6mtVppt1Avakzmqku5uck4oFybiaPICxgb9xWWoIIhrLIohruM/exec
FORM_SUBMISSION_SECRET=rahat_forms_2026_private_9Xk72LmQpA51Secure
```

Redeploy the website after adding the variables.

## 5. Test

1. Submit the donation acknowledgement form on `/donate`.
2. Submit the volunteer form on `/volunteer`.
3. Submit the contact form on `/contact`.
4. Confirm rows appear in the correct Google Sheet tabs.
5. Confirm `Audit_Log` records each request.
6. Confirm an email alert reaches `info@rahatsocialimpact.com`.

If the website returns `Form backend is not configured`, check the Vercel environment variables and redeploy.
