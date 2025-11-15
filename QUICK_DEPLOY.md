# ⚡ Quick Deployment Steps

## 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin master
```

## 2. Create Vercel Project
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- **Root Directory: LEAVE EMPTY** ⚠️

## 3. Add Environment Variables (BEFORE DEPLOYING)

Add these 5 variables in Vercel Dashboard:

| Variable | Value | Environments |
|----------|-------|--------------|
| `SMTP_HOST` | `smtp.gmail.com` | ✅ All |
| `SMTP_PORT` | `587` | ✅ All |
| `SMTP_USER` | `your-email@gmail.com` | ✅ All |
| `SMTP_PASS` | `your-16-char-app-password` | ✅ All |
| `NODE_ENV` | `production` | ✅ All |

## 4. Deploy
- Click "Deploy"
- Wait 1-2 minutes
- Done! 🎉

## 5. Test
- Visit your Vercel URL
- Test the contact form
- Check your email

---

**📖 Full guide:** See `VERCEL_DEPLOYMENT_GUIDE.md`

