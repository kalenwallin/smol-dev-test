const icons = {
  website: '<svg>...</svg>', // SVG code for website icon
  event: '<svg>...</svg>', // SVG code for event icon
  announcement: '<svg>...</svg>', // SVG code for announcement icon
  // Add more icons as needed
};

function getIcon(type) {
  return icons[type] || icons.default;
}

export { getIcon };