```svelte
<script>
  import { session } from '$app/stores';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
</script>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1em;
  }
</style>

<header>
  <ThemeSwitcher id="theme-switcher" />
</header>

<main>
  <slot></slot>
</main>

<footer>
  <p>&copy; 2022 Timeline Website</p>
</footer>
```