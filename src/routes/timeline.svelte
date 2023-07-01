```svelte
<script>
  import { onMount } from 'svelte';
  import { db } from '../lib/database.js';
  import { theme } from '../lib/store.js';
  import TimelineElement from '../components/TimelineElement.svelte';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

  let elements = [];

  onMount(async () => {
    elements = await db.getTimelineElements();
  });

  function addElement(element) {
    db.addElement(element);
    elements = [...elements, element];
  }
</script>

<ThemeSwitcher id="theme-switcher" {theme} />

<div id="timeline">
  {#each elements as element (element.id)}
    <TimelineElement {element} />
  {/each}
</div>

<style>
  #timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
```