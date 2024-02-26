# What was done
- [X] Created a new Vue 3 project using Vite
- [X] Book list view with **pagination**: `${spaUrl}/books`
- [X] Synopsis is truncated at 200 characters
- [X] Book detail view: `${spaUrl}/books/:slug
- [X] Responsive design
- [X] **Unit tests** for **composition functions**
- [X] **Typescript** usage
- [X] **SCSS** usage
- [ ] text search on the books list. Might be added via **computed property**
- [ ] comments section on the book page
- [ ] **E2E tests** with **Cypress**. Usually I add **screenshot tests**.

# Instructions

1. Create `.env` file:
```bash
$ cp .env.example .env
```

Set the `VITE_API_BASE_URL` variable to your API base URL.

2. Install the dependencies and run the dev server:

```bash
$ npm i

# Run the dev server
$ npm run start
```

3. To run Unit tests:

```bash
$ npm run test:unit
```
