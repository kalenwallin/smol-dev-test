```javascript
export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export function alternateElementSide(index) {
    return index % 2 === 0 ? 'left' : 'right';
}
```