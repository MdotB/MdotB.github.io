// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollPos = currentScrollPos;
}

// This is to control scroll animations using "ScrollReveal library".
ScrollReveal().reveal(".h2-portfolio", { delay: 900 });
ScrollReveal().reveal(".p4-container", { delay: 900 });
ScrollReveal().reveal(".p1-container", { delay: 900 });
ScrollReveal().reveal(".p2-container", { delay: 900 });
