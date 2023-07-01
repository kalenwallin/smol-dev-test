<script>
  import { onMount } from 'svelte';
  import { theme } from '../lib/theme.js';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

  let currentTheme;

  onMount(async () => {
    currentTheme = $theme;
  });
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: var(--text-color);
    background-color: var(--background-color);
  }
</style>

<main>
  <h1>Welcome to the Timeline Website</h1>
  <p>Scroll down to explore the timeline.</p>
  <ThemeSwitcher {currentTheme} />
</main>