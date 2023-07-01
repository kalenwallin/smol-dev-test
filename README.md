# Timeline Website

This is a simple vertical timeline website built with SvelteKit and Supabase. The timeline animates as the user scrolls down the page, with elements appearing on both the left and right sides of the line in an alternating style. Each element has a title, description, date, and an icon that describes its use.

## Tech Stack

- SvelteKit
- Supabase for database

## Design

The design is clean and simple, with a two-color system that users can switch between.

## Local Development Setup

Follow these steps to set up the development environment locally:

1. Clone the repository:

```bash
git clone https://github.com/your-repo/timeline-website.git
```

2. Navigate into the project directory:

```bash
cd timeline-website
```

3. Install the dependencies:

```bash
npm install
```

4. Set up your Supabase project and get the URL and public anon key. Replace the placeholders in `supabase/init.js` with your actual Supabase URL and key.

5. Start the development server:

```bash
npm run dev
```

Now, you can visit `http://localhost:5000` to view the app.

## Note

Remember to remove `Svelte` from all `.svelte` files before running the app.