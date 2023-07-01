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
    animation: fadeIn 1s ease-in-out;
  }

  .timeline-element:nth-child(odd) {
    flex-direction: row-reverse;
  }

  .icon {
    font-size: 2em;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>

<div class="timeline-element">
  <div class="icon">
    {#await getIcon(element.icon)}
      <p>Loading...</p>
    {:then icon}
      {@html icon}
    {:catch error}
      <p>Error loading icon</p>
    {/await}
  </div>
  <div class="content">
    <h2>{element.title}</h2>
    <p>{element.description}</p>
    <p>{element.date}</p>
  </div>
</div>
```