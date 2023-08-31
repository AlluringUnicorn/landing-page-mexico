const slidesContainer = document.querySelector(".slides");
const slideRadio1 = document.getElementById("slide-dot-1");
const slideRadio2 = document.getElementById("slide-dot-2");
let currentSlide = 0;

function changeSlide() {
  currentSlide = 1 - currentSlide;
  slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
  slideRadio1.checked = currentSlide === 0;
  slideRadio2.checked = currentSlide === 1;
}

slideRadio1.addEventListener("click", () => {
  currentSlide = 0;
  slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
});

slideRadio2.addEventListener("click", () => {
  currentSlide = 1;
  slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
});

setInterval(changeSlide, 5000);

function updateStyles() {
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1024) {
    slide1.style.background = `
      linear-gradient(
        0deg,
        rgba(41, 59, 43, 0.35) 0%,
        rgba(41, 59, 43, 0.35) 100%
      ),
      radial-gradient(
        58.29% 46% at 50% 54%,
        rgba(41, 59, 43, 0) 50.26%,
        #293b2b 100%
      ),
      url('/img/banner_fans_mob.png') center / cover no-repeat
    `;
    slide2.style.background = `
      linear-gradient(
        0deg,
        rgba(41, 59, 43, 0.35) 0%,
        rgba(41, 59, 43, 0.35) 100%
      ),
      radial-gradient(
        58.29% 46% at 50% 54%,
        rgba(41, 59, 43, 0) 50.26%,
        #293b2b 100%
      ),
      url('/img/banner_girl_mob.png') center / cover no-repeat
    `;
  }
}

updateStyles();
window.addEventListener("resize", updateStyles);
