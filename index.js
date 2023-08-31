const slidesContainer = document.querySelector('.slides');
    const slideRadio1 = document.getElementById('slide-dot-1');
    const slideRadio2 = document.getElementById('slide-dot-2');
    let currentSlide = 0;

    function changeSlide() {
      currentSlide = 1 - currentSlide;
      slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
      slideRadio1.checked = currentSlide === 0;
      slideRadio2.checked = currentSlide === 1;
    }

    slideRadio1.addEventListener('click', () => {
      currentSlide = 0;
      slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
    });

    slideRadio2.addEventListener('click', () => {
      currentSlide = 1;
      slidesContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
    });

    setInterval(changeSlide, 5000); 
