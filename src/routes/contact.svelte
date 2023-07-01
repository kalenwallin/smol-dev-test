```svelte
<script>
  import { onMount } from 'svelte';
  import { theme } from '../lib/store.js';

  let currentTheme;

  $: currentTheme = $theme;
</script>

<style>
  body {
    color: {currentTheme === 'light' ? '#000' : '#fff'};
    background-color: {currentTheme === 'light' ? '#fff' : '#000'};
  }
</style>

<main>
  <h1>Contact Us</h1>
  <p>Please feel free to reach out to us with any questions or concerns.</p>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <input type="submit" value="Submit">
  </form>
</main>
```