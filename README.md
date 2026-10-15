# Juniper Family Chiropractic Website

Angular-based website for a new Juniper Family Chiropractic web presence.

## Project focus

- Warm, welcoming family-centered design
- Prenatal and postpartum care highlighted
- Open and inviting messaging for all ages
- Mocked backend calls only (no real API integration yet)

## Tech stack

- Angular 21 (standalone components + routing)
- SCSS styling
- RxJS for mocked async data and simulated network latency

## Mock backend implementation

All backend calls are mocked in `src/app/services/mock-api.service.ts`.

- `getServices()` returns service cards
- `getTestimonials()` returns testimonial content
- `getFaqs()` returns FAQ items
- `submitContactForm()` simulates contact request submission

Each method includes a delayed Observable to emulate real API response timing.

## Development commands

Start development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## SEO and location pages

- Location page content, NAP, map links, page titles, and booking destinations are defined in `src/app/data/location-data.ts`.
- Primary routes are prerendered for GitHub Pages using `prerender-routes.txt`; update that file and `public/sitemap.xml` when adding or removing a primary route.
- Route navigation updates the page description, Open Graph URL/title, canonical link, and Organization/LocalBusiness JSON-LD.
- Location booking links currently use the shared Jane App URL, which asks patients to choose an office. Clicks add a `booking_click` object to `window.dataLayer` with `location` and `destination_url`; configure a Google Tag Manager trigger and Ads conversion tag before expecting Google Ads reporting. A Jane appointment completion event is not currently available from this site.
- The business confirmed the listed addresses and doctor assignments: Dr. Haven Wood in Greenville and Dr. Ashley Felak in North Augusta. Office hours are intentionally omitted. Add actual office photos after they are supplied and approved; do not infer location imagery from general brand photos.
- GitHub Pages cannot configure Google Business Profiles, Search Console, DNS/domain redirects, or HTTPS enforcement; verify those in the respective owner accounts.

## Notes for future backend integration

- Replace mock service methods with Angular `HttpClient` requests
- Keep existing models in `src/app/models/site.models.ts`
- Retain method signatures in `MockApiService` to minimize UI refactoring
