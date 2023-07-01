```javascript
import { writable } from 'svelte/store';

// Create a writable store for theme
export const theme = writable({
  primary: '#ffffff',
  secondary: '#000000'
});
```