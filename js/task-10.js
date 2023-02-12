const inputElenent = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const arrayElements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    
    arrayElements.push(div);
  }
  return arrayElements;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

createButton.addEventListener('click', () => {
  let elementsToAdd = createBoxes(inputElenent.value);
  boxes.append(...elementsToAdd);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
