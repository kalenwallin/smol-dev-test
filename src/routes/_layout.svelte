```svelte
<script>
  import { theme } from '../lib/store.js';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
</script>

<main>
  <ThemeSwitcher id="theme-switcher" bind:theme={$theme} />
  <slot></slot>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  :global(body) {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
</style>
```