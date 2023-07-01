```svelte
<script>
  import { getIcon } from '../lib/icons.js';
  export let element;
</script>

<style>
  .timeline-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .timeline-element:nth-child(odd) {
    flex-direction: row-reverse;
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .content {
    flex: 1;
    margin: 0 1rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .date {
    font-size: 0.875rem;
    color: var(--secondary-color);
  }
</style>

<div class="timeline-element">
  <img class="icon" src={getIcon(element.icon)} alt={element.title} />
  <div class="content">
    <h2 class="title">{element.title}</h2>
    <p class="description">{element.description}</p>
    <p class="date">{element.date}</p>
  </div>
</div>
```