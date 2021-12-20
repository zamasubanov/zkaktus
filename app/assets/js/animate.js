window.onscroll = function() {scrollFunction()};
let stepOne = document.querySelector(".step-one");
let stepTwo = document.querySelector(".step-two");
let stepThree = document.querySelector(".step-three");
let stepFour = document.querySelector(".step-four");
let stepFive = document.querySelector(".step-five");


let stepImg1 = document.querySelector(".step_img1");
let stepImg2 = document.querySelector(".step_img2");
let stepImg3 = document.querySelector(".step_img3");
let stepImg4 = document.querySelector(".step_img4");
let stepImg5 = document.querySelector(".step_img5");

function scrollFunction() {
  if (document.body.scrollTop > (stepOne.getBoundingClientRect().top - 550)) {
      stepImg1.style.display = "block";
      stepImg2.style.display = "none";
      stepImg4.style.display = "none";
      stepImg3.style.display = "none";
      stepImg5.style.display = "none";
  } 
  if (document.body.scrollTop > (stepTwo.getBoundingClientRect().top - 550)) {
    stepImg2.style.display = "block";
    stepImg1.style.display = "none";
    stepImg4.style.display = "none";
    stepImg3.style.display = "none";
    stepImg5.style.display = "none";
  } 
  if (document.body.scrollTop > (stepThree.getBoundingClientRect().top - 550)) {
      stepImg3.style.display = "block";
      stepImg2.style.display = "none";
      stepImg1.style.display = "none";
      stepImg5.style.display = "none";
      stepImg4.style.display = "none";
  } 
  if (document.body.scrollTop > (stepFour.getBoundingClientRect().top - 550)) {
    stepImg4.style.display = "block";
    stepImg3.style.display = "none";
    stepImg2.style.display = "none";
    stepImg1.style.display = "none";
    stepImg5.style.display = "none";
  } 
  if (document.body.scrollTop > (stepFive.getBoundingClientRect().top - 550)) {
    stepImg5.style.display = "block";
    stepImg4.style.display = "none";
    stepImg3.style.display = "none";
    stepImg2.style.display = "none";
      stepImg1.style.display = "none";
  } 


}

