# 📧 Quick EmailJS Setup for qphixindia@gmail.com

## Your form is working! Now let's get emails flowing to qphixindia@gmail.com

### 🎯 Current Status:
- ✅ Contact form working perfectly
- ✅ Success dialog showing
- ✅ Form validation working
- ⏳ EmailJS setup needed (5 minutes)

---

## 🚀 5-Minute EmailJS Setup:

### Step 1: Create Account (1 min)
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" → Create account
3. Verify email

### Step 2: Add Gmail Service (2 min)
1. Dashboard → "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Sign in with `qphixindia@gmail.com`
4. **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Template (1.5 min)
1. Go to "Email Templates" → "Create New Template"
2. **Subject:** `{{subject}}`
3. **Content:**
```
Dear Black Box Pro Team,

New inquiry from website:

Customer Details:
• Name: {{from_name}}
• Email: {{from_email}}  
• Mobile: {{mobile_number}}
• Date: {{timestamp}}

Message:
{{user_message}}

Please respond within 24 hours.

Best regards,
Black Box Pro Website
```
4. Save → **Copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (30 sec)
1. Go to "Account" tab
2. **Copy your Public Key** (looks like: `user_def456`)

### Step 5: Update Your Code (30 sec)
In your `index.html` file, find these lines and replace:

```javascript
// Replace this:
emailjs.init('YOUR_PUBLIC_KEY_HERE');
// With your actual key:
emailjs.init('user_def456');

// Replace this:
// await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
// With your actual IDs and uncomment:
await emailjs.send('service_abc123', 'template_xyz789', templateParams);
console.log('Email sent successfully via EmailJS!');
return true;
```

---

## 🧪 Test Your Setup:

1. Save your HTML file
2. Refresh your webpage
3. Fill out the contact form
4. Submit it
5. Check `qphixindia@gmail.com` inbox!

---

## 🎉 What You'll Get:

Every form submission will send a professional email to `qphixindia@gmail.com` with:
- Customer name, email, and mobile number
- Their message
- Timestamp
- Professional formatting

**Free tier includes 100 emails/month** - perfect for getting started!

---

## 💡 Quick Tips:

- **Test immediately** after setup to confirm it works
- Check spam folder if email doesn't arrive initially
- Gmail might ask for permissions - just approve EmailJS
- Keep your credentials secure (don't share publicly)

**Need help?** The console will show helpful error messages if something goes wrong!
