```svelte
<script>
  import { theme, changeTheme } from '../lib/store.js';

  let selectedTheme;

  const handleThemeChange = () => {
    changeTheme(selectedTheme);
    dispatch('themeChanged', selectedTheme);
  };
</script>

<style>
  select {
    margin: 1em;
    padding: 0.5em;
    font-size: 1em;
  }
</style>

<select bind:value={selectedTheme} on:change={handleThemeChange}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
```