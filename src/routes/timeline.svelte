```svelte
<script>
  import { onMount } from 'svelte';
  import { db } from '../lib/database.js';
  import TimelineElement from '../components/TimelineElement.svelte';
  
  let timelineElements = [];

  async function fetchTimelineElements() {
    const { data, error } = await db.from('timeline').select('*').order('date', { ascending: false });
    if (error) {
      console.error(error);
    } else {
      timelineElements = data;
    }
  }

  onMount(fetchTimelineElements);

  function animateTimeline() {
    const elements = document.querySelectorAll('.timeline-element');
    const windowHeight = window.innerHeight;
    window.addEventListener('scroll', () => {
      elements.forEach(element => {
        const distanceFromTop = element.getBoundingClientRect().top;
        if (distanceFromTop - windowHeight <= 0) {
          element.classList.add('animate');
        }
      });
    });
  }

  onMount(animateTimeline);
</script>

<style>
  .timeline-element:nth-child(odd) {
    text-align: right;
  }
  .timeline-element:nth-child(even) {
    text-align: left;
  }
  .animate {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<div id="timeline">
  {#each timelineElements as element (element.id)}
    <TimelineElement class="timeline-element" {element} />
  {/each}
</div>
```