const burgerBars = document.querySelectorAll(".bar");
const burger = document.getElementById("burger-menu");

// Reveal headerNav on scroll from top.
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)

  const headerNavLinks = document.querySelectorAll(".header-nav-links");
  
  if (currentScrollPos > 0) {
    headerNavLinks.forEach(headerLink => headerLink.style.color = "#333");
    burgerBars.forEach(burgerBar => burgerBar.style.backgroundColor = "#333");
    document.getElementById("header-nav")
      .style.backgroundColor = "rgba(255,255,255,1)";
    document.getElementById("header-nav")
      .style.boxShadow = "0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)";
  } else {
      headerNavLinks.forEach(headerLink => headerLink.style.color = "#fff");
      burgerBars.forEach(burgerBar => burgerBar.style.backgroundColor = "#fff");
      document.getElementById("header-nav").style.backgroundColor = "rgba(255,255,255,0)";
      document.getElementById("header-nav").style.boxShadow = "none";
    }
  prevScrollPos = currentScrollPos;
}

function myFunction(x) {
  x.classList.toggle("change");
}

const overlayNav = document.getElementById("overlayNav");

// Open nav overlay
const openNav = () => {
  overlayNav.style.height="80vh";
  overlayNav.style.borderBottom="3px solid #000";
  overlayNav.style.borderTop="2px solid #000";
}
// Close nav overlay
const closeNav = () => {
  overlayNav.style.height="0%";
  overlayNav.style.border="none"
}
// Toggle nav
const toggleNav = (x) => {
  x.classList.toggle("change")
    if (overlayNav.style.height === "0%") {
      openNav()
    } else {
      closeNav()
    }
}