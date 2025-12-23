# Vercel Environment Variables Setup

## Problem
Your app is trying to connect to `http://localhost:3001` in production, which won't work. You need to set the `VITE_API_URL` environment variable in Vercel.

## Solution: Set Environment Variable in Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your **rvm-group** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add the following:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://nordic-medtek-cms-production.up.railway.app`
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**
7. **Redeploy** your project (go to Deployments → click the three dots → Redeploy)

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variable
vercel env add VITE_API_URL

# When prompted, enter:
# Value: https://nordic-medtek-cms-production.up.railway.app
# Environment: Production, Preview, Development (select all)
```

### Option 3: Via Vercel Dashboard → Settings → Environment Variables

1. Navigate to: https://vercel.com/[your-username]/[your-project]/settings/environment-variables
2. Add:
   - Key: `VITE_API_URL`
   - Value: `https://nordic-medtek-cms-production.up.railway.app`
   - Environments: Production, Preview, Development
3. Save and redeploy

## Important Notes

⚠️ **After adding the environment variable, you MUST redeploy for it to take effect!**

- Environment variables are only available at build time for Vite
- Changes to environment variables require a new deployment
- The variable name must start with `VITE_` for Vite to expose it to the client

## Verify It's Working

After redeploying, check:
1. Open browser console on your deployed site
2. Look for: `API_BASE_URL: https://nordic-medtek-cms-production.up.railway.app`
3. News should load without connection errors

## Current Fallback

I've updated the code to use the production URL as a fallback, but it's still best practice to set it as an environment variable in Vercel.

