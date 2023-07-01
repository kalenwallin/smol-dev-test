```svelte
<script>
  import { onMount } from 'svelte';
  import { timelineData } from '../lib/db.js';
  import TimelineElement from '../components/TimelineElement.svelte';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

  let elements = [];

  onMount(async () => {
    elements = await timelineData();
  });
</script>

<ThemeSwitcher />

<div id="timeline">
  {#each elements as element, index (element.id)}
    <TimelineElement
      title={element.title}
      description={element.description}
      date={element.date}
      icon={element.icon}
      side={index % 2 === 0 ? 'left' : 'right'}
    />
  {/each}
</div>

<style>
  #timeline {
    position: relative;
    margin: 0 auto;
    padding: 50px 0;
    width: 80%;
    max-width: 800px;
  }
</style>
```