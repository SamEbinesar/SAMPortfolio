# 🔒 Secure Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel **securely** with your Gmail SMTP credentials.

## ⚠️ IMPORTANT SECURITY NOTES

1. **NEVER commit `.env` files to GitHub** - They contain sensitive passwords
2. **Only add environment variables in Vercel Dashboard** - They are encrypted and secure
3. **Your `.env` file is already in `.gitignore`** - It won't be committed

## Prerequisites

1. ✅ GitHub account with your portfolio repository
2. ✅ Vercel account (free at [vercel.com](https://vercel.com))
3. ✅ Gmail account for email functionality
4. ✅ Your `.env` file with SMTP credentials (for reference only)

## Step 1: Verify .env File is NOT in Git

Before pushing to GitHub, verify your `.env` file is ignored:

```bash
# Check if .env is tracked (should return nothing)
git ls-files | grep .env

# If it shows .env files, remove them from git (but keep local file):
git rm --cached backend/.env
git rm --cached frontend/.env
```

Your `.env` files should **stay on your local machine only**.

## Step 2: Get Your Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **"Security"** → **"2-Step Verification"** (enable if not enabled)
3. Go to **"App passwords"**
4. Select **"Mail"** and **"Other (Custom name)"**
5. Enter **"Portfolio"** as name
6. Click **"Generate"**
7. **Copy the 16-character password** - you'll need this in Step 4

## Step 3: Install Dependencies

Install nodemailer in the frontend:

```bash
cd frontend
npm install
```

This will install `nodemailer` which is needed for the serverless functions.

## Step 4: Push Code to GitHub

Make sure your code is pushed to GitHub (`.env` files will be automatically ignored):

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 5: Deploy to Vercel

### 5.1 Create Vercel Project

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub
2. **Click "Add New Project"**
3. **Import your GitHub repository:**
   - Select your portfolio repository
   - Click **"Import"**

### 5.2 Configure Project Settings

1. **Framework Preset**: `Vite` (should auto-detect)
2. **Root Directory**: `frontend` ⚠️ **CRITICAL - Must be `frontend`**
3. **Build Command**: `npm run build` (auto-filled)
4. **Output Directory**: `dist` (auto-filled)
5. **Install Command**: `npm install` (auto-filled)

### 5.3 Add Environment Variables (SECURE - In Vercel Dashboard Only)

**⚠️ DO NOT add these in code - Only in Vercel Dashboard!**

Click **"Environment Variables"** and add these one by one:

1. **SMTP_HOST**
   - Value: `smtp.gmail.com`
   - Environment: ✅ Production, ✅ Preview, ✅ Development

2. **SMTP_PORT**
   - Value: `587`
   - Environment: ✅ Production, ✅ Preview, ✅ Development

3. **SMTP_USER**
   - Value: `your-email@gmail.com` (your Gmail address)
   - Environment: ✅ Production, ✅ Preview, ✅ Development

4. **SMTP_PASS**
   - Value: `your-16-character-app-password` (from Step 2)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - ⚠️ **This is your Gmail App Password - Keep it secret!**

5. **NODE_ENV**
   - Value: `production`
   - Environment: ✅ Production, ✅ Preview, ✅ Development

### 5.4 Deploy

1. **Click "Deploy"**
2. **Wait for deployment** (takes 1-2 minutes)
3. **Your site is live!** 🎉
   - URL: `https://your-portfolio.vercel.app`
   - API: `https://your-portfolio.vercel.app/api/send-email`

## Step 6: Test Your Deployment

1. **Visit your Vercel URL**
2. **Test the contact form:**
   - Fill out name, email, and message
   - Submit the form
   - Check your email (`samebinesar2004@gmail.com`) for the message
3. **Test all sections:**
   - Navigation works
   - All pages load correctly
   - Resume download works
   - Social links work

## Security Checklist

- [x] `.env` file is in `.gitignore`
- [x] `.env` file is NOT committed to GitHub
- [x] Environment variables added ONLY in Vercel Dashboard
- [x] Gmail App Password is 16 characters
- [x] 2-Step Verification enabled on Gmail
- [x] All environment variables set for Production, Preview, and Development

## How It Works

1. **Frontend** (React + Vite) → Deployed as static site
2. **Backend** (Express API) → Converted to Vercel Serverless Functions
   - Located in `frontend/api/send-email.js`
   - Runs on-demand (serverless)
   - Uses environment variables from Vercel (secure)
3. **Environment Variables** → Stored securely in Vercel (encrypted)

## Local Development

For local development, you still need the backend running:

1. **Start backend server:**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Start frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The frontend will automatically use `http://localhost:5000` for API calls in development mode.

## Troubleshooting

### Build Fails:
- ✅ Check that `Root Directory` is set to `frontend`
- ✅ Verify `nodemailer` is installed: `cd frontend && npm install`
- ✅ Check build logs in Vercel dashboard

### Contact Form Not Working:
- ✅ Verify all environment variables are set in Vercel
- ✅ Check Vercel function logs: Settings → Functions → View Logs
- ✅ Ensure Gmail App Password is correct (16 characters)
- ✅ Verify 2-Step Verification is enabled on Gmail

### Email Not Sending:
- ✅ Check Vercel function logs for errors
- ✅ Verify SMTP credentials are correct in Vercel
- ✅ Test Gmail App Password separately
- ✅ Check spam folder

### Environment Variables Not Working:
- ✅ Ensure variables are set for all environments (Production, Preview, Development)
- ✅ Redeploy after adding environment variables
- ✅ Check variable names match exactly (case-sensitive)

## Updating Environment Variables

If you need to update your Gmail password:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Find `SMTP_PASS`
3. Click "Edit" and update the value
4. Redeploy the project

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Update DNS records as instructed
4. Wait for DNS propagation (5-30 minutes)

## Benefits of This Setup

✅ **Secure** - Passwords never in code or GitHub  
✅ **Simple** - Everything in one place (Vercel)  
✅ **Scalable** - Serverless functions auto-scale  
✅ **Fast** - Global CDN for frontend  
✅ **Free** - Generous free tier  

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Vercel function logs (Settings → Functions)
3. Verify all environment variables are set correctly
4. Test Gmail App Password separately
5. Check browser console for errors

## Next Steps

1. ✅ Share your portfolio URL
2. ✅ Add to your resume/LinkedIn
3. ✅ Monitor analytics (Vercel provides basic analytics)
4. ✅ Set up custom domain (optional)
5. ✅ Keep your code updated

---

**Remember:** Your `.env` file stays on your local machine. Environment variables are securely stored in Vercel Dashboard only! 🔒

