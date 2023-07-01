1. Exported Variables:
   - `theme` in `src/lib/store.js`: This variable will be used across multiple components to apply the user-selected theme.
   - `timelineData` in `src/lib/store.js`: This variable will store the timeline data fetched from the database.

2. Data Schemas:
   - `TimelineElement` in `src/lib/db.js`: This schema will define the structure of each timeline element, including fields for title, description, date, and icon.

3. ID Names of DOM Elements:
   - `timeline-container` in `src/routes/timeline.svelte`: This ID will be used to reference the main timeline container for scroll animations.
   - `theme-switcher` in `src/components/ThemeSwitcher.svelte`: This ID will be used to reference the theme switcher component.

4. Message Names:
   - `themeChanged` in `src/components/ThemeSwitcher.svelte`: This message will be dispatched when the user changes the theme.
   - `timelineUpdated` in `src/lib/api.js`: This message will be dispatched when the timeline data is updated.

5. Function Names:
   - `fetchTimelineData` in `src/lib/api.js`: This function will be used to fetch timeline data from the Supabase database.
   - `updateTheme` in `src/lib/store.js`: This function will be used to update the current theme in the store.
   - `getIcon` in `src/lib/icons.js`: This function will be used to get the appropriate icon for each timeline element based on its type.
   - `animateTimeline` in `src/routes/timeline.svelte`: This function will be used to animate the timeline as the user scrolls down the page.