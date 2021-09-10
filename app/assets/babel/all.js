"use strict";

var imgStep1 = document.querySelector(".img__step1");
var stepOne = document.querySelector(".step-one");
var worksOneNum = document.querySelector(".step_one_num");
var worksOneText = document.querySelector(".step_one-text");
var imgStep2 = document.querySelector(".img__step2");
var stepTwo = document.querySelector(".step-two");
var worksTwoNum = document.querySelector(".step_two-num");
var worksTwoText = document.querySelector(".step_two-text");
var imgStep3 = document.querySelector(".img__step3");
var stepThree = document.querySelector(".step-three");
var worksThreeNum = document.querySelector(".step_three-num");
var worksThreeText = document.querySelector(".step_three-text");
var imgStep4 = document.querySelector(".img__step4");
var stepFour = document.querySelector(".step-four");
var worksFourNum = document.querySelector(".step_four-num");
var worksFourText = document.querySelector(".step_four-text");
var imgStep5 = document.querySelector(".img__step5");
var stepFive = document.querySelector(".step-five");
var worksFiveNum = document.querySelector(".step_five-num");
var worksFiveText = document.querySelector(".step_five-text");

window.onscroll = function () {
  scrollFunction();
};

console.log($('.step-one').scrollTop());
console.log();

function scrollFunction() {
  if (document.body.scrollTop > stepOne.getBoundingClientRect().top - 550) {
    imgStep1.style.display = "block";
    stepOne.style.background = "#1C7B71";
    worksOneNum.style.color = "#BBD7D4";
    worksOneText.style.color = "#BBD7D4";
    imgStep2.style.display = "none";
    stepTwo.style.background = "#323B4E";
    worksTwoNum.style.color = "#989DA6";
    worksTwoText.style.color = "#989DA6";
    imgStep3.style.display = "none";
    stepThree.style.background = "#323B4E";
    worksThreeNum.style.color = "#989DA6";
    worksThreeText.style.color = "#989DA6";
  }

  if (document.body.scrollTop > stepTwo.getBoundingClientRect().top - 550) {
    imgStep1.style.display = "none";
    stepOne.style.background = "#323B4E";
    worksOneNum.style.color = "#989DA6";
    worksOneText.style.color = "#989DA6";
    imgStep3.style.display = "none";
    stepThree.style.background = "#323B4E";
    worksThreeNum.style.color = "#989DA6";
    worksThreeText.style.color = "#989DA6";
    imgStep2.style.display = "block";
    stepTwo.style.background = "#1C7B71";
    worksTwoNum.style.color = "#BBD7D4";
    worksTwoText.style.color = "#BBD7D4";
  }

  if (document.body.scrollTop > stepThree.getBoundingClientRect().top - 550) {
    imgStep2.style.display = "none";
    stepTwo.style.background = "#323B4E";
    worksTwoNum.style.color = "#989DA6";
    worksTwoText.style.color = "#989DA6";
    imgStep3.style.display = "block";
    stepThree.style.background = "#1C7B71";
    worksThreeNum.style.color = "#BBD7D4";
    worksThreeText.style.color = "#BBD7D4";
    imgStep4.style.display = "none";
    stepFour.style.background = "#323B4E";
    worksFourNum.style.color = "#989DA6";
    worksFourText.style.color = "#989DA6";
  }

  if (document.body.scrollTop > stepFour.getBoundingClientRect().top - 550) {
    imgStep3.style.display = "none";
    stepThree.style.background = "#323B4E";
    worksThreeNum.style.color = "#989DA6";
    worksThreeText.style.color = "#989DA6";
    imgStep5.style.display = "none";
    stepFive.style.background = "#323B4E";
    worksFiveNum.style.color = "#989DA6";
    worksFiveText.style.color = "#989DA6";
    imgStep4.style.display = "block";
    stepFour.style.background = "#1C7B71";
    worksFourNum.style.color = "#BBD7D4";
    worksFourText.style.color = "#BBD7D4";
  }

  if (document.body.scrollTop > stepFive.getBoundingClientRect().top - 550) {
    imgStep4.style.display = "none";
    stepFour.style.background = "#323B4E";
    worksFourNum.style.color = "#989DA6";
    worksFourText.style.color = "#989DA6";
    imgStep5.style.display = "block";
    stepFive.style.background = "#1C7B71";
    worksFiveNum.style.color = "#BBD7D4";
    worksFiveText.style.color = "#BBD7D4";
  }
}
"use strict";

$('.nav__burger').on("click", function (e) {
  $('.nav__burger, .nav__menu').toggleClass('active');
});
//# sourceMappingURL=all.js.map
