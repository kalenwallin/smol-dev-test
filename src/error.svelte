```svelte
<script>
  import { session } from '$app/stores';
  import { onMount } from 'svelte';
  let error;

  onMount(async () => {
    const { error: sessionError } = await session;
    error = sessionError || new Error('An unknown error occurred');
  });
</script>

<main>
  <h1>Error</h1>
  <p>{error.message}</p>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
</style>
```