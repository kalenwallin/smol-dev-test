```svelte
<script>
  import { theme } from '../lib/theme.js';

  let selectedTheme = $theme;

  function switchTheme() {
    selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';
    theme.set(selectedTheme);
  }
</script>

<style>
  .theme-switcher {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
</style>

<div id="theme-switcher" class="theme-switcher" on:click={switchTheme}>
  {selectedTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
</div>
```