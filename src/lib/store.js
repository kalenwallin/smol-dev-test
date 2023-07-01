import { writable } from 'svelte/store';

// Store for the theme
export const theme = writable('light');

// Store for the timeline elements
export const timelineElements = writable([]);