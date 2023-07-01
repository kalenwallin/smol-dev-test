```svelte
<script>
  import { theme } from '../lib/theme.js';
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--text-color);
    background-color: var(--background-color);
  }
</style>

<main>
  <h1>Contact Us</h1>
  <p>For any inquiries, please email us at info@timeline.com</p>
</main>

<script>
  $: {
    document.body.style.setProperty('--text-color', theme.textColor);
    document.body.style.setProperty('--background-color', theme.backgroundColor);
  }
</script>
```