function displayClock(timeZone, target) {
  setInterval(function () {
    const now = new Date();
    const dateLocale = now.toLocaleString('en-US', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    document.querySelector(target).innerText = `${timeZone}:${dateLocale}`;
  }, 1000);
}

displayClock('America/Cancun', '.eastern');
displayClock('Asia/Kolkata', '.asian');
displayClock('Canada/Atlantic', '.central');
