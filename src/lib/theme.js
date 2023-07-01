import { writable } from 'svelte/store';

// Default theme
const defaultTheme = {
  primary: '#ffffff',
  secondary: '#000000'
};

// Create a writable store for theme
export const theme = writable(defaultTheme);

// Function to update the theme
export function updateTheme(newTheme) {
  theme.set(newTheme);
}

// Function to reset the theme to default
export function resetTheme() {
  theme.set(defaultTheme);
}