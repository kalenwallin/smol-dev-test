```javascript
import { writable } from 'svelte/store';

// Store for the current theme
export const theme = writable('light');

// Store for the timeline data
export const timelineData = writable([]);
```