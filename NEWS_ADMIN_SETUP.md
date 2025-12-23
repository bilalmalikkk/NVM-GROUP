# News Admin Setup Guide

## Overview

A complete news management system has been added to your CMS. You can now:
- Add, edit, and delete news items
- Manage news in both Norwegian and English
- Control publication status (Draft, Published, Archived)
- Access news through a simple admin interface

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your `rvm-group` directory (if it doesn't exist):

```env
VITE_API_URL=https://your-cms-api-url.railway.app
```

Replace `your-cms-api-url.railway.app` with your actual CMS API URL from Railway.

### 2. Access Admin Interface

To access the news admin interface, navigate to:
```
http://localhost:5173/#/admin
```

Or in production:
```
https://your-website.com/#/admin
```

### 3. Login

Use your existing CMS admin credentials:
- Username: (your admin username)
- Password: (your admin password)

The same credentials you use for managing products will work for news.

## Features

### News Management
- **Create News**: Click "Add News" button
- **Edit News**: Click the edit icon on any news item
- **Delete News**: Click the delete icon (with confirmation)
- **View Status**: See Draft, Published, or Archived status

### News Fields
- **Title**: Required - The news headline
- **Description**: Short description shown in the news card
- **Content**: Full article content (optional)
- **Date**: Publication date
- **Language**: Norwegian (no) or English (en)
- **Status**: 
  - Draft: Not visible on public site
  - Published: Visible on public site
  - Archived: Hidden from public site
- **Image Key**: Select from predefined images (cam-x2, partners, production)
- **Image URL**: Or provide a full image URL
- **Link**: Optional external link

## API Endpoints

### Public Endpoints
- `GET /api/news?status=PUBLISHED&language=no` - Get published news in Norwegian
- `GET /api/news?status=PUBLISHED&language=en` - Get published news in English
- `GET /api/news/:id` - Get single news item

### Admin Endpoints (Require Authentication)
- `POST /api/news` - Create news
- `PUT /api/news/:id` - Update news
- `DELETE /api/news/:id` - Delete news

## Deployment

### CMS Backend (Railway)
1. Push your changes to the CMS repository
2. Railway will automatically deploy
3. The news table will be created automatically on first run
4. Make sure `FRONTEND_URL` includes your RVM Group website URL

### Frontend (Vercel/Netlify)
1. Set environment variable: `VITE_API_URL` to your CMS API URL
2. Deploy your frontend
3. Access admin at: `https://your-website.com/#/admin`

## Security Notes

- Admin interface requires authentication
- Token is stored in localStorage
- Only authenticated users can create/edit/delete news
- Public site only shows PUBLISHED news items

## Troubleshooting

### Can't login?
- Check that your API URL is correct in `.env`
- Verify your CMS is running and accessible
- Check browser console for errors

### News not showing on public site?
- Make sure news status is set to "PUBLISHED"
- Check that language matches (no/en)
- Verify API URL is correct
- Check browser console for API errors

### CORS errors?
- Add your frontend URL to `FRONTEND_URL` in CMS environment variables
- Or add it directly to `allowedOrigins` in `server.js`

## Support

For issues or questions, check:
1. Browser console for errors
2. CMS server logs
3. API health endpoint: `GET /api/health`

