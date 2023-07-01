import { writable } from 'svelte/store';

// Initial theme
const initialTheme = {
  primary: '#ffffff',
  secondary: '#000000'
};

// Theme store
export const theme = writable(initialTheme);

// Function to update theme
export function updateTheme(newTheme) {
  theme.set(newTheme);
}

// Timeline data store
export const timelineData = writable([]);

// Function to update timeline data
export function updateTimelineData(newData) {
  timelineData.set(newData);
}