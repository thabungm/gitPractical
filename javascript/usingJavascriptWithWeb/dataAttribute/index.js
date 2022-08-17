// console.log('hello');

// console.log(document.querySelectorAll('.player'));
document.querySelectorAll('.player').forEach(function (playerEl) {
  playerEl.addEventListener('click', function (event) {
    // console.log('I am clicked');
    const { id, score, name } = event.currentTarget.dataset;
    const message = `
    Id: ${id}
    Score: ${score}
    Name: ${name}
    `;
    const container = document.querySelector('.container');
    container.innerText = message;
    // alert(message);
  });
});
