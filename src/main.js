import "./input.css";

import { animate, scroll } from "motion";

//opacity on scroll

document.querySelectorAll(".projekt_container section").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});

//typescript

var app = document.getElementById("type");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter.typeString("I venteværelset").pauseFor(8000).deleteAll().start();

var app = document.getElementById("type2");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("En kort fortælling om en ung keramiker")
  .pauseFor(8000)
  .deleteAll()
  .start();

var app = document.getElementById("type3");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("En reklame til Rosetta")
  .pauseFor(8000)
  .deleteAll()
  .start();

var app = document.getElementById("type4");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("En reklame til Teater Grob")
  .pauseFor(8000)
  .deleteAll()
  .start();

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

//burger menu
function toggleMenu() {
  console.log("hej123");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

timeline(
  [
    [".ball", { y: -300 }, { easing: circOut, duration: 0.5, delay: 0.5 }],
    [".ball", { y: 0 }, { easing: bounce, duration: 1 }],
  ],
  { repeat: Infinity }
);

//parallax video img
document
  .querySelectorAll(".video_number_container")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes = parallaxcontainer.querySelector("img");
    scroll(animate(elementderskalparallaxes, { y: [-400, 400] }), {
      target: elementderskalparallaxes,
    });
  });

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.querySelectorAll(".om_mig_tekst").forEach((parallaxcontainer) => {
      const elementderskalparallaxes =
        parallaxcontainer.querySelector(".hej12");
      scroll(animate(elementderskalparallaxes, { y: [-200, 200] }), {
        target: elementderskalparallaxes,
      });
    });
  } else {
    document.querySelectorAll(".om_mig_tekst").forEach((parallaxcontainer) => {
      const elementderskalparallaxes =
        parallaxcontainer.querySelector(".hej12");
      scroll(animate(elementderskalparallaxes, { y: [0, 0] }), {
        target: elementderskalparallaxes,
      });
    });
  }
}

var x = window.matchMedia("(min-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

//parallax om mig tekst
document.querySelectorAll(".om_mig_tekst").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector(".hej12");
  scroll(animate(elementderskalparallaxes, { y: [-400, 400] }), {
    target: elementderskalparallaxes,
  });
});
