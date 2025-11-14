# How to Add Environment Variables in Vercel Dashboard

Your portfolio is deployed at: **https://reactportfolioweb.vercel.app/**

But the contact form won't work until you add the environment variables. Follow these steps:

## Step 1: Go to Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. **Login** to your account
3. Click on your project: **reactportfolioweb** (or whatever you named it)

## Step 2: Navigate to Environment Variables

1. Click on **"Settings"** (top menu)
2. Click on **"Environment Variables"** (left sidebar)

## Step 3: Add Each Environment Variable

Click **"Add New"** for each variable below. Make sure to select **all three environments** (Production, Preview, Development) for each one.

### Variable 1: SMTP_HOST
- **Name**: `SMTP_HOST`
- **Value**: `smtp.gmail.com`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

### Variable 2: SMTP_PORT
- **Name**: `SMTP_PORT`
- **Value**: `587`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

### Variable 3: SMTP_USER
- **Name**: `SMTP_USER`
- **Value**: `your-email@gmail.com` (your Gmail address)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

### Variable 4: SMTP_PASS
- **Name**: `SMTP_PASS`
- **Value**: `your-16-character-app-password` (from your Gmail App Password)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- ⚠️ **This is your Gmail App Password - the 16-character password you generated**

### Variable 5: NODE_ENV
- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

## Step 4: Get Your Gmail App Password (If You Don't Have It)

If you don't have a Gmail App Password yet:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **"Security"** → **"2-Step Verification"** (enable if not enabled)
3. Go to **"App passwords"**
4. Select **"Mail"** and **"Other (Custom name)"**
5. Enter **"Portfolio"** as name
6. Click **"Generate"**
7. **Copy the 16-character password** - use this as `SMTP_PASS`

## Step 5: Redeploy After Adding Variables

After adding all environment variables:

1. Go to **"Deployments"** tab
2. Click the **three dots (⋯)** on the latest deployment
3. Click **"Redeploy"**
4. Or push a new commit to trigger a redeploy

**Important:** Environment variables are only available after redeployment!

## Step 6: Test the Contact Form

1. Visit: https://reactportfolioweb.vercel.app/
2. Go to the **Contact** section
3. Fill out the form:
   - Name
   - Email
   - Message
4. Click **"Send Message"**
5. Check your email (`samebinesar2004@gmail.com`) for the message

## Quick Checklist

- [ ] Logged into Vercel Dashboard
- [ ] Opened project settings
- [ ] Added `SMTP_HOST` = `smtp.gmail.com`
- [ ] Added `SMTP_PORT` = `587`
- [ ] Added `SMTP_USER` = your Gmail address
- [ ] Added `SMTP_PASS` = your Gmail App Password (16 characters)
- [ ] Added `NODE_ENV` = `production`
- [ ] Selected all environments (Production, Preview, Development) for each
- [ ] Redeployed the project
- [ ] Tested the contact form

## Troubleshooting

### Contact Form Still Not Working?

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Your Project → **"Functions"** tab
   - Click on **"send-email"** function
   - Check the logs for errors

2. **Verify Environment Variables:**
   - Go to Settings → Environment Variables
   - Make sure all 5 variables are there
   - Make sure they're set for Production environment

3. **Check Gmail App Password:**
   - Verify it's exactly 16 characters
   - Make sure 2-Step Verification is enabled
   - Try generating a new app password

4. **Redeploy:**
   - After adding/changing environment variables, you MUST redeploy
   - Go to Deployments → Click three dots → Redeploy

### Common Errors:

**"Email service not configured"**
- Environment variables not set or not redeployed

**"Invalid login"**
- Gmail App Password is incorrect
- Check that it's the 16-character password, not your regular Gmail password

**"Connection timeout"**
- Check SMTP_HOST and SMTP_PORT are correct
- Should be `smtp.gmail.com` and `587`

## Visual Guide

1. **Vercel Dashboard** → Your Project
2. **Settings** (top menu)
3. **Environment Variables** (left sidebar)
4. **Add New** button
5. Enter Name and Value
6. Select environments (check all three boxes)
7. Click **Save**
8. Repeat for all 5 variables
9. **Redeploy** the project

---

**Your portfolio is live!** Just add the environment variables and redeploy to enable the contact form. 🚀

