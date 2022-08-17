document
  .querySelector('.container0')
  .addEventListener('click', function (event) {
    console.log('container0 clicked');
  });

document
  .querySelector('.container1')
  .addEventListener('click', function (event) {
    event.stopPropagation();

    console.log('container1 clicked');
  });

document
  .querySelector('.container2')
  .addEventListener('click', function (event) {
    console.log('container2 clicked');
  });
