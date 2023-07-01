```javascript
import { writable } from 'svelte/store';

// Define the icons
const browserIcon = '<svg>...</svg>'; // Replace with actual SVG data
const eventIcon = '<svg>...</svg>'; // Replace with actual SVG data
const otherIcon = '<svg>...</svg>'; // Replace with actual SVG data

// Create a map of icon names to icon components
export const iconMap = writable({
  'browser': browserIcon,
  'event': eventIcon,
  'other': otherIcon
});
```