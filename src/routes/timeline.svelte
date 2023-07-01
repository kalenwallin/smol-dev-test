```svelte
<script>
  import { onMount } from 'svelte';
  import { timelineData } from '../lib/store.js';
  import { fetchTimelineData } from '../lib/api.js';
  import { getIcon } from '../lib/icons.js';
  import TimelineElement from '../components/TimelineElement.svelte';

  let elements = [];

  onMount(async () => {
    elements = await fetchTimelineData();
    animateTimeline();
  });

  function animateTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    let lastScrollTop = 0;

    timelineContainer.addEventListener('scroll', () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        timelineContainer.classList.add('animate-down');
      } else {
        // upscroll code
        timelineContainer.classList.add('animate-up');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  }
</script>

<div id="timeline-container">
  {#each elements as element (element.id)}
    <TimelineElement
      title={element.title}
      description={element.description}
      date={element.date}
      icon={getIcon(element.icon)}
      side={element.id % 2 === 0 ? 'left' : 'right'}
    />
  {/each}
</div>
```