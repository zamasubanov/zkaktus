"use strict";

window.onscroll = function () {
  scrollFunction();
};

var stepOne = document.querySelector(".step-one");
var stepTwo = document.querySelector(".step-two");
var stepThree = document.querySelector(".step-three");
var stepFour = document.querySelector(".step-four");
var stepFive = document.querySelector(".step-five");
var stepImg1 = document.querySelector(".step_img1");
var stepImg2 = document.querySelector(".step_img2");
var stepImg3 = document.querySelector(".step_img3");
var stepImg4 = document.querySelector(".step_img4");
var stepImg5 = document.querySelector(".step_img5");

function scrollFunction() {
  // if (document.body.scrollTop > worksBody.getBoundingClientRect().top - 450 > -200) {
  // }
  if (document.body.scrollTop > stepOne.getBoundingClientRect().top - 550) {
    stepImg1.style.display = "block";
    stepImg2.style.display = "none";
    stepImg4.style.display = "none";
    stepImg3.style.display = "none";
    stepImg5.style.display = "none";
  }

  if (document.body.scrollTop > stepTwo.getBoundingClientRect().top - 550) {
    stepImg2.style.display = "block";
    stepImg1.style.display = "none";
    stepImg4.style.display = "none";
    stepImg3.style.display = "none";
    stepImg5.style.display = "none";
  }

  if (document.body.scrollTop > stepThree.getBoundingClientRect().top - 550) {
    stepImg3.style.display = "block";
    stepImg2.style.display = "none";
    stepImg1.style.display = "none";
    stepImg5.style.display = "none";
    stepImg4.style.display = "none";
  }

  if (document.body.scrollTop > stepFour.getBoundingClientRect().top - 550) {
    stepImg4.style.display = "block";
    stepImg3.style.display = "none";
    stepImg2.style.display = "none";
    stepImg1.style.display = "none";
    stepImg5.style.display = "none";
  }

  if (document.body.scrollTop > stepFive.getBoundingClientRect().top - 550) {
    stepImg5.style.display = "block";
    stepImg4.style.display = "none";
    stepImg3.style.display = "none";
    stepImg2.style.display = "none";
    stepImg1.style.display = "none";
  }
}
"use strict";

$('.nav__burger').on("click", function (e) {
  $('.nav__burger, .nav__menu').toggleClass('active');
});
//# sourceMappingURL=all.js.map
