// // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
  if (currentScrollPos > 0) {
    document.getElementById("header-nav").style.backgroundColor = "rgba(255,255,255,.9)";
    document.getElementById("header-nav").style.boxShadow = "0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)";

  } else {
    document.getElementById("header-nav").style.color = "#fff";
    document.getElementById("header-nav").style.backgroundColor = "rgba(255,255,255,0)";
    document.getElementById("header-nav").style.boxShadow = "none";

  }
  prevScrollPos = currentScrollPos;
}



const sideNav = document.getElementById("myNav");
const bodyGetsPushed = document.getElementById("pushNav");

// Open nav overlay
const openNav = () => {
  sideNav.style.width="250px";
  bodyGetsPushed.style.marginLeft="500px";
}
// Close nav overlay
const closeNav = () => {  
  sideNav.style.width="0%";
  bodyGetsPushed.style.margin="0";
}
// Toggle nav
const toggleNav = () => {
    if (sideNav.style.width === "0%") {
      openNav()
    } else {
      closeNav()
    }
}