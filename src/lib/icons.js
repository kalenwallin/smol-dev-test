```javascript
export const getIcon = (type) => {
  switch (type) {
    case 'website':
      return 'fas fa-globe';
    case 'book':
      return 'fas fa-book';
    case 'video':
      return 'fas fa-video';
    case 'music':
      return 'fas fa-music';
    case 'image':
      return 'fas fa-image';
    default:
      return 'fas fa-question';
  }
};
```