# Form Submissions

## New Contact Form Submission

**Submitted:** 2026-03-15T00:56:00.000Z

### Contact Details
- **Name:** Test User
- **Email:** test@example.com
- **Company:** Test Company
- **Budget:** $1,000 - $2,500
- **Message:** This is a test submission

---

## Instructions for Andy

When someone fills out the contact form:

1. **Data is saved to:** `submissions.json` file
2. **API endpoint:** `/api/contact`
3. **Console notification:** Check server logs for 🚨 NEW FORM SUBMISSION 🚨

### To View Submissions:

**Option 1: Check the file directly**
```bash
cat /home/clawdbot/.openclaw/workspace/ultra-premium-studio/submissions.json
```

**Option 2: API endpoint**
Visit: `https://your-domain.com/api/contact`

### Email Notification Setup:

To automatically email you when a form is submitted, you need to add an email service:

**Recommended: Resend (free tier)**
1. Sign up at https://resend.com
2. Get API key
3. Add to environment variables
4. Uncomment email code in route.ts

**Alternative: EmailJS (client-side)**
- No server needed
- Free tier available
- Easy setup

### Current Setup:
- ✅ Form data saved to JSON file
- ✅ Console notifications
- ✅ API endpoint to retrieve submissions
- ⏳ Email notifications (requires email service setup)

---

**Last Updated:** March 15, 2026
