```svelte
<script>
  import { theme } from '../lib/store.js';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
</script>

<main>
  <h1>Welcome to Timeline Website</h1>
  <p>Scroll down to see the timeline animate as you scroll.</p>
  <ThemeSwitcher id="theme-switcher" bind:theme={theme} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: var(--primary-color);
  }
  p {
    color: var(--secondary-color);
  }
</style>
```