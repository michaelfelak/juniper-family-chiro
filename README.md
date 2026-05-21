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

## Notes for future backend integration

- Replace mock service methods with Angular `HttpClient` requests
- Keep existing models in `src/app/models/site.models.ts`
- Retain method signatures in `MockApiService` to minimize UI refactoring
