# Email Setup Instructions for Black Box Pro Contact Form

Your contact form is already fully implemented and ready to work! You just need to set up one of the email services below to start receiving emails at `qphixindia@gmail.com`.

## 🎯 Current Status
- ✅ Contact form with name, email, mobile, and message fields
- ✅ Success dialog that shows after form submission
- ✅ Form validation (including 10-digit mobile number validation)
- ✅ Email functionality ready for EmailJS integration
- ✅ All user details captured and formatted for email

## 🚀 Option 1: EmailJS Setup (Recommended - FREE)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Follow the setup to connect your `qphixindia@gmail.com` account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: {{subject}}

Dear Black Box Pro Team,

You have received a new inquiry from your website:

Customer Details:
• Name: {{from_name}}
• Email: {{from_email}}
• Mobile: {{mobile_number}}
• Inquiry Date: {{timestamp}}

Message:
{{user_message}}

Please contact this customer within 24 hours to provide assistance with their Black Box Pro requirements.

Best regards,
Black Box Pro Website System
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (e.g., `user_def456`)

### Step 5: Update Your Website Code
In your `index.html` file, find these lines and replace the placeholders:

```javascript
// Replace this line:
emailjs.init('YOUR_PUBLIC_KEY_HERE');
// With:
emailjs.init('user_def456'); // Your actual public key

// Replace this line:
// await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
// With:
await emailjs.send('service_abc123', 'template_xyz789', templateParams);
```

Then uncomment the `await emailjs.send` line and the `return true;` line below it.

## 🔄 Option 2: Formspree (Alternative - Also FREE)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (50 submissions/month free)

### Step 2: Create a Form
1. Create a new form in Formspree
2. Set the target email to `qphixindia@gmail.com`
3. Note down your **Form ID** (e.g., `mzbqklmn`)

### Step 3: Update Your Website Code
In your `index.html` file, find this line:
```javascript
const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
Replace `YOUR_FORM_ID` with your actual form ID:
```javascript
const formspreeResponse = await fetch('https://formspree.io/f/mzbqklmn', {
```

## 📧 Option 3: Mailto Fallback (Already Working)

If you don't set up EmailJS or Formspree, the form will use a mailto fallback that opens the user's default email client with a pre-filled email to `qphixindia@gmail.com`.

## 🧪 Testing Your Setup

1. Open your website
2. Fill out the contact form with test data
3. Submit the form
4. Check the browser console (F12 → Console) for any error messages
5. Check your email at `qphixindia@gmail.com` for the inquiry

## 🎨 What's Already Included

Your contact form includes:
- Beautiful success dialog with "Thank You!" message
- Form validation (all fields required, mobile must be 10 digits)
- Loading spinner during submission
- Automatic form reset after successful submission
- Professional email formatting with all customer details
- Mobile-responsive design that matches your website

## 🔧 Troubleshooting

### EmailJS Not Working?
- Check browser console for error messages
- Verify your Service ID, Template ID, and Public Key are correct
- Make sure your EmailJS service is properly connected and verified

### Formspree Not Working?
- Check that your Form ID is correct
- Verify your Formspree form is active and verified

### General Issues?
- Open browser developer tools (F12) and check the Console tab for errors
- Make sure you're testing on a web server (not just opening the HTML file directly)

## 📞 Support

If you need help with the setup, the form is already working perfectly - you just need to choose and configure one of the email services above. The fallback mailto method will work immediately without any setup!
