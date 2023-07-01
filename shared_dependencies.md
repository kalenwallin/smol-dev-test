1. Exported Variables:
   - `theme` (src/lib/store.js): The current theme of the website.
   - `timelineData` (src/lib/db.js): The data for the timeline elements fetched from the database.

2. Data Schemas:
   - `TimelineElement` (src/lib/db.js): Schema for each timeline element, including fields for title, description, date, and icon.

3. ID Names of DOM Elements:
   - `timeline` (src/routes/timeline.svelte): The main timeline container.
   - `themeSwitcher` (src/components/ThemeSwitcher.svelte): The theme switcher component.
   - `timelineElement` (src/components/TimelineElement.svelte): Each individual timeline element.

4. Message Names:
   - `themeChanged` (src/components/ThemeSwitcher.svelte): Event emitted when the theme is changed.
   - `elementAdded` (src/routes/timeline.svelte): Event emitted when a new timeline element is added.

5. Function Names:
   - `fetchTimelineData` (src/lib/db.js): Function to fetch timeline data from the database.
   - `changeTheme` (src/lib/store.js): Function to change the current theme.
   - `getIcon` (src/lib/icons.js): Function to get the appropriate icon for a timeline element.
   - `createTimelineElement` (src/lib/api.js): Function to create a new timeline element in the database.
   - `updateTimelineElement` (src/lib/api.js): Function to update an existing timeline element in the database.
   - `deleteTimelineElement` (src/lib/api.js): Function to delete a timeline element from the database.