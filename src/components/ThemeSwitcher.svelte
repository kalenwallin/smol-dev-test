```svelte
<script>
  import { theme, toggleTheme } from '../lib/theme.js';
  import { onMount } from 'svelte';

  let currentTheme;

  onMount(async () => {
    currentTheme = $theme;
  });

  const handleThemeChange = () => {
    toggleTheme();
    currentTheme = $theme;
  };
</script>

<div id="theme-switcher" on:click={handleThemeChange}>
  <p>Current Theme: {currentTheme}</p>
</div>

<style>
  #theme-switcher {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
  }
</style>
```