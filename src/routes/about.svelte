```svelte
<script>
  import { theme } from '../lib/store.js';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: var(--primary);
  }

  p {
    color: var(--secondary);
  }
</style>

<main>
  <h1>About</h1>
  <p>Welcome to our Timeline Website. This website allows you to create a simple vertical timeline that animates as you scroll down the page. Elements appear on both the left and right sides of the line in an alternating style. Each element has a title, description, and date. Elements also have an icon that describes its use.</p>
  <p>You can choose the theme of the website using a two-color system. Enjoy!</p>
</main>
```