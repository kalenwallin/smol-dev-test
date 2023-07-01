import { writable } from 'svelte/store';

// Define the initial theme
const initialTheme = {
  primary: '#ffffff',
  secondary: '#000000'
};

// Create a writable store for the theme
export const theme = writable(initialTheme);

// Function to change the theme
export const changeTheme = (newTheme) => {
  theme.set(newTheme);
};