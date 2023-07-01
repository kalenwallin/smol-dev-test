```svelte
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  onMount(async () => {
    await goto('/timeline');
  });
</script>

<main>
  <h1>Welcome to Timeline Website</h1>
  <p>Loading...</p>
</main>
```