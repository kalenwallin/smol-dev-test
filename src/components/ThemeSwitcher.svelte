```svelte
<script>
  import { theme } from '../lib/store.js';
  import { switchTheme } from '../lib/theme.js';

  let currentTheme;

  $: currentTheme = $theme;

  function handleThemeChange() {
    switchTheme();
  }
</script>

<div id="theme-switcher">
  <button on:click={handleThemeChange}>
    Switch to {$theme === 'light' ? 'dark' : 'light'} theme
  </button>
</div>

<style>
  #theme-switcher {
    position: fixed;
    top: 10px;
    right: 10px;
  }

  #theme-switcher button {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  #theme-switcher button:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
</style>
```