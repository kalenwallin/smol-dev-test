<script>
  import { theme, updateTheme } from '../lib/store.js';

  let selectedTheme;

  const changeTheme = () => {
    updateTheme(selectedTheme);
  }
</script>

<select id="theme-switcher" bind:value={selectedTheme} on:change={changeTheme}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<style>
  #theme-switcher {
    position: fixed;
    top: 10px;
    right: 10px;
  }
</style>