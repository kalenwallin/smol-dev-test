# Timeline Website

This is a simple vertical timeline website that animates as the user scrolls down the page. Elements appear on both the left and right sides of the line in alternating style. Each element has a title, description, date, and an icon that describes its use. For example, if the element links to a website, the icon is a browser.

## Tech Stack

- SvelteKit
- Supabase for database

## Design

The design is clean and simple. Users can choose the theme using a two-color system.

## Getting Started

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`

## File Structure

- `src/routes/index.svelte`: The main entry point of the application.
- `src/routes/_layout.svelte`: The layout file for the application.
- `src/routes/timeline.svelte`: The timeline page.
- `src/components/TimelineElement.svelte`: The component for each timeline element.
- `src/components/ThemeSwitcher.svelte`: The component for the theme switcher.
- `src/lib/store.js`: The store file for managing state.
- `src/lib/api.js`: The API file for fetching data from the database.
- `src/lib/icons.js`: The file for managing icons.
- `src/lib/utils.js`: The utility file for helper functions.
- `static/global.css`: The global CSS file.
- `static/theme.css`: The CSS file for themes.
- `src/lib/db.js`: The database file for managing database schemas.
- `svelte.config.js`: The configuration file for Svelte.
- `package.json`: The package file for managing dependencies.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)