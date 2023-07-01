```svelte
<script>
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  export let element;

  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });

    observer.observe($$self);
    return () => observer.disconnect();
  });
</script>

<div class="timeline-element" class:visible={isVisible}>
  <div class="timeline-icon">
    <Icon {element.icon} />
  </div>
  <div class="timeline-content">
    <h2>{element.title}</h2>
    <p>{element.description}</p>
    <span class="date">{element.date}</span>
  </div>
</div>

<style>
  .timeline-element {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }
  .timeline-element.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .timeline-icon {
    /* styles for the icon */
  }
  .timeline-content {
    /* styles for the content */
  }
  .date {
    /* styles for the date */
  }
</style>
```