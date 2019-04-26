const burger = document.getElementById("burger-menu");
const burgerBars = document.querySelectorAll(".bar");
const contactLink = document.getElementById("contact");
const headerNavLinks = document.querySelectorAll(".header-nav-links");
const overlayNav = document.getElementById("overlayNav");

// Reveal headerNav on scroll from top.
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)


  if (currentScrollPos > 0) {
    contactLink.style.background = "rgba(0,0,0,0)";
    // contactLink.style.border = "2px solid #fff"
    headerNavLinks.forEach(headerLink => headerLink.style.color = "#333");
    burgerBars.forEach(burgerBar => burgerBar.style.backgroundColor = "#333");
    document.getElementById("header-nav")
      .style.backgroundColor = "rgba(255,255,255,.9)";
    document.getElementById("header-nav")
      .style.padding = "0"
    document.getElementById("header-nav")
      .style.boxShadow = "0 2px 4px rgba(0,0,0,.5)";
  } else {
      contactLink.style.background = "rgba(0,0,0,0)";
      contactLink.style.border = "1px solid #fff";
      contactLink.addEventListener('mouseover', () => contactLink.style.background = '#2434ad')
      headerNavLinks.forEach(headerLink => headerLink.style.color = "#fff");
      burgerBars.forEach(burgerBar => burgerBar.style.backgroundColor = "#fff");
      document.getElementById("header-nav").style.backgroundColor = "rgba(255,255,255,0)";
      document.getElementById("header-nav").style.boxShadow = "none";
      document.getElementById("header-nav").style.padding = "10px 0";
    }
  prevScrollPos = currentScrollPos;
}

function myFunction(x) {
  x.classList.toggle("change");
}

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