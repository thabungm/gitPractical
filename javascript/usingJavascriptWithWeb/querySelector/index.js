/* console.log(document.getElementById('container1'));
console.log(document.querySelector('#container1'));
console.log(document.querySelector('.container2'));
 */

function onKeyDownHandler(event) {
  const { key, code } = event;
  console.log(`Key: ${key}; Code: ${code}`);
}

function onKeyUpHandler(event) {
  /*  console.log('onKeyup handler');
  console.log(event); */
}

function handleKeyPress(event) {
  const { key } = event;

  switch (key) {
    case 'ArrowRight':
      console.log('Moving Right');
      break;
    case 'ArrowLeft':
      console.log('Moving Left');
      break;

    case 'ArrowUp':
      console.log('Moving Up');
      break;
    case 'ArrowDown':
      console.log('Moving Down');
      break;
    default:
      console.log(`${key} not reconized`);

      break;
  }
}
