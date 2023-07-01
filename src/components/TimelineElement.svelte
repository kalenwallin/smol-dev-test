```svelte
<script>
  import Icon from './Icon.svelte';
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>

<div class="timeline-element">
  <Icon type={element.icon} />
  <div>
    <h2>{element.title}</h2>
    <p>{element.description}</p>
    <time>{element.date}</time>
  </div>
</div>
```