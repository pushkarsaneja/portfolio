const buttonUp = document.querySelector(".move-anti-clockwise");
const buttonDown = document.querySelector(".move-clockwise");
const mainContainer = document.querySelector(".main-container");
let angle = 0;
buttonUp.addEventListener("click", function () {
  angle -= 90;
  const value = `rotate(${angle}deg)`;
  mainContainer.style.transform = value;
});

buttonDown.addEventListener("click", function () {
  angle += 90;
  const value = `rotate(${angle}deg)`;
  mainContainer.style.transform = value;
});
