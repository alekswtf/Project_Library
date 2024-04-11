const button = document.querySelector('.card-button');

button.addEventListener('click', () => {
  if (button.textContent === 'Buy') {
    button.textContent = 'Own';
  } else {
    button.textContent = 'Buy';
  }
});