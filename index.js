// //https://alvarotrigo.com/blog/css-animations-scroll/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    // var elementVisible = 150; juster dette tallet for når det skal reveales
    var elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

const main = document.querySelector("main");
const navbar = document.querySelector(".cost-nav");
const hamburger = document.querySelector(".navbar-toggler");

main.addEventListener("click", (e) => {
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
    hamburger.classList.add("collapsed");
  }
});

navbar.addEventListener("click", (e) => {
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
    hamburger.classList.add("collapsed");
  }
});
