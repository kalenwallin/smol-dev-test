```svelte
<script>
  import { theme } from '../lib/store.js';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
</script>

<main>
  <ThemeSwitcher {theme} id="theme-switcher" />

  <h1>Contact Us</h1>
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

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
  }

  label {
    margin-top: 1em;
  }

  input, textarea {
    width: 100%;
    padding: 0.5em;
  }

  input[type="submit"] {
    margin-top: 1em;
    align-self: flex-end;
  }
</style>
```