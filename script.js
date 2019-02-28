// Reveal headerNav on scroll from top.
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)

  const headerNavLinks = document.querySelectorAll(".header-nav-links");
  const burger = document.getElementById("burger-menu");
  if (currentScrollPos > 0) {
    headerNavLinks.forEach(headerLink => headerLink.style.color = "#333");
    burger.style.color = "#333";
    document.getElementById("header-nav")
      .style.backgroundColor = "rgba(255,255,255,.9)";
    document.getElementById("header-nav")
      .style.boxShadow = "0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)";
  } else {
      headerNavLinks.forEach(headerLink => headerLink.style.color = "#fff");
      burger.style.color = "#fff";
      document.getElementById("header-nav").style.backgroundColor = "rgba(255,255,255,0)";
      document.getElementById("header-nav").style.boxShadow = "none";
    }
  prevScrollPos = currentScrollPos;
}



const overlayNav = document.getElementById("overlayNav");
// const pushedBody = document.getElementById("pushNav");

// Open nav overlay
const openNav = () => {
  overlayNav.style.height="100vh";
  // pushedBody.style.marginTop="500px";
}
// Close nav overlay
const closeNav = () => {  
  overlayNav.style.height="0%";
  // pushedBody.style.margin="0";
}
// Toggle nav
const toggleNav = () => {
    if (overlayNav.style.height === "0%") {
      openNav()
    } else {
      closeNav()
    }
}