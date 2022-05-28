function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let spanColor = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

changeButton.addEventListener('click', (event) =>  {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});

