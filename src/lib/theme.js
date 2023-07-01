```javascript
import { writable } from 'svelte/store';

// Define the initial theme
const initialTheme = {
  primary: '#ffffff',
  secondary: '#000000'
};

// Create a writable store for the theme
export const theme = writable(initialTheme);

// Function to toggle the theme
export function toggleTheme() {
  theme.update(currentTheme => {
    return currentTheme.primary === initialTheme.primary ? 
      { primary: '#000000', secondary: '#ffffff' } : 
      { ...initialTheme };
  });

  // Dispatch a custom event to notify other parts of the app
  const event = new CustomEvent('themeChanged');
  window.dispatchEvent(event);
}
```