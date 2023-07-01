```svelte
<script>
  import { onMount } from 'svelte';
  import { timelineData } from '../lib/db.js';
  import Timeline from './timeline.svelte';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

  onMount(async () => {
    await timelineData.fetchTimelineData();
  });
</script>

<main>
  <ThemeSwitcher id="themeSwitcher" />
  <Timeline id="timeline" {timelineData} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
</style>
```