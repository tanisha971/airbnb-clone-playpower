# CLAUDE.md

## Project Overview
Desktop-first Airbnb listing clone created for the PlayPower Labs take-home assignment.

## Architecture
React/Vite frontend -> Express REST API -> MongoDB Atlas.

## Important UI flows
1. Listing page -> Show all photos -> Photo Tour
2. Photo Tour -> Lightbox
3. Lightbox -> previous/next navigation and keyboard arrow controls

## Data
The listing is fetched from the backend using:
`GET /api/listings/:listingId`

The frontend uses `VITE_API_URL` in production.

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Backend CORS must allow the production Vercel origin.

## Security
Never commit `.env`, MongoDB credentials, API keys, or other secrets.
