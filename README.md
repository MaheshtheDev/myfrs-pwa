<p align="center">
    <img src="./public/icon-256x256.png" alt="alt_text" width="70" />
</p>

<h1 align="center">myFRS</h1>

myFRS is a Progressive Web Application built with TypeScript and Next.js.

## Features

- Create, update, and delete fuel loads
- View a list of all fuel loads
- Filter fuel loads by date, tenant, etc.

## Tech Stack

- TypeScript
- Next.js
- Prisma
- Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Project Structure
`components/`: Contains reusable components like `enter-details.tsx` and `load-card.tsx`.

`lib/`: Contains utility functions and configurations for Prisma.

`pages/`: Contains the application's pages and API routes.

`prisma/`: Contains Prisma schema and migrations.

`public/`: Contains static files like images.

`styles/`: Contains global and module-specific styles.
API Routes

### API Routes

`/api/hello`: Sample API route.

`/api/loads`: API route for handling loads.

`/api/tds`: API route for handling TDS.

`/api/user`: API route for handling user data.

`/api/auth/`: API routes for handling authentication.

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.