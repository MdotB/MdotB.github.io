// // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let prevScrollPos = window.pageYOffset;
// console.log(prevScrollPos);
// window.onscroll = () => {
//   let currentScrollPos = window.pageYOffset;
//   console.log(currentScrollPos)
//   if (currentScrollPos > 895) {
//     document.getElementById("header").style.color = "#333";
//     document.getElementById("header").style.textShadow = "0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)";

//   } else {
//     document.getElementById("header").style.color = "white";
//     document.getElementById("header").style.boxShadow = "none"

//   }
//   prevScrollPos = currentScrollPos;
// }
const navOverlay = document.getElementById("myNav");
// Open nav overlay
const openNav = () => {
  if (window.innerWidth < 500) {
    navOverlay.style.width="100%";
  } else {
    navOverlay.style.width="250px";
  }
}
// Close nav overlay
const closeNav = () => {
  navOverlay.style.width="0%";
}
