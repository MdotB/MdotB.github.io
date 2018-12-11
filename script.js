// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
  if (currentScrollPos > 895) {
    document.getElementById("header").style.color = "#333";
    document.getElementById("header").style.textShadow = "0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)";

  } else {
    document.getElementById("header").style.color = "white";
    document.getElementById("header").style.boxShadow = "none"

  }
  prevScrollPos = currentScrollPos;
}

// This is to control scroll animations using "ScrollReveal library".
ScrollReveal().reveal(".h2-portfolio", { delay: 500 });
ScrollReveal().reveal(".p4-container", { delay: 900 });
ScrollReveal().reveal(".p1-container", { delay: 900 });
ScrollReveal().reveal(".p2-container", { delay: 900 });
