const humburger = document.getElementById('humburger');
const humburger_icon = document.getElementById('humburger_icon');
const close_humburger_icon = document.getElementById('close_humburger_icon');

humburger_icon.addEventListener('click', (event) => {
  humburger.style.display = 'flex';
});

close_humburger_icon.addEventListener('click', (event) => {
  console.log(event.currentTarget);
  humburger.style.display = 'none';
});
