```svelte
<script>
  export let icon;
  let iconPath;

  $: {
    switch(icon) {
      case 'browser':
        iconPath = '/icons/browser.svg';
        break;
      case 'database':
        iconPath = '/icons/database.svg';
        break;
      case 'theme':
        iconPath = '/icons/theme.svg';
        break;
      default:
        iconPath = '/icons/default.svg';
    }
  }
</script>

<img src={iconPath} alt={icon} class="icon" />
```