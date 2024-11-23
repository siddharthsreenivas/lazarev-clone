gsap.registerPlugin(MorphSVGPlugin);

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 1, // Adjust scroll speed
    lerp: 0.1,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.to('#main',{
    backgroundColor: "#111"
  })
}

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "23vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", (e) => {
      gsap.to(elem.childNodes[3], {
        x: e.x - elem.getBoundingClientRect().x - 90,
        y: e.y - elem.getBoundingClientRect().y - 215,
      });
    });
  });
}
function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", () => {
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
    video.play();
  });
  video.addEventListener("click", () => {
    video.load();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
function textAnimation(){
  var h1 = document.querySelector('#page6 h1')
  var splitted = h1.textContent.split('').map((e)=>`<span>${e}</span>`)
  h1.innerHTML = splitted.join('')
  console.log(splitted);
  
  gsap.from('#page6 h1 span',{
    y: 30,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#page6 h1',
      scroller: '#main',
      // markers: true,
      start: 'top 100%',
      end: 'bottom 70%',
    }
  })

  var uiDesign = document.querySelector('#page5-content .uiux h1')
  var productDesign = document.querySelector('#page5-content .product h1')

  var splittedUi = uiDesign.textContent.split('').map((e)=>`<span>${e}</span>`)
  uiDesign.innerHTML = splittedUi.join('')

  gsap.from('#page5-content .uiux h1 span',{
    y: 30,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#page5-content .uiux h1',
      scroller: '#main',
      // markers: true,
      start: 'top 100%',
      end: 'bottom 70%',
    }
  })

  var splittedProduct = productDesign.textContent.split('').map((e)=>`<span>${e}</span>`)
  productDesign.innerHTML = splittedProduct.join('')

  gsap.from('#page5-content .product h1 span',{
    y: 30,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#page5-content .product',
      scroller: '#main',
      // markers: true,
      start: 'top 100%',
      end: 'bottom 70%',
    }
  })




}
function buttonStickyAnimation(){
  gsap.to('#page5 button',{
    scrollTrigger: {
      trigger: "#page5 button",
      scroller: "#main", // Locomotive's scroll container
      pin: true, // Pin this section,
      start: "top top", // When the top of the section hits the top of the viewport
      end: "+=160%", // The section stays pinned for an additional scroll height
      scrub: true, // Smooth pinning
    },
  })
  gsap.to('#page6 #blue-btn',{
    scrollTrigger: {
      trigger: "#page6 #blue-btn",
      scroller: "#main", // Locomotive's scroll container
      pin: true, // Pin this section,
      // markers: true,
      start: "top top", // When the top of the section hits the top of the viewport
      end: "+=80%", // The section stays pinned for an additional scroll height
      scrub: true, // Smooth pinning
    },
  })
}
function page6Animation() {
  gsap.from("#btm6-part2 h4, #btm6-part3 h4, #btm6-part4 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
function page7Animation() {
  var content = document.querySelector("#page7-top .content");
  var startingVal =
    "M11.711 3.982H2.64V1.59h13.154v13.155h-2.392V5.673L3.485 15.59 1.794 13.9l9.917-9.918Z";
  var hoverVal =
    "M1.794 12.674v2.916H4.71l8.602-8.601-2.917-2.916-8.601 8.6Zm13.773-7.94a.774.774 0 0 0 0-1.097l-1.82-1.82a.774.774 0 0 0-1.097 0L11.227 3.24l2.917 2.917 1.423-1.423Z";

  content.addEventListener("mouseenter", () => {
    gsap.to("#page7-top .content .right path", {
      duration: 0.6,
      morphSVG: hoverVal,
      ease: "power1.inOut",
    });
  });

  content.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.x - content.getBoundingClientRect().x - 200,
      y: e.y - content.getBoundingClientRect().y - 100,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });
  });

  content.addEventListener("mouseleave", () => {
    gsap.to("#page7-top .content .right path", {
      duration: 0.6,
      morphSVG: startingVal,
      ease: "power1.inOut",
    });

    gsap.to("#cursor", {
      opacity: 0,
      scale: 0,
    });
  });
}
function footerAnimation() {
  var content = document.querySelector("footer .contact .left");
  content.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.x - content.getBoundingClientRect().x - 90,
      y: e.y - content.getBoundingClientRect().y - 90,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });
  });

  content.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      opacity: 0,
      scale: 0,
    });
  });
  // ----------------------------------------------
  document.querySelector(".author").addEventListener("mouseenter", () => {
    gsap.to(".author span a", {
      duration: 0.5,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });
  });
  document.querySelector(".author").addEventListener("mouseleave", () => {
    gsap.to(".author span a", {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      ease: "power2.out",
    });
  });
  
}


locomotiveAnimation();
loadingAnimation()
navAnimation()
page2Animation();
page3VideoAnimation();
textAnimation()
buttonStickyAnimation()
page6Animation();
page7Animation();
footerAnimation();
