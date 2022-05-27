function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const spanColor = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

changeButton.addEventListener('click', getRandomHexColor =>  {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
