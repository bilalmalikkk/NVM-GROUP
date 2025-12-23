# Environment Setup for RVM Group

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp env.example .env
   ```

2. **Edit `.env` file:**
   ```bash
   # Open .env in your editor
   # Update VITE_API_URL with your CMS URL
   ```

## Environment Variables

### Required Variables

```env
# CMS API URL (same backend as Nordic-Medtek)
VITE_API_URL=https://nordic-medtek-cms-production.up.railway.app
```

### For Local Development

If you're running the CMS locally:

```env
VITE_API_URL=http://localhost:3001
```

## CMS URL Configuration

Since you're using the same CMS backend as Nordic-Medtek, use the same Railway URL:

**Production:**
```
VITE_API_URL=https://nordic-medtek-cms-production.up.railway.app
```

**Local Development:**
```
VITE_API_URL=http://localhost:3001
```

## Important Notes

1. **No `/api` suffix**: The `VITE_API_URL` should be the base URL without `/api`
   - ✅ Correct: `https://nordic-medtek-cms-production.up.railway.app`
   - ❌ Wrong: `https://nordic-medtek-cms-production.up.railway.app/api`

2. **The components automatically append `/api/news`** to the base URL

3. **After creating `.env`**, restart your dev server:
   ```bash
   npm run dev
   ```

## Verification

To verify your setup is working:

1. Start your dev server: `npm run dev`
2. Navigate to: `http://localhost:5173/#/admin`
3. Try logging in with your CMS credentials
4. If login works, your environment is configured correctly!

## Troubleshooting

### API not connecting?
- Check that `VITE_API_URL` is set correctly
- Make sure there's no `/api` at the end
- Verify your CMS is running and accessible
- Check browser console for CORS errors

### CORS errors?
- Add your frontend URL to `FRONTEND_URL` in CMS environment variables
- Or update `allowedOrigins` in `Nordic-Medtek-CMS/server.js`

