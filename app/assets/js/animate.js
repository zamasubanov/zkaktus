window.onscroll = function() {scrollFunction()};

var stepOne = document.querySelector(".step-one");
var stepTwo = document.querySelector(".step-two");
var stepThree = document.querySelector(".step-three");
var stepFour = document.querySelector(".step-four");
var stepFive = document.querySelector(".step-five");
var imgStep1 = document.querySelector(".img__step1");
var imgStep2 = document.querySelector(".img__step2");
var imgStep3 = document.querySelector(".img__step3");
var imgStep4 = document.querySelector(".img__step4");
var imgStep5 = document.querySelector(".img__step5");
var worksStepsImg = document.querySelector(".works__steps_img")
var worksBody = document.querySelector(".works__body")


function scrollFunction() {
  if (document.body.scrollTop > worksBody.getBoundingClientRect().top - 450 > -200) {
    console.log(worksBody.getBoundingClientRect().top - 450);
    imgStep1.style.position = 'absolute';
      imgStep1.style.top = '-107%';
      imgStep1.style.right = '117px';
    imgStep2.style.display = "none";
    imgStep3.style.display = "none";
    imgStep4.style.display = "none";
    imgStep5.style.display = "none";
  }
  if (document.body.scrollTop > (stepOne.getBoundingClientRect().top - 400)) {
      imgStep1.style.display = "block";
      imgStep2.style.display = "none";
  } 
  // if (document.body.scrollTop < (stepOne.getBoundingClientRect().top + 100)) {
  //     imgStep1.style.position = 'absolute';
  //     imgStep1.style.top = '-123%';
  //     imgStep1.style.right = '190px';
  // }
  if (document.body.scrollTop > (stepTwo.getBoundingClientRect().top - 550)) {
    imgStep1.style.display = "none";
    imgStep2.style.display = "block";
    imgStep3.style.display = "none";
  } 
  if (document.body.scrollTop > (stepThree.getBoundingClientRect().top - 550)) {
    imgStep3.style.display = "block";
    imgStep4.style.display = "none";
  } 
  if (document.body.scrollTop > (stepFour.getBoundingClientRect().top - 550)) {
    imgStep4.style.display = "block";
    imgStep5.style.display = "none";
  } 
  if (document.body.scrollTop > (stepFive.getBoundingClientRect().top - 550)) {
    imgStep2.style.display = "none";
    imgStep3.style.display = "none";
    imgStep4.style.display = "none";
    imgStep5.style.display = "block";
    imgStep5.style.position = "absolute";
    imgStep5.style.top = '-204px';
      imgStep5.style.right = '117px';
  } 
  // if (document.body.scrollTop < (stepOne.getBoundingClientRect().top + 100)) {
  //   imgStep5.style.position = 'absolute';
  //   imgStep5.style.top = '-123%';
  //   imgStep5.style.right = '190px';
  // }
}

// function scrollTracking(){
//   let block_show = false;
//     if (block_show) {
//         return false;
//     }
//     let wt = $(window).scrollTop();
//     let wh = $(window).height();
//     let et = $('.grid-container').offset().top;
//     let eh = $('.grid-container').outerHeight();
//     let dh = $(document).height();  
//     if (wt + wh >= et || wh + wt == dh || eh + et < wh){
//         block_show = true;
//         $('.grid-container__col-1:eq(0)').fadeIn(300, function(){
//     $(this).next().fadeIn(300, arguments.callee);
//   });
// }