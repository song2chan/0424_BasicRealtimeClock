const body = document.querySelector("body");

const imgNumb = 5;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * imgNumb);
  return number;
}

function init() {
  const randNumb = genRandom();
  paintImg(randNumb);
}

init();
