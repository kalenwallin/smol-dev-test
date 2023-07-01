```javascript
import { writable } from 'svelte/store';

export const theme = writable('light');

export function switchTheme() {
    theme.update(value => value === 'light' ? 'dark' : 'light');
}

theme.subscribe(value => {
    document.body.className = value;
});
```