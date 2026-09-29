# AI Prompt Log — PlayPower Labs Airbnb Listing Assignment

## Project context
Recreated the provided Airbnb listing reference as a desktop-first React/Vite application, with reusable components, Photo Tour and Lightbox interactions, MongoDB-backed listing data, an Express API, and production deployment.

## Prompt 1 — Plan the implementation
Build the assignment as a pixel-accurate Airbnb listing clone. Break the page into reusable React components rather than keeping everything in one file. Keep the implementation aligned with the reference layout, typography, spacing, colors, imagery, and interactions.

## Prompt 2 — Component architecture
Structure the application into separate components for the navbar, listing header, photo grid, property overview, highlights, description, sleeping arrangements, amenities, availability, booking card, reviews, location, host section, footer, Photo Tour, and Lightbox. Keep PhotoGrid and PhotoTour as separate galleries because they serve different UI flows.

## Prompt 3 — MongoDB and backend integration
Move listing data from frontend-only constants into MongoDB and expose it through an Express REST API. Create a Listing schema containing property information, photos, host details, amenities, highlights, description, cancellation policy, house rules, safety information, and nearby stays. Seed the listing and connect the React frontend to the API.

## Prompt 4 — Interaction implementation
Implement the required Photo Tour and Lightbox behavior. The Photo Tour should open from the listing's photo area / Show all photos action, and the Lightbox should support previous/next navigation and keyboard left/right controls.

## Prompt 5 — UI refinement
Refine spacing, typography, borders, icon treatment, button gradients, cards, and muted/unavailable amenity states to closely match the reference/Figma design. Keep the implementation reusable and avoid unnecessary duplication.

## Prompt 6 — Production deployment
Deploy the Express/MongoDB backend on Render and the React/Vite frontend on Vercel. Configure production environment variables so the frontend uses the Render API URL and the backend allows the Vercel production origin through CORS.

## Prompt 7 — Deployment debugging
Debug production issues methodically: MongoDB Atlas network access, Render service startup, Vercel build configuration, frontend API URL, and CORS between the Vercel frontend and Render backend. Verify the deployed API and live application after each fix.

## Result
The final implementation was completed end-to-end with frontend, backend, database integration, required interactions, and production deployment.
