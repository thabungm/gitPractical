const container = document.querySelector('#container');
container.addEventListener('click', function (event) {
  const { clientX, clientY } = event;
  console.log('click');
});

container.addEventListener('dblclick', function (event) {
  const { clientX, clientY } = event;
  console.log('dblclick');
});

container.addEventListener('contextmenu', function (event) {
  const { clientX, clientY } = event;
  console.log('rightclick');
});

container.addEventListener('mouseenter', function (event) {
  const { clientX, clientY } = event;
  console.log('mouseenter');
});

container.addEventListener('mouseleave', function (event) {
  const { clientX, clientY } = event;
  console.log('mouseleave');
});

container.addEventListener('mousemove', function (event) {
  const { clientX, clientY } = event;
  console.log(`mouseleave ${clientX + ' ' + clientY}`);
});
