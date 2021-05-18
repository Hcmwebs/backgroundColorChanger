const body = document.body;
const btn  = document.getElementById("primaryBtn");
const colorText = document.getElementById("colorText" );

let timer = 15000;

const changeBg = () => {

  const color1 = getRandomRGBColor();
  const color2 = getRandomRGBColor();
  const color3 = getRandomRGBColor();

  const colorName = `rgb(${color1}, ${color2}, ${color3})`;

  body.style.background = colorName;
  colorText.innerText = colorName;

};


//manually
btn.addEventListener('click', changeBg);

//automatically

window.addEventListener('DOMContentLoaded', () =>{

  setInterval(changeBg, timer);
});

const getRandomRGBColor = () => Math.floor(Math.random() * 256);
