# 🚀 Secure Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] `.env` file is in `.gitignore` (already done)
- [x] Serverless function is ready (`api/send-email.js`)
- [x] Contact form uses relative path (`/api/send-email`)
- [ ] Code is committed and pushed to GitHub

---

## Step 1: Push Code to GitHub

Make sure all your code is committed and pushed:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin master
```

**⚠️ IMPORTANT:** Make sure your `.env` file is NOT committed (it's in `.gitignore`).

---

## Step 2: Create Vercel Project

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New Project"** (or "New Project")
3. **Import your GitHub repository:**
   - Select your portfolio repository
   - Repository: `your-username/Portfolio`
   - Click **"Import"**

---

## Step 3: Configure Project Settings

**⚠️ CRITICAL SETTINGS:**

1. **Framework Preset**: `Vite` (should auto-detect)
2. **Root Directory**: Leave **EMPTY** (your project is in root) ⚠️
3. **Build Command**: `npm run build` (auto-filled)
4. **Output Directory**: `dist` (auto-filled)
5. **Install Command**: `npm install` (auto-filled)

**⚠️ DO NOT set Root Directory to "frontend" - leave it EMPTY!**

---

## Step 4: Add Environment Variables (SECURE - In Vercel Dashboard Only)

**⚠️ NEVER add these in code or commit them to GitHub!**

### Before clicking "Deploy", add environment variables:

1. **Scroll down to "Environment Variables"** section
2. **Add these 5 variables one by one:**

#### Variable 1: `SMTP_HOST`
- **Key:** `SMTP_HOST`
- **Value:** `smtp.gmail.com`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

#### Variable 2: `SMTP_PORT`
- **Key:** `SMTP_PORT`
- **Value:** `587`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

#### Variable 3: `SMTP_USER`
- **Key:** `SMTP_USER`
- **Value:** `your-email@gmail.com` (your Gmail address)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

#### Variable 4: `SMTP_PASS`
- **Key:** `SMTP_PASS`
- **Value:** `your-16-character-app-password` (your Gmail App Password)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- ⚠️ **This is your Gmail App Password - Keep it secret!**

#### Variable 5: `NODE_ENV`
- **Key:** `NODE_ENV`
- **Value:** `production`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### 📝 How to Get Gmail App Password (If Needed)

If you don't have a Gmail App Password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **"Security"** → **"2-Step Verification"** (enable if not enabled)
3. Go to **"App passwords"** (search for it)
4. Select **"Mail"** and **"Other (Custom name)"**
5. Enter **"Portfolio"** as name
6. Click **"Generate"**
7. **Copy the 16-character password** → Use as `SMTP_PASS`

---

## Step 5: Deploy

1. **Click "Deploy"** button
2. **Wait for deployment** (takes 1-2 minutes)
3. **Your site is live!** 🎉

**Your site URL will be:** `https://your-project-name.vercel.app`

---

## Step 6: Verify Deployment

### 1. Check Build Logs
- Go to **"Deployments"** tab
- Click on your deployment
- Check **"Build Logs"** - should show successful build

### 2. Test Your Site
- Visit your Vercel URL
- Test navigation
- Test all sections

### 3. Test Contact Form
- Go to **Contact** section
- Fill out the form:
  - Name: Test
  - Email: test@example.com
  - Message: Test message
- Click **"Send Message"**
- Check your email (`samebinesar2004@gmail.com`) for the message

---

## Step 7: Verify Environment Variables (After Deployment)

1. Go to **Settings** → **Environment Variables**
2. Verify all 5 variables are there:
   - ✅ `SMTP_HOST`
   - ✅ `SMTP_PORT`
   - ✅ `SMTP_USER`
   - ✅ `SMTP_PASS`
   - ✅ `NODE_ENV`

3. **Check Function Logs:**
   - Go to **Deployments** → Click your deployment
   - Click **"Functions"** tab
   - Click on `api/send-email`
   - Check logs for any errors

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Add environment variables ONLY in Vercel Dashboard
- ✅ Use Gmail App Password (not your regular password)
- ✅ Keep `.env` file in `.gitignore`
- ✅ Never commit `.env` file to GitHub
- ✅ Use different App Passwords for different projects
- ✅ Enable 2-Step Verification on Gmail

### ❌ DON'T:
- ❌ Never hardcode passwords in code
- ❌ Never commit `.env` file to GitHub
- ❌ Never share your App Password
- ❌ Never use your regular Gmail password

---

## 🐛 Troubleshooting

### Build Fails:
- ✅ Check that Root Directory is **EMPTY** (not "frontend")
- ✅ Verify `vite` and `@vitejs/plugin-react` are in `dependencies`
- ✅ Check build logs in Vercel dashboard

### Contact Form Not Working:
- ✅ Verify all 5 environment variables are set in Vercel
- ✅ Check Vercel function logs: **Deployments** → **Functions** → `api/send-email` → **Logs**
- ✅ Ensure Gmail App Password is correct (16 characters)
- ✅ Verify 2-Step Verification is enabled on Gmail
- ✅ **Redeploy after adding environment variables!**

### Email Not Sending:
- ✅ Check Vercel function logs for errors
- ✅ Verify SMTP credentials are correct in Vercel
- ✅ Test Gmail App Password separately
- ✅ Check spam folder
- ✅ Verify `SMTP_USER` matches the email that generated the App Password

### Common Errors:

**"Email service not configured"**
- Environment variables not set or not redeployed

**"Invalid login"**
- Wrong Gmail App Password
- App Password not generated correctly

**"Connection timeout"**
- Check SMTP settings (`SMTP_HOST` and `SMTP_PORT`)

---

## 📋 Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Created Vercel project
- [ ] Root Directory set to **EMPTY**
- [ ] Added `SMTP_HOST` = `smtp.gmail.com`
- [ ] Added `SMTP_PORT` = `587`
- [ ] Added `SMTP_USER` = your Gmail address
- [ ] Added `SMTP_PASS` = your Gmail App Password (16 characters)
- [ ] Added `NODE_ENV` = `production`
- [ ] Selected all environments (Production, Preview, Development) for each variable
- [ ] Deployed the project
- [ ] Tested the contact form
- [ ] Verified email received
- [ ] Checked function logs for errors

---

## 🎉 Success!

Once deployed, your portfolio is live with:
- ✅ Secure email sending via SMTP
- ✅ Environment variables stored securely in Vercel
- ✅ Serverless functions for backend
- ✅ Fast, responsive frontend

**Your portfolio is now live and secure!** 🚀

