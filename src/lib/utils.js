```javascript
export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export function alternateElements(array) {
    return array.map((element, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        return { ...element, side };
    });
}
```