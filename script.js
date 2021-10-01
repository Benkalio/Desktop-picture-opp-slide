const containerSlider = document.querySelector(".container-slider"),
  rightSlide = document.querySelector(".slide-right"),
  leftSlide = document.querySelector(".slide-left"),
  upButton = document.querySelector(".up-button"),
  downButton = document.querySelector(".down-button"),
  //TARGETING ALL THE DIVS WITH BACKGROUND IMAGES LENGTH
  slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

if (upButton) {
  upButton.addEventListener("click", () => changeSlide("up"));
}
if (downButton) {
  downButton.addEventListener("click", () => changeSlide("down"));
}
const changeSlide = (direction) => {
  const sliderHeight = containerSlider.clientHeight;

  //DIRECTION THAT THE ARROW IS CLICKED TO MOVE
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  //TO TRANSFORM THE COLOR (LEFT) PART OF THE SCREEN
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
