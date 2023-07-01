```svelte
<script>
  import { theme } from '../lib/theme.js';
  import Icon from './Icon.svelte';

  export let title = '';
  export let description = '';
  export let date = '';
  export let icon = '';
  export let side = 'left';
</script>

<div class="timeline-element {side}" style="color: {theme.primary}; background-color: {theme.secondary}">
  <div class="timeline-element-icon">
    <Icon name="{icon}" />
  </div>
  <div class="timeline-element-content">
    <h2>{title}</h2>
    <p>{description}</p>
    <span>{date}</span>
  </div>
</div>

<style>
  .timeline-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 2em;
    border-radius: 0.5em;
  }

  .timeline-element.left {
    flex-direction: row;
  }

  .timeline-element.right {
    flex-direction: row-reverse;
  }

  .timeline-element-icon {
    flex-shrink: 0;
    margin-right: 1em;
  }

  .timeline-element-content h2 {
    margin: 0;
    margin-bottom: 0.5em;
  }

  .timeline-element-content p {
    margin: 0;
    margin-bottom: 0.5em;
  }

  .timeline-element-content span {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
```