```svelte
<script>
  import { onMount } from 'svelte';
  import { timelineData } from '../lib/store.js';
  import TimelineElement from '../components/TimelineElement.svelte';
  import { fetchTimelineData } from '../lib/api.js';

  let data = [];

  onMount(async () => {
    data = await fetchTimelineData();
    timelineData.set(data);
  });
</script>

<style>
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div id="timeline" class="timeline">
  {#each $timelineData as element, index (element.id)}
    <TimelineElement {element} {index} />
  {/each}
</div>
```