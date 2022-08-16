// function handleClick(event) {
//   console.log(event);
// }

// document
//   .getElementById('container')
const container = document.querySelector('#container');

container.addEventListener('click', function (event) {
  console.log('inside click', event);
});

container.addEventListener('dblclick', function (event) {
  console.log('dblclick', event);
});

container.addEventListener('contextmenu', function (event) {
  console.log('right click', event);
});

container.addEventListener('mouseenter', function (event) {
  console.log('mouseenter', event);
});

container.addEventListener('mouseleave', function (event) {
  console.log('mouseleave', event);
});

container.addEventListener('mousemove', function (event) {
  console.log('onmousemove', { x: event.screenX, y: event.screenY });
});
