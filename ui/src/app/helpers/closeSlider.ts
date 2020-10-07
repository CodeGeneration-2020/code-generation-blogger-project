export default function closeLocationSlider(match, callback) {
  if (typeof match !== 'string') {
    return;
  }
  const classes = [
    'selection-list',
    'slick-list',
    'slick-slider',
    'slider-container',
    'location-search',
    'slick-arrow',
    'item',
  ];
  const result = classes.some(e => match.indexOf(e) !== -1 && e);
  if (!result) {
    callback(null);
  }
}
