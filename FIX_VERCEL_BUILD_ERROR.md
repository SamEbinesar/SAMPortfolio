# Fix Vercel Build Error: "vite: command not found"

## The Problem

You're getting this error:
```
sh: line 1: vite: command not found
Error: Command "npm run build" exited with 127
```

This happens because Vercel can't find Vite during the build process.

## Solution 1: Check Vercel Project Settings (IMPORTANT!)

The most common cause is the **Root Directory** setting in Vercel.

### Steps:

1. **Go to Vercel Dashboard** → Your Project
2. **Click "Settings"** (top menu)
3. **Click "General"** (left sidebar)
4. **Scroll to "Root Directory"**
5. **Make sure it's set to:** `frontend`
   - If it's empty or set to something else, click **"Edit"**
   - Enter: `frontend`
   - Click **"Save"**
6. **Redeploy** your project

## Solution 2: Verify package.json

I've updated your `package.json` to move Vite to `dependencies` (required for production builds).

Make sure you:
1. **Commit the changes:**
   ```bash
   git add frontend/package.json
   git commit -m "Fix: Move vite to dependencies for Vercel build"
   git push origin main
   ```
2. **Vercel will auto-redeploy** after you push

## Solution 3: Manual Build Test

Test the build locally first:

```bash
cd frontend
npm install
npm run build
```

If this works locally, the issue is with Vercel configuration.

## Solution 4: Update Vercel Settings Manually

If Root Directory is already set to `frontend`, try these settings in Vercel Dashboard:

1. **Go to Settings → General**
2. **Build & Development Settings:**
   - **Framework Preset:** `Vite`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (leave as default)
   - **Output Directory:** `dist` (leave as default)
   - **Install Command:** `npm install` (leave as default)

3. **Click "Save"**
4. **Redeploy**

## Solution 5: Clear Build Cache

Sometimes Vercel's cache causes issues:

1. **Go to Vercel Dashboard** → Your Project
2. **Settings** → **General**
3. **Scroll to "Build Cache"**
4. **Click "Clear Build Cache"**
5. **Redeploy**

## Quick Fix Checklist

- [ ] Root Directory in Vercel is set to `frontend`
- [ ] Committed updated `package.json` (with vite in dependencies)
- [ ] Pushed changes to GitHub
- [ ] Cleared build cache in Vercel
- [ ] Redeployed project

## After Fixing

1. **Wait for deployment to complete** (1-2 minutes)
2. **Check deployment logs:**
   - Go to "Deployments" tab
   - Click on the latest deployment
   - Check "Build Logs" - should show successful build
3. **Test your site:**
   - Visit: https://reactportfolioweb.vercel.app/
   - Everything should work now!

## Still Not Working?

If it still fails:

1. **Check the build logs** in Vercel:
   - Go to Deployments → Latest deployment → Build Logs
   - Look for the exact error message
   - Share the error with me

2. **Try removing vercel.json temporarily:**
   - Delete `frontend/vercel.json`
   - Let Vercel auto-detect settings
   - Redeploy

3. **Verify node_modules:**
   - Make sure `frontend/node_modules` exists locally
   - If not, run `cd frontend && npm install`

## Most Likely Fix

**90% of the time, the issue is Root Directory not set to `frontend` in Vercel Dashboard.**

Go to: **Vercel Dashboard → Settings → General → Root Directory → Set to `frontend` → Save → Redeploy**

This should fix it! 🚀

