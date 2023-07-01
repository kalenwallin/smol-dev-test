```svelte
<script>
  import { onMount } from 'svelte';
  import { timelineData } from '../lib/store.js';
  import { fetchTimelineData } from '../lib/api.js';
  import Timeline from './timeline.svelte';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

  onMount(async () => {
    timelineData.set(await fetchTimelineData());
  });
</script>

<main>
  <ThemeSwitcher id="theme-switcher" />
  <Timeline id="timeline-container" {timelineData} />
</main>
```