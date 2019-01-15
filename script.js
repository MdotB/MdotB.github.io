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

const sideNav = document.getElementById("myNav");
const pushNav = document.getElementById("pushNav");

// Open nav overlay
const openNav = () => {
  sideNav.style.width="250px";
  pushNav.style.marginLeft="500px";
}
// Close nav overlay
const closeNav = () => {
  sideNav.style.width="0%";
  pushNav.style.margin="0";
}
// Toggle nav
const toggleNav = () => {
    if (myNav.style.width === "0%") {
      openNav()
    } else {
      closeNav()
    }
}