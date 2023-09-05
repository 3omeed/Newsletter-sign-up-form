const subBtn = document.querySelector('.Subscribe-btn');
const mainContainer = document.querySelector('.container');
const secondContainer = document.querySelector('.second-container');
const dismissBtn = document.querySelector('.Dismiss');

const validation = () => {
  const regEx = /^\w+@\w+\.\w+(\.\w+)*$/gi;

  const input = document.querySelector('input');
  const errorEl = document.querySelector('.error-class');

  if (regEx.test(input.value)) {
    mainContainer.style.display = 'none';
    secondContainer.style.display = 'flex';
    errorEl.classList.add('invisible');
    input.classList.remove('error-input');

    const emailHandler = document.querySelector('#Email-handler');
    emailHandler.textContent = input.value;

  } else if (!regEx.test(input.value)) {
    errorEl.classList.remove('invisible');
    input.classList.add('error-input');
  }
};

subBtn.addEventListener('click', validation);
subBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

dismissBtn.addEventListener('click', () => {
  secondContainer.style.display = 'none';
  mainContainer.style.display = 'flex';
});
