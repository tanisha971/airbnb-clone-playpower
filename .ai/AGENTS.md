# AGENTS.md

## Project
PlayPower Labs — Airbnb Listing Clone

## Goals
- Reproduce the provided Airbnb reference UI accurately.
- Keep React code modular and reusable.
- Implement the required Photo Tour and Lightbox interactions.
- Use MongoDB + Express for listing data.
- Keep secrets out of source control.

## Technical conventions
- Frontend: React + Vite + Tailwind CSS.
- Backend: Node.js + Express.
- Database: MongoDB Atlas + Mongoose.
- Use reusable components instead of a monolithic page component.
- Preserve the distinction between the main PhotoGrid and the full PhotoTour gallery.
- Production frontend consumes the Render API through VITE_API_URL.
- Production backend uses environment variables for secrets and CLIENT_URL.

## Scope
Do not add unnecessary product features such as payments, authentication, admin dashboards, or a complete booking engine unless explicitly requested.

## Quality
- Test the main user flows after changes.
- Check desktop visual alignment against the reference.
- Avoid exposing credentials in source files, screenshots, or logs.
