const message = document.getElementById('thank_you');
const form = document.getElementsByTagName('form')[0];
const humburger = document.getElementById('humburger');
const popup_wrapper = document.getElementById('wrapper');

const humburger_icon = document.getElementById('humburger_icon');
const close_popup_btn = document.getElementById('close_popup_btn');
const close_humburger_icon = document.getElementById('close_humburger_icon');

humburger_icon.addEventListener('click', (event) => {
  humburger.style.display = 'flex';
});

close_humburger_icon.addEventListener('click', (event) => {
  humburger.style.display = 'none';
});

function submit(event) {
  event.preventDefault();
  close_popup_btn.addEventListener('click', () => {
    popup_wrapper.style.display = 'none';
  });
  popup_wrapper.style.display = 'flex';
}

form.addEventListener('submit', submit, false);
