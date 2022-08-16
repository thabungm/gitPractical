function handleKeyDown(evnt) {
  const { code } = evnt;
  console.log(`keydown ${code}`);
}

function handleKeyUp(event) {
  console.log(`keyup ${event.code}`);
}

function onKeyPress(evnt) {
  console.log(`keypress ${evnt.code}`);
}

function handlePressBody(event) {
  console.log(`keypress body ${event.code}`);
}
function keydownListener(event) {
  console.log(event);
}
document.body.addEventListener('keydown', keydownListener);
