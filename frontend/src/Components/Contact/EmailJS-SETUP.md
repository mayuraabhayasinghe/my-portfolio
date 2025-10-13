# Setting Up EmailJS for Your Contact Form

To make your contact form fully functional with EmailJS, follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to "Email Services" and click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down the **Service ID** that is created

## 3. Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Design your email template, using these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Save your template and note down the **Template ID**

## 4. Get Your User ID

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **User ID**

## 5. Update Your Code

Open `ContactForm.jsx` and replace these placeholders:

```jsx
// Initialize EmailJS once when component mounts
useEffect(() => {
  // Replace with your actual EmailJS user ID
  emailjs.init("YOUR_USER_ID"); // Replace with your User ID
}, []);

// In the handleSubmit function
emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your Service ID
  "YOUR_TEMPLATE_ID", // Replace with your Template ID
  templateParams
);
```

After making these changes, your contact form will be fully functional and will send real emails through EmailJS!

## Testing

1. Fill out the form with test data
2. Submit the form
3. Check your email to see if you received the message
4. You can also monitor sent emails in your EmailJS dashboard

## Free Plan Limits

The free plan of EmailJS allows:

- 200 emails per month
- 2 email templates
- 1 email service
