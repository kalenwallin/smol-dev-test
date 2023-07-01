```svelte
<script>
  import { iconMap } from '../lib/icons.js';
  export let name = '';
</script>

<svelte:component this={iconMap[name]} />
```