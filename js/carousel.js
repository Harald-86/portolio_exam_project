const urlOne =
  "https://steineriet.one/project_exam/wp-json/wp/v2/posts?_embed&per_page=4&page=1";
const urlTwo =
  "https://steineriet.one/project_exam/wp-json/wp/v2/posts?_embed&per_page=4&page=2";
const urlThree =
  "https://steineriet.one/project_exam/wp-json/wp/v2/posts?_embed&per_page=4&page=3";
const carouselContainer = document.querySelector(".carousel");
const sliderOne = document.querySelector(".slider_one");
const sliderTwo = document.querySelector(".slider_two");
const sliderThree = document.querySelector(".slider_three");

async function getPageOne(url) {
  try {
    const resultOne = await fetch(url);
    const pageOne = await resultOne.json();

    pageOne.forEach(function (first) {
      sliderOne.innerHTML += `

        <a href="details.html?id=${first.id}">
        <div class="cards">
          <img src="${first._embedded["wp:featuredmedia"]["0"].source_url}" alt="" class="thumbnail-img">
         
            <h3 id="card-title">${first.title.rendered} </h3>
            
           
        </div>
      </a>
        `;
    });
  } catch (error) {
    console.log(error);
    carouselContainer.innerHTML = displayError();
  }
}

getPageOne(urlOne);

async function getPageTwo(urlTwo) {
  try {
    const resultTwo = await fetch(urlTwo);
    const pageTwo = await resultTwo.json();

    pageTwo.forEach(function (second) {
      sliderTwo.innerHTML += `

        <a href="details.html?id=${second.id}">
        <div class="cards">
          <img src="${second._embedded["wp:featuredmedia"]["0"].source_url}" alt="" class="thumbnail-img">
         
            <h3 id="card-title">${second.title.rendered} </h3>
            
           
        </div>
      </a>
        `;
    });
  } catch (error) {
    console.log(error);
    carouselContainer.innerHTML = displayError();
  }
}

getPageTwo(urlTwo);

async function getPageThree(urlThree) {
  try {
    const resultThree = await fetch(urlThree);
    const pageThree = await resultThree.json();

    pageThree.forEach(function (third) {
      sliderThree.innerHTML += `

        <a href="details.html?id=${third.id}">
        <div class="cards">
          <img src="${third._embedded["wp:featuredmedia"]["0"].source_url}" alt="" class="thumbnail-img">
         
            <h3 id="card-title">${third.title.rendered} </h3>
            
           
        </div>
      </a>
        `;
    });
  } catch (error) {
    console.log(error);
    carouselContainer.innerHTML = displayError();
  }
}

getPageThree(urlThree);

let slidePosition = 0;
const slides = document.getElementsByClassName("slider");
const totalSlides = slides.length;

document.getElementById("carousel_button_next");
addEventListener("click", function () {
  moveToNextSlide();
});

document.getElementById("carousel_button_prev");
addEventListener("click", function () {
  moveToPrevSlide();
});

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("slider-visible");
    slide.classList.add("slider-hidden");
  }

  slides[slidePosition].classList.add("slider-visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
