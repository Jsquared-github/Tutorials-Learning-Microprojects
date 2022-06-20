const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const slideTime = 7500;
let autoSlide;

//Next slide
const nextSlide = () => {
  const current = document.querySelector(".current");
  //Removes current class
  current.classList.remove("current");
  //Check for next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    //Go back to Slide 1
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Previous Slide

const prevSlide = () => {
  const current = document.querySelector(".current");
  //Removes current class
  current.classList.remove("current");
  //Check for next slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    //Go back to Slide 1
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Button Events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, slideTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, slideTime);
  }
});

//Automate Slides

if (auto) {
  //Run next slide at slideTime
  autoSlide = setInterval(nextSlide, slideTime);
}
