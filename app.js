const body = document.body;
const btn  = document.getElementById("primaryBtn");
const colorText = document.getElementById("colorText" );

btn.addEventListener('click', () => {

  const color1 = getRandomRGBColor();
  const color2 = getRandomRGBColor();
  const color3 = getRandomRGBColor();

  const colorName = `rgb(${color1}, ${color2}, ${color3})`;

  body.style.background = colorName;
  colorText.innerText = colorName;
})

const getRandomRGBColor = () => Math.floor(Math.random() * 256);


