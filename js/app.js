// const sidebarToggler = document.getElementById("sidebarToggler");
// const sidebar = document.getElementById("sidebar");

// sidebarToggler.addEventListener("click", (e) => {
//   sidebarToggler.classList.toggle("active");
//   sidebar.classList.toggle("active");
// });
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
  "particles-js",
  "./vendor/particlejs/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);
// section
const home = document.querySelector(".banner");
const about = document.getElementById("about");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

// button
const hometog = document.getElementById("hometog");
const abouttog = document.getElementById("abouttog");
const projecttog = document.getElementById("projecttog");
const contacttog = document.getElementById("contacttog");

hometog.addEventListener("click", (e) => {
  e.preventDefault();
  home.classList.add("show");
  about.classList.remove("show");
  project.classList.remove("show");
  contact.classList.remove("show");
});
abouttog.addEventListener("click", (e) => {
  e.preventDefault();
  about.classList.add("show");
  home.classList.remove("show");
  project.classList.remove("show");
  contact.classList.remove("show");
});
projecttog.addEventListener("click", (e) => {
  e.preventDefault();
  project.classList.add("show");
  home.classList.remove("show");
  about.classList.remove("show");
  contact.classList.remove("show");
});

contacttog.addEventListener("click", (e) => {
  e.preventDefault();
  contact.classList.add("show");
  home.classList.remove("show");
  about.classList.remove("show");
  project.classList.remove("show");
});

// const navItems = document.querySelectorAll(".nav-item");

// // set initial state of menu

// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNav.classList.add("show");
//     menuBranding.classList.add("show");

//     navItems.forEach((item) => item.classList.add("show"));
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNav.classList.remove("show");
//     menuBranding.classList.remove("show");

//     navItems.forEach((item) => item.classList.remove("show"));
//     showMenu = false;
//   }
// }
