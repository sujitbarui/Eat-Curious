// gsap.to(".gsap-stacking-pages", {
//   y: "-100%",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: ".gsap-stacked-trigger",
//     pin: true,
//     scrub: true,
//     markers : true,
//     start: "0%",
//     end: () => `+=${document.querySelector('.gsap-stacking-pages').offsetHeight * 4}`,
//   }
// });

// const sections = document.querySelectorAll(".sujit");

// // Loop through each section and apply styles
// sections.forEach(section => {
//   section.style.height = "100vh"; // Set height for each section
//   console.log(section); // Debug: Logs each section element
// });

// // Retrieve the stored height or set it for the first time
// let initialHeight = localStorage.getItem("lockedHeight");

// if (!initialHeight) {
//   initialHeight = window.innerHeight;
//   localStorage.setItem("lockedHeight", initialHeight);
// }

// // ✅ Loop through each section again to set the stored height
// sections.forEach(section => {
//   section.style.height = `${initialHeight}px`;
// });

// // ✅ Fix resize event (loop through all sections)
// window.addEventListener("resize", () => {
//   if (window.innerHeight !== initialHeight) {
//     sections.forEach(section => {
//       section.style.height = `${initialHeight}px`;
//     });
//   }
// });




const elements = document.querySelectorAll("header, .sujit"); // Select both header and sections

// Loop through each element (header + sections) and apply styles
elements.forEach(element => {
  element.style.height = "100vh"; // Set height for each element
  console.log(element); // Debug: Logs each element
});

// Retrieve the stored height or set it for the first time
let initialHeight = localStorage.getItem("lockedHeight");

if (!initialHeight) {
  initialHeight = window.innerHeight;
  localStorage.setItem("lockedHeight", initialHeight);
}

// ✅ Loop through each element again to set the stored height
elements.forEach(element => {
  element.style.height = `${initialHeight}px`;
});

// ✅ Fix resize event (loop through all elements)
window.addEventListener("resize", () => {
  if (window.innerHeight !== initialHeight) {
    elements.forEach(element => {
      element.style.height = `${initialHeight}px`;
    });
  }
});











function createAnimation(element) {
  const tl = gsap.timeline({ paused: true, delay: 1 });

  tl.to(element, {
    scaleY: 0,
    duration: 0.15,
    ease: "cubic-bezier(0.5, 1.51, 0.55, 0.89)"
  })
    .to(element, {
      scaleY: 1,
      duration: 0.15,
      ease: "cubic-bezier(0.5, 1.51, 0.55, 0.89)"
    })
    .to(element, {
      scaleY: 0,
      duration: 0.15,
      ease: "cubic-bezier(0.5, 1.51, 0.55, 0.89)"
    })
    .to(element, {
      scaleY: 1,
      duration: 0.15,
      ease: "cubic-bezier(0.5, 1.51, 0.55, 0.89)"
    });

  ScrollTrigger.create({
    trigger: element,
    start: "top 50%",
    end: "top 20%",
    onEnter: () => tl.play(),
  });

}

createAnimation(".section-6-svg");
createAnimation(".section-10-svg");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.onload = () => {
  document.querySelector(".marquee-magic").style.display = "none";
  setTimeout(() => {
    document.querySelector(".marquee-magic").style.display = "flex";
  }, 50);
};


// gsap.to(".section-9", {
//   scrollTrigger: {
//     trigger: ".section-9",
//     start: "top top",
//     end: "top -100%",
//     pin: true,
//     pinSpacing: false,
//   }
// });

// gsap.from(".section-9img", {
//   filter: "blur(10px)",
//   duration : 2,
//   scrollTrigger: {
//     trigger : ".section-9img img",
//     start : "top 50%",
//     end : "top -100%"
//   }
// })

function scrollRotate() {
  let image = document.getElementById("abc");
  image.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
}

window.onscroll = function () {
  scrollRotate();
};


(function() {

  'use strict';

  const breakpoint = window.matchMedia( '(min-width:768px)' );

  let mySwiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {

	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  return;
      } else if ( breakpoint.matches === false ) {

        return enableSwiper();

      }
  };

  const enableSwiper = function() {

    mySwiper = new Swiper(".mySwiper-special", {

      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });

  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();

})();

