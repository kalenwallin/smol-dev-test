```svelte
<script>
  import { theme } from '../lib/theme.js';
</script>

<style>
  main {
    color: {$theme.primary};
    background-color: {$theme.secondary};
  }
</style>

<main>
  <h1>About</h1>
  <p>This is a simple vertical timeline website. As you scroll down the page, elements will animate and appear on both the left and right sides of the line in an alternating style. Each element has a title, description, and date. Elements also have an icon that describes their use. For example, if the element links to a website, the icon will be a browser.</p>
  <p>You can choose the theme of the website using a two-color system. Enjoy!</p>
</main>
```